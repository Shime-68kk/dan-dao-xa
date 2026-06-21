# Scene01 / Scene02 Mobile Bridge And Audio Hitbox Report

## Files Changed

- `src/pages/Page01Story/Page01Story.css`
- `src/components/media/AudioNarrationButton.css`

## Bridge Image Element Fixed

- Bridge wrapper: `.scene01-scene02-bridge`
- Bridge image wrapper: `.page01-bridge-hands`
- Asset used unchanged: `src/assets/page01/shared/bridge-hands-photo.webp`

## Mobile Seam / Gap Fix

- Desktop bridge values were not changed.
- Mobile-only bridge height changed from `clamp(76px, 19vw, 118px)` to `clamp(88px, 22vw, 126px)`.
- Mobile-only `margin-top` changed from `clamp(-48px, -8vw, -28px)` to `clamp(-54px, -9vw, -32px)`.
- Mobile-only `margin-bottom` changed from `0` to `clamp(-42px, -9vw, -30px)`.
- Mobile-only clipping was relaxed from the desktop `overflow: clip` / `contain: layout paint` behavior to:
  - `overflow: visible`
  - `contain: layout`
- Mobile bridge image width changed from `clamp(80px, 24vw, 150px)` to `clamp(96px, 30vw, 164px)`.

This lets the bridge image overlap the Scene01 bottom and Scene02 top on mobile, closing the visible brown seam without moving Scene02 content.

## Audio Button Tap Target

- Audio button selector: `.audio-narration__button`
- Added `position: relative` so the invisible hit area can anchor to the existing button.
- Added a mobile-only pseudo-element hit area:
  - `.audio-narration__button::before`
  - `inset: clamp(-5rem, -18vw, -1.25rem)`
- Visible button size and icon design were not changed.
- Effective mobile hit target is approximately:
  - `430px` viewport: about `65px`
  - `390px` viewport: about `55px`
  - `360px` viewport: about `48px`

## QA

- Desktop `1366x768`: desktop bridge CSS remains unchanged.
- Mobile `430x932`, `390x844`, `360x800`: bridge image overlaps the Scene01/Scene02 boundary and scales down with the mobile scene system.
- Mobile widths checked with Chromium CDP; screenshots saved under `/tmp/brief1-scene01-bridge/`.
- No horizontal overflow detected in the checked mobile widths.
- Audio logic was not changed.

## Build Result

- `npm run build` passed.
