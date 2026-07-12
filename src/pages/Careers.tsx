import { Clock } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { LinkButton } from '../components/ui/Button';
import { Reveal } from '../components/marketing/Reveal';

export default function Careers() {
  useSeo({
    title: 'Careers',
    description: 'Careers at Jirani OS are coming soon. Get in touch if you want to be part of building the platform early.',
    path: '/careers',
  });

  return (
    <Section>
      <div className="container">
        <Reveal className="mx-auto max-w-xl text-center">
          <Badge tone="warning">
            <Clock size={12} /> Coming soon
          </Badge>
          <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">We are not hiring publicly yet.</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Jirani OS is still early. When we open roles, this page will list them. If you want to
            be part of building the platform from here, reach out directly — we would rather hear
            from you now than have you find an empty page later.
          </p>
          <LinkButton to="/contact" size="lg" className="mt-8">
            Get in touch
          </LinkButton>
        </Reveal>
      </div>
    </Section>
  );
}
