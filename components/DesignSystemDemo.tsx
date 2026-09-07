import type { Locale } from '@/lib/i18n';
import { ui } from '@/lib/ui';
import { cn } from '@/lib/utils';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { TextLink } from '@/components/ui/TextLink';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Separator } from '@/components/ui/Separator';

type Props = {
  locale: Locale;
};

export function DesignSystemDemo({ locale }: Props) {
  return (
    <>
      <Section variant="graphite">
        <div className="max-w-3xl">
          <Eyebrow className="mb-4">{ui(locale, 'demoSubtitle')}</Eyebrow>
          <h1 className="font-display text-display-xl text-foreground break-words">
            {locale === 'fr' ? (
              <>
                Démonstration
                <br className="hidden md:inline" />
                {' du design system'}
              </>
            ) : (
              <>Designsystem-Demo</>
            )}
          </h1>
          <p className="mt-10 max-w-prose text-body-lg text-muted">{ui(locale, 'demoIntro')}</p>
          <div className="mt-12 flex flex-col items-start gap-4">
            <div className="flex flex-wrap gap-4">
              <Button size="lg">{ui(locale, 'labelPrimary')}</Button>
              <Button size="lg" variant="secondary">
                {ui(locale, 'labelSecondary')}
              </Button>
            </div>
            <Button size="lg" variant="text">
              {ui(locale, 'labelText')}
            </Button>
          </div>
        </div>
      </Section>

      <Section variant="ivory">
        <SectionHeader
          eyebrow={ui(locale, 'sectionPalette')}
          title={locale === 'fr' ? 'Palette de marque' : 'Markenfarben'}
          description={
            locale === 'fr'
              ? 'Jetons sémantiques et palette de marque.'
              : 'Semantische Tokens und Markenfarben.'
          }
        />
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          <ColorSwatch name="Graphite" hex="#11100E" className="bg-graphite text-craie" />
          <ColorSwatch name="Ivoire" hex="#F4EFE6" className="bg-ivoire text-graphite" />
          <ColorSwatch name="Or" hex="#B08D57" className="bg-or text-graphite" />
          <ColorSwatch name="Taupe" hex="#8F887E" className="bg-taupe text-graphite" />
          <ColorSwatch name="Craie" hex="#F7F3EC" className="bg-craie text-graphite" />
        </div>
      </Section>

      <Section variant="craie">
        <SectionHeader
          eyebrow={ui(locale, 'sectionTypography')}
          title={locale === 'fr' ? 'Hiérarchie typographique' : 'Typografische Hierarchie'}
          description={
            locale === 'fr'
              ? 'Échelles fluides et responsive pour les titres et les corps.'
              : 'Flüssige und responsive Skalen für Überschriften und Fließtext.'
          }
        />
        <div className="mt-12 max-w-4xl space-y-10">
          <TypeSample level={1} size="display-xl" label="H1 — display-xl">
            <BilingualText fr="Titre éditorial" de="Redaktionelle Überschrift" />
          </TypeSample>
          <TypeSample level={2} size="heading-2xl" label="H2 — heading-2xl">
            <BilingualText fr="Sous-titre principal" de="Hauptuntertitel" />
          </TypeSample>
          <TypeSample level={3} size="heading-xl" label="H3 — heading-xl">
            <BilingualText fr="Section de niveau 3" de="Abschnitt dritter Ebene" />
          </TypeSample>
          <TypeSample level={4} size="heading-lg" label="H4 — heading-lg">
            <BilingualText fr="Titre de carte" de="Kartentitel" />
          </TypeSample>
          <div>
            <p className="text-caption text-muted mb-2">body-lg</p>
            <p className="text-body-lg text-foreground">
              Paragraphe de démonstration en corps 18 px avec interligne confortable. — Demo-Absatz
              in 18 px mit komfortablem Zeilenabstand.
            </p>
          </div>
          <div>
            <p className="text-caption text-muted mb-2">body</p>
            <p className="text-body text-foreground">
              Paragraphe de démonstration en corps 16 px. — Demo-Absatz in 16 px.
            </p>
          </div>
          <div>
            <p className="text-caption text-muted mb-2">body-sm</p>
            <p className="text-body-sm text-foreground">
              Paragraphe de démonstration en corps 14 px. — Demo-Absatz in 14 px.
            </p>
          </div>
          <div>
            <p className="text-caption text-muted mb-2">caption</p>
            <p className="text-caption text-muted">
              Libellé technique provisoire — Vorläufiger technischer Hinweis
            </p>
          </div>
        </div>
      </Section>

      <Section variant="ivory">
        <SectionHeader
          eyebrow={ui(locale, 'sectionButtons')}
          title={locale === 'fr' ? 'Boutons' : 'Schaltflächen'}
          description={locale === 'fr' ? 'Variantes et tailles.' : 'Varianten und Größen.'}
        />
        <div className="mt-12 flex flex-wrap gap-4">
          <Button>{ui(locale, 'labelPrimary')}</Button>
          <Button variant="secondary">{ui(locale, 'labelSecondary')}</Button>
          <Button variant="text">{ui(locale, 'labelText')}</Button>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button size="lg">{ui(locale, 'labelLarge')}</Button>
          <Button size="lg" variant="secondary">
            {ui(locale, 'labelLarge')}
          </Button>
          <Button size="lg" variant="text">
            {ui(locale, 'labelLarge')}
          </Button>
        </div>
      </Section>

      <Section variant="graphite">
        <SectionHeader
          eyebrow={ui(locale, 'sectionCards')}
          title={locale === 'fr' ? 'Cartes' : 'Karten'}
          description={
            locale === 'fr'
              ? 'Surfaces et hiérarchie d’information.'
              : 'Oberflächen und Informationshierarchie.'
          }
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card>
            <Badge className="mb-4">{ui(locale, 'labelDefault')}</Badge>
            <h3 className="font-display text-heading-md text-foreground">Carte par défaut</h3>
            <p className="mt-3 text-body text-muted">
              Description technique provisoire pour valider l’espacement et le contraste. —
              Vorläufige Beschreibung zur Validierung von Abstand und Kontrast.
            </p>
          </Card>
          <Card variant="muted">
            <Badge variant="outline" className="mb-4">
              {ui(locale, 'labelMuted')}
            </Badge>
            <h3 className="font-display text-heading-md text-foreground">Carte mutée</h3>
            <p className="mt-3 text-body text-muted">
              Variante à fond discret pour les listes et les compositions denses. — Dezente
              Hintergrundvariante.
            </p>
          </Card>
          <Card variant="outline">
            <Badge variant="accent" className="mb-4">
              {ui(locale, 'labelOutline')}
            </Badge>
            <h3 className="font-display text-heading-md text-foreground">Carte contour</h3>
            <p className="mt-3 text-body text-muted">
              Variante avec bordure fine pour créer des regroupements légers. — Variante mit feiner
              Begrenzung.
            </p>
          </Card>
        </div>
      </Section>

      <Section variant="craie">
        <SectionHeader
          eyebrow={ui(locale, 'sectionBadges')}
          title={locale === 'fr' ? 'Badges, liens et séparateurs' : 'Abzeichen, Links und Trennlinien'}
          description={
            locale === 'fr'
              ? 'Petits composants et éléments décoratifs.'
              : 'Kleine Komponenten und dekorative Elemente.'
          }
        />
        <div className="mt-12 flex flex-wrap gap-3">
          <Badge>{ui(locale, 'labelDefault')}</Badge>
          <Badge variant="outline">{ui(locale, 'labelOutline')}</Badge>
          <Badge variant="accent">{ui(locale, 'labelAccent')}</Badge>
        </div>
        <div className="mt-8 flex flex-wrap gap-6">
          <TextLink href={locale === 'fr' ? '/de' : '/fr'}>
            {locale === 'fr' ? 'Lien de démonstration' : 'Demo-Link'}
          </TextLink>
          <TextLink href={locale === 'fr' ? '/fr/contact' : '/de/kontakt'}>
            {locale === 'fr' ? 'Lien vers Contact' : 'Link zu Kontakt'}
          </TextLink>
        </div>
        <div className="mt-10 space-y-4">
          <Separator variant="default" />
          <Separator variant="accent" />
          <Separator variant="foreground" />
        </div>
      </Section>
    </>
  );
}

function ColorSwatch({ name, hex, className }: { name: string; hex: string; className?: string }) {
  return (
    <div className={cn('rounded-lg p-4 shadow-soft', className)}>
      <p className="font-body text-sm font-medium">{name}</p>
      <p className="mt-1 font-mono text-xs opacity-90">{hex}</p>
    </div>
  );
}

function BilingualText({ fr, de }: { fr: string; de: string }) {
  return (
    <>
      <span className="block sm:inline">{fr}</span>
      <span className="hidden sm:inline text-foreground/30" aria-hidden="true">
        {' / '}
      </span>
      <span className="block sm:inline">{de}</span>
    </>
  );
}

function TypeSample({
  level,
  size,
  label,
  children,
}: {
  level: 1 | 2 | 3 | 4;
  size: 'display-xl' | 'heading-2xl' | 'heading-xl' | 'heading-lg';
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-caption text-muted mb-2">{label}</p>
      <div
        role="heading"
        aria-level={level}
        className={cn('font-display text-foreground break-words', `text-${size}`)}
      >
        {children}
      </div>
    </div>
  );
}
