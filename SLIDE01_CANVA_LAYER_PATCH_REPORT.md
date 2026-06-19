# Slide 01 Canva Layer Patch Report

## 1. Files Changed

- `src/sections/page01/Scene01Hero/Scene01Hero.jsx`
- `src/sections/page01/Scene01Hero/Scene01Hero.css`
- `src/components/media/AudioNarrationButton.jsx`
- `src/assets/page01/scene01/README.md`
- `src/hooks/useCoverScale.js`
- `src/assets/page01/scene01/title-person-composite.webp`

## 2. Canva Composite Asset

`/home/quang/Documents/brief-1/Slide mở đầu/bản chữ & hình.png` was converted to:

```txt
src/assets/page01/scene01/title-person-composite.webp
```

The WebP conversion preserved alpha transparency (`TrueColorAlpha`) and is emitted in the production bundle as a hashed WebP asset.

## 3. Visible Main Title Source

The visible `ĐÀO XÁ` title, instrument-X alignment, and main person now come from the Canva transparent composite layer. The recreated visible HTML `ĐÀO  Á` title was removed.

An accessible hidden heading remains:

```txt
Cung Trầm Đào Xá
```

`CUNG TRẦM`, subtitle, paragraph, and audio remain real HTML/components.

## 4. SVG Confirmation

The giant SVG from `/home/quang/Documents/brief-1/làng đàn Đào Xá/1.svg` was not embedded. It remains reference-only.

## 5. Run / Build Commands

Install dependencies:

```bash
npm install
```

Build:

```bash
npm run build
```

Local verification:

```bash
npm run dev -- --host 127.0.0.1
```

## 6. Build Result

`npm run build` passed successfully with Vite `8.0.16`.

The production output includes:

- `title-person-composite-*.webp`
- optimized polaroid WebP assets
- optimized wood/smoke background WebP

## 7. Visual / Implementation Notes

- Added `useCoverScale(1366, 768)` so the fixed 1366x768 stage uses cover scaling: `max(viewportWidth / 1366, viewportHeight / 768)`.
- Repositioned all visible layers into the fixed Canva coordinate stage.
- Audio keeps the improved waveform/progress/mini-control style and is now placed at the lower-left coordinate target.
- Added the decorative left scroll pill at the lower-left coordinate target.
- A 1366x768 local Chromium screenshot was checked against the reference intent: the hero no longer feels small or empty, and the composite layer controls the title/instrument/person alignment.

## 8. Remaining TODOs

- Add real narration audio at `/audio/slide01-narration.mp3`.
- Fine-tune mobile crop after testing on actual target phones if editorial priorities change between keeping more title visible or more person visible.
