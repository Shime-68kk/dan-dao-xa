# Scene08 Part 2 Strict Alignment Report

## Scope
- Patched only:
  - `/home/quang/Documents/brief-1/project/src/sections/page01/Scene08LastLink/Scene08LastLink.jsx`
  - `/home/quang/Documents/brief-1/project/src/sections/page01/Scene08LastLink/Scene08LastLink.css`
- Scene01-Scene07 were not touched.
- Scene08 Part 1 title lockup, artist name lockup, background, village sign, upper intro paragraph, and top biography paragraph were not changed.
- Customer quote and paragraph text were not rewritten or shortened.

## Debug Overlay
- Existing `?debugScene08Ref=1` overlay was reused.
- `thamkhao8-2.png` remains overlaid at artboard `top: 887px` with `opacity: 0.35`.
- Headless Chromium screenshot attempts in this environment did not produce screenshot files, so final visual confirmation was limited to coordinate mapping against the reference plus source/build checks.

## Final Coordinates
- Quote text group / staff-paper text:
  - selector: `.scene08__staff-quote`
  - `left: 142px`
  - `top: 1004px`
  - `width: 590px`
  - `font-size: 16px`
  - `line-height: 1.42`
  - lower-section local position: `x: 142px`, `y: 117px`
- Right return paragraph:
  - selector: `.scene08__return-copy`
  - `left: 855px`
  - `top: 1045px`
  - `width: 430px`
  - lower-section local position: `x: 855px`, `y: 158px`
- Lower-left biography paragraph:
  - selector: `.scene08__lower-bio`
  - `left: 140px`
  - `top: 1329px`
  - `width: 620px`
  - lower-section local position: `x: 140px`, `y: 442px`
- Lower-left long paragraph:
  - selector: `.scene08__lower-story`
  - `left: 140px`
  - `top: 1492px`
  - `width: 660px`
  - lower-section local position: `x: 140px`, `y: 605px`
- `TRUNG BÌNH 8-10 TIẾNG / NGÀY`:
  - selector: `.scene08__daily-metric`
  - `left: 610px`
  - `top: 1412px`
  - `font-size: 31px`
  - `transform: rotate(8deg)`
  - lower-section local position: `x: 610px`, `y: 525px`
- Đào Văn Soạn portrait card:
  - selector: `.scene08__soan-card`
  - imported from `/home/quang/Documents/brief-1/project/slide 8/ảnh 3.png`
  - raw image placement: `left: 785px`, `top: 1227px`, `width: 532px`
  - source alpha bounding box: `2045x2375+351+69`
  - approximate visible card placement: `left: 849px`, `top: 1240px`, `width: 375px`
  - approximate lower-section visible position: `x: 849px`, `y: 353px`

## Added Elements
- Added the lower-left biography paragraph.
- Added the lower-left long paragraph.
- Added the tilted average-working-time metric.
- Added the Đào Văn Soạn portrait card asset.

## Build Result
- Ran `npm run build` from `/home/quang/Documents/brief-1/project`.
- Build passed.

## Overflow Notes
- All new absolute x positions and rendered widths remain within the 1366px artboard.
- Scene08 continues to use the existing full-width scale model, so the artboard scales down on 390px mobile rather than introducing independent horizontal layout.
