const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const net = require("net");

const BASE_URL = process.env.AUDIT_URL || "http://localhost:5175/dan-dao-xa/";
const OUT_DIR = process.env.AUDIT_OUT || "/tmp/brief1-mobile-audit";
const CDP_HOST = "127.0.0.1";
const CDP_PORT = Number(process.env.CDP_PORT || 9222);

fs.mkdirSync(OUT_DIR, { recursive: true });

function httpJson(path, method = "GET") {
  return new Promise((resolve, reject) => {
    const req = http.request({ host: CDP_HOST, port: CDP_PORT, path, method }, (res) => {
      let data = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });
    });
    req.on("error", reject);
    req.end();
  });
}

function parseWsUrl(wsUrl) {
  const url = new URL(wsUrl);
  return { host: url.hostname, port: Number(url.port), path: `${url.pathname}${url.search}` };
}

function encodeFrame(payload) {
  const data = Buffer.from(payload);
  let header;
  if (data.length < 126) {
    header = Buffer.alloc(6);
    header[0] = 0x81;
    header[1] = 0x80 | data.length;
    crypto.randomBytes(4).copy(header, 2);
  } else if (data.length < 65536) {
    header = Buffer.alloc(8);
    header[0] = 0x81;
    header[1] = 0x80 | 126;
    header.writeUInt16BE(data.length, 2);
    crypto.randomBytes(4).copy(header, 4);
  } else {
    header = Buffer.alloc(14);
    header[0] = 0x81;
    header[1] = 0x80 | 127;
    header.writeBigUInt64BE(BigInt(data.length), 2);
    crypto.randomBytes(4).copy(header, 10);
  }

  const mask = header.subarray(header.length - 4);
  const masked = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 1) masked[i] = data[i] ^ mask[i % 4];
  return Buffer.concat([header, masked]);
}

function decodeFrames(buffer) {
  const messages = [];
  let offset = 0;
  while (offset + 2 <= buffer.length) {
    const first = buffer[offset];
    const second = buffer[offset + 1];
    let length = second & 0x7f;
    let headerLength = 2;
    if (length === 126) {
      if (offset + 4 > buffer.length) break;
      length = buffer.readUInt16BE(offset + 2);
      headerLength = 4;
    } else if (length === 127) {
      if (offset + 10 > buffer.length) break;
      length = Number(buffer.readBigUInt64BE(offset + 2));
      headerLength = 10;
    }
    const masked = Boolean(second & 0x80);
    const maskLength = masked ? 4 : 0;
    const frameEnd = offset + headerLength + maskLength + length;
    if (frameEnd > buffer.length) break;
    const payload = buffer.subarray(offset + headerLength + maskLength, frameEnd);
    if ((first & 0x0f) === 1) messages.push(payload.toString("utf8"));
    offset = frameEnd;
  }
  return { messages, rest: buffer.subarray(offset) };
}

