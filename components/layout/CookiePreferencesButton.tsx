'use client';

import type { Locale } from '@/lib/i18n';
import { ui } from '@/lib/ui';
import { useConsent } from '@/components/consent/ConsentProvider';

/**
 * Réouverture des préférences de confidentialité depuis le pied de page.
 *
 * Permet à tout moment de modifier ou de retirer le consentement, dans la
 * langue de la page courante. Sans identifiant de mesure configuré, le
 * contexte est absent : ni l’entrée de liste ni le bouton ne sont rendus.
 *
 * Le composant porte son propre `<li>` afin qu’aucun élément de liste vide ne
 * subsiste dans le pied de page lorsque la mesure n’est pas configurée.
 */
export function CookiePreferencesButton({ locale }: { locale: Locale }) {
  const consent = useConsent();
  if (!consent) return null;

  return (
    <li>
      <button
        type="button"
        onClick={consent.openPreferences}
        className="text-left text-body-sm text-foreground transition-colors hover:text-accent"
      >
        {ui(locale, 'consentManage')}
      </button>
    </li>
  );
}
