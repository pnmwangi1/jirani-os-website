import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
}

interface ButtonProps extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  to?: undefined;
  href?: undefined;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  href?: undefined;
  children?: React.ReactNode;
  className?: string;
}

interface AnchorButtonProps extends BaseProps {
  href: string;
  to?: undefined;
  children?: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary/90 shadow-soft',
  secondary: 'bg-primary-light text-primary hover:bg-primary-light/70',
  outline: 'border border-border text-ink hover:bg-surface',
  ghost: 'text-ink hover:bg-primary-light/50',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none';

export function Button({ variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  return <button className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props} />;
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ variant = 'primary', size = 'md', to, className = '', children, ...props }, ref) => (
    <Link ref={ref} to={to} className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </Link>
  )
);
LinkButton.displayName = 'LinkButton';

export function AnchorButton({ variant = 'primary', size = 'md', href, className = '', children, ...props }: AnchorButtonProps) {
  return (
    <a href={href} className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </a>
  );
}
