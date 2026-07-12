import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Reveal } from '../components/marketing/Reveal';
import { SolutionCard } from '../components/marketing/SolutionCard';
import { CTASection } from '../components/marketing/CTASection';
import { solutions } from '../content/solutions';

export default function Solutions() {
  useSeo({
    title: 'Solutions',
    description: 'How Jirani OS serves property managers, landlords, retail and wholesale businesses, water companies, service businesses, manufacturers and growing enterprises.',
    path: '/solutions',
  });

  return (
    <>
      <Section className="pb-12">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="primary">Solutions</Badge>
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Built for your kind of business.</h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Jirani OS is one system underneath, but it is shaped by the real, specific needs of
              the businesses that use it. Here is what that looks like for yours.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.06}>
                <SolutionCard icon={s.icon} title={s.title} summary={s.summary} points={s.points} tone={s.tone} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <CTASection
            title="Not sure which fits your business?"
            subtitle="Tell us what you are running today — we will show you exactly how Jirani OS maps to it."
          />
        </div>
      </Section>
    </>
  );
}
