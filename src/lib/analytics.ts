// Privacy-friendly analytics (Plausible). Off until VITE_PLAUSIBLE_DOMAIN is set, so
// nothing loads and nothing is sent in development or before you create the account.
// No cookies. Respects Do Not Track.

type Plausible = (event: string, options?: { props?: Record<string, string> }) => void;

declare global {
  interface Window {
    plausible?: Plausible;
  }
}

export function initAnalytics() {
  const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
  if (!domain || typeof document === 'undefined') return;
  if (navigator.doNotTrack === '1') return;
  if (/^(localhost|127\.)/.test(location.hostname)) return;

  const s = document.createElement('script');
  s.defer = true;
  s.src = (import.meta.env.VITE_PLAUSIBLE_SRC as string | undefined) || 'https://plausible.io/js/script.js';
  s.setAttribute('data-domain', domain);
  document.head.appendChild(s);

  // Page views (including route changes) are tracked by Plausible itself. Clicks on data-cta
  // elements are sent by lib/track.ts as a `cta_click` event with props `cta` and `page`.
}
