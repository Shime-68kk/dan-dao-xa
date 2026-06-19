# Slide 02 Patch Report

## 1. Files Changed

- `src/pages/Page01Story/Page01Story.css`
- `src/sections/page01/Scene02History/Scene02History.jsx`
- `src/sections/page01/Scene02History/Scene02History.css`
- `src/assets/page01/scene02/flower-ornament.webp`

## 2. Top Black Gap Fix

- Removed the page-level decorative gradient background that could read as a separator and set `Page01Story` to a continuous `#1b0d07` background.
- Added `margin: 0`, `padding: 0`, `overflow-x: hidden`, and `page01-story > * { margin-top: 0; }`.
- Changed Scene02 from center-anchored scaling to top-anchored scaling:
  - `top: 0`
  - `transform: translateX(-50%) scale(var(--scene02-scale, 1))`
  - `transform-origin: top center`
- Reduced Scene02 from `150vh` to `125vh`.
- Set Scene02 to `margin-top: -48px` so the bridge image and wood background connect more tightly to Scene01.
- Added a wood-toned fallback background on both `.scene02-history` and `.scene02-history__sticky`.

## 3. Flower Asset

`/home/quang/Documents/brief-1/Slide 2. Hai thế kỉ thăng trầm/hoa văn.png` was converted to:

```txt
src/assets/page01/scene02/flower-ornament.webp
```

The WebP preserved alpha transparency. Scene02 now imports and renders this clean ornament.

## 4. Old Cropped Flower

The old cropped `flower-branch.webp` is no longer imported or rendered by `Scene02History.jsx`.

## 5. Font Search Result

Re-ran the requested local font search for `.ttf`, `.otf`, Aurora, Bohem, and DFVN files. No usable local font files were found in the draft folder or the new Slide 2 folder.

Scene02 continues to use the specified fallback stacks for Aurora, DFVN/Bohem, Playfair Display SC, and Courier New.

## 6. Title Positioning Changes

- Rebuilt the Scene02 title as a separate absolute title group:
  - script line: `Hai thế kỉ thăng trầm`
  - decorative separate `và`
  - main title: `ÁNH HÀO QUANG` / `QUÁ KHỨ`
- Moved the script line to `left: 122px; top: 116px`.
- Moved `và` to `left: 134px; top: 238px`.
- Moved the main title block to `left: 218px; top: 238px`.
- `và` is no longer in the same flow as `ÁNH HÀO QUANG`, so it no longer collides with the title.

## 7. Map Positioning Changes

- Moved the map card to `left: 754px; top: 382px`.
- Moved the caption to `left: 770px; top: 710px`.
- Kept the static clickable image map and did not add a live iframe.

## 8. Mobile Changes

- Scene02 keeps `margin-top: -1px` on mobile to avoid a seam without aggressive overlap.
- Updated mobile selectors for the new title group.
- The title group remains separated on mobile, with `và` as its own decorative layer before/left of the main title.
- The map remains full width with a max width, and the flower remains hidden on very narrow screens.

## 9. Build Result

Ran:

```bash
npm run build
```

Result: build passed successfully with Vite `8.0.16`.

Also ran:

```bash
npm run dev -- --host 127.0.0.1
```

The local dev server responded successfully at `http://127.0.0.1:5173/`.

## 10. Remaining TODOs

- Replace fallback fonts with exact local Aurora/DFVN font files if they become available.
- Visually fine-tune Scene02 crop/overlap again if the final scroll length changes when Scene03 is added.
