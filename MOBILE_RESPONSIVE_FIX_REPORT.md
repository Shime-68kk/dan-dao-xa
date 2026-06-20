# Mobile Responsive Fix Report

## Files Changed

- `src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.jsx`
- `src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.css`
- `src/pages/Page01Story/Page01Story.css`

## Responsive Architecture Audit

- Inspected `src/sections/page01/` for scenes using fixed `1366px` artboards, scale variables, absolute positioning, sticky/pinned sections, and scroll-driven animation.
- Scenes with fixed/scaled artboards include Scene01, Scene02, Scene03, Scene04, Scene06 intro, Scene06 steps, Scene07, Scene08, Scene09, Scene10, Scene11, Scene12, Scene13, Scene14, and Scene15.
- Existing mobile rules were present for the major fixed-artboard scenes. The blocking issue was Scene06CraftSteps, whose manual wheel/touch handler did not create a true scroll-pinned section.

## Scene06 Pinning Approach

- Replaced the manual wheel/touch trapping logic with native scroll progress.
- `.scene06-steps` now has a scrollable height of `calc(var(--scene06-steps-count, 4) * 100svh)`.
- `.scene06-steps__sticky` is now `position: sticky; top: 0; height: 100svh; overflow: hidden;`.
- `.scene06-steps__viewport` uses `display: grid; place-items: center;` so the visual stage stays centered inside the pinned viewport.
- Changed `.page01-story` from `overflow-x: hidden` to `overflow-x: clip`; this preserves horizontal overflow protection without creating an overflow container that breaks descendant sticky positioning in Chromium.

## Scroll Progress Mapping

- Scene06 uses `GROUP_COUNT = 4`.
- Scrollable distance is calculated as `sceneRect.height - window.innerHeight`.
- Progress is clamped from `0` to `1`.
- Active group is calculated with:

```js
Math.min(GROUP_COUNT - 1, Math.floor(progress * GROUP_COUNT))
```

- Resulting states:
  - group `0`: steps 1-2-3
  - group `1`: steps 4-5-6
  - group `2`: steps 7-8
  - group `3`: final quote/state

## Mobile Viewport QA Results

- `360x800`: `scrollWidth = 360`, overflow `0`; Scene06 height `3200`, sticky stayed `0..800`, active states `0, 1, 2, 3`.
- `390x844`: `scrollWidth = 390`, overflow `0`; Scene06 height `3376`, sticky stayed `0..844`, active states `0, 1, 2, 3`.
- `430x932`: `scrollWidth = 430`, overflow `0`; Scene06 height `3728`, sticky stayed `0..932`, active states `0, 1, 2, 3`.
- `768x1024`: `scrollWidth = 753`, no positive horizontal overflow; Scene06 height `4096`, sticky stayed `0..1024`, active states `0, 1, 2, 3`.
- `1366x768`: `scrollWidth = 1351`, no positive horizontal overflow; Scene06 height `3072`, sticky stayed `0..768`, active states `0, 1, 2, 3`.

## Build Result

- `npm run build` completed successfully.

## Remaining Risk

- Scene06 now behaves as the requested pinned scroll scene and releases after the final state.
- Other scenes were audited for fixed artboards and responsive rules, but only the sticky-breaking page overflow rule was changed outside Scene06 to avoid redesigning accepted desktop layouts.
