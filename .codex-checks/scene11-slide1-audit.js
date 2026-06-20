const fs = require("fs");
const http = require("http");
const crypto = require("crypto");
const net = require("net");

const BASE_URL = process.env.AUDIT_URL || "http://localhost:5175/dan-dao-xa/";
const OUT_DIR = process.env.AUDIT_OUT || "/tmp/brief1-scene11-slide1";
const CDP_HOST = "127.0.0.1";
const CDP_PORT = Number(process.env.CDP_PORT || 9222);

fs.mkdirSync(OUT_DIR, { recursive: true });

function httpJson(path, method = "GET") {
  return new Promise((resolve, reject) => {
    const req = http.request({ host: CDP_HOST, port: CDP_PORT, path, method }, (res) => {
      let data = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(JSON.parse(data)));
    });
    req.on("error", reject);
    req.end();
  });
}

function encodeFrame(payload) {
  const data = Buffer.from(payload);
  const header = data.length < 126 ? Buffer.alloc(6) : Buffer.alloc(8);
  header[0] = 0x81;
  if (data.length < 126) {
    header[1] = 0x80 | data.length;
    crypto.randomBytes(4).copy(header, 2);
  } else {
    header[1] = 0x80 | 126;
    header.writeUInt16BE(data.length, 2);
    crypto.randomBytes(4).copy(header, 4);
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
    if ((first & 0x0f) === 1) {
      const payload = buffer.subarray(offset + headerLength + maskLength, frameEnd);
      messages.push(payload.toString("utf8"));
    }
    offset = frameEnd;
  }
  return { messages, rest: buffer.subarray(offset) };
}

function connect(wsUrl) {
  const url = new URL(wsUrl);
  return new Promise((resolve, reject) => {
    const key = crypto.randomBytes(16).toString("base64");
    const socket = net.connect(Number(url.port), url.hostname);
    let handshake = Buffer.alloc(0);
    let buffer = Buffer.alloc(0);
    let nextId = 1;
    const pending = new Map();
    let ready = false;

    socket.on("connect", () => {
      socket.write([
        `GET ${url.pathname}${url.search} HTTP/1.1`,
        `Host: ${url.hostname}:${url.port}`,
        "Upgrade: websocket",
        "Connection: Upgrade",
        `Sec-WebSocket-Key: ${key}`,
        "Sec-WebSocket-Version: 13",
        "",
        "",
      ].join("\r\n"));
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
        let parsed;
        try {
          parsed = JSON.parse(message);
        } catch {
          return;
        }
        if (!pending.has(parsed.id)) return;
        const { res, rej } = pending.get(parsed.id);
        pending.delete(parsed.id);
        parsed.error ? rej(new Error(parsed.error.message)) : res(parsed.result);
      });
    });
    socket.on("error", reject);
  });
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function audit(width, height) {
  const tab = await httpJson(`/json/new?${encodeURIComponent(BASE_URL)}`, "PUT");
  const client = await connect(tab.webSocketDebuggerUrl);
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 768 });
  await client.send("Page.navigate", { url: BASE_URL });
  await wait(1600);

  const evalExpr = (expression) =>
    client.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });

  await evalExpr(`(() => {
    const scene = document.querySelector('.scene11');
    if (!scene) return;
    const top = scene.offsetTop + 2;
    window.scrollTo(0, top);
  })();`);
  await wait(900);
  await evalExpr(`(() => {
    const scene = document.querySelector('.scene11');
    if (!scene) return;
    const top = scene.offsetTop + 2;
    if (Math.abs(scene.getBoundingClientRect().top) > 4) window.scrollTo(0, top);
  })();`);
  await wait(500);

  const notes = (await evalExpr(`(() => {
    const rect = (node) => {
      const r = node?.getBoundingClientRect();
      return r ? {left:r.left, top:r.top, right:r.right, bottom:r.bottom, width:r.width, height:r.height} : null;
    };
    const edgeColors = (() => {
      const canvas = document.createElement('canvas');
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      const ctx = canvas.getContext('2d');
      return { note: 'visual screenshot saved for edge check' };
    })();
    return {
      viewport: [innerWidth, innerHeight],
      scrollY,
      scrollWidth: document.documentElement.scrollWidth,
      step: rect(document.querySelector('.scene11-step--part1')),
      stack: rect(document.querySelector('.scene11-slide1-bg-stack')),
      stackWood: rect(document.querySelector('.scene11-slide1-bg--wood')),
      stackCollage: rect(document.querySelector('.scene11-slide1-bg--collage')),
      artboard: rect(document.querySelector('.scene11-artboard--part1')),
      wood: rect(document.querySelector('.scene11__wood-bg')),
      objectFit: getComputedStyle(document.querySelector('.scene11-slide1-bg--wood')).objectFit,
      objectPosition: getComputedStyle(document.querySelector('.scene11-slide1-bg--wood')).objectPosition,
      edgeColors
    };
  })()`)).result.value;

  const shot = await client.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
  const file = `${OUT_DIR}/scene11-slide1-${width}x${height}.png`;
  fs.writeFileSync(file, Buffer.from(shot.data, "base64"));
  client.close();
  return { width, height, screenshot: file, notes };
}

(async () => {
  const viewports = [[1366, 768], [1536, 864], [1920, 1080], [1024, 768], [768, 1024], [430, 932], [390, 844], [360, 800]];
  const results = [];
  for (const viewport of viewports) results.push(await audit(...viewport));
  const out = `${OUT_DIR}/scene11-slide1-audit.json`;
  fs.writeFileSync(out, JSON.stringify(results, null, 2));
  console.log(out);
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
