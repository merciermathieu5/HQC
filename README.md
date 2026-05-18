# Histoire du Québec et du Canada — Catalogue d'opérations intellectuelles, 3e secondaire

Catalogue de questions atomiques pour le programme HQC, 3e secondaire (PFEQ, Ministère de l'Éducation du Québec). Permet à un enseignant de composer un cahier à la pièce et d'exporter en format Word (cahier de l'élève + guide de l'enseignant).

## Structure pédagogique

**4 périodes historiques** (sec 3 = des origines à 1840) — chacune avec une réalité sociale unique :

1. **Des origines à 1608** — L'expérience des Autochtones et le projet de colonie
2. **1608-1760** — L'évolution de la société coloniale sous l'autorité de la métropole française
3. **1760-1791** — La Conquête et le changement d'empire
4. **1791-1840** — Les revendications et les luttes nationales

**7 opérations intellectuelles** (2e cycle) :
- Établir des faits
- Situer dans le temps et dans l'espace (fusionnées au 2e cycle)
- Mettre en relation des faits
- Établir des liens de causalité
- Déterminer des causes et des conséquences
- Dégager des différences et des similitudes
- Déterminer des changements et des continuités

## Architecture technique

- HTML/CSS/JS vanilla, aucun build step
- Déploiement GitHub Pages
- Dépendances CDN : SortableJS, docx, JSZip, docx-preview
- Données dans `assets/js/data.js`
- Logique applicative dans `assets/js/app.js`

## État actuel — v1.15 (mai 2026)

**38 questions** dans le catalogue. Couverture par période :

| Période | Questions | OI couvertes |
|---|---|---|
| **P1** — Des origines à 1608 | 14 | 7 / 7 ✓ |
| **P2** — 1608-1760 | **21** | **7 / 7 ✓** |
| **P3** — 1760-1791 | 2 | 2 / 7 |
| **P4** — 1791-1840 | 1 | 1 / 7 |

### Quoi de neuf (v1.15)

**Intégration des 8 questions du PDF *Questions courtes 1608-1760* (RÉCIT)** — couverture P2 complétée à 7/7 OI.

| # | OI | Format de réponse |
|---|---|---|
| Q1 | Établir des faits | lines |
| Q2 | **Changements et continuités** ⭐ | lines |
| Q3 | Causes et conséquences | lines |
| Q4 | Mettre en relation | category-buckets (3 cat × 1 slot) |
| Q5 | Situer | before-after-axis (pivot : gouvernement royal) |
| Q6 | Différences et similitudes | lines |
| Q7 | Liens de causalité | lines (rubrique matricielle 3 pts) |
| Q8 | Situer | chrono-ordering (4 cases, Doc 3 pré-placé) |

⭐ La Q2 résout l'OI manquante en P2 (« déterminer des changements et des continuités »).

**4 nouvelles réglettes** créées :
- `R_CONTINUITES_2PT_GEN` — miroir de `R_CHANGEMENTS_2PT_GEN` pour Q2
- `R_CAUSES_2PT_CONS_SEULE` — variante « une conséquence seule » pour Q3 (libellé au singulier corrigé silencieusement du pluriel de la source)
- `R_RELATION_2PT_3_PART` — variante 3 sur 3 pour Q4
- `R_SIMILITUDES_2PT_GEN` — miroir de `R_DIFFERENCES_2PT_GEN` pour Q6

**Convention « un acteur = un document » respectée** — les documents partagés entre questions (Doc 7 Mercier, Doc 18 Traiteur) sont dupliqués dans des sections DOCS séparées avec numérotation locale.

## Crédit

Mathieu Mercier — Centre de services scolaire de Kamouraska-Rivière-du-Loup.
