import { Figure, Motorbike, Parcel, Bubble, Shop, Home, Ground } from './Stick';
import { orderSteps } from '../../content/orderStory';

// One drawing that tells the whole story. `step` (0-5) decides who speaks and where Otieno is.
// Otieno slides along the road with a CSS transition, so stepping forward feels like one continuous ride.
const OTIENO_X = [330, 330, 330, 236, 372, 400];

export function OrderScene({ step, className = '' }: { step: number; className?: string }) {
  const s = Math.max(0, Math.min(orderSteps.length - 1, step));
  const ox = OTIENO_X[s];
  const hasParcel = s >= 3 && s <= 4;
  return (
    <svg viewBox="0 0 640 290" role="img" aria-label={orderSteps[s].alt} className={className}>
      <Ground w={640} y={252} />
      <Shop x={36} y={252} />
      <Home x={500} y={252} />

      {/* the road the order travels */}
      <path d="M170 256 H500" stroke="rgb(var(--color-primary))" strokeWidth={3} strokeDasharray="2 10" strokeLinecap="round" opacity={s >= 3 ? 0.9 : 0.25} style={{ transition: 'opacity .4s' }} />

      <Figure who="baraka" x={190} y={252} pose={s === 1 || s === 3 ? 'wave' : 'stand'} />
      <Figure who="wanjiru" x={478} y={252} flip pose={s === 0 ? 'phone' : s === 5 ? 'cheer' : 'stand'} />

      <g style={{ transform: `translateX(${ox - 330}px)`, transition: 'transform 1.1s cubic-bezier(.4,0,.2,1)' }}>
        <Motorbike x={330} y={252}>
          <Figure who="otieno" x={4} y={-12} pose={s === 2 ? 'phone' : 'ride'} />
          {hasParcel && <Parcel x={-29} y={-48} s={1.2} />}
        </Motorbike>
      </g>

      <Bubble k={1.15} x={478} y={120} text="Order placed" show={s === 0} />
      <Bubble k={1.15} x={190} y={150} text="New order · KES 1,450" show={s === 1} />
      <Bubble k={1.15} x={330} y={150} text="Deliver for KES 250?" show={s === 2} />
      <Bubble k={1.15} x={190} y={150} text="Order ready" show={s === 3} />
      <Bubble k={1.15} x={380} y={150} text="Collected, on my way" show={s === 4} />
      <Bubble k={1.15} x={510} y={118} text="Delivered" tone="good" show={s === 5} />
      <Bubble k={1.15} x={140} y={150} text="Sale recorded" tone="good" show={s === 5} />
      <Bubble k={1.15} x={345} y={150} text="Earned KES 250" tone="good" show={s === 5} />
    </svg>
  );
}
