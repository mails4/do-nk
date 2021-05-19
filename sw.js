'use strict';
const CACHE_STATIC = 'static-cache-v1';

function hndlEventInstall(evt) {
    /**
     * @returns {Promise<void>}
     */
    async function cacheStaticFiles() {
        const files = [
            '/do-nk/',
            '/do-nk/index.html',
            '/do-nk/index.js',
            '/do-nk/sw.js',
            /**
            '/do-nk/Re/index.html',
            '/do-nk/Re/dmloader.js',
            '/do-nk/Re/Re2_wasm.js',
            '/do-nk/Re/Re2_asmjs.js',
            '/do-nk/Re/Re2.wasm',
            '/do-nk/Re/Re2.symbols',
            '/do-nk/Re/Broken-Glass.png',
            '/do-nk/Re/s-l500.png',
          
            '/do-nk/Re/archive/archive_files.json',
            '/do-nk/Re/archive/game.arcd0',
            '/do-nk/Re/archive/game.arci0',
            '/do-nk/Re/archive/game.dmanifest0',
            '/do-nk/Re/archive/game.projectc0',
            '/do-nk/Re/archive/game.public.der0',
            */
            '/do-nk/Moon Golf/',
        ];
        const cacheStat = await caches.open(CACHE_STATIC);
        await Promise.all(
            files.map(function (url) {
                return cacheStat.add(url).catch(function (reason) {
                    console.log(`'${url}' failed: ${String(reason)}`);
                });
            })
        );
    }

    //  wait until all static files will be cached
    evt.waitUntil(cacheStaticFiles());
}

function hndlEventFetch(evt) {
    async function getFromCache() {
        const cache = await self.caches.open(CACHE_STATIC);
        const cachedResponse = await cache.match(evt.request);
        if (cachedResponse) {
            return cachedResponse;
        }
        // wait until resource will be fetched from server and stored in cache
        const resp = await fetch(evt.request);
        await cache.put(evt.request, resp.clone());
        return resp;
    }

    evt.respondWith(getFromCache());
}

self.addEventListener('install', hndlEventInstall);
self.addEventListener('fetch', hndlEventFetch);
