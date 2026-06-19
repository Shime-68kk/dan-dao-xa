import { useEffect, useState } from "react";
import { useElementInView } from "../../../hooks/useElementInView.js";
import titleImage from "../../../assets/page01/scene06/scene06-title-trimmed.png";
import "./Scene06CraftJourneyIntro.css";

const BASE_WIDTH = 1366;
const BASE_HEIGHT = 768;

const copySegments = [
  "Sự khác biệt lớn nhất giữa một nhạc cụ thủ công và một sản phẩm công nghiệp nằm ở sự độc bản của từng cây đàn nhờ khả năng cảm âm đã được mài giũa và sự khéo léo của đôi bàn tay người thợ.",
  "Tại Đào Xá, quy trình này được vận hành bằng phương pháp chế tác thủ công với những tiêu chuẩn kỹ thuật khắt khe.",
  "Để tạo nên một cây đàn có âm sắc đạt yêu cầu, người thợ phải thực hiện liên tiếp nhiều công đoạn, từ lựa chọn nguyên liệu, tạo hình cho đến hoàn thiện và chỉnh âm.",
  "Mỗi bước đều có vai trò riêng, góp phần quyết định chất lượng và đặc trưng âm thanh của sản phẩm cuối cùng.",
];

export default function Scene06CraftJourneyIntro() {
  const [frameWidth, setFrameWidth] = useState(() =>
    typeof window === "undefined" ? BASE_WIDTH : window.innerWidth
  );
  const [sectionRef, isVisible] = useElementInView({
    threshold: 0.16,
    rootMargin: "0px 0px -12% 0px",
  });
  const scale = frameWidth / BASE_WIDTH;

  useEffect(() => {
    let frame = 0;

    const updateFrameWidth = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const scene05Frame = document.querySelector(".scene05-visual-wrap");
        const width = scene05Frame?.getBoundingClientRect().width || window.innerWidth;
        setFrameWidth(width);
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

  return (
    <section
      ref={sectionRef}
      className={`scene06-intro ${isVisible ? "is-visible" : ""}`}
      aria-label="Hành trình từ gỗ thô đến thanh âm hoàn hảo"
      style={{ "--scene06-scale": scale }}
    >
      <div className="scene06-intro__viewport">
        <div className="scene06-intro__stage">
          <img
            className="scene06-intro__title"
            src={titleImage}
            alt="Hành trình từ gỗ thô đến thanh âm hoàn hảo"
            loading="lazy"
            decoding="async"
            width="2903"
            height="755"
          />

          <p className="scene06-intro__copy">
            {copySegments.map((segment, index) => (
              <span
                className="scene06-intro__copy-segment"
                style={{ "--segment-index": index }}
                key={segment}
              >
                {segment}
                {index < copySegments.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
