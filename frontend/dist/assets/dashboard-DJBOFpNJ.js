var $o = Object.defineProperty;
var Yo = (e, t, i) =>
  t in e
    ? $o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
    : (e[t] = i);
var F = (e, t, i) => Yo(e, typeof t != "symbol" ? t + "" : t, i);
import {
  X as Rs,
  s as ot,
  Y as Ci,
  Z as Uo,
  v as X,
  o as ri,
  _ as Ko,
  w as xt,
  $ as Oi,
  D as Te,
  a0 as Fs,
  N as qo,
  H as bt,
  M as te,
  I as Se,
  J as Z,
  A as _,
  K as li,
  p as st,
  a1 as ve,
  j as ct,
  c as R,
  z as mt,
  a2 as Xo,
  a3 as Ae,
  q as dt,
  a4 as _e,
  a5 as Go,
  a6 as Es,
  d as Ze,
  B as G,
  a as Zt,
  a7 as Qo,
  m as Hi,
  a8 as zs,
  h as Zo,
  i as Jo,
  l as ta,
  t as Wi,
  a9 as Bs,
  aa as Kt,
  ab as Hs,
  F as ee,
  R as an,
  L as ea,
  T as ia,
  k as na,
  ac as sa,
  ad as oa,
  ae as aa,
  af as ra,
  b as la,
  ag as ca,
  ah as rn,
  ai as ha,
  aj as fi,
  ak as Ws,
  n as ua,
  e as Ns,
  al as gi,
  am as da,
  an as Ti,
  ao as fa,
  u as ga,
  ap as ma,
  aq as ln,
  ar as cn,
  P as pa,
} from "./index-C7jXg81h.js";
import { _ as ci, V as ba } from "./index-CAdGajTq.js";
import { a as It, V as se } from "./VRow-DPRUVnFG.js";
import { V as js } from "./VAlert-DxO0GYKQ.js";
import {
  k as $s,
  h as Ct,
  c as Ni,
  M as Ys,
  g as re,
  m as va,
  a as _a,
  l as xa,
  n as ya,
  b as ka,
  u as wa,
  d as Sa,
  o as Ma,
  p as Da,
  e as Pa,
  q as Ca,
  r as Oa,
  i as hn,
} from "./VGrid-B1elj0Wo.js";
import { m as Ta, V as un } from "./VTextField-C1W9uRpE.js";
import { f as Us, u as Aa } from "./forwardRefs-4syOH2-z.js";
import { m as Ia, u as La, V as Va, a as dn } from "./VList-BLDUHzcR.js";
import {
  m as Ra,
  V as Ks,
  a as fn,
  b as gn,
  g as Fa,
} from "./VOverlay-D5SsAUIM.js";
import { u as Ea } from "./scopeId-CFdMVFIo.js";
import { m as za, V as mn } from "./VSelectionControl-CzWoPqFI.js";
import { V as Ba } from "./VChip-D_ZD7wtx.js";
import "./lazy-CmFuK5uI.js";
const Ha = $s("v-spacer", "div", "VSpacer");
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */ function Ie(e) {
  return (e + 0.5) | 0;
}
const Lt = (e, t, i) => Math.max(Math.min(e, i), t);
function me(e) {
  return Lt(Ie(e * 2.55), 0, 255);
}
function Rt(e) {
  return Lt(Ie(e * 255), 0, 255);
}
function Pt(e) {
  return Lt(Ie(e / 2.55) / 100, 0, 1);
}
function pn(e) {
  return Lt(Ie(e * 100), 0, 100);
}
const ht = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Ai = [..."0123456789ABCDEF"],
  Wa = (e) => Ai[e & 15],
  Na = (e) => Ai[(e & 240) >> 4] + Ai[e & 15],
  Ve = (e) => (e & 240) >> 4 === (e & 15),
  ja = (e) => Ve(e.r) && Ve(e.g) && Ve(e.b) && Ve(e.a);
