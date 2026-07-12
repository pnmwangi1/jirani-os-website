import { ReactNode } from 'react';

interface MockupFrameProps {
  children?: ReactNode;
  label?: string;
  className?: string;
}

/** A soft, browser-chrome-free device frame for product screenshots.
 * Ships with a labeled placeholder pattern until real screenshots are
 * dropped in — the frame itself is what should survive that swap. */
export function MockupFrame({ children, label = 'Product screenshot', className = '' }: MockupFrameProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-soft-lg ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-danger/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/40" />
      </div>
      <div className="aspect-[16/10] w-full">
        {children ?? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-primary-light/40 text-primary/50">
            <div className="h-10 w-10 rounded-xl border-2 border-dashed border-primary/30" />
            <span className="text-xs font-medium">{label}</span>
          </div>
        )}
      </div>
    </div>
  );
}
