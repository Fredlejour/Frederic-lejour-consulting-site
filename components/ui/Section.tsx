import { cn } from '@/lib/utils';
import { Container } from './Container';
import type { ComponentProps, ReactNode } from 'react';

type Props = {
  variant?: 'ivory' | 'graphite' | 'craie';
  children: ReactNode;
} & Omit<ComponentProps<'section'>, 'children'>;

export function Section({ variant = 'ivory', className, children, ...props }: Props) {
  const variants = {
    ivory: 'bg-ivoire text-graphite theme-ivory',
    graphite: 'bg-graphite text-craie theme-graphite',
    craie: 'bg-craie text-graphite theme-craie',
  };

  return (
    <section className={cn('py-section', variants[variant], className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
