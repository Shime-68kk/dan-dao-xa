# Scene06 Part 2 Layout Repair Report

## Scope

Repaired Scene06 Part 2 / “Các bước làm đàn” only.

Scene01-Scene05 were not touched. Scene06 Part 1 was not changed.

## Files Changed

- `src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.jsx`
- `src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.css`
- `src/assets/page01/scene06/steps/cards/b1-card.png`
- `src/assets/page01/scene06/steps/cards/b2-card.png`
- `src/assets/page01/scene06/steps/cards/b3-card.png`
- `src/assets/page01/scene06/steps/cards/b4-card.png`
- `src/assets/page01/scene06/steps/cards/b5-card.png`
- `src/assets/page01/scene06/steps/cards/b6-card.png`
- `src/assets/page01/scene06/steps/cards/b7-card.png`
- `src/assets/page01/scene06/steps/cards/b8-card.png`
- `src/assets/page01/scene06/steps/cards/b9-card.png`

## Card Width

All B1-B9 cards now use the same CSS width:

```css
--step-card-width: 150px;
```

The source B*.png files were copied into same-size production card crops:

```txt
b1-card.png ... b9-card.png: 760 x 2460 each
```

This prevents uneven source canvases from making cards appear different sizes.

## Group Coordinates

Group 1:

```txt
B1 card: x 330, y 345
B1 note: x 505, y 210
B2 card: x 650, y 385
B2 note: x 820, y 275
B3 card: x 970, y 345
B3 note: x 1110, y 210
```

Group 2:

```txt
B4 card: x 300, y 250
B4 note: x 455, y 430
B5 card: x 620, y 235
B5 note: x 775, y 405
B6 card: x 940, y 250
B6 note: x 1095, y 395
```

Group 3:

```txt
B7 card: x 320, y 360
B7 note: x 485, y 235
B8 card: x 640, y 350
B8 note: x 805, y 230
B9 card: x 960, y 360
B9 note: x 1110, y 215
Quote paper: x 928, y 126
Flower ornament: x 1134, y 502
```

## Notes

Descriptions are now separate right-side bracket notes, not nested inside the card element.

Each note includes:

```jsx
<span className="scene06-steps__corner scene06-steps__corner--tl" />
<span className="scene06-steps__corner scene06-steps__corner--br" />
```

Corner color:

```css
rgba(255, 255, 255, 0.9)
```

Text colors:

```css
body: rgba(255, 246, 232, 0.94)
heading/highlight: #d09a56
title: #f2dfc8
floor band: rgba(222, 220, 197, 0.9)
```

## Pinned Scroll Implementation

The earlier CSS sticky behavior was unreliable under the current page overflow architecture, so Scene06 Part 2 now uses a local pin-state class:

- `is-before`: absolute at section top
- `is-pinned`: fixed to viewport top
- `is-after`: absolute at section bottom

The section height is:

```css
height: 360vh;
```

Scroll progress maps to groups:

```txt
0.00-0.34: Group 1
0.34-0.68: Group 2
0.68-1.00: Group 3
```

Group transitions use opacity, horizontal translate, and slight blur. No wheel picker effect is used.

## Desktop QA

Desktop 1366:

- Pin state: `is-pinned`
- Group 1: B1, B2, B3 only
- Group 2: B4, B5, B6 only
- Group 3: B7, B8, B9 plus quote
- Card widths: `148px, 148px, 148px`
- Note count: `3` per active group
- No horizontal overflow: `scrollWidth 1351`, `innerWidth 1366`

Desktop 1536:

- Pin state: `is-pinned`
- Group order works: 1 -> 2 -> 3
- Card widths: `167px, 167px, 167px`
- No horizontal overflow: `scrollWidth 1521`, `innerWidth 1536`

## Mobile QA

Mobile 390:

- Pin state: `is-pinned`
- Vertical scroll advances groups 1 -> 2 -> 3
- No horizontal overflow: `scrollWidth 390`, `innerWidth 390`
- Cards remain equal relative to the scaled stage: `43px` each

## Known Limitations

- Mobile preserves the same scaled 1366-stage proportions, so the storyboard is dense and small at 390px. This follows the current Canva-scale architecture rather than introducing a separate mobile card layout.
- Group 3 is visually busy because it must contain B7-B9 plus the quote paper in one pinned frame.

## Screenshots

- `/tmp/scene06-steps-pinned-desktop-1366-group1.png`
- `/tmp/scene06-steps-pinned-desktop-1366-group2.png`
- `/tmp/scene06-steps-pinned-desktop-1366-group3.png`
- `/tmp/scene06-steps-pinned-desktop-1536-group1.png`
- `/tmp/scene06-steps-pinned-desktop-1536-group2.png`
- `/tmp/scene06-steps-pinned-desktop-1536-group3.png`
- `/tmp/scene06-steps-pinned-mobile-390-group1.png`
- `/tmp/scene06-steps-pinned-mobile-390-group2.png`
- `/tmp/scene06-steps-pinned-mobile-390-group3.png`
