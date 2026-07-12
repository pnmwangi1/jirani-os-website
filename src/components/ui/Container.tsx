import { HTMLAttributes, forwardRef } from 'react';

export const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div ref={ref} className={`container ${className}`} {...props}>
      {children}
    </div>
  )
);
Container.displayName = 'Container';
