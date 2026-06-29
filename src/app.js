/* ===== APP.JS — Cucito Companion ===== */

/* ---------- STATE ---------- */
let currentSection = 'home';
let searchQuery = '';
let activeFilter = 'tutti';
let darkMode = localStorage.getItem('darkMode') === 'true';
let favs = JSON.parse(localStorage.getItem('favs') || '[]');

/* ---------- DOM REFS ---------- */
const content      = document.getElementById('content');
const topbarTitle  = document.getElementById('topbarTitle');
const searchInput  = document.getElementById('searchInput');
const searchClear  = document.getElementById('searchClear');
const navItems     = document.querySelectorAll('.nav-item[data-section]');
const modal        = document.getElementById('modal');
const modalBackdrop= document.getElementById('modalBackdrop');
const modalClose   = document.getElementById('modalClose');
const modalTitle   = document.getElementById('modalTitle');
const modalCategory= document.getElementById('modalCategory');
const modalSubtitle= document.getElementById('modalSubtitle');
const modalBody    = document.getElementById('modalBody');

/* ---------- NAVIGATION ---------- */
navItems.forEach(item => {
  item.addEventListener('click', () => {
    const section = item.dataset.section;
    navigate(section);
  });
});

function navigate(section) {
  currentSection = section;
  searchQuery = '';
  activeFilter = 'tutti';
  searchInput.value = '';
  searchClear.classList.add('hidden');

  navItems.forEach(n => n.classList.toggle('active', n.dataset.section === section));
  closeNav();
  content.scrollTop = 0;
  render();
}

/* ---------- SIDEBAR MOBILE ---------- */
const appEl = document.querySelector('.app');
function openNav()  { appEl.classList.add('nav-open'); }
function closeNav() { appEl.classList.remove('nav-open'); }
function toggleNav(){ appEl.classList.toggle('nav-open'); }

/* ---------- SEARCH ---------- */
searchInput.addEventListener('input', e => {
  searchQuery = e.target.value.toLowerCase().trim();
  searchClear.classList.toggle('hidden', !searchQuery);
  if (searchQuery.length > 1) renderSearch();
  else if (!searchQuery) render();
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  searchClear.classList.add('hidden');
  render();
});

/* ---------- MODAL ---------- */
function openModal(category, title, subtitle, bodyHTML) {
  modalCategory.textContent = category;
  modalTitle.textContent = title;
  modalSubtitle.textContent = subtitle || '';
  modalBody.innerHTML = bodyHTML;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // I link esterni nel modal restano <a target="_blank">: in Electron li intercetta
  // setWindowOpenHandler (main.js) aprendoli nel browser di sistema; in PWA/web aprono una scheda.
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ---------- HELPERS ---------- */
function h(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function diffDots(n, max=5) {
  let s = '<div class="difficulty-row">';
  for (let i=1; i<=max; i++) s += `<div class="diff-dot${i<=n?' filled':''}"></div>`;
  return s + '</div>';
}

function tags(...items) {
  return items.flat().filter(Boolean).map(t => `<span class="tag">${h(t)}</span>`).join('');
}

function propRow(key, val) {
  return `<div class="detail-prop"><span class="dp-key">${h(key)}</span><span class="dp-val">${h(val)}</span></div>`;
}

function sectionHeader(title, sub, chips=[]) {
  const chipsHTML = chips.map(c => `<span class="stat-chip">${c}</span>`).join('');
  return `<div class="section-header">
    <h2>${h(title)}</h2>
    <p>${h(sub)}</p>
    ${chips.length ? `<div class="section-stats">${chipsHTML}</div>` : ''}
  </div>`;
}

function filterBar(filters, active) {
  return `<div class="filters">${filters.map(f =>
    `<button class="filter-btn${f===active?' active':''}" data-filter="${h(f)}">${h(f)}</button>`
  ).join('')}</div>`;
}

function attachFilters(containerSel, renderFn) {
  document.querySelectorAll(`${containerSel} .filter-btn`).forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      renderFn();
    });
  });
}

/* ================================================================
   RENDERERS
================================================================ */

function render() {
  const sectionTitles = {
    home:'Dashboard', piedini:'Piedini', aghi:'Aghi', fili:'Fili',
    tessuti:'Tessuti', strumenti:'Strumenti', merceria:'Merceria',
    stabilizzatori:'Interfodere & Stabilizzatori', cartamodelli:'Cartamodelli',
    singer4432:'Singer Heavy Duty 4432', risorse:'Risorse Online', glossario:'Glossario',
    preferiti:'Preferiti', compatibilita:'Compatibilità', manutenzione:'Manutenzione Singer 4432'
  };
  topbarTitle.textContent = sectionTitles[currentSection] || currentSection;

  const renderers = {
    home, piedini, aghi, fili, tessuti,
    strumenti, merceria, stabilizzatori, cartamodelli,
    singer4432, risorse, glossario,
    preferiti: preferiti_section, compatibilita, manutenzione
  };

  content.innerHTML = '';
  const fn = renderers[currentSection];
  if (fn) fn();
  updateFavBadge();
}

/* ---- HOME ---- */
function home() {
  const p = DATA.piedini.length;
  const a = DATA.aghi.length;
  const f = DATA.fili.length;
  const t = DATA.tessuti.length;
  const g = DATA.glossario.length;

  content.innerHTML = `
    <div class="home-hero">
      <h1>Benvenuta, Cucitrice!</h1>
      <p>La tua guida completa al cucito con la Singer Heavy Duty 4432. Piedini, aghi, tessuti, cartamodelli e molto altro.</p>
    </div>

    <div class="stats-row">
      <div class="stat-card" data-nav="piedini">
        <div class="stat-number" style="color:#5C7A4E">${p}</div>
        <div class="stat-label">🦶 Piedini</div>
      </div>
      <div class="stat-card" data-nav="aghi">
        <div class="stat-number" style="color:#C47A5A">${a}</div>
        <div class="stat-label">📍 Aghi</div>
      </div>
      <div class="stat-card" data-nav="fili">
        <div class="stat-number" style="color:#C47A5A">${f}</div>
        <div class="stat-label">🪡 Fili</div>
      </div>
      <div class="stat-card" data-nav="tessuti">
        <div class="stat-number" style="color:#5C7A4E">${t}</div>
        <div class="stat-label">🧶 Tessuti</div>
      </div>
      <div class="stat-card" data-nav="glossario">
        <div class="stat-number" style="color:#C9A227">${g}</div>
        <div class="stat-label">📖 Glossario</div>
      </div>
    </div>

    <div class="singer-hero-card" data-nav="singer4432">
      <div class="singer-card-left">
        <h3>Singer Heavy Duty 4432</h3>
        <p>La tua macchina da cucire. Tutto quello che devi sapere.</p>
        <div class="singer-card-chips">
          <span class="singer-chip">32 punti</span>
          <span class="singer-chip">1.100 p/min</span>
          <span class="singer-chip">Telaio metallo</span>
          <span class="singer-chip">7 piedini inclusi</span>
        </div>
      </div>
      <div class="singer-card-right">⚙️</div>
    </div>

    <div class="home-grid-label">Sezioni principali</div>
    <div class="card-grid">
      ${[
        {s:'strumenti',   e:'✂️',  n:'Strumenti',       d:'Taglio, misurazione, stiratura e cucitura a mano'},
        {s:'merceria',    e:'🧷',  n:'Merceria',         d:'Cerniere, bottoni, elastici, chiusure e accessori'},
        {s:'stabilizzatori',e:'📋',n:'Interfodere',      d:'Interfogera, stabilizzatori per ricamo, batting'},
        {s:'cartamodelli',e:'📐',  n:'Cartamodelli',     d:'Tabelle misure, simboli, margini, marchi'},
        {s:'risorse',     e:'🌐',  n:'Risorse Online',   d:'Blog, video, corsi e community selezionati'},
        {s:'glossario',   e:'📖',  n:'Glossario',        d:'${g} termini IT↔EN con definizione'},
      ].map(({s,e,n,d}) => `
        <div class="card" data-nav="${s}">
          <div class="card-header">
            <div class="card-icon" style="background:#5C7A4E">${e}</div>
            <div class="card-titles">
              <div class="card-title">${n}</div>
              <div class="card-subtitle">${d}</div>
            </div>
          </div>
        </div>`).join('')}
    </div>`;

  // Navigazione via data-nav (gli onclick inline sono bloccati dalla CSP)
  content.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.nav));
  });
}

