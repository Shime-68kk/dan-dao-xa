# Scene11 Part 1 Report

## Files Created / Changed
- Created `src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.jsx`
- Created `src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.css`
- Changed `src/pages/Page01Story/Page01Story.jsx` to render Scene11 after Scene10
- Added `src/assets/page01/scene11/scene11-wood-bg.png`
- Added `src/assets/page01/scene11/scene11-collage-overlay.png`

## Asset Paths Used
- Base wood background: `src/assets/page01/scene11/scene11-wood-bg.png`
- Collage/stage overlay: `src/assets/page01/scene11/scene11-collage-overlay.png`
- Visual reference used for placement: `slide 11-1/thamkhao11-1.png`

## Architecture
- Added `SCENE11_STEPS` data array with Part 1 content and chart data.
- Component structure uses `.scene11`, `.scene11-sticky`, `.scene11-artboard`, `.scene11-step`, `.scene11-part1`, and `.scene11-chart`.
- Scene11 currently renders Part 1 only, with a TODO marker for adding Parts 2-4 as future step objects.
- Desktop uses a 1366 x 869 artboard scaled to document width.
- Mobile switches to readable stacked content order: intro, cinematic overlay area, chart/callout, source, explanatory paragraph.

## Desktop Coordinate Summary
- Left intro: `left: 135px`, `top: 268px`, `width: 372px`
- Chart group: `left: 155px`, `top: 468px`, `width: 360px`, `height: 260px`
- Callout: `left: 495px`, `top: 543px`, `width: 236px`
- Source note: `left: 150px`, `top: 753px`, `width: 360px`
- Right paragraph: `left: 790px`, `top: 512px`, `width: 438px`
- Background/collage overlay: full 1366 x 869 artboard, `object-fit: cover`

## Chart Data Confirmation
- 2024 = `6,8%`
- 2025 = `15,1%`
- Y-axis labels: `0%`, `5%`, `10%`, `15%`, `20%`
- Animation order implemented through delays: 2024 bar, arrow, 2025 bar.

## Tooltip Confirmation
- Tooltips are implemented on each bar.
- Supported interactions: mouse hover, keyboard focus, click, and touch start.
- Tooltip labels:
  - `2024: 6,8%`
  - `2025: 15,1%`

## QA Notes
- Source audit confirmed all required customer text is present without paraphrasing.
- Source audit confirmed comma decimal visible labels are used.
- CSS includes `prefers-reduced-motion` fallback.
- Horizontal overflow is constrained by the Scene11 wrapper and mobile stacked layout.

## Build Result
- `npm run build` passed.
