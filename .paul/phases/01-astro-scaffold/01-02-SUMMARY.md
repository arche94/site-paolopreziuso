# Summary: 01-02 — GitHub Actions deploy pipeline

**Phase:** 01-astro-scaffold
**Plan:** 01-02
**Completed:** 2026-04-22

## What Was Built

- `.github/workflows/deploy.yml` — build → Playwright smoke test → `wrangler pages deploy` on push to `main`
- `.gitignore` updated to exclude `PP Personal website/` (design reference, not part of build)
- `README.md` written with dev commands, deploy instructions, stack overview

## Decisions Made

- **GitHub Actions over Cloudflare git integration** — CI runs Playwright tests before deploy, giving a safety gate
- **`npx wrangler` (no project dependency)** — avoids version pinning maintenance
- **`PP Personal website/` excluded from git** — prototype is reference only; stays local

## Verification Results

- Workflow file valid YAML ✓
- Pushed to main; deploy triggered by user ✓
- Custom domain (paolopreziuso.com) — deferred; to be confirmed after Phase 2

## Deferred

- Domain wiring confirmation (paolopreziuso.com) — deferred to Phase 3 launch sign-off

## Next

Phase 2: Component build & content layer — port the Document view from the HTML prototype to Astro components with editable content collections.
