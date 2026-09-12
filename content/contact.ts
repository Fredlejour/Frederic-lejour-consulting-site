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
