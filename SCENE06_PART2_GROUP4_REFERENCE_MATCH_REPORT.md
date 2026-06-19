# Scene06 Part 2 Group 4 Reference Match Report

## Files Changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.jsx`
- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.css`

Only Scene06 Part 2 Group 4 was patched. Scene01-Scene05, Scene06 Part 1, Groups 1-3, B9 card size, the Group 4 background asset, the quote paper asset, pin/scroll logic, and customer text content were not changed.

## Step 9 Note

- Coordinate: `x=260`, `y=135`
- Width: `210`
- Style: same bracketed note component as other steps, now narrower for a more vertical flow.

Exact Step 9 note text used:

```txt
Trong quy trình làm đàn Đào Xá, chỉnh âm được xem là công đoạn quan trọng nhất, có thể kéo dài 1-2 ngày.

Nếu máy móc có thể hỗ trợ cắt, đục hay tạo hình thì ở bước này, người thợ gần như chỉ dựa vào đôi tai và kinh nghiệm để nghe độ rung, độ vang, biên độ dao động và độ “chín” của âm thanh.
```

## Quote Paper

- Coordinate: `x=500`, `y=120`
- Size: `width=690`, natural image height
- Asset: `/home/quang/Documents/brief-1/project/src/assets/page01/scene06/steps/quote-paper-final.png`

## Quote Frame

- Quote composition block: `x=500`, `y=120`, `width=690`, `height=470`
- Top-left bracket visual origin: approximately `x=482`, `y=115`
- Bottom-right bracket visual origin: approximately `x=1188`, `y=590`
- The frame wraps the quote paper and the attribution line as one composition.

## Attribution

- Text: `Ông Đào Anh Tuấn chia sẻ`
- Relative coordinate inside quote composition: `left=325`, `top=405`
- Stage coordinate: approximately `x=825`, `y=525`
- It is below the quote paper and inside the quote-area bracket composition.
- Font: Courier/project Courier, `13px`, `font-weight: 400`, italic, subtle cream.

## Exact Quote Text Used

```txt
Người thợ làm phải có tai nghe, kết hợp với 
các bí quyết các cụ ngày xưa truyền lại và 
tự rút ra kinh nghiệm của bản thân trong khi làm”.

Điều đặc là phần lớn thợ Đào Xá đều không học qua nhạc lý bài bản, họ tích lũy hiểu biết về âm thanh qua truyền nghề và thực hành lâu năm.

Vì vậy, làm đàn không chỉ là tạo hình trên gỗ mà còn là quá trình cảm nhận và đánh thức âm thanh ẩn trong từng thớ gỗ.
```

## Quote Typography

- Normal quote text color: `rgba(38, 28, 20, 0.72)`
- Normal quote text weight: `400`
- Normal quote text size: `13px` on the 1366 stage
- Line height: `1.55`

This makes the non-highlight quote text lighter and less heavy, closer to the reference.

## Highlight CSS Values

Highlight text:

```css
font-weight: 700;
color: rgba(20, 12, 8, 0.92);
```

Highlight backing:

```css
left: -0.12em;
right: -0.12em;
top: 0.08em;
bottom: 0.05em;
background: rgba(248, 174, 93, 0.86);
transform: scaleX(0);
transform-origin: left center;
```

Highlight phrases:

- `tai nghe,`
- `không học qua nhạc lý bài bản,`
- `cảm nhận và đánh thức âm thanh ẩn trong từng thớ gỗ.`

## Animation Behavior

- Full quote text appears first.
- Highlight phrases are visible as normal text before the orange sweep starts.
- Orange highlight backing sweeps left-to-right afterward, in sequence.
- Attribution reveals after the final highlight sweep.
- Reduced motion shows the full quote, all highlights, and attribution immediately.

## Bracket Confirmation

Two separate white corner-bracket frames now exist:

- Step 9 note frame: reused `.scene06-steps__corner` inside the Step 9 note.
- Quote-area frame: new `.scene06-final-quote__corner` elements around quote paper + attribution.

## QA

Desktop 1366 source QA:

- Group 4 uses the existing `group4-bg.png` copied from `nền 3.png`.
- No left title is rendered for Group 4.
- B9 card coordinate and size were not changed.
- Step 9 note is narrower and more vertical at `260/135/210`.
- Quote area has its own second bracket frame.
- Quote normal text is lighter at `rgba(38, 28, 20, 0.72)`.
- Highlight phrases are visible before the orange sweep.
- Attribution is below the paper and inside the quote frame.
- Quote frame right edge is approximately `1190px`, leaving clearance before the stage edge and right-side flower area.

Mobile 390 source QA:

- Group 4 remains inside the existing scaled 1366 artboard model.
- No mobile-specific override or horizontal expansion was introduced.
- Reduced-motion final state is supported.

## Build / Browser QA Note

No `package.json` was found under `/home/quang/Documents/brief-1` with `find -maxdepth 8`, so npm build/browser QA could not be run from this project snapshot.
