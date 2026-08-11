import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/marketing/Reveal';
import { CTASection } from '../components/marketing/CTASection';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { PropertyIllustration, CommerceIllustration, DataIllustration, AutomationIllustration } from '../components/marketing/illustrations';
import { industries } from '../content/industries';
import { businessTemplates } from '../content/businessTemplates';
import { CheckCircle2 } from 'lucide-react';

const industryIllustrations = [PropertyIllustration, CommerceIllustration, DataIllustration, AutomationIllustration];

export default function Industries() {
  useSeo({
    title: 'Industries',
    description: 'How Jirani OS helps mini marts, water refill businesses, salons, bars & restaurants, pharmacies, property managers and more — built for how each business actually runs.',
    path: '/industries',
  });

  return (
    <>
      <Section className="relative overflow-hidden pb-12">
        <BackgroundGlow variant="hero" />
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

      {/* Business templates — concise, specific "how this helps MY
          business" grid (Phase 5, explicit request), matching Jirani
          OS's actual setup-engine templates. */}
      <Section className="pt-0 pb-12">
        <div className="container">
          <Reveal className="mb-8 text-center">
            <Badge tone="primary">Built for your specific business</Badge>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessTemplates.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.04}>
                {t.photo ? (
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1">
                    <img src={t.photo} alt={t.title} className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="bg-surface p-5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light">
                        <t.icon size={16} className="text-primary" />
                      </div>
                      <h3 className="mt-3 text-sm font-bold text-ink">{t.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{t.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:border-primary/25 hover:shadow-soft-lg hover:-translate-y-1">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light">
                      <t.icon size={16} className="text-primary" />
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-ink">{t.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{t.description}</p>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="container space-y-6">
          {industries.map((ind, i) => {
            const Illustration = industryIllustrations[i % industryIllustrations.length];
            return (
            <Reveal key={ind.id} delay={i * 0.05}>
              <Card padding="lg">
                <div className="flex items-center gap-5">
                  <Illustration className="hidden h-20 w-28 flex-shrink-0 sm:block" />
                  <h2 className="font-display text-2xl font-bold text-ink">{ind.title}</h2>
                </div>
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
          );})}
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
