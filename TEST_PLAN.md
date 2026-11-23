# Checkout test plan

Verify that a customer can place exactly one local order with the intended items and amount, and can correct an invalid checkout without losing work.

## Scope and assumptions

Use synthetic names, the fixed catalogue and a fresh page. Prices include only product quantities. A receipt completes the page session. Browser storage, real purchases and server-side order handling are outside scope.

## Risks and coverage

| Priority | Risk | Cases |
|---|---|---|
| Critical | An incorrect line amount or grand total is confirmed | AT-01, AT-03, MT-02 |
| Critical | Repeated input submits a completed order twice | AT-04, MT-02 |
| High | Empty carts or missing names produce receipts | AT-02, MT-01 |
| High | Validation discards quantities or customer input | AT-02, MT-01 |
| Medium | Small screens hide controls or clip the receipt | AT-04, responsive inspection |

## Environments and entry criteria

Install the lockfile and matching Playwright Chromium. Run lint and the production build. For automation, use the runner-managed local preview. For interactive checks, open the Vite development URL in a browser and refresh before each scenario.

## Cases

| ID | Action | Expected outcome |
|---|---|---|
| AT-01 | Add Notebook, enter Sample Rowan, place order | One visible confirmation, a nonempty reference, the name and Notebook × 1. Submit control disappears. |
| AT-02 | Add Notebook. Submit first with an empty name, then with spaces. | Required-name message, input retained, one Notebook at ₹499, total ₹499, zero confirmations. |
| AT-03 | Add Notebook and increment twice. Add Desk Organiser. Remove Notebook and decrement the remaining unit. | Notebook line and order each ₹1,497, mixed total ₹1,796, final empty cart ₹0. |
| AT-04 | At 320px add Desk Organiser, type Sample Sky and double-click Place Order. | One reference and a visible confirmation. Receipt fits viewport. |
| MT-01 | Refresh, leave cart empty, enter Sample Vale, click Place Order. Inspect cart, field and confirmation area. | Empty-cart guidance, ₹0, same name, no receipt. |
| MT-02 | Refresh, add one Notebook, enter a synthetic name, rapidly double-click Place Order. Read receipt and look for a remaining submit control. | One receipt and one reference, Notebook × 1 at ₹499, completed form cannot submit again. |

Inspect desktop and emulated mobile layout, including the 320px case. Capture the final browser state and distinguish human observations from browser-driven checks.

## Exit criteria and limitations

All critical and high risk cases have observed outcomes and supporting records. Record any discrepancy with environment, preconditions, reproduction, expected and actual behavior, severity, evidence and retest. Rerun affected checks after a fix. Chromium emulation does not establish physical-device, cross-browser or screen-reader compatibility.
