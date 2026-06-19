# Scene10 Part 2 Info Layout Repair Report

## Scope
- Patched Scene10 Part 2 info-mode layout only.
- Did not change Scene10 Part 1.
- Did not change instrument content, data, audio logic, swipe logic, keyboard logic, or volume logic.
- Did not crop, flatten, or reduce image quality.

## Files Changed
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.css`

## Info Mode Zone Split
- Selected card zone now occupies approximately `x=272-594` on the 1366px artboard.
- Detail panel now starts at `x=700`, creating roughly `106px` of clear separation from the selected card zone.
- Detail panel no longer extends over or washes across the selected card area.

## Selected Card Info Mode
- Selected card info-mode transform changed from:
  - `translateX(-236px) translateZ(95px) scale(1.02) rotateY(8deg)`
- To:
  - `translateX(-250px) translateZ(95px) scale(1.02) rotateY(6deg)`
- Selected card z-index increased to `14`.
- Selected card remains:
  - `opacity: 1`
  - `filter: none`
- Selected card image remains:
  - `opacity: 1`
  - `filter: none`
  - `transform: none`

## Detail Panel
- Detail panel old values:
  - `left: 628px`
  - `top: -72px`
  - `width: 530px`
  - `height: 430px`
  - `z-index: 12`
- Detail panel new values:
  - `left: 700px`
  - `top: -22px`
  - `width: 560px`
  - `height: 338px`
  - `z-index: 13`
- Detail image keeps:
  - `object-fit: contain`
  - `opacity: 1`
  - `filter: none`
  - `transform: none`
  - `image-rendering: auto`

## Arrow Collision
- The right carousel arrow is hidden only while info mode is open:
  - `opacity: 0`
  - `pointer-events: none`
- This prevents the enlarged right-zone detail panel from colliding with the arrow.
- Bottom-bar previous/next controls remain available.

## Mobile
- Mobile info-mode selected card also shifts left within the scaled 1366px artboard.
- Mobile detail panel values:
  - `left: 700px`
  - `top: 12px`
  - `width: 548px`
  - `height: 330px`
- No new independent mobile layout or horizontal page layer was introduced.

## QA Notes
- `1366x768`: selected card and detail panel are separated into clear left/right zones.
- `1536x864`: scaled-artboard behavior preserves the same separation.
- `390x844`: same artboard-scaled layout remains inside the scene wrapper.
- Prev/next, swipe, keyboard, play/pause, and volume code paths were not modified.

## Build
- Command: `npm run build`
- Result: Passed.
