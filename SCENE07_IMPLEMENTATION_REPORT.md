# Scene07 Implementation Report

## Files Created / Changed

- Created `/home/quang/Documents/brief-1/project/src/sections/page01/Scene07WoodResonance/Scene07WoodResonance.jsx`
- Created `/home/quang/Documents/brief-1/project/src/sections/page01/Scene07WoodResonance/Scene07WoodResonance.css`
- Changed `/home/quang/Documents/brief-1/project/src/pages/Page01Story/Page01Story.jsx`
- Added `/home/quang/Documents/brief-1/project/src/assets/page01/scene07/scene07-bg.png`
- Added `/home/quang/Documents/brief-1/project/src/assets/page01/scene07/scene07-element-wood.png`
- Added `/home/quang/Documents/brief-1/project/src/assets/page01/scene07/scene07-element-clock.png`
- Added `/home/quang/Documents/brief-1/project/src/assets/page01/scene07/scene07-element-tune.png`

## Asset Paths Copied / Imported

- Background copied from `slide 7/nền 4.png` to `src/assets/page01/scene07/scene07-bg.png`
- Column 1 asset copied from `slide 7/elment 1.png` to `src/assets/page01/scene07/scene07-element-wood.png`
- Column 2 asset copied from `slide 7/element 2.png` to `src/assets/page01/scene07/scene07-element-clock.png`
- Column 3 asset copied from `slide 7/element 3.png` to `src/assets/page01/scene07/scene07-element-tune.png`

## Stage Size

- Background source size: `2903 x 1874`
- Computed artboard width: `1366`
- Computed artboard height: `round(1366 * 1874 / 2903) = 882`
- Final Scene07 stage: `1366 x 882`
- Mobile uses the same artboard scaled by viewport width; no separate mobile layout was added.

## Final Coordinates

Top paragraph:

- `x=330`, `y=128`, `width=720`

Column 1:

- Decorative asset: `x=145`, `y=260`, `width=342`
- Title: `x=258`, `y=280`, `width=230`
- Body: `x=225`, `y=372`, `width=292`

Column 2:

- Decorative asset: `x=505`, `y=260`, `width=340`
- Title: `x=623`, `y=298`, `width=230`
- Small line: `x=586`, `y=380`, `width=230`
- Number 1: `x=585`, `y=413`
- Label 1: `x=714`, `y=460`, `width=160`
- Number 2: `x=590`, `y=514`
- Label 2: `x=714`, `y=556`, `width=170`

Column 3:

- Decorative asset: `x=856`, `y=260`, `width=340`
- Title: `x=966`, `y=284`, `width=260`
- Small line 1: `x=946`, `y=383`, `width=260`
- Number: `x=1028`, `y=430`
- Small line 2: `x=948`, `y=468`, `width=270`

Bottom panel:

- Panel: `x=236`, `y=650`, `width=840`, `height=168`, `border-radius=20`
- Text: `x=292`, `y=674`, `width=735`

## Animation Sequence

Scene07 uses IntersectionObserver to add `.is-active` when the slide enters view.

Reveal order:

1. Top paragraph
2. Column 1 decorative asset
3. Column 1 title
4. Column 1 body
5. Column 2 decorative asset
6. Column 2 title
7. Column 2 small line
8. Column 2 first number + label
9. Column 2 second number + label
10. Column 3 decorative asset
11. Column 3 title
12. Column 3 small line
13. Column 3 number + body line
14. Bottom panel
15. Bottom paragraph text

Animation style: subtle opacity + `translateY(14px)`, `620ms`, staggered with 150-250ms style spacing. Reduced motion shows all content immediately.

## Text Integrity

All customer text from the brief was rendered as real HTML/CSS text. No text was rewritten, shortened, or replaced with a screenshot.

## QA

Desktop 1366 source QA:

- Scene07 is wired after `Scene06CraftSteps`.
- Artboard uses `1366 x 882`.
- Background uses `scene07-bg.png` derived from `nền 4.png`.
- Three decorative/icon assets are imported and positioned.
- All provided text blocks are present as HTML.
- Sequential reveal classes and delays are present.
- No separate mobile layout was added.

Desktop 1536 source QA:

- Artboard remains fixed at max `1366px` and centered.
- No desktop enlargement logic was added.

Mobile 390 source QA:

- Artboard scale is `390 / 1366`.
- Section height scales from `882px`.
- No alternate mobile copy or reflow was introduced.
- No horizontal expansion beyond the scaled artboard was introduced.

## Build / Browser QA Note

No `package.json` was found under `/home/quang/Documents/brief-1` with `find -maxdepth 8`, so npm build/browser QA could not be run from this project snapshot.
