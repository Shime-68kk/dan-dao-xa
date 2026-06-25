import { useEffect, useMemo, useRef, useState } from "react";
import scene11WoodBg from "../../../assets/page01/scene11/scene11-wood-bg.png";
import scene11CollageOverlay from "../../../assets/page01/scene11/scene11-collage-overlay.png";
import scene11TrongComBg from "../../../assets/page01/scene11/scene11-trong-com-bg.png";
import scene11MuaTrenPhoHueBg from "../../../assets/page01/scene11/scene11-mua-tren-pho-hue-bg.png";
import scene11BacBlingBg from "../../../assets/page01/scene11/scene11-bac-bling-bg.png";
import scene11BacBlingThumb from "../../../assets/page01/scene11/scene11-bac-bling-thumb.png";
import "./Scene11ModernAudience.css";

const SCENE11_WIDTH = 1366;
const SCENE11_HEIGHT = 812;
const SCENE11_TOTAL_STEPS = 4;
const SCENE11_STEP_HEIGHT_VH = 100;
const SCENE11_HOLD_EXTRA_VH = 20;
const SCENE11_SCROLL_VH = SCENE11_TOTAL_STEPS * SCENE11_STEP_HEIGHT_VH + SCENE11_HOLD_EXTRA_VH;
const SCENE11_MOBILE_STAGE_PADDING = 24;
const TRONG_COM_YOUTUBE_URL = "https://www.youtube.com/watch?v=nXiwlKJSkHY&list=RDnXiwlKJSkHY&start_radio=1";
const MUA_TREN_PHO_HUE_YOUTUBE_URL = "https://www.youtube.com/watch?v=48XgscozT-A&list=RD48XgscozT-A&start_radio=1";
const BAC_BLING_YOUTUBE_URL = "https://www.youtube.com/watch?v=CL13X-8o4h0&list=RDCL13X-8o4h0&start_radio=1";
const SCENE11_SHARED_PERFORMANCE_COPY =
  "Sự dịch chuyển này thể hiện ngày càng rõ trên các sân khấu giải trí đại chúng. Trong chương trình Anh Trai Vượt Ngàn Chông Gai, tiết mục Trống cơm gây ấn tượng khi đưa tiếng đàn bầu vào một bản phối hiện đại, tạo nên sự giao thoa giữa chất liệu dân gian và ngôn ngữ biểu diễn đương đại. Tương tự, tiết mục Mưa trên phố Huế cũng thu hút sự chú ý của khán giả khi kết hợp âm thanh của đàn tranh, đàn tỳ bà cùng nhiều yếu tố âm nhạc truyền thống trong một không gian trình diễn mới mẻ.";

function getScene11Scale() {
  if (typeof window === "undefined") return 1;

  const isNarrowViewport = window.innerWidth < 768;
  const availableWidth = isNarrowViewport
    ? Math.max(1, window.innerWidth - SCENE11_MOBILE_STAGE_PADDING)
    : window.innerWidth;
  const availableHeight = isNarrowViewport
    ? Math.max(1, window.innerHeight - SCENE11_MOBILE_STAGE_PADDING)
    : window.innerHeight;
  const widthScale = availableWidth / SCENE11_WIDTH;
  const heightScale = availableHeight / SCENE11_HEIGHT;
  return Math.min(widthScale, heightScale);
}

