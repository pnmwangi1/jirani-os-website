import { Workflow } from 'lucide-react';
import { Card } from '../ui/Card';
import type { Testimonial } from '../../content/testimonials';

export function TestimonialCard({ scenario, quote }: Testimonial) {
  return (
    <Card padding="lg" className="flex h-full flex-col">
      <div className="mb-4 flex items-center gap-2 text-primary">
        <Workflow size={18} />
        <span className="text-xs font-semibold uppercase tracking-wide">{scenario}</span>
      </div>
      <p className="flex-1 text-base leading-relaxed text-ink">{quote}</p>
    </Card>
  );
}
