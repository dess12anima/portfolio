/* =====================================================
   DONNÉES : c'est ici que tu ajoutes / modifies tes projets.
   Un projet = { title, text, media: [ ... ] }
   Types de média :
     { t: 'img',   src: 'fichier.png', alt: 'description' }
     { t: 'video', src: 'fichier.mp4' }
     { t: 'yt',    id: 'IDYouTube' }
   ===================================================== */
const DATA = {

  /* ---------- NEW : mets ici tes projets les plus récents ---------- */
  new: [
    {
           title: "Chart graphique Abela",
      text: "Chart graphique de la marque fictive Abela : logo, couleurs, typographies et déclinaisons de l'identité visuelle.",
      media: [
        { t: 'img', src: 'Chart graphique Abela.png', alt: 'Chart graphique Abela 1' },
        { t: 'img', src: 'Chart graphique Abela2.png', alt: 'Chart graphique Abela 2' },
        { t: 'img', src: 'Chart graphique Abela3.png', alt: 'Chart graphique Abela 3' },
        { t: 'img', src: 'Chart graphique Abela4.png', alt: 'Chart graphique Abela 4' }
      ]
    },
    {
      title: "Pub Glitch",
      text: "Création d'une pub pour l'entreprise Glitch Production en équipe. J'ai réalisé le storyboard et animé les marionnettes. Je me suis aussi occupée de la caméra avec un autre membre de notre équipe.",
      media: [{ t: 'yt', id: 'bMLInFtgMm4' }]
    },
    {
      title: "Post pour l'Hôpital",
      text: "Collaboration entre l'hôpital Émile Roux et les 2ᵉ années MMI pour réaliser une campagne RSE sur le thème du handicap. Fait avec InDesign.",
      media: [
        { t: 'img', src: 'poste hopital.jpg', alt: 'Post hôpital' },
        { t: 'img', src: 'poste2.jpg', alt: 'Deuxième post hôpital' }
      ]
    }
  ],

  /* ---------- GRAPHISME ET COMMUNICATION ---------- */
  graphisme: [
    {
      title: "Logo de la Poussinière",
      text: "Collaboration avec l'association du Roi de l'Oiseau, pour laquelle nous avons dû créer un nouveau logo pour sa filiale la Poussinière. L'objectif était de représenter au mieux la Poussinière, qui propose différents ateliers liés à l'ère médiévale : la création, la tannerie, le travail du bois, la couture et l'apprentissage des plantes. Fait avec Illustrator.",
      media: [{ t: 'img', src: 'Logo SAE.png', alt: 'Logo Poussinière' }]
    },
    {
      title: "Carousel Festival",
      text: "Carousel pour Instagram présentant deux infographies : la première sur le nombre total de festivals dans la région et leur répartition selon la saison, l'après-saison, l'avant-saison ou hors saison ; la seconde sur les 5 régions les plus visitées, avec le nombre de festivals qui s'y déroulent. Fait avec Illustrator et InDesign.",
      media: [
        { t: 'img', src: 'carousell-1.png', alt: 'Carousel Festival 1' },
        { t: 'img', src: 'carousell-2.png', alt: 'Carousel Festival 2' },
        { t: 'img', src: 'carousell-3.png', alt: 'Carousel Festival 3' },
        { t: 'img', src: 'carousell-4.png', alt: 'Carousel Festival 4' }
      ]
    },
    {
      title: "Carousel Olympique",
      text: "Carousel d'Instagram sur les olympiques de Paris, avec une infographie du top 6 des pays ayant le plus de médailles dans les olympiques de gymnastique artistique. Fait avec InDesign.",
      media: [
        { t: 'img', src: 'trophy-symbol-01.jpg', alt: 'Olympique 1' },
        { t: 'img', src: 'trophy-symbol-02.jpg', alt: 'Olympique 2' },
        { t: 'img', src: 'trophy-symbol-03.jpg', alt: 'Olympique 3' },
        { t: 'img', src: 'trophy-symbol-04.jpg', alt: 'Olympique 4' }
      ]
    },
    {
      title: "Interface - Magazine",
      text: "Proposition de la première page et quatrième page de couverture du magazine Interface avec un design moderne et épuré. Fait avec Krita.",
      media: [
        { t: 'img', src: 'interface premier couverture (1).JPG', alt: 'Interface Couverture' },
        { t: 'img', src: 'interfaces (1).JPG', alt: 'Interface Page 4' }
      ]
    },
    {
      title: "Mise en Page Article",
      text: "Mise en page d'une double page du magazine Interface avec typographie professionnelle et mise en page harmonieuse. Fait avec InDesign.",
      media: [{ t: 'img', src: 'pagearticle.png', alt: 'Mise en page article' }]
    },
    {
      title: "Glitch - Mug Thermique",
      text: "Création d'un logo pour un produit mug thermique avec une affiche pour présenter le produit de manière attrayante. Fait avec Krita.",
      media: [
        { t: 'img', src: 'CEB87815-6020-46DA-9DCB-43A5B359FC5A.jpg', alt: 'Glitch Mug' },
        { t: 'img', src: 'Decouvrer Nos Nouveaux Produits - 1.jpg', alt: 'Glitch Mug Affiche' }
      ]
    },
    {
      title: "Concept Art",
      text: "Collection du concept art de ma série personnelle. Fait avec Krita.",
      media: [
        { t: 'img', src: 'dessin grand.png', alt: 'Illustration 1' },
        { t: 'img', src: 'foret.png', alt: 'Illustration Forêt' },
        { t: 'img', src: 'desugne perso.png', alt: 'Design Personnage' },
        { t: 'img', src: 'iiiiii.png', alt: 'Illustration 4' },
        { t: 'img', src: 'model.png', alt: 'Modèle' }
      ]
    },
    {
      title: "Mise en Page - Burger King",
      text: "Mise en page d'une analyse sur la stratégie de communication de Burger King contre le harcèlement. Fait avec Krita.",
      media: [
        { t: 'img', src: 'burger king.png', alt: 'Burger King 1' },
        { t: 'img', src: 'burger king2.png', alt: 'Burger King 2' },
        { t: 'img', src: 'burger king3.png', alt: 'Burger King 3' }
      ]
    },
    {
      title: "Post pour l'Hôpital",
      text: "Collaboration entre l'hôpital Émile Roux et les 2ᵉ années MMI pour réaliser une campagne RSE. Avec mon groupe, nous avons choisi le thème du handicap, et voici les posts que j'ai réalisés. Fait avec InDesign.",
      media: [
        { t: 'img', src: 'poste hopital.jpg', alt: 'Post hôpital' },
        { t: 'img', src: 'poste2.jpg', alt: 'Deuxième post hôpital' }
      ]
    },
    {
      title: "Affiche Tatouage Réalité Augmentée",
      text: "Dans le cadre d'un projet scolaire, on a dû créer un tatouage qui s'animerait en réalité augmentée. Fait avec Krita, InDesign et EyeJack.",
      media: [{ t: 'img', src: 'Affichetatouage.jpg', alt: 'Affiche tatouage RA' }]
    }
  ],

  /* ---------- DÉVELOPPEMENT WEB ---------- */
  web: [
    {
      title: "Site Web HTML/CSS",
      text: "Développement d'un site web en HTML et CSS sur l'histoire d'un univers fantastique (Cyberpunk 2077), seule.",
      media: [{ t: 'img', src: 'web.png', alt: 'Site Web HTML' }]
    },
    {
      title: "Page Web Article",
      text: "Création d'une page web avec librairie et infographie interactive, seule.",
      media: [{ t: 'video', src: 'videoSAE303.mp4' }]
    },
    {
      title: "Page de Portfolio (boutons)",
      text: "Création d'une page web sur WordPress : présentation des boutons, seule.",
      media: [{ t: 'video', src: 'Bouton site book.mp4' }]
    },
    {
      title: "Page de Portfolio (pages)",
      text: "Création d'une page web sur WordPress : présentation des pages, seule.",
      media: [{ t: 'yt', id: 'tfMojAdaPfI' }]
    }
  ],

  /* ---------- 3D ---------- */
  '3d': [
    {
      title: "Modélisation 3D d'un personnage",
      text: "Création d'un modèle 3D de personnage avec des vêtements en autodidacte sur Blender.",
      media: [{ t: 'img', src: "Capture d'écran 2025-06-12 090547.png", alt: 'Modélisation 3D' }]
    },
    {
      title: "Modélisation 3D d'un personnage",
      text: "Création d'un modèle 3D de personnage avec armure en autodidacte sur Blender.",
      media: [{ t: 'img', src: "Capture d'écran 2025-06-12 090956.png", alt: 'Personnage avec armure' }]
    },
    {
      title: "Modélisation 3D d'un personnage",
      text: "Création d'un modèle 3D de personnage avec armure et textures en autodidacte sur Blender.",
      media: [{ t: 'img', src: 'model textur.png', alt: 'Personnage texturé' }]
    },
    {
      title: "Modélisation de produits 3D",
      text: "Différentes créations de produits pour une marque de chocolat au miel inventée : boîte de chocolats, sac pour transporter les produits, et une tasse.",
      media: [
        { t: 'img', src: 'instagrame.png', alt: 'Rendu 3D 1' },
        { t: 'img', src: 'untitled.png', alt: 'Rendu 3D 2' },
        { t: 'img', src: 'sac.png', alt: 'Rendu 3D 3' }
      ]
    }
  ],

  /* ---------- ANIMATION ---------- */
  animation: [
    {
      title: "Stage d'hiver 2020",
      text: "Film d'animation en stop motion réalisé lors d'un stage, créé de toutes pièces, du storyboard à la création des personnages et des décors, seule.",
      media: [{ t: 'yt', id: 'IGZV0v9hKzg' }]
    },
    {
      title: "The Guardian",
      text: "Création d'une animation sur After Effects pour présenter les différentes régions avec le nombre de festivals qui s'y déroulent et leur période (saison, avant-saison, après-saison, ou hors-saison) en anglais.",
      media: [{ t: 'yt', id: 'bpa1Y0Ee_9M' }]
    },
    {
      title: "Animation papier",
      text: "Animation en stop motion réalisée au lycée : j'ai conçu l'histoire, les personnages et effectué des recherches graphiques pour ce projet.",
      media: [{ t: 'video', src: 'bookBUT.mp4' }]
    },
    {
      title: "Animation 2D essai",
      text: "Courte animation 2D sur IbisPaint, mes premières expérimentations sur le mouvement.",
      media: [{ t: 'video', src: 'VID_20251009_081347_521.mp4' }]
    },
    {
      title: "Première animation",
      text: "Création d'une courte animation 2D pour m'entraîner.",
      media: [{ t: 'video', src: 'VID_20251009_081400_810.mp4' }]
    },
    {
      title: "Projet d'une série animée personnelle",
      text: "Projet personnel de création d'une série animée sur Krita.",
      media: [{ t: 'video', src: 'animatique.mkv' }]
    },
    {
      title: "Back to Memory Steampunk",
      text: "Création d'un teaser sur After Effects pour le jeu Back to Memory Steampunk 2077 créé par les étudiants de première année du BUT Informatique.",
      media: [{ t: 'yt', id: 'XvOsC1uv11E' }]
    },
    {
      title: "Pub Glitch",
      text: "Création d'une pub pour l'entreprise Glitch Production en équipe. J'ai réalisé le storyboard et animé les marionnettes. Je me suis aussi occupée de la caméra avec un autre membre de notre équipe.",
      media: [{ t: 'yt', id: 'bMLInFtgMm4' }]
    }
  ]
};

