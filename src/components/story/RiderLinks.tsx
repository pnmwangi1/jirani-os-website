import { Figure, Ground, whoName, type Who } from './Stick';
import { Reveal } from '../marketing/Reveal';

interface Mode { title: string; adds: Who; addsLabel: string; pays: string; body: string }
const modes: Mode[] = [
  { title: 'The business’s own rider', adds: 'baraka', addsLabel: 'Baraka adds him', pays: 'The customer pays nothing for delivery', body: 'Baraka adds Otieno to his free-delivery list. Orders from his shop go to Otieno first, at no cost to the customer.' },
  { title: 'The business’s trusted rider', adds: 'baraka', addsLabel: 'Baraka vouches for him', pays: 'The customer pays Otieno’s own rate', body: 'Baraka adds riders he trusts. They set their own rate, and the customer sees it before ordering.' },
  { title: 'The customer’s own rider', adds: 'wanjiru', addsLabel: 'Wanjiru adds him', pays: 'The customer pays Otieno’s own rate', body: 'Wanjiru finds Otieno by his phone number and keeps him on her own list. He can carry her orders from any shop, even combine them into one trip.' },
];

function Link({ m }: { m: Mode }) {
  return (
    <svg viewBox="0 0 260 110" className="w-full" role="img" aria-label={`${m.addsLabel}; ${m.pays}`}>
      <Ground w={260} y={100} />
      <Figure who={m.adds} x={46} y={100} pose="wave" scale={0.9} />
      <Figure who="otieno" x={214} y={100} flip pose="stand" scale={0.9} />
      <path d="M72 62 H190" stroke="rgb(var(--color-primary))" strokeWidth={2.5} strokeDasharray="3 7" strokeLinecap="round" />
      <path d="M184 56 l8 6 -8 6" fill="none" stroke="rgb(var(--color-primary))" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RiderLinks() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {modes.map((m, i) => (
        <Reveal key={m.title} delay={i * 0.08}>
          <div className="flex h-full flex-col rounded-3xl border border-border bg-bg p-5 shadow-soft">
            <Link m={m} />
            <p className="mt-2 font-display text-lg font-bold text-ink">{m.title}</p>
            <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-muted">{m.body}</p>
            <p className="mt-3 rounded-xl bg-primary-light px-3 py-2 text-xs font-semibold text-primary">{m.pays}</p>
            <p className="mt-2 text-xs text-ink-muted">{whoName[m.adds]} is the one who adds the rider.</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
