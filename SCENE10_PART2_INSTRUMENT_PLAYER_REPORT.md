# Scene10 Part 2 Instrument Player Report

## Scope
- Implemented Scene10 Part 2 only, underneath the existing Scene10 Part 1 title/paragraph.
- Scene10 Part 1 typography/layout values were preserved.
- Did not implement any separate future section beyond the instrument selector/player.
- Did not flatten the UI into screenshots and did not add external packages.

## Assets Audited
- Source folder: `slide 10-2`.
- Complete instrument sets found and used:
  - `Đàn nguyệt`
  - `Đàn tam`
  - `Đàn bầu`
  - `Đàn tranh`
  - `Đàn nhị`
  - `Đàn tứ`
- Audio-only assets found but not displayed:
  - `tì bà.MP3`
  - `đàn đáy.MP3`
- `Tỳ bà` and `Đàn đáy` are represented in future-data placeholders only because card/detail images are missing.

## Normalized Assets Added
- `src/assets/page01/scene10/instruments/dan-nguyet.png`
- `src/assets/page01/scene10/instruments/detail-dan-nguyet.png`
- `src/assets/page01/scene10/instruments/dan-nguyet.mp3`
- `src/assets/page01/scene10/instruments/dan-tam.png`
- `src/assets/page01/scene10/instruments/detail-dan-tam.png`
- `src/assets/page01/scene10/instruments/dan-tam.mp3`
- `src/assets/page01/scene10/instruments/dan-bau.png`
- `src/assets/page01/scene10/instruments/detail-dan-bau.png`
- `src/assets/page01/scene10/instruments/dan-bau.mp3`
- `src/assets/page01/scene10/instruments/dan-tranh.png`
- `src/assets/page01/scene10/instruments/detail-dan-tranh.png`
- `src/assets/page01/scene10/instruments/dan-tranh.mp3`
- `src/assets/page01/scene10/instruments/dan-nhi.png`
- `src/assets/page01/scene10/instruments/detail-dan-nhi.png`
- `src/assets/page01/scene10/instruments/dan-nhi.mp3`
- `src/assets/page01/scene10/instruments/dan-tu.png`
- `src/assets/page01/scene10/instruments/detail-dan-tu.png`
- `src/assets/page01/scene10/instruments/dan-tu.mp3`
- `src/assets/page01/scene10/instruments/playlist-frame.png`

## Files Changed
- `src/sections/page01/Scene10SoundCulture/Scene10SoundCulture.jsx`
- `src/sections/page01/Scene10SoundCulture/Scene10SoundCulture.css`
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.jsx`
- `src/sections/page01/Scene10SoundCulture/Scene10InstrumentPlayer.css`
- `src/sections/page01/Scene10SoundCulture/scene10Instruments.js`
- `src/components/media/AudioNarrationButton.jsx`

## Component Structure
- `Scene10InstrumentPlayer.jsx`
  - Cover Flow carousel
  - Real audio element
  - Prev/Play/Next/Info/List/Volume controls
  - Pointer swipe support
  - Keyboard ArrowLeft/ArrowRight support when Scene10 Part 2 has entered viewport
- `Scene10InstrumentPlayer.css`
  - 3D perspective card transforms
  - Glass playlist control bar
  - Detail-panel transition
  - Mobile scale-friendly behavior
  - `prefers-reduced-motion` fallback
- `scene10Instruments.js`
  - Six visible complete instruments
  - Future placeholders for `Tỳ bà` and `Đàn đáy`

## Interaction Behavior
- Center card is selected.
- Side cards recede using 3D transforms:
  - selected: `translateZ(120px) scale(1.12)`
  - side 1: `translateX(±230px) scale(.92) rotateY(∓18deg)`
  - side 2: `translateX(±400px) translateZ(-120px) scale(.76) rotateY(∓28deg)`
- Clicking/tapping any visible card selects it.
- Desktop arrows select previous/next.
- Keyboard ArrowLeft/ArrowRight select previous/next.
- Mobile swipe left/right selects next/previous.
- Play/Pause plays only the selected instrument.
- Prev/Next while playing switches the audio source and resumes cleanly.
- `Thông tin` opens the matching `detail-*.png` with slide/fade motion and no cropping.

## Audio Focus
- Added global event: `dao-xa:scene10-audio-focus`.
- Scene10 Part 2 dispatches this event when it enters the viewport and before instrument playback.
- Existing `AudioNarrationButton` listens for this event and pauses narration.
- Scene10 Part 2 also defensively pauses all `audio`/`video` elements except its own instrument audio element.
- Instrument audio does not autoplay; playback starts only after the user presses Play.

## Responsive / Overflow Notes
- Scene10 still uses the existing 1366 x 869 scaled artboard model.
- The player is placed inside the lower reserved portion of the same artboard at `top: 312px`.
- No unscaled 1366px element is placed outside the artboard shell.
- Mobile arrows are hidden; swipe remains active.
- Horizontal overflow protection remains through the parent scaled artboard and `overflow: hidden`.

## QA Notes
- `1366x768`: code path uses full 1366 artboard; six instruments render in the Cover Flow data set; Part 1 remains at its previous coordinates.
- `1536x864`: artboard scales by document width; transforms remain proportional inside the artboard.
- `390x844`: artboard scales to viewport width; side cards are simplified and swipe controls remain available.
- Exactly six instruments are visible from `SCENE10_INSTRUMENTS`.
- `Tỳ bà` and `Đàn đáy` are not displayed because their image sets are missing.
- Headless Chromium screenshot capture was attempted, but this environment reported a written screenshot path without producing an accessible file. Build and static interaction checks passed.

## Build
- Command: `npm run build`
- Result: Passed.
