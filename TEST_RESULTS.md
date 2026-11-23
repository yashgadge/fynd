# Test Execution Results

**Execution date:** 23 November 2026 (Asia/Kolkata). **Environment:** Windows build 10.0.26300, Node.js 22.17.1, npm 10.9.2 and Vite 7.3.8.

## Automated Browser Tests

Playwright Test 1.65.1 ran against the production preview in Chromium 159.0.8154.6. The run started at 12:07:47 IST and finished in 9.9 seconds with one worker: **4 passed, 0 failed, 0 flaky, 0 skipped**. [Report capture](evidence/automation/report.png)

| ID | Expected Result | Actual Result | Status | Evidence |
|---|---|---|---|---|
| AT-01 | Single receipt with reference | One confirmation, nonempty reference, Sample Rowan, Notebook × 1, submit button removed | PASS | [Receipt](evidence/automation/AT-01.png) |
| AT-02 | Blank and whitespace names blocked, cart preserved | Both attempts showed “Enter a customer name.” Input value retained, one Notebook and ₹499 total, zero confirmations | PASS | [Validation](evidence/automation/AT-02.png) |
| AT-03 | Exact line and order totals as quantities change | Three Notebooks totalled ₹1,497. Adding Desk Organiser raised the total to ₹1,796. Removing one Notebook reduced it to ₹1,297. Removing the remaining items restored the empty cart and ₹0. | PASS | [Three units](evidence/automation/AT-03.png) |
| AT-04 | One reference after a double-click at 320px | One nonempty reference, visible success heading, document width 320px | PASS | [Runner result](evidence/automation/report.png) |

## Manual Test Cases

Both manual test cases (MT-01 and MT-02) were executed in Microsoft Edge on 23 November 2026 against the development server. Both tests passed, with the actual results matching the expected behavior. The tests verified empty-cart validation, customer-name retention, successful order placement and prevention of duplicate receipts. [Edge recording](evidence/manual/checkout.webm)

| ID | Expected Result | Actual Result | Status | Evidence |
|---|---|---|---|---|
| MT-01 | Block empty-cart checkout and retain the name | “Add an item to your cart before placing an order.” Sample Vale remained in the field. The cart showed zero items, ₹0 and no receipt. | PASS | [Empty-cart attempt](evidence/manual/MT-01.png) |
| MT-02 | Show one receipt and one reference after a rapid double-click | The submit button disappeared and one ₹499 receipt appeared with a single reference. The Edge capture shows Sample Linden, Notebook × 1 and reference `83521040-8894-4098-A62B-C1C348818579`. | PASS | [Receipt after double-click](evidence/manual/MT-02.png) |

## Additional checks

- On 23 November 2026, AT-01 through AT-04 also passed against the Firebase Hosting release in 8.7 seconds with one Chromium worker. [Hosted checkout](https://fynd-r1.web.app/)

- At viewport widths of 320, 390, 768, 1024 and 1440 CSS pixels, the document fit the viewport exactly. The browser-assisted checks logged zero page errors or console errors. [320px capture](evidence/manual/mobile-320.png)
- ESLint completed with zero diagnostics. The suite built the production preview with strict TypeScript checking. The generated HTML report was opened and its counts verified.

## Defects and Limitations

No customer-facing defects were observed in the listed cases. No defect reports were filed. Coverage is limited to Chromium and Edge on Windows. The mobile checks used emulated viewports. Physical devices and screen readers were outside scope.
