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