function $a(e) {
  var t = e.length,
    i;
  return (
    e[0] === "#" &&
      (t === 4 || t === 5
        ? (i = {
            r: 255 & (ht[e[1]] * 17),
            g: 255 & (ht[e[2]] * 17),
            b: 255 & (ht[e[3]] * 17),
            a: t === 5 ? ht[e[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (i = {
            r: (ht[e[1]] << 4) | ht[e[2]],
            g: (ht[e[3]] << 4) | ht[e[4]],
            b: (ht[e[5]] << 4) | ht[e[6]],
            a: t === 9 ? (ht[e[7]] << 4) | ht[e[8]] : 255,
          })),
    i
  );
}
const Ya = (e, t) => (e < 255 ? t(e) : "");
function Ua(e) {
  var t = ja(e) ? Wa : Na;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + Ya(e.a, t) : void 0;
}
const Ka =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function qs(e, t, i) {
  const n = t * Math.min(i, 1 - i),
    s = (o, a = (o + e / 30) % 12) =>
      i - n * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [s(0), s(8), s(4)];
}
function qa(e, t, i) {
  const n = (s, o = (s + e / 60) % 6) =>
    i - i * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [n(5), n(3), n(1)];
}
function Xa(e, t, i) {
  const n = qs(e, 1, 0.5);
  let s;
  for (t + i > 1 && ((s = 1 / (t + i)), (t *= s), (i *= s)), s = 0; s < 3; s++)
    (n[s] *= 1 - t - i), (n[s] += t);
  return n;
}
function Ga(e, t, i, n, s) {
  return e === s
    ? (t - i) / n + (t < i ? 6 : 0)
    : t === s
    ? (i - e) / n + 2
    : (e - t) / n + 4;
}
function ji(e) {
  const i = e.r / 255,
    n = e.g / 255,
    s = e.b / 255,
    o = Math.max(i, n, s),
    a = Math.min(i, n, s),
    r = (o + a) / 2;
  let l, c, h;
  return (
    o !== a &&
      ((h = o - a),
      (c = r > 0.5 ? h / (2 - o - a) : h / (o + a)),
      (l = Ga(i, n, s, h, o)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, r]
  );
}
function $i(e, t, i, n) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, i, n)).map(Rt);
}
function Yi(e, t, i) {
  return $i(qs, e, t, i);
}
function Qa(e, t, i) {
  return $i(Xa, e, t, i);
}
function Za(e, t, i) {
  return $i(qa, e, t, i);
}
function Xs(e) {
  return ((e % 360) + 360) % 360;
}
function Ja(e) {
  const t = Ka.exec(e);
  let i = 255,
    n;
  if (!t) return;
  t[5] !== n && (i = t[6] ? me(+t[5]) : Rt(+t[5]));
  const s = Xs(+t[2]),
    o = +t[3] / 100,
    a = +t[4] / 100;
  return (
    t[1] === "hwb"
      ? (n = Qa(s, o, a))
      : t[1] === "hsv"
      ? (n = Za(s, o, a))
      : (n = Yi(s, o, a)),
    { r: n[0], g: n[1], b: n[2], a: i }
  );
}
function tr(e, t) {
  var i = ji(e);
  (i[0] = Xs(i[0] + t)), (i = Yi(i)), (e.r = i[0]), (e.g = i[1]), (e.b = i[2]);
}
function er(e) {
  if (!e) return;
  const t = ji(e),
    i = t[0],
    n = pn(t[1]),
    s = pn(t[2]);
  return e.a < 255
    ? `hsla(${i}, ${n}%, ${s}%, ${Pt(e.a)})`
    : `hsl(${i}, ${n}%, ${s}%)`;
}
const bn = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  vn = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function ir() {
  const e = {},
    t = Object.keys(vn),
    i = Object.keys(bn);
  let n, s, o, a, r;
  for (n = 0; n < t.length; n++) {
    for (a = r = t[n], s = 0; s < i.length; s++)
      (o = i[s]), (r = r.replace(o, bn[o]));
    (o = parseInt(vn[a], 16)),
      (e[r] = [(o >> 16) & 255, (o >> 8) & 255, o & 255]);
  }
  return e;
}
let Re;
function nr(e) {
  Re || ((Re = ir()), (Re.transparent = [0, 0, 0, 0]));
  const t = Re[e.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const sr =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function or(e) {
  const t = sr.exec(e);
  let i = 255,
    n,
    s,
    o;
  if (t) {
    if (t[7] !== n) {
      const a = +t[7];
      i = t[8] ? me(a) : Lt(a * 255, 0, 255);
    }
    return (
      (n = +t[1]),
      (s = +t[3]),
      (o = +t[5]),
      (n = 255 & (t[2] ? me(n) : Lt(n, 0, 255))),
      (s = 255 & (t[4] ? me(s) : Lt(s, 0, 255))),
      (o = 255 & (t[6] ? me(o) : Lt(o, 0, 255))),
      { r: n, g: s, b: o, a: i }
    );
  }
}
function ar(e) {
  return (
    e &&
    (e.a < 255
      ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Pt(e.a)})`
      : `rgb(${e.r}, ${e.g}, ${e.b})`)
  );
}
const mi = (e) =>
    e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055,
  Gt = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4));
function rr(e, t, i) {
  const n = Gt(Pt(e.r)),
    s = Gt(Pt(e.g)),
    o = Gt(Pt(e.b));
  return {
    r: Rt(mi(n + i * (Gt(Pt(t.r)) - n))),
    g: Rt(mi(s + i * (Gt(Pt(t.g)) - s))),
    b: Rt(mi(o + i * (Gt(Pt(t.b)) - o))),
    a: e.a + i * (t.a - e.a),
  };
}
function Fe(e, t, i) {
  if (e) {
    let n = ji(e);
    (n[t] = Math.max(0, Math.min(n[t] + n[t] * i, t === 0 ? 360 : 1))),
      (n = Yi(n)),
      (e.r = n[0]),
      (e.g = n[1]),
      (e.b = n[2]);
  }
}
function Gs(e, t) {
  return e && Object.assign(t || {}, e);
}
function _n(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
        e.length > 3 && (t.a = Rt(e[3])))
      : ((t = Gs(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Rt(t.a))),
    t
  );
}
function lr(e) {
  return e.charAt(0) === "r" ? or(e) : Ja(e);
}
class Me {
  constructor(t) {
    if (t instanceof Me) return t;
    const i = typeof t;
    let n;
    i === "object"
      ? (n = _n(t))
      : i === "string" && (n = $a(t) || nr(t) || lr(t)),
      (this._rgb = n),
      (this._valid = !!n);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Gs(this._rgb);
    return t && (t.a = Pt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = _n(t);
  }
  rgbString() {
    return this._valid ? ar(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Ua(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? er(this._rgb) : void 0;
  }
  mix(t, i) {
    if (t) {
      const n = this.rgb,
        s = t.rgb;
      let o;
      const a = i === o ? 0.5 : i,
        r = 2 * a - 1,
        l = n.a - s.a,
        c = ((r * l === -1 ? r : (r + l) / (1 + r * l)) + 1) / 2;
      (o = 1 - c),
        (n.r = 255 & (c * n.r + o * s.r + 0.5)),
        (n.g = 255 & (c * n.g + o * s.g + 0.5)),
        (n.b = 255 & (c * n.b + o * s.b + 0.5)),
        (n.a = a * n.a + (1 - a) * s.a),
        (this.rgb = n);
    }
    return this;
  }
  interpolate(t, i) {
    return t && (this._rgb = rr(this._rgb, t._rgb, i)), this;
  }
  clone() {
    return new Me(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = Rt(t)), this;
  }
  clearer(t) {
    const i = this._rgb;
    return (i.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      i = Ie(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = i), this;
  }
  opaquer(t) {
    const i = this._rgb;
    return (i.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return Fe(this._rgb, 2, t), this;
  }
  darken(t) {
    return Fe(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Fe(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Fe(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return tr(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function St() {}
const cr = (() => {
  let e = 0;
  return () => e++;
})();
function $(e) {
  return e == null;
}
function Q(e) {
  if (Array.isArray && Array.isArray(e)) return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function E(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function ft(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function yt(e, t) {
  return ft(e) ? e : t;
}
function H(e, t) {
  return typeof e > "u" ? t : e;
}
const hr = (e, t) =>
  typeof e == "string" && e.endsWith("%") ? (parseFloat(e) / 100) * t : +e;
function j(e, t, i) {
  if (e && typeof e.call == "function") return e.apply(i, t);
}
function B(e, t, i, n) {
  let s, o, a;
  if (Q(e)) for (o = e.length, s = 0; s < o; s++) t.call(i, e[s], s);
  else if (E(e))
    for (a = Object.keys(e), o = a.length, s = 0; s < o; s++)
      t.call(i, e[a[s]], a[s]);
}
function Je(e, t) {
  let i, n, s, o;
  if (!e || !t || e.length !== t.length) return !1;
  for (i = 0, n = e.length; i < n; ++i)
    if (
      ((s = e[i]),
      (o = t[i]),
      s.datasetIndex !== o.datasetIndex || s.index !== o.index)
    )
      return !1;
  return !0;
}
function ti(e) {
  if (Q(e)) return e.map(ti);
  if (E(e)) {
    const t = Object.create(null),
      i = Object.keys(e),
      n = i.length;
    let s = 0;
    for (; s < n; ++s) t[i[s]] = ti(e[i[s]]);
    return t;
  }
  return e;
}
function Qs(e) {
  return ["__proto__", "prototype", "constructor"].indexOf(e) === -1;
}
function ur(e, t, i, n) {
  if (!Qs(e)) return;
  const s = t[e],
    o = i[e];
  E(s) && E(o) ? De(s, o, n) : (t[e] = ti(o));
}
function De(e, t, i) {
  const n = Q(t) ? t : [t],
    s = n.length;
  if (!E(e)) return e;
  i = i || {};
  const o = i.merger || ur;
  let a;
  for (let r = 0; r < s; ++r) {
    if (((a = n[r]), !E(a))) continue;
    const l = Object.keys(a);
    for (let c = 0, h = l.length; c < h; ++c) o(l[c], e, a, i);
  }
  return e;
}
function xe(e, t) {
  return De(e, t, { merger: dr });
}
function dr(e, t, i) {
  if (!Qs(e)) return;
  const n = t[e],
    s = i[e];
  E(n) && E(s)
    ? xe(n, s)
    : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = ti(s));
}
const xn = { "": (e) => e, x: (e) => e.x, y: (e) => e.y };
function fr(e) {
  const t = e.split("."),
    i = [];
  let n = "";
  for (const s of t)
    (n += s),
      n.endsWith("\\") ? (n = n.slice(0, -1) + ".") : (i.push(n), (n = ""));
  return i;
}
function gr(e) {
  const t = fr(e);
  return (i) => {
    for (const n of t) {
      if (n === "") break;
      i = i && i[n];
    }
    return i;
  };
}
function oe(e, t) {
  return (xn[t] || (xn[t] = gr(t)))(e);
}
function Ui(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Pe = (e) => typeof e < "u",
  zt = (e) => typeof e == "function",
  yn = (e, t) => {
    if (e.size !== t.size) return !1;
    for (const i of e) if (!t.has(i)) return !1;
    return !0;
  };
function mr(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const nt = Math.PI,
  Ft = 2 * nt,
  ei = Number.POSITIVE_INFINITY,
  pr = nt / 180,
  vt = nt / 2,
  Ht = nt / 4,
  kn = (nt * 2) / 3,
  Ii = Math.log10,
  Et = Math.sign;
function Ke(e, t, i) {
  return Math.abs(e - t) < i;
}
function wn(e) {
  const t = Math.round(e);
  e = Ke(e, t, e / 1e3) ? t : e;
  const i = Math.pow(10, Math.floor(Ii(e))),
    n = e / i;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i;
}
function br(e) {
  const t = [],
    i = Math.sqrt(e);
  let n;
  for (n = 1; n < i; n++) e % n === 0 && (t.push(n), t.push(e / n));
  return i === (i | 0) && t.push(i), t.sort((s, o) => s - o).pop(), t;
}
function ii(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function vr(e, t) {
  const i = Math.round(e);
  return i - t <= e && i + t >= e;
}
function _r(e, t, i) {
  let n, s, o;
  for (n = 0, s = e.length; n < s; n++)
    (o = e[n][i]),
      isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)));
}
function Yt(e) {
  return e * (nt / 180);
}
function xr(e) {
  return e * (180 / nt);
}
function Sn(e) {
  if (!ft(e)) return;
  let t = 1,
    i = 0;
  for (; Math.round(e * t) / t !== e; ) (t *= 10), i++;
  return i;
}
function yr(e, t) {
  const i = t.x - e.x,
    n = t.y - e.y,
    s = Math.sqrt(i * i + n * n);
  let o = Math.atan2(n, i);
  return o < -0.5 * nt && (o += Ft), { angle: o, distance: s };
}
function kr(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Wt(e) {
  return ((e % Ft) + Ft) % Ft;
}
function wr(e, t, i, n) {
  const s = Wt(e),
    o = Wt(t),
    a = Wt(i),
    r = Wt(o - s),
    l = Wt(a - s),
    c = Wt(s - o),
    h = Wt(s - a);
  return s === o || s === a || (n && o === a) || (r > l && c < h);
}
function _t(e, t, i) {
  return Math.max(t, Math.min(i, e));
}
function Sr(e) {
  return _t(e, -32768, 32767);
}
function Jt(e, t, i, n = 1e-6) {
  return e >= Math.min(t, i) - n && e <= Math.max(t, i) + n;
}
function Ki(e, t, i) {
  i = i || ((a) => e[a] < t);
  let n = e.length - 1,
    s = 0,
    o;
  for (; n - s > 1; ) (o = (s + n) >> 1), i(o) ? (s = o) : (n = o);
  return { lo: s, hi: n };
}
const Li = (e, t, i, n) =>
    Ki(
      e,
      i,
      n
        ? (s) => {
            const o = e[s][t];
            return o < i || (o === i && e[s + 1][t] === i);
          }
        : (s) => e[s][t] < i
    ),
  Mr = (e, t, i) => Ki(e, i, (n) => e[n][t] >= i);
function Dr(e, t, i) {
  let n = 0,
    s = e.length;
  for (; n < s && e[n] < t; ) n++;
  for (; s > n && e[s - 1] > i; ) s--;
  return n > 0 || s < e.length ? e.slice(n, s) : e;
}
const Zs = ["push", "pop", "shift", "splice", "unshift"];
function Pr(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    Zs.forEach((i) => {
      const n = "_onData" + Ui(i),
        s = e[i];
      Object.defineProperty(e, i, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const a = s.apply(this, o);
          return (
            e._chartjs.listeners.forEach((r) => {
              typeof r[n] == "function" && r[n](...o);
            }),
            a
          );
        },
      });
    });
}
function Mn(e, t) {
  const i = e._chartjs;
  if (!i) return;
  const n = i.listeners,
    s = n.indexOf(t);
  s !== -1 && n.splice(s, 1),
    !(n.length > 0) &&
      (Zs.forEach((o) => {
        delete e[o];
      }),
      delete e._chartjs);
}
function Js(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const to = (function () {
  return typeof window > "u"
    ? function (e) {
        return e();
      }
    : window.requestAnimationFrame;
})();
function eo(e, t) {
  let i = [],
    n = !1;
  return function (...s) {
    (i = s),
      n ||
        ((n = !0),
        to.call(window, () => {
          (n = !1), e.apply(t, i);
        }));
  };
}
function Cr(e, t) {
  let i;
  return function (...n) {
    return (
      t ? (clearTimeout(i), (i = setTimeout(e, t, n))) : e.apply(this, n), t
    );
  };
}
const qi = (e) => (e === "start" ? "left" : e === "end" ? "right" : "center"),
  et = (e, t, i) => (e === "start" ? t : e === "end" ? i : (t + i) / 2),
  Or = (e, t, i, n) =>
    e === (n ? "left" : "right") ? i : e === "center" ? (t + i) / 2 : t,
  Ee = (e) => e === 0 || e === 1,
  Dn = (e, t, i) =>
    -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * Ft) / i)),
  Pn = (e, t, i) => Math.pow(2, -10 * e) * Math.sin(((e - t) * Ft) / i) + 1,
  ye = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => -e * (e - 2),
    easeInOutQuad: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => (e -= 1) * e * e + 1,
    easeInOutCubic: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: (e) =>
      (e /= 0.5) < 1
        ? 0.5 * e * e * e * e * e
        : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: (e) => -Math.cos(e * vt) + 1,
    easeOutSine: (e) => Math.sin(e * vt),
    easeInOutSine: (e) => -0.5 * (Math.cos(nt * e) - 1),
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: (e) => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: (e) =>
      Ee(e)
        ? e
        : e < 0.5
        ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: (e) =>
      (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: (e) => (Ee(e) ? e : Dn(e, 0.075, 0.3)),
    easeOutElastic: (e) => (Ee(e) ? e : Pn(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return Ee(e)
        ? e
        : e < 0.5
        ? 0.5 * Dn(e * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * Pn(e * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158);
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
    },
    easeInOutBack(e) {
      let t = 1.70158;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    },
    easeInBounce: (e) => 1 - ye.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    },
    easeInOutBounce: (e) =>
      e < 0.5
        ? ye.easeInBounce(e * 2) * 0.5
        : ye.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
  };
function io(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Cn(e) {
  return io(e) ? e : new Me(e);
}
function pi(e) {
  return io(e) ? e : new Me(e).saturate(0.5).darken(0.1).hexString();
}
const Tr = ["x", "y", "borderWidth", "radius", "tension"],
  Ar = ["color", "borderColor", "backgroundColor"];
function Ir(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    e.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) =>
        t !== "onProgress" && t !== "onComplete" && t !== "fn",
    }),
    e.set("animations", {
      colors: { type: "color", properties: Ar },
      numbers: { type: "number", properties: Tr },
    }),
    e.describe("animations", { _fallback: "animation" }),
    e.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (t) => t | 0 },
        },
      },
    });
}
function Lr(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const On = new Map();
function Vr(e, t) {
  t = t || {};
  const i = e + JSON.stringify(t);
  let n = On.get(i);
  return n || ((n = new Intl.NumberFormat(e, t)), On.set(i, n)), n;
}
function no(e, t, i) {
  return Vr(t, i).format(e);
}
const so = {
  values(e) {
    return Q(e) ? e : "" + e;
  },
  numeric(e, t, i) {
    if (e === 0) return "0";
    const n = this.chart.options.locale;
    let s,
      o = e;
    if (i.length > 1) {
      const c = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), (o = Rr(e, i));
    }
    const a = Ii(Math.abs(o)),
      r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
      l = { notation: s, minimumFractionDigits: r, maximumFractionDigits: r };
    return Object.assign(l, this.options.ticks.format), no(e, n, l);
  },
  logarithmic(e, t, i) {
    if (e === 0) return "0";
    const n = i[t].significand || e / Math.pow(10, Math.floor(Ii(e)));
    return [1, 2, 3, 5, 10, 15].includes(n) || t > 0.8 * i.length
      ? so.numeric.call(this, e, t, i)
      : "";
  },
};
function Rr(e, t) {
  let i = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(i) >= 1 && e !== Math.floor(e) && (i = e - Math.floor(e)), i;
}
var oo = { formatters: so };
function Fr(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, i) => i.lineWidth,
      tickColor: (t, i) => i.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: oo.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    e.route("scale.ticks", "color", "", "color"),
    e.route("scale.grid", "color", "", "borderColor"),
    e.route("scale.border", "color", "", "borderColor"),
    e.route("scale.title", "color", "", "color"),
    e.describe("scale", {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith("before") &&
        !t.startsWith("after") &&
        t !== "callback" &&
        t !== "parser",
      _indexable: (t) =>
        t !== "borderDash" && t !== "tickBorderDash" && t !== "dash",
    }),
    e.describe("scales", { _fallback: "scale" }),
    e.describe("scale.ticks", {
      _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
      _indexable: (t) => t !== "backdropPadding",
    });
}
const qt = Object.create(null),
  Vi = Object.create(null);
function ke(e, t) {
  if (!t) return e;
  const i = t.split(".");
  for (let n = 0, s = i.length; n < s; ++n) {
    const o = i[n];
    e = e[o] || (e[o] = Object.create(null));
  }
  return e;
}
function bi(e, t, i) {
  return typeof t == "string" ? De(ke(e, t), i) : De(ke(e, ""), t);
}
class Er {
  constructor(t, i) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (n, s) => pi(s.backgroundColor)),
      (this.hoverBorderColor = (n, s) => pi(s.borderColor)),
      (this.hoverColor = (n, s) => pi(s.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(i);
  }
  set(t, i) {
    return bi(this, t, i);
  }
  get(t) {
    return ke(this, t);
  }
  describe(t, i) {
    return bi(Vi, t, i);
  }
  override(t, i) {
    return bi(qt, t, i);
  }
  route(t, i, n, s) {
    const o = ke(this, t),
      a = ke(this, n),
      r = "_" + i;
    Object.defineProperties(o, {
      [r]: { value: o[i], writable: !0 },
      [i]: {
        enumerable: !0,
        get() {
          const l = this[r],
            c = a[s];
          return E(l) ? Object.assign({}, c, l) : H(l, c);
        },
        set(l) {
          this[r] = l;
        },
      },
    });
  }
  apply(t) {
    t.forEach((i) => i(this));
  }
}
var q = new Er(
  {
    _scriptable: (e) => !e.startsWith("on"),
    _indexable: (e) => e !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [Ir, Lr, Fr]
);
function zr(e) {
  return !e || $(e.size) || $(e.family)
    ? null
    : (e.style ? e.style + " " : "") +
        (e.weight ? e.weight + " " : "") +
        e.size +
        "px " +
        e.family;
}
function Tn(e, t, i, n, s) {
  let o = t[s];
  return (
    o || ((o = t[s] = e.measureText(s).width), i.push(s)), o > n && (n = o), n
  );
}
function Nt(e, t, i) {
  const n = e.currentDevicePixelRatio,
    s = i !== 0 ? Math.max(i / 2, 0.5) : 0;
  return Math.round((t - s) * n) / n + s;
}
function An(e, t) {
  (!t && !e) ||
    ((t = t || e.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore());
}
function In(e, t, i, n) {
  ao(e, t, i, n, null);
}
function ao(e, t, i, n, s) {
  let o, a, r, l, c, h, u, d;
  const f = t.pointStyle,
    p = t.rotation,
    m = t.radius;
  let g = (p || 0) * pr;
  if (
    f &&
    typeof f == "object" &&
    ((o = f.toString()),
    o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")
  ) {
    e.save(),
      e.translate(i, n),
      e.rotate(g),
      e.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
      e.restore();
    return;
  }
  if (!(isNaN(m) || m <= 0)) {
    switch ((e.beginPath(), f)) {
      default:
        s ? e.ellipse(i, n, s / 2, m, 0, 0, Ft) : e.arc(i, n, m, 0, Ft),
          e.closePath();
        break;
      case "triangle":
        (h = s ? s / 2 : m),
          e.moveTo(i + Math.sin(g) * h, n - Math.cos(g) * m),
          (g += kn),
          e.lineTo(i + Math.sin(g) * h, n - Math.cos(g) * m),
          (g += kn),
          e.lineTo(i + Math.sin(g) * h, n - Math.cos(g) * m),
          e.closePath();
        break;
      case "rectRounded":
        (c = m * 0.516),
          (l = m - c),
          (a = Math.cos(g + Ht) * l),
          (u = Math.cos(g + Ht) * (s ? s / 2 - c : l)),
          (r = Math.sin(g + Ht) * l),
          (d = Math.sin(g + Ht) * (s ? s / 2 - c : l)),
          e.arc(i - u, n - r, c, g - nt, g - vt),
          e.arc(i + d, n - a, c, g - vt, g),
          e.arc(i + u, n + r, c, g, g + vt),
          e.arc(i - d, n + a, c, g + vt, g + nt),
          e.closePath();
        break;
      case "rect":
        if (!p) {
          (l = Math.SQRT1_2 * m),
            (h = s ? s / 2 : l),
            e.rect(i - h, n - l, 2 * h, 2 * l);
          break;
        }
        g += Ht;
      case "rectRot":
        (u = Math.cos(g) * (s ? s / 2 : m)),
          (a = Math.cos(g) * m),
          (r = Math.sin(g) * m),
          (d = Math.sin(g) * (s ? s / 2 : m)),
          e.moveTo(i - u, n - r),
          e.lineTo(i + d, n - a),
          e.lineTo(i + u, n + r),
          e.lineTo(i - d, n + a),
          e.closePath();
        break;
      case "crossRot":
        g += Ht;
      case "cross":
        (u = Math.cos(g) * (s ? s / 2 : m)),
          (a = Math.cos(g) * m),
          (r = Math.sin(g) * m),
          (d = Math.sin(g) * (s ? s / 2 : m)),
          e.moveTo(i - u, n - r),
          e.lineTo(i + u, n + r),
          e.moveTo(i + d, n - a),
          e.lineTo(i - d, n + a);
        break;
      case "star":
        (u = Math.cos(g) * (s ? s / 2 : m)),
          (a = Math.cos(g) * m),
          (r = Math.sin(g) * m),
          (d = Math.sin(g) * (s ? s / 2 : m)),
          e.moveTo(i - u, n - r),
          e.lineTo(i + u, n + r),
          e.moveTo(i + d, n - a),
          e.lineTo(i - d, n + a),
          (g += Ht),
          (u = Math.cos(g) * (s ? s / 2 : m)),
          (a = Math.cos(g) * m),
          (r = Math.sin(g) * m),
          (d = Math.sin(g) * (s ? s / 2 : m)),
          e.moveTo(i - u, n - r),
          e.lineTo(i + u, n + r),
          e.moveTo(i + d, n - a),
          e.lineTo(i - d, n + a);
        break;
      case "line":
        (a = s ? s / 2 : Math.cos(g) * m),
          (r = Math.sin(g) * m),
          e.moveTo(i - a, n - r),
          e.lineTo(i + a, n + r);
        break;
      case "dash":
        e.moveTo(i, n),
          e.lineTo(i + Math.cos(g) * (s ? s / 2 : m), n + Math.sin(g) * m);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function ro(e, t, i) {
  return (
    (i = i || 0.5),
    !t ||
      (e &&
        e.x > t.left - i &&
        e.x < t.right + i &&
        e.y > t.top - i &&
        e.y < t.bottom + i)
  );
}
function Xi(e, t) {
  e.save(),
    e.beginPath(),
    e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    e.clip();
}
function Gi(e) {
  e.restore();
}
function Br(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]),
    $(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline);
}
function Hr(e, t, i, n, s) {
  if (s.strikethrough || s.underline) {
    const o = e.measureText(n),
      a = t - o.actualBoundingBoxLeft,
      r = t + o.actualBoundingBoxRight,
      l = i - o.actualBoundingBoxAscent,
      c = i + o.actualBoundingBoxDescent,
      h = s.strikethrough ? (l + c) / 2 : c;
    (e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = s.decorationWidth || 2),
      e.moveTo(a, h),
      e.lineTo(r, h),
      e.stroke();
  }
}
function Wr(e, t) {
  const i = e.fillStyle;
  (e.fillStyle = t.color),
    e.fillRect(t.left, t.top, t.width, t.height),
    (e.fillStyle = i);
}
function Ce(e, t, i, n, s, o = {}) {
  const a = Q(t) ? t : [t],
    r = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = s.string, Br(e, o), l = 0; l < a.length; ++l)
    (c = a[l]),
      o.backdrop && Wr(e, o.backdrop),
      r &&
        (o.strokeColor && (e.strokeStyle = o.strokeColor),
        $(o.strokeWidth) || (e.lineWidth = o.strokeWidth),
        e.strokeText(c, i, n, o.maxWidth)),
      e.fillText(c, i, n, o.maxWidth),
      Hr(e, i, n, c, o),
      (n += Number(s.lineHeight));
  e.restore();
}
function ni(e, t) {
  const { x: i, y: n, w: s, h: o, radius: a } = t;
  e.arc(i + a.topLeft, n + a.topLeft, a.topLeft, 1.5 * nt, nt, !0),
    e.lineTo(i, n + o - a.bottomLeft),
    e.arc(i + a.bottomLeft, n + o - a.bottomLeft, a.bottomLeft, nt, vt, !0),
    e.lineTo(i + s - a.bottomRight, n + o),
    e.arc(
      i + s - a.bottomRight,
      n + o - a.bottomRight,
      a.bottomRight,
      vt,
      0,
      !0
    ),
    e.lineTo(i + s, n + a.topRight),
    e.arc(i + s - a.topRight, n + a.topRight, a.topRight, 0, -vt, !0),
    e.lineTo(i + a.topLeft, n);
}
const Nr = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  jr = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function $r(e, t) {
  const i = ("" + e).match(Nr);
  if (!i || i[1] === "normal") return t * 1.2;
  switch (((e = +i[2]), i[3])) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const Yr = (e) => +e || 0;
function lo(e, t) {
  const i = {},
    n = E(t),
    s = n ? Object.keys(t) : t,
    o = E(e) ? (n ? (a) => H(e[a], e[t[a]]) : (a) => e[a]) : () => e;
  for (const a of s) i[a] = Yr(o(a));
  return i;
}
function co(e) {
  return lo(e, { top: "y", right: "x", bottom: "y", left: "x" });
}
function ie(e) {
  return lo(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function gt(e) {
  const t = co(e);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function it(e, t) {
  (e = e || {}), (t = t || q.font);
  let i = H(e.size, t.size);
  typeof i == "string" && (i = parseInt(i, 10));
  let n = H(e.style, t.style);
  n &&
    !("" + n).match(jr) &&
    (console.warn('Invalid font style specified: "' + n + '"'), (n = void 0));
  const s = {
    family: H(e.family, t.family),
    lineHeight: $r(H(e.lineHeight, t.lineHeight), i),
    size: i,
    style: n,
    weight: H(e.weight, t.weight),
    string: "",
  };
  return (s.string = zr(s)), s;
}
function ze(e, t, i, n) {
  let s, o, a;
  for (s = 0, o = e.length; s < o; ++s)
    if (((a = e[s]), a !== void 0 && a !== void 0)) return a;
}
function Ur(e, t, i) {
  const { min: n, max: s } = e,
    o = hr(t, (s - n) / 2),
    a = (r, l) => (i && r === 0 ? 0 : r + l);
  return { min: a(n, -Math.abs(o)), max: a(s, o) };
}
function le(e, t) {
  return Object.assign(Object.create(e), t);
}
function Qi(e, t = [""], i, n, s = () => e[0]) {
  const o = i || e;
  typeof n > "u" && (n = go("_fallback", e));
  const a = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: o,
    _fallback: n,
    _getTarget: s,
    override: (r) => Qi([r, ...e], t, o, n),
  };
  return new Proxy(a, {
    deleteProperty(r, l) {
      return delete r[l], delete r._keys, delete e[0][l], !0;
    },
    get(r, l) {
      return uo(r, l, () => tl(l, t, e, r));
    },
    getOwnPropertyDescriptor(r, l) {
      return Reflect.getOwnPropertyDescriptor(r._scopes[0], l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    has(r, l) {
      return Vn(r).includes(l);
    },
    ownKeys(r) {
      return Vn(r);
    },
    set(r, l, c) {
      const h = r._storage || (r._storage = s());
      return (r[l] = h[l] = c), delete r._keys, !0;
    },
  });
}
function ae(e, t, i, n) {
  const s = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: i,
    _stack: new Set(),
    _descriptors: ho(e, n),
    setContext: (o) => ae(e, o, i, n),
    override: (o) => ae(e.override(o), t, i, n),
  };
  return new Proxy(s, {
    deleteProperty(o, a) {
      return delete o[a], delete e[a], !0;
    },
    get(o, a, r) {
      return uo(o, a, () => qr(o, a, r));
    },
    getOwnPropertyDescriptor(o, a) {
      return o._descriptors.allKeys
        ? Reflect.has(e, a)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    has(o, a) {
      return Reflect.has(e, a);
    },
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    set(o, a, r) {
      return (e[a] = r), delete o[a], !0;
    },
  });
}
function ho(e, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: i = t.scriptable,
    _indexable: n = t.indexable,
    _allKeys: s = t.allKeys,
  } = e;
  return {
    allKeys: s,
    scriptable: i,
    indexable: n,
    isScriptable: zt(i) ? i : () => i,
    isIndexable: zt(n) ? n : () => n,
  };
}
const Kr = (e, t) => (e ? e + Ui(t) : t),
  Zi = (e, t) =>
    E(t) &&
    e !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function uo(e, t, i) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
    return e[t];
  const n = i();
  return (e[t] = n), n;
}
function qr(e, t, i) {
  const { _proxy: n, _context: s, _subProxy: o, _descriptors: a } = e;
  let r = n[t];
  return (
    zt(r) && a.isScriptable(t) && (r = Xr(t, r, e, i)),
    Q(r) && r.length && (r = Gr(t, r, e, a.isIndexable)),
    Zi(t, r) && (r = ae(r, s, o && o[t], a)),
    r
  );
}
function Xr(e, t, i, n) {
  const { _proxy: s, _context: o, _subProxy: a, _stack: r } = i;
  if (r.has(e))
    throw new Error(
      "Recursion detected: " + Array.from(r).join("->") + "->" + e
    );
  r.add(e);
  let l = t(o, a || n);
  return r.delete(e), Zi(e, l) && (l = Ji(s._scopes, s, e, l)), l;
}
function Gr(e, t, i, n) {
  const { _proxy: s, _context: o, _subProxy: a, _descriptors: r } = i;
  if (typeof o.index < "u" && n(e)) return t[o.index % t.length];
  if (E(t[0])) {
    const l = t,
      c = s._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const u = Ji(c, s, e, h);
      t.push(ae(u, o, a && a[e], r));
    }
  }
  return t;
}
function fo(e, t, i) {
  return zt(e) ? e(t, i) : e;
}
const Qr = (e, t) => (e === !0 ? t : typeof e == "string" ? oe(t, e) : void 0);
function Zr(e, t, i, n, s) {
  for (const o of t) {
    const a = Qr(i, o);
    if (a) {
      e.add(a);
      const r = fo(a._fallback, i, s);
      if (typeof r < "u" && r !== i && r !== n) return r;
    } else if (a === !1 && typeof n < "u" && i !== n) return null;
  }
  return !1;
}
function Ji(e, t, i, n) {
  const s = t._rootScopes,
    o = fo(t._fallback, i, n),
    a = [...e, ...s],
    r = new Set();
  r.add(n);
  let l = Ln(r, a, i, o || i, n);
  return l === null ||
    (typeof o < "u" && o !== i && ((l = Ln(r, a, o, l, n)), l === null))
    ? !1
    : Qi(Array.from(r), [""], s, o, () => Jr(t, i, n));
}
function Ln(e, t, i, n, s) {
  for (; i; ) i = Zr(e, t, i, n, s);
  return i;
}
function Jr(e, t, i) {
  const n = e._getTarget();
  t in n || (n[t] = {});
  const s = n[t];
  return Q(s) && E(i) ? i : s || {};
}
function tl(e, t, i, n) {
  let s;
  for (const o of t)
    if (((s = go(Kr(o, e), i)), typeof s < "u"))
      return Zi(e, s) ? Ji(i, n, e, s) : s;
}
function go(e, t) {
  for (const i of t) {
    if (!i) continue;
    const n = i[e];
    if (typeof n < "u") return n;
  }
}
function Vn(e) {
  let t = e._keys;
  return t || (t = e._keys = el(e._scopes)), t;
}
function el(e) {
  const t = new Set();
  for (const i of e)
    for (const n of Object.keys(i).filter((s) => !s.startsWith("_"))) t.add(n);
  return Array.from(t);
}
function tn() {
  return typeof window < "u" && typeof document < "u";
}
function en(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function si(e, t, i) {
  let n;
  return (
    typeof e == "string"
      ? ((n = parseInt(e, 10)),
        e.indexOf("%") !== -1 && (n = (n / 100) * t.parentNode[i]))
      : (n = e),
    n
  );
}
const hi = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function il(e, t) {
  return hi(e).getPropertyValue(t);
}
const nl = ["top", "right", "bottom", "left"];
function Ut(e, t, i) {
  const n = {};
  i = i ? "-" + i : "";
  for (let s = 0; s < 4; s++) {
    const o = nl[s];
    n[o] = parseFloat(e[t + "-" + o + i]) || 0;
  }
  return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n;
}
const sl = (e, t, i) => (e > 0 || t > 0) && (!i || !i.shadowRoot);
function ol(e, t) {
  const i = e.touches,
    n = i && i.length ? i[0] : e,
    { offsetX: s, offsetY: o } = n;
  let a = !1,
    r,
    l;
  if (sl(s, o, e.target)) (r = s), (l = o);
  else {
    const c = t.getBoundingClientRect();
    (r = n.clientX - c.left), (l = n.clientY - c.top), (a = !0);
  }
  return { x: r, y: l, box: a };
}
function $t(e, t) {
  if ("native" in e) return e;
  const { canvas: i, currentDevicePixelRatio: n } = t,
    s = hi(i),
    o = s.boxSizing === "border-box",
    a = Ut(s, "padding"),
    r = Ut(s, "border", "width"),
    { x: l, y: c, box: h } = ol(e, i),
    u = a.left + (h && r.left),
    d = a.top + (h && r.top);
  let { width: f, height: p } = t;
  return (
    o && ((f -= a.width + r.width), (p -= a.height + r.height)),
    {
      x: Math.round((((l - u) / f) * i.width) / n),
      y: Math.round((((c - d) / p) * i.height) / n),
    }
  );
}
function al(e, t, i) {
  let n, s;
  if (t === void 0 || i === void 0) {
    const o = e && en(e);
    if (!o) (t = e.clientWidth), (i = e.clientHeight);
    else {
      const a = o.getBoundingClientRect(),
        r = hi(o),
        l = Ut(r, "border", "width"),
        c = Ut(r, "padding");
      (t = a.width - c.width - l.width),
        (i = a.height - c.height - l.height),
        (n = si(r.maxWidth, o, "clientWidth")),
        (s = si(r.maxHeight, o, "clientHeight"));
    }
  }
  return { width: t, height: i, maxWidth: n || ei, maxHeight: s || ei };
}
const Be = (e) => Math.round(e * 10) / 10;
function rl(e, t, i, n) {
  const s = hi(e),
    o = Ut(s, "margin"),
    a = si(s.maxWidth, e, "clientWidth") || ei,
    r = si(s.maxHeight, e, "clientHeight") || ei,
    l = al(e, t, i);
  let { width: c, height: h } = l;
  if (s.boxSizing === "content-box") {
    const d = Ut(s, "border", "width"),
      f = Ut(s, "padding");
    (c -= f.width + d.width), (h -= f.height + d.height);
  }
  return (
    (c = Math.max(0, c - o.width)),
    (h = Math.max(0, n ? c / n : h - o.height)),
    (c = Be(Math.min(c, a, l.maxWidth))),
    (h = Be(Math.min(h, r, l.maxHeight))),
    c && !h && (h = Be(c / 2)),
    (t !== void 0 || i !== void 0) &&
      n &&
      l.height &&
      h > l.height &&
      ((h = l.height), (c = Be(Math.floor(h * n)))),
    { width: c, height: h }
  );
}
function Rn(e, t, i) {
  const n = t || 1,
    s = Math.floor(e.height * n),
    o = Math.floor(e.width * n);
  (e.height = Math.floor(e.height)), (e.width = Math.floor(e.width));
  const a = e.canvas;
  return (
    a.style &&
      (i || (!a.style.height && !a.style.width)) &&
      ((a.style.height = `${e.height}px`), (a.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== n || a.height !== s || a.width !== o
      ? ((e.currentDevicePixelRatio = n),
        (a.height = s),
        (a.width = o),
        e.ctx.setTransform(n, 0, 0, n, 0, 0),
        !0)
      : !1
  );
}
const ll = (function () {
  let e = !1;
  try {
    const t = {
      get passive() {
        return (e = !0), !1;
      },
    };
    tn() &&
      (window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t));
  } catch {}
  return e;
})();
function Fn(e, t) {
  const i = il(e, t),
    n = i && i.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
const cl = function (e, t) {
    return {
      x(i) {
        return e + e + t - i;
      },
      setWidth(i) {
        t = i;
      },
      textAlign(i) {
        return i === "center" ? i : i === "right" ? "left" : "right";
      },
      xPlus(i, n) {
        return i - n;
      },
      leftForLtr(i, n) {
        return i - n;
      },
    };
  },
  hl = function () {
    return {
      x(e) {
        return e;
      },
      setWidth(e) {},
      textAlign(e) {
        return e;
      },
      xPlus(e, t) {
        return e + t;
      },
      leftForLtr(e, t) {
        return e;
      },
    };
  };
function ne(e, t, i) {
  return e ? cl(t, i) : hl();
}
function mo(e, t) {
  let i, n;
  (t === "ltr" || t === "rtl") &&
    ((i = e.canvas.style),
    (n = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")]),
    i.setProperty("direction", t, "important"),
    (e.prevTextDirection = n));
}
function po(e, t) {
  t !== void 0 &&
    (delete e.prevTextDirection,
    e.canvas.style.setProperty("direction", t[0], t[1]));
}
/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class ul {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, i, n, s) {
    const o = i.listeners[s],
      a = i.duration;
    o.forEach((r) =>
      r({
        chart: t,
        initial: i.initial,
        numSteps: a,
        currentStep: Math.min(n - i.start, a),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = to.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let i = 0;
    this._charts.forEach((n, s) => {
      if (!n.running || !n.items.length) return;
      const o = n.items;
      let a = o.length - 1,
        r = !1,
        l;
      for (; a >= 0; --a)
        (l = o[a]),
          l._active
            ? (l._total > n.duration && (n.duration = l._total),
              l.tick(t),
              (r = !0))
            : ((o[a] = o[o.length - 1]), o.pop());
      r && (s.draw(), this._notify(s, n, t, "progress")),
        o.length ||
          ((n.running = !1),
          this._notify(s, n, t, "complete"),
          (n.initial = !1)),
        (i += o.length);
    }),
      (this._lastDate = t),
      i === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const i = this._charts;
    let n = i.get(t);
    return (
      n ||
        ((n = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        i.set(t, n)),
      n
    );
  }
  listen(t, i, n) {
    this._getAnims(t).listeners[i].push(n);
  }
  add(t, i) {
    !i || !i.length || this._getAnims(t).items.push(...i);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const i = this._charts.get(t);
    i &&
      ((i.running = !0),
      (i.start = Date.now()),
      (i.duration = i.items.reduce((n, s) => Math.max(n, s._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const i = this._charts.get(t);
    return !(!i || !i.running || !i.items.length);
  }
  stop(t) {
    const i = this._charts.get(t);
    if (!i || !i.items.length) return;
    const n = i.items;
    let s = n.length - 1;
    for (; s >= 0; --s) n[s].cancel();
    (i.items = []), this._notify(t, i, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Mt = new ul();
const En = "transparent",
  dl = {
    boolean(e, t, i) {
      return i > 0.5 ? t : e;
    },
    color(e, t, i) {
      const n = Cn(e || En),
        s = n.valid && Cn(t || En);
      return s && s.valid ? s.mix(n, i).hexString() : t;
    },
    number(e, t, i) {
      return e + (t - e) * i;
    },
  };
class fl {
  constructor(t, i, n, s) {
    const o = i[n];
    s = ze([t.to, s, o, t.from]);
    const a = ze([t.from, o, s]);
    (this._active = !0),
      (this._fn = t.fn || dl[t.type || typeof a]),
      (this._easing = ye[t.easing] || ye.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = i),
      (this._prop = n),
      (this._from = a),
      (this._to = s),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, i, n) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop],
        o = n - this._start,
        a = this._duration - o;
      (this._start = n),
        (this._duration = Math.floor(Math.max(a, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = ze([t.to, i, s, t.from])),
        (this._from = ze([t.from, s, i]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const i = t - this._start,
      n = this._duration,
      s = this._prop,
      o = this._from,
      a = this._loop,
      r = this._to;
    let l;
    if (((this._active = o !== r && (a || i < n)), !this._active)) {
      (this._target[s] = r), this._notify(!0);
      return;
    }
    if (i < 0) {
      this._target[s] = o;
      return;
    }
    (l = (i / n) % 2),
      (l = a && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[s] = this._fn(o, r, l));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((i, n) => {
      t.push({ res: i, rej: n });
    });
  }
  _notify(t) {
    const i = t ? "res" : "rej",
      n = this._promises || [];
    for (let s = 0; s < n.length; s++) n[s][i]();
  }
}
class bo {
  constructor(t, i) {
    (this._chart = t), (this._properties = new Map()), this.configure(i);
  }
  configure(t) {
    if (!E(t)) return;
    const i = Object.keys(q.animation),
      n = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!E(o)) return;
      const a = {};
      for (const r of i) a[r] = o[r];
      ((Q(o.properties) && o.properties) || [s]).forEach((r) => {
        (r === s || !n.has(r)) && n.set(r, a);
      });
    });
  }
  _animateOptions(t, i) {
    const n = i.options,
      s = ml(t, n);
    if (!s) return [];
    const o = this._createAnimations(s, n);
    return (
      n.$shared &&
        gl(t.options.$animations, n).then(
          () => {
            t.options = n;
          },
          () => {}
        ),
      o
    );
  }
  _createAnimations(t, i) {
    const n = this._properties,
      s = [],
      o = t.$animations || (t.$animations = {}),
      a = Object.keys(i),
      r = Date.now();
    let l;
    for (l = a.length - 1; l >= 0; --l) {
      const c = a[l];
      if (c.charAt(0) === "$") continue;
      if (c === "options") {
        s.push(...this._animateOptions(t, i));
        continue;
      }
      const h = i[c];
      let u = o[c];
      const d = n.get(c);
      if (u)
        if (d && u.active()) {
          u.update(d, h, r);
          continue;
        } else u.cancel();
      if (!d || !d.duration) {
        t[c] = h;
        continue;
      }
      (o[c] = u = new fl(d, t, c, h)), s.push(u);
    }
    return s;
  }
  update(t, i) {
    if (this._properties.size === 0) {
      Object.assign(t, i);
      return;
    }
    const n = this._createAnimations(t, i);
    if (n.length) return Mt.add(this._chart, n), !0;
  }
}
function gl(e, t) {
  const i = [],
    n = Object.keys(t);
  for (let s = 0; s < n.length; s++) {
    const o = e[n[s]];
    o && o.active() && i.push(o.wait());
  }
  return Promise.all(i);
}
function ml(e, t) {
  if (!t) return;
  let i = e.options;
  if (!i) {
    e.options = t;
    return;
  }
  return (
    i.$shared &&
      (e.options = i = Object.assign({}, i, { $shared: !1, $animations: {} })),
    i
  );
}
function zn(e, t) {
  const i = (e && e.options) || {},
    n = i.reverse,
    s = i.min === void 0 ? t : 0,
    o = i.max === void 0 ? t : 0;
  return { start: n ? o : s, end: n ? s : o };
}
function pl(e, t, i) {
  if (i === !1) return !1;
  const n = zn(e, i),
    s = zn(t, i);
  return { top: s.end, right: n.end, bottom: s.start, left: n.start };
}
function bl(e) {
  let t, i, n, s;
  return (
    E(e)
      ? ((t = e.top), (i = e.right), (n = e.bottom), (s = e.left))
      : (t = i = n = s = e),
    { top: t, right: i, bottom: n, left: s, disabled: e === !1 }
  );
}
function vo(e, t) {
  const i = [],
    n = e._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = n.length; s < o; ++s) i.push(n[s].index);
  return i;
}
function Bn(e, t, i, n = {}) {
  const s = e.keys,
    o = n.mode === "single";
  let a, r, l, c;
  if (t === null) return;
  let h = !1;
  for (a = 0, r = s.length; a < r; ++a) {
    if (((l = +s[a]), l === i)) {
      if (((h = !0), n.all)) continue;
      break;
    }
    (c = e.values[l]), ft(c) && (o || t === 0 || Et(t) === Et(c)) && (t += c);
  }
  return !h && !n.all ? 0 : t;
}
function vl(e, t) {
  const { iScale: i, vScale: n } = t,
    s = i.axis === "x" ? "x" : "y",
    o = n.axis === "x" ? "x" : "y",
    a = Object.keys(e),
    r = new Array(a.length);
  let l, c, h;
  for (l = 0, c = a.length; l < c; ++l)
    (h = a[l]), (r[l] = { [s]: h, [o]: e[h] });
  return r;
}
function vi(e, t) {
  const i = e && e.options.stacked;
  return i || (i === void 0 && t.stack !== void 0);
}
function _l(e, t, i) {
  return `${e.id}.${t.id}.${i.stack || i.type}`;
}
function xl(e) {
  const { min: t, max: i, minDefined: n, maxDefined: s } = e.getUserBounds();
  return {
    min: n ? t : Number.NEGATIVE_INFINITY,
    max: s ? i : Number.POSITIVE_INFINITY,
  };
}
function yl(e, t, i) {
  const n = e[t] || (e[t] = {});
  return n[i] || (n[i] = {});
}
function Hn(e, t, i, n) {
  for (const s of t.getMatchingVisibleMetas(n).reverse()) {
    const o = e[s.index];
    if ((i && o > 0) || (!i && o < 0)) return s.index;
  }
  return null;
}
function Wn(e, t) {
  const { chart: i, _cachedMeta: n } = e,
    s = i._stacks || (i._stacks = {}),
    { iScale: o, vScale: a, index: r } = n,
    l = o.axis,
    c = a.axis,
    h = _l(o, a, n),
    u = t.length;
  let d;
  for (let f = 0; f < u; ++f) {
    const p = t[f],
      { [l]: m, [c]: g } = p,
      b = p._stacks || (p._stacks = {});
    (d = b[c] = yl(s, h, m)),
      (d[r] = g),
      (d._top = Hn(d, a, !0, n.type)),
      (d._bottom = Hn(d, a, !1, n.type));
    const v = d._visualValues || (d._visualValues = {});
    v[r] = g;
  }
}
function _i(e, t) {
  const i = e.scales;
  return Object.keys(i)
    .filter((n) => i[n].axis === t)
    .shift();
}
function kl(e, t) {
  return le(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  });
}
function wl(e, t, i) {
  return le(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: i,
    index: t,
    mode: "default",
    type: "data",
  });
}
function he(e, t) {
  const i = e.controller.index,
    n = e.vScale && e.vScale.axis;
  if (n) {
    t = t || e._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[n] === void 0 || o[n][i] === void 0) return;
      delete o[n][i],
        o[n]._visualValues !== void 0 &&
          o[n]._visualValues[i] !== void 0 &&
          delete o[n]._visualValues[i];
    }
  }
}
const xi = (e) => e === "reset" || e === "none",
  Nn = (e, t) => (t ? e : Object.assign({}, e)),
  Sl = (e, t, i) =>
    e && !t.hidden && t._stacked && { keys: vo(i, !0), values: null };
class we {
  constructor(t, i) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = i),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = vi(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(t) {
    this.index !== t && he(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      i = this._cachedMeta,
      n = this.getDataset(),
      s = (u, d, f, p) => (u === "x" ? d : u === "r" ? p : f),
      o = (i.xAxisID = H(n.xAxisID, _i(t, "x"))),
      a = (i.yAxisID = H(n.yAxisID, _i(t, "y"))),
      r = (i.rAxisID = H(n.rAxisID, _i(t, "r"))),
      l = i.indexAxis,
      c = (i.iAxisID = s(l, o, a, r)),
      h = (i.vAxisID = s(l, a, o, r));
    (i.xScale = this.getScaleForId(o)),
      (i.yScale = this.getScaleForId(a)),
      (i.rScale = this.getScaleForId(r)),
      (i.iScale = this.getScaleForId(c)),
      (i.vScale = this.getScaleForId(h));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const i = this._cachedMeta;
    return t === i.iScale ? i.vScale : i.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Mn(this._data, this), t._stacked && he(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      i = t.data || (t.data = []),
      n = this._data;
    if (E(i)) {
      const s = this._cachedMeta;
      this._data = vl(i, s);
    } else if (n !== i) {
      if (n) {
        Mn(n, this);
        const s = this._cachedMeta;
        he(s), (s._parsed = []);
      }
      i && Object.isExtensible(i) && Pr(i, this),
        (this._syncList = []),
        (this._data = i);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const i = this._cachedMeta,
      n = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = i._stacked;
    (i._stacked = vi(i.vScale, i)),
      i.stack !== n.stack && ((s = !0), he(i), (i.stack = n.stack)),
      this._resyncElements(t),
      (s || o !== i._stacked) &&
        (Wn(this, i._parsed), (i._stacked = vi(i.vScale, i)));
  }
  configure() {
    const t = this.chart.config,
      i = t.datasetScopeKeys(this._type),
      n = t.getOptionScopes(this.getDataset(), i, !0);
    (this.options = t.createResolver(n, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, i) {
    const { _cachedMeta: n, _data: s } = this,
      { iScale: o, _stacked: a } = n,
      r = o.axis;
    let l = t === 0 && i === s.length ? !0 : n._sorted,
      c = t > 0 && n._parsed[t - 1],
      h,
      u,
      d;
    if (this._parsing === !1) (n._parsed = s), (n._sorted = !0), (d = s);
    else {
      Q(s[t])
        ? (d = this.parseArrayData(n, s, t, i))
        : E(s[t])
        ? (d = this.parseObjectData(n, s, t, i))
        : (d = this.parsePrimitiveData(n, s, t, i));
      const f = () => u[r] === null || (c && u[r] < c[r]);
      for (h = 0; h < i; ++h)
        (n._parsed[h + t] = u = d[h]), l && (f() && (l = !1), (c = u));
      n._sorted = l;
    }
    a && Wn(this, d);
  }
  parsePrimitiveData(t, i, n, s) {
    const { iScale: o, vScale: a } = t,
      r = o.axis,
      l = a.axis,
      c = o.getLabels(),
      h = o === a,
      u = new Array(s);
    let d, f, p;
    for (d = 0, f = s; d < f; ++d)
      (p = d + n),
        (u[d] = { [r]: h || o.parse(c[p], p), [l]: a.parse(i[p], p) });
    return u;
  }
  parseArrayData(t, i, n, s) {
    const { xScale: o, yScale: a } = t,
      r = new Array(s);
    let l, c, h, u;
    for (l = 0, c = s; l < c; ++l)
      (h = l + n),
        (u = i[h]),
        (r[l] = { x: o.parse(u[0], h), y: a.parse(u[1], h) });
    return r;
  }
  parseObjectData(t, i, n, s) {
    const { xScale: o, yScale: a } = t,
      { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing,
      c = new Array(s);
    let h, u, d, f;
    for (h = 0, u = s; h < u; ++h)
      (d = h + n),
        (f = i[d]),
        (c[h] = { x: o.parse(oe(f, r), d), y: a.parse(oe(f, l), d) });
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, i, n) {
    const s = this.chart,
      o = this._cachedMeta,
      a = i[t.axis],
      r = { keys: vo(s, !0), values: i._stacks[t.axis]._visualValues };
    return Bn(r, a, o.index, { mode: n });
  }
  updateRangeFromParsed(t, i, n, s) {
    const o = n[i.axis];
    let a = o === null ? NaN : o;
    const r = s && n._stacks[i.axis];
    s && r && ((s.values = r), (a = Bn(s, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, a)),
      (t.max = Math.max(t.max, a));
  }
  getMinMax(t, i) {
    const n = this._cachedMeta,
      s = n._parsed,
      o = n._sorted && t === n.iScale,
      a = s.length,
      r = this._getOtherScale(t),
      l = Sl(i, n, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: h, max: u } = xl(r);
    let d, f;
    function p() {
      f = s[d];
      const m = f[r.axis];
      return !ft(f[t.axis]) || h > m || u < m;
    }
    for (
      d = 0;
      d < a && !(!p() && (this.updateRangeFromParsed(c, t, f, l), o));
      ++d
    );
    if (o) {
      for (d = a - 1; d >= 0; --d)
        if (!p()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const i = this._cachedMeta._parsed,
      n = [];
    let s, o, a;
    for (s = 0, o = i.length; s < o; ++s)
      (a = i[s][t.axis]), ft(a) && n.push(a);
    return n;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const i = this._cachedMeta,
      n = i.iScale,
      s = i.vScale,
      o = this.getParsed(t);
    return {
      label: n ? "" + n.getLabelForValue(o[n.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : "",
    };
  }
  _update(t) {
    const i = this._cachedMeta;
    this.update(t || "default"),
      (i._clip = bl(
        H(this.options.clip, pl(i.xScale, i.yScale, this.getMaxOverflow()))
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      i = this.chart,
      n = this._cachedMeta,
      s = n.data || [],
      o = i.chartArea,
      a = [],
      r = this._drawStart || 0,
      l = this._drawCount || s.length - r,
      c = this.options.drawActiveElementsOnTop;
    let h;
    for (n.dataset && n.dataset.draw(t, o, r, l), h = r; h < r + l; ++h) {
      const u = s[h];
      u.hidden || (u.active && c ? a.push(u) : u.draw(t, o));
    }
    for (h = 0; h < a.length; ++h) a[h].draw(t, o);
  }
  getStyle(t, i) {
    const n = i ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(n)
      : this.resolveDataElementOptions(t || 0, n);
  }
  getContext(t, i, n) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const a = this._cachedMeta.data[t];
      (o = a.$context || (a.$context = wl(this.getContext(), t, a))),
        (o.parsed = this.getParsed(t)),
        (o.raw = s.data[t]),
        (o.index = o.dataIndex = t);
    } else
      (o =
        this.$context ||
        (this.$context = kl(this.chart.getContext(), this.index))),
        (o.dataset = s),
        (o.index = o.datasetIndex = this.index);
    return (o.active = !!i), (o.mode = n), o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, i) {
    return this._resolveElementOptions(this.dataElementType.id, i, t);
  }
  _resolveElementOptions(t, i = "default", n) {
    const s = i === "active",
      o = this._cachedDataOpts,
      a = t + "-" + i,
      r = o[a],
      l = this.enableOptionSharing && Pe(n);
    if (r) return Nn(r, l);
    const c = this.chart.config,
      h = c.datasetElementScopeKeys(this._type, t),
      u = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      d = c.getOptionScopes(this.getDataset(), h),
      f = Object.keys(q.elements[t]),
      p = () => this.getContext(n, s, i),
      m = c.resolveNamedOptions(d, f, p, u);
    return m.$shared && ((m.$shared = l), (o[a] = Object.freeze(Nn(m, l)))), m;
  }
  _resolveAnimations(t, i, n) {
    const s = this.chart,
      o = this._cachedDataOpts,
      a = `animation-${i}`,
      r = o[a];
    if (r) return r;
    let l;
    if (s.options.animation !== !1) {
      const h = this.chart.config,
        u = h.datasetAnimationScopeKeys(this._type, i),
        d = h.getOptionScopes(this.getDataset(), u);
      l = h.createResolver(d, this.getContext(t, n, i));
    }
    const c = new bo(s, l && l.animations);
    return l && l._cacheable && (o[a] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, i) {
    return !i || xi(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, i) {
    const n = this.resolveDataElementOptions(t, i),
      s = this._sharedOptions,
      o = this.getSharedOptions(n),
      a = this.includeOptions(i, o) || o !== s;
    return (
      this.updateSharedOptions(o, i, n), { sharedOptions: o, includeOptions: a }
    );
  }
  updateElement(t, i, n, s) {
    xi(s) ? Object.assign(t, n) : this._resolveAnimations(i, s).update(t, n);
  }
  updateSharedOptions(t, i, n) {
    t && !xi(i) && this._resolveAnimations(void 0, i).update(t, n);
  }
  _setStyle(t, i, n, s) {
    t.active = s;
    const o = this.getStyle(i, s);
    this._resolveAnimations(i, n, s).update(t, {
      options: (!s && this.getSharedOptions(o)) || o,
    });
  }
  removeHoverStyle(t, i, n) {
    this._setStyle(t, n, "active", !1);
  }
  setHoverStyle(t, i, n) {
    this._setStyle(t, n, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const i = this._data,
      n = this._cachedMeta.data;
    for (const [r, l, c] of this._syncList) this[r](l, c);
    this._syncList = [];
    const s = n.length,
      o = i.length,
      a = Math.min(o, s);
    a && this.parse(0, a),
      o > s
        ? this._insertElements(s, o - s, t)
        : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, i, n = !0) {
    const s = this._cachedMeta,
      o = s.data,
      a = t + i;
    let r;
    const l = (c) => {
      for (c.length += i, r = c.length - 1; r >= a; r--) c[r] = c[r - i];
    };
    for (l(o), r = t; r < a; ++r) o[r] = new this.dataElementType();
    this._parsing && l(s._parsed),
      this.parse(t, i),
      n && this.updateElements(o, t, i, "reset");
  }
  updateElements(t, i, n, s) {}
  _removeElements(t, i) {
    const n = this._cachedMeta;
    if (this._parsing) {
      const s = n._parsed.splice(t, i);
      n._stacked && he(n, s);
    }
    n.data.splice(t, i);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [i, n, s] = t;
      this[i](n, s);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, i) {
    i && this._sync(["_removeElements", t, i]);
    const n = arguments.length - 2;
    n && this._sync(["_insertElements", t, n]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
F(we, "defaults", {}),
  F(we, "datasetElementType", null),
  F(we, "dataElementType", null);
function Ml(e, t) {
  if (!e._cache.$bar) {
    const i = e.getMatchingVisibleMetas(t);
    let n = [];
    for (let s = 0, o = i.length; s < o; s++)
      n = n.concat(i[s].controller.getAllParsedValues(e));
    e._cache.$bar = Js(n.sort((s, o) => s - o));
  }
  return e._cache.$bar;
}
function Dl(e) {
  const t = e.iScale,
    i = Ml(t, e.type);
  let n = t._length,
    s,
    o,
    a,
    r;
  const l = () => {
    a === 32767 ||
      a === -32768 ||
      (Pe(r) && (n = Math.min(n, Math.abs(a - r) || n)), (r = a));
  };
  for (s = 0, o = i.length; s < o; ++s) (a = t.getPixelForValue(i[s])), l();
  for (r = void 0, s = 0, o = t.ticks.length; s < o; ++s)
    (a = t.getPixelForTick(s)), l();
  return n;
}
function Pl(e, t, i, n) {
  const s = i.barThickness;
  let o, a;
  return (
    $(s)
      ? ((o = t.min * i.categoryPercentage), (a = i.barPercentage))
      : ((o = s * n), (a = 1)),
    { chunk: o / n, ratio: a, start: t.pixels[e] - o / 2 }
  );
}
function Cl(e, t, i, n) {
  const s = t.pixels,
    o = s[e];
  let a = e > 0 ? s[e - 1] : null,
    r = e < s.length - 1 ? s[e + 1] : null;
  const l = i.categoryPercentage;
  a === null && (a = o - (r === null ? t.end - t.start : r - o)),
    r === null && (r = o + o - a);
  const c = o - ((o - Math.min(a, r)) / 2) * l;
  return {
    chunk: ((Math.abs(r - a) / 2) * l) / n,
    ratio: i.barPercentage,
    start: c,
  };
}
function Ol(e, t, i, n) {
  const s = i.parse(e[0], n),
    o = i.parse(e[1], n),
    a = Math.min(s, o),
    r = Math.max(s, o);
  let l = a,
    c = r;
  Math.abs(a) > Math.abs(r) && ((l = r), (c = a)),
    (t[i.axis] = c),
    (t._custom = { barStart: l, barEnd: c, start: s, end: o, min: a, max: r });
}
function _o(e, t, i, n) {
  return Q(e) ? Ol(e, t, i, n) : (t[i.axis] = i.parse(e, n)), t;
}
function jn(e, t, i, n) {
  const s = e.iScale,
    o = e.vScale,
    a = s.getLabels(),
    r = s === o,
    l = [];
  let c, h, u, d;
  for (c = i, h = i + n; c < h; ++c)
    (d = t[c]),
      (u = {}),
      (u[s.axis] = r || s.parse(a[c], c)),
      l.push(_o(d, u, o, c));
  return l;
}
function yi(e) {
  return e && e.barStart !== void 0 && e.barEnd !== void 0;
}
function Tl(e, t, i) {
  return e !== 0 ? Et(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= i ? 1 : -1);
}
function Al(e) {
  let t, i, n, s, o;
  return (
    e.horizontal
      ? ((t = e.base > e.x), (i = "left"), (n = "right"))
      : ((t = e.base < e.y), (i = "bottom"), (n = "top")),
    t ? ((s = "end"), (o = "start")) : ((s = "start"), (o = "end")),
    { start: i, end: n, reverse: t, top: s, bottom: o }
  );
}
function Il(e, t, i, n) {
  let s = t.borderSkipped;
  const o = {};
  if (!s) {
    e.borderSkipped = o;
    return;
  }
  if (s === !0) {
    e.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: a, end: r, reverse: l, top: c, bottom: h } = Al(e);
  s === "middle" &&
    i &&
    ((e.enableBorderRadius = !0),
    (i._top || 0) === n
      ? (s = c)
      : (i._bottom || 0) === n
      ? (s = h)
      : ((o[$n(h, a, r, l)] = !0), (s = c))),
    (o[$n(s, a, r, l)] = !0),
    (e.borderSkipped = o);
}
function $n(e, t, i, n) {
  return n ? ((e = Ll(e, t, i)), (e = Yn(e, i, t))) : (e = Yn(e, t, i)), e;
}
function Ll(e, t, i) {
  return e === t ? i : e === i ? t : e;
}
function Yn(e, t, i) {
  return e === "start" ? t : e === "end" ? i : e;
}
function Vl(e, { inflateAmount: t }, i) {
  e.inflateAmount = t === "auto" ? (i === 1 ? 0.33 : 0) : t;
}
class qe extends we {
  parsePrimitiveData(t, i, n, s) {
    return jn(t, i, n, s);
  }
  parseArrayData(t, i, n, s) {
    return jn(t, i, n, s);
  }
  parseObjectData(t, i, n, s) {
    const { iScale: o, vScale: a } = t,
      { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing,
      c = o.axis === "x" ? r : l,
      h = a.axis === "x" ? r : l,
      u = [];
    let d, f, p, m;
    for (d = n, f = n + s; d < f; ++d)
      (m = i[d]),
        (p = {}),
        (p[o.axis] = o.parse(oe(m, c), d)),
        u.push(_o(oe(m, h), p, a, d));
    return u;
  }
  updateRangeFromParsed(t, i, n, s) {
    super.updateRangeFromParsed(t, i, n, s);
    const o = n._custom;
    o &&
      i === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const i = this._cachedMeta,
      { iScale: n, vScale: s } = i,
      o = this.getParsed(t),
      a = o._custom,
      r = yi(a)
        ? "[" + a.start + ", " + a.end + "]"
        : "" + s.getLabelForValue(o[s.axis]);
    return { label: "" + n.getLabelForValue(o[n.axis]), value: r };
  }
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const i = this._cachedMeta;
    this.updateElements(i.data, 0, i.data.length, t);
  }
  updateElements(t, i, n, s) {
    const o = s === "reset",
      {
        index: a,
        _cachedMeta: { vScale: r },
      } = this,
      l = r.getBasePixel(),
      c = r.isHorizontal(),
      h = this._getRuler(),
      { sharedOptions: u, includeOptions: d } = this._getSharedOptions(i, s);
    for (let f = i; f < i + n; f++) {
      const p = this.getParsed(f),
        m =
          o || $(p[r.axis])
            ? { base: l, head: l }
            : this._calculateBarValuePixels(f),
        g = this._calculateBarIndexPixels(f, h),
        b = (p._stacks || {})[r.axis],
        v = {
          horizontal: c,
          base: m.base,
          enableBorderRadius:
            !b || yi(p._custom) || a === b._top || a === b._bottom,
          x: c ? m.head : g.center,
          y: c ? g.center : m.head,
          height: c ? g.size : Math.abs(m.size),
          width: c ? Math.abs(m.size) : g.size,
        };
      d &&
        (v.options =
          u || this.resolveDataElementOptions(f, t[f].active ? "active" : s));
      const y = v.options || t[f].options;
      Il(v, y, b, a), Vl(v, y, h.ratio), this.updateElement(t[f], f, v, s);
    }
  }
  _getStacks(t, i) {
    const { iScale: n } = this._cachedMeta,
      s = n
        .getMatchingVisibleMetas(this._type)
        .filter((h) => h.controller.options.grouped),
      o = n.options.stacked,
      a = [],
      r = this._cachedMeta.controller.getParsed(i),
      l = r && r[n.axis],
      c = (h) => {
        const u = h._parsed.find((f) => f[n.axis] === l),
          d = u && u[h.vScale.axis];
        if ($(d) || isNaN(d)) return !0;
      };
    for (const h of s)
      if (
        !(i !== void 0 && c(h)) &&
        ((o === !1 ||
          a.indexOf(h.stack) === -1 ||
          (o === void 0 && h.stack === void 0)) &&
          a.push(h.stack),
        h.index === t)
      )
        break;
    return a.length || a.push(void 0), a;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, i, n) {
    const s = this._getStacks(t, n),
      o = i !== void 0 ? s.indexOf(i) : -1;
    return o === -1 ? s.length - 1 : o;
  }
  _getRuler() {
    const t = this.options,
      i = this._cachedMeta,
      n = i.iScale,
      s = [];
    let o, a;
    for (o = 0, a = i.data.length; o < a; ++o)
      s.push(n.getPixelForValue(this.getParsed(o)[n.axis], o));
    const r = t.barThickness;
    return {
      min: r || Dl(i),
      pixels: s,
      start: n._startPixel,
      end: n._endPixel,
      stackCount: this._getStackCount(),
      scale: n,
      grouped: t.grouped,
      ratio: r ? 1 : t.categoryPercentage * t.barPercentage,
    };
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: i, _stacked: n, index: s },
        options: { base: o, minBarLength: a },
      } = this,
      r = o || 0,
      l = this.getParsed(t),
      c = l._custom,
      h = yi(c);
    let u = l[i.axis],
      d = 0,
      f = n ? this.applyStack(i, l, n) : u,
      p,
      m;
    f !== u && ((d = f - u), (f = u)),
      h &&
        ((u = c.barStart),
        (f = c.barEnd - c.barStart),
        u !== 0 && Et(u) !== Et(c.barEnd) && (d = 0),
        (d += u));
    const g = !$(o) && !h ? o : d;
    let b = i.getPixelForValue(g);
    if (
      (this.chart.getDataVisibility(t)
        ? (p = i.getPixelForValue(d + f))
        : (p = b),
      (m = p - b),
      Math.abs(m) < a)
    ) {
      (m = Tl(m, i, r) * a), u === r && (b -= m / 2);
      const v = i.getPixelForDecimal(0),
        y = i.getPixelForDecimal(1),
        k = Math.min(v, y),
        w = Math.max(v, y);
      (b = Math.max(Math.min(b, w), k)),
        (p = b + m),
        n &&
          !h &&
          (l._stacks[i.axis]._visualValues[s] =
            i.getValueForPixel(p) - i.getValueForPixel(b));
    }
    if (b === i.getPixelForValue(r)) {
      const v = (Et(m) * i.getLineWidthForValue(r)) / 2;
      (b += v), (m -= v);
    }
    return { size: m, base: b, head: p, center: p + m / 2 };
  }
  _calculateBarIndexPixels(t, i) {
    const n = i.scale,
      s = this.options,
      o = s.skipNull,
      a = H(s.maxBarThickness, 1 / 0);
    let r, l;
    if (i.grouped) {
      const c = o ? this._getStackCount(t) : i.stackCount,
        h = s.barThickness === "flex" ? Cl(t, i, s, c) : Pl(t, i, s, c),
        u = this._getStackIndex(
          this.index,
          this._cachedMeta.stack,
          o ? t : void 0
        );
      (r = h.start + h.chunk * u + h.chunk / 2),
        (l = Math.min(a, h.chunk * h.ratio));
    } else
      (r = n.getPixelForValue(this.getParsed(t)[n.axis], t)),
        (l = Math.min(a, i.min * i.ratio));
    return { base: r - l / 2, head: r + l / 2, center: r, size: l };
  }
  draw() {
    const t = this._cachedMeta,
      i = t.vScale,
      n = t.data,
      s = n.length;
    let o = 0;
    for (; o < s; ++o)
      this.getParsed(o)[i.axis] !== null &&
        !n[o].hidden &&
        n[o].draw(this._ctx);
  }
}
F(qe, "id", "bar"),
  F(qe, "defaults", {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "base", "width", "height"],
      },
    },
  }),
  F(qe, "overrides", {
    scales: {
      _index_: { type: "category", offset: !0, grid: { offset: !0 } },
      _value_: { type: "linear", beginAtZero: !0 },
    },
  });
function jt() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class nn {
  constructor(t) {
    F(this, "options");
    this.options = t || {};
  }
  static override(t) {
    Object.assign(nn.prototype, t);
  }
  init() {}
  formats() {
    return jt();
  }
  parse() {
    return jt();
  }
  format() {
    return jt();
  }
  add() {
    return jt();
  }
  diff() {
    return jt();
  }
  startOf() {
    return jt();
  }
  endOf() {
    return jt();
  }
}
var Rl = { _date: nn };
function Fl(e, t, i, n) {
  const { controller: s, data: o, _sorted: a } = e,
    r = s._cachedMeta.iScale;
  if (r && t === r.axis && t !== "r" && a && o.length) {
    const l = r._reversePixels ? Mr : Li;
    if (n) {
      if (s._sharedOptions) {
        const c = o[0],
          h = typeof c.getRange == "function" && c.getRange(t);
        if (h) {
          const u = l(o, t, i - h),
            d = l(o, t, i + h);
          return { lo: u.lo, hi: d.hi };
        }
      }
    } else return l(o, t, i);
  }
  return { lo: 0, hi: o.length - 1 };
}
function Le(e, t, i, n, s) {
  const o = e.getSortedVisibleDatasetMetas(),
    a = i[t];
  for (let r = 0, l = o.length; r < l; ++r) {
    const { index: c, data: h } = o[r],
      { lo: u, hi: d } = Fl(o[r], t, a, s);
    for (let f = u; f <= d; ++f) {
      const p = h[f];
      p.skip || n(p, c, f);
    }
  }
}
function El(e) {
  const t = e.indexOf("x") !== -1,
    i = e.indexOf("y") !== -1;
  return function (n, s) {
    const o = t ? Math.abs(n.x - s.x) : 0,
      a = i ? Math.abs(n.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2));
  };
}
function ki(e, t, i, n, s) {
  const o = [];
  return (
    (!s && !e.isPointInArea(t)) ||
      Le(
        e,
        i,
        t,
        function (r, l, c) {
          (!s && !ro(r, e.chartArea, 0)) ||
            (r.inRange(t.x, t.y, n) &&
              o.push({ element: r, datasetIndex: l, index: c }));
        },
        !0
      ),
    o
  );
}
function zl(e, t, i, n) {
  let s = [];
  function o(a, r, l) {
    const { startAngle: c, endAngle: h } = a.getProps(
        ["startAngle", "endAngle"],
        n
      ),
      { angle: u } = yr(a, { x: t.x, y: t.y });
    wr(u, c, h) && s.push({ element: a, datasetIndex: r, index: l });
  }
  return Le(e, i, t, o), s;
}
function Bl(e, t, i, n, s, o) {
  let a = [];
  const r = El(i);
  let l = Number.POSITIVE_INFINITY;
  function c(h, u, d) {
    const f = h.inRange(t.x, t.y, s);
    if (n && !f) return;
    const p = h.getCenterPoint(s);
    if (!(!!o || e.isPointInArea(p)) && !f) return;
    const g = r(t, p);
    g < l
      ? ((a = [{ element: h, datasetIndex: u, index: d }]), (l = g))
      : g === l && a.push({ element: h, datasetIndex: u, index: d });
  }
  return Le(e, i, t, c), a;
}
function wi(e, t, i, n, s, o) {
  return !o && !e.isPointInArea(t)
    ? []
    : i === "r" && !n
    ? zl(e, t, i, s)
    : Bl(e, t, i, n, s, o);
}
function Un(e, t, i, n, s) {
  const o = [],
    a = i === "x" ? "inXRange" : "inYRange";
  let r = !1;
  return (
    Le(e, i, t, (l, c, h) => {
      l[a] &&
        l[a](t[i], s) &&
        (o.push({ element: l, datasetIndex: c, index: h }),
        (r = r || l.inRange(t.x, t.y, s)));
    }),
    n && !r ? [] : o
  );
}
var Hl = {
  evaluateInteractionItems: Le,
  modes: {
    index(e, t, i, n) {
      const s = $t(t, e),
        o = i.axis || "x",
        a = i.includeInvisible || !1,
        r = i.intersect ? ki(e, s, o, n, a) : wi(e, s, o, !1, n, a),
        l = [];
      return r.length
        ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
            const h = r[0].index,
              u = c.data[h];
            u &&
              !u.skip &&
              l.push({ element: u, datasetIndex: c.index, index: h });
          }),
          l)
        : [];
    },
    dataset(e, t, i, n) {
      const s = $t(t, e),
        o = i.axis || "xy",
        a = i.includeInvisible || !1;
      let r = i.intersect ? ki(e, s, o, n, a) : wi(e, s, o, !1, n, a);
      if (r.length > 0) {
        const l = r[0].datasetIndex,
          c = e.getDatasetMeta(l).data;
        r = [];
        for (let h = 0; h < c.length; ++h)
          r.push({ element: c[h], datasetIndex: l, index: h });
      }
      return r;
    },
    point(e, t, i, n) {
      const s = $t(t, e),
        o = i.axis || "xy",
        a = i.includeInvisible || !1;
      return ki(e, s, o, n, a);
    },
    nearest(e, t, i, n) {
      const s = $t(t, e),
        o = i.axis || "xy",
        a = i.includeInvisible || !1;
      return wi(e, s, o, i.intersect, n, a);
    },
    x(e, t, i, n) {
      const s = $t(t, e);
      return Un(e, s, "x", i.intersect, n);
    },
    y(e, t, i, n) {
      const s = $t(t, e);
      return Un(e, s, "y", i.intersect, n);
    },
  },
};
const xo = ["left", "top", "right", "bottom"];
function ue(e, t) {
  return e.filter((i) => i.pos === t);
}
function Kn(e, t) {
  return e.filter((i) => xo.indexOf(i.pos) === -1 && i.box.axis === t);
}
function de(e, t) {
  return e.sort((i, n) => {
    const s = t ? n : i,
      o = t ? i : n;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function Wl(e) {
  const t = [];
  let i, n, s, o, a, r;
  for (i = 0, n = (e || []).length; i < n; ++i)
    (s = e[i]),
      ({
        position: o,
        options: { stack: a, stackWeight: r = 1 },
      } = s),
      t.push({
        index: i,
        box: s,
        pos: o,
        horizontal: s.isHorizontal(),
        weight: s.weight,
        stack: a && o + a,
        stackWeight: r,
      });
  return t;
}
function Nl(e) {
  const t = {};
  for (const i of e) {
    const { stack: n, pos: s, stackWeight: o } = i;
    if (!n || !xo.includes(s)) continue;
    const a = t[n] || (t[n] = { count: 0, placed: 0, weight: 0, size: 0 });
    a.count++, (a.weight += o);
  }
  return t;
}
function jl(e, t) {
  const i = Nl(e),
    { vBoxMaxWidth: n, hBoxMaxHeight: s } = t;
  let o, a, r;
  for (o = 0, a = e.length; o < a; ++o) {
    r = e[o];
    const { fullSize: l } = r.box,
      c = i[r.stack],
      h = c && r.stackWeight / c.weight;
    r.horizontal
      ? ((r.width = h ? h * n : l && t.availableWidth), (r.height = s))
      : ((r.width = n), (r.height = h ? h * s : l && t.availableHeight));
  }
  return i;
}
function $l(e) {
  const t = Wl(e),
    i = de(
      t.filter((c) => c.box.fullSize),
      !0
    ),
    n = de(ue(t, "left"), !0),
    s = de(ue(t, "right")),
    o = de(ue(t, "top"), !0),
    a = de(ue(t, "bottom")),
    r = Kn(t, "x"),
    l = Kn(t, "y");
  return {
    fullSize: i,
    leftAndTop: n.concat(o),
    rightAndBottom: s.concat(l).concat(a).concat(r),
    chartArea: ue(t, "chartArea"),
    vertical: n.concat(s).concat(l),
    horizontal: o.concat(a).concat(r),
  };
}
function qn(e, t, i, n) {
  return Math.max(e[i], t[i]) + Math.max(e[n], t[n]);
}
function yo(e, t) {
  (e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right));
}
function Yl(e, t, i, n) {
  const { pos: s, box: o } = i,
    a = e.maxPadding;
  if (!E(s)) {
    i.size && (e[s] -= i.size);
    const u = n[i.stack] || { size: 0, count: 1 };
    (u.size = Math.max(u.size, i.horizontal ? o.height : o.width)),
      (i.size = u.size / u.count),
      (e[s] += i.size);
  }
  o.getPadding && yo(a, o.getPadding());
  const r = Math.max(0, t.outerWidth - qn(a, e, "left", "right")),
    l = Math.max(0, t.outerHeight - qn(a, e, "top", "bottom")),
    c = r !== e.w,
    h = l !== e.h;
  return (
    (e.w = r),
    (e.h = l),
    i.horizontal ? { same: c, other: h } : { same: h, other: c }
  );
}
function Ul(e) {
  const t = e.maxPadding;
  function i(n) {
    const s = Math.max(t[n] - e[n], 0);
    return (e[n] += s), s;
  }
  (e.y += i("top")), (e.x += i("left")), i("right"), i("bottom");
}
function Kl(e, t) {
  const i = t.maxPadding;
  function n(s) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      s.forEach((a) => {
        o[a] = Math.max(t[a], i[a]);
      }),
      o
    );
  }
  return n(e ? ["left", "right"] : ["top", "bottom"]);
}
function pe(e, t, i, n) {
  const s = [];
  let o, a, r, l, c, h;
  for (o = 0, a = e.length, c = 0; o < a; ++o) {
    (r = e[o]),
      (l = r.box),
      l.update(r.width || t.w, r.height || t.h, Kl(r.horizontal, t));
    const { same: u, other: d } = Yl(t, i, r, n);
    (c |= u && s.length), (h = h || d), l.fullSize || s.push(r);
  }
  return (c && pe(s, t, i, n)) || h;
}
function He(e, t, i, n, s) {
  (e.top = i),
    (e.left = t),
    (e.right = t + n),
    (e.bottom = i + s),
    (e.width = n),
    (e.height = s);
}
function Xn(e, t, i, n) {
  const s = i.padding;
  let { x: o, y: a } = t;
  for (const r of e) {
    const l = r.box,
      c = n[r.stack] || { count: 1, placed: 0, weight: 1 },
      h = r.stackWeight / c.weight || 1;
    if (r.horizontal) {
      const u = t.w * h,
        d = c.size || l.height;
      Pe(c.start) && (a = c.start),
        l.fullSize
          ? He(l, s.left, a, i.outerWidth - s.right - s.left, d)
          : He(l, t.left + c.placed, a, u, d),
        (c.start = a),
        (c.placed += u),
        (a = l.bottom);
    } else {
      const u = t.h * h,
        d = c.size || l.width;
      Pe(c.start) && (o = c.start),
        l.fullSize
          ? He(l, o, s.top, d, i.outerHeight - s.bottom - s.top)
          : He(l, o, t.top + c.placed, d, u),
        (c.start = o),
        (c.placed += u),
        (o = l.right);
    }
  }
  (t.x = o), (t.y = a);
}
var ut = {
  addBox(e, t) {
    e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(i) {
                t.draw(i);
              },
            },
          ];
        }),
      e.boxes.push(t);
  },
  removeBox(e, t) {
    const i = e.boxes ? e.boxes.indexOf(t) : -1;
    i !== -1 && e.boxes.splice(i, 1);
  },
  configure(e, t, i) {
    (t.fullSize = i.fullSize), (t.position = i.position), (t.weight = i.weight);
  },
  update(e, t, i, n) {
    if (!e) return;
    const s = gt(e.options.layout.padding),
      o = Math.max(t - s.width, 0),
      a = Math.max(i - s.height, 0),
      r = $l(e.boxes),
      l = r.vertical,
      c = r.horizontal;
    B(e.boxes, (m) => {
      typeof m.beforeLayout == "function" && m.beforeLayout();
    });
    const h =
        l.reduce(
          (m, g) => (g.box.options && g.box.options.display === !1 ? m : m + 1),
          0
        ) || 1,
      u = Object.freeze({
        outerWidth: t,
        outerHeight: i,
        padding: s,
        availableWidth: o,
        availableHeight: a,
        vBoxMaxWidth: o / 2 / h,
        hBoxMaxHeight: a / 2,
      }),
      d = Object.assign({}, s);
    yo(d, gt(n));
    const f = Object.assign(
        { maxPadding: d, w: o, h: a, x: s.left, y: s.top },
        s
      ),
      p = jl(l.concat(c), u);
    pe(r.fullSize, f, u, p),
      pe(l, f, u, p),
      pe(c, f, u, p) && pe(l, f, u, p),
      Ul(f),
      Xn(r.leftAndTop, f, u, p),
      (f.x += f.w),
      (f.y += f.h),
      Xn(r.rightAndBottom, f, u, p),
      (e.chartArea = {
        left: f.left,
        top: f.top,
        right: f.left + f.w,
        bottom: f.top + f.h,
        height: f.h,
        width: f.w,
      }),
      B(r.chartArea, (m) => {
        const g = m.box;
        Object.assign(g, e.chartArea),
          g.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class ko {
  acquireContext(t, i) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, i, n) {}
  removeEventListener(t, i, n) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, i, n, s) {
    return (
      (i = Math.max(0, i || t.width)),
      (n = n || t.height),
      { width: i, height: Math.max(0, s ? Math.floor(i / s) : n) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class ql extends ko {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Xe = "$chartjs",
  Xl = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  Gn = (e) => e === null || e === "";
function Gl(e, t) {
  const i = e.style,
    n = e.getAttribute("height"),
    s = e.getAttribute("width");
  if (
    ((e[Xe] = {
      initial: {
        height: n,
        width: s,
        style: { display: i.display, height: i.height, width: i.width },
      },
    }),
    (i.display = i.display || "block"),
    (i.boxSizing = i.boxSizing || "border-box"),
    Gn(s))
  ) {
    const o = Fn(e, "width");
    o !== void 0 && (e.width = o);
  }
  if (Gn(n))
    if (e.style.height === "") e.height = e.width / (t || 2);
    else {
      const o = Fn(e, "height");
      o !== void 0 && (e.height = o);
    }
  return e;
}
const wo = ll ? { passive: !0 } : !1;
function Ql(e, t, i) {
  e && e.addEventListener(t, i, wo);
}
function Zl(e, t, i) {
  e && e.canvas && e.canvas.removeEventListener(t, i, wo);
}
function Jl(e, t) {
  const i = Xl[e.type] || e.type,
    { x: n, y: s } = $t(e, t);
  return {
    type: i,
    chart: t,
    native: e,
    x: n !== void 0 ? n : null,
    y: s !== void 0 ? s : null,
  };
}
function oi(e, t) {
  for (const i of e) if (i === t || i.contains(t)) return !0;
}
function tc(e, t, i) {
  const n = e.canvas,
    s = new MutationObserver((o) => {
      let a = !1;
      for (const r of o)
        (a = a || oi(r.addedNodes, n)), (a = a && !oi(r.removedNodes, n));
      a && i();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
function ec(e, t, i) {
  const n = e.canvas,
    s = new MutationObserver((o) => {
      let a = !1;
      for (const r of o)
        (a = a || oi(r.removedNodes, n)), (a = a && !oi(r.addedNodes, n));
      a && i();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
const Oe = new Map();
let Qn = 0;
function So() {
  const e = window.devicePixelRatio;
  e !== Qn &&
    ((Qn = e),
    Oe.forEach((t, i) => {
      i.currentDevicePixelRatio !== e && t();
    }));
}
function ic(e, t) {
  Oe.size || window.addEventListener("resize", So), Oe.set(e, t);
}
function nc(e) {
  Oe.delete(e), Oe.size || window.removeEventListener("resize", So);
}
function sc(e, t, i) {
  const n = e.canvas,
    s = n && en(n);
  if (!s) return;
  const o = eo((r, l) => {
      const c = s.clientWidth;
      i(r, l), c < s.clientWidth && i();
    }, window),
    a = new ResizeObserver((r) => {
      const l = r[0],
        c = l.contentRect.width,
        h = l.contentRect.height;
      (c === 0 && h === 0) || o(c, h);
    });
  return a.observe(s), ic(e, o), a;
}
function Si(e, t, i) {
  i && i.disconnect(), t === "resize" && nc(e);
}
function oc(e, t, i) {
  const n = e.canvas,
    s = eo((o) => {
      e.ctx !== null && i(Jl(o, e));
    }, e);
  return Ql(n, t, s), s;
}
class ac extends ko {
  acquireContext(t, i) {
    const n = t && t.getContext && t.getContext("2d");
    return n && n.canvas === t ? (Gl(t, i), n) : null;
  }
  releaseContext(t) {
    const i = t.canvas;
    if (!i[Xe]) return !1;
    const n = i[Xe].initial;
    ["height", "width"].forEach((o) => {
      const a = n[o];
      $(a) ? i.removeAttribute(o) : i.setAttribute(o, a);
    });
    const s = n.style || {};
    return (
      Object.keys(s).forEach((o) => {
        i.style[o] = s[o];
      }),
      (i.width = i.width),
      delete i[Xe],
      !0
    );
  }
  addEventListener(t, i, n) {
    this.removeEventListener(t, i);
    const s = t.$proxies || (t.$proxies = {}),
      a = { attach: tc, detach: ec, resize: sc }[i] || oc;
    s[i] = a(t, i, n);
  }
  removeEventListener(t, i) {
    const n = t.$proxies || (t.$proxies = {}),
      s = n[i];
    if (!s) return;
    (({ attach: Si, detach: Si, resize: Si })[i] || Zl)(t, i, s),
      (n[i] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, i, n, s) {
    return rl(t, i, n, s);
  }
  isAttached(t) {
    const i = t && en(t);
    return !!(i && i.isConnected);
  }
}
function rc(e) {
  return !tn() || (typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas)
    ? ql
    : ac;
}
class Bt {
  constructor() {
    F(this, "x");
    F(this, "y");
    F(this, "active", !1);
    F(this, "options");
    F(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: i, y: n } = this.getProps(["x", "y"], t);
    return { x: i, y: n };
  }
  hasValue() {
    return ii(this.x) && ii(this.y);
  }
  getProps(t, i) {
    const n = this.$animations;
    if (!i || !n) return this;
    const s = {};
    return (
      t.forEach((o) => {
        s[o] = n[o] && n[o].active() ? n[o]._to : this[o];
      }),
      s
    );
  }
}
F(Bt, "defaults", {}), F(Bt, "defaultRoutes");
function lc(e, t) {
  const i = e.options.ticks,
    n = cc(e),
    s = Math.min(i.maxTicksLimit || n, n),
    o = i.major.enabled ? uc(t) : [],
    a = o.length,
    r = o[0],
    l = o[a - 1],
    c = [];
  if (a > s) return dc(t, c, o, a / s), c;
  const h = hc(o, t, s);
  if (a > 0) {
    let u, d;
    const f = a > 1 ? Math.round((l - r) / (a - 1)) : null;
    for (We(t, c, h, $(f) ? 0 : r - f, r), u = 0, d = a - 1; u < d; u++)
      We(t, c, h, o[u], o[u + 1]);
    return We(t, c, h, l, $(f) ? t.length : l + f), c;
  }
  return We(t, c, h), c;
}
function cc(e) {
  const t = e.options.offset,
    i = e._tickSize(),
    n = e._length / i + (t ? 0 : 1),
    s = e._maxLength / i;
  return Math.floor(Math.min(n, s));
}
function hc(e, t, i) {
  const n = fc(e),
    s = t.length / i;
  if (!n) return Math.max(s, 1);
  const o = br(n);
  for (let a = 0, r = o.length - 1; a < r; a++) {
    const l = o[a];
    if (l > s) return l;
  }
  return Math.max(s, 1);
}
function uc(e) {
  const t = [];
  let i, n;
  for (i = 0, n = e.length; i < n; i++) e[i].major && t.push(i);
  return t;
}
function dc(e, t, i, n) {
  let s = 0,
    o = i[0],
    a;
  for (n = Math.ceil(n), a = 0; a < e.length; a++)
    a === o && (t.push(e[a]), s++, (o = i[s * n]));
}
function We(e, t, i, n, s) {
  const o = H(n, 0),
    a = Math.min(H(s, e.length), e.length);
  let r = 0,
    l,
    c,
    h;
  for (
    i = Math.ceil(i), s && ((l = s - n), (i = l / Math.floor(l / i))), h = o;
    h < 0;

  )
    r++, (h = Math.round(o + r * i));
  for (c = Math.max(o, 0); c < a; c++)
    c === h && (t.push(e[c]), r++, (h = Math.round(o + r * i)));
}
function fc(e) {
  const t = e.length;
  let i, n;
  if (t < 2) return !1;
  for (n = e[0], i = 1; i < t; ++i) if (e[i] - e[i - 1] !== n) return !1;
  return n;
}
const gc = (e) => (e === "left" ? "right" : e === "right" ? "left" : e),
  Zn = (e, t, i) => (t === "top" || t === "left" ? e[t] + i : e[t] - i),
  Jn = (e, t) => Math.min(t || e, e);
function ts(e, t) {
  const i = [],
    n = e.length / t,
    s = e.length;
  let o = 0;
  for (; o < s; o += n) i.push(e[Math.floor(o)]);
  return i;
}
function mc(e, t, i) {
  const n = e.ticks.length,
    s = Math.min(t, n - 1),
    o = e._startPixel,
    a = e._endPixel,
    r = 1e-6;
  let l = e.getPixelForTick(s),
    c;
  if (
    !(
      i &&
      (n === 1
        ? (c = Math.max(l - o, a - l))
        : t === 0
        ? (c = (e.getPixelForTick(1) - l) / 2)
        : (c = (l - e.getPixelForTick(s - 1)) / 2),
      (l += s < t ? c : -c),
      l < o - r || l > a + r)
    )
  )
    return l;
}
function pc(e, t) {
  B(e, (i) => {
    const n = i.gc,
      s = n.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o) delete i.data[n[o]];
      n.splice(0, s);
    }
  });
}
function fe(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function es(e, t) {
  if (!e.display) return 0;
  const i = it(e.font, t),
    n = gt(e.padding);
  return (Q(e.text) ? e.text.length : 1) * i.lineHeight + n.height;
}
function bc(e, t) {
  return le(e, { scale: t, type: "scale" });
}
function vc(e, t, i) {
  return le(e, { tick: i, index: t, type: "tick" });
}
function _c(e, t, i) {
  let n = qi(e);
  return ((i && t !== "right") || (!i && t === "right")) && (n = gc(n)), n;
}
function xc(e, t, i, n) {
  const { top: s, left: o, bottom: a, right: r, chart: l } = e,
    { chartArea: c, scales: h } = l;
  let u = 0,
    d,
    f,
    p;
  const m = a - s,
    g = r - o;
  if (e.isHorizontal()) {
    if (((f = et(n, o, r)), E(i))) {
      const b = Object.keys(i)[0],
        v = i[b];
      p = h[b].getPixelForValue(v) + m - t;
    } else
      i === "center" ? (p = (c.bottom + c.top) / 2 + m - t) : (p = Zn(e, i, t));
    d = r - o;
  } else {
    if (E(i)) {
      const b = Object.keys(i)[0],
        v = i[b];
      f = h[b].getPixelForValue(v) - g + t;
    } else
      i === "center" ? (f = (c.left + c.right) / 2 - g + t) : (f = Zn(e, i, t));
    (p = et(n, a, s)), (u = i === "left" ? -vt : vt);
  }
  return { titleX: f, titleY: p, maxWidth: d, rotation: u };
}
class ce extends Bt {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, i) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: i, _suggestedMin: n, _suggestedMax: s } = this;
    return (
      (t = yt(t, Number.POSITIVE_INFINITY)),
      (i = yt(i, Number.NEGATIVE_INFINITY)),
      (n = yt(n, Number.POSITIVE_INFINITY)),
      (s = yt(s, Number.NEGATIVE_INFINITY)),
      { min: yt(t, n), max: yt(i, s), minDefined: ft(t), maxDefined: ft(i) }
    );
  }
  getMinMax(t) {
    let { min: i, max: n, minDefined: s, maxDefined: o } = this.getUserBounds(),
      a;
    if (s && o) return { min: i, max: n };
    const r = this.getMatchingVisibleMetas();
    for (let l = 0, c = r.length; l < c; ++l)
      (a = r[l].controller.getMinMax(this, t)),
        s || (i = Math.min(i, a.min)),
        o || (n = Math.max(n, a.max));
    return (
      (i = o && i > n ? n : i),
      (n = s && i > n ? i : n),
      { min: yt(i, yt(n, i)), max: yt(n, yt(i, n)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    j(this.options.beforeUpdate, [this]);
  }
  update(t, i, n) {
    const { beginAtZero: s, grace: o, ticks: a } = this.options,
      r = a.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = i),
      (this._margins = n =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + n.left + n.right
        : this.height + n.top + n.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = Ur(this, o, s)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = r < this.ticks.length;
    this._convertTicksToLabels(l ? ts(this.ticks, r) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      a.display &&
        (a.autoSkip || a.source === "auto") &&
        ((this.ticks = lc(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      i,
      n;
    this.isHorizontal()
      ? ((i = this.left), (n = this.right))
      : ((i = this.top), (n = this.bottom), (t = !t)),
      (this._startPixel = i),
      (this._endPixel = n),
      (this._reversePixels = t),
      (this._length = n - i),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    j(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    j(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    j(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), j(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    j(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const i = this.options.ticks;
    let n, s, o;
    for (n = 0, s = t.length; n < s; n++)
      (o = t[n]), (o.label = j(i.callback, [o.value, n, t], this));
  }
  afterTickToLabelConversion() {
    j(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    j(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      i = t.ticks,
      n = Jn(this.ticks.length, t.ticks.maxTicksLimit),
      s = i.minRotation || 0,
      o = i.maxRotation;
    let a = s,
      r,
      l,
      c;
    if (
      !this._isVisible() ||
      !i.display ||
      s >= o ||
      n <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = s;
      return;
    }
    const h = this._getLabelSizes(),
      u = h.widest.width,
      d = h.highest.height,
      f = _t(this.chart.width - u, 0, this.maxWidth);
    (r = t.offset ? this.maxWidth / n : f / (n - 1)),
      u + 6 > r &&
        ((r = f / (n - (t.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          fe(t.grid) -
          i.padding -
          es(t.title, this.chart.options.font)),
        (c = Math.sqrt(u * u + d * d)),
        (a = xr(
          Math.min(
            Math.asin(_t((h.highest.height + 6) / r, -1, 1)),
            Math.asin(_t(l / c, -1, 1)) - Math.asin(_t(d / c, -1, 1))
          )
        )),
        (a = Math.max(s, Math.min(o, a)))),
      (this.labelRotation = a);
  }
  afterCalculateLabelRotation() {
    j(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    j(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: i,
        options: { ticks: n, title: s, grid: o },
      } = this,
      a = this._isVisible(),
      r = this.isHorizontal();
    if (a) {
      const l = es(s, i.options.font);
      if (
        (r
          ? ((t.width = this.maxWidth), (t.height = fe(o) + l))
          : ((t.height = this.maxHeight), (t.width = fe(o) + l)),
        n.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: h,
            widest: u,
            highest: d,
          } = this._getLabelSizes(),
          f = n.padding * 2,
          p = Yt(this.labelRotation),
          m = Math.cos(p),
          g = Math.sin(p);
        if (r) {
          const b = n.mirror ? 0 : g * u.width + m * d.height;
          t.height = Math.min(this.maxHeight, t.height + b + f);
        } else {
          const b = n.mirror ? 0 : m * u.width + g * d.height;
          t.width = Math.min(this.maxWidth, t.width + b + f);
        }
        this._calculatePadding(c, h, g, m);
      }
    }
    this._handleMargins(),
      r
        ? ((this.width = this._length =
            i.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            i.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, i, n, s) {
    const {
        ticks: { align: o, padding: a },
        position: r,
      } = this.options,
      l = this.labelRotation !== 0,
      c = r !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left,
        u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0,
        f = 0;
      l
        ? c
          ? ((d = s * t.width), (f = n * i.height))
          : ((d = n * t.height), (f = s * i.width))
        : o === "start"
        ? (f = i.width)
        : o === "end"
        ? (d = t.width)
        : o !== "inner" && ((d = t.width / 2), (f = i.width / 2)),
        (this.paddingLeft = Math.max(
          ((d - h + a) * this.width) / (this.width - h),
          0
        )),
        (this.paddingRight = Math.max(
          ((f - u + a) * this.width) / (this.width - u),
          0
        ));
    } else {
      let h = i.height / 2,
        u = t.height / 2;
      o === "start"
        ? ((h = 0), (u = t.height))
        : o === "end" && ((h = i.height), (u = 0)),
        (this.paddingTop = h + a),
        (this.paddingBottom = u + a);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    j(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: i } = this.options;
    return i === "top" || i === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let i, n;
    for (i = 0, n = t.length; i < n; i++)
      $(t[i].label) && (t.splice(i, 1), n--, i--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const i = this.options.ticks.sampleSize;
      let n = this.ticks;
      i < n.length && (n = ts(n, i)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            n,
            n.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return t;
  }
  _computeLabelSizes(t, i, n) {
    const { ctx: s, _longestTextCache: o } = this,
      a = [],
      r = [],
      l = Math.floor(i / Jn(i, n));
    let c = 0,
      h = 0,
      u,
      d,
      f,
      p,
      m,
      g,
      b,
      v,
      y,
      k,
      w;
    for (u = 0; u < i; u += l) {
      if (
        ((p = t[u].label),
        (m = this._resolveTickFontOptions(u)),
        (s.font = g = m.string),
        (b = o[g] = o[g] || { data: {}, gc: [] }),
        (v = m.lineHeight),
        (y = k = 0),
        !$(p) && !Q(p))
      )
        (y = Tn(s, b.data, b.gc, y, p)), (k = v);
      else if (Q(p))
        for (d = 0, f = p.length; d < f; ++d)
          (w = p[d]),
            !$(w) && !Q(w) && ((y = Tn(s, b.data, b.gc, y, w)), (k += v));
      a.push(y), r.push(k), (c = Math.max(y, c)), (h = Math.max(k, h));
    }
    pc(o, i);
    const D = a.indexOf(c),
      M = r.indexOf(h),
      P = (S) => ({ width: a[S] || 0, height: r[S] || 0 });
    return {
      first: P(0),
      last: P(i - 1),
      widest: P(D),
      highest: P(M),
      widths: a,
      heights: r,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, i) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const i = this.ticks;
    return t < 0 || t > i.length - 1 ? null : this.getPixelForValue(i[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const i = this._startPixel + t * this._length;
    return Sr(this._alignToPixels ? Nt(this.chart, i, 0) : i);
  }
  getDecimalForPixel(t) {
    const i = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - i : i;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: i } = this;
    return t < 0 && i < 0 ? i : t > 0 && i > 0 ? t : 0;
  }
  getContext(t) {
    const i = this.ticks || [];
    if (t >= 0 && t < i.length) {
      const n = i[t];
      return n.$context || (n.$context = vc(this.getContext(), t, n));
    }
    return this.$context || (this.$context = bc(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      i = Yt(this.labelRotation),
      n = Math.abs(Math.cos(i)),
      s = Math.abs(Math.sin(i)),
      o = this._getLabelSizes(),
      a = t.autoSkipPadding || 0,
      r = o ? o.widest.width + a : 0,
      l = o ? o.highest.height + a : 0;
    return this.isHorizontal()
      ? l * n > r * s
        ? r / n
        : l / s
      : l * s < r * n
      ? l / n
      : r / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const i = this.axis,
      n = this.chart,
      s = this.options,
      { grid: o, position: a, border: r } = s,
      l = o.offset,
      c = this.isHorizontal(),
      u = this.ticks.length + (l ? 1 : 0),
      d = fe(o),
      f = [],
      p = r.setContext(this.getContext()),
      m = p.display ? p.width : 0,
      g = m / 2,
      b = function (I) {
        return Nt(n, I, m);
      };
    let v, y, k, w, D, M, P, S, O, T, A, W;
    if (a === "top")
      (v = b(this.bottom)),
        (M = this.bottom - d),
        (S = v - g),
        (T = b(t.top) + g),
        (W = t.bottom);
    else if (a === "bottom")
      (v = b(this.top)),
        (T = t.top),
        (W = b(t.bottom) - g),
        (M = v + g),
        (S = this.top + d);
    else if (a === "left")
      (v = b(this.right)),
        (D = this.right - d),
        (P = v - g),
        (O = b(t.left) + g),
        (A = t.right);
    else if (a === "right")
      (v = b(this.left)),
        (O = t.left),
        (A = b(t.right) - g),
        (D = v + g),
        (P = this.left + d);
    else if (i === "x") {
      if (a === "center") v = b((t.top + t.bottom) / 2 + 0.5);
      else if (E(a)) {
        const I = Object.keys(a)[0],
          J = a[I];
        v = b(this.chart.scales[I].getPixelForValue(J));
      }
      (T = t.top), (W = t.bottom), (M = v + g), (S = M + d);
    } else if (i === "y") {
      if (a === "center") v = b((t.left + t.right) / 2);
      else if (E(a)) {
        const I = Object.keys(a)[0],
          J = a[I];
        v = b(this.chart.scales[I].getPixelForValue(J));
      }
      (D = v - g), (P = D - d), (O = t.left), (A = t.right);
    }
    const K = H(s.ticks.maxTicksLimit, u),
      V = Math.max(1, Math.ceil(u / K));
    for (y = 0; y < u; y += V) {
      const I = this.getContext(y),
        J = o.setContext(I),
        Ot = r.setContext(I),
        x = J.lineWidth,
        C = J.color,
        z = Ot.dash || [],
        N = Ot.dashOffset,
        tt = J.tickWidth,
        L = J.tickColor,
        U = J.tickBorderDash || [],
        Y = J.tickBorderDashOffset;
      (k = mc(this, y, l)),
        k !== void 0 &&
          ((w = Nt(n, k, x)),
          c ? (D = P = O = A = w) : (M = S = T = W = w),
          f.push({
            tx1: D,
            ty1: M,
            tx2: P,
            ty2: S,
            x1: O,
            y1: T,
            x2: A,
            y2: W,
            width: x,
            color: C,
            borderDash: z,
            borderDashOffset: N,
            tickWidth: tt,
            tickColor: L,
            tickBorderDash: U,
            tickBorderDashOffset: Y,
          }));
    }
    return (this._ticksLength = u), (this._borderValue = v), f;
  }
  _computeLabelItems(t) {
    const i = this.axis,
      n = this.options,
      { position: s, ticks: o } = n,
      a = this.isHorizontal(),
      r = this.ticks,
      { align: l, crossAlign: c, padding: h, mirror: u } = o,
      d = fe(n.grid),
      f = d + h,
      p = u ? -h : f,
      m = -Yt(this.labelRotation),
      g = [];
    let b,
      v,
      y,
      k,
      w,
      D,
      M,
      P,
      S,
      O,
      T,
      A,
      W = "middle";
    if (s === "top")
      (D = this.bottom - p), (M = this._getXAxisLabelAlignment());
    else if (s === "bottom")
      (D = this.top + p), (M = this._getXAxisLabelAlignment());
    else if (s === "left") {
      const V = this._getYAxisLabelAlignment(d);
      (M = V.textAlign), (w = V.x);
    } else if (s === "right") {
      const V = this._getYAxisLabelAlignment(d);
      (M = V.textAlign), (w = V.x);
    } else if (i === "x") {
      if (s === "center") D = (t.top + t.bottom) / 2 + f;
      else if (E(s)) {
        const V = Object.keys(s)[0],
          I = s[V];
        D = this.chart.scales[V].getPixelForValue(I) + f;
      }
      M = this._getXAxisLabelAlignment();
    } else if (i === "y") {
      if (s === "center") w = (t.left + t.right) / 2 - f;
      else if (E(s)) {
        const V = Object.keys(s)[0],
          I = s[V];
        w = this.chart.scales[V].getPixelForValue(I);
      }
      M = this._getYAxisLabelAlignment(d).textAlign;
    }
    i === "y" && (l === "start" ? (W = "top") : l === "end" && (W = "bottom"));
    const K = this._getLabelSizes();
    for (b = 0, v = r.length; b < v; ++b) {
      (y = r[b]), (k = y.label);
      const V = o.setContext(this.getContext(b));
      (P = this.getPixelForTick(b) + o.labelOffset),
        (S = this._resolveTickFontOptions(b)),
        (O = S.lineHeight),
        (T = Q(k) ? k.length : 1);
      const I = T / 2,
        J = V.color,
        Ot = V.textStrokeColor,
        x = V.textStrokeWidth;
      let C = M;
      a
        ? ((w = P),
          M === "inner" &&
            (b === v - 1
              ? (C = this.options.reverse ? "left" : "right")
              : b === 0
              ? (C = this.options.reverse ? "right" : "left")
              : (C = "center")),
          s === "top"
            ? c === "near" || m !== 0
              ? (A = -T * O + O / 2)
              : c === "center"
              ? (A = -K.highest.height / 2 - I * O + O)
              : (A = -K.highest.height + O / 2)
            : c === "near" || m !== 0
            ? (A = O / 2)
            : c === "center"
            ? (A = K.highest.height / 2 - I * O)
            : (A = K.highest.height - T * O),
          u && (A *= -1),
          m !== 0 && !V.showLabelBackdrop && (w += (O / 2) * Math.sin(m)))
        : ((D = P), (A = ((1 - T) * O) / 2));
      let z;
      if (V.showLabelBackdrop) {
        const N = gt(V.backdropPadding),
          tt = K.heights[b],
          L = K.widths[b];
        let U = A - N.top,
          Y = 0 - N.left;
        switch (W) {
          case "middle":
            U -= tt / 2;
            break;
          case "bottom":
            U -= tt;
            break;
        }
        switch (M) {
          case "center":
            Y -= L / 2;
            break;
          case "right":
            Y -= L;
            break;
          case "inner":
            b === v - 1 ? (Y -= L) : b > 0 && (Y -= L / 2);
            break;
        }
        z = {
          left: Y,
          top: U,
          width: L + N.width,
          height: tt + N.height,
          color: V.backdropColor,
        };
      }
      g.push({
        label: k,
        font: S,
        textOffset: A,
        options: {
          rotation: m,
          color: J,
          strokeColor: Ot,
          strokeWidth: x,
          textAlign: C,
          textBaseline: W,
          translation: [w, D],
          backdrop: z,
        },
      });
    }
    return g;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: i } = this.options;
    if (-Yt(this.labelRotation)) return t === "top" ? "left" : "right";
    let s = "center";
    return (
      i.align === "start"
        ? (s = "left")
        : i.align === "end"
        ? (s = "right")
        : i.align === "inner" && (s = "inner"),
      s
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: i,
        ticks: { crossAlign: n, mirror: s, padding: o },
      } = this.options,
      a = this._getLabelSizes(),
      r = t + o,
      l = a.widest.width;
    let c, h;
    return (
      i === "left"
        ? s
          ? ((h = this.right + o),
            n === "near"
              ? (c = "left")
              : n === "center"
              ? ((c = "center"), (h += l / 2))
              : ((c = "right"), (h += l)))
          : ((h = this.right - r),
            n === "near"
              ? (c = "right")
              : n === "center"
              ? ((c = "center"), (h -= l / 2))
              : ((c = "left"), (h = this.left)))
        : i === "right"
        ? s
          ? ((h = this.left + o),
            n === "near"
              ? (c = "right")
              : n === "center"
              ? ((c = "center"), (h -= l / 2))
              : ((c = "left"), (h -= l)))
          : ((h = this.left + r),
            n === "near"
              ? (c = "left")
              : n === "center"
              ? ((c = "center"), (h += l / 2))
              : ((c = "right"), (h = this.right)))
        : (c = "right"),
      { textAlign: c, x: h }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      i = this.options.position;
    if (i === "left" || i === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (i === "top" || i === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: i },
      left: n,
      top: s,
      width: o,
      height: a,
    } = this;
    i && (t.save(), (t.fillStyle = i), t.fillRect(n, s, o, a), t.restore());
  }
  getLineWidthForValue(t) {
    const i = this.options.grid;
    if (!this._isVisible() || !i.display) return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? i.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const i = this.options.grid,
      n = this.ctx,
      s =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let o, a;
    const r = (l, c, h) => {
      !h.width ||
        !h.color ||
        (n.save(),
        (n.lineWidth = h.width),
        (n.strokeStyle = h.color),
        n.setLineDash(h.borderDash || []),
        (n.lineDashOffset = h.borderDashOffset),
        n.beginPath(),
        n.moveTo(l.x, l.y),
        n.lineTo(c.x, c.y),
        n.stroke(),
        n.restore());
    };
    if (i.display)
      for (o = 0, a = s.length; o < a; ++o) {
        const l = s[o];
        i.drawOnChartArea && r({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          i.drawTicks &&
            r(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: i,
        options: { border: n, grid: s },
      } = this,
      o = n.setContext(this.getContext()),
      a = n.display ? o.width : 0;
    if (!a) return;
    const r = s.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let c, h, u, d;
    this.isHorizontal()
      ? ((c = Nt(t, this.left, a) - a / 2),
        (h = Nt(t, this.right, r) + r / 2),
        (u = d = l))
      : ((u = Nt(t, this.top, a) - a / 2),
        (d = Nt(t, this.bottom, r) + r / 2),
        (c = h = l)),
      i.save(),
      (i.lineWidth = o.width),
      (i.strokeStyle = o.color),
      i.beginPath(),
      i.moveTo(c, u),
      i.lineTo(h, d),
      i.stroke(),
      i.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const n = this.ctx,
      s = this._computeLabelArea();
    s && Xi(n, s);
    const o = this.getLabelItems(t);
    for (const a of o) {
      const r = a.options,
        l = a.font,
        c = a.label,
        h = a.textOffset;
      Ce(n, c, 0, h, l, r);
    }
    s && Gi(n);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: i, title: n, reverse: s },
    } = this;
    if (!n.display) return;
    const o = it(n.font),
      a = gt(n.padding),
      r = n.align;
    let l = o.lineHeight / 2;
    i === "bottom" || i === "center" || E(i)
      ? ((l += a.bottom),
        Q(n.text) && (l += o.lineHeight * (n.text.length - 1)))
      : (l += a.top);
    const {
      titleX: c,
      titleY: h,
      maxWidth: u,
      rotation: d,
    } = xc(this, l, i, r);
    Ce(t, n.text, 0, 0, o, {
      color: n.color,
      maxWidth: u,
      rotation: d,
      textAlign: _c(r, i, s),
      textBaseline: "middle",
      translation: [c, h],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      i = (t.ticks && t.ticks.z) || 0,
      n = H(t.grid && t.grid.z, -1),
      s = H(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== ce.prototype.draw
      ? [
          {
            z: i,
            draw: (o) => {
              this.draw(o);
            },
          },
        ]
      : [
          {
            z: n,
            draw: (o) => {
              this.drawBackground(), this.drawGrid(o), this.drawTitle();
            },
          },
          {
            z: s,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: i,
            draw: (o) => {
              this.drawLabels(o);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const i = this.chart.getSortedVisibleDatasetMetas(),
      n = this.axis + "AxisID",
      s = [];
    let o, a;
    for (o = 0, a = i.length; o < a; ++o) {
      const r = i[o];
      r[n] === this.id && (!t || r.type === t) && s.push(r);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const i = this.options.ticks.setContext(this.getContext(t));
    return it(i.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Ne {
  constructor(t, i, n) {
    (this.type = t),
      (this.scope = i),
      (this.override = n),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const i = Object.getPrototypeOf(t);
    let n;
    wc(i) && (n = this.register(i));
    const s = this.items,
      o = t.id,
      a = this.scope + "." + o;
    if (!o) throw new Error("class does not have id: " + t);
    return (
      o in s ||
        ((s[o] = t),
        yc(t, a, n),
        this.override && q.override(t.id, t.overrides)),
      a
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const i = this.items,
      n = t.id,
      s = this.scope;
    n in i && delete i[n],
      s && n in q[s] && (delete q[s][n], this.override && delete qt[n]);
  }
}
function yc(e, t, i) {
  const n = De(Object.create(null), [i ? q.get(i) : {}, q.get(t), e.defaults]);
  q.set(t, n),
    e.defaultRoutes && kc(t, e.defaultRoutes),
    e.descriptors && q.describe(t, e.descriptors);
}
function kc(e, t) {
  Object.keys(t).forEach((i) => {
    const n = i.split("."),
      s = n.pop(),
      o = [e].concat(n).join("."),
      a = t[i].split("."),
      r = a.pop(),
      l = a.join(".");
    q.route(o, s, l, r);
  });
}
function wc(e) {
  return "id" in e && "defaults" in e;
}
class Sc {
  constructor() {
    (this.controllers = new Ne(we, "datasets", !0)),
      (this.elements = new Ne(Bt, "elements")),
      (this.plugins = new Ne(Object, "plugins")),
      (this.scales = new Ne(ce, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, i, n) {
    [...i].forEach((s) => {
      const o = n || this._getRegistryForType(s);
      n || o.isForType(s) || (o === this.plugins && s.id)
        ? this._exec(t, o, s)
        : B(s, (a) => {
            const r = n || this._getRegistryForType(a);
            this._exec(t, r, a);
          });
    });
  }
  _exec(t, i, n) {
    const s = Ui(t);
    j(n["before" + s], [], n), i[t](n), j(n["after" + s], [], n);
  }
  _getRegistryForType(t) {
    for (let i = 0; i < this._typedRegistries.length; i++) {
      const n = this._typedRegistries[i];
      if (n.isForType(t)) return n;
    }
    return this.plugins;
  }
  _get(t, i, n) {
    const s = i.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + n + ".");
    return s;
  }
}
var wt = new Sc();
class Mc {
  constructor() {
    this._init = [];
  }
  notify(t, i, n, s) {
    i === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t),
      a = this._notify(o, t, i, n);
    return (
      i === "afterDestroy" &&
        (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")),
      a
    );
  }
  _notify(t, i, n, s) {
    s = s || {};
    for (const o of t) {
      const a = o.plugin,
        r = a[n],
        l = [i, s, o.options];
      if (j(r, l, a) === !1 && s.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    $(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const i = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), i;
  }
  _createDescriptors(t, i) {
    const n = t && t.config,
      s = H(n.options && n.options.plugins, {}),
      o = Dc(n);
    return s === !1 && !i ? [] : Cc(t, o, s, i);
  }
  _notifyStateChanges(t) {
    const i = this._oldCache || [],
      n = this._cache,
      s = (o, a) =>
        o.filter((r) => !a.some((l) => r.plugin.id === l.plugin.id));
    this._notify(s(i, n), t, "stop"), this._notify(s(n, i), t, "start");
  }
}
function Dc(e) {
  const t = {},
    i = [],
    n = Object.keys(wt.plugins.items);
  for (let o = 0; o < n.length; o++) i.push(wt.getPlugin(n[o]));
  const s = e.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    i.indexOf(a) === -1 && (i.push(a), (t[a.id] = !0));
  }
  return { plugins: i, localIds: t };
}
function Pc(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function Cc(e, { plugins: t, localIds: i }, n, s) {
  const o = [],
    a = e.getContext();
  for (const r of t) {
    const l = r.id,
      c = Pc(n[l], s);
    c !== null &&
      o.push({
        plugin: r,
        options: Oc(e.config, { plugin: r, local: i[l] }, c, a),
      });
  }
  return o;
}
function Oc(e, { plugin: t, local: i }, n, s) {
  const o = e.pluginScopeKeys(t),
    a = e.getOptionScopes(n, o);
  return (
    i && t.defaults && a.push(t.defaults),
    e.createResolver(a, s, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Ri(e, t) {
  const i = q.datasets[e] || {};
  return (
    ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || i.indexAxis || "x"
  );
}
function Tc(e, t) {
  let i = e;
  return (
    e === "_index_" ? (i = t) : e === "_value_" && (i = t === "x" ? "y" : "x"),
    i
  );
}
function Ac(e, t) {
  return e === t ? "_index_" : "_value_";
}
function is(e) {
  if (e === "x" || e === "y" || e === "r") return e;
}
function Ic(e) {
  if (e === "top" || e === "bottom") return "x";
  if (e === "left" || e === "right") return "y";
}
function Fi(e, ...t) {
  if (is(e)) return e;
  for (const i of t) {
    const n =
      i.axis || Ic(i.position) || (e.length > 1 && is(e[0].toLowerCase()));
    if (n) return n;
  }
  throw new Error(
    `Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`
  );
}
function ns(e, t, i) {
  if (i[t + "AxisID"] === e) return { axis: t };
}
function Lc(e, t) {
  if (t.data && t.data.datasets) {
    const i = t.data.datasets.filter((n) => n.xAxisID === e || n.yAxisID === e);
    if (i.length) return ns(e, "x", i[0]) || ns(e, "y", i[0]);
  }
  return {};
}
function Vc(e, t) {
  const i = qt[e.type] || { scales: {} },
    n = t.scales || {},
    s = Ri(e.type, t),
    o = Object.create(null);
  return (
    Object.keys(n).forEach((a) => {
      const r = n[a];
      if (!E(r))
        return console.error(`Invalid scale configuration for scale: ${a}`);
      if (r._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${a}`
        );
      const l = Fi(a, r, Lc(a, e), q.scales[r.type]),
        c = Ac(l, s),
        h = i.scales || {};
      o[a] = xe(Object.create(null), [{ axis: l }, r, h[l], h[c]]);
    }),
    e.data.datasets.forEach((a) => {
      const r = a.type || e.type,
        l = a.indexAxis || Ri(r, t),
        h = (qt[r] || {}).scales || {};
      Object.keys(h).forEach((u) => {
        const d = Tc(u, l),
          f = a[d + "AxisID"] || d;
        (o[f] = o[f] || Object.create(null)),
          xe(o[f], [{ axis: d }, n[f], h[u]]);
      });
    }),
    Object.keys(o).forEach((a) => {
      const r = o[a];
      xe(r, [q.scales[r.type], q.scale]);
    }),
    o
  );
}
function Mo(e) {
  const t = e.options || (e.options = {});
  (t.plugins = H(t.plugins, {})), (t.scales = Vc(e, t));
}
function Do(e) {
  return (
    (e = e || {}),
    (e.datasets = e.datasets || []),
    (e.labels = e.labels || []),
    e
  );
}
function Rc(e) {
  return (e = e || {}), (e.data = Do(e.data)), Mo(e), e;
}
const ss = new Map(),
  Po = new Set();
