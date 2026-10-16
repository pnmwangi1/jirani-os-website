import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Hero } from '../components/marketing/Hero';
import { WaveDivider } from '../components/marketing/WaveDivider';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/marketing/Reveal';
import { AudienceCards } from '../components/marketing/AudienceCards';
import { ShopSection } from '../components/marketing/ShopSection';
import { BusinessSection } from '../components/marketing/BusinessSection';
import { PropertySection } from '../components/marketing/PropertySection';
import { DeliveryStrip } from '../components/marketing/DeliveryStrip';
import { TrustStrip } from '../components/marketing/TrustStrip';
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
  const homeFaqs = homeFaqIds.map((id) => faqs.find((f) => f.id === id)).filter((f): f is NonNullable<typeof f> => !!f);

  return (
    <>
      <Hero />
      <WaveDivider className="text-surface -mb-1" />

      <Section className="bg-surface pt-12 md:pt-16">
        <div className="container">
          <Reveal className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Pick your start.</h2>
          </Reveal>
          <AudienceCards />
        </div>
      </Section>

      <Section id="shops" className="border-t border-border">
        <div className="container"><ShopSection /></div>
      </Section>

      <Section id="business" className="border-t border-border bg-surface">
        <div className="container"><BusinessSection /></div>
      </Section>

      <Section id="properties" className="border-t border-border">
        <div className="container"><PropertySection /></div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container"><DeliveryStrip /></div>
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
