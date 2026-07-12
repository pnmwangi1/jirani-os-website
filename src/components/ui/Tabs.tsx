import { useState, ReactNode } from 'react';

interface TabDef {
  id: string;
  label: string;
  content: ReactNode;
}

export function Tabs({ tabs, defaultId }: { tabs: TabDef[]; defaultId?: string }) {
  const [active, setActive] = useState(defaultId ?? tabs[0]?.id);

  return (
    <div>
      <div role="tablist" className="mb-8 flex flex-wrap gap-2 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
            className={`relative px-4 py-3 text-sm font-semibold transition-colors ${
              active === tab.id ? 'text-primary' : 'text-ink-muted hover:text-ink'
            }`}
          >
            {tab.label}
            {active === tab.id && <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary" />}
          </button>
        ))}
      </div>
      {tabs.find((t) => t.id === active)?.content}
    </div>
  );
}
