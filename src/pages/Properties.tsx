import { ArrowRight, Car, Gauge, FileText, BarChart3, ShieldCheck } from 'lucide-react';
import { useSeo, useJsonLd, faqSchema } from '../lib/seo';
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
    description: `Run a property from your phone: private parking prompts, gate passes, notices, lost and found, meter readings and utility bills, chat and repairs. KES ${VIRTUAL_PRICE_KES} per property per month, residents and staff join free.`,
    path: '/properties',
  });
  const propFaqs = faqs.filter((f) => f.category === 'Properties');
  useJsonLd('faq', faqSchema(propFaqs));

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
              Set up from a Jirani <strong>customer account</strong>. Residents and staff join free by phone invite. Jirani does not collect rent.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-cta="properties-hero-setup" className="inline-flex items-center justify-center gap-2 rounded-full bg-action px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-colors hover:bg-action/90">
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

      <Section id="parking" className="scroll-mt-16 border-t border-border bg-surface">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="primary">Parking prompts</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">Blocked in at 7 a.m.? Type the plate.</h2>
            <p className="mt-3 text-base text-ink-muted">
              A tenant needs to leave, and another resident&apos;s car is blocking the way. They open the property in Jirani, type the number plate and send a prompt. That is all.
            </p>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { icon: Car, title: 'Type the number plate', body: 'Jirani answers only whether it found the plate. It never shows who owns the car, or which unit they live in.' },
              { icon: ShieldCheck, title: 'The owner is prompted, privately', body: 'The owner gets an urgent message that a vehicle needs to move. It never says who asked. If there is no reply, they are prompted three times, two minutes apart.' },
              { icon: Gauge, title: 'Still blocked? Security steps in', body: 'After the third prompt with no answer, security is alerted, or management if there is no guard, and the tenant is told. No phone numbers are swapped and nobody shouts across the compound.' },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-border bg-bg p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary"><s.icon size={18} /></span>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'Residents register their vehicles once',
                'Only people who belong to the property can send a prompt',
                'Lookups are limited, so plates cannot be searched in bulk',
                'A guest\u2019s plate prompts the resident hosting them',
                'Estates with several properties share plate lookups',
                'If the plate is not found, you can report it to security',
              ].map((t) => (
                <li key={t} className="rounded-xl border border-border bg-bg px-4 py-3 text-xs leading-relaxed text-ink">{t}</li>
              ))}
            </ul>
          </Reveal>
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

      <Section id="utilities" className="scroll-mt-16 border-t border-border">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="primary">Meter readings and utility bills</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">Bill for water and electricity, the clear way.</h2>
            <p className="mt-3 text-base text-ink-muted">Record the readings, check them, issue numbered bills and see who has paid. Jirani keeps the records. It does not collect or hold the money.</p>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { icon: Gauge, title: 'Readings you can trust', points: ['Staff record readings, or tenants do within a window you set', 'Move-in and move-out readings', 'Optional photo check flags a typed reading that does not match the meter photo', 'Estimates when a reading is missed, corrected later'] },
              { icon: FileText, title: 'Bills and statements', points: ['Draft, review and issue bills with sequential numbers', 'Bills and statements as PDFs', 'Record payments received and issue receipts'] },
              { icon: BarChart3, title: 'Know who has paid', points: ['Collection and arrears reports', 'A worklist of what needs doing next'] },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary"><c.icon size={18} /></span>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink">{c.title}</h3>
                  <ul className="mt-2 space-y-1.5">{c.points.map((p) => (<li key={p} className="text-sm leading-relaxed text-ink-muted">· {p}</li>))}</ul>
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
              <p className="mt-3 text-sm text-ink-muted">Pay with M-Pesa. The owner pays; residents, caretakers and security join free. Create it from a Jirani customer account, from the virtual property tile on your dashboard. Tokens can also pay for it if you use Pay as you go.</p>
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
