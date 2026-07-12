interface Stat {
  value: string;
  label: string;
}

// Item: the brief explicitly says to avoid fake customer counts —
// these are honest, defensible claims about what the system is built
// for, not invented usage numbers.
const stats: Stat[] = [
  { value: '5+', label: 'Core engines unified into one system' },
  { value: '1', label: 'Login for every part of the business' },
  { value: '24/7', label: 'Point of sale that keeps working offline' },
];

export function StatBlock() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="font-display text-4xl font-extrabold text-primary">{stat.value}</p>
          <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