const SCENE11_STEPS = [
  {
    id: "part-1",
    label: "Part 1",
    intro:
      "Nếu trước đây các nhạc cụ dân tộc chủ yếu xuất hiện trong chèo, ca trù, cải lương hay các dàn nhạc truyền thống thì những năm gần đây, chúng đang dần bước ra khỏi không gian biểu diễn quen thuộc để tiếp cận công chúng trẻ theo những cách mới.",
    chartData: [
      { year: "2024", value: 6.8, label: "2024: 6,8%" },
      { year: "2025", value: 15.1, label: "2025: 15,1%" },
    ],
    sourceLines: [
      "Theo báo cáo Vietnam Digital Music",
      "Landscape 2024-2026 của RMIT Việt Nam",
    ],
    body:
      "Xu hướng này phần nào được phản ánh qua sự thay đổi trong thị hiếu âm nhạc của khán giả Việt Nam. Theo báo cáo Vietnam Digital Music Landscape 2024-2026 của RMIT Việt Nam, tỷ lệ thể loại âm nhạc được yêu thích cho thấy nhạc truyền thống đã tăng từ 6,8% lên 15,1% chỉ sau một năm khảo sát. Dù vẫn chưa thể cạnh tranh với các dòng nhạc đại chúng như pop hay ballad, mức tăng hơn gấp đôi cho thấy âm nhạc truyền thống đang dần tìm được vị trí rõ nét hơn trong đời sống âm nhạc đương đại.",
  },
  {
    id: "part-2",
    label: "Part 2",
    title: "TRỐNG CƠM",
    body:
      "Sự dịch chuyển này thể hiện ngày càng rõ trên các sân khấu giải trí đại chúng. Trong chương trình Anh Trai Vượt Ngàn Chông Gai, tiết mục Trống cơm gây ấn tượng khi đưa tiếng đàn bầu vào một bản phối hiện đại, tạo nên sự giao thoa giữa chất liệu dân gian và ngôn ngữ biểu diễn đương đại. Tương tự, tiết mục Mưa trên phố Huế cũng thu hút sự chú ý của khán giả khi kết hợp âm thanh của đàn tranh, đàn tỳ bà cùng nhiều yếu tố âm nhạc truyền thống trong một không gian trình diễn mới mẻ.",
    viewCountLines: [
      "Lượt xem trên Youtube tính đến t6/2026",
      "Trống cơm: 15.658.099 lượt xem",
    ],
    youtubeUrl: TRONG_COM_YOUTUBE_URL,
  },
  {
    id: "part-3",
    label: "Part 3",
    titleLines: ["MƯA TRÊN", "PHỐ HUẾ"],
    body:
      "Sự dịch chuyển này thể hiện ngày càng rõ trên các sân khấu giải trí đại chúng. Trong chương trình Anh Trai Vượt Ngàn Chông Gai, tiết mục Trống cơm gây ấn tượng khi đưa tiếng đàn bầu vào một bản phối hiện đại, tạo nên sự giao thoa giữa chất liệu dân gian và ngôn ngữ biểu diễn đương đại. Tương tự, tiết mục Mưa trên phố Huế cũng thu hút sự chú ý của khán giả khi kết hợp âm thanh của đàn tranh, đàn tỳ bà cùng nhiều yếu tố âm nhạc truyền thống trong một không gian trình diễn mới mẻ.",
    viewCountLines: [
      "Lượt xem trên Youtube tính đến t6/2026",
      "Mưa trên phố huế: 2.948.373 lượt xem",
    ],
    youtubeUrl: MUA_TREN_PHO_HUE_YOUTUBE_URL,
  },
  {
    id: "part-4",
    label: "Part 4",
    title: "BẮC BLING",
    body:
      "Không chỉ trên các sân khấu truyền hình, nhạc cụ dân tộc còn xuất hiện ngày càng nhiều trong các sản phẩm âm nhạc đại chúng. Những ca khúc như Bắc Bling của Hòa Minzy hay nhiều dự án kết hợp giữa dân gian với pop, electronic,... đã cho thấy khả năng thích nghi mạnh mẽ của âm nhạc truyền thống trong bối cảnh mới. Thay vì đứng tách biệt với đời sống hiện đại, các nhạc cụ dân tộc đang trở thành chất liệu sáng tạo để các nghệ sĩ xây dựng bản sắc riêng.",
    viewCountLines: [
      "Lượt xem trên Youtube tính đến t6/2026",
      "Bắc Bling: 314.038.552 lượt xem",
    ],
    youtubeUrl: BAC_BLING_YOUTUBE_URL,
  },
];

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

