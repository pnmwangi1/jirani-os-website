import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSeo, useJsonLd } from '../lib/seo';
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
import { RealScreens } from '../components/marketing/RealScreens';
import { FinalCTA } from '../components/marketing/FinalCTA';
import { Accordion } from '../components/ui/Accordion';
import { faqs } from '../content/faq';

const homeFaqIds = ['what-is-jirani', 'who-is-it-for', 'getting-started-time'];

export default function Home() {
  useSeo({
    title: 'Jirani OS',
    description:
      'Jirani OS is one app for Kenya to run a business, order from shops near you, or manage a property. Every business gets an online shop with delivery, a till, stock, staff and accounts. Start your 7-day free trial.',
    path: '/',
  });
  useJsonLd('app', {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Jirani OS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Android, Web',
    url: 'https://www.jiranios.com/',
    description: 'One app to run a business, shop from local businesses, deliver as a rider, or look after a property in Kenya.',
    offers: { '@type': 'Offer', price: '1000', priceCurrency: 'KES', description: 'Jirani Start, per month. Every new business starts with a 7-day free trial.' },
  });
  const homeFaqs = homeFaqIds.map((id) => faqs.find((f) => f.id === id)).filter((f): f is NonNullable<typeof f> => !!f);

  return (
    <>
      <div className="theme-business"><Hero /></div>

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