function connect(wsUrl) {
  const { host, port, path } = parseWsUrl(wsUrl);
  return new Promise((resolve, reject) => {
    const key = crypto.randomBytes(16).toString("base64");
    const socket = net.connect(port, host);
    let handshake = Buffer.alloc(0);
    let buffer = Buffer.alloc(0);
    let nextId = 1;
    const pending = new Map();
    let ready = false;

    socket.on("connect", () => {
      socket.write(
        [
          `GET ${path} HTTP/1.1`,
          `Host: ${host}:${port}`,
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Key: ${key}`,
          "Sec-WebSocket-Version: 13",
          "",
          "",
        ].join("\r\n")
      );
    });

    socket.on("data", (chunk) => {
      if (!ready) {
        handshake = Buffer.concat([handshake, chunk]);
        const marker = handshake.indexOf("\r\n\r\n");
        if (marker === -1) return;
        ready = true;
        buffer = handshake.subarray(marker + 4);
        resolve({
          send(method, params = {}) {
            const id = nextId++;
            socket.write(encodeFrame(JSON.stringify({ id, method, params })));
            return new Promise((res, rej) => pending.set(id, { res, rej }));
          },
          close() {
            socket.end();
          },
        });
      } else {
        buffer = Buffer.concat([buffer, chunk]);
      }

      const decoded = decodeFrames(buffer);
      buffer = decoded.rest;
      decoded.messages.forEach((message) => {
        const parsed = JSON.parse(message);
        if (!parsed.id || !pending.has(parsed.id)) return;
        const { res, rej } = pending.get(parsed.id);
        pending.delete(parsed.id);
        if (parsed.error) rej(new Error(parsed.error.message));
        else res(parsed.result);
      });
    });

    socket.on("error", reject);
  });
}

async function wait(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function auditViewport(width, height) {
  const tab = await httpJson(`/json/new?${encodeURIComponent(BASE_URL)}`, "PUT");
  const client = await connect(tab.webSocketDebuggerUrl);
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 768,
  });
  await client.send("Page.navigate", { url: BASE_URL });
  await wait(1800);

  const evalExpr = async (expression) =>
    client.send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true,
    });

  const notes = {};
  const capture = async (name) => {
    const shot = await client.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
    const file = `${OUT_DIR}/${width}x${height}-${name}.png`;
    fs.writeFileSync(file, Buffer.from(shot.data, "base64"));
    return file;
  };

  notes.initial = (
    await evalExpr(`(() => ({
      viewport: [innerWidth, innerHeight],
      scrollWidth: document.documentElement.scrollWidth,
      bodyWidth: document.body.scrollWidth
    }))()`)
  ).result.value;

  await evalExpr(`document.querySelector('.scene01-scene02-bridge')?.scrollIntoView({block:'center'});`);
  await wait(450);
  notes.bridge = (
    await evalExpr(`(() => {
      const bridge = document.querySelector('.scene01-scene02-bridge');
      const img = document.querySelector('.page01-bridge-hands');
      const scene02Text = document.querySelector('.scene02-history');
      const rect = (node) => {
        const r = node?.getBoundingClientRect();
        return r ? {left:r.left, top:r.top, right:r.right, bottom:r.bottom, width:r.width, height:r.height} : null;
      };
      return { bridge: rect(bridge), image: rect(img), scene02: rect(scene02Text) };
    })()`)
  ).result.value;
  const bridgeShot = await capture("bridge");

  await evalExpr(`document.querySelector('.scene06-steps')?.scrollIntoView({block:'start'});`);
  await wait(550);
  const scene06A = await capture("scene06-group1");
  notes.scene06Group1 = (
    await evalExpr(`(() => {
      const s = document.querySelector('.scene06-steps');
      const sticky = document.querySelector('.scene06-steps__sticky');
      const stage = document.querySelector('.scene06-steps__stage');
      const active = document.querySelector('.scene06-steps__group.is-active')?.className || '';
      const rect = (node) => {
        const r = node?.getBoundingClientRect();
        return r ? {left:r.left, top:r.top, right:r.right, bottom:r.bottom, width:r.width, height:r.height} : null;
      };
      return { section: rect(s), sticky: rect(sticky), stage: rect(stage), active };
    })()`)
  ).result.value;

  await evalExpr(`window.scrollBy(0, Math.round(innerHeight * 2.2));`);
  await wait(550);
  const scene06B = await capture("scene06-mid");
  notes.scene06Mid = (
    await evalExpr(`document.querySelector('.scene06-steps__group.is-active')?.className || ''`)
  ).result.value;

  await evalExpr(`document.querySelector('.scene10')?.scrollIntoView({block:'center'});`);
  await wait(800);
  await evalExpr(`document.querySelector('.scene10-player__info')?.click();`);
  await wait(550);
  const scene10Info = await capture("scene10-info");
  notes.scene10Info = (
    await evalExpr(`(() => {
      const layout = document.querySelector('.scene10-player__info-layout');
      const detail = document.querySelector('.scene10-player__detail');
      const card = document.querySelector('.scene10-player__info-card');
      const rect = (node) => {
        const r = node?.getBoundingClientRect();
        return r ? {left:r.left, top:r.top, right:r.right, bottom:r.bottom, width:r.width, height:r.height} : null;
      };
      return {
        selected: document.querySelector('.scene10-player__now-playing strong')?.textContent || '',
        layout: rect(layout),
        detail: rect(detail),
        card: rect(card),
        flexDirection: getComputedStyle(layout).flexDirection
      };
    })()`)
  ).result.value;

  await evalExpr(`document.querySelector('.scene10-player__detail')?.click();`);
  await wait(500);
  const scene10Modal = await capture("scene10-modal");
  notes.scene10Modal = (
    await evalExpr(`(() => {
      const close = document.querySelector('.scene10-player__detail-modal-close');
      const image = document.querySelector('.scene10-player__detail-modal-image');
      const rect = (node) => {
        const r = node?.getBoundingClientRect();
        return r ? {left:r.left, top:r.top, right:r.right, bottom:r.bottom, width:r.width, height:r.height} : null;
      };
      return { close: rect(close), image: rect(image), alt: image?.alt || '' };
    })()`)
  ).result.value;
  await evalExpr(`document.querySelector('.scene10-player__detail-modal-close')?.click();`);
  await wait(250);

  const lateScenes = {};
  for (const selector of [".scene11", ".scene12", ".scene13", ".scene14", ".scene15"]) {
    await evalExpr(`document.querySelector('${selector}')?.scrollIntoView({block:'center'});`);
    await wait(450);
    lateScenes[selector] = (
      await evalExpr(`(() => {
        const scene = document.querySelector('${selector}');
        const art = scene?.querySelector('[class$="__artboard"], .scene11-artboard');
        const rect = (node) => {
          const r = node?.getBoundingClientRect();
          return r ? {left:r.left, top:r.top, right:r.right, bottom:r.bottom, width:r.width, height:r.height} : null;
        };
        return { scene: rect(scene), artboard: rect(art) };
      })()`)
    ).result.value;
  }
  notes.lateScenes = lateScenes;
  const lateShot = await capture("late-scenes");

  await client.close();
  return { width, height, screenshots: { bridgeShot, scene06A, scene06B, scene10Info, scene10Modal, lateShot }, notes };
}

(async () => {
  const viewports = [
    [486, 1059],
    [430, 932],
    [390, 844],
    [360, 800],
    [1366, 768],
  ];
  const results = [];
  for (const [width, height] of viewports) {
    results.push(await auditViewport(width, height));
  }
  const out = `${OUT_DIR}/mobile-critical-audit.json`;
  fs.writeFileSync(out, JSON.stringify(results, null, 2));
  console.log(out);
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
