import { useEffect, useRef, useState } from "react";
import scene07Bg from "../../../assets/page01/scene07/scene07-bg.png";
import woodElement from "../../../assets/page01/scene07/scene07-element-wood.png";
import clockElement from "../../../assets/page01/scene07/scene07-element-clock.png";
import tuneElement from "../../../assets/page01/scene07/scene07-element-tune.png";
import "./Scene07WoodResonance.css";

const SCENE07_WIDTH = 1366;
const SCENE07_HEIGHT = 882;

export default function Scene07WoodResonance() {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [scale, setScale] = useState(() => {
    if (typeof window === "undefined") return 1;
    return document.documentElement.clientWidth / SCENE07_WIDTH;
  });

  useEffect(() => {
    let frame = 0;

    const updateScale = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setScale(document.documentElement.clientWidth / SCENE07_WIDTH);
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
      className={`scene07${isActive ? " is-active" : ""}`}
      aria-label="Đặc tính gỗ và khả năng cộng hưởng"
      style={{
        "--scene07-scale": scale,
        "--scene07-rendered-height": `${SCENE07_HEIGHT * scale}px`,
      }}
    >
      <div className="scene07__scale-shell">
        <div className="scene07__artboard">
          <img className="scene07__bg" src={scene07Bg} alt="" loading="lazy" decoding="async" />

          <p className="scene07__top-copy scene07-reveal scene07-reveal--top">
            Cùng một loại gỗ nhưng mỗi phôi gỗ lại có đặc tính khác nhau về độ xốp, độ
            đàn hồi và khả năng cộng hưởng. Vì vậy, người thợ phải liên tục quan sát,
            xử lý và điều chỉnh để đạt được chất âm mong muốn.
          </p>

          <div className="scene07__column scene07__column--one">
            <img
              className="scene07__element scene07__element--wood scene07-reveal scene07-reveal--c1-art"
              src={woodElement}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <h2 className="scene07__column-title scene07__column-title--one scene07-reveal scene07-reveal--c1-title">
              MỖI PHÔI GỖ LÀ
              <br />
              MỘT TRƯỜNG HỢP RIÊNG
            </h2>
            <p className="scene07__column-body scene07__column-body--one scene07-reveal scene07-reveal--c1-body">
              Dù nhiều công đoạn hiện nay đã có sự hỗ trợ của máy móc, nghề làm đàn
              vẫn chưa thể được tự động hóa hoàn toàn. Khác với các sản phẩm công
              nghiệp được sản xuất theo một quy trình cố định, mỗi cây đàn tại Đào Xá
              đều đòi hỏi sự kiên trì và tỉ mẫn trong suốt quá trình chế tác.
            </p>
          </div>

          <div className="scene07__column scene07__column--two">
            <img
              className="scene07__element scene07__element--clock scene07-reveal scene07-reveal--c2-art"
              src={clockElement}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <span className="scene07__clock-art-cover" aria-hidden="true" />
            <h2 className="scene07__column-title scene07__column-title--two scene07-reveal scene07-reveal--c2-title">
              THỜI GIAN HOÀN THIỆN
            </h2>
            <p className="scene07__small scene07__small--two-a scene07-reveal scene07-reveal--c2-text">
              Một cây đàn thường mất
            </p>
            <p className="scene07__number scene07__number--two-a scene07-reveal scene07-reveal--c2-num1">
              <span className="scene07__duration-text">2–3 ngày</span>
              <span
                className="scene07__duration-underline scene07__duration-underline--two-a"
                aria-hidden="true"
              />
            </p>
            <p className="scene07__label scene07__label--two-a scene07-reveal scene07-reveal--c2-label1">
              Sản phẩm đơn giản
            </p>
            <p className="scene07__number scene07__number--two-b scene07-reveal scene07-reveal--c2-num2">
              <span className="scene07__duration-text">1–2 tuần</span>
              <span
                className="scene07__duration-underline scene07__duration-underline--two-b"
                aria-hidden="true"
              />
            </p>
            <p className="scene07__label scene07__label--two-b scene07-reveal scene07-reveal--c2-label2">
              Sản phẩm yêu cầu
              <br />
              kỹ thuật cao
            </p>
          </div>

          <div className="scene07__column scene07__column--three">
            <img
              className="scene07__element scene07__element--tune scene07-reveal scene07-reveal--c3-art"
              src={tuneElement}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <h2 className="scene07__column-title scene07__column-title--three scene07-reveal scene07-reveal--c3-title">
              CHỈNH ÂM LÀ “LINH HỒN”
              <br />
              CỦA CÂY ĐÀN
            </h2>
            <p className="scene07__small scene07__small--three-a scene07-reveal scene07-reveal--c3-text1">
              Riêng công đoạn chỉnh âm có thể mất
            </p>
            <p className="scene07__number scene07__number--three scene07-reveal scene07-reveal--c3-num">
              <span className="scene07__time-label">1–2 ngày</span>
            </p>
            <p className="scene07__small scene07__small--three-b scene07-reveal scene07-reveal--c3-text2">
              người thợ kiểm tra, lắng nghe và điều chỉnh cho đến khi đạt yêu cầu.
            </p>
          </div>

          <div className="scene07__bottom-panel scene07-reveal scene07-reveal--bottom-panel" />
          <p className="scene07__bottom-copy scene07-reveal scene07-reveal--bottom-text">
            Chính những công đoạn đòi hỏi khả năng cảm âm, kinh nghiệm thực hành và sự
            tinh chỉnh liên tục ấy đã tạo nên nét riêng của nghề làm đàn Đào Xá, đồng
            thời khiến nghề này đến nay vẫn khó có thể thay thế hoàn toàn bằng máy móc.
            Những kỹ năng ấy hiện được lưu giữ và tiếp nối bởi nghệ nhân Đào Anh Tuấn -
            người thợ làm đàn cuối cùng của Đào Xá.
          </p>
        </div>
      </div>
    </section>
  );
}
