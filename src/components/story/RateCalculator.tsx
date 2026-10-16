import { useState } from 'react';
import { Reveal } from '../marketing/Reveal';

// Otieno's rate: base fee + per-km rate x distance, rounded. The same formula the app uses for every quote.
export function RateCalculator({ compact = false }: { compact?: boolean }) {
  const base = 100;
  const perKm = 30;
  const [km, setKm] = useState(5);
  const fee = Math.round(base + perKm * km);
  return (
    <Reveal>
      <div className="mx-auto max-w-xl rounded-3xl border border-border bg-surface p-6 shadow-soft md:p-8">
        <p className="text-xs font-bold uppercase tracking-wider text-primary">Otieno&apos;s rate</p>
        <div className="mt-3 grid grid-cols-2 gap-3 text-center">
          <div className="rounded-2xl bg-bg p-3"><p className="text-xs text-ink-muted">Base fee</p><p className="font-display text-xl font-extrabold text-ink">KES {base}</p></div>
          <div className="rounded-2xl bg-bg p-3"><p className="text-xs text-ink-muted">Per km</p><p className="font-display text-xl font-extrabold text-ink">KES {perKm}</p></div>
        </div>
        <label className="mt-5 block text-sm font-semibold text-ink" htmlFor="km">
          Trip distance: <span className="text-primary">{km} km</span>
        </label>
        <input id="km" type="range" min={1} max={15} value={km} onChange={(e) => setKm(Number(e.target.value))} className="mt-2 w-full accent-primary" />
        <p className="mt-4 text-center text-sm text-ink-muted">{base} + {perKm} × {km} km</p>
        <p className="text-center font-display text-4xl font-extrabold text-primary" aria-live="polite">KES {fee.toLocaleString()}</p>
        {!compact && (
          <p className="mt-3 text-center text-sm text-ink-muted">
            This is what the customer is quoted before they order, and what Otieno sees before he accepts. Every rider is offered the job at their own rate, and the price does not change after the order is placed. Example figures; every rider sets their own.
          </p>
        )}
      </div>
    </Reveal>
  );
}