/* ---- PIEDINI ---- */
function footIllustration(id) {
  const svg = FOOT_SVG && FOOT_SVG[id];
  if (svg) return `<div class="card-image foot-svg-card">${svg}</div>`;
  return `<div class="card-image-placeholder">🦶</div>`;
}

function footModalIllustration(id) {
  const svg = FOOT_SVG && FOOT_SVG[id];
  if (svg) {
    return `<div style="width:100%;display:flex;justify-content:center;margin-bottom:16px">
      <div style="width:180px;height:200px;background:#f5f0e8;border-radius:10px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;overflow:hidden">${svg}</div>
    </div>`;
  }
  return `<div class="detail-img-placeholder">🦶</div>`;
}

/* ---- MODAL BUILDERS (riutilizzabili da sezioni e Preferiti) ---- */
function detailImage(src, emoji) {
  return src
    ? `<img src="${src}" alt="" class="detail-img">`
    : `<div class="detail-img-placeholder">${emoji}</div>`;
}

// Percorso immagine da media-index.js (Strumenti/Merceria/Stabilizzatori); '' se assente
function mediaImg(cat, nome) {
  return (typeof MEDIA !== 'undefined' && MEDIA[cat] && MEDIA[cat][nome]) || '';
}

function openPiedinoModal(p) {
  openModal('PIEDINO ' + p.id, p.nome, p.en, `
    ${footModalIllustration(p.id)}
    <div class="detail-section">
      <div class="detail-section-title">Descrizione</div>
      <div class="detail-desc">${h(p.desc)}</div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Utilizzo principale</div>
      <div class="detail-desc">${h(p.uso)}</div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Proprietà</div>
      <div class="detail-props">
        ${propRow('Codice', p.codice)}
        ${propRow('Disponibilità', p.incluso ? '✅ Incluso con Singer 4432' : '🛒 Acquisto separato')}
        ${propRow('Tecnica', p.tecnica)}
      </div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Tessuti consigliati</div>
      <div class="detail-tags">${p.tessuti.map(t=>`<span class="detail-tag fabric">${h(t)}</span>`).join('')}</div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Consigli d'uso</div>
      <ul class="detail-list">${p.consigli.map(c=>`<li>${h(c)}</li>`).join('')}</ul>
    </div>`);
}

function openAgoModal(a) {
  openModal('AGO', a.nome, a.en, `
    ${detailImage(a.img, '📍')}
    <div class="detail-section">
      <div class="detail-section-title">Descrizione</div>
      <div class="detail-desc">${h(a.desc)}</div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Proprietà</div>
      <div class="detail-props">
        ${propRow('Taglie disponibili', a.taglie.join(', '))}
        ${propRow('Colore codice', a.codiceColore)}
        ${propRow('Utilizzo', a.uso)}
      </div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Tessuti consigliati</div>
      <div class="detail-tags">${a.tessuti.map(t=>`<span class="detail-tag fabric">${h(t)}</span>`).join('')}</div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Consigli</div>
      <ul class="detail-list">${a.consigli.map(c=>`<li>${h(c)}</li>`).join('')}</ul>
    </div>`);
}

function openFiloModal(f) {
  openModal('FILO', f.nome, f.en, `
    ${detailImage(f.img, '🪡')}
    <div class="detail-section">
      <div class="detail-section-title">Descrizione</div>
      <div class="detail-desc">${h(f.desc)}</div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Proprietà</div>
      <div class="detail-props">
        ${propRow('Titoli disponibili', f.titoli.join(', '))}
        ${propRow('Utilizzo', f.uso)}
      </div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Marchi consigliati</div>
      <div class="detail-tags">${f.marchi.map(m=>`<span class="detail-tag">${h(m)}</span>`).join('')}</div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Tessuti indicati</div>
      <div class="detail-tags">${f.tessuti.map(t=>`<span class="detail-tag fabric">${h(t)}</span>`).join('')}</div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Consigli</div>
      <ul class="detail-list">${f.consigli.map(c=>`<li>${h(c)}</li>`).join('')}</ul>
    </div>`);
}

function openTessutoModal(t) {
  const img = t.img
    ? `<img src="${t.img}" alt="${h(t.nome)}" class="detail-img" style="object-fit:cover">`
    : `<div class="fabric-swatch" style="background:${t.swatchColor};height:100px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:48px;margin-bottom:16px">${t.emoji}</div>`;
  openModal('TESSUTO', t.nome, t.en, `
    ${img}
    <div class="detail-section">
      <div class="detail-section-title">Descrizione</div>
      <div class="detail-desc">${h(t.desc)}</div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Impostazioni macchina</div>
      <div class="detail-props">
        ${propRow('Ago', t.ago)}
        ${propRow('Piedino', t.piedino)}
        ${propRow('Filo', t.filo)}
        ${propRow('Punto', t.punto)}
        ${propRow('Tensione', t.tensione)}
        ${propRow('Margine di cucitura', t.margine)}
      </div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Difficoltà</div>
      ${diffDots(t.difficolta)}
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Utilizzo</div>
      <div class="detail-desc">${h(t.uso)}</div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Consigli</div>
      <ul class="detail-list">${t.consigli.map(c=>`<li>${h(c)}</li>`).join('')}</ul>
    </div>`);
}

// Apre il modal giusto in base al tipo (usato da Preferiti e ricerca)
function openItemModal(tipo, id) {
  if (tipo === 'Piedino') { const p = DATA.piedini.find(x => x.id === id); if (p) openPiedinoModal(p); }
  else if (tipo === 'Ago') { const a = DATA.aghi.find(x => x.id === id); if (a) openAgoModal(a); }
  else if (tipo === 'Filo') { const f = DATA.fili.find(x => x.id === id); if (f) openFiloModal(f); }
  else if (tipo === 'Tessuto') { const t = DATA.tessuti.find(x => x.id === id); if (t) openTessutoModal(t); }
}

