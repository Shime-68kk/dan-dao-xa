# Slide02 Stable Repair Report

## Files changed

- `src/pages/Page01Story/Page01Story.jsx`
- `src/pages/Page01Story/Page01Story.css`
- `src/sections/page01/Scene01Hero/Scene01Hero.jsx`
- `src/sections/page01/Scene01Hero/Scene01Hero.css`
- `src/sections/page01/Scene02History/Scene02History.jsx`
- `src/sections/page01/Scene02History/Scene02History.css`
- `src/assets/page01/shared/bridge-hands-photo.webp`
- `src/assets/page01/scene02/scene02-main-background.webp`
- `src/assets/page01/scene02/flower-ornament-trimmed.png`
- `src/assets/page01/scene02/scene02-layout-reference.webp`
- `package-lock.json` was refreshed by `npm install` to restore missing Rolldown optional native bindings.

## Asset and layout changes

- Replaced the visible Scene02 background with `src/assets/page01/scene02/scene02-main-background.webp`, generated from `/home/quang/Documents/brief-1/nền chủ đạo.png`.
- `title-history-composite.png` is no longer imported or rendered.
- Scene02 title is now real typed HTML text:
  - `Hai thế kỉ thăng trầm`
  - `và`
  - `ÁNH HÀO QUANG`
  - `QUÁ KHỨ`
- The bridge photo is rendered only once at `Page01Story` level as `.page01-bridge-hands`.
- Scene01 no longer imports/renders `photoHands`; Scene02 no longer imports/renders `.scene02-history__bridge`.
- `hoa văn.png` was alpha-trimmed before rendering:
  - Source: `1878x1056`
  - Trimmed output: `1533x441`
  - Output: `src/assets/page01/scene02/flower-ornament-trimmed.png`
- Final flower coordinates: `left: 760px`, `top: 196px`, `width: 535px`, `z-index: 18`.
- Scene02 remains normal continuous width-scaled flow, not sticky.
- Reveal-on-scroll remains active with `threshold: 0.22` and `rootMargin: "0px 0px -20% 0px"`.
- Mobile keeps the typed title, full-width map, readable body text, and hides the flower below `480px`.

## Reference note

The brief names `/home/quang/Documents/brief-1/thaokhao12.png`, but that file was not present. I used the available `/home/quang/Documents/brief-1/thamkhao12.png` for the debug/reference overlay and noted the filename mismatch.

## Font research

- `find /home/quang/Documents/brief-1 \( -iname "*.ttf" -o -iname "*.otf" -o -iname "*Aurora*" -o -iname "*Bohem*" -o -iname "*DFVN*" -o -iname "*Playfair*" \)` returned no matching local font files.
- `fc-match "VL Aurora"` -> `NotoSans-Regular.ttf: "Noto Sans" "Regular"`
- `fc-match "VL Aurora Ag"` -> `NotoSans-Regular.ttf: "Noto Sans" "Regular"`
- `fc-match "DFVN Bohem"` -> `NotoSans-Regular.ttf: "Noto Sans" "Regular"`
- `fc-match "DFVN Bohemia"` -> `NotoSans-Regular.ttf: "Noto Sans" "Regular"`
- `fc-match "Playfair Display SC"` -> `NotoSans-Regular.ttf: "Noto Sans" "Regular"`
- `fc-match "Courier New"` -> `Courier_New.ttf: "Courier New" "Regular"`
- A bounded-output SVG search with `rg -o` found `12 DFVN` matches in `/home/quang/Documents/brief-1/làng đàn Đào Xá/1.svg`; no usable local font files were found. The title therefore uses real HTML text with the requested fallback stacks and Google font imports.

## Verification

- Initial `npm run build` failed because Rolldown optional native bindings were missing.
- Ran `npm install`; it added the missing optional packages and reported `0 vulnerabilities`.
- Final `npm run build` passed:
  - Vite `v8.0.16`
  - `1589 modules transformed`
  - Build completed successfully in `571ms`
- Ran `npm run dev -- --host 127.0.0.1 --port 5173`; Vite selected `http://127.0.0.1:5174/` because `5173` was in use.
- Normal URL and `?debugSlide2=1` both returned HTTP `200`.
- Headless Chromium first-viewport smoke capture confirmed the app renders and the parent-level bridge appears from page scope.

## Remaining TODOs

- Exact Canva fonts were not available locally, so the typed title is the closest code-rendered version using fallback stacks and Google fonts.
- Full manual scroll inspection in a browser is still recommended for final art-direction approval against the provided reference.
