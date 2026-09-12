import type { PageMeta } from './types';

export type ApproachStep = {
  step: string;
  title: string;
  description: string;
};

export type ApproachArea = {
  title: string;
  description: string;
  icon?: string;
};

export type ApproachVerb = {
  word: string;
  explanation: string;
};

export type ApproachLimit = {
  title: string;
  description: string;
  icon: string;
};

export type ApproachContent = {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    /** Deux lignes de titre, à rendre l’une sous l’autre. */
    title: [string, string];
    intro: string[];
  };
  reality: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  conviction: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    verbs: ApproachVerb[];
  };
  steps: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ApproachStep[];
  };
  execution: {
    eyebrow: string;
    title: string;
    intro: string[];
    areas: ApproachArea[];
  };
  technology: {
    eyebrow: string;
    /** Deux lignes de titre, à rendre l’une sous l’autre. */
    title: [string, string];
    quote: string;
    paragraphs: string[];
    fundamentals: { word: string; icon: string }[];
    levers: ApproachArea[];
  };
  limits: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ApproachLimit[];
  };
  cta: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cta: string;
  };
};

/**
 * Contenu de la page Approche (/fr/approche).
 *
 * Chaque élément factuel ici a été fourni et validé. L’adaptation allemande
 * fera l’objet d’une traduction professionnelle séparée et sera publiée en
 * même temps que la version française.
 */
