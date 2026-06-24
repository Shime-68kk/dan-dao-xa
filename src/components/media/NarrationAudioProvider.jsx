import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

const AUDIO_SRC = `${import.meta.env.BASE_URL}audio/dao-xa-narration.mp3`;
const SCENE10_AUDIO_FOCUS_EVENT = "dao-xa:scene10-audio-focus";
const FADE_OUT_DURATION_MS = 400;

const NarrationAudioContext = createContext(null);

export function NarrationAudioProvider({ children }) {
  const audioRef = useRef(null);
  const fadeFrameRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasAudio, setHasAudio] = useState(true);

  const cancelFade = useCallback(() => {
    if (!fadeFrameRef.current) return;
    window.cancelAnimationFrame(fadeFrameRef.current);
    fadeFrameRef.current = 0;
  }, []);

  const stopNarration = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    cancelFade();
    audio.pause();
    audio.currentTime = 0;
    audio.volume = 1;
    setProgress(0);
    setIsPlaying(false);
  }, [cancelFade]);

  const fadeOutNarrationAndStop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || audio.paused) return;

    cancelFade();
    const startVolume = audio.volume || 1;
    const startedAt = performance.now();

    const tick = (now) => {
      const progressRatio = Math.min(1, (now - startedAt) / FADE_OUT_DURATION_MS);
      audio.volume = startVolume * (1 - progressRatio);

      if (progressRatio < 1) {
        fadeFrameRef.current = window.requestAnimationFrame(tick);
        return;
      }

      fadeFrameRef.current = 0;
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 1;
      setProgress(0);
      setIsPlaying(false);
    };

    fadeFrameRef.current = window.requestAnimationFrame(tick);
  }, [cancelFade]);

  const pauseNarration = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    cancelFade();
    audio.pause();
    audio.volume = 1;
    setIsPlaying(false);
  }, [cancelFade]);

  const playNarration = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) {
      console.error("[Scene01 narration] Audio element is not available.");
      return false;
    }

    cancelFade();
    try {
      audio.muted = false;
      audio.volume = 1;
      setHasAudio(true);
      await audio.play();
      setIsPlaying(true);
      return true;
    } catch (error) {
      console.error("[Scene01 narration] play failed", error, audio.error);
      setHasAudio(false);
      setIsPlaying(false);
      return false;
    }
  }, [cancelFade]);

  const toggleNarration = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) {
      console.error("[Scene01 narration] Audio element is not available.");
      return;
    }

    if (!audio.paused) {
      pauseNarration();
      return;
    }

    await playNarration();
  }, [pauseNarration, playNarration]);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.preload = "metadata";
    audioRef.current = audio;

    const handleTime = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    const handlePlay = () => {
      setHasAudio(true);
      setIsPlaying(true);
    };
    const handlePlaying = handlePlay;
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setProgress(0);
      setIsPlaying(false);
    };
    const handleError = () => {
      console.error("[Scene01 narration] audio error", audio.error);
      setHasAudio(false);
      setIsPlaying(false);
    };
    const handleScene10AudioFocus = () => {
      fadeOutNarrationAndStop();
    };

    audio.addEventListener("timeupdate", handleTime);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);
    window.addEventListener(SCENE10_AUDIO_FOCUS_EVENT, handleScene10AudioFocus);

    return () => {
      cancelFade();
      audio.pause();
      audio.removeEventListener("timeupdate", handleTime);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      window.removeEventListener(SCENE10_AUDIO_FOCUS_EVENT, handleScene10AudioFocus);
      audioRef.current = null;
    };
  }, [cancelFade, fadeOutNarrationAndStop]);

  const value = useMemo(
    () => ({
      hasAudio,
      isPlaying,
      pauseNarration,
      playNarration,
      progress,
      stopNarration,
      fadeOutNarrationAndStop,
      toggleNarration,
    }),
    [
      fadeOutNarrationAndStop,
      hasAudio,
      isPlaying,
      pauseNarration,
      playNarration,
      progress,
      stopNarration,
      toggleNarration,
    ]
  );

  return <NarrationAudioContext.Provider value={value}>{children}</NarrationAudioContext.Provider>;
}

export function useNarrationAudio() {
  const context = useContext(NarrationAudioContext);
  if (!context) {
    throw new Error("useNarrationAudio must be used within NarrationAudioProvider");
  }
  return context;
}
