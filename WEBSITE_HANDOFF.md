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
- People/HR is described as records (pay sheets, advances, leave), never "payroll".
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
- **Schema (JSON-LD):** Organization and WebSite (index.html), SoftwareApplication (Home), FAQPage (/faq), Article (each guide), BreadcrumbList (every inner page). Pricing in the Home schema is Jirani Start KES 1,000/month; change it if the price changes.
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
