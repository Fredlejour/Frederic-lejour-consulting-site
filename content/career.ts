import type { PageMeta } from './types';

export type CareerChapter = {
  step: string;
  environment: string;
  title: string;
  narrative: string[];
  retained: string[];
};

export type CareerCombination = {
  inputs: [string, string];
  outcome: string;
  description: string;
};

export type CareerPersona = {
  market: string;
  situation: string;
  contribution: string;
};

export type CareerRelatedPage = {
  pageKey: 'approach' | 'expertise' | 'work';
  label: string;
  description: string;
};

export type CareerContent = {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    /** Trois lignes de titre, à rendre l’une sous l’autre ; la dernière en accent. */
    title: [string, string, string];
    intro: string[];
  };
  thread: {
    eyebrow: string;
    title: string;
    intro: string;
    verbs: { word: string; explanation: string }[];
  };
  chapters: {
    eyebrow: string;
    title: string;
    /** Phrase manifeste en deux lignes ; `highlight` est rendu en accent. */
    manifesto: { lines: [string, string]; highlight?: string };
    items: CareerChapter[];
  };
  combinations: {
    eyebrow: string;
    title: string;
    /** Sous-titre en deux phrases distinctes ; `emphasis` est renforcée. */
    intro: { first: string; emphasis: string };
    items: CareerCombination[];
  };
  landmarks: {
    eyebrow: string;
    title: string;
    items: { figure: string; label: string }[];
  };
  positioning: {
    title: string;
    text: string;
    personas: {
      eyebrow: string;
      title: string;
      intro: string;
      /** Petit libellé au-dessus de la contribution de chaque persona. */
      contributionLabel: string;
      items: CareerPersona[];
    };
    /** Libellé éditorial précédant les liens vers les autres pages. */
    relatedLabel: string;
    related: CareerRelatedPage[];
  };
  cta: {
    title: string;
    primaryCta: string;
  };
  /** Réservé : aucun CV PDF publiable n’existe encore (inventaire Q7). */
  cvHref?: string;
};

/**
 * Contenu de la page Parcours (/fr/parcours).
 *
 * Chaque élément factuel repose sur les contenus déjà validés du site.
 * Aucune date, durée par domaine ou employeur non vérifié n’y figure :
 * la frise de référence (content/CHRONOLOGIE.md) n’est pas encore
 * renseignée. La version allemande fera l’objet d’une traduction
 * professionnelle séparée en Phase 5.
 */
