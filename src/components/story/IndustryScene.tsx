import type { ReactNode } from 'react';
import { Figure, Bubble, Ground, Motorbike } from './Stick';
import { Tank, Cylinder, Crate, Hanger, Shelf, Phone, Till, Tag, Receipt, Barcode, Chart, T } from './Props';

// One illustrated scene per kind of business, so every industry card looks like it belongs to the same family.
export type IndustryKind = 'water' | 'minimart' | 'jersey' | 'restaurant' | 'lpg' | 'electronics' | 'hardware' | 'pharmacy' | 'printing' | 'salon' | 'laundry' | 'repair' | 'wholesale' | 'manufacturing' | 'online';

const FLOOR = 250;
const ink = 'rgb(var(--color-ink))';
const line = 'rgb(var(--color-border))';
const surf = 'rgb(var(--color-surface))';
const amber = 'rgb(var(--color-tenant))';
const pri = 'rgb(var(--color-primary))';
const info = 'rgb(var(--color-info))';
const bad = 'rgb(var(--color-danger))';

function Frame({ children, label }: { children: ReactNode; label: string }) {
  return (<svg viewBox="0 64 420 214" role="img" aria-label={label} className="h-full w-full"><Ground w={420} y={FLOOR} />{children}</svg>);
}

export function IndustryScene({ kind }: { kind: IndustryKind }) {
  switch (kind) {
    case 'water':
      return (<Frame label="A water refill shop: a tank, jerry cans and a litre-by-litre sale">
        <Tank x={80} y={FLOOR} level={0.6} /><Tank x={140} y={FLOOR} level={0.3} />
        <Figure who="baraka" x={240} y={FLOOR} pose="serve" scale={1.1} />
        <g transform={`translate(300 ${FLOOR})`}><path d="M-12 -34 h24 v34 h-24z M-6 -34 v-8 h12 v8" fill={info} opacity={0.85} stroke={ink} strokeWidth={1.4} /></g>
        <Figure who="wanjiru" x={360} y={FLOOR} flip pose="stand" scale={1.1} />
        <Bubble x={110} y={128} text="20 L · tank −20 L" show k={0.85} />
      </Frame>);
    case 'minimart':
      return (<Frame label="A mini mart: shelves, a till and a barcode scan">
        <Shelf x={20} y={FLOOR} level={0.85} /><Shelf x={150} y={FLOOR} level={0.5} w={80} />
        <Till x={300} y={FLOOR - 4} /><Barcode x={340} y={FLOOR - 4} />
        <Figure who="baraka" x={265} y={FLOOR} pose="wave" scale={1.1} />
      </Frame>);
    case 'jersey':
      return (<Frame label="A jersey shop: the same shirt in every size and team">
        <Hanger x={70} y={FLOOR - 60} color={info} /><Hanger x={140} y={FLOOR - 60} color={amber} /><Hanger x={210} y={FLOOR - 60} color={pri} />
        <line x1={30} y1={FLOOR - 118} x2={250} y2={FLOOR - 118} stroke={ink} strokeWidth={2} />
        <Tag x={86} y={FLOOR - 20} text="S M L" /><Tag x={156} y={FLOOR - 20} text="S M L" />
        <Figure who="baraka" x={330} y={FLOOR} pose="point" scale={1.1} />
      </Frame>);
    case 'restaurant':
      return (<Frame label="A restaurant: a table, a kitchen bell and a waiter being told the food is ready">
        <rect x={40} y={FLOOR - 52} width={110} height={8} rx={4} fill={surf} stroke={line} strokeWidth={2} />
        <line x1={95} y1={FLOOR - 44} x2={95} y2={FLOOR} stroke={line} strokeWidth={4} />
        <circle cx={78} cy={FLOOR - 62} r={11} fill="#fff" stroke={ink} strokeWidth={1.5} /><circle cx={116} cy={FLOOR - 62} r={11} fill="#fff" stroke={ink} strokeWidth={1.5} />
        <Figure who="staff" x={220} y={FLOOR} pose="serve" scale={1.1} />
        <path d="M262 -0 h0" /><g transform={`translate(300 ${FLOOR})`}><path d="M-18 -24 a18 18 0 0 1 36 0z" fill={amber} stroke={ink} strokeWidth={1.4} /><rect x={-22} y={-24} width={44} height={5} rx={2} fill={ink} /></g>
        <Figure who="baraka" x={360} y={FLOOR} flip pose="stand" scale={1.1} />
        <Bubble x={225} y={140} text="Table 4 ready" tone="good" show k={0.85} />
      </Frame>);
    case 'lpg':
      return (<Frame label="An LPG shop: full and empty cylinders tracked by brand and size">
        <Cylinder x={70} y={FLOOR} s={1.4} /><Cylinder x={120} y={FLOOR} s={1.4} /><Cylinder x={170} y={FLOOR} s={1.4} color={line} />
        <Figure who="baraka" x={250} y={FLOOR} pose="count" scale={1.1} />
        <Figure who="wanjiru" x={350} y={FLOOR} flip pose="carry" scale={1.1}><g transform="translate(-30 -34)"><Cylinder x={0} y={0} s={0.6} /></g></Figure>
        <Bubble x={120} y={138} text="Full 3 · Empty 5" show k={0.85} />
      </Frame>);
    case 'electronics':
      return (<Frame label="An electronics shop: each phone tracked by its own serial number">
        <Phone x={80} y={FLOOR} w={44} h={80} screen={info} /><Phone x={140} y={FLOOR} w={44} h={80} screen={pri} />
        <Tag x={64} y={FLOOR - 92} text="IMEI" /><Tag x={124} y={FLOOR - 92} text="IMEI" />
        <Figure who="baraka" x={240} y={FLOOR} pose="tablet" scale={1.1} />
        <Crate x={320} y={FLOOR} s={1.3} /><Receipt x={375} y={FLOOR} />
        <Bubble x={240} y={140} text="Trade-in accepted" show k={0.85} />
      </Frame>);
    case 'hardware':
      return (<Frame label="A hardware shop: paint, tools and a stocked shelf">
        <Shelf x={20} y={FLOOR} level={0.9} />
        <g transform={`translate(190 ${FLOOR})`}><rect x={-16} y={-34} width={32} height={34} rx={4} fill={amber} stroke={ink} strokeWidth={1.4} /><rect x={-16} y={-34} width={32} height={8} fill={pri} /><path d="M-10 -34 q10 -14 20 0" fill="none" stroke={ink} strokeWidth={2} /></g>
        <g transform={`translate(245 ${FLOOR})`}><rect x={-3} y={-48} width={6} height={48} fill={ink} /><rect x={-18} y={-58} width={36} height={14} rx={3} fill={bad} /></g>
        <Figure who="baraka" x={320} y={FLOOR} pose="wave" scale={1.1} />
      </Frame>);
    case 'pharmacy':
      return (<Frame label="A pharmacy counter with medicine bottles and a green cross">
        <g transform={`translate(70 ${FLOOR - 100})`}><rect x={-26} y={-26} width={52} height={52} rx={10} fill={pri} /><path d="M-6 -16 h12 v10 h10 v12 h-10 v10 h-12 v-10 h-10 v-12 h10z" fill="#fff" /></g>
        <rect x={150} y={FLOOR - 40} width={150} height={40} rx={6} fill={surf} stroke={line} strokeWidth={2} />
        {[170, 200, 230, 260].map((x, i) => <g key={x} transform={`translate(${x} ${FLOOR - 40})`}><rect x={-8} y={-26} width={16} height={26} rx={3} fill={i % 2 ? amber : info} opacity={0.9} stroke={ink} strokeWidth={1.2} /><rect x={-6} y={-32} width={12} height={7} rx={2} fill={ink} /></g>)}
        <Figure who="staff" x={120} y={FLOOR} pose="stand" scale={1.1} /><Figure who="wanjiru" x={340} y={FLOOR} flip pose="stand" scale={1.1} />
      </Frame>);
    case 'printing':
      return (<Frame label="A print shop: a printer, paper and jobs in progress">
        <rect x={60} y={FLOOR - 56} width={100} height={56} rx={8} fill={surf} stroke={line} strokeWidth={2} />
        <rect x={72} y={FLOOR - 74} width={76} height={20} rx={3} fill="#fff" stroke={line} strokeWidth={1.6} />
        <rect x={78} y={FLOOR - 24} width={64} height={30} rx={2} fill="#fff" stroke={line} strokeWidth={1.6} transform="translate(0 -4)" />
        <g transform={`translate(205 ${FLOOR})`}>{[0, 1, 2].map((i) => <rect key={i} x={-24 + i * 4} y={-30 - i * 6} width={48} height={5} rx={1} fill={i === 2 ? amber : '#fff'} stroke={line} strokeWidth={1.4} />)}</g>
        <Figure who="baraka" x={300} y={FLOOR} pose="tablet" scale={1.1} />
        <Bubble x={300} y={140} text="Job 12 · ready" tone="good" show k={0.85} />
      </Frame>);
    case 'salon':
      return (<Frame label="A salon: a chair, scissors and a booked appointment">
        <g transform={`translate(100 ${FLOOR})`}><rect x={-26} y={-30} width={52} height={16} rx={6} fill={pri} /><rect x={-22} y={-62} width={44} height={36} rx={8} fill={pri} opacity={0.85} /><rect x={-3} y={-14} width={6} height={14} fill={ink} /><rect x={-20} y={-3} width={40} height={4} rx={2} fill={ink} /></g>
        <Figure who="wanjiru" x={100} y={FLOOR - 28} pose="stand" scale={0.95} />
        <Figure who="staff" x={180} y={FLOOR} pose="serve" scale={1.1} />
        <g transform="translate(300 170)" stroke={ink} strokeWidth={4} fill="none" strokeLinecap="round"><path d="M-20 -26 l40 52" /><path d="M20 -26 l-40 52" /><circle cx={-22} cy={32} r={9} /><circle cx={22} cy={32} r={9} /></g>
        <Bubble x={190} y={140} text="2:30 pm · confirmed" tone="good" show k={0.8} />
      </Frame>);
    case 'laundry':
      return (<Frame label="A laundry: a washing machine, folded clothes and a pickup and delivery">
        <g transform={`translate(90 ${FLOOR})`}><rect x={-40} y={-84} width={80} height={84} rx={10} fill={surf} stroke={line} strokeWidth={2} /><circle cx={0} cy={-38} r={26} fill={info} opacity={0.35} stroke={ink} strokeWidth={2} /><circle cx={-24} cy={-70} r={4} fill={pri} /></g>
        <Hanger x={190} y={FLOOR - 50} color={amber} />
        <Motorbike x={300} y={FLOOR}><Figure who="otieno" x={4} y={-12} pose="ride" /></Motorbike>
        <Bubble x={190} y={128} text="Pickup booked" show k={0.85} />
      </Frame>);
    case 'repair':
      return (<Frame label="A repair shop: a phone on the bench with a job ticket">
        <rect x={50} y={FLOOR - 40} width={170} height={40} rx={6} fill={surf} stroke={line} strokeWidth={2} />
        <Phone x={110} y={FLOOR - 40} w={34} h={60} screen={bad} />
        <g transform={`translate(165 ${FLOOR - 40})`} stroke={ink} strokeWidth={3.4} strokeLinecap="round"><path d="M0 0 l26 -26" /><path d="M22 -30 l8 8" stroke={amber} /></g>
        <Tag x={240} y={FLOOR - 86} text="Job 7" />
        <Figure who="staff" x={290} y={FLOOR} pose="tablet" scale={1.1} />
        <Bubble x={290} y={140} text="Screen replaced" tone="good" show k={0.85} />
      </Frame>);
    case 'wholesale':
      return (<Frame label="A wholesale store: stacked crates, bulk prices">
        {[0, 1, 2].map((r) => [0, 1, 2, 3].slice(0, 3 - r + 1).map((c) => <Crate key={`${r}${c}`} x={60 + c * 42 + r * 21} y={FLOOR - r * 28} s={1.15} />))}
        <Figure who="baraka" x={290} y={FLOOR} pose="point" scale={1.1} />
        <Tag x={320} y={110} text="Bulk" />
        <Bubble x={290} y={140} text="Wholesale price" show k={0.85} />
      </Frame>);
    case 'manufacturing':
      return (<Frame label="A small maker: raw materials go in, finished jars come out">
        <Crate x={70} y={FLOOR} s={1.2} /><Crate x={120} y={FLOOR} s={1.2} color={pri} />
        <path d="M150 190 h40" stroke={ink} strokeWidth={3} strokeLinecap="round" /><path d="M184 182 l10 8 -10 8" fill="none" stroke={ink} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        {[230, 270, 310].map((x) => <g key={x} transform={`translate(${x} ${FLOOR})`}><rect x={-12} y={-34} width={24} height={34} rx={5} fill={amber} stroke={ink} strokeWidth={1.4} /><rect x={-14} y={-40} width={28} height={7} rx={2} fill={ink} /></g>)}
        <Figure who="staff" x={370} y={FLOOR} flip pose="tablet" scale={1.1} />
        <Bubble x={270} y={128} text="Batch made · stock used" show k={0.8} />
      </Frame>);
    case 'online':
      return (<Frame label="An online shop: an order arrives and a rider takes it">
        <Phone x={90} y={FLOOR} w={50} h={96} ring screen={pri} />
        <Figure who="baraka" x={190} y={FLOOR} pose="wave" scale={1.1} />
        <Motorbike x={300} y={FLOOR}><Figure who="otieno" x={4} y={-12} pose="ride" /></Motorbike>
        <Bubble x={90} y={130} text="New order" show k={0.85} />
      </Frame>);
    default:
      return null;
  }
}
