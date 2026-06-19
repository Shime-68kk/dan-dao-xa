# Scene08 Part 1 Implementation Report

## Files Created / Changed

- Created `/home/quang/Documents/brief-1/project/src/sections/page01/Scene08LastLink/Scene08LastLink.jsx`
- Created `/home/quang/Documents/brief-1/project/src/sections/page01/Scene08LastLink/Scene08LastLink.css`
- Changed `/home/quang/Documents/brief-1/project/src/pages/Page01Story/Page01Story.jsx`
- Added `/home/quang/Documents/brief-1/project/src/assets/page01/scene08/scene08-bg.png`
- Added `/home/quang/Documents/brief-1/project/src/assets/page01/scene08/scene08-village-sign.png`
- Added `/home/quang/Documents/brief-1/project/src/assets/page01/scene08/scene08-artisan-staff.png`

## Asset Paths Copied / Imported

- Main wood background copied from `/home/quang/Documents/brief-1/project/nền chủ đạo.png`
- Village sign copied from `/home/quang/Documents/brief-1/project/slide 8/ảnh 1.png`
- Artisan + music staff copied from `/home/quang/Documents/brief-1/project/slide 8/ảnh 2.png`
- `/home/quang/Documents/brief-1/project/slide 8/ảnh 3.png` was inspected as the later portrait card asset and was not used for Part 1.

## Detected Asset Dimensions

- `scene08-bg.png`: `3586 x 2008`
- `scene08-village-sign.png`: `2903 x 1632`
- `scene08-artisan-staff.png`: `2903 x 2514`
- `thamkhao8-1.png`: `1352 x 877`
- `thamkhao8-2.png`: `1352 x 877`

## Stage Size

- Internal artboard width: `1366`
- Internal Part 1 artboard height: `1774`
- Scale formula: `document.documentElement.clientWidth / 1366`
- Rendered height: `1774 * scale`
- Same scaled artboard is used on desktop and mobile; no alternate mobile layout was added.

## Final Coordinates

Title group:

- group: `x=72`, `y=48`, `width=520`, `height=210`
- clef: `x=0`, `y=22`, `font-size=126`
- title text starts at `x=73`, `y=0`

Intro paragraph:

- `x=145`, `y=260`, `width=490`

Village sign:

- `x=650`, `y=18`, `width=690`, `opacity=0.88`

Artisan + staff asset:

- `x=-20`, `y=405`, `width=980`

Labels:

- `1968`: `x=90`, `y=440`, `font-size=42`, `rotate=-10deg`
- `THÔN ĐÀO XÁ`: `x=510`, `y=470`, `font-size=27`, `rotate=-7deg`
- `ĐỜI THỨ 4`: `x=520`, `y=600`, `font-size=25`, `rotate=8deg`

Artist identity:

- `NGHỆ NHÂN`: `x=850`, `y=452`, `font-size=30`
- curved `ĐÀO ANH TUẤN` SVG: `x=710`, `y=462`, `width=520`, `height=130`
- `CUỐI CÙNG`: `x=1140`, `y=420`, `font-size=23`, `rotate=12deg`

Paragraphs:

- first biography paragraph: `x=860`, `y=595`, `width=420`
- return-to-craft paragraph: `x=860`, `y=1015`, `width=420`

Music staff quote:

- `x=145`, `y=1028`, `width=570`
- `font-size=17`, `line-height=1.58`
- quote is line-broken manually to sit on the staff area.

## Exact Customer Text Used

Intro:

```txt
Trong con ngõ nhỏ của làng Đào Xá, một xưởng đàn cũ vẫn tồn tại giữa những ngôi nhà mới mọc lên xung quanh. Không có dây chuyền hiện đại hay quy mô sản xuất lớn, nơi đây giữ gần như nguyên vẹn quy trình chế tác nhạc cụ truyền thống qua nhiều thế hệ.
```

Artist identity:

```txt
1968
THÔN ĐÀO XÁ
ĐỜI THỨ 4
NGHỆ NHÂN
ĐÀO ANH TUẤN
CUỐI CÙNG
```

Biography:

```txt
Ông Đào Anh Tuấn, sinh năm 1968, hiện là người duy nhất tại Đào Xá còn có khả năng chế tác hoàn chỉnh các loại nhạc cụ dây dân tộc từ khâu chọn vật liệu đến hoàn thiện sản phẩm. Trong khi nhiều thợ khác chỉ thực hiện một số công đoạn nhất định, ông có thể đảm nhiệm toàn bộ quy trình sản xuất.
```

Return paragraph:

```txt
Tuy nhiên, ông Tuấn không theo nghề từ nhỏ. Nhận thấy nghề làm đàn vất vả và thu nhập thấp, ông từng rời quê để làm nghề lái xe. Chỉ khi cha già yếu và xưởng đàn đứng trước nguy cơ ngừng hoạt động, ông mới quyết định quay về tiếp nối nghề gia đình.
```

Quote:

```txt
“Trước tôi đi lái xe. Thấy đây là nghề truyền thống của địa phương và của gia đình quá lâu đời rồi, không ai làm nữa tôi thấy tiếc. Nó vừa mang nét bản sắc văn hóa Việt Nam, sợ bị thất truyền nên tôi về học thôi.”
```

No customer text was rewritten, shortened, or replaced with OCR.

## Animation Sequence

Scene08 uses IntersectionObserver and `.is-active`.

Sequence:

1. Title group
2. Intro paragraph
3. Village sign
4. Artisan + music staff asset
5. `1968`
6. `THÔN ĐÀO XÁ`
7. `ĐỜI THỨ 4`
8. `NGHỆ NHÂN`
9. Curved `ĐÀO ANH TUẤN`
10. `CUỐI CÙNG`
11. First biography paragraph
12. Return-to-craft paragraph
13. Staff quote with line-by-line reveal

Reduced motion shows all content immediately.

## Part 2 Confirmation

Lower Part 2 content was not implemented. The old artisan portrait card, `TRUNG BÌNH 8-10 TIẾNG / NGÀY`, and the lower paragraphs from `thamkhao8-2.png` were not added.

## QA

Desktop 1366 source QA:

- Scene08 is wired after Scene07.
- Part 1 uses a `1366 x 1774` artboard.
- Village sign is upper-right and faded.
- Artisan + staff asset is positioned to start in the first viewport and continue into the second.
- Curved `ĐÀO ANH TUẤN` uses SVG textPath, not a flat text line.
- Quote text is placed on the staff-paper area with manual staff-aligned line breaks.
- No lower Part 2 strings were found in the Scene08 implementation.

Desktop 1536 source QA:

- Scene08 uses the same full-width scale model as Scene07.
- Rendered width follows `document.documentElement.clientWidth`.

Mobile 390 source QA:

- Same 1366 artboard scales down.
- No alternate mobile layout or duplicate text was introduced.
- Section height scales from `1774 * (390 / 1366)`.

## Build / Browser QA Note

No `package.json` was found under `/home/quang/Documents/brief-1` with `find -maxdepth 8`, so npm build/browser QA could not be run from this project snapshot.
