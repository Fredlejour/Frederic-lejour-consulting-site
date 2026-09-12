import { cn } from '@/lib/utils';
import { Eyebrow } from './Eyebrow';
import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  size?: 'default' | 'large' | 'small';
  layout?: 'stack' | 'split';
  className?: string;
  children?: ReactNode;
};

/**
 * En-tête de section réutilisable.
 *
 * - `size` ajuste le niveau visuel du titre sans modifier la sémantique.
 * - `align` centre ou aligne à gauche le bloc.
 * - `layout="split"` répartit le titre à gauche et le contenu additionnel à
 *   droite en deux colonnes.
 * - `children` est rendu après la description en mode `stack`, ou dans la
 *   colonne de droite en mode `split`.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  size = 'default',
  layout = 'stack',
  className,
  children,
}: Props) {
  const titleClasses = cn(
    'font-display text-foreground',
    size === 'large' ? 'text-heading-2xl' : size === 'small' ? 'text-heading-lg' : 'text-heading-xl'
  );

  const titleBlock = (
    <>
      {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
      <h2 className={titleClasses}>{title}</h2>
    </>
  );

  if (layout === 'split') {
    return (
      <div className={cn('grid gap-10 lg:grid-cols-12 lg:gap-16', className)}>
        <div className="lg:col-span-5">
          {titleBlock}
          {description ? <p className="mt-6 text-body-lg text-muted">{description}</p> : null}
        </div>
        <div className="lg:col-span-7">{children}</div>
      </div>
    );
  }

  return (
    <div className={cn('max-w-prose', align === 'center' && 'mx-auto text-center', className)}>
      {titleBlock}
      {description ? <p className="mt-6 text-body-lg text-muted">{description}</p> : null}
      {children ? (
        <div className={cn('mt-8', align === 'center' && 'flex justify-center')}>{children}</div>
      ) : null}
    </div>
  );
}
