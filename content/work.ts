import type { PageMeta } from './types';

export type WorkIcon =
  | 'Building2'
  | 'Lightbulb'
  | 'MonitorSmartphone'
  | 'MapPin'
  | 'BadgeEuro'
  | 'Globe2';

export type WorkStat = {
  figure: string;
  label: string;
  note?: string;
};

export type WorkOutcome = {
  text: string;
  detail?: string;
};

export type WorkCase = {
  step: string;
  icon: WorkIcon;
  title: string;
  hook: string;
  context: string[];
  valueCreated: string;
  stats: WorkStat[];
  outcomes: WorkOutcome[];
  resultsNote?: string;
  demonstrated: string[];
};

export type WorkContent = {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    /** Trois lignes de titre, à rendre l’une sous l’autre ; la dernière en accent. */
    title: [string, string, string];
    intro: string[];
  };
  items: WorkCase[];
  cta: {
    title: string;
    text: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
  };
};

/**
 * Contenu de la page Réalisations (/fr/realisations).
 *
 * Chaque élément a été fourni et validé pour la version française.
 * La version allemande fera l’objet d’une traduction professionnelle
 * séparée en Phase 5.
 */
export const workFr: WorkContent = {
  meta: {
    title: 'Réalisations en développement commercial | Frédéric Lejour',
    description:
      'Découvrez les réalisations de Frédéric Lejour en développement commercial, immobilier, création d’offres, acquisition numérique et développement international.',
  },

  hero: {
    eyebrow: 'RÉALISATIONS',
    title: [
      'Des expériences différentes,',
      'une même exigence :',
      'créer de la valeur',
    ],
    intro: [
      'Mon parcours s’est construit dans les télécommunications, l’entrepreneuriat, la gestion de patrimoine et l’immobilier.',
      'À travers ces environnements, j’ai développé des activités, conçu des offres, construit des relations commerciales et accompagné des décisions complexes avec une priorité constante : transformer une opportunité en résultat concret.',
    ],
  },

  items: [
    {
      step: '01',
      icon: 'Building2',
      title: 'Développer une activité immobilière sur le terrain',
      hook: 'Plus de 150 transactions représentant plus de 50 millions d’euros',
      context: [
        'Investisseur immobilier, puis dirigeant de deux agences, j’ai développé une expérience complète de la transaction immobilière : prospection, acquisition de mandats, qualification des projets, accompagnement des vendeurs et des acquéreurs, négociation et sécurisation des décisions.',
        'Cette expérience m’a permis de comprendre que la performance ne repose pas uniquement sur la connaissance du marché. Elle dépend aussi de la capacité à créer la confiance, à interpréter les motivations et à faire progresser chaque partie vers une décision équilibrée.',
      ],
      valueCreated:
        'Transformer l’expérience terrain en une capacité durable à vendre, négocier et sécuriser les décisions.',
      stats: [
        { figure: '150+', label: 'transactions réalisées' },
        { figure: '50 M€+', label: 'de volume immobilier' },
      ],
      outcomes: [],
      demonstrated: [
        'Développement commercial',
        'Acquisition client',
        'Négociation',
        'Relation stratégique',
        'Décisions complexes',
      ],
    },
    {
      step: '02',
      icon: 'Lightbulb',
      title: 'Transformer une expertise en offres commerciales',
      hook: 'Créer de nouvelles sources de valeur pour le marché immobilier',
      context: [
        'Les professionnels de l’immobilier évoluent sur un marché très concurrentiel, où les prestations sont difficiles à différencier et la rémunération principalement conditionnée à la réalisation de la vente.',
        'Pour y répondre, j’ai conçu VRP31J et Premium Vendeur, des offres apportant une valeur supplémentaire aux professionnels comme à leurs clients : après observation des pratiques existantes et identification des besoins insuffisamment couverts, j’ai formalisé une méthode transformée en proposition commercialement compréhensible et exploitable.',
        'Ces offres structurent différemment la préparation, la présentation et la commercialisation d’un projet immobilier : meilleure expérience du vendeur, valeur perçue du service renforcée et nouveaux arguments de différenciation pour les professionnels.',
      ],
      valueCreated:
        'Créer de nouvelles sources de revenus en transformant une expertise en offres différenciantes.',
      stats: [{ figure: '2', label: 'offres propriétaires majeures' }],
      outcomes: [
        {
          text: 'Nouvelles sources de revenus',
          detail: 'expertise transformée en offres commercialisables',
        },
        {
          text: 'Expérience vendeur enrichie',
          detail: 'valeur supplémentaire apportée aux vendeurs',
        },
        {
          text: 'Différenciation renforcée',
          detail: 'nouveaux arguments pour les professionnels',
        },
      ],
      demonstrated: [
        'Innovation commerciale',
        'Conception d’offres',
        'Proposition de valeur',
        'Positionnement',
        'Entrepreneuriat',
      ],
    },
    {
      step: '03',
      icon: 'MonitorSmartphone',
      title: 'Construire un dispositif d’acquisition numérique',
      hook: 'Utiliser les outils pour mieux transmettre la valeur',
      context: [
        'J’ai progressivement construit un environnement numérique d’acquisition, de communication et de présentation destiné principalement aux professionnels de l’immobilier : collecte et qualification des contacts, segmentation, création de contenus, campagnes et outils numériques pour entretenir la relation dans le temps.',
        'Ce dispositif s’est notamment appuyé sur des campagnes Facebook, la création d’une chaîne YouTube, des présentations numériques diffusées en direct sur les réseaux sociaux et des rendez-vous de présentation organisés en ligne.',
        'J’ai toujours recherché les outils capables d’améliorer une présentation, de faciliter la transmission d’un message et de rendre l’expérience plus dynamique et plus agréable : la technologie n’était jamais une finalité, mais un moyen de rendre la proposition de valeur plus claire, de faciliter la relation et d’améliorer l’efficacité du dispositif commercial.',
      ],
      valueCreated:
        'Construire un actif commercial capable d’entretenir la relation et de soutenir l’acquisition dans le temps.',
      stats: [
        { figure: '4 133', label: 'contacts enregistrés' },
        { figure: '1 856', label: 'professionnels de l’immobilier' },
        { figure: '56 743', label: 'communications diffusées' },
      ],
      outcomes: [],
      demonstrated: [
        'Acquisition numérique',
        'Segmentation',
        'Présentation commerciale',
        'Marketing relationnel',
        'Automatisation',
      ],
    },
    {
      step: '04',
      icon: 'MapPin',
      title: 'Se positionner rapidement sur un nouveau marché',
      hook: 'Obtenir des résultats concrets sur un secteur inconnu',
      context: [
        'Dans le cadre de ma collaboration avec RE/MAX Orléans, j’ai intégré un territoire que je ne connaissais pas, dans un contexte de résultats commerciaux en baisse et de dynamique collective à relancer.',
        'Lors de la deuxième phase de cette collaboration, j’ai dû rapidement comprendre le marché local, développer une prospection terrain, créer de nouvelles relations professionnelles et obtenir la confiance des propriétaires.',
        'Des professionnels qui ne me connaissaient pas ont rapidement adhéré à mon processus de préparation, d’organisation et d’action sur le terrain : cette manière de travailler a recréé motivation, dynamisme et atmosphère positive au sein de l’agence, et a participé à la reprise de ses résultats commerciaux.',
      ],
      valueCreated:
        'Démontrer une capacité à comprendre rapidement un territoire inconnu, mobiliser de nouvelles collaborations et produire des résultats concrets.',
      stats: [
        { figure: '3 mois', label: 'pour se positionner' },
        { figure: '7', label: 'mandats obtenus' },
        { figure: '≈ 60 %', label: 'de mandats exclusifs' },
        { figure: '1', label: 'transaction réalisée' },
        { figure: '1', label: 'recrutement concrétisé' },
      ],
      outcomes: [],
      demonstrated: [
        'Prospection',
        'Adaptation',
        'Développement de réseau',
        'Leadership relationnel',
        'Mobilisation collective',
      ],
    },
    {
      step: '05',
      icon: 'BadgeEuro',
      title: 'Faire accepter une offre payée avant le résultat',
      hook: 'Créer un modèle économique contraire aux habitudes du marché',
      context: [
        'Dans l’immobilier traditionnel, la rémunération du professionnel est principalement conditionnée à la réalisation de la vente : faire accepter le paiement d’un accompagnement avant même le résultat allait à l’encontre des habitudes installées sur ce marché.',
        'En rendant visibles la préparation, la méthode, les outils et la valeur apportée avant la transaction, Premium Vendeur a fait reconnaître cette prestation comme un service disposant de sa propre valeur économique.',
        'Les principaux dossiers documentés font apparaître huit clients Premium Vendeur, auxquels s’ajoute un dossier associant VRP31J et Premium Vendeur.',
      ],
      valueCreated:
        'Faire reconnaître et payer la valeur créée avant même l’obtention du résultat final.',
      stats: [
        { figure: '9', label: 'dossiers principaux identifiés' },
        { figure: '45,8 k€', label: 'de valeur commerciale' },
        { figure: '40,8 k€', label: 'd’encaissements documentés' },
        { figure: '5 k€+', label: 'de valeur moyenne par dossier' },
      ],
      outcomes: [],
      resultsNote:
        'Montants arrondis à partir des dossiers commerciaux documentés : 45 838,70 € de valeur commerciale et 40 838,70 € d’encaissements.',
      demonstrated: [
        'Création de valeur',
        'Conception d’offres',
        'Vente de services',
        'Innovation économique',
        'Accompagnement de la décision',
      ],
    },
    {
      step: '06',
      icon: 'Globe2',
      title: 'Développer une activité dans un environnement international',
      hook: 'Construire une relation commerciale à distance',
      context: [
        'Installé en Allemagne et entrepreneur à travers Lejour Consulting, j’ai développé une activité principalement destinée au marché français tout en étant physiquement établi dans un autre pays : il a fallu construire des méthodes de communication, de présentation et de contractualisation capables de créer la confiance à distance.',
        'Les échanges numériques, les présentations en ligne et les rendez-vous à distance permettaient de qualifier les besoins, de présenter la proposition de valeur et de consolider la signature des contrats ; les déplacements chez les clients intervenaient ensuite de manière ciblée, non pour provoquer la décision, mais pour renforcer une relation déjà engagée et accompagner la mise en œuvre.',
        'Cette expérience démontre qu’une relation commerciale solide ne dépend pas de la proximité géographique : elle repose sur la qualité de la communication, la clarté de la valeur proposée et la confiance créée tout au long du parcours.',
      ],
      valueCreated:
        'Construire la confiance et contractualiser malgré la distance géographique.',
      stats: [],
      outcomes: [
        { text: 'France / Allemagne', detail: 'activité transfrontalière' },
        { text: 'À distance', detail: 'présentation des offres' },
        { text: 'Numérique', detail: 'contractualisation et suivi' },
        { text: 'Sur le terrain', detail: 'déplacements ciblés après engagement' },
      ],
      demonstrated: [
        'Développement international',
        'Communication à distance',
        'Vente complexe',
        'Adaptabilité',
        'Relations interculturelles',
      ],
    },
  ],

  cta: {
    title: 'Les contextes changent. La logique reste la même.',
    text: 'Comprendre la situation, identifier la valeur disponible et construire les conditions qui permettent de la transformer en résultats.',
    primaryCta: 'Échanger avec Frédéric Lejour',
    primaryHref: '/fr/contact',
    secondaryCta: 'Découvrir mes expertises',
    secondaryHref: '/fr/expertises',
  },
};
