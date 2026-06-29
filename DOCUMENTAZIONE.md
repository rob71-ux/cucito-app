# Documentazione di sviluppo — Cucito Companion

Storico di cosa è stato fatto, decisioni tecniche e guida per le **implementazioni future**.
Le chiavi/credenziali NON sono qui: stanno in `CHIAVI-PRIVATE.md` (escluso da git).

---

## 1. Cos'è

App di riferimento per il cucito: **piedini, aghi, fili, tessuti, strumenti, merceria,
interfodere/stabilizzatori, cartamodelli** (con modelli gratuiti scaricabili), **glossario IT↔EN**
e una sezione completa sulla macchina **Singer Heavy Duty 4432**.

Gira in due modi **dallo stesso codice**:
- **Desktop**: Electron (`npm install` poi `npm start`)
- **iPad / Web**: PWA pubblicata su GitHub Pages, installabile da Safari, funziona offline.

- Sito live: https://rob71-ux.github.io/cucito-app/
- Repo: https://github.com/rob71-ux/cucito-app

---

## 2. Struttura dei file

```
index.html            Pagina principale + meta PWA/iOS + registrazione service worker
main.js               Bootstrap Electron (apre link esterni nel browser di sistema)
manifest.json         Manifest PWA (nome, icone, standalone)
sw.js                 Service worker (offline: precache app shell + cache runtime immagini)
package.json          Dipendenze (electron) e script `start`
.nojekyll             Dice a GitHub Pages di servire i file statici senza Jekyll
src/
  data.js             TUTTI i contenuti testuali (piedini, aghi, tessuti, cartamodelli, ...)
  illustrations.js    Illustrazioni SVG / <img> per piedini, punti, aghi
  media-index.js      Indice immagini per Strumenti/Merceria/Stabilizzatori (generato)
  app.js              Logica: navigazione, rendering di ogni sezione, modali, ricerca, preferiti
  styles.css          Stile completo (tema chiaro/scuro, layout responsive)
  sw-register.js      Registra il service worker (solo su http/https, non in Electron)
assets/icons/         Icone PWA (192/512/maskable/apple-touch 180)
assets/{aghi,piedini,punti}/  SVG di supporto
image/img-*/          Fotografie per categoria (tessuti, aghi, fili, manutenzione,
                      strumenti, merceria, stabilizzatori, piedini)
```

---

## 3. Architettura: un codice, due piattaforme

- Il cuore è **web puro** (HTML/CSS/JS). Electron lo carica da `file://`; GitHub Pages lo serve da `https://`.
- I **link esterni** usano `<a target="_blank" rel="noopener">`: in Electron li intercetta
  `setWindowOpenHandler` (in `main.js`) aprendoli nel browser di sistema; in PWA aprono una scheda.
  → **Non** usare `window.require('electron')` (non funziona con `contextIsolation: true`).
- Il **service worker** si registra solo se `location.protocol` è http(s) (vedi `sw-register.js`),
  così in Electron (`file://`) viene saltato.

