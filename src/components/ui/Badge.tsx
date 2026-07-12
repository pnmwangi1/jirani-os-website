import { HTMLAttributes } from 'react';

type Tone = 'primary' | 'tenant' | 'manager' | 'accountant' | 'caretaker' | 'contractor' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

const toneClasses: Record<Tone, string> = {
  primary: 'bg-primary-light text-primary',
  tenant: 'bg-tenant-light text-tenant',
  manager: 'bg-manager-light text-manager',
  accountant: 'bg-accountant-light text-accountant',
  caretaker: 'bg-caretaker-light text-caretaker',
  contractor: 'bg-contractor-light text-contractor',
  success: 'bg-success-light text-success',
  warning: 'bg-warning-light text-warning',
  danger: 'bg-danger-light text-danger',
  info: 'bg-info-light text-info',
  neutral: 'bg-border/60 text-ink-muted',
};

export function Badge({ tone = 'neutral', className = '', children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${toneClasses[tone]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
