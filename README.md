# Store Checkout

A single-page stationery checkout with a two-item catalogue, an editable cart and a local order receipt. The customer can adjust quantities, remove a line, enter a name and place one order. Refreshing the page starts a new empty cart.

## Run locally

Use Node.js 22.17.1 or a compatible Node 22 release at or above 22.12, with npm. Run these commands from the directory containing package.json.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. For a production preview:

```sh
npm run lint
npm run build
npm run preview
```

The build type-checks application, test and configuration files with strict TypeScript, then writes static files to `dist/`.

## Browser tests

```sh
npx playwright install chromium
npx playwright test
npx playwright show-report
```

Leave port 4173 available. The test runner builds and starts its own preview, opens an isolated Chromium context for each test and stops the preview at the end. Close any separately started preview on that port first. On Linux systems missing browser libraries, use `npx playwright install --with-deps chromium`. To watch the browser, run `npx playwright test --headed`. The HTML report server prints its local URL. Stop it with Ctrl+C.

Use [the test plan](TEST_PLAN.md) for manual steps and [the execution record](TEST_RESULTS.md) for observations. Passing test screenshots are saved in `evidence/automation/`; independent browser captures are in `evidence/manual/`. The suite refreshes AT screenshots when rerun. Playwright stores failures and traces in `test-results/` and its HTML report in `playwright-report/`.

## Implementation

- `src/data/products.ts` defines the two product IDs and prices. All arithmetic uses integer paise. Formatting in Indian rupees happens at display time.
- `src/utils/cart.ts` calculates line amounts, the unit count and the grand total from immutable quantities. A decrement from one removes the line. Unsafe integer quantities and totals are rejected.
- `src/App.tsx` owns the cart, name, validation visibility and submitted receipt. Both errors appear if both inputs are invalid. Editing the form clears each error as its condition resolves.
- `src/components/` contains the product, cart, form and receipt views. A synchronous ref locks a valid submission before React renders the confirmation. The receipt snapshots the trimmed name, line items, total and local UUID. Focus moves to its heading.
- `src/App.css` contains design tokens, responsive layouts and reduced-motion overrides. Product artwork and interface icons are original SVGs. Removed items leave the accessibility tree immediately.
- `tests/checkout.spec.ts` exercises checkout through visible controls. It asserts exact prices independently of the implementation catalogue.

## Boundaries and hosting

Orders live in page memory. Reloading discards the receipt. The price is the sum of the selected units. There is no payment, persistence, shipping or tax calculation. Serve the app on localhost or HTTPS for browser-generated UUIDs.

For optional Firebase Hosting, build the project and configure an authorized Hosting project to publish `dist` at the site root. The app uses one page. To verify a hosted copy in PowerShell, set `$env:BASE_URL = 'https://YOUR-SITE.web.app'` and run `npx playwright test`. Clear the override with `Remove-Item Env:BASE_URL` to restore local testing.

## Third-party notices

React, React DOM, Scheduler and Vite runtime notices ship in [THIRD_PARTY_NOTICES.txt](public/THIRD_PARTY_NOTICES.txt). Playwright Test and TypeScript use Apache-2.0. ESLint, typescript-eslint and the installed type declarations use MIT. The lockfile pins the installed packages; their distributions contain the respective license texts. All artwork is served locally.
