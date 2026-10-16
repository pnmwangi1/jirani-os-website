import { APP_URL, SHOP_URL } from './constants';
import type { Audience } from '../content/audiences';

// Where each audience's main button goes. Business and property both start in the app (sign-up or sign-in);
// shoppers go straight to the shop directory, no account needed.
export function audienceCta(a: Audience): { href: string; external: boolean } {
  if (a.ctaKind === 'shops') return { href: SHOP_URL, external: false };
  return { href: APP_URL, external: true };
}
