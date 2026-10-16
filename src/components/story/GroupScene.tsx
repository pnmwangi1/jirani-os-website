import type { ReactNode } from 'react';
import { Figure, Bubble, Shop, Ground, Motorbike } from './Stick';
import { Till, Phone, Papers, Shelf, Chart, Crate, InfoCard, Check, Cross, Receipt, Tag, Barcode, T } from './Props';

// One small scene per capability group, drawn twice: the messy "before" and the calm "with Jirani".
// Flipping `after` swaps the whole scene (no half-states), and the cards switch it with a toggle.
export type GroupKind = 'sell' | 'stock' | 'credit' | 'suppliers' | 'people' | 'money' | 'grow' | 'branches';

const W = 420, FLOOR = 262;
const Base = ({ children, label }: { children: ReactNode; label: string }) => (
  <svg viewBox="0 30 420 260" role="img" aria-label={label} className="w-full">
    <Ground w={W} y={FLOOR} />
    {children}
  </svg>
);

export function GroupScene({ kind, after }: { kind: GroupKind; after: boolean }) {
  switch (kind) {
    case 'sell':
      return after ? (
        <Base label="With Jirani: a sale is rung up on the till, with a receipt and a scanned barcode">
          <Till x={210} y={FLOOR - 4} open />
          <Barcode x={290} y={FLOOR - 4} />
          <Receipt x={110} y={FLOOR} />
          <Figure who="baraka" x={150} y={FLOOR} pose="tablet" scale={1.1} />
          <Figure who="wanjiru" x={340} y={FLOOR} flip pose="phone" scale={1.1} />
          <Check x={210} y={110} r={16} />
          <Bubble x={300} y={150} text="Paid · M-Pesa" show k={0.9} />
        </Base>
      ) : (
        <Base label="Before: sales written in a notebook, the till never balances">
          <Papers x={220} y={FLOOR - 2} n={6} />
          <Figure who="baraka" x={150} y={FLOOR} pose="stress" mood="sad" scale={1.1} />
          <Figure who="wanjiru" x={340} y={FLOOR} flip pose="stand" mood="flat" scale={1.1} />
          <Bubble x={150} y={130} text="Till is short again" show k={0.9} />
          <Cross x={220} y={120} r={15} />
        </Base>
      );
    case 'stock':
      return after ? (
        <Base label="With Jirani: stock levels are tracked and low stock raises an alert">
          <Shelf x={40} y={FLOOR} level={0.8} />
          <Figure who="baraka" x={230} y={FLOOR} pose="tablet" scale={1.1} />
          <Crate x={330} y={FLOOR} s={1.2} />
          <Crate x={365} y={FLOOR} s={1.2} />
          <Check x={160} y={80} r={15} />
          <Bubble x={300} y={140} text="Reorder at 5 left" show k={0.9} />
        </Base>
      ) : (
        <Base label="Before: nobody knows what is on the shelf">
          <Shelf x={40} y={FLOOR} level={0.12} />
          <Figure who="baraka" x={230} y={FLOOR} pose="stress" mood="sad" scale={1.1} />
          <T x={330} y={150} size={44} fill="rgb(var(--color-danger))">?</T>
          <Bubble x={290} y={120} text="Do we still have it?" show k={0.9} />
        </Base>
      );
    case 'credit':
      return after ? (
        <Base label="With Jirani: each customer has an account showing what they owe">
          <Figure who="baraka" x={110} y={FLOOR} pose="point" scale={1.1} />
          <Figure who="wanjiru" x={360} y={FLOOR} flip pose="stand" scale={1.1} />
          <InfoCard x={150} y={70} w={170} title="Kamau's account" value="Owes KES 2,100" tone="bad" />
          <g transform="translate(150 132)">
            {[['0-30', 0.9], ['31-60', 0.5], ['61-90', 0.25], ['90+', 0.1]].map(([l, v], i) => (
              <g key={String(l)} transform={`translate(${i * 44} 0)`}>
                <rect width={34} height={60} rx={6} fill="rgb(var(--color-bg))" stroke="rgb(var(--color-border))" strokeWidth={1.6} />
                <rect y={60 - Number(v) * 56} x={3} width={28} height={Number(v) * 56 - 3 + 3} rx={4} fill={i < 2 ? 'rgb(var(--color-primary))' : 'rgb(var(--color-danger))'} opacity={0.85} />
                <T x={17} y={78} size={10}>{String(l)}</T>
              </g>
            ))}
          </g>
        </Base>
      ) : (
        <Base label="Before: nobody remembers who owes what">
          <Papers x={200} y={FLOOR - 2} n={5} />
          <Figure who="baraka" x={110} y={FLOOR} pose="stress" mood="sad" scale={1.1} />
          <Figure who="wanjiru" x={340} y={FLOOR} flip pose="stand" mood="flat" scale={1.1} />
          <Bubble x={120} y={130} text="Who owes me?" show k={0.9} />
          <Bubble x={340} y={130} text="I paid last week!" show k={0.8} />
        </Base>
      );
    case 'suppliers':
      return after ? (
        <Base label="With Jirani: purchases recorded, supplier balances clear">
          <Figure who="baraka" x={130} y={FLOOR} pose="tablet" scale={1.1} />
          <Figure who="supplier" x={330} y={FLOOR} flip pose="carry" scale={1.1}><Crate x={-26} y={-40} s={0.8} /></Figure>
          <Receipt x={230} y={FLOOR} />
          <InfoCard x={140} y={70} w={170} title="You owe Mwangi Foods" value="KES 8,400" />
          <Check x={230} y={150} r={13} />
        </Base>
      ) : (
        <Base label="Before: supplier bills lost, stock arrives with no record">
          <Figure who="baraka" x={130} y={FLOOR} pose="stress" mood="sad" scale={1.1} />
          <Figure who="supplier" x={330} y={FLOOR} flip pose="point" mood="flat" scale={1.1} />
          <Papers x={230} y={FLOOR - 2} n={5} />
          <Bubble x={330} y={130} text="You still owe me" show k={0.85} />
        </Base>
      );
    case 'people':
      return after ? (
        <Base label="With Jirani: each person has a role and sees only what they need">
          <Figure who="staff" x={100} y={FLOOR} pose="serve" scale={1.05} />
          <Figure who="njeri" x={210} y={FLOOR} pose="tablet" scale={1.05} />
          <Figure who="otieno" x={320} y={FLOOR} pose="stand" scale={1.05} />
          <Tag x={78} y={120} text="Cashier" />
          <Tag x={188} y={120} text="Manager" />
          <Tag x={298} y={120} text="Driver" />
          <Check x={210} y={60} r={14} />
        </Base>
      ) : (
        <Base label="Before: nobody is sure who can do what or what they are owed">
          <Figure who="staff" x={100} y={FLOOR} pose="stress" mood="sad" scale={1.05} />
          <Figure who="njeri" x={210} y={FLOOR} pose="stress" mood="sad" scale={1.05} />
          <Figure who="otieno" x={320} y={FLOOR} pose="stress" mood="sad" scale={1.05} />
          <T x={100} y={120} size={30} fill="rgb(var(--color-danger))">?</T>
          <T x={210} y={120} size={30} fill="rgb(var(--color-danger))">?</T>
          <T x={320} y={120} size={30} fill="rgb(var(--color-danger))">?</T>
        </Base>
      );
    case 'money':
      return after ? (
        <Base label="With Jirani: profit and loss, cash and M-Pesa in one place">
          <Chart x={60} y={190} w={150} h={90} />
          <InfoCard x={250} y={50} w={150} title="Cash" value="KES 42,300" />
          <InfoCard x={250} y={110} w={150} title="M-Pesa" value="KES 118,750" />
          <Figure who="baraka" x={320} y={FLOOR} pose="cheer" scale={1.0} />
          <Check x={30} y={60} r={14} />
        </Base>
      ) : (
        <Base label="Before: nobody knows if the business is making money">
          <Papers x={120} y={FLOOR - 2} n={6} />
          <Figure who="baraka" x={270} y={FLOOR} pose="stress" mood="sad" scale={1.1} />
          <Bubble x={270} y={130} text="Did we make a profit?" show k={0.9} />
        </Base>
      );
    case 'grow':
      return after ? (
        <Base label="With Jirani: your own online shop gets orders and a rider delivers them">
          <Shop x={20} y={FLOOR} />
          <Figure who="baraka" x={190} y={FLOOR} pose="wave" scale={1.0} />
          <Motorbike x={270} y={FLOOR}><Figure who="otieno" x={4} y={-12} pose="ride" /></Motorbike>
          <Phone x={370} y={FLOOR - 70} ring screen="rgb(var(--color-primary))" />
          <Bubble x={338} y={110} text="New order" show k={0.9} />
        </Base>
      ) : (
        <Base label="Before: orders come by WhatsApp and phone call">
          <Figure who="baraka" x={200} y={FLOOR} pose="stress" mood="sad" scale={1.1} />
          <Phone x={110} y={FLOOR - 40} ring screen="rgb(var(--color-danger))" />
          <Phone x={310} y={FLOOR - 40} ring screen="rgb(var(--color-danger))" />
          <Bubble x={200} y={130} text="One at a time please!" show k={0.85} />
        </Base>
      );
    case 'branches':
      return after ? (
        <Base label="With Jirani: all branches in one app, compared side by side">
          <Shop x={10} y={FLOOR} />
          <Shop x={150} y={FLOOR} />
          <Chart x={300} y={FLOOR - 40} w={96} h={70} bars={[0.5, 0.8]} />
          <Figure who="baraka" x={285} y={FLOOR} pose="cheer" scale={0.95} />
          <Check x={210} y={40} r={13} />
        </Base>
      ) : (
        <Base label="Before: running between branches with no clear picture">
          <Shop x={10} y={FLOOR} />
          <Shop x={290} y={FLOOR} />
          <Figure who="baraka" x={200} y={FLOOR} pose="stress" mood="sad" scale={1.1} />
          <Bubble x={200} y={130} text="Which branch is losing?" show k={0.85} />
        </Base>
      );
  }
}
