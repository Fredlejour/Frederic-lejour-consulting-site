/**
 * Interfaces de contenu — Phase 1 (structure uniquement, aucune donnée).
 *
 * Deux garanties reposent sur ce fichier :
 *
 * 1. **Parité FR/DE.** Les dictionnaires de contenu sont typés par langue.
 *    Un champ manquant en allemand provoque une erreur de compilation :
 *    aucune page ne peut donc partir à moitié traduite.
 *
 * 2. **Traçabilité.** Tout élément factuel porte un statut de vérification.
 *    Un contenu qui n'est pas `valide` ne doit pas être rendu en production.
 *    Voir `content/INVENTAIRE-CONTENUS.md` et `content/CHRONOLOGIE.md`.
 *
 * Aucun contenu réel n'est déclaré ici : les dictionnaires seront créés en
 * Phase 3 (français) puis Phase 5 (allemand), à partir des seules
 * informations fournies et validées.
 */

import type { Locale } from '@/lib/i18n';

/** Statut de vérification d'un élément factuel. */
export type VerificationStatus =
  | 'valide'
  | 'a-verifier'
  | 'a-verifier-sur-document-source'
  | 'a-fournir'
  | 'non-publiable';

/**
 * Traçabilité d'un élément factuel : d'où il vient et s'il est validé.
 * Ces champs ne sont jamais affichés.
 */
export interface Traceability {
  status: VerificationStatus;
  /** Nature de la source, sans jamais recopier de donnée confidentielle. */
  source?: string;
  /** Date de validation, au format AAAA-MM-JJ. */
  verifiedOn?: string;
}

/** Un élément factuel quelconque, accompagné de sa traçabilité. */
export type Verifiable<T> = Traceability & { value: T };

/** Chiffre affiché comme preuve. Publiable seulement si `status === 'valide'`. */
export interface ProofNumber extends Traceability {
  /** Valeur affichée, telle qu'elle doit apparaître. */
  figure: string;
  label: string;
  /** Périmètre et période, obligatoires pour toute publication. */
  scope?: string;
  period?: string;
}

/** Une étape de la frise du parcours. */
export interface CareerEntry extends Traceability {
  start: string;
  end: string | null;
  role: string;
  organisation: string;
  location: string;
  summary?: string;
}

/** Une étude de cas, selon le gabarit unique validé. */
export interface CaseStudy extends Traceability {
  slug: Record<Locale, string>;
  title: string;
  summary: string;
  period?: string;
  role?: string;
  sector?: string;
  country?: string;
  keyFigures: ProofNumber[];
  context: string[];
  challenge: string[];
  responsibilities: string[];
  built: string[];
  results: string[];
  demonstrates: string[];
}

/** Métadonnées SEO d'une page, propres à chaque langue. */
export interface PageMeta {
  title: string;
  description: string;
}

/** Libellés d'interface, communs à toutes les pages d'une langue. */
export interface UiDictionary {
  skipToContent: string;
  nav: Record<string, string>;
  languageSwitchLabel: string;
}

/** Dictionnaire complet d'une langue. */
export interface LocaleDictionary {
  meta: Record<string, PageMeta>;
  ui: UiDictionary;
}

/** Contenu déclaré pour les deux langues, sans exception possible. */
export type Bilingual<T> = Record<Locale, T>;
