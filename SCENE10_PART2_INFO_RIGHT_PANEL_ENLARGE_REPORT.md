# Scene10 Part 2 Info Right Panel Enlarge Report

## Scope
- Patched Scene10 Part 2 info mode only.
- Scene10 title/paragraph were not changed.
- Normal carousel mode was not redesigned.
- Instrument names, data, audio paths, and image assets were not changed.

## Files Changed
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.css`

## Final Info Wrapper
- `left: 165px`
- `top: 28px`
- `width: 1056px`
- `height: 390px`
- `display: flex`
- `align-items: center`
- `gap: 16px`
- Total cluster width: `260px + 16px + 780px = 1056px`

## Final Left Selected Card
- Width: `260px`
- Height: `330px`
- Flex basis: `260px`
- Selected card image:
  - `width: 208px`
  - `height: 200px`
  - `object-fit: contain`
  - `filter: none`
  - `opacity: 1`
  - `transform: translateZ(0)`
  - `backface-visibility: hidden`

## Final Right Detail Panel
- Width: `780px`
- Height: `400px`
- Flex basis: `780px`
- Right panel is now the dominant info-mode element.
- Gap from left card: `16px`

## Bitmap Or Live HTML
- Right detail panel remains a bitmap panel using the original high-resolution `detail-*.png` assets.
- I did not rebuild it as live HTML because the current structured instrument data only includes name/image/detail image/audio; it does not include reliable tags, descriptions, feature text, or star ratings to reproduce the panel without inventing content.

## Sharpness
- Active selected-card image and detail-panel image use no blur:
  - `filter: none`
  - `opacity: 1`
  - `transform: translateZ(0)`
  - `image-rendering: auto`
  - `backface-visibility: hidden`
- Glass effects remain only behind foreground content via background/pseudo-element layers.

## Arrows And Controls
- Info-mode arrows remain:
  - `z-index: 100`
  - `pointer-events: auto`
  - hitbox: `56px x 56px`
- Right arrow click path remains structurally clear because the info layout and panels use `pointer-events: none`.
- Bottom player bar was not moved or redesigned.
- Volume behavior was not changed.

## Build
- Command: `npm run build`
- Result: Passed.
