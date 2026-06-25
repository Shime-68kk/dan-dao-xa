import { useEffect, useState } from "react";

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let frame = 0;

    const update = () => {
      if (frame) window.cancelAnimationFrame(frame);

      frame = window.requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const viewport = window.innerHeight || 1;
        const total = rect.height - viewport;

        if (total <= 0) {
          setProgress(rect.top <= 0 ? 1 : 0);
          return;
        }

        setProgress(clamp(-rect.top / total));
      });
    };

    const handleResize = () => {
      const visualViewport = window.visualViewport;
      const isZoomed = visualViewport && Math.abs(visualViewport.scale - 1) > 0.05;
      if (isZoomed) return;
      update();
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", update);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", update);
    };
  }, [ref]);

  return progress;
}
