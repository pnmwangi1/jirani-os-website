import { useState, useEffect } from 'react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { primaryNav } from '../../content/nav';
import { ThemeToggle } from './ThemeToggle';
import { LinkButton } from '../ui/Button';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Item: close the mobile menu on route change, otherwise navigating
  // via a link leaves the overlay open behind the new page.
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="container flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2" aria-label="Jirani OS home">
          <img src="/jirani-logo.png" alt="Jirani OS" className="logo-shadow h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <RouterNavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-ink-muted hover:text-ink'
                }`
              }
            >
              {item.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <LinkButton to="/contact" variant="ghost" size="sm">
            Contact sales
          </LinkButton>
          <LinkButton to="/contact" variant="primary" size="sm">
            Get started
          </LinkButton>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-bg px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {primaryNav.map((item) => (
              <RouterNavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-medium ${isActive ? 'bg-primary-light text-primary' : 'text-ink'}`
                }
              >
                {item.label}
              </RouterNavLink>
            ))}
          </nav>
          <div className="mt-6 flex items-center justify-between gap-3">
            <ThemeToggle />
            <LinkButton to="/contact" variant="primary" size="md" className="flex-1 justify-center">
              Get started
            </LinkButton>
          </div>
        </div>
      )}
    </header>
  );
}