function Scene11Chart({ data, isActive }) {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const maxValue = 20;
  const width = 360;
  const height = 260;
  const margin = { top: 20, right: 20, bottom: 34, left: 44 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const barWidth = 78;
  const yTicks = [0, 5, 10, 15, 20];

  const bars = data.map((item, index) => {
    const barHeight = (item.value / maxValue) * plotHeight;
    return {
      ...item,
      x: margin.left + 42 + index * 150,
      y: margin.top + plotHeight - barHeight,
      height: barHeight,
      index,
    };
  });

  return (
    <div className="scene11-chart" data-ready={isActive ? "true" : "false"}>
      <svg
        className="scene11-chart__svg"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Tỷ lệ yêu thích nhạc truyền thống tăng từ 6,8% năm 2024 lên 15,1% năm 2025"
      >
        <g className="scene11-chart__grid">
          {yTicks.map((tick) => {
            const y = margin.top + plotHeight - (tick / maxValue) * plotHeight;
            return (
              <g key={tick}>
                <text x={margin.left - 9} y={y + 4} textAnchor="end">
                  {tick}%
                </text>
                <line x1={margin.left} x2={width - margin.right} y1={y} y2={y} />
              </g>
            );
          })}
        </g>

        <g className="scene11-chart__growth-arrow" aria-hidden="true">
          <path
            className="scene11-chart__arrow-shadow"
            d="M 80 126 C 104 124 128 105 143 77 C 150 61 154 45 157 33"
            fill="none"
          />
          <path
            className="scene11-chart__arrow-body"
            d="M 80 126 C 104 124 128 105 143 77 C 150 61 154 45 157 33"
            fill="none"
          />
          <path
            className="scene11-chart__arrow-highlight"
            d="M 91 119 C 113 113 133 91 147 59"
            fill="none"
          />
          <path
            className="scene11-chart__arrow-head"
            d="M 157 29 C 163 48 169 66 178 84 C 160 76 143 69 124 64 C 139 56 150 44 157 29 Z"
          />
        </g>

        <g className="scene11-chart__bars">
          {bars.map((bar) => (
            <g key={bar.year}>
              <rect
                className={`scene11-chart__bar scene11-chart__bar--${bar.year}`}
                x={bar.x}
                y={bar.y}
                width={barWidth}
                height={bar.height}
                rx="10"
                ry="10"
                tabIndex="0"
                role="button"
                aria-label={bar.label}
                onMouseEnter={() => setActiveTooltip(bar)}
                onMouseLeave={() => setActiveTooltip(null)}
                onFocus={() => setActiveTooltip(bar)}
                onBlur={() => setActiveTooltip(null)}
                onClick={() => setActiveTooltip((current) => (current?.year === bar.year ? null : bar))}
                onTouchStart={() => setActiveTooltip(bar)}
              />
              <text
                className="scene11-chart__x-label"
                x={bar.x + barWidth / 2}
                y={height - 12}
                textAnchor="middle"
              >
                {bar.year}
              </text>
            </g>
          ))}
        </g>
      </svg>

      {activeTooltip ? (
        <div
          className="scene11-chart__tooltip"
          style={{
            left: `${activeTooltip.x + barWidth / 2}px`,
            top: `${activeTooltip.y - 18}px`,
          }}
        >
          {activeTooltip.label}
        </div>
      ) : null}
    </div>
  );
}

export default function Scene11ModernAudience() {
  const scene11Ref = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [pinState, setPinState] = useState("before");
  const [sceneProgress, setSceneProgress] = useState(0);
  const [part2Progress, setPart2Progress] = useState(0);
  const [part3Progress, setPart3Progress] = useState(0);
  const [part4Progress, setPart4Progress] = useState(0);
  const [pinDebugRect, setPinDebugRect] = useState({ top: 0, bottom: 0 });
  const [scale, setScale] = useState(getScene11Scale);

  const part1 = useMemo(() => SCENE11_STEPS[0], []);
  const part2 = useMemo(() => SCENE11_STEPS[1], []);
  const part3 = useMemo(() => SCENE11_STEPS[2], []);
  const part4 = useMemo(() => SCENE11_STEPS[3], []);
  const debugScene11Pin = useMemo(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).has("debugScene11Pin");
  }, []);

  useEffect(() => {
    let frame = 0;
    let lastWidth = typeof window !== "undefined" ? window.innerWidth : 0;

    const updateScale = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const visualViewport = window.visualViewport;
        
        // Bỏ qua cập nhật scale khi đang zoom
        const isZoomed = visualViewport && Math.abs(visualViewport.scale - 1) > 0.05;
        if (isZoomed) return;

        const newWidth = window.innerWidth;
        const isMobile = newWidth < 768 || (typeof window !== "undefined" && 'ontouchstart' in window);
        if (isMobile && newWidth === lastWidth) return;

        lastWidth = newWidth;
        setScale(getScene11Scale());
      });
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    window.addEventListener("orientationchange", updateScale);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateScale);
      window.removeEventListener("orientationchange", updateScale);
    };
  }, []);

  useEffect(() => {
    const node = scene11Ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsActive(true);
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;

    const updatePin = () => {
      if (!scene11Ref.current) return;
      if (frame) window.cancelAnimationFrame(frame);

      frame = window.requestAnimationFrame(() => {
        const rect = scene11Ref.current.getBoundingClientRect();
        const viewportH = window.innerHeight || 1;
        const totalScrollable = Math.max(1, scene11Ref.current.offsetHeight - viewportH);
        const progress = clamp(-rect.top / totalScrollable);
        let nextPinState = "active";

        if (rect.top > 0) {
          nextPinState = "before";
        } else if (rect.bottom <= viewportH) {
          nextPinState = "after";
        }

        const nextPart2Progress = clamp((progress - 0.2) / 0.075);
        const nextPart3Progress = clamp((progress - 0.43) / 0.075);
        const nextPart4Progress = clamp((progress - 0.66) / 0.09);
        setPinState(nextPinState);
        setSceneProgress(progress);
        setPart2Progress(nextPart2Progress);
        setPart3Progress(nextPart3Progress);
        setPart4Progress(nextPart4Progress);
        if (debugScene11Pin) {
          setPinDebugRect({
            top: Math.round(rect.top),
            bottom: Math.round(rect.bottom),
          });
        }
      });
    };

    const handleResize = () => {
      const visualViewport = window.visualViewport;
      const isZoomed = visualViewport && Math.abs(visualViewport.scale - 1) > 0.05;
      if (isZoomed) return;
      updatePin();
    };

    updatePin();
    window.addEventListener("scroll", updatePin, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", updatePin);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updatePin);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", updatePin);
    };
  }, [debugScene11Pin]);

  const part1LayerStyle = {
    opacity: 1 - part2Progress,
    pointerEvents: part2Progress < 0.2 ? "auto" : "none",
    "--scene11-motion-y": `${-18 * part2Progress}px`,
    "--scene11-motion-scale": 1 - 0.015 * part2Progress,
  };

  const part2LayerStyle = {
    opacity: part2Progress * (1 - part3Progress),
    pointerEvents: part2Progress > 0.8 && part3Progress < 0.2 ? "auto" : "none",
    "--scene11-motion-y": `${28 * (1 - part2Progress) - 18 * part3Progress}px`,
    "--scene11-motion-scale": 1 + 0.015 * (1 - part2Progress) - 0.015 * part3Progress,
  };

  const part3LayerStyle = {
    opacity: part3Progress * (1 - part4Progress),
    pointerEvents: part3Progress > 0.8 && part4Progress < 0.2 ? "auto" : "none",
    "--scene11-motion-y": `${26 * (1 - part3Progress) - 18 * part4Progress}px`,
    "--scene11-motion-scale": 1 + 0.015 * (1 - part3Progress) - 0.015 * part4Progress,
  };

  const part4LayerStyle = {
    opacity: part4Progress,
    pointerEvents: part4Progress > 0.8 ? "auto" : "none",
    "--scene11-motion-y": `${26 * (1 - part4Progress)}px`,
    "--scene11-motion-scale": 1 + 0.015 * (1 - part4Progress),
  };

  const sharedCopyIn = clamp((sceneProgress - 0.2) / 0.075);
  const sharedCopyOut = clamp((sceneProgress - 0.66) / 0.09);
  const sharedPerformanceCopyStyle = {
    opacity: sharedCopyIn * (1 - sharedCopyOut),
    "--scene11-shared-copy-y": `${10 * (1 - sharedCopyIn)}px`,
  };

  return (
    <section
      ref={scene11Ref}
      className="scene11"
      aria-label="Nhạc cụ dân tộc tiếp cận công chúng trẻ"
      style={{
        "--scene11-scale": scale,
        "--scene11-step-count": SCENE11_TOTAL_STEPS,
        "--scene11-scroll-vh": `${SCENE11_SCROLL_VH}svh`,
      }}
    >
      <div className={`scene11-pin scene11-pin--${pinState}`}>
        <div className="scene11-stage">
          <section
            className={`scene11-step scene11-step--part1${isActive ? " is-visible" : ""}`}
            data-step={part1.id}
            aria-label="Sự trở lại của nhạc truyền thống trong thị hiếu khán giả"
            style={part1LayerStyle}
          >
            <div className="scene11-slide1-bg-stack" aria-hidden="true">
              <img
                className="scene11-slide1-bg scene11-slide1-bg--wood"
                src={scene11WoodBg}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <img
                className="scene11-slide1-bg scene11-slide1-bg--collage scene11-reveal scene11-reveal--bg"
                src={scene11CollageOverlay}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="scene11-artboard scene11-artboard--part1 scene11-part1">
              <img className="scene11__wood-bg" src={scene11WoodBg} alt="" loading="lazy" decoding="async" />
              <img
                className="scene11__collage scene11-reveal scene11-reveal--bg"
                src={scene11CollageOverlay}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <div className="scene11__shade" aria-hidden="true" />

              <p className="scene11__intro scene11-reveal scene11-reveal--intro">{part1.intro}</p>

              <div className="scene11__chart-wrap scene11-reveal scene11-reveal--chart">
                <Scene11Chart data={part1.chartData} isActive={isActive && part2Progress < 0.55} />
              </div>

              <div className="scene11__callout scene11-reveal scene11-reveal--callout" aria-label="Tăng hơn 2 lần chỉ sau 1 năm">
                <span>TĂNG HƠN</span>
                <strong>2 LẦN</strong>
                <span>CHỈ SAU 1 NĂM</span>
              </div>

              <p className="scene11__source scene11-reveal scene11-reveal--source">
                {part1.sourceLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>

              <p className="scene11__body scene11-reveal scene11-reveal--body"><strong>{part1.body}</strong></p>
            </div>
          </section>

          <section
            className={`scene11-step scene11-step--part2${part2Progress > 0.05 ? " is-visible" : ""}`}
            data-step={part2.id}
            aria-label="Trống cơm case study"
            style={part2LayerStyle}
          >
            <img
              className="scene11-fullbleed-bg scene11-fullbleed-bg--part2"
              src={scene11TrongComBg}
              alt=""
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
            <div className="scene11-fullbleed-shade scene11-fullbleed-shade--part2" aria-hidden="true" />
            <div className="scene11-artboard scene11-artboard--part2 scene11-part2">
              <img className="scene11-part2__bg" src={scene11TrongComBg} alt="" loading="lazy" decoding="async" />
              <div className="scene11-part2__shade" aria-hidden="true" />

              <a
                className="scene11-youtube-card scene11-step-reveal scene11-step-reveal--video"
                href={part2.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mở video Trống cơm trên YouTube"
              >
                <img
                  className="scene11-youtube-card__image"
                  src={scene11TrongComBg}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className="scene11-youtube-card__veil" aria-hidden="true" />
                <div className="scene11-youtube-card__title" aria-hidden="true">
                  <strong>TRỐNG CƠM - TỰ LONG, SOOBIN,</strong>
                  <span>YEAH1 MUSIC</span>
                </div>
                <span className="scene11-youtube-card__play" aria-hidden="true">
                  <svg viewBox="0 0 84 58" focusable="false">
                    <rect width="84" height="58" rx="14" />
                    <path d="M 35 18 L 35 40 L 55 29 Z" />
                  </svg>
                </span>
                <span className="scene11-youtube-card__watch" aria-hidden="true">
                  Watch on <strong>YouTube</strong>
                </span>
              </a>

              <h2 className="scene11-part2__title scene11-step-reveal scene11-step-reveal--title">
                {part2.title}
              </h2>

              <div className="scene11-part2__youtube scene11-step-reveal scene11-step-reveal--youtube" aria-hidden="true">
                <span className="scene11-part2__youtube-icon">
                  <svg viewBox="0 0 58 40" focusable="false">
                    <rect width="58" height="40" rx="9" />
                    <path d="M 24 12 L 24 28 L 39 20 Z" />
                  </svg>
                </span>
                <span>YouTube</span>
              </div>

              <p className="scene11-part2__views scene11-step-reveal scene11-step-reveal--views">
                {part2.viewCountLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            </div>
          </section>

          <section
            className={`scene11-step scene11-step--part3${part3Progress > 0.05 ? " is-visible" : ""}`}
            data-step={part3.id}
            aria-label="Mưa trên phố Huế case study"
            style={part3LayerStyle}
          >
            <img
              className="scene11-fullbleed-bg scene11-fullbleed-bg--part3"
              src={scene11MuaTrenPhoHueBg}
              alt=""
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
            <div className="scene11-fullbleed-shade scene11-fullbleed-shade--part3" aria-hidden="true" />
            <div className="scene11-artboard scene11-artboard--part3 scene11-part3">
              <img className="scene11-part3__bg" src={scene11MuaTrenPhoHueBg} alt="" loading="lazy" decoding="async" />
              <div className="scene11-part3__shade" aria-hidden="true" />

              <a
                className="scene11-youtube-card scene11-youtube-card--part3 scene11-step-reveal scene11-step-reveal--video"
                href={part3.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mở video Mưa trên phố Huế trên YouTube"
              >
                <img
                  className="scene11-youtube-card__image scene11-youtube-card__image--part3"
                  src={scene11MuaTrenPhoHueBg}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className="scene11-youtube-card__veil" aria-hidden="true" />
                <div className="scene11-youtube-card__title" aria-hidden="true">
                  <strong>MƯA TRÊN PHỐ HUẾ</strong>
                  <span>YEAH1 MUSIC</span>
                </div>
                <span className="scene11-youtube-card__play" aria-hidden="true">
                  <svg viewBox="0 0 84 58" focusable="false">
                    <rect width="84" height="58" rx="14" />
                    <path d="M 35 18 L 35 40 L 55 29 Z" />
                  </svg>
                </span>
                <span className="scene11-youtube-card__watch" aria-hidden="true">
                  Watch on <strong>YouTube</strong>
                </span>
              </a>

              <h2 className="scene11-part3__title scene11-step-reveal scene11-step-reveal--title">
                {part3.titleLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>

              <div className="scene11-part3__youtube scene11-step-reveal scene11-step-reveal--youtube" aria-hidden="true">
                <span className="scene11-part3__youtube-icon">
                  <svg viewBox="0 0 58 40" focusable="false">
                    <rect width="58" height="40" rx="9" />
                    <path d="M 24 12 L 24 28 L 39 20 Z" />
                  </svg>
                </span>
                <span>YouTube</span>
              </div>

              <p className="scene11-part3__views scene11-step-reveal scene11-step-reveal--views">
                {part3.viewCountLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            </div>
          </section>

          <div
            className="scene11-shared-performance-copy-frame"
            style={sharedPerformanceCopyStyle}
            aria-hidden={part2Progress <= 0.02 || part4Progress >= 0.98 ? "true" : undefined}
          >
            <p className="scene11-shared-performance-copy">{SCENE11_SHARED_PERFORMANCE_COPY}</p>
          </div>

          <section
            className={`scene11-step scene11-step--part4${part4Progress > 0.05 ? " is-visible" : ""}`}
            data-step={part4.id}
            aria-label="Bắc Bling case study"
            style={part4LayerStyle}
          >
            <img
              className="scene11-fullbleed-bg scene11-fullbleed-bg--part4"
              src={scene11BacBlingBg}
              alt=""
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
            <div className="scene11-fullbleed-shade scene11-fullbleed-shade--part4" aria-hidden="true" />
            <div className="scene11-artboard scene11-artboard--part4 scene11-part4">
              <img className="scene11-part4__bg" src={scene11BacBlingBg} alt="" loading="lazy" decoding="async" />
              <div className="scene11-part4__shade" aria-hidden="true" />

              <p className="scene11-part4__body scene11-step-reveal scene11-step-reveal--copy">
                {part4.body}
              </p>

              <h2 className="scene11-part4__title scene11-step-reveal scene11-step-reveal--title">
                {part4.title}
              </h2>

              <div className="scene11-part4__youtube scene11-step-reveal scene11-step-reveal--youtube" aria-hidden="true">
                <span className="scene11-part4__youtube-icon">
                  <svg viewBox="0 0 58 40" focusable="false">
                    <rect width="58" height="40" rx="9" />
                    <path d="M 24 12 L 24 28 L 39 20 Z" />
                  </svg>
                </span>
                <span>YouTube</span>
              </div>

              <p className="scene11-part4__views scene11-step-reveal scene11-step-reveal--views">
                {part4.viewCountLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>

              <a
                className="scene11-youtube-card scene11-youtube-card--part4 scene11-step-reveal scene11-step-reveal--video"
                href={part4.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mở video Bắc Bling trên YouTube"
              >
                <img
                  className="scene11-youtube-card__image scene11-youtube-card__image--part4"
                  src={scene11BacBlingThumb}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className="scene11-youtube-card__veil" aria-hidden="true" />
                <div className="scene11-youtube-card__title" aria-hidden="true">
                  <strong>BẮC BLING - HÒA MINZY</strong>
                  <span>YEAH1 MUSIC</span>
                </div>
                <span className="scene11-youtube-card__play" aria-hidden="true">
                  <svg viewBox="0 0 84 58" focusable="false">
                    <rect width="84" height="58" rx="14" />
                    <path d="M 35 18 L 35 40 L 55 29 Z" />
                  </svg>
                </span>
                <span className="scene11-youtube-card__watch" aria-hidden="true">
                  Watch on <strong>YouTube</strong>
                </span>
              </a>
            </div>
          </section>
        </div>
        {debugScene11Pin ? (
          <div className="scene11-pin-debug" aria-hidden="true">
            <span>pinState: {pinState}</span>
            <span>sceneProgress: {sceneProgress.toFixed(3)}</span>
            <span>part2Progress: {part2Progress.toFixed(3)}</span>
            <span>part3Progress: {part3Progress.toFixed(3)}</span>
            <span>part4Progress: {part4Progress.toFixed(3)}</span>
            <span>rect.top: {pinDebugRect.top}</span>
            <span>rect.bottom: {pinDebugRect.bottom}</span>
          </div>
        ) : null}
      </div>
    </section>
  );
}
