const CACHE_NAME = 'currency-converter-cache-v1';
const urlsToCache = [
  '/',
  '/static/icon.png',
  '/static/favicon.png',
  '/static/manifest.json',
  '/service-worker.js',
  '/your-other-assets-here.css', // Add other assets as needed
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
