import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, id, className = '', ...props }, ref) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
      {label}
    </label>
    <input
      ref={ref}
      id={id}
      className={`w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-primary ${className}`}
      {...props}
    />
  </div>
));
Input.displayName = 'Input';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, id, className = '', ...props }, ref) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
      {label}
    </label>
    <textarea
      ref={ref}
      id={id}
      className={`w-full resize-none rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-primary ${className}`}
      {...props}
    />
  </div>
));
Textarea.displayName = 'Textarea';
