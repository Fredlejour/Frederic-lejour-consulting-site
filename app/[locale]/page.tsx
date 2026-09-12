import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HomeDe } from '@/components/sections/HomeDe';
import { HomeFr } from '@/components/sections/HomeFr';
import { PendingPage } from '@/components/sections/PendingPage';
import { homeDe, homeFr } from '@/content/home';
import { isLocale, locales, ogLocale, type Locale } from '@/lib/i18n';
import { alternatesFor, isPageLive, urlFor } from '@/lib/routes';
import { ui } from '@/lib/ui';

/**
 * Accueil de chaque langue : /fr/, /de/ et /en/.
 *
 * Le français et l’allemand portent leur contenu éditorial validé, rendu par
 * la même composition de sections. Une langue dont l’accueil n’est pas encore
 * publié (`livePages`) affiche une page d’attente non indexable.
 */

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;

  const alternates = {
    canonical: urlFor(locale, 'home'),
    languages: alternatesFor('home'),
  };

  const openGraph = {
    url: urlFor(locale, 'home'),
    locale: ogLocale[locale],
  };

  if (!isPageLive(locale, 'home')) {
    return {
      title: ui(locale, 'pendingTitle'),
      description: ui(locale, 'pendingIntro'),
      robots: { index: false, follow: true },
      alternates: { canonical: urlFor(locale, 'home') },
      openGraph,
    };
  }

  if (locale === 'fr') {
    return {
      title: homeFr.meta.title,
      description: homeFr.meta.description,
      alternates,
      openGraph: { ...openGraph, title: homeFr.meta.title, description: homeFr.meta.description },
    };
  }

  return {
    title: homeDe.meta.title,
    description: homeDe.meta.description,
    alternates,
    openGraph: { ...openGraph, title: homeDe.meta.title, description: homeDe.meta.description },
  };
}

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  if (!isPageLive(locale, 'home')) {
    return <PendingPage locale={locale} pageKey="home" />;
  }

  if (locale === 'fr') return <HomeFr />;
  if (locale === 'de') return <HomeDe />;

  notFound();
}
