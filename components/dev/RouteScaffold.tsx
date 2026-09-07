import Link from 'next/link';
import { localeLabel, locales, type Locale } from '@/lib/i18n';
import { alternatesFor, pageKeys, pathFor, routes, urlFor, type PageKey } from '@/lib/routes';

/**
 * Échafaudage technique de la Phase 1.
 *
 * Ce composant n'affiche **aucun contenu éditorial** : uniquement des
 * informations techniques permettant de vérifier le routage bilingue, les
 * URL canoniques, les alternates `hreflang` et le sélecteur de langue.
 *
 * Il sera intégralement remplacé par les sections réelles en Phase 2
 * (design system) puis Phase 3 et Phase 5 (contenus FR et DE).
 */

type Props = {
  locale: Locale;
  pageKey: PageKey;
  childSlug?: string;
};

export function RouteScaffold({ locale, pageKey, childSlug }: Props) {
  const alternates = alternatesFor(pageKey, childSlug);
  const otherLocales = locales.filter((l) => l !== locale);

  return (
    <main id="contenu" className="mx-auto max-w-3xl px-6 py-16 font-mono text-sm">
      <p className="text-taupe">Phase 1 — échafaudage technique, sans contenu éditorial.</p>

      <h1 className="mt-6 text-xl">
        {pageKey}
        {childSlug ? ` / ${childSlug}` : ''}
      </h1>

      <dl className="mt-8 space-y-2">
        <div>
          <dt className="inline text-taupe">langue : </dt>
          <dd className="inline">{locale}</dd>
        </div>
        <div>
          <dt className="inline text-taupe">clé de page : </dt>
          <dd className="inline">{pageKey}</dd>
        </div>
        <div>
          <dt className="inline text-taupe">chemin : </dt>
          <dd className="inline">{pathFor(locale, pageKey, childSlug)}</dd>
        </div>
        <div>
          <dt className="inline text-taupe">canonical : </dt>
          <dd className="inline">{urlFor(locale, pageKey, childSlug)}</dd>
        </div>
      </dl>

      <h2 className="mt-8 text-taupe">alternates hreflang</h2>
      <ul className="mt-2 space-y-1">
        {Object.entries(alternates).map(([key, href]) => (
          <li key={key}>
            {key} → {href}
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-taupe">sélecteur de langue</h2>
      <ul className="mt-2 space-y-1">
        {otherLocales.map((target) => (
          <li key={target}>
            <Link className="underline" href={pathFor(target, pageKey, childSlug)}>
              {localeLabel[target]} → {pathFor(target, pageKey, childSlug)}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-taupe">
        toutes les routes ({locales.length * pageKeys.length})
      </h2>
      {locales.map((l) => (
        <div key={l} className="mt-2">
          <p className="text-taupe">{l}</p>
          <ul className="mt-1 space-y-1">
            {pageKeys.map((key) => (
              <li key={key}>
                <Link className="underline" href={pathFor(l, key)}>
                  {pathFor(l, key)}
                </Link>
                <span className="text-taupe"> — {key}</span>
                {routes[key][l] === '' ? <span className="text-taupe"> (accueil)</span> : null}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
