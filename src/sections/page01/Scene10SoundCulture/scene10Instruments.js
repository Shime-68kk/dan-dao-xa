import danBauAudio from "../../../assets/page01/scene10/instruments/dan-bau.mp3";
import danBauImage from "../../../assets/page01/scene10/instruments/dan-bau.png";
import danBauDetail from "../../../assets/page01/scene10/instruments/detail-dan-bau.png";
import danNguyetAudio from "../../../assets/page01/scene10/instruments/dan-nguyet.mp3";
import danNguyetImage from "../../../assets/page01/scene10/instruments/dan-nguyet.png";
import danNguyetDetail from "../../../assets/page01/scene10/instruments/detail-dan-nguyet.png";
import danDayAudio from "../../../assets/page01/scene10/instruments/dan-day.mp3";
import danDayImage from "../../../assets/page01/scene10/instruments/dan-day.png";
import danDayDetail from "../../../assets/page01/scene10/instruments/scene10-detail-dan-day.png";
import danNhiAudio from "../../../assets/page01/scene10/instruments/dan-nhi.mp3";
import danNhiImage from "../../../assets/page01/scene10/instruments/dan-nhi.png";
import danNhiDetail from "../../../assets/page01/scene10/instruments/detail-dan-nhi.png";
import danTamAudio from "../../../assets/page01/scene10/instruments/dan-tam.mp3";
import danTamImage from "../../../assets/page01/scene10/instruments/dan-tam.png";
import danTamDetail from "../../../assets/page01/scene10/instruments/detail-dan-tam.png";
import danTiBaAudio from "../../../assets/page01/scene10/instruments/dan-ti-ba.mp3";
import danTyBaImage from "../../../assets/page01/scene10/instruments/dan-ty-ba.png";
import danTiBaDetail from "../../../assets/page01/scene10/instruments/scene10-detail-dan-ti-ba.png";
import danTranhAudio from "../../../assets/page01/scene10/instruments/dan-tranh.mp3";
import danTranhImage from "../../../assets/page01/scene10/instruments/dan-tranh.png";
import danTranhDetail from "../../../assets/page01/scene10/instruments/detail-dan-tranh.png";
import danTuAudio from "../../../assets/page01/scene10/instruments/dan-tu.mp3";
import danTuImage from "../../../assets/page01/scene10/instruments/dan-tu.png";
import danTuDetail from "../../../assets/page01/scene10/instruments/detail-dan-tu.png";

