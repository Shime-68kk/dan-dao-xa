import { useEffect, useRef, useState } from "react";
import { useWidthScale } from "../../../hooks/useWidthScale.js";
import scene10Bg from "../../../../slide 10-1/nền chủ đạo.png";
import Scene10InstrumentPlayer from "./Scene10InstrumentPlayer.jsx";
import "./Scene10SoundCulture.css";

const SCENE10_WIDTH = 1366;
const SCENE10_HEIGHT = 869;

export default function Scene10SoundCulture() {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const scale = useWidthScale(SCENE10_WIDTH);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsActive(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`scene10${isActive ? " is-active" : ""}`}
      aria-label="Những thanh âm mang hồn văn hóa Việt"
      style={{
        "--scene10-scale": scale,
        "--scene10-rendered-height": `${SCENE10_HEIGHT * scale}px`,
      }}
    >
      <div className="scene10__scale-shell">
        <div className="scene10__artboard">
          <img className="scene10__bg" src={scene10Bg} alt="" loading="lazy" decoding="async" />

          <h2 className="scene10__title scene10-reveal scene10-reveal--title">
            <span className="scene10__title-script scene10__title-script--main">
              Những thanh âm
            </span>
            <span className="scene10__title-script scene10__title-script--bridge">mang</span>
            <span className="scene10__title-display">HỒN VĂN HÓA VIỆT</span>
          </h2>

          <p className="scene10__intro scene10-reveal scene10-reveal--intro">
            Từ những khúc gỗ thô ráp trong xưởng đàn Đào Xá, người thợ không chỉ tạo ra
            những nhạc cụ phục vụ biểu diễn mà còn góp phần lưu giữ hệ thống âm thanh đã
            đồng hành cùng nhiều loại hình nghệ thuật truyền thống Việt Nam qua hàng thế kỷ.
            Mỗi cây đàn mang một cấu tạo, âm sắc và vai trò riêng, góp phần tạo nên sự phong
            phú của kho tàng âm nhạc dân tộc.
          </p>

          <Scene10InstrumentPlayer />
        </div>
      </div>
    </section>
  );
}
