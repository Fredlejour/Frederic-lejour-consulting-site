import type { LegalBlock, LegalPageContent } from '@/content/legal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

type Props = {
  content: LegalPageContent;
};

/**
 * Gabarit commun des pages juridiques (mentions légales / Impressum et
 * politique de confidentialité / Datenschutzerklärung).
 *
 * Hero graphite compact, puis sections éditoriales sur fond ivoire :
 * hiérarchie h1/h2, blocs de paragraphes, lignes d'identité, listes et
 * liens — sans cartes ni mise en page monumentale.
 */
export function LegalPage({ content }: Props) {
  return (
    <>
      <Section variant="graphite" className="pb-14 pt-24 md:pb-16 md:pt-32">
        <div className="max-w-3xl">
          <Eyebrow className="lc-enter lc-enter-1 mb-6">{content.hero.eyebrow}</Eyebrow>

          <h1 className="lc-enter lc-enter-2 font-display text-display-md text-foreground text-balance">
            {content.hero.title}
          </h1>

          <p className="lc-enter lc-enter-3 mt-6 max-w-prose text-body-lg text-muted">
            {content.hero.intro}
          </p>

          <p className="lc-enter lc-enter-3 mt-4 text-body-sm text-muted">
            {content.hero.updated}
          </p>
        </div>
      </Section>

      <Section variant="ivory">
        <div className="max-w-3xl space-y-12">
          {content.sections.map((section) => (
            <Reveal
              key={section.title}
              className="border-t border-border pt-10 first:border-t-0 first:pt-0"
            >
              <h2 className="font-display text-heading-lg text-foreground">{section.title}</h2>
              <div className="mt-5 space-y-5">
                {section.blocks.map((block, index) => (
                  <LegalBlockView key={index} block={block} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

function LegalBlockView({ block }: { block: LegalBlock }) {
  if (block.type === 'lines') {
    return (
      <p className="text-body text-foreground">
        {block.items.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    );
  }

  if (block.type === 'list') {
    return (
      <ul className="list-disc space-y-2 pl-5 text-body text-foreground marker:text-accent">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === 'links') {
    return (
      <ul className="space-y-2 text-body">
        {block.items.map((link) => {
          const isExternal = !link.href.startsWith('mailto:');
          return (
            <li key={link.href + link.label}>
              <a
                href={link.href}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="font-body font-medium text-foreground underline underline-offset-4 decoration-accent transition-opacity hover:opacity-80"
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      {block.items.map((paragraph) => (
        <p key={paragraph} className="text-body text-foreground">
          {paragraph}
        </p>
      ))}
    </>
  );
}
