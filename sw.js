'use strict';
const CACHE_STATIC = 'static-cache-v26/7.4';

function hndlEventInstall(evt) {
    /**
     * @returns {Promise<void>}
     */
    async function cacheStaticFiles() {
        const files = [
          
           
            '/do-nk/',
            '/do-nk/sw.js',
            '/do-nk/index.js',
            '/do-nk/Re/dmloader.js',
            '/do-nk/Re/Re_wasm.js',
            '/do-nk/Re/Re.wasm',
            
           /** 
            '/do-nk/',
            '/do-nk/index.html',
           
            '/do-nk/Re/',
            '/do-nk/Re/index.html',
           
            '/do-nk/Moon Golf/'
           
            '/do-nk/Re/Re_asmjs.js',
            '/do-nk/Re/Re.symbols',
            '/do-nk/Re/img-shapes.png',
            
            '/do-nk/Re/archive/archive_files.json',
            '/do-nk/Re/archive/game.arcd0',
            '/do-nk/Re/archive/game.arci0',
            '/do-nk/Re/archive/game.dmanifest0',
            '/do-nk/Re/archive/game.projectc0',
            '/do-nk/Re/archive/game.public.der0',*/
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


// Очищает старый кэш (не забудь апнуть версию кэша при апдейте)
/**self.addEventListener('activate', event => {
   const cacheWhitelist = [CACHE_STATIC];
   event.waitUntil(
       caches.keys()
           .then(keyList =>
               Promise.all(keyList.map(key => {
                   if (!cacheWhitelist.includes(key)) {
                       console.log('Deleting cache: ' + key)
                       return caches.delete(key);
                   }
               }))
           )
   );
});
*/

self.addEventListener('activate', (event) => {
  var cacheKeeplist = [CACHE_STATIC];

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});


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
