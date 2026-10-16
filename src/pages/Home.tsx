import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Hero } from '../components/marketing/Hero';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/marketing/Reveal';
import { TrustStrip } from '../components/marketing/TrustStrip';
import { FollowOrder } from '../components/story/FollowOrder';
import { CharacterDays } from '../components/story/CharacterDays';
import { RidersHome } from '../components/story/RidersHome';
import { PropertyHome } from '../components/story/PropertyHome';
import { PhoneFrame } from '../components/marketing/PhoneFrame';
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

      <Section id="follow" className="scroll-mt-16 border-t border-border bg-surface">
        <div className="container"><FollowOrder /></div>
      </Section>

      <Section className="border-t border-border">
        <div className="container"><CharacterDays /></div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container"><RidersHome /></div>
      </Section>

      <Section className="border-t border-border">
        <div className="container"><PropertyHome /></div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">This is the real app.</h2>
            <p className="mt-3 text-base text-ink-muted">The shop Wanjiru orders from, and the till Baraka sells on.</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 flex justify-center gap-4">
            <PhoneFrame src="/screenshots/shop-storefront.jpg" alt="A Jirani shop with deals and add to cart" caption="The shop" className="max-w-[200px]" />
            <PhoneFrame src="/screenshots/pos.jpg" alt="The Jirani point of sale" caption="The till" className="mt-8 max-w-[200px]" />
          </Reveal>
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
