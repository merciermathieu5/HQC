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

## État actuel — v1.14 (mai 2026)

**30 questions** dans le catalogue. Couverture par période :

| Période | Questions | OI couvertes |
|---|---|---|
| **P1** — Des origines à 1608 | 14 | 7 / 7 ✓ |
| **P2** — 1608-1760 | **13** | **6 / 7** (manque : changements et continuités) |
| **P3** — 1760-1791 | 2 | 2 / 7 |
| **P4** — 1791-1840 | 1 | 1 / 7 |

### Quoi de neuf (v1.14)

**Intégration complète des 3 RÉCIT thématiques P2 restants** — 8 nouvelles questions issues de :
- *Le régime seigneurial et la population coloniale* : 2 questions (objectifs d'implantation, Trudel vs Grenier)
- *La Nouvelle-France et le territoire* : 3 questions (épidémie Huronie, mercantilisme, mode d'occupation)
- *La diplomatie et la guerre en Nouvelle-France* : 3 questions (Grande Paix 1701, traité d'Utrecht, ordre chrono Conquête)

P2 couvre désormais 6 des 7 OI (manque uniquement « Déterminer des changements et des continuités »).

Aucune nouvelle réglette créée — les 8 questions réutilisent les constantes `R_*` existantes.

## Crédit

Mathieu Mercier — Centre de services scolaire de Kamouraska-Rivière-du-Loup.
