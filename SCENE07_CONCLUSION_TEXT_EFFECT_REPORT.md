# Scene07 Conclusion Text Effect Report

## Scope

- Scene: `Scene07WoodResonance`
- Files changed:
  - `src/sections/page01/Scene07WoodResonance/Scene07WoodResonance.css`

## Conclusion Text Changes

- Selector changed: `.scene07__bottom-copy`
- Font size changed:
  - Old: `13px`
  - New: `15.4px`
- Line-height:
  - Kept at `1.55`
- Alignment:
  - Added `text-align: center`
- Text block positioning:
  - Old: `left: 292px; width: 735px`
  - New: `left: 276px; width: 760px`
- QA confirmed the conclusion text remains inside `.scene07__bottom-panel` at desktop `1366x768`.

## Upper Text Size Changes

- `.scene07__top-copy`
  - `13px` → `14px`
- `.scene07__column-title`
  - `16px` → `17px`
- `.scene07__column-body`
  - `13px` → `14px`
- `.scene07__small`
  - `12px` → `13px`
- `.scene07__label`
  - base `12px` and override `11.6px` → override `12.6px`
- `.scene07__number`
  - `24.5px` → `26px`

## Conclusion Reveal Effect

- Enhanced only the bottom conclusion box and text.
- `.scene07__bottom-panel.scene07-reveal` now uses a slightly longer fade/slide/scale transition with a subtle shadow/glow.
- `.scene07__bottom-copy.scene07-reveal` now reveals slightly later with a clarity fade:
  - starts with `translateY(10px)` and `blur(2px)`
  - ends at `translateY(0)` and `blur(0)`
- Existing Scene07 IntersectionObserver and reveal sequencing remain unchanged.
- Reduced-motion handling was extended for the bottom panel/text so opacity, transform, filter, and transitions are disabled.

## QA

- Desktop viewport checked: `1366x768`
- Local URL checked: `http://127.0.0.1:5174/dan-dao-xa/`
- Screenshot captured:
  - `/tmp/scene07-viewport-1366x768.png`
- Computed QA results:
  - Scene07 active state: `true`
  - Conclusion text alignment: `center`
  - Conclusion font-size: `15.4px`
  - Conclusion line-height: `23.87px`
  - Conclusion text opacity after reveal: `1`
  - Conclusion text filter after reveal: `blur(0px)`
  - Conclusion text contained inside brown panel: `true`
  - Horizontal overflow: `0`

## Build Result

- `npm run build` passed.
