# Scene10 Part 2 Add Tì Bà / Đáy Audio Report

## Scope
- Patched Scene10 Part 2 carousel/data/audio behavior only.
- Did not change previous scenes.
- Did not change Scene10 Part 1 title/paragraph.
- Did not redesign the accepted carousel/info/player layout.

## Files Changed
- `src/sections/page01/Scene10SoundCulture/scene10Instruments.js`
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.jsx`
- `src/assets/page01/scene10/instruments/scene10-detail-dan-ti-ba.png`
- `src/assets/page01/scene10/instruments/scene10-detail-dan-day.png`
- `src/assets/page01/scene10/instruments/dan-ti-ba.mp3`
- `src/assets/page01/scene10/instruments/dan-day.mp3`

## Carousel Order After Patch
1. Đàn nguyệt
2. Đàn tam
3. Đàn bầu
4. Đàn tranh
5. Đàn nhị
6. Đàn tứ
7. Đàn tì bà
8. Đàn đáy

## New Assets
- Đàn tì bà image/detail asset:
  - `src/assets/page01/scene10/instruments/scene10-detail-dan-ti-ba.png`
  - copied from `slide 10-2/chi tiết đàn tì bà.png`
  - dimensions: `1878 x 1056`
- Đàn đáy image/detail asset:
  - `src/assets/page01/scene10/instruments/scene10-detail-dan-day.png`
  - copied from `slide 10-2/chi tiết đàn đáy.png`
  - dimensions: `1878 x 1056`

## Audio Mapping
- Đàn tì bà audio:
  - `src/assets/page01/scene10/instruments/dan-ti-ba.mp3`
  - copied from `slide 10-2/âm thanh/tì bà.MP3`
- Đàn đáy audio:
  - `src/assets/page01/scene10/instruments/dan-day.mp3`
  - copied from `slide 10-2/âm thanh/đàn đáy.MP3`

## Autoplay / Viewport Audio
- Implemented IntersectionObserver for Scene10 Part 2.
- Meaningful visibility threshold: `intersectionRatio >= 0.55`.
- On entering viewport:
  - dispatches `dao-xa:scene10-audio-focus`
  - dispatches `scene10-audio-focus`
  - pauses other audio/video elements
  - attempts safe playback of the selected instrument
- On leaving viewport:
  - pauses Scene10 audio
  - sets playing state to false
- Browser autoplay rejection is caught.
- If autoplay is blocked, UI sets `autoplayBlocked` and shows `Nhấn Play để nghe`.
- Manual Play sets `hasUserEnabledScene10Audio`, allowing clean continuation on instrument changes while playing.
- Manual Pause prevents viewport autoplay from restarting until Play is pressed again.

## Volume
- Default volume is now `0.75`.
- Existing mute/unmute and slider behavior remain wired to the real audio element.
- Volume and muted state are applied to the active audio element.

## Sharpness
- Active card/detail images continue to use foreground `<img>` elements.
- Current/previous/next images and all visible card/detail images are preloaded/decode-attempted.
- No blur/filter was added to active selected card or active detail panel.
- Image dimensions are now data-driven so the new `1878 x 1056` assets are not declared as square images.

## Arrow / Interaction Notes
- Previous/next arrows, keyboard navigation, swipe handlers, play/pause, info mode, and volume controls were preserved.
- Info-mode arrows were source-verified to remain above panels via existing z-index/pointer-events rules.
- A reliable automated browser click test was not run in this environment; build and source checks passed.

## Build
- Command: `npm run build`
- Result: Passed.
