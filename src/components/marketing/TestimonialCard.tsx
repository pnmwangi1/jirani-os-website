import { Quote } from 'lucide-react';
import { Card } from '../ui/Card';
import type { Testimonial } from '../../content/testimonials';

export function TestimonialCard({ quote, role }: Testimonial) {
  return (
    <Card padding="lg" className="flex h-full flex-col">
      <Quote size={22} className="mb-4 text-primary/40" />
      <p className="flex-1 text-base leading-relaxed text-ink">&ldquo;{quote}&rdquo;</p>
      <p className="mt-5 text-sm font-medium text-ink-muted">{role}</p>
    </Card>
  );
}
