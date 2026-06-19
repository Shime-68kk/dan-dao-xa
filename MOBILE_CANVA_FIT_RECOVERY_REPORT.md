# Mobile Canva Fit Recovery Report

## Summary

Recovered the mobile architecture so Scenes 01-05 use the same Canva-like visual artboards on mobile, scaled to viewport width. Separate mobile reflow layouts/cards were removed or disabled.

## Scene01

- Confirmed Scene01 no longer imports or uses `useCoverScale`.
- Scene01 now uses `useWidthScale(1366)`.
- Scene01 section height is `768px * scale`.
- Scene01 stage is anchored at top center and scaled by width, not cover-cropped.
- Mobile no longer hides right-side photo elements.

## Removed Mobile Fallbacks / Reflows

- Scene02 mobile story/flex reflow was overridden back to the 1366 x 768 absolute artboard.
- Scene03 mobile stacked timeline markup was removed.
- Scene03 now keeps the same animated staff/timeline scene inside a 1366 x 768 scaled stage.
- Scene04 mobile column reflow was overridden back to the 1366 x 768 absolute chart artboard.
- Scene05 separate `.scene05-mobile-copy` JSX block was removed.
- Scene05 mobile-specific card/comparison/metric fallback CSS was removed.
- Scene05 desktop text overlays remain visible on mobile as part of the scaled artboard.

## Scene05 Mobile Copy

`.scene05-mobile-copy` is no longer rendered in `Scene05NarrowingPressure.jsx`.

Scene05 now renders only the Canva-like 1366 x 2123 artboard, scaled to phone width.

## QA Results

Checked in Chromium against:

```txt
http://localhost:5173/?debugMobile=1&debugSlide5TextBoxes=1
```

### 390 x 844

- `innerWidth`: 390
- `scrollWidth`: 390
- horizontal overflow: `0px`
- pass: yes
- Scene01 measured `390 x 219`
- Scene02 measured `390 x 220`
- Scene03 measured `390 x 219`
- Scene04 measured `390 x 220`
- Scene05 measured `390 x 606`
- Scene05 mobile copy rendered: no
- Scene03 mobile timeline rendered: no
- Scene03 staff track rendered: yes

Screenshot notes:

- `/tmp/mobile390-scene01.png` shows the same scaled Canva-like sequence, not a cropped hero.
- `/tmp/mobile390-scene05.png` shows Scene05 as the same scaled infographic/artboard, not mobile cards.

### 1366 x 768

- `innerWidth`: 1366
- `scrollWidth`: 1351
- horizontal overflow: `-15px`
- pass: yes
- Scene01 measured `1351 x 768`
- Scene02 measured `1351 x 768`
- Scene03 measured `1351 x 768`
- Scene04 measured `1351 x 768`
- Scene05 measured `1351 x 2123`
- Scene05 mobile copy rendered: no
- Scene03 mobile timeline rendered: no
- Scene03 staff track rendered: yes

Screenshot note:

- `/tmp/desktop1366-scene05.png` confirms desktop Scene05 still renders the same artboard path.

## Build Result

Package root search:

```bash
find /home/quang/Documents/brief-1 -maxdepth 6 -name package.json -print
```

Result: no `package.json` found.

Attempted from `/home/quang/Documents/brief-1/project`:

```bash
npm run build
```

Result: failed with `Missing script: "build"`.

Build remains blocked until the real package metadata/root is restored.

## Remaining Notes

- The app now follows the client's visual-preserve mobile request: width-fit scaled Canva artboards, not mobile reflow.
- Text in dense scenes is naturally small on phone because the whole desktop artboard is scaled to 390px. This matches the requested Canva-fit behavior, but it is not the readable-mobile strategy used previously.
