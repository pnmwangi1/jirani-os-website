import { ArrowUpRight } from 'lucide-react';
import { showcaseShops } from '../../content/shopShowcase';
import { Reveal } from './Reveal';

/** Real shops, with the owner's permission. Renders nothing until content/shopShowcase.ts has entries. */
export function FeaturedShops() {
  if (showcaseShops.length === 0) return null;
  return (
    <div className="mt-4">
      <Reveal>
        <p className="mb-4 text-sm font-bold uppercase tracking-wide text-ink-muted">Shops on Jirani</p>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {showcaseShops.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.06}>
            {(() => {
              const body = (
                <>
                  <img src={`/shops/${s.slug}.webp`} alt={`${s.name} on Jirani`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <div className="p-4">
                    <p className="flex items-center justify-between font-display text-base font-bold text-ink">
                      {s.name} {s.href && <ArrowUpRight size={16} className="text-primary" />}
                    </p>
                    <p className="text-xs text-ink-muted">{s.label}</p>
                    <p className="mt-2 text-sm text-ink-muted">{s.blurb}</p>
                  </div>
                </>
              );
              const cls = 'group block overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-transform hover:-translate-y-1';
              return s.href
                ? <a href={s.href} data-cta={`featured-shop-${s.slug}`} className={cls}>{body}</a>
                : <div className={cls}>{body}</div>;
            })()}
          </Reveal>
        ))}
      </div>
    </div>
  );
}
