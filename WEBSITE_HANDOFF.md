# Jirani website – handoff

## What changed
- Home: equal-weight hero (business / shopper / property), Pick-your-start, Shops, Business, Properties, delivery, trust, FAQ teaser, final CTA.
- New /properties page (virtual properties only; no landlord/tenant/contractor wording).
- /shops: storefront phone, shopper perks, sample QR poster, featured shops slot.
- Pricing: virtual property price block (VIRTUAL_PRICE_KES = 250 in src/lib/constants.ts; keep in step with admin setting).
- Nav, footer, features, FAQ updated; offline claims corrected (cart saved; payment needs connection).
- Click tracking via data-cta (src/lib/track.ts); sitemap includes /properties.

## Round 2 (story rebuild)
- Characters Wanjiru (shopper), Baraka (business), Otieno (rider), Mama Njeri (property) as inline-SVG stick figures: src/components/story/.
- Home: looping order scene hero, scroll-driven "Follow one order", three character panels, riders section with rate calculator, property story, real app screens.
- New /riders page (rate calculator: base KES 100 + KES 30/km, example only), RiderLinks (three ways riders connect, who pays), Delivery page rewritten (no more "Jirani OS network" claim).
- Properties: who-sets-it-up (customer account) up front, story, price after value.
- App: tile and user-facing strings renamed Virtual Landlord -> Virtual Property (frontend + backend notifications).
- Sitemap/robots/og:url aligned to www.jiranios.com; Organization JSON-LD in index.html.
- Order story copy lives in src/content/orderStory.ts (single place to edit).

