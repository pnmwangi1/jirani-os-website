import { ReactNode } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useSeo, useJsonLd, faqSchema } from '../../lib/seo';
import { Section } from '../ui/Section';
import { Badge } from '../ui/Badge';
import { Accordion } from '../ui/Accordion';
import { Reveal } from './Reveal';
import { BackgroundGlow } from './BackgroundGlow';
import { PhoneFrame } from './PhoneFrame';
import { PlayStoreBadge } from './PlayStoreBadge';
import { APP_URL } from '../../lib/constants';

export interface ProductSection { title: string; text: string; points: string[]; screen?: { id: string; alt: string; caption?: string }; extra?: ReactNode }
export interface ProductPageData {
  seo: { title: string; description: string; path: string };
  badge: string;
  title: string;
  intro: string;
  facts: string[];
  cta: { label: string; cta: string };
  hero: { id: string; alt: string; caption?: string }[];
  sections: ProductSection[];
  faqs: { id: string; question: string; answer: string }[];
  closing: { title: string; text: string };
}

/** One layout for a product page (Games, My budget, Tables): hero with real screens, fact strip, alternating sections, questions, closing call to action. */
export function ProductPage({ data }: { data: ProductPageData }) {
  useSeo(data.seo);
  useJsonLd('faq', faqSchema(data.faqs));
  return (
    <>
      <Section className="relative overflow-hidden pb-12">
        <BackgroundGlow variant="hero" />
        <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal className="text-center lg:text-left">
            <Badge tone="primary">{data.badge}</Badge>
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">{data.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">{data.intro}</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-cta={data.cta.cta}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-action px-7 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90">
                {data.cta.label} <ArrowRight size={16} />
              </a>
              <PlayStoreBadge />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-start justify-center gap-4">
              {data.hero.map((s, i) => (
                <div key={s.id} className={`w-[44%] max-w-[210px] shrink-0 ${i % 2 === 1 ? 'mt-8' : ''}`}>
                  <PhoneFrame src={`/app/${s.id}.webp`} alt={s.alt} caption={s.caption} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface py-10">
        <div className="container">
          <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-3">
            {data.facts.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm font-semibold text-ink"><CheckCircle2 size={16} className="text-primary" />{f}</li>
            ))}
          </ul>
        </div>
      </Section>

      {data.sections.map((s, i) => (
        <Section key={s.title} className={`border-t border-border py-12 ${i % 2 === 1 ? 'bg-surface' : ''}`}>
          <div className="container grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <Reveal className={s.screen && i % 2 === 1 ? 'lg:order-2' : ''}>
              <h2 className="text-2xl font-extrabold text-ink md:text-3xl">{s.title}</h2>
              <p className="mt-2 text-base text-ink-muted">{s.text}</p>
              <ul className="mt-5 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-primary" /><span>{p}</span></li>
                ))}
              </ul>
              {s.extra}
            </Reveal>
            {s.screen ? (
              <Reveal delay={0.08}>
                <div className="mx-auto w-[220px]"><PhoneFrame src={`/app/${s.screen.id}.webp`} alt={s.screen.alt} caption={s.screen.caption} /></div>
              </Reveal>
            ) : <span />}
          </div>
        </Section>
      ))}

      <Section className="border-t border-border">
        <div className="container">
          <Reveal className="mb-8 text-center"><h2 className="text-3xl font-extrabold text-ink md:text-4xl">Quick answers.</h2></Reveal>
          <div className="mx-auto max-w-2xl"><Accordion items={data.faqs} /></div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="container">
          <Reveal>
            <div className="rounded-3xl bg-action px-6 py-14 text-center md:px-16 md:py-16">
              <h2 className="mx-auto max-w-xl text-3xl font-extrabold text-white md:text-4xl">{data.closing.title}</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-white/80">{data.closing.text}</p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-cta={`${data.cta.cta}-closing`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold text-action hover:bg-white/90">{data.cta.label} <ArrowRight size={16} /></a>
                <PlayStoreBadge />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
