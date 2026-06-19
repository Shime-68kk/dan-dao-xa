import { useEffect, useRef, useState } from "react";
import AudioNarrationButton from "../../../components/media/AudioNarrationButton.jsx";
import Reveal from "../../../components/motion/Reveal.jsx";
import { useWidthScale } from "../../../hooks/useWidthScale.js";
import backgroundImage from "../../../assets/page01/scene01/background-wood-smoke.webp";
import titlePersonComposite from "../../../assets/page01/scene01/title-person-composite.webp";
import photoCraftsman from "../../../assets/page01/scene01/photo-craftsman-detail.webp";
import photoInstruments from "../../../assets/page01/scene01/photo-instruments.webp";
import photoMaker from "../../../assets/page01/scene01/photo-maker.webp";
import photoWood from "../../../assets/page01/scene01/photo-wood-stock.webp";
import { clamp, entranceDelays } from "./scene01.motion.js";
import "./Scene01Hero.css";

function useSceneProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    let frame = 0;
    const update = () => {
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const next = travel > 0 ? clamp(Math.abs(rect.top) / travel) : 0;
      setProgress(next);
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ref]);

  return progress;
}

export default function Scene01Hero() {
  const sceneRef = useRef(null);
  const progress = useSceneProgress(sceneRef);
  const stageScale = useWidthScale(1366);
  const stageDrift = progress * -22;

  return (
    <section
      className="scene01"
      ref={sceneRef}
      style={{
        "--scene01-scale": stageScale,
        "--scene-progress": progress,
        "--scene-exit-opacity": 1,
      }}
      aria-labelledby="scene01-title"
    >
      <div className="scene01__sticky">
        <div className="scene01__scale-shell">
          <div
            className="scene01__stage"
            style={{ "--scene01-stage-drift": `${stageDrift}px` }}
          >
            <img className="scene01__background" src={backgroundImage} alt="" loading="eager" />
            <div className="scene01__shade" aria-hidden="true" />
            <div className="scene01__smoke" aria-hidden="true" />

            <h1 id="scene01-title" className="sr-only">
              Cung Trầm Đào Xá
            </h1>

            <div className="scene01__photos" aria-label="Ảnh tư liệu làng nghề">
              <Reveal
                className="scene01__photo scene01__photo--maker"
                delay={entranceDelays.photoOne}
                threshold={0.1}
              >
                <img
                  className="scene01__photo-image"
                  src={photoCraftsman}
                  alt="Chi tiết chế tác nhạc cụ"
                  loading="lazy"
                />
              </Reveal>

              <Reveal
                className="scene01__photo scene01__photo--wood"
                delay={entranceDelays.photoTwo}
                threshold={0.1}
              >
                <img
                  className="scene01__photo-image"
                  src={photoWood}
                  alt="Vật liệu gỗ làm đàn"
                  loading="lazy"
                />
              </Reveal>

              <Reveal
                className="scene01__photo scene01__photo--drums"
                delay={entranceDelays.photoThree}
                threshold={0.1}
              >
                <img
                  className="scene01__photo-image"
                  src={photoInstruments}
                  alt="Những nhạc cụ truyền thống"
                  loading="lazy"
                />
              </Reveal>

              <Reveal
                className="scene01__photo scene01__photo--right-lower"
                delay={entranceDelays.photoThree + 80}
                threshold={0.1}
              >
                <img
                  className="scene01__photo-image"
                  src={photoMaker}
                  alt="Nghệ nhân đang làm việc"
                  loading="lazy"
                />
              </Reveal>

            </div>

            <Reveal className="scene01__composite-wrap" delay={entranceDelays.person} threshold={0.1}>
              <img
                className="scene01__title-person-composite"
                src={titlePersonComposite}
                alt=""
                aria-hidden="true"
                loading="eager"
              />
            </Reveal>

            <Reveal as="p" className="scene01__kicker" delay={entranceDelays.titleTop}>
              CUNG TRẦM
            </Reveal>

            <Reveal as="p" className="scene01__subtitle" delay={entranceDelays.subtitle}>
              Ai sẽ nối dây cho
              <br />
              những tiếng đàn cổ?
            </Reveal>

            <Reveal as="p" className="scene01__body" delay={entranceDelays.paragraph}>
              Làng nghề Đào Xá (Ứng Hòa, Hà Nội) từ lâu được biết đến là cái nôi
              chế tác nhạc cụ cổ truyền duy nhất của Thủ đô. Thế nhưng, đằng sau
              bề dày lịch sử hai trăm năm là một thực tế khốc liệt về bài toán
              lao động kế cận khi hiện tại, cả làng chỉ còn đúng một hộ bám trụ
              với nghề. Câu hỏi "Ai sẽ nối dây cho những tiếng đàn cổ?" không
              chỉ là nỗi trăn trở của người thợ cuối cùng, mà còn là thách thức
              lớn cho sự bảo tồn của một di sản văn hóa trong đời sống đương đại.
            </Reveal>

            <Reveal className="scene01__audio" delay={entranceDelays.audio} threshold={0.1}>
              <AudioNarrationButton />
            </Reveal>

            <div className="scene01__scroll-pill" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
