import { useEffect, useRef, useState } from "react";
import { useWidthScale } from "../../../hooks/useWidthScale.js";
import scene14Bg from "../../../assets/page01/scene14/scene14-bg.png";
import "./Scene14FutureContinuation.css";

const SCENE14_WIDTH = 1366;
const SCENE14_HEIGHT = 768;

const firstCopy =
  "Với nghệ nhân Đào Anh Tuấn, điều ông mong muốn nhất không phải là mở rộng quy mô sản xuất mà là có thêm những người trẻ thực sự quan tâm đến nghề. Ông cho biết sẵn sàng truyền dạy miễn phí toàn bộ kinh nghiệm tích lũy được nếu có người muốn học và gắn bó lâu dài.";

const secondCopy =
  "Quan trọng hơn, tương lai của Đào Xá còn gắn liền với tương lai của chính âm nhạc truyền thống. Khi ngày càng nhiều nghệ sĩ đưa đàn bầu, đàn tranh, đàn nhị hay đàn tỳ bà vào các sản phẩm đương đại, cơ hội tiếp cận công chúng của những nhạc cụ này cũng được mở rộng. Đây không chỉ là cơ hội cho âm nhạc dân tộc mà còn là cơ hội cho những người đang ngày ngày tạo ra các nhạc cụ ấy.";

export default function Scene14FutureContinuation() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const scale = useWidthScale(SCENE14_WIDTH);

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
      className={`scene14${isVisible ? " is-visible" : ""}`}
      aria-label="Tương lai tiếp nối của Đào Xá"
      style={{
        "--scene14-scale": scale,
        "--scene14-rendered-height": `${SCENE14_HEIGHT * scale}px`,
      }}
    >
      <div className="scene14__scale-shell">
        <div className="scene14__artboard">
          <img className="scene14__bg" src={scene14Bg} alt="" loading="lazy" decoding="async" />
          <p className="scene14-copy scene14-copy--first">{firstCopy}</p>
          <p className="scene14-copy scene14-copy--second">{secondCopy}</p>
        </div>
      </div>
    </section>
  );
}
