import { useEffect, useMemo, useRef, useState } from "react";
import { useScrollProgress } from "../../../hooks/useScrollProgress.js";
import b1 from "../../../assets/page01/scene06/steps/cards/b1-card.png";
import b2 from "../../../assets/page01/scene06/steps/cards/b2-card.png";
import b3 from "../../../assets/page01/scene06/steps/cards/b3-card.png";
import b4 from "../../../assets/page01/scene06/steps/cards/b4-card.png";
import b5 from "../../../assets/page01/scene06/steps/cards/b5-card.png";
import b6 from "../../../assets/page01/scene06/steps/cards/b6-card.png";
import b7 from "../../../assets/page01/scene06/steps/cards/b7-card.png";
import b8 from "../../../assets/page01/scene06/steps/cards/b8-card.png";
import b9 from "../../../assets/page01/scene06/steps/cards/b9-card.png";
import quotePaperFinal from "../../../assets/page01/scene06/steps/quote-paper-final.png";
import flowerOrnament from "../../../assets/page01/scene06/steps/ornaments/flower-ornament.png";
import "./Scene06CraftSteps.css";

const BASE_WIDTH = 1366;
const defaultTitleLines = ["CÁC", "BƯỚC", "LÀM", "ĐÀN"];
const group3TitleLines = ["GỖ", "THÔ"];

