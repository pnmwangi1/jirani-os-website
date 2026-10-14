import { useEffect, useState } from 'react';
import { API_BASE_URL } from './constants';

// Is this visitor already signed in to Jirani OS? Asks the backend's read-only session-hint (no token is issued; only a
// first name comes back). A cached name makes the header correct instantly on later page views. Anything that goes wrong
// (no API configured, offline, blocked cookie) simply means "not signed in", i.e. the old behaviour.
export interface SiteSession { signedIn: boolean; firstName: string | null; checked: boolean }
const KEY = 'jirani_site_hint';

function cached(): { firstName: string | null } | null {
  try { const v = JSON.parse(localStorage.getItem(KEY) || 'null'); return v && typeof v === 'object' ? v : null; } catch { return null; }
}

export function useSession(): SiteSession {
  const c = cached();
  const [s, setS] = useState<SiteSession>({ signedIn: !!c, firstName: c?.firstName ?? null, checked: false });
  useEffect(() => {
    if (!API_BASE_URL || /localhost/.test(API_BASE_URL)) { setS(x => ({ ...x, checked: true })); return; }
    let live = true;
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 6000);
    fetch(`${API_BASE_URL.replace(/\/$/, '')}/auth/session-hint`, { credentials: 'include', signal: ctl.signal })
      .then(r => (r.ok ? r.json() : null))
      .then(j => {
        if (!live) return;
        const d = j?.data;
        if (d?.signedIn) {
          try { localStorage.setItem(KEY, JSON.stringify({ firstName: d.firstName || null })); } catch { /* storage blocked */ }
          setS({ signedIn: true, firstName: d.firstName || null, checked: true });
        } else {
          try { localStorage.removeItem(KEY); } catch { /* storage blocked */ }
          setS({ signedIn: false, firstName: null, checked: true });
        }
      })
      .catch(() => { if (live) setS(x => ({ ...x, checked: true })); })
      .finally(() => clearTimeout(timer));
    return () => { live = false; ctl.abort(); };
  }, []);
  return s;
}
