import { useEffect, useRef, useState } from 'react';
import { Check, X } from 'lucide-react';
import { GroupScene, type GroupKind } from './GroupScene';

export interface BeforeWithProps {
  kind: GroupKind;
  title: string;
  before: string;
  withJirani: string;
  bullets: string[];
  plus?: string[]; // bullets that need Jirani Plus
}

// The scene flips between "before" and "with Jirani" on its own until someone taps, and the two sentences are labelled
// with a cross and a tick, so it is always clear which one is the problem and which one is the fix.
export function BeforeWith({ kind, title, before, withJirani, bullets, plus = [] }: BeforeWithProps) {
  const [after, setAfter] = useState(true);
  const touched = useRef(false);
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    setMotion(true);
    setAfter(false);
    const id = window.setInterval(() => { if (!touched.current) setAfter((a) => !a); }, 3600);
    return () => window.clearInterval(id);
  }, []);

  const pick = (v: boolean) => { touched.current = true; setAfter(v); };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-soft">
      <div className="relative bg-bg px-3 pt-3">
        <div className="absolute left-4 top-4 z-10 inline-flex rounded-full border border-border bg-surface p-0.5 text-xs font-bold shadow-soft" role="tablist" aria-label={`${title}: before or with Jirani`}>
          <button role="tab" aria-selected={!after} onClick={() => pick(false)} className={`rounded-full px-3 py-1.5 transition-colors ${!after ? 'bg-danger text-white' : 'text-ink-muted'}`}>Before</button>
          <button role="tab" aria-selected={after} onClick={() => pick(true)} className={`rounded-full px-3 py-1.5 transition-colors ${after ? 'bg-primary text-white' : 'text-ink-muted'}`}>With Jirani</button>
        </div>
        <div className="pt-8">
          <div style={{ opacity: 1 }} aria-live={motion ? 'off' : 'polite'}><GroupScene kind={kind} after={after} /></div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
        <div className="mt-3 space-y-2">
          <p className={`flex gap-2.5 rounded-xl border-l-4 px-3 py-2 text-sm transition-opacity ${!after ? 'border-danger bg-danger-light text-ink' : 'border-transparent text-ink-muted opacity-60'}`}>
            <X size={16} className="mt-0.5 flex-shrink-0 text-danger" aria-hidden /><span><strong className="mr-1">Before:</strong>{before}</span>
          </p>
          <p className={`flex gap-2.5 rounded-xl border-l-4 px-3 py-2 text-sm transition-opacity ${after ? 'border-success bg-success-light text-ink' : 'border-transparent text-ink-muted opacity-60'}`}>
            <Check size={16} className="mt-0.5 flex-shrink-0 text-success" aria-hidden /><span><strong className="mr-1">With Jirani:</strong>{withJirani}</span>
          </p>
        </div>
        <ul className="mt-4 flex-1 space-y-1.5 text-sm text-ink-muted">
          {bullets.map((b) => (<li key={b} className="flex gap-2"><span aria-hidden className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />{b}</li>))}
          {plus.map((b) => (<li key={b} className="flex items-start gap-2"><span aria-hidden className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" /><span>{b} <span className="ml-1 rounded-full bg-primary-light px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">Plus</span></span></li>))}
        </ul>
      </div>
    </div>
  );
}
