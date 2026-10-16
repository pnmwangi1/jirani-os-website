import { useEffect, useRef, useState } from 'react';
import { ShopDayScene } from './ShopDayScene';
import { shopDaySteps } from '../../content/shopDay';
import { Reveal } from '../marketing/Reveal';

// Desktop: the shop stays on screen while the nine steps scroll past, and the scene follows the step in view.
// Phone: each step carries its own copy of the scene.
export function DayWithBaraka() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i)); }),
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-primary">A day with Jirani OS</p>
        <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-4xl">Open. Sell. Restock. Close. Know your profit.</h2>
        <p className="mt-3 text-base text-ink-muted">Follow Baraka through one day in his shop.</p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative hidden lg:block">
          <div className="sticky top-28 rounded-3xl border border-border bg-bg p-4 shadow-soft">
            <ShopDayScene step={active} className="w-full" />
            <p className="mt-2 text-center text-sm font-semibold text-ink">{active + 1}. {shopDaySteps[active].title}</p>
          </div>
        </div>
        <ol className="space-y-5 lg:space-y-16 lg:py-10">
          {shopDaySteps.map((s, i) => (
            <li key={s.title} ref={(el) => { refs.current[i] = el; }} data-i={i} className={`rounded-3xl border bg-bg p-5 transition-colors ${i === active ? 'lg:border-primary' : 'border-border'}`}>
              <div className="rounded-2xl bg-surface p-2 lg:hidden"><ShopDayScene step={i} className="w-full" /></div>
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-primary lg:mt-0">Step {i + 1}</p>
              <h3 className="mt-1 font-display text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
