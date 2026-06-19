# CODEX PATCH TASK — Slide 01 final visual alignment using Canva composite layer

## Why this patch exists

The current Slide 01 implementation builds successfully, but the visual match is still not good enough.

Main problems visible in the latest screenshot:

1. The scene uses a "contain/centered" layout, so the composition becomes too small and leaves too much empty background around it.
2. The đàn/instrument still does not become the `X` in `ĐÀO XÁ` convincingly.
3. The main title font still does not match Canva closely enough.
4. The current implementation is trying to recreate the most difficult part — `ĐÀO XÁ + instrument X + person` — with separate text and image layers. This is fragile and keeps drifting.
5. The audio area is better now, so keep its current visual direction, but place/scale it according to the reference.

This patch should fix the layout by using Canva's already-separated transparent composite layer:

```txt
/home/quang/Documents/brief-1/Slide mở đầu/bản chữ & hình.png
```

That asset already contains the exact Canva main title `ĐÀO XÁ`, the instrument forming the `X`, and the main person. It is the best source of truth for the hardest part of the hero.

Do **not** replace the entire hero with a screenshot. Only use this composite as one animated layer for the title/person/instrument group.

---

## Working folders

Project:

```txt
/home/quang/Documents/brief-1/project
```

Draft/library folder:

```txt
/home/quang/Documents/brief-1
```

Slide 1 reference:

```txt
/home/quang/Documents/brief-1/slide1.png
```

Slide 1 separated assets:

```txt
/home/quang/Documents/brief-1/Slide mở đầu
```

SVG reference folder:

```txt
/home/quang/Documents/brief-1/làng đàn Đào Xá
```

Do **not** embed the large SVG directly.

---

## Files to patch

Patch the existing files. Do not rebuild from scratch.

Expected files:

```txt
src/sections/page01/Scene01Hero/Scene01Hero.jsx
src/sections/page01/Scene01Hero/Scene01Hero.css
src/components/media/AudioNarrationButton.jsx
src/components/media/AudioNarrationButton.css
```

You may add these if useful:

```txt
src/sections/page01/Scene01Hero/scene01.layout.js
src/hooks/useCoverScale.js
src/assets/fonts/...
```

---

## Critical design decision

### Use the Canva composite layer for the main title/person/instrument

Copy and optimize this file:

```txt
/home/quang/Documents/brief-1/Slide mở đầu/bản chữ & hình.png
```

into:

```txt
src/assets/page01/scene01/title-person-composite.webp
```

If WebP conversion with alpha fails, use PNG:

```txt
src/assets/page01/scene01/title-person-composite.png
```

This asset is exported at approximately `1708 x 960`, which corresponds to the Canva design frame scaled by `1.25`.

The actual design coordinate system must be:

```txt
1366 x 768
```

Place the composite layer as a full-stage transparent image:

```css
.scene01-title-person-composite {
  position: absolute;
  left: 0;
  top: 0;
  width: 1366px;
  height: 768px;
  object-fit: fill;
  z-index: 30;
  pointer-events: none;
}
```

This will align the large `ĐÀO XÁ`, instrument-X, and person exactly like Canva.

### Remove the visible recreated main-title text

Do not show the current HTML-rendered `ĐÀO  Á` as visible text anymore.

Instead:

```jsx
<h1 className="sr-only">Cung Trầm Đào Xá</h1>
<img
  className="scene01-title-person-composite"
  src={titlePersonComposite}
  alt=""
  aria-hidden="true"
/>
```

The hidden `h1` keeps accessibility/SEO. The visible main title comes from the composite layer because it is pixel-perfect and already includes the instrument as the `X`.

Keep `CUNG TRẦM`, subtitle, paragraph, and audio as real HTML text/components.

---

## Fix the frame / aspect ratio problem

The hero must not shrink into the middle with empty areas around it.

Use a fixed internal design frame of:

```txt
1366 x 768
```

Then scale it with a **cover** strategy, not contain.

### Required behavior

For any viewport:

```txt
scale = max(window.innerWidth / 1366, window.innerHeight / 768)
```

Then render the 1366x768 stage centered in the viewport with that scale.

This fills the viewport. Some crop on very wide/tall screens is acceptable. Empty borders are not acceptable.

### Suggested implementation

Create a hook:

```jsx
// src/hooks/useCoverScale.js
import { useEffect, useState } from "react";

export function useCoverScale(width = 1366, height = 768) {
  const getScale = () => {
    if (typeof window === "undefined") return 1;
    return Math.max(window.innerWidth / width, window.innerHeight / height);
  };

  const [scale, setScale] = useState(getScale);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScale(getScale()));
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, [width, height]);

  return scale;
}
```

In `Scene01Hero.jsx`:

```jsx
const stageScale = useCoverScale(1366, 768);

return (
  <section className="scene01-hero">
    <div className="scene01-sticky">
      <div
        className="scene01-scale-shell"
        style={{ "--scene01-scale": stageScale }}
      >
        <div className="scene01-stage">
          {/* all 1366x768 absolute-positioned content goes here */}
        </div>
      </div>
    </div>
  </section>
);
```

