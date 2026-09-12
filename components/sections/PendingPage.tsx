import type { Locale } from '@/lib/i18n';
import { pathFor, type PageKey } from '@/lib/routes';
import { ui } from '@/lib/ui';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

type Props = {
  locale: Locale;
  pageKey: PageKey;
};

/**
 * Page d’attente, affichée pour toute route dont la version linguistique
 * n’est pas encore publiée (`livePages`).
 *
 * Un seul h1, un court texte et un lien direct vers l’équivalent français :
 * aucune popup, aucune redirection automatique. La page est marquée
 * `noindex` dans `generateMetadata` et exclue du sitemap.
 */
export function PendingPage({ locale, pageKey }: Props) {
  return (
    <Section variant="ivory">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-display-md text-foreground text-balance">
            {ui(locale, 'pendingTitle')}
          </h1>

          <p className="mx-auto mt-6 max-w-prose text-body-lg text-muted">
            {ui(locale, 'pendingIntro')}
          </p>

          <div className="mt-10">
            <ButtonLink size="lg" href={pathFor('fr', pageKey)}>
              {ui(locale, 'pendingLink')}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
