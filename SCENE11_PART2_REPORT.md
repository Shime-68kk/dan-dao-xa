# Scene11 Part 2 Report

## Files Created / Changed
- Changed `src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.jsx`
- Changed `src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.css`
- Added `src/assets/page01/scene11/scene11-trong-com-bg.png`

## Assets Copied / Used
- Part 2 background source: `slide 11-2/trống cơm.png`
- Normalized app asset: `src/assets/page01/scene11/scene11-trong-com-bg.png`
- Visual reference used: `slide 11-2/thamkhao11-2.png`

## Step Architecture Summary
- Extended the existing `SCENE11_STEPS` array with a second item: `part-2`.
- Scene11 now supports two sticky scroll steps inside the same `.scene11` section.
- Desktop total scroll height is based on `SCENE11_STEPS.length`, currently 2 steps.
- Active step is selected from section scroll progress:
  - Step 1 active before roughly mid-section.
  - Step 2 active after roughly mid-section.
- Part 1 remains in the same component and was not rewritten.
- TODO remains for future Part 3 and Part 4 step objects.

## YouTube URL Confirmation
- Clickable thumbnail URL:
  `https://www.youtube.com/watch?v=nXiwlKJSkHY&list=RDnXiwlKJSkHY&start_radio=1`
- Implemented as an `<a>` with:
  - `target="_blank"`
  - `rel="noopener noreferrer"`
  - `aria-label="Mở video Trống cơm trên YouTube"`
- The YouTube card is keyboard focusable and has a focus-visible outline.

## Desktop Coordinate Summary
- Main paragraph: `left: 515px`, `top: 178px`, `width: 470px`
- YouTube card: `left: 185px`, `top: 430px`, `width: 355px`, `height: 195px`
- `TRỐNG CƠM` title: `left: 205px`, `top: 635px`, `font-size: 42.7px`
- YouTube logo block: `left: 205px`, `top: 695px`
- View count note: `left: 205px`, `top: 749px`
- Background: full 1366 x 869 artboard, `object-fit: cover`

## Mobile Behavior Summary
- Mobile does not use the sticky overlay behavior.
- Parts are stacked vertically for readability.
- Part 2 order on mobile:
  1. performer/stage hero crop
  2. paragraph
  3. clickable YouTube card
  4. `TRỐNG CƠM` title
  5. YouTube logo
  6. view count note
- YouTube card remains clickable on mobile.
- CSS constrains content to viewport width to avoid horizontal overflow.

## Text Confirmation
- Main Part 2 paragraph is included exactly as provided.
- Title is `TRỐNG CƠM`.
- View count lines are:
  - `Lượt xem trên Youtube tính đến t6/2026`
  - `Trống cơm: 15.658.099 lượt xem`

## Build Result
- `npm run build` passed.
