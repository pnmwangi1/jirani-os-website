export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const blogCategories = ['Product', 'Operations', 'Industry Insights'];

// Item: structure only, per the brief — real posts and a content
// pipeline (MDX or a headless CMS) come later. The shape here
// (slug/title/excerpt/category/date) is deliberately what a real post
// list needs, so swapping the data source later doesn't require
// touching the Blog page component.
export const blogPosts: BlogPost[] = [
  {
    slug: 'why-we-built-one-system',
    title: 'Why we built one system instead of another app',
    excerpt:
      'Most growing businesses do not have a software problem — they have five software problems that do not talk to each other. Here is how we thought about solving that.',
    category: 'Product',
    date: 'Coming soon',
    readTime: '—',
  },
  {
    slug: 'rent-collection-without-spreadsheets',
    title: 'Rent collection without a spreadsheet',
    excerpt:
      'A look at what actually breaks down when a property portfolio grows past a handful of units, and what changes when billing, payments and reporting share one system.',
    category: 'Operations',
    date: 'Coming soon',
    readTime: '—',
  },
  {
    slug: 'metered-billing-done-right',
    title: 'What metered utility billing gets wrong, and how to fix it',
    excerpt:
      'Consumption-based billing has specific failure modes most general-purpose invoicing tools were never built to handle. Here is what we learned building for water providers first.',
    category: 'Industry Insights',
    date: 'Coming soon',
    readTime: '—',
  },
];
