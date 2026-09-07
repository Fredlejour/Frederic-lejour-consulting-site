'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { localeLabel, locales } from '@/lib/i18n';
import { switchLocalePathFromPathname } from '@/lib/routes';
import { cn } from '@/lib/utils';

type Props = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-sm font-medium tracking-wide" aria-label={`Langue: ${locale.toUpperCase()}`}>
      {locales.map((target, index) => {
        const isCurrent = target === locale;
        const href = switchLocalePathFromPathname(locale, target, pathname);

        return (
          <span key={target} className="flex items-center">
            {isCurrent ? (
              <span aria-current="true" className="text-foreground">
                {localeLabel[target]}
              </span>
            ) : (
              <Link
                href={href}
                hrefLang={target}
                className="text-muted hover:text-foreground transition-colors"
              >
                {localeLabel[target]}
              </Link>
            )}
            {index < locales.length - 1 && (
              <span className="mx-2 text-border" aria-hidden="true">
                |
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
