import { Truck, MapPin, Wallet, Gauge, Radar, Users2, ArrowRight, PhoneOff } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { LinkButton, AnchorButton } from '../components/ui/Button';
import { Reveal } from '../components/marketing/Reveal';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { CTASection } from '../components/marketing/CTASection';
import { PhoneFrame } from '../components/marketing/PhoneFrame';
import { AutomationIllustration } from '../components/marketing/illustrations';
import { appScreenshots } from '../content/screenshots';
import { APP_URL } from '../lib/constants';

const flow = [
  {
    n: '01',
    title: 'A customer orders from your shop',
    desc: 'Through the Jirani OS customer app, at whatever hour suits them — not just when they can walk in or catch you on the phone.',
  },
  {
    n: '02',
    title: 'Jirani OS prices the delivery',
    desc: 'Distance, your delivery rules and your fuel cost are worked out automatically, before anyone leaves the shop.',
  },
  {
    n: '03',
    title: 'A rider is dispatched',
    desc: 'Your own rider, or one on the Jirani OS network — assigned and routed without a single phone call.',
  },
  {
    n: '04',
    title: 'You watch it arrive',
    desc: 'The order is tracked from dispatch to doorstep, and it lands in your accounts the moment it is delivered.',
  },
];

const pillars = [
  {
    icon: Truck,
    title: 'Your fleet, or ours',
    body: 'Run your own riders and vehicles, tap into the wider Jirani OS delivery network, or use both — whichever gets an order to a customer fastest.',
  },
  {
    icon: Users2,
    title: 'Cascade dispatch',
    body: 'If your first choice of rider cannot take an order, Jirani OS automatically offers it to the next available one — an order is never left waiting on a single person\u2019s phone.',
  },
  {
    icon: Radar,
    title: 'Combined trips',
    body: 'Orders heading the same way can be picked up and dropped off together, so a rider\u2019s trip carries more value for the same fuel and time.',
  },
  {
    icon: Wallet,
    title: 'Delivery rules, your call',
    body: 'Free delivery above an order value, within a distance, or always — set the rule once from your Delivery & Fuel settings, and Jirani OS applies it to every order automatically.',
  },
  {
    icon: Gauge,
    title: 'Route & fuel costing',
    body: 'Every delivery is routed and costed using your actual per-vehicle fuel consumption, so you know what a delivery costs before the rider even leaves.',
  },
  {
    icon: MapPin,
    title: 'Delivery radius, capped',
    body: 'Set a hard maximum delivery distance per branch, so no order gets accepted further than you are actually willing to send a rider.',
  },
];

const examples = [
  {
    title: 'Water refill shop',
    body: 'A customer orders 20 litres through your shop. Jirani OS checks the distance against your free-delivery radius, prices it if it falls outside, and sends it to your rider — while your tank stock updates itself the moment the sale is made.',
  },
  {
    title: 'Mini mart',
    body: 'An order comes in at 9pm, after you have gone home. It is still priced, dispatched and delivered by whichever rider is available — the sale still happens.',
  },
  {
    title: 'Laundry pickup & delivery',
    body: 'Collection and return are both dispatched the same way — scheduled, tracked, and billed the moment the order is marked done, with no separate system to coordinate it.',
  },
];

export default function Delivery() {
  useSeo({
    title: 'Delivery & Logistics',
    description:
      'How Jirani OS delivers every order placed through your shop — automatic pricing, rider dispatch, cascade and combined trips, configurable delivery rules, and route & fuel costing.',
    path: '/delivery',
  });

  return (
    <>
      <Section className="relative overflow-hidden pb-12">
        <BackgroundGlow variant="hero" />
        <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="text-center lg:text-left">
            <Badge tone="primary">Delivery & Logistics</Badge>
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">
              From your shop to their doorstep — with no phone call in between.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Every business on Jirani OS gets a shop customers can order from, and a delivery
              engine that prices, dispatches and tracks every order automatically. This is what
              runs underneath.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <AnchorButton href={APP_URL} target="_blank" rel="noopener noreferrer" size="lg">
                Start free trial <ArrowRight size={16} />
              </AnchorButton>
              <LinkButton to="/pricing" size="lg" variant="outline">
                See pricing
              </LinkButton>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="hidden justify-center gap-4 lg:flex">
            <PhoneFrame src={appScreenshots[3].src} alt={appScreenshots[3].alt} caption={appScreenshots[3].caption} className="mt-8" />
            <PhoneFrame src={appScreenshots[4].src} alt={appScreenshots[4].alt} caption={appScreenshots[4].caption} />
          </Reveal>
        </div>
      </Section>

      {/* How it works */}
      <Section className="border-t border-border bg-surface">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="info">
              <PhoneOff size={13} className="mr-1 inline" /> No phone call needed
            </Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">One order, four automatic steps.</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Nobody has to coordinate this by hand — it happens the same way, every time.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {flow.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-bg p-6">
                  <span className="font-display text-2xl font-extrabold text-primary">{s.n}</span>
                  <h3 className="mt-3 font-display text-base font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Pillars */}
      <Section>
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">What the delivery engine actually does.</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.06}>
                <Card padding="lg" className="h-full">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <p.icon size={20} />
                  </div>
                  <h3 className="font-display text-base font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Examples */}
      <Section className="relative overflow-hidden border-t border-border bg-surface">
        <BackgroundGlow variant="section" />
        <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Badge tone="primary">In practice</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">What this looks like for a real business.</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              The delivery engine is the same underneath — it just shows up differently depending
              on what you sell.
            </p>
          </Reveal>
          <div className="space-y-4">
            {examples.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-bg p-5">
                  <h3 className="font-display text-sm font-bold text-ink">{e.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{e.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Under the hood illustration + close */}
      <Section>
        <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="hidden justify-center lg:flex">
            <AutomationIllustration className="h-48 w-64" />
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-extrabold text-ink md:text-3xl">One delivery engine, every business.</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Whether it is a 20-litre water order, a repaired phone going back to its owner, or a
              laundry bag on its way home, the same engine prices it, dispatches it and tracks it —
              already included in every Jirani OS plan, with no separate delivery app to pay for.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <CTASection
            title="Ready to stop coordinating deliveries by phone?"
            subtitle="Set up your shop, and let Jirani OS handle pricing, dispatch and tracking for every order that comes in."
          />
        </div>
      </Section>
    </>
  );
}
