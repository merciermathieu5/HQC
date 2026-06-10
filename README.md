# Histoire du Québec et du Canada — Catalogue d'opérations intellectuelles (3e + 4e secondaire)

Catalogue de questions atomiques pour le programme **Histoire du Québec et du Canada** (PFEQ, Ministère de l'Éducation du Québec), couvrant **les deux années du 2e cycle du secondaire** (3e et 4e). L'application permet à un enseignant de composer un cahier d'évaluation à la pièce et de l'exporter en format Word — **cahier de l'élève** + **guide de l'enseignant** (corrigé avec réglettes de correction).

## Structure pédagogique

**8 périodes historiques** réparties en 2 années, chacune liée à une réalité sociale unique.

**3e secondaire — des origines à 1840 :**

1. **Des origines à 1608** — L'expérience des Autochtones et le projet de colonie
2. **1608-1760** — L'évolution de la société coloniale sous l'autorité de la métropole française
3. **1760-1791** — La Conquête et le changement d'empire
4. **1791-1840** — Les revendications et les luttes nationales

**4e secondaire — de 1840 à nos jours :**

5. **1840-1896** — La formation du régime fédéral canadien
6. **1896-1945** — Les nationalismes et l'autonomie du Canada
7. **1945-1980** — La modernisation du Québec et la Révolution tranquille
8. **1980 à nos jours** — Les choix de société dans le Québec contemporain

**7 opérations intellectuelles** (OI) du 2e cycle :

- Établir des faits
- Situer dans le temps et dans l'espace
- Mettre en relation des faits
- Établir des liens de causalité
- Déterminer des causes et des conséquences
- Dégager des différences et des similitudes
- Déterminer des changements et des continuités

## État actuel — v1.55.0 (juin 2026)

**214 questions** dans le catalogue, **536 points** au total, réparties sur les **8 périodes**.
**7 périodes sur 8 sont à 7/7 OI.** Seule **P5** reste à 6/7 (voir « Points d'attention »).

| Période | Année | Questions | OI couvertes | Points |
|---|---|---|---|---|
| **P1** — Des origines à 1608 | 3e | 24 | 7 / 7 ✓ | 58 |
| **P2** — 1608-1760 | 3e | 27 | 7 / 7 ✓ | 66 |
| **P3** — 1760-1791 | 3e | 19 | 7 / 7 ✓ | 44 |
| **P4** — 1791-1840 | 3e | 14 | 7 / 7 ✓ | 33 |
| **P5** — 1840-1896 | 4e | 31 | **6 / 7** ⚠ | 81 |
| **P6** — 1896-1945 | 4e | 31 | 7 / 7 ✓ | 76 |
| **P7** — 1945-1980 | 4e | 42 | 7 / 7 ✓ | 115 |
| **P8** — 1980 à nos jours | 4e | 26 | 7 / 7 ✓ | 63 |
| **TOTAL** | | **214** | **7 périodes / 8 à 7 / 7** | **536** |

Sous-total 3e secondaire : **84 questions, 201 points** · sous-total 4e secondaire : **130 questions, 335 points**.

### Quoi de neuf (v1.55.0)

**Deux examens C2 de la CSBF (P5 · La formation du régime fédéral canadien)** : le gouvernement
responsable (Baldwin-Lafontaine, Version B) et la Politique nationale de Macdonald (Version A),
avec leurs dossiers complets (12 documents, dont les portraits BAC, deux tableaux de données,
la carte du réseau d'échange et l'organigramme de 1848). Le gabarit C2 couvre maintenant le
format CSBF : **titre central du schéma** (`responseSpace.titre`), **zone de texte optionnelle**
(le texte définitif se rédige dans le schéma; `lignesReponse` règle la hauteur des cases) et
**remarques de correction** (`corrige.remarques`) affichées dans le guide.

### Quoi de neuf (v1.54.0)

**Les 9 épreuves C2 du lot v1.53.0 sont complètes** : dossiers documentaires intégrés depuis les
cahiers de l'élève (49 documents, 19 images extraites et optimisées), renvois des corrigés tous
validés, mise en situation de P1 restaurée. Le catalogue offre maintenant une C2 complète et
utilisable en classe dans chacune des 8 périodes.

### Quoi de neuf (v1.53.0)

**Lot C2 — 9 épreuves interactives du RÉCIT** réparties sur P1 à P8 (sauf P6, déjà couverte) :
alliance franco-amérindienne de 1603 (P1), conséquences de la colonie française sur les Autochtones
(P2), invasion américaine (P3), immigration britannique (P4), mouvements migratoires (P5), État
québécois × 3 — politique, social, économique (P7) et vieillissement de la population (P8). Énoncés
harmonisés au tutoiement.

- **Dossiers documentaires complets (v1.54.0)** : les 9 dossiers ont été intégrés depuis les
  épreuves (cahiers de l'élève) — 49 documents (30 textes, 18 images, 1 tableau de données) et
  19 images dans `assets/img/`. Tous les renvois des corrigés ont été validés contre les dossiers
  réels, y compris les renumérotations des épreuves 1945-1980 (9-12 → 1-4, 23-26 → 1-4,
  27-32 → 1-6).
- **Gabarit C2 étendu** : `corrige.texte` (texte modèle, chaîne ou paragraphes) rendu dans le guide
  sous le schéma corrigé (« Exemple de texte »).
- **Libellés de critères officiels** : grille C1 → « Critère : représentation cohérente d'une période
  de l'histoire du Québec et du Canada » (nouvelle rangée) ; grille C2 → « Critère : rigueur de
  l'interprétation ».
- **Correctif cms-adapter** : les corrigés structurés C1/C2 survivent désormais à l'aller-retour
  CMS (l'ancien code les écrasait en `avant_apres` vide).
- Écartés (format guide pédagogique, non conforme au gabarit d'épreuve C2) : « Nationalistes et
  impérialistes » et « Colonie comptoir 1608-1663 ».

### Quoi de neuf (v1.52.0)

**Première question de Compétence 2 — « Interpréter une réalité sociale »** : `q-nationalismes-c2-1`
(P6, les interventions de l'État et de l'Église durant la Grande dépression), encodée depuis
l'« Épreuve interactive C2 - 1896 à 1945 » du RÉCIT et ses Pistes de solution. Cette question fixe la
**structure de référence** de toutes les C2 à venir :

- **Énoncé** : mise en situation (`contexte`), tâche en gras (`prompt`), « Dans ton texte, tu devras : »
  (`sousConsignes`), consignes (`bullets`) et `note` (« seul le texte sera corrigé »).
- **Espace de réponse `c2-schema`** : schéma à 2 volets (élément à indiquer + raison qui l'explique),
  puis zone « Texte de 150 mots » pleine page (lignes d'écriture).
- **Réglette `c2-grid`** (`R_C2_INTERPRETATION_8PT`, /8) : grille officielle à embranchement
  (critère : rigueur de l'interprétation ; 2 éléments × /4), `rowLabels` personnalisables par question.
- **Guide** : schéma corrigé (pistes de solution en rouge, alternatives « OU », renvois aux documents),
  puis grille sur sa propre page. Tout reste en **portrait** (contrairement à la C1, paysage).
- **Correctif (guide variante)** : le tri OI → C1 → C2 précède désormais la numérotation globale des
  documents — les renvois d'un cahier mixte concordent exactement entre le cahier variante et son guide.

### Quoi de neuf (v1.29.0)

**Achèvement de la P8 (1980 à nos jours) par les guides pédagogiques RÉCIT (Lot B)** et **passe de cohérence sur les 8 périodes.**

- **+8 questions P8** (préfixe `cs`, réalité `choix-societe-quebec-contemporain`) tirées des 4 guides RÉCIT de la période. **P8 passe de 6/7 à 7/7 OI** ; cahier P8 de 38 à 55 points.
  - **Priorité atteinte** : l'OI « Établir des faits » (absente des sommatives) est couverte par `q-cs-faits-1` — deux facteurs limitant le branchement à Internet, avec un **graphique recréé** (population branchée selon le revenu, 2012-2016).
  - Autres OI complétées : situer (chrono des 4 accords de libre-échange depuis 1980), causalité (services numériques → taxe), causes/conséquences (Commission de vérité et réconciliation), différences/similitudes (Lévesque vs Trudeau ; missions de paix vs armées ; neutralité religieuse à Saguenay), changements/continuités (Loi constitutionnelle 1867 vs 1982).
  - 1 réglette créée (`R_FAITS_2PT_2SUR2`) ; 7 réglettes existantes réutilisées. 7 questions candidates écartées (doublons avec les sommatives ou formats hors-portée).
- **Passe de cohérence (8 périodes)** :
  - **Correctif de barème** — `R_CAUSES_2PT_CAUSE_BINAIRE` (Q2 P1 familiarisation) était implémentée via `rubric2()`, qui plafonne à 1 point, en contradiction avec son nom, son label « Réglette (2 points) » et sa source documentée. Restaurée en barème binaire **2 pts / 0 pt**. P1 passe de 49 à 50 points.
  - **Correctif de documentation** — l'en-tête de `data.js` annonçait P5 à 7/7 OI ; P5 est en réalité à **6/7** (l'OI « Établir des faits » n'y a jamais été couverte). En-tête corrigé pour refléter la réalité.
  - **Vérifié sans anomalie** : contiguïté et unicité des compteurs `numero` (par réalité × OI), concordance label ↔ `maxPoints` de toutes les réglettes, présence d'une source sur chaque document.

## Architecture technique

- HTML / CSS / JS *vanilla*, aucune étape de *build*.
- Déploiement GitHub Pages (`.nojekyll`).
- Dépendances CDN : SortableJS, `docx` (v8.5.0), JSZip, docx-preview.
- **Toutes les données** (questions, documents, réglettes) vivent dans `assets/js/data.js`.
- **Logique applicative** et génération .docx côté client dans `assets/js/app.js`.

### Méthode d'intégration des questions

Deux sources alimentent le catalogue, selon une méthode uniforme d'une période à l'autre :

1. **Évaluations sommatives officielles** (Section A « Avec documents ») — fournissent l'ossature de chaque période et leurs barèmes officiels.
2. **Guides pédagogiques RÉCIT** — comblent les OI manquantes (souvent « Établir des faits ») et ajoutent de la variété. Les guides RÉCIT **ne fournissent pas de barème** : on calque alors une réglette fonctionnellement équivalente parmi les constantes existantes (ou on en crée une, en le documentant en commentaire).

**Conventions appliquées partout** : tutoiement ; guillemets français `« »` ; « un acteur = un document » (les documents multi-acteurs sont éclatés) ; renumérotation des documents à partir de « Document 1 » par question ; aucune source ne doit révéler la réponse (ex. années retirées des questions chronologiques, photos sous droits remplacées par du texte factuel).

## Points d'attention connus

- **P5 (1840-1896) — 6/7 OI** : l'OI **« Établir des faits »** n'est pas encore couverte. C'est le seul écart de couverture restant du catalogue. Il se comblerait par une question issue d'un guide RÉCIT de P5 (même méthode que P8 en v1.29.0), guide non encore traité.
- **`na-continuite-5/doc2` (P6) — source « à confirmer »** : le PDF du guide RÉCIT cite pour ce document la même source que le document précédent (Orphelinat de Notre-Dame de Montfort, 1896), alors que l'image réellement intégrée est différente (une religieuse enseignante avec deux écolières, vraisemblablement 1930-1950). C'est un bug de copier-coller du fichier source. L'image illustre fidèlement la continuité du rôle de l'Église dans l'éducation — l'objet même de la question — mais sa provenance exacte ne peut être établie de façon fiable sans recherche par image inverse. Le libellé « à confirmer » est maintenu volontairement (aucune attribution n'est inventée) ; à trancher par l'enseignant.

## Historique des versions (résumé)

- **v1.29.0** — P8 complétée par les guides RÉCIT (Lot B) ; passe de cohérence (8 périodes). 202 questions.
- **v1.28.0** — Démarrage de P8 : 17 questions des évaluations sommatives Section A (Lot A).
- **v1.27.0** — Fin de l'intégration des guides RÉCIT de P7 (modernisation du Québec).
- **v1.18.x / v1.17.0 / v1.16** — Complétion de P3 et P4 à 7/7 (PDF « Questions courtes » et RÉCIT thématiques), correctifs d'images.

## Crédit

Mathieu Mercier — Centre de services scolaire de Kamouraska-Rivière-du-Loup.