/* =====================================================
   LOGIQUE (pas besoin d'y toucher)
   ===================================================== */
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function makeMedia(m) {
  let node;
  if (m.t === 'img') {
    node = el('img');
    node.src = m.src;
    node.alt = m.alt || '';
    node.loading = 'lazy';
    node.addEventListener('click', () => openLightbox(node.src, node.alt));
  } else if (m.t === 'video') {
    node = el('video');
    node.src = m.src;
    node.controls = true;
    node.muted = true;
    node.preload = 'metadata';
  } else {
    node = el('iframe');
    node.src = 'https://www.youtube.com/embed/' + m.id;
    node.loading = 'lazy';
    node.allowFullscreen = true;
    node.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    node.title = 'Vidéo YouTube';
  }
  return node;
}

function makeCard(item) {
  const card = el('article', 'pf-card');
  const media = el('div', 'pf-media');
  const nodes = item.media.map(makeMedia);
  nodes.forEach(n => media.appendChild(n));
  nodes[0].classList.add('on');

  if (nodes.length > 1) {
    let i = 0;
    const dots = el('div', 'pf-dots');
    nodes.forEach(() => dots.appendChild(el('span')));
    dots.children[0].classList.add('on');
    const go = n => {
      i = (n + nodes.length) % nodes.length;
      nodes.forEach((x, k) => x.classList.toggle('on', k === i));
      [...dots.children].forEach((d, k) => d.classList.toggle('on', k === i));
    };
    const prev = el('button', 'pf-sub prev', '❮');
    const next = el('button', 'pf-sub next', '❯');
    prev.setAttribute('aria-label', 'Précédent');
    next.setAttribute('aria-label', 'Suivant');
    prev.onclick = () => go(i - 1);
    next.onclick = () => go(i + 1);
    media.append(prev, next, dots);
  }

  const body = el('div', 'pf-body');
  const h = el('h4'); h.textContent = item.title;
  const p = el('p');  p.textContent = item.text;
  body.append(h, p);
  card.append(media, body);
  return card;
}

document.querySelectorAll('.pf-carousel').forEach(box => {
  const items = DATA[box.dataset.carousel] || [];
  const track = el('div', 'pf-track');
  items.forEach(it => track.appendChild(makeCard(it)));

  const prev = el('button', 'pf-nav prev', '❮');
  const next = el('button', 'pf-nav next', '❯');
  prev.setAttribute('aria-label', 'Précédent');
  next.setAttribute('aria-label', 'Suivant');
  const step = () => (track.firstElementChild ? track.firstElementChild.offsetWidth + 19 : 300);
  prev.onclick = () => track.scrollBy({ left: -step(), behavior: 'smooth' });
  next.onclick = () => track.scrollBy({ left: step(), behavior: 'smooth' });

  box.append(prev, track, next);
});

/* Lightbox */
const lb = document.getElementById('lb');
function openLightbox(src, alt) {
  document.getElementById('lbImg').src = src;
  document.getElementById('lbImg').alt = alt || '';
  lb.classList.add('active');
}
function closeLightbox() { lb.classList.remove('active'); }
lb.addEventListener('click', e => { if (e.target !== document.getElementById('lbImg')) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
