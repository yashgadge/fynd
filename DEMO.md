# Recorded walkthrough

Target length: 8 minutes. Use a new local browser page, a synthetic name, the repository and a terminal in the project directory. Record the live test run and use the saved evidence to discuss earlier observations.

| Time | Show and explain |
|---|---|
| 0:00–0:45 | Introduce the customer journey. A valid local order needs at least one item and a name. Refresh starts an empty session. |
| 0:45–1:50 | Show both prices. Add Notebook, increase to three and read the ₹1,497 line and total. Add Desk Organiser and show ₹1,796. Remove Notebook and decrement the last item. |
| 1:50–2:35 | Run MT-01 with an empty cart and Sample Vale. Read the error and show the retained name, zero total and absence of a confirmation. |
| 2:35–3:25 | Add Notebook, clear the name and submit. Show the field error and preserved cart. Enter a synthetic name and show the error clearing. |
| 3:25–4:10 | Run MT-02. Rapidly double-click Place Order. Show the one resulting reference, line quantity, name and total. |
| 4:10–5:20 | Open the catalogue and cart helper. Trace 49,900 paise × 3 to the displayed amount. Show the validation function, synchronous guard and receipt snapshot. |
| 5:20–6:45 | Run npx playwright test. Open the HTML report. Explain isolation and show the assertions for AT-01, AT-02 and AT-03. Read the actual outcome of this run. |
| 6:45–7:30 | Open TEST_PLAN.md and TEST_RESULTS.md. Match the two interactive scenarios to their screenshots. Show the 320px layout. |
| 7:30–8:00 | Explain refresh behavior, browser scope and lack of payment or persistence. End on the working app. |

After recording, check the elapsed duration and audio, upload as unlisted, then open the resulting watch link in a signed-out window and verify playback.
