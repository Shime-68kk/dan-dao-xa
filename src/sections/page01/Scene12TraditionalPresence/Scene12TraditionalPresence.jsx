import { Maximize2, Pause, Play, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import scene12Bg from "../../../assets/page01/scene12/scene12-bg.png";
import scene12Poster from "../../../assets/page01/scene12/scene12-video-poster.jpg";
import "./Scene12TraditionalPresence.css";

const SCENE12_WIDTH = 1366;
const SCENE12_HEIGHT = 869;
const SCENE12_VIDEO_URL = `${import.meta.env.BASE_URL}scene12/dao-xa-slide12.mp4`;

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

export default function Scene12TraditionalPresence() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUnsupported, setIsUnsupported] = useState(false);
  const [scale, setScale] = useState(() => {
    if (typeof window === "undefined") return 1;
    return document.documentElement.clientWidth / SCENE12_WIDTH;
  });

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
    let frame = 0;

    const updateScale = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setScale(document.documentElement.clientWidth / SCENE12_WIDTH);
      });
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    window.addEventListener("orientationchange", updateScale);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateScale);
      window.removeEventListener("orientationchange", updateScale);
    };
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
      className={`scene12${isActive ? " is-active" : ""}`}
      aria-label="Âm thanh truyền thống hiện diện mạnh mẽ hơn"
      style={{
        "--scene12-scale": scale,
        "--scene12-rendered-height": `${SCENE12_HEIGHT * scale}px`,
      }}
    >
      <div className="scene12__scale-shell">
        <div className="scene12__artboard">
          <img className="scene12__bg" src={scene12Bg} alt="" loading="lazy" decoding="async" />
          <div className="scene12__shade" aria-hidden="true" />

          <button
            type="button"
            className="scene12__video-preview scene12-reveal scene12-reveal--video"
            onClick={openModal}
            aria-label="Mở video âm thanh truyền thống"
          >
            <img src={scene12Poster} alt="" loading="lazy" decoding="async" />
            <span className="scene12__video-glass" aria-hidden="true" />
            <span className="scene12__video-play" aria-hidden="true">
              <Play size={42} fill="currentColor" />
            </span>
            <span className="scene12__video-caption">Xem video</span>
          </button>

          <h2 className="scene12__title scene12-reveal scene12-reveal--title">
            <span>ÂM THANH TRUYỀN THỐNG</span>
            <span>ĐANG HIỆN DIỆN MẠNH MẼ HƠN BAO GIỜ HẾT</span>
          </h2>

          <div className="scene12__main-copy scene12-reveal scene12-reveal--copy">
            <p>
              Sự xuất hiện ngày càng nhiều của những thanh âm truyền thống trên các sân khấu lớn
              và nền tảng số cho thấy khoảng cách giữa âm nhạc dân tộc và công chúng trẻ đang dần
              được thu hẹp. Đây không chỉ là tín hiệu tích cực cho việc bảo tồn văn hóa mà còn mở
              ra những cơ hội mới cho các làng nghề chế tác nhạc cụ như Đào Xá.
            </p>
            <p>
              Khi nhu cầu tiếp cận và sử dụng nhạc cụ dân tộc gia tăng, câu chuyện giữ nghề không
              còn chỉ là nỗ lực gìn giữ quá khứ mà còn gắn với khả năng phát triển trong đời sống
              đương đại.
            </p>
          </div>

          <h3 className="scene12__middle-heading scene12-reveal scene12-reveal--heading">
            <span className="scene12__middle-heading-main scene12__middle-heading-main--italic">CƠ HỘI</span>
            <span className="scene12__middle-heading-connector">đi kèm</span>
            <span className="scene12__middle-heading-main">THÁCH THỨC</span>
          </h3>

          <p className="scene12__bottom-copy scene12-reveal scene12-reveal--bottom">
            Tuy nhiên, để những tín hiệu tích cực ấy thực sự trở thành động lực phục hồi cho làng
            nghề, vẫn cần những <span>giải pháp đồng bộ từ nghệ nhân, chính quyền, ngành văn hóa và du lịch</span> nhằm
            bảo tồn kỹ năng chế tác, <span>mở rộng thị trường</span> và <span>thu hút thế hệ kế cận</span> tiếp tục gắn bó
            với nghề.
          </p>
        </div>
      </div>

      {isModalOpen ? (
        <div className="scene12-modal" role="dialog" aria-modal="true" aria-label="Video âm thanh truyền thống">
          <button
            type="button"
            className="scene12-modal__backdrop"
            onClick={closeModal}
            aria-label="Đóng video"
          />
          <div className="scene12-modal__panel">
            <div className="scene12-modal__topbar">
              <button type="button" className="scene12-modal__control" onClick={togglePlayback}>
                {isPlaying ? <Pause size={19} /> : <Play size={19} fill="currentColor" />}
                <span>{isPlaying ? "Tạm dừng" : "Phát"}</span>
              </button>
              <span className="scene12-modal__hint">
                <Maximize2 size={16} />
                Có thể mở toàn màn hình bằng điều khiển video
              </span>
              <button type="button" className="scene12-modal__close" onClick={closeModal} aria-label="Đóng video">
                <X size={22} />
              </button>
            </div>

            {isUnsupported ? (
              <p className="scene12-modal__fallback">Trình duyệt không hỗ trợ video này.</p>
            ) : (
              <video
                ref={videoRef}
                className="scene12-modal__video"
                poster={scene12Poster}
                preload="metadata"
                controls
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                {isNearViewport ? <source src={SCENE12_VIDEO_URL} type="video/mp4" /> : null}
              </video>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}
