'use client';

import {
  BadgeCheck,
  BadgeEuro,
  Building2,
  Gem,
  Globe2,
  Lightbulb,
  MapPin,
  MonitorSmartphone,
} from 'lucide-react';
import { type WorkCase, type WorkContent, type WorkIcon } from '@/content/work';
import { type Locale } from '@/lib/i18n';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

export { type WorkContent };

type PageProps = {
  locale: Locale;
  content: WorkContent;
};

/**
 * Page Réalisations (/fr/realisations).
 *
 * Trois sections : Hero, six réalisations détaillées, CTA final.
 * Chaque réalisation juxtapose un récit éditorial et un panneau de preuve.
 */
export function WorkPage({ content }: PageProps) {
  return (
    <>
      <WorkHero content={content.hero} />
      {content.items.map((item, index) => (
        <WorkItem key={item.step} item={item} index={index} />
      ))}
      <WorkCta content={content.cta} />
    </>
  );
}

/* ───────────────────────────────────────── Hero ───────────────────────────────────────── */

function WorkHero({ content }: { content: WorkContent['hero'] }) {
  return (
    <Section variant="graphite" className="pb-24 pt-28 md:pb-32 md:pt-40">
      <div className="max-w-5xl">
        <Eyebrow className="lc-enter lc-enter-1 mb-8">{content.eyebrow}</Eyebrow>

        <h1 className="lc-enter lc-enter-2 font-display text-display-lg text-foreground text-balance">
          <span className="block xl:whitespace-nowrap">{content.title[0]}</span>
          <span className="block xl:whitespace-nowrap">{content.title[1]}</span>
          <span className="block text-accent xl:whitespace-nowrap">{content.title[2]}</span>
        </h1>

        <div className="lc-enter lc-enter-3 mt-12 max-w-2xl space-y-6 text-body-lg text-muted">
          {content.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ──────────────────────────────────────── Icônes ──────────────────────────────────────── */

const workIcons: Record<
  WorkIcon,
  React.ComponentType<{ className?: string; strokeWidth?: number | string }>
> = {
  Building2,
  Lightbulb,
  MonitorSmartphone,
  MapPin,
  BadgeEuro,
  Globe2,
};

function WorkIcon({ name }: { name: WorkIcon }) {
  const Icon = workIcons[name];
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/50">
      <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
    </span>
  );
}

/* ──────────────────────────────────── Réalisations ──────────────────────────────────── */

const sectionVariants: Array<'ivory' | 'silk' | 'pearl' | 'craie'> = [
  'ivory',
  'silk',
  'pearl',
  'craie',
  'ivory',
  'silk',
];

/**
 * Nombre de colonnes de la grille de statistiques selon le nombre de modules :
 * une colonne sur très petit écran, deux dès `xs`, trois à partir de `sm`
 * uniquement quand le nombre de modules s'y prête (3 ou 5 → 3 + 2).
 */
const statsGridClass: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 xs:grid-cols-2',
  3: 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3',
  4: 'grid-cols-1 xs:grid-cols-2',
  5: 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3',
};

function WorkItem({ item, index }: { item: WorkCase; index: number }) {
  const variant = sectionVariants[index % sectionVariants.length];

  return (
    <Section variant={variant}>
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* 1. Numéro et titre */}
          <div className="flex items-baseline gap-4 lg:col-span-12">
            <span
              className="font-display text-6xl leading-none text-foreground/[0.08] md:text-7xl"
              aria-hidden="true"
            >
              {item.step}
            </span>
            <h2 className="font-display text-heading-xl text-foreground">{item.title}</h2>
          </div>

          {/* 2. Icône et accroche */}
          <div className="lg:col-span-12">
            <div className="flex items-center gap-3">
              <WorkIcon name={item.icon} />
              <p className="font-display text-heading-md text-accent">{item.hook}</p>
            </div>
          </div>

          {/* 3. Bloc VALEUR CRÉÉE */}
          <div className="lg:col-span-12">
            <div className="border-l-2 border-accent bg-graphite px-5 py-4 md:px-6 md:py-5">
              <div className="flex items-center gap-2 text-accent">
                <Gem className="h-4 w-4" strokeWidth={1.5} />
                <span className="text-caption font-semibold uppercase tracking-wider">
                  Valeur créée
                </span>
              </div>
              <p className="mt-2 max-w-4xl font-display text-heading-md text-craie md:mt-3 md:text-heading-lg">
                {item.valueCreated}
              </p>
            </div>
          </div>

          {/* 4. Explication */}
          <div className="space-y-6 text-body text-muted lg:col-span-7">
            {item.context.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* 5. Résultats */}
          <div className="lg:col-span-5">
            <WorkResults item={item} />
          </div>

          {/* 6. Compétences démontrées sur toute la largeur */}
          <div className="border-t border-border pt-8 lg:col-span-12">
            <p className="text-caption font-medium uppercase tracking-wider text-muted">
              Expertises démontrées
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.demonstrated.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border border-border bg-surface/60 px-3 py-1.5 text-body-sm text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function WorkResults({ item }: { item: WorkCase }) {
  const statsGrid = statsGridClass[item.stats.length] ?? 'grid-cols-1 xs:grid-cols-2';

  return (
    <div>
      <div className="flex items-center gap-3 text-muted">
        <span className="lc-rule h-px w-6 bg-accent" aria-hidden="true" />
        <span className="text-caption font-medium uppercase tracking-wider">Résultats</span>
      </div>

      {item.stats.length > 0 ? (
        <div data-stagger className={`mt-6 grid gap-x-6 gap-y-6 ${statsGrid}`}>
          {item.stats.map((stat) => (
            <div key={stat.label} className="min-w-0 border-t-2 border-accent pt-3">
              <span className="block break-words font-display text-2xl text-accent md:text-3xl">
                {stat.figure}
              </span>
              <span className="mt-1 block break-words text-body-sm text-muted">
                {stat.label}
              </span>
              {stat.note ? (
                <span className="mt-1 block text-caption text-muted/80">{stat.note}</span>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      {item.outcomes.length > 0 ? (
        <ul className="mt-6 space-y-3">
          {item.outcomes.map((outcome) => (
            <li key={outcome.text} className="flex items-start gap-2.5">
              <BadgeCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                strokeWidth={1.5}
              />
              <span className="min-w-0 break-words text-body-sm text-foreground">
                {outcome.text}
                {outcome.detail ? (
                  <span className="text-muted"> — {outcome.detail}</span>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      {item.resultsNote ? (
        <p className="mt-6 border-t border-border pt-3 text-caption text-muted">
          {item.resultsNote}
        </p>
      ) : null}
    </div>
  );
}

/* ──────────────────────────────────────── CTA ──────────────────────────────────────── */

function WorkCta({ content }: { content: WorkContent['cta'] }) {
  const [line1, line2] = content.title.split('. ');

  return (
    <Section variant="graphite">
      <Reveal className="text-center">
        <h2 className="mx-auto max-w-3xl font-display text-heading-2xl text-foreground text-balance">
          <span className="block">{line1}.</span>
          <span className="block text-accent">{line2}</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-body-lg text-muted">{content.text}</p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink size="lg" href={content.primaryHref}>
            {content.primaryCta}
          </ButtonLink>
          <ButtonLink size="lg" variant="secondary" href={content.secondaryHref}>
            {content.secondaryCta}
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
