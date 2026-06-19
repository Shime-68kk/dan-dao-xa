# Scene06 Part 1 Artboard Scale Report

## Scope

Patched Scene06 Part 1 only.

Scene01-Scene05 were not touched. Scene06 Part 2 / horizontal Bước 1-Bước 9 was not started.

## Scaled Artboard Model

Scene06 now uses a 1366px design-coordinate artboard for desktop/tablet.

Base design:
- Width: `1366`
- Height: `768`

Frame width is calculated in React from `.scene05-visual-wrap`:

```js
const scene05Frame = document.querySelector(".scene05-visual-wrap");
const width = scene05Frame?.getBoundingClientRect().width || window.innerWidth;
const scale = width / 1366;
```

The scale is passed into CSS as:

```jsx
style={{ "--scene06-scale": scale }}
```

## Final Scale Formula

```css
.scene06-intro__viewport {
  height: calc(768px * var(--scene06-scale, 1));
}

.scene06-intro__stage {
  width: calc(1366px * var(--scene06-scale, 1));
  height: calc(768px * var(--scene06-scale, 1));
}
```

## Paragraph Base Design Coordinates

Desktop paragraph is now inside the scaled artboard:

```css
.scene06-intro__copy {
  left: calc(510px * var(--scene06-scale, 1));
  top: calc(455px * var(--scene06-scale, 1));
  width: calc(760px * var(--scene06-scale, 1));
  font-size: calc(13px * var(--scene06-scale, 1));
}
```

Base design values:
- Left: `510px`
- Top: `455px`
- Width: `760px`
- Font size: `13px`

The old desktop font lock was removed:
- Removed `font-size: clamp(13.5px, 0.95vw, 15px)`
- Removed `width: min(62vw, 880px)`

## Mobile Override

A mobile readability override is kept because a strict `390 / 1366` artboard scale would make the paragraph about `3.7px`.

Mobile keeps the same content order, same title image, same wood background, and no horizontal overflow.

```css
@media (max-width: 768px) {
  .scene06-intro__viewport {
    height: 780px;
  }

  .scene06-intro__stage {
    width: 100%;
    height: 780px;
  }

  .scene06-intro__title {
    left: -23px;
    top: 0;
    width: 128vw;
  }

  .scene06-intro__copy {
    left: 7vw;
    top: 235px;
    width: 86vw;
    font-size: clamp(12px, 3.25vw, 13.5px);
    line-height: 1.85;
  }
}
```

## Measurement QA

Desktop 900:
- Scene05 width: `885px`
- Scene06 viewport width: `885px`
- Scene06 stage width: `885px`
- Scale: `0.647877`
- Computed paragraph font size: `8.4224px`
- No horizontal overflow: `scrollWidth 885`, `innerWidth 900`

Desktop 1366:
- Scene05 width: `1351px`
- Scene06 viewport width: `1351px`
- Scene06 stage width: `1351px`
- Scale: `0.989019`
- Computed paragraph font size: `12.8572px`
- No horizontal overflow: `scrollWidth 1351`, `innerWidth 1366`

Desktop 1536:
- Scene05 width: `1521px`
- Scene06 viewport width: `1521px`
- Scene06 stage width: `1521px`
- Scale: `1.11347`
- Computed paragraph font size: `14.4751px`
- No horizontal overflow: `scrollWidth 1521`, `innerWidth 1536`

Mobile 390:
- Scene05 width: `390px`
- Scene06 viewport width: `390px`
- Scene06 stage width: `390px`
- Mobile readability override active
- Computed paragraph font size: `12.675px`
- No horizontal overflow: `scrollWidth 390`, `innerWidth 390`

## Screenshots

- `/tmp/scene06-artboard-desktop-900.png`
- `/tmp/scene06-artboard-desktop-1200.png`
- `/tmp/scene06-artboard-desktop-1366.png`
- `/tmp/scene06-artboard-desktop-1536.png`
- `/tmp/scene06-artboard-mobile-390.png`
