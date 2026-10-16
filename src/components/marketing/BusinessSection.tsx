import { Link } from 'react-router-dom';
import { ShoppingCart, Users, UserCog, LayoutDashboard, FileBarChart, ArrowLeftRight, Target, FileSpreadsheet } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Reveal } from './Reveal';
import { PhoneFrame } from './PhoneFrame';

// Eight things an owner opens every day. One line each; the Features page has the detail.
const tiles = [
  { icon: ShoppingCart, title: 'Till and stock', line: 'Goods and services in one till. Stock updates on every sale.' },
  { icon: Users, title: 'Customer credit', line: 'Who owes what, always up to date.' },
  { icon: UserCog, title: 'Staff and payroll', line: 'Roles, pay, advances and commissions.' },
  { icon: LayoutDashboard, title: 'Owner dashboard', line: 'Today at a glance, across every branch.' },
  { icon: FileBarChart, title: 'Reports', line: 'Sales by shift, profit and loss, downloadable.' },
  { icon: ArrowLeftRight, title: 'Shop-to-shop loans', line: 'Borrow or lend stock with another shop.' },
  { icon: Target, title: 'Leads and follow-ups', line: 'Track enquiries and follow up on time.' },
  { icon: FileSpreadsheet, title: 'Import from Excel', line: 'Bring your products, customers and suppliers across.' },
];

const shots = [
  { src: '/screenshots/pos.jpg', alt: 'Point of sale with products and services', caption: 'Point of sale' },
  { src: '/screenshots/screen-08.jpg', alt: 'Customer account with balance owed and credit limit', caption: 'Customer credit' },
  { src: '/screenshots/screen-10.jpg', alt: 'Staff commissions and casual workers', caption: 'Staff commissions' },
];

export function BusinessSection() {
  return (
    <div>
      <Reveal className="mx-auto max-w-2xl text-center">
        <Badge tone="primary">For business owners</Badge>
        <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">Run the whole business from your phone.</h2>
        <p className="mt-3 text-base text-ink-muted">Shops, salons, restaurants, water refill, wholesale and more.</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {tiles.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-surface p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary">
                  <t.icon size={17} />
                </span>
                <p className="mt-3 text-sm font-bold text-ink">{t.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">{t.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="hidden sm:block">
          <div className="flex justify-center gap-3">
            {shots.slice(0, 2).map((s, i) => (
              <PhoneFrame key={s.src} src={s.src} alt={s.alt} caption={s.caption} className={`max-w-[170px] ${i === 0 ? 'mt-8' : ''}`} />
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-8 text-center">
        <Link to="/features" className="text-sm font-semibold text-primary hover:underline">See every feature</Link>
      </Reveal>
    </div>
  );
}