export const SCENE10_INSTRUMENTS = [
  {
    id: "dan-nguyet",
    slug: "dan-nguyet",
    name: "Đàn nguyệt",
    description: "Âm sắc trong, sáng và ngân vang, thường xuất hiện trong hát chèo, ca Huế và nhiều dàn nhạc truyền thống.",
    categories: ["Dây gảy", "Âm vang sáng"],
    difficultyStars: 4,
    difficultyText: "Kỹ thuật linh hoạt",
    cardImage: danNguyetImage,
    detailImage: danNguyetDetail,
    audio: danNguyetAudio,
    cardWidth: 2903,
    cardHeight: 2803,
    detailWidth: 2903,
    detailHeight: 2803,
  },
  {
    id: "dan-tam",
    slug: "dan-tam",
    name: "Đàn tam",
    description: "Thân đàn nhỏ, ba dây, tiếng mộc và chắc, tạo màu âm dân gian rõ nét trong các lối diễn xướng truyền thống.",
    categories: ["Dây gảy", "Âm mộc"],
    difficultyStars: 3,
    difficultyText: "Cảm âm ổn định",
    cardImage: danTamImage,
    detailImage: danTamDetail,
    audio: danTamAudio,
    cardWidth: 2903,
    cardHeight: 2803,
    detailWidth: 2903,
    detailHeight: 2803,
  },
  {
    id: "dan-bau",
    slug: "dan-bau",
    name: "Đàn bầu",
    description: "Một dây nhưng giàu sắc thái, tiếng đàn mềm, ngân và luyến láy, được xem là âm thanh rất riêng của nhạc Việt.",
    categories: ["Một dây", "Luyến láy"],
    difficultyStars: 5,
    difficultyText: "Cần cảm âm cao",
    cardImage: danBauImage,
    detailImage: danBauDetail,
    audio: danBauAudio,
    cardWidth: 2903,
    cardHeight: 2803,
    detailWidth: 2903,
    detailHeight: 2803,
  },
  {
    id: "dan-tranh",
    slug: "dan-tranh",
    name: "Đàn tranh",
    description: "Nhiều dây, tiếng trong và rải rộng, phù hợp cả giai điệu mềm mại lẫn những đoạn tiết tấu nhanh, sáng.",
    categories: ["Dây gảy", "Âm trong"],
    difficultyStars: 4,
    difficultyText: "Ngón đàn tinh tế",
    cardImage: danTranhImage,
    detailImage: danTranhDetail,
    audio: danTranhAudio,
    cardWidth: 2903,
    cardHeight: 2803,
    detailWidth: 2903,
    detailHeight: 2803,
  },
  {
    id: "dan-nhi",
    slug: "dan-nhi",
    name: "Đàn nhị",
    description: "Cây đàn kéo hai dây có âm sắc da diết, gần giọng người, giữ vai trò nổi bật trong nhiều không gian âm nhạc dân tộc.",
    categories: ["Dây kéo", "Âm da diết"],
    difficultyStars: 4,
    difficultyText: "Cần lực kéo đều",
    cardImage: danNhiImage,
    detailImage: danNhiDetail,
    audio: danNhiAudio,
    cardWidth: 2903,
    cardHeight: 2803,
    detailWidth: 2903,
    detailHeight: 2803,
  },
  {
    id: "dan-tu",
    slug: "dan-tu",
    name: "Đàn tứ",
    description: "Bốn dây, âm thanh gọn và sáng, thường tạo bè đệm chắc nhịp hoặc nhấn màu giai điệu trong hòa tấu.",
    categories: ["Dây gảy", "Bốn dây"],
    difficultyStars: 3,
    difficultyText: "Giữ nhịp chắc",
    cardImage: danTuImage,
    detailImage: danTuDetail,
    audio: danTuAudio,
    cardWidth: 2903,
    cardHeight: 2803,
    detailWidth: 2903,
    detailHeight: 2803,
  },
  {
    id: "dan-ty-ba",
    slug: "dan-ty-ba",
    name: "Đàn tỳ bà",
    description: "Dáng đàn cong đặc trưng, tiếng gảy sắc và giàu nhịp điệu, thường dùng cho các câu nhạc nhanh, rõ nét.",
    categories: ["Dây gảy", "Tiết tấu rõ"],
    difficultyStars: 5,
    difficultyText: "Kỹ thuật khó",
    cardImage: danTyBaImage,
    detailImage: danTiBaDetail,
    audio: danTiBaAudio,
    cardWidth: 2903,
    cardHeight: 2803,
    detailWidth: 1878,
    detailHeight: 1056,
  },
  {
    id: "dan-day",
    slug: "dan-day",
    name: "Đàn đáy",
    description: "Âm trầm, sâu và thô mộc, gắn với ca trù và những không gian biểu diễn cần chất âm cổ kính.",
    categories: ["Dây gảy", "Âm trầm"],
    difficultyStars: 4,
    difficultyText: "Cần ngón chắc",
    cardImage: danDayImage,
    detailImage: danDayDetail,
    audio: danDayAudio,
    cardWidth: 2903,
    cardHeight: 2803,
    detailWidth: 1878,
    detailHeight: 1056,
  },
];

export const SCENE10_VISIBLE_INSTRUMENTS = SCENE10_INSTRUMENTS;
