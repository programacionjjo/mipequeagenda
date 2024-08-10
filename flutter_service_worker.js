'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "18143fd3cfc691c01884af625fa59573",
"assets/AssetManifest.bin.json": "fe8244f4d07de96e127af756f0304c90",
"assets/AssetManifest.json": "28a9542c94ee9cb8e23a59c74f2d1f34",
"assets/assets/data/pequeagenda-8cfb9-34dc008f3dcc.json": "bd02cb2725e5476388cbe43f555d84a7",
"assets/assets/fonts/CrayonCrumble.ttf": "d00397b6739f2772c6747e007a7c8f16",
"assets/assets/fonts/LettersforLearners.ttf": "b8f6e2104c4ef4b5a0e50c84b7b53f1b",
"assets/assets/fonts/YoutubeStar.ttf": "6a9d3f00748be04ad3faa685359241a8",
"assets/assets/images/amazon_banner_listabebe.png": "f4480676008de5c91f8a440544a2edd5",
"assets/assets/images/amazon_banner_listaboda.png": "5c826993a6210ca046ead96ccf5a4122",
"assets/assets/images/caca_0.png": "940b132676dcff55b8377eab4b812a5a",
"assets/assets/images/caca_1.png": "51015712e5930fb8934444581a4bcfca",
"assets/assets/images/caca_2.png": "05a6c9f3b4026c8e3a37b85109b0a936",
"assets/assets/images/caca_3.png": "d2c09f6064ff74cfab81ab9d87511e31",
"assets/assets/images/caca_4.png": "1e723de8a37306b0b955e8f2aebf6263",
"assets/assets/images/camara_0.png": "22f753fdf551a41ff415846149674c8f",
"assets/assets/images/camara_01.png": "22f753fdf551a41ff415846149674c8f",
"assets/assets/images/camara_02.png": "946b945b340f225ef7d0d391fdb24365",
"assets/assets/images/camara_1.png": "6a87eb48de13833171ca46bedf00abb0",
"assets/assets/images/camara_2.png": "8a8d803e6d79edc9217652c58a198129",
"assets/assets/images/camara_3.png": "8a330c5669eda55df594b55ed34da68e",
"assets/assets/images/camara_4.png": "b4868c7081a2a83835ceb58c424675a3",
"assets/assets/images/camara_5.png": "51d5fa3dffc08f167caea6cb9448c79f",
"assets/assets/images/camara_6.png": "11ecd6cd62079ca6fae9ce7ac5f2b06a",
"assets/assets/images/camara_prohibido.png": "d887786b00a0472d6122d8bd8f2cb3a9",
"assets/assets/images/claqueta.png": "68a47d030e229d9ef335c6fa48e3b4fb",
"assets/assets/images/conf_agenda.png": "59991e2b66b9af76875862b35b766dd6",
"assets/assets/images/contabilidad.png": "dcb1237153a0e741dcc5f1ea375ab47e",
"assets/assets/images/dibujo_agenda.png": "c955b120a445a0a199496682846eeca1",
"assets/assets/images/dibujo_arroba.png": "b2630ff8c800c6895c63aba50a732a5d",
"assets/assets/images/dibujo_autorizacion.png": "a5aaa1a120ec040057b8924c9f5492a6",
"assets/assets/images/dibujo_biberon.png": "c3551daab5ce21abc01340986097983c",
"assets/assets/images/dibujo_calendario.png": "997f866da197cbddea4d160676d6ac2c",
"assets/assets/images/dibujo_calendario1.png": "997f866da197cbddea4d160676d6ac2c",
"assets/assets/images/dibujo_calendario2.png": "70de7d4a4b8e41d44e420574fdd5e8a2",
"assets/assets/images/dibujo_chupete.jpg": "2e3cd94b700202114d6b332290ab3e28",
"assets/assets/images/dibujo_comida.png": "f2a98c191287eb18a30fd372516f1fdd",
"assets/assets/images/dibujo_conf_misdatos.png": "2ea2fbe7579f5bacebe770f9a2832afc",
"assets/assets/images/dibujo_cuna.png": "f592c100ac26e5534a008609bd999e6e",
"assets/assets/images/dibujo_desayuno.png": "cc4a27d334a8bb568ffc43aeb1d04273",
"assets/assets/images/dibujo_gorrococinero.png": "6b71a6eb35997f1aa4491fbb7dbc2661",
"assets/assets/images/dibujo_gorrococinero1.png": "6b71a6eb35997f1aa4491fbb7dbc2661",
"assets/assets/images/dibujo_gorrococinero2.png": "d689f094ac22d61811e9b4c9457352a9",
"assets/assets/images/dibujo_lupa.png": "26c325fc73307b0d2ea58e51521a335c",
"assets/assets/images/dibujo_mensajes.png": "4ecf33688b94345045258b4dfb926279",
"assets/assets/images/dibujo_mensajes1.png": "4ecf33688b94345045258b4dfb926279",
"assets/assets/images/dibujo_mensajes2.png": "4d064c227594b079717713430ff9027a",
"assets/assets/images/dibujo_merienda.png": "8ed69207d0b7a9775ab1498eb06decc5",
"assets/assets/images/dibujo_numerodos.png": "dc4522f2f3b2547d46d13276d1863ee0",
"assets/assets/images/dibujo_numerouno.png": "ff71f7e3d2136a98fa943294c586c350",
"assets/assets/images/dibujo_ojo.png": "ef638e15792627d5a9f190ee097c2346",
"assets/assets/images/dibujo_ojo_tachado.png": "b80b73e407bc408f3df055fc83cc51fa",
"assets/assets/images/dibujo_olvido_pass.png": "cd85110246f029f008a4f0adc465c3fb",
"assets/assets/images/dibujo_todolist.png": "5a7bef91830505d0a34adadd225ec748",
"assets/assets/images/dibujo_todolist_tachado.png": "068d90a5d1bd2db54f767c15209f8502",
"assets/assets/images/error_ops.png": "4d61785469bfb241efd0e0397b2e746e",
"assets/assets/images/euro.png": "7a64058cb07b1b4f9be8da2ed6b363b4",
"assets/assets/images/flecha_ant.png": "b098e00b0c5e42a72bce77443c695688",
"assets/assets/images/flecha_sig.png": "784d9e1f33d3d3a44f5d09a08bd0b615",
"assets/assets/images/gorro_cumple.png": "90bd6bccb1f2486f0300c0e22f5933a4",
"assets/assets/images/hacienda.png": "745bcb6e6e3f981469e1644881c61857",
"assets/assets/images/icono_adjuntar.png": "6adff33a6f2e63eae83c5e35ca823925",
"assets/assets/images/icono_agenda.jpeg": "66e1df7befcf767174ae2ad9a5532b78",
"assets/assets/images/icono_cambiar.png": "6fe91d7b72bea41ae343a17e2dbb0d0a",
"assets/assets/images/icono_candado.png": "b5f05e89b7d6b4e950994a74c87beeda",
"assets/assets/images/icono_clase.png": "28deede75facaa80505a573e82c3798d",
"assets/assets/images/icono_comunicado.png": "423b9e2a298e1619b37a9232db0b31b7",
"assets/assets/images/icono_comunicado1.png": "423b9e2a298e1619b37a9232db0b31b7",
"assets/assets/images/icono_comunicado2.png": "b08c8c1ff9d3a2fbb7c8369b4c74fcf8",
"assets/assets/images/icono_configurar_lapiz.png": "4c4e5721cde5d028b18fb1402acd09d1",
"assets/assets/images/icono_eliminar.png": "2420a2485f5476a0442e81fb6e0d5c1a",
"assets/assets/images/icono_eliminar_imagen.png": "b1aecd10cff04501fbd90f0bdb8eca2a",
"assets/assets/images/icono_email.png": "96f0547fdb99ec2e70ffce1564b391c1",
"assets/assets/images/icono_enviar_agenda.png": "0d49f50faca8a71ecbe11e324a0b6fc9",
"assets/assets/images/icono_escuela.png": "0693799379943bc1e0cb6febba17f9a2",
"assets/assets/images/icono_facebook.png": "16c37cd2e902760c17c41b4bb16849ae",
"assets/assets/images/icono_flecha_atras.png": "e74878907ac39a1c1fe5be01ba2a05fc",
"assets/assets/images/icono_flecha_der.png": "3f12572a7eaeb02e4085c0ad34c7dd03",
"assets/assets/images/icono_flecha_izq.png": "2b17fa8df71dbfd75e7aa97a9dc443ca",
"assets/assets/images/icono_imagen_pdf.png": "962210216a0ff44ef49a20ae2ff31d3b",
"assets/assets/images/icono_instagram.png": "86d23d5f6397a8eadd400378ef5b574a",
"assets/assets/images/icono_madre.png": "4cd8b2861371d8ebd5a75f6caff616ee",
"assets/assets/images/icono_maestra.png": "e4a49d504a1c9d64a9087138dfcec30e",
"assets/assets/images/icono_maestro.png": "961200ff374cbdae8fdcb7e899b3e1d9",
"assets/assets/images/icono_mas.png": "e822d4e443595ff53be22c921934c34b",
"assets/assets/images/icono_menos.png": "5657b9f32f1e5d07c90b043369960eca",
"assets/assets/images/icono_modificar.png": "f451030de345a28ad292e4e6260cd0b3",
"assets/assets/images/icono_padre.png": "764636e7dad7d67d2916945278c95ade",
"assets/assets/images/icono_peque.png": "d4d910636dee10828e8b190f365e1c30",
"assets/assets/images/icono_ubicacion.png": "29def74a7cc749cac218eca72927851b",
"assets/assets/images/icon_descargar.png": "2d063d5efb62cfaca6ed823f955b907d",
"assets/assets/images/logo_actualizar.png": "34a19f0d2d696b97678f30803263de32",
"assets/assets/images/logo_app.png": "5fb096d868555d9db8b88e6b5d531fd6",
"assets/assets/images/logo_app_ca.png": "564f611627cb1cf123cae1dbafc8064e",
"assets/assets/images/logo_app_es.png": "564f611627cb1cf123cae1dbafc8064e",
"assets/assets/images/manzana.png": "f6fb819b78e596d03db76297858fb950",
"assets/assets/images/menu_1.png": "eb9a6b5bc1bd935552b9f0bfe7677d4e",
"assets/assets/images/menu_10.png": "5b895061da2b7ee370bc48fd34f2c18e",
"assets/assets/images/menu_11.png": "c7016c92b056ba6925bc2a0ff3469d68",
"assets/assets/images/menu_12.png": "10d5356e8b5564cdb91e8d47bbb93b5b",
"assets/assets/images/menu_2.png": "270fd25522b02c53c86ef4de6ee99cfd",
"assets/assets/images/menu_3.png": "8f20fdc14383d6caa24359ea6d79876c",
"assets/assets/images/menu_4.png": "eba05b32add1fcad25231ed6fe2a2423",
"assets/assets/images/menu_5.png": "92953dd4860bffae8f5cd24934431bf3",
"assets/assets/images/menu_6.png": "cb1fe22fa78797afaf91e24a0230621e",
"assets/assets/images/menu_7.png": "7befa35d4e5c9fefc2e618537fbf8dff",
"assets/assets/images/menu_8.png": "b55ffee78d79c04322eafeb983a389d2",
"assets/assets/images/menu_9.png": "9b98a9041e8e76ab81f4735ad42ba3e5",
"assets/assets/images/NECESITO/Agua.png": "8b9ef445ab250a69a6aababb468dff1e",
"assets/assets/images/NECESITO/Baberos.png": "0eae68aea905740d59c2cdc97dde2e83",
"assets/assets/images/NECESITO/Babi.png": "3f2fa936ae2ea9335d13d438b22179e4",
"assets/assets/images/NECESITO/Bata.png": "3f2fa936ae2ea9335d13d438b22179e4",
"assets/assets/images/NECESITO/Body.png": "476a470ff70c6400561cadfb216a566b",
"assets/assets/images/NECESITO/Calcetines.png": "de8863e816de511f29af15eefb396b33",
"assets/assets/images/NECESITO/Camiseta.png": "0a4ca707d18273da5a1de56ec16ba084",
"assets/assets/images/NECESITO/Cereales.png": "b96e6e11cf4a894ae8291ac41a56144f",
"assets/assets/images/NECESITO/Crema.png": "014b82c245e0a37e2a86aebd190ec884",
"assets/assets/images/NECESITO/Guantes.png": "28c9a56dbe2e3b29237134fbc926fc48",
"assets/assets/images/NECESITO/Leche.png": "9b2ae78310e7b31faedf79c40b742b85",
"assets/assets/images/NECESITO/Mudas.png": "7539243972871792a7288a8dd50edb83",
"assets/assets/images/NECESITO/Panales.png": "8e2d5f1a1dde62bd220beb275b335355",
"assets/assets/images/NECESITO/Pantalones.png": "69eb8e767430c9c13e15f01c281e8277",
"assets/assets/images/NECESITO/Panuelos.png": "f0604cff317e9d41003367d248446473",
"assets/assets/images/NECESITO/Pasta%2520dientes.png": "147e028327699f98017179ff30046705",
"assets/assets/images/NECESITO/Ropa%2520Interior.png": "2d2f25f6cf79bf652c0b82c398a47964",
"assets/assets/images/NECESITO/Sabana.png": "a06b55ef62bad31ec09d7cf09d28c728",
"assets/assets/images/NECESITO/Toalla.png": "a87c80711f03ec679c6f7c487dbe7419",
"assets/assets/images/NECESITO/Toallitas.png": "a41bc72f911449f9c24f574d84f16bec",
"assets/assets/images/NECESITO/Vaso.png": "a6f6fb43b14e851a079f17d4aeac4501",
"assets/assets/images/ninios_globos.png": "7a2ac4fb207906061712b44de73469aa",
"assets/assets/images/pipis_0.png": "f8dc28ef7ef7e83e25918cceb8434569",
"assets/assets/images/pipis_1.png": "8f95051a18914284094971fdad232e90",
"assets/assets/images/pipis_2.png": "14345a6bb0933467fcd17196e02a3c18",
"assets/assets/images/pipis_3.png": "cd48593a4c0a4d160434817ec8f60c65",
"assets/assets/images/pipis_4.png": "884216f45f1047b9e15b083c7de8bb94",
"assets/assets/images/play.png": "bc2623e434fd72300ce2c7e536d697a0",
"assets/assets/images/programacion.png": "dcba8083cd570bac2a8fac03af12aeab",
"assets/assets/images/recibo.png": "2199daf843544facffb28402e41a2086",
"assets/assets/images/reloj_registro.png": "05c25b61bae5331c8c6176ab9802e8f2",
"assets/assets/images/telefono.png": "b3b958f185f7ed6ad58aaed2c4bed453",
"assets/assets/images/tienda.png": "a441a7ce1f54a6a2a88e993c5151eb0e",
"assets/assets/translations/ca.json": "fe658cad431e46ce4a0d1214d725b650",
"assets/assets/translations/es.json": "e4165db8e9b6c57c03a9db1e26707541",
"assets/FontManifest.json": "9c5e9efd2a727fd176887f4f505392c5",
"assets/fonts/MaterialIcons-Regular.otf": "068d86542c5125b5e2ca8a185086f343",
"assets/NOTICES": "f9d07997b83bb646a59b7531a6791821",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
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
"flutter_bootstrap.js": "ec2ce2b37cca31d6c4656a148ff812ce",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "34fefd1a2130011451ce62d716045bf3",
"/": "34fefd1a2130011451ce62d716045bf3",
"main.dart.js": "ee145b250a2f051870d99e8286e2017a",
"manifest.json": "aca692d3a2b9236ff2fbe78f228c87d4",
"version.json": "603651f2a9ae98291f2285a9a5d752cf"};
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
