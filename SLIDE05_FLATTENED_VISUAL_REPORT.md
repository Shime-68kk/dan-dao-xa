# Slide05 Flattened Visual Report

## Visual source used

Used a stitched flattened visual from the two approved references:

- `/home/quang/Documents/brief-1/thamkhao5-1.png`
- `/home/quang/Documents/brief-1/thamkhao5-2.png`

The second reference was cropped from `y=58` to remove the duplicated comparison title area, then appended below the first reference.

Output:

- `src/assets/page01/scene05/slide05-flattened.png`

## Asset dimensions

- `thamkhao5-1.png`: `1219 x 892`
- `thamkhao5-2.png`: `1219 x 892`
- Cropped lower reference: `1219 x 834`
- `slide05-flattened.png`: `1219 x 1726`

## Old visible overlays removed

Removed all visible manual Scene05 overlays for:

- top factor labels
- pressure section title
- pressure card titles/bodies
- comparison section title
- table headers/rows
- metric captions
- insight paragraph
- final quote
- cropped title overlay

Semantic copy is retained only inside `.scene05-sr-only`.

## Title handling

The title is embedded in `slide05-flattened.png`, so Scene05 no longer renders a separate title image.

## Final stage

- Stage width: `1366px`
- Stage height: `1934px`
- Scaling: existing `useWidthScale(1366)`
- Visual render: one `.scene05-flat-visual` image at `1366px x 1934px`

## Debug modes

- `?debugSlide5BgOnly=1`: shows the flattened visual with no old HTML overlay text.
- `?debugSlide5=1`: shows a grid/outline around the single flattened visual stage only.

## Mobile behavior

Mobile uses the same flattened visual scaled to viewport width with `transform-origin: top left`, so there is no horizontal overflow and no separate visible text overlay system.

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
- Browser QA once a dev/build environment is restored.