const stepGroups = [
  {
    id: "group-1",
    steps: [
      {
        id: "b1",
        image: b1,
        className: "scene06-steps__card--b1",
        title: "CHỌN NGUYÊN LIỆU GỖ",
        copy: [
          "Gỗ được chọn kỹ theo độ chắc, độ vang và độ ổn định. Người thợ quan sát vân, thớ và màu gỗ trước khi quyết định đưa vào chế tác.",
          "Chọn gỗ là bước đầu tiên quyết định chất âm của cây đàn.",
          "Gỗ ngô đồng, gỗ vông → làm mặt đàn, tạo độ xốp và độ vang.",
          "Gỗ trắc, mun, gụ → làm cần và khung đàn, giữ độ chắc và đàn hồi.",
          "Người thợ lành nghề chỉ cần nhìn mặt gỗ đã có thể đoán được tiếng đàn.",
        ],
        x: 285,
        y: 282,
        noteX: 455,
        noteY: 102,
        noteWidth: 165,
        noteVariant: "group-1",
      },
      {
        id: "b2",
        image: b2,
        className: "scene06-steps__card--b2",
        title: "XẺ PHÔI & PHƠI KHÔ",
        copy: [
          "Phôi gỗ được xẻ theo kích thước phù hợp rồi phơi đủ thời gian để giảm cong vênh, giúp thân đàn giữ được dáng và tiếng ổn định.",
          "Sau khi tuyển chọn, gỗ được xẻ thành từng phôi theo kích thước của từng loại nhạc cụ.",
          "Các phôi gỗ tiếp tục được phơi tự nhiên trong thời gian dài → giảm độ ẩm → ổn định kết cấu → hạn chế cong vênh, nứt gãy khi chế tác.",
          "Đây là công đoạn giúp người thợ dễ xử lý, chỉnh dáng đàn và chuẩn bị nền vật liệu ổn định cho những bước chế tác tiếp theo.",
        ],
        x: 635,
        y: 282,
        noteX: 805,
        noteY: 102,
        noteWidth: 165,
        noteVariant: "group-1",
      },
      {
        id: "b3",
        image: b3,
        className: "scene06-steps__card--b3",
        title: "VÀO KHUÔN & LÀM HỘP ĐÀN",
        copy:
          "Các chi tiết thân đàn được vào khuôn, ghép và chỉnh cho kín khít. Đây là bước tạo nên cho độ ngân và màu âm của cây đàn.",
        x: 985,
        y: 282,
        noteX: 1155,
        noteY: 102,
        noteWidth: 160,
        noteVariant: "group-1",
      },
    ],
  },
  {
    id: "group-2",
    steps: [
      {
        id: "b4",
        image: b4,
        className: "scene06-steps__card--b4",
        title: "GHÉP CẦN ĐÀN",
        copy: [
          "Người thợ phải nung, hơ gỗ để uốn cong tấm thành đàn rồi đưa vào khuôn.",
          "Khi vào khuôn đàn (như đàn nguyệt), các lớp khuôn thành phải khít và sát vào nhau để đảm bảo độ chắc chắn và chất lượng.",
        ],
        x: 430,
        y: 100,
        noteX: 315,
        noteY: 265,
        noteWidth: 95,
        noteVariant: "group-2",
      },
      {
        id: "b5",
        image: b5,
        className: "scene06-steps__card--b5",
        title: "ĐÁNH GIẤY RÁP / CHÀ NHÁM",
        copy:
          "Khâu này được thực hiện sau khi đã lắp ghép hoàn chỉnh phôi đàn. Đây là công đoạn đòi hỏi sự kỹ lưỡng, cần cù vì nó quyết định độ mịn và độ bóng của cây đàn khi phun bóng.",
        x: 745,
        y: 100,
        noteX: 590,
        noteY: 265,
        noteWidth: 140,
        noteVariant: "group-2",
      },
      {
        id: "b6",
        image: b6,
        className: "scene06-steps__card--b6",
        title: "PHUN BÓNG / TRẮNG SƠN",
        copy: [
          "Sơn hoặc phun bóng sau khi lắp ráp, cây đàn được phủ một lớp sơn hoặc bóng bên ngoài.",
          "Bảo vệ gỗ",
          "Lớp phủ giúp hạn chế ẩm mốc và tăng độ bền khi sử dụng lâu dài.",
          "Trang trí thủ công",
          "Tùy loại đàn, nghệ nhân có thể thêm hoa văn, họa tiết khảm hoặc chi tiết truyền thống.",
        ],
        x: 1060,
        y: 100,
        noteX: 910,
        noteY: 265,
        noteWidth: 135,
        noteVariant: "group-2",
      },
    ],
  },
  {
    id: "group-3",
    steps: [
      {
        id: "b7",
        image: b7,
        className: "scene06-steps__card--b7",
        title: "BỊT DA CỘNG HƯỞNG",
        copy: [
          "Dùng da trăn đã xử lý",
          "Với đàn nhị, đàn tam, mặt đàn thường được bịt bằng da trăn để tạo âm thanh.",
          "Căng da vừa đủ",
          "Người thợ phải căng da thật đều, không quá chùng cũng không quá căng.",
          "Nếu da quá chùng, tiếng đàn sẽ kém vang.",
          "Nếu da quá căng, âm sắc có thể bị gắt hoặc thiếu độ ấm.",
          "Kiểm tra độ cộng hưởng",
          "Sau khi bịt da, người thợ tiếp tục chỉnh và kiểm tra mặt đàn trước khi chuyển sang bước hoàn thiện.",
        ],
        x: 455,
        y: 282,
        noteX: 620,
        noteY: 115,
        noteWidth: 210,
      },
      {
        id: "b8",
        image: b8,
        className: "scene06-steps__card--b8",
        title: "LẮP DÂY / GẮN PHÍM",
        copy: [
          "Lắp dây đàn",
          "Sau khi hoàn thiện thân đàn, người thợ lắp dây tơ hoặc dây cước tuỳ từng loại đàn.",
          "Gắn chi tiết quan trọng",
          "Các bộ phận như ngựa đàn và phím đàn được gắn lên thân đàn.",
          "Cần độ chính xác cao",
          "Chỉ cần lệch một chút, khi gảy thử, nốt đàn có thể bị phô, sai dải âm hoặc lệch sang nốt khác.",
          "Kết hợp kinh nghiệm và máy móc",
          "Ngày nay, ngoài đôi tai và kinh nghiệm của người thợ, máy đo dài tần cũng được dùng để hỗ trợ gắn phím chính xác hơn.",
        ],
        x: 850,
        y: 282,
        noteX: 1015,
        noteY: 115,
        noteWidth: 260,
      },
    ],
    flower: {
      image: flowerOrnament,
      x: 190,
      y: 430,
      width: 220,
    },
  },
  {
    id: "group-4",
    steps: [
      {
        id: "b9",
        image: b9,
        className: "scene06-steps__card--b9",
        title: "CHỈNH ÂM",
        copy: [
          "Trong quy trình làm đàn Đào Xá, chỉnh âm được xem là công đoạn quan trọng nhất, có thể kéo dài 1-2 ngày.",
          "Nếu máy móc có thể hỗ trợ cắt, đục hay tạo hình thì ở bước này, người thợ gần như chỉ dựa vào đôi tai và kinh nghiệm để nghe độ rung, độ vang, biên độ dao động và độ “chín” của âm thanh.",
        ],
        x: 105,
        y: 285,
        noteX: 282,
        noteY: 145,
        noteWidth: 145,
        noteVariant: "group-4",
      },
    ],
    quote: true,
  },
];

