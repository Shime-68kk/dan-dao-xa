# Scene10 Part 2 Info Mode Final Spacing Report

## Scope
- Patched Scene10 Part 2 info mode only.
- Normal carousel mode was not redesigned.
- Scene10 Part 1 title/paragraph were not changed.
- Instrument data, text content, audio paths, and image assets were not changed.

## Files Changed
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.jsx`
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.css`

## Info Layout Wrapper
- Added/enforced `.scene10-player__info-layout` as the single centered info cluster.
- Desktop wrapper:
  - `left: 220px`
  - `top: 8px`
  - `width: 1120px`
  - `height: 430px`
  - `display: flex`
  - `align-items: center`
  - `gap: 24px`
- This makes the selected card and detail panel read as one two-column layout.

## Selected Card
- Final selected-card size:
  - `width: 320px`
  - `height: 380px`
  - `flex: 0 0 320px`
- Final selected-card image:
  - `width: 250px`
  - `height: 240px`
  - `object-fit: contain`
  - `filter: none`
  - `opacity: 1`
  - `transform: none`
- Added a stronger active-state treatment:
  - brighter warm border
  - warm glow/shadow
  - subtle inset light
- The active card image/text remain sharp; glass is only behind content via `::before`.

## Detail Panel
- Final detail-panel size:
  - `width: 775px`
  - `height: 430px`
  - `flex: 0 0 775px`
- Detail image remains:
  - original selected `detail-*.png`
  - `width: 100%`
  - `height: 100%`
  - `object-fit: contain`
  - `filter: none`
  - `opacity: 1`
  - `transform: none`

## Gap
- Final gap between selected card and detail panel: `24px`.
- Total desktop cluster width: `320px + 24px + 775px = 1119px`, inside the `1120px` wrapper.

## Ghost Cards
- Ghost carousel cards are hidden in info mode:
  - `opacity: 0`
  - `visibility: hidden`
  - `pointer-events: none`
- Carousel stage also remains `pointer-events: none` in info mode.

## Arrows And Controls
- Arrows remain above info panels:
  - `z-index: 90`
  - hitbox: `56px x 56px`
  - `pointer-events: auto`
- Bottom controls were not moved or redesigned.
- Volume behavior was not changed by this patch.

## QA Notes
- Build passed.
- CSS hit-test path keeps arrows clickable: panels/wrapper/ghost cards are non-interactive, arrows are `pointer-events: auto` at `z-index: 90`.
- A reliable browser click capture was not available in this environment, but the right arrow click issue is addressed structurally by layer and pointer-event rules.
- No horizontal overflow layer was introduced; info layout remains inside the existing scaled Scene10 artboard.

## Build
- Command: `npm run build`
- Result: Passed.
