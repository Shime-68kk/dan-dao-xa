# Scene10 Part 2 Clarity Repair Report

## Scope
- Patched Scene10 Part 2 visual clarity only.
- Did not change Scene10 Part 1.
- Did not change instrument data, audio logic, swipe logic, keyboard logic, or audio-focus logic.
- No screenshots or flattened UI assets were introduced.

## Files Changed
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.css`

## Asset Check
- Detail assets in `src/assets/page01/scene10/instruments/` are still original high-resolution PNGs copied from `slide 10-2`.
- Confirmed detail image dimensions:
  - `detail-dan-bau.png`: `2903 x 2803`
  - `detail-dan-nguyet.png`: `2903 x 2803`
  - `detail-dan-nhi.png`: `2903 x 2803`
  - `detail-dan-tam.png`: `2903 x 2803`
  - `detail-dan-tranh.png`: `2903 x 2803`
  - `detail-dan-tu.png`: `2903 x 2803`

## Selected Card Clarity
- Added selected-card image override:
  - `.scene10-player__card[data-offset="0"] img`
  - `opacity: 1`
  - `filter: none`
  - `image-rendering: auto`
- Added same override while info mode is open.
- Side cards keep softer opacity/filter treatment; the selected card bitmap no longer receives the global drop-shadow filter.

## Detail Panel Clarity And Size
- Added CSS variables on `.scene10-player`:
  - `--scene10-detail-width: 460px`
  - `--scene10-detail-height: 444px`
- Desktop detail panel changed from:
  - `left: 694px`
  - `top: 4px`
  - `width: 368px`
  - `height: 355px`
  - `transform: translate3d(46px, 0, 0) scale(0.96)`
- Desktop detail panel changed to:
  - `left: 668px`
  - `top: -56px`
  - `width: 460px`
  - `height: 444px`
  - `filter: none`
  - `transform: translate3d(46px, 0, 0)`
- Detail image changed to:
  - `width: 100%`
  - `height: 100%`
  - `object-fit: contain`
  - `opacity: 1`
  - `filter: none`
  - `image-rendering: auto`
- The detail image itself is no longer scaled or filtered; only the wrapper translates during transition.

## Mobile Adjustment
- Mobile detail panel changed to:
  - `left: 463px`
  - `top: -8px`
  - `width: 440px`
  - `height: 425px`
  - `transform: translate3d(0, 22px, 0)`
- This keeps the image larger while avoiding the previous lower placement that could be clipped by the scaled artboard.

## QA Notes
- `1366x768`: selected card uses `filter: none`; detail panel is substantially larger and remains before the right arrow/control bar area.
- `1536x864`: same artboard-scaled sizing applies proportionally.
- `390x844`: mobile override keeps the larger detail panel inside the scaled artboard and does not add any new horizontal page layer.
- Cover Flow, Info toggle, swipe, keyboard, audio, and audio-focus code paths were not changed.

## Build
- Command: `npm run build`
- Result: Passed.
