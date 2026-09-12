import { Manrope, Sora } from 'next/font/google';

/**
 * Système typographique — direction A.
 *
 * Sora en titrage : géométrique contemporaine, plage 100–800, adaptée aux
 * environnements Tech/SaaS et au positionnement performance.
 *
 * Manrope en texte courant et interface : humaniste à hauteur d'x généreuse,
 * chaleureuse et lisible à toutes les tailles.
 */
export const fontDisplay = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: 'variable',
  adjustFontFallback: false,
});

export const fontBody = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: 'variable',
  adjustFontFallback: false,
});
