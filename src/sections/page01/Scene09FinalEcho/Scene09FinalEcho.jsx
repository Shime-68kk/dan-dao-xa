import { useEffect, useRef, useState } from "react";
import { useWidthScale } from "../../../hooks/useWidthScale.js";
import scene09Bg from "../../../../slide 9/nền.png";
import icon20Years from "../../../../slide 9/12.png";
import iconOneHousehold from "../../../../slide 9/13.png";
import iconHeritage from "../../../../slide 9/14.png";
import contentFrame from "../../../assets/page01/scene09/scene09-frame-trimmed.png";
import "./Scene09FinalEcho.css";

const SCENE09_WIDTH = 1366;
const SCENE09_HEIGHT = 869;

export default function Scene09FinalEcho() {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const scale = useWidthScale(SCENE09_WIDTH);

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
      className={`scene09${isActive ? " is-active" : ""}`}
      aria-label="Dư âm cuối cùng của làng đàn Đào Xá"
      style={{
        "--scene09-scale": scale,
        "--scene09-rendered-height": `${SCENE09_HEIGHT * scale}px`,
      }}
    >
      <div className="scene09__scale-shell">
        <div className="scene09__artboard">
          <img className="scene09__bg scene09-reveal scene09-reveal--bg" src={scene09Bg} alt="" />

          <img
            className="scene09__icon scene09__icon--years scene09-reveal scene09-reveal--icon-1"
            src={icon20Years}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <img
            className="scene09__icon scene09__icon--household scene09-reveal scene09-reveal--icon-2"
            src={iconOneHousehold}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <img
            className="scene09__icon scene09__icon--heritage scene09-reveal scene09-reveal--icon-3"
            src={iconHeritage}
            alt=""
            loading="lazy"
            decoding="async"
          />

          <div className="scene09__content scene09-reveal scene09-reveal--frame">
            <img
              className="scene09__frame"
              src={contentFrame}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <p className="scene09__copy">
              Sau hơn 20 năm trực tiếp đứng xưởng, ông Tuấn vẫn tiếp tục giữ phần kỹ
              nghệ được truyền qua bốn đời trong gia đình. Với Đào Xá, sự hiện diện
              của xưởng đàn không chỉ là hoạt động mưu sinh của một hộ gia đình mà
              còn là dấu vết còn lại của một làng nghề từng phát triển mạnh trong quá
              khứ. Dù vậy, những cây đàn mang dấu ấn của làng nghề vẫn tiếp tục hiện
              diện trong các sân khấu biểu diễn, cơ sở đào tạo âm nhạc và đời sống
              của những người yêu nhạc dân tộc. Không chỉ lưu giữ những thanh âm của
              quá khứ, nhiều loại nhạc cụ truyền thống ngày nay còn đang tìm được sức
              sống mới khi xuất hiện trong các sáng tạo âm nhạc hiện đại, mở ra những
              cơ hội để âm nhạc cũng như nhạc cụ dân tộc tiếp cận gần hơn với công
              chúng trẻ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
