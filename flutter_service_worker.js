'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1b272c991342985908ea3c3136468c07",
"assets/AssetManifest.bin.json": "f070a1d4ccd98e8052c833ad651bd4bf",
"assets/AssetManifest.json": "64c738b19ef8e4126a1c9a6d6f94dbfa",
"assets/assets/ai-generated-8915027.jpg": "9486853c9d6fe7c90253ec76b67638de",
"assets/assets/ai-generated-9093687.png": "5d3a5ffd389b9721ca821f990b061d68",
"assets/assets/bank%2520notes.jpg": "648a08019c4b8d814c2f1099719211e0",
"assets/assets/banknotes_1.jpg": "3164d974d2e9c795923d31e368c89b14",
"assets/assets/bank_notes_aesthetic.jpg": "e25a2aa40dedf08b10aab81649b0ca57",
"assets/assets/binary_code.jpg": "ddd1f63b9bc931fe95b2b9dc4dda8d09",
"assets/assets/board-453758.jpg": "e5ba37649a21f8f9a2874999bbb3334e",
"assets/assets/building_dark.jpg": "fb0e609738c4899368366adc1ff073ff",
"assets/assets/bulb%2520_light.jpg": "09a76c0c8d06a4c91f894b17f529caa2",
"assets/assets/bulb_dark.jpg": "b3acdf1fc500adad142d3819de2029f4",
"assets/assets/cables.jpg": "fdd906e7b5dbe39ca67fd3aba2bf04cc",
"assets/assets/connect.jpg": "c2d24e261cee0bd95269a23f88e01178",
"assets/assets/desk_setup.jpg": "8b30f1d40776cb587dee350c6d2b141b",
"assets/assets/dev.json": "a6c123f3494a83ca974a74fc164dae18",
"assets/assets/eye_zoomed.jpg": "778538a7cb616241789d45d2ecd14b0a",
"assets/assets/forex.jpg": "9689a869615ba0ecd16115c74134b6b6",
"assets/assets/forex_chart.jpg": "c96e522ce210863a14f31ff811487a05",
"assets/assets/globe.jpg": "e6f12fbeac101b85cbfec213816d73e6",
"assets/assets/intro.jpg": "9a2f8a3f744c20146cbc9e2f1eea3629",
"assets/assets/intro1.png": "2eccba457146a9e3a2ccb1158d136ade",
"assets/assets/keyboard.jpg": "d2a5722208c81da30aada45be7f7d0b3",
"assets/assets/laptop.jpg": "840df3ef0636660a9a5d059cbfbf25b1",
"assets/assets/login_app.png": "3346dad94a898c1678a036a0b368a157",
"assets/assets/office_building.jpg": "4d383e45e1d6f0540e037ce7e8937a67",
"assets/assets/sumup-MO7kLbpDRTc-unsplash.jpg": "824e062ea961e448586547eb59d17d03",
"assets/assets/todo.png": "734b391f84466327d6f9d01730407185",
"assets/assets/weather_app.png": "d5e8a42be645ee5340e21227abc435b7",
"assets/FontManifest.json": "09bb27794be7d8544d8409c6cadccb1d",
"assets/fonts/LondrinaOutline-Regular.ttf": "1205d80654ed28e2d42b8b9bce913a02",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "cb96975c08260c16020079fe425834f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "2647b4fe923e62d86493152e502a2e1f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9a3743169cc016fdb7ebb55598bd65ba",
"/": "9a3743169cc016fdb7ebb55598bd65ba",
"main.dart.js": "db5ca9628cbc4e7073fddaf55ed4aa3a",
"manifest.json": "2c266787b75e983ffa388c5d56770932",
"version.json": "93f36c3751ee3f609beda61cb5641710"};
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
