# Scene06 Part 2 Group 4 Frame + Note Fix Report

## Files Changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.jsx`
- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.css`

Only Scene06 Part 2 Group 4 / Bước 9 + final quote was patched. Scene01-Scene05, Scene06 Part 1, Groups 1-3, pin/scroll logic, B9 card size, quote text content, highlight animation sequence, quote paper asset, and group background asset were not changed.

## Quote Frame Coordinates

Old quote frame:

- `x=500`
- `y=120`
- `width=690`
- `height=470`
- old right edge: approximately `1190`

New quote frame:

- effective frame `x=510`
- effective frame `y=125`
- effective frame `width=610`
- effective frame `height=430`
- new right edge: `1120`

The new quote frame right edge is `1120`, which satisfies the hard rule `<= 1130`.

## Quote Paper Coordinates

- `x=505`
- `y=120`
- `width=650`
- right edge: `1155`

The quote paper remains before the flower safe zone starting at `x >= 1160`.

## Step 9 Note

Final Step 9 note:

- `x=250`
- `y=130`
- `width=190`

The Step 9 note text was not shortened, rewritten, or summarized.

Exact Step 9 note text:

```txt
Trong quy trình làm đàn Đào Xá, chỉnh âm được xem là công đoạn quan trọng nhất, có thể kéo dài 1-2 ngày.

Nếu máy móc có thể hỗ trợ cắt, đục hay tạo hình thì ở bước này, người thợ gần như chỉ dựa vào đôi tai và kinh nghiệm để nghe độ rung, độ vang, biên độ dao động và độ “chín” của âm thanh.
```

Added a Step 9 note flow safeguard:

```css
height: auto;
overflow: visible;
white-space: normal;
line-height: 1.45;
```

## Attribution

- Text: `Ông Đào Anh Tuấn chia sẻ`
- Relative coordinate inside quote block: `left=315`, `top=390`
- Stage coordinate: approximately `x=820`, `y=510`
- The attribution remains inside the quote-area frame and above the bottom-right quote bracket.

## Bracket Frames

Two separate bracket frames exist:

- Step 9 note frame: existing `.scene06-steps__corner` inside the Step 9 note.
- Quote-area frame: `.scene06-final-quote__corner` around quote paper + attribution.

The quote-area bottom-right bracket ends at `x=1120`, before the flower safe zone. It does not touch the flower.

## QA

Desktop 1366 source QA:

- Group 4 uses the existing `nền 3.png` background asset.
- B9 card size and coordinate were not changed.
- Step 9 note is narrower and more vertical at `250/130/190`.
- Step 9 note has its own bracket frame.
- Quote paper + attribution have a second separate bracket frame.
- Quote frame right edge is `1120`, satisfying `<= 1130`.
- Quote bracket does not touch the flower safe zone.
- Attribution is inside the quote frame.
- Quote text content and highlight sequence were not changed.

Desktop 1536 source QA:

- Values continue to scale through `--scene06-steps-scale`.
- Quote frame and flower clearance relationship remains proportional.

Mobile 390 source QA:

- Group 4 remains inside the scaled 1366 artboard model.
- No mobile-specific horizontal expansion was introduced.
- Step 9 note keeps `height: auto` and `overflow: visible`.

## Build / Browser QA Note

No `package.json` was found under `/home/quang/Documents/brief-1` with `find -maxdepth 8`, so npm build/browser QA could not be run from this project snapshot.
