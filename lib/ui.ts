import type { Locale } from '@/lib/i18n';

const uiStrings = {
  fr: {
    skipLink: 'Aller au contenu',
    menuButton: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    mobileMenu: 'Menu principal',
    mainNav: 'Navigation principale',
    legalNav: 'Informations légales',
    copyright: '© {year} Frédéric Lejour',
    demoTitle: 'Démonstration du design system',
    demoSubtitle: 'Contenu provisoire — Phase 2',
    demoIntro:
      'Cette page sert à valider la direction visuelle, la hiérarchie typographique, les composants réutilisables et la navigation bilingue avant rédaction des contenus définitifs.',
    sectionPalette: 'Palette',
    sectionTypography: 'Typographie',
    sectionButtons: 'Boutons',
    sectionCards: 'Cartes',
    sectionBadges: 'Badges',
    sectionLinks: 'Liens',
    sectionSeparators: 'Séparateurs',
    sectionNavigation: 'Navigation',
    labelPrimary: 'Primaire',
    labelSecondary: 'Secondaire',
    labelText: 'Texte',
    labelLarge: 'Grand',
    labelDefault: 'Défaut',
    labelMuted: 'Muté',
    labelOutline: 'Contour',
    labelAccent: 'Accent',
    labelLight: 'Clair',
    labelDark: 'Sombre',
    labelGold: 'Or',
    labelTaupe: 'Taupe',
    labelCurrentPage: 'Page actuelle',
    wordmark: 'Frédéric Lejour',
  },
  de: {
    skipLink: 'Zum Inhalt springen',
    menuButton: 'Menü öffnen',
    menuClose: 'Menü schließen',
    mobileMenu: 'Hauptmenü',
    mainNav: 'Hauptnavigation',
    legalNav: 'Rechtliche Informationen',
    copyright: '© {year} Frédéric Lejour',
    demoTitle: 'Designsystem-Demo',
    demoSubtitle: 'Vorläufiger Inhalt — Phase 2',
    demoIntro:
      'Diese Seite dient der Validierung der visuellen Richtung, der typografischen Hierarchie, der wiederverwendbaren Komponenten und der zweisprachigen Navigation vor der Erstellung der endgültigen Inhalte.',
    sectionPalette: 'Farbpalette',
    sectionTypography: 'Typografie',
    sectionButtons: 'Schaltflächen',
    sectionCards: 'Karten',
    sectionBadges: 'Abzeichen',
    sectionLinks: 'Links',
    sectionSeparators: 'Trennlinien',
    sectionNavigation: 'Navigation',
    labelPrimary: 'Primär',
    labelSecondary: 'Sekundär',
    labelText: 'Text',
    labelLarge: 'Groß',
    labelDefault: 'Standard',
    labelMuted: 'Gedämpft',
    labelOutline: 'Umriss',
    labelAccent: 'Akzent',
    labelLight: 'Hell',
    labelDark: 'Dunkel',
    labelGold: 'Gold',
    labelTaupe: 'Taupe',
    labelCurrentPage: 'Aktuelle Seite',
    wordmark: 'Frédéric Lejour',
  },
} as const;

export type UIKey = keyof (typeof uiStrings)['fr'];

export function ui(locale: Locale, key: UIKey): string {
  return uiStrings[locale][key];
}

export function uiWithYear(locale: Locale, key: 'copyright', year: number): string {
  return uiStrings[locale][key].replace('{year}', String(year));
}
