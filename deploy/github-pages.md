# Deploying to GitHub Pages

A GitHub Actions workflow is already included at
`.github/workflows/deploy-gh-pages.yml` — it builds the site and deploys the
`dist` folder automatically on every push to `main`.

## One-time setup

1. Push this repository to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source**, select
   **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).
   The site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Client-side routing on GitHub Pages

GitHub Pages has no server-side rewrite support, so a direct visit or a
refresh on a route like `/features` would normally 404. This is already
handled by `public/404.html`, which redirects to `index.html` with the real
path preserved, combined with a small restoration script in `index.html`
itself. No extra configuration needed — this is specific to the GitHub Pages
deployment path and is inert on Cloudflare Pages.

## If deploying to a project subpath (not a custom domain)

If your GitHub Pages URL is `username.github.io/repo-name/` (not a custom
domain at the root), set `base` in `vite.config.ts`:

```ts
export default defineConfig({
  base: '/repo-name/',
  // ...
});
```

This is not needed if you attach a custom domain (via a `CNAME` file in
`public/`, added under **Settings → Pages → Custom domain**), since a custom
domain serves from the root.

## Custom domain

Add a `public/CNAME` file containing your domain (e.g. `jiranios.com`), and
configure your DNS provider with a `CNAME` record pointing to
`<your-username>.github.io`, per GitHub's own custom domain documentation.
