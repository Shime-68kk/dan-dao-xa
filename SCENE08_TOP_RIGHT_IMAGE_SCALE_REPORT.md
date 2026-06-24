# Scene08 Top Right Image Scale Report

## Scope

- Scene: `Scene08LastLink`
- Files changed:
  - `src/sections/page01/Scene08LastLink/Scene08LastLink.jsx`
  - `src/sections/page01/Scene08LastLink/Scene08LastLink.css`
  - `src/assets/page01/scene08/scene08-top-right-image.png`

## Image Asset

- Source image used:
  - `slide 8/ảnh 1.png`
- Production asset copied to:
  - `src/assets/page01/scene08/scene08-top-right-image.png`
- The Scene08 top-right image import now uses this production asset.

## Final CSS Values

- Selector adjusted:
  - `.scene08__village-sign`
- Final placement/dimensions in the 1366px artboard:
  - `top: 0`
  - `right: 0`
  - `width: 1080px`
  - `height: 560px`
- Fit/crop:
  - `object-fit: cover`
  - `object-position: center center`
- Readability treatment:
  - `filter: brightness(0.82) saturate(0.9) contrast(0.94)`
- The old radial mask was removed so the image aligns cleanly to the top/right slide edges.

## QA

- Desktop viewport checked: `1366x768`
- Local URL checked: `http://127.0.0.1:5174/dan-dao-xa/`
- Screenshot captured:
  - `/tmp/scene08-viewport-1366x768.png`
- Desktop computed results:
  - Image top aligned with Scene08: `true`
  - Image right aligned with Scene08: `true`
  - Rendered image size at desktop scale: about `1068.14px × 553.85px`
  - Rendered image left edge at desktop scale: about `x=282.86px`, reaching close to the title zone while staying behind foreground text.
  - `object-fit`: `cover`
  - Horizontal overflow: `0`
- Desktop screenshot QA:
  - `/tmp/scene08-viewport-1366x768.png`
  - The top-right image is visibly larger, covers most of the upper-right half, remains flush to the top/right slide edges, and does not cover important title/body text.
- Mobile quick check:
  - Viewport: `390x844`
  - Image right edge aligned to viewport after scaling.
  - Horizontal overflow: `0`

## Build Result

- `npm run build` passed.
