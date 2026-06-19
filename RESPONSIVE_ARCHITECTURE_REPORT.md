# Responsive Architecture Report

## Scope

Patched the shared responsive behavior and Scene05 mobile behavior first. Desktop coordinates were preserved except where existing mobile/tablet breakpoints needed architecture changes.

## Cause of Mobile Clipping

The page used large 1366px absolute stages that were visually transformed down for small screens. Transforms do not change layout dimensions, so unscaled stage boxes and oversized moving tracks could either create horizontal risk or leave mobile users with tiny/clipped absolute-position text.

Scene05 was the clearest issue: the desktop infographic used a 1366 x 2123 absolute stage and hidden/fragile text overlays. On mobile, that is not readable as production content.

## Shared Responsive Wrapper Changes

- Added stricter global `overflow-x: clip` on `html`, `body`, and `#root`.
- Added `?debugMobile=1` support in `src/App.jsx`.
- `debugMobile` toggles HTML attributes and warns in the console if `document.documentElement.scrollWidth > window.innerWidth + 2`.
- Debug mode outlines scene boundaries and shows a fixed overflow indicator.

## Scene05 Mobile Fallback

- Kept the clean scaffold image as a decorative scaled preview.
- Hid fragile desktop absolute overlays under `max-width: 768px`.
- Added a complete readable mobile content flow below the preview:
  - intro paragraph
  - top factor labels
  - 4 pressure cards in one column
  - comparison table converted to stacked comparison rows
  - metric captions
  - insight paragraph
  - final quote
- Mobile preview images render immediately so the preview does not appear blank before IntersectionObserver fires.

## Scene03 Mobile Fallback

- Desktop autoplay music staff remains unchanged.
- At `max-width: 768px`, the oversized moving staff is hidden.
- A readable stacked vertical timeline renders all milestones, including NĂM 2009 without a fake note.
- This prevents the animated staff from creating mobile clipping while keeping content complete.

## Desktop Preservation

Desktop layout behavior was preserved:

- Scene05 desktop absolute infographic/text layer remains active above 768px.
- Scene03 desktop autoplay staff remains active above 768px.
- Scene01, Scene02, and Scene04 desktop layout coordinates were not redesigned.

## Viewport QA

Checked in headless Chromium at `http://localhost:5173/?debugMobile=1&debugSlide5TextBoxes=1`.

| Viewport | scrollWidth | innerWidth | Pass |
| --- | ---: | ---: | --- |
| 360 x 800 | 360 | 360 | yes |
| 390 x 844 | 390 | 390 | yes |
| 430 x 932 | 430 | 430 | yes |
| 768 x 1024 | 768 | 768 | yes |
| 1366 x 768 | 1351 | 1366 | yes |

Additional checks:

- Scene05 mobile fallback visible at 360, 390, 430, and 768.
- Scene05 desktop text layer remains visible at 1366.
- Scene03 mobile stacked timeline visible at 360, 390, 430, and 768.
- Scene03 desktop staff remains visible at 1366.

## Build Result

Blocked by missing package metadata/scripts.

Command required by task:

```bash
find /home/quang/Documents/brief-1 -maxdepth 5 -name package.json -print
```

Result: no `package.json` found.

Attempted:

```bash
npm run build
```

Result: failed with `Missing script: "build"`.

## Remaining Mobile Risks

- Scene01 still uses a cover-scaled hero stage on mobile. It does not fail the scrollWidth QA because it is clipped by its scene container, but future mobile polish may want a purpose-built mobile hero composition.
- Scene04 has an existing mobile layout and passed width QA, but chart tap ergonomics should be checked manually on real devices.
- Without a package root, a production build artifact could not be generated in this workspace.
