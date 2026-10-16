import { useEffect, useRef, useState } from 'react';
import { OrderScene } from './OrderScene';
import { orderSteps } from '../../content/orderStory';
import { whoColor, whoName } from './Stick';
import { Reveal } from '../marketing/Reveal';

// Desktop: the scene stays put while the steps scroll past it and the scene follows the step in view.
// Phone: each step carries its own small scene, so nothing is lost without the sticky layout.
export function FollowOrder() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i)); }),
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Follow one order.</h2>
        <p className="mt-3 text-base text-ink-muted">Three people, one app, no phone calls.</p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative hidden lg:block">
          <div className="sticky top-28 rounded-3xl border border-border bg-surface p-4 shadow-soft">
            <OrderScene step={active} className="w-full" />
            <p className="mt-2 text-center text-sm font-semibold text-ink">{orderSteps[active].title}</p>
          </div>
        </div>
        <ol className="space-y-6 lg:space-y-24 lg:py-16">
          {orderSteps.map((s, i) => (
            <li key={s.title} ref={(el) => { refs.current[i] = el; }} data-i={i} className={`rounded-3xl border bg-surface p-5 transition-colors ${i === active ? 'lg:border-primary' : 'border-border'}`}>
              <div className="lg:hidden"><OrderScene step={i} className="mb-3 w-full" /></div>
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: whoColor[s.who] }}>{i + 1} · {whoName[s.who]}</p>
              <h3 className="mt-1 font-display text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
