import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ApproachPage } from '@/components/sections/ApproachPage';
import { CareerPage } from '@/components/sections/CareerPage';
import { ContactPage } from '@/components/sections/ContactPage';
import { ExpertisePage } from '@/components/sections/ExpertisePage';
import { LegalPage } from '@/components/sections/LegalPage';
import { PendingPage } from '@/components/sections/PendingPage';
import { WorkPage } from '@/components/sections/WorkPage';
import { approachFr } from '@/content/approach';
import { careerFr } from '@/content/career';
import { contactFr } from '@/content/contact';
import { expertiseFr } from '@/content/expertise';
import {
  legalNoticeDe,
  legalNoticeEn,
  legalNoticeFr,
  privacyDe,
  privacyEn,
  privacyFr,
  type LegalPageContent,
} from '@/content/legal';
import { workFr } from '@/content/work';
import { isLocale, locales, ogLocale, type Locale } from '@/lib/i18n';
import {
  alternatesFor,
  isPageLive,
  pageKeyFromSlug,
  pageKeys,
  routes,
  urlFor,
} from '@/lib/routes';
import { ui } from '@/lib/ui';

/**
 * Pages de premier niveau, dans les trois langues.
 *
 * Le slug est résolu via le registre `lib/routes.ts` : l’URL publique et la
 * route interne sont donc toujours identiques, sans réécriture. Un slug
 * inconnu renvoie une véritable erreur 404.
 *
 * Une route dont la version linguistique n’est pas encore publiée
 * (`livePages`) affiche une page d’attente non indexable avec un lien vers
 * l’équivalent français — jamais la démonstration du design system.
 */

const legalContentByPage: Record<'legalNotice' | 'privacy', Record<Locale, LegalPageContent>> = {
  legalNotice: { fr: legalNoticeFr, de: legalNoticeDe, en: legalNoticeEn },
  privacy: { fr: privacyFr, de: privacyDe, en: privacyEn },
};

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

  if (!isPageLive(locale, pageKey)) {
    return {
      title: ui(locale, 'pendingTitle'),
      description: ui(locale, 'pendingIntro'),
      robots: { index: false, follow: true },
      alternates: { canonical: urlFor(locale, pageKey) },
      openGraph: {
        url: urlFor(locale, pageKey),
        locale: ogLocale[locale],
      },
    };
  }

  if (pageKey === 'approach' && locale === 'fr') {
    return {
      title: approachFr.meta.title,
      description: approachFr.meta.description,
      alternates: {
        canonical: urlFor(locale, pageKey),
        languages: alternatesFor(pageKey),
      },
      openGraph: {
        url: urlFor(locale, pageKey),
        locale: ogLocale[locale],
        title: approachFr.meta.title,
        description: approachFr.meta.description,
      },
    };
  }

  if (pageKey === 'expertise' && locale === 'fr') {
    return {
      title: expertiseFr.meta.title,
      description: expertiseFr.meta.description,
      alternates: {
        canonical: urlFor(locale, pageKey),
        languages: alternatesFor(pageKey),
      },
      openGraph: {
        url: urlFor(locale, pageKey),
        locale: ogLocale[locale],
        title: expertiseFr.meta.title,
        description: expertiseFr.meta.description,
      },
    };
  }

  if (pageKey === 'work' && locale === 'fr') {
    return {
      title: workFr.meta.title,
      description: workFr.meta.description,
      alternates: {
        canonical: urlFor(locale, pageKey),
        languages: alternatesFor(pageKey),
      },
      openGraph: {
        url: urlFor(locale, pageKey),
        locale: ogLocale[locale],
        title: workFr.meta.title,
        description: workFr.meta.description,
      },
    };
  }

  if (pageKey === 'career' && locale === 'fr') {
    return {
      title: careerFr.meta.title,
      description: careerFr.meta.description,
      alternates: {
        canonical: urlFor(locale, pageKey),
        languages: alternatesFor(pageKey),
      },
      openGraph: {
        url: urlFor(locale, pageKey),
        locale: ogLocale[locale],
        title: careerFr.meta.title,
        description: careerFr.meta.description,
      },
    };
  }

  if (pageKey === 'contact' && locale === 'fr') {
    return {
      title: contactFr.meta.title,
      description: contactFr.meta.description,
      alternates: {
        canonical: urlFor(locale, pageKey),
        languages: alternatesFor(pageKey),
      },
      openGraph: {
        url: urlFor(locale, pageKey),
        locale: ogLocale[locale],
        title: contactFr.meta.title,
        description: contactFr.meta.description,
      },
    };
  }

  if (pageKey === 'legalNotice' || pageKey === 'privacy') {
    const content = legalContentByPage[pageKey][locale];
    return {
      title: content.meta.title,
      description: content.meta.description,
      alternates: {
        canonical: urlFor(locale, pageKey),
        languages: alternatesFor(pageKey),
      },
      openGraph: {
        url: urlFor(locale, pageKey),
        locale: ogLocale[locale],
        title: content.meta.title,
        description: content.meta.description,
      },
    };
  }

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

  if (!isPageLive(locale, pageKey)) {
    return <PendingPage locale={locale} pageKey={pageKey} />;
  }

  if (pageKey === 'approach' && locale === 'fr') {
    return <ApproachPage content={approachFr} locale={locale} />;
  }

  if (pageKey === 'expertise' && locale === 'fr') {
    return <ExpertisePage content={expertiseFr} locale={locale} />;
  }

  if (pageKey === 'work' && locale === 'fr') {
    return <WorkPage content={workFr} locale={locale} />;
  }

  if (pageKey === 'career' && locale === 'fr') {
    return <CareerPage content={careerFr} locale={locale} />;
  }

  if (pageKey === 'contact' && locale === 'fr') {
    return <ContactPage content={contactFr} locale={locale} />;
  }

  if (pageKey === 'legalNotice' || pageKey === 'privacy') {
    return <LegalPage content={legalContentByPage[pageKey][locale]} />;
  }

  // Une page marquée publiée sans rendu dans sa langue relève d’une
  // incohérence de registre : erreur 404 plutôt qu’un contenu provisoire.
  notFound();
}
