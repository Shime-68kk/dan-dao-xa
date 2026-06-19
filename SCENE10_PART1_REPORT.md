# Scene10 Part 1 Report

## Scope
- Implemented `Scene10SoundCulture` Part 1 only: the upper title and introductory paragraph.
- Wired Scene10 after Scene09 in `src/pages/Page01Story/Page01Story.jsx`.
- Did not build the lower instrument carousel, cards, player controls, stars, list button, or bottom UI.
- Did not alter Scene01-Scene09 layout code.

## Files Changed
- `src/sections/page01/Scene10SoundCulture/Scene10SoundCulture.jsx`
- `src/sections/page01/Scene10SoundCulture/Scene10SoundCulture.css`
- `src/pages/Page01Story/Page01Story.jsx`

## Artboard And Background
- Base artboard: `1366 x 869`.
- Responsive scale: `document.documentElement.clientWidth / 1366`.
- Wrapper height: `869 * scale`, so the scaled artboard keeps normal document flow and does not overlap the next section.
- Background: `slide 10-1/nền chủ đạo.png`, rendered full artboard with `object-fit: cover`.

## Title Coordinates And Typography
- `Những thanh âm`
  - Position: `left: 165px`, `top: -6px`
  - Font: `var(--font-client-aurora, "Client VL Aurora Aged", "VL Aurora Aged", cursive)`
  - Size: `48.3px`
  - Color: `#f2bd7e`
- `mang`
  - Position: `left: 530px`, `top: 78px`
  - Font: same Aurora stack
  - Size: `37.2px`
- `HỒN VĂN HÓA VIỆT`
  - Position: `left: 675px`, `top: 82px`
  - Font: `var(--font-client-playfair, "Client Playfair Display", "Playfair Display", "Times New Roman", serif)`
  - Size: `48px`
  - Styling: cream-gold clipped gradient with subtle emboss/shadow.

## Paragraph
- Position: `left: 260px`, `top: 185px`
- Width: `850px`
- Font: `var(--font-client-courier, "Client Courier New", "Courier New", monospace)`
- Size: `13px`
- Line-height: `1.55`
- Color: `#f3e6d7`
- Text content kept exactly as requested.

## Animation
- Title reveal: opacity + `translateY(18px)` to rest, delay `120ms`.
- Paragraph reveal: opacity + `translateY(18px)` to rest, delay `340ms`.
- Uses IntersectionObserver on viewport entry.
- `prefers-reduced-motion: reduce` disables transitions and transforms.

## Viewport QA Notes
- `1366px`: Scene10 uses the full-width 1366 artboard; title and paragraph occupy only the upper text area, with the lower portion intentionally empty/reserved.
- `1536px`: Artboard scales to document width using the shared Canva-fit model.
- `390px`: Artboard scales down to viewport width; no independent wide desktop layer is introduced.
- Horizontal overflow risk: the scene wrapper uses `width: 100%`, `overflow: hidden`, and a scaled 1366px artboard with computed height.

## Build
- Command: `npm run build`
- Result: Passed.
