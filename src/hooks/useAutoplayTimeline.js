import { useEffect, useRef, useState } from "react";

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function useAutoplayTimeline(isActive, durationMs = 22000, isPaused = false) {
  const [progress, setProgress] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);
  const rafRef = useRef(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    if (!isActive || hasCompleted) return undefined;

    const tick = (now) => {
      if (lastTimeRef.current == null) {
        lastTimeRef.current = now;
      }

      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;

      if (!isPaused) {
        elapsedRef.current += delta;
        const value = clamp(elapsedRef.current / durationMs);
        setProgress(value);

        if (value >= 1) {
          setHasCompleted(true);
          return;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [isActive, durationMs, isPaused, hasCompleted]);

  const reset = () => {
    cancelAnimationFrame(rafRef.current);
    elapsedRef.current = 0;
    lastTimeRef.current = null;
    setProgress(0);
    setHasCompleted(false);
  };

  return { progress, hasCompleted, reset };
}
