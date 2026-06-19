# Fonts and Scene03 Pause Patch Report

## Files changed

- `src/styles/fonts.css`
- `src/index.css`
- `src/sections/page01/Scene01Hero/Scene01Hero.css`
- `src/sections/page01/Scene02History/Scene02History.css`
- `src/sections/page01/Scene03Timeline/Scene03Timeline.css`
- `src/sections/page01/Scene03Timeline/Scene03Timeline.jsx`
- `src/hooks/useAutoplayTimeline.js`
- `src/components/media/AudioNarrationButton.css`

Slide 4 files were not patched.

## Font files found and loaded

- `src/assets/fonts/VLAURORAAGED.OTF`
- `src/assets/fonts/1FTV-VIP-Bastliga-One-Regular.otf`
- `src/assets/fonts/cour.ttf`
- `src/assets/fonts/courbd.ttf`
- `src/assets/fonts/couri.ttf`
- `src/assets/fonts/courbi.ttf`
- `src/assets/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf`
- `src/assets/fonts/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf`
- `src/assets/fonts/Cormorant_SC/CormorantSC-Regular.ttf`
- `src/assets/fonts/Cormorant_SC/CormorantSC-Medium.ttf`
- `src/assets/fonts/Cormorant_SC/CormorantSC-SemiBold.ttf`
- `src/assets/fonts/Cormorant_SC/CormorantSC-Bold.ttf`

## Font-face names created

- `Client VL Aurora Aged`
- `Client Bastliga`
- `Client Courier New`
- `Client Playfair Display`
- `Client Cormorant SC`

## Slide 1 font roles

- Kicker `CUNG TRẦM`: `var(--font-client-cormorant-sc)`
- Subtitle: `var(--font-client-aurora)`
- Paragraph: `var(--font-client-courier)`
- Audio label: `var(--font-client-courier)`

## Slide 2 font roles

- `Hai thế kỉ thăng trầm`: `var(--font-client-aurora)`
- Decorative `và`: `var(--font-client-bastliga)`
- `ÁNH HÀO QUANG / QUÁ KHỨ`: `var(--font-client-playfair)`
- Body and map caption: `var(--font-client-courier)`

## Slide 3 font roles

- Heading `CÁC MỐC PHÁT TRIỂN CHÍNH`: `var(--font-client-playfair)`
- Milestone labels: `var(--font-client-courier)`, weight `700`
- Milestone descriptions: `var(--font-client-courier)`

## Scene03 pause/resume behavior

- Autoplay still starts when Scene03 enters the viewport.
- Hovering the moving music staff pauses the timeline on desktop.
- Moving the pointer away resumes hover pause unless the user has clicked to pause.
- Click/tap toggles user pause/resume.
- `Enter` and `Space` toggle pause/resume when the timeline is focused.
- Pausing preserves elapsed progress and does not restart the timeline.

## Build result

- `npm run build`: passed.

## Remaining TODOs

- Manual browser/device QA for hover, tap, and keyboard pause/resume is still recommended.
