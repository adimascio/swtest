self.addEventListener('install', () => {
    console.log('installed !');
    self.skipWaiting(); // <-- magic in the air
});

self.addEventListener('fetch', function (event) {
    console.log('The service worker enters here...');
    event.respondWith(
        caches.open('swtest')
            .then(cache => cache.match(event.request))
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
