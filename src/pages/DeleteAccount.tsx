import { Trash2, Mail, Smartphone, Clock } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/marketing/Reveal';

export default function DeleteAccount() {
  useSeo({
    title: 'Delete Your Account',
    description: 'How to request deletion of your Jirani OS account and what happens to your data.',
    path: '/delete-account',
  });

  return (
    <Section>
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge tone="danger">
            <Trash2 size={12} /> Account Deletion
          </Badge>
          <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Delete your account.</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            You may request deletion of your Jirani OS account at any time. Here is exactly how,
            and what happens to your data afterward.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-2xl space-y-5">
          <Reveal delay={0.05}>
            <Card padding="lg">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-ink">Option 1 — In the app</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    Open the Jirani OS app and use the account deletion option, if available in
                    your account settings.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card padding="lg">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-ink">Option 2 — Contact us directly</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    Email us at{' '}
                    <a href="mailto:support@jiranios.com" className="font-semibold text-primary underline">
                      support@jiranios.com
                    </a>{' '}
                    with your account deletion request. Please send this from the email address or
                    phone number associated with your account where possible, so we can verify the
                    request efficiently.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.15}>
            <Card padding="lg">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-warning-light text-warning">
                  <Clock size={20} />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-ink">What happens next</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    Upon verification, we will delete or anonymize your personal data within a
                    reasonable period, except where certain records must be retained to comply
                    with legal, tax, or accounting obligations.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mx-auto mt-10 max-w-2xl">
          <div className="rounded-2xl border border-border bg-surface p-6 text-sm leading-relaxed text-ink-muted">
            <h3 className="mb-2 font-semibold text-ink">A note on what &ldquo;a reasonable period&rdquo; and &ldquo;retained records&rdquo; mean</h3>
            <p>
              Most personal data is deleted or anonymized promptly after your request is verified.
              Some records — such as completed financial transactions — may need to be retained
              longer where required by applicable accounting, tax, or other legal obligations, even
              after your account itself is deleted. For full detail on how your data is handled
              more broadly, see our <a href="/privacy" className="font-medium text-primary underline">Privacy Policy</a>.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
