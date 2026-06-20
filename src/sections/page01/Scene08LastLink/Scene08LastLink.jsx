import { useEffect, useRef, useState } from "react";
import villageSign from "../../../assets/page01/scene08/village-sign-corrected.png";
import artisanStaff from "../../../assets/page01/scene08/scene08-artisan-staff.png";
import artistLockup from "../../../assets/page01/scene08/artist-dao-anh-tuan-title.png";
import soanPortraitCard from "../../../../slide 8/ảnh 3.png";
import referenceTop from "../../../assets/page01/scene08/scene08-ref-1.png";
import referenceContinuation from "../../../assets/page01/scene08/scene08-ref-2.png";
import "./Scene08LastLink.css";

const SCENE08_WIDTH = 1366;
const SCENE08_PART1_HEIGHT = 1774;
const STAFF_QUOTE_LINES = [
  "“Trước tôi đi lái xe. Thấy đây là nghề truyền",
  "thống của địa phương và của gia đình quá lâu",
  "đời rồi, không ai làm nữa tôi thấy tiếc. Nó",
  "vừa mang nét bản sắc văn hóa Việt Nam, sợ bị",
  "thất truyền nên tôi về học thôi.”",
];
const STAFF_LINE_YS = [48, 75, 102, 129, 156];
const STAFF_QUOTE_LINE_TOPS = [-10, 19, 54, 86, 115];

