import { useEffect, useState } from "react";
import { useElementInView } from "../../../hooks/useElementInView.js";
import { useWidthScale } from "../../../hooks/useWidthScale.js";
import scene02Background from "../../../assets/page01/scene02/scene02-main-background.webp";
import daoXaMap from "../../../assets/page01/scene02/dao-xa-map.webp";
import flowerOrnament from "../../../assets/page01/scene02/flower-ornament-trimmed.png";
import slide2Reference from "../../../assets/page01/scene02/scene02-layout-reference.webp";
import "./Scene02History.css";

const MAP_URL = "https://www.google.com/maps?q=place_id:ChIJnTwChuLLNTER6ouj4kBiy7g";
const IN_VIEW_OPTIONS = {
  threshold: 0.22,
  rootMargin: "0px 0px -20% 0px",
};

function useDebugSlide2() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(new URLSearchParams(window.location.search).get("debugSlide2") === "1");
  }, []);
  return enabled;
}

export default function Scene02History() {
  const [sceneRef, isVisible] = useElementInView(IN_VIEW_OPTIONS);
  const stageScale = useWidthScale(1366);
  const sceneHeight = Math.ceil(768 * stageScale);
  const debugSlide2 = useDebugSlide2();

  return (
    <section
      className={`scene02-history ${isVisible ? "is-visible" : ""}`}
      ref={sceneRef}
      style={{
        "--scene02-scale": stageScale,
        "--scene02-height": `${sceneHeight}px`,
      }}
      aria-labelledby="scene02-title"
    >
      <div className="scene02-history__scale-shell">
        <div className="scene02-history__stage">
          <img className="scene02-bg" src={scene02Background} alt="" aria-hidden="true" loading="lazy" />
          <div className="scene02-history__top-fade" aria-hidden="true" />

          <div className="scene02-title-group scene02-reveal" aria-labelledby="scene02-title">
            <p className="scene02-title-script">Hai thế kỉ thăng trầm</p>
            <div className="scene02-title-bottom">
              <span className="scene02-title-and">và</span>
              <h2 id="scene02-title" className="scene02-title-main">
                <span>ÁNH HÀO QUANG</span>
                <span>QUÁ KHỨ</span>
              </h2>
            </div>
          </div>

          <div className="scene02-history__flower scene02-reveal">
            <img src={flowerOrnament} alt="" aria-hidden="true" loading="lazy" />
          </div>

          <div className="scene02-history__body scene02-reveal">
            <p>
              Là 1 trong 15 làng nghề truyền thống ở huyện Ứng Hòa, làng Đào
              Xá thuộc xã Đông Lỗ, cách trung tâm Thủ đô Hà Nội khoảng 50 km.
              Đây được xem là làng nghề chuyên chế tác nhạc cụ dân tộc duy
              nhất và lâu đời nhất ở Hà Nội.
            </p>
            <p>
              Nghề làm đàn tại Đào Xá xuất hiện từ đầu thế kỷ XIX, gắn với cụ
              Đào Xuân Lan. Từ nền tảng nghề mộc và niềm đam mê âm nhạc, cụ đã
              học hỏi kỹ thuật chế tác nhạc cụ từ nhiều nơi rồi cải tiến để phù
              hợp với đặc trưng âm nhạc Việt Nam. Từ đó, nghề dần được truyền
              lại cho con cháu và người dân trong làng, tạo nên một cộng đồng
              làm nghề tồn tại qua nhiều thế hệ.
            </p>
          </div>

          <a
            className="scene02-history__map-link scene02-reveal"
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Mở vị trí xưởng sản xuất đàn Đào Xá trên Google Maps"
          >
            <img src={daoXaMap} alt="Bản đồ vị trí xưởng sản xuất đàn Đào Xá" loading="lazy" />
          </a>

          <p className="scene02-history__caption scene02-reveal">
            Địa chỉ xưởng sản xuất đàn Đào Xá cuối cùng
          </p>

          {debugSlide2 ? (
            <img
              className="scene02-debug-reference"
              src={slide2Reference}
              alt=""
              aria-hidden="true"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
