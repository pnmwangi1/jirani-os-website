import { ReactNode } from 'react';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';

export function LegalLayout({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <Section>
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <Badge tone="neutral">Legal</Badge>
          <h1 className="mt-4 text-4xl font-extrabold text-ink">{title}</h1>
          <p className="mt-2 text-sm text-ink-muted">Last updated: {updated}</p>
          <div className="prose-legal mt-10 max-w-none space-y-6 text-sm leading-relaxed text-ink-muted [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-semibold [&_h3]:text-ink [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_strong]:text-ink [&_a]:text-primary [&_a]:underline">
            {children}
          </div>
        </div>
      </div>
    </Section>
  );
}
