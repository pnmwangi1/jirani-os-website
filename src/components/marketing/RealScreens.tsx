import { useState } from 'react';
import { screenGroups } from '../../content/realScreens';
import { PhoneFrame } from './PhoneFrame';

/** Real app screens in three groups (Run, Sell, Live). Tabs on every screen size; screens scroll sideways on a phone. */
export function RealScreens() {
  const [active, setActive] = useState<string>(screenGroups[0].id);
  const group = screenGroups.find((g) => g.id === active) ?? screenGroups[0];
  return (
    <div>
      <div role="tablist" aria-label="App areas" className="mx-auto flex max-w-md justify-center gap-2">
        {screenGroups.map((g) => (
          <button
            key={g.id} type="button" role="tab" id={`rs-tab-${g.id}`} aria-selected={g.id === active} aria-controls="rs-panel"
            data-cta={`screens-${g.id}`}
            onClick={() => setActive(g.id)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${g.id === active ? 'bg-action text-white' : 'border border-border bg-surface text-ink-muted hover:text-ink'}`}
          >
            {g.label}
          </button>
        ))}
      </div>
      <p className="mx-auto mt-4 max-w-md text-center text-sm text-ink-muted">{group.blurb}</p>
      <div id="rs-panel" role="tabpanel" aria-labelledby={`rs-tab-${group.id}`} className="mt-8 -mx-4 overflow-x-auto px-4 pb-2">
        <div className="mx-auto flex w-max snap-x snap-mandatory gap-5 md:w-auto md:justify-center">
          {group.screens.map((s) => (
            <div key={s.id} className="w-[200px] shrink-0 snap-center md:w-[220px]">
              <PhoneFrame src={`/app/${s.id}.webp`} alt={s.alt} caption={s.caption} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