function piedini() {
  const filters = ['tutti', 'incluso', 'opzionale'];
  let list = DATA.piedini;
  if (activeFilter === 'incluso')   list = list.filter(p => p.incluso);
  if (activeFilter === 'opzionale') list = list.filter(p => !p.incluso);

  content.innerHTML = sectionHeader('Piedini per la Singer 4432',
    'Guida completa ai piedini disponibili: inclusi e opzionali. Clicca per dettagli e illustrazione.',
    [`<strong>${DATA.piedini.filter(p=>p.incluso).length}</strong> inclusi`, `<strong>${DATA.piedini.filter(p=>!p.incluso).length}</strong> opzionali`]
  ) + filterBar(filters, activeFilter) + '<div class="card-grid" id="piediniGrid"></div>';

  const grid = document.getElementById('piediniGrid');
  grid.innerHTML = list.map(p => `
    <div class="card piedino-card" data-id="${p.id}">
      ${footIllustration(p.id)}
      <div class="card-header">
        <div class="card-icon" style="background:${p.colore};font-size:11px;font-weight:800">${p.id}</div>
        <div class="card-titles">
          <div class="card-title">${h(p.nome)}</div>
          <div class="card-subtitle">${h(p.en)}</div>
        </div>
        ${p.incluso ? '<span class="badge badge-green">Incluso</span>' : '<span class="badge badge-yellow">Opzionale</span>'}
        <button class="fav-btn${isFav(p.id) ? ' active' : ''}" data-fav="${p.id}" title="Aggiungi ai preferiti">❤</button>
      </div>
      <div class="card-desc">${h(p.uso)}</div>
      <div class="card-tags">${tags(p.tessuti.slice(0,3))}</div>
    </div>`).join('');

  grid.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', e => toggleFav(btn.dataset.fav, e));
  });

  grid.querySelectorAll('.piedino-card').forEach(card => {
    card.addEventListener('click', () => {
      openPiedinoModal(DATA.piedini.find(x => x.id === card.dataset.id));
    });
  });

  attachFilters('#content', piedini);
}

/* ---- AGHI ---- */
function aghi() {
  const needleSVGKey = {
    'A01':'universale','A02':'jersey','A03':'jeans',
    'A04':'universale','A05':'universale','A06':'universale',
    'A07':'universale','A08':'universale','A09':'pelle','A10':'universale'
  };

  content.innerHTML = sectionHeader('Aghi per macchina da cucire',
    'Tipi di aghi, taglie e tessuti di riferimento. Scegliere l\'ago giusto è fondamentale.',
    [`<strong>${DATA.aghi.length}</strong> tipi`]
  ) + `
  <div style="background:white;border:1.5px solid var(--border);border-radius:12px;padding:16px;margin-bottom:20px;overflow-x:auto">
    <div class="detail-section-title" style="margin-bottom:12px">Confronto visivo — Forme della punta</div>
    ${NEEDLE_SVG ? NEEDLE_SVG.diagram || '' : ''}
    <img src="assets/aghi/aghi-tipi.svg" alt="Tipi di aghi" style="max-width:100%;height:auto;display:block;margin:0 auto"/>
  </div>
  <div class="card-grid" id="aghiGrid"></div>`;

  const grid = document.getElementById('aghiGrid');
  grid.innerHTML = DATA.aghi.map(a => {
    const svgKey = needleSVGKey[a.id];
    const needleSvg = NEEDLE_SVG && NEEDLE_SVG[svgKey] ? NEEDLE_SVG[svgKey] : null;
    return `
    <div class="card ago-card" data-id="${a.id}">
      <div class="card-image" style="height:90px;background:#f5f0e8;display:flex;align-items:center;justify-content:center;gap:8px">
        ${a.img
          ? `<img src="${a.img}" alt="${h(a.nome)}" style="height:80px;object-fit:contain;">`
          : (needleSvg ? needleSvg : '<div style="font-size:40px">📍</div>')}
        <div style="font-size:11px;color:var(--text-muted);max-width:80px;line-height:1.4">${h(a.taglie[0])}<br/>${h(a.codiceColore !== 'Nessuno' ? '● ' + a.codiceColore : '')}</div>
      </div>
      <div class="card-header">
        <div class="card-icon" style="background:${a.colore};font-size:11px;font-weight:800">${a.id}</div>
        <div class="card-titles">
          <div class="card-title">${h(a.nome)}</div>
          <div class="card-subtitle">${h(a.en)}</div>
        </div>
        <button class="fav-btn${isFav(a.id) ? ' active' : ''}" data-fav="${a.id}" title="Aggiungi ai preferiti">❤</button>
      </div>
      <div class="card-code">${h(a.taglie.join(' · '))}</div>
      <div class="card-desc">${h(a.uso)}</div>
      <div class="card-tags">${tags(a.tessuti.slice(0,3))}</div>
    </div>`;}).join('');

  grid.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', e => toggleFav(btn.dataset.fav, e));
  });

  grid.querySelectorAll('.ago-card').forEach(card => {
    card.addEventListener('click', () => {
      openAgoModal(DATA.aghi.find(x => x.id === card.dataset.id));
    });
  });
}

/* ---- FILI ---- */
function fili() {
  content.innerHTML = sectionHeader('Tipi di filo da cucire',
    'Fibre, titoli e utilizzi consigliati per ogni tipo di filo.',
    [`<strong>${DATA.fili.length}</strong> tipi`]
  ) + '<div class="card-grid" id="filiGrid"></div>';

  const grid = document.getElementById('filiGrid');
  grid.innerHTML = DATA.fili.map(f => `
    <div class="card filo-card" data-id="${f.id}">
      ${f.img ? `<div class="card-image" style="height:100px;background:#f5f0e8"><img src="${f.img}" alt="${h(f.nome)}" style="width:100%;height:100%;object-fit:contain;"></div>` : ''}
      <div class="card-header">
        <div class="card-icon" style="background:${f.colore}">${f.id}</div>
        <div class="card-titles">
          <div class="card-title">${h(f.nome)}</div>
          <div class="card-subtitle">${h(f.en)}</div>
        </div>
        <button class="fav-btn${isFav(f.id) ? ' active' : ''}" data-fav="${f.id}" title="Aggiungi ai preferiti">❤</button>
      </div>
      <div class="card-code">Nm ${h(f.titoli.join(' · '))}</div>
      <div class="card-desc">${h(f.uso)}</div>
      <div class="card-tags">${tags(f.marchi.slice(0,2))}</div>
    </div>`).join('');

  grid.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', e => toggleFav(btn.dataset.fav, e));
  });

  grid.querySelectorAll('.filo-card').forEach(card => {
    card.addEventListener('click', () => {
      openFiloModal(DATA.fili.find(x => x.id === card.dataset.id));
    });
  });
}

