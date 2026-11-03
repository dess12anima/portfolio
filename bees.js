/* =====================================================
   ABEILLES QUI VOLENT SUR LE SITE
   1) Mets tes dessins vectoriels (.svg) dans le dossier du site
   2) Écris leurs noms dans CONFIG.images
   ===================================================== */
const CONFIG = {
  images: ['bee1.svg', 'bee2.svg', 'bee3.svg','bee4.svg','bee5.svg','bee6.svg'], // <-- tes fichiers
  count: 7,          // nombre d'abeilles à l'écran
  minSize: 36,       // taille min (px)
  maxSize: 84,       // taille max (px)
  speed: 55,         // vitesse moyenne (px/seconde)
  faceRight: true,   // true si tes abeilles regardent vers la DROITE sur le dessin
  behind: true,      // true  = elles volent DERRIÈRE le texte (recommandé pour la lecture)
                     // false = elles volent par-dessus la page
  opacity: 0.45      // transparence des abeilles (0 = invisibles, 1 = pleines)
};

(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const style = document.createElement('style');
  style.textContent = `
    #bees { position: fixed; inset: 0; overflow: hidden; pointer-events: none;
            z-index: ${CONFIG.behind ? -1 : 50}; }
    #bees img { position: absolute; left: 0; top: 0; will-change: transform;
                opacity: ${CONFIG.opacity};
                user-select: none; -webkit-user-drag: none; }
    ${CONFIG.behind ? `
    /* fonds légèrement transparents : on devine les abeilles derrière le texte */
    .about { background: rgba(248, 249, 250, .78) !important; }
    .gmail { background: rgba(255, 255, 255, .78) !important; }
    .pf-card { background: #f1f1f1 !important; }  /* cartes opaques : texte toujours net */
    ` : ''}`;
  document.head.appendChild(style);

  const layer = document.createElement('div');
  layer.id = 'bees';
  document.body.appendChild(layer);

  const rand = (a, b) => a + Math.random() * (b - a);
  let W = innerWidth, H = innerHeight;
  addEventListener('resize', () => { W = innerWidth; H = innerHeight; });

  const bees = [];
  for (let i = 0; i < CONFIG.count; i++) {
    const img = document.createElement('img');
    img.src = CONFIG.images[i % CONFIG.images.length];
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');
    const size = rand(CONFIG.minSize, CONFIG.maxSize);
    img.style.width = size + 'px';
    layer.appendChild(img);

    bees.push({
      img, size,
      x: rand(0, W), y: rand(0, H),
      angle: rand(0, Math.PI * 2),   // direction du vol
      turn: 0,                       // vitesse de rotation actuelle
      turnTarget: 0,                 // vers quoi elle veut tourner
      nextTurn: 0,                   // temps avant de changer d'idée
      speed: CONFIG.speed * rand(0.6, 1.3) * (size / 60), // petites = plus lentes
      pause: 0,                      // temps de vol sur place (butinage)
      flip: 1,                       // 1 = vers la droite, -1 = vers la gauche
      phase: rand(0, 100)            // décalage pour le bourdonnement
    });
  }

  function draw(b, t) {
    const bob = Math.sin(t * 6 + b.phase) * 3;                // petit balancement
    const tilt = Math.sin(b.angle) * 18 * b.flip;             // penche en montant/descendant
    const buzz = Math.sin(t * 40 + b.phase) * 1.2;            // vibration des ailes
    const s = b.flip * (CONFIG.faceRight ? 1 : -1);
    b.img.style.transform =
      `translate3d(${b.x - b.size / 2}px, ${b.y - b.size / 2 + bob}px, 0) ` +
      `rotate(${tilt + buzz}deg) scaleX(${s})`;
  }

  if (reduce) { bees.forEach(b => draw(b, 0)); return; } // pas d'animation si l'utilisateur la désactive

  let last = performance.now();
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05); // évite les sauts après un changement d'onglet
    last = now;
    const t = now / 1000;

    for (const b of bees) {
      // 1) De temps en temps, l'abeille "change d'idée" (courbe douce, jamais de ligne droite)
      b.nextTurn -= dt;
      if (b.nextTurn <= 0) {
        b.turnTarget = rand(-2.2, 2.2);          // rad/s
        b.nextTurn = rand(0.6, 2.2);
        if (Math.random() < 0.12) b.pause = rand(0.6, 1.6); // parfois elle butine sur place
      }
      b.turn += (b.turnTarget - b.turn) * Math.min(1, dt * 2.5); // lissage

      // 2) Elle ne quitte jamais l'écran : elle est doucement ramenée vers le centre près des bords
      const m = 90;
      if (b.x < m || b.x > W - m || b.y < m || b.y > H - m) {
        const toCenter = Math.atan2(H / 2 - b.y, W / 2 - b.x);
        let d = toCenter - b.angle;
        d = Math.atan2(Math.sin(d), Math.cos(d));   // différence d'angle entre -π et π
        b.turn += d * dt * 4;
      }

      b.angle += b.turn * dt;

      // 3) Avance (ralentit à l'arrêt quand elle butine)
      let v = b.speed;
      if (b.pause > 0) { b.pause -= dt; v *= 0.08; }
      v *= 0.85 + 0.15 * Math.sin(t * 2 + b.phase);  // accélère / ralentit légèrement
      b.x += Math.cos(b.angle) * v * dt;
      b.y += Math.sin(b.angle) * v * dt * 0.8;

      // 4) Se retourne en douceur selon la direction horizontale
      const dir = Math.cos(b.angle) >= 0 ? 1 : -1;
      b.flip += (dir - b.flip) * Math.min(1, dt * 8);

      draw(b, t);
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
