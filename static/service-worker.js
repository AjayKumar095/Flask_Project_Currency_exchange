// service-worker.js
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/static/icon.png',  // Add paths to other static assets
    // ...
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
