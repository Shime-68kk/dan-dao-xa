# Slide03 Autoplay Patch Report

## Files changed

- `src/sections/page01/Scene03Timeline/Scene03Timeline.jsx`
- `src/sections/page01/Scene03Timeline/Scene03Timeline.css`
- `src/sections/page01/Scene03Timeline/scene03.timeline.js`
- `src/sections/page01/Scene03Timeline/scene03.motion.js`
- `src/hooks/useAutoplayTimeline.js`

## Behavior changes

- Scene03 staff movement is now time-based autoplay, not scroll-driven.
- Scene03 starts the autoplay only after the section enters the viewport via `useElementInView({ threshold: 0.35, rootMargin: "0px 0px -18% 0px" })`.
- `useScrollProgress` no longer controls Scene03 track movement and is not imported by `Scene03Timeline.jsx`.
- Desktop duration is `24000ms`; mobile duration is `20000ms`.
- The track moves right-to-left using requestAnimationFrame progress from `useAutoplayTimeline`.

## Layout changes

- Removed the top-right circular progress dots.
- Removed the separate bottom active card.
- Removed the center carousel-style focus line.
- Milestone title and description groups are now rendered inside `.scene03-moving-track`, so they travel together with the single music staff strip.
- Scene03 keeps one long horizontal music staff only; no stacked staff rows were created.
- Milestone 7, `NĂM 2009`, has `hasNote: false`; no added decorative note marker is rendered for it.

## Typography and reference

- Used `/home/quang/Documents/brief-1/thamkhaoslide3.png` as the typography/content reference.
- Milestone headings use:
  - `"TNH XUONG", "TNH Xuong", "Courier New", Courier, monospace`
  - `13px` desktop
- Description text uses:
  - `"Courier New", Courier, monospace`
  - `13px` desktop

## Font search

- `find /home/quang/Documents/brief-1 \( -iname "*.ttf" -o -iname "*.otf" -o -iname "*TNH*" -o -iname "*XUONG*" -o -iname "*Xuong*" \)` returned no matching local font files.
- `fc-match "TNH XUONG"` returned `NotoSans-Regular.ttf: "Noto Sans" "Regular"`.
- Because the exact font was unavailable, the requested CSS stack remains with Courier fallback.

## Desktop behavior

- Scene03 is a full-viewport autoplay scene: `height: 100svh`.
- Track width: `3900px`.
- Track travel: `920px` to `-2760px`.
- Milestone groups are positioned across the moving track at `[150, 555, 960, 1380, 1800, 2220, 2620, 3070, 3500]`.

## Mobile behavior

- Scene03 remains `100svh`.
- Autoplay still starts only after Scene03 enters the viewport.
- Mobile track width: `3300px`.
- Mobile track travel: `520px` to `-2600px`.
- Mobile milestone positions: `[130, 480, 830, 1190, 1540, 1900, 2260, 2630, 3000]`.
- Text scales to `12px` for milestone headings and descriptions.

## Reduced motion

- The autoplay hook is disabled when `prefers-reduced-motion: reduce` is active.
- Render progress is held at `0.35`.
- CSS pins the track to a readable reduced-motion transform and disables reveal transitions.

## Verification

- `npm run build` passed.
- Build details:
  - Vite `v8.0.16`
  - `1596 modules transformed`
  - Build completed successfully in `326ms`
- Dev server smoke check:
  - `npm run dev -- --host 127.0.0.1 --port 5173`
  - Port `5173` was in use; Vite served at `http://127.0.0.1:5174/`
  - `curl -I http://127.0.0.1:5174/` returned HTTP `200`

## Notes

- The giant SVG was not embedded.
- The existing clean `music-staff-strip.png` was reused; it is a transparent single strip sized `2880x204`.
