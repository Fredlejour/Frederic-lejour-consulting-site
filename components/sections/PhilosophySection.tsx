import type { HomeContent } from '@/content/home';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

export function PhilosophySection({ content }: { content: HomeContent['philosophy'] }) {
  const philosophy = content;

  return (
    <Section id="philosophie" variant="ivory" className="scroll-mt-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Eyebrow className="mb-8">{philosophy.eyebrow}</Eyebrow>

        <Reveal variant="scale">
          <blockquote className="font-body font-medium text-heading-xl text-foreground">
            <p>{philosophy.quote}</p>
          </blockquote>
        </Reveal>

        <p className="mx-auto mt-10 max-w-prose text-body-lg text-muted">{philosophy.intro}</p>
      </Reveal>
    </Section>
  );
}
