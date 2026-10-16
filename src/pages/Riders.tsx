import { Link } from 'react-router-dom';
import { ArrowRight, Wallet, Power, Route, MessageCircle, BarChart3, ShieldCheck } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Accordion } from '../components/ui/Accordion';
import { Reveal } from '../components/marketing/Reveal';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { FinalCTA } from '../components/marketing/FinalCTA';
import { RateCalculator } from '../components/story/RateCalculator';
import { RiderLinks } from '../components/story/RiderLinks';
import { OrderScene } from '../components/story/OrderScene';
import { APP_URL } from '../lib/constants';

const perks = [
  { icon: Wallet, title: 'Your rate, your call', body: 'Set a base fee and a per-km rate. Change them whenever you like.' },
  { icon: ShieldCheck, title: 'See the pay first', body: 'Every request shows exactly what you will earn before you accept.' },
  { icon: Power, title: 'Online when you want', body: 'Go offline and no requests reach you. Go online when you are ready to ride.' },
  { icon: Route, title: 'Combined trips', body: 'Customers can combine orders heading the same way into one trip.' },
  { icon: BarChart3, title: 'Know your earnings', body: 'Deliveries, income, distance and average per delivery, by week, month or more.' },
  { icon: MessageCircle, title: 'Talk in the app', body: 'Message the business and the customer inside the app.' },
];

const faqs = [
  { id: 'r1', question: 'How do I get delivery requests?', answer: 'Businesses and customers add you to their own rider lists. A business can add you to its free-delivery list or its trusted paid list, and a customer can add you to their personal list, found by your phone number. Orders are offered to the riders on those lists, in order.' },
  { id: 'r2', question: 'Who sets my price?', answer: 'You do. You set a base fee and a per-km rate. The delivery price is the base fee plus the per-km rate times the distance, and it is shown to the customer before they order.' },
  { id: 'r3', question: 'Do I get paid if I deliver for a business’s free delivery?', answer: 'Free-delivery riders are a business’s own dedicated riders, so the customer pays nothing for delivery and your arrangement is with that business.' },
  { id: 'r4', question: 'What if I miss a request?', answer: 'Each request has a time limit. If you decline or it runs out, it moves to the next rider on the list, so nobody is left waiting.' },
  { id: 'r5', question: 'How do I sign up?', answer: 'Create your account in the app and choose Rider when you sign up. A rider account is chosen when you sign up.' },
];

export default function Riders() {
  useSeo({
    title: 'Riders',
    description: 'Ride with Jirani OS: set your own base fee and per-km rate, see your pay before you accept, and get delivery requests from the businesses and customers who trust you.',
    path: '/riders',
  });
  return (
    <>
      <Section className="relative overflow-hidden pb-12">
        <BackgroundGlow variant="hero" />
        <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="text-center lg:text-left">
            <Badge tone="primary">For riders</Badge>
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Ride on your own terms.</h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">Otieno sets his own rate, sees what he will earn before he says yes, and works with the shops and customers who already trust him.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-cta="riders-hero" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-soft hover:bg-primary/90">Become a rider <ArrowRight size={16} /></a>
              <a href="#rate" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-base font-semibold text-ink hover:bg-surface">Try the rate</a>
            </div>
            <p className="mt-3 text-xs text-ink-muted">Choose Rider when you create your account.</p>
          </Reveal>
          <Reveal delay={0.1}><div className="rounded-3xl border border-border bg-surface p-3 shadow-soft-lg sm:p-5"><OrderScene step={2} className="w-full" /></div></Reveal>
        </div>
      </Section>

      <Section id="rate" className="scroll-mt-16 border-t border-border bg-surface">
        <div className="container">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Your rate. Try it.</h2>
            <p className="mt-3 text-base text-ink-muted">Base fee plus per-km rate, times the distance. Slide to see what a trip is worth.</p>
          </Reveal>
          <RateCalculator />
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="container">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Three ways the work finds you.</h2>
            <p className="mt-3 text-base text-ink-muted">You are not on an open pool. Someone has to know and trust you, which is why they keep calling.</p>
          </Reveal>
          <RiderLinks />
          <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl rounded-2xl border border-border bg-surface p-5 text-center text-sm text-ink-muted">
            <strong className="text-ink">Who pays?</strong> The customer pays the rider&apos;s rate for delivery. Free-delivery riders are a business&apos;s own, so the customer pays nothing.
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center"><h2 className="text-3xl font-extrabold text-ink md:text-4xl">Built for the road.</h2></Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-bg p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary"><p.icon size={18} /></span>
                  <p className="mt-3 font-display text-lg font-bold text-ink">{p.title}</p>
                  <p className="mt-1 text-sm text-ink-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-6 text-center text-sm text-ink-muted">A rider account can also shop. You keep every customer tool, like ordering and Refer &amp; Earn.</Reveal>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="container">
          <Reveal className="mx-auto mb-8 max-w-2xl text-center"><h2 className="text-3xl font-extrabold text-ink md:text-4xl">Rider questions.</h2></Reveal>
          <div className="mx-auto max-w-3xl"><Accordion items={faqs} /></div>
          <Reveal delay={0.1} className="mt-6 text-center"><Link to="/delivery" className="text-sm font-semibold text-primary hover:underline">How delivery works for businesses</Link></Reveal>
        </div>
      </Section>

      <Section className="pt-0"><div className="container"><FinalCTA /></div></Section>
    </>
  );
}
