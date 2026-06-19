# Scene08 Part 1 Lockup Repair Report

## Scope
- Patched Scene08 Part 1 typography/positioning only.
- Files changed:
  - `/home/quang/Documents/brief-1/project/src/sections/page01/Scene08LastLink/Scene08LastLink.jsx`
  - `/home/quang/Documents/brief-1/project/src/sections/page01/Scene08LastLink/Scene08LastLink.css`
- Scene01-Scene07 were not touched.
- Scene08 Part 2 was not added.
- Customer paragraph/quote text was not rewritten.
- The 1366px full-width scale model was not changed.

## Asset And Font Audit
- `slide 8` contains:
  - `thamkhao8-1.png`
  - `thamkhao8-2.png`
  - `ảnh 1.png`
  - `ảnh 2.png`
  - `ảnh 3.png`
- No separate transparent/precomposed artist-name typography asset was found in `slide 8`.
- `ROCA ONE` font file was not found.
- `SG85-HONG` font file was not found.
- The CSS keeps `ROCA ONE` / `SG85-HONG` first in the font stacks, then falls back to loaded local display fonts.

## Left Title Repair
- Title group remains at:
  - `left: 70px`
  - `top: 42px`
  - `width: 430px`
  - `height: 255px`
- Title text was brightened with a cream/gold/orange gradient and dimensional shadow.
- `của` now uses:
  - `font-family: var(--font-client-aurora, "Client VL Aurora Aged", "VL Aurora", cursive)`
  - `font-size: 29.6px`
  - `margin-left: 135px`
  - `margin-top: 26px`
- Treble clef now uses:
  - local x/y inside title group: `left: -11px`, `top: 28px`
  - artboard x/y: approximately `59px`, `70px`
  - `font-size: 100px`
  - `color: #f4bd7b`
  - `opacity: 0.96`

## Artist Lockup Repair
- Removed the detached word-level visual treatment for `ĐÀO / ANH / TUẤN`.
- `ĐÀO ANH TUẤN` is now rendered as one continuous upward-arched SVG `textPath`.
- Artist lockup group:
  - `left: 715px`
  - `top: 405px`
  - `width: 620px`
  - `height: 230px`
- `NGHỆ NHÂN`:
  - local `left: 168px`
  - local `top: 38px`
  - artboard x/y: approximately `883px`, `443px`
  - `font-size: 30px`
- Name SVG:
  - local `left: -12px`
  - local `top: 45px`
  - artboard x/y: approximately `703px`, `450px`
  - `width: 640px`
  - `height: 176px`
- SVG path:
  - `M40 128 C180 52 455 52 610 112`
- SVG text:
  - `textLength="540"`
  - `lengthAdjust="spacingAndGlyphs"`
  - `startOffset="50%"`
  - `textAnchor="middle"`
- Small `CUỐI CÙNG`:
  - local `left: 450px`
  - local `top: 14px`
  - artboard x/y: approximately `1165px`, `419px`
  - `font-size: 24px`
  - `transform: rotate(27deg)`
- Confirmation: the artist name is no longer rendered as separated decorative words.

## Artisan Labels
- `1968`:
  - `left: 86px`
  - `top: 440px`
  - `font-size: 43px`
  - `rotate(-12deg)`
- `THÔN ĐÀO XÁ`:
  - `left: 500px`
  - `top: 462px`
  - `font-size: 27.5px`
  - `rotate(-9deg)`
- `ĐỜI THỨ 4`:
  - `left: 515px`
  - `top: 603px`
  - `font-size: 25.5px`
  - `rotate(11deg)`

## QA Notes
- Debug overlay support remains available via `?debugScene08Ref=1`.
- `find /home/quang/Documents/brief-1 -maxdepth 8 -name package.json -print` returned no package manifest.
- Because there is no `package.json` in the project tree, `npm run build` and browser/dev-server QA could not be run from this workspace state.
