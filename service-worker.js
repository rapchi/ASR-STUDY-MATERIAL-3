self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("asr-cache-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json"
        // यहाँ अपनी css, js, pdf files के paths भी add कर सकते हो
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
