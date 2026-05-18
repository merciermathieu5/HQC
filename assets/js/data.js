/* ============================================================
   HQC · 3e secondaire — Données
   Test catalogue · Évaluation ESRDL — Été 2022 (8 questions)
   Périodes couvertes : 1, 2, 3, 4 (toutes)
   OI couvertes : 6/7 (manque : Déterminer des changements et continuités)
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

// — Mettre en relation des faits —
const R_RELATION_2PT_4_PART = rubric3(
  "Mettre en relation des faits",
  "L'élève met en relation tous les faits. (4 sur 4)",
  "L'élève met partiellement en relation les faits. (1, 2 ou 3 sur 4)",
  "L'élève ne met pas en relation les faits. (0 sur 4)"
);

// — Déterminer des causes et des conséquences —
const R_CAUSES_2PT_CAUSE_CONS = rubric3(
  "Déterminer des causes et des conséquences",
  "L'élève détermine correctement la cause et la conséquence.",
  "L'élève détermine la cause ou la conséquence.",
  "L'élève détermine incorrectement la cause et la conséquence."
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

// Dégager une différence (2 points) — Q-A : Français vs Innus à Uepishtikuiau.
const R_DIFFERENCES_2PT_GEN = rubric3(
  "Dégager des différences et des similitudes",
  "L'élève dégage correctement la différence.",
  "L'élève dégage plus ou moins correctement la différence.",
  "L'élève dégage incorrectement la différence ou ne la dégage pas."
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

  // ===== P4 — Situer dans l'espace — Cartes Acte constitutionnel 1791 =====
  'revendications-situer-1': [
    { id: "rv-s1-d1", title: "Document 1", layout: "image-only",
      imageUrl: "assets/img/revendications-situer-1/doc1.png", imageWidthCm: 7,
      sources: ["Source de l'image : Service national du RÉCIT, domaine de l'univers social."] },
    { id: "rv-s1-d2", title: "Document 2", layout: "image-only",
      imageUrl: "assets/img/revendications-situer-1/doc2.png", imageWidthCm: 7,
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
        prompt: "À l'aide des documents 1 à 3, indique des similitudes et des différences dans la prise de décisions chez les nations algonquiennes et iroquoiennes.",
        responseSpace: { type: "labeled-list", items: ["Similitudes", "Différences"], linesPerItem: 4 }
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
        prompt: "Les documents 1 à 4 font référence aux explorations des Européens en Amérique du Nord-Est. Place-les en ordre chronologique du plus ancien au plus récent.",
        responseSpace: { type: "chrono-ordering", items: ["1er", "2e", "3e", "4e"] }
      },
      reglettes: [{ id: "r-ea-s3", label: "Réglette (2 points)", ...R_SITUER_2PT_T4 }],
      documents: pickDocs('experience-autochtones-situer-3', 1, 2, 3, 4),
      // Ordre : Doc 2 (Vikings ~1000) → Doc 4 (Cabot 1498) → Doc 3 (Cartier 1534) → Doc 1 (Chauvin 1600)
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
        prompt: "Nomme une cause expliquant l'échec des tentatives d'établissement des Français en Amérique entre 1534 et 1603.",
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

    // ===== Q8 — P4 · Situer dans le temps et dans l'espace =====
    { id: "q-revendications-situer-1", operation: "Situer dans le temps et dans l'espace", numero: 1, niveau: 4,
      realite_sociale_id: "revendications-luttes-nationales",
      questionBody: {
        prompt: "À l'aide des cartes des documents 1 et 2, indique laquelle correspond à l'organisation territoriale après l'Acte constitutionnel de 1791.",
        responseSpace: { type: "lines", count: 1 }
      },
      reglettes: [{ id: "r-rv-s1", label: "Réglette (1 point)", ...R_SITUER_1PT_SP_DOC }],
      documents: pickDocs('revendications-situer-1', 1, 2),
      corrige: "Document 2 (carte présentant la division Bas-Canada / Haut-Canada)." }

  ]
};

})();
