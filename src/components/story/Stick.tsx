import type { ReactNode } from 'react';

// A tiny stick-figure kit. Everything is inline SVG, themed with the site's colour tokens, no images.
// Angles are in degrees from straight down, clockwise: 0 = hanging, 90 = pointing right, 180 = straight up.

export type Who = 'wanjiru' | 'baraka' | 'otieno' | 'njeri' | 'staff' | 'supplier';
export type Pose = 'stand' | 'phone' | 'wave' | 'cheer' | 'carry' | 'ride' | 'think' | 'count' | 'tablet' | 'serve' | 'point' | 'stress';
export type Mood = 'happy' | 'flat' | 'sad' | 'wow';

export const whoColor: Record<Who, string> = {
  wanjiru: 'rgb(var(--color-info))',
  baraka: 'rgb(var(--color-tenant))',
  otieno: 'rgb(var(--color-primary))',
  njeri: 'rgb(var(--color-manager))',
  staff: 'rgb(var(--color-accountant))',
  supplier: 'rgb(var(--color-contractor))',
};
export const whoName: Record<Who, string> = { wanjiru: 'Wanjiru', baraka: 'Baraka', otieno: 'Otieno', njeri: 'Mama Njeri', staff: 'Staff', supplier: 'Supplier' };

const poses: Record<Pose, [number, number, number, number]> = {
  stand: [-14, 14, -8, 8],
  phone: [-14, 150, -8, 8],
  wave: [-14, 155, -8, 8],
  cheer: [-155, 155, -10, 10],
  carry: [80, 70, -8, 8],
  ride: [78, 78, 62, 28],
  think: [-14, 135, -8, 8],
  count: [62, 74, -8, 8],
  tablet: [52, 64, -8, 8],
  serve: [-14, 86, -8, 8],
  point: [-14, 118, -8, 8],
  stress: [-150, 150, -12, 12],
};

const pt = (x: number, y: number, len: number, deg: number) => {
  const r = (deg * Math.PI) / 180;
  return [x + len * Math.sin(r), y + len * Math.cos(r)] as const;
};

interface FigureProps {
  who: Who;
  x: number;
  y: number; // feet line
  pose?: Pose;
  flip?: boolean;
  scale?: number;
  mood?: Mood;
  children?: ReactNode; // props drawn in figure space (0,0 = feet), e.g. a parcel
}

