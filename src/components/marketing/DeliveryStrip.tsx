import { Link } from 'react-router-dom';
import { Tag, Bike, MapPinned } from 'lucide-react';
import { Reveal } from './Reveal';

const steps = [
  { icon: Tag, title: 'Priced', line: 'The delivery fee is worked out from distance and your rules.' },
  { icon: Bike, title: 'Offered to riders', line: 'Your riders are offered the job in order, with no phone calls.' },
  { icon: MapPinned, title: 'Tracked', line: 'You and your customer can follow the order.' },
];

export function DeliveryStrip() {
  return (
    <div>
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Delivery that runs itself.</h2>
      </Reveal>
      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.07}>
            <div className="h-full rounded-2xl border border-border bg-bg p-5 text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-primary">
                <s.icon size={20} />
              </span>
              <p className="mt-3 font-display text-lg font-bold text-ink">{s.title}</p>
              <p className="mt-1 text-sm text-ink-muted">{s.line}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1} className="mt-6 text-center">
        <Link to="/delivery" className="text-sm font-semibold text-primary hover:underline">How delivery works</Link>
      </Reveal>
    </div>
  );
}
