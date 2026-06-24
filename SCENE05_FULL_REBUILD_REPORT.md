# Scene05 Full Rebuild Report

## Files Changed

- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.jsx`
- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.css`
- `src/assets/page01/scene05/scene05-wood-bg.png`

## Production Assets Used

From `/home/quang/Documents/brief-1/project/Slide 5`:

- `nền chủ đạo.png`
  - Copied to `src/assets/page01/scene05/scene05-wood-bg.png`.
  - Used as the clean Scene05 wood background.
- `tiêu đề.png`
  - Existing project derivative used as `src/assets/page01/scene05/scene05-title-cropped.png`.
  - Used only as clean title artwork.
- `ảnh đàn tách nền.png`
  - Existing project derivative used as `src/assets/page01/scene05/scene05-dan.png`.
  - Used as the clean decorative instrument asset.

## Assets Rejected

- `src/assets/page01/scene05/scene05-full.png`
  - Rejected as production layer because it is a flattened full-slide screenshot with baked text/cards/table.
- `Slide 5/thamkhao5.png`
- `Slide 5/thamkhao5-1.png`
- `Slide 5/thamkhao5-2.png`
  - Reference only, not rendered.
- `Slide 5/nền infographic.png` / `src/assets/page01/scene05/scene05-infographic-template.png`
  - Not used in the final rebuild because it still contains baked lower-section graphic/text details.

## Implementation Confirmation

- No old full-slide screenshot is visible in Scene05.
- `scene05-full.png` is no longer imported or rendered by `Scene05NarrowingPressure.jsx`.
- Main visible text is rendered as HTML/CSS:
  - Intro paragraph
  - Four indicator cells
  - `4 ÁP LỰC THU HẸP`
  - Four pressure cards
  - Comparison table
  - Statistic callouts
  - Bottom insight and quote sections
- The composition uses one centered `.scene05-stage` wrapper and a CSS-built `.scene05-panel`.

## Screenshot QA Notes

- Desktop screenshot: `/tmp/brief1-scene05-rebuild/scene05-desktop-1366x768.png`
  - No duplicate old screenshot text visible.
  - Top indicators align inside their cells.
  - Cards are readable and centered in the cream panel.
  - No horizontal overflow reported.
- Mobile screenshot: `/tmp/brief1-scene05-rebuild/scene05-mobile-390x844.png`
  - Text remains readable.
  - No title/instrument overlap after mobile adjustment.
  - No horizontal overflow reported.

## Build Result

- `npm run build` passed successfully.
