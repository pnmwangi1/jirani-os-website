import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Reveal } from '../components/marketing/Reveal';
import { CTASection } from '../components/marketing/CTASection';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { IndustryScene } from '../components/story/IndustryScene';
import { industryProfiles } from '../content/industryProfiles';
import { CheckCircle2 } from 'lucide-react';

export default function Industries() {
  useSeo({
    title: 'Industries',
    description: 'Jirani OS runs water refill, mini marts, apparel, restaurants, LPG, electronics, hardware, pharmacy, salons, laundry and more. Six have their own guided setup; the rest run on the general tools.',
    path: '/industries',
  });
  const guided = industryProfiles.filter((p) => p.guided);
  const others = industryProfiles.filter((p) => !p.guided);

  const card = (p: (typeof industryProfiles)[number], i: number) => (
    <Reveal key={p.id} delay={(i % 3) * 0.05}>
      <article id={p.id} className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
        <div className="aspect-[2/1] w-full bg-primary-light/40"><IndustryScene kind={p.kind} /></div>
        <div className="flex flex-1 flex-col p-5">
          <Badge tone={p.guided ? 'primary' : 'neutral'}>{p.guided ? 'Guided setup' : 'Runs on Goods & Services'}</Badge>
          <h2 className="mt-3 text-lg font-bold text-ink">{p.title}</h2>
          <p className="mt-1 text-sm text-ink-muted">{p.pitch}</p>
          <ul className="mt-4 space-y-2">
            {p.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0 text-primary" /><span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );

  return (
    <>
      <Section className="relative overflow-hidden pb-10">
        <BackgroundGlow variant="hero" />
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="primary">Industries</Badge>
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Set up for the way your business really runs.</h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Six kinds of business get a guided setup that builds your products, stock and rules in minutes.
              Every other business runs on the same full set of tools: till, stock, customers, suppliers and reports.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0 pb-10">
        <div className="container">
          <h2 className="mb-6 text-sm font-bold uppercase tracking-wide text-ink-muted">Guided setup</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{guided.map(card)}</div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="container">
          <h2 className="mb-6 text-sm font-bold uppercase tracking-wide text-ink-muted">Runs on Goods & Services</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{others.map(card)}</div>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container"><CTASection /></div>
      </Section>
    </>
  );
}
