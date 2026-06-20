# Scene11 Slide 11-1 Background Fit Report

## Files Changed

- `src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.jsx`
- `src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.css`
- `.codex-checks/scene11-slide1-audit.js`

## Background Asset / Class Changed

- Added a full-bleed part-1 collage background layer:
  - JSX class: `.scene11-fullbleed-bg--part1-collage`
  - Source asset: `scene11CollageOverlay`
  - Real source file inspected: `slide 11-1/nền lớp trên nền gỗ.png`
- Existing full-bleed wood background remains:
  - JSX class: `.scene11-fullbleed-bg--part1`
  - Source asset: `scene11WoodBg`
  - Real source file inspected: `slide 11-1/nền chủ đạo.png`

## Scope Confirmation

- Only the Slide 11-1 background fitting layer was touched.
- No text block positions were changed.
- No chart, arrow, callout, paragraph, image composition, or Scene11 scroll/transition logic was changed.
- Scene11-2, Scene11-3, and Scene11-4 were not changed.

## QA

- Tested widths:
  - `1366x768`
  - `1024x768`
  - `768x1024`
  - `430x932`
  - `390x844`
  - `360x800`
- Screenshot/metric output:
  - `/tmp/brief1-scene11-slide1/scene11-slide1-audit.json`
  - `/tmp/brief1-scene11-slide1/scene11-slide1-1366x768.png`
  - `/tmp/brief1-scene11-slide1/scene11-slide1-1024x768.png`
  - `/tmp/brief1-scene11-slide1/scene11-slide1-768x1024.png`
  - `/tmp/brief1-scene11-slide1/scene11-slide1-430x932.png`
  - `/tmp/brief1-scene11-slide1/scene11-slide1-390x844.png`
  - `/tmp/brief1-scene11-slide1/scene11-slide1-360x800.png`
- Result: part-1 background layers cover the full Scene11 viewport/stage width; the accepted foreground composition remains on top unchanged.

## Build Result

- `npm run build` completed successfully.
