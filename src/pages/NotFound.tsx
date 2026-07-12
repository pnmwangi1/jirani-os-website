import { Home, ArrowLeft } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { LinkButton } from '../components/ui/Button';

export default function NotFound() {
  useSeo({ title: 'Page not found', description: 'This page does not exist.', path: '/404' });

  return (
    <Section className="flex min-h-[70vh] items-center">
      <div className="container text-center">
        <span className="font-display text-8xl font-extrabold text-primary/15">404</span>
        <h1 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">This page does not exist.</h1>
        <p className="mx-auto mt-3 max-w-md text-base text-ink-muted">
          The page you are looking for may have moved, or the link might be off. Let&rsquo;s get
          you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton to="/" size="md">
            <Home size={16} /> Back to home
          </LinkButton>
          <LinkButton to="/contact" variant="outline" size="md">
            <ArrowLeft size={16} /> Contact us
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
