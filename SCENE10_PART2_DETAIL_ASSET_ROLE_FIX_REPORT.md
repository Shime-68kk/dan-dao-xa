# Scene10 Part 2 Detail Asset Role Fix Report

## Summary
- Corrected Scene10 Part 2 data so carousel card images and detail panel images are separate roles.
- Normal carousel now renders only instruments with a real `cardImage`.
- `chi tiết đàn ... .png` assets are used only as `detailImage` in info mode after clicking `Thông tin`.

## Card Images Used In Normal Carousel
- `dan-nguyet.png` -> Đàn nguyệt
- `dan-tam.png` -> Đàn tam
- `dan-bau.png` -> Đàn bầu
- `dan-tranh.png` -> Đàn tranh
- `dan-nhi.png` -> Đàn nhị
- `dan-tu.png` -> Đàn tứ

## Detail Images Used In Info Mode Only
- `detail-dan-nguyet.png` -> Đàn nguyệt
- `detail-dan-tam.png` -> Đàn tam
- `detail-dan-bau.png` -> Đàn bầu
- `detail-dan-tranh.png` -> Đàn tranh
- `detail-dan-nhi.png` -> Đàn nhị
- `detail-dan-tu.png` -> Đàn tứ
- `scene10-detail-dan-ti-ba.png` -> Đàn tì bà, prepared only
- `scene10-detail-dan-day.png` -> Đàn đáy, prepared only

## Đàn tì bà / Đàn đáy Status
- Đàn tì bà has audio and detail image mapped, but no proper simple carousel card image was provided.
- Đàn đáy has audio and detail image mapped, but no proper simple carousel card image was provided.
- Both are marked `pendingCardImage: true` with `cardImage: null`.
- Both are excluded from `SCENE10_VISIBLE_INSTRUMENTS`, so they do not appear in the normal carousel.

## Code Changes
- `scene10Instruments.js`
  - Replaced ambiguous `image` with `cardImage`.
  - Replaced `imageWidth` / `imageHeight` with `cardWidth` / `cardHeight`.
  - Added `SCENE10_VISIBLE_INSTRUMENTS` filter for carousel rendering.
  - Kept full `SCENE10_INSTRUMENTS` data for future pending instruments.
- `Scene10InstrumentPlayer.jsx`
  - Normal carousel now maps `SCENE10_VISIBLE_INSTRUMENTS`.
  - Carousel cards render `instrument.cardImage` only.
  - Info panel renders `selectedInstrument.detailImage` only.
  - Preloading handles `cardImage` and `detailImage` separately.

## Verification
- Confirmed no `chi tiết đàn ...` detail image is used as a normal carousel card.
- Confirmed detail images render only through the info panel path.
- Confirmed existing six instruments remain visible and usable.
- Confirmed Đàn tì bà and Đàn đáy are prepared for later but hidden from the carousel until proper card images exist.
- Build passed: `npm run build`.