function SceneStep({ step }) {
  const copyBlocks = Array.isArray(step.copy) ? step.copy : [step.copy];
  const showNoteCorners = step.noteVariant !== "group-4";

  return (
    <>
      <article
        className={`scene06-steps__item ${step.className}`}
        style={{
          "--x": `${step.x}px`,
          "--y": `${step.y}px`,
        }}
      >
        <img src={step.image} alt={step.title} loading="lazy" decoding="async" />
      </article>

      <aside
        className={`scene06-steps__note${
          step.noteVariant ? ` scene06-steps__note--${step.noteVariant}` : ""
        } scene06-steps__note--step-${step.id.replace("b", "")}`}
        style={{
          "--note-x": `${step.noteX}px`,
          "--note-y": `${step.noteY}px`,
          "--note-width": `${step.noteWidth ?? 250}px`,
        }}
      >
        {showNoteCorners ? (
          <>
            <span className="scene06-steps__corner scene06-steps__corner--tl" aria-hidden="true" />
            <span className="scene06-steps__corner scene06-steps__corner--br" aria-hidden="true" />
          </>
        ) : null}
        <h3>{step.title}</h3>
        {copyBlocks.map((copy) => (
          <p key={copy}>{copy}</p>
        ))}
      </aside>
    </>
  );
}

function VerticalSceneTitle({ lines, ariaLabel, variant }) {
  return (
    <h2
      className={`scene06-steps__title${
        variant ? ` scene06-steps__title--${variant}` : ""
      }`}
      aria-label={ariaLabel}
    >
      {lines.map((line) => (
        <span className="scene06-steps__title-line" key={line}>
          {line}
        </span>
      ))}
    </h2>
  );
}

function Group4FinalQuote({ isActive }) {
  return (
    <div
      className={`scene06-final-quote${isActive ? " is-typing" : ""}`}
      aria-label="Trích dẫn của ông Đào Anh Tuấn"
    >
      <img
        className="scene06-final-quote__paper"
        src={quotePaperFinal}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <blockquote className="scene06-final-quote__content">
        <p className="scene06-final-quote__line scene06-final-quote__line--1">
          <span>Người thợ làm phải có </span>
          <span className="scene06-final-quote__highlight scene06-final-quote__highlight--1">
            tai nghe,
          </span>
          <span> kết hợp với </span>
          <br />
          <span>các bí quyết các cụ ngày xưa truyền lại và </span>
          <br />
          <span>tự rút ra kinh nghiệm của bản thân trong khi làm”.</span>
        </p>
        <p className="scene06-final-quote__line scene06-final-quote__line--2">
          <span>Điều đặc là phần lớn thợ Đào Xá đều </span>
          <span className="scene06-final-quote__highlight scene06-final-quote__highlight--2">
            không học qua nhạc lý bài bản,
          </span>
          <span> họ tích lũy hiểu biết về âm thanh qua truyền nghề và thực hành lâu năm.</span>
        </p>
        <p className="scene06-final-quote__line scene06-final-quote__line--3">
          <span>Vì vậy, làm đàn không chỉ là tạo hình trên gỗ mà còn là quá trình </span>
          <span className="scene06-final-quote__highlight scene06-final-quote__highlight--3">
            cảm nhận và đánh thức âm thanh ẩn trong từng thớ gỗ.
          </span>
        </p>
      </blockquote>
      <cite className="scene06-final-quote__attribution">
        Ông Đào Anh Tuấn chia sẻ
      </cite>
    </div>
  );
}

