# Scene06 Part 2 Group 3/4 Restructure Report

## Scope

Patched Scene06 Part 2 group structure only.

No changes were made to Scene01-Scene05, Scene06 Part 1, Scene06 Part 2 Group 1, Scene06 Part 2 Group 2, pin/scroll behavior beyond adding a fourth group state, B1-B9 card crop files, the card size variable, or customer text content.

## Group 1 / Group 2 Confirmation

- Group 1 data and layout were unchanged.
- Group 2 data and layout were unchanged.

## New Group Count

Scene06 Part 2 now has 4 groups:

- Group 1: B1, B2, B3
- Group 2: B4, B5, B6
- Group 3: B7, B8, flower ornament
- Group 4: B9, quote paper, existing quote ornament

## Scroll Progress Mapping

Updated active group mapping:

- `0.00-0.25`: Group 1
- `0.25-0.50`: Group 2
- `0.50-0.75`: Group 3
- `0.75-1.00`: Group 4

Section height was increased from `360vh` to `460vh` for four pinned states.

## Group 3 Assets

Flower source:

- `/home/quang/Documents/brief-1/project/slide 6-2/họa tiết.png`

Project asset:

- `/home/quang/Documents/brief-1/project/src/assets/page01/scene06/steps/ornaments/flower-ornament.png`

## Group 3 Coordinates

B7 card:

- `x=430`, `y=282`

B8 card:

- `x=800`, `y=282`

B7 note:

- `x=585`, `y=150`, `width=250`

B8 note:

- `x=955`, `y=150`, `width=250`

Flower ornament:

- `x=180`, `y=455`, `width=170`

## B9 Move Confirmation

B9 was removed from Group 3 and moved to Group 4.

Group 4 now contains:

- B9 card/note
- Quote paper
- Existing quote ornament

## Desktop 1366 QA

- Group 1 active at progress `0.10`: B1/B2/B3 only.
- Group 2 active at progress `0.35`: B4/B5/B6 only.
- Group 3 active at progress `0.60`: B7/B8 plus flower only.
- Group 3 does not show B6 or B9.
- Group 4 active at progress `0.85`: B9 plus quote paper.
- No horizontal overflow.
- Screenshots:
  - `/tmp/scene06-desktop-group-3-fixed.png`
  - `/tmp/scene06-desktop-group-4-fixed.png`

## Desktop 1536 QA

- Same sequence holds: Group 1 -> Group 2 -> Group 3 -> Group 4.
- Group 3 shows B7/B8 plus flower only.
- Group 4 shows B9 plus quote.
- No horizontal overflow.

## Mobile 390 QA

- Vertical scroll reaches Group 1 -> Group 2 -> Group 3 -> Group 4.
- Group 3 shows B7/B8 plus flower only.
- Group 4 shows B9 plus quote.
- No horizontal overflow.

