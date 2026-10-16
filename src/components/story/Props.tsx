import type { ReactNode } from 'react';

// Props for the stick-figure scenes. Every prop is positioned by its bottom-left or centre (noted) and drawn in the
// site colour tokens, so they follow light and dark mode. Anything that changes between scene steps (a stock level, a
// drawer opening, chart bars) uses a CSS transition, so stepping a scene forward animates instead of jumping.

const ink = 'rgb(var(--color-ink))';
const line = 'rgb(var(--color-border))';
const surf = 'rgb(var(--color-surface))';
const bg = 'rgb(var(--color-bg))';
const pri = 'rgb(var(--color-primary))';
const priL = 'rgb(var(--color-primary-light))';
const amber = 'rgb(var(--color-tenant))';
const good = 'rgb(var(--color-success))';
const bad = 'rgb(var(--color-danger))';
const info = 'rgb(var(--color-info))';
const tr = (ms = 700) => ({ transition: `all ${ms}ms cubic-bezier(.4,0,.2,1)` });

const T = ({ x, y, children, size = 13, weight = 700, fill = ink, anchor = 'middle' as const }: { x: number; y: number; children: ReactNode; size?: number; weight?: number; fill?: string; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={weight} fill={fill} fontFamily="inherit">{children}</text>
);
export { T };

/** Cash register. (x,y) = bottom-centre. `open` slides the drawer out. */
export function Till({ x, y, open = false, label }: { x: number; y: number; open?: boolean; label?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-34} y={-44} width={68} height={44} rx={6} fill={surf} stroke={line} strokeWidth={2} />
      <rect x={-26} y={-76} width={52} height={30} rx={5} fill={ink} />
      <rect x={-21} y={-71} width={42} height={12} rx={2} fill={pri} />
      {label && <T x={0} y={-62} size={9} fill="#fff">{label}</T>}
      <g style={{ ...tr(500), transform: `translateY(${open ? 10 : 0}px)` }}>
        <rect x={-28} y={-18} width={56} height={14} rx={3} fill={open ? priL : line} stroke={line} strokeWidth={1.5} />
        {open && <><rect x={-20} y={-14} width={14} height={6} rx={1} fill={good} opacity={0.8} /><rect x={-2} y={-14} width={14} height={6} rx={1} fill={amber} opacity={0.9} /></>}
      </g>
    </g>
  );
}

/** A phone. (x,y) = bottom-centre. `ring` adds ringing waves. */
export function Phone({ x, y, w = 30, h = 52, ring = false, screen = pri, children }: { x: number; y: number; w?: number; h?: number; ring?: boolean; screen?: string; children?: ReactNode }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {ring && <g stroke={amber} strokeWidth={2.4} fill="none" strokeLinecap="round"><path d={`M${w / 2 + 6} ${-h + 8} q8 8 0 16`} /><path d={`M${w / 2 + 12} ${-h + 4} q14 12 0 24`} /><path d={`M${-w / 2 - 6} ${-h + 8} q-8 8 0 16`} /><path d={`M${-w / 2 - 12} ${-h + 4} q-14 12 0 24`} /></g>}
      <rect x={-w / 2} y={-h} width={w} height={h} rx={6} fill={ink} />
      <rect x={-w / 2 + 3} y={-h + 7} width={w - 6} height={h - 14} rx={2} fill={screen} opacity={0.95} />
      {children}
    </g>
  );
}

/** Messy paper pile for the "before" state. */
export function Papers({ x, y, n = 5 }: { x: number; y: number; n?: number }) {
  const rots = [-14, 9, -4, 17, -22, 6];
  return (
    <g transform={`translate(${x} ${y})`}>
      {Array.from({ length: n }).map((_, i) => (
        <g key={i} transform={`translate(${(i % 3) * 16 - 16} ${-(Math.floor(i / 3) * 8)}) rotate(${rots[i % rots.length]})`}>
          <rect x={-14} y={-20} width={28} height={20} rx={2} fill={surf} stroke={line} strokeWidth={1.5} />
          <line x1={-9} y1={-14} x2={9} y2={-14} stroke={line} strokeWidth={1.6} />
          <line x1={-9} y1={-9} x2={4} y2={-9} stroke={line} strokeWidth={1.6} />
        </g>
      ))}
    </g>
  );
}

