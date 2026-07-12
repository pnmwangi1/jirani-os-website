/** Soft, blurred brand-color shapes positioned behind content to break up
 * flat backgrounds — a restrained, common pattern on premium SaaS sites
 * (Stripe, Linear) rather than a literal photo in every section. Purely
 * decorative: aria-hidden, and positioned absolutely so it never affects
 * layout or content flow. */
export function BackgroundGlow({ variant = 'hero' }: { variant?: 'hero' | 'section' }) {
  if (variant === 'hero') {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-tenant/10 blur-3xl" />
        <div className="absolute left-1/3 top-64 h-72 w-72 rounded-full bg-manager/8 blur-3xl" />
      </div>
    );
  }
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/6 blur-3xl" />
    </div>
  );
}
