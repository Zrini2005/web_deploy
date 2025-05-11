var Ke = Object.defineProperty;
var ze = (r, t, e) => t in r ? Ke(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var p = (r, t, e) => (ze(r, typeof t != "symbol" ? t + "" : t, e), e);
import { css as Ne, LitElement as We, html as je } from "lit";
import ie, { GameObjects as me, Physics as He, Scene as Me } from "phaser";
import "buffer";
import Ye from "react";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ve = (r) => (t) => typeof t == "function" ? ((e, i) => (customElements.define(e, i), i))(r, t) : ((e, i) => {
  const { kind: s, elements: n } = i;
  return { kind: s, elements: n, finisher(o) {
    customElements.define(e, o);
  } };
})(r, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ge = (r, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) {
  e.createProperty(t.key, r);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(e) {
  e.createProperty(t.key, r);
} };
function pe(r) {
  return (t, e) => e !== void 0 ? ((i, s, n) => {
    s.constructor.createProperty(n, i);
  })(r, t, e) : Ge(r, t);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var fe;
((fe = window.HTMLSlotElement) === null || fe === void 0 ? void 0 : fe.prototype.assignedElements) != null;
const R = {
  fps: {
    min: 10,
    target: 75,
    smoothStep: !0
  },
  tileWidth: 16,
  player: {
    key: "PLAYER",
    velocity: 175,
    spawn: {
      x: 15,
      y: 12
    },
    frameWidth: 256,
    frameHeight: 256,
    frameRate: 16
  },
  freeRoam: {
    key: "FREE_ROAM"
  },
  loader: {
    key: "LOADER"
  },
  arena: {
    startMatchImage: {
      key: "start-match",
      url: "/assets/phaser/objects/start-match.webp"
    },
    startMatchImageMobile: {
      key: "start-match-mobile",
      url: "/assets/phaser/objects/start-match-mobile.webp"
    }
  },
  lootboxOpen: {
    key: "LOOTBOX_OPEN",
    url: "/assets/phaser/objects/lootbox-open.webp"
  },
  lootboxClosed: {
    key: "LOOTBOX_CLOSED",
    url: "/assets/phaser/objects/lootbox-closed.webp"
  },
  openLootbox: {
    key: "OPEN_LOOTBOX",
    url: "/assets/phaser/objects/open-lootbox.webp"
  },
  openDungeon: {
    key: "OPEN_DUNGEON",
    url: "/assets/phaser/objects/open-dungeon.webp"
  },
  teleporter: {
    Effect: {
      key: "EFFECTS_TILESET",
      url: "/assets/phaser/objects/effects.webp"
    },
    Image: {
      key: "TELEPORT_IMAGE",
      url: "/assets/phaser/objects/teleport.webp"
    }
  },
  seed: 1234
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xe = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), ve = /* @__PURE__ */ new WeakMap(), Ue = (r, t, e, i, s) => {
  const n = s == null ? void 0 : s[t];
  n === void 0 || e === i ? e == null && t in HTMLElement.prototype ? r.removeAttribute(t) : r[t] = e : ((o, l, a) => {
    let h = ve.get(o);
    h === void 0 && ve.set(o, h = /* @__PURE__ */ new Map());
    let u = h.get(l);
    a !== void 0 ? u === void 0 ? (h.set(l, u = { handleEvent: a }), o.addEventListener(l, u)) : u.handleEvent = a : u !== void 0 && (h.delete(l), o.removeEventListener(l, u));
  })(r, n, e);
};
function $e(r = window.React, t, e, i, s) {
  let n, o, l;
  if (t === void 0) {
    const m = r;
    ({ tagName: o, elementClass: l, events: i, displayName: s } = m), n = m.react;
  } else
    n = r, l = e, o = t;
  const a = n.Component, h = n.createElement, u = new Set(Object.keys(i ?? {}));
  class c extends a {
    constructor() {
      super(...arguments), this.o = null;
    }
    t(f) {
      if (this.o !== null)
        for (const y in this.i)
          Ue(this.o, y, this.props[y], f ? f[y] : void 0, i);
    }
    componentDidMount() {
      this.t();
    }
    componentDidUpdate(f) {
      this.t(f);
    }
    render() {
      const { _$Gl: f, ...y } = this.props;
      this.h !== f && (this.u = (g) => {
        f !== null && ((x, C) => {
          typeof x == "function" ? x(C) : x.current = C;
        })(f, g), this.o = g, this.h = f;
      }), this.i = {};
      const w = { ref: this.u };
      for (const [g, x] of Object.entries(y))
        Xe.has(g) ? w[g === "className" ? "class" : g] = x : u.has(g) || g in l.prototype ? this.i[g] = x : w[g] = x;
      return h(o, w);
    }
  }
  c.displayName = s ?? l.name;
  const d = n.forwardRef((m, f) => h(c, { ...m, _$Gl: f }, m == null ? void 0 : m.children));
  return d.displayName = c.displayName, d;
}
const Y = 11102230246251565e-32, K = 134217729, Je = (3 + 8 * Y) * Y;
function ye(r, t, e, i, s) {
  let n, o, l, a, h = t[0], u = i[0], c = 0, d = 0;
  u > h == u > -h ? (n = h, h = t[++c]) : (n = u, u = i[++d]);
  let m = 0;
  if (c < r && d < e)
    for (u > h == u > -h ? (o = h + n, l = n - (o - h), h = t[++c]) : (o = u + n, l = n - (o - u), u = i[++d]), n = o, l !== 0 && (s[m++] = l); c < r && d < e; )
      u > h == u > -h ? (o = n + h, a = o - n, l = n - (o - a) + (h - a), h = t[++c]) : (o = n + u, a = o - n, l = n - (o - a) + (u - a), u = i[++d]), n = o, l !== 0 && (s[m++] = l);
  for (; c < r; )
    o = n + h, a = o - n, l = n - (o - a) + (h - a), h = t[++c], n = o, l !== 0 && (s[m++] = l);
  for (; d < e; )
    o = n + u, a = o - n, l = n - (o - a) + (u - a), u = i[++d], n = o, l !== 0 && (s[m++] = l);
  return (n !== 0 || m === 0) && (s[m++] = n), m;
}
function qe(r, t) {
  let e = t[0];
  for (let i = 1; i < r; i++)
    e += t[i];
  return e;
}
function ne(r) {
  return new Float64Array(r);
}
const Ze = (3 + 16 * Y) * Y, Qe = (2 + 12 * Y) * Y, et = (9 + 64 * Y) * Y * Y, q = ne(4), Se = ne(8), Fe = ne(12), _e = ne(16), N = ne(4);
function tt(r, t, e, i, s, n, o) {
  let l, a, h, u, c, d, m, f, y, w, g, x, C, _, F, I, E, P;
  const b = r - s, S = e - s, v = t - n, k = i - n;
  _ = b * k, d = K * b, m = d - (d - b), f = b - m, d = K * k, y = d - (d - k), w = k - y, F = f * w - (_ - m * y - f * y - m * w), I = v * S, d = K * v, m = d - (d - v), f = v - m, d = K * S, y = d - (d - S), w = S - y, E = f * w - (I - m * y - f * y - m * w), g = F - E, c = F - g, q[0] = F - (g + c) + (c - E), x = _ + g, c = x - _, C = _ - (x - c) + (g - c), g = C - I, c = C - g, q[1] = C - (g + c) + (c - I), P = x + g, c = P - x, q[2] = x - (P - c) + (g - c), q[3] = P;
  let O = qe(4, q), M = Qe * o;
  if (O >= M || -O >= M || (c = r - b, l = r - (b + c) + (c - s), c = e - S, h = e - (S + c) + (c - s), c = t - v, a = t - (v + c) + (c - n), c = i - k, u = i - (k + c) + (c - n), l === 0 && a === 0 && h === 0 && u === 0) || (M = et * o + Je * Math.abs(O), O += b * u + k * l - (v * h + S * a), O >= M || -O >= M))
    return O;
  _ = l * k, d = K * l, m = d - (d - l), f = l - m, d = K * k, y = d - (d - k), w = k - y, F = f * w - (_ - m * y - f * y - m * w), I = a * S, d = K * a, m = d - (d - a), f = a - m, d = K * S, y = d - (d - S), w = S - y, E = f * w - (I - m * y - f * y - m * w), g = F - E, c = F - g, N[0] = F - (g + c) + (c - E), x = _ + g, c = x - _, C = _ - (x - c) + (g - c), g = C - I, c = C - g, N[1] = C - (g + c) + (c - I), P = x + g, c = P - x, N[2] = x - (P - c) + (g - c), N[3] = P;
  const L = ye(4, q, 4, N, Se);
  _ = b * u, d = K * b, m = d - (d - b), f = b - m, d = K * u, y = d - (d - u), w = u - y, F = f * w - (_ - m * y - f * y - m * w), I = v * h, d = K * v, m = d - (d - v), f = v - m, d = K * h, y = d - (d - h), w = h - y, E = f * w - (I - m * y - f * y - m * w), g = F - E, c = F - g, N[0] = F - (g + c) + (c - E), x = _ + g, c = x - _, C = _ - (x - c) + (g - c), g = C - I, c = C - g, N[1] = C - (g + c) + (c - I), P = x + g, c = P - x, N[2] = x - (P - c) + (g - c), N[3] = P;
  const D = ye(L, Se, 4, N, Fe);
  _ = l * u, d = K * l, m = d - (d - l), f = l - m, d = K * u, y = d - (d - u), w = u - y, F = f * w - (_ - m * y - f * y - m * w), I = a * h, d = K * a, m = d - (d - a), f = a - m, d = K * h, y = d - (d - h), w = h - y, E = f * w - (I - m * y - f * y - m * w), g = F - E, c = F - g, N[0] = F - (g + c) + (c - E), x = _ + g, c = x - _, C = _ - (x - c) + (g - c), g = C - I, c = C - g, N[1] = C - (g + c) + (c - I), P = x + g, c = P - x, N[2] = x - (P - c) + (g - c), N[3] = P;
  const A = ye(D, Fe, 4, N, _e);
  return _e[A - 1];
}
function ae(r, t, e, i, s, n) {
  const o = (t - n) * (e - s), l = (r - s) * (i - n), a = o - l, h = Math.abs(o + l);
  return Math.abs(a) >= Ze * h ? a : -tt(r, t, e, i, s, n, h);
}
const ke = Math.pow(2, -52), re = new Uint32Array(512);
class de {
  static from(t, e = lt, i = at) {
    const s = t.length, n = new Float64Array(s * 2);
    for (let o = 0; o < s; o++) {
      const l = t[o];
      n[2 * o] = e(l), n[2 * o + 1] = i(l);
    }
    return new de(n);
  }
  constructor(t) {
    const e = t.length >> 1;
    if (e > 0 && typeof t[0] != "number")
      throw new Error("Expected coords to contain numbers.");
    this.coords = t;
    const i = Math.max(2 * e - 5, 0);
    this._triangles = new Uint32Array(i * 3), this._halfedges = new Int32Array(i * 3), this._hashSize = Math.ceil(Math.sqrt(e)), this._hullPrev = new Uint32Array(e), this._hullNext = new Uint32Array(e), this._hullTri = new Uint32Array(e), this._hullHash = new Int32Array(this._hashSize), this._ids = new Uint32Array(e), this._dists = new Float64Array(e), this.update();
  }
  update() {
    const { coords: t, _hullPrev: e, _hullNext: i, _hullTri: s, _hullHash: n } = this, o = t.length >> 1;
    let l = 1 / 0, a = 1 / 0, h = -1 / 0, u = -1 / 0;
    for (let b = 0; b < o; b++) {
      const S = t[2 * b], v = t[2 * b + 1];
      S < l && (l = S), v < a && (a = v), S > h && (h = S), v > u && (u = v), this._ids[b] = b;
    }
    const c = (l + h) / 2, d = (a + u) / 2;
    let m, f, y;
    for (let b = 0, S = 1 / 0; b < o; b++) {
      const v = ge(c, d, t[2 * b], t[2 * b + 1]);
      v < S && (m = b, S = v);
    }
    const w = t[2 * m], g = t[2 * m + 1];
    for (let b = 0, S = 1 / 0; b < o; b++) {
      if (b === m)
        continue;
      const v = ge(w, g, t[2 * b], t[2 * b + 1]);
      v < S && v > 0 && (f = b, S = v);
    }
    let x = t[2 * f], C = t[2 * f + 1], _ = 1 / 0;
    for (let b = 0; b < o; b++) {
      if (b === m || b === f)
        continue;
      const S = nt(w, g, x, C, t[2 * b], t[2 * b + 1]);
      S < _ && (y = b, _ = S);
    }
    let F = t[2 * y], I = t[2 * y + 1];
    if (_ === 1 / 0) {
      for (let v = 0; v < o; v++)
        this._dists[v] = t[2 * v] - t[0] || t[2 * v + 1] - t[1];
      Q(this._ids, this._dists, 0, o - 1);
      const b = new Uint32Array(o);
      let S = 0;
      for (let v = 0, k = -1 / 0; v < o; v++) {
        const O = this._ids[v], M = this._dists[O];
        M > k && (b[S++] = O, k = M);
      }
      this.hull = b.subarray(0, S), this.triangles = new Uint32Array(0), this.halfedges = new Uint32Array(0);
      return;
    }
    if (ae(w, g, x, C, F, I) < 0) {
      const b = f, S = x, v = C;
      f = y, x = F, C = I, y = b, F = S, I = v;
    }
    const E = ot(w, g, x, C, F, I);
    this._cx = E.x, this._cy = E.y;
    for (let b = 0; b < o; b++)
      this._dists[b] = ge(t[2 * b], t[2 * b + 1], E.x, E.y);
    Q(this._ids, this._dists, 0, o - 1), this._hullStart = m;
    let P = 3;
    i[m] = e[y] = f, i[f] = e[m] = y, i[y] = e[f] = m, s[m] = 0, s[f] = 1, s[y] = 2, n.fill(-1), n[this._hashKey(w, g)] = m, n[this._hashKey(x, C)] = f, n[this._hashKey(F, I)] = y, this.trianglesLen = 0, this._addTriangle(m, f, y, -1, -1, -1);
    for (let b = 0, S, v; b < this._ids.length; b++) {
      const k = this._ids[b], O = t[2 * k], M = t[2 * k + 1];
      if (b > 0 && Math.abs(O - S) <= ke && Math.abs(M - v) <= ke || (S = O, v = M, k === m || k === f || k === y))
        continue;
      let L = 0;
      for (let W = 0, U = this._hashKey(O, M); W < this._hashSize && (L = n[(U + W) % this._hashSize], !(L !== -1 && L !== i[L])); W++)
        ;
      L = e[L];
      let D = L, A;
      for (; A = i[D], ae(O, M, t[2 * D], t[2 * D + 1], t[2 * A], t[2 * A + 1]) >= 0; )
        if (D = A, D === L) {
          D = -1;
          break;
        }
      if (D === -1)
        continue;
      let z = this._addTriangle(D, k, i[D], -1, -1, s[D]);
      s[k] = this._legalize(z + 2), s[D] = z, P++;
      let B = i[D];
      for (; A = i[B], ae(O, M, t[2 * B], t[2 * B + 1], t[2 * A], t[2 * A + 1]) < 0; )
        z = this._addTriangle(B, k, A, s[k], -1, s[B]), s[k] = this._legalize(z + 2), i[B] = B, P--, B = A;
      if (D === L)
        for (; A = e[D], ae(O, M, t[2 * A], t[2 * A + 1], t[2 * D], t[2 * D + 1]) < 0; )
          z = this._addTriangle(A, k, D, -1, s[D], s[A]), this._legalize(z + 2), s[A] = z, i[D] = D, P--, D = A;
      this._hullStart = e[k] = D, i[D] = e[B] = k, i[k] = B, n[this._hashKey(O, M)] = k, n[this._hashKey(t[2 * D], t[2 * D + 1])] = D;
    }
    this.hull = new Uint32Array(P);
    for (let b = 0, S = this._hullStart; b < P; b++)
      this.hull[b] = S, S = i[S];
    this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(t, e) {
    return Math.floor(it(t - this._cx, e - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(t) {
    const { _triangles: e, _halfedges: i, coords: s } = this;
    let n = 0, o = 0;
    for (; ; ) {
      const l = i[t], a = t - t % 3;
      if (o = a + (t + 2) % 3, l === -1) {
        if (n === 0)
          break;
        t = re[--n];
        continue;
      }
      const h = l - l % 3, u = a + (t + 1) % 3, c = h + (l + 2) % 3, d = e[o], m = e[t], f = e[u], y = e[c];
      if (st(
        s[2 * d],
        s[2 * d + 1],
        s[2 * m],
        s[2 * m + 1],
        s[2 * f],
        s[2 * f + 1],
        s[2 * y],
        s[2 * y + 1]
      )) {
        e[t] = y, e[l] = d;
        const g = i[c];
        if (g === -1) {
          let C = this._hullStart;
          do {
            if (this._hullTri[C] === c) {
              this._hullTri[C] = t;
              break;
            }
            C = this._hullPrev[C];
          } while (C !== this._hullStart);
        }
        this._link(t, g), this._link(l, i[o]), this._link(o, c);
        const x = h + (l + 1) % 3;
        n < re.length && (re[n++] = x);
      } else {
        if (n === 0)
          break;
        t = re[--n];
      }
    }
    return o;
  }
  _link(t, e) {
    this._halfedges[t] = e, e !== -1 && (this._halfedges[e] = t);
  }
  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(t, e, i, s, n, o) {
    const l = this.trianglesLen;
    return this._triangles[l] = t, this._triangles[l + 1] = e, this._triangles[l + 2] = i, this._link(l, s), this._link(l + 1, n), this._link(l + 2, o), this.trianglesLen += 3, l;
  }
}
function it(r, t) {
  const e = r / (Math.abs(r) + Math.abs(t));
  return (t > 0 ? 3 - e : 1 + e) / 4;
}
function ge(r, t, e, i) {
  const s = r - e, n = t - i;
  return s * s + n * n;
}
function st(r, t, e, i, s, n, o, l) {
  const a = r - o, h = t - l, u = e - o, c = i - l, d = s - o, m = n - l, f = a * a + h * h, y = u * u + c * c, w = d * d + m * m;
  return a * (c * w - y * m) - h * (u * w - y * d) + f * (u * m - c * d) < 0;
}
function nt(r, t, e, i, s, n) {
  const o = e - r, l = i - t, a = s - r, h = n - t, u = o * o + l * l, c = a * a + h * h, d = 0.5 / (o * h - l * a), m = (h * u - l * c) * d, f = (o * c - a * u) * d;
  return m * m + f * f;
}
function ot(r, t, e, i, s, n) {
  const o = e - r, l = i - t, a = s - r, h = n - t, u = o * o + l * l, c = a * a + h * h, d = 0.5 / (o * h - l * a), m = r + (h * u - l * c) * d, f = t + (o * c - a * u) * d;
  return { x: m, y: f };
}
function Q(r, t, e, i) {
  if (i - e <= 20)
    for (let s = e + 1; s <= i; s++) {
      const n = r[s], o = t[n];
      let l = s - 1;
      for (; l >= e && t[r[l]] > o; )
        r[l + 1] = r[l--];
      r[l + 1] = n;
    }
  else {
    const s = e + i >> 1;
    let n = e + 1, o = i;
    te(r, s, n), t[r[e]] > t[r[i]] && te(r, e, i), t[r[n]] > t[r[i]] && te(r, n, i), t[r[e]] > t[r[n]] && te(r, e, n);
    const l = r[n], a = t[l];
    for (; ; ) {
      do
        n++;
      while (t[r[n]] < a);
      do
        o--;
      while (t[r[o]] > a);
      if (o < n)
        break;
      te(r, n, o);
    }
    r[e + 1] = r[o], r[o] = l, i - n + 1 >= o - e ? (Q(r, t, n, i), Q(r, t, e, o - 1)) : (Q(r, t, e, o - 1), Q(r, t, n, i));
  }
}
function te(r, t, e) {
  const i = r[t];
  r[t] = r[e], r[e] = i;
}
function lt(r) {
  return r[0];
}
function at(r) {
  return r[1];
}
const De = 1e-6;
class J {
  constructor() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "";
  }
  moveTo(t, e) {
    this._ += `M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  }
  lineTo(t, e) {
    this._ += `L${this._x1 = +t},${this._y1 = +e}`;
  }
  arc(t, e, i) {
    t = +t, e = +e, i = +i;
    const s = t + i, n = e;
    if (i < 0)
      throw new Error("negative radius");
    this._x1 === null ? this._ += `M${s},${n}` : (Math.abs(this._x1 - s) > De || Math.abs(this._y1 - n) > De) && (this._ += "L" + s + "," + n), i && (this._ += `A${i},${i},0,1,1,${t - i},${e}A${i},${i},0,1,1,${this._x1 = s},${this._y1 = n}`);
  }
  rect(t, e, i, s) {
    this._ += `M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +e}h${+i}v${+s}h${-i}Z`;
  }
  value() {
    return this._ || null;
  }
}
class xe {
  constructor() {
    this._ = [];
  }
  moveTo(t, e) {
    this._.push([t, e]);
  }
  closePath() {
    this._.push(this._[0].slice());
  }
  lineTo(t, e) {
    this._.push([t, e]);
  }
  value() {
    return this._.length ? this._ : null;
  }
}
class rt {
  constructor(t, [e, i, s, n] = [0, 0, 960, 500]) {
    if (!((s = +s) >= (e = +e)) || !((n = +n) >= (i = +i)))
      throw new Error("invalid bounds");
    this.delaunay = t, this._circumcenters = new Float64Array(t.points.length * 2), this.vectors = new Float64Array(t.points.length * 2), this.xmax = s, this.xmin = e, this.ymax = n, this.ymin = i, this._init();
  }
  update() {
    return this.delaunay.update(), this._init(), this;
  }
  _init() {
    const { delaunay: { points: t, hull: e, triangles: i }, vectors: s } = this;
    let n, o;
    const l = this.circumcenters = this._circumcenters.subarray(0, i.length / 3 * 2);
    for (let y = 0, w = 0, g = i.length, x, C; y < g; y += 3, w += 2) {
      const _ = i[y] * 2, F = i[y + 1] * 2, I = i[y + 2] * 2, E = t[_], P = t[_ + 1], b = t[F], S = t[F + 1], v = t[I], k = t[I + 1], O = b - E, M = S - P, L = v - E, D = k - P, A = (O * D - M * L) * 2;
      if (Math.abs(A) < 1e-9) {
        if (n === void 0) {
          n = o = 0;
          for (const B of e)
            n += t[B * 2], o += t[B * 2 + 1];
          n /= e.length, o /= e.length;
        }
        const z = 1e9 * Math.sign((n - E) * D - (o - P) * L);
        x = (E + v) / 2 - z * D, C = (P + k) / 2 + z * L;
      } else {
        const z = 1 / A, B = O * O + M * M, W = L * L + D * D;
        x = E + (D * B - M * W) * z, C = P + (O * W - L * B) * z;
      }
      l[w] = x, l[w + 1] = C;
    }
    let a = e[e.length - 1], h, u = a * 4, c, d = t[2 * a], m, f = t[2 * a + 1];
    s.fill(0);
    for (let y = 0; y < e.length; ++y)
      a = e[y], h = u, c = d, m = f, u = a * 4, d = t[2 * a], f = t[2 * a + 1], s[h + 2] = s[u] = m - f, s[h + 3] = s[u + 1] = d - c;
  }
  render(t) {
    const e = t == null ? t = new J() : void 0, { delaunay: { halfedges: i, inedges: s, hull: n }, circumcenters: o, vectors: l } = this;
    if (n.length <= 1)
      return null;
    for (let u = 0, c = i.length; u < c; ++u) {
      const d = i[u];
      if (d < u)
        continue;
      const m = Math.floor(u / 3) * 2, f = Math.floor(d / 3) * 2, y = o[m], w = o[m + 1], g = o[f], x = o[f + 1];
      this._renderSegment(y, w, g, x, t);
    }
    let a, h = n[n.length - 1];
    for (let u = 0; u < n.length; ++u) {
      a = h, h = n[u];
      const c = Math.floor(s[h] / 3) * 2, d = o[c], m = o[c + 1], f = a * 4, y = this._project(d, m, l[f + 2], l[f + 3]);
      y && this._renderSegment(d, m, y[0], y[1], t);
    }
    return e && e.value();
  }
  renderBounds(t) {
    const e = t == null ? t = new J() : void 0;
    return t.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin), e && e.value();
  }
  renderCell(t, e) {
    const i = e == null ? e = new J() : void 0, s = this._clip(t);
    if (s === null || !s.length)
      return;
    e.moveTo(s[0], s[1]);
    let n = s.length;
    for (; s[0] === s[n - 2] && s[1] === s[n - 1] && n > 1; )
      n -= 2;
    for (let o = 2; o < n; o += 2)
      (s[o] !== s[o - 2] || s[o + 1] !== s[o - 1]) && e.lineTo(s[o], s[o + 1]);
    return e.closePath(), i && i.value();
  }
  *cellPolygons() {
    const { delaunay: { points: t } } = this;
    for (let e = 0, i = t.length / 2; e < i; ++e) {
      const s = this.cellPolygon(e);
      s && (s.index = e, yield s);
    }
  }
  cellPolygon(t) {
    const e = new xe();
    return this.renderCell(t, e), e.value();
  }
  _renderSegment(t, e, i, s, n) {
    let o;
    const l = this._regioncode(t, e), a = this._regioncode(i, s);
    l === 0 && a === 0 ? (n.moveTo(t, e), n.lineTo(i, s)) : (o = this._clipSegment(t, e, i, s, l, a)) && (n.moveTo(o[0], o[1]), n.lineTo(o[2], o[3]));
  }
  contains(t, e, i) {
    return e = +e, e !== e || (i = +i, i !== i) ? !1 : this.delaunay._step(t, e, i) === t;
  }
  *neighbors(t) {
    const e = this._clip(t);
    if (e)
      for (const i of this.delaunay.neighbors(t)) {
        const s = this._clip(i);
        if (s) {
          e:
            for (let n = 0, o = e.length; n < o; n += 2)
              for (let l = 0, a = s.length; l < a; l += 2)
                if (e[n] === s[l] && e[n + 1] === s[l + 1] && e[(n + 2) % o] === s[(l + a - 2) % a] && e[(n + 3) % o] === s[(l + a - 1) % a]) {
                  yield i;
                  break e;
                }
        }
      }
  }
  _cell(t) {
    const { circumcenters: e, delaunay: { inedges: i, halfedges: s, triangles: n } } = this, o = i[t];
    if (o === -1)
      return null;
    const l = [];
    let a = o;
    do {
      const h = Math.floor(a / 3);
      if (l.push(e[h * 2], e[h * 2 + 1]), a = a % 3 === 2 ? a - 2 : a + 1, n[a] !== t)
        break;
      a = s[a];
    } while (a !== o && a !== -1);
    return l;
  }
  _clip(t) {
    if (t === 0 && this.delaunay.hull.length === 1)
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    const e = this._cell(t);
    if (e === null)
      return null;
    const { vectors: i } = this, s = t * 4;
    return this._simplify(i[s] || i[s + 1] ? this._clipInfinite(t, e, i[s], i[s + 1], i[s + 2], i[s + 3]) : this._clipFinite(t, e));
  }
  _clipFinite(t, e) {
    const i = e.length;
    let s = null, n, o, l = e[i - 2], a = e[i - 1], h, u = this._regioncode(l, a), c, d = 0;
    for (let m = 0; m < i; m += 2)
      if (n = l, o = a, l = e[m], a = e[m + 1], h = u, u = this._regioncode(l, a), h === 0 && u === 0)
        c = d, d = 0, s ? s.push(l, a) : s = [l, a];
      else {
        let f, y, w, g, x;
        if (h === 0) {
          if ((f = this._clipSegment(n, o, l, a, h, u)) === null)
            continue;
          [y, w, g, x] = f;
        } else {
          if ((f = this._clipSegment(l, a, n, o, u, h)) === null)
            continue;
          [g, x, y, w] = f, c = d, d = this._edgecode(y, w), c && d && this._edge(t, c, d, s, s.length), s ? s.push(y, w) : s = [y, w];
        }
        c = d, d = this._edgecode(g, x), c && d && this._edge(t, c, d, s, s.length), s ? s.push(g, x) : s = [g, x];
      }
    if (s)
      c = d, d = this._edgecode(s[0], s[1]), c && d && this._edge(t, c, d, s, s.length);
    else if (this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2))
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    return s;
  }
  _clipSegment(t, e, i, s, n, o) {
    const l = n < o;
    for (l && ([t, e, i, s, n, o] = [i, s, t, e, o, n]); ; ) {
      if (n === 0 && o === 0)
        return l ? [i, s, t, e] : [t, e, i, s];
      if (n & o)
        return null;
      let a, h, u = n || o;
      u & 8 ? (a = t + (i - t) * (this.ymax - e) / (s - e), h = this.ymax) : u & 4 ? (a = t + (i - t) * (this.ymin - e) / (s - e), h = this.ymin) : u & 2 ? (h = e + (s - e) * (this.xmax - t) / (i - t), a = this.xmax) : (h = e + (s - e) * (this.xmin - t) / (i - t), a = this.xmin), n ? (t = a, e = h, n = this._regioncode(t, e)) : (i = a, s = h, o = this._regioncode(i, s));
    }
  }
  _clipInfinite(t, e, i, s, n, o) {
    let l = Array.from(e), a;
    if ((a = this._project(l[0], l[1], i, s)) && l.unshift(a[0], a[1]), (a = this._project(l[l.length - 2], l[l.length - 1], n, o)) && l.push(a[0], a[1]), l = this._clipFinite(t, l))
      for (let h = 0, u = l.length, c, d = this._edgecode(l[u - 2], l[u - 1]); h < u; h += 2)
        c = d, d = this._edgecode(l[h], l[h + 1]), c && d && (h = this._edge(t, c, d, l, h), u = l.length);
    else
      this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2) && (l = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax]);
    return l;
  }
  _edge(t, e, i, s, n) {
    for (; e !== i; ) {
      let o, l;
      switch (e) {
        case 5:
          e = 4;
          continue;
        case 4:
          e = 6, o = this.xmax, l = this.ymin;
          break;
        case 6:
          e = 2;
          continue;
        case 2:
          e = 10, o = this.xmax, l = this.ymax;
          break;
        case 10:
          e = 8;
          continue;
        case 8:
          e = 9, o = this.xmin, l = this.ymax;
          break;
        case 9:
          e = 1;
          continue;
        case 1:
          e = 5, o = this.xmin, l = this.ymin;
          break;
      }
      (s[n] !== o || s[n + 1] !== l) && this.contains(t, o, l) && (s.splice(n, 0, o, l), n += 2);
    }
    return n;
  }
  _project(t, e, i, s) {
    let n = 1 / 0, o, l, a;
    if (s < 0) {
      if (e <= this.ymin)
        return null;
      (o = (this.ymin - e) / s) < n && (a = this.ymin, l = t + (n = o) * i);
    } else if (s > 0) {
      if (e >= this.ymax)
        return null;
      (o = (this.ymax - e) / s) < n && (a = this.ymax, l = t + (n = o) * i);
    }
    if (i > 0) {
      if (t >= this.xmax)
        return null;
      (o = (this.xmax - t) / i) < n && (l = this.xmax, a = e + (n = o) * s);
    } else if (i < 0) {
      if (t <= this.xmin)
        return null;
      (o = (this.xmin - t) / i) < n && (l = this.xmin, a = e + (n = o) * s);
    }
    return [l, a];
  }
  _edgecode(t, e) {
    return (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) | (e === this.ymin ? 4 : e === this.ymax ? 8 : 0);
  }
  _regioncode(t, e) {
    return (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) | (e < this.ymin ? 4 : e > this.ymax ? 8 : 0);
  }
  _simplify(t) {
    if (t && t.length > 4) {
      for (let e = 0; e < t.length; e += 2) {
        const i = (e + 2) % t.length, s = (e + 4) % t.length;
        (t[e] === t[i] && t[i] === t[s] || t[e + 1] === t[i + 1] && t[i + 1] === t[s + 1]) && (t.splice(i, 2), e -= 2);
      }
      t.length || (t = null);
    }
    return t;
  }
}
const ht = 2 * Math.PI, Z = Math.pow;
function ct(r) {
  return r[0];
}
function dt(r) {
  return r[1];
}
function ut(r) {
  const { triangles: t, coords: e } = r;
  for (let i = 0; i < t.length; i += 3) {
    const s = 2 * t[i], n = 2 * t[i + 1], o = 2 * t[i + 2];
    if ((e[o] - e[s]) * (e[n + 1] - e[s + 1]) - (e[n] - e[s]) * (e[o + 1] - e[s + 1]) > 1e-10)
      return !1;
  }
  return !0;
}
function mt(r, t, e) {
  return [r + Math.sin(r + t) * e, t + Math.cos(r - t) * e];
}
class we {
  static from(t, e = ct, i = dt, s) {
    return new we("length" in t ? pt(t, e, i, s) : Float64Array.from(ft(t, e, i, s)));
  }
  constructor(t) {
    this._delaunator = new de(t), this.inedges = new Int32Array(t.length / 2), this._hullIndex = new Int32Array(t.length / 2), this.points = this._delaunator.coords, this._init();
  }
  update() {
    return this._delaunator.update(), this._init(), this;
  }
  _init() {
    const t = this._delaunator, e = this.points;
    if (t.hull && t.hull.length > 2 && ut(t)) {
      this.collinear = Int32Array.from({ length: e.length / 2 }, (d, m) => m).sort((d, m) => e[2 * d] - e[2 * m] || e[2 * d + 1] - e[2 * m + 1]);
      const a = this.collinear[0], h = this.collinear[this.collinear.length - 1], u = [e[2 * a], e[2 * a + 1], e[2 * h], e[2 * h + 1]], c = 1e-8 * Math.hypot(u[3] - u[1], u[2] - u[0]);
      for (let d = 0, m = e.length / 2; d < m; ++d) {
        const f = mt(e[2 * d], e[2 * d + 1], c);
        e[2 * d] = f[0], e[2 * d + 1] = f[1];
      }
      this._delaunator = new de(e);
    } else
      delete this.collinear;
    const i = this.halfedges = this._delaunator.halfedges, s = this.hull = this._delaunator.hull, n = this.triangles = this._delaunator.triangles, o = this.inedges.fill(-1), l = this._hullIndex.fill(-1);
    for (let a = 0, h = i.length; a < h; ++a) {
      const u = n[a % 3 === 2 ? a - 2 : a + 1];
      (i[a] === -1 || o[u] === -1) && (o[u] = a);
    }
    for (let a = 0, h = s.length; a < h; ++a)
      l[s[a]] = a;
    s.length <= 2 && s.length > 0 && (this.triangles = new Int32Array(3).fill(-1), this.halfedges = new Int32Array(3).fill(-1), this.triangles[0] = s[0], o[s[0]] = 1, s.length === 2 && (o[s[1]] = 0, this.triangles[1] = s[1], this.triangles[2] = s[1]));
  }
  voronoi(t) {
    return new rt(this, t);
  }
  *neighbors(t) {
    const { inedges: e, hull: i, _hullIndex: s, halfedges: n, triangles: o, collinear: l } = this;
    if (l) {
      const c = l.indexOf(t);
      c > 0 && (yield l[c - 1]), c < l.length - 1 && (yield l[c + 1]);
      return;
    }
    const a = e[t];
    if (a === -1)
      return;
    let h = a, u = -1;
    do {
      if (yield u = o[h], h = h % 3 === 2 ? h - 2 : h + 1, o[h] !== t)
        return;
      if (h = n[h], h === -1) {
        const c = i[(s[t] + 1) % i.length];
        c !== u && (yield c);
        return;
      }
    } while (h !== a);
  }
  find(t, e, i = 0) {
    if (t = +t, t !== t || (e = +e, e !== e))
      return -1;
    const s = i;
    let n;
    for (; (n = this._step(i, t, e)) >= 0 && n !== i && n !== s; )
      i = n;
    return n;
  }
  _step(t, e, i) {
    const { inedges: s, hull: n, _hullIndex: o, halfedges: l, triangles: a, points: h } = this;
    if (s[t] === -1 || !h.length)
      return (t + 1) % (h.length >> 1);
    let u = t, c = Z(e - h[t * 2], 2) + Z(i - h[t * 2 + 1], 2);
    const d = s[t];
    let m = d;
    do {
      let f = a[m];
      const y = Z(e - h[f * 2], 2) + Z(i - h[f * 2 + 1], 2);
      if (y < c && (c = y, u = f), m = m % 3 === 2 ? m - 2 : m + 1, a[m] !== t)
        break;
      if (m = l[m], m === -1) {
        if (m = n[(o[t] + 1) % n.length], m !== f && Z(e - h[m * 2], 2) + Z(i - h[m * 2 + 1], 2) < c)
          return m;
        break;
      }
    } while (m !== d);
    return u;
  }
  render(t) {
    const e = t == null ? t = new J() : void 0, { points: i, halfedges: s, triangles: n } = this;
    for (let o = 0, l = s.length; o < l; ++o) {
      const a = s[o];
      if (a < o)
        continue;
      const h = n[o] * 2, u = n[a] * 2;
      t.moveTo(i[h], i[h + 1]), t.lineTo(i[u], i[u + 1]);
    }
    return this.renderHull(t), e && e.value();
  }
  renderPoints(t, e) {
    e === void 0 && (!t || typeof t.moveTo != "function") && (e = t, t = null), e = e == null ? 2 : +e;
    const i = t == null ? t = new J() : void 0, { points: s } = this;
    for (let n = 0, o = s.length; n < o; n += 2) {
      const l = s[n], a = s[n + 1];
      t.moveTo(l + e, a), t.arc(l, a, e, 0, ht);
    }
    return i && i.value();
  }
  renderHull(t) {
    const e = t == null ? t = new J() : void 0, { hull: i, points: s } = this, n = i[0] * 2, o = i.length;
    t.moveTo(s[n], s[n + 1]);
    for (let l = 1; l < o; ++l) {
      const a = 2 * i[l];
      t.lineTo(s[a], s[a + 1]);
    }
    return t.closePath(), e && e.value();
  }
  hullPolygon() {
    const t = new xe();
    return this.renderHull(t), t.value();
  }
  renderTriangle(t, e) {
    const i = e == null ? e = new J() : void 0, { points: s, triangles: n } = this, o = n[t *= 3] * 2, l = n[t + 1] * 2, a = n[t + 2] * 2;
    return e.moveTo(s[o], s[o + 1]), e.lineTo(s[l], s[l + 1]), e.lineTo(s[a], s[a + 1]), e.closePath(), i && i.value();
  }
  *trianglePolygons() {
    const { triangles: t } = this;
    for (let e = 0, i = t.length / 3; e < i; ++e)
      yield this.trianglePolygon(e);
  }
  trianglePolygon(t) {
    const e = new xe();
    return this.renderTriangle(t, e), e.value();
  }
}
function pt(r, t, e, i) {
  const s = r.length, n = new Float64Array(s * 2);
  for (let o = 0; o < s; ++o) {
    const l = r[o];
    n[o * 2] = t.call(i, l, o, r), n[o * 2 + 1] = e.call(i, l, o, r);
  }
  return n;
}
function* ft(r, t, e, i) {
  let s = 0;
  for (const n of r)
    yield t.call(i, n, s, r), yield e.call(i, n, s, r), ++s;
}
var ue = (
  /** @class */
  function() {
    function r(t) {
      this._value = NaN, typeof t == "string" ? this._seed = this.hashCode(t) : typeof t == "number" ? this._seed = this.getSafeSeed(t) : this._seed = this.getSafeSeed(r.MIN + Math.floor((r.MAX - r.MIN) * Math.random())), this.reset();
    }
    return r.prototype.next = function(t, e) {
      return t === void 0 && (t = 0), e === void 0 && (e = 1), this.recalculate(), this.map(this._value, r.MIN, r.MAX, t, e);
    }, r.prototype.nextInt = function(t, e) {
      return t === void 0 && (t = 10), e === void 0 && (e = 100), this.recalculate(), Math.floor(this.map(this._value, r.MIN, r.MAX, t, e + 1));
    }, r.prototype.nextString = function(t, e) {
      t === void 0 && (t = 16), e === void 0 && (e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
      for (var i = ""; i.length < t; )
        i += this.nextChar(e);
      return i;
    }, r.prototype.nextChar = function(t) {
      return t === void 0 && (t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"), t.substr(this.nextInt(0, t.length - 1), 1);
    }, r.prototype.nextArrayItem = function(t) {
      return t[this.nextInt(0, t.length - 1)];
    }, r.prototype.nextBoolean = function() {
      return this.recalculate(), this._value > 0.5;
    }, r.prototype.skip = function(t) {
      for (t === void 0 && (t = 1); t-- > 0; )
        this.recalculate();
    }, r.prototype.reset = function() {
      this._value = this._seed;
    }, r.prototype.recalculate = function() {
      this._value = this.xorshift(this._value);
    }, r.prototype.xorshift = function(t) {
      return t ^= t << 13, t ^= t >> 17, t ^= t << 5, t;
    }, r.prototype.map = function(t, e, i, s, n) {
      return (t - e) / (i - e) * (n - s) + s;
    }, r.prototype.hashCode = function(t) {
      var e = 0;
      if (t)
        for (var i = t.length, s = 0; s < i; s++)
          e = (e << 5) - e + t.charCodeAt(s), e |= 0, e = this.xorshift(e);
      return this.getSafeSeed(e);
    }, r.prototype.getSafeSeed = function(t) {
      return t === 0 ? 1 : t;
    }, r.MIN = -2147483648, r.MAX = 2147483647, r;
  }()
);
class yt {
  constructor(t) {
    p(this, "SEED");
    p(this, "GRIDSIZE", 7);
    p(this, "JITTER", 0.6);
    p(this, "points", []);
    p(this, "voronoi");
    p(this, "polygonData", []);
    p(this, "deterministicRng");
    p(this, "walkerIndices");
    this.SEED = t, this.deterministicRng = new ue(this.SEED), this.initializePoints(), this.initializeVoronoi();
  }
  initializePoints() {
    for (let t = 1; t <= this.GRIDSIZE; t++)
      for (let e = 1; e <= this.GRIDSIZE; e++)
        this.points.push({
          x: t + this.JITTER * (this.deterministicRng.next() - this.deterministicRng.next()),
          y: e + this.JITTER * (this.deterministicRng.next() - this.deterministicRng.next())
        });
  }
  initializeVoronoi() {
    const t = we.from(this.points, (e) => e.x, (e) => e.y);
    this.voronoi = t.voronoi([0, 0, this.GRIDSIZE, this.GRIDSIZE]);
  }
  randomWalkGen() {
    let t = new ue(this.SEED), e = [24];
    const i = /* @__PURE__ */ new Set([24]), s = [-1, 1, -7, 7], n = (a) => a % 7 !== 0 && a % 7 !== 6 && a > 6 && a < 42;
    let o = 0, l = 0;
    for (; e.length < 20; ) {
      const a = e[l];
      let h = s.filter((u) => {
        const c = a + u;
        return n(c) && !i.has(c);
      });
      if (h.length > 0) {
        const u = h[t.nextInt(0, h.length - 1)], c = a + u;
        e.push(c), i.add(c), l = e.length - 1;
      } else
        l === 1 && (l = t.nextInt(0, e.length - 1)), l--;
      if (o++, o > 200)
        throw new Error("Random walker error: Infinite loop");
    }
    return e;
  }
  calculatePolygonData() {
    const t = Array.from(this.voronoi.cellPolygons()), e = this.randomWalkGen();
    for (let i in e) {
      const s = e[i];
      let n = [];
      for (let l = 0; l < t[s].length; l++)
        n.push({
          x: Number(t[s][l][0]),
          y: Number(t[s][l][1])
        });
      const o = this.calculateCentroid(n);
      this.polygonData.push({
        index: Number(i),
        polygonIndex: 0,
        vertices: n,
        reducedVertices: [],
        lootBoxesCoordinates: [],
        gradientAreaCoordinates: [],
        outerBorderCoordinates: [],
        centroid: o
      });
    }
    this.addPolygonIndices(e), this.calculateReducedVertices(), this.calculateLootboxCoordinates(), this.calculateGradientAreaCoordinates(), this.calculateOuterBorder();
  }
  getWorldBounds() {
    const t = this.walkerIndices ?? this.randomWalkGen();
    let e, i, s, n;
    const o = this.polygonData.find((l) => t.includes(l.index));
    if (!o)
      return null;
    e = i = s = n = o.vertices[0];
    for (let l of this.polygonData)
      if (t.includes(l.index))
        for (const a of l.vertices)
          a.y < e.y && (e = a), a.y > i.y && (i = a), a.x < s.x && (s = a), a.x > n.x && (n = a);
    return {
      x: s.x,
      y: e.y,
      width: n.x - s.x,
      height: i.y - e.y
    };
  }
  calculateCentroid(t) {
    let e = { x: 0, y: 0 };
    for (const i of t)
      e.x += Number(i.x), e.y += Number(i.y);
    return e.x /= t.length, e.y /= t.length, e;
  }
  addPolygonIndices(t) {
    for (let e = 0; e < this.polygonData.length; e++)
      this.polygonData[e].polygonIndex = t[e];
  }
  calculateReducedVertices() {
    for (const t of this.polygonData) {
      let e = this.calculateScaledVertices(t.vertices, 0.75);
      t.reducedVertices = e;
    }
  }
  calculateGradientAreaCoordinates() {
    for (const t of this.polygonData) {
      let e = this.calculateScaledVertices(t.vertices, 0.8);
      t.gradientAreaCoordinates = e;
    }
  }
  calculateOuterBorder() {
    for (const t of this.polygonData) {
      let e = this.calculateScaledVertices(t.vertices, 0.83);
      t.outerBorderCoordinates = e;
    }
  }
  calculateLootboxCoordinates() {
    for (let t = 1; t < this.polygonData.length; t++) {
      let e = this.calculateScaledVertices(this.polygonData[t].vertices, 0.3);
      this.polygonData[t].lootBoxesCoordinates = e;
    }
  }
  calculateScaledVertices(t, e) {
    const i = this.calculateCentroid(t);
    return t.map((s) => ({
      x: i.x + (s.x - i.x) * e,
      y: i.y + (s.y - i.y) * e
    }));
  }
}
class oe {
  constructor(t, e, i, s, n, o, l, a) {
    p(this, "scene");
    p(this, "x");
    p(this, "y");
    p(this, "tiles");
    p(this, "isLoaded");
    p(this, "occupiedCollidables");
    p(this, "occupiedNonCollidables");
    p(this, "chunkSize");
    p(this, "tileSize");
    p(this, "perlin");
    p(this, "polygonIdx");
    p(this, "tileXYs", []);
    p(this, "isDungeon");
    p(this, "biomeConfig");
    p(this, "deterministicRng");
    p(this, "collidableOverlapThreshold", 30);
    p(this, "elevationThreshold", 0.06);
    this.scene = t, this.x = e, this.y = i, this.chunkSize = s, this.tileSize = n, this.tiles = this.scene.add.group(), this.isLoaded = !1, this.occupiedCollidables = [], this.occupiedNonCollidables = [], this.perlin = a, this.polygonIdx = o, this.isDungeon = l, this.deterministicRng = new ue(this.scene.seed);
  }
  unload() {
    this.isLoaded && (this.tiles.clear(!0, !0), this.isLoaded = !1, this.occupiedCollidables = [], this.occupiedNonCollidables = [], this.tileXYs = []);
  }
  load() {
    if (!this.isLoaded) {
      let i = [], s = [];
      for (var t = 0; t < this.chunkSize; t++)
        for (var e = 0; e < this.chunkSize; e++) {
          const { lowElevationTiles: n, highElevationTiles: o } = this.generateDualGridTile(t, e, i, s);
          s = n, i = o;
        }
      this.isDungeon || (this.placeAssets(s, "lowElevation"), this.placeAssets(i, "highElevation")), this.isLoaded = !0;
    }
  }
  placeAssets(t, e) {
  }
  generateDualGridTile(t, e, i, s) {
    var n = this.x * (this.chunkSize * this.tileSize) + t * this.tileSize, o = this.y * (this.chunkSize * this.tileSize) + e * this.tileSize;
    this.tileXYs = [0, 1].flatMap(
      (a) => [0, 1].map((h) => ({
        x: this.x * this.chunkSize * this.tileSize + (t + a) * this.tileSize,
        y: this.y * this.chunkSize * this.tileSize + (e + h) * this.tileSize
      }))
    ), this.isDungeon && this.isWithinBounds(n, o) && this.placeDungeonTiles(t, e);
    const l = this.placeTerrainTiles();
    return l[0] < this.elevationThreshold - 0.1 ? s.push({ x: n, y: o }) : l[0] > this.elevationThreshold + 0.05 && i.push({ x: n, y: o }), { lowElevationTiles: s, highElevationTiles: i };
  }
  placeTerrainTiles() {
    let t = 0, e = this.tileXYs.map(({ x: l, y: a }) => !this.isWithinBounds(l, a) && this.isWithinBorderBounds(l, a) ? 1 : this.isWithinBorderBounds(l, a) ? this.perlin.perlin2(l / 500, a / 500) : (t |= 16, 0));
    const i = (l) => l < this.elevationThreshold ? 0 : 1;
    for (const l in e)
      t |= i(e[l]) << Number(l);
    const s = (this.tileXYs[0].x + this.tileXYs[2].x) / 2, n = (this.tileXYs[0].y + this.tileXYs[1].y) / 2, o = this.scene.add.image(s, n, this.biomeConfig.terrainSprite, t).setDepth(1);
    return this.tiles.add(o), e;
  }
  placeDungeonTiles(t, e, i = 10, s = 3) {
    if (t <= i + s && e <= i + s) {
      const n = (this.tileXYs[0].x + this.tileXYs[2].x) / 2, o = (this.tileXYs[0].y + this.tileXYs[1].y) / 2;
      if (t > s && e > s) {
        const l = this.scene.add.image(n, o, this.biomeConfig.dungeonAsset, t - (s + 1) + (e - (s + 1)) * 10).setDepth(4);
        this.tiles.add(l);
      }
    }
  }
  //helper functions
  isWithinBorderBounds(t, e) {
    return this.polygonIdx === -1 ? !1 : !!this.point_in_polygon({ x: t, y: e }, this.scene.polygonData[this.polygonIdx].gradientAreaCoordinates);
  }
  isWithinBounds(t, e) {
    return this.polygonIdx === -1 ? !1 : !!this.point_in_polygon({ x: t, y: e }, this.scene.polygonData[this.polygonIdx].reducedVertices);
  }
  isSpriteWithinBounds(t, e, i, s, n = 5) {
    if (this.polygonIdx === -1)
      return !1;
    const o = this.scene.polygonData[this.polygonIdx].reducedVertices, l = i / 2, a = { x: t - l - n, y: e + n }, h = { x: t + l + n, y: e + n }, u = { x: t - l - n, y: e - s - n }, c = { x: t + l + n, y: e - s - n };
    return this.point_in_polygon(a, o) && this.point_in_polygon(h, o) && this.point_in_polygon(u, o) && this.point_in_polygon(c, o);
  }
  point_in_polygon(t, e) {
    const i = e.length;
    var s = t.x, n = t.y;
    let o = !1, l = e[0], a;
    for (let h = 1; h <= i; h++) {
      if (a = e[h % i], n > Math.min(l.y, a.y) && n <= Math.max(l.y, a.y) && s <= Math.max(l.x, a.x)) {
        const u = (n - l.y) * (a.x - l.x) / (a.y - l.y) + l.x;
        (l.x === a.x || s <= u) && (o = !o);
      }
      l = a;
    }
    return o;
  }
  isOverlapping(t, e, i, s, n) {
    const o = n.isCollidable ? this.occupiedCollidables : this.occupiedNonCollidables, l = n.isCollidable ? this.collidableOverlapThreshold : 0, a = t - i / 2, h = e - s;
    return o.some((u) => {
      const c = u.x - u.width / 2, d = u.y - u.height, m = a < c + u.width + l && a + i > c - l && h < d + u.height + l && h + s > d - l, f = a >= c && a + i <= c + u.width && h >= d && h + s <= d + u.height;
      return m || f;
    });
  }
  isOutsideChunkBounds(t, e, i, s) {
    const n = this.tileSize / 2, o = t - i / 2, l = e - s, a = this.x * this.chunkSize * this.tileSize, h = this.y * this.chunkSize * this.tileSize, u = a + this.chunkSize * this.tileSize, c = h + this.chunkSize * this.tileSize;
    return o < a + n || // Left boundary
    o + i > u - n || // Right boundary
    l < h + n || // Top boundary
    l + s > c - n;
  }
  // Helpers for child classes
  placeCollidableSprite(t, e, i, s) {
    if (!this.isOverlapping(t, e, s.width, s.height, { isCollidable: !0 }) && !this.isOutsideChunkBounds(t, e, s.width, s.height) && this.isSpriteWithinBounds(t, e, s.width, s.height)) {
      const n = this.scene.physics.add.sprite(t, e, i, s.name).setOrigin(0.5, 1).setDepth(s.depth), o = n.body;
      o.setSize(s.collisionBounds.x, s.collisionBounds.y), o.offset.set(s.collisionOffset.x, s.collisionOffset.y), n.setPushable(!1), this.scene.collidableObjects.add(n), this.tiles.add(n), this.occupiedCollidables.push({ x: t, y: e, width: s.width, height: s.height });
    }
  }
  placeNormalSprite(t, e, i, s, n = 9.6) {
    if (!this.isOverlapping(t, e, this.tileSize, this.tileSize, { isCollidable: !1 }) && !this.isOutsideChunkBounds(t, e, this.tileSize, this.tileSize) && this.isSpriteWithinBounds(t, e, this.tileSize, this.tileSize)) {
      const o = this.scene.add.image(t, e, i, String(s)).setDepth(n);
      return this.tiles.add(o), this.occupiedNonCollidables.push({ x: t, y: e, width: this.tileSize, height: this.tileSize }), !0;
    }
    return !1;
  }
  chooseRandomSprite(t) {
    return this.deterministicRng.nextArrayItem(t);
  }
}
class di extends ie.GameObjects.Sprite {
  constructor(e, i, s, n) {
    super(e, i, s, n);
    p(this, "scene");
    this.scene = e, this.scene.add.existing(this), this.setOrigin(0);
  }
}
const gt = [
  {
    name: "rock",
    range: [
      0.15,
      0.18
    ],
    collidableFrameIndex: 1,
    collidableFrameDepth: 10.1,
    collisionBounds: {
      x: 20,
      y: 15
    },
    collisionOffset: {
      x: 5,
      y: 10
    },
    collidableFrameWidth: 40,
    collidableFrameHeight: 55,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      -1,
      5
    ],
    extraCondition: {
      min: 0.16,
      max: 0.17
    }
  },
  {
    name: "rock",
    range: [
      0.26,
      0.3
    ],
    collidableFrameIndex: 1,
    collidableFrameDepth: 10.1,
    collisionBounds: {
      x: 20,
      y: 15
    },
    collisionOffset: {
      x: 5,
      y: 10
    },
    collidableFrameWidth: 40,
    collidableFrameHeight: 55,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      -1,
      5
    ],
    extraCondition: {
      min: 0.27,
      max: 0.29
    }
  },
  {
    name: "stall",
    range: [
      0.3,
      0.325
    ],
    collidableFrameIndex: 2,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 32,
      y: 22
    },
    collisionOffset: {
      x: 8,
      y: 16
    },
    collidableFrameWidth: 48,
    collidableFrameHeight: 48,
    nonCollidableFrames: [
      -1,
      -1,
      5,
      10
    ],
    extraCondition: {
      min: 0.31,
      max: 0.315
    }
  },
  {
    name: "tree-grass",
    range: [
      0.4,
      0.45
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 10,
      y: 10
    },
    collisionOffset: {
      x: 19,
      y: 50
    },
    collidableFrameWidth: 48,
    collidableFrameHeight: 64,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      8,
      3,
      4,
      11
    ],
    extraCondition: {
      min: 0.42,
      max: 0.44
    }
  },
  {
    name: "tree-grass",
    range: [
      0.5,
      0.58
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 10,
      y: 10
    },
    collisionOffset: {
      x: 19,
      y: 50
    },
    collidableFrameWidth: 48,
    collidableFrameHeight: 64,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      8,
      3,
      4,
      11
    ],
    extraCondition: {
      min: 0.52,
      max: 0.58
    }
  },
  {
    name: "tent",
    range: [
      0.58,
      0.6
    ],
    collidableFrameIndex: 3,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 38,
      y: 42
    },
    collisionOffset: {
      x: 5,
      y: 16
    },
    collidableFrameWidth: 48,
    collidableFrameHeight: 90,
    nonCollidableFrames: [
      -1,
      -1
    ],
    extraCondition: {
      min: 0.54,
      max: 0.57
    }
  },
  {
    name: "tree-grass",
    range: [
      0.6,
      0.1
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 10,
      y: 10
    },
    collisionOffset: {
      x: 19,
      y: 50
    },
    collidableFrameWidth: 48,
    collidableFrameHeight: 64,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      8,
      3,
      4,
      11
    ],
    extraCondition: {
      min: 0.62,
      max: 0.63
    }
  }
], bt = [
  {
    name: "dried-tree-1",
    range: [
      -0.1,
      0
    ],
    collidableFrameIndex: 4,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 18,
      y: 10
    },
    collisionOffset: {
      x: 18,
      y: 30
    },
    collidableFrameWidth: 55,
    collidableFrameHeight: 90,
    nonCollidableFrames: [
      -1,
      -1,
      6,
      14
    ],
    extraCondition: {
      min: -0.1,
      max: -0.09
    }
  },
  {
    name: "rock",
    range: [
      -0.32,
      -0.3
    ],
    collidableFrameIndex: 1,
    collidableFrameDepth: 10.1,
    collisionBounds: {
      x: 20,
      y: 15
    },
    collisionOffset: {
      x: 5,
      y: 10
    },
    collidableFrameWidth: 40,
    collidableFrameHeight: 55,
    nonCollidableFrames: [
      -1,
      -1,
      5,
      10
    ],
    extraCondition: {
      min: -0.34,
      max: -0.32
    }
  },
  {
    name: "dried-tree-2",
    range: [
      -0.25,
      -0.2
    ],
    collidableFrameIndex: 5,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 18,
      y: 10
    },
    collisionOffset: {
      x: 18,
      y: 30
    },
    collidableFrameWidth: 55,
    collidableFrameHeight: 90,
    nonCollidableFrames: [
      -1,
      -1,
      6,
      14
    ],
    extraCondition: {
      min: -0.23,
      max: -0.22
    }
  },
  {
    name: "tree-sand",
    range: [
      -0.6,
      -0.35
    ],
    collidableFrameIndex: 6,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 18,
      y: 13
    },
    collisionOffset: {
      x: 16,
      y: 44
    },
    collidableFrameWidth: 70,
    collidableFrameHeight: 80
  },
  {
    name: "house-sand",
    range: [
      -1,
      -0.55
    ],
    collidableFrameIndex: 7,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 80,
      y: 80
    },
    collisionOffset: {
      x: 0,
      y: 16
    },
    collidableFrameWidth: 80,
    collidableFrameHeight: 120,
    nonCollidableFrames: [
      -1,
      -1,
      9,
      9,
      9,
      12
    ],
    extraCondition: {
      min: -0.59,
      max: -0.58
    }
  }
], xt = {
  highElevation: gt,
  lowElevation: bt
};
class wt extends oe {
  constructor(t, e, i, s, n, o, l, a) {
    super(t, e, i, s, n, o, l, a), this.biomeConfig = {
      dungeonAsset: "ground-biome-dungeon",
      terrainSprite: "ground-biome",
      collidableObjectSprite: "ground-atlas",
      nonCollidableObjectSprite: "groundNonCollidable"
    }, this.collidableOverlapThreshold = 10;
  }
  placeAssets(t, e) {
    t.forEach(({ x: i, y: s }) => {
      const n = this.perlin.perlin2(i / 500, s / 500) - this.perlin.perlin2(i / 300, s / 300) * 0.5;
      var o = (n + 1) / 2, l = Phaser.Display.Color.Interpolate.ColorWithColor(
        new Phaser.Display.Color(0, 255, 0),
        // Blue for low values
        new Phaser.Display.Color(255, 0, 0),
        // // Red for high values
        100,
        Math.floor(o * 100)
        // Convert normalized value to range 0-100
      );
      Phaser.Display.Color.GetColor(l.r, l.g, l.b), this.isWithinBounds(i, s);
      const a = xt[e];
      for (const h of a) {
        const [u, c] = h.range;
        if (n >= u && n < c) {
          const d = {
            name: h.name,
            width: h.collidableFrameWidth,
            height: h.collidableFrameHeight,
            depth: h.collidableFrameDepth,
            collisionBounds: h.collisionBounds,
            collisionOffset: h.collisionOffset
          };
          this.placeCollidableSprite(i, s, this.biomeConfig.collidableObjectSprite, d);
        }
        if (h.extraCondition) {
          const { min: d, max: m } = h.extraCondition;
          if (n < d || n >= m)
            continue;
        }
        if (h.nonCollidableFrames) {
          const d = this.chooseRandomSprite(h.nonCollidableFrames);
          d !== -1 && ((d == 1 || d == 12) && this.placeNormalSprite(i, s, this.biomeConfig.nonCollidableObjectSprite, d) && this.placeNormalSprite(i + this.tileSize, s, this.biomeConfig.nonCollidableObjectSprite, d + 1), this.placeNormalSprite(i, s, this.biomeConfig.nonCollidableObjectSprite, d));
        }
      }
    });
  }
  placeDungeonTiles(t, e, i = 10, s = 3) {
    if (t <= i + s && e <= i + s) {
      const n = (this.tileXYs[0].x + this.tileXYs[2].x) / 2, o = (this.tileXYs[0].y + this.tileXYs[1].y) / 2;
      if (t > s && e > s) {
        const l = this.scene.physics.add.image(n, o, this.biomeConfig.dungeonAsset, t - (s + 1) + (e - (s + 1)) * 10).setDepth(4);
        e > 2 + s && e < 9 + s && (l.setPushable(!1), this.scene.collidableObjects.add(l)), this.tiles.add(l);
      }
    }
  }
}
const Ct = [
  {
    name: "waterRockPlaceholder",
    range: [
      0,
      0
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 11,
    collisionBounds: {
      x: 58,
      y: 60
    },
    collisionOffset: {
      x: 0,
      y: 0
    },
    collidableFrameWidth: 58,
    collidableFrameHeight: 64,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      -1,
      0,
      1
    ],
    extraCondition: {
      min: 0.3,
      max: 0.4
    }
  },
  {
    name: "waterRockPlaceholder",
    range: [
      0,
      0
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 11,
    collisionBounds: {
      x: 58,
      y: 60
    },
    collisionOffset: {
      x: 0,
      y: 0
    },
    collidableFrameWidth: 58,
    collidableFrameHeight: 64,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      2,
      3
    ],
    extraCondition: {
      min: 0.4,
      max: 0.44
    }
  },
  {
    name: "waterRockPlaceholder",
    range: [
      0,
      0
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 11,
    collisionBounds: {
      x: 58,
      y: 60
    },
    collisionOffset: {
      x: 0,
      y: 0
    },
    collidableFrameWidth: 58,
    collidableFrameHeight: 64,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      4,
      5,
      6
    ],
    extraCondition: {
      min: 0.55,
      max: 0.7
    }
  },
  {
    name: "waterRockPlaceholder",
    range: [
      0,
      0
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 11,
    collisionBounds: {
      x: 58,
      y: 60
    },
    collisionOffset: {
      x: 0,
      y: 0
    },
    collidableFrameWidth: 58,
    collidableFrameHeight: 64,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      9
    ],
    extraCondition: {
      min: 0,
      max: 0.2
    }
  }
], vt = [
  {
    name: "house",
    range: [
      -1,
      -0.6
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 11,
    collisionBounds: {
      x: 112,
      y: 60
    },
    collisionOffset: {
      x: 0,
      y: 15
    },
    collidableFrameWidth: 112,
    collidableFrameHeight: 80,
    nonCollidableFrames: [
      -1,
      18
    ],
    extraCondition: {
      min: -1,
      max: -0.98
    }
  },
  {
    name: "tree-1",
    range: [
      0.2,
      0.3
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 11,
    collisionBounds: {
      x: 10,
      y: 10
    },
    collisionOffset: {
      x: 11,
      y: 25
    },
    collidableFrameWidth: 32,
    collidableFrameHeight: 41,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      -1,
      11,
      12
    ],
    extraCondition: {
      min: 0.1,
      max: 0.4
    }
  },
  {
    name: "shop",
    range: [
      0,
      1e-3
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 11,
    collisionBounds: {
      x: 80,
      y: 70
    },
    collisionOffset: {
      x: 0,
      y: 25
    },
    collidableFrameWidth: 80,
    collidableFrameHeight: 100,
    nonCollidableFrames: [
      -1
    ],
    extraCondition: {
      min: -1e-3,
      max: 2e-3
    }
  },
  {
    name: "tree-1",
    range: [
      -0.12,
      0
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 11,
    collisionBounds: {
      x: 10,
      y: 10
    },
    collisionOffset: {
      x: 11,
      y: 25
    },
    collidableFrameWidth: 32,
    collidableFrameHeight: 41,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      -1,
      12,
      13
    ],
    extraCondition: {
      min: -0.12,
      max: -0.11
    }
  },
  {
    name: "fountain",
    range: [
      -0.15,
      -0.149
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 11,
    collisionBounds: {
      x: 58,
      y: 64
    },
    collisionOffset: {
      x: 0,
      y: 0
    },
    collidableFrameWidth: 58,
    collidableFrameHeight: 64,
    nonCollidableFrames: [
      -1,
      17,
      20
    ],
    extraCondition: {
      min: -0.151,
      max: -0.145
    }
  },
  {
    name: "tree-2",
    range: [
      -0.3,
      -0.2
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 11,
    collisionBounds: {
      x: 10,
      y: 10
    },
    collisionOffset: {
      x: 11,
      y: 25
    },
    collidableFrameWidth: 32,
    collidableFrameHeight: 41,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      -1,
      14,
      15
    ],
    extraCondition: {
      min: -0.51,
      max: -0.44
    }
  },
  {
    name: "tree-large",
    range: [
      -0.4,
      -0.3
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 11,
    collisionBounds: {
      x: 13,
      y: 10
    },
    collisionOffset: {
      x: 14,
      y: 47
    },
    collidableFrameWidth: 42,
    collidableFrameHeight: 62,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      -1,
      15,
      16
    ],
    extraCondition: {
      min: -0.61,
      max: -0.55
    }
  },
  {
    name: "tree-3",
    range: [
      -0.5,
      -0.4
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 11,
    collisionBounds: {
      x: 10,
      y: 10
    },
    collisionOffset: {
      x: 11,
      y: 30
    },
    collidableFrameWidth: 32,
    collidableFrameHeight: 48,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      14,
      15,
      16
    ],
    extraCondition: {
      min: -0.9,
      max: -0.6
    }
  }
], St = {
  highElevation: Ct,
  lowElevation: vt
};
let Ft = class extends oe {
  constructor(t, e, i, s, n, o, l, a) {
    super(t, e, i, s, n, o, l, a), this.biomeConfig = {
      dungeonAsset: "flying-biome-dungeon",
      terrainSprite: "flying-biome",
      collidableObjectSprite: "flying-atlas",
      nonCollidableObjectSprite: "flyingNonCollidable"
    }, this.elevationThreshold = 0.2;
  }
  placeAssets(t, e) {
    t.forEach(
      ({ x: i, y: s }) => {
        const n = this.perlin.perlin2(i / 500, s / 500) - this.perlin.perlin2(i / 300, s / 300) * 0.5;
        var o = (n + 1) / 2, l = Phaser.Display.Color.Interpolate.ColorWithColor(
          new Phaser.Display.Color(0, 255, 0),
          // Blue for low values
          new Phaser.Display.Color(255, 0, 0),
          // // Red for high values
          100,
          Math.floor(o * 100)
          // Convert normalized value to range 0-100
        );
        Phaser.Display.Color.GetColor(l.r, l.g, l.b), this.isWithinBounds(i, s);
        const a = St[e];
        for (const h of a) {
          const [u, c] = h.range;
          if (n >= u && n < c) {
            const d = {
              name: h.name,
              width: h.collidableFrameWidth,
              height: h.collidableFrameHeight,
              depth: h.collidableFrameDepth,
              collisionBounds: h.collisionBounds,
              collisionOffset: h.collisionOffset
            };
            this.placeCollidableSprite(i, s, this.biomeConfig.collidableObjectSprite, d);
          }
          if (h.extraCondition) {
            const { min: d, max: m } = h.extraCondition;
            if (n > d && n < m) {
              const f = this.chooseRandomSprite(h.nonCollidableFrames);
              f !== -1 && (f == 7 && this.placeNormalSprite(i, s, this.biomeConfig.nonCollidableObjectSprite, f) && this.placeNormalSprite(i + this.tileSize, s, this.biomeConfig.nonCollidableObjectSprite, f + 1), f == 9 && this.placeNormalSprite(i, s, this.biomeConfig.nonCollidableObjectSprite, f) && this.placeNormalSprite(i, s + this.tileSize, this.biomeConfig.nonCollidableObjectSprite, f + 1), this.placeNormalSprite(i, s, this.biomeConfig.nonCollidableObjectSprite, f));
            }
          }
        }
      }
    );
  }
};
const _t = [
  {
    name: "big-tree",
    range: [
      0.4,
      0.5
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 11,
    collisionBounds: {
      x: 40,
      y: 20
    },
    collisionOffset: {
      x: 90,
      y: 185
    },
    collidableFrameWidth: 200,
    collidableFrameHeight: 125,
    nonCollidableFrames: [
      -1,
      6,
      8
    ],
    extraCondition: {
      min: 0.6,
      max: 0.7
    }
  },
  {
    name: "rocks",
    range: [
      0,
      0.1
    ],
    collidableFrameIndex: 1,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 25,
      y: 10
    },
    collisionOffset: {
      x: 0,
      y: 7
    },
    collidableFrameWidth: 25,
    collidableFrameHeight: 25,
    nonCollidableFrames: [
      2,
      3,
      8
    ],
    extraCondition: {
      min: 0.1,
      max: 0.15
    }
  },
  {
    name: "lamp",
    range: [
      0.29,
      0.291
    ],
    collidableFrameIndex: 2,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 14,
      y: 1
    },
    collisionOffset: {
      x: 1,
      y: 37
    },
    collidableFrameWidth: 16,
    collidableFrameHeight: 42,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      8,
      0
    ],
    extraCondition: {
      min: 0.35,
      max: 0.41
    }
  },
  {
    name: "blue-stall",
    range: [
      0.28,
      0.285
    ],
    collidableFrameIndex: 3,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 50,
      y: 25
    },
    collisionOffset: {
      x: 2,
      y: 41
    },
    collidableFrameWidth: 54,
    collidableFrameHeight: 71,
    nonCollidableFrames: [
      -1,
      0
    ],
    extraCondition: {
      min: 0.3,
      max: 0.31
    }
  }
], kt = [
  {
    name: "green-shop",
    range: [
      -1,
      -0.55
    ],
    collidableFrameIndex: 7,
    collidableFrameDepth: 11,
    collisionBounds: {
      x: 90,
      y: 75
    },
    collisionOffset: {
      x: 0,
      y: 20
    },
    collidableFrameWidth: 90,
    collidableFrameHeight: 80,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      5,
      10
    ],
    extraCondition: {
      min: -0.52,
      max: -0.5
    }
  },
  {
    name: "green-house",
    range: [
      -0.42,
      -0.4
    ],
    collidableFrameIndex: 6,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 78,
      y: 48
    },
    collisionOffset: {
      x: 0,
      y: 20
    },
    collidableFrameWidth: 108,
    collidableFrameHeight: 73,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      4,
      9
    ],
    extraCondition: {
      min: -0.4,
      max: -0.38
    }
  },
  {
    name: "lamp",
    range: [
      -0.397,
      -0.396
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 15,
      y: 1
    },
    collisionOffset: {
      x: 1,
      y: 37
    },
    collidableFrameWidth: 16,
    collidableFrameHeight: 42,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      3
    ],
    extraCondition: {
      min: 0.35,
      max: 0.41
    }
  },
  {
    name: "plant-pot-large",
    range: [
      -0.31,
      -0.3
    ],
    collidableFrameIndex: 2,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 25,
      y: 5
    },
    collisionOffset: {
      x: 2,
      y: 18
    },
    collidableFrameWidth: 30,
    collidableFrameHeight: 23,
    nonCollidableFrames: [
      -1,
      -1,
      -1
    ],
    extraCondition: {
      min: 0.35,
      max: 0.41
    }
  },
  {
    name: "plant-pot",
    range: [
      -0.3,
      -0.295
    ],
    collidableFrameIndex: 1,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 14,
      y: 10
    },
    collisionOffset: {
      x: 1,
      y: 21
    },
    collidableFrameWidth: 14,
    collidableFrameHeight: 31,
    nonCollidableFrames: [
      -1,
      -1,
      -1
    ],
    extraCondition: {
      min: 0.35,
      max: 0.41
    }
  },
  {
    name: "medium-tree",
    range: [
      -0.2,
      -0.1
    ],
    collidableFrameIndex: 1,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 14,
      y: 10
    },
    collisionOffset: {
      x: 67,
      y: 85
    },
    collidableFrameWidth: 149,
    collidableFrameHeight: 120,
    nonCollidableFrames: [
      -1,
      -1,
      -1
    ],
    extraCondition: {
      min: 0.35,
      max: 0.41
    }
  },
  {
    name: "small-tree",
    range: [
      -0.1,
      -0.05
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 10,
      y: 10
    },
    collisionOffset: {
      x: 19,
      y: 45
    },
    collidableFrameWidth: 48,
    collidableFrameHeight: 64,
    nonCollidableFrames: [
      -1,
      -1,
      -1
    ],
    extraCondition: {
      min: 0.35,
      max: 0.41
    }
  },
  {
    name: "furnace",
    range: [
      -0.05,
      -0.04
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 26,
      y: 30
    },
    collisionOffset: {
      x: 0,
      y: 3
    },
    collidableFrameWidth: 26,
    collidableFrameHeight: 36,
    nonCollidableFrames: [
      -1,
      -1,
      -1
    ],
    extraCondition: {
      min: 0.35,
      max: 0.41
    }
  }
], Dt = {
  highElevation: _t,
  lowElevation: kt
};
class It extends oe {
  constructor(t, e, i, s, n, o, l = !1, a) {
    super(t, e, i, s, n, o, l, a), this.biomeConfig = {
      dungeonAsset: "steel-biome-dungeon",
      terrainSprite: "steel-biome",
      collidableObjectSprite: "steel-atlas",
      nonCollidableObjectSprite: "steelNonCollidable"
    }, this.collidableOverlapThreshold = 0;
  }
  placeAssets(t, e) {
    t.forEach(
      ({ x: i, y: s }) => {
        const n = this.perlin.perlin2(i / 500, s / 500) - this.perlin.perlin2(i / 300, s / 300) * 0.5;
        var o = (n + 1) / 2, l = Phaser.Display.Color.Interpolate.ColorWithColor(
          new Phaser.Display.Color(0, 255, 0),
          // Blue for low values
          new Phaser.Display.Color(255, 0, 0),
          // // Red for high values
          100,
          // Steps in gradient (arbitrary, can be tuned)
          Math.floor(o * 100)
          // Convert normalized value to range 0-100
        );
        Phaser.Display.Color.GetColor(l.r, l.g, l.b), this.isWithinBounds(i, s);
        const a = Dt[e];
        for (const h of a) {
          const [u, c] = h.range;
          if (n >= u && n < c) {
            const d = {
              name: h.name,
              width: h.collidableFrameWidth,
              height: h.collidableFrameHeight,
              depth: h.collidableFrameDepth,
              collisionBounds: h.collisionBounds,
              collisionOffset: h.collisionOffset
            };
            this.placeCollidableSprite(i, s, this.biomeConfig.collidableObjectSprite, d);
          }
          if (h.extraCondition) {
            const { min: d, max: m } = h.extraCondition;
            if (n > d && n < m) {
              const f = this.chooseRandomSprite(h.nonCollidableFrames);
              f !== -1 && this.placeNormalSprite(i, s, this.biomeConfig.nonCollidableObjectSprite, f);
            }
          }
        }
      }
    );
  }
}
const Et = [
  {
    name: "red-tree",
    range: [
      0.3,
      1
    ],
    collidableFrameIndex: 0,
    collidableFrameDepth: 11,
    collisionBounds: {
      x: 90,
      y: 30
    },
    collisionOffset: {
      x: 24,
      y: 97
    },
    collidableFrameWidth: 128,
    collidableFrameHeight: 127,
    nonCollidableFrames: [
      -1,
      22,
      24
    ],
    extraCondition: {
      min: 0.3,
      max: 0.34
    }
  },
  {
    name: "huge-house",
    range: [
      -1,
      -0.5
    ],
    collidableFrameIndex: 1,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 127,
      y: 100
    },
    collisionOffset: {
      x: 0,
      y: 30
    },
    collidableFrameWidth: 127,
    collidableFrameHeight: 133,
    nonCollidableFrames: [
      -1,
      24
    ],
    extraCondition: {
      min: -0.5,
      max: -0.47
    }
  },
  {
    name: "tree-1",
    range: [
      -0.4,
      -0.3
    ],
    collidableFrameIndex: 2,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 30,
      y: 10
    },
    collisionOffset: {
      x: 29,
      y: 84
    },
    collidableFrameWidth: 88,
    collidableFrameHeight: 94,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      14
    ],
    extraCondition: {
      min: 0,
      max: 0.1
    }
  },
  {
    name: "tree-2",
    range: [
      -0.4,
      -0.3
    ],
    collidableFrameIndex: 3,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 30,
      y: 10
    },
    collisionOffset: {
      x: 36,
      y: 100
    },
    collidableFrameWidth: 102,
    collidableFrameHeight: 110,
    nonCollidableFrames: [
      -1,
      -1,
      0
    ],
    extraCondition: {
      min: -0.22,
      max: -0.2
    }
  },
  {
    name: "tree-3",
    range: [
      -0.4,
      -0.3
    ],
    collidableFrameIndex: 4,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 30,
      y: 10
    },
    collisionOffset: {
      x: 30,
      y: 83
    },
    collidableFrameWidth: 90,
    collidableFrameHeight: 93,
    nonCollidableFrames: [
      -1,
      -1,
      6,
      10
    ],
    extraCondition: {
      min: 0.2,
      max: 0.21
    }
  },
  {
    name: "tree-4",
    range: [
      -0.4,
      -0.3
    ],
    collidableFrameIndex: 5,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 30,
      y: 10
    },
    collisionOffset: {
      x: 24.5,
      y: 80
    },
    collidableFrameWidth: 79,
    collidableFrameHeight: 90,
    nonCollidableFrames: [
      -1
    ],
    extraCondition: {
      min: 0.54,
      max: 0.57
    }
  }
], Pt = [
  {
    name: "big-house",
    range: [
      -0.2,
      -0.18
    ],
    collidableFrameIndex: 6,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 61,
      y: 30
    },
    collisionOffset: {
      x: 0,
      y: 31
    },
    collidableFrameWidth: 61,
    collidableFrameHeight: 61,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      -1,
      -1,
      22
    ],
    extraCondition: {
      min: -0.22,
      max: -0.12
    }
  },
  {
    name: "small-house",
    range: [
      -0.2,
      -0.18
    ],
    collidableFrameIndex: 7,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 47,
      y: 15
    },
    collisionOffset: {
      x: 0,
      y: 18
    },
    collidableFrameWidth: 47,
    collidableFrameHeight: 36,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      -1,
      -1,
      22
    ],
    extraCondition: {
      min: -0.24,
      max: -0.12
    }
  },
  {
    name: "pink-tree",
    range: [
      0.4,
      0.5
    ],
    collidableFrameIndex: 8,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 14,
      y: 10
    },
    collisionOffset: {
      x: 29,
      y: 89
    },
    collidableFrameWidth: 70,
    collidableFrameHeight: 99,
    nonCollidableFrames: [
      -1,
      -1,
      15
    ],
    extraCondition: {
      min: 0.4,
      max: 0.46
    }
  },
  {
    name: "tree-3",
    range: [
      -1,
      -0.3
    ],
    collidableFrameIndex: 4,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 30,
      y: 10
    },
    collisionOffset: {
      x: 30,
      y: 83
    },
    collidableFrameWidth: 90,
    collidableFrameHeight: 93,
    nonCollidableFrames: [
      -1,
      -1
    ],
    extraCondition: {
      min: 0,
      max: 0.2
    }
  },
  {
    name: "tree-4",
    range: [
      0.5,
      1
    ],
    collidableFrameIndex: 5,
    collidableFrameDepth: 10,
    collisionBounds: {
      x: 30,
      y: 10
    },
    collisionOffset: {
      x: 24.5,
      y: 80
    },
    collidableFrameWidth: 79,
    collidableFrameHeight: 90,
    nonCollidableFrames: [
      -1,
      -1,
      -1,
      17,
      18
    ],
    extraCondition: {
      min: 0.3,
      max: 0.32
    }
  }
], Ot = {
  highElevation: Et,
  lowElevation: Pt
};
class Tt extends oe {
  constructor(t, e, i, s, n, o, l, a) {
    super(t, e, i, s, n, o, l, a), this.biomeConfig = {
      dungeonAsset: "psychic-biome-dungeon",
      terrainSprite: "psychic-biome",
      collidableObjectSprite: "psychic-atlas",
      nonCollidableObjectSprite: "psychicNonCollidable"
    };
  }
  placeAssets(t, e) {
    t.forEach(({ x: i, y: s }) => {
      const n = this.perlin.perlin2(i / 300, s / 300);
      var o = (n + 1) / 2, l = Phaser.Display.Color.Interpolate.ColorWithColor(
        new Phaser.Display.Color(0, 255, 0),
        // Blue for low values
        new Phaser.Display.Color(255, 0, 0),
        // // Red for high values
        100,
        // Steps in gradient (arbitrary, can be tuned)
        Math.floor(o * 100)
        // Convert normalized value to range 0-100
      );
      Phaser.Display.Color.GetColor(l.r, l.g, l.b), this.isWithinBounds(i, s);
      const a = Ot[e];
      for (const h of a) {
        const [u, c] = h.range;
        if (n >= u && n < c) {
          const d = {
            name: h.name,
            width: h.collidableFrameWidth,
            height: h.collidableFrameHeight,
            depth: h.collidableFrameDepth,
            collisionBounds: h.collisionBounds,
            collisionOffset: h.collisionOffset
          };
          this.placeCollidableSprite(i, s, this.biomeConfig.collidableObjectSprite, d);
        }
        if (h.extraCondition) {
          const { min: d, max: m } = h.extraCondition;
          if (n < d || n >= m)
            continue;
        }
        if (h.nonCollidableFrames) {
          const d = this.chooseRandomSprite(h.nonCollidableFrames);
          if (d !== -1)
            switch (d) {
              case 0:
              case 15:
                this.placeVerticalSprite(i, s, this.biomeConfig.nonCollidableObjectSprite, d);
                break;
              case 14:
              case 17:
              case 22:
              case 23:
              case 24:
                this.placeNormalSprite(i, s, this.biomeConfig.nonCollidableObjectSprite, d);
                break;
              default:
                this.placeSquareSprite(i, s, this.biomeConfig.nonCollidableObjectSprite, d);
            }
        }
      }
    });
  }
  placeSquareSprite(t, e, i, s) {
    const n = [
      [t, e, i, s],
      [t + this.tileSize, e, i, s + 1],
      [t, e + this.tileSize, i, s + 2],
      [t + this.tileSize, e + this.tileSize, i, s + 3]
    ];
    for (const o of n)
      if (!this.placeNormalSprite(...o))
        break;
  }
  placeVerticalSprite(t, e, i, s) {
    const n = [
      [t, e, i, s],
      [t, e + this.tileSize, i, s + 1]
    ];
    for (const o of n)
      if (!this.placeNormalSprite(...o))
        break;
  }
  placeDungeonTiles(t, e, i = 10, s = 3) {
    if (t <= i + s && e <= i + s) {
      const n = (this.tileXYs[0].x + this.tileXYs[2].x) / 2, o = (this.tileXYs[0].y + this.tileXYs[1].y) / 2;
      if (t > s && e > s) {
        const l = this.scene.physics.add.image(n, o, this.biomeConfig.dungeonAsset, t - (s + 1) + (e - (s + 1)) * 10).setDepth(4);
        e > 2 + s && e < 7 + s && (l.setPushable(!1), this.scene.collidableObjects.add(l)), this.tiles.add(l);
      }
    }
  }
}
var Ce = /* @__PURE__ */ ((r) => (r.CENTRAL = "CENTRAL", r))(Ce || {}), se = /* @__PURE__ */ ((r) => (r.BELOW_PLAYER = "BELOW_PLAYER_LAYER", r.ABOVE_PLAYER = "ABOVE_PLAYER_LAYER", r.OBJECTS = "OBJECTS_LAYER", r.PORTAL_LAYER = "PORTAL_LAYER", r.PORTAL_LAYER_ABOVE = "PORTAL_LAYER_ABOVE", r.EFFECT_LAYER = "EFFECT_LAYER", r.GLTICH_LAYER = "GLITCH_OVERLAY", r))(se || {});
const V = (r) => `/assets/phaser/tilesets/${r}`, Ie = (r) => `/assets/phaser/characters/${r}`, j = (r) => `/assets/phaser/assetSprites/${r}`, he = (r) => `/assets/phaser/joystickAssets/${r}`;
class Ee extends oe {
  constructor(t, e, i, s, n, o, l) {
    super(t, e, i, s, n, o, !1, l), this.biomeConfig = {
      dungeonAsset: "ground-biome-dungeon",
      terrainSprite: "ground-biome",
      collidableObjectSprite: "ground-biome-collidable",
      nonCollidableObjectSprite: "ground-biome-non-collidable"
    };
  }
  unload() {
    this.isLoaded && (this.isLoaded = !1, this.isDungeon = !1, this.tiles.clear(!0, !0));
  }
  load() {
    if (!this.isLoaded) {
      for (var t = 0; t < this.chunkSize; t++)
        for (var e = 0; e < this.chunkSize; e++) {
          var i = this.x * (this.chunkSize * this.tileSize) + t * this.tileSize + this.tileSize / 2, s = this.y * (this.chunkSize * this.tileSize) + e * this.tileSize + this.tileSize / 2;
          const n = this.perlin.perlin2(i / 100, s / 100);
          let o = 16;
          n > 0.2 && (o = 32);
          const l = this.scene.add.image(i, s, this.biomeConfig.terrainSprite, o);
          this.tiles.add(l);
        }
      this.isLoaded = !0;
    }
  }
}
class Mt extends me.Image {
  constructor(e, i, s, n, o) {
    super(e, i + e.tileSize, s, n ? R.lootboxOpen.key : R.lootboxClosed.key);
    p(this, "ID");
    p(this, "isOpened");
    p(this, "canOpenLootbox", !1);
    p(this, "parentScene");
    p(this, "openImage");
    p(this, "openInProgess", !1);
    this.setDepth(4), this.isOpened = n, this.parentScene = e, this.ID = o, this.scale = 0.8, e.add.existing(this);
  }
  checkIfPlayerIsNear() {
    return this.parentScene.player ? Phaser.Math.Distance.Between(
      this.parentScene.player.x,
      this.parentScene.player.y,
      this.x,
      this.y
    ) < 50 : !1;
  }
  showPopup() {
    this.openImage || (this.openImage = this.parentScene.add.image(this.x, this.y - 40, R.openLootbox.key).setDepth(10).setScale(0.4));
  }
  triggerOpen() {
    this.openInProgess || (this.openInProgess = !0, this.openImage && (console.log("Destroying openImage:", this.openImage), this.openImage.destroy(), this.openImage = void 0), this.Open());
  }
  Open() {
    this.openInProgess = !1, this.isOpened = !0, this.setTexture(R.lootboxOpen.key), this.openImage && (console.log("Destroying openImage in Open method:", this.openImage), this.openImage.destroy(), this.openImage = void 0);
  }
  saveState() {
    const e = JSON.parse(localStorage.getItem("lootboxState") || "{}");
    e[this.ID] = this.isOpened, localStorage.setItem("lootboxState", JSON.stringify(e));
  }
  loadState() {
    const e = JSON.parse(localStorage.getItem("lootboxState") || "{}");
    this.isOpened = e[this.ID] || !1, this.setTexture(this.isOpened ? R.lootboxOpen.key : R.lootboxClosed.key);
  }
  update() {
    if (this.isOpened)
      return;
    const e = this.checkIfPlayerIsNear();
    e && !this.canOpenLootbox ? this.showPopup() : !e && this.canOpenLootbox && this.openImage && (console.log("Destroying openImage in Open method:", this.openImage), this.openImage.destroy(), this.openImage = void 0), this.canOpenLootbox = e, this.canOpenLootbox && !this.openInProgess && this.parentScene.ekey.isDown && this.triggerOpen();
  }
}
function At(r, t, e, i) {
  const s = new ue(i), n = s.nextInt(-1, 1), o = s.nextInt(-1, 1);
  var l = t * e * Math.round((r.x + n) / (t * e)), a = t * e * Math.round((r.y + o) / (t * e));
  return l = l / t / e, a = a / t / e, { x: l, y: a };
}
class H {
  constructor(t, e, i) {
    this.x = t, this.y = e, this.z = i;
  }
  dot2(t, e) {
    return this.x * t + this.y * e;
  }
  dot3(t, e, i) {
    return this.x * t + this.y * e + this.z * i;
  }
}
class Bt {
  constructor(t = 0, e = []) {
    p(this, "permutationTable", [
      151,
      160,
      137,
      91,
      90,
      15,
      131,
      13,
      201,
      95,
      96,
      53,
      194,
      233,
      7,
      225,
      140,
      36,
      103,
      30,
      69,
      142,
      8,
      99,
      37,
      240,
      21,
      10,
      23,
      190,
      6,
      148,
      247,
      120,
      234,
      75,
      0,
      26,
      197,
      62,
      94,
      252,
      219,
      203,
      117,
      35,
      11,
      32,
      57,
      177,
      33,
      88,
      237,
      149,
      56,
      87,
      174,
      20,
      125,
      136,
      171,
      168,
      68,
      175,
      74,
      165,
      71,
      134,
      139,
      48,
      27,
      166,
      77,
      146,
      158,
      231,
      83,
      111,
      229,
      122,
      60,
      211,
      133,
      230,
      220,
      105,
      92,
      41,
      55,
      46,
      245,
      40,
      244,
      102,
      143,
      54,
      65,
      25,
      63,
      161,
      1,
      216,
      80,
      73,
      209,
      76,
      132,
      187,
      208,
      89,
      18,
      169,
      200,
      196,
      135,
      130,
      116,
      188,
      159,
      86,
      164,
      100,
      109,
      198,
      173,
      186,
      3,
      64,
      52,
      217,
      226,
      250,
      124,
      123,
      5,
      202,
      38,
      147,
      118,
      126,
      255,
      82,
      85,
      212,
      207,
      206,
      59,
      227,
      47,
      16,
      58,
      17,
      182,
      189,
      28,
      42,
      223,
      183,
      170,
      213,
      119,
      248,
      152,
      2,
      44,
      154,
      163,
      70,
      221,
      153,
      101,
      155,
      167,
      43,
      172,
      9,
      129,
      22,
      39,
      253,
      19,
      98,
      108,
      110,
      79,
      113,
      224,
      232,
      178,
      185,
      112,
      104,
      218,
      246,
      97,
      228,
      251,
      34,
      242,
      193,
      238,
      210,
      144,
      12,
      191,
      179,
      162,
      241,
      81,
      51,
      145,
      235,
      249,
      14,
      239,
      107,
      49,
      192,
      214,
      31,
      181,
      199,
      106,
      157,
      184,
      84,
      204,
      176,
      115,
      121,
      50,
      45,
      127,
      4,
      150,
      254,
      138,
      236,
      205,
      93,
      222,
      114,
      67,
      29,
      24,
      72,
      243,
      141,
      128,
      195,
      78,
      66,
      215,
      61,
      156,
      180
    ]);
    p(this, "grad3", [
      new H(1, 1, 0),
      new H(-1, 1, 0),
      new H(1, -1, 0),
      new H(-1, -1, 0),
      new H(1, 0, 1),
      new H(-1, 0, 1),
      new H(1, 0, -1),
      new H(-1, 0, -1),
      new H(0, 1, 1),
      new H(0, -1, 1),
      new H(0, 1, -1),
      new H(0, -1, -1)
    ]);
    p(this, "perm", new Array(512));
    p(this, "gradP", new Array(512));
    p(this, "peakPoints", []);
    p(this, "F2", 0.5 * (Math.sqrt(3) - 1));
    p(this, "G2", (3 - Math.sqrt(3)) / 6);
    p(this, "F3", 1 / 3);
    p(this, "G3", 1 / 6);
    t > 0 && t < 1 && (t *= 65536), t = Math.floor(t), t < 256 && (t |= t << 8);
    for (let i = 0; i < 256; i++) {
      let s;
      i & 1 ? s = this.permutationTable[i] ^ t & 255 : s = this.permutationTable[i] ^ t >> 8 & 255, this.perm[i] = this.perm[i + 256] = s, this.gradP[i] = this.gradP[i + 256] = this.grad3[s % 12];
    }
    this.peakPoints = e;
  }
  simplex2(t, e) {
    let i, s, n;
    const o = (t + e) * this.F2;
    let l = Math.floor(t + o), a = Math.floor(e + o);
    const h = (l + a) * this.G2, u = t - l + h, c = e - a + h;
    let d, m;
    u > c ? (d = 1, m = 0) : (d = 0, m = 1);
    const f = u - d + this.G2, y = c - m + this.G2, w = u - 1 + 2 * this.G2, g = c - 1 + 2 * this.G2;
    l &= 255, a &= 255;
    const x = this.gradP[l + this.perm[a]], C = this.gradP[l + d + this.perm[a + m]], _ = this.gradP[l + 1 + this.perm[a + 1]];
    let F = 0.5 - u * u - c * c;
    F < 0 ? i = 0 : (F *= F, i = F * F * x.dot2(u, c));
    let I = 0.5 - f * f - y * y;
    I < 0 ? s = 0 : (I *= I, s = I * I * C.dot2(f, y));
    let E = 0.5 - w * w - g * g;
    return E < 0 ? n = 0 : (E *= E, n = E * E * _.dot2(w, g)), 70 * (i + s + n);
  }
  simplex3(t, e, i) {
    let s, n, o, l;
    const a = (t + e + i) * this.F3;
    let h = Math.floor(t + a), u = Math.floor(e + a), c = Math.floor(i + a);
    const d = (h + u + c) * this.G3, m = t - h + d, f = e - u + d, y = i - c + d;
    let w, g, x, C, _, F;
    m >= f ? f >= y ? (w = 1, g = 0, x = 0, C = 1, _ = 1, F = 0) : m >= y ? (w = 1, g = 0, x = 0, C = 1, _ = 0, F = 1) : (w = 0, g = 0, x = 1, C = 1, _ = 0, F = 1) : f < y ? (w = 0, g = 0, x = 1, C = 0, _ = 1, F = 1) : m < y ? (w = 0, g = 1, x = 0, C = 0, _ = 1, F = 1) : (w = 0, g = 1, x = 0, C = 1, _ = 1, F = 0);
    const I = m - w + this.G3, E = f - g + this.G3, P = y - x + this.G3, b = m - C + 2 * this.G3, S = f - _ + 2 * this.G3, v = y - F + 2 * this.G3, k = m - 1 + 3 * this.G3, O = f - 1 + 3 * this.G3, M = y - 1 + 3 * this.G3;
    h &= 255, u &= 255, c &= 255;
    const L = this.gradP[h + this.perm[u + this.perm[c]]], D = this.gradP[h + w + this.perm[u + g + this.perm[c + x]]], A = this.gradP[h + C + this.perm[u + _ + this.perm[c + F]]], z = this.gradP[h + 1 + this.perm[u + 1 + this.perm[c + 1]]];
    let B = 0.6 - m * m - f * f - y * y;
    B < 0 ? s = 0 : (B *= B, s = B * B * L.dot3(m, f, y));
    let W = 0.6 - I * I - E * E - P * P;
    W < 0 ? n = 0 : (W *= W, n = W * W * D.dot3(I, E, P));
    let U = 0.6 - b * b - S * S - v * v;
    U < 0 ? o = 0 : (U *= U, o = U * U * A.dot3(b, S, v));
    let ee = 0.6 - k * k - O * O - M * M;
    return ee < 0 ? l = 0 : (ee *= ee, l = ee * ee * z.dot3(k, O, M)), 32 * (s + n + o + l);
  }
  // ##### Perlin noise stuff
  fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  lerp(t, e, i) {
    return (1 - i) * t + i * e;
  }
  calculatePeakInfluence(t, e, i) {
    const s = t - i.x, n = e - i.y, o = Math.sqrt(s * s + n * n);
    if (o >= i.falloffRadius)
      return 0;
    const l = 0.5 * (1 + Math.cos(Math.PI * o / i.falloffRadius));
    return i.intensity * l;
  }
  perlin2(t, e) {
    let i = Math.floor(t), s = Math.floor(e);
    t = t - i, e = e - s, i = i & 255, s = s & 255;
    const n = this.gradP[i + this.perm[s]].dot2(t, e), o = this.gradP[i + this.perm[s + 1]].dot2(t, e - 1), l = this.gradP[i + 1 + this.perm[s]].dot2(t - 1, e), a = this.gradP[i + 1 + this.perm[s + 1]].dot2(t - 1, e - 1), h = this.fade(t), u = this.lerp(
      this.lerp(n, l, h),
      this.lerp(o, a, h),
      this.fade(e)
    );
    let c = 0;
    for (const d of this.peakPoints)
      c += this.calculatePeakInfluence(t + i, e + s, d);
    return Math.min(1, Math.max(-1, u + c));
  }
  // Add a new peak point
  addPeakPoint(t, e, i, s) {
    this.peakPoints.push({ x: t, y: e, intensity: i, falloffRadius: s }), console.log(this.peakPoints);
  }
  // Clear all peak points
  clearPeakPoints() {
    this.peakPoints = [];
  }
  // perlin3(x: number, y: number, z: number): number {
  //   // Find unit grid cell containing point
  //   let X = Math.floor(x),
  //     Y = Math.floor(y),
  //     Z = Math.floor(z);
  //   // Get relative xyz coordinates of point within that cell
  //   x = x - X;
  //   y = y - Y;
  //   z = z - Z;
  //   // Wrap the integer cells at 255 (smaller integer period can be introduced here)
  //   X = X & 255;
  //   Y = Y & 255;
  //   Z = Z & 255;
  //   // Calculate noise contributions from each of the eight corners
  //   const n000 = this.gradP[X + this.perm[Y + this.perm[Z]]].dot3(x, y, z);
  //   const n001 = this.gradP[X + this.perm[Y + this.perm[Z + 1]]].dot3(x, y, z - 1);
  //   const n010 = this.gradP[X + this.perm[Y + 1 + this.perm[Z]]].dot3(x, y - 1, z);
  //   const n011 = this.gradP[X + this.perm[Y + 1 + this.perm[Z + 1]]].dot3(x, y - 1, z - 1);
  //   const n100 = this.gradP[X + 1 + this.perm[Y + this.perm[Z]]].dot3(x - 1, y, z);
  //   const n101 = this.gradP[X + 1 + this.perm[Y + this.perm[Z + 1]]].dot3(x - 1, y, z - 1);
  //   const n110 = this.gradP[X + 1 + this.perm[Y + 1 + this.perm[Z]]].dot3(x - 1, y - 1, z);
  //   const n111 = this.gradP[X + 1 + this.perm[Y + 1 + this.perm[Z + 1]]].dot3(x - 1, y - 1, z - 1);
  //   // Compute the fade curve value for x, y, z
  //   const u = this.fade(x);
  //   const v = this.fade(y);
  //   const w = this.fade(z);
  //   // Interpolate
  //   return this.lerp(
  //     this.lerp(this.lerp(n000, n100, u), this.lerp(n001, n101, u), w),
  //     this.lerp(this.lerp(n010, n110, u), this.lerp(n011, n111, u), w),
  //     v
  //   );
  // }
}
class Rt {
  constructor(t, e) {
    p(this, "debug", !1);
    p(this, "baseVelocityX", 15);
    p(this, "baseVelocityY", 15);
    p(this, "currVelocityX", 0);
    p(this, "currVelocityY", 0);
    p(this, "limitX", 10);
    p(this, "limitY", 10);
    p(this, "x");
    p(this, "y");
    p(this, "angle", 0);
    p(this, "parentScene");
    p(this, "parentPlayer");
    p(this, "followPlayer", !1);
    p(this, "radius", 500);
    p(this, "graphics");
    p(this, "ghostCircle");
    this.parentScene = t, this.parentPlayer = e, this.x = e.x, this.y = e.y, t.cameras.main.startFollow(this, !0, 0.1, 0.1, 1, 1), this.debug && (this.graphics = t.add.graphics(), this.ghostCircle = t.add.graphics());
  }
  getAngle() {
    const t = this.parentPlayer.x - this.x, e = this.parentPlayer.y - this.y;
    this.angle = Math.atan2(e, t);
  }
  getDistance() {
    const t = this.parentPlayer.x - this.x, e = this.parentPlayer.y - this.y;
    return Math.sqrt(t * t + e * e);
  }
  update() {
    const t = this.getDistance(), e = this.parentPlayer.x, i = this.parentPlayer.y, s = this.x - this.limitX, n = this.x + this.limitX, o = this.y - this.limitY, l = this.y + this.limitY;
    if ((!this.followPlayer && (e < s || e > n || i < o || i > l) || this.parentPlayer.currSpeed === 0) && (this.followPlayer = !0), this.followPlayer && t <= 5 && (this.followPlayer = !1), this.followPlayer) {
      this.getAngle();
      let a = t / this.radius * 1.2;
      this.currVelocityX = this.baseVelocityX * a, this.currVelocityY = this.baseVelocityY * a, this.parentScene.checkActive && (this.currVelocityX *= this.parentPlayer.cheatFactor, this.currVelocityY *= this.parentPlayer.cheatFactor), this.x += this.currVelocityX * Math.cos(this.angle), this.y += this.currVelocityY * Math.sin(this.angle);
    }
    this.debug && this.graphics && this.ghostCircle && (this.graphics.clear(), this.graphics.lineStyle(2, 65280, 1), this.graphics.strokeRect(s, o, 2 * this.limitX, 2 * this.limitY), this.ghostCircle.clear(), this.ghostCircle.lineStyle(2, 16711680, 1), this.ghostCircle.strokeCircle(this.x, this.y, 50));
  }
}
const Pe = {
  up: {
    startFrame: 0,
    endFrame: 15
  },
  down: {
    startFrame: 64,
    endFrame: 79
  },
  right: {
    startFrame: 32,
    endFrame: 47
  },
  idle: {
    startFrame: 48,
    endFrame: 63
  },
  left: {
    startFrame: 16,
    endFrame: 31
  }
};
class Lt extends He.Arcade.Sprite {
  constructor(e, i, s, n, o, l) {
    super(e, i, s, n, l);
    p(this, "cursor");
    p(this, "wKey");
    p(this, "aKey");
    p(this, "sKey");
    p(this, "dKey");
    p(this, "shiftKey");
    p(this, "velocity", R.player.velocity);
    p(this, "parentScene");
    p(this, "ghostPlayer");
    p(this, "currSpeed", 0);
    p(this, "cheatFactor", 2);
    p(this, "changeCharacter", (e) => {
      this.setTexture(e), this.setupAnimations();
    });
    this.parentScene = e, this.scale = window.innerHeight / (R.player.frameWidth * 10), this.cursor = o, this.setUpKeys(), this.setOrigin(0.5, 0.5), e.physics.add.existing(this), this.body.setSize(this.body.width * 0.5, this.body.height, !0), this.body.setOffset(this.body.offset.x, this.body.offset.y + 26), this.setScale(0.2), e.add.existing(this).setDepth(5), this.ghostPlayer = new Rt(this.parentScene, this);
  }
  setUpKeys() {
    this.wKey = this.parentScene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.W
    ), this.aKey = this.parentScene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.A
    ), this.sKey = this.parentScene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    ), this.dKey = this.parentScene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.D
    ), this.shiftKey = this.parentScene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SHIFT
    );
  }
  setupAnimations() {
    Object.keys(Pe).forEach((e) => {
      const i = Pe[e];
      this.anims.remove(e), this.anims.create({
        key: e,
        frames: this.anims.generateFrameNumbers(
          this.parentScene.characterURL,
          {
            start: i.startFrame,
            end: i.endFrame
          }
        ),
        frameRate: R.player.frameRate,
        repeat: -1
      });
    });
  }
  idle() {
    this.currSpeed = 0, this.setVelocityX(0), this.setVelocityY(0), this.anims.play("idle", !0);
  }
  moveUp(e) {
    this.currSpeed = this.velocity * -e, this.setVelocityY(-e * this.velocity), this.setVelocityX(0), this.anims.play("up", !0);
  }
  moveRight(e) {
    this.currSpeed = this.velocity * e, this.setVelocityX(e * this.velocity), this.setVelocityY(0), this.anims.play("right", !0);
  }
  moveDown(e) {
    this.currSpeed = this.velocity * e, this.setVelocityY(e * this.velocity), this.setVelocityX(0), this.anims.play("down", !0);
  }
  moveLeft(e) {
    this.currSpeed = this.velocity * -e, this.setVelocityX(-e * this.velocity), this.setVelocityY(0), this.anims.play("left", !0);
  }
  update() {
    var e, i, s, n, o, l, a, h;
    if (this.cursor) {
      if (this.cheatFactor = 2, this.cursor.up.isDown || (e = this.wKey) != null && e.isDown ? (i = this.shiftKey) != null && i.isDown && this.parentScene.checkActive ? this.moveUp(this.cheatFactor) : this.moveUp(1) : this.cursor.right.isDown || (s = this.dKey) != null && s.isDown ? (n = this.shiftKey) != null && n.isDown && this.parentScene.checkActive ? this.moveRight(this.cheatFactor) : this.moveRight(1) : this.cursor.down.isDown || (o = this.sKey) != null && o.isDown ? (l = this.shiftKey) != null && l.isDown && this.parentScene.checkActive ? this.moveDown(this.cheatFactor) : this.moveDown(1) : this.cursor.left.isDown || (a = this.aKey) != null && a.isDown ? (h = this.shiftKey) != null && h.isDown && this.parentScene.checkActive ? this.moveLeft(this.cheatFactor) : this.moveLeft(1) : this.idle(), this.parentScene.joystick) {
        const u = this.parentScene.joystick.forceX, c = this.parentScene.joystick.forceY;
        Math.abs(u) > 0.1 || Math.abs(c) > 0.1 ? Math.abs(u) > Math.abs(c) ? u > 0 ? this.moveRight(1) : this.moveLeft(1) : c > 0 ? this.moveDown(1) : this.moveUp(1) : this.idle();
      }
      this.ghostPlayer && this.ghostPlayer.update();
    }
  }
}
class Kt extends me.Image {
  constructor(e, i, s, n, o = !1) {
    super(
      e,
      i + e.tileSize,
      s,
      R.openDungeon.key
    );
    p(this, "parentScene");
    p(this, "canEnter");
    p(this, "dungeonIndex");
    p(this, "diasbled");
    this.setVisible(!1), e.add.existing(this), this.parentScene = e, this.setDepth(10), this.setScale(0.4), this.canEnter = !1, this.dungeonIndex = n, this.diasbled = o;
  }
  checkIfPlayerIsNear() {
    return !this.parentScene.player || this.diasbled ? !1 : Math.abs(this.parentScene.player.x - this.x) < 100 && Math.abs(this.parentScene.player.y - this.y) < 100;
  }
  update() {
    if (!this.diasbled) {
      const e = this.checkIfPlayerIsNear();
      e && !this.canEnter && (console.log("Player is near dungeon", this.dungeonIndex), this.setVisible(!0)), !e && this.canEnter && this.visible && this.setVisible(!1), this.canEnter = e, this.canEnter && this.parentScene.input.keyboard.checkDown(this.parentScene.ekey, 250) && console.log("Entering dungeon", this.dungeonIndex);
    }
  }
}
const T = {
  name: Ce.CENTRAL,
  asset: {
    tileset: {
      key: "CENTRAL_TILESET",
      url: "/assets/phaser/maps/central/tileset.webp"
    },
    map: {
      key: "CENTRAL_MAP",
      url: "/assets/phaser/maps/central/map.json"
    },
    overlay: {
      key: "CENTRAL_OVERLAY",
      url: "/assets/phaser/maps/central/overlay.webp"
    },
    glitchTiles: {
      key: "GLITCH_OVERLAY",
      url: "/assets/phaser/maps/central/glitch-tiles.webp"
    },
    glitchMap: {
      key: "GLITCH_MAP",
      url: "/assets/phaser/maps/central/glitch-overlay.json"
    }
  },
  spawnPoint: {
    x: 42,
    y: 43
  },
  Teleporter: {
    portal: {
      tileset: {
        key: "CENTRAL_PORTAL_TILESET",
        url: "/assets/phaser/maps/central/portal.webp"
      },
      map: {
        key: "CENTRAL_PORTAL_MAP",
        url: "/assets/phaser/maps/central/portal.json"
      }
    },
    anchorPoint: {
      x: 42,
      y: 42
    },
    staticAnim: !1,
    effectMap: {
      key: "CENTRAL_EFFECT_MAP",
      url: "/assets/phaser/maps/central/effects.json"
    }
  },
  lootboxesDetails: [],
  Interactives: [
    {
      name: "MARKET",
      image: {
        url: "/assets/phaser/objects/open-market.webp",
        key: "open-market"
      },
      event: " ",
      coordinates: {
        x: -19,
        y: -20
      }
    },
    {
      name: "LEADERBOARD",
      image: {
        url: "/assets/phaser/objects/open-leaderboard.webp",
        key: "open-leader"
      },
      event: " ",
      coordinates: {
        x: 6,
        y: -26
      }
    },
    {
      name: "ARENA",
      image: {
        url: "/assets/phaser/objects/start-match.webp",
        key: "start-match"
      },
      event: " ",
      coordinates: {
        x: 18,
        y: 13
      }
    }
  ]
};
Ce.CENTRAL + "";
const zt = Phaser.Input.Keyboard.Key, Oe = Phaser.Input.Keyboard.KeyCodes, Te = ["up", "down", "left", "right"];
class Nt {
  constructor(t) {
    this.scene = t, this.keys = {}, this.cursorKeys = {}, this.noKeyDown = !0;
    for (var e = 0, i = Te.length; e < i; e++) {
      var s = Te[e];
      this.addKey(s), this.cursorKeys[s] = this.keys[s];
    }
  }
  shutdown(t) {
    this.scene = void 0;
    for (var e in this.keys)
      this.keys[e].destroy();
    this.keys = void 0, this.cursorKeys = void 0;
  }
  destroy(t) {
    shutdown(t);
  }
  createCursorKeys() {
    return this.cursorKeys;
  }
  setKeyState(t, e) {
    var i = this.keys[t];
    return i.enabled ? (e && (this.noKeyDown = !1), i.isDown !== e && (ce.timeStamp = Date.now(), ce.keyCode = i.keyCode, e ? i.onDown(ce) : i.onUp(ce)), this) : this;
  }
  clearAllKeysState() {
    this.noKeyDown = !0;
    for (var t in this.keys)
      this.setKeyState(t, !1);
    return this;
  }
  getKeyState(t) {
    return this.keys[t];
  }
  get upKeyDown() {
    return this.keys.up.isDown;
  }
  get downKeyDown() {
    return this.keys.down.isDown;
  }
  get leftKeyDown() {
    return this.keys.left.isDown;
  }
  get rightKeyDown() {
    return this.keys.right.isDown;
  }
  get anyKeyDown() {
    return !this.noKeyDown;
  }
  addKey(t, e) {
    return e === void 0 && (e = t), typeof e == "string" && (e = e.toUpperCase(), Oe.hasOwnProperty(e) && (e = Oe[e])), this.keys[t] = new zt(this.scene, e), this;
  }
  addKeys(t) {
    for (var e = 0, i = t.length; e < i; e++)
      this.addKey(t[e]);
    return this;
  }
}
var ce = {
  timeStamp: 0,
  keyCode: 0,
  altKey: !1,
  ctrlKey: !1,
  shiftKey: !1,
  metaKey: !1,
  location: 0
};
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var Wt = 180 / Math.PI, jt = function(r) {
  return r * Wt;
};
const Ht = {
  "up&down": 0,
  "left&right": 1,
  "4dir": 2,
  "8dir": 3
};
var Yt = function(r, t, e) {
  switch (e === void 0 ? e = {} : e === !0 && (e = Vt), e.left = !1, e.right = !1, e.up = !1, e.down = !1, r = (r + 360) % 360, t) {
    case 0:
      r < 180 ? e.down = !0 : e.up = !0;
      break;
    case 1:
      r > 90 && r <= 270 ? e.left = !0 : e.right = !0;
      break;
    case 2:
      r > 45 && r <= 135 ? e.down = !0 : r > 135 && r <= 225 ? e.left = !0 : r > 225 && r <= 315 ? e.up = !0 : e.right = !0;
      break;
    case 3:
      r > 22.5 && r <= 67.5 ? (e.down = !0, e.right = !0) : r > 67.5 && r <= 112.5 ? e.down = !0 : r > 112.5 && r <= 157.5 ? (e.down = !0, e.left = !0) : r > 157.5 && r <= 202.5 ? e.left = !0 : r > 202.5 && r <= 247.5 ? (e.left = !0, e.up = !0) : r > 247.5 && r <= 292.5 ? e.up = !0 : (r > 292.5 && r <= 337.5 && (e.up = !0), e.right = !0);
      break;
  }
  return e;
}, Vt = {};
const $ = Phaser.Utils.Objects.GetValue, Gt = Phaser.Math.Distance.Between, Xt = Phaser.Math.Angle.Between;
class Ut extends Nt {
  constructor(t, e) {
    super(t), this.resetFromJSON(e);
  }
  resetFromJSON(t) {
    this.start == null && (this.start = { x: 0, y: 0 }), this.end == null && (this.end = { x: 0, y: 0 }), this._enable = void 0, this.setEnable($(t, "enable", !0)), this.setMode($(t, "dir", "8dir")), this.setDistanceThreshold($(t, "forceMin", 16));
    var e = $(t, "start.x", null), i = $(t, "start.y", null), s = $(t, "end.x", null), n = $(t, "end.y", null);
    return this.setVector(e, i, s, n), this;
  }
  toJSON() {
    return {
      enable: this.enable,
      dir: this.dirMode,
      forceMin: this.forceMin,
      start: {
        x: this.start.x,
        y: this.start.y
      },
      end: {
        x: this.end.x,
        y: this.end.y
      }
    };
  }
  setMode(t) {
    return typeof t == "string" && (t = Ht[t]), this.dirMode = t, this;
  }
  get enable() {
    return this._enable;
  }
  set enable(t) {
    if (this._enable !== t)
      return t || this.clearVector(), this._enable = t, this;
  }
  setEnable(t) {
    return t === void 0 && (t = !0), this.enable = t, this;
  }
  toggleEnable() {
    return this.setEnable(!this.enable), this;
  }
  setDistanceThreshold(t) {
    return t < 0 && (t = 0), this.forceMin = t, this;
  }
  clearVector() {
    return this.start.x = 0, this.start.y = 0, this.end.x = 0, this.end.y = 0, this.clearAllKeysState(), this;
  }
  setVector(t, e, i, s) {
    if (!this.enable)
      return this;
    if (t === null)
      return this.clearVector(), this;
    if (i === void 0 && (i = t, t = 0, s = e, e = 0), this.start.x = t, this.start.y = e, this.end.x = i, this.end.y = s, this.forceMin > 0 && this.force < this.forceMin)
      return this.clearVector(), this;
    this.noKeyDown = !0;
    var n = Yt(this.angle, this.dirMode, !0);
    for (var o in n)
      this.setKeyState(o, n[o]);
    return this;
  }
  get forceX() {
    return this.end.x - this.start.x;
  }
  get forceY() {
    return this.end.y - this.start.y;
  }
  get force() {
    return Gt(this.start.x, this.start.y, this.end.x, this.end.y);
  }
  get rotation() {
    return Xt(this.start.x, this.start.y, this.end.x, this.end.y);
  }
  get angle() {
    return jt(this.rotation);
  }
  get octant() {
    var t = 0;
    return this.rightKeyDown ? t = this.downKeyDown ? 45 : 0 : this.downKeyDown ? t = this.leftKeyDown ? 135 : 90 : this.leftKeyDown ? t = this.upKeyDown ? 225 : 180 : this.upKeyDown && (t = this.rightKeyDown ? 315 : 270), t;
  }
}
const Ae = {
  setEventEmitter(r, t) {
    return t === void 0 && (t = Phaser.Events.EventEmitter), this._privateEE = r === !0 || r === void 0, this._eventEmitter = this._privateEE ? new t() : r, this;
  },
  destroyEventEmitter() {
    return this._eventEmitter && this._privateEE && this._eventEmitter.shutdown(), this;
  },
  getEventEmitter() {
    return this._eventEmitter;
  },
  on() {
    return this._eventEmitter && this._eventEmitter.on.apply(this._eventEmitter, arguments), this;
  },
  once() {
    return this._eventEmitter && this._eventEmitter.once.apply(this._eventEmitter, arguments), this;
  },
  off() {
    return this._eventEmitter && this._eventEmitter.off.apply(this._eventEmitter, arguments), this;
  },
  emit(r) {
    return this._eventEmitter && r && this._eventEmitter.emit.apply(this._eventEmitter, arguments), this;
  },
  addListener() {
    return this._eventEmitter && this._eventEmitter.addListener.apply(this._eventEmitter, arguments), this;
  },
  removeListener() {
    return this._eventEmitter && this._eventEmitter.removeListener.apply(this._eventEmitter, arguments), this;
  },
  removeAllListeners() {
    return this._eventEmitter && this._eventEmitter.removeAllListeners.apply(this._eventEmitter, arguments), this;
  },
  listenerCount() {
    return this._eventEmitter ? this._eventEmitter.listenerCount.apply(this._eventEmitter, arguments) : 0;
  },
  listeners() {
    return this._eventEmitter ? this._eventEmitter.listeners.apply(this._eventEmitter, arguments) : [];
  },
  eventNames() {
    return this._eventEmitter ? this._eventEmitter.eventNames.apply(this._eventEmitter, arguments) : [];
  }
};
var $t = function(r, t, e) {
  var i = r.camera;
  return i ? (e === void 0 ? e = {} : e === !0 && (e = Jt), i === t ? (e.x = r.worldX, e.y = r.worldY) : i.getWorldPoint(r.x, r.y, e), e) : null;
}, Jt = {};
const be = Phaser.Utils.Objects.GetValue, qt = Phaser.Geom.Circle, Zt = Phaser.Geom.Circle.Contains;
class Be extends Ut {
  constructor(t, e) {
    var i = t.scene;
    super(i, e);
    var s = be(e, "eventEmitter", void 0), n = be(e, "EventEmitterClass", void 0);
    this.setEventEmitter(s, n), this.scene = i, this.mainCamera = i.sys.cameras.main, this.pointer = void 0, this.gameObject = t, this.radius = be(e, "radius", 100), t.setInteractive(new qt(t.displayOriginX, t.displayOriginY, this.radius), Zt), this.boot();
  }
  resetFromJSON(t) {
    return super.resetFromJSON(t), this.pointer = void 0, this;
  }
  toJSON() {
    var t = super.toJSON();
    return t.radius = this.radius, t;
  }
  boot() {
    this.gameObject.on("pointerdown", this.onKeyDownStart, this), this.gameObject.on("pointerover", this.onKeyDownStart, this), this.scene.input.on("pointermove", this.onKeyDown, this), this.scene.input.on("pointerup", this.onKeyUp, this), this.gameObject.once("destroy", this.onParentDestroy, this);
  }
  shutdown(t) {
    this.scene && (this.scene.input.off("pointermove", this.onKeyDown, this), this.scene.input.off("pointerup", this.onKeyUp, this), this.destroyEventEmitter(), this.scene = void 0, this.mainCamera = void 0, this.pointer = void 0, this.gameObject = void 0, super.shutdown());
  }
  get enable() {
    return this._enable;
  }
  // Override setter of enable
  set enable(t) {
    if (this._enable !== t)
      return t || (this.pointer = void 0), super.enable = t, this;
  }
  destroy(t) {
    this.shutdown(t);
  }
  onParentDestroy(t, e) {
    this.destroy(e);
  }
  onKeyDownStart(t) {
    !t.isDown || this.pointer !== void 0 || (this.pointer = t, this.onKeyDown(t), this.emit("pointerdown", t));
  }
  onKeyDown(t) {
    if (this.pointer === t) {
      var e = $t(t, this.mainCamera, !0);
      if (e) {
        var i = t.camera, s = this.gameObject, n = s.x - i.scrollX * (s.scrollFactorX - 1), o = s.y - i.scrollY * (s.scrollFactorY - 1);
        this.setVector(n, o, e.x, e.y), this.end.x = e.x, this.end.y = e.y, this.emit("update");
      }
    }
  }
  onKeyUp(t) {
    this.pointer === t && (this.pointer = void 0, this.clearVector(), this.emit("update"), this.emit("pointerup", t));
  }
  forceUpdate() {
    var t = this.pointer;
    return !t || !t.isDown ? this : (this.onKeyDown(t), this);
  }
}
Object.assign(
  Be.prototype,
  Ae
);
const G = Phaser.Utils.Objects.GetValue;
class Re {
  constructor(t, e) {
    e === void 0 && (e = {});
    var i = G(e, "eventEmitter", void 0), s = G(e, "EventEmitterClass", void 0);
    this.setEventEmitter(i, s), e.eventEmitter = this.getEventEmitter(), this.scene = t, this.base = void 0, this.thumb = void 0, this.touchCursor = void 0, this.setRadius(G(e, "radius", 100)), this.addBase(G(e, "base", void 0), e), this.addThumb(G(e, "thumb", void 0));
    var n = G(e, "x", 0), o = G(e, "y", 0);
    this.base.setPosition(n, o), this.thumb.setPosition(n, o), G(e, "fixed", !0) && this.setScrollFactor(0), this.boot();
  }
  destroy() {
    this.destroyEventEmitter(), this.base.destroy(), this.thumb.destroy(), this.scene = void 0, this.base = void 0, this.thumb = void 0, this.touchCursor = void 0;
  }
  createCursorKeys() {
    return this.touchCursor.createCursorKeys();
  }
  get forceX() {
    return this.touchCursor.forceX;
  }
  get forceY() {
    return this.touchCursor.forceY;
  }
  get force() {
    return this.touchCursor.force;
  }
  get rotation() {
    return this.touchCursor.rotation;
  }
  get angle() {
    return this.touchCursor.angle;
  }
  get up() {
    return this.touchCursor.upKeyDown;
  }
  get down() {
    return this.touchCursor.downKeyDown;
  }
  get left() {
    return this.touchCursor.leftKeyDown;
  }
  get right() {
    return this.touchCursor.rightKeyDown;
  }
  get noKey() {
    return this.touchCursor.noKeyDown;
  }
  get pointerX() {
    return this.touchCursor.end.x;
  }
  get pointerY() {
    return this.touchCursor.end.y;
  }
  get pointer() {
    return this.touchCursor.pointer;
  }
  setPosition(t, e) {
    return this.x === t && this.y === e ? this : (this.x = t, this.y = e, this.forceUpdateThumb(), this);
  }
  set x(t) {
    this.x !== t && (this.base.x = t, this.thumb.x = t);
  }
  set y(t) {
    this.y !== t && (this.base.y = t, this.thumb.y = t);
  }
  get x() {
    return this.base.x;
  }
  get y() {
    return this.base.y;
  }
  setVisible(t) {
    return this.visible = t, this;
  }
  toggleVisible() {
    return this.visible = !this.visible, this;
  }
  get visible() {
    return this.base.visible;
  }
  set visible(t) {
    this.base.visible = t, this.thumb.visible = t, this.enable = t;
  }
  get enable() {
    return this.touchCursor.enable;
  }
  set enable(t) {
    this.touchCursor.setEnable(t);
  }
  setEnable(t) {
    return t === void 0 && (t = !0), this.enable = t, this;
  }
  toggleEnable() {
    return this.setEnable(!this.enable), this;
  }
  setRadius(t) {
    return this.radius = t, this;
  }
  addBase(t, e) {
    return this.base && this.base.destroy(), t === void 0 && (t = this.scene.add.circle(0, 0, this.radius).setStrokeStyle(3, 255)), e === void 0 && (e = {}), e.eventEmitter = this.getEventEmitter(), this.touchCursor = new Be(t, e), this.base = t, this;
  }
  addThumb(t) {
    return this.thumb && this.thumb.destroy(), t === void 0 && (t = this.scene.add.circle(0, 0, 40).setStrokeStyle(3, 65280)), this.thumb = t, this;
  }
  setScrollFactor(t) {
    return this.base.setScrollFactor(t), this.thumb.setScrollFactor(t), this;
  }
  boot() {
    this.on("update", this.update, this);
  }
  // Internal method
  update() {
    var t = this.touchCursor, e, i, s = t.dirMode;
    if (t.anyKeyDown)
      if (t.force > this.radius) {
        var n = t.rotation;
        e = s !== 0 ? Math.cos(n) * this.radius : 0, i = s !== 1 ? Math.sin(n) * this.radius : 0;
      } else
        e = s !== 0 ? t.forceX : 0, i = s !== 1 ? t.forceY : 0;
    else
      e = 0, i = 0;
    return this.thumb.x = this.base.x + e, this.thumb.y = this.base.y + i, this;
  }
  forceUpdateThumb() {
    return this.touchCursor.forceUpdate(), this;
  }
}
Object.assign(
  Re.prototype,
  Ae
);
class Qt extends me.Rectangle {
  constructor(e, i, s) {
    super(
      e,
      i,
      s
    );
    p(this, "parentScene");
    p(this, "startMatchImage");
    p(this, "matchmaking", !1);
    p(this, "canMatchmake", !0);
    this.parentScene = e, this.scale = 3, this.setDepth(4), e.add.existing(this);
  }
  checkIfPlayerIsNear() {
    return this.parentScene.player ? Math.abs(this.parentScene.player.x - this.x) < 100 && Math.abs(this.parentScene.player.y - this.y) < 100 : !1;
  }
  endMatchMaking() {
    this.canMatchmake = !0, this.matchmaking = !1, this.startMatchImage && (this.startMatchImage.visible = !0);
  }
  showPopup() {
    const e = this.parentScene.sys.game.device.os.desktop ? R.arena.startMatchImage.key : R.arena.startMatchImageMobile.key;
    this.startMatchImage = this.parentScene.add.image(this.x, this.y, e).setDepth(10).setScale(0.3);
  }
  triggerMatchmake() {
    this.matchmaking || (this.matchmaking = !0, this.parentScene.pauseGame(), this.startMatchImage && (this.startMatchImage.visible = !1));
  }
  update() {
    if (this.matchmaking)
      return;
    const e = this.checkIfPlayerIsNear();
    e && !this.canMatchmake && this.showPopup(), !e && this.canMatchmake && this.startMatchImage && (this.startMatchImage.visible = !1), this.canMatchmake = e;
    const i = () => this.parentScene.sys.game.device.os.desktop && this.parentScene.enterKey ? this.parentScene.enterKey.isDown : !this.parentScene.sys.game.device.os.desktop && this.parentScene.ekey ? this.parentScene.input.keyboard.checkDown(this.parentScene.ekey, 250) : !1;
    this.canMatchmake && i() && this.triggerMatchmake();
  }
}
class ei extends me.Image {
  constructor(e, i, s, n, o) {
    super(
      e,
      i,
      s,
      o
    );
    p(this, "parentScene");
    p(this, "canInteract");
    p(this, "eventToEmit");
    this.eventToEmit = n, this.setVisible(!1), e.add.existing(this), this.parentScene = e, this.setDepth(10), this.canInteract = !1, this.setScale(0.3);
  }
  checkIfPlayerIsNear() {
    return this.parentScene.player ? Math.abs(this.parentScene.player.x - this.x) < 100 && Math.abs(this.parentScene.player.y - this.y) < 100 : !1;
  }
  update() {
    const e = this.checkIfPlayerIsNear();
    e && !this.canInteract && this.setVisible(!0), !e && this.canInteract && this.visible && this.setVisible(!1), this.canInteract = e, this.canInteract && this.parentScene.input.keyboard.checkDown(this.parentScene.ekey, 250);
  }
}
class ti extends Me {
  constructor(e, i) {
    super({ key: "SceneMain", physics: { arcade: {} }, active: !0 });
    //overall map size
    p(this, "resolution", 3e3);
    p(this, "collidableObjects");
    p(this, "chunkSize", 16);
    p(this, "tileSize", 16);
    p(this, "characterURL", "adventurer");
    p(this, "loader", null);
    p(this, "checkActive", !1);
    p(this, "cheatCode", null);
    p(this, "cheatTimeout", null);
    p(this, "polygonData", []);
    p(this, "lootboxes", []);
    p(this, "lootboxDetails", []);
    p(this, "cursor");
    p(this, "ekey");
    p(this, "enterKey");
    p(this, "dungeonVertices", []);
    p(this, "chunks", []);
    p(this, "followPoint");
    p(this, "joystick");
    p(this, "EbuttonMobile");
    p(this, "eButtonImage");
    p(this, "homeButtonImage");
    p(this, "player", null);
    p(this, "spawnPoint");
    p(this, "keyW");
    p(this, "keyS");
    p(this, "keyA");
    p(this, "keyD");
    // indices of the polygons which are biomes
    p(this, "indices", []);
    p(this, "debugGraphics");
    p(this, "perlin");
    p(this, "dungeons", []);
    p(this, "dungeonObjects", []);
    p(this, "arena");
    p(this, "interactives", []);
    p(this, "seed");
    p(this, "polygons");
    p(this, "pauseGame", () => {
      this.scene.manager ? this.scene.pause() : this.scene && this.scene.systems && this.scene.systems.game && this.scene.systems.game.scene && (this.scene.manager = this.scene.systems.game.scene, this.scene.pause());
    });
    p(this, "resumeGame", () => {
      this.scene.manager ? this.scene.resume() : this.scene && this.scene.systems && this.scene.systems.game && this.scene.systems.game.scene && (this.scene.manager = this.scene.systems.game.scene, this.scene.resume());
    });
    this.perlin = new Bt(), this.lootboxDetails = e, this.seed = "erg", this.polygons = new yt(this.seed);
  }
  preload() {
    const { lootboxOpen: e, lootboxClosed: i, openLootbox: s, openDungeon: n } = R;
    this.load.image(e.key, e.url), this.load.image(i.key, i.url), this.load.image(s.key, s.url), this.load.image(n.key, n.url), this.checkForCheat(), this.load.image(R.arena.startMatchImage.key, R.arena.startMatchImage.url), this.load.image(R.arena.startMatchImageMobile.key, R.arena.startMatchImageMobile.url);
    for (let o = 0; o < 2; o++)
      this.load.image(T.Interactives[o].image.key, T.Interactives[o].image.url);
    this.load.spritesheet("adventurer", Ie("adventurer.webp"), {
      frameWidth: 256,
      frameHeight: 256
    }), this.indices = this.polygons.randomWalkGen(), this.load.plugin(
      "rexvirtualjoystickplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js",
      !0
    ), this.load.spritesheet(
      "ground-biome",
      V("ground-biome.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.spritesheet(
      "flying-biome",
      V("flying-biome.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.spritesheet(
      "psychic-biome",
      V("psychic-biome.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.spritesheet(
      "steel-biome",
      V("steel-biome.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.spritesheet(
      "groundNonCollidable",
      j("ground-biome-assets-noCollide.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.spritesheet(
      "flyingNonCollidable",
      j("flying-biome-assets-noCollide.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.spritesheet(
      "steelNonCollidable",
      j("steel-biome-assets-noCollide.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.spritesheet(
      "psychicNonCollidable",
      j("psychic-biome-assets-noCollide.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.atlas("ground-atlas", j("ground-biome-assets-collide-atlas.png"), j("ground-biome-assets-collide-atlas.json")), this.load.atlas("flying-atlas", j("flying-biome-assets-collide-atlas.png"), j("flying-biome-assets-collide-atlas.json")), this.load.atlas("steel-atlas", j("steel-biome-assets-collide-atlas.png"), j("steel-biome-assets-collide-atlas.json")), this.load.atlas("psychic-atlas", j("psychic-biome-assets-collide-atlas.png"), j("psychic-biome-assets-collide-atlas.json")), this.load.spritesheet(
      "ground-biome-dungeon",
      V("ground-biome-dungeon.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.spritesheet(
      "flying-biome-dungeon",
      V("flying-biome-dungeon.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.spritesheet(
      "steel-biome-dungeon",
      V("steel-biome-dungeon.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.spritesheet(
      "psychic-biome-dungeon",
      V("psychic-biome-dungeon.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.image(
      "joystick-inner",
      he("joystick-inner.webp")
    ), this.load.image(
      "joystick-outer",
      he("joystick-outer.webp")
    ), this.load.image(
      "home-button",
      he("homeButton.webp")
    ), this.load.image(
      "e-button",
      he("eButton.webp")
    ), this.load.image(
      T.asset.tileset.key,
      T.asset.tileset.url
    ), this.load.tilemapTiledJSON(
      T.asset.map.key,
      T.asset.map.url
    ), this.load.image(
      T.asset.overlay.key,
      T.asset.overlay.url
    ), this.load.image(
      T.asset.glitchTiles.key,
      T.asset.glitchTiles.url
    ), this.load.tilemapTiledJSON(
      T.asset.glitchMap.key,
      T.asset.glitchMap.url
    );
  }
  create() {
    this.cursor = this.input.keyboard.createCursorKeys(), this.ekey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E), this.enterKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    ), this.setPolygonData(), this.spawnPoint = { x: this.polygonData[0].centroid.x, y: this.polygonData[0].centroid.y }, this.player && this.player.destroy(), this.player = new Lt(
      this,
      this.spawnPoint.x,
      this.spawnPoint.y,
      this.characterURL,
      this.cursor
    ), this.player.changeCharacter(this.characterURL), this.sys.game.device.os.desktop ? this.cameras.main.setZoom(2.4) : this.cameras.main.setZoom(1.7), this.followPoint = new Phaser.Math.Vector2(
      this.spawnPoint.x,
      this.spawnPoint.y
    ), this.chunks = [], this.debugGraphics = this.add.graphics(), this.debugGraphics.lineStyle(2, 16711680, 1), this.physics.world.debugGraphic = this.debugGraphics, this.physics.world.drawDebug = !1, this.physics.world.debugGraphic.setAlpha(0), this.physics.world.debugGraphic.setDepth(5), this.collidableObjects = this.physics.add.group(), this.physics.add.collider(this.player, this.collidableObjects), this.loader = new Phaser.Loader.LoaderPlugin(this), this.addLootBoxes(), this.placeDungeonForEachPolygon(), this.spawnPoint.x == this.polygonData[0].centroid.x && this.spawnPoint.y == this.polygonData[0].centroid.y && this.setupCentralMap(this.spawnPoint.x, this.spawnPoint.y), this.sys.game.device.os.desktop || (this.setUpJoystick(), this.setupEButton()), this.setupHomeButton(), this.setupArena(), this.setupInteractives(), this.polygons.getWorldBounds();
  }
  checkForCheat() {
    this.input.keyboard.on("keydown", (e) => {
      if (e.key === "d" || e.key === "e" || e.key === "l" || e.key === "t" || e.key === "a" || e.key === "f" || e.key === "o" || e.key === "r" || e.key === "c" || e.key === "e") {
        const i = "deltaforce";
        this.checkActive || (this.cheatCode && !i.startsWith(this.cheatCode) && (this.cheatCode = null), this.cheatCode = (this.cheatCode || "") + e.key, this.cheatCode === "deltaforce" && (console.log("Cheat entered"), this.checkActive = !0), this.cheatTimeout && clearTimeout(this.cheatTimeout), this.cheatTimeout = setTimeout(() => {
          this.cheatCode = null;
        }, 2e3));
      } else
        this.cheatCode = null;
    });
  }
  setupEButton() {
    this.eButtonImage = this.add.image(this.cameras.main.width * 0.66, this.cameras.main.height * 0.7, "e-button").setScale(0.15), this.eButtonImage.setInteractive({ useHandCursor: !0 }), this.eButtonImage.setDepth(20), this.eButtonImage.setScrollFactor(0), this.eButtonImage.on("pointerdown", () => {
      console.log("E Button Clicked!"), this.ekey ? (this.ekey.isDown = !0, this.time.delayedCall(100, () => {
        this.ekey.isDown = !1;
      })) : console.error("Error: this.ekey is undefined!");
    });
  }
  setupHomeButton() {
    const e = this.sys.game.device.os.desktop ? this.cameras.main.width * 0.69 : this.cameras.main.width * 0.7, i = this.sys.game.device.os.desktop ? this.cameras.main.height * 0.69 : this.cameras.main.height * 0.7;
    this.homeButtonImage = this.add.image(e, i, "home-button").setScale(0.15), this.homeButtonImage.setInteractive({ useHandCursor: !0 }), this.homeButtonImage.setDepth(20), this.homeButtonImage.setScrollFactor(0), console.log("Circle Position:", this.homeButtonImage.x, this.homeButtonImage.y), this.homeButtonImage.on("pointerdown", () => {
      this.player.x = this.polygonData[0].centroid.x, this.player.y = this.polygonData[0].centroid.y;
    });
  }
  setUpJoystick() {
    const e = this.cameras.main.height;
    this.cameras.main.width;
    const i = 50, s = e / 1.5;
    console.log("window height" + this.cameras.main.height), console.log("x: " + i + " y: " + s), this.joystick = new Re(this, {
      x: 280,
      y: s,
      base: this.add.image(0, 0, "joystick-outer").setAlpha(0.8).setDepth(20).setScale(0.2),
      thumb: this.add.image(0, 0, "joystick-inner").setDepth(20).setScale(0.2),
      radius: 35,
      dir: "4dir"
    });
  }
  setupCentralMap(e, i) {
    const s = this.make.tilemap({ key: T.asset.map.key }), n = s.addTilesetImage(
      T.asset.tileset.key,
      T.asset.tileset.key,
      16,
      16,
      1,
      2
    ), o = s.addTilesetImage(
      T.asset.overlay.key,
      T.asset.overlay.key,
      16,
      16,
      1,
      2
    ), l = this.make.tilemap({ key: T.asset.glitchMap.key }), a = l.addTilesetImage(
      T.asset.glitchTiles.key,
      T.asset.glitchTiles.key,
      16,
      16
    );
    if (!n || !l || !o || !a)
      return;
    const h = s.widthInPixels, u = s.heightInPixels, c = e - h / 2, d = i - u / 2 - this.tileSize * 3, m = e - l.widthInPixels / 2, f = i - l.heightInPixels / 2 - this.tileSize * 3;
    s.createLayer(se.BELOW_PLAYER, n, c, d).setDepth(1), l.createLayer(se.GLTICH_LAYER, a, m, f).setDepth(2);
    const y = s.createLayer(se.OBJECTS, n, c, d).setDepth(5).setCollisionByProperty({ collides: !0 });
    s.createLayer(se.ABOVE_PLAYER, [n, o], c, d).setDepth(6), this.physics.add.collider(this.player, y);
  }
  setPolygonData() {
    this.polygons.voronoi.cellPolygons(), this.polygons.calculatePolygonData(), this.polygonData = this.polygons.polygonData, this.polygonData.forEach((e) => {
      e.vertices = e.vertices.map((i) => ({ x: i.x * this.resolution, y: i.y * this.resolution })), e.reducedVertices = e.reducedVertices.map((i) => ({ x: i.x * this.resolution, y: i.y * this.resolution })), e.lootBoxesCoordinates = e.lootBoxesCoordinates.map((i) => ({ x: i.x * this.resolution, y: i.y * this.resolution })), e.gradientAreaCoordinates = e.gradientAreaCoordinates.map((i) => ({ x: i.x * this.resolution, y: i.y * this.resolution })), e.outerBorderCoordinates = e.outerBorderCoordinates.map((i) => ({ x: i.x * this.resolution, y: i.y * this.resolution })), e.centroid = { x: e.centroid.x * this.resolution, y: e.centroid.y * this.resolution };
    }), console.log(this.polygons.polygonData);
  }
  setupInteractives() {
    if (T.Interactives) {
      if (this.interactives)
        for (let e = 0; e < this.interactives.length; e++)
          this.interactives[e].destroy();
      this.interactives = [];
      for (const e of T.Interactives)
        if (e.name !== "ARENA") {
          if (!this.spawnPoint)
            return;
          this.interactives.push(new ei(
            this,
            e.coordinates.x * this.tileSize + this.spawnPoint.x,
            e.coordinates.y * this.tileSize + this.spawnPoint.y,
            e.event,
            e.image.key
          )), console.log("Interactive setup", e.name, e.image.key);
        }
    }
  }
  setupArena() {
    !this.spawnPoint || !T.Interactives || (this.arena = new Qt(
      this,
      T.Interactives[2].coordinates.x * this.tileSize + this.spawnPoint.x,
      T.Interactives[2].coordinates.y * this.tileSize + this.spawnPoint.y
    ), console.log("Arena setup", this.arena.x, this.arena.y));
  }
  disableKeys() {
    this.input.keyboard && (this.input.keyboard.enabled = !1);
  }
  enableKeys() {
    this.input.keyboard && (this.input.keyboard.enabled = !0);
  }
  addLootBoxes() {
    let i = 0;
    for (let s of this.polygonData) {
      const n = [];
      for (let o of s.lootBoxesCoordinates) {
        let l = !0;
        for (let a of n)
          if (Phaser.Math.Distance.Between(o.x, o.y, a.x, a.y) < 500) {
            l = !1;
            break;
          }
        if (l && i < 65 && s.index !== 0) {
          console.log("lootbox", i);
          const a = new Mt(this, o.x, o.y, !1, i);
          a.loadState(), this.lootboxes.push(a), n.push(o), i++;
        }
      }
    }
    console.log("lootboxes", this.lootboxes.length);
  }
  handleOpenLootbox(e) {
    for (let s = 0; s < this.lootboxes.length; s++)
      if (this.lootboxes[s].ID === e) {
        this.lootboxes[s].Open();
        break;
      }
    const i = this.lootboxDetails;
    if (i !== void 0) {
      for (let s = 0; s < i.length; s++)
        if (i[s].ID === e) {
          i[s].isOpen = !0;
          break;
        }
    }
  }
  handleCharacterChange(e) {
    this.characterURL = e, this.loader && (this.loader.spritesheet(
      this.characterURL,
      Ie(this.characterURL),
      {
        frameWidth: R.player.frameWidth,
        frameHeight: R.player.frameHeight
      }
    ), this.loader.once("complete", () => {
      var i;
      (i = this.player) == null || i.changeCharacter(this.characterURL);
    }), this.sys.events && this.loader.start());
  }
  getCenterVertices() {
    return this.polygonData.map((i, s) => ({
      x: i.centroid.x,
      y: i.centroid.y,
      polygonIndex: i.polygonIndex
    }));
  }
  getDungeonVertices(e = 12345) {
    const i = this.getCenterVertices(), s = 500, n = (o) => {
      const l = Math.sin(e + o) * 2 * Math.PI % (2 * Math.PI);
      return { x: Math.cos(l) * s, y: Math.sin(l) * s };
    };
    return i.map((o, l) => {
      const a = n(l);
      return { x: o.x + a.x, y: o.y + a.y, index: o.polygonIndex };
    });
  }
  placeDungeonForEachPolygon() {
    console.log(this.polygonData);
    for (let e of this.polygonData) {
      let i = !1;
      e.index === 0 && (i = !0);
      const s = e.centroid, { x: n, y: o } = At(s, this.chunkSize, this.tileSize, this.seed);
      this.dungeons[e.index] = { x: n, y: o };
      const l = n * (this.chunkSize * this.tileSize) + this.chunkSize * this.tileSize / 2, a = o * (this.chunkSize * this.tileSize) + this.chunkSize * this.tileSize / 2;
      console.log("Peak:", e.index, l, a), this.dungeonObjects.push(new Kt(this, l, a, e.index, i)), this.perlin.addPeakPoint(l / 500, a / 500, 1, 20 * this.tileSize / 500), console.log("Dungeon:", this.dungeons[e.index]);
    }
  }
  isWithinBounds(e, i) {
    const s = this.chunkSize * this.tileSize, n = [
      { x: e * s, y: i * s },
      { x: (e + 1) * s, y: i * s },
      { x: e * s, y: (i + 1) * s },
      { x: (e + 1) * s, y: (i + 1) * s }
    ];
    for (let l of this.polygonData)
      for (let a of n)
        if (this.point_in_polygon(a, l.outerBorderCoordinates)) {
          var o;
          return l.index == 0 ? o = "home" : l.index >= 0 && l.index < 5 ? o = "flying" : l.index >= 5 && l.index < 10 ? o = "ground" : l.index >= 10 && l.index < 15 ? o = "steel" : o = "psychic", { withinBounds: !0, biomeType: o, index: l.index };
        }
    return { withinBounds: !1 };
  }
  point_in_polygon(e, i) {
    const s = i.length;
    var n = e.x, o = e.y;
    let l = !1, a = i[0], h;
    for (let u = 1; u <= s; u++) {
      if (h = i[u % s], o > Math.min(a.y, h.y) && o <= Math.max(a.y, h.y) && n <= Math.max(a.x, h.x)) {
        const c = (o - a.y) * (h.x - a.x) / (h.y - a.y) + a.x;
        (a.x === h.x || n <= c) && (l = !l);
      }
      a = h;
    }
    return l;
  }
  getChunk(e, i) {
    for (var s = null, n = 0; n < this.chunks.length; n++)
      this.chunks[n].x == e && this.chunks[n].y == i && (s = this.chunks[n]);
    return s;
  }
  checkIfDungeon(e, i) {
    for (let s of this.dungeons)
      if (s.x == e && s.y == i)
        return !0;
    return !1;
  }
  update() {
    var u;
    this.debugGraphics && this.debugGraphics.clear(), this.physics.world.drawDebug = !0, this.lootboxes.forEach((c) => c.update()), this.dungeonObjects.forEach((c) => c.update()), (u = this.arena) == null || u.update(), this.interactives.forEach((c) => c.update()), this.player && this.spawnPoint && (this.player.update(), this.events.emit("player-moved", Math.round(this.player.x - this.spawnPoint.x), Math.round(this.player.y - this.spawnPoint.y)));
    const e = this.chunkSize * this.tileSize;
    if (!this.player)
      return;
    const i = Math.round(this.player.x / e), s = Math.round(this.player.y / e);
    for (var n = i - 2; n < i + 2; n++)
      for (var o = s - 2; o < s + 2; o++) {
        const c = this.isWithinBounds(n, o), d = this.checkIfDungeon(n, o);
        if (c.withinBounds) {
          var l = this.getChunk(n, o);
          if (l == null) {
            let m;
            switch (c.biomeType) {
              case "home":
                if (typeof c.index == "number")
                  m = new Ee(this, n, o, this.chunkSize, this.tileSize, c.index, this.perlin);
                else
                  throw new Error("Expected result.index to be a number");
                break;
              case "steel":
                if (typeof c.index == "number")
                  n == 45 && o == 58 && console.log("isDungeon: ", d), m = new It(this, n, o, this.chunkSize, this.tileSize, c.index, d, this.perlin);
                else
                  throw new Error("Expected result.index to be a number");
                break;
              case "ground":
                if (typeof c.index == "number")
                  m = new wt(this, n, o, this.chunkSize, this.tileSize, c.index, d, this.perlin);
                else
                  throw new Error("Expected result.index to be a number");
                break;
              case "flying":
                if (typeof c.index == "number")
                  m = new Ft(this, n, o, this.chunkSize, this.tileSize, c.index, d, this.perlin);
                else
                  throw new Error("Expected result.index to be a number");
                break;
              case "psychic":
                if (typeof c.index == "number")
                  m = new Tt(this, n, o, this.chunkSize, this.tileSize, c.index, d, this.perlin);
                else
                  throw new Error("Expected result.index to be a number");
                break;
              default:
                throw new Error(`Unknown biome type: ${c.biomeType}`);
            }
            this.chunks.push(m);
          }
        } else {
          var l = this.getChunk(n, o);
          if (l === null) {
            const f = new Ee(this, n, o, this.chunkSize, this.tileSize, -1, this.perlin);
            this.chunks.push(f);
          }
        }
      }
    for (var a = 0; a < this.chunks.length; a++) {
      var h = this.chunks[a];
      Phaser.Math.Distance.Between(
        i,
        s,
        h.x,
        h.y
      ) < 3 || i - h.x > 0 && i - h.x < 4 ? h !== null && h.load() : h !== null && h.unload();
    }
  }
}
class ii extends Me {
  constructor() {
    super({ key: "coordinatesOverlay", active: !0 });
    p(this, "xText");
    p(this, "yText");
    p(this, "gameScene");
  }
  create() {
    this.xText = this.add.text(10, 0, "X: 0", { font: "20px Courier" }).setScrollFactor(0).setDepth(20), this.yText = this.add.text(10, 0, "Y: 0", { font: "20px Courier" }).setScrollFactor(0).setDepth(20), this.gameScene || (this.gameScene = this.scene.get("SceneMain")), this.updateTextPosition(), this.scale.on("resize", () => {
      this.updateTextPosition();
    }), this.gameScene.events.on("player-moved", this.handlePlayerMove, this);
  }
  updateTextPosition() {
    const { height: e } = this.cameras.main, i = { x: 10, y: 30 };
    this.xText && this.yText && (this.xText.setPosition(i.x, e - i.y - 20), this.yText.setPosition(i.x, e - i.y));
  }
  handlePlayerMove(e, i) {
    this.xText && this.yText && (this.xText.setText(`X: ${e}`), this.yText.setText(`Y: ${i}`));
  }
  update() {
  }
}
var Le = Object.defineProperty, si = Object.getOwnPropertyDescriptor, ni = (r, t, e) => t in r ? Le(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, le = (r, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? si(t, e) : t, n = r.length - 1, o; n >= 0; n--)
    (o = r[n]) && (s = (i ? o(t, e, s) : o(s)) || s);
  return i && s && Le(t, e, s), s;
}, oi = (r, t, e) => (ni(r, typeof t != "symbol" ? t + "" : t, e), e);
let X = class extends We {
  constructor() {
    super(...arguments);
    p(this, "freeRoamGame");
    p(this, "lootboxDetails", []);
    p(this, "characterURL", "");
    p(this, "clanFlagUrl", "");
    p(this, "seedString", "");
  }
  firstUpdated() {
    var t;
    this.lootboxDetails.forEach((e) => {
    }), this.freeRoamGame = new ie.Game({
      type: ie.AUTO,
      pixelArt: !0,
      parent: ((t = this.shadowRoot) == null ? void 0 : t.querySelector("#free-roam")) ?? void 0,
      scene: [
        new ti(
          this.lootboxDetails,
          this.seedString
        ),
        new ii()
      ],
      dom: {
        createContainer: !1
      },
      scale: {
        mode: ie.Scale.RESIZE,
        autoCenter: ie.Scale.CENTER_BOTH
      },
      fps: R.fps,
      backgroundColor: "#292634",
      physics: {
        default: "arcade",
        arcade: {
          gravity: { x: 0, y: 0 },
          debug: !1,
          fps: R.fps.target
        }
      },
      banner: !1
    });
  }
  disconnectedCallback() {
    this.freeRoamGame.destroy(!0, !1);
  }
  render() {
    const t = window.screen.width * window.devicePixelRatio, e = window.screen.height * window.devicePixelRatio;
    return window.innerHeight = e, window.innerWidth = t, je`<div id="free-roam"></div>`;
  }
};
oi(X, "styles", Ne`
		:host {
			display: block;
			width: 100%;
			height: 100%;
		}
	`);
le([
  pe({ type: Array })
], X.prototype, "lootboxDetails", 2);
le([
  pe({ type: String })
], X.prototype, "characterURL", 2);
le([
  pe({ type: String })
], X.prototype, "clanFlagUrl", 2);
le([
  pe({ type: String })
], X.prototype, "seedString", 2);
X = le([
  Ve("free-roam")
], X);
const mi = $e({
  tagName: "free-roam",
  elementClass: X,
  react: Ye
});
export {
  X as FreeRoam,
  mi as FreeRoamLayer
};
//# sourceMappingURL=freeroam-arcadia-23.mjs.map
