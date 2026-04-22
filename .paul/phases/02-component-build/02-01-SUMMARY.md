# Summary: 02-01 — Global styles & design tokens

**Phase:** 02-component-build
**Plan:** 02-01
**Completed:** 2026-04-22

## What Was Built

- `src/styles/global.css` — CSS custom properties (--paper, --paper-2, --ink, --ink-2, --ink-muted, --rule, --accent, --body, --mono, --serif), box-sizing reset, html/body base styles, anchor reset
- `src/layouts/Base.astro` — corrected Google Fonts URL (IBM Plex Serif + Fraunces + Inter + JetBrains Mono; Instrument Serif removed), global.css imported via frontmatter

## Decisions Made

- Token names match the `Personal Website.html` prototype exactly (--paper, --ink-muted, etc.) — not the v2.html variant
- global.css is import-only (tokens + reset); no component styles

## Fix Applied

- Smoke test selector tightened from `locator('p')` to `locator('main p')` — Astro's dev toolbar injects extra `<p>` elements in dev mode, causing strict mode violation

## Verification Results

- `npm run build` — exit 0
- `dist/index.html` contains `IBM+Plex+Serif`, does NOT contain `Instrument+Serif`
- `npx playwright test` — 2/2 passed

## Next

Plan 02-02: Nav + Hero components — port the sticky navigation and hero section from the Document view.
