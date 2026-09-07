import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { fontBody, fontDisplay } from '@/lib/fonts';
import { htmlLang, isLocale, locales, type Locale } from '@/lib/i18n';
import { SITE_URL } from '@/lib/routes';
import { SkipLink } from '@/components/layout/SkipLink';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

/**
 * Layout racine, par langue.
 *
 * L’attribut `lang` de `<html>` est déterminé par le segment de langue de
 * l’URL : chaque version est donc réellement identifiée comme française ou
 * allemande, condition d’un référencement multilingue correct.
 *
 * Le Header, le Footer et le lien d’évitement sont présents sur toutes les
 * pages. Ils utilisent les variables de police déclarées via `next/font`.
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
    <html
      lang={htmlLang[locale]}
      className={`${fontDisplay.variable} ${fontBody.variable}`}
    >
      <body className="bg-background text-foreground font-body antialiased">
        <SkipLink locale={locale} />
        <Header locale={locale} />
        <main id="contenu">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
