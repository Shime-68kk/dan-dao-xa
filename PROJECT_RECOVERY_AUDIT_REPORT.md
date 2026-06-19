# Project Recovery Audit Report

## Package Root Audit

Project path used for source work:

```txt
/home/quang/Documents/brief-1/project
```

Required package search:

```bash
find /home/quang/Documents/brief-1 -maxdepth 6 -name package.json -print
```

Result: no `package.json` was found.

Build command attempted from `/home/quang/Documents/brief-1/project`:

```bash
npm run build
```

Result: failed. npm reported `Missing script: "build"`.

Conclusion: the uploaded/source project folder is not buildable as a package by itself. It contains `src`, `dist`, `index.html`, and `vite.config.js`, but package metadata is missing.

## Root Cause of Current Mobile Failure

The project mixed several layout strategies:

- desktop Canva-like scenes with 1366px absolute artboards;
- transformed/scaled artboards whose visual size did not always define normal-flow layout height;
- dense Scene05 text rebuilt manually over a scaffold;
- a separate Scene05 mobile content fallback that was not governed by a shared scene contract.

This made mobile fragile. A 1366px desktop artboard cannot simply be scaled down to 360px and remain readable, especially for tables and dense infographic text.

## Shared Responsive Contract Added

Added:

```txt
src/components/layout/ArtboardScene.jsx
src/components/layout/ArtboardScene.css
```

Contract:

- each artboard declares `baseWidth`, `baseHeight`, and `scale`;
- the wrapper sets normal-flow height to `baseHeight * scale`;
- the visual artboard is centered with `transform-origin: top center`;
- the wrapper clips horizontal overflow;
- this prevents scaled artboards from overlapping following content.

Scene05 now uses this wrapper for its 1366 x 2123 artboard. Desktop coordinates were not retuned.

## Mobile Mode Per Scene

| Scene | Desktop Mode | Mobile Mode | Current Status |
|---|---|---|---|
| Scene01 hero | cover-scaled 1366 x 768 hero | custom/covered mobile hero | Passes width QA, but still needs future visual polish |
| Scene02 history | 1366 x 768 artboard | mobile story block | Existing responsive flow retained |
| Scene03 timeline | autoplay horizontal staff | stacked mobile timeline through 768px | Patched to avoid horizontal staff clipping |
| Scene04 chart | 1366 x 768 chart scene | mobile reflow chart/text | Existing responsive flow retained |
| Scene05 pressure | 1366 x 2123 long artboard | scaled clean preview + styled readable mobile content | Patched onto shared artboard wrapper |

## What Changed

- Added shared `ArtboardScene` layout component.
- Migrated Scene05 artboard shell to `ArtboardScene`.
- Preserved Scene05 desktop absolute coordinates.
- Kept Scene05 desktop text overlays hidden under `max-width: 768px`.
- Kept Scene05 mobile readable content path for intro, factors, pressure cards, comparison rows, metrics, insight, and final quote.
- Scene03 keeps desktop autoplay staff, but mobile/tablet up to 768px uses stacked readable timeline.
- Added `?debugMobile=1` global overflow diagnostics in the app from the previous responsive pass.

## Viewport QA Results

Checked in headless Chromium against:

```txt
http://localhost:5173/?debugMobile=1&debugSlide5TextBoxes=1
```

Required rule:

```js
document.documentElement.scrollWidth <= window.innerWidth + 2
```

| Viewport | scrollWidth | innerWidth | Pass | Scene03 Mode | Scene05 Mode |
|---|---:|---:|---|---|---|
| 360 x 800 | 360 | 360 | yes | mobile stacked timeline | mobile readable content |
| 390 x 844 | 390 | 390 | yes | mobile stacked timeline | mobile readable content |
| 430 x 932 | 430 | 430 | yes | mobile stacked timeline | mobile readable content |
| 768 x 1024 | 768 | 768 | yes | mobile stacked timeline | mobile readable content |
| 1366 x 768 | 1351 | 1366 | yes | desktop autoplay staff | desktop artboard overlays |

Additional browser checks:

- no Vite error overlay appeared;
- Scene05 shared artboard exists at every tested viewport;
- Scene05 artboard measured to viewport width on mobile;
- Scene05 desktop text layer remains enabled at desktop;
- Scene05 mobile text layer remains disabled at mobile/tablet;
- Scene03 desktop staff remains enabled at desktop.

## Remaining Risks Before New Slides

- The true npm/Vite package root is still missing. A real production build cannot be validated until `package.json` is restored or the correct package root is provided.
- Scene05 desktop alignment is still not certified as visually final; future repair should proceed group by group only.
- Scene05 mobile is now readable, but it is a mobile-reflow strategy, not an exact Canva visual clone.
- Scene01 passes overflow QA because the hero clips its cover-scaled stage, but it has not been redesigned as a dedicated mobile hero.
- Scene04 chart passed width QA, but touch tooltip ergonomics should still be checked on an actual phone.
