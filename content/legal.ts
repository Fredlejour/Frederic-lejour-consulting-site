import type { PageMeta } from './types';

/**
 * Contenus des pages juridiques — mentions légales / Impressum / Legal notice
 * et politique de confidentialité / Datenschutzerklärung / Privacy policy,
 * en français, en allemand et en anglais.
 *
 * Les contenus anglais sont des traductions fidèles des textes français
 * validés : aucune adaptation juridique, aucune donnée ajoutée ou retirée.
 * Ils seront relus avant publication.
 *
 * Les mentions d'identité, d'autorisation et de fiscalité proviennent des
 * informations fournies par Frédéric Lejour. La Steuernummer n'est jamais
 * publiée. La carte professionnelle européenne (EPC), arrivée à expiration,
 * n'est pas mentionnée.
 *
 * Structure en blocs pour éviter de longs textes codés dans le JSX :
 * `paragraphs` (texte courant), `lines` (bloc adresse/identité), `list`
 * (liste à puces), `links` (liens externes ou mailto).
 */

export type LegalLink = {
  label: string;
  href: string;
};

export type LegalBlock =
  | { type: 'paragraphs'; items: string[] }
  | { type: 'lines'; items: string[] }
  | { type: 'list'; items: string[] }
  | { type: 'links'; items: LegalLink[] };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalPageContent = {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    updated: string;
  };
  sections: LegalSection[];
};

const CONTACT_EMAIL = 'frederic.lejour@lejourconsulting.com';
const VERCEL_ADDRESS = '440 N Barranca Ave #4133, Covina, CA 91723';
const GEWO_34C_URL = 'https://www.gesetze-im-internet.de/gewo/__34c.html';
const MABV_URL = 'https://www.gesetze-im-internet.de/mabv/';
const VERCEL_PRIVACY_URL = 'https://vercel.com/legal/privacy-notice';
const VERCEL_DPA_URL = 'https://vercel.com/legal/dpa';
const WEB3FORMS_PRIVACY_URL = 'https://web3forms.com/privacy';
const LFDI_RLP_URL = 'https://www.datenschutz.rlp.de';

/* ─────────────────────────── Mentions légales — FR ─────────────────────────── */

export const legalNoticeFr: LegalPageContent = {
  meta: {
    title: 'Mentions légales — Frédéric Lejour',
    description:
      'Informations légales du site lejourconsulting.com : éditeur, hébergement, autorisations professionnelles et responsabilité.',
  },
  hero: {
    eyebrow: 'Informations légales',
    title: 'Mentions légales',
    intro:
      'Informations relatives à l’édition, à l’hébergement et au cadre professionnel du site Lejour Consulting.',
    updated: 'Dernière mise à jour : 11 septembre 2026',
  },
  sections: [
    {
      title: 'Éditeur du site',
      blocks: [
        {
          type: 'lines',
          items: [
            'Frédéric Lejour',
            'Lejour Consulting',
            'Entreprise individuelle établie en Allemagne',
            'Kirchstraße 37',
            '55218 Ingelheim am Rhein',
            'Allemagne',
          ],
        },
        {
          type: 'links',
          items: [{ label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }],
        },
        {
          type: 'paragraphs',
          items: [
            'Numéro de TVA intracommunautaire : DE287643129',
            'IHK Rheinhessen : n° 152 00 686043',
          ],
        },
      ],
    },
    {
      title: 'Responsable de la publication',
      blocks: [{ type: 'paragraphs', items: ['Frédéric Lejour'] }],
    },
    {
      title: 'Activité immobilière en France',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Titulaire du récépissé de libre prestation de services immobiliers en France n° LPS75012025000000015, délivré par la CCI Paris Île-de-France et valable jusqu’au 22 septembre 2026, conformément à la loi n° 70-9 du 2 janvier 1970.',
          ],
        },
      ],
    },
    {
      title: 'Autorisation professionnelle en Allemagne',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Titulaire d’une autorisation d’exercer l’activité d’agent immobilier en Allemagne (Erlaubnis als Immobilienmakler nach § 34c GewO), délivrée le 10 mars 2021 par la Stadtverwaltung Ingelheim am Rhein.',
            'Autorité de contrôle : Stadtverwaltung Ingelheim am Rhein.',
            'Règles professionnelles applicables :',
          ],
        },
        {
          type: 'links',
          items: [
            { label: '§ 34c Gewerbeordnung (GewO)', href: GEWO_34C_URL },
            { label: 'Makler- und Bauträgerverordnung (MaBV)', href: MABV_URL },
          ],
        },
      ],
    },
    {
      title: 'Assurance professionnelle',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Assuré auprès d’AXA au titre des risques professionnels liés à l’activité immobilière (Profi-Schutz für Dienstleister – Immobilienmakler), contrat n° 60242463490/5M.',
          ],
        },
      ],
    },
    {
      title: 'Hébergement',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            `Ce site est hébergé par Vercel Inc., ${VERCEL_ADDRESS}, États-Unis.`,
          ],
        },
        {
          type: 'links',
          items: [{ label: 'vercel.com', href: 'https://vercel.com' }],
        },
      ],
    },
    {
      title: 'Propriété intellectuelle',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Les textes, visuels, photographies, éléments graphiques, identité visuelle et l’ensemble des contenus publiés sur ce site sont protégés par le droit de la propriété intellectuelle. Toute reproduction, représentation ou utilisation, totale ou partielle, sans autorisation préalable de Frédéric Lejour est interdite, sous réserve des exceptions prévues par la loi.',
          ],
        },
      ],
    },
    {
      title: 'Responsabilité',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Les informations publiées sur ce site sont fournies à titre informatif. Frédéric Lejour veille à leur exactitude et à leur actualisation, sans pouvoir garantir un fonctionnement totalement exempt d’erreur ou d’interruption.',
            'Les sites externes accessibles par lien depuis ce site demeurent sous la responsabilité exclusive de leurs éditeurs.',
          ],
        },
      ],
    },
  ],
};

