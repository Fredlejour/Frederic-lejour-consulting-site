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
  /** Étiquette de phase affichée juste avant cette étape (frise d’exécution). */
  phase?: string;
};

export type ApproachVerb = {
  word: string;
  explanation: string;
  icon: string;
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
    /** Citation complète : guillemets typographiques (« » / „ “) inclus dans le texte. */
    quote: string;
    paragraphs: string[];
    /** Légendes des deux colonnes : titre en accent, sous-titre muté. */
    labels: {
      human: { title: string; subtitle: string };
      tech: { title: string; subtitle: string };
    };
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
 * (`approachDe`) reprend la même structure : un champ manquant provoque une
 * erreur de compilation.
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
        icon: 'Eye',
      },
      {
        word: 'Apprendre',
        explanation: 'Apprendre de chaque interaction et de chaque résultat.',
        icon: 'BookOpen',
      },
      {
        word: 'Adapter',
        explanation: 'Adapter la stratégie lorsque cela devient nécessaire.',
        icon: 'SlidersHorizontal',
      },
      {
        word: 'Développer',
        explanation: 'Développer ce qui crée durablement de la valeur.',
        icon: 'ArrowUpRight',
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
        phase: 'Concevoir',
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
        phase: 'Exécuter et améliorer',
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
      '« La technologie accélère une bonne stratégie. Elle ne remplace ni l’écoute, ni l’analyse, ni la relation. »',
    labels: {
      human: { title: 'L’HUMAIN', subtitle: 'Point de départ' },
      tech: { title: 'LA TECHNOLOGIE', subtitle: 'Levier' },
    },
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

/**
 * Contenu de la page Arbeitsweise (/de/arbeitsweise).
 * Textes fournis et validés par Frédéric Lejour.
 */
export const approachDe: ApproachContent = {
  meta: {
    title: 'Arbeitsweise — Frédéric Lejour',
    description:
      'Erst verstehen, dann Lösungen anbieten. Erst Mehrwert schaffen, dann überzeugen: Geschäftsentwicklung auf Basis von Zuhören, klaren Strukturen und Vertrauen.',
  },

  hero: {
    eyebrow: 'Arbeitsweise',
    title: [
      'Erst verstehen, dann Lösungen anbieten',
      'Erst Mehrwert schaffen, dann überzeugen',
    ],
    intro: [
      'Erfolgreicher Vertrieb beginnt nicht mit Verkaufsargumenten, sondern mit einem klaren Verständnis der Herausforderungen, Erwartungen und Hindernisse, die eine Entscheidung beeinflussen.',
      'Meine Arbeitsweise besteht darin, dieses Verständnis in ein klares Nutzenversprechen, eine gezieltere Kundengewinnung und eine vertrauensvolle Beziehung zu übersetzen, die langfristiges Wachstum trägt.',
    ],
  },

  reality: {
    eyebrow: 'ERFAHRUNG',
    title: 'Eine Arbeitsweise, die in der Praxis gewachsen ist',
    paragraphs: [
      'Diese Arbeitsweise ist nicht aus einem theoretischen Modell entstanden. Sie hat sich über mehr als zwanzig Jahre im Austausch mit Kunden, Teams und Unternehmen sowie in Märkten entwickelt, die vor ganz unterschiedlichen Herausforderungen standen.',
      'Vertriebsleitung, Geschäftsentwicklung, Verkauf, Verhandlung, Unternehmertum, Beratung, Weiterbildung, Recruiting, Immobilien und B2B-Projekte waren dabei vielfältige Felder zum Beobachten, Erproben und Lernen.',
      'Diese Vielfalt hat mich gelehrt, eine Annahme niemals mit einer Gewissheit zu verwechseln. Eine Strategie wird erst dann wirklich nützlich, wenn sie Ergebnisse erzielt, sich am Markt bewährt und sich anhand der gewonnenen Erkenntnisse weiterentwickeln lässt.',
    ],
  },

  conviction: {
    eyebrow: 'ÜBERZEUGUNG',
    title: 'Was mich diese Erfahrung gelehrt hat',
    paragraphs: [
      'Ein Angebot ist nicht allein deshalb erfolgreich, weil es gut ist. Es muss einen tatsächlichen Bedarf decken, seinen Mehrwert klar vermitteln und dem Kunden überzeugende Gründe geben, sich dafür zu entscheiden.',
      'Die Erfahrung hat mich gelehrt, dass keine Strategie unverändert bleiben kann. Erwartungen verändern sich, Märkte reagieren und Ergebnisse machen mitunter sichtbar, was sich aus den ersten Annahmen noch nicht absehen ließ.',
      'Deshalb beruht meine Arbeitsweise auf vier Schritten, die sich gegenseitig ergänzen:',
    ],
    verbs: [
      {
        word: 'Beobachten',
        explanation: 'Beobachten, um die tatsächliche Situation zu verstehen.',
        icon: 'Eye',
      },
      {
        word: 'Lernen',
        explanation: 'Aus jedem Austausch und jedem Ergebnis lernen.',
        icon: 'BookOpen',
      },
      {
        word: 'Anpassen',
        explanation: 'Die Strategie anpassen, wenn es notwendig wird.',
        icon: 'SlidersHorizontal',
      },
      {
        word: 'Weiterentwickeln',
        explanation: 'Weiterentwickeln, was langfristig Mehrwert schafft.',
        icon: 'ArrowUpRight',
      },
    ],
  },

  steps: {
    eyebrow: 'METHODE',
    title: 'Vier Schritte zu wirksamer Geschäftsentwicklung',
    intro:
      'Jedes Projekt beginnt mit einer sorgfältigen Analyse der Situation. Es geht nicht darum, eine vorgefertigte Methode anzuwenden, sondern eine Lösung zu entwickeln, die zu den Herausforderungen, zum Markt und zu den beteiligten Menschen passt.',
    items: [
      {
        step: '01',
        title: 'Die tatsächlichen Herausforderungen verstehen',
        description:
          'Zuhören, bevor man antwortet. Die Situation, Ziele, Rahmenbedingungen und Kriterien analysieren, die die Entscheidung tatsächlich beeinflussen.',
      },
      {
        step: '02',
        title: 'Ausreichend Mehrwert schaffen',
        description:
          'Den Nutzen des Angebots klar herausarbeiten, seine Unterscheidungsmerkmale stärken und seinen Mehrwert mit den wichtigsten Erwartungen des Kunden verbinden.',
      },
      {
        step: '03',
        title: 'Kundengewinnung mit Fokus auf Qualität strukturieren',
        description:
          'Die passenden Zielkunden identifizieren, relevante Botschaften entwickeln und einen schlüssigen Vertriebsprozess gestalten, ohne Aktivität mit Wirksamkeit zu verwechseln.',
      },
      {
        step: '04',
        title: 'Vertrauen stärken',
        description:
          'Eine Beziehung aufbauen, die auf Transparenz, relevanten Gesprächen und der Einhaltung von Zusagen beruht. Vertrauen erleichtert Entscheidungen und schafft die Grundlage für eine langfristige Zusammenarbeit.',
      },
    ],
  },

  execution: {
    eyebrow: 'ENGAGEMENT',
    title: 'Entwickeln und umsetzen',
    intro: [
      'Eine Empfehlung schafft erst dann Mehrwert, wenn sie verständlich ist, umgesetzt werden kann und sich in der Praxis überprüfen lässt.',
      'Ich verbinde strategisches Denken mit der Umsetzung, um Entscheidungen in konkrete Maßnahmen zu übersetzen, ihre Wirkung zu messen und dort schrittweise nachzubessern, wo es erforderlich ist.',
    ],
    areas: [
      {
        title: 'Situationsanalyse',
        description:
          'Die Situation verstehen, Hindernisse erkennen und Chancen sichtbar machen.',
        phase: 'Konzeption',
      },
      {
        title: 'Strategie',
        description:
          'Prioritäten setzen, grundlegende Entscheidungen treffen und die Richtung festlegen.',
      },
      {
        title: 'Positionierung und Botschaften',
        description:
          'Den Mehrwert des Angebots klar vermitteln und Botschaften entwickeln, die zu den angesprochenen Zielgruppen passen.',
      },
      {
        title: 'Vertriebsprozess',
        description:
          'Die Schritte, Verantwortlichkeiten, Werkzeuge und Kennzahlen strukturieren, die für die Geschäftsentwicklung erforderlich sind.',
      },
      {
        title: 'Umsetzung',
        description:
          'Den Übergang von der Strategie zum Handeln begleiten und aktiv zur Umsetzung beitragen.',
        phase: 'Umsetzung und Verbesserung',
      },
      {
        title: 'Auswertung und Anpassung',
        description:
          'Ergebnisse beobachten, relevante Erkenntnisse gewinnen und Maßnahmen weiterentwickeln, wenn die Situation es erfordert.',
      },
    ],
  },

  technology: {
    eyebrow: 'TECHNOLOGIE',
    title: [
      'Der Mensch als Ausgangspunkt.',
      'Technologie als Hebel.',
    ],
    quote:
      '„Technologie beschleunigt eine gute Strategie. Sie ersetzt weder das Zuhören noch die Analyse oder die Beziehung.“',
    paragraphs: [
      'Erfolgreicher Vertrieb bleibt im Kern menschlich. Beweggründe verstehen, Signale einordnen, Vertrauen schaffen und gute Entscheidungen treffen: All das verlangt eine Aufmerksamkeit, die kein Werkzeug ersetzen kann.',
      'Mit Augenmaß eingesetzt, helfen Technologien jedoch dabei, schneller voranzukommen, Informationen besser zu strukturieren und die Energie auf Maßnahmen zu konzentrieren, die tatsächlich Mehrwert schaffen.',
    ],
    labels: {
      human: { title: 'DER MENSCH', subtitle: 'Ausgangspunkt' },
      tech: { title: 'TECHNOLOGIE', subtitle: 'Hebel' },
    },
    fundamentals: [
      { word: 'Zuhören', icon: 'Ear' },
      { word: 'Analyse', icon: 'Search' },
      { word: 'Beziehung', icon: 'Handshake' },
    ],
    levers: [
      {
        title: 'Künstliche Intelligenz',
        description:
          'Informationen effizienter analysieren und zusammenfassen, um Entscheidungen und Maßnahmen fundiert vorzubereiten.',
        icon: 'BrainCircuit',
      },
      {
        title: 'Automatisierung',
        description:
          'Wiederkehrende Aufgaben zuverlässiger gestalten und Zeit für Gespräche mit höherem Mehrwert gewinnen.',
        icon: 'Workflow',
      },
      {
        title: 'Digitale Werkzeuge',
        description:
          'Informationen organisieren, Maßnahmen steuern und Ergebnisse messen, um die Strategie kontinuierlich zu verbessern.',
        icon: 'PanelsTopLeft',
      },
    ],
  },

  limits: {
    eyebrow: 'ANSPRÜCHE',
    title: 'Was ich bewusst nicht tue',
    intro:
      'Eine wirksame Zusammenarbeit setzt Klarheit darüber voraus, was man gemeinsam aufbauen möchte – und worauf man auf diesem Weg nicht verzichten will.',
    items: [
      {
        title: 'Keine Standardmethode ohne Verständnis des Kontexts',
        description:
          'Jedes Unternehmen, jeder Markt und jede Kundenbeziehung bringt eigene Herausforderungen mit sich. Eine Methode ist erst dann sinnvoll, wenn diese verstanden sind.',
        icon: 'ScanSearch',
      },
      {
        title: 'Keine Quantität auf Kosten der Qualität',
        description:
          'Mehr Aktivitäten sind nur dann sinnvoll, wenn sie die richtigen Menschen erreichen und echte Geschäftsmöglichkeiten schaffen.',
        icon: 'Target',
      },
      {
        title: 'Kein Druck als Grundlage einer Entscheidung',
        description:
          'Eine fundierte Entscheidung beruht auf wahrgenommenem Mehrwert, Vertrauen und gegenseitigem Verständnis.',
        icon: 'Handshake',
      },
      {
        title: 'Keine Strategie ohne Verbindung zur Umsetzung',
        description:
          'Empfehlungen müssen sich in konkrete Maßnahmen übersetzen lassen, deren Umsetzung gesteuert und deren Wirkung gemessen werden kann.',
        icon: 'Workflow',
      },
      {
        title: 'Keine Fortsetzung von Maßnahmen, die keinen Mehrwert mehr schaffen',
        description:
          'Ergebnisse müssen dazu dienen, zu lernen, nachzujustieren und – wenn es notwendig wird – die Richtung zu ändern.',
        icon: 'RefreshCw',
      },
    ],
  },

  cta: {
    eyebrow: 'AUSTAUSCH',
    title: 'Gemeinsam Wachstum auf echtem Mehrwert aufbauen.',
    paragraphs: [
      'Jede Situation bringt eigene Herausforderungen, Rahmenbedingungen und Chancen mit sich. Am Anfang steht, sie zu verstehen, bevor wir festlegen, welche Maßnahmen langfristig wirksame Ergebnisse erzielen können.',
      'Wenn Sie Ihre Positionierung schärfen, Ihre Geschäftsentwicklung strukturieren oder den Mehrwert Ihrer Kundenbeziehungen stärken möchten, lassen Sie uns darüber sprechen.',
    ],
    cta: 'Über Ihre Herausforderungen sprechen',
  },
};

/**
 * Contenu de la page Approach (/en/approach).
 * Textes fournis et validés par Frédéric Lejour.
 */
export const approachEn: ApproachContent = {
  meta: {
    title: 'Approach — Frédéric Lejour',
    description:
      'Understand before proposing, create value before persuading: a business development approach built on listening, structure and trust.',
  },

  hero: {
    eyebrow: 'APPROACH',
    title: [
      'Understand before you propose',
      'Create value before you persuade',
    ],
    intro: [
      'Commercial performance does not begin with a sales pitch. It begins with a precise understanding of the challenges, expectations and obstacles that shape the decision.',
      'My approach consists in turning that understanding into a clear value proposition, a better-structured acquisition strategy and a trusted relationship capable of supporting sustainable growth.',
    ],
  },

  reality: {
    eyebrow: 'EXPERIENCE',
    title: 'A method built in the real world',
    paragraphs: [
      'This approach did not originate in a theoretical model. It took shape over more than twenty years alongside clients, teams, companies and markets facing very different challenges.',
      'Sales leadership, business development, sales, negotiation, entrepreneurship, consulting, training, recruitment, real estate and B2B assignments have all provided grounds for observation, experimentation and learning.',
      'That diversity taught me never to confuse a hypothesis with certainty. A strategy only becomes truly useful when it produces results, is tested against the market and can evolve based on what the market teaches us.',
    ],
  },

  conviction: {
    eyebrow: 'CONVICTION',
    title: 'What this experience has taught me',
    paragraphs: [
      'An offering does not succeed simply because it is good. It must address a real need, communicate its value clearly and give the customer compelling reasons to choose it.',
      'Experience has taught me that no strategy can remain static. Expectations evolve, markets respond and results sometimes reveal what the initial assumptions could not anticipate.',
      'That is why my approach is based on four complementary actions:',
    ],
    verbs: [
      {
        word: 'Observe',
        explanation: 'Observe reality in order to understand it.',
        icon: 'Eye',
      },
      {
        word: 'Learn',
        explanation: 'Learn from every interaction and every result.',
        icon: 'BookOpen',
      },
      {
        word: 'Adapt',
        explanation: 'Adapt the strategy whenever necessary.',
        icon: 'SlidersHorizontal',
      },
      {
        word: 'Develop',
        explanation: 'Develop what creates lasting value.',
        icon: 'ArrowUpRight',
      },
    ],
  },

  steps: {
    eyebrow: 'METHOD',
    title: 'A four-stage approach',
    intro:
      'Every engagement begins with an accurate assessment of the situation. The objective is not to apply a predefined method, but to build a response aligned with the challenges, the market and the people involved.',
    items: [
      {
        step: '01',
        title: 'Understand the real challenges',
        description:
          'Listen before responding. Analyse the situation, the objectives, the constraints and the criteria that genuinely shape the decision.',
      },
      {
        step: '02',
        title: 'Create enough value',
        description:
          'Clarify what the offering delivers, strengthen its differentiation and connect its value to the customer’s highest-priority expectations.',
      },
      {
        step: '03',
        title: 'Build a quality-focused acquisition strategy',
        description:
          'Identify the right targets, develop suitable messages and organise a coherent sales journey without confusing activity with effectiveness.',
      },
      {
        step: '04',
        title: 'Strengthen trust',
        description:
          'Build a relationship based on transparency, relevant dialogue and respect for commitments. Trust facilitates the decision and supports a lasting relationship.',
      },
    ],
  },

  execution: {
    eyebrow: 'COMMITMENT',
    title: 'Design and deliver',
    intro: [
      'A recommendation only creates value when it can be understood, implemented and tested against reality.',
      'I combine strategic thinking with execution to turn decisions into action, measure their effects and progressively improve what needs to be improved.',
    ],
    areas: [
      {
        title: 'Assessment',
        description:
          'Understand the situation, identify the obstacles and reveal the opportunities.',
        phase: 'Design',
      },
      {
        title: 'Strategy',
        description:
          'Define the priorities, the structuring choices and the direction to follow.',
      },
      {
        title: 'Positioning and messaging',
        description:
          'Clearly express the value of the offering and develop messages suited to the target audiences.',
      },
      {
        title: 'Sales process',
        description:
          'Organise the stages, responsibilities, tools and indicators required for development.',
      },
      {
        title: 'Implementation',
        description:
          'Support the transition from strategy to action and contribute to its delivery.',
        phase: 'Deliver and improve',
      },
      {
        title: 'Analysis and adjustment',
        description:
          'Observe the results, draw useful lessons and adapt the actions whenever the situation requires it.',
      },
    ],
  },

  technology: {
    eyebrow: 'TECHNOLOGY',
    title: [
      'People as the starting point.',
      'Technology as a lever.',
    ],
    quote:
      '“Technology accelerates a sound strategy. It replaces neither listening, analysis nor human connection.”',
    labels: {
      human: { title: 'PEOPLE', subtitle: 'Starting point' },
      tech: { title: 'TECHNOLOGY', subtitle: 'Lever' },
    },
    paragraphs: [
      'Commercial performance remains fundamentally human. Understanding motivations, interpreting signals, building trust and making sound decisions require a level of attention that no tool can replace.',
      'When used thoughtfully, however, technology makes it possible to move faster, structure information more effectively and focus energy on the actions that genuinely create value.',
    ],
    fundamentals: [
      { word: 'Listening', icon: 'Ear' },
      { word: 'Analysis', icon: 'Search' },
      { word: 'Relationships', icon: 'Handshake' },
    ],
    levers: [
      {
        title: 'Artificial intelligence',
        description:
          'Analyse, synthesise and prepare decisions and actions more effectively.',
        icon: 'BrainCircuit',
      },
      {
        title: 'Automation',
        description:
          'Make repetitive tasks more reliable and free up time for higher-value interactions.',
        icon: 'Workflow',
      },
      {
        title: 'Digital tools',
        description:
          'Organise information, manage actions and measure results in order to continuously improve the strategy.',
        icon: 'PanelsTopLeft',
      },
    ],
  },

  limits: {
    eyebrow: 'STANDARDS',
    title: 'What I consciously choose not to do',
    intro:
      'Effective collaboration requires clarity about what we want to build, but also about what we refuse to sacrifice along the way.',
    items: [
      {
        title: 'No one-size-fits-all method without understanding the context',
        description:
          'Every company, market and commercial relationship has its own challenges. A method only becomes relevant once those challenges have been understood.',
        icon: 'ScanSearch',
      },
      {
        title: 'No volume at the expense of quality',
        description:
          'Increasing activity only makes sense when it targets the right people and creates genuine opportunities.',
        icon: 'Target',
      },
      {
        title: 'No pressure as a driver of decisions',
        description:
          'A sound decision is built on perceived value, trust and mutual understanding.',
        icon: 'Handshake',
      },
      {
        title: 'No strategy disconnected from execution',
        description:
          'Recommendations must be capable of being translated into concrete, managed and measurable actions.',
        icon: 'Workflow',
      },
      {
        title: 'No action continued once it stops creating value',
        description:
          'Results must make it possible to learn, adjust and, whenever necessary, change direction.',
        icon: 'RefreshCw',
      },
    ],
  },

  cta: {
    eyebrow: 'LET’S TALK',
    title: 'Let’s build growth grounded in real value.',
    paragraphs: [
      'Every situation has its own challenges, constraints and opportunities. The starting point is to understand them before determining which actions can produce lasting results.',
      'If you want to clarify your positioning, structure your business development or strengthen the value created through your customer relationships, let’s start with a conversation.',
    ],
    cta: 'Discuss your challenges',
  },
};
