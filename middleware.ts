import { NextResponse, type NextRequest } from 'next/server';
import { matchLocale } from '@/lib/i18n';

/**
 * Redirige uniquement la racine `/` vers `/fr/` ou `/de/`, selon l'en-tête
 * `Accept-Language` du visiteur, avec le français en repli.
 *
 * Choix volontaires :
 * - redirection **307** (temporaire) et non 301 : la cible dépend du visiteur,
 *   elle ne doit donc pas être mise en cache comme définitive ;
 * - aucune redirection sur `/fr/*` ni `/de/*` : les deux versions restent
 *   toujours accessibles en direct, pour les visiteurs comme pour les robots ;
 * - `x-default` pointe sur `/fr/` dans les balises `hreflang`.
 */
export function middleware(request: NextRequest) {
  const locale = matchLocale(request.headers.get('accept-language'));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: '/',
};
