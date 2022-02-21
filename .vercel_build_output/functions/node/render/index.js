var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse;
    exports.serialize = serialize;
    var decode = decodeURIComponent;
    var encode = encodeURIComponent;
    var pairSplitRegExp = /; */;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var pairs = str.split(pairSplitRegExp);
      var dec = opt.decode || decode;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var eq_idx = pair.indexOf("=");
        if (eq_idx < 0) {
          continue;
        }
        var key = pair.substr(0, eq_idx).trim();
        var val = pair.substr(++eq_idx, pair.length).trim();
        if (val[0] == '"') {
          val = val.slice(1, -1);
        }
        if (obj[key] == void 0) {
          obj[key] = tryDecode(val, dec);
        }
      }
      return obj;
    }
    function serialize(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (opt.maxAge != null) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/workbox-window/build/workbox-window.prod.umd.js
var require_workbox_window_prod_umd = __commonJS({
  "node_modules/workbox-window/build/workbox-window.prod.umd.js"(exports, module2) {
    !function(n, t) {
      typeof exports == "object" && typeof module2 != "undefined" ? t(exports) : typeof define == "function" && define.amd ? define(["exports"], t) : t((n = typeof globalThis != "undefined" ? globalThis : n || self).workbox = {});
    }(exports, function(n) {
      "use strict";
      try {
        self["workbox:window:6.1.5"] && _();
      } catch (n2) {
      }
      function t(n2, t2) {
        return new Promise(function(r2) {
          var e2 = new MessageChannel();
          e2.port1.onmessage = function(n3) {
            r2(n3.data);
          }, n2.postMessage(t2, [e2.port2]);
        });
      }
      function r(n2, t2) {
        for (var r2 = 0; r2 < t2.length; r2++) {
          var e2 = t2[r2];
          e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(n2, e2.key, e2);
        }
      }
      function e(n2, t2) {
        (t2 == null || t2 > n2.length) && (t2 = n2.length);
        for (var r2 = 0, e2 = new Array(t2); r2 < t2; r2++)
          e2[r2] = n2[r2];
        return e2;
      }
      function i(n2, t2) {
        var r2;
        if (typeof Symbol == "undefined" || n2[Symbol.iterator] == null) {
          if (Array.isArray(n2) || (r2 = function(n3, t3) {
            if (n3) {
              if (typeof n3 == "string")
                return e(n3, t3);
              var r3 = Object.prototype.toString.call(n3).slice(8, -1);
              return r3 === "Object" && n3.constructor && (r3 = n3.constructor.name), r3 === "Map" || r3 === "Set" ? Array.from(n3) : r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? e(n3, t3) : void 0;
            }
          }(n2)) || t2 && n2 && typeof n2.length == "number") {
            r2 && (n2 = r2);
            var i2 = 0;
            return function() {
              return i2 >= n2.length ? {done: true} : {done: false, value: n2[i2++]};
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        return (r2 = n2[Symbol.iterator]()).next.bind(r2);
      }
      try {
        self["workbox:core:6.1.5"] && _();
      } catch (n2) {
      }
      var o = function() {
        var n2 = this;
        this.promise = new Promise(function(t2, r2) {
          n2.resolve = t2, n2.reject = r2;
        });
      };
      function u(n2, t2) {
        var r2 = location.href;
        return new URL(n2, r2).href === new URL(t2, r2).href;
      }
      var a = function(n2, t2) {
        this.type = n2, Object.assign(this, t2);
      };
      function c(n2, t2, r2) {
        return r2 ? t2 ? t2(n2) : n2 : (n2 && n2.then || (n2 = Promise.resolve(n2)), t2 ? n2.then(t2) : n2);
      }
      function f() {
      }
      var s2 = {type: "SKIP_WAITING"};
      function v(n2, t2) {
        if (!t2)
          return n2 && n2.then ? n2.then(f) : Promise.resolve();
      }
      var h = function(n2) {
        var e2, i2;
        function f2(t2, r2) {
          var e3, i3;
          return r2 === void 0 && (r2 = {}), (e3 = n2.call(this) || this).nn = {}, e3.tn = 0, e3.rn = new o(), e3.en = new o(), e3.on = new o(), e3.un = 0, e3.an = new Set(), e3.cn = function() {
            var n3 = e3.fn, t3 = n3.installing;
            e3.tn > 0 || !u(t3.scriptURL, e3.sn) || performance.now() > e3.un + 6e4 ? (e3.vn = t3, n3.removeEventListener("updatefound", e3.cn)) : (e3.hn = t3, e3.an.add(t3), e3.rn.resolve(t3)), ++e3.tn, t3.addEventListener("statechange", e3.ln);
          }, e3.ln = function(n3) {
            var t3 = e3.fn, r3 = n3.target, i4 = r3.state, o2 = r3 === e3.vn, u2 = {sw: r3, isExternal: o2, originalEvent: n3};
            !o2 && e3.dn && (u2.isUpdate = true), e3.dispatchEvent(new a(i4, u2)), i4 === "installed" ? e3.mn = self.setTimeout(function() {
              i4 === "installed" && t3.waiting === r3 && e3.dispatchEvent(new a("waiting", u2));
            }, 200) : i4 === "activating" && (clearTimeout(e3.mn), o2 || e3.en.resolve(r3));
          }, e3.wn = function(n3) {
            var t3 = e3.hn, r3 = t3 !== navigator.serviceWorker.controller;
            e3.dispatchEvent(new a("controlling", {isExternal: r3, originalEvent: n3, sw: t3, isUpdate: e3.dn})), r3 || e3.on.resolve(t3);
          }, e3.gn = (i3 = function(n3) {
            var t3 = n3.data, r3 = n3.source;
            return c(e3.getSW(), function() {
              e3.an.has(r3) && e3.dispatchEvent(new a("message", {data: t3, sw: r3, originalEvent: n3}));
            });
          }, function() {
            for (var n3 = [], t3 = 0; t3 < arguments.length; t3++)
              n3[t3] = arguments[t3];
            try {
              return Promise.resolve(i3.apply(this, n3));
            } catch (n4) {
              return Promise.reject(n4);
            }
          }), e3.sn = t2, e3.nn = r2, navigator.serviceWorker.addEventListener("message", e3.gn), e3;
        }
        i2 = n2, (e2 = f2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, e2.__proto__ = i2;
        var h2, l, d2, m = f2.prototype;
        return m.register = function(n3) {
          var t2 = (n3 === void 0 ? {} : n3).immediate, r2 = t2 !== void 0 && t2;
          try {
            var e3 = this;
            return function(n4, t3) {
              var r3 = n4();
              if (r3 && r3.then)
                return r3.then(t3);
              return t3(r3);
            }(function() {
              if (!r2 && document.readyState !== "complete")
                return v(new Promise(function(n4) {
                  return window.addEventListener("load", n4);
                }));
            }, function() {
              return e3.dn = Boolean(navigator.serviceWorker.controller), e3.yn = e3.pn(), c(e3.bn(), function(n4) {
                e3.fn = n4, e3.yn && (e3.hn = e3.yn, e3.en.resolve(e3.yn), e3.on.resolve(e3.yn), e3.yn.addEventListener("statechange", e3.ln, {once: true}));
                var t3 = e3.fn.waiting;
                return t3 && u(t3.scriptURL, e3.sn) && (e3.hn = t3, Promise.resolve().then(function() {
                  e3.dispatchEvent(new a("waiting", {sw: t3, wasWaitingBeforeRegister: true}));
                }).then(function() {
                })), e3.hn && (e3.rn.resolve(e3.hn), e3.an.add(e3.hn)), e3.fn.addEventListener("updatefound", e3.cn), navigator.serviceWorker.addEventListener("controllerchange", e3.wn, {once: true}), e3.fn;
              });
            });
          } catch (n4) {
            return Promise.reject(n4);
          }
        }, m.update = function() {
          try {
            return this.fn ? v(this.fn.update()) : void 0;
          } catch (n3) {
            return Promise.reject(n3);
          }
        }, m.getSW = function() {
          return this.hn !== void 0 ? Promise.resolve(this.hn) : this.rn.promise;
        }, m.messageSW = function(n3) {
          try {
            return c(this.getSW(), function(r2) {
              return t(r2, n3);
            });
          } catch (n4) {
            return Promise.reject(n4);
          }
        }, m.messageSkipWaiting = function() {
          this.fn && this.fn.waiting && t(this.fn.waiting, s2);
        }, m.pn = function() {
          var n3 = navigator.serviceWorker.controller;
          return n3 && u(n3.scriptURL, this.sn) ? n3 : void 0;
        }, m.bn = function() {
          try {
            var n3 = this;
            return function(n4, t2) {
              try {
                var r2 = n4();
              } catch (n5) {
                return t2(n5);
              }
              if (r2 && r2.then)
                return r2.then(void 0, t2);
              return r2;
            }(function() {
              return c(navigator.serviceWorker.register(n3.sn, n3.nn), function(t2) {
                return n3.un = performance.now(), t2;
              });
            }, function(n4) {
              throw n4;
            });
          } catch (n4) {
            return Promise.reject(n4);
          }
        }, h2 = f2, (l = [{key: "active", get: function() {
          return this.en.promise;
        }}, {key: "controlling", get: function() {
          return this.on.promise;
        }}]) && r(h2.prototype, l), d2 && r(h2, d2), f2;
      }(function() {
        function n2() {
          this.Pn = new Map();
        }
        var t2 = n2.prototype;
        return t2.addEventListener = function(n3, t3) {
          this.jn(n3).add(t3);
        }, t2.removeEventListener = function(n3, t3) {
          this.jn(n3).delete(t3);
        }, t2.dispatchEvent = function(n3) {
          n3.target = this;
          for (var t3, r2 = i(this.jn(n3.type)); !(t3 = r2()).done; ) {
            (0, t3.value)(n3);
          }
        }, t2.jn = function(n3) {
          return this.Pn.has(n3) || this.Pn.set(n3, new Set()), this.Pn.get(n3);
        }, n2;
      }());
      n.Workbox = h, n.messageSW = t, Object.defineProperty(n, "__esModule", {value: true});
    });
  }
});

// .svelte-kit/vercel/entry.js
__markAsModule(exports);
__export(exports, {
  default: () => entry_default
});

// node_modules/@sveltejs/kit/dist/node.js
function getRawBody(req) {
  return new Promise((fulfil, reject) => {
    const h = req.headers;
    if (!h["content-type"]) {
      fulfil(null);
      return;
    }
    req.on("error", reject);
    const length = Number(h["content-length"]);
    let data;
    if (!isNaN(length)) {
      data = new Uint8Array(length);
      let i = 0;
      req.on("data", (chunk) => {
        data.set(chunk, i);
        i += chunk.length;
      });
    } else {
      if (h["transfer-encoding"] === void 0) {
        fulfil(null);
        return;
      }
      data = new Uint8Array(0);
      req.on("data", (chunk) => {
        const new_data = new Uint8Array(data.length + chunk.length);
        new_data.set(data);
        new_data.set(chunk, data.length);
        data = new_data;
      });
    }
    req.on("end", () => {
      const [type] = h["content-type"].split(/;\s*/);
      if (type === "application/octet-stream") {
        fulfil(data);
      }
      const decoder = new TextDecoder(h["content-encoding"] || "utf-8");
      fulfil(decoder.decode(data));
    });
  });
}

// node_modules/@sveltejs/kit/dist/install-fetch.js
var import_http = __toModule(require("http"));
var import_https = __toModule(require("https"));
var import_zlib = __toModule(require("zlib"));
var import_stream = __toModule(require("stream"));
var import_util = __toModule(require("util"));
var import_crypto = __toModule(require("crypto"));
var import_url = __toModule(require("url"));
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var src = dataUriToBuffer;
var {Readable} = import_stream.default;
var wm = new WeakMap();
async function* read(parts) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else {
      yield part;
    }
  }
}
var Blob = class {
  constructor(blobParts = [], options2 = {}) {
    let size = 0;
    const parts = blobParts.map((element) => {
      let buffer;
      if (element instanceof Buffer) {
        buffer = element;
      } else if (ArrayBuffer.isView(element)) {
        buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
      } else if (element instanceof ArrayBuffer) {
        buffer = Buffer.from(element);
      } else if (element instanceof Blob) {
        buffer = element;
      } else {
        buffer = Buffer.from(typeof element === "string" ? element : String(element));
      }
      size += buffer.length || buffer.size || 0;
      return buffer;
    });
    const type = options2.type === void 0 ? "" : String(options2.type).toLowerCase();
    wm.set(this, {
      type: /[^\u0020-\u007E]/.test(type) ? "" : type,
      size,
      parts
    });
  }
  get size() {
    return wm.get(this).size;
  }
  get type() {
    return wm.get(this).type;
  }
  async text() {
    return Buffer.from(await this.arrayBuffer()).toString();
  }
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of this.stream()) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    return Readable.from(read(wm.get(this).parts));
  }
  slice(start = 0, end = this.size, type = "") {
    const {size} = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = wm.get(this).parts.values();
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        const chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
        blobParts.push(chunk);
        added += ArrayBuffer.isView(chunk) ? chunk.byteLength : chunk.size;
        relativeStart = 0;
        if (added >= span) {
          break;
        }
      }
    }
    const blob = new Blob([], {type: String(type).toLowerCase()});
    Object.assign(wm.get(blob), {size: span, parts: blobParts});
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return object && typeof object === "object" && typeof object.stream === "function" && object.stream.length === 0 && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(Blob.prototype, {
  size: {enumerable: true},
  type: {enumerable: true},
  slice: {enumerable: true}
});
var fetchBlob = Blob;
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
var isBlob = (object) => {
  return typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
function isFormData(object) {
  return typeof object === "object" && typeof object.append === "function" && typeof object.set === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.delete === "function" && typeof object.keys === "function" && typeof object.values === "function" && typeof object.entries === "function" && typeof object.constructor === "function" && object[NAME] === "FormData";
}
var isAbortSignal = (object) => {
  return typeof object === "object" && object[NAME] === "AbortSignal";
};
var carriage = "\r\n";
var dashes = "-".repeat(2);
var carriageLength = Buffer.byteLength(carriage);
var getFooter = (boundary) => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;
function getHeader(boundary, name, field) {
  let header = "";
  header += `${dashes}${boundary}${carriage}`;
  header += `Content-Disposition: form-data; name="${name}"`;
  if (isBlob(field)) {
    header += `; filename="${field.name}"${carriage}`;
    header += `Content-Type: ${field.type || "application/octet-stream"}`;
  }
  return `${header}${carriage.repeat(2)}`;
}
var getBoundary = () => (0, import_crypto.randomBytes)(8).toString("hex");
async function* formDataIterator(form, boundary) {
  for (const [name, value] of form) {
    yield getHeader(boundary, name, value);
    if (isBlob(value)) {
      yield* value.stream();
    } else {
      yield value;
    }
    yield carriage;
  }
  yield getFooter(boundary);
}
function getFormDataLength(form, boundary) {
  let length = 0;
  for (const [name, value] of form) {
    length += Buffer.byteLength(getHeader(boundary, name, value));
    if (isBlob(value)) {
      length += value.size;
    } else {
      length += Buffer.byteLength(String(value));
    }
    length += carriageLength;
  }
  length += Buffer.byteLength(getFooter(boundary));
  return length;
}
var INTERNALS$2 = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = Buffer.from(body.toString());
    } else if (isBlob(body))
      ;
    else if (Buffer.isBuffer(body))
      ;
    else if (import_util.types.isAnyArrayBuffer(body)) {
      body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_stream.default)
      ;
    else if (isFormData(body)) {
      boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
      body = import_stream.default.Readable.from(formDataIterator(body, boundary));
    } else {
      body = Buffer.from(String(body));
    }
    this[INTERNALS$2] = {
      body,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_stream.default) {
      body.on("error", (err) => {
        const error3 = err instanceof FetchBaseError ? err : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, "system", err);
        this[INTERNALS$2].error = error3;
      });
    }
  }
  get body() {
    return this[INTERNALS$2].body;
  }
  get bodyUsed() {
    return this[INTERNALS$2].disturbed;
  }
  async arrayBuffer() {
    const {buffer, byteOffset, byteLength} = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
    const buf = await this.buffer();
    return new fetchBlob([buf], {
      type: ct
    });
  }
  async json() {
    const buffer = await consumeBody(this);
    return JSON.parse(buffer.toString());
  }
  async text() {
    const buffer = await consumeBody(this);
    return buffer.toString();
  }
  buffer() {
    return consumeBody(this);
  }
};
Object.defineProperties(Body.prototype, {
  body: {enumerable: true},
  bodyUsed: {enumerable: true},
  arrayBuffer: {enumerable: true},
  blob: {enumerable: true},
  json: {enumerable: true},
  text: {enumerable: true}
});
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  let {body} = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (isBlob(body)) {
    body = body.stream();
  }
  if (Buffer.isBuffer(body)) {
    return body;
  }
  if (!(body instanceof import_stream.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const err = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(err);
        throw err;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error3) {
    if (error3 instanceof FetchBaseError) {
      throw error3;
    } else {
      throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error3.message}`, "system", error3);
    }
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error3) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error3.message}`, "system", error3);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let {body} = instance;
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_stream.PassThrough({highWaterMark});
    p2 = new import_stream.PassThrough({highWaterMark});
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS$2].body = p1;
    body = p2;
  }
  return body;
};
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (Buffer.isBuffer(body) || import_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  }
  if (isFormData(body)) {
    return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
  }
  if (body instanceof import_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const {body} = request;
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  if (isFormData(body)) {
    return getFormDataLength(request[INTERNALS$2].boundary);
  }
  return null;
};
var writeToStream = (dest, {body}) => {
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
};
var validateHeaderName = typeof import_http.default.validateHeaderName === "function" ? import_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_HTTP_TOKEN"});
    throw err;
  }
};
var validateHeaderValue = typeof import_http.default.validateHeaderValue === "function" ? import_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const err = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_CHAR"});
    throw err;
  }
};
var Headers = class extends URLSearchParams {
  constructor(init2) {
    let result = [];
    if (init2 instanceof Headers) {
      const raw = init2.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init2 == null)
      ;
    else if (typeof init2 === "object" && !import_util.types.isBoxedPrimitive(init2)) {
      const method = init2[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init2));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init2].map((pair) => {
          if (typeof pair !== "object" || import_util.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback) {
    for (const name of this.keys()) {
      callback(this.get(name), name);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = {enumerable: true};
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index2, array) => {
    if (index2 % 2 === 0) {
      result.push(array.slice(index2, index2 + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
var redirectStatus = new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};
var INTERNALS$1 = Symbol("Response internals");
var Response2 = class extends Body {
  constructor(body = null, options2 = {}) {
    super(body, options2);
    const status = options2.status || 200;
    const headers = new Headers(options2.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: options2.url,
      status,
      statusText: options2.statusText || "",
      headers,
      counter: options2.counter,
      highWaterMark: options2.highWaterMark
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  get highWaterMark() {
    return this[INTERNALS$1].highWaterMark;
  }
  clone() {
    return new Response2(clone(this, this.highWaterMark), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response2(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response2.prototype, {
  url: {enumerable: true},
  status: {enumerable: true},
  ok: {enumerable: true},
  redirected: {enumerable: true},
  statusText: {enumerable: true},
  headers: {enumerable: true},
  clone: {enumerable: true}
});
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash2 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash2.length] === "?" ? "?" : "";
};
var INTERNALS = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS] === "object";
};
var Request = class extends Body {
  constructor(input, init2 = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    let method = init2.method || input.method || "GET";
    method = method.toUpperCase();
    if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init2.size || input.size || 0
    });
    const headers = new Headers(init2.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init2) {
      signal = init2.signal;
    }
    if (signal !== null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    }
    this[INTERNALS] = {
      method,
      redirect: init2.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal
    };
    this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
    this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
    this.counter = init2.counter || input.counter || 0;
    this.agent = init2.agent || input.agent;
    this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
  }
  get method() {
    return this[INTERNALS].method;
  }
  get url() {
    return (0, import_url.format)(this[INTERNALS].parsedURL);
  }
  get headers() {
    return this[INTERNALS].headers;
  }
  get redirect() {
    return this[INTERNALS].redirect;
  }
  get signal() {
    return this[INTERNALS].signal;
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: {enumerable: true},
  url: {enumerable: true},
  headers: {enumerable: true},
  redirect: {enumerable: true},
  clone: {enumerable: true},
  signal: {enumerable: true}
});
var getNodeRequestOptions = (request) => {
  const {parsedURL} = request[INTERNALS];
  const headers = new Headers(request[INTERNALS].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let {agent} = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const requestOptions = {
    path: parsedURL.pathname + search,
    pathname: parsedURL.pathname,
    hostname: parsedURL.hostname,
    protocol: parsedURL.protocol,
    port: parsedURL.port,
    hash: parsedURL.hash,
    search: parsedURL.search,
    query: parsedURL.query,
    href: parsedURL.href,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return requestOptions;
};
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};
var supportedSchemas = new Set(["data:", "http:", "https:"]);
async function fetch2(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request(url, options_);
    const options2 = getNodeRequestOptions(request);
    if (!supportedSchemas.has(options2.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options2.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (options2.protocol === "data:") {
      const data = src(request.url);
      const response2 = new Response2(data, {headers: {"Content-Type": data.typeFull}});
      resolve2(response2);
      return;
    }
    const send = (options2.protocol === "https:" ? import_https.default : import_http.default).request;
    const {signal} = request;
    let response = null;
    const abort = () => {
      const error3 = new AbortError("The operation was aborted.");
      reject(error3);
      if (request.body && request.body instanceof import_stream.default.Readable) {
        request.body.destroy(error3);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error3);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(options2);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (err) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
      finalize();
    });
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location2 = headers.get("Location");
        const locationURL = location2 === null ? null : new URL(location2, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              try {
                headers.set("Location", locationURL);
              } catch (error3) {
                reject(error3);
              }
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              size: request.size
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_stream.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            resolve2(fetch2(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
        }
      }
      response_.once("end", () => {
        if (signal) {
          signal.removeEventListener("abort", abortAndFinalize);
        }
      });
      let body = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
        reject(error3);
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createGunzip(zlibOptions), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
          reject(error3);
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflate(), (error3) => {
              reject(error3);
            });
          } else {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflateRaw(), (error3) => {
              reject(error3);
            });
          }
          response = new Response2(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createBrotliDecompress(), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response2(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}
globalThis.fetch = fetch2;
globalThis.Response = Response2;
globalThis.Request = Request;
globalThis.Headers = Headers;

// node_modules/@sveltejs/kit/dist/ssr.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return {set, update, subscribe};
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var s$1 = JSON.stringify;
async function render_response({
  options: options2,
  $session,
  page_config,
  status,
  error: error3,
  branch,
  page
}) {
  const css2 = new Set(options2.entry.css);
  const js = new Set(options2.entry.js);
  const styles = new Set();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error3) {
    error3.stack = options2.get_stack(error3);
  }
  if (branch) {
    branch.forEach(({node, loaded, fetched, uses_credentials}) => {
      if (node.css)
        node.css.forEach((url) => css2.add(url));
      if (node.js)
        node.js.forEach((url) => js.add(url));
      if (node.styles)
        node.styles.forEach((content) => styles.add(content));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session
      },
      page,
      components: branch.map(({node}) => node.module.default)
    };
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options2.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = {head: "", html: "", css: {code: "", map: null}};
  }
  const include_js = page_config.router || page_config.hydrate;
  if (!include_js)
    js.clear();
  const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
    ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
    ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
  ].join("\n		");
  let init2 = "";
  if (options2.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"></script>`;
  } else if (include_js) {
    init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error4) => {
      throw new Error(`Failed to serialize session data: ${error4.message}`);
    })},
				host: ${page && page.host ? s$1(page.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error3)},
					nodes: [
						${branch.map(({node}) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page.host ? s$1(page.host) : "location.host"}, // TODO this is redundant
						path: ${s$1(page.path)},
						query: new URLSearchParams(${s$1(page.query.toString())}),
						params: ${s$1(page.params)}
					}
				}` : "null"}
			});
		</script>`;
  }
  const head = [
    rendered.head,
    styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
    links,
    init2
  ].join("\n\n		");
  const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({url, body: body2, json}) => {
    return body2 ? `<script type="svelte-data" url="${url}" body="${hash(body2)}">${json}</script>` : `<script type="svelte-data" url="${url}">${json}</script>`;
  }).join("\n\n			")}
		`.replace(/^\t{2}/gm, "");
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  if (!options2.floc) {
    headers["permissions-policy"] = "interest-cohort=()";
  }
  return {
    status,
    headers,
    body: options2.template({head, body})
  };
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(err);
    return null;
  }
}
function serialize_error(error3) {
  if (!error3)
    return null;
  let serialized = try_serialize(error3);
  if (!serialized) {
    const {name, message, stack} = error3;
    serialized = try_serialize({name, message, stack});
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  if (loaded.error) {
    const error3 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    const status = loaded.status;
    if (!(error3 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error3}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return {status: 500, error: error3};
    }
    return {status, error: error3};
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  return loaded;
}
function resolve(base2, path) {
  const baseparts = path[0] === "/" ? [] : base2.slice(1).split("/");
  const pathparts = path[0] === "/" ? path.slice(1).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  return `/${baseparts.join("/")}`;
}
var s = JSON.stringify;
async function load_node({
  request,
  options: options2,
  state,
  route,
  page,
  node,
  $session,
  context,
  is_leaf,
  is_error,
  status,
  error: error3
}) {
  const {module: module2} = node;
  let uses_credentials = false;
  const fetched = [];
  let loaded;
  if (module2.load) {
    const load_input = {
      page,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let url;
        if (typeof resource === "string") {
          url = resource;
        } else {
          url = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        if (options2.read && url.startsWith(options2.paths.assets)) {
          url = url.replace(options2.paths.assets, "");
        }
        if (url.startsWith("//")) {
          throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
        }
        let response;
        if (/^[a-zA-Z]+:/.test(url)) {
          response = await fetch(url, opts);
        } else {
          const [path, search] = url.split("?");
          const resolved = resolve(request.path, path);
          const filename = resolved.slice(1);
          const filename_html = `${filename}/index.html`;
          const asset = options2.manifest.assets.find((d2) => d2.file === filename || d2.file === filename_html);
          if (asset) {
            if (options2.read) {
              response = new Response(options2.read(asset.file), {
                headers: {
                  "content-type": asset.type
                }
              });
            } else {
              response = await fetch(`http://${page.host}/${asset.file}`, opts);
            }
          }
          if (!response) {
            const headers = {...opts.headers};
            if (opts.credentials !== "omit") {
              uses_credentials = true;
              headers.cookie = request.headers.cookie;
              if (!headers.authorization) {
                headers.authorization = request.headers.authorization;
              }
            }
            if (opts.body && typeof opts.body !== "string") {
              throw new Error("Request body must be a string");
            }
            const rendered = await respond({
              host: request.host,
              method: opts.method || "GET",
              headers,
              path: resolved,
              rawBody: opts.body,
              query: new URLSearchParams(search)
            }, options2, {
              fetched: url,
              initiator: route
            });
            if (rendered) {
              if (state.prerender) {
                state.prerender.dependencies.set(resolved, rendered);
              }
              response = new Response(rendered.body, {
                status: rendered.status,
                headers: rendered.headers
              });
            }
          }
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 !== "etag" && key2 !== "set-cookie")
                    headers[key2] = value;
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":${escape(body)}}`
                  });
                }
                return body;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      context: {...context}
    };
    if (is_error) {
      load_input.status = status;
      load_input.error = error3;
    }
    loaded = await module2.load.call(null, load_input);
  } else {
    loaded = {};
  }
  if (!loaded && is_leaf && !is_error)
    return;
  return {
    node,
    loaded: normalize(loaded),
    context: loaded.context || context,
    fetched,
    uses_credentials
  };
}
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
async function respond_with_error({request, options: options2, state, $session, status, error: error3}) {
  const default_layout = await options2.load_component(options2.manifest.layout);
  const default_error = await options2.load_component(options2.manifest.error);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params: {}
  };
  const loaded = await load_node({
    request,
    options: options2,
    state,
    route: null,
    page,
    node: default_layout,
    $session,
    context: {},
    is_leaf: false,
    is_error: false
  });
  const branch = [
    loaded,
    await load_node({
      request,
      options: options2,
      state,
      route: null,
      page,
      node: default_error,
      $session,
      context: loaded.context,
      is_leaf: false,
      is_error: true,
      status,
      error: error3
    })
  ];
  try {
    return await render_response({
      options: options2,
      $session,
      page_config: {
        hydrate: options2.hydrate,
        router: options2.router,
        ssr: options2.ssr
      },
      status,
      error: error3,
      branch,
      page
    });
  } catch (error4) {
    options2.handle_error(error4);
    return {
      status: 500,
      headers: {},
      body: error4.stack
    };
  }
}
async function respond$1({request, options: options2, state, $session, route}) {
  const match = route.pattern.exec(request.path);
  const params = route.params(match);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id && options2.load_component(id)));
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  const page_config = {
    ssr: "ssr" in leaf ? leaf.ssr : options2.ssr,
    router: "router" in leaf ? leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? leaf.hydrate : options2.hydrate
  };
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {},
      body: null
    };
  }
  let branch;
  let status = 200;
  let error3;
  ssr:
    if (page_config.ssr) {
      let context = {};
      branch = [];
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              request,
              options: options2,
              state,
              route,
              page,
              node,
              $session,
              context,
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            if (loaded.loaded.redirect) {
              return {
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              };
            }
            if (loaded.loaded.error) {
              ({status, error: error3} = loaded.loaded);
            }
          } catch (e) {
            options2.handle_error(e);
            status = 500;
            error3 = e;
          }
          if (error3) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let error_loaded;
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  error_loaded = await load_node({
                    request,
                    options: options2,
                    state,
                    route,
                    page,
                    node: error_node,
                    $session,
                    context: node_loaded.context,
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error3
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (e) {
                  options2.handle_error(e);
                  continue;
                }
              }
            }
            return await respond_with_error({
              request,
              options: options2,
              state,
              $session,
              status,
              error: error3
            });
          }
        }
        branch.push(loaded);
        if (loaded && loaded.loaded.context) {
          context = {
            ...context,
            ...loaded.loaded.context
          };
        }
      }
    }
  try {
    return await render_response({
      options: options2,
      $session,
      page_config,
      status,
      error: error3,
      branch: branch && branch.filter(Boolean),
      page
    });
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
}
async function render_page(request, route, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const $session = await options2.hooks.getSession(request);
  if (route) {
    const response = await respond$1({
      request,
      options: options2,
      state,
      $session,
      route
    });
    if (response) {
      return response;
    }
    if (state.fetched) {
      return {
        status: 500,
        headers: {},
        body: `Bad request in load function: failed to fetch ${state.fetched}`
      };
    }
  } else {
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 404,
      error: new Error(`Not found: ${request.path}`)
    });
  }
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key in obj) {
    clone2[key.toLowerCase()] = obj[key];
  }
  return clone2;
}
function error(body) {
  return {
    status: 500,
    body,
    headers: {}
  };
}
async function render_route(request, route) {
  const mod = await route.load();
  const handler = mod[request.method.toLowerCase().replace("delete", "del")];
  if (handler) {
    const match = route.pattern.exec(request.path);
    const params = route.params(match);
    const response = await handler({...request, params});
    if (response) {
      if (typeof response !== "object") {
        return error(`Invalid response from route ${request.path}: expected an object, got ${typeof response}`);
      }
      let {status = 200, body, headers = {}} = response;
      headers = lowercase_keys(headers);
      const type = headers["content-type"];
      if (type === "application/octet-stream" && !(body instanceof Uint8Array)) {
        return error(`Invalid response from route ${request.path}: body must be an instance of Uint8Array if content type is application/octet-stream`);
      }
      if (body instanceof Uint8Array && type !== "application/octet-stream") {
        return error(`Invalid response from route ${request.path}: Uint8Array body must be accompanied by content-type: application/octet-stream header`);
      }
      let normalized_body;
      if (typeof body === "object" && (!type || type === "application/json")) {
        headers = {...headers, "content-type": "application/json"};
        normalized_body = JSON.stringify(body);
      } else {
        normalized_body = body;
      }
      return {status, body: normalized_body, headers};
    }
  }
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        map.get(key).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
var ReadOnlyFormData = class {
  #map;
  constructor(map) {
    this.#map = map;
  }
  get(key) {
    const value = this.#map.get(key);
    return value && value[0];
  }
  getAll(key) {
    return this.#map.get(key);
  }
  has(key) {
    return this.#map.has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield key;
      }
    }
  }
  *values() {
    for (const [, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield value;
      }
    }
  }
};
function parse_body(req) {
  const raw = req.rawBody;
  if (!raw)
    return raw;
  const [type, ...directives] = req.headers["content-type"].split(/;\s*/);
  if (typeof raw === "string") {
    switch (type) {
      case "text/plain":
        return raw;
      case "application/json":
        return JSON.parse(raw);
      case "application/x-www-form-urlencoded":
        return get_urlencoded(raw);
      case "multipart/form-data": {
        const boundary = directives.find((directive) => directive.startsWith("boundary="));
        if (!boundary)
          throw new Error("Missing boundary");
        return get_multipart(raw, boundary.slice("boundary=".length));
      }
      default:
        throw new Error(`Invalid Content-Type ${type}`);
    }
  }
  return raw;
}
function get_urlencoded(text) {
  const {data, append} = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  const nope = () => {
    throw new Error("Malformed form data");
  };
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    nope();
  }
  const {data, append} = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          nope();
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      nope();
    append(key, body);
  });
  return data;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
    const has_trailing_slash = incoming.path.endsWith("/");
    if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !incoming.path.split("/").pop().includes(".")) {
      const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
      const q = incoming.query.toString();
      return {
        status: 301,
        headers: {
          location: encodeURI(path + (q ? `?${q}` : ""))
        }
      };
    }
  }
  try {
    return await options2.hooks.handle({
      request: {
        ...incoming,
        headers: lowercase_keys(incoming.headers),
        body: parse_body(incoming),
        params: null,
        locals: {}
      },
      render: async (request) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession(request),
            page_config: {ssr: false, router: true, hydrate: true},
            status: 200,
            error: null,
            branch: [],
            page: null
          });
        }
        for (const route of options2.manifest.routes) {
          if (!route.pattern.test(request.path))
            continue;
          const response = route.type === "endpoint" ? await render_route(request, route) : await render_page(request, route, options2, state);
          if (response) {
            if (response.status === 200) {
              if (!/(no-store|immutable)/.test(response.headers["cache-control"])) {
                const etag = `"${hash(response.body)}"`;
                if (request.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {},
                    body: null
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        return await render_page(request, null, options2, state);
      }
    });
  } catch (e) {
    options2.handle_error(e);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}

// node_modules/svelte/internal/index.mjs
function noop2() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
var tasks = new Set();
var managed_styles = new Map();
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
var resolved_promise = Promise.resolve();
var seen_callbacks = new Set();
var outroing = new Set();
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
var escaped2 = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape2(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped2[match]);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
var missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
var on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({$$});
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, {$$slots = {}, context = new Map()} = {}) => {
      on_destroy = [];
      const result = {title: "", head: "", css: new Set()};
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true && boolean_attributes.has(name) ? "" : `=${typeof value === "string" ? JSON.stringify(escape2(value)) : `"${value}"`}`}`;
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: "open"});
    }
    connectedCallback() {
      const {on_mount} = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop2;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index2 = callbacks.indexOf(callback);
        if (index2 !== -1)
          callbacks.splice(index2, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}

// node_modules/svelte/ssr.mjs
function onMount() {
}
function afterUpdate() {
}

// .svelte-kit/output/server/app.js
var import_cookie = __toModule(require_cookie());

// node_modules/@lukeed/uuid/dist/index.mjs
var IDX = 256;
var HEX = [];
var BUFFER;
while (IDX--)
  HEX[IDX] = (IDX + 256).toString(16).substring(1);
function v4() {
  var i = 0, num, out = "";
  if (!BUFFER || IDX + 16 > 256) {
    BUFFER = Array(i = 256);
    while (i--)
      BUFFER[i] = 256 * Math.random() | 0;
    i = IDX = 0;
  }
  for (; i < 16; i++) {
    num = BUFFER[IDX + i];
    if (i == 6)
      out += HEX[num & 15 | 64];
    else if (i == 8)
      out += HEX[num & 63 | 128];
    else
      out += HEX[num];
    if (i & 1 && i > 1 && i < 11)
      out += "-";
  }
  IDX++;
  return out;
}

// .svelte-kit/output/server/app.js
var import_workbox_window = __toModule(require_workbox_window_prod_umd());
var css$5 = {
  code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n</script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AAsDC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
};
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {stores} = $$props;
  let {page} = $$props;
  let {components} = $$props;
  let {props_0 = null} = $$props;
  let {props_1 = null} = $$props;
  let {props_2 = null} = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$5);
  {
    stores.page.set(page);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => {
      return `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
        default: () => {
          return `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`;
        }
      })}` : ``}`;
    }
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1j55zn5"}">${navigated ? `${escape2(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var handle = async ({request, render: render2}) => {
  const cookies = import_cookie.default.parse(request.headers.cookie || "");
  request.locals.userid = cookies.userid || v4();
  if (request.query.has("_method")) {
    request.method = request.query.get("_method").toUpperCase();
  }
  const response = await render2(request);
  if (!cookies.userid) {
    response.headers["set-cookie"] = `userid=${request.locals.userid}; Path=/; HttpOnly`;
  }
  return response;
};
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  handle
});
var template = ({head, body}) => '<!DOCTYPE html>\n<html lang="en" class="system h-100 overflow-hidden w-100 backface-hidden">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.ico" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n\n	<!-- disable-scrolling -->\n	<body class="ma0 pa0 overflow-hidden backface-hidden bg-near-white charcoal fixed">\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
var options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-65786969.js",
      css: ["/./_app/assets/start-a8cd1609.css"],
      js: ["/./_app/start-65786969.js", "/./_app/chunks/vendor-85917fb9.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error22) => String(error22),
    handle_error: (error22) => {
      console.error(error22.stack);
      error22.stack = options.get_stack(error22);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
var d = decodeURIComponent;
var empty = () => ({});
var manifest = {
  assets: [{"file": "apple-icon-180.png", "size": 5234, "type": "image/png"}, {"file": "apple-splash-1125-2436.jpg", "size": 48897, "type": "image/jpeg"}, {"file": "apple-splash-1136-640.jpg", "size": 17398, "type": "image/jpeg"}, {"file": "apple-splash-1170-2532.jpg", "size": 51811, "type": "image/jpeg"}, {"file": "apple-splash-1242-2208.jpg", "size": 52599, "type": "image/jpeg"}, {"file": "apple-splash-1242-2688.jpg", "size": 56170, "type": "image/jpeg"}, {"file": "apple-splash-1284-2778.jpg", "size": 58403, "type": "image/jpeg"}, {"file": "apple-splash-1334-750.jpg", "size": 21159, "type": "image/jpeg"}, {"file": "apple-splash-1536-2048.jpg", "size": 63142, "type": "image/jpeg"}, {"file": "apple-splash-1620-2160.jpg", "size": 67883, "type": "image/jpeg"}, {"file": "apple-splash-1668-2224.jpg", "size": 70051, "type": "image/jpeg"}, {"file": "apple-splash-1668-2388.jpg", "size": 72176, "type": "image/jpeg"}, {"file": "apple-splash-1792-828.jpg", "size": 23547, "type": "image/jpeg"}, {"file": "apple-splash-2048-1536.jpg", "size": 52834, "type": "image/jpeg"}, {"file": "apple-splash-2048-2732.jpg", "size": 92017, "type": "image/jpeg"}, {"file": "apple-splash-2160-1620.jpg", "size": 56842, "type": "image/jpeg"}, {"file": "apple-splash-2208-1242.jpg", "size": 40976, "type": "image/jpeg"}, {"file": "apple-splash-2224-1668.jpg", "size": 59104, "type": "image/jpeg"}, {"file": "apple-splash-2388-1668.jpg", "size": 59760, "type": "image/jpeg"}, {"file": "apple-splash-2436-1125.jpg", "size": 35559, "type": "image/jpeg"}, {"file": "apple-splash-2532-1170.jpg", "size": 38062, "type": "image/jpeg"}, {"file": "apple-splash-2688-1242.jpg", "size": 41567, "type": "image/jpeg"}, {"file": "apple-splash-2732-2048.jpg", "size": 78153, "type": "image/jpeg"}, {"file": "apple-splash-2778-1284.jpg", "size": 43582, "type": "image/jpeg"}, {"file": "apple-splash-640-1136.jpg", "size": 23426, "type": "image/jpeg"}, {"file": "apple-splash-750-1334.jpg", "size": 28014, "type": "image/jpeg"}, {"file": "apple-splash-828-1792.jpg", "size": 33344, "type": "image/jpeg"}, {"file": "favicon.ico", "size": 1150, "type": "image/vnd.microsoft.icon"}, {"file": "manifest.webmanifest", "size": 440, "type": "application/manifest+json"}, {"file": "pwa-192x192.png", "size": 5537, "type": "image/png"}, {"file": "pwa-512x512.png", "size": 18707, "type": "image/png"}, {"file": "robots.txt", "size": 67, "type": "text/plain"}, {"file": "svelte-welcome.png", "size": 360807, "type": "image/png"}, {"file": "svelte-welcome.webp", "size": 115470, "type": "image/webp"}],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/about\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/todos\.json$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return index_json;
      })
    },
    {
      type: "page",
      pattern: /^\/todos\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/todos/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/todos\/([^/]+?)\.json$/,
      params: (m) => ({uid: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _uid__json;
      })
    }
  ]
};
var get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({request, render: render2}) => render2(request))
});
var module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error2;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index$1;
  }),
  "src/routes/about.svelte": () => Promise.resolve().then(function() {
    return about;
  }),
  "src/routes/todos/index.svelte": () => Promise.resolve().then(function() {
    return index;
  })
};
var metadata_lookup = {"src/routes/__layout.svelte": {"entry": "/./_app/pages/__layout.svelte-41f1f284.js", "css": ["/./_app/assets/pages/__layout.svelte-b4155049.css"], "js": ["/./_app/pages/__layout.svelte-41f1f284.js", "/./_app/chunks/vendor-85917fb9.js"], "styles": null}, ".svelte-kit/build/components/error.svelte": {"entry": "/./_app/error.svelte-687a14b6.js", "css": [], "js": ["/./_app/error.svelte-687a14b6.js", "/./_app/chunks/vendor-85917fb9.js"], "styles": null}, "src/routes/index.svelte": {"entry": "/./_app/pages/index.svelte-479abca8.js", "css": ["/./_app/assets/pages/index.svelte-80628c9a.css"], "js": ["/./_app/pages/index.svelte-479abca8.js", "/./_app/chunks/vendor-85917fb9.js"], "styles": null}, "src/routes/about.svelte": {"entry": "/./_app/pages/about.svelte-face9425.js", "css": ["/./_app/assets/pages/about.svelte-4db5be0d.css"], "js": ["/./_app/pages/about.svelte-face9425.js", "/./_app/chunks/vendor-85917fb9.js"], "styles": null}, "src/routes/todos/index.svelte": {"entry": "/./_app/pages/todos/index.svelte-b6a2fc46.js", "css": ["/./_app/assets/pages/todos/index.svelte-ef0435f2.css"], "js": ["/./_app/pages/todos/index.svelte-b6a2fc46.js", "/./_app/chunks/vendor-85917fb9.js"], "styles": null}};
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({paths: {"base": "", "assets": "/."}});
function render(request, {
  prerender: prerender2
} = {}) {
  const host = request.headers["host"];
  return respond({...request, host}, options, {prerender: prerender2});
}
var base = "https://api.svelte.dev";
async function api(request, resource, data) {
  if (!request.locals.userid) {
    return {status: 401};
  }
  const res = await fetch(`${base}/${resource}`, {
    method: request.method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
  if (res.ok && request.method !== "GET" && request.headers.accept !== "application/json") {
    return {
      status: 303,
      headers: {
        location: "/todos"
      }
    };
  }
  return {
    status: res.status,
    body: await res.json()
  };
}
var get = async (request) => {
  const response = await api(request, `todos/${request.locals.userid}`);
  if (response.status === 404) {
    return {body: []};
  }
  return response;
};
var post = async (request) => {
  const response = await api(request, `todos/${request.locals.userid}`, {
    text: request.body.get("text")
  });
  return response;
};
var index_json = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get,
  post
});
var patch = async (request) => {
  return api(request, `todos/${request.locals.userid}/${request.params.uid}`, {
    text: request.body.get("text"),
    done: request.body.has("done") ? !!request.body.get("done") : void 0
  });
};
var del = async (request) => {
  return api(request, `todos/${request.locals.userid}/${request.params.uid}`);
};
var _uid__json = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  patch,
  del
});
var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var browser = false;
var dev = false;
var css$4 = {
  code: ".pwa-toast.svelte-1q69697.svelte-1q69697{position:fixed;right:0;bottom:0;margin:16px;padding:12px;border:1px solid #8885;border-radius:4px;z-index:1;text-align:left;background-color:aqua;box-shadow:3px 4px 5px 0px #8885}.pwa-toast.svelte-1q69697 .message.svelte-1q69697{margin-bottom:8px}.pwa-toast.svelte-1q69697 button.svelte-1q69697{border:1px solid #8885;outline:none;margin-right:5px;border-radius:2px;padding:3px 10px}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { dev, browser } from '$app/env';\\nimport { Workbox, messageSW } from 'workbox-window';\\nlet wb;\\nlet registration;\\nlet offlineReady = false;\\nlet needRefresh = false;\\nfunction showSkipWaitingPrompt(event) {\\n    // \\\\\`event.wasWaitingBeforeRegister\\\\\` will be false if this is\\n    // the first time the updated service worker is waiting.\\n    // When \\\\\`event.wasWaitingBeforeRegister\\\\\` is true, a previously\\n    // updated service worker is still waiting.\\n    // You may want to customize the UI prompt accordingly.\\n    // Assumes your app has some sort of prompt UI element\\n    // that a user can either accept or reject.\\n    needRefresh = true;\\n}\\nfunction updateServiceWorker() {\\n    // Assuming the user accepted the update, set up a listener\\n    // that will reload the page as soon as the previously waiting\\n    // service worker has taken control.\\n    if (wb) {\\n        wb.addEventListener('controlling', (event) => {\\n            if (event.isUpdate)\\n                window.location.reload();\\n        });\\n    }\\n    if (registration && registration.waiting) {\\n        // Send a message to the waiting service worker,\\n        // instructing it to activate.\\n        // Note: for this to work, you have to add a message\\n        // listener in your service worker. See below.\\n        messageSW(registration.waiting, { type: 'SKIP_WAITING' }).then(() => {\\n            // console.log(\\"NOTIFIED SKIP_WAITING\\");\\n        }).catch(e => {\\n            console.error(\\"NOTIFIED SKIP_WAITING WITH ERROR\\", e);\\n        });\\n    }\\n}\\nfunction close() {\\n    offlineReady = false;\\n    needRefresh = false;\\n}\\nif (!dev && browser) {\\n    if ('serviceWorker' in navigator) {\\n        wb = new Workbox('/service-worker.js', { scope: '/' });\\n        wb.addEventListener('activated', (event) => {\\n            // this will only controls the offline request.\\n            // event.isUpdate will be true if another version of the service\\n            // worker was controlling the page when this version was registered.\\n            if (!event.isUpdate) {\\n                offlineReady = true;\\n            }\\n        });\\n        // Add an event listener to detect when the registered\\n        // service worker has installed but is waiting to activate.\\n        wb.addEventListener('waiting', showSkipWaitingPrompt);\\n        // eslint-disable-next-line\\n        // @ts-ignore\\n        wb.addEventListener('externalwaiting', showSkipWaitingPrompt);\\n        // register the service worker\\n        wb.register({ immediate: true }).then(r => registration = r).catch(e => {\\n            console.error(\\"cannot register service worker\\", e);\\n        });\\n    }\\n    else {\\n        console.warn('Service workers are not supported.');\\n    }\\n}\\n$: toast = offlineReady || needRefresh;\\n</script>\\n\\n{#if toast}\\n  <div\\n      class=\\"pwa-toast z-max\\"\\n      role=\\"alert\\"\\n  >\\n    <div class=\\"message\\">\\n      {#if offlineReady}\\n      <span>\\n        App ready to work offline\\n      </span>\\n      {:else}\\n      <span>\\n        New content available, click on reload button to update.\\n      </span>\\n      {/if}\\n    </div>\\n    {#if needRefresh}\\n    <button on:click={updateServiceWorker}>\\n      Reload\\n    </button>\\n    {/if}\\n    <button on:click={close}>\\n      Close\\n    </button>\\n  </div>\\n{/if}\\n\\n<style>\\n    .pwa-toast {\\n        position: fixed;\\n        right: 0;\\n        bottom: 0;\\n        margin: 16px;\\n        padding: 12px;\\n        border: 1px solid #8885;\\n        border-radius: 4px;\\n        z-index: 1;\\n        text-align: left;\\n        background-color: aqua;\\n        box-shadow: 3px 4px 5px 0px #8885;\\n    }\\n    .pwa-toast .message {\\n        margin-bottom: 8px;\\n    }\\n    .pwa-toast button {\\n        border: 1px solid #8885;\\n        outline: none;\\n        margin-right: 5px;\\n        border-radius: 2px;\\n        padding: 3px 10px;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAmGI,UAAU,8BAAC,CAAC,AACR,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAAI,CAChB,gBAAgB,CAAE,IAAI,CACtB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,AACrC,CAAC,AACD,yBAAU,CAAC,QAAQ,eAAC,CAAC,AACjB,aAAa,CAAE,GAAG,AACtB,CAAC,AACD,yBAAU,CAAC,MAAM,eAAC,CAAC,AACf,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,GAAG,CACjB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,GAAG,CAAC,IAAI,AACrB,CAAC"}`
};
var ReloadPrompt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toast;
  let needRefresh = false;
  $$result.css.add(css$4);
  toast = needRefresh;
  return `${toast ? `<div class="${"pwa-toast z-max svelte-1q69697"}" role="${"alert"}"><div class="${"message svelte-1q69697"}">${`<span>New content available, click on reload button to update.
      </span>`}</div>
    ${``}
    <button class="${"svelte-1q69697"}">Close
    </button></div>` : ``}`;
});
var css$3 = {
  code: "body{margin:0;padding:0}",
  map: `{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Header from '$lib/Header/index.svelte';\\nimport ReloadPrompt from '$lib/ReloadPrompt/index.svelte';\\n</script>\\n\\n<svelte:head>\\n\\t<link rel=\\"manifest\\" href=\\"/manifest.webmanifest\\" />\\n\\t<link rel=\\"apple-touch-icon\\" href=\\"/apple-icon-180.png\\" />\\n\\n\\t<meta\\n\\t\\tname=\\"description\\"\\n\\t\\tcontent=\\"This is a Svelte-Kit PWA skeleton.\\"\\n\\t/>\\n\\t<meta name=\\"apple-mobile-web-app-capable\\" content=\\"yes\\" />\\n\\t<!-- <link rel=\\"icon\\" href=\\"/favicon.svg\\" type=\\"image/svg+xml\\"> -->\\n\\t<link rel=\\"apple-touch-icon\\" href=\\"/pwa-192x192.png\\" />\\n\\t<!-- <link rel=\\"mask-icon\\" href=\\"/safari-pinned-tab.svg\\" color=\\"#00aba9\\"> -->\\n\\t<meta name=\\"msapplication-TileColor\\" content=\\"#00aba9\\" />\\n\\t<meta name=\\"theme-color\\" content=\\"#ffffff\\" />\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2048-2732.jpg\\"\\n\\t\\tmedia=\\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2732-2048.jpg\\"\\n\\t\\tmedia=\\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1668-2388.jpg\\"\\n\\t\\tmedia=\\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2388-1668.jpg\\"\\n\\t\\tmedia=\\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1536-2048.jpg\\"\\n\\t\\tmedia=\\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2048-1536.jpg\\"\\n\\t\\tmedia=\\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1668-2224.jpg\\"\\n\\t\\tmedia=\\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2224-1668.jpg\\"\\n\\t\\tmedia=\\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1620-2160.jpg\\"\\n\\t\\tmedia=\\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2160-1620.jpg\\"\\n\\t\\tmedia=\\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1284-2778.jpg\\"\\n\\t\\tmedia=\\"(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2778-1284.jpg\\"\\n\\t\\tmedia=\\"(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1170-2532.jpg\\"\\n\\t\\tmedia=\\"(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2532-1170.jpg\\"\\n\\t\\tmedia=\\"(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1125-2436.jpg\\"\\n\\t\\tmedia=\\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2436-1125.jpg\\"\\n\\t\\tmedia=\\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1242-2688.jpg\\"\\n\\t\\tmedia=\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2688-1242.jpg\\"\\n\\t\\tmedia=\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-828-1792.jpg\\"\\n\\t\\tmedia=\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1792-828.jpg\\"\\n\\t\\tmedia=\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1242-2208.jpg\\"\\n\\t\\tmedia=\\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2208-1242.jpg\\"\\n\\t\\tmedia=\\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-750-1334.jpg\\"\\n\\t\\tmedia=\\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1334-750.jpg\\"\\n\\t\\tmedia=\\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-640-1136.jpg\\"\\n\\t\\tmedia=\\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1136-640.jpg\\"\\n\\t\\tmedia=\\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n</svelte:head>\\n\\n<Header />\\n\\n<main>\\n\\t<slot />\\n</main>\\n\\n<footer>\\n\\t<p>Visit <a href=\\"https://kit.svelte.dev\\">kit.svelte.dev</a> to learn SvelteKit.</p>\\n</footer>\\n\\n<ReloadPrompt />\\n\\n<style>\\n\\t:global(body) {\\n\\t\\tmargin:0;\\n\\t\\tpadding:0;\\n\\t}\\n</style>"],"names":[],"mappings":"AAmKS,IAAI,AAAE,CAAC,AACd,OAAO,CAAC,CACR,QAAQ,CAAC,AACV,CAAC"}`
};
var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `${$$result.head += `<link rel="${"manifest"}" href="${"/manifest.webmanifest"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-icon"}" href="${"/apple-icon-180.png"}" data-svelte="svelte-p9yk9x"><meta name="${"description"}" content="${"This is a Svelte-Kit PWA skeleton."}" data-svelte="svelte-p9yk9x"><meta name="${"apple-mobile-web-app-capable"}" content="${"yes"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-icon"}" href="${"/pwa-192x192.png"}" data-svelte="svelte-p9yk9x"><meta name="${"msapplication-TileColor"}" content="${"#00aba9"}" data-svelte="svelte-p9yk9x"><meta name="${"theme-color"}" content="${"#ffffff"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2048-2732.jpg"}" media="${"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2732-2048.jpg"}" media="${"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1668-2388.jpg"}" media="${"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2388-1668.jpg"}" media="${"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1536-2048.jpg"}" media="${"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2048-1536.jpg"}" media="${"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1668-2224.jpg"}" media="${"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2224-1668.jpg"}" media="${"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1620-2160.jpg"}" media="${"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2160-1620.jpg"}" media="${"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1284-2778.jpg"}" media="${"(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2778-1284.jpg"}" media="${"(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1170-2532.jpg"}" media="${"(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2532-1170.jpg"}" media="${"(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1125-2436.jpg"}" media="${"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2436-1125.jpg"}" media="${"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1242-2688.jpg"}" media="${"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2688-1242.jpg"}" media="${"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-828-1792.jpg"}" media="${"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1792-828.jpg"}" media="${"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1242-2208.jpg"}" media="${"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2208-1242.jpg"}" media="${"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-750-1334.jpg"}" media="${"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1334-750.jpg"}" media="${"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-640-1136.jpg"}" media="${"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" data-svelte="svelte-p9yk9x"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1136-640.jpg"}" media="${"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" data-svelte="svelte-p9yk9x">`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>

<footer><p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to learn SvelteKit.</p></footer>

${validate_component(ReloadPrompt, "ReloadPrompt").$$render($$result, {}, {}, {})}`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
function load$1({error: error22, status}) {
  return {props: {error: error22, status}};
}
var Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {status} = $$props;
  let {error: error22} = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error22 !== void 0)
    $$bindings.error(error22);
  return `<h1>${escape2(status)}</h1>

<p>${escape2(error22.message)}</p>


${error22.stack ? `<pre>${escape2(error22.stack)}</pre>` : ``}`;
});
var error2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Error$1,
  load: load$1
});
var css$2 = {
  code: "ul.svelte-10l2cwp.svelte-10l2cwp{list-style:none;margin:0;padding:0;display:flex;gap:var(--gap);width:100%;height:100%;min-width:0;transform:translateY(0deg);backface-visibility:hidden}ul.svelte-10l2cwp li.svelte-10l2cwp{transform:translateY(0deg);backface-visibility:hidden;flex:1 0 var(--width);width:var(--width);max-width:100%;height:100%;position:relative;background-image:linear-gradient(\n      to top right,\n      gainsboro,\n			whitesmoke\n    )}section.svelte-10l2cwp.svelte-10l2cwp{pointer-events:fill;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;height:100vh;overflow-y:scroll}ul.svelte-10l2cwp li.svelte-10l2cwp:before{content:attr(id);position:absolute;background:rgba(255,255,255, 0.82);padding:1rem;z-index:1}.active.svelte-10l2cwp.svelte-10l2cwp{opacity:1 }@media all and (orientation:portrait){@media screen and (min-width:30em){.portrait-bottom-0-ns.svelte-10l2cwp.svelte-10l2cwp{bottom:0}}@media screen and (min-width:30em) and (max-width:60em){.portrait-bottom-0-m.svelte-10l2cwp.svelte-10l2cwp{bottom:0}}@media screen and (min-width:60em){.portrait-bottom-0-l.svelte-10l2cwp.svelte-10l2cwp{bottom:0}}}@media all and (orientation:landscape){@media screen and (min-width:30em){}@media screen and (min-width:30em) and (max-width:60em){}@media screen and (min-width:60em){.landscape-top-0-l.svelte-10l2cwp.svelte-10l2cwp{top:0}.landscape-dn-l.svelte-10l2cwp.svelte-10l2cwp{display:none}.landscape-flex-l.svelte-10l2cwp.svelte-10l2cwp{display:flex}}}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script context=\\"module\\" lang=\\"ts\\">// PWA from: https://github.com/FunMiles/SveltekitPWA\\nexport const prerender = true;\\n</script>\\n\\n<svelte:options immutable={true}/>\\n\\n<script>\\nimport {slidy} from '@slidy/core';\\n\\nlet items = [],\\n\\t\\twidth = '100%',\\n\\t\\tgap = 0,\\n\\t\\tindex = 0,\\n\\t\\tlength = 3,\\n\\t\\tscrollPos = 0,\\n\\t\\ti = length,\\n\\t\\ttitle = 'Slidecore';\\n</script>\\n\\n<!-- Main navigation  -->\\n<nav class=\\"bg-blue fixed z-1 w-100\\ntop-0 landscape-top-0-ns landscape-top-0-m landscape-top-0-l\\nflex tc debug\\">\\n  <div class=\\"\\n\\tw-100 flex justify-between\\n  f5 f4-ns f3-m f3-l lh-copy\\n  pa2 measure\\n  pa4-ns measure-ns\\n  pa2-m measure-m\\n  pa0-l measure-wide-l mr-auto ml-auto\\">\\n\\n    <div class=\\"w-50 w-50-ns w-50-m w-20-l\\n    bg-light-blue pv3 h3 f5 f4-ns fs-m f5-l tl\\">i[{index}],{Math.trunc(scrollPos)}px</div>\\n\\n    <!-- ONLY: large & landscape -->\\n    <div class=\\"w-60-l bg-gold justify-between dn landscape-flex-l\\">\\n\\t\\t{#if length > 0}\\n\\t\\t\\t{#each { length } as dot, i}\\n\\t\\t\\t<button style=\\"width:calc(100% / {length})\\" class=\\"w-20 pv3 h3 f5 f4-ns fs-m f5-l white o-60 bg-transparent\\" on:click={() => (index = i)} class:active={i === index}>{i}</button><!-- bg-gold -->\\n\\t\\t\\t{/each}\\n\\t\\t{/if}\\n\\t\\t</div>\\n\\n\\n    <div class=\\"w-50 w-50-ns w-50-m w-20-l\\n    bg-light-blue pv3 h3 f5 f4-ns fs-m f5-l tr flex items-center justify-end\\">\\n\\t\\t\\t<div class=\\"flex justify-between\\">\\n\\t\\t\\t\\t<span>\u{1F1EE}\u{1F1F9}&thinsp;<span class='dib dib-ns dn-m dn-l'>It&emsp;</span></span>\\n\\t\\t\\t\\t<span class='dn dn-ns dib-m dib-l'>Italiano&emsp;</span><span>\u{1F1EC}\u{1F1E7}&thinsp;<span class='dib dib-ns dn-m dn-l'>En</span></span>\\n\\t\\t\\t\\t<span class='dn dn-ns dib-m dib-l'>English</span>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n  </div>\\n</nav><!-- Main navigation  -->\\n\\n<!-- Internal page navigation  -->\\n<!-- EXCEPT large & landscape -->\\n<nav class=\\"bg-red fixed z-1 w-100\\nbottom-0 portrait-bottom-0-ns portrait-bottom-0-m portrait-bottom-0-l\\nlandscape-dn-l flex\\ntc debug\\">\\n  <div class=\\"w-100 flex justify-between\\n  f5 f4-ns f3-m f3-l lh-copy\\n  pa2 measure\\n  pa4-ns measure-ns\\n  pa2-m measure-m\\n  pa0-l measure-wide-l mr-auto ml-auto\\">\\n\\n\\t\\t{#if length > 0}\\n\\t\\t\\t{#each { length } as dot, i}\\n\\t\\t\\t<button style=\\"width:calc(100% / {length})\\" class=\\"w-20 pv3 h3 f5 f4-ns fs-m f5-l white o-60 bg-transparent\\" on:click={() => (index = i)} class:active={i === index}>{i}</button><!-- bg-gold -->\\n\\t\\t\\t{/each}\\n\\t\\t{/if}\\n\\n  </div>\\n</nav><!-- /Internal page navigation  -->\\n\\n\\n\\n<div style=\\"--gap: {gap}px; --width: {width}\\" tab-index=\\"0\\">\\n\\n\\t<ul\\n\\t\\tuse:slidy={{\\n\\t\\tindex,\\n\\t\\tlength,\\n\\t\\taxis: 'x',\\n\\t\\talign: 'middle',\\n\\t\\tduration: 1600,\\n\\t\\tintersecting: true,\\n\\t\\tclamp: true,\\n\\t\\tsnap: true,\\n\\t\\tgravity: 1.3,\\n\\t\\tindexer: (x) => (index = x),\\n\\t\\tscroller: (p) => (scrollPos = p)\\n\\t}}>\\n\\n\\n\\n<li id='0'>\\n<section>\\n<div\\nstyle=\\"max-width:100vw\\"\\nclass=\\"w-100 pv5\\">\\n<article class=\\"pb6\\nf5 f4-ns f3-m f3-l lh-copy\\npa2 measure\\npa4-ns measure-ns\\npa2-m measure-m\\npa0-l measure-wide-l mr-auto ml-auto\\">\\n<h1 class=\\"\\">{title}</h1>\\n<p>Hummus falafel bowl sriracha pecans miso turmeric glazed aubergine fig arugula cashew salad seeds walnut mushroom tart lemon sweet potato black bean burrito green pepper second course lemon red lentil soup spicy mangos guacamole overflowing mocha chocolate frosted gingerbread bites chai tea sweet potato mediterranean vegetables red amazon pepper grapefruit crunchy. One bowl chilies peaches ginger tofu shiitake mushrooms banana bread citrusy shallots fall roasted brussel sprouts chili peanut butter jalape\xF1o cinnamon toast cilantro blackberries pumpkin main course hazelnut shiitake spring matcha pineapple salsa. Heat mint lemonade zest grenadillo double dark chocolate burritos blood orange smash apricot farro platter tasty tabasco pepper cookies plums Caribbean red habanero tempeh delightful blueberry scones. </p>\\n<p>Lemon lime minty cherry bomb pepper roasted peanuts simmer pomegranate pinch of yum ginger lemongrass agave green tea maple orange tempeh alfalfa sprouts cherry bomb spiced peppermint blast parsley almond milk kung pao pepper pine nuts enchiladas asian pear. Lavender lemonade red lentil curry cilantro lime vinaigrette four-layer mint lime taco salsa hot naga viper cinnamon crispy chia seeds lemongrass green papaya salad balsamic vinaigrette leek green grapes sesame soba noodles salted hearts of palm crumbled lentils vine tomatoes Thai sun pepper entree. </p>\\n</article>\\n</div>\\n</section>\\n\\n</li>\\n\\n<li id='1'>\\n\\t<section>\\n\\t<div\\n\\tstyle=\\"max-width:100vw\\"\\n\\tclass=\\"w-100 pv5\\">\\n\\t<article class=\\"pb6\\n\\tf5 f4-ns f3-m f3-l lh-copy\\n\\tpa2 measure\\n\\tpa4-ns measure-ns\\n\\tpa2-m measure-m\\n\\tpa0-l measure-wide-l mr-auto ml-auto\\">\\n\\t<h1 class=\\"\\">{title}</h1>\\n\\t<p>Hummus falafel bowl sriracha pecans miso turmeric glazed aubergine fig arugula cashew salad seeds walnut mushroom tart lemon sweet potato black bean burrito green pepper second course lemon red lentil soup spicy mangos guacamole overflowing mocha chocolate frosted gingerbread bites chai tea sweet potato mediterranean vegetables red amazon pepper grapefruit crunchy. One bowl chilies peaches ginger tofu shiitake mushrooms banana bread citrusy shallots fall roasted brussel sprouts chili peanut butter jalape\xF1o cinnamon toast cilantro blackberries pumpkin main course hazelnut shiitake spring matcha pineapple salsa. Heat mint lemonade zest grenadillo double dark chocolate burritos blood orange smash apricot farro platter tasty tabasco pepper cookies plums Caribbean red habanero tempeh delightful blueberry scones. </p>\\n\\t<p>Lemon lime minty cherry bomb pepper roasted peanuts simmer pomegranate pinch of yum ginger lemongrass agave green tea maple orange tempeh alfalfa sprouts cherry bomb spiced peppermint blast parsley almond milk kung pao pepper pine nuts enchiladas asian pear. Lavender lemonade red lentil curry cilantro lime vinaigrette four-layer mint lime taco salsa hot naga viper cinnamon crispy chia seeds lemongrass green papaya salad balsamic vinaigrette leek green grapes sesame soba noodles salted hearts of palm crumbled lentils vine tomatoes Thai sun pepper entree. </p>\\n\\t</article>\\n\\t</div>\\n\\t</section>\\n\\n\\t</li>\\n\\n\\t<li id='2'>\\n\\t\\t<section>\\n\\t\\t<div\\n\\t\\tstyle=\\"max-width:100vw\\"\\n\\t\\tclass=\\"w-100 pv5\\">\\n\\t\\t<article class=\\"pb6\\n\\t\\tf5 f4-ns f3-m f3-l lh-copy\\n\\t\\tpa2 measure\\n\\t\\tpa4-ns measure-ns\\n\\t\\tpa2-m measure-m\\n\\t\\tpa0-l measure-wide-l mr-auto ml-auto\\">\\n\\t\\t<h1 class=\\"\\">{title}</h1>\\n\\t\\t<p>Hummus falafel bowl sriracha pecans miso turmeric glazed aubergine fig arugula cashew salad seeds walnut mushroom tart lemon sweet potato black bean burrito green pepper second course lemon red lentil soup spicy mangos guacamole overflowing mocha chocolate frosted gingerbread bites chai tea sweet potato mediterranean vegetables red amazon pepper grapefruit crunchy. One bowl chilies peaches ginger tofu shiitake mushrooms banana bread citrusy shallots fall roasted brussel sprouts chili peanut butter jalape\xF1o cinnamon toast cilantro blackberries pumpkin main course hazelnut shiitake spring matcha pineapple salsa. Heat mint lemonade zest grenadillo double dark chocolate burritos blood orange smash apricot farro platter tasty tabasco pepper cookies plums Caribbean red habanero tempeh delightful blueberry scones. </p>\\n\\t\\t<p>Lemon lime minty cherry bomb pepper roasted peanuts simmer pomegranate pinch of yum ginger lemongrass agave green tea maple orange tempeh alfalfa sprouts cherry bomb spiced peppermint blast parsley almond milk kung pao pepper pine nuts enchiladas asian pear. Lavender lemonade red lentil curry cilantro lime vinaigrette four-layer mint lime taco salsa hot naga viper cinnamon crispy chia seeds lemongrass green papaya salad balsamic vinaigrette leek green grapes sesame soba noodles salted hearts of palm crumbled lentils vine tomatoes Thai sun pepper entree. </p>\\n\\t\\t</article>\\n\\t\\t</div>\\n\\t\\t</section>\\n\\n\\t\\t</li>\\n</ul>\\n\\n</div>\\n\\n\\n\\n\\n\\n\\n\\n<style>\\n\\nul {\\n\\t\\tlist-style: none;\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t\\tdisplay: flex;\\n\\t\\tgap: var(--gap);\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\tmin-width: 0;\\n\\n\\t\\t/* DEBUG: \\"slidy/core\\" \\"sensitivity\\" */\\n\\t\\ttransform: translateY(0deg);\\n\\t\\tbackface-visibility: hidden;\\n\\t}\\n\\n\\tul li {\\n\\n\\t\\t/* DEBUG: \\"slidy/core\\" \\"sensitivity\\" */\\n\\t\\ttransform: translateY(0deg);\\n\\t\\tbackface-visibility: hidden;\\n\\n\\t\\tflex: 1 0 var(--width);\\n\\t\\twidth: var(--width);\\n\\t\\tmax-width: 100%;\\n\\t\\theight: 100%;\\n\\t\\tposition: relative;\\n\\t\\tbackground-image:\\n    linear-gradient(\\n      to top right,\\n      gainsboro,\\n\\t\\t\\twhitesmoke\\n    );\\n\\t}\\n\\n\\t/* https://css-tricks.com/almanac/properties/s/scroll-behavior/ */\\n\\tsection {\\n\\t\\tpointer-events: fill;\\n\\n\\t\\tscroll-behavior: smooth;\\n\\t\\t-webkit-overflow-scrolling: touch;\\n\\n\\t\\theight: 100vh;\\n\\t\\toverflow-y: scroll;\\n\\t}\\n\\n\\tul li:before {\\n\\t\\tcontent: attr(id);\\n\\t\\tposition: absolute;\\n\\t\\tbackground: rgba(255,255,255, 0.82);\\n\\t\\tpadding: 1rem;\\n\\t\\tz-index: 1;\\n\\t}\\n\\n\\t.active { opacity:1 }\\n\\n/********** Slidecore ***********/\\n\\n@media all and (orientation:portrait) {\\n\\n@media screen and (min-width:30em) {\\n\\t.portrait-bottom-0-ns {\\n\\t\\tbottom: 0;\\n\\t}\\n}\\n@media screen and (min-width:30em) and (max-width:60em) {\\n\\t.portrait-bottom-0-m {\\n\\t\\tbottom: 0;\\n\\t}\\n}\\n@media screen and (min-width:60em) {\\n\\t.portrait-bottom-0-l {\\n\\t\\tbottom: 0;\\n\\t}\\n}\\n\\n}\\n\\n\\n@media all and (orientation:landscape) {\\n\\n@media screen and (min-width:30em) {\\n}\\n\\n@media screen and (min-width:30em) and (max-width:60em) {\\n}\\n\\n@media screen and (min-width:60em) {\\n\\t.landscape-top-0-l {\\n\\t\\ttop: 0;\\n\\t}\\n\\t.landscape-dn-l {\\n\\t\\tdisplay: none;\\n\\t}\\n\\t.landscape-flex-l {\\n\\t\\tdisplay: flex;\\n\\t}\\n}\\n\\n}\\n</style>\\n<svelte:head>\\n\\t<link rel='stylesheet' href='https://instantwebapp.com/css/tachyon.shower.css'>\\n</svelte:head>\\n<!-- <pre class=\\"absolute fixed z-max top-0 debug\\">\\n\\t<nav>\\n\\t\\t<button on:click={() => index--}>\u2190</button>\\n\\t\\t<button on:click={() => index++}>\u2192</button>\\n\\t</nav>\\n</pre> -->"],"names":[],"mappings":"AAyKA,EAAE,8BAAC,CAAC,AACF,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,KAAK,CAAC,CACf,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,CAAC,CAGZ,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,mBAAmB,CAAE,MAAM,AAC5B,CAAC,AAED,iBAAE,CAAC,EAAE,eAAC,CAAC,AAGN,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,mBAAmB,CAAE,MAAM,CAE3B,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,OAAO,CAAC,CACtB,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CACd;MACE,EAAE,CAAC,GAAG,CAAC,KAAK,CAAC;MACb,SAAS,CAAC;GACb,UAAU;KACR,AACJ,CAAC,AAGD,OAAO,8BAAC,CAAC,AACR,cAAc,CAAE,IAAI,CAEpB,eAAe,CAAE,MAAM,CACvB,0BAA0B,CAAE,KAAK,CAEjC,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,MAAM,AACnB,CAAC,AAED,iBAAE,CAAC,iBAAE,OAAO,AAAC,CAAC,AACb,OAAO,CAAE,KAAK,EAAE,CAAC,CACjB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACnC,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,CAAC,AACX,CAAC,AAED,OAAO,8BAAC,CAAC,AAAC,QAAQ,CAAC,CAAC,CAAC,AAItB,OAAO,GAAG,CAAC,GAAG,CAAC,aAAa,QAAQ,CAAC,AAAC,CAAC,AAEvC,OAAO,MAAM,CAAC,GAAG,CAAC,WAAW,IAAI,CAAC,AAAC,CAAC,AACnC,qBAAqB,8BAAC,CAAC,AACtB,MAAM,CAAE,CAAC,AACV,CAAC,AACF,CAAC,AACD,OAAO,MAAM,CAAC,GAAG,CAAC,WAAW,IAAI,CAAC,CAAC,GAAG,CAAC,WAAW,IAAI,CAAC,AAAC,CAAC,AACxD,oBAAoB,8BAAC,CAAC,AACrB,MAAM,CAAE,CAAC,AACV,CAAC,AACF,CAAC,AACD,OAAO,MAAM,CAAC,GAAG,CAAC,WAAW,IAAI,CAAC,AAAC,CAAC,AACnC,oBAAoB,8BAAC,CAAC,AACrB,MAAM,CAAE,CAAC,AACV,CAAC,AACF,CAAC,AAED,CAAC,AAGD,OAAO,GAAG,CAAC,GAAG,CAAC,aAAa,SAAS,CAAC,AAAC,CAAC,AAExC,OAAO,MAAM,CAAC,GAAG,CAAC,WAAW,IAAI,CAAC,AAAC,CAAC,AACpC,CAAC,AAED,OAAO,MAAM,CAAC,GAAG,CAAC,WAAW,IAAI,CAAC,CAAC,GAAG,CAAC,WAAW,IAAI,CAAC,AAAC,CAAC,AACzD,CAAC,AAED,OAAO,MAAM,CAAC,GAAG,CAAC,WAAW,IAAI,CAAC,AAAC,CAAC,AACnC,kBAAkB,8BAAC,CAAC,AACnB,GAAG,CAAE,CAAC,AACP,CAAC,AACD,eAAe,8BAAC,CAAC,AAChB,OAAO,CAAE,IAAI,AACd,CAAC,AACD,iBAAiB,8BAAC,CAAC,AAClB,OAAO,CAAE,IAAI,AACd,CAAC,AACF,CAAC,AAED,CAAC"}`
};
var prerender$1 = true;
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let width = "100%", gap = 0, index2 = 0, length = 3, scrollPos = 0, title = "Slidecore";
  $$result.css.add(css$2);
  return `




<nav class="${"bg-blue fixed z-1 w-100 top-0 landscape-top-0-ns landscape-top-0-m landscape-top-0-l flex tc debug svelte-10l2cwp"}"><div class="${"w-100 flex justify-between f5 f4-ns f3-m f3-l lh-copy pa2 measure pa4-ns measure-ns pa2-m measure-m pa0-l measure-wide-l mr-auto ml-auto"}"><div class="${"w-50 w-50-ns w-50-m w-20-l bg-light-blue pv3 h3 f5 f4-ns fs-m f5-l tl"}">i[${escape2(index2)}],${escape2(Math.trunc(scrollPos))}px</div>

    
    <div class="${"w-60-l bg-gold justify-between dn landscape-flex-l svelte-10l2cwp"}">${`${each({length}, (dot, i) => {
    return `<button style="${"width:calc(100% / " + escape2(length) + ")"}" class="${[
      "w-20 pv3 h3 f5 f4-ns fs-m f5-l white o-60 bg-transparent svelte-10l2cwp",
      i === index2 ? "active" : ""
    ].join(" ").trim()}">${escape2(i)}</button>`;
  })}`}</div>


    <div class="${"w-50 w-50-ns w-50-m w-20-l bg-light-blue pv3 h3 f5 f4-ns fs-m f5-l tr flex items-center justify-end"}"><div class="${"flex justify-between"}"><span>\u{1F1EE}\u{1F1F9}\u2009<span class="${"dib dib-ns dn-m dn-l"}">It\u2003</span></span>
				<span class="${"dn dn-ns dib-m dib-l"}">Italiano\u2003</span><span>\u{1F1EC}\u{1F1E7}\u2009<span class="${"dib dib-ns dn-m dn-l"}">En</span></span>
				<span class="${"dn dn-ns dib-m dib-l"}">English</span></div></div></div>
</nav>



<nav class="${"bg-red fixed z-1 w-100 bottom-0 portrait-bottom-0-ns portrait-bottom-0-m portrait-bottom-0-l landscape-dn-l flex tc debug svelte-10l2cwp"}"><div class="${"w-100 flex justify-between f5 f4-ns f3-m f3-l lh-copy pa2 measure pa4-ns measure-ns pa2-m measure-m pa0-l measure-wide-l mr-auto ml-auto"}">${`${each({length}, (dot, i) => {
    return `<button style="${"width:calc(100% / " + escape2(length) + ")"}" class="${[
      "w-20 pv3 h3 f5 f4-ns fs-m f5-l white o-60 bg-transparent svelte-10l2cwp",
      i === index2 ? "active" : ""
    ].join(" ").trim()}">${escape2(i)}</button>`;
  })}`}</div>
</nav>



<div style="${"--gap: " + escape2(gap) + "px; --width: " + escape2(width)}" tab-index="${"0"}"><ul class="${"svelte-10l2cwp"}"><li id="${"0"}" class="${"svelte-10l2cwp"}"><section class="${"svelte-10l2cwp"}"><div style="${"max-width:100vw"}" class="${"w-100 pv5"}"><article class="${"pb6 f5 f4-ns f3-m f3-l lh-copy pa2 measure pa4-ns measure-ns pa2-m measure-m pa0-l measure-wide-l mr-auto ml-auto"}"><h1 class="${""}">${escape2(title)}</h1>
<p>Hummus falafel bowl sriracha pecans miso turmeric glazed aubergine fig arugula cashew salad seeds walnut mushroom tart lemon sweet potato black bean burrito green pepper second course lemon red lentil soup spicy mangos guacamole overflowing mocha chocolate frosted gingerbread bites chai tea sweet potato mediterranean vegetables red amazon pepper grapefruit crunchy. One bowl chilies peaches ginger tofu shiitake mushrooms banana bread citrusy shallots fall roasted brussel sprouts chili peanut butter jalape\xF1o cinnamon toast cilantro blackberries pumpkin main course hazelnut shiitake spring matcha pineapple salsa. Heat mint lemonade zest grenadillo double dark chocolate burritos blood orange smash apricot farro platter tasty tabasco pepper cookies plums Caribbean red habanero tempeh delightful blueberry scones. </p>
<p>Lemon lime minty cherry bomb pepper roasted peanuts simmer pomegranate pinch of yum ginger lemongrass agave green tea maple orange tempeh alfalfa sprouts cherry bomb spiced peppermint blast parsley almond milk kung pao pepper pine nuts enchiladas asian pear. Lavender lemonade red lentil curry cilantro lime vinaigrette four-layer mint lime taco salsa hot naga viper cinnamon crispy chia seeds lemongrass green papaya salad balsamic vinaigrette leek green grapes sesame soba noodles salted hearts of palm crumbled lentils vine tomatoes Thai sun pepper entree. </p></article></div></section></li>

<li id="${"1"}" class="${"svelte-10l2cwp"}"><section class="${"svelte-10l2cwp"}"><div style="${"max-width:100vw"}" class="${"w-100 pv5"}"><article class="${"pb6 f5 f4-ns f3-m f3-l lh-copy pa2 measure pa4-ns measure-ns pa2-m measure-m pa0-l measure-wide-l mr-auto ml-auto"}"><h1 class="${""}">${escape2(title)}</h1>
	<p>Hummus falafel bowl sriracha pecans miso turmeric glazed aubergine fig arugula cashew salad seeds walnut mushroom tart lemon sweet potato black bean burrito green pepper second course lemon red lentil soup spicy mangos guacamole overflowing mocha chocolate frosted gingerbread bites chai tea sweet potato mediterranean vegetables red amazon pepper grapefruit crunchy. One bowl chilies peaches ginger tofu shiitake mushrooms banana bread citrusy shallots fall roasted brussel sprouts chili peanut butter jalape\xF1o cinnamon toast cilantro blackberries pumpkin main course hazelnut shiitake spring matcha pineapple salsa. Heat mint lemonade zest grenadillo double dark chocolate burritos blood orange smash apricot farro platter tasty tabasco pepper cookies plums Caribbean red habanero tempeh delightful blueberry scones. </p>
	<p>Lemon lime minty cherry bomb pepper roasted peanuts simmer pomegranate pinch of yum ginger lemongrass agave green tea maple orange tempeh alfalfa sprouts cherry bomb spiced peppermint blast parsley almond milk kung pao pepper pine nuts enchiladas asian pear. Lavender lemonade red lentil curry cilantro lime vinaigrette four-layer mint lime taco salsa hot naga viper cinnamon crispy chia seeds lemongrass green papaya salad balsamic vinaigrette leek green grapes sesame soba noodles salted hearts of palm crumbled lentils vine tomatoes Thai sun pepper entree. </p></article></div></section></li>

	<li id="${"2"}" class="${"svelte-10l2cwp"}"><section class="${"svelte-10l2cwp"}"><div style="${"max-width:100vw"}" class="${"w-100 pv5"}"><article class="${"pb6 f5 f4-ns f3-m f3-l lh-copy pa2 measure pa4-ns measure-ns pa2-m measure-m pa0-l measure-wide-l mr-auto ml-auto"}"><h1 class="${""}">${escape2(title)}</h1>
		<p>Hummus falafel bowl sriracha pecans miso turmeric glazed aubergine fig arugula cashew salad seeds walnut mushroom tart lemon sweet potato black bean burrito green pepper second course lemon red lentil soup spicy mangos guacamole overflowing mocha chocolate frosted gingerbread bites chai tea sweet potato mediterranean vegetables red amazon pepper grapefruit crunchy. One bowl chilies peaches ginger tofu shiitake mushrooms banana bread citrusy shallots fall roasted brussel sprouts chili peanut butter jalape\xF1o cinnamon toast cilantro blackberries pumpkin main course hazelnut shiitake spring matcha pineapple salsa. Heat mint lemonade zest grenadillo double dark chocolate burritos blood orange smash apricot farro platter tasty tabasco pepper cookies plums Caribbean red habanero tempeh delightful blueberry scones. </p>
		<p>Lemon lime minty cherry bomb pepper roasted peanuts simmer pomegranate pinch of yum ginger lemongrass agave green tea maple orange tempeh alfalfa sprouts cherry bomb spiced peppermint blast parsley almond milk kung pao pepper pine nuts enchiladas asian pear. Lavender lemonade red lentil curry cilantro lime vinaigrette four-layer mint lime taco salsa hot naga viper cinnamon crispy chia seeds lemongrass green papaya salad balsamic vinaigrette leek green grapes sesame soba noodles salted hearts of palm crumbled lentils vine tomatoes Thai sun pepper entree. </p></article></div></section></li></ul></div>








${$$result.head += `<link rel="${"stylesheet"}" href="${"https://instantwebapp.com/css/tachyon.shower.css"}" data-svelte="svelte-uylijl">`, ""}
`;
});
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes,
  prerender: prerender$1
});
var css$1 = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: `{"version":3,"file":"about.svelte","sources":["about.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\timport { browser, dev } from '$app/env';\\n\\n\\t// we don't need any JS on this page, though we'll load\\n\\t// it in dev so that we get hot module replacement...\\n\\texport const hydrate = dev;\\n\\n\\t// ...but if the client-side router is already loaded\\n\\t// (i.e. we came here from elsewhere in the app), use it\\n\\texport const router = browser;\\n\\n\\t// since there's no dynamic data here, we can prerender\\n\\t// it so that it gets served as a static asset in prod\\n\\texport const prerender = true;\\n</script>\\n\\n<svelte:head>\\n\\t<title>About</title>\\n</svelte:head>\\n\\n<div class=\\"content\\">\\n\\t<h1>About this app</h1>\\n\\n\\t<p>\\n\\t\\tThis is a <a href=\\"https://kit.svelte.dev\\">SvelteKit</a> app. You can make your own by typing the\\n\\t\\tfollowing into your command line and following the prompts:\\n\\t</p>\\n\\n\\t<!-- TODO lose the @next! -->\\n\\t<pre>npm init svelte@next</pre>\\n\\n\\t<p>\\n\\t\\tThe page you're looking at is purely static HTML, with no client-side interactivity needed.\\n\\t\\tBecause of that, we don't need to load any JavaScript. Try viewing the page's source, or opening\\n\\t\\tthe devtools network panel and reloading.\\n\\t</p>\\n\\n\\t<p>\\n\\t\\tThe <a href=\\"/todos\\">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using\\n\\t\\tit with JavaScript disabled!\\n\\t</p>\\n</div>\\n\\n<style>\\n\\t.content {\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: var(--column-width);\\n\\t\\tmargin: var(--column-margin-top) auto 0 auto;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4CC,QAAQ,cAAC,CAAC,AACT,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,cAAc,CAAC,CAC9B,MAAM,CAAE,IAAI,mBAAmB,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,AAC7C,CAAC"}`
};
var hydrate = dev;
var router = browser;
var prerender = true;
var About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}

