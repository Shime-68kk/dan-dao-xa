# Scene08 Part 1 Precision Repair Report

## Files Changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene08LastLink/Scene08LastLink.jsx`
- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene08LastLink/Scene08LastLink.css`
- Added debug-only reference overlays:
  - `/home/quang/Documents/brief-1/project/src/assets/page01/scene08/scene08-ref-1.png`
  - `/home/quang/Documents/brief-1/project/src/assets/page01/scene08/scene08-ref-2.png`

## Reference Dimensions

- `thamkhao8-1.png`: `1352 x 877`
- `thamkhao8-2.png`: `1352 x 877`
- Scene08 artboard: `1366 x 1774`
- Reference-to-artboard scale factor: `1366 / 1352 = 1.01036`

## Font Audit

- Playfair Display: found and loaded as `Client Playfair Display`.
- Project Courier: found and loaded as `Client Courier New`.
- Cormorant SC: found and loaded as `Client Cormorant SC`.
- Bastliga and Aurora display/script fonts: found and loaded.
- `ROCA ONE`: no matching font file found under `src/assets/fonts`.
- `SG85-HONG...`: no matching font file found under `src/assets/fonts`.

Because ROCA ONE and SG85 were not present, the implementation keeps `"ROCA ONE"` first in the font stack and falls back to local Cormorant/Playfair-style display fonts.

## Title Group

Old title group:

- group `x=72`, `y=48`
- clef `x=0`, `y=22`, `font-size=126`
- title text `x=73`, `y=0`
- `CUỐI CÙNG` margin-top `14`
- `của` margin-top `2`, size `34`
- `DÒNG HỌ BỐN ĐỜI` margin-top `18`, size `29`
- title gradient was horizontal

New title group:

- group remains `x=72`, `y=48`
- clef `x=0`, `y=28`, `font-size=120`
- title text remains `x=73`, `y=0`
- `CUỐI CÙNG` margin-top `12`
- `của` margin-top `0`, size `38`
- `DÒNG HỌ BỐN ĐỜI` margin-top `15`, size `30`
- title gradient is now vertical warm gold:
  `#ffe3b4 -> #efb36f -> #a95f33`
- title shadow is now:
  `0 2px 0 rgba(91, 42, 22, 0.8), 0 5px 10px rgba(0,0,0,0.25)`

## Artist Identity

Old:

- `NGHỆ NHÂN`: `x=850`, `y=452`, `font-size=30`
- curved name SVG: `x=710`, `y=462`, `width=520`, `height=130`
- old arc path: `M24,96 C150,26 368,24 500,94`
- name font-size `52`, stroke `2`
- `CUỐI CÙNG`: `x=1140`, `y=420`

New:

- `NGHỆ NHÂN`: `x=850`, `y=444`, `font-size=30`
- curved name SVG: `x=722`, `y=468`, `width=560`, `height=130`
- new arc path: `M35 84 C155 58 395 58 525 84`
- name font stack: `"ROCA ONE", "Roca One", "Roca", var(--font-client-cormorant-sc...)`
- name font-size `44.5`, stroke `1.1`
- name shadow uses a warm brown 3D drop shadow
- `CUỐI CÙNG`: `x=1130`, `y=414`, `rotate=12deg`

## Rotated Labels

Shared label style now uses a stronger warm 3D treatment:

```css
text-shadow:
  0 2px 0 #7a351c,
  0 4px 0 rgba(92, 42, 18, 0.78),
  0 8px 12px rgba(0, 0, 0, 0.32);
```

New label coordinates:

- `1968`: `x=88`, `y=438`, `font-size=43`, `rotate=-10deg`
- `THÔN ĐÀO XÁ`: `x=516`, `y=470`, `font-size=27.5`, `rotate=-7deg`
- `ĐỜI THỨ 4`: `x=522`, `y=600`, `font-size=25.5`, `rotate=8deg`
- `CUỐI CÙNG`: `x=1130`, `y=414`, `font-size=23`, `rotate=12deg`

## Quote Alignment

Old quote:

- `x=145`
- `y=1028`
- `width=570`
- `font-size=17`
- `line-height=1.58`
- color `#402217`

New quote:

- `x=142`
- `y=1018`
- `width=590`
- `font-size=17`
- `line-height=1.54`
- color `rgba(44, 27, 20, 0.92)`
- `letter-spacing=0.01em`

The quote keeps the same manual line breaks and is nudged up/left with tighter line-height to sit more cleanly on the staff-paper lines.

## Debug Overlay

Added optional debug mode:

```txt
?debugScene08Ref=1
```

When enabled:

- `thamkhao8-1.png` appears over the top viewport at `y=0`.
- `thamkhao8-2.png` appears over the continuation viewport at `y=887`.
- Overlay opacity is `0.35`.
- Overlay has `pointer-events: none`.
- It is disabled by default.

## Text Integrity

Customer text content was not changed. No OCR text was introduced.

## Part 2 Confirmation

No lower Part 2 content was added:

- no Đào Văn Soạn portrait card
- no `TRUNG BÌNH 8-10 TIẾNG / NGÀY`
- no lower paragraphs from the bottom of `thamkhao8-2.png`

## QA

Desktop 1366 source QA:

- Title block has warmer dimensional styling and closer `của` visibility.
- Curved `ĐÀO ANH TUẤN` uses a shallower arc and reduced font size.
- Rotated labels have stronger reference-like gold/brown depth.
- Quote coordinates and line-height were adjusted for staff-line alignment.
- Debug overlay can be enabled for visual comparison.

Desktop 1536 source QA:

- Existing full-width scaled artboard logic was not changed.
- Positions remain proportional through `--scene08-scale`.

Mobile 390 source QA:

- Same artboard scales down.
- No alternate mobile layout or duplicate text was introduced.

## Build / Browser QA Note

No `package.json` was found under `/home/quang/Documents/brief-1` with `find -maxdepth 8`, so npm build/browser QA could not be run from this project snapshot.
