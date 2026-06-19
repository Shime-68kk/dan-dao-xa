# Scene06 Part 2 Group 2 Step 5/6 No-Overlap Report

## Scope

Patched Scene06 Part 2 Group 2 Step 5 and Step 6 note placement only.

No changes were made to Scene01-Scene05, Scene06 Part 1, Scene06 Part 2 Group 1, Scene06 Part 2 Group 3, Step 4 data, card crop files, the card size variable, Group 2 background, or pin/scroll transition logic.

## Old Step 5/6 Note Coordinates

- Step 5 note: `x=550`, `y=340`, `width=205`
- Step 6 note: `x=850`, `y=340`, `width=215`

## New Step 5/6 Note Coordinates

- Step 5 note: `x=545`, `y=455`, `width=260`
- Step 6 note: `x=875`, `y=455`, `width=235`

Step 5 and Step 6 notes were moved lower into a lower/mid band so the text no longer sits across the same upper card-image area. The notes remain auto-height with normal wrapping and visible overflow.

## Card Coordinate Changes

- Step 5 card: `x=780`, `y=170` -> `x=835`, `y=170`
- Step 6 card: `x=1100`, `y=170` -> `x=1135`, `y=170`

B4/B5/B6 card size was not changed. B4/B5/B6 still share the same `y=170` design coordinate.

## Text Confirmation

Step 5 and Step 6 note text was not shortened, summarized, or rewritten.

## Measured Note-To-Card Gap

Desktop 1366:

- Step 5 note right edge to Step 5 card left edge: `30px`
- Step 6 note right edge to Step 6 card left edge: `25px`

Both meet the requested 1366-stage minimum gap of `24px`.

## Desktop 1366 QA

- Active group: Group 2 only.
- Step 4 remained unchanged.
- B4/B5/B6 cards remain equal size.
- B4/B5/B6 cards remain same `y`.
- Step 5 note moved lower and has a clean measured gap from B5 card.
- Step 6 note moved lower and has a clean measured gap from B6 card.
- Full Step 5/6 text remains visible in the DOM.
- Horizontal overflow: no.

## Desktop 1536 QA

- Active group: Group 2 only.
- B4/B5/B6 cards remain equal size and scale cleanly.
- Step 5 measured gap: `34px`.
- Step 6 measured gap: `28px`.
- Horizontal overflow: no.

## Mobile 390 QA

- Active group: Group 2 only.
- B4/B5/B6 cards remain equal under scaled artboard.
- Group 2 remains reachable by scroll/pin.
- Full Step 5/6 text remains in place.
- Horizontal overflow: no.

