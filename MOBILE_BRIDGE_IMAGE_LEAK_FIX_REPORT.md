# Mobile Bridge Image Leak Fix Report

## Leaking Image

The leaking image was rendered by:

```txt
src/pages/Page01Story/Page01Story.jsx
```

Asset:

```txt
src/assets/page01/shared/bridge-hands-photo.webp
```

This asset was converted from the original `Slide mở đầu/20+.png` bridge/sticker photo.

## Old Positioning

The old wrapper was `.page01-bridge-hands`, rendered directly at page level after Scene01:

```css
position: absolute;
top: calc(100svh - 122px);
```

Mobile used:

```css
top: calc(100svh - 88px);
```

After the Canva-fit recovery, Scene01 at 390px is only about 219px tall, but `100svh - 88px` placed the sticker around y=756px. That pushed it into later scene territory around Scene03/Scene04.

## New Scoped Positioning

Added a dedicated transition wrapper:

```txt
.scene01-scene02-bridge
```

It is rendered only between Scene01 and Scene02.

Desktop:

```css
height: 190px;
margin-top: -122px;
margin-bottom: -68px;
overflow: clip;
contain: layout paint;
```

Mobile:

```css
height: 132px;
margin-top: -58px;
margin-bottom: -74px;
overflow: clip;
contain: layout paint;
```

The image is now positioned locally inside that seam wrapper:

```css
top: 0;
```

No `position: fixed` is used.

## Stacking / Containment

- The bridge layer is clipped to the Scene01→Scene02 seam.
- Scene03 and Scene04 keep clean stacking contexts through `position: relative`, `z-index: 2`, and `isolation: isolate`.
- The bridge wrapper ends before Scene03 begins, so it cannot render above the timeline or chart.

## Mobile 390px QA

Viewport:

```txt
390 x 844
```

Results:

- `scrollWidth`: 390
- `innerWidth`: 390
- overflow: `0px`
- bridge wrapper: y=161, height=132, bottom=293
- Scene01: bottom=219
- Scene02: y=219, bottom=439
- Scene03: y=439
- Scene04: y=659
- bridge ends before Scene03: yes

Screenshot checked:

```txt
/tmp/mobile390-scene03.png
```

The sticker photo no longer appears over Scene03 timeline or Scene04 chart.

## Desktop 1366px QA

Viewport:

```txt
1366 x 768
```

Results:

- `scrollWidth`: 1351
- `innerWidth`: 1366
- overflow: none
- bridge wrapper: y=646, height=190, bottom=836
- Scene01: bottom=768
- Scene02: y=768
- Scene03: y=1536
- bridge ends before Scene03: yes

Desktop seam behavior is preserved: the sticker still overlaps the Scene01→Scene02 boundary, but it is now clipped and scoped to that local transition layer.
