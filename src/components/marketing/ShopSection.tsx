import { Link } from 'react-router-dom';
import { ArrowRight, Share2, QrCode, MapPin, Truck } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Reveal } from './Reveal';
import { PhoneFrame } from './PhoneFrame';
import { FeaturedShops } from './FeaturedShops';
import { APP_URL, SHOP_URL } from '../../lib/constants';

const steps = [
  { icon: Share2, title: 'Add your products', body: 'Your shop is live as soon as you switch it on.' },
  { icon: QrCode, title: 'Share your link or QR', body: 'WhatsApp, Instagram, receipts, your door.' },
  { icon: Truck, title: 'Orders come with delivery', body: 'Priced, dispatched and tracked for you.' },
];

// The online shop every business gets: shown from both sides (the owner who shares it, the shopper who uses it).
export function ShopSection() {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <Reveal>
        <Badge tone="primary">Your online shop</Badge>
        <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">A shop customers can find, live from day one.</h2>
        <p className="mt-3 text-base text-ink-muted">No separate website. No extra bill.</p>

        <ul className="mt-8 space-y-4">
          {steps.map((s) => (
            <li key={s.title} className="flex gap-3">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                <s.icon size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{s.title}</p>
                <p className="text-sm text-ink-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-cta="shop-section-trial" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary/90">
            Start your 7-day free trial <ArrowRight size={15} />
          </a>
          <a href={SHOP_URL} data-cta="shop-section-browse" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface">
            <MapPin size={15} /> Browse shops near me
          </a>
        </div>
        <Link to="/shops" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">How shopping and shop links work</Link>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mx-auto w-full max-w-sm">
          <PhoneFrame src="/screenshots/shop-storefront.jpg" alt="A Jirani shop on a phone, with categories, deals and an add to cart button" className="max-w-[260px]" />
          <div className="absolute -right-2 top-10 hidden rounded-2xl border border-border bg-surface px-3 py-2 shadow-soft-lg sm:-right-6 sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">Delivery</p>
            <p className="text-sm font-extrabold text-primary">Delivers to you</p>
          </div>
        </div>
      </Reveal>

      <div className="lg:col-span-2">
        <FeaturedShops />
      </div>
    </div>
  );
}
