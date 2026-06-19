# Scene06 Part 2 Group 3 B7/B8 Content Layout Report

## Scope

- Patched only Scene06 Part 2 Group 3.
- Group 3 now contains only Bước 7, Bước 8, and the flower ornament.
- Group 1 and Group 2 were not changed.
- Group 4 / Bước 9 and the quote paper were not changed.
- Pin/scroll transition logic, card crop files, and shared card sizing were not changed.

## Files Changed

- `/home/quang/Documents/brief-1/project/src/sections/page01/Scene06CraftSteps/Scene06CraftSteps.jsx`

## Final Group 3 Coordinates

Cards:

- B7: `x=455`, `y=282`
- B8: `x=850`, `y=282`

Notes:

- B7 note: `x=620`, `y=115`, `width=210`
- B8 note: `x=1015`, `y=115`, `width=260`

Flower ornament:

- Asset: `/home/quang/Documents/brief-1/project/src/assets/page01/scene06/steps/ornaments/flower-ornament.png`
- Coordinates: `x=190`, `y=430`, `width=220`

## Exact B7 Text Used

Title: `BỊT DA CỘNG HƯỞNG`

- `Dùng da trăn đã xử lý`
- `Với đàn nhị, đàn tam, mặt đàn thường được bịt bằng da trăn để tạo âm thanh.`
- `Căng da vừa đủ`
- `Người thợ phải căng da thật đều, không quá chùng cũng không quá căng.`
- `Nếu da quá chùng, tiếng đàn sẽ kém vang.`
- `Nếu da quá căng, âm sắc có thể bị gắt hoặc thiếu độ ấm.`
- `Kiểm tra độ cộng hưởng`
- `Sau khi bịt da, người thợ tiếp tục chỉnh và kiểm tra mặt đàn trước khi chuyển sang bước hoàn thiện.`

## Exact B8 Text Used

Title: `LẮP DÂY / GẮN PHÍM`

- `Lắp dây đàn`
- `Sau khi hoàn thiện thân đàn, người thợ lắp dây tơ hoặc dây cước tuỳ từng loại đàn.`
- `Gắn chi tiết quan trọng`
- `Các bộ phận như ngựa đàn và phím đàn được gắn lên thân đàn.`
- `Cần độ chính xác cao`
- `Chỉ cần lệch một chút, khi gảy thử, nốt đàn có thể bị phô, sai dải âm hoặc lệch sang nốt khác.`
- `Kết hợp kinh nghiệm và máy móc`
- `Ngày nay, ngoài đôi tai và kinh nghiệm của người thợ, máy đo dài tần cũng được dùng để hỗ trợ gắn phím chính xác hơn.`

Customer text was not shortened, summarized, or rewritten.

## QA Results

Desktop 1366px:

- Active group: Group 3.
- Visible cards: B7 and B8 only.
- B6 present: no.
- B9 present: no.
- B7/B8 card sizes remained identical.
- Automated overlap check: no overlaps.
- Horizontal overflow: no.
- Flower appears larger at the lower-left near the cream band.

Desktop 1536px:

- Group 3 scaled cleanly.
- Visible cards: B7 and B8 only.
- B6/B9 did not appear.
- Automated overlap check: no overlaps.
- Horizontal overflow: no.

Mobile 390px:

- Group 3 remained scaled consistently.
- Visible cards: B7 and B8 only.
- B6/B9 did not appear.
- Automated overlap check: no overlaps.
- Horizontal overflow: no.

## Build

Build was not run because this request asked for a targeted Group 3 layout/content patch and QA, not a build.
