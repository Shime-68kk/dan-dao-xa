# Scene06 Part 1 Intro Implementation Report

## Scope

Implemented Slide 6-1 only: “Hành trình từ gỗ thô đến thanh âm hoàn hảo”.

Scene01 through Scene05 were not changed except for adding Scene06 after Scene05 in the Page01 story flow.

## Files Changed

- `src/pages/Page01Story/Page01Story.jsx`
- `src/sections/page01/Scene06CraftJourneyIntro/Scene06CraftJourneyIntro.jsx`
- `src/sections/page01/Scene06CraftJourneyIntro/Scene06CraftJourneyIntro.css`
- `src/assets/page01/scene06/scene06-title.png`

## Assets Used

- Title asset source: `/home/quang/Documents/brief-1/project/slide 6-1/Tiêu đề.png`
- Title asset imported in app as: `src/assets/page01/scene06/scene06-title.png`
- Background asset used in CSS: `src/assets/page01/common/main-wood-background.png`

No Canva/browser screenshots were used as production assets.

## Implementation

- Added `Scene06CraftJourneyIntro` after `Scene05NarrowingPressure`.
- Rendered the transparent title PNG as the only foreground image.
- Rendered the required Vietnamese paragraph as real HTML text with the local Courier client font.
- Used a full-bleed wood background section with a 1366 x 768 desktop composition target.
- Added responsive mobile sizing so the title and paragraph remain readable without horizontal overflow.

## Animation Method

- Uses the existing `useElementInView` IntersectionObserver hook.
- Title reveals first with opacity and `translate3d`.
- Paragraph reveals softly by sentence segments with staggered opacity and transform transitions.
- Added `prefers-reduced-motion` support.

## QA Results

Desktop 1366 x 768:
- Scene06 rendered with wood background.
- Title image loaded and appeared crisp.
- Paragraph used Courier italic at 13px with line-height 22.36px.
- No horizontal overflow: measured `scrollWidth 1351`, `innerWidth 1366`.

Desktop 1536 x 864:
- Scene06 remained full width with no black gutters.
- Background image active.
- Title and paragraph centered within the 1366px artboard.

Mobile 390 x 844:
- No horizontal overflow: measured `scrollWidth 390`, `innerWidth 390`.
- Title stayed inside viewport bounds.
- Paragraph remained readable and was not cropped.

Screenshots captured during QA:
- `/tmp/scene06-desktop-1366.png`
- `/tmp/scene06-desktop-1536.png`
- `/tmp/scene06-mobile-390.png`

## Build Result

Package root search command:

```bash
find /home/quang/Documents/brief-1 -maxdepth 5 -name package.json -print
```

Result: no `package.json` was found.

Build command run from `/home/quang/Documents/brief-1/project`:

```bash
npm run build
```

Result: failed because npm reported `Missing script: "build"`.
