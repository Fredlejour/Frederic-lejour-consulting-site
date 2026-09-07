import { cn } from '@/lib/utils';
import type { ComponentProps, ReactNode } from 'react';

type Props = {
  variant?: 'default' | 'muted' | 'outline';
  children: ReactNode;
} & Omit<ComponentProps<'div'>, 'children'>;

export function Card({ variant = 'default', className, children, ...props }: Props) {
  const variants = {
    default: 'bg-surface shadow-soft',
    muted: 'bg-foreground/5',
    outline: 'border border-border bg-transparent',
  };

  return (
    <div className={cn('rounded-lg p-6 md:p-8', variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