/* ---- TESSUTI ---- */
function tessuti() {
  const categorie = ['tutti', 'naturale', 'maglia', 'intrecciato', 'speciale', 'tecnico'];
  let list = DATA.tessuti;
  if (activeFilter !== 'tutti') list = list.filter(t => t.categoria === activeFilter);

  content.innerHTML = sectionHeader('Guida ai tessuti',
    'Caratteristiche, difficoltà di cucitura e impostazioni macchina.',
    [`<strong>${DATA.tessuti.length}</strong> tessuti`, 'Ago · Piedino · Punto']
  ) + filterBar(categorie, activeFilter) + '<div class="card-grid card-grid-wide" id="tessutiGrid"></div>';

  const grid = document.getElementById('tessutiGrid');
  grid.innerHTML = list.map(t => `
    <div class="fabric-card tessuto-card" data-id="${t.id}">
      <div class="fabric-swatch" style="background:${t.swatchColor};position:relative;overflow:hidden">
        ${t.img
          ? `<img src="${t.img}" alt="${h(t.nome)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">${t.emoji}`
          : t.emoji}
      </div>
      <div class="fabric-body">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:6px">
          <div>
            <div class="fabric-title">${h(t.nome)}</div>
            <div class="fabric-en">${h(t.en)}</div>
          </div>
          <button class="fav-btn${isFav(t.id) ? ' active' : ''}" data-fav="${t.id}" title="Aggiungi ai preferiti" style="margin-top:2px">❤</button>
        </div>
        <div class="fabric-chips">
          <span class="fabric-chip">${h(t.categoria)}</span>
          <span class="fabric-chip ${t.peso.includes('pesante')?'heavy':t.peso.includes('leggero')?'ok':''}">${h(t.peso)}</span>
        </div>
        <div class="fabric-mini">
          <div class="fabric-mini-item">Ago: <span>${h(t.ago.split(' ').slice(0,2).join(' '))}</span></div>
          <div class="fabric-mini-item">Margine: <span>${h(t.margine)}</span></div>
        </div>
        ${diffDots(t.difficolta)}
      </div>
    </div>`).join('');

  grid.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', e => toggleFav(btn.dataset.fav, e));
  });

  grid.querySelectorAll('.tessuto-card').forEach(card => {
    card.addEventListener('click', () => {
      openTessutoModal(DATA.tessuti.find(x => x.id === card.dataset.id));
    });
  });

  attachFilters('#content', tessuti);
}

/* ---- STRUMENTI ---- */
function strumenti() {
  const s = DATA.strumenti;
  const categorie = {
    'taglio': { emoji: '✂️', titolo: 'Taglio' },
    'misurazione': { emoji: '📐', titolo: 'Misurazione' },
    'tracciatura': { emoji: '🖍️', titolo: 'Tracciatura' },
    'cucitura': { emoji: '🪡', titolo: 'Cucitura a mano' },
    'stiratura': { emoji: '♨️', titolo: 'Stiratura' }
  };

  let html = sectionHeader('Strumenti da cucito', 'Tutti gli strumenti essenziali per il laboratorio di cucito.');

  for (const [key, info] of Object.entries(categorie)) {
    html += `<div class="strumenti-cat">
      <div class="strumenti-cat-header"><span style="font-size:20px">${info.emoji}</span><h3>${info.titolo}</h3></div>
      <div class="card-grid">${s[key].map(item => {
        const img = mediaImg('strumenti', item.nome);
        return `
        <div class="card strumento-card" data-cat="${key}" data-nome="${h(item.nome)}">
          ${img ? `<div class="card-image"><img src="${img}" alt="${h(item.nome)}" style="width:100%;height:100%;object-fit:cover"></div>` : ''}
          <div class="card-header">
            <div class="card-icon" style="background:#5C7A4E;font-size:22px">${item.emoji}</div>
            <div class="card-titles">
              <div class="card-title">${h(item.nome)}</div>
            </div>
          </div>
          <div class="card-desc">${h(item.desc)}</div>
        </div>`;}).join('')}
      </div>
    </div>`;
  }

  content.innerHTML = html;

  content.querySelectorAll('.strumento-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.cat;
      const item = s[cat].find(x => x.nome === card.dataset.nome);
      if (!item) return;
      openModal('STRUMENTO', item.nome, categorie[cat].titolo, `
        ${detailImage(mediaImg('strumenti', item.nome), item.emoji)}
        <div class="detail-section">
          <div class="detail-section-title">Descrizione</div>
          <div class="detail-desc">${h(item.desc)}</div>
        </div>
        <div class="detail-section">
          <div class="detail-section-title">Categoria</div>
          <div class="detail-tags"><span class="detail-tag">${categorie[cat].emoji} ${h(categorie[cat].titolo)}</span></div>
        </div>`);
    });
  });
}

/* ---- MERCERIA ---- */
function merceria() {
  content.innerHTML = sectionHeader('Merceria', 'Chiusure, decorazioni e accessori per i tuoi progetti.',
    [`<strong>${DATA.merceria.length}</strong> articoli`]
  ) + `<div class="card-grid" id="merceriaGrid"></div>`;

  document.getElementById('merceriaGrid').innerHTML = DATA.merceria.map(m => {
    const img = mediaImg('merceria', m.nome);
    return `
    <div class="card merceria-card" data-nome="${h(m.nome)}">
      ${img ? `<div class="card-image"><img src="${img}" alt="${h(m.nome)}" style="width:100%;height:100%;object-fit:cover"></div>` : ''}
      <div class="card-header">
        <div class="card-icon" style="background:#C47A5A;font-size:22px">${m.emoji}</div>
        <div class="card-titles">
          <div class="card-title">${h(m.nome)}</div>
        </div>
      </div>
      <div class="card-desc">${h(m.desc)}</div>
      ${m.categorie ? `<div class="card-tags">${m.categorie.map(c=>`<span class="tag gray">${h(c)}</span>`).join('')}</div>` : ''}
    </div>`;}).join('');

  document.querySelectorAll('.merceria-card').forEach(card => {
    card.addEventListener('click', () => {
      const m = DATA.merceria.find(x => x.nome === card.dataset.nome);
      if (!m) return;
      openModal('MERCERIA', m.nome, '', `
        ${detailImage(mediaImg('merceria', m.nome), m.emoji)}
        <div class="detail-section">
          <div class="detail-section-title">Descrizione</div>
          <div class="detail-desc">${h(m.desc)}</div>
        </div>
        ${m.categorie ? `<div class="detail-section">
          <div class="detail-section-title">Tipologie / Varianti</div>
          <div class="detail-tags">${m.categorie.map(c=>`<span class="detail-tag">${h(c)}</span>`).join('')}</div>
        </div>` : ''}`);
    });
  });
}

