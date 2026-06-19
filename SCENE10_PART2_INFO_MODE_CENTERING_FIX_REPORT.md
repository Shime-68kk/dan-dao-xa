# Scene10 Part 2 Info Mode Centering Fix Report

## Scope
- Patched Scene10 Part 2 info mode only.
- Normal carousel mode was not redesigned.
- Scene10 Part 1 title/paragraph were not changed.
- Instrument content, audio files, and image assets were not changed.

## Files Changed
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.css`

## Final Selected Card
- Info-mode selected card:
  - `left: 210px`
  - `top: 16px`
  - `width: 300px`
  - `height: 340px`
- Selected card image remains:
  - `width: 235px`
  - `height: 225px`
  - `object-fit: contain`
  - `filter: none`
  - `opacity: 1`
  - `transform: none`

## Final Detail Panel
- Info-mode detail panel:
  - `left: 555px`
  - `top: 16px`
  - `width: 760px`
  - `height: 420px`
- Detail panel right edge: `1315px`
- Right artboard margin: `51px`
- Detail image remains:
  - `object-fit: contain`
  - `filter: none`
  - `opacity: 1`
  - `transform: none`

## Gap
- Selected card right edge: `210px + 300px = 510px`
- Detail panel left edge: `555px`
- Exact gap: `45px`

## Ghost Cards
- Info-mode decorative carousel cards are hidden:
  - `opacity: 0`
  - `visibility: hidden`
  - `pointer-events: none`
- The carousel stage remains `pointer-events: none` in info mode.
- This removes the blurred/faded ghost card between the selected card and detail panel.

## Arrows
- Info-mode arrows remain visible and clickable by CSS layering:
  - `z-index: 90`
  - `pointer-events: auto`
  - hitbox: `56px x 56px`
- Right arrow remains at `right: 36px`, `top: 120px`.
- Left arrow remains at `left: 58px`, `top: 120px`.

## Browser QA Notes
- Production build passed.
- Normal carousel CSS blocks were not changed by this patch.
- A previous headless browser attempt in this environment could load the app, but URL text-fragment navigation did not land reliably on Scene10 for interactive click QA. Right-arrow click reliability is addressed structurally by keeping the arrow above all info layers and making the stage, ghost cards, selected preview, and detail panel non-interactive in info mode.
- No horizontal overflow layer was introduced; all changes remain inside the existing 1366px scaled Scene10 artboard.

## Build
- Command: `npm run build`
- Result: Passed.
