import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Download, Package, Receipt, ShoppingBag, Smartphone } from 'lucide-react';
import QRCode from 'react-qr-code';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { AnchorButton } from '../components/ui/Button';
import { Reveal } from '../components/marketing/Reveal';
import { PLAY_STORE_URL, APP_URL } from '../lib/constants';
import { resolveReferralCode, trackReferralClick } from '../lib/referralApi';

// Item (Customer Referral & Community Growth Engine, spec §11 —
// "identify the referral source... explain Jirani quickly, show key
// benefits, make Android availability clear, provide Download CTA,
// preserve referral attribution, work beautifully on mobile, work if
// opened from WhatsApp/social/desktop, show QR on desktop, fall back
// gracefully if app not installed... should NOT become a generic
// website homepage, should be a focused referral conversion
// experience"): this is that dedicated page — not the site homepage
// reused with a query param, a real route with its own narrow job.
//
// Item (why reaching THIS page at all is normally the fallback case,
// not the common case): Android App Links (see AndroidManifest.xml's
// autoVerify intent-filter, added earlier in this build) is designed
// to intercept a jiranios.com/r/* tap and open the installed app
// directly, before it ever reaches a browser — so a real visitor
// landing on this React page typically means the app isn't installed
// yet, or App Links verification hasn't gone live yet (that requires
// /.well-known/assetlinks.json, added alongside this page — see its
// own file for what's still needed there). This page's job is
// specifically that fallback experience, exactly per spec §11's "the
// website should not become dependent on the Android app for
// rendering the landing page."
export default function Refer() {
  const { code } = useParams<{ code: string }>();
  const [searchParams] = useSearchParams();
  const [referrerFirstName, setReferrerFirstName] = useState<string | null>(null);
  const [resolved, setResolved] = useState(false);

  const normalizedCode = (code || '').toUpperCase();

  useSeo({
    title: 'You\u2019ve been invited to Jirani OS',
    description: 'Manage sales, stock, purchases, and more from your phone — join Jirani OS today.',
    path: `/r/${normalizedCode}`,
  });

  useEffect(() => {
    if (!normalizedCode) return;
    // Item: source captured from whatever campaign/share flow the
    // link came from (utm-style query param, spec §26), defaulting to
    // 'direct' when opened bare.
    trackReferralClick(normalizedCode, searchParams.get('source') || searchParams.get('utm_source') || 'direct');
    resolveReferralCode(normalizedCode).then((result) => {
      setReferrerFirstName(result?.referrerFirstName ?? null);
      setResolved(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalizedCode]);

  // Item: a QR of THIS page's own URL — spec §11 "show QR code on
  // desktop if useful," for a desktop visitor to scan and continue on
  // their phone.
  const pageUrl = typeof window !== 'undefined' ? window.location.href : `https://www.jiranios.com/r/${normalizedCode}`;

  return (
    <Section>
      <div className="container">
        <Reveal className="mx-auto max-w-xl text-center">
          <Badge tone="primary">
            <Smartphone size={12} /> Jirani OS
          </Badge>
          <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">
            {resolved && referrerFirstName ? `${referrerFirstName} invited you to discover Jirani OS.` : 'Discover Jirani OS.'}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Running a business? Manage sales, stock, purchases, and customers — all from your
            phone. Simple enough for a shop counter, powerful enough to run the whole business.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          <Card padding="md" className="text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
              <ShoppingBag size={20} />
            </div>
            <p className="mt-3 text-sm font-bold text-ink">Sales & POS</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-muted">Take orders and payments from your phone.</p>
          </Card>
          <Card padding="md" className="text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
              <Package size={20} />
            </div>
            <p className="mt-3 text-sm font-bold text-ink">Stock tracking</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-muted">Always know what you have and what's running low.</p>
          </Card>
          <Card padding="md" className="text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
              <Receipt size={20} />
            </div>
            <p className="mt-3 text-sm font-bold text-ink">Purchases & reports</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-muted">See what's actually making you money.</p>
          </Card>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-xl text-center">
          {/* Item (spec §11, "make the Android availability clear"). */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-muted">Available now on Android</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Item FIX (Google Play Install Referrer — explicit
                follow-up request, "app not installed → Play Store →
                install → app recovers referral"): the referrer param
                is what the native @capgo/capacitor-install-referrer
                plugin (added to frontend/package.json alongside this
                change) actually reads back after install — without
                this param, that plugin would have nothing to recover.
                Only appended when a real code exists. */}
            <AnchorButton
              href={normalizedCode ? `${PLAY_STORE_URL}${PLAY_STORE_URL.includes('?') ? '&' : '?'}referrer=${encodeURIComponent(normalizedCode)}` : PLAY_STORE_URL}
              target="_blank" rel="noopener noreferrer" variant="primary" size="lg"
            >
              <Download size={18} /> Download Jirani
            </AnchorButton>
            <AnchorButton href={APP_URL} target="_blank" rel="noopener noreferrer" variant="outline" size="lg">
              Already have it? Open Jirani
            </AnchorButton>
          </div>
          {/* Item (spec §100, manual code entry — "if someone says
              'use my Jirani code JRN-X7K4P'"): shown as plain text
              alongside the CTA, not hidden behind another tap — the
              signup screen's own optional referral field (see
              JiraniAndroid.jsx's SignupScreen) is where this actually
              gets used once the app is installed. */}
          {normalizedCode && (
            <p className="mt-4 text-xs text-ink-muted">
              Your referral code: <span className="font-mono font-bold text-ink">{normalizedCode}</span> — enter it during sign up if it isn't filled in automatically.
            </p>
          )}
        </Reveal>

        {/* Item (spec §11, "show QR code on desktop if useful"): a
            plain CSS breakpoint, not a device-detection library — the
            simplest reliable way to show this only where it's
            actually useful (a desktop visitor scanning with their
            phone) without adding a new dependency for it.
            Item FIX (explicit follow-up request — real client-side QR
            library, not the external image API): react-qr-code,
            generated entirely in the browser from this page's own URL. */}
        <Reveal delay={0.15} className="mx-auto mt-10 hidden max-w-xs text-center md:block">
          <div className="mx-auto inline-block rounded-xl border border-border bg-white p-3">
            <QRCode value={pageUrl} size={140} />
          </div>
          <p className="mt-2 text-xs text-ink-muted">Scan to continue on your phone</p>
        </Reveal>
      </div>
    </Section>
  );
}
