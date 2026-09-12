import type { PageMeta } from './types';

/**
 * Contenu de la page d’accueil, décliné par langue.
 *
 * Chaque élément factuel présent ici a été fourni et validé par Frédéric
 * Lejour. Les chiffres non encore validés (notamment le volume de
 * transactions en euros) sont volontairement absents.
 *
 * Le type `HomeContent` garantit la parité FR/DE : un champ manquant dans
 * une langue provoque une erreur de compilation.
 */
export type HomeContent = {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    /** Trois lignes de titre, à rendre l’une sous l’autre ; la dernière en accent. */
    title: [string, string, string];
    intro: string[];
    /** Repère discret de poursuite, ancre vers la section suivante. */
    nextSection: string;
    /** Texte alternatif de la photographie, propre à chaque langue. */
    photoAlt: string;
  };
  philosophy: {
    eyebrow: string;
    /** Citation complète : les guillemets typographiques (« » / „ “) font partie du texte validé. */
    quote: string;
    intro: string;
  };
  domains: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  approach: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: { step: string; title: string; description: string }[];
  };
  proof: {
    eyebrow: string;
    title: string;
    items: { value: string; label: string }[];
  };
  intelligence: {
    eyebrow: string;
    title: string;
    description: string;
  };
  finalCta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export const homeFr: HomeContent = {
  meta: {
    title: 'Frédéric Lejour — Développement commercial & relations stratégiques',
    description:
      'Business Development, Key Account Management, partenariats stratégiques et growth : transformer le potentiel commercial d’une entreprise en résultats mesurables.',
  },
  hero: {
    eyebrow: 'Business Development • Relations stratégiques • Growth',
    title: [
      'Votre entreprise',
      'possède le potentiel',
      'Transformons‑le en résultat',
    ],
    intro: [
      'Votre entreprise possède une offre solide, un marché réel et une équipe engagée. Pourtant, les résultats commerciaux ne progressent pas toujours au rythme attendu.',
      'J’apporte un regard neuf pour identifier les véritables freins à la décision, ouvrir de nouvelles opportunités et transformer une ambition commerciale en actions concrètes et mesurables.',
    ],
    nextSection: 'Découvrir la suite',
    photoAlt: 'Frédéric Lejour, expert en développement commercial et relations stratégiques',
  },
  philosophy: {
    eyebrow: 'Philosophie',
    quote: '« Créer suffisamment de valeur pour que la décision d’achat devienne naturelle. »',
    intro:
      'Depuis plus de 20 ans, je développe des activités commerciales, ouvre de nouvelles opportunités et construis des relations durables dans les télécommunications, les services financiers, l’immobilier et le conseil.',
  },
  domains: {
    eyebrow: 'Domaines de valeur',
    title: 'Quatre leviers de croissance commerciale',
    items: [
      {
        title: 'Développer de nouvelles opportunités',
        description:
          'Business Development, prospection ciblée, qualification et acquisition de clients.',
      },
      {
        title: 'Faire grandir les comptes stratégiques',
        description:
          'Key Account Management, fidélisation, développement de comptes et Customer Growth.',
      },
      {
        title: 'Construire des partenariats durables',
        description:
          'Strategic Partnerships, réseaux de partenaires et création de nouvelles sources d’activité.',
      },
      {
        title: 'Faciliter les décisions complexes',
        description:
          'Clarification de la valeur, intelligence relationnelle, négociation et accompagnement de la décision.',
      },
    ],
  },
  approach: {
    eyebrow: 'Approche',
    title: 'De la stratégie aux résultats',
    intro:
      'Mon approche associe vision stratégique et engagement opérationnel. Je ne me limite pas à formuler des recommandations : je transforme les objectifs en actions concrètes, mesurables et orientées vers les résultats.',
    steps: [
      {
        step: '01',
        title: 'Comprendre',
        description: 'Analyser le marché, les motivations et les freins.',
      },
      {
        step: '02',
        title: 'Structurer',
        description: 'Clarifier la valeur et construire le plan d’action.',
      },
      {
        step: '03',
        title: 'Accélérer',
        description: 'Exécuter, mesurer et ajuster pour produire des résultats.',
      },
    ],
  },
  proof: {
    eyebrow: 'Parcours',
    title: 'Une expérience éprouvée sur le terrain',
    items: [
      { value: '20+', label: 'années d’expérience commerciale et entrepreneuriale' },
      { value: '10', label: 'collaborateurs managés, répartis sur deux équipes' },
      { value: '140+', label: 'transactions immobilières menées' },
      {
        value: 'FR / DE',
        label: 'connaissance vécue des codes, des usages et du fonctionnement des deux pays',
      },
    ],
  },
  intelligence: {
    eyebrow: 'Intelligence relationnelle',
    title: 'Comprendre ce qui se joue derrière les chiffres',
    description:
      'Ma force réside dans ma capacité à comprendre rapidement les motivations de mes interlocuteurs, à créer une relation de confiance et à fédérer clients, partenaires et équipes autour d’une ambition commune.',
  },
  finalCta: {
    title: 'Votre entreprise transforme-t-elle pleinement son potentiel en résultats ?',
    description:
      'Échangeons sur vos enjeux de développement commercial, de comptes stratégiques ou de partenariats.',
    primaryCta: 'Échanger avec Frédéric Lejour',
    secondaryCta: 'Découvrir mon approche',
  },
};

