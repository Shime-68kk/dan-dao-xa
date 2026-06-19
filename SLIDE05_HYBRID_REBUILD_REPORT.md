# Slide05 Hybrid Rebuild Report

## Strategy

Scene05 now uses the intended hybrid strategy: the clean Canva scaffold image provides shapes, icons, pills, frames, and metric graphics; bounded HTML text islands provide only the missing text.

## Screenshots are reference-only

Confirmed no production import or generated asset uses `thamkhao5-1.png`, `thamkhao5-2.png`, `slide05-flat`, or `flattened`.

## Visible overlays added

- Cropped clean title image
- Intro paragraph
- Top strip text labels
- `4 ÁP LỰC THU HẸP`
- Four bounded card title/body islands
- `SO SÁNH LỰA CHỌN VIỆC LÀM`
- Bounded comparison table text island
- Small metric captions
- Beige insight paragraph
- Final quote paragraph

## Baked-in elements not re-rendered

- Top strip icons
- Card number badges
- Card icons
- Orange pill backgrounds and labels
- Metric icons
- Large metric numbers
- Beige insight box
- Final quote frame
- Instrument group

## Title crop

The existing clean `scene05-title-cropped.png` is kept and rendered separately from the scaffold.

## Debug modes

- `?debugSlide5BgOnly=1`: hides the text layer and shows the clean scaffold/title.
- `?debugSlide5=1`: shows the stage grid/outline.
- `?debugSlide5TextBoxes=1`: outlines only bounded text islands in blue.

## Build root and result

Command run:

```bash
find /home/quang/Documents/brief-1 -maxdepth 5 -name package.json -print
```

No `package.json` was found.

`npm run build` failed from `/home/quang/Documents/brief-1/project` with `Missing script: "build"`.

## Remaining fine-tuning

- Browser QA is still needed once a dev/build package root is restored.
- Use `?debugSlide5TextBoxes=1` for final text-island alignment against the reference screenshots.