export default function Scene08LastLink() {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const showReferenceOverlay =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("debugScene08Ref") === "1";
  const showStaffDebug =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("debugScene08Staff") === "1";
  const [scale, setScale] = useState(() => {
    if (typeof window === "undefined") return 1;
    return document.documentElement.clientWidth / SCENE08_WIDTH;
  });

  useEffect(() => {
    let frame = 0;

    const updateScale = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setScale(document.documentElement.clientWidth / SCENE08_WIDTH);
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
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`scene08${isActive ? " is-active" : ""}`}
      aria-label="Mắt xích cuối cùng của dòng họ bốn đời"
      style={{
        "--scene08-scale": scale,
        "--scene08-rendered-height": `${SCENE08_PART1_HEIGHT * scale}px`,
      }}
    >
      <div className="scene08__scale-shell">
        <div className="scene08__artboard">
          <div className="scene08__title-group scene08-reveal scene08-reveal--title">
            <div className="scene08__clef" aria-hidden="true">
              𝄞
            </div>
            <h2 className="scene08__title">
              <span className="scene08__title-small">MẮT XÍCH</span>
              <span className="scene08__title-large">CUỐI CÙNG</span>
              <span className="scene08__title-of">của</span>
              <span className="scene08__title-family">DÒNG HỌ BỐN ĐỜI</span>
            </h2>
          </div>

          <p className="scene08__intro scene08-reveal scene08-reveal--intro">
            Trong con ngõ nhỏ của làng Đào Xá, một xưởng đàn cũ vẫn tồn tại giữa
            những ngôi nhà mới mọc lên xung quanh. Không có dây chuyền hiện đại hay
            quy mô sản xuất lớn, nơi đây giữ gần như nguyên vẹn quy trình chế tác
            nhạc cụ truyền thống qua nhiều thế hệ.
          </p>

          <img
            className="scene08__village-sign scene08-reveal scene08-reveal--sign"
            src={villageSign}
            alt=""
            loading="lazy"
            decoding="async"
          />

          <img
            className="scene08__artisan-staff scene08-reveal scene08-reveal--artisan"
            src={artisanStaff}
            alt=""
            loading="lazy"
            decoding="async"
          />

          <p className="scene08__label scene08__label--year scene08-reveal scene08-reveal--label1">
            1968
          </p>
          <p className="scene08__label scene08__label--place scene08-reveal scene08-reveal--label2">
            THÔN ĐÀO XÁ
          </p>
          <p className="scene08__label scene08__label--generation scene08-reveal scene08-reveal--label3">
            ĐỜI THỨ 4
          </p>

          <div
            className="scene08__artist-lockup scene08-reveal scene08-reveal--artist"
            aria-label="Nghệ nhân Đào Anh Tuấn cuối cùng"
          >
            <img
              className="scene08__artist-lockup-img"
              src={artistLockup}
              alt=""
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
            <span className="scene08__artist-semantic">
              NGHỆ NHÂN ĐÀO ANH TUẤN CUỐI CÙNG
            </span>
          </div>

          <p className="scene08__bio scene08-reveal scene08-reveal--bio">
            Ông Đào Anh Tuấn, sinh năm 1968, hiện là người duy nhất tại Đào Xá còn có
            khả năng chế tác hoàn chỉnh các loại nhạc cụ dây dân tộc từ khâu chọn vật
            liệu đến hoàn thiện sản phẩm. Trong khi nhiều thợ khác chỉ thực hiện một
            số công đoạn nhất định, ông có thể đảm nhiệm toàn bộ quy trình sản xuất.
          </p>

          <p className="scene08__return-copy scene08-reveal scene08-reveal--return">
            Tuy nhiên, ông Tuấn không theo nghề từ nhỏ. Nhận thấy nghề làm đàn vất vả
            và thu nhập thấp, ông từng rời quê để làm nghề lái xe. Chỉ khi cha già yếu
            và xưởng đàn đứng trước nguy cơ ngừng hoạt động, ông mới quyết định quay
            về tiếp nối nghề gia đình.
          </p>

          <div className="scene08__staff-paper-group scene08-reveal scene08-reveal--quote">
            <div
              className="scene08__staff-quote"
              aria-label="Trước tôi đi lái xe. Thấy đây là nghề truyền thống của địa phương và của gia đình quá lâu đời rồi, không ai làm nữa tôi thấy tiếc. Nó vừa mang nét bản sắc văn hóa Việt Nam, sợ bị thất truyền nên tôi về học thôi."
            >
              {STAFF_QUOTE_LINES.map((line, index) => (
                <span
                  key={line}
                  className="scene08__staff-quote-line"
                  style={{ top: `${STAFF_QUOTE_LINE_TOPS[index]}px` }}
                >
                  {line}
                </span>
              ))}
            </div>
            {showStaffDebug ? (
              <div className="scene08__staff-guides" aria-hidden="true">
                {STAFF_LINE_YS.map((lineY) => (
                  <span
                    key={lineY}
                    className="scene08__staff-guide"
                    style={{ top: `${lineY}px` }}
                  />
                ))}
              </div>
            ) : null}
          </div>

          <p className="scene08__lower-bio scene08-reveal scene08-reveal--lower-bio">
            Ông Đào Anh Tuấn là con trai của cố Nghệ nhân Ưu tú Đào Văn Soạn,
            người từng được phong tặng danh hiệu Nghệ nhân Dân gian cấp quốc gia
            và được xem là một trong những gương mặt tiêu biểu của nghề chế tác
            nhạc cụ dân tộc Việt Nam.
          </p>

          <p className="scene08__lower-story scene08-reveal scene08-reveal--lower-story">
            Kể từ khi tiếp nối công việc của cha mình, hoạt động của xưởng phụ
            thuộc vào sức khỏe của ông Tuấn và nguồn đơn đặt hàng thực tế. Khi sức
            khỏe cho phép, ông có thể ngồi bên mộc 8–10 tiếng mỗi ngày; những hôm
            không khỏe, công việc được tạm gác lại. Đơn hàng đến đâu, ông làm đến
            đó. Khi vắng khách, ông tiếp tục hoàn thiện những cây đàn còn đang dở.
            Ngoài các đơn đặt hàng thường xuyên, thỉnh thoảng ông cũng mang đàn
            tham gia hội chợ, chương trình giới thiệu sản phẩm khi được ngành văn
            hóa hoặc du lịch Hà Nội mời.
          </p>

          <p className="scene08__workload-stamp scene08-reveal scene08-reveal--metric">
            <span>TRUNG BÌNH</span>
            <span>8-10 TIẾNG / NGÀY</span>
          </p>

          <div className="scene08__soan-card scene08-reveal scene08-reveal--soan-card">
            <img
              className="scene08__soan-card-img"
              src={soanPortraitCard}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div className="scene08__soan-caption">
              <span>Cố Nghệ nhân Ưu tú</span>
              <span>Đào Văn Soạn (1941-2022)</span>
            </div>
          </div>

          {showReferenceOverlay ? (
            <div className="scene08__debug-ref" aria-hidden="true">
              <img className="scene08__debug-ref-img scene08__debug-ref-img--top" src={referenceTop} alt="" />
              <img
                className="scene08__debug-ref-img scene08__debug-ref-img--continuation"
                src={referenceContinuation}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
