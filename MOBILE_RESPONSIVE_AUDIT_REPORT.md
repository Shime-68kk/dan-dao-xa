# Mobile Responsive Audit Report

## Viewports Tested

- `486x1059`
- `430x932`
- `390x844`
- `360x800`
- `1366x768`

Screenshots and metrics were saved under:

- `/tmp/brief1-mobile-audit/`
- `/tmp/brief1-mobile-audit/mobile-critical-audit.json`

## Broken Scenes Found And Fixed

### Scene01 / Scene02 Bridge

- Problem: the decorative bridge image between Scene01 and Scene02 was too large on narrow screens and the bridge used a negative mobile bottom margin.
- Fix:
  - Reduced mobile bridge image sizing to `width: clamp(80px, 24vw, 150px)`.
  - Changed mobile bridge spacing so `margin-bottom: 0`.
  - Kept `pointer-events: none` and bridge containment.
- Verification:
  - At `486x1059`, `430x932`, `390x844`, and `360x800`, the bridge clears Scene02 and no longer chops into its text.

### Scene06CraftSteps

- Problem: the process section used a sticky wrapper, but the inner stage height was `100svh`, so the accepted desktop composition was not treated as one complete scaled stage on mobile.
- Fix:
  - Added `BASE_HEIGHT = 768`.
  - Changed Scene06 scale to use both width and height:
    - `Math.min(frameSize.width / BASE_WIDTH, frameSize.height / BASE_HEIGHT)`
  - Added `--scene06-stage-height`.
  - Changed `.scene06-steps__stage` height from `100svh` to the scaled artboard height.
  - Kept the existing sticky/pinned structure and slower scroll span.
- Verification:
  - Scene06 remains pinned in a `100svh` sticky viewport.
  - The process stage stays centered during group changes.
  - Group order remains unchanged: `1,2,3` -> `4,5,6` -> `7,8` -> final state.

### Scene10SoundCulture

- Problem: mobile carousel swipe was improved, but the “Thông tin” composition still rendered as a vertical/awkward detail layout on phone widths.
- Fix:
  - Kept the existing Scene10 artboard scaling.
  - Changed mobile `.scene10-player__info-layout` back to a horizontal `row`.
  - Kept fixed predictable mobile dimensions for the selected card/detail card.
  - Reduced mobile expanded-detail close button to `38px x 38px`.
  - Reduced mobile modal nav buttons to `46px x 46px`.
- Verification:
  - At all tested mobile widths, `.scene10-player__info-layout` reports `flex-direction: row`.
  - The detail modal uses the current `selectedInstrument`; tested modal alt text: `Thông tin Đàn nguyệt`.
  - Arrows/player controls remain outside the modal hit area.

### Scene13FutureQuestion

- Problem: Scene13 still had a mobile column reflow that broke the accepted full-stage slide behavior.
- Fix:
  - Removed the Scene13 mobile artboard/content reflow.
  - Preserved Scene13 mobile video modal sizing rules.
- Verification:
  - Scene13 now scales as a complete artboard on mobile, matching Scenes12/14/15 behavior.

### Scene14FutureContinuation

- Problem: Scene14 had a mobile column reflow instead of preserving the accepted slide stage.
- Fix:
  - Removed the Scene14 mobile artboard/content reflow.
- Verification:
  - Scene14 background and text now scale together as one artboard.

### Scene15FinalClosing

- Problem: Scene15 had a mobile column reflow that could separate the footer overlay and Facebook hotspot from the designed footer composition.
- Fix:
  - Removed the Scene15 mobile artboard/content reflow.
  - Footer overlay and Facebook link now remain in the same scaled coordinate system as desktop.
- Verification:
  - Scene15 footer composition remains complete and centered on mobile.

## Files Changed

- `src/pages/Page01Story/Page01Story.css`
- `src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.jsx`
- `src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.css`
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.css`
- `src/sections/page01/Scene13FutureQuestion/Scene13FutureQuestion.css`
- `src/sections/page01/Scene14FutureContinuation/Scene14FutureContinuation.css`
- `src/sections/page01/Scene15FinalClosing/Scene15FinalClosing.css`
- `.codex-checks/mobile-critical-audit.js`

## Viewport Notes

- Mobile horizontal overflow: none detected at `486x1059`, `430x932`, `390x844`, or `360x800`.
- Bridge image: clears Scene02 on all tested mobile widths.
- Scene06: sticky viewport remains `100svh`; scaled stage remains centered.
- Scene10: info/detail layout remains horizontal; expanded modal close button is `38px`.
- Scenes11-15: later scenes checked after closing Scene10 modal; Scenes13-15 now report scaled artboard dimensions instead of mobile column pages.
- Desktop `1366x768`: desktop composition and interaction logic were preserved.

## Build Result

- `npm run build` completed successfully.
