# Deploying to Cloudflare Pages

Cloudflare Pages serves this as a static site. The `public/_redirects` file
already handles client-side routing (so refreshing `/features` doesn't 404) —
nothing extra to configure there.

## Option A — Git integration (recommended)

1. Push this repository to GitHub or GitLab.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select this repository.
4. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION` = `22` (the repo also has `.nvmrc`)
5. Add any environment variables from `.env.example` under **Settings → Environment variables** (none are required for the current static site — this is set up for when the site gains real integrations).
6. Deploy. Every push to your production branch redeploys automatically; every PR gets a preview URL.

## Option B — Direct upload (no Git)

```bash
npm install
npm run build
npx wrangler pages deploy dist --project-name=jirani-os-website
```

(Requires `wrangler` — installed automatically via `npx` if you don't have it.)

## Custom domain

Under your Pages project → **Custom domains**, add `jiranios.com` (or your real
domain) and follow Cloudflare's DNS instructions. SSL is provisioned
automatically.

## The build is strict (since Phase 7)

`npm run build` now prerenders every public page in a real browser and then validates all of them
(`scripts/prerender.mjs`, then `scripts/seoCheck.mjs`). If the browser cannot start, any page fails to render,
or any check fails, **the build fails and Cloudflare keeps serving the last good deployment**. It never publishes
an unprerendered site by accident.

- The browser is found in this order: `CHROME_PATH`, Chrome/Edge/Chromium on the machine, a Chromium installed by
  Playwright, then the Chromium bundled in the `@sparticuz/chromium` package (nothing to install on the server).
- **First deploy:** push to a preview branch first and read the build log. It must say
  `prerender: browser = ...`, `prerender: 30 of 30 pages saved` and `seoCheck: all checks passed.`
  Only then merge to the production branch.
- Reports are written to `build-reports/` (`seo-report.md` has the route-by-route table).
- Development-only build without prerendering: `npm run build:spa`. Do not use it for production.
- Emergency override (not recommended): set `ALLOW_SPA_BUILD=1`; the build then continues without prerendering and
  prints a warning.
- If a route is added, add it to `scripts/routes.mjs` (guides are picked up from `src/content/learn.ts`). The sitemap
  and the checks follow that list automatically.
