self.addEventListener("install", () => null)

let version = 1
let nome = 'InovaTech'
const atual = nome + ' - ' + version
const antigo = (nome + ' - ') + version--

let urls = [				
    '/',
    '/manifest.json',
    '/src/css/main.css',
    '/src/js/bundle.js',
    '/src/images/icon-128x128.png',
    '/src/images/icon-144x144.png',
    '/src/images/icon-152x152.png',
    '/src/images/icon-192x192.png',
    '/src/images/icon-384x384.png',
    '/src/images/icon-512x512.png',
    '/src/images/icon-72x72.png',
    '/src/images/icon-96x96.png',
    '/src/media/99ed8b18c01837a0c1b62ffb20e257f8.png'
]

self.addEventListener("activate", async () => {
	let cache = await caches.open(atual)
    await cache.addAll(urls)
    if(version > 0)
    	await caches.delete(antigo)
})

self.addEventListener("fetch",	async event => {
	event.respondWith(
        caches.match(event.request).then( fileCache => fileCache || fetch(event.request))
    )
})