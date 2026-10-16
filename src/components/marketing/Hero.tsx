import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { BackgroundGlow } from './BackgroundGlow';
import { PlayStoreBadge } from './PlayStoreBadge';
import { OrderScene } from '../story/OrderScene';
import { orderSteps } from '../../content/orderStory';
import { audiences } from '../../content/audiences';

// The hero tells the story instead of describing it: the same order from the "Follow one order" section plays on a loop.
// Reduced-motion visitors get the finished scene (everyone happy) and no looping.
export function Hero() {
  const [step, setStep] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) { setStill(true); setStep(orderSteps.length - 1); return; }
    const id = window.setInterval(() => setStep((s) => (s + 1) % orderSteps.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="container relative pt-14 pb-8 md:pt-20 md:pb-12">
      <BackgroundGlow variant="hero" />
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge tone="primary">Made in Kenya · pay with M-Pesa</Badge>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-5 text-4xl font-extrabold leading-[1.1] text-ink md:text-6xl">
            One order. Three people. One app.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted lg:mx-0">
            Wanjiru orders. Baraka sells. Otieno delivers. Jirani OS connects them, and looks after the building they live in too.
          </motion.p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a href="#follow" data-cta="hero-follow" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-colors hover:bg-primary/90">
              See how it works <ArrowDown size={16} />
            </a>
            <PlayStoreBadge />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start" aria-label="Jump to what you do">
            {audiences.map((a) => (
              <a key={a.key} href={`#${a.anchor}`} data-cta={`hero-chip-${a.key}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary">
                <a.icon size={14} /> {a.chip}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl rounded-3xl border border-border bg-surface p-3 shadow-soft-lg sm:p-5">
          <OrderScene step={step} className="w-full" />
          <p className="mt-1 text-center text-sm font-semibold text-ink" aria-live="polite">{orderSteps[step].title}</p>
          {!still && (
            <div className="mt-2 flex justify-center gap-1.5" aria-hidden>
              {orderSteps.map((_, i) => (<span key={i} className={`h-1.5 rounded-full transition-all ${i === step ? 'w-5 bg-primary' : 'w-1.5 bg-border'}`} />))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
