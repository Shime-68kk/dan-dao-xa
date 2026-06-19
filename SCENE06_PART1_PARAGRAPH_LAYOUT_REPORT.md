# Scene06 Part 1 Paragraph Layout Report

## Scope

Patched Scene06 Part 1 paragraph placement/readability only.

Scene01-Scene05 were not touched. Scene06 Part 2 / horizontal Bước 1-Bước 9 was not started. The current trimmed title asset and title scale contract were preserved.

## Files Changed

- `src/sections/page01/Scene06CraftJourneyIntro/Scene06CraftJourneyIntro.jsx`
- `src/sections/page01/Scene06CraftJourneyIntro/Scene06CraftJourneyIntro.css`

## Layout Method

The paragraph is now flow/flex-based, not positioned by a fragile absolute `top`.

Implemented:
- Added `.scene06-intro__title-wrap` around the title image.
- Changed `.scene06-intro__artboard` to a vertical flex layout.
- The title renders first.
- The paragraph follows below the title with a controlled `margin-top`.

This prevents the paragraph from overlapping the title/music staff when the viewport changes.

## Final Desktop Paragraph Values

```css
.scene06-intro__copy {
  width: min(62vw, 880px);
  margin: clamp(24px, 2.8vw, 44px) 0 0;
  font-size: clamp(13.5px, 0.95vw, 15px);
  line-height: 1.72;
  transform: translateX(8%);
}
```

Measured at 1366px:
- Paragraph width: `847px`
- Font size: `13.5px`
- Margin/gap below title: `38px`

Measured at 1536px:
- Paragraph width: `880px`
- Font size: `14.592px`
- Margin/gap below title: `43px`

## Final Mobile Paragraph Values

```css
.scene06-intro__copy {
  width: 86vw;
  margin-top: 18px;
  font-size: clamp(12px, 3.25vw, 13.5px);
  line-height: 1.85;
  transform: none;
}
```

Measured at 390px:
- Paragraph width: `335px`
- Font size: `12.7px`
- Margin/gap below title: `18px`
- No horizontal overflow: `scrollWidth 390`, `innerWidth 390`

## Overlap Check

Confirmed the paragraph no longer overlaps:
- “GỖ THÔ”
- “đến Thanh âm hoàn hảo”
- music staff lines
- right note icon

## QA Results

Desktop 1366 x 768:
- Title scale unchanged.
- Paragraph starts below the title/staff with a measured `38px` gap.
- Paragraph is readable and remains Courier italic.
- No horizontal overflow.

Desktop 1536 x 864:
- Scene06 still matches Scene05 width contract.
- Paragraph remains below title after resizing with a measured `43px` gap.
- No horizontal overflow.

Mobile 390 x 844:
- Title remains pushed up.
- Paragraph begins below the title with a measured `18px` gap.
- No top black gap.
- No text clipping and no horizontal overflow.

Screenshots captured:
- `/tmp/scene06-paragraph-desktop-1366.png`
- `/tmp/scene06-paragraph-desktop-1536.png`
- `/tmp/scene06-paragraph-mobile-390.png`
