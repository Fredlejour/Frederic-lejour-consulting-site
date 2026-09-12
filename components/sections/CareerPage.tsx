import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { type CareerContent } from '@/content/career';
import { type Locale } from '@/lib/i18n';
import { pathFor } from '@/lib/routes';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';

export { type CareerContent };

type PageProps = {
  locale: Locale;
  content: CareerContent;
};

/**
 * Page Parcours (/fr/parcours).
 *
 * Huit sections : Hero, fil conducteur, trajectoire + phrase manifeste,
 * quatre chapitres, combinaisons, repères, conclusion avec liens
 * éditoriaux, CTA. Lecture éditoriale de la trajectoire — volontairement
 * sans frise chronologique ni présentation type CV : aucune date n’est
 * encore vérifiée (content/CHRONOLOGIE.md).
 */
export function CareerPage({ locale, content }: PageProps) {
  return (
    <>
      <CareerHero content={content.hero} />
      <CareerThread content={content.thread} />
      <CareerChapters content={content.chapters} />
      <CareerCombinations content={content.combinations} />
      <CareerLandmarks content={content.landmarks} />
      <CareerPositioning locale={locale} content={content.positioning} />
      <CareerCta locale={locale} content={content.cta} />
    </>
  );
}

/* ───────────────────────────────────────── Hero ───────────────────────────────────────── */

