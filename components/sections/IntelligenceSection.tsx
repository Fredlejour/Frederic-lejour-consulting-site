import type { HomeContent } from '@/content/home';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function IntelligenceSection({ content }: { content: HomeContent['intelligence'] }) {
  const intelligence = content;

  return (
    <Section variant="ivory">
      <Reveal>
        <SectionHeader eyebrow={intelligence.eyebrow} title={intelligence.title} layout="split">
          <p className="max-w-prose text-body-lg text-muted lg:pt-10">
            {intelligence.description}
          </p>
        </SectionHeader>
      </Reveal>
    </Section>
  );
}
