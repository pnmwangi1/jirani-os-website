import { Figure, Bubble, Ground } from './Stick';
import { Reveal } from '../marketing/Reveal';

function Block({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 118)`}>
      <rect x={0} y={-84} width={84} height={84} rx={3} fill="rgb(var(--color-surface))" stroke="rgb(var(--color-border))" strokeWidth={2} />
      {[0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={10 + c * 24} y={-74 + r * 22} width={14} height={14} rx={2} fill="rgb(var(--color-primary-light))" />))}
    </g>
  );
}
function Car({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 118)`}>
      <rect x={0} y={-22} width={52} height={14} rx={5} fill="rgb(var(--color-danger))" />
      <rect x={10} y={-34} width={30} height={14} rx={5} fill="rgb(var(--color-danger))" />
      <circle cx={12} cy={-7} r={6} fill="rgb(var(--color-ink))" /><circle cx={40} cy={-7} r={6} fill="rgb(var(--color-ink))" />
    </g>
  );
}

const frames = [
  {
    title: 'A car blocks the gate',
    body: 'Mama Njeri types the plate. The owner gets a prompt and replies "I am moving it". If nobody answers, it goes to security.',
    scene: (
      <svg viewBox="0 0 260 130" className="w-full" role="img" aria-label="A parked car blocks the way and its owner gets a prompt">
        <Ground w={260} y={118} /><Block x={8} /><Car x={110} />
        <Figure who="njeri" x={196} y={118} flip pose="phone" />
        <Bubble k={0.58} x={168} y={50} text="Please move your car" />
      </svg>
    ),
  },
  {
    title: 'A guest is expected',
    body: 'Residents invite guests by name and time. Security sees who is coming and who is leaving, before they reach the gate.',
    scene: (
      <svg viewBox="0 0 260 130" className="w-full" role="img" aria-label="Security sees an approved gate pass for an expected guest">
        <Ground w={260} y={118} /><Block x={8} />
        <Figure who="wanjiru" x={150} y={118} pose="wave" /><Figure who="baraka" x={214} y={118} flip pose="stand" />
        <Bubble k={0.58} x={178} y={50} text="Gate pass approved" tone="good" />
      </svg>
    ),
  },
  {
    title: 'Water is off tomorrow',
    body: 'One notice reaches every resident, and Mama Njeri sees how many have read it.',
    scene: (
      <svg viewBox="0 0 260 130" className="w-full" role="img" aria-label="A single notice reaches every resident">
        <Ground w={260} y={118} /><Block x={8} />
        <Figure who="njeri" x={150} y={118} pose="cheer" scale={0.95} />
        <Bubble k={0.58} x={160} y={38} text="Read by 38 of 44" tone="good" />
      </svg>
    ),
  },
];

export function PropertyStory() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {frames.map((f, i) => (
        <Reveal key={f.title} delay={i * 0.08}>
          <div className="h-full rounded-3xl border border-border bg-surface p-5 shadow-soft">
            {f.scene}
            <p className="mt-3 font-display text-lg font-bold text-ink">{f.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">{f.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
