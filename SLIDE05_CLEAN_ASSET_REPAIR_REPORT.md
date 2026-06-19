# Slide05 Clean Asset Repair Report

## Clean and reference asset dimensions

- Clean `Slide 5/nền infographic.png`: `2903 x 4512`, RGB
- Clean `Slide 5/tiêu đề.png`: `2903 x 1632`, RGBA
- Clean `Slide 5/ảnh đàn tách nền.png`: `264 x 195`, RGBA
- Project `scene05-infographic-template.png`: `2903 x 4512`, RGB
- Project `scene05-title-cropped.png`: `2124 x 774`, RGBA
- Reference-only `thamkhao5-1.png`: `1219 x 892`, RGBA
- Reference-only `thamkhao5-2.png`: `1219 x 892`, RGBA

## Removed screenshot-derived imports/assets

- Removed the production import of `slide05-flattened.png`.
- Deleted `src/assets/page01/scene05/slide05-flattened.png`.
- Verified no `thamkhao5`, `slide05-flat`, `flattened`, or `flat-visual` references remain under `src`.

## Final production image used

Scene05 now uses only the clean project asset:

- `src/assets/page01/scene05/scene05-infographic-template.png`

This comes from `/home/quang/Documents/brief-1/project/Slide 5/nền infographic.png`.

## Title handling

The clean infographic does not include the top title, so Scene05 renders the clean cropped title separately:

- `src/assets/page01/scene05/scene05-title-cropped.png`

## Reference-only confirmation

`thamkhao5-1.png` and `thamkhao5-2.png` are no longer imported, copied, stitched, or rendered by the app. They remain reference-only.

## Debug mode behavior

- `?debugSlide5BgOnly=1`: shows only clean production image layers and semantic hidden text.
- `?debugSlide5=1`: outlines the single clean visual stage; no old text overlay boxes remain.

## Build root found

Command run:

```bash
find /home/quang/Documents/brief-1 -maxdepth 5 -name package.json -print
```

No `package.json` was found.

## Build result

- `npm run build`: failed.
- Reason: `/home/quang/Documents/brief-1/project` has no `package.json`, so npm reports `Missing script: "build"`.

## Remaining TODOs

- The clean `nền infographic.png` appears to be a scaffold/incomplete Canva export rather than the full final text-filled Slide 5 visual. A clean Canva export of the completed Slide 5 is required, preferably PNG 2x/3x, PDF print, or SVG.
- Restore/provide the real package root with `package.json`, then rerun `npm run build`.
