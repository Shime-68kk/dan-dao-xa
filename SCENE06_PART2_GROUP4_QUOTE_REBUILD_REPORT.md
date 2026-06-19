# Scene06 Part 2 Group 4 Quote Rebuild Report

## Scope

- Rebuilt only Scene06 Part 2 Group 4 / final group.
- Group 1, Group 2, and Group 3 data/layout were not changed.
- Scene06 Part 1, Scene01-Scene05, B1-B8 layouts, card crop files, and pin/scroll transition logic were not changed.
- Group 4 no longer shows the left vertical title.

## Files Changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.jsx`
- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.css`
- `/home/quang/Documents/brief-1/project/src/assets/page01/scene06/steps/backgrounds/group4-bg.png`
- `/home/quang/Documents/brief-1/project/src/assets/page01/scene06/steps/quote-paper-final.png`

## Assets Used

- Group 4 background source: `/home/quang/Documents/brief-1/project/slide 6-2/nền 3.png`
- Project background asset: `/home/quang/Documents/brief-1/project/src/assets/page01/scene06/steps/backgrounds/group4-bg.png`
- Quote paper source: `/home/quang/Documents/brief-1/project/slide 6-2/nền trích dẫn lời.png`
- Project quote paper asset: `/home/quang/Documents/brief-1/project/src/assets/page01/scene06/steps/quote-paper-final.png`
- B9 card: existing `/home/quang/Documents/brief-1/project/src/assets/page01/scene06/steps/cards/b9-card.png`

## Coordinates

B9 card:

- `x=105`
- `y=285`
- width remains the shared `--step-card-width: 150px`

Step 9 note:

- `x=270`
- `y=140`
- `width=225`

Quote paper:

- `x=455`
- `y=120`
- `width=690`

Quote text safe-area padding:

- top `64px`
- right `82px`
- bottom `54px`
- left `86px`

Attribution:

- inside the quote block at `right=34px`, `top=348px`
- stage position is approximately `x=830-850`, `y=532`

## Exact Step 9 Note Text Used

Title: `CHỈNH ÂM`

```txt
Trong quy trình làm đàn Đào Xá, chỉnh âm được xem là công đoạn quan trọng nhất, có thể kéo dài 1-2 ngày.

Nếu máy móc có thể hỗ trợ cắt, đục hay tạo hình thì ở bước này, người thợ gần như chỉ dựa vào đôi tai và kinh nghiệm để nghe độ rung, độ vang, biên độ dao động và độ “chín” của âm thanh.
```

## Exact Quote Text Used

```txt
Người thợ làm phải có tai nghe, kết hợp với 
các bí quyết các cụ ngày xưa truyền lại và 
tự rút ra kinh nghiệm của bản thân trong khi làm”.

Điều đặc là phần lớn thợ Đào Xá đều không học qua nhạc lý bài bản, họ tích lũy hiểu biết về âm thanh qua truyền nghề và thực hành lâu năm.

Vì vậy, làm đàn không chỉ là tạo hình trên gỗ mà còn là quá trình cảm nhận và đánh thức âm thanh ẩn trong từng thớ gỗ.
```

Attribution:

```txt
Ông Đào Anh Tuấn chia sẻ
```

## Highlight Phrases

- `tai nghe,`
- `không học qua nhạc lý bài bản,`
- `cảm nhận và đánh thức âm thanh ẩn trong từng thớ gỗ.`

Highlight style:

- dark text over an orange/gold marker gradient
- `box-decoration-break: clone`
- subtle padding, no neon glow

## Animation Implementation

- Added `Group4FinalQuote`.
- It receives `isActive={index === activeIndex}`.
- When Group 4 becomes active, `.scene06-final-quote.is-typing` starts the sequence.
- Quote paper fades/slides/scales in first.
- Quote lines reveal with `clip-path` and `steps(...)`.
- Highlights appear sequentially after their related line reveal starts.
- Attribution appears last with the same typewriter-style reveal.
- Layout reserves the final text space before animation, so the quote does not shift while revealing.

## Reduced Motion

Under `prefers-reduced-motion: reduce`:

- group transitions are disabled as before
- quote paper, text, highlights, and attribution display immediately
- no typewriter animation runs

## QA

Desktop 1366 source QA:

- Group 4 uses `group4-bg.png` copied from `nền 3.png`.
- No side title is rendered when Group 4 is active.
- B9 card keeps the shared card width.
- Step 9 note uses the exact requested text.
- Quote paper uses `quote-paper-final.png` copied from `nền trích dẫn lời.png`.
- Quote text is rendered as HTML over the paper.
- Highlight phrases match the requested phrases.
- Attribution text is present and sequenced last.

Desktop 1536 source QA:

- Group 4 uses the same scaled artboard model through `--scene06-steps-scale`.
- Coordinates scale consistently with the previous groups.

Mobile 390 source QA:

- Group 4 uses the same scaled artboard model.
- No independent mobile layout or horizontal positioning override was introduced.

## Build / Browser QA Note

No `package.json` was found under `/home/quang/Documents/brief-1` with `find -maxdepth 8`, so npm build/browser QA could not be run from this project snapshot.
