# Scene08 Quote And Stamp Final Tune Report

## Scope
- Patched only Scene08 Part 2 quote alignment and workload stamp rotation/position.
- Files changed:
  - `/home/quang/Documents/brief-1/project/src/sections/page01/Scene08LastLink/Scene08LastLink.jsx`
  - `/home/quang/Documents/brief-1/project/src/sections/page01/Scene08LastLink/Scene08LastLink.css`
- Did not touch Scene08 Part 1, artisan/person image, village sign, Đào Anh Tuấn lockup, paragraph text blocks, Đào Văn Soạn portrait card, paper asset, or other scenes.

## Quote Final Values
- Quote remains exactly 5 fixed lines.
- Quote text was not edited.
- Final staff line guide values:
  - `[48, 75, 102, 129, 156]`
- Final quote line top values:
  - `[36, 63, 90, 117, 144]`
- Final `.scene08__staff-quote` values:
  - `left: 150px`
  - `top: 0px`
  - `width: 590px`
  - `height: 210px`
  - `font-size: 15.6px`
  - `line-height: 1`
- Confirmation: all 5 quote lines are positioned to sit on the staff guide lines, with the last two lines moved upward and tightened away from the torn-paper lower edge.

## Workload Stamp Final Values
- Final `.scene08__workload-stamp` values:
  - `left: 545px`
  - `top: 1404px`
  - `width: 250px`
  - `transform: rotate(-8deg)`
  - `font-size: 31px`
  - `line-height: 0.88`
- Confirmation: the stamp now slants upward from left to right and remains left of the portrait card.

## Build Result
- Ran `npm run build` from `/home/quang/Documents/brief-1/project`.
- Build passed.
