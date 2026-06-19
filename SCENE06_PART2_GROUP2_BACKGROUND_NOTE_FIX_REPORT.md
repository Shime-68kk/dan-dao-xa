# Scene06 Part 2 Group 2 Background / Note Fix Report

## Scope

Patched Scene06 Part 2 Group 2 only.

No changes were made to Scene01-Scene05, Scene06 Part 1, Scene06 Part 2 Group 1, Scene06 Part 2 Group 3, card crop files, the card size variable, note text, or pin/scroll transition logic.

## Files Changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.css`
- `/home/quang/Documents/brief-1/project/src/assets/page01/scene06/steps/backgrounds/group2-bg.png`

## Group 2 Background Asset

Source asset:

- `/home/quang/Documents/brief-1/project/slide 6-2/nền 2.png`

Project asset used:

- `/home/quang/Documents/brief-1/project/src/assets/page01/scene06/steps/backgrounds/group2-bg.png`

The background is applied only through `.scene06-steps__group--2::before` with `background-size: 100% 100%`, so it covers the full scaled 1366 design stage for Group 2 only.

Browser QA confirmed:

- Group 1 does not use `group2-bg.png`.
- Group 2 uses `group2-bg.png`.

## Final B4/B5/B6 Card Coordinates

- B4 card: `x=460`, `y=170`
- B5 card: `x=770`, `y=170`
- B6 card: `x=1080`, `y=170`

Card size was unchanged.

## Final B4/B5/B6 Note Coordinates

- B4 note: `x=265`, `y=340`, `width=175`
- B5 note: `x=575`, `y=340`, `width=175`
- B6 note: `x=885`, `y=340`, `width=175`

The note coordinates and text were not changed in this patch. Existing full B4/B5/B6 note text was preserved exactly.

## Desktop 1366 QA

- Active group: Group 2 only.
- Group 2 background: `group2-bg.png`.
- Group 1 background: unchanged; no `group2-bg.png`.
- Card widths: `148px`, `148px`, `148px`.
- Card top: `168px`, `168px`, `168px`.
- Card bottoms visible.
- B4 note/title gap: `73px`.
- Notes end before their matching card images.
- Horizontal overflow: no.

## Desktop 1536 QA

- Active group: Group 2 only.
- Group 2 background: `group2-bg.png`.
- Card widths: `167px`, `167px`, `167px`.
- Cards and notes scale cleanly.
- Notes end before their matching card images.
- Horizontal overflow: no.

## Mobile 390 QA

- Active group: Group 2 only.
- Group 2 background: `group2-bg.png`.
- Group 1 background: unchanged; no `group2-bg.png`.
- Card widths: `43px`, `43px`, `43px`.
- B4 note/title gap: `11px`.
- Vertical scroll/pin behavior still reaches Group 2.
- Horizontal overflow: no.

