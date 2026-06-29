/* ===== Service Worker — Cucito Companion =====
   Offline-first: precache dell'app shell, runtime cache per immagini.
   Cambia CACHE_VERSION a ogni rilascio per invalidare la cache. */
const CACHE_VERSION = 'cucito-v1';
const CORE_CACHE = CACHE_VERSION + '-core';
const RUNTIME_CACHE = CACHE_VERSION + '-runtime';

// File essenziali dell'app (app shell)
const CORE_ASSETS = [
  '.',
  'index.html',
  'manifest.json',
  'src/styles.css',
  'src/data.js',
  'src/illustrations.js',
  'src/app.js',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CORE_CACHE)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => !k.startsWith(CACHE_VERSION)).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Solo richieste same-origin: i link esterni (risorse online) passano alla rete.
  if (url.origin !== self.location.origin) return;

  // Immagini: cache-first con popolamento runtime (le foto vengono salvate al primo uso).
  if (req.destination === 'image' || /\.(jpg|jpeg|png|webp|svg|gif)$/i.test(url.pathname)) {
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(RUNTIME_CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => cached))
    );
    return;
  }

  // App shell: cache-first, fallback rete, poi index.html per le navigazioni.
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).catch(() => {
      if (req.mode === 'navigate') return caches.match('index.html');
    }))
  );
});
