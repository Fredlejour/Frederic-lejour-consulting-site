import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import type { ApproachContent } from '@/content/approach';
import type { Locale } from '@/lib/i18n';
import { pathFor } from '@/lib/routes';
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, BrainCircuit, Ear, Eye, Handshake, PanelsTopLeft, RefreshCw, ScanSearch, Search, SlidersHorizontal, Target, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type PageProps = {
  locale: Locale;
  content: ApproachContent;
};

/**
 * Page Approche (/fr/approche).
 *
 * Huit sections composent la page. Tous les sous-composants sont internes à
 * ce fichier pour respecter la décision de ne pas multiplier les fichiers.
 * Chaque section réutilise `Section`, les ambiances du design system, `Reveal`
 * et les classes d’animation existantes.
 */
export function ApproachPage({ locale, content }: PageProps) {
  return (
    <>
      <ApproachHero content={content.hero} />
      <ApproachReality content={content.reality} />
      <ApproachConviction content={content.conviction} />
      <ApproachSteps content={content.steps} />
      <ApproachExecution content={content.execution} />
      <ApproachTechnology content={content.technology} />
      <ApproachLimits content={content.limits} />
      <ApproachCta locale={locale} content={content.cta} />
    </>
  );
}

function ApproachHero({ content }: { content: ApproachContent['hero'] }) {
  return (
    <Section variant="graphite">
      <div className="max-w-5xl">
        <Eyebrow className="lc-enter lc-enter-1 mb-6">{content.eyebrow}</Eyebrow>

        <h1 className="lc-enter lc-enter-2 font-display text-display-md text-foreground text-balance">
          <span className="block xl:whitespace-nowrap">{content.title[0]}</span>
          <span className="block text-accent xl:whitespace-nowrap">{content.title[1]}</span>
        </h1>

        <div className="lc-enter lc-enter-3 mt-10 max-w-prose space-y-6 text-body-lg text-muted">
          {content.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ApproachReality({ content }: { content: ApproachContent['reality'] }) {
  return (
    <Section variant="ivory">
      <Reveal>
        <Eyebrow className="mb-4">{content.eyebrow}</Eyebrow>

        <h2 className="font-display text-heading-2xl text-foreground text-balance">
          {content.title}
        </h2>

        <div className="mt-10 max-w-prose space-y-6 text-body-lg text-muted">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

const stepIcons: Record<string, LucideIcon> = {
  Observer: Eye,
  Apprendre: BookOpen,
  Adapter: SlidersHorizontal,
  Développer: ArrowUpRight,
};

function ApproachConviction({ content }: { content: ApproachContent['conviction'] }) {
  return (
    <Section variant="ivory">
      <Reveal>
        <Eyebrow className="mb-4">{content.eyebrow}</Eyebrow>

        <h2 className="font-display text-heading-2xl text-foreground text-balance">
          {content.title}
        </h2>

        <div className="mt-10 max-w-prose space-y-6 text-body-lg text-muted">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div
          className="mt-12 flex flex-col items-stretch md:flex-row md:items-stretch gap-2 md:gap-0"
          data-stagger="process"
          role="list"
        >
          {content.verbs
            .map((verb, index) => {
              const StepIcon = stepIcons[verb.word];

              const step = (
                <div
                  key={verb.word}
                  role="listitem"
                  className="flex-1 flex flex-col items-center px-4 pt-6 border-t-2 border-accent text-center"
                >
                  {StepIcon && (
                    <StepIcon
                      className="h-10 w-10 text-accent"
                      strokeWidth={1.2}
                      aria-hidden="true"
                    />
                  )}
                  <h3 className="mt-4 font-display text-heading-md text-foreground">
                    {verb.word}
                  </h3>
                  <p className="mt-2 text-body text-muted">{verb.explanation}</p>
                </div>
              );

              if (index === content.verbs.length - 1) {
                return [step];
              }

              const arrow = (
                <div
                  key={`arrow-${verb.word}`}
                  className="flex items-center justify-center py-2 md:py-0 text-accent"
                  aria-hidden="true"
                >
                  <ArrowRight className="hidden md:block h-5 w-5" aria-hidden="true" />
                  <ArrowDown className="md:hidden h-5 w-5" aria-hidden="true" />
                </div>
              );

              return [step, arrow];
            })
            .flat()}
        </div>
      </Reveal>
    </Section>
  );
}

function ApproachSteps({ content }: { content: ApproachContent['steps'] }) {
  return (
    <Section variant="pearl">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-4">{content.eyebrow}</Eyebrow>

          <h2 className="font-display text-heading-2xl text-foreground text-balance">
            {content.title}
          </h2>

          <p className="mt-6 text-body-lg text-muted">{content.intro}</p>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-2" data-stagger="steps">
          {content.items.map((item) => (
            <li key={item.step} className="border-t-2 border-accent pt-6">
              <p className="font-body text-caption text-foreground">{item.step}</p>
              <h3 className="mt-3 font-display text-heading-md text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-body text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

function ApproachExecution({ content }: { content: ApproachContent['execution'] }) {
  const items = content.areas
    .map((area, index) => {
      const prefix = [] as { type: 'label'; text: string }[];
      if (index === 0) prefix.push({ type: 'label', text: 'Concevoir' });
      if (index === 4) prefix.push({ type: 'label', text: 'Exécuter et améliorer' });
      return [...prefix, { type: 'step' as const, index, area }];
    })
    .flat();

  return (
    <Section variant="silk">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-4">{content.eyebrow}</Eyebrow>

            <h2 className="font-display text-heading-2xl text-foreground text-balance">
              {content.title}
            </h2>

            <div className="mt-6 space-y-6 text-body-lg text-muted">
              {content.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div
                className="pointer-events-none absolute left-2.5 top-[4.25rem] bottom-3.5 z-0 w-px bg-accent md:left-3 md:top-[4.875rem] md:bottom-5"
                aria-hidden="true"
              />

              <div
                className="relative z-10"
                data-stagger="execution"
                role="list"
              >
                {items.map((item, index) =>
                  item.type === 'label' ? (
                    <div
                      key={`phase-${index}`}
                      className="whitespace-nowrap py-2 pl-8 text-caption uppercase tracking-widest text-muted md:pl-10"
                      aria-hidden="true"
                    >
                      {item.text}
                    </div>
                  ) : (
                    <div
                      key={item.area.title}
                      className="flex items-start gap-3 py-6 md:gap-4 md:py-8"
                      role="listitem"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent bg-background font-display text-[10px] font-medium text-accent md:h-6 md:w-6 md:text-xs">
                        {String(item.index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-display text-heading-md text-foreground">
                          {item.area.title}
                        </h3>
                        <p className="mt-2 text-body text-muted">
                          {item.area.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

const fundamentalIconMap: Record<string, LucideIcon> = {
  Ear,
  Search,
  Handshake,
};

const leverIconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Workflow,
  PanelsTopLeft,
};

function ApproachTechnology({ content }: { content: ApproachContent['technology'] }) {
  return (
    <Section variant="graphite" className="!py-10 lg:!py-14">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[45fr_55fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <Eyebrow className="mb-4">{content.eyebrow}</Eyebrow>

          <h2 className="font-display text-heading-2xl text-foreground text-balance">
            <span className="block">{content.title[0]}</span>
            <span className="block">{content.title[1]}</span>
          </h2>
        </div>

        <div className="mx-auto w-full max-w-prose lg:mx-0 lg:max-w-none lg:pt-12">
          <div className="h-px w-full bg-accent" />
          <Reveal variant="scale" className="w-full">
            <blockquote className="py-4 text-center font-body font-medium text-heading-xl text-foreground">
              <p className="text-balance">« {content.quote} »</p>
            </blockquote>
          </Reveal>
          <div className="h-px w-full bg-accent" />
        </div>
      </div>

      <Reveal>
        <div
          className="mt-8 grid grid-cols-1 gap-0 lg:mt-10 lg:grid-cols-2 lg:items-start"
          data-stagger="technology"
        >
          <div className="flex flex-col pb-10 lg:pb-0 lg:pr-16">
            <div className="text-caption uppercase tracking-widest">
              <span className="block text-accent">L’HUMAIN</span>
              <span className="block text-muted">Point de départ</span>
            </div>

            <p className="mt-3 text-body-lg text-muted">{content.paragraphs[0]}</p>

            <ul className="mt-6 space-y-5" role="list">
              {content.fundamentals.map((item) => {
                const Icon = fundamentalIconMap[item.icon];

                return (
                  <li
                    key={item.word}
                    className="flex items-center gap-4"
                  >
                    {Icon && (
                      <Icon
                        className="h-7 w-7 shrink-0 text-accent md:h-8 md:w-8"
                        aria-hidden="true"
                      />
                    )}
                    <span className="font-display text-heading-lg text-foreground">
                      {item.word}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col border-t border-accent pt-10 lg:border-t-0 lg:border-l lg:pl-16 lg:pt-0">
            <div className="text-caption uppercase tracking-widest">
              <span className="block text-accent">LA TECHNOLOGIE</span>
              <span className="block text-muted">Levier</span>
            </div>

            <p className="mt-3 text-body-lg text-muted">{content.paragraphs[1]}</p>

            <ul className="mt-6 space-y-5" role="list">
              {content.levers.map((item) => {
                const Icon = item.icon ? leverIconMap[item.icon] : null;

                return (
                  <li key={item.title}>
                    <div className="flex items-start gap-3">
                      {Icon && (
                        <Icon
                          className="h-6 w-6 shrink-0 text-accent md:h-7 md:w-7"
                          aria-hidden="true"
                        />
                      )}
                      <h3 className="font-display text-heading-md text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-body text-muted">{item.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

const limitIconMap: Record<string, LucideIcon> = {
  ScanSearch,
  Target,
  Handshake,
  Workflow,
  RefreshCw,
};

function ApproachLimits({ content }: { content: ApproachContent['limits'] }) {
  return (
    <Section variant="craie">
      <Reveal>
        <Eyebrow className="mb-4">{content.eyebrow}</Eyebrow>

        <h2 className="font-display text-heading-2xl text-foreground text-balance">
          {content.title}
        </h2>

        <p className="mt-6 max-w-prose text-body-lg text-muted">{content.intro}</p>

        <div className="mt-12 max-w-4xl" data-stagger="limits" role="list">
          {content.items.map((item) => {
            const Icon = limitIconMap[item.icon];

            return (
              <div
                key={item.title}
                className="grid grid-cols-[auto_1fr] gap-3 border-t border-border py-6 first:border-t-0 md:grid-cols-[3rem_1fr_1.5fr] md:gap-6 md:py-8"
                role="listitem"
              >
                {Icon && (
                  <Icon
                    className="h-6 w-6 shrink-0 text-accent md:h-7 md:w-7"
                    aria-hidden="true"
                  />
                )}
                <h3 className="font-display text-heading-md text-foreground">
                  {item.title}
                </h3>
                <p className="col-start-2 text-body text-muted md:col-start-3 md:row-start-1">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}

function ApproachCta({ locale, content }: { locale: Locale; content: ApproachContent['cta'] }) {
  return (
    <Section variant="graphite">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-4">{content.eyebrow}</Eyebrow>

          <h2 className="font-display text-heading-2xl text-foreground text-balance">
            {content.title}
          </h2>

          <div className="mt-6 space-y-6 text-body-lg text-muted">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10">
            <ButtonLink size="lg" href={pathFor(locale, 'contact')}>
              {content.cta}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
