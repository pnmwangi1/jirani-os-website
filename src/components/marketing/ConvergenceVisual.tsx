import { motion } from 'framer-motion';
import { FileSpreadsheet, MessageCircle, Receipt, Calculator } from 'lucide-react';

const scattered = [
  { Icon: FileSpreadsheet, label: 'Spreadsheets', top: '4%', left: '2%', rotate: -8 },
  { Icon: MessageCircle, label: 'WhatsApp orders', top: '2%', left: '68%', rotate: 6 },
  { Icon: Receipt, label: 'Paper ledger', top: '68%', left: '0%', rotate: 5 },
  { Icon: Calculator, label: 'Separate accounting', top: '70%', left: '72%', rotate: -5 },
];

/** The signature moment for this site: instead of a generic hero
 * illustration, the scattered tools a growing business actually juggles
 * visually converge into one Jirani OS interface — a direct, literal
 * expression of the product's core claim, not decoration. Animates once
 * on load; respects prefers-reduced-motion via Framer's default
 * behavior combined with the global CSS override. */
export function ConvergenceVisual() {
  return (
    <div className="relative mx-auto h-[380px] w-full max-w-xl md:h-[440px]">
      {scattered.map(({ Icon, label, top, left, rotate }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: 0, y: -20, rotate: 0 }}
          animate={{ opacity: [0, 1, 1, 0.15], x: 0, y: [0, 0, 0, 0], rotate }}
          transition={{ duration: 2.4, delay: i * 0.15, times: [0, 0.25, 0.6, 1], ease: 'easeInOut' }}
          style={{ top, left }}
          className="absolute flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 shadow-soft"
        >
          <Icon size={16} className="text-ink-muted" />
          <span className="whitespace-nowrap text-xs font-medium text-ink-muted">{label}</span>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.5, ease: 'easeOut' }}
        className="absolute inset-x-6 top-1/2 -translate-y-1/2 rounded-2xl border border-border bg-surface p-5 shadow-soft-lg md:inset-x-16"
      >
        <div className="mb-4 flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="text-xs font-semibold text-ink">Jirani OS</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {['Rent collected', 'Stock on hand', 'Net position'].map((label, i) => (
            <div key={label} className="rounded-xl bg-primary-light/60 p-3">
              <div className="mb-2 h-2 w-10 rounded-full bg-primary/30" />
              <div className={`h-4 rounded-full bg-primary/50 ${i === 1 ? 'w-14' : 'w-9'}`} />
            </div>
          ))}
        </div>
        <div className="mt-3 h-16 rounded-xl bg-primary-light/40" />
      </motion.div>
    </div>
  );
}
