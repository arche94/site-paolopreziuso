# Summary: 02-03 — Work section component + content collection

**Phase:** 02-component-build
**Plan:** 02-03
**Completed:** 2026-04-22

## What Was Built

- `src/content.config.ts` — Astro v5 Content Layer collection definition; work items use `glob` loader + zod schema (order, title, period, role, company, body, stack)
- `src/content/work/01-mes-aps.yaml` through `04-fullstack-web.yaml` — 4 editable YAML work entries
- `src/components/Work.astro` — fetches + sorts collection by `order`; renders `doc-section-label` header and 4 `doc-case` grid articles with title, meta, body, and stack chips
- `src/pages/index.astro` — Work component added after Hero inside `.doc` wrapper
- `tests/smoke.spec.ts` — added assertion for `section#work` visibility

## Decisions Made

- Astro v5 Content Layer API (`src/content.config.ts` at `src/` root, not inside `src/content/`) — required for Astro v5 glob loader
- YAML data files (not Markdown) — work items are structured data, not long-form prose
- Sort by `order` field at query time — explicit ordering rather than relying on filesystem sort

## Verification Results

- `npm run build` — exit 0
- `dist/index.html` contains "Advanced MES + APS for manufacturing"
- `npx playwright test` — 2/2 passed

## Next

Plan 02-04: Experience timeline + Contact footer components.
