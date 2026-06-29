/* ===== ILLUSTRATIONS.JS — SVG inline per piedini, punti e aghi ===== */

const FOOT_SVG = {

/* P01 - UNIVERSALE */
P01: `<img src="image/img-piedini/Piedino%20universale.jpg" alt="Piedino universale" style="width:100%;height:100%;object-fit:contain;">`,

/* P02 - CERNIERA */
P02: `<img src="image/img-piedini/Piedino%20cerniera.webp" alt="Piedino cerniera" style="width:100%;height:100%;object-fit:contain;">`,

/* P03 - ASOLA */
P03: `<img src="image/img-piedini/Piedino%20asola.jpg" alt="Piedino asola" style="width:100%;height:100%;object-fit:contain;">`,

/* P04 - ATTACCA-BOTTONI */
P04: `<img src="image/img-piedini/Piedino%20attacca-bottoni.webp" alt="Piedino attacca-bottoni" style="width:100%;height:100%;object-fit:contain;">`,

/* P05 - SORFILATURA */
P05: `<img src="image/img-piedini/Piedino%20sorfilatura.jpg" alt="Piedino sorfilatura" style="width:100%;height:100%;object-fit:contain;">`,

/* P06 - PUNTO SATIN */
P06: `<img src="image/img-piedini/Piedino%20punto%20satin.jpg" alt="Piedino punto satin" style="width:100%;height:100%;object-fit:contain;">`,

/* P07 - ORLO INVISIBILE */
P07: `<img src="image/img-piedini/Piedino%20punto%20invisibile.png" alt="Piedino punto invisibile" style="width:100%;height:100%;object-fit:contain;">`,

/* P08 - QUILTING 1/4" */
P08: `<img src="image/img-piedini/Piedino%20quilting.png" alt="Piedino quilting" style="width:100%;height:100%;object-fit:contain;">`,

/* P09 - DOPPIO TRASPORTO */
P09: `<img src="image/img-piedini/Piedino%20walking%20foot.jpg" alt="Piedino a doppio trasporto" style="width:100%;height:100%;object-fit:contain;">`,

/* P10 - ORLO ARROTOLATO */
P10: `<img src="image/img-piedini/Piedino%20orlo%20arrotolato.png" alt="Piedino orlo arrotolato" style="width:100%;height:100%;object-fit:contain;">`,

/* P11 - ARRICCIATORE */
P11: `<img src="image/img-piedini/Piedino%20arricciatore.jpg" alt="Piedino arricciatore" style="width:100%;height:100%;object-fit:contain;">`,

/* P12 - CERNIERA INVISIBILE */
P12: `<img src="image/img-piedini/Piedino%20cerniera%20invisibile.jpg" alt="Piedino cerniera invisibile" style="width:100%;height:100%;object-fit:contain;">`,

/* P13 - CERNIERA LATO DESTRO */
P13: `<img src="image/img-piedini/Piedino%20per%20cerniera%20lato%20destro.webp" alt="Piedino per cerniera lato destro" style="width:100%;height:100%;object-fit:contain;">`,

/* P14 - PUNTO CORDONCINO */
P14: `<img src="image/img-piedini/Piedino%20punto%20cordoncino.png" alt="Piedino punto cordoncino" style="width:100%;height:100%;object-fit:contain;">`,

/* P15 - PINTUCK 5 CANALI */
P15: `<img src="image/img-piedini/Piedino%20pintuck%20a%205%20canali.jpg" alt="Piedino pintuck a 5 canali" style="width:100%;height:100%;object-fit:contain;">`,

/* P16 - AGO GEMELLO */
P16: `<img src="image/img-piedini/Piedino%20ago%20gemello.png" alt="Piedino ago gemello" style="width:100%;height:100%;object-fit:contain;">`,

/* P17 - BORDO GUIDA */
P17: `<img src="image/img-piedini/Piedino%20bordo%20guida.jpg" alt="Piedino bordo guida" style="width:100%;height:100%;object-fit:contain;">`,

/* P18 - FREE MOTION */
P18: `<img src="image/img-piedini/Piedino%20libero%20movimento.webp" alt="Piedino libero movimento" style="width:100%;height:100%;object-fit:contain;">`,

/* P19 - OPEN TOE / APPLIQUE */
P19: `<img src="image/img-piedini/Piedino%20applicazioni.webp" alt="Piedino applicazione" style="width:100%;height:100%;object-fit:contain;">`,

/* P20 - FELTRATURA */
P20: `<img src="image/img-piedini/Piedino%20feltratura.jpg" alt="Piedino feltratura" style="width:100%;height:100%;object-fit:contain;">`,

/* P21 - ORLO A GIORNO */
P21: `<img src="image/img-piedini/Piedino%20orlo%20a%20giorno.png" alt="Piedino orlo a giorno" style="width:100%;height:100%;object-fit:contain;">`,

/* P22 - PER ELASTICO */
P22: `<img src="image/img-piedini/Piedino%20per%20elastico.webp" alt="Piedino per elastico" style="width:100%;height:100%;object-fit:contain;">`,

/* P23 - TEFLON */
P23: `<img src="image/img-piedini/Piedino%20lana-tessuti%20spessi.webp" alt="Piedino lana/tessuti spessi" style="width:100%;height:100%;object-fit:contain;">`,

};

