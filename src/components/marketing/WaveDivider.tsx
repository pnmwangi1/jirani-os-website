interface DividerProps {
  flip?: boolean;
  className?: string;
}

/** A subtle curved divider between sections, used sparingly at
 * meaningful transitions (not every section boundary — that would
 * fight the brief's "avoid clutter" instruction). Colors follow
 * currentColor via the className passed in, so it adapts to whichever
 * section background it's transitioning into. */
export function WaveDivider({ flip = false, className = 'text-surface' }: DividerProps) {
  return (
    <div className={`pointer-events-none ${flip ? 'rotate-180' : ''}`} aria-hidden>
      <svg viewBox="0 0 1440 60" fill="none" className={`h-10 w-full md:h-14 ${className}`} preserveAspectRatio="none">
        <path
          d="M0 30 C 240 60, 480 0, 720 20 C 960 40, 1200 10, 1440 30 L1440 60 L0 60 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