/* ---- STABILIZZATORI ---- */
function stabilizzatori() {
  const filters = ['tutti', 'Interfogera', 'Stabilizzatore per ricamo', 'Imbottitura'];
  let list = DATA.stabilizzatori;
  if (activeFilter !== 'tutti') list = list.filter(s => s.tipo === activeFilter);

  content.innerHTML = sectionHeader('Interfodere & Stabilizzatori',
    'Guida alla scelta dell\'interfogera e degli stabilizzatori per ricamo.',
    [`<strong>${DATA.stabilizzatori.length}</strong> prodotti`]
  ) + filterBar(filters, activeFilter) + '<div class="card-grid" id="stabGrid"></div>';

  document.getElementById('stabGrid').innerHTML = list.map(s => {
    const img = mediaImg('stabilizzatori', s.nome);
    return `
    <div class="card stab-card" data-nome="${h(s.nome)}">
      ${img ? `<div class="card-image"><img src="${img}" alt="${h(s.nome)}" style="width:100%;height:100%;object-fit:cover"></div>` : ''}
      <div class="card-header">
        <div class="card-icon" style="background:#5C7A4E;font-size:22px">${s.emoji}</div>
        <div class="card-titles">
          <div class="card-title">${h(s.nome)}</div>
          <div class="card-subtitle">${h(s.en)}</div>
        </div>
      </div>
      <div class="card-code">${h(s.tipo)} · ${h(s.applicazione)}</div>
      <div class="card-desc">${h(s.uso)}</div>
      ${s.peso ? `<div class="card-tags">${s.peso.map(p=>`<span class="tag gray">${h(p)}</span>`).join('')}</div>` : ''}
    </div>`;}).join('');

  document.querySelectorAll('.stab-card').forEach(card => {
    card.addEventListener('click', () => {
      const s = DATA.stabilizzatori.find(x => x.nome === card.dataset.nome);
      openModal(s.tipo.toUpperCase(), s.nome, s.en, `
        ${detailImage(mediaImg('stabilizzatori', s.nome), s.emoji)}
        <div class="detail-section">
          <div class="detail-section-title">Descrizione</div>
          <div class="detail-desc">${h(s.desc)}</div>
        </div>
        <div class="detail-section">
          <div class="detail-section-title">Proprietà</div>
          <div class="detail-props">
            ${propRow('Tipo', s.tipo)}
            ${propRow('Applicazione', s.applicazione)}
            ${s.peso ? propRow('Pesi disponibili', s.peso.join(', ')) : ''}
            ${propRow('Utilizzo', s.uso)}
          </div>
        </div>
        <div class="detail-section">
          <div class="detail-section-title">Consigli</div>
          <ul class="detail-list">${s.consigli.map(c=>`<li>${h(c)}</li>`).join('')}</ul>
        </div>`);
    });
  });

  attachFilters('#content', stabilizzatori);
}

/* ---- CARTAMODELLI ---- */
function cartamodelli() {
  const misure = DATA.cartamodelli.find(c => c.tipo === 'tabella');
  const simboli = DATA.cartamodelli.find(c => c.tipo === 'simboli');
  const margini = DATA.cartamodelli.find(c => c.tipo === 'info');
  const marchi  = DATA.cartamodelli.find(c => c.tipo === 'marchi');
  const gratuiti = DATA.cartamodelli.find(c => c.tipo === 'gratuiti');

  content.innerHTML = sectionHeader('Cartamodelli', 'Tabelle misure, simboli, margini, marchi e modelli gratuiti scaricabili.');

  // TABS
  content.innerHTML += `
    <div class="tabs">
      <button class="tab-btn active" data-tab="gratuiti">⬇️ Gratuiti</button>
      <button class="tab-btn" data-tab="misure">Tabella taglie</button>
      <button class="tab-btn" data-tab="simboli">Simboli</button>
      <button class="tab-btn" data-tab="margini">Margini</button>
      <button class="tab-btn" data-tab="marchi">Marchi</button>
    </div>

    <div class="tab-panel active" id="tab-gratuiti">
      ${sectionDivider('Cartamodelli gratuiti da scaricare')}
      <p style="color:var(--text-muted);font-size:13px;margin-bottom:14px">Fonti affidabili con cartamodelli PDF gratuiti. Clicca per aprire il sito nel browser.</p>
      <div class="source-list">
        ${(gratuiti ? gratuiti.fonti : []).map(f => `
          <a class="source-card" href="${h(f.url)}" target="_blank" rel="noopener noreferrer">
            <div class="source-icon">${f.emoji}</div>
            <div class="source-info">
              <div class="source-name">${h(f.nome)}</div>
              <div class="source-url">${h(f.url)}</div>
              <div class="source-desc">${h(f.desc)}</div>
              <div class="source-chips">
                <span class="source-chip free">⬇️ ${h(f.tipo)}</span>
                <span class="source-chip it">${h(f.lingua)}</span>
                <span class="source-chip">${h(f.livello)}</span>
              </div>
            </div>
          </a>`).join('')}
      </div>
    </div>

    <div class="tab-panel" id="tab-misure">
      ${sectionDivider('Taglie italiane')}
      <div class="size-table">
        <div class="size-table-header" style="display:grid;grid-template-columns:60px 40px 40px 40px 40px 90px 90px 90px;gap:10px">
          <span>Taglia IT</span><span>EU</span><span>UK</span><span>US</span><span></span>
          <span>Petto (cm)</span><span>Vita (cm)</span><span>Fianchi (cm)</span>
        </div>
        ${misure.taglie.map(t => `
          <div class="size-row" style="display:grid;grid-template-columns:60px 40px 40px 40px 40px 90px 90px 90px;gap:10px">
            <span class="size-key">${t.taglia}</span>
            <span class="size-val">${t.eu}</span>
            <span class="size-val">${t.uk}</span>
            <span class="size-val">${t.us}</span><span></span>
            <span class="size-val">${t.petto}</span>
            <span class="size-val">${t.vita}</span>
            <span class="size-val">${t.fianchi}</span>
          </div>`).join('')}
      </div>
    </div>

    <div class="tab-panel" id="tab-simboli">
      ${sectionDivider('Simboli sui cartamodelli')}
      <div class="symbol-list">
        ${simboli.simboli.map(s => `
          <div class="symbol-item">
            <div class="symbol-icon">${s.simbolo}</div>
            <div class="symbol-it">${h(s.nome)}</div>
            <div class="symbol-en">${h(s.desc)}</div>
          </div>`).join('')}
      </div>
    </div>

    <div class="tab-panel" id="tab-margini">
      ${sectionDivider('Margini di cucitura standard')}
      <div class="tip-list">
        ${margini.info.map(i => `
          <div class="tip-item">
            <div class="tip-bullet">📏</div>
            <div class="tip-text"><strong>${h(i.tipo)}:</strong> ${h(i.margine)} — ${h(i.note)}</div>
          </div>`).join('')}
      </div>
    </div>

    <div class="tab-panel" id="tab-marchi">
      ${sectionDivider('Marchi di cartamodelli')}
      <div class="brand-list">
        ${marchi.marchi.map(m => `
          <div class="brand-card">
            <div>
              <div class="brand-name">${h(m.nome)}</div>
              <div class="brand-country">${h(m.paese)}</div>
              <div class="brand-desc">${h(m.note)}</div>
              <div class="brand-diff">${h(m.livello)}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
  });
}

