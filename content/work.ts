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
  /** Libellés répétés de chaque réalisation et du panneau de preuve. */
  labels: {
    valueCreated: string;
    results: string;
    demonstrated: string;
  };
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
 * L’adaptation allemande (`workDe`) reprend la même structure : un champ
 * manquant provoque une erreur de compilation.
 */
export const workFr: WorkContent = {
  labels: {
    valueCreated: 'Valeur créée',
    results: 'Résultats',
    demonstrated: 'Expertises démontrées',
  },
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

/**
 * Contenu de la page Projekte (/de/projekte).
 * Textes fournis et validés par Frédéric Lejour.
 */
export const workDe: WorkContent = {
  labels: {
    valueCreated: 'Geschaffener Mehrwert',
    results: 'Ergebnisse',
    demonstrated: 'Nachgewiesene Kompetenzen',
  },
  meta: {
    title: 'Projekte in der Geschäftsentwicklung | Frédéric Lejour',
    description:
      'Entdecken Sie die Projekte und Erfolge von Frédéric Lejour in den Bereichen Geschäftsentwicklung, Immobilien, Angebotsentwicklung, digitale Kundengewinnung und internationale Geschäftstätigkeit.',
  },

  hero: {
    eyebrow: 'PROJEKTE',
    title: [
      'Unterschiedliche Erfahrungen,',
      'derselbe Anspruch:',
      'Mehrwert schaffen',
    ],
    intro: [
      'Mein beruflicher Weg führte mich durch die Telekommunikationsbranche, das Unternehmertum, die Vermögensberatung und die Immobilienwirtschaft.',
      'In diesen unterschiedlichen Bereichen habe ich Geschäftstätigkeiten entwickelt, Angebote konzipiert, Kundenbeziehungen aufgebaut und komplexe Entscheidungen begleitet – immer mit demselben Ziel: eine Chance in ein konkretes Ergebnis zu verwandeln.',
    ],
  },

  items: [
    {
      step: '01',
      icon: 'Building2',
      title: 'Ein Immobiliengeschäft aus der Praxis heraus entwickeln',
      hook: 'Mehr als 150 Transaktionen mit einem Immobilienvolumen von über 50 Millionen Euro',
      context: [
        'Als Immobilieninvestor und später als Leiter zweier Immobilienagenturen habe ich umfassende Erfahrung mit Immobilientransaktionen aufgebaut: von der Akquise und der Gewinnung von Verkaufsmandaten über die Qualifizierung der Vorhaben und die Begleitung von Verkäufern und Käufern bis hin zur Verhandlung und Absicherung von Entscheidungen.',
        'Diese Erfahrung hat mir gezeigt, dass Erfolg nicht allein auf Marktkenntnissen beruht. Ebenso entscheidend sind die Fähigkeit, Vertrauen aufzubauen, Beweggründe zu erkennen und alle Beteiligten auf dem Weg zu einer ausgewogenen Entscheidung voranzubringen.',
      ],
      valueCreated:
        'Praxiserfahrung in eine langfristige Fähigkeit verwandeln, erfolgreich zu verkaufen, zu verhandeln und Entscheidungen abzusichern.',
      stats: [
        { figure: '150+', label: 'abgeschlossene Transaktionen' },
        { figure: '50 Mio. €+', label: 'Immobilienvolumen' },
      ],
      outcomes: [],
      demonstrated: [
        'Geschäftsentwicklung',
        'Neukundengewinnung',
        'Verhandlung',
        'Strategische Beziehungen',
        'Komplexe Entscheidungen',
      ],
    },
    {
      step: '02',
      icon: 'Lightbulb',
      title: 'Fachwissen in marktfähige Angebote verwandeln',
      hook: 'Neue Wertschöpfungsmöglichkeiten für den Immobilienmarkt entwickeln',
      context: [
        'Immobilienprofis bewegen sich in einem stark umkämpften Markt, in dem Dienstleistungen nur schwer voneinander zu unterscheiden sind und die Vergütung überwiegend vom erfolgreichen Abschluss einer Transaktion abhängt.',
        'Als Antwort darauf habe ich VRP31J und Premium Vendeur entwickelt. Beide Angebote schaffen zusätzlichen Mehrwert für Immobilienprofis und ihre Kunden. Nach der Analyse bestehender Praktiken und bislang unzureichend erfüllter Bedürfnisse habe ich eine Methode entwickelt und daraus ein verständliches, vermarktbares und praktisch einsetzbares Angebot gemacht.',
        'Diese Angebote strukturieren die Vorbereitung, Präsentation und Vermarktung eines Immobilienprojekts neu: Sie verbessern das Erlebnis des Verkäufers, erhöhen den wahrgenommenen Wert der Dienstleistung und bieten Immobilienprofis zusätzliche Möglichkeiten zur Differenzierung.',
      ],
      valueCreated:
        'Neue Einnahmequellen schaffen, indem Fachwissen in klar differenzierte Angebote verwandelt wird.',
      stats: [{ figure: '2', label: 'wesentliche eigenentwickelte Angebote' }],
      outcomes: [
        {
          text: 'Neue Einnahmequellen',
          detail: 'Fachwissen in vermarktbare Angebote verwandelt',
        },
        {
          text: 'Verbessertes Verkäufererlebnis',
          detail: 'zusätzlicher Mehrwert für Immobilienverkäufer',
        },
        {
          text: 'Stärkere Differenzierung',
          detail: 'neue Verkaufsargumente für Immobilienprofis',
        },
      ],
      demonstrated: [
        'Vertriebsinnovation',
        'Angebotsentwicklung',
        'Nutzenversprechen',
        'Positionierung',
        'Unternehmertum',
      ],
    },
    {
      step: '03',
      icon: 'MonitorSmartphone',
      title: 'Ein digitales System zur Kundengewinnung aufbauen',
      hook: 'Digitale Werkzeuge nutzen, um Mehrwert besser zu vermitteln',
      context: [
        'Schrittweise habe ich ein digitales Umfeld für Kundengewinnung, Kommunikation und Präsentation aufgebaut, das sich vor allem an Immobilienprofis richtete: Erfassung und Qualifizierung von Kontakten, Segmentierung, Erstellung von Inhalten, Kampagnen und digitale Werkzeuge zur langfristigen Pflege der Kundenbeziehungen.',
        'Dieses System stützte sich unter anderem auf Facebook-Kampagnen, den Aufbau eines YouTube-Kanals, digitale Live-Präsentationen in sozialen Netzwerken und online organisierte Präsentationstermine.',
        'Ich habe stets nach Werkzeugen gesucht, die Präsentationen verbessern, Botschaften leichter vermitteln und das Erlebnis dynamischer und angenehmer gestalten. Technologie war dabei niemals Selbstzweck, sondern ein Mittel, um das Nutzenversprechen verständlicher zu machen, Beziehungen zu erleichtern und die Wirksamkeit des Vertriebssystems zu erhöhen.',
      ],
      valueCreated:
        'Einen langfristig nutzbaren Vertriebswert aufbauen, der Kundenbeziehungen pflegt und die Kundengewinnung dauerhaft unterstützt.',
      stats: [
        { figure: '4.133', label: 'erfasste Kontakte' },
        { figure: '1.856', label: 'Immobilienprofis' },
        { figure: '56.743', label: 'versendete Mitteilungen' },
      ],
      outcomes: [],
      demonstrated: [
        'Digitale Kundengewinnung',
        'Segmentierung',
        'Vertriebspräsentation',
        'Beziehungsmarketing',
        'Automatisierung',
      ],
    },
    {
      step: '04',
      icon: 'MapPin',
      title: 'Sich schnell in einem neuen Markt positionieren',
      hook: 'In einem unbekannten Markt konkrete Ergebnisse erzielen',
      context: [
        'Im Rahmen meiner Zusammenarbeit mit RE/MAX Orléans kam ich in einen Markt, den ich zuvor nicht kannte. Gleichzeitig waren die Vertriebsergebnisse rückläufig und die gemeinsame Dynamik im Team musste neu belebt werden.',
        'In der zweiten Phase dieser Zusammenarbeit musste ich den lokalen Markt schnell verstehen, eine aktive Akquise vor Ort entwickeln, neue berufliche Beziehungen aufbauen und das Vertrauen der Immobilieneigentümer gewinnen.',
        'Immobilienprofis, die mich zuvor nicht kannten, übernahmen schnell meinen Ansatz zur Vorbereitung, Organisation und Umsetzung vor Ort. Diese Arbeitsweise sorgte innerhalb der Agentur für neue Motivation, mehr Dynamik und eine positive Atmosphäre und trug zur Erholung der Vertriebsergebnisse bei.',
      ],
      valueCreated:
        'Die Fähigkeit unter Beweis stellen, einen unbekannten Markt schnell zu verstehen, neue Formen der Zusammenarbeit zu aktivieren und konkrete Ergebnisse zu erzielen.',
      stats: [
        { figure: '3 Monate', label: 'bis zur erfolgreichen Positionierung' },
        { figure: '7', label: 'gewonnene Mandate' },
        { figure: '≈ 60 %', label: 'Exklusivmandate' },
        { figure: '1', label: 'abgeschlossene Transaktion' },
        { figure: '1', label: 'erfolgreiche Einstellung' },
      ],
      outcomes: [],
      demonstrated: [
        'Akquise',
        'Anpassungsfähigkeit',
        'Netzwerkentwicklung',
        'Beziehungsorientierte Führung',
        'Mobilisierung von Teams',
      ],
    },
    {
      step: '05',
      icon: 'BadgeEuro',
      title: 'Ein vor dem Ergebnis bezahltes Angebot am Markt durchsetzen',
      hook: 'Ein Geschäftsmodell entwickeln, das den üblichen Marktgewohnheiten widerspricht',
      context: [
        'In der traditionellen Immobilienvermittlung hängt die Vergütung des Dienstleisters überwiegend vom erfolgreichen Verkauf ab. Eine kostenpflichtige Begleitung bereits vor dem endgültigen Ergebnis anzubieten, widersprach daher den etablierten Gewohnheiten dieses Marktes.',
        'Premium Vendeur machte die Vorbereitung, die Methode, die eingesetzten Werkzeuge und den bereits vor der Transaktion geschaffenen Mehrwert sichtbar. Dadurch wurde diese Leistung als eigenständige Dienstleistung mit einem eigenen wirtschaftlichen Wert anerkannt.',
        'Die wichtigsten dokumentierten Fälle umfassen acht Kunden von Premium Vendeur sowie einen weiteren Fall, in dem VRP31J mit Premium Vendeur kombiniert wurde.',
      ],
      valueCreated:
        'Den geschaffenen Mehrwert bereits vor dem endgültigen Ergebnis sichtbar machen, anerkennen und vergüten lassen.',
      stats: [
        { figure: '9', label: 'identifizierte Hauptfälle' },
        { figure: '45,8 Tsd. €', label: 'Vertriebswert' },
        { figure: '40,8 Tsd. €', label: 'dokumentierte Einnahmen' },
        { figure: '5 Tsd. €+', label: 'durchschnittlicher Wert je Fall' },
      ],
      outcomes: [],
      resultsNote:
        'Gerundete Beträge auf Grundlage der dokumentierten Geschäftsfälle: 45.838,70 € Vertriebswert und 40.838,70 € dokumentierte Einnahmen.',
      demonstrated: [
        'Wertschöpfung',
        'Angebotsentwicklung',
        'Verkauf von Dienstleistungen',
        'Geschäftsmodellinnovation',
        'Begleitung von Entscheidungsprozessen',
      ],
    },
    {
      step: '06',
      icon: 'Globe2',
      title: 'Eine Geschäftstätigkeit im internationalen Umfeld entwickeln',
      hook: 'Eine Kundenbeziehung über räumliche Distanz aufbauen',
      context: [
        'Von meinem Standort in Deutschland aus habe ich mit Lejour Consulting eine Geschäftstätigkeit entwickelt, die sich hauptsächlich an den französischen Markt richtete. Dafür waren Kommunikations-, Präsentations- und Vertragsabschlussprozesse erforderlich, die auch über räumliche Distanz Vertrauen schaffen konnten.',
        'Digitale Gespräche, Online-Präsentationen und Termine aus der Ferne ermöglichten es, Bedürfnisse zu qualifizieren, das Nutzenversprechen vorzustellen und den Vertragsabschluss vorzubereiten. Persönliche Termine beim Kunden fanden anschließend gezielt statt – nicht um die Entscheidung herbeizuführen, sondern um eine bereits aufgebaute Beziehung zu stärken und die Umsetzung zu begleiten.',
        'Diese Erfahrung zeigt, dass eine tragfähige Kundenbeziehung nicht von geografischer Nähe abhängt. Entscheidend sind die Qualität der Kommunikation, ein klar vermitteltes Nutzenversprechen und das Vertrauen, das während des gesamten Prozesses entsteht.',
      ],
      valueCreated:
        'Trotz räumlicher Distanz Vertrauen aufbauen und Verträge erfolgreich zum Abschluss bringen.',
      stats: [],
      outcomes: [
        { text: 'Frankreich / Deutschland', detail: 'grenzüberschreitende Geschäftstätigkeit' },
        { text: 'Aus der Ferne', detail: 'Präsentation der Angebote' },
        { text: 'Digital', detail: 'Vertragsabschluss und Betreuung' },
        { text: 'Vor Ort', detail: 'gezielte Termine nach einer ersten verbindlichen Zusage' },
      ],
      demonstrated: [
        'Internationale Geschäftsentwicklung',
        'Kommunikation aus der Ferne',
        'Komplexer Verkauf',
        'Anpassungsfähigkeit',
        'Interkulturelle Beziehungen',
      ],
    },
  ],

  cta: {
    title: 'Die Rahmenbedingungen ändern sich. Die Logik bleibt dieselbe.',
    text: 'Die Situation verstehen, vorhandenen Mehrwert erkennen und die Voraussetzungen schaffen, um ihn in konkrete Ergebnisse zu verwandeln.',
    primaryCta: 'Gespräch mit Frédéric Lejour vereinbaren',
    primaryHref: '/de/kontakt',
    secondaryCta: 'Meine Kompetenzfelder entdecken',
    secondaryHref: '/de/expertise',
  },
};
