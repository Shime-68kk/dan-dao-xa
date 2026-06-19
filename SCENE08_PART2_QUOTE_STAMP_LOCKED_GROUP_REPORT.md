# Scene08 Part 2 Quote Stamp Locked Group Report

## Scope
- Patched only:
  - `/home/quang/Documents/brief-1/project/src/sections/page01/Scene08LastLink/Scene08LastLink.jsx`
  - `/home/quang/Documents/brief-1/project/src/sections/page01/Scene08LastLink/Scene08LastLink.css`
- Scene01-Scene07 were not touched.
- Scene08 Part 1, title lockup, `ĐÀO ANH TUẤN`, portrait card image/content, customer text content, and background assets were not changed.

## Staff Quote Group
- Quote is now local to `.scene08__staff-paper-group`.
- The staff paper itself is baked into the existing artisan/staff image layer, so the new wrapper is positioned over the paper region and the quote is positioned in that wrapper's local coordinate system.
- Staff paper group:
  - `left: 0px`
  - `top: 966px`
  - `width: 760px`
  - `height: 315px`
- Final local quote values:
  - `left: 142px`
  - `top: 62px`
  - `width: 590px`
  - `font-size: 15.8px`
  - row gap: `31px` via `grid-template-rows: repeat(5, 31px)`
  - `line-height: 1`
  - `white-space: nowrap` on each line
- Final artboard quote origin:
  - `x: 142px`
  - `y: 1028px`
- Quote line count: `5`
- Quote content was not edited, shortened, rewritten, or removed.

## Workload Stamp
- Stamp is now a single grouped element named `.scene08__workload-stamp`.
- Final stamp values:
  - `left: 575px`
  - `top: 1415px`
  - `width: 250px`
  - `rotation: 11deg clockwise`
  - `font-size: 31px`
  - `line-height: 0.88`
- Text remains:
  - `TRUNG BÌNH`
  - `8-10 TIẾNG / NGÀY`
- The stamp uses a layered white/depth text shadow to read as a stamped emphasis.

## Collision And Viewport QA Notes
- Visible Đào Văn Soạn card starts at approximately `x: 849px`.
- Stamp unrotated horizontal range is `x: 575px` to `825px`; the rotated estimate remains left of the visible portrait card border.
- Lower biography paragraph ends above the stamp zone; lower long paragraph starts at `top: 1492px`, below the stamp zone.
- 1366px desktop: all new groups remain inside the 1366px artboard.
- 1536px desktop: Scene08 uses the existing proportional artboard scale, so relative positions are preserved.
- 390px mobile: Scene08 uses the same scaled-artboard model, so no independent horizontal overflow is introduced by these changes.
- Existing `?debugScene08Ref=1` overlay remains available and maps `thamkhao8-2.png` at Scene08 artboard `top: 887px`.
- Screenshot note: headless Chromium was attempted in this environment, but it exited without producing screenshot/DOM files. QA above is therefore coordinate/structure based plus build verification.

## Build Result
- Ran `npm run build` from `/home/quang/Documents/brief-1/project`.
- Build passed.
