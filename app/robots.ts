import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/routes';

/**
 * `robots.txt` du site, servi à `/robots.txt`.
 *
 * Exploration libre des pages publiques ; les routes techniques `/api/*`
 * sont exclues de l'indexation. L'URL absolue du sitemap utilise le domaine
 * canonique de production.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
