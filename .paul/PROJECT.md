# site-paolopreziuso

## What This Is

A personal portfolio website for Paolo Preziuso, a full-stack software engineer. The site presents his professional experience and selected work in a clean editorial layout, and exposes contact information so visitors can reach him. Migrated from a plain HTML prototype to an Astro-based site hosted on Cloudflare Pages at paolopreziuso.com.

## Core Value

Visitors can quickly understand Paolo's professional experience and value and reach out to him.

## Current State

| Attribute    | Value       |
| ------------ | ----------- |
| Type         | Application |
| Version      | 0.1.0       |
| Status       | Live        |
| Last Updated | 2026-04-28  |

**Production URLs:**

- paolopreziuso.com — live

## Requirements

### Core Features

- Career & work history — visitors can read Paolo's experience, selected projects, and tech stack
- Contact — visitors can reach Paolo via email, phone, GitHub, LinkedIn exposed on the page
- Content editable without touching code — non-developer-friendly content management via Astro content collections or config files

### Validated (Shipped)

- ✓ Migrate "Document" view from HTML prototype to Astro — Phase 2
- ✓ Set up Cloudflare Pages deploy pipeline — Phase 1
- ✓ Implement content-editable structure (site.json + content collections) — Phase 2
- ✓ Fully responsive at all breakpoints (375px → 4K) via Tailwind — Phase 3
- ✓ SEO basics (meta description, OG tags, Twitter Card) — Phase 3

### Active (In Progress)

None.

### Planned (Next)

- og:image / social card image — deferred; no suitable asset at launch

### Out of Scope

- Terminal view (second design from prototype) — excluded from v1
- Articles / use cases section — future extension only

## Constraints

### Technical Constraints

- Hosting: Cloudflare Pages
- Domain: paolopreziuso.com
- Design source: "Document" view from `PP Personal website/Personal Website.html` — this is the reference to implement
- Framework: Astro

### Business Constraints

- Solo project — no approval chains

## Key Decisions

| Decision                   | Rationale                                                                                 | Date       | Status |
| -------------------------- | ----------------------------------------------------------------------------------------- | ---------- | ------ |
| Use Astro                  | Allows content editing without code changes via content collections; good static site fit | 2026-04-22 | Active |
| Document view only for v1  | Terminal view excluded to keep scope tight                                                | 2026-04-22 | Active |
| Deploy to Cloudflare Pages | Requested by owner                                                                        | 2026-04-22 | Active |
| Tailwind CSS for Phase 3   | Enables responsive prefixes, fluid type, 4K layout without fighting existing design tokens | 2026-04-23 | Active |
| Omit og:image at launch    | No suitable image asset; SVG not appropriate for OG; deferred to future pass             | 2026-04-28 | Active |

## Success Metrics

| Metric                                | Target                                      | Current              | Status |
| ------------------------------------- | ------------------------------------------- | -------------------- | ------ |
| Renders correctly on desktop & mobile | 100% match to Document view prototype       | Matches prototype    | Met    |
| Fully responsive                      | No layout breaks at any breakpoint          | 375px → 4K verified  | Met    |
| Content editable without code         | All copy/links changeable via content files | site.json + YAML     | Met    |

## Tech Stack

| Layer     | Technology                              | Notes                                                  |
| --------- | --------------------------------------- | ------------------------------------------------------ |
| Framework | Astro                                   | SSG, content collections for editable content          |
| Styling   | Tailwind CSS + CSS (scoped)             | Tailwind for responsive layout; scoped CSS for tokens  |
| Hosting   | Cloudflare Pages                        | Deploy on push to main via Cloudflare git integration  |
| Domain    | paolopreziuso.com                       | Live                                                   |
| Fonts     | Inter, JetBrains Mono, Instrument Serif | Via Google Fonts                                       |

## Links

| Resource         | URL                                                       |
| ---------------- | --------------------------------------------------------- |
| Repository       | github.com/paolopreziuso/site-paolopreziuso               |
| Design reference | PP Personal website/Personal Website.html (Document view) |

---

_PROJECT.md — Updated when requirements or context change_
_Last updated: 2026-04-28 after Phase 3 (v0.1.0 shipped)_
