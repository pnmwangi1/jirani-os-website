import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Store, Droplet, Wrench, Factory } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Hero } from '../components/marketing/Hero';
import { FeatureCard } from '../components/marketing/FeatureCard';
import { TestimonialCard } from '../components/marketing/TestimonialCard';
import { StatBlock } from '../components/marketing/StatBlock';
import { CTASection } from '../components/marketing/CTASection';
import { ScreenshotShowcase } from '../components/marketing/ScreenshotShowcase';
import { PhoneFrame } from '../components/marketing/PhoneFrame';
import { Reveal } from '../components/marketing/Reveal';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { AutomationIllustration } from '../components/marketing/illustrations';
import { WaveDivider } from '../components/marketing/WaveDivider';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { featureGroups } from '../content/features';
import { testimonials } from '../content/testimonials';
import { appScreenshots } from '../content/screenshots';

const highlightFeatures = [
  featureGroups[0].features[1], // Rent management
  featureGroups[1].features[0], // POS
  featureGroups[3].features[0], // Accounting engine
  featureGroups[2].features[0], // Inventory
  featureGroups[4].features[2], // Audit trails
  featureGroups[0].features[4], // Utilities
];

const categories = [
  { icon: Building2, label: 'Property Managers' },
  { icon: Store, label: 'Retail & Wholesale' },
  { icon: Droplet, label: 'Water Companies' },
  { icon: Wrench, label: 'Service Businesses' },
  { icon: Factory, label: 'Manufacturers' },
];

const steps = [
  { n: '01', title: 'Set up your business', desc: 'Add your properties, branches, products or services — whatever your business runs on.' },
  { n: '02', title: 'Your team gets to work', desc: 'Everyone logs in with role-based access — they see exactly what their job needs, nothing more.' },
  { n: '03', title: 'Everything reconciles itself', desc: 'Sales, rent, payments and stock movements flow into accounting automatically, in real time.' },
];

export default function Home() {
  useSeo({
    title: 'Jirani OS',
    description:
      'Jirani OS unifies property management, sales, billing, inventory and accounting into one system — built for businesses that outgrew spreadsheets and disconnected apps.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <WaveDivider className="text-surface -mb-1" />

      {/* Why one system */}
      <Section className="relative overflow-hidden border-t border-border bg-surface">
        <BackgroundGlow variant="section" />
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="primary">Why one system</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">
              Most businesses do not have a software problem.
              <br />
              They have five software problems.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              A spreadsheet for rent, a separate till for sales, WhatsApp for orders, a notebook
              for stock and an accountant reconstructing it all at month-end. None of it talks to
              the other parts — so nothing ever quite adds up. Jirani OS replaces all of it with
              one system where every part already knows about every other part.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <AutomationIllustration className="mx-auto mt-8 h-44 w-full max-w-md" />
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-wide text-ink-muted">Every part of the system, connected automatically</p>
          </Reveal>
        </div>
      </Section>

      {/* Feature highlights */}
      <Section>
        <div className="container">
          <Reveal className="mb-12 max-w-xl">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Everything connected, out of the box.</h2>
            <p className="mt-3 text-base text-ink-muted">A few of the engines running underneath the system.</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlightFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-8 text-center">
            <Link to="/features" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              See every capability <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Business categories */}
      <Section className="border-t border-border bg-surface">
        <div className="container">
          <Reveal className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Built for how you actually work.</h2>
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat, i) => (
              <Reveal key={cat.label} delay={i * 0.05}>
                <Link
                  to="/solutions"
                  className="flex items-center gap-2 rounded-full border border-border bg-bg px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
                >
                  <cat.icon size={16} />
                  {cat.label}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* How it works — a real sequence, so numbered steps are earned here */}
      <Section>
        <div className="container">
          <Reveal className="mb-12 max-w-xl">
            <Badge tone="primary">How it works</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">From setup to daily use.</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <span className="font-display text-4xl font-extrabold text-primary/25">{step.n}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Architecture overview */}
      <Section className="border-t border-border bg-surface">
        <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Badge tone="manager">Under the hood</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">Built on reusable engines, not bolted-on features.</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Jirani OS is architected around a small set of core engines — Billing, Accounting,
              Inventory, CRM and Notifications — that every part of the product shares. A rent
              invoice and a retail sale use the same billing engine underneath. A stock movement
              from a sale and one from a production run use the same inventory engine.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              That is what makes it possible to add a new capability — say, a new utility type, or
              a new industry workflow — without rebuilding what already works.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <PhoneFrame src={appScreenshots[3].src} alt={appScreenshots[3].alt} caption={appScreenshots[3].caption} className="mt-6" />
              <PhoneFrame src={appScreenshots[4].src} alt={appScreenshots[4].alt} caption={appScreenshots[4].caption} />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Screenshot showcase — real product screenshots */}
      <Section>
        <div className="container">
          <Reveal className="mb-12 text-center">
            <Badge tone="primary">The real thing</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">See it in action.</h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-ink-muted">
              These are real screens from the Jirani OS app — not mockups.
            </p>
          </Reveal>
          <ScreenshotShowcase screenshots={appScreenshots} />
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="border-t border-border bg-surface">
        <div className="container">
          <Reveal className="mb-10 max-w-xl">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">What running one system looks like.</h2>
            <p className="mt-3 text-sm text-ink-muted">
              Jirani OS is early — these are illustrative examples of the outcomes the product is designed to
              deliver, not published customer reviews.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.role} delay={i * 0.08}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="container">
          <Reveal>
            <StatBlock />
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="container">
          <CTASection />
        </div>
      </Section>
    </>
  );
}
