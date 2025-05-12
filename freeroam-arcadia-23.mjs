import { css as Ne, LitElement as Ke, html as He } from "lit";
import se, { GameObjects as pe, Physics as We, Scene as Me } from "phaser";
import "buffer";
import ze from "react";
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    s(i);
  new MutationObserver((i) => {
    for (const n of i)
      if (n.type === "childList")
        for (const o of n.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const n = {};
    return i.integrity && (n.integrity = i.integrity), i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? n.credentials = "include" : i.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n;
  }
  function s(i) {
    if (i.ep)
      return;
    i.ep = !0;
    const n = t(i);
    fetch(i.href, n);
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const je = (r) => (e) => typeof e == "function" ? ((t, s) => (customElements.define(t, s), s))(r, e) : ((t, s) => {
  const { kind: i, elements: n } = s;
  return { kind: i, elements: n, finisher(o) {
    customElements.define(t, o);
  } };
})(r, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ge = (r, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(t) {
  t.createProperty(e.key, r);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(t) {
  t.createProperty(e.key, r);
} };
function fe(r) {
  return (e, t) => t !== void 0 ? ((s, i, n) => {
    i.constructor.createProperty(n, s);
  })(r, e, t) : Ge(r, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ye;
((ye = window.HTMLSlotElement) === null || ye === void 0 ? void 0 : ye.prototype.assignedElements) != null;
const B = {
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
const Ye = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), Ee = /* @__PURE__ */ new WeakMap(), Ve = (r, e, t, s, i) => {
  const n = i == null ? void 0 : i[e];
  n === void 0 || t === s ? t == null && e in HTMLElement.prototype ? r.removeAttribute(e) : r[e] = t : ((o, l, a) => {
    let h = Ee.get(o);
    h === void 0 && Ee.set(o, h = /* @__PURE__ */ new Map());
    let d = h.get(l);
    a !== void 0 ? d === void 0 ? (h.set(l, d = { handleEvent: a }), o.addEventListener(l, d)) : d.handleEvent = a : d !== void 0 && (h.delete(l), o.removeEventListener(l, d));
  })(r, n, t);
};
function Xe(r = window.React, e, t, s, i) {
  let n, o, l;
  if (e === void 0) {
    const m = r;
    ({ tagName: o, elementClass: l, events: s, displayName: i } = m), n = m.react;
  } else
    n = r, l = t, o = e;
  const a = n.Component, h = n.createElement, d = new Set(Object.keys(s ?? {}));
  class c extends a {
    constructor() {
      super(...arguments), this.o = null;
    }
    t(p) {
      if (this.o !== null)
        for (const f in this.i)
          Ve(this.o, f, this.props[f], p ? p[f] : void 0, s);
    }
    componentDidMount() {
      this.t();
    }
    componentDidUpdate(p) {
      this.t(p);
    }
    render() {
      const { _$Gl: p, ...f } = this.props;
      this.h !== p && (this.u = (y) => {
        p !== null && ((b, C) => {
          typeof b == "function" ? b(C) : b.current = C;
        })(p, y), this.o = y, this.h = p;
      }), this.i = {};
      const x = { ref: this.u };
      for (const [y, b] of Object.entries(f))
        Ye.has(y) ? x[y === "className" ? "class" : y] = b : d.has(y) || y in l.prototype ? this.i[y] = b : x[y] = b;
      return h(o, x);
    }
  }
  c.displayName = i ?? l.name;
  const u = n.forwardRef((m, p) => h(c, { ...m, _$Gl: p }, m == null ? void 0 : m.children));
  return u.displayName = c.displayName, u;
}
const H = {
  LOOTBOX_OPEN: "LOOTBOX_OPEN",
  // event sent by phaser when a lootbox is opened
  LOOTBOX_OPENED: "LOOTBOX_OPENED",
  // event sent by the server to confirm that a lootbox has been opened
  START_MATCHMAKING: "START_MATCHMAKING",
  // event sent by phaser to start matchmaking
  RESUME_GAME: "RESUME_GAME",
  // event sent by react to resume the game
  PAUSE_GAME: "PAUSE_GAME",
  // event sent by react to pause the game
  CHANGE_CHARACTER: "CHANGE_CHARACTER",
  // event sent by react after character selection
  MATCH_ENDED: "MATCH_ENDED",
  // event sent by the react app when the match ends
  OPEN_DASHBOARD: "OPEN_DASHBOARD",
  // event sent by the react app when the dashboard is opened
  CLOSE_DASHBOARD: "CLOSE_DASHBOARD",
  // event sent by the react app when the dashboard is closed
  TELEPORT: "TELEPORT",
  // event sent by phaser to trigger teleport menu open
  TELEPORT_ANIM: "TELEPORT_ANIM",
  // event sent by react after destination has been selected, to play teleport animation
  TELEPORTED: "TELEPORTED",
  // event sent by phaser, to trigger the teleportation
  ENTER_DUNGEON: "ENTER_DUNGEON",
  // event sent by phaser to enter dungeon
  OPEN_MARKET: "OPEN_MARKET",
  // event sent by phaser, to open market menu
  OPEN_LEADERBOARD: "OPEN_LEADERBOARD",
  // event sent by phaser to open leaderboard
  OPEN_DAILY_LEADERBOARD: "OPEN_DAILY_LEADERBOARD"
  // event sent by phaser to open daily leaderboard
}, G = new Phaser.Events.EventEmitter(), Y = 11102230246251565e-32, L = 134217729, Ue = (3 + 8 * Y) * Y;
function ge(r, e, t, s, i) {
  let n, o, l, a, h = e[0], d = s[0], c = 0, u = 0;
  d > h == d > -h ? (n = h, h = e[++c]) : (n = d, d = s[++u]);
  let m = 0;
  if (c < r && u < t)
    for (d > h == d > -h ? (o = h + n, l = n - (o - h), h = e[++c]) : (o = d + n, l = n - (o - d), d = s[++u]), n = o, l !== 0 && (i[m++] = l); c < r && u < t; )
      d > h == d > -h ? (o = n + h, a = o - n, l = n - (o - a) + (h - a), h = e[++c]) : (o = n + d, a = o - n, l = n - (o - a) + (d - a), d = s[++u]), n = o, l !== 0 && (i[m++] = l);
  for (; c < r; )
    o = n + h, a = o - n, l = n - (o - a) + (h - a), h = e[++c], n = o, l !== 0 && (i[m++] = l);
  for (; u < t; )
    o = n + d, a = o - n, l = n - (o - a) + (d - a), d = s[++u], n = o, l !== 0 && (i[m++] = l);
  return (n !== 0 || m === 0) && (i[m++] = n), m;
}
function $e(r, e) {
  let t = e[0];
  for (let s = 1; s < r; s++)
    t += e[s];
  return t;
}
function oe(r) {
  return new Float64Array(r);
}
const Je = (3 + 16 * Y) * Y, qe = (2 + 12 * Y) * Y, Ze = (9 + 64 * Y) * Y * Y, Z = oe(4), Se = oe(8), _e = oe(12), Fe = oe(16), K = oe(4);
function Qe(r, e, t, s, i, n, o) {
  let l, a, h, d, c, u, m, p, f, x, y, b, C, S, E, D, k, I;
  const g = r - i, v = t - i, w = e - n, _ = s - n;
  S = g * _, u = L * g, m = u - (u - g), p = g - m, u = L * _, f = u - (u - _), x = _ - f, E = p * x - (S - m * f - p * f - m * x), D = w * v, u = L * w, m = u - (u - w), p = w - m, u = L * v, f = u - (u - v), x = v - f, k = p * x - (D - m * f - p * f - m * x), y = E - k, c = E - y, Z[0] = E - (y + c) + (c - k), b = S + y, c = b - S, C = S - (b - c) + (y - c), y = C - D, c = C - y, Z[1] = C - (y + c) + (c - D), I = b + y, c = I - b, Z[2] = b - (I - c) + (y - c), Z[3] = I;
  let O = $e(4, Z), A = qe * o;
  if (O >= A || -O >= A || (c = r - g, l = r - (g + c) + (c - i), c = t - v, h = t - (v + c) + (c - i), c = e - w, a = e - (w + c) + (c - n), c = s - _, d = s - (_ + c) + (c - n), l === 0 && a === 0 && h === 0 && d === 0) || (A = Ze * o + Ue * Math.abs(O), O += g * d + _ * l - (w * h + v * a), O >= A || -O >= A))
    return O;
  S = l * _, u = L * l, m = u - (u - l), p = l - m, u = L * _, f = u - (u - _), x = _ - f, E = p * x - (S - m * f - p * f - m * x), D = a * v, u = L * a, m = u - (u - a), p = a - m, u = L * v, f = u - (u - v), x = v - f, k = p * x - (D - m * f - p * f - m * x), y = E - k, c = E - y, K[0] = E - (y + c) + (c - k), b = S + y, c = b - S, C = S - (b - c) + (y - c), y = C - D, c = C - y, K[1] = C - (y + c) + (c - D), I = b + y, c = I - b, K[2] = b - (I - c) + (y - c), K[3] = I;
  const R = ge(4, Z, 4, K, Se);
  S = g * d, u = L * g, m = u - (u - g), p = g - m, u = L * d, f = u - (u - d), x = d - f, E = p * x - (S - m * f - p * f - m * x), D = w * h, u = L * w, m = u - (u - w), p = w - m, u = L * h, f = u - (u - h), x = h - f, k = p * x - (D - m * f - p * f - m * x), y = E - k, c = E - y, K[0] = E - (y + c) + (c - k), b = S + y, c = b - S, C = S - (b - c) + (y - c), y = C - D, c = C - y, K[1] = C - (y + c) + (c - D), I = b + y, c = I - b, K[2] = b - (I - c) + (y - c), K[3] = I;
  const F = ge(R, Se, 4, K, _e);
  S = l * d, u = L * l, m = u - (u - l), p = l - m, u = L * d, f = u - (u - d), x = d - f, E = p * x - (S - m * f - p * f - m * x), D = a * h, u = L * a, m = u - (u - a), p = a - m, u = L * h, f = u - (u - h), x = h - f, k = p * x - (D - m * f - p * f - m * x), y = E - k, c = E - y, K[0] = E - (y + c) + (c - k), b = S + y, c = b - S, C = S - (b - c) + (y - c), y = C - D, c = C - y, K[1] = C - (y + c) + (c - D), I = b + y, c = I - b, K[2] = b - (I - c) + (y - c), K[3] = I;
  const T = ge(F, _e, 4, K, Fe);
  return Fe[T - 1];
}
function re(r, e, t, s, i, n) {
  const o = (e - n) * (t - i), l = (r - i) * (s - n), a = o - l, h = Math.abs(o + l);
  return Math.abs(a) >= Je * h ? a : -Qe(r, e, t, s, i, n, h);
}
const De = Math.pow(2, -52), he = new Uint32Array(512);
class ue {
  static from(e, t = nt, s = ot) {
    const i = e.length, n = new Float64Array(i * 2);
    for (let o = 0; o < i; o++) {
      const l = e[o];
      n[2 * o] = t(l), n[2 * o + 1] = s(l);
    }
    return new ue(n);
  }
  constructor(e) {
    const t = e.length >> 1;
    if (t > 0 && typeof e[0] != "number")
      throw new Error("Expected coords to contain numbers.");
    this.coords = e;
    const s = Math.max(2 * t - 5, 0);
    this._triangles = new Uint32Array(s * 3), this._halfedges = new Int32Array(s * 3), this._hashSize = Math.ceil(Math.sqrt(t)), this._hullPrev = new Uint32Array(t), this._hullNext = new Uint32Array(t), this._hullTri = new Uint32Array(t), this._hullHash = new Int32Array(this._hashSize), this._ids = new Uint32Array(t), this._dists = new Float64Array(t), this.update();
  }
  update() {
    const { coords: e, _hullPrev: t, _hullNext: s, _hullTri: i, _hullHash: n } = this, o = e.length >> 1;
    let l = 1 / 0, a = 1 / 0, h = -1 / 0, d = -1 / 0;
    for (let g = 0; g < o; g++) {
      const v = e[2 * g], w = e[2 * g + 1];
      v < l && (l = v), w < a && (a = w), v > h && (h = v), w > d && (d = w), this._ids[g] = g;
    }
    const c = (l + h) / 2, u = (a + d) / 2;
    let m, p, f;
    for (let g = 0, v = 1 / 0; g < o; g++) {
      const w = be(c, u, e[2 * g], e[2 * g + 1]);
      w < v && (m = g, v = w);
    }
    const x = e[2 * m], y = e[2 * m + 1];
    for (let g = 0, v = 1 / 0; g < o; g++) {
      if (g === m)
        continue;
      const w = be(x, y, e[2 * g], e[2 * g + 1]);
      w < v && w > 0 && (p = g, v = w);
    }
    let b = e[2 * p], C = e[2 * p + 1], S = 1 / 0;
    for (let g = 0; g < o; g++) {
      if (g === m || g === p)
        continue;
      const v = it(x, y, b, C, e[2 * g], e[2 * g + 1]);
      v < S && (f = g, S = v);
    }
    let E = e[2 * f], D = e[2 * f + 1];
    if (S === 1 / 0) {
      for (let w = 0; w < o; w++)
        this._dists[w] = e[2 * w] - e[0] || e[2 * w + 1] - e[1];
      ee(this._ids, this._dists, 0, o - 1);
      const g = new Uint32Array(o);
      let v = 0;
      for (let w = 0, _ = -1 / 0; w < o; w++) {
        const O = this._ids[w], A = this._dists[O];
        A > _ && (g[v++] = O, _ = A);
      }
      this.hull = g.subarray(0, v), this.triangles = new Uint32Array(0), this.halfedges = new Uint32Array(0);
      return;
    }
    if (re(x, y, b, C, E, D) < 0) {
      const g = p, v = b, w = C;
      p = f, b = E, C = D, f = g, E = v, D = w;
    }
    const k = st(x, y, b, C, E, D);
    this._cx = k.x, this._cy = k.y;
    for (let g = 0; g < o; g++)
      this._dists[g] = be(e[2 * g], e[2 * g + 1], k.x, k.y);
    ee(this._ids, this._dists, 0, o - 1), this._hullStart = m;
    let I = 3;
    s[m] = t[f] = p, s[p] = t[m] = f, s[f] = t[p] = m, i[m] = 0, i[p] = 1, i[f] = 2, n.fill(-1), n[this._hashKey(x, y)] = m, n[this._hashKey(b, C)] = p, n[this._hashKey(E, D)] = f, this.trianglesLen = 0, this._addTriangle(m, p, f, -1, -1, -1);
    for (let g = 0, v, w; g < this._ids.length; g++) {
      const _ = this._ids[g], O = e[2 * _], A = e[2 * _ + 1];
      if (g > 0 && Math.abs(O - v) <= De && Math.abs(A - w) <= De || (v = O, w = A, _ === m || _ === p || _ === f))
        continue;
      let R = 0;
      for (let W = 0, $ = this._hashKey(O, A); W < this._hashSize && (R = n[($ + W) % this._hashSize], !(R !== -1 && R !== s[R])); W++)
        ;
      R = t[R];
      let F = R, T;
      for (; T = s[F], re(O, A, e[2 * F], e[2 * F + 1], e[2 * T], e[2 * T + 1]) >= 0; )
        if (F = T, F === R) {
          F = -1;
          break;
        }
      if (F === -1)
        continue;
      let N = this._addTriangle(F, _, s[F], -1, -1, i[F]);
      i[_] = this._legalize(N + 2), i[F] = N, I++;
      let M = s[F];
      for (; T = s[M], re(O, A, e[2 * M], e[2 * M + 1], e[2 * T], e[2 * T + 1]) < 0; )
        N = this._addTriangle(M, _, T, i[_], -1, i[M]), i[_] = this._legalize(N + 2), s[M] = M, I--, M = T;
      if (F === R)
        for (; T = t[F], re(O, A, e[2 * T], e[2 * T + 1], e[2 * F], e[2 * F + 1]) < 0; )
          N = this._addTriangle(T, _, F, -1, i[F], i[T]), this._legalize(N + 2), i[T] = N, s[F] = F, I--, F = T;
      this._hullStart = t[_] = F, s[F] = t[M] = _, s[_] = M, n[this._hashKey(O, A)] = _, n[this._hashKey(e[2 * F], e[2 * F + 1])] = F;
    }
    this.hull = new Uint32Array(I);
    for (let g = 0, v = this._hullStart; g < I; g++)
      this.hull[g] = v, v = s[v];
    this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(e, t) {
    return Math.floor(et(e - this._cx, t - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(e) {
    const { _triangles: t, _halfedges: s, coords: i } = this;
    let n = 0, o = 0;
    for (; ; ) {
      const l = s[e], a = e - e % 3;
      if (o = a + (e + 2) % 3, l === -1) {
        if (n === 0)
          break;
        e = he[--n];
        continue;
      }
      const h = l - l % 3, d = a + (e + 1) % 3, c = h + (l + 2) % 3, u = t[o], m = t[e], p = t[d], f = t[c];
      if (tt(
        i[2 * u],
        i[2 * u + 1],
        i[2 * m],
        i[2 * m + 1],
        i[2 * p],
        i[2 * p + 1],
        i[2 * f],
        i[2 * f + 1]
      )) {
        t[e] = f, t[l] = u;
        const y = s[c];
        if (y === -1) {
          let C = this._hullStart;
          do {
            if (this._hullTri[C] === c) {
              this._hullTri[C] = e;
              break;
            }
            C = this._hullPrev[C];
          } while (C !== this._hullStart);
        }
        this._link(e, y), this._link(l, s[o]), this._link(o, c);
        const b = h + (l + 1) % 3;
        n < he.length && (he[n++] = b);
      } else {
        if (n === 0)
          break;
        e = he[--n];
      }
    }
    return o;
  }
  _link(e, t) {
    this._halfedges[e] = t, t !== -1 && (this._halfedges[t] = e);
  }
  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(e, t, s, i, n, o) {
    const l = this.trianglesLen;
    return this._triangles[l] = e, this._triangles[l + 1] = t, this._triangles[l + 2] = s, this._link(l, i), this._link(l + 1, n), this._link(l + 2, o), this.trianglesLen += 3, l;
  }
}
function et(r, e) {
  const t = r / (Math.abs(r) + Math.abs(e));
  return (e > 0 ? 3 - t : 1 + t) / 4;
}
function be(r, e, t, s) {
  const i = r - t, n = e - s;
  return i * i + n * n;
}
function tt(r, e, t, s, i, n, o, l) {
  const a = r - o, h = e - l, d = t - o, c = s - l, u = i - o, m = n - l, p = a * a + h * h, f = d * d + c * c, x = u * u + m * m;
  return a * (c * x - f * m) - h * (d * x - f * u) + p * (d * m - c * u) < 0;
}
function it(r, e, t, s, i, n) {
  const o = t - r, l = s - e, a = i - r, h = n - e, d = o * o + l * l, c = a * a + h * h, u = 0.5 / (o * h - l * a), m = (h * d - l * c) * u, p = (o * c - a * d) * u;
  return m * m + p * p;
}
function st(r, e, t, s, i, n) {
  const o = t - r, l = s - e, a = i - r, h = n - e, d = o * o + l * l, c = a * a + h * h, u = 0.5 / (o * h - l * a), m = r + (h * d - l * c) * u, p = e + (o * c - a * d) * u;
  return { x: m, y: p };
}
function ee(r, e, t, s) {
  if (s - t <= 20)
    for (let i = t + 1; i <= s; i++) {
      const n = r[i], o = e[n];
      let l = i - 1;
      for (; l >= t && e[r[l]] > o; )
        r[l + 1] = r[l--];
      r[l + 1] = n;
    }
  else {
    const i = t + s >> 1;
    let n = t + 1, o = s;
    ie(r, i, n), e[r[t]] > e[r[s]] && ie(r, t, s), e[r[n]] > e[r[s]] && ie(r, n, s), e[r[t]] > e[r[n]] && ie(r, t, n);
    const l = r[n], a = e[l];
    for (; ; ) {
      do
        n++;
      while (e[r[n]] < a);
      do
        o--;
      while (e[r[o]] > a);
      if (o < n)
        break;
      ie(r, n, o);
    }
    r[t + 1] = r[o], r[o] = l, s - n + 1 >= o - t ? (ee(r, e, n, s), ee(r, e, t, o - 1)) : (ee(r, e, t, o - 1), ee(r, e, n, s));
  }
}
function ie(r, e, t) {
  const s = r[e];
  r[e] = r[t], r[t] = s;
}
function nt(r) {
  return r[0];
}
function ot(r) {
  return r[1];
}
const ke = 1e-6;
class q {
  constructor() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "";
  }
  moveTo(e, t) {
    this._ += `M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  }
  lineTo(e, t) {
    this._ += `L${this._x1 = +e},${this._y1 = +t}`;
  }
  arc(e, t, s) {
    e = +e, t = +t, s = +s;
    const i = e + s, n = t;
    if (s < 0)
      throw new Error("negative radius");
    this._x1 === null ? this._ += `M${i},${n}` : (Math.abs(this._x1 - i) > ke || Math.abs(this._y1 - n) > ke) && (this._ += "L" + i + "," + n), s && (this._ += `A${s},${s},0,1,1,${e - s},${t}A${s},${s},0,1,1,${this._x1 = i},${this._y1 = n}`);
  }
  rect(e, t, s, i) {
    this._ += `M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}h${+s}v${+i}h${-s}Z`;
  }
  value() {
    return this._ || null;
  }
}
class Ce {
  constructor() {
    this._ = [];
  }
  moveTo(e, t) {
    this._.push([e, t]);
  }
  closePath() {
    this._.push(this._[0].slice());
  }
  lineTo(e, t) {
    this._.push([e, t]);
  }
  value() {
    return this._.length ? this._ : null;
  }
}
class lt {
  constructor(e, [t, s, i, n] = [0, 0, 960, 500]) {
    if (!((i = +i) >= (t = +t)) || !((n = +n) >= (s = +s)))
      throw new Error("invalid bounds");
    this.delaunay = e, this._circumcenters = new Float64Array(e.points.length * 2), this.vectors = new Float64Array(e.points.length * 2), this.xmax = i, this.xmin = t, this.ymax = n, this.ymin = s, this._init();
  }
  update() {
    return this.delaunay.update(), this._init(), this;
  }
  _init() {
    const { delaunay: { points: e, hull: t, triangles: s }, vectors: i } = this;
    let n, o;
    const l = this.circumcenters = this._circumcenters.subarray(0, s.length / 3 * 2);
    for (let f = 0, x = 0, y = s.length, b, C; f < y; f += 3, x += 2) {
      const S = s[f] * 2, E = s[f + 1] * 2, D = s[f + 2] * 2, k = e[S], I = e[S + 1], g = e[E], v = e[E + 1], w = e[D], _ = e[D + 1], O = g - k, A = v - I, R = w - k, F = _ - I, T = (O * F - A * R) * 2;
      if (Math.abs(T) < 1e-9) {
        if (n === void 0) {
          n = o = 0;
          for (const M of t)
            n += e[M * 2], o += e[M * 2 + 1];
          n /= t.length, o /= t.length;
        }
        const N = 1e9 * Math.sign((n - k) * F - (o - I) * R);
        b = (k + w) / 2 - N * F, C = (I + _) / 2 + N * R;
      } else {
        const N = 1 / T, M = O * O + A * A, W = R * R + F * F;
        b = k + (F * M - A * W) * N, C = I + (O * W - R * M) * N;
      }
      l[x] = b, l[x + 1] = C;
    }
    let a = t[t.length - 1], h, d = a * 4, c, u = e[2 * a], m, p = e[2 * a + 1];
    i.fill(0);
    for (let f = 0; f < t.length; ++f)
      a = t[f], h = d, c = u, m = p, d = a * 4, u = e[2 * a], p = e[2 * a + 1], i[h + 2] = i[d] = m - p, i[h + 3] = i[d + 1] = u - c;
  }
  render(e) {
    const t = e == null ? e = new q() : void 0, { delaunay: { halfedges: s, inedges: i, hull: n }, circumcenters: o, vectors: l } = this;
    if (n.length <= 1)
      return null;
    for (let d = 0, c = s.length; d < c; ++d) {
      const u = s[d];
      if (u < d)
        continue;
      const m = Math.floor(d / 3) * 2, p = Math.floor(u / 3) * 2, f = o[m], x = o[m + 1], y = o[p], b = o[p + 1];
      this._renderSegment(f, x, y, b, e);
    }
    let a, h = n[n.length - 1];
    for (let d = 0; d < n.length; ++d) {
      a = h, h = n[d];
      const c = Math.floor(i[h] / 3) * 2, u = o[c], m = o[c + 1], p = a * 4, f = this._project(u, m, l[p + 2], l[p + 3]);
      f && this._renderSegment(u, m, f[0], f[1], e);
    }
    return t && t.value();
  }
  renderBounds(e) {
    const t = e == null ? e = new q() : void 0;
    return e.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin), t && t.value();
  }
  renderCell(e, t) {
    const s = t == null ? t = new q() : void 0, i = this._clip(e);
    if (i === null || !i.length)
      return;
    t.moveTo(i[0], i[1]);
    let n = i.length;
    for (; i[0] === i[n - 2] && i[1] === i[n - 1] && n > 1; )
      n -= 2;
    for (let o = 2; o < n; o += 2)
      (i[o] !== i[o - 2] || i[o + 1] !== i[o - 1]) && t.lineTo(i[o], i[o + 1]);
    return t.closePath(), s && s.value();
  }
  *cellPolygons() {
    const { delaunay: { points: e } } = this;
    for (let t = 0, s = e.length / 2; t < s; ++t) {
      const i = this.cellPolygon(t);
      i && (i.index = t, yield i);
    }
  }
  cellPolygon(e) {
    const t = new Ce();
    return this.renderCell(e, t), t.value();
  }
  _renderSegment(e, t, s, i, n) {
    let o;
    const l = this._regioncode(e, t), a = this._regioncode(s, i);
    l === 0 && a === 0 ? (n.moveTo(e, t), n.lineTo(s, i)) : (o = this._clipSegment(e, t, s, i, l, a)) && (n.moveTo(o[0], o[1]), n.lineTo(o[2], o[3]));
  }
  contains(e, t, s) {
    return t = +t, t !== t || (s = +s, s !== s) ? !1 : this.delaunay._step(e, t, s) === e;
  }
  *neighbors(e) {
    const t = this._clip(e);
    if (t)
      for (const s of this.delaunay.neighbors(e)) {
        const i = this._clip(s);
        if (i) {
          e:
            for (let n = 0, o = t.length; n < o; n += 2)
              for (let l = 0, a = i.length; l < a; l += 2)
                if (t[n] === i[l] && t[n + 1] === i[l + 1] && t[(n + 2) % o] === i[(l + a - 2) % a] && t[(n + 3) % o] === i[(l + a - 1) % a]) {
                  yield s;
                  break e;
                }
        }
      }
  }
  _cell(e) {
    const { circumcenters: t, delaunay: { inedges: s, halfedges: i, triangles: n } } = this, o = s[e];
    if (o === -1)
      return null;
    const l = [];
    let a = o;
    do {
      const h = Math.floor(a / 3);
      if (l.push(t[h * 2], t[h * 2 + 1]), a = a % 3 === 2 ? a - 2 : a + 1, n[a] !== e)
        break;
      a = i[a];
    } while (a !== o && a !== -1);
    return l;
  }
  _clip(e) {
    if (e === 0 && this.delaunay.hull.length === 1)
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    const t = this._cell(e);
    if (t === null)
      return null;
    const { vectors: s } = this, i = e * 4;
    return this._simplify(s[i] || s[i + 1] ? this._clipInfinite(e, t, s[i], s[i + 1], s[i + 2], s[i + 3]) : this._clipFinite(e, t));
  }
  _clipFinite(e, t) {
    const s = t.length;
    let i = null, n, o, l = t[s - 2], a = t[s - 1], h, d = this._regioncode(l, a), c, u = 0;
    for (let m = 0; m < s; m += 2)
      if (n = l, o = a, l = t[m], a = t[m + 1], h = d, d = this._regioncode(l, a), h === 0 && d === 0)
        c = u, u = 0, i ? i.push(l, a) : i = [l, a];
      else {
        let p, f, x, y, b;
        if (h === 0) {
          if ((p = this._clipSegment(n, o, l, a, h, d)) === null)
            continue;
          [f, x, y, b] = p;
        } else {
          if ((p = this._clipSegment(l, a, n, o, d, h)) === null)
            continue;
          [y, b, f, x] = p, c = u, u = this._edgecode(f, x), c && u && this._edge(e, c, u, i, i.length), i ? i.push(f, x) : i = [f, x];
        }
        c = u, u = this._edgecode(y, b), c && u && this._edge(e, c, u, i, i.length), i ? i.push(y, b) : i = [y, b];
      }
    if (i)
      c = u, u = this._edgecode(i[0], i[1]), c && u && this._edge(e, c, u, i, i.length);
    else if (this.contains(e, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2))
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    return i;
  }
  _clipSegment(e, t, s, i, n, o) {
    const l = n < o;
    for (l && ([e, t, s, i, n, o] = [s, i, e, t, o, n]); ; ) {
      if (n === 0 && o === 0)
        return l ? [s, i, e, t] : [e, t, s, i];
      if (n & o)
        return null;
      let a, h, d = n || o;
      d & 8 ? (a = e + (s - e) * (this.ymax - t) / (i - t), h = this.ymax) : d & 4 ? (a = e + (s - e) * (this.ymin - t) / (i - t), h = this.ymin) : d & 2 ? (h = t + (i - t) * (this.xmax - e) / (s - e), a = this.xmax) : (h = t + (i - t) * (this.xmin - e) / (s - e), a = this.xmin), n ? (e = a, t = h, n = this._regioncode(e, t)) : (s = a, i = h, o = this._regioncode(s, i));
    }
  }
  _clipInfinite(e, t, s, i, n, o) {
    let l = Array.from(t), a;
    if ((a = this._project(l[0], l[1], s, i)) && l.unshift(a[0], a[1]), (a = this._project(l[l.length - 2], l[l.length - 1], n, o)) && l.push(a[0], a[1]), l = this._clipFinite(e, l))
      for (let h = 0, d = l.length, c, u = this._edgecode(l[d - 2], l[d - 1]); h < d; h += 2)
        c = u, u = this._edgecode(l[h], l[h + 1]), c && u && (h = this._edge(e, c, u, l, h), d = l.length);
    else
      this.contains(e, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2) && (l = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax]);
    return l;
  }
  _edge(e, t, s, i, n) {
    for (; t !== s; ) {
      let o, l;
      switch (t) {
        case 5:
          t = 4;
          continue;
        case 4:
          t = 6, o = this.xmax, l = this.ymin;
          break;
        case 6:
          t = 2;
          continue;
        case 2:
          t = 10, o = this.xmax, l = this.ymax;
          break;
        case 10:
          t = 8;
          continue;
        case 8:
          t = 9, o = this.xmin, l = this.ymax;
          break;
        case 9:
          t = 1;
          continue;
        case 1:
          t = 5, o = this.xmin, l = this.ymin;
          break;
      }
      (i[n] !== o || i[n + 1] !== l) && this.contains(e, o, l) && (i.splice(n, 0, o, l), n += 2);
    }
    return n;
  }
  _project(e, t, s, i) {
    let n = 1 / 0, o, l, a;
    if (i < 0) {
      if (t <= this.ymin)
        return null;
      (o = (this.ymin - t) / i) < n && (a = this.ymin, l = e + (n = o) * s);
    } else if (i > 0) {
      if (t >= this.ymax)
        return null;
      (o = (this.ymax - t) / i) < n && (a = this.ymax, l = e + (n = o) * s);
    }
    if (s > 0) {
      if (e >= this.xmax)
        return null;
      (o = (this.xmax - e) / s) < n && (l = this.xmax, a = t + (n = o) * i);
    } else if (s < 0) {
      if (e <= this.xmin)
        return null;
      (o = (this.xmin - e) / s) < n && (l = this.xmin, a = t + (n = o) * i);
    }
    return [l, a];
  }
  _edgecode(e, t) {
    return (e === this.xmin ? 1 : e === this.xmax ? 2 : 0) | (t === this.ymin ? 4 : t === this.ymax ? 8 : 0);
  }
  _regioncode(e, t) {
    return (e < this.xmin ? 1 : e > this.xmax ? 2 : 0) | (t < this.ymin ? 4 : t > this.ymax ? 8 : 0);
  }
  _simplify(e) {
    if (e && e.length > 4) {
      for (let t = 0; t < e.length; t += 2) {
        const s = (t + 2) % e.length, i = (t + 4) % e.length;
        (e[t] === e[s] && e[s] === e[i] || e[t + 1] === e[s + 1] && e[s + 1] === e[i + 1]) && (e.splice(s, 2), t -= 2);
      }
      e.length || (e = null);
    }
    return e;
  }
}
const at = 2 * Math.PI, Q = Math.pow;
function rt(r) {
  return r[0];
}
function ht(r) {
  return r[1];
}
function ct(r) {
  const { triangles: e, coords: t } = r;
  for (let s = 0; s < e.length; s += 3) {
    const i = 2 * e[s], n = 2 * e[s + 1], o = 2 * e[s + 2];
    if ((t[o] - t[i]) * (t[n + 1] - t[i + 1]) - (t[n] - t[i]) * (t[o + 1] - t[i + 1]) > 1e-10)
      return !1;
  }
  return !0;
}
function dt(r, e, t) {
  return [r + Math.sin(r + e) * t, e + Math.cos(r - e) * t];
}
class we {
  static from(e, t = rt, s = ht, i) {
    return new we("length" in e ? ut(e, t, s, i) : Float64Array.from(mt(e, t, s, i)));
  }
  constructor(e) {
    this._delaunator = new ue(e), this.inedges = new Int32Array(e.length / 2), this._hullIndex = new Int32Array(e.length / 2), this.points = this._delaunator.coords, this._init();
  }
  update() {
    return this._delaunator.update(), this._init(), this;
  }
  _init() {
    const e = this._delaunator, t = this.points;
    if (e.hull && e.hull.length > 2 && ct(e)) {
      this.collinear = Int32Array.from({ length: t.length / 2 }, (u, m) => m).sort((u, m) => t[2 * u] - t[2 * m] || t[2 * u + 1] - t[2 * m + 1]);
      const a = this.collinear[0], h = this.collinear[this.collinear.length - 1], d = [t[2 * a], t[2 * a + 1], t[2 * h], t[2 * h + 1]], c = 1e-8 * Math.hypot(d[3] - d[1], d[2] - d[0]);
      for (let u = 0, m = t.length / 2; u < m; ++u) {
        const p = dt(t[2 * u], t[2 * u + 1], c);
        t[2 * u] = p[0], t[2 * u + 1] = p[1];
      }
      this._delaunator = new ue(t);
    } else
      delete this.collinear;
    const s = this.halfedges = this._delaunator.halfedges, i = this.hull = this._delaunator.hull, n = this.triangles = this._delaunator.triangles, o = this.inedges.fill(-1), l = this._hullIndex.fill(-1);
    for (let a = 0, h = s.length; a < h; ++a) {
      const d = n[a % 3 === 2 ? a - 2 : a + 1];
      (s[a] === -1 || o[d] === -1) && (o[d] = a);
    }
    for (let a = 0, h = i.length; a < h; ++a)
      l[i[a]] = a;
    i.length <= 2 && i.length > 0 && (this.triangles = new Int32Array(3).fill(-1), this.halfedges = new Int32Array(3).fill(-1), this.triangles[0] = i[0], o[i[0]] = 1, i.length === 2 && (o[i[1]] = 0, this.triangles[1] = i[1], this.triangles[2] = i[1]));
  }
  voronoi(e) {
    return new lt(this, e);
  }
  *neighbors(e) {
    const { inedges: t, hull: s, _hullIndex: i, halfedges: n, triangles: o, collinear: l } = this;
    if (l) {
      const c = l.indexOf(e);
      c > 0 && (yield l[c - 1]), c < l.length - 1 && (yield l[c + 1]);
      return;
    }
    const a = t[e];
    if (a === -1)
      return;
    let h = a, d = -1;
    do {
      if (yield d = o[h], h = h % 3 === 2 ? h - 2 : h + 1, o[h] !== e)
        return;
      if (h = n[h], h === -1) {
        const c = s[(i[e] + 1) % s.length];
        c !== d && (yield c);
        return;
      }
    } while (h !== a);
  }
  find(e, t, s = 0) {
    if (e = +e, e !== e || (t = +t, t !== t))
      return -1;
    const i = s;
    let n;
    for (; (n = this._step(s, e, t)) >= 0 && n !== s && n !== i; )
      s = n;
    return n;
  }
  _step(e, t, s) {
    const { inedges: i, hull: n, _hullIndex: o, halfedges: l, triangles: a, points: h } = this;
    if (i[e] === -1 || !h.length)
      return (e + 1) % (h.length >> 1);
    let d = e, c = Q(t - h[e * 2], 2) + Q(s - h[e * 2 + 1], 2);
    const u = i[e];
    let m = u;
    do {
      let p = a[m];
      const f = Q(t - h[p * 2], 2) + Q(s - h[p * 2 + 1], 2);
      if (f < c && (c = f, d = p), m = m % 3 === 2 ? m - 2 : m + 1, a[m] !== e)
        break;
      if (m = l[m], m === -1) {
        if (m = n[(o[e] + 1) % n.length], m !== p && Q(t - h[m * 2], 2) + Q(s - h[m * 2 + 1], 2) < c)
          return m;
        break;
      }
    } while (m !== u);
    return d;
  }
  render(e) {
    const t = e == null ? e = new q() : void 0, { points: s, halfedges: i, triangles: n } = this;
    for (let o = 0, l = i.length; o < l; ++o) {
      const a = i[o];
      if (a < o)
        continue;
      const h = n[o] * 2, d = n[a] * 2;
      e.moveTo(s[h], s[h + 1]), e.lineTo(s[d], s[d + 1]);
    }
    return this.renderHull(e), t && t.value();
  }
  renderPoints(e, t) {
    t === void 0 && (!e || typeof e.moveTo != "function") && (t = e, e = null), t = t == null ? 2 : +t;
    const s = e == null ? e = new q() : void 0, { points: i } = this;
    for (let n = 0, o = i.length; n < o; n += 2) {
      const l = i[n], a = i[n + 1];
      e.moveTo(l + t, a), e.arc(l, a, t, 0, at);
    }
    return s && s.value();
  }
  renderHull(e) {
    const t = e == null ? e = new q() : void 0, { hull: s, points: i } = this, n = s[0] * 2, o = s.length;
    e.moveTo(i[n], i[n + 1]);
    for (let l = 1; l < o; ++l) {
      const a = 2 * s[l];
      e.lineTo(i[a], i[a + 1]);
    }
    return e.closePath(), t && t.value();
  }
  hullPolygon() {
    const e = new Ce();
    return this.renderHull(e), e.value();
  }
  renderTriangle(e, t) {
    const s = t == null ? t = new q() : void 0, { points: i, triangles: n } = this, o = n[e *= 3] * 2, l = n[e + 1] * 2, a = n[e + 2] * 2;
    return t.moveTo(i[o], i[o + 1]), t.lineTo(i[l], i[l + 1]), t.lineTo(i[a], i[a + 1]), t.closePath(), s && s.value();
  }
  *trianglePolygons() {
    const { triangles: e } = this;
    for (let t = 0, s = e.length / 3; t < s; ++t)
      yield this.trianglePolygon(t);
  }
  trianglePolygon(e) {
    const t = new Ce();
    return this.renderTriangle(e, t), t.value();
  }
}
function ut(r, e, t, s) {
  const i = r.length, n = new Float64Array(i * 2);
  for (let o = 0; o < i; ++o) {
    const l = r[o];
    n[o * 2] = e.call(s, l, o, r), n[o * 2 + 1] = t.call(s, l, o, r);
  }
  return n;
}
function* mt(r, e, t, s) {
  let i = 0;
  for (const n of r)
    yield e.call(s, n, i, r), yield t.call(s, n, i, r), ++i;
}
var me = (
  /** @class */
  function() {
    function r(e) {
      this._value = NaN, typeof e == "string" ? this._seed = this.hashCode(e) : typeof e == "number" ? this._seed = this.getSafeSeed(e) : this._seed = this.getSafeSeed(r.MIN + Math.floor((r.MAX - r.MIN) * Math.random())), this.reset();
    }
    return r.prototype.next = function(e, t) {
      return e === void 0 && (e = 0), t === void 0 && (t = 1), this.recalculate(), this.map(this._value, r.MIN, r.MAX, e, t);
    }, r.prototype.nextInt = function(e, t) {
      return e === void 0 && (e = 10), t === void 0 && (t = 100), this.recalculate(), Math.floor(this.map(this._value, r.MIN, r.MAX, e, t + 1));
    }, r.prototype.nextString = function(e, t) {
      e === void 0 && (e = 16), t === void 0 && (t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
      for (var s = ""; s.length < e; )
        s += this.nextChar(t);
      return s;
    }, r.prototype.nextChar = function(e) {
      return e === void 0 && (e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"), e.substr(this.nextInt(0, e.length - 1), 1);
    }, r.prototype.nextArrayItem = function(e) {
      return e[this.nextInt(0, e.length - 1)];
    }, r.prototype.nextBoolean = function() {
      return this.recalculate(), this._value > 0.5;
    }, r.prototype.skip = function(e) {
      for (e === void 0 && (e = 1); e-- > 0; )
        this.recalculate();
    }, r.prototype.reset = function() {
      this._value = this._seed;
    }, r.prototype.recalculate = function() {
      this._value = this.xorshift(this._value);
    }, r.prototype.xorshift = function(e) {
      return e ^= e << 13, e ^= e >> 17, e ^= e << 5, e;
    }, r.prototype.map = function(e, t, s, i, n) {
      return (e - t) / (s - t) * (n - i) + i;
    }, r.prototype.hashCode = function(e) {
      var t = 0;
      if (e)
        for (var s = e.length, i = 0; i < s; i++)
          t = (t << 5) - t + e.charCodeAt(i), t |= 0, t = this.xorshift(t);
      return this.getSafeSeed(t);
    }, r.prototype.getSafeSeed = function(e) {
      return e === 0 ? 1 : e;
    }, r.MIN = -2147483648, r.MAX = 2147483647, r;
  }()
);
class pt {
  constructor(e) {
    this.GRIDSIZE = 7, this.JITTER = 0.6, this.points = [], this.polygonData = [], this.walkerIndices = void 0, this.SEED = e, this.deterministicRng = new me(this.SEED), this.initializePoints(), this.initializeVoronoi();
  }
  initializePoints() {
    for (let e = 1; e <= this.GRIDSIZE; e++)
      for (let t = 1; t <= this.GRIDSIZE; t++)
        this.points.push({
          x: e + this.JITTER * (this.deterministicRng.next() - this.deterministicRng.next()),
          y: t + this.JITTER * (this.deterministicRng.next() - this.deterministicRng.next())
        });
  }
  initializeVoronoi() {
    const e = we.from(this.points, (t) => t.x, (t) => t.y);
    this.voronoi = e.voronoi([0, 0, this.GRIDSIZE, this.GRIDSIZE]);
  }
  randomWalkGen() {
    let e = new me(this.SEED), t = [24];
    const s = /* @__PURE__ */ new Set([24]), i = [-1, 1, -7, 7], n = (a) => a % 7 !== 0 && a % 7 !== 6 && a > 6 && a < 42;
    let o = 0, l = 0;
    for (; t.length < 20; ) {
      const a = t[l];
      let h = i.filter((d) => {
        const c = a + d;
        return n(c) && !s.has(c);
      });
      if (h.length > 0) {
        const d = h[e.nextInt(0, h.length - 1)], c = a + d;
        t.push(c), s.add(c), l = t.length - 1;
      } else
        l === 1 && (l = e.nextInt(0, t.length - 1)), l--;
      if (o++, o > 200)
        throw new Error("Random walker error: Infinite loop");
    }
    return t;
  }
  calculatePolygonData() {
    const e = Array.from(this.voronoi.cellPolygons()), t = this.randomWalkGen();
    for (let s in t) {
      const i = t[s];
      let n = [];
      for (let l = 0; l < e[i].length; l++)
        n.push({
          x: Number(e[i][l][0]),
          y: Number(e[i][l][1])
        });
      const o = this.calculateCentroid(n);
      this.polygonData.push({
        index: Number(s),
        polygonIndex: 0,
        vertices: n,
        reducedVertices: [],
        lootBoxesCoordinates: [],
        gradientAreaCoordinates: [],
        outerBorderCoordinates: [],
        centroid: o
      });
    }
    this.addPolygonIndices(t), this.calculateReducedVertices(), this.calculateLootboxCoordinates(), this.calculateGradientAreaCoordinates(), this.calculateOuterBorder();
  }
  getWorldBounds() {
    const e = this.walkerIndices ?? this.randomWalkGen();
    let t, s, i, n;
    const o = this.polygonData.find((l) => e.includes(l.index));
    if (!o)
      return null;
    t = s = i = n = o.vertices[0];
    for (let l of this.polygonData)
      if (e.includes(l.index))
        for (const a of l.vertices)
          a.y < t.y && (t = a), a.y > s.y && (s = a), a.x < i.x && (i = a), a.x > n.x && (n = a);
    return {
      x: i.x,
      y: t.y,
      width: n.x - i.x,
      height: s.y - t.y
    };
  }
  calculateCentroid(e) {
    let t = { x: 0, y: 0 };
    for (const s of e)
      t.x += Number(s.x), t.y += Number(s.y);
    return t.x /= e.length, t.y /= e.length, t;
  }
  addPolygonIndices(e) {
    for (let t = 0; t < this.polygonData.length; t++)
      this.polygonData[t].polygonIndex = e[t];
  }
  calculateReducedVertices() {
    for (const e of this.polygonData) {
      let t = this.calculateScaledVertices(e.vertices, 0.75);
      e.reducedVertices = t;
    }
  }
  calculateGradientAreaCoordinates() {
    for (const e of this.polygonData) {
      let t = this.calculateScaledVertices(e.vertices, 0.8);
      e.gradientAreaCoordinates = t;
    }
  }
  calculateOuterBorder() {
    for (const e of this.polygonData) {
      let t = this.calculateScaledVertices(e.vertices, 0.83);
      e.outerBorderCoordinates = t;
    }
  }
  calculateLootboxCoordinates() {
    for (let e = 1; e < this.polygonData.length; e++) {
      let t = this.calculateScaledVertices(this.polygonData[e].vertices, 0.3);
      this.polygonData[e].lootBoxesCoordinates = t;
    }
  }
  calculateScaledVertices(e, t) {
    const s = this.calculateCentroid(e);
    return e.map((i) => ({
      x: s.x + (i.x - s.x) * t,
      y: s.y + (i.y - s.y) * t
    }));
  }
}
class le {
  constructor(e, t, s, i, n, o, l, a) {
    this.tileXYs = [], this.deterministicRng = void 0, this.collidableOverlapThreshold = 30, this.elevationThreshold = 0.06, this.scene = e, this.x = t, this.y = s, this.chunkSize = i, this.tileSize = n, this.tiles = this.scene.add.group(), this.isLoaded = !1, this.occupiedCollidables = [], this.occupiedNonCollidables = [], this.perlin = a, this.polygonIdx = o, this.isDungeon = l, this.deterministicRng = new me(this.scene.seed);
  }
  unload() {
    this.isLoaded && (this.tiles.clear(!0, !0), this.isLoaded = !1, this.occupiedCollidables = [], this.occupiedNonCollidables = [], this.tileXYs = []);
  }
  load() {
    if (!this.isLoaded) {
      let s = [], i = [];
      for (var e = 0; e < this.chunkSize; e++)
        for (var t = 0; t < this.chunkSize; t++) {
          const { lowElevationTiles: n, highElevationTiles: o } = this.generateDualGridTile(e, t, s, i);
          i = n, s = o;
        }
      this.isDungeon || (this.placeAssets(i, "lowElevation"), this.placeAssets(s, "highElevation")), this.isLoaded = !0;
    }
  }
  placeAssets(e, t) {
  }
  generateDualGridTile(e, t, s, i) {
    var n = this.x * (this.chunkSize * this.tileSize) + e * this.tileSize, o = this.y * (this.chunkSize * this.tileSize) + t * this.tileSize;
    this.tileXYs = [0, 1].flatMap(
      (a) => [0, 1].map((h) => ({
        x: this.x * this.chunkSize * this.tileSize + (e + a) * this.tileSize,
        y: this.y * this.chunkSize * this.tileSize + (t + h) * this.tileSize
      }))
    ), this.isDungeon && this.isWithinBounds(n, o) && this.placeDungeonTiles(e, t);
    const l = this.placeTerrainTiles();
    return l[0] < this.elevationThreshold - 0.1 ? i.push({ x: n, y: o }) : l[0] > this.elevationThreshold + 0.05 && s.push({ x: n, y: o }), { lowElevationTiles: i, highElevationTiles: s };
  }
  placeTerrainTiles() {
    let e = 0, t = this.tileXYs.map(({ x: l, y: a }) => !this.isWithinBounds(l, a) && this.isWithinBorderBounds(l, a) ? 1 : this.isWithinBorderBounds(l, a) ? this.perlin.perlin2(l / 500, a / 500) : (e |= 16, 0));
    const s = (l) => l < this.elevationThreshold ? 0 : 1;
    for (const l in t)
      e |= s(t[l]) << Number(l);
    const i = (this.tileXYs[0].x + this.tileXYs[2].x) / 2, n = (this.tileXYs[0].y + this.tileXYs[1].y) / 2, o = this.scene.add.image(i, n, this.biomeConfig.terrainSprite, e).setDepth(1);
    return this.tiles.add(o), t;
  }
  placeDungeonTiles(e, t, s = 10, i = 3) {
    if (e <= s + i && t <= s + i) {
      const n = (this.tileXYs[0].x + this.tileXYs[2].x) / 2, o = (this.tileXYs[0].y + this.tileXYs[1].y) / 2;
      if (e > i && t > i) {
        const l = this.scene.add.image(n, o, this.biomeConfig.dungeonAsset, e - (i + 1) + (t - (i + 1)) * 10).setDepth(4);
        this.tiles.add(l);
      }
    }
  }
  //helper functions
  isWithinBorderBounds(e, t) {
    return this.polygonIdx === -1 ? !1 : !!this.point_in_polygon({ x: e, y: t }, this.scene.polygonData[this.polygonIdx].gradientAreaCoordinates);
  }
  isWithinBounds(e, t) {
    return this.polygonIdx === -1 ? !1 : !!this.point_in_polygon({ x: e, y: t }, this.scene.polygonData[this.polygonIdx].reducedVertices);
  }
  isSpriteWithinBounds(e, t, s, i, n = 5) {
    if (this.polygonIdx === -1)
      return !1;
    const o = this.scene.polygonData[this.polygonIdx].reducedVertices, l = s / 2, a = { x: e - l - n, y: t + n }, h = { x: e + l + n, y: t + n }, d = { x: e - l - n, y: t - i - n }, c = { x: e + l + n, y: t - i - n };
    return this.point_in_polygon(a, o) && this.point_in_polygon(h, o) && this.point_in_polygon(d, o) && this.point_in_polygon(c, o);
  }
  point_in_polygon(e, t) {
    const s = t.length;
    var i = e.x, n = e.y;
    let o = !1, l = t[0], a;
    for (let h = 1; h <= s; h++) {
      if (a = t[h % s], n > Math.min(l.y, a.y) && n <= Math.max(l.y, a.y) && i <= Math.max(l.x, a.x)) {
        const d = (n - l.y) * (a.x - l.x) / (a.y - l.y) + l.x;
        (l.x === a.x || i <= d) && (o = !o);
      }
      l = a;
    }
    return o;
  }
  isOverlapping(e, t, s, i, n) {
    const o = n.isCollidable ? this.occupiedCollidables : this.occupiedNonCollidables, l = n.isCollidable ? this.collidableOverlapThreshold : 0, a = e - s / 2, h = t - i;
    return o.some((d) => {
      const c = d.x - d.width / 2, u = d.y - d.height, m = a < c + d.width + l && a + s > c - l && h < u + d.height + l && h + i > u - l, p = a >= c && a + s <= c + d.width && h >= u && h + i <= u + d.height;
      return m || p;
    });
  }
  isOutsideChunkBounds(e, t, s, i) {
    const n = this.tileSize / 2, o = e - s / 2, l = t - i, a = this.x * this.chunkSize * this.tileSize, h = this.y * this.chunkSize * this.tileSize, d = a + this.chunkSize * this.tileSize, c = h + this.chunkSize * this.tileSize;
    return o < a + n || // Left boundary
    o + s > d - n || // Right boundary
    l < h + n || // Top boundary
    l + i > c - n;
  }
  // Helpers for child classes
  placeCollidableSprite(e, t, s, i) {
    if (!this.isOverlapping(e, t, i.width, i.height, { isCollidable: !0 }) && !this.isOutsideChunkBounds(e, t, i.width, i.height) && this.isSpriteWithinBounds(e, t, i.width, i.height)) {
      const n = this.scene.physics.add.sprite(e, t, s, i.name).setOrigin(0.5, 1).setDepth(i.depth), o = n.body;
      o.setSize(i.collisionBounds.x, i.collisionBounds.y), o.offset.set(i.collisionOffset.x, i.collisionOffset.y), n.setPushable(!1), this.scene.collidableObjects.add(n), this.tiles.add(n), this.occupiedCollidables.push({ x: e, y: t, width: i.width, height: i.height });
    }
  }
  placeNormalSprite(e, t, s, i, n = 9.6) {
    if (!this.isOverlapping(e, t, this.tileSize, this.tileSize, { isCollidable: !1 }) && !this.isOutsideChunkBounds(e, t, this.tileSize, this.tileSize) && this.isSpriteWithinBounds(e, t, this.tileSize, this.tileSize)) {
      const o = this.scene.add.image(e, t, s, String(i)).setDepth(n);
      return this.tiles.add(o), this.occupiedNonCollidables.push({ x: e, y: t, width: this.tileSize, height: this.tileSize }), !0;
    }
    return !1;
  }
  chooseRandomSprite(e) {
    return this.deterministicRng.nextArrayItem(e);
  }
}
class ai extends se.GameObjects.Sprite {
  constructor(e, t, s, i) {
    super(e, t, s, i), this.scene = e, this.scene.add.existing(this), this.setOrigin(0);
  }
}
const ft = [
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
], yt = [
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
], gt = {
  highElevation: ft,
  lowElevation: yt
};
class bt extends le {
  constructor(e, t, s, i, n, o, l, a) {
    super(e, t, s, i, n, o, l, a), this.biomeConfig = {
      dungeonAsset: "ground-biome-dungeon",
      terrainSprite: "ground-biome",
      collidableObjectSprite: "ground-atlas",
      nonCollidableObjectSprite: "groundNonCollidable"
    }, this.collidableOverlapThreshold = 10;
  }
  placeAssets(e, t) {
    e.forEach(({ x: s, y: i }) => {
      const n = this.perlin.perlin2(s / 500, i / 500) - this.perlin.perlin2(s / 300, i / 300) * 0.5;
      var o = (n + 1) / 2, l = Phaser.Display.Color.Interpolate.ColorWithColor(
        new Phaser.Display.Color(0, 255, 0),
        // Blue for low values
        new Phaser.Display.Color(255, 0, 0),
        // // Red for high values
        100,
        Math.floor(o * 100)
        // Convert normalized value to range 0-100
      );
      Phaser.Display.Color.GetColor(l.r, l.g, l.b), this.isWithinBounds(s, i);
      const a = gt[t];
      for (const h of a) {
        const [d, c] = h.range;
        if (n >= d && n < c) {
          const u = {
            name: h.name,
            width: h.collidableFrameWidth,
            height: h.collidableFrameHeight,
            depth: h.collidableFrameDepth,
            collisionBounds: h.collisionBounds,
            collisionOffset: h.collisionOffset
          };
          this.placeCollidableSprite(s, i, this.biomeConfig.collidableObjectSprite, u);
        }
        if (h.extraCondition) {
          const { min: u, max: m } = h.extraCondition;
          if (n < u || n >= m)
            continue;
        }
        if (h.nonCollidableFrames) {
          const u = this.chooseRandomSprite(h.nonCollidableFrames);
          u !== -1 && ((u == 1 || u == 12) && this.placeNormalSprite(s, i, this.biomeConfig.nonCollidableObjectSprite, u) && this.placeNormalSprite(s + this.tileSize, i, this.biomeConfig.nonCollidableObjectSprite, u + 1), this.placeNormalSprite(s, i, this.biomeConfig.nonCollidableObjectSprite, u));
        }
      }
    });
  }
  placeDungeonTiles(e, t, s = 10, i = 3) {
    if (e <= s + i && t <= s + i) {
      const n = (this.tileXYs[0].x + this.tileXYs[2].x) / 2, o = (this.tileXYs[0].y + this.tileXYs[1].y) / 2;
      if (e > i && t > i) {
        const l = this.scene.physics.add.image(n, o, this.biomeConfig.dungeonAsset, e - (i + 1) + (t - (i + 1)) * 10).setDepth(4);
        t > 2 + i && t < 9 + i && (l.setPushable(!1), this.scene.collidableObjects.add(l)), this.tiles.add(l);
      }
    }
  }
}
const xt = [
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
], Ct = [
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
], wt = {
  highElevation: xt,
  lowElevation: Ct
};
let vt = class extends le {
  constructor(e, t, s, i, n, o, l, a) {
    super(e, t, s, i, n, o, l, a), this.biomeConfig = {
      dungeonAsset: "flying-biome-dungeon",
      terrainSprite: "flying-biome",
      collidableObjectSprite: "flying-atlas",
      nonCollidableObjectSprite: "flyingNonCollidable"
    }, this.elevationThreshold = 0.2;
  }
  placeAssets(e, t) {
    e.forEach(
      ({ x: s, y: i }) => {
        const n = this.perlin.perlin2(s / 500, i / 500) - this.perlin.perlin2(s / 300, i / 300) * 0.5;
        var o = (n + 1) / 2, l = Phaser.Display.Color.Interpolate.ColorWithColor(
          new Phaser.Display.Color(0, 255, 0),
          // Blue for low values
          new Phaser.Display.Color(255, 0, 0),
          // // Red for high values
          100,
          Math.floor(o * 100)
          // Convert normalized value to range 0-100
        );
        Phaser.Display.Color.GetColor(l.r, l.g, l.b), this.isWithinBounds(s, i);
        const a = wt[t];
        for (const h of a) {
          const [d, c] = h.range;
          if (n >= d && n < c) {
            const u = {
              name: h.name,
              width: h.collidableFrameWidth,
              height: h.collidableFrameHeight,
              depth: h.collidableFrameDepth,
              collisionBounds: h.collisionBounds,
              collisionOffset: h.collisionOffset
            };
            this.placeCollidableSprite(s, i, this.biomeConfig.collidableObjectSprite, u);
          }
          if (h.extraCondition) {
            const { min: u, max: m } = h.extraCondition;
            if (n > u && n < m) {
              const p = this.chooseRandomSprite(h.nonCollidableFrames);
              p !== -1 && (p == 7 && this.placeNormalSprite(s, i, this.biomeConfig.nonCollidableObjectSprite, p) && this.placeNormalSprite(s + this.tileSize, i, this.biomeConfig.nonCollidableObjectSprite, p + 1), p == 9 && this.placeNormalSprite(s, i, this.biomeConfig.nonCollidableObjectSprite, p) && this.placeNormalSprite(s, i + this.tileSize, this.biomeConfig.nonCollidableObjectSprite, p + 1), this.placeNormalSprite(s, i, this.biomeConfig.nonCollidableObjectSprite, p));
            }
          }
        }
      }
    );
  }
};
const Et = [
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
], St = [
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
], _t = {
  highElevation: Et,
  lowElevation: St
};
class Ft extends le {
  constructor(e, t, s, i, n, o, l = !1, a) {
    super(e, t, s, i, n, o, l, a), this.biomeConfig = {
      dungeonAsset: "steel-biome-dungeon",
      terrainSprite: "steel-biome",
      collidableObjectSprite: "steel-atlas",
      nonCollidableObjectSprite: "steelNonCollidable"
    }, this.collidableOverlapThreshold = 0;
  }
  placeAssets(e, t) {
    e.forEach(
      ({ x: s, y: i }) => {
        const n = this.perlin.perlin2(s / 500, i / 500) - this.perlin.perlin2(s / 300, i / 300) * 0.5;
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
        Phaser.Display.Color.GetColor(l.r, l.g, l.b), this.isWithinBounds(s, i);
        const a = _t[t];
        for (const h of a) {
          const [d, c] = h.range;
          if (n >= d && n < c) {
            const u = {
              name: h.name,
              width: h.collidableFrameWidth,
              height: h.collidableFrameHeight,
              depth: h.collidableFrameDepth,
              collisionBounds: h.collisionBounds,
              collisionOffset: h.collisionOffset
            };
            this.placeCollidableSprite(s, i, this.biomeConfig.collidableObjectSprite, u);
          }
          if (h.extraCondition) {
            const { min: u, max: m } = h.extraCondition;
            if (n > u && n < m) {
              const p = this.chooseRandomSprite(h.nonCollidableFrames);
              p !== -1 && this.placeNormalSprite(s, i, this.biomeConfig.nonCollidableObjectSprite, p);
            }
          }
        }
      }
    );
  }
}
const Dt = [
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
], kt = [
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
], It = {
  highElevation: Dt,
  lowElevation: kt
};
class Ot extends le {
  constructor(e, t, s, i, n, o, l, a) {
    super(e, t, s, i, n, o, l, a), this.biomeConfig = {
      dungeonAsset: "psychic-biome-dungeon",
      terrainSprite: "psychic-biome",
      collidableObjectSprite: "psychic-atlas",
      nonCollidableObjectSprite: "psychicNonCollidable"
    };
  }
  placeAssets(e, t) {
    e.forEach(({ x: s, y: i }) => {
      const n = this.perlin.perlin2(s / 300, i / 300);
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
      Phaser.Display.Color.GetColor(l.r, l.g, l.b), this.isWithinBounds(s, i);
      const a = It[t];
      for (const h of a) {
        const [d, c] = h.range;
        if (n >= d && n < c) {
          const u = {
            name: h.name,
            width: h.collidableFrameWidth,
            height: h.collidableFrameHeight,
            depth: h.collidableFrameDepth,
            collisionBounds: h.collisionBounds,
            collisionOffset: h.collisionOffset
          };
          this.placeCollidableSprite(s, i, this.biomeConfig.collidableObjectSprite, u);
        }
        if (h.extraCondition) {
          const { min: u, max: m } = h.extraCondition;
          if (n < u || n >= m)
            continue;
        }
        if (h.nonCollidableFrames) {
          const u = this.chooseRandomSprite(h.nonCollidableFrames);
          if (u !== -1)
            switch (u) {
              case 0:
              case 15:
                this.placeVerticalSprite(s, i, this.biomeConfig.nonCollidableObjectSprite, u);
                break;
              case 14:
              case 17:
              case 22:
              case 23:
              case 24:
                this.placeNormalSprite(s, i, this.biomeConfig.nonCollidableObjectSprite, u);
                break;
              default:
                this.placeSquareSprite(s, i, this.biomeConfig.nonCollidableObjectSprite, u);
            }
        }
      }
    });
  }
  placeSquareSprite(e, t, s, i) {
    const n = [
      [e, t, s, i],
      [e + this.tileSize, t, s, i + 1],
      [e, t + this.tileSize, s, i + 2],
      [e + this.tileSize, t + this.tileSize, s, i + 3]
    ];
    for (const o of n)
      if (!this.placeNormalSprite(...o))
        break;
  }
  placeVerticalSprite(e, t, s, i) {
    const n = [
      [e, t, s, i],
      [e, t + this.tileSize, s, i + 1]
    ];
    for (const o of n)
      if (!this.placeNormalSprite(...o))
        break;
  }
  placeDungeonTiles(e, t, s = 10, i = 3) {
    if (e <= s + i && t <= s + i) {
      const n = (this.tileXYs[0].x + this.tileXYs[2].x) / 2, o = (this.tileXYs[0].y + this.tileXYs[1].y) / 2;
      if (e > i && t > i) {
        const l = this.scene.physics.add.image(n, o, this.biomeConfig.dungeonAsset, e - (i + 1) + (t - (i + 1)) * 10).setDepth(4);
        t > 2 + i && t < 7 + i && (l.setPushable(!1), this.scene.collidableObjects.add(l)), this.tiles.add(l);
      }
    }
  }
}
var ve = /* @__PURE__ */ ((r) => (r.CENTRAL = "CENTRAL", r))(ve || {}), ne = /* @__PURE__ */ ((r) => (r.BELOW_PLAYER = "BELOW_PLAYER_LAYER", r.ABOVE_PLAYER = "ABOVE_PLAYER_LAYER", r.OBJECTS = "OBJECTS_LAYER", r.PORTAL_LAYER = "PORTAL_LAYER", r.PORTAL_LAYER_ABOVE = "PORTAL_LAYER_ABOVE", r.EFFECT_LAYER = "EFFECT_LAYER", r.GLTICH_LAYER = "GLITCH_OVERLAY", r))(ne || {});
const V = (r) => `/assets/phaser/tilesets/${r}`, Ie = (r) => `/assets/phaser/characters/${r}`, z = (r) => `/assets/phaser/assetSprites/${r}`, ce = (r) => `/assets/phaser/joystickAssets/${r}`;
class Oe extends le {
  constructor(e, t, s, i, n, o, l) {
    super(e, t, s, i, n, o, !1, l), this.biomeConfig = {
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
      for (var e = 0; e < this.chunkSize; e++)
        for (var t = 0; t < this.chunkSize; t++) {
          var s = this.x * (this.chunkSize * this.tileSize) + e * this.tileSize + this.tileSize / 2, i = this.y * (this.chunkSize * this.tileSize) + t * this.tileSize + this.tileSize / 2;
          const n = this.perlin.perlin2(s / 100, i / 100);
          let o = 16;
          n > 0.2 && (o = 32);
          const l = this.scene.add.image(s, i, this.biomeConfig.terrainSprite, o);
          this.tiles.add(l);
        }
      this.isLoaded = !0;
    }
  }
}
class Pt extends pe.Image {
  constructor(e, t, s, i, n) {
    super(e, t + e.tileSize, s, i ? B.lootboxOpen.key : B.lootboxClosed.key), this.canOpenLootbox = !1, this.openImage = void 0, this.openInProgess = !1, this.setDepth(4), this.isOpened = i, this.parentScene = e, this.ID = n, this.scale = 0.8, e.add.existing(this);
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
    this.openImage || (this.openImage = this.parentScene.add.image(this.x, this.y - 40, B.openLootbox.key).setDepth(10).setScale(0.4));
  }
  triggerOpen() {
    this.openInProgess || (this.openInProgess = !0, this.openImage && (console.log("Destroying openImage:", this.openImage), this.openImage.destroy(), this.openImage = void 0), G.emit(H.LOOTBOX_OPEN, {
      lootboxID: this.ID
    }), this.Open());
  }
  Open() {
    this.openInProgess = !1, this.isOpened = !0, this.setTexture(B.lootboxOpen.key), this.openImage && (console.log("Destroying openImage in Open method:", this.openImage), this.openImage.destroy(), this.openImage = void 0);
  }
  saveState() {
    const e = JSON.parse(localStorage.getItem("lootboxState") || "{}");
    e[this.ID] = this.isOpened, localStorage.setItem("lootboxState", JSON.stringify(e));
  }
  loadState() {
    const e = JSON.parse(localStorage.getItem("lootboxState") || "{}");
    this.isOpened = e[this.ID] || !1, this.setTexture(this.isOpened ? B.lootboxOpen.key : B.lootboxClosed.key);
  }
  update() {
    if (this.isOpened)
      return;
    const e = this.checkIfPlayerIsNear();
    e && !this.canOpenLootbox ? this.showPopup() : !e && this.canOpenLootbox && this.openImage && (console.log("Destroying openImage in Open method:", this.openImage), this.openImage.destroy(), this.openImage = void 0), this.canOpenLootbox = e, this.canOpenLootbox && !this.openInProgess && this.parentScene.ekey.isDown && this.triggerOpen();
  }
}
function At(r, e, t, s) {
  const i = new me(s), n = i.nextInt(-1, 1), o = i.nextInt(-1, 1);
  var l = e * t * Math.round((r.x + n) / (e * t)), a = e * t * Math.round((r.y + o) / (e * t));
  return l = l / e / t, a = a / e / t, { x: l, y: a };
}
class j {
  constructor(e, t, s) {
    this.x = e, this.y = t, this.z = s;
  }
  dot2(e, t) {
    return this.x * e + this.y * t;
  }
  dot3(e, t, s) {
    return this.x * e + this.y * t + this.z * s;
  }
}
class Tt {
  constructor(e = 0, t = []) {
    this.permutationTable = [
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
    ], this.grad3 = [
      new j(1, 1, 0),
      new j(-1, 1, 0),
      new j(1, -1, 0),
      new j(-1, -1, 0),
      new j(1, 0, 1),
      new j(-1, 0, 1),
      new j(1, 0, -1),
      new j(-1, 0, -1),
      new j(0, 1, 1),
      new j(0, -1, 1),
      new j(0, 1, -1),
      new j(0, -1, -1)
    ], this.perm = new Array(512), this.gradP = new Array(512), this.peakPoints = [], this.F2 = 0.5 * (Math.sqrt(3) - 1), this.G2 = (3 - Math.sqrt(3)) / 6, this.F3 = 1 / 3, this.G3 = 1 / 6, e > 0 && e < 1 && (e *= 65536), e = Math.floor(e), e < 256 && (e |= e << 8);
    for (let s = 0; s < 256; s++) {
      let i;
      s & 1 ? i = this.permutationTable[s] ^ e & 255 : i = this.permutationTable[s] ^ e >> 8 & 255, this.perm[s] = this.perm[s + 256] = i, this.gradP[s] = this.gradP[s + 256] = this.grad3[i % 12];
    }
    this.peakPoints = t;
  }
  simplex2(e, t) {
    let s, i, n;
    const o = (e + t) * this.F2;
    let l = Math.floor(e + o), a = Math.floor(t + o);
    const h = (l + a) * this.G2, d = e - l + h, c = t - a + h;
    let u, m;
    d > c ? (u = 1, m = 0) : (u = 0, m = 1);
    const p = d - u + this.G2, f = c - m + this.G2, x = d - 1 + 2 * this.G2, y = c - 1 + 2 * this.G2;
    l &= 255, a &= 255;
    const b = this.gradP[l + this.perm[a]], C = this.gradP[l + u + this.perm[a + m]], S = this.gradP[l + 1 + this.perm[a + 1]];
    let E = 0.5 - d * d - c * c;
    E < 0 ? s = 0 : (E *= E, s = E * E * b.dot2(d, c));
    let D = 0.5 - p * p - f * f;
    D < 0 ? i = 0 : (D *= D, i = D * D * C.dot2(p, f));
    let k = 0.5 - x * x - y * y;
    return k < 0 ? n = 0 : (k *= k, n = k * k * S.dot2(x, y)), 70 * (s + i + n);
  }
  simplex3(e, t, s) {
    let i, n, o, l;
    const a = (e + t + s) * this.F3;
    let h = Math.floor(e + a), d = Math.floor(t + a), c = Math.floor(s + a);
    const u = (h + d + c) * this.G3, m = e - h + u, p = t - d + u, f = s - c + u;
    let x, y, b, C, S, E;
    m >= p ? p >= f ? (x = 1, y = 0, b = 0, C = 1, S = 1, E = 0) : m >= f ? (x = 1, y = 0, b = 0, C = 1, S = 0, E = 1) : (x = 0, y = 0, b = 1, C = 1, S = 0, E = 1) : p < f ? (x = 0, y = 0, b = 1, C = 0, S = 1, E = 1) : m < f ? (x = 0, y = 1, b = 0, C = 0, S = 1, E = 1) : (x = 0, y = 1, b = 0, C = 1, S = 1, E = 0);
    const D = m - x + this.G3, k = p - y + this.G3, I = f - b + this.G3, g = m - C + 2 * this.G3, v = p - S + 2 * this.G3, w = f - E + 2 * this.G3, _ = m - 1 + 3 * this.G3, O = p - 1 + 3 * this.G3, A = f - 1 + 3 * this.G3;
    h &= 255, d &= 255, c &= 255;
    const R = this.gradP[h + this.perm[d + this.perm[c]]], F = this.gradP[h + x + this.perm[d + y + this.perm[c + b]]], T = this.gradP[h + C + this.perm[d + S + this.perm[c + E]]], N = this.gradP[h + 1 + this.perm[d + 1 + this.perm[c + 1]]];
    let M = 0.6 - m * m - p * p - f * f;
    M < 0 ? i = 0 : (M *= M, i = M * M * R.dot3(m, p, f));
    let W = 0.6 - D * D - k * k - I * I;
    W < 0 ? n = 0 : (W *= W, n = W * W * F.dot3(D, k, I));
    let $ = 0.6 - g * g - v * v - w * w;
    $ < 0 ? o = 0 : ($ *= $, o = $ * $ * T.dot3(g, v, w));
    let te = 0.6 - _ * _ - O * O - A * A;
    return te < 0 ? l = 0 : (te *= te, l = te * te * N.dot3(_, O, A)), 32 * (i + n + o + l);
  }
  // ##### Perlin noise stuff
  fade(e) {
    return e * e * e * (e * (e * 6 - 15) + 10);
  }
  lerp(e, t, s) {
    return (1 - s) * e + s * t;
  }
  calculatePeakInfluence(e, t, s) {
    const i = e - s.x, n = t - s.y, o = Math.sqrt(i * i + n * n);
    if (o >= s.falloffRadius)
      return 0;
    const l = 0.5 * (1 + Math.cos(Math.PI * o / s.falloffRadius));
    return s.intensity * l;
  }
  perlin2(e, t) {
    let s = Math.floor(e), i = Math.floor(t);
    e = e - s, t = t - i, s = s & 255, i = i & 255;
    const n = this.gradP[s + this.perm[i]].dot2(e, t), o = this.gradP[s + this.perm[i + 1]].dot2(e, t - 1), l = this.gradP[s + 1 + this.perm[i]].dot2(e - 1, t), a = this.gradP[s + 1 + this.perm[i + 1]].dot2(e - 1, t - 1), h = this.fade(e), d = this.lerp(
      this.lerp(n, l, h),
      this.lerp(o, a, h),
      this.fade(t)
    );
    let c = 0;
    for (const u of this.peakPoints)
      c += this.calculatePeakInfluence(e + s, t + i, u);
    return Math.min(1, Math.max(-1, d + c));
  }
  // Add a new peak point
  addPeakPoint(e, t, s, i) {
    this.peakPoints.push({ x: e, y: t, intensity: s, falloffRadius: i }), console.log(this.peakPoints);
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
class Mt {
  constructor(e, t) {
    this.debug = !1, this.baseVelocityX = 15, this.baseVelocityY = 15, this.currVelocityX = 0, this.currVelocityY = 0, this.limitX = 10, this.limitY = 10, this.angle = 0, this.followPlayer = !1, this.radius = 500, this.graphics = void 0, this.ghostCircle = void 0, this.parentScene = e, this.parentPlayer = t, this.x = t.x, this.y = t.y, e.cameras.main.startFollow(this, !0, 0.1, 0.1, 1, 1), this.debug && (this.graphics = e.add.graphics(), this.ghostCircle = e.add.graphics());
  }
  getAngle() {
    const e = this.parentPlayer.x - this.x, t = this.parentPlayer.y - this.y;
    this.angle = Math.atan2(t, e);
  }
  getDistance() {
    const e = this.parentPlayer.x - this.x, t = this.parentPlayer.y - this.y;
    return Math.sqrt(e * e + t * t);
  }
  update() {
    const e = this.getDistance(), t = this.parentPlayer.x, s = this.parentPlayer.y, i = this.x - this.limitX, n = this.x + this.limitX, o = this.y - this.limitY, l = this.y + this.limitY;
    if ((!this.followPlayer && (t < i || t > n || s < o || s > l) || this.parentPlayer.currSpeed === 0) && (this.followPlayer = !0), this.followPlayer && e <= 5 && (this.followPlayer = !1), this.followPlayer) {
      this.getAngle();
      let a = e / this.radius * 1.2;
      this.currVelocityX = this.baseVelocityX * a, this.currVelocityY = this.baseVelocityY * a, this.parentScene.checkActive && (this.currVelocityX *= this.parentPlayer.cheatFactor, this.currVelocityY *= this.parentPlayer.cheatFactor), this.x += this.currVelocityX * Math.cos(this.angle), this.y += this.currVelocityY * Math.sin(this.angle);
    }
    this.debug && this.graphics && this.ghostCircle && (this.graphics.clear(), this.graphics.lineStyle(2, 65280, 1), this.graphics.strokeRect(i, o, 2 * this.limitX, 2 * this.limitY), this.ghostCircle.clear(), this.ghostCircle.lineStyle(2, 16711680, 1), this.ghostCircle.strokeCircle(this.x, this.y, 50));
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
class Bt extends We.Arcade.Sprite {
  constructor(e, t, s, i, n, o) {
    super(e, t, s, i, o), this.cursor = void 0, this.wKey = void 0, this.aKey = void 0, this.sKey = void 0, this.dKey = void 0, this.shiftKey = void 0, this.velocity = B.player.velocity, this.currSpeed = 0, this.cheatFactor = 2, this.changeCharacter = (l) => {
      this.setTexture(l), this.setupAnimations();
    }, this.parentScene = e, this.scale = window.innerHeight / (B.player.frameWidth * 10), this.cursor = n, this.setUpKeys(), this.setOrigin(0.5, 0.5), e.physics.add.existing(this), this.body.setSize(this.body.width * 0.5, this.body.height, !0), this.body.setOffset(this.body.offset.x, this.body.offset.y + 26), this.setScale(0.2), e.add.existing(this).setDepth(5), this.ghostPlayer = new Mt(this.parentScene, this);
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
      const t = Pe[e];
      this.anims.remove(e), this.anims.create({
        key: e,
        frames: this.anims.generateFrameNumbers(
          this.parentScene.characterURL,
          {
            start: t.startFrame,
            end: t.endFrame
          }
        ),
        frameRate: B.player.frameRate,
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
    var e, t, s, i, n, o, l, a;
    if (this.cursor) {
      if (this.cheatFactor = 2, this.cursor.up.isDown || (e = this.wKey) != null && e.isDown ? (t = this.shiftKey) != null && t.isDown && this.parentScene.checkActive ? this.moveUp(this.cheatFactor) : this.moveUp(1) : this.cursor.right.isDown || (s = this.dKey) != null && s.isDown ? (i = this.shiftKey) != null && i.isDown && this.parentScene.checkActive ? this.moveRight(this.cheatFactor) : this.moveRight(1) : this.cursor.down.isDown || (n = this.sKey) != null && n.isDown ? (o = this.shiftKey) != null && o.isDown && this.parentScene.checkActive ? this.moveDown(this.cheatFactor) : this.moveDown(1) : this.cursor.left.isDown || (l = this.aKey) != null && l.isDown ? (a = this.shiftKey) != null && a.isDown && this.parentScene.checkActive ? this.moveLeft(this.cheatFactor) : this.moveLeft(1) : this.idle(), this.parentScene.joystick) {
        const h = this.parentScene.joystick.forceX, d = this.parentScene.joystick.forceY;
        Math.abs(h) > 0.1 || Math.abs(d) > 0.1 ? Math.abs(h) > Math.abs(d) ? h > 0 ? this.moveRight(1) : this.moveLeft(1) : d > 0 ? this.moveDown(1) : this.moveUp(1) : this.idle();
      }
      this.ghostPlayer && this.ghostPlayer.update();
    }
  }
}
class Rt extends pe.Image {
  constructor(e, t, s, i, n = !1) {
    super(
      e,
      t + e.tileSize,
      s,
      B.openDungeon.key
    ), this.setVisible(!1), e.add.existing(this), this.parentScene = e, this.setDepth(10), this.setScale(0.4), this.canEnter = !1, this.dungeonIndex = i, this.diasbled = n;
  }
  checkIfPlayerIsNear() {
    return !this.parentScene.player || this.diasbled ? !1 : Math.abs(this.parentScene.player.x - this.x) < 100 && Math.abs(this.parentScene.player.y - this.y) < 100;
  }
  update() {
    if (!this.diasbled) {
      const e = this.checkIfPlayerIsNear();
      e && !this.canEnter && (console.log("Player is near dungeon", this.dungeonIndex), this.setVisible(!0)), !e && this.canEnter && this.visible && this.setVisible(!1), this.canEnter = e, this.canEnter && this.parentScene.input.keyboard.checkDown(this.parentScene.ekey, 250) && (console.log("Entering dungeon", this.dungeonIndex), G.emit(H.ENTER_DUNGEON, { RegionIndex: this.dungeonIndex }));
    }
  }
}
const P = {
  name: ve.CENTRAL,
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
      event: H.OPEN_MARKET,
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
      event: H.OPEN_LEADERBOARD,
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
      event: H.START_MATCHMAKING,
      coordinates: {
        x: 18,
        y: 13
      }
    }
  ]
};
ve.CENTRAL + "";
const Lt = Phaser.Input.Keyboard.Key, Ae = Phaser.Input.Keyboard.KeyCodes, Te = ["up", "down", "left", "right"];
class Nt {
  constructor(e) {
    this.scene = e, this.keys = {}, this.cursorKeys = {}, this.noKeyDown = !0;
    for (var t = 0, s = Te.length; t < s; t++) {
      var i = Te[t];
      this.addKey(i), this.cursorKeys[i] = this.keys[i];
    }
  }
  shutdown(e) {
    this.scene = void 0;
    for (var t in this.keys)
      this.keys[t].destroy();
    this.keys = void 0, this.cursorKeys = void 0;
  }
  destroy(e) {
    shutdown(e);
  }
  createCursorKeys() {
    return this.cursorKeys;
  }
  setKeyState(e, t) {
    var s = this.keys[e];
    return s.enabled ? (t && (this.noKeyDown = !1), s.isDown !== t && (de.timeStamp = Date.now(), de.keyCode = s.keyCode, t ? s.onDown(de) : s.onUp(de)), this) : this;
  }
  clearAllKeysState() {
    this.noKeyDown = !0;
    for (var e in this.keys)
      this.setKeyState(e, !1);
    return this;
  }
  getKeyState(e) {
    return this.keys[e];
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
  addKey(e, t) {
    return t === void 0 && (t = e), typeof t == "string" && (t = t.toUpperCase(), Ae.hasOwnProperty(t) && (t = Ae[t])), this.keys[e] = new Lt(this.scene, t), this;
  }
  addKeys(e) {
    for (var t = 0, s = e.length; t < s; t++)
      this.addKey(e[t]);
    return this;
  }
}
var de = {
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
var Kt = 180 / Math.PI, Ht = function(r) {
  return r * Kt;
};
const Wt = {
  "up&down": 0,
  "left&right": 1,
  "4dir": 2,
  "8dir": 3
};
var zt = function(r, e, t) {
  switch (t === void 0 ? t = {} : t === !0 && (t = jt), t.left = !1, t.right = !1, t.up = !1, t.down = !1, r = (r + 360) % 360, e) {
    case 0:
      r < 180 ? t.down = !0 : t.up = !0;
      break;
    case 1:
      r > 90 && r <= 270 ? t.left = !0 : t.right = !0;
      break;
    case 2:
      r > 45 && r <= 135 ? t.down = !0 : r > 135 && r <= 225 ? t.left = !0 : r > 225 && r <= 315 ? t.up = !0 : t.right = !0;
      break;
    case 3:
      r > 22.5 && r <= 67.5 ? (t.down = !0, t.right = !0) : r > 67.5 && r <= 112.5 ? t.down = !0 : r > 112.5 && r <= 157.5 ? (t.down = !0, t.left = !0) : r > 157.5 && r <= 202.5 ? t.left = !0 : r > 202.5 && r <= 247.5 ? (t.left = !0, t.up = !0) : r > 247.5 && r <= 292.5 ? t.up = !0 : (r > 292.5 && r <= 337.5 && (t.up = !0), t.right = !0);
      break;
  }
  return t;
}, jt = {};
const J = Phaser.Utils.Objects.GetValue, Gt = Phaser.Math.Distance.Between, Yt = Phaser.Math.Angle.Between;
class Vt extends Nt {
  constructor(e, t) {
    super(e), this.resetFromJSON(t);
  }
  resetFromJSON(e) {
    this.start == null && (this.start = { x: 0, y: 0 }), this.end == null && (this.end = { x: 0, y: 0 }), this._enable = void 0, this.setEnable(J(e, "enable", !0)), this.setMode(J(e, "dir", "8dir")), this.setDistanceThreshold(J(e, "forceMin", 16));
    var t = J(e, "start.x", null), s = J(e, "start.y", null), i = J(e, "end.x", null), n = J(e, "end.y", null);
    return this.setVector(t, s, i, n), this;
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
  setMode(e) {
    return typeof e == "string" && (e = Wt[e]), this.dirMode = e, this;
  }
  get enable() {
    return this._enable;
  }
  set enable(e) {
    if (this._enable !== e)
      return e || this.clearVector(), this._enable = e, this;
  }
  setEnable(e) {
    return e === void 0 && (e = !0), this.enable = e, this;
  }
  toggleEnable() {
    return this.setEnable(!this.enable), this;
  }
  setDistanceThreshold(e) {
    return e < 0 && (e = 0), this.forceMin = e, this;
  }
  clearVector() {
    return this.start.x = 0, this.start.y = 0, this.end.x = 0, this.end.y = 0, this.clearAllKeysState(), this;
  }
  setVector(e, t, s, i) {
    if (!this.enable)
      return this;
    if (e === null)
      return this.clearVector(), this;
    if (s === void 0 && (s = e, e = 0, i = t, t = 0), this.start.x = e, this.start.y = t, this.end.x = s, this.end.y = i, this.forceMin > 0 && this.force < this.forceMin)
      return this.clearVector(), this;
    this.noKeyDown = !0;
    var n = zt(this.angle, this.dirMode, !0);
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
    return Yt(this.start.x, this.start.y, this.end.x, this.end.y);
  }
  get angle() {
    return Ht(this.rotation);
  }
  get octant() {
    var e = 0;
    return this.rightKeyDown ? e = this.downKeyDown ? 45 : 0 : this.downKeyDown ? e = this.leftKeyDown ? 135 : 90 : this.leftKeyDown ? e = this.upKeyDown ? 225 : 180 : this.upKeyDown && (e = this.rightKeyDown ? 315 : 270), e;
  }
}
const Be = {
  setEventEmitter(r, e) {
    return e === void 0 && (e = Phaser.Events.EventEmitter), this._privateEE = r === !0 || r === void 0, this._eventEmitter = this._privateEE ? new e() : r, this;
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
var Xt = function(r, e, t) {
  var s = r.camera;
  return s ? (t === void 0 ? t = {} : t === !0 && (t = Ut), s === e ? (t.x = r.worldX, t.y = r.worldY) : s.getWorldPoint(r.x, r.y, t), t) : null;
}, Ut = {};
const xe = Phaser.Utils.Objects.GetValue, $t = Phaser.Geom.Circle, Jt = Phaser.Geom.Circle.Contains;
class Re extends Vt {
  constructor(e, t) {
    var s = e.scene;
    super(s, t);
    var i = xe(t, "eventEmitter", void 0), n = xe(t, "EventEmitterClass", void 0);
    this.setEventEmitter(i, n), this.scene = s, this.mainCamera = s.sys.cameras.main, this.pointer = void 0, this.gameObject = e, this.radius = xe(t, "radius", 100), e.setInteractive(new $t(e.displayOriginX, e.displayOriginY, this.radius), Jt), this.boot();
  }
  resetFromJSON(e) {
    return super.resetFromJSON(e), this.pointer = void 0, this;
  }
  toJSON() {
    var e = super.toJSON();
    return e.radius = this.radius, e;
  }
  boot() {
    this.gameObject.on("pointerdown", this.onKeyDownStart, this), this.gameObject.on("pointerover", this.onKeyDownStart, this), this.scene.input.on("pointermove", this.onKeyDown, this), this.scene.input.on("pointerup", this.onKeyUp, this), this.gameObject.once("destroy", this.onParentDestroy, this);
  }
  shutdown(e) {
    this.scene && (this.scene.input.off("pointermove", this.onKeyDown, this), this.scene.input.off("pointerup", this.onKeyUp, this), this.destroyEventEmitter(), this.scene = void 0, this.mainCamera = void 0, this.pointer = void 0, this.gameObject = void 0, super.shutdown());
  }
  get enable() {
    return this._enable;
  }
  // Override setter of enable
  set enable(e) {
    if (this._enable !== e)
      return e || (this.pointer = void 0), super.enable = e, this;
  }
  destroy(e) {
    this.shutdown(e);
  }
  onParentDestroy(e, t) {
    this.destroy(t);
  }
  onKeyDownStart(e) {
    !e.isDown || this.pointer !== void 0 || (this.pointer = e, this.onKeyDown(e), this.emit("pointerdown", e));
  }
  onKeyDown(e) {
    if (this.pointer === e) {
      var t = Xt(e, this.mainCamera, !0);
      if (t) {
        var s = e.camera, i = this.gameObject, n = i.x - s.scrollX * (i.scrollFactorX - 1), o = i.y - s.scrollY * (i.scrollFactorY - 1);
        this.setVector(n, o, t.x, t.y), this.end.x = t.x, this.end.y = t.y, this.emit("update");
      }
    }
  }
  onKeyUp(e) {
    this.pointer === e && (this.pointer = void 0, this.clearVector(), this.emit("update"), this.emit("pointerup", e));
  }
  forceUpdate() {
    var e = this.pointer;
    return !e || !e.isDown ? this : (this.onKeyDown(e), this);
  }
}
Object.assign(
  Re.prototype,
  Be
);
const X = Phaser.Utils.Objects.GetValue;
class Le {
  constructor(e, t) {
    t === void 0 && (t = {});
    var s = X(t, "eventEmitter", void 0), i = X(t, "EventEmitterClass", void 0);
    this.setEventEmitter(s, i), t.eventEmitter = this.getEventEmitter(), this.scene = e, this.base = void 0, this.thumb = void 0, this.touchCursor = void 0, this.setRadius(X(t, "radius", 100)), this.addBase(X(t, "base", void 0), t), this.addThumb(X(t, "thumb", void 0));
    var n = X(t, "x", 0), o = X(t, "y", 0);
    this.base.setPosition(n, o), this.thumb.setPosition(n, o), X(t, "fixed", !0) && this.setScrollFactor(0), this.boot();
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
  setPosition(e, t) {
    return this.x === e && this.y === t ? this : (this.x = e, this.y = t, this.forceUpdateThumb(), this);
  }
  set x(e) {
    this.x !== e && (this.base.x = e, this.thumb.x = e);
  }
  set y(e) {
    this.y !== e && (this.base.y = e, this.thumb.y = e);
  }
  get x() {
    return this.base.x;
  }
  get y() {
    return this.base.y;
  }
  setVisible(e) {
    return this.visible = e, this;
  }
  toggleVisible() {
    return this.visible = !this.visible, this;
  }
  get visible() {
    return this.base.visible;
  }
  set visible(e) {
    this.base.visible = e, this.thumb.visible = e, this.enable = e;
  }
  get enable() {
    return this.touchCursor.enable;
  }
  set enable(e) {
    this.touchCursor.setEnable(e);
  }
  setEnable(e) {
    return e === void 0 && (e = !0), this.enable = e, this;
  }
  toggleEnable() {
    return this.setEnable(!this.enable), this;
  }
  setRadius(e) {
    return this.radius = e, this;
  }
  addBase(e, t) {
    return this.base && this.base.destroy(), e === void 0 && (e = this.scene.add.circle(0, 0, this.radius).setStrokeStyle(3, 255)), t === void 0 && (t = {}), t.eventEmitter = this.getEventEmitter(), this.touchCursor = new Re(e, t), this.base = e, this;
  }
  addThumb(e) {
    return this.thumb && this.thumb.destroy(), e === void 0 && (e = this.scene.add.circle(0, 0, 40).setStrokeStyle(3, 65280)), this.thumb = e, this;
  }
  setScrollFactor(e) {
    return this.base.setScrollFactor(e), this.thumb.setScrollFactor(e), this;
  }
  boot() {
    this.on("update", this.update, this);
  }
  // Internal method
  update() {
    var e = this.touchCursor, t, s, i = e.dirMode;
    if (e.anyKeyDown)
      if (e.force > this.radius) {
        var n = e.rotation;
        t = i !== 0 ? Math.cos(n) * this.radius : 0, s = i !== 1 ? Math.sin(n) * this.radius : 0;
      } else
        t = i !== 0 ? e.forceX : 0, s = i !== 1 ? e.forceY : 0;
    else
      t = 0, s = 0;
    return this.thumb.x = this.base.x + t, this.thumb.y = this.base.y + s, this;
  }
  forceUpdateThumb() {
    return this.touchCursor.forceUpdate(), this;
  }
}
Object.assign(
  Le.prototype,
  Be
);
class qt extends pe.Rectangle {
  constructor(e, t, s) {
    super(
      e,
      t,
      s
    ), this.startMatchImage = void 0, this.matchmaking = !1, this.canMatchmake = !0, this.parentScene = e, this.scale = 3, this.setDepth(4), e.add.existing(this);
  }
  checkIfPlayerIsNear() {
    return this.parentScene.player ? Math.abs(this.parentScene.player.x - this.x) < 100 && Math.abs(this.parentScene.player.y - this.y) < 100 : !1;
  }
  endMatchMaking() {
    this.canMatchmake = !0, this.matchmaking = !1, this.startMatchImage && (this.startMatchImage.visible = !0);
  }
  showPopup() {
    const e = this.parentScene.sys.game.device.os.desktop ? B.arena.startMatchImage.key : B.arena.startMatchImageMobile.key;
    this.startMatchImage = this.parentScene.add.image(this.x, this.y, e).setDepth(10).setScale(0.3);
  }
  triggerMatchmake() {
    this.matchmaking || (this.matchmaking = !0, this.parentScene.pauseGame(), G.emit(H.START_MATCHMAKING), this.startMatchImage && (this.startMatchImage.visible = !1));
  }
  update() {
    if (this.matchmaking)
      return;
    const e = this.checkIfPlayerIsNear();
    e && !this.canMatchmake && this.showPopup(), !e && this.canMatchmake && this.startMatchImage && (this.startMatchImage.visible = !1), this.canMatchmake = e;
    const t = () => this.parentScene.sys.game.device.os.desktop && this.parentScene.enterKey ? this.parentScene.enterKey.isDown : !this.parentScene.sys.game.device.os.desktop && this.parentScene.ekey ? this.parentScene.input.keyboard.checkDown(this.parentScene.ekey, 250) : !1;
    this.canMatchmake && t() && this.triggerMatchmake();
  }
}
class Zt extends pe.Image {
  constructor(e, t, s, i, n) {
    super(
      e,
      t,
      s,
      n
    ), this.eventToEmit = i, this.setVisible(!1), e.add.existing(this), this.parentScene = e, this.setDepth(10), this.canInteract = !1, this.setScale(0.3);
  }
  checkIfPlayerIsNear() {
    return this.parentScene.player ? Math.abs(this.parentScene.player.x - this.x) < 100 && Math.abs(this.parentScene.player.y - this.y) < 100 : !1;
  }
  update() {
    const e = this.checkIfPlayerIsNear();
    e && !this.canInteract && this.setVisible(!0), !e && this.canInteract && this.visible && this.setVisible(!1), this.canInteract = e, this.canInteract && this.parentScene.input.keyboard.checkDown(this.parentScene.ekey, 250) && G.emit(this.eventToEmit);
  }
}
class Qt extends Me {
  constructor(e, t) {
    super({ key: "SceneMain", physics: { arcade: {} }, active: !0 }), this.resolution = 3e3, this.collidableObjects = void 0, this.chunkSize = 16, this.tileSize = 16, this.characterURL = "adventurer", this.loader = null, this.checkActive = !1, this.cheatCode = null, this.cheatTimeout = null, this.polygonData = [], this.lootboxes = [], this.lootboxDetails = [], this.ekey = void 0, this.enterKey = void 0, this.dungeonVertices = [], this.chunks = [], this.followPoint = void 0, this.joystick = void 0, this.EbuttonMobile = void 0, this.eButtonImage = void 0, this.homeButtonImage = void 0, this.player = null, this.spawnPoint = void 0, this.keyW = void 0, this.keyS = void 0, this.keyA = void 0, this.keyD = void 0, this.indices = [], this.debugGraphics = void 0, this.dungeons = [], this.dungeonObjects = [], this.arena = void 0, this.interactives = [], this.pauseGame = () => {
      this.scene.manager ? this.scene.pause() : this.scene && this.scene.systems && this.scene.systems.game && this.scene.systems.game.scene && (this.scene.manager = this.scene.systems.game.scene, this.scene.pause());
    }, this.resumeGame = () => {
      this.scene.manager ? this.scene.resume() : this.scene && this.scene.systems && this.scene.systems.game && this.scene.systems.game.scene && (this.scene.manager = this.scene.systems.game.scene, this.scene.resume());
    }, this.perlin = new Tt(), this.lootboxDetails = e, this.seed = "erg", this.polygons = new pt(this.seed);
  }
  preload() {
    const { lootboxOpen: e, lootboxClosed: t, openLootbox: s, openDungeon: i } = B;
    this.load.image(e.key, e.url), this.load.image(t.key, t.url), this.load.image(s.key, s.url), this.load.image(i.key, i.url), this.checkForCheat(), this.load.image(B.arena.startMatchImage.key, B.arena.startMatchImage.url), this.load.image(B.arena.startMatchImageMobile.key, B.arena.startMatchImageMobile.url);
    for (let n = 0; n < 2; n++)
      this.load.image(P.Interactives[n].image.key, P.Interactives[n].image.url);
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
      z("ground-biome-assets-noCollide.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.spritesheet(
      "flyingNonCollidable",
      z("flying-biome-assets-noCollide.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.spritesheet(
      "steelNonCollidable",
      z("steel-biome-assets-noCollide.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.spritesheet(
      "psychicNonCollidable",
      z("psychic-biome-assets-noCollide.png"),
      {
        frameWidth: 16,
        frameHeight: 16
      }
    ), this.load.atlas("ground-atlas", z("ground-biome-assets-collide-atlas.png"), z("ground-biome-assets-collide-atlas.json")), this.load.atlas("flying-atlas", z("flying-biome-assets-collide-atlas.png"), z("flying-biome-assets-collide-atlas.json")), this.load.atlas("steel-atlas", z("steel-biome-assets-collide-atlas.png"), z("steel-biome-assets-collide-atlas.json")), this.load.atlas("psychic-atlas", z("psychic-biome-assets-collide-atlas.png"), z("psychic-biome-assets-collide-atlas.json")), this.load.spritesheet(
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
      ce("joystick-inner.webp")
    ), this.load.image(
      "joystick-outer",
      ce("joystick-outer.webp")
    ), this.load.image(
      "home-button",
      ce("homeButton.webp")
    ), this.load.image(
      "e-button",
      ce("eButton.webp")
    ), this.load.image(
      P.asset.tileset.key,
      P.asset.tileset.url
    ), this.load.tilemapTiledJSON(
      P.asset.map.key,
      P.asset.map.url
    ), this.load.image(
      P.asset.overlay.key,
      P.asset.overlay.url
    ), this.load.image(
      P.asset.glitchTiles.key,
      P.asset.glitchTiles.url
    ), this.load.tilemapTiledJSON(
      P.asset.glitchMap.key,
      P.asset.glitchMap.url
    );
  }
  create() {
    this.cursor = this.input.keyboard.createCursorKeys(), this.ekey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E), this.enterKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    ), this.setPolygonData(), this.spawnPoint = { x: this.polygonData[0].centroid.x, y: this.polygonData[0].centroid.y }, this.player && this.player.destroy(), this.player = new Bt(
      this,
      this.spawnPoint.x,
      this.spawnPoint.y,
      this.characterURL,
      this.cursor
    ), this.player.changeCharacter(this.characterURL), this.sys.game.device.os.desktop ? this.cameras.main.setZoom(2.4) : this.cameras.main.setZoom(1.7), this.followPoint = new Phaser.Math.Vector2(
      this.spawnPoint.x,
      this.spawnPoint.y
    ), this.chunks = [], this.debugGraphics = this.add.graphics(), this.debugGraphics.lineStyle(2, 16711680, 1), this.physics.world.debugGraphic = this.debugGraphics, this.physics.world.drawDebug = !1, this.physics.world.debugGraphic.setAlpha(0), this.physics.world.debugGraphic.setDepth(5), this.collidableObjects = this.physics.add.group(), this.physics.add.collider(this.player, this.collidableObjects), this.loader = new Phaser.Loader.LoaderPlugin(this), this.addLootBoxes(), this.placeDungeonForEachPolygon(), G.on(H.LOOTBOX_OPEN, () => {
      this.pauseGame();
    }), G.on(H.LOOTBOX_OPENED, (e) => {
      this.resumeGame(), this.handleOpenLootbox(e);
    }), G.on(H.RESUME_GAME, () => {
      this.resumeGame();
    }), G.on(H.PAUSE_GAME, () => {
      this.pauseGame();
    }), G.on(H.CHANGE_CHARACTER, (e) => {
      this.handleCharacterChange(e);
    }), G.on(H.OPEN_DASHBOARD, () => {
      this.pauseGame(), this.disableKeys();
    }), G.on(H.CLOSE_DASHBOARD, () => {
      this.resumeGame(), this.enableKeys();
    }), G.on(H.MATCH_ENDED, () => {
      this.resumeGame(), this.arena.endMatchMaking();
    }), this.spawnPoint.x == this.polygonData[0].centroid.x && this.spawnPoint.y == this.polygonData[0].centroid.y && this.setupCentralMap(this.spawnPoint.x, this.spawnPoint.y), this.sys.game.device.os.desktop || (this.setUpJoystick(), this.setupEButton()), this.setupHomeButton(), this.setupArena(), this.setupInteractives(), this.polygons.getWorldBounds();
  }
  checkForCheat() {
    this.input.keyboard.on("keydown", (e) => {
      if (e.key === "d" || e.key === "e" || e.key === "l" || e.key === "t" || e.key === "a" || e.key === "f" || e.key === "o" || e.key === "r" || e.key === "c" || e.key === "e") {
        const t = "deltaforce";
        this.checkActive || (this.cheatCode && !t.startsWith(this.cheatCode) && (this.cheatCode = null), this.cheatCode = (this.cheatCode || "") + e.key, this.cheatCode === "deltaforce" && (console.log("Cheat entered"), this.checkActive = !0), this.cheatTimeout && clearTimeout(this.cheatTimeout), this.cheatTimeout = setTimeout(() => {
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
    const e = this.sys.game.device.os.desktop ? this.cameras.main.width * 0.69 : this.cameras.main.width * 0.7, t = this.sys.game.device.os.desktop ? this.cameras.main.height * 0.69 : this.cameras.main.height * 0.7;
    this.homeButtonImage = this.add.image(e, t, "home-button").setScale(0.15), this.homeButtonImage.setInteractive({ useHandCursor: !0 }), this.homeButtonImage.setDepth(20), this.homeButtonImage.setScrollFactor(0), console.log("Circle Position:", this.homeButtonImage.x, this.homeButtonImage.y), this.homeButtonImage.on("pointerdown", () => {
      this.player.x = this.polygonData[0].centroid.x, this.player.y = this.polygonData[0].centroid.y;
    });
  }
  setUpJoystick() {
    const e = this.cameras.main.height;
    this.cameras.main.width;
    const t = 50, s = e / 1.5;
    console.log("window height" + this.cameras.main.height), console.log("x: " + t + " y: " + s), this.joystick = new Le(this, {
      x: 280,
      y: s,
      base: this.add.image(0, 0, "joystick-outer").setAlpha(0.8).setDepth(20).setScale(0.2),
      thumb: this.add.image(0, 0, "joystick-inner").setDepth(20).setScale(0.2),
      radius: 35,
      dir: "4dir"
    });
  }
  setupCentralMap(e, t) {
    const s = this.make.tilemap({ key: P.asset.map.key }), i = s.addTilesetImage(
      P.asset.tileset.key,
      P.asset.tileset.key,
      16,
      16,
      1,
      2
    ), n = s.addTilesetImage(
      P.asset.overlay.key,
      P.asset.overlay.key,
      16,
      16,
      1,
      2
    ), o = this.make.tilemap({ key: P.asset.glitchMap.key }), l = o.addTilesetImage(
      P.asset.glitchTiles.key,
      P.asset.glitchTiles.key,
      16,
      16
    );
    if (!i || !o || !n || !l)
      return;
    const a = s.widthInPixels, h = s.heightInPixels, d = e - a / 2, c = t - h / 2 - this.tileSize * 3, u = e - o.widthInPixels / 2, m = t - o.heightInPixels / 2 - this.tileSize * 3;
    s.createLayer(ne.BELOW_PLAYER, i, d, c).setDepth(1), o.createLayer(ne.GLTICH_LAYER, l, u, m).setDepth(2);
    const p = s.createLayer(ne.OBJECTS, i, d, c).setDepth(5).setCollisionByProperty({ collides: !0 });
    s.createLayer(ne.ABOVE_PLAYER, [i, n], d, c).setDepth(6), this.physics.add.collider(this.player, p);
  }
  setPolygonData() {
    this.polygons.voronoi.cellPolygons(), this.polygons.calculatePolygonData(), this.polygonData = this.polygons.polygonData, this.polygonData.forEach((e) => {
      e.vertices = e.vertices.map((t) => ({ x: t.x * this.resolution, y: t.y * this.resolution })), e.reducedVertices = e.reducedVertices.map((t) => ({ x: t.x * this.resolution, y: t.y * this.resolution })), e.lootBoxesCoordinates = e.lootBoxesCoordinates.map((t) => ({ x: t.x * this.resolution, y: t.y * this.resolution })), e.gradientAreaCoordinates = e.gradientAreaCoordinates.map((t) => ({ x: t.x * this.resolution, y: t.y * this.resolution })), e.outerBorderCoordinates = e.outerBorderCoordinates.map((t) => ({ x: t.x * this.resolution, y: t.y * this.resolution })), e.centroid = { x: e.centroid.x * this.resolution, y: e.centroid.y * this.resolution };
    }), console.log(this.polygons.polygonData);
  }
  setupInteractives() {
    if (P.Interactives) {
      if (this.interactives)
        for (let e = 0; e < this.interactives.length; e++)
          this.interactives[e].destroy();
      this.interactives = [];
      for (const e of P.Interactives)
        if (e.name !== "ARENA") {
          if (!this.spawnPoint)
            return;
          this.interactives.push(new Zt(
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
    !this.spawnPoint || !P.Interactives || (this.arena = new qt(
      this,
      P.Interactives[2].coordinates.x * this.tileSize + this.spawnPoint.x,
      P.Interactives[2].coordinates.y * this.tileSize + this.spawnPoint.y
    ), console.log("Arena setup", this.arena.x, this.arena.y));
  }
  disableKeys() {
    this.input.keyboard && (this.input.keyboard.enabled = !1);
  }
  enableKeys() {
    this.input.keyboard && (this.input.keyboard.enabled = !0);
  }
  addLootBoxes() {
    let t = 0;
    for (let s of this.polygonData) {
      const i = [];
      for (let n of s.lootBoxesCoordinates) {
        let o = !0;
        for (let l of i)
          if (Phaser.Math.Distance.Between(n.x, n.y, l.x, l.y) < 500) {
            o = !1;
            break;
          }
        if (o && t < 65 && s.index !== 0) {
          console.log("lootbox", t);
          const l = new Pt(this, n.x, n.y, !1, t);
          l.loadState(), this.lootboxes.push(l), i.push(n), t++;
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
    const t = this.lootboxDetails;
    if (t !== void 0) {
      for (let s = 0; s < t.length; s++)
        if (t[s].ID === e) {
          t[s].isOpen = !0;
          break;
        }
    }
  }
  handleCharacterChange(e) {
    this.characterURL = e, this.loader && (this.loader.spritesheet(
      this.characterURL,
      Ie(this.characterURL),
      {
        frameWidth: B.player.frameWidth,
        frameHeight: B.player.frameHeight
      }
    ), this.loader.once("complete", () => {
      var t;
      (t = this.player) == null || t.changeCharacter(this.characterURL);
    }), this.sys.events && this.loader.start());
  }
  getCenterVertices() {
    return this.polygonData.map((t, s) => ({
      x: t.centroid.x,
      y: t.centroid.y,
      polygonIndex: t.polygonIndex
    }));
  }
  getDungeonVertices(e = 12345) {
    const t = this.getCenterVertices(), s = 500, i = (n) => {
      const o = Math.sin(e + n) * 2 * Math.PI % (2 * Math.PI);
      return { x: Math.cos(o) * s, y: Math.sin(o) * s };
    };
    return t.map((n, o) => {
      const l = i(o);
      return { x: n.x + l.x, y: n.y + l.y, index: n.polygonIndex };
    });
  }
  placeDungeonForEachPolygon() {
    console.log(this.polygonData);
    for (let e of this.polygonData) {
      let t = !1;
      e.index === 0 && (t = !0);
      const s = e.centroid, { x: i, y: n } = At(s, this.chunkSize, this.tileSize, this.seed);
      this.dungeons[e.index] = { x: i, y: n };
      const o = i * (this.chunkSize * this.tileSize) + this.chunkSize * this.tileSize / 2, l = n * (this.chunkSize * this.tileSize) + this.chunkSize * this.tileSize / 2;
      console.log("Peak:", e.index, o, l), this.dungeonObjects.push(new Rt(this, o, l, e.index, t)), this.perlin.addPeakPoint(o / 500, l / 500, 1, 20 * this.tileSize / 500), console.log("Dungeon:", this.dungeons[e.index]);
    }
  }
  isWithinBounds(e, t) {
    const s = this.chunkSize * this.tileSize, i = [
      { x: e * s, y: t * s },
      { x: (e + 1) * s, y: t * s },
      { x: e * s, y: (t + 1) * s },
      { x: (e + 1) * s, y: (t + 1) * s }
    ];
    for (let o of this.polygonData)
      for (let l of i)
        if (this.point_in_polygon(l, o.outerBorderCoordinates)) {
          var n;
          return o.index == 0 ? n = "home" : o.index >= 0 && o.index < 5 ? n = "flying" : o.index >= 5 && o.index < 10 ? n = "ground" : o.index >= 10 && o.index < 15 ? n = "steel" : n = "psychic", { withinBounds: !0, biomeType: n, index: o.index };
        }
    return { withinBounds: !1 };
  }
  point_in_polygon(e, t) {
    const s = t.length;
    var i = e.x, n = e.y;
    let o = !1, l = t[0], a;
    for (let h = 1; h <= s; h++) {
      if (a = t[h % s], n > Math.min(l.y, a.y) && n <= Math.max(l.y, a.y) && i <= Math.max(l.x, a.x)) {
        const d = (n - l.y) * (a.x - l.x) / (a.y - l.y) + l.x;
        (l.x === a.x || i <= d) && (o = !o);
      }
      l = a;
    }
    return o;
  }
  getChunk(e, t) {
    for (var s = null, i = 0; i < this.chunks.length; i++)
      this.chunks[i].x == e && this.chunks[i].y == t && (s = this.chunks[i]);
    return s;
  }
  checkIfDungeon(e, t) {
    for (let s of this.dungeons)
      if (s.x == e && s.y == t)
        return !0;
    return !1;
  }
  update() {
    var h;
    this.debugGraphics && this.debugGraphics.clear(), this.physics.world.drawDebug = !0, this.lootboxes.forEach((d) => d.update()), this.dungeonObjects.forEach((d) => d.update()), (h = this.arena) == null || h.update(), this.interactives.forEach((d) => d.update()), this.player && this.spawnPoint && (this.player.update(), this.events.emit("player-moved", Math.round(this.player.x - this.spawnPoint.x), Math.round(this.player.y - this.spawnPoint.y)));
    const e = this.chunkSize * this.tileSize;
    if (!this.player)
      return;
    const t = Math.round(this.player.x / e), s = Math.round(this.player.y / e);
    for (var i = t - 2; i < t + 2; i++)
      for (var n = s - 2; n < s + 2; n++) {
        const d = this.isWithinBounds(i, n), c = this.checkIfDungeon(i, n);
        if (d.withinBounds) {
          var o = this.getChunk(i, n);
          if (o == null) {
            let u;
            switch (d.biomeType) {
              case "home":
                if (typeof d.index == "number")
                  u = new Oe(this, i, n, this.chunkSize, this.tileSize, d.index, this.perlin);
                else
                  throw new Error("Expected result.index to be a number");
                break;
              case "steel":
                if (typeof d.index == "number")
                  i == 45 && n == 58 && console.log("isDungeon: ", c), u = new Ft(this, i, n, this.chunkSize, this.tileSize, d.index, c, this.perlin);
                else
                  throw new Error("Expected result.index to be a number");
                break;
              case "ground":
                if (typeof d.index == "number")
                  u = new bt(this, i, n, this.chunkSize, this.tileSize, d.index, c, this.perlin);
                else
                  throw new Error("Expected result.index to be a number");
                break;
              case "flying":
                if (typeof d.index == "number")
                  u = new vt(this, i, n, this.chunkSize, this.tileSize, d.index, c, this.perlin);
                else
                  throw new Error("Expected result.index to be a number");
                break;
              case "psychic":
                if (typeof d.index == "number")
                  u = new Ot(this, i, n, this.chunkSize, this.tileSize, d.index, c, this.perlin);
                else
                  throw new Error("Expected result.index to be a number");
                break;
              default:
                throw new Error(`Unknown biome type: ${d.biomeType}`);
            }
            this.chunks.push(u);
          }
        } else {
          var o = this.getChunk(i, n);
          if (o === null) {
            const m = new Oe(this, i, n, this.chunkSize, this.tileSize, -1, this.perlin);
            this.chunks.push(m);
          }
        }
      }
    for (var l = 0; l < this.chunks.length; l++) {
      var a = this.chunks[l];
      Phaser.Math.Distance.Between(
        t,
        s,
        a.x,
        a.y
      ) < 3 || t - a.x > 0 && t - a.x < 4 ? a !== null && a.load() : a !== null && a.unload();
    }
  }
}
class ei extends Me {
  constructor() {
    super({ key: "coordinatesOverlay", active: !0 }), this.xText = void 0, this.yText = void 0, this.gameScene = void 0;
  }
  create() {
    this.xText = this.add.text(10, 0, "X: 0", { font: "20px Courier" }).setScrollFactor(0).setDepth(20), this.yText = this.add.text(10, 0, "Y: 0", { font: "20px Courier" }).setScrollFactor(0).setDepth(20), this.gameScene || (this.gameScene = this.scene.get("SceneMain")), this.updateTextPosition(), this.scale.on("resize", () => {
      this.updateTextPosition();
    }), this.gameScene.events.on("player-moved", this.handlePlayerMove, this);
  }
  updateTextPosition() {
    const { height: e } = this.cameras.main, t = { x: 10, y: 30 };
    this.xText && this.yText && (this.xText.setPosition(t.x, e - t.y - 20), this.yText.setPosition(t.x, e - t.y));
  }
  handlePlayerMove(e, t) {
    this.xText && this.yText && (this.xText.setText(`X: ${e}`), this.yText.setText(`Y: ${t}`));
  }
  update() {
  }
}
var ti = Object.defineProperty, ii = Object.getOwnPropertyDescriptor, ae = (r, e, t, s) => {
  for (var i = s > 1 ? void 0 : s ? ii(e, t) : e, n = r.length - 1, o; n >= 0; n--)
    (o = r[n]) && (i = (s ? o(e, t, i) : o(i)) || i);
  return s && i && ti(e, t, i), i;
};
let U = class extends Ke {
  constructor() {
    super(...arguments), this.lootboxDetails = [], this.characterURL = "", this.clanFlagUrl = "", this.seedString = "";
  }
  firstUpdated() {
    var r;
    this.lootboxDetails.forEach((e) => {
    }), this.freeRoamGame = new se.Game({
      type: se.AUTO,
      pixelArt: !0,
      parent: ((r = this.shadowRoot) == null ? void 0 : r.querySelector("#free-roam")) ?? void 0,
      scene: [
        new Qt(
          this.lootboxDetails,
          this.seedString
        ),
        new ei()
      ],
      dom: {
        createContainer: !1
      },
      scale: {
        mode: se.Scale.RESIZE,
        autoCenter: se.Scale.CENTER_BOTH
      },
      fps: B.fps,
      backgroundColor: "#292634",
      physics: {
        default: "arcade",
        arcade: {
          gravity: { x: 0, y: 0 },
          debug: !1,
          fps: B.fps.target
        }
      },
      banner: !1
    });
  }
  disconnectedCallback() {
    this.freeRoamGame.destroy(!0, !1);
  }
  render() {
    const r = window.screen.width * window.devicePixelRatio, e = window.screen.height * window.devicePixelRatio;
    return window.innerHeight = e, window.innerWidth = r, He`<div id="free-roam"></div>`;
  }
};
U.styles = Ne`
		:host {
			display: block;
			width: 100%;
			height: 100%;
		}
	`;
ae([
  fe({ type: Array })
], U.prototype, "lootboxDetails", 2);
ae([
  fe({ type: String })
], U.prototype, "characterURL", 2);
ae([
  fe({ type: String })
], U.prototype, "clanFlagUrl", 2);
ae([
  fe({ type: String })
], U.prototype, "seedString", 2);
U = ae([
  je("free-roam")
], U);
Xe({
  tagName: "free-roam",
  elementClass: U,
  react: ze
});
//# sourceMappingURL=freeroam-arcadia-23.mjs.map
