import { Link } from 'react-router-dom';
import { Store, Building2, Wallet } from 'lucide-react';
import { Reveal } from '../marketing/Reveal';

// One account, three ways to use it. Every line here is something the app does today.
const pillars = [
  { icon: Store, title: 'Business', to: '/features', label: 'See business features',
    line: 'Till, stock, customer credit, suppliers, staff and payroll, accounts, and your own online shop with delivery. Pay monthly, or pay as you go.' },
  { icon: Building2, title: 'Property', to: '/properties', label: 'See virtual properties',
    line: 'From a customer account, look after a building: parking prompts, gate passes, notices, lost and found, meter readings and utility bills, and repairs.' },
  { icon: Wallet, title: 'Personal money', to: '/budget', label: 'See My budget',
    line: 'My budget shows what is safe to spend today, reads your M-Pesa statement, and keeps bills, goals and debts in one place.' },
];

export function Pillars() {
  return (
    <div>
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-primary">One platform</p>
        <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-4xl">Business, property and personal money. One account.</h2>
        <p className="mt-3 text-base text-ink-muted">Use one part or all three. Everything signs in with the same Jirani account.</p>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6 shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-light text-primary"><p.icon size={22} /></span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{p.line}</p>
              <Link to={p.to} className="mt-4 text-sm font-semibold text-primary hover:underline">{p.label}</Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
