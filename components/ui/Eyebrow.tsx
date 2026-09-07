import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

export function Eyebrow({ className, children, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 font-body text-caption uppercase tracking-widest text-foreground',
        className
      )}
      {...props}
    >
      <span className="h-px w-8 bg-accent" aria-hidden="true" />
      {children}
    </span>
  );
}