function CareerHero({ content }: { content: CareerContent['hero'] }) {
  return (
    <Section variant="graphite" className="pb-24 pt-28 md:pb-32 md:pt-40">
      <div className="max-w-5xl">
        <Eyebrow className="lc-enter lc-enter-1 mb-8">{content.eyebrow}</Eyebrow>

        <h1 className="lc-enter lc-enter-2 font-display text-display-lg text-foreground text-balance">
          <span className="block lg:whitespace-nowrap">{content.title[0]}</span>
          <span className="block lg:whitespace-nowrap">{content.title[1]}</span>
          <span className="block text-accent lg:whitespace-nowrap">{content.title[2]}</span>
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

/* ───────────────────────────────────── Fil conducteur ──────────────────────────────────── */

function CareerThread({ content }: { content: CareerContent['thread'] }) {
  return (
    <Section variant="ivory">
      <Reveal>
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.intro}
        />
      </Reveal>

      <div className="mt-14 grid gap-10 md:grid-cols-3" data-stagger>
        {content.verbs.map((verb) => (
          <div key={verb.word}>
            <span className="block h-0.5 w-10 bg-accent" aria-hidden="true" />
            <h3 className="mt-5 font-display text-heading-xl uppercase tracking-tight text-foreground">
              {verb.word}
            </h3>
            <p className="mt-3 text-body text-muted">{verb.explanation}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────── Trajectoire + quatre chapitres ────────────────────────────── */

function CareerChapters({ content }: { content: CareerContent['chapters'] }) {
  return (
    <Section variant="pearl">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <Eyebrow className="mb-4">{content.eyebrow}</Eyebrow>
          <h2 className="font-display text-heading-2xl text-foreground text-balance">
            {content.title}
          </h2>
        </Reveal>

        <Reveal variant="scale" className="lg:col-span-6 lg:self-end">
          <p className="border-l-2 border-accent pl-6 font-display text-heading-2xl text-foreground">
            {content.manifesto.lines.map((line) => {
              const highlight = content.manifesto.highlight;
              const index = highlight ? line.indexOf(highlight) : -1;
              return (
                <span key={line} className="block">
                  {index >= 0 && highlight ? (
                    <>
                      {line.slice(0, index)}
                      <span className="text-accent">
                        {line.slice(index, index + highlight.length)}
                      </span>
                      {line.slice(index + highlight.length)}
                    </>
                  ) : (
                    line
                  )}
                </span>
              );
            })}
          </p>
        </Reveal>
      </div>

      <div
        className="mt-14 divide-y divide-border border-t border-border"
        data-stagger
        role="list"
      >
        {content.items.map((chapter) => (
          <div
            key={chapter.step}
            className="grid gap-8 py-10 md:grid-cols-12 md:py-12"
            role="listitem"
          >
            <div className="md:col-span-2">
              <span
                className="font-display text-5xl leading-none text-accent/60 md:text-6xl"
                aria-hidden="true"
              >
                {chapter.step}
              </span>
            </div>

            <div className="md:col-span-6">
              <p className="text-caption font-medium uppercase tracking-widest text-accent">
                {chapter.environment}
              </p>
              <h3 className="mt-3 font-display text-heading-md text-foreground">
                {chapter.title}
              </h3>
              <div className="mt-4 max-w-3xl space-y-4 text-body text-muted">
                {chapter.narrative.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="border-l-2 border-accent pl-5 md:col-span-4 lg:border-l lg:border-border lg:pl-8">
              <p className="text-caption font-medium uppercase tracking-wider text-accent">
                Ce que j’en ai retenu
              </p>
              <ul className="mt-4 space-y-2.5">
                {chapter.retained.map((item) => (
                  <li key={item} className="break-words text-body-sm text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────────── Combinaisons d’expériences ────────────────────────────── */

function CareerCombinations({ content }: { content: CareerContent['combinations'] }) {
  return (
    <Section variant="silk">
      <Reveal>
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={
            <>
              <span className="block">{content.intro.first}</span>
              <span className="mt-1.5 block font-medium text-foreground md:whitespace-nowrap">
                {content.intro.emphasis}
              </span>
            </>
          }
        />
      </Reveal>

      <div className="mt-14">
        {/* En-têtes de lecture — visibles uniquement quand les colonnes existent */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-6" aria-hidden="true">
          <div className="md:col-span-1" />
          <p className="text-caption font-medium uppercase tracking-widest text-muted md:col-span-5">
            Expériences mobilisées
          </p>
          <p className="text-caption font-medium uppercase tracking-widest text-muted md:col-span-6">
            Capacité construite
          </p>
        </div>

        <div
          className="mt-4 divide-y divide-border border-t border-border md:mt-6"
          data-stagger
          role="list"
        >
          {content.items.map((combination, index) => (
            <div
              key={combination.outcome}
              className="grid gap-3 py-6 md:grid-cols-12 md:items-baseline md:gap-6 md:py-8"
              role="listitem"
            >
              <span
                className="font-display text-heading-sm text-accent/60 md:col-span-1"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <p className="text-body-lg text-muted md:col-span-4">
                {combination.inputs[0]}
                <span className="px-2 font-display text-accent" aria-hidden="true">
                  +
                </span>
                {combination.inputs[1]}
              </p>

              <div
                className="text-accent md:col-span-1 md:flex md:justify-center"
                aria-hidden="true"
              >
                <ArrowRight className="hidden h-5 w-5 md:block" />
                <ArrowDown className="h-5 w-5 md:hidden" />
              </div>

              <h3 className="font-display text-heading-md text-foreground md:col-span-3">
                {combination.outcome}
              </h3>

              <p className="break-words text-body-sm text-muted md:col-span-3">
                {combination.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────── Repères ───────────────────────────────────────── */

function CareerLandmarks({ content }: { content: CareerContent['landmarks'] }) {
  return (
    <Section variant="craie">
      <Reveal>
        <SectionHeader eyebrow={content.eyebrow} title={content.title} />

        <div
          className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 xs:grid-cols-2 lg:grid-cols-4"
          data-stagger
        >
          {content.items.map((item) => (
            <div key={item.label} className="min-w-0 border-t border-accent pt-4">
              <span className="block break-words font-display text-2xl text-accent md:text-3xl">
                {item.figure}
              </span>
              <span className="mt-2 block break-words text-body-sm text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* ───────────────────────────── Conclusion + accès éditoriaux ───────────────────────────── */

function CareerPositioning({
  locale,
  content,
}: {
  locale: Locale;
  content: CareerContent['positioning'];
}) {
  return (
    <Section variant="ivory">
      <Reveal>
        <SectionHeader title={content.title} description={content.text} size="large" />
      </Reveal>

      <Reveal className="mt-16 md:mt-20">
        <Eyebrow className="mb-4">{content.personas.eyebrow}</Eyebrow>
        <h3 className="font-display text-heading-xl text-foreground">
          {content.personas.title}
        </h3>
        <p className="mt-4 max-w-2xl text-body text-muted">{content.personas.intro}</p>

        <div className="mt-10 grid gap-x-10 gap-y-12 md:mt-12 md:grid-cols-2" data-stagger>
          {content.personas.items.map((persona) => (
            <div key={persona.market} className="min-w-0 border-t border-accent pt-5">
              <p className="text-caption font-medium uppercase tracking-widest text-accent">
                {persona.market}
              </p>
              <p className="mt-4 break-words text-body text-foreground">
                {persona.situation}
              </p>
              <p className="mt-5 text-caption font-medium uppercase tracking-wider text-muted">
                {content.personas.contributionLabel}
              </p>
              <p className="mt-2 break-words text-body-sm font-medium text-foreground">
                {persona.contribution}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <p className="mt-16 text-caption font-medium uppercase tracking-widest text-muted md:mt-20">
        {content.relatedLabel}
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10" data-stagger>
        {content.related.map((page) => (
          <Link
            key={page.pageKey}
            href={pathFor(locale, page.pageKey)}
            className="group block border-t-2 border-accent/40 pt-5 transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            <span className="flex items-center justify-between gap-3">
              <span className="text-caption font-medium uppercase tracking-widest text-foreground">
                {page.label}
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-accent transition-transform duration-250 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
            <span className="mt-3 block text-body-sm text-muted">{page.description}</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────────────────────────── CTA ─────────────────────────────────────────── */

function CareerCta({
  locale,
  content,
}: {
  locale: Locale;
  content: CareerContent['cta'];
}) {
  return (
    <Section variant="graphite">
      <Reveal className="text-center">
        <h2 className="mx-auto max-w-3xl font-display text-heading-2xl text-foreground text-balance">
          {content.title}
        </h2>

        <div className="mt-12">
          <ButtonLink size="lg" href={pathFor(locale, 'contact')}>
            {content.primaryCta}
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
