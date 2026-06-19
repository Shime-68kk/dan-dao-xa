# Scene06 Part 1 True Scale Fix Report

## Scope

Patched Scene06 Part 1 only.

Scene01-Scene05 were not changed. Scene06 Part 2 / horizontal Bước 1-Bước 9 was not implemented.

## Files Changed

- `src/sections/page01/Scene06CraftJourneyIntro/Scene06CraftJourneyIntro.jsx`
- `src/sections/page01/Scene06CraftJourneyIntro/Scene06CraftJourneyIntro.css`
- `src/assets/page01/scene06/scene06-title-trimmed.png`

## Title Asset Crop

Original title PNG:
- Source: `/home/quang/Documents/brief-1/project/slide 6-1/Tiêu đề.png`
- Existing app copy: `src/assets/page01/scene06/scene06-title.png`
- Dimensions: `2903 x 1632`
- Alpha bounds before crop: `2903x755+0+285`

Trimmed title PNG:
- New asset: `src/assets/page01/scene06/scene06-title-trimmed.png`
- Dimensions: `2903 x 755`

Scene06 now imports the trimmed title asset, not the original transparent canvas.

## Final Desktop Values

Title:
- `.scene06-intro__title top: 92px`
- `.scene06-intro__title width: min(88vw, 1180px)`
- Rendered at 1366 QA width: `1180px x 307px`

Paragraph:
- `.scene06-intro__copy top: 420px`
- `.scene06-intro__copy width: min(64vw, 860px)`
- `.scene06-intro__copy font-size: 14px`
- `.scene06-intro__copy line-height: 1.7`
- `.scene06-intro__copy transform: translateX(-38%)`

## Final Mobile Values

For `max-width: 768px`:
- `.scene06-intro__title top: 10px`
- `.scene06-intro__title left: 56%`
- `.scene06-intro__title width: 120vw`
- `.scene06-intro__copy top: 252px`
- `.scene06-intro__copy left: 7vw`
- `.scene06-intro__copy width: 86vw`
- `.scene06-intro__copy font-size: clamp(12px, 3.25vw, 13.5px)`

For `max-width: 430px`:
- `.scene06-intro__title top: 8px`
- `.scene06-intro__title left: 56%`
- `.scene06-intro__title width: 120vw`
- `.scene06-intro__copy top: 250px`
- `.scene06-intro__copy font-size: 12.7px`

## Parent Transform Check

No parent container applies a scale, zoom, or transform that shrinks Scene06.

The only transforms used are:
- title reveal transform on the title image itself
- paragraph horizontal placement transform on the paragraph itself
- copy segment reveal transforms

## QA Results

Desktop 1366 x 768:
- Title uses the trimmed image and renders as large visible artwork at `1180px` wide.
- Paragraph is readable, Courier italic, `14px`.
- Full wood background remained active.
- No horizontal overflow: measured `scrollWidth 1351`, `innerWidth 1366`.

Desktop 1536 x 864:
- Full wood background remained active with no black side gutters.
- Title remained centered in the 1366px artboard.
- No horizontal overflow: measured `scrollWidth 1521`, `innerWidth 1536`.

Mobile 390 x 844:
- Title is pushed to the top of the Scene06 section and remains large.
- Paragraph remains readable below the title.
- No horizontal overflow: measured `scrollWidth 390`, `innerWidth 390`.

Screenshots captured:
- `/tmp/scene06-true-scale-final-desktop-1366.png`
- `/tmp/scene06-true-scale-final-desktop-1536.png`
- `/tmp/scene06-true-scale-final-mobile-390.png`

## Build Result

Package root search command:

```bash
find /home/quang/Documents/brief-1 -maxdepth 5 -name package.json -print
```

Result: no `package.json` was found.

Build command run from `/home/quang/Documents/brief-1/project`:

```bash
npm run build
```

Result: failed because npm reported `Missing script: "build"`.
