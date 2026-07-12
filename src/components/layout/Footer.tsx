import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { footerNav } from '../../content/nav';

const columns: { title: string; key: keyof typeof footerNav }[] = [
  { title: 'Product', key: 'product' },
  { title: 'Company', key: 'company' },
  { title: 'Resources', key: 'resources' },
  { title: 'Legal', key: 'legal' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link to="/" className="mb-4 inline-flex" aria-label="Jirani OS home">
              <img src="/jirani-logo.png" alt="Jirani OS" className="logo-shadow h-8 w-auto" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
              One operating system for property management, commerce and accounting — built for
              businesses that outgrew spreadsheets and disconnected apps.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Twitter, label: 'X (Twitter)' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.key}>
              <h3 className="mb-4 text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="space-y-3">
                {footerNav[col.key].map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-ink-muted transition-colors hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-ink-muted md:flex-row">
          <p>&copy; {new Date().getFullYear()} Jirani OS. All rights reserved.</p>
          <p>Built for businesses across Kenya and beyond.</p>
        </div>
      </div>
    </footer>
  );
}
