import Link from 'next/link';
import { defaultLocale } from '@/lib/i18n';
import { pathFor } from '@/lib/routes';

/**
 * Page 404 — renvoie bien un code HTTP 404.
 *
 * Phase 1 : libellés techniques neutres, dans les deux langues, en attendant
 * les contenus rédigés. Un composant `not-found` ne reçoit pas les paramètres
 * de route : la langue ne peut donc pas être déduite ici, d'où l'affichage
 * bilingue et les liens vers les deux accueils.
 */
export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 font-mono text-sm">
      <h1 className="text-xl">404</h1>
      <p className="mt-4 text-taupe">Page introuvable. — Seite nicht gefunden.</p>
      <ul className="mt-8 space-y-1">
        <li>
          <Link className="underline" href={pathFor(defaultLocale, 'home')}>
            /fr/
          </Link>
        </li>
        <li>
          <Link className="underline" href={pathFor('de', 'home')}>
            /de/
          </Link>
        </li>
      </ul>
    </main>
  );
}
