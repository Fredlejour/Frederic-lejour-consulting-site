import Link from 'next/link';
import { defaultLocale } from '@/lib/i18n';
import { pathFor } from '@/lib/routes';
import { Button, ButtonLink } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

/**
 * Page 404 — renvoie bien un code HTTP 404.
 *
 * Cette page utilise les composants du design system. Un composant
 * `not-found` ne reçoit pas les paramètres de route : la langue ne peut donc
 * pas être déduite ici, d’où l’affichage trilingue et les liens vers les
 * trois accueils.
 */
export default function NotFound() {
  return (
    <Section variant="craie">
      <div className="text-center">
        <h1 className="font-display text-display-md text-foreground">404</h1>
        <p className="mx-auto mt-6 max-w-prose text-body-lg text-muted">
          Page introuvable. — Seite nicht gefunden. — Page not found.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href={pathFor(defaultLocale, 'home')}>
            Retour à l’accueil
          </ButtonLink>
          <ButtonLink href={pathFor('de', 'home')} variant="secondary">
            Zurück zur Startseite
          </ButtonLink>
          <ButtonLink href={pathFor('en', 'home')} variant="secondary">
            Back to homepage
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
