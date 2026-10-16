import { Store, ShoppingBag, Building2, Bike } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type AudienceKey = 'business' | 'shop' | 'rider' | 'property';

export interface Audience {
  key: AudienceKey;
  icon: LucideIcon;
  chip: string; // "I run a business"
  title: string; // card title
  line: string; // one short line
  cta: string; // button label
  ctaKind: 'app' | 'shops' | 'app-rider' | 'app-property';
  anchor: string; // homepage section id
  to: string; // inner page
  toLabel: string;
}

// The three people who land on the site. Equal weight everywhere: hero, cards, nav, footer.
export const audiences: Audience[] = [
  {
    key: 'business',
    icon: Store,
    chip: 'I run a business',
    title: 'Run your business',
    line: 'Sales, stock, staff, customer credit and your books, from your phone.',
    cta: 'Start your 7-day free trial',
    ctaKind: 'app',
    anchor: 'business',
    to: '/features',
    toLabel: 'See what you get',
  },
  {
    key: 'shop',
    icon: ShoppingBag,
    chip: 'I want to shop',
    title: 'Order from shops near you',
    line: 'Pick a shop that can reach you, add to cart, and get it delivered or collect.',
    cta: 'Find shops near me',
    ctaKind: 'shops',
    anchor: 'shops',
    to: '/shops',
    toLabel: 'How shopping works',
  },
  {
    key: 'rider',
    icon: Bike,
    chip: 'I ride',
    title: 'Deliver and earn',
    line: 'Set your own rate. Get delivery requests from businesses and customers who trust you.',
    cta: 'Become a rider',
    ctaKind: 'app-rider',
    anchor: 'riders',
    to: '/riders',
    toLabel: 'How riders earn',
  },
  {
    key: 'property',
    icon: Building2,
    chip: 'I manage a property',
    title: 'Manage your property',
    line: 'Parking prompts, gate passes, notices and repairs in one app. Residents join free.',
    cta: 'Set up a property',
    ctaKind: 'app-property',
    anchor: 'properties',
    to: '/properties',
    toLabel: 'See how it works',
  },
];
