# Slide 01 Implementation Report

## 1. Files Created/Changed

- `package.json`, `package-lock.json`, `index.html`, `vite.config.js`
- `src/main.jsx`, `src/App.jsx`, `src/index.css`
- `src/pages/Page01Story/Page01Story.jsx`
- `src/pages/Page01Story/Page01Story.css`
- `src/sections/page01/Scene01Hero/Scene01Hero.jsx`
- `src/sections/page01/Scene01Hero/Scene01Hero.css`
- `src/sections/page01/Scene01Hero/scene01.motion.js`
- `src/components/media/AudioNarrationButton.jsx`
- `src/components/media/AudioNarrationButton.css`
- `src/components/motion/ParallaxLayer.jsx`
- `src/components/motion/Reveal.jsx`
- `src/assets/page01/scene01/README.md`
- `public/audio/.gitkeep`

The implementation includes only the foundation plus `Page01Story` and `Scene01Hero`. A clearly temporary placeholder scene sits below the hero to test scroll exit behavior.

## 2. Assets Copied/Optimized

Optimized WebP files were generated from `/home/quang/Documents/brief-1/Slide mở đầu` and placed in `src/assets/page01/scene01`:

- `Background.png` -> `background-wood-smoke.webp`
- `2.png` -> `person-instrument.webp`
- `3.png` -> `photo-craftsman-detail.webp`
- `4.png` -> `photo-instruments.webp`
- `20+.png` -> `photo-hands.webp`
- `20+ (1).png` -> `photo-maker.webp`
- `20+ (2).png` -> `photo-wood-stock.webp`

The large SVG files in `/home/quang/Documents/brief-1/làng đàn Đào Xá` were inspected for size/reference context only and were not embedded.

## 3. How To Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## 4. How To Build

```bash
npm run build
```

Build verification completed successfully with Vite `8.0.16`.

## 5. Placeholder / TODO

- `public/audio/slide01-narration.mp3` is intentionally absent for now.
- `AudioNarrationButton.jsx` contains `TODO: replace with real narration audio`.
- If no audio file exists, clicking the button still toggles the visual playing state without crashing.
- The section below Scene01 is a temporary placeholder for future scenes.

## 6. Asset Naming Assumptions

- `Background.png` is the wood/smoke background layer.
- `2.png` is the main person holding the instrument.
- `3.png`, `4.png`, and the `20+` files are already-framed polaroid/detail photos.
- `bản chữ & hình.png` and `slide1.png` were used as composition references, not as flattened website layers.

## 7. Mobile/Desktop Notes

- Desktop uses a full-viewport sticky hero with the title, person, instrument, photo stack, paragraph, and audio group layered separately.
- Below `768px`, the layout keeps the same mood while reducing crowded decorative photos and scaling the person/title for readability.
- The scene respects `prefers-reduced-motion` by disabling entrance/parallax motion.

## 8. Performance Notes

- Scene assets total roughly `160KB` before bundling and are emitted as hashed WebP files in `dist/assets`.
- Hero background and person image load eagerly; decorative polaroid images use `loading="lazy"`.
- Scroll movement uses `requestAnimationFrame`, `transform`, and `opacity`; it avoids layout-heavy animated properties.
- `npm audit --omit=dev` reports `0 vulnerabilities`.
