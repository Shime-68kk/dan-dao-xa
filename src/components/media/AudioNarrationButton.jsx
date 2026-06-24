import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useNarrationAudio } from "./NarrationAudioProvider.jsx";
import "./AudioNarrationButton.css";

const BAR_PATTERN = [0.42, 0.72, 1.02, 0.58, 1.32, 0.82, 1.15, 0.48];

export default function AudioNarrationButton() {
  const { hasAudio, isPlaying, progress, toggleNarration } = useNarrationAudio();

  return (
    <div className={`audio-narration ${isPlaying ? "is-playing" : ""}`}>
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
          onClick={toggleNarration}
          aria-label={isPlaying ? "Tạm dừng bài viết" : "Nghe bài viết"}
          aria-pressed={isPlaying}
        >
          {isPlaying ? <Pause size={22} /> : <Play size={24} fill="currentColor" />}
        </button>
      </div>
    </div>
  );
}
