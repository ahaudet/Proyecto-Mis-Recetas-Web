const CACHE_NAME = 'recetario-v2';
const ASSETS = [
  './',
  './index.html',
  './recetas.json',
  './especias.json',
  './libro.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});