CSS:

```css
.scene01-hero {
  position: relative;
  min-height: 175vh;
  background: #1d0f09;
}

.scene01-sticky {
  position: sticky;
  top: 0;
  height: 100svh;
  overflow: hidden;
  background: #1d0f09;
}

.scene01-scale-shell {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1366px;
  height: 768px;
  transform: translate(-50%, -50%) scale(var(--scene01-scale, 1));
  transform-origin: center center;
}

.scene01-stage {
  position: relative;
  width: 1366px;
  height: 768px;
  overflow: hidden;
}
```

Important:
- Keep scroll/parallax inside nested elements so the scaling transform is not overwritten by Framer Motion.
- If Framer Motion currently controls transform on the same element, add another inner wrapper instead.

---

## Coordinate map for 1366 x 768 stage

Use these positions as the first patch target. Tune only slightly if needed.

| Layer | x | y | w | h | z | Notes |
|---|---:|---:|---:|---:|---:|---|
| Background | 0 | 0 | 1366 | 768 | 0 | Use Background.png / optimized background |
| Top-right maker photo | 923 | -4 | 295 | auto | 12 | rotate about -8deg |
| Top-right wood photo | 1135 | 47 | 290 | auto | 11 | rotate about 7deg |
| Right drums photo | 1065 | 290 | 310 | auto | 13 | behind person |
| Lower-right maker photo | 1284 | 498 | 245 | auto | 10 | partially cropped on right |
| Bottom hands photo | 493 | 646 | 250 | auto | 35 | visible above next scene area |
| Title/person composite | 0 | 0 | 1366 | 768 | 30 | use `bản chữ & hình.png` |
| CUNG TRẦM text | 300 | 112 | 420 | 60 | 45 | real text |
| Subtitle | 138 | 383 | 520 | 100 | 45 | real text |
| Paragraph | 140 | 506 | 590 | 135 | 45 | real text |
| Audio group | 134 | 666 | 230 | 86 | 50 | keep current improved audio design |
| Left scroll pill | 35 | 666 | 30 | 58 | 50 | decorative scroll hint |

Use absolute positioning in px inside the 1366x768 stage. The cover-scale wrapper handles responsive scaling.

---

## Text styling

### CUNG TRẦM

Text:

```txt
CUNG TRẦM
```

CSS target:

```css
.scene01-kicker {
  position: absolute;
  left: 300px;
  top: 112px;
  width: 420px;
  z-index: 45;

  font-family: "Cormorant SC", "Cormorant Garamond", "Times New Roman", serif;
  font-size: 49.4px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: #f4d5ad;
  text-transform: uppercase;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
}
```

### Main title

Do not show as HTML text. The visible title comes from:

```txt
title-person-composite.webp
```

Add only an accessible hidden title:

```jsx
<h1 className="sr-only">Cung Trầm Đào Xá</h1>
```

### Subtitle

Text:

```txt
Ai sẽ nối dây cho
những tiếng đàn cổ?
```

CSS target:

```css
.scene01-subtitle {
  position: absolute;
  left: 138px;
  top: 383px;
  width: 520px;
  z-index: 45;

  font-family: "VL Aurora", "SVN-Aurora", "UTM Aurora", "Great Vibes", "Dancing Script", "Brush Script MT", cursive;
  font-size: 33.6px;
  line-height: 0.98;
  font-weight: 400;
  color: #ffd79e;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.28);
}
```

If local font files exist, use them:

```bash
find /home/quang/Documents/brief-1 -iname "*.ttf" -o -iname "*.otf" -o -iname "*Aurora*"
```

If a matching Aurora font is found, copy it to:

```txt
src/assets/fonts/
```

and define:

```css
@font-face {
  font-family: "VL Aurora";
  src: url("../../assets/fonts/<file-name>.ttf") format("truetype");
  font-display: swap;
}
```

If no local font exists, import a close web font:

```css
@import url("https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@400;500;600&family=Great+Vibes&display=swap");
```

### Paragraph

Use the full paragraph exactly:

```txt
Làng nghề Đào Xá (Ứng Hòa, Hà Nội) từ lâu được biết đến là cái nôi chế tác nhạc cụ cổ truyền duy nhất của Thủ đô. Thế nhưng, đằng sau bề dày lịch sử hai trăm năm là một thực tế khốc liệt về bài toán lao động kế cận khi hiện tại, cả làng chỉ còn đúng một hộ bám trụ với nghề. Câu hỏi "Ai sẽ nối dây cho những tiếng đàn cổ?" không chỉ là nỗi trăn trở của người thợ cuối cùng, mà còn là thách thức lớn cho sự bảo tồn của một di sản văn hóa trong đời sống đương đại.
```

CSS target:

```css
.scene01-description {
  position: absolute;
  left: 140px;
  top: 506px;
  width: 590px;
  z-index: 45;

  font-family: "Courier New", Courier, monospace;
  font-size: 11px;
  line-height: 1.55;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: rgba(255, 245, 225, 0.95);
  text-align: left;
}
```

