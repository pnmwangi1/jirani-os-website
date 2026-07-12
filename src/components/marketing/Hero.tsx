import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LinkButton } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ConvergenceVisual } from './ConvergenceVisual';

export function Hero() {
  return (
    <div className="container pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge tone="primary">One system, every branch</Badge>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-4xl font-extrabold leading-[1.1] text-ink md:text-6xl"
        >
          Run your whole business from one place.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted"
        >
          Property management, sales, billing, inventory and accounting — unified into one
          operating system, instead of five disconnected tools that do not talk to each other.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <LinkButton to="/contact" size="lg">
            Get started <ArrowRight size={16} />
          </LinkButton>
          <LinkButton to="/features" variant="outline" size="lg">
            See how it works
          </LinkButton>
        </motion.div>
      </div>

      <div className="mt-14 md:mt-20">
        <ConvergenceVisual />
      </div>
    </div>
  );
}
