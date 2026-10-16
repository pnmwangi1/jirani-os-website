import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { BackgroundGlow } from './BackgroundGlow';
import { PlayStoreBadge } from './PlayStoreBadge';
import { ShopDayScene, SHOP_DAY_STEPS } from '../story/ShopDayScene';
import { shopDaySteps } from '../../content/shopDay';
import { APP_URL } from '../../lib/constants';

// The home page leads with the business owner, the person who subscribes. The scene plays Baraka's day on a loop
// (open, sell, stock, credit, restock, commission, close, profit). Visitors who prefer reduced motion get the final
// frame, still.
export function Hero() {
  const [step, setStep] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) { setStill(true); setStep(SHOP_DAY_STEPS - 1); return; }
    const id = window.setInterval(() => setStep((s) => (s + 1) % SHOP_DAY_STEPS), 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="container relative pt-14 pb-8 md:pt-20 md:pb-12">
      <BackgroundGlow variant="hero" />
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge tone="primary">Made in Kenya · pay with M-Pesa</Badge>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-5 text-4xl font-extrabold leading-[1.1] text-ink md:text-6xl">
            Your whole business, in one app.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted lg:mx-0">
            Sales, stock, staff, customer credit, suppliers and your books, plus your own online shop with delivery.
          </motion.p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a href="#day" data-cta="hero-day" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-colors hover:bg-primary/90">
              See a day with Jirani <ArrowDown size={16} />
            </a>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-cta="hero-trial" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-primary hover:text-primary">
              Start free trial <ArrowRight size={16} />
            </a>
          </div>
          <p className="mt-3 text-xs text-ink-muted">7-day free trial · no card required</p>
          <div className="mt-5 flex justify-center lg:justify-start"><PlayStoreBadge /></div>
          <p className="mt-6 text-sm text-ink-muted">
            Also for <a href="#beyond" className="font-semibold text-primary hover:underline">shoppers and riders</a> and{' '}
            <a href="#properties" className="font-semibold text-primary hover:underline">property owners</a>.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-2xl rounded-3xl border border-border bg-surface p-3 shadow-soft-lg sm:p-5">
          <ShopDayScene step={step} className="w-full" />
          <p className="mt-1 text-center text-sm font-semibold text-ink" aria-live="polite">{step + 1}. {shopDaySteps[step].title}</p>
          {!still && (
            <div className="mt-2 flex justify-center gap-1.5" aria-hidden>
              {shopDaySteps.map((_, i) => (<span key={i} className={`h-1.5 rounded-full transition-all ${i === step ? 'w-5 bg-primary' : 'w-1.5 bg-border'}`} />))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
