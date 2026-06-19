# Scene11 Fixed Pin Controller Report

## Files changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.jsx`
- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene11ModernAudience/Scene11ModernAudience.css`

## Sticky replacement

The previous `position: sticky` Scene11 pin was removed from the desktop Scene11 path.

Scene11 now uses an explicit fixed-pin state machine:

- `scene11-pin--before`: `position: absolute; top: 0; left: 0;`
- `scene11-pin--active`: `position: fixed; top: 0; left: 0;`
- `scene11-pin--after`: `position: absolute; bottom: 0; left: 0;`

The `.scene11` section is now only the scroll spacer, and `.scene11-pin` becomes a fixed presentation frame while the user is inside the Scene11 scroll range.

## Fixed pin state machine

The controller reads the Scene11 section rect on scroll/resize/orientation change:

```js
if (rect.top > 0) {
  pinState = "before";
} else if (rect.bottom <= viewportH) {
  pinState = "after";
} else {
  pinState = "active";
}
```

Scene progress is calculated as:

```js
const totalScrollable = section.offsetHeight - viewportH;
const sceneProgress = clamp(-rect.top / totalScrollable, 0, 1);
```

Part 2 progress remains:

```js
const part2Progress = clamp((sceneProgress - 0.22) / 0.1, 0, 1);
```

This keeps Part 1 visible first, transitions into Part 2, then holds Part 2 while the reserved Part 3/4 ranges remain unimplemented.

## Exact release condition

Scene11 releases only when:

```js
rect.bottom <= viewportH
```

At that moment `.scene11-pin--after` anchors the frame to the bottom of the Scene11 spacer so the following section can scroll in naturally.

## Reserved height

Scene11 reserves four planned parts:

```js
const SCENE11_TOTAL_STEPS = 4;
const SCENE11_STEP_HEIGHT_VH = 100;
const SCENE11_HOLD_EXTRA_VH = 20;
const SCENE11_SCROLL_VH = 420;
```

CSS receives:

```css
--scene11-scroll-vh: 420svh;
```

## Debug mode

Open:

```txt
http://localhost:5173/?debugScene11Pin=1
```

The debug badge shows:

- `pinState`
- `sceneProgress`
- `part2Progress`
- rounded section `rect.top`
- rounded section `rect.bottom`

The badge is hidden unless the query param is present.

## QA result

Source/build verification confirms:

- desktop Scene11 no longer uses `position: sticky`;
- `.scene11-pin--active` uses `position: fixed`;
- Part 1 and Part 2 remain absolute layers inside the fixed frame;
- Part 1/Part 2 text, coordinates, YouTube URL, and internal layout were not changed;
- Scene11 reserves the full four-part `420svh` scroll range;
- Part 2 remains held after the transition until the full Scene11 range ends;
- YouTube pointer events are enabled once Part 2 is fully active.

Manual browser QA should be performed with `?debugScene11Pin=1` to confirm the badge changes `before -> active -> after` and the frame stays fixed while `pinState: active`.

## Build result

`npm run build` passed.
