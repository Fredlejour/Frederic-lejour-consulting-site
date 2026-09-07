/**
 * Langues du site.
 *
 * Le site est intégralement bilingue : chaque page existe réellement en
 * français et en allemand, sous des URL distinctes. `x-default` pointe sur
 * le français.
 */

export const locales = ['fr', 'de'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

/** Valeur de l'attribut `lang` de `<html>`. */
export const htmlLang: Record<Locale, string> = {
  fr: 'fr',
  de: 'de',
};

/** Valeur `og:locale`. */
export const ogLocale: Record<Locale, string> = {
  fr: 'fr_FR',
  de: 'de_DE',
};

/** Libellé du sélecteur de langue. Jamais de drapeau : uniquement du texte. */
export const localeLabel: Record<Locale, string> = {
  fr: 'FR',
  de: 'DE',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Détermine la langue à servir à partir d'un en-tête `Accept-Language`.
 *
 * Utilisé uniquement pour rediriger la racine `/`. Cette détection ne doit
 * jamais empêcher l'accès direct à `/fr/` ou `/de/`, ni pour un visiteur ni
 * pour un robot d'indexation.
 */
export function matchLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      const quality = q ? Number.parseFloat(q.trim().slice(2)) : 1;
      return { tag: tag.trim().toLowerCase(), quality: Number.isNaN(quality) ? 0 : quality };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    const base = tag.split('-')[0];
    if (isLocale(base)) return base;
  }

  return defaultLocale;
}
