# Scene07 Width Fit Report

## Files Changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene07WoodResonance/Scene07WoodResonance.jsx`
- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene07WoodResonance/Scene07WoodResonance.css`

Only Scene07 outer scaling/shell behavior was changed.

## Old Width Behavior

- Scene07 used `Math.min(1, window.innerWidth / 1366)`.
- This capped scale at `1`.
- On desktop widths above `1366px`, the rendered artboard stayed `1366px` wide and centered, leaving gutters.

## New Scale Formula

Scene07 now uses:

```js
scale = document.documentElement.clientWidth / 1366;
renderedHeight = 882 * scale;
```

The section receives:

```js
--scene07-scale: scale;
--scene07-rendered-height: `${882 * scale}px`;
```

The shell uses `width: 100%`, and the internal `1366 x 882` artboard scales as one unit from `transform-origin: top left`.

## Measurements

Formula-based measurements:

- Desktop 1366: rendered width `1366px`, rendered height `882px`
- Desktop 1536: rendered width `1536px`, rendered height `991.77px`
- Mobile 390: rendered width `390px`, rendered height `251.82px`

These values satisfy the intended measurement rule:

```txt
Math.abs(scaleShellWidth - document.documentElement.clientWidth) <= 2
```

## Confirmations

- Internal Scene07 coordinates were not changed.
- Customer text was not changed.
- Scene07 animation sequence was not changed.
- Background and column assets were not changed.
- No separate mobile layout was introduced.
- `document.documentElement.clientWidth` is used instead of `window.innerWidth` to avoid scrollbar-induced horizontal overflow.

## Horizontal Overflow

Source QA confirms the shell is `width: 100%`, the section uses `overflow: hidden`, and the artboard is transform-scaled from the document client width. No horizontal expansion beyond the shell was introduced.

## Build / Browser QA Note

No `package.json` was found under `/home/quang/Documents/brief-1` with `find -maxdepth 8`, so npm build/browser QA could not be run from this project snapshot.
