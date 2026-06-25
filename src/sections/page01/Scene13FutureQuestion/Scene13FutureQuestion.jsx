import { Maximize2, Pause, Play, X } from "lucide-react";
import { useWidthScale } from "../../../hooks/useWidthScale.js";
import { useCallback, useEffect, useRef, useState } from "react";
import scene13Bg from "../../../assets/page01/scene13/scene13-bg.png";
import scene13Poster from "../../../assets/page01/scene13/scene13-video-cover.jpg";
import "./Scene13FutureQuestion.css";

const SCENE13_WIDTH = 1366;
const SCENE13_HEIGHT = 768;
const SCENE13_VIDEO_URL = `${import.meta.env.BASE_URL}scene13/dao-xa-slide13.mp4`;

const introCopy =
  "Sự trở lại của âm nhạc truyền thống trong đời sống đương đại đang mở ra những tín hiệu tích cực cho các làng nghề chế tác nhạc cụ dân tộc. Tuy nhiên, để những cơ hội ấy thực sự chuyển hóa thành động lực phát triển, việc bảo tồn làng nghề cần được nhìn nhận như một quá trình vừa gìn giữ vừa thích ứng với nhu cầu của xã hội hiện đại.";

const quoteBefore =
  "Muốn bảo tồn một làng nghề truyền thống thì không thể chỉ dựa vào người dân hay chính quyền, mà cần ";
const quoteHighlight = "sự tham gia của nhiều bên liên quan";
const quoteAfter = " trong cả bảo tồn và phát triển.";

const captionCopy =
  "Theo Tiến sĩ Văn hóa học Vũ Thị Uyên, bảo tồn làng nghề không thể chỉ là trách nhiệm của người dân địa phương hay các nghệ nhân còn gắn bó với nghề mà cần sự tham gia của nhiều bên liên quan.";

function pauseOtherMedia(exceptNode) {
  document.querySelectorAll("audio, video").forEach((media) => {
    if (media !== exceptNode) media.pause();
  });
}

function canPlayMp4() {
  if (typeof document === "undefined") return true;
  const video = document.createElement("video");
  return Boolean(
    video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') ||
    video.canPlayType('video/mp4; codecs="avc1.4D401E, mp4a.40.2"') ||
    video.canPlayType("video/mp4")
  );
}

export default function Scene13FutureQuestion() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUnsupported, setIsUnsupported] = useState(false);
  const scale = useWidthScale(SCENE13_WIDTH);
const closeModal = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setIsPlaying(false);
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    setIsUnsupported(!canPlayMp4());
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.22;
        setIsActive(visible);
        if (visible) pauseOtherMedia(isModalOpen ? videoRef.current : null);
      },
      { threshold: [0, 0.22, 0.45] }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isModalOpen]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsNearViewport(true);
      },
      { rootMargin: "900px 0px", threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isModalOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal, isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return undefined;
    pauseOtherMedia(videoRef.current);
    return undefined;
  }, [isModalOpen]);

  const openModal = () => {
    pauseOtherMedia(null);
    setIsNearViewport(true);
    setIsModalOpen(true);
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video || isUnsupported) return;

    if (video.paused) {
      try {
        pauseOtherMedia(video);
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  return (
    <section
      ref={sectionRef}
      className={`scene13${isActive ? " is-active" : ""}`}
      aria-label="Tương lai nào cho tiếng đàn Đào Xá"
      style={{
        "--scene13-scale": scale,
        "--scene13-rendered-height": `${SCENE13_HEIGHT * scale}px`,
      }}
    >
      <div className="scene13__scale-shell">
        <div className="scene13__artboard">
          <img className="scene13__bg" src={scene13Bg} alt="" loading="lazy" decoding="async" />
          <div className="scene13__shade" aria-hidden="true" />

          <header className="scene13__title scene13-reveal scene13-reveal--title">
            <span className="scene13__title-script">Tương lai nào</span>
            <span className="scene13__title-cho">cho</span>
            <span className="scene13__title-main">TIẾNG ĐÀN ĐÀO XÁ</span>
            <span className="scene13__title-question">?</span>
          </header>

          <div className="scene13__intro-box scene13-reveal scene13-reveal--left">
            {introCopy}
          </div>

          <div className="scene13__quote scene13-reveal scene13-reveal--quote">
            <span className="scene13__quote-mark scene13__quote-mark--open" aria-hidden="true">
              “
            </span>
            <span className="scene13__quote-line" aria-hidden="true" />
            <p>
              {quoteBefore}
              <span>{quoteHighlight}</span>
              {quoteAfter}
            </p>
            <span className="scene13__quote-mark scene13__quote-mark--close" aria-hidden="true">
              ”
            </span>
          </div>

          <button
            type="button"
            className="scene13__video-preview scene13-reveal scene13-reveal--video"
            onClick={openModal}
            aria-label="Mở video phỏng vấn tiến sĩ Vũ Thị Uyên"
          >
            <img src={scene13Poster} alt="" loading="lazy" decoding="async" />
            <span className="scene13__video-glass" aria-hidden="true" />
            <span className="scene13__video-play" aria-hidden="true">
              <Play size={38} fill="currentColor" />
            </span>
          </button>

          <div className="scene13__caption-box scene13-reveal scene13-reveal--caption">
            {captionCopy}
          </div>
        </div>
      </div>

      {isModalOpen ? (
        <div className="scene13-modal" role="dialog" aria-modal="true" aria-label="Video phỏng vấn">
          <button
            type="button"
            className="scene13-modal__backdrop"
            onClick={closeModal}
            aria-label="Đóng video"
          />
          <div className="scene13-modal__panel">
            <div className="scene13-modal__topbar">
              <button type="button" className="scene13-modal__control" onClick={togglePlayback}>
                {isPlaying ? <Pause size={19} /> : <Play size={19} fill="currentColor" />}
                <span>{isPlaying ? "Tạm dừng" : "Phát"}</span>
              </button>
              <span className="scene13-modal__hint">
                <Maximize2 size={16} />
                Có thể mở toàn màn hình bằng điều khiển video
              </span>
              <button type="button" className="scene13-modal__close" onClick={closeModal} aria-label="Đóng video">
                <X size={22} />
              </button>
            </div>

            {isUnsupported ? (
              <p className="scene13-modal__fallback">Trình duyệt không hỗ trợ video này.</p>
            ) : (
              <video
                ref={videoRef}
                className="scene13-modal__video"
                poster={scene13Poster}
                preload="metadata"
                controls
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                {isNearViewport ? <source src={SCENE13_VIDEO_URL} type="video/mp4" /> : null}
              </video>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}
