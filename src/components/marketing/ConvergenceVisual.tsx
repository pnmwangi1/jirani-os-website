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
 * behavior combined with the global CSS override.
 *
 * FIX (confirmed real bug, explicit request): the scattered cards used
 * to fade to 15% opacity as their final resting state - intended to
 * read as "receding into irrelevance," but in practice indistinguishable
 * from a rendering failure once the animation actually finished. Now
 * settles at a clearly deliberate 45% with a slight scale-down, so it
 * unambiguously reads as "receded, on purpose" rather than "broken."
 * Also fixed: a fixed pixel height that didn't compress on narrow
 * viewports, producing a large empty gap on mobile - now scales with
 * a responsive height instead. */
export function ConvergenceVisual() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-xl sm:h-[360px] md:h-[440px]">
      {scattered.map(({ Icon, label, top, left, rotate }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 1, x: 0, y: -20, rotate: 0 }}
          animate={{ opacity: [0, 1, 1, 0.45], scale: [1, 1, 1, 0.92], x: 0, y: [0, 0, 0, 0], rotate }}
          transition={{ duration: 2.4, delay: i * 0.15, times: [0, 0.25, 0.6, 1], ease: 'easeInOut' }}
          style={{ top, left }}
          className="absolute flex items-center gap-2 rounded-xl border border-border bg-surface px-2.5 py-1.5 shadow-soft sm:px-3 sm:py-2"
        >
          <Icon size={14} className="text-ink-muted sm:h-4 sm:w-4" />
          <span className="whitespace-nowrap text-[11px] font-medium text-ink-muted sm:text-xs">{label}</span>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.5, ease: 'easeOut' }}
        className="absolute inset-x-4 top-1/2 -translate-y-1/2 rounded-2xl border border-border bg-surface p-4 shadow-soft-lg sm:inset-x-6 sm:p-5 md:inset-x-16"
      >
        <div className="mb-3 flex items-center gap-2 sm:mb-4">
          <div className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="text-xs font-semibold text-ink">Jirani OS</span>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {['Rent collected', 'Stock on hand', 'Net position'].map((label, i) => (
            <div key={label} className="rounded-xl bg-primary-light/60 p-2.5 sm:p-3">
              <div className="mb-2 h-2 w-10 rounded-full bg-primary/30" />
              <div className={`h-4 rounded-full bg-primary/50 ${i === 1 ? 'w-14' : 'w-9'}`} />
            </div>
          ))}
        </div>
        {/* FIX (confirmed real gap): this used to be a single flat,
            empty color rectangle - no actual content, in any theme.
            Now a real, simple bar-chart pattern, matching the visual
            language of the stat tiles above it instead of standing out
            as unfinished. */}
        <div className="mt-3 flex h-16 items-end gap-1.5 rounded-xl bg-primary-light/40 p-2.5 sm:h-[4.5rem]">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-primary/45" style={{ height: `${h}%` }} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
