# Scene08 Text Size Refinement Report

## Scope

- Scene: `Scene08LastLink`
- Files changed:
  - `src/sections/page01/Scene08LastLink/Scene08LastLink.css`

## Fixed Increase Value

- Applied fixed increase value: `+1.3px`

## Selectors Updated

- `.scene08__title-small`
  - `29.2px` → `30.5px`
- `.scene08__title-large`
  - `44.2px` → `45.5px`
- `.scene08__title-of`
  - `29.6px` → `30.9px`
- `.scene08__title-family`
  - `30px` → `31.3px`
- Shared paragraph selector:
  - `.scene08__intro`
  - `.scene08__bio`
  - `.scene08__return-copy`
  - `.scene08__lower-bio`
  - `.scene08__lower-story`
  - `13px` → `14.3px`
- `.scene08__label--year`
  - `43px` → `44.3px`
- `.scene08__label--place`
  - `27.5px` → `28.8px`
- `.scene08__label--generation`
  - `25.5px` → `26.8px`
- `.scene08__soan-caption`
  - `17.2px` → `18.5px`

## Selectors Intentionally Excluded

- Paper quote text:
  - `.scene08__staff-quote`
  - Kept unchanged at `15.6px`
- Big work-time heading:
  - `.scene08__workload-stamp`
  - Kept unchanged at `31px`

## QA

- Desktop viewport checked: `1366x768`
- Local URL checked: `http://127.0.0.1:5174/dan-dao-xa/`
- Screenshot captured:
  - `/tmp/scene08-text-viewport-1366x768.png`
- Computed QA results:
  - Included text selectors reflect the exact `+1.3px` increase.
  - `.scene08__staff-quote` remains `15.6px`.
  - `.scene08__workload-stamp` remains `31px`.
  - Horizontal overflow: `0`
  - No top-section text overlap observed in the desktop screenshot.

## Build Result

- `npm run build` passed.
