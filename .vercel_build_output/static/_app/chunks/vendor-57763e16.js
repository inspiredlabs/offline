function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function r(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(r)}function a(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let c;function u(t,n){return c||(c=document.createElement("a")),c.href=n,t===c.href}function l(t,n){return t!=t?n==n:t!==n}function f(n,e,r){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}(e,r))}function d(t,n,e,r){if(t){const o=h(t,n,e,r);return t[0](o)}}function h(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function p(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(void 0===n.dirty)return o;if("object"==typeof o){const t=[],e=Math.max(n.dirty.length,o.length);for(let r=0;r<e;r+=1)t[r]=n.dirty[r]|o[r];return t}return n.dirty|o}return n.dirty}function m(t,n,e,r,o,i){if(o){const a=h(n,e,r,i);t.p(a,o)}}function g(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function y(n){return n&&a(n.destroy)?n.destroy:t}const v="undefined"!=typeof window;let w=v?()=>window.performance.now():()=>Date.now(),b=v?t=>requestAnimationFrame(t):t;const $=new Set;function x(t){$.forEach((n=>{n.c(t)||($.delete(n),n.f())})),0!==$.size&&b(x)}function E(t){let n;return 0===$.size&&b(x),{promise:new Promise((e=>{$.add(n={c:t,f:e})})),abort(){$.delete(n)}}}let S=!1;function k(t,n,e,r){for(;t<n;){const o=t+(n-t>>1);e(o)<=r?t=o+1:n=o}return t}function M(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function A(t){const n=R("style");return function(t,n){!function(t,n){t.appendChild(n)}(t.head||t,n)}(M(t),n),n.sheet}function P(t,n){if(S){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const r=n[e];void 0!==r.claim_order&&t.push(r)}n=t}const e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let o=0;for(let c=0;c<n.length;c++){const t=n[c].claim_order,i=(o>0&&n[e[o]].claim_order<=t?o+1:k(1,o,(t=>n[e[t]].claim_order),t))-1;r[c]=e[i]+1;const a=i+1;e[a]=c,o=Math.max(a,o)}const i=[],a=[];let s=n.length-1;for(let c=e[o]+1;0!=c;c=r[c-1]){for(i.push(n[c-1]);s>=c;s--)a.push(n[s]);s--}for(;s>=0;s--)a.push(n[s]);i.reverse(),a.sort(((t,n)=>t.claim_order-n.claim_order));for(let c=0,u=0;c<a.length;c++){for(;u<i.length&&a[c].claim_order>=i[u].claim_order;)u++;const n=u<i.length?i[u]:null;t.insertBefore(a[c],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function C(t,n,e){S&&!e?P(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function L(t){t.parentNode.removeChild(t)}function j(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function R(t){return document.createElement(t)}function W(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function O(){return N(" ")}function T(){return N("")}function I(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function U(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function z(t){return Array.from(t.childNodes)}function B(t,n,e,r,o=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const i=t[r];if(n(i)){const n=e(i);return void 0===n?t.splice(r,1):t[r]=n,o||(t.claim_info.last_index=r),i}}for(let r=t.claim_info.last_index-1;r>=0;r--){const i=t[r];if(n(i)){const n=e(i);return void 0===n?t.splice(r,1):t[r]=n,o?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=r,i}}return r()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function q(t,n,e,r){return B(t,(t=>t.nodeName===n),(t=>{const n=[];for(let r=0;r<t.attributes.length;r++){const o=t.attributes[r];e[o.name]||n.push(o.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>r(n)))}function F(t,n,e){return q(t,n,e,R)}function D(t,n,e){return q(t,n,e,W)}function K(t,n){return B(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>N(n)),!0)}function Y(t){return K(t," ")}function H(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function X(t,n,e,r){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,r?"important":"")}function G(t,n,e){t.classList[e?"add":"remove"](n)}function J(t,n=document.body){return Array.from(n.querySelectorAll(t))}const Q=new Map;let V,Z=0;function tt(t,n,e,r,o,i,a,s=0){const c=16.666/r;let u="{\n";for(let g=0;g<=1;g+=c){const t=n+(e-n)*i(g);u+=100*g+`%{${a(t,1-t)}}\n`}const l=u+`100% {${a(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(l)}_${s}`,d=M(t),{stylesheet:h,rules:p}=Q.get(d)||function(t,n){const e={stylesheet:A(n),rules:{}};return Q.set(t,e),e}(d,t);p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${l}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${r}ms linear ${o}ms 1 both`,Z+=1,f}function nt(t,n){const e=(t.style.animation||"").split(", "),r=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),o=e.length-r.length;o&&(t.style.animation=r.join(", "),Z-=o,Z||b((()=>{Z||(Q.forEach((t=>{const{stylesheet:n}=t;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.rules={}})),Q.clear())})))}function et(e,r,o,i){if(!r)return t;const a=e.getBoundingClientRect();if(r.left===a.left&&r.right===a.right&&r.top===a.top&&r.bottom===a.bottom)return t;const{delay:s=0,duration:c=300,easing:u=n,start:l=w()+s,end:f=l+c,tick:d=t,css:h}=o(e,{from:r,to:a},i);let p,m=!0,g=!1;function y(){h&&nt(e,p),m=!1}return E((t=>{if(!g&&t>=l&&(g=!0),g&&t>=f&&(d(1,0),y()),!m)return!1;if(g){const n=0+1*u((t-l)/c);d(n,1-n)}return!0})),h&&(p=tt(e,0,1,c,s,u,h)),s||(g=!0),d(0,1),y}function rt(t){const n=getComputedStyle(t);if("absolute"!==n.position&&"fixed"!==n.position){const{width:e,height:r}=n,o=t.getBoundingClientRect();t.style.position="absolute",t.style.width=e,t.style.height=r,ot(t,o)}}function ot(t,n){const e=t.getBoundingClientRect();if(n.left!==e.left||n.top!==e.top){const r=getComputedStyle(t),o="none"===r.transform?"":r.transform;t.style.transform=`${o} translate(${n.left-e.left}px, ${n.top-e.top}px)`}}function it(t){V=t}function at(){if(!V)throw new Error("Function called outside component initialization");return V}function st(t){at().$$.on_mount.push(t)}function ct(t){at().$$.after_update.push(t)}function ut(t,n){at().$$.context.set(t,n)}function lt(t){return at().$$.context.get(t)}const ft=[],dt=[],ht=[],pt=[],mt=Promise.resolve();let gt=!1;function yt(t){ht.push(t)}const vt=new Set;let wt,bt=0;function _t(){const t=V;do{for(;bt<ft.length;){const t=ft[bt];bt++,it(t),$t(t.$$)}for(it(null),ft.length=0,bt=0;dt.length;)dt.pop()();for(let t=0;t<ht.length;t+=1){const n=ht[t];vt.has(n)||(vt.add(n),n())}ht.length=0}while(ft.length);for(;pt.length;)pt.pop()();gt=!1,vt.clear(),it(t)}function $t(t){if(null!==t.fragment){t.update(),i(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(yt)}}function xt(t,n,e){t.dispatchEvent(function(t,n,e=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,!1,n),r}(`${n?"intro":"outro"}${e}`))}const Et=new Set;let St;function kt(){St={r:0,c:[],p:St}}function Mt(){St.r||i(St.c),St=St.p}function At(t,n){t&&t.i&&(Et.delete(t),t.i(n))}function Pt(t,n,e,r){if(t&&t.o){if(Et.has(t))return;Et.add(t),St.c.push((()=>{Et.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}const Ct={duration:0};function Lt(e,r,o,s){let c=r(e,o),u=s?0:1,l=null,f=null,d=null;function h(){d&&nt(e,d)}function p(t,n){const e=t.b-u;return n*=Math.abs(e),{a:u,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function m(r){const{delay:o=0,duration:a=300,easing:s=n,tick:m=t,css:g}=c||Ct,y={start:w()+o,b:r};r||(y.group=St,St.r+=1),l||f?f=y:(g&&(h(),d=tt(e,u,r,a,o,s,g)),r&&m(0,1),l=p(y,a),yt((()=>xt(e,r,"start"))),E((t=>{if(f&&t>f.start&&(l=p(f,a),f=null,xt(e,l.b,"start"),g&&(h(),d=tt(e,u,l.b,l.duration,0,s,c.css))),l)if(t>=l.end)m(u=l.b,1-u),xt(e,l.b,"end"),f||(l.b?h():--l.group.r||i(l.group.c)),l=null;else if(t>=l.start){const n=t-l.start;u=l.a+l.d*s(n/l.duration),m(u,1-u)}return!(!l&&!f)})))}return{run(t){a(c)?(wt||(wt=Promise.resolve(),wt.then((()=>{wt=null}))),wt).then((()=>{c=c(),m(t)})):m(t)},end(){h(),l=f=null}}}function jt(t,n){t.f(),function(t,n){Pt(t,1,1,(()=>{n.delete(t.key)}))}(t,n)}function Rt(t,n,e,r,o,i,a,s,c,u,l,f){let d=t.length,h=i.length,p=d;const m={};for(;p--;)m[t[p].key]=p;const g=[],y=new Map,v=new Map;for(p=h;p--;){const t=f(o,i,p),s=e(t);let c=a.get(s);c?r&&c.p(t,n):(c=u(s,t),c.c()),y.set(s,g[p]=c),s in m&&v.set(s,Math.abs(p-m[s]))}const w=new Set,b=new Set;function _(t){At(t,1),t.m(s,l),a.set(t.key,t),l=t.first,h--}for(;d&&h;){const n=g[h-1],e=t[d-1],r=n.key,o=e.key;n===e?(l=n.first,d--,h--):y.has(o)?!a.has(r)||w.has(r)?_(n):b.has(o)?d--:v.get(r)>v.get(o)?(b.add(r),_(n)):(w.add(o),d--):(c(e,a),d--)}for(;d--;){const n=t[d];y.has(n.key)||c(n,a)}for(;h;)_(g[h-1]);return g}function Wt(t,n){const e={},r={},o={$$scope:1};let i=t.length;for(;i--;){const a=t[i],s=n[i];if(s){for(const t in a)t in s||(r[t]=1);for(const t in s)o[t]||(e[t]=s[t],o[t]=1);t[i]=s}else for(const t in a)o[t]=1}for(const a in r)a in e||(e[a]=void 0);return e}function Nt(t){return"object"==typeof t&&null!==t?t:{}}function Ot(t){t&&t.c()}function Tt(t,n){t&&t.l(n)}function It(t,n,e,o){const{fragment:s,on_mount:c,on_destroy:u,after_update:l}=t.$$;s&&s.m(n,e),o||yt((()=>{const n=c.map(r).filter(a);u?u.push(...n):i(n),t.$$.on_mount=[]})),l.forEach(yt)}function Ut(t,n){const e=t.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function zt(t,n){-1===t.$$.dirty[0]&&(ft.push(t),gt||(gt=!0,mt.then(_t)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Bt(n,e,r,a,s,c,u,l=[-1]){const f=V;it(n);const d=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:o(),dirty:l,skip_bound:!1,root:e.target||f.$$.root};u&&u(d.root);let h=!1;if(d.ctx=r?r(n,e.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&zt(n,t)),e})):[],d.update(),h=!0,i(d.before_update),d.fragment=!!a&&a(d.ctx),e.target){if(e.hydrate){S=!0;const t=z(e.target);d.fragment&&d.fragment.l(t),t.forEach(L)}else d.fragment&&d.fragment.c();e.intro&&At(n.$$.fragment),It(n,e.target,e.anchor,e.customElement),S=!1,_t()}it(f)}class qt{$destroy(){Ut(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ft=[];function Dt(n,e=t){let r;const o=new Set;function i(t){if(s(n,t)&&(n=t,r)){const t=!Ft.length;for(const e of o)e[1](),Ft.push(e,n);if(t){for(let t=0;t<Ft.length;t+=2)Ft[t][0](Ft[t+1]);Ft.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(a,s=t){const c=[a,s];return o.add(c),1===o.size&&(r=e(i)||t),a(n),()=>{o.delete(c),0===o.size&&(r(),r=null)}}}}try{self["workbox:window:6.1.5"]&&_()}catch(bn){}function Kt(t,n){return new Promise((function(e){var r=new MessageChannel;r.port1.onmessage=function(t){e(t.data)},t.postMessage(n,[r.port2])}))}function Yt(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}try{self["workbox:core:6.1.5"]&&_()}catch(bn){}var Ht=function(){var t=this;this.promise=new Promise((function(n,e){t.resolve=n,t.reject=e}))};function Xt(t,n){var e=location.href;return new URL(t,e).href===new URL(n,e).href}var Gt=function(t,n){this.type=t,Object.assign(this,n)};function Jt(t,n,e){return e?n?n(t):t:(t&&t.then||(t=Promise.resolve(t)),n?t.then(n):t)}function Qt(){}var Vt={type:"SKIP_WAITING"};function Zt(t,n){if(!n)return t&&t.then?t.then(Qt):Promise.resolve()}var tn=function(t){var n,e;function r(n,e){var r,o;return void 0===e&&(e={}),(r=t.call(this)||this).nn={},r.tn=0,r.rn=new Ht,r.en=new Ht,r.on=new Ht,r.un=0,r.an=new Set,r.cn=function(){var t=r.fn,n=t.installing;r.tn>0||!Xt(n.scriptURL,r.sn)||performance.now()>r.un+6e4?(r.vn=n,t.removeEventListener("updatefound",r.cn)):(r.hn=n,r.an.add(n),r.rn.resolve(n)),++r.tn,n.addEventListener("statechange",r.ln)},r.ln=function(t){var n=r.fn,e=t.target,o=e.state,i=e===r.vn,a={sw:e,isExternal:i,originalEvent:t};!i&&r.mn&&(a.isUpdate=!0),r.dispatchEvent(new Gt(o,a)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&n.waiting===e&&r.dispatchEvent(new Gt("waiting",a))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(e))},r.dn=function(t){var n=r.hn,e=n!==navigator.serviceWorker.controller;r.dispatchEvent(new Gt("controlling",{isExternal:e,originalEvent:t,sw:n,isUpdate:r.mn})),e||r.on.resolve(n)},r.gn=(o=function(t){var n=t.data,e=t.source;return Jt(r.getSW(),(function(){r.an.has(e)&&r.dispatchEvent(new Gt("message",{data:n,sw:e,originalEvent:t}))}))},function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(o.apply(this,t))}catch(e){return Promise.reject(e)}}),r.sn=n,r.nn=e,navigator.serviceWorker.addEventListener("message",r.gn),r}e=t,(n=r).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e;var o,i=r.prototype;return i.register=function(t){var n,e,r=(void 0===t?{}:t).immediate,o=void 0!==r&&r;try{var i=this;return n=function(){return i.mn=Boolean(navigator.serviceWorker.controller),i.yn=i.pn(),Jt(i.bn(),(function(t){i.fn=t,i.yn&&(i.hn=i.yn,i.en.resolve(i.yn),i.on.resolve(i.yn),i.yn.addEventListener("statechange",i.ln,{once:!0}));var n=i.fn.waiting;return n&&Xt(n.scriptURL,i.sn)&&(i.hn=n,Promise.resolve().then((function(){i.dispatchEvent(new Gt("waiting",{sw:n,wasWaitingBeforeRegister:!0}))})).then((function(){}))),i.hn&&(i.rn.resolve(i.hn),i.an.add(i.hn)),i.fn.addEventListener("updatefound",i.cn),navigator.serviceWorker.addEventListener("controllerchange",i.dn,{once:!0}),i.fn}))},(e=function(){if(!o&&"complete"!==document.readyState)return Zt(new Promise((function(t){return window.addEventListener("load",t)})))}())&&e.then?e.then(n):n()}catch(a){return Promise.reject(a)}},i.update=function(){try{return this.fn?Zt(this.fn.update()):void 0}catch(bn){return Promise.reject(bn)}},i.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},i.messageSW=function(t){try{return Jt(this.getSW(),(function(n){return Kt(n,t)}))}catch(bn){return Promise.reject(bn)}},i.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Kt(this.fn.waiting,Vt)},i.pn=function(){var t=navigator.serviceWorker.controller;return t&&Xt(t.scriptURL,this.sn)?t:void 0},i.bn=function(){try{var t=this;return function(n,e){try{var r=Jt(navigator.serviceWorker.register(t.sn,t.nn),(function(n){return t.un=performance.now(),n}))}catch(o){return e(o)}return r&&r.then?r.then(void 0,e):r}(0,(function(t){throw t}))}catch(n){return Promise.reject(n)}},(o=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(r.prototype,o),r}(function(){function t(){this.Pn=new Map}var n=t.prototype;return n.addEventListener=function(t,n){this.Sn(t).add(n)},n.removeEventListener=function(t,n){this.Sn(t).delete(n)},n.dispatchEvent=function(t){t.target=this;for(var n,e=function(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return Yt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Yt(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}(this.Sn(t.type));!(n=e()).done;)(0,n.value)(t)},n.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},t}());function nn(t,n,e){return Math.min(t,Math.max(n,e))||0}function en(t,n,e=!1){return e?n<0?an(t).length-1:n>an(t).length-1?0:n:nn(an(t).length-1,0,n)}function rn(t,n){return"wheel"===t.type?"y"===n||t.shiftKey?t.deltaY:t.deltaX:"y"===n?on(t).clientY:on(t).clientX}var on=t=>t.changedTouches?t.changedTouches[0]:t,an=t=>Array.from(t.children),sn=t=>"y"===t?"offsetHeight":"offsetWidth",cn=(t,n,e,r)=>n[(t=>"y"===t?"offsetTop":"offsetLeft")(e)]-((t,n)=>"start"!==t?n:0)(r,((t,n,e)=>t.parentElement[sn(e)]-n[sn(e)])(t,n,e)*(t=>"middle"===t?.5:1)(r));function un(t,n,e,r){return an(t).reduce(((o,i,a)=>{let s=n=>cn(t,n,e,r);return Math.abs(s(i)-n)<Math.abs(s(o)-n)?i:o}))}var ln=(t,n,e,r,o)=>e?an(t).indexOf(e):+un(t,n,r,o).dataset.index,fn=(t,n,e,r)=>cn(t,((t,n)=>t.children[n])(t,n),e,r),dn=(t,n,e,r)=>cn(t,un(t,n,e,r),e,r),hn=(t,n,e)=>an(t)[n][sn(e)],pn=(t,n)=>an(t).find((t=>+t.dataset.index===n));function mn(t,n,e){e?(t.replaceChildren(...((t,n)=>t.slice(n).concat(t.slice(0,n)))(an(t),n-(t=>Math.floor(t.children.length/2))(t))),t.style.justifyContent="center"):(t.replaceChildren(...an(t)),t.style.justifyContent="start")}function gn(t,{gap:n=0,index:e=0,axis:r="x",loop:o=!1,snap:i=!1,clamp:a=!1,gravity:s=1.2,duration:c=375,align:u="start",indexer:l=(t=>t),scroller:f=(t=>t)}){let d,h,p,m=0,g=0,y=0,v=0,w=y,b=e,_=t.parentElement,$=(t,n,e=!1)=>n.forEach((([n,r])=>e?t.removeEventListener(n,r,!0):t.addEventListener(n,r,!0))),x=[["touchmove",C],["mousemove",C],["touchend",L],["mouseup",L]],E=[["contextmenu",R],["touchstart",P],["mousedown",P],["keydown",function(t){"ArrowLeft"===t.key?A(e-1):"ArrowRight"===t.key&&A(e+1)}],["wheel",function(t){R(),j=!0,(Math.abs(rn(t,"x"))&&Math.abs(rn(t,"y"))<15||t.shiftKey)&&t.preventDefault(),M(rn(t,r)*(2-s)),t.shiftKey?A(e-Math.sign(t.deltaY)):(i||a)&&(p=setTimeout((()=>{A(e),j=!1}),100))}],["resize",()=>A(e)]],S=requestAnimationFrame,k=new ResizeObserver((()=>{_.dispatchEvent(new CustomEvent("resize"))}));function M(i,a=0){y+=o?function(o){let i=w-o,a=hn(t,0,r),s=hn(t,t.children.length-1,r),c=t=>(t+n)*Math.sign(-o);return b!==e&&(o>0?function(t,n){let e=t.children[0];t.append(e)}(t):function(t,n){let e=t.children[t.children.length-1];t.prepend(e)}(t),o+=c(o>0?a:s),v=y+o+i),b=e,o}(i):i,e=ln(t,y,void 0,r,u);var s;t.style.transform=`translate3d(${s=r,"y"===s?`0, ${-y}px, 0`:-y+"px, 0, 0"})`,t.style.transition=`${a}ms`,t.dataset.position=`${y}`,t.dataset.index=`${e}`,l(e),f(y)}function A(n,e=null){R(),n=b=en(t,n,o);let a=pn(t,n),s=o?ln(t,y,a,r,u):n;M((e?i?dn(t,e,r,u):e:0===e?0:fn(t,s,r,u))-y,c)}function P(n){t.style.pointerEvents="mousedown"!==n.type?"auto":"none",R(),v=y,g=rn(n,r),function(t){S((function n(e){m=1e3*(y-v)/(e-t+1)*(2-s)+nn(1,0,1-s)*m,t=e,v=y,h=S(n)}))}(performance.now()),$(window,x)}function C(t){let n=(g-rn(t,r))*(2-s);g=rn(t,r),M(n)}function L(n){R();let{target:l,amplitude:f}=function(n){let e=(2-s)*m,o=i?dn(t,n+e,r,u):n+e;return e=o-n,{target:o,amplitude:e}}(y);Math.abs(f)>10&&(Math.abs(m)<100?A(e):a?A(e,l):function({target:t,amplitude:n,duration:r,timestamp:i}){n&&S((function a(s){let c=(s-i)/r,u=n*Math.exp(-c);M(o?u/16.7:-(y-(t-u))),d=Math.abs(u)>.5?S(a):0,o&&Math.abs(u)<5&&A(e)}))}({target:l,amplitude:f,duration:c,timestamp:performance.now()}))}(function(t){return new Promise(((n,e)=>{let r,o=0;clearInterval(r),r=setInterval((()=>{o++,console.log(o,t.children.length),t.children.length>2?(clearInterval(r),Array.from(t.children).forEach(((t,n)=>{t.dataset.index=n})),n(t.children)):o>=69&&(clearInterval(r),e("Slidy haven't items"))}),16)}))})(t).then((n=>{console.log("mounted"),t.style.userSelect="none",t.style.touchAction="pan-y",t.style.pointerEvents="none",t.style.willChange="auto",t.style.webkitUserSelect="none",mn(t,e,o),A(e),_&&(k.observe(_),_.style.outline="none",$(_,E))})).catch((t=>console.error(t)));let j=!1;function R(){b=j?b:e,clearTimeout(p),cancelAnimationFrame(d),cancelAnimationFrame(h),$(window,x,!0)}return{update:function(l){c=l.duration,s=nn(2,0,l.gravity),r=l.axis,u=l.align,i=l.snap,a=l.clamp,n=l.gap,e!==l.index&&A(e=en(t,l.index,o)),o!==l.loop&&(o=l.loop,mn(t,e,o),A(e))},destroy:function(){R(),k.disconnect(),$(_,E,!0)},to:A}}function yn(t){const n=t-1;return n*n*n+1}function vn(t,{delay:n=0,duration:e=400,easing:r=yn,start:o=0,opacity:i=0}={}){const a=getComputedStyle(t),s=+a.opacity,c="none"===a.transform?"":a.transform,u=1-o,l=s*(1-i);return{delay:n,duration:e,easing:r,css:(t,n)=>`\n\t\t\ttransform: ${c} scale(${1-u*n});\n\t\t\topacity: ${s-l*n}\n\t\t`}}function wn(t,{from:n,to:e},r={}){const o=getComputedStyle(t),i="none"===o.transform?"":o.transform,[s,c]=o.transformOrigin.split(" ").map(parseFloat),u=n.left+n.width*s/e.width-(e.left+s),l=n.top+n.height*c/e.height-(e.top+c),{delay:f=0,duration:d=(t=>120*Math.sqrt(t)),easing:h=yn}=r;return{delay:f,duration:a(d)?d(Math.sqrt(u*u+l*l)):d,easing:h,css:(t,r)=>{const o=r*u,a=r*l,s=t+r*n.width/e.width,c=t+r*n.height/e.height;return`transform: ${i} translate(${o}px, ${a}px) scale(${s}, ${c});`}}}export{rt as $,e as A,kt as B,Dt as C,lt as D,W as E,D as F,u as G,G as H,P as I,t as J,f as K,I as L,tn as M,Kt as N,d as O,J as P,m as Q,g as R,qt as S,p as T,l as U,j as V,X as W,y as X,gn as Y,a as Z,i as _,z as a,ot as a0,et as a1,Lt as a2,Rt as a3,wn as a4,yt as a5,vn as a6,jt as a7,U as b,F as c,L as d,R as e,C as f,K as g,H as h,Bt as i,Ot as j,O as k,T as l,Tt as m,Y as n,It as o,Wt as p,Nt as q,Pt as r,s,N as t,Mt as u,At as v,Ut as w,ut as x,ct as y,st as z};
