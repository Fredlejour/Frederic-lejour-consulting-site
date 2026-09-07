import { cn } from '@/lib/utils';
import { Eyebrow } from './Eyebrow';
import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, align = 'left', className }: Props) {
  return (
    <div className={cn('max-w-prose', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
      <h2 className="font-display text-heading-xl text-foreground">{title}</h2>
      {description ? <p className="mt-6 text-body-lg text-muted">{description}</p> : null}
    </div>
  );
}
