import { ChevronLeft, ChevronRight, Info, ListMusic, Pause, Play, SkipBack, SkipForward, Volume2, VolumeX, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import playlistFrame from "../../../assets/page01/scene10/instruments/playlist-frame.png";
import { SCENE10_INSTRUMENTS, SCENE10_VISIBLE_INSTRUMENTS } from "./scene10Instruments.js";
import "./Scene10InstrumentPlayer.css";

const AUDIO_FOCUS_EVENT = "dao-xa:scene10-audio-focus";
const SCENE10_AUDIO_FOCUS_EVENT = "scene10-audio-focus";
const SCENE10_SWIPE_THRESHOLD = 20;
const SCENE10_SWIPE_VELOCITY_THRESHOLD = 0.25;
const SCENE10_SWIPE_AXIS_LOCK = 1.15;

function getCarouselOffset(index, selectedIndex, total) {
  let offset = index - selectedIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

function pauseOtherMedia(currentAudio) {
  document.querySelectorAll("audio, video").forEach((media) => {
    if (media !== currentAudio) media.pause();
  });
}

function dispatchScene10AudioFocus() {
  window.dispatchEvent(new CustomEvent(AUDIO_FOCUS_EVENT));
  window.dispatchEvent(new CustomEvent(SCENE10_AUDIO_FOCUS_EVENT));
}

export default function Scene10InstrumentPlayer() {
  const rootRef = useRef(null);
  const audioRef = useRef(null);
  const dragStartRef = useRef(null);
  const suppressNextCardClickRef = useRef(false);
  const volumeRef = useRef(null);
  const volumeDraggingRef = useRef(false);
  const hasUserEnabledScene10AudioRef = useRef(false);
  const userPausedRef = useRef(false);
  const autoplayAttemptedRef = useRef(false);
  const isDebugInfo =
    typeof window !== "undefined" && new URLSearchParams(window.location.search).has("debugScene10Info");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [volume, setVolume] = useState(0.75);
  const [muted, setMuted] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [isDetailZoomOpen, setIsDetailZoomOpen] = useState(false);

  const selectedInstrument = SCENE10_VISIBLE_INSTRUMENTS[selectedIndex];
  const previousInstrument =
    SCENE10_VISIBLE_INSTRUMENTS[(selectedIndex - 1 + SCENE10_VISIBLE_INSTRUMENTS.length) % SCENE10_VISIBLE_INSTRUMENTS.length];
  const nextInstrument = SCENE10_VISIBLE_INSTRUMENTS[(selectedIndex + 1) % SCENE10_VISIBLE_INSTRUMENTS.length];

  const selectIndex = useCallback((nextIndex) => {
    const total = SCENE10_VISIBLE_INSTRUMENTS.length;
    setSelectedIndex(((nextIndex % total) + total) % total);
  }, []);

  const goPrevious = useCallback(() => {
    selectIndex(selectedIndex - 1);
  }, [selectIndex, selectedIndex]);

  const playSelectedAudio = useCallback(async ({ manual = false, autoplay = false } = {}) => {
    const audio = audioRef.current;
    if (!audio || !selectedInstrument.audio) {
      setIsPlaying(false);
      return false;
    }

    try {
      dispatchScene10AudioFocus();
      pauseOtherMedia(audio);
      await audio.play();
      setIsPlaying(true);
      setAutoplayBlocked(false);
      if (manual) {
        hasUserEnabledScene10AudioRef.current = true;
        userPausedRef.current = false;
      }
      return true;
    } catch {
      setIsPlaying(false);
      if (autoplay) setAutoplayBlocked(true);
      return false;
    }
  }, [selectedInstrument.audio]);

  useEffect(() => {
    SCENE10_INSTRUMENTS.forEach((item) => {
      [item.cardImage, item.detailImage].filter(Boolean).forEach((src) => {
        const img = new Image();
        img.src = src;
        if (img.decode) img.decode().catch(() => {});
      });
    });
  }, []);

  useEffect(() => {
    [previousInstrument, selectedInstrument, nextInstrument].forEach((item) => {
      [item.cardImage, item.detailImage].filter(Boolean).forEach((src) => {
        const img = new Image();
        img.src = src;
        if (img.decode) img.decode().catch(() => {});
      });
    });
  }, [nextInstrument, previousInstrument, selectedInstrument]);

  const goNext = useCallback(() => {
    selectIndex(selectedIndex + 1);
  }, [selectIndex, selectedIndex]);

  const handleOpenDetailZoom = useCallback(() => {
    if (!isInfoOpen) return;
    setIsDetailZoomOpen(true);
  }, [isInfoOpen]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const audio = audioRef.current;
        const isMeaningfullyVisible = entry.isIntersecting && entry.intersectionRatio >= 0.55;

        if (!isMeaningfullyVisible) {
          setIsInView(false);
          if (audio) audio.pause();
          setIsPlaying(false);
          autoplayAttemptedRef.current = false;
          return;
        }

        setIsInView(true);
        dispatchScene10AudioFocus();
        pauseOtherMedia(audio);

        if (!userPausedRef.current && !autoplayAttemptedRef.current) {
          autoplayAttemptedRef.current = true;
          playSelectedAudio({ autoplay: true });
        }
      },
      { threshold: [0, 0.35, 0.55, 0.75] }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [playSelectedAudio]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isInView) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrevious();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
      if (event.key === "Escape") {
        if (isDetailZoomOpen) {
          setIsDetailZoomOpen(false);
          return;
        }
        setIsInfoOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrevious, isInView, isDetailZoomOpen]);

  useEffect(() => {
    if (!isDetailZoomOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsDetailZoomOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isDetailZoomOpen]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = muted ? 0 : volume;
    audio.muted = muted;
  }, [muted, volume]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!volumeRef.current || volumeRef.current.contains(event.target)) return;
      setShowVolume(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isPlaying) return;

    pauseOtherMedia(audio);
    audio.load();
    playSelectedAudio({ autoplay: hasUserEnabledScene10AudioRef.current });
  }, [isPlaying, selectedInstrument.audio]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      userPausedRef.current = true;
      return;
    }

    await playSelectedAudio({ manual: true });
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragStartRef.current = {
      x: event.clientX,
      y: event.clientY,
      time: performance.now(),
      pointerId: event.pointerId,
    };
    if (event.currentTarget.setPointerCapture) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  };

  const handlePointerUp = (event) => {
    if (!dragStartRef.current) return;

    const deltaX = event.clientX - dragStartRef.current.x;
    const deltaY = event.clientY - dragStartRef.current.y;
    const elapsed = Math.max(performance.now() - dragStartRef.current.time, 1);
    const velocityX = Math.abs(deltaX) / elapsed;
    dragStartRef.current = null;

    if (event.currentTarget.releasePointerCapture && event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const isHorizontalSwipe = Math.abs(deltaX) >= Math.abs(deltaY) * SCENE10_SWIPE_AXIS_LOCK;
    const hasEnoughDistance = Math.abs(deltaX) >= SCENE10_SWIPE_THRESHOLD;
    const hasEnoughVelocity = velocityX >= SCENE10_SWIPE_VELOCITY_THRESHOLD && Math.abs(deltaX) >= SCENE10_SWIPE_THRESHOLD * 0.65;

    if (!isHorizontalSwipe || (!hasEnoughDistance && !hasEnoughVelocity)) {
      return;
    }

    suppressNextCardClickRef.current = true;
    window.setTimeout(() => {
      suppressNextCardClickRef.current = false;
    }, 120);

    if (deltaX < 0) goNext();
    else goPrevious();
  };

  const handlePointerCancel = (event) => {
    dragStartRef.current = null;
    if (event.currentTarget.releasePointerCapture && event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const renderedCards = useMemo(
    () =>
      SCENE10_VISIBLE_INSTRUMENTS.map((instrument, index) => {
        const offset = getCarouselOffset(index, selectedIndex, SCENE10_VISIBLE_INSTRUMENTS.length);
        return { instrument, index, offset };
      }),
    [selectedIndex]
  );

  return (
    <div
      ref={rootRef}
      className={`scene10-player scene10-reveal scene10-reveal--player${isInfoOpen ? " is-info-open" : ""}${
        isDebugInfo ? " is-debug-info" : ""
      }`}
      aria-label="Trình chọn âm thanh nhạc cụ dân tộc"
    >
      <audio
        ref={audioRef}
        className="scene10-player__audio"
        src={selectedInstrument.audio}
        preload="none"
      />

      <div
        className="scene10-player__carousel"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        <button
          className="scene10-player__arrow scene10-player__arrow--left"
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            goPrevious();
          }}
          aria-label="Chọn nhạc cụ trước"
        >
          <ChevronLeft size={34} strokeWidth={1.9} />
        </button>

        <div className="scene10-player__stage" aria-live="polite">
          {renderedCards.map(({ instrument, index, offset }) => (
            <button
              key={instrument.id}
              className="scene10-player__card"
              type="button"
              data-offset={offset}
              aria-label={`Chọn ${instrument.name}`}
              aria-pressed={index === selectedIndex}
              onClick={() => {
                if (suppressNextCardClickRef.current) return;
                selectIndex(index);
              }}
              style={{ "--scene10-card-depth": Math.abs(offset) }}
            >
              <img
                src={instrument.cardImage}
                alt={instrument.name}
                width={instrument.cardWidth}
                height={instrument.cardHeight}
                style={{
                  objectFit: instrument.cardObjectFit,
                  objectPosition: instrument.cardObjectPosition,
                }}
                draggable="false"
                loading="eager"
                decoding="async"
              />
            </button>
          ))}
        </div>

        <button
          className="scene10-player__arrow scene10-player__arrow--right"
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            goNext();
          }}
          aria-label="Chọn nhạc cụ tiếp theo"
        >
          <ChevronRight size={34} strokeWidth={1.9} />
        </button>
      </div>

      <div className="scene10-player__info-layout" aria-hidden={!isInfoOpen}>
        <div className="scene10-player__info-card">
          <img
            src={selectedInstrument.cardImage}
            alt={selectedInstrument.name}
            width={selectedInstrument.cardWidth}
            height={selectedInstrument.cardHeight}
            style={{
              objectFit: selectedInstrument.cardObjectFit,
              objectPosition: selectedInstrument.cardObjectPosition,
            }}
            loading="eager"
            decoding="async"
            draggable="false"
          />
          <div className="scene10-player__info-card-copy">
            <span>Đang chọn</span>
            <strong>{selectedInstrument.name}</strong>
          </div>
        </div>

        <button
          className="scene10-player__detail"
          type="button"
          onClick={handleOpenDetailZoom}
          disabled={!isInfoOpen}
          tabIndex={isInfoOpen ? 0 : -1}
          aria-label={`Phóng to thông tin ${selectedInstrument.name}`}
        >
          <span className="scene10-player__detail-media" aria-hidden="true">
            <img
              className={`scene10-player__detail-image scene10-player__detail-image--${selectedInstrument.slug}`}
              src={selectedInstrument.cardImage}
              alt=""
              loading="eager"
              decoding="async"
              draggable="false"
            />
          </span>
          <span className="scene10-player__detail-content">
            <span className="scene10-player__detail-kicker">Thông tin nhạc cụ</span>
            <strong className="scene10-player__detail-title">{selectedInstrument.name}</strong>
            <span className="scene10-player__detail-description">{selectedInstrument.description}</span>
            <span className="scene10-player__detail-chips" aria-label="Đặc điểm nhạc cụ">
              {selectedInstrument.categories.map((category) => (
                <span key={category} className="scene10-player__detail-chip">
                  {category}
                </span>
              ))}
            </span>
            <span className="scene10-player__detail-difficulty">
              <span className="scene10-player__detail-stars" aria-hidden="true">
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <span
                    key={starIndex}
                    className={starIndex < selectedInstrument.difficultyStars ? "is-filled" : ""}
                  >
                    ★
                  </span>
                ))}
              </span>
              <span>{selectedInstrument.difficultyText}</span>
            </span>
          </span>
        </button>
      </div>

      {isDetailZoomOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              className="scene10-player__detail-modal"
              role="dialog"
              aria-modal="true"
              aria-label={`Thông tin phóng to ${selectedInstrument.name}`}
              onClick={() => setIsDetailZoomOpen(false)}
            >
              <button
                type="button"
                className="scene10-player__detail-modal-close"
                onClick={() => setIsDetailZoomOpen(false)}
                aria-label="Đóng ảnh phóng to"
              >
                <X size={26} strokeWidth={2.1} />
              </button>
              <button
                type="button"
                className="scene10-player__detail-modal-nav scene10-player__detail-modal-nav--left"
                onClick={(event) => {
                  event.stopPropagation();
                  goPrevious();
                }}
                aria-label="Xem nhạc cụ trước"
              >
                <ChevronLeft size={34} strokeWidth={1.9} />
              </button>
              <img
                className="scene10-player__detail-modal-image"
                src={selectedInstrument.detailImage || selectedInstrument.cardImage}
                alt={`Thông tin ${selectedInstrument.name}`}
                onClick={(event) => event.stopPropagation()}
                loading="eager"
                decoding="async"
              />
              <button
                type="button"
                className="scene10-player__detail-modal-nav scene10-player__detail-modal-nav--right"
                onClick={(event) => {
                  event.stopPropagation();
                  goNext();
                }}
                aria-label="Xem nhạc cụ tiếp theo"
              >
                <ChevronRight size={34} strokeWidth={1.9} />
              </button>
            </div>,
            document.body
          )
        : null}

      <div className="scene10-player__bar">
        <img className="scene10-player__bar-frame" src={playlistFrame} alt="" loading="lazy" decoding="async" />
        <div className="scene10-player__bar-glass" aria-hidden="true" />
        <div className="scene10-player__controls">
          <button type="button" onClick={goPrevious} aria-label="Nhạc cụ trước">
            <SkipBack size={20} fill="currentColor" />
          </button>
          <button
            className="scene10-player__play"
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? "Tạm dừng âm thanh nhạc cụ" : "Nghe âm thanh nhạc cụ"}
            aria-pressed={isPlaying}
          >
            {isPlaying ? <Pause size={25} fill="currentColor" /> : <Play size={27} fill="currentColor" />}
          </button>
          <button type="button" onClick={goNext} aria-label="Nhạc cụ tiếp theo">
            <SkipForward size={20} fill="currentColor" />
          </button>
          <div className="scene10-player__now-playing">
            <span>{autoplayBlocked ? "Nhấn Play để nghe" : "Đang chọn"}</span>
            <strong>{selectedInstrument.name}</strong>
          </div>
          <button
            className="scene10-player__info"
            type="button"
            onClick={() => setIsInfoOpen((current) => !current)}
            aria-expanded={isInfoOpen}
            aria-label={`${isInfoOpen ? "Đóng" : "Mở"} thông tin ${selectedInstrument.name}`}
          >
            {isInfoOpen ? <X size={18} /> : <Info size={18} />}
            <span>Thông tin</span>
          </button>
          <button type="button" aria-label="Danh sách nhạc cụ">
            <ListMusic size={19} />
          </button>
          <div
            ref={volumeRef}
            className={`scene10-player__volume${showVolume ? " is-open" : ""}`}
            onMouseEnter={() => setShowVolume(true)}
            onMouseLeave={() => {
              if (!volumeDraggingRef.current) setShowVolume(false);
            }}
            onFocus={() => setShowVolume(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setShowVolume(false);
            }}
          >
            <button
              type="button"
              aria-label={muted ? "Bật âm lượng nhạc cụ" : "Tắt âm lượng nhạc cụ"}
              aria-pressed={muted}
              onClick={() => {
                setMuted((current) => {
                  if (current && volume === 0) setVolume(0.8);
                  return !current;
                });
                setShowVolume(true);
              }}
            >
              {muted || volume === 0 ? <VolumeX size={19} /> : <Volume2 size={19} />}
            </button>
            <label className="scene10-player__volume-slider">
              <span>Âm lượng nhạc cụ</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={muted ? 0 : volume}
                aria-label="Điều chỉnh âm lượng"
                onPointerDown={() => {
                  volumeDraggingRef.current = true;
                  setShowVolume(true);
                }}
                onPointerUp={() => {
                  volumeDraggingRef.current = false;
                  setShowVolume(true);
                }}
                onPointerCancel={() => {
                  volumeDraggingRef.current = false;
                }}
                onChange={(event) => {
                  const nextVolume = Number(event.target.value);
                  setVolume(nextVolume);
                  setMuted(nextVolume === 0);
                }}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
