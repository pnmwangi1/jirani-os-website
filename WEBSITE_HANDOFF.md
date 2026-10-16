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
