# Scene08 Part 1 Strict Visual Repair Report

## Files Changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene08LastLink/Scene08LastLink.jsx`
- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene08LastLink/Scene08LastLink.css`

No Scene01-Scene07 files were changed. No Scene08 Part 2 content was added.

## Font Audit

Command run:

```bash
find /home/quang/Documents/brief-1 -type f \( -iname "*.ttf" -o -iname "*.otf" -o -iname "*.woff" -o -iname "*.woff2" \) | grep -Ei "roca|sg85|hong|aurora|playfair|cour|cormorant|bastliga" || true
```

Found:

- Aurora: `src/assets/fonts/VLAURORAAGED.OTF`
- Playfair Display: `src/assets/fonts/Playfair_Display/...`
- Courier: `src/assets/fonts/cour*.ttf`
- Cormorant SC: `src/assets/fonts/Cormorant_SC/...`
- Bastliga: `src/assets/fonts/1FTV-VIP-Bastliga-One-Regular.otf`

Not found:

- `ROCA ONE`
- `SG85-HONG...`

The CSS keeps `ROCA ONE` and `SG85-HONG` first in the relevant font stacks, with local display fallbacks.

## Title Coordinates

Final title group:

- group: `x=70`, `y=42`, `width=430`, `height=255`
- treble clef artboard position: `x=58`, `y=72`
- treble clef size: `106px`
- `MẮT XÍCH`: artboard `x=145`, `y=43`, `font-size=29.2`
- `CUỐI CÙNG`: artboard `x=145`, near `y=94`, `font-size=44.2`
- `của`: artboard `x≈280`, Aurora stack, `font-size=29.6`, `rotate=-2deg`
- `DÒNG HỌ BỐN ĐỜI`: artboard `x=145`, near `y=203`, `font-size=30`

Title style now uses a diagonal warm gold gradient:

```css
linear-gradient(115deg,
  rgba(255,255,255,0.55) 0%,
  rgba(255,224,178,0.35) 18%,
  rgba(244,178,103,0.95) 36%,
  rgba(176,89,42,0.92) 68%,
  rgba(255,205,139,0.9) 100%)
```

## Artist Lockup

The old single SVG `textPath` was removed/replaced.

Final artist lockup:

- lockup: `x=715`, `y=395`, `width=610`, `height=240`
- `NGHỆ NHÂN`: inside lockup `x=180`, `y=58`, `font-size=30`, `rotate=-1deg`
- word SVG: inside lockup `x=0`, `y=58`, `width=620`, `height=170`

Final word transforms:

- `ĐÀO`: SVG `x=20`, `y=120`, `rotate=-12deg`, `font-size=58`
- `ANH`: SVG `x=175`, `y=100`, `rotate=-3deg`, `font-size=58`
- `TUẤN`: SVG `x=335`, `y=97`, `rotate=8deg`, `font-size=58`
- small `CUỐI CÙNG`: inside lockup `x=455`, `y=28`, `font-size=24`, `rotate=25deg`

Name style uses ROCA-first stack:

```css
font-family: "ROCA ONE", "Roca One", "Roca", var(--font-client-cormorant-sc, ...);
```

## Tilted Labels

Final label transforms:

- `1968`: `x=82`, `y=435`, `font-size=43`, `rotate=-12deg`
- `THÔN ĐÀO XÁ`: `x=510`, `y=465`, `font-size=27.5`, `rotate=-10deg`
- `ĐỜI THỨ 4`: `x=512`, `y=608`, `font-size=25.5`, `rotate=11deg`
- `CUỐI CÙNG`: handled inside artist lockup, `rotate=25deg`

These labels use the shared raised gold/brown treatment.

## Quote Coordinates

Final staff quote:

- `x=142`
- `y=1018`
- `width=590`
- `font-size=17`
- `line-height=1.54`
- color `rgba(44, 27, 20, 0.92)`
- `letter-spacing=0.01em`

Manual line breaks and customer text were not changed.

## Text Integrity

All customer text remains unchanged. No OCR text was added.

## Part 2 Confirmation

No lower Part 2 content was added:

- no Đào Văn Soạn portrait
- no `TRUNG BÌNH 8-10 TIẾNG / NGÀY`
- no lower Part 2 paragraphs

## QA Notes

1366 desktop source QA:

- Title group uses stricter reference coordinates.
- `của` uses Aurora stack and `29.6px`.
- Treble clef is smaller and less dominant.
- Single textPath name was replaced with word-level arched composition.
- `NGHỆ NHÂN` now sits inside the artist lockup.
- Small `CUỐI CÙNG` is close to `TUẤN` and tilted diagonally.
- Quote coordinates/line-height remain tuned for staff-paper alignment.

1536 desktop source QA:

- Scene08 full-width scale logic was not changed.
- Layout remains proportional through `--scene08-scale`.

390 mobile source QA:

- No alternate mobile layout was introduced.
- Same artboard scales down.

## Build / Browser QA Note

No `package.json` was found under `/home/quang/Documents/brief-1` with `find -maxdepth 8`, so npm build/browser screenshot QA could not be run from this project snapshot.
