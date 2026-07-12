import { KeyRound, ShieldCheck, History, Lock, DatabaseBackup, Eye, Fingerprint, Map } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/marketing/Reveal';

const pillars = [
  {
    icon: KeyRound,
    title: 'Authentication',
    body: 'Accounts are protected by passwords stored as secure, salted hashes — never in plain text. Sensitive actions, such as changing a phone number or email address, or resetting a password, require a one-time verification code sent to the contact method being confirmed, so a change can only be made by someone who genuinely controls it.',
  },
  {
    icon: Fingerprint,
    title: 'Biometric app unlock',
    body: 'On supported devices, you can require your fingerprint or face to unlock the app after your first sign-in — a convenience layer on top of your real session, not a replacement for it. Your biometric data never leaves your device; Jirani OS only receives a yes/no confirmation from your device\u2019s own secure hardware.',
  },
  {
    icon: Lock,
    title: 'Role-based permissions',
    body: 'Every person in your organization is assigned a role — landlord, manager, accountant, cashier, and more — that determines exactly what they can see and do. A cashier cannot view payroll; a security guard cannot edit accounting entries. Permissions are enforced on every request, not just hidden in the interface.',
  },
  {
    icon: History,
    title: 'Audit trails',
    body: 'Sensitive actions — financial adjustments, permission changes, and record deletions among them — are recorded with who performed them and when. This creates accountability and makes it possible to reconstruct exactly what happened if a question ever arises.',
  },
  {
    icon: ShieldCheck,
    title: 'Encryption',
    body: 'Data is encrypted in transit between your device and our servers using industry-standard TLS. Sensitive fields, such as phone numbers, are encrypted at rest in our database, not stored as readable text.',
  },
  {
    icon: DatabaseBackup,
    title: 'Backups',
    body: 'Your data is backed up regularly as part of our infrastructure provider\u2019s managed database service, reducing the risk of data loss from hardware failure or operational error.',
  },
  {
    icon: Map,
    title: 'Location data, used narrowly',
    body: 'Location is only requested for features that genuinely need it — such as confirming a parking or delivery location — and only while that specific feature is in use. It is never collected continuously in the background.',
  },
  {
    icon: Eye,
    title: 'Data access, by design',
    body: 'Your business data is visible only within your own organization, scoped by role. We do not use your business data to train external models or share it with unrelated third parties.',
  },
];

export default function Security() {
  useSeo({
    title: 'Security',
    description: 'How Jirani OS protects your data — authentication, role-based permissions, audit trails, encryption, backups, and our security roadmap.',
    path: '/security',
  });

  return (
    <>
      <Section className="pb-12">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="primary">Security</Badge>
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">How we protect your data.</h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              We would rather describe our security practices plainly and accurately than make
              claims we cannot stand behind. Here is what is actually in place today.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 0.06}>
                <Card padding="lg" className="h-full">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <p.icon size={20} />
                  </div>
                  <h3 className="font-display text-base font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="text-center text-3xl font-extrabold text-ink md:text-4xl">Where we are headed.</h2>
            <p className="mt-4 text-center text-sm text-ink-muted">
              Security is a practice, not a checkbox. Areas we are actively investing in:
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex gap-3 rounded-xl border border-border bg-surface p-4 text-sm text-ink-muted">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>Formal third-party security audits and penetration testing as the platform matures.</span>
              </li>
              <li className="flex gap-3 rounded-xl border border-border bg-surface p-4 text-sm text-ink-muted">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>Expanded audit trail coverage across every module as new capabilities ship.</span>
              </li>
              <li className="flex gap-3 rounded-xl border border-border bg-surface p-4 text-sm text-ink-muted">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>Granular, self-serve permission configuration for organizations with complex role structures.</span>
              </li>
              <li className="flex gap-3 rounded-xl border border-border bg-surface p-4 text-sm text-ink-muted">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>A public status page for real-time visibility into Service availability.</span>
              </li>
            </ul>
            <p className="mt-8 text-center text-sm text-ink-muted">
              If you have a specific security question or want to report a concern, reach out
              through our <a href="/contact" className="font-medium text-primary underline">Contact page</a>.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
