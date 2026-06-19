# Scene06 Part 2 Group 2 Vertical Offset Report

## Scope

Patched only Scene06 Part 2 / Group 2 / Bước 4-6 vertical positioning.

No changes were made to Scene01-Scene05, Scene06 Part 1, Scene06 Part 2 Group 1, Scene06 Part 2 Group 3, pin/scroll transition logic, card crop files, card size variable, customer text content, Group 2 background, Group 2 x coordinates, or note widths.

## Offset Used

Used total `dy = -70`.

I first applied the requested `dy = -35`, but browser QA showed the Step 6 note still reached the lower pale band because the note column is very tall. I then applied the same additional upward offset to all six Group 2 elements, keeping the movement uniform.

## Old Coordinates

- B4 card: `x=430`, `y=170`
- B5 card: `x=745`, `y=170`
- B6 card: `x=1060`, `y=170`

- B4 note: `x=315`, `y=335`, `width=95`
- B5 note: `x=590`, `y=335`, `width=140`
- B6 note: `x=910`, `y=335`, `width=135`

## New Coordinates

- B4 card: `x=430`, `y=100`
- B5 card: `x=745`, `y=100`
- B6 card: `x=1060`, `y=100`

- B4 note: `x=315`, `y=265`, `width=95`
- B5 note: `x=590`, `y=265`, `width=140`
- B6 note: `x=910`, `y=265`, `width=135`

## Confirmations

- All Group 2 cards and notes moved by the same `dy=-70`.
- X coordinates were unchanged.
- Note widths were unchanged.
- Card size was unchanged.
- Customer text was unchanged.
- Group 2 background was unchanged.

## Desktop 1366 QA

- Group 2 active only.
- B4/B5/B6 cards moved up together and still share the same y.
- B4/B5/B6 notes moved up together and still share the same y.
- B4/B5/B6 card spacing remains equal after scaling/rounding: `312px` and `311px`.
- No note/card overlaps were detected.
- No title collision was introduced.
- No horizontal overflow.
- B6 note now sits above the visible lower pale band in the 1366 composition.

## Desktop 1536 QA

- Group 2 active only.
- Layout scales cleanly.
- B4/B5/B6 cards remain equal and aligned.
- No note/card overlaps were detected.
- No horizontal overflow.

## Mobile 390 QA

- Group 2 active only.
- No horizontal overflow.
- Group 2 remains reachable by pinned scroll.
- Cards remain equal.
- No note/card overlaps were detected.

