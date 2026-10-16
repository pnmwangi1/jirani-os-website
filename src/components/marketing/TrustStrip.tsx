import { Smartphone, Lock, History, Wallet } from 'lucide-react';
import { Reveal } from './Reveal';

// Plain facts, not numbers we cannot back up.
const facts = [
  { icon: Wallet, title: 'M-Pesa built in', line: 'Take payments and pay your subscription with M-Pesa.' },
  { icon: Smartphone, title: 'Phone first', line: 'Android app, plus a full version for your computer.' },
  { icon: Lock, title: 'Role-based access', line: 'Staff see only what their job needs.' },
  { icon: History, title: 'A record of who did what', line: 'Every sensitive action is logged.' },
];

export function TrustStrip() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {facts.map((f, i) => (
        <Reveal key={f.title} delay={i * 0.05}>
          <div className="text-center">
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-primary">
              <f.icon size={20} />
            </span>
            <p className="mt-3 text-sm font-bold text-ink">{f.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-muted">{f.line}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