---

## Polaroid positioning

Because the composite layer contains the person but not the polaroids, keep the polaroids as separate layers.

They should sit behind/around the person like Canva.

Suggested class setup:

```css
.scene01-photo {
  position: absolute;
  object-fit: contain;
  pointer-events: none;
  filter: drop-shadow(0 10px 14px rgba(0, 0, 0, 0.24));
}

.scene01-photo--maker {
  left: 923px;
  top: -4px;
  width: 295px;
  z-index: 12;
  transform: rotate(-8deg);
}

.scene01-photo--wood {
  left: 1135px;
  top: 47px;
  width: 290px;
  z-index: 11;
  transform: rotate(7deg);
}

.scene01-photo--drums {
  left: 1065px;
  top: 290px;
  width: 310px;
  z-index: 13;
  transform: rotate(0deg);
}

.scene01-photo--right-lower {
  left: 1284px;
  top: 498px;
  width: 245px;
  z-index: 10;
  transform: rotate(0deg);
}

.scene01-photo--hands {
  left: 493px;
  top: 646px;
  width: 250px;
  z-index: 35;
  transform: rotate(8deg);
}
```

Make sure the title/person composite has `z-index: 30`, so the person sits over some right-side photos where needed.

---

## Audio patch

The latest audio design is acceptable and can be kept, but move/scale it to the coordinate map.

Target:

```css
.scene01-audio-wrap {
  position: absolute;
  left: 134px;
  top: 666px;
  width: 230px;
  height: 86px;
  z-index: 50;
}
```

Keep:
- label
- waveform bars
- thin progress line
- previous/play/next mini icons
- warm circular play/pause button

Do not autoplay audio.

If no audio exists, clicking should still toggle visual state and not crash.

Keep TODO:

```txt
TODO: replace with real narration audio at /audio/slide01-narration.mp3
```

---

## Animation requirements after patch

Keep the scroll architecture, but do not let animation break alignment.

Use nested wrappers:

```txt
scene01-scale-shell        handles cover scaling only
  scene01-stage            fixed 1366x768 coordinate system
    scene01-bg-layer       subtle parallax allowed
    scene01-photo layers   subtle stagger/parallax allowed
    title-person-composite entrance animation allowed
    text/audio layers      entrance animation allowed
```

Do not animate `left/top/width/height`.

Animate only:

```txt
opacity
transform
```

Entrance feel:
- background fade/scale
- polaroids stagger in
- title/person composite fades/slides from right only very slightly
- CUNG TRẦM fades down
- subtitle/paragraph/audio fade up
- during scroll out, the whole stage can fade/translate subtly

Important: the composite should not move so much that the instrument stops matching the `X`.

---

## Mobile behavior

For mobile, the desktop coordinate frame can still be used with cover scaling, but add a mobile override if readability is poor.

Below `768px`:
- Keep cover-scale frame, but allow more vertical scroll.
- Hide the least important right-side polaroids if they crowd the view.
- Keep the audio control tappable.
- If the composite crops too much, switch mobile scale from cover to a controlled contain-with-crop strategy:
  - width-based scale for portrait
  - stage shifted slightly left so the title remains visible
  - person can be partially cropped on the right

Do not rewrite the hero as a separate mobile design unless necessary.

---

## Required verification

After patching:

```bash
cd /home/quang/Documents/brief-1/project
npm run build
```

Then run:

```bash
cd /home/quang/Documents/brief-1/project
npm run dev
```

Open the shown local URL and compare against:

```txt
/home/quang/Documents/brief-1/slide1.png
```

Checklist:
- No empty "hở" feeling around the main composition.
- The `ĐÀO XÁ` + instrument-X + person alignment matches Canva because it uses the composite layer.
- `CUNG TRẦM` sits above the main title, not too high/low.
- Subtitle sits under the main title, not too close to paragraph.
- Paragraph uses full text.
- Audio remains visually good and is at the lower-left reference position.
- Build passes.

---

## Required report

Create:

```txt
/home/quang/Documents/brief-1/SLIDE01_CANVA_LAYER_PATCH_REPORT.md
```

Also copy it inside the project:

```txt
/home/quang/Documents/brief-1/project/SLIDE01_CANVA_LAYER_PATCH_REPORT.md
```

Report must include:

1. Files changed.
2. Whether `bản chữ & hình.png` was converted to WebP or kept as PNG.
3. Confirmation that the visible main title now comes from the Canva composite layer.
4. Confirmation that the giant SVG was not embedded.
5. Exact run/build commands.
6. Build result.
7. Any remaining visual TODOs.

---

## Do not do

- Do not rebuild the entire project.
- Do not code future scenes.
- Do not embed `/home/quang/Documents/brief-1/làng đàn Đào Xá/1.svg`.
- Do not use `slide1.png` as the whole hero background.
- Do not keep the visible fake HTML `ĐÀO  Á` title on top of the composite.
- Do not let the stage use contain scaling with large empty borders.
- Do not autoplay audio.
