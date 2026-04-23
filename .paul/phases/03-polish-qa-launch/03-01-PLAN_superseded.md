---
phase: 03-polish-qa-launch
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - src/components/Nav.astro
  - src/components/Hero.astro
  - src/pages/index.astro
  - src/components/Work.astro
  - src/components/Experience.astro
  - src/components/Contact.astro
autonomous: false
---

<objective>
## Goal
Add responsive media queries to all components so the site is usable and visually correct at mobile (375px), tablet (768px), and desktop (1200px+) widths.

## Purpose
No responsive CSS exists yet — every component uses fixed pixel values and multi-column grids that break at narrow viewports. This is the last structural work before launch.

## Output
All six files gain scoped `@media` blocks; no HTML structure or content changes.
</objective>

<context>
## Project Context
@.paul/PROJECT.md

## Source Files
@src/components/Nav.astro
@src/components/Hero.astro
@src/pages/index.astro
@src/components/Work.astro
@src/components/Experience.astro
@src/components/Contact.astro
</context>

<acceptance_criteria>

## AC-1: Mobile layout is readable (375px)
```gherkin
Given the site is opened at 375px viewport width
When the user scrolls through all sections
Then no content overflows horizontally, all text is legible, and no layout element is clipped or hidden unintentionally
```

## AC-2: Tablet layout adapts gracefully (768px)
```gherkin
Given the site is opened at 768px viewport width
When the user views each section
Then multi-column grids collapse to appropriate narrower layouts and the hero headline scales down proportionally
```

## AC-3: Desktop layout is unchanged (1200px+)
```gherkin
Given the site is opened at 1200px or wider viewport
When the user views any section
Then the layout is identical to the Phase 2 result — no regressions introduced
```

</acceptance_criteria>

<tasks>

<task type="auto">
  <name>Task 1: Responsive styles for Nav, Hero, and page wrapper</name>
  <files>src/components/Nav.astro, src/components/Hero.astro, src/pages/index.astro</files>
  <action>
    Add `@media` blocks inside each component's existing `<style>` tag. Do not restructure HTML.

    **Nav.astro** — inside `.site-chrome` style block, add:
    ```css
    @media (max-width: 640px) {
      .site-chrome {
        flex-wrap: wrap;
        gap: 8px;
        padding: 12px 20px;
      }
      .nav {
        margin-left: 0;
        gap: 16px;
        flex-wrap: wrap;
      }
    }
    ```

    **Hero.astro** — add after existing rules:
    ```css
    @media (max-width: 960px) {
      .doc-hero { padding: 64px 0 48px; }
      h1 { font-size: 64px; letter-spacing: -1.5px; }
      .mark-big { width: 240px; height: 240px; top: 40px; }
      .mark-big img { width: 240px; height: 240px; }
    }
    @media (max-width: 640px) {
      .doc-hero { padding: 48px 0 40px; }
      h1 { font-size: 44px; letter-spacing: -1px; }
      .mark-big { display: none; }
      .lede { font-size: 18px; }
    }
    ```

    **index.astro** — add to `.doc` rule:
    ```css
    @media (max-width: 960px) {
      .doc { padding: 0 32px 80px; }
    }
    @media (max-width: 640px) {
      .doc { padding: 0 20px 64px; }
    }
    ```
  </action>
  <verify>npm run build exits 0; no Astro build errors</verify>
  <done>AC-3 satisfied: desktop layout unchanged; AC-1 and AC-2 partially met (nav + hero + wrapper responsive)</done>
</task>

<task type="auto">
  <name>Task 2: Responsive styles for Work, Experience, and Contact</name>
  <files>src/components/Work.astro, src/components/Experience.astro, src/components/Contact.astro</files>
  <action>
    Add `@media` blocks inside each component's existing `<style>` tag. Do not restructure HTML or change content.

    **Work.astro** — current grid: `72px 1fr 260px`. Add after existing rules:
    ```css
    @media (max-width: 960px) {
      .doc-case {
        grid-template-columns: 56px 1fr;
        gap: 20px;
      }
      .doc-case .stack {
        grid-column: 2 / -1;
        justify-content: flex-start;
      }
    }
    @media (max-width: 640px) {
      .doc-case {
        grid-template-columns: 1fr;
        gap: 12px;
      }
      .doc-case .idx { padding-top: 0; }
      .doc-case .stack { justify-content: flex-start; }
    }
    ```

    **Experience.astro** — current grid: `120px 1fr`. Add after existing rules:
    ```css
    @media (max-width: 640px) {
      .doc-tl {
        grid-template-columns: 80px 1fr;
        gap: 12px;
        font-size: 11px;
      }
    }
    ```

    **Contact.astro** — current grid: `1fr 1fr 1fr`. Add after existing rules:
    ```css
    @media (max-width: 960px) {
      .doc-foot {
        grid-template-columns: 1fr 1fr;
        gap: 32px;
      }
    }
    @media (max-width: 640px) {
      .doc-foot {
        grid-template-columns: 1fr;
        gap: 32px;
        padding: 40px 0 0;
      }
    }
    ```
  </action>
  <verify>npm run build exits 0; npx playwright test passes</verify>
  <done>AC-1 and AC-2 satisfied: all sections adapt at 640px and 960px breakpoints</done>
</task>

<task type="checkpoint:human-verify" gate="blocking">
  <what-built>Responsive media queries added to all 6 files — Nav, Hero, page wrapper, Work, Experience, Contact</what-built>
  <how-to-verify>
    1. Run: `npm run dev` (starts Astro dev server, usually http://localhost:4321)
    2. Open DevTools → toggle device toolbar
    3. Test at **375px** (iPhone SE): scroll full page — no horizontal overflow, h1 readable, all grids single-column
    4. Test at **768px** (tablet): Work shows 2-column (no stack column), Contact shows 2-column, hero h1 ~64px
    5. Test at **1440px** (desktop): layout matches Phase 2 — 3-column Work, 3-column Contact, h1 88px
    6. Check nav at 375px: logo + links wrap cleanly, no overflow
  </how-to-verify>
  <resume-signal>Type "approved" to continue to UNIFY, or describe any issues to fix</resume-signal>
</task>

</tasks>

<boundaries>

## DO NOT CHANGE
- src/data/* (site.json, links.json — content only)
- src/content/* (work and experience YAML — content only)
- src/styles/global.css (CSS vars and base resets are final)
- src/layouts/Base.astro
- Any HTML structure inside components (add CSS only)

## SCOPE LIMITS
- No new npm dependencies
- No content edits (text, links, names)
- No CSS custom property renames or new tokens
- No JavaScript or interactivity (no mobile menu toggle)

</boundaries>

<verification>
Before declaring plan complete:
- [ ] `npm run build` exits 0
- [ ] `npx playwright test` passes (2/2)
- [ ] Human visual QA checkpoint approved (375px, 768px, 1440px)
- [ ] No horizontal scroll at 375px
- [ ] Desktop layout unchanged vs Phase 2
</verification>

<success_criteria>
- All tasks completed
- Build and tests pass
- Visual QA checkpoint approved by user
- All three acceptance criteria met
</success_criteria>

<output>
After completion, create `.paul/phases/03-polish-qa-launch/03-01-SUMMARY.md`
</output>
