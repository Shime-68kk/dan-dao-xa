# Scene06 Part 2 Vertical Title Style + Group 3 Report

## Scope

- Patched only Scene06 Part 2 vertical title rendering/styling.
- Changed Group 3 left title text to `GỖ` / `THÔ`.
- Group 1 and Group 2 card/note layouts were not changed.
- Group 3 card/note/flower layout was not changed.
- Group 4 / Bước 9 + quote, pin/scroll logic, card crops, and note text content were not changed.

## Files Changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.jsx`
- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.css`

## Title Component/Class

- Added `VerticalSceneTitle` in `Scene06CraftSteps.jsx`.
- Base class: `.scene06-steps__title`
- Line class: `.scene06-steps__title-line`
- Group 3 modifier: `.scene06-steps__title--group-3`

## Title Text Confirmation

- Groups 1 and 2 keep:
  - `CÁC`
  - `BƯỚC`
  - `LÀM`
  - `ĐÀN`
- Group 3 now shows:
  - `GỖ`
  - `THÔ`
- Group 3 no longer inherits `CÁC BƯỚC LÀM ĐÀN`.

## Final Typography

- Font family: `var(--font-client-playfair, "Playfair Display SC", "Playfair Display", "Times New Roman", serif)`
- Font size: `calc(51.3px * var(--scene06-steps-scale, 1))`
- Font weight: `700`
- Line height: `1.18`
- Letter spacing: `-0.015em`

## Gradient + Shadow Values

Title shadow:

```css
text-shadow:
  0 1px 0 rgba(255, 239, 205, 0.26),
  0 4px 10px rgba(0, 0, 0, 0.22),
  0 12px 22px rgba(0, 0, 0, 0.28);
```

Line gradient:

```css
background: linear-gradient(
  90deg,
  rgba(255, 248, 232, 0.98) 0%,
  rgba(244, 214, 174, 0.96) 42%,
  rgba(166, 120, 78, 0.74) 78%,
  rgba(244, 226, 196, 0.88) 100%
);
```

Line variation:

- Line 1: `brightness(1.04)`
- Line 2: `brightness(1.01)`
- Line 3: `brightness(0.98)`
- Line 4: `opacity: 0.58`, `brightness(0.9)`

## Group 3 Title Placement

- `.scene06-steps__title--group-3`
- `left: 86px` on the 1366 stage
- `top: 190px` on the 1366 stage

This keeps `GỖ THÔ` clear of the lower-left flower ornament and the B7/B8 notes.

## QA

Desktop 1366 source QA:

- Group 1/2 title text remains `CÁC BƯỚC LÀM ĐÀN`.
- Group 3 title text switches to `GỖ THÔ`.
- Group 1/2 layout data was not changed.
- Group 3 B7/B8 layout data was not changed.
- Title style is now warm cream/gold with a subtle shadow/gradient instead of flat white.

Mobile 390 source QA:

- Title remains inside the scaled 1366 artboard model.
- Group 3 title scales with `--scene06-steps-scale`.
- No independent mobile title layout was introduced.

## Build / Browser QA Note

No `package.json` was found under `/home/quang/Documents/brief-1` with `find -maxdepth 8`, so npm build/browser QA could not be run from this project snapshot.
