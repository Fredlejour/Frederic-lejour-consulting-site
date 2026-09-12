import type { HomeContent } from '@/content/home';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Locale } from '@/lib/i18n';
import { pathFor } from '@/lib/routes';

export function CtaSection({
  content,
  locale,
}: {
  content: HomeContent['finalCta'];
  locale: Locale;
}) {
  const finalCta = content;

  return (
    <Section variant="graphite">
      <Reveal>
        <SectionHeader
          align="center"
          size="large"
          title={finalCta.title}
          description={finalCta.description}
        >
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink size="lg" href={pathFor(locale, 'contact')}>
              {finalCta.primaryCta}
            </ButtonLink>
            <ButtonLink size="lg" variant="secondary" href={pathFor(locale, 'approach')}>
              {finalCta.secondaryCta}
            </ButtonLink>
          </div>
        </SectionHeader>
      </Reveal>
    </Section>
  );
}
