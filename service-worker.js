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

// the code in stall the service worker by adding files to the prechase so the app can use the cache
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