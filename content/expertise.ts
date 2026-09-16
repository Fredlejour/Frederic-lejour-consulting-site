import type { PageMeta } from './types';

export type ExpertiseDomain = {
  step: string;
  title: string;
  description: string;
  tags: string;
  icon: string;
};

export type ExpertiseSituation = {
  step: string;
  title: string;
  description: string;
};

export type ExpertiseSkill = {
  title: string;
  description: string;
};

export type ExpertiseContent = {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    /** Deux lignes de titre, à rendre l’une sous l’autre ; la dernière en accent. */
    title: [string, string];
    intro: string[];
  };
  domains: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ExpertiseDomain[];
  };
  situations: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ExpertiseSituation[];
  };
  skills: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ExpertiseSkill[];
  };
  cta: {
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

/**
 * Contenu de la page Expertises (/fr/expertises).
 *
 * Chaque élément a été fourni et validé pour la version française.
 * L’adaptation allemande (`expertiseDe`) reprend la même structure :
 * un champ manquant provoque une erreur de compilation.
 */
export const expertiseFr: ExpertiseContent = {
  meta: {
    title: 'Expertises en développement commercial | Frédéric Lejour',
    description:
      'Développement commercial, comptes stratégiques, partenariats et négociation : découvrez les expertises de Frédéric Lejour pour transformer un potentiel commercial en croissance concrète.',
  },

  hero: {
    eyebrow: 'EXPERTISES',
    title: ['Transformer le potentiel commercial', 'en croissance concrète'],
    intro: [
      'La performance commerciale ne dépend pas d’une action isolée. Elle repose sur la capacité à comprendre un marché, créer de la valeur, construire des relations solides et faciliter les décisions.',
      'J’interviens sur les leviers qui permettent de transformer un potentiel commercial en opportunités concrètes, en comptes durables et en résultats mesurables.',
    ],
  },

  domains: {
    eyebrow: 'DOMAINES D’EXPERTISE',
    title: 'Quatre leviers pour développer la valeur commerciale',
    intro:
      'Chaque situation demande une réponse spécifique. Ces quatre domaines constituent les principaux leviers sur lesquels je peux agir pour soutenir la croissance d’une entreprise.',
    items: [
      {
        step: '01',
        title: 'Développer de nouvelles opportunités',
        description:
          'Identifier de nouveaux marchés, cibler les bons interlocuteurs et transformer la prospection en conversations commerciales qualifiées.',
        tags: 'Business Development · Prospection ciblée · Qualification · Acquisition client',
        icon: 'Target',
      },
      {
        step: '02',
        title: 'Faire grandir les comptes stratégiques',
        description:
          'Comprendre les enjeux du client, développer la relation et révéler le potentiel de croissance encore inexploité au sein du compte.',
        tags: 'Key Account Management · Fidélisation · Customer Growth',
        icon: 'Users',
      },
      {
        step: '03',
        title: 'Construire des partenariats durables',
        description:
          'Identifier les complémentarités, aligner les intérêts et structurer des collaborations capables de créer de nouvelles sources d’activité.',
        tags: 'Strategic Partnerships · Réseaux de partenaires · Développement d’écosystèmes',
        icon: 'Handshake',
      },
      {
        step: '04',
        title: 'Faciliter les décisions complexes',
        description:
          'Clarifier la valeur, comprendre les motivations des différentes parties et créer les conditions d’une décision naturelle et durable.',
        tags: 'Intelligence relationnelle · Négociation · Accompagnement de la décision',
        icon: 'Scale',
      },
    ],
  },

  situations: {
    eyebrow: 'SITUATIONS D’INTERVENTION',
    title: 'Lorsque le potentiel existe, mais ne se traduit pas encore pleinement dans les résultats',
    intro:
      'J’interviens lorsque l’entreprise dispose déjà d’une offre, d’un marché ou de relations commerciales, mais qu’un obstacle empêche encore leur plein développement.',
    items: [
      {
        step: '01',
        title: 'Votre offre est solide, mais la croissance ralentit',
        description:
          'Le marché existe et l’équipe est engagée, mais les résultats ne progressent plus au rythme attendu. Il faut identifier les freins, repréciser les priorités et ouvrir de nouvelles voies de développement.',
      },
      {
        step: '02',
        title: 'La prospection génère de l’activité, mais trop peu d’opportunités réelles',
        description:
          'Les actions se multiplient sans produire suffisamment de conversations qualifiées. J’interviens pour améliorer le ciblage, la proposition de valeur et la transformation des prises de contact.',
      },
      {
        step: '03',
        title: 'Des comptes stratégiques restent sous-exploités',
        description:
          'La relation commerciale existe, mais son potentiel n’est pas pleinement développé. L’enjeu consiste à mieux comprendre le client, détecter de nouveaux besoins et construire une croissance durable du compte.',
      },
      {
        step: '04',
        title: 'Une décision commerciale complexe reste bloquée',
        description:
          'Plusieurs interlocuteurs, intérêts ou contraintes ralentissent l’avancement. J’aide à clarifier la valeur, comprendre les motivations et créer les conditions d’une décision naturelle.',
      },
      {
        step: '05',
        title: 'Un partenariat prometteur doit devenir une véritable source d’activité',
        description:
          'L’intention existe, mais le modèle, les responsabilités ou le plan d’activation restent flous. J’aide à structurer le partenariat et à le transformer en actions concrètes.',
      },
      {
        step: '06',
        title: 'Les outils sont présents, mais ne forment pas encore un système commercial cohérent',
        description:
          'CRM, intelligence artificielle, automatisation ou outils de prospection sont utilisés séparément. L’objectif est de les organiser autour d’une stratégie commerciale claire et profondément humaine.',
      },
    ],
  },

  skills: {
    eyebrow: 'COMPÉTENCES MOBILISÉES',
    title: 'Une expertise commerciale, stratégique et relationnelle',
    intro:
      'Selon la situation, je combine plusieurs compétences pour comprendre le problème, créer de la valeur et accompagner son développement jusqu’aux résultats.',
    items: [
      {
        title: 'Développement commercial',
        description:
          'Identifier les marchés pertinents, construire un plan d’acquisition qualifié et transformer les objectifs en opportunités concrètes.',
      },
      {
        title: 'Acquisition et qualification',
        description:
          'Cibler les bons interlocuteurs, clarifier la proposition de valeur et structurer un parcours de prospection efficace.',
      },
      {
        title: 'Gestion et croissance des comptes',
        description:
          'Comprendre les enjeux des clients, détecter les besoins cachés et développer le potentiel de croissance du compte.',
      },
      {
        title: 'Négociation complexe',
        description:
          'Clarifier les intérêts de chaque partie, lever les blocages et créer les conditions d’une décision mutuellement bénéfique.',
      },
      {
        title: 'Relations et partenariats stratégiques',
        description:
          'Identifier les complémentarités, aligner les intérêts et construire des collaborations durables et productives.',
      },
      {
        title: 'Intelligence artificielle, automatisation et outils digitaux',
        description:
          'Utiliser la technologie comme levier pour mieux structurer l’information, fiabiliser les tâches répétitives et libérer du temps pour les échanges à forte valeur ajoutée.',
      },
    ],
  },

  cta: {
    title: 'Quel potentiel commercial reste encore à développer ?',
    text: 'Échangeons sur vos enjeux de développement, de comptes stratégiques, de partenariats ou de décisions complexes.',
    primaryCta: 'Échanger avec Frédéric Lejour',
    secondaryCta: 'Découvrir mon approche',
  },
};

/**
 * Contenu de la page Expertise (/de/expertise).
 * Textes fournis et validés par Frédéric Lejour.
 */
export const expertiseDe: ExpertiseContent = {
  meta: {
    title: 'Expertise in der Geschäftsentwicklung | Frédéric Lejour',
    description:
      'Geschäftsentwicklung, strategische Kunden, Partnerschaften und Verhandlungen: Erfahren Sie, wie Frédéric Lejour Geschäftspotenzial in konkretes Wachstum verwandelt.',
  },

  hero: {
    eyebrow: 'EXPERTISE',
    title: ['Geschäftspotenzial verwandeln', 'in konkretes Wachstum'],
    intro: [
      'Vertriebserfolg hängt nicht von einer einzelnen Maßnahme ab. Entscheidend ist die Fähigkeit, einen Markt zu verstehen, Mehrwert zu schaffen, tragfähige Beziehungen aufzubauen und Entscheidungen zu erleichtern.',
      'Ich arbeite an den entscheidenden Hebeln, die Geschäftspotenzial in konkrete Chancen, langfristige Kundenbeziehungen und messbare Ergebnisse verwandeln.',
    ],
  },

  domains: {
    eyebrow: 'KOMPETENZFELDER',
    title: 'Vier Hebel zur Steigerung des geschäftlichen Mehrwerts',
    intro:
      'Jede Situation erfordert eine individuelle Lösung. Diese vier Kompetenzfelder bilden die wichtigsten Hebel, an denen ich ansetzen kann, um das Wachstum eines Unternehmens zu unterstützen.',
    items: [
      {
        step: '01',
        title: 'Neue Geschäftsmöglichkeiten erschließen',
        description:
          'Neue Märkte identifizieren, die richtigen Ansprechpartner erreichen und aus gezielter Akquise qualifizierte Verkaufsgespräche entwickeln.',
        tags: 'Business Development · Gezielte Akquise · Qualifizierung · Neukundengewinnung',
        icon: 'Target',
      },
      {
        step: '02',
        title: 'Strategische Kundenbeziehungen ausbauen',
        description:
          'Die Herausforderungen des Kunden verstehen, die Beziehung weiterentwickeln und bislang ungenutzte Wachstumspotenziale innerhalb des Kundenportfolios erschließen.',
        tags: 'Key Account Management · Kundenbindung · Customer Growth',
        icon: 'Users',
      },
      {
        step: '03',
        title: 'Langfristige Partnerschaften aufbauen',
        description:
          'Ergänzende Stärken erkennen, gemeinsame Interessen in Einklang bringen und Kooperationen strukturieren, die neue Geschäftsmöglichkeiten schaffen.',
        tags: 'Strategic Partnerships · Partnernetzwerke · Entwicklung von Ökosystemen',
        icon: 'Handshake',
      },
      {
        step: '04',
        title: 'Komplexe Entscheidungen erleichtern',
        description:
          'Den Mehrwert klar vermitteln, die Beweggründe der verschiedenen Beteiligten verstehen und die Voraussetzungen für eine fundierte, langfristig tragfähige Entscheidung schaffen.',
        tags: 'Beziehungsintelligenz · Verhandlung · Begleitung von Entscheidungsprozessen',
        icon: 'Scale',
      },
    ],
  },

  situations: {
    eyebrow: 'TYPISCHE AUSGANGSSITUATIONEN',
    title: 'Wenn Potenzial vorhanden ist, sich aber noch nicht vollständig in den Ergebnissen zeigt',
    intro:
      'Ich unterstütze Unternehmen, die bereits über ein Angebot, einen Markt oder bestehende Kundenbeziehungen verfügen, deren Entwicklung jedoch noch durch bestimmte Hindernisse gebremst wird.',
    items: [
      {
        step: '01',
        title: 'Ihr Angebot überzeugt, aber das Wachstum verlangsamt sich',
        description:
          'Der Markt ist vorhanden und das Team engagiert, doch die Ergebnisse entwickeln sich nicht mehr im erwarteten Tempo. Dann gilt es, die Hindernisse zu erkennen, die Prioritäten neu zu bestimmen und zusätzliche Wachstumsmöglichkeiten zu erschließen.',
      },
      {
        step: '02',
        title: 'Die Akquise erzeugt Aktivität, aber zu wenige echte Geschäftsmöglichkeiten',
        description:
          'Die Maßnahmen nehmen zu, führen jedoch nicht zu genügend qualifizierten Gesprächen. Ich unterstütze dabei, die Zielgruppenansprache, das Nutzenversprechen und die Umwandlung von Erstkontakten in konkrete Geschäftsmöglichkeiten zu verbessern.',
      },
      {
        step: '03',
        title: 'Das Potenzial strategischer Kunden wird noch nicht vollständig genutzt',
        description:
          'Die Kundenbeziehung besteht, doch ihr Potenzial ist noch nicht ausgeschöpft. Entscheidend ist, den Kunden besser zu verstehen, zusätzliche Bedürfnisse zu erkennen und das Kundenportfolio langfristig weiterzuentwickeln.',
      },
      {
        step: '04',
        title: 'Eine komplexe geschäftliche Entscheidung kommt nicht voran',
        description:
          'Mehrere Beteiligte, unterschiedliche Interessen oder bestimmte Rahmenbedingungen verzögern den Prozess. Ich helfe dabei, den Mehrwert klar herauszuarbeiten, Beweggründe zu verstehen und die Voraussetzungen für eine fundierte Entscheidung zu schaffen.',
      },
      {
        step: '05',
        title: 'Eine vielversprechende Partnerschaft soll zu einer echten Geschäftschance werden',
        description:
          'Die gemeinsame Absicht ist vorhanden, doch das Geschäftsmodell, die Verantwortlichkeiten oder der Aktivierungsplan sind noch nicht klar definiert. Ich unterstütze dabei, die Partnerschaft zu strukturieren und in konkrete Maßnahmen zu überführen.',
      },
      {
        step: '06',
        title: 'Die Werkzeuge sind vorhanden, bilden aber noch kein schlüssiges Vertriebssystem',
        description:
          'CRM, künstliche Intelligenz, Automatisierung und Akquisewerkzeuge werden unabhängig voneinander eingesetzt. Ziel ist es, sie in einer klaren und konsequent am Menschen ausgerichteten Vertriebsstrategie zusammenzuführen.',
      },
    ],
  },

  skills: {
    eyebrow: 'EINGESETZTE KOMPETENZEN',
    title: 'Vertriebliche, strategische und zwischenmenschliche Kompetenz',
    intro:
      'Je nach Situation verbinde ich unterschiedliche Kompetenzen, um die Herausforderung zu verstehen, Mehrwert zu schaffen und die Entwicklung bis zu konkreten Ergebnissen zu begleiten.',
    items: [
      {
        title: 'Geschäftsentwicklung',
        description:
          'Relevante Märkte identifizieren, einen gezielten Akquiseplan entwickeln und unternehmerische Ziele in konkrete Geschäftsmöglichkeiten übersetzen.',
      },
      {
        title: 'Akquise und Qualifizierung',
        description:
          'Die richtigen Ansprechpartner identifizieren, das Nutzenversprechen klar formulieren und einen wirksamen Akquiseprozess strukturieren.',
      },
      {
        title: 'Entwicklung strategischer Kunden',
        description:
          'Die Herausforderungen der Kunden verstehen, bislang nicht erkannte Bedürfnisse aufdecken und das Wachstumspotenzial der Kundenbeziehung weiterentwickeln.',
      },
      {
        title: 'Komplexe Verhandlungen',
        description:
          'Die Interessen der Beteiligten klären, Hindernisse überwinden und die Voraussetzungen für eine für alle Seiten vorteilhafte Entscheidung schaffen.',
      },
      {
        title: 'Strategische Beziehungen und Partnerschaften',
        description:
          'Ergänzende Stärken erkennen, Interessen in Einklang bringen und langfristige, produktive Kooperationen aufbauen.',
      },
      {
        title: 'Künstliche Intelligenz, Automatisierung und digitale Werkzeuge',
        description:
          'Technologie als Hebel einsetzen, um Informationen besser zu strukturieren, wiederkehrende Aufgaben zuverlässiger zu gestalten und mehr Zeit für Gespräche mit hohem Mehrwert zu gewinnen.',
      },
    ],
  },

  cta: {
    title: 'Welches Geschäftspotenzial wartet noch darauf, erschlossen zu werden?',
    text: 'Lassen Sie uns über Ihre Herausforderungen in den Bereichen Geschäftsentwicklung, strategische Kunden, Partnerschaften oder komplexe Entscheidungen sprechen.',
    primaryCta: 'Gespräch mit Frédéric Lejour vereinbaren',
    secondaryCta: 'Meine Arbeitsweise kennenlernen',
  },
};

/**
 * Contenu de la page Expertise (/en/expertise).
 * Textes fournis et validés par Frédéric Lejour.
 */
export const expertiseEn: ExpertiseContent = {
  meta: {
    title: 'Business Development Expertise | Frédéric Lejour',
    description:
      'Business development, strategic accounts, partnerships and negotiation: discover Frédéric Lejour’s expertise in turning commercial potential into tangible growth.',
  },
  hero: {
    eyebrow: 'EXPERTISE',
    title: [
      'Turn commercial potential',
      'into tangible growth',
    ],
    intro: [
      'Commercial performance does not depend on a single action. It rests on the ability to understand a market, create value, build strong relationships and facilitate decisions.',
      'I focus on the levers that turn commercial potential into tangible opportunities, lasting accounts and measurable results.',
    ],
  },
  domains: {
    eyebrow: 'AREAS OF EXPERTISE',
    title: 'Four levers to grow commercial value',
    intro:
      'Every situation calls for a specific response. These four areas are the main levers I can activate to support a company’s growth.',
    items: [
      {
        step: '01',
        title: 'Develop new business opportunities',
        description:
          'Identify new markets, target the right decision-makers and turn prospecting into qualified sales conversations.',
        tags:
          'Business Development · Targeted Prospecting · Qualification · Customer Acquisition',
        icon: 'Target',
      },
      {
        step: '02',
        title: 'Grow strategic accounts',
        description:
          'Understand the client’s priorities, deepen the relationship and unlock untapped growth potential within the account.',
        tags:
          'Key Account Management · Customer Retention · Customer Growth',
        icon: 'Users',
      },
      {
        step: '03',
        title: 'Build lasting partnerships',
        description:
          'Identify complementary strengths, align interests and structure collaborations capable of creating new revenue opportunities.',
        tags:
          'Strategic Partnerships · Partner Networks · Ecosystem Development',
        icon: 'Handshake',
      },
      {
        step: '04',
        title: 'Facilitate complex decisions',
        description:
          'Clarify value, understand each stakeholder’s motivations and create the conditions for a natural, lasting decision.',
        tags:
          'Relationship Intelligence · Negotiation · Decision Support',
        icon: 'Scale',
      },
    ],
  },
  situations: {
    eyebrow: 'WHEN I CAN HELP',
    title:
      'When the potential is there but has yet to translate fully into results',
    intro:
      'I step in when a company already has an offering, a market or commercial relationships, but an obstacle is still preventing them from reaching their full potential.',
    items: [
      {
        step: '01',
        title: 'Your offering is strong, but growth is slowing',
        description:
          'The market exists and the team is committed, but results are no longer progressing at the expected pace. The challenge is to identify the barriers, refocus priorities and open up new avenues for growth.',
      },
      {
        step: '02',
        title:
          'Prospecting generates activity, but too few real opportunities',
        description:
          'Activity is increasing without producing enough qualified conversations. I help improve targeting, sharpen the value proposition and turn initial contacts into genuine opportunities.',
      },
      {
        step: '03',
        title: 'Strategic accounts remain underdeveloped',
        description:
          'The commercial relationship exists, but its potential has not been fully developed. The challenge is to understand the client more deeply, identify new needs and build sustainable account growth.',
      },
      {
        step: '04',
        title: 'A complex commercial decision remains stalled',
        description:
          'Multiple stakeholders, interests or constraints are slowing progress. I help clarify the value, understand motivations and create the conditions for a natural decision.',
      },
      {
        step: '05',
        title:
          'A promising partnership needs to become a genuine source of business',
        description:
          'The intention is there, but the model, responsibilities or activation plan remain unclear. I help structure the partnership and translate it into concrete action.',
      },
      {
        step: '06',
        title:
          'The tools are in place, but they do not yet form a coherent commercial system',
        description:
          'CRM, artificial intelligence, automation and prospecting tools are being used separately. The goal is to organise them around a clear, deeply human commercial strategy.',
      },
    ],
  },
  skills: {
    eyebrow: 'CAPABILITIES APPLIED',
    title: 'Commercial, strategic and relationship expertise',
    intro:
      'Depending on the situation, I combine several capabilities to understand the challenge, create value and support its development through to measurable results.',
    items: [
      {
        title: 'Business development',
        description:
          'Identify relevant markets, build a qualified acquisition plan and turn objectives into tangible opportunities.',
      },
      {
        title: 'Acquisition and qualification',
        description:
          'Target the right decision-makers, clarify the value proposition and structure an effective prospecting journey.',
      },
      {
        title: 'Account management and growth',
        description:
          'Understand client priorities, uncover hidden needs and develop the account’s growth potential.',
      },
      {
        title: 'Complex negotiation',
        description:
          'Clarify each party’s interests, remove barriers and create the conditions for a mutually beneficial decision.',
      },
      {
        title: 'Strategic relationships and partnerships',
        description:
          'Identify complementary strengths, align interests and build lasting, productive collaborations.',
      },
      {
        title: 'Artificial intelligence, automation and digital tools',
        description:
          'Use technology as a lever to structure information more effectively, make repetitive tasks more reliable and free up time for higher-value interactions.',
      },
    ],
  },
  cta: {
    title: 'What commercial potential remains untapped?',
    text:
      'Let’s discuss your business development, strategic account, partnership or complex decision challenges.',
    primaryCta: 'Talk to Frédéric Lejour',
    secondaryCta: 'Explore my approach',
  },
};
