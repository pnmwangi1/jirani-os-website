import { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div';
  bleed?: boolean; // full-width background, content still contained
}

export function Section({ as = 'section', bleed = false, className = '', children, ...props }: SectionProps) {
  const Tag = as;
  return (
    <Tag className={`py-20 md:py-28 ${bleed ? '' : ''} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
