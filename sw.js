self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
            '/do-nk/',
            '/do-nk/index.html',
            '/do-nk/index.js',
            '/do-nk/sw.js',
            
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
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/sw-test/gallery/myLittleVader.jpg');
      });
    }
  }));
});
