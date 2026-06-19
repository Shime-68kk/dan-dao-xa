# Scene06 Part 1 Scale / Position Fix Report

## Scope

Patched Scene06 Part 1 scale and positioning only.

No Scene01-Scene05 files were changed. Scene06 Part 2 / Bước 1-Bước 9 was not implemented.

## Files Changed

- `src/sections/page01/Scene06CraftJourneyIntro/Scene06CraftJourneyIntro.css`

## Final Desktop Values

Title:
- `.scene06-intro__title top: -18px`
- `.scene06-intro__title width: min(94vw, 1280px)`
- The title PNG has transparent top padding; at 1366px the visible alpha artwork starts around 100px from the Scene06 top.

Paragraph:
- `.scene06-intro__copy top: 438px`
- `.scene06-intro__copy left: 50%`
- `.scene06-intro__copy width: min(62vw, 842px)`
- `.scene06-intro__copy transform: translateX(-38%)`
- Font remains local Courier italic, 13px, line-height 1.72.

Scene:
- `.scene06-intro min-height: clamp(760px, 100vh, 820px)`
- Background remains `src/assets/page01/common/main-wood-background.png`.

## Final Mobile Values

For `max-width: 768px`:
- `.scene06-intro min-height: 760px`
- `.scene06-intro__title top: 18px`
- `.scene06-intro__title width: 116vw`
- `.scene06-intro__copy top: 292px`
- `.scene06-intro__copy left: 8vw`
- `.scene06-intro__copy width: 84vw`
- `.scene06-intro__copy font-size: clamp(11px, 3.05vw, 13px)`
- `.scene06-intro__copy line-height: 1.85`

For `max-width: 430px`:
- `.scene06-intro min-height: 780px`
- `.scene06-intro__title top: 14px`
- `.scene06-intro__title width: 116vw`
- `.scene06-intro__copy top: 284px`
- `.scene06-intro__copy left: 8vw`
- `.scene06-intro__copy width: 84vw`
- `.scene06-intro__copy font-size: 12.8px`

## QA Results

Desktop 1366 x 768:
- Title rendered large at 1280px wide and visually higher.
- Paragraph remained Courier italic 13px and aligned under the title.
- No horizontal overflow: measured `scrollWidth 1351`, `innerWidth 1366`.

Desktop 1536 x 864:
- Full wood background remained active with no black side gutters.
- Title remained large and centered in the 1366px artboard.
- No horizontal overflow: measured `scrollWidth 1521`, `innerWidth 1536`.

Mobile 390 x 844:
- Title/note area moved upward and kept Canva-like scale.
- Paragraph remained readable below the title.
- No horizontal overflow: measured `scrollWidth 390`, `innerWidth 390`.

Screenshots captured:
- `/tmp/scene06-scale-desktop-1366.png`
- `/tmp/scene06-scale-desktop-1536.png`
- `/tmp/scene06-scale-mobile-390.png`

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
