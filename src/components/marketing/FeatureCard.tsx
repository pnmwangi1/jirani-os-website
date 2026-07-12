import type { LucideIcon } from 'lucide-react';
import { Card } from '../ui/Card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card hoverable padding="md">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
        <Icon size={20} />
      </div>
      <h3 className="mb-1.5 font-display text-base font-bold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
    </Card>
  );
}
