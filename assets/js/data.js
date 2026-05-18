/* ============================================================
   HQC · 3e secondaire — Données — v1.18.0 (mai 2026)
   58 questions · 4 périodes · 7 OI
   Couverture : P1 = 14 (7/7 OI), P2 = 21 (7/7 OI), P3 = 15 (7/7 OI), P4 = 8 (7/7 OI) ⭐
   v1.18.0 — +7 questions P4 (PDF Questions courtes 1791-1840). P4 complétée à 7/7 OI ⭐
   (toutes les 7 OI ajoutées : faits, situer, différences, causes, changements, relation, causalité).
   Aucune nouvelle réglette nécessaire — réutilisation des constantes existantes.
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
      imageUrl: "assets/img/revendications-changements-1/doc1.png", imageWidthCm: 13,
      sources: ["Source des graphiques : Service national du RÉCIT, domaine de l'univers social. Licence : Creative Commons (BY-NC-SA)."] }
  ],

  // ===== P4 — Causes et conséquences — Q3 : cause de propagation des épidémies =====
  'revendications-causes-1': [
    { id: "rv-c1-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/revendications-causes-1/doc1.png", imageWidthCm: 11,
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
  // Renumérotation : doc 1 = Vallerand (était doc 6), doc 2 = cartes castors (était doc 8),
  // doc 3 = Hudson Bay Company (était doc 13).
  'revendications-causalite-1': [
    { id: "rv-ca1-d1", title: "Document 1", layout: "text-only",
      text: "« Alors que les profits baissent, le climat concurrentiel provoque une hausse des frais d'exploitation; de plus, l'épuisement progressif des ressources en castors oblige les exploitants à s'éloigner de plus en plus de leurs centres de ralliement, ce qui augmente sans cesse les coûts de transport. »",
      sources: ["Source du texte : Noël Vallerand et Robert Lahaise, L'Amérique du Nord britannique, 1760-1867, Montréal, Kébékédit, 1974, p. 73."] },
    { id: "rv-ca1-d2", title: "Document 2 : Concurrence et réorganisation, de 1760 à 1825", layout: "image-only",
      imageUrl: "assets/img/revendications-causalite-1/doc2.png", imageWidthCm: 13,
      sources: ["Source des cartes : Concurrence et réorganisation de 1760 à 1825, L'Atlas canadien en ligne. La zone rouge indique les territoires où les castors sont encore classifiés abondants (1780 à gauche, 1820 à droite)."] },
    { id: "rv-ca1-d3", title: "Document 3", layout: "text-only",
      text: "« [Les deux compagnies] mettent tous leurs efforts à se faire concurrence, si bien que ni l'une ni l'autre ne progresse vraiment. [La Compagnie de la Baie d'Hudson] ayant accès à d'importantes ressources financières, elle peut supporter les temps durs, attendre et voir la [Compagnie du Nord Ouest] épuiser ses ressources. Les dirigeants des deux rivales savent qu'il faut trouver une solution et amorcent les discussions en vue d'une fusion. »",
      sources: ["Source du texte : Hudson Bay Company, « Commerce des fourrures : Compagnie du Nord Ouest », Notre histoire, en ligne."] }
  ],

  // ===== P4 — Situer dans le temps — Q7 : avant/après les résolutions Russell (1837) =====
  // Renumérotation : doc 1 = 92 résolutions (était doc 2, Avant), doc 2 = Nelson (était doc 3, Après),
  // doc 3 = Crise des subsides (était doc 4, Avant), doc 4 = Attaque St-Charles (était doc 5, Après).
  'revendications-situer-2': [
    { id: "rv-s2-d1", title: "Document 1 : Les 92 résolutions (1834)", layout: "image-only",
      imageUrl: "assets/img/revendications-situer-2/doc1.png", imageWidthCm: 13,
      sources: ["Source du tableau : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "rv-s2-d2", title: "Document 2 : Déclaration d'indépendance du Bas-Canada (1838)", layout: "text-only",
      text: "Alors qu'il est réfugié aux États-Unis, Robert Nelson rentre au Bas-Canada pour un court moment afin d'en déclarer l'indépendance. Voici un extrait de cette déclaration : « DÉCLARONS SOLENNELLEMENT Qu'à compter de ce jour et à l'avenir, le peuple du Canada est absous de toute allégeance avec la Grande-Bretagne, et que la connexion politique entre cette puissance et le Bas-Canada est maintenant dissoute. Que le gouvernement du Bas-Canada doit prendre la forme d'un gouvernement républicain et se déclare maintenant, de fait, république. »",
      sources: ["Source du texte : Robert Nelson, Déclaration d'indépendance du Bas-Canada, dans Marc Chevrier, Louis-Georges Harvey et Samuel Trudeau (dir.), De la république en Amérique française, Sillery, Septentrion, 2013, p. 62-65."] },
    { id: "rv-s2-d3", title: "Document 3 : La crise des subsides au Bas-Canada", layout: "image-only",
      imageUrl: "assets/img/revendications-situer-2/doc3.png", imageWidthCm: 13,
      sources: ["Source de l'image : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "rv-s2-d4", title: "Document 4 : L'attaque contre Saint-Charles (novembre 1837)", layout: "image-only",
      imageUrl: "assets/img/revendications-situer-2/doc4.png", imageWidthCm: 11,
      sources: ["Source de l'image : Charles Beauclerk, L'attaque contre St-Charles, Bibliothèque et Archives Canada, C-000393, MIKAN 2837361. Licence : image du domaine public."] }
  ],

  // ===== P4 — Situer dans l'espace — Cartes Acte constitutionnel 1791 =====
  'revendications-situer-1': [
    { id: "rv-s1-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/revendications-situer-1/doc1.png", imageWidthCm: 8,
      sources: ["Source de l'image : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "rv-s1-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/revendications-situer-1/doc2.png", imageWidthCm: 8,
      sources: ["Source de l'image : Service national du RÉCIT, domaine de l'univers social."] }
  ]

};

// ============ EXPORT ============
window.DATA = {

  realites_sociales: [
    { id: "experience-autochtones-projet-colonie", titre: "L'expérience des Autochtones et le projet de colonie", niveau: 1 },
    { id: "evolution-societe-coloniale",          titre: "L'évolution de la société coloniale sous l'autorité de la métropole française", niveau: 2 },
    { id: "conquete-changement-empire",           titre: "La Conquête et le changement d'empire", niveau: 3 },
    { id: "revendications-luttes-nationales",     titre: "Les revendications et les luttes nationales", niveau: 4 }
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
    { id: "q-experience-autochtones-relation-1", operation: "Mettre en relation des faits", numero: 1, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Indique si les documents 1 à 4 correspondent à la famille linguistique algonquienne ou à la famille linguistique iroquoienne.",
        responseSpace: { type: "category-buckets", categories: ["Famille algonquienne", "Famille iroquoienne"], slots: [2, 2] }
      },
      reglettes: [{ id: "r-ea-r1", label: "Réglette (2 points)", ...R_RELATION_2PT_4_PART }],
      documents: pickDocs('experience-autochtones-relation-1', 1, 2, 3, 4),
      corrige: [["Document 1", "Document 2"], ["Document 3", "Document 4"]] },

    // ===== Q2 — P1 · Situer dans le temps et dans l'espace =====
    { id: "q-experience-autochtones-situer-1", operation: "Situer dans le temps et dans l'espace", numero: 1, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Indique si les documents 1 à 4 sont antérieurs ou postérieurs à 1541 (Fondation de Charlesbourg-Royal par Jacques Cartier).",
        responseSpace: { type: "before-after-axis", beforeLabel: "Antériorité", afterLabel: "Postériorité", pivot: "Fondation de Charlesbourg-Royal (1541)", slots: { before: 2, after: 2 } }
      },
      reglettes: [{ id: "r-ea-s1", label: "Réglette (2 points)", ...R_SITUER_2PT_T4 }],
      documents: pickDocs('experience-autochtones-situer-1', 1, 2, 3, 4),
      corrige: { before: ["Document 1", "Document 3"], after: ["Document 2", "Document 4"] } },

    // ===== Q3 — P1 · Établir des faits =====
    { id: "q-experience-autochtones-faits-1", operation: "Établir des faits", numero: 1, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Chez les populations autochtones, les aînés occupent une place importante, car ils transmettent des croyances et des récits reliés à leur conception du monde. Nomme un moyen qui permet de faire cette transmission.",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-ea-f1", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('experience-autochtones-faits-1', 1),
      corrige: "La tradition orale." },

    // ===== P1 · Dégager des différences et des similitudes — Q-A · Français vs Innus à Uepishtikuiau =====
    { id: "q-experience-autochtones-differences-1", operation: "Dégager des différences et des similitudes", numero: 1, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Les documents 1 à 3 présentent les points de vue des Français et des Innus face à l'établissement d'une habitation sur le site de Uepishtikuiau. Détermine une différence entre ces points de vue.",
        responseSpace: { type: "lines", count: 5 }
      },
      reglettes: [{ id: "r-ea-d1", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_GEN }],
      documents: pickDocs('experience-autochtones-differences-1', 1, 2, 3),
      corrige: "L'analyse des écrits de Samuel de Champlain soutient que l'alliance de 1603 lui permet de construire une habitation sur le site de Uepishtikuiau sans l'opposition des Innus, alors que la tradition orale innue soutient que les Innus refusent d'abord l'installation des Français et que ces derniers les repoussent progressivement une fois installés." },

    // ===== P1 · Dégager des différences et des similitudes — Q-B · Prise de décisions algonquiennes vs iroquoiennes =====
    { id: "q-experience-autochtones-differences-2", operation: "Dégager des différences et des similitudes", numero: 2, niveau: 1,
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
    { id: "q-experience-autochtones-situer-2", operation: "Situer dans le temps et dans l'espace", numero: 2, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Les documents 1 à 3 présentent des événements liés au peuplement de l'Amérique. Place-les en ordre chronologique du plus ancien au plus récent.",
        responseSpace: { type: "chrono-ordering", items: ["Plus ancien", "Intermédiaire", "Plus récent"] }
      },
      reglettes: [{ id: "r-ea-s2", label: "Réglette (2 points)", ...R_SITUER_2PT_T3 }],
      documents: pickDocs('experience-autochtones-situer-2', 1, 2, 3),
      corrige: ["Document 3", "Document 1", "Document 2"] },

    // ===== P1 · Déterminer des causes et des conséquences — Q-D · Causes du premier voyage de Cartier =====
    { id: "q-experience-autochtones-causes-1", operation: "Déterminer des causes et des conséquences", numero: 1, niveau: 1,
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
    { id: "q-experience-autochtones-faits-2", operation: "Établir des faits", numero: 2, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Selon le document 1, sur quoi se base le pouvoir des chefs dans les sociétés autochtones ?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ea-f2", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('experience-autochtones-faits-2', 1),
      corrige: "Le pouvoir des chefs repose sur leur éloquence (capacité de persuasion) ou sur leurs compétences de chasseur leur permettant d'approvisionner leur clan." },

    // ===== P1 · Situer dans le temps et dans l'espace — Q-F · Chronologie des explorations européennes =====
    { id: "q-experience-autochtones-situer-3", operation: "Situer dans le temps et dans l'espace", numero: 3, niveau: 1,
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
    { id: "q-experience-autochtones-differences-3", operation: "Dégager des différences et des similitudes", numero: 3, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Les documents 1 à 3 présentent le mode de vie de trois peuples autochtones. Nomme le peuple qui possède un mode de vie différent et compare son mode de vie avec celui des deux autres.",
        responseSpace: { type: "lines", count: 5 }
      },
      reglettes: [{ id: "r-ea-d3", label: "Réglette (3 points)", ...R_DIFFSIM_3PT_PEUPLE_DIFFERENT }],
      documents: pickDocs('experience-autochtones-differences-3', 1, 2, 3),
      corrige: "Le document 1 présente les Iroquoiens, qui sont sédentaires : ils cultivent la terre et déplacent leurs villages tous les 10 à 15 ans selon l'épuisement des sols. Les Algonquiens (document 2) et les Inuits (document 3) sont nomades : ils se déplacent en bandes pour suivre le gibier et changent d'habitations selon les saisons." },

    // ===== P1 · Déterminer des changements et des continuités — Q-H · Transformation des réseaux d'échange =====
    { id: "q-experience-autochtones-changements-1", operation: "Déterminer des changements et des continuités", numero: 1, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Au début du 16e siècle, les Autochtones possèdent de nombreux réseaux d'échange. Comment cette situation se transforme-t-elle après l'arrivée des Européens ?",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-ea-cc1", label: "Réglette (2 points)", ...R_CHANGEMENTS_2PT_GEN }],
      documents: pickDocs('experience-autochtones-changements-1', 1, 2),
      corrige: "Le commerce des fourrures entre Européens et Autochtones s'intègre aux réseaux commerciaux déjà existants des Autochtones, et des produits européens (outils en fer, armes, chaudrons de cuivre) entrent en circulation dans ces réseaux d'échange." },

    // ===== P1 · Déterminer des causes et des conséquences — Q-I · Échec des tentatives d'établissement français =====
    { id: "q-experience-autochtones-causes-2", operation: "Déterminer des causes et des conséquences", numero: 2, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Pourquoi certaines tentatives d'établissement des Français en Amérique entre 1534 et 1603 se sont soldées par un échec ?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ea-c2", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('experience-autochtones-causes-2', 1),
      corrige: "Le scorbut décime une partie importante des colons français (document 1). Les hivers rigoureux sont également difficiles à surmonter pour les premiers établissements." },

    // ===== P1 · Mettre en relation des faits — Q-J · Partage des tâches Algonquiens vs Iroquoiens =====
    { id: "q-experience-autochtones-relation-2", operation: "Mettre en relation des faits", numero: 2, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Indique à l'endroit approprié le numéro du document qui correspond au partage des tâches chez chacune des nations autochtones.",
        responseSpace: { type: "category-buckets", categories: ["Chez les Algonquiens", "Chez les Iroquoiens"], slots: [1, 1] }
      },
      reglettes: [{ id: "r-ea-r2", label: "Réglette (2 points)", ...R_RELATION_2PT_2_PART }],
      documents: pickDocs('experience-autochtones-relation-2', 1, 2),
      corrige: [["Document 2"], ["Document 1"]] },

    // ===== P1 · Établir des liens de causalité — Q-K · Alliance franco-amérindienne de 1603 et conséquences pour les Iroquois =====
    { id: "q-experience-autochtones-causalite-1", operation: "Établir des liens de causalité", numero: 1, niveau: 1,
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
    { id: "q-evolution-coloniale-causalite-1", operation: "Établir des liens de causalité", numero: 1, niveau: 2,
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
    { id: "q-evolution-coloniale-situer-1", operation: "Situer dans le temps et dans l'espace", numero: 1, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Les documents 1 et 2 illustrent des faits relatifs à la Conquête. Inscris le numéro des documents à l'endroit approprié, selon qu'ils présentent des faits survenus avant ou après la bataille des Plaines d'Abraham.",
        responseSpace: { type: "before-after-axis", beforeLabel: "Avant", afterLabel: "Après", pivot: "Bataille des Plaines d'Abraham", slots: { before: 1, after: 1 } }
      },
      reglettes: [{ id: "r-ec-s1", label: "Réglette (1 point)", ...R_SITUER_1PT_T2 }],
      documents: pickDocs('evolution-coloniale-situer-1', 1, 2),
      corrige: { before: ["Document 1"], after: ["Document 2"] } },

    // ===== P2 · Dégager des différences et des similitudes — Désaccord d'historiens sur Talon =====
    { id: "q-evolution-coloniale-differences-1", operation: "Dégager des différences et des similitudes", numero: 1, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Les documents 1 et 2 présentent les interprétations de deux historiens concernant les réalisations de l'intendant Jean Talon. Indique le point précis sur lequel ils sont en désaccord.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ec-d1", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_GEN }],
      documents: pickDocs('evolution-coloniale-differences-1', 1, 2),
      corrige: "Les historiens sont en désaccord sur la réussite des réalisations de Talon en Nouvelle-France." },

    // ===== P2 · Mettre en relation des faits — Importance géographique et rôle économique de Montréal =====
    { id: "q-evolution-coloniale-relation-1", operation: "Mettre en relation des faits", numero: 1, niveau: 2,
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
    { id: "q-evolution-coloniale-differences-2", operation: "Dégager des différences et des similitudes", numero: 2, niveau: 2,
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
    { id: "q-evolution-coloniale-causes-1", operation: "Déterminer des causes et des conséquences", numero: 1, niveau: 2,
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
    { id: "q-evolution-coloniale-causes-2", operation: "Déterminer des causes et des conséquences", numero: 2, niveau: 2,
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
    { id: "q-evolution-coloniale-causes-3", operation: "Déterminer des causes et des conséquences", numero: 3, niveau: 2,
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
    { id: "q-evolution-coloniale-differences-3", operation: "Dégager des différences et des similitudes", numero: 3, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Les documents 1 et 2 présentent les positions de deux historiens sur le régime seigneurial. Sur quel point précis sont-ils en désaccord ?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ec-d3", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_GEN }],
      documents: pickDocs('evolution-coloniale-differences-3', 1, 2),
      corrige: "Marcel Trudel et Benoît Grenier ne s'entendent pas sur le rôle de la seigneurie. Marcel Trudel soutient qu'il s'agit d'un système d'entraide alors que Benoît Grenier considère qu'il s'agit d'un système de domination de l'élite coloniale et des seigneurs sur les censitaires." },

    // ===== P2 · Dégager des différences et des similitudes — Point d'accord sur les causes de l'épidémie de la Huronie =====
    { id: "q-evolution-coloniale-differences-4", operation: "Dégager des différences et des similitudes", numero: 4, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Les documents 1 et 2 relatent les causes de l'épidémie qui a touché la Huronie vers 1650. Sur quel point précis ces documents sont-ils d'accord ?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ec-d4", label: "Réglette (2 points)", ...R_SIMILITUDES_2PT_CONVERGENCE }],
      documents: pickDocs('evolution-coloniale-differences-4', 1, 2),
      corrige: "Les deux documents s'entendent pour dire que ce sont les contacts avec les missionnaires qui ont provoqué les épidémies dans les villages autochtones hurons-wendats." },

    // ===== P2 · Établir des faits — Mode d'occupation du territoire =====
    { id: "q-evolution-coloniale-faits-1", operation: "Établir des faits", numero: 1, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Selon le document 1, quel mode d'occupation du territoire est implanté en Nouvelle-France par les autorités coloniales ?",
        responseSpace: { type: "lines", count: 1 }
      },
      reglettes: [{ id: "r-ec-f1", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('evolution-coloniale-faits-1', 1),
      corrige: "Le régime seigneurial OU la seigneurie OU le régime féodal." },

    // ===== P2 · Établir des liens de causalité — Établissement de la Grande Paix de Montréal en 1701 =====
    { id: "q-evolution-coloniale-causalite-2", operation: "Établir des liens de causalité", numero: 2, niveau: 2,
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
    { id: "q-evolution-coloniale-situer-2", operation: "Situer dans le temps et dans l'espace", numero: 2, niveau: 2,
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
    { id: "q-evolution-coloniale-faits-2", operation: "Établir des faits", numero: 2, niveau: 2,
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
    { id: "q-evolution-coloniale-changements-1", operation: "Déterminer des changements et des continuités", numero: 1, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Indique une continuité qui marque le développement économique de la Nouvelle-France.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ec-cc1", label: "Réglette (2 points)", ...R_CONTINUITES_2PT_GEN }],
      documents: pickDocs('evolution-coloniale-changements-1', 1, 2),
      corrige: "Le commerce des fourrures est une activité économique présente durant toute la période (documents 1 et 2)." },

    // ===== P2 · Causes et conséquences — Q3 : effet des guerres iroquoises =====
    { id: "q-evolution-coloniale-causes-4", operation: "Déterminer des causes et des conséquences", numero: 4, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "Indique un effet des guerres iroquoises sur l'économie de la Nouvelle-France.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-ec-cs4", label: "Réglette (2 points)", ...R_CAUSES_2PT_CONS_SEULE }],
      documents: pickDocs('evolution-coloniale-causes-4', 1),
      corrige: "Les guerres iroquoises empêchent (ou ralentissent) le commerce des fourrures (document 1)." },

    // ===== P2 · Mettre en relation — Q4 : rôles de l'Église =====
    { id: "q-evolution-coloniale-relation-2", operation: "Mettre en relation des faits", numero: 2, niveau: 2,
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
    { id: "q-evolution-coloniale-situer-3", operation: "Situer dans le temps et dans l'espace", numero: 3, niveau: 2,
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
    { id: "q-evolution-coloniale-differences-5", operation: "Dégager des différences et des similitudes", numero: 5, niveau: 2,
      realite_sociale_id: "evolution-societe-coloniale",
      questionBody: {
        prompt: "À partir des documents 1 et 2, indique une similitude entre le rôle du censitaire et celui du seigneur dans le régime seigneurial.",
        responseSpace: { type: "lines", count: 4 }
      },
      reglettes: [{ id: "r-ec-d5", label: "Réglette (2 points)", ...R_SIMILITUDES_2PT_GEN }],
      documents: pickDocs('evolution-coloniale-differences-5', 1, 2),
      corrige: "Le seigneur et le censitaire ont tous deux des droits : droit de se faire octroyer une terre (censitaire) et droit de percevoir le cens et les autres redevances (seigneur)." },

    // ===== P2 · Liens de causalité — Q7 : produits européens et guerres Hurons/Iroquois =====
    { id: "q-evolution-coloniale-causalite-3", operation: "Établir des liens de causalité", numero: 3, niveau: 2,
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
    { id: "q-evolution-coloniale-situer-4", operation: "Situer dans le temps et dans l'espace", numero: 4, niveau: 2,
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
    { id: "q-conquete-differences-1", operation: "Dégager des différences et des similitudes", numero: 1, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "Les documents 1 et 2 présentent le point de vue de deux historiens. Sur quel point précis sont-ils d'accord ?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-cq-d1", label: "Réglette (2 points)", ...R_SIMILITUDES_2PT_CONVERGENCE }],
      documents: pickDocs('conquete-differences-1', 1, 2),
      corrige: "Les deux historiens s'entendent pour dire que plusieurs milliers de Canadiens français sont partis de la colonie à la suite de la Conquête." },

    // ===== Q7 — P3 · Déterminer des causes et des conséquences =====
    { id: "q-conquete-causes-1", operation: "Déterminer des causes et des conséquences", numero: 1, niveau: 3,
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
    { id: "q-conquete-causes-2", operation: "Déterminer des causes et des conséquences", numero: 2, niveau: 3,
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
    { id: "q-conquete-differences-2", operation: "Dégager des différences et des similitudes", numero: 2, niveau: 3,
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
    { id: "q-conquete-situer-1", operation: "Situer dans le temps et dans l'espace", numero: 1, niveau: 3,
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
    { id: "q-conquete-relation-1", operation: "Mettre en relation des faits", numero: 1, niveau: 3,
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
    { id: "q-conquete-causes-3", operation: "Déterminer des causes et des conséquences", numero: 3, niveau: 3,
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
    { id: "q-conquete-faits-1", operation: "Établir des faits", numero: 1, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "À quelle religion fait référence le document 1?",
        responseSpace: { type: "lines", count: 2 }
      },
      reglettes: [{ id: "r-cq-f1", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('conquete-faits-1', 1),
      corrige: "À la religion anglicane ou à la religion protestante." },

    // ===== P3 · Changements et continuités — Q2 : changement politique en 1763 =====
    { id: "q-conquete-changements-1", operation: "Déterminer des changements et des continuités", numero: 1, niveau: 3,
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
    { id: "q-conquete-causes-4", operation: "Déterminer des causes et des conséquences", numero: 4, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "Indique une cause politique de la révolte de Pontiac.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-cq-c4", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('conquete-causes-4', 1),
      corrige: "La conquête de la Nouvelle-France par l'Angleterre, ou le départ des Français de la région des Grands Lacs (document 1)." },

    // ===== P3 · Situer dans l'espace — Q4 : carte A/B/C/D (région de traite perdue) =====
    { id: "q-conquete-situer-2", operation: "Situer dans le temps et dans l'espace", numero: 2, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "À partir du document 1, identifie la lettre qui correspond à la région de traite des fourrures perdue par la Province of Quebec au moment de la Proclamation royale.",
        responseSpace: { type: "lines", count: 1 }
      },
      reglettes: [{ id: "r-cq-s2", label: "Réglette (2 points)", ...R_SITUER_2PT_SP_FAIT }],
      documents: pickDocs('conquete-situer-2', 1),
      corrige: "A" },

    // ===== P3 · Différences et similitudes — Q5 : désaccord Carleton vs marchands de Québec =====
    { id: "q-conquete-differences-3", operation: "Dégager des différences et des similitudes", numero: 3, niveau: 3,
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
    { id: "q-conquete-relation-2", operation: "Mettre en relation des faits", numero: 2, niveau: 3,
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
    { id: "q-conquete-causalite-1", operation: "Établir des liens de causalité", numero: 1, niveau: 3,
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
    { id: "q-conquete-situer-3", operation: "Situer dans le temps et dans l'espace", numero: 3, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "Les documents 1 à 4 font référence à des événements politiques du Régime britannique. Indique si les faits présentés dans ces documents se déroulent avant ou après l'Acte de Québec.",
        responseSpace: { type: "before-after-axis", beforeLabel: "Avant", afterLabel: "Après", pivot: "L'Acte de Québec (1774)", slots: { before: 2, after: 2 } }
      },
      reglettes: [{ id: "r-cq-s3", label: "Réglette (2 points)", ...R_SITUER_2PT_T4_BINAIRE }],
      documents: pickDocs('conquete-situer-3', 1, 2, 3, 4),
      corrige: { before: ["Document 2", "Document 3"], after: ["Document 1", "Document 4"] } },

    // ===== Q8 — P4 · Situer dans le temps et dans l'espace =====
    { id: "q-revendications-situer-1", operation: "Situer dans le temps et dans l'espace", numero: 1, niveau: 4,
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
    { id: "q-revendications-faits-1", operation: "Établir des faits", numero: 1, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Que nous apprend le document 1 sur la participation des Canadiens à la guerre anglo-américaine de 1812?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-rv-f1", label: "Réglette (1 point)", ...R_FAITS_1PT_1SUR1 }],
      documents: pickDocs('revendications-faits-1', 1),
      corrige: "La population est apathique, c'est-à-dire qu'elle manifeste un manque d'enthousiasme pour la guerre." },

    // ===== P4 · Changements et continuités — Q2 : proportion anglophone qui s'accroît =====
    { id: "q-revendications-changements-1", operation: "Déterminer des changements et des continuités", numero: 1, niveau: 4,
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
    { id: "q-revendications-causes-1", operation: "Déterminer des causes et des conséquences", numero: 1, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Indique une cause de propagation des épidémies au 19e siècle.",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-rv-c1", label: "Réglette (2 points)", ...R_CAUSES_2PT_GEN_1CAUSE }],
      documents: pickDocs('revendications-causes-1', 1),
      corrige: "La promiscuité (ou le manque d'hygiène) dans les navires qui transportent les immigrants vers le Canada (document 1)." },

    // ===== P4 · Différences et similitudes — Q4 : désaccord Durham vs Le Canadien =====
    { id: "q-revendications-differences-1", operation: "Dégager des différences et des similitudes", numero: 1, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Sur quel point précis les auteurs des documents 1 et 2 sont-ils en désaccord?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-rv-d1", label: "Réglette (2 points)", ...R_DIFFERENCES_2PT_DIVERGENCE }],
      documents: pickDocs('revendications-differences-1', 1, 2),
      corrige: "Sur le projet d'union du Haut et du Bas-Canada." },

    // ===== P4 · Mettre en relation — Q5 : associer document à idéologie politique =====
    { id: "q-revendications-relation-1", operation: "Mettre en relation des faits", numero: 1, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Inscris à l'endroit approprié le numéro du document correspondant à chacune des idéologies politiques ci-dessous.",
        responseSpace: { type: "category-buckets", categories: ["Républicanisme", "Nationalisme canadien"], slots: [1, 1] }
      },
      reglettes: [{ id: "r-rv-r1", label: "Réglette (2 points)", ...R_RELATION_2PT_2_PART }],
      documents: pickDocs('revendications-relation-1', 1, 2),
      corrige: [["Document 1"], ["Document 2"]] },

    // ===== P4 · Liens de causalité — Q6 : coût du commerce des fourrures → fusion des compagnies =====
    { id: "q-revendications-causalite-1", operation: "Établir des liens de causalité", numero: 1, niveau: 4,
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
      documents: pickDocs('revendications-causalite-1', 1, 2, 3),
      corrige: "La population de castors étant de plus en plus rare, le territoire de traite des fourrures est en expansion (documents 1 et 2). Cela entraîne une hausse importante des coûts pour les compagnies de traite des fourrures concurrentes (document 1). En raison de cette hausse des coûts, les deux principales compagnies de traite fusionnent, car la Compagnie du Nord-Ouest manque de ressources financières et ne peut plus soutenir la concurrence (document 3)." },

    // ===== P4 · Situer dans le temps — Q7 : avant/après les résolutions Russell (1837) =====
    // Renumérotation depuis le PDF source (docs 2, 3, 4, 5) — ordre conservé.
    // Avant : Doc 1 (92 résolutions, 1834) et Doc 3 (crise des subsides, conflit antérieur).
    // Après : Doc 2 (déclaration d'indépendance, 1838) et Doc 4 (attaque St-Charles, novembre 1837).
    { id: "q-revendications-situer-2", operation: "Situer dans le temps et dans l'espace", numero: 2, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "Les documents 1 à 4 font référence à des événements politiques du Régime britannique. Indique si les faits présentés dans ces documents se déroulent avant ou après l'adoption des résolutions Russell par le parlement de Londres.",
        responseSpace: { type: "before-after-axis", beforeLabel: "Avant", afterLabel: "Après", pivot: "Les résolutions Russell (1837)", slots: { before: 2, after: 2 } }
      },
      reglettes: [{ id: "r-rv-s2", label: "Réglette (2 points)", ...R_SITUER_2PT_T4 }],
      documents: pickDocs('revendications-situer-2', 1, 2, 3, 4),
      corrige: { before: ["Document 1", "Document 3"], after: ["Document 2", "Document 4"] } }

  ]
};

})();
