import { Link } from 'react-router-dom';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Reveal } from '../components/marketing/Reveal';
import { CTASection } from '../components/marketing/CTASection';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { GroupScene } from '../components/story/GroupScene';
import { capabilities } from '../content/capabilities';
import { X, Check, ArrowRight } from 'lucide-react';

// Solutions by job: the problem a business owner has today, and what changes. Every line comes from content/capabilities.ts.
export default function Solutions() {
  useSeo({
    title: 'Solutions',
    description: 'Jirani OS by the job you need done: sell, keep stock right, collect credit, pay suppliers, manage people, know your profit and grow to more branches.',
    path: '/solutions',
  });

  return (
    <>
      <Section className="relative overflow-hidden pb-10">
        <BackgroundGlow variant="hero" />
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="primary">Solutions</Badge>
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Pick the problem. See the fix.</h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Every business has the same eight jobs. Here is how each one looks today, and how it looks with Jirani OS.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-2">
          {capabilities.map((c, i) => (
            <Reveal key={c.id} delay={(i % 2) * 0.06}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
                <div className="bg-primary-light/30 p-3"><GroupScene kind={c.kind} after /></div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-xl font-bold text-ink">{c.title}</h2>
                  <p className="mt-3 flex items-start gap-2 text-sm text-ink-muted"><X size={16} className="mt-0.5 flex-shrink-0 text-danger" /><span>{c.before}</span></p>
                  <p className="mt-2 flex items-start gap-2 text-sm font-medium text-ink"><Check size={16} className="mt-0.5 flex-shrink-0 text-success" /><span>{c.withJirani}</span></p>
                  <Link to={`/features#${c.id}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">See everything in {c.title} <ArrowRight size={14} /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <CTASection title="Not sure which fits your business?" subtitle="Start the free trial and set up your business in minutes, or see how your industry is set up." />
        </div>
      </Section>
    </>
  );
}