/** Shelf with boxes and a stock gauge. (x,y) = bottom-left. `level` 0..1 drives the gauge and how many boxes show. */
export function Shelf({ x, y, level = 1, w = 96 }: { x: number; y: number; level?: number; w?: number }) {
  const low = level < 0.25;
  const col = low ? bad : level < 0.5 ? amber : good;
  const boxes = [0, 1, 2, 3, 4, 5];
  const shown = Math.max(0, Math.round(level * boxes.length));
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={0} y={-82} width={w} height={82} rx={4} fill={surf} stroke={line} strokeWidth={2} />
      <line x1={0} y1={-41} x2={w} y2={-41} stroke={line} strokeWidth={2} />
      {boxes.map((i) => {
        const row = i < 3 ? 0 : 1; const col2 = i % 3;
        return <rect key={i} x={8 + col2 * 26} y={row ? -30 : -71} width={20} height={26} rx={3} fill={amber} stroke={ink} strokeWidth={1.2} style={{ ...tr(500), opacity: i < shown ? 1 : 0.07 }} />;
      })}
      <g transform={`translate(${w + 12} 0)`}>
        <rect x={0} y={-82} width={11} height={82} rx={5.5} fill={bg} stroke={line} strokeWidth={1.6} />
        <rect x={1.5} y={-80.5 + (1 - Math.max(0.04, level)) * 79} width={8} height={Math.max(0.04, level) * 79} rx={4} fill={col} style={tr(700)} />
      </g>
    </g>
  );
}

export function Chart({ x, y, bars = [0.35, 0.5, 0.42, 0.7, 0.62, 0.9], w = 120, h = 70 }: { x: number; y: number; bars?: number[]; w?: number; h?: number }) {
  const bw = w / bars.length - 6;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-8} y={-h - 10} width={w + 16} height={h + 18} rx={8} fill={surf} stroke={line} strokeWidth={2} />
      {bars.map((b, i) => <rect key={i} x={i * (bw + 6)} y={-b * h} width={bw} height={b * h} rx={3} fill={i === bars.length - 1 ? pri : priL} style={tr(800)} />)}
      <line x1={0} y1={0} x2={w} y2={0} stroke={line} strokeWidth={2} />
    </g>
  );
}

export function Crate({ x, y, s = 1, color = amber }: { x: number; y: number; s?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x={-18} y={-26} width={36} height={26} rx={3} fill={color} stroke={ink} strokeWidth={1.5} />
      <line x1={-18} y1={-13} x2={18} y2={-13} stroke={ink} strokeWidth={1.2} />
      <line x1={0} y1={-26} x2={0} y2={0} stroke={ink} strokeWidth={1.2} />
    </g>
  );
}

export function Cylinder({ x, y, color = pri, s = 1 }: { x: number; y: number; color?: string; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x={-13} y={-44} width={26} height={44} rx={9} fill={color} stroke={ink} strokeWidth={1.4} />
      <rect x={-6} y={-52} width={12} height={9} rx={2} fill={ink} />
      <line x1={-13} y1={-24} x2={13} y2={-24} stroke="#fff" strokeWidth={1.6} opacity={0.7} />
    </g>
  );
}

export function Tank({ x, y, level = 0.7 }: { x: number; y: number; level?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-26} y={-70} width={52} height={70} rx={10} fill={bg} stroke={line} strokeWidth={2} />
      <rect x={-23} y={-67 + (1 - level) * 64} width={46} height={level * 64} rx={8} fill={info} opacity={0.75} style={tr(700)} />
      <rect x={-6} y={-78} width={12} height={9} rx={2} fill={ink} />
    </g>
  );
}

