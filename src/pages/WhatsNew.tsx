import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/marketing/Reveal';
import { releases } from '../content/whatsNew';

export default function WhatsNew() {
  useSeo({
    title: "What's new",
    description: 'Recent changes to Jirani OS: new features for businesses, shoppers and players, written plainly.',
    path: '/whats-new',
  });

  return (
    <Section>
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge tone="primary">What&rsquo;s new</Badge>
          <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">What we have shipped lately.</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">Real changes in the app, newest first. No promises, only what you can use.</p>
        </Reveal>
        <ol className="mx-auto mt-12 max-w-2xl space-y-6">
          {releases.map((r, i) => (
            <Reveal key={r.id} delay={Math.min(i, 4) * 0.05}>
              <li>
                <Card padding="lg">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="primary">{r.date}</Badge>
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{r.audience}</span>
                  </div>
                  <h2 className="mt-3 text-xl font-extrabold text-ink">{r.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{r.summary}</p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-muted">
                    {r.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </Card>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
