# Scene06 Shared Scale Contract Report

## Scope

Patched Scene06 Part 1 only to share the same visual width contract as Scene05.

Scene01-Scene04 were not touched. Scene05 content was not rebuilt. Scene06 Part 2 / horizontal Bước 1-Bước 9 was not started.

## Scene05 Width Contract Found

Scene05 uses:

```css
.scene05-visual-wrap {
  width: 100%;
  max-width: none;
  margin: 0;
  overflow: hidden;
}

.scene05-full-image {
  width: 100%;
  max-width: none;
}
```

So Scene05 fills the current page/content width and does not cap itself at 1366px.

## Scene06 Old Width Rules Removed

Removed the independent Scene06 caps:

- `.scene06-intro__artboard width: min(100%, 1366px)`
- `.scene06-intro__artboard margin: 0 auto`
- `.scene06-intro__title width: min(88vw, 1180px)`

Those made Scene06 stop growing while Scene05 kept scaling with the viewport.

## Scene06 New Width Rules

Artboard:

```css
.scene06-intro__artboard {
  width: 100%;
  max-width: none;
  margin: 0;
}
```

Title:

```css
.scene06-intro__title {
  top: clamp(72px, 9vw, 118px);
  width: 96vw;
  max-width: none;
}
```

Paragraph:

```css
.scene06-intro__copy {
  top: clamp(360px, 30vw, 450px);
  width: min(62vw, 900px);
  font-size: clamp(13px, 0.95vw, 15px);
  transform: translateX(-28%);
}
```

Mobile:

```css
.scene06-intro__title {
  top: 0;
  left: 58%;
  width: 128vw;
}

.scene06-intro__copy {
  top: 235px;
  left: 7vw;
  width: 86vw;
}
```

## Measured Width QA

Desktop 1200:
- Scene05 wrapper width: `1185px`
- Scene06 artboard width: `1185px`
- Scene06 title width: `1152px`
- Overflow: none, measured `scrollWidth 1185`, `innerWidth 1200`

Desktop 1366:
- Scene05 wrapper width: `1351px`
- Scene06 artboard width: `1351px`
- Scene06 title width: `1311px`
- Overflow: none, measured `scrollWidth 1351`, `innerWidth 1366`

Desktop 1536:
- Scene05 wrapper width: `1521px`
- Scene06 artboard width: `1521px`
- Scene06 title width: `1475px`
- Overflow: none, measured `scrollWidth 1521`, `innerWidth 1536`

Mobile 390:
- Scene05 wrapper width: `390px`
- Scene06 artboard width: `390px`
- Scene06 title width: `499px`, intentionally clipped by the local Scene06 artboard for the Canva-like mobile scale
- Overflow: none, measured `scrollWidth 390`, `innerWidth 390`

## Parent Transform Check

No parent transform or zoom shrinks Scene06. The Scene06 artboard computed transform is `none`.

Transforms remain only on the title reveal, paragraph alignment, and text reveal segments.

## Screenshots

- `/tmp/scene06-contract-desktop-1200.png`
- `/tmp/scene06-contract-desktop-1366.png`
- `/tmp/scene06-contract-desktop-1536.png`
- `/tmp/scene06-contract-mobile-390-final.png`
