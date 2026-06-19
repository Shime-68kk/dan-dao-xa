# Scene11 Panel Architecture Fix Report

## Files Changed
- `src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.jsx`
- `src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.css`

## Old Sticky-Progress Architecture Removed / Bypassed
- Removed the sticky-progress render structure from Scene11.
- Removed the previous `scene11-sticky`, `scene11-stage`, and `scene11-step-layer` render path.
- Removed active-step scroll progress state.
- Removed `data-active-step` / step-count driven sticky section height logic.
- Scene11 no longer uses one giant `200svh` sticky container to crossfade layers.

## New Structure
Scene11 is now independent full-screen panels:

```jsx
<section className="scene11">
  <section className="scene11-panel scene11-panel--part1">
    <div className="scene11-artboard scene11-artboard--part1 scene11-part1">
      ...Part 1 layers...
    </div>
  </section>

  <section className="scene11-panel scene11-panel--part2">
    <div className="scene11-artboard scene11-artboard--part2 scene11-part2">
      ...Part 2 layers...
    </div>
  </section>
</section>
```

## Panel Contract
- `.scene11-panel` is one stable viewport slide:
  - `position: relative`
  - `height: 100svh`
  - `min-height: 100svh`
  - `width: 100%`
  - `overflow: hidden`
  - `display: grid`
  - `place-items: center`
  - `background: #050202`
- `.scene11-artboard` is fitted inside each panel:
  - `position: relative`
  - `width: 1366px`
  - `height: 812px`
  - `transform: scale(var(--scene11-scale))`
  - `transform-origin: center center`

## Scale Logic
- Scale is viewport-based and no longer tied to scroll progress:
```js
Math.min(window.innerWidth / 1366, window.innerHeight / 812)
```
- This keeps the full 1366 x 812 composition visible inside the panel.

## Reveal Behavior
- A small `IntersectionObserver` now only adds `.is-visible` when each independent panel enters view.
- The observer does not move the panel or artboard.
- Animations are opacity/transform reveal effects inside each static panel.

## Why Part 2 No Longer Drifts
- Part 2 is no longer an active layer inside a sticky-progress container.
- Part 2 is a normal standalone `100svh` panel in document flow.
- Its artboard is a centered grid item, not a scroll-progress-positioned layer.
- There is no Part 2 wrapper with normal-flow pixel height inside a sticky viewport.
- There are no extra black spacer divs.
- Scrolling down brings the whole Part 2 panel into view; stopping scroll leaves it stable.

## User Failure Case QA Notes
- Scrolling from Part 1 to Part 2 now crosses a panel boundary rather than switching a sticky layer.
- Part 2 should remain inspectable when the user stops scrolling because it is its own full-screen section.
- Small additional scrolls move the page toward the next document area, but do not make the Part 2 artboard drift inside itself.
- Scrolling back returns naturally to Part 1 only by moving back to the previous full-screen panel.

## Desktop Viewport QA Notes
- 1366 x 768: panel is fixed at `100svh`; artboard scales to fit the viewport.
- 1536 x 864: panel remains one viewport; artboard scales and remains centered.
- 1920 x 1200: panel remains one viewport; artboard remains centered with no document-flow drift.

## Mobile QA Notes
- Mobile keeps the existing stacked/readable panel behavior.
- `.scene11-panel` switches to `height: auto`, and each part remains a stable section.
- No desktop sticky/progress system runs on mobile.
- Horizontal overflow remains constrained by `.scene11 { overflow-x: clip; }` and mobile width rules.

## Build Result
- `npm run build` passed.

## QA Limitation
- Automated browser screenshot/click QA was not available in this environment. Verification was based on source inspection of the replacement architecture and successful production build.
