import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Reveal } from '../components/marketing/Reveal';
import { FeatureCard } from '../components/marketing/FeatureCard';
import { CTASection } from '../components/marketing/CTASection';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { PhoneFrame } from '../components/marketing/PhoneFrame';
import {
  PropertyIllustration,
  CommerceIllustration,
  InventoryIllustration,
  AccountingIllustration,
  AutomationIllustration,
} from '../components/marketing/illustrations';
import { featureGroups } from '../content/features';
import { appScreenshots } from '../content/screenshots';

// Item: one illustration per engine group, matched to what that group
// actually covers - a direct, visual anchor for each section rather
// than five identical-feeling text blocks in a row.
const groupIllustrations = [PropertyIllustration, CommerceIllustration, InventoryIllustration, AccountingIllustration, AutomationIllustration];

export default function Features() {
  useSeo({
    title: 'Features',
    description: 'Every major capability in Jirani OS, organized by the engine that powers it — property management, commerce, inventory, accounting, and staff & access.',
    path: '/features',
  });

  return (
    <>
      <Section className="relative overflow-hidden pb-12">
        <BackgroundGlow variant="hero" />
        <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="text-center lg:text-left">
            <Badge tone="primary">Features</Badge>
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Everything the system does.</h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Organized by the engine underneath, not as one long list — because that is how the
              product is actually built, and it is the easiest way to see what is relevant to you.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="hidden justify-center gap-4 lg:flex">
            <PhoneFrame src={appScreenshots[0].src} alt={appScreenshots[0].alt} caption={appScreenshots[0].caption} className="mt-8" />
            <PhoneFrame src={appScreenshots[3].src} alt={appScreenshots[3].alt} caption={appScreenshots[3].caption} />
          </Reveal>
        </div>
      </Section>

      {featureGroups.map((group, gi) => {
        const Illustration = groupIllustrations[gi % groupIllustrations.length];
        return (
          <Section key={group.id} className={`relative overflow-hidden pt-0 pb-16 ${gi % 2 === 1 ? 'border-t border-border bg-surface' : ''}`}>
            {gi % 2 === 1 && <BackgroundGlow variant="section" />}
            <div className="container">
              <div className="mb-8 grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto]">
                <Reveal className="max-w-2xl">
                  <h2 className="text-2xl font-extrabold text-ink md:text-3xl">{group.title}</h2>
                  <p className="mt-2 text-sm text-ink-muted">{group.intro}</p>
                </Reveal>
                <Reveal delay={0.08} className="hidden sm:block">
                  <Illustration className="h-28 w-40" />
                </Reveal>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.features.map((f, i) => (
                  <Reveal key={f.title} delay={i * 0.05}>
                    <FeatureCard {...f} />
                  </Reveal>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <CTASection />
        </div>
      </Section>
    </>
  );
}
