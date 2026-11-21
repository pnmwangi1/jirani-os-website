import { lazy, Suspense, useEffect, useRef } from 'react';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { PageLayout } from './components/layout/PageLayout';
import { PageLoader } from './components/layout/PageLoader';
import { ErrorBoundary } from './components/ErrorBoundary';
import { installCtaTracking } from './lib/track';

// Item: every page is route-level code-split via React.lazy — the
// meaningful "code splitting" boundary for a 13-page marketing site,
// so a visitor to the homepage never downloads the Privacy Policy or
// FAQ page's code.
const Home = lazy(() => import('./pages/Home'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Features = lazy(() => import('./pages/Features'));
const Delivery = lazy(() => import('./pages/Delivery'));
const Shops = lazy(() => import('./pages/Shops'));
const Properties = lazy(() => import('./pages/Properties'));
const Riders = lazy(() => import('./pages/Riders'));
const Industries = lazy(() => import('./pages/Industries'));
const Pricing = lazy(() => import('./pages/Pricing'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const DeleteAccount = lazy(() => import('./pages/DeleteAccount'));
const Terms = lazy(() => import('./pages/Terms'));
const Security = lazy(() => import('./pages/Security'));
const WhatsNew = lazy(() => import('./pages/WhatsNew'));
const Games = lazy(() => import('./pages/Games'));
const Budget = lazy(() => import('./pages/Budget'));
const Tables = lazy(() => import('./pages/Tables'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Learn = lazy(() => import('./pages/Learn'));
const Refer = lazy(() => import('./pages/Refer'));
const Duel = lazy(() => import('./pages/Duel'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    // A link like /#properties scrolls to that section; any other navigation starts at the top.
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
    // After a page change (not the first load), move keyboard and screen-reader focus to the new page.
    if (!first.current) document.getElementById('main')?.focus({ preventScroll: true });
    first.current = false;
  }, [pathname, hash]);
  return null;
}

function CtaTracking() {
  useEffect(() => installCtaTracking(), []);
  return null;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user"><BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <CtaTracking />
        <PageLayout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/features" element={<Features />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/shops" element={<Shops />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/riders" element={<Riders />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/delete-account" element={<DeleteAccount />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/security" element={<Security />} />
              <Route path="/games" element={<Games />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/whats-new" element={<WhatsNew />} />
              {/* Blog and Careers are hidden until there is real content; old links land on What's new. */}
              <Route path="/blog" element={<Navigate to="/whats-new" replace />} />
              <Route path="/careers" element={<Navigate to="/contact" replace />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/learn/:slug" element={<Learn />} />
              {/* Item (Customer Referral & Community Growth Engine,
                  spec §11): the referral landing page. Placed as its
                  own top-level route, not nested under any existing
                  page, matching how every other route here works. */}
              <Route path="/r/:code" element={<Refer />} />
              {/* Duel invite links (https://jiranios.com/d/CODE): the page shown when the app is not installed. */}
              <Route path="/d/:code" element={<Duel />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageLayout>
      </ErrorBoundary>
    </BrowserRouter></MotionConfig>
  );
}
