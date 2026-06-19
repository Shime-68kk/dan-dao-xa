# Scene08 Part 2 Staff Quote Stamp Repair Report

## Scope
- Patched Scene08 Part 2 quote/stamp precision alignment only.
- File changed:
  - `/home/quang/Documents/brief-1/project/src/sections/page01/Scene08LastLink/Scene08LastLink.css`
- Scene01-Scene07 were not touched.
- Scene08 Part 1, main title, artisan name lockup, portrait card asset, customer text content, and background assets were not changed.

## Quote Repair
- Final quote line count: `5`
- Quote content was not edited, shortened, or rewritten.
- Final `.scene08__staff-quote` values:
  - `left: 142px`
  - `top: 1034px`
  - `width: 590px`
  - `font-size: 16px`
  - `line-height: 1`
  - `grid-template-rows: repeat(5, 32px)`
  - `transform: translateY(1px)`
- Each quote line remains its own `<span>`.
- Each quote span uses `white-space: nowrap`.
- Added a specific active-state rule so the final visible quote keeps the `translateY(1px)` baseline correction after reveal animation.
- Confirmation: the quote is locked to five fixed staff rows rather than relying on wrapping.

## Stamp Repair
- Final `.scene08__daily-metric` values:
  - `left: 568px`
  - `top: 1382px`
  - `width: 270px`
  - `font-size: 31px`
  - `line-height: 0.92`
  - `rotation: 9deg clockwise`
- Text remains:
  - `TRUNG BÌNH`
  - `8-10 TIẾNG / NGÀY`
- Stamp remains one grouped element.
- Strengthened white stamped depth with layered text shadow.

## Collision Check
- Visible Đào Văn Soạn card begins at approximately `x: 849px`.
- Stamp unrotated horizontal range is `x: 568px` to `838px`.
- Estimated rotated horizontal extent ends around `x: 841px`, leaving a small gap before the portrait card.
- Lower paragraph starts at `top: 1492px`; estimated rotated stamp bottom remains above it.
- Confirmation: stamp does not touch the portrait card and does not overlap the lower paragraph.

## Debug Overlay
- Existing `?debugScene08Ref=1` overlay remains available.
- Positions were measured against the lower reference coordinate model with `thamkhao8-2.png` mapped at Scene08 artboard `top: 887px`.

## Build Result
- Ran `npm run build` from `/home/quang/Documents/brief-1/project`.
- Build passed.
