import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSeo } from '../lib/seo';
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
import { KitchenScreen, CreditScreen, StockScreen, PeopleScreen } from '../components/story/SampleScreens';
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

      <Section id="day" className="scroll-mt-16 border-t border-border bg-surface">
        <div className="container"><DayWithBaraka /></div>
      </Section>

      <Section className="border-t border-border">
        <div className="container"><CapabilityGrid /></div>
      </Section>

      <Section className="border-t border-border bg-surface">
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

      <Section className="border-t border-border">
        <div className="container"><PlansSnapshot /></div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">This is the real app.</h2>
            <p className="mt-3 text-base text-ink-muted">The shop customers order from, and the till Baraka sells on.</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <div className="flex items-start justify-center gap-4">
            <div className="w-[44%] max-w-[200px] shrink-0"><PhoneFrame src="/screenshots/shop-storefront.jpg" alt="A Jirani shop with deals and add to cart" caption="The shop" /></div>
            <div className="mt-8 w-[44%] max-w-[200px] shrink-0"><PhoneFrame src="/screenshots/pos.jpg" alt="The Jirani point of sale" caption="The till" /></div>
            </div>
          </Reveal>
          <p className="mt-12 text-center text-sm font-semibold text-ink-muted">More of what is inside, with sample figures</p>
          <Reveal delay={0.1} className="mt-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"><KitchenScreen /><CreditScreen /><StockScreen /><PeopleScreen /></div>
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
