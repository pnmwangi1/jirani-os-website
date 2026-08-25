import { API_BASE_URL } from './constants';

// Item (Customer Referral & Community Growth Engine — explicit
// request, the /r/:code landing page): the site's first-ever backend
// integration (confirmed via .env.example's own comment: "currently a
// static marketing site with no backend integrations"). Deliberately
// minimal — two calls, both used only by the referral landing page,
// both designed to fail silently rather than ever block the page from
// rendering: a referral link with a broken backend call is still a
// usable "download Jirani" page, just without the personalized "X
// invited you" line.

export interface ResolveReferralResult {
  referrerFirstName: string | null;
}

export async function resolveReferralCode(code: string): Promise<ResolveReferralResult | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/referrals/resolve/${encodeURIComponent(code)}`);
    if (!res.ok) return null;
    const body = await res.json();
    return body?.data ?? null;
  } catch {
    return null;
  }
}

export function trackReferralClick(code: string, source: string | null): void {
  // Item: fire-and-forget, exactly like every other click-tracking
  // call in this system (backend referrals.service.ts's own
  // trackClick) — never awaited, never allowed to affect the page.
  fetch(`${API_BASE_URL}/referrals/track-click`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code, source, medium: 'web', platform: 'web' }),
  }).catch(() => {});
}
