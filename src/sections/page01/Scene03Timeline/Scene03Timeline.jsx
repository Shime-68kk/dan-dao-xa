import { useEffect, useState } from "react";
import { useAutoplayTimeline } from "../../../hooks/useAutoplayTimeline.js";
import { useElementInView } from "../../../hooks/useElementInView.js";
import { useWidthScale } from "../../../hooks/useWidthScale.js";
import mainBackground from "../../../assets/page01/shared/main-wood-background.webp";
import musicStaffStrip from "../../../assets/page01/scene03/music-staff-strip.png";
import { scene03Motion } from "./scene03.motion.js";
import { STAFF_SOURCE_WIDTH, timelineMilestones } from "./scene03.timeline.js";
import "./Scene03Timeline.css";

const IN_VIEW_OPTIONS = {
  threshold: 0.35,
  rootMargin: "0px 0px -18% 0px",
};

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
}

function useDebugScene3() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(new URLSearchParams(window.location.search).get("debugScene3") === "1");
  }, []);

  return enabled;
}

export default function Scene03Timeline() {
  const [sectionRef, isVisible] = useElementInView(IN_VIEW_OPTIONS);
  const stageScale = useWidthScale(1366);
  const prefersReducedMotion = usePrefersReducedMotion();
  const debugScene3 = useDebugScene3();
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const isPaused = isHoverPaused || isUserPaused;
  const motion = scene03Motion.desktop;
  const { progress } = useAutoplayTimeline(
    isVisible && !prefersReducedMotion,
    motion.durationMs,
    isPaused
  );
  const progressForRender = prefersReducedMotion ? 0.35 : progress;
  const getAnchorX = (sourceAnchorX) => (sourceAnchorX / STAFF_SOURCE_WIDTH) * motion.trackWidth;
  const firstAnchor = getAnchorX(timelineMilestones[0].sourceAnchorX);
  const lastAnchor = getAnchorX(timelineMilestones[timelineMilestones.length - 1].sourceAnchorX);
  const trackStartX = 1366 * 0.76 - firstAnchor;
  const trackEndX = 1366 * 0.42 - lastAnchor;
  const trackX = trackStartX + (trackEndX - trackStartX) * progressForRender;

  return (
    <section
      ref={sectionRef}
      className={`scene03-timeline ${isVisible ? "is-visible" : ""}`}
      style={{
        "--scene03-scale": stageScale,
        "--scene03-track-x": `${trackX}px`,
        "--scene03-track-width": `${motion.trackWidth}px`,
      }}
      aria-labelledby="scene03-title"
    >
      <div className="scene03-stage">
        <img className="scene03-bg" src={mainBackground} alt="" aria-hidden="true" loading="lazy" />
        <div className="scene03-shade" aria-hidden="true" />

        <h2 id="scene03-title" className="scene03-heading scene03-reveal">
          <span>CÁC MỐC</span>
          <span>PHÁT TRIỂN</span>
          <span>CHÍNH</span>
        </h2>

        <div
          className={`scene03-track-window ${isPaused ? "is-paused" : ""}`}
          role="button"
          tabIndex={0}
          aria-pressed={isPaused}
          aria-label={isPaused ? "Timeline paused. Press to resume." : "Timeline playing. Press to pause."}
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") setIsHoverPaused(true);
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") setIsHoverPaused(false);
          }}
          onClick={() => setIsUserPaused((value) => !value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setIsUserPaused((value) => !value);
            }
          }}
          onTouchStart={(event) => {
            event.preventDefault();
            setIsUserPaused((value) => !value);
          }}
        >
          <div className="scene03-moving-track">
            <img className="scene03-staff-img" src={musicStaffStrip} alt="" aria-hidden="true" loading="lazy" />

            {timelineMilestones.map((item, index) => {
              const anchorX = getAnchorX(item.sourceAnchorX);

              return (
                <article
                  key={item.id}
                  className={`scene03-milestone scene03-milestone--${index + 1} ${
                    !item.hasNote ? "scene03-milestone--no-note" : ""
                  }`}
                  style={{
                    "--anchor-x": `${anchorX}px`,
                    "--text-nudge-x": `${item.nudgeX ?? 0}px`,
                  }}
                >
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}

            {debugScene3
              ? timelineMilestones.map((item) => (
                  <span
                    key={`${item.id}-debug`}
                    className="scene03-anchor-debug"
                    style={{ "--anchor-x": `${getAnchorX(item.sourceAnchorX)}px` }}
                  />
                ))
              : null}
          </div>
        </div>

        <span className="scene03-pause-hint">
          {isPaused ? "Đang tạm dừng - chạm để chạy tiếp" : "Chạm vào dòng nhạc để tạm dừng"}
        </span>

      </div>
    </section>
  );
}
