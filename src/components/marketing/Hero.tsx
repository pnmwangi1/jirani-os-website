import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { PhoneFrame } from './PhoneFrame';
import { BackgroundGlow } from './BackgroundGlow';
import { PlayStoreBadge } from './PlayStoreBadge';
import { PropertyCardStack } from './PropertyCards';
import { audiences, type AudienceKey } from '../../content/audiences';
import { audienceCta } from '../../lib/audienceCta';

// Equal weight for the three people who land here. The chips switch the picture and the main button together; the
// visual rotates by itself until someone touches it (and never when the visitor prefers reduced motion).
const visuals: Record<AudienceKey, { src?: string; alt: string }> = {
  business: { src: '/screenshots/pos.jpg', alt: 'Jirani OS point of sale with products and services' },
  shop: { src: '/screenshots/shop-storefront.jpg', alt: 'A Jirani shop on a phone, with categories, deals and an add to cart button' },
  property: { alt: 'Parking prompt, gate pass and notice cards from a Jirani virtual property' },
};

export function Hero() {
  const [active, setActive] = useState<AudienceKey>('business');
  const touched = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      if (touched.current) return;
      setActive((cur) => audiences[(audiences.findIndex((a) => a.key === cur) + 1) % audiences.length].key);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const current = audiences.find((a) => a.key === active)!;
  const cta = audienceCta(current);
  const visual = visuals[active];

  return (
    <div className="container relative pt-14 pb-8 md:pt-20 md:pb-12">
      <BackgroundGlow variant="hero" />
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge tone="primary">Made in Kenya · pay with M-Pesa</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl font-extrabold leading-[1.1] text-ink md:text-6xl"
          >
            Your business. Your shop. Your property.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted lg:mx-0"
          >
            One app to run a business, order from shops near you, or look after a property.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start"
            role="tablist"
            aria-label="Choose what you want to do"
          >
            {audiences.map((a) => (
              <button
                key={a.key}
                role="tab"
                aria-selected={a.key === active}
                onClick={() => { touched.current = true; setActive(a.key); }}
                data-cta={`hero-chip-${a.key}`}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  a.key === active ? 'border-primary bg-primary text-white shadow-soft' : 'border-border bg-surface text-ink hover:border-primary hover:text-primary'
                }`}
              >
                <a.icon size={15} /> {a.chip}
              </button>
            ))}
          </motion.div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={cta.href}
              {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              data-cta={`hero-primary-${active}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-colors hover:bg-primary/90"
            >
              {current.cta} <ArrowRight size={16} />
            </a>
            <a href={`#${current.anchor}`} className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-surface">
              {current.toLabel}
            </a>
          </div>
          {active === 'business' && <p className="mt-3 text-xs text-ink-muted">7-day free trial · no card required</p>}
          <div className="mt-5 flex justify-center lg:justify-start">
            <PlayStoreBadge />
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[420px] w-full max-w-sm items-center justify-center" aria-live="polite">
          {visual.src ? (
            <PhoneFrame key={active} src={visual.src} alt={visual.alt} className="max-w-[240px] sm:max-w-[280px]" />
          ) : (
            <PropertyCardStack key={active} />
          )}
        </div>
      </div>
    </div>
  );
}
