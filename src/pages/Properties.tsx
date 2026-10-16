import { ArrowRight } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Reveal } from '../components/marketing/Reveal';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { PropertyCardStack } from '../components/marketing/PropertyCards';
import { PropertyStory } from '../components/story/PropertyStory';
import { FinalCTA } from '../components/marketing/FinalCTA';
import { virtualFeatures, virtualSteps } from '../content/virtualFeatures';
import { faqs } from '../content/faq';
import { Accordion } from '../components/ui/Accordion';
import { APP_URL, VIRTUAL_PRICE_KES } from '../lib/constants';

export default function Properties() {
  useSeo({
    title: 'Virtual properties',
    description: `Run a property from your phone: parking prompts, gate passes, notices, lost and found, chat and repairs. KES ${VIRTUAL_PRICE_KES} per property per month, residents and staff join free.`,
    path: '/properties',
  });
  const propFaqs = faqs.filter((f) => f.category === 'Properties');

  return (
    <>
      <Section className="relative overflow-hidden pb-12">
        <BackgroundGlow variant="hero" />
        <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal className="text-center lg:text-left">
            <Badge tone="primary">Virtual properties</Badge>
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Look after your property from your phone.</h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Everything a good caretaker, security desk and notice board do, in one app.
            </p>
            <p className="mt-5 inline-block rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-ink">
              Set up from a Jirani <strong>customer account</strong>. Residents and staff join free by phone invite.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-cta="properties-hero-setup" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-colors hover:bg-primary/90">
                Set up a property <ArrowRight size={16} />
              </a>
              <a href="#story" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-surface">
                See a day in the building
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}><PropertyCardStack /></Reveal>
        </div>
      </Section>

      <Section id="story" className="scroll-mt-16 border-t border-border bg-surface">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">A day in Mama Njeri&apos;s building.</h2>
            <p className="mt-3 text-base text-ink-muted">44 homes, one caretaker, one security guard, and one app.</p>
          </Reveal>
          <div className="mt-10"><PropertyStory /></div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">How it works</h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            {virtualSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-border bg-bg p-6">
                  <span className="font-display text-4xl font-extrabold text-primary/25">{s.n}</span>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">What you get</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {virtualFeatures.map((f, i) => (
              <Reveal key={f.key} delay={(i % 4) * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-surface p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary">
                    <f.icon size={18} />
                  </span>
                  <h3 className="mt-3 text-base font-bold text-ink">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{f.outcome}</p>
                  <ul className="mt-3 space-y-1.5">
                    {f.points.map((p) => (
                      <li key={p} className="text-xs leading-relaxed text-ink-muted">· {p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-bg p-8 text-center shadow-soft">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Simple pricing</p>
              <p className="mt-2 font-display text-4xl font-extrabold text-ink">KES {VIRTUAL_PRICE_KES}<span className="text-base font-semibold text-ink-muted"> per property, per month</span></p>
              <p className="mt-3 text-sm text-ink-muted">Pay with M-Pesa. The owner pays; residents, caretakers and security join free. Create it from a Jirani customer account, from the virtual property tile on your dashboard.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="container mx-auto max-w-3xl">
          <Reveal className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Questions about properties</h2>
          </Reveal>
          <Accordion items={propFaqs.map((f) => ({ id: f.id, question: f.question, answer: f.answer }))} />
        </div>
      </Section>

      <Section className="pt-0">
        <div className="container"><FinalCTA title="Ready to look after your property?" /></div>
      </Section>
    </>
  );
}
