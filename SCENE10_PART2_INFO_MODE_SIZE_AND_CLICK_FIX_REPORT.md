# Scene10 Part 2 Info Mode Size And Click Fix Report

## Scope
- Patched Scene10 Part 2 info mode only.
- Normal carousel mode was not redesigned.
- Scene10 Part 1 was not changed.
- Instrument content, data, audio files, and image assets were not changed.

## Files Changed
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.css`

## Final Selected Card
- Selected info card:
  - `left: 115px`
  - `top: -36px`
  - `width: 300px`
  - `height: 360px`
- Selected info card image:
  - `width: 235px`
  - `height: 225px`
  - `object-fit: contain`
  - `filter: none`
  - `opacity: 1`
  - `transform: none`
- The selected card remains the dedicated foreground info card outside the carousel 3D stack.
- The glass background is behind content via `::before`; image/text do not receive blur/backdrop-filter.

## Final Detail Panel
- Detail panel:
  - `left: 560px`
  - `top: -74px`
  - `width: 780px`
  - `height: 455px`
- Detail image:
  - rendered at `width: 100%`
  - rendered at `height: 100%`
  - source asset remains the original selected `detail-*.png`
  - `object-fit: contain`
  - `filter: none`
  - `opacity: 1`
  - `transform: none`
- The panel is now visibly larger than the previous `682px x 408px` state.

## Arrow Click Layering
- Arrow hitbox:
  - `width: 56px`
  - `height: 56px`
- Info-mode arrow z-index:
  - `z-index: 90`
- Info-mode arrow positions:
  - left arrow: `left: 58px`, `top: 120px`
  - right arrow: `right: 36px`, `top: 120px`
- Arrows remain `pointer-events: auto` in info mode.

## Pointer Events
- Set `.scene10-player.is-info-open .scene10-player__stage` to `pointer-events: none`.
- Set decorative carousel cards in info mode to `pointer-events: none`.
- Set foreground selected info card to `pointer-events: none` because it is a preview, not an interactive control.
- Set detail panel to `pointer-events: none` because the detail is a static image panel.
- This leaves the navigation arrows and bottom controls as the active click targets.

## Mobile
- Mobile info mode remains inside the scaled 1366px artboard.
- Mobile selected card:
  - `left: 430px`
  - `top: -34px`
  - `width: 506px`
  - `height: 204px`
- Mobile detail panel:
  - `left: 356px`
  - `top: 176px`
  - `width: 686px`
  - `height: 218px`

## QA Notes
- Build succeeded.
- CSS hit-test path confirms the right arrow is above panels/cards with `z-index: 90` and `pointer-events: auto`, while the stage, ghost cards, info preview, and static detail panel are non-interactive in info mode.
- Headless Chromium was attempted, but URL navigation landed on an earlier text match rather than Scene10, so a reliable interactive browser click confirmation was not captured in this environment.
- No horizontal overflow layer was introduced; all changes remain inside the existing scaled Scene10 artboard.

## Build
- Command: `npm run build`
- Result: Passed.
