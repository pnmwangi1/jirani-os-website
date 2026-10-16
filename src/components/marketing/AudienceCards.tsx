import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { audiences } from '../../content/audiences';
import { Reveal } from './Reveal';
import { audienceCta } from '../../lib/audienceCta';

// "Pick your start": the same three doors as the hero, always equal weight.
export function AudienceCards() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {audiences.map((a, i) => {
        const c = audienceCta(a);
        return (
          <Reveal key={a.key} delay={i * 0.07}>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6 shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-light text-primary">
                <a.icon size={22} />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{a.line}</p>
              <a
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                data-cta={`audience-${a.key}`}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary/90"
              >
                {a.cta} <ArrowRight size={15} />
              </a>
              <Link to={a.to} className="mt-3 text-center text-sm font-semibold text-primary hover:underline">
                {a.toLabel}
              </Link>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
