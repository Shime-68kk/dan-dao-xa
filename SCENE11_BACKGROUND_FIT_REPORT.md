# Scene11 Background Fit Report

## Files Changed

- `src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.jsx`
- `src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.css`

## Change Summary

- Scene11 background was changed from relying only on the scaled `1366px x 812px` artboard background to a full-bleed cover background behind each existing artboard.
- This fixes the unintended black side strips caused when the accepted artboard scales to fit viewport height and no longer fills the full viewport width.
- Existing Scene11 content layout, text, YouTube cards, links, interaction logic, pinning, and animation were not moved or redesigned.

## Exact Classes Changed

- Added `.scene11-fullbleed-bg`
  - `position: absolute`
  - `inset: 0`
  - `width: 100%`
  - `height: 100%`
  - `object-fit: cover`
  - `object-position: center center`
  - `pointer-events: none`
- Added `z-index: 1` to `.scene11-artboard` so existing accepted artboard content remains above the new full-bleed background layer.
- Added full-bleed background image elements for:
  - `.scene11-fullbleed-bg--part1`
  - `.scene11-fullbleed-bg--part2`
  - `.scene11-fullbleed-bg--part3`
  - `.scene11-fullbleed-bg--part4`

## QA

- `npm run build` completed successfully.
- Desktop `1366x768`: the full-bleed background layer uses the real Scene11 assets with `object-fit: cover`, preventing black side bars while preserving current artboard positioning.
- Mobile/narrow viewport: the same full-bleed layer remains constrained to each Scene11 step with `width: 100%`, `height: 100%`, and `object-fit: cover`, so no black side strips are introduced.

## Remaining Risk

- The center artboard remains intentionally scaled and positioned as before. Only the background visible outside that scaled artboard was filled.
