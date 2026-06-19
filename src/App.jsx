import { useEffect } from "react";
import Page01Story from "./pages/Page01Story/Page01Story.jsx";

export default function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const debugMobile = params.get("debugMobile") === "1";
    document.documentElement.toggleAttribute("data-debug-mobile", debugMobile);

    if (!debugMobile) return undefined;

    let frame = 0;
    const updateOverflowFlag = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const hasOverflow = document.documentElement.scrollWidth > window.innerWidth + 2;
        document.documentElement.toggleAttribute("data-mobile-overflow", hasOverflow);
        if (hasOverflow) {
          console.warn(
            `[debugMobile] horizontal overflow: scrollWidth=${document.documentElement.scrollWidth}, innerWidth=${window.innerWidth}`
          );
        }
      });
    };

    updateOverflowFlag();
    window.addEventListener("resize", updateOverflowFlag);
    window.addEventListener("orientationchange", updateOverflowFlag);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateOverflowFlag);
      window.removeEventListener("orientationchange", updateOverflowFlag);
      document.documentElement.removeAttribute("data-debug-mobile");
      document.documentElement.removeAttribute("data-mobile-overflow");
    };
  }, []);

  return <Page01Story />;
}