function sectionDivider(label) {
  return `<div class="section-divider"><h3>${h(label)}</h3></div>`;
}

/* ---- SINGER 4432 ---- */
function singer4432() {
  const s = DATA.singer4432;

  content.innerHTML = `
    <div class="singer-page-hero">
      <div class="singer-machine-icon">⚙️</div>
      <div class="singer-machine-info">
        <div class="model">Singer Heavy Duty</div>
        <h1>4432</h1>
        <div class="singer-specs-mini">
          <div class="spec-mini"><div class="value">32</div><div class="label">Punti</div></div>
          <div class="spec-mini"><div class="value">1100</div><div class="label">p/min</div></div>
          <div class="spec-mini"><div class="value">8</div><div class="label">Denti</div></div>
          <div class="spec-mini"><div class="value">7</div><div class="label">Piedini inclusi</div></div>
        </div>
      </div>
    </div>

    <div class="tabs">
      <button class="tab-btn active" data-tab="specs">Specifiche</button>
      <button class="tab-btn" data-tab="punti">Punti</button>
      <button class="tab-btn" data-tab="acc">Accessori inclusi</button>
      <button class="tab-btn" data-tab="tessuti">Compatibilità tessuti</button>
      <button class="tab-btn" data-tab="manutenzione">Manutenzione</button>
      <button class="tab-btn" data-tab="problemi">Risoluzione problemi</button>
    </div>

    <div class="tab-panel active" id="tab-specs">
      <div class="specs-table">
        ${s.specs.map(r => `
          <div class="spec-row">
            <div class="spec-key">${h(r.chiave)}</div>
            <div class="spec-value">${h(r.valore)}</div>
          </div>`).join('')}
      </div>
    </div>

    <div class="tab-panel" id="tab-punti">
      ${sectionDivider('Punti preimpostati Singer 4432')}
      <div class="stitch-grid">
        ${s.punti.map(p => {
          const svg = STITCH_SVG && STITCH_SVG[p.id];
          const svgBlock = svg
            ? `<div style="width:100%;margin-bottom:8px;border-radius:6px;overflow:hidden;border:1px solid var(--border)">${svg}</div>`
            : '';
          return `
          <div class="stitch-card" style="flex-direction:column;align-items:stretch">
            ${svgBlock}
            <div style="display:flex;gap:10px;align-items:flex-start">
              <div class="stitch-id ${p.tipo}">${h(p.id)}</div>
              <div class="stitch-info">
                <div class="stitch-name">${h(p.nome)}</div>
                <div class="stitch-en">${h(p.en)}</div>
                <div class="stitch-desc">${h(p.uso)}</div>
                <div class="stitch-params">
                  <span class="stitch-param">L: ${h(p.L)} mm</span>
                  <span class="stitch-param">W: ${h(p.W)} mm</span>
                </div>
              </div>
            </div>
          </div>`;}).join('')}
      </div>
    </div>

    <div class="tab-panel" id="tab-acc">
      ${sectionDivider('Accessori inclusi nella confezione')}
      <div class="accessories-grid">
        ${s.accessori.map(a => `
          <div class="accessory-card">
            <div class="acc-icon">${a.emoji}</div>
            <div>
              <div class="acc-name">${h(a.nome)}</div>
              <div class="acc-desc">${h(a.desc)}</div>
              ${a.incluso ? '<div class="acc-badge-incl">✅ Incluso</div>' : ''}
            </div>
          </div>`).join('')}
      </div>
    </div>

    <div class="tab-panel" id="tab-tessuti">
      ${sectionDivider('Compatibilità con i tessuti')}
      <div class="fabric-compat-grid">
        ${s.compatibilitaTessuti.map(c => `
          <div class="fabric-compat-card">
            <div class="fc-category">${h(c.categoria)}</div>
            <div class="fc-examples">${h(c.esempi)}</div>
            <div class="fc-detail"><div class="key">Ago</div><div class="val">${h(c.ago)}</div></div>
            <div class="fc-detail"><div class="key">Piedino</div><div class="val">${h(c.piedino)}</div></div>
            <div class="fc-detail"><div class="key">Tensione</div><div class="val">${h(c.tensione)}</div></div>
            <div class="fc-detail"><div class="key">Punto</div><div class="val">${h(c.punto)}</div></div>
          </div>`).join('')}
      </div>
    </div>

    <div class="tab-panel" id="tab-manutenzione">
      ${sectionDivider('Manutenzione e cura')}
      <div class="tip-list">
        ${s.manutenzione.map(t => `
          <div class="tip-item">
            <div class="tip-bullet">${t.slice(0,2)}</div>
            <div class="tip-text">${h(t.slice(2))}</div>
          </div>`).join('')}
      </div>
    </div>

    <div class="tab-panel" id="tab-problemi">
      ${sectionDivider('Risoluzione dei problemi comuni')}
      <div class="tip-list">
        ${s.problemi.map(p => `
          <div class="tip-item" style="flex-direction:column;gap:8px">
            <div style="font-size:14px;font-weight:700;color:var(--secondary)">⚠️ ${h(p.problema)}</div>
            <ul class="detail-list" style="width:100%">${p.soluzioni.map(sol=>`<li>${h(sol)}</li>`).join('')}</ul>
          </div>`).join('')}
      </div>
    </div>`;

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
  });
}

/* ---- RISORSE ---- */
function risorse() {
  const filters = ['tutti', 'gratuito', 'IT', 'EN'];
  let list = DATA.risorse;
  if (activeFilter === 'gratuito') list = list.filter(r => r.gratuito);
  if (activeFilter === 'IT') list = list.filter(r => r.lingua.includes('IT'));
  if (activeFilter === 'EN') list = list.filter(r => r.lingua.includes('EN'));

  content.innerHTML = sectionHeader('Risorse Online', 'Blog, video, corsi e community selezionati per il cucito.',
    [`<strong>${DATA.risorse.filter(r=>r.gratuito).length}</strong> gratuite`]
  ) + filterBar(filters, activeFilter) + '<div class="source-list" id="risorse-list"></div>';

  // Link reali: in Electron li apre setWindowOpenHandler nel browser di sistema, in PWA/web in una scheda.
  document.getElementById('risorse-list').innerHTML = list.map(r => `
    <a class="source-card" href="${h(r.url)}" target="_blank" rel="noopener noreferrer">
      <div class="source-icon">${r.emoji}</div>
      <div class="source-info">
        <div class="source-name">${h(r.nome)}</div>
        <div class="source-url">${h(r.url)}</div>
        <div class="source-desc">${h(r.desc)}</div>
        <div class="source-chips">
          <span class="source-chip ${r.gratuito?'free':''}">${r.gratuito ? '✅ Gratuito' : '💰 A pagamento'}</span>
          <span class="source-chip it">${h(r.lingua)}</span>
          <span class="source-chip">${h(r.tipo)}</span>
        </div>
      </div>
    </a>`).join('');

  attachFilters('#content', risorse);
}

