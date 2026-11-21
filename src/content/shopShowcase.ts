// Real shops shown on /shops (shown with the owners' permission). The strip only appears when this list has entries.
// Add { name, slug, label, blurb } and a 4:3 picture at /public/shops/<slug>.webp.
// Add `href` (the shop's public link, shop.jiranios.com/<its-slug>) only when you have the real one; without it the card is not a link.
export interface ShowcaseShop {
  name: string;
  slug: string;
  label: string;
  blurb: string;
  href?: string;
}

export const showcaseShops: ShowcaseShop[] = [
  { name: 'Betty & Sons', slug: 'betty-sons', label: 'Water delivery', blurb: 'Open now, rated 4.9 by 12 customers, and a few minutes away for the shoppers near it.' },
  { name: 'Wines & Spirits', slug: 'wines-spirits', label: 'Wines and spirits', blurb: 'Singles by the shot and bottles by the litre, with best sellers and cash position in one place.' },
  { name: 'Nakuru Bar & Restaurant', slug: 'nakuru-bar', label: 'Bar and restaurant, Nakuru', blurb: 'Tables, waiters, reservations and kitchen tickets, with walk-ins, takeaway and delivery.' },
];
