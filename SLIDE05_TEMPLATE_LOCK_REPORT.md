# Slide05 Template Lock Report

## Asset dimensions

- `Slide 5/nền infographic.png`: `2903 x 4512`, RGB
- `Slide 5/tiêu đề.png`: `2903 x 1632`, RGBA
- `src/assets/page01/scene05/scene05-title-cropped.png`: `2124 x 774`, RGBA
- `thamkhao5-1.png`: `1219 x 892`, RGBA
- `thamkhao5-2.png`: `1219 x 892`, RGBA

## `debugSlide5BgOnly=1` audit

Added `?debugSlide5BgOnly=1`. In this mode Scene05 renders the template image plus the corrected cropped title while hiding all visible HTML text overlays inside the infographic panel. This allows the raw Canva/template scaffold to be checked directly.

The template already contains card frames, number badges, icons, orange pill labels, metric icons, large metric numbers, metric captions, beige insight box, final quote frame, and the upper instrument group.

## Visible overlays removed

- Removed remaining metric caption HTML overlays.
- Kept card badge/icon/pill overlays removed.
- Kept large metric number/icon overlays removed.
- Kept extra small đàn overlay removed.

## Overlays remaining and why

Visible HTML overlays remain only for text that is not fully baked into the template/reference scaffold:

- Cropped title image layer
- Intro paragraph
- Top factor labels
- `4 ÁP LỰC THU HẸP`
- Pressure card title/body text
- `SO SÁNH LỰA CHỌN VIỆC LÀM`
- Comparison table text
- Beige insight paragraph
- Final quote

## Cropped title

`scene05-title-cropped.png` is still used. The original full-width `tiêu đề.png` is not rendered as a `1366 x 768` layer.

## Stage size and scaling

- Stage: `1366 x 2123`
- Template render: `1366 x 2123`, `object-fit: fill`
- Scaling: existing `useWidthScale(1366)`

## Reference comparison notes

Compared against `thamkhao5-1.png` and `thamkhao5-2.png` visually. The references confirm:

- Top/card/table/metric decorative scaffolds should come from the template.
- Orange pill labels and metric captions are already part of the image layer.
- The remaining live overlays correspond to text areas that must be visible in the final reference but are not fully present in the raw template.

## Build root found by `find`

Command run:

```bash
find /home/quang/Documents/brief-1 -maxdepth 5 -name package.json -print
```

No `package.json` was found.

## Build result

- `npm run build`: failed.
- Reason: `/home/quang/Documents/brief-1/project` has no `package.json`, so npm reports `Missing script: "build"`.

## Remaining TODOs

- Restore/provide the real package root with `package.json`, then rerun `npm run build`.
- Use `?debugSlide5BgOnly=1` and `?debugSlide5=1` in a browser once the dev server is available for final pixel QA.
