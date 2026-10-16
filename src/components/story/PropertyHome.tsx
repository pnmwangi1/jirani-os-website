import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../marketing/Reveal';
import { PropertyStory } from './PropertyStory';
import { APP_URL, VIRTUAL_PRICE_KES } from '../../lib/constants';

export function PropertyHome() {
  return (
    <div id="properties" className="scroll-mt-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-primary">Virtual properties</p>
        <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-4xl">Mama Njeri looks after a building of 44 homes.</h2>
        <p className="mt-3 text-base text-ink-muted">From her phone, she handles the gate, the parking and the notices. Her residents never have to chase her.</p>
      </Reveal>
      <div className="mt-10"><PropertyStory /></div>
      <Reveal delay={0.1}>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="text-sm font-bold text-ink">Who sets it up</p>
            <p className="mt-1 text-sm text-ink-muted">A property is created from a Jirani <strong className="text-ink">customer account</strong>, from the virtual property tile on the dashboard. You add your people by phone number.</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="text-sm font-bold text-ink">Who joins</p>
            <p className="mt-1 text-sm text-ink-muted">Residents, caretakers and security accept the invite and join <strong className="text-ink">free</strong>. Only the property owner pays: KES {VIRTUAL_PRICE_KES} a month.</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/properties" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary/90">
            See everything it does <ArrowRight size={15} />
          </Link>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-cta="property-home-setup" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-semibold text-ink hover:bg-surface">
            Set up a property
          </a>
        </div>
      </Reveal>
    </div>
  );
}
