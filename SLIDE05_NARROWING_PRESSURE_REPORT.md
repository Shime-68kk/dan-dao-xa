# Slide05 Narrowing Pressure Report

## Files created/changed

- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.jsx`
- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.css`
- `src/sections/page01/Scene05NarrowingPressure/scene05.content.js`
- `src/pages/Page01Story/Page01Story.jsx`
- `src/assets/page01/scene05/scene05-infographic-template.png`
- `src/assets/page01/scene05/scene05-title.png`
- `src/assets/page01/scene05/scene05-dan.png`

## Slide 5 assets found and copied

- Source: `/home/quang/Documents/brief-1/project/Slide 5/nền infographic.png`
  Copied to: `src/assets/page01/scene05/scene05-infographic-template.png`
- Source: `/home/quang/Documents/brief-1/project/Slide 5/tiêu đề.png`
  Copied to: `src/assets/page01/scene05/scene05-title.png`
- Source: `/home/quang/Documents/brief-1/project/Slide 5/ảnh đàn tách nền.png`
  Copied to: `src/assets/page01/scene05/scene05-dan.png`

## Final asset sizes used

- `scene05-infographic-template.png`: `2903 x 4512`
- `scene05-title.png`: `2903 x 1632`
- `scene05-dan.png`: `264 x 195`

## Desktop stage size and scaling strategy

Scene05 uses a normal continuous-scroll section, not sticky behavior. The internal design stage is `1366px x 2125px`, with the infographic template rendered at full stage size using `object-fit: fill`. The stage is wrapped in a width-scaled shell using the existing `useWidthScale(1366)` hook.

## Text/content structure

All editable content is stored in `scene05.content.js`, including intro text, top factor labels, four pressure cards, table headers and rows, summary captions, insight text, and final quote. The title remains an image layer for visual fidelity, as requested.

## Animation strategy

Scene05 uses a lightweight `RevealOnView` component with `IntersectionObserver`. Each text block fades and slides up subtly as it enters the viewport. The final quote uses a gentler scale from `0.985` to `1`. Reduced-motion mode shows all content immediately.

## Mobile strategy

Below `768px`, the fixed infographic layout switches to readable normal flow. The template becomes a faint decorative background, cards/table/text stack vertically, and font sizes are increased for readability while avoiding horizontal overflow.

## Build result

- `npm run build`: passed.

## Remaining TODOs

- Manual browser QA against `thamkhao5-1.png` and `thamkhao5-2.png` is recommended for final coordinate polish.
