import type { HomeContent } from '@/content/home';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';

/**
 * Repères du parcours.
 *
 * Seuls les quatre repères explicitement validés sont affichés. Le volume de
 * transactions en euros n’est pas publié : son périmètre et sa période ne sont
 * pas encore établis.
 *
 * Aucun compteur animé : les valeurs sont lisibles dès leur apparition.
 */
export function ProofSection({ content }: { content: HomeContent['proof'] }) {
  const proof = content;

  return (
    <Section variant="graphite">
      <Reveal>
        <SectionHeader eyebrow={proof.eyebrow} title={proof.title} />

        <dl
          className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
          data-stagger="items"
        >
          {proof.items.map((item) => (
            <div key={item.label} className="border-t border-border pt-6">
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <p className="font-display text-display-md text-foreground">{item.value}</p>
                <p className="mt-3 text-body-sm text-muted">{item.label}</p>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
