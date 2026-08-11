import { History, Wallet } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Reveal } from './Reveal';
import { PhoneFrame } from './PhoneFrame';
import type { AppScreenshot } from '../../content/screenshots';

interface Props {
  customersShot: AppScreenshot;
}

/** Phase 3 (explicit request): elevates customer accounts from a buried
 * feature to a real marketing moment, using the actual customer-credit
 * screenshot found in the repo rather than an illustration. */
export function CustomerAccountsSection({ customersShot }: Props) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <Reveal className="order-2 lg:order-1">
        <div className="relative mx-auto w-full max-w-xs">
          <PhoneFrame src={customersShot.src} alt={customersShot.alt} className="max-w-[260px]" />
        </div>
      </Reveal>

      <Reveal delay={0.1} className="order-1 lg:order-2">
        <Badge tone="primary">Customer accounts</Badge>
        <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">
          Know your customers, not just your sales.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
          Every customer gets a real profile — purchase history, credit sales and outstanding
          balances kept automatically, not reconstructed from memory or a notebook.
        </p>

        <div className="mt-8 space-y-4">
          <div className="flex gap-3 rounded-2xl border border-border bg-surface p-4">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary-light">
              <Wallet size={16} className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-ink">&ldquo;What does this customer owe me?&rdquo;</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-muted">Look it up — the balance is already there.</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-2xl border border-border bg-surface p-4">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary-light">
              <History size={16} className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-ink">&ldquo;What did this customer buy?&rdquo;</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-muted">The history is already there too.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
