import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { isPageLive, pageKeys, urlFor } from '@/lib/routes';

/**
 * Sitemap XML du site, servi à `/sitemap.xml`.
 *
 * Toutes les URL proviennent du registre `lib/routes.ts` via `urlFor` —
 * aucun slug n'est dupliqué ici, et le domaine est le domaine canonique de
 * production. Seules les pages réellement publiées (`livePages`) figurent
 * dans le sitemap : les pages d’attente en sont exclues. Aucune route
 * technique ni API n'y figure.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pageKeys.flatMap((key) =>
    locales
      .filter((locale) => isPageLive(locale, key))
      .map((locale) => {
        const isLegal = key === 'legalNotice' || key === 'privacy';
        return {
          url: urlFor(locale, key),
          lastModified,
          changeFrequency: (isLegal ? 'yearly' : 'monthly') as 'yearly' | 'monthly',
          priority: key === 'home' ? 1 : isLegal ? 0.3 : 0.8,
        };
      })
  );
}
