import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LinkButton, AnchorButton } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { PhoneFrame } from './PhoneFrame';
import { BackgroundGlow } from './BackgroundGlow';
import { APP_URL } from '../../lib/constants';
import { appScreenshots } from '../../content/screenshots';

// Item (Phase 1 — hero rebuild, explicit request): the abstract
// "scattered tools converge" animation was clever but told the story
// intellectually rather than showing the actual product. This is a
// real screenshot in a real phone frame — the visitor sees Jirani OS
// itself within the first second, not a diagram about it. Floating
// stat cards echo the same "everything connected" idea without
// needing a separate illustration.
export function Hero() {
  const posShot = appScreenshots.find((s) => s.src.includes('pos'))!;

  return (
    <div className="container relative pt-16 pb-8 md:pt-24 md:pb-12">
      <BackgroundGlow variant="hero" />
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge tone="primary">7-day free trial · no card required</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl font-extrabold leading-[1.1] text-ink md:text-6xl"
          >
            Your business. One operating system.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted lg:mx-0"
          >
            Run sales, customers, stock, services, billing and property operations from one
            connected system — right from your phone.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <AnchorButton href={APP_URL} target="_blank" rel="noopener noreferrer" size="lg">
              Start your 7-day free trial <ArrowRight size={16} />
            </AnchorButton>
            <LinkButton to="/features" variant="outline" size="lg">
              Explore Jirani OS
            </LinkButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <PhoneFrame src={posShot.src} alt={posShot.alt} className="max-w-[240px] sm:max-w-[280px]" />

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute -left-2 top-10 hidden rounded-2xl border border-border bg-surface px-3 py-2 shadow-soft-lg sm:-left-8 sm:block"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">Today&apos;s sales</p>
            <p className="text-sm font-extrabold text-primary">KES 12,400</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="absolute -right-2 bottom-16 hidden rounded-2xl border border-border bg-surface px-3 py-2 shadow-soft-lg sm:-right-8 sm:block"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">Customer credit</p>
            <p className="text-sm font-extrabold text-ink">Tracked automatically</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
