# 🎵 Cung trầm Đào Xá

> **Câu chuyện kể bằng trang web về làng nghề chế tác nhạc cụ dân tộc Đào Xá**

🔗 **Xem trực tuyến:** [https://shime-68kk.github.io/dan-dao-xa/](https://shime-68kk.github.io/dan-dao-xa/)

---

## 📖 Giới thiệu

**Cung trầm Đào Xá** là một dự án kể chuyện tương tác (interactive storytelling) về làng nghề làm đàn truyền thống Đào Xá — nơi lưu giữ hơn hai thế kỷ tinh hoa chế tác nhạc cụ dân tộc Việt Nam. Dự án được trình bày dưới dạng một trang web cuộn dài, dẫn dắt người xem qua từng chương câu chuyện bằng hình ảnh, chữ viết, âm thanh và hiệu ứng động.

---

## 🖥️ Cách xem — dành cho người dùng

### ▶ Bước 1 — Mở link

Nhấn vào đường link:
**[https://shime-68kk.github.io/dan-dao-xa/](https://shime-68kk.github.io/dan-dao-xa/)**

Trang web hoạt động tốt nhất trên **trình duyệt Chrome, Edge hoặc Safari** phiên bản mới nhất.

---

### ▶ Bước 2 — Cuộn để xem câu chuyện

Toàn bộ nội dung được trình bày theo dạng **cuộn dọc liên tục**. Chỉ cần **lăn chuột xuống** (hoặc **vuốt lên trên** nếu dùng điện thoại/máy tính bảng) để đi từ đầu đến cuối câu chuyện.

> 💡 **Mẹo:** Cuộn chậm và từ từ để tận hưởng đầy đủ các hiệu ứng hình ảnh xuất hiện theo từng đoạn.

---

### ▶ Bước 3 — Các điểm tương tác đặc biệt

Trong hành trình cuộn, bạn sẽ gặp một số đoạn có tương tác riêng:

#### 🔒 Đoạn khóa khung (Scrolljack)
Ở **mục "Quy trình chế tác"** và **mục "Bối cảnh hiện đại"**, trang web sẽ **tự động tạm dừng và khóa vị trí cuộn** trong khoảnh khắc ngắn để chiếu một chuỗi hiệu ứng tuần tự. Đây là hành vi **bình thường** — hãy tiếp tục cuộn nhẹ nhàng, trang sẽ tự nhả ra sau khi hoàn thành.

#### 🎵 Phần nghe nhạc cụ (Slide 10)
Tại mục **"Hồn văn hóa Việt"**, bạn có thể **nhấn vào từng loại nhạc cụ** để nghe thử âm thanh đặc trưng của đàn đó.

#### 📊 Biểu đồ tương tác (Slide 11)
Tại mục thống kê xu hướng, **nhấn hoặc chạm vào các cột biểu đồ** để xem thông tin chi tiết hiện ra.

#### 🔊 Nút phát narration (âm thanh thuyết minh)
Góc trên màn hình có nút **phát/dừng âm thanh thuyết minh**. Nhấn vào để nghe giọng đọc đồng hành cùng hành trình cuộn.

---

### ▶ Bước 4 — Xem trên điện thoại

Trang web **hỗ trợ điện thoại và máy tính bảng**. Một số lưu ý khi xem trên mobile:

- **Vuốt từ từ** ở các đoạn có hiệu ứng khóa khung để tránh giật lag.
- **Không zoom** (không pinch-to-zoom) trong khi cuộn, vì có thể làm gián đoạn hiệu ứng.
- Nên **xoay ngang** máy tính bảng để có trải nghiệm hình ảnh đẹp hơn.

---

## 🗂️ Cấu trúc nội dung

| Chương | Tên | Nội dung |
|--------|-----|----------|
| 1 | Hero | Màn hình mở đầu, giới thiệu tổng quan |
| 2 | Lịch sử | Nguồn gốc làng nghề Đào Xá |
| 3 | Dòng thời gian | Hành trình hơn 200 năm tồn tại |
| 4 | Suy giảm lao động | Thực trạng thiếu hụt thợ làm nghề |
| 5 | Áp lực thu hẹp | 4 nguyên nhân khiến nghề mai một |
| 6 | Hành trình chế tác | Quy trình làm ra một cây đàn |
| 7 | Gỗ và cộng hưởng | Bí quyết chọn nguyên liệu |
| 8 | Mắt xích cuối cùng | Những người thợ còn bám trụ với nghề |
| 9 | Tiếng vọng cuối | Câu chuyện kết nối quá khứ – hiện tại |
| 10 | Hồn văn hóa Việt | Nghe thử 8 loại nhạc cụ dân tộc |
| 11 | Khán giả hiện đại | Xu hướng quan tâm đến âm nhạc truyền thống |
| 12–15 | Tương lai | Câu hỏi về sự tiếp nối và bảo tồn |

---

## ⚙️ Dành cho nhà phát triển

### Yêu cầu môi trường
- Node.js ≥ 18
- npm ≥ 9

### Chạy local

```bash
# Cài đặt dependencies
npm install

# Chạy server phát triển
npm run dev
# → Mở http://localhost:5173/dan-dao-xa/

# Build production
npm run build
```

### Deploy

Project tự động deploy lên **GitHub Pages** mỗi khi có commit vào nhánh `main` thông qua GitHub Actions.

---

## 🛠️ Công nghệ sử dụng

- **React 18** — UI framework
- **Vite** — Build tool
- **CSS thuần** — Styling, animations, scroll effects
- **Intersection Observer API** — Kích hoạt hiệu ứng khi cuộn đến
- **Web Audio API** — Phát âm thanh nhạc cụ

---

## 📌 Ghi chú

Dự án được thực hiện như một bài thực hành kể chuyện kỹ thuật số (*digital storytelling*) về di sản văn hóa phi vật thể. Nội dung mang tính giáo dục và truyền thông văn hóa.
