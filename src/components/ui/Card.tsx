import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const paddings = { sm: 'p-5', md: 'p-7', lg: 'p-9' };

export function Card({ hoverable = false, padding = 'md', className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface ${paddings[padding]} ${
        hoverable ? 'transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-0.5' : 'shadow-soft'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