/* ─────────────────────────────── Impressum — DE ─────────────────────────────── */

export const legalNoticeDe: LegalPageContent = {
  meta: {
    title: 'Impressum — Frédéric Lejour',
    description:
      'Impressum der Website lejourconsulting.com: Anbieterkennzeichnung, Hosting, Berufserlaubnisse und Haftung.',
  },
  hero: {
    eyebrow: 'Rechtliche Informationen',
    title: 'Impressum',
    intro: 'Angaben zum Anbieter, zum Hosting und zum beruflichen Rahmen dieser Website.',
    updated: 'Zuletzt aktualisiert: 11. September 2026',
  },
  sections: [
    {
      title: 'Angaben gemäß § 5 DDG',
      blocks: [
        {
          type: 'lines',
          items: [
            'Frédéric Lejour',
            'Lejour Consulting',
            'Einzelunternehmen',
            'Kirchstraße 37',
            '55218 Ingelheim am Rhein',
            'Deutschland',
          ],
        },
        {
          type: 'links',
          items: [{ label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }],
        },
        {
          type: 'paragraphs',
          items: [
            'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE287643129',
            'IHK Rheinhessen: Mitgliedsnummer 152 00 686043',
          ],
        },
      ],
    },
    {
      title: 'Verantwortlich für den Inhalt',
      blocks: [{ type: 'paragraphs', items: ['Frédéric Lejour'] }],
    },
    {
      title: 'Immobilientätigkeit in Frankreich',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Inhaber einer Bescheinigung über die freie Erbringung von Immobiliendienstleistungen in Frankreich (récépissé de libre prestation de services immobiliers) Nr. LPS75012025000000015, ausgestellt von der CCI Paris Île-de-France und gültig bis zum 22. September 2026, gemäß dem französischen Gesetz Nr. 70-9 vom 2. Januar 1970.',
          ],
        },
      ],
    },
    {
      title: 'Berufserlaubnis in Deutschland',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Erlaubnis als Immobilienmakler gemäß § 34c GewO, erteilt am 10. März 2021 durch die Stadtverwaltung Ingelheim am Rhein.',
            'Zuständige Aufsichtsbehörde: Stadtverwaltung Ingelheim am Rhein.',
            'Anzuwendende Berufsregeln:',
          ],
        },
        {
          type: 'links',
          items: [
            { label: '§ 34c Gewerbeordnung (GewO)', href: GEWO_34C_URL },
            { label: 'Makler- und Bauträgerverordnung (MaBV)', href: MABV_URL },
          ],
        },
      ],
    },
    {
      title: 'Berufshaftpflichtversicherung',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Berufshaftpflichtversicherung bei der AXA für berufliche Risiken der Immobilientätigkeit (Profi-Schutz für Dienstleister – Immobilienmakler), Vertragsnummer 60242463490/5M.',
          ],
        },
      ],
    },
    {
      title: 'Hosting',
      blocks: [
        {
          type: 'paragraphs',
          items: [`Diese Website wird gehostet von Vercel Inc., ${VERCEL_ADDRESS}, USA.`],
        },
        {
          type: 'links',
          items: [{ label: 'vercel.com', href: 'https://vercel.com' }],
        },
      ],
    },
    {
      title: 'Urheberrecht',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Die auf dieser Website veröffentlichten Texte, Bilder, Fotografien, grafischen Elemente, die visuelle Identität und sämtliche Inhalte sind urheberrechtlich geschützt. Jede Vervielfältigung, Verbreitung oder sonstige Verwendung, ganz oder teilweise, ohne vorherige Zustimmung von Frédéric Lejour ist untersagt, soweit gesetzlich nichts anderes bestimmt ist.',
          ],
        },
      ],
    },
    {
      title: 'Haftung für Inhalte und externe Links',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Die auf dieser Website bereitgestellten Informationen dienen der allgemeinen Information. Frédéric Lejour bemüht sich um deren Richtigkeit und Aktualität; ein vollständig fehler- oder unterbrechungsfreier Betrieb kann jedoch nicht garantiert werden.',
            'Für Inhalte externer Websites, die über Links von dieser Website erreichbar sind, sind ausschließlich deren Betreiber verantwortlich.',
          ],
        },
      ],
    },
  ],
};

