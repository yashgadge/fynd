# Checkout Test Plan

Verify that checkout calculates exact amounts, retains customer input after validation and produces one receipt per completed order.

## Scope and entry criteria

Use the fixed catalogue and synthetic customer names. Install the locked dependencies and matching Playwright Chromium build. Lint and the production build must pass. Run automated cases against the production preview. For manual cases, open the development URL in Edge and refresh before each case. [Setup and test commands](README.md)

## Risks

| Priority | Risk | Coverage |
|---|---|---|
| Critical | Incorrect quantities or amounts reach the receipt | AT-03, MT-02 |
| Critical | Repeated submission creates two receipts | AT-01, AT-04, MT-02 |
| High | An empty cart or blank name is accepted | AT-02, MT-01 |
| High | Validation discards customer input or cart contents | AT-02, MT-01 |
| Medium | The receipt overflows a small viewport | AT-04, responsive inspection |

## Automated Browser Tests

Each test starts in an isolated browser context with an empty cart.

| ID | Steps | Expected Result |
|---|---|---|
| AT-01 | Add Notebook, enter Sample Rowan and place the order. | One visible confirmation with a nonempty reference, Sample Rowan and Notebook × 1. The submit button disappears. |
| AT-02 | Add Notebook. Submit with a blank name, then with three spaces. | Both attempts show the required-name error and preserve the entered value. One Notebook remains at ₹499, the total is ₹499 and no receipt appears. |
| AT-03 | Add Notebook and increase to three using the product card and cart. Add Desk Organiser. Decrement Notebook once, remove its line, then decrement the remaining Desk Organiser. | Notebook line and total are ₹1,497. The mixed cart totals ₹1,796, then ₹1,297 after the decrement. Product controls reflect the quantities and return to Add when emptied. Final total is ₹0. |
| AT-04 | At 320 × 700, add Desk Organiser, enter Sample Sky and double-click Place Order. | The success heading is visible, exactly one nonempty reference appears and the document width is 320 CSS pixels. |

## Manual Test Cases

| ID | Steps | Expected Result |
|---|---|---|
| MT-01 | Leave the cart empty, enter Sample Vale and click Place Order. Inspect the message, name and total. | Checkout shows an empty-cart error, retains the name and displays ₹0. No receipt appears. |
| MT-02 | Add one Notebook, enter a synthetic name and rapidly double-click Place Order. Inspect the receipt and submit control. | One receipt with one reference, Notebook × 1 and ₹499. The submit control disappears. |

## Exit criteria and limitations

Record the actual result, status and evidence for each case. For a discrepancy, record the environment, steps, expected and actual behavior, severity and evidence. Repeat affected cases after a fix.

Inspect the layout at 320, 390, 768, 1024 and 1440 CSS pixels. Browser viewport checks cover layout only. Physical devices, screen readers and browsers beyond Chromium and Edge are outside this test plan.
