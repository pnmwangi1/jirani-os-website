// Item (login/website integration, explicit request): the real Jirani OS
// product — where "Log in" and "Get started" actually take someone — is a
// separate deployment (a different repo, different build, different host)
// from this marketing site. It already has real phone+password auth
// (LoginPage.jsx/SignupPage.jsx on desktop web, LoginScreen/SignupScreen on
// native) and a working switch-to-signup link inside the login screen
// itself, so linking out to it — rather than duplicating a login form
// here — is the integration point, not a new auth system.
//
// Falls back to the current Vercel deployment URL so this works out of the
// box; override with VITE_APP_URL once a custom domain (e.g.
// app.jiranios.com) is assigned, per the domain-split plan.
export const APP_URL = import.meta.env.VITE_APP_URL || 'https://jirani-frontend.vercel.app';

// Item (Customer Referral & Community Growth Engine, spec §10/11 —
// "app not installed → referral web page → Google Play"): a genuinely
// new constant, since no Play Store link existed anywhere in this
// site before now (confirmed — every existing "Get started" CTA links
// to APP_URL, the web app itself, not a Play listing). Left as an
// explicit placeholder rather than a guessed URL, since a wrong Play
// Store link is worse than an honestly-empty one — set
// VITE_PLAY_STORE_URL once the app is actually published and its real
// listing URL is known.
export const PLAY_STORE_URL = import.meta.env.VITE_PLAY_STORE_URL || 'https://play.google.com/store/apps/details?id=com.jiranios.app';

// Item (Customer Referral & Community Growth Engine): the Jirani OS
// backend's own public API — same VITE_API_BASE_URL name the main app
// itself already uses (frontend/src/lib/apiClient.js), so both
// deployments can be pointed at the same backend with the exact same
// variable name in each one's own env config, rather than inventing a
// second name for the same thing. Fallback deliberately mirrors the
// main app's own honest localhost dev default rather than a guessed
// production subdomain — a wrong guessed URL would fail silently in
// production with no obvious error; VITE_API_BASE_URL must be set for
// this site's actual deployment.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/v1';
