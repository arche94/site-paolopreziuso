# paolopreziuso.com

Personal portfolio site for Paolo Preziuso — full-stack software engineer based in Torino, Italy.

Built with [Astro](https://astro.build), deployed to [Cloudflare Pages](https://pages.cloudflare.com).

## Development

```bash
npm install
npm run dev       # dev server at localhost:4321
npm run build     # production build → dist/
npm run preview   # preview built output locally
npm test          # Playwright smoke tests
```

## Deploy

Push to `main` — GitHub Actions builds, tests, and deploys automatically to Cloudflare Pages.

Required repository secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_PROJECT_NAME`.

## Stack

| Layer     | Choice                                    |
| --------- | ----------------------------------------- |
| Framework | Astro (static output)                     |
| Styling   | CSS with design tokens                    |
| Hosting   | Cloudflare Pages                          |
| Testing   | Playwright                                |
| Fonts     | Inter · JetBrains Mono · Instrument Serif |

## Content

Site content lives in `src/content/` — all copy, work items, experience entries, and contact links are editable without touching component code.

> Design reference: `PP Personal website/Personal Website.html` (Document view) — local only, not committed.
