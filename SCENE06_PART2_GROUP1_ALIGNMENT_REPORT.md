# Scene06 Part 2 Group 1 Alignment Report

## Scope

Patched Scene06 Part 2 Group 1 only: Bước 1, Bước 2, Bước 3.

No changes were made to Scene01-Scene05, Scene06 Part 1, Group 2, Group 3, the shared card crop files, or the pinned/group transition logic.

## Files Changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.jsx`

## Old Group 1 Card Coordinates

- B1: `x=330`, `y=345`
- B2: `x=650`, `y=385`
- B3: `x=970`, `y=345`

## New Group 1 Card Coordinates

- B1: `x=300`, `y=282`
- B2: `x=620`, `y=282`
- B3: `x=940`, `y=282`

The initial recommended `y=330` was tested, but the uniform production card crops still extended below the 768px stage. The final `y=282` keeps all three cards on one baseline while keeping the bottom labels visible.

## Old Group 1 Note Coordinates

- B1 note: `x=505`, `y=210`
- B2 note: `x=820`, `y=275`
- B3 note: `x=1110`, `y=210`

## New Group 1 Note Coordinates

- B1 note: `x=455`, `y=165`
- B2 note: `x=775`, `y=165`
- B3 note: `x=1095`, `y=165`

## Confirmation

- B1/B2/B3 use the same shared card crop sizing and the same CSS card width.
- B1/B2/B3 now use an identical `y=282` design coordinate.
- B1/B2/B3 notes now share an identical `y=165` design coordinate.
- Group 2 and Group 3 data were not changed.

## Desktop 1366 QA

- Active group: Group 1 only.
- Measured card widths: `148px`, `148px`, `148px`.
- Measured card top: `279px`, `279px`, `279px`.
- Measured card bottoms: `759px`, `759px`, `759px`.
- B2 bottom label area is inside the 768px viewport.
- Measured note top: `163px`, `163px`, `163px`.
- B3 note right edge: `1330px`, inside the viewport.
- Horizontal overflow: no.

## Desktop 1536 QA

- Active group: Group 1 only.
- Measured card widths: `167px`, `167px`, `167px`.
- Measured card top: `314px`, `314px`, `314px`.
- Measured card bottoms: `855px`, `855px`, `855px`.
- B2 bottom label area is inside the 864px viewport.
- Measured note top: `184px`, `184px`, `184px`.
- B3 note right edge: `1498px`, inside the viewport.
- Horizontal overflow: no.

## Mobile 390 QA

- Active group: Group 1 only.
- Measured card widths: `43px`, `43px`, `43px`.
- Measured card top: `81px`, `81px`, `81px`.
- Measured note top: `47px`, `47px`, `47px`.
- Card baseline is consistent under the scaled artboard model.
- Horizontal overflow: no.

