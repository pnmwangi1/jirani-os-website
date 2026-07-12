import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/marketing/Reveal';
import { blogPosts, blogCategories } from '../content/blog';

export default function Blog() {
  useSeo({
    title: 'Blog',
    description: 'Notes on building Jirani OS, running property and commerce operations, and what we are learning along the way.',
    path: '/blog',
  });

  const [category, setCategory] = useState<string | null>(null);
  const filtered = category ? blogPosts.filter((p) => p.category === category) : blogPosts;

  return (
    <Section>
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge tone="primary">Blog</Badge>
          <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Notes from building Jirani OS.</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            We are just getting started publishing here. In the meantime, here is what is on deck.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setCategory(null)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              !category ? 'bg-primary text-white' : 'bg-surface text-ink-muted hover:text-ink'
            }`}
          >
            All
          </button>
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                category === cat ? 'bg-primary text-white' : 'bg-surface text-ink-muted hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {filtered.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Card hoverable padding="lg" className="flex h-full flex-col">
                <Badge tone="neutral" className="self-start">{post.category}</Badge>
                <h2 className="mt-4 font-display text-lg font-bold leading-snug text-ink">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-ink-muted">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-primary/60">
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
