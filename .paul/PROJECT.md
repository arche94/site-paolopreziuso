# site-paolopreziuso

## What This Is

A personal portfolio website for Paolo Preziuso, a full-stack software engineer. The site presents his professional experience and selected work in a clean editorial layout, and exposes contact information so visitors can reach him. Being migrated from a plain HTML prototype to an Astro-based site hosted on Cloudflare Pages at paolopreziuso.com.

## Core Value

Visitors can quickly understand Paolo's professional experience and value and reach out to him.

## Current State

| Attribute    | Value       |
| ------------ | ----------- |
| Type         | Application |
| Version      | 0.0.0       |
| Status       | Prototype   |
| Last Updated | 2026-04-22  |

**Production URLs:**

- paolopreziuso.com: Target domain (not yet live)

## Requirements

### Core Features

- Career & work history — visitors can read Paolo's experience, selected projects, and tech stack
- Contact — visitors can reach Paolo via email, phone, GitHub, LinkedIn exposed on the page
- Content editable without touching code — non-developer-friendly content management via Astro content collections or config files

### Validated (Shipped)

None yet.

### Active (In Progress)

None yet.

### Planned (Next)

- Migrate "Document" view from HTML prototype to Astro
- Set up Cloudflare Pages deploy pipeline
- Implement content-editable structure (no code edits for content changes)

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

## Success Metrics

| Metric                                | Target                                      | Current | Status      |
| ------------------------------------- | ------------------------------------------- | ------- | ----------- |
| Renders correctly on desktop & mobile | 100% match to Document view prototype       | -       | Not started |
| Fully responsive                      | No layout breaks at any breakpoint          | -       | Not started |
| Content editable without code         | All copy/links changeable via content files | -       | Not started |

## Tech Stack

| Layer     | Technology                              | Notes                                                  |
| --------- | --------------------------------------- | ------------------------------------------------------ |
| Framework | Astro                                   | SSG, content collections for editable content          |
| Styling   | CSS (scoped)                            | Port design tokens from prototype                      |
| Hosting   | Cloudflare Pages                        | CI/CD via GitHub Actions or Cloudflare git integration |
| Domain    | paolopreziuso.com                       | Target domain                                          |
| Fonts     | Inter, JetBrains Mono, Instrument Serif | Via Google Fonts (as in prototype)                     |

## Links

| Resource         | URL                                                       |
| ---------------- | --------------------------------------------------------- |
| Repository       | github.com/paolopreziuso/site-paolopreziuso               |
| Design reference | PP Personal website/Personal Website.html (Document view) |

---

_PROJECT.md — Updated when requirements or context change_
_Last updated: 2026-04-22_
