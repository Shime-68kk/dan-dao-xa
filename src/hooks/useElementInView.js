import { useEffect, useRef, useState } from "react";

export function useElementInView(options = null) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -18% 0px",
        ...(options ?? {}),
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, options]);

  return [ref, inView];
}
