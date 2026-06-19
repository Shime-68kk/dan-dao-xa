import { useEffect, useState } from "react";

export function useWidthScale(baseWidth = 1366) {
  const getScale = () => {
    if (typeof window === "undefined") return 1;
    return window.innerWidth / baseWidth;
  };

  const [scale, setScale] = useState(getScale);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => setScale(getScale()));
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, [baseWidth]);

  return scale;
}
