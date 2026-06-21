# Scene11 Mobile Pinned Stage Repair Report

## Files Changed

- `src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.jsx`
- `src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.css`

## Mobile Pinning Repair

- Removed the mobile-only stacked-page override that changed Scene11 into normal document flow.
- Mobile Scene11 now keeps the same pinned section model as desktop:
  - `.scene11` keeps `height: var(--scene11-scroll-vh, 420svh)`.
  - `.scene11-pin--before`, `.scene11-pin--active`, and `.scene11-pin--after` remain absolute/fixed/absolute pin states.
  - `.scene11-step` remains `position: absolute; inset: 0`.
- Mobile `.scene11-stage` is now a single `1366px x 812px` coordinate system centered in the pinned viewport.
- Mobile stage scaling uses cover scale through `getScene11Scale()`:
  - desktop: `Math.min(widthScale, heightScale)`
  - mobile/narrow: `Math.max(widthScale, heightScale)`

This removes the mobile black-band/stacked-page behavior and makes each active part fill the phone viewport.

## Part Progress / Index Behavior

- Existing Scene11 scroll progress logic was preserved.
- Scene progress is still calculated from the Scene11 section scroll span:
  - `progress = clamp(-rect.top / totalScrollable)`
- Internal part transitions still use the accepted thresholds:
  - part 2: `clamp((progress - 0.2) / 0.075)`
  - part 3: `clamp((progress - 0.43) / 0.075)`
  - part 4: `clamp((progress - 0.66) / 0.09)`

## Locked Background / Overlay Classes

- On mobile, these layers now share the same transformed `.scene11-stage` coordinate system:
  - `.scene11-slide1-bg-stack`
  - `.scene11-fullbleed-bg`
  - `.scene11-fullbleed-shade`
  - `.scene11-artboard`
  - `.scene11-shared-performance-copy-frame`
- The old artboard-local duplicate background/shade layers remain hidden for part 2-4:
  - `.scene11-part2__bg`, `.scene11-part2__shade`
  - `.scene11-part3__bg`, `.scene11-part3__shade`
  - `.scene11-part4__bg`, `.scene11-part4__shade`

## Desktop Preservation

- Desktop layout rules were not redesigned.
- Desktop foreground positions, YouTube cards, text, and chart positioning were not changed.
- Desktop continues to use the previous contain-style scale behavior.

## Mobile QA

- Tested with Chromium/CDP at:
  - `430x932`
  - `390x844`
  - `360x800`
- Confirmed mobile Scene11 no longer renders as normal stacked pages.
- Confirmed active part 3 and part 4 fill the viewport height with no black band.
- Confirmed background, shade, and artboard bounds are locked together in the mobile stage.
- Confirmed no horizontal overflow in the checked mobile widths.
- QA screenshots saved under `/tmp/brief1-scene11-part234/`.

## Build Result

- `npm run build` passed.
