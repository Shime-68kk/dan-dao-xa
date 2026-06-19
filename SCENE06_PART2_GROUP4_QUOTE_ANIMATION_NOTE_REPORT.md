# Scene06 Part 2 Group 4 Quote Animation + Note Report

## Files Changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.jsx`
- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.css`

Only Scene06 Part 2 Group 4 / Bước 9 + final quotation was patched. Groups 1, 2, and 3 were not changed.

## Quote Paper Position

- Old quote paper x: `455px`
- New quote paper x: `500px`
- Delta: `+45px`
- Quote paper y remains `120px`
- Quote paper width remains `690px`

The paper now has more breathing room away from the Step 9 note and still leaves a clean right-side margin before the background flower area.

## Step 9 Note Position

- Old Step 9 note: `x=270`, `y=140`, `width=225`
- New Step 9 note: `x=270`, `y=140`, `width=235`

The note keeps the same vertical placement and gains more horizontal room while preserving the narrow/tall note style and bracket frame.

## Exact Step 9 Note Text Used

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

## Highlight Phrases

- `tai nghe,`
- `không học qua nhạc lý bài bản,`
- `cảm nhận và đánh thức âm thanh ẩn trong từng thớ gỗ.`

## Animation Behavior

The quote animation is now two-phase:

1. Full quote text reveals first. The highlight phrases are normal visible text during this phase; there are no blank gaps.
2. Orange highlight backgrounds sweep left-to-right over each phrase in sequence:
   - highlight 1 starts at `4540ms`
   - highlight 2 starts at `5320ms`
   - highlight 3 starts at `6200ms`

The highlight fill uses `.scene06-final-quote__highlight::before` with `transform: scaleX(0)` to `scaleX(1)`, so the text itself is never hidden by the highlight animation.

## Attribution Placement

- Text: `Ông Đào Anh Tuấn chia sẻ`
- Positioned below the quote paper.
- Relative to quote block: `left=368px`, `top=474px`
- With the new quote paper x, the stage position is approximately `x=868px`, `y=594px`.
- Attribution appears after highlight 3 at `7400ms` with a soft reveal.

## Reduced Motion

Under `prefers-reduced-motion: reduce`:

- quote text appears immediately
- all orange highlights are visible immediately
- attribution is visible immediately
- no quote/highlight/reveal animation runs

## QA

Desktop 1366 source QA:

- Quote paper shifted right by `45px`.
- Step 9 note kept full exact text and now has `width=235`.
- Highlight phrases are visible as text before orange sweep begins.
- Highlight sweep order is phrase 1, phrase 2, phrase 3.
- Attribution is below the paper and appears after the highlights.
- Quote paper right edge is `1190px`, leaving about `176px` of stage space before the right edge.

Mobile 390 source QA:

- Group 4 still uses the scaled 1366 artboard model.
- No independent mobile overrides or horizontal positioning changes were introduced.
- Reduced-motion final state is supported.

## Build / Browser QA Note

No `package.json` was found under `/home/quang/Documents/brief-1` with `find -maxdepth 8`, so npm build/browser QA could not be run from this project snapshot.
