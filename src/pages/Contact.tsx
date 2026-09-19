import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Input, Textarea } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/marketing/Reveal';
import { BackgroundGlow } from '../components/marketing/BackgroundGlow';
import { CommunicationIllustration, MobileAppIllustration } from '../components/marketing/illustrations';

export default function Contact() {
  useSeo({
    title: 'Contact',
    description: 'Get in touch with the Jirani OS team — ask a question, request a demo, or tell us what your business is currently juggling.',
    path: '/contact',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // Item FIX (contact form previously delivered nothing — `handleSubmit`
  // only flipped local state and never sent the data anywhere): submits
  // directly to Web3Forms from the browser, no backend needed. The
  // access key is not a secret — Web3Forms' own integration pattern is
  // to embed it directly in client-side code (the browser has to send
  // it regardless), so it's hardcoded here rather than routed through
  // an env var and a deploy pipeline that has to inject it correctly.
  const WEB3FORMS_ACCESS_KEY = 'c726fe2a-fb32-4083-8fa0-828b77d4f2c9';

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New contact form message from ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          reply_to: form.email,
          message: form.message,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Something went wrong sending your message. Please try again.');
      }
    } catch {
      setError('Something went wrong sending your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Section className="relative overflow-hidden">
      <BackgroundGlow variant="hero" />
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <CommunicationIllustration className="mx-auto mb-2 h-32 w-44" />
          <Badge tone="primary">Contact</Badge>
          <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Let&rsquo;s talk about your business.</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Tell us what you are running today, and we will show you exactly how Jirani OS fits.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <Card padding="lg">
              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <CheckCircle2 size={36} className="text-success" />
                  <p className="font-display text-lg font-bold text-ink">Message sent.</p>
                  <p className="text-sm text-ink-muted">We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <Input
                    id="contact-name"
                    label="Full name"
                    required
                    placeholder="Jane Wanjiru"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <Input
                    id="contact-email"
                    label="Email address"
                    type="email"
                    required
                    placeholder="you@business.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <Textarea
                    id="contact-message"
                    label="How can we help?"
                    required
                    rows={5}
                    placeholder="Tell us a bit about your business and what you are currently using to run it."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  {error && (
                    <p className="text-sm font-medium text-danger" role="alert">{error}</p>
                  )}
                  <Button type="submit" size="lg" className="self-start" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send message'}
                  </Button>
                </form>
              )}
            </Card>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5 lg:col-span-2">
            <Card padding="lg">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-primary" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink-muted">Email</p>
                  <a href="mailto:support@jiranios.com" className="mt-1 block text-sm font-medium text-ink hover:text-primary hover:underline">support@jiranios.com</a>
                </div>
              </div>
            </Card>
            <Card padding="lg">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-primary" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink-muted">Phone</p>
                  <a href="tel:+254753127090" className="mt-1 block text-sm font-medium text-ink hover:text-primary hover:underline">+254 753 127 090</a>
                </div>
              </div>
            </Card>
            <Card padding="lg">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-primary" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink-muted">Location</p>
                  <p className="mt-1 text-sm font-medium text-ink">Nairobi, Kenya</p>
                </div>
              </div>
            </Card>
            {/* Item (confirmed real gap, now fixed): this was a bare
                dashed box with just the words "Map placeholder" -
                looked exactly like an unfinished element rather than a
                deliberate design choice. Once a real office address
                exists, replace this whole block with a real Google
                Maps iframe embed instead. */}
            <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-primary-light/40 p-6 text-center">
              <MobileAppIllustration className="h-20 w-28" />
              <p className="text-sm font-semibold text-ink">Serving businesses across Kenya</p>
              <p className="text-xs text-ink-muted">Reach us by email or phone above — we&rsquo;ll get back to you directly.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
