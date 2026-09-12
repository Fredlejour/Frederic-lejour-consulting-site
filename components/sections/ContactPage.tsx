import { ArrowUpRight } from 'lucide-react';
import { type ContactContent } from '@/content/contact';
import { type Locale } from '@/lib/i18n';
import { pathFor } from '@/lib/routes';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { TextLink } from '@/components/ui/TextLink';
import { ContactForm } from './ContactForm';

type PageProps = {
  locale: Locale;
  content: ContactContent;
};

/**
 * Page Contact (/fr/contact).
 *
 * Deux sections seulement : un hero graphite volontairement compact — le
 * formulaire doit apparaître rapidement — puis une zone claire en deux
 * colonnes : raisons d'échanger à gauche, formulaire à droite. Le
 * formulaire est l'action principale de la page ; aucun CTA concurrent.
 */
export function ContactPage({ locale, content }: PageProps) {
  return (
    <>
      <ContactHero content={content.hero} />
      <ContactMain locale={locale} content={content} />
    </>
  );
}

/* ───────────────────────────────────────── Hero ───────────────────────────────────────── */

function ContactHero({ content }: { content: ContactContent['hero'] }) {
  return (
    <Section variant="graphite" className="pb-16 pt-24 md:pb-20 md:pt-32">
      <div className="max-w-4xl">
        <Eyebrow className="lc-enter lc-enter-1 mb-8">{content.eyebrow}</Eyebrow>

        <h1 className="lc-enter lc-enter-2 font-display text-display-lg text-foreground text-balance">
          <span className="block">{content.title[0]}</span>
          <span className="block">{content.title[1]}</span>
          <span className="block text-accent">{content.title[2]}</span>
        </h1>

        <p className="lc-enter lc-enter-3 mt-8 max-w-2xl text-body-lg text-muted">
          {content.intro}
        </p>
      </div>
    </Section>
  );
}

/* ──────────────────────────── Raisons d'échanger + formulaire ─────────────────────────── */

function ContactMain({ locale, content }: { locale: Locale; content: ContactContent }) {
  return (
    <Section variant="craie">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <Eyebrow className="mb-4">{content.reasons.eyebrow}</Eyebrow>
          <h2 className="font-display text-heading-2xl text-foreground text-balance">
            {content.reasons.title}
          </h2>
          <p className="mt-6 max-w-prose text-body-lg text-muted">{content.reasons.intro}</p>

          <ul className="mt-10">
            {content.reasons.items.map((item) => (
              <li key={item.step} className="border-t border-border py-6">
                <span className="font-display text-heading-sm text-accent" aria-hidden="true">
                  {item.step}
                </span>
                <h3 className="mt-2 font-display text-heading-sm uppercase tracking-wide text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-body text-muted">{item.description}</p>
              </li>
            ))}
          </ul>

          <p className="mt-8">
            <TextLink
              href={content.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-1 text-body-sm"
            >
              {content.linkedin.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </TextLink>
          </p>
        </Reveal>

        <Reveal className="lg:col-span-7 lg:pt-10">
          <ContactForm
            form={content.form}
            success={content.success}
            error={content.error}
            privacyHref={pathFor(locale, 'privacy')}
          />
        </Reveal>
      </div>
    </Section>
  );
}
