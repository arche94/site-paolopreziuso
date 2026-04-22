# Summary: 02-04 — Experience timeline + Contact footer

**Phase:** 02-component-build
**Plan:** 02-04
**Completed:** 2026-04-22

## What Was Built

- `src/components/Experience.astro` — two-column `doc-tl` grid, 7 timeline entries; M.S. AI Engineering and Backend Developer carry `.ev.now` class (accent-coloured title)
- `src/components/Contact.astro` — three-column `doc-foot` footer (Stack, Languages/Base, Get in touch); email + phone present; logo signature uses `<img src="/logo.svg" opacity: 0.5>`; GitHub/LinkedIn are `href="#"` placeholders
- `src/pages/index.astro` — Experience and Contact wired in after Work; full Document view layout now complete
- `tests/smoke.spec.ts` — added `section#contact` visibility assertion

## Decisions Made

- Experience entries hardcoded (not a content collection) — the 7 timeline rows are stable career history; Plan 02-05 is scoped to extracting contact links only
- Contact logo uses `<img src="/logo.svg">` at 50% opacity — consistent with the established approach from Plan 02-02; SVG sprite not used
- GitHub/LinkedIn `href="#"` placeholder — actual URLs will be extracted to a content file in Plan 02-05

## Verification Results

- `npm run build` — exit 0
- `dist/index.html` contains "preziusopao@gmail.com"
- `npx playwright test` — 2/2 passed

## Next

Plan 02-05: Wire contact links to a content file — last plan of Phase 2.
