# Slide04 Layout Text Repair Report

## Files changed

- `src/sections/page01/Scene04LaborDecline/Scene04LaborDecline.jsx`
- `src/sections/page01/Scene04LaborDecline/Scene04LaborDecline.css`

No Scene01, Scene02, or Scene03 files were edited. `LaborDeclineChart.jsx` was not changed.

## Background layer strategy and assets used

- Base wood background: `/home/quang/Documents/brief-1/project/nền chủ đạo.png`
- Decorative Slide 4 overlay: `/home/quang/Documents/brief-1/project/Slide 4/nền.png`
- Debug reference: `/home/quang/Documents/brief-1/project/Slide 4/thamkhaoslide4.png`

## Overlay placement/scaling strategy

Scene04 now uses a fixed internal `1366 x 768` design stage wrapped in `.scene04-scale-shell`. The shell uses width scaling from `useWidthScale(1366)`, matching the earlier fixed-stage scene strategy. Both background images render inside the same coordinate system at `1366px x 768px` with `object-fit: fill`, so the curved overlay and instrument layer align with the Canva reference instead of being viewport-covered independently.

`?debugSlide4=1` shows the reference overlay at `1366px x 768px` with `opacity: 0.35`; normal URLs do not show it.

## Right text exact content confirmation

The right text block now contains the two required Vietnamese paragraphs in the specified order.

## Bottom text exact content confirmation

The bottom text block now contains the required full Vietnamese paragraph, including the final question.

## Text reveal animation details

Added `.scene04-reveal` fade/slide animation:

- Chart: `80ms` delay
- Right paragraph 1: `260ms` delay
- Right paragraph 2: `440ms` delay
- Bottom paragraph: `620ms` delay

Reduced-motion mode disables reveal transitions and shows content immediately.

## Chart interactivity confirmation

The existing real SVG chart, animated curve, yellow points, hover/click/tap tooltip behavior, and legend `SỐ HỘ GĐ` were preserved. `LaborDeclineChart.jsx` was not modified.

## Desktop coordinates used

- Chart panel: `left: 74px`, `top: 78px`, `width: 665px`, `height: 500px`
- Right text: `left: 760px`, `top: 82px`, `width: 440px`
- Bottom text: `left: 105px`, `bottom: 72px`, `width: 730px`

## Mobile notes

Below `768px`, Scene04 returns to a vertical flow layout. The chart and exact text stack naturally, the background remains visible, and the debug reference is hidden.

## Build result

- `npm run build`: passed.

## Remaining TODOs

- Manual browser QA with `?debugSlide4=1` is recommended for final pixel tuning against the Canva reference.
