import { useEffect, useRef, useState } from "react";
import scene15Bg from "../../../assets/page01/scene15/scene15-bg.png";
import finalFooterOverlay from "../../../assets/page01/scene15/final-footer-overlay.png";
import scene15Title from "../../../assets/page01/scene15/scene15-title.png";
import "./Scene15FinalClosing.css";

const SCENE15_WIDTH = 1366;
const SCENE15_HEIGHT = 879;

const closingCopy =
  "Sau hơn hai thế kỷ tồn tại, tiếng đàn Đào Xá có thể sẽ không còn vang lên theo cách của quá khứ. Nhưng nếu những giá trị nghề được kết nối với giáo dục, du lịch, thị trường và sự hồi sinh của âm nhạc truyền thống trong đời sống đương đại, làng nghề vẫn có cơ hội viết tiếp câu chuyện của mình. Bởi để những thanh âm dân tộc còn ngân vang trong tương lai, điều cần được giữ lại không chỉ là cây đàn mà còn là những con người biết cách tạo nên tiếng đàn ấy.";

export default function Scene15FinalClosing() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scale, setScale] = useState(() => {
    if (typeof window === "undefined") return 1;
    return document.documentElement.clientWidth / SCENE15_WIDTH;
  });

  useEffect(() => {
    let frame = 0;

    const updateScale = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setScale(document.documentElement.clientWidth / SCENE15_WIDTH);
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
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.22);
      },
      { threshold: [0, 0.22, 0.45] }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`scene15${isVisible ? " is-visible" : ""}`}
      aria-label="Lời kết Bách Nghệ Ký"
      style={{
        "--scene15-scale": scale,
        "--scene15-rendered-height": `${SCENE15_HEIGHT * scale}px`,
      }}
    >
      <div className="scene15__scale-shell">
        <div className="scene15__artboard">
          <img className="scene15__bg" src={scene15Bg} alt="" loading="lazy" decoding="async" />

          <p className="scene15__closing scene15-reveal scene15-reveal--copy">{closingCopy}</p>

          <img
            className="scene15__question scene15-reveal scene15-reveal--title"
            src={scene15Title}
            alt="Ai sẽ nối dây cho những tiếng đàn cổ?"
            loading="lazy"
            decoding="async"
          />

          <div className="scene15__brand scene15-reveal scene15-reveal--brand">
            <div className="scene15__brand-name">BÁCH NGHỆ KÝ</div>
          </div>

          <p className="scene15__copyright scene15-reveal scene15-reveal--brand">
            © 2026. Toàn bộ bản quyền thuộc Bách Nghệ Ký
          </p>

          <div className="scene15__credits scene15-reveal scene15-reveal--credits">
            <p>
              <strong>Thực hiện:</strong>
              <span>Nội dung: Lê Quỳnh Trang, Mai Ngọc Minh</span>
              <span>Thiết kế: Lã Minh Tâm, Tạ Minh Tâm</span>
            </p>
            <p>
              <strong>Hình ảnh:</strong>
              <span>
                Nguồn: Lã Minh Tâm, Anh trai vượt ngàn chông gai, Hòa Minzy, Nhạc cụ Đào Xá,
                internet.
              </span>
            </p>
          </div>

          <img
            className="scene15__footer-overlay"
            src={finalFooterOverlay}
            alt=""
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
