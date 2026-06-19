# Slide05 Hard Alignment Repair Report

## Files changed

- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.jsx`
- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.css`
- `src/sections/page01/Scene05NarrowingPressure/scene05.content.js`
- `src/assets/page01/scene05/scene05-title-cropped.png`

No Scene01, Scene02, Scene03, or Scene04 files were edited.

## Cropped title asset

Generated `scene05-title-cropped.png` from `Slide 5/tiêu đề.png` using ImageMagick alpha trim plus `24px` transparent padding.

- Original title asset: `2903 x 1632`
- Cropped title asset: `2124 x 774`

Pillow was unavailable in this environment, so ImageMagick `convert -alpha on -trim +repage -bordercolor none -border 24x24` was used.

## Final title position

- `.scene05-title-wrap`: `left: 150px`, `top: 92px`, `width: 720px`
- The old full-width `1366 x 768` title rendering was removed.

## Final card coordinates

- Card 1: `left: 165px`, `top: 710px`, `width: 265px`
- Card 2: `left: 438px`, `top: 710px`, `width: 265px`
- Card 3: `left: 710px`, `top: 710px`, `width: 265px`
- Card 4: `left: 970px`, `top: 710px`, `width: 265px`

Card body text now uses `font-size: 8.4px`, `line-height: 1.23`, `max-height: 92px`, and `overflow: hidden` to avoid touching baked icons or orange pills.

## Final table coordinates

- Comparison title: `top: 1036px`
- Headers: `top: 1126px`
- Row tops: `1200px`, `1278px`, `1356px`, `1434px`
- Left cells: `left: 185px`, `width: 305px`
- Center cells: `left: 570px`, `width: 220px`
- Right cells: `left: 835px`, `width: 360px`

## Duplicate overlays removed

- No card number badges are rendered in HTML.
- No card icons are rendered in HTML.
- No orange pill labels/backgrounds are rendered in HTML.
- No large metric numbers/icons are rendered in HTML.
- The extra small đàn image overlay remains removed.

## Debug mode

`?debugSlide5=1` adds:

- `is-debug` class on the Scene05 section,
- a 50px red debug grid,
- red outlines around rendered text boxes,
- small labels from `data-debug-label`.

## Build root search

Ran:

```bash
find /home/quang/Documents/brief-1 -maxdepth 4 -name package.json -print
find /home/quang/Documents/brief-1 -maxdepth 8 -name package.json -print
```

No `package.json` was found.

## Build result

- `npm run build`: failed.
- Reason: `/home/quang/Documents/brief-1/project` has no `package.json`, so npm reports `Missing script: "build"`.

## Remaining TODOs

- Restore or provide the project `package.json`, then rerun `npm run build`.
- Visual QA with `?debugSlide5=1` is still needed for final pixel-level alignment.