/* ---- GLOSSARIO ---- */
function glossario() {
  let list = DATA.glossario;
  if (searchQuery) {
    list = list.filter(g =>
      g.it.toLowerCase().includes(searchQuery) ||
      g.en.toLowerCase().includes(searchQuery) ||
      g.def.toLowerCase().includes(searchQuery)
    );
  }

  const byLetter = {};
  list.forEach(g => {
    const l = g.it[0].toUpperCase();
    if (!byLetter[l]) byLetter[l] = [];
    byLetter[l].push(g);
  });

  let html = sectionHeader('Glossario Cucito IT↔EN',
    'Termini tecnici di sartoria in italiano e inglese.',
    [`<strong>${DATA.glossario.length}</strong> termini`]
  );

  if (list.length === 0) {
    html += `<div class="no-results"><div class="no-results-icon">📖</div><h3>Nessun termine trovato</h3><p>Prova a cercare in italiano o in inglese.</p></div>`;
  } else {
    html += '<div class="gloss-grid">';
    for (const letter of Object.keys(byLetter).sort()) {
      html += `<div class="gloss-letter-group">
        <div class="gloss-letter">${letter}</div>
        ${byLetter[letter].map(g => `
          <div class="gloss-item">
            <div class="gloss-it">${h(g.it)}</div>
            <div class="gloss-en">${h(g.en)}</div>
            <div class="gloss-def">${h(g.def)}</div>
          </div>`).join('')}
      </div>`;
    }
    html += '</div>';
  }

  content.innerHTML = html;
}

/* ---- SEARCH GLOBALE ---- */
function renderSearch() {
  const q = searchQuery;
  const results = [];

  const match = (...vals) => vals.some(s => s && String(s).toLowerCase().includes(q));

  DATA.piedini.forEach(p => {
    if (match(p.nome, p.en, p.uso, p.desc))
      results.push({ tipo:'Piedino', titolo:p.nome, sub:p.en, section:'piedini', id:p.id });
  });
  DATA.aghi.forEach(a => {
    if (match(a.nome, a.en, a.uso, a.desc))
      results.push({ tipo:'Ago', titolo:a.nome, sub:a.taglie.join(', '), section:'aghi', id:a.id });
  });
  DATA.fili.forEach(f => {
    if (match(f.nome, f.en, f.uso, f.desc))
      results.push({ tipo:'Filo', titolo:f.nome, sub:f.en, section:'fili', id:f.id });
  });
  DATA.tessuti.forEach(t => {
    if (match(t.nome, t.en, t.uso, t.desc))
      results.push({ tipo:'Tessuto', titolo:t.nome, sub:t.en, section:'tessuti', id:t.id });
  });
  DATA.glossario.forEach(g => {
    if (match(g.it, g.en, g.def))
      results.push({ tipo:'Glossario', titolo:g.it, sub:g.en + ' — ' + g.def, section:'glossario' });
  });
  DATA.stabilizzatori.forEach(s => {
    if (match(s.nome, s.en, s.uso, s.desc))
      results.push({ tipo:'Interfogera', titolo:s.nome, sub:s.en, section:'stabilizzatori' });
  });
  DATA.merceria.forEach(m => {
    if (match(m.nome, m.desc, (m.categorie||[]).join(' ')))
      results.push({ tipo:'Merceria', titolo:m.nome, sub:m.desc, section:'merceria' });
  });
  Object.values(DATA.strumenti).flat().forEach(s => {
    if (match(s.nome, s.desc))
      results.push({ tipo:'Strumento', titolo:s.nome, sub:s.desc, section:'strumenti' });
  });
  DATA.risorse.forEach(r => {
    if (match(r.nome, r.desc, r.tipo))
      results.push({ tipo:'Risorsa', titolo:r.nome, sub:r.desc, section:'risorse' });
  });
  const marchi = (DATA.cartamodelli.find(c => c.tipo === 'marchi') || {}).marchi || [];
  marchi.forEach(m => {
    if (match(m.nome, m.paese, m.note))
      results.push({ tipo:'Marchio', titolo:m.nome, sub:m.note, section:'cartamodelli' });
  });
  const gratuiti = (DATA.cartamodelli.find(c => c.tipo === 'gratuiti') || {}).fonti || [];
  gratuiti.forEach(f => {
    if (match(f.nome, f.desc, f.tipo, f.lingua))
      results.push({ tipo:'Cartamodello gratuito', titolo:f.nome, sub:f.desc, section:'cartamodelli' });
  });

  topbarTitle.textContent = `Ricerca: "${q}"`;

  if (results.length === 0) {
    content.innerHTML = `<div class="no-results">
      <div class="no-results-icon">🔍</div>
      <h3>Nessun risultato per "${h(q)}"</h3>
      <p>Prova con un termine diverso.</p>
    </div>`;
    return;
  }

  content.innerHTML = `<div class="section-header"><h2>Risultati</h2><p><strong>${results.length}</strong> elementi trovati per "<em>${h(q)}</em>"</p></div>
    <div class="card-grid">
      ${results.map((r, i) => `
        <div class="card search-result-card" data-i="${i}">
          <div class="card-header">
            <div class="card-icon" style="background:#5C7A4E">${h(r.tipo[0])}</div>
            <div class="card-titles">
              <div class="card-title">${h(r.titolo)}</div>
              <div class="card-subtitle">${h((r.sub||'').slice(0,60))}${(r.sub||'').length>60?'…':''}</div>
            </div>
          </div>
          <div class="card-code">${h(r.tipo)}</div>
        </div>`).join('')}
    </div>`;

  document.querySelectorAll('.search-result-card').forEach(card => {
    card.addEventListener('click', () => {
      const r = results[+card.dataset.i];
      if (r.id) openItemModal(r.tipo, r.id);   // apre direttamente il dettaglio
      else navigate(r.section);                 // sezioni senza modal: naviga
    });
  });
}

/* ---- DARK MODE ---- */
function initDarkMode() {
  document.documentElement.dataset.theme = darkMode ? 'dark' : '';
  const btn = document.getElementById('darkToggle');
  if (btn) btn.textContent = darkMode ? '☀️' : '🌙';
}

function toggleDarkMode() {
  darkMode = !darkMode;
  localStorage.setItem('darkMode', darkMode);
  initDarkMode();
}

/* ---- FAVORITES ---- */
function isFav(id) { return favs.includes(id); }

function toggleFav(id, e) {
  e.stopPropagation();
  if (isFav(id)) favs = favs.filter(f => f !== id);
  else favs.push(id);
  localStorage.setItem('favs', JSON.stringify(favs));
  updateFavBadge();
  render();
}

function updateFavBadge() {
  const badge = document.getElementById('favBadge');
  if (!badge) return;
  badge.textContent = favs.length;
  badge.style.display = favs.length > 0 ? '' : 'none';
}

