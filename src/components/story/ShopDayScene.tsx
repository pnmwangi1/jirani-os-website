import { Figure, Bubble, Ground } from './Stick';
import { Till, Shelf, Chart, Crate, InfoCard, Check, Receipt, T } from './Props';

// "A day with Baraka": one shop drawing, nine steps. Each step changes who is on stage and what the props show,
// so scrolling (or the hero loop) reads as one continuous day. Numbers are examples, and the scene says so.
export const SHOP_DAY_STEPS = 9;

const show = (on: boolean) => ({ opacity: on ? 1 : 0, transition: 'opacity .45s ease' });

export function ShopDayScene({ step, className = '' }: { step: number; className?: string }) {
  const s = Math.max(0, Math.min(SHOP_DAY_STEPS - 1, step));
  const shelfLevel = [0.9, 0.9, 0.55, 0.14, 0.14, 0.95, 0.95, 0.95, 0.95][s];
  const tillOpen = s === 0 || s === 7;
  return (
    <svg viewBox="0 70 420 222" role="img" aria-label="Baraka's shop through the day" className={className}>
      <Ground w={420} y={272} />
      <Shelf x={16} y={272} level={shelfLevel} />

      {/* counter */}
      <rect x={168} y={236} width={118} height={36} rx={6} fill="rgb(var(--color-surface))" stroke="rgb(var(--color-border))" strokeWidth={2} />
      <Till x={227} y={236} open={tillOpen} label={s === 1 ? 'KES 1,450' : undefined} />

      <Figure who="baraka" x={150} y={272} flip={false} pose={s === 7 ? 'count' : s === 4 ? 'point' : s === 3 ? 'stress' : s === 0 ? 'tablet' : 'wave'} mood={s === 3 ? 'wow' : 'happy'} scale={1.05} />

      <g style={show(s === 1 || s === 4)}><Figure who="wanjiru" x={318} y={272} flip pose={s === 1 ? 'phone' : 'stand'} scale={1.05} /></g>
      <g style={show(s === 5)}><Figure who="supplier" x={352} y={272} flip pose="carry" scale={1.05}><Crate x={-26} y={-40} s={0.8} /></Figure></g>
      <g style={show(s === 6)}><Figure who="staff" x={318} y={272} flip pose="serve" scale={1.05} /></g>

      <g style={show(s === 8)}><Chart x={262} y={186} w={124} h={78} bars={[0.3, 0.45, 0.4, 0.62, 0.58, 0.88]} /></g>

      <g style={show(s === 1)}><Receipt x={366} y={262} /></g>
      <g style={show(s === 4)}><InfoCard x={252} y={96} w={150} title="Kamau's account" value="Owes KES 2,100" tone="bad" /></g>
      <g style={show(s === 6)}><InfoCard x={252} y={96} w={150} title="Commission today" value="KES 320" tone="good" /></g>
      <g style={show(s === 7)}><Check x={300} y={206} r={14} /></g>

      <Bubble x={150} y={140} text="Float counted" show={s === 0} k={1} />
      <Bubble x={235} y={150} text="Sale · M-Pesa" show={s === 1} k={1} />
      <Bubble x={95} y={130} text="Stock updates itself" show={s === 2} k={1} />
      <Bubble x={95} y={130} text="Low stock alert" show={s === 3} k={1} />
      <Bubble x={150} y={128} text="Credit sale recorded" show={s === 4} k={0.9} />
      <Bubble x={300} y={170} text="Purchase recorded" show={s === 5} k={1} />
      <Bubble x={150} y={140} text="Till balanced" tone="good" show={s === 7} k={1} />
      <Bubble x={150} y={140} text="Profit & Loss" tone="good" show={s === 8} k={1} />
      <T x={412} y={288} size={10} weight={600} fill="rgb(var(--color-ink-muted))" anchor="end">Example figures</T>
    </svg>
  );
}
