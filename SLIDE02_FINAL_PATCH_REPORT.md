# Slide 02 Final Patch Report

## 1. Files Changed

- `src/pages/Page01Story.css`
- `src/sections/page01/Scene01Hero/Scene01Hero.jsx`
- `src/sections/page01/Scene01Hero/Scene01Hero.css`
- `src/sections/page01/Scene02History/Scene02History.jsx`
- `src/sections/page01/Scene02History/Scene02History.css`
- `src/hooks/useElementInView.js`
- `src/assets/page01/scene02/slide2-reference.webp`

## 2. Black Gap Cause And Fix

The gap came from two combined issues:

- `Scene01Hero` faded its sticky stage toward opacity `0` while the sticky section still occupied scroll height.
- `Scene02History` was still implemented as a sticky scroll block, so it created its own pre-scroll space before content visually reached the viewport.

Fixes:

- Scene01 exit opacity is now fixed at `1`.
- Scene01 height was reduced from `175vh` to `115vh`.
- Scene02 no longer uses a sticky wrapper or sticky height.
- Page-level margins/padding are reset, with no decorative separator between scenes.

## 3. Scene02 Sticky Removed

Yes. Scene02 was refactored into a normal continuous scroll section:

- The section height is `--scene02-height`, calculated from `768 * coverScale`.
- The `1366 x 768` internal stage is scaled in normal document flow.
- No `position: sticky` remains in Scene02.

## 4. Scene01 Exit Fade

Scene01’s premature exit fade was disabled by setting `--scene-exit-opacity` to `1`.

## 5. Title Asset Inspection

Inspected:

```txt
/home/quang/Documents/brief-1/Slide 2. Hai thế kỉ thăng trầm
```

Files found:

- `hoa văn.png`
- `khuôn nhạc.png`
- `nền.png`

No clean Canva title image layer was found, so no `title-history-composite` asset was used.

## 6. Font Status

Re-ran the local font search for `.ttf`, `.otf`, Aurora, Bohem, and DFVN files. No usable local title font files were found.

Fallbacks remain:

- Script: `"VL Aurora", "SVN-Aurora", "UTM Aurora", "Great Vibes", "Dancing Script", "Brush Script MT", cursive`
- `và`: `"DFVN Bohemia", "DFVN Bohemian", "Bohemia", "Cormorant Garamond", "Times New Roman", serif`
- Main title: `"Playfair Display SC", "Playfair Display", "Times New Roman", serif`

## 7. Flower Asset

`hoa văn.png` is used via:

```txt
src/assets/page01/scene02/flower-ornament.webp
```

The WebP keeps alpha transparency. The old cropped `flower-branch.webp` is not imported or rendered.

## 8. Reveal-On-Scroll

Added `src/hooks/useElementInView.js`.

Scene02 now:

- Starts with `.scene02-reveal` elements hidden.
- Adds `.is-visible` only when Scene02 enters the viewport.
- Reveals bridge, title, flower, body, map, and caption with staggered CSS delays.
- Respects `prefers-reduced-motion`.

## 9. Debug Overlay

Added an off-by-default debug overlay:

```txt
?debugSlide2=1
```

It renders `slide2-reference.webp` only when that query parameter is present. Normal URLs do not show the overlay.

## 10. Mobile Notes

- Scene02 switches to normal vertical layout below `768px`.
- No sticky Scene02 behavior remains on mobile.
- Title layers are stacked/readable, body text remains `13px`, map becomes full width with max width, and the flower hides on very narrow screens.
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

Confirmed both normal and debug URLs respond:

- `http://127.0.0.1:5173/`
- `http://127.0.0.1:5173/?debugSlide2=1`

## 12. Remaining TODOs

- Replace fallback title typography if exact Aurora/DFVN fonts or a clean Canva title layer become available.
- Use the debug overlay for final pixel tuning once the full scroll page includes Scene03 and later scenes.
