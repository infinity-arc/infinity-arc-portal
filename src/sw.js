/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js');
  });
}

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/ia-logo/a-block-ab_025.png",
    "revision": "027df03a87fbec91e6b92896fa5f1bdd"
  },
  {
    "url": "assets/ia-logo/a-block-ab_05.png",
    "revision": "94776353cf16bed7b1b01e4ee7492402"
  },
  {
    "url": "assets/ia-logo/a-block-w.png",
    "revision": "8f489fecd1d35dcfd4f55506f1d39c34"
  },
  {
    "url": "assets/ia-logo/BCCF3A0F-5648-4452-B1A8-2485F705AD94.jpg.png",
    "revision": "ff5b8c6092adb00a2e6e66df6d006625"
  },
  {
    "url": "assets/ia-logo/BCCF3A0F-5648-4452-B1A8-2485F705AD94.jpg01.png",
    "revision": "563ed20f830a19a2c0be2dcd4b7b567f"
  },
  {
    "url": "assets/ia-logo/BCCF3A0F-5648-4452-B1A8-2485F705AD94.jpg025.png",
    "revision": "558af2c2a0ec3e35ce1de99a5c207ab7"
  },
  {
    "url": "assets/ia-logo/BCCF3A0F-5648-4452-B1A8-2485F705AD94.jpg033.png",
    "revision": "e41126a701963dfef35e15653de5253a"
  },
  {
    "url": "assets/ia-logo/BCCF3A0F-5648-4452-B1A8-2485F705AD94.jpg05.png",
    "revision": "9059f4a64b0b67ebb0af4d0889d3f558"
  },
  {
    "url": "assets/ia-logo/BCCF3A0F-5648-4452-B1A8-2485F705AD94.jpg075.png",
    "revision": "3f0777bd1f9232fd7f1e880dfb0eaa61"
  },
  {
    "url": "assets/ia-logo/ia-block-01.png",
    "revision": "a9106f6add3d05e9ab570062fef08d3e"
  },
  {
    "url": "assets/ia-logo/ia-block-025.png",
    "revision": "b24d0aa6dbbb235289cfe3f4afcde1ba"
  },
  {
    "url": "assets/ia-logo/ia-block-033.png",
    "revision": "fb4cde68e36d2d549d1ac9ce925f8939"
  },
  {
    "url": "assets/ia-logo/ia-block-05.png",
    "revision": "6551b58f431fa088674ad7cbf7ba4233"
  },
  {
    "url": "assets/ia-logo/ia-block-075.png",
    "revision": "5cc726f8930ba72affd0a43fd1d44371"
  },
  {
    "url": "assets/ia-logo/ia-block-0750aw_05.png",
    "revision": "1493d174d7c493bfb8401144f2c63065"
  },
  {
    "url": "assets/ia-logo/ia-block-ab_01.png",
    "revision": "fa2846d9a6e73bf1455ff6b552c4e381"
  },
  {
    "url": "assets/ia-logo/ia-block-ab_033.png",
    "revision": "3802c73c935e52083eb6f01c2ce65c40"
  },
  {
    "url": "assets/ia-logo/ia-block-ab_075.png",
    "revision": "9b7158fd695dec863e1b1b474347a1c9"
  },
  {
    "url": "assets/ia-logo/ia-block-ab.png",
    "revision": "d1950784f4fefc447ea8134a87341491"
  },
  {
    "url": "assets/ia-logo/ia-block-aw_01.png",
    "revision": "84c060d343a63608af78ddd508da03a9"
  },
  {
    "url": "assets/ia-logo/ia-block-aw_025.png",
    "revision": "3fb287eb402988cf3e1acd318b7d0acc"
  },
  {
    "url": "assets/ia-logo/ia-block-aw_033.png",
    "revision": "88dbab2478f10c3ad08999e9ee1a3401"
  },
  {
    "url": "assets/ia-logo/ia-block-aw_075.png",
    "revision": "623c0749c914c44ada037636774f372c"
  },
  {
    "url": "assets/ia-logo/ia-block-aw.png",
    "revision": "d4a63294cffba4ebf02f8d6d0c288ca4"
  },
  {
    "url": "assets/ia-logo/ia-deco-025-2.png",
    "revision": "59e228495692d023fc6b4a31629f4097"
  },
  {
    "url": "assets/ia-logo/ia-deco-025.png",
    "revision": "8eab0963fc6bc2c58c81cf04f6072750"
  },
  {
    "url": "assets/ia-logo/ia-deco-05-2.png",
    "revision": "2059c036f0589fb46b76f6a16d4ebb1c"
  },
  {
    "url": "assets/ia-logo/ia-deco-05.png",
    "revision": "097d5d44f7cd1cb1bcb0ab70b1a4505d"
  },
  {
    "url": "assets/ia-logo/ia-deco-075-2.png",
    "revision": "8c610bec5afbdeb54863965fb2aeb5d8"
  },
  {
    "url": "assets/ia-logo/ia-deco-bw-075.png",
    "revision": "8de68232ca7ad5c00f8c72b9a7937dfd"
  },
  {
    "url": "assets/ia-logo/ia-deco.png",
    "revision": "f02ce737d4da100cdeb25ada0ae3f6ca"
  },
  {
    "url": "assets/ia-logo/ia-no-deco-05.png",
    "revision": "f3f2280d90d0f641e7efdcca9af1db70"
  },
  {
    "url": "assets/ia-logo/ia.png",
    "revision": "54f1cbecc89a4ebf88352879a5415a80"
  },
  {
    "url": "assets/ia-logo/iano-deco-025.png",
    "revision": "f2ee5f8af762c1ecf81dec1c1579e854"
  },
  {
    "url": "assets/ia-logo/iano-deco.png",
    "revision": "ada2f1fa54f477c4ba0f2880bcd75136"
  },
  {
    "url": "assets/ia-logo/iano-deco075.png",
    "revision": "998c7526c1a260946e2098f6d6f37a97"
  },
  {
    "url": "assets/icon/favicon.ico",
    "revision": "725d8cc3d45cd47f6f76cfc85746d5e8"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "365ea98008341d2896fc0dc1ae8e4efd"
  },
  {
    "url": "components.d.ts",
    "revision": "5da5776b4d80c26731b2e310160ce68a"
  },
  {
    "url": "components/_app-root/app-root.css",
    "revision": "1542e7ddd853d02f69f7dff443d91701"
  },
  {
    "url": "components/_app-root/app-root.e2e.ts",
    "revision": "92f779ce9937968a4ad4f6182124c548"
  },
  {
    "url": "components/_app-root/app-root.spec.ts",
    "revision": "a4a20f47a8795e21cd8040d667ebda2c"
  },
  {
    "url": "components/_app-root/app-root.tsx",
    "revision": "870d431330b6d3ba973f224a31306b87"
  },
  {
    "url": "components/app-home/app-home.e2e.ts",
    "revision": "9916f073b3c5cb9e9a1951c7f29946e2"
  },
  {
    "url": "components/app-home/app-home.scss",
    "revision": "a2d94a8b248466222e4e33bd87e38ea9"
  },
  {
    "url": "components/app-home/app-home.spec.ts",
    "revision": "f9932da356ff760c819872a3c0cd2fcf"
  },
  {
    "url": "components/app-home/app-home.tsx",
    "revision": "2ed4aa85765bfee29a4ad5d9d2df41ea"
  },
  {
    "url": "components/app-nav/app-nav.e2e.ts",
    "revision": "8b8fa5710ebf46508119b59f4446cbcb"
  },
  {
    "url": "components/app-nav/app-nav.scss",
    "revision": "e3f8d3483a0ed042d1429d952234c698"
  },
  {
    "url": "components/app-nav/app-nav.spec.ts",
    "revision": "d89195cf98d4b6556f144f2a66b2b0fe"
  },
  {
    "url": "components/app-nav/app-nav.tsx",
    "revision": "b3dc9bd602c7c0bd5a2ce5dfe3b080ae"
  },
  {
    "url": "components/app-profile/app-profile.css",
    "revision": "6a3d060ab12a690353ffc0661d3f3895"
  },
  {
    "url": "components/app-profile/app-profile.e2e.ts",
    "revision": "5c263e9f8f3191e2fc46d857ecc5ca1d"
  },
  {
    "url": "components/app-profile/app-profile.spec.ts",
    "revision": "5ab471918b143881328568a728df5c6e"
  },
  {
    "url": "components/app-profile/app-profile.tsx",
    "revision": "e03535cdac6918de70e3e305178ff0f0"
  },
  {
    "url": "components/app-router/app-router.e2e.ts",
    "revision": "a1d9cfa801c9d9c48efd3e9441f75132"
  },
  {
    "url": "components/app-router/app-router.scss",
    "revision": "e6133ab9862bacc8e98b369c776a2511"
  },
  {
    "url": "components/app-router/app-router.spec.ts",
    "revision": "d2e92fe00690145a3e1403354900d080"
  },
  {
    "url": "components/app-router/app-router.tsx",
    "revision": "4ca5612544e28404ceecd8dc6dfc121d"
  },
  {
    "url": "components/card/card.e2e.ts",
    "revision": "b2f2dca9bc69f2f2f1b4a29ceea70a87"
  },
  {
    "url": "components/card/card.scss",
    "revision": "ddf64b5a4989d923f1927636e17e1163"
  },
  {
    "url": "components/card/card.spec.ts",
    "revision": "b5fe61e12427a622f651452c7aa0809d"
  },
  {
    "url": "components/card/card.tsx",
    "revision": "9f4f86e395dbd67fb13824b38e6037e9"
  },
  {
    "url": "components/generate/generate.css",
    "revision": "414c8386c1d38af75f8d26a300a2f99c"
  },
  {
    "url": "components/generate/generate.e2e.ts",
    "revision": "ee45a0a3b44491ed24a78ef0b1140749"
  },
  {
    "url": "components/generate/generate.spec.ts",
    "revision": "647ee7bf02707b4c6838b8bf6bce3c0b"
  },
  {
    "url": "components/generate/generate.tsx",
    "revision": "533899341cfbe8d005aedf6b5b302f3b"
  },
  {
    "url": "global/app.scss",
    "revision": "c9ad40646caf30a7857806fdb91b3060"
  },
  {
    "url": "global/app.ts",
    "revision": "03cf0c8c0b1cc4d48a2933e33999b161"
  },
  {
    "url": "global/router-config.json",
    "revision": "14accf76098e1556ee2e9cedb55c6d36"
  },
  {
    "url": "global/theme.json",
    "revision": "975a3daa5474f9c9d7c40010d766724a"
  },
  {
    "url": "global/theme.scss",
    "revision": "a6fb3742d0e9b554be5b889553b10b0b"
  },
  {
    "url": "index.html",
    "revision": "a7bf1b3ac9be38148aceb1a3be478890"
  },
  {
    "url": "index.ts",
    "revision": "d5c7eb8d71a2a089e5d8855457602745"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
