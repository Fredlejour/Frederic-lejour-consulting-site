'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { mainNavKeys, pathFor, routeLabels, type PageKey } from '@/lib/routes';
import { ui } from '@/lib/ui';
import { cn } from '@/lib/utils';

type Props = {
  locale: Locale;
  currentPageKey: PageKey | 'home';
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ locale, currentPageKey, isOpen, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dialogRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label={ui(locale, 'mobileMenu')}
      className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background md:hidden"
    >
      <nav aria-label={ui(locale, 'mainNav')} className="mx-auto max-w-container px-6 py-6">
        <ul className="space-y-1">
          {mainNavKeys.map((key) => {
            const isCurrent = key === currentPageKey;
            return (
              <li key={key}>
                <Link
                  href={pathFor(locale, key)}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={cn(
                    'flex items-center py-3 font-body text-lg transition-colors',
                    isCurrent
                      ? 'border-l-2 border-accent pl-3 font-medium text-foreground'
                      : 'pl-3.5 text-muted hover:text-foreground'
                  )}
                  onClick={onClose}
                >
                  {routeLabels[key][locale]}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
