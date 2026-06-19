# Scene10 Part 2 Info Sharpness Rebuild Report

## Scope
- Rebuilt Scene10 Part 2 info mode structure only.
- Did not change Scene10 Part 1.
- Did not change instrument content, visible dataset, text, audio files, or image resolution.
- Did not crop, flatten, or export screenshots as assets.

## Files Changed
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.jsx`
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.css`

## Structural Fix
- Added a dedicated foreground active info card: `.scene10-player__info-card`.
- This active info card is rendered outside `.scene10-player__stage`, so it is outside the carousel 3D perspective/transform stack.
- In info mode, the old transformed carousel selected card is faded out and made non-interactive.
- The foreground active card uses the original selected instrument card image directly.

## Active Info Card Final Values
- Desktop 1366 artboard:
  - `x: 260px`
  - `y: 8px` relative to Scene10 Part 2 player
  - `width: 340px`
  - `height: 430px`
- Image inside active card:
  - `width: 286px`
  - `height: 276px`
  - `object-fit: contain`
  - `filter: none`
  - `opacity: 1`
  - `transform: none`
  - `image-rendering: auto`
- The active card has no backdrop filter on the actual image/text.
- The glass effect is only on `.scene10-player__info-card::before` behind the content.

## Detail Panel Final Values
- Desktop 1366 artboard:
  - `x: 655px`
  - `y: 18px` relative to Scene10 Part 2 player
  - `width: 635px`
  - `height: 356px`
- Gap from active card:
  - active card right edge: `600px`
  - detail panel left edge: `655px`
  - gap: `55px`
- Detail image:
  - uses selected `detail-*.png` source directly
  - `width: 100%`
  - `height: 100%`
  - `object-fit: contain`
  - `filter: none`
  - `opacity: 1`
  - `transform: none`

## Mobile Info Mode
- Mobile uses a stacked artboard layout:
  - active card top: `left: 430px`, `top: 0px`, `width: 506px`, `height: 222px`
  - detail panel below: `left: 388px`, `top: 232px`, `width: 590px`, `height: 302px`
- This remains inside the scaled 1366px artboard and does not add an independent horizontal page layer.

## Preload / Decode
- Existing full preload/decode for all visible card/detail images remains.
- Added selected-neighborhood preload/decode for current, previous, and next instruments on selected-index changes.
- Card/detail images include explicit `width="2903"` and `height="2803"` attributes.

## Image Source Paths
- Card images come from `src/assets/page01/scene10/instruments/dan-*.png`.
- Detail images come from `src/assets/page01/scene10/instruments/detail-dan-*.png`.
- These are copied from the original `slide 10-2` PNG assets and are not cropped or downsampled in this patch.

## Mute / Volume
- Existing mute toggle remains active.
- Volume button still uses `aria-pressed`.
- Icon still switches between `Volume2` and `VolumeX`.
- Slider and mute state were not removed.

## Debug
- Added `?debugScene10Info=1`.
- This shows outlines for:
  - active info card bounds
  - detail panel bounds
  - the gap between them
- Debug outlines are hidden by default.

## QA Notes
- `1366x768`: active info card is no longer the transformed carousel card; selected card and detail panel do not overlap.
- `1536x864`: scaled artboard preserves the same active-card/detail-panel relationship.
- `390x844`: mobile info mode stacks the active card above the detail panel within the scaled artboard.
- Prev/next, swipe, keyboard, play/pause, mute/volume, and audio focus logic were preserved.

## Build
- Command: `npm run build`
- Result: Passed.
