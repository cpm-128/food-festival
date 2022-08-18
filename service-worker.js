const APP_PREFIX = 'FoodFest-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

// caching JS and HTML, not images
// browsers have cahce limits so with JS and HTML, the site is atleast functional
const FILES_TO_CACHE = [
    './index.html',
    './events.html',
    './tickets.html',
    './schedule.html',
    './assets/css/style.css',
    './assets/css/bootstrap.css',
    './assets/css/tickets.css',
    './dist/app.bundle.js',
    './dist/events.bundle.js',
    './dist/schedule.bundle.js'
];

// the code install the service worker by adding files to the prechase so the app can use the cache
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('>> installing cache >> ' + CACHE_NAME)
            return cache.addAll(FILES_TO_CACHE)
        })
    )
})

// activate the service worker
self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keyList) {
            let cacheKeeplist = keyList.filter(function (key) {
                return key.indexOf(APP_PREFIX);
            });
            cacheKeeplist.push(CACHE_NAME);
            return Promise.all(
                keyList.map(function (key, i) {
                    if (cacheKeeplist.indexOf(key) === -1) {
                        console.log('>> Deleting cache >> ' + keyList[i] );
                        return caches.delete(keyList[i]);
                    }
                })
            );
        })
    );
});

// tell the application to retrieve the information from the cache
self.addEventListener('fetch', function (e) {
    console.log('>> fetch request >> ' + e.request.url)
    e.respondWith(
        // check if the request is stored in the cache or not
        caches.match(e.request).then(function (request) {
            if (request) {
                console.log('>> responding with cache >> ' + e.request.url)
                return request
            } // if not in cache, retrieve from online network as usual
            else {
                console.log('>> file is not cached, fetching >> ' + e.request.url)
                return fetch(e.request)
            }
        })
    )
})