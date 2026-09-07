import type { Config } from 'tailwindcss';

/**
 * Phase 1 — plomberie uniquement.
 *
 * Seuls les jetons de couleur validés sont déclarés ici. Aucune police,
 * aucun composant, aucune échelle typographique : le design system
 * « Autorité chaleureuse » sera construit en Phase 2.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: '#11100E',
        ivoire: '#F4EFE6',
        or: '#B08D57',
        taupe: '#8F887E',
        craie: '#FBFAF7',
      },
    },
  },
  plugins: [],
};

export default config;
