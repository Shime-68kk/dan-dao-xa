import { useEffect, useRef, useState } from "react";
import { useWidthScale } from "../../../hooks/useWidthScale.js";
import scene15Bg from "../../../assets/page01/scene15/scene15-bg.png";
import finalFooterOverlay from "../../../assets/page01/scene15/final-footer-overlay.png";
import scene15Title from "../../../assets/page01/scene15/scene15-title.png";
import bnkLogo from "../../../assets/logo.png";
import "./Scene15FinalClosing.css";

const SCENE15_WIDTH = 1366;
const SCENE15_HEIGHT = 879;

const closingCopy =
  "Sau hơn hai thế kỷ tồn tại, tiếng đàn Đào Xá có thể sẽ không còn vang lên theo cách của quá khứ. Nhưng nếu những giá trị nghề được kết nối với giáo dục, du lịch, thị trường và sự hồi sinh của âm nhạc truyền thống trong đời sống đương đại, làng nghề vẫn có cơ hội viết tiếp câu chuyện của mình. Bởi để những thanh âm dân tộc còn ngân vang trong tương lai, điều cần được giữ lại không chỉ là cây đàn mà còn là những con người biết cách tạo nên tiếng đàn ấy.";

export default function Scene15FinalClosing() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const scale = useWidthScale(SCENE15_WIDTH);

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

          <div className="scene15__left-cluster scene15-reveal scene15-reveal--brand">
            <div className="scene15__brand">
              <img src={bnkLogo} alt="Logo" className="scene15__brand-logo" />
              <div className="scene15__brand-info">
                <div className="scene15__brand-name">BÁCH NGHỆ KÝ</div>
                <a
                  className="scene15__facebook-link"
                  href="https://www.facebook.com/profile.php?id=61590836188556"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mở Facebook Bách Nghệ Ký"
                >
                  <svg viewBox="0 0 24 24" width="40" height="40">
                    <circle cx="12" cy="12" r="12" fill="#1877f2" />
                    <path d="M14 12h-2v8H9v-8H7V9.5h2v-2c0-2 1.2-3 3-3 .9 0 1.6.1 1.8.1v2.1h-1.2c-1 0-1.2.5-1.2 1.2v1.6h2.4L14 12z" fill="#ffffff" />
                  </svg>
                </a>
              </div>
            </div>

            <p className="scene15__copyright">
              © 2026. Toàn bộ bản quyền thuộc Bách Nghệ Ký
            </p>
          </div>

          <div className="scene15__credits scene15-reveal scene15-reveal--credits">
            <p className="scene15__credits-contact">
              <strong>Thông tin liên hệ:</strong>
              <span><strong>Hotline:</strong> 0986357691</span>
              <span><strong>Email:</strong> bachngheky@gmail.com</span>
              <span><strong>Địa chỉ:</strong> Km10, Nguyễn Trãi, Hà Đông, Hà Nội</span>
            </p>
            <p className="scene15__credits-team">
              <strong>Thực hiện:</strong>
              <span>Lê Quỳnh Trang, Mai Ngọc Minh, Lã Minh Tâm, Tạ Minh Tâm</span>
            </p>
            <p className="scene15__credits-sources">
              <strong>Nguồn sử dụng trong bài:</strong>
              <span>
                Anh trai vượt ngàn chông gai, Hòa Minzy, Nhạc cụ Đào Xá, @n.mih_nghia, @vothanh0604, @dannhidinhtinh, @vudieuthao_tyba, Internet
              </span>
            </p>
          </div>

          <div className="scene15__footer-box" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
