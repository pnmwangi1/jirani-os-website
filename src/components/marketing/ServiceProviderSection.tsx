import { ScanLine, Package, Wrench, Users, CreditCard, X, Check } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Reveal } from './Reveal';
import { PhoneFrame } from './PhoneFrame';
import type { AppScreenshot } from '../../content/screenshots';

const before = ['Computer', 'Power backup', 'Printer', 'Scanner', 'Separate stock records', 'Separate customer records', 'Manual credit tracking'];
const after = ['Sales', 'Goods & services', 'Stock', 'Customer accounts', 'Credit sales', 'Branches & staff', 'Reports & insights'];

interface Props {
  posShot: AppScreenshot;
}

/** Phase 2 (explicit request): the signature Service Provider moment —
 * BEFORE (the pile of disconnected tools) vs. WITH JIRANI OS (the
 * phone), plus a barcode-scanning callout, since no real screenshot of
 * a live camera scan exists to use honestly here. */
export function ServiceProviderSection({ posShot }: Props) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <Reveal>
        <Badge tone="primary">For service providers</Badge>
        <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">
          Your phone just became your business system.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
          Sell goods. Sell services. Or sell both. Track stock, manage customer accounts, follow
          credit and scan products with your camera — no dedicated till, no barcode scanner, no
          computer required to get started.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-surface p-4">
            <p className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-muted">
              <X size={13} className="text-danger" /> Before
            </p>
            <ul className="space-y-2">
              {before.map((item) => (
                <li key={item} className="text-xs text-ink-muted">{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary-light/40 p-4">
            <p className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-primary">
              <Check size={13} /> With Jirani OS
            </p>
            <ul className="space-y-2">
              {after.map((item) => (
                <li key={item} className="text-xs font-medium text-ink">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-semibold text-ink">
            <Package size={13} className="text-primary" /> Goods
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-semibold text-ink">
            <Wrench size={13} className="text-primary" /> Services
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-semibold text-ink">
            <Users size={13} className="text-primary" /> Customer accounts
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-semibold text-ink">
            <CreditCard size={13} className="text-primary" /> Credit sales
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="relative mx-auto w-full max-w-xs">
          <PhoneFrame src={posShot.src} alt={posShot.alt} className="max-w-[260px]" />
          <div className="absolute -right-3 top-8 flex items-center gap-2 rounded-2xl border border-primary/30 bg-surface px-3 py-2.5 shadow-soft-lg sm:-right-10">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <ScanLine size={15} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">Your phone can</p>
              <p className="text-xs font-extrabold text-ink">Scan barcodes</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