<div class="${"content svelte-cf77e8"}"><h1>About this app</h1>

	<p>This is a <a href="${"https://kit.svelte.dev"}">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	
	<pre>npm init svelte@next</pre>

	<p>The page you&#39;re looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don&#39;t need to load any JavaScript. Try viewing the page&#39;s source, or opening
		the devtools network panel and reloading.
	</p>

	<p>The <a href="${"/todos"}">TODOs</a> page illustrates SvelteKit&#39;s data loading and form handling. Try using
		it with JavaScript disabled!
	</p>
</div>`;
});
var about = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": About,
  hydrate,
  router,
  prerender
});
var css = {
  code: `.todos.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto;line-height:1}.new.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{margin:0 0 0.5rem 0}input.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{border:1px solid transparent}input.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd:focus-visible{box-shadow:inset 1px 1px 6px rgba(0, 0, 0, 0.1);border:1px solid #ff3e00 !important;outline:none}.new.svelte-dmxqmd input.svelte-dmxqmd.svelte-dmxqmd{font-size:28px;width:100%;padding:0.5em 1em 0.3em 1em;box-sizing:border-box;background:rgba(255, 255, 255, 0.05);border-radius:8px;text-align:center}.todo.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{display:grid;grid-template-columns:2rem 1fr 2rem;grid-gap:0.5rem;align-items:center;margin:0 0 0.5rem 0;padding:0.5rem;background-color:white;border-radius:8px;filter:drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));transform:translate(-1px, -1px);transition:filter 0.2s, transform 0.2s}.done.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{transform:none;opacity:0.4;filter:drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1))}form.text.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{position:relative;display:flex;align-items:center;flex:1}.todo.svelte-dmxqmd input.svelte-dmxqmd.svelte-dmxqmd{flex:1;padding:0.5em 2em 0.5em 0.8em;border-radius:3px}.todo.svelte-dmxqmd button.svelte-dmxqmd.svelte-dmxqmd{width:2em;height:2em;border:none;background-color:transparent;background-position:50% 50%;background-repeat:no-repeat}button.toggle.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{border:1px solid rgba(0, 0, 0, 0.2);border-radius:50%;box-sizing:border-box;background-size:1em auto}.done.svelte-dmxqmd .toggle.svelte-dmxqmd.svelte-dmxqmd{background-image:url("data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L7.4375 14.5L1.5 8.5909' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}.delete.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5V22H19.5V5H4.5Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5H22' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 5L9.6445 2H14.3885L16 5H8Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E%0A");opacity:0.2}.delete.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd:hover,.delete.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd:focus{transition:opacity 0.2s;opacity:1}.save.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{position:absolute;right:0;opacity:0;background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2H3.5C2.67158 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67158 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V3.5C22 2.67157 21.3284 2 20.5 2Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2V11H7.5V2H17Z' fill='white' stroke='white' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5V7.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M5.99844 2H18.4992' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A")}.todo.svelte-dmxqmd input.svelte-dmxqmd:focus+.save.svelte-dmxqmd,.save.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd:focus{transition:opacity 0.2s;opacity:1}`,
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script context=\\"module\\" lang=\\"ts\\">var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\\n    return new (P || (P = Promise))(function (resolve, reject) {\\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\\n        function rejected(value) { try { step(generator[\\"throw\\"](value)); } catch (e) { reject(e); } }\\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\\n    });\\n};\\nimport { enhance } from '$lib/form';\\n;\\n// see https://kit.svelte.dev/docs#loading\\nexport const load = ({ fetch }) => __awaiter(void 0, void 0, void 0, function* () {\\n    const res = yield fetch('/todos.json');\\n    if (res.ok) {\\n        const todos = yield res.json();\\n        return {\\n            props: { todos }\\n        };\\n    }\\n    const { message } = yield res.json();\\n    return {\\n        error: new Error(message)\\n    };\\n});\\n</script>\\n\\n<script lang=\\"ts\\">var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\\n    return new (P || (P = Promise))(function (resolve, reject) {\\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\\n        function rejected(value) { try { step(generator[\\"throw\\"](value)); } catch (e) { reject(e); } }\\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\\n    });\\n};\\nimport { scale } from 'svelte/transition';\\nimport { flip } from 'svelte/animate';\\nexport let todos;\\nfunction patch(res) {\\n    return __awaiter(this, void 0, void 0, function* () {\\n        const todo = yield res.json();\\n        todos = todos.map((t) => {\\n            if (t.uid === todo.uid)\\n                return todo;\\n            return t;\\n        });\\n    });\\n}\\n</script>\\n\\n<svelte:head>\\n\\t<title>Todos</title>\\n</svelte:head>\\n\\n<div class=\\"todos\\">\\n\\t<h1>Todos</h1>\\n\\n\\t<form\\n\\t\\tclass=\\"new\\"\\n\\t\\taction=\\"/todos.json\\"\\n\\t\\tmethod=\\"post\\"\\n\\t\\tuse:enhance={{\\n\\t\\t\\tresult: async (res, form) => {\\n\\t\\t\\t\\tconst created = await res.json();\\n\\t\\t\\t\\ttodos = [...todos, created];\\n\\n\\t\\t\\t\\tform.reset();\\n\\t\\t\\t}\\n\\t\\t}}\\n\\t>\\n\\t\\t<input name=\\"text\\" aria-label=\\"Add todo\\" placeholder=\\"+ tap to add a todo\\" />\\n\\t</form>\\n\\n\\t{#each todos as todo (todo.uid)}\\n\\t\\t<div\\n\\t\\t\\tclass=\\"todo\\"\\n\\t\\t\\tclass:done={todo.done}\\n\\t\\t\\ttransition:scale|local={{ start: 0.7 }}\\n\\t\\t\\tanimate:flip={{ duration: 200 }}\\n\\t\\t>\\n\\t\\t\\t<form\\n\\t\\t\\t\\taction=\\"/todos/{todo.uid}.json?_method=patch\\"\\n\\t\\t\\t\\tmethod=\\"post\\"\\n\\t\\t\\t\\tuse:enhance={{\\n\\t\\t\\t\\t\\tpending: (data) => {\\n\\t\\t\\t\\t\\t\\ttodo.done = !!data.get('done');\\n\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\tresult: patch\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<input type=\\"hidden\\" name=\\"done\\" value={todo.done ? '' : 'true'} />\\n\\t\\t\\t\\t<button class=\\"toggle\\" aria-label=\\"Mark todo as {todo.done ? 'not done' : 'done'}\\" />\\n\\t\\t\\t</form>\\n\\n\\t\\t\\t<form\\n\\t\\t\\t\\tclass=\\"text\\"\\n\\t\\t\\t\\taction=\\"/todos/{todo.uid}.json?_method=patch\\"\\n\\t\\t\\t\\tmethod=\\"post\\"\\n\\t\\t\\t\\tuse:enhance={{\\n\\t\\t\\t\\t\\tresult: patch\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<input aria-label=\\"Edit todo\\" type=\\"text\\" name=\\"text\\" value={todo.text} />\\n\\t\\t\\t\\t<button class=\\"save\\" aria-label=\\"Save todo\\" />\\n\\t\\t\\t</form>\\n\\n\\t\\t\\t<form\\n\\t\\t\\t\\taction=\\"/todos/{todo.uid}.json?_method=delete\\"\\n\\t\\t\\t\\tmethod=\\"post\\"\\n\\t\\t\\t\\tuse:enhance={{\\n\\t\\t\\t\\t\\tresult: () => {\\n\\t\\t\\t\\t\\t\\ttodos = todos.filter((t) => t.uid !== todo.uid);\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<button class=\\"delete\\" aria-label=\\"Delete todo\\" />\\n\\t\\t\\t</form>\\n\\t\\t</div>\\n\\t{/each}\\n</div>\\n\\n<style>\\n\\t.todos {\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: var(--column-width);\\n\\t\\tmargin: var(--column-margin-top) auto 0 auto;\\n\\t\\tline-height: 1;\\n\\t}\\n\\n\\t.new {\\n\\t\\tmargin: 0 0 0.5rem 0;\\n\\t}\\n\\n\\tinput {\\n\\t\\tborder: 1px solid transparent;\\n\\t}\\n\\n\\tinput:focus-visible {\\n\\t\\tbox-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);\\n\\t\\tborder: 1px solid #ff3e00 !important;\\n\\t\\toutline: none;\\n\\t}\\n\\n\\t.new input {\\n\\t\\tfont-size: 28px;\\n\\t\\twidth: 100%;\\n\\t\\tpadding: 0.5em 1em 0.3em 1em;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tbackground: rgba(255, 255, 255, 0.05);\\n\\t\\tborder-radius: 8px;\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.todo {\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: 2rem 1fr 2rem;\\n\\t\\tgrid-gap: 0.5rem;\\n\\t\\talign-items: center;\\n\\t\\tmargin: 0 0 0.5rem 0;\\n\\t\\tpadding: 0.5rem;\\n\\t\\tbackground-color: white;\\n\\t\\tborder-radius: 8px;\\n\\t\\tfilter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));\\n\\t\\ttransform: translate(-1px, -1px);\\n\\t\\ttransition: filter 0.2s, transform 0.2s;\\n\\t}\\n\\n\\t.done {\\n\\t\\ttransform: none;\\n\\t\\topacity: 0.4;\\n\\t\\tfilter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1));\\n\\t}\\n\\n\\tform.text {\\n\\t\\tposition: relative;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tflex: 1;\\n\\t}\\n\\n\\t.todo input {\\n\\t\\tflex: 1;\\n\\t\\tpadding: 0.5em 2em 0.5em 0.8em;\\n\\t\\tborder-radius: 3px;\\n\\t}\\n\\n\\t.todo button {\\n\\t\\twidth: 2em;\\n\\t\\theight: 2em;\\n\\t\\tborder: none;\\n\\t\\tbackground-color: transparent;\\n\\t\\tbackground-position: 50% 50%;\\n\\t\\tbackground-repeat: no-repeat;\\n\\t}\\n\\n\\tbutton.toggle {\\n\\t\\tborder: 1px solid rgba(0, 0, 0, 0.2);\\n\\t\\tborder-radius: 50%;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tbackground-size: 1em auto;\\n\\t}\\n\\n\\t.done .toggle {\\n\\t\\tbackground-image: url(\\"data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L7.4375 14.5L1.5 8.5909' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\\");\\n\\t}\\n\\n\\t.delete {\\n\\t\\tbackground-image: url(\\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5V22H19.5V5H4.5Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5H22' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 5L9.6445 2H14.3885L16 5H8Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E%0A\\");\\n\\t\\topacity: 0.2;\\n\\t}\\n\\n\\t.delete:hover,\\n\\t.delete:focus {\\n\\t\\ttransition: opacity 0.2s;\\n\\t\\topacity: 1;\\n\\t}\\n\\n\\t.save {\\n\\t\\tposition: absolute;\\n\\t\\tright: 0;\\n\\t\\topacity: 0;\\n\\t\\tbackground-image: url(\\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2H3.5C2.67158 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67158 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V3.5C22 2.67157 21.3284 2 20.5 2Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2V11H7.5V2H17Z' fill='white' stroke='white' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5V7.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M5.99844 2H18.4992' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A\\");\\n\\t}\\n\\n\\t.todo input:focus + .save,\\n\\t.save:focus {\\n\\t\\ttransition: opacity 0.2s;\\n\\t\\topacity: 1;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA2HC,MAAM,0CAAC,CAAC,AACP,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,cAAc,CAAC,CAC9B,MAAM,CAAE,IAAI,mBAAmB,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,CAC5C,WAAW,CAAE,CAAC,AACf,CAAC,AAED,IAAI,0CAAC,CAAC,AACL,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,AACrB,CAAC,AAED,KAAK,0CAAC,CAAC,AACN,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,AAC9B,CAAC,AAED,+CAAK,cAAc,AAAC,CAAC,AACpB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAChD,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAAC,UAAU,CACpC,OAAO,CAAE,IAAI,AACd,CAAC,AAED,kBAAI,CAAC,KAAK,4BAAC,CAAC,AACX,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,KAAK,CAAC,GAAG,CAAC,KAAK,CAAC,GAAG,CAC5B,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACrC,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,MAAM,AACnB,CAAC,AAED,KAAK,0CAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,GAAG,CAAC,IAAI,CACpC,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACpB,OAAO,CAAE,MAAM,CACf,gBAAgB,CAAE,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACnD,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,UAAU,CAAE,MAAM,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,IAAI,AACxC,CAAC,AAED,KAAK,0CAAC,CAAC,AACN,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,AACpD,CAAC,AAED,IAAI,KAAK,0CAAC,CAAC,AACV,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,IAAI,CAAE,CAAC,AACR,CAAC,AAED,mBAAK,CAAC,KAAK,4BAAC,CAAC,AACZ,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,KAAK,CAAC,GAAG,CAAC,KAAK,CAAC,KAAK,CAC9B,aAAa,CAAE,GAAG,AACnB,CAAC,AAED,mBAAK,CAAC,MAAM,4BAAC,CAAC,AACb,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,WAAW,CAC7B,mBAAmB,CAAE,GAAG,CAAC,GAAG,CAC5B,iBAAiB,CAAE,SAAS,AAC7B,CAAC,AAED,MAAM,OAAO,0CAAC,CAAC,AACd,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACpC,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,UAAU,CACtB,eAAe,CAAE,GAAG,CAAC,IAAI,AAC1B,CAAC,AAED,mBAAK,CAAC,OAAO,4BAAC,CAAC,AACd,gBAAgB,CAAE,IAAI,uQAAuQ,CAAC,AAC/R,CAAC,AAED,OAAO,0CAAC,CAAC,AACR,gBAAgB,CAAE,IAAI,yrBAAyrB,CAAC,CAChtB,OAAO,CAAE,GAAG,AACb,CAAC,AAED,iDAAO,MAAM,CACb,iDAAO,MAAM,AAAC,CAAC,AACd,UAAU,CAAE,OAAO,CAAC,IAAI,CACxB,OAAO,CAAE,CAAC,AACX,CAAC,AAED,KAAK,0CAAC,CAAC,AACN,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,CAAC,CACV,gBAAgB,CAAE,IAAI,gpBAAgpB,CAAC,AACxqB,CAAC,AAED,mBAAK,CAAC,mBAAK,MAAM,CAAG,mBAAK,CACzB,+CAAK,MAAM,AAAC,CAAC,AACZ,UAAU,CAAE,OAAO,CAAC,IAAI,CACxB,OAAO,CAAE,CAAC,AACX,CAAC"}`
};
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var load = ({fetch: fetch22}) => __awaiter(void 0, void 0, void 0, function* () {
  const res = yield fetch22("/todos.json");
  if (res.ok) {
    const todos = yield res.json();
    return {props: {todos}};
  }
  const {message} = yield res.json();
  return {error: new Error(message)};
});
var Todos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  let {todos} = $$props;
  if ($$props.todos === void 0 && $$bindings.todos && todos !== void 0)
    $$bindings.todos(todos);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Todos</title>`, ""}`, ""}

