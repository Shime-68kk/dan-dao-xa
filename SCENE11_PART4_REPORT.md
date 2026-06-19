# Scene11 Part 4 Report

## Files changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.jsx`
- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.css`
- `/home/quang/Documents/brief-1/project/src/assets/page01/scene11/scene11-bac-bling-bg.png`
- `/home/quang/Documents/brief-1/project/src/assets/page01/scene11/scene11-bac-bling-thumb.png`

## Assets used/copied

Copied:

```txt
/home/quang/Documents/brief-1/project/slide 11-4/bắc bling.png
```

to:

```txt
/home/quang/Documents/brief-1/project/src/assets/page01/scene11/scene11-bac-bling-bg.png
```

Copied:

```txt
/home/quang/Documents/brief-1/project/slide 11-4/minzy.png
```

to:

```txt
/home/quang/Documents/brief-1/project/src/assets/page01/scene11/scene11-bac-bling-thumb.png
```

Reference inspected:

```txt
/home/quang/Documents/brief-1/project/slide 11-4/thamkhao11-4.png
```

## Final fixed-pin layer

Part 4 is now the fourth and final absolute layer inside the existing fixed-pin Scene11 frame.

Scene11 still uses:

- fixed-pin controller;
- no `position: sticky`;
- no normal `100svh` panels;
- four absolute step layers inside `.scene11-stage`;
- the existing `1366 x 812` centered/scaled artboard contract.

## Progress windows

Scene11 still uses `SCENE11_TOTAL_STEPS = 4` and `SCENE11_SCROLL_VH = 420`.

Final progress windows:

- Part 1 visible: `0.00 - 0.20`
- Part 1 -> Part 2 transition: `0.20 - 0.30`
- Part 2 hold: `0.30 - 0.43`
- Part 2 -> Part 3 transition: `0.43 - 0.53`
- Part 3 hold: `0.53 - 0.66`
- Part 3 -> Part 4 transition: `0.66 - 0.78`
- Part 4 hold: `0.78 - 1.00`

Implemented formulas:

```js
const part2Progress = clamp((sceneProgress - 0.2) / 0.1);
const part3Progress = clamp((sceneProgress - 0.43) / 0.1);
const part4Progress = clamp((sceneProgress - 0.66) / 0.12);
```

Layer opacity:

```js
part1Opacity = 1 - part2Progress;
part2Opacity = part2Progress * (1 - part3Progress);
part3Opacity = part3Progress * (1 - part4Progress);
part4Opacity = part4Progress;
```

Pointer events:

- Part 1: `part2Progress < 0.2`
- Part 2: `part2Progress > 0.8 && part3Progress < 0.2`
- Part 3: `part3Progress > 0.8 && part4Progress < 0.2`
- Part 4: `part4Progress > 0.8`

## Release behavior

Part 4 is held through the final Scene11 range. Scene11 releases only when the section reaches the fixed-pin controller's normal release condition:

```js
rect.bottom <= viewportH
```

After that, `.scene11-pin--after` anchors the frame to the bottom of the Scene11 spacer so the next section can scroll in naturally.

## Part 4 content

Title:

```txt
BẮC BLING
```

View note:

```txt
Lượt xem trên Youtube tính đến t6/2026
Bắc Bling: 314.038.552 lượt xem
```

YouTube URL:

```txt
https://www.youtube.com/watch?v=CL13X-8o4h0&list=RDCL13X-8o4h0&start_radio=1
```

The Part 4 thumbnail is a real clickable `<a>` using `target="_blank"` and `rel="noopener noreferrer"`.

## Desktop QA

Source/build verification confirms:

- Part 4 is the final absolute layer inside `.scene11-stage`.
- Part 4 does not create document height.
- Part 3 fades/slides out while Part 4 fades/slides in.
- Part 4 stays stable until the Scene11 section ends.
- Part 2, Part 3, and Part 4 YouTube links are separate and unchanged.
- No sticky CSS was reintroduced.

Manual browser visual QA should still be checked at:

- `1366 x 768`
- `1536 x 864`
- `1920 x 1200`

## Mobile QA

Source verification confirms mobile keeps the existing stacked/readable fallback under `767px`, with Part 4 mobile styles added and no fixed pin forced onto mobile.

Manual mobile QA should still be checked at:

- `390 x 844`

## Build result

`npm run build` passed.
