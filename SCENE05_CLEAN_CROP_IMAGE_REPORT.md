# Scene05 Clean Crop Image Report

## Crop Source

Clean Canva export source:

```txt
/home/quang/Documents/brief-1/làng đàn Đào Xá (1)/1.png
```

Reference-only screenshots `thamkhao5-1.png` and `thamkhao5-2.png` were not used in production.

## Crop Coordinates

Final crop command:

```bash
convert "/home/quang/Documents/brief-1/làng đàn Đào Xá (1)/1.png" \
  -crop 1366x2100+0+3720 +repage \
  "/home/quang/Documents/brief-1/project/src/assets/page01/scene05/scene05-full.png"
```

Coordinates used:

```txt
x = 0
y = 3720
width = 1366
height = 2100
```

Final production asset:

```txt
/home/quang/Documents/brief-1/project/src/assets/page01/scene05/scene05-full.png
```

Final image size:

```txt
1366 x 2100
```

File size:

```txt
1.8M
```

## Scene05 Files Changed

- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.jsx`
- `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.css`
- `src/assets/page01/scene05/scene05-full.png`

## Old HTML Overlays Removed

Removed the visible HTML reconstruction for:

- intro paragraph overlay
- top factor labels
- 4 pressure card text
- card/pill overlays
- comparison table text
- metric captions
- insight paragraph
- final quote
- old `.scene05-text-layer`
- old card/table/mobile-copy layout logic

Scene05 now renders only the clean cropped Canva image with a subtle reveal.

## Desktop QA

Checked at `1366 x 768` using Chromium.

Results:

- image natural size: `1366 x 2100`
- rendered width: `1351px` in browser viewport accounting for scrollbar
- no old overlay selectors found
- no `thamkhao5` production import
- no Canva UI, zoom icon, fullscreen icon, or browser UI visible
- no horizontal overflow

Screenshot captured:

```txt
/tmp/scene05-clean-desktop1366.png
```

## Mobile 390px QA

Checked at `390 x 844` using Chromium.

Results:

- `scrollWidth`: 390
- `innerWidth`: 390
- overflow: `0px`
- same image scales to viewport width
- no separate mobile layout
- no cropped Scene05 content
- no previous Scene01/Scene02 sticker image inside Scene05
- no old overlay selectors found

Screenshot captured:

```txt
/tmp/scene05-clean-mobile390.png
```

## Build Result

Package root search:

```bash
find /home/quang/Documents/brief-1 -maxdepth 5 -name package.json -print
```

Result: no `package.json` found.

Attempted from `/home/quang/Documents/brief-1/project`:

```bash
npm run build
```

Result: failed with `Missing script: "build"`.

Build remains blocked until the real package metadata/root is restored.
