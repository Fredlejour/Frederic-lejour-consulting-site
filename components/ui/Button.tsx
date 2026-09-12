import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'md' | 'lg';
  children: ReactNode;
};

type ButtonProps = BaseProps & Omit<ComponentPropsWithoutRef<'button'>, keyof BaseProps>;

type LinkProps = BaseProps & Omit<ComponentPropsWithoutRef<typeof Link>, keyof BaseProps>;

function buttonClasses(variant: BaseProps['variant'], size: BaseProps['size']) {
  return cn(
    'lc-press inline-flex items-center justify-center gap-2 font-body font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground',
    size === 'lg' ? 'px-8 py-3.5 text-base' : 'px-6 py-3 text-sm',
    variant === 'primary' && 'rounded bg-accent text-accent-foreground hover:bg-accent/90',
    variant === 'secondary' && 'rounded border border-foreground text-foreground hover:bg-foreground hover:text-background',
    variant === 'text' && 'text-foreground underline underline-offset-4 decoration-foreground hover:opacity-80'
  );
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonClasses(variant, size), className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ variant = 'primary', size = 'md', className, children, ...props }: LinkProps) {
  return (
    <Link className={cn(buttonClasses(variant, size), className)} {...props}>
      {children}
    </Link>
  );
}
