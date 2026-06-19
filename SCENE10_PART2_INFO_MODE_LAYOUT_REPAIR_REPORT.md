# Scene10 Part 2 Info Mode Layout Repair Report

## Scope
- Patched Scene10 Part 2 info mode only.
- Normal carousel mode was not changed.
- Scene10 title/paragraph were not changed.
- Audio files, content text, instrument data, image assets, and button behavior were not changed.

## Files Changed
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.css`

## Player Bar Anchor
- Player bar left: `250px`
- Player bar width: `866px`
- Player bar right: `1116px`

## Final Info Module
- Module left: `250px`
- Module width: `866px`
- Module right: `1116px`
- Module top unchanged: `-50px`
- Module height: `430px`
- The module now fits the player-bar visual width instead of spilling beyond it.

## Final Panel Distribution
- Left selected-card panel width: `210px`
- Gap: `32px`
- Right detail panel width: `624px`
- Total: `210px + 32px + 624px = 866px`

## Detail Panel
- Detail panel remains the primary panel:
  - `624px` wide versus `210px` selected card width
  - approximately `3x` wider than the selected-card panel
- Detail panel height: `420px`
- Foreground image remains sharp:
  - `filter: none`
  - `opacity: 1`
  - `transform: translateZ(0)`
  - `image-rendering: auto`

## Old Layout Removed
- Removed the old `1222px` info cluster strategy.
- Info module no longer starts at `72px` or ends at `1294px`.
- The new module aligns to the player-bar edges: `250px` to `1116px`.

## Clickability
- Arrows remain above the panels:
  - `z-index: 100`
  - `pointer-events: auto`
  - hitbox: `56px x 56px`
- Info layout, ghost cards, selected preview, and detail panel remain non-interactive in info mode, leaving arrows and bottom controls clickable.

## Build
- Command: `npm run build`
- Result: Passed.
