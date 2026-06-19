# Scene10 Part 1 Title Fix Report

## Scope
- Patched Scene10 Part 1 typography/layout only.
- Did not build or touch the future lower instrument-card/player section.
- Did not modify Scene01-Scene09.
- Customer paragraph text was not changed.

## Files Changed
- `src/sections/page01/Scene10SoundCulture/Scene10SoundCulture.css`

## Final Title Values
- `Những thanh âm`
  - Old: `left: 165px`, `top: -6px`, `font-size: 48.3px`
  - New: `left: 165px`, `top: 28px`, `font-size: 48.3px`
  - Font: `var(--font-client-aurora, "Client VL Aurora Aged", "VL Aurora Aged", cursive)`
- `mang`
  - Old: `left: 530px`, `top: 78px`, `font-size: 37.2px`
  - New: `left: 520px`, `top: 102px`, `font-size: 37.2px`
  - Font: same Aurora stack
- `HỒN VĂN HÓA VIỆT`
  - Old: `left: 675px`, `top: 82px`, `font-size: 48px`
  - New: `left: 675px`, `top: 96px`, `font-size: 48px`
  - Font: `var(--font-client-playfair, "Client Playfair Display", "Playfair Display", "Times New Roman", serif)`
  - Gradient/shadow treatment preserved.

## Final Paragraph Values
- Old: `left: 260px`, `top: 185px`, `width: 850px`, `font-size: 13px`, `line-height: 1.55`, `font-weight: 400`
- New: `left: 260px`, `top: 190px`, `width: 850px`, `font-size: 14px`, `line-height: 1.58`, `font-weight: 700`
- Font: `var(--font-client-courier, "Client Courier New", "Courier New", monospace)`
- Color: `#f3e6d7`

## Screenshot Comparison Notes
- Reference target: `slide 10-1/thamkhao10-1.png`.
- `Những thanh âm` was moved down by `34px`, removing the top-edge clipping risk and matching the reference's airy top spacing more closely.
- `mang` was moved left by `10px` and down with the title block, so it sits more directly under the end of `Những thanh âm`.
- `HỒN VĂN HÓA VIỆT` keeps the same x coordinate but moves down to align with `mang` like the reference composition.
- Paragraph is larger and bolder while staying in the upper text area; the lower portion remains empty/reserved for the next phase.
- Automated screenshot capture was not attached because the local Node runtime lacks a WebSocket client for Chromium CDP, but Chromium availability and the production build were verified.

## Viewport QA Notes
- `1366px`: final coordinates are within the 1366 artboard and keep all text in the upper 2/5.
- `1536px`: Scene10 retains the same scaled-artboard contract, so internal coordinates scale proportionally.
- `390px`: Scene10 remains a scaled 1366px artboard with `overflow: hidden`; no independent lower/mobile layout was introduced.
- Horizontal overflow: no new wide element was added beyond the existing scaled artboard model.

## Build
- Command: `npm run build`
- Result: Passed.
