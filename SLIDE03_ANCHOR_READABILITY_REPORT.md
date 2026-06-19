# Slide03 Anchor Readability Report

## Files changed

- `src/sections/page01/Scene03Timeline/Scene03Timeline.jsx`
- `src/sections/page01/Scene03Timeline/Scene03Timeline.css`
- `src/sections/page01/Scene03Timeline/scene03.timeline.js`
- `src/sections/page01/Scene03Timeline/scene03.motion.js`
- `src/assets/page01/scene03/music-staff-strip.png`

## Staff preprocessing

- Source: `/home/quang/Documents/brief-1/Slide 2. Hai thế kỉ thăng trầm/khuôn nhạc.png`
- Source size: `2903x1632`
- Alpha bounds before preservation crop: `2844x168+48+696`
- Output size: `2903x224`
- Horizontal width was preserved at `2903px`; only vertical empty space was cropped.
- Vertical crop used: `2903x224+0+668`

## Anchor model

- `STAFF_SOURCE_WIDTH` is `2903`, matching the real source image width in this workspace.
- Milestones now use deterministic `sourceAnchorX` values in `scene03.timeline.js`.
- Rendered anchors are computed with:

```js
anchorX = (sourceAnchorX / STAFF_SOURCE_WIDTH) * TRACK_WIDTH;
```

- Milestone text groups remain inside `.scene03-moving-track`, so text moves with the staff.
- `NĂM 2009` remains `hasNote: false` and is anchored to `sourceAnchorX: 2069`, a blank staff section. No fake note was added.

## Motion

- Autoplay behavior was preserved.
- Scene03 still starts only when it enters the viewport.
- Desktop:
  - Duration: `28000ms`
  - Track width: `4300px`
  - Start formula: `viewportWidth * 0.76 - firstAnchor`
  - End formula: `viewportWidth * 0.42 - lastAnchor`
- Mobile:
  - Duration: `22000ms`
  - Track width: `3600px`
  - Same start/end formulas with mobile track width.

## Typography

- Heading style was preserved.
- Milestone label text increased from `13px` to `15px` on desktop.
- Milestone body text increased from `13px` to `14px` on desktop.
- Mobile labels are `13px`; mobile body text is `12.5px`.
- Added Google font import for `Courier Prime` and `Special Elite`.
- Milestone label stack:
  - `"TNH XUONG", "TNH Xuong", "Courier Prime", "Special Elite", "Courier New", Courier, monospace`
- Body stack:
  - `"Courier Prime", "Courier New", Courier, monospace`

## Font research

- `find /home/quang/Documents/brief-1 \( -iname "*.ttf" -o -iname "*.otf" -o -iname "*TNH*" -o -iname "*XUONG*" -o -iname "*Xuong*" \)` returned no local font files.
- `fc-match "TNH XUONG"` -> `NotoSans-Regular.ttf: "Noto Sans" "Regular"`
- `fc-match "Courier Prime"` -> `NotoSans-Regular.ttf: "Noto Sans" "Regular"`
- `fc-match "Special Elite"` -> `NotoSans-Regular.ttf: "Noto Sans" "Regular"`
- No exact local `TNH XUONG` font was available, so the CSS fallback stack is used.

## Positioning

- Staff/timeline was moved lower:
  - Desktop `.scene03-track-window` top changed from `238px` to `305px`.
  - Mobile top is now `34vh`.
- Milestone text top changed to `154px` desktop and `132px` mobile.
- Widths were tuned per milestone before any x nudging.

## Debug support

- Added `?debugScene3=1`.
- When enabled, Scene03 renders red vertical anchor lines inside the moving track at each computed anchor.
- Normal URL does not show debug anchor lines.

## Verification

- `npm run build` passed.
- Build details:
  - Vite `v8.0.16`
  - `1596 modules transformed`
  - Build completed successfully in `313ms`
- Dev server smoke check:
  - `npm run dev -- --host 127.0.0.1 --port 5173`
  - Port `5173` was in use; Vite served at `http://127.0.0.1:5174/`
  - `curl -I http://127.0.0.1:5174/` returned HTTP `200`
  - `curl -I "http://127.0.0.1:5174/?debugScene3=1"` returned HTTP `200`

## Notes

- Scene01 and Scene02 were not edited.
- The giant SVG was not embedded.
- Scene03 still uses one single moving staff and remains time-based autoplay, not scroll-driven.
