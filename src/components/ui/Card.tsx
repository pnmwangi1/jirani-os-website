import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const paddings = { sm: 'p-5', md: 'p-7', lg: 'p-9' };

export function Card({ hoverable = false, padding = 'md', className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface shadow-soft ${paddings[padding]} ${
        hoverable ? 'transition-all duration-300 hover:border-primary/25 hover:shadow-soft-lg hover:-translate-y-1' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
