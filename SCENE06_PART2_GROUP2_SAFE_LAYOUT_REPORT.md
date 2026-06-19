# Scene06 Part 2 Group 2 Safe Layout Report

## Scope

Patched only Scene06 Part 2 / Group 2 / Bước 4-6.

No changes were made to Scene01-Scene05, Scene06 Part 1, Scene06 Part 2 Group 1, Scene06 Part 2 Group 3, pin/scroll transition logic, B1-B9 card crop files, the card size variable, or customer text content.

## Group 1 Confirmation

Group 1 was unchanged.

## Group 2 Background

Group 2 continues to use:

- `/home/quang/Documents/brief-1/project/src/assets/page01/scene06/steps/backgrounds/group2-bg.png`

This asset was copied from:

- `/home/quang/Documents/brief-1/project/slide 6-2/nền 2.png`

Browser QA confirmed Group 2 uses `group2-bg.png` and Group 1 does not.

## Final Card Coordinates

- B4 card: `x=430`, `y=170`
- B5 card: `x=745`, `y=170`
- B6 card: `x=1060`, `y=170`

Card spacing is equal in source coordinates:

- B5 x - B4 x = `315`
- B6 x - B5 x = `315`

## Final Note Coordinates

- B4 note: `x=315`, `y=335`, `width=95`
- B5 note: `x=590`, `y=335`, `width=140`
- B6 note: `x=910`, `y=335`, `width=135`

## Protected Zone Proof

- B4 note source x is `315`, so it does not enter the protected left title zone `x=0-300`.
- All Group 2 note source x values are `>= 315`.
- Visual inspection confirmed the notes do not touch the vertical title.

## Visual Inspection

Inspected screenshots:

- Desktop 1366: `/tmp/scene06-group2-safe-1366-v2.png`
- Desktop 1536: `/tmp/scene06-group2-safe-1536-v2.png`

Visual confirmation:

- B4 note is not inside the left title area.
- B4 note does not touch `CÁC BƯỚC LÀM ĐÀN`.
- B5 note does not sit on top of the B5 card.
- B6 note does not sit on top of the B6 card.
- Notes are bracketed and move with the note block.
- Cards remain equal size and evenly spaced.

## Desktop 1366 QA

- Active group: Group 2 only.
- Horizontal overflow: no.
- Group 2 background: `group2-bg.png`.
- Group 1 background: unchanged; no `group2-bg.png`.
- B4/B5/B6 cards same y coordinate.
- B4/B5/B6 cards equal width.
- Measured card spacing: `312px` and `311px` after scale/rounding.
- Measured note/card overlaps: none.
- Full note text remains present in the DOM.

## Desktop 1536 QA

- Active group: Group 2 only.
- Horizontal overflow: no.
- B4/B5/B6 cards remain equal and cleanly spaced.
- Measured note/card overlaps: none.
- Layout remains clean under scaling.

## Mobile 390 QA

- Active group: Group 2 only.
- Horizontal overflow: no.
- Group 2 remains reachable through pinned scroll.
- Cards remain equal under the scaled artboard.
- Measured note/card overlaps: none.

