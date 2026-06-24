# Scene11 Part 1 Paragraph Size Report

## Scope

- Scene: `Scene11ModernAudience` / slide 11-1
- Files changed:
  - `src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.css`

## Selectors Updated

- `.scene11__intro`
  - Previous font-size: `13px`
  - New font-size: `15px`
  - Change: `+2px`
- `.scene11__body`
  - Previous font-size: `13px`
  - New font-size: `15px`
  - Change: `+2px`

## Confirmation

- Only the two Scene11-1 side paragraph selectors were changed.
- Font family was not changed.
- Color was not changed.
- Paragraph content was not changed.
- Chart, chart labels, source note, “TĂNG HƠN 2 LẦN”, background layers, pinned transition, and scroll logic were not changed.

## QA

- Desktop viewport checked: `1366x768`
- Local URL checked: `http://127.0.0.1:5174/dan-dao-xa/`
- Screenshot captured:
  - `/tmp/scene11-part1-text-1366x768.png`
- Computed QA results:
  - `.scene11__intro` font-size: `15px`
  - `.scene11__intro` line-height: `23.25px`
  - `.scene11__intro` overflow: `false`
  - `.scene11__body` font-size: `15px`
  - `.scene11__body` line-height: `23.25px`
  - `.scene11__body` overflow: `false`
  - `.scene11__source` remained `12px`
  - `.scene11-chart__grid text` remained `9px`
  - Horizontal overflow: `0`

## Build Result

- `npm run build` passed.
