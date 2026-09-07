'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { pageKeyFromSlug, pathFor, type PageKey } from '@/lib/routes';
import { ui } from '@/lib/ui';
import { cn } from '@/lib/utils';
import { DesktopNav } from './DesktopNav';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';

function getCurrentPageKey(locale: Locale, pathname: string): PageKey | 'home' {
  const rest = pathname.replace(`/${locale}`, '').replace(/^\//, '');
  const segments = rest.split('/').filter(Boolean);
  if (segments.length === 0) return 'home';
  const [slug] = segments;
  return pageKeyFromSlug(locale, slug) ?? 'home';
}

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const currentPageKey = getCurrentPageKey(locale, pathname);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Cache le header au scroll vers le bas, le réaffiche dès un léger scroll
  // vers le haut. Toujours visible en haut de page et quand le menu mobile est ouvert.
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY < 20) {
            setHidden(false);
          } else if (currentScrollY > lastScrollY.current + 4) {
            setHidden(true);
          } else if (currentScrollY < lastScrollY.current - 4) {
            setHidden(false);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Empêche le header de disparaître quand le menu mobile est ouvert.
  useEffect(() => {
    if (mobileOpen) setHidden(false);
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-nav border-b border-border bg-background',
        'transition-transform duration-300 ease-out-expo motion-reduce:transition-none',
        hidden && !mobileOpen && '-translate-y-full'
      )}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-6 py-5 md:px-10 lg:px-16">
        <Link
          href={pathFor(locale, 'home')}
          className="font-display text-xl font-semibold tracking-tight text-foreground focus-visible:outline-offset-4"
        >
          {ui(locale, 'wordmark')}
        </Link>

        <div className="flex items-center gap-5 md:gap-8">
          <div className="hidden md:block">
            <DesktopNav locale={locale} currentPageKey={currentPageKey} />
          </div>

          <LanguageSwitcher locale={locale} />

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? ui(locale, 'menuClose') : ui(locale, 'menuButton')}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu
        locale={locale}
        currentPageKey={currentPageKey}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
