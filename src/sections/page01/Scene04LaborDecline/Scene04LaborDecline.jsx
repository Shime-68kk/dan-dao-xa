import { useEffect, useState } from "react";
import { useElementInView } from "../../../hooks/useElementInView.js";
import { useWidthScale } from "../../../hooks/useWidthScale.js";
import baseWoodBackground from "../../../../nền chủ đạo.png";
import decorativeOverlay from "../../../../Slide 4/nền.png";
import slide4Reference from "../../../../Slide 4/thamkhaoslide4.png";
import LaborDeclineChart from "./LaborDeclineChart.jsx";
import "./Scene04LaborDecline.css";

const IN_VIEW_OPTIONS = {
  threshold: 0.22,
  rootMargin: "0px 0px -18% 0px",
};

function useDebugSlide4() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(new URLSearchParams(window.location.search).get("debugSlide4") === "1");
  }, []);

  return enabled;
}

export default function Scene04LaborDecline() {
  const [sectionRef, isVisible] = useElementInView(IN_VIEW_OPTIONS);
  const stageScale = useWidthScale(1366);
  const sceneHeight = Math.ceil(768 * stageScale);
  const debugSlide4 = useDebugSlide4();

  return (
    <section
      ref={sectionRef}
      className={`scene04-labor ${isVisible ? "is-visible" : ""}`}
      style={{
        "--scene04-scale": stageScale,
        "--scene04-height": `${sceneHeight}px`,
      }}
      aria-label="Sự sụt giảm lao động"
    >
      <div className="scene04-scale-shell">
        <div className="scene04-stage">
          <img className="scene04-base-bg" src={baseWoodBackground} alt="" aria-hidden="true" loading="lazy" />
          <img className="scene04-overlay-bg" src={decorativeOverlay} alt="" aria-hidden="true" loading="lazy" />
          <div className="scene04-chart-glare-fix" aria-hidden="true" />

          <div className="scene04-chart-panel scene04-reveal scene04-reveal--chart">
            <LaborDeclineChart isVisible={isVisible} />
          </div>

          <aside className="scene04-right-text" aria-label="Bối cảnh suy giảm lao động">
            <p className="scene04-reveal scene04-reveal--right-1">
              Từ một nghề gia truyền, chế tác nhạc cụ dần trở thành sinh kế
              của nhiều hộ dân địa phương. Có những giai đoạn, gần như cả làng
              cùng tham gia sản xuất, tạo nên một không gian nghề nghiệp đặc
              trưng với tiếng cưa, tiếng đục vang lên từ sáng đến tối. Những
              cây đàn được vận chuyển đi nhiều tỉnh thành, phục vụ các nhà hát,
              đoàn nghệ thuật và cơ sở đào tạo âm nhạc trên cả nước.
            </p>
            <p className="scene04-reveal scene04-reveal--right-2">
              Tuy nhiên, bức tranh làng nghề ngày nay đã có nhiều thay đổi. Nếu
              như đầu những năm 1990, Đào Xá có hơn 50 hộ tham gia sản xuất
              nhạc cụ thì đến năm 2026, hoạt động chế tác nhạc cụ truyền thống
              gần như chỉ còn được duy trì bởi một hộ gia đình.
            </p>
          </aside>

          <p className="scene04-bottom-text scene04-reveal scene04-reveal--bottom">
            Sự suy giảm liên tục của lực lượng lao động cho thấy nghề làm đàn
            tại Đào Xá đang đứng trước nguy cơ đứt gãy truyền nghề. Một làng
            nghề từng phát triển mạnh suốt hơn hai thế kỷ đang phải đối mặt với
            những thách thức chưa từng có trong việc duy trì lực lượng kế cận.
            Điều gì đã khiến một làng nghề từng được xem là cái nôi chế tác nhạc
            cụ dân tộc của Hà Nội dần thu hẹp đến như vậy?
          </p>

          {debugSlide4 ? (
            <img className="scene04-debug-reference" src={slide4Reference} alt="" aria-hidden="true" />
          ) : null}
        </div>
      </div>
    </section>
  );
}
