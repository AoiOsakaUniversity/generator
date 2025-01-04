const CACHE_NAME = 'shitta-gekirai-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
];

// インストールイベント
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching all resources');
            return cache.addAll(urlsToCache);
        }).catch((error) => {
            console.error('[Service Worker] Caching failed:', error);
        })
    );
});

// フェッチイベント
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                console.log(`[Service Worker] Returning cached resource: ${event.request.url}`);
                return response;
            }
            console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
            return fetch(event.request).catch((error) => {
                console.error(`[Service Worker] Fetch failed: ${event.request.url}`, error);
            });
        })
    );
});

// アクティベートイベント
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        console.log(`[Service Worker] Deleting old cache: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('[Service Worker] Activation complete');
        })
    );
});
