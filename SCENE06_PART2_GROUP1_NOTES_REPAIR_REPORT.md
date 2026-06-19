# Scene06 Part 2 Group 1 Notes Repair Report

## Scope

Patched Scene06 Part 2 Group 1 notes only, with a small allowed horizontal spread of Group 1 card columns to prevent the taller note columns from spilling into the next card area.

No changes were made to Scene01-Scene05, Scene06 Part 1, Group 2, Group 3, card crop files, card size, or pinned/group transition logic.

## Card Coordinate Status

Card size remained unchanged. Group 1 cards still use the same shared CSS card width.

Card coordinates changed only on the X axis to create safer note lanes:

- B1 card: `x=300`, `y=282` -> `x=285`, `y=282`
- B2 card: `x=620`, `y=282` -> `x=635`, `y=282`
- B3 card: `x=940`, `y=282` -> `x=985`, `y=282`

## Final B1/B2/B3 Card Coordinates

- B1: `x=285`, `y=282`
- B2: `x=635`, `y=282`
- B3: `x=985`, `y=282`

## Final B1/B2/B3 Note Coordinates

- B1 note: `x=455`, `y=102`
- B2 note: `x=805`, `y=102`
- B3 note: `x=1155`, `y=102`

## Final Note Widths

- B1 note: `165px`
- B2 note: `165px`
- B3 note: `160px`

The note width is now passed as `--note-width`, and `.scene06-steps__note` uses `box-sizing: border-box` so the measured box stays inside its assigned column.

## Text Completion

Group 1 note text was expanded from short summaries to full note content:

- B1 now has 5 text blocks.
- B2 now has 4 text blocks.
- B3 keeps the full required body text.

Headings were updated to uppercase to match the reference tone.

## Styling Confirmation

- Notes use the existing Courier-style client font.
- Body text remains warm cream.
- Headings remain gold/orange.
- White corner brackets are preserved.
- Group 1 notes now use the `scene06-steps__note--group-1` modifier for taller/narrower vertical text flow.

## Desktop 1366 QA

- Active group: Group 1 only.
- Card widths: `148px`, `148px`, `148px`.
- Card top: `279px`, `279px`, `279px`.
- Card bottoms: `759px`, `759px`, `759px`; B2 label area remains visible.
- Note top: `101px`, `101px`, `101px`.
- Note widths: `163px`, `163px`, `158px`.
- Note heights: `388px`, `452px`, `148px`.
- Note right edges stay before the next card / viewport.
- Horizontal overflow: no.

## Desktop 1536 QA

- Active group: Group 1 only.
- Card widths: `167px`, `167px`, `167px`.
- Card top: `314px`, `314px`, `314px`.
- Card bottoms: `855px`, `855px`, `855px`; B2 label area remains visible.
- Note top: `114px`, `114px`, `114px`.
- Note widths: `184px`, `184px`, `178px`.
- Note right edges stay before the next card / viewport.
- Horizontal overflow: no.

## Mobile 390 QA

- Active group: Group 1 only.
- Card widths: `43px`, `43px`, `43px`.
- Card top: `81px`, `81px`, `81px`.
- Note top: `29px`, `29px`, `29px`.
- Scaled group remains consistent.
- Card labels are not cropped.
- Horizontal overflow: no.

