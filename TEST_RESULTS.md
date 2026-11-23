# Test results

Executed locally on 23 November 2026, Asia/Kolkata. Windows build 10.0.26300, Node 22.17.1, npm 10.9.2, Vite 7.3.8, Playwright Test 1.65.1 and Chromium 159.0.8154.6. Automated tests used the production preview. Interactive captures used the development server.

## Automated results

The HTML report showed **4 passed, 0 failed, 0 flaky, 0 skipped** in 9.8 seconds with one worker. [Report capture](evidence/automation/report.png)

| ID | Expected | Observed | Status | Evidence |
|---|---|---|---|---|
| AT-01 | Single receipt with reference | One confirmation, nonempty reference, Sample Rowan, Notebook × 1, submit button removed | PASS | [Receipt](evidence/automation/AT-01.png) |
| AT-02 | Blank and whitespace names blocked, cart preserved | Both attempts showed “Enter a customer name.” Input value retained, one Notebook and ₹499 total, zero confirmations | PASS | [Validation](evidence/automation/AT-02.png) |
| AT-03 | Three Notebooks ₹1,497; mixed cart ₹1,796; last removal ₹0 | Line and total matched ₹1,497. Adding Desk Organiser produced ₹1,796. Removing both lines restored the empty state and ₹0 | PASS | [Three units](evidence/automation/AT-03.png) |
| AT-04 | One reference after a double-click at 320px | One nonempty reference, visible success heading, document width 320px | PASS | [Runner result](evidence/automation/report.png) |

## Interactive results

Each scenario started from a fresh page. The screenshots below were captured in a separate agent-operated Chromium session at 1366 × 850. Human observations were reported independently.

| ID | Expected | Observed | Status | Evidence |
|---|---|---|---|---|
| MT-01 | Block empty cart, preserve the name, no confirmation | The human tester reported “Add an item to your cart before placing an order.” The independent capture also showed Sample Vale still entered, zero items, ₹0 and no receipt. | PASS | [Empty-cart attempt](evidence/manual/MT-01.png) |
| MT-02 | Exactly one receipt and reference after repeated input | The human tester saw Place Order disappear and Order confirmed appear before a second click could land. The independent pointer double-click produced one reference, D720121D-CF62-4E03-835F-13D4F9649E84, for Sample Linden, Notebook × 1, ₹499. | PASS | [Receipt after double-click](evidence/manual/MT-02.png) |

## Additional checks

- Chromium DevTools Protocol emulation measured document widths of 320, 390, 768, 1024 and 1440 CSS pixels at the corresponding viewport widths. The interactive session logged zero page errors or console errors. [320px capture](evidence/manual/mobile-320.png)
- Dependency installation added 180 packages. npm reported zero known vulnerabilities and a deprecation notice for ESLint 9.39.5. ESLint completed with zero diagnostics.
- The production build passed strict TypeScript checking and transformed 39 modules. The JS bundle was 71.79 kB gzipped. HTML report serving and report contents were verified locally.
- The sandbox initially denied Vite writes to its cache and output directory. Running with approved filesystem access restored both operations. No customer-facing defect was observed in the listed cases. Defect references: none.