export const homeDe: HomeContent = {
  meta: {
    title: 'Frédéric Lejour — Geschäftsentwicklung & strategische Beziehungen',
    description:
      'Business Development, Key Account Management und strategische Partnerschaften: Das Geschäftspotenzial Ihres Unternehmens in messbare Ergebnisse verwandeln.',
  },
  hero: {
    eyebrow: 'Business Development • Strategische Beziehungen • Growth',
    title: [
      'Ihr Unternehmen',
      'hat das Potenzial',
      'Machen wir daraus Ergebnisse',
    ],
    intro: [
      'Ihr Unternehmen verfügt über ein überzeugendes Angebot, einen Markt mit echten Chancen und ein engagiertes Team. Dennoch entwickeln sich die Vertriebsergebnisse nicht immer im erwarteten Tempo.',
      'Ich bringe einen frischen Blick ein, um die tatsächlichen Hürden im Entscheidungsprozess zu erkennen, neue Geschäftsmöglichkeiten zu erschließen und ambitionierte Vertriebsziele in konkrete, messbare Maßnahmen zu übersetzen.',
    ],
    nextSection: 'Weiter entdecken',
    photoAlt: 'Frédéric Lejour, Experte für Geschäftsentwicklung und strategische Beziehungen',
  },
  philosophy: {
    eyebrow: 'Philosophie',
    quote: '„So viel Mehrwert schaffen, dass die Kaufentscheidung zum natürlichen nächsten Schritt wird.“',
    intro:
      'Seit über 20 Jahren entwickle ich Geschäftsfelder, erschließe neue Geschäftsmöglichkeiten und baue langfristige Beziehungen auf – in der Telekommunikation, im Finanzdienstleistungssektor, in der Immobilienbranche und in der Beratung.',
  },
  domains: {
    eyebrow: 'Wo ich Mehrwert schaffe',
    title: 'Vier Hebel für vertriebliches Wachstum',
    items: [
      {
        title: 'Neue Geschäftsmöglichkeiten erschließen',
        description:
          'Business Development, gezielte Kundenansprache, Qualifizierung und Neukundengewinnung.',
      },
      {
        title: 'Strategische Kundenbeziehungen ausbauen',
        description:
          'Key Account Management, Kundenbindung, Entwicklung bestehender Kunden und Customer Growth.',
      },
      {
        title: 'Langfristige Partnerschaften aufbauen',
        description:
          'Strategische Partnerschaften, Partnernetzwerke und die Erschließung neuer Geschäftspotenziale.',
      },
      {
        title: 'Komplexe Entscheidungen erleichtern',
        description:
          'Den Mehrwert klar vermitteln, Motive und Interessen verstehen, verhandeln und Entscheidungsprozesse begleiten.',
      },
    ],
  },
  approach: {
    eyebrow: 'Arbeitsweise',
    title: 'Von der Strategie zu Ergebnissen',
    intro:
      'Meine Arbeitsweise verbindet strategischen Weitblick mit operativem Engagement. Ich beschränke mich nicht auf Empfehlungen: Ich übersetze Ziele in konkrete, messbare und ergebnisorientierte Maßnahmen.',
    steps: [
      {
        step: '01',
        title: 'Verstehen',
        description: 'Den Markt, die Beweggründe und die Hürden analysieren.',
      },
      {
        step: '02',
        title: 'Strukturieren',
        description: 'Den Mehrwert herausarbeiten und einen konkreten Maßnahmenplan entwickeln.',
      },
      {
        step: '03',
        title: 'Voranbringen',
        description: 'Umsetzen, messen und nachjustieren, um Ergebnisse zu erzielen.',
      },
    ],
  },
  proof: {
    eyebrow: 'Werdegang',
    title: 'Erfahrung, die sich in der Praxis bewährt hat',
    items: [
      { value: '20+', label: 'Jahre Erfahrung im Vertrieb und als Unternehmer' },
      { value: '10', label: 'Mitarbeitende geführt, verteilt auf zwei Teams' },
      { value: '140+', label: 'Immobilientransaktionen begleitet' },
      {
        value: 'FR / DE',
        label: 'Vertrautheit mit den kulturellen Gepflogenheiten, dem Alltag und den Rahmenbedingungen beider Länder durch eigene Lebenserfahrung',
      },
    ],
  },
  intelligence: {
    eyebrow: 'Gespür für Menschen und Beziehungen',
    title: 'Verstehen, was hinter den Zahlen steckt',
    description:
      'Meine Stärke liegt darin, die Beweggründe meiner Gesprächspartner schnell zu erfassen, Vertrauen aufzubauen und Kunden, Partner sowie Teams für ein gemeinsames Ziel zu gewinnen.',
  },
  finalCta: {
    title: 'Setzt Ihr Unternehmen sein Potenzial voll in Ergebnisse um?',
    description:
      'Sprechen wir über Ihre Ziele im Business Development, bei der Entwicklung strategischer Kunden oder beim Aufbau von Partnerschaften.',
    primaryCta: 'Gespräch mit Frédéric Lejour vereinbaren',
    secondaryCta: 'Meine Arbeitsweise kennenlernen',
  },
};