export const approachFr: ApproachContent = {
  meta: {
    title: 'Approche — Frédéric Lejour',
    description:
      'Comprendre avant de proposer, créer de la valeur avant de convaincre : une approche du développement commercial fondée sur l’écoute, la structure et la confiance.',
  },

  hero: {
    eyebrow: 'Approche',
    title: [
      'Comprendre avant de proposer',
      'Créer de la valeur avant de convaincre',
    ],
    intro: [
      'La performance commerciale ne commence pas par un argumentaire, mais par une compréhension précise des enjeux, des attentes et des obstacles qui façonnent la décision.',
      'Mon approche consiste à transformer cette compréhension en une proposition de valeur claire, une acquisition mieux structurée et une relation de confiance capable de soutenir une croissance durable.',
    ],
  },

  reality: {
    eyebrow: 'EXPÉRIENCE',
    title: 'Une méthode construite dans la réalité',
    paragraphs: [
      'Cette approche n’est pas née d’un modèle théorique. Elle s’est construite pendant plus de vingt ans au contact de clients, d’équipes, d’entreprises et de marchés confrontés à des enjeux très différents.',
      'Direction commerciale, développement d’activité, vente, négociation, entrepreneuriat, conseil, formation, recrutement, immobilier et missions B2B ont constitué autant de terrains d’observation, d’expérimentation et d’apprentissage.',
      'Cette diversité m’a appris à ne jamais confondre une hypothèse avec une certitude. Une stratégie devient réellement utile lorsqu’elle produit des résultats, se confronte au marché et peut évoluer à partir de ce que celui-ci nous enseigne.',
    ],
  },

  conviction: {
    eyebrow: 'CONVICTION',
    title: 'Ce que cette expérience m’a appris',
    paragraphs: [
      'Une offre ne réussit pas uniquement parce qu’elle est bonne. Elle doit répondre à un besoin réel, exprimer clairement sa valeur et donner au client des raisons solides de la choisir.',
      'L’expérience m’a appris qu’aucune stratégie ne peut rester figée. Les attentes évoluent, les marchés réagissent et les résultats révèlent parfois ce que les premières hypothèses ne permettaient pas d’anticiper.',
      'C’est pourquoi mon approche repose sur quatre actions complémentaires :',
    ],
    verbs: [
      {
        word: 'Observer',
        explanation: 'Observer pour comprendre la réalité.',
      },
      {
        word: 'Apprendre',
        explanation: 'Apprendre de chaque interaction et de chaque résultat.',
      },
      {
        word: 'Adapter',
        explanation: 'Adapter la stratégie lorsque cela devient nécessaire.',
      },
      {
        word: 'Développer',
        explanation: 'Développer ce qui crée durablement de la valeur.',
      },
    ],
  },

  steps: {
    eyebrow: 'MÉTHODE',
    title: 'Une approche en quatre temps',
    intro:
      'Chaque mission commence par une lecture précise de la situation. L’objectif n’est pas d’appliquer une méthode prédéfinie, mais de construire une réponse cohérente avec les enjeux, le marché et les personnes concernées.',
    items: [
      {
        step: '01',
        title: 'Comprendre les enjeux réels',
        description:
          'Écouter avant de répondre. Analyser la situation, les objectifs, les contraintes et les critères qui orientent réellement la décision.',
      },
      {
        step: '02',
        title: 'Créer suffisamment de valeur',
        description:
          'Clarifier ce que l’offre apporte, renforcer sa différenciation et relier sa valeur aux attentes prioritaires du client.',
      },
      {
        step: '03',
        title: 'Structurer une acquisition qualitative',
        description:
          'Identifier les bonnes cibles, construire les messages adaptés et organiser un parcours commercial cohérent, sans confondre activité et efficacité.',
      },
      {
        step: '04',
        title: 'Renforcer la confiance',
        description:
          'Créer une relation fondée sur la transparence, la pertinence des échanges et le respect des engagements. La confiance facilite la décision et permet de développer une relation durable.',
      },
    ],
  },

  execution: {
    eyebrow: 'ENGAGEMENT',
    title: 'Concevoir et exécuter',
    intro: [
      'Une recommandation ne crée de valeur que lorsqu’elle peut être comprise, mise en œuvre et confrontée à la réalité.',
      'J’associe la réflexion stratégique à l’exécution pour transformer les décisions en actions, mesurer leurs effets et améliorer progressivement ce qui doit l’être.',
    ],
    areas: [
      {
        title: 'Diagnostic',
        description:
          'Comprendre la situation, identifier les obstacles et révéler les opportunités.',
      },
      {
        title: 'Stratégie',
        description:
          'Définir les priorités, les choix structurants et la direction à suivre.',
      },
      {
        title: 'Positionnement et messages',
        description:
          'Exprimer clairement la valeur de l’offre et construire des messages adaptés aux interlocuteurs ciblés.',
      },
      {
        title: 'Processus commercial',
        description:
          'Organiser les étapes, les responsabilités, les outils et les indicateurs nécessaires au développement.',
      },
      {
        title: 'Mise en œuvre',
        description:
          'Accompagner le passage de la stratégie à l’action et contribuer à sa réalisation.',
      },
      {
        title: 'Analyse et ajustements',
        description:
          'Observer les résultats, tirer les enseignements utiles et faire évoluer les actions lorsque la situation l’exige.',
      },
    ],
  },

  technology: {
    eyebrow: 'TECHNOLOGIE',
    title: [
      'L’humain comme point de départ.',
      'La technologie comme levier.',
    ],
    quote:
      'La technologie accélère une bonne stratégie. Elle ne remplace ni l’écoute, ni l’analyse, ni la relation.',
    paragraphs: [
      'La performance commerciale reste profondément humaine. Comprendre les motivations, interpréter les signaux, créer la confiance et prendre les bonnes décisions exigent une qualité d’attention qu’aucun outil ne peut remplacer.',
      'Utilisées avec discernement, les technologies permettent cependant d’aller plus vite, de mieux structurer l’information et de concentrer l’énergie sur les actions qui créent réellement de la valeur.',
    ],
    fundamentals: [
      { word: 'Écoute', icon: 'Ear' },
      { word: 'Analyse', icon: 'Search' },
      { word: 'Relation', icon: 'Handshake' },
    ],
    levers: [
      {
        title: 'Intelligence artificielle',
        description:
          'Analyser, synthétiser et préparer plus efficacement les décisions et les actions.',
        icon: 'BrainCircuit',
      },
      {
        title: 'Automatisation',
        description:
          'Fiabiliser les tâches répétitives et libérer du temps pour les échanges à plus forte valeur ajoutée.',
        icon: 'Workflow',
      },
      {
        title: 'Outils digitaux',
        description:
          'Organiser les informations, piloter les actions et mesurer les résultats pour améliorer continuellement la stratégie.',
        icon: 'PanelsTopLeft',
      },
    ],
  },

  limits: {
    eyebrow: 'EXIGENCES',
    title: 'Ce que je ne fais pas',
    intro:
      'Une collaboration efficace suppose de savoir clairement ce que l’on veut construire, mais aussi ce que l’on refuse de sacrifier en chemin.',
    items: [
      {
        title: 'Pas de méthode standard sans compréhension du contexte',
        description:
          'Chaque entreprise, chaque marché et chaque relation commerciale possède ses propres enjeux. Une méthode ne devient pertinente qu’après les avoir compris.',
        icon: 'ScanSearch',
      },
      {
        title: 'Pas de volume au détriment de la qualité',
        description:
          'Multiplier les actions n’a de sens que si elles ciblent les bonnes personnes et créent de véritables opportunités.',
        icon: 'Target',
      },
      {
        title: 'Pas de pression comme moteur de décision',
        description:
          'Une décision solide repose sur la valeur perçue, la confiance et la compréhension mutuelle.',
        icon: 'Handshake',
      },
      {
        title: 'Pas de stratégie déconnectée de son exécution',
        description:
          'Les recommandations doivent pouvoir être traduites en actions concrètes, pilotées et mesurées.',
        icon: 'Workflow',
      },
      {
        title: 'Pas d’action poursuivie lorsqu’elle ne crée plus de valeur',
        description:
          'Les résultats doivent permettre d’apprendre, d’ajuster et, lorsque cela devient nécessaire, de changer de direction.',
        icon: 'RefreshCw',
      },
    ],
  },

  cta: {
    eyebrow: 'ÉCHANGE',
    title: 'Construisons une croissance qui repose sur une valeur réelle.',
    paragraphs: [
      'Chaque situation possède ses propres enjeux, ses contraintes et ses opportunités. Le point de départ consiste à les comprendre avant de déterminer les actions capables de produire un résultat durable.',
      'Si vous souhaitez clarifier votre positionnement, structurer votre développement commercial ou renforcer la valeur créée dans vos relations clients, commençons par en parler.',
    ],
    cta: 'Échanger sur vos enjeux',
  },
};
