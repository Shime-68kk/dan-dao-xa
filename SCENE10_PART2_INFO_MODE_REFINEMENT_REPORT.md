# Scene10 Part 2 Info Mode Refinement Report

## Scope
- Patched Scene10 Part 2 info mode only.
- Normal carousel mode was not redesigned.
- Scene10 Part 1 was not changed.
- Instrument data, content, audio files, and image assets were not changed.

## Files Changed
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.jsx`
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.css`

## Info Mode Cluster Position
- Raised the info-mode visual cluster so it clears the fixed bottom control bar.
- Active card top changed from `8px` to `-48px`.
- Detail panel top changed from `18px` to `-40px`.
- Bottom control bar remains in its previous position.

## Selected Active Card
- Final desktop active card values:
  - `left: 260px`
  - `top: -48px`
  - `width: 340px`
  - `height: 430px`
- Final active card image values:
  - `width: 286px`
  - `height: 276px`
  - `object-fit: contain`
  - `filter: none`
  - `opacity: 1`
  - `transform: none`
- The active info card remains outside the carousel 3D transform stack.

## Detail Panel
- Final desktop detail panel values:
  - `left: 648px`
  - `top: -40px`
  - `width: 682px`
  - `height: 408px`
- Gap from selected card:
  - selected card right edge: `600px`
  - detail panel left edge: `648px`
  - gap: `48px`
- Detail image still uses the original `detail-*.png` asset directly with:
  - `object-fit: contain`
  - `filter: none`
  - `opacity: 1`
  - `transform: none`

## Desktop Arrows
- Desktop navigation arrows are visible and clickable in info mode.
- Info-mode arrow values:
  - opacity: `0.72`
  - left arrow: `left: 86px`, `top: 116px`
  - right arrow: `right: 28px`, `top: 116px`
- Keyboard arrow navigation was not changed.

## Volume Slider
- Volume popover now stays open while pointer is over the button/slider, while focused, and while dragging.
- Clicking outside the volume control closes the popover.
- Native range input remains:
  - `min="0"`
  - `max="1"`
  - `step="0.01"`
  - `aria-label="Điều chỉnh âm lượng"`
- Icon button still toggles mute/unmute and reflects muted state.
- Default volume remains `0.8` unless the user changes it.

## Mobile
- Mobile info mode remains stacked inside the scaled 1366px artboard.
- Final mobile values:
  - active card: `left: 430px`, `top: -18px`, `width: 506px`, `height: 222px`
  - detail panel: `left: 388px`, `top: 214px`, `width: 622px`, `height: 190px`
- Bottom controls remain visible.
- Swipe behavior was not changed.

## QA Notes
- `1366x768`: info cluster is higher; active card and detail panel clear the bottom control bar.
- `1536x864`: same scaled artboard contract applies.
- `390x844`: stacked info mode remains inside the artboard and no new page-width layer was introduced.
- Prev/next, swipe, keyboard, play/pause, mute/volume, and audio focus behavior were preserved.

## Build
- Command: `npm run build`
- Result: Passed.
