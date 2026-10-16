import { Figure, Motorbike, Parcel, Bubble, Shop, Home, Ground } from './Stick';
import { orderSteps } from '../../content/orderStory';

// One drawing that tells the whole order story. `step` (0-5) decides who speaks and where Otieno is.
// Otieno slides along the road with a CSS transition, so stepping forward reads as one continuous ride.
const OTIENO_X = [214, 214, 214, 150, 232, 250];

export function OrderScene({ step, className = '' }: { step: number; className?: string }) {
  const s = Math.max(0, Math.min(orderSteps.length - 1, step));
  const ox = OTIENO_X[s];
  const hasParcel = s >= 3 && s <= 4;
  return (
    <svg viewBox="0 70 420 222" role="img" aria-label={orderSteps[s].alt} className={className}>
      <Ground w={420} y={262} />
      <g transform="translate(4 262) scale(0.8) translate(-4 -262)"><Shop x={4} y={262} /></g>
      <g transform="translate(330 262) scale(0.8) translate(-330 -262)"><Home x={330} y={262} /></g>
      <path d="M118 266 H336" stroke="rgb(var(--color-primary))" strokeWidth={3} strokeDasharray="2 10" strokeLinecap="round" opacity={s >= 3 ? 0.9 : 0.25} style={{ transition: 'opacity .4s' }} />

      <Figure who="baraka" x={116} y={262} pose={s === 1 || s === 3 ? 'wave' : 'stand'} scale={1.05} />
      <Figure who="wanjiru" x={318} y={262} flip pose={s === 0 ? 'phone' : s === 5 ? 'cheer' : 'stand'} scale={1.05} />

      <g style={{ transform: `translateX(${ox - 214}px)`, transition: 'transform 1.1s cubic-bezier(.4,0,.2,1)' }}>
        <Motorbike x={214} y={262}>
          <Figure who="otieno" x={4} y={-12} pose={s === 2 ? 'phone' : 'ride'} />
          {hasParcel && <Parcel x={-29} y={-48} s={1.2} />}
        </Motorbike>
      </g>

      <Bubble x={318} y={150} text="Order placed" show={s === 0} />
      <Bubble x={150} y={150} text="New order" show={s === 1} />
      <Bubble x={214} y={150} text="Deliver for KES 250?" show={s === 2} k={0.9} />
      <Bubble x={150} y={150} text="Order ready" show={s === 3} />
      <Bubble x={236} y={150} text="Collected" show={s === 4} />
      <Bubble x={326} y={152} text="Delivered" tone="good" show={s === 5} k={0.85} />
      <Bubble x={84} y={152} text="Sale recorded" tone="good" show={s === 5} k={0.8} />
      <Bubble x={206} y={112} text="Earned KES 250" tone="good" show={s === 5} k={0.85} />
    </svg>
  );
}
