# Scene05 Quote Frame Final Effect Report

## Scope

- Scene: `src/sections/page01/Scene05NarrowingPressure`
- Files changed:
  - `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.jsx`
  - `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.css`
  - `src/assets/page01/scene05/scene05-quote-frame.png`

## Frame Asset

- `Slide 5/nền infographic.png` was inspected and used only as the source/reference for the final quote frame area, not as a full-slide production layer.
- The production asset extracted from it is:
  - `src/assets/page01/scene05/scene05-quote-frame.png`
- The extracted frame was cleaned so the faint baked placeholder text is not visible behind the live HTML quote.
- No `scene05-full.png`, `thamkhao*.png`, or `page1_part_05.png` production layer was added.

## Implementation

- The quote frame is rendered by `.scene05-quote::before`.
- `Scene05NarrowingPressure.jsx` imports `scene05-quote-frame.png` and passes it through the CSS custom property `--scene05-quote-frame`.
- The quote text remains live HTML in `.scene05-quote__text`.
- The quote text is centered horizontally and vertically inside the frame:
  - `.scene05-quote` uses flex centering.
  - `.scene05-quote__text` uses `max-width: 78%`, `margin: 0 auto`, and `text-align: center`.

## Reveal Effect

- The final quote reveal was enhanced without changing the existing Scene05 reveal sequence.
- Frame effect:
  - `.scene05-quote::before` fades in, scales from `0.985` to `1`, and applies a subtle drop shadow/glow.
- Text effect:
  - `.scene05-quote__text` uses `scene05QuoteWrite`, a one-time clip-path writing reveal with slight letter-spacing tightening.
- Reduced motion:
  - `@media (prefers-reduced-motion: reduce)` disables the frame/text animation and shows the quote immediately.

## Screenshot QA

- Desktop QA viewport: `1366x768`
- Local URL: `http://127.0.0.1:5174/dan-dao-xa/`
- Screenshot captured:
  - `/tmp/scene05-viewport-1366x768.png`
  - `/tmp/scene05-quote-area-1366x768.png`
- QA result:
  - Quote frame appears from the extracted frame asset.
  - Quote text is centered and readable.
  - No baked old placeholder text is visible behind the live quote.
  - No full-slide screenshot layer was reintroduced.
  - Horizontal overflow check returned `0`.

## Build Result

- `npm run build` passed.
