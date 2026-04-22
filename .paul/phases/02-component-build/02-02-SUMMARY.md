# Summary: 02-02 — Nav + Hero components

**Phase:** 02-component-build
**Plan:** 02-02
**Completed:** 2026-04-22

## What Was Built

- `public/logo.svg` — copied from `PP Personal website/assets/PP-logo-black-transparent.svg`; tracked in git as the canonical logo asset
- `src/components/Nav.astro` — sticky header with logo mark (`<img src="/logo.svg">`), brand name, and nav links (Index, Work, Experience, Contact)
- `src/components/Hero.astro` — dateline, h1 "Paolo Preziuso", career lede, byline with email and phone; watermark logo at 8% opacity in background
- `src/pages/index.astro` — replaced placeholder with `<Nav />` + `<Hero />` inside `.doc` layout wrapper
- `tests/smoke.spec.ts` — updated to assert title, `header.site-chrome` visibility, and `main h1` text

## Decisions Made

- Logo uses `<img src="/logo.svg">` (not SVG sprite) — user requested the actual brand SVG files from `PP Personal website/assets/` rather than the inline geometric path from the HTML prototype
- `PP Personal website/` is gitignored; `public/logo.svg` is the tracked copy
- Smoke test selector scoped to `main h1` (not bare `h1`) — Astro dev toolbar injects multiple `<h1>` elements, same pattern as Plan 02-01 fix

## Verification Results

- `npm run build` — exit 0
- `dist/index.html` title: "Paolo Preziuso — Software Engineer"
- `npx playwright test` — 2/2 passed

## Next

Plan 02-03: Work section component + content collection.
