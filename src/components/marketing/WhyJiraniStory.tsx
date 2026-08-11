import { Layers, Smartphone, TrendingUp, Puzzle } from 'lucide-react';
import { Reveal } from './Reveal';

const steps = [
  {
    n: '01',
    icon: Puzzle,
    title: 'Stop piecing your business together.',
    desc: 'Separate tills, spreadsheets, notebooks, customer records and manual reports create unnecessary work.',
  },
  {
    n: '02',
    icon: Layers,
    title: 'Bring everything together.',
    desc: 'Jirani OS connects sales, stock, customers, services, billing and business operations.',
  },
  {
    n: '03',
    icon: Smartphone,
    title: 'Run it from your phone.',
    desc: 'Especially for service providers, the phone becomes a serious business tool — not an accessory to one.',
  },
  {
    n: '04',
    icon: TrendingUp,
    title: 'Grow without changing systems.',
    desc: 'Start with one branch and expand as the business grows, on the same system throughout.',
  },
];

/** The "Why Jirani" story (Phase 1, explicit request): four ideas made
 * visual rather than argued in paragraphs — each gets an icon, a short
 * title and one sentence, not a wall of text. */
export function WhyJiraniStory() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <Reveal key={step.n} delay={i * 0.08}>
          <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-soft-lg hover:-translate-y-1">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl font-extrabold text-primary/30">{step.n}</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light">
                <step.icon size={16} className="text-primary" />
              </div>
            </div>
            <h3 className="mt-4 font-display text-base font-bold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