/* ===== STITCH SVG PATTERNS ===== */
const STITCH_SVG = {

'#01': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80">
  <rect width="280" height="80" fill="#faf7f2" rx="6"/>
  <line x1="10" y1="34" x2="270" y2="34" stroke="#e0d4c0" stroke-width="1.5"/>
  <line x1="10" y1="46" x2="270" y2="46" stroke="#e0d4c0" stroke-width="1.5"/>
  <line x1="20" y1="40" x2="260" y2="40" stroke="#5C7A4E" stroke-width="2.5" stroke-linecap="round"/>
  <g fill="#5C7A4E">
    ${[20,42,64,86,108,130,152,174,196,218,240,260].map(x=>`<circle cx="${x}" cy="40" r="3.2"/>`).join('')}
  </g>
  <text x="140" y="68" font-size="10" fill="#7A6050" font-family="sans-serif" text-anchor="middle">Punto dritto · L: 2,5 mm</text>
</svg>`,

'#03': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80">
  <rect width="280" height="80" fill="#faf7f2" rx="6"/>
  <line x1="10" y1="22" x2="270" y2="22" stroke="#e0d4c0" stroke-width="1.5"/>
  <line x1="10" y1="58" x2="270" y2="58" stroke="#e0d4c0" stroke-width="1.5"/>
  <polyline points="18,58 40,22 62,58 84,22 106,58 128,22 150,58 172,22 194,58 216,22 238,58 260,22"
    fill="none" stroke="#5C7A4E" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
  <g fill="#5C7A4E">
    ${[18,40,62,84,106,128,150,172,194,216,238,260].map((x,i)=>`<circle cx="${x}" cy="${i%2===0?58:22}" r="3"/>`).join('')}
  </g>
  <text x="140" y="74" font-size="10" fill="#7A6050" font-family="sans-serif" text-anchor="middle">Zigzag · L: 2 mm · W: 5 mm</text>
</svg>`,

'#05': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80">
  <rect width="280" height="80" fill="#faf7f2" rx="6"/>
  <line x1="10" y1="18" x2="270" y2="18" stroke="#e0d4c0" stroke-width="1.5"/>
  <line x1="10" y1="62" x2="270" y2="62" stroke="#e0d4c0" stroke-width="1.5"/>
  <g stroke="#5C7A4E" stroke-width="1.6" opacity="0.9">
    ${Array.from({length:66},(_,i)=>`<line x1="${18+i*4}" y1="18" x2="${18+i*4+(i%2===0?0:0)}" y2="62"/>`).join('')}
  </g>
  <text x="140" y="76" font-size="10" fill="#7A6050" font-family="sans-serif" text-anchor="middle">Punto Satin · L: 0,5 mm · denso</text>
</svg>`,

'#07': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80">
  <rect width="280" height="80" fill="#faf7f2" rx="6"/>
  <line x1="10" y1="34" x2="270" y2="34" stroke="#e0d4c0" stroke-width="1.5"/>
  <line x1="10" y1="46" x2="270" y2="46" stroke="#e0d4c0" stroke-width="1.5"/>
  <g fill="none" stroke="#C47A5A" stroke-width="2.5" stroke-linecap="round">
    ${Array.from({length:8},(_,i)=>{const x=20+i*30;return`<line x1="${x}" y1="40" x2="${x+20}" y2="40"/><line x1="${x+20}" y1="40" x2="${x+12}" y2="40"/><line x1="${x+12}" y1="40" x2="${x+30}" y2="40"/>`}).join('')}
  </g>
  <g fill="#C47A5A">
    ${Array.from({length:9},(_,i)=>`<circle cx="${20+i*30}" cy="40" r="2.8"/>`).join('')}
  </g>
  <text x="140" y="68" font-size="10" fill="#7A6050" font-family="sans-serif" text-anchor="middle">Punto Stretch · av→ind→av elastico</text>
</svg>`,

'#10': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80">
  <rect width="280" height="80" fill="#faf7f2" rx="6"/>
  <g stroke="#7A4E7A" stroke-width="1.8" stroke-linecap="round">
    ${Array.from({length:8},(_,i)=>{const x=18+i*30;return`<line x1="${x}" y1="14" x2="${x+16}" y2="36"/><line x1="${x+16}" y1="14" x2="${x}" y2="36"/>`}).join('')}
    ${Array.from({length:7},(_,i)=>{const x=32+i*30;return`<line x1="${x}" y1="44" x2="${x+16}" y2="66"/><line x1="${x+16}" y1="44" x2="${x}" y2="66"/>`}).join('')}
  </g>
  <text x="140" y="78" font-size="10" fill="#7A6050" font-family="sans-serif" text-anchor="middle">Punto a Croce decorativo</text>
</svg>`,

'#13': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80">
  <rect width="280" height="80" fill="#faf7f2" rx="6"/>
  <g fill="none" stroke="#C9A227" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    ${Array.from({length:7},(_,i)=>{const x=20+i*36;return`<polyline points="${x},40 ${x+18},18 ${x+36},40 ${x+18},62 ${x},40"/>`}).join('')}
  </g>
  <g fill="#C9A227">
    ${Array.from({length:8},(_,i)=>`<circle cx="${20+i*36}" cy="40" r="2.5"/>`).join('')}
  </g>
  <text x="140" y="76" font-size="10" fill="#7A6050" font-family="sans-serif" text-anchor="middle">Punto Alveare · Smocking</text>
</svg>`,

'#15': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80">
  <rect width="280" height="80" fill="#faf7f2" rx="6"/>
  <rect x="30" y="10" width="220" height="60" rx="6" fill="#f0ebe0" stroke="#ddd0be" stroke-width="1"/>
  <!-- buttonhole -->
  <rect x="60" y="18" width="12" height="44" rx="2" fill="#5C7A4E"/>
  <rect x="208" y="18" width="12" height="44" rx="2" fill="#5C7A4E"/>
  <rect x="58" y="16" width="164" height="10" rx="2" fill="#3d6b32"/>
  <rect x="58" y="54" width="164" height="10" rx="2" fill="#3d6b32"/>
  <line x1="140" y1="22" x2="140" y2="58" stroke="#C47A5A" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="140" y="76" font-size="10" fill="#7A6050" font-family="sans-serif" text-anchor="middle">Asola 4 passaggi automatica</text>
</svg>`,

};

/* ===== NEEDLE SVG ===== */
const NEEDLE_SVG = {
  universale: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 200" width="60" height="200">
    <rect x="24" y="8" width="12" height="8" rx="2" fill="#aaa" stroke="#777" stroke-width="1"/>
    <rect x="26" y="14" width="8" height="100" rx="2" fill="#c0c0c0" stroke="#888" stroke-width="1"/>
    <ellipse cx="30" cy="130" rx="4" ry="5" fill="#444" stroke="#333" stroke-width="0.5"/>
    <path d="M27,130 L30,192 L33,130" fill="#c0c0c0" stroke="#888" stroke-width="1"/>
    <circle cx="30" cy="190" r="2.5" fill="#c0c0c0"/>
  </svg>`,
  jersey: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 200" width="60" height="200">
    <rect x="24" y="8" width="12" height="8" rx="2" fill="#aaa" stroke="#777" stroke-width="1"/>
    <rect x="26" y="14" width="8" height="100" rx="2" fill="#c0c0c0" stroke="#888" stroke-width="1"/>
    <ellipse cx="30" cy="130" rx="4" ry="5" fill="#444" stroke="#333" stroke-width="0.5"/>
    <path d="M27,130 L30,182 L33,130" fill="#c0c0c0" stroke="#888" stroke-width="1"/>
    <circle cx="30" cy="184" r="4.5" fill="#C9A227" stroke="#a07b15" stroke-width="1.5"/>
  </svg>`,
  jeans: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 200" width="60" height="200">
    <rect x="24" y="8" width="12" height="8" rx="2" fill="#4A6B9A" stroke="#3a5080" stroke-width="1"/>
    <rect x="26" y="14" width="8" height="100" rx="2" fill="#6A8BAA" stroke="#4A6B9A" stroke-width="1"/>
    <ellipse cx="30" cy="130" rx="4" ry="5" fill="#333" stroke="#222" stroke-width="0.5"/>
    <path d="M27,130 L30,194 L33,130" fill="#6A8BAA" stroke="#4A6B9A" stroke-width="1"/>
    <circle cx="30" cy="192" r="1.5" fill="#4A6B9A"/>
  </svg>`,
  pelle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 200" width="60" height="200">
    <rect x="24" y="8" width="12" height="8" rx="2" fill="#C47A5A" stroke="#a05030" stroke-width="1"/>
    <rect x="26" y="14" width="8" height="100" rx="2" fill="#d49a7a" stroke="#C47A5A" stroke-width="1"/>
    <ellipse cx="30" cy="130" rx="4" ry="5" fill="#444" stroke="#333" stroke-width="0.5"/>
    <polygon points="26,130 30,196 34,130" fill="#C47A5A" stroke="#a05030" stroke-width="1.5"/>
  </svg>`,
};
