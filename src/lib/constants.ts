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
