# Jirani website – handoff

## What changed
- Home: equal-weight hero (business / shopper / property), Pick-your-start, Shops, Business, Properties, delivery, trust, FAQ teaser, final CTA.
- New /properties page (virtual properties only; no landlord/tenant/contractor wording).
- /shops: storefront phone, shopper perks, sample QR poster, featured shops slot.
- Pricing: virtual property price block (VIRTUAL_PRICE_KES = 250 in src/lib/constants.ts; keep in step with admin setting).
- Nav, footer, features, FAQ updated; offline claims corrected (cart saved; payment needs connection).
- Click tracking via data-cta (src/lib/track.ts); sitemap includes /properties.

## Before deploy
1. npm install && npm run build (tsc/vite could not run in the authoring sandbox).
2. Set VITE_APP_URL (suggest https://app.jiranios.com); fallback is the old Vercel URL.
3. Align sitemap host with src/lib/seo.ts base URL.
4. npx wrangler deploy. Do NOT add public/_redirects catch-all.

## Open items
- Real shop names/images: src/content/shopShowcase.ts (images in public/shops/<slug>.jpg).
- Re-capture app screenshots (business section uses older ones).
- App tile still says "Virtual Landlord"; suggest renaming to "Virtual Property".
- Meta tags are client-side only (SPA); pre-rendering/schema not done.
