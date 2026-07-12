# Jirani OS — Official Website

Version 1 of the Jirani OS marketing website. A static, no-backend site built
with React, Vite, TypeScript, Tailwind CSS and Framer Motion — architected so
it can evolve into the real Jirani OS web application later without a rewrite.

## What this is (and isn't)

This is a **marketing site only**. There is no authentication, no real
backend, no live product data. Every "product screenshot" is a placeholder
component (`MockupFrame`), and the Contact and Pricing-waitlist forms
validate client-side but do not submit anywhere real yet — both are clearly
marked in code with `// Item:` comments explaining exactly what to wire up
when a real endpoint exists.

## Tech stack

- **React 18 + TypeScript + Vite** — build tooling and language
- **React Router** — client-side routing across all 13 pages
- **Tailwind CSS** — utility styling, reading colors from CSS custom
  properties (`src/styles/globals.css`) so light/dark theme works without
  duplicating color logic
- **Framer Motion** — deliberate, restrained motion (hero convergence
  animation, scroll-reveal on section entry)
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── components/
│   ├── ui/          Reusable primitives (Button, Card, Badge, Input,
│   │                 Accordion, Tabs, Container, Section) — these carry
│   │                 no marketing-specific assumptions and are the pieces
│   │                 most likely to transfer directly into the future app.
│   ├── layout/       Header, Footer, PageLayout, ThemeToggle, PageLoader
│   ├── marketing/    Page-specific composed components (Hero, FeatureCard,
│   │                 TestimonialCard, CTASection, the signature
│   │                 ConvergenceVisual) — expected to be rebuilt or
│   │                 discarded once real app screens exist.
│   └── ErrorBoundary.tsx
├── pages/            One file per route
├── content/          Plain data files (features.ts, solutions.ts,
│                     industries.ts, faq.ts, testimonials.ts, blog.ts,
│                     nav.ts) — kept separate from presentation so content
│                     can be edited without touching component code.
├── hooks/            useTheme, useInView
├── lib/seo.ts         Lightweight per-page meta/OG tag helper
└── styles/globals.css Design tokens (CSS custom properties) + base styles
```

## Design system

The palette is pulled directly from the real Jirani OS mobile app's own
color tokens (`C_LIGHT` / `C_DARK`) — not invented for this site. See the
top of `src/styles/globals.css` for the full token list with the source hex
values annotated. Typography pairs **Cabinet Grotesk** (display, used with
restraint on headings) with **General Sans** (body) — both loaded via
Fontshare in `globals.css`.

Dark mode is a real, working feature (`ThemeToggle` in the header), using
the same `light` / `dark` / `system` three-way preference model the app
itself uses, stored under the same `localStorage` key pattern so the logic
transfers directly if this becomes the real app shell.

## Content

All page copy lives in `src/content/*.ts` as plain data — editing FAQ
answers, feature descriptions, or solution copy never requires touching a
component. The one deliberate exception is legal text (Privacy Policy,
Terms), which lives directly in its page component since it's long-form
prose, not list data.

**Testimonials are explicitly marked as illustrative examples**, not real
customer quotes — see the comment at the top of `src/content/testimonials.ts`
for why, and remove the disclaimer once real testimonials are available.

## Deployment

Two deployment paths are documented and ready:

- [`deploy/cloudflare-pages.md`](./deploy/cloudflare-pages.md)
- [`deploy/github-pages.md`](./deploy/github-pages.md) (includes a working
  GitHub Actions workflow at `.github/workflows/deploy-gh-pages.yml`)

Both handle client-side routing correctly (a refresh on `/features` won't
404 on either) — see each guide for the platform-specific mechanism.

## Known, deliberate gaps (not oversights)

- **No Modal or Tooltip primitive** — not used by any current page, so not
  built speculatively. Add to `components/ui/` following the existing
  primitive pattern when a page actually needs one.
- **Contact and Pricing forms don't submit anywhere real** — see `.env.example`
  for the intended extension point.
- **Blog is structure only** — three placeholder posts in `content/blog.ts`,
  ready for a real CMS or MDX pipeline to replace the data source without
  touching `pages/Blog.tsx`.
- **No automated tests** — not requested in the brief; the codebase is small
  and typed enough that `npm run build`'s type-check is the current safety
  net. Worth adding if the site grows significantly.

## Preparing for the future web app

Two things make this migration-friendly on purpose:

1. **`components/ui/` vs. `components/marketing/` is a real boundary**, not
   just folders. The primitives in `ui/` are app-grade; everything in
   `marketing/` is expected to change or disappear once real product
   screens exist.
2. **Theme tokens and the theme hook are already the app's real pattern**,
   not a marketing-site simplification — `useTheme.ts` and the CSS custom
   properties can be lifted directly into the app shell.
