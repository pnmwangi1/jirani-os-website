import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { audiences } from '../../content/audiences';
import { audienceCta } from '../../lib/audienceCta';

/** The closing call to action: one button per audience, equal weight. */
export function FinalCTA({ title = 'Where would you like to start?' }: { title?: string }) {
  return (
    <Reveal>
      <div className="rounded-3xl bg-primary px-6 py-14 text-center md:px-16 md:py-20">
        <h2 className="mx-auto max-w-xl text-3xl font-extrabold text-white md:text-4xl">{title}</h2>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 md:grid-cols-3">
          {audiences.map((a) => {
            const c = audienceCta(a);
            return (
              <a
                key={a.key}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                data-cta={`final-${a.key}`}
                className="inline-flex flex-col items-center gap-1 rounded-2xl bg-white px-5 py-4 text-primary shadow-soft transition-colors hover:bg-white/90"
              >
                <a.icon size={20} />
                <span className="text-sm font-bold">{a.cta}</span>
                <ArrowRight size={14} className="opacity-60" />
              </a>
            );
          })}
        </div>
        <p className="mt-5 text-xs text-white/70">Business owners get a 7-day free trial, no card required.</p>
      </div>
    </Reveal>
  );
}
