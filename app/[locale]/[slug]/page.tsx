import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RouteScaffold } from '@/components/dev/RouteScaffold';
import { isLocale, locales, ogLocale, type Locale } from '@/lib/i18n';
import { alternatesFor, pageKeyFromSlug, pageKeys, routes, urlFor } from '@/lib/routes';

/**
 * Pages de premier niveau, dans les deux langues.
 *
 * Le slug est résolu via le registre `lib/routes.ts` : l'URL publique et la
 * route interne sont donc toujours identiques, sans réécriture. Un slug
 * inconnu renvoie une véritable erreur 404.
 *
 * Correspondances : /fr/approche ↔ /de/arbeitsweise, /fr/expertises ↔
 * /de/expertise, /fr/realisations ↔ /de/projekte, /fr/parcours ↔
 * /de/werdegang, /fr/contact ↔ /de/kontakt, /fr/mentions-legales ↔
 * /de/impressum, /fr/politique-confidentialite ↔ /de/datenschutz.
 */

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    pageKeys
      .filter((key) => routes[key][locale] !== '')
      .map((key) => ({ locale, slug: routes[key][locale] }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const pageKey = pageKeyFromSlug(locale, params.slug);
  if (!pageKey) return {};

  return {
    title: 'Lejour Consulting',
    alternates: {
      canonical: urlFor(locale, pageKey),
      languages: alternatesFor(pageKey),
    },
    openGraph: {
      url: urlFor(locale, pageKey),
      locale: ogLocale[locale],
    },
  };
}

export default function LocalisedPage({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  const pageKey = pageKeyFromSlug(locale, params.slug);
  if (!pageKey || pageKey === 'home') notFound();

  return <RouteScaffold locale={locale} pageKey={pageKey} />;
}
