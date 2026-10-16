import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Reveal } from './Reveal';
import { PropertyCardStack } from './PropertyCards';
import { virtualFeatures } from '../../content/virtualFeatures';
import { APP_URL, VIRTUAL_PRICE_KES } from '../../lib/constants';

export function PropertySection() {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <Reveal className="order-2 lg:order-1">
        <PropertyCardStack />
      </Reveal>
      <Reveal delay={0.1} className="order-1 lg:order-2">
        <Badge tone="primary">Virtual properties</Badge>
        <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">Look after your property from your phone.</h2>
        <p className="mt-3 text-base text-ink-muted">Everything a good caretaker, security desk and notice board do, in one app.</p>

        <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
          {virtualFeatures.map((f) => (
            <li key={f.key} className="flex items-center gap-2.5 text-sm font-medium text-ink">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                <f.icon size={15} />
              </span>
              {f.title}
            </li>
          ))}
        </ul>

        <p className="mt-6 rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-ink">
          <span className="font-extrabold text-primary">KES {VIRTUAL_PRICE_KES}</span> per property per month. Residents and staff join free.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-cta="property-section-setup" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary/90">
            Set up a property <ArrowRight size={15} />
          </a>
          <Link to="/properties" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface">
            See how it works
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
