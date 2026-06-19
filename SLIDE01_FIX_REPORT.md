# Slide 01 Fix Report

## Summary

Patched the existing `Scene01Hero` implementation only. The project was not rebuilt from scratch.

## Files Changed

- `src/sections/page01/Scene01Hero/Scene01Hero.jsx`
- `src/sections/page01/Scene01Hero/Scene01Hero.css`
- `src/components/media/AudioNarrationButton.jsx`
- `src/components/media/AudioNarrationButton.css`

## Fixes Made

- Changed the main visual title from rendered `ĐÀO XÁ` text to accessible `ĐÀO XÁ` with visible text `ĐÀO  Á`.
- Added an empty title gap so the person/instrument image can visually form the missing `X`.
- Moved and scaled the person/instrument layer upward and left so the instrument head/neck sits inside the missing-X area.
- Increased the person/instrument layer z-index so the instrument crosses the title as intended.
- Added scoped CSS position variables for easier future tuning.
- Updated title fonts to use `Cormorant SC` and `Playfair Display SC` with fallbacks.
- Updated subtitle font stack to prefer `VL Aurora`, then close script fallbacks.
- Restored the full required paragraph text.
- Tightened paragraph size, width, and line-height toward the Canva reference.
- Reworked the audio control to include label, visible waveform bars, thin progress line, small transport icons, and a large warm circular play/pause button.
- Fixed waveform bar heights by using explicit per-bar values instead of unsupported CSS modulo math.

## Asset / SVG Notes

- `/home/quang/Documents/brief-1/slide1.png` was used as the primary visual reference.
- `/home/quang/Documents/brief-1/làng đàn Đào Xá/1.svg` remained reference-only.
- No giant SVG was embedded.
- No draft assets were moved, renamed, or deleted.

## Verification

Ran:

```bash
npm run build
```

Result: build passed successfully with Vite `8.0.16`.

Also checked a 1366px headless Chromium screenshot to confirm the instrument aligns with the missing `X` gap and the waveform renders visibly.

## Remaining TODO

- `public/audio/slide01-narration.mp3` is still a placeholder path. The audio button remains functional visually until real narration audio is added.
- Final font rendering depends on Google Fonts availability; CSS includes close fallback stacks.