/* ─────────────────────── Politique de confidentialité — FR ─────────────────────── */

export const privacyFr: LegalPageContent = {
  meta: {
    title: 'Politique de confidentialité — Frédéric Lejour',
    description:
      'Politique de confidentialité du site lejourconsulting.com : données traitées, finalités, bases juridiques, durées de conservation et droits des personnes.',
  },
  hero: {
    eyebrow: 'Protection des données',
    title: 'Politique de confidentialité',
    intro:
      'Cette page explique quelles données peuvent être traitées lors de votre navigation ou lorsque vous contactez Frédéric Lejour.',
    updated: 'Dernière mise à jour : 11 septembre 2026',
  },
  sections: [
    {
      title: 'Responsable du traitement',
      blocks: [
        {
          type: 'lines',
          items: [
            'Frédéric Lejour',
            'Lejour Consulting',
            'Kirchstraße 37',
            '55218 Ingelheim am Rhein',
            'Allemagne',
          ],
        },
        {
          type: 'links',
          items: [{ label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }],
        },
        {
          type: 'paragraphs',
          items: [
            'Pour toute demande relative à vos données personnelles, vous pouvez écrire à l’adresse indiquée ci-dessus.',
          ],
        },
      ],
    },
    {
      title: 'Données traitées lors de la navigation',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Lors de votre visite, l’hébergeur du site peut traiter les données techniques nécessaires au fonctionnement et à la sécurité du site, notamment :',
          ],
        },
        {
          type: 'list',
          items: [
            'adresse IP ;',
            'date et heure de consultation ;',
            'page demandée ;',
            'navigateur et système utilisés ;',
            'URL de provenance ;',
            'journaux techniques et données de sécurité.',
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Ces traitements poursuivent la mise à disposition du site, sa sécurité, la prévention des abus et le diagnostic des erreurs.',
            'Base juridique : article 6, paragraphe 1, point f du RGPD — intérêt légitime à assurer le fonctionnement et la sécurité du site.',
          ],
        },
      ],
    },
    {
      title: 'Hébergement Vercel',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Le site est hébergé par Vercel Inc., qui intervient comme prestataire technique d’hébergement. Selon l’infrastructure utilisée, des traitements ou transferts internationaux peuvent avoir lieu ; ils sont encadrés par les mécanismes juridiques annoncés par Vercel, notamment les clauses contractuelles types et, lorsqu’il est applicable, le cadre EU–US Data Privacy Framework.',
          ],
        },
        {
          type: 'links',
          items: [
            { label: 'Politique de confidentialité de Vercel', href: VERCEL_PRIVACY_URL },
            { label: 'Addendum de traitement des données (DPA) de Vercel', href: VERCEL_DPA_URL },
          ],
        },
      ],
    },
    {
      title: 'Formulaire de contact et Web3Forms',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Le formulaire de contact collecte uniquement les informations que vous saisissez : prénom et nom, adresse e-mail, entreprise ou organisation (champ facultatif), objet de votre message et contenu de votre message. La case de consentement doit être cochée pour permettre l’envoi.',
            'Ces informations sont utilisées uniquement pour recevoir votre demande, comprendre la situation exposée, vous répondre, assurer le suivi des échanges et protéger le formulaire contre les abus et le spam.',
            'Le formulaire est traité par Web3Forms (Web3Creative), prestataire technique. Selon les informations actuelles du fournisseur, les données sont transmises par connexion HTTPS et peuvent être traitées au moyen d’infrastructures telles qu’AWS, Cloudflare et Hetzner. Web3Forms indique pouvoir conserver les soumissions pendant une durée maximale de trois ans, sauf durée plus courte applicable au compte ou suppression anticipée. Certains traitements peuvent intervenir hors de l’Espace économique européen ; les transferts sont annoncés comme encadrés notamment par des clauses contractuelles types.',
            'Bases juridiques : consentement (article 6, paragraphe 1, point a du RGPD) lorsque vous cochez la case de consentement ; mesures précontractuelles (article 6, paragraphe 1, point b) lorsque votre demande concerne une collaboration ou une prestation ; intérêt légitime (article 6, paragraphe 1, point f) pour répondre et assurer le suivi normal des échanges.',
          ],
        },
        {
          type: 'links',
          items: [
            {
              label: 'Politique de confidentialité et DPA de Web3Forms',
              href: WEB3FORMS_PRIVACY_URL,
            },
          ],
        },
      ],
    },
    {
      title: 'Durée de conservation',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Les échanges sont conservés pendant le temps nécessaire au traitement et au suivi de votre demande, puis supprimés ou archivés lorsque leur conservation n’est plus nécessaire, sous réserve des obligations légales.',
            'Pour les contacts n’ayant pas donné lieu à une relation contractuelle, les données sont conservées au maximum trois ans après le dernier échange pertinent.',
          ],
        },
      ],
    },
    {
      title: 'Mesure d’audience',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Aucun outil de mesure d’audience ou de suivi n’est actuellement utilisé sur ce site. Si un tel outil est ajouté ultérieurement, cette section sera actualisée et, lorsque la réglementation l’exige, votre consentement sera demandé préalablement.',
          ],
        },
      ],
    },
    {
      title: 'Cookies et traceurs',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Ce site n’utilise actuellement que les éléments strictement nécessaires à son fonctionnement. Aucun cookie ni traceur soumis au consentement n’est déposé.',
            'Il n’existe donc pas de gestionnaire de consentement à configurer pour le moment. Si des traceurs soumis au consentement sont introduits, un mécanisme de choix sera mis en place avant leur activation.',
          ],
        },
      ],
    },
    {
      title: 'Liens externes',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Les liens présents sur ce site, notamment vers LinkedIn, ne transmettent normalement des données à ces services qu’au moment où vous cliquez dessus. Aucune intégration technique active de ces services n’est présente sur le site.',
          ],
        },
      ],
    },
    {
      title: 'Vos droits',
      blocks: [
        {
          type: 'paragraphs',
          items: ['Conformément au RGPD, vous disposez des droits suivants :'],
        },
        {
          type: 'list',
          items: [
            'droit d’accès ;',
            'droit de rectification ;',
            'droit à l’effacement ;',
            'droit à la limitation du traitement ;',
            'droit d’opposition ;',
            'droit à la portabilité, lorsque ce droit est applicable ;',
            'droit de retirer votre consentement à tout moment, sans effet rétroactif ;',
            'droit d’introduire une réclamation auprès d’une autorité de contrôle.',
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Autorité de contrôle compétente : Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz.',
          ],
        },
        {
          type: 'links',
          items: [{ label: 'www.datenschutz.rlp.de', href: LFDI_RLP_URL }],
        },
      ],
    },
    {
      title: 'Décisions automatisées',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Aucune décision produisant des effets juridiques n’est prise exclusivement de manière automatisée à partir des données collectées par ce site.',
          ],
        },
      ],
    },
    {
      title: 'Mise à jour',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Cette politique de confidentialité peut être actualisée lorsque les services utilisés, les traitements ou la réglementation évoluent. La date de dernière mise à jour figure en haut de cette page.',
          ],
        },
      ],
    },
  ],
};

