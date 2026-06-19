# Scene15 Final Report

## Files Changed

- `src/sections/page01/Scene15FinalClosing/Scene15FinalClosing.jsx`
- `src/sections/page01/Scene15FinalClosing/Scene15FinalClosing.css`
- `src/pages/Page01Story/Page01Story.jsx`
- `src/assets/page01/scene15/scene15-bg.png`
- `src/assets/page01/scene15/scene15-title.png`

## Assets Used / Copied

- Background: `slide 15/nền cuối.png` copied to `src/assets/page01/scene15/scene15-bg.png`
- Decorative title: `slide 15/Chữ trên nền cuối (2).png` copied to `src/assets/page01/scene15/scene15-title.png`
- Reference only: `slide 15/thamkhao15.png`

## Layout

- Scene15 is wired after Scene14 as the final normal slide.
- Artboard: `1366 x 879`
- Closing paragraph: `left: 296px; top: 4px; width: 865px`
- Decorative title asset: `left: 287px; top: 202px; width: 790px`
- Logo text: `left: 224px; top: 731px`
- Copyright: `left: 32px; top: 844px`
- Credits: `left: 652px; top: 676px; width: 580px`

## Typography

- Closing paragraph: `Client Courier New`, `14px`, `line-height: 1.65`, white/clear.
- Credits/logo: SGV-Gilroy fallback stack, white.
- `Thực hiện:` and `Hình ảnh:` are bold/heavier.
- Copyright is italic.
- Correct spelling used: `Tạ Minh Tâm`.

## Animation

- Slow fade-in with slight upward drift.
- Logo/credits have subtle warm glow through text shadow.
- `prefers-reduced-motion` disables motion.

## Mobile Behavior

- Mobile switches to stacked normal flow over the same background.
- Text remains readable and avoids horizontal overflow.

## Build Result

- `npm run build` passed.
