import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import type { HomeContent } from '@/content/home';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Section } from '@/components/ui/Section';

/**
 * Hero de la page d’accueil.
 *
 * - Deux colonnes à partir de `xl` pour garantir assez de largeur au H1.
 * - La colonne de texte est plus large que l’image (1.3fr / 0.7fr) afin que
 *   chacune des trois lignes du titre tienne sans retour à la ligne ; le
 *   corps passe à `display-md` à ce breakpoint pour préserver l’équilibre
 *   sans réduire excessivement la photographie.
 * - Un tiret insécable empêche « Transformons‑le » d’être coupé.
 * - Sur mobile et tablette, les lignes restent en ligne et se plient
 *   naturellement.
 * - Aucun CTA : un repère d’ancre discret renvoie vers la section suivante ;
 *   les actions principales sont regroupées en fin de page.
 */
export function HeroSection({ content }: { content: HomeContent['hero'] }) {
  const hero = content;

  return (
    <Section variant="graphite">
      <div className="grid gap-12 xl:grid-cols-[1.3fr_0.7fr] xl:items-start xl:gap-16">
        <div>
          <Eyebrow className="lc-enter lc-enter-1 mb-6">{hero.eyebrow}</Eyebrow>

          <h1 className="lc-enter lc-enter-2 font-display text-display-lg text-foreground text-balance xl:text-display-md">
            <span className="xl:block xl:whitespace-nowrap">{hero.title[0]}</span>{' '}
            <span className="xl:block xl:whitespace-nowrap">{hero.title[1]}</span>{' '}
            <span className="text-accent xl:block xl:whitespace-nowrap">{hero.title[2]}</span>
          </h1>

          <div className="lc-enter lc-enter-3 mt-10 max-w-prose space-y-6 text-body-lg text-muted">
            {hero.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <a
            href="#philosophie"
            className="lc-enter lc-enter-4 mt-12 inline-flex items-center gap-2 font-body text-caption uppercase tracking-widest text-muted transition-colors hover:text-foreground"
          >
            <ArrowDown size={16} aria-hidden="true" />
            {hero.nextSection}
          </a>
        </div>

        <div className="lc-enter-portrait relative w-full max-w-sm mx-auto md:max-w-md md:mx-0 xl:max-w-none">
          <span
            className="absolute -bottom-3 -right-3 h-full w-full rounded-lg border border-accent/40"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-lg border border-border bg-surface">
            <Image
              src="/images/frederic-lejour.webp"
              alt={hero.photoAlt}
              width={800}
              height={800}
              priority
              sizes="(min-width: 1280px) 45vw, (min-width: 1024px) 50vw, (min-width: 768px) 28rem, (min-width: 640px) 24rem, 100vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
