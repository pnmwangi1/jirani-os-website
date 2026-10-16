import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Reveal } from '../components/marketing/Reveal';
import { FeatureCard } from '../components/marketing/FeatureCard';
import { CTASection } from '../components/marketing/CTASection';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { GroupScene } from '../components/story/GroupScene';
import { capabilities } from '../content/capabilities';
import { featureGroups } from '../content/features';
import { CheckCircle2 } from 'lucide-react';

const moreIds = ['shop-delivery', 'riders', 'virtual-properties'];

export default function Features() {
  useSeo({
    title: 'Features',
    description: 'Everything Jirani OS does for your business: selling, stock, customers and credit, suppliers, people, money and reports, growth and branches, plus your online shop, delivery and virtual properties.',
    path: '/features',
  });
  const more = featureGroups.filter((g) => moreIds.includes(g.id));

  return (
    <>
      <Section className="relative overflow-hidden pb-8">
        <BackgroundGlow variant="hero" />
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="primary">Features</Badge>
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Everything it takes to run the business.</h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              From the first sale of the morning to the profit figure at night. Jump to what you need.
            </p>
          </Reveal>
          <nav aria-label="Feature groups" className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
            {capabilities.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary">{c.title}</a>
            ))}
            <a href="#more" className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary">Shop, delivery and properties</a>
          </nav>
        </div>
      </Section>

      {capabilities.map((c, i) => (
        <Section key={c.id} className={`scroll-mt-20 py-12 ${i % 2 === 0 ? 'border-t border-border bg-surface' : ''}`}>
          <div id={c.id} className="container grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="overflow-hidden rounded-2xl border border-border bg-primary-light/30 p-3"><GroupScene kind={c.kind} after /></div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-2xl font-extrabold text-ink md:text-3xl">{c.title}</h2>
              <p className="mt-2 text-base text-ink-muted">{c.withJirani}</p>
              <ul className="mt-5 space-y-2.5">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-ink"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-primary" /><span>{b}</span></li>
                ))}
                {c.plus?.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-ink"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-primary" /><span>{b} <Badge tone="info">Plus</Badge></span></li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>
      ))}

      <div id="more" />
      {more.map((group) => (
        <Section key={group.id} className="border-t border-border py-12">
          <div className="container">
            <Reveal className="mb-8 max-w-2xl">
              <h2 className="text-2xl font-extrabold text-ink md:text-3xl">{group.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{group.intro}</p>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.features.map((f, i) => (<Reveal key={f.title} delay={i * 0.05}><FeatureCard {...f} /></Reveal>))}
            </div>
          </div>
        </Section>
      ))}

      <Section className="border-t border-border bg-surface">
        <div className="container"><CTASection /></div>
      </Section>
    </>
  );
}
