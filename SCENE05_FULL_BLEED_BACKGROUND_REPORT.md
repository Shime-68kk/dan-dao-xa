# Scene05 Full-Bleed Background Report

## Wood Background Asset Used

Copied the existing project wood background:

```txt
/home/quang/Documents/brief-1/project/nền chủ đạo.png
```

to:

```txt
/home/quang/Documents/brief-1/project/src/assets/page01/common/main-wood-background.png
```

Asset size:

```txt
3586 x 2008
```

## CSS Changes

Changed `src/sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.css`.

Scene05 section now uses:

- `overflow-x: clip`
- wood background image
- `background-size: cover`
- `background-position: center top`
- `background-repeat: repeat-y`
- non-black fallback color `#2a130a`

The old narrow wrapper:

```css
width: min(100%, 1366px);
margin: 0 auto;
```

was replaced with full-width layout:

```css
width: 100%;
max-width: none;
margin: 0;
```

The image now uses:

```css
width: 100%;
max-width: none;
height: auto;
```

## Scene05 Visual Source

`scene05-full.png` is still the only visible Scene05 content image.

Current Scene05 does not render:

- `.scene05-text-layer`
- `.scene05-mobile-copy`
- card/table text overlays
- `thamkhao5` reference images
- screenshot-derived assets

## Desktop 1536px QA

Checked in Chromium at:

```txt
1536 x 864
```

Results:

- `innerWidth`: 1536
- `scrollWidth`: 1521
- horizontal overflow: none
- Scene05 image rendered width: 1521
- Scene05 section rendered width: 1521
- wood background active: yes
- old overlay count: 0
- no Vite error overlay
- no black side gutters visible

Screenshot:

```txt
/tmp/scene05-fullbleed-desktop1536.png
```

## Mobile 390px QA

Checked in Chromium at:

```txt
390 x 844
```

Results:

- `innerWidth`: 390
- `scrollWidth`: 390
- horizontal overflow: 0px
- Scene05 image rendered width: 390
- same Scene05 image scales to viewport width
- no crop
- no separate mobile layout
- old overlay count: 0

Screenshot:

```txt
/tmp/scene05-fullbleed-mobile390.png
```

## Build Result

Package root search:

```bash
find /home/quang/Documents/brief-1 -maxdepth 5 -name package.json -print
```

Result: no `package.json` found.

Attempted:

```bash
npm run build
```

from:

```txt
/home/quang/Documents/brief-1/project
```

Result: failed with `Missing script: "build"`.

Build remains blocked until the real package metadata/root is restored.
