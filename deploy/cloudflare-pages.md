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
