'use client';

import { Target, Users, Handshake, Scale } from 'lucide-react';
import { expertiseFr, type ExpertiseContent } from '@/content/expertise';
import { type Locale } from '@/lib/i18n';
import { pathFor } from '@/lib/routes';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';

export { type ExpertiseContent };

type PageProps = {
  locale: Locale;
  content: ExpertiseContent;
};

/**
 * Page Expertises (/fr/expertises).
 *
 * Cinq sections : Hero, Domaines, Situations, Compétences, CTA.
 * Le composant est volontairement distinct de la page Approche : aucune
 * répétition de la méthode, aucune opposition Humain / Technologie.
 */
export function ExpertisePage({ content, locale }: PageProps) {
  return (
    <>
      <ExpertiseHero content={content.hero} />
      <ExpertiseDomains content={content.domains} />
      <ExpertiseSituations content={content.situations} />
      <ExpertiseSkills content={content.skills} />
      <ExpertiseCta content={content.cta} locale={locale} />
    </>
  );
}

/* ───────────────────────────────────────── Hero ───────────────────────────────────────── */

function ExpertiseHero({ content }: { content: ExpertiseContent['hero'] }) {
  return (
    <Section variant="graphite" className="pb-24 pt-28 md:pb-32 md:pt-40">
      <div className="max-w-5xl">
        <Eyebrow className="lc-enter lc-enter-1 mb-8">{content.eyebrow}</Eyebrow>

        <h1 className="lc-enter lc-enter-2 font-display text-display-md text-foreground text-balance">
          <span className="block xl:whitespace-nowrap">{content.title[0]}</span>
          <span className="block text-accent xl:whitespace-nowrap">{content.title[1]}</span>
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

/* ──────────────────────────────────────── Domaines ──────────────────────────────────────── */

function DomainIcon({ title }: { title: string }) {
  const className = 'h-5 w-5 text-accent';
  if (title.includes('opportunités')) return <Target className={className} strokeWidth={1.5} />;
  if (title.includes('comptes')) return <Users className={className} strokeWidth={1.5} />;
  if (title.includes('partenariats')) return <Handshake className={className} strokeWidth={1.5} />;
  return <Scale className={className} strokeWidth={1.5} />;
}

function ExpertiseDomains({ content }: { content: ExpertiseContent['domains'] }) {
  return (
    <Section variant="silk">
      <Reveal>
        <SectionHeader eyebrow={content.eyebrow} title={content.title} description={content.intro} />
      </Reveal>

      <div
        className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        data-stagger="items"
      >
        {content.items.map((domain) => (
          <Reveal
            key={domain.step}
            className="group relative border-t border-border bg-surface px-6 py-8 transition-colors hover:bg-foreground/[0.02] md:px-8 md:py-10"
          >
            <div className="flex items-start justify-between gap-4">
              <span
                className="font-display text-6xl leading-none text-foreground/[0.08]"
                aria-hidden="true"
              >
                {domain.step}
              </span>
              <DomainIcon title={domain.title} />
            </div>

            <div className="mt-8">
              <h3 className="font-display text-heading-md text-foreground">{domain.title}</h3>
              <p className="mt-4 text-body-base text-muted">{domain.description}</p>
              <p className="mt-6 text-caption uppercase tracking-wider text-accent/80">
                {domain.tags}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────────────────────── Situations ───────────────────────────────────── */

function ExpertiseSituations({ content }: { content: ExpertiseContent['situations'] }) {
  return (
    <Section variant="ivory">
      <Reveal>
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.intro}
        />
      </Reveal>

      <div
        className="mt-16 grid gap-0 divide-y divide-border border-t border-border"
        data-stagger="items"
      >
        {content.items.map((situation) => (
          <Reveal
            key={situation.step}
            className="grid gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-12"
          >
            <div className="md:col-span-3 lg:col-span-2">
              <span className="font-display text-5xl leading-none text-accent/60 md:text-6xl">
                {situation.step}
              </span>
            </div>
            <div className="md:col-span-9 lg:col-span-10">
              <h3 className="font-display text-heading-md text-foreground">
                {situation.title}
              </h3>
              <p className="mt-4 max-w-3xl text-body-lg text-muted">
                {situation.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────────────────────── Compétences ───────────────────────────────────── */

function ExpertiseSkills({ content }: { content: ExpertiseContent['skills'] }) {
  return (
    <Section variant="craie">
      <Reveal>
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.intro}
        />
      </Reveal>

      <div
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        data-stagger="items"
      >
        {content.items.map((skill) => (
          <Reveal
            key={skill.title}
            className="border-l-2 border-accent/40 bg-surface/50 px-6 py-8 md:px-8"
          >
            <h3 className="font-display text-heading-sm text-foreground">{skill.title}</h3>
            <p className="mt-4 text-body-base text-muted">{skill.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ──────────────────────────────────────── CTA ──────────────────────────────────────── */

function ExpertiseCta({
  content,
  locale,
}: {
  content: ExpertiseContent['cta'];
  locale: Locale;
}) {
  return (
    <Section variant="graphite">
      <Reveal className="text-center">
        <h2 className="mx-auto max-w-3xl font-display text-heading-2xl text-foreground text-balance">
          {content.title}
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-body-lg text-muted">{content.text}</p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink size="lg" href={pathFor(locale, 'contact')}>
            {content.primaryCta}
          </ButtonLink>
          <ButtonLink size="lg" variant="secondary" href={pathFor(locale, 'approach')}>
            {content.secondaryCta}
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
