import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ComponentProps } from 'react';

export function TextLink({ className, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        'inline-flex items-center font-body font-medium text-foreground underline underline-offset-4 decoration-foreground transition-opacity hover:opacity-80',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
