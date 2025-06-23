'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c25eaa19f1663404f11b7cab1854f568",
".git/config": "2fc77867fd690a9dddcdfe9cb3c4a43b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cc55b94ef83083002f482b1b2ac9634d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b754efb7a1ffa9d60c1a3df3e0508de7",
".git/logs/refs/heads/main": "c5b6ef8116da1161034a06d2ccddccca",
".git/logs/refs/remotes/origin/main": "3b0df153732e7c51887e3a32842ee073",
".git/objects/00/0f9653357d20e3df3f568f204d6a6cb82a0934": "ba30a112c4d1510460645d91a31bc64a",
".git/objects/00/79e1355eb1d88c9791aa48b51c9ed9b82879c7": "20d01e2ab2617247922a58a1f0d77717",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/e10bb6b96684cc187e76ea50754bb484047b56": "200230f28e0f8ca8b98752f8e772e4c8",
".git/objects/0b/b813aeaf3f7027ad27469a27067b362751b140": "a2e0e99e84cd8c4b38cb7a4a35f302a0",
".git/objects/13/c88002fe55b48b77247a0b7f2803200a808e0c": "1eb0aaa38cbab49e5aea0cf8f87ad04d",
".git/objects/1b/83508449aa466b51862aacde615be6a4820340": "0fdd64b767b9f08369004b9568f4da45",
".git/objects/1b/c016404cd99d2b4c588353d39e076bdaa91988": "4348479ffb94f605fe8bf6fc0e925604",
".git/objects/1f/47c850e2e73d793962b2d28d842c2b65c26d81": "198ca7b1b7955abb634a6b4120211d4a",
".git/objects/25/7d6171132353e6875400e976490c1ac174128e": "7cba53c109568f5544b2d43637372a27",
".git/objects/26/3ecb7bba2e1fee2d6a83426e890f18825fea0c": "4b8c571a79b2167c8deef2685ea4def0",
".git/objects/2e/0ac12da86d575c0ef9819e5623a3312ce62486": "d7d5a3d94b960c60338e0c8883ef95fd",
".git/objects/2f/3973c9bda92c4cd4eaefca5b0de102d0e4fef5": "c2d006e609ebed952759d2b425f3af3d",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/2a1e3393159ea94eb514f040111287c1414ef9": "2e9f15009184a86d16ea145dd23e5d6f",
".git/objects/3f/0ac0cdc54ba5342dec1677c3a1b3d71cf4971b": "93ffeea830da22ce28efc7ad8547966b",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/44/d48d32bc5d0fb0f2e9cd7c5d38bb4df3458b46": "d1b8b171e2c39b1b745fcfd08f6c4945",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/52/ea9398b1217f98368c35c75d441cb805584083": "cbe80e22b2f16068037a5865605fa508",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/7b5f46e595d2887bad225cfe3f0b92a24fcee2": "cb3db0f2443afaaf9efd9f1125a34743",
".git/objects/5b/a0ce2d362f5bcf122f56d3fd5ce8274f9e9b07": "4ae2fdb21c08b632bf754577da99e073",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/66/d4d1355c37ea80c6322ecb8310dd9deb01e782": "375ac83ab802b74a3b88f2239568a305",
".git/objects/6a/cc8352d0011909648a43d9e8ccc21dff234aa2": "fa8524c2b8acfc23f9a0c6de8035e3d3",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/75/2a6ba980c9ae405bef32cb5f44acde132ff2ab": "9551377acef084a8967d6b38e85d1fe3",
".git/objects/75/f2685816840c8ddf89146c24873f7bdc75f004": "6c1a39a742e3cea06233901f5dd91811",
".git/objects/78/75ff49458e367c24244a51c6fec7182149b2b5": "7fda08d5b6ae6ee635f45178355283e5",
".git/objects/7c/36c06b1e65c3755819a20eacd5cc296b048796": "1cf91db3f26e09c426eda6c6955f30d6",
".git/objects/7c/8245f62668ea5449d821caa98a43215cbcd4fd": "3e7095aea3e8003a6883096d01b6114f",
".git/objects/82/748e13b922de31b72133b4d2059530444d6aa4": "91ef43f1b919fc96313e32a92f8a27bc",
".git/objects/88/9c808ccf6215c3e2f7ee4c2b8722cfaa7c6550": "8b64c2cd77214ceffe0ede4bf880d74e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/b6cf0504295dbe5d9229e6c413282694167825": "3e8f39b9f0821fc8d0c0df873be7a1b3",
".git/objects/96/42fc6e320bb7a011d2ffae208ca5256da4619e": "3ec5efec6a25526baad1eddb1c772b1e",
".git/objects/a5/77aed8eb8dca6f20bf8eb94f80f15c7d5b0a60": "6e73b6477b537b743fd7a3e1126e8515",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/ba6b2aa09a15f24d31707a0455ee5d75dd132d": "61bb5bd874dec8c1617deafac001e949",
".git/objects/b1/46cc5acc8a1288ce3a0eb60f78c5879bc4f5dc": "bb25883ae52c1422988404aebc761cee",
".git/objects/b4/5dfd7689d8cd157f33788e1865df28029b05d0": "cff8f353df22cba30c4a039eceb50d9a",
".git/objects/b6/6c42cf90e7ae743f462b46c12ed5b49d76ed2b": "fe76cbf53604700b9a76f7224af6772f",
".git/objects/b6/91865619154024a3b5288246fa7adee263dd45": "cbe148112e4a118a5731c8ea5c4783f5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/12f9d715101f04e2376ee079fa1d56c7d00647": "e5b6617471f5d384ef4c04a801a5854d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/f51c280519077870743667ce230842e507477f": "8c4d0fc7b08200db1d7091836d3abcf9",
".git/objects/bc/b14c490a9afecdf0a5d0a50d5f70bb68bed8a5": "7a019e2b4cbe6c3b30cef1ab81d4d2c3",
".git/objects/c8/699e6455aced3dedfe6a5d9a03dcc0cb7c8437": "f26ee168892e5c8d6d7716016f4116af",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/7fd86dc81971f3b61ddb4a3b4ba6fb55a83387": "901e948e85812ded1dfe9bfa7c28ced0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/274e23e931e7713ddb367defe0653d9c84d5c0": "fdf3d5681b2884bb7244f360351555a8",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/e7e758e26b89f5ed73c02d43778f190d911b42": "12211307f22c79ef673df3e3613a9e61",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/80522ff63285ed928b251d01916cc2066e2aa0": "020bd87c927c134a40a8b10fb89fc5c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/a95c5081544db7ced04cac14ece05ae450b174": "9a67ce0f84fe3fc2ecc1d533630805a5",
".git/objects/fd/60f994618166ce1f0c364b6e2d45e144cc3ab7": "046f97f59e82255b6d106ec414e7b778",
".git/refs/heads/main": "0eb27c979c7e9fee6cbb70594e2e1bdb",
".git/refs/remotes/origin/main": "0eb27c979c7e9fee6cbb70594e2e1bdb",
"assets/AssetManifest.bin": "1b272c991342985908ea3c3136468c07",
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
"assets/NOTICES": "349f19e8121359037bc555effd364b52",
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
"flutter_bootstrap.js": "9770a749aec6937dfc349b3bd8e613f5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9a3743169cc016fdb7ebb55598bd65ba",
"/": "9a3743169cc016fdb7ebb55598bd65ba",
"main.dart.js": "a08dc6bbefc46fe8f2433fc28bdfa01d",
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
