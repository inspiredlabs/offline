var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,c=(e,t)=>{for(var s in t||(t={}))n.call(t,s)&&i(e,s,t[s]);if(a)for(var s of a(t))r.call(t,s)&&i(e,s,t[s]);return e},o=(e,a)=>t(e,s(a));try{self["workbox:core:6.1.5"]&&_()}catch(F){}const l=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class h extends Error{constructor(e,t){super(l(e,t)),this.name=e,this.details=t}}const p={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=e=>[p.prefix,e,p.suffix].filter((e=>e&&e.length>0)).join("-"),d=e=>e||u(p.precache),f=e=>e||u(p.runtime);function g(e,t){const s=t();return e.waitUntil(s),s}try{self["workbox:precaching:6.1.5"]&&_()}catch(F){}function y(e){if(!e)throw new h("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new h("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),n=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:n.href}}class w{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class m{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let v;async function b(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new h("cross-origin-copy-response",{origin:s});const a=e.clone(),n={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},r=t?t(n):n,i=function(){if(void 0===v){const t=new Response("");if("body"in t)try{new Response(t.body),v=!0}catch(e){v=!1}v=!1}return v}()?a.body:await a.blob();return new Response(i,r)}function R(e,t){const s=new URL(e);for(const a of t)s.searchParams.delete(a);return s.href}class C{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const U=new Set;try{self["workbox:strategies:6.1.5"]&&_()}catch(F){}function j(e){return"string"==typeof e?new Request(e):e}class L{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new C,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=j(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(r){throw new h("plugin-error-request-will-fetch",{thrownError:r})}const n=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:n,response:e});return e}catch(i){throw a&&await this.runCallbacks("fetchDidFail",{error:i,event:t,originalRequest:a.clone(),request:n.clone()}),i}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=j(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i=c(c({},n),{cacheName:a});s=await caches.match(r,i);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await c({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=j(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const n=await this.getCacheKey(s,"write");if(!t)throw new h("cache-put-with-no-response",{url:(r=n.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const i=await this._ensureResponseSafeToCache(t);if(!i)return!1;const{cacheName:l,matchOptions:p}=this._strategy,u=await self.caches.open(l),d=this.hasCallback("cacheDidUpdate"),f=d?await async function(e,t,s,a){const n=R(t.url,s);if(t.url===n)return e.match(t,a);const r=o(c({},a),{ignoreSearch:!0}),i=await e.keys(t,r);for(const c of i)if(n===R(c.url,s))return e.match(c,a)}(u,n.clone(),["__WB_REVISION__"],p):null;try{await u.put(n,d?i.clone():i)}catch(g){throw"QuotaExceededError"===g.name&&await async function(){for(const e of U)await e()}(),g}for(const c of this.iterateCallbacks("cacheDidUpdate"))await c({cacheName:l,oldResponse:f,newResponse:i.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=j(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=o(c({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class q{constructor(e={}){this.cacheName=f(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new L(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new h("no-response",{url:t.url})}catch(n){for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:n,event:s,request:t}),a)break;if(!a)throw n}for(const r of e.iterateCallbacks("handlerWillRespond"))a=await r({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(c){r=c}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}class k extends q{constructor(e={}){e.cacheName=d(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(k.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;if(!this._fallbackToNetwork)throw new h("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=await t.fetch(e),s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!(await t.cachePut(e,s.clone())))throw new h("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==k.copyRedirectedCacheableResponsesPlugin&&(a===k.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(k.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}k.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},k.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await b(e):e};class x{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new k({cacheName:d(e),plugins:[...t,new m({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=y(s),n="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,n),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return g(e,(async()=>{const t=new w;this.strategy.plugins.push(t);for(const[n,r]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(n),a=new Request(n,{integrity:t,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:a,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return g(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new h("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=c({cacheKey:t},s.params),this.strategy.handle(s))}}let K;const T=()=>(K||(K=new x),K);try{self["workbox:routing:6.1.5"]&&_()}catch(F){}const P=e=>e&&"object"==typeof e?e:{handle:e};class N{constructor(e,t,s="GET"){this.handler=P(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=P(e)}}class O extends N{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class M{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:n,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:n})}catch(h){o=Promise.reject(h)}const l=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||l)&&(o=o.catch((async a=>{if(l)try{return await l.handle({url:s,request:e,event:t,params:n})}catch(r){a=r}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw a}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const n=this._routes.get(s.method)||[];for(const r of n){let n;const i=r.match({url:e,sameOrigin:t,request:s,event:a});if(i)return n=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,P(e))}setCatchHandler(e){this._catchHandler=P(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new h("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new h("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let W;function E(e,t,s){let a;if("string"==typeof e){const n=new URL(e,location.href);a=new N((({url:e})=>e.href===n.href),t,s)}else if(e instanceof RegExp)a=new O(e,t,s);else if("function"==typeof e)a=new N(e,t,s);else{if(!(e instanceof N))throw new h("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return(W||(W=new M,W.addFetchListener(),W.addCacheListener()),W).registerRoute(a),a}class I extends N{constructor(e,t){super((({request:s})=>{const a=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:n}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(a){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=a.get(e);if(t)return{cacheKey:t}}}),e.strategy)}}function S(e){T().precache(e)}const A={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};var H;self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),S([...["/_app/start-b880b2ec.js","/_app/assets/start-a8cd1609.css","/_app/pages/__layout.svelte-7c75c756.js","/_app/assets/pages/__layout.svelte-cf2d3e7b.css","/_app/error.svelte-0b5fa148.js","/_app/pages/index.svelte-38bf37cc.js","/_app/assets/pages/index.svelte-faebb85f.css","/_app/pages/chi-siamo/index.svelte-1e1f1270.js","/_app/pages/partenze/index.svelte-597e4a1b.js","/_app/pages/privacy/index.svelte-da18b751.js","/_app/pages/viaggi/index.svelte-612a9cb3.js","/_app/pages/posts/__layout.svelte-a9966763.js","/_app/chunks/vendor-58c14988.js","/_app/chunks/singletons-bb9012b7.js","/_app/chunks/stores-b87472a4.js"].map((e=>({url:e,revision:null}))),...["/apple-icon-180.png","/apple-splash-1125-2436.jpg","/apple-splash-1136-640.jpg","/apple-splash-1170-2532.jpg","/apple-splash-1242-2208.jpg","/apple-splash-1242-2688.jpg","/apple-splash-1284-2778.jpg","/apple-splash-1334-750.jpg","/apple-splash-1536-2048.jpg","/apple-splash-1620-2160.jpg","/apple-splash-1668-2224.jpg","/apple-splash-1668-2388.jpg","/apple-splash-1792-828.jpg","/apple-splash-2048-1536.jpg","/apple-splash-2048-2732.jpg","/apple-splash-2160-1620.jpg","/apple-splash-2208-1242.jpg","/apple-splash-2224-1668.jpg","/apple-splash-2388-1668.jpg","/apple-splash-2436-1125.jpg","/apple-splash-2532-1170.jpg","/apple-splash-2688-1242.jpg","/apple-splash-2732-2048.jpg","/apple-splash-2778-1284.jpg","/apple-splash-640-1136.jpg","/apple-splash-750-1334.jpg","/apple-splash-828-1792.jpg","/favicon.ico","/images/base64-planck.svg","/images/logo.png","/manifest.webmanifest","/pwa-192x192.png","/pwa-512x512.png","/robots.txt","/svelte-welcome.png","/svelte-welcome.webp"].map((e=>({url:e,revision:"1651757854612"})))]),function(e){const t=T();E(new I(t,e))}(H);const D=["/","/about","/todos"];S(D.map((e=>({url:e,revision:"1651757854612"}))));E((({url:e,request:t,event:s})=>D.some((t=>e.pathname===t))),new class extends q{constructor(e){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(A)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));let a,n=await t.cacheMatch(e);if(n);else try{n=await s}catch(r){a=r}if(!n)throw new h("no-response",{url:e.url,error:a});return n}}({}));
