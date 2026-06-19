# Scene06 Part 2 Group 2 Column Layout Report

## Scope

Repaired Scene06 Part 2 Group 2 / Bước 4-6 with a clean 3-column layout.

No changes were made to Scene01-Scene05, Scene06 Part 1, Scene06 Part 2 Group 1, Scene06 Part 2 Group 3, pin/scroll transition logic, B1-B9 card crop files, the card size variable, or customer text content.

## Final B4/B5/B6 Card Coordinates

- B4 card: `x=350`, `y=170`
- B5 card: `x=675`, `y=170`
- B6 card: `x=1000`, `y=170`

## Equal Spacing Proof

Design-stage card spacing:

- B5 x - B4 x = `675 - 350 = 325`
- B6 x - B5 x = `1000 - 675 = 325`

Browser measurement at 1366 rounded to:

- B4 to B5: `322px`
- B5 to B6: `321px`

The 1px difference is rounding from the current scaled artboard width; the source design coordinates are exactly equal.

## Final B4/B5/B6 Note Coordinates And Widths

- B4 note: `x=120`, `y=335`, `width=205`
- B5 note: `x=445`, `y=335`, `width=205`
- B6 note: `x=770`, `y=335`, `width=205`

The note width was set to `205px` rather than `220px` so the measured desktop note-to-card gap stays above the required 20px minimum.

## Text Confirmation

Customer text was not changed, shortened, summarized, or rewritten.

## Overlap Confirmation

Desktop 1366 measured note-to-card gaps:

- B4 note to B4 card: `25px`
- B5 note to B5 card: `25px`
- B6 note to B6 card: `25px`

B5 and B6 notes no longer overlap their card images.

## Desktop 1366 QA

- Active group: Group 2 only.
- B4/B5/B6 cards equal size.
- B4/B5/B6 cards same y coordinate.
- B4/B5 and B5/B6 spacing is equal in source coordinates.
- B5 note does not overlap B5 card.
- B6 note does not overlap B6 card.
- Full text remains visible in the DOM.
- White-space and overflow rules remain normal/visible.
- Horizontal overflow: no.

## Desktop 1536 QA

- Active group: Group 2 only.
- Cards remain equal and scale cleanly.
- Measured card spacing rounded to `362px` and `361px`.
- Measured note-to-card gaps: `28px`, `28px`, `27px`.
- Horizontal overflow: no.

## Mobile 390 QA

- Active group: Group 2 only.
- Cards remain equal under the scaled artboard.
- Group 2 remains reachable through pinned scroll.
- Text stays in the scaled artboard layout.
- Horizontal overflow: no.

