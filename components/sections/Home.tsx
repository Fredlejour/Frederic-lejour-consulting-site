import type { HomeContent } from '@/content/home';
import type { Locale } from '@/lib/i18n';
import { ApproachSection } from './ApproachSection';
import { CtaSection } from './CtaSection';
import { HeroSection } from './HeroSection';
import { IntelligenceSection } from './IntelligenceSection';
import { PhilosophySection } from './PhilosophySection';
import { ProofSection } from './ProofSection';
import { ValueDomainsSection } from './ValueDomainsSection';

/**
 * Composition de la page d’accueil, commune aux deux langues.
 *
 * L’alternance des ambiances (graphite, ivoire, craie) structure la lecture
 * sans recourir à des animations. Chaque section est un composant serveur :
 * la page reste intégralement indexable sans JavaScript.
 */
export function Home({ content, locale }: { content: HomeContent; locale: Locale }) {
  return (
    <>
      <HeroSection content={content.hero} />
      <PhilosophySection content={content.philosophy} />
      <ValueDomainsSection content={content.domains} />
      <ApproachSection content={content.approach} />
      <ProofSection content={content.proof} />
      <IntelligenceSection content={content.intelligence} />
      <CtaSection content={content.finalCta} locale={locale} />
    </>
  );
}
