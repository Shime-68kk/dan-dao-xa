# Scene10 Part 2 Player Polish Report

## Scope
- Patched Scene10 Part 2 interaction quality, preload/decode behavior, selected-card clarity, info-panel clarity, and volume control.
- Did not rebuild Scene10.
- Did not change Scene10 Part 1.
- Did not change the six visible instrument dataset.
- Did not change swipe, keyboard, prev/next, play/pause, or audio-focus logic.
- Did not crop, flatten, or replace images.

## Files Changed
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.jsx`
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.css`

## Preload / Decode
- Added mount-time preload/decode loop for every visible `item.image` and `item.detailImage`.
- Added `loading="eager"` and `decoding="async"` to card images.
- Added `loading="eager"` and `decoding="async"` to the active detail image.

## Bitmap Clarity Changes
- Removed image-level drop-shadow filter from instrument card images.
- Removed wrapper filter transitions from carousel cards.
- Side-card softness now relies on transform/opacity rather than blur/filter.
- Selected card image now explicitly uses:
  - `opacity: 1`
  - `filter: none`
  - `transform: none`
  - `image-rendering: auto`
  - `backface-visibility: hidden`
- Info mode keeps selected card and selected image at `opacity: 1` and `filter: none`.

## Detail Panel Changes
- Detail panel variables:
  - `--scene10-detail-width: 530px`
  - `--scene10-detail-height: 430px`
- Desktop detail panel final coordinates:
  - `left: 628px`
  - `top: -72px`
  - `width: 530px`
  - `height: 430px`
- Detail wrapper animates only `opacity` and `translate3d`.
- Detail image itself uses:
  - `width: 100%`
  - `height: 100%`
  - `object-fit: contain`
  - `opacity: 1`
  - `filter: none`
  - `transform: none`
  - `image-rendering: auto`
- Mobile detail panel:
  - `left: 443px`
  - `top: -18px`
  - `width: 480px`
  - `height: 390px`

## Volume Control
- Added state:
  - `volume`, default `0.8`
  - `muted`, default `false`
  - `showVolume`, default `false`
- Audio element now receives:
  - `audio.volume = muted ? 0 : volume`
  - `audio.muted = muted`
- Volume icon toggles mute/unmute.
- If muted at volume `0`, unmuting restores volume to `0.8`.
- Added a keyboard-accessible range input:
  - `min="0"`
  - `max="1"`
  - `step="0.01"`
  - `aria-label="Âm lượng nhạc cụ"`
- Slider appears on hover/focus/click around the volume control.
- Icon switches between `Volume2` and `VolumeX`.

## QA Notes
- `1366x768`: selected card no longer receives blur/filter while becoming active; detail panel is larger and still leaves clearance from the right arrow/control bar.
- `1536x864`: scaled artboard preserves the same spacing and interaction model.
- `390x844`: mobile override keeps the larger detail panel within the scaled artboard; no new horizontal page layer was added.
- Cover Flow, Info toggle, swipe, keyboard, play/pause, switching while playing, and audio-focus behavior were preserved.

## Build
- Command: `npm run build`
- Result: Passed.