function je(e, t) {
  let i = ss.get(e);
  return i || ((i = t()), ss.set(e, i), Po.add(i)), i;
}
const ge = (e, t, i) => {
  const n = oe(t, i);
  n !== void 0 && e.add(n);
};
class Fc {
  constructor(t) {
    (this._config = Rc(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Do(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Mo(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return je(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, i) {
    return je(`${t}.transition.${i}`, () => [
      [`datasets.${t}.transitions.${i}`, `transitions.${i}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, i) {
    return je(`${t}-${i}`, () => [
      [`datasets.${t}.elements.${i}`, `datasets.${t}`, `elements.${i}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const i = t.id,
      n = this.type;
    return je(`${n}-plugin-${i}`, () => [
      [`plugins.${i}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, i) {
    const n = this._scopeCache;
    let s = n.get(t);
    return (!s || i) && ((s = new Map()), n.set(t, s)), s;
  }
  getOptionScopes(t, i, n) {
    const { options: s, type: o } = this,
      a = this._cachedScopes(t, n),
      r = a.get(i);
    if (r) return r;
    const l = new Set();
    i.forEach((h) => {
      t && (l.add(t), h.forEach((u) => ge(l, t, u))),
        h.forEach((u) => ge(l, s, u)),
        h.forEach((u) => ge(l, qt[o] || {}, u)),
        h.forEach((u) => ge(l, q, u)),
        h.forEach((u) => ge(l, Vi, u));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(Object.create(null)), Po.has(i) && a.set(i, c), c
    );
  }
  chartOptionScopes() {
    const { options: t, type: i } = this;
    return [t, qt[i] || {}, q.datasets[i] || {}, { type: i }, q, Vi];
  }
  resolveNamedOptions(t, i, n, s = [""]) {
    const o = { $shared: !0 },
      { resolver: a, subPrefixes: r } = os(this._resolverCache, t, s);
    let l = a;
    if (zc(a, i)) {
      (o.$shared = !1), (n = zt(n) ? n() : n);
      const c = this.createResolver(t, n, r);
      l = ae(a, n, c);
    }
    for (const c of i) o[c] = l[c];
    return o;
  }
  createResolver(t, i, n = [""], s) {
    const { resolver: o } = os(this._resolverCache, t, n);
    return E(i) ? ae(o, i, void 0, s) : o;
  }
}
function os(e, t, i) {
  let n = e.get(t);
  n || ((n = new Map()), e.set(t, n));
  const s = i.join();
  let o = n.get(s);
  return (
    o ||
      ((o = {
        resolver: Qi(t, i),
        subPrefixes: i.filter((r) => !r.toLowerCase().includes("hover")),
      }),
      n.set(s, o)),
    o
  );
}
const Ec = (e) => E(e) && Object.getOwnPropertyNames(e).some((t) => zt(e[t]));
function zc(e, t) {
  const { isScriptable: i, isIndexable: n } = ho(e);
  for (const s of t) {
    const o = i(s),
      a = n(s),
      r = (a || o) && e[s];
    if ((o && (zt(r) || Ec(r))) || (a && Q(r))) return !0;
  }
  return !1;
}
var Bc = "4.4.7";
const Hc = ["top", "bottom", "left", "right", "chartArea"];
function as(e, t) {
  return e === "top" || e === "bottom" || (Hc.indexOf(e) === -1 && t === "x");
}
function rs(e, t) {
  return function (i, n) {
    return i[e] === n[e] ? i[t] - n[t] : i[e] - n[e];
  };
}
function ls(e) {
  const t = e.chart,
    i = t.options.animation;
  t.notifyPlugins("afterRender"), j(i && i.onComplete, [e], t);
}
function Wc(e) {
  const t = e.chart,
    i = t.options.animation;
  j(i && i.onProgress, [e], t);
}
function Co(e) {
  return (
    tn() && typeof e == "string"
      ? (e = document.getElementById(e))
      : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  );
}
const Ge = {},
  cs = (e) => {
    const t = Co(e);
    return Object.values(Ge)
      .filter((i) => i.canvas === t)
      .pop();
  };
function Nc(e, t, i) {
  const n = Object.keys(e);
  for (const s of n) {
    const o = +s;
    if (o >= t) {
      const a = e[s];
      delete e[s], (i > 0 || o > t) && (e[o + i] = a);
    }
  }
}
function jc(e, t, i, n) {
  return !i || e.type === "mouseout" ? null : n ? t : e;
}
function $e(e, t, i) {
  return e.options.clip ? e[i] : t[i];
}
function $c(e, t) {
  const { xScale: i, yScale: n } = e;
  return i && n
    ? {
        left: $e(i, t, "left"),
        right: $e(i, t, "right"),
        top: $e(n, t, "top"),
        bottom: $e(n, t, "bottom"),
      }
    : t;
}
var At;
let ui =
  ((At = class {
    static register(...t) {
      wt.add(...t), hs();
    }
    static unregister(...t) {
      wt.remove(...t), hs();
    }
    constructor(t, i) {
      const n = (this.config = new Fc(i)),
        s = Co(t),
        o = cs(s);
      if (o)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            o.id +
            "' must be destroyed before the canvas with ID '" +
            o.canvas.id +
            "' can be reused."
        );
      const a = n.createResolver(n.chartOptionScopes(), this.getContext());
      (this.platform = new (n.platform || rc(s))()),
        this.platform.updateConfig(n);
      const r = this.platform.acquireContext(s, a.aspectRatio),
        l = r && r.canvas,
        c = l && l.height,
        h = l && l.width;
      if (
        ((this.id = cr()),
        (this.ctx = r),
        (this.canvas = l),
        (this.width = h),
        (this.height = c),
        (this._options = a),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new Mc()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = Cr((u) => this.update(u), a.resizeDelay || 0)),
        (this._dataChanges = []),
        (Ge[this.id] = this),
        !r || !l)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item"
        );
        return;
      }
      Mt.listen(this, "complete", ls),
        Mt.listen(this, "progress", Wc),
        this._initialize(),
        this.attached && this.update();
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: i },
        width: n,
        height: s,
        _aspectRatio: o,
      } = this;
      return $(t) ? (i && o ? o : s ? n / s : null) : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    get registry() {
      return wt;
    }
    _initialize() {
      return (
        this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : Rn(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
      );
    }
    clear() {
      return An(this.canvas, this.ctx), this;
    }
    stop() {
      return Mt.stop(this), this;
    }
    resize(t, i) {
      Mt.running(this)
        ? (this._resizeBeforeDraw = { width: t, height: i })
        : this._resize(t, i);
    }
    _resize(t, i) {
      const n = this.options,
        s = this.canvas,
        o = n.maintainAspectRatio && this.aspectRatio,
        a = this.platform.getMaximumSize(s, t, i, o),
        r = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
        l = this.width ? "resize" : "attach";
      (this.width = a.width),
        (this.height = a.height),
        (this._aspectRatio = this.aspectRatio),
        Rn(this, r, !0) &&
          (this.notifyPlugins("resize", { size: a }),
          j(n.onResize, [this, a], this),
          this.attached && this._doResize(l) && this.render());
    }
    ensureScalesHaveIDs() {
      const i = this.options.scales || {};
      B(i, (n, s) => {
        n.id = s;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        i = t.scales,
        n = this.scales,
        s = Object.keys(n).reduce((a, r) => ((a[r] = !1), a), {});
      let o = [];
      i &&
        (o = o.concat(
          Object.keys(i).map((a) => {
            const r = i[a],
              l = Fi(a, r),
              c = l === "r",
              h = l === "x";
            return {
              options: r,
              dposition: c ? "chartArea" : h ? "bottom" : "left",
              dtype: c ? "radialLinear" : h ? "category" : "linear",
            };
          })
        )),
        B(o, (a) => {
          const r = a.options,
            l = r.id,
            c = Fi(l, r),
            h = H(r.type, a.dtype);
          (r.position === void 0 || as(r.position, c) !== as(a.dposition)) &&
            (r.position = a.dposition),
            (s[l] = !0);
          let u = null;
          if (l in n && n[l].type === h) u = n[l];
          else {
            const d = wt.getScale(h);
            (u = new d({ id: l, type: h, ctx: this.ctx, chart: this })),
              (n[u.id] = u);
          }
          u.init(r, t);
        }),
        B(s, (a, r) => {
          a || delete n[r];
        }),
        B(n, (a) => {
          ut.configure(this, a, a.options), ut.addBox(this, a);
        });
    }
    _updateMetasets() {
      const t = this._metasets,
        i = this.data.datasets.length,
        n = t.length;
      if ((t.sort((s, o) => s.index - o.index), n > i)) {
        for (let s = i; s < n; ++s) this._destroyDatasetMeta(s);
        t.splice(i, n - i);
      }
      this._sortedMetasets = t.slice(0).sort(rs("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: i },
      } = this;
      t.length > i.length && delete this._stacks,
        t.forEach((n, s) => {
          i.filter((o) => o === n._dataset).length === 0 &&
            this._destroyDatasetMeta(s);
        });
    }
    buildOrUpdateControllers() {
      const t = [],
        i = this.data.datasets;
      let n, s;
      for (
        this._removeUnreferencedMetasets(), n = 0, s = i.length;
        n < s;
        n++
      ) {
        const o = i[n];
        let a = this.getDatasetMeta(n);
        const r = o.type || this.config.type;
        if (
          (a.type &&
            a.type !== r &&
            (this._destroyDatasetMeta(n), (a = this.getDatasetMeta(n))),
          (a.type = r),
          (a.indexAxis = o.indexAxis || Ri(r, this.options)),
          (a.order = o.order || 0),
          (a.index = n),
          (a.label = "" + o.label),
          (a.visible = this.isDatasetVisible(n)),
          a.controller)
        )
          a.controller.updateIndex(n), a.controller.linkScales();
        else {
          const l = wt.getController(r),
            { datasetElementType: c, dataElementType: h } = q.datasets[r];
          Object.assign(l, {
            dataElementType: wt.getElement(h),
            datasetElementType: c && wt.getElement(c),
          }),
            (a.controller = new l(this, n)),
            t.push(a.controller);
        }
      }
      return this._updateMetasets(), t;
    }
    _resetElements() {
      B(
        this.data.datasets,
        (t, i) => {
          this.getDatasetMeta(i).controller.reset();
        },
        this
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(t) {
      const i = this.config;
      i.update();
      const n = (this._options = i.createResolver(
          i.chartOptionScopes(),
          this.getContext()
        )),
        s = (this._animationsDisabled = !n.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
      )
        return;
      const o = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let a = 0;
      for (let c = 0, h = this.data.datasets.length; c < h; c++) {
        const { controller: u } = this.getDatasetMeta(c),
          d = !s && o.indexOf(u) === -1;
        u.buildOrUpdateElements(d), (a = Math.max(+u.getMaxOverflow(), a));
      }
      (a = this._minPadding = n.layout.autoPadding ? a : 0),
        this._updateLayout(a),
        s ||
          B(o, (c) => {
            c.reset();
          }),
        this._updateDatasets(t),
        this.notifyPlugins("afterUpdate", { mode: t }),
        this._layers.sort(rs("z", "_idx"));
      const { _active: r, _lastEvent: l } = this;
      l
        ? this._eventHandler(l, !0)
        : r.length && this._updateHoverStyles(r, r, !0),
        this.render();
    }
    _updateScales() {
      B(this.scales, (t) => {
        ut.removeBox(this, t);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const t = this.options,
        i = new Set(Object.keys(this._listeners)),
        n = new Set(t.events);
      (!yn(i, n) || !!this._responsiveListeners !== t.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        i = this._getUniformDataChanges() || [];
      for (const { method: n, start: s, count: o } of i) {
        const a = n === "_removeElements" ? -o : o;
        Nc(t, s, a);
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges;
      if (!t || !t.length) return;
      this._dataChanges = [];
      const i = this.data.datasets.length,
        n = (o) =>
          new Set(
            t
              .filter((a) => a[0] === o)
              .map((a, r) => r + "," + a.splice(1).join(","))
          ),
        s = n(0);
      for (let o = 1; o < i; o++) if (!yn(s, n(o))) return;
      return Array.from(s)
        .map((o) => o.split(","))
        .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }));
    }
    _updateLayout(t) {
      if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
      ut.update(this, this.width, this.height, t);
      const i = this.chartArea,
        n = i.width <= 0 || i.height <= 0;
      (this._layers = []),
        B(
          this.boxes,
          (s) => {
            (n && s.position === "chartArea") ||
              (s.configure && s.configure(), this._layers.push(...s._layers()));
          },
          this
        ),
        this._layers.forEach((s, o) => {
          s._idx = o;
        }),
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(t) {
      if (
        this.notifyPlugins("beforeDatasetsUpdate", {
          mode: t,
          cancelable: !0,
        }) !== !1
      ) {
        for (let i = 0, n = this.data.datasets.length; i < n; ++i)
          this.getDatasetMeta(i).controller.configure();
        for (let i = 0, n = this.data.datasets.length; i < n; ++i)
          this._updateDataset(i, zt(t) ? t({ datasetIndex: i }) : t);
        this.notifyPlugins("afterDatasetsUpdate", { mode: t });
      }
    }
    _updateDataset(t, i) {
      const n = this.getDatasetMeta(t),
        s = { meta: n, index: t, mode: i, cancelable: !0 };
      this.notifyPlugins("beforeDatasetUpdate", s) !== !1 &&
        (n.controller._update(i),
        (s.cancelable = !1),
        this.notifyPlugins("afterDatasetUpdate", s));
    }
    render() {
      this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
        (Mt.has(this)
          ? this.attached && !Mt.running(this) && Mt.start(this)
          : (this.draw(), ls({ chart: this })));
    }
    draw() {
      let t;
      if (this._resizeBeforeDraw) {
        const { width: n, height: s } = this._resizeBeforeDraw;
        (this._resizeBeforeDraw = null), this._resize(n, s);
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
      )
        return;
      const i = this._layers;
      for (t = 0; t < i.length && i[t].z <= 0; ++t) i[t].draw(this.chartArea);
      for (this._drawDatasets(); t < i.length; ++t) i[t].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(t) {
      const i = this._sortedMetasets,
        n = [];
      let s, o;
      for (s = 0, o = i.length; s < o; ++s) {
        const a = i[s];
        (!t || a.visible) && n.push(a);
      }
      return n;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
        return;
      const t = this.getSortedVisibleDatasetMetas();
      for (let i = t.length - 1; i >= 0; --i) this._drawDataset(t[i]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(t) {
      const i = this.ctx,
        n = t._clip,
        s = !n.disabled,
        o = $c(t, this.chartArea),
        a = { meta: t, index: t.index, cancelable: !0 };
      this.notifyPlugins("beforeDatasetDraw", a) !== !1 &&
        (s &&
          Xi(i, {
            left: n.left === !1 ? 0 : o.left - n.left,
            right: n.right === !1 ? this.width : o.right + n.right,
            top: n.top === !1 ? 0 : o.top - n.top,
            bottom: n.bottom === !1 ? this.height : o.bottom + n.bottom,
          }),
        t.controller.draw(),
        s && Gi(i),
        (a.cancelable = !1),
        this.notifyPlugins("afterDatasetDraw", a));
    }
    isPointInArea(t) {
      return ro(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, i, n, s) {
      const o = Hl.modes[i];
      return typeof o == "function" ? o(this, t, n, s) : [];
    }
    getDatasetMeta(t) {
      const i = this.data.datasets[t],
        n = this._metasets;
      let s = n.filter((o) => o && o._dataset === i).pop();
      return (
        s ||
          ((s = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (i && i.order) || 0,
            index: t,
            _dataset: i,
            _parsed: [],
            _sorted: !1,
          }),
          n.push(s)),
        s
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = le(null, { chart: this, type: "chart" }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const i = this.data.datasets[t];
      if (!i) return !1;
      const n = this.getDatasetMeta(t);
      return typeof n.hidden == "boolean" ? !n.hidden : !i.hidden;
    }
    setDatasetVisibility(t, i) {
      const n = this.getDatasetMeta(t);
      n.hidden = !i;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateVisibility(t, i, n) {
      const s = n ? "show" : "hide",
        o = this.getDatasetMeta(t),
        a = o.controller._resolveAnimations(void 0, s);
      Pe(i)
        ? ((o.data[i].hidden = !n), this.update())
        : (this.setDatasetVisibility(t, n),
          a.update(o, { visible: n }),
          this.update((r) => (r.datasetIndex === t ? s : void 0)));
    }
    hide(t, i) {
      this._updateVisibility(t, i, !1);
    }
    show(t, i) {
      this._updateVisibility(t, i, !0);
    }
    _destroyDatasetMeta(t) {
      const i = this._metasets[t];
      i && i.controller && i.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
      let t, i;
      for (
        this.stop(), Mt.remove(this), t = 0, i = this.data.datasets.length;
        t < i;
        ++t
      )
        this._destroyDatasetMeta(t);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas: t, ctx: i } = this;
      this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          An(t, i),
          this.platform.releaseContext(i),
          (this.canvas = null),
          (this.ctx = null)),
        delete Ge[this.id],
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0);
    }
    bindUserEvents() {
      const t = this._listeners,
        i = this.platform,
        n = (o, a) => {
          i.addEventListener(this, o, a), (t[o] = a);
        },
        s = (o, a, r) => {
          (o.offsetX = a), (o.offsetY = r), this._eventHandler(o);
        };
      B(this.options.events, (o) => n(o, s));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        i = this.platform,
        n = (l, c) => {
          i.addEventListener(this, l, c), (t[l] = c);
        },
        s = (l, c) => {
          t[l] && (i.removeEventListener(this, l, c), delete t[l]);
        },
        o = (l, c) => {
          this.canvas && this.resize(l, c);
        };
      let a;
      const r = () => {
        s("attach", r),
          (this.attached = !0),
          this.resize(),
          n("resize", o),
          n("detach", a);
      };
      (a = () => {
        (this.attached = !1),
          s("resize", o),
          this._stop(),
          this._resize(0, 0),
          n("attach", r);
      }),
        i.isAttached(this.canvas) ? r() : a();
    }
    unbindEvents() {
      B(this._listeners, (t, i) => {
        this.platform.removeEventListener(this, i, t);
      }),
        (this._listeners = {}),
        B(this._responsiveListeners, (t, i) => {
          this.platform.removeEventListener(this, i, t);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(t, i, n) {
      const s = n ? "set" : "remove";
      let o, a, r, l;
      for (
        i === "dataset" &&
          ((o = this.getDatasetMeta(t[0].datasetIndex)),
          o.controller["_" + s + "DatasetHoverStyle"]()),
          r = 0,
          l = t.length;
        r < l;
        ++r
      ) {
        a = t[r];
        const c = a && this.getDatasetMeta(a.datasetIndex).controller;
        c && c[s + "HoverStyle"](a.element, a.datasetIndex, a.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const i = this._active || [],
        n = t.map(({ datasetIndex: o, index: a }) => {
          const r = this.getDatasetMeta(o);
          if (!r) throw new Error("No dataset found at index " + o);
          return { datasetIndex: o, element: r.data[a], index: a };
        });
      !Je(n, i) &&
        ((this._active = n),
        (this._lastEvent = null),
        this._updateHoverStyles(n, i));
    }
    notifyPlugins(t, i, n) {
      return this._plugins.notify(this, t, i, n);
    }
    isPluginEnabled(t) {
      return this._plugins._cache.filter((i) => i.plugin.id === t).length === 1;
    }
    _updateHoverStyles(t, i, n) {
      const s = this.options.hover,
        o = (l, c) =>
          l.filter(
            (h) =>
              !c.some(
                (u) => h.datasetIndex === u.datasetIndex && h.index === u.index
              )
          ),
        a = o(i, t),
        r = n ? t : o(t, i);
      a.length && this.updateHoverStyle(a, s.mode, !1),
        r.length && s.mode && this.updateHoverStyle(r, s.mode, !0);
    }
    _eventHandler(t, i) {
      const n = {
          event: t,
          replay: i,
          cancelable: !0,
          inChartArea: this.isPointInArea(t),
        },
        s = (a) =>
          (a.options.events || this.options.events).includes(t.native.type);
      if (this.notifyPlugins("beforeEvent", n, s) === !1) return;
      const o = this._handleEvent(t, i, n.inChartArea);
      return (
        (n.cancelable = !1),
        this.notifyPlugins("afterEvent", n, s),
        (o || n.changed) && this.render(),
        this
      );
    }
    _handleEvent(t, i, n) {
      const { _active: s = [], options: o } = this,
        a = i,
        r = this._getActiveElements(t, s, n, a),
        l = mr(t),
        c = jc(t, this._lastEvent, n, l);
      n &&
        ((this._lastEvent = null),
        j(o.onHover, [t, r, this], this),
        l && j(o.onClick, [t, r, this], this));
      const h = !Je(r, s);
      return (
        (h || i) && ((this._active = r), this._updateHoverStyles(r, s, i)),
        (this._lastEvent = c),
        h
      );
    }
    _getActiveElements(t, i, n, s) {
      if (t.type === "mouseout") return [];
      if (!n) return i;
      const o = this.options.hover;
      return this.getElementsAtEventForMode(t, o.mode, o, s);
    }
  }),
  F(At, "defaults", q),
  F(At, "instances", Ge),
  F(At, "overrides", qt),
  F(At, "registry", wt),
  F(At, "version", Bc),
  F(At, "getChart", cs),
  At);
function hs() {
  return B(ui.instances, (e) => e._plugins.invalidate());
}
function Oo(e, t) {
  const {
    x: i,
    y: n,
    base: s,
    width: o,
    height: a,
  } = e.getProps(["x", "y", "base", "width", "height"], t);
  let r, l, c, h, u;
  return (
    e.horizontal
      ? ((u = a / 2),
        (r = Math.min(i, s)),
        (l = Math.max(i, s)),
        (c = n - u),
        (h = n + u))
      : ((u = o / 2),
        (r = i - u),
        (l = i + u),
        (c = Math.min(n, s)),
        (h = Math.max(n, s))),
    { left: r, top: c, right: l, bottom: h }
  );
}
function Vt(e, t, i, n) {
  return e ? 0 : _t(t, i, n);
}
function Yc(e, t, i) {
  const n = e.options.borderWidth,
    s = e.borderSkipped,
    o = co(n);
  return {
    t: Vt(s.top, o.top, 0, i),
    r: Vt(s.right, o.right, 0, t),
    b: Vt(s.bottom, o.bottom, 0, i),
    l: Vt(s.left, o.left, 0, t),
  };
}
function Uc(e, t, i) {
  const { enableBorderRadius: n } = e.getProps(["enableBorderRadius"]),
    s = e.options.borderRadius,
    o = ie(s),
    a = Math.min(t, i),
    r = e.borderSkipped,
    l = n || E(s);
  return {
    topLeft: Vt(!l || r.top || r.left, o.topLeft, 0, a),
    topRight: Vt(!l || r.top || r.right, o.topRight, 0, a),
    bottomLeft: Vt(!l || r.bottom || r.left, o.bottomLeft, 0, a),
    bottomRight: Vt(!l || r.bottom || r.right, o.bottomRight, 0, a),
  };
}
function Kc(e) {
  const t = Oo(e),
    i = t.right - t.left,
    n = t.bottom - t.top,
    s = Yc(e, i / 2, n / 2),
    o = Uc(e, i / 2, n / 2);
  return {
    outer: { x: t.left, y: t.top, w: i, h: n, radius: o },
    inner: {
      x: t.left + s.l,
      y: t.top + s.t,
      w: i - s.l - s.r,
      h: n - s.t - s.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
        topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(s.b, s.r)),
      },
    },
  };
}
function Mi(e, t, i, n) {
  const s = t === null,
    o = i === null,
    r = e && !(s && o) && Oo(e, n);
  return r && (s || Jt(t, r.left, r.right)) && (o || Jt(i, r.top, r.bottom));
}
function qc(e) {
  return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight;
}
function Xc(e, t) {
  e.rect(t.x, t.y, t.w, t.h);
}
function Di(e, t, i = {}) {
  const n = e.x !== i.x ? -t : 0,
    s = e.y !== i.y ? -t : 0,
    o = (e.x + e.w !== i.x + i.w ? t : 0) - n,
    a = (e.y + e.h !== i.y + i.h ? t : 0) - s;
  return { x: e.x + n, y: e.y + s, w: e.w + o, h: e.h + a, radius: e.radius };
}
class Qe extends Bt {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t);
  }
  draw(t) {
    const {
        inflateAmount: i,
        options: { borderColor: n, backgroundColor: s },
      } = this,
      { inner: o, outer: a } = Kc(this),
      r = qc(a.radius) ? ni : Xc;
    t.save(),
      (a.w !== o.w || a.h !== o.h) &&
        (t.beginPath(),
        r(t, Di(a, i, o)),
        t.clip(),
        r(t, Di(o, -i, a)),
        (t.fillStyle = n),
        t.fill("evenodd")),
      t.beginPath(),
      r(t, Di(o, i)),
      (t.fillStyle = s),
      t.fill(),
      t.restore();
  }
  inRange(t, i, n) {
    return Mi(this, t, i, n);
  }
  inXRange(t, i) {
    return Mi(this, t, null, i);
  }
  inYRange(t, i) {
    return Mi(this, null, t, i);
  }
  getCenterPoint(t) {
    const {
      x: i,
      y: n,
      base: s,
      horizontal: o,
    } = this.getProps(["x", "y", "base", "horizontal"], t);
    return { x: o ? (i + s) / 2 : i, y: o ? n : (n + s) / 2 };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
F(Qe, "id", "bar"),
  F(Qe, "defaults", {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0,
  }),
  F(Qe, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
const us = (e, t) => {
    let { boxHeight: i = t, boxWidth: n = t } = e;
    return (
      e.usePointStyle &&
        ((i = Math.min(i, t)), (n = e.pointStyleWidth || Math.min(n, t))),
      { boxWidth: n, boxHeight: i, itemHeight: Math.max(t, i) }
    );
  },
  Gc = (e, t) =>
    e !== null &&
    t !== null &&
    e.datasetIndex === t.datasetIndex &&
    e.index === t.index;
class ds extends Bt {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, i, n) {
    (this.maxWidth = t),
      (this.maxHeight = i),
      (this._margins = n),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let i = j(t.generateLabels, [this.chart], this) || [];
    t.filter && (i = i.filter((n) => t.filter(n, this.chart.data))),
      t.sort && (i = i.sort((n, s) => t.sort(n, s, this.chart.data))),
      this.options.reverse && i.reverse(),
      (this.legendItems = i);
  }
  fit() {
    const { options: t, ctx: i } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const n = t.labels,
      s = it(n.font),
      o = s.size,
      a = this._computeTitleHeight(),
      { boxWidth: r, itemHeight: l } = us(n, o);
    let c, h;
    (i.font = s.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (h = this._fitRows(a, o, r, l) + 10))
        : ((h = this.maxHeight), (c = this._fitCols(a, s, r, l) + 10)),
      (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(h, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, i, n, s) {
    const {
        ctx: o,
        maxWidth: a,
        options: {
          labels: { padding: r },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      h = s + r;
    let u = t;
    (o.textAlign = "left"), (o.textBaseline = "middle");
    let d = -1,
      f = -h;
    return (
      this.legendItems.forEach((p, m) => {
        const g = n + i / 2 + o.measureText(p.text).width;
        (m === 0 || c[c.length - 1] + g + 2 * r > a) &&
          ((u += h), (c[c.length - (m > 0 ? 0 : 1)] = 0), (f += h), d++),
          (l[m] = { left: 0, top: f, row: d, width: g, height: s }),
          (c[c.length - 1] += g + r);
      }),
      u
    );
  }
  _fitCols(t, i, n, s) {
    const {
        ctx: o,
        maxHeight: a,
        options: {
          labels: { padding: r },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.columnSizes = []),
      h = a - t;
    let u = r,
      d = 0,
      f = 0,
      p = 0,
      m = 0;
    return (
      this.legendItems.forEach((g, b) => {
        const { itemWidth: v, itemHeight: y } = Qc(n, i, o, g, s);
        b > 0 &&
          f + y + 2 * r > h &&
          ((u += d + r),
          c.push({ width: d, height: f }),
          (p += d + r),
          m++,
          (d = f = 0)),
          (l[b] = { left: p, top: f, col: m, width: v, height: y }),
          (d = Math.max(d, v)),
          (f += y + r);
      }),
      (u += d),
      c.push({ width: d, height: f }),
      u
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: i,
        options: {
          align: n,
          labels: { padding: s },
          rtl: o,
        },
      } = this,
      a = ne(o, this.left, this.width);
    if (this.isHorizontal()) {
      let r = 0,
        l = et(n, this.left + s, this.right - this.lineWidths[r]);
      for (const c of i)
        r !== c.row &&
          ((r = c.row),
          (l = et(n, this.left + s, this.right - this.lineWidths[r]))),
          (c.top += this.top + t + s),
          (c.left = a.leftForLtr(a.x(l), c.width)),
          (l += c.width + s);
    } else {
      let r = 0,
        l = et(n, this.top + t + s, this.bottom - this.columnSizes[r].height);
      for (const c of i)
        c.col !== r &&
          ((r = c.col),
          (l = et(
            n,
            this.top + t + s,
            this.bottom - this.columnSizes[r].height
          ))),
          (c.top = l),
          (c.left += this.left + s),
          (c.left = a.leftForLtr(a.x(c.left), c.width)),
          (l += c.height + s);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Xi(t, this), this._draw(), Gi(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: i, lineWidths: n, ctx: s } = this,
      { align: o, labels: a } = t,
      r = q.color,
      l = ne(t.rtl, this.left, this.width),
      c = it(a.font),
      { padding: h } = a,
      u = c.size,
      d = u / 2;
    let f;
    this.drawTitle(),
      (s.textAlign = l.textAlign("left")),
      (s.textBaseline = "middle"),
      (s.lineWidth = 0.5),
      (s.font = c.string);
    const { boxWidth: p, boxHeight: m, itemHeight: g } = us(a, u),
      b = function (D, M, P) {
        if (isNaN(p) || p <= 0 || isNaN(m) || m < 0) return;
        s.save();
        const S = H(P.lineWidth, 1);
        if (
          ((s.fillStyle = H(P.fillStyle, r)),
          (s.lineCap = H(P.lineCap, "butt")),
          (s.lineDashOffset = H(P.lineDashOffset, 0)),
          (s.lineJoin = H(P.lineJoin, "miter")),
          (s.lineWidth = S),
          (s.strokeStyle = H(P.strokeStyle, r)),
          s.setLineDash(H(P.lineDash, [])),
          a.usePointStyle)
        ) {
          const O = {
              radius: (m * Math.SQRT2) / 2,
              pointStyle: P.pointStyle,
              rotation: P.rotation,
              borderWidth: S,
            },
            T = l.xPlus(D, p / 2),
            A = M + d;
          ao(s, O, T, A, a.pointStyleWidth && p);
        } else {
          const O = M + Math.max((u - m) / 2, 0),
            T = l.leftForLtr(D, p),
            A = ie(P.borderRadius);
          s.beginPath(),
            Object.values(A).some((W) => W !== 0)
              ? ni(s, { x: T, y: O, w: p, h: m, radius: A })
              : s.rect(T, O, p, m),
            s.fill(),
            S !== 0 && s.stroke();
        }
        s.restore();
      },
      v = function (D, M, P) {
        Ce(s, P.text, D, M + g / 2, c, {
          strikethrough: P.hidden,
          textAlign: l.textAlign(P.textAlign),
        });
      },
      y = this.isHorizontal(),
      k = this._computeTitleHeight();
    y
      ? (f = {
          x: et(o, this.left + h, this.right - n[0]),
          y: this.top + h + k,
          line: 0,
        })
      : (f = {
          x: this.left + h,
          y: et(o, this.top + k + h, this.bottom - i[0].height),
          line: 0,
        }),
      mo(this.ctx, t.textDirection);
    const w = g + h;
    this.legendItems.forEach((D, M) => {
      (s.strokeStyle = D.fontColor), (s.fillStyle = D.fontColor);
      const P = s.measureText(D.text).width,
        S = l.textAlign(D.textAlign || (D.textAlign = a.textAlign)),
        O = p + d + P;
      let T = f.x,
        A = f.y;
      l.setWidth(this.width),
        y
          ? M > 0 &&
            T + O + h > this.right &&
            ((A = f.y += w),
            f.line++,
            (T = f.x = et(o, this.left + h, this.right - n[f.line])))
          : M > 0 &&
            A + w > this.bottom &&
            ((T = f.x = T + i[f.line].width + h),
            f.line++,
            (A = f.y =
              et(o, this.top + k + h, this.bottom - i[f.line].height)));
      const W = l.x(T);
      if (
        (b(W, A, D),
        (T = Or(S, T + p + d, y ? T + O : this.right, t.rtl)),
        v(l.x(T), A, D),
        y)
      )
        f.x += O + h;
      else if (typeof D.text != "string") {
        const K = c.lineHeight;
        f.y += To(D, K) + h;
      } else f.y += w;
    }),
      po(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      i = t.title,
      n = it(i.font),
      s = gt(i.padding);
    if (!i.display) return;
    const o = ne(t.rtl, this.left, this.width),
      a = this.ctx,
      r = i.position,
      l = n.size / 2,
      c = s.top + l;
    let h,
      u = this.left,
      d = this.width;
    if (this.isHorizontal())
      (d = Math.max(...this.lineWidths)),
        (h = this.top + c),
        (u = et(t.align, u, this.right - d));
    else {
      const p = this.columnSizes.reduce((m, g) => Math.max(m, g.height), 0);
      h =
        c +
        et(
          t.align,
          this.top,
          this.bottom - p - t.labels.padding - this._computeTitleHeight()
        );
    }
    const f = et(r, u, u + d);
    (a.textAlign = o.textAlign(qi(r))),
      (a.textBaseline = "middle"),
      (a.strokeStyle = i.color),
      (a.fillStyle = i.color),
      (a.font = n.string),
      Ce(a, i.text, f, h, n);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      i = it(t.font),
      n = gt(t.padding);
    return t.display ? i.lineHeight + n.height : 0;
  }
  _getLegendItemAt(t, i) {
    let n, s, o;
    if (Jt(t, this.left, this.right) && Jt(i, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, n = 0; n < o.length; ++n)
        if (
          ((s = o[n]),
          Jt(t, s.left, s.left + s.width) && Jt(i, s.top, s.top + s.height))
        )
          return this.legendItems[n];
    }
    return null;
  }
  handleEvent(t) {
    const i = this.options;
    if (!th(t.type, i)) return;
    const n = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem,
        o = Gc(s, n);
      s && !o && j(i.onLeave, [t, s, this], this),
        (this._hoveredItem = n),
        n && !o && j(i.onHover, [t, n, this], this);
    } else n && j(i.onClick, [t, n, this], this);
  }
}
function Qc(e, t, i, n, s) {
  const o = Zc(n, e, t, i),
    a = Jc(s, n, t.lineHeight);
  return { itemWidth: o, itemHeight: a };
}
function Zc(e, t, i, n) {
  let s = e.text;
  return (
    s &&
      typeof s != "string" &&
      (s = s.reduce((o, a) => (o.length > a.length ? o : a))),
    t + i.size / 2 + n.measureText(s).width
  );
}
function Jc(e, t, i) {
  let n = e;
  return typeof t.text != "string" && (n = To(t, i)), n;
}
function To(e, t) {
  const i = e.text ? e.text.length : 0;
  return t * i;
}
function th(e, t) {
  return !!(
    ((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === "click" || e === "mouseup"))
  );
}
var eh = {
  id: "legend",
  _element: ds,
  start(e, t, i) {
    const n = (e.legend = new ds({ ctx: e.ctx, options: i, chart: e }));
    ut.configure(e, n, i), ut.addBox(e, n);
  },
  stop(e) {
    ut.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, i) {
    const n = e.legend;
    ut.configure(e, n, i), (n.options = i);
  },
  afterUpdate(e) {
    const t = e.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, i) {
      const n = t.datasetIndex,
        s = i.chart;
      s.isDatasetVisible(n)
        ? (s.hide(n), (t.hidden = !0))
        : (s.show(n), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: {
              usePointStyle: i,
              pointStyle: n,
              textAlign: s,
              color: o,
              useBorderRadius: a,
              borderRadius: r,
            },
          } = e.legend.options;
        return e._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(i ? 0 : void 0),
            h = gt(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: n || c.pointStyle,
            rotation: c.rotation,
            textAlign: s || c.textAlign,
            borderRadius: a && (r || c.borderRadius),
            datasetIndex: l.index,
          };
        }, this);
      },
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => !["generateLabels", "filter", "sort"].includes(e),
    },
  },
};
class Ao extends Bt {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, i) {
    const n = this.options;
    if (((this.left = 0), (this.top = 0), !n.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = t), (this.height = this.bottom = i);
    const s = Q(n.text) ? n.text.length : 1;
    this._padding = gt(n.padding);
    const o = s * it(n.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = o) : (this.width = o);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: i, left: n, bottom: s, right: o, options: a } = this,
      r = a.align;
    let l = 0,
      c,
      h,
      u;
    return (
      this.isHorizontal()
        ? ((h = et(r, n, o)), (u = i + t), (c = o - n))
        : (a.position === "left"
            ? ((h = n + t), (u = et(r, s, i)), (l = nt * -0.5))
            : ((h = o - t), (u = et(r, i, s)), (l = nt * 0.5)),
          (c = s - i)),
      { titleX: h, titleY: u, maxWidth: c, rotation: l }
    );
  }
  draw() {
    const t = this.ctx,
      i = this.options;
    if (!i.display) return;
    const n = it(i.font),
      o = n.lineHeight / 2 + this._padding.top,
      { titleX: a, titleY: r, maxWidth: l, rotation: c } = this._drawArgs(o);
    Ce(t, i.text, 0, 0, n, {
      color: i.color,
      maxWidth: l,
      rotation: c,
      textAlign: qi(i.align),
      textBaseline: "middle",
      translation: [a, r],
    });
  }
}
function ih(e, t) {
  const i = new Ao({ ctx: e.ctx, options: t, chart: e });
  ut.configure(e, i, t), ut.addBox(e, i), (e.titleBlock = i);
}
var nh = {
  id: "title",
  _element: Ao,
  start(e, t, i) {
    ih(e, i);
  },
  stop(e) {
    const t = e.titleBlock;
    ut.removeBox(e, t), delete e.titleBlock;
  },
  beforeUpdate(e, t, i) {
    const n = e.titleBlock;
    ut.configure(e, n, i), (n.options = i);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const be = {
  average(e) {
    if (!e.length) return !1;
    let t,
      i,
      n = new Set(),
      s = 0,
      o = 0;
    for (t = 0, i = e.length; t < i; ++t) {
      const r = e[t].element;
      if (r && r.hasValue()) {
        const l = r.tooltipPosition();
        n.add(l.x), (s += l.y), ++o;
      }
    }
    return o === 0 || n.size === 0
      ? !1
      : { x: [...n].reduce((r, l) => r + l) / n.size, y: s / o };
  },
  nearest(e, t) {
    if (!e.length) return !1;
    let i = t.x,
      n = t.y,
      s = Number.POSITIVE_INFINITY,
      o,
      a,
      r;
    for (o = 0, a = e.length; o < a; ++o) {
      const l = e[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(),
          h = kr(t, c);
        h < s && ((s = h), (r = l));
      }
    }
    if (r) {
      const l = r.tooltipPosition();
      (i = l.x), (n = l.y);
    }
    return { x: i, y: n };
  },
};
function kt(e, t) {
  return t && (Q(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function Dt(e) {
  return (typeof e == "string" || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e;
}
function sh(e, t) {
  const { element: i, datasetIndex: n, index: s } = t,
    o = e.getDatasetMeta(n).controller,
    { label: a, value: r } = o.getLabelAndValue(s);
  return {
    chart: e,
    label: a,
    parsed: o.getParsed(s),
    raw: e.data.datasets[n].data[s],
    formattedValue: r,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: n,
    element: i,
  };
}
function fs(e, t) {
  const i = e.chart.ctx,
    { body: n, footer: s, title: o } = e,
    { boxWidth: a, boxHeight: r } = t,
    l = it(t.bodyFont),
    c = it(t.titleFont),
    h = it(t.footerFont),
    u = o.length,
    d = s.length,
    f = n.length,
    p = gt(t.padding);
  let m = p.height,
    g = 0,
    b = n.reduce(
      (k, w) => k + w.before.length + w.lines.length + w.after.length,
      0
    );
  if (
    ((b += e.beforeBody.length + e.afterBody.length),
    u &&
      (m += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom),
    b)
  ) {
    const k = t.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
    m += f * k + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  d && (m += t.footerMarginTop + d * h.lineHeight + (d - 1) * t.footerSpacing);
  let v = 0;
  const y = function (k) {
    g = Math.max(g, i.measureText(k).width + v);
  };
  return (
    i.save(),
    (i.font = c.string),
    B(e.title, y),
    (i.font = l.string),
    B(e.beforeBody.concat(e.afterBody), y),
    (v = t.displayColors ? a + 2 + t.boxPadding : 0),
    B(n, (k) => {
      B(k.before, y), B(k.lines, y), B(k.after, y);
    }),
    (v = 0),
    (i.font = h.string),
    B(e.footer, y),
    i.restore(),
    (g += p.width),
    { width: g, height: m }
  );
}
function oh(e, t) {
  const { y: i, height: n } = t;
  return i < n / 2 ? "top" : i > e.height - n / 2 ? "bottom" : "center";
}
function ah(e, t, i, n) {
  const { x: s, width: o } = n,
    a = i.caretSize + i.caretPadding;
  if ((e === "left" && s + o + a > t.width) || (e === "right" && s - o - a < 0))
    return !0;
}
function rh(e, t, i, n) {
  const { x: s, width: o } = i,
    {
      width: a,
      chartArea: { left: r, right: l },
    } = e;
  let c = "center";
  return (
    n === "center"
      ? (c = s <= (r + l) / 2 ? "left" : "right")
      : s <= o / 2
      ? (c = "left")
      : s >= a - o / 2 && (c = "right"),
    ah(c, e, t, i) && (c = "center"),
    c
  );
}
function gs(e, t, i) {
  const n = i.yAlign || t.yAlign || oh(e, i);
  return { xAlign: i.xAlign || t.xAlign || rh(e, t, i, n), yAlign: n };
}
function lh(e, t) {
  let { x: i, width: n } = e;
  return t === "right" ? (i -= n) : t === "center" && (i -= n / 2), i;
}
function ch(e, t, i) {
  let { y: n, height: s } = e;
  return (
    t === "top" ? (n += i) : t === "bottom" ? (n -= s + i) : (n -= s / 2), n
  );
}
function ms(e, t, i, n) {
  const { caretSize: s, caretPadding: o, cornerRadius: a } = e,
    { xAlign: r, yAlign: l } = i,
    c = s + o,
    { topLeft: h, topRight: u, bottomLeft: d, bottomRight: f } = ie(a);
  let p = lh(t, r);
  const m = ch(t, l, c);
  return (
    l === "center"
      ? r === "left"
        ? (p += c)
        : r === "right" && (p -= c)
      : r === "left"
      ? (p -= Math.max(h, d) + s)
      : r === "right" && (p += Math.max(u, f) + s),
    { x: _t(p, 0, n.width - t.width), y: _t(m, 0, n.height - t.height) }
  );
}
function Ye(e, t, i) {
  const n = gt(i.padding);
  return t === "center"
    ? e.x + e.width / 2
    : t === "right"
    ? e.x + e.width - n.right
    : e.x + n.left;
}
function ps(e) {
  return kt([], Dt(e));
}
function hh(e, t, i) {
  return le(e, { tooltip: t, tooltipItems: i, type: "tooltip" });
}
function bs(e, t) {
  const i = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return i ? e.override(i) : e;
}
const Io = {
  beforeTitle: St,
  title(e) {
    if (e.length > 0) {
      const t = e[0],
        i = t.chart.data.labels,
        n = i ? i.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label) return t.label;
      if (n > 0 && t.dataIndex < n) return i[t.dataIndex];
    }
    return "";
  },
  afterTitle: St,
  beforeBody: St,
  beforeLabel: St,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const i = e.formattedValue;
    return $(i) || (t += i), t;
  },
  labelColor(e) {
    const i = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return {
      borderColor: i.borderColor,
      backgroundColor: i.backgroundColor,
      borderWidth: i.borderWidth,
      borderDash: i.borderDash,
      borderDashOffset: i.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(e) {
    const i = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return { pointStyle: i.pointStyle, rotation: i.rotation };
  },
  afterLabel: St,
  afterBody: St,
  beforeFooter: St,
  footer: St,
  afterFooter: St,
};
function at(e, t, i, n) {
  const s = e[t].call(i, n);
  return typeof s > "u" ? Io[t].call(i, n) : s;
}
class Ei extends Bt {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const i = this.chart,
      n = this.options.setContext(this.getContext()),
      s = n.enabled && i.options.animation && n.animations,
      o = new bo(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = hh(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, i) {
    const { callbacks: n } = i,
      s = at(n, "beforeTitle", this, t),
      o = at(n, "title", this, t),
      a = at(n, "afterTitle", this, t);
    let r = [];
    return (r = kt(r, Dt(s))), (r = kt(r, Dt(o))), (r = kt(r, Dt(a))), r;
  }
  getBeforeBody(t, i) {
    return ps(at(i.callbacks, "beforeBody", this, t));
  }
  getBody(t, i) {
    const { callbacks: n } = i,
      s = [];
    return (
      B(t, (o) => {
        const a = { before: [], lines: [], after: [] },
          r = bs(n, o);
        kt(a.before, Dt(at(r, "beforeLabel", this, o))),
          kt(a.lines, at(r, "label", this, o)),
          kt(a.after, Dt(at(r, "afterLabel", this, o))),
          s.push(a);
      }),
      s
    );
  }
  getAfterBody(t, i) {
    return ps(at(i.callbacks, "afterBody", this, t));
  }
  getFooter(t, i) {
    const { callbacks: n } = i,
      s = at(n, "beforeFooter", this, t),
      o = at(n, "footer", this, t),
      a = at(n, "afterFooter", this, t);
    let r = [];
    return (r = kt(r, Dt(s))), (r = kt(r, Dt(o))), (r = kt(r, Dt(a))), r;
  }
  _createItems(t) {
    const i = this._active,
      n = this.chart.data,
      s = [],
      o = [],
      a = [];
    let r = [],
      l,
      c;
    for (l = 0, c = i.length; l < c; ++l) r.push(sh(this.chart, i[l]));
    return (
      t.filter && (r = r.filter((h, u, d) => t.filter(h, u, d, n))),
      t.itemSort && (r = r.sort((h, u) => t.itemSort(h, u, n))),
      B(r, (h) => {
        const u = bs(t.callbacks, h);
        s.push(at(u, "labelColor", this, h)),
          o.push(at(u, "labelPointStyle", this, h)),
          a.push(at(u, "labelTextColor", this, h));
      }),
      (this.labelColors = s),
      (this.labelPointStyles = o),
      (this.labelTextColors = a),
      (this.dataPoints = r),
      r
    );
  }
  update(t, i) {
    const n = this.options.setContext(this.getContext()),
      s = this._active;
    let o,
      a = [];
    if (!s.length) this.opacity !== 0 && (o = { opacity: 0 });
    else {
      const r = be[n.position].call(this, s, this._eventPosition);
      (a = this._createItems(n)),
        (this.title = this.getTitle(a, n)),
        (this.beforeBody = this.getBeforeBody(a, n)),
        (this.body = this.getBody(a, n)),
        (this.afterBody = this.getAfterBody(a, n)),
        (this.footer = this.getFooter(a, n));
      const l = (this._size = fs(this, n)),
        c = Object.assign({}, r, l),
        h = gs(this.chart, n, c),
        u = ms(n, c, h, this.chart);
      (this.xAlign = h.xAlign),
        (this.yAlign = h.yAlign),
        (o = {
          opacity: 1,
          x: u.x,
          y: u.y,
          width: l.width,
          height: l.height,
          caretX: r.x,
          caretY: r.y,
        });
    }
    (this._tooltipItems = a),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t &&
        n.external &&
        n.external.call(this, { chart: this.chart, tooltip: this, replay: i });
  }
  drawCaret(t, i, n, s) {
    const o = this.getCaretPosition(t, n, s);
    i.lineTo(o.x1, o.y1), i.lineTo(o.x2, o.y2), i.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, i, n) {
    const { xAlign: s, yAlign: o } = this,
      { caretSize: a, cornerRadius: r } = n,
      { topLeft: l, topRight: c, bottomLeft: h, bottomRight: u } = ie(r),
      { x: d, y: f } = t,
      { width: p, height: m } = i;
    let g, b, v, y, k, w;
    return (
      o === "center"
        ? ((k = f + m / 2),
          s === "left"
            ? ((g = d), (b = g - a), (y = k + a), (w = k - a))
            : ((g = d + p), (b = g + a), (y = k - a), (w = k + a)),
          (v = g))
        : (s === "left"
            ? (b = d + Math.max(l, h) + a)
            : s === "right"
            ? (b = d + p - Math.max(c, u) - a)
            : (b = this.caretX),
          o === "top"
            ? ((y = f), (k = y - a), (g = b - a), (v = b + a))
            : ((y = f + m), (k = y + a), (g = b + a), (v = b - a)),
          (w = y)),
      { x1: g, x2: b, x3: v, y1: y, y2: k, y3: w }
    );
  }
  drawTitle(t, i, n) {
    const s = this.title,
      o = s.length;
    let a, r, l;
    if (o) {
      const c = ne(n.rtl, this.x, this.width);
      for (
        t.x = Ye(this, n.titleAlign, n),
          i.textAlign = c.textAlign(n.titleAlign),
          i.textBaseline = "middle",
          a = it(n.titleFont),
          r = n.titleSpacing,
          i.fillStyle = n.titleColor,
          i.font = a.string,
          l = 0;
        l < o;
        ++l
      )
        i.fillText(s[l], c.x(t.x), t.y + a.lineHeight / 2),
          (t.y += a.lineHeight + r),
          l + 1 === o && (t.y += n.titleMarginBottom - r);
    }
  }
  _drawColorBox(t, i, n, s, o) {
    const a = this.labelColors[n],
      r = this.labelPointStyles[n],
      { boxHeight: l, boxWidth: c } = o,
      h = it(o.bodyFont),
      u = Ye(this, "left", o),
      d = s.x(u),
      f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0,
      p = i.y + f;
    if (o.usePointStyle) {
      const m = {
          radius: Math.min(c, l) / 2,
          pointStyle: r.pointStyle,
          rotation: r.rotation,
          borderWidth: 1,
        },
        g = s.leftForLtr(d, c) + c / 2,
        b = p + l / 2;
      (t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        In(t, m, g, b),
        (t.strokeStyle = a.borderColor),
        (t.fillStyle = a.backgroundColor),
        In(t, m, g, b);
    } else {
      (t.lineWidth = E(a.borderWidth)
        ? Math.max(...Object.values(a.borderWidth))
        : a.borderWidth || 1),
        (t.strokeStyle = a.borderColor),
        t.setLineDash(a.borderDash || []),
        (t.lineDashOffset = a.borderDashOffset || 0);
      const m = s.leftForLtr(d, c),
        g = s.leftForLtr(s.xPlus(d, 1), c - 2),
        b = ie(a.borderRadius);
      Object.values(b).some((v) => v !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          ni(t, { x: m, y: p, w: c, h: l, radius: b }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = a.backgroundColor),
          t.beginPath(),
          ni(t, { x: g, y: p + 1, w: c - 2, h: l - 2, radius: b }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(m, p, c, l),
          t.strokeRect(m, p, c, l),
          (t.fillStyle = a.backgroundColor),
          t.fillRect(g, p + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[n];
  }
  drawBody(t, i, n) {
    const { body: s } = this,
      {
        bodySpacing: o,
        bodyAlign: a,
        displayColors: r,
        boxHeight: l,
        boxWidth: c,
        boxPadding: h,
      } = n,
      u = it(n.bodyFont);
    let d = u.lineHeight,
      f = 0;
    const p = ne(n.rtl, this.x, this.width),
      m = function (P) {
        i.fillText(P, p.x(t.x + f), t.y + d / 2), (t.y += d + o);
      },
      g = p.textAlign(a);
    let b, v, y, k, w, D, M;
    for (
      i.textAlign = a,
        i.textBaseline = "middle",
        i.font = u.string,
        t.x = Ye(this, g, n),
        i.fillStyle = n.bodyColor,
        B(this.beforeBody, m),
        f = r && g !== "right" ? (a === "center" ? c / 2 + h : c + 2 + h) : 0,
        k = 0,
        D = s.length;
      k < D;
      ++k
    ) {
      for (
        b = s[k],
          v = this.labelTextColors[k],
          i.fillStyle = v,
          B(b.before, m),
          y = b.lines,
          r &&
            y.length &&
            (this._drawColorBox(i, t, k, p, n),
            (d = Math.max(u.lineHeight, l))),
          w = 0,
          M = y.length;
        w < M;
        ++w
      )
        m(y[w]), (d = u.lineHeight);
      B(b.after, m);
    }
    (f = 0), (d = u.lineHeight), B(this.afterBody, m), (t.y -= o);
  }
  drawFooter(t, i, n) {
    const s = this.footer,
      o = s.length;
    let a, r;
    if (o) {
      const l = ne(n.rtl, this.x, this.width);
      for (
        t.x = Ye(this, n.footerAlign, n),
          t.y += n.footerMarginTop,
          i.textAlign = l.textAlign(n.footerAlign),
          i.textBaseline = "middle",
          a = it(n.footerFont),
          i.fillStyle = n.footerColor,
          i.font = a.string,
          r = 0;
        r < o;
        ++r
      )
        i.fillText(s[r], l.x(t.x), t.y + a.lineHeight / 2),
          (t.y += a.lineHeight + n.footerSpacing);
    }
  }
  drawBackground(t, i, n, s) {
    const { xAlign: o, yAlign: a } = this,
      { x: r, y: l } = t,
      { width: c, height: h } = n,
      {
        topLeft: u,
        topRight: d,
        bottomLeft: f,
        bottomRight: p,
      } = ie(s.cornerRadius);
    (i.fillStyle = s.backgroundColor),
      (i.strokeStyle = s.borderColor),
      (i.lineWidth = s.borderWidth),
      i.beginPath(),
      i.moveTo(r + u, l),
      a === "top" && this.drawCaret(t, i, n, s),
      i.lineTo(r + c - d, l),
      i.quadraticCurveTo(r + c, l, r + c, l + d),
      a === "center" && o === "right" && this.drawCaret(t, i, n, s),
      i.lineTo(r + c, l + h - p),
      i.quadraticCurveTo(r + c, l + h, r + c - p, l + h),
      a === "bottom" && this.drawCaret(t, i, n, s),
      i.lineTo(r + f, l + h),
      i.quadraticCurveTo(r, l + h, r, l + h - f),
      a === "center" && o === "left" && this.drawCaret(t, i, n, s),
      i.lineTo(r, l + u),
      i.quadraticCurveTo(r, l, r + u, l),
      i.closePath(),
      i.fill(),
      s.borderWidth > 0 && i.stroke();
  }
  _updateAnimationTarget(t) {
    const i = this.chart,
      n = this.$animations,
      s = n && n.x,
      o = n && n.y;
    if (s || o) {
      const a = be[t.position].call(this, this._active, this._eventPosition);
      if (!a) return;
      const r = (this._size = fs(this, t)),
        l = Object.assign({}, a, this._size),
        c = gs(i, t, l),
        h = ms(t, l, c, i);
      (s._to !== h.x || o._to !== h.y) &&
        ((this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (this.width = r.width),
        (this.height = r.height),
        (this.caretX = a.x),
        (this.caretY = a.y),
        this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const i = this.options.setContext(this.getContext());
    let n = this.opacity;
    if (!n) return;
    this._updateAnimationTarget(i);
    const s = { width: this.width, height: this.height },
      o = { x: this.x, y: this.y };
    n = Math.abs(n) < 0.001 ? 0 : n;
    const a = gt(i.padding),
      r =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    i.enabled &&
      r &&
      (t.save(),
      (t.globalAlpha = n),
      this.drawBackground(o, t, s, i),
      mo(t, i.textDirection),
      (o.y += a.top),
      this.drawTitle(o, t, i),
      this.drawBody(o, t, i),
      this.drawFooter(o, t, i),
      po(t, i.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, i) {
    const n = this._active,
      s = t.map(({ datasetIndex: r, index: l }) => {
        const c = this.chart.getDatasetMeta(r);
        if (!c) throw new Error("Cannot find a dataset at index " + r);
        return { datasetIndex: r, element: c.data[l], index: l };
      }),
      o = !Je(n, s),
      a = this._positionChanged(s, i);
    (o || a) &&
      ((this._active = s),
      (this._eventPosition = i),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, i, n = !0) {
    if (i && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options,
      o = this._active || [],
      a = this._getActiveElements(t, o, i, n),
      r = this._positionChanged(a, t),
      l = i || !Je(a, o) || r;
    return (
      l &&
        ((this._active = a),
        (s.enabled || s.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, i))),
      l
    );
  }
  _getActiveElements(t, i, n, s) {
    const o = this.options;
    if (t.type === "mouseout") return [];
    if (!s)
      return i.filter(
        (r) =>
          this.chart.data.datasets[r.datasetIndex] &&
          this.chart
            .getDatasetMeta(r.datasetIndex)
            .controller.getParsed(r.index) !== void 0
      );
    const a = this.chart.getElementsAtEventForMode(t, o.mode, o, n);
    return o.reverse && a.reverse(), a;
  }
  _positionChanged(t, i) {
    const { caretX: n, caretY: s, options: o } = this,
      a = be[o.position].call(this, t, i);
    return a !== !1 && (n !== a.x || s !== a.y);
  }
}
F(Ei, "positioners", be);
var uh = {
  id: "tooltip",
  _element: Ei,
  positioners: be,
  afterInit(e, t, i) {
    i && (e.tooltip = new Ei({ chart: e, options: i }));
  },
  beforeUpdate(e, t, i) {
    e.tooltip && e.tooltip.initialize(i);
  },
  reset(e, t, i) {
    e.tooltip && e.tooltip.initialize(i);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const i = { tooltip: t };
      if (e.notifyPlugins("beforeTooltipDraw", { ...i, cancelable: !0 }) === !1)
        return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", i);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const i = t.replay;
      e.tooltip.handleEvent(t.event, i, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: Io,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const dh = (e, t, i, n) => (
  typeof t == "string"
    ? ((i = e.push(t) - 1), n.unshift({ index: i, label: t }))
    : isNaN(t) && (i = null),
  i
);
function fh(e, t, i, n) {
  const s = e.indexOf(t);
  if (s === -1) return dh(e, t, i, n);
  const o = e.lastIndexOf(t);
  return s !== o ? i : s;
}
const gh = (e, t) => (e === null ? null : _t(Math.round(e), 0, t));
function vs(e) {
  const t = this.getLabels();
  return e >= 0 && e < t.length ? t[e] : e;
}
class zi extends ce {
  constructor(t) {
    super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(t) {
    const i = this._addedLabels;
    if (i.length) {
      const n = this.getLabels();
      for (const { index: s, label: o } of i) n[s] === o && n.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, i) {
    if ($(t)) return null;
    const n = this.getLabels();
    return (
      (i =
        isFinite(i) && n[i] === t ? i : fh(n, t, H(i, t), this._addedLabels)),
      gh(i, n.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: i } = this.getUserBounds();
    let { min: n, max: s } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (t || (n = 0), i || (s = this.getLabels().length - 1)),
      (this.min = n),
      (this.max = s);
  }
  buildTicks() {
    const t = this.min,
      i = this.max,
      n = this.options.offset,
      s = [];
    let o = this.getLabels();
    (o = t === 0 && i === o.length - 1 ? o : o.slice(t, i + 1)),
      (this._valueRange = Math.max(o.length - (n ? 0 : 1), 1)),
      (this._startValue = this.min - (n ? 0.5 : 0));
    for (let a = t; a <= i; a++) s.push({ value: a });
    return s;
  }
  getLabelForValue(t) {
    return vs.call(this, t);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != "number" && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const i = this.ticks;
    return t < 0 || t > i.length - 1 ? null : this.getPixelForValue(i[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
F(zi, "id", "category"), F(zi, "defaults", { ticks: { callback: vs } });
function mh(e, t) {
  const i = [],
    {
      bounds: s,
      step: o,
      min: a,
      max: r,
      precision: l,
      count: c,
      maxTicks: h,
      maxDigits: u,
      includeBounds: d,
    } = e,
    f = o || 1,
    p = h - 1,
    { min: m, max: g } = t,
    b = !$(a),
    v = !$(r),
    y = !$(c),
    k = (g - m) / (u + 1);
  let w = wn((g - m) / p / f) * f,
    D,
    M,
    P,
    S;
  if (w < 1e-14 && !b && !v) return [{ value: m }, { value: g }];
  (S = Math.ceil(g / w) - Math.floor(m / w)),
    S > p && (w = wn((S * w) / p / f) * f),
    $(l) || ((D = Math.pow(10, l)), (w = Math.ceil(w * D) / D)),
    s === "ticks"
      ? ((M = Math.floor(m / w) * w), (P = Math.ceil(g / w) * w))
      : ((M = m), (P = g)),
    b && v && o && vr((r - a) / o, w / 1e3)
      ? ((S = Math.round(Math.min((r - a) / w, h))),
        (w = (r - a) / S),
        (M = a),
        (P = r))
      : y
      ? ((M = b ? a : M), (P = v ? r : P), (S = c - 1), (w = (P - M) / S))
      : ((S = (P - M) / w),
        Ke(S, Math.round(S), w / 1e3)
          ? (S = Math.round(S))
          : (S = Math.ceil(S)));
  const O = Math.max(Sn(w), Sn(M));
  (D = Math.pow(10, $(l) ? O : l)),
    (M = Math.round(M * D) / D),
    (P = Math.round(P * D) / D);
  let T = 0;
  for (
    b &&
    (d && M !== a
      ? (i.push({ value: a }),
        M < a && T++,
        Ke(Math.round((M + T * w) * D) / D, a, _s(a, k, e)) && T++)
      : M < a && T++);
    T < S;
    ++T
  ) {
    const A = Math.round((M + T * w) * D) / D;
    if (v && A > r) break;
    i.push({ value: A });
  }
  return (
    v && d && P !== r
      ? i.length && Ke(i[i.length - 1].value, r, _s(r, k, e))
        ? (i[i.length - 1].value = r)
        : i.push({ value: r })
      : (!v || P === r) && i.push({ value: P }),
    i
  );
}
function _s(e, t, { horizontal: i, minRotation: n }) {
  const s = Yt(n),
    o = (i ? Math.sin(s) : Math.cos(s)) || 0.001,
    a = 0.75 * t * ("" + e).length;
  return Math.min(t / o, a);
}
class ph extends ce {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, i) {
    return $(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: i, maxDefined: n } = this.getUserBounds();
    let { min: s, max: o } = this;
    const a = (l) => (s = i ? s : l),
      r = (l) => (o = n ? o : l);
    if (t) {
      const l = Et(s),
        c = Et(o);
      l < 0 && c < 0 ? r(0) : l > 0 && c > 0 && a(0);
    }
    if (s === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      r(o + l), t || a(s - l);
    }
    (this.min = s), (this.max = o);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: i, stepSize: n } = t,
      s;
    return (
      n
        ? ((s = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1),
          s > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`
            ),
            (s = 1e3)))
        : ((s = this.computeTickLimit()), (i = i || 11)),
      i && (s = Math.min(i, s)),
      s
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      i = t.ticks;
    let n = this.getTickLimit();
    n = Math.max(2, n);
    const s = {
        maxTicks: n,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: i.precision,
        step: i.stepSize,
        count: i.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: i.minRotation || 0,
        includeBounds: i.includeBounds !== !1,
      },
      o = this._range || this,
      a = mh(s, o);
    return (
      t.bounds === "ticks" && _r(a, this, "value"),
      t.reverse
        ? (a.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      a
    );
  }
  configure() {
    const t = this.ticks;
    let i = this.min,
      n = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const s = (n - i) / Math.max(t.length - 1, 1) / 2;
      (i -= s), (n += s);
    }
    (this._startValue = i), (this._endValue = n), (this._valueRange = n - i);
  }
  getLabelForValue(t) {
    return no(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Bi extends ph {
  determineDataLimits() {
    const { min: t, max: i } = this.getMinMax(!0);
    (this.min = ft(t) ? t : 0),
      (this.max = ft(i) ? i : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      i = t ? this.width : this.height,
      n = Yt(this.options.ticks.minRotation),
      s = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
      o = this._resolveTickFontOptions(0);
    return Math.ceil(i / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
F(Bi, "id", "linear"),
  F(Bi, "defaults", { ticks: { callback: oo.formatters.numeric } });
const di = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  rt = Object.keys(di);
function xs(e, t) {
  return e - t;
}
function ys(e, t) {
  if ($(t)) return null;
  const i = e._adapter,
    { parser: n, round: s, isoWeekday: o } = e._parseOpts;
  let a = t;
  return (
    typeof n == "function" && (a = n(a)),
    ft(a) || (a = typeof n == "string" ? i.parse(a, n) : i.parse(a)),
    a === null
      ? null
      : (s &&
          (a =
            s === "week" && (ii(o) || o === !0)
              ? i.startOf(a, "isoWeek", o)
              : i.startOf(a, s)),
        +a)
  );
}
function ks(e, t, i, n) {
  const s = rt.length;
  for (let o = rt.indexOf(e); o < s - 1; ++o) {
    const a = di[rt[o]],
      r = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
    if (a.common && Math.ceil((i - t) / (r * a.size)) <= n) return rt[o];
  }
  return rt[s - 1];
}
function bh(e, t, i, n, s) {
  for (let o = rt.length - 1; o >= rt.indexOf(i); o--) {
    const a = rt[o];
    if (di[a].common && e._adapter.diff(s, n, a) >= t - 1) return a;
  }
  return rt[i ? rt.indexOf(i) : 0];
}
function vh(e) {
  for (let t = rt.indexOf(e) + 1, i = rt.length; t < i; ++t)
    if (di[rt[t]].common) return rt[t];
}
function ws(e, t, i) {
  if (!i) e[t] = !0;
  else if (i.length) {
    const { lo: n, hi: s } = Ki(i, t),
      o = i[n] >= t ? i[n] : i[s];
    e[o] = !0;
  }
}
function _h(e, t, i, n) {
  const s = e._adapter,
    o = +s.startOf(t[0].value, n),
    a = t[t.length - 1].value;
  let r, l;
  for (r = o; r <= a; r = +s.add(r, 1, n))
    (l = i[r]), l >= 0 && (t[l].major = !0);
  return t;
}
function Ss(e, t, i) {
  const n = [],
    s = {},
    o = t.length;
  let a, r;
  for (a = 0; a < o; ++a)
    (r = t[a]), (s[r] = a), n.push({ value: r, major: !1 });
  return o === 0 || !i ? n : _h(e, n, s, i);
}
class ai extends ce {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, i = {}) {
    const n = t.time || (t.time = {}),
      s = (this._adapter = new Rl._date(t.adapters.date));
    s.init(i),
      xe(n.displayFormats, s.formats()),
      (this._parseOpts = {
        parser: n.parser,
        round: n.round,
        isoWeekday: n.isoWeekday,
      }),
      super.init(t),
      (this._normalized = i.normalized);
  }
  parse(t, i) {
    return t === void 0 ? null : ys(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      i = this._adapter,
      n = t.time.unit || "day";
    let { min: s, max: o, minDefined: a, maxDefined: r } = this.getUserBounds();
    function l(c) {
      !a && !isNaN(c.min) && (s = Math.min(s, c.min)),
        !r && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!a || !r) &&
      (l(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        l(this.getMinMax(!1))),
      (s = ft(s) && !isNaN(s) ? s : +i.startOf(Date.now(), n)),
      (o = ft(o) && !isNaN(o) ? o : +i.endOf(Date.now(), n) + 1),
      (this.min = Math.min(s, o - 1)),
      (this.max = Math.max(s + 1, o));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let i = Number.POSITIVE_INFINITY,
      n = Number.NEGATIVE_INFINITY;
    return t.length && ((i = t[0]), (n = t[t.length - 1])), { min: i, max: n };
  }
  buildTicks() {
    const t = this.options,
      i = t.time,
      n = t.ticks,
      s = n.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      s.length &&
      ((this.min = this._userMin || s[0]),
      (this.max = this._userMax || s[s.length - 1]));
    const o = this.min,
      a = this.max,
      r = Dr(s, o, a);
    return (
      (this._unit =
        i.unit ||
        (n.autoSkip
          ? ks(i.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : bh(this, r.length, i.minUnit, this.min, this.max))),
      (this._majorUnit =
        !n.major.enabled || this._unit === "year" ? void 0 : vh(this._unit)),
      this.initOffsets(s),
      t.reverse && r.reverse(),
      Ss(this, r, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let i = 0,
      n = 0,
      s,
      o;
    this.options.offset &&
      t.length &&
      ((s = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (i = 1 - s)
        : (i = (this.getDecimalForValue(t[1]) - s) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (n = o)
        : (n = (o - this.getDecimalForValue(t[t.length - 2])) / 2));
    const a = t.length < 3 ? 0.5 : 0.25;
    (i = _t(i, 0, a)),
      (n = _t(n, 0, a)),
      (this._offsets = { start: i, end: n, factor: 1 / (i + 1 + n) });
  }
  _generate() {
    const t = this._adapter,
      i = this.min,
      n = this.max,
      s = this.options,
      o = s.time,
      a = o.unit || ks(o.minUnit, i, n, this._getLabelCapacity(i)),
      r = H(s.ticks.stepSize, 1),
      l = a === "week" ? o.isoWeekday : !1,
      c = ii(l) || l === !0,
      h = {};
    let u = i,
      d,
      f;
    if (
      (c && (u = +t.startOf(u, "isoWeek", l)),
      (u = +t.startOf(u, c ? "day" : a)),
      t.diff(n, i, a) > 1e5 * r)
    )
      throw new Error(
        i + " and " + n + " are too far apart with stepSize of " + r + " " + a
      );
    const p = s.ticks.source === "data" && this.getDataTimestamps();
    for (d = u, f = 0; d < n; d = +t.add(d, r, a), f++) ws(h, d, p);
    return (
      (d === n || s.bounds === "ticks" || f === 1) && ws(h, d, p),
      Object.keys(h)
        .sort(xs)
        .map((m) => +m)
    );
  }
  getLabelForValue(t) {
    const i = this._adapter,
      n = this.options.time;
    return n.tooltipFormat
      ? i.format(t, n.tooltipFormat)
      : i.format(t, n.displayFormats.datetime);
  }
  format(t, i) {
    const s = this.options.time.displayFormats,
      o = this._unit,
      a = i || s[o];
    return this._adapter.format(t, a);
  }
  _tickFormatFunction(t, i, n, s) {
    const o = this.options,
      a = o.ticks.callback;
    if (a) return j(a, [t, i, n], this);
    const r = o.time.displayFormats,
      l = this._unit,
      c = this._majorUnit,
      h = l && r[l],
      u = c && r[c],
      d = n[i],
      f = c && u && d && d.major;
    return this._adapter.format(t, s || (f ? u : h));
  }
  generateTickLabels(t) {
    let i, n, s;
    for (i = 0, n = t.length; i < n; ++i)
      (s = t[i]), (s.label = this._tickFormatFunction(s.value, i, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const i = this._offsets,
      n = this.getDecimalForValue(t);
    return this.getPixelForDecimal((i.start + n) * i.factor);
  }
  getValueForPixel(t) {
    const i = this._offsets,
      n = this.getDecimalForPixel(t) / i.factor - i.end;
    return this.min + n * (this.max - this.min);
  }
  _getLabelSize(t) {
    const i = this.options.ticks,
      n = this.ctx.measureText(t).width,
      s = Yt(this.isHorizontal() ? i.maxRotation : i.minRotation),
      o = Math.cos(s),
      a = Math.sin(s),
      r = this._resolveTickFontOptions(0).size;
    return { w: n * o + r * a, h: n * a + r * o };
  }
  _getLabelCapacity(t) {
    const i = this.options.time,
      n = i.displayFormats,
      s = n[i.unit] || n.millisecond,
      o = this._tickFormatFunction(t, 0, Ss(this, [t], this._majorUnit), s),
      a = this._getLabelSize(o),
      r =
        Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) -
        1;
    return r > 0 ? r : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      i,
      n;
    if (t.length) return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return (this._cache.data = s[0].controller.getAllParsedValues(this));
    for (i = 0, n = s.length; i < n; ++i)
      t = t.concat(s[i].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let i, n;
    if (t.length) return t;
    const s = this.getLabels();
    for (i = 0, n = s.length; i < n; ++i) t.push(ys(this, s[i]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return Js(t.sort(xs));
  }
}
F(ai, "id", "time"),
  F(ai, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  });
function Ue(e, t, i) {
  let n = 0,
    s = e.length - 1,
    o,
    a,
    r,
    l;
  i
    ? (t >= e[n].pos && t <= e[s].pos && ({ lo: n, hi: s } = Li(e, "pos", t)),
      ({ pos: o, time: r } = e[n]),
      ({ pos: a, time: l } = e[s]))
    : (t >= e[n].time &&
        t <= e[s].time &&
        ({ lo: n, hi: s } = Li(e, "time", t)),
      ({ time: o, pos: r } = e[n]),
      ({ time: a, pos: l } = e[s]));
  const c = a - o;
  return c ? r + ((l - r) * (t - o)) / c : r;
}
class Ms extends ai {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      i = (this._table = this.buildLookupTable(t));
    (this._minPos = Ue(i, this.min)),
      (this._tableRange = Ue(i, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: i, max: n } = this,
      s = [],
      o = [];
    let a, r, l, c, h;
    for (a = 0, r = t.length; a < r; ++a)
      (c = t[a]), c >= i && c <= n && s.push(c);
    if (s.length < 2)
      return [
        { time: i, pos: 0 },
        { time: n, pos: 1 },
      ];
    for (a = 0, r = s.length; a < r; ++a)
      (h = s[a + 1]),
        (l = s[a - 1]),
        (c = s[a]),
        Math.round((h + l) / 2) !== c && o.push({ time: c, pos: a / (r - 1) });
    return o;
  }
  _generate() {
    const t = this.min,
      i = this.max;
    let n = super.getDataTimestamps();
    return (
      (!n.includes(t) || !n.length) && n.splice(0, 0, t),
      (!n.includes(i) || n.length === 1) && n.push(i),
      n.sort((s, o) => s - o)
    );
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const i = this.getDataTimestamps(),
      n = this.getLabelTimestamps();
    return (
      i.length && n.length
        ? (t = this.normalize(i.concat(n)))
        : (t = i.length ? i : n),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (Ue(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const i = this._offsets,
      n = this.getDecimalForPixel(t) / i.factor - i.end;
    return Ue(this._table, n * this._tableRange + this._minPos, !0);
  }
}
F(Ms, "id", "timeseries"), F(Ms, "defaults", ai.defaults);
const Lo = {
    data: { type: Object, required: !0 },
    options: { type: Object, default: () => ({}) },
    plugins: { type: Array, default: () => [] },
    datasetIdKey: { type: String, default: "label" },
    updateMode: { type: String, default: void 0 },
  },
  xh = { ariaLabel: { type: String }, ariaDescribedby: { type: String } },
  yh = {
    type: { type: String, required: !0 },
    destroyDelay: { type: Number, default: 0 },
    ...Lo,
    ...xh,
  },
  kh =
    Uo[0] === "2"
      ? (e, t) => Object.assign(e, { attrs: t })
      : (e, t) => Object.assign(e, t);
function Qt(e) {
  return Fs(e) ? Oi(e) : e;
}
function wh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e;
  return Fs(t) ? new Proxy(e, {}) : e;
}
function Sh(e, t) {
  const i = e.options;
  i && t && Object.assign(i, t);
}
function Vo(e, t) {
  e.labels = t;
}
function Ro(e, t, i) {
  const n = [];
  e.datasets = t.map((s) => {
    const o = e.datasets.find((a) => a[i] === s[i]);
    return !o || !s.data || n.includes(o)
      ? { ...s }
      : (n.push(o), Object.assign(o, s), o);
  });
}
function Mh(e, t) {
  const i = { labels: [], datasets: [] };
  return Vo(i, e.labels), Ro(i, e.datasets, t), i;
}
const Dh = Rs({
  props: yh,
  setup(e, t) {
    let { expose: i, slots: n } = t;
    const s = X(null),
      o = ot(null);
    i({ chart: o });
    const a = () => {
        if (!s.value) return;
        const { type: c, data: h, options: u, plugins: d, datasetIdKey: f } = e,
          p = Mh(h, f),
          m = wh(p, h);
        o.value = new ui(s.value, {
          type: c,
          data: m,
          options: { ...u },
          plugins: d,
        });
      },
      r = () => {
        const c = Oi(o.value);
        c &&
          (e.destroyDelay > 0
            ? setTimeout(() => {
                c.destroy(), (o.value = null);
              }, e.destroyDelay)
            : (c.destroy(), (o.value = null)));
      },
      l = (c) => {
        c.update(e.updateMode);
      };
    return (
      ri(a),
      Ko(r),
      xt(
        [() => e.options, () => e.data],
        (c, h) => {
          let [u, d] = c,
            [f, p] = h;
          const m = Oi(o.value);
          if (!m) return;
          let g = !1;
          if (u) {
            const b = Qt(u),
              v = Qt(f);
            b && b !== v && (Sh(m, b), (g = !0));
          }
          if (d) {
            const b = Qt(d.labels),
              v = Qt(p.labels),
              y = Qt(d.datasets),
              k = Qt(p.datasets);
            b !== v && (Vo(m.config.data, b), (g = !0)),
              y && y !== k && (Ro(m.config.data, y, e.datasetIdKey), (g = !0));
          }
          g &&
            Te(() => {
              l(m);
            });
        },
        { deep: !0 }
      ),
      () =>
        Ci(
          "canvas",
          {
            role: "img",
            ariaLabel: e.ariaLabel,
            ariaDescribedby: e.ariaDescribedby,
            ref: s,
          },
          [Ci("p", {}, [n.default ? n.default() : ""])]
        )
    );
  },
});
function Ph(e, t) {
  return (
    ui.register(t),
    Rs({
      props: Lo,
      setup(i, n) {
        let { expose: s } = n;
        const o = ot(null),
          a = (r) => {
            o.value = r == null ? void 0 : r.chart;
          };
        return s({ chart: o }), () => Ci(Dh, kh({ ref: a }, { type: e, ...i }));
      },
    })
  );
}
const Ch = Ph("bar", qe);
ui.register(nh, uh, eh, Qe, zi, Bi);
const Oh = {
  name: "BarChart",
  components: { Bar: Ch },
  props: {
    parentChartData: { type: Object, required: !0 },
    chartStatus: { type: Boolean, required: !0 },
  },
  data() {
    return { chartOptions: { responsive: !0 } };
  },
};
function Th(e, t, i, n, s, o) {
  const a = qo("Bar");
  return (
    bt(),
    te("div", null, [
      i.chartStatus
        ? (bt(),
          Se(
            se,
            { key: 0, class: "w-100" },
            {
              default: Z(() => [
                _(
                  It,
                  { class: "chart-height justify-center d-flex" },
                  {
                    default: Z(() => [
                      _(
                        a,
                        {
                          id: "my-chart-id",
                          options: s.chartOptions,
                          data: i.parentChartData,
                        },
                        null,
                        8,
                        ["options", "data"]
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          ))
        : (bt(),
          Se(
            se,
            { key: 1 },
            {
              default: Z(() => [
                _(It, null, {
                  default: Z(() => [
                    _(js, null, {
                      default: Z(
                        () =>
                          t[0] || (t[0] = [li("No data available for range")])
                      ),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            }
          )),
    ])
  );
}
const Ah = ci(Oh, [["render", Th]]),
  Fo = st(
    {
      active: { type: [String, Array], default: void 0 },
      disabled: { type: [Boolean, String, Array], default: !1 },
      nextIcon: { type: ve, default: "$next" },
      prevIcon: { type: ve, default: "$prev" },
      modeIcon: { type: ve, default: "$subgroup" },
      text: String,
      viewMode: { type: String, default: "month" },
    },
    "VDatePickerControls"
  ),
  Ds = ct()({
    name: "VDatePickerControls",
    props: Fo(),
    emits: {
      "click:year": () => !0,
      "click:month": () => !0,
      "click:prev": () => !0,
      "click:next": () => !0,
      "click:text": () => !0,
    },
    setup(e, t) {
      let { emit: i } = t;
      const n = R(() =>
          Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled
        ),
        s = R(() =>
          Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled
        ),
        o = R(() =>
          Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled
        ),
        a = R(() =>
          Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled
        );
      function r() {
        i("click:prev");
      }
      function l() {
        i("click:next");
      }
      function c() {
        i("click:year");
      }
      function h() {
        i("click:month");
      }
      return (
        mt(() =>
          _("div", { class: ["v-date-picker-controls"] }, [
            _(
              Ct,
              {
                class: "v-date-picker-controls__month-btn",
                disabled: n.value,
                text: e.text,
                variant: "text",
                rounded: !0,
                onClick: h,
              },
              null
            ),
            _(
              Ct,
              {
                key: "mode-btn",
                class: "v-date-picker-controls__mode-btn",
                disabled: s.value,
                density: "comfortable",
                icon: e.modeIcon,
                variant: "text",
                onClick: c,
              },
              null
            ),
            _(Ha, { key: "mode-spacer" }, null),
            _(
              "div",
              { key: "month-buttons", class: "v-date-picker-controls__month" },
              [
                _(
                  Ct,
                  {
                    disabled: o.value,
                    icon: e.prevIcon,
                    variant: "text",
                    onClick: r,
                  },
                  null
                ),
                _(
                  Ct,
                  {
                    disabled: a.value,
                    icon: e.nextIcon,
                    variant: "text",
                    onClick: l,
                  },
                  null
                ),
              ]
            ),
          ])
        ),
        {}
      );
    },
  }),
  Ih = st(
    {
      appendIcon: String,
      color: String,
      header: String,
      transition: String,
      onClick: Xo(),
    },
    "VDatePickerHeader"
  ),
  Ps = ct()({
    name: "VDatePickerHeader",
    props: Ih(),
    emits: { click: () => !0, "click:append": () => !0 },
    setup(e, t) {
      let { emit: i, slots: n } = t;
      const { backgroundColorClasses: s, backgroundColorStyles: o } = Ni(
        e,
        "color"
      );
      function a() {
        i("click");
      }
      function r() {
        i("click:append");
      }
      return (
        mt(() => {
          const l = !!(n.default || e.header),
            c = !!(n.append || e.appendIcon);
          return _(
            "div",
            {
              class: [
                "v-date-picker-header",
                { "v-date-picker-header--clickable": !!e.onClick },
                s.value,
              ],
              style: o.value,
              onClick: a,
            },
            [
              n.prepend &&
                _(
                  "div",
                  { key: "prepend", class: "v-date-picker-header__prepend" },
                  [n.prepend()]
                ),
              l &&
                _(
                  Ys,
                  { key: "content", name: e.transition },
                  {
                    default: () => {
                      var h;
                      return [
                        _(
                          "div",
                          {
                            key: e.header,
                            class: "v-date-picker-header__content",
                          },
                          [
                            ((h = n.default) == null ? void 0 : h.call(n)) ??
                              e.header,
                          ]
                        ),
                      ];
                    },
                  }
                ),
              c &&
                _("div", { class: "v-date-picker-header__append" }, [
                  n.append
                    ? _(
                        re,
                        {
                          key: "append-defaults",
                          disabled: !e.appendIcon,
                          defaults: {
                            VBtn: { icon: e.appendIcon, variant: "text" },
                          },
                        },
                        {
                          default: () => {
                            var h;
                            return [
                              (h = n.append) == null ? void 0 : h.call(n),
                            ];
                          },
                        }
                      )
                    : _(
                        Ct,
                        {
                          key: "append-btn",
                          icon: e.appendIcon,
                          variant: "text",
                          onClick: r,
                        },
                        null
                      ),
                ]),
            ]
          );
        }),
        {}
      );
    },
  }),
  Lh = st(
    {
      allowedDates: [Array, Function],
      disabled: Boolean,
      displayValue: null,
      modelValue: Array,
      month: [Number, String],
      max: null,
      min: null,
      showAdjacentMonths: Boolean,
      year: [Number, String],
      weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] },
      weeksInMonth: { type: String, default: "dynamic" },
      firstDayOfWeek: [Number, String],
    },
    "calendar"
  );
function Vh(e) {
  const t = Ae(),
    i = dt(e, "modelValue", [], (f) => _e(f)),
    n = R(() =>
      e.displayValue
        ? t.date(e.displayValue)
        : i.value.length > 0
        ? t.date(i.value[0])
        : e.min
        ? t.date(e.min)
        : Array.isArray(e.allowedDates)
        ? t.date(e.allowedDates[0])
        : t.date()
    ),
    s = dt(
      e,
      "year",
      void 0,
      (f) => {
        const p = f != null ? Number(f) : t.getYear(n.value);
        return t.startOfYear(t.setYear(t.date(), p));
      },
      (f) => t.getYear(f)
    ),
    o = dt(
      e,
      "month",
      void 0,
      (f) => {
        const p = f != null ? Number(f) : t.getMonth(n.value),
          m = t.setYear(t.startOfMonth(t.date()), t.getYear(s.value));
        return t.setMonth(m, p);
      },
      (f) => t.getMonth(f)
    ),
    a = R(() => {
      const f = Number(e.firstDayOfWeek ?? 0);
      return e.weekdays.map((p) => (p + f) % 7);
    }),
    r = R(() => {
      const f = t.getWeekArray(o.value, e.firstDayOfWeek),
        p = f.flat(),
        m = 6 * 7;
      if (e.weeksInMonth === "static" && p.length < m) {
        const g = p[p.length - 1];
        let b = [];
        for (let v = 1; v <= m - p.length; v++)
          b.push(t.addDays(g, v)), v % 7 === 0 && (f.push(b), (b = []));
      }
      return f;
    });
  function l(f, p) {
    return f
      .filter((m) => a.value.includes(t.toJsDate(m).getDay()))
      .map((m, g) => {
        const b = t.toISO(m),
          v = !t.isSameMonth(m, o.value),
          y = t.isSameDay(m, t.startOfMonth(o.value)),
          k = t.isSameDay(m, t.endOfMonth(o.value)),
          w = t.isSameDay(m, o.value);
        return {
          date: m,
          isoDate: b,
          formatted: t.format(m, "keyboardDate"),
          year: t.getYear(m),
          month: t.getMonth(m),
          isDisabled: d(m),
          isWeekStart: g % 7 === 0,
          isWeekEnd: g % 7 === 6,
          isToday: t.isSameDay(m, p),
          isAdjacent: v,
          isHidden: v && !e.showAdjacentMonths,
          isStart: y,
          isSelected: i.value.some((D) => t.isSameDay(m, D)),
          isEnd: k,
          isSame: w,
          localized: t.format(m, "dayOfMonth"),
        };
      });
  }
  const c = R(() => {
      const f = t.startOfWeek(n.value, e.firstDayOfWeek),
        p = [];
      for (let g = 0; g <= 6; g++) p.push(t.addDays(f, g));
      const m = t.date();
      return l(p, m);
    }),
    h = R(() => {
      const f = r.value.flat(),
        p = t.date();
      return l(f, p);
    }),
    u = R(() => r.value.map((f) => (f.length ? Go(t, f[0]) : null)));
  function d(f) {
    if (e.disabled) return !0;
    const p = t.date(f);
    return (e.min && t.isAfter(t.date(e.min), p)) ||
      (e.max && t.isAfter(p, t.date(e.max)))
      ? !0
      : Array.isArray(e.allowedDates) && e.allowedDates.length > 0
      ? !e.allowedDates.some((m) => t.isSameDay(t.date(m), p))
      : typeof e.allowedDates == "function"
      ? !e.allowedDates(p)
      : !1;
  }
  return {
    displayValue: n,
    daysInMonth: h,
    daysInWeek: c,
    genDays: l,
    model: i,
    weeksInMonth: r,
    weekDays: a,
    weekNumbers: u,
  };
}
const Eo = st(
    {
      color: String,
      hideWeekdays: Boolean,
      multiple: [Boolean, Number, String],
      showWeek: Boolean,
      transition: { type: String, default: "picker-transition" },
      reverseTransition: { type: String, default: "picker-reverse-transition" },
      ...Lh(),
    },
    "VDatePickerMonth"
  ),
  Cs = ct()({
    name: "VDatePickerMonth",
    props: Eo(),
    emits: {
      "update:modelValue": (e) => !0,
      "update:month": (e) => !0,
      "update:year": (e) => !0,
    },
    setup(e, t) {
      let { emit: i, slots: n } = t;
      const s = X(),
        { daysInMonth: o, model: a, weekNumbers: r } = Vh(e),
        l = Ae(),
        c = ot(),
        h = ot(),
        u = ot(!1),
        d = R(() => (u.value ? e.reverseTransition : e.transition));
      e.multiple === "range" &&
        a.value.length > 0 &&
        ((c.value = a.value[0]),
        a.value.length > 1 && (h.value = a.value[a.value.length - 1]));
      const f = R(() => {
        const b = ["number", "string"].includes(typeof e.multiple)
          ? Number(e.multiple)
          : 1 / 0;
        return a.value.length >= b;
      });
      xt(o, (b, v) => {
        v && (u.value = l.isBefore(b[0].date, v[0].date));
      });
      function p(b) {
        const v = l.startOfDay(b);
        if (
          (a.value.length === 0
            ? (c.value = void 0)
            : a.value.length === 1 &&
              ((c.value = a.value[0]), (h.value = void 0)),
          !c.value)
        )
          (c.value = v), (a.value = [c.value]);
        else if (h.value)
          (c.value = b), (h.value = void 0), (a.value = [c.value]);
        else {
          if (l.isSameDay(v, c.value)) {
            (c.value = void 0), (a.value = []);
            return;
          } else
            l.isBefore(v, c.value)
              ? ((h.value = l.endOfDay(c.value)), (c.value = v))
              : (h.value = l.endOfDay(v));
          const y = l.getDiff(h.value, c.value, "days"),
            k = [c.value];
          for (let w = 1; w < y; w++) {
            const D = l.addDays(c.value, w);
            k.push(D);
          }
          k.push(h.value), (a.value = k);
        }
      }
      function m(b) {
        const v = a.value.findIndex((y) => l.isSameDay(y, b));
        if (v === -1) a.value = [...a.value, b];
        else {
          const y = [...a.value];
          y.splice(v, 1), (a.value = y);
        }
      }
      function g(b) {
        e.multiple === "range" ? p(b) : e.multiple ? m(b) : (a.value = [b]);
      }
      return () =>
        _("div", { class: "v-date-picker-month" }, [
          e.showWeek &&
            _("div", { key: "weeks", class: "v-date-picker-month__weeks" }, [
              !e.hideWeekdays &&
                _(
                  "div",
                  { key: "hide-week-days", class: "v-date-picker-month__day" },
                  [li(" ")]
                ),
              r.value.map((b) =>
                _(
                  "div",
                  {
                    class: [
                      "v-date-picker-month__day",
                      "v-date-picker-month__day--adjacent",
                    ],
                  },
                  [b]
                )
              ),
            ]),
          _(
            Ys,
            { name: d.value },
            {
              default: () => {
                var b;
                return [
                  _(
                    "div",
                    {
                      ref: s,
                      key:
                        (b = o.value[0].date) == null ? void 0 : b.toString(),
                      class: "v-date-picker-month__days",
                    },
                    [
                      !e.hideWeekdays &&
                        l
                          .getWeekdays(e.firstDayOfWeek)
                          .map((v) =>
                            _(
                              "div",
                              {
                                class: [
                                  "v-date-picker-month__day",
                                  "v-date-picker-month__weekday",
                                ],
                              },
                              [v]
                            )
                          ),
                      o.value.map((v, y) => {
                        const k = {
                          props: { onClick: () => g(v.date) },
                          item: v,
                          i: y,
                        };
                        return (
                          f.value && !v.isSelected && (v.isDisabled = !0),
                          _(
                            "div",
                            {
                              class: [
                                "v-date-picker-month__day",
                                {
                                  "v-date-picker-month__day--adjacent":
                                    v.isAdjacent,
                                  "v-date-picker-month__day--hide-adjacent":
                                    v.isHidden,
                                  "v-date-picker-month__day--selected":
                                    v.isSelected,
                                  "v-date-picker-month__day--week-end":
                                    v.isWeekEnd,
                                  "v-date-picker-month__day--week-start":
                                    v.isWeekStart,
                                },
                              ],
                              "data-v-date": v.isDisabled ? void 0 : v.isoDate,
                            },
                            [
                              (e.showAdjacentMonths || !v.isAdjacent) &&
                                _(
                                  re,
                                  {
                                    defaults: {
                                      VBtn: {
                                        class: "v-date-picker-month__day-btn",
                                        color:
                                          (v.isSelected || v.isToday) &&
                                          !v.isDisabled
                                            ? e.color
                                            : void 0,
                                        disabled: v.isDisabled,
                                        icon: !0,
                                        ripple: !1,
                                        text: v.localized,
                                        variant: v.isDisabled
                                          ? v.isToday
                                            ? "outlined"
                                            : "text"
                                          : v.isToday && !v.isSelected
                                          ? "outlined"
                                          : "flat",
                                        onClick: () => g(v.date),
                                      },
                                    },
                                  },
                                  {
                                    default: () => {
                                      var w;
                                      return [
                                        ((w = n.day) == null
                                          ? void 0
                                          : w.call(n, k)) ??
                                          _(Ct, k.props, null),
                                      ];
                                    },
                                  }
                                ),
                            ]
                          )
                        );
                      }),
                    ]
                  ),
                ];
              },
            }
          ),
        ]);
    },
  }),
  zo = st(
    {
      color: String,
      height: [String, Number],
      min: null,
      max: null,
      modelValue: Number,
      year: Number,
    },
    "VDatePickerMonths"
  ),
  Os = ct()({
    name: "VDatePickerMonths",
    props: zo(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { emit: i, slots: n } = t;
      const s = Ae(),
        o = dt(e, "modelValue"),
        a = R(() => {
          let r = s.startOfYear(s.date());
          return (
            e.year && (r = s.setYear(r, e.year)),
            Es(12).map((l) => {
              const c = s.format(r, "monthShort"),
                h = !!(
                  (e.min && s.isAfter(s.startOfMonth(s.date(e.min)), r)) ||
                  (e.max && s.isAfter(r, s.startOfMonth(s.date(e.max))))
                );
              return (
                (r = s.getNextMonth(r)), { isDisabled: h, text: c, value: l }
              );
            })
          );
        });
      return (
        Ze(() => {
          o.value = o.value ?? s.getMonth(s.date());
        }),
        mt(() =>
          _(
            "div",
            { class: "v-date-picker-months", style: { height: Zt(e.height) } },
            [
              _("div", { class: "v-date-picker-months__content" }, [
                a.value.map((r, l) => {
                  var u;
                  const c = {
                    active: o.value === l,
                    color: o.value === l ? e.color : void 0,
                    disabled: r.isDisabled,
                    rounded: !0,
                    text: r.text,
                    variant: o.value === r.value ? "flat" : "text",
                    onClick: () => h(l),
                  };
                  function h(d) {
                    if (o.value === d) {
                      i("update:modelValue", o.value);
                      return;
                    }
                    o.value = d;
                  }
                  return (
                    ((u = n.month) == null
                      ? void 0
                      : u.call(n, { month: r, i: l, props: c })) ??
                    _(Ct, G({ key: "month" }, c), null)
                  );
                }),
              ]),
            ]
          )
        ),
        {}
      );
    },
  }),
  Bo = st(
    {
      color: String,
      height: [String, Number],
      min: null,
      max: null,
      modelValue: Number,
    },
    "VDatePickerYears"
  ),
  Ts = ct()({
    name: "VDatePickerYears",
    props: Bo(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { emit: i, slots: n } = t;
      const s = Ae(),
        o = dt(e, "modelValue"),
        a = R(() => {
          const l = s.getYear(s.date());
          let c = l - 100,
            h = l + 52;
          e.min && (c = s.getYear(s.date(e.min))),
            e.max && (h = s.getYear(s.date(e.max)));
          let u = s.startOfYear(s.date());
          return (
            (u = s.setYear(u, c)),
            Es(h - c + 1, c).map((d) => {
              const f = s.format(u, "year");
              return (
                (u = s.setYear(u, s.getYear(u) + 1)), { text: f, value: d }
              );
            })
          );
        });
      Ze(() => {
        o.value = o.value ?? s.getYear(s.date());
      });
      const r = Qo();
      return (
        ri(async () => {
          var l;
          await Te(),
            (l = r.el) == null || l.scrollIntoView({ block: "center" });
        }),
        mt(() =>
          _(
            "div",
            { class: "v-date-picker-years", style: { height: Zt(e.height) } },
            [
              _("div", { class: "v-date-picker-years__content" }, [
                a.value.map((l, c) => {
                  var u;
                  const h = {
                    ref: o.value === l.value ? r : void 0,
                    active: o.value === l.value,
                    color: o.value === l.value ? e.color : void 0,
                    rounded: !0,
                    text: l.text,
                    variant: o.value === l.value ? "flat" : "text",
                    onClick: () => {
                      if (o.value === l.value) {
                        i("update:modelValue", o.value);
                        return;
                      }
                      o.value = l.value;
                    },
                  };
                  return (
                    ((u = n.year) == null
                      ? void 0
                      : u.call(n, { year: l, i: c, props: h })) ??
                    _(Ct, G({ key: "month" }, h), null)
                  );
                }),
              ]),
            ]
          )
        ),
        {}
      );
    },
  }),
  Rh = $s("v-picker-title"),
  Ho = st(
    {
      color: String,
      ...va(),
      ...Hi(),
      ...zs(),
      ..._a(),
      ...xa(),
      ...ya(),
      ...ka(),
      ...Zo(),
      ...Jo(),
    },
    "VSheet"
  ),
  As = ct()({
    name: "VSheet",
    props: Ho(),
    setup(e, t) {
      let { slots: i } = t;
      const { themeClasses: n } = ta(e),
        { backgroundColorClasses: s, backgroundColorStyles: o } = Ni(
          Wi(e, "color")
        ),
        { borderClasses: a } = wa(e),
        { dimensionStyles: r } = Bs(e),
        { elevationClasses: l } = Sa(e),
        { locationStyles: c } = Ma(e),
        { positionClasses: h } = Da(e),
        { roundedClasses: u } = Pa(e);
      return (
        mt(() =>
          _(
            e.tag,
            {
              class: [
                "v-sheet",
                n.value,
                s.value,
                a.value,
                l.value,
                h.value,
                u.value,
                e.class,
              ],
              style: [o.value, r.value, c.value, e.style],
            },
            i
          )
        ),
        {}
      );
    },
  }),
  Wo = st(
    {
      bgColor: String,
      landscape: Boolean,
      title: String,
      hideHeader: Boolean,
      ...Ho(),
    },
    "VPicker"
  ),
  Is = ct()({
    name: "VPicker",
    props: Wo(),
    setup(e, t) {
      let { slots: i } = t;
      const { backgroundColorClasses: n, backgroundColorStyles: s } = Ni(
        Wi(e, "color")
      );
      return (
        mt(() => {
          const o = As.filterProps(e),
            a = !!(e.title || i.title);
          return _(
            As,
            G(o, {
              color: e.bgColor,
              class: [
                "v-picker",
                {
                  "v-picker--landscape": e.landscape,
                  "v-picker--with-actions": !!i.actions,
                },
                e.class,
              ],
              style: e.style,
            }),
            {
              default: () => {
                var r;
                return [
                  !e.hideHeader &&
                    _(
                      "div",
                      { key: "header", class: [n.value], style: [s.value] },
                      [
                        a &&
                          _(
                            Rh,
                            { key: "picker-title" },
                            {
                              default: () => {
                                var l;
                                return [
                                  ((l = i.title) == null
                                    ? void 0
                                    : l.call(i)) ?? e.title,
                                ];
                              },
                            }
                          ),
                        i.header &&
                          _("div", { class: "v-picker__header" }, [i.header()]),
                      ]
                    ),
                  _("div", { class: "v-picker__body" }, [
                    (r = i.default) == null ? void 0 : r.call(i),
                  ]),
                  i.actions &&
                    _(
                      re,
                      { defaults: { VBtn: { slim: !0, variant: "text" } } },
                      {
                        default: () => [
                          _("div", { class: "v-picker__actions" }, [
                            i.actions(),
                          ]),
                        ],
                      }
                    ),
                ];
              },
            }
          );
        }),
        {}
      );
    },
  }),
  Fh = st(
    {
      header: { type: String, default: "$vuetify.datePicker.header" },
      ...Fo(),
      ...Eo({ weeksInMonth: "static" }),
      ...Kt(zo(), ["modelValue"]),
      ...Kt(Bo(), ["modelValue"]),
      ...Wo({ title: "$vuetify.datePicker.title" }),
      modelValue: null,
    },
    "VDatePicker"
  ),
  Ls = ct()({
    name: "VDatePicker",
    props: Fh(),
    emits: {
      "update:modelValue": (e) => !0,
      "update:month": (e) => !0,
      "update:year": (e) => !0,
      "update:viewMode": (e) => !0,
    },
    setup(e, t) {
      let { emit: i, slots: n } = t;
      const s = Ae(),
        { t: o } = Hs(),
        a = dt(
          e,
          "modelValue",
          void 0,
          (S) => _e(S),
          (S) => (e.multiple ? S : S[0])
        ),
        r = dt(e, "viewMode"),
        l = R(() => {
          var O;
          const S = s.date((O = a.value) == null ? void 0 : O[0]);
          return S && s.isValid(S) ? S : s.date();
        }),
        c = X(Number(e.month ?? s.getMonth(s.startOfMonth(l.value)))),
        h = X(
          Number(
            e.year ?? s.getYear(s.startOfYear(s.setMonth(l.value, c.value)))
          )
        ),
        u = ot(!1),
        d = R(() =>
          e.multiple && a.value.length > 1
            ? o("$vuetify.datePicker.itemsSelected", a.value.length)
            : a.value[0] && s.isValid(a.value[0])
            ? s.format(s.date(a.value[0]), "normalDateWithWeekday")
            : o(e.header)
        ),
        f = R(() => {
          let S = s.date();
          return (
            (S = s.setDate(S, 1)),
            (S = s.setMonth(S, c.value)),
            (S = s.setYear(S, h.value)),
            s.format(S, "monthAndYear")
          );
        }),
        p = R(
          () => `date-picker-header${u.value ? "-reverse" : ""}-transition`
        ),
        m = R(() => {
          const S = s.date(e.min);
          return e.min && s.isValid(S) ? S : null;
        }),
        g = R(() => {
          const S = s.date(e.max);
          return e.max && s.isValid(S) ? S : null;
        }),
        b = R(() => {
          if (e.disabled) return !0;
          const S = [];
          if (r.value !== "month") S.push("prev", "next");
          else {
            let O = s.date();
            if (
              ((O = s.setYear(O, h.value)),
              (O = s.setMonth(O, c.value)),
              m.value)
            ) {
              const T = s.addDays(s.startOfMonth(O), -1);
              s.isAfter(m.value, T) && S.push("prev");
            }
            if (g.value) {
              const T = s.addDays(s.endOfMonth(O), 1);
              s.isAfter(T, g.value) && S.push("next");
            }
          }
          return S;
        });
      function v() {
        c.value < 11 ? c.value++ : (h.value++, (c.value = 0), P(h.value)),
          M(c.value);
      }
      function y() {
        c.value > 0 ? c.value-- : (h.value--, (c.value = 11), P(h.value)),
          M(c.value);
      }
      function k() {
        r.value = "month";
      }
      function w() {
        r.value = r.value === "months" ? "month" : "months";
      }
      function D() {
        r.value = r.value === "year" ? "month" : "year";
      }
      function M(S) {
        r.value === "months" && w(), i("update:month", S);
      }
      function P(S) {
        r.value === "year" && D(), i("update:year", S);
      }
      return (
        xt(a, (S, O) => {
          const T = _e(O),
            A = _e(S);
          if (!A.length) return;
          const W = s.date(T[T.length - 1]),
            K = s.date(A[A.length - 1]),
            V = s.getMonth(K),
            I = s.getYear(K);
          V !== c.value && ((c.value = V), M(c.value)),
            I !== h.value && ((h.value = I), P(h.value)),
            (u.value = s.isBefore(W, K));
        }),
        mt(() => {
          const S = Is.filterProps(e),
            O = Ds.filterProps(e),
            T = Ps.filterProps(e),
            A = Cs.filterProps(e),
            W = Kt(Os.filterProps(e), ["modelValue"]),
            K = Kt(Ts.filterProps(e), ["modelValue"]),
            V = { header: d.value, transition: p.value };
          return _(
            Is,
            G(S, {
              class: [
                "v-date-picker",
                `v-date-picker--${r.value}`,
                { "v-date-picker--show-week": e.showWeek },
                e.class,
              ],
              style: e.style,
            }),
            {
              title: () => {
                var I;
                return (
                  ((I = n.title) == null ? void 0 : I.call(n)) ??
                  _("div", { class: "v-date-picker__title" }, [o(e.title)])
                );
              },
              header: () =>
                n.header
                  ? _(
                      re,
                      { defaults: { VDatePickerHeader: { ...V } } },
                      {
                        default: () => {
                          var I;
                          return [
                            (I = n.header) == null ? void 0 : I.call(n, V),
                          ];
                        },
                      }
                    )
                  : _(
                      Ps,
                      G({ key: "header" }, T, V, {
                        onClick: r.value !== "month" ? k : void 0,
                      }),
                      { ...n, default: void 0 }
                    ),
              default: () =>
                _(ee, null, [
                  _(
                    Ds,
                    G(O, {
                      disabled: b.value,
                      text: f.value,
                      "onClick:next": v,
                      "onClick:prev": y,
                      "onClick:month": w,
                      "onClick:year": D,
                    }),
                    null
                  ),
                  _(
                    ba,
                    { hideOnLeave: !0 },
                    {
                      default: () => [
                        r.value === "months"
                          ? _(
                              Os,
                              G({ key: "date-picker-months" }, W, {
                                modelValue: c.value,
                                "onUpdate:modelValue": [
                                  (I) => (c.value = I),
                                  M,
                                ],
                                min: m.value,
                                max: g.value,
                                year: h.value,
                              }),
                              null
                            )
                          : r.value === "year"
                          ? _(
                              Ts,
                              G({ key: "date-picker-years" }, K, {
                                modelValue: h.value,
                                "onUpdate:modelValue": [
                                  (I) => (h.value = I),
                                  P,
                                ],
                                min: m.value,
                                max: g.value,
                              }),
                              null
                            )
                          : _(
                              Cs,
                              G({ key: "date-picker-month" }, A, {
                                modelValue: a.value,
                                "onUpdate:modelValue": (I) => (a.value = I),
                                month: c.value,
                                "onUpdate:month": [(I) => (c.value = I), M],
                                year: h.value,
                                "onUpdate:year": [(I) => (h.value = I), P],
                                min: m.value,
                                max: g.value,
                              }),
                              null
                            ),
                      ],
                    }
                  ),
                ]),
              actions: n.actions,
            }
          );
        }),
        {}
      );
    },
  }),
  Eh = {
    data() {
      return { isOpen: !1, fromDate: null, toDate: null };
    },
    computed: {
      formattedFromDate() {
        return this.formatDate(this.fromDate);
      },
      formattedToDate() {
        return this.formatDate(this.toDate);
      },
    },
    watch: {
      fromDate() {
        this.checkDates();
      },
      toDate() {
        this.checkDates();
      },
    },
    methods: {
      togglePanel() {
        (this.isOpen = !this.isOpen),
          this.fromDate &&
            this.toDate &&
            ((this.fromDate = null), (this.toDate = null));
      },
      disabledPastDates(e) {
        return e >= new Date(this.fromDate);
      },
      checkDates() {
        this.fromDate && this.toDate && ((this.isOpen = !1), this.emitDates());
      },
      formatDate(e) {
        return e ? new Date(e).toISOString().split("T")[0] : null;
      },
      emitDates() {
        this.$emit("date-range-selected", {
          fromDate: this.formattedFromDate,
          toDate: this.formattedToDate,
        });
      },
    },
  },
  zh = { key: 0 },
  Bh = { key: 1 };
function Hh(e, t, i, n, s, o) {
  return (
    bt(),
    te("div", null, [
      _(
        se,
        { class: "mt-2" },
        {
          default: Z(() => [
            _(
              Ct,
              {
                onClick: o.togglePanel,
                class: "w-100 d-flex",
                "append-icon": "mdi-calendar",
              },
              {
                default: Z(() => [
                  o.formattedFromDate && o.formattedToDate
                    ? (bt(),
                      te(
                        "span",
                        zh,
                        an(o.formattedFromDate) + " - " + an(o.formattedToDate),
                        1
                      ))
                    : (bt(), te("span", Bh, "Select Date Range")),
                ]),
                _: 1,
              },
              8,
              ["onClick"]
            ),
          ]),
          _: 1,
        }
      ),
      _(
        ia,
        { name: "fade" },
        {
          default: Z(() => [
            s.isOpen
              ? (bt(),
                Se(
                  se,
                  { key: 0, class: "panel-content" },
                  {
                    default: Z(() => [
                      _(It, null, {
                        default: Z(() => [
                          _(
                            Ls,
                            {
                              "first-day-of-week": 1,
                              "hide-header": "",
                              modelValue: s.fromDate,
                              "onUpdate:modelValue":
                                t[0] || (t[0] = (a) => (s.fromDate = a)),
                              "show-adjacent-months": "",
                              width: "300",
                            },
                            null,
                            8,
                            ["modelValue"]
                          ),
                        ]),
                        _: 1,
                      }),
                      _(It, null, {
                        default: Z(() => [
                          _(
                            Ls,
                            {
                              "first-day-of-week": 1,
                              "hide-header": "",
                              modelValue: s.toDate,
                              "onUpdate:modelValue":
                                t[1] || (t[1] = (a) => (s.toDate = a)),
                              "allowed-dates": o.disabledPastDates,
                              "show-adjacent-months": "",
                              width: "300",
                            },
                            null,
                            8,
                            ["modelValue", "allowed-dates"]
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ))
              : ea("", !0),
          ]),
          _: 1,
        }
      ),
    ])
  );
}
const Wh = ci(Eh, [
    ["render", Hh],
    ["__scopeId", "data-v-d56841ac"],
  ]),
  Nh = st(
    {
      indeterminate: Boolean,
      indeterminateIcon: { type: ve, default: "$checkboxIndeterminate" },
      ...za({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }),
    },
    "VCheckboxBtn"
  ),
  jh = ct()({
    name: "VCheckboxBtn",
    props: Nh(),
    emits: {
      "update:modelValue": (e) => !0,
      "update:indeterminate": (e) => !0,
    },
    setup(e, t) {
      let { slots: i } = t;
      const n = dt(e, "indeterminate"),
        s = dt(e, "modelValue");
      function o(l) {
        n.value && (n.value = !1);
      }
      const a = R(() => (n.value ? e.indeterminateIcon : e.falseIcon)),
        r = R(() => (n.value ? e.indeterminateIcon : e.trueIcon));
      return (
        mt(() => {
          const l = Kt(mn.filterProps(e), ["modelValue"]);
          return _(
            mn,
            G(l, {
              modelValue: s.value,
              "onUpdate:modelValue": [(c) => (s.value = c), o],
              class: ["v-checkbox-btn", e.class],
              style: e.style,
              type: "checkbox",
              falseIcon: a.value,
              trueIcon: r.value,
              "aria-checked": n.value ? "mixed" : void 0,
            }),
            i
          );
        }),
        {}
      );
    },
  }),
  $h = st(
    {
      id: String,
      submenu: Boolean,
      ...Kt(
        Ra({
          closeDelay: 250,
          closeOnContentClick: !0,
          locationStrategy: "connected",
          location: void 0,
          openDelay: 300,
          scrim: !1,
          scrollStrategy: "reposition",
          transition: { component: Ks },
        }),
        ["absolute"]
      ),
    },
    "VMenu"
  ),
  Yh = ct()({
    name: "VMenu",
    props: $h(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: i } = t;
      const n = dt(e, "modelValue"),
        { scopeId: s } = Ea(),
        { isRtl: o } = na(),
        a = sa(),
        r = R(() => e.id || `v-menu-${a}`),
        l = X(),
        c = oa(fn, null),
        h = ot(new Set());
      aa(fn, {
        register() {
          h.value.add(a);
        },
        unregister() {
          h.value.delete(a);
        },
        closeParents(g) {
          setTimeout(() => {
            var b;
            !h.value.size &&
              !e.persistent &&
              (g == null ||
                ((b = l.value) != null &&
                  b.contentEl &&
                  !ra(g, l.value.contentEl))) &&
              ((n.value = !1), c == null || c.closeParents());
          }, 40);
        },
      }),
        la(() => (c == null ? void 0 : c.unregister())),
        ca(() => (n.value = !1));
      async function u(g) {
        var y, k, w;
        const b = g.relatedTarget,
          v = g.target;
        await Te(),
          n.value &&
            b !== v &&
            (y = l.value) != null &&
            y.contentEl &&
            (k = l.value) != null &&
            k.globalTop &&
            ![document, l.value.contentEl].includes(v) &&
            !l.value.contentEl.contains(v) &&
            ((w = rn(l.value.contentEl)[0]) == null || w.focus());
      }
      xt(n, (g) => {
        g
          ? (c == null || c.register(),
            document.addEventListener("focusin", u, { once: !0 }))
          : (c == null || c.unregister(),
            document.removeEventListener("focusin", u));
      });
      function d(g) {
        c == null || c.closeParents(g);
      }
      function f(g) {
        var b, v, y, k, w;
        if (!e.disabled)
          if (
            g.key === "Tab" ||
            (g.key === "Enter" && !e.closeOnContentClick)
          ) {
            if (
              g.key === "Enter" &&
              (g.target instanceof HTMLTextAreaElement ||
                (g.target instanceof HTMLInputElement &&
                  g.target.closest("form")))
            )
              return;
            g.key === "Enter" && g.preventDefault(),
              ha(
                rn((b = l.value) == null ? void 0 : b.contentEl, !1),
                g.shiftKey ? "prev" : "next",
                (M) => M.tabIndex >= 0
              ) ||
                ((n.value = !1),
                (y = (v = l.value) == null ? void 0 : v.activatorEl) == null ||
                  y.focus());
          } else
            e.submenu &&
              g.key === (o.value ? "ArrowRight" : "ArrowLeft") &&
              ((n.value = !1),
              (w = (k = l.value) == null ? void 0 : k.activatorEl) == null ||
                w.focus());
      }
      function p(g) {
        var v;
        if (e.disabled) return;
        const b = (v = l.value) == null ? void 0 : v.contentEl;
        b && n.value
          ? g.key === "ArrowDown"
            ? (g.preventDefault(), g.stopImmediatePropagation(), fi(b, "next"))
            : g.key === "ArrowUp"
            ? (g.preventDefault(), g.stopImmediatePropagation(), fi(b, "prev"))
            : e.submenu &&
              (g.key === (o.value ? "ArrowRight" : "ArrowLeft")
                ? (n.value = !1)
                : g.key === (o.value ? "ArrowLeft" : "ArrowRight") &&
                  (g.preventDefault(), fi(b, "first")))
          : (e.submenu
              ? g.key === (o.value ? "ArrowLeft" : "ArrowRight")
              : ["ArrowDown", "ArrowUp"].includes(g.key)) &&
            ((n.value = !0),
            g.preventDefault(),
            setTimeout(() => setTimeout(() => p(g))));
      }
      const m = R(() =>
        G(
          {
            "aria-haspopup": "menu",
            "aria-expanded": String(n.value),
            "aria-owns": r.value,
            onKeydown: p,
          },
          e.activatorProps
        )
      );
      return (
        mt(() => {
          const g = gn.filterProps(e);
          return _(
            gn,
            G(
              {
                ref: l,
                id: r.value,
                class: ["v-menu", e.class],
                style: e.style,
              },
              g,
              {
                modelValue: n.value,
                "onUpdate:modelValue": (b) => (n.value = b),
                absolute: !0,
                activatorProps: m.value,
                location: e.location ?? (e.submenu ? "end" : "bottom"),
                "onClick:outside": d,
                onKeydown: f,
              },
              s
            ),
            {
              activator: i.activator,
              default: function () {
                for (
                  var b = arguments.length, v = new Array(b), y = 0;
                  y < b;
                  y++
                )
                  v[y] = arguments[y];
                return _(
                  re,
                  { root: "VMenu" },
                  {
                    default: () => {
                      var k;
                      return [
                        (k = i.default) == null ? void 0 : k.call(i, ...v),
                      ];
                    },
                  }
                );
              },
            }
          );
        }),
        Us({ id: r, ΨopenChildren: h }, l)
      );
    },
  }),
  Uh = st({ renderless: Boolean, ...Hi() }, "VVirtualScrollItem"),
  Kh = ct()({
    name: "VVirtualScrollItem",
    inheritAttrs: !1,
    props: Uh(),
    emits: { "update:height": (e) => !0 },
    setup(e, t) {
      let { attrs: i, emit: n, slots: s } = t;
      const { resizeRef: o, contentRect: a } = Ws(void 0, "border");
      xt(
        () => {
          var r;
          return (r = a.value) == null ? void 0 : r.height;
        },
        (r) => {
          r != null && n("update:height", r);
        }
      ),
        mt(() => {
          var r, l;
          return e.renderless
            ? _(ee, null, [
                (r = s.default) == null ? void 0 : r.call(s, { itemRef: o }),
              ])
            : _(
                "div",
                G(
                  {
                    ref: o,
                    class: ["v-virtual-scroll__item", e.class],
                    style: e.style,
                  },
                  i
                ),
                [(l = s.default) == null ? void 0 : l.call(s)]
              );
        });
    },
  }),
  qh = -1,
  Xh = 1,
  Pi = 100,
  Gh = st(
    {
      itemHeight: { type: [Number, String], default: null },
      height: [Number, String],
    },
    "virtual"
  );
function Qh(e, t) {
  const i = ua(),
    n = ot(0);
  Ze(() => {
    n.value = parseFloat(e.itemHeight || 0);
  });
  const s = ot(0),
    o = ot(
      Math.ceil((parseInt(e.height) || i.height.value) / (n.value || 16)) || 1
    ),
    a = ot(0),
    r = ot(0),
    l = X(),
    c = X();
  let h = 0;
  const { resizeRef: u, contentRect: d } = Ws();
  Ze(() => {
    u.value = l.value;
  });
  const f = R(() => {
      var x;
      return l.value === document.documentElement
        ? i.height.value
        : ((x = d.value) == null ? void 0 : x.height) ||
            parseInt(e.height) ||
            0;
    }),
    p = R(() => !!(l.value && c.value && f.value && n.value));
  let m = Array.from({ length: t.value.length }),
    g = Array.from({ length: t.value.length });
  const b = ot(0);
  let v = -1;
  function y(x) {
    return m[x] || n.value;
  }
  const k = da(() => {
      const x = performance.now();
      g[0] = 0;
      const C = t.value.length;
      for (let z = 1; z <= C - 1; z++) g[z] = (g[z - 1] || 0) + y(z - 1);
      b.value = Math.max(b.value, performance.now() - x);
    }, b),
    w = xt(p, (x) => {
      x &&
        (w(),
        (h = c.value.offsetTop),
        k.immediate(),
        V(),
        ~v &&
          Te(() => {
            Ti &&
              window.requestAnimationFrame(() => {
                J(v), (v = -1);
              });
          }));
    });
  Ns(() => {
    k.clear();
  });
  function D(x, C) {
    const z = m[x],
      N = n.value;
    (n.value = N ? Math.min(n.value, C) : C),
      (z !== C || N !== n.value) && ((m[x] = C), k());
  }
  function M(x) {
    return (x = gi(x, 0, t.value.length - 1)), g[x] || 0;
  }
  function P(x) {
    return Zh(g, x);
  }
  let S = 0,
    O = 0,
    T = 0;
  xt(f, (x, C) => {
    C &&
      (V(),
      x < C &&
        requestAnimationFrame(() => {
          (O = 0), V();
        }));
  });
  function A() {
    if (!l.value || !c.value) return;
    const x = l.value.scrollTop,
      C = performance.now();
    C - T > 500
      ? ((O = Math.sign(x - S)), (h = c.value.offsetTop))
      : (O = x - S),
      (S = x),
      (T = C),
      V();
  }
  function W() {
    !l.value || !c.value || ((O = 0), (T = 0), V());
  }
  let K = -1;
  function V() {
    cancelAnimationFrame(K), (K = requestAnimationFrame(I));
  }
  function I() {
    if (!l.value || !f.value) return;
    const x = S - h,
      C = Math.sign(O),
      z = Math.max(0, x - Pi),
      N = gi(P(z), 0, t.value.length),
      tt = x + f.value + Pi,
      L = gi(P(tt) + 1, N + 1, t.value.length);
    if ((C !== qh || N < s.value) && (C !== Xh || L > o.value)) {
      const U = M(s.value) - M(N),
        Y = M(L) - M(o.value);
      Math.max(U, Y) > Pi
        ? ((s.value = N), (o.value = L))
        : (N <= 0 && (s.value = N), L >= t.value.length && (o.value = L));
    }
    (a.value = M(s.value)), (r.value = M(t.value.length) - M(o.value));
  }
  function J(x) {
    const C = M(x);
    !l.value || (x && !C) ? (v = x) : (l.value.scrollTop = C);
  }
  const Ot = R(() =>
    t.value
      .slice(s.value, o.value)
      .map((x, C) => ({ raw: x, index: C + s.value }))
  );
  return (
    xt(
      t,
      () => {
        (m = Array.from({ length: t.value.length })),
          (g = Array.from({ length: t.value.length })),
          k.immediate(),
          V();
      },
      { deep: !0 }
    ),
    {
      calculateVisibleItems: V,
      containerRef: l,
      markerRef: c,
      computedItems: Ot,
      paddingTop: a,
      paddingBottom: r,
      scrollToIndex: J,
      handleScroll: A,
      handleScrollend: W,
      handleItemResize: D,
    }
  );
}
function Zh(e, t) {
  let i = e.length - 1,
    n = 0,
    s = 0,
    o = null,
    a = -1;
  if (e[i] < t) return i;
  for (; n <= i; )
    if (((s = (n + i) >> 1), (o = e[s]), o > t)) i = s - 1;
    else if (o < t) (a = s), (n = s + 1);
    else return o === t ? s : n;
  return a;
}
const Jh = st(
    {
      items: { type: Array, default: () => [] },
      renderless: Boolean,
      ...Gh(),
      ...Hi(),
      ...zs(),
    },
    "VVirtualScroll"
  ),
  tu = ct()({
    name: "VVirtualScroll",
    props: Jh(),
    setup(e, t) {
      let { slots: i } = t;
      const n = fa("VVirtualScroll"),
        { dimensionStyles: s } = Bs(e),
        {
          calculateVisibleItems: o,
          containerRef: a,
          markerRef: r,
          handleScroll: l,
          handleScrollend: c,
          handleItemResize: h,
          scrollToIndex: u,
          paddingTop: d,
          paddingBottom: f,
          computedItems: p,
        } = Qh(e, Wi(e, "items"));
      return (
        ga(
          () => e.renderless,
          () => {
            function m() {
              var v, y;
              const b = (
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : !1
              )
                ? "addEventListener"
                : "removeEventListener";
              a.value === document.documentElement
                ? (document[b]("scroll", l, { passive: !0 }),
                  document[b]("scrollend", c))
                : ((v = a.value) == null || v[b]("scroll", l, { passive: !0 }),
                  (y = a.value) == null || y[b]("scrollend", c));
            }
            ri(() => {
              (a.value = Fa(n.vnode.el, !0)), m(!0);
            }),
              Ns(m);
          }
        ),
        mt(() => {
          const m = p.value.map((g) =>
            _(
              Kh,
              {
                key: g.index,
                renderless: e.renderless,
                "onUpdate:height": (b) => h(g.index, b),
              },
              {
                default: (b) => {
                  var v;
                  return (v = i.default) == null
                    ? void 0
                    : v.call(i, { item: g.raw, index: g.index, ...b });
                },
              }
            )
          );
          return e.renderless
            ? _(ee, null, [
                _(
                  "div",
                  {
                    ref: r,
                    class: "v-virtual-scroll__spacer",
                    style: { paddingTop: Zt(d.value) },
                  },
                  null
                ),
                m,
                _(
                  "div",
                  {
                    class: "v-virtual-scroll__spacer",
                    style: { paddingBottom: Zt(f.value) },
                  },
                  null
                ),
              ])
            : _(
                "div",
                {
                  ref: a,
                  class: ["v-virtual-scroll", e.class],
                  onScrollPassive: l,
                  onScrollend: c,
                  style: [s.value, e.style],
                },
                [
                  _(
                    "div",
                    {
                      ref: r,
                      class: "v-virtual-scroll__container",
                      style: {
                        paddingTop: Zt(d.value),
                        paddingBottom: Zt(f.value),
                      },
                    },
                    [m]
                  ),
                ]
              );
        }),
        { calculateVisibleItems: o, scrollToIndex: u }
      );
    },
  });
function eu(e, t) {
  const i = ot(!1);
  let n;
  function s(r) {
    cancelAnimationFrame(n),
      (i.value = !0),
      (n = requestAnimationFrame(() => {
        n = requestAnimationFrame(() => {
          i.value = !1;
        });
      }));
  }
  async function o() {
    await new Promise((r) => requestAnimationFrame(r)),
      await new Promise((r) => requestAnimationFrame(r)),
      await new Promise((r) => requestAnimationFrame(r)),
      await new Promise((r) => {
        if (i.value) {
          const l = xt(i, () => {
            l(), r();
          });
        } else r();
      });
  }
  async function a(r) {
    var h, u;
    if (
      (r.key === "Tab" && ((h = t.value) == null || h.focus()),
      !["PageDown", "PageUp", "Home", "End"].includes(r.key))
    )
      return;
    const l = (u = e.value) == null ? void 0 : u.$el;
    if (!l) return;
    (r.key === "Home" || r.key === "End") &&
      l.scrollTo({
        top: r.key === "Home" ? 0 : l.scrollHeight,
        behavior: "smooth",
      }),
      await o();
    const c = l.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (r.key === "PageDown" || r.key === "Home") {
      const d = l.getBoundingClientRect().top;
      for (const f of c)
        if (f.getBoundingClientRect().top >= d) {
          f.focus();
          break;
        }
    } else {
      const d = l.getBoundingClientRect().bottom;
      for (const f of [...c].reverse())
        if (f.getBoundingClientRect().bottom <= d) {
          f.focus();
          break;
        }
    }
  }
  return { onScrollPassive: s, onKeydown: a };
}
const iu = st(
    {
      chips: Boolean,
      closableChips: Boolean,
      closeText: { type: String, default: "$vuetify.close" },
      openText: { type: String, default: "$vuetify.open" },
      eager: Boolean,
      hideNoData: Boolean,
      hideSelected: Boolean,
      listProps: { type: Object },
      menu: Boolean,
      menuIcon: { type: ve, default: "$dropdown" },
      menuProps: { type: Object },
      multiple: Boolean,
      noDataText: { type: String, default: "$vuetify.noDataText" },
      openOnClear: Boolean,
      itemColor: String,
      ...Ia({ itemChildren: !1 }),
    },
    "Select"
  ),
  nu = st(
    {
      ...iu(),
      ...Kt(Ta({ modelValue: null, role: "combobox" }), [
        "validationValue",
        "dirty",
        "appendInnerIcon",
      ]),
      ...Ca({ transition: { component: Ks } }),
    },
    "VSelect"
  ),
  Vs = ct()({
    name: "VSelect",
    props: nu(),
    emits: {
      "update:focused": (e) => !0,
      "update:modelValue": (e) => !0,
      "update:menu": (e) => !0,
    },
    setup(e, t) {
      let { slots: i } = t;
      const { t: n } = Hs(),
        s = X(),
        o = X(),
        a = X(),
        r = dt(e, "menu"),
        l = R({
          get: () => r.value,
          set: (x) => {
            var C;
            (r.value && !x && (C = o.value) != null && C.ΨopenChildren.size) ||
              (r.value = x);
          },
        }),
        { items: c, transformIn: h, transformOut: u } = La(e),
        d = dt(
          e,
          "modelValue",
          [],
          (x) => h(x === null ? [null] : _e(x)),
          (x) => {
            const C = u(x);
            return e.multiple ? C : C[0] ?? null;
          }
        ),
        f = R(() =>
          typeof e.counterValue == "function"
            ? e.counterValue(d.value)
            : typeof e.counterValue == "number"
            ? e.counterValue
            : d.value.length
        ),
        p = Aa(),
        m = R(() => d.value.map((x) => x.value)),
        g = ot(!1),
        b = R(() => (l.value ? e.closeText : e.openText));
      let v = "",
        y;
      const k = R(() =>
          e.hideSelected
            ? c.value.filter(
                (x) => !d.value.some((C) => e.valueComparator(C, x))
              )
            : c.value
        ),
        w = R(
          () =>
            (e.hideNoData && !k.value.length) ||
            e.readonly ||
            (p == null ? void 0 : p.isReadonly.value)
        ),
        D = R(() => {
          var x;
          return {
            ...e.menuProps,
            activatorProps: {
              ...(((x = e.menuProps) == null ? void 0 : x.activatorProps) ||
                {}),
              "aria-haspopup": "listbox",
            },
          };
        }),
        M = X(),
        P = eu(M, s);
      function S(x) {
        e.openOnClear && (l.value = !0);
      }
      function O() {
        w.value || (l.value = !l.value);
      }
      function T(x) {
        ln(x) && A(x);
      }
      function A(x) {
        var tt, L;
        if (!x.key || e.readonly || (p != null && p.isReadonly.value)) return;
        ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(x.key) &&
          x.preventDefault(),
          ["Enter", "ArrowDown", " "].includes(x.key) && (l.value = !0),
          ["Escape", "Tab"].includes(x.key) && (l.value = !1),
          x.key === "Home"
            ? (tt = M.value) == null || tt.focus("first")
            : x.key === "End" && ((L = M.value) == null || L.focus("last"));
        const C = 1e3;
        if (e.multiple || !ln(x)) return;
        const z = performance.now();
        z - y > C && (v = ""), (v += x.key.toLowerCase()), (y = z);
        const N = c.value.find((U) => U.title.toLowerCase().startsWith(v));
        if (N !== void 0) {
          d.value = [N];
          const U = k.value.indexOf(N);
          Ti &&
            window.requestAnimationFrame(() => {
              var Y;
              U >= 0 && ((Y = a.value) == null || Y.scrollToIndex(U));
            });
        }
      }
      function W(x) {
        let C =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        if (!x.props.disabled)
          if (e.multiple) {
            const z = d.value.findIndex((tt) =>
                e.valueComparator(tt.value, x.value)
              ),
              N = C ?? !~z;
            if (~z) {
              const tt = N ? [...d.value, x] : [...d.value];
              tt.splice(z, 1), (d.value = tt);
            } else N && (d.value = [...d.value, x]);
          } else {
            const z = C !== !1;
            (d.value = z ? [x] : []),
              Te(() => {
                l.value = !1;
              });
          }
      }
      function K(x) {
        var C;
        ((C = M.value) != null && C.$el.contains(x.relatedTarget)) ||
          (l.value = !1);
      }
      function V() {
        var x;
        e.eager && ((x = a.value) == null || x.calculateVisibleItems());
      }
      function I() {
        var x;
        g.value && ((x = s.value) == null || x.focus());
      }
      function J(x) {
        g.value = !0;
      }
      function Ot(x) {
        if (x == null) d.value = [];
        else if (cn(s.value, ":autofill") || cn(s.value, ":-webkit-autofill")) {
          const C = c.value.find((z) => z.title === x);
          C && W(C);
        } else s.value && (s.value.value = "");
      }
      return (
        xt(l, () => {
          if (!e.hideSelected && l.value && d.value.length) {
            const x = k.value.findIndex((C) =>
              d.value.some((z) => e.valueComparator(z.value, C.value))
            );
            Ti &&
              window.requestAnimationFrame(() => {
                var C;
                x >= 0 && ((C = a.value) == null || C.scrollToIndex(x));
              });
          }
        }),
        xt(
          () => e.items,
          (x, C) => {
            l.value || (g.value && !C.length && x.length && (l.value = !0));
          }
        ),
        mt(() => {
          const x = !!(e.chips || i.chip),
            C = !!(
              !e.hideNoData ||
              k.value.length ||
              i["prepend-item"] ||
              i["append-item"] ||
              i["no-data"]
            ),
            z = d.value.length > 0,
            N = un.filterProps(e),
            tt =
              z || (!g.value && e.label && !e.persistentPlaceholder)
                ? void 0
                : e.placeholder;
          return _(
            un,
            G({ ref: s }, N, {
              modelValue: d.value.map((L) => L.props.value).join(", "),
              "onUpdate:modelValue": Ot,
              focused: g.value,
              "onUpdate:focused": (L) => (g.value = L),
              validationValue: d.externalValue,
              counterValue: f.value,
              dirty: z,
              class: [
                "v-select",
                {
                  "v-select--active-menu": l.value,
                  "v-select--chips": !!e.chips,
                  [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
                  "v-select--selected": d.value.length,
                  "v-select--selection-slot": !!i.selection,
                },
                e.class,
              ],
              style: e.style,
              inputmode: "none",
              placeholder: tt,
              "onClick:clear": S,
              "onMousedown:control": O,
              onBlur: K,
              onKeydown: A,
              "aria-label": n(b.value),
              title: n(b.value),
            }),
            {
              ...i,
              default: () =>
                _(ee, null, [
                  _(
                    Yh,
                    G(
                      {
                        ref: o,
                        modelValue: l.value,
                        "onUpdate:modelValue": (L) => (l.value = L),
                        activator: "parent",
                        contentClass: "v-select__content",
                        disabled: w.value,
                        eager: e.eager,
                        maxHeight: 310,
                        openOnClick: !1,
                        closeOnContentClick: !1,
                        transition: e.transition,
                        onAfterEnter: V,
                        onAfterLeave: I,
                      },
                      D.value
                    ),
                    {
                      default: () => [
                        C &&
                          _(
                            Va,
                            G(
                              {
                                ref: M,
                                selected: m.value,
                                selectStrategy: e.multiple
                                  ? "independent"
                                  : "single-independent",
                                onMousedown: (L) => L.preventDefault(),
                                onKeydown: T,
                                onFocusin: J,
                                tabindex: "-1",
                                "aria-live": "polite",
                                color: e.itemColor ?? e.color,
                              },
                              P,
                              e.listProps
                            ),
                            {
                              default: () => {
                                var L, U, Y;
                                return [
                                  (L = i["prepend-item"]) == null
                                    ? void 0
                                    : L.call(i),
                                  !k.value.length &&
                                    !e.hideNoData &&
                                    (((U = i["no-data"]) == null
                                      ? void 0
                                      : U.call(i)) ??
                                      _(dn, { title: n(e.noDataText) }, null)),
                                  _(
                                    tu,
                                    { ref: a, renderless: !0, items: k.value },
                                    {
                                      default: (Tt) => {
                                        var on;
                                        let {
                                          item: pt,
                                          index: Xt,
                                          itemRef: lt,
                                        } = Tt;
                                        const sn = G(pt.props, {
                                          ref: lt,
                                          key: Xt,
                                          onClick: () => W(pt, null),
                                        });
                                        return (
                                          ((on = i.item) == null
                                            ? void 0
                                            : on.call(i, {
                                                item: pt,
                                                index: Xt,
                                                props: sn,
                                              })) ??
                                          _(dn, G(sn, { role: "option" }), {
                                            prepend: (No) => {
                                              let { isSelected: jo } = No;
                                              return _(ee, null, [
                                                e.multiple && !e.hideSelected
                                                  ? _(
                                                      jh,
                                                      {
                                                        key: pt.value,
                                                        modelValue: jo,
                                                        ripple: !1,
                                                        tabindex: "-1",
                                                      },
                                                      null
                                                    )
                                                  : void 0,
                                                pt.props.prependAvatar &&
                                                  _(
                                                    Oa,
                                                    {
                                                      image:
                                                        pt.props.prependAvatar,
                                                    },
                                                    null
                                                  ),
                                                pt.props.prependIcon &&
                                                  _(
                                                    hn,
                                                    {
                                                      icon: pt.props
                                                        .prependIcon,
                                                    },
                                                    null
                                                  ),
                                              ]);
                                            },
                                          })
                                        );
                                      },
                                    }
                                  ),
                                  (Y = i["append-item"]) == null
                                    ? void 0
                                    : Y.call(i),
                                ];
                              },
                            }
                          ),
                      ],
                    }
                  ),
                  d.value.map((L, U) => {
                    function Y(lt) {
                      lt.stopPropagation(), lt.preventDefault(), W(L, !1);
                    }
                    const Tt = {
                        "onClick:close": Y,
                        onKeydown(lt) {
                          (lt.key !== "Enter" && lt.key !== " ") ||
                            (lt.preventDefault(), lt.stopPropagation(), Y(lt));
                        },
                        onMousedown(lt) {
                          lt.preventDefault(), lt.stopPropagation();
                        },
                        modelValue: !0,
                        "onUpdate:modelValue": void 0,
                      },
                      pt = x ? !!i.chip : !!i.selection,
                      Xt = pt
                        ? ma(
                            x
                              ? i.chip({ item: L, index: U, props: Tt })
                              : i.selection({ item: L, index: U })
                          )
                        : void 0;
                    if (!(pt && !Xt))
                      return _(
                        "div",
                        { key: L.value, class: "v-select__selection" },
                        [
                          x
                            ? i.chip
                              ? _(
                                  re,
                                  {
                                    key: "chip-defaults",
                                    defaults: {
                                      VChip: {
                                        closable: e.closableChips,
                                        size: "small",
                                        text: L.title,
                                      },
                                    },
                                  },
                                  { default: () => [Xt] }
                                )
                              : _(
                                  Ba,
                                  G(
                                    {
                                      key: "chip",
                                      closable: e.closableChips,
                                      size: "small",
                                      text: L.title,
                                      disabled: L.props.disabled,
                                    },
                                    Tt
                                  ),
                                  null
                                )
                            : Xt ??
                              _("span", { class: "v-select__selection-text" }, [
                                L.title,
                                e.multiple &&
                                  U < d.value.length - 1 &&
                                  _(
                                    "span",
                                    { class: "v-select__selection-comma" },
                                    [li(",")]
                                  ),
                              ]),
                        ]
                      );
                  }),
                ]),
              "append-inner": function () {
                var Tt;
                for (
                  var L = arguments.length, U = new Array(L), Y = 0;
                  Y < L;
                  Y++
                )
                  U[Y] = arguments[Y];
                return _(ee, null, [
                  (Tt = i["append-inner"]) == null ? void 0 : Tt.call(i, ...U),
                  e.menuIcon
                    ? _(
                        hn,
                        { class: "v-select__menu-icon", icon: e.menuIcon },
                        null
                      )
                    : void 0,
                ]);
              },
            }
          );
        }),
        Us({ isFocused: g, menu: l, select: W }, s)
      );
    },
  }),
  su = {
    setup() {
      const e = X([]),
        t = X(null),
        i = X(null),
        n = X([]),
        s = X([]),
        o = X(null),
        a = X(null),
        r = X(null),
        l = X(!1);
      ri(async () => {
        try {
          const p = await fetch("/get_results_base", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (p.ok) {
            const m = await p.json();
            (n.value = m), (e.value = m.classes);
          } else {
            const m = await p.json();
            console.error("Failed to load classes:", m.error);
          }
        } catch (p) {
          console.error("Error fetching classes:", p);
        }
      });
      function c(p) {
        const m = e.value.find((g) => g.value === p);
        if (!m) throw new Error(`No class found with class_id: ${p}`);
        return m.quizzes;
      }
      const h = (p) => {
          (o.value = p.fromDate), (a.value = p.toDate), f();
        },
        u = (p) => {
          (t.value = p), (s.value = c(p)), f();
        },
        d = (p) => {
          (i.value = p), f();
        },
        f = async () => {
          if (((l.value = !1), o.value && a.value && t.value && i.value))
            try {
              const p = await fetch(
                `/get_results?from=${o.value}&to=${a.value}&class=${t.value}&quiz=${i.value}`,
                {
                  method: "GET",
                  headers: { "Content-Type": "application/json" },
                }
              );
              if (!p.ok) {
                const g = await p.json();
                console.error("Failed to fetch results:", g.error);
                return;
              }
              const m = await p.json();
              m.Status
                ? ((r.value = {
                    labels: m.labels,
                    datasets: [
                      {
                        data: m.data,
                        backgroundColor: "#80CBC4",
                        label: m.label,
                      },
                    ],
                  }),
                  (l.value = !0))
                : ((l.value = !1), (r.value = { datasets: [] }));
            } catch (p) {
              console.error("Error fetching results:", p);
            }
        };
      return {
        getFromToDate: h,
        classItems: e,
        selectedClass: t,
        selectedQuiz: i,
        handleClassChange: u,
        handleQuizChange: d,
        getQuizzesByClassId: c,
        quizzes: s,
        results: n,
        handleGetData: f,
        chartData: r,
        chartStatus: l,
      };
    },
  };
function ou(e, t, i, n, s, o) {
  const a = Wh,
    r = Ah;
  return (
    bt(),
    te("div", null, [
      _(
        se,
        { class: "mt-2 d-flex" },
        {
          default: Z(() => [
            _(
              It,
              { cols: "2" },
              {
                default: Z(() => [
                  _(
                    Vs,
                    {
                      label: "Select Class",
                      items: n.classItems,
                      variant: "underlined",
                      "onUpdate:modelValue": n.handleClassChange,
                    },
                    null,
                    8,
                    ["items", "onUpdate:modelValue"]
                  ),
                ]),
                _: 1,
              }
            ),
            _(
              It,
              { cols: "5" },
              {
                default: Z(() => [
                  _(
                    Vs,
                    {
                      label: "Select Quiz",
                      items: n.quizzes,
                      variant: "underlined",
                      "onUpdate:modelValue": n.handleQuizChange,
                    },
                    null,
                    8,
                    ["items", "onUpdate:modelValue"]
                  ),
                ]),
                _: 1,
              }
            ),
            _(
              It,
              { cols: "5" },
              {
                default: Z(() => [
                  _(a, { onDateRangeSelected: n.getFromToDate }, null, 8, [
                    "onDateRangeSelected",
                  ]),
                ]),
                _: 1,
              }
            ),
          ]),
          _: 1,
        }
      ),
      n.chartData
        ? (bt(),
          Se(
            r,
            {
              key: 0,
              parentChartData: n.chartData,
              chartStatus: n.chartStatus,
            },
            null,
            8,
            ["parentChartData", "chartStatus"]
          ))
        : (bt(),
          Se(
            se,
            { key: 1 },
            {
              default: Z(() => [
                _(It, null, {
                  default: Z(() => [
                    _(
                      js,
                      { type: "info" },
                      {
                        default: Z(
                          () =>
                            t[0] ||
                            (t[0] = [
                              li(
                                "Please select class, quiz and date range to show chart"
                              ),
                            ])
                        ),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            }
          )),
    ])
  );
}
const au = ci(su, [["render", ou]]),
  ru = {};
function lu(e, t) {
  const i = au;
  return (
    bt(),
    te("div", null, [
      t[0] || (t[0] = pa("h1", { class: "mb-3" }, "Dashboard", -1)),
      _(i),
    ])
  );
}
const Su = ci(ru, [["render", lu]]);
export { Su as default };