### ⚠️ Vincolo CSP (importantissimo)
`index.html` ha una Content-Security-Policy `default-src 'self'`. Questo **blocca**:
- `eval()`
- gli **handler inline** negli attributi: `onclick`, `onerror`, `onload`, ecc.
- gli **script inline** (`<script> ... </script>` dentro l'HTML)

→ Regola d'oro: **mai** handler inline o eval. Usare sempre `addEventListener` + `data-*`,
e mettere il JS in **file esterni**. (Le immagini che non si caricano vengono nascoste da un
handler globale `error` in cattura, in fondo a `app.js`.)

### Note per iPad / PWA
- `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">` (essenziale).
- Meta `apple-mobile-web-app-*` per la modalità standalone; `apple-touch-icon`.
- CSS responsive: sotto **860px** la sidebar diventa a scomparsa con hamburger (`#navToggle`);
  sotto 560px layout a colonna singola. `env(safe-area-inset-*)` per il notch.
- `#searchInput` ha `font-size:16px` su mobile per evitare lo zoom automatico di iOS.

---

## 4. Pipeline immagini (come scaricarne altre in futuro)

**Fonte che funziona: Pexels** (foto-prodotto moderne e pertinenti).
**Da evitare:** Wikimedia Commons e Openverse/Flickr → per termini di cucito danno risultati
pessimi (dipinti, statue, reperti archeologici per "silk"/"needle"). Provati e scartati.

Metodo collaudato (script Python, vedi cartella `tools/`):
1. Per ogni elemento: una o più **query** in inglese + una lista di **parole chiave obbligatorie**.
2. Si interroga Pexels (`per_page=20`), si accetta la prima foto il cui campo `alt` contiene
   una keyword, con **dedup per id** (niente foto ripetute) e **filtro anti-persone** sui tessuti.
3. Si scarica `src.large` nella cartella giusta. Per Strumenti/Merceria/Stabilizzatori il nome file
   è lo *slug* del nome italiano e si genera l'indice `src/media-index.js` (mappa nome→percorso).
4. **Verifica visiva**: si genera un *provino a contatto* (montaggio di miniature con PIL) e lo si
   guarda — molto più efficiente che aprire le foto una a una. Le foto sbagliate si correggono con
   query/keyword più severe; se Pexels non ha nulla di pertinente si lascia l'**emoji** (più onesto).

Header obbligatori per Pexels: `Authorization: <key>` **e** `User-Agent: Mozilla/5.0` (senza UA → 403).
La key è in `CHIAVI-PRIVATE.md`. Gli script in `tools/` la leggono dalla variabile d'ambiente `PEXELS_KEY`.

Cartelle immagini e come sono collegate:
- `piedini` → `src/illustrations.js` (oggetto `FOOT_SVG`, usa `<img>` o SVG)
- `aghi`, `fili`, `tessuti`, `manutenzione` → campo `img:` dentro `src/data.js`
- `strumenti`, `merceria`, `stabilizzatori` → `src/media-index.js` (mappa nome→file), con fallback emoji

---

## 5. Cosa è stato fatto (storico)

1. **Immagini** (~94 reali da Pexels): tessuti, aghi, fili, manutenzione, strumenti, merceria,
   stabilizzatori. Verificate visivamente. Pochi articoli di nicchia restano con emoji.
2. **Fix tecnici / sicurezza**: rimossi `eval()` e tutti gli handler inline (violavano la CSP);
   link esterni resi compatibili Electron+PWA; accordion manutenzione riparato.
3. **PWA per iPad**: `manifest.json`, `sw.js` (offline), icone, meta viewport/iOS, CSS responsive
   con sidebar a scomparsa, script SW esternalizzato.
4. **UX (Fase D)**: ricerca globale estesa a tutte le sezioni (apre il dettaglio quando possibile);
   schede Preferiti cliccabili; badge della sidebar calcolati dai dati reali; modali su Strumenti e
   Merceria; foto reali anche nei modali di aghi/fili/tessuti; modali estratti in funzioni riutilizzabili.
5. **Cartamodelli gratuiti**: nuova tab "⬇️ Gratuiti" con 10 fonti affidabili di PDF gratis
   (Mood, Peppermint, Cucicucicoo IT, Sew Can She, AllFreeSewing, Pattydoo, Closet Core, Purl Soho,
   Makerist, Burda), incluse nella ricerca.
6. **Deploy**: repo GitHub pubblico + GitHub Pages (branch `main`, root, `.nojekyll`).

---

## 6. Come aggiornare il sito

1. Modifica i file.
2. `git add -A && git commit -m "..."`.
3. Push su `main` (vedi `CHIAVI-PRIVATE.md` per il comando con token).
4. GitHub Pages ricostruisce da solo in **1-2 minuti**.

---

## 7. Idee per implementazioni future

- Migliorare le poche immagini ancora generiche (alcuni strumenti/righelli) con foto più mirate.
- Aggiungere foto agli articoli di nicchia rimasti con emoji (seam roller, guancialetto, sbieco,
  stabilizzatore solubile) se si trova una fonte adatta.
- Dare immagini anche alle voci del **glossario** o ai **punti** della Singer.
- Sezione "progetti" passo-passo con foto.
- Salvataggio preferiti/sincronizzazione tra dispositivi (oggi è `localStorage`, solo locale).
- Migliorare le icone PWA (versione più rifinita) e aggiungere screenshot al manifest.
- Eventuale pacchettizzazione nativa iOS con **Capacitor** (richiede Mac + Xcode) se un giorno
  si volesse pubblicare sull'App Store invece della PWA.
