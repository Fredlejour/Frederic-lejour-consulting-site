import type { PageMeta } from './types';

/**
 * Contenu de la page Contact française (/fr/contact).
 *
 * Page volontairement courte : un hero compact et une seule section à deux
 * colonnes (raisons d'échanger / formulaire). Le formulaire est l'action
 * principale de la page — aucun CTA concurrent.
 *
 * Le lien LinkedIn reprend l'URL publique validée (voir
 * content/INVENTAIRE-CONTENUS.md). Aucune adresse e-mail ni téléphone n'est
 * publié tant que ces coordonnées restent `À VÉRIFIER` / `À FOURNIR`.
 *
 * La version allemande sera déclarée séparément, une fois traduite et
 * validée.
 */

export type ContactReason = {
  step: string;
  title: string;
  description: string;
};

export type ContactContent = {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    /** Trois lignes de titre, à rendre l'une sous l'autre ; la dernière en accent. */
    title: [string, string, string];
    intro: string;
  };
  reasons: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ContactReason[];
  };
  linkedin: {
    label: string;
    href: string;
  };
  form: {
    title: string;
    fields: {
      name: string;
      email: string;
      company: string;
      /** Mention « (facultatif) » accolée au label de l'entreprise. */
      companyOptional: string;
      subject: string;
      /** Option initiale du select, désactivée et non sélectionnable. */
      subjectPlaceholder: string;
      /** Liste blanche des objets — vérifiée aussi côté serveur. */
      subjectOptions: string[];
      message: string;
    };
    consent: string;
    reassurance: string;
    /** Libellé du lien vers la politique de confidentialité. */
    privacyLabel: string;
    submit: string;
    sending: string;
    /** Label masqué du honeypot anti-robots (champ `botcheck`). */
    honeypotLabel: string;
    /** Objet du courriel reçu via Web3Forms. */
    emailSubject: string;
  };
  success: {
    title: string;
    text: string;
    /** Lien fonctionnel pour renvoyer un message — pas un CTA commercial. */
    again: string;
  };
  error: {
    text: string;
  };
};

export const contactFr: ContactContent = {
  meta: {
    title: 'Contact — Frédéric Lejour',
    description:
      'Contactez Frédéric Lejour pour échanger sur une opportunité professionnelle, une mission de développement commercial, une relation stratégique ou un partenariat.',
  },
  hero: {
    eyebrow: 'Contact',
    title: [
      'Une situation à comprendre',
      'Un potentiel à développer',
      'Parlons-en',
    ],
    intro:
      'Que vous envisagiez un recrutement, une collaboration, le développement d’un marché ou la progression d’une relation stratégique, le premier échange permettra simplement de comprendre votre situation.',
  },
  reasons: {
    eyebrow: 'Échangeons',
    title: 'Chaque prise de contact commence par une écoute.',
    intro:
      'Expliquez-moi votre contexte, vos objectifs ou la difficulté que vous cherchez à résoudre.',
    items: [
      {
        step: '01',
        title: 'Opportunité professionnelle',
        description: 'Business Development, Account Management ou relations stratégiques.',
      },
      {
        step: '02',
        title: 'Mission ou collaboration',
        description: 'Développement commercial, structuration d’offre ou acquisition.',
      },
      {
        step: '03',
        title: 'Partenariat',
        description: 'Création de valeur commune et développement de relations durables.',
      },
      {
        step: '04',
        title: 'Échange exploratoire',
        description:
          'Une situation mérite parfois d’être comprise avant de définir une solution.',
      },
    ],
  },
  linkedin: {
    label: 'Me retrouver sur LinkedIn',
    href: 'https://www.linkedin.com/in/fredericlejour/',
  },
  form: {
    title: 'Commençons par quelques éléments.',
    fields: {
      name: 'Prénom et nom',
      email: 'Adresse e-mail',
      company: 'Entreprise ou organisation',
      companyOptional: '(facultatif)',
      subject: 'Objet de votre message',
      subjectPlaceholder: 'Sélectionnez…',
      subjectOptions: [
        'Opportunité professionnelle',
        'Mission ou collaboration',
        'Partenariat',
        'Autre sujet',
      ],
      message: 'Votre message',
    },
    consent:
      'J’accepte que les informations saisies soient utilisées uniquement pour répondre à ma demande.',
    reassurance:
      'Votre message est destiné à Frédéric Lejour. Les informations saisies sont utilisées uniquement pour traiter votre demande et vous répondre.',
    privacyLabel: 'Politique de confidentialité',
    submit: 'Envoyer mon message',
    sending: 'Envoi en cours…',
    honeypotLabel: 'Ne pas remplir ce champ',
    emailSubject: 'Nouveau message depuis lejourconsulting.com',
  },
  success: {
    title: 'Votre message a bien été transmis.',
    text: 'Merci pour l’intérêt que vous portez à mon profil et à mon expertise. Je prendrai personnellement connaissance de votre demande.',
    again: 'Envoyer un autre message',
  },
  error: {
    text: 'Une erreur a empêché l’envoi de votre message. Vérifiez votre connexion puis réessayez.',
  },
};

