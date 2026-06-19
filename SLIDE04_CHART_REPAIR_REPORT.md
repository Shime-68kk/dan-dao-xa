# Slide04 Chart Repair Report

## Files changed

- `src/sections/page01/Scene04LaborDecline/Scene04LaborDecline.jsx`
- `src/sections/page01/Scene04LaborDecline/Scene04LaborDecline.css`
- `src/sections/page01/Scene04LaborDecline/LaborDeclineChart.jsx`
- `src/assets/page01/scene04/base-wood-background.png`
- `src/assets/page01/scene04/scene04-decorative-overlay.png`
- `package-lock.json` was refreshed after `npm install` restored missing Rolldown optional build bindings.

## Background assets

- Base wood background: `/home/quang/Documents/brief-1/project/nền chủ đạo.png`
- Decorative overlay: `/home/quang/Documents/brief-1/project/Slide 4/nền.png`
- Copied to:
  - `src/assets/page01/scene04/base-wood-background.png` (`3586x2008`)
  - `src/assets/page01/scene04/scene04-decorative-overlay.png` (`2903x2117`)
- Scene04 now renders these as two image layers: `.scene04-base-bg` and `.scene04-overlay-bg`.
- No blur/filter is applied to either background layer.
- The previous flattened WebP background is no longer imported by Scene04.

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

## Smooth SVG path

- The chart is still a real interactive SVG, not a screenshot.
- Replaced the angular line path with `buildSmoothPath(points)`.
- The path uses cubic Bezier segments with horizontal controls and `tension = 0.42`, matching the requested safe smoothing approach.

## Tooltip and hit targets

- Each chart point renders:
  - a visible yellow point,
  - a halo,
  - an invisible interaction circle with radius `18`.
- Points support pointer hover/move/leave, click, touch start, keyboard focus, and Enter/Space activation.
- Tooltip is an absolutely positioned black HTML overlay inside the chart wrapper.
- Tooltip format:

```txt
<label>
SỐ HỘ GĐ: <value>
```

## Animation

- Line drawing still starts only when Scene04 enters the viewport.
- The line uses `stroke-dasharray`, `stroke-dashoffset`, and `pathLength="1"`.
- Duration is `2800ms`.
- Points fade in with staggered delays.
- Reduced motion shows line and points immediately.

## Desktop placement

- Chart panel:
  - `left: 78px`
  - `top: 82px`
  - `width: 655px`
  - `height: 455px`
- Right text scaffold:
  - `left: 760px`
  - `top: 110px`
  - `width: 430px`
- Bottom text scaffold:
  - `left: 102px`
  - `bottom: 90px`
  - `width: 660px`

## Mobile behavior

- Scene04 stacks chart and scaffold text vertically below `768px`.
- Chart remains responsive with SVG scaling.
- Tooltip works on tap/click, not hover only.
- No horizontal overflow is introduced by the chart.

## Build result

- Initial `npm run build` failed because Rolldown optional native bindings were missing.
- Ran `npm install`; it restored the optional packages and reported `0 vulnerabilities`.
- Final `npm run build` passed:
  - Vite `v8.0.16`
  - `1602 modules transformed`
  - Build completed successfully in `825ms`

## Remaining TODOs

- Final visual tuning of the right and bottom text blocks.
- Further exact alignment against the Canva reference after chart interaction is approved.
