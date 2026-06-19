# Scene05 Table/Card Layout Repair Report

## Files Changed

- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.jsx`
- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.css`

## Absolute Text Overlays Removed

Removed/replaced the fragile overlay structures:

- `.scene05-top-labels` / `.scene05-top-label--*`
- `.scene05-card-copy-layer` plus card-internal absolute `h4` and `p`
- `.scene05-table-arrow-head`
- `.scene05-table-body-copy`
- `.scene05-table-row--*`
- `.scene05-metric-copy`
- `.scene05-metric-caption--*`

The only remaining absolute positioning is at the bounded group/container level inside the 1366px artboard.

## Converted To Grid/Flex

- Top factor strip: `.scene05-top-strip` is a 4-column grid; each `.scene05-top-cell` centers text inside its cell.
- Pressure cards: `.scene05-card-grid` is a 4-column grid; each card uses internal CSS grid rows and no absolute text placement.
- Comparison table: `.scene05-comparison-grid` is a real 3-column x 5-row CSS grid.
- Metric row: `.scene05-metric-grid` is a 3-column grid with captions contained in their blocks.

## Desktop QA

Checked at `1366 x 768` with `?debugSlide5TextBoxes=1`.

- Old fragile selectors present: no
- Top strip, card grid, comparison grid, metric grid all render as bounded groups.
- Comparison table text is centered inside grid cells.
- Metric row sits below table and above insight box.
- No horizontal overflow: pass (`scrollWidth 1351`, `innerWidth 1366`).
- No Vite error overlay.

Screenshots captured:

- `/tmp/scene05-grid-desktop1366.png`
- `/tmp/scene05-grid-table-desktop-visible.png`

## Mobile 390px QA

Checked at `390 x 844` with `?debugSlide5TextBoxes=1&debugMobile=1`.

- `scrollWidth`: 390
- `innerWidth`: 390
- horizontal overflow: `0px`
- Old fragile selectors present: no
- Scene05 remains the same scaled Canva-like artboard.
- Table/card text remains bounded inside group boxes after scaling.

Screenshot captured:

- `/tmp/scene05-grid-mobile390.png`

## Build Result

Package root search:

```bash
find /home/quang/Documents/brief-1 -maxdepth 5 -name package.json -print
```

Result: no `package.json` found.

Attempted from `/home/quang/Documents/brief-1/project`:

```bash
npm run build
```

Result: failed with `Missing script: "build"`.

Build remains blocked until the real package root/package metadata is restored.
