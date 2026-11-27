import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSeo, useJsonLd, faqSchema } from '../lib/seo';
import { Hero } from '../components/marketing/Hero';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/marketing/Reveal';
import { TrustStrip } from '../components/marketing/TrustStrip';
import { DayWithBaraka } from '../components/story/DayWithBaraka';
import { CapabilityGrid } from '../components/story/CapabilityGrid';
import { IndustryPicker } from '../components/story/IndustryPicker';
import { FollowOrder } from '../components/story/FollowOrder';
import { CharacterDays } from '../components/story/CharacterDays';
import { PropertyHome } from '../components/story/PropertyHome';
import { PlansSnapshot } from '../components/story/PlansSnapshot';
import { Pillars } from '../components/story/Pillars';
import { RealScreens } from '../components/marketing/RealScreens';
import { FinalCTA } from '../components/marketing/FinalCTA';
import { Accordion } from '../components/ui/Accordion';
import { faqs } from '../content/faq';

const homeFaqIds = ['what-is-jirani', 'what-can-it-do', 'who-is-it-for', 'getting-started-time'];

export default function Home() {
  useSeo({
    title: 'POS, payroll, property and budget app, Kenya',
    description:
      'Jirani OS is one platform for Kenyan businesses, properties and personal money. Run a till, stock, staff, payroll and accounts, manage a virtual property from your phone, and plan your month with My budget. Pay monthly or pay as you go.',
    path: '/',
  });
  const homeFaqs = homeFaqIds.map((id) => faqs.find((f) => f.id === id)).filter((f): f is NonNullable<typeof f> => !!f);
  useJsonLd('app', {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Jirani OS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Android, Web',
    url: 'https://www.jiranios.com/',
    inLanguage: 'en-KE',
    description: 'One platform for business, property and personal money in Kenya: point of sale, stock, staff and payroll, accounting and an online shop with delivery; virtual properties with parking prompts, gate passes, notices and utility bills; and My budget, a personal budget that reads M-Pesa statements.',
    offers: [
      { '@type': 'Offer', name: 'Jirani Start', price: '1000', priceCurrency: 'KES', description: 'Per month. Every new business starts with a 7-day free trial.' },
      { '@type': 'Offer', name: 'Jirani Plus', price: '2500', priceCurrency: 'KES', description: 'Per month. Adds full accounting, branch tools and advanced insights.' },
    ],
  });
  useJsonLd('faq', faqSchema(homeFaqs));

  return (
    <>
      <div className="theme-business"><Hero /></div>

      <Section className="border-t border-border bg-surface">
        <div className="container"><Pillars /></div>
      </Section>

      <Section id="day" className="theme-business scroll-mt-16 border-t border-border bg-surface">
        <div className="container"><DayWithBaraka /></div>
      </Section>

      <Section className="theme-business border-t border-border">
        <div className="container"><CapabilityGrid /></div>
      </Section>

      <Section className="theme-business border-t border-border bg-surface">
        <div className="container"><IndustryPicker /></div>
      </Section>

      <Section id="beyond" className="scroll-mt-16 border-t border-border">
        <div className="container">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Beyond the till</p>
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Your shop meets customers and riders.</h2>
            <p className="mt-3 text-base text-ink-muted">Every business gets an online shop. Customers order from it, and a rider you trust delivers.</p>
          </Reveal>
          <FollowOrder bare />
          <div className="mt-16"><CharacterDays only={['wanjiru', 'otieno']} heading={false} /></div>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container"><PropertyHome /></div>
      </Section>

      <Section className="theme-business border-t border-border">
        <div className="container"><PlansSnapshot /></div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">This is the real app.</h2>
            <p className="mt-3 text-base text-ink-muted">Screens from the app on a demo account. Pick an area.</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10"><RealScreens /></Reveal>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="container"><TrustStrip /></div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <Reveal className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Quick answers.</h2>
          </Reveal>
          <div className="mx-auto max-w-2xl">
            <Accordion items={homeFaqs.map((f) => ({ id: f.id, question: f.question, answer: f.answer }))} />
          </div>
          <Reveal delay={0.1} className="mt-6 text-center">
            <Link to="/faq" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              All questions <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="container"><FinalCTA /></div>
      </Section>
    </>
  );
}
