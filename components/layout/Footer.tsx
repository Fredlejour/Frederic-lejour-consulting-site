import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { footerNavKeys, mainNavKeys, pathFor, routeLabels } from '@/lib/routes';
import { ui, uiWithYear } from '@/lib/ui';
import { Container } from '@/components/ui/Container';
import { Separator } from '@/components/ui/Separator';

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-graphite text-craie theme-graphite">
      <Container>
        <div className="py-section">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href={pathFor(locale, 'home')} className="font-display text-2xl text-foreground">
                {ui(locale, 'wordmark')}
              </Link>
              <p className="mt-4 max-w-xs text-body-sm text-muted">{ui(locale, 'demoSubtitle')}</p>
            </div>

            <div>
              <h2 className="font-body text-caption text-muted">{ui(locale, 'mainNav')}</h2>
              <ul className="mt-4 space-y-2">
                {mainNavKeys.map((key) => (
                  <li key={key}>
                    <Link
                      href={pathFor(locale, key)}
                      className="text-body-sm text-foreground transition-colors hover:text-accent"
                    >
                      {routeLabels[key][locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-body text-caption text-muted">{ui(locale, 'legalNav')}</h2>
              <ul className="mt-4 space-y-2">
                {footerNavKeys.map((key) => (
                  <li key={key}>
                    <Link
                      href={pathFor(locale, key)}
                      className="text-body-sm text-foreground transition-colors hover:text-accent"
                    >
                      {routeLabels[key][locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="mt-12 bg-border" />

          <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="text-body-sm text-muted">{uiWithYear(locale, 'copyright', year)}</p>
            <p className="text-body-sm text-muted">Phase 2 — Design system</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
