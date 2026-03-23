const CACHE_NAME = 'lcdr-cache-v1';
// Используем относительные пути без точек для стабильности на GH Pages
const urlsToCache = [
  '/status-dashboard/',
  '/status-dashboard/index.html',
  '/status-dashboard/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
