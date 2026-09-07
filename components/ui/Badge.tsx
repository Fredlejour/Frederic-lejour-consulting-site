import { cn } from '@/lib/utils';
import type { ComponentProps, ReactNode } from 'react';

type Props = {
  variant?: 'default' | 'outline' | 'accent';
  children: ReactNode;
} & Omit<ComponentProps<'span'>, 'children'>;

export function Badge({ variant = 'default', className, children, ...props }: Props) {
  const variants = {
    default: 'bg-foreground text-background',
    outline: 'border border-foreground text-foreground',
    accent: 'bg-accent text-accent-foreground',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 font-body text-caption uppercase tracking-widest',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
