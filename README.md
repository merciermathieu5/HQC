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

## État actuel — v1.18.0 (mai 2026)

**58 questions** dans le catalogue. **Couverture COMPLÈTE des 4 périodes à 7/7 OI** ⭐.

| Période | Questions | OI couvertes |
|---|---|---|
| **P1** — Des origines à 1608 | 14 | 7 / 7 ✓ |
| **P2** — 1608-1760 | 21 | 7 / 7 ✓ |
| **P3** — 1760-1791 | 15 | 7 / 7 ✓ |
| **P4** — 1791-1840 | **8** | **7 / 7 ✓** ⭐ |

### Quoi de neuf (v1.18.0)

**Intégration du PDF Questions courtes 1791-1840** — 7 nouvelles questions P4 qui **amènent P4 de 1/7 à 7/7 OI** ⭐ :

| Q | OI | Pts | Sujet |
|---|---|---|---|
| Q1 | Établir des faits ⭐ | 1 | Apathie des Canadiens à la guerre de 1812 (Brock) |
| Q2 | Changements/continuités ⭐ | 2 | Population anglophone qui s'accroît 1791-1840 |
| Q3 | Causes/conséquences ⭐ | 2 | Cause de propagation des épidémies (promiscuité) |
| Q4 | Différences/similitudes ⭐ | 2 | Désaccord Durham vs Le Canadien sur l'Union |
| Q5 | Mettre en relation ⭐ | 2 | Républicanisme vs Nationalisme canadien |
| Q6 | Liens de causalité ⭐ | 3 | Coût des fourrures → fusion des compagnies |
| Q7 | Situer dans le temps ⭐ | 2 | Avant/après les résolutions Russell (1837) |

Les 7 OI étaient absentes de P4 en v1.17.0 (1 seule question existait : Q1 P4 cartes Acte constitutionnel).

**Aucune nouvelle réglette nécessaire** — réutilisation complète des constantes existantes (notamment `R_DIFFERENCES_2PT_DIVERGENCE` créée en v1.17.0 pour Q5 P3 et qui s'applique aussi à Q4 P4).

**7 images intégrées** :
- Graphiques population 1791 vs 1840 (Q2, HD 2500×1211)
- Bateau d'immigrants (Q3)
- Cartes castors 1780/1820 composites (Q6)
- Tableau « Les 92 résolutions » rasterisé du PDF (Q7)
- Schéma « La crise des subsides au Bas-Canada » (Q7)
- L'attaque contre Saint-Charles (Q7)

## État précédent — v1.17.0 (mai 2026)

**51 questions** dans le catalogue. Couverture par période :

| Période | Questions | OI couvertes |
|---|---|---|
| **P1** — Des origines à 1608 | 14 | 7 / 7 ✓ |
| **P2** — 1608-1760 | 21 | 7 / 7 ✓ |
| **P3** — 1760-1791 | **15** | **7 / 7 ✓** ⭐ |
| **P4** — 1791-1840 | 1 | 1 / 7 |

### Quoi de neuf (v1.17.0)

**Intégration du PDF Questions courtes 1760-1791** — 8 nouvelles questions P3 qui **complètent P3 à 7/7 OI** ⭐ :

| Q | OI | Pts | Sujet |
|---|---|---|---|
| Q1 | Établir des faits ⭐ | 1 | Religion du clergé arrivé avec Amherst (1759) |
| Q2 | Changements/continuités ⭐ | 2 | Changement politique en 1763 (portrait Murray) |
| Q3 | Causes/conséquences | 2 | Cause politique de la révolte de Pontiac |
| Q4 | Situer dans l'espace | 2 | Carte A/B/C/D — région de traite perdue |
| Q5 | Différences/similitudes | 2 | Désaccord Carleton vs marchands de Québec |
| Q6 | Mettre en relation | 2 | Régime militaire / Proclamation royale / Acte de Québec |
| Q7 | Liens de causalité ⭐ | 3 | Guerre d'indépendance américaine → Loyalistes |
| Q8 | Situer dans le temps | 2 | Avant/après l'Acte de Québec (4 documents) |

Les 3 OI marquées ⭐ étaient absentes de P3 en v1.16.1.

**3 nouvelles réglettes** créées :
- `R_SITUER_2PT_SP_FAIT` — situer 1 fait dans l'espace (Q4, binaire 2 pts/0 pt)
- `R_SITUER_2PT_T4_BINAIRE` — situer 4 faits dans le temps (Q8, binaire 2 pts/0 pt). Note : libellé corrigé silencieusement de « (3 sur 3) » (PDF source) à « (4 sur 4) » — erreur évidente de copier-coller du template du PDF source qui a 4 documents.
- `R_DIFFERENCES_2PT_DIVERGENCE` — point de divergence entre points de vue (Q5)

**8 images intégrées** :
- Portrait James Murray (Q2)
- Carte A/B/C/D Proclamation royale (Q4)
- Maison de l'évêque ruines (Q6)
- Schéma gouvernement Proclamation royale (Q6, rasterisé du PDF)
- Spirit of '76 (Q7)
- Carte arrivée des Loyalistes (Q7)
- Carte territoire après Acte de Québec (Q8)
- Boston Tea Party (Q8)

## État actuel — v1.16 (mai 2026)

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
