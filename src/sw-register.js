/* Registrazione del service worker — solo quando l'app è servita via http/https
   (PWA su iPad/web). In Electron (file://) viene saltata. */
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .catch(err => console.warn('SW non registrato:', err));
  });
}
