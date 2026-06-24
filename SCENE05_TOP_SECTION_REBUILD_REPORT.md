# Scene05 Top Section Rebuild Report

## Files Changed

- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.jsx`
- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.css`

## Assets Used

- `src/assets/page01/scene05/scene05-full.png`
  - Removed from the rebuilt top section.
  - Kept only inside `.scene05-lower-temp` as a cropped temporary lower-section image for sections not rebuilt in this pass.
- `src/assets/page01/scene05/scene05-infographic-template.png`
  - Clean Slide 5 infographic/frame asset from `/home/quang/Documents/brief-1/project/Slide 5/nền infographic.png`.
- `src/assets/page01/scene05/scene05-title.png`
  - Title artwork from `/home/quang/Documents/brief-1/project/Slide 5/tiêu đề.png`.

## Duplication Fix

- Removed/hidden the old full-slide screenshot from the rebuilt top section.
- `scene05-full.png` no longer renders behind the rebuilt title, intro paragraph, or four indicator labels.
- The old full-slide image is cropped downward with `.scene05-lower-temp__image { transform: translateY(-29.619%); }`, so its baked top title/intro/indicator strip cannot show behind the new top section.

## Top Text Rebuild

- The intro paragraph is now real HTML text, not image text.
- The four top indicator labels are now real HTML text, not image text:
  - `Thị trường / thu hẹp`
  - `Thủ công / truyền thống`
  - `1-2 năm / học nghề`
  - `5-7 triệu đồng /1 tháng`

## Font Confirmation

- Intro paragraph:
  - `font-family: "Courier New", Courier, monospace`
  - `font-size: 14.6px`
- Indicator labels:
  - `font-family: "Courier New", Courier, monospace`
  - `font-size: 13px`

## Scope Confirmation

- Only the top/first section was rebuilt in this pass.
- The lower `4 ÁP LỰC THU HẸP` card section, comparison table, bottom quote/insight, and later Scene05 sections were not rebuilt.
- Lower sections remain temporary and will need a later rebuild pass to remove remaining rasterized text there.

## Build Result

- `npm run build` passed successfully.
