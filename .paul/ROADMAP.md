# Roadmap: site-paolopreziuso

## Overview

Migrate the existing HTML/CSS portfolio prototype to a production Astro site deployed on Cloudflare Pages at paolopreziuso.com — with content editable without touching code, fully responsive, and matching the "Document" view design.

## Current Milestone

**v0.1 Initial Release** (v0.1.0)
Status: In progress
Phases: 0 of 3 complete

## Phases

| Phase | Name                             | Plans | Status      | Completed  |
| ----- | -------------------------------- | ----- | ----------- | ---------- |
| 1     | Astro scaffold & deploy pipeline | 2     | Complete    | 2026-04-22 |
| 2     | Component build & content layer  | 5     | Complete    | 2026-04-22 |
| 3     | Polish, responsive QA & launch   | TBD   | Planning    | -          |

## Phase Details

### Phase 1: Astro scaffold & deploy pipeline

**Goal:** Working Astro project deployed to Cloudflare Pages from git push — blank but live at the target domain.
**Depends on:** Nothing
**Research:** Likely (Cloudflare Pages + Astro adapter configuration)

**Scope:**

- Scaffold Astro project
- Configure Cloudflare Pages adapter
- Set up CI/CD (GitHub Actions or Cloudflare git integration)
- Custom domain wired up

**Plans:**

- [x] 01-01: Scaffold Astro, configure Cloudflare adapter, verify local build
- [x] 01-02: Connect repo to Cloudflare Pages, verify deploy on push, wire domain

### Phase 2: Component build & content layer

**Goal:** Full "Document" view rendered in Astro with all content editable via content files — no code edits needed for copy/link changes.
**Depends on:** Phase 1 (live deploy pipeline)
**Research:** Unlikely (porting known HTML/CSS)

**Scope:**

- Port design tokens and global styles from prototype
- Build Astro components: Nav, Hero, Work section, Experience timeline, Contact footer
- Implement Astro content collections (or config YAML/JSON) for: work items, experience entries, contact links, stack list
- Validate component output matches Document view prototype visually

**Plans:**

- [x] 02-01: Global styles, design tokens, font setup
- [x] 02-02: Nav + Hero components
- [x] 02-03: Work section component + content collection
- [x] 02-04: Experience timeline + Contact footer components
- [x] 02-05: Wire all content collections, smoke-test content edits
- [x] 02-06: Wire all text content (name, lede, dateline, stack, etc.) to site.json

### Phase 3: Polish, responsive QA & launch

**Goal:** Site is pixel-correct, fully responsive, and ready to share publicly.
**Depends on:** Phase 2 (all components built)
**Research:** Unlikely

**Scope:**

- Responsive QA across breakpoints (mobile, tablet, desktop)
- Fix any layout regressions vs prototype
- SEO basics (title, meta description, OG tags)
- Final content review

**Plans:**

- [x] 03-01: Tailwind CSS setup + design token config
- [x] 03-02: Nav + Hero + page wrapper responsive rewrite (hamburger, fluid headline)
- [x] 03-03: Work + Experience + Contact responsive rewrite (grid collapse, 4K)
- [ ] 03-04: SEO basics + final content pass + launch sign-off (Planning)

---

_Roadmap created: 2026-04-22_
_Last updated: 2026-04-22_