/**
 * Contenu allemand de la page Kontakt (/de/kontakt).
 *
 * Traduction professionnelle validée des textes français ci-dessus.
 * Même structure, même URL LinkedIn, même fonctionnement Web3Forms.
 */
export const contactDe: ContactContent = {
  meta: {
    title: 'Kontakt — Frédéric Lejour',
    description:
      'Kontaktieren Sie Frédéric Lejour für einen Austausch über eine berufliche Möglichkeit, eine Aufgabe in der Geschäftsentwicklung, eine strategische Geschäftsbeziehung oder eine Partnerschaft.',
  },
  hero: {
    eyebrow: 'KONTAKT',
    title: [
      'Eine Situation verstehen',
      'Potenzial entwickeln',
      'Lassen Sie uns darüber sprechen',
    ],
    intro:
      'Ob es um eine berufliche Möglichkeit, eine Zusammenarbeit, die Entwicklung eines Marktes oder den Ausbau einer strategischen Beziehung geht: In einem ersten Gespräch geht es zunächst darum, Ihre Situation zu verstehen.',
  },
  reasons: {
    eyebrow: 'IM AUSTAUSCH',
    title: 'Jeder Kontakt beginnt mit aufmerksamem Zuhören.',
    intro:
      'Schildern Sie mir Ihren Kontext, Ihre Ziele oder die Herausforderung, für die Sie eine Lösung suchen.',
    items: [
      {
        step: '01',
        title: 'Berufliche Möglichkeit',
        description:
          'Business Development, Account Management oder strategische Beziehungen.',
      },
      {
        step: '02',
        title: 'Auftrag oder Zusammenarbeit',
        description:
          'Geschäftsentwicklung, Strukturierung eines Angebots oder Kundengewinnung.',
      },
      {
        step: '03',
        title: 'Partnerschaft',
        description:
          'Gemeinsam Mehrwert schaffen und langfristige Beziehungen entwickeln.',
      },
      {
        step: '04',
        title: 'Unverbindlicher Austausch',
        description:
          'Manchmal muss eine Situation zunächst verstanden werden, bevor sich eine Lösung definieren lässt.',
      },
    ],
  },
  linkedin: {
    label: 'Mein Profil auf LinkedIn ansehen',
    href: 'https://www.linkedin.com/in/fredericlejour/',
  },
  form: {
    title: 'Lassen Sie uns mit einigen Angaben beginnen.',
    fields: {
      name: 'Vor- und Nachname',
      email: 'E-Mail-Adresse',
      company: 'Unternehmen oder Organisation',
      companyOptional: '(optional)',
      subject: 'Betreff Ihrer Nachricht',
      subjectPlaceholder: 'Bitte auswählen …',
      subjectOptions: [
        'Berufliche Möglichkeit',
        'Auftrag oder Zusammenarbeit',
        'Partnerschaft',
        'Anderes Anliegen',
      ],
      message: 'Ihre Nachricht',
    },
    consent:
      'Ich bin damit einverstanden, dass die von mir eingegebenen Informationen ausschließlich zur Bearbeitung meiner Anfrage verwendet werden.',
    reassurance:
      'Ihre Nachricht ist für Frédéric Lejour bestimmt. Die von Ihnen eingegebenen Informationen werden ausschließlich dazu verwendet, Ihre Anfrage zu bearbeiten und Ihnen zu antworten.',
    privacyLabel: 'Datenschutzerklärung',
    submit: 'Nachricht senden',
    sending: 'Nachricht wird gesendet …',
    honeypotLabel: 'Dieses Feld nicht ausfüllen',
    emailSubject: 'Neue Nachricht über lejourconsulting.com',
  },
  success: {
    title: 'Ihre Nachricht wurde erfolgreich übermittelt.',
    text: 'Vielen Dank für Ihr Interesse an meinem Profil und meiner Expertise. Ich werde mich persönlich mit Ihrer Anfrage befassen.',
    again: 'Eine weitere Nachricht senden',
  },
  error: {
    text: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.',
  },
};
