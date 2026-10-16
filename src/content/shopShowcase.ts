// Real shops shown on the homepage and /shops. The strip only appears when this list has entries.
// To feature a shop (with the owner's permission): add { name, slug, area, blurb } and a screenshot at
// /public/shops/<slug>.jpg (portrait phone screenshot or 4:3 storefront). The link goes to shop.jiranios.com/<slug>.
export interface ShowcaseShop {
  name: string;
  slug: string;
  area: string;
  blurb: string;
}

export const showcaseShops: ShowcaseShop[] = [];
