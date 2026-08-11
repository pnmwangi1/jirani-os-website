import { Check, ArrowRight, Smartphone, Barcode, Building2, Calculator, TrendingUp, Users, ShoppingCart } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { AnchorButton } from '../components/ui/Button';
import { Reveal } from '../components/marketing/Reveal';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { APP_URL } from '../lib/constants';
import type { LucideIcon } from 'lucide-react';

interface FeatureGroup {
  icon: LucideIcon;
  label: string;
  items: string[];
}

interface Plan {
  id: string;
  name: string;
  price: string;
  tagline: string;
  perfectFor: string;
  included: string;
  featured?: boolean;
  groups: FeatureGroup[];
}

// Item (Phase — evolved to match the real subscription screen inside
// the app, explicit request): this mirrors SPSubscriptionTab's actual
// structure (PACKAGE_TAGLINE, PACKAGE_FEATURE_GROUP_META,
// SCALE_UPSELL_BULLETS) rather than a flat marketing feature list —
// same "Perfect for" audience framing, same grouped-by-engine
// presentation, same branch/staff summary line a subscriber actually
// sees after paying. 'scale' kept as the internal id (unchanged in the
// backend since migration 149) — only the displayed name changed to
// Jirani Plus.
const sharedFoundation = ['Sales, stock and customer accounts', 'M-Pesa payment collection', 'Role-based staff access', 'Real-time reporting'];

const plans: Plan[] = [
  {
    id: 'start',
    name: 'Jirani Start',
    price: 'KES 1,000',
    tagline: 'Everything you need to successfully run one business location.',
    perfectFor: 'Single shops, mini marts, pharmacies, salons, hardware stores, restaurants, water refill businesses and growing SMEs.',
    included: '1 branch included',
    groups: [
      { icon: ShoppingCart, label: 'POS', items: ['Goods & services in one till', 'Cash and M-Pesa payments'] },
      { icon: Users, label: 'Customers', items: ['Customer accounts', 'Credit sales tracking'] },
    ],
  },
  {
    id: 'scale',
    name: 'Jirani Plus',
    price: 'KES 2,500',
    tagline: 'Built for businesses ready to expand.',
    perfectFor: 'Businesses running multiple branches, or ready to add advanced accounting, customer credit, and executive reporting.',
    included: '3 branches · 3 staff seats per branch included',
    featured: true,
    groups: [
      { icon: Barcode, label: 'POS', items: ['Smart barcode scanning', 'Goods & services in one till'] },
      { icon: Building2, label: 'Branches', items: ['Multi-branch operations', 'Branch comparison reporting'] },
      { icon: Calculator, label: 'Accounting', items: ['Advanced accounting engine', 'Customer credit limit control'] },
      { icon: TrendingUp, label: 'Business Intelligence', items: ['Executive-level reporting', 'Cross-branch insights'] },
    ],
  },
];

const addons = [
  { label: 'Additional branch', price: 'KES 1,000/month', note: 'Includes up to 3 staff' },
  { label: 'Additional staff', price: 'KES 250/month', note: 'Per staff member, per branch' },
];

export default function Pricing() {
  useSeo({
    title: 'Pricing',
    description:
      'Jirani OS pricing: Jirani Start at KES 1,000/month and Jirani Plus at KES 2,500/month. Start your 7-Day Jirani Plus Experience free trial today, paid via M-Pesa.',
    path: '/pricing',
  });

  return (
    <Section className="relative overflow-hidden">
      <BackgroundGlow variant="hero" />
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge tone="primary">7-Day Jirani Plus Experience · paid via M-Pesa</Badge>
          <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Which Jirani OS is right for you?</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Start simple. Scale without changing systems. Every new business starts with a free
            7-Day Jirani Plus Experience — full access, before you pay for anything.
          </p>
        </Reveal>

        {/* Shared foundation — what every plan includes, before the
            differences (Phase, explicit request: "feel sophisticated" —
            a shared baseline row reads as more considered than
            repeating the same four lines inside both cards). */}
        <Reveal delay={0.05} className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-ink-muted">Included in every plan</p>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {sharedFoundation.map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs font-medium text-ink">
                  <Check size={14} className="flex-shrink-0 text-primary" /> {f}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={0.1 + i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  plan.featured
                    ? 'border-primary bg-primary text-white shadow-soft-lg'
                    : 'border-border bg-surface shadow-soft'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-bold text-primary shadow-soft">
                    Most popular
                  </span>
                )}
                <h2 className={`font-display text-xl font-bold ${plan.featured ? 'text-white' : 'text-ink'}`}>{plan.name}</h2>
                <p className={`mt-1.5 text-sm leading-relaxed ${plan.featured ? 'text-white/80' : 'text-ink-muted'}`}>{plan.tagline}</p>
                <p className="mt-6">
                  <span className={`font-display text-4xl font-extrabold ${plan.featured ? 'text-white' : 'text-ink'}`}>{plan.price}</span>
                  <span className={`text-sm ${plan.featured ? 'text-white/70' : 'text-ink-muted'}`}> /month</span>
                </p>
                <p className={`mt-1.5 text-xs font-semibold ${plan.featured ? 'text-white/75' : 'text-ink-muted'}`}>{plan.included}</p>

                <div className={`mt-3 rounded-xl px-3 py-2.5 text-xs leading-relaxed ${plan.featured ? 'bg-white/10 text-white/85' : 'bg-bg text-ink-muted'}`}>
                  <span className="font-semibold">Perfect for:</span> {plan.perfectFor}
                </div>

                {/* Grouped features, matching how the app itself
                    presents them by engine rather than one flat list. */}
                <div className="mt-6 flex-1 space-y-4">
                  {plan.groups.map((group) => (
                    <div key={group.label}>
                      <p className={`mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide ${plan.featured ? 'text-white/70' : 'text-ink-muted'}`}>
                        <group.icon size={13} /> {group.label}
                      </p>
                      <ul className="space-y-1.5">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm">
                            <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.featured ? 'text-white' : 'text-primary'}`} />
                            <span className={plan.featured ? 'text-white/90' : 'text-ink'}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <AnchorButton
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="mt-8 w-full"
                  variant={plan.featured ? 'invert' : 'outline'}
                >
                  Start free trial <ArrowRight size={16} />
                </AnchorButton>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Add-ons */}
        <Reveal delay={0.3} className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="mb-4 text-sm font-bold text-ink">Growing beyond your plan?</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {addons.map((a) => (
                <div key={a.label} className="flex items-center justify-between rounded-xl bg-bg px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-ink">{a.label}</p>
                    <p className="text-xs text-ink-muted">{a.note}</p>
                  </div>
                  <p className="text-sm font-bold text-primary">{a.price}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Value framing */}
        <Reveal delay={0.35} className="mx-auto mt-14 max-w-2xl text-center">
          <h3 className="text-xl font-bold text-ink">One system, instead of paying for several disconnected tools.</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Start on Jirani Start, move to Jirani Plus the moment you need it — same account, same
            data, same team, no migration. Businesses can grow from one branch to multiple
            branches without ever changing platforms.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-ink-muted">
            <Smartphone size={14} className="text-primary" /> Subscriptions are paid via M-Pesa
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
