import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  /** Keep the page out of search results (404, invite and duel links). */
  noindex?: boolean;
}

const SITE_NAME = 'Jirani OS';
// Item (Phase 9, explicit request — real domain confirmed: the site is
// live on Cloudflare at www.jiranios.com): was hardcoded to the
// no-www placeholder used throughout early development. Reads
// VITE_SITE_URL first (declared in .env.example already) so this
// doesn't need another code change if the canonical www/non-www
// choice ever changes at the DNS level.
const BASE_URL = import.meta.env.VITE_SITE_URL || 'https://www.jiranios.com';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Call at the top of every page component. Updates the document title
 * and OG/Twitter meta tags for that specific route — a lightweight,
 * dependency-free alternative to a head-management library, sized
 * appropriately for a 13-page static site. */
function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/** Adds or replaces one JSON-LD block, keyed by id, and removes it when the page unmounts. */
export function useJsonLd(id: string, data: Record<string, unknown> | null) {
  const json = data ? JSON.stringify(data) : '';
  useEffect(() => {
    if (!json) return;
    // A pre-rendered page already carries this block: replace it, so the page never has two copies.
    document.head.querySelectorAll(`script[data-seo="${id}"]`).forEach((old) => old.remove());
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-seo', id);
    el.text = json;
    document.head.appendChild(el);
    return () => el.remove();
  }, [id, json]);
}

export function useSeo({ title, description, path = '', noindex = false }: SeoProps) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;
    document.title = fullTitle;
    setMeta('description', description);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', `${BASE_URL}${path}`, 'property');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setLink('canonical', `${BASE_URL}${path === '/' ? '/' : path}`);
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');
  }, [title, description, path, noindex]);

  // Breadcrumbs for every inner page: Home > Page.
  const crumbs =
    path && path !== '/' && !noindex
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: SITE_NAME, item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: title, item: `${BASE_URL}${path}` },
          ],
        }
      : null;
  useJsonLd('breadcrumbs', crumbs);
}

/** FAQPage structured data. Pass exactly the questions shown on the page, so the schema matches the visible text. */
export function faqSchema(items: { question: string; answer: string }[]): Record<string, unknown> | null {
  if (!items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };
}
