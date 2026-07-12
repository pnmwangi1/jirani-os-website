import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_NAME = 'Jirani OS';
const BASE_URL = 'https://jiranios.com';

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
export function useSeo({ title, description, path = '' }: SeoProps) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;
    document.title = fullTitle;
    setMeta('description', description);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', `${BASE_URL}${path}`, 'property');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
  }, [title, description, path]);
}
