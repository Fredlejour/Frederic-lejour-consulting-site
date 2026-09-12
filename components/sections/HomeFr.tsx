import { homeFr } from '@/content/home';
import { Home } from './Home';

/** Page d’accueil française. */
export function HomeFr() {
  return <Home content={homeFr} locale="fr" />;
}
