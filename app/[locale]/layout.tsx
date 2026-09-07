import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { htmlLang, isLocale, locales, type Locale } from '@/lib/i18n';
import { SITE_URL } from '@/lib/routes';

/**
 * Layout racine, par langue.
 *
 * L'attribut `lang` de `<html>` est déterminé par le segment de langue de
 * l'URL : chaque version est donc réellement identifiée comme française ou
 * allemande, condition d'un référencement multilingue correct.
 */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  return (
    <html lang={htmlLang[locale]}>
      <body className="bg-craie text-graphite antialiased">{children}</body>
    </html>
  );
}
