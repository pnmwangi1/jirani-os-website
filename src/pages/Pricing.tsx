import { Check, ArrowRight, Smartphone } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { AnchorButton } from '../components/ui/Button';
import { Reveal } from '../components/marketing/Reveal';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { APP_URL } from '../lib/constants';

interface Plan {
  id: string;
  name: string;
  price: string;
  tagline: string;
  featured?: boolean;
  features: string[];
}

const plans: Plan[] = [
  {
    id: 'start',
    name: 'Jirani Start',
    price: 'KES 1,000',
    tagline: 'For businesses getting organised.',
    features: [
      'Core Service Provider capabilities',
      'One branch',
      'Sales, stock and customer accounts',
      'M-Pesa payment collection',
    ],
  },
  {
    id: 'scale',
    name: 'Jirani Scale',
    price: 'KES 2,500',
    tagline: 'For businesses ready to grow.',
    featured: true,
    features: [
      'Everything in Start',
      'Advanced POS with barcode scanning',
      'Up to 3 branches, 3 staff per branch',
      'Advanced accounting & branch comparison reporting',
      'Customer credit limit management',
      'Advanced operational capabilities',
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
      'Jirani OS pricing: Jirani Start at KES 1,000/month and Jirani Scale at KES 2,500/month. Start your 7-day free trial today, paid via M-Pesa.',
    path: '/pricing',
  });

  return (
    <Section className="relative overflow-hidden">
      <BackgroundGlow variant="hero" />
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge tone="primary">7-day free trial · paid via M-Pesa</Badge>
          <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Which Jirani OS is right for you?</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Start simple. Scale without changing systems. Every plan starts with a 7-day free
            trial — try it with your real business before you pay for anything.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.1}>
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
                <p className={`mt-1 text-sm ${plan.featured ? 'text-white/75' : 'text-ink-muted'}`}>{plan.tagline}</p>
                <p className="mt-6">
                  <span className={`font-display text-4xl font-extrabold ${plan.featured ? 'text-white' : 'text-ink'}`}>{plan.price}</span>
                  <span className={`text-sm ${plan.featured ? 'text-white/70' : 'text-ink-muted'}`}> /month</span>
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check size={16} className={`mt-0.5 flex-shrink-0 ${plan.featured ? 'text-white' : 'text-primary'}`} />
                      <span className={plan.featured ? 'text-white/90' : 'text-ink'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <AnchorButton
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className={`mt-8 w-full ${plan.featured ? 'bg-white text-primary hover:bg-white/90' : ''}`}
                  variant={plan.featured ? 'primary' : 'outline'}
                >
                  Start free trial <ArrowRight size={16} />
                </AnchorButton>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Add-ons */}
        <Reveal delay={0.2} className="mx-auto mt-10 max-w-4xl">
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
        <Reveal delay={0.25} className="mx-auto mt-14 max-w-2xl text-center">
          <h3 className="text-xl font-bold text-ink">One system, instead of paying for several disconnected tools.</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Businesses can grow from one branch to multiple branches without migrating to another
            platform — the same system, the same data, the same team, at every stage.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-ink-muted">
            <Smartphone size={14} className="text-primary" /> Subscriptions are paid via M-Pesa
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
