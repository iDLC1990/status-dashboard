const CACHE_NAME = 'lcdr-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Установка воркера и кеширование ресурсов
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Ответы на запросы
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
