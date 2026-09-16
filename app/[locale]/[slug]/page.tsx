import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ApproachPage } from '@/components/sections/ApproachPage';
import { CareerPage } from '@/components/sections/CareerPage';
import { ContactPage } from '@/components/sections/ContactPage';
import { ExpertisePage } from '@/components/sections/ExpertisePage';
import { LegalPage } from '@/components/sections/LegalPage';
import { PendingPage } from '@/components/sections/PendingPage';
import { WorkPage } from '@/components/sections/WorkPage';
import { approachDe, approachEn, approachFr, type ApproachContent } from '@/content/approach';
import { careerDe, careerEn, careerFr, type CareerContent } from '@/content/career';
import { contactDe, contactEn, contactFr, type ContactContent } from '@/content/contact';
import { expertiseDe, expertiseEn, expertiseFr, type ExpertiseContent } from '@/content/expertise';
import {
  legalNoticeDe,
  legalNoticeEn,
  legalNoticeFr,
  privacyDe,
  privacyEn,
  privacyFr,
  type LegalPageContent,
} from '@/content/legal';
import { workDe, workEn, workFr, type WorkContent } from '@/content/work';
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

/** Contenus éditoriaux publiés par page et par langue (pages « live »). */
const approachContentByLocale: Record<Locale, ApproachContent> = {
  fr: approachFr,
  de: approachDe,
  en: approachEn,
};

const expertiseContentByLocale: Record<Locale, ExpertiseContent> = {
  fr: expertiseFr,
  de: expertiseDe,
  en: expertiseEn,
};

const workContentByLocale: Record<Locale, WorkContent> = {
  fr: workFr,
  de: workDe,
  en: workEn,
};

const careerContentByLocale: Record<Locale, CareerContent> = {
  fr: careerFr,
  de: careerDe,
  en: careerEn,
};

const contactContentByLocale: Record<Locale, ContactContent> = {
  fr: contactFr,
  de: contactDe,
  en: contactEn,
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

  if (pageKey === 'approach') {
    const content = approachContentByLocale[locale];
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

  if (pageKey === 'expertise') {
    const content = expertiseContentByLocale[locale];
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

  if (pageKey === 'work') {
    const content = workContentByLocale[locale];
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

  if (pageKey === 'career') {
    const content = careerContentByLocale[locale];
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

  if (pageKey === 'contact') {
    const content = contactContentByLocale[locale];
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

  if (pageKey === 'approach') {
    return <ApproachPage content={approachContentByLocale[locale]} locale={locale} />;
  }

  if (pageKey === 'expertise') {
    return <ExpertisePage content={expertiseContentByLocale[locale]} locale={locale} />;
  }

  if (pageKey === 'work') {
    return <WorkPage content={workContentByLocale[locale]} locale={locale} />;
  }

  if (pageKey === 'career') {
    return <CareerPage content={careerContentByLocale[locale]} locale={locale} />;
  }

  if (pageKey === 'contact') {
    return <ContactPage content={contactContentByLocale[locale]} locale={locale} />;
  }

  if (pageKey === 'legalNotice' || pageKey === 'privacy') {
    return <LegalPage content={legalContentByPage[pageKey][locale]} />;
  }

  // Une page marquée publiée sans rendu dans sa langue relève d’une
  // incohérence de registre : erreur 404 plutôt qu’un contenu provisoire.
  notFound();
}
