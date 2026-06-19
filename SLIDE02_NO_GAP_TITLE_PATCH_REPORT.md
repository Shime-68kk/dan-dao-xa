# Slide 02 No-Gap Title Patch Report

## 1. Files Changed

- `src/sections/page01/Scene01Hero/Scene01Hero.css`
- `src/sections/page01/Scene02History/Scene02History.jsx`
- `src/sections/page01/Scene02History/Scene02History.css`
- `src/hooks/useWidthScale.js`
- `src/assets/page01/scene02/scene02-background.webp`
- `src/assets/page01/scene02/title-history-composite.png`

## 2. Scene01 Tail / Gap Fix

Scene01 was changed from a sticky section with scroll tail into a single viewport scene:

- `.scene01` now uses `height: 100svh` and `min-height: 100svh`.
- `.scene01__sticky` is now `position: relative`, not sticky.
- Scene01 margin/padding are zeroed and overflow is hidden.
- Scene01 scale shell/stage are forced visible with opacity `1`.

This removes the extra unpainted scroll space that caused the dark band before Scene02.

## 3. Scene02 Width Scale

Scene02 now uses `useWidthScale(1366)`, not cover scale.

Its document height is calculated as:

```txt
sceneHeight = ceil(768 * widthScale)
```

Scene02 remains normal document flow and does not use sticky positioning.

## 4. Scene02 Background

Scene02 now uses:

```txt
/home/quang/Documents/brief-1/Slide 2. Hai thế kỉ thăng trầm/nền.png
```

Optimized output:

```txt
src/assets/page01/scene02/scene02-background.webp
```

It renders as the first stage layer with `object-fit: cover`.

## 5. Raster Title Composite

The visible Scene02 title now uses an extracted raster composite:

```txt
src/assets/page01/scene02/title-history-composite.png
```

It is rendered at:

```txt
left: 70px;
top: 117px;
width: 670px;
```

Real hidden text remains in the `<h2>` for accessibility.

## 6. Title Generation Method

The title was extracted from `/home/quang/Documents/brief-1/slide2.png` using ImageMagick:

- Cropped from the title area near `x=70`, `y=145`.
- Applied a bright cream/gold alpha mask to remove most of the wood background.
- Saved as PNG to preserve transparency.

Exact Aurora/DFVN fonts remain unavailable locally, so the visible fallback CSS title was removed.

## 7. Old CSS Title Visibility

The old visible CSS title group is no longer rendered. Scene02 now renders only:

- hidden accessible title text
- visible raster `title-history-composite.png`

## 8. Flower Ornament

Scene02 continues to use the clean ornament:

```txt
/home/quang/Documents/brief-1/Slide 2. Hai thế kỉ thăng trầm/hoa văn.png
```

Rendered asset:

```txt
src/assets/page01/scene02/flower-ornament.webp
```

Final locked coordinates:

```txt
left: 760px;
top: 180px;
width: 565px;
```

The old cropped `flower-branch.webp` is not imported or rendered.

## 9. Reveal-On-Scroll

Reveal-on-scroll is preserved:

- Scene02 starts hidden via `.scene02-reveal`.
- `useElementInView` adds `.is-visible` when Scene02 enters the viewport.
- Bridge, title, flower, body, map, and caption reveal with staggered delays.
- Reduced motion disables reveal transitions.

## 10. Mobile Behavior

- Scene02 switches to a readable vertical layout below `768px`.
- The title visual is constrained to `92vw`.
- Body remains readable at `13px`.
- Map is full width with max width `520px`.
- Flower hides below `430px`.
- Horizontal overflow is avoided.

## 11. Build Result

Ran:

```bash
npm run build
```

Result: build passed successfully with Vite `8.0.16`.

Also ran:

```bash
npm run dev -- --host 127.0.0.1
```

Confirmed both URLs respond:

- `http://127.0.0.1:5173/`
- `http://127.0.0.1:5173/?debugSlide2=1`

## 12. Remaining TODOs

- The title extraction is raster-based because exact fonts and a clean title layer were unavailable. If a clean Canva title export becomes available later, replace the extracted PNG with that cleaner source.
- Further pixel tuning can use `?debugSlide2=1`.
