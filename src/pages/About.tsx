import { Target, Eye, Heart, Code2 } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/marketing/Reveal';
import { CTASection } from '../components/marketing/CTASection';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { AutomationIllustration } from '../components/marketing/illustrations';

const values = [
  { title: 'Built for the way businesses actually run', desc: 'Not the way software makes them run. Real workflows, real edge cases, real constraints.' },
  { title: 'One system, honestly', desc: 'We would rather say no to a feature than bolt on something that does not belong in the same system.' },
  { title: 'Clear over clever', desc: 'A report you trust beats a dashboard that impresses. We build for the former.' },
  { title: 'Grows without breaking', desc: 'What works for one shop should keep working when it becomes ten.' },
];

export default function About() {
  useSeo({
    title: 'About',
    description: 'The story behind Jirani OS — why it exists, what it is built on, and how we think about building software for growing businesses.',
    path: '/about',
  });

  return (
    <>
      <Section className="relative overflow-hidden pb-12">
        <BackgroundGlow variant="hero" />
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="primary">About Jirani OS</Badge>
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Why we built this.</h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Jirani is the Swahili word for neighbor. We built Jirani OS on a simple observation:
              the businesses closest to us — the property manager down the road, the shop on the
              corner, the water provider serving a whole estate — were all running on the same
              patchwork of spreadsheets, WhatsApp threads and disconnected apps. Not because they
              wanted to, but because nothing built for their scale had brought it all together.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <Card padding="lg" className="h-full">
              <Target size={24} className="text-primary" />
              <h2 className="mt-4 font-display text-xl font-bold text-ink">Mission</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                To give growing businesses one honest operating system — replacing the five
                disconnected tools most are running today with a single place that actually
                understands how their business works.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card padding="lg" className="h-full">
              <Eye size={24} className="text-primary" />
              <h2 className="mt-4 font-display text-xl font-bold text-ink">Vision</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                A future where a business does not have to choose between staying simple and
                growing — where the same system that runs a single shop can run a multi-branch
                enterprise, without a rebuild in between.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <Reveal className="mb-10 text-center">
            <Heart size={24} className="mx-auto text-primary" />
            <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">What we hold ourselves to.</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <Card padding="lg">
                  <h3 className="font-display text-base font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Code2 size={24} className="text-primary" />
            <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">How we build.</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Jirani OS is architected around a small number of reusable engines — billing,
              accounting, inventory, CRM and notifications — shared across every part of the
              product, rather than each feature reinventing its own version. That discipline is
              slower up front and faster forever after: when we add a new capability, we extend an
              engine that has already been tested in production, instead of writing something new
              from nothing.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <AutomationIllustration className="mb-3 h-40 w-full max-w-sm" />
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-ink-muted">Shared engines, not five separate systems</p>
            <p className="text-base leading-relaxed text-ink-muted">
              We also believe in getting the fundamentals right before the features: real
              double-entry accounting, not a spreadsheet pretending to be one. Role-based
              permissions and audit trails from day one, not added after the first security
              question. A point of sale that keeps working when the internet does not, because
              that is the real condition many of the businesses we build for actually operate in.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <CTASection title="Want to see how we think about your business specifically?" />
        </div>
      </Section>
    </>
  );
}
