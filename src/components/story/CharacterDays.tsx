import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Figure, Motorbike, Bubble, Ground, Shop, whoColor, type Who } from './Stick';
import { Reveal } from '../marketing/Reveal';
import { SHOP_URL, APP_URL } from '../../lib/constants';

function WanjiruScene() {
  return (
    <svg viewBox="0 0 260 130" className="w-full" role="img" aria-label="Wanjiru browses shops near her on her phone">
      <Ground w={260} y={118} />
      <Figure who="wanjiru" x={60} y={118} pose="phone" />
      {[140, 180, 220].map((x) => (<g key={x} transform={`translate(${x} 118) scale(0.3)`}><Shop x={0} y={0} /></g>))}
      <Bubble k={0.6} x={170} y={70} text="3 shops reach me" />
    </svg>
  );
}
function BarakaScene() {
  return (
    <svg viewBox="0 0 260 130" className="w-full" role="img" aria-label="Baraka's scattered messages become one list of orders on his phone">
      <Ground w={260} y={118} />
      <Figure who="baraka" x={200} y={118} pose="wave" />
      <g opacity={0.55}>
        <rect x={14} y={22} width={74} height={20} rx={10} fill="rgb(var(--color-surface))" stroke="rgb(var(--color-border))" strokeWidth={1.5} />
        <rect x={30} y={50} width={74} height={20} rx={10} fill="rgb(var(--color-surface))" stroke="rgb(var(--color-border))" strokeWidth={1.5} />
        <rect x={14} y={78} width={74} height={20} rx={10} fill="rgb(var(--color-surface))" stroke="rgb(var(--color-border))" strokeWidth={1.5} />
      </g>
      <path d="M112 60 h30" stroke="rgb(var(--color-primary))" strokeWidth={2.5} strokeLinecap="round" />
      <path d="M136 54 l8 6 -8 6" fill="none" stroke="rgb(var(--color-primary))" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      <rect x={148} y={28} width={36} height={64} rx={6} fill="rgb(var(--color-ink))" />
      <rect x={152} y={36} width={28} height={8} rx={2} fill="rgb(var(--color-primary))" />
      <rect x={152} y={48} width={28} height={8} rx={2} fill="rgb(var(--color-primary-light))" />
      <rect x={152} y={60} width={28} height={8} rx={2} fill="rgb(var(--color-primary-light))" />
    </svg>
  );
}
function OtienoScene() {
  return (
    <svg viewBox="0 0 260 130" className="w-full" role="img" aria-label="Otieno rides and sees what he earns">
      <Ground w={260} y={118} />
      <Motorbike x={90} y={118}><Figure who="otieno" x={4} y={-12} pose="ride" /></Motorbike>
      <Bubble k={0.6} x={168} y={84} text="Earned KES 250" tone="good" />
    </svg>
  );
}

interface Panel { id: string; who: Who; role: string; problem: string; fix: string; points: string[]; scene: JSX.Element; cta: string; href: string; external?: boolean; to: string; toLabel: string }
const panels: Panel[] = [
  {
    id: 'shops', who: 'wanjiru', role: 'Shopper',
    problem: 'Wanjiru never knows which shop is open, close, or will actually deliver to her.',
    fix: 'She shares her location and sees only the shops that can reach her.',
    points: ['Browse like a real shop, with photos and deals', 'No account needed until checkout', 'See delivery or collect, and the price, before ordering'],
    scene: <WanjiruScene />, cta: 'Find shops near me', href: SHOP_URL, to: '/shops', toLabel: 'How shopping works',
  },
  {
    id: 'business', who: 'baraka', role: 'Business owner',
    problem: 'Baraka answers dozens of WhatsApp messages before lunch, and writes sales in a notebook.',
    fix: 'Orders arrive in one place, and the till, stock, staff and books are in the same app.',
    points: ['His own online shop link and QR poster', 'Stock updates itself when he sells', 'Add his own riders, or let customers bring theirs'],
    scene: <BarakaScene />, cta: 'Start your 7-day free trial', href: APP_URL, external: true, to: '/features', toLabel: 'See everything it does',
  },
  {
    id: 'riders', who: 'otieno', role: 'Rider',
    problem: 'Otieno gets jobs by phone call, haggles over the price, and is never sure he will be paid.',
    fix: 'He sets his own rate, sees the exact pay before accepting, and tracks his earnings.',
    points: ['A base fee plus a per-km rate, his own', 'Works with businesses and customers who already trust him', 'Go online or offline whenever he likes'],
    scene: <OtienoScene />, cta: 'Become a rider', href: APP_URL, external: true, to: '/riders', toLabel: 'How riders earn',
  },
];

export function CharacterDays({ only, heading = true }: { only?: Who[]; heading?: boolean }) {
  const list = only ? panels.filter((p) => only.includes(p.who)) : panels;
  return (
    <div>
      {heading && (<Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Meet the three people it works for.</h2>
        <p className="mt-3 text-base text-ink-muted">Each one gets what they need, and each one makes the others&apos; day easier.</p>
      </Reveal>)}
      <div className={`${heading ? 'mt-12' : ''} grid grid-cols-1 gap-6 ${list.length === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-2'}`}>
        {list.map((p, i) => (
          <Reveal key={p.who} delay={i * 0.08}>
            <div id={p.id} className="flex h-full scroll-mt-24 flex-col rounded-3xl border border-border bg-surface p-6 shadow-soft">
              {p.scene}
              <p className="mt-3 text-xs font-bold uppercase tracking-wider" style={{ color: whoColor[p.who] }}>{p.role}</p>
              <p className="mt-2 text-sm italic leading-relaxed text-ink-muted">{p.problem}</p>
              <p className="mt-3 font-display text-lg font-bold leading-snug text-ink">{p.fix}</p>
              <ul className="mt-3 flex-1 space-y-1.5 text-sm text-ink-muted">
                {p.points.map((x) => (<li key={x} className="flex gap-2"><span aria-hidden className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />{x}</li>))}
              </ul>
              <a href={p.href} {...(p.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} data-cta={`day-${p.who}`} className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-primary/90">
                {p.cta} <ArrowRight size={15} />
              </a>
              <Link to={p.to} className="mt-3 text-center text-sm font-semibold text-primary hover:underline">{p.toLabel}</Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
