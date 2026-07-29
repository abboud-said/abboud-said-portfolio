# Abboud Said — Portfolio

My personal portfolio site: a single-page, terminal-themed CV. Instead of a static PDF, it's laid out like a shell session — `whoami`, `cat skills.txt`, `status --current` — covering my background, education, work experience, projects, and contact info.

**Live:** https://abboud-said-portfolio-next.vercel.app

## Why this exists

I wanted a portfolio that actually looks like something a developer built, rather than another templated "About Me" page. The terminal framing doubles as a quick filter — if you're comfortable reading it, you're probably the audience it's for.

## Tech

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel, connected to this repo for continuous deployment from `master`

## Running it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it. Pages live under `app/`, following the Next.js App Router convention — start with `app/page.tsx`.

## Project structure

- `app/` — routes, layout, and page content
- `public/assets/` — static assets (resume/degree files, images)
- `AGENTS.md` / `CLAUDE.md` — working notes for the AI coding assistants (Claude Code) used to help build parts of this site

## Known issue

The résumé and degree "download" buttons don't currently work as expected — tracked, not yet fixed.
