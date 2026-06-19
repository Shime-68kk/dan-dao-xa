# Scene13 Implementation Report

## Files Changed

- `src/sections/page01/Scene13FutureQuestion/Scene13FutureQuestion.jsx`
- `src/sections/page01/Scene13FutureQuestion/Scene13FutureQuestion.css`
- `src/pages/Page01Story/Page01Story.jsx`
- `src/assets/page01/scene13/scene13-bg.png`
- `src/assets/page01/scene13/scene13-video-poster.jpg`
- `public/scene13/dao-xa-slide13.mp4`

## Assets Copied / Used

- Background: `slide 13/nền chủ đạo.png` copied to `src/assets/page01/scene13/scene13-bg.png`
- Video: `slide 13/0619 (3).mp4` copied to `public/scene13/dao-xa-slide13.mp4`
- Poster: generated from the video at `00:01:04`, saved as `src/assets/page01/scene13/scene13-video-poster.jpg`
- Reference: `slide 13/thamkhao13.png` used only for visual/layout comparison.

## Video Metadata

- Codec: HEVC / `hvc1`
- Resolution: `1280 x 720`
- Duration: `71.6s`
- Size: `50,900,724 bytes`

## Video Behavior

- Video is not imported into the JS bundle.
- Video is referenced by static URL: `/scene13/dao-xa-slide13.mp4`
- Modal video uses `preload="metadata"`.
- Source is assigned only when Scene13 is near the viewport.
- Preview click opens a centered modal overlay.
- ESC and backdrop click close the modal.
- Closing the modal pauses and resets the video.
- Modal includes native controls and a manual play/pause button.
- Unsupported HEVC fallback text is implemented: `Trình duyệt không hỗ trợ video này.`
- Opening the modal pauses other audio/video elements.

## Layout QA

- Scene13 is wired after Scene12 in `Page01Story.jsx`.
- Desktop artboard uses a `1366 x 768` coordinate system.
- Title hierarchy, beige text boxes, quote block, video preview, and caption box are placed to match `thamkhao13.png`.
- Mobile switches to a vertical stacked layout to keep text and video readable.
- No horizontal overflow is expected from Scene13; desktop uses scaled artboard and mobile uses normal flow.

## Build Result

- `npm run build` passed.

## Notes

- Browser-interactive modal QA should still be confirmed manually in a real browser, especially because HEVC playback support depends on the browser/OS codec stack.