<div class="${"todos svelte-dmxqmd"}"><h1>Todos</h1>

	<form class="${"new svelte-dmxqmd"}" action="${"/todos.json"}" method="${"post"}"><input name="${"text"}" aria-label="${"Add todo"}" placeholder="${"+ tap to add a todo"}" class="${"svelte-dmxqmd"}"></form>

	${each(todos, (todo) => {
    return `<div class="${["todo svelte-dmxqmd", todo.done ? "done" : ""].join(" ").trim()}"><form action="${"/todos/" + escape2(todo.uid) + ".json?_method=patch"}" method="${"post"}"><input type="${"hidden"}" name="${"done"}"${add_attribute("value", todo.done ? "" : "true", 0)} class="${"svelte-dmxqmd"}">
				<button class="${"toggle svelte-dmxqmd"}" aria-label="${"Mark todo as " + escape2(todo.done ? "not done" : "done")}"></button></form>

			<form class="${"text svelte-dmxqmd"}" action="${"/todos/" + escape2(todo.uid) + ".json?_method=patch"}" method="${"post"}"><input aria-label="${"Edit todo"}" type="${"text"}" name="${"text"}"${add_attribute("value", todo.text, 0)} class="${"svelte-dmxqmd"}">
				<button class="${"save svelte-dmxqmd"}" aria-label="${"Save todo"}"></button></form>

			<form action="${"/todos/" + escape2(todo.uid) + ".json?_method=delete"}" method="${"post"}"><button class="${"delete svelte-dmxqmd"}" aria-label="${"Delete todo"}"></button></form>
		</div>`;
  })}
</div>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Todos,
  load
});

// .svelte-kit/vercel/entry.js
var entry_default = async (req, res) => {
  const {pathname, searchParams} = new URL(req.url || "", "http://localhost");
  const rendered = await render({
    method: req.method,
    headers: req.headers,
    path: pathname,
    query: searchParams,
    rawBody: await getRawBody(req)
  });
  if (rendered) {
    const {status, headers, body} = rendered;
    return res.writeHead(status, headers).end(body);
  }
  return res.writeHead(404).end();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
