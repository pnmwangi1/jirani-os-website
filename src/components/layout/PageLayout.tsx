import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

// Business pages use the app's purple; shoppers, properties and everything else stay green (see .theme-business in globals.css).
// The header and footer keep the brand green on every page. The home page sets its own sections.
const BUSINESS_PATHS = ['/features', '/industries', '/solutions', '/pricing', '/tables', '/games', '/learn'];

export function PageLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const business = BUSINESS_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-action focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1} className={`flex-1 focus:outline-none ${business ? 'theme-business' : ''}`}>{children}</main>
      <Footer />
    </div>
  );
}
