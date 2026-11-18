// Network-first: vždycky zkus čerstvou verzi (hlavně data.json),
// uloženou kopii použij jen bez připojení.
const CACHE = "vyprava-v1";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  e.respondWith(
    fetch(req, { cache: "no-store" })
      .then((res) => {
        if (res.ok && (new URL(req.url).origin === location.origin || req.url.includes("fonts."))) {
          const copy = res.clone();
          const key = new URL(req.url);
          if (key.origin === location.origin) key.search = "";
          caches.open(CACHE).then((c) => c.put(key.href, copy));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
