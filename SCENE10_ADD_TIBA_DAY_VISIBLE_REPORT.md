# Scene10 Add Tì Bà / Đàn Đáy Visible Report

## Summary
- Restored Đàn tì bà and Đàn đáy to the Scene10 carousel.
- Final visible carousel count: 8.
- Removed the pending-card exclusion path; `SCENE10_VISIBLE_INSTRUMENTS` now returns the full instrument list.
- Kept the detail/info image role separate: full `chi tiết đàn ...` images render through the `Thông tin` detail panel only.

## Final Carousel Order
1. Đàn nguyệt
2. Đàn tam
3. Đàn bầu
4. Đàn tranh
5. Đàn nhị
6. Đàn tứ
7. Đàn tì bà
8. Đàn đáy

## Đàn Tì Bà Asset Mapping
- Card image source: `src/assets/page01/scene10/instruments/scene10-detail-dan-ti-ba.png`
- Card treatment: cropped card viewport with `object-fit: cover` and `object-position: 30% center`
- Detail image source: `src/assets/page01/scene10/instruments/scene10-detail-dan-ti-ba.png`
- Audio source: `src/assets/page01/scene10/instruments/dan-ti-ba.mp3`

## Đàn Đáy Asset Mapping
- Card image source: `src/assets/page01/scene10/instruments/scene10-detail-dan-day.png`
- Card treatment: cropped card viewport with `object-fit: cover` and `object-position: 31% center`
- Detail image source: `src/assets/page01/scene10/instruments/scene10-detail-dan-day.png`
- Audio source: `src/assets/page01/scene10/instruments/dan-day.mp3`

## Detail Image Behavior
- Normal carousel cards render `instrument.cardImage`.
- Full detail panel renders `selectedInstrument.detailImage` only inside `.scene10-player__detail`, which is the `Thông tin` mode panel.
- Đàn tì bà and Đàn đáy use the same source image for card and detail only because no separate simple card images exist; the carousel view crops that source to the instrument/photo area instead of showing the full info sheet.

## Files Changed
- `src/sections/page01/Scene10SoundCulture/scene10Instruments.js`
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.jsx`

## QA Notes
- Source check confirms the carousel now maps all 8 instruments through `SCENE10_VISIBLE_INSTRUMENTS`.
- Source check confirms Đàn tì bà and Đàn đáy have audio, card image, and detail image mappings.
- Source check confirms the full detail image is rendered by the `.scene10-player__detail` image path.
- Automated browser click-through was not completed because the project does not include Playwright and the available Node runtime did not expose a WebSocket client for Chrome DevTools Protocol without adding dependencies.

## Build
- `npm run build` passed.
