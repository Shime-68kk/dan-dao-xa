import { useEffect, useRef, useState } from "react";
import {
  BadgeDollarSign,
  BriefcaseBusiness,
  CalendarDays,
  Factory,
  GraduationCap,
  HandHeart,
  MessageCircleQuestion,
  Scale,
  TrendingDown,
  UserRoundX,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { useWidthScale } from "../../../hooks/useWidthScale.js";
import scene05Dan from "../../../assets/page01/scene05/scene05-dan.png";
import scene05QuoteFrame from "../../../assets/page01/scene05/scene05-quote-frame.png";
import scene05Title from "../../../assets/page01/scene05/scene05-title-cropped.png";
import "./Scene05NarrowingPressure.css";

const SCENE05_WIDTH = 1420;

const TOP_INDICATORS = [
  { icon: TrendingDown, lines: ["Thị trường", "thu hẹp"] },
  { icon: UsersRound, lines: ["Thủ công", "truyền thống"] },
  { icon: GraduationCap, lines: ["1-2 năm", "học nghề"] },
  { icon: BadgeDollarSign, lines: ["5-7 triệu đồng", "/1 tháng"] },
];

const PRESSURE_CARDS = [
  {
    number: "01",
    icon: UsersRound,
    title: ["Thị trường", "tiêu thụ đặc thù"],
    body: "Đối tượng sử dụng chủ yếu là các nghệ sĩ, đoàn nghệ thuật, cơ sở đào tạo âm nhạc hoặc những người nghiên cứu và thực hành âm nhạc truyền thống.",
    pills: ["Không phổ thông", "Nhu cầu hẹp"],
  },
  {
    number: "02",
    icon: Factory,
    title: ["Cạnh tranh từ", "sản xuất công nghiệp"],
    body: "Nhạc cụ công nghiệp có lợi thế về giá, số lượng và tốc độ sản xuất.",
    pills: ["Giá thấp", "Sản lượng lớn"],
  },
  {
    number: "03",
    icon: UserRoundX,
    title: ["Lao động", "rời nghề"],
    body: "Đơn hàng giảm khiến nhiều thợ chuyển sang công việc ổn định hơn, thu nhập ổn định hơn.",
    pills: ["Rời nghề"],
  },
  {
    number: "04",
    icon: HandHeart,
    title: ["Đứt gãy", "lực lượng kế cận"],
    body: "Người học cần 1–2 năm để nắm kỹ năng cơ bản, công đoạn khó cần thêm nhiều năm tích lũy.",
    pills: ["1–2 năm"],
  },
];

const COMPARISON_ROWS = [
  {
    craft: "1–2 năm để thành thạo nghề",
    criteria: ["Thời gian", "đào tạo"],
    factory: ["Có thể làm việc ngay", "sau tuyển dụng"],
  },
  {
    craft: ["Thu nhập tích lũy dần theo kinh", "nghiệm"],
    criteria: "Thu nhập",
    factory: ["5–7 triệu đồng/tháng", "ngay từ tháng đầu"],
  },
  {
    craft: "Truyền nghề trực tiếp",
    criteria: ["Hình thức", "đào tạo"],
    factory: ["Quy trình làm việc", "tiêu chuẩn hóa"],
  },
  {
    craft: ["Phụ thuộc vào đơn hàng,", "thị trường"],
    criteria: "Tính ổn định",
    factory: ["Thu nhập ổn định", "theo tháng"],
  },
];

const STATS = [
  {
    icon: CalendarDays,
    value: "1–2",
    suffix: "năm",
    note: "Thời gian để thành thạo kỹ năng cơ bản",
  },
  {
    icon: WalletCards,
    value: "5–7",
    suffix: "triệu đồng/tháng",
    note: "Mức thu nhập có thể có ngay từ tháng đầu tại khu công nghiệp",
  },
  {
    icon: MessageCircleQuestion,
    value: "4",
    suffix: "nguyên nhân",
    note: "Cùng lúc thu hẹp không gian tồn tại của nghề làm đàn",
  },
];

function renderLines(value) {
  const lines = Array.isArray(value) ? value : [value];
  return lines.map((line) => <span key={line}>{line}</span>);
}

export default function Scene05NarrowingPressure() {
  const sectionRef = useRef(null);
  const artboardRef = useRef(null);
  const quoteRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);
  const [contentHeight, setContentHeight] = useState(1800);
  const scale = useWidthScale(SCENE05_WIDTH);

  useEffect(() => {
    const node = artboardRef.current;
    if (!node) return undefined;

    const ro = new ResizeObserver(([entry]) => {
      const height = entry.borderBoxSize?.[0]?.blockSize ?? node.offsetHeight;
      setContentHeight(height);
    });
    ro.observe(node);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || isVisible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    const node = quoteRef.current;
    if (!node) return undefined;

    const handleScroll = () => {
      const rect = node.getBoundingClientRect();
      // Chỉ kích hoạt khi phần đỉnh của blockquote đi vào 78% chiều cao màn hình (tức là đã hiển thị rõ ràng trên viewport)
      if (rect.top > 0 && rect.top < window.innerHeight * 0.78) {
        setQuoteVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    // Kiểm tra ngay sau khi mount và sau 500ms để đảm bảo layout và scale đã ổn định
    handleScroll();
    const timer = setTimeout(handleScroll, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, [quoteVisible]);

  return (
    <section
      ref={sectionRef}
      className={`scene05-pressure${isVisible ? " is-visible" : ""}`}
      aria-label="Khi thanh âm cũ không còn chỗ đứng"
      style={{
        "--scene05-scale": scale,
        "--scene05-rendered-height": `${contentHeight * scale + 6}px`,
      }}
    >
      <div className="scene05__scale-shell">
        <div ref={artboardRef} className="scene05__artboard">
          <header className="scene05-hero">
            <img
              className="scene05-hero__title scene05-reveal scene05-reveal--hero-title"
              src={scene05Title}
              alt="Khi thanh âm cũ không còn chỗ đứng"
              loading="lazy"
              decoding="async"
            />
            <p className="scene05-hero__intro scene05-reveal scene05-reveal--hero-intro">
              Sự thu hẹp của làng nghề Đào Xá không phải là kết quả của một nguyên nhân đơn lẻ mà là hệ quả
              của nhiều thay đổi diễn ra đồng thời trong đời sống kinh tế, văn hóa và xã hội.
            </p>
            <img
              className="scene05-hero__dan scene05-reveal scene05-reveal--hero-dan"
              src={scene05Dan}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
          </header>

          <div className="scene05-panel scene05-reveal scene05-reveal--panel">
            <div className="scene05-indicators scene05-reveal scene05-reveal--indicators" aria-label="Các chỉ báo thu hẹp">
              {TOP_INDICATORS.map(({ icon: Icon, lines }) => (
                <div className="scene05-indicator" key={lines.join("-")}>
                  <Icon className="scene05-indicator__icon" size={42} strokeWidth={3} aria-hidden="true" />
                  <span className="scene05-indicator__text">{renderLines(lines)}</span>
                </div>
              ))}
            </div>

            <div className="scene05-section-heading">
              <span aria-hidden="true" />
              <h2>4 ÁP LỰC THU HẸP</h2>
              <span aria-hidden="true" />
            </div>

            <div className="scene05-pressure-grid">
              {PRESSURE_CARDS.map(({ number, icon: Icon, title, body, pills }, index) => (
                <article className={`scene05-pressure-card scene05-reveal scene05-reveal--card-${index + 1}`} key={number}>
                  <div className="scene05-pressure-card__top">
                    <strong>{number}</strong>
                    <h3>{renderLines(title)}</h3>
                  </div>
                  <div className="scene05-pressure-card__body">
                    <span className="scene05-pressure-card__icon" aria-hidden="true">
                      <Icon size={30} strokeWidth={2.15} />
                    </span>
                    <p>{body}</p>
                  </div>
                  <div className="scene05-pressure-card__pills">
                    {pills.map((pill) => (
                      <span key={pill}>{pill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <section className="scene05-comparison scene05-reveal scene05-reveal--comparison" aria-labelledby="scene05-comparison-title">
              <div className="scene05-section-heading scene05-section-heading--comparison">
                <span aria-hidden="true" />
                <h2 id="scene05-comparison-title">SO SÁNH LỰA CHỌN VIỆC LÀM</h2>
                <span aria-hidden="true" />
              </div>

              <div className="scene05-comparison__headers" aria-hidden="true">
                <strong>Nghề làm đàn Đào Xá</strong>
                <strong>Tiêu chí</strong>
                <strong>Làm việc tại Khu công nghiệp</strong>
              </div>

              <div className="scene05-comparison__table">
                {COMPARISON_ROWS.map((row) => (
                  <div className="scene05-comparison__row" key={Array.isArray(row.criteria) ? row.criteria.join(" ") : row.criteria}>
                    <p>{renderLines(row.craft)}</p>
                    <strong>{renderLines(row.criteria)}</strong>
                    <p>{renderLines(row.factory)}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="scene05-stats scene05-reveal scene05-reveal--stats">
              {STATS.map(({ icon: Icon, value, suffix, note }) => (
                <div className="scene05-stat" key={`${value}-${suffix}`}>
                  <span className="scene05-stat__icon" aria-hidden="true">
                    <Icon size={36} strokeWidth={2.1} />
                  </span>
                  <strong>{value}</strong>
                  <span className="scene05-stat__suffix">{suffix}</span>
                  <p>{note}</p>
                </div>
              ))}
            </div>

            <section className="scene05-insight scene05-reveal scene05-reveal--insight" aria-label="Rào cản lớn">
              <div className="scene05-insight__seal" aria-hidden="true">
                <Scale size={34} strokeWidth={1.7} />
                <strong>RÀO CẢN LỚN</strong>
                <span>khiến nghề làm đàn khó thu hút lao động trẻ</span>
              </div>
              <p>
                Sự chênh lệch về thời gian đào tạo và khả năng tạo thu nhập khiến nghề làm đàn ngày càng khó
                thu hút lao động trẻ. Trong khi nhiều ngành nghề mới mang lại cơ hội việc làm nhanh chóng và
                nguồn thu nhập ổn định, nghề chế tác nhạc cụ vẫn đòi hỏi quá trình học hỏi kéo dài trước khi
                người học có thể tự đứng nghề.
              </p>
            </section>

            <blockquote
              ref={quoteRef}
              className={`scene05-quote${quoteVisible ? " is-quote-visible" : ""}`}
              style={{ "--scene05-quote-frame": `url(${scene05QuoteFrame})` }}
            >
              <span className="scene05-quote__text">
                Bởi lẽ, đây là một nghề thủ công phức tạp, gắn với chuỗi công đoạn đòi hỏi kỹ thuật cao và sự
                tích lũy kinh nghiệm qua thời gian. Đằng sau mỗi cây đàn hoàn thiện là hàng chục công đoạn chế
                tác thủ công cùng những kỹ năng được tích lũy qua nhiều thế hệ. Chính quy trình ấy không chỉ tạo
                nên chất lượng âm thanh đặc trưng của nhạc cụ Đào Xá mà còn phản ánh những giá trị nghề nghiệp
                đã được gìn giữ suốt hơn hai thế kỷ tồn tại của làng nghề.
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
