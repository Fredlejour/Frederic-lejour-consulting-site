import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RouteScaffold } from '@/components/dev/RouteScaffold';
import { isLocale, locales, ogLocale, type Locale } from '@/lib/i18n';
import { alternatesFor, urlFor } from '@/lib/routes';

/** Accueil de chaque langue : /fr/ et /de/. */

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;

  return {
    title: 'Lejour Consulting',
    alternates: {
      canonical: urlFor(locale, 'home'),
      languages: alternatesFor('home'),
    },
    openGraph: {
      url: urlFor(locale, 'home'),
      locale: ogLocale[locale],
    },
  };
}

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  return <RouteScaffold locale={params.locale as Locale} pageKey="home" />;
}
