'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { Locale } from '@/lib/i18n';
import type { ConsentStatus } from '@/lib/consent';
import { pathFor } from '@/lib/routes';
import { ui } from '@/lib/ui';
import { cn } from '@/lib/utils';

type Props = {
  locale: Locale;
  status: ConsentStatus;
  onAccept: () => void;
  onReject: () => void;
  /** Fermeture sans changer le choix — uniquement si un choix existe déjà. */
  onDismiss: () => void;
  /** Déplace le focus sur le panneau lors d’une réouverture depuis le pied de page. */
  autoFocus: boolean;
};

/**
 * Bandeau de consentement à la mesure d’audience.
 *
 * Choix de conception :
 *
 * - les deux actions ont **exactement** le même traitement visuel : même
 *   forme, même taille, même contraste, aucun choix précoché ; refuser est
 *   donc aussi simple et aussi visible qu’accepter ;
 * - le panneau est ancré en bas de l’écran et ne couvre qu’une bande : le
 *   contenu de la page reste lisible et accessible, sans voile ni blocage ;
 * - le dialogue n’est pas modal et ne piège pas le focus ; la touche Échap ne
 *   le ferme que si un choix a déjà été exprimé, afin qu’une fermeture ne
 *   puisse jamais valoir consentement ;
 * - l’animation d’apparition est confiée à Tailwind et neutralisée par
 *   `motion-reduce`, conformément au reste du site.
 */
export function ConsentBanner({
  locale,
  status,
  onAccept,
  onReject,
  onDismiss,
  autoFocus,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (autoFocus) panelRef.current?.focus();
  }, [autoFocus]);

  // Échap ne referme le panneau que lorsqu’un choix a déjà été enregistré :
  // une fermeture ne vaut jamais acceptation.
  useEffect(() => {
    if (status === 'unknown') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onDismiss();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [status, onDismiss]);

  // Hauteur tactile plancher de 48 px, libellé centré pouvant passer sur deux
  // lignes (utile en allemand) sans jamais réduire la zone cliquable.
  const actionClasses =
    'lc-press inline-flex min-h-[3rem] w-full items-center justify-center rounded border border-craie px-4 py-2.5 text-center font-body text-sm font-medium leading-snug text-craie hover:bg-craie hover:text-graphite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-craie sm:w-auto sm:min-w-[13rem] sm:px-6 sm:py-3';

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-[60] transition-transform duration-250 ease-out-expo motion-reduce:transition-none',
        visible ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="false"
        aria-labelledby="lc-consent-title"
        aria-describedby="lc-consent-text"
        className="theme-graphite border-t border-or/40 bg-graphite outline-none"
      >
        <div className="mx-auto w-full max-w-container px-5 py-4 md:px-10 md:py-7 lg:px-16">
          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="max-w-prose">
              <h2
                id="lc-consent-title"
                className="font-display text-heading-md text-craie"
              >
                {ui(locale, 'consentTitle')}
              </h2>

              <p id="lc-consent-text" className="mt-2 text-body-sm text-craie/80 md:mt-3">
                {ui(locale, 'consentText')}
              </p>

              <Link
                href={pathFor(locale, 'privacy')}
                className="mt-2 inline-block py-1 font-body text-body-sm font-medium text-craie underline underline-offset-4 decoration-or transition-opacity hover:opacity-80 md:mt-3 md:py-0"
              >
                {ui(locale, 'consentLearnMore')}
              </Link>
            </div>

            <div className="flex shrink-0 flex-row gap-2 sm:gap-3 lg:pt-1">
              <button type="button" onClick={onAccept} className={actionClasses}>
                {ui(locale, 'consentAccept')}
              </button>
              <button type="button" onClick={onReject} className={actionClasses}>
                {ui(locale, 'consentReject')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
