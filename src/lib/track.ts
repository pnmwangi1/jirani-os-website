// Tiny, dependency-free click tracking. Any element with data-cta="<name>" is reported when clicked, to whichever
// analytics tool the site loads (Google Analytics gtag, Plausible, or a dataLayer). With none loaded it does nothing,
// so it is safe to ship before an analytics tool is chosen.
type Win = Window & {
  gtag?: (...a: unknown[]) => void;
  plausible?: (name: string, o?: { props: Record<string, string> }) => void;
  dataLayer?: unknown[];
};

export function track(name: string, props: Record<string, string> = {}) {
  const w = window as Win;
  try {
    if (typeof w.gtag === 'function') w.gtag('event', name, props);
    if (typeof w.plausible === 'function') w.plausible(name, { props });
    if (Array.isArray(w.dataLayer)) w.dataLayer.push({ event: name, ...props });
  } catch {
    /* analytics must never break the page */
  }
}

/** One listener for the whole site: reports clicks on anything marked data-cta. */
export function installCtaTracking() {
  const onClick = (e: MouseEvent) => {
    const el = (e.target as HTMLElement | null)?.closest?.('[data-cta]') as HTMLElement | null;
    if (!el) return;
    track('cta_click', { cta: el.dataset.cta || '', page: location.pathname });
  };
  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
}
