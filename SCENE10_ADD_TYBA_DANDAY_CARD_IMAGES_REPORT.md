# Scene10 Add Tỳ Bà / Đàn Đáy Card Images Report

## Summary
- Added the newly provided normal carousel card images for Đàn tỳ bà and Đàn đáy.
- Scene10 carousel visible count is 8.
- Đàn tỳ bà and Đàn đáy are no longer hidden and no longer use `chi tiết đàn...` images as normal carousel cards.
- Full detail images remain reserved for `Thông tin` mode.

## Final Visible Carousel Order
1. Đàn nguyệt
2. Đàn tam
3. Đàn bầu
4. Đàn tranh
5. Đàn nhị
6. Đàn tứ
7. Đàn tỳ bà
8. Đàn đáy

## Đàn Tỳ Bà Asset Mapping
- Card image path: `src/assets/page01/scene10/instruments/dan-ty-ba.png`
- Original card source: `slide 10-2/đàn tỳ bà.png`
- Detail image path: `src/assets/page01/scene10/instruments/scene10-detail-dan-ti-ba.png`
- Original detail source: `slide 10-2/chi tiết đàn tì bà.png`
- Audio path: `src/assets/page01/scene10/instruments/dan-ti-ba.mp3`
- Original audio source: `slide 10-2/âm thanh/tì bà.MP3`

## Đàn Đáy Asset Mapping
- Card image path: `src/assets/page01/scene10/instruments/dan-day.png`
- Original card source: `slide 10-2/đàn đáy.png`
- Detail image path: `src/assets/page01/scene10/instruments/scene10-detail-dan-day.png`
- Original detail source: `slide 10-2/chi tiết đàn đáy.png`
- Audio path: `src/assets/page01/scene10/instruments/dan-day.mp3`
- Original audio source: `slide 10-2/âm thanh/đàn đáy.MP3`

## Detail Image Role Confirmation
- Normal carousel renders `cardImage`.
- The `Thông tin` detail panel renders `detailImage`.
- Đàn tỳ bà normal carousel card now uses `dan-ty-ba.png`, not the detail image.
- Đàn đáy normal carousel card now uses `dan-day.png`, not the detail image.
- Detail images only appear through the `.scene10-player__detail` info-mode panel.

## Files Changed
- `src/assets/page01/scene10/instruments/dan-ty-ba.png`
- `src/assets/page01/scene10/instruments/dan-day.png`
- `src/sections/page01/Scene10SoundCulture/scene10Instruments.js`

## QA Notes
- Source check confirms `SCENE10_VISIBLE_INSTRUMENTS = SCENE10_INSTRUMENTS`, so all 8 instruments participate in next/previous, keyboard, swipe, selected-name, audio, and info-mode logic.
- Source check confirms Đàn tỳ bà and Đàn đáy have non-null `cardImage`, `detailImage`, and `audio` values.
- Source check confirms the new card images are 2903 x 2803 PNG files, matching the existing carousel card asset dimensions.
- Build output includes bundled `dan-ty-ba` and `dan-day` card images.

## Build
- `npm run build` passed.
