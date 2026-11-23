# Store Checkout Walkthrough

Allow eight minutes. Start with an empty cart, a synthetic customer name and a terminal open in the repository directory. Leave port 4173 free for Playwright.

| Time | Demonstration |
|---|---|
| 0:00–0:45 | Introduce the two products, the required name and the order receipt. |
| 0:45–1:50 | Increase Notebook to three using the product card and cart. Show the ₹1,497 line and order total. Add Desk Organiser for ₹1,796. Remove both products and show ₹0. |
| 1:50–2:35 | Run MT-01. Enter Sample Vale and submit the empty cart. Show the validation message, retained name and ₹0 total. |
| 2:35–3:25 | Add Notebook, clear the name and submit again. Show the field error and unchanged cart. Enter a synthetic name to clear the error. |
| 3:25–4:10 | Run MT-02. Rapidly double-click Place Order and inspect the single reference, quantity and total. |
| 4:10–5:20 | Follow one calculation from the catalogue through the cart helper: 49,900 paise × 3 gives ₹1,497. Show where validation runs and where a valid submission locks the cart. |
| 5:20–6:45 | Run `npx playwright test` and open the HTML report. Show the receipt, validation and exact-total assertions, then the 320px double-click case. Explain how each case starts from an empty cart. |
| 6:45–7:30 | Compare the manual cases with their recorded outcomes. Show the Edge recording and the 320px screenshot. |
| 7:30–8:00 | Explain what a refresh clears and which browsers were tested. |

Use the [test plan](TEST_PLAN.md) for the steps and [test execution results](TEST_RESULTS.md) for the evidence. After recording, check playback, audio and duration. Verify the unlisted video link in a signed-out browser.