export default function Scene06CraftSteps() {
  const sectionRef = useRef(null);
  const progress = useScrollProgress(sectionRef);
  const [pinState, setPinState] = useState("before");
  const [frameWidth, setFrameWidth] = useState(() =>
    typeof window === "undefined" ? BASE_WIDTH : window.innerWidth
  );

  useEffect(() => {
    let frame = 0;
    const updateFrameWidth = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const scene05Frame = document.querySelector(".scene05-visual-wrap");
        setFrameWidth(scene05Frame?.getBoundingClientRect().width || window.innerWidth);
      });
    };

    updateFrameWidth();
    window.addEventListener("resize", updateFrameWidth);
    window.addEventListener("orientationchange", updateFrameWidth);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateFrameWidth);
      window.removeEventListener("orientationchange", updateFrameWidth);
    };
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    let frame = 0;
    const updatePinState = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        if (rect.top > 0) {
          setPinState("before");
        } else if (rect.bottom <= window.innerHeight) {
          setPinState("after");
        } else {
          setPinState("pinned");
        }
      });
    };

    updatePinState();
    window.addEventListener("scroll", updatePinState, { passive: true });
    window.addEventListener("resize", updatePinState);
    window.addEventListener("orientationchange", updatePinState);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updatePinState);
      window.removeEventListener("resize", updatePinState);
      window.removeEventListener("orientationchange", updatePinState);
    };
  }, []);

  const activeIndex = useMemo(() => {
    if (progress < 0.25) return 0;
    if (progress < 0.5) return 1;
    if (progress < 0.75) return 2;
    return 3;
  }, [progress]);
  const scale = frameWidth / BASE_WIDTH;
  const isGroup3Active = activeIndex === 2;
  const isGroup4Active = activeIndex === 3;
  const titleLines = isGroup3Active ? group3TitleLines : defaultTitleLines;

  return (
    <section
      ref={sectionRef}
      className="scene06-steps"
      aria-label="Các bước làm đàn"
      style={{ "--scene06-steps-scale": scale }}
    >
      <div className={`scene06-steps__sticky is-${pinState}`}>
        <div className="scene06-steps__viewport">
          <div className="scene06-steps__stage">
            {!isGroup4Active ? (
              <VerticalSceneTitle
                lines={titleLines}
                ariaLabel={isGroup3Active ? "Gỗ thô" : "Các bước làm đàn"}
                variant={isGroup3Active ? "group-3" : undefined}
              />
            ) : null}

            <div className="scene06-steps__floor" aria-hidden="true" />

            {stepGroups.map((group, index) => {
              const state =
                index === activeIndex ? "active" : index < activeIndex ? "past" : "future";

              return (
                <div
                  className={`scene06-steps__group scene06-steps__group--${index + 1} is-${state}`}
                  key={group.id}
                  aria-hidden={index !== activeIndex}
                >
                  {group.quote ? (
                    <div className="scene06-group4-frame" aria-hidden="true">
                      <span className="scene06-group4-frame__corner scene06-group4-frame__corner--tl" />
                      <span className="scene06-group4-frame__corner scene06-group4-frame__corner--br" />
                    </div>
                  ) : null}

                  {group.steps.map((step) => (
                    <SceneStep step={step} key={step.id} />
                  ))}

                  {group.quote ? <Group4FinalQuote isActive={index === activeIndex} /> : null}

                  {group.flower ? (
                    <img
                      className="scene06-steps__flower"
                      src={group.flower.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      style={{
                        "--flower-x": `${group.flower.x}px`,
                        "--flower-y": `${group.flower.y}px`,
                        "--flower-width": `${group.flower.width}px`,
                      }}
                    />
                  ) : null}

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
