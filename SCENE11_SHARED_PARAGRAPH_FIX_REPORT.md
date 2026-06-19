# Scene11 Shared Paragraph Fix Report

## Files changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.jsx`
- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.css`

## Duplicate paragraph removal

Removed the rendered paragraph nodes from:

- Scene11 Part 2 layer
- Scene11 Part 3 layer

The shared performance paragraph is now rendered once as a sibling layer inside `.scene11-stage`, outside the individual Part 2 and Part 3 step layers.

## Shared paragraph position

The shared paragraph uses the same scaled `1366 x 812` Scene11 artboard coordinate model.

Desktop position:

```css
.scene11-shared-performance-copy {
  left: 610px;
  top: 190px;
  width: 455px;
  font-size: 12px;
  line-height: 1.55;
}
```

The wrapper uses:

```css
.scene11-shared-performance-copy-frame {
  left: 50%;
  top: 50%;
  width: 1366px;
  height: 812px;
  transform: translate(-50%, -50%) scale(var(--scene11-scale)) translateY(var(--scene11-shared-copy-y));
  z-index: 40;
}
```

## Visibility range

The paragraph fades in once as Part 2 enters, stays locked through Part 2 and Part 3, then fades out as Part 4 enters.

Implemented logic:

```js
const sharedCopyIn = part2Progress;
const sharedCopyOut = part4Progress;
const sharedPerformanceCopyStyle = {
  opacity: sharedCopyIn * (1 - sharedCopyOut),
  "--scene11-shared-copy-y": `${10 * (1 - sharedCopyIn)}px`,
};
```

During Part 2 -> Part 3, neither opacity nor transform is tied to `part3Progress`, so the paragraph does not blink, shift, duplicate, fade out, or fade back in.

## QA result

Source/build verification confirms:

- Part 2 and Part 3 no longer render their own paragraph nodes.
- The shared paragraph exists once in `.scene11-stage`.
- It is independent from Part 2 and Part 3 layer opacity.
- Part 4 layout and Part 4 paragraph remain unchanged.
- Scene11 fixed-pin controller was not changed.
- YouTube links and cards were not changed.

Manual browser QA should still be checked at:

- `1366 x 768`
- `1536 x 864`
- `1920 x 1200`
- `390 x 844`

## Build result

`npm run build` passed.
