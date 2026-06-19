# Scene11 Pin Duration Fix Report

## Files changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.jsx`
- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.css`

## New Scene11 scroll height

Scene11 now reserves four planned parts:

```css
.scene11 {
  --scene11-step-count: 4;
  height: calc(var(--scene11-step-count) * 105svh);
  min-height: calc(var(--scene11-step-count) * 105svh);
}
```

Effective desktop pin duration: `420svh`.

The sticky viewport remains locked with:

- `.scene11-pin { position: sticky; top: 0; height: 100svh; overflow: hidden; }`
- `.scene11-stage { position: absolute; inset: 0; overflow: hidden; }`
- `.scene11-step { position: absolute; inset: 0; }`

## Four-part reservation

Added:

```js
const SCENE11_TOTAL_STEPS = 4;
```

The section passes `--scene11-step-count: 4` to CSS and calculates normalized scroll progress against the full reserved Scene11 range.

## Current transition behavior

Part 1 and Part 2 layouts were not redesigned or repositioned.

Part 2 now enters earlier and then holds for the remaining reserved range:

```js
const part2Progress = clamp((progress - 0.22) / 0.1, 0, 1);
```

Current behavior:

- Part 1 appears first in the pinned frame.
- Part 1 transitions to Part 2 from about progress `0.22` to `0.32`.
- Part 2 stays fully visible and stable from about progress `0.32` to `1.00`.
- Part 3 and Part 4 are reserved scroll ranges for future content; until implemented, Part 2 remains visible instead of showing blank screens.

The code includes the note:

```js
// Part 3 and Part 4 are reserved scroll ranges; hold Part 2 until their layouts are implemented.
```

## QA result

Source/build verification confirms:

- Scene11 no longer releases after the short two-part `240svh` range.
- Scene11 now reserves the full four-part duration with `420svh`.
- The sticky frame remains one pinned presentation viewport.
- Part 1/Part 2 internal coordinates were not changed.
- No independent `100svh` panel structure was introduced.
- YouTube remains clickable while Part 2 is held because Part 2 pointer events stay enabled after `part2Progress > 0.8`.

Manual browser QA should still be checked at `1366 x 768`, `1536 x 864`, and `1920 x 1200`.

## Build result

`npm run build` passed.
