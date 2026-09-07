import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

type Props = {
  variant?: 'default' | 'accent' | 'foreground';
  decorative?: boolean;
} & ComponentProps<'hr'>;

export function Separator({ variant = 'default', decorative = true, className, ...props }: Props) {
  const variants = {
    default: 'bg-border',
    accent: 'bg-accent',
    foreground: 'bg-foreground',
  };

  return (
    <hr
      className={cn('h-px w-full border-0', variants[variant], className)}
      aria-hidden={decorative}
      {...props}
    />
  );
}
