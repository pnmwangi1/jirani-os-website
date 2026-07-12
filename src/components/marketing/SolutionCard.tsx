import type { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';
import { Card } from '../ui/Card';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  summary: string;
  points: string[];
  tone: 'primary' | 'tenant' | 'manager' | 'accountant' | 'caretaker' | 'contractor' | 'success' | 'warning' | 'info';
}

const toneClasses: Record<SolutionCardProps['tone'], string> = {
  primary: 'bg-primary-light text-primary',
  tenant: 'bg-tenant-light text-tenant',
  manager: 'bg-manager-light text-manager',
  accountant: 'bg-accountant-light text-accountant',
  caretaker: 'bg-caretaker-light text-caretaker',
  contractor: 'bg-contractor-light text-contractor',
  success: 'bg-success-light text-success',
  warning: 'bg-warning-light text-warning',
  info: 'bg-info-light text-info',
};

export function SolutionCard({ icon: Icon, title, summary, points, tone }: SolutionCardProps) {
  return (
    <Card hoverable padding="lg" className="flex h-full flex-col">
      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${toneClasses[tone]}`}>
        <Icon size={20} />
      </div>
      <h3 className="mb-2 font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-ink-muted">{summary}</p>
      <ul className="mt-auto space-y-2">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-ink">
            <Check size={15} className="mt-0.5 flex-shrink-0 text-success" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
