/* 輕量離線快取：靜態頁與樣式；更新時遞增 CACHE */
const CACHE = "sg-trip-v5";
const ASSETS = [
  "./index.html",
  "./singapore.html",
  "./map.html",
  "./order.html",
  "./timeline.html",
  "./cruise.html",
  "./checklist.html",
  "./links.html",
  "./manifest.json",
  "./.nojekyll",
  "./assets/app.css",
  "./assets/icon.svg",
  "./assets/singapore-pois.kml",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((res) => {
          const copy = res.clone();
          if (res.status === 200) {
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return res;
        })
        .catch(() => cached);
    })
  );
});
