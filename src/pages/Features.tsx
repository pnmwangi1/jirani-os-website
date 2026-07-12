import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Reveal } from '../components/marketing/Reveal';
import { FeatureCard } from '../components/marketing/FeatureCard';
import { CTASection } from '../components/marketing/CTASection';
import { featureGroups } from '../content/features';

export default function Features() {
  useSeo({
    title: 'Features',
    description: 'Every major capability in Jirani OS, organized by the engine that powers it — property management, commerce, inventory, accounting, and staff & access.',
    path: '/features',
  });

  return (
    <>
      <Section className="pb-12">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="primary">Features</Badge>
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Everything the system does.</h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Organized by the engine underneath, not as one long list — because that is how the
              product is actually built, and it is the easiest way to see what is relevant to you.
            </p>
          </Reveal>
        </div>
      </Section>

      {featureGroups.map((group, gi) => (
        <Section key={group.id} className={`pt-0 pb-16 ${gi % 2 === 1 ? 'border-t border-border bg-surface' : ''}`}>
          <div className="container">
            <Reveal className="mb-8 max-w-2xl">
              <h2 className="text-2xl font-extrabold text-ink md:text-3xl">{group.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{group.intro}</p>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.05}>
                  <FeatureCard {...f} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <CTASection />
        </div>
      </Section>
    </>
  );
}