## Before deploy
1. npm install && npm run build (tsc/vite could not run in the authoring sandbox).
2. Set VITE_APP_URL (suggest https://app.jiranios.com); fallback is the old Vercel URL.
3. Set VITE_SITE_URL only if the host is not www.jiranios.com.
4. npx wrangler deploy. Do NOT add public/_redirects catch-all.

## Open items
- Real shop names/images: src/content/shopShowcase.ts (images in public/shops/<slug>.jpg).
- Re-capture app screenshots (business section uses older ones).
- Meta tags are client-side only (SPA); pre-rendering/schema not done.

## Overhaul (October 2026)
- Home: business-led hero, "A day with Baraka" scroll story, Before/With capability grid, six guided industries, beyond-the-till (shopper, rider), property strip, plans snapshot.
- Features: eight capability sections with a jump menu (content/capabilities.ts). Industries: all 15 illustrated (content/industryProfiles.ts); six are "Guided setup", the rest "Runs on Goods & Services".
- Solutions: by job, Before/With. Pricing: term discounts (10% for 6 months, 20% for 12, from the billing code) and Start vs Plus table.
- Learn hub: /learn and /learn/:slug from content/learn.ts (written from be/content/training-manual.md).
- People/HR is described as HR and payroll: attendance, leave, payroll runs with PAYE, NSSF, SHIF and Housing Levy from rates the business adopts, payslips, P9, and remittance records. Jirani RECORDS payments; it does not send money to staff or file with KRA, and the site must never say it does. (Updated Phase 2, Nov 2026.)
- Home shows four hand-built sample screens (components/story/SampleScreens.tsx), labelled "Sample data". Not done yet: real screenshots of more app screens; Shops/Riders/Delivery/Properties/Blog/Careers still use the earlier layout.
- Run `npm install`, `npm run build`, then `npx wrangler deploy`. `tsc` could not run in the build sandbox.

## Layout and logo pass (October 2026)
- Barcode scanning and credit limits are on Jirani Start (migration 163). Plus-only: advanced accounting, stock transfers, branch comparison and dashboards, advanced BI.
- Header logo reduced; header buttons no longer wrap when signed in. Shops page rebuilt on a two-column grid. Footer lists Blog once. Play badge falls back to a text button. og-image.png rebuilt with an absolute URL.

## Overhaul plan, Phase 1 (November 2026)
- Blog and Careers hidden: pages and `content/blog.ts` removed; `/blog` redirects to `/whats-new`, `/careers` to `/contact`; both gone from footer and sitemap. Restore from the October zip when there is real content.
- New `/whats-new` (content in `src/content/whatsNew.ts`). Add an entry only when something ships. Confirm every entry is live in the app before deploying.
- `index.html` title, description, OG and Twitter text now match the one-app positioning. `public/og-image.png` rebuilt from two real app screens.
- App URL fallback and `.env.example` now `https://app.jiranios.com`. `.env` stays out of the zip (it is gitignored); keep the Web3Forms key in the host's environment.
- Contact: the decorative card is replaced by an email and call card.
- `npm install && npm run build` (tsc + vite) passes.
- Still to come: real screens (Phase 2), /games, /budget, /tables (Phase 3), green and purple palette (Phase 4), pre-rendering and analytics (Phase 5).

## Overhaul plan, Phase 2 (November 2026)
- 15 real app screens (demo account, status bar and system bar cropped, WebP about 40 KB each) in `public/app/`. Their text lives in `src/content/realScreens.ts`.
- Home: the "Sample data" mock screens are replaced by `RealScreens`, three tabs (Run, Sell, Live) of real phones. `story/SampleScreens.tsx` is removed.
- Features: Sell, Credit, Money, Grow and Branches show a real screen beside the illustration (`capabilityScreens`). Other sections keep the illustration.
- Shops: `showcaseShops` now holds Betty & Sons, Wines & Spirits and Nakuru Bar & Restaurant with pictures in `public/shops/*.webp`. They are not links yet: add `href` (the shop's real shop.jiranios.com link) to each when known.
- Checked in Chrome at phone and desktop widths with no page errors; `npm run build` (tsc + vite) passes.
- Next: Phase 3 pages (/games, /budget, /tables), then palette, speed and search.

## Overhaul plan, Phase 3 (November 2026)
- New pages /games, /budget and /tables from one layout, `components/marketing/ProductPage.tsx`, with copy in `content/games.ts`, `budgetPage.ts`, `tablesPage.ts`. Games is in the header; all three are in the footer and sitemap.
- Copy follows what the screens and the app show. Swahili Saturdays start 5 December 2026. Rewards are cosmetic only.
- Not claimed anywhere: prices for My budget, payments in games, anything about how My budget gets its figures. Add them only when confirmed.
- Checked in Chrome at phone and desktop widths with no page errors; `npm run build` (tsc + vite) passes.

## Phase 4 — palette and contrast
- New `action` colour token: the fill behind white text (buttons, CTA panels). Button primary uses `bg-action`.
- `.theme-business` (purple) scopes business pages: Home hero/Day/Capabilities/Industries/Plans, plus /features /industries /solutions /pricing /tables /games /learn via `PageLayout` `BUSINESS_PATHS`. Shopper, customer, property and budget content stays green.
- Contrast: light `ink-muted` darkened to #5F6B65 (≥4.5:1 on bg, surface, primary-light); success text darkened; dark primary lifted (#60B498); dark action green darkened; white pills use `text-action`; Pricing featured card small text raised; neutral Badge uses `text-ink`; Play badge fallback is black.
- `/tmp/audit.py`-style check (18 routes, light + dark, 390 px): 0 failures, 0 page errors.

## Phase 5 — speed and SEO
- **Pre-render:** `npm run build` now ends with `scripts/prerender.mjs`, which saves every public page (30, including the guides) as real HTML in `dist/<route>/index.html`. Crawlers, WhatsApp/Facebook previews and slow phones get content and tags at once; React then takes over. It needs Chrome/Edge (found automatically on Windows/Mac/Linux, or set `CHROME_PATH`) and `playwright-core` (new devDependency: run `npm install`). If no browser is found (some build servers) it prints a warning and the build still succeeds as the old single-page app. `PRERENDER=0` skips it; `npm run build:spa` builds without it.
- **Sitemap:** `public/sitemap.xml` is generated before each build from `scripts/routes.mjs` (adds /delivery, /terms, /learn and every guide, with `lastmod`). Update a page's `lastmod` there when its content changes. New guides are picked up from `src/content/learn.ts`.
- **Head tags:** every page now has a canonical link and a robots tag; 404, `/r/` and `/d/` are `noindex`.
- **Schema (JSON-LD):** Organization and WebSite (index.html), SoftwareApplication (Home), FAQPage (/faq), Article (each guide), BreadcrumbList (every inner page). The Home schema lists Jirani Start KES 1,000 and Jirani Plus KES 2,500 per month; change them if prices change.
- **Fonts:** the font stylesheet moved from a CSS `@import` to `<link>` with preconnect, so it no longer waits for the app CSS. Images below the fold load lazily.
- **Analytics (off until you turn it on):** create a Plausible site for jiranios.com, then set `VITE_PLAUSIBLE_DOMAIN=jiranios.com` where you build. No cookies, honours Do Not Track, skipped on localhost. Clicks on every `data-cta` button are sent by the existing `lib/track.ts` as a `cta_click` event with props `cta` (button id) and `page` (set up a `cta_click` goal in Plausible).
- **Contact form:** hidden honeypot field, 4-second minimum before send, more than 2 links in a message is dropped silently, message capped at 4,000 characters. Tested: too-fast shows a retry message; bot and link-spam sends nothing.
- Verified: contrast audit still 0 failures on 18 routes (light and dark), no page errors, all JSON-LD parses.

## Phase 4 finish — accessibility and copy
- Skip-to-content link; `<main id="main">` takes focus after each page change; Escape closes the mobile menu and the menu button label says Open/Close; closed FAQ answers are hidden from screen readers.
- Reduced motion: framer-motion animations now honour the visitor's setting (`MotionConfig reducedMotion="user"`), in addition to the CSS rule.
- Focus ring has a page-colour halo so it shows on green and purple fills.
- Copy: removed filler ("successfully", "powerful enough"); no other marketing clichés found in `src`.
- Older pages (Shops, Riders, Delivery, Properties, About) were reviewed at desktop width: they already use the story scenes and palette, so no layout change was needed.
- Still open (needs you): real shop.jiranios.com slugs for the three showcase cards (`src/content/shopShowcase.ts`, add `href`); confirm the three What's new entries are live (`src/content/whatsNew.ts`).

## Phase 6 — one platform: business, property and personal money (Nov 2026)
Positioning: "one platform for your business, your property and your personal money." Every line below was checked against the app and backend code, not the old site text.
- **Pay as you go** (Pricing block, FAQ, Home plans note, Games): no monthly fee, tokens bought by M-Pesa, used for paid work. The site deliberately states NO token value in KES and NO per-action token counts; they are admin settings. A welcome gift of tokens is mentioned without a number, by decision: do not publish the number.
- **HR and payroll** now described accurately (Features group, capabilities, FAQ, Security, Learn). Records only: no money moves, no KRA filing, no eTIMS. Available on Start and Plus.
- **My budget** page rewritten (M-Pesa statement import, bills, goals, debts, shopping plans, shop limits, shared budgets, privacy). Free. Not claimed: net worth, bank linking, budget chat, investments. Its phone screenshots still show the old rings; refresh them from the current app (pockets now show progress bars).
- **Virtual properties:** parking-prompt scenario and privacy design, utility billing (meter readings and bills, payments recorded only), estates, guest plates. No rent collection is claimed.
- **Offline:** described as allocation-based (a phone is given stock, sells with no signal, syncs later); M-Pesa prompts still need a connection.
- **Games:** no money at stake; finishing daily games and duels can earn a few tokens (small daily limit).
- **Header nav:** Budget replaces Delivery (Delivery stays in the footer, Shops and Riders pages).
- **SEO/GEO:** keyword Home title, en-KE, Home schema with both plans, FAQPage schema on Home, Pricing, Properties, Budget, Games, Tables, FAQ; explicit bot rules in robots.txt (search and answer bots allowed; training crawlers GPTBot and Google-Extended blocked); `public/llms.txt`; fresh sitemap dates.
- **Check:** `npm run build` then `node scripts/seoCheck.mjs` (one h1, canonical, title length, en-KE, JSON-LD parses, banned-claims list). Add to the banned list whenever a claim must never appear.
- **Delivery hygiene:** `.env` must not be in the zip. Rotate the Web3Forms key if you want it private (it is also in the public bundle by design).
- **Not done / left as is:** the Home page HTML is ~430 KB because the story illustrations are inline SVG (gzips well); fonts still load from Fontshare (self-hosting is optional); one shared OG image; Lighthouse not run.

## Phase 7 — production hardening of prerender and SEO checks (Nov 2026)
- `npm run build` = sitemap, type check, Vite build, **strict prerender**, **full SEO validation**. Any failure stops the build.
- `scripts/prerender.mjs`: no silent fallback. It fails when no browser can start, when `PRERENDER=0`, when any route fails after 3 tries, or when a page comes out wrong (default title, wrong canonical, page script error, 4xx/5xx asset, thin content). Writes `build-reports/prerender-manifest.json`.
- Browser lookup: `CHROME_PATH`, system Chrome/Edge/Chromium, Playwright Chromium, bundled `@sparticuz/chromium` (new dependency; `playwright-core` moved from devDependencies to dependencies so it is installed on any build server).
- `scripts/seoCheck.mjs`: compares the files on disk with `routes.mjs` (21 pages + 9 guides = 30), the sitemap, `robots.txt` (search bots allowed, `GPTBot` and `Google-Extended` blocked, Sitemap host) and `llms.txt` links. Per page: real content, one h1, unique title/canonical/h1, canonical equals the route, description length, og/twitter match, no unexpected noindex, `lang="en-KE"`, valid JSON-LD, required types per page (Organization, WebSite; BreadcrumbList; Home SoftwareApplication; FAQPage pages; Article on guides), FAQ and Article text visible on the page, SoftwareApplication offers match Pricing and mention Pay as you go, banned claims. Writes `build-reports/seo-report.md`.
- `useJsonLd` now replaces an existing block with the same id, so a prerendered page never ends up with two copies after the app loads (checked in a real browser).
- Home SoftwareApplication description now mentions Pay as you go with no monthly fee. No token prices, and no "free" claim.
- `/terms` meta description lengthened (44 to 108 characters) because the new check required at least 50.
- The app still uses `createRoot` (it replaces the prerendered markup when it loads); hydration was not introduced on purpose.
- Known limit: an unknown URL is served the Home HTML (single-page-app fallback) until the app shows the 404 page. `/r/` and `/d/` links need that fallback.
