import { useEffect, useState } from "react";

export function useWidthScale(baseWidth = 1366) {
  const getScale = () => {
    if (typeof window === "undefined") return 1;
    return window.innerWidth / baseWidth;
  };

  const [scale, setScale] = useState(getScale);

  useEffect(() => {
    let frame = 0;
    let lastWidth = typeof window !== "undefined" ? window.innerWidth : 0;

    const update = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const newWidth = window.innerWidth;
        const visualViewport = window.visualViewport;
        
        // Kiểm tra xem người dùng có đang zoom bằng cử chỉ (pinch-to-zoom) hay không
        const isZoomed = visualViewport && Math.abs(visualViewport.scale - 1) > 0.05;
        if (isZoomed) {
          // Bỏ qua cập nhật scale khi đang zoom để tránh kích hoạt re-render liên tục gây đơ/văng app
          return;
        }

        // Trên thiết bị di động, chiều rộng màn hình thực tế không đổi khi cuộn (chỉ có thanh địa chỉ co giãn)
        const isMobile = newWidth < 768 || (typeof window !== "undefined" && 'ontouchstart' in window);
        if (isMobile && newWidth === lastWidth) {
          return;
        }

        lastWidth = newWidth;
        setScale(getScale());
      });
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
