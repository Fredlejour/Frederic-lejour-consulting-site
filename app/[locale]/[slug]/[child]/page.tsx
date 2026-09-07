import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, locales, ogLocale, type Locale } from '@/lib/i18n';
import {
  alternatesFor,
  caseStudyFromSlug,
  caseStudySlugs,
  pageKeyFromSlug,
  routes,
  urlFor,
} from '@/lib/routes';

/**
 * Détail d'une réalisation : /fr/realisations/[projet] ↔ /de/projekte/[projekt].
 *
 * Aucune étude de cas n'est déclarée en Phase 2 : la liste `caseStudySlugs`
 * reste vide, donc toute URL de ce niveau renvoie une véritable erreur 404.
 * Les cas seront ajoutés en Phase 3 puis Phase 5, uniquement à partir de
 * contenus fournis et validés.
 */

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    caseStudySlugs.map((entry) => ({
      locale,
      slug: routes.work[locale],
      child: entry[locale],
    }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string; child: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  if (pageKeyFromSlug(locale, params.slug) !== 'work') return {};
  const entry = caseStudyFromSlug(locale, params.child);
  if (!entry) return {};

  return {
    title: 'Lejour Consulting',
    alternates: {
      canonical: urlFor(locale, 'work', entry[locale]),
      languages: alternatesFor('work', entry[locale]),
    },
    openGraph: {
      url: urlFor(locale, 'work', entry[locale]),
      locale: ogLocale[locale],
    },
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { locale: string; slug: string; child: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  if (pageKeyFromSlug(locale, params.slug) !== 'work') notFound();
  const entry = caseStudyFromSlug(locale, params.child);
  if (!entry) notFound();

  // Les études de cas ne sont pas encore publiées.
  notFound();
}
