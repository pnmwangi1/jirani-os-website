import { MapPin, Share2, QrCode, Smartphone, ArrowRight, Store, Tag, Truck, Gift } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { AnchorButton, LinkButton } from '../components/ui/Button';
import { Reveal } from '../components/marketing/Reveal';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { CTASection } from '../components/marketing/CTASection';
import { PhoneFrame } from '../components/marketing/PhoneFrame';
import { FeaturedShops } from '../components/marketing/FeaturedShops';
import { CharacterDays } from '../components/story/CharacterDays';
import { GroupScene } from '../components/story/GroupScene';
import QRCode from 'react-qr-code';
import { APP_URL, PLAY_STORE_URL, SHOP_URL } from '../lib/constants';
import { useSession } from '../lib/useSession';

const shopperSteps = [
  { icon: MapPin, title: 'Tell us where you are', body: 'Share your location or type your area first, so you only see shops that can actually reach you. No wasted carts.' },
  { icon: Store, title: 'Browse like a real shop', body: 'Categories, deals, popular items and photos. Add to your cart without an account.' },
  { icon: Smartphone, title: 'Order in a minute', body: 'Sign in only when you check out. Pick delivery or collect, then follow your order in the Jirani app.' },
];

const shopperPerks = [
  { icon: Tag, title: 'Deals and popular items', body: 'See what is on offer and what other people are buying.' },
  { icon: Truck, title: 'Delivery or collect', body: 'Each shop shows whether it delivers to you and what it costs.' },
  { icon: Gift, title: 'Free delivery progress', body: 'Some shops give free delivery above an amount. Your cart shows how close you are.' },
];

const ownerPoints = [
  { icon: Share2, title: 'One link for every customer', body: 'Switch on "Online shop visible" and get your own address, for example shop.jiranios.com/your-shop. Share it on WhatsApp, Instagram or your receipts.' },
  { icon: QrCode, title: 'Print a QR poster', body: 'Stick it on your door or counter. Customers scan it and are in your shop in seconds.' },
  { icon: Smartphone, title: 'Photos make it shine', body: 'Add product photos in the first 7 days. After that the public link shows only products that have photos.' },
];

export default function Shops() {
  useSeo({
    title: 'Shops near you',
    description: 'Find local shops on Jirani that deliver to you or are ready for collection. Shop owners get a shareable shop link and QR poster.',
    path: '/shops',
  });
  const session = useSession();

  return (
    <>
      <Section className="relative overflow-hidden pb-12">
        <BackgroundGlow variant="hero" />
        <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal className="text-center lg:text-left">
            <Badge tone="primary">Shops near you</Badge>
            {session.signedIn && (
              <p className="mx-auto mt-4 max-w-md rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink lg:mx-0">
                You are signed in{session.firstName ? ` as ${session.firstName}` : ''}. Your orders and saved area are ready.
              </p>
            )}
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Order from the shops around you.</h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Local shops on Jirani deliver to your door or have your order ready to collect. Tell us where you are and we will show the ones that can reach you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <AnchorButton href={SHOP_URL} data-cta="shops-hero-find" size="lg">Find shops near me <ArrowRight size={16} /></AnchorButton>
              <AnchorButton href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" size="lg" variant="outline">Get the app</AnchorButton>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <PhoneFrame src="/screenshots/shop-storefront.jpg" alt="A Jirani shop on a phone, with categories, deals and an add to cart button" className="max-w-[260px]" />
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">How shopping works</h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {shopperSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-bg p-6">
                  <s.icon className="text-primary" size={26} />
                  <h3 className="mt-3 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-2xl"><CharacterDays only={['wanjiru']} heading={false} /></div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="container">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {shopperPerks.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-light text-primary"><s.icon size={18} /></span>
                  <div><p className="text-sm font-bold text-ink">{s.title}</p><p className="text-sm text-ink-muted">{s.body}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-5xl"><FeaturedShops /></div>
        </div>
      </Section>

      <Section id="get-your-shop-link" className="border-t border-border">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="info">For shop owners</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">Get your shop link</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">Your Jirani shop is also a web page you can share anywhere. No app download needed to browse.</p>
          </Reveal>
          <Reveal className="mx-auto mt-8 max-w-xl"><div className="rounded-2xl border border-border bg-primary-light/30 p-3"><GroupScene kind="grow" after /></div></Reveal>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {ownerPoints.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <s.icon className="text-primary" size={26} />
                  <h3 className="mt-3 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mx-auto mt-10 max-w-xs">
            <div className="rounded-2xl border border-border bg-bg p-5 text-center shadow-soft">
              <p className="font-display text-base font-bold text-ink">Scan to shop with us</p>
              <div className="mx-auto mt-3 inline-block rounded-xl bg-white p-3"><QRCode value={`${SHOP_URL.replace(/\/$/, '')}/your-shop`} size={112} /></div>
              <p className="mt-2 text-xs text-ink-muted">Sample poster. Yours shows your own shop.</p>
            </div>
          </Reveal>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <AnchorButton href={APP_URL} target="_blank" rel="noopener noreferrer" size="lg">Start free trial <ArrowRight size={16} /></AnchorButton>
            <LinkButton to="/pricing" size="lg" variant="outline">See pricing</LinkButton>
          </div>
        </div>
      </Section>

      <Section className="pt-0"><div className="container"><CTASection /></div></Section>
    </>
  );
}
