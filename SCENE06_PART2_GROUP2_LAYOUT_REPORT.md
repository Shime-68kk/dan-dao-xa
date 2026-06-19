# Scene06 Part 2 Group 2 Layout Report

## Scope

Patched Scene06 Part 2 Group 2 only: Bước 4, Bước 5, Bước 6.

No changes were made to Scene01-Scene05, Scene06 Part 1, Scene06 Part 2 Group 1, Scene06 Part 2 Group 3, the card crop files, the card size variable, or the pin/scroll transition logic.

## Group 2 Old Card Coordinates

- B4: `x=300`, `y=250`
- B5: `x=620`, `y=235`
- B6: `x=940`, `y=250`

## Group 2 New Card Coordinates

- B4: `x=285`, `y=170`
- B5: `x=635`, `y=170`
- B6: `x=985`, `y=170`

All B4/B5/B6 cards now share the same `y=170` design coordinate and use the same shared card width.

## Group 2 Old Note Coordinates

- B4 note: `x=455`, `y=430`
- B5 note: `x=775`, `y=405`
- B6 note: `x=1095`, `y=395`

## Group 2 New Note Coordinates

- B4 note: `x=115`, `y=330`
- B5 note: `x=465`, `y=330`
- B6 note: `x=815`, `y=330`

## Final Note Widths

- B4 note: `165px`
- B5 note: `165px`
- B6 note: `165px`

Group 2 notes use the same bracketed full-text vertical treatment as Group 1 via the `scene06-steps__note--group-2` modifier.

## Text Completion

- B4 note now includes the heading `GHÉP CẦN ĐÀN` and the full required two-part text.
- B5 note now includes the heading `ĐÁNH GIẤY RÁP / CHÀ NHÁM` and the full required body text.
- B6 note now includes the heading `PHUN BÓNG / TRẮNG SƠN` and all required detail blocks: protection, durability, and hand decoration.

## Group 1 Confirmation

Group 1 was not changed in this patch.

## Desktop 1366 QA

- Active group: Group 2 only.
- Card widths: `148px`, `148px`, `148px`.
- Card top: `168px`, `168px`, `168px`.
- Card bottoms: `648px`, `648px`, `648px`.
- Notes top: `326px`, `326px`, `326px`.
- Notes sit lower/mid relative to the lifted card row.
- Each note right edge stays before its matching card.
- B5 bottom label area remains visible.
- Horizontal overflow: no.

## Desktop 1536 QA

- Active group: Group 2 only.
- Card widths: `167px`, `167px`, `167px`.
- Card top: `189px`, `189px`, `189px`.
- Card bottoms: `730px`, `730px`, `730px`.
- Notes scale consistently and remain aligned with their matching card lanes.
- Horizontal overflow: no.

## Mobile 390 QA

- Active group: Group 2 only.
- Card widths: `43px`, `43px`, `43px`.
- Card top: `49px`, `49px`, `49px`.
- Cards remain equal under the scaled artboard model.
- Vertical scroll/swipe still advances into Group 2.
- Horizontal overflow: no.