/* ───────────────────────── Datenschutzerklärung — DE ───────────────────────── */

export const privacyDe: LegalPageContent = {
  meta: {
    title: 'Datenschutzerklärung — Frédéric Lejour',
    description:
      'Datenschutzerklärung der Website lejourconsulting.com: verarbeitete Daten, Zwecke, Rechtsgrundlagen, Speicherdauer und Betroffenenrechte.',
  },
  hero: {
    eyebrow: 'Datenschutz',
    title: 'Datenschutzerklärung',
    intro:
      'Diese Seite erläutert, welche Daten beim Besuch dieser Website oder bei einer Kontaktaufnahme mit Frédéric Lejour verarbeitet werden können.',
    updated: 'Zuletzt aktualisiert: 11. September 2026',
  },
  sections: [
    {
      title: 'Verantwortlicher',
      blocks: [
        {
          type: 'lines',
          items: [
            'Frédéric Lejour',
            'Lejour Consulting',
            'Kirchstraße 37',
            '55218 Ingelheim am Rhein',
            'Deutschland',
          ],
        },
        {
          type: 'links',
          items: [{ label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }],
        },
        {
          type: 'paragraphs',
          items: [
            'Für Anfragen zu Ihren personenbezogenen Daten können Sie sich an die oben genannte Adresse wenden.',
          ],
        },
      ],
    },
    {
      title: 'Datenverarbeitung beim Besuch der Website',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Beim Besuch dieser Website kann der Hosting-Anbieter die für den Betrieb und die Sicherheit der Website erforderlichen technischen Daten verarbeiten (Server-Logfiles), insbesondere:',
          ],
        },
        {
          type: 'list',
          items: [
            'IP-Adresse;',
            'Datum und Uhrzeit des Zugriffs;',
            'aufgerufene Seite;',
            'verwendeter Browser und Betriebssystem;',
            'Referrer-URL;',
            'technische Protokolldaten und Sicherheitsdaten.',
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Diese Verarbeitungen dienen der Bereitstellung der Website, ihrer Sicherheit, der Missbrauchsprävention und der Fehlerdiagnose.',
            'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO — berechtigtes Interesse am Betrieb und an der Sicherheit der Website.',
          ],
        },
      ],
    },
    {
      title: 'Hosting durch Vercel',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Diese Website wird von Vercel Inc. als technischem Hosting-Dienstleister gehostet. Je nach eingesetzter Infrastruktur können Verarbeitungen oder Übermittlungen in Drittländer stattfinden; sie sind nach den von Vercel genannten Garantien abgesichert, insbesondere durch Standardvertragsklauseln und, soweit anwendbar, durch das EU-US Data Privacy Framework.',
          ],
        },
        {
          type: 'links',
          items: [
            { label: 'Datenschutzerklärung von Vercel', href: VERCEL_PRIVACY_URL },
            { label: 'Data Processing Addendum (DPA) von Vercel', href: VERCEL_DPA_URL },
          ],
        },
      ],
    },
    {
      title: 'Kontaktformular und Web3Forms',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Das Kontaktformular erhebt ausschließlich die von Ihnen eingegebenen Angaben: Vor- und Nachname, E-Mail-Adresse, Unternehmen oder Organisation (freiwilliges Feld), Betreff Ihrer Nachricht und Inhalt Ihrer Nachricht. Das Absenden setzt das Ankreuzen des Einwilligungsfelds voraus.',
            'Diese Angaben werden ausschließlich verwendet, um Ihre Anfrage zu empfangen, die geschilderte Situation zu verstehen, Ihnen zu antworten, den Austausch nachzuverfolgen und das Formular vor Missbrauch und Spam zu schützen.',
            'Das Formular wird über Web3Forms (Web3Creative) als technischen Dienstleister verarbeitet. Nach den aktuellen Angaben des Anbieters werden die Daten über eine HTTPS-Verbindung übertragen und können über Infrastrukturen wie AWS, Cloudflare und Hetzner verarbeitet werden. Web3Forms gibt an, Eingaben maximal drei Jahre aufzubewahren, sofern keine kürzere Frist für das Konto gilt oder eine vorherige Löschung erfolgt. Einzelne Verarbeitungen können außerhalb des Europäischen Wirtschaftsraums stattfinden; die Übermittlungen werden nach Angaben des Anbieters insbesondere durch Standardvertragsklauseln abgesichert.',
            'Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), wenn Sie das Einwilligungsfeld ankreuzen; vorvertragliche Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO), wenn Ihre Anfrage eine Zusammenarbeit oder Leistung betrifft; berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) für die Beantwortung und die übliche Nachverfolgung des Austauschs.',
          ],
        },
        {
          type: 'links',
          items: [
            {
              label: 'Datenschutzerklärung und DPA von Web3Forms',
              href: WEB3FORMS_PRIVACY_URL,
            },
          ],
        },
      ],
    },
    {
      title: 'Speicherdauer',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Der Schriftwechsel wird so lange aufbewahrt, wie es für die Bearbeitung und Nachverfolgung Ihrer Anfrage erforderlich ist, und anschließend gelöscht oder archiviert, sobald die Aufbewahrung nicht mehr notwendig ist, vorbehaltlich gesetzlicher Pflichten.',
            'Bei Kontakten, zu denen kein Vertragsverhältnis entstanden ist, werden die Daten höchstens drei Jahre nach dem letzten relevanten Austausch aufbewahrt.',
          ],
        },
      ],
    },
    {
      title: 'Analyse- und Trackingdienste',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Auf dieser Website werden derzeit keine Analyse- oder Trackingdienste eingesetzt. Sollte künftig ein solcher Dienst hinzugefügt werden, wird diese Erklärung aktualisiert und – soweit gesetzlich erforderlich – vorab Ihre Einwilligung eingeholt.',
          ],
        },
      ],
    },
    {
      title: 'Cookies und Einwilligung',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Diese Website verwendet derzeit ausschließlich technisch notwendige Elemente. Es werden keine einwilligungspflichtigen Cookies oder Tracker gesetzt.',
            'Ein Einwilligungsmanagement ist daher derzeit nicht eingerichtet. Sollten einwilligungspflichtige Tracker eingeführt werden, wird vor deren Aktivierung ein Auswahlmechanismus bereitgestellt.',
          ],
        },
      ],
    },
    {
      title: 'Externe Links',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Die auf dieser Website gesetzten Links, insbesondere zu LinkedIn, übermitteln diesen Diensten grundsätzlich erst dann Daten, wenn Sie den Link anklicken. Eine aktive technische Einbindung dieser Dienste besteht auf der Website nicht.',
          ],
        },
      ],
    },
    {
      title: 'Rechte der betroffenen Personen',
      blocks: [
        {
          type: 'paragraphs',
          items: ['Nach der DSGVO stehen Ihnen insbesondere folgende Rechte zu:'],
        },
        {
          type: 'list',
          items: [
            'Recht auf Auskunft;',
            'Recht auf Berichtigung;',
            'Recht auf Löschung;',
            'Recht auf Einschränkung der Verarbeitung;',
            'Recht auf Widerspruch;',
            'Recht auf Datenübertragbarkeit, soweit anwendbar;',
            'Recht, eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen;',
            'Recht auf Beschwerde bei einer Aufsichtsbehörde.',
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Zuständige Aufsichtsbehörde: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz.',
          ],
        },
        {
          type: 'links',
          items: [{ label: 'www.datenschutz.rlp.de', href: LFDI_RLP_URL }],
        },
      ],
    },
    {
      title: 'Automatisierte Entscheidungen',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Es findet keine ausschließlich automatisierte Entscheidungsfindung mit rechtlicher Wirkung auf Grundlage der über diese Website erhobenen Daten statt.',
          ],
        },
      ],
    },
    {
      title: 'Aktualisierung dieser Datenschutzerklärung',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Diese Datenschutzerklärung kann aktualisiert werden, wenn sich die eingesetzten Dienste, die Verarbeitungen oder die Rechtslage ändern. Das Datum der letzten Aktualisierung ist oben auf dieser Seite angegeben.',
          ],
        },
      ],
    },
  ],
};

