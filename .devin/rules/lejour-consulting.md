---
description: "Garde-fous permanents — site lejourconsulting.com"
trigger: always_on
---

# Lejour Consulting — Project Rules

## Contenu

- Ne jamais inventer de contenu : aucun chiffre, date, résultat, témoignage, nom de client, réalisation, certification, donnée juridique, financière ou fiscale sans source fournie et confirmée par Frédéric Lejour.
- Ne jamais combler un manque par un texte provisoire plausible. Un emplacement sans contenu validé reste vide et signalé, ou la section est retirée.
- Toute incertitude ou contradiction est signalée, jamais arbitrée unilatéralement.
- Toute date, tout intitulé et tout employeur publié doit être cohérent avec `content/CHRONOLOGIE.md`, et avec le CV et le profil LinkedIn.
- La carte professionnelle européenne (EPC) ne doit jamais être présentée comme active.
- Ne pas employer le symbole ® pour PPVI et PAMC-PPVI sans justificatif de dépôt.

## Confidentialité

- Le dépôt GitHub est **public**. Ne jamais y écrire : adresse de rue ou code postal, numéro administratif, identifiant fiscal ou de TVA, numéro de téléphone, date de naissance, situation familiale, contenu de document source, clé ou identifiant technique.
- Les valeurs sensibles restent hors dépôt, dans le dossier privé local, et sont référencées par des marqueurs neutres `[PRIVÉ:…]`.
- Les villes liées au parcours professionnel (Wiesbaden, Ingelheim am Rhein) sont autorisées.

## Git et fichiers

- Ne jamais effectuer de commit, push, tag, reset, revert ou autre opération Git sans demande explicite.
- Ne jamais modifier la branche `main` pendant la refonte. Travailler uniquement sur `refonte-2026`.
- Ne jamais supprimer un fichier ou un asset sans autorisation explicite. Les fichiers de l'ancien site (`index.html`, `src/`, `vercel.json`, `public/og-image.jpg`) sont conservés jusqu'à la phase de nettoyage finale.
- Les documents de travail `content/INVENTAIRE-CONTENUS.md` et `content/CHRONOLOGIE.md` doivent être préservés et tenus à jour.

## Technique

- Le rendu doit rester indexable sans JavaScript côté client : privilégier les composants serveur et la génération statique.
- Parité FR/DE obligatoire, garantie par le typage : un contenu manquant dans une langue doit provoquer une erreur de compilation.
- `lib/routes.ts` est la source de vérité unique des URL : sélecteur de langue, `hreflang`, fil d'Ariane et sitemap doivent en dériver.
- Aucune redirection ne doit empêcher l'accès direct à `/fr/` ou `/de/`, ni pour un visiteur ni pour un robot.
- Aucun secret, clé ou jeton dans le dépôt : uniquement des variables d'environnement.
- Après une modification significative : vérifier TypeScript, lint et build.

## Direction artistique

- Concept validé : « Autorité chaleureuse ». Palette : graphite `#11100E`, ivoire `#F4EFE6`, or patiné `#B08D57`, taupe `#8F887E`, craie `#F7F3EC`.
- Interdits : bleu nuit et cyan, glassmorphism, faux graphiques ou dashboards, apparence de template SaaS, noir et or « luxe artificiel », banques d'images génériques, cartes répétitives à icônes, animations spectaculaires, slogans commerciaux creux.