export const careerFr: CareerContent = {
  meta: {
    title: 'Parcours — Frédéric Lejour',
    description:
      'Télécommunications, gestion de patrimoine, immobilier et conseil entre la France et l’Allemagne : le parcours de Frédéric Lejour au service du développement commercial et des relations stratégiques.',
  },

  hero: {
    eyebrow: 'PARCOURS',
    title: [
      'Le terrain comme école',
      'La relation comme méthode',
      'La valeur comme résultat',
    ],
    intro: [
      'Des télécommunications à l’immobilier, de la gestion de patrimoine à l’entrepreneuriat, mon parcours s’est construit dans des environnements différents, mais autour d’une même question : comment comprendre suffisamment une situation pour faire progresser une décision ?',
    ],
  },

  thread: {
    eyebrow: 'LE FIL CONDUCTEUR',
    title: 'Trois verbes, une même logique',
    intro: 'Quel que soit l’environnement, la démarche reste la même.',
    verbs: [
      {
        word: 'Comprendre',
        explanation:
          'Écouter, analyser le marché et identifier les véritables motivations.',
      },
      {
        word: 'Construire',
        explanation:
          'Structurer une proposition, une relation ou un dispositif commercial.',
      },
      {
        word: 'Développer',
        explanation:
          'Transformer le potentiel en clients, en partenariats et en résultats.',
      },
    ],
  },

  chapters: {
    eyebrow: 'TRAJECTOIRE',
    title: 'Quatre environnements, une même capacité',
    manifesto: {
      lines: ['Créer les conditions', 'd’une décision.'],
      highlight: 'décision.',
    },
    items: [
      {
        step: '01',
        environment: 'Télécommunications',
        title: 'Piloter la performance commerciale',
        narrative: [
          'Dans les télécommunications, j’ai construit une culture de la vente, de la négociation et du pilotage commercial au sein d’un environnement structuré et orienté résultats. J’y ai exercé des responsabilités de direction commerciale et managé dix collaborateurs répartis sur deux équipes.',
        ],
        retained: [
          'La culture du résultat mesurable',
          'La rigueur du processus commercial',
          'Le management d’équipes',
        ],
      },
      {
        step: '02',
        environment: 'Gestion de patrimoine',
        title: 'Accompagner des décisions qui engagent',
        narrative: [
          'En gestion de patrimoine, chaque décision engageait les projets, les équilibres et l’avenir de mes clients. Cette expérience m’a appris à croiser l’analyse, l’écoute et la pédagogie pour rendre compréhensibles des choix complexes et construire une relation de confiance dans la durée.',
        ],
        retained: [
          'L’écoute des situations complexes',
          'La confiance comme condition de la décision',
          'L’exigence d’analyse',
        ],
      },
      {
        step: '03',
        environment: 'Immobilier et entrepreneuriat',
        title: 'Entreprendre et créer de nouvelles offres',
        narrative: [
          'Investisseur, puis dirigeant de deux agences, j’ai développé une expérience complète de la transaction immobilière et créé des offres dédiées aux propriétaires vendeurs, notamment VRP31J et Premium Vendeur, ainsi qu’un dispositif d’acquisition numérique.',
        ],
        retained: [
          'L’action terrain comme source d’apprentissage',
          'La création d’offres commercialisables',
          'Le développement d’une activité de bout en bout',
        ],
      },
      {
        step: '04',
        environment: 'Conseil, numérique et international',
        title: 'Développer au-delà de la proximité géographique',
        narrative: [
          'Avec Lejour Consulting, depuis l’Allemagne, j’ai développé une activité principalement destinée au marché français : présentation des offres, contractualisation et suivi à distance, déplacements ciblés sur le terrain, et utilisation du numérique et de l’automatisation pour amplifier la relation.',
        ],
        retained: [
          'Créer la confiance sans proximité géographique',
          'Développer à distance sans affaiblir la relation',
          'Mettre la technologie au service de l’humain',
        ],
      },
    ],
  },

  combinations: {
    eyebrow: 'ÉVOLUTION',
    title: 'Ce que ces expériences ont construit.',
    intro: {
      first: 'Ces compétences ne se sont pas simplement succédé.',
      emphasis: 'Elles se sont progressivement combinées.',
    },
    items: [
      {
        inputs: ['Vente', 'Management'],
        outcome: 'Piloter le développement',
        description:
          'Élargir la vente directe à l’organisation, au management et à la stratégie d’acquisition.',
      },
      {
        inputs: ['Analyse', 'Écoute'],
        outcome: 'Accompagner la décision',
        description:
          'Croiser la compréhension d’une situation et des motivations pour faire progresser un choix complexe.',
      },
      {
        inputs: ['Terrain', 'Entrepreneuriat'],
        outcome: 'Commercialiser un savoir-faire',
        description:
          'Transformer une expertise terrain en proposition de valeur structurée, différenciante et vendable.',
      },
      {
        inputs: ['Numérique', 'Intelligence artificielle'],
        outcome: 'Construire un système commercial augmenté',
        description:
          'Relier acquisition, communication, automatisation et relation dans un ensemble cohérent.',
      },
    ],
  },

  landmarks: {
    eyebrow: 'LE PARCOURS EN QUELQUES REPÈRES',
    title: 'Une expérience construite dans la durée et dans l’action.',
    items: [
      { figure: '20+', label: 'années d’expérience commerciale' },
      { figure: '150+', label: 'transactions immobilières' },
      { figure: '50 M€+', label: 'de volume immobilier' },
      {
        figure: 'France · Allemagne',
        label:
          'Une connaissance vécue des codes, des usages et du fonctionnement de chacun des deux pays.',
      },
    ],
  },

  positioning: {
    title: 'Une expérience transversale au service de la croissance.',
    text: 'Aujourd’hui, je réunis cette expérience du terrain, du conseil, de la négociation et de l’entrepreneuriat pour contribuer à des enjeux de Business Development, d’Account Management, de relations stratégiques et de croissance client.',
    personas: {
      eyebrow: 'ENTREPRISES ET MARCHÉS',
      title: 'Là où ce profil peut faire la différence.',
      intro:
        'Cette expérience prend particulièrement son sens auprès d’entreprises qui doivent rendre une offre plus compréhensible, développer des relations stratégiques ou transformer un potentiel commercial en croissance concrète.',
      contributionLabel: 'CE PROFIL APPORTE',
      items: [
        {
          market: 'PROPTECH ET ÉCOSYSTÈME IMMOBILIER',
          situation:
            'Une PropTech, un réseau ou un prestataire immobilier qui souhaite accélérer l’adoption de sa solution auprès des agents, des agences et de ses partenaires.',
          contribution:
            'Comprendre le terrain, structurer la proposition de valeur et mobiliser un réseau professionnel.',
        },
        {
          market: 'SAAS B2B, INTELLIGENCE ARTIFICIELLE ET AUTOMATISATION',
          situation:
            'Un éditeur qui dispose d’une technologie performante, mais doit encore rendre son offre compréhensible, désirable et commercialisable.',
          contribution:
            'Traduire la technologie en bénéfices concrets et accompagner une décision complexe.',
        },
        {
          market: 'COMPTES STRATÉGIQUES ET PARTENARIATS',
          situation:
            'Une entreprise disposant de clients, de comptes ou de partenaires dont le potentiel de développement reste encore sous-exploité.',
          contribution:
            'Approfondir les relations, identifier de nouvelles opportunités et construire une croissance durable.',
        },
        {
          market: 'RELATIONS FRANCE–ALLEMAGNE',
          situation:
            'Une entreprise opérant entre la France et l’Allemagne qui doit adapter sa communication et ses relations aux codes, aux usages et aux attentes de part et d’autre.',
          contribution:
            'Faciliter la compréhension mutuelle et sécuriser le développement des relations.',
        },
      ],
    },
    relatedLabel: 'POUR PROLONGER LA LECTURE',
    related: [
      {
        pageKey: 'approach',
        label: 'Approche',
        description: 'La manière dont j’observe, apprends et construis l’action.',
      },
      {
        pageKey: 'expertise',
        label: 'Expertises',
        description:
          'Les leviers commerciaux, relationnels et technologiques que je mobilise.',
      },
      {
        pageKey: 'work',
        label: 'Réalisations',
        description:
          'Les situations concrètes dans lesquelles cette expérience a créé de la valeur.',
      },
    ],
  },

  cta: {
    title: 'Une trajectoire prend tout son sens lorsqu’elle prépare la prochaine étape.',
    primaryCta: 'Échanger avec Frédéric',
  },
};