/* ─────────────────────────── Legal notice — EN ─────────────────────────── */

export const legalNoticeEn: LegalPageContent = {
  meta: {
    title: 'Legal notice — Frédéric Lejour',
    description:
      'Legal information for the website lejourconsulting.com: publisher, hosting, professional authorisations and liability.',
  },
  hero: {
    eyebrow: 'Legal information',
    title: 'Legal notice',
    intro:
      'Information relating to the publication, hosting and professional framework of the Lejour Consulting website.',
    updated: 'Last updated: 11 September 2026',
  },
  sections: [
    {
      title: 'Website publisher',
      blocks: [
        {
          type: 'lines',
          items: [
            'Frédéric Lejour',
            'Lejour Consulting',
            'Sole proprietorship established in Germany',
            'Kirchstraße 37',
            '55218 Ingelheim am Rhein',
            'Germany',
          ],
        },
        {
          type: 'links',
          items: [{ label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }],
        },
        {
          type: 'paragraphs',
          items: [
            'Intra-Community VAT identification number: DE287643129',
            'IHK Rheinhessen: No. 152 00 686043',
          ],
        },
      ],
    },
    {
      title: 'Person responsible for publication',
      blocks: [{ type: 'paragraphs', items: ['Frédéric Lejour'] }],
    },
    {
      title: 'Real estate activity in France',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Holder of a certificate authorising the cross-border provision of real estate services in France (récépissé de libre prestation de services immobiliers) No. LPS75012025000000015, issued by the CCI Paris Île-de-France and valid until 22 September 2026, pursuant to French Law No. 70-9 of 2 January 1970.',
          ],
        },
      ],
    },
    {
      title: 'Professional authorisation in Germany',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Holder of an authorisation to operate as a real estate agent in Germany (Erlaubnis als Immobilienmakler nach § 34c GewO), issued on 10 March 2021 by the Stadtverwaltung Ingelheim am Rhein.',
            'Supervisory authority: Stadtverwaltung Ingelheim am Rhein.',
            'Applicable professional rules:',
          ],
        },
        {
          type: 'links',
          items: [
            { label: '§ 34c Gewerbeordnung (GewO)', href: GEWO_34C_URL },
            { label: 'Makler- und Bauträgerverordnung (MaBV)', href: MABV_URL },
          ],
        },
      ],
    },
    {
      title: 'Professional indemnity insurance',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Insured with AXA for professional risks related to real estate activity (Profi-Schutz für Dienstleister – Immobilienmakler), contract No. 60242463490/5M.',
          ],
        },
      ],
    },
    {
      title: 'Hosting',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            `This website is hosted by Vercel Inc., ${VERCEL_ADDRESS}, United States.`,
          ],
        },
        {
          type: 'links',
          items: [{ label: 'vercel.com', href: 'https://vercel.com' }],
        },
      ],
    },
    {
      title: 'Intellectual property',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'The texts, visuals, photographs, graphic elements, visual identity and all content published on this website are protected by intellectual property law. Any reproduction, representation or use, in whole or in part, without the prior authorisation of Frédéric Lejour is prohibited, subject to the exceptions provided by law.',
          ],
        },
      ],
    },
    {
      title: 'Liability',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'The information published on this website is provided for information purposes only. Frédéric Lejour takes care to ensure its accuracy and updating, without being able to guarantee operation entirely free of errors or interruptions.',
            'External websites accessible via links from this website remain the sole responsibility of their publishers.',
          ],
        },
      ],
    },
  ],
};

