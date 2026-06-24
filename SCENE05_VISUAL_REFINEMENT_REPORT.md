# Scene05 Visual Refinement Report

## Files Changed

- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.css`

## Desktop QA Viewport

- Primary QA viewport used: `1366x768`
- Desktop screenshot captured:
  - `/tmp/brief1-scene05-refine/scene05-desktop-1366x768-final.png`
- Browser plugin availability: not available in this session.
- Fallback used: local Vite server plus Chromium DevTools Protocol.

## Composition Scale / Width

- `.scene05-stage`
  - Final padding: `48px clamp(4px, 0.6vw, 10px) 72px`
  - Rendered at `1366x768`: `48px 8.196px 72px`
- `.scene05-panel`
  - Final `max-width`: `min(1460px, calc(100vw - 8px))`
  - Computed max width at `1366px`: `1358px`
  - Rendered width at `1366x768`: `1334.625px`
- Composition transform scale:
  - Not used. The enlargement was done through desktop width, reduced side padding, larger title/text, and wider internal content blocks.

## Desktop Readability Changes

- `.scene05-hero__title`: `min(900px, 76vw)`
- `.scene05-hero__intro`: `15.6px`
- `.scene05-indicators`: `max-width: 890px`
- `.scene05-indicator`: `14.8px`
- `.scene05-section-heading h2`: `33px`
- `.scene05-pressure-card h3`: `15px`
- `.scene05-pressure-card p`: `12.8px`
- `.scene05-pressure-card__pills span`: `13.6px`
- `.scene05-section-heading--comparison h2`: `30px`
- `.scene05-comparison__headers`: `max-width: 1020px; font-size: 14.8px`
- `.scene05-comparison__table`: `max-width: 1020px`
- `.scene05-comparison__row p`: `15.2px`
- `.scene05-comparison__row strong`: `15.2px`
- `.scene05-stats`: `max-width: 980px`
- `.scene05-stat p`: `11.6px`
- `.scene05-insight`: `max-width: 940px`
- `.scene05-insight p`: `15.8px`
- `.scene05-quote`: `max-width: 860px; font-size: 15.8px`

## Instrument Asset / Sharpness

- Final đàn asset path:
  - `src/assets/page01/scene05/scene05-dan.png`
- Intrinsic dimensions:
  - `264 x 195`
- Higher-resolution clean transparent asset found:
  - No. Recursive inspection of `/home/quang/Documents/brief-1/project/Slide 5` found only `ảnh đàn tách nền.png` at `264 x 195`.
- Sharpness limitation:
  - The đàn sharpness is limited by the source resolution. CSS cannot truly restore detail from a `264 x 195` image rendered around `642px` wide.
- Dirty crop handling:
  - Did not use `page1_part_05.png` as a production layer.
  - Did not use or recreate `scene05-dan-sharp.png`.
  - Did not use a crop with wood/black rectangular patches.
- Subtle CSS tuning kept:
  - `contrast(1.06) saturate(1.04)`

## Final Instrument Placement

- `.scene05-hero__dan`
  - `width: clamp(620px, 47vw, 650px)`
  - `right: clamp(-110px, -6vw, -72px)`
  - `top: clamp(24px, 3vw, 46px)`
  - `filter: contrast(1.06) saturate(1.04) drop-shadow(0 8px 7px rgba(0, 0, 0, 0.34))`
  - `pointer-events: none`
- Rendered at `1366x768` viewport:
  - width: `642.016px`
  - right: `-81.96px`
  - top: `40.98px`

## Production Layer Check

- Confirmed no `scene05-dan-sharp.png` production reference remains.
- Confirmed no `scene05-dan-hq.png` production reference was added because no higher-resolution clean transparent source exists.
- Confirmed no `page1_part_05.png` production reference was added.
- Confirmed no `scene05-full.png` production layer was reintroduced.
- Confirmed no `thamkhao*.png` production layer was introduced.
- Confirmed no old full-slide screenshot text layer was reintroduced.

## Desktop QA Result

- `1366x768` metrics:
  - `scrollX`: `0`
  - `documentElement.scrollWidth`: `1351`
  - `body.scrollWidth`: `1351`
  - old `.scene05-full-image` node present: `false`
  - current đàn source: `src/assets/page01/scene05/scene05-dan.png`
- Visual QA result:
  - Scene05 is visibly larger at desktop/laptop landscape size.
  - Left/right margins are much smaller.
  - Whole composition remains centered.
  - No horizontal overflow was reported.
  - Đàn is not using a dirty crop.
  - No duplicate old screenshot text is visible.

## Build Result

- `npm run build` passed successfully.
