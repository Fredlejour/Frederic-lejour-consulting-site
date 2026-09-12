import type { HomeContent } from '@/content/home';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ValueDomainsSection({ content }: { content: HomeContent['domains'] }) {
  const domains = content;

  return (
    <Section variant="silk">
      <Reveal>
        <SectionHeader eyebrow={domains.eyebrow} title={domains.title} />

        <div className="mt-12 grid gap-6 md:grid-cols-2" data-stagger="cards">
          {domains.items.map((item) => (
            <Card key={item.title} variant="elevated" className="lc-card h-full">
              <h3 className="font-display text-heading-md text-foreground">{item.title}</h3>
              <p className="mt-4 text-body text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
