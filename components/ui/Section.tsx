import { cn } from '@/lib/utils';
import { Container } from './Container';
import type { ComponentProps, ReactNode } from 'react';

type Props = {
  variant?: 'ivory' | 'graphite' | 'craie' | 'silk' | 'pearl';
  children: ReactNode;
} & Omit<ComponentProps<'section'>, 'children'>;

export function Section({ variant = 'ivory', className, children, ...props }: Props) {
  const variants = {
    ivory: 'theme-ivory',
    graphite: 'theme-graphite',
    craie: 'theme-craie',
    silk: 'theme-silk',
    pearl: 'theme-pearl',
  };

  return (
    <section
      className={cn('py-section bg-background text-foreground', variants[variant], className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
