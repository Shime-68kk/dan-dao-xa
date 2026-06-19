# Slide 02 History Report

## 1. Files Created / Changed

- Created `src/sections/page01/Scene02History/Scene02History.jsx`
- Created `src/sections/page01/Scene02History/Scene02History.css`
- Created `src/sections/page01/Scene02History/scene02.motion.js`
- Updated `src/pages/Page01Story/Page01Story.jsx`
- Updated `src/pages/Page01Story/Page01Story.css`
- Added `src/assets/page01/scene02/bridge-hands-photo.webp`
- Added `src/assets/page01/scene02/dao-xa-map.webp`
- Added `src/assets/page01/scene02/flower-branch.webp`

## 2. Assets Copied / Cropped / Optimized

- `bridge-hands-photo.webp` was converted from `/home/quang/Documents/brief-1/Slide mở đầu/20+.png`.
- `dao-xa-map.webp` was cropped from `/home/quang/Documents/brief-1/slide2.png` and used as a static map image.
- `flower-branch.webp` was cropped from `/home/quang/Documents/brief-1/slide2.png`.
- Scene02 reuses `src/assets/page01/scene01/background-wood-smoke.webp` so the wood atmosphere continues from Scene01.

The giant SVG was not embedded.

## 3. Font Decisions

- Searched the SVG reference for title/font hints as requested.
- Searched the draft folder for local `.ttf`, `.otf`, Aurora, and Bohem font files.
- No usable local Aurora or DFVN/Bohem font files were found.
- Scene02 uses the requested fallback stacks:
  - Script title: `"VL Aurora", "SVN-Aurora", "UTM Aurora", "Great Vibes", "Dancing Script", "Brush Script MT", cursive`
  - `và`: `"DFVN Bohemia", "DFVN Bohemian", "Bohemia", "Cormorant Garamond", "Times New Roman", serif`
  - Main title: `"Playfair Display SC", "Playfair Display", "Times New Roman", serif`
  - Body/caption: `Courier New`

## 4. Map Implementation

The map is a clickable static image card, not a live Google Maps iframe.

Click target:

```txt
https://www.google.com/maps?q=place_id:ChIJnTwChuLLNTER6ouj4kBiy7g
```

## 5. Flower Implementation

No separate flower asset was found in the draft folder. The flower branch was cropped from `slide2.png` and blended over the shared wood background.

## 6. Desktop Layout Notes

- Scene02 uses the same `1366 x 768` fixed design stage pattern as Scene01.
- The stage uses `useCoverScale(1366, 768)` to fill the viewport without empty borders.
- The bridge photo overlaps from the top of Scene02 to visually connect the end of Scene01 into the history scene.
- Title, paragraph, map, caption, and flower are positioned according to the supplied coordinate map.

## 7. Mobile Layout Notes

- Below `768px`, Scene02 switches to a normal vertical layout for readability.
- The bridge photo appears at the top, title text scales with `clamp()`, paragraph remains readable, and the map card is full-width with a max width.
- The flower scales down and is hidden on very narrow screens to avoid crowding.

## 8. Animation Notes

- Scene02 uses light `Reveal` entrances with staggered delays from `scene02.motion.js`.
- Background, bridge photo, flower, and map have subtle scroll-driven transform drift.
- Animations use `opacity` and `transform` only.
- `prefers-reduced-motion` disables motion-heavy transforms.

## 9. Build Result

Ran:

```bash
npm run build
```

Result: build passed successfully with Vite `8.0.16`.

Dev server was also started for local testing:

```bash
npm run dev -- --host 127.0.0.1
```

## 10. Remaining TODOs

- Replace fallback fonts with exact local font files if the editorial/design team provides them later.
- Fine-tune the flower crop if a clean transparent source asset becomes available.
- Future scenes can continue below Scene02; no future scenes were implemented in this patch.
