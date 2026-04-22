# Summary: 01-01 — Astro scaffold & Playwright setup

**Phase:** 01-astro-scaffold
**Plan:** 01-01
**Completed:** 2026-04-22
**Duration:** ~1 session

## What Was Built

- Astro project scaffolded at repo root with `output: 'static'` (no adapter)
- `package.json` with `astro ^5.7.1` and `@playwright/test ^1.52.0`
- `astro.config.mjs`, `tsconfig.json` (extends `astro/tsconfigs/base`), `.gitignore`
- `src/layouts/Base.astro` — HTML shell with Google Fonts preconnect (Inter, JetBrains Mono, Instrument Serif)
- `src/pages/index.astro` — placeholder page, title "Paolo Preziuso"
- `playwright.config.ts` — chromium only, webServer targeting `npm run dev` at localhost:4321
- `tests/smoke.spec.ts` — 2 smoke tests: page title + visible text, no console errors

## Decisions Made

- **No `@astrojs/cloudflare` adapter** — static output is sufficient; Cloudflare Pages serves `dist/` natively
- **Chromium only for Playwright** — adequate for a static portfolio; no cross-browser matrix needed at this stage
- **Google Fonts in Base.astro** — wired up now to prevent layout shift when Phase 2 applies design tokens

## Verification Results

- `npm install` — 280 packages, exit 0
- `npm run build` — exit 0, `dist/index.html` generated
- `npx playwright test` — 2/2 passed

## Deferred

- Nothing deferred from this plan

## Next

Plan 01-02: Connect repo to Cloudflare Pages, verify deploy on push, wire paolopreziuso.com domain.
