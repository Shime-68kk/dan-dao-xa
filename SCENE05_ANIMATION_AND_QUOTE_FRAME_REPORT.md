# Scene05 Animation And Quote Frame Report

## Files Changed

- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.jsx`
- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.css`

## Icon Alignment Adjustment

- Targeted only card 01:
  - `.scene05-pressure-card:nth-child(1) .scene05-pressure-card__icon`
  - Final adjustment: `transform: translateY(-18px)`
- Desktop QA at `1366x768`:
  - card 01 icon y-position: `792.28125`
  - card 03 icon y-position: `792.0625`
  - card 04 icon y-position: `792.0625`
- Result: card 01 icon now visually aligns with the other pressure-card icons.

## Reveal Animation / Stagger Implementation

- Added `scene05-reveal` classes to existing content groups in JSX.
- Kept existing IntersectionObserver trigger through `.scene05-pressure.is-visible`.
- Animation style:
  - opacity `0 -> 1`
  - translateY `18px -> 0`
  - duration `640ms`
  - staggered via `--scene05-reveal-delay`
- Reveal order:
  - title: `0ms`
  - intro: `140ms`
  - đàn image: `180ms`
  - panel: `260ms`
  - indicator strip: `380ms`
  - cards 01-04: `520ms`, `650ms`, `780ms`, `910ms`
  - comparison: `1040ms`
  - stats: `1180ms`
  - insight: `1320ms`
  - quote: `1460ms`
- Reduced motion remains respected through the existing `prefers-reduced-motion: reduce` block.

## Final Quote Frame Implementation

- `thamkhao5-2.png` was used only as visual reference.
- No `thamkhao5-2.png` production layer was added.
- Rebuilt the quote frame in CSS:
  - centered flex container
  - gold/orange border
  - inset border effect
  - decorative corner pseudo-elements
  - `.scene05-quote__text` wrapper for centered text
- Final quote text alignment:
  - `.scene05-quote { text-align: center; }`
  - `.scene05-quote__text { text-align: center; margin: 0 auto; }`
- Desktop QA at `1366x768`:
  - quote text alignment: `center`
  - quote opacity after reveal: `1`
  - quote font size: `16.4px`

## Text Size Changes

- `.scene05-indicator`: `15.4px`
- `.scene05-section-heading h2`: `34px`
- `.scene05-pressure-card h3`: `15.8px`
- `.scene05-pressure-card p`: `13.4px`
- `.scene05-pressure-card__pills span`: `14.2px`
- `.scene05-section-heading--comparison h2`: `31px`
- `.scene05-comparison__headers`: `15.4px`
- `.scene05-comparison__row p`: `15.8px`
- `.scene05-comparison__row strong`: `15.8px`
- `.scene05-stat__suffix`: `21px`
- `.scene05-stat p`: `12.2px`
- `.scene05-insight p`: `16.4px`
- `.scene05-quote`: `16.4px`

## Production Layer Check

- Confirmed `thamkhao5-2.png` was used only as reference, not as a production layer.
- Confirmed no `scene05-full.png` production layer was reintroduced.
- Confirmed no `thamkhao*.png` production layer was introduced.
- Confirmed no `page1_part_05.png` production reference was added.
- Confirmed no dirty generated cutout production reference was added.

## Screenshot QA

- Primary viewport: `1366x768`
- Top/card screenshot:
  - `/tmp/brief1-scene05-refine/scene05-animation-final-top-1366x768.png`
- Quote screenshot:
  - `/tmp/brief1-scene05-refine/scene05-animation-final-quote-1366x768.png`
- Metrics:
  - `scrollX`: `0`
  - `documentElement.scrollWidth`: `1351`
  - `body.scrollWidth`: `1351`
  - old `.scene05-full-image` node present: `false`
  - reveal elements: `13`
  - visible reveal elements after stagger: `13`
- Result:
  - no horizontal overflow reported
  - no old screenshot layer visible
  - no duplicate text visible in QA screenshot

## Build Result

- `npm run build` passed successfully.
