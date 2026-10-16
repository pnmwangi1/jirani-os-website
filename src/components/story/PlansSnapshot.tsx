import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '../marketing/Reveal';
import { APP_URL } from '../../lib/constants';

const start = ['Everything above: sales, stock, customers, suppliers, people and reports', 'Your own online shop', 'Profit and Loss and a Balance Sheet', '1 branch and 3 staff seats'];
const plus = ['Everything in Jirani Start', 'Barcode scanning at the till', 'Full accounting: ledger, trial balance and cash flow', 'Credit limits for customers', 'Move stock between branches, and compare them', '3 branches and 9 staff seats'];

export function PlansSnapshot() {
  return (
    <div>
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Try all of it first. Pay when you are sure.</h2>
        <p className="mt-3 text-base text-ink-muted">Every business starts with a free 7-day trial with everything unlocked. No card needed.</p>
      </Reveal>
      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
        {[{ name: 'Jirani Start', price: 'KES 1,000', items: start, featured: false }, { name: 'Jirani Plus', price: 'KES 2,500', items: plus, featured: true }].map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div className={`h-full rounded-3xl border p-6 shadow-soft ${p.featured ? 'border-primary bg-surface' : 'border-border bg-surface'}`}>
              <p className="font-display text-lg font-bold text-ink">{p.name}</p>
              <p className="mt-1 font-display text-3xl font-extrabold text-primary">{p.price}<span className="text-sm font-semibold text-ink-muted"> a month</span></p>
              <ul className="mt-4 space-y-2">
                {p.items.map((t) => (<li key={t} className="flex gap-2.5 text-sm text-ink"><Check size={16} className="mt-0.5 flex-shrink-0 text-success" aria-hidden />{t}</li>))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-cta="plans-trial" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary/90">Start free trial <ArrowRight size={15} /></a>
        <Link to="/pricing" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-semibold text-ink hover:bg-surface">Compare plans in full</Link>
      </Reveal>
    </div>
  );
}
