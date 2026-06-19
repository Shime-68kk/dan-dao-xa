import { useEffect, useRef, useState } from "react";
import scene05Full from "../../../assets/page01/scene05/scene05-full.png";
import "./Scene05NarrowingPressure.css";

export default function Scene05NarrowingPressure() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || isVisible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`scene05-pressure ${isVisible ? "is-visible" : ""}`}
      aria-label="Khi thanh âm cũ không còn chỗ đứng"
    >
      <div className="scene05-visual-wrap">
        <img
          className="scene05-full-image"
          src={scene05Full}
          alt="Khi thanh âm cũ không còn chỗ đứng - các áp lực thu hẹp và so sánh lựa chọn việc làm"
          loading="lazy"
          decoding="async"
          width="1366"
          height="2100"
        />
      </div>
    </section>
  );
}
