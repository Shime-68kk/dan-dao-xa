import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./AudioNarrationButton.css";

const AUDIO_SRC = "/audio/slide01-narration.mp3";
const SCENE10_AUDIO_FOCUS_EVENT = "dao-xa:scene10-audio-focus";
const BAR_PATTERN = [0.42, 0.72, 1.02, 0.58, 1.32, 0.82, 1.15, 0.48];

export default function AudioNarrationButton() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasAudio, setHasAudio] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const handleTime = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      setHasAudio(false);
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", handleTime);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("timeupdate", handleTime);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  useEffect(() => {
    const handleScene10AudioFocus = () => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.pause();
      setIsPlaying(false);
    };

    window.addEventListener(SCENE10_AUDIO_FOCUS_EVENT, handleScene10AudioFocus);
    return () => window.removeEventListener(SCENE10_AUDIO_FOCUS_EVENT, handleScene10AudioFocus);
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!hasAudio || !audio) {
      setIsPlaying((current) => !current);
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      // TODO: replace with real narration audio at /audio/slide01-narration.mp3
      setHasAudio(false);
      setIsPlaying(true);
    }
  };

  return (
    <div className={`audio-narration ${isPlaying ? "is-playing" : ""}`}>
      <audio ref={audioRef} src={AUDIO_SRC} preload="none" />
      <span className="audio-narration__label">Click vào đây để nghe bài viết</span>
      <div className="audio-narration__control-row">
        <div className="audio-narration__meter">
          <div className="audio-narration__waveform" aria-hidden="true">
            {Array.from({ length: 31 }).map((_, index) => (
              <span
                key={index}
                style={{
                  "--bar-index": index,
                  "--bar-height": `${BAR_PATTERN[index % BAR_PATTERN.length]}rem`,
                }}
              />
            ))}
          </div>
          <div className="audio-narration__track" aria-hidden="true">
            <span style={{ width: `${hasAudio ? progress : isPlaying ? 42 : 0}%` }} />
          </div>
          <div className="audio-narration__mini-controls" aria-hidden="true">
            <SkipBack size={10} fill="currentColor" />
            <Play size={10} fill="currentColor" />
            <SkipForward size={10} fill="currentColor" />
          </div>
        </div>
        <button
          className="audio-narration__button"
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Tạm dừng bài viết" : "Nghe bài viết"}
          aria-pressed={isPlaying}
        >
          {isPlaying ? <Pause size={22} /> : <Play size={24} fill="currentColor" />}
        </button>
      </div>
    </div>
  );
}
