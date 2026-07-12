import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/marketing/Reveal';
import { CTASection } from '../components/marketing/CTASection';
import { industries } from '../content/industries';
import { CheckCircle2 } from 'lucide-react';

export default function Industries() {
  useSeo({
    title: 'Industries',
    description: 'How Jirani OS solves specific, real problems in real estate, retail and wholesale, utilities, and service & manufacturing businesses.',
    path: '/industries',
  });

  return (
    <>
      <Section className="pb-12">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="primary">Industries</Badge>
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">The problems we actually built this to solve.</h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Every industry we build for has a specific, real breakdown that happens when
              businesses grow past ad-hoc tools. Here is what that looks like, and what changes.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="container space-y-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.id} delay={i * 0.05}>
              <Card padding="lg">
                <h2 className="font-display text-2xl font-bold text-ink">{ind.title}</h2>
                <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-muted">The challenge</h3>
                    <p className="text-sm leading-relaxed text-ink-muted">{ind.challenge}</p>
                    <h3 className="mb-2 mt-5 text-xs font-bold uppercase tracking-wide text-ink-muted">Our approach</h3>
                    <p className="text-sm leading-relaxed text-ink-muted">{ind.approach}</p>
                  </div>
                  <div className="rounded-2xl bg-primary-light/40 p-6">
                    <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-primary">What changes</h3>
                    <ul className="space-y-3">
                      {ind.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2 text-sm text-ink">
                          <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <CTASection />
        </div>
      </Section>
    </>
  );
}
