import { Car, KeyRound, Megaphone, ShieldCheck, Check } from 'lucide-react';

// Small, product-style cards that show what a virtual property feels like without needing a screenshot of someone's
// building. They are illustrations of the feature, so they carry no real names or plates.
function Shell({ icon: Icon, label, tone, children }: { icon: typeof Car; label: string; tone: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-bg p-4 shadow-soft">
      <div className="flex items-center gap-2">
        <span className={`flex h-8 w-8 items-center justify-center rounded-full ${tone}`}>
          <Icon size={15} />
        </span>
        <p className="text-xs font-bold uppercase tracking-wide text-ink-muted">{label}</p>
      </div>
      {children}
    </div>
  );
}

export function ParkingPromptCard({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <Shell icon={Car} label="Parking prompt" tone="bg-warning-light text-warning">
        <p className="mt-3 text-sm font-bold text-ink">Your vehicle KXX 123A is blocking another resident.</p>
        <p className="mt-1 text-xs text-ink-muted">Please move it. Reminder 2 of 3.</p>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white">I am moving it</span>
          <span className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-ink-muted">Not mine</span>
        </div>
      </Shell>
    </div>
  );
}

export function GatePassCard({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <Shell icon={KeyRound} label="Gate pass" tone="bg-info-light text-info">
        <p className="mt-3 text-sm font-bold text-ink">Moving out: sofa set and 2 boxes</p>
        <p className="mt-1 text-xs text-ink-muted">Unit 4B · today, 2:00 pm</p>
        <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-success-light px-3 py-1.5 text-xs font-semibold text-success">
          <Check size={13} /> Approved by management
        </p>
      </Shell>
    </div>
  );
}

export function NoticeCard({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <Shell icon={Megaphone} label="Notice" tone="bg-primary-light text-primary">
        <p className="mt-3 text-sm font-bold text-ink">Water will be off tomorrow, 9 am to 1 pm.</p>
        <p className="mt-1 text-xs text-ink-muted">Pinned · expires in 1 day</p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-ink-muted">
          <ShieldCheck size={13} /> Read by 38 of 44 residents
        </p>
      </Shell>
    </div>
  );
}

/** The three cards stacked in a loose column, used beside the property section and in the hero. */
export function PropertyCardStack({ className = '' }: { className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-sm space-y-3 ${className}`}>
      <ParkingPromptCard />
      <GatePassCard className="sm:ml-8" />
      <NoticeCard className="sm:-ml-4" />
    </div>
  );
}
