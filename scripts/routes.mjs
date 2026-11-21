// Single list of the public pages: used by the sitemap and the pre-render step.
// Update `lastmod` (YYYY-MM-DD) when a page's content really changes.
import { readFileSync } from 'node:fs';

export const SITE = 'https://www.jiranios.com';

export const pages = [
  ['/', '1.0', '2026-11-21'],
  ['/features', '0.9', '2026-11-21'],
  ['/solutions', '0.9', '2026-11-21'],
  ['/shops', '0.8', '2026-11-21'],
  ['/properties', '0.8', '2026-11-21'],
  ['/games', '0.8', '2026-11-21'],
  ['/riders', '0.8', '2026-11-21'],
  ['/industries', '0.8', '2026-11-21'],
  ['/delivery', '0.7', '2026-11-21'],
  ['/budget', '0.7', '2026-11-21'],
  ['/tables', '0.7', '2026-11-21'],
  ['/pricing', '0.7', '2026-11-21'],
  ['/learn', '0.7', '2026-11-21'],
  ['/contact', '0.7', '2026-11-21'],
  ['/about', '0.6', '2026-11-21'],
  ['/security', '0.6', '2026-11-21'],
  ['/faq', '0.6', '2026-11-21'],
  ['/whats-new', '0.5', '2026-11-21'],
  ['/delete-account', '0.4', '2026-11-21'],
  ['/privacy', '0.3', '2026-11-21'],
  ['/terms', '0.3', '2026-11-21'],
];

/** Guide pages come from src/content/learn.ts, so a new guide is picked up automatically. */
export function guideSlugs() {
  const src = readFileSync(new URL('../src/content/learn.ts', import.meta.url), 'utf8');
  return [...src.matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map((m) => m[1]);
}

export function allPages() {
  return [...pages, ...guideSlugs().map((s) => [`/learn/${s}`, '0.6', '2026-11-21'])];
}

export function sitemapXml() {
  const rows = allPages()
    .map(([p, pr, lm]) => `  <url><loc>${SITE}${p === '/' ? '/' : p}</loc><lastmod>${lm}</lastmod><priority>${pr}</priority></url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</urlset>\n`;
}
