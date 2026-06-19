# Slide04 Chart Report

## Files created/changed

- `src/pages/Page01Story/Page01Story.jsx`
- `src/assets/page01/scene04/scene04-background.webp`
- `src/sections/page01/Scene04LaborDecline/Scene04LaborDecline.jsx`
- `src/sections/page01/Scene04LaborDecline/Scene04LaborDecline.css`
- `src/sections/page01/Scene04LaborDecline/LaborDeclineChart.jsx`
- `src/sections/page01/Scene04LaborDecline/laborDecline.data.js`

## Assets

- Source background: `/home/quang/Documents/brief-1/Slide 4/nền.png`
- Optimized output: `src/assets/page01/scene04/scene04-background.webp`
- Output size: `1366x768`
- The chart is built as SVG/React code, not from a screenshot.

## Chart data

Used the exact requested data:

- `Đầu TK XX`: `55`
- `1954 - trước 1975`: `45`
- `Đầu những năm 1990`: `51`
- `2008`: `20`
- `2011`: `15`
- `2018`: `6`
- `2022`: `2`
- `2023 - 2026`: `1`

## SVG chart implementation

- `LaborDeclineChart.jsx` uses a custom SVG viewBox of `0 0 680 430`.
- Margins: `top 72`, `right 34`, `bottom 92`, `left 74`.
- Y domain is `0..60` with ticks `0, 10, 20, 30, 40, 50, 60`.
- X labels are categorical and rotated `-52deg`.
- The trend line uses a warm gold SVG path with rounded joins.
- Points are SVG circles with larger transparent hit targets.

## Animation

- `Scene04LaborDecline` uses `useElementInView({ threshold: 0.22, rootMargin: "0px 0px -18% 0px" })`.
- The chart receives `isVisible`.
- The line-drawing animation uses `stroke-dasharray`, `stroke-dashoffset`, and `pathLength="1"`.
- Animation duration is `2900ms`.
- Points fade in with staggered delays after viewport entry.
- Reduced motion shows the line and points immediately.

## Tooltip behavior

- Every point supports hover, focus, click, and tap.
- Tooltip format is:

```txt
<label>
SỐ HỘ GĐ: <value>
```

- Tooltips are black SVG callouts with white text and stay clamped within the chart viewBox.
- Active points show a yellow dot and subtle halo.
- Point hit areas include accessible labels such as `Đầu TK XX, Số hộ gia đình: 55`.

## Desktop placement

- Scene04 appears after Scene03 in `Page01Story`.
- Chart panel placement:
  - `left: 76px`
  - `top: 74px`
  - `width: 660px`
  - `height: 500px`
- Right and bottom text are placeholder scaffold blocks for later refinement.

## Mobile behavior

- Scene04 switches to a vertical layout under `768px`.
- Chart panel becomes full width with `max-width: 680px`.
- SVG remains responsive.
- Tooltips work on tap/click, not hover only.
- The scene avoids horizontal overflow.

## Verification

- `npm run build` passed.
- Build details:
  - Vite `v8.0.16`
  - `1601 modules transformed`
  - Build completed successfully in `304ms`
- Dev server smoke check:
  - `npm run dev -- --host 127.0.0.1 --port 5173`
  - Port `5173` was in use; Vite served at `http://127.0.0.1:5174/`
  - `curl -I http://127.0.0.1:5174/` returned HTTP `200`

## Remaining TODOs

- Refine the right paragraph and bottom text layout/content.
- Tune the decorative instrument and note assets if later Slide04 passes require exact placement.
- Perform final browser/device visual review of tooltip placement across mobile sizes.
