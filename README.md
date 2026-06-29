# Cucito Companion 🧵

Guida completa al cucito: piedini, aghi, fili, tessuti, cartamodelli (con modelli gratuiti scaricabili), strumenti, merceria, interfodere, glossario IT↔EN e tutto sulla macchina **Singer Heavy Duty 4432**.

Funziona in due modi dallo **stesso codice**:

- **Desktop (Electron)** — `npm install` poi `npm start`
- **iPad / Web (PWA)** — pubblicata su GitHub Pages, installabile da Safari con "Aggiungi a Home". Funziona offline.

## Uso come app desktop

```bash
npm install
npm start
```

## Struttura

- `index.html` — pagina principale
- `src/data.js` — tutti i contenuti (piedini, aghi, tessuti, ecc.)
- `src/illustrations.js` — illustrazioni SVG/immagini
- `src/media-index.js` — indice immagini per strumenti/merceria/stabilizzatori
- `src/app.js` — logica e rendering
- `src/styles.css` — stile (con tema chiaro/scuro e layout responsive)
- `manifest.json` + `sw.js` — supporto PWA (installazione + offline)
- `image/` — fotografie delle varie categorie
- `main.js` — bootstrap Electron

## PWA / iPad

L'app è una Progressive Web App: una volta aperta da un URL HTTPS (GitHub Pages),
il service worker memorizza i file e le immagini per l'uso **offline**.
Su iPad: apri l'URL in Safari → Condividi → "Aggiungi a Home".
