'use client';

import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { mainNavKeys, pathFor, routeLabels, type PageKey } from '@/lib/routes';
import { ui } from '@/lib/ui';
import { cn } from '@/lib/utils';

type Props = {
  locale: Locale;
  currentPageKey: PageKey | 'home';
};

export function DesktopNav({ locale, currentPageKey }: Props) {
  return (
    <nav aria-label={ui(locale, 'mainNav')}>
      <ul className="flex items-center gap-6 lg:gap-8">
        {mainNavKeys.map((key) => {
          const isCurrent = key === currentPageKey;
          return (
            <li key={key}>
              <Link
                href={pathFor(locale, key)}
                aria-current={isCurrent ? 'page' : undefined}
                className={cn(
                  'relative py-2 font-body text-sm font-medium tracking-wide transition-colors',
                  isCurrent ? 'text-foreground' : 'text-muted hover:text-foreground'
                )}
              >
                {routeLabels[key][locale]}
                {isCurrent && (
                  <span
                    className="absolute -bottom-px left-0 h-px w-full bg-accent"
                    aria-hidden="true"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
