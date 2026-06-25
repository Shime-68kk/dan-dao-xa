# Scene06-2 Step Text Size Report

## Files Changed

- `src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.css`
- `SCENE06_2_STEP_TEXT_SIZE_REPORT.md`

No changes were made to `src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.jsx`.

## Selectors Updated

- `.scene06-steps__note`
- `.scene06-steps__note--process`
- `.scene06-steps__note--process-main`
- `.scene06-steps__note h3`
- `.scene06-steps__note--process-main h3`

## Previous And New Font Sizes

- `.scene06-steps__note`: `calc(11px * var(--scene06-steps-scale, 1))` -> `calc(13px * var(--scene06-steps-scale, 1))`
- `.scene06-steps__note--process`: `calc(10.2px * var(--scene06-steps-scale, 1))` -> `calc(12.2px * var(--scene06-steps-scale, 1))`
- `.scene06-steps__note--process-main`: `calc(10.4px * var(--scene06-steps-scale, 1))` -> `calc(12.4px * var(--scene06-steps-scale, 1))`
- `.scene06-steps__note h3`: `calc(12px * var(--scene06-steps-scale, 1))` -> `calc(14px * var(--scene06-steps-scale, 1))`
- `.scene06-steps__note--process-main h3`: `calc(11px * var(--scene06-steps-scale, 1))` -> `calc(13px * var(--scene06-steps-scale, 1))`

Each targeted font-size value was increased by exactly `2px`.

## Scope Confirmation

- Only Scene06 process step/note typography font sizes were changed for this task.
- Step titles and step body/description note text are larger by `+2px`.
- Card/frame widths, horizontal positions, image sizing, background, step order, and mobile architecture were not changed.
- Decorative numbers/icons, image captions, and global text outside Scene06 were not changed.
- Pinned/scroll behavior was untouched: no JSX changes were made.

## QA

- `npm run build`: passed.
- Browser QA used Playwright from a temporary `/tmp` test directory because the Browser plugin was not available.
- Checked desktop viewport `1366x768` at `http://localhost:4174/dan-dao-xa/`.
- Scrolled through Scene06 groups 1, 2, 3, and 4.
- Confirmed active group transitions still occur through scroll.
- Confirmed `.scene06-steps__sticky` still computes to `position: sticky`.
- Confirmed stage width remained `1366px` in the desktop locked layout.
- Confirmed sampled step note/title/body text was not clipped by the stage.
- Console/page errors: none detected during the Scene06 scroll check.

## Build Result

```bash
npm run build
```

Result: passed with Vite production build completed successfully.
