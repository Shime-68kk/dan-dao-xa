# Slide05 Alignment Repair Report

## Files changed

- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.jsx`
- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.css`
- `src/sections/page01/Scene05NarrowingPressure/scene05.content.js`

No Scene01, Scene02, Scene03, or Scene04 files were edited.

## Asset audit

`/home/quang/Documents/brief-1/project/Slide 5/nền infographic.png` is not blank. It already contains the visual scaffold plus baked elements: card frames, card number badges, card icons, orange pill labels, metric icons, large metric values, table/frame shapes, beige insight box, bottom quote frame, and the upper instrument group.

## Duplicate HTML overlays removed

- Removed rendered card pill rows and pill labels.
- Removed rendered metric/summary captions for this pass.
- Removed the extra small đàn image overlay.
- Kept only missing editable text in HTML: intro, top strip labels, section titles, card title/body text, table text, insight paragraph, and final quote.

## Title layer strategy

`tiêu đề.png` is now rendered as a full transparent title layer at `left: 0`, `top: 0`, `width: 1366px`, `height: 768px`, with a visually hidden `<h2>` for accessibility.

## Final stage size

- Desktop design stage: `1366px x 2123px`
- Template image: `1366px x 2123px`, `object-fit: fill`
- Scaling: existing `useWidthScale(1366)` hook

## Final text coordinates

- Intro: `left 155`, `top 355`, `width 780`
- Top factors: `230/582`, `425/582`, `655/582`, `835/582`
- `4 ÁP LỰC THU HẸP`: `top 700`
- Cards: `left 175/405/635/865`, `top 765`, `width 205`
- `SO SÁNH LỰA CHỌN VIỆC LÀM`: `top 1078`
- Table headers: `top 1156`
- Table rows: `top 1232`, `1310`, `1388`, `1466`
- Insight paragraph: `left 500`, `top 1675`, `width 650`
- Final quote: `left 300`, `top 1905`, `width 770`

## Animation notes

Kept the subtle `IntersectionObserver` reveal behavior. Elements fade and slide up gently; the final quote keeps the small scale-in effect. Reduced-motion mode shows content immediately.

## Mobile notes

Mobile keeps the stacked readable layout. Duplicate pill/metric overlays are removed there as well, and the template remains a faint decorative background.

## Build result

- `npm run build`: failed.
- Reason: `/home/quang/Documents/brief-1/project` currently has no `package.json`, so npm reports `Missing script: "build"`.

## Remaining TODOs

- Restore the project package metadata or run from the correct package root, then rerun `npm run build`.
- Manual browser QA with `?debugSlide5=1` is recommended for final coordinate tuning.
