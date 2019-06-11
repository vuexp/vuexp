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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_template.html",
    "revision": "e70e11f38d6dc996c9673a6bcd52d5ab"
  },
  {
    "url": "404.html",
    "revision": "be70dc15f957c14e7bafbb80200f5a64"
  },
  {
    "url": "assets/css/0.styles.e377f7aa.css",
    "revision": "bcf0bf88279314bedf3a8a6a4416621c"
  },
  {
    "url": "assets/img/clearIcon.211959db.png",
    "revision": "211959dbdd157231f9938a83e1f068bf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.2d186ed0.js",
    "revision": "f657634e64ee1a8e1878db318143a3d6"
  },
  {
    "url": "assets/js/10.50ccecd9.js",
    "revision": "f5775e35961e290ac94c7dad8e70cb01"
  },
  {
    "url": "assets/js/100.908c3a28.js",
    "revision": "fc38b96e6ef02427dcdcf4106ca36a78"
  },
  {
    "url": "assets/js/101.2ebb7e1c.js",
    "revision": "eee220de7417c8821e3505881387903b"
  },
  {
    "url": "assets/js/102.a839221f.js",
    "revision": "c92af4e986ec4af29a45817ef37b8015"
  },
  {
    "url": "assets/js/103.5962f431.js",
    "revision": "2d7b09af56b94ebfbab360f3ea073eed"
  },
  {
    "url": "assets/js/104.3e8376a7.js",
    "revision": "4afda710914cdc5e7a374fa072e7c4f5"
  },
  {
    "url": "assets/js/105.37e2e434.js",
    "revision": "6d1ea735ad28b4009c0c4b0e63e59d08"
  },
  {
    "url": "assets/js/106.fbc00013.js",
    "revision": "53a89cfbeb143cb28b956d2714507cfb"
  },
  {
    "url": "assets/js/107.eaf1ecce.js",
    "revision": "ff24a200d70272e5e3643ea61dc14aa6"
  },
  {
    "url": "assets/js/108.e1f14c00.js",
    "revision": "f9d3ca9cb5228b3f826c763a8e9f4dbb"
  },
  {
    "url": "assets/js/109.c6b7de9d.js",
    "revision": "c256d2530b1192da905ad30a8ca6b5a6"
  },
  {
    "url": "assets/js/11.9623a7d0.js",
    "revision": "2338f88bf52f417de3f3b77abf4a3fc2"
  },
  {
    "url": "assets/js/110.47284800.js",
    "revision": "aefa0fd7c5a4c4def573e733cf7dcdfe"
  },
  {
    "url": "assets/js/111.86970184.js",
    "revision": "d3b718d646a849a8c08ad01c0449ba26"
  },
  {
    "url": "assets/js/12.5443f07d.js",
    "revision": "fa44f99795985e0a6390e3b0af9db1b9"
  },
  {
    "url": "assets/js/13.2af30dfe.js",
    "revision": "98b38e3050ba05788bf92f75114e0390"
  },
  {
    "url": "assets/js/14.6e78273e.js",
    "revision": "f7f73f66e53997c287089f4bca148559"
  },
  {
    "url": "assets/js/15.26b2be1f.js",
    "revision": "54f16b31cfd9ccce309737b177811055"
  },
  {
    "url": "assets/js/16.933c6303.js",
    "revision": "112b853638c3e0afb681eb0532ee062e"
  },
  {
    "url": "assets/js/17.f66c28ea.js",
    "revision": "d631202a2d2d298e6a2c87d6b679ed80"
  },
  {
    "url": "assets/js/18.8fd2ee19.js",
    "revision": "07d09c7e9e673f836293e164665868f1"
  },
  {
    "url": "assets/js/19.1ca23c4c.js",
    "revision": "5f99e8982adae2ccba83b25217d8e10e"
  },
  {
    "url": "assets/js/2.0e66f327.js",
    "revision": "07210ad5497c17ef6500b96065ac1a6c"
  },
  {
    "url": "assets/js/20.7bd1c58f.js",
    "revision": "1511063bd9359a9d17c18f782782a2e7"
  },
  {
    "url": "assets/js/21.c15faa73.js",
    "revision": "4f57253c5a7aa3f19ec84e2c6743ec53"
  },
  {
    "url": "assets/js/22.ba2638da.js",
    "revision": "02db5353aebe52619a7b3f02017d1ed2"
  },
  {
    "url": "assets/js/23.f094026b.js",
    "revision": "8a62422587f5b4699534ac0061d9f9e7"
  },
  {
    "url": "assets/js/24.0c4da59e.js",
    "revision": "1636cf4b7786a154446fb76f0bc1a2e3"
  },
  {
    "url": "assets/js/25.9397c191.js",
    "revision": "d2a286549c4fe2fbea9bed20b9c74566"
  },
  {
    "url": "assets/js/26.34f8155f.js",
    "revision": "5aa9639f63c9bb941037baeed9b45577"
  },
  {
    "url": "assets/js/27.71efb654.js",
    "revision": "3838a1d26361ef3a157a00922d17cdeb"
  },
  {
    "url": "assets/js/28.c55e79ed.js",
    "revision": "823ff7463d512e7c1a0d40ed3f1fb082"
  },
  {
    "url": "assets/js/29.baabbb27.js",
    "revision": "93e156fc227d8d834fe7f9b0d8e3a7a6"
  },
  {
    "url": "assets/js/3.6496b33b.js",
    "revision": "5e119d472cf08f0330c11e1b1ecf834f"
  },
  {
    "url": "assets/js/30.8f5fe6b0.js",
    "revision": "45ebbe42d2780f3bc0880cee69a3c9ed"
  },
  {
    "url": "assets/js/31.153d02a0.js",
    "revision": "40256b9d2ddc3739d6d4fde6a65aba2c"
  },
  {
    "url": "assets/js/32.ff229203.js",
    "revision": "2d9acb9a9945f1d58045badaccf089f8"
  },
  {
    "url": "assets/js/33.9974cb63.js",
    "revision": "a1eb3511b5a2baec5ba6e2e6527b3ae5"
  },
  {
    "url": "assets/js/34.b0078cae.js",
    "revision": "a1c3003d773305c55440365d582101e8"
  },
  {
    "url": "assets/js/35.5ebd246d.js",
    "revision": "f089c6ef97210549863d465301298691"
  },
  {
    "url": "assets/js/36.d015dc1e.js",
    "revision": "39edc356ec2977deeb44b24af97e7d18"
  },
  {
    "url": "assets/js/37.310d510d.js",
    "revision": "c1c8097b9d913447ebc76c907494d6e6"
  },
  {
    "url": "assets/js/38.a485bb1e.js",
    "revision": "666642e2a15e0541c2cbc69120dc5a11"
  },
  {
    "url": "assets/js/39.6376c221.js",
    "revision": "0567730c0ef1c8c27d26a742ff4306a4"
  },
  {
    "url": "assets/js/4.efa0a42f.js",
    "revision": "ae5df64b3e240d643291c23951ac689a"
  },
  {
    "url": "assets/js/40.33e7e4ee.js",
    "revision": "7ef0edea803a3a93902adc5dc8a5d826"
  },
  {
    "url": "assets/js/41.90802703.js",
    "revision": "951eb08f744eb580792fc30e37a5997c"
  },
  {
    "url": "assets/js/42.0000e5f8.js",
    "revision": "8355cbbeefd0163d7b1736b82d2e5a69"
  },
  {
    "url": "assets/js/43.48b16e35.js",
    "revision": "35574fc88821fd592a4b1c928fdb1c41"
  },
  {
    "url": "assets/js/44.0f1f62b6.js",
    "revision": "9607195a1521e11e3dc6c281eeb8e242"
  },
  {
    "url": "assets/js/45.4de33a87.js",
    "revision": "0ff732a8ef183b7375ff61447e544e13"
  },
  {
    "url": "assets/js/46.7a2c3c03.js",
    "revision": "3cf5eedf3321a585b1aa18314ac29de0"
  },
  {
    "url": "assets/js/47.c620abc2.js",
    "revision": "efcac91594290c57a59e5e731adb4f6a"
  },
  {
    "url": "assets/js/48.09ca26b3.js",
    "revision": "718df83ac7819e1f129e13e2f7414736"
  },
  {
    "url": "assets/js/49.3593ba6d.js",
    "revision": "eecf3f48f3dd8286f9063bd1c9d38354"
  },
  {
    "url": "assets/js/50.b475e6ec.js",
    "revision": "d12269d65401cbbd4dc6f22f38ef5b6f"
  },
  {
    "url": "assets/js/51.fe03d032.js",
    "revision": "45f8b66c1c36971c0e7a806a50df9c35"
  },
  {
    "url": "assets/js/52.0635b9cf.js",
    "revision": "3d139cec9676d3dde47276b6a79b8558"
  },
  {
    "url": "assets/js/53.46b1e4f1.js",
    "revision": "9d45cae9cd045a7348c2b0e860c59e0f"
  },
  {
    "url": "assets/js/54.4c4732ca.js",
    "revision": "4f1470378ce1bd5e3dde1808e6670466"
  },
  {
    "url": "assets/js/55.3e134d99.js",
    "revision": "58bfa7eea90ff1eb752c71789e54a79c"
  },
  {
    "url": "assets/js/56.12f062a9.js",
    "revision": "d099b2dc82654c8be373aa2114f16e14"
  },
  {
    "url": "assets/js/57.e772117b.js",
    "revision": "c2a334977f31661a15d2476c38f6df7e"
  },
  {
    "url": "assets/js/58.133e369e.js",
    "revision": "18bff7d2f062a39959e514b9af7aa453"
  },
  {
    "url": "assets/js/59.4d2b0d85.js",
    "revision": "373283a2568ef20c852544cc3f3b7b84"
  },
  {
    "url": "assets/js/6.28418fe1.js",
    "revision": "a0b099d3c98cc4512a042d7dc0770e8b"
  },
  {
    "url": "assets/js/60.8c8236c5.js",
    "revision": "1e65c46c9e08307fa0ec58ca15402447"
  },
  {
    "url": "assets/js/61.7f9709e2.js",
    "revision": "418beb848e29300378827c5b3b21620f"
  },
  {
    "url": "assets/js/62.7a96e3ff.js",
    "revision": "219c783b21f0f1252d25094814f4e5c0"
  },
  {
    "url": "assets/js/63.7a4cf855.js",
    "revision": "1e968b33bd68038318e095d824eeeb23"
  },
  {
    "url": "assets/js/64.9e914c4e.js",
    "revision": "1f3b84b3011ae2173b99c6c85042f322"
  },
  {
    "url": "assets/js/65.e580771c.js",
    "revision": "f7520a8d65c93376992a11d00690256d"
  },
  {
    "url": "assets/js/66.98970ec5.js",
    "revision": "3ce771057badcdf1dcb2839183dbf947"
  },
  {
    "url": "assets/js/67.df7d156b.js",
    "revision": "9e720ed9a1ed8f63f8b549b43b9eb97e"
  },
  {
    "url": "assets/js/68.39767ab5.js",
    "revision": "f6910b24281dc853179c160edcc43a28"
  },
  {
    "url": "assets/js/69.8dbd979a.js",
    "revision": "58d5e7c1f2295afda95ccc1c550533dc"
  },
  {
    "url": "assets/js/7.af56ca76.js",
    "revision": "dea0ba57cc0d4560aa4e9276346fc32f"
  },
  {
    "url": "assets/js/70.3d9274e5.js",
    "revision": "40d310b9612f2d53d58023951268e1c0"
  },
  {
    "url": "assets/js/71.bf0c22b7.js",
    "revision": "e8da017d42cae8db31bc7a5820d6b04f"
  },
  {
    "url": "assets/js/72.5d5dfd43.js",
    "revision": "4fb9a822dae598d432dfde4c2b010df6"
  },
  {
    "url": "assets/js/73.6e143c37.js",
    "revision": "815061f5bee5798d7008e5a0f29615ae"
  },
  {
    "url": "assets/js/74.b8f4fff9.js",
    "revision": "ee38b363ae8594532c773f3e32426336"
  },
  {
    "url": "assets/js/75.4ae12fb0.js",
    "revision": "a35cbf6f4d347ad455bd3b513beaa969"
  },
  {
    "url": "assets/js/76.00eb832c.js",
    "revision": "64fc5c7892862aef330a975d9412d71c"
  },
  {
    "url": "assets/js/77.dce6e7c6.js",
    "revision": "f0cd5140e4ff48f9d82d5e97b0ea55bc"
  },
  {
    "url": "assets/js/78.9419cdb3.js",
    "revision": "465344b8af6246d8f9bb693172999e3c"
  },
  {
    "url": "assets/js/79.bb5b586f.js",
    "revision": "d5ec58cdb02471ed321d41c7740ff5b8"
  },
  {
    "url": "assets/js/8.ed06a12e.js",
    "revision": "e341243dffe0392c8d112192bab22c8c"
  },
  {
    "url": "assets/js/80.35f7aafe.js",
    "revision": "90a0772dc3f7dbd3f9d5e7f263b5a7c8"
  },
  {
    "url": "assets/js/81.ff62f8e2.js",
    "revision": "17d8d32256545ca1772bb6b396544fb9"
  },
  {
    "url": "assets/js/82.7889896e.js",
    "revision": "a2a698c0b37f121c70ce14b03121a03d"
  },
  {
    "url": "assets/js/83.a2b71959.js",
    "revision": "4e3ef31536f565741d4a57b30c47672e"
  },
  {
    "url": "assets/js/84.3523bc30.js",
    "revision": "b3bc9dcfa78135b84e29a3f5137920f9"
  },
  {
    "url": "assets/js/85.70acdff2.js",
    "revision": "c6254a77ba34e260d68e1b99cd860c57"
  },
  {
    "url": "assets/js/86.67b481ad.js",
    "revision": "40a17c4acd9448a35ab922cdb37f39b5"
  },
  {
    "url": "assets/js/87.0d282dcc.js",
    "revision": "f611aaee896f3fea3d447ec52d9b0c01"
  },
  {
    "url": "assets/js/88.cb3fd674.js",
    "revision": "cd76c8bdc7cc20b46b5562669af3fdb9"
  },
  {
    "url": "assets/js/89.c4b78d88.js",
    "revision": "13db869975d7c6b4ff5cd8a8d13dd4aa"
  },
  {
    "url": "assets/js/9.04b9a104.js",
    "revision": "8b2159a54e3b8de099ec8b8a58b33613"
  },
  {
    "url": "assets/js/90.7d68c166.js",
    "revision": "8ae0a2f25148ddb25a4b1b620bfa8409"
  },
  {
    "url": "assets/js/91.5d8b6953.js",
    "revision": "301003cc27682b5de86f70ab342d4954"
  },
  {
    "url": "assets/js/92.168e8c24.js",
    "revision": "5a89421db982f9dc440a84057644dfb2"
  },
  {
    "url": "assets/js/93.4a9fcdc8.js",
    "revision": "4368c2e85e1587789d49a16970036a8f"
  },
  {
    "url": "assets/js/94.adfcffda.js",
    "revision": "6664463861ad54f34fddf876152a9a3f"
  },
  {
    "url": "assets/js/95.4efac4b2.js",
    "revision": "803656e7586bea55991bc7a0a550d152"
  },
  {
    "url": "assets/js/96.77249042.js",
    "revision": "c5e4c5b14e0220d9f54563d88f0667a0"
  },
  {
    "url": "assets/js/97.ea93a6f9.js",
    "revision": "d73056971fe62b99d248bfc8d4443265"
  },
  {
    "url": "assets/js/98.47f0eff4.js",
    "revision": "836b0bc0ffd8d3f4facc4f29d02d4644"
  },
  {
    "url": "assets/js/99.a847361b.js",
    "revision": "5d1571bb42f7e1258e23bb02d62f30f6"
  },
  {
    "url": "assets/js/app.fc5e3f87.js",
    "revision": "fb824c2398e4f09fb795fd88621eb427"
  },
  {
    "url": "components/action-bar.html",
    "revision": "b2e9e7376ae425f48737c9ce7992d169"
  },
  {
    "url": "components/action-item.html",
    "revision": "c36f42cf4cf6ec2c09aeb6a4ac27a4f7"
  },
  {
    "url": "components/dialogs/action-dialog.html",
    "revision": "8c1aa1e092d2d389739f7a49788e00a3"
  },
  {
    "url": "components/dialogs/alert-dialog.html",
    "revision": "459161fa78dc12158ab4560956da781a"
  },
  {
    "url": "components/dialogs/confirm-dialog.html",
    "revision": "418cb0b93ef825a99f3082e4a155fc18"
  },
  {
    "url": "components/dialogs/modal-base.html",
    "revision": "89a2001fbebe3831c94496236e01f2e9"
  },
  {
    "url": "components/frame.html",
    "revision": "8294578abb34b694ee59514b82102cea"
  },
  {
    "url": "components/menus/vxpdropdown-menu.html",
    "revision": "df792ed19955e3adb24c4959fe86c4d1"
  },
  {
    "url": "components/navigation-button.html",
    "revision": "8fd1d7477aecfdbabce98f4c8fdc790e"
  },
  {
    "url": "components/page.html",
    "revision": "feeb400f137ccf8a11e8991c6102aa2b"
  },
  {
    "url": "components/progress.html",
    "revision": "ee55d42a4f29f0ce8e933b00e86bbf73"
  },
  {
    "url": "components/scrollview.html",
    "revision": "ed213d2cfb967b32a3a1255b7085fd29"
  },
  {
    "url": "components/search-bar.html",
    "revision": "a8332d7bb98c6bed5a5f3e4dc11b3557"
  },
  {
    "url": "components/segmented-bar.html",
    "revision": "7524d1a5e0ebf14368da644ca08c0951"
  },
  {
    "url": "components/slider.html",
    "revision": "874885c2a417465f50afda5e4f851648"
  },
  {
    "url": "components/switcher.html",
    "revision": "f937b07c60932d0f208ffa67f58f725c"
  },
  {
    "url": "components/tableview.html",
    "revision": "0b79452343eb65791750a02804924aeb"
  },
  {
    "url": "components/tabview.html",
    "revision": "81308311cf84a433beaed404b1b62ad5"
  },
  {
    "url": "components/textfield.html",
    "revision": "6395f8a3b3431ab1aead051ef1f02d52"
  },
  {
    "url": "components/textview.html",
    "revision": "f571ba50eeb332b2db2cb7a18adea31e"
  },
  {
    "url": "components/vxp-button.html",
    "revision": "6a0adaa9b309f49659d5fff3f2a5fc5a"
  },
  {
    "url": "components/vxp-datePicker.html",
    "revision": "9088dac21fe37af9a74833d8f110f2a6"
  },
  {
    "url": "components/vxp-dropDown.html",
    "revision": "318aca535d50f1f2f99c090998dd3fff"
  },
  {
    "url": "components/vxp-image-uploader.html",
    "revision": "880ef113ffc4e1260b89aa9706f3aed4"
  },
  {
    "url": "components/vxp-image.html",
    "revision": "2628a76349302ba60559f0cc8e4652fb"
  },
  {
    "url": "components/vxp-label.html",
    "revision": "9239b65d0d835e5b85093515628f6aa3"
  },
  {
    "url": "components/vxp-link.html",
    "revision": "e46d3a285f62ce8f14963da5964e625d"
  },
  {
    "url": "components/vxp-list-view.html",
    "revision": "99edae301ea66b3351bd5528a481466c"
  },
  {
    "url": "components/vxp-side-drawer.html",
    "revision": "4b1ee6c719f18d082d281202936c2687"
  },
  {
    "url": "components/vxp-textfield.html",
    "revision": "99d00441d464b15f0138ca2315ff5bb5"
  },
  {
    "url": "components/vxpcheckbox.html",
    "revision": "b2813e93752edddc34ea59065a5133e1"
  },
  {
    "url": "components/vxpiconbutton.html",
    "revision": "09f67690ccf1037f44eb6a4ac49fd909"
  },
  {
    "url": "components/vxpmultiselectdropdown.html",
    "revision": "7fe2ae9597985ff3f93b10f2a913ff8a"
  },
  {
    "url": "components/webview.html",
    "revision": "0f7c20e6cdd630027510aea718edafed"
  },
  {
    "url": "custom-input.css",
    "revision": "51ca12818da01405358bcb373b6cee11"
  },
  {
    "url": "fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "fonts/fontawesome-webfont.ttf",
    "revision": "a3de2170e4e9df77161ea5d3f31b2668"
  },
  {
    "url": "fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "fonts/fontawesome.min.css",
    "revision": "008e0bb5ebfa7bc298a042f95944df25"
  },
  {
    "url": "fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "getting-started.html",
    "revision": "05b7a9d4df069c179db161197078abf3"
  },
  {
    "url": "images/logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "images/nuweb.png",
    "revision": "e08542212a367c50a9913e9b240002ef"
  },
  {
    "url": "index.html",
    "revision": "4138131ca87198236b1e86f30ea4818f"
  },
  {
    "url": "layouts/absolute-layout.html",
    "revision": "a159fc99b5638802451026817dc80ce3"
  },
  {
    "url": "layouts/dock-layout.html",
    "revision": "225cb3e7e4574b331f0b5b477850c2d3"
  },
  {
    "url": "layouts/flexbox-layout.html",
    "revision": "9ba58c7a039e947d955b27d480e4415a"
  },
  {
    "url": "layouts/grid-layout.html",
    "revision": "73d0f73dbb6aa68451a55ee32e802be4"
  },
  {
    "url": "layouts/stacklayout.html",
    "revision": "1b84083b648cedfb2b5d35f227c3d723"
  },
  {
    "url": "layouts/wraplayout.html",
    "revision": "87b2c36b29918fe4e6e9f3d6a9d76321"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
