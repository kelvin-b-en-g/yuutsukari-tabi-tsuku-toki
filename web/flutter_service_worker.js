'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b667a06c693af135fbf59617e2a085cb",
"assets/AssetManifest.bin.json": "86152bc1b9bcb5596454ca0700d6fe85",
"assets/AssetManifest.json": "8f9bea4a461562a4be42950bdf5089ad",
"assets/assets/audios/bgm/suspense.wav": "a28182bf351f7f3c11f4d444f2288f9b",
"assets/assets/audios/sfx/rocket.wav": "41b981eed6cd5bb6c5d7374901a4601b",
"assets/assets/audios/voice/retro.wav": "a1f53bff53a6848323e3dba21655cf26",
"assets/assets/backgrounds/bg_bird_duck_ahiru.png": "73cd26a5a424bd25c605aed5a2633a16",
"assets/assets/backgrounds/haikei.jpg": "29de7e8c62dee58cb4ec24eea6a7d1f1",
"assets/assets/bird_duck_ahiru.png": "73cd26a5a424bd25c605aed5a2633a16",
"assets/assets/haikei.jpg": "29de7e8c62dee58cb4ec24eea6a7d1f1",
"assets/assets/images/bird_duck_ahiru.png": "73cd26a5a424bd25c605aed5a2633a16",
"assets/assets/images/piano_usagi.png": "2628729af4e14c0ea445baedc9d4447f",
"assets/assets/images/tachie.png": "fcd80d4161285c231888602206db3a08",
"assets/assets/images/tachie1-1920.png": "3130422dd25dd04fa17300de262e02d7",
"assets/assets/images/tachie1-p1.png": "4ce12ee6c9b45044dcd5ec5f0fdf1547",
"assets/assets/images/tachie1.png": "c92d249a872ba997504fb4a59bfa6bd7",
"assets/assets/images/tachie2-1920.png": "ccca3d19ef11c32e9f65e4cd757f43c0",
"assets/assets/images/tachie2-p1.png": "049c030ebfdbd15d2b643a3b966b5730",
"assets/assets/images/tachie2.png": "1d38551117d5edb18d3ae8e2929f8f0b",
"assets/assets/images/textbox-trans.png": "4c0d0e29eb9cb5c0d3ace9bbf6d3cafc",
"assets/assets/images/textbox.jpg": "dc34a239ee147943c46e4f73b46e3c57",
"assets/assets/images/textbox1.jpg": "dc34a239ee147943c46e4f73b46e3c57",
"assets/assets/piano_usagi.png": "2628729af4e14c0ea445baedc9d4447f",
"assets/assets/scenario/scene1.txt": "4cfb13be8fe007a6e816914b3f35caa7",
"assets/assets/scenario/scene1.yuu": "57f7da2eb56d142bcae313b533e35189",
"assets/assets/scenario/scene2.yuu": "3e9f0a450d086cb92e975173bbdea110",
"assets/assets/tachie.png": "fcd80d4161285c231888602206db3a08",
"assets/assets/tachie1.png": "4ce12ee6c9b45044dcd5ec5f0fdf1547",
"assets/assets/tachie2.png": "049c030ebfdbd15d2b643a3b966b5730",
"assets/assets/textbox-trans.png": "4c0d0e29eb9cb5c0d3ace9bbf6d3cafc",
"assets/assets/textbox.jpg": "dc34a239ee147943c46e4f73b46e3c57",
"assets/assets/textbox1.jpg": "dc34a239ee147943c46e4f73b46e3c57",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "3fe943a3c285ed1c15c3480b2954ce16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "031ad61586482fb1c6bacfeea3513b89",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "222f371db5210b812bc9a5c03e609c6f",
"/": "222f371db5210b812bc9a5c03e609c6f",
"main.dart.js": "a809945ff3f1833dcfb40cfb416bf5b3",
"manifest.json": "30d6a09400db7f211581de387502e836",
"version.json": "1a8b3390e07e9573ebed64ae7ddb913b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
