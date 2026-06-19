# Scene06 Part 2 Group 2 Spacing Report

## Scope

Patched Scene06 Part 2 Group 2 x/y layout only.

No changes were made to Scene01-Scene05, Scene06 Part 1, Scene06 Part 2 Group 1, Scene06 Part 2 Group 3, card crop files, the card size variable, note font size, or pin/scroll transition logic.

## Old Group 2 Coordinates

From the previous Group 2 layout:

- B4 card: `x=285`, `y=170`
- B5 card: `x=635`, `y=170`
- B6 card: `x=985`, `y=170`

- B4 note: `x=115`, `y=330`, `width=165`
- B5 note: `x=465`, `y=330`, `width=165`
- B6 note: `x=815`, `y=330`, `width=165`

## New Group 2 Coordinates

- B4 card: `x=460`, `y=170`
- B5 card: `x=770`, `y=170`
- B6 card: `x=1080`, `y=170`

- B4 note: `x=265`, `y=340`, `width=175`
- B5 note: `x=575`, `y=340`, `width=175`
- B6 note: `x=885`, `y=340`, `width=175`

The group was shifted right beyond the first safe candidate because browser QA showed the B4 note was still inside the left title bounds. The final values create a clear gap while keeping each note before its matching card image.

## Confirmations

- Card size unchanged.
- Note font size unchanged.
- B4/B5/B6 cards keep identical width.
- B4/B5/B6 cards keep identical `y=170`.
- Group 1 was not changed.
- Group 3 was not changed.
- B4 note no longer collides with the left title.

## Desktop 1366 QA

- Active group: Group 2 only.
- Card widths: `148px`, `148px`, `148px`.
- Card top: `168px`, `168px`, `168px`.
- Card bottoms: `648px`, `648px`, `648px`.
- Note widths: `173px`, `173px`, `173px`.
- B4 note/title measured gap: `38px`.
- Notes end before their matching cards.
- B5 label/card bottom remains visible.
- Horizontal overflow: no.

## Desktop 1536 QA

- Active group: Group 2 only.
- Card widths: `167px`, `167px`, `167px`.
- Card top: `189px`, `189px`, `189px`.
- Card bottoms: `730px`, `730px`, `730px`.
- Note widths: `195px`, `195px`, `195px`.
- B4 note/title measured gap: `43px`.
- Notes end before their matching cards.
- Horizontal overflow: no.

## Mobile 390 QA

- Active group: Group 2 only.
- Card widths: `43px`, `43px`, `43px`.
- Card top: `49px`, `49px`, `49px`.
- B4 note/title measured gap: `11px`.
- Notes end before their matching cards.
- Scroll/pin transition still reaches Group 2.
- Horizontal overflow: no.

