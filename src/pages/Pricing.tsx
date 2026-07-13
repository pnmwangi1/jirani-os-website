import { useState, FormEvent } from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/marketing/Reveal';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { DataIllustration } from '../components/marketing/illustrations';
import { Card } from '../components/ui/Card';

export default function Pricing() {
  useSeo({
    title: 'Pricing',
    description: 'Jirani OS pricing is coming soon. Leave your email to be the first to know when plans are published.',
    path: '/pricing',
  });

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Item: no real backend wired yet, per the brief — this is a static
    // marketing site. Swap for a real email-capture endpoint later;
    // the form and validation are already real and ready for it.
    setSubmitted(true);
  }

  return (
    <Section className="relative overflow-hidden">
      <BackgroundGlow variant="hero" />
      <div className="container">
        <Reveal className="mx-auto max-w-xl text-center">
          <DataIllustration className="mx-auto mb-2 h-32 w-44" />
          <Badge tone="warning">
            <Clock size={12} /> Coming soon
          </Badge>
          <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Pricing is on its way.</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            We are finalizing plans that make sense for a single shop and a multi-branch
            enterprise alike. Rather than publish something we would need to walk back, we would
            rather get it right — and tell you the moment it is ready.
          </p>

          <Card padding="lg" className="mt-10 text-left">
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-4 text-center">
                <CheckCircle2 size={32} className="text-success" />
                <p className="font-semibold text-ink">You are on the list.</p>
                <p className="text-sm text-ink-muted">We will email you the moment pricing goes live.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <div className="flex-1">
                  <Input
                    id="pricing-email"
                    label="Email address"
                    type="email"
                    required
                    placeholder="you@business.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button type="submit" size="md">
                  Notify me
                </Button>
              </form>
            )}
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
