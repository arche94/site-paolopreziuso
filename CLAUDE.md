# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio website for Paolo Preziuso. The site is currently plain HTML/CSS — no build tool, no bundler, no package manager.

The active source lives in `PP Personal website/`:
- `Personal Website v2.html` — current main page (self-contained: all CSS is inlined in `<style>`)
- `wireframes.html` — design exploration / wireframe reference
- `assets/` — SVG logo mark
- `uploads/` — static assets (logo PNG, PDF resume)

A previous Eleventy-based site existed on this branch but was deleted; only the `PP Personal website/` directory remains active.

## Design system (inline CSS tokens)

All pages use CSS custom properties defined in `:root`:

| Token | Role |
|---|---|
| `--bg` / `--bg-2` | Page backgrounds (off-white) |
| `--ink` / `--ink-2` | Body text |
| `--muted` | Secondary/label text |
| `--accent` | Brand red `#d94a28` |
| `--rule` / `--rule-strong` | Dividers |
| `--sans` | Inter |
| `--mono` | JetBrains Mono |
| `--serif` | Instrument Serif |

## Deployment

The repo has a GitHub Actions workflow (previously at `.github/workflows/deploy.yml`, now deleted from the working tree). Deployment targets GitHub Pages. The built artifact was the `pages` output from Eleventy; with the plain-HTML approach, the `PP Personal website/` directory should be served directly or a new workflow added.

## Development

No build step. Open `PP Personal website/Personal Website v2.html` directly in a browser. Use a local static server (e.g. `npx serve "PP Personal website"`) if you need `fetch` or relative-path requests to work correctly.
