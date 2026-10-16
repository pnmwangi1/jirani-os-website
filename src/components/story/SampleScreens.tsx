import type { ReactNode } from 'react';

// Hand-built sample screens that follow the app's real labels and layout. All names and figures are made up
// and each screen says so. They are drawn in HTML (not photographs) so they stay sharp and light.
function Screen({ title, caption, children }: { title: string; caption: string; children: ReactNode }) {
  return (
    <figure className="mx-auto w-full min-w-0 max-w-[250px]">
      <div className="rounded-[2rem] border-[6px] border-ink bg-ink p-1 shadow-soft-lg">
        <div className="h-[300px] overflow-hidden rounded-[1.6rem] bg-bg">
          <div className="bg-primary px-4 pb-3 pt-5 text-white">
            <p className="text-[11px] opacity-80">Sample data</p>
            <p className="text-base font-bold">{title}</p>
          </div>
          <div className="space-y-2 p-3 text-ink">{children}</div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs font-semibold text-ink-muted">{caption}</figcaption>
    </figure>
  );
}

const Row = ({ a, b, tone }: { a: string; b: string; tone?: 'bad' | 'good' | 'warn' }) => (
  <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-3 py-2 text-xs">
    <span className="min-w-0 pr-2 font-semibold">{a}</span>
    <span className={tone === 'bad' ? 'font-bold text-danger' : tone === 'good' ? 'font-bold text-success' : tone === 'warn' ? 'font-bold text-warning' : 'text-ink-muted'}>{b}</span>
  </div>
);

export function KitchenScreen() {
  return (
    <Screen title="Kitchen" caption="Kitchen tickets, in order">
      <Row a="Table 4 · 2 × Chapati, 1 × Stew" b="Queued" />
      <Row a="Table 2 · 1 × Pilau" b="Preparing" tone="warn" />
      <Row a="Table 7 · 3 × Tea" b="Ready" tone="good" />
      <p className="px-1 pt-2 text-[11px] text-ink-muted">The waiter who took the order is told when it is Ready.</p>
    </Screen>
  );
}
export function CreditScreen() {
  return (
    <Screen title="Customers" caption="Who owes you, and for how long">
      <Row a="Kamau Hardware" b="KES 2,100" tone="bad" />
      <Row a="0-30 days" b="KES 1,200" />
      <Row a="31-60 days" b="KES 900" />
      <Row a="61-90 days" b="KES 0" />
      <Row a="90+ days" b="KES 0" />
      <Row a="Auto-fill (oldest first)" b="Record payment" tone="good" />
    </Screen>
  );
}
export function StockScreen() {
  return (
    <Screen title="Products" caption="Stock with reorder alerts">
      <Row a="Maize flour 2 kg" b="4 left · reorder at 5" tone="bad" />
      <Row a="Cooking oil 1 L" b="18 left" />
      <Row a="Sugar 1 kg" b="26 left" />
      <Row a="Soda 500 ml" b="9 left" />
    </Screen>
  );
}
export function PeopleScreen() {
  return (
    <Screen title="People" caption="Pay terms, advances and leave">
      <Row a="Amina · Cashier" b="Pay sheet ready" tone="good" />
      <Row a="Salary advance" b="3 instalments" />
      <Row a="Leave" b="Approved" tone="good" />
      <Row a="Shifts this week" b="5" />
    </Screen>
  );
}
