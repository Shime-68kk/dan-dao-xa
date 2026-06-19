# Scene14 Implementation Report

## Files Changed

- `src/sections/page01/Scene14FutureContinuation/Scene14FutureContinuation.jsx`
- `src/sections/page01/Scene14FutureContinuation/Scene14FutureContinuation.css`
- `src/pages/Page01Story/Page01Story.jsx`
- `src/assets/page01/scene14/scene14-bg.png`

## Assets Used / Copied

- Source background: `slide 14/nền 2.png`
- Copied asset: `src/assets/page01/scene14/scene14-bg.png`
- Reference only: `slide 14/thamkhao14.png`

## Final Desktop Coordinates

- Artboard: `1366 x 768`
- Text block 1: `left: 592px; top: 116px; width: 640px`
- Text block 2: `left: 678px; top: 244px; width: 590px`

## Typography

- Font: `Client Courier New`, fallback `Courier New`
- Desktop font size: `13px`
- Line height: `1.55`
- Color: `rgba(255, 255, 255, 0.88)`
- First-line indent: `2em`

## Animation

- Both text blocks use subtle opacity and `translateY(18px)` reveal.
- The second block has a `180ms` transition delay.
- `prefers-reduced-motion` disables the reveal motion.

## Mobile Behavior

- Mobile switches to normal stacked vertical flow over the same cover background.
- Text width is `86vw`.
- Mobile font size is `12px`.
- No horizontal overflow is expected from Scene14.

## Build Result

- `npm run build` passed.