// Badge della sidebar calcolati dai dati reali (non più hardcoded nell'HTML)
function updateNavBadges() {
  const counts = {
    piedini: DATA.piedini.length, aghi: DATA.aghi.length, fili: DATA.fili.length,
    tessuti: DATA.tessuti.length, glossario: DATA.glossario.length
  };
  navItems.forEach(item => {
    const c = counts[item.dataset.section];
    const badge = item.querySelector('.nav-badge');
    if (c != null && badge && badge.id !== 'favBadge') badge.textContent = c;
  });
}

/* ---- PREFERITI ---- */
function preferiti_section() {
  const allItems = [
    ...DATA.piedini.map(p => ({...p, _tipo:'Piedino', _colore:p.colore})),
    ...DATA.aghi.map(a => ({...a, _tipo:'Ago', _colore:a.colore})),
    ...DATA.fili.map(f => ({...f, _tipo:'Filo', _colore:f.colore})),
    ...DATA.tessuti.map(t => ({...t, _tipo:'Tessuto', _colore:t.swatchColor}))
  ].filter(x => isFav(x.id));

  if (allItems.length === 0) {
    content.innerHTML = sectionHeader('Preferiti', 'Piedini, aghi, fili e tessuti salvati.') +
      `<div class="no-results">
        <div class="no-results-icon">❤️</div>
        <h3>Nessun preferito salvato</h3>
        <p>Clicca ❤ sulle schede per aggiungere ai preferiti.</p>
      </div>`;
    return;
  }

  content.innerHTML = sectionHeader('Preferiti',
    `${allItems.length} elemento${allItems.length > 1 ? 'i' : ''} salvato${allItems.length > 1 ? 'i' : ''}.`) +
    '<div class="card-grid">' +
    allItems.map(item => `
      <div class="card pref-card" data-id="${item.id}" data-tipo="${item._tipo}">
        <div class="card-header">
          <div class="card-icon" style="background:${item._colore || '#5C7A4E'};font-size:12px;font-weight:700">${item.id}</div>
          <div class="card-titles">
            <div class="card-title">${h(item.nome)}</div>
            <div class="card-subtitle">${h(item._tipo)}</div>
          </div>
          <button class="fav-btn active" data-fav="${item.id}" title="Rimuovi dai preferiti">❤</button>
        </div>
        <div class="card-desc">${h(item.uso || item.desc || '')}</div>
      </div>`).join('') +
    '</div>';

  document.querySelectorAll('#content .pref-card').forEach(card => {
    card.addEventListener('click', () => openItemModal(card.dataset.tipo, card.dataset.id));
  });
  document.querySelectorAll('#content .fav-btn').forEach(btn => {
    btn.addEventListener('click', e => toggleFav(btn.dataset.fav, e));
  });
}

/* ---- COMPATIBILITÀ ---- */
function compatibilita() {
  content.innerHTML = sectionHeader('Compatibilità tessuto → impostazioni',
    'Seleziona un tessuto per vedere le impostazioni ottimali della Singer 4432.',
    ['Ago · Piedino · Filo · Punto']) +
    `<div class="compat-tool">
      <label class="compat-label">Seleziona tessuto</label>
      <select id="compatSelect" class="compat-select">
        <option value="">— Scegli il tessuto —</option>
        ${DATA.tessuti.map(t => `<option value="${t.id}">${h(t.nome)} ${t.emoji}</option>`).join('')}
      </select>
      <div id="compatResult" class="compat-result" style="display:none"></div>
    </div>`;

  document.getElementById('compatSelect').addEventListener('change', function() {
    const t = DATA.tessuti.find(x => x.id === this.value);
    const result = document.getElementById('compatResult');
    if (!t) { result.style.display = 'none'; return; }
    result.style.display = '';
    result.innerHTML = `
      <div class="compat-title">${t.emoji} ${h(t.nome)}</div>
      <div class="compat-props">
        ${propRow('Ago consigliato', t.ago)}
        ${propRow('Piedino', t.piedino)}
        ${propRow('Filo', t.filo)}
        ${propRow('Punto', t.punto)}
        ${propRow('Tensione', t.tensione)}
        ${propRow('Margine cucitura', t.margine)}
      </div>
      <div class="compat-tips">
        <div class="detail-section-title" style="margin-top:16px;margin-bottom:8px">Consigli</div>
        <ul class="detail-list">${t.consigli.map(c => `<li>${h(c)}</li>`).join('')}</ul>
      </div>
      <div class="compat-diff" style="margin-top:12px">
        <span style="color:var(--text-muted);font-size:12px;margin-right:6px">Difficoltà:</span>${diffDots(t.difficolta)}
      </div>`;
  });
}

/* ---- MANUTENZIONE ---- */
function manutenzione() {
  const guida = DATA.singer4432.manutenzioneGuida;

  let html = sectionHeader('Manutenzione Singer 4432',
    'Guide passo-passo per mantenere la tua Singer Heavy Duty 4432 sempre efficiente.',
    ['5 procedure']);

  if (!guida || !guida.length) {
    content.innerHTML = html;
    return;
  }

  html += '<div class="manut-list">' + guida.map((proc, idx) => `
    <div class="manut-item">
      <div class="manut-header" data-manut="${idx}">
        <div class="manut-title-row">
          <span class="manut-num">${idx + 1}</span>
          <span class="manut-title">${h(proc.titolo)}</span>
          <span class="manut-freq">${h(proc.frequenza)}</span>
        </div>
        <span class="manut-arrow" id="manut-arrow-${idx}">›</span>
      </div>
      <div class="manut-body" id="manut-body-${idx}" style="display:none">
        ${proc.img ? `<div class="manut-img-wrap"><img src="${proc.img}" alt="${h(proc.titolo)}" class="manut-img"></div>` : ''}
        <ol class="manut-steps">
          ${proc.passaggi.map((step, i) => `
            <li class="manut-step"><span class="step-num">${i + 1}</span>${h(step)}</li>`).join('')}
        </ol>
      </div>
    </div>`).join('') + '</div>';

  content.innerHTML = html;

  // Accordion via listener (gli onclick inline sono bloccati dalla CSP)
  content.querySelectorAll('.manut-header[data-manut]').forEach(hd => {
    hd.addEventListener('click', () => toggleManut(+hd.dataset.manut));
  });
}

function toggleManut(idx) {
  const body = document.getElementById(`manut-body-${idx}`);
  const arrow = document.getElementById(`manut-arrow-${idx}`);
  if (!body) return;
  const isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : '';
  if (arrow) arrow.style.transform = isOpen ? '' : 'rotate(90deg)';
}

/* ---- INIT ---- */
document.getElementById('darkToggle').addEventListener('click', toggleDarkMode);
document.getElementById('navToggle').addEventListener('click', toggleNav);
document.getElementById('sidebarBackdrop').addEventListener('click', closeNav);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
// Nasconde le immagini non caricabili (sostituisce gli onerror inline, vietati dalla CSP)
document.addEventListener('error', e => {
  if (e.target && e.target.tagName === 'IMG') e.target.style.display = 'none';
}, true);
initDarkMode();
updateFavBadge();
updateNavBadges();
render();
