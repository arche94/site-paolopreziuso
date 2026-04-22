# Summary: 02-05 — Wire experience + contact links to data files

**Phase:** 02-component-build
**Plan:** 02-05
**Completed:** 2026-04-22

## What Was Built

- `src/content.config.ts` — `experience` collection added alongside `work`; same glob+zod pattern, schema: `order`, `period`, `title`, `company`, `current: boolean`
- `src/content/experience/*.yaml` — 7 entries (01-ms-ai through 07-bs-cs); `current: true` on the two active roles
- `src/components/Experience.astro` — rewritten to `getCollection('experience')`, sorted by `order`; `current` field drives `.ev.now` class for accent highlighting
- `src/data/links.json` — GitHub and LinkedIn URLs as a plain JSON config file
- `src/components/Contact.astro` — imports `links.json`; GitHub/LinkedIn anchors now use `{links.github}` and `{links.linkedin}`
- `tests/smoke.spec.ts` — added `section#contact a[href*="github"]` visibility assertion

## Decisions Made

- Experience uses a content collection (not a flat JSON array) — consistent with work items; adding/removing an entry is just adding/removing a YAML file
- Contact links use plain JSON import (`src/data/links.json`) — not a content collection; 2 values don't warrant collection overhead, and JSON is natively imported by Vite with no plugin
- Stack list in Contact.astro remains hardcoded — it's stable presentation data, not content

## Verification Results

- `npm run build` — exit 0
- `dist/index.html` contains "M.S. AI Engineering" (from YAML) and "https://github.com/paolopreziuso" (from JSON)
- `npx playwright test` — 2/2 passed

## Phase 2 Complete

All variable content is now editable without touching component code:
- Work items → `src/content/work/*.yaml`
- Experience entries → `src/content/experience/*.yaml`
- Contact links → `src/data/links.json`

## Next

Phase 3: Polish, responsive QA & launch (03-01: Responsive QA and fixes).
