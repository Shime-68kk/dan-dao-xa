# Scene06 Part 2 Group 2 Step 5/6 Note Fix Report

## Scope

Patched Scene06 Part 2 Group 2 Step 5 and Step 6 notes only, with small B5/B6 card x-coordinate adjustments to preserve a clean gap after widening the note boxes.

No changes were made to Scene01-Scene05, Scene06 Part 1, Scene06 Part 2 Group 1, Scene06 Part 2 Group 3, Group 2 Step 4 data, the Group 2 background, card crop files, the card size variable, or pin/scroll transition logic.

## Step 4 Status

Step 4 was unchanged:

- B4 card: `x=460`, `y=170`
- B4 note: `x=265`, `y=340`, `width=175`

## Old Step 5/6 Coordinates

- B5 card: `x=770`, `y=170`
- B5 note: `x=575`, `y=340`, `width=175`

- B6 card: `x=1080`, `y=170`
- B6 note: `x=885`, `y=340`, `width=175`

## New Step 5/6 Coordinates

- B5 card: `x=780`, `y=170`
- B5 note: `x=550`, `y=340`, `width=205`

- B6 card: `x=1100`, `y=170`
- B6 note: `x=850`, `y=340`, `width=215`

## CSS Flow

The shared note CSS now explicitly allows natural wrapping and visible height:

- `height: auto`
- `overflow: visible`
- `white-space: normal`
- `overflow-wrap: normal`
- `word-break: normal`

Font size was not reduced.

## Text Confirmation

Step 5 and Step 6 note text was not shortened, summarized, or rewritten.

## Desktop 1366 QA

- Active group: Group 2 only.
- B4/B5/B6 card widths remain equal: `148px`, `148px`, `148px`.
- B4/B5/B6 card top remains equal: `168px`, `168px`, `168px`.
- B5 note width measured: `203px`.
- B6 note width measured: `213px`.
- B5 note-to-card gap measured: `25px`.
- B6 note-to-card gap measured: `34px`.
- Note wrapping is normal; overflow is visible.
- Card labels remain visible.
- Horizontal overflow: no.

## Desktop 1536 QA

- Active group: Group 2 only.
- B4/B5/B6 cards remain equal and scale cleanly.
- B5 note-to-card gap measured: `28px`.
- B6 note-to-card gap measured: `39px`.
- Step 5/6 notes remain readable.
- Horizontal overflow: no.

## Mobile 390 QA

- Active group: Group 2 only.
- B4/B5/B6 card widths remain equal: `43px`, `43px`, `43px`.
- B4/B5/B6 card top remains equal: `49px`, `49px`, `49px`.
- B5/B6 notes remain before their matching card images.
- Scroll/pin behavior still reaches Group 2.
- Horizontal overflow: no.

