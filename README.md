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

## État actuel — v1.16 (mai 2026)

**43 questions** dans le catalogue. Couverture par période :

| Période | Questions | OI couvertes |
|---|---|---|
| **P1** — Des origines à 1608 | 14 | 7 / 7 ✓ |
| **P2** — 1608-1760 | 21 | 7 / 7 ✓ |
| **P3** — 1760-1791 | **7** | **4 / 7** |
| **P4** — 1791-1840 | 1 | 1 / 7 |

### Quoi de neuf (v1.16)

**Intégration des 2 RÉCIT thématiques P3 (1760-1791)** — 5 nouvelles questions issues de :
- *Du régime militaire au gouvernement civil* : 3 questions (3 conséquences du changement de régime + aspects de société ; similitude/différence Gouvernement royal vs Proclamation royale ; situer 2 docs autochtones avant/après Proclamation royale)
- *La société coloniale face au changement d'empire* : 2 questions (cause + conséquence arrivée des Loyalistes ; cause + conséquence des pétitions des marchands britanniques)

P3 couvre désormais 4 des 7 OI (causes-conséquences, différences-similitudes, situer, mettre en relation). Manquent : Établir des faits, Liens de causalité, Changements/continuités.

**2 nouvelles réglettes** créées (la source RÉCIT P3 ne fournit aucun barème — réglettes inventées en s'inspirant du cadre d'évaluation officiel et des patterns existants) :
- `R_CAUSES_2PT_T3_CONS_MULTI` — variante « 3 conséquences à classer » (3 sur 3 / 1-2 sur 3 / 0 sur 3) pour Q1 R1
- `R_DIFFSIM_2PT_1SIM_1DIFF` — variante « 1 similitude ET 1 différence » pour Q2 R1

Les 3 autres questions réutilisent les réglettes existantes (`R_SITUER_1PT_T2`, `R_RELATION_2PT_2_PART`, `R_CAUSES_2PT_CAUSE_CONS`).

**3 schémas vectoriels rasterisés depuis le PDF du RÉCIT** (Word ne les exporte pas comme bitmap) :
- Commerce des fourrures vers 1767 (Q1 R1)
- Schéma Gouvernement royal (1663) (Q2 R1)
- Schéma Proclamation royale (1763) (Q2 R1)

Les activités « En résumé » des deux RÉCIT (7 au total : comparaisons de cartes libres, séquences A-B-C, tableaux multi-colonnes, schémas démographiques) sont écartées — formats complexes non supportés par le schéma de données actuel.

## Crédit

Mathieu Mercier — Centre de services scolaire de Kamouraska-Rivière-du-Loup.
