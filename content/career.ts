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
    /** Libellé placé au-dessus de la liste « retenu » de chaque chapitre. */
    retainedLabel: string;
    items: CareerChapter[];
  };
  combinations: {
    eyebrow: string;
    title: string;
    /** Sous-titre en deux phrases distinctes ; `emphasis` est renforcée. */
    intro: { first: string; emphasis: string };
    /** En-têtes de colonnes, visibles uniquement quand les colonnes existent. */
    headers: { inputs: string; outcome: string };
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
    retainedLabel: 'Ce que j’en ai retenu',
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
    headers: { inputs: 'Expériences mobilisées', outcome: 'Capacité construite' },
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

/**
 * Contenu allemand de la page Werdegang (/de/werdegang).
 *
 * Traduction professionnelle validée des textes français ci-dessus.
 * Aucune date, aucun employeur et aucun diplôme n’y figure : la frise de
 * référence (content/CHRONOLOGIE.md) n’est pas encore renseignée.
 */
export const careerDe: CareerContent = {
  meta: {
    title: 'Werdegang — Frédéric Lejour',
    description:
      'Telekommunikation, Vermögensberatung, Immobilien und Beratung zwischen Frankreich und Deutschland: Frédéric Lejours Werdegang im Dienste von Geschäftsentwicklung und strategischen Beziehungen.',
  },

  hero: {
    eyebrow: 'WERDEGANG',
    title: [
      'Die Praxis als Schule',
      'Beziehungen als Methode',
      'Mehrwert als Ergebnis',
    ],
    intro: [
      'Von der Telekommunikation über die Vermögensberatung und die Immobilienwirtschaft bis hin zum Unternehmertum: Mein Werdegang führte mich durch unterschiedliche Bereiche, drehte sich jedoch immer um dieselbe Frage: Wie lässt sich eine Situation so gut verstehen, dass eine Entscheidung vorankommt?',
    ],
  },

  thread: {
    eyebrow: 'DER ROTE FADEN',
    title: 'Drei Verben, eine gemeinsame Logik',
    intro: 'Unabhängig vom jeweiligen Umfeld bleibt die Vorgehensweise dieselbe.',
    verbs: [
      {
        word: 'Verstehen',
        explanation:
          'Zuhören, den Markt analysieren und die tatsächlichen Beweggründe erkennen.',
      },
      {
        word: 'Gestalten',
        explanation:
          'Ein Angebot, eine Beziehung oder ein Vertriebssystem strukturieren.',
      },
      {
        word: 'Entwickeln',
        explanation:
          'Potenzial in Kunden, Partnerschaften und konkrete Ergebnisse verwandeln.',
      },
    ],
  },

  chapters: {
    eyebrow: 'DER WEG',
    title: 'Vier Bereiche, eine gemeinsame Fähigkeit',
    manifesto: {
      lines: ['Die Voraussetzungen schaffen', 'für eine Entscheidung.'],
      highlight: 'Entscheidung.',
    },
    retainedLabel: 'Was ich daraus mitgenommen habe',
    items: [
      {
        step: '01',
        environment: 'Telekommunikation',
        title: 'Vertriebsperformance steuern',
        narrative: [
          'In der Telekommunikationsbranche entwickelte ich eine ausgeprägte Vertriebs-, Verhandlungs- und Steuerungskultur in einem strukturierten, konsequent ergebnisorientierten Umfeld. Dort übernahm ich Verantwortung in der Vertriebsleitung und führte zehn Mitarbeitende, verteilt auf zwei Teams.',
        ],
        retained: [
          'Eine Kultur messbarer Ergebnisse',
          'Konsequente Vertriebsprozesse',
          'Führung von Teams',
        ],
      },
      {
        step: '02',
        environment: 'Vermögensberatung',
        title: 'Entscheidungen begleiten, die langfristige Auswirkungen haben',
        narrative: [
          'In der Vermögensberatung wirkte sich jede Entscheidung auf die Vorhaben, das finanzielle Gleichgewicht und die Zukunft meiner Kunden aus. Diese Erfahrung hat mich gelehrt, Analyse, Zuhören und verständliche Vermittlung miteinander zu verbinden, um komplexe Entscheidungen nachvollziehbar zu machen und langfristiges Vertrauen aufzubauen.',
        ],
        retained: [
          'Aufmerksames Zuhören in komplexen Situationen',
          'Vertrauen als Voraussetzung für Entscheidungen',
          'Hohe analytische Ansprüche',
        ],
      },
      {
        step: '03',
        environment: 'Immobilien und Unternehmertum',
        title: 'Unternehmerisch handeln und neue Angebote entwickeln',
        narrative: [
          'Als Immobilieninvestor und später als Leiter zweier Immobilienagenturen habe ich umfassende Erfahrung mit Immobilientransaktionen gesammelt. Darüber hinaus entwickelte ich Angebote für Immobilieneigentümer, insbesondere VRP31J und Premium Vendeur, sowie ein digitales System zur Kundengewinnung.',
        ],
        retained: [
          'Die Praxis als Quelle kontinuierlichen Lernens',
          'Die Entwicklung vermarktbarer Angebote',
          'Der Aufbau einer Geschäftstätigkeit von Anfang bis Ende',
        ],
      },
      {
        step: '04',
        environment: 'Beratung, Digitalisierung und internationales Geschäft',
        title: 'Geschäftsentwicklung über räumliche Grenzen hinweg',
        narrative: [
          'Mit Lejour Consulting habe ich von Deutschland aus eine Geschäftstätigkeit entwickelt, die sich hauptsächlich an den französischen Markt richtete: Präsentation der Angebote, Vertragsabschluss und Betreuung aus der Ferne, gezielte Termine vor Ort sowie der Einsatz digitaler Werkzeuge und von Automatisierung zur Stärkung der Kundenbeziehungen.',
        ],
        retained: [
          'Vertrauen ohne geografische Nähe schaffen',
          'Geschäftsentwicklung aus der Ferne, ohne die Beziehung zu schwächen',
          'Technologie in den Dienst des Menschen stellen',
        ],
      },
    ],
  },

  combinations: {
    eyebrow: 'ENTWICKLUNG',
    title: 'Was diese Erfahrungen hervorgebracht haben.',
    intro: {
      first: 'Diese Kompetenzen folgten nicht einfach nur aufeinander.',
      emphasis: 'Sie haben sich schrittweise miteinander verbunden.',
    },
    headers: { inputs: 'Eingebrachte Erfahrungen', outcome: 'Entwickelte Fähigkeit' },
    items: [
      {
        inputs: ['Vertrieb', 'Führung'],
        outcome: 'Geschäftsentwicklung steuern',
        description:
          'Den direkten Vertrieb um Organisation, Führung und eine strukturierte Akquisestrategie erweitern.',
      },
      {
        inputs: ['Analyse', 'Zuhören'],
        outcome: 'Entscheidungen begleiten',
        description:
          'Das Verständnis einer Situation mit dem Verständnis der Beweggründe verbinden, um eine komplexe Entscheidung voranzubringen.',
      },
      {
        inputs: ['Praxis', 'Unternehmertum'],
        outcome: 'Fachwissen vermarkten',
        description:
          'Praxiserfahrung in ein strukturiertes, differenziertes und marktfähiges Nutzenversprechen verwandeln.',
      },
      {
        inputs: ['Digitalisierung', 'Künstliche Intelligenz'],
        outcome: 'Ein technologiegestütztes Vertriebssystem aufbauen',
        description:
          'Kundengewinnung, Kommunikation, Automatisierung und persönliche Beziehungen zu einem schlüssigen Gesamtsystem verbinden.',
      },
    ],
  },

  landmarks: {
    eyebrow: 'DER WERDEGANG IN ZAHLEN',
    title: 'Eine Erfahrung, die über viele Jahre und durch konkretes Handeln gewachsen ist.',
    items: [
      { figure: '20+', label: 'Jahre Vertriebserfahrung' },
      { figure: '150+', label: 'Immobilientransaktionen' },
      { figure: '50 Mio. €+', label: 'Immobilienvolumen' },
      {
        figure: 'Frankreich · Deutschland',
        label:
          'Durch eigene Lebenserfahrung mit den kulturellen Gepflogenheiten, dem Alltag und den Rahmenbedingungen beider Länder vertraut.',
      },
    ],
  },

  positioning: {
    title: 'Vielfältige Erfahrung im Dienste des Wachstums.',
    text: 'Heute verbinde ich meine Erfahrung aus der Praxis, der Beratung, der Verhandlung und dem Unternehmertum, um zu Herausforderungen in den Bereichen Business Development, Account Management, strategische Beziehungen und Customer Growth beizutragen.',
    personas: {
      eyebrow: 'UNTERNEHMEN UND MÄRKTE',
      title: 'Wo dieses Profil den Unterschied machen kann.',
      intro:
        'Diese Erfahrung entfaltet ihren besonderen Wert in Unternehmen, die ein Angebot verständlicher machen, strategische Beziehungen ausbauen oder Geschäftspotenzial in konkretes Wachstum verwandeln möchten.',
      contributionLabel: 'DIESES PROFIL BRINGT EIN',
      items: [
        {
          market: 'PROPTECH UND IMMOBILIENÖKOSYSTEM',
          situation:
            'Eine PropTech, ein Netzwerk oder ein Immobiliendienstleister, der die Nutzung seiner Lösung durch Makler, Agenturen und Partner beschleunigen möchte.',
          contribution:
            'Die Praxis verstehen, das Nutzenversprechen strukturieren und ein professionelles Netzwerk aktivieren.',
        },
        {
          market: 'SAAS B2B, KÜNSTLICHE INTELLIGENZ UND AUTOMATISIERUNG',
          situation:
            'Ein Anbieter mit einer leistungsfähigen Technologie, dessen Angebot noch verständlicher, attraktiver und besser vermarktbar werden muss.',
          contribution:
            'Technologie in konkrete Vorteile übersetzen und komplexe Entscheidungen begleiten.',
        },
        {
          market: 'STRATEGISCHE KUNDEN UND PARTNERSCHAFTEN',
          situation:
            'Ein Unternehmen mit Kunden, strategischen Accounts oder Partnern, deren Entwicklungspotenzial noch nicht vollständig ausgeschöpft ist.',
          contribution:
            'Beziehungen vertiefen, neue Geschäftsmöglichkeiten erkennen und langfristiges Wachstum aufbauen.',
        },
        {
          market: 'GESCHÄFTSBEZIEHUNGEN ZWISCHEN FRANKREICH UND DEUTSCHLAND',
          situation:
            'Ein zwischen Frankreich und Deutschland tätiges Unternehmen, das seine Kommunikation und seine Beziehungen an die kulturellen Gepflogenheiten und Erwartungen auf beiden Seiten anpassen muss.',
          contribution:
            'Das gegenseitige Verständnis erleichtern und die Entwicklung der Beziehungen absichern.',
        },
      ],
    },
    relatedLabel: 'ZUR VERTIEFUNG',
    related: [
      {
        pageKey: 'approach',
        label: 'Arbeitsweise',
        description: 'Wie ich beobachte, lerne und konkrete Maßnahmen entwickle.',
      },
      {
        pageKey: 'expertise',
        label: 'Expertise',
        description:
          'Die vertrieblichen, zwischenmenschlichen und technologischen Hebel, die ich einsetze.',
      },
      {
        pageKey: 'work',
        label: 'Projekte',
        description:
          'Konkrete Situationen, in denen diese Erfahrung Mehrwert geschaffen hat.',
      },
    ],
  },

  cta: {
    title: 'Ein Werdegang gewinnt seinen vollen Sinn, wenn er auf den nächsten Schritt vorbereitet.',
    primaryCta: 'Mit Frédéric ins Gespräch kommen',
  },
};

/**
 * Contenu de la page Career (/en/career).
 * Textes fournis et validés par Frédéric Lejour.
 */
export const careerEn: CareerContent = {
  meta: {
    title: 'Career — Frédéric Lejour',
    description:
      'Telecommunications, wealth management, real estate and consulting between France and Germany: Frédéric Lejour’s career in business development and strategic relationships.',
  },
  hero: {
    eyebrow: 'CAREER',
    title: [
      'The field as a school',
      'Relationships as a method',
      'Value as the outcome',
    ],
    intro: [
      'From telecommunications to real estate, from wealth management to entrepreneurship, my career has developed across different environments around one constant question: how can I understand a situation well enough to move a decision forward?',
    ],
  },
  thread: {
    eyebrow: 'A COMMON THREAD',
    title: 'Three verbs, one shared logic',
    intro: 'Whatever the environment, the approach remains the same.',
    verbs: [
      {
        word: 'Understand',
        explanation:
          'Listen, analyse the market and identify the real motivations.',
      },
      {
        word: 'Build',
        explanation:
          'Structure a proposition, a relationship or a commercial system.',
      },
      {
        word: 'Grow',
        explanation:
          'Turn potential into customers, partnerships and results.',
      },
    ],
  },
  chapters: {
    eyebrow: 'CAREER PATH',
    title: 'Four environments, one shared capability',
    manifesto: {
      lines: ['Create the conditions', 'for a decision.'],
      highlight: 'decision.',
    },
    retainedLabel: 'What I took from it',
    items: [
      {
        step: '01',
        environment: 'TELECOMMUNICATIONS',
        title: 'Drive commercial performance',
        narrative: [
          'In telecommunications, I built a strong foundation in sales, negotiation and commercial management within a structured, results-driven environment. I held sales leadership responsibilities and managed ten people across two teams.',
        ],
        retained: [
          'A culture of measurable results',
          'Rigour in the sales process',
          'Team management',
        ],
      },
      {
        step: '02',
        environment: 'WEALTH MANAGEMENT',
        title: 'Support decisions with lasting consequences',
        narrative: [
          'In wealth management, every decision affected my clients’ plans, financial balance and future. This experience taught me to combine analysis, listening and clear explanation to make complex choices understandable and build trust over time.',
        ],
        retained: [
          'Listening to complex situations',
          'Trust as a condition for decision-making',
          'Analytical rigour',
        ],
      },
      {
        step: '03',
        environment: 'REAL ESTATE AND ENTREPRENEURSHIP',
        title: 'Build businesses and create new offerings',
        narrative: [
          'As an investor and later the head of two agencies, I developed end-to-end experience of property transactions and created offerings for property owners looking to sell, including VRP31J and Premium Vendeur, as well as a digital acquisition system.',
        ],
        retained: [
          'Field action as a source of learning',
          'Creating market-ready offerings',
          'Developing a business end to end',
        ],
      },
      {
        step: '04',
        environment: 'CONSULTING, DIGITAL AND INTERNATIONAL',
        title: 'Grow beyond geographical proximity',
        narrative: [
          'Through Lejour Consulting, based in Germany, I developed a business primarily serving the French market: presenting offers, contracting and follow-up remotely, targeted on-site visits, and using digital tools and automation to amplify relationships.',
        ],
        retained: [
          'Building trust without geographical proximity',
          'Growing remotely without weakening the relationship',
          'Putting technology at the service of people',
        ],
      },
    ],
  },
  combinations: {
    eyebrow: 'EVOLUTION',
    title: 'What these experiences have built.',
    intro: {
      first: 'These capabilities did not simply follow one another.',
      emphasis: 'They gradually came together.',
    },
    headers: {
      inputs: 'Experience applied',
      outcome: 'Capability built',
    },
    items: [
      {
        inputs: ['Sales', 'Management'],
        outcome: 'Drive business development',
        description:
          'Extend direct selling into organisation, management and acquisition strategy.',
      },
      {
        inputs: ['Analysis', 'Listening'],
        outcome: 'Support decision-making',
        description:
          'Combine an understanding of the situation and its underlying motivations to move a complex choice forward.',
      },
      {
        inputs: ['Field Experience', 'Entrepreneurship'],
        outcome: 'Turn expertise into a marketable offering',
        description:
          'Transform field expertise into a structured, differentiated and market-ready value proposition.',
      },
      {
        inputs: ['Digital', 'Artificial Intelligence'],
        outcome: 'Build an enhanced commercial system',
        description:
          'Connect acquisition, communication, automation and relationships within one coherent system.',
      },
    ],
  },
  landmarks: {
    eyebrow: 'CAREER IN NUMBERS',
    title: 'Experience built over time and through action.',
    items: [
      {
        figure: '20+',
        label: 'years of commercial experience',
      },
      {
        figure: '150+',
        label: 'real estate transactions',
      },
      {
        figure: '€50M+',
        label: 'in real estate transaction volume',
      },
      {
        figure: 'France · Germany',
        label:
          'First-hand knowledge of the business cultures, practices and environments of both countries.',
      },
    ],
  },
  positioning: {
    title: 'Cross-functional experience in service of growth.',
    text:
      'Today, I bring together my experience in the field, consulting, negotiation and entrepreneurship to address Business Development, Account Management, strategic relationship and Customer Growth challenges.',
    personas: {
      eyebrow: 'COMPANIES AND MARKETS',
      title: 'Where this profile can make a difference.',
      intro:
        'This experience is particularly valuable to companies that need to make an offering easier to understand, develop strategic relationships or turn commercial potential into tangible growth.',
      contributionLabel: 'WHAT THIS PROFILE BRINGS',
      items: [
        {
          market: 'PROPTECH AND THE REAL ESTATE ECOSYSTEM',
          situation:
            'A PropTech company, network or real estate service provider looking to accelerate adoption of its solution among agents, agencies and partners.',
          contribution:
            'Understand the field, structure the value proposition and mobilise a professional network.',
        },
        {
          market: 'B2B SAAS, ARTIFICIAL INTELLIGENCE AND AUTOMATION',
          situation:
            'A software company with powerful technology that still needs to make its offering understandable, desirable and market-ready.',
          contribution:
            'Translate technology into tangible benefits and support complex decision-making.',
        },
        {
          market: 'STRATEGIC ACCOUNTS AND PARTNERSHIPS',
          situation:
            'A company with customers, accounts or partners whose growth potential remains underdeveloped.',
          contribution:
            'Deepen relationships, identify new opportunities and build sustainable growth.',
        },
        {
          market: 'FRANCE–GERMANY RELATIONSHIPS',
          situation:
            'A company operating between France and Germany that needs to adapt its communication and relationships to the conventions, practices and expectations on both sides.',
          contribution:
            'Facilitate mutual understanding and secure the development of relationships.',
        },
      ],
    },
    relatedLabel: 'EXPLORE FURTHER',
    related: [
      {
        pageKey: 'approach',
        label: 'Approach',
        description:
          'How I observe, learn and turn insight into action.',
      },
      {
        pageKey: 'expertise',
        label: 'Expertise',
        description:
          'The commercial, relationship and technological levers I apply.',
      },
      {
        pageKey: 'work',
        label: 'Projects',
        description:
          'Real-world situations in which this experience has created value.',
      },
    ],
  },
  cta: {
    title:
      'A career takes on its full meaning when it prepares you for the next step.',
    primaryCta: 'Talk to Frédéric',
  },
};