export function Check({ x, y, r = 11, color = good }: { x: number; y: number; r?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill={color} />
      <path d={`M${-r * 0.45} ${r * 0.02} l${r * 0.3} ${r * 0.32} l${r * 0.6} ${-r * 0.65}`} fill="none" stroke="#fff" strokeWidth={r * 0.2} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}
export function Cross({ x, y, r = 11 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill={bad} />
      <path d={`M${-r * 0.4} ${-r * 0.4} l${r * 0.8} ${r * 0.8} M${r * 0.4} ${-r * 0.4} l${-r * 0.8} ${r * 0.8}`} stroke="#fff" strokeWidth={r * 0.2} strokeLinecap="round" />
    </g>
  );
}

/** A little card, e.g. a customer account ("Owes KES 2,100"). (x,y) = top-left. */
export function InfoCard({ x, y, w = 124, title, value, tone = 'ink' }: { x: number; y: number; w?: number; title: string; value: string; tone?: 'ink' | 'good' | 'bad' }) {
  const c = tone === 'good' ? good : tone === 'bad' ? bad : ink;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={46} rx={10} fill={surf} stroke={line} strokeWidth={2} />
      <T x={12} y={18} size={11} weight={600} fill="rgb(var(--color-ink-muted))" anchor="start">{title}</T>
      <T x={12} y={37} size={16} fill={c} anchor="start">{value}</T>
    </g>
  );
}

export function Calendar({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-26} y={-52} width={52} height={52} rx={7} fill={surf} stroke={line} strokeWidth={2} />
      <rect x={-26} y={-52} width={52} height={14} rx={7} fill={pri} />
      {[0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={-17 + c * 13} y={-32 + r * 11} width={8} height={7} rx={1.5} fill={r === 1 && c === 1 ? amber : line} />))}
    </g>
  );
}

export function Receipt({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-18 -50 h36 v50 l-6 -5 -6 5 -6 -5 -6 5 -6 -5 -6 5z" fill={surf} stroke={line} strokeWidth={2} />
      {[-40, -32, -24, -16].map((yy, i) => <line key={yy} x1={-11} y1={yy} x2={i === 3 ? 2 : 11} y2={yy} stroke={line} strokeWidth={2} />)}
    </g>
  );
}

export function Tag({ x, y, text }: { x: number; y: number; text: string }) {
  const w = text.length * 7 + 16;
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d={`M-4 -12 H${w - 4} q4 0 4 4 V8 q0 4 -4 4 H-4 l-11 -12 z`} fill={amber} stroke={ink} strokeWidth={1.4} />
      <circle cx={-6} cy={0} r={2.2} fill={bg} />
      <T x={w / 2 - 2} y={4} size={11} fill="#1C2B24">{text}</T>
    </g>
  );
}

export function Barcode({ x, y }: { x: number; y: number }) {
  const bars = [3, 1, 2, 1, 3, 2, 1, 2, 3, 1];
  let cx = 0;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-4} y={-30} width={46} height={32} rx={4} fill="#fff" stroke={line} strokeWidth={1.5} />
      {bars.map((w, i) => { const el = <rect key={i} x={cx} y={-26} width={w} height={22} fill={ink} />; cx += w + 1.6; return el; })}
    </g>
  );
}

export function Hanger({ x, y, color = info }: { x: number; y: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 -44 v-6 q0 -6 6 -6" fill="none" stroke={ink} strokeWidth={2} strokeLinecap="round" />
      <path d="M-26 -32 l12 -10 h28 l12 10 l-8 8 l-6 -4 v28 h-24 v-28 l-6 4z" fill={color} stroke={ink} strokeWidth={1.5} strokeLinejoin="round" />
    </g>
  );
}

/** Soft ground line with an optional fill so scenes sit on something. */
export function Floor({ w, y }: { w: number; y: number }) {
  return <line x1={4} y1={y} x2={w - 4} y2={y} stroke={line} strokeWidth={3} strokeLinecap="round" />;
}
