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
  'conquete-differences-1': [
    { id: "cq-d1-d1", title: "Document 1", layout: "text-only",
      text: "« On calcule qu'au moins deux mille Canadiens quittèrent leur pays natal durant les dix années qui suivirent la capitulation de Montréal. [...] Pour la masse de la population canadienne, il n'était pas question d'émigrer. »\nMichel Brunet, 1966\n\n« [...] environ 4000 Canadiens ont émigré en France entre 1755 et 1770, soit environ 5 % de la population de la vallée du Saint-Laurent [...] »\nRobert Larin, 2009",
      sources: [
        "Source : Michel BRUNET, Les Canadiens et les débuts de la domination britannique, 1760-1791, Ottawa, Société historique du Canada, 1966, p. 6. (Coll. Brochures historiques; no 13).",
        "Source : Robert LARIN, « L'exode de la Conquête », Cap-aux-Diamants : la revue d'histoire du Québec, no 99, septembre 2009, p. 41."
      ] }
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
        responseSpace: { type: "category-buckets", categories: ["Famille algonquienne", "Famille iroquoienne"] }
      },
      reglettes: [{ id: "r-ea-r1", label: "Réglette (2 points)", ...R_RELATION_2PT_4_PART }],
      documents: pickDocs('experience-autochtones-relation-1', 1, 2, 3, 4),
      corrige: [["Document 1", "Document 2"], ["Document 3", "Document 4"]] },

    // ===== Q2 — P1 · Situer dans le temps et dans l'espace =====
    { id: "q-experience-autochtones-situer-1", operation: "Situer dans le temps et dans l'espace", numero: 1, niveau: 1,
      realite_sociale_id: "experience-autochtones-projet-colonie",
      questionBody: {
        prompt: "Indique si les documents 1 à 4 sont antérieurs ou postérieurs à 1541 (Fondation de Charlesbourg-Royal par Jacques Cartier).",
        responseSpace: { type: "before-after-axis", beforeLabel: "Antériorité", afterLabel: "Postériorité", pivot: "Fondation de Charlesbourg-Royal (1541)" }
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
        responseSpace: { type: "before-after-axis", beforeLabel: "Avant", afterLabel: "Après", pivot: "Bataille des Plaines d'Abraham" }
      },
      reglettes: [{ id: "r-ec-s1", label: "Réglette (1 point)", ...R_SITUER_1PT_T2 }],
      documents: pickDocs('evolution-coloniale-situer-1', 1, 2),
      corrige: { before: ["Document 1"], after: ["Document 2"] } },

    // ===== Q6 — P3 · Dégager des différences et des similitudes =====
    { id: "q-conquete-differences-1", operation: "Dégager des différences et des similitudes", numero: 1, niveau: 3,
      realite_sociale_id: "conquete-changement-empire",
      questionBody: {
        prompt: "Le document 1 présente le point de vue de deux historiens. Sur quel point précis sont-ils d'accord ?",
        responseSpace: { type: "lines", count: 3 }
      },
      reglettes: [{ id: "r-cq-d1", label: "Réglette (2 points)", ...R_SIMILITUDES_2PT_CONVERGENCE }],
      documents: pickDocs('conquete-differences-1', 1),
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
