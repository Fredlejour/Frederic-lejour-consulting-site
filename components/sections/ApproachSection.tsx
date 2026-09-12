import type { HomeContent } from '@/content/home';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ApproachSection({ content }: { content: HomeContent['approach'] }) {
  const approach = content;

  return (
    <Section variant="pearl">
      <Reveal>
        <SectionHeader
          eyebrow={approach.eyebrow}
          title={approach.title}
          description={approach.intro}
        />

        <ol className="mt-12 grid gap-8 md:grid-cols-3" data-stagger="steps">
          {approach.steps.map((step) => (
            <li key={step.title} className="border-t border-border pt-6">
              <p className="font-body text-caption text-foreground">{step.step}</p>
              <h3 className="mt-3 font-display text-heading-md text-foreground">{step.title}</h3>
              <p className="mt-3 text-body text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
