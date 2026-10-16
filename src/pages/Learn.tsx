import { Link, useParams } from 'react-router-dom';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Reveal } from '../components/marketing/Reveal';
import { CTASection } from '../components/marketing/CTASection';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { GroupScene } from '../components/story/GroupScene';
import { guides } from '../content/learn';
import NotFound from './NotFound';
import { ArrowRight, Lightbulb } from 'lucide-react';

function Index() {
  useSeo({ title: 'Learn', description: 'Short step-by-step guides for running your business on Jirani OS: your first day, making a sale, stock counts, credit, suppliers, staff, your online shop and delivery.', path: '/learn' });
  return (
    <>
      <Section className="relative overflow-hidden pb-10">
        <BackgroundGlow variant="hero" />
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="primary">Learn</Badge>
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Learn Jirani OS in minutes.</h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">Short guides, each one a few steps. Read one over a cup of tea and use it at the till the same day.</p>
          </Reveal>
        </div>
      </Section>
      <Section className="pt-0">
        <div className="container grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g, i) => (
            <Reveal key={g.slug} delay={(i % 3) * 0.05}>
              <Link to={`/learn/${g.slug}`} className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                <div className="bg-primary-light/30 p-2"><GroupScene kind={g.kind} after /></div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold text-ink-muted">{g.minutes} min read &middot; {g.steps.length} steps</p>
                  <h2 className="mt-1 text-lg font-bold text-ink">{g.title}</h2>
                  <p className="mt-1 text-sm text-ink-muted">{g.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read the guide <ArrowRight size={14} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

function GuidePage({ slug }: { slug: string }) {
  const g = guides.find((x) => x.slug === slug);
  useSeo({ title: g ? g.title : 'Learn', description: g ? g.summary : 'Jirani OS guides', path: `/learn/${slug}` });
  if (!g) return <NotFound />;
  const next = guides[(guides.indexOf(g) + 1) % guides.length];
  return (
    <>
      <Section className="pb-8">
        <div className="container max-w-3xl">
          <Link to="/learn" className="text-sm font-semibold text-primary hover:underline">&larr; All guides</Link>
          <h1 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">{g.title}</h1>
          <p className="mt-3 text-base text-ink-muted">{g.summary}</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-primary-light/30 p-3"><GroupScene kind={g.kind} after /></div>
        </div>
      </Section>
      <Section className="pt-0">
        <div className="container max-w-3xl">
          <ol className="space-y-4">
            {g.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{i + 1}</span>
                <div><h2 className="text-base font-bold text-ink">{s.title}</h2><p className="mt-1 text-sm leading-relaxed text-ink-muted">{s.body}</p></div>
              </li>
            ))}
          </ol>
          {g.tip && (
            <p className="mt-6 flex items-start gap-3 rounded-2xl bg-primary-light/50 p-5 text-sm text-ink"><Lightbulb size={18} className="mt-0.5 flex-shrink-0 text-primary" /><span>{g.tip}</span></p>
          )}
          <Link to={`/learn/${next.slug}`} className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">Next: {next.title} <ArrowRight size={14} /></Link>
        </div>
      </Section>
      <Section className="border-t border-border bg-surface"><div className="container"><CTASection /></div></Section>
    </>
  );
}

export default function Learn() {
  const { slug } = useParams();
  return slug ? <GuidePage slug={slug} /> : <Index />;
}
