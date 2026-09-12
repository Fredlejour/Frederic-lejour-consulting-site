import type { PageMeta } from './types';

export type ExpertiseDomain = {
  step: string;
  title: string;
  description: string;
  tags: string;
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
 * La version allemande fera l’objet d’une traduction professionnelle
 * séparée en Phase 5.
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
      },
      {
        step: '02',
        title: 'Faire grandir les comptes stratégiques',
        description:
          'Comprendre les enjeux du client, développer la relation et révéler le potentiel de croissance encore inexploité au sein du compte.',
        tags: 'Key Account Management · Fidélisation · Customer Growth',
      },
      {
        step: '03',
        title: 'Construire des partenariats durables',
        description:
          'Identifier les complémentarités, aligner les intérêts et structurer des collaborations capables de créer de nouvelles sources d’activité.',
        tags: 'Strategic Partnerships · Réseaux de partenaires · Développement d’écosystèmes',
      },
      {
        step: '04',
        title: 'Faciliter les décisions complexes',
        description:
          'Clarifier la valeur, comprendre les motivations des différentes parties et créer les conditions d’une décision naturelle et durable.',
        tags: 'Intelligence relationnelle · Négociation · Accompagnement de la décision',
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