export function Figure({ who, x, y, pose = 'stand', flip = false, scale = 1, mood = 'happy', children }: FigureProps) {
  const c = whoColor[who];
  const [aL, aR, lL, lR] = poses[pose];
  const sh: [number, number] = [0, -52];
  const hip: [number, number] = [0, -30];
  const hL = pt(sh[0], sh[1], 22, aL);
  const hR = pt(sh[0], sh[1], 22, aR);
  const fL = pt(hip[0], hip[1], 30, lL);
  const fR = pt(hip[0], hip[1], 30, lR);
  const sw = { stroke: c, strokeWidth: 3.5, strokeLinecap: 'round' as const, fill: 'none' };
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`}>
      <line x1={sh[0]} y1={-57} x2={hip[0]} y2={hip[1]} {...sw} />
      <line x1={sh[0]} y1={sh[1]} x2={hL[0]} y2={hL[1]} {...sw} />
      <line x1={sh[0]} y1={sh[1]} x2={hR[0]} y2={hR[1]} {...sw} />
      <line x1={hip[0]} y1={hip[1]} x2={fL[0]} y2={fL[1]} {...sw} />
      <line x1={hip[0]} y1={hip[1]} x2={fR[0]} y2={fR[1]} {...sw} />
      <circle cx={0} cy={-67} r={9} fill="rgb(var(--color-bg))" stroke={c} strokeWidth={3.5} />
      <g fill="rgb(var(--color-ink))" stroke="none">
        <circle cx={-3.2} cy={-69} r={1.5} /><circle cx={3.2} cy={-69} r={1.5} />
      </g>
      {mood === 'happy' && <path d="M-3.6 -63.6 q3.6 3.6 7.2 0" fill="none" stroke="rgb(var(--color-ink))" strokeWidth={1.4} strokeLinecap="round" />}
      {mood === 'flat' && <line x1={-3} y1={-63} x2={3} y2={-63} stroke="rgb(var(--color-ink))" strokeWidth={1.4} strokeLinecap="round" />}
      {mood === 'sad' && <path d="M-3.6 -61.8 q3.6 -3.6 7.2 0" fill="none" stroke="rgb(var(--color-ink))" strokeWidth={1.4} strokeLinecap="round" />}
      {mood === 'wow' && <circle cx={0} cy={-62.8} r={2} fill="none" stroke="rgb(var(--color-ink))" strokeWidth={1.3} />}
      {pose === 'stress' && <g fill="rgb(var(--color-info))" opacity={0.85}><path d="M12 -78 q3 5 0 7 q-3 -2 0 -7z" /><path d="M-13 -74 q3 5 0 7 q-3 -2 0 -7z" /></g>}
      {who === 'wanjiru' && <circle cx={-2} cy={-79} r={4.5} fill={c} />}
      {who === 'baraka' && <rect x={-6} y={-49} width={12} height={15} rx={2} fill={c} opacity={0.85} />}
      {who === 'otieno' && <path d="M-10 -69 a10 10 0 0 1 20 0 z" fill={c} />}
      {who === 'njeri' && <path d="M-10 -71 q10 -12 20 0" stroke={c} strokeWidth={4} fill="none" strokeLinecap="round" />}
      {pose === 'phone' && <rect x={hR[0] - 3} y={hR[1] - 11} width={7} height={11} rx={1.5} fill="rgb(var(--color-ink))" />}
      {children}
    </g>
  );
}

export function Motorbike({ x, y, children }: { x: number; y: number; children?: ReactNode }) {
  const c = 'rgb(var(--color-ink))';
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle cx={-26} cy={-14} r={13} fill="none" stroke={c} strokeWidth={3.5} />
      <circle cx={26} cy={-14} r={13} fill="none" stroke={c} strokeWidth={3.5} />
      <path d="M-26 -14 L-6 -30 L14 -30 L26 -14 M14 -30 L18 -42 L28 -42" fill="none" stroke={c} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
      <rect x={-40} y={-48} width={22} height={18} rx={3} fill="rgb(var(--color-primary))" />
      {children}
    </g>
  );
}

export function Parcel({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x={-8} y={-14} width={16} height={14} rx={2} fill="rgb(var(--color-tenant))" stroke="rgb(var(--color-ink))" strokeWidth={1.5} />
      <line x1={-8} y1={-7} x2={8} y2={-7} stroke="rgb(var(--color-ink))" strokeWidth={1.2} />
    </g>
  );
}

/** A speech bubble that sizes itself to its text. (x, y) is the bubble's bottom tip. */
export function Bubble({ x, y, text, tone = 'ink', show = true, k = 1 }: { x: number; y: number; text: string; tone?: 'ink' | 'good'; show?: boolean; k?: number }) {
  const w = Math.max(80, text.length * 10.6 + 30);
  const fill = tone === 'good' ? 'rgb(var(--color-success-light))' : 'rgb(var(--color-surface))';
  const stroke = tone === 'good' ? 'rgb(var(--color-success))' : 'rgb(var(--color-border))';
  return (
    <g transform={`translate(${x} ${y}) scale(${k}) translate(${-x} ${-y})`} style={{ opacity: show ? 1 : 0, transition: 'opacity .35s ease' }}>
      <path d={`M${x - 8} ${y - 30} L${x} ${y} L${x + 8} ${y - 30}`} fill={fill} stroke={stroke} strokeWidth={1.5} />
      <rect x={x - w / 2} y={y - 70} width={w} height={46} rx={23} fill={fill} stroke={stroke} strokeWidth={1.5} />
      <rect x={x - 10} y={y - 31} width={20} height={8} fill={fill} />
      <text x={x} y={y - 41} textAnchor="middle" fontSize={19} fontWeight={700} fill="rgb(var(--color-ink))" fontFamily="inherit">{text}</text>
    </g>
  );
}

export function Shop({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={0} y={-92} width={130} height={92} rx={4} fill="rgb(var(--color-surface))" stroke="rgb(var(--color-border))" strokeWidth={2} />
      <path d="M-6 -92 h142 l-10 -22 h-122 z" fill="rgb(var(--color-tenant))" />
      <path d="M8 -92 v-22 M32 -92 v-22 M56 -92 v-22 M80 -92 v-22 M104 -92 v-22 M128 -92 v-22" stroke="rgb(var(--color-bg))" strokeWidth={4} opacity={0.5} />
      <rect x={16} y={-72} width={46} height={34} rx={3} fill="rgb(var(--color-bg))" stroke="rgb(var(--color-border))" strokeWidth={1.5} />
      <rect x={78} y={-64} width={34} height={64} rx={3} fill="rgb(var(--color-primary-light))" stroke="rgb(var(--color-border))" strokeWidth={1.5} />
    </g>
  );
}

export function Home({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={0} y={-70} width={110} height={70} rx={4} fill="rgb(var(--color-surface))" stroke="rgb(var(--color-border))" strokeWidth={2} />
      <path d="M-8 -70 L55 -118 L118 -70 z" fill="rgb(var(--color-info))" opacity={0.85} />
      <rect x={20} y={-52} width={26} height={22} rx={3} fill="rgb(var(--color-bg))" stroke="rgb(var(--color-border))" strokeWidth={1.5} />
      <rect x={68} y={-46} width={24} height={46} rx={3} fill="rgb(var(--color-primary-light))" stroke="rgb(var(--color-border))" strokeWidth={1.5} />
    </g>
  );
}

export function Ground({ w, y }: { w: number; y: number }) {
  return <line x1={0} y1={y} x2={w} y2={y} stroke="rgb(var(--color-border))" strokeWidth={3} strokeLinecap="round" />;
}
