# Scene06 Part 2 Group 4 Single Frame + Vertical Note Report

## Files Changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.jsx`
- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.css`

Only Scene06 Part 2 Group 4 was patched. Scene01-Scene05, Scene06 Part 1, Groups 1-3, pin/scroll logic, B9 card size/crop, quote paper asset, Group 4 background asset, and customer text content were not changed.

## Duplicate Frames Removed

- Removed the separate quote-area corner elements from `Group4FinalQuote`.
- Suppressed the normal Step note corner elements when `noteVariant === "group-4"`.
- Added one shared Group 4 frame: `.scene06-group4-frame`.

Exactly one Group 4 frame exists now:

- one top-left corner
- one bottom-right corner
- no separate Step 9 note frame
- no separate quote-paper frame

## Global Frame

- `x=245`
- `y=125`
- `width=875`
- `height=425`
- right edge: `1120`

The frame right edge is `1120`, which is under the `<= 1130` requirement and stays left of the flower safe zone.

## Step 9 Note

- `x=250`
- `y=145`
- `width=145`

Step 9 note width is `145`, satisfying the `<= 160` requirement. The note text was not shortened, rewritten, or summarized.

Exact Step 9 text:

```txt
Trong quy trình làm đàn Đào Xá, chỉnh âm được xem là công đoạn quan trọng nhất, có thể kéo dài 1-2 ngày.

Nếu máy móc có thể hỗ trợ cắt, đục hay tạo hình thì ở bước này, người thợ gần như chỉ dựa vào đôi tai và kinh nghiệm để nghe độ rung, độ vang, biên độ dao động và độ “chín” của âm thanh.
```

## Highlight Fix

The highlight animation no longer uses an absolutely positioned `::before` overlay. It now uses inline `background-size` animation on the highlight span:

```css
background-size: 0% 0.95em;
box-decoration-break: clone;
-webkit-box-decoration-break: clone;
```

This allows wrapped phrases, especially `không học qua nhạc lý bài bản,`, to receive orange highlight coverage across all wrapped line fragments.

Highlight phrase 2 is kept as one inline span and is covered by the same background-fill animation.

## Frame / Flower Clearance

- Frame right edge: `1120`
- Flower safe zone starts at `x >= 1160`
- The frame bottom-right corner does not touch the flower.

## QA

Desktop 1366 source QA:

- Only one Group 4 frame is rendered.
- Step 9 note has no separate note-frame corners.
- Quote area has no separate quote-frame corners.
- Step 9 note is narrow and vertical at `250/145/145`.
- B9 card size and crop were not changed.
- Highlight phrase 2 uses background-fill animation with `box-decoration-break: clone`.
- Full quote text remains visible before highlight animation.
- Attribution remains below the quote paper.
- No horizontal expansion was introduced.

Mobile 390 source QA:

- Group 4 remains in the scaled 1366 artboard model.
- No duplicate frame is present in the JSX.
- Reduced-motion state sets highlight background-size to `100% 0.95em`.

## Build / Browser QA Note

No `package.json` was found under `/home/quang/Documents/brief-1` with `find -maxdepth 8`, so npm build/browser QA could not be run from this project snapshot.
