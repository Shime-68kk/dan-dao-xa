# Scene11 Pinned Transition Fix Report

## Files changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.jsx`
- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.css`

## Architecture fix

Scene11 was restored to a pinned scrollytelling frame instead of independent normal-flow panels.

The section now uses:

- `.scene11`: scroll container with `height: 240svh`
- `.scene11-pin`: sticky viewport with `position: sticky`, `top: 0`, `height: 100svh`, `overflow: hidden`
- `.scene11-stage`: absolute stage filling the pinned viewport
- `.scene11-step`: absolute layers for Part 1 and Part 2 inside the same locked frame
- `.scene11-artboard`: fixed `1366 x 812` design artboard centered and uniformly scaled into the viewport

This means Part 1 and Part 2 no longer create separate page-height panels on desktop. The browser scroll drives a transition inside one pinned presentation frame.

## Scroll progress logic

Progress is calculated from the Scene11 scroll container:

```js
const maxScroll = scene11Ref.current.offsetHeight - window.innerHeight;
const progress = clamp(-rect.top / maxScroll, 0, 1);
const part2Progress = clamp((progress - 0.42) / 0.22, 0, 1);
```

Effective ranges:

- `0.00 - 0.40`: Part 1 remains fully visible.
- `0.42 - 0.64`: Part 1 fades/slides subtly out while Part 2 fades/slides into the same pinned frame.
- `0.64 - 1.00`: Part 2 is fully visible and stable.

Part 1 uses `opacity: 1 - part2Progress`, `translateY(-18px)`, and a small scale-down.

Part 2 uses `opacity: part2Progress`, starts at `translateY(28px) scale(1.015)`, and settles to `translateY(0) scale(1)`.

## Interaction handling

- Part 1 chart remains interactive only while Part 1 is active.
- Part 2 pointer events are enabled only when `part2Progress > 0.8`, so the YouTube card is clickable after the transition completes.
- Motion uses opacity and transform only.
- `prefers-reduced-motion` disables transition motion and dash animations.

## Drift / black-gap prevention

Part 2 is no longer a tall normal-flow block. It is an absolute layer inside `.scene11-stage`, and its artboard is centered in the sticky viewport. This prevents scrolling into the middle/lower part of Part 2 and prevents the black empty region that appeared when the artboard behaved like page content.

## Mobile behavior

For mobile under `767px`, Scene11 keeps a readable stacked layout instead of forcing desktop pinning. The mobile CSS keeps overflow hidden and avoids horizontal page overflow.

## QA notes

Source inspection confirms:

- desktop Scene11 uses one sticky pinned viewport;
- Part 1 and Part 2 are absolute layers, not stacked panels;
- section scroll height is `240svh`;
- artboard size is `1366 x 812`;
- Part 2 YouTube pointer events are gated until the second step is active.

Browser screenshot automation was not available in this environment, so visual QA should still be checked manually at `1366 x 768`, `1536 x 864`, and `1920 x 1200`.

## Build result

`npm run build` passed.
