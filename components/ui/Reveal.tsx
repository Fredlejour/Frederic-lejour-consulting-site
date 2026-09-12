'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /**
   * `rise` (défaut) : fondu + légère montée.
   * `scale` : fondu + zoom avant très léger, pour un élément focal comme le
   * mantra. Aucune translation n’est appliquée dans cette variante.
   */
  variant?: 'rise' | 'scale';
  /** Marge de déclenchement : l’élément se révèle un peu avant d’être atteint. */
  rootMargin?: string;
};

/**
 * Révélation au défilement, sans dépendance externe.
 *
 * Garanties :
 *
 * - Le rendu serveur ne porte **aucun** état masqué : le contenu est toujours
 *   présent et visible dans le HTML, donc indexable et lisible sans
 *   JavaScript.
 * - L’état masqué n’est posé qu’après hydratation, et uniquement si le
 *   visiteur n’a pas demandé de réduction des animations.
 * - L’observation s’arrête dès la première apparition : l’animation ne se
 *   rejoue jamais quand le visiteur remonte la page.
 * - Seules `opacity` et `transform` sont animées, via `app/globals.css`.
 */
export function Reveal({
  children,
  className,
  variant = 'rise',
  rootMargin = '0px 0px -12% 0px',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'idle' | 'hidden' | 'ready' | 'shown'>('idle');

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') return;

    // Déjà visible à l’hydratation : on marque la section comme « prête »
    // (contenu affiché, seul le filet d’eyebrow se déploie) au lieu de la
    // masquer pour la réafficher aussitôt.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setState('ready');
      return;
    }

    setState('hidden');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState('shown');
            observer.disconnect();
          }
        }
      },
      { rootMargin, threshold: 0.05 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={cn(className)}
      data-reveal={state === 'idle' ? undefined : state}
      data-variant={variant === 'scale' ? 'scale' : undefined}
    >
      {children}
    </div>
  );
}
