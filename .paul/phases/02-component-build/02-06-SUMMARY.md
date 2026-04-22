# Summary: 02-06 — Wire all text content to site.json

**Phase:** 02-component-build
**Plan:** 02-06
**Completed:** 2026-04-23

## What Was Built

- `src/data/site.json` — single config file covering: `name`, `pageTitle`, `logo`, `email`, `phone`, `copyright`, `hero.dateline[]`, `hero.lede`, `contact.stack[]`, `contact.languages[]`, `contact.base`
- `src/components/Nav.astro` — added frontmatter; `name` and `logo` read from site.json
- `src/components/Hero.astro` — added frontmatter; all hero copy (dateline, h1, lede, byline name/email/phone, logo) read from site.json
- `src/components/Contact.astro` — stack, languages, base, copyright, logo read from site.json; social links still from links.json
- `src/pages/index.astro` — page title read from `site.pageTitle`

## Decisions Made

- Single `site.json` (not per-component config files) — one file to open for identity/copy changes; simpler than splitting across multiple JSONs
- Nav links (Index/Work/Experience/Contact) remain hardcoded — they are structural anchor targets, not copy
- Stack and languages rendered as `{line}{i < arr.length - 1 && <br/>}` — preserves the original line-break-separated visual layout without raw HTML strings

## Verification Results

- `npm run build` — exit 0
- `dist/index.html` contains "Paolo Preziuso — Software Engineer" (from `pageTitle`) and "Seven years writing" (from `hero.lede`)
- `npx playwright test` — 2/2 passed

## Content edit map (full picture after Phase 2)

| What to edit | File |
|---|---|
| Name, title, email, phone, lede, dateline, copyright | `src/data/site.json` |
| Logo image | `public/logo.svg` (replace file) |
| GitHub / LinkedIn URLs | `src/data/links.json` |
| Work items | `src/content/work/*.yaml` |
| Experience / education entries | `src/content/experience/*.yaml` |

## Next

Phase 3: Polish, responsive QA & launch.
