import type { Config } from 'tailwindcss';

/**
 * Phase 2 — design system « Autorité chaleureuse ».
 *
 * Les jetons de couleur, de typographie et d’espacement sont déclarés ici.
 * Les couleurs sémantiques (`background`, `foreground`, `accent`, etc.)
 * pointent vers des variables CSS définies dans `app/globals.css`, ce qui
 * permet de basculer entre les ambiances claire (`theme-ivory`) et sombre
 * (`theme-graphite`) sans recourir à des valeurs codées en dur dans les
 * composants.
 *
 * Objectif de contraste : WCAG 2.1 AA pour les textes courants et les
 * composants d’interface.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette de marque
        graphite: '#11100E',
        ivoire: '#F4EFE6',
        or: '#B08D57',
        taupe: '#8F887E',
        craie: '#F7F3EC',

        // Sémantiques (alternables par section)
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        focus: 'var(--color-focus)',
        'accent-foreground': 'var(--color-accent-foreground)',

        // Fonctionnels
        success: '#4A7C59',
        error: '#9B2C2C',
        warning: '#B45309',
        info: '#1E40AF',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Sora', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Sora en titrage : géométrique contemporaine, graisses 600/700 pour
        // un rendu puissant et crédible, sans l’esthétique luxe de Bodoni Moda.
        'display-xl': ['clamp(2.5rem, 7vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['clamp(2rem, 5.5vw, 3.9rem)', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-md': ['clamp(2.25rem, 4vw, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'heading-2xl': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-xl': ['clamp(1.625rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-lg': ['clamp(1.375rem, 2.25vw, 1.875rem)', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-md': ['clamp(1.125rem, 1.75vw, 1.5rem)', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-sm': ['1.0625rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em', fontWeight: '500' }],
      },
      maxWidth: {
        container: '80rem',
        narrow: '60rem',
        prose: '70ch',
      },
      spacing: {
        section: 'clamp(4rem, 8vw, 8rem)',
      },
      borderRadius: {
        xs: '0.125rem',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(17, 16, 14, 0.08)',
        medium: '0 8px 32px -10px rgba(17, 16, 14, 0.12)',
        strong: '0 12px 48px -12px rgba(17, 16, 14, 0.16)',
      },
      transitionDuration: {
        150: '150ms',
        250: '250ms',
        400: '400ms',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      zIndex: {
        skip: '9999',
        nav: '50',
        overlay: '40',
      },
      screens: {
        xs: '390px',
        wide: '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
