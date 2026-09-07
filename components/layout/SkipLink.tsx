import { ui } from '@/lib/ui';
import type { Locale } from '@/lib/i18n';

export function SkipLink({ locale }: { locale: Locale }) {
  return (
    <a
      href="#contenu"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-skip focus:rounded focus:bg-foreground focus:px-5 focus:py-3 focus:text-background focus:font-body focus:text-sm focus:font-medium"
    >
      {ui(locale, 'skipLink')}
    </a>
  );
}
