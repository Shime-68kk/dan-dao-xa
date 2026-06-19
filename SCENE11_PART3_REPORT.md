# Scene11 Part 3 Report

## Files changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.jsx`
- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.css`
- `/home/quang/Documents/brief-1/project/src/assets/page01/scene11/scene11-mua-tren-pho-hue-bg.png`

## Assets used/copied

Copied:

```txt
/home/quang/Documents/brief-1/project/slide 11-3/MTPH.png
```

to:

```txt
/home/quang/Documents/brief-1/project/src/assets/page01/scene11/scene11-mua-tren-pho-hue-bg.png
```

The source image is `2903 x 1632`, used as the Part 3 full-artboard background.

Reference inspected:

```txt
/home/quang/Documents/brief-1/project/slide 11-3/thamkhao11-3.png
```

## Fixed-pin architecture

Scene11 keeps the existing fixed-pin controller. Part 3 was added as another absolute layer inside the same locked Scene11 viewport:

- no `position: sticky`;
- no normal `100svh` panel;
- no Part 3 document-flow height;
- Part 3 uses the same `1366 x 812` centered/scaled artboard model as Parts 1 and 2.

## Progress ranges

Scene11 still reserves 4 planned parts with `SCENE11_TOTAL_STEPS = 4` and `420svh`.

Current progress model:

- Part 1 visible: `0.00 - 0.22`
- Part 1 -> Part 2 transition: `0.22 - 0.32`
- Part 2 hold: `0.32 - 0.48`
- Part 2 -> Part 3 transition: `0.48 - 0.60`
- Part 3 hold / reserved Part 4 range: `0.60 - 1.00`

Implemented formulas:

```js
const part2Progress = clamp((sceneProgress - 0.22) / 0.1);
const part3Progress = clamp((sceneProgress - 0.48) / 0.12);
```

Layer opacity:

- Part 1: `1 - part2Progress`
- Part 2: `part2Progress * (1 - part3Progress)`
- Part 3: `part3Progress`

Pointer events:

- Part 1 active before Part 2 enters.
- Part 2 active when `part2Progress > 0.8 && part3Progress < 0.2`.
- Part 3 active when `part3Progress > 0.8`.

## Part 3 content

Title:

```txt
MƯA TRÊN
PHỐ HUẾ
```

View note:

```txt
Lượt xem trên Youtube tính đến t6/2026
Mưa trên phố huế: 2.948.373 lượt xem
```

YouTube URL:

```txt
https://www.youtube.com/watch?v=48XgscozT-A&list=RD48XgscozT-A&start_radio=1
```

The Part 3 YouTube card is a real clickable `<a>` with `target="_blank"` and `rel="noopener noreferrer"`.

## Desktop QA

Source/build verification confirms:

- Part 3 is an absolute layer inside `.scene11-stage`.
- Part 3 does not create normal document height.
- Part 2 fades/slides out while Part 3 fades/slides in.
- Part 3 remains held after `part3Progress === 1` through the reserved Part 4 range.
- Part 2 YouTube card and Part 3 YouTube card use separate URLs.
- Fixed-pin controller remains unchanged.

Manual browser visual QA should still be checked at:

- `1366 x 768`
- `1536 x 864`
- `1920 x 1200`

## Mobile QA

Source verification confirms mobile keeps the existing stacked/readable Scene11 fallback under `767px`, with added Part 3 mobile styles and no desktop fixed pin forced onto mobile.

Manual mobile QA should still be checked at:

- `390 x 844`

## Build result

`npm run build` passed.
