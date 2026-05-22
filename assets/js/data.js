/* ============================================================
   HQC · 3e + 4e secondaire — Données — v1.29.0 (mai 2026) ⭐⭐ P8 COMPLÉTÉE — SOMMATIVES (LOT A) + GUIDES RÉCIT (LOT B)
   202 questions · 8 périodes (P1-P8) · 7 OI · 2 cycles — 7 PÉRIODES SUR 8 À 7/7 OI ; P5 reste à 6/7 (« établir des faits » manquante) ⚠
   Couverture 3e : P1 = 23 (7/7 OI), P2 = 26 (7/7 OI), P3 = 18 (7/7 OI), P4 = 13 (7/7 OI)
   Couverture 4e : P5 = 28 (6/7 OI ⚠ — « établir des faits » MANQUANTE ; 16 sommatives + 12 guides RÉCIT), P6 = 30 (7/7 OI) ⭐⭐ (16 sommatives + 14 guides RÉCIT),
                   P7 = 39 (7/7 OI ⭐⭐ — 18 sommatives Section A + 21 questions des 6 guides RÉCIT),
                   P8 = 25 (7/7 OI ⭐⭐ — 17 sommatives Section A V-A + V-B + 8 questions des 4 guides RÉCIT). Total cahier P8 = 55 points.
   Répartition OI de P8 (25 q) : causes/conséquences 6 · différences/similitudes 5 · changements/continuités 4 ·
                   mettre en relation 3 · situer 3 · causalité 3 · établir des faits 1.
   v1.29.0 — FIN DE P8 (1980 À NOS JOURS) — INTÉGRATION DES GUIDES PÉDAGOGIQUES RÉCIT (LOT B) :
     • +8 questions (préfixe « cs », réalité choix-societe-quebec-contemporain), tirées des 4 guides RÉCIT de P8
       (« La population québécoise et la culture », « Le statut politique du Québec », « Le Québec dans le monde »,
       « Les revendications sociales »). P8 passe de 6/7 à 7/7 OI ; total cahier 38 → 55 points (+17).
       — PRIORITÉ ATTEINTE : « Établir des faits » 0 → 1 (q-cs-faits-1, numero 1) : deux facteurs limitant le
         branchement à Internet (revenu, région), avec un graphique recréé via matplotlib (Document 2).
       — Autres OI complétées : situer 2 → 3 (chrono des 4 accords de libre-échange depuis 1980), causalité 2 → 3
         (Netflix → taxe des services numériques), causes/conséquences 5 → 6 (2 conséquences de la CVR), diff/sim
         2 → 5 (Lévesque vs Trudeau ; missions de paix vs armées ; neutralité religieuse à Saguenay), changements/
         continuités 3 → 4 (Loi const. 1867 vs 1982).
     • 1 réglette ajoutée : R_FAITS_2PT_2SUR2 (type simple, 2 pts, 3 niveaux « 2/2 · 1/2 · 0/2 ») — les guides RÉCIT
       ne fournissent pas de barème, calque des réglettes « établir des faits » des autres périodes. Toutes les
       autres réglettes du Lot B sont réutilisées (R_DIFFERENCES_2PT_DIVERGENCE, R_CHANGEMENTS_2PT_1CHG_1CONT,
       R_CAUSES_2PT_2CONS, R_SITUER_2PT_T4, R_DIFFSIM_2PT_1SIM_1DIFF, R_SIMILITUDES_2PT_CONVERGENCE, RUBRIC_CAUSALITE_3PT).
     • 1 image préparée : graphique « population branchée à Internet selon le revenu, 2012-2016 » (cs-faits-1/doc2.png),
       recréé via matplotlib (suréchantillon), SANS titre intégré (le titre est porté par « Document 2 »).
     • DÉCISIONS DE FIDÉLITÉ : la photo de la signature de l'ACEUM (domaine public) est convertie en texte factuel ;
       les années sont retirées des contenus et des sources de la question « situer » pour ne pas révéler l'ordre
       chronologique (l'élève situe via les acteurs et les accords nommés).
     • 7 questions candidates ÉCARTÉES (doublons durs avec les sommatives ou protocoles hors-portée) : revend Q1
       (doublon cs-differences-2, frais de scolarité), monde Q2 (doublon cs-causes-1, conséquence du libre-échange),
       monde Q3 (doublon cs-causalite-1, finances publiques), pop Q1 (chevauchement cs-causes-2 + 3 graphiques),
       statut Q3 (infographies non extractibles + diff/sim sur-couvert), revend Q3 (chevauchement cs-relation-1 +
       2 photos droits réservés), revend Q4 (causalité déjà couverte + visuels à reconstruire).
     • PASSE DE COHÉRENCE GLOBALE (8 périodes) : (1) CORRECTIF de barème — R_CAUSES_2PT_CAUSE_BINAIRE (Q2 P1
       familiarisation) était implémentée via rubric2() (plafond 1 pt), en contradiction avec son nom, son label
       « Réglette (2 points) » et sa source documentée ; restaurée en barème binaire 2 pts/0 pt. P1 passe de 49 à
       50 points ; total catalogue 439 → 440 points. (2) CORRECTIF de documentation — P5 était annoncée 7/7 OI
       dans cet en-tête alors qu'elle est à 6/7 (l'OI « établir des faits » n'a jamais été couverte ; aucune
       question cs-faits/équivalent en P5). En-tête corrigé. (3) Vérifié sans anomalie : contiguïté et unicité des
       compteurs `numero` par réalité×OI, concordance label↔maxPoints (24+1 réglettes 1-2 pts), présence d'une
       source sur chaque document. (4) na-continuite-5/doc2 (P6) : source toujours « à confirmer » (image archivistique
       d'une religieuse enseignante et de deux écolières ; la provenance exacte ne peut être établie de façon fiable
       sans recherche par image inverse — le libellé « à confirmer » est maintenu, à trancher par l'enseignant).
   v1.28.0 — DÉMARRAGE DE P8 (1980 À NOS JOURS) — ÉVALUATIONS SOMMATIVES SECTION A (LOT A) :
     • +17 questions (préfixe « cs », réalité choix-societe-quebec-contemporain), tirées des versions A et B
       de l'Évaluation sommative officielle « 1980 à nos jours », Section A « Avec documents » uniquement
       (Sections B et C écartées, conformément à la commande). Total cahier : 38 points.
       — V-A (8 q) : statut politique 1980-1995 en ordre chrono (doc pré-rempli), conséquence du libre-échange,
         appariement 4×4 des droits autochtones, causalité récession→dette→programmes sociaux, continuité
         salariale H/F, 3 acteurs sur la Loi 178 (affichage), cause du vieillissement, Internet vs concentration
         des médias (2 sur 2).
       — V-B (9 q) : projets de réforme constitutionnelle (2 sur 2, colonne unique), ligne du temps (ALÉ),
         cause du déclin régional, causalité vieillissement+natalité→RQAP, conséquence de la Loi 86, continuité
         culturelle (repère de temps), changement (info via Internet), 3 acteurs sur les frais de scolarité,
         couche d'ozone cause/conséquence (2 sur 2).
     • 2 réglettes ajoutées : R_DIFFSIM_3PT_2POSITIONS_SOMA (V-A Q6 — 4 niveaux, nommer l'acteur + comparer
       2 positions) et R_SITUER_2PT_T3_SOMA (V-A Q1 — 3 niveaux « 3 sur 3 / 1 ou 2 / 0 », distincte de la
       variante binaire R_SITUER_2PT_T3_BINAIRE_SOMA). Toutes les autres réglettes sont réutilisées.
     • Images préparées (10) : graphique du référendum de 1995, exportations vers les É.-U., drapeau du Nunavut,
       carte de la crise d'Oka (BANDEAU-TITRE « Crise d'Oka (1990) » RECADRÉ pour ne pas révéler la réponse de
       l'appariement), tableau du chômage (recréé via PIL), graphique de la dette, rémunération H/F, natalité/
       mortalité, infographie de Meech, tableau de la structure par âge (recréé via PIL).
     • DÉCISIONS DE FIDÉLITÉ : (1) la photo de la signature de 1982 (La Presse canadienne, tous droits réservés)
       est REMPLACÉE par un texte factuel sur le rapatriement de la Constitution. (2) DISCORDANCE V-B Q6 : le
       corrigé montre une réglette 2 pts, le cahier élève une réglette 3 pts avec repère de temps ; le libellé
       (« justifie par des faits et un repère de temps ») commande la 3 pts — retenue. (3) Q1 V-A : doc le plus
       ancien (référendum de 1980) pré-rempli en 1re position, titres et textes purgés des années pour ne pas
       révéler l'ordre.
     • OI « Établir des faits » = 0 en P8 (les sommatives Section A ne le sollicitent pas). À combler par le
       Lot B (guides pédagogiques RÉCIT), comme en P5/P6/P7 — guides NON ENCORE FOURNIS.
   v1.27.0 — FIN DE L'INTÉGRATION DES GUIDES RÉCIT P7 (LOTS 2 À 6) + AJUSTEMENTS DE FORMAT :
     • +18 questions tirées des 5 guides restants (préfixe « mq », réalité modernisation-quebec) :
       — Période duplessiste (3) : situer-espace (6 documents ↔ carte des ressources à lettres A-F,
         grille à cocher), grève de l'amiante en ordre chronologique, 2 causes + 2 conséquences de
         la grève (documents partagés mq-situer-7). Q4 « mécanisation des fermes » ÉCARTÉE (doublon
         dur avec la sommative V-A Q8 : même tableau + électrification, même OI).
       — Population québécoise (3) : causes de la dénatalité (3 causes, 1 par document, dont un
         tableau « force de travail » recréé via PIL), caractéristiques de la société de consommation
         (4 documents : 3 photos + 1 texte), causalité pensionnats/assimilation (carte des pensionnats).
         Q3 « analyser une iconographie » (étalement urbain, photos aériennes + capsule vidéo) ÉCARTÉE
         (protocole hors-portée, comme la Q2 Polit.can. en P6).
       — Culture/langue (4) : changement (théâtre québécois), changement avec données (financement
         des bibliothèques, tableau recréé via PIL), situer (Loi 101 → ligne du temps, lettre D),
         mettre en relation (immigration et protection du français).
       — Mouvements sociaux (4) : causalité (loi anti-briseurs de grève), 2 « établir des faits »
         (Madeleine Parent ; gains des Cris à la Baie-James), situer (capacité juridique 1964 →
         ligne du temps, lettre C).
       — Révolution tranquille / État-providence (4) : différence + similitude (services par l'Église
         vs par l'État, 4 photos), causalité (Commission Parent → laïcisation), mesures économiques de
         Lesage et leurs causes (nationalisation de l'électricité + Caisse de dépôt), 3 acteurs sur
         l'avortement (Lise Payette = position différente).
     • 8 réglettes ajoutées au total pour les guides (v1.26.0 + v1.27.0) : R_FAITS_3PT_3SUR3,
       R_SITUER_3PT_SP_6SUR6, R_CAUSES_4PT_2CAUSES_2CONS, R_CAUSES_3PT_3CAUSES, R_FAITS_4PT_4SUR4,
       R_DIFFSIM_2PT_1DIFF_1SIM, R_CAUSES_4PT_2MESURES_2CAUSES (+ réutilisation de R_CHANGEMENTS_2PT_GEN,
       R_RELATION_2PT_1FAIT_GUIDE, R_DIFFSIM_3PT_ACTEUR_DIFFERENT_POSITION, RUBRIC_CAUSALITE_3PT,
       R_SITUER_1PT_FAITS, R_FAITS_1PT_1SUR1, R_SITUER_2PT_T3/T4). Les guides RÉCIT ne fournissant pas
       de barème, ces réglettes calquent des matrices fonctionnellement équivalentes (mention en
       commentaire à chaque définition).
     • Lignes du temps des guides (culture Q3, mouvements Q4) RECONSTRUITES : le graphique source est
       un dessin Word non extractible. Découpage retenu (cohérent avec les réponses D=1977, C=1964) :
       A 1945-1955 · B 1955-1960 · C 1960-1970 · D 1970-1980.
     • Images : 8 photos d'archives extraites en natif (réfrigérateur, affiche touristique, salon de
       l'auto ; classe religieuse, religieuse soignant un enfant, école laïque, infirmière ; les deux
       dernières recadrées pour retirer le letterbox noir). 2 cartes natives (pensionnats ; déjà la
       carte des ressources en v1.27.0-duplessiste). 2 tableaux recréés via PIL (force de travail ;
       subventions aux bibliothèques) — rendus sans titre intégré, le titre étant porté par le titre
       de document HQC (évite le rognage). Script : /home/claude/render-tables-lotb.py.
     • AJUSTEMENTS DE FORMAT (demandés par l'utilisateur, appliqués globalement) :
       — Source de Jean Lesage (mq-situer-1) : année « (1961) » retirée (elle révélait la réponse).
       — Carte minière (mq-situer-2) : espace de réponse « 2 lignes » → grille à cocher (lettres A-D).
       — Carte des ressources duplessiste (mq-situer-6) : 6 cases-catégories → grille d'appariement
         document × lettre (checkbox-table 6×6) ; carte agrandie à 14 cm.
       — RIN vs Daniel Johnson (mq-differences-4) : liste étiquetée → 4 lignes libres.
       — app.js (buildDocument) : taille de police des documents UNIFORMISÉE (corps 20, source 14,
         titre 22) quelle que soit la largeur de colonne — `isNarrow` ne sert plus qu'aux images.
         Effet global (toutes périodes) ; le cahier P7 passe ainsi à 53 pages.
     • Validation : cahier élève P7 = 53 pages · guide enseignant P7 = 11 pages, tous les nouveaux
       types de réponse et visuels inspectés au rendu PDF.
   v1.26.0 — INTÉGRATION DES GUIDES PÉDAGOGIQUES RÉCIT P7 (EN COURS) — LOT 1 : NÉONATIONALISME :
     • 3 questions du guide « Le néonationalisme québécois et la fédération canadienne » :
       Q1 établir des faits (mouvement souverainiste : politiciens / objectif / moyen, docs 1-3),
       Q2 situer dans le temps (montée du PQ : chrono RIN 1966 → MSA 1967 → congrès PQ 1968 → élection 1976),
       Q3 dégager des différences (RIN vs Daniel Johnson sur le statut du Québec).
     • ⭐ P7 ATTEINT 7/7 OI grâce à la Q1 « établir des faits » (seule OI manquante après le Lot A).
     • Nouvelle réglette R_FAITS_3PT_3SUR3 (3 faits, matrice à 3 niveaux calquée sur les réglettes
       « situer », les guides RÉCIT ne fournissant pas de barème). Réutilise R_SITUER_2PT_T4 (Q2) et
       R_DIFFERENCES_2PT_DIVERGENCE_ETABLIT (Q3). Toutes les pièces sont en texte (aucune image).
     • Doublon documentaire toléré : Doc 1 de mq-faits-1 (Lévesque, Le Choix du Québec 1976) partage
       sa source avec mq-differences-2/doc2 (sommative V-A Q7) ; conservé car l'OI et l'ensemble
       documentaire diffèrent (précédent P5/P6).
     • RESTE À INTÉGRER (triés) : période duplessiste (4), population québécoise (2 — la Q3
       « analyser une iconographie » en 4 étapes est écartée, hors-portée comme la Q2 Polit.can. en P6),
       culture/langue (4), mouvements sociaux (4), Révolution tranquille / État-providence (4).
     • Validation : cahier élève P7 = 24 pages · guide enseignant P7 = 5 pages, rendus inspectés.
   v1.25.0 — DÉMARRAGE DE P7 (1945-1980) — ÉVALUATIONS SOMMATIVES SECTION A :
     • Intégration de 18 questions « Avec documents » tirées des Sections A des deux versions
       (V-A : 9 questions, V-B : 9 questions) couvrant « 1945-1980 : La modernisation du Québec
       et la Révolution tranquille ». Réalité sociale modernisation-quebec (annee 4, niveau 3),
       préfixe d'identifiants « mq » (cohérent avec P5 = fc, P6 = na).
     • Sections B (description avec schéma) et C (texte 150 mots) écartées par convention HQC.
     • Aucun doublon dur à l'intérieur du lot. Thèmes récurrents entre V-A et V-B (« gains des
       femmes 1960-1980 », « autonomie/Duplessis ») conservés des deux côtés car l'OI ou le
       contenu testé diffèrent (relation vs chrono ; causalité vs relation), comme en P6.
     • 7 nouvelles réglettes pour les libellés exacts des sommatives P7 :
       R_CAUSES_2PT_1CONS_SOMA (Q3 V-A — « plus ou moins correctement LES conséquences », pluriel),
       R_RELATION_2PT_2SUR2 (Q5 V-A, Q2 V-B — décompte « (2 sur 2) »),
       R_SITUER_2PT_SP_2FAITS (Q6 V-A — 2 régions minières dans l'espace),
       R_DIFFERENCES_1PT (Q7 V-A — différence à 1 point, binaire),
       R_CAUSES_2PT_CAUSE_CONS_2SUR2 (Q7 V-B — cause + conséquence décomptées),
       R_SITUER_2PT_T3_BINAIRE_SOMA (Q8 V-B — chrono binaire « situe TOUS les faits (3 sur 3) »,
         distinct de R_SITUER_2PT_T3_BINAIRE qui dit « les faits » sans « tous »),
       RUBRIC_CHANGEMENTS_3PT_REPERE_INLINE (Q4 V-B — même matrice que RUBRIC_CHANGEMENTS_3PT_
         REPERE_TEMPS mais sous-points affichés en ligne dans les cellules, sans le format
         « 3 points (ou 2 points*) »).
     • Réglettes réutilisées : R_SITUER_1PT_FAITS (Q1 V-A timeline Lesage, Q5 V-B timeline B&B),
       R_CAUSES_2PT_1CAUSE_SOMA (Q2 V-A société de consommation, Q9 V-B rejet Livre blanc),
       R_DIFFERENCES_2PT_DIVERGENCE_ETABLIT (Q4 V-A grève amiante),
       RUBRIC_CHANGEMENTS_3PT_REPERE_TEMPS (Q8 V-A agriculture),
       RUBRIC_CAUSALITE_3PT (Q9 V-A autonomie Duplessis, Q3 V-B libéralisme/ressources),
       R_CAUSES_2PT_1CONS_GUIDE (Q1 V-B pensionnats),
       R_DIFFSIM_3PT_ACTEUR_DIFFERENT_POSITION (Q6 V-B 3 acteurs fédération).
     • Réponses graphiques : 2 lignes du temps rendues via responseSpace `timeline-segments`
       (Q1 V-A : A 1954-1960 / B 1960-1966 / C 1966-1972 / D 1972-1978 → Lesage = B ;
        Q5 V-B : A 1945-1960 / B 1960-1970 / C 1970-1980 → Commission B&B = B). Carte minière
       (Q6 V-A) avec cercles A-D, réponse C (Abitibi) + D (Côte-Nord). Catégories à remplir via
       `category-buckets` (Q5 V-A gains, Q2 V-B autonomie, Q7 V-B ministère). Ordre chrono via
       `chrono-ordering` avec 1 doc pré-rempli (Q8 V-B gains des femmes).
     • Conventions « un acteur = un document » appliquées : Doc 8 V-A (Groulx + Duplessis sur la
       grève de l'amiante) → 2 docs ; Doc 7 V-A (FLQ + Lévesque/PQ) → 2 docs ; Doc 9 V-B
       (Bourassa + Lévesque + Bertrand) → 3 docs.
     • 6 images : Jean Lesage (mq-situer-1, extrait natif du .docx, cropé), carte minière D-Maps
       avec cercles A-D (mq-situer-2, extraite du rendu PDF haute résolution car les cercles sont
       des formes Word superposées au fond de carte natif), drapeau fleurdelisé (mq-relation-2,
       extrait natif, converti en PNG pour le ratio), schéma des institutions AANB 1867
       (mq-continuite-2, extrait natif), pilule contraceptive (mq-situer-4/doc4, extrait natif,
       converti en PNG). 1 tableau recréé via PIL (option B, pattern v1.23.0/v1.24.0) :
       mq-continuite-1/doc1 (« Nombre de tracteurs dans les fermes québécoises, 1931-1961 » :
       2 417 / 5 869 / 31 971 / 70 697). Script : /home/claude/render-tracteurs-table.py.
     • Note Q5 V-A (mq-r1-d1) : l'éditorial source de 1964 nomme « Madame Marie-Claire Casgrain »
       (conflation de Claire Kirkland-Casgrain) ; citation reproduite fidèlement.
     • Validation : cahier élève P7 = 21 pages · guide enseignant P7 = 5 pages. Tous les rendus
       .docx → .pdf inspectés visuellement (timelines, carte, tableaux, category-buckets, chrono,
       rubriques complexes).
   v1.24.0 — INTÉGRATION DES GUIDES PÉDAGOGIQUES RÉCIT 1896-1945 :
     • Intégration de 14 questions « Avec documents » tirées des 6 guides élèves
       (documents.recitus.qc.ca) couvrant la période 1896-1945 : Catholicisme/éducation/luttes
       des femmes (4 questions), Politique intérieure et immigration (3), Politique canadienne
       (1), Vie économique (3), Grande dépression (1), Seconde Guerre mondiale (2).
     • 3 questions sources écartées comme doublons de fond ou format atypique :
       - Polit. can. Q1 (Laurier/Bourassa/Borden sur marine canadienne 1910) ≈ q-na-differences-1
         V-A (Bourassa/Laurier/Tupper sur Boers) : 3 acteurs, même enjeu militaire impérial,
         même rubrique R_DIFFSIM_3PT_ACTEUR_DIFFERENT_POSITION.
       - Polit. can. Q2 (analyse iconographique affiche de propagande PGM) : protocole en
         4 étapes (intention/contextualisation/compréhension/réponse) hors-portée HQC.
       - Grande dép. Q2 (2 évènements baisse immigration) ≈ q-na-continuite-1 : même contenu
         testé (PGM + Crise des années 30), seul le support visuel diffère (graphique vs tableau).
     • 2 nouvelles réglettes créées :
       R_CAUSES_3PT_T6_CONS_GUIDE (Polit. can. Q3 — 6 conséquences à déterminer, 3 pts,
         format soma simple en miroir de RUBRIC_CAUSALITE_3PT),
       R_RELATION_2PT_1FAIT_GUIDE (Grande dép. Q1 — 1 fait à mettre en relation, 2 pts,
         style « guide » v1.22.0 distinct de R_RELATION_1PT_1FAIT P5 V-B).
     • Réglettes réutilisées : R_FAITS_1PT_1SUR1 (Catho Q1), R_SITUER_2PT_T4 (Catho Q2 et 2GM Q2),
       R_CONTINUITES_2PT_GEN (Catho Q3), R_RELATION_2PT_4_PART (Catho Q4),
       R_CAUSES_2PT_GEN_1CAUSE (Polit. intér. Q1), R_CAUSES_2PT_T3_CONS_MULTI (Polit. intér. Q2
       et 2GM Q1), R_DIFFERENCES_2PT_DIVERGENCE (Polit. intér. Q3), RUBRIC_CAUSALITE_3PT
       (Vie éco Q1, Q2 et Q3).
     • Images extraites natives via unzip des .docx (qualité maximale, embedded media) :
       8 images :
       na-situer-3/doc2 (coupure Le Devoir « Depuis hier soir, le suffrage féminin est devenu
         loi dans la province de Québec »),
       na-continuite-5/doc1 (Orphelinat agricole de Notre-Dame de Montfort, 1896),
       na-continuite-5/doc2 (religieuse enseignante avec deux écolières — voir note ci-dessous
         sur la source PDF buggée),
       na-causes-7/doc1 (Manufacture Northern Electric Co. Ltd., munitions, 1916),
       na-causes-7/doc4 (Camp d'internement de Spirit Lake en Abitibi, entre 1915 et 1917),
       na-causalite-3/doc1 (Travailleurs d'une usine Dominion Textile, vers 1895),
       na-causalite-4/doc2 (Convention des unions nationales catholiques à Hull, 1921),
       na-causes-8/doc1 (Cecilia Butler à l'usine de munitions John Inglis, 1943),
       na-situer-4/doc4 (Winston Churchill et W.L. Mackenzie King au Château Frontenac).
     • Image générée nativement via PIL Python (option B, pattern v1.23.0) :
       na-faits-1/doc1 (tableau « Fréquentation scolaire à Québec, 1901, par groupe social »).
       Script de rendu : /home/claude/render-frequentation-table.py (rendu 4x puis downsample
       Lanczos pour qualité d'impression). En-tête col 2 sur 2 lignes (« Taux de fréquentation /
       scolaire ») comme dans le PDF source.
     • Note Catho Q3 (na-continuite-5/doc2) : le PDF source du guide RÉCIT cite pour Doc 7
       la même source que Doc 6 (Orphelinat Notre-Dame de Montfort, 1896) alors que l'image
       embedded effectivement présente est différente (scène de classe avec une religieuse et
       deux écolières, datant probablement de 1930-1950). C'est manifestement un bug de
       copier-coller du fichier RÉCIT. L'image illustre néanmoins parfaitement la continuité
       du rôle de l'Église dans l'éducation entre 1896 et 1950, ce qui est précisément l'objet
       de la question. Source documentée comme « à confirmer » dans le champ sources.
     • Note Catho Q4 : énoncé du guide RÉCIT formulé « Inscrivez les numéros des documents... »
       (vouvoiement) — adapté au tutoiement pour cohérence avec le reste du catalogue HQC.
     • Convention de renumérotation appliquée à chaque section : un document source devient
       Doc 1 dans sa section (refs dans l'énoncé renumérotées : ex. « documents 8 à 11 » du
       Catho Q4 → « documents 1, 2, 3 et 4 »).
   v1.23.0 — INTÉGRATION DES ÉVALUATIONS SOMMATIVES P6 1896-1945 SECTION A :
     • Intégration de 16 questions « Avec documents » tirées des Sections A des deux versions
       (V-A : 8 questions, V-B : 8 questions) couvrant la période 1896-1945 « Les nationalismes
       et l'autonomie du Canada ». Sections B (description avec schéma) et C (texte 150 mots)
       écartées par convention (hors-portée HQC = compétences 1 et 2 longues).
     • 2 nouvelles réglettes pour les libellés des sommatives P6 :
       R_DIFFSIM_3PT_ACTEUR_DIFFERENT_POSITION (Q1 V-A, Q1 V-B — rubrique complexe à 5 lignes :
         4 niveaux pour « nomme correctement l'acteur » + 1 ligne finale « nomme incorrectement »),
       R_SITUER_1PT_FAITS (Q5 V-A — libellé propre « ne situe pas les faits dans le temps »,
         sans la typo « le faits » de R_SITUER_1PT_T1_FAIT héritée du PDF P5 V-B).
     • Réglettes réutilisées : R_CAUSES_2PT_1CAUSE_SOMA (Q2 V-A, Q6 V-B),
       R_CONTINUITES_2PT_GEN_SOMA (Q3 V-A), R_RELATION_2PT_3_PART (Q4 V-A),
       R_CAUSES_2PT_1CONS_GUIDE (Q6 V-A, Q2 V-B — libellé conséquence identique entre
       guides RÉCIT P5 et sommatives P6), RUBRIC_CAUSALITE_3PT (Q7 V-A, Q3 V-B),
       RUBRIC_CHANGEMENTS_3PT_REPERE_TEMPS (Q8 V-A, Q4 V-B),
       R_RELATION_2PT_2_PART (Q5 V-B), R_SITUER_2PT_T4 (Q7 V-B),
       R_CHANGEMENTS_2PT_GEN (Q8 V-B — typo « déterminer » → « détermine » corrigée silencieusement).
     • Images extraites natives via unzip des .docx (qualité maximale, embedded media) :
       5 images :
       na-relation-1/doc1 (affiche Ligue des droits de la femme « Laissez voter maman ! »),
       na-causalite-1/doc1 (coupure Le Devoir « La panique dans toutes les Bourses d'Amérique »),
       na-causalite-1/doc3 (graphique « Taux de chômage Canada/USA 1929-1939 », upscalé x2 Lanczos),
       na-causalite-2/doc2 (carte « L'exploitation des ressources naturelles dans les années 1930 »),
       na-situer-2/doc3 (portrait John Maynard Keynes, upscalé x2.3 Lanczos).
     • Image générée nativement via PIL Python (option B) :
       na-continuite-1/doc1 (tableau d'immigration 1912-1920 et 1939-1946). Le tableau a été
       recréé proprement depuis les données brutes plutôt qu'extrait du PDF source, pour éviter
       les bordures du cadre Word externe qui restaient visibles malgré les croppings successifs.
       Script de rendu : /home/claude/render-immigration-table.py (rendu 4x puis downsample Lanczos
       pour qualité d'impression). Image finale : 1184×664 px, deux sous-tableaux côte à côte
       avec en-têtes gris « Année / Nb d'immigrants » et données 1913-1920 / 1939-1946.
     • Convention « un acteur = un document » appliquée :
       - Doc 9 V-A (3 acteurs sur guerre des Boers : Bourassa, Laurier, Tupper) splitté en 3 docs distincts.
       - Doc 10 V-B (3 acteurs sur conscription PGM : Bourassa, Borden, Gouin) splitté en 3 docs distincts.
     • Convention de renumérotation appliquée : un doc source devient Doc 1 dans sa section
       (refs dans l'énoncé renumérotées : ex. « document 9 » → « document 1 »).
     • Correction silencieuse Q4 V-B : l'énoncé du PDF source dit « À l'aide du document 6 »,
       mais le corrigé attendu (heures de travail, ouvriers spécialisés) correspond clairement
       au Doc 12 V-B (phases d'industrialisation avec heures de travail), PAS au Doc 6 (Caisses
       populaires Desjardins). C'est une erreur du PDF source. Doc 12 utilisé (renuméroté Doc 1)
       et énoncé adapté : « À partir du document 1 ».
     • Pas de doublons : aucune Q P6 ne chevauche les questions P5 existantes (thèmes distincts :
       1840-1896 fédération vs 1896-1945 nationalismes).
   v1.22.0 — INTÉGRATION DES GUIDES PÉDAGOGIQUES RÉCIT 1840-1896 :
     • Intégration de 12 questions « Avec documents » tirées des 6 guides élèves
       (histoire.recitus.qc.ca) couvrant la période 1840-1896 : Population/vie sociale,
       Politique nationale, Fédération canadienne, Église/idéologies, Économie,
       Acte d'Union/gouvernement responsable.
     • 3 questions écartées comme doublons de fond avec les sommatives P5 déjà intégrées :
       - Pol Nat Q2 ≈ Q12 V-B (objectifs Politique nationale Macdonald, énoncé identique)
       - Église Q2 ≈ Q2 V-A (3 documents → 3 idéologies, même structure)
       - Acte d'Union Q1 ≈ Q9 V-B (changement/continuité structure politique sous Acte d'Union,
         même rubrique complexe 3pts avec footnote repère de temps)
     • 3 nouvelles réglettes pour les libellés des guides RÉCIT :
       R_DIFFSIM_2PT_1SIM_1DIFF_GUIDE (Pop Q1, Pop Q3),
       R_CAUSES_2PT_1CONS_GUIDE (Pop Q2 — variante « conséquence + ou ne la détermine pas »),
       R_DIFFERENCES_2PT_1DIFF_PARTIEL_GUIDE (Pol Nat Q1, Féd Q1 — « partiellement une différence »).
     • Réglettes réutilisées : R_CAUSES_2PT_CAUSE_CONS (Féd Q2), RUBRIC_CAUSALITE_3PT (Féd Q3),
       R_DIFFERENCES_2PT_DIVERGENCE_ETABLIT (Église Q1), R_SITUER_2PT_T4 (Éco Q1),
       R_RELATION_2PT_2_PART (Éco Q2), R_CHANGEMENTS_2PT_GEN (Éco Q3),
       R_CAUSES_2PT_FACTEURS_EXPLICATIFS_T2 (Acte U Q2 — guide ne fournit pas de barème,
       on réutilise libellé sommatif équivalent fonctionnel pour « 2 causes 2 sur 2 »).
     • Images extraites natives via pdfimages (300 dpi) : 7 nouvelles images :
       fc-differences-3/doc1 (caricature bourgeoise/domestique, upscalée x2),
       fc-causes-4/doc1 (graphique exportations 1851-1857, upscalée x2) + doc2 (schéma protectionnisme),
       fc-causalite-3/doc1 (carte traités numérotés 1871-1921),
       fc-situer-4/doc2 (caricature « Deux paires par jour ») + doc4 (atelier mécanisé, upscalée x2),
       fc-continuite-4/doc1 (scies circulaires Notman).
     • Convention « un acteur = un document » : Féd Q3 docs 2 et 3 conservés comme deux entrées
       distinctes même s'ils proviennent du même livre (Daschuk 2015), car thèmes distincts
       (épidémies vs intérêts politiques).
     • Convention de renumérotation appliquée : un document source devient Doc 1 dans sa section
       (refs dans l'énoncé renumérotées : ex. « documents 5 et 6 » → « documents 1 et 2 »).
   v1.21.2 — Q13 (V-B Q5, ligne du temps) : refonte du responseSpace `timeline-segments`.
   Au lieu de dates et lettres alternées avec une flèche, on a maintenant 3 encadrés contigus
   avec lettre en grand, période (ex. « 1840–1848 »), et cercle à encercler en-dessous.
   Nouvelle forme acceptée : `periods: [{ letter, range }, ...]`. L'ancienne forme
   `dates`/`letters` reste rétro-compatible (les périodes sont construites automatiquement).
   v1.21.1 — Q13 (V-B Q5, ligne du temps Loi sur les Indiens) : remplacement du
   responseSpace `lines` (textuel dans l'énoncé) par le nouveau type `timeline-segments`
   (rendu graphique en table : dates et lettres alternées avec cercles à encercler,
   flèche → finale). Le source PDF présente une ligne du temps graphique, et le rendu
   textuel ne donnait pas un espace de réponse adéquat. Le nouveau type est défini dans
   app.js (section buildQuestionBody, après `before-after-axis`).
   v1.21.0 — DÉMARRAGE 4e SECONDAIRE :
     • Ajout du champ `annee: 3 | 4` à toutes les réalités sociales et à toutes les questions.
     • Ajout de 4 nouvelles réalités sociales (P5 formation-regime-federal, P6 nationalismes-
       autonomie-canada, P7 modernisation-quebec, P8 choix-societe-quebec-contemporain).
     • Intégration de 16 questions tirées de l'Évaluation sommative officielle (versions A et B,
       section A) « 1840-1896 : La formation du régime fédéral canadien ».
     • Tri app.js : `(a.annee - b.annee) || (a.niveau - b.niveau)`.
     • Filtre UI Période : valeurs encodées `annee-niveau` (ex. "3-1", "4-1"), avec optgroups
       3e/4e secondaire dans index.html.
     • 11 nouvelles réglettes introduites pour les libellés exacts des évaluations sommatives P5 :
       R_SITUER_2PT_T4_SOMA, R_CAUSES_2PT_1CAUSE_SOMA, R_SITUER_1PT_SP_FAIT_SOMA,
       R_DIFFERENCES_2PT_DIVERGENCE_ETABLIT, R_CONTINUITES_2PT_GEN_SOMA, R_RELATION_2PT_4_SOMA,
       RUBRIC_CHANGEMENTS_3PT_REPERE_TEMPS (rubrique complexe à 6 lignes + footnote),
       R_CAUSES_2PT_FACTEUR_EXPLICATIF_CONS, R_SITUER_1PT_T1_FAIT, R_RELATION_1PT_1FAIT,
       R_SIMILITUDES_2PT_CONVERGENCE_ETABLIT.
     • Images sommative version A : 6 fichiers extraits/croppés à 300 dpi (doc 1, 2, 3, 4, 5, 12).
       Doc 9 (curé Labelle), doc 17 (Hôpital Royal Victoria), doc 18 (Pensionnat Bellevue) : images
       extraites du PDF à 300 dpi.
     • Images sommative version B : doc 4 splité en 2 (Acte constitutionnel + Acte d'Union),
       doc 6 (courtepointe), doc 11 (Arthur Buies portrait). Doc 9 v.B (2 acteurs sur la pendaison
       de Riel) splité en 2 documents distincts (convention « un acteur = un document »).
   v1.20.0 — Intégration de 6 questions tirées de l'Évaluation sommative officielle
   version A « Des origines à 1608 » (Cahier de l'élève + Dossier documentaire, section A).
   6/7 questions retenues — SQ3 (différence dans la nomination des chefs iroquoiens vs
   algonquiens) écartée car doublon de fond avec q-experience-autochtones-differences-2.
   1 nouvelle réglette : R_CAUSES_2PT_FACTEURS_EXPLICATIFS_T2 (Q1 soma, libellé
   « facteurs explicatifs » de la rubrique officielle). Pas de nouvelles images :
   les 2 illustrations utilisées (Cartier plantant la croix / chasse à l'orignal) sont
   identiques au pixel près à celles déjà présentes dans la plateforme — md5 vérifié,
   simple copie dans les nouveaux dossiers de section.
   v1.19.1 — Q4 fam (avant/après Grande Paix de Montréal) : ajout du drapeau
   `cantSplitAllDocs: true` (nouveau dans app.js) pour forcer Word à garder
   énoncé + axe + réglette + les 4 documents sur la même page. Image Doc 4 (Officier
   Carignan-Salières) cropée pour réduire la hauteur (336×480 → 336×415, signature
   « (1666) Original par L. Rousselot 1931 » coupée en bas — la mention « (1666) »
   trahissait par ailleurs la réponse Avant/Après).
   v1.19.0 — Intégration de 16 questions de la Familiarisation épreuve 3e secondaire
   (documents.recitus.qc.ca). Q12 fam (territoire après Acte constitutionnel) non intégrée :
   chevauchement avec q-revendications-situer-1. 5 nouvelles réglettes introduites :
   R_CAUSES_2PT_CAUSE_BINAIRE, R_CHANGEMENTS_2PT_1CHG_1CONT, R_CAUSES_2PT_2CONS,
   R_SITUER_2PT_T3_BINAIRE, R_DIFFSIM_3PT_1DIFF_1SIM. 10 nouvelles images extraites du PDF
   source à 300 dpi natif. Convention « un acteur = un document » appliquée au doc 29 fam
   (3 acteurs sur la Rébellion → 3 documents distincts pour Q15).
   v1.18.4 — Q7 P4 (situer Russell) : dates retirées des titres de Doc 1 (« (1834) »),
   Doc 2 (« (1838) ») et Doc 4 (« (novembre 1837) ») qui trahissaient la réponse. Les contenus
   et sources de chaque doc ne révèlent aucune date.
   ============================================================ */

(function () {

// ============ Réglettes-types factorisées ============

// Rubrique complexe causalité (3 points) — libellés identiques au 1er cycle
const RUBRIC_CAUSALITE_3PT = {
  type: "complex",
  opLabel: "Établir des liens de causalité",
  maxPoints: 3,
  rows: [
    { precise: "L'élève précise les trois éléments", condition: "et établit correctement deux liens de causalité.", points: "3 points" },
    { precise: null, condition: "et établit correctement un lien de causalité.", points: "2 points" },
    { precise: null, condition: "mais n'établit correctement aucun lien de causalité.", points: "1 point" },
    { precise: "L'élève précise deux éléments", condition: "et établit correctement un lien de causalité.", points: "2 points" },
    { precise: null, condition: "mais n'établit correctement aucun lien de causalité.", points: "1 point" },
    { precise: "L'élève précise un seul élément ou n'en précise pas.", condition: null, points: "0 point" }
  ]
};

function rubric3(opLabel, c2, c1, c0) {
  return { type: "simple", opLabel, maxPoints: 2,
    levels: [{ points: "2 points", condition: c2 }, { points: "1 point", condition: c1 }, { points: "0 point", condition: c0 }] };
}
function rubric2(opLabel, c1, c0) {
  return { type: "simple", opLabel, maxPoints: 1,
    levels: [{ points: "1 point", condition: c1 }, { points: "0 point", condition: c0 }] };
}

// ============ Constantes de réglettes 2e cycle ============
// IMPORTANT : libellés tirés du cadre d'évaluation officiel et du PDF de référence ESRDL.
// Au moindre écart de libellé d'une nouvelle source, créer une nouvelle constante.

// — Établir des faits —
const R_FAITS_1PT_1SUR1 = rubric2(
  "Établir des faits",
  "L'élève établit le fait (1 sur 1)",
  "L'élève n'établit pas le fait (0 sur 1)"
);

// — Déterminer des causes et des conséquences (1 point, binaire 1/0) —
const R_CAUSES_1PT = rubric2(
  "Déterminer des causes et des conséquences",
  "L'élève détermine correctement la cause. (1 sur 1)",
  "L'élève ne détermine pas correctement la cause. (0 sur 1)"
);

// — Déterminer une conséquence (1 point, binaire 1/0) —
const R_CAUSES_1PT_CONS = rubric2(
  "Déterminer des causes et des conséquences",
  "L'élève détermine correctement la conséquence. (1 sur 1)",
  "L'élève ne détermine pas correctement la conséquence. (0 sur 1)"
);

// — Situer dans le temps et dans l'espace —
const R_SITUER_2PT_T4 = rubric3(
  "Situer dans le temps et dans l'espace",
  "L'élève situe tous les faits dans le temps. (4 sur 4)",
  "L'élève situe certains faits dans le temps. (3 ou 2 sur 4)",
  "L'élève ne situe pas les faits dans le temps. (1 ou 0 sur 4)"
);
const R_SITUER_1PT_T2 = rubric2(
  "Situer dans le temps et dans l'espace",
  "L'élève situe tous les faits dans le temps (2 sur 2)",
  "L'élève ne situe pas les faits dans le temps. (1 ou 0 sur 2)"
);
const R_SITUER_1PT_SP_DOC = rubric2(
  "Situer dans le temps et dans l'espace",
  "L'élève situe correctement le document dans l'espace (1 sur 1)",
  "L'élève ne situe pas le document dans l'espace. (0 sur 1)"
);
// Variante 2 pts pour situer UN seul fait dans l'espace (binaire) — Q4 PDF Questions courtes
// 1760-1791 : identifier la lettre A sur une carte. Source : « L'élève situe le fait dans l'espace. »
const R_SITUER_2PT_SP_FAIT = {
  type: "simple", opLabel: "Situer dans le temps et dans l'espace", maxPoints: 2,
  levels: [
    { points: "2 points", condition: "L'élève situe le fait dans l'espace." },
    { points: "0 point",  condition: "L'élève ne situe pas le fait dans l'espace." }
  ]
};
// Variante binaire 4 documents — Q8 PDF Questions courtes 1760-1791 (4 documents 13-16 à situer
// avant ou après l'Acte de Québec). Réglette source à 2 niveaux uniquement (2 pts ou 0 pt, pas de
// niveau intermédiaire). Note : libellé corrigé silencieusement de « (3 sur 3) » (PDF source) à
// « (4 sur 4) » car l'exercice compte 4 documents et non 3 (probable erreur de copier-coller du
// template par les auteurs du PDF source).
const R_SITUER_2PT_T4_BINAIRE = {
  type: "simple", opLabel: "Situer dans le temps et dans l'espace", maxPoints: 2,
  levels: [
    { points: "2 points", condition: "L'élève situe tous les faits dans le temps. (4 sur 4)" },
    { points: "0 point",  condition: "L'élève ne situe pas tous les faits dans le temps. (3, 2, 1 ou 0 sur 4)" }
  ]
};

// — Mettre en relation des faits —
const R_RELATION_2PT_4_PART = rubric3(
  "Mettre en relation des faits",
  "L'élève met en relation tous les faits. (4 sur 4)",
  "L'élève met partiellement en relation les faits. (1, 2 ou 3 sur 4)",
  "L'élève ne met pas en relation les faits. (0 sur 4)"
);
// Variante 3 sur 3 — Q4 P2 : rôles de l'Église (3 documents à associer).
const R_RELATION_2PT_3_PART = rubric3(
  "Mettre en relation des faits",
  "L'élève met en relation tous les faits. (3 sur 3)",
  "L'élève met en relation certains faits. (1 ou 2 sur 3)",
  "L'élève ne met pas en relation les faits. (0 sur 3)"
);

// — Déterminer des causes et des conséquences —
const R_CAUSES_2PT_CAUSE_CONS = rubric3(
  "Déterminer des causes et des conséquences",
  "L'élève détermine correctement la cause et la conséquence.",
  "L'élève détermine la cause ou la conséquence.",
  "L'élève détermine incorrectement la cause et la conséquence."
);
// Variante « une conséquence seule » — Q3 P2 : effet des guerres iroquoises sur l'économie.
// Note : libellé corrigé silencieusement du pluriel (PDF source) au singulier, pour
// concorder avec l'énoncé qui demande « un effet ».
const R_CAUSES_2PT_CONS_SEULE = rubric3(
  "Déterminer des causes et des conséquences",
  "L'élève détermine correctement la conséquence.",
  "L'élève détermine plus ou moins correctement la conséquence.",
  "L'élève détermine incorrectement la conséquence."
);
// Variante « trois conséquences à classer » — Q1 P3-R1 (causes-2) : 3 conséquences du changement de régime.
// Réglette inventée (source RÉCIT P3 ne fournit pas de barème) en miroir du style « 3 sur 3 ».
const R_CAUSES_2PT_T3_CONS_MULTI = rubric3(
  "Déterminer des causes et des conséquences",
  "L'élève détermine les trois conséquences. (3 sur 3)",
  "L'élève détermine certaines conséquences. (1 ou 2 sur 3)",
  "L'élève ne détermine pas les conséquences. (0 sur 3)"
);

// — Dégager des différences et des similitudes —
// Variante "point de convergence des acteurs" (Q6 du PDF de test).
// Note : faute de frappe « où » → « ou » corrigée silencieusement par rapport au PDF source.
const R_SIMILITUDES_2PT_CONVERGENCE = rubric3(
  "Dégager des différences et des similitudes",
  "L'élève présente correctement le point de convergence des acteurs.",
  "L'élève présente plus ou moins correctement le point de convergence des acteurs.",
  "L'élève présente incorrectement le point de convergence ou ne le présente pas."
);
// Variante "point de divergence entre les points de vue" — Q5 PDF Questions courtes 1760-1791
// (désaccord Carleton vs marchands de Québec sur l'Assemblée législative). Libellé textuel de
// la réglette source, distinct de R_DIFFERENCES_2PT_GEN qui dit simplement « la différence ».
const R_DIFFERENCES_2PT_DIVERGENCE = rubric3(
  "Dégager des différences et des similitudes",
  "L'élève dégage correctement le point de divergence entre les points de vue.",
  "L'élève dégage plus ou moins correctement le point de divergence entre les points de vue ou ne présente que les deux points de vue.",
  "L'élève dégage incorrectement le point de divergence entre les points de vue ou ne le dégage pas."
);

// Dégager une différence (2 points) — Q-A : Français vs Innus à Uepishtikuiau.
const R_DIFFERENCES_2PT_GEN = rubric3(
  "Dégager des différences et des similitudes",
  "L'élève dégage correctement la différence.",
  "L'élève dégage plus ou moins correctement la différence.",
  "L'élève dégage incorrectement la différence ou ne la dégage pas."
);
// Dégager une similitude (2 points) — Q6 P2 : censitaire vs seigneur.
// Note : réglette absente de la mise en page du PDF source ; on calque en miroir
// la R_DIFFERENCES_2PT_GEN ci-dessus, sur le même libellé d'opération.
const R_SIMILITUDES_2PT_GEN = rubric3(
  "Dégager des différences et des similitudes",
  "L'élève dégage correctement la similitude.",
  "L'élève dégage plus ou moins correctement la similitude.",
  "L'élève dégage incorrectement la similitude ou ne la dégage pas."
);
// Dégager 1 similitude ET 1 différence (2 points) — Q2 P3-R1 (differences-2) :
// structures politiques Gouvernement royal vs Proclamation royale.
// Réglette inventée (RÉCIT P3 ne fournit pas de barème) — chaque élément vaut 1 point.
const R_DIFFSIM_2PT_1SIM_1DIFF = rubric3(
  "Dégager des différences et des similitudes",
  "L'élève dégage correctement la similitude et la différence.",
  "L'élève dégage correctement la similitude ou la différence.",
  "L'élève ne dégage correctement ni la similitude ni la différence."
);

// Dégager une différence ET une similitude (4 points) — Q-B : prise de décisions algonquiennes vs iroquoiennes.
const R_DIFFSIM_4PT = { type: "simple", opLabel: "Dégager des différences et des similitudes", maxPoints: 4,
  levels: [
    { points: "4 points", condition: "L'élève dégage correctement la différence et la similitude." },
    { points: "2 points", condition: "L'élève dégage plus ou moins correctement la différence et la similitude, ou ne dégage correctement que l'une des deux." },
    { points: "0 point", condition: "L'élève ne dégage ni la différence ni la similitude." }
  ]};

// — Situer dans le temps et dans l'espace —
// Situer dans le temps, 3 faits — Q-C : peuplement Amérique chronologique.
const R_SITUER_2PT_T3 = rubric3(
  "Situer dans le temps et dans l'espace",
  "L'élève situe tous les faits dans le temps. (3 sur 3)",
  "L'élève situe certains faits dans le temps. (1 ou 2 sur 3)",
  "L'élève ne situe pas les faits dans le temps. (0 sur 3)"
);

// — Déterminer des causes et des conséquences —
// Deux causes à déterminer (4 points) — Q-D : causes du premier voyage de Cartier.
const R_CAUSES_4PT_2CAUSES = { type: "simple", opLabel: "Déterminer des causes et des conséquences", maxPoints: 4,
  levels: [
    { points: "4 points", condition: "L'élève détermine correctement les deux causes." },
    { points: "2 points", condition: "L'élève détermine correctement une seule des deux causes, ou les détermine plus ou moins correctement." },
    { points: "0 point", condition: "L'élève détermine incorrectement les causes ou ne les détermine pas." }
  ]};

// Une seule cause à déterminer (2 points) — Q-I : échec des tentatives d'établissement français 1534-1603.
const R_CAUSES_2PT_GEN_1CAUSE = rubric3(
  "Déterminer des causes et des conséquences",
  "L'élève détermine correctement la cause.",
  "L'élève détermine plus ou moins correctement la cause.",
  "L'élève détermine incorrectement la cause."
);

// — Déterminer des changements et des continuités —
// Un changement à déterminer (2 points) — Q-H : transformation des réseaux d'échange après l'arrivée des Européens.
const R_CHANGEMENTS_2PT_GEN = rubric3(
  "Déterminer des changements et des continuités",
  "L'élève détermine correctement le changement.",
  "L'élève détermine plus ou moins correctement le changement.",
  "L'élève détermine incorrectement le changement ou ne le détermine pas."
);

// — Deux changements à déterminer (2 points, 2 sur 2 / 1 sur 2 / 0) —
const R_CHANGEMENTS_2PT_2 = rubric3(
  "Déterminer des changements et des continuités",
  "L'élève détermine correctement tous les changements. (2 sur 2)",
  "L'élève détermine partiellement les changements. (1 sur 2)",
  "L'élève détermine incorrectement les changements. (0 sur 2)"
);
// Une continuité à déterminer (2 points) — Q2 P2 : continuité économique en Nouvelle-France.
const R_CONTINUITES_2PT_GEN = rubric3(
  "Déterminer des changements et des continuités",
  "L'élève détermine correctement la continuité.",
  "L'élève détermine plus ou moins correctement la continuité.",
  "L'élève détermine incorrectement la continuité ou ne la détermine pas."
);

// — Mettre en relation des faits —
// Mettre en relation 2 faits dans 2 catégories — Q-J : partage des tâches Algonquiens vs Iroquoiens.
const R_RELATION_2PT_2_PART = rubric3(
  "Mettre en relation des faits",
  "L'élève met en relation tous les faits. (2 sur 2)",
  "L'élève met en relation certains faits. (1 sur 2)",
  "L'élève ne met pas en relation les faits. (0 sur 2)"
);

// — Dégager des différences et des similitudes (réglette complexe à 4 niveaux) —
// Nommer le peuple différent ET comparer les modes de vie (3 points) — Q-G : mode de vie de 3 peuples.
const R_DIFFSIM_3PT_PEUPLE_DIFFERENT = { type: "simple", opLabel: "Dégager des différences et des similitudes", maxPoints: 3,
  levels: [
    { points: "3 points", condition: "L'élève nomme correctement le peuple qui possède un mode de vie différent et présente correctement les deux modes de vie." },
    { points: "2 points", condition: "L'élève nomme correctement le peuple et présente correctement un mode de vie et plus ou moins correctement l'autre." },
    { points: "1 point", condition: "L'élève nomme correctement le peuple, et présente plus ou moins correctement les deux modes de vie, ou présente correctement un mode et incorrectement l'autre." },
    { points: "0 point", condition: "L'élève présente tout au plus un seul mode de vie plus ou moins correctement, ou nomme incorrectement le peuple." }
  ]};

// ============ Réglettes ajoutées v1.19.0 (Familiarisation épreuve 3e sec.) ============

// Déterminer 1 cause (2 points, binaire) — Q2 P1 fam : cause de la rivalité entre nations autochtones.
// Source : rubric binaire 2pt/0pt sans niveau intermédiaire. On garde fidèlement le format.
// v1.29.0 (passe de cohérence) — CORRECTIF : la définition utilisait rubric2(), qui plafonne à
// maxPoints:1 (« 1 point / 0 point »), ce qui contredisait le nom de la constante, le label
// « Réglette (2 points) » de la question et la source documentée ci-dessus. Restauré en barème
// binaire 2 pts/0 pt explicite, sur le modèle de R_SITUER_2PT_T3_BINAIRE.
const R_CAUSES_2PT_CAUSE_BINAIRE = {
  type: "simple", opLabel: "Déterminer des causes et des conséquences", maxPoints: 2,
  levels: [
    { points: "2 points", condition: "L'élève détermine correctement la cause." },
    { points: "0 point",  condition: "L'élève détermine incorrectement la cause ou ne la dégage pas." }
  ]
};

// Déterminer 1 changement ET 1 continuité (2 points, 2 sur 2) — Q6 P2 fam : politique coloniale après 1663.
const R_CHANGEMENTS_2PT_1CHG_1CONT = rubric3(
  "Déterminer des changements et des continuités",
  "L'élève détermine un élément de continuité et un élément de changement. (2 sur 2)",
  "L'élève détermine un élément de continuité ou un élément de changement. (1 sur 2)",
  "L'élève ne détermine aucun élément de continuité et de changement. (0 sur 2)"
);

// Déterminer 2 conséquences (2 points, 2 sur 2) — Q10 P3 fam : conséquences de l'Acte de Québec.
const R_CAUSES_2PT_2CONS = rubric3(
  "Déterminer des causes et des conséquences",
  "L'élève détermine correctement toutes les conséquences. (2 sur 2)",
  "L'élève détermine partiellement les conséquences. (1 sur 2)",
  "L'élève détermine incorrectement les conséquences. (0 sur 2)"
);

// — Deux causes à déterminer (2 points, 2 sur 2 / 1 sur 2 / 0) —
const R_CAUSES_2PT_2CAUSES = rubric3(
  "Déterminer des causes et des conséquences",
  "L'élève détermine correctement toutes les causes. (2 sur 2)",
  "L'élève détermine partiellement les causes. (1 sur 2)",
  "L'élève détermine incorrectement les causes. (0 sur 2)"
);

// Situer chrono 3 éléments (2 points, binaire 3/3) — Q13 P4 fam : développement éco du Bas-Canada.
// Source : rubric binaire 2pt/0pt avec exigence 3 sur 3.
const R_SITUER_2PT_T3_BINAIRE = {
  type: "simple", opLabel: "Situer dans le temps et dans l'espace", maxPoints: 2,
  levels: [
    { points: "2 points", condition: "L'élève situe les faits dans le temps. (3 sur 3)" },
    { points: "0 point",  condition: "L'élève ne situe pas les faits dans le temps. (2, 1 ou 0 sur 3)" }
  ]
};

// Dégager 1 différence ET 1 similitude (3 points, 4 niveaux) — Q15 P4 fam : 3 acteurs et la Rébellion.
const R_DIFFSIM_3PT_1DIFF_1SIM = {
  type: "simple", opLabel: "Dégager des différences et des similitudes", maxPoints: 3,
  levels: [
    { points: "3 points", condition: "L'élève dégage correctement la différence et la similitude." },
    { points: "2 points", condition: "L'élève dégage plus ou moins correctement la différence et la similitude." },
    { points: "1 point",  condition: "L'élève dégage correctement la différence ou la similitude." },
    { points: "0 point",  condition: "L'élève dégage incorrectement la différence et la similitude ou ne les dégage pas." }
  ]
};

// ============ Réglettes ajoutées v1.20.0 (Évaluation sommative version A — P1) ============

// Déterminer 2 causes (2 points, formulation « facteurs explicatifs ») — Q1 soma P1 :
// alliance franco-amérindienne. Libellé source de l'évaluation sommative officielle, distinct
// de R_CAUSES_4PT_2CAUSES (qui vaut 4 pts) et de R_CAUSES_2PT_2CONS (qui parle de conséquences).
const R_CAUSES_2PT_FACTEURS_EXPLICATIFS_T2 = rubric3(
  "Déterminer des causes et des conséquences",
  "L'élève détermine correctement les facteurs explicatifs. (2 sur 2)",
  "L'élève détermine partiellement les facteurs explicatifs. (1 sur 2)",
  "L'élève détermine incorrectement les facteurs explicatifs. (0 sur 2)"
);

// ============ Réglettes ajoutées v1.21.0 (Évaluations sommatives versions A et B — P5) ============

// Situer dans le temps, 4 docs avant/après — Q1 soma V-A P5 (fédération canadienne).
// Libellé soma : « (2 ou 3) » et « ou en situe un seul. (0 ou 1) » — distinct de
// R_SITUER_2PT_T4 (« (3 ou 2 sur 4) » et « (1 ou 0 sur 4) »).
const R_SITUER_2PT_T4_SOMA = rubric3(
  "Situer dans le temps et dans l'espace",
  "L'élève situe tous les faits dans le temps. (4 sur 4)",
  "L'élève situe certains faits dans le temps. (2 ou 3)",
  "L'élève ne situe pas les faits dans le temps ou en situe un seul. (0 ou 1)"
);

// Déterminer 1 cause (2 points) — Q4 soma V-A P5 (objectif missions catholiques).
// Libellé soma ajoute « ou ne la détermine pas » au niveau 0pt — distinct de
// R_CAUSES_2PT_GEN_1CAUSE qui n'a pas cet ajout.
const R_CAUSES_2PT_1CAUSE_SOMA = rubric3(
  "Déterminer des causes et des conséquences",
  "L'élève détermine correctement la cause.",
  "L'élève détermine plus ou moins correctement la cause.",
  "L'élève détermine incorrectement la cause ou ne la détermine pas."
);

// Situer dans l'espace, 1 fait (1 point) — Q5 soma V-A P5 (lettre exploitation forestière).
// Libellé soma « le fait dans l'espace » — distinct de R_SITUER_1PT_SP_DOC qui dit
// « le document dans l'espace (1 sur 1) » et de R_SITUER_2PT_SP_FAIT (2 pts au lieu de 1).
const R_SITUER_1PT_SP_FAIT_SOMA = rubric2(
  "Situer dans le temps et dans l'espace",
  "L'élève situe le fait dans l'espace.",
  "L'élève ne situe pas le fait dans l'espace."
);

// Différences (divergence, 2 points) — Q6 soma V-A P5 (deux acteurs sur l'éducation).
// Libellé soma utilise « établit » (et non « dégage ») — distinct de R_DIFFERENCES_2PT_DIVERGENCE
// et de R_SIMILITUDES_2PT_CONVERGENCE.
const R_DIFFERENCES_2PT_DIVERGENCE_ETABLIT = rubric3(
  "Dégager des différences et des similitudes",
  "L'élève établit correctement le point de divergence entre les points de vue.",
  "L'élève établit plus ou moins correctement le point de divergence entre les points de vue.",
  "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."
);

// Continuité (2 points) — Q7 soma V-A P5 (revendications Métis) + Q7 soma V-B P5 (Code civil 1866).
// Libellé soma « ou ne le détermine pas » (le = élément de continuité) — distinct de
// R_CONTINUITES_2PT_GEN qui dit « ou ne la détermine pas » (la = continuité).
const R_CONTINUITES_2PT_GEN_SOMA = rubric3(
  "Déterminer des changements et des continuités",
  "L'élève détermine correctement la continuité.",
  "L'élève détermine plus ou moins correctement la continuité.",
  "L'élève détermine incorrectement la continuité ou ne le détermine pas."
);

// Mettre en relation, 4 docs (2 points) — Q8 soma V-A P5 (orgs féminines vs communautés religieuses).
// Libellé soma : « certains faits. (2 sur 4) » et « (1 ou 0 sur 4) » — distinct de
// R_RELATION_2PT_4_PART (« partiellement » et « (1, 2 ou 3 sur 4) »).
const R_RELATION_2PT_4_SOMA = rubric3(
  "Mettre en relation des faits",
  "L'élève met en relation tous les faits. (4 sur 4)",
  "L'élève met en relation certains faits. (2 sur 4)",
  "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"
);

// Changements/continuités complexe (3 points, 6 lignes) — Q1 soma V-B P5 (Acte d'Union).
// Rubrique à matrice : 2 branches (élève indique/n'indique pas) × 3 niveaux de faits + footnote
// sur le repère de temps. Format inspiré de RUBRIC_CAUSALITE_3PT (type: complex / rows).
// Note : le PDF source affiche « 3 points (ou 2 points*) » avec un astérisque, indiquant que
// l'absence d'un repère de temps exact entraîne -1 pt. On encode l'aspect principal de la rubrique;
// le footnote du repère de temps est rendu via le champ `footnote`.
const RUBRIC_CHANGEMENTS_3PT_REPERE_TEMPS = {
  type: "complex",
  opLabel: "Déterminer des changements et des continuités",
  maxPoints: 3,
  rows: [
    { precise: "L'élève indique s'il y a changement ou continuité", condition: "et présente des faits qui le montrent correctement.", points: "3 points" },
    { precise: null, condition: "et présente des faits qui le montrent plus ou moins correctement.", points: "2 points" },
    { precise: null, condition: "et présente des faits qui le montrent incorrectement ou n'en présente pas.", points: "1 point" },
    { precise: "L'élève n'indique pas s'il y a changement ou continuité", condition: "mais présente des faits exacts.", points: "2 points" },
    { precise: null, condition: "mais présente des faits plus ou moins exacts.", points: "1 point" },
    { precise: null, condition: "et présente des faits inexacts ou n'en présente pas.", points: "0 point" }
  ],
  footnote: "* L'élève présente un repère de temps plus ou moins exact ou inexact ou n'en présente pas."
};

// Cause + conséquence (2 points, formulation « facteur explicatif ») — Q3 soma V-B P5
// (urbanisation : cause + conséquence économique). Libellé soma utilise « facteur explicatif »
// au lieu de « cause » — distinct de R_CAUSES_2PT_CAUSE_CONS.
const R_CAUSES_2PT_FACTEUR_EXPLICATIF_CONS = rubric3(
  "Déterminer des causes et des conséquences",
  "L'élève détermine le facteur explicatif et la conséquence. (2 sur 2)",
  "L'élève détermine le facteur explicatif ou la conséquence. (1 sur 2)",
  "L'élève ne détermine pas le facteur explicatif ni la conséquence. (0 sur 2)"
);

// Situer dans le temps, 1 fait (1 point) — Q5 soma V-B P5 (Loi sur les Indiens sur ligne du temps).
// Libellé soma : « L'élève situe les faits dans le temps » (1 pt) — distinct de R_SITUER_1PT_T2
// (qui exige « tous les faits (2 sur 2) »). Note typographique : « le faits » dans la rubrique source
// est un singulier collectif / probable typo, on copie textuellement.
const R_SITUER_1PT_T1_FAIT = rubric2(
  "Situer dans le temps et dans l'espace",
  "L'élève situe les faits dans le temps.",
  "L'élève ne situe pas le faits dans le temps."
);

// Mettre en relation, 1 fait (1 point) — Q6 soma V-B P5 (idéologie doc 11, anticléricalisme).
// Libellé soma : « L'élève met en relation le fait » — réglette à 1 point unique (pas 2).
const R_RELATION_1PT_1FAIT = rubric2(
  "Mettre en relation des faits",
  "L'élève met en relation le fait",
  "L'élève ne met pas en relation le fait"
);

// Similitudes (convergence, 2 points, formulation « établit » + « entre les points de vue ») —
// Q8 soma V-B P5 (pendaison de Riel). Libellé soma utilise « établit » et « entre les points de vue »
// — distinct de R_SIMILITUDES_2PT_CONVERGENCE qui dit « présente » et « des acteurs ».
const R_SIMILITUDES_2PT_CONVERGENCE_ETABLIT = rubric3(
  "Dégager des différences et des similitudes",
  "L'élève établit correctement le point de convergence entre les points de vue.",
  "L'élève établit plus ou moins correctement le point de convergence entre les points de vue.",
  "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."
);

// ============ Réglettes ajoutées v1.22.0 (Guides pédagogiques RÉCIT 1840-1896) ============

// Différences/similitudes (1 sim + 1 diff, 2 points) — Pop&Vie Q1, Pop&Vie Q3 du guide RÉCIT.
// Libellé sans « correctement », formulation « aucune » au 0pt — distinct de
// R_DIFFSIM_2PT_1SIM_1DIFF (qui dit « correctement la similitude et la différence »).
const R_DIFFSIM_2PT_1SIM_1DIFF_GUIDE = rubric3(
  "Dégager des différences et des similitudes",
  "L'élève dégage une similitude et une différence.",
  "L'élève dégage une similitude ou une différence.",
  "L'élève ne dégage aucune similitude ou différence."
);

// Une conséquence (2 points) — Pop&Vie Q2 du guide RÉCIT (Code civil).
// Libellé identique à R_CAUSES_2PT_1CAUSE_SOMA (« correctement / plus ou moins / incorrectement
// ou ne la détermine pas ») mais pour « conséquence » au lieu de « cause » — distinct également
// de R_CAUSES_2PT_CONS_SEULE (qui n'a pas « ou ne la détermine pas » au 0pt).
const R_CAUSES_2PT_1CONS_GUIDE = rubric3(
  "Déterminer des causes et des conséquences",
  "L'élève détermine correctement la conséquence.",
  "L'élève détermine plus ou moins correctement la conséquence.",
  "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
);

// Une différence (2 points, formulation « partiellement ») — Pol Nat Q1, Féd Q1 du guide RÉCIT.
// Libellé « partiellement une différence » et « ne dégage pas la différence » — distinct de
// R_DIFFERENCES_2PT_GEN (« plus ou moins correctement ») et R_DIFFERENCES_2PT_DIVERGENCE
// (« point de divergence entre les points de vue »).
const R_DIFFERENCES_2PT_1DIFF_PARTIEL_GUIDE = rubric3(
  "Dégager des différences et des similitudes",
  "L'élève dégage correctement une différence.",
  "L'élève dégage partiellement une différence.",
  "L'élève ne dégage pas la différence."
);

// ============ Réglettes ajoutées v1.23.0 (Évaluations sommatives P6 1896-1945 Section A) ============

// Différences/similitudes complexe (3 points, 5 lignes) — Q1 V-A et Q1 V-B P6 (3 acteurs).
// Rubrique à matrice : 4 niveaux pour la branche « nomme correctement l'acteur qui présente
// une position différente » (3-2-1-0 points) + 1 ligne finale « nomme incorrectement l'acteur
// ou ne le nomme pas » (0 point). Format complex (rows) inspiré de RUBRIC_CAUSALITE_3PT.
// Distincte de R_DIFFSIM_3PT_PEUPLE_DIFFERENT (libellé « peuple / mode de vie » + simplifiée
// à 4 niveaux en fusionnant la 5e ligne dans le 0pt) et de R_DIFFSIM_3PT_1DIFF_1SIM (fam P4,
// libellé « la différence et la similitude »).
const R_DIFFSIM_3PT_ACTEUR_DIFFERENT_POSITION = {
  type: "complex",
  opLabel: "Dégager des différences et des similitudes",
  maxPoints: 3,
  rows: [
    { precise: "L'élève nomme correctement l'acteur qui présente une position différente", condition: "et présente correctement les deux positions.", points: "3 points" },
    { precise: null, condition: "et présente correctement une position et plus ou moins correctement l'autre position.", points: "2 points" },
    { precise: null, condition: "et présente plus ou moins correctement les deux positions. ou et présente correctement une position et présente incorrectement l'autre position ou ne la présente pas.", points: "1 point" },
    { precise: null, condition: "et présente tout au plus une seule position plus ou moins correctement.", points: "0 point" },
    { precise: "L'élève nomme incorrectement l'acteur qui présente une position différente ou ne la nomme pas.", condition: null, points: "0 point" }
  ]
};

// Situer dans le temps, 1 fait (1 point) — Q5 V-A P6 (lettre sur ligne du temps pour la radio).
// Libellé soma : « L'élève situe les faits dans le temps » et « L'élève ne situe pas les faits
// dans le temps » — distinct de R_SITUER_1PT_T1_FAIT (P5 V-B) qui hérite d'une typo « le faits »
// dans la négation. Ici le libellé V-A P6 est propre (« les faits » au pluriel correct).
const R_SITUER_1PT_FAITS = rubric2(
  "Situer dans le temps et dans l'espace",
  "L'élève situe les faits dans le temps.",
  "L'élève ne situe pas les faits dans le temps."
);

// ============ Réglettes ajoutées v1.24.0 (Guides pédagogiques RÉCIT 1896-1945) ============

// Six conséquences à déterminer (3 points) — Polit. can. Q3 du guide RÉCIT.
// Question à 6 documents (Docs 5-10 source) où l'élève doit nommer une conséquence pour
// chacun. Le guide ne fournit pas de barème ; on calque le format à 3 points en miroir
// de RUBRIC_CAUSALITE_3PT mais en mode simple (pas de matrice). Distinct de
// R_CAUSES_2PT_T3_CONS_MULTI (3 conséquences à 2 pts).
const R_CAUSES_3PT_T6_CONS_GUIDE = {
  type: "simple", opLabel: "Déterminer des causes et des conséquences", maxPoints: 3,
  levels: [
    { points: "3 points", condition: "L'élève détermine toutes les conséquences. (6 sur 6)" },
    { points: "2 points", condition: "L'élève détermine la majorité des conséquences. (4 ou 5 sur 6)" },
    { points: "1 point",  condition: "L'élève détermine certaines conséquences. (2 ou 3 sur 6)" },
    { points: "0 point",  condition: "L'élève ne détermine pas les conséquences. (0 ou 1 sur 6)" }
  ]
};

// Mettre en relation 1 fait (2 points) — Grande dép. Q1 du guide RÉCIT (Loi assurance-chômage
// inspirée du keynésianisme). Libellé en miroir du style « guide » introduit en v1.22.0 :
// « plus ou moins correctement / ne met pas en relation ». Distinct de R_RELATION_1PT_1FAIT
// (P5 V-B, 1 pt) et de R_RELATION_2PT_2_PART (2 faits).
const R_RELATION_2PT_1FAIT_GUIDE = rubric3(
  "Mettre en relation des faits",
  "L'élève met correctement en relation le fait.",
  "L'élève met plus ou moins correctement en relation le fait.",
  "L'élève ne met pas en relation le fait."
);

// ============ Réglettes ajoutées v1.25.0 (Évaluations sommatives P7 1945-1980 Section A) ============

// Une conséquence (2 points) — Q3 V-A P7 (conséquence des revendications autochtones / Baie-James).
// Libellé soma : le 1pt dit « plus ou moins correctement LES conséquences » (pluriel) — distinct
// de R_CAUSES_2PT_1CONS_GUIDE (singulier « la conséquence » au 1pt). Reproduction fidèle du PDF.
const R_CAUSES_2PT_1CONS_SOMA = rubric3(
  "Déterminer des causes et des conséquences",
  "L'élève détermine correctement la conséquence.",
  "L'élève détermine plus ou moins correctement les conséquences.",
  "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
);

// Mettre en relation, 2 faits (2 points) — Q5 V-A P7 (gains des femmes) + Q2 V-B P7 (autonomie Duplessis).
// Libellé soma « (2 sur 2) / (1 sur 2) / (0 sur 2) » — distinct de R_RELATION_2PT_4_SOMA (« (4 sur 4) »)
// et des R_RELATION_2PT_*_PART (formulation « partiellement »).
const R_RELATION_2PT_2SUR2 = rubric3(
  "Mettre en relation des faits",
  "L'élève met en relation tous les faits (2 sur 2)",
  "L'élève met en relation certains faits (1 sur 2)",
  "L'élève ne met pas en relation les faits (0 sur 2)"
);

// Situer dans l'espace, 2 faits (2 points) — Q6 V-A P7 (2 régions minières sur carte à lettres).
// Distinct de R_SITUER_1PT_SP_FAIT_SOMA (1 fait, 1 pt) et de R_SITUER_2PT_SP_FAIT (1 fait, 2 pts).
const R_SITUER_2PT_SP_2FAITS = rubric3(
  "Situer dans le temps et dans l'espace",
  "L'élève situe les deux faits dans l'espace. (2 sur 2)",
  "L'élève situe l'un des faits dans l'espace. (1 sur 2)",
  "L'élève ne situe pas les faits dans l'espace. (0 sur 2)"
);

// Dégager une différence (1 point, binaire) — Q7 V-A P7 (moyens PQ vs FLQ pour la souveraineté).
// Le PDF intitule l'opération « Dégager des similitudes et des différences » (ordre inversé) ;
// on conserve le libellé canonique pour l'opLabel et le champ operation.
const R_DIFFERENCES_1PT = rubric2(
  "Dégager des différences et des similitudes",
  "L'élève dégage correctement la différence.",
  "L'élève dégage incorrectement la différence ou ne la dégage pas."
);

// Cause + conséquence, format décompté (2 points) — Q7 V-B P7 (cause/conséquence de la création
// du ministère des Affaires culturelles). Libellé soma avec « (2 sur 2) / (1 sur 2) / (0 sur 2) » —
// distinct de R_CAUSES_2PT_CAUSE_CONS (« correctement la cause et la conséquence », sans décompte)
// et de R_CAUSES_2PT_FACTEUR_EXPLICATIF_CONS (« facteur explicatif »).
const R_CAUSES_2PT_CAUSE_CONS_2SUR2 = rubric3(
  "Déterminer des causes et des conséquences",
  "L'élève détermine la cause et la conséquence (2 sur 2)",
  "L'élève détermine la cause ou la conséquence (1 sur 2)",
  "L'élève ne détermine pas la cause ni la conséquence (0 sur 2)"
);

// Situer dans le temps, binaire 3 faits (2 points) — Q8 V-B P7 (ordre chrono des gains des femmes,
// 1 doc pré-rempli + 3 à placer). Variante binaire (2 pts / 0 pt). Le libellé dit « situe TOUS les
// faits (3 sur 3) » — distinct de R_SITUER_2PT_T3_BINAIRE (« situe les faits », sans « tous »).
const R_SITUER_2PT_T3_BINAIRE_SOMA = {
  type: "simple", opLabel: "Situer dans le temps et dans l'espace", maxPoints: 2,
  levels: [
    { points: "2 points", condition: "L'élève situe tous les faits dans le temps. (3 sur 3)" },
    { points: "0 point",  condition: "L'élève ne situe pas les faits dans le temps. (2, 1 ou 0 sur 3)" }
  ]
};

// Situer 3 faits (2 points), 3 niveaux — Q1 V-A P8 (statut politique 1980-1995). Niveau partiel
// « certains faits (1 ou 2) » distinct de la variante binaire R_SITUER_2PT_T3_BINAIRE_SOMA.
const R_SITUER_2PT_T3_SOMA = rubric3(
  "Situer dans le temps et dans l'espace",
  "L'élève situe tous les faits dans le temps. (3 sur 3)",
  "L'élève situe certains faits dans le temps. (1 ou 2)",
  "L'élève ne situe pas les faits dans le temps. (0)"
);

// Changements/continuités complexe (3 points) avec sous-points en ligne — Q4 V-B P7 (institutions
// démocratiques). Même matrice que RUBRIC_CHANGEMENTS_3PT_REPERE_TEMPS (V-A) mais le PDF V-B affiche
// les sous-points directement dans les cellules (« (2 points) », « (1 point) »...) au lieu du format
// « 3 points (ou 2 points*) ». On reproduit le libellé V-B avec les points inline.
const RUBRIC_CHANGEMENTS_3PT_REPERE_INLINE = {
  type: "complex",
  opLabel: "Déterminer des changements et des continuités",
  maxPoints: 3,
  rows: [
    { precise: "L'élève indique s'il y a changement ou continuité (1 point)", condition: "et présente des faits qui le montrent correctement. (2 points)", points: "3 points" },
    { precise: null, condition: "et présente des faits qui le montrent plus ou moins correctement. (1 point)", points: "2 points" },
    { precise: null, condition: "et présente des faits qui le montrent incorrectement ou n'en présente pas. (0 point)", points: "1 point" },
    { precise: "L'élève n'indique pas s'il y a changement ou continuité (0 point)", condition: "mais présente des faits exacts. (2 points)", points: "2 points" },
    { precise: null, condition: "mais présente des faits plus ou moins exacts. (1 point)", points: "1 point" },
    { precise: null, condition: "et présente des faits inexacts ou n'en présente pas. (0 point)", points: "0 point" }
  ],
  footnote: "* L'élève présente un repère de temps plus ou moins exact ou inexact ou n'en présente pas."
};

// ============ Réglettes ajoutées v1.26.0 (Guides pédagogiques RÉCIT P7 1945-1980) ============

// Établir des faits, 3 faits (3 points) — Q1 néonationalisme (politiciens / objectif / moyen).
// Les guides RÉCIT ne fournissent pas de barème ; on calque la matrice à 3 niveaux des réglettes
// « situer » (ex. R_SITUER_2PT_T3) sur le libellé « Établir des faits ». Distinct de
// R_FAITS_1PT_1SUR1 (1 seul fait, binaire).
const R_FAITS_3PT_3SUR3 = {
  type: "simple", opLabel: "Établir des faits", maxPoints: 3,
  levels: [
    { points: "3 points", condition: "L'élève établit tous les faits. (3 sur 3)" },
    { points: "1 ou 2 points", condition: "L'élève établit certains faits. (1 ou 2 sur 3)" },
    { points: "0 point", condition: "L'élève n'établit pas les faits. (0 sur 3)" }
  ]
};

// Situer dans l'espace, 6 faits (3 points) — Q1 période duplessiste (placer 6 documents sur une
// carte des ressources naturelles, lettres A-F). Guide RÉCIT sans barème : matrice proportionnelle
// calquée sur les réglettes « situer » multi-faits.
const R_SITUER_3PT_SP_6SUR6 = {
  type: "simple", opLabel: "Situer dans le temps et dans l'espace", maxPoints: 3,
  levels: [
    { points: "3 points", condition: "L'élève situe tous les faits dans l'espace. (6 sur 6)" },
    { points: "1 ou 2 points", condition: "L'élève situe certains faits dans l'espace. (2 à 5 sur 6)" },
    { points: "0 point", condition: "L'élève ne situe pas les faits dans l'espace. (0 ou 1 sur 6)" }
  ]
};

// Deux causes ET deux conséquences (4 points) — Q3 période duplessiste (grève de l'amiante).
// Guide RÉCIT sans barème : matrice proportionnelle (4 sur 4). Distinct de R_CAUSES_4PT_2CAUSES
// (2 causes seulement).
const R_CAUSES_4PT_2CAUSES_2CONS = {
  type: "simple", opLabel: "Déterminer des causes et des conséquences", maxPoints: 4,
  levels: [
    { points: "4 points", condition: "L'élève détermine correctement les deux causes et les deux conséquences. (4 sur 4)" },
    { points: "2 ou 3 points", condition: "L'élève détermine correctement certaines causes ou conséquences. (2 ou 3 sur 4)" },
    { points: "0 ou 1 point", condition: "L'élève ne détermine pas ou peu les causes et les conséquences. (0 ou 1 sur 4)" }
  ]
};

// Trois causes (3 points) — Q1 population (causes de la dénatalité, une par document). Guide RÉCIT
// sans barème : matrice proportionnelle calquée sur les réglettes multi-faits.
const R_CAUSES_3PT_3CAUSES = {
  type: "simple", opLabel: "Déterminer des causes et des conséquences", maxPoints: 3,
  levels: [
    { points: "3 points", condition: "L'élève détermine correctement les trois causes. (3 sur 3)" },
    { points: "1 ou 2 points", condition: "L'élève détermine correctement certaines causes. (1 ou 2 sur 3)" },
    { points: "0 point", condition: "L'élève ne détermine pas les causes. (0 sur 3)" }
  ]
};

// Établir des faits, 4 faits (4 points) — Q2 population (caractéristiques de la société de
// consommation, une par document). Variante à 4 faits de R_FAITS_3PT_3SUR3.
const R_FAITS_4PT_4SUR4 = {
  type: "simple", opLabel: "Établir des faits", maxPoints: 4,
  levels: [
    { points: "4 points", condition: "L'élève établit tous les faits. (4 sur 4)" },
    { points: "1 à 3 points", condition: "L'élève établit certains faits. (1 à 3 sur 4)" },
    { points: "0 point", condition: "L'élève n'établit pas les faits. (0 sur 4)" }
  ]
};

// Déterminer un changement (2 points) — Q1 et Q2 culture/langue : on réutilise la réglette
// existante R_CHANGEMENTS_2PT_GEN (définie plus haut), adaptée à « relever / indiquer un
// changement » justifié par des faits ou des données.

// Dégager 1 différence ET 1 similitude (2 points) — Q1 Révolution tranquille (deux paires de
// documents). Guide RÉCIT sans barème : matrice « 2 sur 2 ».
const R_DIFFSIM_2PT_1DIFF_1SIM = {
  type: "simple", opLabel: "Dégager des différences et des similitudes", maxPoints: 2,
  levels: [
    { points: "2 points", condition: "L'élève dégage correctement la différence et la similitude. (2 sur 2)" },
    { points: "1 point", condition: "L'élève dégage correctement la différence ou la similitude. (1 sur 2)" },
    { points: "0 point", condition: "L'élève ne dégage ni différence ni similitude. (0 sur 2)" }
  ]
};

// Deux mesures ET leurs causes (4 points) — Q3 Révolution tranquille (mesures économiques de Lesage
// et leurs raisons). Guide RÉCIT sans barème : matrice proportionnelle (4 sur 4).
const R_CAUSES_4PT_2MESURES_2CAUSES = {
  type: "simple", opLabel: "Déterminer des causes et des conséquences", maxPoints: 4,
  levels: [
    { points: "4 points", condition: "L'élève détermine correctement les deux mesures et leurs deux causes. (4 sur 4)" },
    { points: "2 ou 3 points", condition: "L'élève détermine correctement certaines mesures ou causes. (2 ou 3 sur 4)" },
    { points: "0 ou 1 point", condition: "L'élève ne détermine pas ou peu les mesures et les causes. (0 ou 1 sur 4)" }
  ]
};

// ============ Réglettes ajoutées v1.28.0 (Évaluations sommatives P8 — 1980 à nos jours) ============

// Différences/similitudes, 3 acteurs (3 points, format « 2 positions ») — Q6 V-A P8 (3 acteurs sur
// le projet de loi 178 / affichage). Le PDF source utilise une matrice « simple » à 4 colonnes
// (3/2/1/0 pts) centrée sur la présentation des deux positions, avec un astérisque renvoyant à la
// nomination correcte de l'acteur. On encode l'astérisque DIRECTEMENT dans les conditions (le rendu
// « simple » ne porte pas de footnote, réservé au type « complex »). Distinct de
// R_DIFFSIM_3PT_ACTEUR_DIFFERENT_POSITION (Q8 V-B P8 / P6) qui est la matrice « complexe » à 5 lignes
// avec branche explicite « nomme l'acteur » + footnote.
const R_DIFFSIM_3PT_2POSITIONS_SOMA = {
  type: "simple", opLabel: "Dégager des différences et des similitudes", maxPoints: 3,
  levels: [
    { points: "3 points", condition: "L'élève présente correctement les deux positions et nomme correctement l'acteur qui présente une position différente." },
    { points: "2 points", condition: "L'élève présente correctement une position et présente plus ou moins correctement l'autre position." },
    { points: "1 point",  condition: "L'élève présente plus ou moins correctement les deux positions, ou présente correctement une position et présente incorrectement l'autre position ou ne la présente pas." },
    { points: "0 point",  condition: "L'élève présente incorrectement les deux positions ou ne les présente pas, ou nomme incorrectement l'acteur qui présente une position différente." }
  ]
};

// ============ Réglettes ajoutées v1.29.0 (Guides pédagogiques RÉCIT P8 — 1980 à nos jours) ============

// Établir des faits, 2 faits (2 points) — Q4 « Population et culture » (deux facteurs qui limitent
// le branchement à Internet). Les guides RÉCIT ne fournissent pas de barème ; on calque la matrice
// proportionnelle à 3 niveaux des autres réglettes « Établir des faits » (R_FAITS_3PT_3SUR3,
// R_FAITS_4PT_4SUR4), déclinée pour 2 faits. PRIORITÉ : seule OI manquante de P8 (passe à 7/7).
const R_FAITS_2PT_2SUR2 = {
  type: "simple", opLabel: "Établir des faits", maxPoints: 2,
  levels: [
    { points: "2 points", condition: "L'élève établit tous les faits. (2 sur 2)" },
    { points: "1 point", condition: "L'élève établit certains faits. (1 sur 2)" },
    { points: "0 point", condition: "L'élève n'établit pas les faits. (0 sur 2)" }
  ]
};

// ============ Helpers de sélection de documents ============
const pickDocs = (section, ...indices) => indices.map(i => DOCS[section][i - 1]);
const pickDocsRenumbered = (section, ...indices) => indices.map((origIdx, k) => {
  const doc = DOCS[section][origIdx - 1];
  return { ...doc, title: doc.title.replace(/Document \d+/, `Document ${k + 1}`) };
});

// ============ Instructions formatées (causalité) ============
const CAUSALITE_INSTRUCTIONS = {
  parts: [
    { text: "Fais des phrases complètes et utilise des marqueurs de relation de " },
    { text: "but", bold: true },
    { text: ", de " },
    { text: "cause", bold: true },
    { text: ", de " },
    { text: "conséquence", bold: true },
    { text: " ou d'" },
    { text: "opposition", bold: true },
    { text: " (ex. : afin de, pour, parce que, par conséquent, ainsi, donc, etc.)." }
  ]
};

// ============ DOCS ============
// Chaque clé = une « section » de documents propre à une question.
// Les numéros « Document N » dans le PDF source sont renumérotés 1..N
// à l'intérieur de chaque section, comme dans le modèle HEC.
const DOCS = {

  // ===== P1 — Mettre en relation des faits — Familles linguistiques =====
  'experience-autochtones-relation-1': [
    { id: "ea-r1-d1", title: "Document 1", layout: "text-only",
      text: "« La plupart des peuples [...] étaient [patrilinéaires], ce qui implique que le père déterminait l'appartenance au groupe de base. Le plus souvent, la femme venait habiter dans la maison de son époux. Certains membres de [cette] famille [...], comme les [Abénakis, Mi'gmaqs et les Malécites], reconnaissaient [néanmoins] des liens de filiation du côté maternel ou des deux lignées à la fois, celle du père et de la mère. »",
      sources: ["Source : Gilles Berger, Diane Boily et Sylvie Savoie, « Territoires et sociétés algonquiennes vers 1500 — Rôle des hommes », EDUTIC : AKI — Sociétés et territoires autochtones, page consultée le 21 janvier 2022."] },
    { id: "ea-r1-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/experience-autochtones-relation-1/doc2.png", imageWidthCm: 9,
      sources: ["Source de l'image : Bernard Duchesne, Des hommes ramènent au campement un orignal qu'ils ont chassé. Licence : utilisation permise en contexte éducatif seulement (BY-NC)."] },
    { id: "ea-r1-d3", title: "Document 3", layout: "text-only",
      text: "Cultiver nécessite beaucoup de travail, du printemps jusqu'à l'automne. Il faut donc une présence constante dans les champs. Les principaux produits de l'agriculture sont le maïs, les haricots et la courge, qui forment les principales sources de l'alimentation de cette famille linguistique.",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "ea-r1-d4", title: "Document 4", layout: "text-only",
      text: "« À moins de circonstances exceptionnelles, jamais on ne voyait les hommes participer aux travaux des femmes, ni les femmes partager ceux des hommes. Les tâches exigeant des déplacements importants revenaient aux hommes, tandis que les activités plus sédentaires étaient réservées aux femmes. [...] Ainsi, les femmes sèment, cultivent, cuisinent, cousent, entretiennent les maisons, font la cueillette et éduquent les enfants alors que les hommes abattent les arbres, pêchent, chassent, commercent et construisent les canots, les maisons et les fortifications, et font la guerre. »",
      sources: ["Source : Denys Delâge, Le pays renversé. Amérindiens et Européens en Amérique du Nord-Est (1600-1664), Montréal, Boréal, 1991, p. 63."] }
  ],

  // ===== P1 — Situer dans le temps — Antériorité/postériorité à 1541 =====
  'experience-autochtones-situer-1': [
    { id: "ea-s1-d1", title: "Document 1", layout: "text-only",
      text: "De retour à Stadaconé, pendant l'hiver, plusieurs Français périssent, victimes du scorbut. D'autres sont sauvés par une infusion à base de conifère, l'annedda, préparée par les Amérindiens. Au printemps, les voyageurs rentrent en Europe, avec le chef Donnacona qu'ils capturent de force et qu'ils promettent de ramener l'année suivante. Cartier n'a pas trouvé le passage vers l'ouest, mais rapporte en Europe de nouvelles connaissances géographiques.",
      sources: ["Source : Bibliothèque et Archives nationales du Québec, Jacques Cartier visite les villages de Stadaconé et de Hochelaga, en ligne sur Ligne du temps du Québec."] },
    { id: "ea-s1-d2", title: "Document 2", layout: "text-only",
      text: "Dans ses récits, [il] rapporte qu'en mai [...], quelque 1000 Autochtones établissent leur campement face à Tadoussac, sur l'actuelle pointe aux Alouettes. À l'arrivée des Français, Innus, Algonquins et Etchemins sont en train de célébrer une victoire contre les Iroquois. L'hôte de l'événement est le chef innu (« grand sagamo ») Anadabijou.",
      sources: ["Source : Bibliothèque et Archives nationales du Québec, Grande tabagie et première alliance franco-autochtone, en ligne sur Ligne du temps du Québec."] },
    { id: "ea-s1-d3", title: "Document 3", layout: "image-only",
      imageUrl: "assets/img/experience-autochtones-situer-1/doc3.png", imageWidthCm: 9,
      sources: ["Source de l'image : Henri Julien, Jacques Cartier plantant une croix en sol canadien [...] (1908), Bibliothèque et Archives Canada, MIKAN 2928589. Licence : domaine public."] },
    { id: "ea-s1-d4", title: "Document 4 : Extrait des Voyages du Sieur de Champlain", layout: "text-only",
      text: "« Il était difficile de bien connaître ce pays sans y passer un hiver... L'hiver nous a surpris plus tôt que nous le pensions... des soixante-dix-neuf que nous étions, trente-cinq sont morts (du scorbut) et vingt autres ont failli périr... C'est pour cette raison que le sieur de Mons et d'autres se sont dits mécontents de l'établissement... L'hiver dure six mois dans ce pays. »",
      sources: ["Source : Champlain, Samuel de. VOYAGES (1632). The Champlain Society. Toronto : University of Toronto Press. 1971."] }
  ],

  // ===== P1 — Établir des faits — Transmission orale =====
  'experience-autochtones-faits-1': [
    { id: "ea-f1-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/experience-autochtones-faits-1/doc1.png", imageWidthCm: 9,
      sources: ["Source de l'image : Les Iroquoiens transmettaient leurs connaissances en racontant des histoires, Contexte éducatif seulement (BY-NC) / Création Bernard Duchesne."] }
  ],

  // ===== P1 — Différences et similitudes — Français vs Innus à Uepishtikuiau =====
  // Chaque témoignage innu issu de la tradition orale est un document distinct (un acteur = un document).
  'experience-autochtones-differences-1': [
    { id: "ea-d1-d1", title: "Document 1 : Interprétation des écrits de Samuel de Champlain", layout: "text-only",
      text: "« Au début du 17e siècle, [...] l'intérêt grandissant pour le commerce des fourrures dans [la vallée du Saint-Laurent] conduira Champlain à construire une habitation à Québec, en 1608. L'alliance de 1603 permettait aux Français de s'installer dans ce secteur sans rencontrer l'opposition des populations [autochtones]. »",
      sources: ["Source : Alain BEAULIEU, « La naissance de l'alliance franco-amérindienne », dans Raymonde LITALIEN et Denis VAUGEOIS (dirs.), Champlain, la naissance de l'Amérique française, Sillery, Septentrion, 2004."] },
    { id: "ea-d1-d2", title: "Document 2 : Témoignage de Mathieu Menikapu (tradition orale innue)", layout: "text-only",
      text: "« Le chef français arrivait de l'est quand il demanda aux Innus de lui donner Uepishtikuiau [site de l'actuelle ville de Québec]. Mais ceux-ci ne le lui ont pas donné. C'est lorsqu'il le leur a demandé une deuxième fois qu'ils le lui ont remis. »",
      sources: ["Source : Sylvie VINCENT, « Compatibilité apparente, incompatibilité réelle des versions autochtones et occidentales de l'histoire : l'exemple innu », Recherches amérindiennes au Québec, vol. 32, no 2, 2002, p. 101."] },
    { id: "ea-d1-d3", title: "Document 3 : Témoignage de Jean-Baptiste Bellefleur (tradition orale innue)", layout: "text-only",
      text: "« [Au début, les Français n'ont cultivé qu'un petit lopin de terre.] Les premiers temps, leur jardin n'était pas bien grand, ils ne semaient pas beaucoup. [...] Puis, tandis que les Innus n'étaient pas là, tandis qu'ils étaient partis dans l'arrière-pays, [...] ils ont dû agrandir la terre sur laquelle ils feraient pousser leur blé. [...] C'est avec leur agriculture qu'ils ont dû réussir à repousser les Innus, ils ont dû élargir leur clôture en fonction de ce qu'ils faisaient pousser. Ils ont dû l'agrandir de plus en plus et les Innus, eux, ont dû finir par quitter leur terre. »",
      sources: ["Source : Sylvie VINCENT, « Compatibilité apparente, incompatibilité réelle des versions autochtones et occidentales de l'histoire : l'exemple innu », Recherches amérindiennes au Québec, vol. 32, no 2, 2002, p. 101."] }
  ],

  // ===== P1 — Différences et similitudes — Prise de décisions algonquiennes vs iroquoiennes =====
  'experience-autochtones-differences-2': [
    { id: "ea-d2-d1", title: "Document 1", layout: "text-only",
      text: "« La position sociale des femmes leur permettait de participer activement à la vie politique. Elles avaient le pouvoir de nommer les chefs civils et de les destituer. [...] Elles jouaient également un rôle actif dans l'organisation de la guerre et pouvaient inciter les chefs de guerre à organiser des expéditions punitives pour venger la mort des membres d'une famille ou d'une lignée. »",
      sources: ["Source : Claude CHAPDELAINE, « Les Iroquoiens de la vallée du Saint-Laurent (vers 1500) », Aux couleurs de la terre. Héritage culturel des premières nations, Musée McCord, 1992, en ligne."] },
    { id: "ea-d2-d2", title: "Document 2", layout: "text-only",
      text: "« Au sein de plusieurs nations autochtones, les aînés influencent grandement les affaires du village : ils prennent souvent la parole devant le conseil et leurs propositions sont généralement suivies. »",
      sources: ["Source : Elisabeth TOOKER, « An Ethnography of the Huron Indians, 1615-1649 », Smithsonian Institution of American Ethnology, Bulletin 190, 1965, p. 42. Traduction par le Service national du RÉCIT, domaine de l'univers social."] },
    { id: "ea-d2-d3", title: "Document 3", layout: "text-image",
      text: "Dans une bande anichinabée, les familles désignent un chef qui peut guider les décisions liées à la chasse et au déplacement qu'implique la poursuite des troupeaux de gibier. Les qualités recherchées chez un chef sont l'éloquence, le courage et la force, des habiletés dont dépend la bande pour assurer sa survie.",
      imageUrl: "assets/img/experience-autochtones-differences-2/doc3.png", imageWidthCm: 9,
      sources: [
        "Source du texte : Service national du RÉCIT, domaine de l'univers social.",
        "Source de l'image : Bernard DUCHESNE, Des Algonquiens ramènent au campement un orignal qu'ils ont chassé, Service national du RÉCIT, domaine de l'univers social. Licence : utilisation permise dans un contexte éducatif seulement (BY-NC)."
      ] }
  ],

  // ===== P1 — Situer dans le temps et l'espace — Peuplement de l'Amérique (chronologique) =====
  'experience-autochtones-situer-2': [
    { id: "ea-s2-d1", title: "Document 1", layout: "text-only",
      text: "Le réchauffement du climat permet la création d'un corridor terrestre au cœur de l'Amérique du Nord. Ce recul des glaciers libère la vallée du Saint-Laurent et permet aux humains de s'installer sur le territoire qui correspond aujourd'hui au Québec.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "ea-s2-d2", title: "Document 2", layout: "text-only",
      text: "Des populations humaines suivent un autre axe de peuplement, se déplaçant d'ouest en est dans les régions arctiques du continent. D'autres populations suivent éventuellement cet axe et s'installent vers l'an 1200 de notre ère au sein du territoire qui correspond aujourd'hui à la partie nord du Québec.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "ea-s2-d3", title: "Document 3 : Les premiers êtres humains en Amérique, vers 30 000 ans avant notre ère", layout: "image-only",
      imageUrl: "assets/img/experience-autochtones-situer-2/doc3.png", imageWidthCm: 11,
      sources: ["Source de la carte : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== P1 — Causes et conséquences — Causes du premier voyage de Cartier (1534) =====
  'experience-autochtones-causes-1': [
    { id: "ea-c1-d1", title: "Document 1 : Ordre reçu par Jacques Cartier pour son premier voyage en Amérique du Nord (1534)", layout: "text-only",
      text: "« Jacques Cartier obtient donc appui et financement royal pour un départ au printemps 1534 avec l'ordre de \"faire le voyage de ce royaume [des Terres Neuves] pour [découvrir] certaines [iles] et pays où l'on dit qu'il [doit se] trouver [grande] quantité d'or et autres riches choses\", avec pour but ultime de découvrir le passage du nord-ouest permettant de rejoindre la Chine. »",
      sources: ["Source : Éva GUILLOREL, « Saint-Malo et le Canada au xvie siècle : la puissance et l'oubli », Annales de Bretagne et des Pays de l'Ouest, vol. 125, no 3, 6 décembre 2018, p. 170, en ligne sur Open Edition."] }
  ],

  // ===== P1 — Établir des faits — Pouvoir des chefs dans les sociétés autochtones (Q-E) =====
  'experience-autochtones-faits-2': [
    { id: "ea-f2-d1", title: "Document 1", layout: "text-only",
      text: "« Dans ces sociétés, tous avaient droit aux ressources disponibles, et les qualités d'un individu se traduisaient sous forme d'influence plutôt que de pouvoir coercitif [c'est-à-dire le pouvoir de punir]. La liberté de partage garantissait que l'habileté supérieure d'un chasseur par exemple profiterait au groupe plutôt qu'à un individu. Le pouvoir d'un chef reposait sur sa capacité à approvisionner ses partisans, ainsi que sur son pouvoir de persuasion ; et, peut-être plus important encore, on attendait de lui qu'il serve d'exemple à la population. »",
      sources: ["Source : Patricia Olive DICKASON, Les premières nations du Canada, Sillery, Septentrion, 1996, p. 44-45."] }
  ],

  // ===== P1 — Situer dans le temps et l'espace — Chronologie des explorations européennes (Q-F) =====
  // Renumérotation : doc PDF source #3 → mon doc 1 (Chauvin 1600), #4 → 2 (Vikings ~1000), #5 → 3 (Cartier 1534), #6 → 4 (Cabot 1498)
  'experience-autochtones-situer-3': [
    { id: "ea-s3-d1", title: "Document 1 : Le premier poste de traite du Canada", layout: "image-only",
      imageUrl: "assets/img/experience-autochtones-situer-3/doc1.png", imageWidthCm: 7,
      sources: ["Source de l'image : Poste de traite Chauvin (photo de TCY), Wikimedia commons. Licence Creative Commons (BY-SA)."] },
    { id: "ea-s3-d2", title: "Document 2", layout: "text-only",
      text: "« À l'extrémité de la péninsule Great Northern de Terre-Neuve se trouve la plus ancienne preuve de la présence européenne en Amérique. [...] des marins scandinaves, en provenance du Groenland, y ont construit un petit campement de bâtiments en bois recouverts de gazon. »",
      sources: ["Source du texte : Parcs Canada, Lieu historique national de L'Anse aux Meadows, en ligne."] },
    { id: "ea-s3-d3", title: "Document 3", layout: "text-image",
      text: "Le navigateur français Jacques Cartier entreprend son premier voyage d'exploration en Amérique du Nord.",
      imageUrl: "assets/img/experience-autochtones-situer-3/doc3.png", imageWidthCm: 7,
      sources: ["Source de l'image : Walter BAKER, Jacques Cartier érigeant une croix à Gaspé en l'honneur du roi de France, Bibliothèque et Archives Canada, C-011050, Mikan 2837262. Licence : image du domaine public."] },
    { id: "ea-s3-d4", title: "Document 4", layout: "text-only",
      text: "« Au début de l'année [...], Henry VII autorise une seconde expédition composée de cinq navires et de 300 hommes. Après un débarquement au Groenland, Cabot navigue vers le sud, probablement aussi loin que la baie Chesapeake, mais ne réussit pas à trouver les terres fertiles auxquelles il s'attendait. Comme les approvisionnements commencent à baisser, il retourne en Angleterre. »",
      sources: ["Source : John PARSONS, « Jean Cabot », L'Encyclopédie canadienne, article publié en 2008, en ligne."] }
  ],

  // ===== P1 — Différences et similitudes — Mode de vie de trois peuples autochtones (Q-G) =====
  // Le « document 8 » du PDF source contient 3 sous-documents distincts → splittés selon la convention « un acteur = un document ».
  'experience-autochtones-differences-3': [
    { id: "ea-d3-d1", title: "Document 1", layout: "text-only",
      text: "« [Ils] déplaçaient leurs villages de quelques kilomètres tous les 10 à 15 ans, suivant l'épuisement des sols ou des réserves de bois de chauffage. Les hommes défrichaient les nouveaux champs et préparaient le terrain où serait établi le village, mais c'étaient les femmes qui prenaient la décision de déménager, car c'étaient elles qui cultivaient et qui ramassaient le bois à brûler et les petits fruits, qui préparaient les repas et confectionnaient vêtements, poteries et paniers. »",
      sources: ["Source du texte : Peter GOSSAGE et J. I. LITTLE, Une histoire du Québec : entre tradition et modernité, Montréal, Hurtubise, 2015, p. 30-31."] },
    { id: "ea-d3-d2", title: "Document 2", layout: "text-only",
      text: "« [Ils] érigeaient de petites habitations portatives, ou wigwam, logeant jusqu'à 12 personnes ; on s'y retirait pour dormir, mais la plupart des activités se déroulaient à l'extérieur, sauf durant les jours les plus froids. En hiver, ces peuples se divisaient en petites bandes qui se déplaçaient sur leurs territoires de chasse respectifs, à la poursuite de l'orignal, du caribou, du cerf et de l'ours. »",
      sources: ["Source du texte : Peter GOSSAGE et J. I. LITTLE, Une histoire du Québec : entre tradition et modernité, Montréal, Hurtubise, 2015, p. 28."] },
    { id: "ea-d3-d3", title: "Document 3", layout: "text-only",
      text: "Ce peuple autochtone construit différents types d'habitation selon la saison. En été, il s'agit de tentes de peaux ou de terre et d'os de baleine. Ce type d'habitation leur permet de se déplacer pour suivre le gibier. En hiver, ils vivent en grand groupe et construisent des igloos avec des blocs de neige.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== P1 — Changements et continuités — Transformation des réseaux d'échange (Q-H) =====
  'experience-autochtones-changements-1': [
    { id: "ea-cc1-d1", title: "Document 1", layout: "text-only",
      text: "« À la fin de la période préhistorique, une spécialisation dans l'activité économique des tribus s'amorçait et les Hurons étaient résolument engagés dans la voie de l'échange. La traite des fourrures, tout en se greffant à des réseaux préexistants, intensifiera d'une part les déplacements et les échanges et conférera d'autre part un poids stratégique beaucoup plus grand au rôle d'intermédiaire dans ces réseaux d'échange. »",
      sources: ["Source : Denys DELÂGE, Le pays renversé. Amérindiens et Européens en Amérique du Nord-Est (1600-1664), Montréal, Boréal, 1991, p. 66."] },
    { id: "ea-cc1-d2", title: "Document 2 : Les routes commerciales amérindiennes vers 1500", layout: "image-only",
      imageUrl: "assets/img/experience-autochtones-changements-1/doc2.png", imageWidthCm: 11,
      sources: ["Source de l'image : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] }
  ],

  // ===== P1 — Causes et conséquences — Échec des tentatives d'établissement français (Q-I) =====
  'experience-autochtones-causes-2': [
    { id: "ea-c2-d1", title: "Document 1", layout: "text-only",
      text: "« Plusieurs de nos gens tombèrent malades d'une certaine maladie dans les jambes, les reins et l'estomac, de telle sorte qu'ils nous paraissaient avoir perdu l'usage de tous leurs membres, et il en mourut près de cinquante. »",
      sources: ["Source : Voyages de découverte au Canada entre les années 1534 et 1542 de Jacques Cartier, cité par Jacques LACOURSIÈRE, Histoire populaire du Québec, tome I : Des origines à 1691, Sillery, Septentrion, 1995, p. 30."] }
  ],

  // ===== P1 — Mettre en relation — Partage des tâches Algonquiens vs Iroquoiens (Q-J) =====
  'experience-autochtones-relation-2': [
    { id: "ea-r2-d1", title: "Document 1", layout: "text-only",
      text: "« À moins de circonstances exceptionnelles, jamais on ne voyait les hommes participer aux travaux des femmes, ni les femmes partager ceux des hommes. [...] Ainsi, les femmes sèment, cultivent, cuisinent, cousent, entretiennent les maisons, font la cueillette et éduquent les enfants alors que les hommes abattent les arbres, pêchent, chassent, commercent et construisent les canots, les maisons et les fortifications, et font la guerre. »",
      sources: ["Source du texte : Denys DELÂGE, Le pays renversé. Amérindiens et Européens en Amérique du Nord-Est (1600-1664), Montréal, Boréal, 1991, p. 63."] },
    { id: "ea-r2-d2", title: "Document 2", layout: "text-only",
      text: "Chez ce peuple, les femmes prennent en charge la préparation de la nourriture et des vêtements, l'éducation des jeunes enfants, la cueillette et le ramassage du bois de chauffage alors que les hommes chassent, pêchent et coupent les arbres nécessaires à la construction des tentes. Ce sont également eux qui commercent et font la guerre.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== P1 — Établir des liens de causalité — Alliance franco-amérindienne de 1603 (Q-K) =====
  'experience-autochtones-causalite-1': [
    { id: "ea-ca1-d1", title: "Document 1 : Défaite des Yroquois au Lac de Champlain (1609)", layout: "image-only",
      imageUrl: "assets/img/experience-autochtones-causalite-1/doc1.png", imageWidthCm: 11,
      sources: ["Source de l'image : Samuel de CHAMPLAIN, Défaite des Yroquois au Lac de Champlain, 1609, Bibliothèque et Archives Canada, C-005750, MIKAN 2928537. Licence : image du domaine public."] },
    { id: "ea-ca1-d2", title: "Document 2", layout: "text-only",
      text: "« En mai et juin 1603, des représentants du Roi de France, François du Pont Gravé en tête, accompagné entre autres de Samuel Champlain, ont participé à des rencontres diplomatiques. Respectant les coutumes amérindiennes, ils ont fumé le calumet et scellé les premières alliances franco-amérindiennes. Montagnais-Innus et leur chef Anadabijou, Algonquins et leur chef Tessouat, ainsi que Malécites-Etchemins ont lors de ces rencontres diplomatiques exprimé l'acceptation que les Français « peuplât leur terre » [...]. »",
      sources: ["Source du texte : Alain LAVALLÉE, « Alliances indiennes en Nouvelle-France (1603-1803) : une Amérique franco-amérindienne », Blogue Le Monde, 24 mai 2008."] },
    { id: "ea-ca1-d3", title: "Document 3", layout: "text-only",
      text: "« De nombreux ouvrages traitent de cette page d'histoire remarquable et dans l'un d'eux, The Algonkin Tribe de Peter Hessel, l'auteur raconte que cette entente franco-amérindienne était en quelque sorte nécessaire, chacun ayant besoin de l'autre. Le temps allait lui donner raison. »",
      sources: ["Source du texte : « La grande alliance franco-amérindienne », 1613 Champlain 2013. Deux rives, une seule musique, site consulté le 12 juillet 2016."] }
  ],

  // ===== P1 — Différences/similitudes — Divergence sur le peuplement de l'Amérique (Familiarisation Q1) =====
  // Renumérotation depuis le PDF Familiarisation (docs source 1 + 2 → Doc 1, Doc 2).
  'experience-autochtones-differences-4': [
    { id: "ea-d4-d1", title: "Document 1", layout: "text-only",
      text: "« D'autres auteurs remettent ce point de vue en question. Selon eux, le territoire du « corridor » ne contient pas de trace de vie animale de plus de 10 000 ou 11 000 ans. De plus, plusieurs sites sud-américains sont beaucoup plus anciens que ceux des plaines de l'Ouest. Les premiers habitants auraient en fait traversé l'océan Pacifique il y a plus de 30 000 ans, en profitant bien involontairement (ou en subissant) des courants favorables. Du continent sud-américain, leurs descendants seraient ensuite remontés vers le nord pour occuper l'Amérique du Nord. »",
      sources: ["Source du texte : Jean-François Cardin et Claude Couture, Histoire du Canada. Espace et différences, Québec, Les Presses de l'Université Laval, 1996, p. 18."] },
    { id: "ea-d4-d2", title: "Document 2", layout: "text-only",
      text: "« Il est aujourd'hui admis partout par les anthropologues et les archéologues que les Indiens ont traversé à pied pendant des périodes où l'intensification des glaciations a entraîné le recul des eaux, faisant du détroit de Béring une steppe herbeuse et souvent marécageuse appelée « Béringie ». [...] Cette étendue d'herbages et de toundra, qui atteint à l'occasion plus de 2000 km de large, tient alors plus du continent que de l'isthme. Elle fournit du fourrage pour des animaux tels que le mammouth, le mastodonte, le bison géant, la saïga et leurs prédateurs. On peut supposer que des chasseurs suivent les troupeaux [...] »",
      sources: ["Source du texte : Patricia Olive Dickason, Les premières nations du Canada, Sillery, Septentrion, 1996, p. 23."] }
  ],

  // ===== P1 — Causes/conséquences — Cause de la rivalité entre nations autochtones (Familiarisation Q2) =====
  // Renumérotation depuis le PDF Familiarisation (doc source 3 → Doc 1).
  'experience-autochtones-causes-3': [
    { id: "ea-c3-d1", title: "Document 1", layout: "text-only",
      text: "L'intégration des nations autochtones aux réseaux d'échanges européens intensifie les guerres entre Autochtones rivaux, particulièrement entre les Hurons et les Iroquois. Cela provoque la quasi-disparition des Hurons de la vallée du Saint-Laurent, les Iroquois étant beaucoup mieux équipés en armes à feu que leurs adversaires.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== P1 — Changements/continuités — Mode de vie autochtone après l'arrivée des Européens (Familiarisation Q3) =====
  // Renumérotation depuis le PDF Familiarisation (doc source 4 → Doc 1).
  'experience-autochtones-changements-2': [
    { id: "ea-cc2-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/experience-autochtones-changements-2/doc1.png", imageWidthCm: 9,
      sources: ["Source de l'image : Autochtone à la chasse (19e siècle), Archives de la ville de Montréal, BM99,S1,D1. Licence : Creative Commons (BY-NC-SA)."] }
  ],

  // ============================================================
  //   v1.20.0 — Sections DOCS de l'Évaluation sommative version A (P1)
  //   Source : « Des origines à 1608 — Cahier de l'élève / Dossier documentaire ».
  //   Le PDF source utilise un dossier documentaire commun (14 docs) pour les 7
  //   questions ; on splitte en 6 sections par question (SQ3 non retenue car
  //   chevauchement de fond avec q-experience-autochtones-differences-2).
  // ============================================================

  // ===== P1 — Causes/conséquences — Q1 soma : causes de l'alliance franco-amérindienne =====
  // Renumérotation depuis le PDF soma (docs source 1, 2 → Doc 1, Doc 2).
  'experience-autochtones-causes-4': [
    { id: "ea-c4-d1", title: "Document 1", layout: "text-only",
      text: "« Au printemps 1603, la région de Tadoussac accueille une grande rencontre diplomatique, à laquelle participent trois nations autochtones (Montagnais, Algonquins et Etchemins) et les Français [représentés par Samuel de Champlain]. Cette rencontre [...] ouvre aussi la voie à la fondation d'une colonie française dans la vallée du Saint-Laurent, car en échange de leur promesse d'assister militairement leurs alliés les Français obtiennent alors l'autorisation de s'installer dans la région. »",
      sources: ["Source : Alain Beaulieu, « La naissance de l'alliance franco-amérindienne », dans Raymonde Litalien et Denis Vaugeois (dir.), Champlain. La naissance de l'Amérique française, Sillery, Septentrion, 2004, p. 153."] },
    { id: "ea-c4-d2", title: "Document 2", layout: "text-only",
      text: "« Les Innus, associés aux Algonquins, associés aux Hurons sont en guerre contre les Iroquois et souhaitent l'appui des Français. Le rapport entre les uns et les autres s'est fondé davantage sur le mode d'une alliance à des fins commerciales et militaires que sur celui d'une conquête. »",
      sources: ["Source : Jean-Claude Ravet, « Des influences refoulées, entrevue avec Denys Delâge », Relations, no 698, février 2005, en ligne."] }
  ],

  // ===== P1 — Causes/conséquences — Q2 soma : conséquence sociale de la guerre (adoption des prisonniers) =====
  // Renumérotation depuis le PDF soma (doc source 3 → Doc 1).
  'experience-autochtones-causes-5': [
    { id: "ea-c5-d1", title: "Document 1", layout: "text-only",
      text: "Lorsqu'un prisonnier est fait lors des escarmouches (raids, embuscades), il arrive qu'il soit adopté par un clan afin de remplacer un membre de la famille tombé au combat. Il prend alors la même position sociale que le défunt (mort). Cela lui permet de recommencer une nouvelle vie au sein de ce clan.",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== P1 — Situer dans le temps — Q4 soma : antériorité/postériorité à Charlesbourg-Royal (1541) =====
  // Renumérotation depuis le PDF soma (docs source 5, 6, 7, 8 → Doc 1, 2, 3, 4).
  // Antériorité : Doc 1 (Cartier Stadaconé, 2e voyage 1535-1536) et Doc 3 (image Cartier croix, 1er voyage 1534).
  // Postériorité : Doc 2 (Tadoussac 1603 Anadabijou) et Doc 4 (Champlain Acadie 1604-1605).
  // Image Doc 3 identique au pixel près à experience-autochtones-situer-1/doc3.png (md5 confirmé).
  'experience-autochtones-situer-4': [
    { id: "ea-s4-d1", title: "Document 1", layout: "text-only",
      text: "De retour à Stadaconé, pendant l'hiver, plusieurs Français périssent, victimes du scorbut. D'autres sont sauvés par une infusion à base de conifère, l'annedda, préparée par les Amérindiens. Au printemps, les voyageurs rentrent en Europe, avec le chef Donnacona qu'ils capturent de force et qu'ils promettent de ramener l'année suivante. Cartier n'a pas trouvé le passage vers l'ouest, mais rapporte en Europe de nouvelles connaissances géographiques.",
      sources: ["Source : Bibliothèque et Archives nationales du Québec, Jacques Cartier visite les villages de Stadaconé et de Hochelaga, en ligne sur Ligne du temps du Québec."] },
    { id: "ea-s4-d2", title: "Document 2", layout: "text-only",
      text: "Dans ses récits, [il] rapporte qu'en mai [...], quelque 1000 Autochtones établissent leur campement face à Tadoussac, sur l'actuelle pointe aux Alouettes. À l'arrivée des Français, Innus, Algonquins et Etchemins sont en train de célébrer une victoire contre les Iroquois. L'hôte de l'événement est le chef innu (« grand sagamo ») Anadabijou.",
      sources: ["Source : Bibliothèque et Archives nationales du Québec, Grande tabagie et première alliance franco-autochtone, en ligne sur Ligne du temps du Québec."] },
    { id: "ea-s4-d3", title: "Document 3", layout: "image-only",
      imageUrl: "assets/img/experience-autochtones-situer-4/doc3.png", imageWidthCm: 9,
      sources: ["Source de l'image : Henri Julien, Jacques Cartier plantant une croix en sol canadien [...] (1908), Bibliothèque et Archives Canada, MIKAN 2928589. Licence : domaine public."] },
    { id: "ea-s4-d4", title: "Document 4 : Extrait des Voyages du Sieur de Champlain", layout: "text-only",
      text: "« Il était difficile de bien connaître ce pays sans y passer un hiver... L'hiver nous a surpris plus tôt que nous le pensions... des soixante-dix-neuf que nous étions, trente-cinq sont morts (du scorbut) et vingt autres ont failli périr... C'est pour cette raison que le sieur de Mons et d'autres se sont dits mécontents de l'établissement... L'hiver dure six mois dans ce pays. »",
      sources: ["Source : Champlain, Samuel de. VOYAGES (1632). The Champlain Society. Toronto : University of Toronto Press. 1971."] }
  ],

  // ===== P1 — Causes/conséquences — Q5 soma : fondation du comptoir de Tadoussac =====
  // Renumérotation depuis le PDF soma (doc source 4 → Doc 1).
  'experience-autochtones-causes-6': [
    { id: "ea-c6-d1", title: "Document 1", layout: "text-only",
      text: "« En 1600, Pierre de Chauvin de Tonnetuit, armateur et marchand de Honfleur, [...] établit un poste de traite [à Tadoussac]. S'étant fait accorder un monopole commercial [sur l'exploitation des fourrures], il y installe 16 colons, mais seulement cinq d'entre eux survivent à l'hiver rigoureux, hébergés, soignés et nourris par les Innus. »",
      sources: ["Source : Bibliothèque et Archives nationales du Québec, Grande tabagie et première alliance franco-autochtone, en ligne sur Ligne du temps du Québec."] }
  ],

  // ===== P1 — Mettre en relation — Q6 soma : famille linguistique algonquienne vs iroquoienne =====
  // Renumérotation depuis le PDF soma (docs source 10, 11, 12, 13 → Doc 1, 2, 3, 4).
  // Algonquien : Doc 1 (patrilinéarité) et Doc 2 (image chasse orignal).
  // Iroquoien : Doc 3 (agriculture maïs/courge/haricots) et Doc 4 (partage des tâches sédentaires).
  // Image Doc 2 identique au pixel près à experience-autochtones-relation-1/doc2.png (md5 confirmé).
  'experience-autochtones-relation-3': [
    { id: "ea-r3-d1", title: "Document 1", layout: "text-only",
      text: "« La plupart des peuples [...] étaient [patrilinéaires], ce qui implique que le père déterminait l'appartenance au groupe de base. Le plus souvent, la femme venait habiter dans la maison de son époux. Certains membres de [cette] famille [...], comme les [Abénakis, Mi'gmaqs et les Malécites], reconnaissaient [néanmoins] des liens de filiation du côté maternel ou des deux lignées à la fois, celle du père et de la mère. »",
      sources: ["Source : Gilles Berger, Diane Boily et Sylvie Savoie, « Territoires et sociétés algonquiennes vers 1500 — Rôle des hommes », EDUTIC : AKI — Sociétés et territoires autochtones, page consultée le 21 janvier 2022."] },
    { id: "ea-r3-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/experience-autochtones-relation-3/doc2.png", imageWidthCm: 9,
      sources: ["Source de l'image : Bernard Duchesne, Des hommes ramènent au campement un orignal qu'ils ont chassé. Licence : utilisation permise en contexte éducatif seulement (BY-NC)."] },
    { id: "ea-r3-d3", title: "Document 3", layout: "text-only",
      text: "Cultiver nécessite beaucoup de travail, du printemps jusqu'à l'automne. Il faut donc une présence constante dans les champs. Les principaux produits de l'agriculture sont le maïs, les haricots et la courge, qui forment les principales sources de l'alimentation de cette famille linguistique.",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "ea-r3-d4", title: "Document 4", layout: "text-only",
      text: "« À moins de circonstances exceptionnelles, jamais on ne voyait les hommes participer aux travaux des femmes, ni les femmes partager ceux des hommes. Les tâches exigeant des déplacements importants revenaient aux hommes, tandis que les activités plus sédentaires étaient réservées aux femmes. [...] Ainsi, les femmes sèment, cultivent, cuisinent, cousent, entretiennent les maisons, font la cueillette et éduquent les enfants alors que les hommes abattent les arbres, pêchent, chassent, commercent et construisent les canots, les maisons et les fortifications, et font la guerre. »",
      sources: ["Source : Denys Delâge, Le pays renversé. Amérindiens et Européens en Amérique du Nord-Est (1600-1664), Montréal, Boréal, 1991, p. 63."] }
  ],

  // ===== P1 — Différences/similitudes — Q7 soma : usage du chaudron de cuivre (perspectives autochtone vs européenne) =====
  // Renumérotation depuis le PDF soma (doc source 14 → Doc 1).
  'experience-autochtones-differences-5': [
    { id: "ea-d5-d1", title: "Document 1", layout: "text-only",
      text: "« Le cuivre européen est réservé à des usages cérémoniaux et rituels [chez certaines nations autochtones]. Chez les groupes iroquoiens des Grands Lacs, les chaudrons de cuivre ne viennent pas remplacer les traditionnels pots en terre cuite utilisés pour la cuisine de tous les jours [comme chez les Européens]. Les chaudrons sont au contraire [...] retirés de la circulation quotidienne, ils sont conservés dans les habitations où ils servent à rehausser les décors intérieurs. »",
      sources: ["Source : Laurier Turgeon, Une histoire de la Nouvelle-France : Français et Amérindiens au XVIe siècle, Paris, Belin, 2019."] }
  ],

  // ===== P2 — Causalité — Démographie et filles du Roy =====
  'evolution-coloniale-causalite-1': [
    { id: "ec-c1-d1", title: "Document 1", layout: "text-only",
      text: "En 1663, la population de la Nouvelle-France s'élève à environ 3000 personnes. À cause des difficultés qu'elle a connues, la Compagnie des Cent-Associés n'a jamais été capable de répondre à son obligation d'installer 4000 colons dans la colonie : le monopole du commerce lui est donc retiré en 1663.",
      sources: ["Source : BOULETTE, J. et al. Québec-Docs, Chenelière Éducation, 2013, p. 43."] },
    { id: "ec-c1-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-causalite-1/doc2.png", imageWidthCm: 6,
      sources: ["Source de l'image : CARDIN, J.F. et al. Le Québec : héritages et projets, HRW, 1984, p. 102. Reproduit avec l'autorisation des Éditions Grand Duc, une division de Groupe Éducalivres inc."] },
    { id: "ec-c1-d3", title: "Document 3", layout: "text-only",
      text: "Toutes les filles venues cette année sont mariées, à quinze près, que j'ai fait distribuées [sic] dans des familles connues, en attendant que les soldats qui les demandent aient formé quelques établissements et acquis de quoi les nourrir. [...] Les filles envoyées l'an passé sont mariées et presque toutes, ou sont grosses,* ou ont eu des enfants, marque de la fécondité de ce pays.\n\n*Grosses : Enceintes",
      sources: ["Source : TRUDEL, Marcel. « Lettre de Jean Talon au ministre de la Marine Jean-Baptiste Colbert, 10 octobre 1670 », La Nouvelle-France par les textes, Montréal, Hurtubise HMH, 2003, p. 104. Reproduit avec l'autorisation de Hurtubise HMH."] }
  ],

  // ===== P2 — Situer dans le temps — Avant/après Plaines d'Abraham =====
  'evolution-coloniale-situer-1': [
    { id: "ec-s1-d1", title: "Document 1 : La déportation des Acadiens", layout: "text-only",
      text: "« Messieurs, — J'ai reçu de Son Excellence le gouverneur Lawrence*, les instructions du roi, que j'ai entre les mains. [...] Ainsi, sans autre hésitation, je vais vous faire connaître les instructions et les ordres de Sa Majesté, qui sont que vos terres et vos maisons et votre bétail et vos troupeaux de toutes sortes, sont confisqués au profit de la couronne, avec tous vos effets, excepté votre argent et vos mobiliers, et que vous-mêmes vous devez être transportés hors de cette province. »\n\n* Charles Lawrence : Gouverneur de la Nouvelle-Écosse, territoire britannique qui incluait l'Acadie depuis le traité d'Utrecht.",
      sources: ["Source : FRÉGAULT, G. et Marcel TRUDEL. « Extraits du journal du colonel John Winslow », Histoire du Canada par les textes, Tome 1 : 1534-1854, Fidès, 1963, p. 95."] },
    { id: "ec-s1-d2", title: "Document 2 : Capitulation de Montréal", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-situer-1/doc2.png", imageWidthCm: 11,
      sources: ["Source de l'image : WIKIMEDIA COMMONS. Auteur inconnu, Musée virtuel du Canada, [en ligne]. (23 mars 2015)"] }
  ],

  // ===== P2 — Différences et similitudes — Désaccord d'historiens sur Talon =====
  'evolution-coloniale-differences-1': [
    { id: "ec-d1-d1", title: "Document 1 : Marcel Trudel sur les réalisations de Jean Talon", layout: "text-only",
      text: "« La culture du chanvre et du lin n'a pas donné les draps et les toiles qu'il se vantait de produire [...]. La fabrique de la potasse prend fin en 1674. [...] Le chantier naval n'aura construit que 2 barques et 2 petits bateaux de 600 ou 700 tonneaux et à des coûts plus élevés qu'en France. La brasserie qui devait, selon Talon, produire 12 000 minots de grains et brasser 4 000 barriques de bière, cesse dès 1673, après seulement 4 ans d'activité. Preuve que ces tentatives industrielles dépendaient trop d'un seul individu et, surtout, ne correspondaient pas alors aux possibilités du pays. »",
      sources: ["Source : Marcel TRUDEL, Mythes et réalités dans l'histoire du Québec, Montréal, Éditions Hurtubise HMH, 2001, p. 121."] },
    { id: "ec-d1-d2", title: "Document 2 : Thomas Chapais sur les réalisations de Jean Talon", layout: "text-only",
      text: "« Stimulés par la tactique ingénieuse exposée par Talon [...], les habitants semèrent du chanvre et réussirent parfaitement. [...] »\n\n« Quand on songe à l'immense extension que reçut plus tard la construction navale [...], aux vastes chantiers qui s'y multiplièrent, à l'innombrable quantité de vaisseaux qui en sortirent, on se dit que l'intendant Talon avait le coup d'œil juste. »\n\n« [...] Talon s'appliqua spécialement à établir des fabriques de potasse [...]. On pouvait en fabriquer ici des quantités assez considérables pour permettre à Paris de se passer des [matières premières en provenance] d'Espagne [pour fabriquer des savons]. »",
      sources: ["Source : Thomas CHAPAIS, Jean Talon, intendant de la Nouvelle-France (1665-1672), 1904, Imprimerie de S.-A. Demers, p. 278-279, 395 et 401-403."] }
  ],

  // ===== P2 — Mettre en relation — Importance géographique et rôle économique de Montréal =====
  'evolution-coloniale-relation-1': [
    { id: "ec-r1-d1", title: "Document 1 : Les pelletiers à Montréal", layout: "text-image",
      text: "Jusqu'à la fin des années 1670, les Autochtones en provenance de la région des Grands Lacs se déplacent en grand nombre pour échanger leurs fourrures de castors avec les marchands de Montréal. En 1672, ils sont environ 900. Il s'agit alors de la foire annuelle la plus importante de la colonie.",
      imageUrl: "assets/img/evolution-coloniale-relation-1/doc1.png", imageWidthCm: 6,
      sources: [
        "Source du texte : Service national du RÉCIT, domaine de l'univers social.",
        "Source de l'image : George Agnew REID, Les pelletiers à Montréal (1916), Bibliothèque et Archives Canada, C-011013, MIKAN 2895827. Licence : image du domaine public."
      ] },
    { id: "ec-r1-d2", title: "Document 2 : Les marchands-équipeurs", layout: "text-only",
      text: "Alexis Lemoine est marchand-équipeur, c'est-à-dire qu'il s'occupe d'organiser des expéditions pour la traite des fourrures. Il doit s'assurer de recruter des coureurs des bois et posséder l'argent nécessaire pour obtenir des permis de traite. De plus, il doit préparer les canots afin qu'ils soient équipés de nourriture, de tissus, d'outils de travail et de munitions. Tout cela servira de produits d'échange afin de développer des relations commerciales avec les Autochtones. Alexis Lemoine notait ces informations dans des livres de comptes. Le commerce des fourrures favorise l'essor des marchands-équipeurs ce qui contribue au développement de la bourgeoisie marchande à Montréal.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "ec-r1-d3", title: "Document 3 : L'exploration du territoire", layout: "text-image",
      text: "« [Dans le dernier tiers du 17e siècle], la Nouvelle-France connaît une formidable expansion territoriale, qui s'explique par le retour de l'économie basée sur l'exploitation des fourrures. En effet, les explorations vers l'intérieur du continent sont principalement motivées par le besoin de nouveaux territoires de traite, puisque les fourrures se raréfient dans la vallée du Saint-Laurent. De plus, les guerres iroquoises, par leurs attaques contre les Hurons et les Outaouais, alliés habituels des Français, interrompent les arrivages de fourrures à Montréal. Pour contourner ce problème, les Montréalais se passent des intermédiaires et se rendent dans la région des Grands Lacs. »",
      imageUrl: "assets/img/evolution-coloniale-relation-1/doc3.png", imageWidthCm: 8,
      sources: [
        "Source du texte : Christine CONCIATORI, « Montréal, plaque tournante des explorations françaises en Amérique », Cap-aux-Diamants, n° 66 (2001), p. 10.",
        "Source de la carte : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."
      ] }
  ],

  // ===== P2 — Différences et similitudes — Rôles des administrateurs coloniaux et du clergé =====
  'evolution-coloniale-differences-2': [
    { id: "ec-d2-d1", title: "Document 1", layout: "text-only",
      text: "Le curé s'occupe de la pratique religieuse et de la bonne conduite des habitants dans les paroisses, nouvellement créées par Mgr de Laval. Le clergé catholique charge les curés de réprimander les colons qui consomment trop d'alcool ou les membres de la paroisse qui ne se présentent pas aux rassemblements hebdomadaires. Le curé est un membre influent de la paroisse et il encadre la vie des colons afin que ceux-ci soient de bons chrétiens.",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "ec-d2-d2", title: "Document 2", layout: "text-only",
      text: "« Dans [la colonie], l'autorité du roi se transmet par l'intermédiaire de deux hauts fonctionnaires [le gouverneur général et l'intendant]. Le gouverneur général, d'ordinaire un militaire de la noblesse, représente le pouvoir royal, symboliquement et dans les faits. Il a le commandement des forces armées, dirige [la politique extérieure] qu'on entretient avec les colonies britanniques et les nations [autochtones] et, comme représentant du roi, préside aux cérémonies d'État et aux manifestations. »\n\nL'intendant, quant à lui, est responsable de l'économie, du peuplement et il participe aux décisions judiciaires en siégeant au conseil souverain.",
      sources: [
        "Source : Craig BROWN, Histoire générale du Canada, Boréal, Montréal, 1990, p. 140-141.",
        "Synthèse : Service national du RÉCIT, domaine de l'univers social."
      ] },
    { id: "ec-d2-d3", title: "Document 3 : Le Conseil souverain de la Nouvelle-France (1663)", layout: "text-only",
      text: "Le Conseil souverain, plus haut tribunal de la colonie, est établi en Nouvelle-France par le roi Louis XIV en 1663.\n\n« […] Nous avons cru ne pouvoir prendre une meilleure résolution qu'en établissant une justice réglée et un conseil souverain dans ledit pays, pour y faire fleurir les lois, maintenir et appuyer les bons, châtier les méchants et contenir chacun dans son devoir, y faisant garder autant qu'il se pourra la même forme de justice qui s'exerce dans notre royaume, et de composer ledit conseil souverain d'un nombre d'officiers convenable pour la rendre. »\n\nLe gouverneur, l'intendant et l'évêque font partie du Conseil souverain, ainsi que cinq à douze conseillers nommés.",
      sources: ["Source : Édits, ordonnances royaux, vol. 1, p. 37-39, cité dans Marcel TRUDEL, La Nouvelle-France par les textes : Les cadres de vie, Hurtubise, Montréal, 2003, p. 50-51."] }
  ],

  // ===== P2 — Causes/conséquences — Objectifs de l'implantation du régime seigneurial =====
  // Chaque historien est un document distinct (un acteur = un document).
  'evolution-coloniale-causes-1': [
    { id: "ec-cs1-d1", title: "Document 1 : Benoît Grenier (2012)", layout: "text-only",
      text: "« Pour des Européens, occuper le sol implique sa mise en valeur par l'agriculture, puisque la terre constitue le fondement de l'économie et de la société d'Ancien Régime. La seigneurie sera l'instrument de cette mise en valeur de l'espace laurentien et s'inscrira dès lors au cœur du processus de colonisation. »",
      sources: ["Source : Benoît GRENIER, Brève histoire du régime seigneurial, Montréal, Boréal, 2012."] },
    { id: "ec-cs1-d2", title: "Document 2 : Marcel Trudel (1971)", layout: "text-only",
      text: "« [...] la France a fait du régime seigneurial canadien un système que l'on peut résumer comme suit : accorder à des entrepreneurs qu'on appellera seigneurs, une portion plus ou moins grande de terre pour y établir des habitants, en fixant d'avance et d'une façon précise des droits et devoirs réciproques dont l'État se réserve la surveillance minutieuse. »",
      sources: ["Source : Marcel TRUDEL, Le régime seigneurial, Ottawa, La société historique du Canada, 1971, p. 3."] }
  ],

  // ===== P2 — Causes/conséquences — Conséquences économiques du mercantilisme =====
  'evolution-coloniale-causes-2': [
    { id: "ec-cs2-d1", title: "Document 1 : John A. Dickinson et Brian Young (2009)", layout: "text-only",
      text: "« La politique impériale était largement dictée par le mercantilisme qui favorisait le monopole et qui considérait les colonies comme des fournisseurs de ressources naturelles d'une part, et comme des marchés pour les produits manufacturés de la métropole, d'autre part. [...] Le commerce colonial était encouragé, mais non la production de biens qui [auraient] fait concurrence aux produits [importés de France]. »",
      sources: ["Source : John A. DICKINSON et Brian YOUNG, Brève histoire socio-économique du Québec, Québec, Septentrion, 2009, p. 100."] },
    { id: "ec-cs2-d2", title: "Document 2 : Rosario Bilodeau (1956)", layout: "text-only",
      text: "« [Bien qu'il soit géographiquement possible de commercer avec les Treize colonies], le pacte colonial [défend] tout commerce avec les Anglais, le commerce ne devant se faire qu'avec la France. Au moment où le marché français était saturé de castor canadien, cette mesure mercantiliste pèse lourdement sur la vie économique de la Nouvelle-France et présente, du point de vue colonial, une regrettable restriction à la liberté économique et politique. »",
      sources: ["Source : Rosario BILODEAU, « Liberté économique et politique des Canadiens sous le régime français », Revue d'histoire de l'Amérique française, vol. 10, no 1, 1956, p. 49-58."] }
  ],

  // ===== P2 — Causes/conséquences — Guerre de Succession d'Espagne (territoriale + économique) =====
  'evolution-coloniale-causes-3': [
    { id: "ec-cs3-d1", title: "Document 1 : Territoire revendiqué par la France après le traité d'Utrecht (1713)", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-causes-3/doc1.png", imageWidthCm: 9,
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] },
    { id: "ec-cs3-d2", title: "Document 2 : Guy Frégault sur les dépenses militaires", layout: "text-only",
      text: "« Les dépenses [militaires] faites en [Nouvelle-France] en 1709 [...] se chiffrent par 184 000 livres*. [...] En raison de l'intensité qui peut marquer les opérations militaires en 1711 [...] [l'intendant] Raudot demande d'inscrire au budget [de guerre et de fortifications] 148 000 livres. Il y a ensuite les frais ordinaires de l'administration : la [paie] des troupes, [la paie] des officiers supérieurs, etc. [En 1711], pour assurer la défense du pays [...], l'intendant demande [donc] un peu plus de 560 000 livres. »\n\n* Livres : Monnaie de la France à cette époque.",
      sources: ["Source : Guy FRÉGAULT, « Essai sur les finances canadiennes (1700-1750) », Revue d'histoire de l'Amérique française, vol. 39, no 2, 1968, p. 319."] }
  ],

  // ===== P2 — Différences/similitudes — Trudel vs Grenier sur le rôle de la seigneurie =====
  'evolution-coloniale-differences-3': [
    { id: "ec-d3-d1", title: "Document 1 : Marcel Trudel sur le régime seigneurial", layout: "text-only",
      text: "« L'entraide sociale établie en système »\n\n« Dans cette vallée du Saint-Laurent, [...] le simple immigrant pouvait survivre plus facilement si la société lui offrait un système d'entraide. L'État crée donc le seigneur qui donnera la terre et qui, en retour de certains droits prévus par contrat, [offrira son aide] aux habitants. [...] À son tour, [le censitaire] aidera le seigneur en remplissant les devoirs requis et en faisant ses trois ou quatre jours de corvée par année. »",
      sources: ["Source : Marcel TRUDEL, Le régime seigneurial, Ottawa, La société historique du Canada, 1971, p. 18."] },
    { id: "ec-d3-d2", title: "Document 2 : Benoît Grenier sur le régime seigneurial", layout: "text-only",
      text: "« En vertu de ce système, la terre n'est jamais possédée parfaitement et entièrement ; on la tient de quelqu'un (d'où le mot tenure) dans un rapport de subordination et à l'intérieur d'une hiérarchie. La seigneurie est donc non seulement un territoire mais aussi et surtout un rapport entre individus, rapport marqué par l'inégalité sociale. »",
      sources: ["Source : Benoît GRENIER, Brève histoire du régime seigneurial, Montréal, Boréal, 2012."] }
  ],

  // ===== P2 — Différences/similitudes — Point d'accord sur les causes de l'épidémie de la Huronie =====
  'evolution-coloniale-differences-4': [
    { id: "ec-d4-d1", title: "Document 1 : Témoignage d'une femme huronne-wendate", layout: "text-only",
      text: "« [Les missionnaires] se sont logés dans un [...] village huron-wendat où tout le monde se portait bien. Aussitôt qu'ils s'y sont établis, tout le monde y est mort sauf trois ou quatre personnes. Les missionnaires ont changé de lieu et il en est arrivé de même. Ils sont allés visiter les cabanes des autres villages et il n'y a que celles où ils ne sont pas entrés qui aient été épargnées par la mortalité et la maladie. »",
      sources: ["Source : Marie de l'INCARNATION, « Lettre XIX à la supérieure des Ursulines de Tours », Lettres de la vénérable mère Marie de l'Incarnation, première supérieure des Ursulines de la Nouvelle-France, Paris, Louis Billaine, 1681, p. 340."] },
    { id: "ec-d4-d2", title: "Document 2 : Synthèse de Bibliothèque et Archives nationales du Québec", layout: "text-only",
      text: "« Comme ils vivaient au cœur du réseau commercial des Grands Lacs, les Hurons-Wendats sont rapidement devenus les principaux alliés et fournisseurs de fourrures des Français dans la région. Les Jésuites y ont fondé plusieurs missions, dont la principale était Sainte-Marie-des-Hurons. L'intensification des contacts entre Hurons-Wendats et Européens a provoqué des épidémies qui, de 1634 à 1640, ont entraîné la mort de plus de la moitié du peuple huron-wendat, qui comptait auparavant plus de 20 000 personnes réparties dans une vingtaine de villages. »",
      sources: ["Source : Bibliothèque et Archives nationales du Québec, « Destruction de la Huronie par les Iroquois, 1649-1650 », La Ligne du temps du Québec, 2020."] }
  ],

  // ===== P2 — Établir des faits — Mode d'occupation du territoire en Nouvelle-France =====
  'evolution-coloniale-faits-1': [
    { id: "ec-f1-d1", title: "Document 1", layout: "text-only",
      text: "Hérité du modèle féodal français, ce mode d'organisation du territoire favorise le peuplement et la mise en valeur des terres de la colonie. Il est régi par un système de droits et devoirs qui lient entre eux le roi, le seigneur et ses censitaires. Les terres sont établies en longues bandes étroites pour que le plus de personnes possible aient accès au fleuve Saint-Laurent.",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== P2 — Causalité — Établissement de la Grande Paix de Montréal en 1701 =====
  // Doc 2 (Potherie texte + image Ratification) est splitté en 2 documents (un acteur = un document).
  'evolution-coloniale-causalite-2': [
    { id: "ec-c2-d1", title: "Document 1 : Gilles Havard sur la mission diplomatique française", layout: "text-only",
      text: "« Aussi Callière dépêcha-t-il deux ambassadeurs [...] pour préparer à l'ouest le rendez-vous de 1701. La mission des deux hommes [est de visiter] « toutes les nations [de la région des Grands Lacs] » pour [...] convaincre les chefs alliés de se rendre à Montréal [...], accompagnés de tous leurs captifs iroquois, en vue d'un échange général des prisonniers [...]. Parallèlement à cette mission diplomatique française, Kondiaronk* et Koutaoiliboe** [...] menèrent eux aussi une politique soutenue et d'ailleurs beaucoup plus décisive pour engager les différentes nations de l'alliance à venir pactiser avec les Iroquois à Montréal. »\n\n* Kondiaronk : chef très influent de la nation Hurons-Pétuns.\n** Koutaoiliboe : chef de la nation des Outaouais.",
      sources: ["Source : Gilles HAVARD, La Grande Paix de Montréal de 1701. Les voies de la diplomatie franco-amérindienne, Montréal, Recherches amérindiennes au Québec, 1992, p. 118."] },
    { id: "ec-c2-d2", title: "Document 2 : Bacqueville de La Potherie sur la cérémonie du calumet", layout: "text-only",
      text: "« Après ces discours, on apporta au chevalier de Callière un grand calumet [...] qu'il fuma. Ce calumet lui avait été remis par le chef des Miamis, Chichicatalo, l'un des personnages les plus influents des Pays-d'en-Haut. [...] On porta ensuite le calumet aux Iroquois et aux députés de tous nos alliés, qui à tour de rôle firent de même. Enfin tous les ambassadeurs présents apposèrent leurs marques respectives au bas du traité : un orignal, un castor, un ours, un chevreuil ou d'autres animaux. »",
      sources: ["Source : Bacqueville de LA POTHERIE, Histoire de l'Amérique septentrionale (1753), dans A. BEAULIEU et R. VIAU, La Grande Paix. Chronique d'une saga diplomatique, Montréal, Libre Expression, 2001, p. 103."] },
    { id: "ec-c2-d3", title: "Document 3 : Ratification de la Grande Paix de Montréal (1701)", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-causalite-2/doc3.png", imageWidthCm: 11,
      sources: ["Source de l'image : Ratification de la paix conclue entre les Français, leurs alliés (1701), Bibliothèque et Archives Canada, 3050235, folios 43, 43v et 44. Licence : domaine public."] },
    { id: "ec-c2-d4", title: "Document 4 : Texte du gouvernement du Canada", layout: "text-only",
      text: "« Les raids des nations des Grands Lacs, ainsi que des épidémies désastreuses, réduisent la population iroquoise de moitié entre 1689 et 1697. En outre, lorsque le traité de Ryswick met fin à la guerre entre les Français et les Britanniques en 1697, les Iroquois perdent l'appui de leurs alliés britanniques dans leur guerre contre la Nouvelle-France. »",
      sources: ["Source : P. Whitney LACKENBAUER, John MOSES, R. Scott SHEFFIELD et Maxime GOHIER, Les Autochtones et l'expérience militaire canadienne : une histoire, Ottawa, Ministère de la défense nationale, 2010, p. 34."] }
  ],

  // ===== P2 — Situer dans le temps — Ordre chronologique de 3 événements de la guerre de la Conquête =====
  'evolution-coloniale-situer-2': [
    { id: "ec-s2-d1", title: "Document 1 : Vue de la prise de Québec (1759)", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-situer-2/doc1.png", imageWidthCm: 10,
      sources: ["Source de l'image : Hervey SMYTH, Vue de la prise de Québec, le 13 septembre 1759 (1797), Bibliothèque du Ministère de la défense nationale via Wikimedia Commons. Licence : domaine public."] },
    { id: "ec-s2-d2", title: "Document 2 : La chute de Montréal", layout: "text-only",
      text: "Malgré la victoire des Français à Sainte-Foy, ceux-ci doivent abandonner leur tentative de reprendre Québec, car des navires britanniques arrivent peu de temps après. Les Britanniques remontent alors le Saint-Laurent vers Montréal et contraignent les Français à rendre les armes en septembre 1760, ce qui met fin à la guerre de la Conquête.",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] },
    { id: "ec-s2-d3", title: "Document 3 : Prise de Louisbourg par les Britanniques", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-situer-2/doc3.png", imageWidthCm: 10,
      sources: ["Source de l'image : Auteur inconnu, Prise de Louisbourg par les Britanniques [...], Bibliothèque et Archives nationales du Québec, 0002724411. Licence : domaine public."] }
  ],

  // ============================================================
  //   P2 — Questions courtes 1608-1760 (RÉCIT, ressource enseignante)
  //   8 sections : faits-2 / changements-1 / causes-4 / relation-2 /
  //                situer-3 / differences-5 / causalite-3 / situer-4
  //   Document 7 (Mercier 1653) et Document 18 (Traiteur Jefferys)
  //   sont dupliqués entre sections (convention « 8 sections séparées »).
  // ============================================================

  // ===== P2 — Établir des faits — Q1 : idéologie de Louis XIV =====
  'evolution-coloniale-faits-2': [
    { id: "ec-f2-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-faits-2/doc1.png", imageWidthCm: 7,
      sources: ["Source de l'image : Edmond Lechevallier-Chevignard, Louis XIV jeune homme (entre 1867-1873), Bibliothèque et Archives Canada, C-107650, MIKAN 2897969, modifiée par le service national du RÉCIT, domaine de l'univers social. Licence : image du domaine public."] }
  ],

  // ===== P2 — Déterminer des changements et des continuités — Q2 : continuité économique =====
  'evolution-coloniale-changements-1': [
    { id: "ec-cc1-d1", title: "Document 1", layout: "text-only",
      text: "« Jamais il n'y eut plus de castors dans nos lacs et dans nos rivières; mais jamais il ne s'en est moins vu dans les magasins du pays. Le magasin de Montréal n'a pas acheté des Sauvages [Autochtones] un seul castor depuis un an [...] Ce sont les Iroquois, dont il faut se plaindre : car ce sont eux [...] qui empêchent tout le commerce des castors [...] »",
      sources: ["Source du texte : François-Joseph le Mercier, Relations des Jésuites, 1653."] },
    { id: "ec-cc1-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-changements-1/doc2.png", imageWidthCm: 6,
      sources: ["Source de l'image : Charles William Jefferys, Traiteur de pelleteries indien, 1785. Bibliothèque et Archives Canada, C-0733431, MIKAN 2899012. Licence : image du domaine public."] }
  ],

  // ===== P2 — Causes et conséquences — Q3 : effet des guerres iroquoises =====
  'evolution-coloniale-causes-4': [
    { id: "ec-cs4-d1", title: "Document 1", layout: "text-only",
      text: "« Jamais il n'y eut plus de castors dans nos lacs et dans nos rivières; mais jamais il ne s'en est moins vu dans les magasins du pays. Le magasin de Montréal n'a pas acheté des Sauvages [Autochtones] un seul castor depuis un an [...] Ce sont les Iroquois, dont il faut se plaindre : car ce sont eux [...] qui empêchent tout le commerce des castors [...] »",
      sources: ["Source du texte : François-Joseph le Mercier, Relations des Jésuites, 1653."] }
  ],

  // ===== P2 — Mettre en relation — Q4 : rôles de l'Église =====
  'evolution-coloniale-relation-2': [
    { id: "ec-r2-d1", title: "Document 1", layout: "text-only",
      text: "« Ainsi Dieu, grand amateur du salut des hommes [...] semble avoir choisi cette situation de Montréal [...] pour y assembler un peuple composé de Français et des Sauvages qui seront convertis pour les rendre sédentaires, les former à cultiver [...] la terre, les unir sous une même discipline dans les exercices de la vie chrétienne [...] et faire célébrer les louanges de Dieu en un désert, où Jésus-Christ n'a jamais été nommé [...]. »",
      sources: ["Source du texte : Jean-Jacques Olier et Élie Laisné de la Marguerie (auteurs présumés), Les véritables motifs de messieurs et dames de la Société de Notre-Dame de Montréal pour la conversion des sauvages de la Nouvelle-France, Paris, 1643, p. 25-26."] },
    { id: "ec-r2-d2", title: "Document 2", layout: "text-only",
      text: "« Jeanne Mance se met donc à l'œuvre et fait construire l'Hôtel-Dieu en 1645. Les temps sont difficiles et, en 1659, elle part chercher de l'aide en France et revient accompagnée de trois hospitalières de Saint-Joseph. [...] Les défis sont nombreux pour les religieuses hospitalières de Saint-Joseph, dont la mission est de s'occuper des malades des deux sexes. »",
      sources: ["Source du texte : Nicolas Bednarz, Anick Forest Bonin et Mario Robert, Quand les Archives racontent Montréal : 100 pièces d'exception, Québec, Les publications du Québec, 2013, p. 10."] },
    { id: "ec-r2-d3", title: "Document 3", layout: "text-only",
      text: "« Afin d'asseoir l'autorité du curé, chaque paroissien est assujetti à un code de pratique religieuse qui prévoit tout. D'abord, chaque nouveau-né doit obligatoirement être baptisé afin d'entrer dans l'Église catholique. Cela doit se faire dans les jours qui suivent la naissance. »",
      sources: ["Source du texte : Ville de Montréal, La religion en Nouvelle-France, en ligne."] }
  ],

  // ===== P2 — Situer dans le temps — Q5 : avant / après le gouvernement royal =====
  'evolution-coloniale-situer-3': [
    { id: "ec-s3-d1", title: "Document 1", layout: "text-only",
      text: "« Louis XIV souhaite qu'une partie des officiers et des soldats demeurent en Nouvelle-France et se transforment en colons. À cet effet, il leur accorde des vivres pour un an et des gratifications dont le montant varie suivant le grade. L'intendant Talon voit à ce que des terres leur soient concédées. »",
      sources: ["Source du texte : Jacques Lacoursière, Histoire populaire du Québec. Des origines à 1791, Québec, Septentrion, 1995, p. 111."] },
    { id: "ec-s3-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-situer-3/doc2.png", imageWidthCm: 11,
      sources: ["Source de l'image : J. Armstrong, Ville-Marie au moment de sa fondation, Bibliothèque et Archives Canada, C-007885, MIKAN 2963451. Licence : image du domaine public."] },
    { id: "ec-s3-d3", title: "Document 3", layout: "text-only",
      text: "« [Elle] promettra [de] faire passer au dit pays de la Nouvelle-France, deux à trois cents hommes de tous métiers dès l'année prochaine [...], et pendant les années suivantes en augmenter le nombre jusqu'à quatre mille de l'un et l'autre sexe, dans quinze ans prochainement venant, et qui finiront en décembre, [...] ; les y loger, nourrir et entretenir de toutes choses généralement quelconques, nécessaires à la vie pendant trois ans seulement [...]. »",
      sources: ["Source du texte : La charte de la Compagnie des Cent-Associés (1627) dans Raymond Bédard et Jean-François Cardin, Le Québec, une histoire à suivre... Des premiers occupants au changement d'empire, Éditions Grand Duc, Québec, 2007, p. 84."] },
    { id: "ec-s3-d4", title: "Document 4", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-situer-3/doc4.png", imageWidthCm: 9,
      sources: ["Source de l'image : Eleanor Fortescue Brickdale, L'arrivée des Filles du Roy en 1667 (avant 1927). Bibliothèque et Archives Canada, C-020126. Image du domaine public."] }
  ],

  // ===== P2 — Différences et similitudes — Q6 : censitaire vs seigneur =====
  'evolution-coloniale-differences-5': [
    { id: "ec-d5-d1", title: "Document 1", layout: "text-only",
      text: "« Ainsi, le seigneur perçoit annuellement le cens, une redevance plutôt symbolique d'origine féodale qui donne leur nom à la censive — la terre sur laquelle porte le cens — et au censitaire — le propriétaire de cette terre. Une rente non négligeable versée en argent ou en nature est également perçue en même temps que le cens. »",
      sources: ["Source du texte : Alain Laberge, « La seigneurie : milieu de vie des anciens Canadiens », Cap-aux-Diamants, no 58, 1999, p. 11."] },
    { id: "ec-d5-d2", title: "Document 2", layout: "text-only",
      text: "Le seigneur reçoit un fief afin de favoriser le peuplement de la Nouvelle-France. Si un paysan lui demande une terre, il doit la lui concéder.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== P2 — Liens de causalité — Q7 : produits européens, rivalité, guerres Hurons/Iroquois =====
  'evolution-coloniale-causalite-3': [
    { id: "ec-c3-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-causalite-3/doc1.png", imageWidthCm: 6,
      sources: ["Source de l'image : Charles William Jefferys, Traiteur de pelleteries indien, 1785. Bibliothèque et Archives Canada, C-0733431, MIKAN 2899012. Licence : image du domaine public."] },
    { id: "ec-c3-d2", title: "Document 2", layout: "text-only",
      text: "« À partir de 1608, les Hurons dominent les échanges avec les Européens. Samuel de Champlain établit une alliance avec eux pour s'assurer d'une mainmise sur ce commerce. Cette relation permet aux Hurons de s'approprier un grand nombre de marchandises européennes. L'entente conclue avec les Hurons-Wendats entraîne l'expansion du réseau de traite des fourrures vers l'ouest. La prospérité des Hurons suscite la convoitise des Iroquois qui souhaitent s'approprier ce commerce. »",
      sources: ["Source du texte : Histori.ca, « 1608 : Les Hurons, premiers alliés des Français », La cyberligne du temps, en ligne."] },
    { id: "ec-c3-d3", title: "Document 3", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-causalite-3/doc3.png", imageWidthCm: 9,
      sources: ["Source de l'image : Joseph Légaré, [...] Hurons [...] Iroquois, Musée national des beaux-arts du Québec, 1957.204."] }
  ],

  // ===== P2 — Situer dans le temps — Q8 : ordre chronologique guerre de la Conquête =====
  'evolution-coloniale-situer-4': [
    { id: "ec-s4-d1", title: "Document 1", layout: "text-only",
      text: "Forces en présence sur le champ de bataille des Plaines d'Abraham : du côté des forces françaises, 2 000 troupes régulières, 600 Canadiens incorporés dans les rangs des troupes régulières et 1 800 miliciens et Autochtones, pour un total de 4 400 hommes ; du côté des forces britanniques, 4 426 troupes régulières.",
      sources: ["Source du texte : André Charbonneau, « Québec, ville assiégée », dans Serge Bernier et al., Québec, ville militaire (1608-2008), Montréal, Art Global, 2008, p. 143, tiré de www.ccbn.gc.ca."] },
    { id: "ec-s4-d2", title: "Document 2", layout: "text-only",
      text: "« Cette vallée, couloir naturel entre le Canada et la Louisiane, est nécessaire à l'expansion des colonies françaises. Elle est aussi importante pour les colonies anglaises, surtout la Virginie, qui veut se déverser sur cette région. Les Virginiens ne peuvent accepter que les Français fortifient cette région dont ils revendiquent la propriété. Un jeune officier, George Washington, reçoit l'ordre d'y construire un fort [...] Les coloniaux anglais (rencontre les français) ouvrent le feu et (un officier français) ainsi que 9 de ses compagnons sont tués. »",
      sources: ["Source du texte : Jacques Lacoursière, Jean Provencher, Denis Vaugeois, Canada, Québec, Sillery, Septentrion, 2001, p. 129."] },
    { id: "ec-s4-d3", title: "Document 3", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-situer-4/doc3.png", imageWidthCm: 8,
      sources: ["Source de l'image : Charles William Jefferys, Lecture de l'ordonnance d'expulsion des Acadiens dans l'église de Parish à Grand Pré, 1755 (1920). Bibliothèque et Archives Canada, C-073709, MIKAN 2897199. Licence : image du domaine public."] },
    { id: "ec-s4-d4", title: "Document 4", layout: "text-only",
      text: "« Dans la métropole française, on croit la forteresse [de Louisbourg] imprenable. Elle a coûté si cher ! On croit aussi qu'elle est une protection efficace pour tous les coins du golfe Saint-Laurent. Et pourtant (...) la place est très vulnérable... inachevée... la garnison mal payée, mal entretenue avec peu de munitions. Après 21 jours de siège, la forteresse se rend. La route vers Québec par la mer et le fleuve est libre ! »",
      sources: ["Source du texte : Jacques Lacoursière, Jean Provencher, Denis Vaugeois, Canada, Québec, Sillery, Septentrion, 2001, p. 138."] }
  ],

  // ===== P2 — Situer dans le temps — Avant/après la Grande Paix de Montréal, 4 docs (Familiarisation Q4) =====
  // Renumérotation depuis le PDF Familiarisation (docs source 5, 6, 7, 8 → Doc 1, 2, 3, 4). Ordre source conservé.
  // Avant : Doc 1 (Vimont, attaques iroquoises mi-17e) et Doc 4 (Officier Carignan-Salières, vers 1666).
  // Après : Doc 2 (commerce sécuritaire 1re moitié 18e siècle) et Doc 3 (siège Fort William-Henry, 1757).
  'evolution-coloniale-situer-5': [
    { id: "ec-s5-d1", title: "Document 1", layout: "text-only",
      text: "« Un Iroquois se tiendra deux ou trois jours sans manger, derrière une souche, à cinquante pas de votre maison pour massacrer le premier qui tombera dans ses embûches. S'il est découvert, le bois lui sert d'asile [...]. Contre une poussée iroquoise, quelle résistance opposeront [...] trois cents habitants? »",
      sources: ["Source du texte : Barthélémy Vimont, Relation de ce qui s'est passé de plus remarquable en la Nouvelle-France…, cité par Léo-Paul Desrosiers, Iroquoisie, Sillery, Septentrion, 1998, vol. 1."] },
    { id: "ec-s5-d2", title: "Document 2", layout: "text-only",
      text: "Dans la première moitié du 18e siècle, le commerce des fourrures reprend de manière sécuritaire, tout comme les expéditions de découverte du territoire. L'expansion française à l'intérieur du continent est grandement facilitée, ce qui renforce la position coloniale de la France. Les missionnaires jésuites recommencent leurs activités d'évangélisation des Autochtones dans la région des Grands Lacs.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "ec-s5-d3", title: "Document 3", layout: "text-only",
      text: "Lors du siège de Fort William-Henry, au sud du lac George, les alliés autochtones du marquis de Montcalm lui disent :\n\n« Mon père, tu as apporté dans ces lieux l'art de la guerre de ce monde qui est au-delà du grand lac; nous savons que dans cet art tu es un grand maître, mais pour la science et la ruse des découvertes, pour la connaissance de ces bois et la façon d'y faire la guerre nous l'emportons sur toi. Consulte-nous et tu t'en trouveras bien. »",
      sources: ["Source du texte : P. Whitney Lackenbauer et al., Les Autochtones et l'expérience militaire canadienne, chapitre 2, Le Centre de recherche en histoire de la Direction – Histoire et patrimoine, 2010."] },
    { id: "ec-s5-d4", title: "Document 4", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-situer-5/doc4.png", imageWidthCm: 6,
      sources: ["Source de l'image : R. Roserwarne d'après L. Rousselot, Officier du Régiment de Carignan-Salières (vers 1960). Bibliothèque et Archives Canada, C-010368, MIKAN 2896020. Licence : Gouvernement du Canada."] }
  ],

  // ===== P2 — Établir des faits — Fonction commerciale des villes en Nouvelle-France (Familiarisation Q5) =====
  // Renumérotation depuis le PDF Familiarisation (doc source 11 → Doc 1).
  'evolution-coloniale-faits-3': [
    { id: "ec-f3-d1", title: "Document 1", layout: "text-only",
      text: "« Le marché de Montréal se tient chaque vendredi, lorsque les paysans des alentours y apportent des denrées alimentaires et d'autres objets à vendre et, en retour, achètent en ville certaines choses dont ils ont besoin. [...] Ceux qui n'ont ni ferme, ni élevage d'où ils pourraient tirer des produits frais, doivent donc se procurer ce jour-là ce dont ils ont besoin, sous peine d'avoir à en souffrir au long de la semaine qui suit. »",
      sources: ["Source du texte : Pehr Kalm, Voyage de Pehr Kalm dans l'Amérique septentrionale (1749), cité par Allan Greer, Brève histoire des peuples en Nouvelle-France, Montréal, Boréal, 1998, p. 70-71."] }
  ],

  // ===== P2 — Changements/continuités — Politique coloniale après 1663 (Familiarisation Q6) =====
  // Renumérotation depuis le PDF Familiarisation (docs source 10 + 13 → Doc 1, Doc 2).
  // Doc 1 (Caroline Masse) appuie la continuité mercantiliste; Doc 2 (graphique population) appuie le changement des mesures de peuplement.
  'evolution-coloniale-changements-2': [
    { id: "ec-cc2-d1", title: "Document 1", layout: "text-only",
      text: "« Au cours des 17e et 18e siècles, le commerce de la fourrure en Nouvelle-France représente jusqu'à 70 % de ses exportations commerciales [vers la métropole]. Ce commerce est le monopole de compagnies qui se réservent le droit d'exportation du castor [...]. »",
      sources: ["Source du texte : Caroline Masse, Nouvelle-France (1600-1763), Musée McCord, en ligne."] },
    { id: "ec-cc2-d2", title: "Document 2 : Population en Nouvelle-France de 1608 à 1760", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-changements-2/doc2.png", imageWidthCm: 13,
      sources: ["Source de l'image : Graphique du Récit national de l'univers social, à partir des données de Statistiques historiques du Canada, « Recensements du Canada, 1665-1871 », en ligne. Licence : Creative Commons (BY-NC-SA)."] }
  ],

  // ===== P2 — Établir des faits — Commerce triangulaire (Familiarisation Q7) =====
  // Renumérotation depuis le PDF Familiarisation (doc source 12 → Doc 1).
  'evolution-coloniale-faits-4': [
    { id: "ec-f4-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-faits-4/doc1.png", imageWidthCm: 11,
      sources: ["Source de l'image : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] }
  ],

  // ===== P2 — Différences/similitudes — Communautés religieuses masculines vs féminines (Familiarisation Q8) =====
  // Renumérotation depuis le PDF Familiarisation (docs source 9 + 14 → Doc 1, Doc 2).
  // Énoncé fam dans le cahier de l'élève : « Dégagez une similitude... » (corrigé identique au cahier).
  'evolution-coloniale-differences-6': [
    { id: "ec-d6-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/evolution-coloniale-differences-6/doc1.png", imageWidthCm: 9,
      sources: ["Source de l'image : Charles W. Jefferys, Un jésuite prêchant aux Autochtones (1934), Bibliothèque et Archives Canada, C-005855, MIKAN 2955874. Licence : image du domaine public."] },
    { id: "ec-d6-d2", title: "Document 2", layout: "text-only",
      text: "« [Les ursulines] seront tenues à instruire les petites filles sauvages de la Nouvelle-France en la connaissance de la religion catholique [...]. Leur apprendre à lire et si bon leur semble à écrire, leur apprendre aussi le catéchisme et généralement tout ce qui est nécessaire à savoir pour une bonne chrétienne [...]. »",
      sources: ["Source du texte : « Acte de fondation du couvent des ursulines de Québec (1639) », cité dans Claire Gourdeau, Les délices de nos coeurs. Marie de l'Incarnation et ses pensionnaires amérindiennes (1639-1672), Sillery, Septentrion, 1994, p. 53."] }
  ],

  // ===== P3 — Dégager des différences et des similitudes — Convergence d'historiens =====
  // Chaque point de vue d'historien est dans un document distinct (un acteur = un document).
  'conquete-differences-1': [
    { id: "cq-d1-d1", title: "Document 1 : Michel Brunet (1966)", layout: "text-only",
      text: "« On calcule qu'au moins deux mille Canadiens quittèrent leur pays natal durant les dix années qui suivirent la capitulation de Montréal. [...] Pour la masse de la population canadienne, il n'était pas question d'émigrer. »",
      sources: ["Source : Michel BRUNET, Les Canadiens et les débuts de la domination britannique, 1760-1791, Ottawa, Société historique du Canada, 1966, p. 6. (Coll. Brochures historiques; no 13)."] },
    { id: "cq-d1-d2", title: "Document 2 : Robert Larin (2009)", layout: "text-only",
      text: "« [...] environ 4000 Canadiens ont émigré en France entre 1755 et 1770, soit environ 5 % de la population de la vallée du Saint-Laurent [...] »",
      sources: ["Source : Robert LARIN, « L'exode de la Conquête », Cap-aux-Diamants : la revue d'histoire du Québec, no 99, septembre 2009, p. 41."] }
  ],

  // ===== P3 — Causes et conséquences — Acte de Québec =====
  'conquete-causes-1': [
    { id: "cq-c1-d1", title: "Document 1", layout: "text-only",
      text: "« Les violentes rébellions qui commencent à secouer les Treize colonies à la même époque donnent plus de poids à la position de Guy Carleton. En effet, la Grande-Bretagne craint qu'une approche trop autoritaire pousse les Canadiens à se révolter et à joindre les mouvements de protestation des Anglo-Américains. »",
      sources: ["Source : Ève BERNIER CORMIER et autres, Chroniques du Québec et du Canada : des origines à 1840, manuel de l'élève, histoire du Québec et du Canada, 3e secondaire, Montréal, ERPI, 2016, p. 259."] },
    { id: "cq-c1-d2", title: "Document 2", layout: "text-only",
      text: "« L'application des lois civiles françaises, qui garantit [aux seigneurs] leurs droits seigneuriaux, leur rend leurs anciens privilèges, par exemple l'imposition du cens, des rentes et des corvées. De plus, l'abolition du serment du Test leur permet, tout comme aux autres membres de l'élite canadienne, d'accéder à des postes dans l'administration de la colonie. »",
      sources: ["Source : Julie CHARETTE et autres, Périodes : histoire du Québec et du Canada, des origines à 1840, manuel de l'élève, 3e secondaire, Anjou, Les Éditions CEC, 2016, p. 295."] }
  ],

  // ============================================================
  //   P3 — RÉCIT 1 : Du régime militaire au gouvernement civil
  //   3 questions : causes-2 / differences-2 / situer-1
  // ============================================================

  // ===== P3 — Causes et conséquences — Q1 R1 : 3 conséquences du changement de régime =====
  'conquete-causes-2': [
    { id: "cq-c2-d1", title: "Document 1 : Le sort de la population", layout: "text-only",
      text: "« Les articles de la capitulation [de Montréal] accordaient à tous les habitants de la colonie le droit de retourner en France. Quelques milliers de personnes — des hauts fonctionnaires et des militaires pour la plupart, dont la carrière était liée à l'Empire français, et des marchands, représentants de compagnies métropolitaines — quittèrent la colonie accompagnées de leurs familles et de leurs domestiques [...]. »",
      sources: ["Source : John Dickinson et Brian Young, Brève histoire socio-économique du Québec, Québec, Septentrion, 2003, p. 70-71."] },
    { id: "cq-c2-d2", title: "Document 2 : Le premier journal publié dans la colonie", layout: "text-only",
      text: "« L'imprimerie n'avait pu se développer sous le régime français à cause d'un interdit des autorités. Peu de temps après la Conquête, deux imprimeurs anglais vivant à Philadelphie, William Brown et Thomas Gilmore décident de venir s'installer à Québec et fondent en 1764 le premier journal canadien, The Quebec Gazette / La Gazette de Québec. Ce journal bilingue de quatre pages a pu naître et se développer grâce à l'appui financier du gouverneur Murray et de ses successeurs qui confient au nouveau journal la tâche d'imprimer les ordonnances et des documents officiels. [...] De tendance conservatrice, La Gazette de Québec prend le parti de ne critiquer ni les autorités coloniales ni la religion. Cependant, le journal témoignera de son enthousiasme pour la Révolution française et pour les philosophes des Lumières. »",
      sources: ["Source : Fernand Harvey, « La presse périodique à Québec de 1764 à 1940 : vue d'ensemble d'un processus culturel », Les Cahiers des dix, no 58, 2004, p. 213-250, en ligne sur erudit.org."] },
    { id: "cq-c2-d3", title: "Document 3 : Le commerce des fourrures vers 1767", layout: "image-only",
      imageUrl: "assets/img/conquete-causes-2/doc3.png", imageWidthCm: 11,
      sources: [
        "Source du schéma : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA).",
        "Source des données : Fernand Ouellet, Histoire économique et sociale du Québec, 1760-1850, Montréal et Paris, Fides, 1966, p. 76-77."
      ] }
  ],

  // ===== P3 — Différences et similitudes — Q2 R1 : Gouvernement royal vs Proclamation royale =====
  'conquete-differences-2': [
    { id: "cq-d2-d1", title: "Document 1 : Gouvernement royal (1663)", layout: "image-only",
      imageUrl: "assets/img/conquete-differences-2/doc1.png", imageWidthCm: 9,
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] },
    { id: "cq-d2-d2", title: "Document 2 : Proclamation royale (1763)", layout: "image-only",
      imageUrl: "assets/img/conquete-differences-2/doc2.png", imageWidthCm: 9,
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] }
  ],

  // ===== P3 — Situer dans le temps — Q3 R1 : avant / après la Proclamation royale =====
  'conquete-situer-1': [
    { id: "cq-s1-d1", title: "Document 1 : Extrait du Traité d'Oswegatchie", layout: "text-only",
      text: "« William Johnson promet solennellement aux Sept Nations, constituées d'Oswegatchie (La Présentation), d'Akwesasne, de Kanesatake, de Kahnawake, d'Odanak, de Bécancour (Wolinak), et de Lorette, de leur assurer la possession de leurs terres et le libre exercice de la religion catholique. Les anciens alliés de la France promettent de rester neutres durant le reste de la guerre en échange de la promesse de ne pas être traités comme des ennemis par la suite. Les termes de l'accord sont confirmés lors d'une réunion spéciale à Kahnawake, les 15 et 16 septembre 1760 [...]. »",
      sources: ["Source : Cornelius J. Jaenen, « Traité d'Oswegatchie », L'Encyclopédie canadienne, dernière mise à jour le 9 novembre 2020."] },
    { id: "cq-s1-d2", title: "Document 2 : Extrait d'un document signé par des Innus", layout: "text-only",
      text: "« [...] bien avant que ceux de l'autre bord [les Européens] soient venus s'emparer de ce pays, nos pères et nous avons toujours habités les terres que nous habitons aujourd'hui, les bords de la mer et la profondeur pour la chasse tant en hiver qu'en été [...] Nous lui demandons [au roi britannique] [...] qu'il ne permette pas que l'on donne ou vende nos terres à plusieurs particuliers [les colons], [car] nous avons toujours été Nation libre [...]. »",
      sources: ["Source : Claude Godefroy Coquart, « Rapport du 17 mars 1765 », dans Denis Delâge et Jean-Pierre Sawaya, Les Traités des Sept-Feux avec les Britanniques, Québec, Septentrion, 2001, p. 109-110."] }
  ],

  // ============================================================
  //   P3 — RÉCIT 2 : La société coloniale face au changement d'empire
  //   2 questions : relation-1 / causes-3
  // ============================================================

  // ===== P3 — Mettre en relation — Q1 R2 : arrivée des Loyalistes (cause + conséquence) =====
  'conquete-relation-1': [
    { id: "cq-r1-d1", title: "Document 1 : L'arrivée des Loyalistes", layout: "text-only",
      text: "« À la recherche de terres où s'établir, beaucoup de personnes demeurées loyales à la couronne britannique s'établissent ainsi au Bas-Canada, notamment dans la région de l'Outaouais, où vivent des Anishinabeg, et dans les Cantons de l'Est qu'occupent les Abénakis. Tant pour les Anishinabegs que les Abénakis, l'établissement massif de loyalistes et la création de cantons à partir de 1783 ont comme [impact] la perte d'accès aux différentes ressources qui permettaient leur subsistance (gibiers, poissons, plantes comestibles et médicinales, etc.). »",
      sources: ["Source : texte adapté de Auteur inconnu, « Luc-Antoine Pakinawatik », Algonquin-Anishinabeg Nation, et Auteur inconnu, « Histoire de la Nation », Grand conseil de la Nation Waban-Aki, pages consultées le 2 décembre 2022."] },
    { id: "cq-r1-d2", title: "Document 2 : La guerre d'indépendance américaine", layout: "text-only",
      text: "Entre 1775 et 1783, le conflit qui oppose les Treize colonies à la Grande-Bretagne pousse des milliers de Loyalistes à fuir vers le nord. En 1785, environ 60 000 Loyalistes ont quitté les États-Unis à la recherche d'une terre d'accueil britannique. Sur ce nombre, un peu plus de 6 000 s'établissent dans la Province of Quebec.",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== P3 — Causes et conséquences — Q2 R2 : pétitions des marchands britanniques =====
  'conquete-causes-3': [
    { id: "cq-c3-d1", title: "Document 1", layout: "text-only",
      text: "« Le pragmatisme de Murray souleva la fureur des marchands britanniques qui réclamèrent et obtinrent finalement son rappel. Leur colère avait été attisée par son refus de former une chambre d'assemblée, par ses rapports, fondés sur la compréhension et la cordialité, avec les seigneurs francophones, par sa tolérance envers les catholiques et par la résistance de ses fonctionnaires à appuyer leur objectif de fonder un grand empire commercial. Les marchands accusèrent l'administration, qu'ils jugeaient « vexatrice, oppressive et inconstitutionnelle », et demandèrent « les bienfaits de la liberté britannique ». »",
      sources: ["Source : John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec, Québec, Septentrion, 2009, p. 76."] },
    { id: "cq-c3-d2", title: "Document 2 : Guy Carleton", layout: "text-image",
      text: "« Successeur de Murray, sir Guy Carleton appartenait lui aussi à la même classe sociale que l'élite canadienne française, il voyait les membres de l'aristocratie cléricale et seigneuriale comme les chefs naturels d'un Canada français. Il allait de soi qu'il suivit la politique de son prédécesseur. »",
      imageUrl: "assets/img/conquete-causes-3/doc2.png", imageWidthCm: 6,
      sources: [
        "Source du texte : John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec, Québec, Septentrion, 2009, p. 76.",
        "Source de l'image : Guy Carleton, Portrait (vers 1840-90), Library of Congress, LC-USZ62-122004. Licence : domaine public."
      ] }
  ],

  // ============================================================
  //   P3 — PDF Questions courtes 1760-1791 (Q1-Q8)
  //   Source : documents.recitus.qc.ca — Questions courtes - Période de 1760 à 1791.
  //   8 questions qui complètent P3 à 7/7 OI : ajout d'Établir des faits (Q1),
  //   Changements/continuités (Q2) et Liens de causalité (Q7).
  // ============================================================

  // ===== P3 — Établir des faits — Q1 : clergé anglican avec Amherst (1759) =====
  'conquete-faits-1': [
    { id: "cq-f1-d1", title: "Document 1", layout: "text-only",
      text: "« Les premiers représentants du clergé de cette confession arrivent au Canada en 1759 avec le général Amherst, à titre d'aumôniers des forces britanniques. »",
      sources: ["Source du texte : Marie Beauchamp, [...], Les patriotes de 1837-1838, en ligne."] }
  ],

  // ===== P3 — Changements et continuités — Q2 : changement politique en 1763 (Murray) =====
  'conquete-changements-1': [
    { id: "cq-cc1-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/conquete-changements-1/doc1.png", imageWidthCm: 6,
      sources: ["Source de l'image : Artiste inconnu, James Murray (1770), Bibliothèque et Archives Canada, C-002834, MIKAN 2895908. Licence : image du domaine public."] }
  ],

  // ===== P3 — Causes et conséquences — Q3 : cause politique de la révolte de Pontiac =====
  'conquete-causes-4': [
    { id: "cq-c4-d1", title: "Document 1", layout: "text-only",
      text: "« Les Français ont appris les langues et les coutumes des autochtones et se sont mariés avec eux, une attitude qui contraste fortement avec la condescendance du général Jeffery Amherst, le commandant en chef britannique. Amherst vend les terres autochtones de façon inconsidérée, écrase toute opposition et interdit la présentation de cadeaux, geste qui revêt une importance symbolique pour les Premières Nations. »",
      sources: ["Source du texte : James H. Marsh, « La guerre [...] », Encyclopédie canadienne, en ligne."] }
  ],

  // ===== P3 — Situer dans l'espace — Q4 : carte A/B/C/D Proclamation royale =====
  'conquete-situer-2': [
    { id: "cq-s2-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/conquete-situer-2/doc1.png", imageWidthCm: 11,
      sources: ["Source de l'image : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] }
  ],

  // ===== P3 — Différences et similitudes — Q5 : désaccord Carleton vs marchands de Québec =====
  // Un acteur = un document. Lettre de Carleton (1768) et pétition des marchands (1764) sont
  // splittés comme les deux points de vue de la question source.
  'conquete-differences-3': [
    { id: "cq-d3-d1", title: "Document 1 : Lettre de Guy Carleton à Shelburne (1768)", layout: "text-only",
      text: "« [...] la forme de gouvernement britannique implantée sur ce continent ne produira[it] jamais les mêmes résultats qu'en Angleterre [...] la situation du Canada était telle, qu'après avoir étudié ce projet maintes fois, [je n'ai] encore pu élaborer un plan qui ne présentait pas quelque inconvénient et quelque danger. »",
      sources: ["Source du texte : Guy Carleton, Lettre à Shelburne (1768), cité dans biographie.ca, en ligne."] },
    { id: "cq-d3-d2", title: "Document 2 : Pétition des commerçants de Québec (octobre 1764)", layout: "text-only",
      text: "« [...] Nous demandons humblement qu'il plaise à Votre Majesté d'ordonner l'établissement d'une Chambre de représentants dans cette province comme dans toutes les autres colonies de Votre Majesté. Il s'y trouve en effet un nombre plus que suffisant de protestants loyaux et intéressés, à l'exclusion des officiers militaires, pour former une Assemblée législative compétente et respectable [...] »",
      sources: ["Source du texte : Sam Sills et al., Pétition des commerçants de Québec / Petition of the Quebec traders (octobre 1764), cité dans Adam Shortt et Arthur G. Doughty (éd.), Documents relatifs à l'histoire constitutionnelle du Canada, 1759-1791, vol. 1, 1re partie, Ottawa, T. Mulvey, 1921, p. 204."] }
  ],

  // ===== P3 — Mettre en relation — Q6 : associer document à période (Régime militaire / Proclamation / Acte Q) =====
  // Ordre dans la section : doc 1 = Acte de Québec (texte), doc 2 = Régime militaire (image), doc 3 = Proclamation royale (schéma).
  // Renumérotation depuis le PDF source (qui étiquetait ces docs 8, 9, 10).
  'conquete-relation-2': [
    { id: "cq-r2-d1", title: "Document 1", layout: "text-only",
      text: "« [...] Québec redevient la capitale politique d'un territoire presque aussi étendu que celui de l'ancienne Nouvelle-France. Il englobe désormais le bassin des Grands Lacs et s'étend vers le sud jusqu'au Mississippi et la vallée de l'Ohio. Des concessions politiques sont également accordées aux Canadiens. »",
      sources: ["Source du texte : Assemblée nationale du Québec, Par ici la démocratie, en ligne."] },
    { id: "cq-r2-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/conquete-relation-2/doc2.png", imageWidthCm: 9,
      sources: ["Source de l'image : Richard Short, Vue de la maison de l'évêque et des ruines, à partir de la côte à gravir pour passer de la basse-ville à la haute-ville, Bibliothèque et Archives Canada, C-000350, MIKAN 2837627. Licence : image du domaine public."] },
    { id: "cq-r2-d3", title: "Document 3", layout: "image-only",
      imageUrl: "assets/img/conquete-relation-2/doc3.png", imageWidthCm: 9,
      sources: ["Source de l'image : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== P3 — Liens de causalité — Q7 : guerre d'indépendance américaine → Loyalistes =====
  // Renumérotation depuis le PDF source (docs 2, 3, 11) selon l'ordre causal des bullets :
  // (1) volonté des Treize colonies → (2) guerre 1776-1783 → (3) impact sur Province of Quebec.
  'conquete-causalite-1': [
    { id: "cq-ca1-d1", title: "Document 1", layout: "text-only",
      text: "« En conséquence, nous, les représentants des États-Unis d'Amérique […] publions et déclarons solennellement au nom et par l'autorité du bon peuple de ces Colonies, que ces Colonies unies sont et ont le droit d'être des États libres et indépendants; qu'elles sont dégagées de toute obéissance envers la Couronne de la Grande-Bretagne; que tout lien politique entre elles et l'État de la Grande-Bretagne est et doit être entièrement dissous; […] »",
      sources: ["Source du texte : Thomas Jefferson, [...], Traduction française, 1776, Université Laval, en ligne."] },
    { id: "cq-ca1-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/conquete-causalite-1/doc2.png", imageWidthCm: 7,
      sources: ["Source de l'image : A.M. Willard, The spirit of '76, Wikimédia commons, en ligne. Licence : domaine public."] },
    { id: "cq-ca1-d3", title: "Document 3", layout: "image-only",
      imageUrl: "assets/img/conquete-causalite-1/doc3.png", imageWidthCm: 11,
      sources: ["Source de l'image : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] }
  ],

  // ===== P3 — Situer dans le temps — Q8 : avant/après l'Acte de Québec =====
  // Renumérotation depuis le PDF source (docs 13, 14, 15, 16) — ordre conservé.
  'conquete-situer-3': [
    { id: "cq-s3-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/conquete-situer-3/doc1.png", imageWidthCm: 9,
      sources: ["Source de l'image : Service national du RÉCIT de l'univers social. Licence : Creative Commons (BY-NC-SA)."] },
    { id: "cq-s3-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/conquete-situer-3/doc2.png", imageWidthCm: 9,
      sources: ["Source de l'image : Nathaniel Currier, Boston Tea Party, Wikimedia Commons. Licence : image du domaine public."] },
    { id: "cq-s3-d3", title: "Document 3", layout: "text-only",
      text: "« Définition : ensemble de serments de fidélité à la couronne britannique comportant des déclarations contre le pape et contre la transsubstantiation [transformation du pain et du vin en la substance du corps et du sang de Jésus-Christ pendant la communion] et ayant pour objet d'exclure les catholiques du service civil et militaire. »",
      sources: ["Source du texte : « Serment du Test », Encyclopédie du parlementarisme québécois (en ligne), Assemblée nationale du Québec, 9 septembre 2014."] },
    { id: "cq-s3-d4", title: "Document 4", layout: "text-only",
      text: "Le Congrès des Treize colonies décide d'envahir la Province of Quebec. Sous l'influence de l'Église catholique, les Canadiens ont décliné l'invitation des Américains à se joindre à leur rébellion contre la métropole britannique. Pour les insurgés des Treize colonies, la présence d'une colonie entièrement contrôlée par les Britanniques au nord constitue une menace permanente.",
      sources: ["Source du texte : Service national du RÉCIT de l'univers social. Licence : Creative Commons."] }
  ],

  // ===== P3 — Mettre en relation — 3 groupes sociaux après la Conquête (Familiarisation Q9) =====
  // Renumérotation depuis le PDF Familiarisation (docs source 15, 16, 17 → Doc 1, 2, 3). Ordre source conservé.
  // Doc 1 = marchands anglophones (PDF 15) ; Doc 2 = administrateurs britanniques (PDF 16) ; Doc 3 = Autochtones (PDF 17).
  'conquete-relation-3': [
    { id: "cq-r3-d1", title: "Document 1", layout: "text-only",
      text: "Les membres de ce groupe, principalement établis à Montréal, veulent que la Proclamation royale soit appliquée à la lettre et désirent une Chambre d'assemblée où ils seraient les seuls à siéger.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "cq-r3-d2", title: "Document 2", layout: "text-only",
      text: "Les membres de ce groupe veulent se montrer conciliants envers les Canadiens français.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "cq-r3-d3", title: "Document 3", layout: "text-only",
      text: "Les membres de ce groupe n'acceptent pas que le roi de France ait cédé leurs territoires à l'Angleterre et décident de se révolter pour récupérer leurs terres dans la région des Grands Lacs.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== P3 — Causes/conséquences — Deux conséquences de l'Acte de Québec (Familiarisation Q10) =====
  // Renumérotation depuis le PDF Familiarisation (docs source 22 + 24 → Doc 1, Doc 2).
  // Doc 1 = texte Acte de Québec (religion + dîme) ; Doc 2 = carte territoire étendu.
  'conquete-causes-5': [
    { id: "cq-c5-d1", title: "Document 1", layout: "text-only",
      text: "« [...] Il est par les présentes déclaré que les sujets de Sa Majesté professant la religion de l'Église de Rome, de et dans ladite province de Québec, peuvent jouir du libre exercice de la religion de l'Église de Rome [...] et que le clergé de la dite Église peut conserver et percevoir des dus et redevances (la dîme). »",
      sources: ["Source du texte : Extraits de l'Acte de Québec (1774), cité dans Jacques Lacoursière, Histoire populaire du Québec, tome 1 : Des origines à 1791, Sillery, Septentrion, 1995, p. 386-387."] },
    { id: "cq-c5-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/conquete-causes-5/doc2.png", imageWidthCm: 9,
      sources: ["Source de la carte : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] }
  ],

  // ===== P3 — Causalité — Lettre du congrès → réponse des Canadiens → invasion (Familiarisation Q11) =====
  // Renumérotation depuis le PDF Familiarisation (docs source 18, 19, 21 → Doc 1, 2, 3). Ordre source conservé.
  // Doc 1 = rapport Brown (refus des Canadiens) ; Doc 2 = carte routes invasion ; Doc 3 = lettre Dickinson (invitation).
  // Le doc 20 (carte Acte constitutionnel) du dossier source n'est pas utilisé ici (Q12 fam non intégrée).
  'conquete-causalite-2': [
    { id: "cq-ca2-d1", title: "Document 1", layout: "text-only",
      text: "« Le colonel [américain] John Brown [...] revient à Boston avec un rapport pessimiste : les Canadiens [français], déclare-t-il, n'enverront pas de délégués au prochain Congrès général ; quant aux [Canadiens] anglais, ils hésitent à se joindre aux revendications américaines, pour ne point perdre les avantages de leur commerce avec la métropole. »",
      sources: ["Source du texte : Marcel Trudel, La tentation américaine, Sillery, Septentrion, 2006, p. 46."] },
    { id: "cq-ca2-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/conquete-causalite-2/doc2.png", imageWidthCm: 9,
      sources: ["Source de la carte : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] },
    { id: "cq-ca2-d3", title: "Document 3", layout: "text-only",
      text: "« Vous n'êtes qu'un très-petit nombre en comparaison de ceux qui vous invitent à bras ouverts à vous joindre à eux ; un instant de réflexion doit vous convaincre qu'il convient mieux à vos intérêts et à votre bonheur de vous procurer l'amitié constante des peuples de l'Amérique septentrionale, que de les rendre vos implacables ennemis. Les outrages que souffre la ville de Boston ont alarmé et uni ensemble toutes les colonies, depuis la Nouvelle-Écosse jusqu'à la Géorgie, votre province est le seul anneau qui manque pour compléter la chaîne forte et éclatante de leur union. [...] »",
      sources: ["Source du texte : John Dickinson, Lettre adressée aux habitants de la province de Québec, ci-devant le Canada de la part du Congrès général de l'Amérique septentrionale, tenu à Philadelphie (26 octobre 1774), Pierre Eugène de Simitière (trad.), en ligne."] }
  ],

  // ============================================================
  //   P4 — PDF Questions courtes 1791-1840 (Q1-Q7)
  //   Source : documents.recitus.qc.ca — Questions courtes - Période de 1791 à 1840.
  //   7 questions qui amènent P4 de 1/7 à 7/7 OI.
  // ============================================================

  // ===== P4 — Établir des faits — Q1 : apathie des Canadiens à la guerre de 1812 =====
  'revendications-faits-1': [
    { id: "rv-f1-d1", title: "Document 1", layout: "text-only",
      text: "« En juillet 1812, [le commandant de l'armée britannique] Brock écrivait : \u201cMa situation est des plus critiques non pas du fait des agissements possibles de l'ennemi, mais à cause des mauvaises dispositions du peuple. [...]\u201d Brock se rendait compte qu'une guerre défensive ne sauverait pas le Haut-Canada : une victoire immédiate était nécessaire pour secouer l'apathie du peuple. »",
      sources: ["Source du texte : Ramsay Cook, Le Canada : étude moderne, Toronto/Vancouver, Clarke, Irwin & Company Limited, 1981, p. 25."] }
  ],

  // ===== P4 — Changements et continuités — Q2 : population anglophone qui s'accroît =====
  'revendications-changements-1': [
    { id: "rv-cc1-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/revendications-changements-1/doc1.png", imageWidthCm: 16,
      sources: ["Source des graphiques : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] }
  ],

  // ===== P4 — Causes et conséquences — Q3 : cause de propagation des épidémies =====
  'revendications-causes-1': [
    { id: "rv-c1-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/revendications-causes-1/doc1.png", imageWidthCm: 16,
      sources: ["Source de l'image : « Un bateau d'immigrants - L'intérieur des cabines », The Illustrated London News (1851), Bibliothèque et Archives Canada, C-006556, MIKAN 2956054. Licence : image du domaine public."] }
  ],

  // ===== P4 — Différences et similitudes — Q4 : désaccord Durham vs Le Canadien sur l'Union =====
  // Un acteur = un document. Durham (1839) et le journal Le Canadien (1838) sont splittés
  // comme les deux points de vue de la question source.
  'revendications-differences-1': [
    { id: "rv-d1-d1", title: "Document 1 : Lord Durham (1839)", layout: "text-only",
      text: "« Si l'on estime exactement la population du Haut-Canada à 400 000 âmes, les Anglais du Bas-Canada à 150 000 et les Français à 450 000, l'union des deux provinces ne donnerait pas seulement une majorité nettement anglaise, mais une majorité accrue annuellement par une immigration anglaise ; et je ne doute guère que les Français, une fois placés en minorité par suite du cours naturel des événements abandonneraient leurs vaines espérances de nationalité. »",
      sources: ["Source du texte : Lord Durham, Rapport sur les affaires de l'Amérique du Nord britannique (1839), traduit et reproduit sous le titre Rapport Durham, Montréal, Les Éditions Sainte-Marie, 1969."] },
    { id: "rv-d1-d2", title: "Document 2 : Le Canadien (8 juin 1838)", layout: "text-only",
      text: "« Les Anglais et les Français ne pourront jamais s'accorder, disent-ils [...]. En conséquence, disent-ils, prenons le Haut-Canada qui est tout Anglais, et le Bas-Canada, qui est tout Français, \u201cformons une Union\u201d des deux [...]. Mais les Avocats de l'Union ont une arrière-pensée : ils pensent que [les anglophones] des deux noieraient [les francophones]. Les événements récents ne leur ont-ils pas fourni matière à des doutes sur ce point? N'est-il pas aussi clair que l'Union en question pourrait produire l'Union de deux partis mécontents, qui pourraient noyer les Unionistes eux-mêmes? »",
      sources: ["Source du texte : Journal Le Canadien, 8 juin 1838, p. 2, en ligne sur Bibliothèque et Archives nationales du Québec."] }
  ],

  // ===== P4 — Mettre en relation — Q5 : associer document à idéologie politique =====
  // Renumérotation depuis le PDF source : doc 1 = Républicanisme (était doc 7), doc 2 = Nationalisme canadien (était doc 10).
  'revendications-relation-1': [
    { id: "rv-r1-d1", title: "Document 1", layout: "text-only",
      text: "« Pour la première fois, l'Assemblée réclamait que le gouvernement métropolitain donne au peuple du Bas-Canada le droit de choisir lui-même ses institutions \u201cpar le moyen de délégués librement et indistinctement choisis pour cet objet par toutes les classes et dans toutes les classes de la population\u201d. »",
      sources: ["Source du texte : Journaux de l'Assemblée législative du Bas-Canada (JALBC), 4, vol. 2, 1832-33, p. 307-308, 570-575, cités dans Louis-Georges Harvey, « Les Patriotes …», Bulletin d'histoire politique, vol. 17, no 3, en ligne."] },
    { id: "rv-r1-d2", title: "Document 2", layout: "text-only",
      text: "« Il n'y a pas, que nous sachions, de peuple français en cette province, mais bien un peuple canadien, un peuple religieux et moral, un peuple loyal et amoureux de la liberté en même temps, et capable d'en jouir; ce peuple n'est ni Français, ni Anglais, ni Écossais, ni Irlandais, ni Yanké, il est Canadien. »",
      sources: ["Source du texte : Journal Le Canadien, 21 mai 1831, p. 2, en ligne sur Bibliothèque et Archives nationales du Québec."] }
  ],

  // ===== P4 — Liens de causalité — Q6 : coût du commerce des fourrures =====
  // Renumérotation : doc 1 = Vallerand (était doc 6), doc 2 = carte 1780 (gauche de l'ex-composite),
  // doc 3 = carte 1820 (droite de l'ex-composite), doc 4 = Hudson Bay Company (était doc 13).
  // Les deux cartes sont splittées (un acteur/un état temporel = un document) pour permettre un
  // affichage individuel plus grand (le composite côte à côte forçait chaque carte à ~7 cm).
  'revendications-causalite-1': [
    { id: "rv-ca1-d1", title: "Document 1", layout: "text-only",
      text: "« Alors que les profits baissent, le climat concurrentiel provoque une hausse des frais d'exploitation; de plus, l'épuisement progressif des ressources en castors oblige les exploitants à s'éloigner de plus en plus de leurs centres de ralliement, ce qui augmente sans cesse les coûts de transport. »",
      sources: ["Source du texte : Noël Vallerand et Robert Lahaise, L'Amérique du Nord britannique, 1760-1867, Montréal, Kébékédit, 1974, p. 73."] },
    { id: "rv-ca1-d2", title: "Document 2 : Territoire de traite des castors vers 1780", layout: "image-only",
      imageUrl: "assets/img/revendications-causalite-1/doc2.png", imageWidthCm: 14,
      sources: ["Source de la carte : Concurrence et réorganisation de 1760 à 1825, L'Atlas canadien en ligne. La zone rouge indique les territoires où les castors sont encore classifiés abondants."] },
    { id: "rv-ca1-d3", title: "Document 3 : Territoire de traite des castors vers 1820", layout: "image-only",
      imageUrl: "assets/img/revendications-causalite-1/doc3.png", imageWidthCm: 14,
      sources: ["Source de la carte : Concurrence et réorganisation de 1760 à 1825, L'Atlas canadien en ligne. La zone rouge indique les territoires où les castors sont encore classifiés abondants."] },
    { id: "rv-ca1-d4", title: "Document 4", layout: "text-only",
      text: "« [Les deux compagnies] mettent tous leurs efforts à se faire concurrence, si bien que ni l'une ni l'autre ne progresse vraiment. [La Compagnie de la Baie d'Hudson] ayant accès à d'importantes ressources financières, elle peut supporter les temps durs, attendre et voir la [Compagnie du Nord Ouest] épuiser ses ressources. Les dirigeants des deux rivales savent qu'il faut trouver une solution et amorcent les discussions en vue d'une fusion. »",
      sources: ["Source du texte : Hudson Bay Company, « Commerce des fourrures : Compagnie du Nord Ouest », Notre histoire, en ligne."] }
  ],

  // ===== P4 — Situer dans le temps — Q7 : avant/après les résolutions Russell (1837) =====
  // Renumérotation : doc 1 = 92 résolutions (était doc 2, Avant), doc 2 = Nelson (était doc 3, Après),
  // doc 3 = Crise des subsides (était doc 4, Avant), doc 4 = Attaque St-Charles (était doc 5, Après).
  // v1.18.4 — Dates retirées des titres pour ne pas trahir la réponse à cette question de situer.
  'revendications-situer-2': [
    { id: "rv-s2-d1", title: "Document 1 : Les 92 résolutions", layout: "image-only",
      imageUrl: "assets/img/revendications-situer-2/doc1.png", imageWidthCm: 16,
      sources: ["Source du tableau : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "rv-s2-d2", title: "Document 2 : Déclaration d'indépendance du Bas-Canada", layout: "text-only",
      text: "Alors qu'il est réfugié aux États-Unis, Robert Nelson rentre au Bas-Canada pour un court moment afin d'en déclarer l'indépendance. Voici un extrait de cette déclaration : « DÉCLARONS SOLENNELLEMENT Qu'à compter de ce jour et à l'avenir, le peuple du Canada est absous de toute allégeance avec la Grande-Bretagne, et que la connexion politique entre cette puissance et le Bas-Canada est maintenant dissoute. Que le gouvernement du Bas-Canada doit prendre la forme d'un gouvernement républicain et se déclare maintenant, de fait, république. »",
      sources: ["Source du texte : Robert Nelson, Déclaration d'indépendance du Bas-Canada, dans Marc Chevrier, Louis-Georges Harvey et Samuel Trudeau (dir.), De la république en Amérique française, Sillery, Septentrion, 2013, p. 62-65."] },
    { id: "rv-s2-d3", title: "Document 3 : La crise des subsides au Bas-Canada", layout: "image-only",
      imageUrl: "assets/img/revendications-situer-2/doc3.png", imageWidthCm: 16,
      sources: ["Source de l'image : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "rv-s2-d4", title: "Document 4 : L'attaque contre Saint-Charles", layout: "image-only",
      imageUrl: "assets/img/revendications-situer-2/doc4.png", imageWidthCm: 11,
      sources: ["Source de l'image : Charles Beauclerk, L'attaque contre St-Charles, Bibliothèque et Archives Canada, C-000393, MIKAN 2837361. Licence : image du domaine public."] }
  ],

  // ===== P4 — Situer dans l'espace — Cartes Proclamation royale (1763) vs Acte constitutionnel (1791) =====
  // v1.18.2 — Remplacement des cartes RÉCIT basse résolution par celles de Par ici la démocratie
  // (Assemblée nationale du Québec). Bandeau de titre/année cropé pour éviter de divulguer la réponse.
  // v1.18.3 — Affichage en mode appairé (côte à côte) via le drapeau pair:true (introduit dans app.js
  // pour autoriser le pairing même avec imageWidthCm > 7). imageWidthCm:8 est plafonné naturellement
  // à ~7,73 cm (maxCmInCell en mode étroit), ce qui laisse exactement 0,5 cm de marge visible de
  // chaque côté de l'image dans la cellule de ~9,08 cm. L'encadré reste à sa taille standard.
  'revendications-situer-1': [
    { id: "rv-s1-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/revendications-situer-1/doc1.png", imageWidthCm: 8, pair: true,
      sources: ["Source de la carte : Par ici la démocratie, Assemblée nationale du Québec, « 1763 : Proclamation royale », en ligne."] },
    { id: "rv-s1-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/revendications-situer-1/doc2.png", imageWidthCm: 8, pair: true,
      sources: ["Source de la carte : Par ici la démocratie, Assemblée nationale du Québec, « 1791 : Acte constitutionnel », en ligne."] }
  ],

  // ============================================================
  //   P4 — Familiarisation épreuve 3e secondaire (Q13-Q17)
  //   Source : documents.recitus.qc.ca — Familiarisation épreuve 3e secondaire - Questions courtes.
  //   5 questions ajoutées en v1.19.0.
  // ============================================================

  // ===== P4 — Situer dans le temps (chrono) — Développement éco du Bas-Canada (Familiarisation Q13) =====
  // Renumérotation depuis le PDF Familiarisation (docs source 25, 26, 27 → Doc 1, 2, 3). Ordre source conservé.
  // Doc 1 = Buies (exploitation forestière post-blocus continental) ; Doc 2 = canal Lachine ; Doc 3 = Banque de Montréal.
  // Ordre chronologique attendu : Doc 1 → Doc 3 → Doc 2 (forêts ~1810 → banque 1817 → canal Lachine 1825).
  'revendications-situer-3': [
    { id: "rv-s3-d1", title: "Document 1", layout: "text-only",
      text: "« C'est à la suite des guerres du premier Empire et du blocus continental que Napoléon avait imposé à tous les ports de l'Europe, pour en chasser le commerce anglais, que l'on commença à s'occuper sérieusement de l'exploitation de nos forêts. Les commerçants de bois de la métropole tournèrent leur attention vers les colonies de l'Amérique britannique, et conçurent le projet de venir chercher chez nous le bois que les flottes françaises les empêchaient d'importer des pays de l'Europe septentrionale [du nord]. »",
      sources: ["Source du texte : Arthur Buies, L'Outaouais supérieur, Québec, C. Darveau, 1889, p. 65-66, en ligne."] },
    { id: "rv-s3-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/revendications-situer-3/doc2.png", imageWidthCm: 11,
      sources: ["Source de l'image : James Duncan, Le canal Lachine, Musée McCord, M984.273. Licence : Creative Commons (BY-NC-ND)."] },
    { id: "rv-s3-d3", title: "Document 3", layout: "text-only",
      text: "« L'accès au capital était crucial pour les producteurs industriels qui, en dehors de la nécessité d'avoir un lieu où effectuer leurs opérations de change, devaient investir lourdement dans les installations. [...] La Banque de Montréal fut fondée [...] pour faciliter les transactions commerciales des marchands. »",
      sources: ["Source du texte : John Dickinson et Brian Young, Brève histoire socio-économique du Québec, Québec, Septentrion, 2003, p. 203."] }
  ],

  // ===== P4 — Établir des faits — Revendication des Patriotes sur le Conseil exécutif (Familiarisation Q14) =====
  // Renumérotation depuis le PDF Familiarisation (doc source 28 → Doc 1).
  'revendications-faits-2': [
    { id: "rv-f2-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/revendications-faits-2/doc1.png", imageWidthCm: 10,
      sources: ["Source de l'organigramme : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] }
  ],

  // ===== P4 — Différences/similitudes — 3 acteurs sur la Rébellion possible des Patriotes (Familiarisation Q15) =====
  // Convention « un acteur = un document » : le Doc 29 fam (3 extraits juxtaposés) est splitté en 3 documents distincts.
  // Doc 1 = Mgr Lartigue (1837) ; Doc 2 = lord Gosford (1837) ; Doc 3 = Dr Nelson (cité par Dessaulles, 1848).
  // Note : les dates sont conservées dans les sources car l'OI ici est « différences/similitudes » (la date ne révèle pas la réponse).
  'revendications-differences-2': [
    { id: "rv-d2-d1", title: "Document 1", layout: "text-only",
      text: "« […] les pasteurs devraient faire tous leurs efforts pour rétablir la charité et l'union parmi leurs ouailles*; qu'ils devraient représenter à leurs paroissiens qu'il n'est jamais permis de se révolter contre l'autorité légitime, ni de transgresser les lois du pays […]. »\n\n* Ouailles : paroissiens du curé.",
      sources: ["Source du texte : « Discours de Mgr Lartigue, évêque de Montréal, prononcé le 25 juillet 1837 », cité dans Gilles Chaussé, « L'Église et les Patriotes », Histoire Québec, vol. 5, no 2 (novembre 1999), p. 29, en ligne."] },
    { id: "rv-d2-d2", title: "Document 2", layout: "text-only",
      text: "« J'exhorte très solennellement par ces présentes, et par l'avis du Conseil exécutif de Sa Majesté pour cette province, tous les citoyens à s'unir pour maintenir la paix et le bon ordre [...], je les exhorte à éviter toutes les assemblées d'un caractère équivoque ou dangereux, et j'enjoins [...]. »",
      sources: ["Source du texte : « Proclamation de lord Gosford, gouverneur du Bas-Canada (1837) », cité dans Gérard Filteau, Histoire des patriotes, Sillery, Septentrion, 2003, p. 286."] },
    { id: "rv-d2-d3", title: "Document 3", layout: "text-only",
      text: "« Le Dr. Nelson, qui était dans la foule, entendant [les paroles de Papineau], se hissa sur l'estrade en grimpant sur les épaules de ses voisins et dit à l'assemblée : “[...] Je prétends que le temps est arrivé de fondre nos plats et nos cuillères d'étain pour en faire des balles.” »",
      sources: ["Source du texte : Louis-Antoine Dessaulles, Papineau et Nelson : blanc et noir… et la lumière fut faite, Montréal, Presses de l'Avenir, 1848, p. 45."] }
  ],

  // ===== P4 — Changements/continuités — Changement territorial du commerce du bois (Familiarisation Q16) =====
  // Renumérotation depuis le PDF Familiarisation (doc source 32 → Doc 1).
  'revendications-changements-2': [
    { id: "rv-cc2-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/revendications-changements-2/doc1.png", imageWidthCm: 13,
      sources: ["Source de la carte : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] }
  ],

  // ===== P4 — Mettre en relation — Idéologies des journaux Le Canadien et La Minerve (Familiarisation Q17) =====
  // Renumérotation depuis le PDF Familiarisation (docs source 30 + 31 → Doc 1, Doc 2). Ordre source conservé.
  // Doc 1 = Le Canadien (libéralisme) ; Doc 2 = La Minerve (nationalisme).
  // Distinct de q-revendications-relation-1 qui oppose « républicanisme » vs « nationalisme canadien »
  // avec des extraits différents (JALBC 1832-33 + Le Canadien 21 mai 1831).
  'revendications-relation-2': [
    { id: "rv-r2-d1", title: "Document 1", layout: "text-only",
      text: "« [...] Si la liberté de presse s'introduisait (dans un pays non démocratique), elle y produirait bientôt la liberté civile et politique. De toutes les presses, la presse périodique est celle qui convient le mieux au peuple, c'est de fait la seule bibliothèque du peuple. »",
      sources: ["Source du texte : Le Canadien (7 mai 1831), cité dans Yvan Lamonde et Claude Corbo (éd.), Le rouge et le bleu, Montréal, Les Presses de l'Université de Montréal, 1999, p. 87-88."] },
    { id: "rv-r2-d2", title: "Document 2", layout: "text-only",
      text: "« [...] c'est le pacte qui leur délie les membres, qui rompt leurs chaînes, qui ouvre les portes de leur prison, qui leur donne participation à la souveraineté, qui les égalise à leurs ancêtres, à leurs voisins, qui les place à la tête de l'exploitation de leurs propres biens, de leurs propres affaires. »",
      sources: ["Source du texte : « De la manière dont se forment les nations », La Minerve, 8, 11, 13, 18 septembre 1834, cité dans Yvan Lamonde, Histoire sociale des idées au Québec (1760-1896), nouvelle édition, Montréal, Fides, 2014, p. 218."] }
  ],

  // ============================================================
  // ===== P5 — Formation du régime fédéral canadien (4e sec.) =====
  // Sources : Évaluations sommatives officielles versions A et B « 1840-1896 ».
  // Convention « un acteur = un document » : docs 6, 7, 9 composites (V-A) et 4, 9 (V-B) splittés.
  // ============================================================

  // ===== P5 — V-A Q1 · Situer dans le temps — Avant/après la fédération canadienne =====
  // Renumérotation : docs 1-4 du PDF source = docs 1-4 de la section (identité).
  // Schémas 2 et 4 : titres « Acte de l'Amérique du Nord britannique 1867 » et « Acte
  // constitutionnel de 1791 » CROPPÉS des images natives car ils trahiraient la réponse.
  'fc-situer-1': [
    { id: "fc-s1-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/fc-situer-1/doc1.png", imageWidthCm: 11,
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] },
    { id: "fc-s1-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/fc-situer-1/doc2.png", imageWidthCm: 9,
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] },
    { id: "fc-s1-d3", title: "Document 3", layout: "image-only",
      imageUrl: "assets/img/fc-situer-1/doc3.png", imageWidthCm: 11,
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] },
    { id: "fc-s1-d4", title: "Document 4", layout: "image-only",
      imageUrl: "assets/img/fc-situer-1/doc4.png", imageWidthCm: 11,
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] }
  ],

  // ===== P5 — V-A Q2 · Mettre en relation — 3 idéologies =====
  // Renumérotation : doc 8 source → Doc 1 (Dessaulles, anticléricalisme) ;
  //                   doc 10 source → Doc 2 (Bernard, nationalisme de survivance) ;
  //                   doc 11 source → Doc 3 (Cardin, ultramontanisme).
  'fc-relation-1': [
    { id: "fc-r1-d1", title: "Document 1", layout: "text-only",
      text: "« Depuis les premiers jours de son existence, toutes les tendances de l'Institut avaient été essentiellement libérales. Le programme du libéralisme moderne était le sien. Ce programme se résumait dans les mots : Tolérance et liberté de penser. [...] Il n'était encore venu à l'idée de personne dans l'Institut, de limiter le champ de l'étude, de circonscrire le domaine de l'intelligence, d'essayer de bâillonner la pensée, et d'introduire la censure des livres dans une association d'hommes indépendants et libres. »",
      sources: ["Source : Louis-Antoine Dessaulles, Discours sur l'Institut canadien (1862), Montréal, Les Presses du journal Le Pays, 1863, p. 6, en ligne sur Wikisource."] },
    { id: "fc-r1-d2", title: "Document 2", layout: "text-only",
      text: "« Le statut de minorité des Canadiens français dans l'État canadien, résultat de la Conquête, permet à la petite bourgeoisie et au clergé de définir le Canada français comme un groupe ethnique menacé de l'extérieur et qui ne peut survivre que par une cohésion totale derrière ses élites. »",
      sources: ["Source : Jean-Paul Bernard, Les Rouges. Libéralisme, nationalisme et anticléricalisme au milieu du 19e siècle, Montréal, Presses Universitaires du Québec, 1971, p. 321."] },
    { id: "fc-r1-d3", title: "Document 3", layout: "text-only",
      text: "« [Ils] concevaient l'Église comme l'institution dominante dans la société. La politique devait être soumise aux principes moraux de l'Église et, par conséquent, les membres du clergé étaient parfaitement justifiés en intervenant dans la vie politique. »",
      sources: ["Source : Jean-François Cardin et al., Histoire du Canada. Espaces et différences, Québec, Presses Universitaires de Laval, 1996, p. 210."] }
  ],

  // ===== P5 — V-A Q3 · Causalité — Économie agricole → émigration → mesure Église =====
  // Renumérotation : doc 14 → Doc 1 (Ouellet) ; doc 12 → Doc 2 (carte N-Angleterre) ;
  //                   doc 9 → Doc 3 (curé Labelle inaugure le train de Saint-Jérôme).
  'fc-causalite-1': [
    { id: "fc-ca1-d1", title: "Document 1", layout: "text-only",
      text: "« Les Canadiens français ne formaient pas un peuple de défricheurs. Jusqu'au début du 19e siècle ils avaient peuplé, défriché au rythme de leur croissance démographique les basses terres du Saint-Laurent. C'était là leur domaine. Une paroisse en engendrait une autre. Mais bientôt, la zone seigneuriale avait été saturée de population. Au lieu de se lancer à la conquête des nouveaux espaces, on avait accentué la subdivision des fermes. De sorte que l'épuisement des terres et la rareté croissante du sol cultivable avaient projeté de force l'habitant en dehors de son domaine. [...] Partir ou laisser partir ses fils, telle était désormais la seule issue. »",
      sources: ["Source : Fernand Ouellet, Histoire économique et sociale du Québec (1760-1850), Montréal, Fides, 1966, p. 481-482."] },
    { id: "fc-ca1-d2", title: "Document 2 : L'immigration canadienne française en Nouvelle-Angleterre (1840 à 1900)", layout: "image-only",
      imageUrl: "assets/img/fc-causalite-1/doc2.png", imageWidthCm: 10,
      sources: [
        "Source des données : Yves Roby, Histoire d'un rêve brisé? Les Canadiens français aux États-Unis, Sillery, Septentrion, 2007, p. 13.",
        "Source de la carte : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."
      ] },
    { id: "fc-ca1-d3", title: "Document 3 : Le curé Labelle inaugure un chemin de fer entre Montréal et une région de colonisation en 1876", layout: "image-only",
      imageUrl: "assets/img/fc-causalite-1/doc3.png", imageWidthCm: 14,
      sources: ["Source : Auteur inconnu, « Inauguration du chemin de fer Q.M.O. & G. de Montréal à Saint-Jérôme », L'Opinion publique, vol. 7, no 41 (26 octobre 1876), p. 490, en ligne sur Bibliothèque et Archives nationales du Québec."] }
  ],

  // ===== P5 — V-A Q4 · Causes et conséquences — Objectif missions catholiques =====
  // Renumérotation : doc 13 source → Doc 1 (Marcotte).
  'fc-causes-1': [
    { id: "fc-c1-d1", title: "Document 1", layout: "text-only",
      text: "« Convertir, pour les missionnaires d'alors, ne signifie pas seulement faire passer un peuple d'une religion à une autre, mais également sédentariser et rallier à la culture dominante les nomades des forêts du nord du pays. »",
      sources: ["Source : Guillaume Marcotte, « Intempérance et piété chrétienne : les voyageurs canadiens et l'implantation des missions catholiques chez les Autochtones d'Abitibi-Témiscamingue, 1836-1863 », Rabaska, no 12 (2014), p. 63, en ligne sur Érudit."] }
  ],

  // ===== P5 — V-A Q5 · Situer dans l'espace — Exploitation forestière au Québec =====
  // Renumérotation : doc 5 source → Doc 1 (carte avec lettres A, B, C, D).
  'fc-situer-2': [
    { id: "fc-s2-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/fc-situer-2/doc1.png", imageWidthCm: 9,
      sources: ["Source : Carte du Québec (Canada), D-Maps."] }
  ],

  // ===== P5 — V-A Q6 · Différences — Désaccord Buies vs Mélanges religieux sur l'éducation =====
  // Convention « un acteur = un document » : le doc 6 source (deux extraits juxtaposés) splitté
  // en Doc 1 (Buies) et Doc 2 (Mélanges religieux).
  'fc-differences-1': [
    { id: "fc-d1-d1", title: "Document 1", layout: "text-only",
      text: "« Il convient d'établir dans toute la Province un système général et uniforme d'éducation élémentaire, gratuite, et maintenue entièrement aux frais de l'État, au moyen d'un fonds spécial créé à cet effet. »",
      sources: ["Source : Arthur Buies, Lettres sur le Canada, 3e lettre (1867), publiée à compte d'auteur, p. 13, en ligne sur Wikisource."] },
    { id: "fc-d1-d2", title: "Document 2", layout: "text-only",
      text: "« Le moyen d'améliorer le sort du peuple ne consiste pas précisément à l'instruire, mais à rendre ses maîtres compatissants, charitables et humains. Tant que la religion ne sera pas à la base de l'instruction des mœurs publiques, nous croyons que nous serons longtemps sans pouvoir nous écrier véritablement : maintenant le peuple est libre, il est heureux. »",
      sources: ["Source : « Mélanges religieux », 19 janvier 1844, cité dans Denise Lemieux, « Les mélanges religieux », Recherches sociographiques, 1969, vol. 10, no 2-3, p. 223."] }
  ],

  // ===== P5 — V-A Q7 · Continuité — Revendications des Métis (rivière Rouge et Nord-Ouest) =====
  // Convention « un acteur = un document » : doc 7 source (deux extraits juxtaposés) splitté
  // en Doc 1 (Neering, rivière Rouge) et Doc 2 (Riel, Nord-Ouest).
  'fc-continuite-1': [
    { id: "fc-co1-d1", title: "Document 1 : La rébellion de la rivière Rouge", layout: "text-only",
      text: "« En préparation à cet événement, le gouvernement canadien avait envoyé une équipe d'arpenteurs à la rivière Rouge. Elle avait pour mission de partager le terrain en lots de deux kilomètres carrés qui puissent être attribués aux colons à leur arrivée. Mais conformément à l'usage qu'ils avaient emprunté au Québec, les Métis avaient depuis longtemps loti leur territoire en bandes longues et étroites donnant sur la rivière. Chaque terre faisait front à la rivière de sorte que chaque fermier disposait de quelques arpents de bonne terre et d'un droit de fenaison à l'intérieur. Les Métis craignaient que ce nouveau lotissement canadien ne bouleverse leurs anciennes frontières. »",
      sources: ["Source : Rosemary Neering, Louis Riel, Longueuil, Les éditions Julienne, 1977, p. 18."] },
    { id: "fc-co1-d2", title: "Document 2 : Les rébellions du Nord-Ouest", layout: "text-only",
      text: "« Les protestations du gouvernement de la Compagnie de la Baie d'Hudson furent bientôt suivies de celles des colons qui s'opposèrent résolument à ce que des hommes aussi suspects ouvrent des chemins publics, et pratiquent des arpentages sur leurs terres propres, au nom d'un gouvernement étranger, avec si peu de garanties. »",
      sources: ["Source : Louis Riel, L'Amnistie. Mémoire sur les causes des troubles du nord-ouest et sur les négociations qui ont amené leur règlement amiable, Bureau du « Nouveau Monde », 1874, p. 4, en ligne sur Wikisource."] }
  ],

  // ===== P5 — V-A Q8 · Mettre en relation — Orgs féminines anglophones vs communautés religieuses =====
  // Renumérotation : doc 15 → Doc 1 (Le coin du feu) ; doc 16 → Doc 2 (CNFC) ;
  //                   doc 17 → Doc 3 (Hôpital Royal Victoria) ; doc 18 → Doc 4 (Pensionnat Bellevue).
  'fc-relation-2': [
    { id: "fc-r2-d1", title: "Document 1", layout: "text-only",
      text: "« Nous voulons aussi que l'éducation de la femme soit plus pratique et plus conforme à la tâche qui lui incombe souvent de remplacer le père de famille. Afin d'obtenir ce résultat, nous allons donner des conférences sur les sujets suivants : la situation de la femme dans cette province au point de vue légal; les rudiments essentiels des affaires de banques et autres; la connaissance des documents et écrits qu'elle est souvent appelée à signer, et qui la livrent inconsciente au premier venu ayant réussi à capter sa confiance, etc. »",
      sources: ["Source : Auteur inconnu, « [...] », Le coin du feu, janvier 1894, p. 7, en ligne sur Bibliothèque et Archives nationales du Québec."] },
    { id: "fc-r2-d2", title: "Document 2", layout: "text-only",
      text: "« À une époque où les femmes n'ont le droit de vote ni à l'échelon provincial ni à l'échelon fédéral, le Conseil national des femmes du Canada (CNFC) espère devenir un « parlement des femmes », soit un conseil au sein duquel les points de vue des femmes peuvent être présentés et débattus, tout en esquivant les pièges de la partisanerie politique masculine. »",
      sources: ["Source : Veronica Strong-Bao et Diane Macdonald, « Conseil national des femmes du Canada », L'Encyclopédie canadienne, dernière mise à jour le 2 août 2016, page consultée le 26 octobre 2020."] },
    { id: "fc-r2-d3", title: "Document 3", layout: "image-only",
      imageUrl: "assets/img/fc-relation-2/doc3.png", imageWidthCm: 11,
      sources: ["Source : William Notman, Salle commune des enfants, Hôpital Royal Victoria (1894), Musée McCord, II-105910.1. Licence : Creative Commons (BY-NC-ND)."] },
    { id: "fc-r2-d4", title: "Document 4 : Congrégations dédiées à l'enseignement fondées au Québec", layout: "image-only",
      imageUrl: "assets/img/fc-relation-2/doc4.png", imageWidthCm: 8,
      sources: ["Source : Auteur inconnu, Prospectus du pensionnat Notre-Dame-de-Bellevue (vers 1890), Archives Congrégation de N.-D. Licence : utilisée avec la permission des Archives de la Congrégation de N.-D."] }
  ],

  // ===== P5 — V-B Q1 · Changement/continuité — Structure politique suite à l'Acte d'Union =====
  // Convention « un acteur = un document » : le doc 4 source (composite de 2 schémas juxtaposés)
  // splitté en Doc 1 (Acte constitutionnel 1791) + Doc 2 (Acte d'Union 1840). L'énoncé source
  // « À partir du document 4 » est renuméroté « À partir des documents 1 et 2 ».
  'fc-continuite-2': [
    { id: "fc-co2-d1", title: "Document 1 : Acte constitutionnel", layout: "image-only",
      imageUrl: "assets/img/fc-continuite-2/doc1.png", imageWidthCm: 10,
      sources: ["Source de l'image : ÉPNG - Classe d'histoire, 2015, en ligne."] },
    { id: "fc-co2-d2", title: "Document 2 : Acte d'Union", layout: "image-only",
      imageUrl: "assets/img/fc-continuite-2/doc2.png", imageWidthCm: 9,
      sources: ["Source de l'image : ÉPNG - Classe d'histoire, 2015, en ligne."] }
  ],

  // ===== P5 — V-B Q2 · Causalité — Libre-échange GB → économie Canada-Uni → traité avec les É-U =====
  // Renumérotation : doc 8 source → Doc 1 (politique GB) ; doc 5 → Doc 2 (effet économique) ;
  //                   doc 3 → Doc 3 (mission Elgin / traité de réciprocité).
  'fc-causalite-2': [
    { id: "fc-ca2-d1", title: "Document 1", layout: "text-only",
      text: "« Jusqu'aux années 1840, le gouvernement britannique accorde une protection douanière aux produits importés de ses colonies, nord-américaines ou autres [...] Londres décide d'éliminer graduellement cette protection [...] »",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social, en ligne."] },
    { id: "fc-ca2-d2", title: "Document 2", layout: "text-only",
      text: "« [...] les produits canadiens ont de la difficulté à trouver preneur sur les marchés internationaux, et ce, en raison de leurs prix élevés. [...] »",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social, en ligne."] },
    { id: "fc-ca2-d3", title: "Document 3", layout: "text-only",
      text: "« [...] le gouverneur Elgin a reçu mission du gouvernement britannique de négocier une entente commerciale avec les États-Unis [...] Elgin se rend à Washington et [...] réussit à élaborer [cette] entente [...] dont la durée prévue est de 10 ans. »",
      sources: ["Source du texte : Jacques Lacoursière, Histoire populaire du Québec, Tome 3, 1841-1896, Québec, Septentrion, 1996, p. 74."] }
  ],

  // ===== P5 — V-B Q3 · Causes et conséquences — Cause + conséquence économique de l'urbanisation =====
  // Renumérotation : doc 2 source → Doc 1 (exode rural - cause) ; doc 6 → Doc 2 (image courtepointe).
  'fc-causes-2': [
    { id: "fc-c2-d1", title: "Document 1", layout: "text-only",
      text: "« Dans la seconde moitié du 19e siècle, la population des villes du Québec s'accroît progressivement, particulièrement celle de Montréal. Les habitants de la campagne sont nombreux à quitter leurs terres pour venir chercher du travail dans les usines. Les immigrants grossissent également les rangs de la population montréalaise. »",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social, en ligne."] },
    { id: "fc-c2-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/fc-causes-2/doc2.png", imageWidthCm: 7,
      sources: ["Source de l'image : Louis Prudent Vallée, Courtepointe séchant sur une corde à linge, rue Sous le cao, Québec, vers 1890, MP-1978.187.15, Musée McCord, en ligne."] }
  ],

  // ===== P5 — V-B Q4 · Mettre en relation — Politique nationale de Macdonald (3 objectifs) =====
  // Renumérotation : doc 7 source → Doc 1 (Politique nationale - protection industrie) ;
  //                   doc 1 source → Doc 2 (marché intérieur via colonisation de l'Ouest) ;
  //                   doc 12 source → Doc 3 (chemin de fer transcontinental - peupler l'Ouest).
  'fc-relation-3': [
    { id: "fc-r3-d1", title: "Document 1", layout: "text-only",
      text: "« Il est prévu qu'en élargissant la base économique nationale, les tarifs élevés rétablissent la confiance des Canadiens envers le développement de leur pays [...] On augmente le tarif douanier sur la plupart des produits fabriqués à l'étranger, ce qui offre une protection considérable aux fabricants canadiens [...] »",
      sources: ["Source du texte : Brown, Robert Craig, « Politique nationale », L'Encyclopédie Canadienne, 04 mars 2015, Historica Canada, en ligne."] },
    { id: "fc-r3-d2", title: "Document 2", layout: "text-only",
      text: "« [...] de nouveaux villages sont créés dans l'Ouest canadien pour répondre à la demande. Grâce à l'immigration et à la colonisation de l'Ouest, le nombre de consommateurs augmente sur le territoire, ce qui aide les industries. »",
      sources: ["Source du texte : Allôprof, en ligne."] },
    { id: "fc-r3-d3", title: "Document 3", layout: "text-only",
      text: "« [...] [Cela] enrichit le trésor public et procure des liquidités pour financer la construction du chemin de fer transcontinental [...] [il] représente aussi le moyen par lequel désenclaver l'Ouest et l'ouvrir à la colonisation [...] »",
      sources: ["Source du texte : Michèle Dagenais, La politique nationale et les déboirs de l'Oncle Sam, Musée McCord, 2007, en ligne."] }
  ],

  // ===== P5 — V-B Q5 · Situer dans le temps — Loi sur les Indiens (1876) sur la ligne du temps =====
  // Renumérotation : doc 10 source → Doc 1 (Encyclopédie canadienne, Loi sur les Indiens).
  // La ligne du temps (1840 | A | 1848 | B | 1867 | C | 1896) est décrite dans l'énoncé.
  'fc-situer-3': [
    { id: "fc-s3-d1", title: "Document 1", layout: "text-only",
      text: "« [...] la Loi [...] octroie au gouvernement de vastes pouvoirs concernant l'identité, les structures politiques, la gouvernance, les pratiques culturelles et l'éducation des Premières Nations [...] la Loi remplace les structures traditionnelles de gouvernance par l'élection de conseils de bande dont l'administration est laissée à la discrétion du ministère et de ses agents. »",
      sources: ["Source du texte : Henderson, William B., « Loi sur les Indiens », L'Encyclopédie Canadienne, 23 octobre 2018, Historica Canada, en ligne."] }
  ],

  // ===== P5 — V-B Q6 · Mettre en relation — Identifier une idéologie (anticléricalisme) =====
  // Renumérotation : doc 11 source → Doc 1 (portrait Buies + extrait La Lanterne, layout text-image).
  'fc-relation-4': [
    { id: "fc-r4-d1", title: "Document 1", layout: "text-image",
      text: "« Notre pays, comme tous les autres pays du monde, doit s'affranchir de ce pouvoir d'un autre âge, de ce gouvernement religieux de l'état civil, de cette ingérence autoritaire qui s'exerce jusque dans les actes les plus ordinaires de la vie [...] »",
      imageUrl: "assets/img/fc-relation-4/doc1.png", imageWidthCm: 5,
      sources: [
        "Source du texte : Arthur Buies, « Article posthume », La Lanterne, 20 octobre 1884, p. 335-336, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000192821.",
        "Source de l'image : Arthur Buies, Fonds J. E. Livernois Ltée, Bibliothèque et archives nationales du Québec, Cote : P560,S2,D1, P1584."
      ] }
  ],

  // ===== P5 — V-B Q7 · Continuité — Droits des femmes dans le Code civil de 1866 =====
  // Renumérotation : doc 13 source → Doc 1 (Le collectif Clio).
  'fc-continuite-3': [
    { id: "fc-co3-d1", title: "Document 1", layout: "text-only",
      text: "« Dans l'ensemble, les droits civils des femmes sont peu changés par le Code civil de 1866. [...] la fondatrice de l'hôpital Sainte-Justine, Justine Lacoste-Beaubien, devra [...] demander au parlement québécois de la relever de son incapacité juridique afin qu'elle puisse vaquer aux affaires de son hôpital. »",
      sources: ["Source du texte : Le collectif Clio, Histoire des femmes au Québec depuis quatre siècles, Montréal, Éditions Quinze, 1982, p. 153."] }
  ],

  // ===== P5 — V-B Q8 · Similitudes — Convergence des acteurs sur la pendaison de Riel =====
  // Convention « un acteur = un document » : doc 9 source (deux acteurs juxtaposés : article La
  // Justice + discours Honoré Mercier) splitté en Doc 1 (La Justice) + Doc 2 (Mercier).
  'fc-differences-2': [
    { id: "fc-d2-d1", title: "Document 1", layout: "text-only",
      text: "« Le 16 novembre dernier, une exécution politique fut le signal d'une protestation, aussi spontanée qu'universelle, dans notre province. [...] Partout l'on entendit le cri : « faisons taire les divisions du passé; unissons-nous pour punir les auteurs de ce crime politique et pour faire respecter, à l'avenir, les droits de la civilisation chrétienne ». »",
      sources: ["Source du texte : Auteur inconnu, article paru dans La Justice, 9 janvier 1886, page 1, en ligne."] },
    { id: "fc-d2-d2", title: "Document 2 : Honoré Mercier, chef du Parti national", layout: "text-only",
      text: "« [...], notre frère, est mort, victime de son dévouement à la cause [...] dont il était le chef, victime du fanatisme et de la trahison; du fanatisme de Sir John et de quelques-uns de ses amis; de la trahison de trois des nôtres qui, pour garder leur portefeuille, ont vendu leur frère [...] Sir John n'a pas seulement frappé notre race au cœur, mais il a surtout frappé la cause de la justice et de l'humanité qui, représentée dans toutes les langues et sanctifiée par toutes le croyances religieuses, demandait grâce pour le prisonnier de Regina [...] »",
      sources: ["Source du texte : Radio-Canada, extrait du discours prononcé par Honoré Mercier au Champ-de-Mars le 22 novembre 1885 à l'occasion de la pendaison de Louis Riel, en ligne."] }
  ],

  // ============================================================
  // ===== Sections ajoutées v1.22.0 : Guides pédagogiques RÉCIT (1840-1896) =====
  // Source : guides élèves « histoire.recitus.qc.ca » — 6 sections de la période :
  // Population/vie sociale, Politique nationale, Fédération canadienne, Église/idéologies,
  // Économie, Acte d'Union/gouvernement responsable. Renumérotation des documents par section
  // selon la convention « Doc 1 dans la section » (les références dans l'énoncé sont renumérotées).
  // ============================================================

  // ===== Pop&Vie Q1 — Différences — Femmes bourgeoisie vs ouvrières =====
  // Renumérotation : guide → section. Docs 1, 2, 3 du guide → Docs 1, 2, 3 (numérotation préservée).
  'fc-differences-3': [
    { id: "fc-d3-d1", title: "Document 1 : Une bourgeoise donnant des instructions à sa domestique", layout: "image-only",
      imageUrl: "assets/img/fc-differences-3/doc1.png", imageWidthCm: 8,
      sources: ["Source : H., C., « Une bourgeoise donnant ses instructions à sa domestique », Canadian Illustrated News, vol. 25, no.1, 7 janvier 1882, Bibliothèque et Archives Canada, collection Canadian Illustrated News, item 332. Licence : domaine public."] },
    { id: "fc-d3-d2", title: "Document 2", layout: "text-only",
      text: "« Le travail : tu te plains, mon pauvre mari, de tes 10 heures d'ouvrage; voici quatorze heures que je travaille, moi, et je n'ai pas encore fini ma journée. »",
      sources: ["Source : Joseph Swain, « Le travail : tu te plains, mon pauvre mari, de tes 10 heures d'ouvrage; voici quatorze heures que je travaille, moi, et je n'ai pas encore fini ma journée. » (1871), Musée McCord, C572_A.02.532.1. Licence : Creative Commons (BY-NC-ND)."] },
    { id: "fc-d3-d3", title: "Document 3 : Sélection d'articles du Code civil du Bas-Canada (entré en vigueur en 1866)", layout: "text-only",
      text: "« 174. Le mari doit protection à sa femme; la femme doit obéissance au mari.\n\n175. La femme est obligée d'habiter avec le mari, et de le suivre partout où il juge à propos de résider. Le mari est obligé de la recevoir et lui fournir tout ce qui est nécessaire pour les besoins de la vie, selon ses facultés et son état.\n\n187. Le mari peut demander la séparation de corps pour cause d'adultère de sa femme.\n\n188. La femme peut demander la séparation de corps pour cause d'adultère de son mari, lorsqu'il tient sa concubine dans la maison commune. [...]\n\n985. Toute personne est capable de contracter, si elle n'en est pas expressément déclarée incapable par la loi.\n\n86. Sont incapables de contracter : les mineurs [...]; les interdits; Les femmes mariées, excepté dans les cas spécifiés par la loi [...]. »",
      sources: ["Source : E.L. de Bellefeuille, Code Civil du Bas-Canada, Montréal, Beauchemin et Valois, 1866, p. 39, 40, 232 et 233, en ligne sur Canadiana."] }
  ],

  // ===== Pop&Vie Q2 — Causes/conséquences — Conséquence du Code civil pour les femmes mariées =====
  // Renumérotation : Doc 4 du guide (Texte d'historienne, Collectif Clio) → Doc 1 dans cette section.
  'fc-causes-3': [
    { id: "fc-c3-d1", title: "Document 1 : Texte d'historienne sur la condition juridique des femmes au 19e siècle", layout: "text-only",
      text: "« Les épouses demeurent régies par le principe de l'incapacité juridique pendant leur mariage. [...] Les cours de justice préfèrent maintenir le principe de la puissance maritale en obligeant les femmes à quêter la permission préalable de leur mari avant de disposer de leurs propres biens. Cette incapacité légale pose de lourds problèmes aux femmes qui sont impliquées dans des œuvres de charité. Leurs maris doivent sans cesse signer pour elles : on comprend l'absurdité d'une telle situation! »",
      sources: ["Source du texte : Le Collectif Clio, L'histoire des femmes au Québec depuis quatre siècles, Montréal, Les Quinze éditeur, 1982, p. 153."] }
  ],

  // ===== Pop&Vie Q3 — Différences — Premières Nations vs autorités britanniques =====
  // Renumérotation : Docs 5, 6 du guide → Docs 1, 2 dans cette section.
  'fc-differences-4': [
    { id: "fc-d4-d1", title: "Document 1 : Pétition des Algonquins et des Népissingues", layout: "text-only",
      text: "« Nous étions riches autrefois, rien ne nous manquait : les forêts étaient peuplées d'animaux de toute espèce dont nous vendions les dépouilles bien cher à l'avide marchand; cela nous donnait le moyen de suffire à nos besoins et à ceux de nos enfants. Mais il n'en est plus ainsi maintenant. Les blancs s'établissent de tous côtés sur nos terres; et où l'on ne cultive pas, les gens des chantiers sont là pour détruire et faire fuir les animaux qui restent dans le petit espace de terre que l'on ne nous a pas encore ravi. Nos familles sont sans moyen de subsistance et nous ne savons pas où chercher de quoi vivre. Nous sommes réduits à la plus grande détresse. Nous voulons imiter les blancs. C'est pourquoi nous demandons un terrain pour cultiver. »",
      sources: ["Source du texte : « Pétition des Algonquins et des Népissingues », 1845, citée dans Alain Beaulieu, Les Autochtones du Québec. Des premières alliances aux revendications contemporaines, Québec et Montréal, Musée de la civilisation/Édition Fides, 2000, p. 67."] },
    { id: "fc-d4-d2", title: "Document 2 : Lettre de Lord Sydenham, gouverneur en chef de l'Amérique du Nord britannique", layout: "text-only",
      text: "« Les tentatives faites pour combiner un système de tutelle avec [l]'établissement de ces peuplades dans des parties civilisées du pays, ne produisent que des embarras pour le Gouvernement et des dépenses à la Couronne; ce système entraîne avec lui le gaspillage des ressources de la Province, et fait du tort aux Sauvages eux-mêmes. Ainsi placé, l'indigène se dépouille de toutes les bonnes qualités qu'il possède dans l'état Sauvage, et n'acquiert que les vices de la civilisation. Il ne devient ni meilleur citoyen, ni meilleur cultivateur ou artisan. Il se fait ivrogne ou débauché; et ses femmes et sa famille suivent son exemple. Il occupe de bonnes terres, sans aucun profit pour lui-même et au détriment du pays. Il cause des embarras infinis au Gouvernement, et n'ajoute rien soit à la richesse, ou à l'industrie, ou à la défense du pays. »",
      sources: ["Source du texte : « Lettre de Lord Sydenham, gouverneur en chef de l'Amérique du Nord britannique, à Lord Russell, secrétaire aux colonies à Londres », 22 juillet 1841, citée dans M. Lavoie et D. Vaugeois (éd.), L'impasse amérindienne : trois commissions d'enquête à l'origine d'une politique de tutelle et d'assimilation, Québec, Septentrion, 2010, 498 p."] }
  ],

  // ===== Pol Nat Q1 — Différences — Soeur Curran vs Mackenzie sur Louis Riel =====
  // Docs 1, 2 du guide → Docs 1, 2 dans la section (numérotation préservée).
  'fc-differences-5': [
    { id: "fc-d5-d1", title: "Document 1 : Extrait d'une lettre écrite en 1869 par Soeur Mary A. Curran du couvent des Soeurs Grises de Saint-Boniface (colonie de la Rivière-Rouge)", layout: "text-only",
      text: "« Louis Riel est visiblement l'élu de Dieu pour sauver son pays; il se regarde comme le faible instrument de la providence et fait l'admiration de tous. Il se met toujours au premier poste lorsqu'il y a danger et se tient prêt à la mort, à laquelle il s'attend à tout moment. »",
      sources: ["Source : Soeur Mary A. Curran, « Lettre du 2 novembre 1869 », citée dans Élisabeth De Moissac, « Les Soeurs Grises et les évènements de 1869-1870 », La vie religieuse au Manitoba, vol. 37, 1970, p. 223, en ligne sur érudit.org."] },
    { id: "fc-d5-d2", title: "Document 2 : Déclaration prononcée en 1870 par Alexander Mackenzie, député à la Chambre des communes du Canada", layout: "text-only",
      text: "« Nous devons défendre la justice et la suprématie britanniques dans ce pays avant de communiquer avec des rebelles. J'ai lu quelque part que Riel a émis des décrets et s'est approprié le pouvoir suprême, assumant les fonctions d'un gouvernement non pas provisoire mais permanent [...]. »",
      sources: ["Source : Alexander Mackenzie, « Rivière-Rouge », 6 avril 1870, Débats de la Chambre des communes (troisième session, première législature), 1870, p. 896, en ligne sur Ressources parlementaires historiques canadiennes."] }
  ],

  // ===== Féd Q1 — Différences — Dorion (opposant) vs Taché et Cartier (favorables à la confédération) =====
  // Docs 1, 2, 3 du guide → Docs 1, 2, 3 dans la section.
  'fc-differences-6': [
    { id: "fc-d6-d1", title: "Document 1 : L'opinion de Jean-Baptiste-Éric Dorion, député et cofondateur de l'Institut canadien de Montréal", layout: "text-only",
      text: "« Je m'oppose au projet de confédération [...]. Le fédéralisme est passé bien loin de ce projet, qui concentre tout dans le pouvoir général. Fédéralisme veut dire union de certains États qui conservent leur pleine souveraineté en tout ce qui les concerne immédiatement [...]. Est-ce là ce que l'on nous propose? Pas le moins du monde. Dans le projet que nous examinons, tout est force, puissance, dans le gouvernement [fédéral]; tout est faiblesse, insignifiance, anéantissement dans les gouvernements [des provinces]! ».",
      sources: ["Source : Discours de Jean-Baptiste-Éric Dorion (9 mars 1865), dans Débats parlementaires sur la question de la confédération des provinces de l'Amérique britannique du Nord, 3e session, 8e parlement, Québec, Hunter, Rose et Lemieux, 1865. p. 858-860."] },
    { id: "fc-d6-d2", title: "Document 2 : Opinion émise en 1858 par Joseph-Charles Taché, député conservateur de l'Assemblée législative de la Province du Canada", layout: "text-only",
      text: "« [Les provinces] gagneraient tout ce que peut procurer d'avantages le principe de l'association; car il n'y a rien de plus fort après l'unité que l'union. Elles gagneraient collectivement et séparément en importance politique et commerciale [...].\n\nHalifax serait notre port d'hiver, un chemin de fer relierait maintenant ce port au Nouveau-Brunswick, à Québec et au reste de ces vastes possessions; nous aurions la plus belle ligne des navires à vapeur transatlantiques. »",
      sources: ["Source : Joseph-Charles Taché, « Des Provinces de l'Atlantique du Nord et d'une union fédérale », 1858, cité dans Michel Brunet, Histoire du Canada par les textes, tome II : 1855-1960, Montréal et Paris, Fides, 1963, p. 13-14."] },
    { id: "fc-d6-d3", title: "Document 3 : Extrait d'un discours prononcé en 1864 par George-Étienne Cartier, député conservateur de l'Assemblée législative de la Province du Canada", layout: "text-only",
      text: "« Il faut donc que la confédération de toutes les provinces britanniques s'effectue, sans quoi nous tombons dans la confédération américaine. Je sais que le désir de toutes les personnes présentes est d'achever cette grande œuvre nationale, qui liera en un même faisceau tous les principaux intérêts des colonies, et qui fera de nous tous une véritable nation. [...] »",
      sources: ["Source : Joseph Tassé (ed.), « Discours de Sir George Cartier », 1864, cité dans Michel Brunet, Histoire du Canada par les textes, tome II : 1855-1960, Montréal et Paris, Fides, 1963, p. 17-18."] }
  ],

  // ===== Féd Q2 — Causes/conséquences — Traité de réciprocité (1854) =====
  // Renumérotation : Docs 4, 5 du guide → Docs 1, 2 dans la section.
  'fc-causes-4': [
    { id: "fc-c4-d1", title: "Document 1 : Texte d'historien sur le traité de réciprocité", layout: "text-image",
      text: "« Le gouverneur général Elgin suggère la négociation d'un traité de réciprocité commercial avec les États-Unis. [...] La réciprocité, ce n'est pas tout à fait le libre-échange : on s'entend avec le gouvernement américain sur une liste de biens qui pourront passer la frontière sans droits de douane, des produits agricoles et des matières premières, mais aucun produit manufacturé. Les États-Unis ont moins à gagner que le Canada sur le plan commercial. On offre cependant l'accès aux pêcheries au large des côtes canadiennes aux navires étasuniens [...].\n\nLe traité de réciprocité commerciale, valide pour une durée de dix ans, est finalement signé en 1854. L'une ou l'autre des parties peut y mettre fin sans préavis. C'est ce [que font les États-Unis] en 1866 [...] »",
      imageUrl: "assets/img/fc-causes-4/doc1.png", imageWidthCm: 8,
      sources: [
        "Source du texte : Jean-Pierre Charland, Histoire du Canada contemporain, Sillery, Septentrion, 2007, p. 32.",
        "Source de l'image : Service national du Récit de l'univers social, avec les données de : M. Guillaumin, Joseph Garnier, Maurice Block, Annuaire de l'économie politique et de la statistique, Volume 18, 1861, en ligne, p. 346-347."
      ] },
    { id: "fc-c4-d2", title: "Document 2 : Texte de synthèse sur la fin du protectionnisme britannique", layout: "text-image",
      text: "« Jusqu'aux années 1840, le gouvernement britannique accorde une protection douanière aux produits importés de ses colonies, nord-américaines ou autres. Lorsque Londres décide d'éliminer graduellement cette protection et d'adopter une politique de libre-échange, les produits canadiens ont de la difficulté à trouver preneur sur les marchés internationaux, et ce, en raison de leurs prix élevés.\n\nLe rappel des lois britanniques sur les céréales, en 1846, suivi de celui, progressif, de la Canada Corn Act, en 1849, et de celui, progressif également, des tarifs préférentiels sur le bois d'œuvre, en 1847 et 1848, ont marqué un important changement dans l'économie canadienne. Celle-ci dépendait fortement, jusqu'alors, des tarifs préférentiels britanniques. C'est à partir de ce moment que le Canada commence à se tourner vers les États-Unis comme partenaire commercial. »",
      imageUrl: "assets/img/fc-causes-4/doc2.png", imageWidthCm: 7,
      sources: [
        "Source du texte : Le système préférentiel britannique, 2001, Bibliothèque et Archives Canada, en ligne.",
        "Source de l'image : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."
      ] }
  ],

  // ===== Féd Q3 — Liens de causalité — Traités numérotés entre gouv féd et nations autochtones =====
  // Renumérotation : Docs 6, 7, 8 du guide → Docs 1, 2, 3 dans la section.
  // Docs 2 et 3 sont des extraits du même livre (Daschuk) mais sur des thèmes distincts
  // (épidémies / intérêts politiques) ; conservés comme deux documents séparés.
  'fc-causalite-3': [
    { id: "fc-ca3-d1", title: "Document 1 : Les traités numérotés signés avec les nations autochtones entre 1871 et 1921", layout: "image-only",
      imageUrl: "assets/img/fc-causalite-3/doc1.png", imageWidthCm: 11,
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "fc-ca3-d2", title: "Document 2 : Texte d'historien sur les épidémies dans l'Ouest au 19e siècle", layout: "text-only",
      text: "« En 1876, un millier d'immigrants venus d'Islande s'installent sur les berges du lac Winnipeg. Ils s'établissent ainsi sur des terres revendiquées ou déjà occupées par les [Autochtones] du Traité n° 5. Peu après leur arrivée, une flambée de variole dévaste leur collectivité. L'épidémie qui se déchaîne durant tout l'automne et jusqu'au début de l'hiver tue entre 100 et 200 colons. Elle fait aussi des centaines de victimes chez les Saulteaux et les Cris. »",
      sources: ["Source : James Daschuk, La destruction des Indiens des Plaines : maladies, famines organisées, disparition du mode de vie autochtone, Québec, Presses de l'Université Laval, 2015, p. 191."] },
    { id: "fc-ca3-d3", title: "Document 3 : Texte d'historien sur les intérêts politiques et économiques du gouvernement fédéral et des Premières Nations", layout: "text-only",
      text: "« Du point de vue des autorités canadiennes, ces traités constituent le moyen de favoriser le développement économique et politique de la région; ce sont des contraintes légales, des obstacles à déblayer pour ouvrir la voie à la colonisation massive. De leur côté, les collectivités des Plaines constatent l'effondrement de l'économie du bison qui a assuré leur subsistance pendant tant d'années, et jugent l'afflux des colons agriculteurs inévitable désormais. Pour ces Premières Nations, les traités constituent par conséquent le moyen de garantir leur survie dans un monde devenu très incertain. »",
      sources: ["Source : James Daschuk, La destruction des Indiens des Plaines : maladies, famines organisées, disparition du mode de vie autochtone, Québec, Presses de l'Université Laval, 2015, p. 153."] }
  ],

  // ===== Église Q1 — Différences — Mgr Bourget vs Dessaulles sur l'Index =====
  // Docs 1, 2 du guide → Docs 1, 2 dans la section.
  'fc-differences-7': [
    { id: "fc-d7-d1", title: "Document 1 : Lettres pastorales de Mgr. Ignace Bourget évêque de Montréal", layout: "text-only",
      text: "« 1. Ne lisez aucun livre dont la doctrine et la morale ne soient pas approuvées par l'Église. Au besoin, consultez là-dessus vos pasteurs. Car le choix des bons livres est pour vous tous une chose sérieuse et difficile à faire. [...]\n\n4. Que si déjà de mauvais ouvrages se trouvent dans la bibliothèque [...], vous devez en conscience faire tous vos efforts pour les faire disparaître [...] [et] pour que ces mauvais livres soient jetés au feu. »",
      sources: ["Source : Mgr Ignace Bourget, Lettres pastorales de Mgr. l'évêque de Montréal contre les erreurs du temps, Montréal, Plinguet & Laplante, 1858, p. 9, en ligne sur Archive.org."] },
    { id: "fc-d7-d2", title: "Document 2 : Lettre à Mgr. Ignace Bourget", layout: "text-only",
      text: "« Il y a deux manières d'envisager l'Index des livres; l'une étroite et bornée [...], l'autre plus libérale et plus éclairée, qui ne regarde pas comme nécessairement désastreuse pour l'intelligence la lecture d'un livre condamné. »\n\nIndex : Liste de livres interdits par l'Église en raison de leur contenu contraire à la morale et à la doctrine catholique.",
      sources: ["Source : Louis-Antoine Dessaulles, « À sa Grandeur Monseigneur Ignace Bourget, évêque de Montréal (16 novembre 1864) », cité dans Yvan Lamonde (éd.), Louis-Antoine Dessaulles, Écrits, Montréal, Les Presses de l'Université de Montréal, 1994, p. 255."] }
  ],

  // ===== Éco Q1 — Situer T/E — 4 docs avant/après première phase d'industrialisation =====
  // Docs 1, 2, 3, 4 du guide → Docs 1, 2, 3, 4 dans la section.
  // Avant l'industrialisation : Doc 2 (caricature « Deux paires par jour » sur atelier de cordonnerie 1880),
  // Doc 3 (commerce des fourrures à York Factory). Après : Doc 1 (témoignage cordonnier 1889 sur les
  // manufactures), Doc 4 (intérieur d'un atelier mécanisé).
  'fc-situer-4': [
    { id: "fc-s4-d1", title: "Document 1 : Témoignage d'Olivier David Benoit, cordonnier à Montréal", layout: "text-only",
      text: "« Il existe dans les manufactures très peu de cordonniers pouvant faire une paire de chaussures [...]. En règle générale, tous les employés qui travaillent dans les manufactures, surtout les grandes manufactures, ne sont capable de faire qu'un seul ouvrage [...] parce qu'aujourd'hui les machines perfectionnées ont remplacé la main d'œuvre. »",
      sources: ["Source : James Armstrong et Augustus Toplady Freed, Enquête sur les rapports qui existent entre le capital et le travail au Canada, Ottawa, A. Senécal, 1889, p. 408, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000599736."] },
    { id: "fc-s4-d2", title: "Document 2 : « Deux paires par jour »", layout: "image-only",
      imageUrl: "assets/img/fc-situer-4/doc2.png", imageWidthCm: 8,
      sources: ["Source : John Henry Walker, [...] (1880). Musée McCord, M930.50.5.262. Licence : Creative Commons (BY-NC-ND)."] },
    { id: "fc-s4-d3", title: "Document 3 : Texte de synthèse sur le commerce des fourrures", layout: "text-only",
      text: "Situé à l'embouchure de la rivière Nelson, aux abords de la baie d'Hudson, York Factory a été l'un des postes de traite les plus importants de la Compagnie de la Baie d'Hudson et son entrepôt principal. Il assurait le lien entre l'Europe et les ressources en fourrures de l'intérieur des terres. De plus, des tribus autochtones installées aux abords de York Factory ont longtemps assuré l'approvisionnement de la Compagnie en pelleteries en échange de marchandises européennes (fusils, poudre à fusil, couvertures, marmites, eau-de-vie, etc.).",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "fc-s4-d4", title: "Document 4 : L'intérieur d'un atelier", layout: "image-only",
      imageUrl: "assets/img/fc-situer-4/doc4.png", imageWidthCm: 10,
      sources: ["Source : John Henry Walker, Intérieur d'un atelier, Musée McCord, M930.50.8.79. Licence : Creative Commons (BY-NC-ND)."] }
  ],

  // ===== Éco Q2 — Mettre en relation — Concepts urbanisation / industrialisation =====
  // Renumérotation : Docs 5, 6 du guide → Docs 1, 2 dans la section.
  // ATTENTION : la correspondance avec les catégories de la Q2 est INVERSÉE par rapport à la
  // numérotation. Doc 1 (ex-Doc 5, processus de fabrication) = INDUSTRIALISATION ; Doc 2
  // (ex-Doc 6, population rurale qui quitte campagne) = URBANISATION.
  'fc-relation-5': [
    { id: "fc-r5-d1", title: "Document 1", layout: "text-only",
      text: "Il s'agit du processus de fabrication de produits manufacturés à l'aide de techniques permettant une forte productivité du travail et regroupant les travailleurs dans des usines avec des horaires fixes et une réglementation stricte.",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "fc-r5-d2", title: "Document 2", layout: "text-only",
      text: "Attirées par le travail, les populations rurales quittent la campagne pour la ville. Cela entraine d'importants changements sociaux qui ont un impact majeur sur la vie des familles : le travail et les rapports sociaux changent.",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== Éco Q3 — Changements/continuités — Industrie forestière (mécanisation) =====
  // Renumérotation : Doc 7 du guide → Doc 1 dans la section.
  'fc-continuite-4': [
    { id: "fc-co4-d1", title: "Document 1 : Texte de synthèse sur l'industrie forestière", layout: "text-image",
      text: "Les bûcherons abattent les arbres. Puis, ils coupent les billots de bois afin de les rendre carrés. En raison de cette technique de coupe, près du quart du billot est gaspillé. Alors, pourquoi vouloir obtenir cette forme? Celle-ci est nécessaire pour empiler les morceaux de bois à l'intérieur des bateaux pour leur livraison en Grande-Bretagne.",
      imageUrl: "assets/img/fc-continuite-4/doc1.png", imageWidthCm: 8,
      sources: [
        "Source du texte : Service national du RÉCIT, domaine de l'univers social.",
        "Source de l'image : William Notman, Scies circulaires, Musée McCord, I-78898. Licence : Creative Commons (BY-NC-ND)."
      ] }
  ],

  // ===== Acte U Q2 — Causes/conséquences — 2 causes de la responsabilité ministérielle (1848) =====
  // Renumérotation : Docs 2, 3 du guide → Docs 1, 2 dans la section.
  // Note : le guide pédagogique ne fournit pas de réglette explicite pour cette question ;
  // on réutilise R_CAUSES_2PT_FACTEURS_EXPLICATIFS_T2 (sommative V-A P1) en libellé approximatif.
  'fc-causes-5': [
    { id: "fc-c5-d1", title: "Document 1 : Texte d'historien sur la fin du protectionnisme en Grande-Bretagne", layout: "text-only",
      text: "« Les besoins en céréales à faible coût, à la suite de la famine liée à la maladie de la pomme de terre en Irlande [...] entraînent l'abolition [...] du système protectionniste [en Grande-Bretagne]. À l'élimination de tous les droits d'importation sur les céréales s'ajouta la réduction des tarifs sur le bois ne provenant pas des colonies. Sur le plan politique, [la fin du protectionnisme] signifiait que rien ne pouvait plus justifier que la Grande-Bretagne ne s'oppose à l'autonomie interne des colonies de peuplement. »",
      sources: ["Source : Peter Gossage et J.I Little, « L'État libéral », Une histoire du Québec - Entre tradition et modernité, Montréal, Éditions Hurtubise, p. 127."] },
  ],

  // ============================================================
  // ===== P6 — Les nationalismes et l'autonomie du Canada (4e sec.) =====
  // Sources : Évaluations sommatives officielles versions A et B « 1896-1945 », Section A.
  // Sections B (description avec schéma) et C (texte 150 mots) écartées (hors-portée HQC).
  // Convention « un acteur = un document » : doc 9 V-A et doc 10 V-B (3 acteurs chacun) splittés.
  // Convention « phase = un document » : doc 12 V-A et doc 12 V-B (deux phases d'industrialisation) splittés en 2.
  // ============================================================

  // ===== V-A Q1 — Différences/similitudes — 3 acteurs sur la guerre des Boers =====
  // Convention « un acteur = un document » : Doc 9 source (3 acteurs juxtaposés : Bourassa, Laurier, Tupper)
  // splitté en Doc 1 (Bourassa) + Doc 2 (Laurier) + Doc 3 (Tupper). Énoncé adapté : « document 9 » → « documents 1, 2 et 3 ».
  'na-differences-1': [
    { id: "na-d1-d1", title: "Document 1", layout: "text-only",
      text: "« Cette Chambre déclare de plus qu'il n'est pas nécessaire d'envoyer de nouvelles troupes canadiennes dans l'Afrique Australe et que l'enrôlement de recrues pour le corps de gendarmerie Sud-africaine ne devrait pas être permis au Canada. »\n\nHenri Bourassa",
      sources: ["Source : Henri Bourassa, « Discours », Compte rendu officiel des débats de la Chambre des communes du Canada, Ottawa, Imprimeur du Roi, 1901, vol. 54, p. 1358."] },
    { id: "na-d1-d2", title: "Document 2", layout: "text-only",
      text: "« Je considère que cette guerre est juste, et comme l'opinion publique désirait vivement que le Canada y prît part, nous avons cru de votre devoir de nous rendre à cette manifestation en envoyant un régiment [...] Nous avons agi avec toute l'indépendance de notre pouvoir souverain. »\n\nWilfrid Laurier",
      sources: ["Source : Wilfrid Laurier, « Discours », 13 mars 1900, Compte rendu officiel des débats de la Chambre des communes du Canada, cinquième session, huitième parlement, vol. LI, Ottawa, Imprimeur de la Reine, 1900, p. 1836, en ligne sur Canadiana."] },
    { id: "na-d1-d3", title: "Document 3", layout: "text-only",
      text: "« Je blâme fortement [le premier ministre] d'appuyer l'Angleterre dans sa guerre injuste contre un petit peuple brave comme les Boers, qui luttent avec courage et patriotisme pour la liberté de leur pays. Je l'accuse de se faire l'instrument de Joe Chamberlain, un fou malcommode, [...] Cette guerre du Transvaal n'est qu'un acte de brigandage. »\n\nCharles Tupper",
      sources: ["Source : Charles Tupper, cité dans Robert Rumilly, Histoire de la Province de Québec, tome IX, Montréal, 1930, p. 148."] }
  ],

  // ===== V-A Q2 — Causes/conséquences — Amélioration des conditions de vie en ville =====
  // Aucun doc explicitement référencé dans l'énoncé, mais le Doc 13 V-A (prospérité 1920s, électrification,
  // achat à crédit, pouvoir d'achat) correspond directement aux réponses acceptées du corrigé.
  // Renumérotation : Doc 13 source → Doc 1.
  'na-causes-1': [
    { id: "na-c1-d1", title: "Document 1", layout: "text-only",
      text: "« Dans les années 1920, l'Amérique du Nord entre dans une période de prospérité économique sans précédent. La vie quotidienne s'améliore grâce à l'électrification, particulièrement dans les villes. Des produits de luxe autrefois réservés aux élites deviennent d'usage plus commun alors que se développe un système d'achat à crédit. [...] Après avoir connu des conditions de vie difficiles, même les familles ouvrières voient leur pouvoir d'achat augmenter. »",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== V-A Q3 — Continuité — Accueil des immigrants lors des deux guerres mondiales =====
  // Renumérotation : Doc 1 source → Doc 1. Image extraite : tableau d'immigration croppé depuis PDF 200dpi.
  'na-continuite-1': [
    { id: "na-co1-d1", title: "Document 1 — Nombre d'immigrants reçus au Canada, 1912-1920 et 1939-1946", layout: "image-only",
      imageUrl: "assets/img/na-continuite-1/doc1.png", imageWidthCm: 16,
      sources: ["Source des données : Statistique Canada, « 150 ans d'immigration au Canada », Statistique Canada, dernière mise à jour le 17 mai 2018, page consultée le 19 mars 2019."] }
  ],

  // ===== V-A Q4 — Mettre en relation — 3 combats du mouvement féministe =====
  // Renumérotation : Docs 6 (Ligue), 8 (Gérin-Lajoie), 10 (Circé-Côté) source → Docs 1, 2, 3 (ordre original croissant).
  // Doc 1 = affiche Ligue droits femme (image + texte) ; Docs 2 et 3 = textes seuls.
  // Énoncé adapté : pas de référence numérique explicite dans l'énoncé (« Associe le bon document »).
  'na-relation-1': [
    { id: "na-r1-d1", title: "Document 1 — Extrait d'une affiche produite par la Ligue des droits de la femme", layout: "text-image",
      text: "« La femme devrait voter parce que :\nLa femme a des responsabilités dans l'ordre économique :\n1. Puisqu'elle a le droit strict de posséder des biens, n'est-il pas juste et nécessaire qu'elle ait un droit de regard sur les lois qui régissent la propriété ?\n2. Puisqu'elle paie de l'impôt, n'est-il pas juste et nécessaire qu'elle ait un droit de regard sur les lois fiscales ? »",
      imageUrl: "assets/img/na-relation-1/doc1.png", imageWidthCm: 5,
      sources: ["Source de l'image et du texte : Ligue des droits de la femme, Laissez voter maman ! (entre 1930 et 1940), Archives de la Ville de Montréal, CA M001 BM014-4-D02. Licence : Creative Commons (BY-NC-SA)."] },
    { id: "na-r1-d2", title: "Document 2", layout: "text-only",
      text: "« La femme croirait-elle par hasard qu'elle peut défendre ses intérêts, collaborer aux graves problèmes dont la solution lui échoit, en vivant dans l'isolement et sans user de la plénitude de ses moyens d'action [...] Qu'on ne se méprenne pas sur le sens du suffrage féminin, c'est la levée en masse des femmes, leur mobilisation en vue du service de la patrie. »\n\nMarie Lacoste Gérin-Lajoie",
      sources: ["Source : Marie Lacoste Gérin-Lajoie, « Le suffrage féminin », La bonne parole, vol. 10, 1922, p. 3 et 6, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000158574."] },
    { id: "na-r1-d3", title: "Document 3", layout: "text-only",
      text: "« Cette grâce superficielle qui suffisait à la femme d'autrefois pour plaire et charmer serait un trop mince bagage pour la femme d'aujourd'hui. Autres temps, autres mœurs, il faut lui donner une solide instruction non pas seulement parce que c'est un être de chair et de sang qui a droit au savoir comme l'homme, une créature de raison autant que d'amour, une personnalité morale susceptible de hautes aspirations, mais surtout parce que plus que jamais elle est appelée à gagner sa vie, celle de ses parents et de ses enfants. »\n\nÉva Circé-Côté",
      sources: ["Source : Julien Saint-Michel (pseudonyme d'Éva Circé-Côté), The Labor World/Le Monde ouvrier, 22 avril 1916, p. 1, cité dans Micheline Dumont et Louise Toupin, La pensée féministe au Québec : anthologie (1900-1985), Montréal, Les éditions du remue-ménage, 2003, en ligne sur cybersolidaires.org."] }
  ],

  // ===== V-A Q5 — Situer dans le temps — Lettre A/B/C/D sur ligne du temps pour la radio =====
  // Renumérotation : Doc 4 source → Doc 1. Date absente du Doc 4 (pas de date dans l'extrait ni dans le titre source),
  // donc OI « Situer dans le temps » sans trahissance. Réponse : C (1920-1930).
  'na-situer-1': [
    { id: "na-s1-d1", title: "Document 1", layout: "text-only",
      text: "« [...] la radio prit son essor avec l'inauguration de stations montréalaises : CKAC pour l'auditoire francophone et CFCF pour l'auditoire anglophone. »",
      sources: ["Source : John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec, Sillery, Septentrion, 2003, p. 265."] }
  ],

  // ===== V-A Q6 — Causes/conséquences — Conséquence de l'action syndicale =====
  // Renumérotation : Doc 11 source (loi des accidents de travail 1909) → Doc 1.
  'na-causes-2': [
    { id: "na-c2-d1", title: "Document 1", layout: "text-only",
      text: "« Après une enquête, le gouvernement québécois [...] propose une loi pour remédier à la situation. La loi des accidents de travail de 1909 consacre le principe du risque professionnel, c'est-à-dire qu'indépendamment de la faute du patron ou de l'ouvrier, celui-ci sera indemnisé en cas d'accident. »",
      sources: ["Source : P.-A. Linteau, R. Durocher et J.-C. Robert, Histoire du Québec contemporain, tome 1 : De la Confédération à la crise (1867-1929), Montréal, Boréal, 1989, p. 548."] }
  ],

  // ===== V-A Q7 — Liens de causalité — Krach boursier → entreprises → emploi =====
  // Renumérotation : Doc 2 source (Le Devoir « Panique bourses ») → Doc 1 ;
  // Doc 7 source (PNB et secteurs en chute) → Doc 2 ; Doc 5 source (graphique chômage) → Doc 3.
  // Énoncé adapté : « (document 2) » → « (document 1) », « (document 7) » → « (document 2) », « (document 5) » → « (document 3) ».
  'na-causalite-1': [
    { id: "na-ca1-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/na-causalite-1/doc1.png", imageWidthCm: 12,
      sources: ["Source : Auteur inconnu, « La panique dans toutes les Bourses d'Amérique », Le Devoir, 24 octobre 1929, p. 3, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0005226335. Licence : image utilisée avec la permission du Devoir, tous droits réservés."] },
    { id: "na-ca1-d2", title: "Document 2", layout: "text-only",
      text: "« Dès 1933, les exportations canadiennes, le PNB et le revenu annuel moyen des Canadiens sont tombés de moitié. [...] Dans ses secteurs manufacturiers et miniers, la valeur de la production baisse de moitié. La chute est encore plus forte dans l'industrie du sciage et l'industrie lourde. »\n\n* PNB : Le produit national brut correspond à la quantité totale de richesses produites par un pays au cours d'une année.",
      sources: ["Source : Suzanne Clavette, « La grande crise : Une décennie de misère et de rêves brisés », Cap-aux-Diamants, no 41 (printemps 1995), p. 46, en ligne."] },
    { id: "na-ca1-d3", title: "Document 3 — Taux de chômage au Canada et aux États-Unis (1929-1939)", layout: "image-only",
      imageUrl: "assets/img/na-causalite-1/doc3.png", imageWidthCm: 11,
      sources: ["Source des données : Claude Larivière, Crise économique et contrôle social (1929-1937) : le cas de Montréal, Montréal, Éd. coopératives A. St-Martin, 1977, p. 11."] }
  ],

  // ===== V-A Q8 — Changements/continuités — Deux phases d'industrialisation =====
  // Convention « phase = un document » : Doc 12 source (deux phases juxtaposées) splitté en
  // Doc 1 (1850-1896) + Doc 2 (1896-1929). Cohérent avec la pédagogie de comparaison entre phases.
  // Énoncé adapté : « À partir du document 12 » → « À partir des documents 1 et 2 ».
  'na-continuite-2': [
    { id: "na-co2-d1", title: "Document 1 — Première phase d'industrialisation (1850-1896)", layout: "text-only",
      text: "« L'industrie légère est la plus importante dans l'économie du [Québec]. Les entreprises qui fabriquent des biens de consommation représentent la majorité des usines. [...] Cette industrie requiert une main-d'œuvre abondante et peu qualifiée. [...] Le secteur [...] le plus développé est celui de l'alimentation. L'industrie de la chaussure vient en second plan dans le portrait industriel canadien [et] le secteur textile est en plein essor. »",
      sources: ["Source : Allô prof, « La première phase d'industrialisation au Canada-Uni (1850-1900) », alloprof, page consultée le 1er mars 2019."] },
    { id: "na-co2-d2", title: "Document 2 — Deuxième phase d'industrialisation (1896-1929)", layout: "text-only",
      text: "« Au début du 20e siècle, [des] secteurs industriels comme les pâtes et papiers, l'aluminium et l'hydroélectricité requièrent l'implantation de grandes usines, l'utilisation de nouvelles technologies et une main-d'œuvre spécialisée. Le secteur manufacturier évolue également en [...] réaménageant ses infrastructures. »",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== V-B Q1 — Différences/similitudes — 3 acteurs sur la conscription PGM =====
  // Convention « un acteur = un document » : Doc 10 source (3 acteurs juxtaposés : Bourassa, Borden, Gouin)
  // splitté en Doc 1 (Bourassa) + Doc 2 (Borden) + Doc 3 (Gouin). Énoncé adapté : « document 10 » → « documents 1, 2 et 3 ».
  // Note : les dates (1917) sont conservées dans le contexte des sources car l'OI est « différences/similitudes »
  // (les dates ne révèlent pas la réponse, qui porte sur la position de chaque acteur).
  'na-differences-2': [
    { id: "na-d2-d1", title: "Document 1", layout: "text-only",
      text: "« Les Canadiens-français, on ne saurait trop le répéter, sont exclusivement canadiens. Ils n'ont pas d'autre patrie que le Canada. Ils ne reconnaissent, envers aucun autre pays, les devoirs qui, en tout temps et en tout lieu, n'incombent qu'aux citoyens de chaque pays ; et au premier rang de ces devoirs exclusivement nationaux, se place le service militaire [...] À l'égard de l'Angleterre, les Canadiens-français se croient tenus à tous les devoirs qui résultent de la constitution (votée par le parlement britannique) [...] mais à rien de plus [...] »\n\nHenri Bourassa, directeur du journal Le Devoir, 1917",
      sources: ["Source du texte : Henri Bourassa, La conscription, journal Le Devoir, 1er juin 1917, p. 1, Bibliothèque et Archives nationales du Québec, notice 0005226335."] },
    { id: "na-d2-d2", title: "Document 2", layout: "text-only",
      text: "« [...] le Gouvernement déposera bientôt un projet de loi destiné à organiser le service obligatoire par classes pour lever les renforts jugés nécessaires afin de maintenir les effectifs de l'armée canadienne au front et lui conserver son rang de troupe de combat de premier ordre dans les forces militaires de l'empire [...] j'espère que tous les membres du Parlement l'accepteront en songeant à la grandeur de la cause qui est en jeu dans le conflit actuel [...] »\n\nRobert Borden, Premier ministre du Canada, 1917",
      sources: ["Source du texte : 1917 : Discours à la Chambre des communes du premier ministre du Canada, Robert Borden, concernant l'état de la guerre en Europe, en ligne."] },
    { id: "na-d2-d3", title: "Document 3", layout: "text-only",
      text: "« [...] Mystérieusement, pour des raisons qu'on ne nous a pas données, on voulut, comme en Australie, essayer de nous imposer [cette loi]. Mais il y eut une différence ; c'est qu'en Australie on a consulté le peuple, et le peuple, où il n'y a pas de Canadiens français, s'est prononcé contre [...] Au Canada, on a dédaigné de consulter le pays et on a cru mieux de lui imposer immédiatement le service forcé. Pourquoi ? »\n\nLomer Gouin, premier ministre du Québec, 1917",
      sources: ["Source du texte : Discours prononcé par Lomer Gouin, cité dans le journal Le Devoir, 21 août 1917, p. 2, Bibliothèque et Archives nationales du Québec, notice 0005226335."] }
  ],

  // ===== V-B Q2 — Causes/conséquences — Conséquence de l'immigration sur la composition de la population =====
  // Aucun doc référencé explicitement dans l'énoncé. Doc 5 V-B source contient 2 textes côte à côte (Linteau sur
  // Montréal multiethnique + Lacoursière sur le peuplement de l'Ouest et la diversité ethnique). On utilise la
  // partie Lacoursière qui correspond directement au corrigé (« population des villes canadiennes davantage cosmopolite »).
  // Convention « un auteur = un document » : seul l'extrait Lacoursière est intégré ici (extrait Linteau
  // non utilisé dans la Section A — pourrait éventuellement servir à la Section B/C qu'on n'intègre pas).
  'na-causes-3': [
    { id: "na-c3-d1", title: "Document 1", layout: "text-only",
      text: "« [...] Grâce au réseau ferroviaire, de grandes cités se développent entre 1896 et 1920. Winnipeg, la métropole de l'Ouest [...] a déjà une population de 136 000 habitants en 1911 [...]. De ce peuplement de l'Ouest émerge une société nouvelle [...] La diversité des langues indique bien une diversité des ethnies [...] »",
      sources: ["Source du texte : Lacoursière, Provencher et Vaugeois, Canada-Québec, synthèse historique, Montréal, ERPI, 1978, p. 467."] }
  ],

  // ===== V-B Q3 — Liens de causalité — Énergie 2e phase → secteur → effet territoire =====
  // Renumérotation : Doc 11 source (cours d'eau / hydroélectricité, Dickinson et Young) → Doc 1 ;
  // Doc 7 source (carte ressources naturelles années 1930) → Doc 2.
  // Le doc 11 mentionne « Vers 1933 » et « 8 millions de chevaux-vapeur » — données quantitatives mais
  // pas trahissantes pour la causalité.
  'na-causalite-2': [
    { id: "na-ca2-d1", title: "Document 1", layout: "text-only",
      text: "« [...] Quatre cours d'eau offraient un potentiel énergétique immense : Le Saint-Laurent à l'ouest de Montréal, l'Outaouais et son affluent la rivière Gatineau, les rivières Saint-Maurice et Saguenay. Vers 1933, presque la moitié de toute l'énergie [...] canadienne de 8 millions de chevaux-vapeur était produite au Québec. »",
      sources: ["Source du texte : John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec, Sillery, Septentrion, 1995, p. 227."] },
    { id: "na-ca2-d2", title: "Document 2 — L'exploitation des ressources naturelles dans les années 1930", layout: "image-only",
      imageUrl: "assets/img/na-causalite-2/doc2.png", imageWidthCm: 13,
      sources: ["Source de l'image : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== V-B Q4 — Changements/continuités (3pt) — Travailleurs entre les deux phases d'industrialisation =====
  // CORRECTION SILENCIEUSE : l'énoncé du PDF source dit « À l'aide du document 6 », mais le corrigé attendu
  // (« nombre d'heures de travail baisse chez les ouvriers spécialisés ») correspond clairement au Doc 12 V-B
  // (phases d'industrialisation avec heures de travail), PAS au Doc 6 (Caisses populaires Desjardins).
  // C'est une erreur du PDF source. Doc 12 utilisé (splitté en Doc 1 + Doc 2 selon la convention « phase = un doc »).
  // Énoncé adapté : « À l'aide du document 6 » → « À l'aide des documents 1 et 2 ».
  'na-continuite-3': [
    { id: "na-co3-d1", title: "Document 1 — Première phase d'industrialisation", layout: "text-only",
      text: "« [...] Sous la pression des organisations ouvrières, le Québec se dote, en 1885, d'une loi qui limite le travail à douze heures et demie par jour et à soixante-douze heures et demie par semaine. En 1894, on réduit à douze heures la journée du travail. Une disposition de la loi laisse cependant la porte ouverte à certains accommodements avec les industriels, afin de prolonger le travail [...] »",
      sources: ["Source du texte : Jean De Bonville, Jean-Baptiste Gagnepetit, les travailleurs montréalais à la fin du 19e siècle, Montréal, Éditions de l'Aurore, 1975, p. 48."] },
    { id: "na-co3-d2", title: "Document 2 — Deuxième phase d'industrialisation", layout: "text-only",
      text: "« [...] Dès 1909, de nombreux travailleurs spécialisés obtenaient la semaine de travail de 54 heures, mais les femmes et les enfants travaillaient encore 60 heures par semaine. [...] Et, bien qu'une loi provinciale votée en 1912 eut réduit la semaine de travail dans l'industrie textile à 55 heures, celle-ci n'était pas appliquée. »",
      sources: ["Source du texte : John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec, Sillery, Septentrion, 1995, p. 239."] }
  ],

  // ===== V-B Q5 — Mettre en relation — Clergé dans l'économie / dans la société =====
  // Renumérotation : Doc 6 source (Caisses populaires Desjardins, clergé/économie) → Doc 1 ;
  // Doc 14 source (cardinal Villeneuve grève Dominion Textile, clergé/société) → Doc 2.
  // Énoncé adapté : « le numéro du document » est conservé tel quel (l'énoncé ne renvoie pas à un numéro spécifique).
  'na-relation-2': [
    { id: "na-r2-d1", title: "Document 1", layout: "text-only",
      text: "« [...] le mouvement des Caisses populaires prenait de la force ; en 1929, il existait 178 caisses populaires catholiques, avec un actif de 11 millions de dollars. L'idée de son fondateur, Alphonse Desjardins, était que les caisses populaires fondées sur les paroisses pouvaient mobiliser les épargnes des Canadiens français, tout en offrant une solution de rechange aux grandes banques [...] »",
      sources: ["Source du texte : P. Gossage et J.L. Little, Une histoire du Québec. Entre tradition et modernité, Montréal, Hurtubise, 2015, p. 233."] },
    { id: "na-r2-d2", title: "Document 2", layout: "text-only",
      text: "« [...] durant la grève des employés de la Dominion Textile à Montmorency, le cardinal Villeneuve intervint personnellement auprès des patrons afin de les inciter à remédier à l'insuffisance des salaires des ouvriers et à les faire signer la convention collective. »",
      sources: ["Source du texte : Alain Gagnon, L'influence de l'Église sur l'évolution socio-économique du québec de 1850 à 1950, dans l'Action nationale, décembre 1979, p. 268, Bibliothèque et Archives nationale du Québec, notice 0000164214."] }
  ],

  // ===== V-B Q6 — Causes/conséquences — Cause de la fondation de la Fédération nationale Saint-Jean-Baptiste =====
  // Aucun doc explicitement référencé dans l'énoncé, mais le Doc 9 V-B (Lavigne & Pinard, Montréalaises et
  // mouvement de réforme en faveur des droits des femmes) correspond directement à la réponse acceptée du
  // corrigé (« Obtenir des droits pour les femmes »). Renumérotation : Doc 9 source → Doc 1.
  'na-causes-4': [
    { id: "na-c4-d1", title: "Document 1", layout: "text-only",
      text: "« Au tournant du siècle, de nombreuses Montréalaises deviennent conscientes des problèmes sociaux engendrés par la croissance rapide du capitalisme [...] Elles joignent les rangs du mouvement de réforme et mettent sur pied divers organismes d'action sociale. Ce faisant elles se heurtent quotidiennement aux limites que leur impose leur propre incapacité juridique et politique [...] Une telle situation amène nombre de réformistes à militer en faveur des droits des femmes [...] »",
      sources: ["Source du texte : Marie Lavigne et Yolande Pinard, Les femmes dans la société québécoise, Montréal, Édition du Boréal Express, 1977, p. 90."] }
  ],

  // ===== V-B Q7 — Situer dans le temps — Krach boursier : avant/après 1929 sur 4 documents =====
  // Renumérotation : Docs 1, 2, 3, 4 source → Docs 1, 2, 3, 4 (ordre conservé).
  // Doc 3 (Keynes texte + portrait) en layout text-image. Réponse corrigé : avant = Docs 2, 4 ; après = Docs 1, 3.
  'na-situer-2': [
    { id: "na-s2-d1", title: "Document 1", layout: "text-only",
      text: "« Les gouvernements lancent également des travaux publics [...] Par exemple, ils construisent des ponts, des routes, des aqueducs, des égouts, des marchés, etc. Le gouvernement fédéral et celui de la province de Québec, avec l'aide du clergé, mettent sur pied des plans de colonisation [...] dans des régions éloignées, telles que l'Abitibi, le Témiscamingue, le Lac-Saint-Jean ou la Gaspésie. »",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "na-s2-d2", title: "Document 2", layout: "text-only",
      text: "« [...] Les investissements dans l'agriculture atteignent, à l'échelle mondiale, un niveau trop élevé pour la capacité d'absorption des marchés internationaux [...] les stocks de produits agricoles s'accumulent et [...] les prix augmentent [...] ».",
      sources: ["Source : Paul-André Linteau, René Durocher, Jean-Claude Robert, Histoire du Québec contemporain, tome 2 : Le Québec depuis 1930, Montréal, Boréal, 1989, p. 13."] },
    { id: "na-s2-d3", title: "Document 3", layout: "text-image",
      text: "« [...] Il propose plutôt que l'État intervienne afin de diminuer et de prévenir les irrégularités du système capitaliste. Ainsi, l'État serait en mesure de stabiliser l'économie en favorisant la consommation et en relançant l'emploi et la production puisqu'il serait plus présent. »",
      imageUrl: "assets/img/na-situer-2/doc3.png", imageWidthCm: 5,
      sources: [
        "Source du texte : Allôprof, La remise en question du capitalisme, en ligne.",
        "Source de l'image : Auteur inconnu, en ligne (portrait de John Maynard Keynes)."
      ] },
    { id: "na-s2-d4", title: "Document 4", layout: "text-only",
      text: "« [...] Lorsque les gens qui possèdent des actions réalisent que les différentes compagnies ne font pas autant de profits qu'ils le croyaient, ils vendent leurs actions tous en même temps. La valeur des actions à la bourse dégringole rapidement puisque tous veulent vendre leurs actions sans avoir d'acheteurs potentiels. »",
      sources: ["Source du texte : Allôprof, La crise économique et ses conséquences au Québec, en ligne."] }
  ],

  // ===== V-B Q8 — Continuité/changement (2pt) — Droits des Canadiens durant la 2e GM =====
  // Renumérotation : Doc 8 source (publications communistes bannies / censure) → Doc 1.
  // Énoncé adapté : « À l'aide du document 8 » → « À l'aide du document 1 ».
  'na-continuite-4': [
    { id: "na-co4-d1", title: "Document 1", layout: "text-only",
      text: "« [...] les publications communistes qui font de la propagande pour le communisme, resteront bannies au Canada, tandis que les publications qui s'occupent de la question russe, de l'effort de guerre russe, seront admises [...] »",
      sources: ["Source du texte : Musée Canadien de la Guerre, en ligne."] }
  ],

  // ============================================================
  // === v1.24.0 — Guides pédagogiques RÉCIT 1896-1945 (14 questions) ===
  // ============================================================

  // ===== Catho Q1 — Établir des faits — Lien groupe social/fréquentation scolaire =====
  // 1 doc unique (tableau Word natif recréé via PIL : voir render-frequentation-table.py).
  'na-faits-1': [
    { id: "na-f1-d1", title: "Document 1 — La fréquentation scolaire des enfants âgés de 12 à 15 ans dans la ville de Québec en fonction du groupe social, 1901", layout: "image-only",
      imageUrl: "assets/img/na-faits-1/doc1.png", imageWidthCm: 12,
      sources: ["Source des données : Mélanie Julien, « La fréquentation scolaire à Québec, 1871-1901 : l'effet de l'industrialisation, de l'appartenance culturelle et de la classe sociale », Cahiers québécois de démographie, vol. 37, no 1 (printemps 2008), p. 43-44, en ligne sur Érudit."] }
  ],

  // ===== Catho Q2 — Situer dans le temps — 4 docs ordre chrono luttes des femmes =====
  // Renumérotation : Docs 2-5 source → Docs 1-4. Ordre chrono attendu (source) : 5, 3, 4, 2
  // → en renumérotation : Doc 4 (École Marg.-Bourgeoys 1908), Doc 2 (droit vote féd. 1918),
  // Doc 3 (Code civil 1931), Doc 1 (suffrage Québec 1940).
  // Note : les dates sont visibles dans les sources des docs (article daté, SQ 1930-31, etc.) —
  // reproduction fidèle du PDF source, pédagogiquement c'est passable car l'élève doit
  // associer le doc à son évènement, pas simplement lire la date.
  'na-situer-3': [
    { id: "na-s3-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/na-situer-3/doc2.png", imageWidthCm: 13,
      sources: ["Source : Auteur inconnu, « Depuis hier soir, le suffrage féminin est devenu loi dans la province de Québec », Le Devoir, p. 6, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0005226335. Licence : image utilisée avec la permission du Devoir, tous droits réservés."] },
    { id: "na-s3-d2", title: "Document 2", layout: "text-only",
      text: "« [...] la Chambre [des communes] a décidé d'accorder le droit de vote aux femmes canadiennes »",
      sources: ["Source : Auteur inconnu, « Les femmes voteront », L'Étoile du Nord, 25 avril 1918, p. 1, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000169256."] },
    { id: "na-s3-d3", title: "Document 3", layout: "text-only",
      text: "Le 11 mars 19[...], l'article suivant est ajouté au Code civil du Bas-Canada :\n\n« 1425 a) [...] les produits du travail personnel de la femme, les économies en provenant et les meubles ou immeubles qu'elle aura acquis en en faisant emploi [...] sont réservés à l'entière administration de la femme. »",
      sources: ["Source : Loi modifiant le Code civil et le Code de procédure civile, relativement aux droits civils de la femme, SQ 1930-31 (21 GeoV), c. 101, art. 1425, en ligne sur Bibliothèque de l'Assemblée nationale du Québec."] },
    { id: "na-s3-d4", title: "Document 4", layout: "text-only",
      text: "« Grâce au dévouement des Sœurs de la Congrégation de Notre-Dame, Montréal sera bientôt doté d'une École supérieure pour les jeunes filles [collège classique]. C'est au mois d'octobre prochain, dans leur nouvelle maison-mère de la rue Sherbrooke, que les Filles de l'illustre Marguerite Bourgeois ouvriront [...] [la première] École d'Enseignement supérieur. »",
      sources: ["Source : Auteur inconnu, « Une école d'enseignement supérieur », L'Enseignement primaire, vol. 30, no 1, septembre 1908, p. 63, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0004885831."] }
  ],

  // ===== Catho Q3 — Changements/continuités — Rôle de l'Église 1896-1950 =====
  // Renumérotation : Docs 6 et 7 source → Docs 1 et 2. Énoncé adapté.
  // Doc 2 : voir note d'en-tête v1.24.0 — source PDF buggée (dupliquée du Doc 1) mais
  // l'image embedded est différente (scène scolaire avec religieuse). Source documentée
  // comme « à confirmer ».
  'na-continuite-5': [
    { id: "na-co5-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/na-continuite-5/doc1.png", imageWidthCm: 10,
      sources: ["Source de l'image : A.J. Rice, Laprés & Lavergne, L'orphelinat agricole de Notre-Dame de Montfort (1896), Bibliothèque et Archives nationales du Québec, notice 0002748414. Licence : domaine public."] },
    { id: "na-co5-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/na-continuite-5/doc2.png", imageWidthCm: 10,
      sources: ["Source de l'image : Auteur inconnu, Religieuse enseignante avec deux écolières (entre 1930 et 1950 environ). Source précise à confirmer (la référence citée dans le PDF source du guide RÉCIT correspond au Document 1 et ne s'applique pas à cette image)."] }
  ],

  // ===== Catho Q4 — Mettre en relation des faits — 4 docs → 2 idéologies =====
  // Renumérotation : Docs 8-11 source → Docs 1-4.
  // Catégories : Nationalisme canadien-français (Docs 2 et 4) | Clérico-nationalisme (Docs 1 et 3).
  // Note : énoncé source dit « Inscrivez » (vouvoiement) — adapté en « Inscris » pour cohérence
  // avec le reste du catalogue HQC qui tutoie systématiquement l'élève.
  'na-relation-3': [
    { id: "na-r3-d1", title: "Document 1", layout: "text-only",
      text: "« L'habitant canadien aime beaucoup sa famille. Il aime aussi beaucoup sa terre qu'il a faite, en tout ou en partie, pouce par pouce, pied par pied, qui lui permet de mettre du pain sur la table, qui chaque jour réunit en corvée joyeuse la bande de ses enfants et sa femme elle-même, dure aux travaux des champs comme à ceux de la maison. »",
      sources: ["Source : Abbé Lionel Groulx, Chez nos ancêtres, Montréal, Bibliothèque de l'Action française, 1920, p. 23 et 27, en ligne sur Fondation Lionel-Groulx."] },
    { id: "na-r3-d2", title: "Document 2", layout: "text-only",
      text: "Cette idéologie défend l'autonomie du Canada par rapport à l'Empire britannique et l'autonomie des provinces vis-à-vis du gouvernement fédéral.",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "na-r3-d3", title: "Document 3", layout: "text-only",
      text: "Cette idéologie prône des valeurs traditionnelles. Elle place la religion catholique au centre de ses valeurs auxquelles s'ajoutent l'agriculture et la langue française.",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "na-r3-d4", title: "Document 4", layout: "text-only",
      text: "« Il s'agit de décider si le peuple canadien sera appelé à prendre part à toutes les guerres de l'Empire sans que les portes du cabinet et du parlement impériaux lui soient ouvertes, sans même que ses représentants et son gouvernement soient consultés sur l'opportunité de ces luttes sanglantes. Je ne consentirai jamais à appuyer cette politique rétrograde. »\n\nHenri Bourassa, 1899",
      sources: ["Source : Henri Bourassa, « Lettre de démission à Sir Wilfrid Laurier », 20 octobre 1899, citée dans Yvan Lamonde et Claude Corbo, Le rouge et le bleu. Une anthologie de la pensée politique au Québec de la Conquête à la Révolution tranquille, Montréal, Presses de l'Université de Montréal, 1999, p. 302-303."] }
  ],

  // ===== Polit. intér. Q1 — Causes/conséquences — Objectif décret immigration 1931 =====
  // 1 doc unique (Décret PC 1931-695).
  'na-causes-5': [
    { id: "na-c5-d1", title: "Document 1", layout: "text-only",
      text: "« L'agent d'immigration peut permettre l'entrée au Canada à [...] :\nUn sujet britannique entrant au Canada directement ou indirectement [...] et disposant de moyens suffisants pour se maintenir jusqu'à ce qu'il parvienne à trouver un emploi [...].\nUn citoyen américain entrant au Canada en provenance des États-Unis et disposant de moyens suffisants pour se maintenir jusqu'à ce qu'il parvienne à trouver un emploi. [...]\nUn agriculteur ayant les moyens suffisants pour cultiver au Canada. [...]\nLes dispositions de ce Décret du conseil ne s'appliquent pas aux immigrants de race asiatique. »",
      sources: ["Source : Gouvernement du Canada, « Décret du Conseil PC 1931-695, 21 mars 1931 », Bibliothèque et Archives Canada, MIKAN 1446825."] }
  ],

  // ===== Polit. intér. Q2 — Causes/conséquences — 3 docs conséquences augmentation pop urbaine =====
  // Renumérotation : Docs 2-4 source → Docs 1-3.
  'na-causes-6': [
    { id: "na-c6-d1", title: "Document 1 — Extrait du rapport publié en 1910 par la Commission royale d'enquête qui avait comme mandat de proposer des solutions pour enrayer la propagation de la tuberculose", layout: "text-only",
      text: "« Nos villes ne présentent pas toutes le même degré d'insalubrité ni les mêmes éléments. Entre toutes, Montréal est la plus insalubre, à cause de son atmosphère pleine de poussière soulevée par les automobiles et les tramways; de la fumée fournie par les cheminées de ses nombreuses usines; de ses nombreuses habitations insalubres; de sa population considérable d'immigrants qui se tassent dans des logements malpropres, infectés et humides et dans des quartiers insalubres par leur vétusté; enfin, à cause du tassement des maisons et de l'étroitesse des rues. »",
      sources: ["Source : Emmanuel Persillier Lachapelle et al., Rapport de la Commission royale de la tuberculose, Province de Québec, 1909-1910, p. 86, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0006204728."] },
    { id: "na-c6-d2", title: "Document 2 — Extrait d'un article de journal paru en 1921", layout: "text-only",
      text: "« [I]l n'en est pas ainsi dans des campagnes où il n'y a pas d'égouts, pas d'aqueduc, pas de chauffage central! [...] Combien d'agriculteurs, chez nous, furent attirés à la ville par l'attrait des commodités matérielles qu'offre, en comparaison de l'habitation rurale la plus opulente [luxueuse], le logement urbain le plus modeste? »",
      sources: ["Source : Ol. Asselin, « L'hygiène à la ferme », L'Avenir du Nord, 1er avril 1921, p. 2, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000164429."] },
    { id: "na-c6-d3", title: "Document 3 — Extrait d'un article de journal publié en 1917", layout: "text-only",
      text: "« La désertion des campagnes, en congestionnant les faubourgs des villes, en a augmenté la densité, qui a eu pour effet de raréfier les logements convenables, qui étaient déjà assez rares auparavant. »",
      sources: ["Source : Louis-Marie Royer, « Le problème des habitations », Le Progrès de l'Est, 26 janvier 1917, p. 4, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000053364."] }
  ],

  // ===== Polit. intér. Q3 — Différences/similitudes — Désaccord censure cinéma =====
  // Renumérotation : Doc 5 source (Morris, contre la censure) → Doc 1 ; Doc 6 source (Bureau,
  // pour la censure) → Doc 2. Énoncé adapté.
  'na-differences-3': [
    { id: "na-d3-d1", title: "Document 1 — Extrait d'un journal montréalais anglophone publié en 1923", layout: "text-only",
      text: "« La censure est une menace pour la liberté [...] Les gens ne sont-ils pas en mesure de déterminer par eux-mêmes ce qu'ils aiment et ce qu'ils n'aiment pas sans qu'un comité de censure ne décide pour eux ce qu'ils ont le droit de voir? [...] Si les films doivent être censurés par des hommes qui n'ont pas forcément la même opinion que le public, [...] alors les films ne deviendront qu'une masse de balivernes et de radotages. Il ne se produira plus de bons films, car à quoi bon produire un drame à des fins éducatives et basé sur les réalités de la vie si tout ce qui est réel en sera retiré par les censeurs? »",
      sources: ["Source : Joseph Morris, « Censorship and Liberty », The Axe, 12 janvier 1923, Bibliothèque et Archives nationales du Québec, notice 000008295. Traduction libre par le Service national du RÉCIT, domaine de l'univers social."] },
    { id: "na-d3-d2", title: "Document 2 — Extrait d'un article de journal paru en 1916", layout: "text-only",
      text: "« Le bureau de censure des vues animées de la province de Québec a raison d'être fier de son travail de l'année. Durant l'exercice écoulé, environ 16 000 films ont été examinés : de ce nombre 1 300 ont été prohibés [interdits] et près de 75 000 pieds [de film] ont été éliminés de sujets autorisés. C'est dire que sans la censure, les foules nombreuses qui assistent chaque jour aux représentations cinématographiques auraient vu dérouler sous leurs yeux des scènes disgracieuses et immorales, des meurtres, des crimes dégoûtants, etc. »",
      sources: ["Source : Auteur inconnu, « La censure des cinémas », L'autorité, 8 janvier 1916, p. 2, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000081857."] }
  ],

  // ===== Polit. can. Q3 — Causes/conséquences — 6 docs conséquences entrée en guerre =====
  // Renumérotation : Docs 5-10 source → Docs 1-6. 6 conséquences à déterminer (3 pts).
  // Images : Doc 1 (Northern Electric, usine de munitions) et Doc 4 (camp Spirit Lake).
  'na-causes-7': [
    { id: "na-c7-d1", title: "Document 1", layout: "text-image",
      text: "Pendant le conflit, les Canadiennes deviennent de plus en plus nombreuses à occuper un emploi puisque leur contribution est nécessaire afin de remplacer les hommes enrôlés dans l'armée. Elles sont notamment appelées à travailler dans les usines d'armement et de munitions. Lorsque la guerre prend fin, la production d'armes ralentit et les soldats rentrés du front retournent au travail. La contribution des femmes n'étant plus considérée essentielle, un grand nombre d'entre elles sont encouragées à quitter le marché du travail pour se consacrer de nouveau aux tâches du foyer.",
      imageUrl: "assets/img/na-causes-7/doc1.jpg", imageWidthCm: 6,
      sources: ["Source de l'image : Ministère de la Défense nationale, Manufacture de la compagnie Northern Electric Co. Ltd. (1916), Bibliothèque et Archives Canada, MIKAN 3623032. Licence : domaine public. Source du texte : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "na-c7-d2", title: "Document 2", layout: "text-only",
      text: "« La CIM [Commission impériale des munitions] construisait des navires et des avions et aménageait des terrains d'aviation pour un imposant programme d'entraînement des pilotes. À la fin de la guerre, ses 600 usines avaient achevé 103 navires de la marine, 2 600 avions d'entraînement et 30 hydravions à coque. Quand la CIM cessa ses opérations en 1919, elle était le plus grand employeur civil du Canada, avec plus de 290 000 employés. »",
      sources: ["Source : Musée canadien de la guerre, « Finances et production de guerre », en ligne. Licence : extrait utilisé avec la permission du Musée canadien de la guerre, tous droits réservés."] },
    { id: "na-c7-d3", title: "Document 3 — Extrait d'un article de journal publié en 1919", layout: "text-only",
      text: "« Voilà maintenant plus d'une année que l'armistice a été signé et que la guerre a pris fin, mais, contrairement aux prévisions presque unanimement énoncées au moment de la cessation des hostilités, le coût de la vie, au lieu de diminuer graduellement, ne fait que monter de plus en plus. [...]\n\nL'augmentation de la dette nationale — Tous les peuples qui ont pris part au conflit, à l'exception peut-être des États-Unis, ont augmenté leur dette nationale dans des proportions fabuleuses. Celle du Canada [est] passée d'un peu plus de 800 000 000 $ à deux milliards et il faut que [...] les intérêts de cette dette se paient par des taxes directes ou indirectes qui font monter les prix des articles imposés et, par suite, celui du coût de la vie en général. »",
      sources: ["Source : Auteur inconnu, « La cherté de la vie », Le Clairon, 21 novembre 1919, p. 2 et 5, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000165382."] },
    { id: "na-c7-d4", title: "Document 4", layout: "text-image",
      text: "De 1914 à 1920, un total de 8 579 personnes sont détenues dans les 24 camps d'internement canadiens en vertu de la Loi des mesures de guerre. Ces camps sont destinés aux prisonniers de guerre ainsi qu'aux personnes considérées suspectes parce qu'elles sont originaires de pays en guerre avec le Canada, comme l'Autriche-Hongrie ou l'Allemagne.",
      imageUrl: "assets/img/na-causes-7/doc4.jpg", imageWidthCm: 6,
      sources: ["Source de l'image : Auteur inconnu, Femmes et enfants prisonniers au camp d'internement de Spirit Lake, en Abitibi (entre 1915 et 1917), Bibliothèque et Archives Canada, MIKAN 4628433. Licence : domaine public. Source du texte : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "na-c7-d5", title: "Document 5 — Sermon prononcé par Monseigneur Joseph-Médard Émard, évêque de Valleyfield", layout: "text-only",
      text: "« Un immense voile s'étend épais sur une partie notable du monde, couvrant des misères sans nom : que de larmes, que d'angoisses; que de foyers, heureux naguère, maintenant plongés dans la tristesse et le deuil. Pauvres mères, malheureuses épouses, petits orphelins, que votre douleur est navrante! Aucune consolation humaine ne saurait l'atteindre dans ce déluge de maux qui submerge tant de familles. »",
      sources: ["Source : Mgr J.-M. Emard, « La guerre : Sermon prononcé à Rigaud à l'occasion du vingt-cinquième pèlerinage conduit par les clercs de Saint-Viateur à Notre-Dame de Lourdes », 1914, dans Œuvres pastorales de Mgr J.-M. Emard, tome IV, Paris, Pierre Téqui, 1922, p. 41-42, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000324637."] },
    { id: "na-c7-d6", title: "Document 6", layout: "text-only",
      text: "Une épidémie de grippe se propage au Canada entre autres par le biais des soldats rapatriés au pays qui sont porteurs de la maladie. Cette grippe particulièrement virulente fait 50 000 victimes au Canada.\n\nExtrait d'un article de journal de l'époque :\n« Une épidémie que l'on désigne sous le nom de grippe espagnole exerce actuellement de terribles ravages dans nos Cantons de l'Est. [...] On signalait une maladie étrange qui faisait beaucoup de victimes en Espagne. [...] Les camps militaires sont particulièrement affectés, et l'on estimait à plus de vingt mille le nombre des soldats souffrant de la grippe. La maladie présente toujours un caractère grave, et le chiffre des mortalités devient inquiétant. »",
      sources: ["Source : Joseph Barnard, « La Grippe Espagnole — Une alarmante épidémie », Le Bien public, 26 septembre 1918, p. 1, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000164337."] }
  ],

  // ===== Vie éco Q1 — Causalité — Besoins nouveaux secteurs / stratégie / impact =====
  // 3 docs : Dominion Textile (image), concentration entreprises (texte synthèse), nouveaux secteurs (texte synthèse).
  'na-causalite-3': [
    { id: "na-ca3-d1", title: "Document 1", layout: "text-image",
      text: "« En 1905, plusieurs filatures canadiennes, dont celles de la Dominion Cotton Mills, fusionnent pour former la Dominion Textile. Cette opération a pour but de rentabiliser plusieurs usines en coordonnant leurs activités. [...] En 1914, la compagnie investit à Magog 370 000 $ afin de construire des hangars à métiers à tisser à l'arrière de la filature. »",
      imageUrl: "assets/img/na-causalite-3/doc1.png", imageWidthCm: 6,
      sources: ["Source de l'image : Dominion Textile Company, Travailleurs d'une usine de textile probablement située à Magog (vers 1895), Bibliothèque et Archives Canada, MIKAN 5098343. Licence : domaine public. Source du texte : Ministère de la Culture et des Communications, « Usine Dominion Textile : informations historiques », en ligne sur le Répertoire du patrimoine culturel du Québec. Licence : reproduction autorisée à des fins éducatives, tous droits réservés."] },
    { id: "na-ca3-d2", title: "Document 2 — Extrait d'un texte de synthèse", layout: "text-only",
      text: "« La concentration des entreprises constitue un des traits marquants de l'économie québécoise au début du 20e siècle. Elle affecte les secteurs des services publics, des transports, des banques, du textile, du fer et de l'acier et certaines industries alimentaires. Cette concentration permet aux plus importantes compagnies de limiter la concurrence grâce à l'obtention d'un quasi-monopole dans leur domaine de production. Toutefois, plusieurs petites entreprises canadiennes-françaises, incapables de soutenir une telle concurrence, disparaissent. »",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "na-ca3-d3", title: "Document 3 — Extrait d'un texte de synthèse", layout: "text-only",
      text: "« Au début du 20e siècle, les nouveaux secteurs industriels comme les pâtes et papiers, l'aluminium et l'hydroélectricité requièrent l'implantation de grandes usines, l'utilisation de nouvelles technologies et une main-d'œuvre spécialisée. Le secteur manufacturier évolue également en renouvelant l'énergie utilisée par l'hydroélectricité et en réaménageant ses équipements et ses bâtiments. Toutes ces nouveautés nécessitent d'importantes sommes d'argent que peu d'entreprises canadiennes-françaises détiennent. Seules les plus grosses compagnies peuvent investir de tels capitaux. »",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== Vie éco Q2 — Causalité — Syndicats américains / position Église / CTCC =====
  // Renumérotation : Doc 4 source → Doc 1, Doc 5 source (Hull congrès) → Doc 2, Doc 6 source (évêques) → Doc 3.
  'na-causalite-4': [
    { id: "na-ca4-d1", title: "Document 1 — Extrait d'une brochure publiée en 1913", layout: "text-only",
      text: "« Un syndicat international est 1° celui dont le siège est aux États-Unis; [...]\n\nÀ la fin de 1912, [...], notre province comptait 246 syndicats [...]. 194 de ces syndicats étaient internationaux, 36, nationaux et 16, indépendants. »",
      sources: ["Source : Arthur Saint-Pierre, L'organisation ouvrière dans la province de Québec, Montréal, École sociale populaire, 1913, p. 4 et 12, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000116603."] },
    { id: "na-ca4-d2", title: "Document 2 — Extrait d'une brochure qui fait un compte rendu de la réunion de deux cents délégués représentant 80 syndicats (ou unions) catholiques rassemblés en congrès à Hull afin de former une confédération à l'automne 1921", layout: "text-image",
      text: "« Si la Confédération des Travailleurs catholiques du Canada se propose de travailler le plus possible à l'organisation professionnelle des travailleurs catholiques du Canada, ce n'est pas seulement parce que ceux-ci y ont droit et qu'elle leur est utile et avantageuse, c'est aussi que l'association ouvrière est une nécessité des temps présents. »",
      imageUrl: "assets/img/na-causalite-4/doc2.png", imageWidthCm: 8,
      sources: ["Source de l'image : Studio de luxe, « La Convention des unions nationales catholiques, à Hull », La Patrie, 28 septembre 1921, p. 1, en ligne sur Bibliothèque et Archives nationales du Québec. Licence : domaine public. Source du texte : Confédération des Travailleurs catholiques du Canada, La Confédération des Travailleurs catholiques du Canada, Montréal, École sociale populaire, sans date, p. 4-5, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0004920400."] },
    { id: "na-ca4-d3", title: "Document 3 — Extrait d'une brochure qui décrit une rencontre ayant eu lieu en 1909 à Québec et au cours de laquelle les évêques canadiens dénoncent les syndicats internationaux qui rassemblent des membres de diverses confessions religieuses. Ils parlent des syndicats en les nommant « sociétés »", layout: "text-only",
      text: "« [Certaines sociétés] doivent être tenues pour suspectes par des catholiques. Ce sont toutes les sociétés, d'ordre économique ou moral, qui font profession de neutralité religieuse, ouvrent leur rang aux hommes de toute croyance, mettent toutes les religions sur un pied de complète égalité [...].\n\nBien plus, et c'est un point très important pour la sauvegarde de la foi, les catholiques doivent de préférence s'associer à des catholiques, à moins que la nécessité ne les oblige à faire autrement. »",
      sources: ["Source : Joseph-Papin Archambault, L'Église et les associations ouvrières [...], Montréal, École sociale populaire, 1913, p. 18, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000083050."] }
  ],

  // ===== Vie éco Q3 — Causalité — Marché du fromage / coopérative / impact =====
  // Renumérotation : Docs 7-9 source → Docs 1-3.
  'na-causalite-5': [
    { id: "na-ca5-d1", title: "Document 1 — Extrait d'un article de journal publié en 1892", layout: "text-only",
      text: "« En consultant les journaux spéciaux des deux continents [Amérique du Nord et Europe] qui s'occupent des marchés au fromage, on constate que le French Cheese ou fromage français, c'est-à-dire fabriqué dans la Province de Québec, est toujours coté au-dessous des fromages [d'Ontario], [...] cette différence de prix ne correspondant nullement à des différences de qualité. »",
      sources: ["Source : Auteur inconnu, « French Cheese », La Presse, 20 octobre 1892, p. 2, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000082812."] },
    { id: "na-ca5-d2", title: "Document 2 — Extrait d'un article publié dans le Bulletin de la Société coopérative agricole des fromagers de Québec en 1916", layout: "text-only",
      text: "« La Société [...] a réussi à obtenir pour les produits vendus par son entremise de meilleurs prix, enfin à protéger les intérêts des cultivateurs. Pourquoi a-t-elle obtenu ce résultat? Parce que d'année en année elle a groupé un nombre plus grand de cultivateurs, que chacun, par sa modique contribution, lui a permis de progresser, de se développer [...]. »",
      sources: ["Source : Auguste Trudel, « Ce que peuvent faire les cultivateurs qui s'organisent », Bulletin de la Société coopérative agricole des fromagers de Québec, 12 août 1916, p. 3, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000164818."] },
    { id: "na-ca5-d3", title: "Document 3 — Extrait d'un article scientifique écrit par un historien qui relate la formation de la Société coopérative agricole des fromagers de Québec le 5 mai 1910", layout: "text-only",
      text: "« [O]n mit en place un système d'inspection des fabriques et de classification des produits. [...] La fonction principale de la Coopérative était [la vente] des produits agricoles qu'elle recevait de ses membres. [...] En matière d'approvisionnement, la Coopérative offrit [...] à ses membres certains biens nécessaires à la fabrication du beurre et du fromage. »",
      sources: ["Source : Claude Beauchamp, « Les débuts de la coopération et du syndicalisme agricoles, 1900-1930 : quelques éléments de la pratique », Recherches sociographiques, vol. 20, no 3, 1979, p. 350-351."] }
  ],

  // ===== Grande dép. Q1 — Mettre en relation — Loi assur.-chômage inspirée du keynésianisme =====
  // 1 doc unique (Loi 1941 Le Clairon).
  'na-relation-4': [
    { id: "na-r4-d1", title: "Document 1 — Extrait d'un article de journal sur une mesure économique et sociale mise en place par le gouvernement canadien", layout: "text-only",
      text: "« Le Parlement a pris une mesure importante, au mois d'août dernier, en adoptant la Loi sur l'assurance-chômage [...]. Le plan d'assurance-chômage protégera plus de deux millions d'ouvriers, soit quatre-vingts pourcent de toutes les personnes qui travaillent pour gagner leur vie au Canada. [...]\n\nPendant une période de dépression, quand les ouvriers sont sans travail par centaines de mille, l'assurance-chômage est un facteur important dans le maintien du pouvoir d'achat du consommateur, et de cette manière elle stabilise les affaires dans toute l'étendue du pays. [...] »",
      sources: ["Source : Auteur inconnu, « Assurance-chômage », Le Clairon, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000165382."] }
  ],

  // ===== 2GM Q1 — Causes/conséquences — 3 conséquences socioéconomiques après-guerre =====
  // Doc 1 a une image embedded (Cecilia Butler à l'usine Inglis). Docs 2 et 3 textuels.
  'na-causes-8': [
    { id: "na-c8-d1", title: "Document 1 — Extrait d'un texte de synthèse écrit par une historienne", layout: "text-image",
      text: "« [...] dans l'immédiat après-guerre, la proportion de femmes dans la main-d'œuvre connaît une baisse importante, passant de 33,5 % en 1944, [...], à 25,3 % en 1946 pour l'ensemble du pays. Mais ce retrait n'est que temporaire : dès la fin des années 1940, les femmes mariées retournent sur le marché de l'emploi en nombre toujours croissant, malgré les discours qui font la promotion d'un idéal domestique fondé sur la complémentarité du couple pourvoyeur-ménagère. »",
      imageUrl: "assets/img/na-causes-8/doc1.png", imageWidthCm: 5,
      sources: ["Source du texte : Denyse Baillargeon, Brève histoire des femmes au Québec, Montréal, Boréal, 2012, p. 271. Source de l'image : Office national du film du Canada, Cecilia Butler, ancienne chanteuse et danseuse de boîte de nuit, est maintenant aléseuse à la section Small Arms Ltd. de l'usine de munitions de la John Inglis Company (1943), Bibliothèque et Archives Canada, MIKAN 3627216. Licence : domaine public."] },
    { id: "na-c8-d2", title: "Document 2 — Extrait d'un article de journal publié en 1945", layout: "text-only",
      text: "« Le retour par milliers de soldats d'outre-mer pose un problème d'urgence nationale. Le gouvernement doit dès maintenant songer à réintégrer dans la vie civile tous les hommes et les femmes qui ont servi sous les drapeaux. En même temps, le [ralentissement] dans les industries de guerre jette sur le pavé des milliers d'ouvriers qui doivent maintenant se chercher du travail. Pendant plusieurs mois à venir, la principale préoccupation de nos gouvernants sera de prévenir une recrudescence de chômage. »",
      sources: ["Source : Auteur inconnu, « L'Information politique », Le Courrier de Saint-Hyacinthe, 29 juin 1945, p. 1, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000082592."] },
    { id: "na-c8-d3", title: "Document 3 — Extrait d'un article de journal publié en 1947", layout: "text-only",
      text: "Durant la guerre, peu de nouveaux logements sont construits parce que le gouvernement se concentre surtout sur la production militaire. Ceci posera un problème après la fin du conflit.\n\n« L'opposition libérale a attiré hier midi l'attention du gouvernement sur la crise du logement dans les grandes villes. [...] [L]es centres urbains sont aux prises avec le problème du logement à cause de l'émigration des gens de la campagne vers les villes, à cause aussi du retour des soldats. Cela fait que deux ou trois familles sont obligées de demeurer dans 5 ou 6 pièces. »",
      sources: ["Source : Auteur inconnu, « La crise du logement donne lieu à un amendement mis hors d'ordre », Le Soleil, 8 mai 1947, p. 1, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0004878815."] }
  ],

  // ===== 2GM Q2 — Situer dans le temps — 4 docs ordre chrono Seconde Guerre mondiale =====
  // Renumérotation : Docs 4-7 source → Docs 1-4. Ordre chrono attendu (source) : 6, 4, 5, 7
  // → en renumérotation : Doc 3 (déclaration guerre sept. 1939), Doc 1 (Loi sur les mesures
  // de guerre), Doc 2 (plébiscite 1942), Doc 4 (conférence Québec).
  // Note : Doc 4 a une image (Churchill/King au Frontenac).
  'na-situer-4': [
    { id: "na-s4-d1", title: "Document 1", layout: "text-only",
      text: "« [...] Elle conférait au gouvernement des pouvoirs d'urgence spéciaux qui lui permettaient de mobiliser toutes nos ressources humaines et matérielles pour la défense du Canada [...] Les hommes et les femmes pouvaient s'engager dans l'armée, servir au sein du gouvernement ou travailler pour des compagnies qui contribuaient à l'effort de guerre [...]. »",
      sources: ["Source du texte : Bibliothèque et Archives Canada, Chronologie de la conscription de la deuxième guerre mondiale, en ligne."] },
    { id: "na-s4-d2", title: "Document 2", layout: "text-only",
      text: "« Le gouvernement fédéral tient un plébiscite pan-canadien sur la promesse du premier ministre William Lyon Mackenzie King de ne pas rendre la conscription obligatoire. Les Canadiens votent majoritairement pour désengager King de sa promesse alors qu'au Québec la population s'oppose massivement (72,1 %) au projet de conscription. »",
      sources: ["Source du texte : Jean Guy Herman (dir.), « Début d'une deuxième Conférence internationale à Québec », Bilan du siècle, page consultée le 22 juin 2020."] },
    { id: "na-s4-d3", title: "Document 3", layout: "text-only",
      text: "« [...] Le 7 septembre, le Parlement du Canada s'est réuni en session spéciale; le 9 septembre, il accorde son appui à la Grande-Bretagne et à la France et le 10 septembre, le roi George VI annonce que le Canada a déclaré la guerre. »",
      sources: ["Source : Anciens Combattants Canada, « Le début de la guerre », en ligne, page consultée le 22 juin 2020."] },
    { id: "na-s4-d4", title: "Document 4 — Visite officielle lors de la deuxième conférence de Québec", layout: "image-only",
      imageUrl: "assets/img/na-situer-4/doc4.png", imageWidthCm: 8,
      sources: ["Source de l'image : Office national du film du Canada, Hon. Winston Churchill et W.L. Mackenzie King avec les parlementaires au Château Frontenac pour la conférence de Québec, Bibliothèque et Archives Canada, MIKAN 3624068. Licence : domaine public."] }
  ],

  // ======================================================================
  // ============ P7 (1945-1980) — Sommatives Section A (v1.25.0) ==========
  // ======================================================================

  // ===== V-A Q1 — Situer dans le temps — Mandats de Jean Lesage (ligne du temps) =====
  'mq-situer-1': [
    { id: "mq-s1-d1", title: "Document 1 — Jean Lesage", layout: "image-only",
      imageUrl: "assets/img/mq-situer-1/doc1.png", imageWidthCm: 6,
      sources: ["Source de l'image : Auteur inconnu, Jean Lesage, Bibliothèque et Archives nationales du Québec, P243,S1,D1004. Licence : Creative Commons (BY-ND)."] }
  ],

  // ===== V-A Q2 — Causes/conséquences — Cause de la société de consommation =====
  // 1 doc : Doc 2 source (salaires/pouvoir d'achat 1966) renuméroté Doc 1.
  'mq-causes-1': [
    { id: "mq-c1-d1", title: "Document 1", layout: "text-only",
      text: "« Les ventes au détail, l'an dernier, ont augmenté de 6,6 % pour s'établir à 5 429 millions de dollars. [...] Nos ouvriers gagnent presque cinq fois plus qu'avant la guerre. [...] Le salaire hebdomadaire est passé de 21 $ en 1939 à 95 $ maintenant. Le coût de la vie a beaucoup augmenté, mais la rémunération moyenne a monté encore plus vite que les prix à la consommation. Le standard d'existence a vraiment progressé, car en cinq ans le pouvoir d'achat véritable (compte tenu de l'inflation) a augmenté d'environ 13,3 %. »",
      sources: ["Source : Conrad Langlois, « La vie économique : Le Québec ne progresse pas encore assez rapidement », La Patrie, 18 décembre 1966, p. 3, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000586549."] }
  ],

  // ===== V-A Q3 — Causes/conséquences — Conséquence des revendications autochtones (Baie-James) =====
  'mq-causes-2': [
    { id: "mq-c2-d1", title: "Document 1", layout: "text-only",
      text: "« [...] Le choix en faveur du projet hydroélectrique centré sur la Grande Rivière est pris en mai 1972 par le gouvernement du Québec. N'ayant pas été consultés par le gouvernement du Québec avant l'annonce d'avril [...], plusieurs Cris et Inuits du Nord québécois s'opposent fermement au projet [...]. Les tribunaux du Québec réaffirment l'obligation du gouvernement du Québec de s'entendre avec les Cris et les Inuits. [Une entente] est signée un an plus tard, le 11 novembre 1975 [...]. »",
      sources: ["Source : « Convention de la Baie-James et du Nord québécois », Wikipédia, dernière modification le 20 octobre 2020, page consultée le 26 octobre 2020."] }
  ],

  // ===== V-A Q4 — Différences/similitudes — Désaccord sur la grève de l'amiante =====
  // Doc 8 source (2 acteurs) splitté en 2 documents distincts (« un acteur = un document »).
  'mq-differences-1': [
    { id: "mq-d1-d1", title: "Document 1", layout: "text-only",
      text: "« Ces grévistes, disais-je dans mon appel au public, on ne l'a peut-être pas assez souligné, ne sont pas des grévistes comme les autres. Ils ne se battent pas seulement pour le salaire et pour manger. Ils se battent proprement pour la défense de leur vie et de celle de leurs filles et garçons ouvriers contre une industrie meurtrière. Ils se battent contre des compagnies qui jamais, autant que l'on sache, ne se sont engagées nettement, loyalement, à la correction du mal abominable qu'elles propagent depuis longtemps [...]. »\n\nL'abbé Lionel Groulx",
      sources: ["Source : Lionel Groulx, Mes mémoires, tome 4 : 1940-1967, Montréal, Fides, 1974, p. 270."] },
    { id: "mq-d1-d2", title: "Document 2", layout: "text-only",
      text: "« Ce ne sont pas des ouvriers qui ne sont pas satisfaits, mais certains chefs ouvriers qui mettent leur intérêt à eux avant celui des ouvriers et qui cherchent à causer du trouble. »\n\nMaurice Duplessis",
      sources: ["Source : Maurice Duplessis, cité dans Jacques Lacoursière, Histoire populaire du Québec, 1896-1960, Sillery, Septentrion, 1995, p. 354."] }
  ],

  // ===== V-A Q5 — Mettre en relation — Gains des femmes 1960-1980 =====
  // Doc 5 source (bill 16, gain juridique) → Doc 1 ; Doc 4 source (contraception) → Doc 2.
  'mq-relation-1': [
    { id: "mq-r1-d1", title: "Document 1", layout: "text-only",
      text: "Extrait d'un éditorial publié en 1964 :\n\n« Le bill 16 que vient de déposer à la législature Madame Marie-Claire Casgrain, la première femme ministre au Québec, [...] amorce au grand jour le déblocage du féminisme. Ce projet de loi [...] comporte certaines améliorations du statut de la femme mariée [...]. [S]i le mari reste obligé de fournir à sa femme tout ce qui lui est nécessaire pour les besoins de la vie, la femme ne devra plus obéissance à son mari. Il s'agit là de reconnaitre légalement ce qui se passe dans notre société nord-américaine ! »",
      sources: ["Source : J. B., « Qu'est-ce que la femme au 20e siècle ? », Le progrès du golfe, 7 février 1964, p. 3, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000169264."] },
    { id: "mq-r1-d2", title: "Document 2", layout: "text-only",
      text: "« Un amendement apporté en mai [1969] au Code pénal autorisait la publication de renseignements sur les appareils de contraception. »",
      sources: ["Source : Auteur inconnu, « Le Planned Parenthood voudrait être reconnu comme organisme de charité », Le Devoir, 16 septembre 1969, p. 11, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0005226335."] }
  ],

  // ===== V-A Q6 — Situer dans l'espace — 2 régions minières (carte à lettres) =====
  // Carte D-Maps avec 4 cercles A-D superposés. Réponse : C (Abitibi-Témiscamingue) et D (Côte-Nord).
  'mq-situer-2': [
    { id: "mq-s2-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/mq-situer-2/doc1.png", imageWidthCm: 12,
      sources: ["Source du fond de carte : Carte du Québec (Canada), D-Maps (d-maps.com). Lettres ajoutées pour les besoins de la question."] }
  ],

  // ===== V-A Q7 — Différences/similitudes — Moyens PQ vs FLQ pour la souveraineté =====
  // Doc 7 source (FLQ + Lévesque/PQ, deux acteurs) splitté en 2 documents distincts.
  'mq-differences-2': [
    { id: "mq-d2-d1", title: "Document 1", layout: "text-only",
      text: "« De 1963 à 1970, le Front de libération du Québec (FLQ) [...] mène entre autres des attaques sur des symboles du pouvoir britannique, pose des bombes et organise des vols de banques. En octobre 1970, le FLQ enlève le commissaire commercial britannique James Richard Cross et le ministre du Travail du Québec Pierre Laporte. En échange de la libération de ces deux personnes, le FLQ demande une rançon, la libération de prisonniers politiques et la lecture de son manifeste dans les médias. »",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "mq-d2-d2", title: "Document 2", layout: "text-only",
      text: "René Lévesque, chef du Parti québécois, lorsque son parti a été porté au pouvoir pour la première fois en 1976 :\n\n« Et je répète en particulier cet engagement central [...] : du fond de notre cœur à tous, on espère, en amitié avec nos concitoyens du Canada, arriver à nous donner le pays qu'est le Québec [...]. Mais ce pays du Québec viendra uniquement quand une société adulte, consciente en elle-même, l'aura approuvé par une majorité claire et démocratique dans un référendum, comme nous l'avons promis. »",
      sources: ["Source : Le Choix du Québec, 15 novembre 1976, Société Radio-Canada, 09:26-09:53 et 10:23-10:47."] }
  ],

  // ===== V-A Q8 — Changements/continuités — Agriculture (machinerie + électrification) =====
  // Doc 10 source (tableau tracteurs) → Doc 1 (image recréée via PIL) ; Doc 11 source → Doc 2.
  'mq-continuite-1': [
    { id: "mq-co1-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/mq-continuite-1/doc1.png", imageWidthCm: 12,
      sources: ["Source des données : John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec, Sillery, Septentrion, 2003, p. 308."] },
    { id: "mq-co1-d2", title: "Document 2", layout: "text-only",
      text: "« Pour bon nombre d'agriculteurs des années 1950, le règne de Duplessis n'a rien d'une grande noirceur. En effet, grâce à l'Office de l'électrification rurale, créé en 1945, la plupart d'entre eux voient enfin la lumière ! En 1960, 98 % des fermes ont l'électricité, alors qu'en 1945 seulement 20 % d'entre elles avaient le courant. »",
      sources: ["Source : Éric Bédard, L'histoire du Québec pour les nuls, Paris, First Edition, 2015, p. 257."] }
  ],

  // ===== V-A Q9 — Causalité — Politique fédérale → autonomie de Duplessis =====
  // Docs 9, 13, 12 source → Docs 1, 2, 3.
  'mq-causalite-1': [
    { id: "mq-ca1-d1", title: "Document 1", layout: "text-only",
      text: "« On fait en sorte que, lors de la Deuxième Guerre mondiale, la centralisation ait des effets plus durables, [avec] certains amendements à la Constitution [qui] permettent au Parlement [fédéral] de créer l'assurance-chômage (1940) et un régime universel de pensions (1951). »",
      sources: ["Source : C. P. Stacey, « Deuxième Guerre mondiale », L'Encyclopédie canadienne, dernière mise à jour le 13 mai 2015, page consultée le 27 octobre 2020."] },
    { id: "mq-ca1-d2", title: "Document 2", layout: "text-only",
      text: "« [...] Ses luttes contre le gouvernement fédéral visent [...] à défendre les compétences et les pouvoirs conférés aux provinces par l'Acte de l'Amérique du Nord britannique (AANB) et menacés par le fédéral [...]. »",
      sources: ["Source : « Gouvernement Maurice Duplessis (2e) », Wikipédia, dernière modification le 21 juin 2020, page consultée le 27 octobre 2020."] },
    { id: "mq-ca1-d3", title: "Document 3", layout: "text-only",
      text: "« Avant 1942, la taxation était de juridiction provinciale. Mais au cours de la guerre, le gouvernement fédéral a demandé aux provinces de lui céder temporairement ses champs de taxation afin de lui permettre de financer son effort de guerre. Une fois le conflit terminé, le premier ministre du Québec, Maurice Duplessis, tente d'obtenir un rétablissement de la situation telle qu'elle existait avant le conflit. [...] Duplessis fera de cet enjeu un véritable cheval de bataille. »",
      sources: ["Source : Auteur inconnu, dans Jean-Herman Guay (dir.), Bilan du siècle, Université de Sherbrooke, page consultée le 17 septembre 2019."] }
  ],

  // ===== V-B Q1 — Causes/conséquences — Conséquence des pensionnats sur l'identité autochtone =====
  'mq-causes-3': [
    { id: "mq-c3-d1", title: "Document 1", layout: "text-only",
      text: "« [...] Les élèves sont isolés, retirés de leur foyer et séparés de leurs parents et parfois de certains de leurs frères et sœurs, les écoles étant séparées selon le sexe. Leur culture est également dénigrée et, dans certains cas, on leur interdit de parler leur langue maternelle, même dans les lettres qu'ils adressent à leurs parents [...]. Dès leur arrivée à l'école, on leur coupe les cheveux (dans le cas des garçons), on les dépouille de leurs vêtements traditionnels et on les remplace par de nouveaux uniformes. Dans bien des cas, on leur donne aussi un nouveau nom [...]. »",
      sources: ["Source : J. R. Miller, « Pensionnats indiens au Canada », L'Encyclopédie canadienne, 2 septembre 2020, Historica Canada, page consultée le 13 octobre 2020."] }
  ],

  // ===== V-B Q2 — Mettre en relation — Autonomie de Duplessis (culturelle + fiscale) =====
  // Doc 3 source (drapeau fleurdelisé, image) → Doc 1 ; Doc 6 source (entente fiscale) → Doc 2.
  'mq-relation-2': [
    { id: "mq-r2-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/mq-relation-2/doc1.png", imageWidthCm: 8,
      sources: ["Source de l'image : Drapeau fleurdelisé du Québec, Flickr (flickr.com)."] },
    { id: "mq-r2-d2", title: "Document 2", layout: "text-only",
      text: "« [...] les pourparlers entre les deux premiers ministres, Louis Saint-Laurent à Ottawa et Maurice Duplessis à Québec, aboutiront à une entente. Grâce aux ajustements qui prévoient une réduction de l'impôt fédéral, le gouvernement québécois pourra reprendre une partie de son autonomie fiscale sans que les contribuables québécois ne soient pénalisés par rapport à leurs compatriotes des autres provinces. »",
      sources: ["Source : Bilan du siècle, Université de Sherbrooke, en ligne, page consultée le 19 octobre 2020."] }
  ],

  // ===== V-B Q3 — Causalité — Libéralisme de Duplessis → exploitation des ressources =====
  // Docs 5, 7, 2 source → Docs 1, 2, 3.
  'mq-causalite-2': [
    { id: "mq-ca2-d1", title: "Document 1", layout: "text-only",
      text: "« [...] La prospérité et le progrès [...] passent par le laisser-faire [...]. Aucune valeur ne semble plus importante que celle de la propriété privée et son épanouissement dans la recherche du profit maximum. [...] »",
      sources: ["Source : Fernande Roy, Histoire des idéologies au Québec aux XIXe et XXe siècles, Montréal, Éditions du Boréal, 1993, p. 95-96, en ligne sur Service national du RÉCIT, domaine de l'univers social, page consultée le 19 octobre 2020."] },
    { id: "mq-ca2-d2", title: "Document 2", layout: "text-only",
      text: "« [...] Tout au cours de la période, [les Américains] conservent la part du lion en ce domaine, assurant environ les trois quarts des investissements étrangers [...]. Le contrôle étranger est particulièrement concentré [...] dans l'exploitation des ressources naturelles [...]. »",
      sources: ["Source : Paul-André Linteau, René Durocher, Jean-Claude Robert et François Ricard, Histoire du Québec contemporain. Le Québec depuis 1930, Montréal, Boréal compact, 1989, p. 231."] },
    { id: "mq-ca2-d3", title: "Document 3", layout: "text-only",
      text: "« [...] l'industrie minière s'est signalée non seulement par une croissance rapide, mais aussi par son déplacement vers les régions nordiques du Québec. L'exploitation du minerai de fer, en particulier, s'est développée d'une façon spectaculaire. [...] »",
      sources: ["Source : Marcel Daneau, « L'évolution économique du Québec-II (1950-1965) », La revue Desjardins, décembre 1965, p. 189, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0005226567, page consultée le 19 octobre 2020."] }
  ],

  // ===== V-B Q4 — Changements/continuités — Institutions démocratiques (1867 vs 1968) =====
  // Doc 12 source : schéma des institutions de 1867 (image) + texte sur la réforme de 1968.
  'mq-continuite-2': [
    { id: "mq-co2-d1", title: "Document 1", layout: "text-image",
      text: "En 1968, la Législature du Québec est réformée :\n\n« Ce projet prévoit que la Législature du Québec se composera désormais uniquement du lieutenant-gouverneur et d'une chambre élective qui sera appelée Assemblée nationale du Québec, au lieu d'Assemblée législative de Québec. [Ceux] qui voient leur poste disparaître ont pour leur part droit à une pension de 10 000 $ [...]. »",
      imageUrl: "assets/img/mq-continuite-2/doc1.png", imageWidthCm: 8,
      sources: ["Source de l'image : Service national du RÉCIT, domaine de l'univers social (schéma des institutions selon l'Acte de l'Amérique du Nord britannique de 1867). Source du texte : Bilan du siècle, Université de Sherbrooke, page consultée le 17 novembre 2020."] }
  ],

  // ===== V-B Q5 — Situer dans le temps — Commission B&B (ligne du temps) =====
  'mq-situer-3': [
    { id: "mq-s3-d1", title: "Document 1", layout: "text-only",
      text: "« La Commission enquête sur trois aspects principaux de la question : l'étendue du bilinguisme dans l'administration fédérale, le rôle des organismes publics et privés dans la promotion de meilleures relations culturelles et les perspectives offertes aux Canadiens de devenir bilingues en français et en anglais. Les commissaires s'appuient sur le principe directeur d'un partenariat égal, c'est-à-dire l'égalité des chances, pour les francophones et les anglophones, de faire partie des institutions qui affectent leur vie. »",
      sources: ["Source : G. Laing et Céline Cooper, « Commission royale d'enquête sur le bilinguisme et le biculturalisme », L'Encyclopédie canadienne, 24 juillet 2019, Historica Canada, page consultée le 22 octobre 2020."] }
  ],

  // ===== V-B Q6 — Différences/similitudes — 3 acteurs sur la place du Québec dans la fédération =====
  // Doc 9 source (3 acteurs : Bourassa, Lévesque, Bertrand) splitté en 3 documents distincts.
  'mq-differences-3': [
    { id: "mq-d3-d1", title: "Document 1", layout: "text-only",
      text: "« Le fédéralisme constitue pour les Québécois le meilleur moyen d'atteindre leurs objectifs économiques, sociaux et culturels. [...] le gouvernement s'applique à renforcer le fédéralisme canadien [...]. Ce fédéralisme doit ainsi garantir aux provinces la liberté d'action nécessaire pour qu'elles assument pleinement leurs responsabilités à l'égard de leurs citoyens. »\n\nRobert Bourassa, premier ministre du Québec, 1971",
      sources: ["Source : Assemblée nationale du Québec, Déclaration de Robert Bourassa, Journal des débats, 29e législature, 23 juin 1971, vol. 11, no 64, p. 2738-2739, page consultée le 26 octobre 2020."] },
    { id: "mq-d3-d2", title: "Document 2", layout: "text-only",
      text: "« [...] Parallèlement, le gouvernement précisera l'option qu'il proposera lui-même, de concert avec ceux qui seront de son avis, au peuple québécois. Cette option, c'est celle de la souveraineté nationale, comme chacun sait, c'est-à-dire le seul régime qui puisse, à notre avis, assurer notre pleine sécurité et notre plein épanouissement. [...] »\n\nRené Lévesque, premier ministre du Québec, 1977",
      sources: ["Source : Discours du trône, Québec, 8 mars 1977, Société du patrimoine politique du Québec, page consultée le 26 octobre 2020."] },
    { id: "mq-d3-d3", title: "Document 3", layout: "text-only",
      text: "« [...] Il est de l'essence même du fédéralisme que les pouvoirs législatifs et fiscaux soient clairement répartis dans une constitution écrite entre la fédération et les États membres. C'est ce que réclame le Québec depuis toujours. »\n\nJean-Jacques Bertrand, chef de l'opposition, Québec, 1971",
      sources: ["Source : Jean-Jacques Bertrand, « Le Québec a dit non au pouvoir parallèle de la centralisation », cité dans Le Devoir, 25 juin 1971, p. 4, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0005226335, page consultée le 26 octobre 2020."] }
  ],

  // ===== V-B Q7 — Causes/conséquences — Création du ministère des Affaires culturelles =====
  // Doc 10 source (motivation/cause) → Doc 1 ; Doc 1 source (outil/conséquence) → Doc 2.
  'mq-causes-4': [
    { id: "mq-c4-d1", title: "Document 1", layout: "text-only",
      text: "« [...] le gouvernement a l'intention de faire de la province de Québec le centre de rayonnement de la culture française en Amérique [...]. Nous croyons que la création d'un ministère [...] est une nécessité vitale, surtout au moment où la population du Québec dans son ensemble est plus que jamais éveillée à l'apport qu'elle pourra fournir à l'épanouissement de notre vie nationale [...]. »",
      sources: ["Source : « Création du ministère des Affaires culturelles du Québec », Bilan du siècle, Université de Sherbrooke, page consultée le 26 octobre 2020."] },
    { id: "mq-c4-d2", title: "Document 2", layout: "text-only",
      text: "« [...] le Ministère se révèle, au cours des années, un outil indispensable aux mains de l'État québécois pour poursuivre le travail commencé, le revitaliser, le bonifier et l'élargir aux nouveaux défis qui se présentent : qualité de la langue, bibliothèques publiques accessibles à tous, dynamisation de la vie culturelle [...]. »",
      sources: ["Source : Gilles Durand, « Le 50e anniversaire du ministère des Affaires culturelles », Commission franco-québécoise sur les lieux de mémoire communs, Bulletin no 33, décembre 2011, page consultée le 26 octobre 2020."] }
  ],

  // ===== V-B Q8 — Situer dans le temps — Ordre chrono des gains des femmes =====
  // Docs 13-16 source → Docs 1-4. Ordre chrono : Doc 2 (capacité jur. 1964) → Doc 1 (divorce 1968)
  // → Doc 4 (contraception 1969) → Doc 3 (congé maternité 1979). Doc 1 (divorce) pré-rempli (pos. 2).
  'mq-situer-4': [
    { id: "mq-s4-d1", title: "Document 1", layout: "text-only",
      text: "« [...] Une fois la loi canadienne et son administration mises en place, [...] une importante course au divorce par les couples québécois, dont l'ampleur n'est pas prévue par l'État, force la province à modifier ses lois matrimoniales. Le mariage civil et l'insertion du divorce dans le Code civil québécois viennent laïciser le mariage et rendre la loi fédérale applicable au Québec [...]. »",
      sources: ["Source : Jennifer Doyon, Le divorce au Québec… un débat de société, 2011, en ligne sur Savoirs UdeS (Université de Sherbrooke), page consultée le 27 octobre 2020."] },
    { id: "mq-s4-d2", title: "Document 2", layout: "text-only",
      text: "« Cette loi permet aux femmes d'être les égales de leur mari sur le plan juridique. Dès lors, elles peuvent ainsi exercer une profession, signer un contrat, intenter un procès, être exécutrices testamentaires ou gérer leurs propres biens, et ce, sans l'autorisation de leur conjoint. La loi met aussi un terme au devoir d'obéissance au mari. »",
      sources: ["Source : Assemblée nationale du Québec, Par ici la démocratie, page consultée le 27 octobre 2020."] },
    { id: "mq-s4-d3", title: "Document 3", layout: "text-only",
      text: "« [...] une nouvelle politique familiale provinciale entre en vigueur. Les Québécoises salariées peuvent désormais se prévaloir d'un congé de maternité de dix-huit semaines sans risquer de perdre leur emploi. »",
      sources: ["Source : « La reconnaissance du congé de maternité au Québec, c'était il y a 40 ans », Archives Radio-Canada, 7 janvier 2019, page consultée le 27 octobre 2020."] },
    { id: "mq-s4-d4", title: "Document 4", layout: "text-image",
      text: "« La contraception fait aussi l'objet d'une libéralisation plus poussée [...] : la diffusion d'informations à ce sujet ainsi que la vente de contraceptifs sont retirées du Code criminel [...]. »",
      imageUrl: "assets/img/mq-situer-4/doc4.png", imageWidthCm: 5,
      sources: ["Source du texte : Paul-André Linteau, René Durocher, Jean-Claude Robert et François Ricard, Histoire du Québec contemporain. Le Québec depuis 1930, Montréal, Boréal compact, 1989, p. 618. Source de l'image : Pilule contraceptive, Wikimedia Commons, en ligne."] }
  ],

  // ===== V-B Q9 — Causes/conséquences — Rejet du Livre blanc de 1969 =====
  'mq-causes-5': [
    { id: "mq-c5-d1", title: "Document 1", layout: "text-only",
      text: "« [...] Aux yeux de plusieurs critiques, il s'agissait là d'une tentative voilée de se débarrasser des traités, les ententes de nation à nation [...]. Pour les peuples autochtones au Canada, cela n'était simplement qu'une autre tentative de disperser leurs nations et de les forcer à s'assimiler à une société eurocanadienne. Ils croyaient que, si cette situation s'avérait, leurs aspirations de gouverner leurs propres affaires seraient ruinées à jamais. »",
      sources: ["Source : Vies volées : les peuples autochtones au Canada et le régime des pensionnats, chapitre 8, « Livre blanc, livre rouge », Facing History and Ourselves, page consultée le 27 octobre 2020."] }
  ],

  // ======================================================================
  // ========= P7 (1945-1980) — Guides pédagogiques RÉCIT (v1.26.0) ========
  // ======================================================================

  // ===== Néonationalisme Q1 — Établir des faits — Mouvement souverainiste 1960-1970 =====
  // Docs 1-3 source. NB : Doc 1 (Lévesque 1976) partage la source de mq-differences-2/doc2
  // (sommative V-A Q7) ; conservé car l'OI (établir des faits) et l'ensemble documentaire diffèrent.
  'mq-faits-1': [
    { id: "mq-f1-d1", title: "Document 1 — Extrait du discours de victoire de René Lévesque, 1976", layout: "text-only",
      text: "« Et je répète en particulier cet engagement central [...] : du fond de notre cœur à tous, on espère, en amitié avec nos concitoyens du Canada, arriver à nous donner le pays qu'est le Québec [...]. Mais ce pays du Québec viendra uniquement quand une société adulte, consciente en elle-même, l'aura approuvé par une majorité claire et démocratique dans un référendum, comme nous l'avons promis. »",
      sources: ["Source : Transcription de Le Choix du Québec, 15 novembre 1976, Société Radio-Canada, 09:26-09:53 et 10:23-10:47."] },
    { id: "mq-f1-d2", title: "Document 2 — Extrait d'un article de journal publié en juin 1970", layout: "text-only",
      text: "« Par ailleurs, le [...] porte-parole officiel du Parti québécois [...] a rappelé que son parti s'est toujours prononcé contre les attentats à la bombe et toutes les autres formes de violence, et que c'est par des moyens démocratiques et pacifiques qu'il allait réaliser l'indépendance du Québec. »",
      sources: ["Source : Auteur inconnu, « Cinq bombes explosent à Westmount », Le Soleil du Saguenay-Lac-Saint-Jean, 1er juin 1970, p. 1, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0005221050."] },
    { id: "mq-f1-d3", title: "Document 3 — Extrait d'un article de la revue L'Indépendance, publiée en 1966 par le RIN", layout: "text-only",
      text: "« Le RIN veut faire du Québec un état indépendant et démocratique avec l'assentiment de la majorité de la population. Depuis cinq ans qu'il poursuit son travail d'organisation [...], le RIN a fait des progrès remarquables. Par d'innombrables assemblées dans tous les coins du Québec, par de nombreuses études, brochures et tracts, et depuis quatre ans, par la diffusion de son journal L'Indépendance, le RIN a grandement contribué à l'éveil de la population aux réalités économiques, politiques, sociales et culturelles du Québec. »",
      sources: ["Source : Rassemblement pour l'indépendance nationale, « Choisissez votre avenir », L'Indépendance, supplément no 1, 25 octobre 1966, p. 5, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0006288942."] }
  ],

  // ===== Néonationalisme Q2 — Situer dans le temps — Montée du Parti québécois =====
  // Docs 4-7 source → Docs 1-4. Ordre chrono : Doc 2 (RIN 1966) → Doc 3 (MSA 1967) →
  // Doc 4 (congrès PQ 1968) → Doc 1 (élection PQ 1976).
  'mq-situer-5': [
    { id: "mq-s5-d1", title: "Document 1 — Extrait de la soirée électorale de Radio-Canada (Bernard Derome)", layout: "text-only",
      text: "« Radio-Canada, à 8 heures 40 minutes, prévoit que le prochain gouvernement du Québec sera formé par le Parti québécois et que ce gouvernement sera majoritaire. »",
      sources: ["Source : Transcription de Le Choix du Québec, Société Radio-Canada, 00:00-00:12."] },
    { id: "mq-s5-d2", title: "Document 2 — Extrait d'un article de journal publié en 1966", layout: "text-only",
      text: "« Le chef du Rassemblement pour l'indépendance nationale, M. Pierre Bourgault, a déclaré hier soir que le résultat des élections québécoises “place définitivement le RIN sur la carte politique du Québec”. M. Bourgault a affirmé que ce résultat, qui a accordé environ 8 % des voix au RIN, peut signifier que son parti “va balayer la province aux prochaines élections”. »",
      sources: ["Source : Presse canadienne, « Bourgault : Le RIN est sur la carte », La Tribune, p. 1, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0004875943."] },
    { id: "mq-s5-d3", title: "Document 3 — Extrait d'un article de journal", layout: "text-only",
      text: "« En septembre, c'est au tour du député libéral de Laurier, M. René Lévesque, d'ajouter son grain de sel. Dans un manifeste publié le 15 septembre, le député libéral fait savoir qu'il opte pour la souveraineté du Québec dans le cadre d'une union économique avec le Canada. Le 14 octobre, sa thèse est rejetée par le parti libéral [...]. Lévesque quitte le parti libéral pour fonder le mouvement souveraineté-association, qui se répand comme une traînée de poudre à travers la province. »",
      sources: ["Source : Pierre Godin, « De Gaulle découvre le Québec et le fait découvrir au Canada anglais », La Presse, p. 32, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000082812."] },
    { id: "mq-s5-d4", title: "Document 4 — Extrait d'une émission de Radio-Canada (Louis Martin), 1968", layout: "text-only",
      text: "« Le congrès de fusion du Mouvement souveraineté-association et du Ralliement national vient de prendre fin à Québec. Ce congrès a réuni pendant plus de trois jours quelque 800 délégués en provenance de 98 comtés québécois. Le nouveau parti s'est donné un statut, un programme, un nom et un chef : monsieur René Lévesque, leader, ou président si vous préférez, du Parti québécois. »",
      sources: ["Source : Transcription de Deux plus un, Société Radio-Canada, 00:00-00:30."] }
  ],

  // ===== Néonationalisme Q3 — Différences/similitudes — RIN vs Daniel Johnson =====
  // Docs 8-9 source → Docs 1-2.
  'mq-differences-4': [
    { id: "mq-d4-d1", title: "Document 1 — Extrait d'un rapport publié en 1964 par le RIN", layout: "text-only",
      text: "« Depuis que la Confédération existe, la nation canadienne-française a consacré une grande partie de ses énergies à lutter contre l'assimilation et contre la centralisation fédérale. [...] Dans cette optique, l'indépendance du Québec est la seule formule qui règle une fois pour toutes le problème de la coexistence des deux nations [...]. Avec l'indépendance, tout conflit qui opposerait le Québec et le Canada serait situé sur le plan international entre deux peuples égaux devant le monde [...]. »",
      sources: ["Source : Rassemblement pour l'indépendance nationale (RIN), Mémoire du Rassemblement pour l'indépendance nationale au comité parlementaire de la constitution, 1964, p. 30-31."] },
    { id: "mq-d4-d2", title: "Document 2 — Opinion exprimée en 1965 dans un livre de Daniel Johnson, chef de l'Union nationale", layout: "text-only",
      text: "« Nous avons vu que la cause principale de nos difficultés présentes réside dans l'absence d'une constitution adaptée aux réalités politiques et sociologiques du Canada moderne. [...] La seule façon d'y parvenir est de rédiger un nouveau texte dont la base soit la reconnaissance des deux nations, qui ait assez de souplesse pour nous laisser évoluer à notre guise [...]. [...] je préfère, pour ma part, avant de me résoudre à l'ultime recours du séparatisme, tenter tout ce qui peut encore être tenté, pour que la nation canadienne-française puisse se sentir chez elle, comme dans une véritable patrie, dans la totalité du Canada. »",
      sources: ["Source : Daniel Johnson, Égalité ou indépendance, Ottawa, Éditions Renaissance, 1965, p. 83, 90, 105 et 109."] }
  ],

  // ===== Période duplessiste Q1 — Situer dans l'espace — Ressources naturelles ~1960 =====
  // Docs 1-6 = textes (régions) ; Doc 7 = carte à lettres A-F. Réponse : A=Doc3, B=Doc4, C=Doc6,
  // D=Doc5, E=Doc2, F=Doc1.
  'mq-situer-6': [
    { id: "mq-s6-d1", title: "Document 1 — Fer et titane", layout: "text-only",
      text: "Entre 1948 et 1950, la première compagnie d'extraction de minerais québécoise commence l'exploitation du titane et du fer des lacs Tio et Allard, près de Havre-Saint-Pierre. C'est le premier port minier de la Côte-Nord. Dans les années 1950 et 1960, la compagnie exporte entre 1 et 1,5 million de tonnes de minerais chaque année, alors que cette production était inexistante auparavant.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "mq-s6-d2", title: "Document 2 — Fer", layout: "text-only",
      text: "Dans les années 1950, la compagnie Iron Ore, financée par des capitaux américains, se donne les moyens d'exploiter les gisements de fer du Nouveau-Québec. Pour cela, elle fait construire une ligne de chemin de fer de 574 km qui relie Sept-Îles à Schefferville. En 1954, les tout premiers chargements de fer sont expédiés. En cinq ans, la valeur de la production explose et atteint 92 millions de dollars. Sept-Îles devient un des ports maritimes les plus fréquentés, surtout après l'ouverture de la voie maritime du Saint-Laurent.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "mq-s6-d3", title: "Document 3 — Métaux", layout: "text-only",
      text: "En plus du fer, l'exploitation des autres métaux connait aussi une hausse importante, particulièrement en Abitibi et dans le Nord-du-Québec. La production du cuivre fait plus que tripler, alors que celle d'amiante double. L'or, l'argent, le zinc, le nickel et le molybdène sont également en croissance.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "mq-s6-d4", title: "Document 4 — Pâtes et papiers", layout: "text-only",
      text: "Le secteur des pâtes et papiers connait un âge d'or après la Seconde Guerre mondiale. Le Canada demeure le chef de file mondial de la production de papier journal. Au Québec, c'est l'industrie qui emploie le plus grand nombre de travailleurs, avec plus de 25 000 travailleurs, notamment dans les régions de la Mauricie, de l'Outaouais et de l'Abitibi. Une première école nationale de papeterie ouvre ses portes à Trois-Rivières.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "mq-s6-d5", title: "Document 5 — Hydroélectricité", layout: "text-only",
      text: "Dans le but de répondre aux besoins des nouvelles exploitations minières et à la demande industrielle, de nouvelles centrales hydroélectriques sont mises en chantier. Sur la Côte-Nord, le gouvernement québécois confie à Hydro-Québec le soin de construire deux centrales à l'ouest de Baie-Comeau : les centrales Bersimis 1 (ouverte en 1956) et Bersimis 2 (ouverte en 1959). En Abitibi et en Outaouais, de nouvelles centrales sont également mises en service.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "mq-s6-d6", title: "Document 6 — Canaux et écluses", layout: "text-only",
      text: "Pour faciliter l'acheminement des ressources naturelles vers l'intérieur du continent, les États-Unis et le Canada lancent ensemble un vaste projet de construction d'écluses et de canaux. Ouverte en 1959, la voie maritime du Saint-Laurent permet à des navires de 225 mètres de long et de 23 mètres de large de naviguer de l'océan Atlantique jusqu'aux Grands Lacs. Cet axe de navigation contourne des obstacles tels que les rapides de Lachine ou les chutes du Niagara. Il accentue le mouvement de continentalisation de l'économie.",
      sources: ["Source du texte : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "mq-s6-d7", title: "Document 7 — L'exploitation des ressources naturelles en 1960", layout: "image-only",
      imageUrl: "assets/img/mq-situer-6/doc7.png", imageWidthCm: 14,
      sources: ["Source de l'image : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== Période duplessiste Q2 (chrono) + Q3 (causes/cons) — Grève de l'amiante =====
  // Docs 7-9 source → Docs 1-3. Section partagée par mq-situer-7 (chrono) et mq-causes-6 (causes/cons).
  'mq-situer-7': [
    { id: "mq-s7-d1", title: "Document 1 — Extrait d'un article de journal", layout: "text-only",
      text: "« Les actes de violence d'hier, les plus graves depuis le début de cette grève de 5 000 mineurs, [...] ont nécessité ces renforts policiers, armés de bombes lacrymogènes, de mitraillettes Sten et de revolvers réglementaires. On a rapporté que 12 des 60 policiers provinciaux en devoir à Asbestos et 14 des grévistes ont été blessés hier. »",
      sources: ["Source : Auteur inconnu, « L'acte d'émeute lu à Asbestos », Le Soleil, p. 1 et 12, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0004878815."] },
    { id: "mq-s7-d2", title: "Document 2 — Extrait d'un article de journal", layout: "text-only",
      text: "« M. Jean Marchand, secrétaire général de la Confédération des travailleurs catholiques du Canada, a annoncé hier soir que le syndicat des mineurs d'amiante a signé les contrats collectifs de travail de 1949 et 1950 avec deux des compagnies de Thetford. [...] Le contrat collectif de 1950 inclut une augmentation de 10 cents l'heure, en plus d'un boni de vie chère [...], quatre congés chômés et payés durant l'année et une semaine de vacances après un an de service [...]. L'entente met donc fin à une dispute qui a déjà causé une grève générale de 4 mois et demi [...]. »",
      sources: ["Source : Auteur inconnu, « Contrat signé à Thetford », La Tribune, p. 3, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0004875943."] },
    { id: "mq-s7-d3", title: "Document 3 — Extrait d'un article de journal", layout: "text-only",
      text: "« Grève générale de l'amiante — 5 000 mineurs ont déjà quitté le travail. Quelque 2 500 mineurs d'Asbestos sont entrés en grève hier soir, ce qui porte à 5 000 le nombre des ouvriers de l'amiante actuellement en grève dans la région. [...] Les ouvriers d'Asbestos sont entrés en grève pour deux raisons : d'abord pour obtenir une augmentation de salaire de 15 cents l'heure, ensuite pour que la compagnie accepte de signer une clause, dans le contrat de travail, par laquelle elle s'engagerait à employer les moyens les plus efficaces et les plus modernes pour assurer la suppression de la poussière d'amiante à l'intérieur et à l'extérieur des usines. »",
      sources: ["Source : Auteur inconnu, « Grève générale de l'amiante », Le Devoir, p. 1, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0005226335."] }
  ],

  // ===== Population Q1 — Causes/conséquences — Causes de la dénatalité (fin du baby-boom) =====
  'mq-causes-7': [
    { id: "mq-c7-d1", title: "Document 1 — Extrait d'un article de journal publié en 1968", layout: "text-only",
      text: "« La “pilule” se vend bien au Canada, si bien même qu'elle rapporte plus de 30 000 000 $ par année et que, devant la demande croissante au Québec, les compagnies de produits pharmaceutiques jugent nécessaire de faire imprimer le mode d'emploi en français aussi bien qu'en anglais. [...] La vente de “la pilule” est toujours illégale au Canada, mais cinq compagnies de Toronto estiment que sa légalisation ne changera rien à leur chiffre d'affaires. Plus d'un million de Canadiennes prennent déjà la “pilule” régulièrement. »",
      sources: ["Source : PC, « La pilule connaît une vague croissante au Québec », La Presse, 2 janvier 1968, p. 37, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000082812."] },
    { id: "mq-c7-d2", title: "Document 2 — Extrait d'un article de revue publié en 1967", layout: "text-only",
      text: "« On constate, dans le Québec, une baisse considérable de la pratique religieuse. [...] elles indiquent assez clairement un changement accéléré qui se produit non seulement chez la jeunesse étudiante et dans le monde universitaire, mais également dans la population ouvrière des villes [...]. Dans certaines paroisses ouvrières de Montréal, le taux de pratique est de l'ordre de 30 à 40 pour cent, taux qui continue à baisser avec la disparition des plus âgés. [...] »",
      sources: ["Source : Vincent Harvey, « Le Dieu des sans-messe », Maintenant, juin-juillet 1967, p. 210, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0005021251."] },
    { id: "mq-c7-d3", title: "Document 3 — Répartition de la force de travail canadienne selon le sexe (1941-1971)", layout: "image-only",
      imageUrl: "assets/img/mq-causes-7/doc3.png", imageWidthCm: 13,
      sources: ["Source des données : Statistique Canada, « Séries D8-85, Force de travail, par branche d'activité et sexe, années de recensement, 1911 à 1971 », Statistiques historiques du Canada, section D."] }
  ],

  // ===== Population Q2 — Établir des faits — Caractéristiques de la société de consommation =====
  'mq-faits-2': [
    { id: "mq-f2-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/mq-faits-2/doc1.png", imageWidthCm: 6,
      sources: ["Source de l'image : Conrad Poirier, Commercial. Evercold (1949), Bibliothèque et Archives nationales du Québec, P48,S1,P17436. Licence : domaine public."] },
    { id: "mq-f2-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/mq-faits-2/doc2.png", imageWidthCm: 5,
      sources: ["Source de l'image : Ernest Sénécal, Visitez la province de Québec (vers 1950), Bibliothèque et Archives nationales du Québec, notice 0003009942. Licence : domaine public."] },
    { id: "mq-f2-d3", title: "Document 3", layout: "image-only",
      imageUrl: "assets/img/mq-faits-2/doc3.png", imageWidthCm: 7,
      sources: ["Source de l'image : Gabor Szilasi, Salon de l'automobile, Place Bonaventure, Montréal (1970), Bibliothèque et Archives nationales du Québec, E6,S7,SS1,D700114-700115. Licence : Creative Commons (BY-NC-ND)."] },
    { id: "mq-f2-d4", title: "Document 4 — Extrait d'une émission de radio, 1978", layout: "text-only",
      text: "« Le phénomène des centres d'achats est passé sur le commerce de détail il y a une quinzaine d'années comme un véritable raz-de-marée. [...] Je pense que les banlieusards en particulier trouvent dans le centre d'achats la formule idéale pour le consommateur un peu fortuné et le consommateur pressé, le consommateur motorisé. Le centre d'achats répond à ses désirs, et c'est pour ça d'ailleurs que les centres d'achats ont connu une popularité comme vous le connaissez. »",
      sources: ["Source : Transcription de Consommateurs plus, 22 septembre 1978, Société Radio-Canada."] }
  ],

  // ===== Population Q4 — Causalité — Pensionnats et assimilation des Autochtones =====
  // Docs 9, 10, 11 source → Docs 1, 2, 3 (Doc 3 = carte des pensionnats, image).
  'mq-causalite-3': [
    { id: "mq-ca3-d1", title: "Document 1 — Témoignage de Lucie Basile, ancienne élève du pensionnat de Pointe-Bleue", layout: "text-only",
      text: "« La culpabilité qu'on nous faisait subir au pensionnat nous empêchait de développer une relation saine avec nos parents. On nous reprochait tellement de choses sans raison, on culpabilisait. Puis nos parents nous adulaient presque parce qu'on était “bien élevés”, ils ne nous apprenaient rien de notre culture, de peur de défaire ce qu'on avait appris [dans les pensionnats]. On ne pouvait pas regarder nos parents dans les yeux. »",
      sources: ["Source : Lucie Basile, « Témoignage », cité dans Henri Goulet, Histoire des pensionnats indiens catholiques au Québec, Montréal, Les Presses de l'Université de Montréal, 2016."] },
    { id: "mq-ca3-d2", title: "Document 2 — Extrait d'un article de journal", layout: "text-only",
      text: "« Nous avons le devoir d'apporter les bienfaits de notre civilisation aux Indiens [Premières Nations] et aux Esquimaux [Inuits] du Nord canadien. Comme nous, ils sont Canadiens et comme nous aussi ils font partie de notre grande famille nationale. [Jean Lesage, ministre fédéral du Nord canadien et des Ressources naturelles] précisait que l'instruction des Indiens aussi bien que des Esquimaux est urgente, parce que des tâches importantes dans l'administration des territoires du nord devront être remplies avec avantage par des citoyens de ces régions. »",
      sources: ["Source : Auteur inconnu, « Quelques aspects du problème éducatif et économique du Nord », L'Action catholique, 5 janvier 1956, p. 3 et 15, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000169215."] },
    { id: "mq-ca3-d3", title: "Document 3 — Carte des pensionnats autochtones du Québec au 20e siècle", layout: "image-only",
      imageUrl: "assets/img/mq-causalite-3/doc3.png", imageWidthCm: 11,
      sources: ["Source de l'image : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== Culture/langue Q1 — Changements/continuités — Théâtre québécois =====
  'mq-continuite-3': [
    { id: "mq-co3-d1", title: "Document 1 — Article de journal publié en 1975 (10 ans du Centre d'essai des auteurs dramatiques)", layout: "text-only",
      text: "« Depuis dix ans, quel chemin a parcouru le théâtre québécois ! [...] [E]n mai 1965, notre dramaturgie [...], mis à part quelques pionniers tels Gratien Gélinas ou Marcel Dubé, semblait sans avenir [...]. Les troupes professionnelles puisaient inlassablement au répertoire universel [international] sans être trop préoccupées par l'émergence souhaitable d'une dramaturgie ambiante [québécoise]. [...] Aujourd'hui, dix ans après, le Centre d'essai des auteurs dramatiques, c'est 185 pièces, 85 auteurs, 65 lectures publiques, 33 ateliers d'écriture [...]. C'est aussi et surtout un organisme qui s'occupe du nouvel auteur [...]. »",
      sources: ["Source : Martine Corrivault, « Les dix ans d'effort du Centre d'essai des auteurs dramatiques pour une dramaturgie sans complexes », Le Soleil, 22 octobre 1975, p. F14, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0004878815."] }
  ],

  // ===== Culture/langue Q2 — Changements/continuités — Financement des bibliothèques =====
  'mq-continuite-4': [
    { id: "mq-co4-d1", title: "Document 1 — Montant des subventions allouées aux bibliothèques du Québec, 1960 et 1969", layout: "image-only",
      imageUrl: "assets/img/mq-continuite-4/doc1.png", imageWidthCm: 13,
      sources: ["Source des données : Ministère des Affaires culturelles (Gouvernement du Québec), Rapport annuel 1968-69, Québec, 1969, p. 89, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000179764."] }
  ],

  // ===== Culture/langue Q3 — Situer dans le temps — Charte de la langue française (Loi 101) =====
  'mq-situer-8': [
    { id: "mq-s8-d1", title: "Document 1 — Préambule d'une loi québécoise", layout: "text-only",
      text: "« L'Assemblée nationale reconnaît la volonté des Québécois d'assurer la qualité et le rayonnement de la langue française. Elle est donc résolue à faire du français la langue de l'État et de la Loi aussi bien que la langue normale et habituelle du travail, de l'enseignement, des communications, du commerce et des affaires. »",
      sources: ["Source : Charte de la langue française, LQ, c. 5, préambule, en ligne sur Bibliothèque de l'Assemblée nationale du Québec."] }
  ],

  // ===== Culture/langue Q4 — Mettre en relation — Ministère de l'Immigration et langue française =====
  'mq-relation-3': [
    { id: "mq-r3-d1", title: "Document 1 — Extrait d'un article de journal, 1965", layout: "text-only",
      text: "« Le député Gabriel Loubier de l'Union nationale a [...] [demandé] que le Québec étudie la possibilité de créer un ministère de l'Immigration [...]. Les raisons invoquées par M. Loubier [...] sont les suivantes : 1) l'immigration dans le Québec doit être orientée dans le sens des intérêts économiques du Québec ; 2) le Québec doit s'occuper des immigrants qui viennent dans la province afin que l'immigration ne soit pas, entre les mains du gouvernement fédéral, un moyen de modifier la composition culturelle de la communauté québécoise ; 3) le Québec doit s'occuper des immigrants admis dans la province afin que ceux-ci puissent bénéficier de tous les services d'accueil et d'assistance qui leur sont nécessaires pour préserver leurs particularismes légitimes et pour faciliter leur apport à la vie québécoise. »",
      sources: ["Source : Auteur inconnu, « Créer un ministère de l'Immigration », L'Action, 3 février 1965, p. 14, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000169226."] }
  ],

  // ===== Mouvements sociaux Q1 — Causalité — Loi anti-briseurs de grève =====
  'mq-causalite-4': [
    { id: "mq-ca4-d1", title: "Document 1 — Extrait d'une loi québécoise adoptée en 1977", layout: "text-only",
      text: "« 97a. Il est interdit à un employeur : a) d'utiliser les services d'une personne pour remplir les fonctions d'un salarié représenté par une association accréditée [syndicat] qui a déclaré une grève ou d'un salarié lock-outé [...]. »",
      sources: ["Source : Loi modifiant le Code du travail et la Loi sur le ministère du Travail et de la Main-d'œuvre, LQ 1977, c. 41, art. 97, en ligne sur Bibliothèque de l'Assemblée nationale du Québec."] },
    { id: "mq-ca4-d2", title: "Document 2 — Extrait d'un article de journal publié en 1973", layout: "text-only",
      text: "« André Leclerc de la FTQ affirme la volonté des 400 grévistes appartenant à 17 entreprises différentes, qui ont occupé le ministère du Travail dans la journée d'hier [...]. Les manifestants veulent [...] remettre au ministre du Travail un manifeste par lequel ils [...] proposent [...] une série d'amendements au Code du travail, comme de déclarer illégale l'utilisation de “scabs” [briseurs de grève] et de forces policières pour assurer la production de l'entreprise [dont les travailleurs sont en grève]. »",
      sources: ["Source : Dominique Payette, « 400 grévistes oubliés rencontrent Cournoyer », La Presse, 28 août 1973, p. A3, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000082812."] },
    { id: "mq-ca4-d3", title: "Document 3 — Extrait d'un article de journal publié en 1973", layout: "text-only",
      text: "« Le 7UP coule encore à flot après 10 mois de grève : le produit est embouteillé à Sainte-Foy comme d'habitude, vendu partout dans le Québec métropolitain comme d'habitude [...]. L'arrêt de travail des 47 syndiqués, le 14 août 1972, n'a aucunement ralenti la production parce que le patron s'est rapidement trouvé des remplaçants [briseurs de grève]. [...] Rien ne forçait l'employeur à souhaiter un règlement du conflit, même pas le ministère du Travail [...]. »",
      sources: ["Source : Michel Choquette, Gilles Laframboise et Marc Saint-Pierre, « 3 grèves pourries », Le Soleil, 30 juin 1973, p. 19, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0004878815."] }
  ],

  // ===== Mouvements sociaux Q2 — Établir des faits — Madeleine Parent =====
  'mq-faits-3': [
    { id: "mq-f3-d1", title: "Document 1 — Extrait d'un article de journal publié en 1979", layout: "text-only",
      text: "« [Madeleine Parent] [...] est une syndicaliste qui s'est battue contre les puissants de ce monde : des barons du textile aux chefs syndicaux. [...] Depuis 38 ans maintenant, elle réclame de meilleurs salaires et conditions de travail pour les femmes œuvrant dans l'industrie du textile. »",
      sources: ["Source : Auteur inconnu, « Une syndicaliste en lutte depuis 38 ans », Le Soleil, 7 février 1979, p. G2, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0004878815."] }
  ],

  // ===== Mouvements sociaux Q3 — Établir des faits — Gains des Cris (Convention Baie-James) =====
  'mq-faits-4': [
    { id: "mq-f4-d1", title: "Document 1 — Extrait d'un article de journal", layout: "text-only",
      text: "« Les parties impliquées dans l'entente accordent aux Autochtones des garanties permanentes de droits exclusifs de chasse, de pêche et de trappage sur certaines terres. [...] Ils sont de plus assurés d'une voix au chapitre pour toutes les décisions ayant trait à leur environnement ainsi que d'une participation, comme investisseurs et travailleurs, aux futurs projets d'aménagement dans le territoire. [...] les Autochtones du territoire recevront, au cours des 20 prochaines années, un montant de 225 millions $ à titre d'indemnités et de compensation pour la perte de certains droits et privilèges. »",
      sources: ["Source : Réjean Lacombe, « Les autochtones remportent une victoire », Le Nouvelliste, 15 novembre 1975, p. 7, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0004878386."] }
  ],

  // ===== Mouvements sociaux Q4 — Situer dans le temps — Loi sur la capacité juridique (1964) =====
  'mq-situer-9': [
    { id: "mq-s9-d1", title: "Document 1 — Extrait d'un article de revue écrit par un juriste", layout: "text-only",
      text: "« La nouvelle législation sur la capacité juridique de la femme mariée est entrée en vigueur le 1er juillet [...]. En premier lieu, la femme mariée acquiert en principe la libre disposition de ses biens. [...] En second lieu, la femme mariée peut [aller] en justice tant en demande qu'en défense [...]. Enfin, la femme mariée peut désormais, et sans autorisation maritale, exercer une profession distincte de celle de son mari [...]. »",
      sources: ["Source : Jean-Louis Baudouin, « Examen critique de la réforme sur la capacité juridique de la femme mariée québécoise », Can. Bar Rev., p. 393, 406 et 407."] }
  ],

  // ===== Révolution tranquille Q1 — Différences/similitudes — Services par l'Église vs l'État =====
  // Docs 1-4 = images. Docs 1-2 (Église/religieux) vs Docs 3-4 (laïque/État).
  'mq-differences-5': [
    { id: "mq-d5-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/mq-differences-5/doc1.png", imageWidthCm: 7,
      sources: ["Source de l'image : Conrad Poirier, News. L'Oeuvre aux enfants infirmes (1942), Bibliothèque et Archives nationales du Québec, P48,S1,P8074. Licence : domaine public."] },
    { id: "mq-d5-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/mq-differences-5/doc2.png", imageWidthCm: 7,
      sources: ["Source de l'image : Conrad Poirier, Religieuse soignant un enfant à l'hôpital Sainte-Justine (1945), Bibliothèque et Archives nationales du Québec, P48,S1,P12209. Licence : domaine public."] },
    { id: "mq-d5-d3", title: "Document 3", layout: "image-only",
      imageUrl: "assets/img/mq-differences-5/doc3.png", imageWidthCm: 7,
      sources: ["Source de l'image : Gabor Szilasi, École monseigneur Laval, rue du Souvenir, Chomedey, Laval (1964), Bibliothèque et Archives nationales du Québec, E6,S7,SS1,D642670. Licence : Creative Commons (BY-NC-ND)."] },
    { id: "mq-d5-d4", title: "Document 4", layout: "image-only",
      imageUrl: "assets/img/mq-differences-5/doc4.png", imageWidthCm: 6,
      sources: ["Source de l'image : Auteur inconnu, L'infirmière Grace Manatch soigne une patiente (entre 1930 et 1960), Bibliothèque et Archives Canada, no 4370310. Licence : domaine public."] }
  ],

  // ===== Révolution tranquille Q2 — Causalité — Commission Parent et laïcisation de l'éducation =====
  'mq-causalite-5': [
    { id: "mq-ca5-d1", title: "Document 1 — Extrait d'un chapitre de livre écrit par un sociologue", layout: "text-only",
      text: "« En ce qui a trait à la confessionnalité [...], la Commission Parent recommandait : premièrement, de [laïciser] la direction du système public et privé, par l'institution d'un ministère de l'Éducation non confessionnel [...], mais qui pouvait comporter des secteurs ayant la responsabilité de l'enseignement confessionnel qui allait demeurer ; deuxièmement, de déconfessionnaliser toutes les institutions d'enseignement postsecondaires, c'est-à-dire de niveau collégial et universitaire [...]. »",
      sources: ["Source : Guy Rocher, « La sécularisation des institutions d'enseignement [...] », dans R. Comeau (dir.), Jean Lesage et l'éveil d'une nation, Sillery, Les Presses de l'Université du Québec, 1989, p. 173."] },
    { id: "mq-ca5-d2", title: "Document 2 — Texte publié en 1966 par la Fédération des Collèges classiques", layout: "text-only",
      text: "« L'Église, par une présence directe de la hiérarchie au sein du comité catholique [du Département de l'Instruction publique], a la possibilité [...] d'exercer un droit de regard et un contrôle précis sur les principaux aspects de l'enseignement dispensé dans les écoles catholiques [...] : la durée du cycle des études ; le programme des études et celui des différents cours ; les manuels à utiliser ; le régime et la discipline des écoles ; les conditions d'engagement et les devoirs du personnel enseignant [...]. »",
      sources: ["Source : Fédération des Collèges classiques, La présence de l'Église en éducation, Montréal, 1966, p. 110."] },
    { id: "mq-ca5-d3", title: "Document 3 — Texte publié en 1966 par la Fédération des Collèges classiques", layout: "text-only",
      text: "« Depuis la sanction du Bill [projet de loi] 60, le 19 mars 1964 [...] : la hiérarchie de l'Église catholique n'a plus de pouvoir précis au niveau de la direction de l'ensemble du système d'éducation au Québec ; [...] l'Église, via le Comité catholique, a conservé des pouvoirs réels et une présence juridiquement reconnue en ce qui touche les aspects moraux et religieux de l'enseignement ; [...] l'État [...] a situé le système scolaire dans la ligne de la laïcité de l'État [...]. »",
      sources: ["Source : Fédération des Collèges classiques, La présence de l'Église en éducation, Montréal, 1966, p. 112."] }
  ],

  // ===== Révolution tranquille Q3 — Causes/conséquences — Mesures économiques de Lesage =====
  'mq-causes-8': [
    { id: "mq-c8-d1", title: "Document 1 — Exposé de René Lévesque sur la nationalisation de l'électricité (1962)", layout: "text-only",
      text: "« C'est au peuple du Québec de prendre dans ses mains, librement et fièrement, la première et la plus importante de toutes les clés d'une économie moderne. Et ça, ça veut dire la nationalisation de l'électricité. [...] la nationalisation, c'est simplement de ramener dans le Québec la propriété entre les mains de 5 300 000 actionnaires, c'est-à-dire nous tous, la propriété de notre électricité. »",
      sources: ["Source : Transcription de Parti libéral du Québec, Maîtres chez nous - La nationalisation de l'électricité expliquée par René Lévesque (1962), Bibliothèque et Archives nationales du Québec, P443,S77,DFN90-503."] },
    { id: "mq-c8-d2", title: "Document 2 — Extrait d'un article de journal publié en 1965", layout: "text-only",
      text: "« Les économistes consultés par le gouvernement de M. Lesage [...] soutiennent que la création, par le gouvernement, d'une Caisse de dépôt et de placement [...] se révélera le grand moyen pour les Québécois de prendre la direction des centres de décisions économiques selon leurs intérêts, leurs besoins et leurs objectifs. [...] La Caisse de dépôt et de placement permettra le regroupement, dans les mains des Québécois, de leurs épargnes collectives, ce qui permettra d'utiliser ces capitaux pour la modernisation de notre commerce et de notre industrie. »",
      sources: ["Source : Auteur inconnu, « Projet de loi déposé aujourd'hui : création de la Caisse de dépôt », Le Soleil, 26 mai 1965, p. 1, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0004878815."] }
  ],

  // ===== Révolution tranquille Q4 — Différences/similitudes — 3 acteurs sur l'avortement =====
  'mq-differences-6': [
    { id: "mq-d6-d1", title: "Document 1 — Mémoire de l'Association des bureaux médicaux des hôpitaux du Québec (1968)", layout: "text-only",
      text: "« Les médecins des hôpitaux du Québec croient que tout avortement est un homicide, car le fœtus est un être humain. [...] À cause des abus que ce projet de loi sur l'avortement peut apporter, l'Association des bureaux médicaux des hôpitaux de la province de Québec (ABMHPQ) s'oppose à la légalisation de l'avortement thérapeutique, dans les cas où l'unique motivation est la santé et le bien-être de la mère [...]. »",
      sources: ["Source : Les Directeurs de l'ABMHPQ, « Avortement : mémoire des médecins d'hôpitaux », Maintenant, août 1968, p. 204-206, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0005021251."] },
    { id: "mq-d6-d2", title: "Document 2 — Article de revue écrit par le religieux jésuite Marcel Marcotte (1968)", layout: "text-only",
      text: "« [T]oute femme a droit de décider du nombre de ses enfants, mais la mise en œuvre de cette décision relève du contrôle des naissances, non de l'avortement ; toute femme a pareillement droit d'user de son corps à sa convenance, mais le fœtus, au dire de la science, est un être humain indépendant [...]. Il s'ensuit que, si l'avortement peut être autorisé dans les cas les plus graves de péril pour la vie ou la santé de la mère, il ne doit jamais l'être pour de simples motifs d'ordre économique ou social, ou pour des raisons de commodité. »",
      sources: ["Source : Marcel Marcotte, S.J., « Catholiques et non-catholiques devant l'avortement », Relations, no 326, avril 1968, p. 110, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0004875781."] },
    { id: "mq-d6-d3", title: "Document 3 — Citation de Lise Payette, animatrice à Radio-Canada (1968)", layout: "text-only",
      text: "« Pour moi, la légalisation de l'avortement, c'est d'abord et avant tout une question de liberté. Je reconnais à la femme le droit de décider de la vie qu'elle porte dans ses entrailles. Elle doit pouvoir accepter ou refuser de donner naissance à un enfant. [...] [Il faut] donner à celles qui acceptent librement l'intervention chirurgicale la possibilité qu'elle soit pratiquée par un médecin reconnu, dans une institution adéquate. »",
      sources: ["Source : France Demers, « L'avortement légalisé, bienfait ou désastre ? », La Patrie, 17 mars 1968, p. 17, en ligne sur Bibliothèque et Archives nationales du Québec, notice 0000586549."] }
  ],

  // ============================================================
  // ===== P8 — 1980 à nos jours — Les choix de société dans le Québec contemporain =====
  // ============================================================

  // ===== P8 · Situer dans le temps — Statut politique du Québec (1980-1995) =====
  // Ordre d'affichage volontairement mélangé. Document 2 (référendum de 1980) pré-rempli en 1re position.
  // NOTE : le doc 4 (patriation 1982) remplace une photo de presse sous droits (La Presse canadienne) par un texte factuel.
  'cs-situer-1': [
    { id: "cs-s1-d1", title: "Document 1", layout: "text-only",
      text: "« [...] le gouvernement progressiste-conservateur du premier ministre Brian Mulroney tente d'obtenir l'accord du Québec quant à la révision de la Constitution canadienne. Il en résulte [...] une entente entre les gouvernements fédéral et provinciaux afin de modifier la Constitution. »",
      sources: ["Source : Gerald L. Gall, « Accord du lac Meech », L'encyclopédie canadienne, dernière modification le 27 avril 2020, page consultée le 30 mars 2021."] },
    { id: "cs-s1-d2", title: "Document 2", layout: "text-only",
      text: "« [...] 59,4 % des Québécois ont voté pour le Non, 40,6 % pour le Oui. Une mince majorité de francophones s'est prononcée pour le Non [...]. [Le premier ministre] tente d'apaiser ses militants déçus [...] tout en sommant le gouvernement d'Ottawa de remplir ses promesses. »",
      sources: ["Source : « René Lévesque », Wikipédia, dernière modification le 29 mars 2021, page consultée le 30 mars 2021."] },
    { id: "cs-s1-d3", title: "Document 3", layout: "image-only",
      imageUrl: "assets/img/cs-situer-1/doc3.png", imageWidthCm: 12,
      sources: ["Source des données : Directeur général des élections du Québec, résultats référendaires."] },
    { id: "cs-s1-d4", title: "Document 4", layout: "text-only",
      text: "Le rapatriement de la Constitution permet désormais au Canada de modifier sa loi fondamentale sans l'accord du Royaume-Uni. La nouvelle Loi constitutionnelle inclut une Charte des droits et libertés. Le gouvernement du Québec refuse toutefois de signer cette entente, car elle a été conclue sans son accord.",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== P8 · Déterminer des causes et conséquences — Conséquence des accords de libre-échange =====
  'cs-causes-1': [
    { id: "cs-c1-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/cs-causes-1/doc1.png", imageWidthCm: 12,
      sources: ["Source des données : Institut de la statistique du Québec, Commerce extérieur du Québec 1981-1998 [...], Québec, Publications du Québec, 1999, p. 73."] }
  ],

  // ===== P8 · Mettre en relation — Événements liés aux droits des Autochtones =====
  'cs-relation-1': [
    { id: "cs-r1-d1", title: "Document 1", layout: "text-only",
      text: "« Cette loi reconnait les droits ancestraux ainsi que les droits issus de traités entre les peuples autochtones et le gouvernement, ce qui inclut les ententes conclues avant la création de la fédération canadienne en 1867. »",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "cs-r1-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/cs-relation-1/doc2.png", imageWidthCm: 7,
      sources: ["Source de l'image : Kooma, Drapeau du [...] (2005), Wikimedia Commons. Licence : domaine public."] },
    { id: "cs-r1-d3", title: "Document 3", layout: "text-only",
      text: "« Le Québec encouragera et facilitera la participation des Cris de la Baie-James à des projets de développement forestier, hydroélectrique et minier dans le Territoire par le biais de partenariats, d'emplois et de contrats. »",
      sources: ["Source : Loi assurant la mise en oeuvre de l'Entente concernant une nouvelle relation entre le gouvernement du Québec et les Cris du Québec (RLRQ), c. M-35.1.2, à jour au 31 octobre 2020, article 2.4, en ligne sur Légis Québec."] },
    { id: "cs-r1-d4", title: "Document 4", layout: "image-only",
      imageUrl: "assets/img/cs-relation-1/doc4.png", imageWidthCm: 9,
      sources: ["Source de l'image : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== P8 · Établir des liens de causalité — Récession et financement des programmes sociaux =====
  'cs-causalite-1': [
    { id: "cs-ca1-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/cs-causalite-1/doc1.png", imageWidthCm: 9,
      sources: ["Source des données : Statistique Canada, « Taux de chômage, 1976 à 2007 », Statistique Canada, dernière mise à jour le 30 novembre 2015, page consultée le 21 mai 2019."] },
    { id: "cs-ca1-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/cs-causalite-1/doc2.png", imageWidthCm: 12,
      sources: ["Source des données : Ministère des Finances et de l'Économie du Québec, Données historiques depuis 1970-1971 : Budget 2013-2014, 2012, p. 19."] },
    { id: "cs-ca1-d3", title: "Document 3", layout: "text-only",
      text: "« Les difficultés économiques des années 1980-1990 provoquent une remise en cause de l'État-providence. Alors que les gouvernements affrontent des crises budgétaires, les soins de santé, le système d'éducation et les programmes sociaux financés par l'État sont de plus en plus difficiles à maintenir [...] »",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] }
  ],

  // ===== P8 · Déterminer changements et continuités — Conditions salariales H/F (continuité) =====
  'cs-continuite-1': [
    { id: "cs-co1-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/cs-continuite-1/doc1.png", imageWidthCm: 12,
      sources: ["Source des données : Statistique Canada, « Gains annuels moyens des hommes et des femmes en dollars constants de 2008, 1976-2008 », Statistique Canada, dernière mise à jour le 30 novembre 2015, page consultée le 21 mai 2019."] }
  ],

  // ===== P8 · Dégager différences et similitudes — Projet de loi 178 sur l'affichage (un acteur = un document) =====
  'cs-differences-1': [
    { id: "cs-d1-d1", title: "Document 1 : Joan Dougherty, députée libérale (1988)", layout: "text-only",
      text: "« [...] je ne peux accepter un projet de loi qui maintient la prohibition d'autres langues dans l'affichage public à l'extérieur, ce qui va à l'encontre des droits fondamentaux reconnus par la Cour suprême [...]. Je ne peux, de plus, accepter une loi qui ne respecte pas l'esprit de la politique d'affichage de notre parti que nous avons adoptée à plusieurs reprises [...]. »",
      sources: ["Source : Journal des débats de l'Assemblée nationale, 33e législature, 2e session, vol. 30, no 82, 19 décembre 1988, en ligne sur Assemblée nationale du Québec."] },
    { id: "cs-d1-d2", title: "Document 2 : Guy Rivard, ministre délégué aux Affaires culturelles (1988)", layout: "text-only",
      text: "« [...] Le gouvernement décide qu'à l'extérieur du commerce [...] l'affichage se fera uniquement en français [...]. À l'intérieur [...], le commerçant de toute origine doit pouvoir exercer son droit de renseigner sa clientèle sur sa marchandise et d'utiliser [...] la langue de son choix dans l'affichage [...]. »",
      sources: ["Source : Journal des débats de l'Assemblée nationale, 33e législature, 2e session, vol. 30, no 82, 19 décembre 1988, en ligne sur Assemblée nationale du Québec."] },
    { id: "cs-d1-d3", title: "Document 3 : Jean-Pierre Charbonneau, député du Parti québécois (1988)", layout: "text-only",
      text: "« Il ne faut pas reculer [sur l'affichage commercial unilingue français], parce que l'affichage commercial, c'est un des signaux importants que l'on donne aux nouveaux arrivants. »",
      sources: ["Source : Journal des débats de l'Assemblée nationale, 33e législature, 2e session, vol. 30, no 82, 19 décembre 1988, en ligne sur Assemblée nationale du Québec."] }
  ],

  // ===== P8 · Déterminer des causes et conséquences — Cause du vieillissement de la population =====
  'cs-causes-2': [
    { id: "cs-c2-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/cs-causes-2/doc1.png", imageWidthCm: 12,
      sources: ["Source des données : Institut de la statistique du Québec, « Décès et taux de mortalité, Québec, 1900-2020 » et « Naissances et taux de natalité, Québec, 1900-2020 », page consultée le 30 mars 2021."] }
  ],

  // ===== P8 · Mettre en relation — Internet vs concentration des médias (2 sur 2) =====
  'cs-relation-2': [
    { id: "cs-r2-d1", title: "Document 1", layout: "text-only",
      text: "« Malgré des interventions significatives en matière de valorisation et de francisation, la situation du français reste précaire au Québec, encore plus dans le contexte de diversification croissante de la société, de la mondialisation accélérée et de l'omniprésence de l'anglais dans l'univers numérique. »",
      sources: ["Source : Ministère de la Culture et des Communications, Renouvellement de la politique culturelle du Québec, Cahier de consultation, mars 2016, p. 19."] },
    { id: "cs-r2-d2", title: "Document 2", layout: "text-only",
      text: "« [...] la Fédération professionnelle des journalistes et le Conseil de presse du Québec se sont penchés sur la concentration des organes d'information et soulignent les problèmes que pose entre autres la propriété croisée d'un journal et d'une station de télévision [...]. Au bas mot, 96 % du marché francophone de la presse écrite quotidienne est contrôlé par deux propriétaires (Quebecor et Gesca). »",
      sources: ["Source : Jean-Pierre Leblanc, Brève histoire de la presse d'information au Québec, Centre de ressources en information aux médias, 2003, p. 12."] }
  ],

  // ===== P8 · Mettre en relation — Projets de réforme constitutionnelle (2 sur 2, colonne unique) =====
  'cs-relation-3': [
    { id: "cs-r3-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/cs-relation-3/doc1.png", imageWidthCm: 13,
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "cs-r3-d2", title: "Document 2", layout: "text-only",
      text: "« [...] les gouvernements provinciaux et le gouvernement fédéral soumettent l'accord [...] aux citoyens canadiens. Cet accord qui touche plusieurs aspects de la constitution canadienne comporte entre autres des mesures qui assurent plus de pouvoirs au Québec [...]. Cet accord est soumis à la population canadienne sous la forme d'un référendum. Le « Non » l'emporte avec 54,3 % des votes contre 45,7 % pour le « Oui ». »",
      sources: ["Source : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "cs-r3-d3", title: "Document 3", layout: "text-only",
      text: "« Le 4 octobre marque une étape importante dans les relations commerciales entre le Canada et les États-Unis [...] : les deux pays concluaient l'Accord de libre-échange [...]. Les deux pays en venaient à une entente historique qui a placé le Canada et les États-Unis à l'avant-garde de la libéralisation du commerce. »",
      sources: ["Source : Accord de libre-échange entre le Canada et les États-Unis, Affaires mondiales Canada, page consultée le 30 novembre 2020."] },
    { id: "cs-r3-d4", title: "Document 4", layout: "text-only",
      text: "« [...] La loi 86 maintient l'obligation de l'affichage public en français seulement à l'extérieur des commerces. Elle permet toutefois l'usage d'une autre langue à l'intérieur des commerces, pourvu que le français y occupe une place prédominante [...]. »",
      sources: ["Source : M. Martel et M. Pâquet, Langue et politique au Canada et au Québec, une synthèse historique, Montréal, Boréal, 2010, p. 237."] }
  ],

  // ===== P8 · Situer dans le temps — Accord de libre-échange Canada-É.-U. (ligne du temps) =====
  // Source : ligne du temps non extractible (dessin Word) ; segments reconstruits par tranches de 5 ans.
  'cs-situer-2': [
    { id: "cs-s2-d1", title: "Document 1", layout: "text-only",
      text: "« Le 4 octobre marque une étape importante dans les relations commerciales entre le Canada et les États-Unis [...] : les deux pays concluaient l'Accord de libre-échange [...]. Les deux pays en venaient à une entente historique qui a placé le Canada et les États-Unis à l'avant-garde de la libéralisation du commerce. »",
      sources: ["Source : Accord de libre-échange entre le Canada et les États-Unis, Affaires mondiales Canada, page consultée le 30 novembre 2020."] }
  ],

  // ===== P8 · Déterminer des causes et conséquences — Cause du déclin économique des régions =====
  'cs-causes-3': [
    { id: "cs-c3-d1", title: "Document 1", layout: "text-only",
      text: "« L'économie d'une large portion des territoires ruraux [...] repose sur l'exploitation des ressources naturelles et des ressources énergétiques [...]. Les communautés locales contrôlent très peu les ressources qui sont exploitées sur leur territoire, ce qui crée une importante dépendance économique, puisque leur vitalité dépend de l'exploitation des ressources par un décideur extérieur [...]. »",
      sources: ["Source : Groupe de travail sur les communautés dévitalisées, Des communautés à revitaliser : un défi collectif pour le Québec, 2010."] }
  ],

  // ===== P8 · Établir des liens de causalité — Vieillissement, natalité et RQAP =====
  'cs-causalite-2': [
    { id: "cs-ca2-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/cs-causalite-2/doc1.png", imageWidthCm: 13,
      sources: ["Source des données : Les aînés du Québec - Quelques données récentes (2e édition), Ministère de la Santé et des Services sociaux, Québec, 2018, page consultée le 30 novembre 2020."] },
    { id: "cs-ca2-d2", title: "Document 2", layout: "text-only",
      text: "« [...] Au Québec, le nombre moyen d'enfants par femme est passé sous le seuil de remplacement des générations [...] en 1970 et a poursuivi sa décroissance jusqu'en 1987, année où il a atteint le niveau le plus faible de son histoire [...]. »",
      sources: ["Source : Institut de la statistique du Québec, Le bilan démographique du Québec : édition 2019, p. 38, page consultée le 1er décembre 2020."] },
    { id: "cs-ca2-d3", title: "Document 3", layout: "text-only",
      text: "« [...] le Régime [québécois d'assurance parentale] constitue un moyen concret, pour les travailleuses et les travailleurs, de mieux concilier leurs responsabilités familiales et professionnelles. Il vise à soutenir financièrement les parents [...], à les encourager dans leur désir d'avoir des enfants et à les soutenir dans leur volonté de consacrer plus de temps à leurs enfants. »",
      sources: ["Source : Gouvernement du Québec, Régime québécois d'assurance parentale, page consultée le 1er décembre 2020."] }
  ],

  // ===== P8 · Déterminer des causes et conséquences — Conséquence de la Loi 86 (affichage) =====
  'cs-causes-4': [
    { id: "cs-c4-d1", title: "Document 1", layout: "text-only",
      text: "« [...] La loi 86 maintient l'obligation de l'affichage public en français seulement à l'extérieur des commerces. Elle permet toutefois l'usage d'une autre langue à l'intérieur des commerces, pourvu que le français y occupe une place prédominante [...]. »",
      sources: ["Source : M. Martel et M. Pâquet, Langue et politique au Canada et au Québec, une synthèse historique, Montréal, Boréal, 2010, p. 237."] }
  ],

  // ===== P8 · Déterminer changements et continuités — Place de la culture (continuité, repère de temps) =====
  // DISCORDANCE SOURCE : le corrigé montre une réglette 2 pts ; le cahier élève montre une réglette 3 pts avec repère de temps.
  // Le libellé (« justifie par des faits et un repère de temps ») commande la réglette 3 pts — retenue ici.
  'cs-continuite-2': [
    { id: "cs-co2-d1", title: "Document 1", layout: "text-only",
      text: "« La création d'un ministère des Affaires culturelles, en 1961, témoigne à cet égard d'une volonté d'inscrire la culture parmi les grands facteurs de développement du Québec. »",
      sources: ["Source : La politique culturelle du Québec, notre culture, notre avenir, gouvernement du Québec, 1992, p. 4."] },
    { id: "cs-co2-d2", title: "Document 2", layout: "text-only",
      text: "« [Des] éléments importants se dégagent du Plan stratégique [2012-2016] : [...] le second élément est de faire en sorte que la culture soit une composante essentielle du développement de la société québécoise, intégrée aux dimensions sociales, économiques, environnementales et territoriales [...]. »",
      sources: ["Source : Ministère de la Culture et des Communications, Plan stratégique 2012-2016, 2013, p. 13."] }
  ],

  // ===== P8 · Déterminer changements et continuités — Diffusion de l'information via Internet (changement) =====
  'cs-continuite-3': [
    { id: "cs-co3-d1", title: "Document 1", layout: "text-only",
      text: "« [...] [Internet] permet d'informer les masses d'une façon quasi instantanée. Les sites Web des organes d'information que sont les journaux et les stations de radio et de télévision affichent rapidement des contenus, alors que les sites [...] de nouvelles soulignent [...] l'ampleur d'un événement au fur et à mesure que des dizaines, puis des centaines d'articles sont mis en ligne. »",
      sources: ["Source : Jean-François Ferland, Les avantages et les risques de l'information instantanée, Direction informatique, 22 septembre 2006, page consultée le 2 décembre 2020."] }
  ],

  // ===== P8 · Dégager différences et similitudes — Financement des études universitaires (un acteur = un document) =====
  'cs-differences-2': [
    { id: "cs-d2-d1", title: "Document 1 : Martine Desjardins, présidente de la FEUQ (2011)", layout: "text-only",
      text: "« En appuyant la hausse [des frais de scolarité] de Jean Charest, M. Legault se fait le complice de l'endettement des étudiants et de leurs familles [...]. Il n'y a rien de bon pour l'avenir du Québec là-dedans. »",
      sources: ["Source : FEUQ, Hausse des frais de scolarité - Legault et Charest, même combat, arrondissement.com, page consultée le 13 janvier 2021."] },
    { id: "cs-d2-d2", title: "Document 2 : Luc Godbout, économiste (2012)", layout: "text-only",
      text: "« [...] pour tenir compte des frais de scolarité plus élevés, ils [les étudiants] bénéficieraient également de crédits d'impôt pour frais de scolarité additionnels. Au net, pour une hausse de frais de scolarité de 1500 $, ils économiseraient 488 $ [...]. »",
      sources: ["Source : Luc Godbout, Une hausse des frais de scolarité profiterait aux étudiants les moins fortunés !, Libres échanges, 5 mars 2012, page consultée le 13 janvier 2021."] },
    { id: "cs-d2-d3", title: "Document 3 : Léo Bureau-Blouin, président de la FECQ (2011)", layout: "text-only",
      text: "« On a déjà encaissé des hausses de 30 % dans les cinq dernières années, c'est un niveau critique ; donc, on demande à Québec de plafonner les droits [de scolarité] [...]. »",
      sources: ["Source : Droits de scolarité : les fédérations étudiantes entendent multiplier leurs moyens de pression, Radio-Canada, 12 août 2011, page consultée le 13 janvier 2021."] }
  ],

  // ===== P8 · Déterminer des causes et conséquences — Couche d'ozone : cause et conséquence (2 sur 2) =====
  'cs-causes-5': [
    { id: "cs-c5-d1", title: "Document 1", layout: "text-only",
      text: "« Les activités humaines sont le principal facteur responsable de la perturbation de cet équilibre naturel, principalement à cause des émissions dans l'atmosphère de produits chimiques de synthèse [...]. Il s'agit de substances [...] qui contiennent du chlore et/ou du brome. »",
      sources: ["Source : Gouvernement du Canada, page consultée le 13 janvier 2021."] },
    { id: "cs-c5-d2", title: "Document 2", layout: "text-only",
      text: "« [...] les gouvernements du monde entier ont signé le protocole de Montréal, [...] en supprimant progressivement les substances [...] émises par les activités humaines. [...] L'action mondiale menée en vertu du protocole de Montréal a stoppé [la] détérioration [de la couche d'ozone] [...] et lui a permis de commencer à se reconstituer [...]. »",
      sources: ["Source : Protection de la couche d'ozone, L'action de l'Union européenne, page consultée le 13 janvier 2021."] }
  ],

  // ============================================================
  // ===== P8 · Lot B — Guides pédagogiques RÉCIT (v1.29.0) =====
  // ============================================================

  // ===== P8 · Établir des faits — Facteurs limitant le branchement à Internet (2 sur 2) =====
  // Guide « La population québécoise et la culture », Q4. Doc 1 = texte (régions), Doc 2 = graphique
  // (revenu) recréé via matplotlib SANS titre intégré (le titre est porté par « Document 2 »).
  'cs-faits-1': [
    { id: "cs-f1-d1", title: "Document 1", layout: "text-only",
      text: "« Les ménages vivant dans [les régions métropolitaines] (90,2 %) sont significativement plus branchés que ceux vivant hors [des régions métropolitaines] (84,0 %). Même constat en 2012 : les trois quarts des ménages situés hors des [régions métropolitaines] avaient une connexion Internet (75,8 %), alors que les ménages vivant en milieu urbain affichaient un taux de branchement de 84,2 %. »",
      sources: ["Source : Marianne Bernier, « L'accès des ménages à Internet en 2016 », Science, technologie et innovation en bref, novembre 2017, p. 3, en ligne sur l'Institut de la statistique du Québec."] },
    { id: "cs-f1-d2", title: "Document 2 : La population branchée à Internet en fonction du revenu, Québec, 2012-2016", layout: "image-only",
      imageUrl: "assets/img/cs-faits-1/doc2.png", imageWidthCm: 12,
      sources: ["Source des données : Marianne Bernier, « L'accès des ménages à Internet en 2016 », Science, technologie et innovation en bref, novembre 2017, p. 2, en ligne sur l'Institut de la statistique du Québec."] }
  ],

  // ===== P8 · Dégager des différences et des similitudes — Lévesque vs Trudeau : point de désaccord =====
  // Guide « Le statut politique du Québec », Q1. Un acteur = un document.
  'cs-differences-3': [
    { id: "cs-d3-d1", title: "Document 1 : Citation du premier ministre du Canada Pierre Elliott Trudeau (1980)", layout: "text-only",
      text: "« Aussi le gouvernement [fédéral] espère-t-il ardemment que le référendum [sur la souveraineté-association] tenu au Québec dans quelques semaines sera, non seulement pour les Québécois mais pour tous les Canadiens, l'occasion de sortir de l'ambiguïté et de réaffirmer [...] leur commune appartenance au Canada. »",
      sources: ["Source : Pierre Elliott Trudeau, « Discours du trône, Ottawa, 1980 », en ligne sur la Société du patrimoine politique du Québec."] },
    { id: "cs-d3-d2", title: "Document 2 : Citation du premier ministre du Québec René Lévesque (1979)", layout: "text-only",
      text: "« Mais, à notre humble avis – et je n'apprends rien à personne – toute émancipation [libération] véritable devra d'abord passer [...] par la souveraineté politique qui, seule, pourra rapatrier tous les instruments qui sont nécessaires [au développement du Québec]. »",
      sources: ["Source : René Lévesque, « Discours du trône, Québec, 6 mars 1979 », en ligne sur la Société du patrimoine politique du Québec."] }
  ],

  // ===== P8 · Déterminer des changements et des continuités — Loi constitutionnelle 1867 vs 1982 =====
  // Guide « Le statut politique du Québec », Q2 (1 continuité ET 1 changement).
  'cs-continuite-4': [
    { id: "cs-co4-d1", title: "Document 1 : Article de journal publié le jour de l'entrée en vigueur de la Loi constitutionnelle de 1982", layout: "text-only",
      text: "« [La] constitution canadienne [...] de 1867, amputée et modifiée, reste en vigueur. Ce qui est nouveau et qu'on appelle la « nouvelle constitution » tient essentiellement dans la Charte des droits et libertés et dans la procédure de modification de la constitution, à quoi s'ajoutent des dispositions générales, des articles sur [...] la péréquation, sur les droits des peuples autochtones et sur l'avenir de la révision constitutionnelle. »",
      sources: ["Source : Michel Roy, « Le rapatriement : jour de gloire et sombre samedi », La Presse, 17 avril 1982, p. 1B, en ligne sur Bibliothèque et Archives nationales du Québec."] },
    { id: "cs-co4-d2", title: "Document 2 : Explications d'un professeur de droit", layout: "text-only",
      text: "« La Charte canadienne des droits et libertés qui vient d'entrer en vigueur fait partie de la Constitution, donc de la loi suprême du pays et, à ce titre, elle lie les deux [paliers] de gouvernement. Toute loi fédérale ou provinciale doit s'y conformer. [...] La Déclaration canadienne des droits de 1960 et la Charte des droits et libertés de la personne du Québec de 1975 demeurent en vigueur. [...] »",
      sources: ["Source : Gérald A. Beaudoin, « Charte fédérale et Code civil : des risques de conflits? », Le Devoir, 19 mai 1982, p. 13, en ligne sur Bibliothèque et Archives nationales du Québec."] }
  ],

  // ===== P8 · Déterminer des causes et des conséquences — Conséquences de la Commission de vérité et réconciliation =====
  // Guide « Les revendications sociales », Q2 (deux conséquences).
  'cs-causes-6': [
    { id: "cs-c6-d1", title: "Document 1 : Rapport de l'Assemblée des Premières Nations publié en 2020", layout: "text-only",
      text: "« Vous trouverez ci-dessous l'évaluation générale de l'Assemblée des Premières Nations concernant les progrès réalisés par le gouvernement du Canada [...] dans la réalisation des objectifs fixés par [...] la Commission de vérité et réconciliation [...]. Une formation de sensibilisation à l'intention des fonctionnaires : des progrès considérables ont été réalisés dans ce domaine. L'École de la fonction publique du Canada a créé une série d'apprentissages sur les Autochtones pour tous les fonctionnaires fédéraux [...]. Justice : peu de progrès ont été réalisés dans ce domaine. Un rapport annuel indiquera et suivra les progrès réalisés dans l'élimination de la surreprésentation des Autochtones en détention. »",
      sources: ["Source : Assemblée des Premières Nations, Progrès réalisés dans le cadre des Appels à l'action de la Commission de vérité et réconciliation, 2020, p. 2-3, en ligne sur l'Assemblée des Premières Nations."] }
  ],

  // ===== P8 · Situer dans le temps — Ordre chronologique des accords de libre-échange depuis 1980 =====
  // Guide « Le Québec dans le monde », Q1 (chrono-ordering 4 documents). Doc 2 (photo de signature de
  // l'ACEUM, domaine public) converti en texte factuel ; années retirées des contenus et des sources
  // pour ne pas révéler l'ordre (situer via les acteurs et les accords nommés).
  'cs-situer-3': [
    { id: "cs-s3-d1", title: "Document 1 : Extrait d'un article de journal", layout: "text-only",
      text: "« Le président américain George Bush, le président mexicain Carlos Salinas de Gortari et le premier ministre Brian Mulroney signeront l'Accord de libre-échange nord-américain dans leurs capitales respectives le 17 décembre prochain. »",
      sources: ["Source : « Mulroney signera l'accord à Ottawa », La Tribune, en ligne sur Bibliothèque et Archives nationales du Québec."] },
    { id: "cs-s3-d2", title: "Document 2 : Description d'une photographie", layout: "text-only",
      text: "Le président américain Donald Trump, le président mexicain Enrique Peña Nieto et le premier ministre canadien Justin Trudeau signent l'Accord Canada-États-Unis-Mexique, en marge d'un sommet du G20 tenu à Buenos Aires, en Argentine.",
      sources: ["Source : d'après Shealah Craighead, photographie de la signature de l'Accord Canada-États-Unis-Mexique, Wikimedia Commons. Licence : domaine public."] },
    { id: "cs-s3-d3", title: "Document 3 : Extrait d'un site web gouvernemental", layout: "text-only",
      text: "« L'Accord de partenariat transpacifique global et progressiste (PTPGP) est un accord de libre-échange entre le Canada et 10 autres pays de la région Asie-Pacifique : l'Australie, Brunéi, le Chili, le Japon, la Malaisie, le Mexique, la Nouvelle-Zélande, le Pérou, Singapour et le Vietnam. »",
      sources: ["Source : Affaires mondiales Canada, « L'Accord de Partenariat transpacifique global et progressiste », international.gc.ca."] },
    { id: "cs-s3-d4", title: "Document 4 : Extrait d'un article de journal", layout: "text-only",
      text: "« [Signé] par le président Ronald Reagan et le premier ministre Brian Mulroney, l'accord de libre-échange entre le Canada et les États-Unis a été adopté hier après-midi par le Sénat et a immédiatement reçu la sanction royale. »",
      sources: ["Source : Michel Vastel, « Le libre-échange entre en vigueur », Le Devoir, en ligne sur Bibliothèque et Archives nationales du Québec."] }
  ],

  // ===== P8 · Dégager des différences et des similitudes — Missions de paix vs missions armées (1 sim + 1 diff) =====
  // Guide « Le Québec dans le monde », Q4. Un acteur (mission) = un document.
  'cs-differences-4': [
    { id: "cs-d4-d1", title: "Document 1 : Extrait d'un article de journal", layout: "text-only",
      text: "« Le lieutenant-colonel Pierre Desjardins commande les Casques bleus canadiens en Bosnie-Herzégovine centrale [...]. " + "\u201C" + "Notre mandat est essentiellement d'escorter les convois d'aide humanitaire vers Sarajevo et la région [...]. Ce que nos deux compagnies font actuellement [...], c'est de la protection de civils [...]. On essaie de maintenir un havre de paix relative là-bas." + "\u201D" + " Un autre complément de mandat, note-t-il, est l'escorte de travailleurs locaux qui réparent les routes ou les installations publiques. »",
      sources: ["Source : Denis Arcand, « C'est lui le vrai boss », La Presse, 6 juin 1993, p. A1, en ligne sur Bibliothèque et Archives nationales du Québec."] },
    { id: "cs-d4-d2", title: "Document 2 : Extrait d'un article de journal", layout: "text-only",
      text: "« Depuis le début de la mission en 2002, 157 soldats canadiens ont trouvé la mort en Afghanistan, tandis que 600 autres ont été blessés. [...] Les militaires canadiens ont chassé les insurgés de [Ma'sum Ghar] en 2006 à la suite de dures batailles [...]. La plupart des opérations de combat importantes du Canada dans la région sont parties de Ma'sum Ghar, une cible populaire pour les roquettes et les mortiers de l'ennemi. »",
      sources: ["Source : La Presse canadienne et l'Agence France-Presse, « Le Canada en Afghanistan : point final à neuf ans de combats », Le Devoir, 6 juillet 2011, p. A1 et A8, en ligne sur Bibliothèque et Archives nationales du Québec."] }
  ],

  // ===== P8 · Dégager des différences et des similitudes — Neutralité religieuse de l'État : point d'accord =====
  // Guide « La population québécoise et la culture », Q2. Un tribunal = un document.
  'cs-differences-5': [
    { id: "cs-d5-d1", title: "Document 1 : Extrait d'un article publié en 2011 sur un jugement du Tribunal des droits de la personne", layout: "text-only",
      text: "« [...] une municipalité ne peut pas favoriser une religion au détriment d'une autre, écrit [...] la juge. La récitation de la prière ne respecte pas cette neutralité et compromet le droit à la liberté de conscience [d'un citoyen]. »",
      sources: ["Source : Patrick Lagacé, « Jésus de Saguenay », La Presse, 17 février 2011, en ligne sur La Presse."] },
    { id: "cs-d5-d2", title: "Document 2 : Extrait d'un article publié en 2015 sur un jugement de la Cour suprême du Canada", layout: "text-only",
      text: "« Selon [les juges], la prière crée une distinction, une exclusion et une préférence fondée sur la religion qui a pour effet de compromettre le droit [d'un citoyen] à l'exercice de sa liberté de conscience et de religion. »",
      sources: ["Source : Radio-Canada, « La Cour suprême du Canada dit non à la prière au conseil municipal de Saguenay », Radio-Canada, 14 avril 2015, en ligne sur Société Radio-Canada."] }
  ],

  // ===== P8 · Établir des liens de causalité — Services numériques (Netflix) et intervention de l'État =====
  // Guide « La population québécoise et la culture », Q3 (3 éléments à lier).
  'cs-causalite-3': [
    { id: "cs-ca3-d1", title: "Document 1 : Extrait d'un article de journal publié en 2017", layout: "text-only",
      text: "« [L'avocate et politicienne Marwah Rizqy] rappelle quelques constats fondamentaux : le Canada est parfaitement souverain en matière de fiscalité sur son territoire; la fourniture d'un service est taxable; et pour forcer une compagnie offrant un service au pays, même à partir de l'étranger, il suffit de légiférer [...]. " + "\u201C" + "On ne peut pas se permettre de dérouler le tapis rouge à une multinationale américaine [comme Netflix] [...]." + "\u201D" + " »",
      sources: ["Source : Stéphane Baillargeon, « Le Canada renonce-t-il à sa souveraineté culturelle devant Netflix? », Le Devoir, 30 septembre 2017, en ligne sur Le Devoir."] },
    { id: "cs-ca3-d2", title: "Document 2 : Extrait d'un article de journal publié en 2019", layout: "text-only",
      text: "« Obligatoire depuis le 1er janvier, l'inscription au registre mis sur pied par Québec force les entreprises étrangères vendant des services numériques à facturer la TVQ [taxe de vente du Québec] [...]. Toutes les grandes entreprises visées, les Netflix, Spotify, Apple, Amazon, Facebook et Google, facturent la taxe de vente québécoise à leurs clients. [...] »",
      sources: ["Source : Karim Benessaieh, « La taxe Netflix a rapporté deux fois plus que prévu à Québec », La Presse, 1er mai 2019, en ligne sur La Presse."] },
    { id: "cs-ca3-d3", title: "Document 3 : Extrait d'une étude universitaire sur Netflix", layout: "text-only",
      text: "« Bien que sa plateforme numérique soit disponible au Canada uniquement depuis 2010, Netflix est en activité depuis 1997 en Californie, d'abord sous la forme d'une boutique électronique de location de DVD livrés à domicile par service postal. [...] Netflix compte à présent 118 millions d'abonnés partout dans le monde, une croissance de 392 % sur une période de six ans. »",
      sources: ["Source : Hélène Aucoin, L'irruption de Netflix sur le marché canadien : la réponse du gouvernement canadien, Mémoire de maîtrise (communication), Université du Québec à Montréal, 2019, p. 10, en ligne sur Archipel UQAM."] }
  ],

  // ===== P5 — Documents extraits du cahier « Période 5 » (2019), Leçon 1 (Acte d'Union) =====
  'fc-differences-8': [
    { id: "fc-d8-d1", title: "Document 1 : Représentation politique des régions de la Province du Canada en 1840", layout: "image-only",
      imageUrl: "assets/img/fc-differences-8/doc1.png", imageWidthCm: 9,
      sources: ["Graphique : Jimmy Grenier. Cahier « La formation du régime fédéral canadien (1840-1896) », Service national du RÉCIT de l'univers social."] }
  ],
  'fc-causes-6': [
    { id: "fc-c6-d1", title: "Document 1 : Territoire du Canada-Uni après l'Acte d'Union de 1840", layout: "image-only",
      imageUrl: "assets/img/fc-causes-6/doc1.png", imageWidthCm: 11,
      sources: ["Source de l'image : Service national du RÉCIT de l'univers social. Cahier « La formation du régime fédéral canadien (1840-1896) »."] }
  ],
  'fc-faits-1': [
    { id: "fc-f1-d1", title: "Document 1 : Extrait de l'article 41 de l'Acte d'Union (1840)", layout: "text-only",
      text: "« Et qu'il soit statué, que depuis et après la Réunion desdites deux Provinces, tous Brefs, Proclamations, Instruments [...] ayant rapport au Conseil législatif et à l'Assemblée législative [...] ne seront que dans la langue Anglaise. »",
      sources: ["Extrait de l'article 41 de l'Acte d'Union (1840). Cahier « La formation du régime fédéral canadien (1840-1896) », Service national du RÉCIT de l'univers social."] }
  ],
  'fc-differences-9': [
    { id: "fc-d9-d1", title: "Document 1 : Population de la Province du Canada en 1840", layout: "image-only",
      imageUrl: "assets/img/fc-differences-9/doc1.png", imageWidthCm: 9,
      sources: ["Graphique : Jimmy Grenier. Cahier « La formation du régime fédéral canadien (1840-1896) », Service national du RÉCIT de l'univers social."] }
  ],
  'fc-causes-7': [
    { id: "fc-c7-d1", title: "Document 1 : Extrait de l'article 41 de l'Acte d'Union (1840)", layout: "text-only",
      text: "« [...] tous Brefs, Proclamations, Instruments [...] ayant rapport au Conseil législatif et à l'Assemblée législative [...] ne seront que dans la langue Anglaise. »",
      sources: ["Extrait de l'article 41 de l'Acte d'Union (1840). Cahier « La formation du régime fédéral canadien (1840-1896) », Service national du RÉCIT de l'univers social."] },
    { id: "fc-c7-d2", title: "Document 2 : Représentation politique des régions de la Province du Canada en 1840", layout: "image-only",
      imageUrl: "assets/img/fc-causes-7/doc2.png", imageWidthCm: 9,
      sources: ["Graphique : Jimmy Grenier. Cahier « La formation du régime fédéral canadien (1840-1896) », Service national du RÉCIT de l'univers social."] },
    { id: "fc-c7-d3", title: "Document 3 : Population de la Province du Canada en 1840", layout: "image-only",
      imageUrl: "assets/img/fc-causes-7/doc3.png", imageWidthCm: 9,
      sources: ["Graphique : Jimmy Grenier. Cahier « La formation du régime fédéral canadien (1840-1896) », Service national du RÉCIT de l'univers social."] }
  ],

  // ===== P5 — Documents extraits du cahier « Période 5 » (2019), Leçon 2 (Le gouvernement responsable) =====
  'fc-continuite-5': [
    { id: "fc-cont5-d1", title: "Document 1 : Le gouvernement non responsable (1840-1848)", layout: "image-only",
      imageUrl: "assets/img/fc-continuite-5/doc1.png", imageWidthCm: 12,
      sources: ["Schéma : Service national du RÉCIT de l'univers social. Cahier « La formation du régime fédéral canadien (1840-1896) »."] },
    { id: "fc-cont5-d2", title: "Document 2 : Le gouvernement responsable (1848)", layout: "image-only",
      imageUrl: "assets/img/fc-continuite-5/doc2.png", imageWidthCm: 12,
      sources: ["Schéma : Service national du RÉCIT de l'univers social. Cahier « La formation du régime fédéral canadien (1840-1896) »."] }
  ],
  'fc-continuite-6': [
    { id: "fc-cont6-d1", title: "Document 1 : Le gouvernement non responsable (1840-1848)", layout: "image-only",
      imageUrl: "assets/img/fc-continuite-6/doc1.png", imageWidthCm: 12,
      sources: ["Schéma : Service national du RÉCIT de l'univers social. Cahier « La formation du régime fédéral canadien (1840-1896) »."] },
    { id: "fc-cont6-d2", title: "Document 2 : Le gouvernement responsable (1848)", layout: "image-only",
      imageUrl: "assets/img/fc-continuite-6/doc2.png", imageWidthCm: 12,
      sources: ["Schéma : Service national du RÉCIT de l'univers social. Cahier « La formation du régime fédéral canadien (1840-1896) »."] }
  ],
  'fc-continuite-7': [
    { id: "fc-cont7-d1", title: "Document 1 : Population du Haut-Canada et du Bas-Canada au milieu du 19e siècle", layout: "image-only",
      imageUrl: "assets/img/fc-continuite-7/doc1.png", imageWidthCm: 13,
      sources: ["Graphique : Jimmy Grenier, à partir de Statistique Canada. Cahier « La formation du régime fédéral canadien (1840-1896) »."] }
  ],
  'fc-causes-8': [
    { id: "fc-c8-d1", title: "Document 1 : Louis-Hippolyte Lafontaine sur l'union des réformistes (1840)", layout: "text-only",
      text: "« Il est de l'intérêt des réformistes des deux provinces de se rencontrer sur le terrain législatif, dans un esprit de paix, d'union, d'amitié et de fraternité. L'unité d'action est nécessaire plus que jamais. »",
      sources: ["Louis-Hippolyte Lafontaine, extrait d'un discours publié dans le journal Le Canadien, le 31 août 1840. (Domaine public.)"] }
  ],
  'fc-causes-9': [
    { id: "fc-c9-d1", title: "Document 1 : La loi d'indemnisation du Bas-Canada (1849)", layout: "text-only",
      text: "« C'est en février 1849 que sir Louis-Hippolyte Lafontaine propose un projet de loi d'indemnisation des habitants du Bas-Canada pour les dommages subis à leurs propriétés lors des rébellions de 1837-1838 (un montant d'environ 100 000 livres). »",
      sources: ["« Loi d'indemnisation pour le Bas-Canada », dans l'Encyclopédie canadienne, en ligne (consulté le 20 juin 2019)."] }
  ],
  'fc-causes-10': [
    { id: "fc-c10-d1", title: "Document 1 : Les tensions au sein du gouvernement de l'Union", layout: "text-only",
      text: "« [La Province du Canada] est marquée par de nombreux débats et conflits : la représentation proportionnelle (Rep by pop), la difficulté de nouer des alliances et l'impossibilité d'obtenir une double majorité de députés opposent les radicaux (« rouges » et « Clear Grits ») aux conservateurs de Macdonald et de Cartier. »",
      sources: ["D'après le Service national du RÉCIT de l'univers social. Cahier « La formation du régime fédéral canadien (1840-1896) »."] }
  ],

  // ===== P5 — Documents extraits du cahier « Période 5 » (2019), Leçon 3 (Économie coloniale) =====
  'fc-causes-11': [
    { id: "fc-c11-d1", title: "Document 1 : Réunion de la Ligue Anti-Corn Law, Royaume-Uni, 1846", layout: "image-only",
      imageUrl: "assets/img/fc-causes-11/doc1.png", imageWidthCm: 11,
      sources: ["Auteur inconnu, Wikimédia Commons. Cahier « La formation du régime fédéral canadien (1840-1896) », Service national du RÉCIT de l'univers social."] }
  ],
  'fc-causes-12': [
    { id: "fc-c12-d1", title: "Document 1 : Les exportations canadiennes vers les États-Unis, en millions de dollars (1851-1857)", layout: "image-only",
      imageUrl: "assets/img/fc-causes-12/doc1.png", imageWidthCm: 11,
      sources: ["Graphique : Service national du RÉCIT de l'univers social. Cahier « La formation du régime fédéral canadien (1840-1896) »."] }
  ],
  'fc-causes-13': [
    { id: "fc-c13-d1", title: "Document 1 : L'abrogation du traité de réciprocité (1866)", layout: "text-only",
      text: "« Durant la guerre de Sécession, le Royaume-Uni soutient en catimini la lutte des États du Sud contre le Nord. À l'issue de la guerre, les politiciens du Nord, mécontents du Royaume-Uni en raison de cette collaboration, cherchent à mettre fin à la réciprocité avec les colonies britanniques [...] et poussent les États-Unis à abroger le traité le 17 mars 1866. »",
      sources: ["« Réciprocité », dans l'Encyclopédie canadienne, en ligne (consulté le 25 juin 2019)."] }
  ],

  // ===== P5 — Documents extraits du cahier « Période 5 » (2019), Leçon 4 (Affaires indiennes) =====
  'fc-causes-14': [
    { id: "fc-c14-d1", title: "Document 1 : Pétition de Montagnais au gouverneur Elgin (1847)", layout: "text-only",
      text: "« C'est pour la première fois que notre parole t'est portée [...] Nous ne sommes déjà que trop malheureux. La chasse n'est plus abondante dans nos forêts; et sur la mer, voilà qu'on nous enlève notre territoire. [...] Chaque été ils reçoivent les présents, depuis que leurs terres de chasse sont cultivées par des étrangers. »",
      sources: ["Pétition montagnaise du 8 avril 1847, citée dans J. Frenette (2013), Recherches amérindiennes au Québec, 43 (2-3), p. 77-91."] }
  ],
  'fc-causes-15': [
    { id: "fc-c15-d1", title: "Document 1 : Rapport du Ministère de l'Intérieur (1876)", layout: "text-only",
      text: "« Notre législation indienne repose sur le principe que les autochtones doivent rester dans un statut de tutelle et être traités comme des pupilles ou enfants de l'État [...] c'est notre devoir de le préparer, par l'éducation et tout autre moyen, [...] à assumer les privilèges et les responsabilités d'une citoyenneté entière. »",
      sources: ["Rapport du Ministère de l'Intérieur, 1876, tel que cité dans « Loi sur les Indiens », Wikipédia (consulté le 25 juin 2019)."] }
  ],
  'fc-continuite-8': [
    { id: "fc-cont8-d1", title: "Document 1 : Église autochtone, Pointe-Bleue, Lac-Saint-Jean, 1892", layout: "image-only",
      imageUrl: "assets/img/fc-continuite-8/doc1.png", imageWidthCm: 9,
      sources: ["Photographie, Wm. Notman & Son, 1892 (?). Cahier « La formation du régime fédéral canadien (1840-1896) », Service national du RÉCIT de l'univers social."] },
    { id: "fc-cont8-d2", title: "Document 2 : Thomas Moore avant et après son entrée à l'école", layout: "image-only",
      imageUrl: "assets/img/fc-continuite-8/doc2.png", imageWidthCm: 11,
      sources: ["Rapport annuel du ministère des Affaires indiennes, 1896. Bibliothèque et Archives Canada, NL-022474."] }
  ],

  // ===== P5 — Documents extraits du cahier « Période 5 » (2019), Leçon 5 (A.A.N.B.) =====
  'fc-causes-16': [
    { id: "fc-c16-d1", title: "Document 1 : Les principales lignes du réseau ferroviaire du nord de l'Amérique vers 1860", layout: "image-only",
      imageUrl: "assets/img/fc-causes-16/doc1.png", imageWidthCm: 12,
      sources: ["Carte : Service national du RÉCIT de l'univers social. Cahier « La formation du régime fédéral canadien (1840-1896) »."] },
    { id: "fc-c16-d2", title: "Document 2 : La fin de la réciprocité et la recherche de nouveaux marchés", layout: "text-only",
      text: "« Le traité de réciprocité avec les États-Unis tire à sa fin; le Canada n'a d'autre choix que celui de se lancer à l'assaut des marchés que représentent les colonies britanniques de l'Atlantique. [...] Une union de toutes les colonies britanniques de l'Amérique du Nord aiderait alors grandement à ouvrir de nouveaux marchés. »",
      sources: ["Bibliothèque et Archives Canada, La confédération canadienne (archivée), consulté le 24 juillet 2019."] }
  ],
  'fc-causes-17': [
    { id: "fc-c17-d1", title: "Document 1 : La Grande Coalition et la fin de l'instabilité ministérielle", layout: "text-only",
      text: "« À l'été 1864, ces « libéraux » ontariens [Clear Grits], menés par George Brown, acceptèrent de s'allier avec leurs adversaires conservateurs dirigés par John A. Macdonald pour former la « Grande coalition » [...] afin de modifier l'union en un système fédéral. La réalisation de la Grande coalition mit fin à dix ans d'instabilité ministérielle. »",
      sources: ["J.-F. Cardin et C. Couture, Histoire du Canada : Espace et différences, Presses de l'Université Laval, 2000, p. 57."] },
    { id: "fc-c17-d2", title: "Document 2 : La crainte de l'annexion américaine", layout: "text-only",
      text: "« Entre 1860 et 1870, on craint l'invasion militaire et l'annexion américaine. [...] Les habitants des colonies craignent que le Nord, pour se venger de l'Angleterre, n'envahisse ses colonies d'Amérique. »",
      sources: ["J. Lacoursière, J. Provencher et D. Vaugeois, Canada-Québec (1534-2000), Septentrion, 2001, p. 314-315."] }
  ],

  // ===== P5 — Documents extraits du cahier « Période 5 » (2019), Leçon 6 (Relations fédérales-provinciales) =====
  'fc-causes-18': [
    { id: "fc-c18-d1", title: "Document 1 : Honoré Mercier et la conférence interprovinciale de 1887", layout: "text-only",
      text: "« Selon [Honoré] Mercier, le Québec doit s'affirmer comme nation française et catholique [...]. Le premier ministre du Québec convoque alors, en octobre 1887, une conférence interprovinciale [...] pour discuter de l'autonomie provinciale et des subventions fédérales [...]. »",
      sources: ["J. Lacoursière, J. Provencher et D. Vaugeois, Canada-Québec, synthèse historique (1534-2000), Septentrion, 2001, p. 370-371."] }
  ],
  'fc-causes-19': [
    { id: "fc-c19-d1", title: "Document 1 : Le soulèvement de la rivière Rouge (1869-1870)", layout: "text-only",
      text: "« À l'automne 1869, les premiers arpenteurs débarquent à la colonie de la rivière Rouge pour prendre possession des terres agricoles que les Métis ont reçues de la Compagnie de la Baie d'Hudson [...]. Devenu le chef des Métis, Louis Riel mène la résistance. [...] Le Parlement vote la loi qui annexe la rivière Rouge à la Confédération sous le nom de province du Manitoba. »",
      sources: ["D. Combet et I. Toussaint, Louis Riel, l'inoubliable chef des Métis, Encyclopédie de l'Amérique française."] }
  ],
  'fc-causes-20': [
    { id: "fc-c20-d1", title: "Document 1 : Le partage des revenus en 1867", layout: "text-only",
      text: "« En 1867, les responsabilités des provinces sont moins coûteuses que celles du fédéral. L'éducation et la santé [...] sont surtout prises en charge par l'Église. De son côté, le gouvernement fédéral a à sa charge les chemins de fer et les canaux [...], la défense, la justice et la fonction publique. Ainsi, le gouvernement fédéral reçoit la plus grande part des revenus. »",
      sources: ["Service national du RÉCIT de l'univers social. Cahier « La formation du régime fédéral canadien (1840-1896) »."] }
  ],
  'fc-causes-21': [
    { id: "fc-c21-d1", title: "Document 1 : Le Gibet (la pendaison de Louis Riel, 1885)", layout: "image-only",
      imageUrl: "assets/img/fc-causes-21/doc1.png", imageWidthCm: 9,
      sources: ["J. Lecomte, « Le Gibet », dans Louis Riel, martyr du Nord-Ouest : sa vie, son procès, sa mort, 2e éd., Imprimerie générale, 1885, p. 62. Bibliothèque et Archives nationales du Québec."] }
  ],
  'fc-causes-22': [
    { id: "fc-c22-d1", title: "Document 1 : Les limites imposées à l'enseignement religieux", layout: "text-only",
      text: "« [D]ans les provinces à majorité protestante, la population accepte mal que les fonds publics servent à l'enseignement d'un contenu religieux [...]. À compter des années 1870, certains gouvernements provinciaux choisissent de limiter ou d'abolir l'enseignement religieux dans les écoles, afin de moderniser leur système éducatif. »",
      sources: ["J. P. Couturier, Le passé composé. Le Canada de 1850 à nos jours, Les Éditions d'Acadie, 2000, p. 99."] }
  ]

};

// ============ EXPORT ============
window.DATA = {

  realites_sociales: [
    // 3e secondaire
    { id: "experience-autochtones-projet-colonie", titre: "L'expérience des Autochtones et le projet de colonie", annee: 3, niveau: 1 },
    { id: "evolution-societe-coloniale",          titre: "L'évolution de la société coloniale sous l'autorité de la métropole française", annee: 3, niveau: 2 },
    { id: "conquete-changement-empire",           titre: "La Conquête et le changement d'empire", annee: 3, niveau: 3 },
    { id: "revendications-luttes-nationales",     titre: "Les revendications et les luttes nationales", annee: 3, niveau: 4 },
    // 4e secondaire
    { id: "formation-regime-federal",             titre: "La formation du régime fédéral canadien", annee: 4, niveau: 1 },
    { id: "nationalismes-autonomie-canada",       titre: "Les nationalismes et l'autonomie du Canada", annee: 4, niveau: 2 },
    { id: "modernisation-quebec",                 titre: "La modernisation du Québec et la Révolution tranquille", annee: 4, niveau: 3 },
    { id: "choix-societe-quebec-contemporain",    titre: "Les choix de société dans le Québec contemporain", annee: 4, niveau: 4 }
  ],

  operations_intellectuelles: [
    "Établir des faits",
    "Situer dans le temps et dans l'espace",
    "Mettre en relation des faits",
    "Établir des liens de causalité",
    "Déterminer des causes et des conséquences",
    "Dégager des différences et des similitudes",
    "Déterminer des changements et des continuités"
  ],

  questions: [

    // ===== Q1 — P1 · Mettre en relation des faits =====
    { id: "q-experience-autochtones-relation-1", operation: "Mettre en relation des faits", numero: 1, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Indique si les documents 1 à 4 correspondent à la famille linguistique algonquienne ou à la famille linguistique iroquoienne.",
        responseSpace: { type: "category-buckets", categories: ["Famille algonquienne", "Famille iroquoienne"], slots: [2, 2] }
      },
      reglettes: [{ id: "r-ea-r1", label: "Réglette (2 points)", ...R_RELATION_2PT_4_PART }],
      documents: pickDocs('experience-autochtones-relation-1', 1, 2, 3, 4),
      corrige: [["Document 1", "Document 2"], ["Document 3", "Document 4"]] },

    // ===== Q2 — P1 · Situer dans le temps et dans l'espace =====
    { id: "q-experience-autochtones-situer-1", operation: "Situer dans le temps et dans l'espace", numero: 1, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Indique si les documents 1 à 4 sont antérieurs ou postérieurs à 1541 (Fondation de Charlesbourg-Royal par Jacques Cartier).",
        responseSpace: { type: "before-after-axis", beforeLabel: "Antériorité", afterLabel: "Postériorité", pivot: "Fondation de Charlesbourg-Royal (1541)", slots: { before: 2, after: 2 } }
      },
      reglettes: [{ id: "r-ea-s1", label: "Réglette (2 points)", ...R_SITUER_2PT_T4 }],
      documents: pickDocs('experience-autochtones-situer-1', 1, 2, 3, 4),
      corrige: { before: ["Document 1", "Document 3"], after: ["Document 2", "Document 4"] } },

    // ===== Q3 — P1 · Établir des faits =====
    { id: "q-experience-autochtones-faits-1", operation: "Établir des faits", numero: 1, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Chez les populations autochtones, les aînés occupent une place importante, car ils transmettent des croyances et des récits reliés à leur conception du monde. Nomme un moyen qui permet de faire cette transmission.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-ea-f1", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('experience-autochtones-faits-1', 1),
      corrige: "La tradition orale." },

    // ===== P1 · Dégager des différences et des similitudes — Q-A · Français vs Innus à Uepishtikuiau =====
    { id: "q-experience-autochtones-differences-1", operation: "Dégager des différences et des similitudes", numero: 1, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Les documents 1 à 3 présentent les points de vue des Français et des Innus face à l'établissement d'une habitation sur le site de Uepishtikuiau. Détermine une différence entre ces points de vue.",
        responseSpace: { type: "lines", count: 5 }
      },
      reglettes: [{ id: "r-ea-d1", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_GEN }],
      documents: pickDocs('experience-autochtones-differences-1', 1, 2, 3),
      corrige: "L'analyse des écrits de Samuel de Champlain soutient que l'alliance de 1603 lui permet de construire une habitation sur le site de Uepishtikuiau sans l'opposition des Innus, alors que la tradition orale innue soutient que les Innus refusent d'abord l'installation des Français et que ces derniers les repoussent progressivement une fois installés." },

    // ===== P1 · Dégager des différences et des similitudes — Q-B · Prise de décisions algonquiennes vs iroquoiennes =====
    { id: "q-experience-autochtones-differences-2", operation: "Dégager des différences et des similitudes", numero: 2, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "À l'aide des documents 1 à 3, indique une similitude et une différence dans la prise de décisions chez les nations algonquiennes et iroquoiennes.",
        responseSpace: { type: "labeled-list", items: ["Similitude", "Différence"], linesPerItem: 4 }
      },
      reglettes: [{ id: "r-ea-d2", label: "Réglette (4 points)", ...R_DIFFSIM_4PT }],
      documents: pickDocs('experience-autochtones-differences-2', 1, 2, 3),
      corrige: [
        "Au sein des Premières Nations, les prises de décisions se font à l'aide du consensus ou de la majorité. Les aînés sont également consultés par les chefs, à qui ils offrent conseil.",
        "Chez les nations iroquoiennes, des femmes que l'on nomme les mères de clan désignent les chefs et elles ont le pouvoir de les destituer, alors que ce sont les familles qui désignent les chefs au sein des nations algonquiennes. De plus, les chefs algonquiens sont choisis en fonction de leur courage, de leur force et de leur habileté à chasser."
      ] },

    // ===== P1 · Situer dans le temps et dans l'espace — Q-C · Peuplement de l'Amérique en ordre chronologique =====
    { id: "q-experience-autochtones-situer-2", operation: "Situer dans le temps et dans l'espace", numero: 2, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Les documents 1 à 3 présentent des événements liés au peuplement de l'Amérique. Place-les en ordre chronologique du plus ancien au plus récent.",
        responseSpace: { type: "chrono-ordering", items: ["Plus ancien", "Intermédiaire", "Plus récent"] }
      },
      reglettes: [{ id: "r-ea-s2", label: "Réglette (2 points)", ...R_SITUER_2PT_T3 }],
      documents: pickDocs('experience-autochtones-situer-2', 1, 2, 3),
      corrige: ["Document 3", "Document 1", "Document 2"] },

    // ===== P1 · Déterminer des causes et des conséquences — Q-D · Causes du premier voyage de Cartier =====
    { id: "q-experience-autochtones-causes-1", operation: "Déterminer des causes et des conséquences", numero: 1, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "À partir du document 1, détermine les causes qui motivent le premier voyage de Jacques Cartier vers l'Amérique.",
        responseSpace: { type: "labeled-list", items: ["Cause territoriale", "Cause économique"], linesPerItem: 3 }
      },
      reglettes: [{ id: "r-ea-c1", label: "Réglette (4 points)", ...R_CAUSES_4PT_2CAUSES }],
      documents: pickDocs('experience-autochtones-causes-1', 1),
      corrige: [
        "Jacques Cartier est à la recherche du passage du nord-ouest permettant de se rendre en Asie en contournant ou en traversant l'Amérique.",
        "Le roi de France finance le premier voyage de Jacques Cartier pour qu'il trouve des richesses."
      ] },

    // ===== P1 · Établir des faits — Q-E · Pouvoir des chefs dans les sociétés autochtones =====
    { id: "q-experience-autochtones-faits-2", operation: "Établir des faits", numero: 2, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Selon le document 1, sur quoi se base le pouvoir des chefs dans les sociétés autochtones ?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ea-f2", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('experience-autochtones-faits-2', 1),
      corrige: "Le pouvoir des chefs repose sur leur éloquence (capacité de persuasion) ou sur leurs compétences de chasseur leur permettant d'approvisionner leur clan." },

    // ===== P1 · Situer dans le temps et dans l'espace — Q-F · Chronologie des explorations européennes =====
    { id: "q-experience-autochtones-situer-3", operation: "Situer dans le temps et dans l'espace", numero: 3, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Les documents 1 à 4 font référence aux explorations des Européens en Amérique du Nord-Est. Place-les en ordre chronologique du plus ancien au plus récent. Le document 4 est déjà placé pour t'aider.",
        responseSpace: { type: "chrono-ordering", items: ["1er", "2e", "3e", "4e"], prefilled: [null, "Document 4", null, null] }
      },
      reglettes: [{ id: "r-ea-s3", label: "Réglette (2 points)", ...R_SITUER_2PT_T3 }],
      documents: pickDocs('experience-autochtones-situer-3', 1, 2, 3, 4),
      // Ordre : Doc 2 (Vikings ~1000) → Doc 4 (Cabot 1498, pré-placé) → Doc 3 (Cartier 1534) → Doc 1 (Chauvin 1600)
      corrige: ["Document 2", "Document 4", "Document 3", "Document 1"] },

    // ===== P1 · Dégager des différences et des similitudes — Q-G · Mode de vie de trois peuples autochtones =====
    { id: "q-experience-autochtones-differences-3", operation: "Dégager des différences et des similitudes", numero: 3, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Les documents 1 à 3 présentent le mode de vie de trois peuples autochtones. Nomme le peuple qui possède un mode de vie différent et compare son mode de vie avec celui des deux autres.",
        responseSpace: { type: "lines", count: 5 }
      },
      reglettes: [{ id: "r-ea-d3", label: "Réglette (3 points)", ...R_DIFFSIM_3PT_PEUPLE_DIFFERENT }],
      documents: pickDocs('experience-autochtones-differences-3', 1, 2, 3),
      corrige: "Le document 1 présente les Iroquoiens, qui sont sédentaires : ils cultivent la terre et déplacent leurs villages tous les 10 à 15 ans selon l'épuisement des sols. Les Algonquiens (document 2) et les Inuits (document 3) sont nomades : ils se déplacent en bandes pour suivre le gibier et changent d'habitations selon les saisons." },

    // ===== P1 · Déterminer des changements et des continuités — Q-H · Transformation des réseaux d'échange =====
    { id: "q-experience-autochtones-changements-1", operation: "Déterminer des changements et des continuités", numero: 1, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Au début du 16e siècle, les Autochtones possèdent de nombreux réseaux d'échange. Comment cette situation se transforme-t-elle après l'arrivée des Européens ?",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-ea-cc1", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_GEN }],
      documents: pickDocs('experience-autochtones-changements-1', 1, 2),
      corrige: "Le commerce des fourrures entre Européens et Autochtones s'intègre aux réseaux commerciaux déjà existants des Autochtones, et des produits européens (outils en fer, armes, chaudrons de cuivre) entrent en circulation dans ces réseaux d'échange." },

    // ===== P1 · Déterminer des causes et des conséquences — Q-I · Échec des tentatives d'établissement français =====
    { id: "q-experience-autochtones-causes-2", operation: "Déterminer des causes et des conséquences", numero: 2, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Pourquoi certaines tentatives d'établissement des Français en Amérique entre 1534 et 1603 se sont soldées par un échec ?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ea-c2", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('experience-autochtones-causes-2', 1),
      corrige: "Le scorbut décime une partie importante des colons français (document 1). Les hivers rigoureux sont également difficiles à surmonter pour les premiers établissements." },

    // ===== P1 · Mettre en relation des faits — Q-J · Partage des tâches Algonquiens vs Iroquoiens =====
    { id: "q-experience-autochtones-relation-2", operation: "Mettre en relation des faits", numero: 2, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Indique à l'endroit approprié le numéro du document qui correspond au partage des tâches chez chacune des nations autochtones.",
        responseSpace: { type: "category-buckets", categories: ["Chez les Algonquiens", "Chez les Iroquoiens"], slots: [1, 1] }
      },
      reglettes: [{ id: "r-ea-r2", label: "Réglette (2 points)", ...R_RELATION_2PT_2_PART }],
      documents: pickDocs('experience-autochtones-relation-2', 1, 2),
      corrige: [["Document 2"], ["Document 1"]] },

    // ===== P1 · Établir des liens de causalité — Q-K · Alliance franco-amérindienne de 1603 et conséquences pour les Iroquois =====
    { id: "q-experience-autochtones-causalite-1", operation: "Établir des liens de causalité", numero: 1, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Explique comment l'alliance franco-amérindienne de 1603 entraîne des conséquences pour les Iroquois. Dans ta réponse, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "L'alliance franco-amérindienne de 1603",
          "Les motivations de cette alliance pour les Autochtones",
          "Les conséquences pour les Iroquois"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-ea-ca1", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('experience-autochtones-causalite-1', 1, 2, 3),
      corrige: "Champlain et Gravé Du Pont, représentant le roi de France, concluent une alliance avec les Montagnais-Innus, les Algonquins et les Malécites-Etchemins (document 2). Cette alliance permet à ces peuples autochtones de jouir de l'assistance militaire des Français contre leurs ennemis (document 3). Cela entraîne la défaite des Iroquois lors d'un conflit armé contre leurs ennemis autochtones et leurs alliés français (document 1)." },

    // ===== Q4 — P2 · Établir des liens de causalité =====
    { id: "q-evolution-coloniale-causalite-1", operation: "Établir des liens de causalité", numero: 1, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "À l'aide des documents 1 à 3, explique comment la situation démographique de la Nouvelle-France a amené l'État français à mettre en place une mesure pour corriger la situation. Dans ta réponse, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "La situation démographique en Nouvelle-France (1re moitié du 17e siècle)",
          "Un objectif poursuivi par l'État français",
          "Une mesure mise en place par l'intendant Jean Talon"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-ec-c1", label: "Réglette (3 points)", opLabel: "Établir des liens de causalité", maxPoints: 3, ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('evolution-coloniale-causalite-1', 1, 2, 3),
      corrige: "Dans la 1re moitié du 17e siècle, le territoire de la Nouvelle-France est très peu peuplé. En effet, la Compagnie des Cent-Associés n'est pas en mesure de respecter son engagement d'installer 4000 colons dans la colonie. C'est pour cette raison que l'intendant Jean Talon a fait venir les filles du Roy avec l'objectif de favoriser le peuplement de la colonie." },

    // ===== Q5 — P2 · Situer dans le temps et dans l'espace =====
    { id: "q-evolution-coloniale-situer-1", operation: "Situer dans le temps et dans l'espace", numero: 1, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Les documents 1 et 2 illustrent des faits relatifs à la Conquête. Inscris le numéro des documents à l'endroit approprié, selon qu'ils présentent des faits survenus avant ou après la bataille des Plaines d'Abraham.",
        responseSpace: { type: "before-after-axis", beforeLabel: "Avant", afterLabel: "Après", pivot: "Bataille des Plaines d'Abraham", slots: { before: 1, after: 1 } }
      },
      reglettes: [{ id: "r-ec-s1", label: "Réglette (1 point)", ...R_SITUER_1PT_T2 }],
      documents: pickDocs('evolution-coloniale-situer-1', 1, 2),
      corrige: { before: ["Document 1"], after: ["Document 2"] } },

    // ===== P2 · Dégager des différences et des similitudes — Désaccord d'historiens sur Talon =====
    { id: "q-evolution-coloniale-differences-1", operation: "Dégager des différences et des similitudes", numero: 1, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Les documents 1 et 2 présentent les interprétations de deux historiens concernant les réalisations de l'intendant Jean Talon. Indique le point précis sur lequel ils sont en désaccord.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ec-d1", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_GEN }],
      documents: pickDocs('evolution-coloniale-differences-1', 1, 2),
      corrige: "Les historiens sont en désaccord sur la réussite des réalisations de Talon en Nouvelle-France." },

    // ===== P2 · Mettre en relation des faits — Importance géographique et rôle économique de Montréal =====
    { id: "q-evolution-coloniale-relation-1", operation: "Mettre en relation des faits", numero: 1, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Indique si les faits présentés dans les documents 1 à 3 font référence à l'importance géographique de Montréal et/ou à son rôle économique pour la colonie. Coche toutes les cases qui s'appliquent à chaque document.",
        responseSpace: { type: "checkbox-table",
          columns: ["Importance géographique", "Rôle économique"],
          rows: ["Document 1", "Document 2", "Document 3"]
        }
      },
      reglettes: [{ id: "r-ec-r1", label: "Réglette (2 points)", ...R_RELATION_2PT_4_PART }],
      documents: pickDocs('evolution-coloniale-relation-1', 1, 2, 3),
      // Doc 1 (pelletiers) : géo + éco · Doc 2 (marchands-équipeurs) : éco seulement · Doc 3 (exploration) : géo seulement
      corrige: [[true, true], [false, true], [true, false]] },

    // ===== P2 · Dégager des différences et des similitudes — Rôles administrateurs vs clergé =====
    { id: "q-evolution-coloniale-differences-2", operation: "Dégager des différences et des similitudes", numero: 2, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "À l'aide des documents 1 à 3, indique une similitude et une différence dans le rôle des administrateurs coloniaux et du clergé catholique en Nouvelle-France.",
        responseSpace: { type: "labeled-list", items: ["Similitude", "Différence"], linesPerItem: 4 }
      },
      reglettes: [{ id: "r-ec-d2", label: "Réglette (4 points)", ...R_DIFFSIM_4PT }],
      documents: pickDocs('evolution-coloniale-differences-2', 1, 2, 3),
      corrige: [
        "L'évêque et les administrateurs coloniaux (intendant et gouverneur) s'occupent conjointement des décisions judiciaires en faisant partie intégrante du Conseil souverain. Le clergé et les administrateurs coloniaux rendent donc la justice en Nouvelle-France.",
        "Le clergé s'occupe des soins de santé, de l'éducation ainsi que de l'encadrement des paroissiens en les incitant à avoir de bonnes mœurs (comportements acceptables). Les administrateurs coloniaux, pour leur part, s'occupent des forces armées, de la politique extérieure, de la question autochtone, de l'économie ainsi que du peuplement de la colonie."
      ] },

    // ===== P2 · Déterminer des causes et des conséquences — Objectifs de l'implantation du régime seigneurial =====
    { id: "q-evolution-coloniale-causes-1", operation: "Déterminer des causes et des conséquences", numero: 1, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "À l'aide des documents 1 et 2, indique l'objectif social et l'objectif économique de l'implantation du régime seigneurial en Nouvelle-France. Inscris le numéro du document utilisé pour appuyer chaque objectif.",
        responseSpace: { type: "labeled-list", items: ["Objectif social (doc. ___)", "Objectif économique (doc. ___)"], linesPerItem: 3 }
      },
      reglettes: [{ id: "r-ec-cs1", label: "Réglette (4 points)", ...R_CAUSES_4PT_2CAUSES }],
      documents: pickDocs('evolution-coloniale-causes-1', 1, 2),
      corrige: [
        "Objectif social (doc. 2) : établir des habitants en Nouvelle-France OU assurer le peuplement de la vallée du Saint-Laurent OU fixer les droits et les devoirs des seigneurs et des censitaires.",
        "Objectif économique (doc. 1) : assurer la mise en valeur des terres OU assurer le développement de l'agriculture."
      ] },

    // ===== P2 · Déterminer des causes et des conséquences — Conséquences économiques du mercantilisme =====
    { id: "q-evolution-coloniale-causes-2", operation: "Déterminer des causes et des conséquences", numero: 2, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "À partir des documents 1 et 2, détermine deux conséquences économiques du mercantilisme sur le développement de la Nouvelle-France.",
        responseSpace: { type: "labeled-list", items: ["Conséquence économique 1", "Conséquence économique 2"], linesPerItem: 3 }
      },
      reglettes: [{ id: "r-ec-cs2", label: "Réglette (4 points)", ...R_CAUSES_4PT_2CAUSES }],
      documents: pickDocs('evolution-coloniale-causes-2', 1, 2),
      corrige: [
        "Le mercantilisme décourage la production de biens en Nouvelle-France. Il est donc impossible pour un artisan de la Nouvelle-France de concurrencer un artisan européen.",
        "Le mercantilisme empêche le commerce entre les colonies française et anglaise."
      ] },

    // ===== P2 · Déterminer des causes et des conséquences — Conséquences territoriale et économique d'Utrecht =====
    { id: "q-evolution-coloniale-causes-3", operation: "Déterminer des causes et des conséquences", numero: 3, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "À partir des documents 1 et 2, indique une conséquence territoriale et une conséquence économique de la guerre de Succession d'Espagne sur la Nouvelle-France.",
        responseSpace: { type: "labeled-list", items: ["Conséquence territoriale", "Conséquence économique"], linesPerItem: 3 }
      },
      reglettes: [{ id: "r-ec-cs3", label: "Réglette (4 points)", ...R_CAUSES_4PT_2CAUSES }],
      documents: pickDocs('evolution-coloniale-causes-3', 1, 2),
      corrige: [
        "Après le traité d'Utrecht qui met fin à cette guerre en 1713, la France cède Terre-Neuve, l'Acadie et la Baie d'Hudson à la Grande-Bretagne.",
        "L'intendant de la Nouvelle-France demande à la couronne d'augmenter le budget pour financer les opérations militaires."
      ] },

    // ===== P2 · Dégager des différences et des similitudes — Trudel vs Grenier sur le rôle de la seigneurie =====
    { id: "q-evolution-coloniale-differences-3", operation: "Dégager des différences et des similitudes", numero: 3, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Les documents 1 et 2 présentent les positions de deux historiens sur le régime seigneurial. Sur quel point précis sont-ils en désaccord ?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ec-d3", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_GEN }],
      documents: pickDocs('evolution-coloniale-differences-3', 1, 2),
      corrige: "Marcel Trudel et Benoît Grenier ne s'entendent pas sur le rôle de la seigneurie. Marcel Trudel soutient qu'il s'agit d'un système d'entraide alors que Benoît Grenier considère qu'il s'agit d'un système de domination de l'élite coloniale et des seigneurs sur les censitaires." },

    // ===== P2 · Dégager des différences et des similitudes — Point d'accord sur les causes de l'épidémie de la Huronie =====
    { id: "q-evolution-coloniale-differences-4", operation: "Dégager des différences et des similitudes", numero: 4, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Les documents 1 et 2 relatent les causes de l'épidémie qui a touché la Huronie vers 1650. Sur quel point précis ces documents sont-ils d'accord ?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ec-d4", label: "Réglette (2 points)", ...R_SIMILITUDES_2PT_CONVERGENCE }],
      documents: pickDocs('evolution-coloniale-differences-4', 1, 2),
      corrige: "Les deux documents s'entendent pour dire que ce sont les contacts avec les missionnaires qui ont provoqué les épidémies dans les villages autochtones hurons-wendats." },

    // ===== P2 · Établir des faits — Mode d'occupation du territoire =====
    { id: "q-evolution-coloniale-faits-1", operation: "Établir des faits", numero: 1, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Selon le document 1, quel mode d'occupation du territoire est implanté en Nouvelle-France par les autorités coloniales ?",
        responseSpace: { type: "lines", count: 1 }
      },
      reglettes: [{ id: "r-ec-f1", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('evolution-coloniale-faits-1', 1),
      corrige: "Le régime seigneurial OU la seigneurie OU le régime féodal." },

    // ===== P2 · Établir des liens de causalité — Établissement de la Grande Paix de Montréal en 1701 =====
    { id: "q-evolution-coloniale-causalite-2", operation: "Établir des liens de causalité", numero: 2, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "À l'aide des documents 1 à 4, explique comment les Premières Nations et les Français ont établi une paix en 1701. Dans ta réponse, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "Le contexte européen à la fin du 17e siècle",
          "L'action d'un chef autochtone et l'action du gouverneur français",
          "Un rassemblement à Montréal en 1701"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-ec-c2", label: "Réglette (3 points)", opLabel: "Établir des liens de causalité", maxPoints: 3, ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('evolution-coloniale-causalite-2', 1, 2, 3, 4),
      corrige: "Le traité de Ryswick de 1697 mène à une trêve entre Britanniques et Français : les Britanniques ne soutiennent plus les Iroquois dans leur guerre contre la Nouvelle-France. Affaiblis aussi par les épidémies et les guerres dans la région des Grands Lacs, les Iroquois sont prêts à négocier. Cela amène des chefs autochtones comme Kondiaronk et Koutaoiliboe à utiliser leur influence pour négocier la paix avec les nations de la vallée du Saint-Laurent, et le gouverneur français Callière à envoyer des ambassadeurs pour convaincre les chefs alliés de rendre leurs prisonniers aux Iroquois. En conséquence, après des cérémonies où tous les intervenants fument le calumet, les Français et près de 40 nations autochtones signent la Grande Paix de Montréal en 1701." },

    // ===== P2 · Situer dans le temps et dans l'espace — Ordre chronologique de 3 événements de la Conquête =====
    { id: "q-evolution-coloniale-situer-2", operation: "Situer dans le temps et dans l'espace", numero: 2, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Les documents 1 à 3 font référence à des événements liés à la guerre de la Conquête. Place-les en ordre chronologique du plus ancien au plus récent.",
        responseSpace: { type: "chrono-ordering", items: ["Plus ancien", "Intermédiaire", "Plus récent"] }
      },
      reglettes: [{ id: "r-ec-s2", label: "Réglette (2 points)", ...R_SITUER_2PT_T3 }],
      documents: pickDocs('evolution-coloniale-situer-2', 1, 2, 3),
      // Ordre : Doc 3 (Louisbourg juillet 1758) → Doc 1 (Québec sept 1759) → Doc 2 (Montréal sept 1760)
      corrige: ["Document 3", "Document 1", "Document 2"] },

    // ============================================================
    //   P2 — Questions courtes 1608-1760 (RÉCIT, 8 questions Q1-Q8)
    // ============================================================

    // ===== P2 · Établir des faits — Q1 : idéologie de Louis XIV =====
    { id: "q-evolution-coloniale-faits-2", operation: "Établir des faits", numero: 2, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "À quelle idéologie fait référence le document 1 ? (Idéologie : ensemble d'idées sociales, politiques et religieuses.)",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-ec-f2", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('evolution-coloniale-faits-2', 1),
      corrige: "L'absolutisme de droit divin." },

    // ===== P2 · Déterminer des changements et des continuités — Q2 : continuité économique =====
    // Cette question résout l'OI manquante en P2 (changements et continuités).
    { id: "q-evolution-coloniale-changements-1", operation: "Déterminer des changements et des continuités", numero: 1, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Indique une continuité qui marque le développement économique de la Nouvelle-France.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ec-cc1", label: "Réglette (2 points)", ...R_CONTINUITES_2PT_GEN }],
      documents: pickDocs('evolution-coloniale-changements-1', 1, 2),
      corrige: "Le commerce des fourrures est une activité économique présente durant toute la période (documents 1 et 2)." },

    // ===== P2 · Causes et conséquences — Q3 : effet des guerres iroquoises =====
    { id: "q-evolution-coloniale-causes-4", operation: "Déterminer des causes et des conséquences", numero: 4, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Indique un effet des guerres iroquoises sur l'économie de la Nouvelle-France.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ec-cs4", label: "Réglette (2 points)", ...R_CAUSES_2PT_CONS_SEULE }],
      documents: pickDocs('evolution-coloniale-causes-4', 1),
      corrige: "Les guerres iroquoises empêchent (ou ralentissent) le commerce des fourrures (document 1)." },

    // ===== P2 · Mettre en relation — Q4 : rôles de l'Église =====
    { id: "q-evolution-coloniale-relation-2", operation: "Mettre en relation des faits", numero: 2, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Les documents 1 à 3 présentent le rôle de l'Église à l'époque de la Nouvelle-France. Inscris à l'endroit approprié le numéro du document correspondant à chaque rôle de l'Église.",
        responseSpace: { type: "category-buckets", categories: ["Services sociaux et soins de santé", "Encadrement des colons", "Évangélisation des Autochtones"], slots: [1, 1, 1] }
      },
      reglettes: [{ id: "r-ec-r2", label: "Réglette (2 points)", ...R_RELATION_2PT_3_PART }],
      documents: pickDocs('evolution-coloniale-relation-2', 1, 2, 3),
      // Mapping : Doc 1 (Olier) = évangélisation ; Doc 2 (Jeanne Mance) = services sociaux/santé ; Doc 3 (code paroissien) = encadrement.
      corrige: [["Document 2"], ["Document 3"], ["Document 1"]] },

    // ===== P2 · Situer dans le temps — Q5 : avant / après le gouvernement royal =====
    { id: "q-evolution-coloniale-situer-3", operation: "Situer dans le temps et dans l'espace", numero: 3, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Classe les documents 1 à 4 selon qu'ils présentent des faits qui surviennent avant ou après la mise en place du gouvernement royal.",
        responseSpace: { type: "before-after-axis", beforeLabel: "Avant", afterLabel: "Après", pivot: "Gouvernement royal", slots: { before: 2, after: 2 } }
      },
      reglettes: [{ id: "r-ec-s3", label: "Réglette (2 points)", ...R_SITUER_2PT_T4 }],
      documents: pickDocs('evolution-coloniale-situer-3', 1, 2, 3, 4),
      // Avant 1663 : Doc 2 (Ville-Marie 1642) et Doc 3 (Cent-Associés 1627).
      // Après 1663 : Doc 1 (officiers et Talon, 1665+) et Doc 4 (Filles du Roy 1667).
      corrige: { before: ["Document 2", "Document 3"], after: ["Document 1", "Document 4"] } },

    // ===== P2 · Différences et similitudes — Q6 : censitaire vs seigneur =====
    { id: "q-evolution-coloniale-differences-5", operation: "Dégager des différences et des similitudes", numero: 5, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "À partir des documents 1 et 2, indique une similitude entre le rôle du censitaire et celui du seigneur dans le régime seigneurial.",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-ec-d5", label: "Réglette (2 points)", ...R_SIMILITUDES_2PT_GEN }],
      documents: pickDocs('evolution-coloniale-differences-5', 1, 2),
      corrige: "Le seigneur et le censitaire ont tous deux des droits : droit de se faire octroyer une terre (censitaire) et droit de percevoir le cens et les autres redevances (seigneur)." },

    // ===== P2 · Liens de causalité — Q7 : produits européens et guerres Hurons/Iroquois =====
    { id: "q-evolution-coloniale-causalite-3", operation: "Établir des liens de causalité", numero: 3, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Explique comment les relations commerciales, suite à l'introduction des produits européens, entraînent un impact sur les relations entre les Hurons et les Iroquois. Dans ta réponse, tu dois préciser chacun des éléments ci-dessous et les lier entre eux :",
        bullets: ["L'introduction des produits européens", "Les relations commerciales", "Un impact sur les relations entre les Hurons et les Iroquois"],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 6 }
      },
      reglettes: [{ id: "r-ec-c3", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('evolution-coloniale-causalite-3', 1, 2, 3),
      corrige: "Les Hurons et les Iroquois sont grandement intéressés par les nouveaux produits européens obtenus en échange de la fourrure (document 1). Cela entraîne une plus grande rivalité commerciale entre ces peuples autochtones (document 2). Ce contexte de rivalité commerciale provoque des guerres entre Hurons et Iroquois qui mènent au massacre des Hurons par les Iroquois (document 3)." },

    // ===== P2 · Situer dans le temps — Q8 : ordre chronologique guerre de la Conquête =====
    { id: "q-evolution-coloniale-situer-4", operation: "Situer dans le temps et dans l'espace", numero: 4, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Les documents 1 à 4 font référence à des événements s'étant produits durant la guerre de la Conquête. Place-les en ordre chronologique. Le document 3 (expulsion des Acadiens, 1755) est déjà placé pour t'aider.",
        responseSpace: { type: "chrono-ordering", items: ["1er", "2e", "3e", "4e"], prefilled: [null, "Document 3", null, null] }
      },
      reglettes: [{ id: "r-ec-s4", label: "Réglette (2 points)", ...R_SITUER_2PT_T3 }],
      documents: pickDocs('evolution-coloniale-situer-4', 1, 2, 3, 4),
      // Ordre chrono : Doc 2 (Washington, vallée Ohio 1754) → Doc 3 (Acadiens 1755, pré-placé) → Doc 4 (Louisbourg 1758) → Doc 1 (Plaines d'Abraham 1759).
      corrige: ["Document 2", "Document 3", "Document 4", "Document 1"] },

    // ===== Q6 — P3 · Dégager des différences et des similitudes =====
    { id: "q-conquete-differences-1", operation: "Dégager des différences et des similitudes", numero: 1, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "Les documents 1 et 2 présentent le point de vue de deux historiens. Sur quel point précis sont-ils d'accord ?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-cq-d1", label: "Réglette (2 points)", ...R_SIMILITUDES_2PT_CONVERGENCE }],
      documents: pickDocs('conquete-differences-1', 1, 2),
      corrige: "Les deux historiens s'entendent pour dire que plusieurs milliers de Canadiens français sont partis de la colonie à la suite de la Conquête." },

    // ===== Q7 — P3 · Déterminer des causes et des conséquences =====
    { id: "q-conquete-causes-1", operation: "Déterminer des causes et des conséquences", numero: 1, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "En 1774, l'Acte de Québec est adopté. Inscris le numéro du document qui présente une cause de l'adoption de cette loi et le numéro de celui qui en présente une conséquence.",
        responseSpace: { type: "labeled-list", items: ["Cause de l'Acte de Québec", "Conséquence de l'Acte de Québec"] }
      },
      reglettes: [{ id: "r-cq-c1", label: "Réglette (2 points)", ...R_CAUSES_2PT_CAUSE_CONS }],
      documents: pickDocs('conquete-causes-1', 1, 2),
      corrige: ["Document 1", "Document 2"] },

    // ============================================================
    //   P3 — RÉCIT 1 : Du régime militaire au gouvernement civil
    //   (3 questions : Q1 R1 causes-2 / Q2 R1 differences-2 / Q3 R1 situer-1)
    // ============================================================

    // ===== P3 · Causes et conséquences — Q1 R1 : 3 conséquences du changement de régime =====
    { id: "q-conquete-causes-2", operation: "Déterminer des causes et des conséquences", numero: 2, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "À l'aide des documents 1 à 3, indique trois conséquences du changement de régime. Pour chaque conséquence, précise l'aspect de société concerné (social, politique, économique, culturel ou territorial).",
        responseSpace: { type: "labeled-list", items: ["Document 1", "Document 2", "Document 3"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-cq-c2", label: "Réglette (2 points)", ...R_CAUSES_2PT_T3_CONS_MULTI }],
      documents: pickDocs('conquete-causes-2', 1, 2, 3),
      corrige: [
        "Document 1 (aspect social ou politique) : Le passage du régime français au régime britannique entraîne le départ vers la France de plusieurs milliers de Canadiens, principalement des membres de l'élite coloniale.",
        "Document 2 (aspect politique ou culturel) : Le changement de régime mène à la fondation d'un premier journal canadien, qui sert à la diffusion des ordonnances et des idées (Lumières, contestation, etc.).",
        "Document 3 (aspect économique) : Le changement de régime entraîne l'augmentation de la proportion de Britanniques dans le commerce des fourrures (et, corollairement, la diminution de la place des Canadiens)."
      ] },

    // ===== P3 · Différences et similitudes — Q2 R1 : Gouvernement royal vs Proclamation royale =====
    { id: "q-conquete-differences-2", operation: "Dégager des différences et des similitudes", numero: 2, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "À partir des documents 1 et 2, dégage une similitude et une différence dans les structures politiques du Gouvernement royal (1663-1760) et de la Proclamation royale (1763-1774).",
        responseSpace: { type: "labeled-list", items: ["Similitude", "Différence"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-cq-d2", label: "Réglette (2 points)", ...R_DIFFSIM_2PT_1SIM_1DIFF }],
      documents: pickDocs('conquete-differences-2', 1, 2),
      corrige: [
        "Similitude : Le gouverneur est le représentant du roi dans la colonie autant sous le Gouvernement royal (1663) que sous la Proclamation royale (1763). (Plusieurs autres réponses sont acceptées.)",
        "Différence : Sous le Gouvernement royal, la gestion de la colonie est une responsabilité partagée par le Conseil souverain, alors que sous la Proclamation royale, la gestion de la colonie est entièrement une responsabilité du gouverneur. (Plusieurs autres réponses sont acceptées.)"
      ] },

    // ===== P3 · Situer dans le temps — Q3 R1 : avant / après la Proclamation royale =====
    { id: "q-conquete-situer-1", operation: "Situer dans le temps et dans l'espace", numero: 1, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "Les documents 1 et 2 font référence à la situation des Autochtones dans la seconde moitié du 18e siècle. Indique si les faits présentés dans ces documents surviennent avant ou après la Proclamation royale.",
        responseSpace: { type: "before-after-axis", beforeLabel: "Antériorité", afterLabel: "Postériorité", pivot: "Proclamation royale (1763)", slots: { before: 1, after: 1 } }
      },
      reglettes: [{ id: "r-cq-s1", label: "Réglette (1 point)", ...R_SITUER_1PT_T2 }],
      documents: pickDocs('conquete-situer-1', 1, 2),
      // Doc 1 = Traité d'Oswegatchie, 15-16 sept 1760 → avant 1763 ; Doc 2 = Innus, 17 mars 1765 → après.
      corrige: { before: ["Document 1"], after: ["Document 2"] } },

    // ============================================================
    //   P3 — RÉCIT 2 : La société coloniale face au changement d'empire
    //   (2 questions : Q1 R2 relation-1 / Q2 R2 causes-3)
    // ============================================================

    // ===== P3 · Mettre en relation — Q1 R2 : arrivée des Loyalistes =====
    { id: "q-conquete-relation-1", operation: "Mettre en relation des faits", numero: 1, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "À l'aide des documents 1 et 2, explique une cause et une conséquence de l'arrivée des Loyalistes dans la Province de Québec. Indique le document utilisé pour chaque.",
        responseSpace: { type: "labeled-list", items: ["Cause (doc.)", "Conséquence (doc.)"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-cq-r1", label: "Réglette (2 points)", ...R_RELATION_2PT_2_PART }],
      documents: pickDocs('conquete-relation-1', 1, 2),
      corrige: [
        "Cause (document 2) : La guerre d'indépendance américaine (1775-1783) favorise l'arrivée de plus de 6 000 Loyalistes britanniques dans la Province de Québec.",
        "Conséquence (document 1) : L'arrivée des Loyalistes dans la Province de Québec et la création de cantons font perdre aux Anishinabegs et aux Abénakis l'accès à des ressources naturelles vitales à leur subsistance."
      ] },

    // ===== P3 · Causes et conséquences — Q2 R2 : pétitions des marchands britanniques =====
    { id: "q-conquete-causes-3", operation: "Déterminer des causes et des conséquences", numero: 3, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "À partir des documents 1 et 2, détermine une cause et une conséquence des pétitions envoyées à la couronne britannique par les marchands britanniques. Indique le document utilisé pour chaque.",
        responseSpace: { type: "labeled-list", items: ["Cause (doc.)", "Conséquence (doc.)"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-cq-c3", label: "Réglette (2 points)", ...R_CAUSES_2PT_CAUSE_CONS }],
      documents: pickDocs('conquete-causes-3', 1, 2),
      corrige: [
        "Cause (document 1) : La tolérance de James Murray envers l'élite coloniale francophone et les catholiques, ainsi que son refus de mettre en place une chambre d'assemblée dans la Province de Québec.",
        "Conséquence (document 2) : Le renvoi de James Murray et l'arrivée de Guy Carleton en 1774 au poste de gouverneur de la Province de Québec."
      ] },

    // ============================================================
    //   P3 — PDF Questions courtes 1760-1791 (Q1-Q8)
    //   8 questions qui complètent P3 à 7/7 OI : Établir des faits (Q1),
    //   Changements/continuités (Q2) et Liens de causalité (Q7) ajoutés.
    // ============================================================

    // ===== P3 · Établir des faits — Q1 : religion du clergé arrivé avec Amherst =====
    { id: "q-conquete-faits-1", operation: "Établir des faits", numero: 1, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "À quelle religion fait référence le document 1?",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-cq-f1", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('conquete-faits-1', 1),
      corrige: "À la religion anglicane ou à la religion protestante." },

    // ===== P3 · Changements et continuités — Q2 : changement politique en 1763 =====
    { id: "q-conquete-changements-1", operation: "Déterminer des changements et des continuités", numero: 1, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "Indique un changement politique important qui survient en 1763.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-cq-cc1", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_GEN }],
      documents: pickDocs('conquete-changements-1', 1),
      corrige: "La colonie est désormais sous l'autorité d'un gouverneur britannique, ou la colonie est désormais sous l'autorité de l'Angleterre (document 1)." },

    // ===== P3 · Causes et conséquences — Q3 : cause politique de la révolte de Pontiac =====
    // Note : libellé de la réglette source au pluriel (« les conséquences ») incohérent avec
    // l'énoncé qui demande « une cause politique ». On utilise R_CAUSES_2PT_GEN_1CAUSE
    // (miroir au singulier « la cause ») pour assurer la cohérence énoncé/réglette.
    { id: "q-conquete-causes-4", operation: "Déterminer des causes et des conséquences", numero: 4, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "Indique une cause politique de la révolte de Pontiac.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-cq-c4", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('conquete-causes-4', 1),
      corrige: "La conquête de la Nouvelle-France par l'Angleterre, ou le départ des Français de la région des Grands Lacs (document 1)." },

    // ===== P3 · Situer dans l'espace — Q4 : carte A/B/C/D (région de traite perdue) =====
    { id: "q-conquete-situer-2", operation: "Situer dans le temps et dans l'espace", numero: 2, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "À partir du document 1, identifie la lettre qui correspond à la région de traite des fourrures perdue par la Province of Quebec au moment de la Proclamation royale.",
        responseSpace: { type: "lines", count: 1 }
      },
      reglettes: [{ id: "r-cq-s2", label: "Réglette (2 points)", ...R_SITUER_2PT_SP_FAIT }],
      documents: pickDocs('conquete-situer-2', 1),
      corrige: "A" },

    // ===== P3 · Différences et similitudes — Q5 : désaccord Carleton vs marchands de Québec =====
    { id: "q-conquete-differences-3", operation: "Dégager des différences et des similitudes", numero: 3, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "Sur quel point précis les auteurs des documents 1 et 2 sont-ils en désaccord?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-cq-d3", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_DIVERGENCE }],
      documents: pickDocs('conquete-differences-3', 1, 2),
      corrige: "Sur la mise en place d'une Assemblée législative." },

    // ===== P3 · Mettre en relation — Q6 : associer document à période =====
    // Docs renumérotés depuis la source : doc 1 = Acte de Québec (texte), doc 2 = Régime militaire
    // (Bishop's House), doc 3 = Proclamation royale (schéma).
    { id: "q-conquete-relation-2", operation: "Mettre en relation des faits", numero: 2, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "Les documents 1 à 3 font référence à la situation politique de la Province of Quebec entre 1760 et 1791. Inscris à l'endroit approprié le numéro du document correspondant à chacune des périodes ci-dessous.",
        responseSpace: { type: "category-buckets", categories: ["Régime militaire", "Proclamation royale", "Acte de Québec"], slots: [1, 1, 1] }
      },
      reglettes: [{ id: "r-cq-r2", label: "Réglette (2 points)", ...R_RELATION_2PT_3_PART }],
      documents: pickDocs('conquete-relation-2', 1, 2, 3),
      corrige: [["Document 2"], ["Document 3"], ["Document 1"]] },

    // ===== P3 · Liens de causalité — Q7 : guerre d'indépendance américaine → Loyalistes =====
    // Docs renumérotés depuis la source (originaux 2, 3, 11) selon l'ordre causal des bullets.
    { id: "q-conquete-causalite-1", operation: "Établir des liens de causalité", numero: 1, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "Explique comment la situation en Amérique du Nord entre 1776 et 1783, suite à une volonté des Treize colonies, a un impact sur la Province of Quebec. Dans ta réponse, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "La volonté des Treize colonies",
          "La situation en Amérique du Nord entre 1776 et 1783",
          "Un impact sur la Province of Quebec"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-cq-ca1", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('conquete-causalite-1', 1, 2, 3),
      corrige: "Les Treize colonies déclarent leur indépendance envers l'Angleterre (document 1). Cela provoque la guerre d'indépendance entre les Treize colonies et l'Angleterre (document 2). Après la victoire des États-Unis et l'acquisition de leur indépendance, des Loyalistes viennent s'établir dans la Province of Quebec (document 3)." },

    // ===== P3 · Situer dans le temps — Q8 : avant/après l'Acte de Québec =====
    // Docs renumérotés depuis la source (originaux 13, 14, 15, 16) — ordre conservé.
    // Avant : Doc 2 (Boston Tea Party, 1773) et Doc 3 (serment du Test, en vigueur avant 1774).
    // Après : Doc 1 (territoire après Acte de Québec, 1774) et Doc 4 (invasion américaine, 1775).
    { id: "q-conquete-situer-3", operation: "Situer dans le temps et dans l'espace", numero: 3, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "Les documents 1 à 4 font référence à des événements politiques du Régime britannique. Indique si les faits présentés dans ces documents se déroulent avant ou après l'Acte de Québec.",
        responseSpace: { type: "before-after-axis", beforeLabel: "Avant", afterLabel: "Après", pivot: "L'Acte de Québec (1774)", slots: { before: 2, after: 2 } }
      },
      reglettes: [{ id: "r-cq-s3", label: "Réglette (2 points)", ...R_SITUER_2PT_T4_BINAIRE }],
      documents: pickDocs('conquete-situer-3', 1, 2, 3, 4),
      corrige: { before: ["Document 2", "Document 3"], after: ["Document 1", "Document 4"] } },

    // ===== Q8 — P4 · Situer dans le temps et dans l'espace =====
    { id: "q-revendications-situer-1", operation: "Situer dans le temps et dans l'espace", numero: 1, annee: 3, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "À l'aide des cartes des documents 1 et 2, indique laquelle correspond à l'organisation territoriale après l'Acte constitutionnel de 1791.",
        responseSpace: { type: "lines", count: 1 }
      },
      reglettes: [{ id: "r-rv-s1", label: "Réglette (1 point)", ...R_SITUER_1PT_SP_DOC }],
      documents: pickDocs('revendications-situer-1', 1, 2),
      corrige: "Document 2 (carte présentant la division Bas-Canada / Haut-Canada)." },

    // ============================================================
    //   P4 — PDF Questions courtes 1791-1840 (Q1-Q7)
    //   7 questions qui amènent P4 de 1/7 à 7/7 OI.
    // ============================================================

    // ===== P4 · Établir des faits — Q1 : apathie des Canadiens à la guerre de 1812 =====
    { id: "q-revendications-faits-1", operation: "Établir des faits", numero: 1, annee: 3, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Que nous apprend le document 1 sur la participation des Canadiens à la guerre anglo-américaine de 1812?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-rv-f1", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('revendications-faits-1', 1),
      corrige: "La population est apathique, c'est-à-dire qu'elle manifeste un manque d'enthousiasme pour la guerre." },

    // ===== P4 · Changements et continuités — Q2 : proportion anglophone qui s'accroît =====
    { id: "q-revendications-changements-1", operation: "Déterminer des changements et des continuités", numero: 1, annee: 3, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Indique un changement qui survient dans la population de la Province of Quebec entre 1791 et 1840.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-rv-cc1", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_GEN }],
      documents: pickDocs('revendications-changements-1', 1),
      corrige: "La proportion anglophone de la population s'accroît de manière significative (document 1)." },

    // ===== P4 · Causes et conséquences — Q3 : cause de propagation des épidémies =====
    // Note : libellé de la réglette source au pluriel (« les conséquences ») incohérent avec
    // l'énoncé qui demande « une cause ». On utilise R_CAUSES_2PT_GEN_1CAUSE au singulier
    // pour assurer la cohérence énoncé/réglette (même correction silencieuse que Q3 P3).
    { id: "q-revendications-causes-1", operation: "Déterminer des causes et des conséquences", numero: 1, annee: 3, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Indique une cause de propagation des épidémies au 19e siècle.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-rv-c1", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('revendications-causes-1', 1),
      corrige: "La promiscuité (ou le manque d'hygiène) dans les navires qui transportent les immigrants vers le Canada (document 1)." },

    // ===== P4 · Différences et similitudes — Q4 : désaccord Durham vs Le Canadien =====
    { id: "q-revendications-differences-1", operation: "Dégager des différences et des similitudes", numero: 1, annee: 3, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Sur quel point précis les auteurs des documents 1 et 2 sont-ils en désaccord?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-rv-d1", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_DIVERGENCE }],
      documents: pickDocs('revendications-differences-1', 1, 2),
      corrige: "Sur le projet d'union du Haut et du Bas-Canada." },

    // ===== P4 · Mettre en relation — Q5 : associer document à idéologie politique =====
    { id: "q-revendications-relation-1", operation: "Mettre en relation des faits", numero: 1, annee: 3, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Inscris à l'endroit approprié le numéro du document correspondant à chacune des idéologies politiques ci-dessous.",
        responseSpace: { type: "category-buckets", categories: ["Républicanisme", "Nationalisme canadien"], slots: [1, 1] }
      },
      reglettes: [{ id: "r-rv-r1", label: "Réglette (2 points)", ...R_RELATION_2PT_2_PART }],
      documents: pickDocs('revendications-relation-1', 1, 2),
      corrige: [["Document 1"], ["Document 2"]] },

    // ===== P4 · Liens de causalité — Q6 : coût du commerce des fourrures → fusion des compagnies =====
    { id: "q-revendications-causalite-1", operation: "Établir des liens de causalité", numero: 1, annee: 3, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Explique comment le coût du commerce des fourrures, suite à un changement dans les territoires de traite, a un impact sur les compagnies de traite au début du 19e siècle. Dans ta réponse, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "Un changement dans les territoires de traite",
          "Le coût du commerce des fourrures",
          "Un impact sur les compagnies de traite"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-rv-ca1", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('revendications-causalite-1', 1, 2, 3, 4),
      corrige: "La population de castors étant de plus en plus rare, le territoire de traite des fourrures est en expansion (documents 2 et 3 : la zone abondante de 1780 a presque disparu vers 1820). Cela entraîne une hausse importante des coûts pour les compagnies de traite des fourrures concurrentes (document 1). En raison de cette hausse des coûts, les deux principales compagnies de traite fusionnent, car la Compagnie du Nord-Ouest manque de ressources financières et ne peut plus soutenir la concurrence (document 4)." },

    // ===== P4 · Situer dans le temps — Q7 : avant/après les résolutions Russell (1837) =====
    // Renumérotation depuis le PDF source (docs 2, 3, 4, 5) — ordre conservé.
    // Avant : Doc 1 (92 résolutions, 1834) et Doc 3 (crise des subsides, conflit antérieur).
    // Après : Doc 2 (déclaration d'indépendance, 1838) et Doc 4 (attaque St-Charles, novembre 1837).
    { id: "q-revendications-situer-2", operation: "Situer dans le temps et dans l'espace", numero: 2, annee: 3, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Les documents 1 à 4 font référence à des événements politiques du Régime britannique. Indique si les faits présentés dans ces documents se déroulent avant ou après l'adoption des résolutions Russell par le parlement de Londres.",
        responseSpace: { type: "before-after-axis", beforeLabel: "Avant", afterLabel: "Après", pivot: "Les résolutions Russell (1837)", slots: { before: 2, after: 2 } }
      },
      reglettes: [{ id: "r-rv-s2", label: "Réglette (2 points)", ...R_SITUER_2PT_T4 }],
      documents: pickDocs('revendications-situer-2', 1, 2, 3, 4),
      corrige: { before: ["Document 1", "Document 3"], after: ["Document 2", "Document 4"] } },

    // ============================================================
    //   v1.19.0 — Familiarisation épreuve 3e secondaire (16 questions)
    //   Source : documents.recitus.qc.ca — Familiarisation épreuve - Questions courtes.
    //   Q12 fam (territoire après Acte constitutionnel) non intégrée : trop proche
    //   de q-revendications-situer-1.
    // ============================================================

    // ===== P1 · Différences/similitudes — Q1 fam : divergence sur le peuplement de l'Amérique =====
    { id: "q-experience-autochtones-differences-4", operation: "Dégager des différences et des similitudes", numero: 4, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Sur quel point précis les auteurs des documents 1 et 2 sont-ils en désaccord?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ea-d4", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_DIVERGENCE }],
      documents: pickDocs('experience-autochtones-differences-4', 1, 2),
      corrige: "Ils sont en désaccord sur le chemin emprunté par les premiers occupants entre l'Asie et l'Amérique (documents 1 et 2)." },

    // ===== P1 · Causes/conséquences — Q2 fam : cause de la rivalité entre nations autochtones =====
    { id: "q-experience-autochtones-causes-3", operation: "Déterminer des causes et des conséquences", numero: 3, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Indique une cause de la rivalité entre les nations autochtones.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ea-c3", label: "Réglette (2 points)", ...R_CAUSES_2PT_CAUSE_BINAIRE }],
      documents: pickDocs('experience-autochtones-causes-3', 1),
      corrige: "Les nations autochtones sont en compétition, car elles veulent devenir les intermédiaires les plus importants des Européens dans la traite des fourrures (document 1)." },

    // ===== P1 · Changements/continuités — Q3 fam : mode de vie autochtone après contact européen =====
    { id: "q-experience-autochtones-changements-2", operation: "Déterminer des changements et des continuités", numero: 2, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "À partir du document 1, indique un changement qui survient dans le mode de vie des Autochtones après l'arrivée des Européens en Amérique.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ea-cc2", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_GEN }],
      documents: pickDocs('experience-autochtones-changements-2', 1),
      corrige: "Un accès aux armes à feu et à d'autres objets occidentaux (vêtements, couvertures, objets en métal), ou l'intégration à un nouveau réseau d'échange." },

    // ============================================================
    //   v1.20.0 — Évaluation sommative version A — Des origines à 1608 (P1)
    //   Source : « Cahier de l'élève — Section A / Dossier documentaire — Section A ».
    //   6 des 7 questions intégrées (SQ3 sur la nomination des chefs iroquoiens vs
    //   algonquiens écartée : doublon de fond avec q-experience-autochtones-differences-2).
    // ============================================================

    // ===== P1 · Causes/conséquences — Q1 soma : 2 causes de l'alliance franco-amérindienne =====
    // Renumérotation depuis le PDF soma (docs source 1, 2 → Doc 1, Doc 2).
    { id: "q-experience-autochtones-causes-4", operation: "Déterminer des causes et des conséquences", numero: 4, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "À l'aide des documents 1 et 2, indique deux causes de l'alliance franco-amérindienne.",
        responseSpace: { type: "labeled-list", items: ["Cause 1", "Cause 2"], linesPerItem: 3 }
      },
      reglettes: [{ id: "r-ea-c4", label: "Réglette (2 points)", ...R_CAUSES_2PT_FACTEURS_EXPLICATIFS_T2 }],
      documents: pickDocs('experience-autochtones-causes-4', 1, 2),
      corrige: [
        "Les Français souhaitent obtenir la permission de s'installer sur le territoire.",
        "Plusieurs nations autochtones (Montagnais, Algonquins, Etchemins, Hurons-Wendats) cherchent un allié militaire dans le conflit qui les oppose aux Iroquois."
      ] },

    // ===== P1 · Causes/conséquences — Q2 soma : conséquence sociale de la guerre (adoption des prisonniers) =====
    // Renumérotation depuis le PDF soma (doc source 3 → Doc 1).
    // Réutilisation de R_CAUSES_2PT_CONS_SEULE (libellé quasi-identique : « plus ou moins la
    // conséquence » vs « plus ou moins correctement la conséquence » — variation sémantique mineure).
    { id: "q-experience-autochtones-causes-5", operation: "Déterminer des causes et des conséquences", numero: 5, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Indique une conséquence sociale de la guerre chez les nations autochtones du nord-est de l'Amérique.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ea-c5", label: "Réglette (2 points)", ...R_CAUSES_2PT_CONS_SEULE }],
      documents: pickDocs('experience-autochtones-causes-5', 1),
      corrige: "Grâce aux prisonniers faits lors de la guerre, il est possible d'intégrer un ennemi dans la communauté afin qu'il remplace un membre tué lors de l'escarmouche." },

    // ===== P1 · Situer dans le temps — Q4 soma : antériorité/postériorité à Charlesbourg-Royal (1541) =====
    // Renumérotation depuis le PDF soma : docs source 5, 6, 7, 8 → Doc 1, 2, 3, 4.
    // Antériorité : Doc 1 (Cartier Stadaconé, 2e voyage 1535-1536) et Doc 3 (image Cartier croix, 1er voyage 1534).
    // Postériorité : Doc 2 (Tadoussac 1603 Anadabijou) et Doc 4 (Champlain Acadie 1604-1605).
    // Variante de q-experience-autochtones-situer-1 (même pivot, documents source différents).
    { id: "q-experience-autochtones-situer-4", operation: "Situer dans le temps et dans l'espace", numero: 4, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Indique si les documents 1 à 4 sont antérieurs ou postérieurs à la fondation de l'établissement de Charlesbourg-Royal en 1541.",
        responseSpace: { type: "before-after-axis", beforeLabel: "Antériorité", afterLabel: "Postériorité", pivot: "Fondation de Charlesbourg-Royal (1541)", slots: { before: 2, after: 2 } }
      },
      reglettes: [{ id: "r-ea-s4", label: "Réglette (2 points)", ...R_SITUER_2PT_T4 }],
      documents: pickDocs('experience-autochtones-situer-4', 1, 2, 3, 4),
      corrige: { before: ["Document 1", "Document 3"], after: ["Document 2", "Document 4"] } },

    // ===== P1 · Causes/conséquences — Q5 soma : cause de la fondation du comptoir de Tadoussac =====
    // Renumérotation depuis le PDF soma (doc source 4 → Doc 1).
    // Note : la réglette source dit « la conséquence » alors que l'énoncé demande « une cause »
    // (probable erreur de copier-coller du PDF source). Correction silencieuse vers
    // R_CAUSES_2PT_GEN_1CAUSE (libellé cohérent avec l'énoncé).
    { id: "q-experience-autochtones-causes-6", operation: "Déterminer des causes et des conséquences", numero: 6, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Indique une cause de la fondation d'un comptoir commercial à Tadoussac par Pierre Chauvin de Tonnetuit.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ea-c6", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('experience-autochtones-causes-6', 1),
      corrige: "Le commerce des fourrures nécessite la fondation d'un comptoir commercial à Tadoussac." },

    // ===== P1 · Mettre en relation — Q6 soma : famille linguistique algonquienne vs iroquoienne =====
    // Renumérotation depuis le PDF soma : docs source 10, 11, 12, 13 → Doc 1, 2, 3, 4.
    // Variante de q-experience-autochtones-relation-1 (même format, documents source différents).
    // Note : cette question déborde naturellement sur 2 pages (énoncé + buckets + réglette +
    // Doc 1 + Doc 2 image sur la 1re ; Doc 3 + Doc 4 sur la 2e). Le drapeau cantSplitAllDocs
    // a été testé et n'aide pas, car le contenu dépasse une page complète. Le découpage
    // naturel respecte la grille 2-colonnes (paires Doc 1+2 et Doc 3+4).
    { id: "q-experience-autochtones-relation-3", operation: "Mettre en relation des faits", numero: 3, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Indique si les documents 1 à 4 correspondent à la famille linguistique algonquienne ou à la famille linguistique iroquoienne.",
        responseSpace: { type: "category-buckets", categories: ["Famille algonquienne", "Famille iroquoienne"], slots: [2, 2] }
      },
      reglettes: [{ id: "r-ea-r3", label: "Réglette (2 points)", ...R_RELATION_2PT_4_PART }],
      documents: pickDocs('experience-autochtones-relation-3', 1, 2, 3, 4),
      corrige: [["Document 1", "Document 2"], ["Document 3", "Document 4"]] },

    // ===== P1 · Différences/similitudes — Q7 soma : usage du chaudron de cuivre (perspectives) =====
    // Renumérotation depuis le PDF soma (doc source 14 → Doc 1).
    // Réutilisation de R_DIFFERENCES_2PT_GEN (libellé du niveau 0 légèrement plus complet :
    // « dégage incorrectement la différence ou ne la dégage pas » vs source « ne dégage pas »).
    { id: "q-experience-autochtones-differences-5", operation: "Dégager des différences et des similitudes", numero: 5, annee: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Le document 1 présente les perspectives iroquoienne et européenne sur l'utilisation du chaudron de cuivre. Indique une différence entre les deux perspectives.",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-ea-d5", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_GEN }],
      documents: pickDocs('experience-autochtones-differences-5', 1),
      corrige: "Les chaudrons de cuivre sont utilisés lors de rituels et de cérémonies, ainsi que pour décorer l'intérieur des habitations chez les Autochtones, alors qu'ils sont utilisés pour la cuisine chez les Européens." },

    // ===== P2 · Situer dans le temps — Q4 fam : avant/après la Grande Paix de Montréal =====
    // Renumérotation depuis le PDF Familiarisation : docs 5, 6, 7, 8 → Doc 1, 2, 3, 4.
    // Avant : Doc 1 (Vimont, attaques iroquoises mi-17e) et Doc 4 (Officier Carignan-Salières).
    // Après : Doc 2 (commerce sécuritaire, 1re moitié 18e) et Doc 3 (Fort William-Henry, 1757).
    // cantSplitAllDocs : force Word à garder énoncé + axe + réglette + 4 docs sur la même page
    // (sinon Word coupe naturellement entre paire 1 et paire 2 alors que tout aurait pu tenir).
    { id: "q-evolution-coloniale-situer-5", operation: "Situer dans le temps et dans l'espace", numero: 5, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      cantSplitAllDocs: true,
      questionBody: {
        prompt: "Les documents 1 à 4 font référence aux relations entre les Européens et les Autochtones. Indique si les faits présentés dans ces documents se déroulent avant ou après la Grande Paix de Montréal.",
        responseSpace: { type: "before-after-axis", beforeLabel: "Avant", afterLabel: "Après", pivot: "La Grande Paix de Montréal (1701)", slots: { before: 2, after: 2 } }
      },
      reglettes: [{ id: "r-ec-s5", label: "Réglette (2 points)", ...R_SITUER_2PT_T4 }],
      documents: pickDocs('evolution-coloniale-situer-5', 1, 2, 3, 4),
      corrige: { before: ["Document 1", "Document 4"], after: ["Document 2", "Document 3"] } },

    // ===== P2 · Établir des faits — Q5 fam : fonction commerciale des villes en Nouvelle-France =====
    { id: "q-evolution-coloniale-faits-3", operation: "Établir des faits", numero: 3, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Indique une fonction importante des villes en Nouvelle-France.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ec-f3", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('evolution-coloniale-faits-3', 1),
      corrige: "Elles ont une fonction commerciale importante, car les échanges se déroulent dans les villes lors des marchés (document 1)." },

    // ===== P2 · Changements/continuités — Q6 fam : politique coloniale après 1663 =====
    // Doc 1 (Caroline Masse — commerce des fourrures à 70% des exportations) appuie la continuité (mercantilisme).
    // Doc 2 (graphique population NF) appuie le changement (mesures de peuplement post-1663).
    { id: "q-evolution-coloniale-changements-2", operation: "Déterminer des changements et des continuités", numero: 2, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "La mise en place du Gouvernement royal en 1663 est un événement marquant en Nouvelle-France. À l'aide des documents 1 et 2, indique un changement et une continuité dans la politique coloniale après 1663.",
        responseSpace: { type: "labeled-list", items: ["Changement", "Continuité"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-ec-cc2", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_1CHG_1CONT }],
      documents: pickDocs('evolution-coloniale-changements-2', 1, 2),
      corrige: [
        "Les mesures de peuplement. Après 1663, les politiques favorisent le peuplement de la colonie (document 2).",
        "La politique économique reste la même : il s'agit toujours du mercantilisme (document 1)."
      ] },

    // ===== P2 · Établir des faits — Q7 fam : commerce triangulaire =====
    { id: "q-evolution-coloniale-faits-4", operation: "Établir des faits", numero: 4, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Nomme le système commercial illustré dans le document 1.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-ec-f4", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('evolution-coloniale-faits-4', 1),
      corrige: "Le commerce triangulaire (document 1)." },

    // ===== P2 · Différences/similitudes — Q8 fam : communautés religieuses masculines vs féminines =====
    { id: "q-evolution-coloniale-differences-6", operation: "Dégager des différences et des similitudes", numero: 6, annee: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Dégage une similitude dans le rôle des communautés religieuses masculines et féminines en Nouvelle-France.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ec-d6", label: "Réglette (2 points)", ...R_SIMILITUDES_2PT_GEN }],
      documents: pickDocs('evolution-coloniale-differences-6', 1, 2),
      corrige: "Les communautés religieuses masculines (jésuites, document 1) et féminines (ursulines, document 2) participent toutes deux à l'évangélisation des Autochtones." },

    // ===== P3 · Mettre en relation — Q9 fam : 3 groupes sociaux après la Conquête =====
    // Renumérotation depuis le PDF Familiarisation : docs 15, 16, 17 → Doc 1, 2, 3.
    // Autochtones → Doc 3 (PDF 17, révolte pour Grands Lacs) ;
    // Marchands anglophones → Doc 1 (PDF 15, Proclamation à la lettre + Chambre où ils sont seuls) ;
    // Administrateurs britanniques → Doc 2 (PDF 16, conciliants envers les Canadiens français).
    { id: "q-conquete-relation-3", operation: "Mettre en relation des faits", numero: 3, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "Les documents 1 à 3 présentent les revendications de différents groupes sociaux au lendemain de la guerre de la Conquête. Inscris à l'endroit approprié le numéro du document correspondant à chacune des positions des groupes sociaux.",
        responseSpace: { type: "category-buckets", categories: ["Les Autochtones", "Les marchands anglophones", "Les administrateurs britanniques"], slots: [1, 1, 1] }
      },
      reglettes: [{ id: "r-cq-r3", label: "Réglette (2 points)", ...R_RELATION_2PT_3_PART }],
      documents: pickDocs('conquete-relation-3', 1, 2, 3),
      corrige: [["Document 3"], ["Document 1"], ["Document 2"]] },

    // ===== P3 · Causes/conséquences — Q10 fam : deux conséquences de l'Acte de Québec =====
    { id: "q-conquete-causes-5", operation: "Déterminer des causes et des conséquences", numero: 5, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "Indique deux conséquences de l'Acte de Québec.",
        responseSpace: { type: "labeled-list", items: ["Conséquence 1", "Conséquence 2"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-cq-c5", label: "Réglette (2 points)", ...R_CAUSES_2PT_2CONS }],
      documents: pickDocs('conquete-causes-5', 1, 2),
      corrige: [
        "Les Canadiens français ont le droit de pratiquer la religion catholique et l'Église peut percevoir la dîme (document 1).",
        "Le territoire de la Province of Quebec est beaucoup plus étendu (document 2)."
      ] },

    // ===== P3 · Causalité — Q11 fam : lettre du congrès → réponse des Canadiens → invasion =====
    // Renumérotation depuis le PDF Familiarisation : docs 18, 19, 21 → Doc 1, 2, 3.
    // Doc 1 = rapport Brown (refus canadiens) ; Doc 2 = carte invasion ; Doc 3 = lettre Dickinson (invitation).
    { id: "q-conquete-causalite-2", operation: "Établir des liens de causalité", numero: 2, annee: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "Explique comment la réponse des Canadiens à la lettre du congrès américain entraîne une réaction des Treize colonies dans la deuxième moitié du 18e siècle. Dans ta réponse, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "La lettre du congrès américain aux Canadiens",
          "La réponse des Canadiens",
          "La réaction des Treize colonies"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-cq-ca2", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('conquete-causalite-2', 1, 2, 3),
      corrige: "Le congrès américain invite les Canadiens à se joindre à eux dans leur révolution contre la métropole (document 3). Cette invitation est refusée par les Canadiens (document 1). Cette réponse entraîne l'invasion de la Province of Quebec par les Treize colonies (document 2)." },

    // ===== P4 · Situer dans le temps (chrono) — Q13 fam : développement éco du Bas-Canada =====
    // Renumérotation depuis le PDF Familiarisation : docs 25, 26, 27 → Doc 1, 2, 3.
    // Ordre chrono : Doc 1 (Buies, exploitation forestière post-blocus continental ~1810)
    // → Doc 3 (Banque de Montréal, 1817) → Doc 2 (canal Lachine, ouvert 1825).
    { id: "q-revendications-situer-3", operation: "Situer dans le temps et dans l'espace", numero: 3, annee: 3, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Les documents 1 à 3 se rapportent au développement économique du Bas-Canada. Place-les en ordre chronologique du plus ancien au plus récent.",
        responseSpace: { type: "chrono-ordering", items: ["Plus ancien", "Intermédiaire", "Plus récent"] }
      },
      reglettes: [{ id: "r-rv-s3", label: "Réglette (2 points)", ...R_SITUER_2PT_T3_BINAIRE }],
      documents: pickDocs('revendications-situer-3', 1, 2, 3),
      corrige: ["Document 1", "Document 3", "Document 2"] },

    // ===== P4 · Établir des faits — Q14 fam : revendication des Patriotes sur le Conseil exécutif =====
    { id: "q-revendications-faits-2", operation: "Établir des faits", numero: 2, annee: 3, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Quelle est la principale revendication des Patriotes en ce qui concerne le Conseil exécutif?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-rv-f2", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('revendications-faits-2', 1),
      corrige: "Les Patriotes veulent que les membres du Conseil exécutif soient choisis parmi la majorité élue de la Chambre d'assemblée (document 1)." },

    // ===== P4 · Différences/similitudes — Q15 fam : 3 acteurs au sujet de la Rébellion =====
    // Convention « un acteur = un document » : doc 29 fam splitté en Doc 1 (Lartigue), Doc 2 (Gosford), Doc 3 (Nelson).
    { id: "q-revendications-differences-2", operation: "Dégager des différences et des similitudes", numero: 2, annee: 3, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Les documents 1 à 3 présentent la position de trois acteurs au sujet de la Rébellion possible des Patriotes. Indique l'acteur qui présente une position différente et compare sa position à celle des deux autres acteurs.",
        responseSpace: { type: "lines", count: 5 }
      },
      reglettes: [{ id: "r-rv-d2", label: "Réglette (3 points)", ...R_DIFFSIM_3PT_1DIFF_1SIM }],
      documents: pickDocs('revendications-differences-2', 1, 2, 3),
      corrige: "Le Dr. Nelson (document 3) présente une position différente : il croit qu'il faut se rebeller en prenant les armes. Les deux autres acteurs — Mgr Lartigue, évêque de Montréal (document 1), et lord Gosford, gouverneur du Bas-Canada (document 2) — favorisent au contraire le maintien de la paix (similitude entre les positions de Lartigue et Gosford)." },

    // ===== P4 · Changements/continuités — Q16 fam : changement territorial du commerce du bois =====
    { id: "q-revendications-changements-2", operation: "Déterminer des changements et des continuités", numero: 2, annee: 3, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Quel changement important le commerce du bois provoque-t-il au plan territorial?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-rv-cc2", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_GEN }],
      documents: pickDocs('revendications-changements-2', 1),
      corrige: "Il permet le développement de régions forestières comme le Saguenay-Lac-Saint-Jean, la Mauricie et l'Outaouais (document 1)." },

    // ===== P4 · Mettre en relation — Q17 fam : idéologies (libéralisme vs nationalisme) =====
    // Variante de q-revendications-relation-1 qui oppose « républicanisme » vs « nationalisme canadien »
    // avec des extraits différents (JALBC 1832-33 et Le Canadien 21 mai 1831).
    { id: "q-revendications-relation-2", operation: "Mettre en relation des faits", numero: 2, annee: 3, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Les documents 1 et 2 présentent la position de deux journaux du début du 19e siècle. Inscris à l'endroit approprié le numéro du document correspondant à l'idéologie défendue.",
        responseSpace: { type: "category-buckets", categories: ["Libéralisme", "Nationalisme"], slots: [1, 1] }
      },
      reglettes: [{ id: "r-rv-r2", label: "Réglette (2 points)", ...R_RELATION_2PT_2_PART }],
      documents: pickDocs('revendications-relation-2', 1, 2),
      corrige: [["Document 1"], ["Document 2"]] },

    // ============================================================
    // ===== P5 — 4e secondaire — Formation du régime fédéral canadien (1840-1896) =====
    // Source : Évaluations sommatives officielles versions A et B, section A.
    // ============================================================

    // ===== Q1 — P5 V-A · Situer dans le temps — Avant/après la fédération canadienne =====
    { id: "q-fc-situer-1", operation: "Situer dans le temps et dans l'espace", numero: 1, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Classe les documents 1 à 4 selon qu'ils se situent avant ou après la fédération canadienne.",
        responseSpace: { type: "before-after-axis", beforeLabel: "Avant", afterLabel: "Après", pivot: "Fédération canadienne", slots: { before: 2, after: 2 } }
      },
      reglettes: [{ id: "r-fc-s1", label: "Réglette (2 points)", ...R_SITUER_2PT_T4_SOMA }],
      documents: pickDocs('fc-situer-1', 1, 2, 3, 4),
      // Doc 1 (Province du Canada, Acte d'Union 1840) et Doc 4 (Acte constitutionnel 1791) : AVANT.
      // Doc 2 (schéma AANB 1867) et Doc 3 (carte post-fédération avec provinces) : APRÈS.
      corrige: { before: ["Document 1", "Document 4"], after: ["Document 2", "Document 3"] } },

    // ===== Q2 — P5 V-A · Mettre en relation — Trois idéologies =====
    { id: "q-fc-relation-1", operation: "Mettre en relation des faits", numero: 1, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Inscris à l'endroit approprié le numéro du document correspondant à chacune des idéologies ci-dessous.",
        responseSpace: { type: "category-buckets", categories: ["Ultramontanisme", "Anticléricalisme", "Nationalisme de survivance"], slots: [1, 1, 1] }
      },
      reglettes: [{ id: "r-fc-r1", label: "Réglette (2 points)", ...R_RELATION_2PT_3_PART }],
      documents: pickDocs('fc-relation-1', 1, 2, 3),
      // Ultramontanisme = Doc 3 (Cardin) ; Anticléricalisme = Doc 1 (Dessaulles) ; Nat. de survivance = Doc 2 (Bernard).
      corrige: [["Document 3"], ["Document 1"], ["Document 2"]] },

    // ===== Q3 — P5 V-A · Établir des liens de causalité — Économie agricole → émigration → mesure Église =====
    { id: "q-fc-causalite-1", operation: "Établir des liens de causalité", numero: 1, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Explique comment la situation économique québécoise au 19e siècle a amené l'Église catholique à intervenir pour limiter un mouvement de population. Dans ta réponse, tu devras préciser chacun des faits et les lier entre eux.",
        bullets: [
          "La situation du territoire agricole au Québec",
          "Un mouvement de population",
          "Une mesure mise en place par l'Église catholique"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-fc-ca1", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('fc-causalite-1', 1, 2, 3),
      corrige: "Les terres agricoles sont de plus en plus rares au Québec (situation du territoire agricole). Ainsi, un grand nombre de Québécois émigrent vers les États-Unis (mouvement de population), ce qui amène l'Église catholique à inciter les familles à s'installer sur de nouveaux territoires ouverts à la colonisation, comme dans les Laurentides, et à favoriser la création d'infrastructures (chemin de fer) pour faciliter l'accès aux régions de colonisation (mesure mise en place par l'Église catholique)." },

    // ===== Q4 — P5 V-A · Causes et conséquences — Objectif des missions catholiques =====
    { id: "q-fc-causes-1", operation: "Déterminer des causes et des conséquences", numero: 1, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Indique l'objectif des missions catholiques chez les Autochtones.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-c1", label: "Réglette (2 points)", ...R_CAUSES_2PT_1CAUSE_SOMA }],
      documents: pickDocs('fc-causes-1', 1),
      corrige: "Les missions catholiques visent à convertir les Autochtones à la religion catholique OU à favoriser leur sédentarisation." },

    // ===== Q5 — P5 V-A · Situer dans l'espace — Exploitation forestière (lettre sur carte) =====
    { id: "q-fc-situer-2", operation: "Situer dans le temps et dans l'espace", numero: 2, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Selon le document 1, indique la lettre qui désigne une région du Québec où se développe l'exploitation forestière dans la deuxième moitié du 19e siècle.",
        responseSpace: { type: "lines", count: 1 }
      },
      reglettes: [{ id: "r-fc-s2", label: "Réglette (1 point)", ...R_SITUER_1PT_SP_FAIT_SOMA }],
      documents: pickDocs('fc-situer-2', 1),
      corrige: "B (Mauricie / Outaouais)." },

    // ===== Q6 — P5 V-A · Différences — Désaccord Buies vs Mélanges religieux sur l'éducation =====
    { id: "q-fc-differences-1", operation: "Dégager des différences et des similitudes", numero: 1, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Les documents 1 et 2 présentent la position de deux acteurs historiques. Indique sur quel point précis ils sont en désaccord.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-fc-d1", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_DIVERGENCE_ETABLIT }],
      documents: pickDocs('fc-differences-1', 1, 2),
      corrige: "Ils ne s'entendent pas sur l'idée de rendre l'éducation obligatoire et gratuite pour tous, OU sur la question de savoir qui de l'État ou de l'Église devrait être responsable de l'éducation." },

    // ===== Q7 — P5 V-A · Continuité — Revendications des Métis (rivière Rouge et Nord-Ouest) =====
    { id: "q-fc-continuite-1", operation: "Déterminer des changements et des continuités", numero: 1, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À partir des documents 1 et 2, dégage un élément de continuité dans les revendications des Métis lors de la rébellion de la rivière Rouge et des rébellions du Nord-Ouest.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-fc-co1", label: "Réglette (2 points)", ...R_CONTINUITES_2PT_GEN_SOMA }],
      documents: pickDocs('fc-continuite-1', 1, 2),
      corrige: "Dans les deux cas, les Métis revendiquent le droit de conserver leurs territoires." },

    // ===== Q8 — P5 V-A · Mettre en relation — Orgs féminines anglophones vs communautés religieuses =====
    { id: "q-fc-relation-2", operation: "Mettre en relation des faits", numero: 2, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Les documents 1 à 4 présentent le rôle de deux types d'associations de femmes durant la deuxième moitié du 19e siècle. Inscris à l'endroit approprié le numéro de chacun des quatre documents.",
        responseSpace: { type: "category-buckets", categories: ["Organisations féminines anglophones", "Communautés religieuses"], slots: [2, 2] }
      },
      reglettes: [{ id: "r-fc-r2", label: "Réglette (2 points)", ...R_RELATION_2PT_4_SOMA }],
      documents: pickDocs('fc-relation-2', 1, 2, 3, 4),
      corrige: [["Document 1", "Document 2"], ["Document 3", "Document 4"]] },

    // ===== Q9 — P5 V-B · Changement/continuité — Acte d'Union (structure politique) =====
    { id: "q-fc-continuite-2", operation: "Déterminer des changements et des continuités", numero: 2, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À partir des documents 1 et 2, indique s'il y a changement ou continuité dans la structure politique du Canada suite à l'adoption de l'Acte d'Union. Justifie ton choix par des faits et un repère de temps.",
        responseSpace: { type: "lines", count: 5 }
      },
      reglettes: [{ id: "r-fc-co2", label: "Réglette (3 points)", ...RUBRIC_CHANGEMENTS_3PT_REPERE_TEMPS }],
      documents: pickDocs('fc-continuite-2', 1, 2),
      corrige: "Il y a CHANGEMENT, car il n'y a désormais qu'une seule chambre d'assemblée pour les deux parties du Canada en 1840 OU car la chambre d'assemblée compte un nombre égal de députés (42) pour chaque partie du Canada en 1840. OU il y a CONTINUITÉ, car le gouvernement britannique dirige toujours la colonie par l'entremise d'un gouverneur en 1840 OU car le gouverneur nomme encore les membres des conseils exécutifs et législatifs." },

    // ===== Q10 — P5 V-B · Établir des liens de causalité — Libre-échange GB → traité É-U =====
    { id: "q-fc-causalite-2", operation: "Établir des liens de causalité", numero: 2, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Explique comment des changements dans la politique économique de la Grande-Bretagne amènent le Canada-Uni à revoir ses relations commerciales avec les États-Unis au début des années 1850. Réponds à la question en précisant les éléments ci-dessous et en les liant entre eux.",
        bullets: [
          "La nouvelle politique économique de la Grande-Bretagne envers ses colonies",
          "Un effet sur l'économie du Canada-Uni",
          "Une conséquence de cette situation sur les relations commerciales avec les États-Unis"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-fc-ca2", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('fc-causalite-2', 1, 2, 3),
      corrige: "À la fin des années 1840, le gouvernement britannique adopte une politique de libre-échange avec ses colonies (élimination de la protection douanière). Cette nouvelle politique désavantage le Canada-Uni car les produits canadiens ont de la difficulté à trouver preneur sur les marchés internationaux en raison de leurs prix élevés. Cette situation incite le Canada-Uni à signer un traité de réciprocité avec les États-Unis en 1854." },

    // ===== Q11 — P5 V-B · Causes et conséquences — Urbanisation (cause + conséquence économique) =====
    { id: "q-fc-causes-2", operation: "Déterminer des causes et des conséquences", numero: 2, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Dans la seconde moitié du 19e siècle, le Québec s'urbanise. Inscris le numéro du document qui présente une cause de l'urbanisation et le numéro du document qui présente une conséquence économique de l'urbanisation.",
        responseSpace: { type: "category-buckets", categories: ["Cause", "Conséquence économique"], slots: [1, 1] }
      },
      reglettes: [{ id: "r-fc-c2", label: "Réglette (2 points)", ...R_CAUSES_2PT_FACTEUR_EXPLICATIF_CONS }],
      documents: pickDocs('fc-causes-2', 1, 2),
      // Cause = Doc 1 (exode rural vers les villes) ; Conséquence économique = Doc 2 (vie urbaine montrée par l'image).
      corrige: [["Document 1"], ["Document 2"]] },

    // ===== Q12 — P5 V-B · Mettre en relation — Politique nationale Macdonald (3 objectifs) =====
    { id: "q-fc-relation-3", operation: "Mettre en relation des faits", numero: 3, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Inscris à l'endroit approprié les documents qui font référence aux objectifs poursuivis par la politique économique adoptée par le gouvernement de John A. Macdonald à la fin des années 1870.",
        responseSpace: { type: "category-buckets", categories: ["Soutenir l'industrie canadienne", "Développer un marché intérieur", "Peupler l'Ouest"], slots: [1, 1, 1] }
      },
      reglettes: [{ id: "r-fc-r3", label: "Réglette (2 points)", ...R_RELATION_2PT_3_PART }],
      documents: pickDocs('fc-relation-3', 1, 2, 3),
      // Soutenir l'industrie = Doc 1 (tarifs douaniers) ; Marché intérieur = Doc 2 (Allôprof, colonisation
      // Ouest crée des consommateurs) ; Peupler l'Ouest = Doc 3 (chemin de fer transcontinental).
      corrige: [["Document 1"], ["Document 2"], ["Document 3"]] },

    // ===== Q13 — P5 V-B · Situer dans le temps — Loi sur les Indiens (1876) sur ligne du temps =====
    // Type responseSpace `timeline-segments` (introduit v1.21.0, refonte v1.21.2) : 3 encadrés
    // contigus avec lettre + période + cercle à encercler.
    { id: "q-fc-situer-3", operation: "Situer dans le temps et dans l'espace", numero: 3, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Sur la ligne du temps, encercle la lettre qui correspond à la période pendant laquelle se déroulent les faits présentés dans le document 1.",
        responseSpace: { type: "timeline-segments", periods: [
          { letter: "A", range: "1840–1848" },
          { letter: "B", range: "1848–1867" },
          { letter: "C", range: "1867–1896" }
        ]}
      },
      reglettes: [{ id: "r-fc-s3", label: "Réglette (1 point)", ...R_SITUER_1PT_T1_FAIT }],
      documents: pickDocs('fc-situer-3', 1),
      corrige: "C (la Loi sur les Indiens est adoptée en 1876, donc dans la période 1867-1896)." },

    // ===== Q14 — P5 V-B · Mettre en relation — Identifier l'idéologie (anticléricalisme) =====
    { id: "q-fc-relation-4", operation: "Mettre en relation des faits", numero: 4, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Le document 1 fait référence à une idéologie dominante au Québec dans la deuxième moitié du 19e siècle. De quelle idéologie s'agit-il?",
        responseSpace: { type: "lines", count: 1 }
      },
      reglettes: [{ id: "r-fc-r4", label: "Réglette (1 point)", ...R_RELATION_1PT_1FAIT }],
      documents: pickDocs('fc-relation-4', 1),
      corrige: "L'anticléricalisme." },

    // ===== Q15 — P5 V-B · Continuité — Droits des femmes dans le Code civil de 1866 =====
    { id: "q-fc-continuite-3", operation: "Déterminer des changements et des continuités", numero: 3, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Indique un élément de continuité en ce qui concerne les droits des femmes dans le Code civil de 1866.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-co3", label: "Réglette (2 points)", ...R_CONTINUITES_2PT_GEN_SOMA }],
      documents: pickDocs('fc-continuite-3', 1),
      corrige: "Les femmes sont toujours considérées comme mineures selon le Code civil de 1866 OU les femmes conservent leur incapacité juridique selon le Code civil de 1866." },

    // ===== Q16 — P5 V-B · Similitudes — Convergence sur la pendaison de Louis Riel =====
    { id: "q-fc-differences-2", operation: "Dégager des différences et des similitudes", numero: 2, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Les documents 1 et 2 présentent le point de vue de deux acteurs sur un événement survenu dans l'Ouest canadien. Sur quel point précis sont-ils d'accord?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-fc-d2", label: "Réglette (2 points)", ...R_SIMILITUDES_2PT_CONVERGENCE_ETABLIT }],
      documents: pickDocs('fc-differences-2', 1, 2),
      corrige: "Les deux acteurs sont en accord sur le fait que la pendaison de Louis Riel est une injustice infligée aux Canadiens français du Canada, OU sur le fait qu'il faut s'opposer à la pendaison de Louis Riel." },

    // ============================================================
    // ===== Questions ajoutées v1.22.0 — Guides pédagogiques RÉCIT (1840-1896) =====
    // Source : guides élèves du Service national du RÉCIT, domaine de l'univers social.
    // Sections : Pop&Vie, Politique nationale, Fédération canadienne, Église/idéologies,
    // Économie, Acte d'Union/gouvernement responsable. 12 questions retenues sur 15
    // potentielles ; 3 questions écartées comme doublons de fond avec les sommatives P5 :
    //   • Pol Nat Q2 ≈ Q12 V-B (objectifs Politique nationale Macdonald)
    //   • Église Q2 ≈ Q2 V-A (3 documents → 3 idéologies)
    //   • Acte d'Union Q1 ≈ Q9 V-B (changement/continuité structure politique sous Acte d'Union)
    // ============================================================

    // ===== Q17 — P5 guide Pop&Vie · Différences — Femmes bourgeoisie vs ouvrières =====
    { id: "q-fc-differences-3", operation: "Dégager des différences et des similitudes", numero: 3, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide des documents 1 à 3, compare la situation des femmes de la bourgeoisie à celle des femmes de la classe ouvrière. Dégage une similitude et une différence.",
        responseSpace: { type: "labeled-list", items: ["Similitude", "Différence"], linesPerItem: 3 }
      },
      reglettes: [{ id: "r-fc-d3", label: "Réglette (2 points)", ...R_DIFFSIM_2PT_1SIM_1DIFF_GUIDE }],
      documents: pickDocs('fc-differences-3', 1, 2, 3),
      corrige: [
        "La femme bourgeoise comme la femme ouvrière sont soumises à l'autorité de leur mari.",
        "Contrairement à la femme ouvrière, la femme bourgeoise peut déléguer ses tâches à des domestiques."
      ] },

    // ===== Q18 — P5 guide Pop&Vie · Causes/conséquences — Conséquence du Code civil =====
    // Énoncé renuméroté : « document 4 » du guide → « document 1 » dans la section.
    { id: "q-fc-causes-3", operation: "Déterminer des causes et des conséquences", numero: 3, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, nomme une conséquence de l'adoption du Code civil pour la vie quotidienne des femmes mariées.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-fc-c3", label: "Réglette (2 points)", ...R_CAUSES_2PT_1CONS_GUIDE }],
      documents: pickDocs('fc-causes-3', 1),
      corrige: "La limitation de la capacité juridique de la femme mariée OU les femmes mariées demeurent soumises à leur mari OU les femmes mariées ont un statut de mineur." },

    // ===== Q19 — P5 guide Pop&Vie · Différences — PN vs autorités britanniques (années 1840) =====
    // Énoncé renuméroté : « documents 5 et 6 » du guide → « documents 1 et 2 » dans la section.
    { id: "q-fc-differences-4", operation: "Dégager des différences et des similitudes", numero: 4, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide des documents 1 et 2, dégage une différence dans la manière dont des membres des Premières Nations perçoivent leur situation dans les années 1840 et la manière dont certains représentants des autorités britanniques la décrivent.",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-fc-d4", label: "Réglette (2 points)", ...R_DIFFSIM_2PT_1SIM_1DIFF_GUIDE }],
      documents: pickDocs('fc-differences-4', 1, 2),
      corrige: "Les Premières Nations perçoivent tristement leur sort et sont résignées à demander des terres au gouvernement afin d'assurer leur subsistance, alors que les autorités britanniques perçoivent les Premières Nations comme un fardeau dont elles sont responsables." },

    // ===== Q20 — P5 guide Pol Nat · Différences — Soeur Curran vs Mackenzie sur Louis Riel (1869-70) =====
    // Note : Riel de 1869-1870 (Rivière-Rouge), distinct de la pendaison de 1885 traitée en Q16 (V-B).
    { id: "q-fc-differences-5", operation: "Dégager des différences et des similitudes", numero: 5, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Les documents 1 et 2 présentent la position de deux acteurs vis-à-vis de Louis Riel, chef de la rébellion des Métis. Quelle est la différence entre les deux points de vue?",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-fc-d5", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_1DIFF_PARTIEL_GUIDE }],
      documents: pickDocs('fc-differences-5', 1, 2),
      corrige: "Soeur Mary A. Curran considère que Louis Riel et ses actions sont justes et selon la bonne grâce du Seigneur, alors qu'Alexander Mackenzie considère que Louis Riel est un rebelle et que ses actions sont illégitimes." },

    // ===== Q21 — P5 guide Féd · Différences — Dorion (opposant) vs Taché/Cartier (favorables) =====
    { id: "q-fc-differences-6", operation: "Dégager des différences et des similitudes", numero: 6, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Les documents 1 à 3 présentent les positions de trois acteurs sur un projet politique dans la deuxième moitié du 19e siècle. Nomme l'acteur qui présente une position différente et compare sa position à celle des deux autres acteurs.",
        responseSpace: { type: "lines", count: 5 }
      },
      reglettes: [{ id: "r-fc-d6", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_1DIFF_PARTIEL_GUIDE }],
      documents: pickDocs('fc-differences-6', 1, 2, 3),
      corrige: "Jean-Baptiste-Éric Dorion présente une position différente de Taché et de Cartier. Dorion s'oppose à la réalisation de l'union des colonies britanniques d'Amérique du Nord OU à la création d'une union fédérale, tandis que Taché et Cartier sont pour la réalisation de l'union." },

    // ===== Q22 — P5 guide Féd · Causes/conséquences — Traité de réciprocité (cause + conséquence) =====
    // Énoncé renuméroté : « documents 4 et 5 » du guide → « documents 1 et 2 » dans la section.
    { id: "q-fc-causes-4", operation: "Déterminer des causes et des conséquences", numero: 4, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À partir des documents 1 et 2, détermine une cause et une conséquence du traité de réciprocité entre les colonies britanniques en Amérique du Nord et les États-Unis.",
        responseSpace: { type: "labeled-list", items: ["Cause", "Conséquence"], linesPerItem: 3 }
      },
      reglettes: [{ id: "r-fc-c4", label: "Réglette (2 points)", ...R_CAUSES_2PT_CAUSE_CONS }],
      documents: pickDocs('fc-causes-4', 1, 2),
      corrige: [
        "La fin des politiques protectionnistes en Grande-Bretagne force la Province du Canada à trouver de nouveaux marchés.",
        "Grâce au traité de réciprocité commerciale, les exportations vers le marché américain augmentent."
      ] },

    // ===== Q23 — P5 guide Féd · Liens de causalité — Traités numérotés (3 éléments à lier) =====
    // Énoncé renuméroté : « documents 6, 7 et 8 » du guide → « documents 1, 2 et 3 » dans la section.
    { id: "q-fc-causalite-3", operation: "Établir des liens de causalité", numero: 3, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À partir des documents 1, 2 et 3, établis les liens de causalité qui expliquent la mise en place des ententes entre le gouvernement fédéral et les nations autochtones. Dans ta réponse, tu devras préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "Le point de vue du gouvernement fédéral et le point de vue des Autochtones",
          "La signature des traités numérotés",
          "Les épidémies dans les communautés autochtones causées par l'immigration européenne"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-fc-ca3", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('fc-causalite-3', 1, 2, 3),
      corrige: "Cherchant à coloniser l'Ouest afin de développer l'économie du pays, le gouvernement canadien met en place une série de traités numérotés avec les nations autochtones de l'Ouest. Ces nations sont affectées par l'effondrement de l'économie du bison et considèrent que la colonisation est inévitable. Elles acceptent donc de signer les traités. La signature des traités numérotés facilite la colonisation de l'Ouest. L'arrivée massive d'immigrants européens cause de nombreuses épidémies dans les communautés autochtones." },

    // ===== Q24 — P5 guide Église · Différences — Mgr Bourget vs Dessaulles sur l'Index =====
    { id: "q-fc-differences-7", operation: "Dégager des différences et des similitudes", numero: 7, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Les documents 1 et 2 présentent le point de vue de deux acteurs au milieu du 19e siècle. Sur quel point précis ces deux acteurs sont-ils en désaccord?",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-fc-d7", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_DIVERGENCE_ETABLIT }],
      documents: pickDocs('fc-differences-7', 1, 2),
      corrige: "Les deux auteurs sont en désaccord sur la censure OU sur l'Index OU sur la liberté de choix de lecture." },

    // ===== Q25 — P5 guide Économie · Situer T/E — 4 docs avant/après industrialisation =====
    { id: "q-fc-situer-4", operation: "Situer dans le temps et dans l'espace", numero: 4, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Les documents 1 à 4 font référence à l'économie du Bas-Canada. Indique si les faits présentés dans ces documents se déroulent avant ou après le début de la première phase d'industrialisation.",
        responseSpace: { type: "before-after-axis", beforeLabel: "Avant la première phase d'industrialisation", afterLabel: "Après la première phase d'industrialisation", pivot: "Première phase d'industrialisation", slots: { before: 2, after: 2 } }
      },
      reglettes: [{ id: "r-fc-s4", label: "Réglette (2 points)", ...R_SITUER_2PT_T4 }],
      documents: pickDocs('fc-situer-4', 1, 2, 3, 4),
      // Avant : Doc 2 (caricature « Deux paires par jour » sur atelier de cordonnerie pré-mécanisation,
      // tradition artisanale 1880) ET Doc 3 (commerce des fourrures à York Factory, pré-industriel).
      // Après : Doc 1 (témoignage 1889 sur manufactures mécanisées) ET Doc 4 (intérieur d'atelier mécanisé).
      corrige: { before: ["Document 2", "Document 3"], after: ["Document 1", "Document 4"] } },

    // ===== Q26 — P5 guide Économie · Mettre en relation — Concepts urbanisation/industrialisation =====
    // Énoncé renuméroté : « documents 5 et 6 » du guide → « documents 1 et 2 » dans la section.
    { id: "q-fc-relation-5", operation: "Mettre en relation des faits", numero: 5, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Indique à l'endroit approprié le numéro du document qui correspond à chacun des concepts ci-dessous.",
        responseSpace: { type: "category-buckets", categories: ["Urbanisation", "Industrialisation"], slots: [1, 1] }
      },
      reglettes: [{ id: "r-fc-r5", label: "Réglette (2 points)", ...R_RELATION_2PT_2_PART }],
      documents: pickDocs('fc-relation-5', 1, 2),
      // Doc 1 (ex-Doc 5 guide, processus de fabrication) = Industrialisation.
      // Doc 2 (ex-Doc 6 guide, population rurale → ville) = Urbanisation.
      corrige: [["Document 2"], ["Document 1"]] },

    // ===== Q27 — P5 guide Économie · Changements/continuités — Industrie forestière =====
    // Énoncé renuméroté : « document 7 » du guide → « document 1 » dans la section.
    { id: "q-fc-continuite-4", operation: "Déterminer des changements et des continuités", numero: 4, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À partir du document 1, indique un changement qui survient dans l'industrie forestière durant la première phase d'industrialisation.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-fc-co4", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_GEN }],
      documents: pickDocs('fc-continuite-4', 1),
      corrige: "La mécanisation permet de scier les billots plus facilement OU la mécanisation facilite la transformation du bois OU l'apparition des premières scieries facilite la transformation du bois." },

    // ===== Q28 — P5 guide Acte d'Union · Causes/conséquences — 2 causes responsabilité ministérielle (1848) =====
    // Énoncé renuméroté : « documents 2 et 3 » du guide → « documents 1 et 2 » dans la section.
    // Note réglette : le guide pédagogique ne fournit pas de barème explicite pour cette question.
    // On réutilise R_CAUSES_2PT_FACTEURS_EXPLICATIFS_T2 (sommative V-A P1, libellé « facteurs
    // explicatifs ») comme équivalent fonctionnel pour « 2 causes (2 sur 2) ».
    { id: "q-fc-causes-5", operation: "Déterminer des causes et des conséquences", numero: 5, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide des documents 1 et 2, détermine deux causes de l'obtention de la responsabilité ministérielle dans la Province du Canada en 1848. Justifie ta réponse.",
        responseSpace: { type: "lines", count: 6 }
      },
      reglettes: [{ id: "r-fc-c5", label: "Réglette (2 points)", ...R_CAUSES_2PT_FACTEURS_EXPLICATIFS_T2 }],
      documents: pickDocs('fc-causes-5', 1, 2),
      corrige: "La fin des politiques protectionnistes britanniques affaiblit le refus d'accorder la responsabilité ministérielle ET l'alliance des partis réformistes permet de faire élire une majorité de députés en faveur de la responsabilité ministérielle au Canada." },

    // ============================================================
    // ===== P5 · Questions reconstruites à partir du cahier « Période 5 » (2019) =====
    // Échantillon de démonstration : opérations intellectuelles du cahier 2019 (mal libellées,
    // sans réglette) reformulées en verbe d'action, associées aux réglettes HQC, dotées d'un
    // espace de réponse, avec images extraites du dossier documentaire.
    // ============================================================

    // OI 3 — Dégager une similitude. Cahier P5 2019, Leçon 1 (Acte d'Union), doc « représentation ».
    // Reclassée OI 3 (« dégage une similitude » = différences/similitudes, et non « Établir des faits »).
    { id: "q-fc-differences-8", operation: "Dégager des différences et des similitudes", numero: 8, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, dégage une similitude dans la représentation politique du Haut-Canada et du Bas-Canada.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-d8", label: "Réglette (2 points)", ...R_SIMILITUDES_2PT_GEN }],
      documents: pickDocs('fc-differences-8', 1),
      corrige: "Le Haut-Canada et le Bas-Canada comptent le même nombre de députés (42 chacun)." },

    // OI 4 — Déterminer une conséquence. Cahier P5 2019, Leçon 1.
    // Libellé d'origine : « Indique un effet de l'Acte d'Union sur l'organisation territoriale… » → verbe d'action « Détermine une conséquence ».
    { id: "q-fc-causes-6", operation: "Déterminer des causes et des conséquences", numero: 6, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "Détermine une conséquence territoriale de l'Acte d'Union de 1840.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-c6", label: "Réglette (2 points)", ...R_CAUSES_2PT_CONS_SEULE }],
      documents: pickDocs('fc-causes-6', 1),
      corrige: "Le Bas-Canada et le Haut-Canada sont unis en une seule colonie : la Province du Canada (le Canada-Uni)." },

    // OI 1 — Établir des faits (comble l'absence de cette OI en P5). Cahier P5 2019, Leçon 1, doc « langue » (art. 41).
    // Libellé d'origine : « Établis les faits présentés dans le dossier documentaire. » → recentré sur un fait précis.
    { id: "q-fc-faits-1", operation: "Établir des faits", numero: 1, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, indique la langue officielle de la Province du Canada suite à l'Acte d'Union.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-f1", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('fc-faits-1', 1),
      corrige: "L'anglais devient la seule langue officielle des lois et des institutions législatives de la colonie." },

    // OI 3 — Dégager une différence. Cahier P5 2019, Leçon 1, doc « population ».
    { id: "q-fc-differences-9", operation: "Dégager des différences et des similitudes", numero: 9, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, dégage une différence dans les populations du Haut-Canada et du Bas-Canada en 1840.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-d9", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_GEN }],
      documents: pickDocs('fc-differences-9', 1),
      corrige: "Le Bas-Canada est plus peuplé (650 000 habitants) que le Haut-Canada (450 000 habitants)." },

    // OI 4 — Déterminer deux conséquences. Cahier P5 2019, Leçon 1.
    // Reclassée OI 4 (« détermine deux conséquences » = causes/conséquences, et non « Mettre en relation »).
    // Libellé d'origine : « L'Acte d'Union est désavantageux pour les francophones. Démontre cette affirmation avec deux faits. »
    { id: "q-fc-causes-7", operation: "Déterminer des causes et des conséquences", numero: 7, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide des documents 1 à 3, détermine deux conséquences de l'Acte d'Union de 1840 pour les francophones.",
        responseSpace: { type: "labeled-list", items: ["Conséquence 1", "Conséquence 2"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-fc-c7", label: "Réglette (2 points)", ...R_CAUSES_2PT_2CONS }],
      documents: pickDocs('fc-causes-7', 1, 2, 3),
      corrige: ["L'anglais devient la seule langue officielle de la colonie (document 1).", "Les francophones du Bas-Canada sont sous-représentés : la région compte le même nombre de députés (42) que le Haut-Canada même si elle est plus peuplée (documents 2 et 3)."] },

    // ============================================================
    // ===== P5 · Leçon 2 — Le gouvernement responsable (cahier Période 5, 2019) =====
    // ============================================================

    // OI 5 — Déterminer un changement. Cahier P5 2019, Leçon 2. Doc d'origine : schémas 26-27 (gouvernement non responsable / responsable).
    { id: "q-fc-continuite-5", operation: "Déterminer des changements et des continuités", numero: 5, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide des documents 1 et 2, détermine un changement politique survenu dans la Province du Canada en 1848.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-cont5", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_GEN }],
      documents: pickDocs('fc-continuite-5', 1, 2),
      corrige: "La responsabilité ministérielle est mise en place : le Conseil exécutif doit désormais être issu de la majorité de la Chambre d'assemblée (gouvernement responsable)." },

    // OI 5 — Déterminer une continuité. Cahier P5 2019, Leçon 2.
    // Note : le cahier demandait deux continuités; reformulée en une continuité pour réutiliser la réglette « une continuité » existante.
    { id: "q-fc-continuite-6", operation: "Déterminer des changements et des continuités", numero: 6, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide des documents 1 et 2, détermine une continuité politique entre 1840 et 1848 dans la Province du Canada.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-cont6", label: "Réglette (2 points)", ...R_CONTINUITES_2PT_GEN }],
      documents: pickDocs('fc-continuite-6', 1, 2),
      corrige: "Le gouverneur demeure nommé par Londres (la Chambre d'assemblée demeure élue et le Conseil législatif demeure nommé)." },

    // OI 4 — Déterminer une cause (moyen). Cahier P5 2019, Leçon 2. Doc 28 (discours de Lafontaine).
    { id: "q-fc-causes-8", operation: "Déterminer des causes et des conséquences", numero: 8, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, détermine le moyen pris par les réformistes pour obtenir la responsabilité ministérielle.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-c8", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('fc-causes-8', 1),
      corrige: "Les réformistes du Haut-Canada et du Bas-Canada concluent une alliance politique." },

    // OI 4 — Déterminer une cause. Cahier P5 2019, Leçon 2. Doc 32 (loi d'indemnisation).
    { id: "q-fc-causes-9", operation: "Déterminer des causes et des conséquences", numero: 9, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, détermine une cause de l'incendie du Parlement de Montréal en 1849.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-c9", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('fc-causes-9', 1),
      corrige: "Les conservateurs (Tories) s'opposent à la loi qui vise à indemniser les victimes des Rébellions de 1837-1838 du Bas-Canada." },

    // OI 4 — Déterminer une cause. Cahier P5 2019, Leçon 2. Doc 29 (tensions au gouvernement).
    { id: "q-fc-causes-10", operation: "Déterminer des causes et des conséquences", numero: 10, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, détermine une cause de l'instabilité ministérielle dans la Province du Canada entre 1854 et 1864.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-c10", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('fc-causes-10', 1),
      corrige: "Les nombreux conflits au gouvernement (par exemple l'impossibilité d'obtenir une double majorité ou la difficulté de former des alliances) provoquent l'instabilité." },

    // OI 5 — Déterminer un changement. Cahier P5 2019, Leçon 2. Doc 30 (population 1841-1861).
    { id: "q-fc-continuite-7", operation: "Déterminer des changements et des continuités", numero: 7, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, détermine un changement dans la composition de la population du Haut-Canada et du Bas-Canada entre 1841 et 1861.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-cont7", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_GEN }],
      documents: pickDocs('fc-continuite-7', 1),
      corrige: "La population du Haut-Canada dépasse celle du Bas-Canada à partir de 1851 (alors que le Bas-Canada était plus peuplé en 1841)." },

    // ============================================================
    // ===== P5 · Leçon 3 — Économie coloniale (cahier Période 5, 2019) =====
    // Questions d'OI toutes de type OI 4 (causes/conséquences), conformes au contenu économique de la leçon.
    // ============================================================

    // OI 4 — Déterminer une cause. Doc 40 (gravure : Ligue Anti-Corn Law, 1846).
    { id: "q-fc-causes-11", operation: "Déterminer des causes et des conséquences", numero: 11, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, détermine une cause de la fin du protectionnisme britannique en 1846.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-c11", label: "Réglette (1 point)", ...R_CAUSES_1PT }],
      documents: pickDocs('fc-causes-11', 1),
      corrige: "Une pression est exercée dans la métropole pour faire abolir la Corn Law, d'autant que le blé et le bois coûtent moins cher ailleurs." },

    // OI 4 — Déterminer une conséquence. Doc 41 (graphique des exportations 1851-1857).
    { id: "q-fc-causes-12", operation: "Déterminer des causes et des conséquences", numero: 12, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, détermine une conséquence économique du traité de réciprocité de 1854.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-c12", label: "Réglette (2 points)", ...R_CAUSES_2PT_CONS_SEULE }],
      documents: pickDocs('fc-causes-12', 1),
      corrige: "Le traité de réciprocité de 1854 fait augmenter les exportations canadiennes vers les États-Unis." },

    // OI 4 — Déterminer une cause. Doc 39 (abrogation du traité de réciprocité, 1866).
    { id: "q-fc-causes-13", operation: "Déterminer des causes et des conséquences", numero: 13, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, détermine une cause de la fin du traité de réciprocité en 1866.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-c13", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('fc-causes-13', 1),
      corrige: "Les tensions créées par le soutien britannique au Sud durant la guerre de Sécession poussent les États-Unis à abroger le traité en 1866." },

    // ============================================================
    // ===== P5 · Leçon 4 — Affaires indiennes (cahier Période 5, 2019) =====
    // ============================================================

    // OI 4 — Déterminer une cause. Doc 51 (pétition montagnaise, 1847).
    { id: "q-fc-causes-14", operation: "Déterminer des causes et des conséquences", numero: 14, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, explique pourquoi les Autochtones rédigent des pétitions dans les années 1840.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-c14", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('fc-causes-14', 1),
      corrige: "Les ressources vitales à leur mode de vie (la chasse, le territoire) deviennent de plus en plus rares." },

    // OI 4 — Déterminer un objectif (cause). Doc 52 (rapport du Ministère de l'Intérieur, 1876).
    { id: "q-fc-causes-15", operation: "Déterminer des causes et des conséquences", numero: 15, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, détermine l'objectif des autorités gouvernementales avec la Loi sur les Indiens de 1876.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-c15", label: "Réglette (1 point)", ...R_CAUSES_1PT }],
      documents: pickDocs('fc-causes-15', 1),
      corrige: "L'objectif est l'assimilation des Autochtones (les amener à une « citoyenneté entière » en les sortant de leur mode de vie)." },

    // OI 5 — Déterminer deux changements. Docs 49 (église) + 50 (Thomas Moore avant/après).
    { id: "q-fc-continuite-8", operation: "Déterminer des changements et des continuités", numero: 8, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide des documents 1 et 2, détermine un changement dans la culture des Autochtones.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-cont8", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_GEN }],
      documents: pickDocs('fc-continuite-8', 1, 2),
      corrige: "Les Autochtones délaissent leur spiritualité au profit du christianisme (document 1), ou ils adoptent le mode de vie européen, ce qui mène à l'acculturation (document 2)." },

    // ============================================================
    // ===== P5 · Leçon 5 — Acte de l'Amérique du Nord britannique (cahier Période 5, 2019) =====
    // Q6 d'origine = grand tableau de causes (éco + pol) de la fédération → scindée en deux questions OI 4.
    // ============================================================

    // OI 4 — Deux causes économiques de la fédération. Docs 69 (carte ferroviaire) + 68 (fin réciprocité).
    { id: "q-fc-causes-16", operation: "Déterminer des causes et des conséquences", numero: 16, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide des documents 1 et 2, détermine deux causes de la formation de la fédération canadienne.",
        responseSpace: { type: "labeled-list", items: ["Cause 1", "Cause 2"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-fc-c16", label: "Réglette (2 points)", ...R_CAUSES_2PT_2CAUSES }],
      documents: pickDocs('fc-causes-16', 1, 2),
      corrige: ["La construction d'un chemin de fer reliant les colonies créerait un marché intérieur (document 1).", "La fin du traité de réciprocité oblige à trouver de nouveaux marchés; une fédération y aiderait (document 2)."] },

    // OI 4 — Deux causes politiques de la fédération. Docs 70 (Grande Coalition) + 67 (menace américaine).
    // Cause politique acceptée également : la mise en place de la représentation proportionnelle (« Rep by pop »).
    { id: "q-fc-causes-17", operation: "Déterminer des causes et des conséquences", numero: 17, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide des documents 1 et 2, détermine deux causes de la formation de la fédération canadienne.",
        responseSpace: { type: "labeled-list", items: ["Cause 1", "Cause 2"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-fc-c17", label: "Réglette (2 points)", ...R_CAUSES_2PT_2CAUSES }],
      documents: pickDocs('fc-causes-17', 1, 2),
      corrige: ["Une fédération mettrait fin à l'instabilité politique en donnant à chaque colonie le pouvoir de se gouverner localement (document 1).", "L'union est nécessaire face à la menace d'une invasion américaine, alors que la métropole veut se dégager de la défense de ses colonies (document 2)."] },

    // ============================================================
    // ===== P5 · Leçon 6 — Relations fédérales-provinciales (cahier Période 5, 2019) =====
    // ============================================================

    // OI 4 — Deux causes (motivations). Cahier badge « OI 5 », reclassée OI 4 (« raisons qui ont motivé » = causes). Doc 90.
    { id: "q-fc-causes-18", operation: "Déterminer des causes et des conséquences", numero: 18, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, détermine une raison qui a motivé Honoré Mercier à organiser une conférence interprovinciale en 1887.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-c18", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('fc-causes-18', 1),
      corrige: "Discuter de l'autonomie provinciale (ou discuter des subventions fédérales)." },

    // OI 4 — Une cause et une conséquence. Doc 87 (soulèvement de la rivière Rouge).
    { id: "q-fc-causes-19", operation: "Déterminer des causes et des conséquences", numero: 19, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, détermine une cause et une conséquence du soulèvement des Métis de 1869-1870.",
        responseSpace: { type: "labeled-list", items: ["Cause", "Conséquence"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-fc-c19", label: "Réglette (2 points)", ...R_CAUSES_2PT_CAUSE_CONS }],
      documents: pickDocs('fc-causes-19', 1),
      corrige: ["Les Métis craignent de perdre leurs terres (document 1).", "La colonie de la rivière Rouge devient la cinquième province du Canada, le Manitoba (document 1)."] },

    // OI 4 — Une cause. Doc 91 (partage des revenus en 1867).
    { id: "q-fc-causes-20", operation: "Déterminer des causes et des conséquences", numero: 20, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, détermine pourquoi les revenus les plus importants sont accordés au gouvernement fédéral plutôt qu'aux gouvernements provinciaux.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-c20", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('fc-causes-20', 1),
      corrige: "Parce que le gouvernement fédéral assume les responsabilités les plus coûteuses (chemins de fer, canaux, défense, etc.)." },

    // OI 4 — Une conséquence (résultat). Doc 89 (Le Gibet : pendaison de Riel).
    { id: "q-fc-causes-21", operation: "Déterminer des causes et des conséquences", numero: 21, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, détermine le résultat du deuxième soulèvement (1885) pour Louis Riel.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-c21", label: "Réglette (1 point)", ...R_CAUSES_1PT_CONS }],
      documents: pickDocs('fc-causes-21', 1),
      corrige: "Le deuxième soulèvement est un échec : le chef Louis Riel est pendu." },

    // OI 4 — Une cause. Doc 88 (limites à l'enseignement religieux).
    { id: "q-fc-causes-22", operation: "Déterminer des causes et des conséquences", numero: 22, annee: 4, niveau: 1,
      realite_sociale_id: "formation-regime-federal",
      questionBody: {
        prompt: "À l'aide du document 1, quelle raison est évoquée pour justifier les limites imposées à l'enseignement religieux par certaines provinces (comme le Manitoba et le Nouveau-Brunswick)?",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-fc-c22", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('fc-causes-22', 1),
      corrige: "Pour moderniser le système scolaire et le rendre laïque (cesser de financer l'enseignement religieux avec des fonds publics)." },

    // ============================================================
    // ===== P6 — 4e secondaire — Les nationalismes et l'autonomie du Canada (1896-1945) =====
    // Source : Évaluations sommatives officielles versions A et B, Section A.
    // 16 questions au total (8 V-A + 8 V-B). Sections B (description schéma) et C (texte 150 mots) écartées.
    // ============================================================

    // ===== Q1 — P6 V-A · Différences/similitudes — 3 acteurs sur la guerre des Boers =====
    { id: "q-na-differences-1", operation: "Dégager des différences et des similitudes", numero: 1, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Les documents 1, 2 et 3 présentent la position de trois acteurs concernant une guerre impliquant le Canada au tournant du 20e siècle. Nomme l'acteur qui présente une position différente et compare cette position à celle des deux autres acteurs.",
        responseSpace: { type: "lines", count: 5 }
      },
      reglettes: [{ id: "r-na-d1", label: "Réglette (3 points)", ...R_DIFFSIM_3PT_ACTEUR_DIFFERENT_POSITION }],
      documents: pickDocs('na-differences-1', 1, 2, 3),
      corrige: "L'acteur qui présente une position différente est Wilfrid Laurier (Document 2). Il est d'accord avec la participation du Canada à la guerre des Boers OU pour l'envoi de soldats canadiens en Afrique du Sud, tandis que les deux autres acteurs (Henri Bourassa et Charles Tupper) s'y opposent." },

    // ===== Q2 — P6 V-A · Causes/conséquences — Amélioration des conditions de vie en ville =====
    { id: "q-na-causes-1", operation: "Déterminer des causes et des conséquences", numero: 1, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Indique une raison qui explique l'amélioration des conditions de vie en ville dans la première moitié du 20e siècle.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-na-c1", label: "Réglette (2 points)", ...R_CAUSES_2PT_1CAUSE_SOMA }],
      documents: pickDocs('na-causes-1', 1),
      corrige: "Une raison qui explique l'amélioration des conditions de vie en ville est l'électrification des milieux urbains OU l'accessibilité commune aux produits de luxe OU la possibilité d'acheter à crédit OU l'augmentation du pouvoir d'achat pour toutes les classes sociales." },

    // ===== Q3 — P6 V-A · Continuité — Accueil des immigrants lors des deux guerres mondiales =====
    { id: "q-na-continuite-1", operation: "Déterminer des changements et des continuités", numero: 1, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "À partir du document 1, indique un élément de continuité en lien avec l'accueil des immigrants par le gouvernement canadien lors de la Première et de la Deuxième Guerre mondiale.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-na-co1", label: "Réglette (2 points)", ...R_CONTINUITES_2PT_GEN_SOMA }],
      documents: pickDocs('na-continuite-1', 1),
      corrige: "Il y a continuité, car le Canada diminue l'accès au pays aux immigrants pendant les deux guerres mondiales OU car le Canada interdit l'accès au pays à certains immigrants OU car le Canada applique des politiques d'immigration discriminatoires pendant les deux guerres mondiales OU car le Canada accueille moins d'immigrants pendant les deux guerres mondiales." },

    // ===== Q4 — P6 V-A · Mettre en relation — 3 combats du mouvement féministe =====
    // Renumérotation : Doc 6 (Ligue) → Doc 1, Doc 8 (Gérin-Lajoie) → Doc 2, Doc 10 (Circé-Côté) → Doc 3.
    // Corrigé : Éducation = Doc 3 (Circé-Côté), Droits économiques = Doc 1 (Ligue), Droit de vote = Doc 2 (Gérin-Lajoie).
    { id: "q-na-relation-1", operation: "Mettre en relation des faits", numero: 1, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Associe le bon document à chacun des combats menés par le mouvement féministe dans la première moitié du 20e siècle au Canada.",
        responseSpace: { type: "category-buckets", categories: ["Éducation", "Droits économiques", "Droit de vote"], slots: [1, 1, 1] }
      },
      reglettes: [{ id: "r-na-r1", label: "Réglette (2 points)", ...R_RELATION_2PT_3_PART }],
      documents: pickDocs('na-relation-1', 1, 2, 3),
      corrige: [["Document 3"], ["Document 1"], ["Document 2"]] },

    // ===== Q5 — P6 V-A · Situer dans le temps — Radio sur ligne du temps 1900-1940 =====
    // Ligne du temps source : 4 segments contigus (A: 1900-1910, B: 1910-1920, C: 1920-1930, D: 1930-1940) avec flèche →.
    // Réponse corrigé : C (1920-1930) — fondation des stations CKAC et CFCF à Montréal en 1922.
    { id: "q-na-situer-1", operation: "Situer dans le temps et dans l'espace", numero: 1, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Sur la ligne du temps, identifie la lettre qui correspond à la période pendant laquelle se déroulent les faits présentés dans le document 1.",
        responseSpace: { type: "timeline-segments", periods: [
          { letter: "A", range: "1900-1910" },
          { letter: "B", range: "1910-1920" },
          { letter: "C", range: "1920-1930" },
          { letter: "D", range: "1930-1940" }
        ] }
      },
      reglettes: [{ id: "r-na-s1", label: "Réglette (1 point)", ...R_SITUER_1PT_FAITS }],
      documents: pickDocs('na-situer-1', 1),
      corrige: "C (1920-1930) — la radio prit son essor avec l'inauguration des stations montréalaises CKAC et CFCF en 1922." },

    // ===== Q6 — P6 V-A · Causes/conséquences — Conséquence de l'action syndicale =====
    { id: "q-na-causes-2", operation: "Déterminer des causes et des conséquences", numero: 2, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Indique une conséquence de l'action syndicale sur les conditions de travail des ouvriers dans la première moitié du 20e siècle.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-na-c2", label: "Réglette (2 points)", ...R_CAUSES_2PT_1CONS_GUIDE }],
      documents: pickDocs('na-causes-2', 1),
      corrige: "La conséquence de l'action syndicale sur les conditions de travail des ouvriers est la mise en place par l'État québécois de législations afin de protéger les ouvriers OU la mise en place de lois par le gouvernement québécois (ex. loi des accidents de travail de 1909)." },

    // ===== Q7 — P6 V-A · Liens de causalité — Krach boursier → entreprises → emploi =====
    // Renumérotation : Doc 2 → Doc 1, Doc 7 → Doc 2, Doc 5 → Doc 3.
    // Énoncé adapté : « (document 2) » → « (document 1) », « (document 7) » → « (document 2) », « (document 5) » → « (document 3) ».
    { id: "q-na-causalite-1", operation: "Établir des liens de causalité", numero: 1, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Explique comment le marché boursier plonge l'économie canadienne dans une crise dans les années 1930. Dans ta réponse, tu devras préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "L'événement déclencheur de la crise économique (document 1)",
          "La situation financière des entreprises à la suite de cet événement (document 2)",
          "La situation de l'emploi pendant la crise (document 3)"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-na-ca1", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('na-causalite-1', 1, 2, 3),
      corrige: "Le Krach boursier de 1929 déclenche la crise économique des années 1930 (document 1), ce qui place plusieurs entreprises en difficulté financière ou en faillite (document 2). Cette situation entraîne une pénurie d'emplois conduisant plusieurs travailleurs au chômage (document 3)." },

    // ===== Q8 — P6 V-A · Changements/continuités (3pt) — Deux phases d'industrialisation =====
    // Doc 12 source splitté en Doc 1 (1850-1896) + Doc 2 (1896-1929). Énoncé adapté.
    { id: "q-na-continuite-2", operation: "Déterminer des changements et des continuités", numero: 2, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "À partir des documents 1 et 2, indique s'il y a changement ou continuité d'une phase d'industrialisation à l'autre. Justifie ton choix par des faits et un repère de temps.",
        responseSpace: { type: "lines", count: 5 }
      },
      reglettes: [{ id: "r-na-co2", label: "Réglette (3 points)", ...RUBRIC_CHANGEMENTS_3PT_REPERE_TEMPS }],
      documents: pickDocs('na-continuite-2', 1, 2),
      corrige: "Il y a changement, car à partir de 1896, de nouveaux secteurs industriels apparaissent tels que les pâtes et papiers, l'aluminium et l'hydroélectricité OU les nouveaux secteurs industriels demandent une main-d'œuvre spécialisée.\n\nOU\n\nIl y a continuité, car l'industrie légère demeure un secteur important de 1850 à 1929." },

    // ===== Q9 — P6 V-B Q1 · Différences/similitudes — 3 acteurs sur la conscription PGM =====
    // Énoncé V-B vouvoie (« Nommez », « comparez ») — on conserve la forme tu/vous selon la version source.
    // Mais dans HQC, P5 a uniformisé au tutoiement (cf. q-fc-* qui tutoient même quand la V-B vouvoie).
    // On suit cette convention HQC : tutoiement systématique.
    { id: "q-na-differences-2", operation: "Dégager des différences et des similitudes", numero: 2, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Les documents 1, 2 et 3 présentent la position de trois acteurs concernant un projet de loi présenté par le gouvernement fédéral durant la Première Guerre mondiale. Nomme l'acteur qui présente une position différente et compare cette position à celle des deux autres acteurs.",
        responseSpace: { type: "lines", count: 5 }
      },
      reglettes: [{ id: "r-na-d2", label: "Réglette (3 points)", ...R_DIFFSIM_3PT_ACTEUR_DIFFERENT_POSITION }],
      documents: pickDocs('na-differences-2', 1, 2, 3),
      corrige: "L'acteur qui présente une position différente est Robert Borden (Document 2). Il est en faveur du service militaire obligatoire (conscription), tandis que les deux autres acteurs (Henri Bourassa et Lomer Gouin) s'y opposent." },

    // ===== Q10 — P6 V-B Q2 · Causes/conséquences — Composition de la population canadienne =====
    // Énoncé sans référence de doc explicite. Doc 5 V-B partie Lacoursière (peuplement Ouest, diversité ethnique)
    // correspond directement au corrigé. Renuméroté Doc 1.
    { id: "q-na-causes-3", operation: "Déterminer des causes et des conséquences", numero: 3, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Au début du 20e siècle, le gouvernement fédéral accélère le recrutement de nouveaux immigrants. Indique une conséquence de cette situation sur la composition de la population du Canada.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-na-c3", label: "Réglette (2 points)", ...R_CAUSES_2PT_1CONS_GUIDE }],
      documents: pickDocs('na-causes-3', 1),
      corrige: "La population des villes canadiennes est davantage cosmopolite OU la diversité ethnique du Canada s'accroît, particulièrement dans l'Ouest." },

    // ===== Q11 — P6 V-B Q3 · Liens de causalité — Énergie 2e phase → secteur → effet territoire =====
    // Renumérotation : Doc 11 (hydroélectricité texte) → Doc 1, Doc 7 (carte ressources) → Doc 2.
    { id: "q-na-causalite-2", operation: "Établir des liens de causalité", numero: 2, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Explique comment une source d'énergie utilisée lors de la 2e phase d'industrialisation a eu un effet sur le territoire québécois. Réponds à la question en précisant les éléments ci-dessous et en les liant entre eux.",
        bullets: [
          "La principale source d'énergie utilisée durant la 2e phase d'industrialisation",
          "Un secteur de production en expansion au Québec",
          "Un effet sur le territoire québécois"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-na-ca2", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('na-causalite-2', 1, 2),
      corrige: "Lors de la deuxième phase d'industrialisation, la source d'énergie utilisée est l'hydroélectricité (document 1). À cause du grand potentiel de production d'hydroélectricité dont le Québec dispose et de ses immenses forêts de bois de pulpe, le Québec devient un des principaux producteurs de pâte et papier (document 2). La production de ces ressources a pour conséquence le développement de plusieurs régions riches en ressources naturelles." },

    // ===== Q12 — P6 V-B Q4 · Changements/continuités (3pt) — Travailleurs entre les deux phases d'industrialisation =====
    // CORRECTION SILENCIEUSE : énoncé V-B source « À l'aide du document 6 » → erreur du PDF, le corrigé attendu
    // (heures de travail, ouvriers spécialisés) correspond au Doc 12 V-B (phases d'industrialisation). Énoncé adapté.
    { id: "q-na-continuite-3", operation: "Déterminer des changements et des continuités", numero: 3, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "À l'aide des documents 1 et 2, indique s'il y a changement ou continuité dans la situation des travailleurs et des travailleuses entre la première et la deuxième phase d'industrialisation. Justifie ton choix par des faits et un repère de temps.",
        responseSpace: { type: "lines", count: 5 }
      },
      reglettes: [{ id: "r-na-co3", label: "Réglette (3 points)", ...RUBRIC_CHANGEMENTS_3PT_REPERE_TEMPS }],
      documents: pickDocs('na-continuite-3', 1, 2),
      corrige: "Il y a changement, car à partir de 1909, le nombre d'heures de travail baisse chez les ouvriers spécialisés (semaine de 54 heures).\n\nOU\n\nIl y a continuité, car les femmes et les enfants font toujours face à de mauvaises conditions de travail (60 heures par semaine).\n\nOU\n\nIl y a continuité, car les propriétaires d'entreprises ne respectent pas toujours les lois en matière de conditions de travail (loi de 1912 sur l'industrie textile)." },

    // ===== Q13 — P6 V-B Q5 · Mettre en relation — Clergé dans l'économie / dans la société =====
    // Renumérotation : Doc 6 (Caisses) → Doc 1, Doc 14 (Villeneuve) → Doc 2. Catégories simplifiées au tableau (Économie/Société).
    { id: "q-na-relation-2", operation: "Mettre en relation des faits", numero: 2, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Indique au bon endroit le numéro du document qui fait référence à la présence du clergé dans l'économie et le numéro du document qui fait référence à la place du clergé dans la société au Québec dans la première moitié du 20e siècle.",
        responseSpace: { type: "category-buckets", categories: ["Économie", "Société"], slots: [1, 1] }
      },
      reglettes: [{ id: "r-na-r2", label: "Réglette (2 points)", ...R_RELATION_2PT_2_PART }],
      documents: pickDocs('na-relation-2', 1, 2),
      corrige: [["Document 1"], ["Document 2"]] },

    // ===== Q14 — P6 V-B Q6 · Causes/conséquences — Cause de la fondation de la Fédération nationale St-Jean-Baptiste =====
    // Aucun doc explicitement référencé. Doc 9 V-B (Lavigne & Pinard sur Montréalaises) correspond au corrigé.
    // Renumérotation : Doc 9 → Doc 1.
    { id: "q-na-causes-4", operation: "Déterminer des causes et des conséquences", numero: 4, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Qu'est-ce qui explique la fondation de la Fédération nationale Saint-Jean-Baptiste au début du 20e siècle ?",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-na-c4", label: "Réglette (2 points)", ...R_CAUSES_2PT_1CAUSE_SOMA }],
      documents: pickDocs('na-causes-4', 1),
      corrige: "Obtenir des droits pour les femmes OU militer en faveur des droits des femmes face à leur incapacité juridique et politique." },

    // ===== Q15 — P6 V-B Q7 · Situer dans le temps — Krach boursier (4 documents avant/après 1929) =====
    // Renumérotation : Docs 1, 2, 3, 4 source → Docs 1, 2, 3, 4 (ordre conservé).
    // Corrigé : Avant 1929 = Docs 2 (investissements agricoles élevés, situation pré-crise) et 4 (vente d'actions, moment du krach).
    //          Après 1929 = Docs 1 (travaux publics et plans de colonisation, réponse à la crise) et 3 (Keynes, théorie post-crise).
    { id: "q-na-situer-2", operation: "Situer dans le temps et dans l'espace", numero: 2, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Les documents 1 à 4 font référence au Krach boursier. Indique si les faits présentés dans ces documents se déroulent avant ou après 1929.",
        responseSpace: { type: "before-after-axis", beforeLabel: "Avant", afterLabel: "Après", pivot: "1929", slots: { before: 2, after: 2 } }
      },
      reglettes: [{ id: "r-na-s2", label: "Réglette (2 points)", ...R_SITUER_2PT_T4 }],
      documents: pickDocs('na-situer-2', 1, 2, 3, 4),
      corrige: { before: ["Document 2", "Document 4"], after: ["Document 1", "Document 3"] } },

    // ===== Q16 — P6 V-B Q8 · Continuité/changement (2pt) — Droits des Canadiens durant la 2e GM =====
    // Renumérotation : Doc 8 (publications communistes / censure) → Doc 1. Énoncé adapté.
    { id: "q-na-continuite-4", operation: "Déterminer des changements et des continuités", numero: 4, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "À l'aide du document 1, indique un changement instauré par l'État en ce qui concerne les droits des Canadiens durant la Seconde Guerre mondiale.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-na-co4", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_GEN }],
      documents: pickDocs('na-continuite-4', 1),
      corrige: "Le gouvernement impose la censure (interdiction des publications communistes / contrôle des publications)." },

    // ============================================================
    // === v1.24.0 — Guides pédagogiques RÉCIT 1896-1945 (14 questions) ===
    // ============================================================

    // ===== Catho Q1 — Établir des faits — Groupe social et fréquentation scolaire =====
    { id: "q-na-faits-1", operation: "Établir des faits", numero: 1, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Que t'apprend le document 1 sur le lien entre le groupe social et la fréquentation scolaire au début du 20e siècle ?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-na-f1", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('na-faits-1', 1),
      corrige: "Plus le groupe social est aisé, plus la fréquentation scolaire des enfants âgés de 12 à 15 ans est élevée." },

    // ===== Catho Q2 — Situer dans le temps — Luttes des femmes en ordre chronologique =====
    // Ordre chrono attendu : Doc 4 (École Marg.-Bourgeoys 1908) → Doc 2 (droit vote féd. 1918)
    // → Doc 3 (Code civil 1931) → Doc 1 (suffrage Québec 1940).
    { id: "q-na-situer-3", operation: "Situer dans le temps et dans l'espace", numero: 3, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Les documents 1 à 4 présentent des évènements en lien avec les luttes des femmes au début du 20e siècle. Place-les en ordre chronologique du plus ancien au plus récent.",
        responseSpace: { type: "chrono-ordering", items: ["1er", "2e", "3e", "4e"] }
      },
      reglettes: [{ id: "r-na-s3", label: "Réglette (2 points)", ...R_SITUER_2PT_T4 }],
      documents: pickDocs('na-situer-3', 1, 2, 3, 4),
      corrige: ["Document 4", "Document 2", "Document 3", "Document 1"] },

    // ===== Catho Q3 — Continuité du rôle de l'Église entre 1896 et 1950 =====
    { id: "q-na-continuite-5", operation: "Déterminer des changements et des continuités", numero: 5, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "À partir des documents 1 et 2, indique un élément de continuité dans le rôle de l'Église entre 1896 et 1950.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-na-co5", label: "Réglette (2 points)", ...R_CONTINUITES_2PT_GEN }],
      documents: pickDocs('na-continuite-5', 1, 2),
      corrige: "Entre 1896 et 1950, les communautés religieuses prennent en charge les orphelinats (ou certains services sociaux, ou les institutions de charité, ou l'éducation des enfants — toute autre réponse équivalente est acceptée)." },

    // ===== Catho Q4 — Mettre en relation des faits — Nationalisme cf vs clérico-nationalisme =====
    // Catégories : Doc 2 + Doc 4 = nationalisme canadien-français, Doc 1 + Doc 3 = clérico-nationalisme.
    { id: "q-na-relation-3", operation: "Mettre en relation des faits", numero: 3, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Inscris les numéros des documents qui présentent des faits relatifs au nationalisme canadien-français et au clérico-nationalisme.",
        responseSpace: { type: "category-buckets", categories: ["Le nationalisme canadien-français", "Le clérico-nationalisme"], slots: [2, 2] }
      },
      reglettes: [{ id: "r-na-r3", label: "Réglette (2 points)", ...R_RELATION_2PT_4_PART }],
      documents: pickDocs('na-relation-3', 1, 2, 3, 4),
      corrige: [["Document 2", "Document 4"], ["Document 1", "Document 3"]] },

    // ===== Polit. intér. Q1 — Causes/conséquences — Objectif du décret 1931 =====
    { id: "q-na-causes-5", operation: "Déterminer des causes et des conséquences", numero: 5, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Le document 1 présente l'extrait d'un décret adopté le 21 mars 1931 par le Ministère de l'Immigration et de la Colonisation du Canada. Quel était l'objectif de cette loi ? Ajoute des précisions en lien avec la provenance et avec le statut économique des immigrants.",
        responseSpace: { type: "lines", count: 5 }
      },
      reglettes: [{ id: "r-na-c5", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('na-causes-5', 1),
      corrige: "L'objectif de cette loi est d'établir des règles strictes pour contrôler l'immigration transatlantique (ou : le décret de 1931 vise à définir qui peut immigrer au Canada ou non). Les immigrants d'origine asiatique ne peuvent entrer au Canada pour s'y établir, ce qui est discriminatoire. Les immigrants britanniques et américains aisés sont les seuls à être acceptés au Canada." },

    // ===== Polit. intér. Q2 — Causes/conséquences — 3 conséquences pop urbaine =====
    { id: "q-na-causes-6", operation: "Déterminer des causes et des conséquences", numero: 6, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Les documents 1, 2 et 3 présentent des conséquences de l'augmentation de la population urbaine. Pour chacun des documents, nomme la conséquence et indique si elle améliore ou non les conditions de vie de la classe ouvrière.",
        responseSpace: { type: "labeled-list", items: ["Document 1", "Document 2", "Document 3"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-na-c6", label: "Réglette (2 points)", ...R_CAUSES_2PT_T3_CONS_MULTI }],
      documents: pickDocs('na-causes-6', 1, 2, 3),
      corrige: "Document 1 : Problèmes d'insalubrité (ou problèmes d'hygiène) — conséquence qui empire les conditions de vie. Document 2 : Construction d'infrastructures (ou amélioration de l'offre de services) — conséquence qui améliore les conditions de vie. Document 3 : Accès restreint à un logement convenable — conséquence qui empire les conditions de vie." },

    // ===== Polit. intér. Q3 — Différences/similitudes — Désaccord censure cinéma =====
    { id: "q-na-differences-3", operation: "Dégager des différences et des similitudes", numero: 3, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "À partir des documents 1 et 2, sur quel point précis M. Joseph Morris et le Bureau de la censure sont-ils en désaccord ?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-na-d3", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_DIVERGENCE }],
      documents: pickDocs('na-differences-3', 1, 2),
      corrige: "Les acteurs sont en désaccord sur la censure au cinéma (ou sur la nécessité de censurer les films, ou sur l'importance de la censure au cinéma)." },

    // ===== Polit. can. Q3 — Causes/conséquences — 6 conséquences entrée en guerre PGM =====
    { id: "q-na-causes-7", operation: "Déterminer des causes et des conséquences", numero: 7, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Quelles sont les conséquences de l'entrée en guerre du Canada lors de la Première Guerre mondiale ? Détermine une conséquence pour chacun des documents ci-dessous.",
        responseSpace: { type: "labeled-list", items: ["Document 1", "Document 2", "Document 3", "Document 4", "Document 5", "Document 6"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-na-c7", label: "Réglette (3 points)", ...R_CAUSES_3PT_T6_CONS_GUIDE }],
      documents: pickDocs('na-causes-7', 1, 2, 3, 4, 5, 6),
      corrige: "Document 1 : Les femmes entrent sur le marché du travail pendant la guerre afin de remplacer les hommes partis au front (industrie de guerre, armes, munitions). Document 2 : Le gouvernement canadien met sur pied la Commission impériale des munitions qui emploie un grand nombre de travailleurs et produit avions, navires et hydravions. Document 3 : Après la fin du conflit, le pays est aux prises avec un problème d'inflation qui fait monter le coût de la vie, en partie à cause de l'augmentation spectaculaire de la dette nationale. Document 4 : En vertu de la Loi sur les mesures de guerre, le Canada met sur pied des camps d'internement dans lesquels il détient des ressortissants de pays ennemis. Document 5 : Le conflit a provoqué 61 000 morts et 172 000 blessés, plongeant de nombreuses familles dans le deuil. Document 6 : Au retour du front, les soldats canadiens ramènent avec eux la grippe espagnole, qui fera 50 000 morts au Canada." },

    // ===== Vie éco Q1 — Causalité — Besoins industriels / fusion / monopole =====
    { id: "q-na-causalite-3", operation: "Établir des liens de causalité", numero: 3, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "En utilisant les documents 1, 2 et 3, explique comment les besoins des nouveaux secteurs industriels ont un impact sur l'économie québécoise. Dans ta réponse, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "Les besoins des nouveaux secteurs industriels",
          "La stratégie de certaines entreprises",
          "Un impact sur le modèle économique québécois"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-na-ca3", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('na-causalite-3', 1, 2, 3),
      corrige: "Les nouveaux secteurs industriels (pâtes et papiers, aluminium, hydroélectricité) demandent plus de capitaux en raison des coûts des technologies, de la main-d'œuvre spécialisée et de la grandeur des usines (document 3). Étant donné ces coûts élevés et pour limiter la concurrence, les grandes compagnies fusionnent — par exemple plusieurs filatures forment la Dominion Textile en 1905 (document 1). Cela entraine la naissance d'un capitalisme de monopole où les plus importantes compagnies obtiennent un quasi-monopole dans leur domaine, et la fermeture de petites entreprises canadiennes-françaises incapables de concurrencer (document 2)." },

    // ===== Vie éco Q2 — Causalité — Syndicats américains / Église / CTCC =====
    { id: "q-na-causalite-4", operation: "Établir des liens de causalité", numero: 4, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "En utilisant les documents 1, 2 et 3, explique comment la réaction de l'Église catholique face aux syndicats américains entraine la naissance d'une nouvelle organisation syndicale. Dans ta réponse, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "La présence des syndicats américains au Québec",
          "La position de l'Église catholique face aux syndicats américains",
          "La naissance d'une nouvelle organisation syndicale"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-na-ca4", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('na-causalite-4', 1, 2, 3),
      corrige: "Le nombre de syndicats américains regroupant des travailleurs canadiens est très élevé au début du 20e siècle : en 1912, 194 syndicats américains sur un total de 246 au Québec (document 1). Parce qu'elle craint que ces syndicats ne demeurent pas neutres sur le plan religieux et qu'ils aient une mauvaise influence, l'Église encourage le regroupement des travailleurs catholiques entre eux (document 3). Par conséquent, en 1921, 80 syndicats catholiques s'unissent à Hull pour former la Confédération des travailleurs catholiques du Canada (CTCC) (document 2)." },

    // ===== Vie éco Q3 — Causalité — Marché du fromage / coopérative / hausse prix =====
    { id: "q-na-causalite-5", operation: "Établir des liens de causalité", numero: 5, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "En utilisant les documents 1, 2 et 3, explique comment la création d'un nouveau type d'entreprise a un impact sur le marché du fromage. Dans ta réponse, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "La situation du marché du fromage au tournant du 20e siècle",
          "La création d'un nouveau type d'entreprise",
          "L'impact sur le marché du fromage"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-na-ca5", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('na-causalite-5', 1, 2, 3),
      corrige: "Le marché du fromage québécois est défectueux au tournant du 20e siècle : les fromages québécois sont toujours vendus moins cher que ceux de l'Ontario, même s'ils sont de qualité similaire (document 1). Pour remédier à cette situation, on met en place une société coopérative agricole en 1910 qui aide à l'inspection, à la classification des produits et à leur vente, ainsi qu'à l'approvisionnement des producteurs (document 3). Par conséquent, les prix de vente des fromages augmentent et les cultivateurs voient leurs intérêts protégés (document 2)." },

    // ===== Grande dép. Q1 — Mettre en relation — Loi assur.-chômage inspirée du keynésianisme =====
    { id: "q-na-relation-4", operation: "Mettre en relation des faits", numero: 4, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Explique en quoi la mesure mise en place par le gouvernement canadien présentée dans le document 1 est inspirée du keynésianisme.",
        responseSpace: { type: "lines", count: 5 }
      },
      reglettes: [{ id: "r-na-r4", label: "Réglette (2 points)", ...R_RELATION_2PT_1FAIT_GUIDE }],
      documents: pickDocs('na-relation-4', 1),
      corrige: "La Loi sur l'assurance-chômage est inspirée du keynésianisme parce qu'elle représente une façon d'intervenir dans l'économie (sur l'emploi et le pouvoir d'achat des travailleurs). Cette intervention sert à garantir la relance de l'économie en temps de crise plutôt que d'espérer que les crises se résolvent d'elles-mêmes." },

    // ===== 2GM Q1 — Causes/conséquences — 3 conséquences socioéconomiques après-guerre =====
    { id: "q-na-causes-8", operation: "Déterminer des causes et des conséquences", numero: 8, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Lis les documents 1 à 3 et dégage trois conséquences socioéconomiques de la Seconde Guerre mondiale.",
        responseSpace: { type: "labeled-list", items: ["Document 1", "Document 2", "Document 3"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-na-c8", label: "Réglette (2 points)", ...R_CAUSES_2PT_T3_CONS_MULTI }],
      documents: pickDocs('na-causes-8', 1, 2, 3),
      corrige: "Document 1 : Les femmes demeurent sur le marché du travail après la guerre, malgré une baisse temporaire de la main-d'œuvre féminine immédiatement après le conflit. Document 2 : Le retour au pays des soldats canadiens et le ralentissement de l'industrie de guerre provoquent une hausse du chômage tout de suite après la guerre, ce qui préoccupe le gouvernement. Document 3 : Peu de logements ont été construits pendant la guerre, ce qui entraine une crise du logement en raison de l'exode rural et du retour des soldats." },

    // ===== 2GM Q2 — Situer dans le temps — 4 docs ordre chrono Seconde Guerre mondiale =====
    // Ordre chrono attendu : Doc 3 (déclaration guerre sept. 1939) → Doc 1 (Loi mesures de
    // guerre) → Doc 2 (plébiscite 1942) → Doc 4 (conférence Québec 1944).
    { id: "q-na-situer-4", operation: "Situer dans le temps et dans l'espace", numero: 4, annee: 4, niveau: 2,
      realite_sociale_id: "nationalismes-autonomie-canada",
      questionBody: {
        prompt: "Les documents 1 à 4 font référence à des évènements liés à la Seconde Guerre mondiale. Place-les en ordre chronologique du plus ancien au plus récent.",
        responseSpace: { type: "chrono-ordering", items: ["1er", "2e", "3e", "4e"] }
      },
      reglettes: [{ id: "r-na-s4", label: "Réglette (2 points)", ...R_SITUER_2PT_T4 }],
      documents: pickDocs('na-situer-4', 1, 2, 3, 4),
      corrige: ["Document 3", "Document 1", "Document 2", "Document 4"] },

    // ======================================================================
    // ============ P7 (1945-1980) — Sommatives Section A (v1.25.0) ==========
    // ======================================================================

    // ===== V-A Q1 — Situer dans le temps — Mandats de Jean Lesage (ligne du temps) =====
    { id: "q-mq-situer-1", operation: "Situer dans le temps et dans l'espace", numero: 1, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Sur la ligne du temps, encercle la lettre qui correspond aux mandats du premier ministre du Québec présenté dans le document 1.",
        responseSpace: { type: "timeline-segments", periods: [
          { letter: "A", range: "1954–1960" },
          { letter: "B", range: "1960–1966" },
          { letter: "C", range: "1966–1972" },
          { letter: "D", range: "1972–1978" }
        ]}
      },
      reglettes: [{ id: "r-mq-s1", label: "Réglette (1 point)", ...R_SITUER_1PT_FAITS }],
      documents: pickDocs('mq-situer-1', 1),
      corrige: "B (Jean Lesage est premier ministre du Québec de 1960 à 1966, soit la période 1960-1966)." },

    // ===== V-A Q2 — Causes/conséquences — Cause de la société de consommation =====
    { id: "q-mq-causes-1", operation: "Déterminer des causes et des conséquences", numero: 1, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "À l'aide du document 1, nomme une cause de l'avènement de la société de consommation au Québec.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-mq-c1", label: "Réglette (2 points)", ...R_CAUSES_2PT_1CAUSE_SOMA }],
      documents: pickDocs('mq-causes-1', 1),
      corrige: "Une cause de l'avènement de la société de consommation au Québec est l'augmentation du pouvoir d'achat (ou la hausse des salaires) à la suite de la Seconde Guerre mondiale." },

    // ===== V-A Q3 — Causes/conséquences — Conséquence des revendications autochtones (Baie-James) =====
    { id: "q-mq-causes-2", operation: "Déterminer des causes et des conséquences", numero: 2, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "À l'aide du document 1, indique une conséquence des revendications autochtones à la suite de la mise en chantier du projet de la Baie-James.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-mq-c2", label: "Réglette (2 points)", ...R_CAUSES_2PT_1CONS_SOMA }],
      documents: pickDocs('mq-causes-2', 1),
      corrige: "Une conséquence est la signature de la Convention de la Baie-James et du Nord québécois en 1975 (ou la signature d'une entente entre les Cris, les Inuits et le gouvernement du Québec)." },

    // ===== V-A Q4 — Différences/similitudes — Désaccord sur la grève de l'amiante =====
    { id: "q-mq-differences-1", operation: "Dégager des différences et des similitudes", numero: 1, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Les documents 1 et 2 exposent le point de vue de deux acteurs sur la grève de l'amiante. Sur quel sujet précis sont-ils en désaccord ?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-mq-d1", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_DIVERGENCE_ETABLIT }],
      documents: pickDocs('mq-differences-1', 1, 2),
      corrige: "Lionel Groulx et Maurice Duplessis sont en désaccord sur les causes de la grève (ou sur les intentions des grévistes : Groulx parle de la défense de la vie et de la santé des ouvriers contre une industrie meurtrière, tandis que Duplessis affirme que certains chefs ouvriers cherchent à causer du trouble)." },

    // ===== V-A Q5 — Mettre en relation — Gains des femmes 1960-1980 =====
    { id: "q-mq-relation-1", operation: "Mettre en relation des faits", numero: 1, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Inscris le numéro du document qui correspond à chacun des gains faits par les femmes entre 1960 et 1980.",
        responseSpace: { type: "category-buckets", categories: ["Gain juridique", "Gain sur les droits sexuels et reproductifs"], slots: [1, 1] }
      },
      reglettes: [{ id: "r-mq-r1", label: "Réglette (2 points)", ...R_RELATION_2PT_2SUR2 }],
      documents: pickDocs('mq-relation-1', 1, 2),
      corrige: [["Document 1"], ["Document 2"]] },

    // ===== V-A Q6 — Situer dans l'espace — 2 régions minières (carte à lettres) =====
    { id: "q-mq-situer-2", operation: "Situer dans le temps et dans l'espace", numero: 2, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "À l'aide du document 1, coche les 2 lettres correspondant aux régions du Québec qui se développent grâce à l'industrie minière.",
        responseSpace: { type: "checkbox-table", columns: ["A", "B", "C", "D"], rows: ["Région développée grâce à l'industrie minière"] }
      },
      reglettes: [{ id: "r-mq-s2", label: "Réglette (2 points)", ...R_SITUER_2PT_SP_2FAITS }],
      documents: pickDocs('mq-situer-2', 1),
      corrige: [[false, false, true, true]] },

    // ===== V-A Q7 — Différences/similitudes — Moyens PQ vs FLQ pour la souveraineté =====
    { id: "q-mq-differences-2", operation: "Dégager des différences et des similitudes", numero: 2, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "À l'aide des documents 1 et 2, nomme une différence dans les moyens que prennent le Front de libération du Québec (document 1) et le Parti québécois (document 2) afin de réaliser la souveraineté.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-mq-d2", label: "Réglette (1 point)", ...R_DIFFERENCES_1PT }],
      documents: pickDocs('mq-differences-2', 1, 2),
      corrige: "Le Parti québécois souhaite réaliser la souveraineté à l'aide d'un référendum (par la voie démocratique), alors que le Front de libération du Québec emploie la violence (bombes, enlèvements)." },

    // ===== V-A Q8 — Changements/continuités — Agriculture (machinerie + électrification) =====
    { id: "q-mq-continuite-1", operation: "Déterminer des changements et des continuités", numero: 1, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "À l'aide des documents 1 et 2, indique s'il y a changement ou continuité dans le domaine de l'agriculture. Justifie ta réponse à l'aide de faits.",
        responseSpace: { type: "lines", count: 5 }
      },
      reglettes: [{ id: "r-mq-co1", label: "Réglette (3 points)", ...RUBRIC_CHANGEMENTS_3PT_REPERE_TEMPS }],
      documents: pickDocs('mq-continuite-1', 1, 2),
      corrige: "Il y a changement : les fermes utilisent beaucoup plus de machinerie agricole en 1961 qu'en 1931 (le nombre de tracteurs passe de 2 417 à 70 697). On peut aussi répondre qu'il y a changement parce que plus de 98 % des fermes sont électrifiées en 1960, contre 20 % en 1945. (Une réponse en termes de continuité — l'électrification rurale se poursuit de 1945 à 1960 — est aussi acceptée si elle est justifiée par des faits et un repère de temps.)" },

    // ===== V-A Q9 — Causalité — Politique fédérale → autonomie de Duplessis =====
    { id: "q-mq-causalite-1", operation: "Établir des liens de causalité", numero: 1, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Explique comment la politique du gouvernement fédéral à la suite de la Deuxième Guerre mondiale amène le gouvernement du Québec à intervenir contre la politique fédérale. En utilisant les documents 1, 2 et 3, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "La politique du gouvernement fédéral à la suite de la Seconde Guerre mondiale",
          "Un principe défendu par Maurice Duplessis",
          "Une mesure mise en place par Maurice Duplessis pour contrer la politique fédérale"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-mq-ca1", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('mq-causalite-1', 1, 2, 3),
      corrige: "Le gouvernement fédéral adopte une politique centralisatrice durant et après la Seconde Guerre mondiale (création de l'assurance-chômage en 1940 et d'un régime universel de pensions en 1951) (document 1). Cette politique amène Maurice Duplessis à défendre l'autonomie provinciale et le respect des compétences conférées aux provinces par l'AANB (document 2). Pour contrer la politique fédérale, Duplessis lutte pour rétablir le pouvoir de taxation du Québec et instaure un impôt provincial (document 3)." },

    // ===== V-B Q1 — Causes/conséquences — Conséquence des pensionnats sur l'identité autochtone =====
    { id: "q-mq-causes-3", operation: "Déterminer des causes et des conséquences", numero: 3, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Jusqu'à la fin des années 1950, beaucoup d'enfants autochtones continuent de fréquenter les pensionnats du gouvernement fédéral. À l'aide du document 1, indique une conséquence de cette situation sur l'identité des enfants autochtones.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-mq-c3", label: "Réglette (2 points)", ...R_CAUSES_2PT_1CONS_GUIDE }],
      documents: pickDocs('mq-causes-3', 1),
      corrige: "Une conséquence est l'assimilation des enfants autochtones à une autre culture (la perte de leur langue, de leur culture et de leur identité)." },

    // ===== V-B Q2 — Mettre en relation — Autonomie de Duplessis (culturelle + fiscale) =====
    { id: "q-mq-relation-2", operation: "Mettre en relation des faits", numero: 2, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Inscris au bon endroit le numéro du document qui fait référence à une manifestation culturelle de l'autonomie provinciale défendue par Maurice Duplessis et le numéro du document qui fait référence à une mesure fiscale qui favorise cette autonomie au cours des années 1940 et 1950.",
        responseSpace: { type: "category-buckets", categories: ["Manifestation culturelle de l'autonomie provinciale", "Mesure fiscale favorisant l'autonomie"], slots: [1, 1] }
      },
      reglettes: [{ id: "r-mq-r2", label: "Réglette (2 points)", ...R_RELATION_2PT_2SUR2 }],
      documents: pickDocs('mq-relation-2', 1, 2),
      corrige: [["Document 1"], ["Document 2"]] },

    // ===== V-B Q3 — Causalité — Libéralisme de Duplessis → exploitation des ressources =====
    { id: "q-mq-causalite-2", operation: "Établir des liens de causalité", numero: 2, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Explique comment un principe économique défendu par Maurice Duplessis a des conséquences sur l'exploitation des ressources naturelles du Québec après la Seconde Guerre mondiale. En utilisant les documents 1, 2 et 3, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "Le principe économique défendu par Maurice Duplessis",
          "La provenance des capitaux investis au Québec",
          "Une conséquence sur l'exploitation des ressources naturelles"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-mq-ca2", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('mq-causalite-2', 1, 2, 3),
      corrige: "Maurice Duplessis défend le libéralisme économique (le laisser-faire) et laisse à l'entreprise privée le développement économique du Québec (document 1). Cette vision laisse une grande place aux investissements étrangers, surtout américains, qui assurent environ les trois quarts des investissements étrangers (document 2). Ces investissements entrainent une croissance rapide de l'exploitation minière et le développement des régions nordiques du Québec, comme l'exploitation spectaculaire du minerai de fer (document 3)." },

    // ===== V-B Q4 — Changements/continuités — Institutions démocratiques (1867 vs 1968) =====
    { id: "q-mq-continuite-2", operation: "Déterminer des changements et des continuités", numero: 2, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "À l'aide du document 1, indique s'il y a changement ou continuité dans les institutions démocratiques du Québec au cours des années 1960. Justifie ton choix par des faits et un repère de temps.",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-mq-co2", label: "Réglette (3 points)", ...RUBRIC_CHANGEMENTS_3PT_REPERE_INLINE }],
      documents: pickDocs('mq-continuite-2', 1),
      corrige: "Il y a changement : le Conseil législatif est aboli en 1968 et l'Assemblée législative devient l'Assemblée nationale. On peut aussi répondre qu'il y a continuité : le poste de lieutenant-gouverneur est toujours en place en 1968." },

    // ===== V-B Q5 — Situer dans le temps — Commission B&B (ligne du temps) =====
    { id: "q-mq-situer-3", operation: "Situer dans le temps et dans l'espace", numero: 3, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Sur la ligne du temps, encercle la lettre qui correspond à la période pendant laquelle se déroulent les faits présentés dans le document 1.",
        responseSpace: { type: "timeline-segments", periods: [
          { letter: "A", range: "1945–1960" },
          { letter: "B", range: "1960–1970" },
          { letter: "C", range: "1970–1980" }
        ]}
      },
      reglettes: [{ id: "r-mq-s3", label: "Réglette (1 point)", ...R_SITUER_1PT_FAITS }],
      documents: pickDocs('mq-situer-3', 1),
      corrige: "B (la Commission royale d'enquête sur le bilinguisme et le biculturalisme est créée en 1963 et mène ses travaux durant les années 1960, soit la période 1960-1970)." },

    // ===== V-B Q6 — Différences/similitudes — 3 acteurs sur la place du Québec dans la fédération =====
    { id: "q-mq-differences-3", operation: "Dégager des différences et des similitudes", numero: 3, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Les documents 1, 2 et 3 présentent la position de trois acteurs concernant la place du Québec au sein de la fédération canadienne au cours des années 1970. Nomme l'acteur qui présente une position différente et compare cette position à celle des deux autres acteurs.",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-mq-d3", label: "Réglette (3 points)", ...R_DIFFSIM_3PT_ACTEUR_DIFFERENT_POSITION }],
      documents: pickDocs('mq-differences-3', 1, 2, 3),
      corrige: "René Lévesque (document 2) présente une position différente : il défend la souveraineté (l'indépendance) du Québec, tandis que Robert Bourassa (document 1) et Jean-Jacques Bertrand (document 3) prônent le maintien du Québec dans la fédération canadienne." },

    // ===== V-B Q7 — Causes/conséquences — Création du ministère des Affaires culturelles =====
    { id: "q-mq-causes-4", operation: "Déterminer des causes et des conséquences", numero: 4, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Au début des années 1960, le gouvernement Lesage crée le ministère des Affaires culturelles. Inscris le numéro du document qui présente une cause de la création de ce ministère et le numéro du document qui présente une conséquence de cette création.",
        responseSpace: { type: "category-buckets", categories: ["Une cause de la création de ce ministère", "Une conséquence de la création de ce ministère"], slots: [1, 1] }
      },
      reglettes: [{ id: "r-mq-c4", label: "Réglette (2 points)", ...R_CAUSES_2PT_CAUSE_CONS_2SUR2 }],
      documents: pickDocs('mq-causes-4', 1, 2),
      corrige: [["Document 1"], ["Document 2"]] },

    // ===== V-B Q8 — Situer dans le temps — Ordre chrono des gains des femmes =====
    { id: "q-mq-situer-4", operation: "Situer dans le temps et dans l'espace", numero: 4, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Les documents 1 à 4 font référence à des gains obtenus par les femmes au Canada et au Québec au cours des années 1960 et 1970. Place-les en ordre chronologique du plus ancien au plus récent.",
        responseSpace: { type: "chrono-ordering", items: ["1er", "2e", "3e", "4e"], prefilled: [null, "Document 1", null, null] }
      },
      reglettes: [{ id: "r-mq-s4", label: "Réglette (2 points)", ...R_SITUER_2PT_T3_BINAIRE_SOMA }],
      documents: pickDocs('mq-situer-4', 1, 2, 3, 4),
      corrige: ["Document 2", "Document 1", "Document 4", "Document 3"] },

    // ===== V-B Q9 — Causes/conséquences — Rejet du Livre blanc de 1969 =====
    { id: "q-mq-causes-5", operation: "Déterminer des causes et des conséquences", numero: 5, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "À l'aide du document 1, explique pour quelle raison les Autochtones rejettent le Livre blanc sur la politique indienne du gouvernement du Canada, publié en 1969.",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-mq-c5", label: "Réglette (2 points)", ...R_CAUSES_2PT_1CAUSE_SOMA }],
      documents: pickDocs('mq-causes-5', 1),
      corrige: "Les Autochtones craignent que cette politique, en leur faisant perdre leur statut d'Indien et leurs traités (les ententes de nation à nation), accélère leur assimilation à la société eurocanadienne. La perte de territoires et de leur capacité à gouverner leurs propres affaires est aussi un enjeu important." },

    // ======================================================================
    // ========= P7 (1945-1980) — Guides pédagogiques RÉCIT (v1.26.0) ========
    // ======================================================================

    // ===== Néonationalisme Q1 — Établir des faits — Mouvement souverainiste 1960-1970 =====
    { id: "q-mq-faits-1", operation: "Établir des faits", numero: 1, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "En utilisant les documents 1 à 3, indique quels sont les principaux politiciens du mouvement souverainiste dans les années 1960-1970, quel objectif ils poursuivent et quel moyen ils veulent utiliser pour atteindre leur objectif.",
        responseSpace: { type: "labeled-list", items: ["Principaux politiciens", "Objectif poursuivi", "Moyen utilisé"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-mq-f1", label: "Réglette (3 points)", ...R_FAITS_3PT_3SUR3 }],
      documents: pickDocs('mq-faits-1', 1, 2, 3),
      corrige: "Principaux politiciens : René Lévesque et Pierre Bourgault. Objectif poursuivi : ils veulent l'indépendance (la souveraineté) du Québec. Moyen utilisé : ils privilégient des moyens démocratiques en formant des partis politiques pour se faire élire (le RIN tient des assemblées et diffuse de l'information par des tracts, des brochures et un journal ; le Parti québécois propose la tenue d'un référendum)." },

    // ===== Néonationalisme Q2 — Situer dans le temps — Montée du Parti québécois =====
    { id: "q-mq-situer-5", operation: "Situer dans le temps et dans l'espace", numero: 5, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Place les documents 1 à 4 en ordre chronologique du plus ancien au plus récent.",
        responseSpace: { type: "chrono-ordering", items: ["1er", "2e", "3e", "4e"] }
      },
      reglettes: [{ id: "r-mq-s5", label: "Réglette (2 points)", ...R_SITUER_2PT_T4 }],
      documents: pickDocs('mq-situer-5', 1, 2, 3, 4),
      corrige: ["Document 2", "Document 3", "Document 4", "Document 1"] },

    // ===== Néonationalisme Q3 — Différences/similitudes — RIN vs Daniel Johnson =====
    { id: "q-mq-differences-4", operation: "Dégager des différences et des similitudes", numero: 4, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "En utilisant les documents 1 et 2, dégage la différence entre la position du Rassemblement pour l'indépendance nationale et celle de Daniel Johnson sur le statut du Québec dans le Canada.",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-mq-d4", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_DIVERGENCE_ETABLIT }],
      documents: pickDocs('mq-differences-4', 1, 2),
      corrige: "Le RIN envisage l'indépendance complète du Québec comme l'idéal politique à atteindre : le Québec et le Canada deviendraient deux pays distincts. Daniel Johnson, lui, présente d'abord le fédéralisme comme la situation idéale et demande une réécriture de la Constitution reconnaissant l'existence de deux nations ; il n'envisage l'indépendance qu'en dernier recours, si la nation canadienne-française ne parvient pas à s'épanouir au sein du Canada." },

    // ===== Période duplessiste Q1 — Situer dans l'espace — Ressources naturelles ~1960 =====
    { id: "q-mq-situer-6", operation: "Situer dans le temps et dans l'espace", numero: 6, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Consulte les documents 1 à 6 et situe chacun d'eux sur la carte (document 7) illustrant l'exploitation des ressources naturelles à la fin de la période duplessiste : pour chaque document, coche la lettre qui lui correspond.",
        responseSpace: { type: "checkbox-table", columns: ["A", "B", "C", "D", "E", "F"], rows: ["Document 1", "Document 2", "Document 3", "Document 4", "Document 5", "Document 6"] }
      },
      reglettes: [{ id: "r-mq-s6", label: "Réglette (3 points)", ...R_SITUER_3PT_SP_6SUR6 }],
      documents: pickDocs('mq-situer-6', 1, 2, 3, 4, 5, 6, 7),
      corrige: [
        [false, false, false, false, false, true],  // Document 1 (Fer et titane, Havre-Saint-Pierre) → F
        [false, false, false, false, true, false],  // Document 2 (Fer, Sept-Îles/Schefferville) → E
        [true, false, false, false, false, false],  // Document 3 (Métaux, Abitibi) → A
        [false, true, false, false, false, false],  // Document 4 (Pâtes et papiers, Mauricie) → B
        [false, false, false, true, false, false],  // Document 5 (Hydroélectricité, Bersimis/Côte-Nord) → D
        [false, false, true, false, false, false]   // Document 6 (Voie maritime du Saint-Laurent) → C
      ] },

    // ===== Période duplessiste Q2 — Situer dans le temps — Grève de l'amiante (chrono) =====
    { id: "q-mq-situer-7", operation: "Situer dans le temps et dans l'espace", numero: 7, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Les documents 1 à 3 relatent les principaux évènements de la grève de l'amiante. Place-les en ordre chronologique du plus ancien au plus récent.",
        responseSpace: { type: "chrono-ordering", items: ["1er", "2e", "3e"] }
      },
      reglettes: [{ id: "r-mq-s7", label: "Réglette (2 points)", ...R_SITUER_2PT_T3 }],
      documents: pickDocs('mq-situer-7', 1, 2, 3),
      corrige: ["Document 3", "Document 1", "Document 2"] },

    // ===== Période duplessiste Q3 — Causes/conséquences — Grève de l'amiante =====
    // Réutilise les documents de mq-situer-7 (mêmes docs 1-3 que la question chrono).
    { id: "q-mq-causes-6", operation: "Déterminer des causes et des conséquences", numero: 6, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "En te basant sur les documents 1 à 3 (les mêmes qu'à la question précédente), nomme deux causes et deux conséquences de la grève de l'amiante.",
        responseSpace: { type: "labeled-list", items: ["Cause 1", "Cause 2", "Conséquence 1", "Conséquence 2"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-mq-c6", label: "Réglette (4 points)", ...R_CAUSES_4PT_2CAUSES_2CONS }],
      documents: pickDocs('mq-situer-7', 1, 2, 3),
      corrige: "Causes : (1) les ouvriers réclament une augmentation de salaire de 15 cents l'heure ; (2) ils exigent que la compagnie s'engage à supprimer la poussière d'amiante (enjeu de santé et de sécurité). Conséquences : (1) la grève entraine des actes de violence et une intervention policière (émeute à Asbestos, blessés) ; (2) elle se termine par la signature d'un contrat collectif accordant des gains aux travailleurs (augmentation de salaire, congés payés, vacances)." },

    // ===== Population Q1 — Causes/conséquences — Causes de la dénatalité =====
    { id: "q-mq-causes-7", operation: "Déterminer des causes et des conséquences", numero: 7, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Le début des années 1960 marque la fin du baby-boom, et la natalité chute progressivement. À l'aide des documents 1 à 3, indique, pour chaque document, une cause de cette baisse de la natalité (dénatalité).",
        responseSpace: { type: "labeled-list", items: ["Document 1", "Document 2", "Document 3"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-mq-c7", label: "Réglette (3 points)", ...R_CAUSES_3PT_3CAUSES }],
      documents: pickDocs('mq-causes-7', 1, 2, 3),
      corrige: "Document 1 : l'accès à la contraception (la pilule) permet aux femmes de limiter les naissances. Document 2 : la baisse de la pratique religieuse (sécularisation) réduit l'influence de l'Église, qui valorisait les familles nombreuses. Document 3 : la hausse de la participation des femmes au marché du travail (de 19,8 % en 1941 à 34,3 % en 1971) les amène à avoir moins d'enfants." },

    // ===== Population Q2 — Établir des faits — Caractéristiques de la société de consommation =====
    { id: "q-mq-faits-2", operation: "Établir des faits", numero: 2, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "La période d'après-guerre marque le début de l'essor de la société de consommation. À l'aide des documents 1 à 4, indique, pour chaque document, une caractéristique de cette société de consommation.",
        responseSpace: { type: "labeled-list", items: ["Document 1", "Document 2", "Document 3", "Document 4"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-mq-f2", label: "Réglette (4 points)", ...R_FAITS_4PT_4SUR4 }],
      documents: pickDocs('mq-faits-2', 1, 2, 3, 4),
      corrige: "Document 1 : la diffusion des électroménagers (le réfrigérateur), qui facilitent la vie quotidienne. Document 2 : l'essor des loisirs et du tourisme. Document 3 : la place centrale de l'automobile et des biens de consommation. Document 4 : l'apparition des centres d'achats et le développement de la banlieue." },

    // ===== Population Q4 — Causalité — Pensionnats et assimilation des Autochtones =====
    { id: "q-mq-causalite-3", operation: "Établir des liens de causalité", numero: 3, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Explique comment une mesure mise en place par le gouvernement canadien pour atteindre ses objectifs affecte différentes communautés autochtones. En utilisant les documents 1, 2 et 3, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "Les objectifs poursuivis par le gouvernement canadien",
          "La mesure mise en place pour atteindre ces objectifs",
          "Une conséquence de cette mesure sur les Autochtones"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-mq-ca3", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('mq-causalite-3', 1, 2, 3),
      corrige: "Le gouvernement canadien poursuit l'objectif d'assimiler les Autochtones à la société eurocanadienne, en leur « apportant les bienfaits de la civilisation » (document 2). Pour atteindre cet objectif, il met en place le réseau des pensionnats autochtones répartis sur le territoire (documents 2 et 3). Une conséquence est la perte de la culture et de la langue autochtones ainsi que la rupture des liens familiaux, comme en témoigne Lucie Basile (document 1)." },

    // ===== Culture/langue Q1 — Changements/continuités — Théâtre québécois =====
    { id: "q-mq-continuite-3", operation: "Déterminer des changements et des continuités", numero: 3, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "À partir du document 1, relève un élément de changement lié au théâtre québécois.",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-mq-co3", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_GEN }],
      documents: pickDocs('mq-continuite-3', 1),
      corrige: "Il y a changement : avant le milieu des années 1960, le théâtre québécois s'appuyait surtout sur le répertoire international ; une dizaine d'années plus tard, grâce notamment au Centre d'essai des auteurs dramatiques, une dramaturgie québécoise originale s'est développée (185 pièces et 85 auteurs)." },

    // ===== Culture/langue Q2 — Changements/continuités — Financement des bibliothèques =====
    { id: "q-mq-continuite-4", operation: "Déterminer des changements et des continuités", numero: 4, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "En utilisant le document 1, indique un changement concernant le financement des lieux de diffusion culturelle comme les bibliothèques à partir de 1960. Spécifie le changement à l'aide de données précises.",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-mq-co4", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_GEN }],
      documents: pickDocs('mq-continuite-4', 1),
      corrige: "Il y a changement : le financement des bibliothèques augmente fortement et l'État provincial commence à les subventionner. Le total des subventions passe de 1 554 000 $ en 1960 à 5 422 811 $ en 1969, et le ministère des Affaires culturelles verse 1 472 432 $ en 1969 alors qu'il ne versait rien (N/d) en 1960." },

    // ===== Culture/langue Q3 — Situer dans le temps — Charte de la langue française (Loi 101) =====
    { id: "q-mq-situer-8", operation: "Situer dans le temps et dans l'espace", numero: 8, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Sur la ligne du temps, encercle la lettre qui correspond à la période pendant laquelle se déroulent les faits présentés dans le document 1.",
        responseSpace: { type: "timeline-segments", periods: [
          { letter: "A", range: "1945–1955" },
          { letter: "B", range: "1955–1960" },
          { letter: "C", range: "1960–1970" },
          { letter: "D", range: "1970–1980" }
        ]}
      },
      reglettes: [{ id: "r-mq-s8", label: "Réglette (1 point)", ...R_SITUER_1PT_FAITS }],
      documents: pickDocs('mq-situer-8', 1),
      corrige: "D (la Charte de la langue française, la loi 101, est adoptée en 1977, soit la période 1970-1980)." },

    // ===== Culture/langue Q4 — Mettre en relation — Ministère de l'Immigration et langue française =====
    { id: "q-mq-relation-3", operation: "Mettre en relation des faits", numero: 3, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Le document 1 précise des raisons pour lesquelles le gouvernement du Québec songe à créer un ministère de l'Immigration. Associe une de ces raisons à la protection de la langue française et justifie ta réponse.",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-mq-r3", label: "Réglette (2 points)", ...R_RELATION_2PT_1FAIT_GUIDE }],
      documents: pickDocs('mq-relation-3', 1),
      corrige: "La raison liée à la protection de la langue française est la deuxième : le Québec veut s'occuper lui-même de l'immigration afin que celle-ci ne devienne pas, entre les mains du gouvernement fédéral, un moyen de modifier la composition culturelle (et donc linguistique) de la société québécoise. En contrôlant l'immigration, le Québec peut mieux protéger le caractère francophone de sa population." },

    // ===== Mouvements sociaux Q1 — Causalité — Loi anti-briseurs de grève =====
    { id: "q-mq-causalite-4", operation: "Établir des liens de causalité", numero: 4, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "À partir des documents 1 à 3, explique comment un changement revendiqué par les syndicats pour régler une situation qui les mécontente permet d'obtenir des gains pour les travailleurs. En utilisant les documents, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "Une pratique qui nuit aux grévistes et qui est permise dans le Code du travail",
          "Un changement revendiqué par les syndicats",
          "Un gain obtenu pour les travailleurs"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-mq-ca4", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('mq-causalite-4', 1, 2, 3),
      corrige: "Une pratique qui nuit aux grévistes est l'utilisation de briseurs de grève (« scabs ») pour maintenir la production pendant une grève, ce que le Code du travail permettait (documents 2 et 3 : la grève du 7UP se prolonge parce que le patron remplace les grévistes). Les syndicats revendiquent l'interdiction des briseurs de grève (document 2). Le gain obtenu est l'adoption, en 1977, d'une loi interdisant à l'employeur de remplacer les salariés en grève (document 1)." },

    // ===== Mouvements sociaux Q2 — Établir des faits — Madeleine Parent =====
    { id: "q-mq-faits-3", operation: "Établir des faits", numero: 3, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "À l'aide du document 1, indique une revendication de la syndicaliste Madeleine Parent quant au travail des femmes.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-mq-f3", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('mq-faits-3', 1),
      corrige: "Madeleine Parent revendique de meilleurs salaires et de meilleures conditions de travail pour les femmes, en particulier celles qui travaillent dans l'industrie du textile." },

    // ===== Mouvements sociaux Q3 — Établir des faits — Gains des Cris (Convention Baie-James) =====
    { id: "q-mq-faits-4", operation: "Établir des faits", numero: 4, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Selon le document 1, quels sont les gains réalisés par les Cris dans le cadre de la signature de la Convention de la Baie-James et du Nord québécois ?",
        responseSpace: { type: "labeled-list", items: ["Gain 1", "Gain 2", "Gain 3"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-mq-f4", label: "Réglette (3 points)", ...R_FAITS_3PT_3SUR3 }],
      documents: pickDocs('mq-faits-4', 1),
      corrige: "Gain 1 : des droits exclusifs et permanents de chasse, de pêche et de trappage sur certaines terres. Gain 2 : une voix dans les décisions touchant leur environnement et une participation aux projets d'aménagement du territoire. Gain 3 : une compensation financière de 225 millions de dollars versée sur 20 ans." },

    // ===== Mouvements sociaux Q4 — Situer dans le temps — Loi sur la capacité juridique (1964) =====
    { id: "q-mq-situer-9", operation: "Situer dans le temps et dans l'espace", numero: 9, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Sur la ligne du temps, encercle la lettre correspondant à la période pendant laquelle entre en vigueur la loi présentée dans le document 1.",
        responseSpace: { type: "timeline-segments", periods: [
          { letter: "A", range: "1945–1955" },
          { letter: "B", range: "1955–1960" },
          { letter: "C", range: "1960–1970" },
          { letter: "D", range: "1970–1980" }
        ]}
      },
      reglettes: [{ id: "r-mq-s9", label: "Réglette (1 point)", ...R_SITUER_1PT_FAITS }],
      documents: pickDocs('mq-situer-9', 1),
      corrige: "C (la Loi sur la capacité juridique de la femme mariée entre en vigueur en 1964, soit la période 1960-1970)." },

    // ===== Révolution tranquille Q1 — Différences/similitudes — Services par l'Église vs l'État =====
    { id: "q-mq-differences-5", operation: "Dégager des différences et des similitudes", numero: 5, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Qu'est-ce qui distingue les documents 1 et 2 des documents 3 et 4 ? Dégage une différence entre les deux paires de documents, puis dégage une similitude entre ces deux paires.",
        responseSpace: { type: "labeled-list", items: ["Différence", "Similitude"], linesPerItem: 3 }
      },
      reglettes: [{ id: "r-mq-d5", label: "Réglette (2 points)", ...R_DIFFSIM_2PT_1DIFF_1SIM }],
      documents: pickDocs('mq-differences-5', 1, 2, 3, 4),
      corrige: "Différence : dans les documents 1 et 2, ce sont des membres du clergé (un religieux, une religieuse) qui assurent les services d'éducation et de santé, tandis que dans les documents 3 et 4, ce sont des laïcs (un enseignant, une infirmière) au service de l'État. Similitude : dans les deux cas, on offre les mêmes services à la population, soit l'éducation et les soins de santé." },

    // ===== Révolution tranquille Q2 — Causalité — Commission Parent et laïcisation de l'éducation =====
    { id: "q-mq-causalite-5", operation: "Établir des liens de causalité", numero: 5, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Selon les documents 1 à 3, comment l'étude du système scolaire par la Commission royale d'enquête sur l'enseignement (Commission Parent) transforme-t-elle le rôle de l'Église en éducation ? En utilisant les documents, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "Le fonctionnement du système scolaire québécois au début de la Révolution tranquille",
          "Les recommandations de la Commission royale d'enquête sur l'enseignement (Commission Parent)",
          "Les conséquences sur le rôle de l'Église en éducation"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-mq-ca5", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('mq-causalite-5', 1, 2, 3),
      corrige: "Au début de la Révolution tranquille, l'Église catholique contrôle le système scolaire : par le comité catholique, elle décide des programmes, des manuels, de l'embauche des enseignants, etc. (document 2). La Commission Parent recommande de laïciser la direction du système scolaire en créant un ministère de l'Éducation non confessionnel et de déconfessionnaliser l'enseignement supérieur (document 1). En conséquence, après l'adoption du Bill 60 en 1964, l'Église perd son pouvoir sur la direction du système scolaire — même si elle conserve un rôle dans les aspects moraux et religieux —, et l'État laïcise l'éducation (document 3)." },

    // ===== Révolution tranquille Q3 — Causes/conséquences — Mesures économiques de Lesage =====
    { id: "q-mq-causes-8", operation: "Déterminer des causes et des conséquences", numero: 8, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "En examinant les documents 1 et 2, identifie, pour chacun, une mesure économique mise en place par le gouvernement de Jean Lesage et explique la raison qui pousse le gouvernement à prendre cette mesure.",
        responseSpace: { type: "labeled-list", items: ["Document 1 — mesure et raison", "Document 2 — mesure et raison"], linesPerItem: 3 }
      },
      reglettes: [{ id: "r-mq-c8", label: "Réglette (4 points)", ...R_CAUSES_4PT_2MESURES_2CAUSES }],
      documents: pickDocs('mq-causes-8', 1, 2),
      corrige: "Document 1 : la mesure est la nationalisation de l'électricité (création d'Hydro-Québec) ; la raison est de redonner aux Québécois le contrôle de leur économie et de leurs ressources plutôt que de les laisser à des compagnies privées (« maîtres chez nous »). Document 2 : la mesure est la création de la Caisse de dépôt et placement ; la raison est de regrouper l'épargne collective des Québécois afin qu'ils prennent le contrôle des centres de décisions économiques et financent la modernisation de l'économie." },

    // ===== Révolution tranquille Q4 — Différences/similitudes — 3 acteurs sur l'avortement =====
    { id: "q-mq-differences-6", operation: "Dégager des différences et des similitudes", numero: 6, annee: 4, niveau: 3,
      realite_sociale_id: "modernisation-quebec",
      questionBody: {
        prompt: "Les documents 1 à 3 présentent les positions de trois acteurs sur l'avortement. Nomme l'acteur qui présente une position différente et compare sa position à celle des deux autres acteurs.",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-mq-d6", label: "Réglette (3 points)", ...R_DIFFSIM_3PT_ACTEUR_DIFFERENT_POSITION }],
      documents: pickDocs('mq-differences-6', 1, 2, 3),
      corrige: "Lise Payette (document 3) présente une position différente : elle défend la légalisation de l'avortement au nom de la liberté de la femme de décider. Les deux autres acteurs s'opposent à l'avortement : l'Association des bureaux médicaux des hôpitaux du Québec (document 1) considère l'avortement comme un homicide et s'oppose à sa légalisation, et le jésuite Marcel Marcotte (document 2) estime qu'il ne devrait être autorisé que dans les cas de péril grave pour la vie ou la santé de la mère." },

    // ============================================================
    // ===== P8 — 1980 à nos jours — Les choix de société dans le Québec contemporain =====
    // Lot A — évaluations sommatives (Section A « Avec documents »), versions A et B.
    // ============================================================

    // ===== P8 · V-A Q1 · Situer dans le temps — Statut politique du Québec (chrono, doc pré-rempli) =====
    { id: "q-cs-situer-1", operation: "Situer dans le temps et dans l'espace", numero: 1, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Les documents 1 à 4 font référence au statut politique du Québec entre 1980 et 1995. Place-les en ordre chronologique, du plus ancien au plus récent.",
        responseSpace: { type: "chrono-ordering", items: ["1er", "2e", "3e", "4e"], prefilled: ["Document 2", null, null, null] }
      },
      reglettes: [{ id: "r-cs-s1", label: "Réglette (2 points)", ...R_SITUER_2PT_T3_SOMA }],
      documents: pickDocs('cs-situer-1', 1, 2, 3, 4),
      corrige: ["Document 2", "Document 4", "Document 1", "Document 3"] },

    // ===== P8 · V-A Q2 · Causes/conséquences — Conséquence des accords de libre-échange =====
    { id: "q-cs-causes-1", operation: "Déterminer des causes et des conséquences", numero: 1, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "À l'aide du document 1, indique une conséquence des accords de libre-échange sur l'économie du Québec.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-cs-c1", label: "Réglette (2 points)", ...R_CAUSES_2PT_1CONS_SOMA }],
      documents: pickDocs('cs-causes-1', 1),
      corrige: "Une conséquence des accords de libre-échange sur l'économie du Québec est l'augmentation des exportations du Québec vers l'étranger." },

    // ===== P8 · V-A Q3 · Mettre en relation — Événements liés aux droits des Autochtones (4 sur 4) =====
    { id: "q-cs-relation-1", operation: "Mettre en relation des faits", numero: 1, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Les documents 1 à 4 correspondent à des événements liés aux droits des Autochtones du Québec. Pour chaque document, coche l'événement auquel il se rapporte.",
        responseSpace: { type: "checkbox-table",
          columns: ["La Loi constitutionnelle (1982)", "La création du Nunavut (1999)", "La Paix des Braves (2002)", "La crise d'Oka (1990)"],
          rows: ["Document 1", "Document 2", "Document 3", "Document 4"]
        }
      },
      reglettes: [{ id: "r-cs-r1", label: "Réglette (2 points)", ...R_RELATION_2PT_4_SOMA }],
      documents: pickDocs('cs-relation-1', 1, 2, 3, 4),
      corrige: [[true, false, false, false], [false, true, false, false], [false, false, true, false], [false, false, false, true]] },

    // ===== P8 · V-A Q4 · Causalité — Récession et financement des programmes sociaux =====
    { id: "q-cs-causalite-1", operation: "Établir des liens de causalité", numero: 1, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Explique comment la situation économique du Québec et du Canada au cours des années 1980 a eu un effet sur le financement des programmes sociaux. Dans ta réponse, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "La situation économique du Québec et du Canada au cours des années 1980",
          "La situation des finances publiques",
          "Un effet sur le financement des programmes sociaux"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-cs-ca1", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('cs-causalite-1', 1, 2, 3),
      corrige: "Au cours des années 1980, le Québec et le Canada traversent une grave récession et le taux de chômage y est très élevé (document 1). Cette situation fait augmenter de façon importante la dette publique du Québec (document 2). Pour faire face à cette crise budgétaire, les gouvernements diminuent le financement des programmes sociaux (document 3)." },

    // ===== P8 · V-A Q5 · Changements/continuités — Conditions salariales H/F (continuité) =====
    { id: "q-cs-continuite-1", operation: "Déterminer des changements et des continuités", numero: 1, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "À partir du document 1, indique un élément de continuité lié aux conditions salariales des hommes et des femmes entre 1980 et 2010.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-cs-co1", label: "Réglette (2 points)", ...R_CONTINUITES_2PT_GEN_SOMA }],
      documents: pickDocs('cs-continuite-1', 1),
      corrige: "Un élément de continuité lié aux conditions salariales des hommes et des femmes entre 1980 et 2010 est que les femmes perçoivent toujours un salaire inférieur à celui des hommes." },

    // ===== P8 · V-A Q6 · Différences/similitudes — Projet de loi 178 sur l'affichage (acteur différent) =====
    { id: "q-cs-differences-1", operation: "Dégager des différences et des similitudes", numero: 1, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Les documents 1 à 3 présentent la position de trois acteurs concernant un projet de loi sur l'affichage présenté à l'Assemblée nationale dans les années 1980. Nomme l'acteur qui présente une position différente et compare cette position à celle des deux autres acteurs.",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-cs-d1", label: "Réglette (3 points)", ...R_DIFFSIM_3PT_2POSITIONS_SOMA }],
      documents: pickDocs('cs-differences-1', 1, 2, 3),
      corrige: "Joan Dougherty (document 1) présente une position différente : elle s'oppose à l'affichage public extérieur uniquement en français et à l'interdiction d'afficher dans une autre langue à l'extérieur des commerces. Les deux autres acteurs appuient cette mesure : Guy Rivard (document 2) défend l'affichage uniquement en français à l'extérieur des commerces et Jean-Pierre Charbonneau (document 3) estime qu'il ne faut pas reculer sur l'affichage commercial unilingue français." },

    // ===== P8 · V-A Q7 · Causes/conséquences — Cause du vieillissement de la population =====
    { id: "q-cs-causes-2", operation: "Déterminer des causes et des conséquences", numero: 2, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Depuis le début des années 1980, la population âgée de 65 ans et plus augmente. À l'aide du document 1, indique une cause de cette situation.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-cs-c2", label: "Réglette (2 points)", ...R_CAUSES_2PT_1CAUSE_SOMA }],
      documents: pickDocs('cs-causes-2', 1),
      corrige: "Une cause du vieillissement de la population au Québec est la diminution du taux de natalité ou l'augmentation de l'espérance de vie ou le faible taux de mortalité." },

    // ===== P8 · V-A Q8 · Mettre en relation — Internet vs concentration des médias (2 sur 2) =====
    { id: "q-cs-relation-2", operation: "Mettre en relation des faits", numero: 2, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Pour chaque document, coche le problème qu'il présente : un problème culturel lié à l'utilisation d'Internet ou un problème lié à la concentration des médias dans les années 2000.",
        responseSpace: { type: "checkbox-table",
          columns: ["Problème culturel lié à l'utilisation d'Internet", "Problème lié à la concentration des médias"],
          rows: ["Document 1", "Document 2"]
        }
      },
      reglettes: [{ id: "r-cs-r2", label: "Réglette (2 points)", ...R_RELATION_2PT_2SUR2 }],
      documents: pickDocs('cs-relation-2', 1, 2),
      corrige: [[true, false], [false, true]] },

    // ===== P8 · V-B Q1 · Mettre en relation — Projets de réforme constitutionnelle (2 sur 2) =====
    { id: "q-cs-relation-3", operation: "Mettre en relation des faits", numero: 3, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Au cours des années 1980 et 1990, des projets de réforme constitutionnelle sont à l'ordre du jour. Pour chaque document, coche la case s'il se rapporte à un projet de réforme constitutionnelle.",
        responseSpace: { type: "checkbox-table",
          columns: ["Se rapporte à un projet de réforme constitutionnelle"],
          rows: ["Document 1", "Document 2", "Document 3", "Document 4"]
        }
      },
      reglettes: [{ id: "r-cs-r3", label: "Réglette (2 points)", ...R_RELATION_2PT_2SUR2 }],
      documents: pickDocs('cs-relation-3', 1, 2, 3, 4),
      corrige: [[true], [true], [false], [false]] },

    // ===== P8 · V-B Q2 · Situer dans le temps — Accord de libre-échange (ligne du temps) =====
    { id: "q-cs-situer-2", operation: "Situer dans le temps et dans l'espace", numero: 2, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Sur la ligne du temps, encercle la lettre qui correspond à la période pendant laquelle se déroulent les faits présentés dans le document 1.",
        responseSpace: { type: "timeline-segments", periods: [
          { letter: "A", range: "1980–1985" },
          { letter: "B", range: "1985–1990" },
          { letter: "C", range: "1990–1995" },
          { letter: "D", range: "1995–2000" }
        ]}
      },
      reglettes: [{ id: "r-cs-s2", label: "Réglette (1 point)", ...R_SITUER_1PT_FAITS }],
      documents: pickDocs('cs-situer-2', 1),
      corrige: "B (l'Accord de libre-échange entre le Canada et les États-Unis est conclu à la fin des années 1980, soit la période 1985-1990)." },

    // ===== P8 · V-B Q3 · Causes/conséquences — Cause du déclin économique des régions =====
    { id: "q-cs-causes-3", operation: "Déterminer des causes et des conséquences", numero: 3, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Depuis le début des années 1980, on assiste au déclin économique de certaines régions du Québec. À l'aide du document 1, indique une cause de ce déclin.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-cs-c3", label: "Réglette (2 points)", ...R_CAUSES_2PT_1CAUSE_SOMA }],
      documents: pickDocs('cs-causes-3', 1),
      corrige: "Une cause du déclin économique de certaines régions du Québec est leur dépendance économique à l'exploitation des ressources naturelles, car leur économie repose sur l'exploitation de ces ressources par un décideur extérieur." },

    // ===== P8 · V-B Q4 · Causalité — Vieillissement, natalité et politique familiale (RQAP) =====
    { id: "q-cs-causalite-2", operation: "Établir des liens de causalité", numero: 2, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Explique comment une caractéristique de la population québécoise depuis le début des années 1980 a influencé la politique familiale du gouvernement du Québec. Dans ta réponse, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "Une caractéristique de la population québécoise",
          "La situation de la natalité au Québec",
          "Un élément de la politique familiale du gouvernement dans les années 2000"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-cs-ca2", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('cs-causalite-2', 1, 2, 3),
      corrige: "Depuis le début des années 1980, le Québec fait face au vieillissement de sa population (document 1). De plus, il doit composer avec une baisse constante du nombre d'enfants par femme (document 2). Pour tenter de minimiser les effets de ces deux réalités, le gouvernement du Québec a mis sur pied le Régime québécois d'assurance parentale (document 3)." },

    // ===== P8 · V-B Q5 · Causes/conséquences — Conséquence de la Loi 86 sur l'affichage =====
    { id: "q-cs-causes-4", operation: "Déterminer des causes et des conséquences", numero: 4, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "À l'aide du document 1, indique une conséquence de la Loi 86 sur l'affichage public au Québec.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-cs-c4", label: "Réglette (2 points)", ...R_CAUSES_2PT_1CONS_SOMA }],
      documents: pickDocs('cs-causes-4', 1),
      corrige: "Une conséquence de la Loi 86 sur l'affichage public au Québec est la possibilité d'afficher dans une autre langue à l'intérieur d'un commerce, à condition que le français y occupe une place prédominante." },

    // ===== P8 · V-B Q6 · Changements/continuités — Place de la culture (continuité, repère de temps) =====
    { id: "q-cs-continuite-2", operation: "Déterminer des changements et des continuités", numero: 2, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "À l'aide des documents 1 et 2, indique une continuité dans la place que l'État québécois veut donner à la culture. Justifie ton choix à l'aide de faits et d'un repère de temps.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-cs-co2", label: "Réglette (3 points)", ...RUBRIC_CHANGEMENTS_3PT_REPERE_INLINE }],
      documents: pickDocs('cs-continuite-2', 1, 2),
      corrige: "Un élément de continuité est que l'État québécois présente la culture comme un élément majeur du développement de la société québécoise, autant au début des années 1960 (création du ministère des Affaires culturelles en 1961, document 1) qu'au début des années 2010 (Plan stratégique 2012-2016, document 2)." },

    // ===== P8 · V-B Q7 · Changements/continuités — Diffusion de l'information via Internet (changement) =====
    { id: "q-cs-continuite-3", operation: "Déterminer des changements et des continuités", numero: 3, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "L'avènement d'Internet amène un changement dans la manière de diffuser l'information en continu à partir des années 2000. À l'aide du document 1, indique quel est ce changement.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-cs-co3", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_GEN }],
      documents: pickDocs('cs-continuite-3', 1),
      corrige: "Un changement dans la manière de diffuser l'information en continu à partir des années 2000 est la diffusion rapide et quasi instantanée de l'information grâce aux différentes plateformes Web (sites des journaux, de la radio et de la télévision)." },

    // ===== P8 · V-B Q8 · Différences/similitudes — Financement des études universitaires (acteur différent) =====
    { id: "q-cs-differences-2", operation: "Dégager des différences et des similitudes", numero: 2, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Les documents 1 à 3 présentent la position de trois acteurs concernant le financement des études universitaires au Québec au cours des années 2010. Nomme l'acteur qui présente une position différente et compare cette position à celle des deux autres acteurs.",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-cs-d2", label: "Réglette (3 points)", ...R_DIFFSIM_3PT_ACTEUR_DIFFERENT_POSITION }],
      documents: pickDocs('cs-differences-2', 1, 2, 3),
      corrige: "Luc Godbout (document 2) présente une position différente : selon lui, la hausse des frais de scolarité est une bonne chose, car elle permettrait aux étudiants d'obtenir des crédits d'impôt additionnels et de s'enrichir. Les deux autres acteurs s'opposent à la hausse des frais de scolarité : Martine Desjardins (document 1), de la FEUQ, dénonce l'endettement des étudiants et de leurs familles, et Léo Bureau-Blouin (document 3), de la FECQ, demande au gouvernement de plafonner les droits de scolarité." },

    // ===== P8 · V-B Q9 · Causes/conséquences — Couche d'ozone : cause et conséquence (2 sur 2) =====
    { id: "q-cs-causes-5", operation: "Déterminer des causes et des conséquences", numero: 5, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Au cours des années 1980, des crises écologiques sont au coeur des préoccupations environnementales. Au sujet de la couche d'ozone, coche pour chaque document s'il présente une cause ou une conséquence.",
        responseSpace: { type: "checkbox-table",
          columns: ["Une cause", "Une conséquence"],
          rows: ["Document 1", "Document 2"]
        }
      },
      reglettes: [{ id: "r-cs-c5", label: "Réglette (2 points)", ...R_CAUSES_2PT_CAUSE_CONS_2SUR2 }],
      documents: pickDocs('cs-causes-5', 1, 2),
      corrige: [[true, false], [false, true]] },

    // ============================================================
    // ===== P8 · Lot B — Guides pédagogiques RÉCIT (v1.29.0) =====
    // ============================================================

    // ===== P8 · Établir des faits (numero 1) — Facteurs limitant le branchement à Internet (2 sur 2) =====
    // Guide « La population québécoise et la culture », Q4. PRIORITÉ : comble l'OI « Établir des faits »
    // (P8 passe à 7/7). Réglette R_FAITS_2PT_2SUR2 créée pour le Lot B (le guide RÉCIT ne fournit pas de
    // barème) : type simple 2 pts, 3 niveaux « 2 sur 2 / 1 sur 2 / 0 sur 2 », calquée sur les réglettes
    // « établir des faits » des autres périodes.
    { id: "q-cs-faits-1", operation: "Établir des faits", numero: 1, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Au Québec, entre 2012 et 2016, la proportion de la population branchée à Internet augmente, mais ce service n'est pas accessible à tous. À l'aide des documents 1 et 2, indique deux facteurs qui limitent le branchement à Internet.",
        responseSpace: { type: "labeled-list", items: ["Facteur 1", "Facteur 2"], linesPerItem: 3 }
      },
      reglettes: [{ id: "r-cs-f1", label: "Réglette (2 points)", ...R_FAITS_2PT_2SUR2 }],
      documents: pickDocs('cs-faits-1', 1, 2),
      corrige: [
        "Avoir un revenu plus faible limite le branchement à Internet. Tant en 2012 qu'en 2016, les ménages dont le revenu se situe entre 0 et 30 000 $ forment la catégorie de la population la moins branchée à Internet (document 2).",
        "Habiter dans une région plus éloignée des grandes villes limite le branchement à Internet. Tant en 2012 qu'en 2016, les ménages vivant hors des régions métropolitaines sont moins branchés que ceux des milieux urbains (document 1)."
      ] },

    // ===== P8 · Dégager des différences et des similitudes (numero 3) — Lévesque vs Trudeau : désaccord =====
    // Guide « Le statut politique du Québec », Q1. Réglette R_DIFFERENCES_2PT_DIVERGENCE réutilisée (libellé
    // « point de divergence entre les points de vue »), conforme à la consigne « sur quel point sont-ils en désaccord ».
    { id: "q-cs-differences-3", operation: "Dégager des différences et des similitudes", numero: 3, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Les documents 1 et 2 présentent les positions de René Lévesque et de Pierre Elliott Trudeau concernant le statut politique du Québec. Sur quel point précis sont-ils en désaccord?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-cs-d3", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_DIVERGENCE }],
      documents: pickDocs('cs-differences-3', 1, 2),
      corrige: "Pierre Elliott Trudeau (document 1) et René Lévesque (document 2) sont en désaccord sur la souveraineté (ou l'indépendance) du Québec. Lévesque défend la souveraineté politique du Québec, alors que Trudeau souhaite que les Québécois réaffirment leur appartenance au Canada." },

    // ===== P8 · Déterminer des changements et des continuités (numero 4) — Loi const. 1867 vs 1982 =====
    // Guide « Le statut politique du Québec », Q2 (une continuité ET un changement). Réglette
    // R_CHANGEMENTS_2PT_1CHG_1CONT réutilisée (1 continuité + 1 changement, 2 sur 2).
    { id: "q-cs-continuite-4", operation: "Déterminer des changements et des continuités", numero: 4, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "À partir des documents 1 et 2, indique une continuité et un changement entre la Loi constitutionnelle de 1867 et la Loi constitutionnelle de 1982.",
        responseSpace: { type: "labeled-list", items: ["Continuité", "Changement"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-cs-co4", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_1CHG_1CONT }],
      documents: pickDocs('cs-continuite-4', 1, 2),
      corrige: [
        "La constitution canadienne de 1867 reste en vigueur dans la Loi constitutionnelle de 1982 : la structure de la fédération canadienne demeure en grande partie la même (document 1).",
        "Un changement apporté par la Loi constitutionnelle de 1982 est l'ajout de la Charte canadienne des droits et libertés, à laquelle toutes les lois provinciales et fédérales doivent désormais se conformer (documents 1 et 2)."
      ] },

    // ===== P8 · Déterminer des causes et des conséquences (numero 6) — Conséquences de la CVR =====
    // Guide « Les revendications sociales », Q2 (deux conséquences). Document renuméroté à « Document 1 ».
    // Réglette R_CAUSES_2PT_2CONS réutilisée (toutes les conséquences, 2 sur 2).
    { id: "q-cs-causes-6", operation: "Déterminer des causes et des conséquences", numero: 6, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "À l'aide du document 1, indique deux conséquences de la Commission de vérité et réconciliation du Canada.",
        responseSpace: { type: "labeled-list", items: ["Conséquence 1", "Conséquence 2"], linesPerItem: 2 }
      },
      reglettes: [{ id: "r-cs-c6", label: "Réglette (2 points)", ...R_CAUSES_2PT_2CONS }],
      documents: pickDocs('cs-causes-6', 1),
      corrige: [
        "Les fonctionnaires fédéraux reçoivent une formation de sensibilisation aux réalités autochtones, grâce à la série d'apprentissages créée par l'École de la fonction publique du Canada (document 1).",
        "Un suivi est mis en place pour mesurer les progrès dans l'élimination de la surreprésentation des Autochtones en détention (document 1)."
      ] },

    // ===== P8 · Situer dans le temps et dans l'espace (numero 3) — Accords de libre-échange depuis 1980 =====
    // Guide « Le Québec dans le monde », Q1 (chrono-ordering 4 documents). Réglette R_SITUER_2PT_T4 réutilisée
    // (situer 4 faits, 4 sur 4). Années retirées des contenus/sources pour ne pas révéler l'ordre.
    // Ordre : ALÉ Canada–É.-U. (en vigueur 1989, doc 4) < ALÉNA (1994, doc 1) < PTPGP (2018, doc 3) < ACEUM (2020, doc 2).
    { id: "q-cs-situer-3", operation: "Situer dans le temps et dans l'espace", numero: 3, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "À l'aide des documents 1 à 4, place en ordre chronologique les ententes de libre-échange dont le Canada fait partie depuis 1980, du plus ancien au plus récent.",
        responseSpace: { type: "chrono-ordering", items: ["1er", "2e", "3e", "4e"] }
      },
      reglettes: [{ id: "r-cs-s3", label: "Réglette (2 points)", ...R_SITUER_2PT_T4 }],
      documents: pickDocs('cs-situer-3', 1, 2, 3, 4),
      corrige: ["Document 4", "Document 1", "Document 3", "Document 2"] },

    // ===== P8 · Dégager des différences et des similitudes (numero 4) — Missions de paix vs missions armées =====
    // Guide « Le Québec dans le monde », Q4 (une similitude ET une différence). Une mission = un document.
    // Réglette R_DIFFSIM_2PT_1SIM_1DIFF réutilisée (1 similitude + 1 différence, chaque élément vaut 1 point).
    { id: "q-cs-differences-4", operation: "Dégager des différences et des similitudes", numero: 4, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Les documents 1 et 2 présentent des missions de l'armée canadienne à l'étranger. Indique une similitude et une différence entre les missions de paix et les missions armées.",
        responseSpace: { type: "labeled-list", items: ["Similitude", "Différence"], linesPerItem: 3 }
      },
      reglettes: [{ id: "r-cs-d4", label: "Réglette (2 points)", ...R_DIFFSIM_2PT_1SIM_1DIFF }],
      documents: pickDocs('cs-differences-4', 1, 2),
      corrige: [
        "Les deux types de missions impliquent l'envoi de militaires canadiens sur le terrain à l'étranger (documents 1 et 2).",
        "L'objectif des missions diffère : les missions de paix consistent à escorter des convois d'aide humanitaire et à protéger des civils (document 1), alors que les missions armées visent à mener des opérations de combat pour chasser les insurgés (document 2)."
      ] },

    // ===== P8 · Dégager des différences et des similitudes (numero 5) — Neutralité religieuse : point d'accord =====
    // Guide « La population québécoise et la culture », Q2. Un tribunal = un document. Réglette
    // R_SIMILITUDES_2PT_CONVERGENCE réutilisée (point de convergence des acteurs).
    { id: "q-cs-differences-5", operation: "Dégager des différences et des similitudes", numero: 5, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Les documents 1 et 2 présentent deux jugements rendus au sujet de la récitation d'une prière au conseil municipal de Saguenay. Sur quel point ces deux tribunaux sont-ils en accord?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-cs-d5", label: "Réglette (2 points)", ...R_SIMILITUDES_2PT_CONVERGENCE }],
      documents: pickDocs('cs-differences-5', 1, 2),
      corrige: "Les deux tribunaux s'accordent sur le fait que le principe de neutralité religieuse de l'État doit être respecté. Selon eux, la récitation d'une prière au conseil municipal compromet la liberté de conscience et de religion du citoyen (documents 1 et 2)." },

    // ===== P8 · Établir des liens de causalité (numero 3) — Services numériques (Netflix) et intervention de l'État =====
    // Guide « La population québécoise et la culture », Q3 (3 éléments à lier). Réglette RUBRIC_CAUSALITE_3PT
    // réutilisée (préciser 3 éléments + établir 2 liens). Patron causalité standard (bullets + instructions + 8 lignes).
    { id: "q-cs-causalite-3", operation: "Établir des liens de causalité", numero: 3, annee: 4, niveau: 4,
      realite_sociale_id: "choix-societe-quebec-contemporain",
      questionBody: {
        prompt: "Explique comment l'arrivée des services numériques étrangers comme Netflix a mené l'État québécois à intervenir. Dans ta réponse, tu dois préciser chacun des éléments ci-dessous et les lier entre eux.",
        bullets: [
          "La popularité croissante des services numériques étrangers comme Netflix au Canada",
          "La concurrence économique et culturelle exercée par ces multinationales non taxées",
          "L'intervention de l'État québécois envers les services numériques"
        ],
        instructions: CAUSALITE_INSTRUCTIONS,
        responseSpace: { type: "lines", count: 8 }
      },
      reglettes: [{ id: "r-cs-ca3", label: "Réglette (3 points)", ...RUBRIC_CAUSALITE_3PT }],
      documents: pickDocs('cs-causalite-3', 1, 2, 3),
      corrige: "À partir de 2010, un nombre croissant de Québécois et de Canadiens consomment la culture par l'intermédiaire de plateformes numériques étrangères comme Netflix (document 3). Ce changement dans les habitudes de consommation renforce la concurrence économique et culturelle des multinationales américaines, dont les services ne sont pas taxés au Canada (document 1). En conséquence, l'État québécois adopte une loi qui force les entreprises étrangères de services numériques à percevoir la taxe de vente, afin d'assurer une concurrence loyale aux entreprises d'ici (document 2)." }

  ]
};

})();
