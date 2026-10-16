import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Wand2 } from 'lucide-react';
import { IndustryScene } from './IndustryScene';
import { guidedIndustries } from '../../content/industryProfiles';
import { Reveal } from '../marketing/Reveal';

export function IndustryPicker() {
  const [i, setI] = useState(0);
  const cur = guidedIndustries[i];
  return (
    <div>
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Set up for your kind of business.</h2>
        <p className="mt-3 text-base text-ink-muted">Answer a few questions and Jirani creates your first products and settings. Pick yours.</p>
      </Reveal>
      <div className="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Kind of business">
        {guidedIndustries.map((g, k) => (
          <button key={g.id} role="tab" aria-selected={k === i} onClick={() => setI(k)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${k === i ? 'border-primary bg-primary text-white shadow-soft' : 'border-border bg-surface text-ink hover:border-primary hover:text-primary'}`}>
            {g.title}
          </button>
        ))}
      </div>
      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 items-center gap-6 rounded-3xl border border-border bg-surface p-4 shadow-soft md:grid-cols-2 md:p-8">
        <div className="rounded-2xl bg-bg p-3" key={cur.id}><IndustryScene kind={cur.kind} /></div>
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-xs font-bold text-primary"><Wand2 size={13} /> Guided setup</span>
          <h3 className="mt-3 font-display text-2xl font-extrabold text-ink">{cur.title}</h3>
          <p className="mt-1 text-base text-ink-muted">{cur.pitch}</p>
          <ul className="mt-4 space-y-2">
            {cur.bullets.map((b) => (<li key={b} className="flex gap-2.5 text-sm text-ink"><Check size={16} className="mt-0.5 flex-shrink-0 text-success" aria-hidden />{b}</li>))}
          </ul>
        </div>
      </div>
      <Reveal delay={0.1} className="mt-6 text-center">
        <Link to="/industries" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">See all kinds of business <ArrowRight size={15} /></Link>
      </Reveal>
    </div>
  );
}
