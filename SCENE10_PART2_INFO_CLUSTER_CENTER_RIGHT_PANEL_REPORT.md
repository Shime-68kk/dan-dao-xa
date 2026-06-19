# Scene10 Part 2 Info Cluster Center Right Panel Report

## Scope
- Patched Scene10 Part 2 info mode only.
- Scene10 title/paragraph were not changed.
- Normal carousel mode was not redesigned.
- Instrument names, audio paths, image assets, and content were not changed.
- Bottom player bar was not moved or redesigned.

## Files Changed
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.css`

## Final Cluster Math
- Artboard width: `1366px`
- Left selected card width: `220px`
- Gap: `22px`
- Right detail panel width: `980px`
- Total cluster width: `1222px`
- Cluster left edge: `(1366px - 1222px) / 2 = 72px`
- Cluster right edge: `72px + 1222px = 1294px`
- Cluster center: `72px + 611px = 683px`
- Artboard center: `1366px / 2 = 683px`
- Center difference: `0px`

## Final Wrapper
- Uses CSS variables and `calc()` for centered placement.
- `--scene10-width: 1366px`
- `--scene10-info-card-width: 220px`
- `--scene10-info-layout-gap: 22px`
- `--scene10-detail-width: 980px`
- `--scene10-info-layout-width: 1222px`
- `--scene10-info-layout-left: calc((1366px - 1222px) / 2)`
- `--scene10-info-layout-top: -50px`
- `--scene10-info-layout-height: 440px`

## Final Left Card
- Width: `220px`
- Height: `310px`
- Flex basis: `220px`
- Image:
  - `width: 176px`
  - `height: 170px`
  - `object-fit: contain`
  - `filter: none`
  - `opacity: 1`
  - `transform: translateZ(0)`
  - `backface-visibility: hidden`

## Final Right Detail Panel
- Width: `980px`
- Height: `440px`
- Flex basis: `980px`
- Right detail panel is the primary visual element.
- Image remains the original selected `detail-*.png`, rendered as a foreground `<img>`.
- Foreground detail image uses:
  - `filter: none`
  - `opacity: 1`
  - `transform: translateZ(0)`
  - `backface-visibility: hidden`
  - `image-rendering: auto`

## Ghost Cards
- Ghost carousel cards remain hidden in info mode:
  - `opacity: 0`
  - `visibility: hidden`
  - `pointer-events: none`
- Carousel stage remains non-interactive in info mode.

## Arrows And Controls
- Arrows remain above panels:
  - `z-index: 100`
  - `pointer-events: auto`
  - hitbox: `56px x 56px`
- CSS layer path keeps the right arrow clickable because info layout/panels do not intercept pointer events.
- Bottom controls and volume behavior were not changed.

## Build
- Command: `npm run build`
- Result: Passed.
