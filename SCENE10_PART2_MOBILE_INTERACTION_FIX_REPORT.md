# Scene10 Part 2 Mobile Interaction Fix Report

## Files Changed

- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.jsx`
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.css`

## Zoom Gating

- Detail zoom is now gated behind explicit info mode via `handleOpenDetailZoom`.
- The zoom modal can only open when `isInfoOpen` is `true`.
- The detail button is disabled and removed from tab order while info mode is closed:
  - `disabled={!isInfoOpen}`
  - `tabIndex={isInfoOpen ? 0 : -1}`
- The only remaining `setIsDetailZoomOpen(true)` path is inside the guarded `handleOpenDetailZoom` handler.

## Swipe Values

- `SCENE10_SWIPE_THRESHOLD`: changed from `26` to `20`.
- `SCENE10_SWIPE_VELOCITY_THRESHOLD`: added at `0.25`.
- `SCENE10_SWIPE_AXIS_LOCK`: changed from `1.05` to `1.15`.
- Swipe logic now uses distance or velocity after confirming horizontal intent.

## Hitbox Adjustments

- `.scene10-player__detail` now has `pointer-events: none` and `cursor: default` by default.
- `.scene10-player.is-info-open .scene10-player__detail` restores `pointer-events: auto` and `cursor: zoom-in`.
- Carousel cards now use `will-change: transform, opacity`.
- The carousel keeps `touch-action: pan-y`, so vertical page scroll remains native while horizontal swipes are captured.
- A short post-swipe click suppression prevents the synthetic click after a swipe from selecting a card or opening anything unexpectedly.

## QA

- Desktop 1366x768: desktop controls and info mode behavior preserved.
- Mobile 430x932 / 390x844 / 360x800: carousel swipe threshold is lower and no zoom can open before pressing `Thông tin`.
- Modal overlay is still rendered only when `isDetailZoomOpen` is true.
- No instrument data, audio source, content, layout, or visual design was changed.

## Build Result

- `npm run build` passed.
