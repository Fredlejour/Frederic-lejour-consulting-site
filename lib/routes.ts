/**
 * Registre des URL — source de vérité unique.
 *
 * Le sélecteur de langue, les balises `hreflang`, le fil d’Ariane et le
 * sitemap doivent tous dériver de ce fichier. Un slug ne peut donc pas
 * diverger d’un usage à l’autre.
 *
 * Les slugs allemands ne sont pas des traductions littérales : ils suivent
 * les usages professionnels allemands.
 */

import { defaultLocale, locales, type Locale } from './i18n';

export const SITE_URL = 'https://www.lejourconsulting.com';

export type PageKey =
  | 'home'
  | 'approach'
  | 'expertise'
  | 'work'
  | 'career'
  | 'contact'
  | 'legalNotice'
  | 'privacy';

/** Slug par langue. La chaîne vide correspond à l’accueil de la langue. */
type SlugMap = Record<Locale, string>;

export const routes: Record<PageKey, SlugMap> = {
  home: { fr: '', de: '', en: '' },
  approach: { fr: 'approche', de: 'arbeitsweise', en: 'approach' },
  expertise: { fr: 'expertises', de: 'expertise', en: 'expertise' },
  work: { fr: 'realisations', de: 'projekte', en: 'projects' },
  career: { fr: 'parcours', de: 'werdegang', en: 'career' },
  contact: { fr: 'contact', de: 'kontakt', en: 'contact' },
  legalNotice: { fr: 'mentions-legales', de: 'impressum', en: 'legal-notice' },
  privacy: { fr: 'confidentialite', de: 'datenschutz', en: 'privacy' },
};

export const pageKeys = Object.keys(routes) as PageKey[];

/** Libellés de navigation par clé de page et par langue. */
export const routeLabels: Record<PageKey, Record<Locale, string>> = {
  home: { fr: 'Accueil', de: 'Startseite', en: 'Home' },
  approach: { fr: 'Approche', de: 'Arbeitsweise', en: 'Approach' },
  expertise: { fr: 'Expertises', de: 'Expertise', en: 'Expertise' },
  work: { fr: 'Réalisations', de: 'Projekte', en: 'Projects' },
  career: { fr: 'Parcours', de: 'Werdegang', en: 'Career' },
  contact: { fr: 'Contact', de: 'Kontakt', en: 'Contact' },
  legalNotice: { fr: 'Mentions légales', de: 'Impressum', en: 'Legal notice' },
  privacy: { fr: 'Confidentialité', de: 'Datenschutz', en: 'Privacy policy' },
};

/** Pages affichées dans la navigation principale. */
export const mainNavKeys: PageKey[] = [
  'home',
  'approach',
  'expertise',
  'work',
  'career',
  'contact',
];

/** Pages affichées dans le pied de page (informations légales). */
export const footerNavKeys: PageKey[] = ['legalNotice', 'privacy'];

/**
 * Pages réellement publiées, par langue — source de vérité de disponibilité.
 *
 * Toute route non listée affiche une page d’attente (`PendingPage`), est
 * exclue du sitemap et n’est pas déclarée dans les alternates `hreflang`.
 * Activer une page revient à l’ajouter ici une fois son contenu validé,
 * sans supprimer les contenus de travail.
 */
export const livePages: Record<Locale, PageKey[]> = {
  fr: pageKeys,
  de: ['home', 'legalNotice', 'privacy'],
  en: ['legalNotice', 'privacy'],
};

/** Indique si une page est réellement publiée dans une langue. */
export function isPageLive(locale: Locale, key: PageKey): boolean {
  return livePages[locale].includes(key);
}

/** Chemin absolu d’une page, avec préfixe de langue. */
export function pathFor(locale: Locale, key: PageKey, childSlug?: string): string {
  const slug = routes[key][locale];
  const segments = [locale, slug, childSlug].filter((s): s is string => Boolean(s));
  return `/${segments.join('/')}`;
}

/** URL absolue, pour les balises canonical, hreflang et le sitemap. */
export function urlFor(locale: Locale, key: PageKey, childSlug?: string): string {
  const path = pathFor(locale, key, childSlug);
  return `${SITE_URL}${path === `/${locale}` ? `/${locale}/` : path}`;
}

/**
 * Alternates d’une page, pour l’API `metadata` de Next.js.
 * Inclut `x-default`, qui pointe sur la langue par défaut.
 *
 * Seules les versions réellement publiées (`livePages`) sont déclarées :
 * une page d’attente n’est jamais présentée comme une traduction complète.
 */
export function alternatesFor(key: PageKey, childSlug?: string) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    if (!isPageLive(locale, key)) continue;
    languages[locale] = urlFor(locale, key, childSlug);
  }
  languages['x-default'] = urlFor(defaultLocale, key, childSlug);
  return languages;
}

/**
 * Chemin équivalent dans l’autre langue, pour le sélecteur `FR | DE`.
 * Le visiteur reste sur la page équivalente.
 */
export function switchLocalePath(target: Locale, key: PageKey, childSlug?: string): string {
  return pathFor(target, key, childSlug);
}

/** Retrouve la clé de page à partir d’un slug et d’une langue. */
export function pageKeyFromSlug(locale: Locale, slug: string): PageKey | null {
  return pageKeys.find((key) => routes[key][locale] === slug) ?? null;
}

/**
 * Slugs des études de cas, par langue.
 *
 * Volontairement **vide** en Phase 1 : aucune réalisation ne sera déclarée
 * avant que son contenu ait été fourni et validé (Phase 3 pour le français,
 * Phase 5 pour l’allemand). Tant que cette liste est vide, toute URL de
 * détail renvoie une véritable erreur 404.
 */
export const caseStudySlugs: SlugMap[] = [];

/** Retrouve une étude de cas à partir d’un slug et d’une langue. */
export function caseStudyFromSlug(locale: Locale, slug: string): SlugMap | null {
  return caseStudySlugs.find((entry) => entry[locale] === slug) ?? null;
}

/**
 * Calcule le chemin équivalent dans une autre langue à partir du pathname
 * courant. utilisé par le sélecteur de langue côté client.
 */
export function switchLocalePathFromPathname(
  currentLocale: Locale,
  target: Locale,
  pathname: string
): string {
  const rest = pathname.replace(`/${currentLocale}`, '').replace(/^\//, '');
  const segments = rest.split('/').filter(Boolean);

  if (segments.length === 0) return pathFor(target, 'home');

  const [slug, childSlug] = segments;
  const pageKey = pageKeyFromSlug(currentLocale, slug);

  if (!pageKey) return `/${target}`;

  if (childSlug) {
    const entry = caseStudyFromSlug(currentLocale, childSlug);
    if (entry) return pathFor(target, pageKey, entry[target]);
    // Si l’étude de cas n’est pas mappée, on retombe sur la page parente.
    return pathFor(target, pageKey);
  }

  return pathFor(target, pageKey);
}