/* ─────────────────────────── Privacy policy — EN ─────────────────────────── */

export const privacyEn: LegalPageContent = {
  meta: {
    title: 'Privacy policy — Frédéric Lejour',
    description:
      'Privacy policy of the website lejourconsulting.com: data processed, purposes, legal bases, retention periods and data subject rights.',
  },
  hero: {
    eyebrow: 'Data protection',
    title: 'Privacy policy',
    intro:
      'This page explains which data may be processed when you browse this website or contact Frédéric Lejour.',
    updated: 'Last updated: 11 September 2026',
  },
  sections: [
    {
      title: 'Data controller',
      blocks: [
        {
          type: 'lines',
          items: [
            'Frédéric Lejour',
            'Lejour Consulting',
            'Kirchstraße 37',
            '55218 Ingelheim am Rhein',
            'Germany',
          ],
        },
        {
          type: 'links',
          items: [{ label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }],
        },
        {
          type: 'paragraphs',
          items: [
            'For any request relating to your personal data, you can write to the address indicated above.',
          ],
        },
      ],
    },
    {
      title: 'Data processed while browsing',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'During your visit, the website host may process the technical data necessary for the operation and security of the site, in particular:',
          ],
        },
        {
          type: 'list',
          items: [
            'IP address;',
            'date and time of access;',
            'page requested;',
            'browser and operating system used;',
            'referring URL;',
            'technical log data and security data.',
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'These processing operations serve the provision of the site, its security, the prevention of abuse and the diagnosis of errors.',
            'Legal basis: Article 6(1)(f) GDPR — legitimate interest in ensuring the operation and security of the site.',
          ],
        },
      ],
    },
    {
      title: 'Vercel hosting',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'The site is hosted by Vercel Inc., which acts as a technical hosting provider. Depending on the infrastructure used, processing or international transfers may take place; they are governed by the safeguards announced by Vercel, in particular standard contractual clauses and, where applicable, the EU–US Data Privacy Framework.',
          ],
        },
        {
          type: 'links',
          items: [
            { label: 'Vercel privacy notice', href: VERCEL_PRIVACY_URL },
            { label: 'Vercel Data Processing Addendum (DPA)', href: VERCEL_DPA_URL },
          ],
        },
      ],
    },
    {
      title: 'Contact form and Web3Forms',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'The contact form collects only the information you enter: first and last name, email address, company or organisation (optional field), subject of your message and content of your message. The consent checkbox must be ticked to allow the form to be sent.',
            'This information is used solely to receive your request, understand the situation described, respond to you, follow up on the exchange and protect the form against abuse and spam.',
            'The form is processed by Web3Forms (Web3Creative), a technical service provider. According to the provider’s current information, data is transmitted over an HTTPS connection and may be processed using infrastructures such as AWS, Cloudflare and Hetzner. Web3Forms states that it may retain submissions for a maximum of three years, unless a shorter period applies to the account or earlier deletion takes place. Some processing may occur outside the European Economic Area; transfers are stated to be governed in particular by standard contractual clauses.',
            'Legal bases: consent (Article 6(1)(a) GDPR) when you tick the consent checkbox; pre-contractual measures (Article 6(1)(b) GDPR) when your request concerns a collaboration or a service; legitimate interest (Article 6(1)(f) GDPR) for responding to and following up on the exchange in the usual manner.',
          ],
        },
        {
          type: 'links',
          items: [
            {
              label: 'Web3Forms privacy policy and DPA',
              href: WEB3FORMS_PRIVACY_URL,
            },
          ],
        },
      ],
    },
    {
      title: 'Retention period',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Correspondence is kept for as long as necessary to process and follow up your request, then deleted or archived once retention is no longer required, subject to legal obligations.',
            'For contacts that have not resulted in a contractual relationship, data is kept for a maximum of three years after the last relevant exchange.',
          ],
        },
      ],
    },
    {
      title: 'Audience measurement',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'No audience measurement or tracking tool is currently used on this site. If such a tool is added in the future, this section will be updated and, where required by regulation, your consent will be requested beforehand.',
          ],
        },
      ],
    },
    {
      title: 'Cookies and trackers',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'This site currently uses only the elements strictly necessary for its operation. No cookies or trackers subject to consent are set.',
            'There is therefore no consent manager to configure at this time. If trackers subject to consent are introduced, a choice mechanism will be put in place before they are activated.',
          ],
        },
      ],
    },
    {
      title: 'External links',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'The links on this site, in particular to LinkedIn, normally only transmit data to these services when you click on them. No active technical integration of these services is present on the site.',
          ],
        },
      ],
    },
    {
      title: 'Your rights',
      blocks: [
        {
          type: 'paragraphs',
          items: ['Under the GDPR, you have the following rights:'],
        },
        {
          type: 'list',
          items: [
            'right of access;',
            'right to rectification;',
            'right to erasure;',
            'right to restriction of processing;',
            'right to object;',
            'right to data portability, where applicable;',
            'right to withdraw your consent at any time, without retroactive effect;',
            'right to lodge a complaint with a supervisory authority.',
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Competent supervisory authority: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz.',
          ],
        },
        {
          type: 'links',
          items: [{ label: 'www.datenschutz.rlp.de', href: LFDI_RLP_URL }],
        },
      ],
    },
    {
      title: 'Automated decision-making',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'No decision producing legal effects is taken solely by automated means on the basis of the data collected by this site.',
          ],
        },
      ],
    },
    {
      title: 'Updates',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'This privacy policy may be updated as the services used, the processing operations or the regulations change. The date of the last update is shown at the top of this page.',
          ],
        },
      ],
    },
  ],
};
