// node_modules/fullcalendar/node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var a;
var s;
var h;
var p;
var v;
var y;
var d = {};
var w = [];
var _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var g = Array.isArray;
function m(n2, l3) {
  for (var u4 in l3) n2[u4] = l3[u4];
  return n2;
}
function b(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function k(l3, u4, t3) {
  var i3, r3, o2, e3 = {};
  for (o2 in u4) "key" == o2 ? i3 = u4[o2] : "ref" == o2 ? r3 = u4[o2] : e3[o2] = u4[o2];
  if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (o2 in l3.defaultProps) void 0 === e3[o2] && (e3[o2] = l3.defaultProps[o2]);
  return x(l3, e3, i3, r3, null);
}
function x(n2, t3, i3, r3, o2) {
  var e3 = { type: n2, props: t3, key: i3, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u : o2, __i: -1, __u: 0 };
  return null == o2 && null != l.vnode && l.vnode(e3), e3;
}
function M() {
  return { current: null };
}
function S(n2) {
  return n2.children;
}
function C(n2, l3) {
  this.props = n2, this.context = l3;
}
function $(n2, l3) {
  if (null == l3) return n2.__ ? $(n2.__, n2.__i + 1) : null;
  for (var u4; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) return u4.__e;
  return "function" == typeof n2.type ? $(n2) : null;
}
function I(n2) {
  if (n2.__P && n2.__d) {
    var u4 = n2.__v, t3 = u4.__e, i3 = [], r3 = [], o2 = m({}, u4);
    o2.__v = u4.__v + 1, l.vnode && l.vnode(o2), q(n2.__P, o2, u4, n2.__n, n2.__P.namespaceURI, 32 & u4.__u ? [t3] : null, i3, null == t3 ? $(u4) : t3, !!(32 & u4.__u), r3), o2.__v = u4.__v, o2.__.__k[o2.__i] = o2, D(i3, o2, r3), u4.__e = u4.__ = null, o2.__e != t3 && P(o2);
  }
}
function P(n2) {
  if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l3) {
    if (null != l3 && null != l3.__e) return n2.__e = n2.__c.base = l3.__e;
  }), P(n2);
}
function A(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
}
function H() {
  try {
    for (var n2, l3 = 1; i.length; ) i.length > l3 && i.sort(e), n2 = i.shift(), l3 = i.length, I(n2);
  } finally {
    i.length = H.__r = 0;
  }
}
function L(n2, l3, u4, t3, i3, r3, o2, e3, f4, c3, a3) {
  var s2, h3, p3, v3, y3, _3, g4 = t3 && t3.__k || w, m3 = l3.length;
  for (f4 = T(u4, l3, g4, f4, m3), s2 = 0; s2 < m3; s2++) null != (p3 = u4.__k[s2]) && (h3 = -1 != p3.__i && g4[p3.__i] || d, p3.__i = s2, _3 = q(n2, p3, h3, i3, r3, o2, e3, f4, c3, a3), v3 = p3.__e, p3.ref && h3.ref != p3.ref && (h3.ref && J(h3.ref, null, p3), a3.push(p3.ref, p3.__c || v3, p3)), null == y3 && null != v3 && (y3 = v3), 4 & p3.__u ? (f4 = j(p3, f4, n2), h3.__e && (h3.__e = null)) : "function" == typeof p3.type && void 0 !== _3 ? f4 = _3 : v3 && (f4 = v3.nextSibling), p3.__u &= -7);
  return u4.__e = y3, f4;
}
function T(n2, l3, u4, t3, i3) {
  var r3, o2, e3, f4, c3, a3 = u4.length, s2 = a3, h3 = 0;
  for (n2.__k = new Array(i3), r3 = 0; r3 < i3; r3++) null != (o2 = l3[r3]) && "boolean" != typeof o2 && "function" != typeof o2 ? ("string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? o2 = n2.__k[r3] = x(null, o2, null, null, null) : g(o2) ? o2 = n2.__k[r3] = x(S, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? o2 = n2.__k[r3] = x(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : n2.__k[r3] = o2, f4 = r3 + h3, o2.__ = n2, o2.__b = n2.__b + 1, e3 = null, -1 != (c3 = o2.__i = O(o2, u4, f4, s2)) && (s2--, (e3 = u4[c3]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c3 && (i3 > a3 ? h3-- : i3 < a3 && h3++), "function" != typeof o2.type && (o2.__u |= 4)) : c3 != f4 && (c3 == f4 - 1 ? h3-- : c3 == f4 + 1 ? h3++ : (c3 > f4 ? h3-- : h3++, o2.__u |= 4))) : n2.__k[r3] = null;
  if (s2) for (r3 = 0; r3 < a3; r3++) null != (e3 = u4[r3]) && 0 == (2 & e3.__u) && (e3.__e == t3 && (t3 = $(e3)), K(e3, e3));
  return t3;
}
function j(n2, l3, u4) {
  var t3, i3;
  if ("function" == typeof n2.type) {
    for (t3 = n2.__k, i3 = 0; t3 && i3 < t3.length; i3++) t3[i3] && (t3[i3].__ = n2, l3 = j(t3[i3], l3, u4));
    return l3;
  }
  n2.__e != l3 && (l3 && n2.type && !l3.parentNode && (l3 = $(n2)), l3 = u4.insertBefore(n2.__e, l3 || null));
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 == l3.nodeType);
  return l3;
}
function F(n2, l3) {
  return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (g(n2) ? n2.some(function(n3) {
    F(n3, l3);
  }) : l3.push(n2)), l3;
}
function O(n2, l3, u4, t3) {
  var i3, r3, o2, e3 = n2.key, f4 = n2.type, c3 = l3[u4], a3 = null != c3 && 0 == (2 & c3.__u);
  if (null === c3 && null == e3 || a3 && e3 == c3.key && f4 == c3.type) return u4;
  if (t3 > (a3 ? 1 : 0)) {
    for (i3 = u4 - 1, r3 = u4 + 1; i3 >= 0 || r3 < l3.length; ) if (null != (c3 = l3[o2 = i3 >= 0 ? i3-- : r3++]) && 0 == (2 & c3.__u) && e3 == c3.key && f4 == c3.type) return o2;
  }
  return -1;
}
function z(n2, l3, u4) {
  "-" == l3[0] ? n2.setProperty(l3, null == u4 ? "" : u4) : n2[l3] = null == u4 ? "" : "number" != typeof u4 || _.test(l3) ? u4 : u4 + "px";
}
function N(n2, l3, u4, t3, i3) {
  var r3, o2;
  n: if ("style" == l3) if ("string" == typeof u4) n2.style.cssText = u4;
  else {
    if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u4 && l3 in u4 || z(n2.style, l3, "");
    if (u4) for (l3 in u4) t3 && u4[l3] == t3[l3] || z(n2.style, l3, u4[l3]);
  }
  else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(s, "$1")), o2 = l3.toLowerCase(), l3 = o2 in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o2.slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u4, u4 ? t3 ? u4[a] = t3[a] : (u4[a] = h, n2.addEventListener(l3, r3 ? v : p, r3)) : n2.removeEventListener(l3, r3 ? v : p, r3);
  else {
    if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
      n2[l3] = null == u4 ? "" : u4;
      break n;
    } catch (n3) {
    }
    "function" == typeof u4 || (null == u4 || false === u4 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
  }
}
function V(n2) {
  return function(u4) {
    if (this.l) {
      var t3 = this.l[u4.type + n2];
      if (null == u4[c]) u4[c] = h++;
      else if (u4[c] < t3[a]) return;
      return t3(l.event ? l.event(u4) : u4);
    }
  };
}
function q(n2, u4, t3, i3, r3, o2, e3, f4, c3, a3) {
  var s2, h3, p3, v3, y3, d3, _3, k3, x4, M3, I2, P4, A4, H3, T4, j4, F3 = u4.type;
  if (void 0 !== u4.constructor) return null;
  128 & t3.__u && (c3 = !!(32 & t3.__u), o2 = [f4 = u4.__e = t3.__e]), (s2 = l.__b) && s2(u4);
  n: if ("function" == typeof F3) {
    h3 = e3.length;
    try {
      if (x4 = u4.props, M3 = F3.prototype && F3.prototype.render, I2 = (s2 = F3.contextType) && i3[s2.__c], P4 = s2 ? I2 ? I2.props.value : s2.__ : i3, t3.__c ? k3 = (p3 = u4.__c = t3.__c).__ = p3.__E : (M3 ? u4.__c = p3 = new F3(x4, P4) : (u4.__c = p3 = new C(x4, P4), p3.constructor = F3, p3.render = Q), I2 && I2.sub(p3), p3.state || (p3.state = {}), p3.__n = i3, v3 = p3.__d = true, p3.__h = [], p3._sb = []), M3 && null == p3.__s && (p3.__s = p3.state), M3 && null != F3.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = m({}, p3.__s)), m(p3.__s, F3.getDerivedStateFromProps(x4, p3.__s))), y3 = p3.props, d3 = p3.state, p3.__v = u4, v3) M3 && null == F3.getDerivedStateFromProps && null != p3.componentWillMount && p3.componentWillMount(), M3 && null != p3.componentDidMount && p3.__h.push(p3.componentDidMount);
      else {
        if (M3 && null == F3.getDerivedStateFromProps && x4 !== y3 && null != p3.componentWillReceiveProps && p3.componentWillReceiveProps(x4, P4), u4.__v == t3.__v || !p3.__e && null != p3.shouldComponentUpdate && false === p3.shouldComponentUpdate(x4, p3.__s, P4)) {
          u4.__v != t3.__v && (p3.props = x4, p3.state = p3.__s, p3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.some(function(n3) {
            n3 && (n3.__ = u4);
          }), w.push.apply(p3.__h, p3._sb), p3._sb = [], p3.__h.length && e3.push(p3), f4 = $(t3);
          break n;
        }
        null != p3.componentWillUpdate && p3.componentWillUpdate(x4, p3.__s, P4), M3 && null != p3.componentDidUpdate && p3.__h.push(function() {
          p3.componentDidUpdate(y3, d3, _3);
        });
      }
      if (p3.context = P4, p3.props = x4, p3.__P = n2, p3.__e = false, A4 = l.__r, H3 = 0, M3) p3.state = p3.__s, p3.__d = false, A4 && A4(u4), s2 = p3.render(p3.props, p3.state, p3.context), w.push.apply(p3.__h, p3._sb), p3._sb = [];
      else do {
        p3.__d = false, A4 && A4(u4), s2 = p3.render(p3.props, p3.state, p3.context), p3.state = p3.__s;
      } while (p3.__d && ++H3 < 25);
      p3.state = p3.__s, null != p3.getChildContext && (i3 = m(m({}, i3), p3.getChildContext())), M3 && !v3 && null != p3.getSnapshotBeforeUpdate && (_3 = p3.getSnapshotBeforeUpdate(y3, d3)), T4 = null != s2 && s2.type === S && null == s2.key ? E(s2.props.children) : s2, f4 = L(n2, g(T4) ? T4 : [T4], u4, t3, i3, r3, o2, e3, f4, c3, a3), p3.base = u4.__e, u4.__u &= -161, p3.__h.length && e3.push(p3), k3 && (p3.__E = p3.__ = null);
    } catch (n3) {
      if (e3.length = h3, u4.__v = null, c3 || null != o2) {
        if (n3.then) {
          for (u4.__u |= c3 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
          null != o2 && (o2[o2.indexOf(f4)] = null), u4.__e = f4;
        } else if (null != o2) for (j4 = o2.length; j4--; ) b(o2[j4]);
      } else u4.__e = t3.__e;
      null == u4.__k && (u4.__k = t3.__k || []), n3.then || B(u4), l.__e(n3, u4, t3);
    }
  } else null == o2 && u4.__v == t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : f4 = u4.__e = G(t3.__e, u4, t3, i3, r3, o2, e3, c3, a3);
  return (s2 = l.diffed) && s2(u4), 128 & u4.__u ? void 0 : f4;
}
function B(n2) {
  n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(B));
}
function D(n2, u4, t3) {
  for (var i3 = 0; i3 < t3.length; i3++) J(t3[i3], t3[++i3], t3[++i3]);
  l.__c && l.__c(u4, n2), n2.some(function(u5) {
    try {
      n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
        n3.call(u5);
      });
    } catch (n3) {
      l.__e(n3, u5.__v);
    }
  });
}
function E(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : g(n2) ? n2.map(E) : void 0 !== n2.constructor ? null : m({}, n2);
}
function G(u4, t3, i3, r3, o2, e3, f4, c3, a3) {
  var s2, h3, p3, v3, y3, w3, _3, m3 = i3.props || d, k3 = t3.props, x4 = t3.type;
  if ("svg" == x4 ? o2 = "http://www.w3.org/2000/svg" : "math" == x4 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e3) {
    for (s2 = 0; s2 < e3.length; s2++) if ((y3 = e3[s2]) && "setAttribute" in y3 == !!x4 && (x4 ? y3.localName == x4 : 3 == y3.nodeType)) {
      u4 = y3, e3[s2] = null;
      break;
    }
  }
  if (null == u4) {
    if (null == x4) return document.createTextNode(k3);
    u4 = document.createElementNS(o2, x4, k3.is && k3), c3 && (l.__m && l.__m(t3, e3), c3 = false), e3 = null;
  }
  if (null == x4) m3 === k3 || c3 && u4.data == k3 || (u4.data = k3);
  else {
    if (e3 = "textarea" == x4 && null != k3.defaultValue ? null : e3 && n.call(u4.childNodes), !c3 && null != e3) for (m3 = {}, s2 = 0; s2 < u4.attributes.length; s2++) m3[(y3 = u4.attributes[s2]).name] = y3.value;
    for (s2 in m3) y3 = m3[s2], "dangerouslySetInnerHTML" == s2 ? p3 = y3 : "children" == s2 || s2 in k3 || "value" == s2 && "defaultValue" in k3 || "checked" == s2 && "defaultChecked" in k3 || N(u4, s2, null, y3, o2);
    for (s2 in k3) y3 = k3[s2], "children" == s2 ? v3 = y3 : "dangerouslySetInnerHTML" == s2 ? h3 = y3 : "value" == s2 ? w3 = y3 : "checked" == s2 ? _3 = y3 : c3 && "function" != typeof y3 || m3[s2] === y3 || N(u4, s2, y3, m3[s2], o2);
    if (h3) c3 || p3 && (h3.__html == p3.__html || h3.__html == u4.innerHTML) || (u4.innerHTML = h3.__html), t3.__k = [];
    else if (p3 && (u4.innerHTML = ""), L("template" == t3.type ? u4.content : u4, g(v3) ? v3 : [v3], t3, i3, r3, "foreignObject" == x4 ? "http://www.w3.org/1999/xhtml" : o2, e3, f4, e3 ? e3[0] : i3.__k && $(i3, 0), c3, a3), null != e3) for (s2 = e3.length; s2--; ) b(e3[s2]);
    c3 && "textarea" != x4 || (s2 = "value", "progress" == x4 && null == w3 ? u4.removeAttribute("value") : null != w3 && (w3 !== u4[s2] || "progress" == x4 && !w3 || "option" == x4 && w3 != m3[s2]) && N(u4, s2, w3, m3[s2], o2), s2 = "checked", null != _3 && _3 != u4[s2] && N(u4, s2, _3, m3[s2], o2));
  }
  return u4;
}
function J(n2, u4, t3) {
  try {
    if ("function" == typeof n2) {
      var i3 = "function" == typeof n2.__u;
      i3 && n2.__u(), i3 && null == u4 || (n2.__u = n2(u4));
    } else n2.current = u4;
  } catch (n3) {
    l.__e(n3, t3);
  }
}
function K(n2, u4, t3) {
  var i3, r3;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current != n2.__e || J(i3, null, u4)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount) try {
      i3.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u4);
    }
    i3.base = i3.__P = i3.__n = null;
  }
  if (i3 = n2.__k) for (r3 = 0; r3 < i3.length; r3++) i3[r3] && K(i3[r3], u4, t3 || "function" != typeof n2.type);
  t3 || b(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function Q(n2, l3, u4) {
  return this.constructor(n2, u4);
}
function R(u4, t3, i3) {
  var r3, o2, e3, f4;
  t3 == document && (t3 = document.documentElement), l.__ && l.__(u4, t3), o2 = (r3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, e3 = [], f4 = [], q(t3, u4 = (!r3 && i3 || t3).__k = k(S, null, [u4]), o2 || d, d, t3.namespaceURI, !r3 && i3 ? [i3] : o2 ? null : t3.firstChild ? n.call(t3.childNodes) : null, e3, !r3 && i3 ? i3 : o2 ? o2.__e : t3.firstChild, r3, f4), D(e3, u4, f4), u4.props.children = null;
}
function X(n2) {
  function l3(n3) {
    var u4, t3;
    return this.getChildContext || (u4 = /* @__PURE__ */ new Set(), (t3 = {})[l3.__c] = this, this.getChildContext = function() {
      return t3;
    }, this.componentWillUnmount = function() {
      u4 = null;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value != n4.value && u4.forEach(function(n5) {
        n5.__e = true, A(n5);
      });
    }, this.sub = function(n4) {
      u4.add(n4);
      var l4 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u4 && u4.delete(n4), l4 && l4.call(n4);
      };
    }), n3.children;
  }
  return l3.__c = "__cC" + y++, l3.__ = n2, l3.Provider = l3.__l = (l3.Consumer = function(n3, l4) {
    return n3.children(l4);
  }).contextType = l3, l3;
}
n = w.slice, l = { __e: function(n2, l3, u4, t3) {
  for (var i3, r3, o2; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
    if ((r3 = i3.constructor) && null != r3.getDerivedStateFromError && (i3.setState(r3.getDerivedStateFromError(n2)), o2 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), o2 = i3.__d), o2) return i3.__E = i3;
  } catch (l4) {
    n2 = l4;
  }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, C.prototype.setState = function(n2, l3) {
  var u4;
  u4 = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof n2 && (n2 = n2(m({}, u4), this.props)), n2 && m(u4, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), A(this));
}, C.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), A(this));
}, C.prototype.render = S, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l3) {
  return n2.__v.__b - l3.__v.__b;
}, H.__r = 0, f = Math.random().toString(8), c = "__d" + f, a = "__a" + f, s = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true), y = 0;

// node_modules/fullcalendar/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f2 = 0;
function u2(e3, t3, n2, o2, i3, u4) {
  t3 || (t3 = {});
  var a3, c3, p3 = t3;
  if ("ref" in p3) for (c3 in p3 = {}, t3) "ref" == c3 ? a3 = t3[c3] : p3[c3] = t3[c3];
  var l3 = { type: e3, props: p3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i3, __self: u4 };
  if ("function" == typeof e3 && (a3 = e3.defaultProps)) for (c3 in a3) void 0 === p3[c3] && (p3[c3] = a3[c3]);
  return l.vnode && l.vnode(l3), l3;
}

// node_modules/fullcalendar/node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u3;
var i2;
var f3 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m2 = c2.unmount;
var p2 = c2.__;
function j2() {
  for (var n2; n2 = f3.shift(); ) {
    var t3 = n2.__H;
    if (n2.__P && t3) try {
      t3.__h.some(z2), t3.__h.some(B2), t3.__h = [];
    } catch (r3) {
      t3.__h = [], c2.__e(r3, n2.__v);
    }
  }
}
c2.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, c2.__ = function(n2, t3) {
  n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), p2 && p2(n2, t3);
}, c2.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i3 = (r2 = n2.__c).__H;
  i3 && (u3 === r2 ? (i3.__h = [], r2.__h = [], i3.__.some(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
  })) : (i3.__h.some(z2), i3.__h.some(B2), i3.__h = [], t2 = 0)), u3 = r2;
}, c2.diffed = function(n2) {
  v2 && v2(n2);
  var t3 = n2.__c;
  t3 && t3.__H && (t3.__H.__h.length && (1 !== f3.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.some(function(n3) {
    n3.u && (n3.__H = n3.u, n3.u = void 0);
  })), u3 = r2 = null;
}, c2.__c = function(n2, t3) {
  t3.some(function(n3) {
    try {
      n3.__h.some(z2), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B2(n4);
      });
    } catch (r3) {
      t3.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t3 = [], c2.__e(r3, n3.__v);
    }
  }), l2 && l2(n2, t3);
}, c2.unmount = function(n2) {
  m2 && m2(n2);
  var t3, r3 = n2.__c;
  r3 && r3.__H && (r3.__H.__.some(function(n3) {
    try {
      z2(n3);
    } catch (n4) {
      t3 = n4;
    }
  }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n2) {
  var t3, r3 = function() {
    clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u4 = setTimeout(r3, 35);
  k2 && (t3 = requestAnimationFrame(r3));
}
function z2(n2) {
  var t3 = r2, u4 = n2.__c;
  "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
}
function B2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}

// node_modules/fullcalendar/node_modules/preact/compat/dist/compat.module.js
function g3(n2, t3) {
  for (var e3 in t3) n2[e3] = t3[e3];
  return n2;
}
function E2(n2, t3) {
  for (var e3 in n2) if ("__source" !== e3 && !(e3 in t3)) return true;
  for (var r3 in t3) if ("__source" !== r3 && n2[r3] !== t3[r3]) return true;
  return false;
}
function M2(n2, t3) {
  this.props = n2, this.context = t3;
}
(M2.prototype = new C()).isPureReactComponent = true, M2.prototype.shouldComponentUpdate = function(n2, t3) {
  return E2(this.props, n2) || E2(this.state, t3);
};
var T3 = l.__b;
l.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), T3 && T3(n2);
};
var A3 = "undefined" != typeof Symbol && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
var O2 = l.__e;
l.__e = function(n2, t3, e3, r3) {
  if (n2.then) {
    for (var u4, o2 = t3; o2 = o2.__; ) if ((u4 = o2.__c) && u4.__c) return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k || []), u4.__c(n2, t3);
  }
  O2(n2, t3, e3, r3);
};
var U2 = l.unmount;
function V2(n2, t3, e3) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c.__e = true, n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return V2(n3, t3, e3);
  })), n2;
}
function W2(n2, t3, e3) {
  return n2 && e3 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return W2(n3, t3, e3);
  }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e3)), n2;
}
function P3() {
  this.__u = 0, this.o = null, this.__b = null;
}
function j3(n2) {
  var t3 = n2.__ && n2.__.__c;
  return t3 && t3.__a && t3.__a(n2);
}
function B3() {
  this.i = null, this.l = null;
}
l.unmount = function(n2) {
  var t3 = n2.__c;
  t3 && (t3.__z = true), t3 && t3.__R && t3.__R(), t3 && 32 & n2.__u && (n2.type = null), U2 && U2(n2);
}, (P3.prototype = new C()).__c = function(n2, t3) {
  var e3 = t3.__c, r3 = this;
  null == r3.o && (r3.o = []), r3.o.push(e3);
  var u4 = j3(r3.__v), o2 = false, i3 = function() {
    o2 || r3.__z || (o2 = true, e3.__R = null, u4 ? u4(f4) : f4());
  };
  e3.__R = i3;
  var l3 = e3.__P;
  e3.__P = null;
  var f4 = function() {
    if (!--r3.__u) {
      if (r3.state.__a) {
        var n3 = r3.state.__a;
        r3.__v.__k[0] = W2(n3, n3.__c.__P, n3.__c.__O);
      }
      var t4;
      for (r3.setState({ __a: r3.__b = null }); t4 = r3.o.pop(); ) t4.__P = l3, t4.forceUpdate();
    }
  };
  r3.__u++ || 32 & t3.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
}, P3.prototype.componentWillUnmount = function() {
  this.o = [];
}, P3.prototype.render = function(n2, e3) {
  if (this.__b) {
    if (this.__v.__k) {
      var r3 = document.createElement("div"), o2 = this.__v.__k[0].__c;
      this.__v.__k[0] = V2(this.__b, r3, o2.__O = o2.__P);
    }
    this.__b = null;
  }
  var i3 = e3.__a && k(S, null, n2.fallback);
  return i3 && (i3.__u &= -33), [k(S, null, e3.__a ? null : n2.children), i3];
};
var H2 = function(n2, t3, e3) {
  if (++e3[1] === e3[0] && n2.l.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.l.size)) for (e3 = n2.i; e3; ) {
    for (; e3.length > 3; ) e3.pop()();
    if (e3[1] < e3[0]) break;
    n2.i = e3 = e3[2];
  }
};
function Z(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function Y(n2) {
  var e3 = this, r3 = n2.h;
  if (e3.componentWillUnmount = function() {
    R(null, e3.v), e3.v = null, e3.h = null;
  }, e3.h && e3.h !== r3 && e3.componentWillUnmount(), !e3.v) {
    for (var u4 = e3.__v; null !== u4 && !u4.__m && null !== u4.__; ) u4 = u4.__;
    e3.h = r3, e3.v = { nodeType: 1, parentNode: r3, childNodes: [], __k: { __m: u4.__m }, contains: function() {
      return true;
    }, namespaceURI: r3.namespaceURI, insertBefore: function(n3, t3) {
      this.childNodes.push(n3), e3.h.insertBefore(n3, t3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.h.removeChild(n3);
    } };
  }
  R(k(Z, { context: e3.context }, n2.__v), e3.v);
}
function $2(n2, e3) {
  var r3 = k(Y, { __v: n2, h: e3 });
  return r3.containerInfo = e3, r3;
}
(B3.prototype = new C()).__a = function(n2) {
  var t3 = this, e3 = j3(t3.__v), r3 = t3.l.get(n2);
  return r3[0]++, function(u4) {
    var o2 = function() {
      t3.props.revealOrder ? (r3.push(u4), H2(t3, n2, r3)) : u4();
    };
    e3 ? e3(o2) : o2();
  };
}, B3.prototype.render = function(n2) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t3 = F(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
  for (var e3 = t3.length; e3--; ) this.l.set(t3[e3], this.i = [1, 0, this.i]);
  return n2.children;
}, B3.prototype.componentDidUpdate = B3.prototype.componentDidMount = function() {
  var n2 = this;
  this.l.forEach(function(t3, e3) {
    H2(n2, e3, t3);
  });
};
var q3 = "undefined" != typeof Symbol && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103;
var G2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var J2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
var K2 = /[A-Z0-9]/g;
var Q2 = "undefined" != typeof document;
var X2 = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof /* @__PURE__ */ Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
};
function nn(n2, t3, e3) {
  return null == t3.__k && (t3.textContent = ""), R(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
}
C.prototype.isReactComponent = true, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
  Object.defineProperty(C.prototype, t3, { configurable: true, get: function() {
    return this["UNSAFE_" + t3];
  }, set: function(n2) {
    Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
  } });
});
var en = l.event;
l.event = function(n2) {
  return en && (n2 = en(n2)), n2.persist = function() {
  }, n2.isPropagationStopped = function() {
    return this.cancelBubble;
  }, n2.isDefaultPrevented = function() {
    return this.defaultPrevented;
  }, n2.nativeEvent = n2;
};
var rn;
var un = { configurable: true, get: function() {
  return this.class;
} };
var on = l.vnode;
l.vnode = function(n2) {
  "string" == typeof n2.type && (function(n3) {
    var t3 = n3.props, e3 = n3.type, u4 = {}, o2 = -1 == e3.indexOf("-");
    for (var i3 in t3) {
      var l3 = t3[i3];
      if (!("value" === i3 && "defaultValue" in t3 && null == l3 || Q2 && "children" === i3 && "noscript" === e3 || "class" === i3 || "className" === i3)) {
        var f4 = i3.toLowerCase();
        "defaultValue" === i3 && "value" in t3 && null == t3.value ? i3 = "value" : "download" === i3 && true === l3 ? l3 = "" : "translate" === f4 && "no" === l3 ? l3 = false : "o" === f4[0] && "n" === f4[1] ? "ondoubleclick" === f4 ? i3 = "ondblclick" : "onchange" !== f4 || "input" !== e3 && "textarea" !== e3 || X2(t3.type) ? "onfocus" === f4 ? i3 = "onfocusin" : "onblur" === f4 ? i3 = "onfocusout" : J2.test(i3) && (i3 = f4) : f4 = i3 = "oninput" : o2 && G2.test(i3) ? i3 = i3.replace(K2, "-$&").toLowerCase() : null === l3 && (l3 = void 0), "oninput" === f4 && u4[i3 = f4] && (i3 = "oninputCapture"), u4[i3] = l3;
      }
    }
    "select" == e3 && (u4.multiple && Array.isArray(u4.value) && (u4.value = F(t3.children).forEach(function(n4) {
      n4.props.selected = -1 != u4.value.indexOf(n4.props.value);
    })), null != u4.defaultValue && (u4.value = F(t3.children).forEach(function(n4) {
      n4.props.selected = u4.multiple ? -1 != u4.defaultValue.indexOf(n4.props.value) : u4.defaultValue == n4.props.value;
    }))), t3.class && !t3.className ? (u4.class = t3.class, Object.defineProperty(u4, "className", un)) : t3.className && (u4.class = u4.className = t3.className), n3.props = u4;
  })(n2), n2.$$typeof = q3, on && on(n2);
};
var ln = l.__r;
l.__r = function(n2) {
  ln && ln(n2), rn = n2.__c;
};
var fn = l.diffed;
l.diffed = function(n2) {
  fn && fn(n2);
  var t3 = n2.props, e3 = n2.__e;
  null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), rn = null;
};
function hn(n2) {
  return !!n2 && n2.$$typeof === q3;
}
function pn(n2) {
  return !!n2.__k && (R(null, n2), true);
}
var bn = function(n2, t3) {
  var r3, u4 = l.debounceRendering;
  l.debounceRendering = function(n3) {
    r3 = n3;
  };
  try {
    var o2 = n2(t3);
    return r3 && r3(), o2;
  } finally {
    l.debounceRendering = u4;
  }
};

// node_modules/fullcalendar/node_modules/preact/compat/client.mjs
function createRoot(container) {
  return {
    // eslint-disable-next-line
    render: function(children) {
      nn(children, container);
    },
    // eslint-disable-next-line
    unmount: function() {
      pn(container);
    }
  };
}

// node_modules/temporal-polyfill/chunks/root.js
var NativeTemporal = globalThis.Temporal;

// node_modules/temporal-utils/dist/errorMessages.js
var expectedPositive = (entityName, num) => `Non-positive ${entityName}: ${num}`;
var expectedFinite = (entityName, num) => `Non-finite ${entityName}: ${num}`;
var forbiddenBigIntToNumber = (entityName) => `Cannot convert bigint to ${entityName}`;
var invalidObject = "Invalid object";
var numberOutOfRange = (entityName, val, min, max) => invalidEntity(entityName, val) + `; must be between ${min}-${max}`;
var invalidEntity = (fieldName, val) => `Invalid ${fieldName}: ${val}`;

// node_modules/temporal-utils/dist/utils.js
var nanoInMicro = 1e3;
var nanoInMilli = 1e6;
var nanoInSec = 1e9;
var nanoInMinute = 6e10;
var nanoInHour = 36e11;
function normalizeOptions(options) {
  if (options === void 0) {
    return /* @__PURE__ */ Object.create(null);
  }
  return requireObjectLike(options);
}
function toFiniteNumber(arg, entityName = "number") {
  if (typeof arg === "bigint") {
    throw new TypeError(forbiddenBigIntToNumber(entityName));
  }
  arg = Number(arg);
  if (!Number.isFinite(arg)) {
    throw new RangeError(expectedFinite(entityName, arg));
  }
  return arg;
}
function toIntegerWithTrunc(arg, entityName) {
  return Math.trunc(toFiniteNumber(arg, entityName)) || 0;
}
function toPositiveIntegerWithTruncation(arg, entityName) {
  return requireNumberIsPositive(toIntegerWithTrunc(arg, entityName), entityName);
}
function requireNumberIsPositive(num, entityName = "number") {
  if (num <= 0) {
    throw new RangeError(expectedPositive(entityName, num));
  }
  return num;
}
function constrainToRange(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function isObjectLike(arg) {
  return arg !== null && (typeof arg === "object" || typeof arg === "function");
}
function requireObjectLike(arg) {
  if (!isObjectLike(arg)) {
    throw new TypeError(invalidObject);
  }
  return arg;
}

// node_modules/temporal-utils/dist/diff.js
function createDiffFunc(unit) {
  return (date0, date1, options) => {
    const normOptions = normalizeDiffOptions(options);
    if (normOptions.roundingMode || normOptions.roundingIncrement !== void 0) {
      return date0.until(date1, {
        ...normOptions,
        largestUnit: unit,
        smallestUnit: unit
      })[unit];
    }
    const duration = date0.until(date1, { largestUnit: unit });
    if (duration.blank) {
      return 0;
    }
    if (isTimeUnit(unit)) {
      return duration.total(unit);
    }
    const relativeTo = !("day" in date0) && "toPlainDate" in date0 ? date0.toPlainDate({ day: 1 }) : date0;
    return duration.total({ unit, relativeTo });
  };
}
function isTimeUnit(unit) {
  return unit === "hours" || unit === "minutes" || unit === "seconds" || unit === "milliseconds" || unit === "microseconds" || unit === "nanoseconds";
}
var diffYears = createDiffFunc("years");
var diffMonths = createDiffFunc("months");
var diffWeeks = createDiffFunc("weeks");
var diffDays = createDiffFunc("days");
var diffHours = createDiffFunc("hours");
var diffMinutes = createDiffFunc("minutes");
var diffSeconds = createDiffFunc("seconds");
var diffMilliseconds = createDiffFunc("milliseconds");
var diffMicroseconds = createDiffFunc("microseconds");
var diffNanoseconds = createDiffFunc("nanoseconds");
function normalizeDiffOptions(options) {
  return typeof options === "string" ? { roundingMode: options } : options || {};
}

// node_modules/temporal-polyfill/chunks/internal.js
var invalidEntity2 = invalidEntity;
var missingField = (fieldName) => `Missing ${fieldName}`;
var invalidChoice = (fieldName, val, choiceMap) => invalidEntity(fieldName, val) + "; must be " + Object.keys(choiceMap).join();
var forbiddenValueOf = "Cannot use valueOf";
var invalidCallingContext = "Invalid calling context";
var exoticCalendarRequired = (calendarId, remedy) => `Unknown calendar ${calendarId}; might need ${remedy}`;
var invalidTimeZone = (calendarId) => invalidEntity("TimeZone", calendarId);
var outOfBoundsDate = "Out-of-bounds date";
var failedParse = (s2) => `Cannot parse: ${s2}`;
var invalidSubstring = (substring) => `Invalid substring: ${substring}`;
var constrainToRange2 = constrainToRange;
function throwRangeError(message) {
  throw new RangeError(message);
}
function throwTypeError(message) {
  throw new TypeError(message);
}
function clampProp(props, propName, min, max, overflow) {
  return clampEntity(propName, ((props2, propName2) => {
    const propVal = props2[propName2];
    return void 0 === propVal && throwTypeError(missingField(propName2)), propVal;
  })(props, propName), min, max, overflow);
}
function clampEntity(entityName, num, min, max, overflow, choices) {
  const clamped = constrainToRange2(num, min, max);
  return overflow && num !== clamped && throwRangeError(((entityName2, val, min2, max2, choices2) => choices2 ? numberOutOfRange(entityName2, choices2[val], choices2[min2], choices2[max2]) : numberOutOfRange(entityName2, val, min2, max2))(entityName, num, min, max, choices)), clamped;
}
function memoize(generator, MapClass = Map) {
  const map = new MapClass();
  return (key, ...otherArgs) => {
    if (map.has(key)) {
      return map.get(key);
    }
    const val = generator(key, ...otherArgs);
    return map.set(key, val), val;
  };
}
var createNameDescriptors = (name) => createPropDescriptors({
  name
}, 1);
var createPropDescriptors = (propVals, readonly) => mapProps((value) => ({
  value,
  configurable: 1,
  writable: !readonly
}), propVals);
var createStringTagDescriptors = (value) => ({
  [Symbol.toStringTag]: {
    value,
    configurable: 1
  }
});
function mapProps(transformer, props) {
  const res = {};
  for (const propName in props) {
    res[propName] = transformer(props[propName], propName);
  }
  return res;
}
function zipPropsConst(propNames, propVal) {
  const res = {};
  for (const propName of propNames) {
    res[propName] = propVal;
  }
  return res;
}
function createPropGetters(propNames) {
  const getters = {};
  for (const propName of propNames) {
    getters[propName] = (slots) => slots[propName];
  }
  return getters;
}
function pluckProps(propNames, props, dest = /* @__PURE__ */ Object.create(null)) {
  for (const propName of propNames) {
    dest[propName] = props[propName];
  }
  return dest;
}
function bindArgs(f4, ...boundArgs) {
  return (...dynamicArgs) => f4(...boundArgs, ...dynamicArgs);
}
function noop() {
}
function capitalize(s2) {
  return s2[0].toUpperCase() + s2.substring(1);
}
function createRegExp(meat) {
  return new RegExp(`^${meat}$`, "i");
}
function parseSubsecNano(fracStr) {
  return parseInt(fracStr.padEnd(9, "0"));
}
function parseSign(s2) {
  return s2 && "+" !== s2 ? -1 : 1;
}
function parseInt0(s2) {
  return void 0 === s2 ? 0 : parseInt(s2);
}
function padNumber(digits, num) {
  return String(num).padStart(digits, "0");
}
var padNumber2 = /* @__PURE__ */ bindArgs(padNumber, 2);
function compareNumbers(a3, b2) {
  return Math.sign(a3 - b2);
}
function divFloorBigInt(num, denom) {
  const whole = num / denom;
  return num % denom < 0n ? whole - 1n : whole;
}
function divModFloorBigInt(num, divisor) {
  const quotient = divFloorBigInt(num, divisor);
  return [quotient, num - quotient * divisor];
}
function divModFloor(num, divisor) {
  return [Math.floor(num / divisor), modFloor(num, divisor)];
}
function modFloor(num, divisor) {
  return (num % divisor + divisor) % divisor;
}
function divTrunc(num, divisor) {
  return Math.trunc(num / divisor) || 0;
}
function hasHalf(num) {
  return 0.5 === Math.abs(num % 1);
}
function normalizeEraName(era) {
  const normalized = era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, "");
  return "bc" === normalized || "b" === normalized ? "bce" : "ad" === normalized || "a" === normalized ? "ce" : normalized;
}
var isoCalendarImpl = void 0;
function getCalendarSlotId(calendar) {
  return calendar === isoCalendarImpl ? "iso8601" : 0 === calendar ? "gregory" : calendar.id;
}
function formatMonthCode(monthCodeNumber, isLeapMonth) {
  return "M" + padNumber2(monthCodeNumber) + (isLeapMonth ? "L" : "");
}
var unitNameMap = {
  nanosecond: 0,
  microsecond: 1,
  millisecond: 2,
  second: 3,
  minute: 4,
  hour: 5,
  day: 6,
  week: 7,
  month: 8,
  year: 9
};
var unitNamesAsc = /* @__PURE__ */ Object.keys(unitNameMap);
var nanoInMicro2 = nanoInMicro;
var nanoInMilli2 = nanoInMilli;
var nanoInSec2 = nanoInSec;
var nanoInMinute2 = nanoInMinute;
var nanoInHour2 = nanoInHour;
var nanoInUtcDay = 864e11;
var bigNanoInMilli = /* @__PURE__ */ BigInt(nanoInMilli2);
var bigNanoInSec = /* @__PURE__ */ BigInt(nanoInSec2);
var bigNanoInUtcDay = /* @__PURE__ */ BigInt(nanoInUtcDay);
var timeFieldNamesAsc = /* @__PURE__ */ unitNamesAsc.slice(0, 6);
var timeGetters = /* @__PURE__ */ createPropGetters(timeFieldNamesAsc);
var calendarDateFieldNamesAsc = ["day", "month", "year"];
function validateTimeFields(timeFields) {
  return constrainTimeFields(timeFields, 1), timeFields;
}
var maxValues = {
  hour: 23,
  minute: 59,
  second: 59
};
function constrainTimeFields(timeFields, overflow) {
  const constrainedFields = {};
  for (const fieldName of timeFieldNamesAsc) {
    constrainedFields[fieldName] = clampEntity(fieldName, timeFields[fieldName], 0, maxValues[fieldName] || 999, overflow);
  }
  return constrainedFields;
}
function timeFieldsToNano(timeFields) {
  return timeFieldsToSec(timeFields) * nanoInSec2 + timeFieldsToSubsecNano(timeFields);
}
function timeFieldsToSec(timeFields) {
  return 3600 * timeFields.hour + 60 * timeFields.minute + timeFields.second;
}
function timeFieldsToSubsecNano(timeFields) {
  return timeFields.millisecond * nanoInMilli2 + timeFields.microsecond * nanoInMicro2 + timeFields.nanosecond;
}
function nanoToTimeFields(timeNano) {
  const [timeMilli, nanoAfterMilli] = divModFloor(timeNano, nanoInMilli2);
  const [microsecond, nanosecond] = divModFloor(nanoAfterMilli, nanoInMicro2);
  return milliToTimeFields(timeMilli, microsecond, nanosecond);
}
function milliToTimeFields(timeMilli, microsecond = 0, nanosecond = 0) {
  const [hour, milliAfterHour] = divModFloor(timeMilli, 36e5);
  const [minute, milliAfterMinute] = divModFloor(milliAfterHour, 6e4);
  const [second, millisecond] = divModFloor(milliAfterMinute, 1e3);
  return {
    hour,
    minute,
    second,
    millisecond,
    microsecond,
    nanosecond
  };
}
function epochNanoToSecMod(epochNano) {
  const [epochSec, nano] = divModFloorBigInt(epochNano, bigNanoInSec);
  return [Number(epochSec), Number(nano)];
}
function epochNanoToMilli(epochNano) {
  return Number(divFloorBigInt(epochNano, bigNanoInMilli));
}
function isoDateTimeToEpochNano(isoDateTime) {
  return isoDateToEpochNano(isoDateTime) + BigInt(timeFieldsToNano(isoDateTime));
}
function isoDateToEpochNano(isoDate) {
  return BigInt(isoDateToEpochDays(isoDate)) * bigNanoInUtcDay;
}
function isoDateToEpochDays(isoDate) {
  return isoPartsToEpochDays(isoDate.year, isoDate.month, isoDate.day);
}
function isoPartsToEpochDays(isoYear, isoMonth = 1, isoDay = 1) {
  const monthIndex = isoMonth - 1;
  return isoYear += Math.floor(monthIndex / 12), isoMonth = modFloor(monthIndex, 12), Date.UTC(isoYear % 400 - 400, isoMonth, 0) / 864e5 + 146097 * (divTrunc(isoYear, 400) + 1) + isoDay;
}
function epochNanoToIsoDateTime(epochNano) {
  const [epochDays, nanoAfterDay] = divModFloorBigInt(epochNano, bigNanoInUtcDay);
  return {
    ...epochDaysToIsoDate(Number(epochDays)),
    ...nanoToTimeFields(Number(nanoAfterDay))
  };
}
function epochDaysToIsoDate(epochDays) {
  const legacyDate = new Date(864e5 * modFloor(epochDays, 146097));
  return {
    year: legacyDate.getUTCFullYear() + 400 * Math.floor(epochDays / 146097),
    month: legacyDate.getUTCMonth() + 1,
    day: legacyDate.getUTCDate()
  };
}
function computeIsoMonthCodeParts(month) {
  return [month, 0];
}
function computeIsoDaysInMonth(year, month) {
  switch (month) {
    case 2:
      return computeIsoInLeapYear(year) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function computeIsoInLeapYear(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}
function computeGregoryEraFields({ year }) {
  return year < 1 ? {
    era: "bce",
    eraYear: 1 - year
  } : {
    era: "ce",
    eraYear: year
  };
}
function validateIsoDateTimeFields(isoDateTime) {
  return validateIsoDateFields(isoDateTime), validateTimeFields(isoDateTime);
}
function validateIsoDateFields(isoInternals) {
  return constrainIsoDateFields(isoInternals, 1), isoInternals;
}
function constrainIsoDateFields(isoDate, overflow) {
  const { year } = isoDate;
  const month = clampProp(isoDate, "month", 1, 12, overflow);
  return {
    year,
    month,
    day: clampProp(isoDate, "day", 1, computeIsoDaysInMonth(year, month), overflow)
  };
}
function computeCalendarDateFields(calendar, isoDate) {
  return calendar ? calendar.de(isoDate) : isoDate;
}
function computeCalendarMonthCodeParts(calendar, year, month) {
  return calendar ? calendar.N(year, month) : computeIsoMonthCodeParts(month);
}
function computeCalendarEraFields(calendar, isoDate) {
  return 0 === calendar ? computeGregoryEraFields(isoDate) : calendar && calendar.h?.(isoDate) || {};
}
function computeCalendarMonthCode(calendar, isoDate) {
  const { year, month } = computeCalendarDateFields(calendar, isoDate);
  const [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, year, month);
  return formatMonthCode(monthCodeNumber, isLeapMonth);
}
var requireString = /* @__PURE__ */ bindArgs(requireType, "string");
function requireType(typeName, arg, entityName = typeName) {
  return typeof arg !== typeName && throwTypeError(invalidEntity2(entityName, arg)), arg;
}
function requireNumberIsInteger(num, entityName = "number") {
  return Number.isInteger(num) || throwRangeError(((entityName2, num2) => `Non-integer ${entityName2}: ${num2}`)(entityName, num)), num || 0;
}
function toString(arg) {
  return "symbol" == typeof arg && throwTypeError("Cannot convert Symbol to string"), String(arg);
}
function toPrimitiveWithStringHint(arg) {
  if (!isObjectLike(arg)) {
    return arg;
  }
  const exoticToPrimitive = arg[Symbol.toPrimitive];
  if (null != exoticToPrimitive) {
    "function" != typeof exoticToPrimitive && throwTypeError();
    const primitive = Reflect.apply(exoticToPrimitive, arg, ["string"]);
    return isObjectLike(primitive) && throwTypeError(), primitive;
  }
  return Date.prototype[Symbol.toPrimitive].call(arg, "string");
}
function toStrictInteger(arg, entityName) {
  return requireNumberIsInteger(toFiniteNumber(arg, entityName), entityName);
}
var epochDisambigMap = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
};
var roundingModeFuncs = [Math.floor, (num) => hasHalf(num) ? Math.floor(num) : Math.round(num), Math.ceil, (num) => hasHalf(num) ? Math.ceil(num) : Math.round(num), Math.trunc, (num) => hasHalf(num) ? Math.trunc(num) || 0 : Math.round(num), (num) => num < 0 ? Math.floor(num) : Math.ceil(num), (num) => Math.sign(num) * Math.round(Math.abs(num)) || 0, (num) => hasHalf(num) ? (num = Math.trunc(num) || 0) + num % 2 : Math.round(num)];
function coerceChoiceOption(optionName, enumNameMap, options, defaultChoice = 0) {
  const enumArg = options[optionName];
  if (void 0 === enumArg) {
    return defaultChoice;
  }
  const enumStr = toString(enumArg);
  const enumNum = enumNameMap[enumStr];
  return void 0 === enumNum && throwRangeError(invalidChoice(optionName, enumStr, enumNameMap)), enumNum;
}
var coerceEpochDisambig = /* @__PURE__ */ bindArgs(coerceChoiceOption, "disambiguation", epochDisambigMap);
function combineDateAndTime(isoDate, time) {
  return pluckProps(calendarDateFieldNamesAsc, isoDate, pluckProps(timeFieldNamesAsc, time));
}
var epochNanoMax = /* @__PURE__ */ BigInt(1e8) * bigNanoInUtcDay;
var epochNanoMin = /* @__PURE__ */ BigInt(-1e8) * bigNanoInUtcDay;
var plainDateEpochNanoMin = epochNanoMin - bigNanoInUtcDay;
function checkIsoDateInBounds(isoDate, allowPlainDateLowerEdge = 1) {
  const epochNano = isoDateToEpochNano(isoDate);
  return (epochNano < (allowPlainDateLowerEdge ? plainDateEpochNanoMin : epochNanoMin) || epochNano > epochNanoMax) && throwRangeError(outOfBoundsDate), isoDate;
}
function checkIsoDateTimeInBounds(isoDateTime) {
  return checkIsoDateTimeEpochNanoInBounds(isoDateTimeToEpochNano(isoDateTime)), isoDateTime;
}
function checkIsoDateTimeEpochNanoInBounds(epochNano) {
  return (epochNano <= plainDateEpochNanoMin || epochNano >= epochNanoMax + bigNanoInUtcDay) && throwRangeError(outOfBoundsDate), epochNano;
}
function checkEpochNanoInBounds(epochNano) {
  return (epochNano < epochNanoMin || epochNano > epochNanoMax) && throwRangeError(outOfBoundsDate), epochNano;
}
function isoDateTimeAndOffsetToEpochNano(isoDateTime, offsetNano) {
  return checkEpochNanoInBounds(isoDateToEpochNano(isoDateTime) + BigInt(timeFieldsToNano(isoDateTime) - offsetNano));
}
function roundNumberToInc(num, roundingInc, roundingMode) {
  return roundWithMode(num / roundingInc, roundingMode) * roundingInc;
}
function roundWithMode(num, roundingMode) {
  return roundingModeFuncs[roundingMode](num);
}
function createEpochNanoSlots(epochNano) {
  return {
    epochNanoseconds: epochNano
  };
}
function createZonedEpochNanoSlots(epochNano, timeZone, calendar) {
  return {
    calendar,
    timeZone,
    epochNanoseconds: epochNano
  };
}
function createDateTimeSlots(isoDateTime, calendar) {
  return pluckProps(timeFieldNamesAsc, isoDateTime, createDateSlots(isoDateTime, calendar));
}
function createDateSlots(isoDate, calendar) {
  return pluckProps(calendarDateFieldNamesAsc, isoDate, {
    calendar
  });
}
function roundToMinute(offsetNano) {
  return roundNumberToInc(offsetNano, nanoInMinute2, 7);
}
var zonedEpochSlotsToIso = /* @__PURE__ */ memoize(_zonedEpochSlotsToIso, WeakMap);
function _zonedEpochSlotsToIso(slots) {
  const { epochNanoseconds, timeZone } = slots;
  const offsetNanoseconds4 = timeZone.B(epochNanoseconds);
  return {
    ...epochNanoToIsoDateTime(epochNanoseconds + BigInt(offsetNanoseconds4)),
    offsetNanoseconds: offsetNanoseconds4
  };
}
function getMatchingInstantFor(timeZone, isoDateTime, offsetNano, offsetDisambig = 0, epochDisambig = 0, epochFuzzy, hasZ) {
  if (void 0 !== offsetNano && 1 === offsetDisambig && (1 === offsetDisambig || hasZ)) {
    return isoDateTimeAndOffsetToEpochNano(isoDateTime, offsetNano);
  }
  2 !== offsetDisambig && 0 !== offsetDisambig || checkIsoDateInBounds(isoDateTime, 0);
  const possibleEpochNanos = timeZone.R(isoDateTime);
  if (void 0 !== offsetNano && 3 !== offsetDisambig) {
    const matchingEpochNano = ((possibleEpochNanos2, isoDateTime2, offsetNano2, fuzzy) => {
      const zonedEpochNano = isoDateTimeToEpochNano(isoDateTime2);
      fuzzy && (offsetNano2 = roundToMinute(offsetNano2));
      for (const possibleEpochNano of possibleEpochNanos2) {
        let possibleOffsetNano = Number(zonedEpochNano - possibleEpochNano);
        if (fuzzy && (possibleOffsetNano = roundToMinute(possibleOffsetNano)), possibleOffsetNano === offsetNano2) {
          return possibleEpochNano;
        }
      }
    })(possibleEpochNanos, isoDateTime, offsetNano, epochFuzzy);
    if (void 0 !== matchingEpochNano) {
      return matchingEpochNano;
    }
    0 === offsetDisambig && throwRangeError("Invalid TimeZone offset");
  }
  return hasZ ? isoDateTimeToEpochNano(isoDateTime) : getSingleInstantFor(timeZone, isoDateTime, epochDisambig, possibleEpochNanos);
}
function getSingleInstantFor(timeZone, isoDateTime, disambig = 0, possibleEpochNanos = timeZone.R(isoDateTime)) {
  if (1 === possibleEpochNanos.length) {
    return possibleEpochNanos[0];
  }
  if (1 === disambig && throwRangeError("Ambiguous offset"), possibleEpochNanos.length) {
    return possibleEpochNanos[3 === disambig ? 1 : 0];
  }
  const zonedEpochNano = isoDateTimeToEpochNano(isoDateTime);
  const gapNano = ((timeZone2, zonedEpochNano2) => {
    const startOffsetNano = timeZone2.B(zonedEpochNano2 - bigNanoInUtcDay);
    return ((gapNano2) => (gapNano2 > nanoInUtcDay && throwRangeError("Out-of-bounds TimeZone gap"), gapNano2))(timeZone2.B(zonedEpochNano2 + bigNanoInUtcDay) - startOffsetNano);
  })(timeZone, zonedEpochNano);
  const shiftedIsoDateTime = epochNanoToIsoDateTime(zonedEpochNano + BigInt(gapNano * (2 === disambig ? -1 : 1)));
  return (possibleEpochNanos = timeZone.R(shiftedIsoDateTime))[2 === disambig ? 0 : possibleEpochNanos.length - 1];
}
var maxDurationSeconds = 2 ** 53;
var offsetRegExp = /* @__PURE__ */ createRegExp("([+-])(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?");
function parseOffsetNano(s2) {
  const offsetNano = parseOffsetNanoMaybe(s2);
  return void 0 === offsetNano && throwRangeError(failedParse(s2)), offsetNano;
}
function parseOffsetNanoMaybe(s2, onlyHourMinute) {
  const parts = offsetRegExp.exec(s2);
  if (parts && ((s3) => ((s4) => {
    "T" !== s4[0] && "t" !== s4[0] || (s4 = s4.slice(1));
    const fractionIndex = s4.search(/[.,]/);
    const main = fractionIndex < 0 ? s4 : s4.slice(0, fractionIndex);
    const parts2 = main.split(":");
    return 1 === parts2.length ? /^(?:\d{2}|\d{4}|\d{6})$/i.test(main) : (2 === parts2.length || 3 === parts2.length) && parts2.every((part) => 2 === part.length && /^\d{2}$/i.test(part));
  })(s3.slice(1)))(parts[0])) {
    return ((parts2, onlyHourMinute2) => {
      const firstSubMinutePart = parts2[4] || parts2[5];
      onlyHourMinute2 && firstSubMinutePart && throwRangeError(invalidSubstring(firstSubMinutePart));
      const offsetNanoPos = parseInt0(parts2[2]) * nanoInHour2 + parseInt0(parts2[3]) * nanoInMinute2 + parseInt0(parts2[4]) * nanoInSec2 + parseSubsecNano(parts2[5] || "");
      return offsetNano = offsetNanoPos * parseSign(parts2[1]), Math.abs(offsetNano) >= nanoInUtcDay && throwRangeError("Out-of-bounds offset"), offsetNano;
      var offsetNano;
    })(parts, onlyHourMinute);
  }
}
var dateFieldRefiners = {
  era: toString,
  month: toPositiveIntegerWithTruncation,
  monthCode(monthCode, fieldName) {
    return requireString(toPrimitiveWithStringHint(monthCode), fieldName);
  },
  day: toPositiveIntegerWithTruncation
};
var timeFieldRefiners = /* @__PURE__ */ zipPropsConst(timeFieldNamesAsc, toIntegerWithTrunc);
var dateTimeFieldRefiners = /* @__PURE__ */ Object.assign({}, dateFieldRefiners, timeFieldRefiners);
var zonedDateTimeFieldRefiners = {
  offset(offsetString) {
    return parseOffsetNano(requireString(toPrimitiveWithStringHint(offsetString)));
  },
  ...dateTimeFieldRefiners
};
function refineEpochDisambigOptions(options) {
  return coerceEpochDisambig(normalizeOptions(options));
}
var RawDateTimeFormat = Intl.DateTimeFormat;
function formatEpochMilliToPartsRecord(intlFormat, epochMilli) {
  epochMilli < -864e13 && throwRangeError(outOfBoundsDate);
  const parts = intlFormat.formatToParts(epochMilli);
  const hash = {};
  for (const part of parts) {
    hash[part.type] = part.value;
  }
  return hash;
}
var timeZonePeriodDaysByName = {
  "El_Aaiun": 17,
  "Tucuman": 12,
  "Tirane": 11,
  "Riga": 10,
  "Simferopol": 9,
  "Vienna": 9,
  "Tunis": 8,
  "Boa_Vista": 6,
  "Fortaleza": 6,
  "Maceio": 6,
  "Noronha": 6,
  "Recife": 6,
  "Gaza": 6,
  "Hebron": 6,
  "DeNoronha": 6
};
var minPossibleTransitionSec = -388152e4;
function formatInstantIsoAuto(instantSlots) {
  return formatIsoDateTimeFields(epochNanoToIsoDateTime(instantSlots.epochNanoseconds), void 0) + "Z";
}
function formatZonedDateTimeIsoAuto(zonedDateTimeSlots) {
  const calendar = zonedDateTimeSlots.calendar;
  const timeZone = zonedDateTimeSlots.timeZone;
  const offsetNano = timeZone.B(zonedDateTimeSlots.epochNanoseconds);
  return formatIsoDateTimeFields(epochNanoToIsoDateTime(zonedDateTimeSlots.epochNanoseconds + BigInt(offsetNano)), void 0) + formatOffsetNano(roundToMinute(offsetNano)) + formatTimeZone(timeZone.id, 0) + (calendar === isoCalendarImpl ? "" : formatCalendarId(getCalendarSlotId(calendar), 0));
}
function formatDateTimeIsoAuto(isoDateTimeSlots) {
  const calendar = isoDateTimeSlots.calendar;
  return formatIsoDateTimeFields(isoDateTimeSlots, void 0) + (calendar === isoCalendarImpl ? "" : formatCalendarId(getCalendarSlotId(calendar), 0));
}
function formatIsoDateTimeFields(isoDateTime, subsecDigits) {
  return formatIsoDateFields(isoDateTime) + "T" + formatTimeFields(isoDateTime, subsecDigits);
}
function formatIsoDateFields(isoDate) {
  return formatIsoYearMonthFields(isoDate) + "-" + padNumber2(isoDate.day);
}
function formatIsoYearMonthFields(isoDate) {
  const { year } = isoDate;
  return (year < 0 || year > 9999 ? getSignStr(year) + padNumber(6, Math.abs(year)) : padNumber(4, year)) + "-" + padNumber2(isoDate.month);
}
function formatTimeFields(timeFields, subsecDigits) {
  const parts = [padNumber2(timeFields.hour), padNumber2(timeFields.minute)];
  return -1 !== subsecDigits && parts.push(padNumber2(timeFields.second) + ((millisecond, microsecond, nanosecond, subsecDigits2) => formatSubsecNano(millisecond * nanoInMilli2 + microsecond * nanoInMicro2 + nanosecond, subsecDigits2))(timeFields.millisecond, timeFields.microsecond, timeFields.nanosecond, subsecDigits)), parts.join(":");
}
function formatOffsetNano(offsetNano, offsetDisplay = 0) {
  if (1 === offsetDisplay) {
    return "";
  }
  const [hour, nanoRemainder0] = divModFloor(Math.abs(offsetNano), nanoInHour2);
  const [minute, nanoRemainder1] = divModFloor(nanoRemainder0, nanoInMinute2);
  const [second, nanoRemainder2] = divModFloor(nanoRemainder1, nanoInSec2);
  return getSignStr(offsetNano) + padNumber2(hour) + ":" + padNumber2(minute) + (second || nanoRemainder2 ? ":" + padNumber2(second) + formatSubsecNano(nanoRemainder2) : "");
}
function formatTimeZone(timeZoneId, timeZoneDisplay) {
  return 1 !== timeZoneDisplay ? "[" + (2 === timeZoneDisplay ? "!" : "") + timeZoneId + "]" : "";
}
function formatCalendarId(calendarId, isCritical) {
  return "[" + (isCritical ? "!" : "") + "u-ca=" + calendarId + "]";
}
var trailingZerosRE = /0+$/;
function formatSubsecNano(totalNano, subsecDigits) {
  let s2 = padNumber(9, totalNano);
  return s2 = void 0 === subsecDigits ? s2.replace(trailingZerosRE, "") : s2.slice(0, subsecDigits), s2 ? "." + s2 : "";
}
function getSignStr(num) {
  return num < 0 ? "-" : "+";
}
var icuRegExp = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/;
var badCharactersRegExp = /[^\w\/:+-]+/;
function refineTimeZoneId(rawId) {
  return resolveTimeZoneId(requireString(rawId));
}
function resolveTimeZoneId(rawId) {
  return resolveTimeZoneRecord(rawId).id;
}
function resolveTimeZoneRecord(rawId) {
  const upperRawId = rawId.toUpperCase();
  const offsetRecord = ((upperRawId2) => {
    const offsetNano = parseOffsetNanoMaybe(upperRawId2, 1);
    if (void 0 !== offsetNano) {
      return {
        id: formatOffsetNano(offsetNano),
        Z: offsetNano,
        m: offsetNano
      };
    }
  })(upperRawId);
  if (offsetRecord) {
    return {
      kind: "fixed",
      ...offsetRecord
    };
  }
  const normId = "UTC" === upperRawId ? "UTC" : ((rawId2) => (badCharactersRegExp.test(rawId2) && throwRangeError(invalidTimeZone(rawId2)), icuRegExp.test(rawId2) && throwRangeError("Forbidden ICU TimeZone"), rawId2.toLowerCase().split("/").map((part, partI) => (part.length <= 3 || /\d/.test(part)) && !/etc|yap/.test(part) ? part.toUpperCase() : part.replace(/baja|dumont|[a-z]+/g, (a3, i3) => a3.length <= 2 && !partI || "in" === a3 || "chat" === a3 ? a3.toUpperCase() : a3.length > 2 || !i3 ? capitalize(a3).replace(/island|noronha|murdo|rivadavia|urville/, capitalize) : a3)).join("/")))(rawId);
  return queryNamedTimeZoneRecord(normId);
}
var queryNamedTimeZoneRecord = /* @__PURE__ */ memoize((normId) => {
  if ("UTC" === normId) {
    return {
      kind: "utc",
      id: normId,
      m: normId
    };
  }
  const upperNormId = normId.toUpperCase();
  const format = queryTimeZoneIntlFormat(upperNormId);
  return {
    kind: "named",
    id: normId,
    format,
    m: format.resolvedOptions().timeZone
  };
});
var queryTimeZoneIntlFormat = /* @__PURE__ */ memoize((upperNormId) => new RawDateTimeFormat("en-u-hc-h23", {
  calendar: "iso8601",
  timeZone: upperNormId,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}));
function queryTimeZone(rawTimeZoneId) {
  const record = resolveTimeZoneRecord(rawTimeZoneId);
  return queryTimeZoneRecord(record.id, record);
}
var queryTimeZoneRecord = /* @__PURE__ */ memoize((normTimeZoneId, record) => "named" === record.kind ? new IntlTimeZone(normTimeZoneId, record.m, record.format) : new FixedTimeZone(normTimeZoneId, record.m, "fixed" === record.kind ? record.Z : 0));
var FixedTimeZone = class {
  constructor(id, compareKey, offsetNano) {
    this.id = id, this.m = compareKey, this.Z = offsetNano;
  }
  B() {
    return this.Z;
  }
  R(isoDateTime) {
    return [isoDateTimeAndOffsetToEpochNano(isoDateTime, this.Z)];
  }
  C() {
  }
};
var IntlTimeZone = class {
  constructor(id, compareKey, format) {
    this.id = id, this.m = compareKey, this.oe = ((computeOffsetSec, periodDays) => {
      const getSample = memoize(computeOffsetSec);
      const getSplit = memoize(createSplitTuple);
      const periodSec = 86400 * periodDays;
      function getOffsetSec(epochSec) {
        const [startEpochSec, endEpochSec] = computePeriod(epochSec, periodSec);
        const clampedStartEpochSec = clampIntlSampleEpochSec(startEpochSec);
        const clampedEndEpochSec = clampIntlSampleEpochSec(endEpochSec);
        const startOffsetSec = getSample(clampedStartEpochSec);
        const endOffsetSec = getSample(clampedEndEpochSec);
        return startOffsetSec === endOffsetSec ? startOffsetSec : pinch(getSplit(clampedStartEpochSec, clampedEndEpochSec), startOffsetSec, endOffsetSec, epochSec);
      }
      function pinch(split, startOffsetSec, endOffsetSec, forEpochSec) {
        let offsetSec;
        let splitDurSec;
        for (; (void 0 === forEpochSec || void 0 === (offsetSec = forEpochSec < split[0] ? startOffsetSec : forEpochSec >= split[1] ? endOffsetSec : void 0)) && (splitDurSec = split[1] - split[0]); ) {
          const middleEpochSec = split[0] + Math.floor(splitDurSec / 2);
          computeOffsetSec(middleEpochSec) === endOffsetSec ? split[1] = middleEpochSec : split[0] = middleEpochSec + 1;
        }
        return offsetSec;
      }
      return {
        Ae(zonedEpochSec) {
          const wideOffsetSec0 = getOffsetSec(zonedEpochSec - 86400);
          const wideOffsetSec1 = getOffsetSec(zonedEpochSec + 86400);
          const wideUtcEpochSec0 = zonedEpochSec - wideOffsetSec0;
          const wideUtcEpochSec1 = zonedEpochSec - wideOffsetSec1;
          if (wideOffsetSec0 === wideOffsetSec1) {
            return [wideUtcEpochSec0];
          }
          const narrowOffsetSec0 = getOffsetSec(wideUtcEpochSec0);
          return narrowOffsetSec0 === getOffsetSec(wideUtcEpochSec1) ? [zonedEpochSec - narrowOffsetSec0] : wideOffsetSec0 > wideOffsetSec1 ? [wideUtcEpochSec0, wideUtcEpochSec1] : [];
        },
        ze: getOffsetSec,
        C: function getTransition(epochSec, direction) {
          if (direction > 0 && epochSec >= 864e10) {
            return;
          }
          if (direction < 0) {
            if (epochSec <= minPossibleTransitionSec) {
              return;
            }
            const lookaheadEpochSec = getCurrentEpochSec() + 94867200;
            if (epochSec > lookaheadEpochSec) {
              return getTransition(lookaheadEpochSec, -1);
            }
          }
          const searchEpochSec = direction > 0 ? Math.max(epochSec, minPossibleTransitionSec) : epochSec;
          let [startEpochSec, endEpochSec] = computePeriod(searchEpochSec, periodSec);
          const inc = periodSec * direction;
          const searchLimit = direction > 0 ? Math.max(epochSec, getCurrentEpochSec()) + 94867200 : minPossibleTransitionSec;
          const inBounds = () => direction < 0 ? endEpochSec > searchLimit : startEpochSec < searchLimit;
          for (; inBounds(); ) {
            const clampedStartEpochSec = clampIntlSampleEpochSec(startEpochSec);
            const clampedEndEpochSec = clampIntlSampleEpochSec(endEpochSec);
            const startOffsetSec = getSample(clampedStartEpochSec);
            const endOffsetSec = getSample(clampedEndEpochSec);
            if (startOffsetSec !== endOffsetSec) {
              const split = getSplit(clampedStartEpochSec, clampedEndEpochSec);
              pinch(split, startOffsetSec, endOffsetSec);
              const transitionEpochSec = split[0];
              if ((compareNumbers(transitionEpochSec, epochSec) || 1) === direction) {
                return transitionEpochSec;
              }
            }
            startEpochSec += inc, endEpochSec += inc;
          }
        }
      };
    })(/* @__PURE__ */ ((format2) => (epochSec) => {
      const intlParts = formatEpochMilliToPartsRecord(format2, 1e3 * epochSec);
      return 86400 * isoPartsToEpochDays(((intlParts2) => {
        const relatedYear = intlParts2.relatedYear;
        if (void 0 !== relatedYear) {
          return parseInt(relatedYear);
        }
        const year = parseInt(intlParts2.year);
        return void 0 !== intlParts2.era && "bce" === normalizeEraName(intlParts2.era) ? 1 - year : year;
      })(intlParts), parseInt(intlParts.month), parseInt(intlParts.day)) + 3600 * parseInt(intlParts.hour) + 60 * parseInt(intlParts.minute) + parseInt(intlParts.second) - epochSec;
    })(format), ((timeZoneId) => {
      const timeZoneName = timeZoneId.split("/").pop();
      return timeZonePeriodDaysByName[timeZoneName] || 60;
    })(id));
  }
  B(epochNano) {
    return this.oe.ze(((epochNano2) => epochNanoToSecMod(epochNano2)[0])(epochNano)) * nanoInSec2;
  }
  R(isoDateTime) {
    const zonedEpochSec = 86400 * isoDateToEpochDays(isoDateTime) + timeFieldsToSec(isoDateTime);
    const subsecNano = timeFieldsToSubsecNano(isoDateTime);
    return this.oe.Ae(zonedEpochSec).map((epochSec) => checkEpochNanoInBounds(BigInt(epochSec) * bigNanoInSec + BigInt(subsecNano)));
  }
  C(epochNano, direction) {
    const [epochSec, subsecNano] = epochNanoToSecMod(epochNano);
    const resEpochSec = this.oe.C(epochSec + (direction > 0 || subsecNano ? 1 : 0), direction);
    if (void 0 !== resEpochSec) {
      return BigInt(resEpochSec) * bigNanoInSec;
    }
  }
};
function getCurrentEpochSec() {
  return Math.floor(Date.now() / 1e3);
}
function createSplitTuple(startEpochSec, endEpochSec) {
  return [startEpochSec, endEpochSec];
}
function computePeriod(epochSec, periodSec) {
  const startEpochSec = Math.floor(epochSec / periodSec) * periodSec;
  return [startEpochSec, startEpochSec + periodSec];
}
function clampIntlSampleEpochSec(epochSec) {
  return constrainToRange2(epochSec, -1e10, 864e10);
}
function timeRegExpStr(separatorIndex) {
  return `(\\d{2})(?:(:?)(\\d{2})(?:\\${separatorIndex}(\\d{2})(?:[.,](\\d{1,9}))?)?)?`;
}
var dateTimeRegExpStr = "(?:(?:([+-])(\\d{6}))|(\\d{4}))(-?)(\\d{2})\\4(\\d{2})(?:[T ]" + timeRegExpStr(8) + "(Z|([+-])" + timeRegExpStr(15) + ")?)?";
var dateTimeRegExp = /* @__PURE__ */ createRegExp(dateTimeRegExpStr + "((?:\\[(!?)([^\\]]*)\\]){0,9})");
var timeRegExp = /* @__PURE__ */ createRegExp("T?" + timeRegExpStr(2) + `(([+-])${timeRegExpStr(9)})?((?:\\[(!?)([^\\]]*)\\]){0,9})`);
function instantToZonedDateTime(instantSlots, timeZone, calendar) {
  return createZonedEpochNanoSlots(instantSlots.epochNanoseconds, timeZone, calendar);
}
function dateTimeToZonedDateTime(plainDateTimeSlots, timeZone, epochDisambig) {
  return createZonedEpochNanoSlots(checkEpochNanoInBounds(getSingleInstantFor(timeZone, plainDateTimeSlots, epochDisambig)), timeZone, plainDateTimeSlots.calendar);
}
function epochMilliToInstant(epochMilli) {
  return createEpochNanoSlots(checkEpochNanoInBounds(BigInt(toStrictInteger(epochMilli)) * bigNanoInMilli));
}
function createOptionsTransformer(shapeFieldNames, invalidShapeFieldNames, ignoredFieldNames, defaultShapeFields, dateStyleReplacementFields) {
  const shapeFieldNameSet = new Set(shapeFieldNames);
  const invalidShapeFieldNameSet = new Set(invalidShapeFieldNames);
  const ignoredFieldNameSet = new Set(ignoredFieldNames);
  return (options, allowPartialOverlap) => {
    let dateStyle;
    let timeStyle;
    const granularShapeFields = {};
    const modifierFields = {};
    const otherFields = {};
    let hasInvalidGranularShapeFields = 0;
    let hasInvalidStyleFields = 0;
    for (const name of Object.keys(options)) {
      const value = options[name];
      void 0 === value || ignoredFieldNameSet.has(name) || (shapeFieldNameSet.has(name) ? "dateStyle" === name ? dateStyle = value : "timeStyle" === name ? timeStyle = value : granularShapeFields[name] = value : "era" === name ? modifierFields[name] = value : invalidShapeFieldNameSet.has(name) ? "dateStyle" === name || "timeStyle" === name ? hasInvalidStyleFields = 1 : hasInvalidGranularShapeFields = 1 : otherFields[name] = value);
    }
    const hasDateStyle = void 0 !== dateStyle;
    const hasTimeStyle = void 0 !== timeStyle;
    const hasAnyStyle = hasDateStyle || hasTimeStyle;
    const hasGranularShapeFields = Object.keys(granularShapeFields).length > 0;
    const hasInvalids = hasInvalidGranularShapeFields || hasInvalidStyleFields;
    const hasShapeFields = hasGranularShapeFields || hasDateStyle || hasTimeStyle;
    const hasModifierFields = Object.keys(modifierFields).length > 0;
    (!allowPartialOverlap && hasInvalids || allowPartialOverlap && hasInvalids && !hasShapeFields || hasAnyStyle && (hasGranularShapeFields || hasModifierFields || hasInvalidGranularShapeFields)) && throwTypeError("Invalid formatting options");
    const transformedOptions = {};
    return hasAnyStyle || hasShapeFields || Object.assign(transformedOptions, defaultShapeFields), Object.assign(transformedOptions, granularShapeFields, modifierFields, otherFields), hasDateStyle && (dateStyleReplacementFields ? Object.assign(transformedOptions, dateStyleReplacementFields[dateStyle]) : transformedOptions.dateStyle = dateStyle), hasTimeStyle && (transformedOptions.timeStyle = timeStyle), transformedOptions;
  };
}
var dateDefaultShapeFields = {
  year: "numeric",
  month: "numeric",
  day: "numeric"
};
var timeDefaultShapeFields = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};
var dateTimeDefaultShapeFields = /* @__PURE__ */ Object.assign({}, dateDefaultShapeFields, timeDefaultShapeFields);
var dateShapeFieldNames = ["weekday", "year", "month", "day", "dateStyle"];
var timeShapeFieldNames = ["dayPeriod", "hour", "minute", "second", "fractionalSecondDigits", "timeStyle"];
var dateTimeShapeFieldNames = /* @__PURE__ */ dateShapeFieldNames.concat(timeShapeFieldNames);
var transformZonedOptions = /* @__PURE__ */ createOptionsTransformer(dateTimeShapeFieldNames, [], [], {
  ...dateTimeDefaultShapeFields,
  timeZoneName: "short"
});

// node_modules/temporal-polyfill/chunks/apiHelpers.js
var PlainYearMonthBranding = "PlainYearMonth";
var PlainMonthDayBranding = "PlainMonthDay";
var PlainDateBranding = "PlainDate";
var PlainDateTimeBranding = "PlainDateTime";
var PlainTimeBranding = "PlainTime";
var ZonedDateTimeBranding = "ZonedDateTime";
var InstantBranding = "Instant";
var DurationBranding = "Duration";
var CalendarBranding = "Calendar";
function defineTemporalClass(branding, cls, getSlots, ...getterMaps) {
  return Object.defineProperties(cls, createNameDescriptors(branding)), Object.defineProperties(cls.prototype, createStringTagDescriptors("Temporal." + branding)), Object.defineProperties(cls.prototype, mapProps((getter) => ({
    get() {
      return getter(getSlots(this));
    },
    configurable: 1
  }), Object.assign({}, ...getterMaps))), cls;
}
var attachDebugString = "noop" === noop.name ? (instance) => {
  Object.defineProperty(instance, "_str_", {
    value: instance.toJSON()
  });
} : noop;
function invalidRecordType() {
  throwTypeError(invalidCallingContext);
}
function forbiddenValueOf2() {
  throwTypeError(forbiddenValueOf);
}
var dateFieldGetters$1 = {
  era(slots) {
    return computeCalendarEraFields(slots.calendar, slots).era;
  },
  eraYear(slots) {
    return computeCalendarEraFields(slots.calendar, slots).eraYear;
  },
  year(slots) {
    return computeCalendarDateFields(slots.calendar, slots).year;
  },
  month(slots) {
    return computeCalendarDateFields(slots.calendar, slots).month;
  },
  monthCode(slots) {
    return computeCalendarMonthCode(slots.calendar, slots);
  },
  day(slots) {
    return computeCalendarDateFields(slots.calendar, slots).day;
  }
};
function createNativeGetters(shimGetters) {
  return createPropGetters(Object.keys(shimGetters));
}
var timeGetters2 = /* @__PURE__ */ createNativeGetters(timeGetters);
var dateFieldGetters = /* @__PURE__ */ createNativeGetters(dateFieldGetters$1);

// node_modules/temporal-polyfill/chunks/funcApi.js
var PlainYearMonthRecordBranding = `${PlainYearMonthBranding}Record`;
var PlainMonthDayRecordBranding = `${PlainMonthDayBranding}Record`;
var PlainDateRecordBranding = `${PlainDateBranding}Record`;
var PlainDateTimeRecordBranding = `${PlainDateTimeBranding}Record`;
var PlainTimeRecordBranding = `${PlainTimeBranding}Record`;
var ZonedDateTimeRecordBranding = `${ZonedDateTimeBranding}Record`;
var InstantRecordBranding = `${InstantBranding}Record`;
var DurationRecordBranding = `${DurationBranding}Record`;
var CalendarRecordBranding = `${CalendarBranding}Record`;
var calendarMap = /* @__PURE__ */ new WeakMap();
var instantMap = /* @__PURE__ */ new WeakMap();
var zonedDateTimeMap = /* @__PURE__ */ new WeakMap();
var plainDateTimeMap = /* @__PURE__ */ new WeakMap();
function getCalendarSlots(record) {
  return getCalendarSlotsIfPresent(record) || invalidRecordType();
}
function getCalendarSlotsIfPresent(record) {
  return calendarMap.get(record);
}
function getInstantSlots(record) {
  return getInstantSlotsIfPresent(record) || invalidRecordType();
}
function getInstantSlotsIfPresent(record) {
  return instantMap.get(record);
}
function setInstantSlots(instance, slots) {
  instantMap.set(instance, slots);
}
function getZonedDateTimeSlots(record) {
  return getZonedDateTimeSlotsIfPresent(record) || invalidRecordType();
}
function getZonedDateTimeSlotsIfPresent(record) {
  return zonedDateTimeMap.get(record);
}
function setZonedDateTimeSlots(instance, slots) {
  zonedDateTimeMap.set(instance, slots);
}
function getPlainDateTimeSlots(record) {
  return getPlainDateTimeSlotsIfPresent(record) || invalidRecordType();
}
function getPlainDateTimeSlotsIfPresent(record) {
  return plainDateTimeMap.get(record);
}
function setPlainDateTimeSlots(instance, slots) {
  plainDateTimeMap.set(instance, slots);
}
function getCalendarRecordId(record) {
  return getCalendarSlots(record).id;
}
function getCalendarRecordImplCreator(record) {
  const getImpl = getCalendarSlots(record).xe;
  return getImpl || throwRangeError(exoticCalendarRequired(getCalendarRecordId(record), "getExotic or getAny")), getImpl;
}

// node_modules/temporal-polyfill/chunks/funcApi-native.js
function refineNativeCalendarArgMaybe(calendarRecord) {
  if (void 0 !== calendarRecord) {
    return getValidatedCalendarId(calendarRecord);
  }
}
function getValidatedCalendarId(record) {
  return getCalendarRecordImplCreator(record), getCalendarRecordId(record);
}
var getNativePlainDateTime = getPlainDateTimeSlots;
var NativePlainDateTimeRecord = /* @__PURE__ */ defineTemporalClass(PlainDateTimeRecordBranding, class {
  get calendarId() {
    return getNativePlainDateTime(this).calendarId;
  }
  toJSON() {
    return getNativePlainDateTime(this).toJSON();
  }
  valueOf() {
    return getNativePlainDateTime(this).valueOf();
  }
}, getNativePlainDateTime, dateFieldGetters, timeGetters2);
function createNativePlainDateTimeRecord(native) {
  const instance = Object.create(NativePlainDateTimeRecord.prototype);
  return setPlainDateTimeSlots(instance, native), attachDebugString(instance), instance;
}
function create$5(isoYear, isoMonth, isoDay, hour, minute, second, millisecond, microsecond, nanosecond, calendar) {
  return createNativePlainDateTimeRecord(new NativeTemporal.PlainDateTime(isoYear, isoMonth, isoDay, hour, minute, second, millisecond, microsecond, nanosecond, refineNativeCalendarArgMaybe(calendar)));
}
function toZonedDateTime$1(record, timeZoneId, options) {
  return createNativeZonedDateTimeRecord(getNativePlainDateTime(record).toZonedDateTime(timeZoneId, options));
}
var getNativeZonedDateTime = getZonedDateTimeSlots;
var NativeZonedDateTimeRecord = /* @__PURE__ */ defineTemporalClass(ZonedDateTimeRecordBranding, class {
  get calendarId() {
    return getNativeZonedDateTime(this).calendarId;
  }
  get timeZoneId() {
    return getNativeZonedDateTime(this).timeZoneId;
  }
  get epochMilliseconds() {
    return getNativeZonedDateTime(this).epochMilliseconds;
  }
  get epochNanoseconds() {
    return getNativeZonedDateTime(this).epochNanoseconds;
  }
  toJSON() {
    return getNativeZonedDateTime(this).toJSON();
  }
  valueOf() {
    return getNativeZonedDateTime(this).valueOf();
  }
}, getNativeZonedDateTime, dateFieldGetters, timeGetters2);
function createNativeZonedDateTimeRecord(native) {
  const instance = Object.create(NativeZonedDateTimeRecord.prototype);
  return setZonedDateTimeSlots(instance, native), attachDebugString(instance), instance;
}
function offsetNanoseconds(record) {
  return getNativeZonedDateTime(record).offsetNanoseconds;
}
var getNativeInstant = getInstantSlots;
var NativeInstantRecord = /* @__PURE__ */ defineTemporalClass(InstantRecordBranding, class {
  get epochMilliseconds() {
    return getNativeInstant(this).epochMilliseconds;
  }
  get epochNanoseconds() {
    return getNativeInstant(this).epochNanoseconds;
  }
  toJSON() {
    return getNativeInstant(this).toJSON();
  }
  valueOf() {
    return getNativeInstant(this).valueOf();
  }
});
function createNativeInstantRecord(native) {
  const instance = Object.create(NativeInstantRecord.prototype);
  return setInstantSlots(instance, native), attachDebugString(instance), instance;
}
function fromEpochMilliseconds(epochMilliseconds) {
  return createNativeInstantRecord(NativeTemporal.Instant.fromEpochMilliseconds(epochMilliseconds));
}
function toZonedDateTimeISO(record, timeZoneId) {
  return createNativeZonedDateTimeRecord(getNativeInstant(record).toZonedDateTimeISO(timeZoneId));
}

// node_modules/temporal-polyfill/chunks/funcApi-shim.js
function refineShimCalendarArgMaybe(calendarRecord) {
  return void 0 === calendarRecord ? isoCalendarImpl : getCalendarRecordImpl(calendarRecord);
}
function getCalendarRecordImpl(record) {
  return getCalendarRecordImplCreator(record)();
}
var getShimPlainDateTimeSlots = getPlainDateTimeSlots;
var ShimPlainDateTimeRecord = /* @__PURE__ */ defineTemporalClass(PlainDateTimeRecordBranding, class {
  get calendarId() {
    return getCalendarSlotId(getShimPlainDateTimeSlots(this).calendar);
  }
  toJSON() {
    return formatDateTimeIsoAuto(getShimPlainDateTimeSlots(this));
  }
  valueOf() {
    return forbiddenValueOf2();
  }
}, getShimPlainDateTimeSlots, dateFieldGetters$1, timeGetters);
function createShimPlainDateTimeRecord(slots) {
  const instance = Object.create(ShimPlainDateTimeRecord.prototype);
  return setPlainDateTimeSlots(instance, slots), attachDebugString(instance), instance;
}
function create$52(isoYear, isoMonth, isoDay, hour = 0, minute = 0, second = 0, millisecond = 0, microsecond = 0, nanosecond = 0, calendar) {
  const fields = checkIsoDateTimeInBounds(validateIsoDateTimeFields(mapProps(toIntegerWithTrunc, {
    year: isoYear,
    month: isoMonth,
    day: isoDay,
    hour,
    minute,
    second,
    millisecond,
    microsecond,
    nanosecond
  })));
  const calendarImpl = refineShimCalendarArgMaybe(calendar);
  return createShimPlainDateTimeRecord(createDateTimeSlots(fields, calendarImpl));
}
function toZonedDateTime$12(record, timeZoneId, options) {
  return createShimZonedDateTimeRecord(dateTimeToZonedDateTime(getShimPlainDateTimeSlots(record), queryTimeZone(refineTimeZoneId(timeZoneId)), refineEpochDisambigOptions(options)));
}
var getShimZonedDateTimeSlots = getZonedDateTimeSlots;
var ShimZonedDateTimeRecord = /* @__PURE__ */ defineTemporalClass(ZonedDateTimeRecordBranding, class {
  get calendarId() {
    return getCalendarSlotId(getShimZonedDateTimeSlots(this).calendar);
  }
  get timeZoneId() {
    return getShimZonedDateTimeSlots(this).timeZone.id;
  }
  get epochMilliseconds() {
    return epochNanoToMilli(getShimZonedDateTimeSlots(this).epochNanoseconds);
  }
  get epochNanoseconds() {
    return getShimZonedDateTimeSlots(this).epochNanoseconds;
  }
  toJSON() {
    return formatZonedDateTimeIsoAuto(getShimZonedDateTimeSlots(this));
  }
  valueOf() {
    return forbiddenValueOf2();
  }
}, getShimZonedDateTimeIsoSlots, dateFieldGetters$1, timeGetters);
function createShimZonedDateTimeRecord(slots) {
  const instance = Object.create(ShimZonedDateTimeRecord.prototype);
  return setZonedDateTimeSlots(instance, slots), attachDebugString(instance), instance;
}
function getShimZonedDateTimeIsoSlots(record) {
  const slots = getShimZonedDateTimeSlots(record);
  return {
    ...zonedEpochSlotsToIso(slots),
    calendar: slots.calendar
  };
}
function offsetNanoseconds2(record) {
  return zonedEpochSlotsToIso(getShimZonedDateTimeSlots(record)).offsetNanoseconds;
}
var endOfHour2 = /* @__PURE__ */ alignedZonedTime((slots) => ({
  hour: slots.hour,
  minute: 0,
  second: 0,
  millisecond: 0,
  microsecond: 0,
  nanosecond: 0
}), nanoInHour2 - 1);
var endOfMinute2 = /* @__PURE__ */ alignedZonedTime((slots) => ({
  hour: slots.hour,
  minute: slots.minute,
  second: 0,
  millisecond: 0,
  microsecond: 0,
  nanosecond: 0
}), nanoInMinute2 - 1);
var endOfSecond2 = /* @__PURE__ */ alignedZonedTime((slots) => ({
  hour: slots.hour,
  minute: slots.minute,
  second: slots.second,
  millisecond: 0,
  microsecond: 0,
  nanosecond: 0
}), nanoInSec2 - 1);
var endOfMillisecond2 = /* @__PURE__ */ alignedZonedTime((slots) => ({
  hour: slots.hour,
  minute: slots.minute,
  second: slots.second,
  millisecond: slots.millisecond,
  microsecond: 0,
  nanosecond: 0
}), nanoInMilli2 - 1);
var endOfMicrosecond2 = /* @__PURE__ */ alignedZonedTime((slots) => ({
  hour: slots.hour,
  minute: slots.minute,
  second: slots.second,
  millisecond: slots.millisecond,
  microsecond: slots.microsecond,
  nanosecond: 0
}), nanoInMicro2 - 1);
function alignedZonedTime(computeAlignment, nanoDelta = 0) {
  return (record) => {
    const slots = getShimZonedDateTimeSlots(record);
    const { timeZone } = slots;
    const isoDateTime = zonedEpochSlotsToIso(slots);
    const alignedIsoDateTime = combineDateAndTime(isoDateTime, computeAlignment(isoDateTime));
    const epochNanoseconds = getMatchingInstantFor(timeZone, alignedIsoDateTime, isoDateTime.offsetNanoseconds, 2, 0, 1) + BigInt(nanoDelta);
    return createShimZonedDateTimeRecord({
      ...slots,
      epochNanoseconds: checkEpochNanoInBounds(epochNanoseconds)
    });
  };
}
var getShimInstantSlots = getInstantSlots;
var ShimInstantRecord = /* @__PURE__ */ defineTemporalClass(InstantRecordBranding, class {
  get epochMilliseconds() {
    return epochNanoToMilli(getShimInstantSlots(this).epochNanoseconds);
  }
  get epochNanoseconds() {
    return getShimInstantSlots(this).epochNanoseconds;
  }
  toJSON() {
    return formatInstantIsoAuto(getShimInstantSlots(this));
  }
  valueOf() {
    return forbiddenValueOf2();
  }
});
function createShimInstantRecord(slots) {
  const instance = Object.create(ShimInstantRecord.prototype);
  return setInstantSlots(instance, slots), attachDebugString(instance), instance;
}
function fromEpochMilliseconds2(epochMilliseconds) {
  return createShimInstantRecord(epochMilliToInstant(epochMilliseconds));
}
function toZonedDateTimeISO2(record, timeZoneId) {
  return createShimZonedDateTimeRecord(instantToZonedDateTime(getShimInstantSlots(record), queryTimeZone(refineTimeZoneId(timeZoneId))));
}

// node_modules/temporal-polyfill/fns/ZonedDateTime.js
var offsetNanoseconds3 = NativeTemporal ? offsetNanoseconds : offsetNanoseconds2;

// node_modules/temporal-polyfill/fns/PlainDateTime.js
var create = NativeTemporal ? create$5 : create$52;
var toZonedDateTime = NativeTemporal ? toZonedDateTime$1 : toZonedDateTime$12;

// node_modules/temporal-polyfill/fns/Instant.js
var fromEpochMilliseconds3 = NativeTemporal ? fromEpochMilliseconds : fromEpochMilliseconds2;
var toZonedDateTimeISO3 = NativeTemporal ? toZonedDateTimeISO : toZonedDateTimeISO2;

// node_modules/@full-ui/headless-calendar/index.js
function addWeeks3(m3, n2) {
  let a3 = dateToUtcArray(m3);
  a3[2] += n2 * 7;
  return arrayToUtcDate(a3);
}
function addDays3(m3, n2) {
  let a3 = dateToUtcArray(m3);
  a3[2] += n2;
  return arrayToUtcDate(a3);
}
function addMs(m3, n2) {
  let a3 = dateToUtcArray(m3);
  a3[6] += n2;
  return arrayToUtcDate(a3);
}
function diffWeeks4(m0, m1) {
  return diffDays4(m0, m1) / 7;
}
function diffDays4(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1e3 * 60 * 60 * 24);
}
function diffHours4(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1e3 * 60 * 60);
}
function diffMinutes4(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1e3 * 60);
}
function diffSeconds4(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / 1e3;
}
function diffDayAndTime(m0, m1) {
  let m0day = startOfDay4(m0);
  let m1day = startOfDay4(m1);
  return {
    years: 0,
    months: 0,
    days: Math.round(diffDays4(m0day, m1day)),
    milliseconds: m1.valueOf() - m1day.valueOf() - (m0.valueOf() - m0day.valueOf())
  };
}
function diffWholeWeeks(m0, m1) {
  let d3 = diffWholeDays(m0, m1);
  if (d3 !== null && d3 % 7 === 0) {
    return d3 / 7;
  }
  return null;
}
function diffWholeDays(m0, m1) {
  if (timeAsMs(m0) === timeAsMs(m1)) {
    return Math.round(diffDays4(m0, m1));
  }
  return null;
}
function startOfDay4(m3) {
  return arrayToUtcDate([
    m3.getUTCFullYear(),
    m3.getUTCMonth(),
    m3.getUTCDate()
  ]);
}
function startOfHour4(m3) {
  return arrayToUtcDate([
    m3.getUTCFullYear(),
    m3.getUTCMonth(),
    m3.getUTCDate(),
    m3.getUTCHours()
  ]);
}
function startOfMinute4(m3) {
  return arrayToUtcDate([
    m3.getUTCFullYear(),
    m3.getUTCMonth(),
    m3.getUTCDate(),
    m3.getUTCHours(),
    m3.getUTCMinutes()
  ]);
}
function startOfSecond4(m3) {
  return arrayToUtcDate([
    m3.getUTCFullYear(),
    m3.getUTCMonth(),
    m3.getUTCDate(),
    m3.getUTCHours(),
    m3.getUTCMinutes(),
    m3.getUTCSeconds()
  ]);
}
function weekOfYear3(marker, dow, doy) {
  let y3 = marker.getUTCFullYear();
  let w3 = weekOfGivenYear(marker, y3, dow, doy);
  if (w3 < 1) {
    return weekOfGivenYear(marker, y3 - 1, dow, doy);
  }
  let nextW = weekOfGivenYear(marker, y3 + 1, dow, doy);
  if (nextW >= 1) {
    return Math.min(w3, nextW);
  }
  return w3;
}
function weekOfGivenYear(marker, year, dow, doy) {
  let firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
  let dayStart = startOfDay4(marker);
  let days = Math.round(diffDays4(firstWeekStart, dayStart));
  return Math.floor(days / 7) + 1;
}
function firstWeekOffset(year, dow, doy) {
  let fwd = 7 + dow - doy;
  let fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
}
function dateToLocalArray(date) {
  return [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  ];
}
function arrayToLocalDate(a3) {
  return new Date(
    a3[0],
    a3[1] || 0,
    a3[2] == null ? 1 : a3[2],
    // day of month
    a3[3] || 0,
    a3[4] || 0,
    a3[5] || 0
  );
}
function dateToUtcArray(date) {
  return [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  ];
}
function arrayToUtcDate(a3) {
  if (a3.length === 1) {
    a3 = a3.concat([0]);
  }
  return new Date(Date.UTC(...a3));
}
function isValidDate(m3) {
  return !isNaN(m3.valueOf());
}
function timeAsMs(m3) {
  return m3.getUTCHours() * 1e3 * 60 * 60 + m3.getUTCMinutes() * 1e3 * 60 + m3.getUTCSeconds() * 1e3 + m3.getUTCMilliseconds();
}
var calendarSystemClassMap = {};
function registerCalendarSystem(name, theClass) {
  calendarSystemClassMap[name] = theClass;
}
function createCalendarSystem(name) {
  return new calendarSystemClassMap[name]();
}
var GregorianCalendarSystem = class {
  getMarkerYear(d3) {
    return d3.getUTCFullYear();
  }
  getMarkerMonth(d3) {
    return d3.getUTCMonth();
  }
  getMarkerDay(d3) {
    return d3.getUTCDate();
  }
  arrayToMarker(arr) {
    return arrayToUtcDate(arr);
  }
  markerToArray(marker) {
    return dateToUtcArray(marker);
  }
};
registerCalendarSystem("gregory", GregorianCalendarSystem);
function parseRange(input, dateEnv) {
  let start = null;
  let end = null;
  if (input.start) {
    start = dateEnv.createMarker(input.start);
  }
  if (input.end) {
    end = dateEnv.createMarker(input.end);
  }
  if (!start && !end) {
    return null;
  }
  if (start && end && end < start) {
    return null;
  }
  return { start, end };
}
function invertRanges(ranges, constraintRange) {
  let invertedRanges = [];
  let { start } = constraintRange;
  let i3;
  let dateRange;
  ranges.sort(compareRanges);
  for (i3 = 0; i3 < ranges.length; i3 += 1) {
    dateRange = ranges[i3];
    if (dateRange.start > start) {
      invertedRanges.push({ start, end: dateRange.start });
    }
    if (dateRange.end > start) {
      start = dateRange.end;
    }
  }
  if (start < constraintRange.end) {
    invertedRanges.push({ start, end: constraintRange.end });
  }
  return invertedRanges;
}
function compareRanges(range0, range1) {
  return range0.start.valueOf() - range1.start.valueOf();
}
function intersectRanges(range0, range1) {
  let { start, end } = range0;
  let newRange = null;
  if (range1.start !== null) {
    if (start === null) {
      start = range1.start;
    } else {
      start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
    }
  }
  if (range1.end != null) {
    if (end === null) {
      end = range1.end;
    } else {
      end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
    }
  }
  if (start === null || end === null || start < end) {
    newRange = { start, end };
  }
  return newRange;
}
function rangesIntersect(range0, range1) {
  return (range0.end === null || range1.start === null || range0.end > range1.start) && (range0.start === null || range1.end === null || range0.start < range1.end);
}
function rangeContainsMarker(range, date) {
  return (range.start === null || date >= range.start) && (range.end === null || date < range.end);
}
function constrainMarkerToRange(date, range) {
  if (range.start != null && date < range.start) {
    return range.start;
  }
  if (range.end != null && date >= range.end) {
    return new Date(range.end.valueOf() - 1);
  }
  return date;
}
function expandZonedInstant(dateInfo, calendarSystem) {
  let a3 = calendarSystem.markerToArray(dateInfo.marker);
  return {
    marker: dateInfo.marker,
    instantMs: dateInfo.instantMs,
    timeZoneOffset: (dateInfo.marker.valueOf() - dateInfo.instantMs) / 6e4,
    array: a3,
    year: a3[0],
    month: a3[1],
    day: a3[2],
    hour: a3[3],
    minute: a3[4],
    second: a3[5],
    millisecond: a3[6]
  };
}
function createVerboseFormattingArg(start, end, context) {
  let startInfo = expandZonedInstant(start, context.calendarSystem);
  let endInfo = end ? expandZonedInstant(end, context.calendarSystem) : null;
  return {
    date: startInfo,
    start: startInfo,
    end: endInfo,
    timeZone: context.timeZone,
    localeCodes: context.locale.codes
  };
}
function isInt(n2) {
  return n2 % 1 === 0;
}
function padStart(val, len) {
  let s2 = String(val);
  return "000".substr(0, len - s2.length) + s2;
}
var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function createDuration(input, unit) {
  if (typeof input === "string") {
    return parseString(input);
  }
  if (typeof input === "object" && input) {
    return parseObject(input);
  }
  if (typeof input === "number") {
    return parseObject({ [unit || "milliseconds"]: input });
  }
  return null;
}
function parseString(s2) {
  let m3 = PARSE_RE.exec(s2);
  if (m3) {
    let sign = m3[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: sign * (m3[2] ? parseInt(m3[2], 10) : 0),
      milliseconds: sign * ((m3[3] ? parseInt(m3[3], 10) : 0) * 60 * 60 * 1e3 + // hours
      (m3[4] ? parseInt(m3[4], 10) : 0) * 60 * 1e3 + // minutes
      (m3[5] ? parseInt(m3[5], 10) : 0) * 1e3 + // seconds
      (m3[6] ? parseInt(m3[6], 10) : 0))
    };
  }
  return null;
}
function parseObject(obj) {
  let duration = {
    years: obj.years || obj.year || 0,
    months: obj.months || obj.month || 0,
    days: obj.days || obj.day || 0,
    milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1e3 + // hours
    (obj.minutes || obj.minute || 0) * 60 * 1e3 + // minutes
    (obj.seconds || obj.second || 0) * 1e3 + // seconds
    (obj.milliseconds || obj.millisecond || obj.ms || 0)
    // ms
  };
  let weeks = obj.weeks || obj.week;
  if (weeks) {
    duration.days += weeks * 7;
    duration.specifiedWeeks = true;
  }
  return duration;
}
function durationsEqual(d0, d1) {
  return d0.years === d1.years && d0.months === d1.months && d0.days === d1.days && d0.milliseconds === d1.milliseconds;
}
function subtractDurations(d1, d0) {
  return {
    years: d1.years - d0.years,
    months: d1.months - d0.months,
    days: d1.days - d0.days,
    milliseconds: d1.milliseconds - d0.milliseconds
  };
}
function asRoughYears(dur) {
  return asRoughDays(dur) / 365;
}
function asRoughMonths(dur) {
  return asRoughDays(dur) / 30;
}
function asRoughDays(dur) {
  return asRoughMs(dur) / 864e5;
}
function asRoughMs(dur) {
  return dur.years * (365 * 864e5) + dur.months * (30 * 864e5) + dur.days * 864e5 + dur.milliseconds;
}
function greatestDurationDenominator(dur) {
  let ms = dur.milliseconds;
  if (ms) {
    if (ms % 1e3 !== 0) {
      return { unit: "millisecond", value: ms };
    }
    if (ms % (1e3 * 60) !== 0) {
      return { unit: "second", value: ms / 1e3 };
    }
    if (ms % (1e3 * 60 * 60) !== 0) {
      return { unit: "minute", value: ms / (1e3 * 60) };
    }
    if (ms) {
      return { unit: "hour", value: ms / (1e3 * 60 * 60) };
    }
  }
  if (dur.days) {
    if (dur.specifiedWeeks && dur.days % 7 === 0) {
      return { unit: "week", value: dur.days / 7 };
    }
    return { unit: "day", value: dur.days };
  }
  if (dur.months) {
    return { unit: "month", value: dur.months };
  }
  if (dur.years) {
    return { unit: "year", value: dur.years };
  }
  return { unit: "millisecond", value: 0 };
}
function buildIsoString(marker, timeZoneOffset, stripZeroTime = false) {
  let s2 = marker.toISOString();
  s2 = s2.replace(".000", "");
  if (stripZeroTime) {
    s2 = s2.replace("T00:00:00Z", "");
  }
  if (s2.length > 10) {
    if (timeZoneOffset == null) {
      s2 = s2.replace("Z", "");
    } else if (timeZoneOffset !== 0) {
      s2 = s2.replace("Z", formatTimeZoneOffset(timeZoneOffset, true));
    }
  }
  return s2;
}
function formatDayString(marker) {
  return marker.toISOString().replace(/T.*$/, "");
}
function formatTimeZoneOffset(minutes, doIso = false) {
  let sign = minutes < 0 ? "-" : "+";
  let abs = Math.abs(minutes);
  let hours = Math.floor(abs / 60);
  let mins = Math.round(abs % 60);
  if (doIso) {
    return `${sign + padStart(hours, 2)}:${padStart(mins, 2)}`;
  }
  return `GMT${sign}${hours}${mins ? `:${padStart(mins, 2)}` : ""}`;
}
function joinDateTimeFormatParts(parts) {
  let s2 = "";
  for (const part of parts) {
    s2 += part.value;
  }
  return s2;
}
var ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function parse(str) {
  let m3 = ISO_RE.exec(str);
  if (m3) {
    let marker = new Date(Date.UTC(Number(m3[1]), m3[3] ? Number(m3[3]) - 1 : 0, Number(m3[5] || 1), Number(m3[7] || 0), Number(m3[8] || 0), Number(m3[10] || 0), m3[12] ? Number(`0.${m3[12]}`) * 1e3 : 0));
    if (isValidDate(marker)) {
      let timeZoneOffset = null;
      if (m3[13]) {
        timeZoneOffset = (m3[15] === "-" ? -1 : 1) * (Number(m3[16] || 0) * 60 + Number(m3[18] || 0));
      }
      return {
        marker,
        isTimeUnspecified: !m3[6],
        timeZoneOffset
      };
    }
  }
  return null;
}
var DateEnv = class {
  constructor(settings) {
    this.timeZone = settings.timeZone;
    this.calendarSystem = createCalendarSystem(settings.calendarSystem);
    this.locale = settings.locale;
    this.weekDow = settings.locale.week.dow;
    this.weekDoy = settings.locale.week.doy;
    if (settings.weekNumberCalculation === "ISO") {
      this.weekDow = 1;
      this.weekDoy = 4;
    }
    if (typeof settings.firstDay === "number") {
      this.weekDow = settings.firstDay;
    }
    if (typeof settings.weekNumberCalculation === "function") {
      this.weekNumberFunc = settings.weekNumberCalculation;
    }
    this.weekTextLong = settings.weekTextLong;
    this.weekTextShort = settings.weekTextShort ?? settings.weekTextLong;
    this.cmdFormatter = settings.cmdFormatter;
  }
  // Creating / Parsing
  createMarker(input) {
    let meta = this.createMarkerMeta(input);
    if (meta === null) {
      return null;
    }
    return meta.marker;
  }
  createNowMarker() {
    return this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf());
  }
  createMarkerMeta(input) {
    if (typeof input === "string") {
      return this.parse(input);
    }
    let marker = null;
    let instantMs;
    if (typeof input === "number") {
      marker = this.timestampToMarker(input);
      instantMs = input;
    } else if (input instanceof Date) {
      input = input.valueOf();
      if (!isNaN(input)) {
        marker = this.timestampToMarker(input);
        instantMs = input;
      }
    } else if (Array.isArray(input)) {
      marker = arrayToUtcDate(input);
    }
    if (marker === null || !isValidDate(marker)) {
      return null;
    }
    return { marker, isTimeUnspecified: false, instantMs };
  }
  parse(s2) {
    let parts = parse(s2);
    if (parts === null) {
      return null;
    }
    let { marker } = parts;
    let instantMs;
    if (parts.timeZoneOffset !== null) {
      instantMs = marker.valueOf() - parts.timeZoneOffset * 60 * 1e3;
      marker = this.timestampToMarker(instantMs);
    }
    return { marker, isTimeUnspecified: parts.isTimeUnspecified, instantMs };
  }
  // Accessors
  getYear(marker) {
    return this.calendarSystem.getMarkerYear(marker);
  }
  getMonth(marker) {
    return this.calendarSystem.getMarkerMonth(marker);
  }
  getDay(marker) {
    return this.calendarSystem.getMarkerDay(marker);
  }
  // Adding / Subtracting
  add(marker, dur) {
    let a3 = this.calendarSystem.markerToArray(marker);
    a3[0] += dur.years;
    a3[1] += dur.months;
    a3[2] += dur.days;
    a3[6] += dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a3);
  }
  subtract(marker, dur) {
    let a3 = this.calendarSystem.markerToArray(marker);
    a3[0] -= dur.years;
    a3[1] -= dur.months;
    a3[2] -= dur.days;
    a3[6] -= dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a3);
  }
  addYears(marker, n2) {
    let a3 = this.calendarSystem.markerToArray(marker);
    a3[0] += n2;
    return this.calendarSystem.arrayToMarker(a3);
  }
  addMonths(marker, n2) {
    let a3 = this.calendarSystem.markerToArray(marker);
    a3[1] += n2;
    return this.calendarSystem.arrayToMarker(a3);
  }
  // Diffing Whole Units
  diffWholeYears(m0, m1) {
    let { calendarSystem } = this;
    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) && calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
      return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
    }
    return null;
  }
  diffWholeMonths(m0, m1) {
    let { calendarSystem } = this;
    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
      return calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0) + (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
    }
    return null;
  }
  // Range / Duration
  greatestWholeUnit(m0, m1) {
    let n2 = this.diffWholeYears(m0, m1);
    if (n2 !== null) {
      return { unit: "year", value: n2 };
    }
    n2 = this.diffWholeMonths(m0, m1);
    if (n2 !== null) {
      return { unit: "month", value: n2 };
    }
    n2 = diffWholeWeeks(m0, m1);
    if (n2 !== null) {
      return { unit: "week", value: n2 };
    }
    n2 = diffWholeDays(m0, m1);
    if (n2 !== null) {
      return { unit: "day", value: n2 };
    }
    n2 = diffHours4(m0, m1);
    if (isInt(n2)) {
      return { unit: "hour", value: n2 };
    }
    n2 = diffMinutes4(m0, m1);
    if (isInt(n2)) {
      return { unit: "minute", value: n2 };
    }
    n2 = diffSeconds4(m0, m1);
    if (isInt(n2)) {
      return { unit: "second", value: n2 };
    }
    return { unit: "millisecond", value: m1.valueOf() - m0.valueOf() };
  }
  countDurationsBetween(m0, m1, d3) {
    let diff3;
    if (d3.years) {
      diff3 = this.diffWholeYears(m0, m1);
      if (diff3 !== null) {
        return diff3 / asRoughYears(d3);
      }
    }
    if (d3.months) {
      diff3 = this.diffWholeMonths(m0, m1);
      if (diff3 !== null) {
        return diff3 / asRoughMonths(d3);
      }
    }
    if (d3.days) {
      diff3 = diffWholeDays(m0, m1);
      if (diff3 !== null) {
        return diff3 / asRoughDays(d3);
      }
    }
    return (m1.valueOf() - m0.valueOf()) / asRoughMs(d3);
  }
  // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates
  startOf(m3, unit) {
    if (unit === "year") {
      return this.startOfYear(m3);
    }
    if (unit === "month") {
      return this.startOfMonth(m3);
    }
    if (unit === "week") {
      return this.startOfWeek(m3);
    }
    if (unit === "day") {
      return startOfDay4(m3);
    }
    if (unit === "hour") {
      return startOfHour4(m3);
    }
    if (unit === "minute") {
      return startOfMinute4(m3);
    }
    if (unit === "second") {
      return startOfSecond4(m3);
    }
    return null;
  }
  startOfYear(m3) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(m3)
    ]);
  }
  startOfMonth(m3) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(m3),
      this.calendarSystem.getMarkerMonth(m3)
    ]);
  }
  startOfWeek(m3) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(m3),
      this.calendarSystem.getMarkerMonth(m3),
      m3.getUTCDate() - (m3.getUTCDay() - this.weekDow + 7) % 7
    ]);
  }
  // Week Number
  computeWeekNumber(marker) {
    if (this.weekNumberFunc) {
      return this.weekNumberFunc(this.toDate(marker));
    }
    return weekOfYear3(marker, this.weekDow, this.weekDoy);
  }
  formatToParts(marker, formatter, dateOptions = {}) {
    return formatter.formatToParts(this.toZonedInstant(marker, dateOptions.instantMs), this);
  }
  formatRangeToParts(start, end, formatter, dateOptions = {}) {
    let { endInstantMs } = dateOptions;
    if (dateOptions.isEndExclusive) {
      end = addMs(end, -1);
      if (endInstantMs != null) {
        endInstantMs -= 1;
      }
    }
    return formatter.formatRangeToParts(this.toZonedInstant(start, dateOptions.startInstantMs), this.toZonedInstant(end, endInstantMs), this);
  }
  // pairs a wall-clock marker with its real epoch instant (first occurrence when the
  // wall-clock is ambiguous), unless an exact instant is supplied. the marker is
  // re-derived from the instant so the pair always agrees, even when the given marker
  // was nonexistent (DST gap) or expressed in a different offset's reading
  toZonedInstant(marker, instantMs) {
    if (instantMs == null) {
      instantMs = this.toDate(marker).valueOf();
    }
    return { marker: this.timestampToMarker(instantMs), instantMs };
  }
  /*
  DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
  might as well use buildIsoString or some other util directly
  */
  formatIso(marker, extraOptions = {}) {
    let timeZoneOffset = null;
    if (!extraOptions.omitTimeZoneOffset) {
      timeZoneOffset = this.offsetForMarker(marker);
    }
    return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
  }
  // TimeZone
  timestampToMarker(ms) {
    if (this.timeZone === "local") {
      return arrayToUtcDate(dateToLocalArray(new Date(ms)));
    }
    if (this.timeZone === "UTC") {
      return new Date(ms);
    }
    const zdt = toZonedDateTimeISO3(fromEpochMilliseconds3(ms), this.timeZone);
    return new Date(
      // a "Date Marker", which is like PlainDateTime
      Date.UTC(zdt.year, zdt.month - 1, zdt.day, zdt.hour, zdt.minute, zdt.second, zdt.millisecond)
    );
  }
  offsetForMarker(m3) {
    if (this.timeZone === "local") {
      return -arrayToLocalDate(dateToUtcArray(m3)).getTimezoneOffset();
    }
    if (this.timeZone === "UTC") {
      return 0;
    }
    return offsetNanoseconds3(toZonedDateTime(create(m3.getUTCFullYear(), m3.getUTCMonth() + 1, m3.getUTCDate(), m3.getUTCHours(), m3.getUTCMinutes(), m3.getUTCSeconds(), m3.getUTCMilliseconds()), this.timeZone)) / (1e9 * 60);
  }
  // Conversion
  toDate(m3) {
    if (this.timeZone === "local") {
      return arrayToLocalDate(dateToUtcArray(m3));
    }
    if (this.timeZone === "UTC") {
      return new Date(m3.valueOf());
    }
    return new Date(toZonedDateTime(create(m3.getUTCFullYear(), m3.getUTCMonth() + 1, m3.getUTCDate(), m3.getUTCHours(), m3.getUTCMinutes(), m3.getUTCSeconds(), m3.getUTCMilliseconds()), this.timeZone).epochMilliseconds);
  }
};
var EXTENDED_SETTINGS = /* @__PURE__ */ new Set([
  "week",
  "meridiem",
  "omitZeroMinute",
  "omitCommas",
  "forceCommas",
  "omitTrailing",
  "weekdayJustify"
]);
var MERIDIEM_RE = /([ap])\.?m\.?/i;
var COMMA_RE = /,/g;
var LTR_RE = /\u200e/g;
var TRAILING_RE = /[\s.,]+$/;
var WHITESPACE_ONLY_RE = /^\s+$/;
var NativeDateFormatter = class {
  constructor(options) {
    const standardOptions = {};
    const extendedOptions = {};
    for (const name in options) {
      if (EXTENDED_SETTINGS.has(name)) {
        extendedOptions[name] = options[name];
      } else {
        standardOptions[name] = options[name];
      }
    }
    if (standardOptions.timeZoneName) {
      standardOptions.timeZoneName = "shortOffset";
    }
    this.timeZoneOnly = Object.keys(standardOptions).length === 1 && Boolean(standardOptions.timeZoneName);
    this.weekOnly = Boolean(!Object.keys(standardOptions).length && extendedOptions.week);
    if (!this.timeZoneOnly) {
      if (standardOptions.timeZoneName) {
        if (!standardOptions.hour) {
          standardOptions.hour = "2-digit";
        }
        if (!standardOptions.minute) {
          standardOptions.minute = "2-digit";
        }
      }
      if (extendedOptions.omitZeroMinute && (standardOptions.second || standardOptions.fractionalSecondDigits)) {
        delete extendedOptions.omitZeroMinute;
      }
    }
    this.standardOptions = standardOptions;
    this.extendedOptions = extendedOptions;
  }
  formatToParts(date, context) {
    const { extendedOptions } = this;
    if (this.timeZoneOnly) {
      return this.getFormats(context).normalFormat.formatToParts(date.instantMs).filter((part) => part.type === "timeZoneName");
    }
    if (this.weekOnly) {
      return formatWeekNumberParts(context.computeWeekNumber(date.marker), context.weekTextLong, context.weekTextShort, context.locale, extendedOptions.week);
    }
    const { normalFormat, zeroFormat } = this.getFormats(context);
    const format = zeroFormat && !date.marker.getUTCMinutes() ? zeroFormat : normalFormat;
    const parts = format.formatToParts(date.instantMs);
    return postProcessParts(parts, extendedOptions);
  }
  formatRangeToParts(start, end, context) {
    const { extendedOptions } = this;
    if (this.timeZoneOnly || this.weekOnly) {
      return this.formatToParts(start, context).map((part) => {
        return {
          source: part.type === "literal" ? "shared" : "startRange",
          ...part
        };
      });
    }
    const { normalFormat, zeroFormat } = this.getFormats(context);
    const format = zeroFormat && !start.marker.getUTCMinutes() && !end.marker.getUTCMinutes() ? zeroFormat : normalFormat;
    const parts = format.formatRangeToParts(start.instantMs, end.instantMs);
    return postProcessRangeParts(parts, extendedOptions);
  }
  getFormats(context) {
    if (this.cachedContext !== context) {
      const { extendedOptions } = this;
      const { codes } = context.locale;
      const standardOptions = {
        ...this.standardOptions,
        // 'local' means the system zone, which is Intl's default
        timeZone: context.timeZone === "local" ? void 0 : context.timeZone
      };
      const normalFormat = new Intl.DateTimeFormat(codes, standardOptions);
      let zeroFormat;
      if (extendedOptions.omitZeroMinute) {
        const zeroProps = { ...standardOptions };
        delete zeroProps.minute;
        zeroFormat = new Intl.DateTimeFormat(codes, zeroProps);
      }
      this.cachedContext = context;
      this.cachedFormats = { normalFormat, zeroFormat };
    }
    return this.cachedFormats;
  }
};
function processPartsLoop(parts, extendedOptions) {
  let priorLiteral;
  for (const part of parts) {
    const isLiteral = part.type === "literal";
    if (isLiteral || part.type === "dayPeriod") {
      let s2 = part.value;
      s2 = s2.replace(LTR_RE, "");
      if (extendedOptions.omitCommas) {
        s2 = s2.replace(COMMA_RE, "");
      }
      if (!isLiteral) {
        const { meridiem } = extendedOptions;
        if (meridiem === false) {
          s2 = s2.replace(MERIDIEM_RE, "");
        } else if (meridiem === "narrow") {
          s2 = s2.replace(MERIDIEM_RE, (_m0, m1) => m1.toLocaleLowerCase());
        } else if (meridiem === "short") {
          s2 = s2.replace(MERIDIEM_RE, (_m0, m1) => `${m1.toLocaleLowerCase()}m`);
        } else if (meridiem === "lowercase") {
          s2 = s2.replace(MERIDIEM_RE, (m0) => m0.toLocaleLowerCase());
        }
        if (priorLiteral) {
          priorLiteral.value = priorLiteral.value.trimEnd();
        }
      }
      part.value = s2;
    }
    priorLiteral = isLiteral ? part : void 0;
  }
}
function postProcessParts(parts, extendedOptions) {
  processPartsLoop(parts, extendedOptions);
  if (extendedOptions.weekdayJustify && parts.length === 3 && WHITESPACE_ONLY_RE.test(parts[1].value)) {
    if (parts[extendedOptions.weekdayJustify === "start" ? 2 : 0].type === "weekday") {
      parts.reverse();
    }
  }
  if (extendedOptions.forceCommas) {
    for (const part of parts) {
      if (part.type === "literal" && WHITESPACE_ONLY_RE.test(part.value)) {
        part.value = `,${part.value}`;
      }
    }
  }
  if (extendedOptions.omitTrailing) {
    stripTrailingLiteral(parts);
  }
  return parts.filter((part) => part.value);
}
function postProcessRangeParts(parts, extendedOptions) {
  processPartsLoop(parts, extendedOptions);
  if (extendedOptions.forceCommas) {
    for (const part of parts) {
      if (part.type === "literal" && WHITESPACE_ONLY_RE.test(part.value)) {
        part.value = `,${part.value}`;
      }
    }
  }
  if (extendedOptions.omitTrailing) {
    stripTrailingLiteral(parts);
  }
  return parts.filter((part) => part.value);
}
function stripTrailingLiteral(parts) {
  const lastPart = parts[parts.length - 1];
  if (lastPart?.type === "literal") {
    lastPart.value = lastPart.value.replace(TRAILING_RE, "");
    if (!lastPart.value) {
      parts.pop();
    }
  }
}
function formatWeekNumberParts(num, weekTextLong, weekTextShort, locale, display) {
  const parts = [];
  if (display === "long") {
    parts.push({ type: "literal", value: weekTextLong });
  } else if (display === "short" || display === "narrow") {
    parts.push({ type: "literal", value: weekTextShort });
  }
  if (display === "long" || display === "short") {
    parts.push({ type: "literal", value: " " });
  }
  parts.push({
    type: "week",
    value: locale.simpleNumberFormat.format(num)
  });
  if (locale.options.direction === "rtl") {
    parts.reverse();
  }
  return parts;
}
var CmdDateFormatter = class {
  constructor(cmdStr) {
    this.cmdStr = cmdStr;
  }
  formatToParts(date, context) {
    const res = context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context));
    if (Array.isArray(res)) {
      return res;
    }
    return [{ type: "literal", value: res }];
  }
  formatRangeToParts(start, end, context) {
    const res = context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context));
    if (Array.isArray(res)) {
      return res.map((part) => ({
        source: "shared",
        ...part
      }));
    }
    return [{ source: "shared", type: "literal", value: res }];
  }
};
var FuncDateFormatter = class {
  constructor(func) {
    this.func = func;
  }
  formatToParts(date, context) {
    const str = this.func(createVerboseFormattingArg(date, null, context));
    return [{ type: "literal", value: str }];
  }
  formatRangeToParts(start, end, context) {
    const str = this.func(createVerboseFormattingArg(start, end, context));
    return [{ source: "shared", type: "literal", value: str }];
  }
};

// node_modules/fullcalendar/chunks/0b389a37.js
var classNames = { "popoverZ": "fc-pj", "isolate": "fc-L2", "borderBoxRoot": "fc-oK", "notAllowed": "fc-Nr", "noScrollbars": "fc-h3", "noShrink": "fc-s2", "calendarScreenRoot": "fc-Qd", "safeTiles": "fc-j1", "calendarPrintRoot": "fc-Fn", "cursorPointer": "fc-3A", "cursorResizeT": "fc-3Z", "cursorResizeB": "fc-Bn", "cursorResizeS": "fc-Bs", "cursorResizeE": "fc-mJ", "cursorColResizer": "fc-xg", "hit": "fc-B6", "hitX": "fc-If", "hitY": "fc-uS", "hitXSkinny": "fc-gw", "selectNone": "fc-Qx", "invisible": "fc-DP", "borderless": "fc-m0", "borderlessX": "fc-lH", "borderlessY": "fc-T4", "borderlessTop": "fc-7v", "borderlessBottom": "fc-C1", "borderlessStart": "fc-QG", "borderlessEnd": "fc-N5", "flexRow": "fc-4L", "flexCol": "fc-Ir", "grow": "fc-o7", "liquid": "fc-bx", "minHeight0": "fc-PC", "liquidX": "fc-rJ", "printTable": "fc-2n", "noPadding": "fc-Ib", "noPaddingY": "fc-ho", "noMargin": "fc-Yg", "noMarginY": "fc-4U", "noMarginX": "fc-mC", "whiteSpaceNoWrap": "fc-XZ", "whiteSpacePre": "fc-5Z", "overflowAnchorNone": "fc-0T", "pointerEventsNone": "fc-8Y", "crop": "fc-Zz", "cropNowrap": "fc-Sr", "rel": "fc-7Q", "abs": "fc-Rs", "start0": "fc-Hv", "end0": "fc-97", "fill": "fc-ou", "fillTop": "fc-b1", "fillX": "fc-7k", "fillY": "fc-5V", "fillStart": "fc-Z6", "sticky": "fc-TI", "stickyT": "fc-G7", "stickyS": "fc-lC", "tableHeaderSticky": "fc-hw", "contentBox": "fc-Ap", "offscreen": "fc-hI", "srOnly": "fc-GR", "alignCenter": "fc-Hi", "alignStart": "fc-Yj", "alignEnd": "fc-io", "footerScrollbarSticky": "fc-4I", "footerScrollbar": "fc-Nd", "breakInsideAvoid": "fc-Gu", "printCellContentMinHeight": "fc-2s", "flowRoot": "fc-es", "z0": "fc-QB", "z1": "fc-eY", "z2": "fc-qd", "z3": "fc-9p", "z4": "fc-65", "z5": "fc-Hy", "z1000": "fc-T7", "z9999": "fc-mO", "focusZ2": "fc-zL", "internalTimelineSlot": "fc-7y", "internalEvent": "fc-Rq", "internalEventMirror": "fc-wf", "internalEventDraggable": "fc-QY", "internalEventSelected": "fc-1d", "internalEventResizable": "fc-3d", "internalEventResizer": "fc-bM", "internalEventResizerStart": "fc-ik", "internalEventResizerEnd": "fc-lw", "internalBgEvent": "fc-Sz", "internalMoreLink": "fc-4D", "internalNavLink": "fc-Wa", "internalPopover": "fc-JJ", "internalView": "fc-Ix", "internalScroller": "fc-0s" };

// node_modules/fullcalendar/chunks/d74440d5.js
function joinClassNames(...args) {
  return args.filter(Boolean).join(" ");
}

// node_modules/fullcalendar/chunks/d7fd1889.js
function createFormatter(input) {
  if (typeof input === "object" && input) {
    return new NativeDateFormatter(input);
  }
  if (typeof input === "string") {
    return new CmdDateFormatter(input);
  }
  if (typeof input === "function") {
    return new FuncDateFormatter(input);
  }
  return null;
}
function warn(...args) {
  console.warn("FullCalendar:", ...args);
}
var warnedClassNameOptions = {};
function refineClassName(input, optionName) {
  if (!input || typeof input === "string") {
    return input;
  }
  warnInvalidClassName(optionName);
  return "";
}
function refineClassNameGenerator(input, optionName) {
  if (typeof input === "function") {
    return (renderProps) => refineClassName(input(renderProps), optionName);
  }
  return refineClassName(input, optionName);
}
function warnInvalidClassName(optionName) {
  if (!warnedClassNameOptions[optionName]) {
    warn(`Invalid option \`${optionName}\`: expected a className string or a falsy value.`);
    warnedClassNameOptions[optionName] = true;
  }
}
function buildDelegationHandler(selector, handler) {
  return (ev) => {
    let matchedChild = ev.target.closest(selector);
    if (matchedChild) {
      handler.call(matchedChild, ev, matchedChild);
    }
  };
}
function listenBySelector(container, eventType, selector, handler) {
  let attachedHandler = buildDelegationHandler(selector, handler);
  container.addEventListener(eventType, attachedHandler);
  return () => {
    container.removeEventListener(eventType, attachedHandler);
  };
}
function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
  let currentMatchedChild;
  return listenBySelector(container, "mouseover", selector, (mouseOverEv, matchedChild) => {
    if (matchedChild !== currentMatchedChild) {
      currentMatchedChild = matchedChild;
      onMouseEnter(mouseOverEv, matchedChild);
      let realOnMouseLeave = (mouseLeaveEv) => {
        currentMatchedChild = null;
        onMouseLeave(mouseLeaveEv, matchedChild);
        matchedChild.removeEventListener("mouseleave", realOnMouseLeave);
      };
      matchedChild.addEventListener("mouseleave", realOnMouseLeave);
    }
  });
}
function createAriaClickAttrs(handler) {
  return {
    onClick: handler,
    ...createAriaKeyboardAttrs(handler)
  };
}
function createAriaKeyboardAttrs(handler) {
  return {
    tabIndex: 0,
    onKeyDown(ev) {
      if (ev.key === "Enter" || ev.key === " ") {
        handler(ev);
        ev.preventDefault();
      }
    }
  };
}
var guidNumber = 0;
function guid() {
  guidNumber += 1;
  return String(guidNumber);
}
function parseFieldSpecs(input) {
  let specs = [];
  let tokens = [];
  let i3;
  let token;
  if (typeof input === "string") {
    tokens = input.split(/\s*,\s*/);
  } else if (typeof input === "function") {
    tokens = [input];
  } else if (Array.isArray(input)) {
    tokens = input;
  }
  for (i3 = 0; i3 < tokens.length; i3 += 1) {
    token = tokens[i3];
    if (typeof token === "string") {
      specs.push(token.charAt(0) === "-" ? { field: token.substring(1), order: -1 } : { field: token, order: 1 });
    } else if (typeof token === "function") {
      specs.push({ func: token });
    }
  }
  return specs;
}
function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
  let i3;
  let cmp;
  for (i3 = 0; i3 < fieldSpecs.length; i3 += 1) {
    cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i3]);
    if (cmp) {
      return cmp;
    }
  }
  return 0;
}
function compareByFieldSpec(obj0, obj1, fieldSpec) {
  if (fieldSpec.func) {
    return fieldSpec.func(obj0, obj1);
  }
  return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field]) * (fieldSpec.order || 1);
}
function flexibleCompare(a3, b2) {
  if (!a3 && !b2) {
    return 0;
  }
  if (b2 == null) {
    return -1;
  }
  if (a3 == null) {
    return 1;
  }
  if (typeof a3 === "string" || typeof b2 === "string") {
    return String(a3).localeCompare(String(b2));
  }
  return a3 - b2;
}
function formatWithOrdinals(formatter, args, fallbackText) {
  if (typeof formatter === "function") {
    return formatter(...args);
  }
  if (typeof formatter === "string") {
    return args.reduce((str, arg, index2) => str.replace("$" + index2, arg || ""), formatter);
  }
  return fallbackText;
}
function valuesIdentical(a3, b2) {
  return a3 === b2;
}
function computeViewBorderless(options) {
  const borderless = options.borderless;
  return {
    borderlessX: Boolean(options.borderlessX ?? borderless),
    borderlessTop: Boolean(options.borderlessTop ?? borderless),
    borderlessBottom: Boolean(options.borderlessBottom ?? borderless)
  };
}
function flatArray(items) {
  const res = [];
  for (const item of items) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        res.push(subItem);
      }
    } else {
      res.push(item);
    }
  }
  return res;
}
function flatMapArray(inputs, mapFunc) {
  const res = [];
  for (let i3 = 0; i3 < inputs.length; i3 += 1) {
    const output = mapFunc(inputs[i3], i3);
    if (Array.isArray(output)) {
      for (const subOutput of output) {
        res.push(subOutput);
      }
    } else {
      res.push(output);
    }
  }
  return res;
}
function isMaybeArraysEqual(array0, array1) {
  if (Array.isArray(array0) && Array.isArray(array1)) {
    return isArraysEqual(array0, array1);
  }
  return array0 === array1;
}
function isArraysEqual(array0, array1, itemsEqual = valuesIdentical) {
  if (array0 === array1) {
    return true;
  }
  let len = array0.length;
  let i3;
  if (len !== array1.length) {
    return false;
  }
  for (i3 = 0; i3 < len; i3 += 1) {
    if (!itemsEqual(array0[i3], array1[i3])) {
      return false;
    }
  }
  return true;
}
var { hasOwnProperty } = Object.prototype;
function filterHash(hash, func) {
  let filtered = {};
  for (let key in hash) {
    if (func(hash[key], key)) {
      filtered[key] = hash[key];
    }
  }
  return filtered;
}
function mapHash(hash, func) {
  let newHash = {};
  for (let key in hash) {
    newHash[key] = func(hash[key], key);
  }
  return newHash;
}
function hashValuesToArray(obj) {
  let a3 = [];
  for (let key in obj) {
    a3.push(obj[key]);
  }
  return a3;
}
function arrayToHash(a3) {
  let hash = {};
  for (let item of a3) {
    hash[item] = true;
  }
  return hash;
}
function isMaybePropsEqualDepth1(props0, props1) {
  if (typeof props0 === "object" && props0 && // non-null object
  typeof props1 === "object" && props1) {
    return isPropsEqualWithFunc(props0, props1, isPropsEqualShallow);
  }
  return props0 === props1;
}
function isPropsEqualWithFunc(props0, props1, valuesEqual) {
  if (props0 === props1) {
    return true;
  }
  for (let key in props0) {
    if (hasOwnProperty.call(props0, key)) {
      if (!(key in props1)) {
        return false;
      }
    }
  }
  for (let key in props1) {
    if (hasOwnProperty.call(props1, key)) {
      if (!(key in props0) || !valuesEqual(props0[key], props1[key], key)) {
        return false;
      }
    }
  }
  return true;
}
function isMaybePropsEqualShallow(props0, props1) {
  if (typeof props0 === "object" && typeof props1 === "object" && props0 && props1) {
    return isPropsEqualShallow(props0, props1);
  }
  return props0 === props1;
}
function isPropsEqualShallow(props0, props1) {
  return isPropsEqualWithFunc(props0, props1, valuesIdentical);
}
function isMaybeDateRangeInputsEqual(range0, range1) {
  if (typeof range0 === "object" && typeof range1 === "object" && range0 && range1) {
    return isPropsEqualWithFunc(range0, range1, isDateInputsEqual);
  }
  return range0 === range1;
}
function isDateInputsEqual(input0, input1) {
  if (input0 instanceof Date && input1 instanceof Date) {
    return input0.valueOf() === input1.valueOf();
  }
  if (Array.isArray(input0) && Array.isArray(input1)) {
    return isArraysEqual(input0, input1);
  }
  return input0 === input1;
}
function isPropsEqualWithMap(props0, props1, equalityFuncMap) {
  return isPropsEqualWithFunc(props0, props1, (val0, val1, key) => {
    const equalityFunc = equalityFuncMap[key];
    const isEqual = equalityFunc ? equalityFunc(val0, val1) : val0 === val1;
    return isEqual;
  });
}
function getUnequalProps(props0, props1) {
  let keys = [];
  for (let key in props0) {
    if (hasOwnProperty.call(props0, key)) {
      if (!(key in props1)) {
        keys.push(key);
      }
    }
  }
  for (let key in props1) {
    if (hasOwnProperty.call(props1, key)) {
      if (props0[key] !== props1[key]) {
        keys.push(key);
      }
    }
  }
  return keys;
}
function mergeMaybePropsDepth1(props0, props1) {
  if (!props0) {
    return props1;
  }
  return mergePropsWithFunc(props0, props1, mergePropsShallow);
}
function mergePropsWithFunc(props0, props1, mergeValues) {
  const dest = {};
  for (let key in props0) {
    if (hasOwnProperty.call(props0, key)) {
      if (!(key in props1)) {
        dest[key] = props0[key];
      }
    }
  }
  for (let key in props1) {
    if (hasOwnProperty.call(props1, key)) {
      if (!(key in props0)) {
        dest[key] = props1[key];
      } else {
        dest[key] = mergeValues(props0[key], props1[key]);
      }
    }
  }
  return dest;
}
function mergePropsShallow(props0, props1) {
  return Object.assign({}, props0, props1);
}
var BASE_OPTION_REFINERS = {
  navLinkDayClick: identity,
  navLinkWeekClick: identity,
  duration: createDuration,
  buttons: identity,
  toolbarElements: identity,
  prevText: String,
  nextText: String,
  prevYearText: String,
  nextYearText: String,
  todayText: String,
  yearText: String,
  monthText: String,
  weekTextLong: String,
  weekTextShort: String,
  dayText: String,
  listText: identity,
  todayHint: identity,
  prevHint: identity,
  nextHint: identity,
  // TODO: make type for hint input
  buttonDisplay: identity,
  buttonGroupClass: refineClassNameGenerator,
  buttonClass: refineClassNameGenerator,
  defaultAllDayEventDuration: createDuration,
  defaultTimedEventDuration: createDuration,
  nextDayThreshold: createDuration,
  scrollTime: createDuration,
  scrollTimeReset: Boolean,
  slotMinTime: createDuration,
  slotMaxTime: createDuration,
  popoverFormat: createFormatter,
  slotDuration: createDuration,
  snapDuration: createDuration,
  headerToolbar: identity,
  footerToolbar: identity,
  forceEventDuration: Boolean,
  // TODO: move to timegrid
  dayLaneClass: refineClassNameGenerator,
  dayLaneInnerClass: refineClassNameGenerator,
  dayLaneDidMount: identity,
  dayLaneWillUnmount: identity,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: identity,
  weekNumbers: Boolean,
  weekNumberHeaderClass: refineClassNameGenerator,
  weekNumberHeaderInnerClass: refineClassNameGenerator,
  weekNumberHeaderContent: identity,
  weekNumberHeaderDidMount: identity,
  weekNumberHeaderWillUnmount: identity,
  inlineWeekNumberClass: refineClassNameGenerator,
  inlineWeekNumberContent: identity,
  inlineWeekNumberDidMount: identity,
  inlineWeekNumberWillUnmount: identity,
  editable: Boolean,
  controller: identity,
  nowIndicator: Boolean,
  nowIndicatorSnap: identity,
  nowIndicatorHeaderClass: refineClassNameGenerator,
  nowIndicatorHeaderContent: identity,
  nowIndicatorHeaderDidMount: identity,
  nowIndicatorHeaderWillUnmount: identity,
  nowIndicatorDotClass: refineClassName,
  nowIndicatorLineClass: refineClassNameGenerator,
  nowIndicatorLineContent: identity,
  nowIndicatorLineDidMount: identity,
  nowIndicatorLineWillUnmount: identity,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: identity,
  locale: identity,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: identity,
  // TODO: type draggable
  eventOrder: parseFieldSpecs,
  eventOrderStrict: Boolean,
  eventSlicing: Boolean,
  // default: true
  eventPrintLayout: String,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: identity,
  contentHeight: identity,
  direction: String,
  colorScheme: String,
  weekNumberFormat: createFormatter,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  progressiveEventRendering: Boolean,
  businessHours: identity,
  initialDate: identity,
  now: identity,
  eventDataTransform: identity,
  tableHeaderSticky: identity,
  footerScrollbarSticky: identity,
  defaultAllDay: Boolean,
  eventSourceFailure: identity,
  eventSourceSuccess: identity,
  eventDisplay: String,
  // TODO: give more specific
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: identity,
  eventConstraint: identity,
  eventAllow: identity,
  eventColor: String,
  eventContrastColor: String,
  eventDidMount: identity,
  eventWillUnmount: identity,
  eventContent: identity,
  eventClass: refineClassNameGenerator,
  eventInnerClass: refineClassNameGenerator,
  eventTimeClass: refineClassNameGenerator,
  eventTitleClass: refineClassNameGenerator,
  eventBeforeClass: refineClassNameGenerator,
  eventAfterClass: refineClassNameGenerator,
  //
  listItemEventClass: refineClassNameGenerator,
  listItemEventInnerClass: refineClassNameGenerator,
  listItemEventTimeClass: refineClassNameGenerator,
  listItemEventTitleClass: refineClassNameGenerator,
  listItemEventBeforeClass: refineClassNameGenerator,
  listItemEventAfterClass: refineClassNameGenerator,
  //
  blockEventClass: refineClassNameGenerator,
  blockEventInnerClass: refineClassNameGenerator,
  blockEventTimeClass: refineClassNameGenerator,
  blockEventTitleClass: refineClassNameGenerator,
  blockEventBeforeClass: refineClassNameGenerator,
  blockEventAfterClass: refineClassNameGenerator,
  //
  rowEventClass: refineClassNameGenerator,
  rowEventInnerClass: refineClassNameGenerator,
  rowEventTimeClass: refineClassNameGenerator,
  rowEventTitleClass: refineClassNameGenerator,
  rowEventTitleSticky: Boolean,
  rowEventBeforeClass: refineClassNameGenerator,
  rowEventBeforeContent: identity,
  rowEventAfterClass: refineClassNameGenerator,
  rowEventAfterContent: identity,
  //
  columnEventClass: refineClassNameGenerator,
  columnEventInnerClass: refineClassNameGenerator,
  columnEventTimeClass: refineClassNameGenerator,
  columnEventTitleClass: refineClassNameGenerator,
  columnEventTitleSticky: Boolean,
  columnEventBeforeClass: refineClassNameGenerator,
  columnEventAfterClass: refineClassNameGenerator,
  //
  backgroundEventClass: refineClassNameGenerator,
  backgroundEventDidMount: identity,
  backgroundEventWillUnmount: identity,
  backgroundEventContent: identity,
  backgroundEventInnerClass: refineClassNameGenerator,
  backgroundEventTitleClass: refineClassNameGenerator,
  backgroundEventColor: String,
  selectConstraint: identity,
  selectOverlap: identity,
  selectAllow: identity,
  droppable: Boolean,
  unselectCancel: String,
  slotHeaderFormat: identity,
  slotLaneClass: refineClassNameGenerator,
  slotLaneDidMount: identity,
  slotLaneWillUnmount: identity,
  slotHeaderClass: refineClassNameGenerator,
  slotHeaderInnerClass: refineClassNameGenerator,
  slotHeaderContent: identity,
  slotHeaderDidMount: identity,
  slotHeaderWillUnmount: identity,
  slotHeaderAlign: identity,
  slotHeaderSticky: identity,
  slotHeaderRowClass: refineClassName,
  slotHeaderDividerClass: refineClassNameGenerator,
  dayMaxEvents: identity,
  dayMaxEventRows: identity,
  dayMinWidth: Number,
  slotHeaderInterval: createDuration,
  // in core because more-popover needs it
  dayHeaderClass: refineClassNameGenerator,
  dayHeaderInnerClass: refineClassNameGenerator,
  dayHeaderContent: identity,
  dayHeaderDidMount: identity,
  dayHeaderWillUnmount: identity,
  dayHeaderAlign: identity,
  // stickiness for cell-inner-contents laterally. experimental settings
  _dayHeaderSticky: identity,
  dayHeaderRowClass: refineClassName,
  dayHeaderDividerClass: refineClassNameGenerator,
  dayRowClass: refineClassName,
  dayCellDidMount: identity,
  dayCellWillUnmount: identity,
  dayCellClass: refineClassNameGenerator,
  dayCellInnerClass: refineClassNameGenerator,
  dayCellTopContent: identity,
  dayCellTopClass: refineClassNameGenerator,
  dayCellTopInnerClass: refineClassNameGenerator,
  dayCellBottomClass: refineClassNameGenerator,
  allDaySlot: Boolean,
  allDayText: String,
  allDayHeaderClass: refineClassNameGenerator,
  allDayHeaderInnerClass: refineClassNameGenerator,
  allDayHeaderContent: identity,
  allDayHeaderDidMount: identity,
  allDayHeaderWillUnmount: identity,
  timedText: String,
  slotMinWidth: Number,
  slotMinHeight: Number,
  navLinks: Boolean,
  eventTimeFormat: createFormatter,
  rerenderDelay: Number,
  // TODO: move to vanilla right? nah keep here
  moreLinkText: identity,
  // this not enforced :( check others too
  moreLinkHint: identity,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: createDuration,
  hiddenDays: identity,
  fixedWeekCount: Boolean,
  validRange: identity,
  // `this` works?
  visibleRange: identity,
  // `this` works?
  titleFormat: identity,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: identity,
  viewChangeHint: String,
  // for the tab container
  navLinkHint: identity,
  closeHint: String,
  eventsHint: String,
  headingLevel: Number,
  moreLinkClick: identity,
  moreLinkContent: identity,
  moreLinkDidMount: identity,
  moreLinkWillUnmount: identity,
  moreLinkClass: refineClassNameGenerator,
  moreLinkInnerClass: refineClassNameGenerator,
  //
  rowMoreLinkClass: refineClassNameGenerator,
  rowMoreLinkInnerClass: refineClassNameGenerator,
  //
  columnMoreLinkClass: refineClassNameGenerator,
  columnMoreLinkInnerClass: refineClassNameGenerator,
  navLinkClass: refineClassName,
  monthStartFormat: createFormatter,
  dayCellFormat: createFormatter,
  // for connectors
  // (can't be part of plugin system b/c must be provided at runtime)
  handleCustomRendering: identity,
  customRenderingMetaMap: identity,
  popoverClass: refineClassName,
  popoverCloseClass: refineClassName,
  popoverCloseContent: identity,
  dayNarrowWidth: Number,
  borderless: Boolean,
  borderlessX: Boolean,
  borderlessTop: Boolean,
  borderlessBottom: Boolean,
  fillerClass: refineClassNameGenerator,
  headerToolbarClass: refineClassNameGenerator,
  footerToolbarClass: refineClassNameGenerator,
  toolbarClass: refineClassNameGenerator,
  toolbarSectionClass: refineClassNameGenerator,
  toolbarTitleClass: refineClassName,
  tableClass: refineClassNameGenerator,
  tableHeaderClass: refineClassNameGenerator,
  tableBodyClass: refineClassNameGenerator,
  nonBusinessHoursClass: refineClassName,
  highlightClass: refineClassName,
  // daygrid-only
  dayHeaders: Boolean,
  dayHeaderFormat: createFormatter,
  // timegrid-only
  allDayDividerClass: refineClassName,
  // list-only
  listDaysClass: refineClassName,
  // rename this?
  listDayClass: refineClassNameGenerator,
  //
  listDayFormat: createFalsableFormatter,
  // defaults specified in list plugins
  listDayAltFormat: createFalsableFormatter,
  // "
  //
  listDayHeaderDidMount: identity,
  listDayHeaderWillUnmount: identity,
  listDayHeaderClass: refineClassNameGenerator,
  listDayHeaderInnerClass: refineClassNameGenerator,
  listDayHeaderContent: identity,
  //
  listDayBodyClass: refineClassNameGenerator,
  //
  noEventsClass: refineClassNameGenerator,
  noEventsInnerClass: refineClassNameGenerator,
  noEventsContent: identity,
  noEventsDidMount: identity,
  noEventsWillUnmount: identity,
  // noEventsText is defined in base options
  // multimonth-only
  multiMonthMaxColumns: Number,
  //
  singleMonthMinWidth: Number,
  singleMonthTitleFormat: createFormatter,
  singleMonthDidMount: identity,
  singleMonthWillUnmount: identity,
  singleMonthClass: refineClassNameGenerator,
  singleMonthHeaderClass: refineClassNameGenerator,
  singleMonthHeaderInnerClass: refineClassNameGenerator
};
var BASE_OPTION_DEFAULTS = {
  buttonDisplay: "auto",
  eventDisplay: "auto",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: false,
  nextDayThreshold: "00:00:00",
  initialView: "",
  aspectRatio: 1.35,
  weekends: true,
  weekNumbers: false,
  weekNumberCalculation: "local",
  editable: false,
  nowIndicator: false,
  scrollTime: "06:00:00",
  scrollTimeReset: true,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: true,
  lazyFetching: true,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  // TODO: throw error if given falsy value?
  locales: [],
  locale: "",
  // blank values means it will compute based off locales[]
  dragRevertDuration: 500,
  dragScroll: true,
  allDayMaintainDuration: false,
  unselectAuto: true,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  eventSlicing: true,
  eventPrintLayout: "auto",
  popoverFormat: { month: "long", day: "numeric", year: "numeric" },
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  // only applies to mouse
  expandRows: false,
  navLinks: false,
  selectable: false,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30,
  monthStartFormat: { month: "long", day: "numeric" },
  dayCellFormat: { day: "numeric", omitTrailing: true },
  headingLevel: 2,
  // like H2
  outerBorder: true,
  dayNarrowWidth: 80,
  eventOverlap: true,
  slotHeaderAlign: "start",
  slotHeaderSticky: true,
  dayHeaderAlign: "start",
  _dayHeaderSticky: true,
  rowEventTitleSticky: true,
  columnEventTitleSticky: true,
  nowIndicatorSnap: "auto",
  // daygrid-only
  dayHeaders: true
};
var CALENDAR_LISTENER_REFINERS = {
  datesSet: identity,
  eventsSet: identity,
  eventAdd: identity,
  eventChange: identity,
  eventRemove: identity,
  eventClick: identity,
  // TODO: resource for scheduler????
  eventMouseEnter: identity,
  eventMouseLeave: identity,
  select: identity,
  // resource for scheduler????
  unselect: identity,
  loading: identity,
  // internal
  _unmount: identity,
  _beforeprint: identity,
  _afterprint: identity,
  _noDateSelect: identity,
  _noEventDrop: identity,
  _noEventResize: identity,
  _timeScrollRequest: identity,
  // interaction-plugin-only
  dateClick: identity,
  eventDragStart: identity,
  eventDragStop: identity,
  eventDrop: identity,
  eventResizeStart: identity,
  eventResizeStop: identity,
  eventResize: identity,
  drop: identity,
  eventReceive: identity,
  eventLeave: identity
};
var CALENDAR_ONLY_OPTION_REFINERS = {
  class: refineClassNameGenerator,
  className: refineClassNameGenerator,
  viewClass: refineClassNameGenerator,
  viewDidMount: identity,
  viewWillUnmount: identity,
  views: identity,
  plugins: identity,
  initialEvents: identity,
  events: identity,
  eventSources: identity
};
var VIEW_ONLY_OPTION_REFINERS = {
  type: String,
  component: identity,
  class: refineClassNameGenerator,
  className: refineClassNameGenerator,
  content: identity,
  didMount: identity,
  willUnmount: identity,
  // internal only
  buttonTextKey: String,
  dateProfileGeneratorClass: identity,
  usesMinMaxTime: Boolean,
  disallowAmbigTitle: Boolean
};
var COMPLEX_OPTION_COMPARATORS = {
  // Unfortunately always need 'maybe' to handle undefined inital value, because of CalendarDataManager
  dateIncrement: isMaybePropsEqualShallow,
  headerToolbar: isMaybePropsEqualShallow,
  footerToolbar: isMaybePropsEqualShallow,
  buttons: isMaybePropsEqualDepth1,
  plugins: isMaybeArraysEqual,
  events: isMaybeArraysEqual,
  eventSources: isMaybeArraysEqual,
  ["resources"]: isMaybeArraysEqual,
  // otherwise, an equal-but-new value, like from a React rerender, rebuilds the date profile (#7069)
  validRange: isMaybeDateRangeInputsEqual,
  visibleRange: isMaybeDateRangeInputsEqual,
  hiddenDays: isMaybeArraysEqual
};
function refineProps(input, refiners) {
  let refined = {};
  let extra = {};
  for (let propName in refiners) {
    if (propName in input) {
      refined[propName] = refiners[propName](input[propName], propName);
    }
  }
  for (let propName in input) {
    if (!(propName in refiners)) {
      extra[propName] = input[propName];
    }
  }
  return { refined, extra };
}
function identity(raw) {
  return raw;
}
function createFalsableFormatter(input) {
  return input === false ? null : createFormatter(input);
}
function buildEventInstanceRange(start, end, instantStartMs, instantEndMs) {
  const range = { start, end };
  if (instantStartMs != null) {
    range.instantStartMs = instantStartMs;
  }
  if (instantEndMs != null) {
    range.instantEndMs = instantEndMs;
  }
  return range;
}
function resolveEdgeInstantMs(marker, instantMs, dateEnv) {
  return instantMs ?? dateEnv.toDate(marker).valueOf();
}
function buildRangeEdgeOutput(marker, instantMs, dateEnv, omitTime) {
  const canonicalMarker = instantMs != null ? dateEnv.timestampToMarker(instantMs) : marker;
  const timeZoneOffset = instantMs != null ? Math.round((canonicalMarker.valueOf() - instantMs) / 6e4) : dateEnv.offsetForMarker(marker);
  if (!omitTime && instantMs != null) {
    return {
      marker: canonicalMarker,
      date: new Date(instantMs),
      dateStr: buildIsoString(canonicalMarker, timeZoneOffset)
    };
  }
  return {
    marker: canonicalMarker,
    date: dateEnv.toDate(marker),
    dateStr: omitTime ? dateEnv.formatIso(marker, { omitTime }) : buildIsoString(marker, timeZoneOffset)
  };
}
function getRangeInstantStartMs(range, dateEnv) {
  return resolveEdgeInstantMs(range.start, range.instantStartMs, dateEnv);
}
function getRangeInstantEndMs(range, dateEnv) {
  return resolveEdgeInstantMs(range.end, range.instantEndMs, dateEnv);
}
function canonicalRangeEndMarker(range, dateEnv) {
  return range.instantEndMs != null ? dateEnv.timestampToMarker(range.instantEndMs) : range.end;
}
function addDurationToEdge(edge, duration, dateEnv) {
  if (edge.instantMs != null && !duration.years && !duration.months && !duration.days) {
    const durMs = asRoughMs(duration);
    const instantMs = edge.instantMs + durMs;
    const marker = dateEnv.timestampToMarker(instantMs);
    return marker > edge.marker ? { marker, instantMs } : { marker: addMs(edge.marker, durMs), instantMs };
  }
  return { marker: dateEnv.add(edge.marker, duration) };
}
function buildValidInstanceRange(start, end, dateEnv) {
  if (start.instantMs == null && end.instantMs == null) {
    return end.marker > start.marker ? buildEventInstanceRange(start.marker, end.marker) : null;
  }
  const startMs = resolveEdgeInstantMs(start.marker, start.instantMs, dateEnv);
  const endMs = resolveEdgeInstantMs(end.marker, end.instantMs, dateEnv);
  if (endMs <= startMs) {
    return null;
  }
  return buildEventInstanceRange(
    start.marker,
    end.marker > start.marker ? end.marker : addMs(start.marker, endMs - startMs),
    // fold-compressed: start's offset reading
    start.instantMs,
    end.instantMs
  );
}
function createEventInstance(defId, range) {
  return {
    instanceId: guid(),
    defId,
    range
  };
}
function computeAlignedDayRange(timedRange) {
  let dayCnt = Math.floor(diffDays4(timedRange.start, timedRange.end)) || 1;
  let start = startOfDay4(timedRange.start);
  let end = addDays3(start, dayCnt);
  return { start, end };
}
function computeVisibleDayRange(timedRange, nextDayThreshold = createDuration(0)) {
  let startDay = null;
  let endDay = null;
  if (timedRange.end) {
    endDay = startOfDay4(timedRange.end);
    let endTimeMS = timedRange.end.valueOf() - endDay.valueOf();
    if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
      endDay = addDays3(endDay, 1);
    }
  }
  if (timedRange.start) {
    startDay = startOfDay4(timedRange.start);
    if (endDay && endDay <= startDay) {
      endDay = addDays3(startDay, 1);
    }
  }
  return { start: startDay, end: endDay };
}
function diffDates2(date0, date1, dateEnv, largeUnit) {
  if (largeUnit === "year") {
    return createDuration(dateEnv.diffWholeYears(date0, date1), "year");
  }
  if (largeUnit === "month") {
    return createDuration(dateEnv.diffWholeMonths(date0, date1), "month");
  }
  return diffDayAndTime(date0, date1);
}
function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
  for (let i3 = 0; i3 < recurringTypes.length; i3 += 1) {
    let parsed = recurringTypes[i3].parse(refined, dateEnv);
    if (parsed) {
      let { allDay } = refined;
      if (allDay == null) {
        allDay = defaultAllDay;
        if (allDay == null) {
          allDay = parsed.allDayGuess;
          if (allDay == null) {
            allDay = false;
          }
        }
      }
      return {
        allDay,
        duration: parsed.duration,
        typeData: parsed.typeData,
        typeId: i3
      };
    }
  }
  return null;
}
function expandRecurring(eventStore, framingRange, context) {
  let { dateEnv, pluginHooks, options } = context;
  let { defs, instances } = eventStore;
  instances = filterHash(instances, (instance) => !defs[instance.defId].recurringDef);
  for (let defId in defs) {
    let def = defs[defId];
    if (def.recurringDef) {
      let { duration } = def.recurringDef;
      if (!duration) {
        duration = def.allDay ? options.defaultAllDayEventDuration : options.defaultTimedEventDuration;
      }
      let starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);
      for (let start of starts) {
        let instance = createEventInstance(defId, {
          start,
          end: dateEnv.add(start, duration)
        });
        instances[instance.instanceId] = instance;
      }
    }
  }
  return { defs, instances };
}
function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
  let typeDef = recurringTypes[eventDef.recurringDef.typeId];
  let markers = typeDef.expand(eventDef.recurringDef.typeData, {
    start: dateEnv.subtract(framingRange.start, duration),
    // for when event starts before framing range and goes into
    end: framingRange.end
  }, dateEnv);
  if (eventDef.allDay) {
    markers = markers.map(startOfDay4);
  }
  return markers;
}
function parseEvents(rawEvents, eventSource, context, allowOpenRange, defIdMap, instanceIdMap) {
  let eventStore = createEmptyEventStore();
  let eventRefiners = buildEventRefiners(context);
  for (let rawEvent of rawEvents) {
    let tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners, defIdMap, instanceIdMap);
    if (tuple) {
      eventTupleToStore(tuple, eventStore);
    }
  }
  return eventStore;
}
function eventTupleToStore(tuple, eventStore = createEmptyEventStore()) {
  eventStore.defs[tuple.def.defId] = tuple.def;
  if (tuple.instance) {
    eventStore.instances[tuple.instance.instanceId] = tuple.instance;
  }
  return eventStore;
}
function getRelevantEvents(eventStore, instanceId) {
  let instance = eventStore.instances[instanceId];
  if (instance) {
    let def = eventStore.defs[instance.defId];
    let newStore = filterEventStoreDefs(eventStore, (lookDef) => isEventDefsGrouped(def, lookDef));
    newStore.defs[def.defId] = def;
    newStore.instances[instance.instanceId] = instance;
    return newStore;
  }
  return createEmptyEventStore();
}
function isEventDefsGrouped(def0, def1) {
  return Boolean(def0.groupId && def0.groupId === def1.groupId);
}
function createEmptyEventStore() {
  return { defs: {}, instances: {} };
}
function mergeEventStores(store0, store1) {
  return {
    defs: { ...store0.defs, ...store1.defs },
    instances: { ...store0.instances, ...store1.instances }
  };
}
function filterEventStoreDefs(eventStore, filterFunc) {
  let defs = filterHash(eventStore.defs, filterFunc);
  let instances = filterHash(eventStore.instances, (instance) => defs[instance.defId]);
  return { defs, instances };
}
function excludeSubEventStore(master, sub) {
  let { defs, instances } = master;
  let filteredDefs = {};
  let filteredInstances = {};
  for (let defId in defs) {
    if (!sub.defs[defId]) {
      filteredDefs[defId] = defs[defId];
    }
  }
  for (let instanceId in instances) {
    if (!sub.instances[instanceId] && // not explicitly excluded
    filteredDefs[instances[instanceId].defId]) {
      filteredInstances[instanceId] = instances[instanceId];
    }
  }
  return {
    defs: filteredDefs,
    instances: filteredInstances
  };
}
function normalizeConstraint(input, context) {
  if (Array.isArray(input)) {
    return parseEvents(input, null, context, true);
  }
  if (typeof input === "object" && input) {
    return parseEvents([input], null, context, true);
  }
  if (input != null) {
    return String(input);
  }
  return null;
}
var EVENT_UI_REFINERS = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: identity,
  // Identity<ConstraintInput>, // circular reference. ts dies. event->constraint->event
  overlap: identity,
  allow: identity,
  class: refineClassName,
  className: refineClassName,
  color: String,
  contrastColor: String
};
var EMPTY_EVENT_UI = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  color: "",
  contrastColor: "",
  className: ""
};
function createEventUi(refined, context) {
  let constraint = normalizeConstraint(refined.constraint, context);
  return {
    display: refined.display || null,
    startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
    durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
    constraints: constraint != null ? [constraint] : [],
    overlap: refined.overlap != null ? refined.overlap : null,
    allows: refined.allow != null ? [refined.allow] : [],
    color: refined.color || "",
    contrastColor: refined.contrastColor || "",
    className: (refined.class ?? refined.className) || ""
  };
}
function combineEventUis(uis) {
  return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
}
function combineTwoEventUis(item0, item1) {
  return {
    display: item1.display != null ? item1.display : item0.display,
    startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
    durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
    constraints: item0.constraints.concat(item1.constraints),
    overlap: typeof item1.overlap === "boolean" ? item1.overlap : item0.overlap,
    allows: item0.allows.concat(item1.allows),
    color: item1.color || item0.color,
    contrastColor: item1.contrastColor || item0.contrastColor,
    className: joinClassNames(item0.className, item1.className)
  };
}
var EVENT_NON_DATE_REFINERS = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
};
var EVENT_DATE_REFINERS = {
  start: identity,
  end: identity,
  date: identity,
  allDay: Boolean
};
var EVENT_REFINERS = {
  ...EVENT_NON_DATE_REFINERS,
  ...EVENT_DATE_REFINERS,
  extendedProps: identity
};
function parseEvent(raw, eventSource, context, allowOpenRange, refiners = buildEventRefiners(context), defIdMap, instanceIdMap) {
  let { refined, extra } = refineEventDef(raw, context, refiners);
  let defaultAllDay = computeIsDefaultAllDay(eventSource, context);
  let recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);
  if (recurringRes) {
    let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : "", recurringRes.allDay, Boolean(recurringRes.duration), context, defIdMap);
    def.recurringDef = {
      typeId: recurringRes.typeId,
      typeData: recurringRes.typeData,
      duration: recurringRes.duration
    };
    return { def, instance: null };
  }
  let singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);
  if (singleRes) {
    let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : "", singleRes.allDay, singleRes.hasEnd, context, defIdMap);
    let instance = createEventInstance(def.defId, singleRes.range);
    if (instanceIdMap && def.publicId && instanceIdMap[def.publicId]) {
      instance.instanceId = instanceIdMap[def.publicId];
    }
    return { def, instance };
  }
  return null;
}
function refineEventDef(raw, context, refiners = buildEventRefiners(context)) {
  return refineProps(raw, refiners);
}
function buildEventRefiners(context) {
  return { ...EVENT_UI_REFINERS, ...EVENT_REFINERS, ...context.pluginHooks.eventRefiners };
}
function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context, defIdMap) {
  let def = {
    title: refined.title || "",
    groupId: refined.groupId || "",
    publicId: refined.id || "",
    url: refined.url || "",
    recurringDef: null,
    defId: (defIdMap && refined.id ? defIdMap[refined.id] : "") || guid(),
    sourceId,
    allDay,
    hasEnd,
    interactive: refined.interactive,
    ui: createEventUi(refined, context),
    extendedProps: {
      ...refined.extendedProps || {},
      ...extra
    }
  };
  for (let memberAdder of context.pluginHooks.eventDefMemberAdders) {
    Object.assign(def, memberAdder(refined));
  }
  Object.freeze(def.ui.className);
  Object.freeze(def.extendedProps);
  return def;
}
function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
  let { allDay } = refined;
  let startMeta;
  let startMarker = null;
  let hasEnd = false;
  let endMeta;
  let endMarker = null;
  let startInput = refined.start != null ? refined.start : refined.date;
  startMeta = context.dateEnv.createMarkerMeta(startInput);
  if (startMeta) {
    startMarker = startMeta.marker;
  } else if (!allowOpenRange) {
    return null;
  }
  if (refined.end != null) {
    endMeta = context.dateEnv.createMarkerMeta(refined.end);
  }
  if (allDay == null) {
    if (defaultAllDay != null) {
      allDay = defaultAllDay;
    } else {
      allDay = (!startMeta || startMeta.isTimeUnspecified) && (!endMeta || endMeta.isTimeUnspecified);
    }
  }
  if (allDay && startMarker) {
    startMarker = startOfDay4(startMarker);
  }
  let startInstantMs = !allDay && startMeta ? startMeta.instantMs : void 0;
  let range = null;
  if (endMeta) {
    endMarker = allDay ? startOfDay4(endMeta.marker) : endMeta.marker;
    if (!startMarker) {
      range = buildEventInstanceRange(startMarker, endMarker, void 0, allDay ? void 0 : endMeta.instantMs);
    } else if (allDay) {
      if (endMarker > startMarker) {
        range = buildEventInstanceRange(startMarker, endMarker);
      }
    } else {
      range = buildValidInstanceRange({ marker: startMarker, instantMs: startInstantMs }, { marker: endMarker, instantMs: endMeta.instantMs }, context.dateEnv);
    }
  }
  if (range) {
    hasEnd = true;
  } else if (allowOpenRange) {
    range = buildEventInstanceRange(startMarker, null, startInstantMs);
  } else {
    hasEnd = context.options.forceEventDuration || false;
    let endEdge = addDurationToEdge({ marker: startMarker, instantMs: startInstantMs }, allDay ? context.options.defaultAllDayEventDuration : context.options.defaultTimedEventDuration, context.dateEnv);
    range = buildEventInstanceRange(startMarker, endEdge.marker, startInstantMs, endEdge.instantMs);
  }
  return { allDay, hasEnd, range };
}
function computeIsDefaultAllDay(eventSource, context) {
  let res = null;
  if (eventSource) {
    res = eventSource.defaultAllDay;
  }
  if (res == null) {
    res = context.options.defaultAllDay;
  }
  return res;
}
var STANDARD_PROPS = {
  start: identity,
  end: identity,
  allDay: Boolean
};
function parseDateSpan(raw, dateEnv, defaultDuration) {
  let span = parseOpenDateSpan(raw, dateEnv);
  if (!span) {
    return null;
  }
  let { range } = span;
  if (!range.start) {
    return null;
  }
  if (!range.end) {
    if (defaultDuration == null) {
      return null;
    }
    const endEdge = addDurationToEdge({ marker: range.start, instantMs: span.instantStartMs }, defaultDuration, dateEnv);
    range.end = endEdge.marker;
    if (endEdge.instantMs != null) {
      span.instantEndMs = endEdge.instantMs;
    }
  }
  return span;
}
function parseOpenDateSpan(raw, dateEnv) {
  let { refined: standardProps, extra } = refineProps(raw, STANDARD_PROPS);
  let startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
  let endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
  let { allDay } = standardProps;
  if (allDay == null) {
    allDay = startMeta && startMeta.isTimeUnspecified && (!endMeta || endMeta.isTimeUnspecified);
  }
  let range = {
    start: startMeta ? startMeta.marker : null,
    end: endMeta ? endMeta.marker : null
  };
  if (!allDay && startMeta && endMeta && (startMeta.instantMs != null || endMeta.instantMs != null)) {
    const validRange = buildValidInstanceRange({ marker: startMeta.marker, instantMs: startMeta.instantMs }, { marker: endMeta.marker, instantMs: endMeta.instantMs }, dateEnv);
    if (!validRange && startMeta.instantMs != null && endMeta.instantMs != null) {
      return null;
    }
    if (validRange) {
      range = { start: validRange.start, end: validRange.end };
    }
  }
  const span = {
    range,
    allDay,
    ...extra
  };
  if (allDay) {
    delete span.instantStartMs;
    delete span.instantEndMs;
  } else {
    if (startMeta?.instantMs != null) {
      span.instantStartMs = startMeta.instantMs;
    }
    if (endMeta?.instantMs != null) {
      span.instantEndMs = endMeta.instantMs;
    }
  }
  return span;
}
function buildDateSpanApi(span, dateEnv) {
  return {
    ...buildRangeApi(span.range, dateEnv, span.allDay, span),
    allDay: span.allDay
  };
}
function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
  return {
    ...buildRangeApi(range, dateEnv, omitTime),
    timeZone: dateEnv.timeZone
  };
}
function buildRangeApi(range, dateEnv, omitTime, rangeMeta) {
  const instantStartMs = rangeMeta?.instantStartMs ?? range.instantStartMs;
  const instantEndMs = rangeMeta?.instantEndMs ?? range.instantEndMs;
  const start = buildRangeEdgeOutput(range.start, instantStartMs, dateEnv, omitTime);
  const end = buildRangeEdgeOutput(range.end, instantEndMs, dateEnv, omitTime);
  return {
    start: start.date,
    end: end.date,
    startStr: start.dateStr,
    endStr: end.dateStr
  };
}
function fabricateEventRange(dateSpan, eventUiBases, context) {
  let res = refineEventDef({ editable: false }, context);
  let def = parseEventDef(
    res.refined,
    res.extra,
    "",
    // sourceId
    dateSpan.allDay,
    true,
    // hasEnd
    context
  );
  return {
    def,
    ui: compileEventUi(def, eventUiBases),
    instance: createEventInstance(def.defId, dateSpan.range),
    range: dateSpan.range,
    isStart: true,
    isEnd: true
  };
}
function triggerDateSelect(selection, pev, context) {
  context.emitter.trigger("select", {
    ...buildDateSpanApiWithContext(selection, context),
    jsEvent: pev ? pev.origEvent : null,
    // Is this always a mouse event? See #4655
    view: context.viewApi || context.calendarApi.view
  });
}
function triggerDateUnselect(pev, context) {
  context.emitter.trigger("unselect", {
    jsEvent: pev ? pev.origEvent : null,
    // Is this always a mouse event? See #4655
    view: context.viewApi || context.calendarApi.view
  });
}
function buildDateSpanApiWithContext(dateSpan, context) {
  let props = {};
  for (let transform of context.pluginHooks.dateSpanTransforms) {
    Object.assign(props, transform(dateSpan, context));
  }
  Object.assign(props, buildDateSpanApi(dateSpan, context.dateEnv));
  return props;
}
function getDefaultEventEnd(allDay, marker, context) {
  let { dateEnv, options } = context;
  let end = marker;
  if (allDay) {
    end = startOfDay4(end);
    end = dateEnv.add(end, options.defaultAllDayEventDuration);
  } else {
    end = dateEnv.add(end, options.defaultTimedEventDuration);
  }
  return end;
}
function getDefaultEventEndEdge(allDay, start, context) {
  if (allDay) {
    return { marker: getDefaultEventEnd(true, start.marker, context) };
  }
  return addDurationToEdge(start, context.options.defaultTimedEventDuration, context.dateEnv);
}
function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
  let eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
  let dest = createEmptyEventStore();
  for (let defId in eventStore.defs) {
    let def = eventStore.defs[defId];
    dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
  }
  for (let instanceId in eventStore.instances) {
    let instance = eventStore.instances[instanceId];
    let def = dest.defs[instance.defId];
    dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
  }
  return dest;
}
function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
  let standardProps = mutation.standardProps || {};
  if (standardProps.hasEnd == null && eventConfig.durationEditable && (mutation.startDelta || mutation.endDelta)) {
    standardProps.hasEnd = true;
  }
  let copy = {
    ...eventDef,
    ...standardProps,
    ui: { ...eventDef.ui, ...standardProps.ui }
    // the only prop we want to recursively overlay
  };
  if (mutation.extendedProps) {
    copy.extendedProps = { ...copy.extendedProps, ...mutation.extendedProps };
  }
  for (let applier of context.pluginHooks.eventDefMutationAppliers) {
    applier(copy, mutation, context);
  }
  if (!copy.hasEnd && context.options.forceEventDuration) {
    copy.hasEnd = true;
  }
  return copy;
}
function applyMutationToEventInstance(eventInstance, eventDef, eventConfig, mutation, context) {
  let forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
  let clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
  let copy = { ...eventInstance };
  if (forceAllDay) {
    copy.range = computeAlignedDayRange(copy.range);
  }
  if (mutation.datesDelta && eventConfig.startEditable) {
    copy.range = buildInstanceRange(addDeltaToRangeEdge(copy.range.start, copy.range.instantStartMs, mutation.datesDelta, mutation.instantDatesDeltaMs, context), addDeltaToRangeEdge(copy.range.end, copy.range.instantEndMs, mutation.datesDelta, mutation.instantDatesDeltaMs, context));
  }
  if (mutation.startDelta && eventConfig.durationEditable) {
    copy.range = buildInstanceRange(addDeltaToRangeEdge(copy.range.start, copy.range.instantStartMs, mutation.startDelta, mutation.instantStartDeltaMs, context), { marker: copy.range.end, instantMs: copy.range.instantEndMs });
  }
  if (mutation.endDelta && eventConfig.durationEditable) {
    copy.range = buildInstanceRange({ marker: copy.range.start, instantMs: copy.range.instantStartMs }, addDeltaToRangeEdge(copy.range.end, copy.range.instantEndMs, mutation.endDelta, mutation.instantEndDeltaMs, context));
  }
  if (clearEnd) {
    const startEdge = { marker: copy.range.start, instantMs: copy.range.instantStartMs };
    copy.range = buildInstanceRange(startEdge, getDefaultEventEndEdge(eventDef.allDay, startEdge, context));
  }
  if (eventDef.allDay) {
    copy.range = {
      start: startOfDay4(copy.range.start),
      end: startOfDay4(copy.range.end)
    };
  }
  if (eventDef.allDay) {
    if (copy.range.end <= copy.range.start) {
      const startEdge = { marker: copy.range.start };
      copy.range = buildInstanceRange(startEdge, getDefaultEventEndEdge(true, startEdge, context));
    }
  } else {
    const startEdge = { marker: copy.range.start, instantMs: copy.range.instantStartMs };
    copy.range = buildValidInstanceRange(startEdge, { marker: copy.range.end, instantMs: copy.range.instantEndMs }, context.dateEnv) ?? buildInstanceRange(startEdge, getDefaultEventEndEdge(false, startEdge, context));
  }
  return copy;
}
function addDeltaToRangeEdge(marker, instantMs, delta, instantDeltaMs, context) {
  if (instantDeltaMs != null) {
    const newInstantMs = resolveEdgeInstantMs(marker, instantMs, context.dateEnv) + instantDeltaMs;
    return {
      marker: context.dateEnv.timestampToMarker(newInstantMs),
      instantMs: newInstantMs
    };
  }
  return {
    marker: context.dateEnv.add(instantMs != null ? context.dateEnv.timestampToMarker(instantMs) : marker, delta)
  };
}
function buildInstanceRange(start, end) {
  return buildEventInstanceRange(start.marker, end.marker, start.instantMs, end.instantMs);
}
var EventSourceImpl = class {
  constructor(context, internalEventSource) {
    this.context = context;
    this.internalEventSource = internalEventSource;
  }
  remove() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  }
  refetch() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: true
    });
  }
  get id() {
    return this.internalEventSource.publicId;
  }
  get url() {
    return this.internalEventSource.meta.url;
  }
  get format() {
    return this.internalEventSource.meta.format;
  }
};
var EventImpl = class _EventImpl {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  constructor(context, def, instance) {
    this._context = context;
    this._def = def;
    this._instance = instance || null;
  }
  /*
  TODO: make event struct more responsible for this
  */
  setProp(name, val) {
    if (name in EVENT_DATE_REFINERS) {
      warn(`Cannot set date-related event property \`${name}\`. Use a method instead.`);
    } else if (name === "id") {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: { publicId: val }
        // hardcoded internal name
      });
    } else if (name in EVENT_NON_DATE_REFINERS) {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: { [name]: val }
      });
    } else if (name in EVENT_UI_REFINERS) {
      let ui = EVENT_UI_REFINERS[name](val);
      if (name === "editable") {
        ui = { startEditable: val, durationEditable: val };
      } else {
        ui = { [name]: val };
      }
      this.mutate({
        standardProps: { ui }
      });
    } else {
      warn(`Cannot set event property \`${name}\`. Use setExtendedProp instead.`);
    }
  }
  setExtendedProp(name, val) {
    this.mutate({
      extendedProps: { [name]: val }
    });
  }
  setStart(startInput, options = {}) {
    let { dateEnv } = this._context;
    let startMeta = dateEnv.createMarkerMeta(startInput);
    if (startMeta && this._instance) {
      let instanceRange = this._instance.range;
      let startDelta = diffDates2(instanceRange.start, startMeta.marker, dateEnv, options.granularity);
      let instantDeltaMs = computeInstantDeltaMs(startMeta, getRangeInstantStartMs(instanceRange, dateEnv), options.granularity);
      if (options.maintainDuration) {
        this.mutate({ datesDelta: startDelta, instantDatesDeltaMs: instantDeltaMs });
      } else {
        this.mutate({ startDelta, instantStartDeltaMs: instantDeltaMs });
      }
    }
  }
  setEnd(endInput, options = {}) {
    let { dateEnv } = this._context;
    let endMeta = null;
    if (endInput != null) {
      endMeta = dateEnv.createMarkerMeta(endInput);
      if (!endMeta) {
        return;
      }
    }
    if (this._instance) {
      if (endMeta) {
        let instanceRange = this._instance.range;
        let endDelta = diffDates2(canonicalRangeEndMarker(instanceRange, dateEnv), endMeta.marker, dateEnv, options.granularity);
        let instantDeltaMs = computeInstantDeltaMs(endMeta, getRangeInstantEndMs(instanceRange, dateEnv), options.granularity);
        this.mutate({ endDelta, instantEndDeltaMs: instantDeltaMs });
      } else {
        this.mutate({ standardProps: { hasEnd: false } });
      }
    }
  }
  setDates(startInput, endInput, options = {}) {
    let { dateEnv } = this._context;
    let standardProps = { allDay: options.allDay };
    let startMeta = dateEnv.createMarkerMeta(startInput);
    let endMeta = null;
    if (!startMeta) {
      return;
    }
    if (endInput != null) {
      endMeta = dateEnv.createMarkerMeta(endInput);
      if (!endMeta) {
        return;
      }
    }
    if (this._instance) {
      let instanceRange = this._instance.range;
      let skipInstants = options.allDay === true;
      let instantStartDeltaMs = skipInstants ? void 0 : computeInstantDeltaMs(startMeta, getRangeInstantStartMs(instanceRange, dateEnv), options.granularity);
      let instantEndDeltaMs = skipInstants || !endMeta ? void 0 : computeInstantDeltaMs(endMeta, getRangeInstantEndMs(instanceRange, dateEnv), options.granularity);
      if (options.allDay === true) {
        instanceRange = computeAlignedDayRange(instanceRange);
      }
      let startDelta = diffDates2(instanceRange.start, startMeta.marker, dateEnv, options.granularity);
      if (endMeta) {
        let endDelta = diffDates2(canonicalRangeEndMarker(instanceRange, dateEnv), endMeta.marker, dateEnv, options.granularity);
        if (durationsEqual(startDelta, endDelta) && instantStartDeltaMs === instantEndDeltaMs) {
          this.mutate({ datesDelta: startDelta, instantDatesDeltaMs: instantStartDeltaMs, standardProps });
        } else {
          this.mutate({ startDelta, endDelta, instantStartDeltaMs, instantEndDeltaMs, standardProps });
        }
      } else {
        standardProps.hasEnd = false;
        this.mutate({ datesDelta: startDelta, instantDatesDeltaMs: instantStartDeltaMs, standardProps });
      }
    }
  }
  moveStart(deltaInput) {
    let delta = createDuration(deltaInput);
    if (delta) {
      this.mutate({ startDelta: delta });
    }
  }
  moveEnd(deltaInput) {
    let delta = createDuration(deltaInput);
    if (delta) {
      this.mutate({ endDelta: delta });
    }
  }
  moveDates(deltaInput) {
    let delta = createDuration(deltaInput);
    if (delta) {
      this.mutate({ datesDelta: delta });
    }
  }
  setAllDay(allDay, options = {}) {
    let standardProps = { allDay };
    let { maintainDuration } = options;
    if (maintainDuration == null) {
      maintainDuration = this._context.options.allDayMaintainDuration;
    }
    if (this._def.allDay !== allDay) {
      standardProps.hasEnd = maintainDuration;
    }
    this.mutate({ standardProps });
  }
  formatRange(formatInput) {
    let { dateEnv } = this._context;
    let instance = this._instance;
    let formatter = createFormatter(formatInput);
    let start = buildRangeEdgeOutput(instance.range.start, instance.range.instantStartMs, dateEnv);
    if (this._def.hasEnd) {
      let end = buildRangeEdgeOutput(instance.range.end, instance.range.instantEndMs, dateEnv);
      return joinDateTimeFormatParts(dateEnv.formatRangeToParts(start.marker, end.marker, formatter, {
        startInstantMs: start.date.valueOf(),
        endInstantMs: end.date.valueOf()
      }));
    }
    return joinDateTimeFormatParts(dateEnv.formatToParts(start.marker, formatter, {
      instantMs: start.date.valueOf()
    }));
  }
  mutate(mutation) {
    let instance = this._instance;
    if (instance) {
      let def = this._def;
      let context = this._context;
      let { eventStore } = context.getCurrentData();
      let relevantEvents = getRelevantEvents(eventStore, instance.instanceId);
      let eventConfigBase = {
        "": {
          display: "",
          startEditable: true,
          durationEditable: true,
          constraints: [],
          overlap: null,
          allows: [],
          color: "",
          contrastColor: "",
          className: ""
        }
      };
      relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context);
      let oldEvent = new _EventImpl(context, def, instance);
      this._def = relevantEvents.defs[def.defId];
      this._instance = relevantEvents.instances[instance.instanceId];
      context.dispatch({
        type: "MERGE_EVENTS",
        eventStore: relevantEvents
      });
      context.emitter.trigger("eventChange", {
        oldEvent,
        event: this,
        relatedEvents: buildEventApis(relevantEvents, context, instance),
        revert() {
          context.dispatch({
            type: "RESET_EVENTS",
            eventStore
            // the ORIGINAL store
          });
        }
      });
    }
  }
  remove() {
    let context = this._context;
    let asStore = eventApiToStore(this);
    context.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: asStore
    });
    context.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert() {
        context.dispatch({
          type: "MERGE_EVENTS",
          eventStore: asStore
        });
      }
    });
  }
  get source() {
    let { sourceId } = this._def;
    if (sourceId) {
      return new EventSourceImpl(this._context, this._context.getCurrentData().eventSources[sourceId]);
    }
    return null;
  }
  get start() {
    let instance = this._instance;
    if (instance) {
      return buildRangeEdgeOutput(instance.range.start, instance.range.instantStartMs, this._context.dateEnv, this._def.allDay).date;
    }
    return null;
  }
  get end() {
    let instance = this._instance;
    if (instance && this._def.hasEnd) {
      return buildRangeEdgeOutput(instance.range.end, instance.range.instantEndMs, this._context.dateEnv, this._def.allDay).date;
    }
    return null;
  }
  get startStr() {
    let instance = this._instance;
    if (instance) {
      return buildRangeEdgeOutput(instance.range.start, instance.range.instantStartMs, this._context.dateEnv, this._def.allDay).dateStr;
    }
    return "";
  }
  get endStr() {
    let instance = this._instance;
    if (instance && this._def.hasEnd) {
      return buildRangeEdgeOutput(instance.range.end, instance.range.instantEndMs, this._context.dateEnv, this._def.allDay).dateStr;
    }
    return "";
  }
  // computable props that all access the def
  // TODO: find a TypeScript-compatible way to do this at scale
  get id() {
    return this._def.publicId;
  }
  get groupId() {
    return this._def.groupId;
  }
  get allDay() {
    return this._def.allDay;
  }
  get title() {
    return this._def.title;
  }
  get url() {
    return this._def.url;
  }
  get display() {
    return this._def.ui.display || "auto";
  }
  // bad. just normalize the type earlier
  get startEditable() {
    return this._def.ui.startEditable;
  }
  get durationEditable() {
    return this._def.ui.durationEditable;
  }
  get constraint() {
    return this._def.ui.constraints[0] || null;
  }
  get overlap() {
    return this._def.ui.overlap;
  }
  get allow() {
    return this._def.ui.allows[0] || null;
  }
  get color() {
    return this._def.ui.color;
  }
  get contrastColor() {
    return this._def.ui.contrastColor;
  }
  // NOTE: user can't modify these because Object.freeze was called in event-def parsing
  get className() {
    return this._def.ui.className;
  }
  get extendedProps() {
    return this._def.extendedProps;
  }
  toPlainObject(settings = {}) {
    let def = this._def;
    let { ui } = def;
    let { startStr, endStr } = this;
    let res = {
      allDay: def.allDay
    };
    if (def.title) {
      res.title = def.title;
    }
    if (startStr) {
      res.start = startStr;
    }
    if (endStr) {
      res.end = endStr;
    }
    if (def.publicId) {
      res.id = def.publicId;
    }
    if (def.groupId) {
      res.groupId = def.groupId;
    }
    if (def.url) {
      res.url = def.url;
    }
    if (ui.display && ui.display !== "auto") {
      res.display = ui.display;
    }
    if (ui.color) {
      res.color = ui.color;
    }
    if (ui.contrastColor) {
      res.contrastColor = ui.contrastColor;
    }
    if (ui.className) {
      res.className = ui.className;
    }
    if (Object.keys(def.extendedProps).length) {
      if (settings.collapseExtendedProps) {
        Object.assign(res, def.extendedProps);
      } else {
        res.extendedProps = def.extendedProps;
      }
    }
    return res;
  }
  toJSON() {
    return this.toPlainObject();
  }
};
function computeInstantDeltaMs(meta, fromInstantMs, granularity) {
  return meta.instantMs != null && !granularity ? meta.instantMs - fromInstantMs : void 0;
}
function eventApiToStore(eventApi) {
  let def = eventApi._def;
  let instance = eventApi._instance;
  return {
    defs: { [def.defId]: def },
    instances: instance ? { [instance.instanceId]: instance } : {}
  };
}
function buildEventApis(eventStore, context, excludeInstance) {
  let { defs, instances } = eventStore;
  let eventApis = [];
  let excludeInstanceId = excludeInstance ? excludeInstance.instanceId : "";
  for (let id in instances) {
    let instance = instances[id];
    let def = defs[instance.defId];
    if (instance.instanceId !== excludeInstanceId) {
      eventApis.push(new EventImpl(context, def, instance));
    }
  }
  return eventApis;
}
function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
  let inverseBgByGroupId = {};
  let inverseBgByDefId = {};
  let defByGroupId = {};
  let bgRanges = [];
  let fgRanges = [];
  let eventUis = compileEventUis(eventStore.defs, eventUiBases);
  for (let defId in eventStore.defs) {
    let def = eventStore.defs[defId];
    let ui = eventUis[def.defId];
    if (ui.display === "inverse-background") {
      if (def.groupId) {
        inverseBgByGroupId[def.groupId] = [];
        if (!defByGroupId[def.groupId]) {
          defByGroupId[def.groupId] = def;
        }
      } else {
        inverseBgByDefId[defId] = [];
      }
    }
  }
  for (let instanceId in eventStore.instances) {
    let instance = eventStore.instances[instanceId];
    let def = eventStore.defs[instance.defId];
    let ui = eventUis[def.defId];
    let origRange = instance.range;
    let normalRange = !def.allDay && nextDayThreshold ? computeVisibleDayRange(origRange, nextDayThreshold) : origRange;
    let slicedRange = intersectRanges(normalRange, framingRange);
    if (slicedRange) {
      if (ui.display === "inverse-background") {
        if (def.groupId) {
          inverseBgByGroupId[def.groupId].push(slicedRange);
        } else {
          inverseBgByDefId[instance.defId].push(slicedRange);
        }
      } else if (ui.display !== "none") {
        (ui.display === "background" ? bgRanges : fgRanges).push({
          def,
          ui,
          instance,
          range: buildSlicedEventRange(origRange, normalRange, slicedRange),
          isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
          isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
        });
      }
    }
  }
  for (let groupId in inverseBgByGroupId) {
    let ranges = inverseBgByGroupId[groupId];
    let invertedRanges = invertRanges(ranges, framingRange);
    for (let invertedRange of invertedRanges) {
      let def = defByGroupId[groupId];
      let ui = eventUis[def.defId];
      bgRanges.push({
        def,
        ui,
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }
  for (let defId in inverseBgByDefId) {
    let ranges = inverseBgByDefId[defId];
    let invertedRanges = invertRanges(ranges, framingRange);
    for (let invertedRange of invertedRanges) {
      bgRanges.push({
        def: eventStore.defs[defId],
        ui: eventUis[defId],
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }
  return { bg: bgRanges, fg: fgRanges };
}
function buildSlicedEventRange(origRange, normalRange, slicedRange) {
  if (normalRange !== origRange) {
    return slicedRange;
  }
  return buildEventInstanceRange(slicedRange.start, slicedRange.end, slicedRange.start.valueOf() === origRange.start.valueOf() ? origRange.instantStartMs : void 0, slicedRange.end.valueOf() === origRange.end.valueOf() ? origRange.instantEndMs : void 0);
}
function setElEventRange(el, eventRange) {
  el.fcEventRange = eventRange;
}
function getElEventRange(el) {
  return el.fcEventRange || el.parentNode.fcEventRange || // for the harness
  null;
}
function compileEventUis(eventDefs, eventUiBases) {
  return mapHash(eventDefs, (eventDef) => compileEventUi(eventDef, eventUiBases));
}
function compileEventUi(eventDef, eventUiBases) {
  const uis = [];
  const fallbackBase = eventUiBases[""];
  const defBase = eventUiBases[eventDef.defId];
  if (fallbackBase) {
    uis.push(fallbackBase);
  }
  if (defBase) {
    uis.push(defBase);
  }
  uis.push(eventDef.ui);
  return combineEventUis(uis);
}
function sortEventSegs(segs, eventOrderSpecs) {
  let objs = segs.map(buildSegCompareObj);
  objs.sort((obj0, obj1) => compareByFieldSpecs(obj0, obj1, eventOrderSpecs));
  return objs.map((c3) => c3._seg);
}
function buildSegCompareObj(seg) {
  let { eventRange } = seg;
  let eventDef = eventRange.def;
  let range = eventRange.instance ? eventRange.instance.range : eventRange.range;
  let start = range.start ? range.start.valueOf() : 0;
  let end = range.end ? range.end.valueOf() : 0;
  return {
    ...eventDef.extendedProps,
    ...eventDef,
    id: eventDef.publicId,
    start,
    end,
    duration: end - start,
    allDay: Number(eventDef.allDay),
    _seg: seg
    // for later retrieval
  };
}
function computeEventRangeDraggable(eventRange, context) {
  let { pluginHooks } = context;
  let transformers = pluginHooks.isDraggableTransformers;
  let { def, ui } = eventRange;
  let val = ui.startEditable;
  for (let transformer of transformers) {
    val = transformer(val, def, ui, context);
  }
  return val;
}
function buildEventRangeTimeText(timeFormat, eventRange, slicedStart, slicedEnd, isStart, isEnd, context, defaultDisplayEventTime = true, defaultDisplayEventEnd = true) {
  const { dateEnv, options } = context;
  const { def } = eventRange;
  const { range } = eventRange.instance;
  const canonicalStart = buildRangeEdgeOutput(range.start, range.instantStartMs, dateEnv);
  const canonicalEnd = buildRangeEdgeOutput(range.end, range.instantEndMs, dateEnv);
  let { displayEventTime, displayEventEnd } = options;
  if (displayEventTime == null) {
    displayEventTime = defaultDisplayEventTime !== false;
  }
  if (displayEventEnd == null) {
    displayEventEnd = defaultDisplayEventEnd !== false;
  }
  const startDate = !isStart && slicedStart && // if seg is the first seg, but start-date cut-off by slotMinTime, (technically isStart=false)
  // we still want to display the original start-time
  startOfDay4(slicedStart).valueOf() !== startOfDay4(canonicalStart.marker).valueOf() ? slicedStart : canonicalStart.marker;
  const endDate = !isEnd && slicedEnd && // See above HACK, but for end-time
  startOfDay4(addMs(slicedEnd, -1)).valueOf() !== startOfDay4(addMs(canonicalEnd.marker, -1)).valueOf() ? slicedEnd : canonicalEnd.marker;
  const startInstantMs = startDate === canonicalStart.marker ? canonicalStart.date.valueOf() : void 0;
  const endInstantMs = endDate === canonicalEnd.marker ? canonicalEnd.date.valueOf() : void 0;
  if (displayEventTime && !def.allDay) {
    if (displayEventEnd && (isStart || isEnd) && def.hasEnd) {
      const rangeParts = dateEnv.formatRangeToParts(startDate, endDate, timeFormat, {
        startInstantMs,
        endInstantMs
      });
      const multiDaySeparator = detectMultiDayTimes(rangeParts);
      if (multiDaySeparator != null) {
        return joinDateTimeFormatParts(dateEnv.formatToParts(startDate, timeFormat, {
          instantMs: startInstantMs
        })) + multiDaySeparator + joinDateTimeFormatParts(dateEnv.formatToParts(endDate, timeFormat, {
          instantMs: endInstantMs
        }));
      }
      return joinDateTimeFormatParts(rangeParts);
    }
    if (isStart) {
      return joinDateTimeFormatParts(dateEnv.formatToParts(startDate, timeFormat, {
        instantMs: startInstantMs
      }));
    }
  }
  return "";
}
var dateUnits = /* @__PURE__ */ new Set(["year", "month", "day"]);
function detectMultiDayTimes(parts) {
  let sharedPart;
  let hasDatePart = false;
  for (const part of parts) {
    if (part.source === "shared") {
      sharedPart = part;
    }
    if (dateUnits.has(part.type)) {
      hasDatePart = true;
    }
  }
  return hasDatePart ? sharedPart.value : void 0;
}
function getEventRangeMeta(eventRange, todayRange, nowDate, nowMs) {
  let segRange = eventRange.range;
  return {
    isPast: segRange.instantEndMs != null && nowMs != null ? segRange.instantEndMs <= nowMs : segRange.end <= (nowDate || todayRange.start),
    isFuture: segRange.instantStartMs != null && nowMs != null ? segRange.instantStartMs >= nowMs : segRange.start >= (nowDate || todayRange.end),
    isToday: todayRange && rangeContainsMarker(todayRange, segRange.start)
  };
}
function buildEventRangeKey(eventRange) {
  return eventRange.instance ? eventRange.instance.instanceId : `${eventRange.def.defId}:${eventRange.range.start.toISOString()}`;
}
function getEventTagAndAttrs(eventRange, context) {
  let { def, instance } = eventRange;
  let { url } = def;
  if (url) {
    return ["a", { href: url }, true];
  }
  let { emitter, options } = context;
  let { eventInteractive } = options;
  if (eventInteractive == null) {
    eventInteractive = def.interactive;
    if (eventInteractive == null) {
      eventInteractive = Boolean(emitter.hasHandlers("eventClick"));
    }
  }
  let attrs;
  if (eventInteractive) {
    attrs = createAriaKeyboardAttrs((ev) => {
      emitter.trigger("eventClick", {
        el: ev.target,
        event: new EventImpl(context, def, instance),
        jsEvent: ev,
        view: context.viewApi
      });
    });
    attrs = { role: "button", ...attrs };
  }
  return ["div", attrs, eventInteractive];
}

// node_modules/fullcalendar/chunks/167cc14f.js
var classNamesRe = /(^c|C)lass(Name)?$/;
var contentRe = /Content$/;
var lifecycleRe = /(DidMount|WillUnmount)$/;
var handlerRe = /^on[A-Z]/;
var customMergeFuncs = {
  buttons: mergeMaybePropsDepth1
};
function mergeViewOptionsMap(...hashes) {
  const merged = {};
  for (const hash of hashes) {
    for (const viewName in hash) {
      const viewOptions = hash[viewName];
      if (!merged[viewName]) {
        merged[viewName] = viewOptions;
      } else {
        merged[viewName] = mergeCalendarOptions(merged[viewName], viewOptions);
      }
    }
  }
  return merged;
}
function mergeCalendarOptions(...optionSets) {
  let dest = {};
  for (const options of optionSets) {
    for (let name in options) {
      if (name in dest) {
        const mergeFunc = customMergeFuncs[name] || (classNamesRe.test(name) ? joinFuncishClassNames : contentRe.test(name) ? mergeContentInjectors : lifecycleRe.test(name) ? mergeLifecycleCallbacks : void 0);
        dest[name] = mergeFunc ? mergeFunc(dest[name], options[name], name) : options[name];
      } else {
        dest[name] = options[name];
      }
    }
  }
  return dest;
}
function joinFuncishClassNames(input0, input1, optionName) {
  const isFunc0 = typeof input0 === "function";
  const isFunc1 = typeof input1 === "function";
  if (isFunc0 || isFunc1) {
    const combinedFunc = (info) => {
      return joinClassNames(refineClassName(isFunc0 ? input0(info) : input0, optionName), refineClassName(isFunc1 ? input1(info) : input1, optionName));
    };
    combinedFunc.parts = [input0, input1];
    return combinedFunc;
  }
  return joinClassNames(refineClassName(input0, optionName), refineClassName(input1, optionName));
}
function mergeContentInjectors(contentGenerator0, contentGenerator1) {
  if (typeof contentGenerator1 === "function") {
    const combinedFunc = (renderProps) => {
      const res = contentGenerator1(renderProps);
      if (res === true) {
        if (typeof contentGenerator0 === "function") {
          return contentGenerator0(renderProps);
        }
        return contentGenerator0;
      }
      return res;
    };
    combinedFunc.parts = [contentGenerator0, contentGenerator1];
    return combinedFunc;
  }
  if (contentGenerator1 != null) {
    return contentGenerator1;
  }
  return contentGenerator0;
}
function mergeLifecycleCallbacks(fn0, fn1) {
  if (fn0 && fn1) {
    const combinedFunc = (...args) => {
      fn0(...args);
      fn1(...args);
    };
    combinedFunc.parts = [fn0, fn1];
    return combinedFunc;
  }
  return fn0 || fn1;
}
function isNonHandlerPropsEqual(obj0, obj1) {
  const keys = getUnequalProps(obj0, obj1);
  for (let key of keys) {
    if (!handlerRe.test(key)) {
      return false;
    }
  }
  return true;
}
function isMergedPropsEqual(val0, val1) {
  const parts0 = val0 && val0.parts;
  const parts1 = val1 && val1.parts;
  if (parts0 && parts1) {
    const count0 = parts0.length;
    const count1 = parts1.length;
    if (count0 !== count1) {
      return false;
    }
    for (let i3 = 0; i3 < count0; i3++) {
      if (!(parts0[i3] === parts1[i3] || isMergedPropsEqual(parts0[i3], parts1[i3]))) {
        return false;
      }
    }
    return true;
  }
  return false;
}

// node_modules/fullcalendar/chunks/2308e481.js
var globalLocales = [];
var MINIMAL_RAW_EN_LOCALE = {
  code: "en",
  week: {
    dow: 0,
    // Sunday is the first day of the week
    doy: 4
    // 4 days need to be within the year to be considered the first week
  },
  direction: "ltr",
  // TODO: make a real type for this
  todayText: "Today",
  prevText: "Prev",
  nextText: "Next",
  prevYearText: "Prev year",
  nextYearText: "Next year",
  yearText: "Year",
  monthText: "Month",
  weekTextLong: "Week",
  dayText: "Day",
  listText: "List",
  closeHint: "Close",
  eventsHint: "Events",
  allDayText: "All-day",
  timedText: "Timed",
  moreLinkText: "more",
  noEventsText: "No events to display"
};
var RAW_EN_LOCALE = {
  ...MINIMAL_RAW_EN_LOCALE,
  // if a locale doesn't define this, fall back to weekTextLong, don't use EN
  weekTextShort: "W",
  todayHint: (unitText, unit) => {
    return unit === "day" ? "Today" : `This ${unitText}`;
  },
  prevHint: "Previous $0",
  nextHint: "Next $0",
  viewHint: "$0 view",
  viewChangeHint: "Change view",
  navLinkHint: "Go to $0",
  moreLinkHint(eventCnt) {
    return `Show ${eventCnt} more event${eventCnt === 1 ? "" : "s"}`;
  }
};
function organizeRawLocales(explicitRawLocales) {
  let defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : "en";
  let allRawLocales = globalLocales.concat(explicitRawLocales);
  let rawLocaleMap = {
    en: RAW_EN_LOCALE
  };
  for (let rawLocale of allRawLocales) {
    rawLocaleMap[rawLocale.code] = rawLocale;
  }
  return {
    map: rawLocaleMap,
    defaultCode
  };
}
function buildLocale(inputSingular, available) {
  if (typeof inputSingular === "object" && !Array.isArray(inputSingular)) {
    return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
  }
  return queryLocale(inputSingular, available);
}
function queryLocale(codeArg, available) {
  let codes = [].concat(codeArg || []);
  let raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
  return parseLocale(codeArg, codes, raw);
}
function queryRawLocale(codes, available) {
  for (let i3 = 0; i3 < codes.length; i3 += 1) {
    let parts = codes[i3].toLocaleLowerCase().split("-");
    for (let j4 = parts.length; j4 > 0; j4 -= 1) {
      let simpleId = parts.slice(0, j4).join("-");
      if (available[simpleId]) {
        return available[simpleId];
      }
    }
  }
  return null;
}
function parseLocale(codeArg, codes, raw) {
  let merged = mergeCalendarOptions(MINIMAL_RAW_EN_LOCALE, raw);
  delete merged.code;
  let { week } = merged;
  delete merged.week;
  return {
    codeArg,
    codes,
    week,
    simpleNumberFormat: new Intl.NumberFormat(codeArg),
    options: merged
  };
}
var JsonRequestError = class extends Error {
  constructor(message, response) {
    super(message);
    this.response = response;
  }
};
function requestJson(method, url, params) {
  method = method.toUpperCase();
  const fetchOptions = {
    method
  };
  if (method === "GET") {
    url += (url.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(params);
  } else {
    fetchOptions.body = new URLSearchParams(params);
    fetchOptions.headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
  }
  return fetch(url, fetchOptions).then((fetchRes) => {
    if (fetchRes.ok) {
      return fetchRes.json().then((parsedResponse) => {
        return [parsedResponse, fetchRes];
      }, () => {
        throw new JsonRequestError("Failure parsing JSON", fetchRes);
      });
    } else {
      throw new JsonRequestError("Request failed", fetchRes);
    }
  });
}
function handleDateProfile(dateProfile, context) {
  context.emitter.trigger("datesSet", {
    ...buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv),
    view: context.viewApi
  });
}
function handleEventStore(eventStore, context) {
  let { emitter } = context;
  if (emitter.hasHandlers("eventsSet")) {
    emitter.trigger("eventsSet", buildEventApis(eventStore, context));
  }
}
var eventSourceDef$2 = {
  ignoreRange: true,
  parseMeta(refined) {
    if (Array.isArray(refined.events)) {
      return refined.events;
    }
    return null;
  },
  fetch(arg, successCallback) {
    successCallback({
      rawEvents: arg.eventSource.meta
    });
  }
};
var arrayEventSourcePlugin = {
  name: "array-event-source",
  eventSourceDefs: [eventSourceDef$2]
};
function unpromisify(func, normalizedSuccessCallback, normalizedFailureCallback) {
  let isResolved = false;
  let wrappedSuccess = function(res2) {
    if (!isResolved) {
      isResolved = true;
      normalizedSuccessCallback(res2);
    }
  };
  let wrappedFailure = function(error) {
    if (!isResolved) {
      isResolved = true;
      normalizedFailureCallback(error);
    }
  };
  let res = func(wrappedSuccess, wrappedFailure);
  if (res && typeof res.then === "function") {
    res.then(wrappedSuccess, wrappedFailure);
  }
}
var eventSourceDef$1 = {
  parseMeta(refined) {
    if (typeof refined.events === "function") {
      return refined.events;
    }
    return null;
  },
  fetch(arg, successCallback, errorCallback) {
    const { dateEnv } = arg.context;
    const func = arg.eventSource.meta;
    unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), (rawEvents) => successCallback({ rawEvents }), errorCallback);
  }
};
var funcEventSourcePlugin = {
  name: "func-event-source",
  eventSourceDefs: [eventSourceDef$1]
};
var JSON_FEED_EVENT_SOURCE_REFINERS = {
  method: String,
  extraParams: identity,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
var eventSourceDef = {
  parseMeta(refined) {
    if (refined.url && (refined.format === "json" || !refined.format)) {
      return {
        url: refined.url,
        format: "json",
        method: (refined.method || "GET").toUpperCase(),
        extraParams: refined.extraParams,
        startParam: refined.startParam,
        endParam: refined.endParam,
        timeZoneParam: refined.timeZoneParam
      };
    }
    return null;
  },
  fetch(arg, successCallback, errorCallback) {
    const { meta } = arg.eventSource;
    const requestParams = buildRequestParams(meta, arg.range, arg.context);
    requestJson(meta.method, meta.url, requestParams).then(([rawEvents, response]) => {
      successCallback({ rawEvents, response });
    }, errorCallback);
  }
};
var jsonFeedEventSourcePlugin = {
  name: "json-event-source",
  eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
  eventSourceDefs: [eventSourceDef]
};
function buildRequestParams(meta, range, context) {
  let { dateEnv, options } = context;
  let startParam;
  let endParam;
  let timeZoneParam;
  let customRequestParams;
  let params = {};
  startParam = meta.startParam;
  if (startParam == null) {
    startParam = options.startParam;
  }
  endParam = meta.endParam;
  if (endParam == null) {
    endParam = options.endParam;
  }
  timeZoneParam = meta.timeZoneParam;
  if (timeZoneParam == null) {
    timeZoneParam = options.timeZoneParam;
  }
  if (typeof meta.extraParams === "function") {
    customRequestParams = meta.extraParams();
  } else {
    customRequestParams = meta.extraParams || {};
  }
  Object.assign(params, customRequestParams);
  params[startParam] = dateEnv.formatIso(range.start);
  params[endParam] = dateEnv.formatIso(range.end);
  if (dateEnv.timeZone !== "local") {
    params[timeZoneParam] = dateEnv.timeZone;
  }
  return params;
}
var changeHandlerPlugin = {
  name: "change-handler",
  optionChangeHandlers: {
    controller(controller, context) {
      controller._setApi(context.calendarApi);
    },
    events(events, context) {
      handleEventSources([events], context);
    },
    eventSources: handleEventSources
  }
};
function handleEventSources(inputs, context) {
  let unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
  if (unfoundSources.length === 1 && inputs.length === 1 && Array.isArray(unfoundSources[0]._raw) && Array.isArray(inputs[0])) {
    context.dispatch({
      type: "RESET_RAW_EVENTS",
      sourceId: unfoundSources[0].sourceId,
      rawEvents: inputs[0]
    });
    return;
  }
  let newInputs = [];
  for (let input of inputs) {
    let inputFound = false;
    for (let i3 = 0; i3 < unfoundSources.length; i3 += 1) {
      if (unfoundSources[i3]._raw === input) {
        unfoundSources.splice(i3, 1);
        inputFound = true;
        break;
      }
    }
    if (!inputFound) {
      newInputs.push(input);
    }
  }
  for (let unfoundSource of unfoundSources) {
    context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: unfoundSource.sourceId
    });
  }
  for (let newInput of newInputs) {
    context.calendarApi.addEventSource(newInput);
  }
}
var EVENT_SOURCE_REFINERS = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: identity,
  // array or function
  eventDataTransform: identity,
  // for any network-related sources
  success: identity,
  failure: identity
};
function parseEventSource(raw, context, refiners = buildEventSourceRefiners(context)) {
  let rawObj;
  if (typeof raw === "string") {
    rawObj = { url: raw };
  } else if (typeof raw === "function" || Array.isArray(raw)) {
    rawObj = { events: raw };
  } else if (typeof raw === "object" && raw) {
    rawObj = raw;
  }
  if (rawObj) {
    let { refined, extra } = refineProps(rawObj, refiners);
    let metaRes = buildEventSourceMeta(refined, context);
    if (metaRes) {
      return {
        _raw: raw,
        isFetching: false,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: refined.defaultAllDay,
        eventDataTransform: refined.eventDataTransform,
        success: refined.success,
        failure: refined.failure,
        publicId: refined.id || "",
        sourceId: guid(),
        sourceDefId: metaRes.sourceDefId,
        meta: metaRes.meta,
        ui: createEventUi(refined, context),
        extendedProps: extra
      };
    }
  }
  return null;
}
function buildEventSourceRefiners(context) {
  return { ...EVENT_UI_REFINERS, ...EVENT_SOURCE_REFINERS, ...context.pluginHooks.eventSourceRefiners };
}
function buildEventSourceMeta(raw, context) {
  let defs = context.pluginHooks.eventSourceDefs;
  for (let i3 = defs.length - 1; i3 >= 0; i3 -= 1) {
    let def = defs[i3];
    let meta = def.parseMeta(raw);
    if (meta) {
      return { sourceDefId: i3, meta };
    }
  }
  return null;
}
function initEventSources(calendarOptions, dateProfile, context) {
  let activeRange = dateProfile ? dateProfile.activeRange : null;
  return addSources({}, parseInitialSources(calendarOptions, context), activeRange, context);
}
function reduceEventSources(eventSources, action, dateProfile, context) {
  let activeRange = dateProfile ? dateProfile.activeRange : null;
  switch (action.type) {
    case "ADD_EVENT_SOURCES":
      return addSources(eventSources, action.sources, activeRange, context);
    case "REMOVE_EVENT_SOURCE":
      return removeSource(eventSources, action.sourceId);
    case "PREV":
    // TODO: how do we track all actions that affect dateProfile :(
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      if (dateProfile) {
        return fetchDirtySources(eventSources, activeRange, context);
      }
      return eventSources;
    case "FETCH_EVENT_SOURCES":
      return fetchSourcesByIds(eventSources, action.sourceIds ? (
        // why no type?
        arrayToHash(action.sourceIds)
      ) : excludeStaticSources(eventSources, context), activeRange, action.isRefetch || false, context);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return eventSources;
  }
}
function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
  let activeRange = dateProfile ? dateProfile.activeRange : null;
  return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, true, context);
}
function computeEventSourcesLoading(eventSources) {
  for (let sourceId in eventSources) {
    if (eventSources[sourceId].isFetching) {
      return true;
    }
  }
  return false;
}
function addSources(eventSourceHash, sources, fetchRange, context) {
  let hash = {};
  for (let source of sources) {
    hash[source.sourceId] = source;
  }
  if (fetchRange) {
    hash = fetchDirtySources(hash, fetchRange, context);
  }
  return { ...eventSourceHash, ...hash };
}
function removeSource(eventSourceHash, sourceId) {
  return filterHash(eventSourceHash, (eventSource) => eventSource.sourceId !== sourceId);
}
function fetchDirtySources(sourceHash, fetchRange, context) {
  return fetchSourcesByIds(sourceHash, filterHash(sourceHash, (eventSource) => isSourceDirty(eventSource, fetchRange, context)), fetchRange, false, context);
}
function isSourceDirty(eventSource, fetchRange, context) {
  if (!doesSourceNeedRange(eventSource, context)) {
    return !eventSource.latestFetchId;
  }
  return !context.options.lazyFetching || !eventSource.fetchRange || eventSource.isFetching || // always cancel outdated in-progress fetches
  fetchRange.start < eventSource.fetchRange.start || fetchRange.end > eventSource.fetchRange.end;
}
function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, isRefetch, context) {
  let nextSources = {};
  for (let sourceId in prevSources) {
    let source = prevSources[sourceId];
    if (sourceIdHash[sourceId]) {
      nextSources[sourceId] = fetchSource(source, fetchRange, isRefetch, context);
    } else {
      nextSources[sourceId] = source;
    }
  }
  return nextSources;
}
function fetchSource(eventSource, fetchRange, isRefetch, context) {
  let { options, calendarApi } = context;
  let sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
  let fetchId = guid();
  sourceDef.fetch({
    eventSource,
    range: fetchRange,
    isRefetch,
    context
  }, (res) => {
    let { rawEvents } = res;
    if (options.eventSourceSuccess) {
      rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.response) || rawEvents;
    }
    if (eventSource.success) {
      rawEvents = eventSource.success.call(calendarApi, rawEvents, res.response) || rawEvents;
    }
    context.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: eventSource.sourceId,
      fetchId,
      fetchRange,
      rawEvents
    });
  }, (error) => {
    let errorHandled = false;
    if (options.eventSourceFailure) {
      options.eventSourceFailure.call(calendarApi, error);
      errorHandled = true;
    }
    if (eventSource.failure) {
      eventSource.failure(error);
      errorHandled = true;
    }
    if (!errorHandled) {
      warn(`Unhandled event source error: ${error.message}`, error);
    }
    context.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: eventSource.sourceId,
      fetchId,
      fetchRange,
      error
    });
  });
  return {
    ...eventSource,
    isFetching: true,
    latestFetchId: fetchId
  };
}
function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
  let eventSource = sourceHash[sourceId];
  if (eventSource && // not already removed
  fetchId === eventSource.latestFetchId) {
    return {
      ...sourceHash,
      [sourceId]: {
        ...eventSource,
        isFetching: false,
        fetchRange
        // also serves as a marker that at least one fetch has completed
      }
    };
  }
  return sourceHash;
}
function excludeStaticSources(eventSources, context) {
  return filterHash(eventSources, (eventSource) => doesSourceNeedRange(eventSource, context));
}
function parseInitialSources(rawOptions, context) {
  let refiners = buildEventSourceRefiners(context);
  let rawSources = [].concat(rawOptions.eventSources || []);
  let sources = [];
  if (rawOptions.initialEvents) {
    rawSources.unshift(rawOptions.initialEvents);
  }
  if (rawOptions.events) {
    rawSources.unshift(rawOptions.events);
  }
  for (let rawSource of rawSources) {
    let source = parseEventSource(rawSource, context, refiners);
    if (source) {
      sources.push(source);
    }
  }
  return sources;
}
function doesSourceNeedRange(eventSource, context) {
  let defs = context.pluginHooks.eventSourceDefs;
  return !defs[eventSource.sourceDefId].ignoreRange;
}
var SIMPLE_RECURRING_REFINERS = {
  daysOfWeek: identity,
  startTime: createDuration,
  endTime: createDuration,
  duration: createDuration,
  startRecur: identity,
  endRecur: identity
};
var recurring = {
  parse(refined, dateEnv) {
    if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
      let recurringData = {
        daysOfWeek: refined.daysOfWeek || null,
        startTime: refined.startTime || null,
        endTime: refined.endTime || null,
        startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
        endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null,
        dateEnv
      };
      let duration;
      if (refined.duration) {
        duration = refined.duration;
      }
      if (!duration && refined.startTime && refined.endTime) {
        duration = subtractDurations(refined.endTime, refined.startTime);
      }
      return {
        allDayGuess: Boolean(!refined.startTime && !refined.endTime),
        duration,
        typeData: recurringData
        // doesn't need endTime anymore but oh well
      };
    }
    return null;
  },
  expand(typeData, framingRange, dateEnv) {
    let clippedFramingRange = intersectRanges(framingRange, { start: typeData.startRecur, end: typeData.endRecur });
    if (clippedFramingRange) {
      return expandRanges(typeData.daysOfWeek, typeData.startTime, typeData.dateEnv, dateEnv, clippedFramingRange);
    }
    return [];
  }
};
var simpleRecurringEventsPlugin = {
  name: "simple-recurring-event",
  recurringTypes: [recurring],
  eventRefiners: SIMPLE_RECURRING_REFINERS
};
function expandRanges(daysOfWeek, startTime, eventDateEnv, calendarDateEnv, framingRange) {
  let dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
  let dayMarker = startOfDay4(framingRange.start);
  let endMarker = framingRange.end;
  let instanceStarts = [];
  if (startTime) {
    if (startTime.milliseconds < 0) {
      endMarker = addDays3(endMarker, 1);
    } else if (startTime.milliseconds >= 1e3 * 60 * 60 * 24) {
      dayMarker = addDays3(dayMarker, -1);
    }
  }
  while (dayMarker < endMarker) {
    let instanceStart;
    if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
      if (startTime) {
        instanceStart = calendarDateEnv.add(dayMarker, startTime);
      } else {
        instanceStart = dayMarker;
      }
      instanceStarts.push(calendarDateEnv.createMarker(eventDateEnv.toDate(instanceStart)));
    }
    dayMarker = addDays3(dayMarker, 1);
  }
  return instanceStarts;
}
var globalPlugins = [
  arrayEventSourcePlugin,
  funcEventSourcePlugin,
  jsonFeedEventSourcePlugin,
  simpleRecurringEventsPlugin,
  changeHandlerPlugin,
  {
    name: "misc",
    isLoadingFuncs: [
      (state) => computeEventSourcesLoading(state.eventSources)
    ],
    propSetHandlers: {
      dateProfile: handleDateProfile,
      eventStore: handleEventStore
    }
  }
];

// node_modules/fullcalendar/chunks/18d26d90.js
var Emitter = class {
  constructor() {
    this.handlers = {};
    this.thisContext = null;
  }
  setThisContext(thisContext) {
    this.thisContext = thisContext;
  }
  setOptions(options) {
    this.options = options;
  }
  on(type, handler) {
    addToHash(this.handlers, type, handler);
  }
  off(type, handler) {
    removeFromHash(this.handlers, type, handler);
  }
  trigger(type, ...args) {
    let attachedHandlers = this.handlers[type] || [];
    let optionHandler = this.options && this.options[type];
    let handlers = [].concat(optionHandler || [], attachedHandlers);
    for (let handler of handlers) {
      handler.apply(this.thisContext, args);
    }
  }
  hasHandlers(type) {
    return Boolean(this.handlers[type] && this.handlers[type].length || this.options && this.options[type]);
  }
};
function addToHash(hash, type, handler) {
  (hash[type] || (hash[type] = [])).push(handler);
}
function removeFromHash(hash, type, handler) {
  if (handler) {
    if (hash[type]) {
      hash[type] = hash[type].filter((func) => func !== handler);
    }
  } else {
    delete hash[type];
  }
}
function getAppendableRoot(el) {
  const root = el.getRootNode();
  if (root instanceof Document) {
    return root.body || root.documentElement;
  }
  return root;
}
function computeElIsRtl(el) {
  return getComputedStyle(el).direction === "rtl";
}
var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
function applyStyle(el, props) {
  for (let propName in props) {
    applyStyleProp(el, propName, props[propName]);
  }
}
function applyStyleProp(el, name, val) {
  if (val == null) {
    el.style[name] = "";
  } else if (typeof val === "number" && PIXEL_PROP_RE.test(name)) {
    el.style[name] = `${val}px`;
  } else {
    el.style[name] = val;
  }
}
function getEventTargetViaRoot(ev) {
  return ev.composedPath?.()[0] ?? ev.target;
}

// node_modules/fullcalendar/chunks/2f45deb4.js
function memoize2(workerFunc, resEquality, teardownFunc) {
  let currentArgs;
  let currentRes;
  return function(...newArgs) {
    if (!currentArgs) {
      currentRes = workerFunc.apply(this, newArgs);
    } else if (!isArraysEqual(currentArgs, newArgs)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }
      let res = workerFunc.apply(this, newArgs);
      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }
    currentArgs = newArgs;
    return currentRes;
  };
}
function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
  let currentArg;
  let currentRes;
  return (newArg) => {
    if (!currentArg) {
      currentRes = workerFunc.call(this, newArg);
    } else if (!isPropsEqualShallow(currentArg, newArg)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }
      let res = workerFunc.call(this, newArg);
      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }
    currentArg = newArg;
    return currentRes;
  };
}
var ViewContextType = X({});
function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, nowManager, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, baseId, registerInteractiveComponent, unregisterInteractiveComponent) {
  return {
    dateEnv,
    nowManager,
    options: viewOptions,
    pluginHooks,
    emitter,
    dispatch,
    getCurrentData,
    calendarApi,
    viewSpec,
    viewApi,
    dateProfileGenerator,
    baseId,
    registerInteractiveComponent,
    unregisterInteractiveComponent
  };
}
var PureComponent = class extends C {
  // debug: boolean
  shouldComponentUpdate(nextProps, nextState) {
    return !isPropsEqualWithMap(
      this.props,
      nextProps,
      this.propEquality
      /*, this.debug && 'props' */
    ) || !isPropsEqualWithMap(
      this.state,
      nextState,
      this.stateEquality
      /*, this.debug && 'state' */
    );
  }
};
PureComponent.addPropsEquality = addPropsEquality;
PureComponent.addStateEquality = addStateEquality;
PureComponent.contextType = ViewContextType;
PureComponent.prototype.propEquality = {};
PureComponent.prototype.stateEquality = {};
var BaseComponent = class extends PureComponent {
};
BaseComponent.contextType = ViewContextType;
function addPropsEquality(propEquality) {
  let hash = Object.create(this.prototype.propEquality);
  Object.assign(hash, propEquality);
  this.prototype.propEquality = hash;
}
function addStateEquality(stateEquality) {
  let hash = Object.create(this.prototype.stateEquality);
  Object.assign(hash, stateEquality);
  this.prototype.stateEquality = hash;
}
function setRef(ref, current) {
  if (typeof ref === "function") {
    ref(current);
  } else if (ref) {
    ref.current = current;
  }
}
var ContentInjector = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.id = guid();
    this.queuedDomNodes = [];
    this.currentDomNodes = [];
    this.handleEl = (el) => {
      this.el = el;
      if (this.props.elRef) {
        setRef(this.props.elRef, el);
      }
    };
  }
  render() {
    const { props, context } = this;
    const { options } = context;
    const { customGenerator, defaultGenerator, renderProps } = props;
    const attrs = buildElAttrs(props, "", this.handleEl);
    let useDefault = false;
    let innerContent;
    let queuedDomNodes = [];
    let currentGeneratorMeta;
    if (customGenerator != null) {
      const customGeneratorRes = typeof customGenerator === "function" ? customGenerator(renderProps) : customGenerator;
      if (customGeneratorRes === true) {
        useDefault = true;
      } else {
        const isObject = customGeneratorRes && typeof customGeneratorRes === "object";
        if (isObject && "html" in customGeneratorRes) {
          attrs.dangerouslySetInnerHTML = { __html: customGeneratorRes.html };
        } else if (isObject && "domNodes" in customGeneratorRes) {
          queuedDomNodes = Array.prototype.slice.call(customGeneratorRes.domNodes);
        } else if (isObject ? hn(customGeneratorRes) : typeof customGeneratorRes !== "function") {
          innerContent = customGeneratorRes;
        } else {
          currentGeneratorMeta = customGeneratorRes;
        }
      }
    } else {
      useDefault = !hasCustomRenderingHandler(props.generatorName, options);
    }
    if (useDefault && defaultGenerator) {
      innerContent = defaultGenerator(renderProps);
    }
    this.queuedDomNodes = queuedDomNodes;
    this.currentGeneratorMeta = currentGeneratorMeta;
    return k(props.tag, attrs, innerContent);
  }
  componentDidMount() {
    this.applyQueueudDomNodes();
    this.triggerCustomRendering(true);
  }
  componentDidUpdate() {
    this.applyQueueudDomNodes();
    this.triggerCustomRendering(true);
  }
  componentWillUnmount() {
    this.triggerCustomRendering(false);
  }
  triggerCustomRendering(isActive) {
    const { props, context } = this;
    const { handleCustomRendering, customRenderingMetaMap } = context.options;
    if (handleCustomRendering) {
      const generatorMeta = this.currentGeneratorMeta ?? customRenderingMetaMap?.[props.generatorName];
      if (generatorMeta) {
        handleCustomRendering({
          id: this.id,
          isActive,
          containerEl: this.el,
          generatorMeta,
          renderProps: props.renderProps
        });
      }
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes, currentDomNodes } = this;
    const { el } = this;
    if (!isArraysEqual(queuedDomNodes, currentDomNodes)) {
      for (const domNode of currentDomNodes) {
        domNode.remove();
      }
      for (let newNode of queuedDomNodes) {
        el.appendChild(newNode);
      }
      this.currentDomNodes = queuedDomNodes;
    }
  }
};
ContentInjector.addPropsEquality({
  renderProps: isPropsEqualShallow,
  attrs: isNonHandlerPropsEqual,
  style: isPropsEqualShallow
});
function hasCustomRenderingHandler(generatorName, options) {
  return Boolean(options.handleCustomRendering && generatorName && options.customRenderingMetaMap?.[generatorName]);
}
function buildElAttrs(props, className, elRef) {
  const attrs = { ...props.attrs, ref: elRef };
  if (props.className || className) {
    attrs.className = joinClassNames(className, props.className, attrs.className);
  }
  if (props.style) {
    attrs.style = props.style;
  }
  return attrs;
}
var RenderId = X(0);
var ContentContainer = class extends C {
  constructor() {
    super(...arguments);
    this.InnerContent = InnerContentInjector.bind(void 0, this);
    this.handleEl = (el) => {
      this.el = el;
      if (this.props.elRef) {
        setRef(this.props.elRef, el);
        if (el && this.didMountMisfire) {
          this.componentDidMount();
        }
      }
    };
  }
  render() {
    const { props } = this;
    const generatedClassName = generateClassName(props.classNameGenerator, props.renderProps);
    if (props.children) {
      const attrs = buildElAttrs(props, generatedClassName, this.handleEl);
      const children = props.children(this.InnerContent, props.renderProps, attrs);
      if (props.tag) {
        return k(props.tag, attrs, children);
      } else {
        return children;
      }
    } else {
      return k(ContentInjector, {
        ...props,
        elRef: this.handleEl,
        tag: props.tag || "div",
        className: joinClassNames(props.className, generatedClassName),
        renderId: this.context
      });
    }
  }
  componentDidMount() {
    if (this.el) {
      this.props.didMount?.({
        ...this.props.renderProps,
        el: this.el
      });
    } else {
      this.didMountMisfire = true;
    }
  }
  componentWillUnmount() {
    this.props.willUnmount?.({
      ...this.props.renderProps,
      el: this.el
    });
  }
};
ContentContainer.contextType = RenderId;
function InnerContentInjector(containerComponent, props) {
  const parentProps = containerComponent.props;
  return k(ContentInjector, {
    renderProps: parentProps.renderProps,
    generatorName: parentProps.generatorName,
    customGenerator: parentProps.customGenerator,
    defaultGenerator: parentProps.defaultGenerator,
    renderId: containerComponent.context,
    ...props
  });
}
function generateClassName(classNameGenerator, renderProps) {
  return (typeof classNameGenerator === "function" ? classNameGenerator(renderProps) : classNameGenerator) || "";
}
function renderText(renderProps) {
  return renderProps.text;
}
function getIsHeightAuto(options) {
  return options.height === "auto" || options.contentHeight === "auto";
}
function getTableHeaderSticky(options) {
  let { tableHeaderSticky } = options;
  if (tableHeaderSticky == null || tableHeaderSticky === "auto") {
    tableHeaderSticky = getIsHeightAuto(options);
  }
  return tableHeaderSticky;
}
function getFooterScrollbarSticky(options) {
  const isHeightAuto = getIsHeightAuto(options);
  let { footerScrollbarSticky } = options;
  if (footerScrollbarSticky == null || footerScrollbarSticky === "auto") {
    footerScrollbarSticky = isHeightAuto;
  }
  return Boolean(footerScrollbarSticky) && isHeightAuto;
}
function getScrollerSyncerClass(pluginHooks) {
  const ScrollerSyncer = pluginHooks.scrollerSyncerClass;
  if (!ScrollerSyncer) {
    throw new RangeError("Must import @fullcalendar/scrollgrid");
  }
  return ScrollerSyncer;
}
var NowTimerRunner = class {
  constructor(handleChange) {
    this.handleChange = handleChange;
    this.isMounted = false;
    this.handleRefresh = () => {
      let timing = this.computeTiming();
      if (timing.nowDate.valueOf() !== this.nowDate.valueOf() || timing.nowMs !== this.nowMs) {
        this.nowDate = timing.nowDate;
        this.nowMs = timing.nowMs;
        this.todayRange = timing.todayRange;
        this.handleChange();
      }
      this.clearTimeout();
      this.setTimeout(timing.waitMs);
    };
    this.handleVisibilityChange = () => {
      if (!document.hidden) {
        this.handleRefresh();
      }
    };
  }
  update(input) {
    if (!this.isMounted) {
      this.isMounted = true;
      this.unit = input.unit;
      this.unitValue = input.unitValue;
      this.nowIndicatorSnap = input.nowIndicatorSnap;
      this.nowManager = input.nowManager;
      this.dateEnv = input.dateEnv;
      const timing = this.computeTiming();
      this.nowDate = timing.nowDate;
      this.nowMs = timing.nowMs;
      this.todayRange = timing.todayRange;
      this.setTimeout(timing.waitMs);
      this.nowManager.addResetListener(this.handleRefresh);
      if (typeof document !== "undefined") {
        document.addEventListener("visibilitychange", this.handleVisibilityChange);
      }
    } else if (input.unit !== this.unit || input.unitValue !== this.unitValue || input.nowIndicatorSnap !== this.nowIndicatorSnap || input.nowManager !== this.nowManager || input.dateEnv !== this.dateEnv) {
      this.unit = input.unit;
      this.unitValue = input.unitValue;
      this.nowIndicatorSnap = input.nowIndicatorSnap;
      this.nowManager = input.nowManager;
      this.dateEnv = input.dateEnv;
      const timing = this.computeTiming();
      this.nowDate = timing.nowDate;
      this.nowMs = timing.nowMs;
      this.todayRange = timing.todayRange;
      this.clearTimeout();
      this.setTimeout(timing.waitMs);
    }
    return {
      nowDate: this.nowDate,
      nowMs: this.nowMs,
      todayRange: this.todayRange
    };
  }
  destroy() {
    if (this.isMounted) {
      this.isMounted = false;
      this.clearTimeout();
      this.nowManager.removeResetListener(this.handleRefresh);
      if (typeof document !== "undefined") {
        document.removeEventListener("visibilitychange", this.handleVisibilityChange);
      }
    }
  }
  computeTiming() {
    let { unit, unitValue, nowIndicatorSnap, dateEnv } = this;
    let unroundedNowMs = this.nowManager.getEpochMs();
    let unroundedNow = dateEnv.timestampToMarker(unroundedNowMs);
    if (nowIndicatorSnap === "auto") {
      nowIndicatorSnap = // large unit?
      /year|month|week|day/.test(unit) || // if slotDuration 30 mins for example, would NOT appear to snap (legacy behavior)
      (unitValue || 1) === 1;
    }
    let nowDate;
    let nowMs;
    let waitMs;
    if (nowIndicatorSnap) {
      nowDate = dateEnv.startOf(unroundedNow, unit);
      nowMs = resolveSnappedInstant(nowDate, unroundedNowMs, dateEnv);
      let nextUnitStart = dateEnv.add(nowDate, createDuration(1, unit));
      waitMs = resolveNextSnappedInstant(nextUnitStart, unroundedNowMs, dateEnv) - unroundedNowMs;
    } else {
      nowDate = unroundedNow;
      nowMs = unroundedNowMs;
      waitMs = 1e3 * 60;
    }
    waitMs = Math.min(1e3 * 60 * 60 * 24, waitMs);
    return {
      nowDate,
      nowMs,
      todayRange: buildDayRange(nowDate),
      waitMs
    };
  }
  setTimeout(waitMs = this.computeTiming().waitMs) {
    this.timeoutId = setTimeout(() => {
      const timing = this.computeTiming();
      this.nowDate = timing.nowDate;
      this.nowMs = timing.nowMs;
      this.todayRange = timing.todayRange;
      this.handleChange();
      this.setTimeout(timing.waitMs);
    }, waitMs);
  }
  clearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
};
function resolveSnappedInstant(snappedMarker, rawMs, dateEnv) {
  const offsetMs = dateEnv.timestampToMarker(rawMs).valueOf() - rawMs;
  const candidateMs = snappedMarker.valueOf() - offsetMs;
  if (dateEnv.timestampToMarker(candidateMs).valueOf() === snappedMarker.valueOf()) {
    return candidateMs;
  }
  return dateEnv.toDate(snappedMarker).valueOf();
}
function resolveNextSnappedInstant(nextUnitStart, rawMs, dateEnv) {
  const nextSnappedMs = resolveSnappedInstant(nextUnitStart, rawMs, dateEnv);
  const transitionMs = findNextOffsetTransitionMs(rawMs, dateEnv, Math.min(nextSnappedMs - rawMs, 48 * 60 * 60 * 1e3));
  return transitionMs != null ? Math.min(nextSnappedMs, transitionMs) : nextSnappedMs;
}
function findNextOffsetTransitionMs(rawMs, dateEnv, horizonMs) {
  if (horizonMs <= 0) {
    return void 0;
  }
  const startOffsetMs = offsetAt(rawMs, dateEnv);
  let lowerMs = rawMs;
  let upperMs = rawMs + horizonMs;
  if (offsetAt(upperMs, dateEnv) === startOffsetMs) {
    return void 0;
  }
  while (upperMs - lowerMs > 1) {
    const middleMs = Math.floor((lowerMs + upperMs) / 2);
    if (offsetAt(middleMs, dateEnv) === startOffsetMs) {
      lowerMs = middleMs;
    } else {
      upperMs = middleMs;
    }
  }
  return upperMs > rawMs ? upperMs : void 0;
}
function offsetAt(instantMs, dateEnv) {
  return dateEnv.timestampToMarker(instantMs).valueOf() - instantMs;
}
function buildDayRange(date) {
  let start = startOfDay4(date);
  let end = addDays3(start, 1);
  return { start, end };
}
function isDimsEqual(v0, v1) {
  return v0 != null && (v0 === v1 || Math.abs(v0 - v1) < 0.01);
}
var nativeBorderBoxEnabled = true;
var configMap = /* @__PURE__ */ new Map();
var afterSizeCallbacks = /* @__PURE__ */ new Set();
var isHandling = false;
var isStalling = false;
var isAcquiringImmediately = false;
function afterSize(callback) {
  afterSizeCallbacks.add(callback);
  if (!isHandling && !isStalling) {
    isStalling = true;
    requestAnimationFrame(() => {
      isStalling = false;
      flushAfterSize();
    });
  }
}
function flushAfterSize() {
  for (const flushedCallback of afterSizeCallbacks.values()) {
    afterSizeCallbacks.delete(flushedCallback);
    flushedCallback();
  }
}
function flushSyncWithSizeBatching(callback) {
  const wasHandling = isHandling;
  isHandling = true;
  isAcquiringImmediately = true;
  try {
    bn(callback);
    if (!wasHandling) {
      bn(() => {
        flushAfterSize();
        isHandling = false;
      });
    }
  } finally {
    isHandling = wasHandling;
    isAcquiringImmediately = false;
  }
}
var globalResizeObserver = typeof ResizeObserver !== "undefined" && new ResizeObserver((entries) => {
  isHandling = true;
  for (let entry of entries) {
    const el = entry.target;
    const config = configMap.get(el);
    let width;
    let height;
    if (entry.borderBoxSize && nativeBorderBoxEnabled) {
      const borderBoxSize = entry.borderBoxSize[0] || entry.borderBoxSize;
      width = borderBoxSize.inlineSize;
      height = borderBoxSize.blockSize;
    } else {
      ({ width, height } = el.getBoundingClientRect());
    }
    let shouldFire = false;
    if (!isDimsEqual(config.width, width)) {
      config.width = width;
      shouldFire = config.watchWidth;
    }
    if (!isDimsEqual(config.height, height)) {
      config.height = height;
      shouldFire || (shouldFire = config.watchHeight);
    }
    if (shouldFire) {
      config.callback(width, height);
    }
  }
  bn(() => {
    flushAfterSize();
    isHandling = false;
  });
});
function watchSize(el, callback, watchWidth2 = true, watchHeight2 = true) {
  const config = { callback, watchWidth: watchWidth2, watchHeight: watchHeight2 };
  configMap.set(el, config);
  if (isAcquiringImmediately) {
    const { width, height } = el.getBoundingClientRect();
    config.width = width;
    config.height = height;
    callback(width, height);
  }
  if (globalResizeObserver) {
    globalResizeObserver.observe(el, {
      box: "border-box"
      // default is 'content-box'
    });
  }
  return () => {
    configMap.delete(el);
    if (globalResizeObserver) {
      globalResizeObserver.unobserve(el);
    }
  };
}
function watchWidth(el, callback) {
  return watchSize(
    el,
    callback,
    /* watchWidth = */
    true
  );
}
function watchHeight(el, callback) {
  return watchSize(
    el,
    (_width, height) => callback(height),
    /* watchWidth = */
    false,
    /* watchHeight = */
    true
  );
}
var NowTimer = class extends C {
  constructor(props, context) {
    super(props, context);
    this.handleChange = () => {
      this.forceUpdate();
    };
    this.runner = new NowTimerRunner(this.handleChange);
  }
  render() {
    const { props, context } = this;
    const { nowDate, nowMs, todayRange } = this.runner.update({
      nowManager: context.nowManager,
      unit: props.unit,
      unitValue: props.unitValue,
      nowIndicatorSnap: context.options.nowIndicatorSnap,
      dateEnv: context.dateEnv
    });
    return props.children(nowDate, todayRange, nowMs);
  }
  componentWillUnmount() {
    this.runner.destroy();
  }
};
NowTimer.contextType = ViewContextType;
var FULL_DATE_FORMAT = createFormatter({ year: "numeric", month: "long", day: "numeric" });
var WEEK_FORMAT = createFormatter({ week: "long" });
var WEEKDAY_ONLY_FORMAT = createFormatter({
  weekday: "long"
});
function findWeekdayText(parts) {
  for (const part of parts) {
    if (part.type === "weekday") {
      return part.value;
    }
  }
  return "";
}
function findDayNumberText(parts) {
  for (const part of parts) {
    if (part.type === "day") {
      return part.value;
    }
  }
  return "";
}
function findMonthText(parts) {
  for (const part of parts) {
    if (part.type === "month") {
      return part.value;
    }
  }
  return "";
}
function buildDateStr(context, dateMarker, viewType = "day") {
  return joinDateTimeFormatParts(context.dateEnv.formatToParts(dateMarker, viewType === "week" ? WEEK_FORMAT : FULL_DATE_FORMAT));
}
function buildNavLinkAttrs(context, dateMarker, viewType = "day", dateStr = buildDateStr(context, dateMarker, viewType), isTabbable = true, omitHint = false) {
  const { dateEnv, options, calendarApi } = context;
  const zonedDate = dateEnv.toDate(dateMarker);
  const handleInteraction = (ev) => {
    let customAction = viewType === "day" ? options.navLinkDayClick : viewType === "week" ? options.navLinkWeekClick : null;
    if (typeof customAction === "function") {
      customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
    } else {
      if (typeof customAction === "string") {
        viewType = customAction;
      }
      calendarApi.zoomTo(dateMarker, viewType);
    }
  };
  return {
    "role": "link",
    // TODO
    "aria-label": omitHint ? dateStr : formatWithOrdinals(options.navLinkHint, [dateStr, zonedDate], dateStr),
    "className": joinClassNames(options.navLinkClass, classNames.cursorPointer, classNames.internalNavLink),
    ...isTabbable ? createAriaClickAttrs(handleInteraction) : { onClick: handleInteraction }
  };
}
function getDateMeta(dateMarker, dateEnv, dateProfile, todayRange, nowDate) {
  const isDisabled = Boolean(dateProfile && (!dateProfile.activeRange || !rangeContainsMarker(dateProfile.activeRange, dateMarker)));
  return {
    date: dateEnv.toDate(dateMarker),
    dow: dateMarker.getUTCDay(),
    isDisabled,
    isOther: !isDisabled && Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, dateMarker)),
    isToday: !isDisabled && Boolean(todayRange && rangeContainsMarker(todayRange, dateMarker)),
    isPast: !isDisabled && Boolean(nowDate ? dateMarker < nowDate : todayRange ? dateMarker < todayRange.start : false),
    isFuture: !isDisabled && Boolean(nowDate ? dateMarker > nowDate : todayRange ? dateMarker >= todayRange.end : false)
  };
}
var ViewContainer = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.refineRenderProps = memoizeObjArg(refineRenderProps);
  }
  render() {
    const { props, context } = this;
    const { options, viewSpec } = context;
    const renderProps = this.refineRenderProps({
      ...computeViewBorderless(options),
      options: { headerToolbar: options.headerToolbar, footerToolbar: options.footerToolbar },
      isHeightAuto: getIsHeightAuto(options),
      viewApi: context.viewApi
    });
    return u2(ContentContainer, { elRef: props.elRef, tag: props.tag || "div", attrs: props.attrs, style: props.style, className: joinClassNames(
      props.className,
      generateClassName(options.viewClass, renderProps),
      // WORKAROUND for way calendar's className would get merged into view's className
      generateClassName(viewSpec.optionDefaults.class, renderProps),
      generateClassName(viewSpec.optionDefaults.className, renderProps),
      generateClassName(viewSpec.optionOverrides.class, renderProps),
      generateClassName(viewSpec.optionOverrides.className, renderProps)
    ), renderProps, generatorName: void 0, didMount: options.didMount || options.viewDidMount, willUnmount: options.willUnmount || options.viewWillUnmount, children: () => props.children });
  }
};
function refineRenderProps(raw) {
  return {
    view: raw.viewApi,
    borderlessX: raw.borderlessX,
    borderlessTop: raw.borderlessTop,
    borderlessBottom: raw.borderlessBottom,
    options: raw.options,
    isHeightAuto: raw.isHeightAuto
  };
}
var DateComponent = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.uid = guid();
  }
  // Hit System
  // -----------------------------------------------------------------------------------------------------------------
  prepareHits() {
  }
  queryHit(isRtl, positionLeft, positionTop, elWidth, elHeight) {
    return null;
  }
  // Pointer Interaction Utils
  // -----------------------------------------------------------------------------------------------------------------
  isValidSegDownEl(el) {
    return !this.props.eventDrag && // HACK
    !this.props.eventResize && // HACK
    !el.closest(`.${classNames.internalEventMirror}`);
  }
  isValidDateDownEl(el) {
    return !el.closest(`.${classNames.internalEvent}:not(.${classNames.internalBgEvent})`) && !el.closest(`.${classNames.internalMoreLink}`) && !el.closest(`.${classNames.internalNavLink}`) && !el.closest(`.${classNames.internalPopover}`);
  }
};
var DelayedRunner = class {
  constructor(drainedOption) {
    this.drainedOption = drainedOption;
    this.isRunning = false;
    this.isDirty = false;
    this.pauseDepths = {};
    this.timeoutId = 0;
  }
  request(delay) {
    this.isDirty = true;
    if (!this.isPaused()) {
      this.clearTimeout();
      if (delay == null) {
        this.tryDrain();
      } else {
        this.timeoutId = setTimeout(
          // NOT OPTIMAL! TODO: look at debounce
          this.tryDrain.bind(this),
          delay
        );
      }
    }
  }
  pause(scope = "") {
    let { pauseDepths } = this;
    pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
    this.clearTimeout();
  }
  resume(scope = "", force) {
    let { pauseDepths } = this;
    if (scope in pauseDepths) {
      if (force) {
        delete pauseDepths[scope];
      } else {
        pauseDepths[scope] -= 1;
        let depth = pauseDepths[scope];
        if (depth <= 0) {
          delete pauseDepths[scope];
        }
      }
      this.tryDrain();
    }
  }
  isPaused() {
    return Object.keys(this.pauseDepths).length;
  }
  tryDrain() {
    if (!this.isRunning && !this.isPaused()) {
      this.isRunning = true;
      while (this.isDirty) {
        this.isDirty = false;
        this.drained();
      }
      this.isRunning = false;
    }
  }
  clear() {
    this.clearTimeout();
    this.isDirty = false;
    this.pauseDepths = {};
  }
  clearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = 0;
    }
  }
  drained() {
    if (this.drainedOption) {
      this.drainedOption();
    }
  }
};
var ScrollListener = class {
  constructor(el) {
    this.el = el;
    this.emitter = new Emitter();
    this.isScroll = false;
    this.isScrollRecent = false;
    this.isWheelRecent = false;
    this.isMouseDown = false;
    this.isTouchDown = false;
    this.isMouse = false;
    this.isTouch = false;
    this.isWheel = false;
    this.handleScroll = () => {
      this.isScrollRecent = true;
      if (this.isMouseDown) {
        this.isMouse = true;
      }
      if (this.isTouchDown) {
        this.isTouch = true;
      }
      if (this.isWheelRecent) {
        this.isWheel = true;
      }
      this.startScroll();
      this.emitter.trigger("scroll", this.getIsDevice());
      this.scrollWaiter.request(500);
    };
    this.handleScrollWait = () => {
      this.isScrollRecent = false;
      if (!this.isTouchDown) {
        this.endScroll();
      }
    };
    this.handleWheel = () => {
      this.isWheelRecent = true;
      this.wheelWaiter.request(500);
    };
    this.handleWheelWait = () => {
      this.isWheelRecent = false;
    };
    this.handleMouseDown = () => {
      this.isMouseDown = true;
    };
    this.handleMouseUp = () => {
      this.isMouseDown = false;
    };
    this.handleTouchStart = () => {
      this.isTouchDown = true;
    };
    this.handleTouchEnd = () => {
      this.isTouchDown = false;
      if (!this.isScrollRecent) {
        this.endScroll();
      }
    };
    this.wheelWaiter = new DelayedRunner(this.handleWheelWait);
    this.scrollWaiter = new DelayedRunner(this.handleScrollWait);
    el.addEventListener("scroll", this.handleScroll, { passive: true });
    el.addEventListener("wheel", this.handleWheel, { passive: true });
    el.addEventListener("mousedown", this.handleMouseDown);
    el.addEventListener("mouseup", this.handleMouseUp);
    el.addEventListener("touchstart", this.handleTouchStart, { passive: true });
    el.addEventListener("touchend", this.handleTouchEnd);
  }
  destroy() {
    let { el } = this;
    el.removeEventListener("scroll", this.handleScroll, { passive: true });
    el.removeEventListener("wheel", this.handleWheel, { passive: true });
    el.removeEventListener("mousedown", this.handleMouseDown);
    el.removeEventListener("mouseup", this.handleMouseUp);
    el.removeEventListener("touchstart", this.handleTouchStart, { passive: true });
    el.removeEventListener("touchend", this.handleTouchEnd);
  }
  // Start / Stop
  // ----------------------------------------------------------------------------------------------
  startScroll() {
    if (!this.isScroll) {
      this.isScroll = true;
      this.emitter.trigger("scrollStart", this.getIsDevice());
    }
  }
  endScroll() {
    if (this.isScroll) {
      this.scrollWaiter.clear();
      this.wheelWaiter.clear();
      this.isScroll = false;
      this.isWheelRecent = false;
      this.emitter.trigger("scrollEnd", this.getIsDevice());
      this.isMouse = false;
      this.isTouch = false;
      this.isWheel = false;
    }
  }
  getIsDevice() {
    return this.isWheel || this.isMouse || this.isTouch;
  }
};
var Scroller = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.handleEl = (el) => {
      if (this.el) {
        this.el = null;
        this._isUnmounting = true;
        this.listener.destroy();
      }
      if (el) {
        this.el = el;
        this._isUnmounting = false;
        this.listener = new ScrollListener(el);
      }
    };
    this.handleHRuler = (el) => {
      if (this.disconnectHRuler) {
        this.disconnectHRuler();
        this.disconnectHRuler = void 0;
        if (this.clientWidth !== void 0) {
          this.clientWidth = void 0;
          setRef(this.props.clientWidthRef, null);
        }
      }
      if (el) {
        this.disconnectHRuler = watchWidth(el, (clientWidth) => {
          if (this._isUnmounting)
            return;
          if (clientWidth !== this.clientWidth) {
            this.clientWidth = clientWidth;
            setRef(this.props.clientWidthRef, clientWidth);
          }
        });
      }
    };
    this.handleVRuler = (el) => {
      if (this.disconnectVRuler) {
        this.disconnectVRuler();
        this.disconnectVRuler = void 0;
        if (this.clientHeight !== void 0) {
          this.clientHeight = void 0;
          setRef(this.props.clientHeightRef, null);
        }
      }
      if (el) {
        this.disconnectVRuler = watchHeight(el, (clientHeight) => {
          if (this._isUnmounting)
            return;
          if (clientHeight !== this.clientHeight) {
            this.clientHeight = clientHeight;
            setRef(this.props.clientHeightRef, clientHeight);
          }
          const bottomScrollbarWidth = Math.round(this.el.getBoundingClientRect().height - clientHeight);
          if (bottomScrollbarWidth !== this.bottomScrollbarWidth) {
            this.bottomScrollbarWidth = bottomScrollbarWidth;
            setRef(this.props.bottomScrollbarWidthRef, bottomScrollbarWidth);
          }
        });
      }
    };
  }
  render() {
    const { props } = this;
    const fallbackOverflow = props.horizontal || props.vertical ? "hidden" : "";
    return u2("div", { ref: this.handleEl, className: joinClassNames(
      props.className,
      classNames.noPadding,
      classNames.rel,
      // for children fillTop/fillStart
      props.hideScrollbars && classNames.noScrollbars,
      classNames.internalScroller
    ), style: {
      ...props.style,
      overflowX: props.horizontal ? "auto" : fallbackOverflow,
      overflowY: props.vertical ? "auto" : fallbackOverflow
    }, children: [props.children, Boolean(props.clientWidthRef) && u2("div", { ref: this.handleHRuler, className: classNames.fillTop }), Boolean(props.clientHeightRef || props.bottomScrollbarWidthRef) && u2("div", { ref: this.handleVRuler, className: classNames.fillStart })] });
  }
  endScroll() {
    this.listener.endScroll();
  }
  // Public API
  // -----------------------------------------------------------------------------------------------
  get x() {
    const { el } = this;
    return el ? getNormalizedScrollX(el) : 0;
  }
  get y() {
    const { el } = this;
    return el ? el.scrollTop : 0;
  }
  scrollTo({ x: x4, y: y3 }) {
    const { el } = this;
    if (el) {
      if (y3 != null) {
        el.scrollTop = y3;
      }
      if (x4 != null) {
        setNormalizedScrollX(el, x4);
      }
    }
  }
  addScrollStartListener(handler) {
    this.listener.emitter.on("scrollStart", handler);
  }
  removeScrollStartListener(handler) {
    this.listener.emitter.off("scrollStart", handler);
  }
  addScrollEndListener(handler) {
    this.listener.emitter.on("scrollEnd", handler);
  }
  removeScrollEndListener(handler) {
    this.listener.emitter.off("scrollEnd", handler);
  }
};
function getNormalizedScrollX(el) {
  const { scrollLeft } = el;
  const isRtl = computeElIsRtl(el);
  return isRtl ? getNormalizedRtlScrollX(scrollLeft, el) : scrollLeft;
}
function setNormalizedScrollX(el, x4) {
  const isRtl = computeElIsRtl(el);
  el.scrollLeft = isRtl ? getNormalizedRtlScrollLeft(x4, el) : x4;
}
function getNormalizedRtlScrollX(scrollLeft, el) {
  switch (getRtlScrollerSystem()) {
    case "positive":
      return el.scrollWidth - el.clientWidth - scrollLeft;
    case "negative":
      return -scrollLeft;
  }
  return scrollLeft;
}
function getNormalizedRtlScrollLeft(x4, el) {
  switch (getRtlScrollerSystem()) {
    case "positive":
      return el.scrollWidth - el.clientWidth - x4;
    case "negative":
      return -x4;
  }
  return x4;
}
var _rtlScrollerSystem;
function getRtlScrollerSystem() {
  return _rtlScrollerSystem || (_rtlScrollerSystem = detectRtlScrollerSystem());
}
function detectRtlScrollerSystem() {
  let el = document.createElement("div");
  el.style.position = "absolute";
  el.style.top = "-1000px";
  el.style.width = "100px";
  el.style.height = "100px";
  el.style.overflow = "scroll";
  el.style.direction = "rtl";
  let innerEl = document.createElement("div");
  innerEl.style.width = "200px";
  innerEl.style.height = "200px";
  el.appendChild(innerEl);
  document.body.appendChild(el);
  let system;
  if (el.scrollLeft > 0) {
    system = "positive";
  } else {
    el.scrollLeft = 50;
    if (el.scrollLeft > 0) {
      system = "reverse";
    } else {
      system = "negative";
    }
  }
  el.remove();
  return system;
}
var StandardEvent = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.buildPublicEvent = memoize2((context, eventDef, eventInstance) => new EventImpl(context, eventDef, eventInstance));
    this.handleEl = (el) => {
      this.el = el;
      setRef(this.props.elRef, el);
      if (el) {
        setElEventRange(el, this.props.eventRange);
      }
    };
  }
  render() {
    const { props, context } = this;
    const { options } = context;
    const { eventRange } = props;
    const eventUi = eventRange.ui;
    const timeFormat = options.eventTimeFormat || props.defaultTimeFormat;
    const timeText = props.forcedTimeText ?? buildEventRangeTimeText(
      timeFormat,
      eventRange,
      // just for def/instance
      props.slicedStart,
      props.slicedEnd,
      props.isStart,
      props.isEnd,
      context,
      props.defaultDisplayEventTime,
      props.defaultDisplayEventEnd
    );
    const [tag, attrs, isInteractive] = getEventTagAndAttrs(eventRange, context);
    const eventApi = this.buildPublicEvent(context, eventRange.def, eventRange.instance);
    const isDraggable = !props.disableDragging && computeEventRangeDraggable(eventRange, context);
    const isBlock = /row|column/.test(props.display);
    const subcontentRenderProps = {
      ...props.renderProps,
      // first, so built-in props take precedence
      event: eventApi,
      isNarrow: props.isNarrow || false,
      isShort: props.isShort || false,
      timeText
    };
    const renderProps = {
      ...props.renderProps,
      // first, so built-in props take precedence
      event: eventApi,
      // make stable. everything else atomic. FYI, eventRange unfortunately gets reconstructed a lot, but def/instance is stable
      view: context.viewApi,
      timeText,
      color: eventUi.color || options.eventColor,
      contrastColor: eventUi.contrastColor || options.eventContrastColor,
      isDraggable,
      isStartResizable: !props.disableResizing && props.isStart && eventUi.durationEditable && options.eventResizableFromStart,
      isEndResizable: !props.disableResizing && props.isEnd && eventUi.durationEditable,
      isMirror: props.isMirror,
      isStart: Boolean(props.isStart),
      isEnd: Boolean(props.isEnd),
      isFirst: Boolean(props.isFirst),
      isLast: Boolean(props.isLast),
      isPast: Boolean(props.isPast),
      // TODO: don't cast. getDateMeta does it
      isFuture: Boolean(props.isFuture),
      // TODO: don't cast. getDateMeta does it
      isToday: Boolean(props.isToday),
      // TODO: don't cast. getDateMeta does it
      isSelected: Boolean(props.isSelected),
      isDragging: Boolean(props.isDragging),
      isResizing: Boolean(props.isResizing),
      isInteractive,
      isNarrow: props.isNarrow || false,
      isShort: props.isShort || false,
      level: props.level || 0,
      timeClass: joinClassNames(generateClassName(options.eventTimeClass, subcontentRenderProps), isBlock && generateClassName(options.blockEventTimeClass, subcontentRenderProps), props.display === "row" && generateClassName(options.rowEventTimeClass, subcontentRenderProps), props.display === "column" && generateClassName(options.columnEventTimeClass, subcontentRenderProps), props.display === "list-item" && generateClassName(options.listItemEventTimeClass, subcontentRenderProps)),
      titleClass: joinClassNames(generateClassName(options.eventTitleClass, subcontentRenderProps), isBlock && generateClassName(options.blockEventTitleClass, subcontentRenderProps), props.display === "row" && generateClassName(options.rowEventTitleClass, subcontentRenderProps), props.display === "column" && generateClassName(options.columnEventTitleClass, subcontentRenderProps), props.display === "list-item" && generateClassName(options.listItemEventTitleClass, subcontentRenderProps), props.display === "row" && options.rowEventTitleSticky && classNames.stickyS, props.display === "column" && options.columnEventTitleSticky && classNames.stickyT),
      options: { eventOverlap: Boolean(options.eventOverlap) }
    };
    const outerClassName = joinClassNames(
      // already includes eventClass below
      isBlock && generateClassName(options.blockEventClass, renderProps),
      props.display === "row" && generateClassName(options.rowEventClass, renderProps),
      props.display === "column" && generateClassName(options.columnEventClass, renderProps),
      props.display === "list-item" && generateClassName(options.listItemEventClass, renderProps),
      eventUi.className,
      props.className,
      props.display === "column" ? classNames.flexCol : classNames.flexRow,
      (eventRange.def.url || isDraggable) && classNames.cursorPointer,
      classNames.internalEvent,
      props.isMirror && classNames.internalEventMirror,
      isDraggable && classNames.internalEventDraggable,
      renderProps.isSelected && classNames.internalEventSelected,
      (renderProps.isStartResizable || renderProps.isEndResizable) && classNames.internalEventResizable
    );
    const beforeClassName = joinClassNames(generateClassName(options.eventBeforeClass, renderProps), isBlock && generateClassName(options.blockEventBeforeClass, renderProps), props.display === "row" && generateClassName(options.rowEventBeforeClass, renderProps), props.display === "column" && generateClassName(options.columnEventBeforeClass, renderProps), props.display === "list-item" && generateClassName(options.listItemEventBeforeClass, renderProps));
    const afterClassName = joinClassNames(generateClassName(options.eventAfterClass, renderProps), isBlock && generateClassName(options.blockEventAfterClass, renderProps), props.display === "row" && generateClassName(options.rowEventAfterClass, renderProps), props.display === "column" && generateClassName(options.columnEventAfterClass, renderProps), props.display === "list-item" && generateClassName(options.listItemEventAfterClass, renderProps));
    const innerClassName = joinClassNames(generateClassName(options.eventInnerClass, renderProps), isBlock && generateClassName(options.blockEventInnerClass, renderProps), props.display === "row" && generateClassName(options.rowEventInnerClass, renderProps), props.display === "column" && generateClassName(options.columnEventInnerClass, renderProps), props.display === "list-item" && generateClassName(options.listItemEventInnerClass, renderProps), !props.disableLiquid && classNames.liquid);
    const beforeContent = props.display === "row" && options.rowEventBeforeContent;
    const afterContent = props.display === "row" && options.rowEventAfterContent;
    return u2(ContentContainer, { tag, attrs: {
      ...props.attrs,
      ...attrs,
      // HACK because this event-element gets attached to root during some dragging
      dir: props.isDragging && options.direction === "rtl" ? "rtl" : void 0
    }, className: outerClassName, style: {
      "--fc-event-color": renderProps.color,
      "--fc-event-contrast-color": renderProps.contrastColor
    }, elRef: this.handleEl, renderProps, generatorName: "eventContent", customGenerator: options.eventContent, defaultGenerator: renderInnerContent, classNameGenerator: options.eventClass, didMount: options.eventDidMount, willUnmount: options.eventWillUnmount, children: (InnerContent) => u2(S, { children: [Boolean(renderProps.isSelected && isBlock) && u2("div", { className: props.display === "column" ? classNames.hitX : classNames.hitY }), (beforeClassName || beforeContent) && u2("div", { className: joinClassNames(beforeClassName, !props.disableZindexes && classNames.z1, renderProps.isStartResizable && joinClassNames(
      props.display === "column" ? classNames.cursorResizeT : classNames.cursorResizeS,
      // these classnames required for dnd
      classNames.internalEventResizer,
      classNames.internalEventResizerStart
    )), children: [beforeContent && u2(ContentContainer, { tag: "div", style: { display: "contents" }, attrs: { "aria-hidden": true }, renderProps, generatorName: void 0, customGenerator: beforeContent }), Boolean(renderProps.isStartResizable && renderProps.isSelected) && u2("div", { className: classNames.hit })] }), u2(InnerContent, { tag: "div", className: joinClassNames(innerClassName, !props.disableZindexes && classNames.z0) }), (afterClassName || afterContent) && u2("div", { className: joinClassNames(afterClassName, !props.disableZindexes && classNames.z1, renderProps.isEndResizable && joinClassNames(
      props.display === "column" ? classNames.cursorResizeB : classNames.cursorResizeE,
      // these classnames required for dnd
      classNames.internalEventResizer,
      classNames.internalEventResizerEnd
    )), children: [afterContent && u2(ContentContainer, { tag: "div", style: { display: "contents" }, attrs: { "aria-hidden": true }, renderProps, generatorName: void 0, customGenerator: afterContent }), Boolean(renderProps.isEndResizable && renderProps.isSelected) && u2("div", { className: classNames.hit })] })] }) });
  }
  componentDidUpdate(prevProps) {
    if (this.el && this.props.eventRange !== prevProps.eventRange) {
      setElEventRange(this.el, this.props.eventRange);
    }
  }
};
StandardEvent.addPropsEquality({
  seg: isPropsEqualShallow
});
function renderInnerContent(innerProps) {
  return u2(S, { children: [innerProps.timeText && u2("div", { className: innerProps.timeClass, children: innerProps.timeText }), u2("div", { className: innerProps.titleClass, children: innerProps.event.title || u2(S, { children: "\xA0" }) })] });
}

// node_modules/fullcalendar/chunks/4ddf07a5.js
var DateProfileGenerator = class {
  constructor(props) {
    this.props = props;
    this.initHiddenDays();
  }
  /* Date Range Computation
  ------------------------------------------------------------------------------------------------------------------*/
  // Builds a structure with info about what the dates/ranges will be for the "prev" view.
  buildPrev(currentDateProfile, currentDate, nowDate, forceToValid) {
    let { dateEnv } = this.props;
    let prevDate = dateEnv.subtract(
      dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit),
      // important for start-of-month
      currentDateProfile.dateIncrement
    );
    return this.build(prevDate, nowDate, -1, forceToValid);
  }
  // Builds a structure with info about what the dates/ranges will be for the "next" view.
  buildNext(currentDateProfile, currentDate, nowDate, forceToValid) {
    let { dateEnv } = this.props;
    let nextDate = dateEnv.add(
      dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit),
      // important for start-of-month
      currentDateProfile.dateIncrement
    );
    return this.build(nextDate, nowDate, 1, forceToValid);
  }
  // Builds a structure holding dates/ranges for rendering around the given date.
  // Optional direction param indicates whether the date is being incremented/decremented
  // from its previous value. decremented = -1, incremented = 1 (default).
  build(currentDate, nowDate, direction, forceToValid = true) {
    let { props } = this;
    let validRange;
    let currentInfo;
    let isRangeAllDay;
    let renderRange;
    let activeRange;
    let isValid;
    validRange = this.buildValidRange(nowDate);
    validRange = this.trimHiddenDays(validRange);
    if (forceToValid) {
      currentDate = constrainMarkerToRange(currentDate, validRange);
    }
    currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
    isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
    renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
    renderRange = this.trimHiddenDays(renderRange);
    activeRange = renderRange;
    if (!props.showNonCurrentDates) {
      activeRange = intersectRanges(activeRange, currentInfo.range);
    }
    activeRange = this.adjustActiveRange(activeRange);
    activeRange = intersectRanges(activeRange, validRange);
    isValid = rangesIntersect(currentInfo.range, validRange);
    if (!rangeContainsMarker(renderRange, currentDate)) {
      currentDate = renderRange.start;
    }
    return {
      currentDate,
      // constraint for where prev/next operations can go and where events can be dragged/resized to.
      // an object with optional start and end properties.
      validRange,
      // range the view is formally responsible for.
      // for example, a month view might have 1st-31st, excluding padded dates
      currentRange: currentInfo.range,
      // name of largest unit being displayed, like "month" or "week"
      currentRangeUnit: currentInfo.unit,
      isRangeAllDay,
      // dates that display events and accept drag-n-drop
      // will be `null` if no dates accept events
      activeRange,
      // date range with a rendered skeleton
      // includes not-active days that need some sort of DOM
      renderRange,
      // Duration object that denotes the first visible time of any given day
      slotMinTime: props.slotMinTime,
      // Duration object that denotes the exclusive visible end time of any given day
      slotMaxTime: props.slotMaxTime,
      isValid,
      // how far the current date will move for a prev/next operation
      dateIncrement: this.buildDateIncrement(currentInfo.duration)
      // pass a fallback (might be null) ^
    };
  }
  // Builds an object with optional start/end properties.
  // Indicates the minimum/maximum dates to display.
  // not responsible for trimming hidden days.
  buildValidRange(nowDate) {
    let input = this.props.validRangeInput;
    let simpleInput = typeof input === "function" ? input.call(this.props.calendarApi, this.props.dateEnv.toDate(nowDate)) : input;
    return this.refineRange(simpleInput) || { start: null, end: null };
  }
  // Builds a structure with info about the "current" range, the range that is
  // highlighted as being the current month for example.
  // See build() for a description of `direction`.
  // Guaranteed to have `range` and `unit` properties. `duration` is optional.
  buildCurrentRangeInfo(date, direction) {
    let { props } = this;
    let duration = null;
    let unit = null;
    let range = null;
    let dayCount;
    if (props.duration) {
      duration = props.duration;
      unit = props.durationUnit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    } else if (dayCount = this.props.dayCount) {
      unit = "day";
      range = this.buildRangeFromDayCount(date, direction, dayCount);
    } else if (range = this.buildCustomVisibleRange(date)) {
      unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
    } else {
      duration = this.getFallbackDuration();
      unit = greatestDurationDenominator(duration).unit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    }
    return { duration, unit, range };
  }
  getFallbackDuration() {
    return createDuration({ day: 1 });
  }
  // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.
  adjustActiveRange(range) {
    let { dateEnv, usesMinMaxTime, slotMinTime, slotMaxTime } = this.props;
    let { start, end } = range;
    if (usesMinMaxTime) {
      if (asRoughDays(slotMinTime) < 0) {
        start = startOfDay4(start);
        start = dateEnv.add(start, slotMinTime);
      }
      if (asRoughDays(slotMaxTime) > 1) {
        end = startOfDay4(end);
        end = addDays3(end, -1);
        end = dateEnv.add(end, slotMaxTime);
      }
    }
    return { start, end };
  }
  // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.
  buildRangeFromDuration(date, direction, duration, unit) {
    let { dateEnv, dateAlignment } = this.props;
    let start;
    let end;
    let res;
    if (!dateAlignment) {
      let { dateIncrement } = this.props;
      if (dateIncrement) {
        if (asRoughMs(dateIncrement) < asRoughMs(duration)) {
          dateAlignment = greatestDurationDenominator(dateIncrement).unit;
        } else {
          dateAlignment = unit;
        }
      } else {
        dateAlignment = unit;
      }
    }
    if (asRoughDays(duration) <= 1) {
      if (this.isHiddenDay(start)) {
        start = this.skipHiddenDays(start, direction);
        start = startOfDay4(start);
      }
    }
    function computeRes() {
      start = dateEnv.startOf(date, dateAlignment);
      end = dateEnv.add(start, duration);
      res = { start, end };
    }
    computeRes();
    if (!this.trimHiddenDays(res)) {
      date = this.skipHiddenDays(date, direction);
      computeRes();
    }
    return res;
  }
  // Builds the "current" range when a dayCount is specified.
  buildRangeFromDayCount(date, direction, dayCount) {
    let { dateEnv, dateAlignment } = this.props;
    let runningCount = 0;
    let start = date;
    let end;
    if (dateAlignment) {
      start = dateEnv.startOf(start, dateAlignment);
    }
    start = startOfDay4(start);
    start = this.skipHiddenDays(start, direction);
    end = start;
    do {
      end = addDays3(end, 1);
      if (!this.isHiddenDay(end)) {
        runningCount += 1;
      }
    } while (runningCount < dayCount);
    return { start, end };
  }
  // Builds a normalized range object for the "visible" range,
  // which is a way to define the currentRange and activeRange at the same time.
  buildCustomVisibleRange(date) {
    let { props } = this;
    let input = props.visibleRangeInput;
    let simpleInput = typeof input === "function" ? input.call(props.calendarApi, props.dateEnv.toDate(date)) : input;
    let range = this.refineRange(simpleInput);
    if (range && (range.start == null || range.end == null)) {
      return null;
    }
    return range;
  }
  // Computes the range that will represent the element/cells for *rendering*,
  // but which may have voided days/times.
  // not responsible for trimming hidden days.
  buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
    return currentRange;
  }
  // Compute the duration value that should be added/substracted to the current date
  // when a prev/next operation happens.
  buildDateIncrement(fallback) {
    let { dateIncrement } = this.props;
    let customAlignment;
    if (dateIncrement) {
      return dateIncrement;
    }
    if (customAlignment = this.props.dateAlignment) {
      return createDuration(1, customAlignment);
    }
    if (fallback) {
      return fallback;
    }
    return createDuration({ days: 1 });
  }
  refineRange(rangeInput) {
    if (rangeInput) {
      let range = parseRange(rangeInput, this.props.dateEnv);
      if (range) {
        range = computeVisibleDayRange(range);
      }
      return range;
    }
    return null;
  }
  /* Hidden Days
  ------------------------------------------------------------------------------------------------------------------*/
  // Initializes internal variables related to calculating hidden days-of-week
  initHiddenDays() {
    let hiddenDays = this.props.hiddenDays || [];
    let isHiddenDayHash = [];
    let dayCnt = 0;
    let i3;
    if (this.props.weekends === false) {
      hiddenDays = hiddenDays.concat([0, 6]);
    }
    for (i3 = 0; i3 < 7; i3 += 1) {
      if (!(isHiddenDayHash[i3] = hiddenDays.indexOf(i3) !== -1)) {
        dayCnt += 1;
      }
    }
    if (!dayCnt) {
      throw new Error("invalid hiddenDays");
    }
    this.isHiddenDayHash = isHiddenDayHash;
  }
  // Remove days from the beginning and end of the range that are computed as hidden.
  // If the whole range is trimmed off, returns null
  trimHiddenDays(range) {
    let { start, end } = range;
    if (start) {
      start = this.skipHiddenDays(start);
    }
    if (end) {
      end = this.skipHiddenDays(end, -1, true);
    }
    if (start == null || end == null || start < end) {
      return { start, end };
    }
    return null;
  }
  // Is the current day hidden?
  // `day` is a day-of-week index (0-6), or a Date (used for UTC)
  isHiddenDay(day) {
    if (day instanceof Date) {
      day = day.getUTCDay();
    }
    return this.isHiddenDayHash[day];
  }
  // Incrementing the current day until it is no longer a hidden day, returning a copy.
  // DOES NOT CONSIDER validRange!
  // If the initial value of `date` is not a hidden day, don't do anything.
  // Pass `isExclusive` as `true` if you are dealing with an end date.
  // `inc` defaults to `1` (increment one day forward each time)
  skipHiddenDays(date, inc = 1, isExclusive = false) {
    while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
      date = addDays3(date, inc);
    }
    return date;
  }
};
function computeMajorUnit(dateProfile, dateEnv) {
  const { currentRange } = dateProfile;
  if (dateProfile.currentRangeUnit === "year") {
    if (dateEnv.diffWholeYears(currentRange.start, currentRange.end) > 1) {
      return "year";
    } else {
      return "month";
    }
  } else if (dateProfile.currentRangeUnit === "month") {
    if (dateEnv.diffWholeMonths(currentRange.start, currentRange.end) > 1) {
      return "month";
    }
  } else if (dateProfile.currentRangeUnit === "week") {
    if (diffWholeWeeks(currentRange.start, currentRange.end) > 1) {
      return "week";
    }
  } else if (dateProfile.currentRangeUnit === "day") {
    if (diffWholeDays(currentRange.start, currentRange.end) > 1) {
      return "day";
    }
  }
}
function isMajorUnit(dateMarker, majorUnit, dateEnv) {
  const isStartOfDay = dateMarker.valueOf() === startOfDay4(dateMarker).valueOf();
  if (isStartOfDay) {
    if (majorUnit === "year") {
      return !dateEnv.getMonth(dateMarker) && dateEnv.getDay(dateMarker) === 1;
    } else if (majorUnit === "month") {
      return dateEnv.getDay(dateMarker) === 1;
    } else if (majorUnit === "week") {
      return dateMarker.getUTCDay() === dateEnv.weekDow;
    } else if (majorUnit === "day") {
      return true;
    }
  }
  return false;
}

// node_modules/fullcalendar/chunks/8719026f.js
function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
  switch (action.type) {
    case "RECEIVE_EVENTS":
      return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);
    case "RESET_RAW_EVENTS":
      return resetRawEvents(eventStore, eventSources[action.sourceId], action.rawEvents, dateProfile.activeRange, context);
    case "ADD_EVENTS":
      return addEvent(
        eventStore,
        action.eventStore,
        // new ones
        dateProfile ? dateProfile.activeRange : null,
        context
      );
    case "RESET_EVENTS":
      return action.eventStore;
    case "MERGE_EVENTS":
      return mergeEventStores(eventStore, action.eventStore);
    case "PREV":
    // TODO: how do we track all actions that affect dateProfile :(
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      if (dateProfile) {
        return expandRecurring(eventStore, dateProfile.activeRange, context);
      }
      return eventStore;
    case "REMOVE_EVENTS":
      return excludeSubEventStore(eventStore, action.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return excludeEventsBySourceId(eventStore, action.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return filterEventStoreDefs(eventStore, (eventDef) => !eventDef.sourceId);
    case "REMOVE_ALL_EVENTS":
      return createEmptyEventStore();
    default:
      return eventStore;
  }
}
function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
  if (eventSource && // not already removed
  fetchId === eventSource.latestFetchId) {
    let subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);
    if (fetchRange) {
      subset = expandRecurring(subset, fetchRange, context);
    }
    return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
  }
  return eventStore;
}
function resetRawEvents(existingEventStore, eventSource, rawEvents, activeRange, context) {
  const { defIdMap, instanceIdMap } = buildPublicIdMaps(existingEventStore);
  let newEventStore = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context, false, defIdMap, instanceIdMap);
  return expandRecurring(newEventStore, activeRange, context);
}
function transformRawEvents(rawEvents, eventSource, context) {
  let calEachTransform = context.options.eventDataTransform;
  let sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
  if (sourceEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
  }
  if (calEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
  }
  return rawEvents;
}
function transformEachRawEvent(rawEvents, func) {
  let refinedEvents;
  if (!func) {
    refinedEvents = rawEvents;
  } else {
    refinedEvents = [];
    for (let rawEvent of rawEvents) {
      let refinedEvent = func(rawEvent);
      if (refinedEvent) {
        refinedEvents.push(refinedEvent);
      } else if (refinedEvent == null) {
        refinedEvents.push(rawEvent);
      }
    }
  }
  return refinedEvents;
}
function addEvent(eventStore, subset, expandRange, context) {
  if (expandRange) {
    subset = expandRecurring(subset, expandRange, context);
  }
  return mergeEventStores(eventStore, subset);
}
function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
  let { defs } = eventStore;
  let instances = mapHash(eventStore.instances, (instance) => {
    let def = defs[instance.defId];
    if (def.allDay) {
      return instance;
    }
    let { instantStartMs, instantEndMs } = instance.range;
    let start = instantStartMs != null ? newDateEnv.timestampToMarker(instantStartMs) : newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start));
    let end = instantEndMs != null ? newDateEnv.timestampToMarker(instantEndMs) : newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end));
    return {
      ...instance,
      range: buildValidInstanceRange({ marker: start, instantMs: instantStartMs }, { marker: end, instantMs: instantEndMs }, newDateEnv) ?? buildEventInstanceRange(
        // mixed exact/civil edges whose real order degenerated in the new zone (rare):
        // keep the exact start, apply the old real duration civilly
        start,
        addMs(start, getRangeInstantEndMs(instance.range, oldDateEnv) - getRangeInstantStartMs(instance.range, oldDateEnv)),
        instantStartMs
      )
    };
  });
  return { defs, instances };
}
function excludeEventsBySourceId(eventStore, sourceId) {
  return filterEventStoreDefs(eventStore, (eventDef) => eventDef.sourceId !== sourceId);
}
function buildPublicIdMaps(eventStore) {
  const { defs, instances } = eventStore;
  const defIdMap = {};
  const instanceIdMap = {};
  for (let defId in defs) {
    const def = defs[defId];
    const { publicId } = def;
    if (publicId) {
      defIdMap[publicId] = defId;
    }
  }
  for (let instanceId in instances) {
    const instance = instances[instanceId];
    const def = defs[instance.defId];
    const { publicId } = def;
    if (publicId) {
      instanceIdMap[publicId] = instanceId;
    }
  }
  return { defIdMap, instanceIdMap };
}
var Interaction = class {
  constructor(settings) {
    this.component = settings.component;
    this.isHitComboAllowed = settings.isHitComboAllowed || null;
  }
  destroy() {
  }
};
function parseInteractionSettings(component, input) {
  return {
    component,
    el: input.el,
    useEventCenter: input.useEventCenter != null ? input.useEventCenter : true,
    isHitComboAllowed: input.isHitComboAllowed || null
  };
}
var interactionSettingsStore = {};

// node_modules/fullcalendar/chunks/0b82b05c.js
function refinePluginDef(input) {
  return {
    name: input.name,
    premiumReleaseDate: input.premiumReleaseDate ? new Date(input.premiumReleaseDate) : void 0,
    reducers: input.reducers || [],
    isLoadingFuncs: input.isLoadingFuncs || [],
    contextInit: [].concat(input.contextInit || []),
    eventRefiners: input.eventRefiners || {},
    eventDefMemberAdders: input.eventDefMemberAdders || [],
    eventSourceRefiners: input.eventSourceRefiners || {},
    isDraggableTransformers: input.isDraggableTransformers || [],
    eventDragMutationMassagers: input.eventDragMutationMassagers || [],
    eventDefMutationAppliers: input.eventDefMutationAppliers || [],
    dateSelectionTransformers: input.dateSelectionTransformers || [],
    datePointTransforms: input.datePointTransforms || [],
    dateSpanTransforms: input.dateSpanTransforms || [],
    views: input.views || {},
    viewPropsTransformers: input.viewPropsTransformers || [],
    isPropsValid: input.isPropsValid || null,
    externalDefTransforms: input.externalDefTransforms || [],
    viewContainerAppends: input.viewContainerAppends || [],
    eventDropTransformers: input.eventDropTransformers || [],
    componentInteractions: input.componentInteractions || [],
    calendarInteractions: input.calendarInteractions || [],
    eventSourceDefs: input.eventSourceDefs || [],
    cmdFormatter: input.cmdFormatter,
    recurringTypes: input.recurringTypes || [],
    initialView: input.initialView || "",
    elementDraggingImpl: input.elementDraggingImpl,
    optionChangeHandlers: input.optionChangeHandlers || {},
    scrollerSyncerClass: input.scrollerSyncerClass || null,
    listenerRefiners: input.listenerRefiners || {},
    optionRefiners: input.optionRefiners || {},
    optionDefaults: input.optionDefaults ? [input.optionDefaults] : [],
    propSetHandlers: input.propSetHandlers || {}
  };
}
function buildPluginHooks(pluginDefs, globalDefs) {
  let pluginsByName = {};
  let hooks = {
    premiumReleaseDate: void 0,
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollerSyncerClass: null,
    listenerRefiners: {},
    optionRefiners: {},
    optionDefaults: [],
    propSetHandlers: {}
  };
  function addDefs(defs) {
    for (let unrefinedDef of defs) {
      const { name } = unrefinedDef;
      if (!name) {
        throw new Error("Plugin must specify a name");
      }
      if (unrefinedDef.majorVersionError) {
        throw new Error(unrefinedDef.majorVersionError);
      }
      if (!pluginsByName[name]) {
        const def = pluginsByName[name] = refinePluginDef(unrefinedDef);
        hooks = combineHooks(hooks, def);
        addDefs(unrefinedDef.deps || []);
      }
    }
  }
  if (pluginDefs) {
    addDefs(pluginDefs);
  }
  addDefs(globalDefs);
  return hooks;
}
function buildBuildPluginHooks() {
  let currentOverrideDefs = [];
  let currentGlobalDefs = [];
  let currentHooks;
  return (overrideDefs, globalDefs) => {
    if (!currentHooks || !isArraysEqual(overrideDefs, currentOverrideDefs) || !isArraysEqual(globalDefs, currentGlobalDefs)) {
      currentHooks = buildPluginHooks(overrideDefs, globalDefs);
    }
    currentOverrideDefs = overrideDefs;
    currentGlobalDefs = globalDefs;
    return currentHooks;
  };
}
function combineHooks(hooks0, hooks1) {
  return {
    premiumReleaseDate: compareOptionalDates(hooks0.premiumReleaseDate, hooks1.premiumReleaseDate),
    reducers: hooks0.reducers.concat(hooks1.reducers),
    isLoadingFuncs: hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),
    contextInit: hooks0.contextInit.concat(hooks1.contextInit),
    eventRefiners: { ...hooks0.eventRefiners, ...hooks1.eventRefiners },
    eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
    eventSourceRefiners: { ...hooks0.eventSourceRefiners, ...hooks1.eventSourceRefiners },
    isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
    eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
    eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
    dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
    datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
    dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
    views: mergeViewOptionsMap(hooks0.views, hooks1.views),
    viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
    isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
    externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
    viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
    eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
    calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
    componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
    eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
    cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
    recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
    initialView: hooks0.initialView || hooks1.initialView,
    // put earlier plugins FIRST
    elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
    // "
    optionChangeHandlers: { ...hooks0.optionChangeHandlers, ...hooks1.optionChangeHandlers },
    scrollerSyncerClass: hooks0.scrollerSyncerClass || hooks1.scrollerSyncerClass,
    listenerRefiners: { ...hooks0.listenerRefiners, ...hooks1.listenerRefiners },
    optionRefiners: { ...hooks0.optionRefiners, ...hooks1.optionRefiners },
    optionDefaults: hooks0.optionDefaults.concat(hooks1.optionDefaults),
    propSetHandlers: { ...hooks0.propSetHandlers, ...hooks1.propSetHandlers }
  };
}
function compareOptionalDates(date0, date1) {
  if (date0 === void 0) {
    return date1;
  }
  if (date1 === void 0) {
    return date0;
  }
  return new Date(Math.max(date0.valueOf(), date1.valueOf()));
}
function compileViewDefs(defaultConfigs, overrideConfigs) {
  let hash = {};
  let viewType;
  for (viewType in defaultConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }
  for (viewType in overrideConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }
  return hash;
}
function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  if (hash[viewType]) {
    return hash[viewType];
  }
  let viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  if (viewDef) {
    hash[viewType] = viewDef;
  }
  return viewDef;
}
function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  let defaultConfig = defaultConfigs[viewType];
  let overrideConfig = overrideConfigs[viewType];
  let queryProp = (name) => defaultConfig && defaultConfig[name] !== null ? defaultConfig[name] : overrideConfig && overrideConfig[name] !== null ? overrideConfig[name] : null;
  let theComponent = queryProp("component");
  let superType = queryProp("superType");
  let superDef = null;
  if (superType) {
    if (superType === viewType) {
      throw new Error("Can't have a custom view type that references itself");
    }
    superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
  }
  if (!theComponent && superDef) {
    theComponent = superDef.component;
  }
  if (!theComponent) {
    return null;
  }
  return {
    type: viewType,
    component: theComponent,
    defaults: mergeCalendarOptions(superDef ? superDef.defaults : {}, defaultConfig ? defaultConfig.rawOptions : {}),
    overrides: mergeCalendarOptions(superDef ? superDef.overrides : {}, overrideConfig ? overrideConfig.rawOptions : {})
  };
}
function parseViewConfigs(inputs) {
  return mapHash(inputs, parseViewConfig);
}
function parseViewConfig(input) {
  let rawOptions = typeof input === "function" ? { component: input } : input;
  let { component } = rawOptions;
  if (rawOptions.content) {
    component = createViewHookComponent(rawOptions.content);
  } else if (component && !(component.prototype instanceof BaseComponent)) {
    component = createViewHookComponent(component);
  }
  return {
    superType: rawOptions.type,
    component,
    rawOptions
    // includes type and component too :(
  };
}
function createViewHookComponent(contentGenerator) {
  return (viewProps) => u2(ViewContextType.Consumer, { children: (context) => {
    const { options, viewSpec } = context;
    const renderProps = {
      // the "extra" props, for sliceEvents...
      ...viewProps,
      nextDayThreshold: options.nextDayThreshold,
      // ViewDisplayInfo...
      ...computeViewBorderless(options),
      options: { headerToolbar: options.headerToolbar, footerToolbar: options.footerToolbar },
      isHeightAuto: getIsHeightAuto(options),
      view: context.viewApi
    };
    return u2(ContentContainer, { tag: "div", className: joinClassNames(
      generateClassName(options.viewClass, renderProps),
      // WORKAROUND for way calendar's className would get merged into view's className
      generateClassName(viewSpec.optionDefaults.class, renderProps),
      generateClassName(viewSpec.optionDefaults.className, renderProps),
      generateClassName(viewSpec.optionOverrides.class, renderProps),
      generateClassName(viewSpec.optionOverrides.className, renderProps)
    ), renderProps, generatorName: void 0, customGenerator: contentGenerator, didMount: options.didMount || options.viewDidMount, willUnmount: options.willUnmount || options.viewWillUnmount });
  } });
}
function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides) {
  let defaultConfigs = parseViewConfigs(defaultInputs);
  let overrideConfigs = parseViewConfigs(optionOverrides.views);
  let viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
  return mapHash(viewDefs, (viewDef) => buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides));
}
function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides) {
  let durationInput = viewDef.overrides.duration || viewDef.defaults.duration || dynamicOptionOverrides.duration || optionOverrides.duration;
  let duration = null;
  let durationUnit = "";
  let singleUnit = "";
  let singleUnitOverrides = {};
  if (durationInput) {
    duration = createDurationCached(durationInput);
    if (duration) {
      let denom = greatestDurationDenominator(duration);
      durationUnit = denom.unit;
      if (denom.value === 1) {
        singleUnit = durationUnit;
        singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {};
      }
    }
  }
  return {
    type: viewDef.type,
    component: viewDef.component,
    duration,
    durationUnit,
    singleUnit,
    optionDefaults: viewDef.defaults,
    optionOverrides: { ...singleUnitOverrides, ...viewDef.overrides }
  };
}
var durationInputMap = {};
function createDurationCached(durationInput) {
  let json = JSON.stringify(durationInput);
  let res = durationInputMap[json];
  if (res === void 0) {
    res = createDuration(durationInput);
    durationInputMap[json] = res;
  }
  return res;
}
function reduceViewType(viewType, action) {
  switch (action.type) {
    case "CHANGE_VIEW_TYPE":
      viewType = action.viewType;
  }
  return viewType;
}
function reduceCurrentDate(currentDate, action) {
  switch (action.type) {
    case "CHANGE_DATE":
      return action.dateMarker;
    default:
      return currentDate;
  }
}
function getInitialDate(options, dateEnv, nowManager) {
  let initialDateInput = options.initialDate;
  if (initialDateInput != null) {
    return dateEnv.createMarker(initialDateInput);
  }
  return nowManager.getDateMarker();
}
function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
  switch (action.type) {
    case "SET_OPTION":
      return { ...dynamicOptionOverrides, [action.optionName]: action.rawOptionValue };
    default:
      return dynamicOptionOverrides;
  }
}
function reduceDateProfile(currentDateProfile, action, currentDate, nowDate, dateProfileGenerator) {
  let dp;
  switch (action.type) {
    case "CHANGE_VIEW_TYPE":
      return dateProfileGenerator.build(action.dateMarker || currentDate, nowDate);
    case "CHANGE_DATE":
      return dateProfileGenerator.build(action.dateMarker, nowDate);
    case "PREV":
      dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate, nowDate);
      if (dp.isValid) {
        return dp;
      }
      break;
    case "NEXT":
      dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate, nowDate);
      if (dp.isValid) {
        return dp;
      }
      break;
  }
  return currentDateProfile;
}
function reduceDateSelection(currentSelection, action) {
  switch (action.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return action.selection;
    default:
      return currentSelection;
  }
}
function reduceSelectedEvent(currentInstanceId, action) {
  switch (action.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return action.eventInstanceId;
    default:
      return currentInstanceId;
  }
}
function reduceEventDrag(currentDrag, action) {
  let newDrag;
  switch (action.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      newDrag = action.state;
      return {
        affectedEvents: newDrag.affectedEvents,
        mutatedEvents: newDrag.mutatedEvents,
        isEvent: newDrag.isEvent
      };
    default:
      return currentDrag;
  }
}
function reduceEventResize(currentResize, action) {
  let newResize;
  switch (action.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      newResize = action.state;
      return {
        affectedEvents: newResize.affectedEvents,
        mutatedEvents: newResize.mutatedEvents,
        isEvent: newResize.isEvent
      };
    default:
      return currentResize;
  }
}
function parseToolbars(calendarOptions, viewSpecs, calendarApi) {
  let header = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, viewSpecs, calendarApi) : null;
  let footer = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, viewSpecs, calendarApi) : null;
  return { header, footer };
}
function parseToolbar(sectionStrHash, calendarOptions, viewSpecs, calendarApi) {
  let isRtl = calendarOptions.direction === "rtl";
  let viewsWithButtons = [];
  let hasTitle = false;
  function processSectionStr(sectionStr) {
    let sectionRes = parseSection(sectionStr, calendarOptions, viewSpecs, calendarApi);
    viewsWithButtons.push(...sectionRes.viewsWithButtons);
    hasTitle = hasTitle || sectionRes.hasTitle;
    return sectionRes.widgets;
  }
  const sectionWidgets = {
    start: processSectionStr(sectionStrHash[isRtl ? "right" : "left"] || sectionStrHash.start || ""),
    center: processSectionStr(sectionStrHash.center || ""),
    end: processSectionStr(sectionStrHash[isRtl ? "left" : "right"] || sectionStrHash.end || "")
  };
  return {
    sectionWidgets,
    viewsWithButtons,
    hasTitle
  };
}
function parseSection(sectionStr, calendarOptions, viewSpecs, calendarApi) {
  let calendarButtons = calendarOptions.buttons || {};
  let customElements2 = calendarOptions.toolbarElements || {};
  let sectionSubstrs = sectionStr ? sectionStr.split(" ") : [];
  let viewsWithButtons = [];
  let hasTitle = false;
  let widgets = sectionSubstrs.map((buttonGroupStr) => buttonGroupStr.split(",").map((name) => {
    if (name === "title") {
      hasTitle = true;
      return { name };
    }
    if (customElements2[name]) {
      return { name, customElement: customElements2[name] };
    }
    let viewSpec;
    let buttonInput = calendarButtons[name] || {};
    let buttonText;
    let buttonHint;
    let buttonClick;
    if (viewSpec = viewSpecs[name]) {
      viewsWithButtons.push(name);
      const buttonTextKey = viewSpec.optionDefaults.buttonTextKey;
      buttonText = buttonInput.text || (buttonTextKey ? calendarOptions[buttonTextKey] : "") || (viewSpec.singleUnit ? calendarOptions[viewSpec.singleUnit + "TextLong"] || calendarOptions[viewSpec.singleUnit + "Text"] : "") || name;
      buttonHint = formatWithOrdinals(
        buttonInput.hint || calendarOptions.viewHint,
        [buttonText, name],
        // ordinal arguments
        buttonText
      );
      buttonClick = (ev) => {
        buttonInput?.click?.(ev);
        if (!ev.defaultPrevented) {
          calendarApi.changeView(name);
        }
      };
    } else {
      buttonText = buttonInput.text || calendarOptions[name + "TextLong"] || calendarOptions[name + "Text"] || name;
      if (name === "prevYear") {
        buttonHint = formatWithOrdinals(buttonInput.hint || calendarOptions.prevHint, [calendarOptions.yearText, "year"], buttonText);
      } else if (name === "nextYear") {
        buttonHint = formatWithOrdinals(buttonInput.hint || calendarOptions.nextHint, [calendarOptions.yearText, "year"], buttonText);
      } else {
        buttonHint = (currentUnit) => {
          return formatWithOrdinals(
            buttonInput.hint || calendarOptions[name + "Hint"],
            // todayHint/prevHint/nextHint
            [
              calendarOptions[currentUnit + "TextLong"] || calendarOptions[currentUnit + "Text"],
              currentUnit
            ],
            buttonText
          );
        };
      }
      buttonClick = (ev) => {
        buttonInput?.click?.(ev);
        if (!ev.defaultPrevented) {
          calendarApi[name]?.();
        }
      };
    }
    return {
      name,
      isView: Boolean(viewSpec),
      buttonText,
      buttonHint,
      buttonDisplay: buttonInput.display,
      buttonIconClass: buttonInput.iconClass,
      buttonIconContent: buttonInput.iconContent,
      buttonClick,
      buttonIsPrimary: buttonInput.isPrimary || false,
      buttonClass: buttonInput.class ?? buttonInput.className,
      buttonDidMount: buttonInput.didMount,
      buttonWillUnmount: buttonInput.willUnmount
    };
  }));
  return { widgets, viewsWithButtons, hasTitle };
}
var ViewImpl = class {
  constructor(type, getCurrentData, dateEnv) {
    this.type = type;
    this.getCurrentData = getCurrentData;
    this.dateEnv = dateEnv;
  }
  get calendar() {
    return this.getCurrentData().calendarApi;
  }
  get title() {
    return this.getCurrentData().viewTitle;
  }
  get activeStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
  }
  get activeEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
  }
  get currentStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
  }
  get currentEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
  }
  getOption(name) {
    return this.getCurrentData().options[name];
  }
};
var DEF_DEFAULTS = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  // monday - friday
  display: "inverse-background",
  className: "",
  // TODO: remove
  groupId: "_businessHours"
  // so multiple defs get grouped
};
function parseBusinessHours(input, context) {
  return parseEvents(refineInputs(input), null, context);
}
function refineInputs(input) {
  let rawDefs;
  if (input === true) {
    rawDefs = [{}];
  } else if (Array.isArray(input)) {
    rawDefs = input.filter((rawDef) => rawDef.daysOfWeek);
  } else if (typeof input === "object" && input) {
    rawDefs = [input];
  } else {
    rawDefs = [];
  }
  rawDefs = rawDefs.map((rawDef) => ({ ...DEF_DEFAULTS, ...rawDef }));
  return rawDefs;
}
function buildTitle(dateProfile, viewOptions, dateEnv) {
  let range;
  if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
    range = dateProfile.currentRange;
  } else {
    range = dateProfile.activeRange;
  }
  let parts;
  const options = { isEndExclusive: dateProfile.isRangeAllDay };
  if (viewOptions.titleFormat) {
    parts = dateEnv.formatRangeToParts(range.start, range.end, createFormatter(viewOptions.titleFormat), options);
  } else {
    parts = dateEnv.formatRangeToParts(range.start, range.end, createFormatter(buildTitleFormat(dateProfile, viewOptions.disallowAmbigTitle, "long")), options);
    if (hasTwoMonths(parts)) {
      parts = dateEnv.formatRangeToParts(range.start, range.end, createFormatter(buildTitleFormat(dateProfile, viewOptions.disallowAmbigTitle, "short")), options);
    }
  }
  return joinDateTimeFormatParts(parts);
}
function buildTitleFormat(dateProfile, disallowAmbigTitle, monthFormat) {
  const { currentRangeUnit } = dateProfile;
  if (currentRangeUnit === "year") {
    return { year: "numeric" };
  }
  if (currentRangeUnit === "month") {
    return { year: "numeric", month: monthFormat };
  }
  if (!disallowAmbigTitle) {
    const days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);
    if (days !== null && days > 1) {
      return {
        year: "numeric",
        month: monthFormat
      };
    }
  }
  return { year: "numeric", month: "long", day: "numeric" };
}
function hasTwoMonths(parts) {
  let hasStartMonth = false;
  let hasEndMonth = false;
  for (const part of parts) {
    if (part.type === "month") {
      if (part.source === "startRange")
        hasStartMonth = true;
      if (part.source === "endRange")
        hasEndMonth = true;
    }
  }
  return hasStartMonth && hasEndMonth;
}
var CalendarNowManager = class {
  constructor() {
    this.resetListeners = /* @__PURE__ */ new Set();
  }
  handleInput(dateEnv, nowInput) {
    const oldDateEnv = this.dateEnv;
    if (dateEnv !== oldDateEnv) {
      if (typeof nowInput === "function") {
        this.nowFn = nowInput;
      } else if (!oldDateEnv) {
        this.nowAnchorDate = nowInput ? resolveInputToDate(nowInput, dateEnv) : /* @__PURE__ */ new Date();
        this.nowAnchorQueried = Date.now();
      }
      this.dateEnv = dateEnv;
      if (oldDateEnv) {
        for (const resetListener of this.resetListeners.values()) {
          resetListener();
        }
      }
    }
  }
  getDateMarker() {
    return this.dateEnv.timestampToMarker(this.getEpochMs());
  }
  /*
  The exact instant of "now". Unlike a DateMarker, unambiguous during DST transitions.
  When `now` was supplied as a function returning a civil time, resolves deterministically.
  */
  getEpochMs() {
    return this.nowAnchorDate ? this.nowAnchorDate.valueOf() + (Date.now() - this.nowAnchorQueried) : resolveInputToDate(this.nowFn(), this.dateEnv).valueOf();
  }
  addResetListener(handler) {
    this.resetListeners.add(handler);
  }
  removeResetListener(handler) {
    this.resetListeners.delete(handler);
  }
};
function resolveInputToDate(input, dateEnv) {
  const meta = dateEnv.createMarkerMeta(input);
  return meta.instantMs != null ? new Date(meta.instantMs) : dateEnv.toDate(meta.marker);
}
var CalendarDataManager = class {
  constructor(config) {
    this.computeCurrentViewData = memoize2(this._computeCurrentViewData);
    this.organizeRawLocales = memoize2(organizeRawLocales);
    this.buildLocale = memoize2(buildLocale);
    this.buildPluginHooks = buildBuildPluginHooks();
    this.buildDateEnv = memoize2(buildDateEnv);
    this.parseToolbars = memoize2(parseToolbars);
    this.buildViewSpecs = memoize2(buildViewSpecs);
    this.buildDateProfileGenerator = memoizeObjArg(buildDateProfileGenerator);
    this.buildViewApi = memoize2(buildViewApi);
    this.buildViewUiProps = memoizeObjArg(buildViewUiProps);
    this.buildEventUiBySource = memoize2(buildEventUiBySource, isPropsEqualShallow);
    this.buildEventUiBases = memoize2(buildEventUiBases);
    this.parseContextBusinessHours = memoizeObjArg(parseContextBusinessHours);
    this.buildToolbarProps = memoize2(buildToolbarProps);
    this.buildTitle = memoize2(buildTitle);
    this.nowManager = new CalendarNowManager();
    this.isDrainingActionQueue = false;
    this.actionQueue = [];
    this.optionOverrides = {};
    this.emitter = new Emitter();
    this.currentCalendarOptionsRefiners = {};
    this.currentCalendarOptionsInput = {};
    this.currentCalendarOptionsRefined = {};
    this.currentViewOptionsInput = {};
    this.currentViewOptionsRefined = {};
    this.optionsForRefining = [];
    this.optionsForHandling = [];
    this.getCurrentData = () => this.data;
    this.handleNowChange = () => {
      this.dispatch({ type: "UPDATE_NOW" });
    };
    this.dispatch = (action) => {
      this.actionQueue.push(action);
      if (!this.isDrainingActionQueue) {
        this.drainActionQueue();
      }
    };
    this.config = config;
    this.nowManager = new CalendarNowManager();
    this.nowTimer = new NowTimerRunner(this.handleNowChange);
  }
  destroy() {
    this.nowTimer.destroy();
  }
  /*
  Will NOT trigger onDataChange unless there were other actions in the queue
  */
  update(optionOverrides) {
    this.optionOverrides = optionOverrides;
    this.actionQueue.push({ type: "IDLE" });
    this.drainActionQueue();
    return this.data;
  }
  /*
  WILL trigger onDataChange
  */
  resetOptions(optionOverrides, changedOptionNames) {
    if (changedOptionNames === void 0) {
      this.optionOverrides = optionOverrides;
    } else {
      this.optionOverrides = { ...this.optionOverrides, ...optionOverrides };
      this.optionsForRefining.push(...changedOptionNames);
    }
    this.dispatch({ type: "RESET_OPTIONS" });
  }
  drainActionQueue() {
    let calendarContext;
    let { state, data } = this;
    const isInit = !state;
    const { actionQueue } = this;
    const actionsComplete = [];
    this.isDrainingActionQueue = true;
    while (actionQueue.length) {
      const action = actionQueue.shift();
      ({ state, data, calendarContext } = this.reduce(state, data, action));
      this.state = state;
      this.data = data;
      if (action.type !== "IDLE") {
        actionsComplete.push(action);
      }
    }
    this.isDrainingActionQueue = false;
    if (isInit) {
      const controllerOption = calendarContext.options.controller;
      if (controllerOption) {
        controllerOption._setApi(this.config.calendarApi);
      }
    }
    if (!isInit && actionsComplete.length) {
      const { onDataChange } = this.config;
      if (onDataChange) {
        onDataChange(this.data, actionsComplete);
      }
    }
  }
  reduce(prevState, prevData, action) {
    let { config } = this;
    let isInit = !prevState;
    let dynamicOptionOverrides = isInit ? {} : reduceDynamicOptionOverrides(prevState.dynamicOptionOverrides, action);
    let optionsData = this.computeOptionsData(this.optionOverrides, dynamicOptionOverrides, config.calendarApi);
    let currentViewType = isInit ? optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView : reduceViewType(prevState.currentViewType, action);
    let currentViewData = this.computeCurrentViewData(currentViewType, optionsData, this.optionOverrides, dynamicOptionOverrides);
    config.calendarApi.currentDataManager = this;
    this.emitter.setThisContext(config.calendarApi);
    this.emitter.setOptions(currentViewData.options);
    let calendarContext = {
      nowManager: this.nowManager,
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: config.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    };
    let { nowDate } = this.nowTimer.update({
      unit: "day",
      unitValue: 1,
      nowIndicatorSnap: "auto",
      nowManager: this.nowManager,
      dateEnv: optionsData.dateEnv
    });
    let currentDate = isInit ? getInitialDate(optionsData.calendarOptions, optionsData.dateEnv, this.nowManager) : reduceCurrentDate(prevState.currentDate, action);
    let dateProfile;
    if (isInit) {
      dateProfile = currentViewData.dateProfileGenerator.build(currentDate, nowDate);
    } else {
      dateProfile = prevState.dateProfile;
      if (prevData && prevData.dateProfileGenerator !== currentViewData.dateProfileGenerator) {
        dateProfile = currentViewData.dateProfileGenerator.build(currentDate, nowDate);
      }
      dateProfile = reduceDateProfile(dateProfile, action, currentDate, nowDate, currentViewData.dateProfileGenerator);
    }
    if (action && (action.type === "PREV" || action.type === "NEXT") || !rangeContainsMarker(dateProfile.activeRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }
    let eventSources = isInit ? initEventSources(optionsData.calendarOptions, dateProfile, calendarContext) : reduceEventSources(prevState.eventSources, action, dateProfile, calendarContext);
    let eventStore = isInit ? createEmptyEventStore() : reduceEventStore(prevState.eventStore, action, eventSources, dateProfile, calendarContext);
    let isEventsLoading = computeEventSourcesLoading(eventSources);
    let renderableEventStore = isInit ? createEmptyEventStore() : isEventsLoading && !currentViewData.options.progressiveEventRendering ? prevState.renderableEventStore || eventStore : eventStore;
    let { eventUiSingleBase, selectionConfig } = this.buildViewUiProps(calendarContext);
    let eventUiBySource = this.buildEventUiBySource(eventSources);
    let eventUiBases = isInit ? {} : this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
    let newState = {
      dynamicOptionOverrides,
      currentViewType,
      currentDate,
      dateProfile,
      eventSources,
      eventStore,
      renderableEventStore,
      selectionConfig,
      eventUiBases,
      businessHours: this.parseContextBusinessHours(calendarContext),
      dateSelection: isInit ? null : reduceDateSelection(prevState.dateSelection, action),
      eventSelection: isInit ? "" : reduceSelectedEvent(prevState.eventSelection, action),
      eventDrag: isInit ? null : reduceEventDrag(prevState.eventDrag, action),
      eventResize: isInit ? null : reduceEventResize(prevState.eventResize, action),
      nowDate
    };
    let contextAndState = { ...calendarContext, ...newState };
    for (let reducer of optionsData.pluginHooks.reducers) {
      Object.assign(newState, reducer(prevState, action, contextAndState));
    }
    let wasLoading = prevState ? computeIsLoading(prevState, calendarContext) : false;
    let isLoading = computeIsLoading(newState, calendarContext);
    if (!wasLoading && isLoading) {
      this.emitter.trigger("loading", true);
    } else if (wasLoading && !isLoading) {
      this.emitter.trigger("loading", false);
    }
    let viewTitle = this.buildTitle(dateProfile, currentViewData.options, optionsData.dateEnv);
    let toolbarProps = this.buildToolbarProps(currentViewData.viewSpec, dateProfile, currentViewData.dateProfileGenerator, currentDate, nowDate, viewTitle);
    let newData = {
      viewTitle,
      nowManager: this.nowManager,
      calendarApi: config.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData,
      toolbarProps,
      ...optionsData,
      ...currentViewData,
      ...newState
    };
    let changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
    let prevCalendarOptions = prevData && prevData.calendarOptions;
    let newCalendarOptions = optionsData.calendarOptions;
    if (prevCalendarOptions && prevCalendarOptions !== newCalendarOptions) {
      if (prevCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
        newState.eventSources = newData.eventSources = reduceEventSourcesNewTimeZone(newData.eventSources, dateProfile, newData);
        newState.eventStore = newData.eventStore = rezoneEventStoreDates(newData.eventStore, prevData.dateEnv, newData.dateEnv);
        newState.renderableEventStore = newData.renderableEventStore = rezoneEventStoreDates(newData.renderableEventStore, prevData.dateEnv, newData.dateEnv);
      }
      for (let optionName in changeHandlers) {
        if (this.optionsForHandling.indexOf(optionName) !== -1 || prevCalendarOptions[optionName] !== newCalendarOptions[optionName]) {
          changeHandlers[optionName](newCalendarOptions[optionName], newData);
        }
      }
    }
    this.optionsForHandling = [];
    return { state: newState, data: newData, calendarContext };
  }
  computeOptionsData(optionOverrides, dynamicOptionOverrides, calendarApi) {
    if (!this.optionsForRefining.length && optionOverrides === this.stableOptionOverrides && dynamicOptionOverrides === this.stableDynamicOptionOverrides) {
      return this.stableCalendarOptionsData;
    }
    let { refinedOptions, pluginHooks, localeDefaults, availableLocaleData } = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides);
    let dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekTextLong, refinedOptions.weekTextShort, pluginHooks, availableLocaleData);
    let viewSpecs = this.buildViewSpecs(pluginHooks.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides);
    let toolbarConfig = this.parseToolbars(refinedOptions, viewSpecs, calendarApi);
    return this.stableCalendarOptionsData = {
      calendarOptions: refinedOptions,
      pluginHooks,
      dateEnv,
      viewSpecs,
      toolbarConfig,
      localeDefaults,
      availableRawLocales: availableLocaleData.map
    };
  }
  // always called from behind a memoizer
  processRawCalendarOptions(optionOverrides, dynamicOptionOverrides) {
    let { locales, locale } = mergeCalendarOptions(BASE_OPTION_DEFAULTS, optionOverrides, dynamicOptionOverrides);
    let availableLocaleData = this.organizeRawLocales(locales);
    let availableRawLocales = availableLocaleData.map;
    let localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
    let pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], globalPlugins);
    let refiners = this.currentCalendarOptionsRefiners = {
      ...BASE_OPTION_REFINERS,
      ...CALENDAR_LISTENER_REFINERS,
      ...CALENDAR_ONLY_OPTION_REFINERS,
      ...pluginHooks.listenerRefiners,
      ...pluginHooks.optionRefiners
    };
    let raw = mergeCalendarOptions(BASE_OPTION_DEFAULTS, ...pluginHooks.optionDefaults, localeDefaults, filterKnownOptions(mergeCalendarOptions(optionOverrides, dynamicOptionOverrides), refiners));
    let refined = {};
    let currentRaw = this.currentCalendarOptionsInput;
    let currentRefined = this.currentCalendarOptionsRefined;
    let anyChanges = false;
    for (let optionName in raw) {
      if (this.optionsForRefining.indexOf(optionName) === -1 && (raw[optionName] === currentRaw[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && optionName in currentRaw && COMPLEX_OPTION_COMPARATORS[optionName](currentRaw[optionName], raw[optionName]) || isMergedPropsEqual(currentRaw[optionName], raw[optionName]))) {
        refined[optionName] = currentRefined[optionName];
      } else if (refiners[optionName]) {
        refined[optionName] = refiners[optionName](raw[optionName], optionName);
        anyChanges = true;
      }
    }
    if (anyChanges) {
      this.currentCalendarOptionsInput = raw;
      this.currentCalendarOptionsRefined = refined;
      this.stableOptionOverrides = optionOverrides;
      this.stableDynamicOptionOverrides = dynamicOptionOverrides;
    }
    this.optionsForHandling.push(...this.optionsForRefining);
    this.optionsForRefining = [];
    return {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks,
      availableLocaleData,
      localeDefaults
    };
  }
  _computeCurrentViewData(viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
    let viewSpec = optionsData.viewSpecs[viewType];
    if (!viewSpec) {
      throw new Error(`viewType "${viewType}" is not available. Please make sure you've loaded all neccessary plugins`);
    }
    let { refinedOptions } = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides);
    this.nowManager.handleInput(optionsData.dateEnv, refinedOptions.now);
    let dateProfileGenerator = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
      duration: viewSpec.duration,
      durationUnit: viewSpec.durationUnit,
      usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
      dateEnv: optionsData.dateEnv,
      calendarApi: this.config.calendarApi,
      slotMinTime: refinedOptions.slotMinTime,
      slotMaxTime: refinedOptions.slotMaxTime,
      showNonCurrentDates: refinedOptions.showNonCurrentDates,
      dayCount: refinedOptions.dayCount,
      dateAlignment: refinedOptions.dateAlignment,
      dateIncrement: refinedOptions.dateIncrement,
      hiddenDays: refinedOptions.hiddenDays,
      weekends: refinedOptions.weekends,
      validRangeInput: refinedOptions.validRange,
      visibleRangeInput: refinedOptions.visibleRange,
      fixedWeekCount: refinedOptions.fixedWeekCount
    });
    let viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
    return { viewSpec, options: refinedOptions, dateProfileGenerator, viewApi };
  }
  processRawViewOptions(viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
    let refiners = {
      ...BASE_OPTION_REFINERS,
      ...CALENDAR_LISTENER_REFINERS,
      ...CALENDAR_ONLY_OPTION_REFINERS,
      ...VIEW_ONLY_OPTION_REFINERS,
      ...pluginHooks.listenerRefiners,
      ...pluginHooks.optionRefiners
    };
    let raw = mergeCalendarOptions(BASE_OPTION_DEFAULTS, ...pluginHooks.optionDefaults, viewSpec.optionDefaults, localeDefaults, filterKnownOptions(mergeCalendarOptions(optionOverrides, viewSpec.optionOverrides, dynamicOptionOverrides), refiners));
    let refined = {};
    let currentRaw = this.currentViewOptionsInput;
    let currentRefined = this.currentViewOptionsRefined;
    let anyChanges = false;
    for (let optionName in raw) {
      if (raw[optionName] === currentRaw[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], currentRaw[optionName]) || isMergedPropsEqual(currentRaw[optionName], raw[optionName])) {
        refined[optionName] = currentRefined[optionName];
      } else {
        if (raw[optionName] === this.currentCalendarOptionsInput[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], this.currentCalendarOptionsInput[optionName])) {
          if (optionName in this.currentCalendarOptionsRefined) {
            refined[optionName] = this.currentCalendarOptionsRefined[optionName];
          }
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName], optionName);
        }
        anyChanges = true;
      }
    }
    if (anyChanges) {
      this.currentViewOptionsInput = raw;
      this.currentViewOptionsRefined = refined;
    }
    return {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined
    };
  }
};
function buildDateEnv(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekTextLong, weekTextShort, pluginHooks, availableLocaleData) {
  let locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
  return new DateEnv({
    calendarSystem: "gregory",
    // TODO: make this a setting
    timeZone,
    locale,
    weekNumberCalculation,
    firstDay,
    weekTextLong,
    weekTextShort,
    cmdFormatter: pluginHooks.cmdFormatter
  });
}
function buildDateProfileGenerator(props) {
  let DateProfileGeneratorClass = props.dateProfileGeneratorClass || DateProfileGenerator;
  return new DateProfileGeneratorClass(props);
}
function buildViewApi(type, getCurrentData, dateEnv) {
  return new ViewImpl(type, getCurrentData, dateEnv);
}
function buildEventUiBySource(eventSources) {
  return mapHash(eventSources, (eventSource) => eventSource.ui);
}
function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
  let eventUiBases = {
    "": eventUiSingleBase
    // fallback
  };
  for (let defId in eventDefs) {
    let def = eventDefs[defId];
    if (def.sourceId && eventUiBySource[def.sourceId]) {
      eventUiBases[defId] = eventUiBySource[def.sourceId];
    }
  }
  return eventUiBases;
}
function buildViewUiProps(calendarContext) {
  const { options } = calendarContext;
  return {
    eventUiSingleBase: createEventUi({
      display: options.eventDisplay,
      editable: options.editable,
      // without "event" at start
      startEditable: options.eventStartEditable,
      durationEditable: options.eventDurationEditable,
      constraint: options.eventConstraint,
      overlap: typeof options.eventOverlap === "boolean" ? options.eventOverlap : void 0,
      allow: options.eventAllow
      // color: options.eventColor, // StandardEvent/BgEvent will handle this
      // contrastColor: options.eventContrastColor, // StandardEvent/BgEvent will handle this
      // className: options.eventClass // render hook will handle this
    }, calendarContext),
    selectionConfig: createEventUi({
      constraint: options.selectConstraint,
      overlap: typeof options.selectOverlap === "boolean" ? options.selectOverlap : void 0,
      allow: options.selectAllow
    }, calendarContext)
  };
}
function computeIsLoading(state, context) {
  for (let isLoadingFunc of context.pluginHooks.isLoadingFuncs) {
    if (isLoadingFunc(state)) {
      return true;
    }
  }
  return false;
}
function parseContextBusinessHours(calendarContext) {
  return parseBusinessHours(calendarContext.options.businessHours, calendarContext);
}
var warnedUnknownOptions = {};
function filterKnownOptions(options, optionRefiners) {
  const knownOptions = {};
  for (const optionName in options) {
    if (optionRefiners[optionName]) {
      knownOptions[optionName] = options[optionName];
    } else if (!warnedUnknownOptions[optionName]) {
      warn(`Unknown option \`${optionName}\`.`);
      warnedUnknownOptions[optionName] = true;
    }
  }
  return knownOptions;
}
function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, nowDate, title) {
  let todayInfo = dateProfileGenerator.build(
    nowDate,
    nowDate,
    void 0,
    /* forceToValid = */
    false
  );
  let prevInfo = dateProfileGenerator.buildPrev(
    dateProfile,
    currentDate,
    nowDate,
    /* forceToValid = */
    false
  );
  let nextInfo = dateProfileGenerator.buildNext(
    dateProfile,
    currentDate,
    nowDate,
    /* forceToValid = */
    false
  );
  return {
    title,
    selectedButton: viewSpec.type,
    navUnit: viewSpec.singleUnit,
    isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, nowDate),
    isPrevEnabled: prevInfo.isValid,
    isNextEnabled: nextInfo.isValid
  };
}
var CalendarApiImpl = class {
  getCurrentData() {
    return this.currentDataManager.getCurrentData();
  }
  dispatch(action) {
    this.currentDataManager.dispatch(action);
  }
  get view() {
    return this.getCurrentData().viewApi;
  }
  batchRendering(callback) {
    callback();
  }
  // Options
  // -----------------------------------------------------------------------------------------------------------------
  setOption(name, val) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: name,
      rawOptionValue: val
    });
  }
  getOption(name) {
    return this.currentDataManager.currentCalendarOptionsInput[name];
  }
  getAvailableLocaleCodes() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }
  // Trigger
  // -----------------------------------------------------------------------------------------------------------------
  on(handlerName, handler) {
    let { currentDataManager } = this;
    if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) {
      currentDataManager.emitter.on(handlerName, handler);
    } else {
      warn(`Unknown listener \`${handlerName}\`.`);
    }
  }
  off(handlerName, handler) {
    this.currentDataManager.emitter.off(handlerName, handler);
  }
  // not meant for public use
  trigger(handlerName, ...args) {
    this.currentDataManager.emitter.trigger(handlerName, ...args);
  }
  // View
  // -----------------------------------------------------------------------------------------------------------------
  changeView(viewType, dateOrRange) {
    this.batchRendering(() => {
      this.unselect();
      if (dateOrRange) {
        if (dateOrRange.start && dateOrRange.end) {
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType
          });
          this.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: dateOrRange
          });
        } else {
          let { dateEnv } = this.getCurrentData();
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType,
            dateMarker: dateEnv.createMarker(dateOrRange)
          });
        }
      } else {
        this.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType
        });
      }
    });
  }
  // Forces navigation to a view for the given date.
  // `viewType` can be a specific view name or a generic one like "week" or "day".
  // needs to change
  zoomTo(dateMarker, viewType) {
    let state = this.getCurrentData();
    let spec;
    viewType = viewType || "day";
    spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
    this.unselect();
    if (spec) {
      this.dispatch({
        type: "CHANGE_VIEW_TYPE",
        viewType: spec.type,
        dateMarker
      });
    } else {
      this.dispatch({
        type: "CHANGE_DATE",
        dateMarker
      });
    }
  }
  // Given a duration singular unit, like "week" or "day", finds a matching view spec.
  // Preference is given to views that have corresponding buttons.
  getUnitViewSpec(unit) {
    let { viewSpecs, toolbarConfig } = this.getCurrentData();
    let viewTypes = [].concat(toolbarConfig.header ? toolbarConfig.header.viewsWithButtons : [], toolbarConfig.footer ? toolbarConfig.footer.viewsWithButtons : []);
    let i3;
    let spec;
    for (let viewType in viewSpecs) {
      viewTypes.push(viewType);
    }
    for (i3 = 0; i3 < viewTypes.length; i3 += 1) {
      spec = viewSpecs[viewTypes[i3]];
      if (spec) {
        if (spec.singleUnit === unit) {
          return spec;
        }
      }
    }
    return null;
  }
  // Current Date
  // -----------------------------------------------------------------------------------------------------------------
  prev() {
    this.unselect();
    this.dispatch({ type: "PREV" });
  }
  next() {
    this.unselect();
    this.dispatch({ type: "NEXT" });
  }
  prevYear() {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: state.dateEnv.addYears(state.currentDate, -1)
    });
  }
  nextYear() {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: state.dateEnv.addYears(state.currentDate, 1)
    });
  }
  today() {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: state.nowManager.getDateMarker()
    });
  }
  gotoDate(zonedDateInput) {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: state.dateEnv.createMarker(zonedDateInput)
    });
  }
  incrementDate(deltaInput) {
    let state = this.getCurrentData();
    let delta = createDuration(deltaInput);
    if (delta) {
      this.unselect();
      this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: state.dateEnv.add(state.currentDate, delta)
      });
    }
  }
  getDate() {
    let state = this.getCurrentData();
    return state.dateEnv.toDate(state.currentDate);
  }
  // Date Formatting Utils
  // -----------------------------------------------------------------------------------------------------------------
  formatDate(d3, formatter) {
    let { dateEnv } = this.getCurrentData();
    let dateMeta = dateEnv.createMarkerMeta(d3);
    return joinDateTimeFormatParts(dateEnv.formatToParts(dateMeta.marker, createFormatter(formatter), { instantMs: dateMeta.instantMs }));
  }
  // `settings` is for formatter AND isEndExclusive
  formatRange(d0, d1, settings) {
    let { dateEnv } = this.getCurrentData();
    let startMeta = dateEnv.createMarkerMeta(d0);
    let endMeta = dateEnv.createMarkerMeta(d1);
    return joinDateTimeFormatParts(dateEnv.formatRangeToParts(startMeta.marker, endMeta.marker, createFormatter(settings), {
      isEndExclusive: settings.isEndExclusive,
      startInstantMs: startMeta.instantMs,
      endInstantMs: endMeta.instantMs
    }));
  }
  formatIso(d3, omitTime) {
    let { dateEnv } = this.getCurrentData();
    return dateEnv.formatIso(dateEnv.createMarker(d3), { omitTime });
  }
  // Date Selection / Event Selection / DayClick
  // -----------------------------------------------------------------------------------------------------------------
  select(dateOrObj, endDate) {
    let selectionInput;
    if (endDate == null) {
      if (dateOrObj.start != null) {
        selectionInput = dateOrObj;
      } else {
        selectionInput = {
          start: dateOrObj,
          end: null
        };
      }
    } else {
      selectionInput = {
        start: dateOrObj,
        end: endDate
      };
    }
    let state = this.getCurrentData();
    let selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({ days: 1 }));
    if (selection) {
      this.dispatch({ type: "SELECT_DATES", selection });
      triggerDateSelect(selection, null, state);
    }
  }
  unselect(pev) {
    let state = this.getCurrentData();
    if (state.dateSelection) {
      this.dispatch({ type: "UNSELECT_DATES" });
      triggerDateUnselect(pev, state);
    }
  }
  // Public Events API
  // -----------------------------------------------------------------------------------------------------------------
  addEvent(eventInput, sourceInput) {
    if (eventInput instanceof EventImpl) {
      let def = eventInput._def;
      let instance = eventInput._instance;
      let currentData = this.getCurrentData();
      if (!currentData.eventStore.defs[def.defId]) {
        this.dispatch({
          type: "ADD_EVENTS",
          eventStore: eventTupleToStore({ def, instance })
          // TODO: better util for two args?
        });
        this.triggerEventAdd(eventInput);
      }
      return eventInput;
    }
    let state = this.getCurrentData();
    let eventSource;
    if (sourceInput instanceof EventSourceImpl) {
      eventSource = sourceInput.internalEventSource;
    } else if (typeof sourceInput === "boolean") {
      if (sourceInput) {
        [eventSource] = hashValuesToArray(state.eventSources);
      }
    } else if (sourceInput != null) {
      let sourceApi = this.getEventSourceById(sourceInput);
      if (!sourceApi) {
        warn(`Unknown event source ID \`${sourceInput}\`.`);
        return null;
      }
      eventSource = sourceApi.internalEventSource;
    }
    let tuple = parseEvent(eventInput, eventSource, state, false);
    if (tuple) {
      let newEventApi = new EventImpl(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
      this.dispatch({
        type: "ADD_EVENTS",
        eventStore: eventTupleToStore(tuple)
      });
      this.triggerEventAdd(newEventApi);
      return newEventApi;
    }
    return null;
  }
  triggerEventAdd(eventApi) {
    let { emitter } = this.getCurrentData();
    emitter.trigger("eventAdd", {
      event: eventApi,
      relatedEvents: [],
      revert: () => {
        this.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: eventApiToStore(eventApi)
        });
      }
    });
  }
  // TODO: optimize
  getEventById(id) {
    let state = this.getCurrentData();
    let { defs, instances } = state.eventStore;
    id = String(id);
    for (let defId in defs) {
      let def = defs[defId];
      if (def.publicId === id) {
        if (def.recurringDef) {
          return new EventImpl(state, def, null);
        }
        for (let instanceId in instances) {
          let instance = instances[instanceId];
          if (instance.defId === def.defId) {
            return new EventImpl(state, def, instance);
          }
        }
      }
    }
    return null;
  }
  getEvents() {
    let currentData = this.getCurrentData();
    return buildEventApis(currentData.eventStore, currentData);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------
  getEventSources() {
    let state = this.getCurrentData();
    let sourceHash = state.eventSources;
    let sourceApis = [];
    for (let internalId in sourceHash) {
      sourceApis.push(new EventSourceImpl(state, sourceHash[internalId]));
    }
    return sourceApis;
  }
  getEventSourceById(id) {
    let state = this.getCurrentData();
    let sourceHash = state.eventSources;
    id = String(id);
    for (let sourceId in sourceHash) {
      if (sourceHash[sourceId].publicId === id) {
        return new EventSourceImpl(state, sourceHash[sourceId]);
      }
    }
    return null;
  }
  addEventSource(sourceInput) {
    let state = this.getCurrentData();
    if (sourceInput instanceof EventSourceImpl) {
      if (!state.eventSources[sourceInput.internalEventSource.sourceId]) {
        this.dispatch({
          type: "ADD_EVENT_SOURCES",
          sources: [sourceInput.internalEventSource]
        });
      }
      return sourceInput;
    }
    let eventSource = parseEventSource(sourceInput, state);
    if (eventSource) {
      this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [eventSource] });
      return new EventSourceImpl(state, eventSource);
    }
    return null;
  }
  removeAllEventSources() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }
  refetchEvents() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: true });
  }
  // Scroll
  // -----------------------------------------------------------------------------------------------------------------
  scrollToTime(timeInput) {
    let time = createDuration(timeInput);
    if (time) {
      this.trigger("_timeScrollRequest", time);
    }
  }
  // Button State
  // -----------------------------------------------------------------------------------------------------------------
  getButtonState() {
    const currentData = this.getCurrentData();
    const { toolbarProps } = currentData;
    const options = currentData.calendarOptions;
    const buttonConfigs = options.buttons || {};
    const viewSpecs = currentData.viewSpecs;
    const currentUnit = currentData.viewSpec.singleUnit;
    const currentHintOrdinal = [
      currentUnit ? getSingleUnitText(currentUnit, options) : "",
      currentUnit
    ];
    const buttonState = {
      today: {
        text: options.todayText,
        hint: formatWithOrdinals(options.todayHint, currentHintOrdinal, options.todayText),
        isDisabled: !toolbarProps.isTodayEnabled
      },
      prev: {
        text: options.prevText,
        hint: formatWithOrdinals(options.prevHint, currentHintOrdinal, options.prevText),
        isDisabled: !toolbarProps.isPrevEnabled
      },
      next: {
        text: options.nextText,
        hint: formatWithOrdinals(options.nextHint, currentHintOrdinal, options.nextText),
        isDisabled: !toolbarProps.isNextEnabled
      },
      prevYear: {
        text: options.prevYearText,
        hint: formatWithOrdinals(options.prevHint, [options.yearText, "year"], options.prevYearText),
        isDisabled: false
      },
      nextYear: {
        text: options.prevYearText,
        hint: formatWithOrdinals(options.nextHint, [options.yearText, "year"], options.nextYearText),
        isDisabled: false
      }
    };
    for (const viewSpecName in viewSpecs) {
      const viewSpec = viewSpecs[viewSpecName];
      const { singleUnit } = viewSpec;
      const buttonTextKey = viewSpec.optionDefaults.buttonTextKey;
      const buttonText = buttonConfigs[viewSpecName]?.text || (buttonTextKey ? options[buttonTextKey] : "") || (singleUnit ? getSingleUnitText(singleUnit, options) : "") || viewSpecName;
      const buttonHint = formatWithOrdinals(
        options.viewHint,
        [buttonText, viewSpecName],
        // ordinal arguments
        buttonText
      );
      buttonState[viewSpecName] = {
        text: buttonText,
        hint: buttonHint
      };
    }
    return buttonState;
  }
};
function getSingleUnitText(singleUnit, options) {
  return options[singleUnit + "TextLong"] || options[singleUnit + "Text"];
}
var CalendarMediaRoot = class extends C {
  constructor() {
    super(...arguments);
    this.state = {
      forPrint: false
    };
    this.handleBeforePrint = () => {
      flushSyncWithSizeBatching(() => {
        this.setState({ forPrint: true });
      });
    };
    this.handleAfterPrint = () => {
      this.setState({ forPrint: false });
    };
  }
  render() {
    return this.props?.children(this.state.forPrint);
  }
  componentDidMount() {
    const { props } = this;
    const { emitter } = props;
    emitter.on("_beforeprint", this.handleBeforePrint);
    emitter.on("_afterprint", this.handleAfterPrint);
  }
  componentWillUnmount() {
    const { props } = this;
    const { emitter } = props;
    emitter.off("_beforeprint", this.handleBeforePrint);
    emitter.off("_afterprint", this.handleAfterPrint);
  }
};
function computeRootClassName(options, forPrint) {
  let borderlessX = options.borderlessX ?? options.borderless;
  let borderlessTop = options.borderlessTop ?? options.borderless;
  let borderlessBottom = options.borderlessBottom ?? options.borderless;
  const calendarDisplayData = {
    borderlessX: Boolean(borderlessX),
    borderlessTop: Boolean(borderlessTop),
    borderlessBottom: Boolean(borderlessBottom)
  };
  return joinClassNames(generateClassName(options.class, calendarDisplayData), generateClassName(options.className, calendarDisplayData), classNames.borderBoxRoot, classNames.isolate, classNames.flexCol, forPrint ? classNames.calendarPrintRoot : classNames.calendarScreenRoot);
}
var ButtonIcon = class extends BaseComponent {
  render() {
    const { contentGenerator, className } = this.props;
    if (contentGenerator) {
      return u2(ContentContainer, { tag: "span", style: { display: "contents" }, attrs: { "aria-hidden": true }, renderProps: {}, generatorName: void 0, customGenerator: contentGenerator });
    }
    if (className !== void 0) {
      return u2("span", { "aria-hidden": true, className });
    }
  }
};
var ToolbarSection = class extends BaseComponent {
  render() {
    let { props } = this;
    let { options } = this.context;
    let children = props.widgetGroups.map((widgetGroup) => this.renderWidgetGroup(widgetGroup));
    return k("div", {
      className: generateClassName(options.toolbarSectionClass, { name: props.name })
    }, ...children);
  }
  renderWidgetGroup(widgetGroup) {
    let { props, context } = this;
    let { options } = context;
    let children = [];
    let isOnlyButtons = true;
    let isOnlyView = true;
    for (const widget of widgetGroup) {
      const { name, isView } = widget;
      if (name === "title") {
        isOnlyButtons = false;
      } else if (!isView) {
        isOnlyView = false;
      }
    }
    for (let widget of widgetGroup) {
      let { name, customElement, buttonHint } = widget;
      if (name === "title") {
        children.push(u2("div", { role: "heading", "aria-level": options.headingLevel, id: props.titleId, className: joinClassNames(options.toolbarTitleClass), children: props.title }));
      } else if (customElement) {
        children.push(u2(ContentContainer, { tag: "span", style: { display: "contents" }, renderProps: {}, generatorName: void 0, customGenerator: customElement }));
      } else {
        let isSelected = name === props.selectedButton;
        let isDisabled = !props.isTodayEnabled && name === "today" || !props.isPrevEnabled && name === "prev" || !props.isNextEnabled && name === "next";
        let buttonDisplay = widget.buttonDisplay ?? options.buttonDisplay;
        if (buttonDisplay === "auto") {
          buttonDisplay = widget.buttonIconContent || widget.buttonIconClass ? "icon" : "text";
        }
        let iconNode;
        if (buttonDisplay !== "text") {
          iconNode = u2(ButtonIcon, { className: widget.buttonIconClass, contentGenerator: widget.buttonIconContent });
        }
        let inGroup = widgetGroup.length > 1 && isOnlyButtons;
        let buttonGroup = inGroup ? { hasSelection: isOnlyView } : null;
        let renderProps = {
          name,
          text: widget.buttonText,
          isPrimary: widget.buttonIsPrimary,
          isSelected,
          isDisabled,
          isIconOnly: buttonDisplay === "icon",
          buttonGroup
        };
        children.push(u2(ContentContainer, { tag: "button", attrs: {
          type: "button",
          disabled: isDisabled,
          ...isOnlyButtons && isOnlyView ? { "role": "tab", "aria-selected": isSelected } : { "aria-pressed": isSelected },
          "aria-label": typeof buttonHint === "function" ? buttonHint(props.navUnit) : buttonHint,
          onClick: widget.buttonClick
        }, className: joinClassNames(generateClassName(options.buttonClass, renderProps), !isDisabled && classNames.cursorPointer, inGroup && joinClassNames(isSelected ? classNames.z1 : classNames.z0, classNames.focusZ2)), renderProps, generatorName: void 0, classNameGenerator: widget.buttonClass, didMount: widget.buttonDidMount, willUnmount: widget.buttonWillUnmount, children: () => buttonDisplay === "text" ? widget.buttonText : buttonDisplay === "icon" ? iconNode : buttonDisplay === "icon-text" ? u2(S, { children: [iconNode, widget.buttonText] }) : u2(S, { children: [widget.buttonText, iconNode] }) }));
      }
    }
    if (children.length > 1) {
      return k("div", {
        role: isOnlyButtons && isOnlyView ? "tablist" : void 0,
        "aria-label": isOnlyButtons && isOnlyView ? options.viewChangeHint : void 0,
        className: joinClassNames(generateClassName(options.buttonGroupClass, { hasSelection: isOnlyView }), classNames.isolate)
      }, ...children);
    }
    return children[0];
  }
};
var Toolbar = class extends BaseComponent {
  render() {
    let { props } = this;
    let options = this.context.options;
    let { sectionWidgets } = props.model;
    const { borderlessX, borderlessTop, borderlessBottom } = computeViewBorderless(options);
    const toolbarClassOption = props.isHeader ? options.headerToolbarClass : options.footerToolbarClass;
    return u2("div", { className: joinClassNames(generateClassName(toolbarClassOption, { borderlessX, borderlessTop, borderlessBottom }), generateClassName(options.toolbarClass, { borderlessX, borderlessTop, borderlessBottom })), children: [this.renderSection("start", sectionWidgets.start), this.renderSection("center", sectionWidgets.center), this.renderSection("end", sectionWidgets.end)] });
  }
  renderSection(name, widgetGroups) {
    let { props } = this;
    return u2(ToolbarSection, { name, widgetGroups, title: props.title, titleId: props.titleId, navUnit: props.navUnit, selectedButton: props.selectedButton, isTodayEnabled: props.isTodayEnabled, isPrevEnabled: props.isPrevEnabled, isNextEnabled: props.isNextEnabled }, name);
  }
};
var EventClicking = class extends Interaction {
  constructor(settings) {
    super(settings);
    this.handleSegClick = (ev, segEl) => {
      let { component } = this;
      let { context } = component;
      let eventRange = getElEventRange(segEl);
      if (eventRange && // might be the <div> surrounding the more link
      component.isValidSegDownEl(ev.target)) {
        context.emitter.trigger("eventClick", {
          el: segEl,
          event: new EventImpl(component.context, eventRange.def, eventRange.instance),
          jsEvent: ev,
          // Is this always a mouse event? See #4655
          view: context.viewApi
        });
      }
    };
    this.destroy = listenBySelector(
      settings.el,
      "click",
      `.${classNames.internalEvent}`,
      // on both fg and bg events
      this.handleSegClick
    );
  }
};
var EventHovering = class extends Interaction {
  constructor(settings) {
    super(settings);
    this.handleEventElRemove = (el) => {
      if (el === this.currentSegEl) {
        this.handleSegLeave(null, this.currentSegEl);
      }
    };
    this.handleSegEnter = (ev, segEl) => {
      if (getElEventRange(segEl)) {
        this.currentSegEl = segEl;
        this.triggerEvent("eventMouseEnter", ev, segEl);
      }
    };
    this.handleSegLeave = (ev, segEl) => {
      if (this.currentSegEl) {
        this.currentSegEl = null;
        this.triggerEvent("eventMouseLeave", ev, segEl);
      }
    };
    this.removeHoverListeners = listenToHoverBySelector(
      settings.el,
      `.${classNames.internalEvent}`,
      // on both fg and bg events
      this.handleSegEnter,
      this.handleSegLeave
    );
  }
  destroy() {
    this.removeHoverListeners();
  }
  triggerEvent(publicEvName, ev, segEl) {
    let { component } = this;
    let { context } = component;
    let eventRange = getElEventRange(segEl);
    if (!ev || component.isValidSegDownEl(ev.target)) {
      context.emitter.trigger(publicEvName, {
        el: segEl,
        event: new EventImpl(context, eventRange.def, eventRange.instance),
        jsEvent: ev,
        // Is this always a mouse event? See #4655
        view: context.viewApi
      });
    }
  }
};
var CalendarInner = class extends PureComponent {
  constructor() {
    super(...arguments);
    this.buildViewContext = memoize2(buildViewContext);
    this.buildViewPropTransformers = memoize2(buildViewPropTransformers);
    this.interactionsStore = {};
    this.calendarInteractions = [];
    this.registerInteractiveComponent = (component, settingsInput) => {
      let settings = parseInteractionSettings(component, settingsInput);
      let DEFAULT_INTERACTIONS = [
        EventClicking,
        EventHovering
      ];
      let interactionClasses = DEFAULT_INTERACTIONS;
      if (!settingsInput.disableHits) {
        interactionClasses = interactionClasses.concat(this.props.pluginHooks.componentInteractions);
      }
      let interactions = interactionClasses.map((TheInteractionClass) => new TheInteractionClass(settings));
      this.interactionsStore[component.uid] = interactions;
      interactionSettingsStore[component.uid] = settings;
    };
    this.unregisterInteractiveComponent = (component) => {
      let listeners = this.interactionsStore[component.uid];
      if (listeners) {
        for (let listener of listeners) {
          listener.destroy();
        }
        delete this.interactionsStore[component.uid];
      }
      delete interactionSettingsStore[component.uid];
    };
  }
  get viewTitleId() {
    return this.props.baseId + "title";
  }
  render() {
    const { props } = this;
    let { toolbarConfig, options } = props;
    let viewHeight;
    let viewHeightLiquid = false;
    let viewAspectRatio;
    if (props.forPrint || getIsHeightAuto(options)) ;
    else if (options.height != null) {
      viewHeightLiquid = true;
    } else if (options.contentHeight != null) {
      viewHeight = options.contentHeight;
    } else {
      viewAspectRatio = Math.max(options.aspectRatio, 0.5);
    }
    let viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.nowManager, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, props.baseId, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
    return u2(ViewContextType.Provider, { value: viewContext, children: [toolbarConfig.header && u2(Toolbar, { model: toolbarConfig.header, isHeader: true, titleId: this.viewTitleId, ...props.toolbarProps }), u2("div", { className: joinClassNames(
      classNames.flexCol,
      classNames.rel,
      // prevents browsers' "scroll anchoring behavior", which cause scroll thrashing
      // when clicking "Next" for month-view, because rows would flex-grow while other rows
      // temporarily removed. This behavior probably universally unhelpful for our uses,
      // esp with virtualization, but maybe in future put on more specific row-based parents
      classNames.overflowAnchorNone,
      // workaround for Safari pushing content area extremely wide after returning from
      // print-view. probably a good idea regardless, to circumvent 'auto' dimentions
      classNames.minHeight0,
      viewHeightLiquid && classNames.liquid
    ), style: {
      height: viewHeight,
      aspectRatio: viewAspectRatio != null ? String(viewAspectRatio) : void 0
    }, children: [this.renderView(joinClassNames((viewHeightLiquid || viewHeight) && classNames.liquid, viewAspectRatio != null && classNames.fill, classNames.internalView)), this.buildAppendContent()] }), toolbarConfig.footer && u2(Toolbar, { model: toolbarConfig.footer, isHeader: false, ...props.toolbarProps })] });
  }
  renderView(className) {
    const { props } = this;
    const { pluginHooks, viewSpec, toolbarConfig, toolbarProps } = props;
    let viewProps = {
      className,
      dateProfile: props.dateProfile,
      businessHours: props.businessHours,
      eventStore: props.renderableEventStore,
      // !
      eventUiBases: props.eventUiBases,
      dateSelection: props.dateSelection,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      forPrint: props.forPrint,
      labelId: toolbarConfig.header && toolbarConfig.header.hasTitle ? this.viewTitleId : void 0,
      labelStr: toolbarConfig.header && toolbarConfig.header.hasTitle ? void 0 : toolbarProps.title
    };
    let transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);
    let contentProps = {
      ...props,
      toolbarProps,
      forPrint: props.forPrint
    };
    for (let transformer of transformers) {
      Object.assign(viewProps, transformer.transform(viewProps, contentProps));
    }
    let ViewComponent = viewSpec.component;
    return u2(ViewComponent, { ...viewProps });
  }
  buildAppendContent() {
    const { props } = this;
    return u2(S, { children: props.pluginHooks.viewContainerAppends.map((buildAppendContent, i3) => u2(S, { children: buildAppendContent(props) }, i3)) });
  }
  // BE AWARE React StrictMode might execute this twice
  componentDidMount() {
    const { props } = this;
    this.calendarInteractions = props.pluginHooks.calendarInteractions.map((CalendarInteractionClass) => new CalendarInteractionClass(props));
    let { propSetHandlers } = props.pluginHooks;
    for (let propName in propSetHandlers) {
      propSetHandlers[propName](props[propName], props);
    }
    for (let callback of props.pluginHooks.contextInit) {
      callback(props);
    }
  }
  componentDidUpdate(prevProps) {
    const { props } = this;
    let { propSetHandlers } = props.pluginHooks;
    for (let propName in propSetHandlers) {
      if (props[propName] !== prevProps[propName]) {
        propSetHandlers[propName](props[propName], props);
      }
    }
  }
  // BE AWARE React StrictMode might execute this twice
  componentWillUnmount() {
    const { props } = this;
    for (let interaction of this.calendarInteractions) {
      interaction.destroy();
    }
    this.calendarInteractions = [];
    props.emitter.trigger("_unmount");
  }
};
function buildViewPropTransformers(theClasses) {
  return theClasses.map((TheClass) => new TheClass());
}

// node_modules/fullcalendar/chunks/bcb7abc1.js
var Calendar = class extends CalendarApiImpl {
  constructor(el, optionOverrides = {}) {
    super();
    this.baseId = `fc:${guid()}:`;
    this.isRendering = false;
    this.isRendered = false;
    this.customContentRenderId = 0;
    this.currentClassName = "";
    this.currentColorScheme = "";
    this.handleDataChange = (data, actions) => {
      this.currentData = data;
      let renderImmediate = false;
      for (const action of actions) {
        if (action.type === "SET_EVENT_DRAG" || action.type === "UNSET_EVENT_DRAG" || action.type === "SET_EVENT_RESIZE" || action.type === "UNSET_EVENT_RESIZE" || // could happen as a result of a drag or resize and must be part of same sync pipeline
        action.type === "MERGE_EVENTS") {
          renderImmediate = true;
          break;
        }
      }
      this.renderRunner.request(renderImmediate ? void 0 : data.calendarOptions.rerenderDelay);
    };
    this.handleRenderRequest = () => {
      if (this.isRendering) {
        let { currentData } = this;
        this.isRendered = true;
        bn(() => {
          this.vdomRoot.render(u2(S, { children: u2(RenderId.Provider, { value: this.customContentRenderId, children: u2(CalendarMediaRoot, { emitter: currentData.emitter, children: (forPrint) => {
            const options = currentData.calendarOptions;
            const isRtl = options.direction === "rtl";
            const className = computeRootClassName(options, forPrint);
            this.setIsRtl(isRtl);
            this.setClassName(className);
            this.setHeight(options.height);
            this.setColorScheme(options.colorScheme || "");
            return u2(CalendarInner, { ...currentData, forPrint, baseId: this.baseId });
          } }) }) }));
        });
      } else if (this.isRendered) {
        this.isRendered = false;
        this.vdomRoot.unmount();
        this.setIsRtl(false);
        this.setClassName("");
        this.setHeight("");
        this.setColorScheme("");
      }
    };
    this.el = el;
    this.vdomRoot = createRoot(el);
    this.renderRunner = new DelayedRunner(this.handleRenderRequest);
    this.dataManager = new CalendarDataManager({
      calendarApi: this,
      onDataChange: this.handleDataChange
    });
    this.currentData = this.dataManager.update(optionOverrides);
  }
  render() {
    let wasRendering = this.isRendering;
    if (!wasRendering) {
      this.isRendering = true;
    } else {
      this.customContentRenderId += 1;
    }
    this.renderRunner.request();
  }
  destroy() {
    if (this.isRendering) {
      this.isRendering = false;
      this.renderRunner.request();
    }
    this.dataManager.destroy();
  }
  batchRendering(func) {
    this.renderRunner.pause("batchRendering");
    func();
    this.renderRunner.resume("batchRendering");
  }
  pauseRendering() {
    this.renderRunner.pause("pauseRendering");
  }
  resumeRendering() {
    this.renderRunner.resume("pauseRendering", true);
  }
  resetOptions(optionOverrides, changedOptionNames) {
    this.currentDataManager.resetOptions(optionOverrides, changedOptionNames);
  }
  setClassName(className) {
    if (className !== this.currentClassName) {
      let { classList } = this.el;
      for (let singleClassName of this.currentClassName.split(" ")) {
        if (singleClassName) {
          classList.remove(singleClassName);
        }
      }
      for (let singleClassName of className.split(" ")) {
        if (singleClassName) {
          classList.add(singleClassName);
        }
      }
      this.currentClassName = className;
    }
  }
  setHeight(height) {
    applyStyleProp(this.el, "height", height);
  }
  setColorScheme(colorScheme) {
    if (colorScheme !== this.currentColorScheme) {
      if (colorScheme) {
        this.el.dataset.colorScheme = colorScheme;
      } else {
        delete this.el.dataset.colorScheme;
      }
      this.currentColorScheme = colorScheme;
    }
  }
  setIsRtl(isRtl) {
    if (isRtl) {
      this.el.dir = "rtl";
    } else {
      this.el.removeAttribute("dir");
    }
  }
};

// node_modules/fullcalendar/chunks/72e3cc3d.js
function intersectRects(rect1, rect2) {
  let res = {
    left: Math.max(rect1.left, rect2.left),
    right: Math.min(rect1.right, rect2.right),
    top: Math.max(rect1.top, rect2.top),
    bottom: Math.min(rect1.bottom, rect2.bottom)
  };
  if (res.left < res.right && res.top < res.bottom) {
    return res;
  }
  return false;
}
function computeClippedClientRect(el) {
  let clippingParents = getClippingParents(el);
  let rect = el.getBoundingClientRect();
  for (let clippingParent of clippingParents) {
    let intersection = intersectRects(rect, clippingParent.getBoundingClientRect());
    if (intersection) {
      rect = intersection;
    } else {
      return null;
    }
  }
  return rect;
}
function getClippingParents(el) {
  let parents = [];
  while (el instanceof HTMLElement) {
    let computedStyle = window.getComputedStyle(el);
    if (computedStyle.position === "fixed") {
      break;
    }
    if (/(auto|scroll)/.test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
      parents.push(el);
    }
    el = el.parentNode;
  }
  return parents;
}

// node_modules/fullcalendar/chunks/20c8a1fa.js
var Slicer = class {
  constructor() {
    this.sliceBusinessHours = memoize2(this._sliceBusinessHours);
    this.sliceDateSelection = memoize2(this._sliceDateSpan);
    this.sliceEventStore = memoize2(this._sliceEventStore);
    this.sliceEventDrag = memoize2(this._sliceInteraction);
    this.sliceEventResize = memoize2(this._sliceInteraction);
    this.forceDayIfListItem = false;
  }
  intersectDateSpan(dateSpan, activeRange, ...extraArgs) {
    const activeDateSpanRange = intersectRanges(dateSpan.range, activeRange);
    if (activeDateSpanRange) {
      const slicedDateSpan = { ...dateSpan, range: activeDateSpanRange };
      if (activeDateSpanRange.start.valueOf() !== dateSpan.range.start.valueOf()) {
        delete slicedDateSpan.instantStartMs;
      }
      if (activeDateSpanRange.end.valueOf() !== dateSpan.range.end.valueOf()) {
        delete slicedDateSpan.instantEndMs;
      }
      return slicedDateSpan;
    }
    return null;
  }
  sliceDateSpan(dateSpan, ...extraArgs) {
    return this.sliceRange(dateSpan.range, ...extraArgs);
  }
  sliceProps(props, dateProfile, nextDayThreshold, context, ...extraArgs) {
    let { eventUiBases } = props;
    let eventSegs = this.sliceEventStore(props.eventStore, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs);
    return {
      dateSelectionSegs: this.sliceDateSelection(props.dateSelection, dateProfile, nextDayThreshold, eventUiBases, context, ...extraArgs),
      businessHourSegs: this.sliceBusinessHours(props.businessHours, dateProfile, nextDayThreshold, context, ...extraArgs),
      fgEventSegs: eventSegs.fg,
      bgEventSegs: eventSegs.bg,
      eventDrag: this.sliceEventDrag(props.eventDrag, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs),
      eventResize: this.sliceEventResize(props.eventResize, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs),
      eventSelection: props.eventSelection
    };
  }
  sliceNowDate(date, dateProfile, nextDayThreshold, context, ...extraArgs) {
    return this._sliceDateSpan(
      { range: { start: date, end: addMs(date, 1) }, allDay: false },
      // add 1 ms, protect against null range
      dateProfile,
      nextDayThreshold,
      {},
      context,
      ...extraArgs
    );
  }
  _sliceBusinessHours(businessHours, dateProfile, nextDayThreshold, context, ...extraArgs) {
    if (!businessHours) {
      return [];
    }
    return this._sliceEventStore(expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context), {}, dateProfile, nextDayThreshold, ...extraArgs).bg;
  }
  _sliceEventStore(eventStore, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs) {
    if (eventStore) {
      let rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
      return {
        bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
        fg: this.sliceEventRanges(rangeRes.fg, extraArgs)
      };
    }
    return { bg: [], fg: [] };
  }
  _sliceInteraction(interaction, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs) {
    if (!interaction) {
      return null;
    }
    let rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
    return {
      segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
      affectedInstances: interaction.affectedEvents.instances,
      isEvent: interaction.isEvent
    };
  }
  _sliceDateSpan(dateSpan, dateProfile, nextDayThreshold, eventUiBases, context, ...extraArgs) {
    if (!dateSpan) {
      return [];
    }
    let activeRange = computeActiveRange(dateProfile, Boolean(nextDayThreshold));
    let slicedDateSpan = this.intersectDateSpan(dateSpan, activeRange, ...extraArgs);
    if (slicedDateSpan) {
      dateSpan = slicedDateSpan;
      let eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
      let segs = this.sliceDateSpan(dateSpan, ...extraArgs);
      for (let seg of segs) {
        seg.eventRange = eventRange;
      }
      return segs;
    }
    return [];
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRanges(eventRanges, extraArgs) {
    let segs = [];
    for (let eventRange of eventRanges) {
      segs.push(...this.sliceEventRange(eventRange, extraArgs));
    }
    return segs;
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRange(eventRange, extraArgs) {
    let dateRange = eventRange.range;
    if (this.forceDayIfListItem && eventRange.ui.display === "list-item") {
      dateRange = {
        start: dateRange.start,
        end: addDays3(dateRange.start, 1)
      };
    }
    let segs = this.sliceRange(dateRange, ...extraArgs);
    for (let seg of segs) {
      seg.eventRange = eventRange;
      seg.isStart = eventRange.isStart && seg.isStart;
      seg.isEnd = eventRange.isEnd && seg.isEnd;
    }
    return segs;
  }
};
function computeActiveRange(dateProfile, isComponentAllDay) {
  let range = dateProfile.activeRange;
  if (isComponentAllDay) {
    return range;
  }
  return {
    start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
    end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 864e5)
    // 864e5 = ms in a day
  };
}
var DayTableModel = class {
  constructor(daySeries, breakOnWeeks, dateEnv, majorUnit = "", activeRange) {
    this.daySeries = daySeries;
    this.dateEnv = dateEnv;
    this.majorUnit = majorUnit;
    this.activeRange = activeRange;
    let { dates } = daySeries;
    let daysPerRow;
    let firstDay;
    let rowCount;
    if (breakOnWeeks) {
      firstDay = dates[0].getUTCDay();
      for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow += 1) {
        if (dates[daysPerRow].getUTCDay() === firstDay) {
          break;
        }
      }
      rowCount = Math.ceil(dates.length / daysPerRow);
    } else {
      rowCount = 1;
      daysPerRow = dates.length;
    }
    this.rowCount = rowCount;
    this.colCount = daysPerRow;
    this.cellRows = this.buildCells();
    this.headerDates = this.buildHeaderDates();
  }
  buildCells() {
    let rows = [];
    for (let row = 0; row < this.rowCount; row += 1) {
      let cells = [];
      for (let col = 0; col < this.colCount; col += 1) {
        cells.push(this.buildCell(row, col));
      }
      rows.push(cells);
    }
    return rows;
  }
  buildCell(row, col) {
    let date = this.daySeries.dates[row * this.colCount + col];
    return {
      key: date.toISOString(),
      date,
      isMajor: this.cellIsMajor(date),
      isDisabled: this.activeRange === null || this.activeRange !== void 0 && !rangeContainsMarker(this.activeRange, date)
    };
  }
  cellIsMajor(dateMarker) {
    return this.majorUnit ? isMajorUnit(dateMarker, this.majorUnit, this.dateEnv) : false;
  }
  buildHeaderDates() {
    let dates = [];
    for (let col = 0; col < this.colCount; col += 1) {
      dates.push(this.cellRows[0][col].date);
    }
    return dates;
  }
};
function buildDayGridRanges(seriesRange, daysPerRow) {
  let ranges = [];
  if (seriesRange) {
    const { start, end } = seriesRange;
    let index2 = start;
    while (index2 < end) {
      let row = Math.floor(index2 / daysPerRow);
      let nextIndex = Math.min((row + 1) * daysPerRow, end);
      ranges.push({
        row,
        start: index2 % daysPerRow,
        end: (nextIndex - 1) % daysPerRow + 1,
        isStart: seriesRange.isStart && index2 === start,
        isEnd: seriesRange.isEnd && nextIndex === end
      });
      index2 = nextIndex;
    }
  }
  return ranges;
}
var DayTableSlicer = class extends Slicer {
  constructor() {
    super(...arguments);
    this.forceDayIfListItem = true;
  }
  sliceRange(dateRange, dayTableModel) {
    return buildDayGridRanges(dayTableModel.daySeries.sliceRange(dateRange), dayTableModel.colCount);
  }
};
var firstSunday = /* @__PURE__ */ new Date(2592e5);
function buildDateRowConfigs(dates, datesRepDistinctDays, dateProfile, todayRange, dayHeaderFormat, context) {
  const rowConfig = buildDateRowConfig(dates, datesRepDistinctDays, dateProfile, todayRange, dayHeaderFormat, context);
  const majorUnit = computeMajorUnit(dateProfile, context.dateEnv);
  if (datesRepDistinctDays && majorUnit !== "day") {
    for (const dataConfig of rowConfig.dataConfigs) {
      if (isMajorUnit(dataConfig.dateMarker, majorUnit, context.dateEnv)) {
        dataConfig.renderProps.isMajor = true;
      }
    }
  }
  return [rowConfig];
}
function buildDateRowConfig(dateMarkers, datesRepDistinctDays, dateProfile, todayRange, dayHeaderFormat, context, colSpan, isMajorMod, totalDateCnt) {
  return {
    isDateRow: true,
    renderConfig: buildDateRenderConfig(dayHeaderFormat, datesRepDistinctDays, context),
    dataConfigs: buildDateDataConfigs(dateMarkers, datesRepDistinctDays, dateProfile, todayRange, dayHeaderFormat, context, colSpan, void 0, void 0, void 0, void 0, isMajorMod, totalDateCnt)
  };
}
function buildDateRenderConfig(dayHeaderFormat, datesRepDistinctDays, context) {
  const { options } = context;
  return {
    generatorName: "dayHeaderContent",
    customGenerator: options.dayHeaderContent,
    classNameGenerator: options.dayHeaderClass,
    innerClassNameGenerator: options.dayHeaderInnerClass,
    didMount: options.dayHeaderDidMount,
    willUnmount: options.dayHeaderWillUnmount,
    align: options.dayHeaderAlign,
    sticky: options._dayHeaderSticky,
    dayHeaderFormat,
    datesRepDistinctDays
  };
}
var dowDates = [];
for (let dow = 0; dow < 7; dow++) {
  dowDates.push(addDays3(/* @__PURE__ */ new Date(2592e5), dow));
}
function buildDateDataConfigs(dateMarkers, datesRepDistinctDays, dateProfile, todayRange, dayHeaderFormat, context, colSpan = 1, keyPrefix = "", extraRenderProps = {}, extraAttrs = {}, className = "", isMajorMod, totalDateCnt = dateMarkers.length) {
  const { dateEnv, viewApi, options } = context;
  return datesRepDistinctDays ? dateMarkers.map((dateMarker, i3) => {
    const dateMeta = getDateMeta(dateMarker, dateEnv, dateProfile, todayRange);
    const isMajor = isMajorMod != null && !(i3 % isMajorMod);
    const hasNavLink = options.navLinks && !dateMeta.isDisabled && totalDateCnt > 1;
    const renderProps = {
      ...dateMeta,
      ...extraRenderProps,
      isMajor,
      isSticky: false,
      // HACK. gets overridden
      inPopover: false,
      hasNavLink,
      view: viewApi
    };
    const fullDateStr = buildDateStr(context, dateMarker);
    return {
      key: keyPrefix + dateMarker.toUTCString(),
      dateMarker,
      renderProps,
      attrs: {
        ...dateMeta.isToday ? { "aria-current": "date" } : {},
        // TODO: assign undefined for nonexistent
        "data-date": formatDayString(dateMarker),
        ...extraAttrs
      },
      // navlink is already labeled. otherwise, a11yText read instead
      innerAttrs: hasNavLink ? buildNavLinkAttrs(
        context,
        dateMarker,
        void 0,
        fullDateStr,
        /* isTabbable = */
        true,
        /* omitHint = */
        true
      ) : void 0,
      a11yText: hasNavLink ? void 0 : fullDateStr,
      colSpan,
      hasNavLink,
      className
    };
  }) : dateMarkers.map((dateMarker, i3) => {
    const dow = dateMarker.getUTCDay();
    const normDate = addDays3(firstSunday, dow);
    const dateMeta = {
      date: dateEnv.toDate(dateMarker),
      dow,
      isDisabled: false,
      isFuture: false,
      isPast: false,
      isToday: false,
      isOther: false
    };
    const isMajor = isMajorMod != null && !(i3 % isMajorMod);
    const renderProps = {
      ...dateMeta,
      date: dowDates[dow],
      isMajor,
      isSticky: false,
      // HACK. gets overridden
      inPopover: false,
      hasNavLink: false,
      view: viewApi,
      ...extraRenderProps
    };
    const fullWeekDayStr = joinDateTimeFormatParts(dateEnv.formatToParts(normDate, WEEKDAY_ONLY_FORMAT));
    return {
      key: keyPrefix + String(dow),
      dateMarker,
      renderProps,
      attrs: extraAttrs,
      // NOT a navlink
      a11yText: fullWeekDayStr,
      colSpan,
      className
    };
  });
}
var RefMap = class {
  constructor(masterCallback, ignoreDeletes = false) {
    this.masterCallback = masterCallback;
    this.ignoreDeletes = ignoreDeletes;
    this.rev = "";
    this.current = /* @__PURE__ */ new Map();
    this.callbacks = /* @__PURE__ */ new Map();
    this.handleValue = (val, key) => {
      let { current, callbacks } = this;
      let priorExists = current.has(key);
      let priorVal = priorExists ? current.get(key) : null;
      let anyChange = false;
      if (val === null) {
        if (priorExists && !this.ignoreDeletes) {
          current.delete(key);
          callbacks.delete(key);
          anyChange = true;
        }
      } else {
        anyChange = priorVal !== val;
        current.set(key, val);
      }
      if (anyChange) {
        this.rev = guid();
        if (this.masterCallback) {
          this.masterCallback(val, key, priorVal);
        }
      }
    };
  }
  createRef(key) {
    let refCallback = this.callbacks.get(key);
    if (!refCallback) {
      refCallback = (val) => {
        this.handleValue(val, key);
      };
      this.callbacks.set(key, refCallback);
    }
    return refCallback;
  }
};
var Ruler = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.elRef = M();
  }
  render() {
    return u2("div", { ref: this.elRef });
  }
  componentDidMount() {
    this._isUnmounting = false;
    const { props } = this;
    const el = this.elRef.current;
    this.disconnectWidth = watchWidth(el, (width) => {
      if (this._isUnmounting)
        return;
      setRef(props.widthRef, width);
    });
  }
  componentWillUnmount() {
    this._isUnmounting = true;
    this.disconnectWidth();
    const { props } = this;
    if (props.widthRef) {
      setRef(props.widthRef, null);
    }
  }
};
function getDayGridSegKey(seg) {
  return `${seg.eventRange.instance.instanceId}:${seg.start}`;
}
function splitSegsByRow(segs, rowCount) {
  const byRow = [];
  for (let row = 0; row < rowCount; row++) {
    byRow[row] = [];
  }
  for (const seg of segs) {
    byRow[seg.row].push(seg);
  }
  return byRow;
}
function splitInteractionByRow(ui, rowCount) {
  const byRow = [];
  if (!ui) {
    for (let row = 0; row < rowCount; row++) {
      byRow[row] = null;
    }
  } else {
    for (let row = 0; row < rowCount; row++) {
      byRow[row] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }
    for (const seg of ui.segs) {
      byRow[seg.row].segs.push(seg);
    }
  }
  return byRow;
}
var BgEvent = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.buildPublicEvent = memoize2((context, eventDef, eventInstance) => new EventImpl(context, eventDef, eventInstance));
    this.handleEl = (el) => {
      this.el = el;
      if (el) {
        setElEventRange(el, this.props.eventRange);
      }
    };
  }
  render() {
    const { props, context } = this;
    const { eventRange } = props;
    const { options } = context;
    const eventUi = eventRange.ui;
    const eventApi = this.buildPublicEvent(context, eventRange.def, eventRange.instance);
    const subcontentRenderProps = {
      ...props.renderProps,
      // first, so built-in props take precedence
      event: eventApi,
      timeText: "",
      // never display time
      isNarrow: props.isNarrow || false,
      isShort: props.isShort || false
    };
    const renderProps = {
      ...props.renderProps,
      // first, so built-in props take precedence
      event: eventApi,
      view: context.viewApi,
      timeText: "",
      // never display time
      color: eventUi.color || options.backgroundEventColor,
      contrastColor: eventUi.contrastColor,
      isDraggable: false,
      isStartResizable: false,
      isEndResizable: false,
      isMirror: false,
      isStart: props.isStart,
      isEnd: props.isEnd,
      isFirst: false,
      isLast: false,
      isPast: props.isPast,
      isFuture: props.isFuture,
      isToday: props.isToday,
      isSelected: false,
      isDragging: false,
      isResizing: false,
      isInteractive: false,
      level: 0,
      isNarrow: props.isNarrow || false,
      isShort: props.isShort || false,
      timeClass: "",
      // never display time
      titleClass: generateClassName(options.backgroundEventTitleClass, subcontentRenderProps),
      options: { eventOverlap: Boolean(options.eventOverlap) }
    };
    const outerClassName = joinClassNames(eventUi.className, classNames.fill, classNames.internalEvent, classNames.internalBgEvent, props.isVertical ? classNames.flexCol : classNames.flexRow);
    const innerClassName = joinClassNames(generateClassName(options.backgroundEventInnerClass, renderProps), classNames.liquid);
    return u2(ContentContainer, { tag: "div", className: outerClassName, style: {
      "--fc-event-color": renderProps.color,
      "--fc-event-contrast-color": renderProps.contrastColor
    }, defaultGenerator: renderInnerContent2, elRef: this.handleEl, renderProps, generatorName: "backgroundEventContent", customGenerator: options.backgroundEventContent, classNameGenerator: options.backgroundEventClass, didMount: options.backgroundEventDidMount, willUnmount: options.backgroundEventWillUnmount, children: (InnerContent) => u2(InnerContent, { tag: "div", className: innerClassName }) });
  }
  componentDidUpdate(prevProps) {
    if (this.el && this.props.eventRange !== prevProps.eventRange) {
      setElEventRange(this.el, this.props.eventRange);
    }
  }
};
function renderInnerContent2(props) {
  let { title } = props.event;
  return title && u2("div", { className: props.titleClass, children: props.event.title });
}
function renderFill(fillType, options) {
  return u2("div", { className: joinClassNames(fillType === "non-business" ? options.nonBusinessHoursClass : fillType === "highlight" ? options.highlightClass : void 0, classNames.fill) });
}
var COL_BORDER_WIDTH = 1;
var ROW_BORDER_WIDTH = 1;
var SPACE_FROM_VIEWPORT = 10;
var MorePopover = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.getDateMeta = memoize2(getDateMeta);
    this.closeRef = M();
    this.focusStartRef = M();
    this.focusEndRef = M();
    this.handleRootEl = (rootEl) => {
      this.rootEl = rootEl;
      if (rootEl) {
        this.context.registerInteractiveComponent(this, {
          el: rootEl,
          useEventCenter: false
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
    this.handleDocumentMouseDown = (ev) => {
      const target = getEventTargetViaRoot(ev);
      if (!this.rootEl.contains(target)) {
        this.handleClose();
      }
    };
    this.handleDocumentKeyDown = (ev) => {
      if (ev.key === "Escape") {
        this.handleClose();
      }
    };
    this.handleClose = () => {
      let { onClose } = this.props;
      if (onClose) {
        onClose();
      }
    };
  }
  render() {
    let { props, context } = this;
    let { options, dateEnv, viewApi } = context;
    let { startDate, todayRange, dateProfile } = props;
    let dateMeta = this.getDateMeta(startDate, dateEnv, dateProfile, todayRange);
    let textParts = dateEnv.formatToParts(startDate, options.popoverFormat);
    let text = joinDateTimeFormatParts(textParts);
    const dayHeaderRenderProps = {
      ...props.renderProps,
      // first, so built-in props take precedence
      ...dateMeta,
      isMajor: false,
      isNarrow: false,
      isSticky: false,
      inPopover: true,
      level: 0,
      hasNavLink: false,
      text,
      textParts,
      get weekdayText() {
        return findWeekdayText(textParts);
      },
      get dayNumberText() {
        return findDayNumberText(textParts);
      },
      view: viewApi
    };
    const dayCellRenderProps = {
      ...props.renderProps,
      // first, so built-in props take precedence
      ...dateMeta,
      isMajor: false,
      isNarrow: false,
      inPopover: true,
      hasNavLink: false,
      get weekdayText() {
        return findWeekdayText(textParts);
      },
      get dayNumberText() {
        return findDayNumberText(textParts);
      },
      get monthText() {
        return findMonthText(textParts);
      },
      view: viewApi,
      text: "",
      textParts: [],
      options: { businessHours: Boolean(options.businessHours) }
    };
    const fullDateStr = formatDayString(startDate);
    const { dayHeaderAlign } = options;
    const align = typeof dayHeaderAlign === "function" ? dayHeaderAlign({ level: 0, inPopover: true, isNarrow: false }) : dayHeaderAlign;
    const isRtl = computeElIsRtl(props.alignEl);
    return $2(u2("div", {
      "data-date": fullDateStr,
      id: props.id,
      role: "dialog",
      "aria-labelledby": props.titleId,
      className: joinClassNames(options.popoverClass, classNames.flexCol, classNames.popoverZ, classNames.abs, classNames.borderBoxRoot, classNames.internalPopover),
      style: {
        // positioning is mutated directly in updateSize, HOWEVER, we don't want popover to start
        // low on screen because might cause unnecessary scrollbars
        top: 0,
        left: 0
      },
      // HACK because of portal
      dir: isRtl ? "rtl" : void 0,
      "data-color-scheme": options.colorScheme || void 0,
      ref: this.handleRootEl,
      children: [u2("div", { tabIndex: 0, style: { outline: "none" }, ref: this.focusStartRef }), u2("div", { className: joinClassNames(generateClassName(options.dayHeaderClass, dayHeaderRenderProps), classNames.flexCol, classNames.borderlessX, classNames.borderlessTop, align === "center" ? classNames.alignCenter : align === "end" ? classNames.alignEnd : classNames.alignStart), children: [u2("div", { children: u2(ContentContainer, { tag: "div", attrs: {
        id: props.titleId
        // NOTE: more-popover never has nav-links
      }, generatorName: "dayHeaderContent", renderProps: dayHeaderRenderProps, customGenerator: options.dayHeaderContent, defaultGenerator: renderText2, classNameGenerator: options.dayHeaderInnerClass, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }) }), u2(ContentContainer, { tag: "button", attrs: {
        "aria-label": options.closeHint,
        ...createAriaClickAttrs(this.handleClose)
      }, elRef: this.closeRef, className: joinClassNames(options.popoverCloseClass, classNames.flexRow, classNames.cursorPointer), renderProps: {}, customGenerator: options.popoverCloseContent, generatorName: "popoverCloseContent" })] }), u2("div", { className: joinClassNames(generateClassName(options.dayCellClass, dayCellRenderProps), classNames.flexCol, classNames.borderless), children: u2("div", {
        role: "list",
        className: generateClassName(options.dayCellInnerClass, dayCellRenderProps),
        children: props.children
      }) }), u2("div", { tabIndex: 0, style: { outline: "none" }, ref: this.focusEndRef })]
    }), getAppendableRoot(props.alignEl));
  }
  queryHit(isRtl, positionLeft, positionTop, elWidth, elHeight) {
    let { rootEl, props } = this;
    if (positionLeft >= 0 && positionLeft < elWidth && positionTop >= 0 && positionTop < elHeight) {
      return {
        dateProfile: props.dateProfile,
        dateSpan: {
          allDay: !props.forceTimed,
          range: {
            start: props.startDate,
            end: props.endDate
          },
          ...props.dateSpanProps
        },
        getDayEl: () => rootEl,
        rect: {
          left: 0,
          top: 0,
          right: elWidth,
          bottom: elHeight
        },
        layer: 1
        // important when comparing with hits from other components
      };
    }
    return null;
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    this.focusStartRef.current.addEventListener("focus", this.handleClose);
    this.focusEndRef.current.addEventListener("focus", this.handleClose);
    this.closeRef.current.focus({ preventScroll: true });
    this.updateSize();
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    this.focusStartRef.current.removeEventListener("focus", this.handleClose);
    this.focusEndRef.current.removeEventListener("focus", this.handleClose);
  }
  updateSize() {
    let { alignEl, alignParentTop } = this.props;
    let { rootEl: popoverEl } = this;
    const isRtl = computeElIsRtl(alignEl);
    const alignmentRect = computeClippedClientRect(alignEl);
    if (alignmentRect) {
      let popoverDims = popoverEl.getBoundingClientRect();
      let popoverVPTop = alignParentTop ? alignEl.closest(alignParentTop).getBoundingClientRect().top - ROW_BORDER_WIDTH : alignmentRect.top;
      let popoverVPLeft = isRtl ? alignmentRect.right - popoverDims.width : alignmentRect.left;
      popoverVPTop = Math.max(popoverVPTop, SPACE_FROM_VIEWPORT);
      popoverVPLeft = Math.min(popoverVPLeft, document.documentElement.clientWidth - SPACE_FROM_VIEWPORT - popoverDims.width);
      popoverVPLeft = Math.max(popoverVPLeft, SPACE_FROM_VIEWPORT);
      const { offsetParent } = popoverEl;
      let top;
      let left;
      if (!offsetParent || offsetParent === document.body) {
        top = popoverVPTop + window.scrollY;
        left = popoverVPLeft + window.scrollX;
      } else {
        const offsetParentRect = offsetParent.getBoundingClientRect();
        top = popoverVPTop - offsetParentRect.top + offsetParent.scrollTop;
        left = popoverVPLeft - offsetParentRect.left + offsetParent.scrollLeft;
      }
      applyStyle(popoverEl, { top, left });
    }
  }
};
function renderText2(renderProps) {
  return renderProps.text;
}
function computeEarliestStart(segs) {
  return segs.reduce(pickEarliestStart).eventRange.range.start;
}
function computeLatestEnd(segs) {
  return segs.reduce(pickLatestEnd).eventRange.range.end;
}
function pickEarliestStart(r0, r1) {
  return r0.eventRange.range.start < r1.eventRange.range.start ? r0 : r1;
}
function pickLatestEnd(r0, r1) {
  return r0.eventRange.range.end > r1.eventRange.range.end ? r0 : r1;
}
var MoreLinkTrigger = class extends BaseComponent {
  render() {
    const { props, context } = this;
    const { options } = context;
    const renderProps = buildMoreLinkRenderProps(props.num, props.isNarrow, props.isMicro, props.display, props.renderProps, context);
    return u2(ContentContainer, { tag: "div", elRef: props.elRef, className: joinClassNames(generateClassName(props.display === "row" ? options.rowMoreLinkClass : options.columnMoreLinkClass, renderProps), props.className, props.display === "row" ? classNames.flexRow : classNames.flexCol, classNames.internalMoreLink, classNames.cursorPointer), style: props.style, attrs: props.attrs, renderProps, generatorName: "moreLinkContent", customGenerator: options.moreLinkContent, defaultGenerator: renderMoreLinkText, classNameGenerator: options.moreLinkClass, didMount: props.didMount, willUnmount: props.willUnmount, children: (InnerContent) => u2(InnerContent, { tag: "div", className: joinClassNames(generateClassName(options.moreLinkInnerClass, renderProps), generateClassName(props.display === "row" ? options.rowMoreLinkInnerClass : options.columnMoreLinkInnerClass, renderProps), props.display === "row" ? classNames.stickyS : classNames.stickyT) }) });
  }
};
var MoreLinkContainer = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isPopoverOpen: false
    };
    this.handleLinkEl = (linkEl) => {
      this.linkEl = linkEl;
      if (this.props.elRef) {
        setRef(this.props.elRef, linkEl);
      }
    };
    this.handleClick = (ev) => {
      let { props, context } = this;
      let { dateEnv, options } = context;
      let { moreLinkClick } = options;
      let date = computeRange(props).start;
      function buildPublicSeg(seg) {
        let { def, instance, range } = seg.eventRange;
        const start = buildRangeEdgeOutput(range.start, range.instantStartMs, dateEnv);
        const end = buildRangeEdgeOutput(range.end, range.instantEndMs, dateEnv);
        return {
          event: new EventImpl(context, def, instance),
          start: start.date,
          end: end.date,
          isStart: seg.isStart,
          isEnd: seg.isEnd
        };
      }
      if (typeof moreLinkClick === "function") {
        moreLinkClick = moreLinkClick({
          date: dateEnv.toDate(date),
          allDay: Boolean(props.allDayDate),
          allSegs: props.segs.map(buildPublicSeg),
          hiddenSegs: props.hiddenSegs.map(buildPublicSeg),
          jsEvent: ev,
          view: context.viewApi
        });
      }
      if (!moreLinkClick || moreLinkClick === "popover") {
        this.setState({ isPopoverOpen: true });
      } else if (typeof moreLinkClick === "string") {
        context.calendarApi.zoomTo(date, moreLinkClick);
      }
    };
    this.handlePopoverClose = () => {
      if (this.linkEl) {
        this.linkEl.focus();
      }
      this.setState({ isPopoverOpen: false });
    };
  }
  render() {
    const { props, state, context } = this;
    const { options, baseId } = context;
    const moreCnt = props.hiddenSegs.length;
    const range = computeRange(props);
    const popoverId = baseId + "popover-" + range.start.toISOString();
    const renderProps = buildMoreLinkRenderProps(moreCnt, props.isNarrow, props.isMicro, props.display, props.renderProps, context);
    const hint = formatWithOrdinals(options.moreLinkHint, [moreCnt], renderProps.longText);
    return u2(S, { children: [Boolean(moreCnt) && u2(MoreLinkTrigger, { num: moreCnt, display: props.display, isNarrow: props.isNarrow, isMicro: props.isMicro, renderProps: props.renderProps, elRef: this.handleLinkEl, className: props.className, style: props.style, attrs: {
      ...props.attrs,
      ...createAriaClickAttrs(this.handleClick),
      title: hint,
      "role": "button",
      "aria-haspopup": "dialog",
      "aria-expanded": state.isPopoverOpen,
      "aria-controls": state.isPopoverOpen ? popoverId : void 0
    }, didMount: options.moreLinkDidMount, willUnmount: options.moreLinkWillUnmount }), state.isPopoverOpen && u2(MorePopover, { id: popoverId, titleId: popoverId + "-title", startDate: range.start, endDate: range.end, dateProfile: props.dateProfile, todayRange: props.todayRange, dateSpanProps: props.dateSpanProps, renderProps: props.renderProps, alignEl: props.alignElRef ? props.alignElRef.current : this.linkEl, alignParentTop: props.alignParentTop, forceTimed: props.forceTimed, onClose: this.handlePopoverClose, children: props.popoverContent() })] });
  }
};
function renderMoreLinkText(props) {
  return props.text;
}
function buildMoreLinkRenderProps(num, isNarrow, isMicro, display, extraRenderProps, context) {
  const { viewApi, options, calendarApi } = context;
  const numericText = `+${num}`;
  const longText = typeof options.moreLinkText === "function" ? options.moreLinkText.call(calendarApi, num) : `${numericText} ${options.moreLinkText}`;
  return {
    ...extraRenderProps,
    // first, so built-in props take precedence
    num,
    numericText,
    longText,
    text: isMicro || display === "column" ? numericText : longText,
    isNarrow,
    view: viewApi
  };
}
function computeRange(props) {
  if (props.allDayDate) {
    return {
      start: props.allDayDate,
      end: addDays3(props.allDayDate, 1)
    };
  }
  return {
    start: computeEarliestStart(props.hiddenSegs),
    end: computeLatestEnd(props.hiddenSegs)
  };
}
var DEFAULT_TABLE_EVENT_TIME_FORMAT = createFormatter({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: true,
  meridiem: "narrow"
});
function hasListItemDisplay(range, eventRange) {
  let { display } = eventRange.ui;
  return display === "list-item" || display === "auto" && !eventRange.def.allDay && range.end - range.start === 1 && // single-day
  range.isStart && // "
  range.isEnd;
}
var DAY_GRID_NON_BUSINESS_Z_CLASS = classNames.z1;
var DAY_GRID_BG_EVENT_Z_CLASS = classNames.z2;
var DAY_GRID_HIGHLIGHT_Z_CLASS = classNames.z3;
var DAY_GRID_CELL_CONTENT_Z_CLASS = classNames.z4;
var DAY_GRID_EVENT_Z_CLASS = classNames.z5;
var DAY_GRID_INTERACTION_Z_CLASS = classNames.z1000;
var DayGridMoreLink = class extends BaseComponent {
  render() {
    let { props } = this;
    return u2(MoreLinkContainer, { display: "row", className: joinClassNames(props.className, DAY_GRID_CELL_CONTENT_Z_CLASS), isNarrow: props.isNarrow, isMicro: props.isMicro, dateProfile: props.dateProfile, todayRange: props.todayRange, allDayDate: props.allDayDate, segs: props.segs, hiddenSegs: props.hiddenSegs, alignElRef: props.alignElRef, alignParentTop: props.alignParentTop, dateSpanProps: props.dateSpanProps, renderProps: props.renderProps, popoverContent: () => u2(S, { children: props.segs.map((seg) => {
      let { eventRange } = seg;
      let { instanceId } = eventRange.instance;
      let isDragging = Boolean(props.eventDrag && props.eventDrag.affectedInstances[instanceId]);
      let isResizing = Boolean(props.eventResize && props.eventResize.affectedInstances[instanceId]);
      let isInvisible = isDragging || isResizing;
      return u2("div", { role: "listitem", style: {
        visibility: isInvisible ? "hidden" : void 0
      }, children: u2(StandardEvent, { display: hasListItemDisplay(seg, eventRange) ? "list-item" : "row", eventRange, isStart: seg.isStart, isEnd: seg.isEnd, isDragging, isResizing, isMirror: false, isSelected: instanceId === props.eventSelection, defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT, defaultDisplayEventEnd: false, renderProps: props.renderProps, ...getEventRangeMeta(eventRange, props.todayRange) }) }, instanceId);
    }) }) });
  }
};
var DayGridCell = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.getDateMeta = memoize2(getDayGridCellDateMeta);
    this.refineRenderProps = memoizeObjArg(refineRenderProps2);
    this.rootElRef = M();
    this.handleBodyEl = (bodyEl) => {
      if (this.disconnectBodyHeight) {
        this.disconnectBodyHeight();
        this.disconnectBodyHeight = void 0;
        this.headerHeight = void 0;
        setRef(this.props.headerHeightRef, null);
        setRef(this.props.mainHeightRef, null);
      }
      if (bodyEl && (this.props.headerHeightRef || this.props.mainHeightRef)) {
        this.disconnectBodyHeight = watchSize(bodyEl, (_bodyWidth, bodyHeight) => {
          if (this._isUnmounting) {
            return;
          }
          const { props } = this;
          const rootEl = this.rootElRef.current;
          if (!rootEl) {
            return;
          }
          const mainRect = bodyEl.getBoundingClientRect();
          const rootRect = rootEl.getBoundingClientRect();
          const headerHeight = mainRect.top - rootRect.top;
          if (!isDimsEqual(this.headerHeight, headerHeight)) {
            this.headerHeight = headerHeight;
            setRef(props.headerHeightRef, headerHeight);
          }
          setRef(props.mainHeightRef, bodyHeight);
        });
      }
    };
  }
  render() {
    let { props, context } = this;
    let { options, dateEnv } = context;
    const { tableMode } = props;
    const isMonthStart = props.showDayNumber && shouldDisplayMonthStart(props.date, props.dateProfile.currentRange, dateEnv);
    const dateMeta = this.getDateMeta(props.date, dateEnv, props.dateProfile, props.todayRange, props.isDisabled);
    const baseClassName = joinClassNames(classNames.borderlessTop, classNames.borderlessEnd, !props.borderStart && classNames.borderlessStart, !(tableMode && props.borderBottom) && classNames.borderlessBottom, !tableMode && props.width == null && classNames.liquid, !tableMode && classNames.flexCol, classNames.rel, classNames.noMargin, classNames.noPadding);
    const CellTag = tableMode ? "td" : "div";
    const cellStyle = tableMode ? void 0 : { width: props.width };
    const hasNavLink = options.navLinks;
    const renderProps = this.refineRenderProps({
      date: props.date,
      isMajor: props.isMajor,
      isNarrow: props.isNarrow,
      dateMeta,
      hasLabel: props.showDayNumber,
      hasMonthLabel: isMonthStart,
      hasNavLink,
      renderProps: props.renderProps,
      viewApi: context.viewApi,
      dateEnv: context.dateEnv,
      monthStartFormat: options.monthStartFormat,
      dayCellFormat: options.dayCellFormat,
      businessHours: Boolean(options.businessHours)
    });
    if (dateMeta.isDisabled) {
      return u2(CellTag, { role: "cell", "aria-disabled": true, className: joinClassNames(generateClassName(options.dayCellClass, renderProps), props.className, baseClassName), style: cellStyle, children: props.fills });
    }
    const fullDateStr = buildDateStr(context, props.date);
    const hasA11yDateText = props.showDayNumber && !hasNavLink;
    return u2(ContentContainer, {
      tag: CellTag,
      elRef: this.rootElRef,
      className: joinClassNames(props.className, baseClassName),
      attrs: {
        ...props.attrs,
        role: "cell",
        ...renderProps.isToday ? { "aria-current": "date" } : {},
        "data-date": formatDayString(props.date)
      },
      style: cellStyle,
      renderProps,
      generatorName: "dayCellTopContent",
      customGenerator: options.dayCellTopContent,
      defaultGenerator: renderTopInner,
      classNameGenerator: options.dayCellClass,
      didMount: options.dayCellDidMount,
      willUnmount: options.dayCellWillUnmount,
      children: (InnerContent) => u2(S, { children: [props.fills, u2("div", {
        // otherwise VoiceOver finds an empty group when there's no day number (ex: TimeGrid all-day).
        // children (srOnly date, day number, custom content) stay readable
        role: "presentation",
        className: joinClassNames(
          classNames.rel,
          // puts it above bg-fills, which are positioned on TOP of this component :|
          DAY_GRID_CELL_CONTENT_Z_CLASS,
          generateClassName(options.dayCellTopClass, renderProps)
        ),
        children: [hasA11yDateText && // a nav link is already labeled
        u2("div", { className: classNames.srOnly, children: fullDateStr }), props.showDayNumber && u2(
          InnerContent,
          {
            tag: "div",
            attrs: hasNavLink ? buildNavLinkAttrs(context, props.date, void 0, fullDateStr) : { "aria-hidden": true },
            className: generateClassName(options.dayCellTopInnerClass, renderProps)
          }
        )]
      }), u2("div", { className: joinClassNames(!tableMode && classNames.flexCol, !tableMode && (props.fgLiquidHeight ? classNames.liquid : classNames.grow), tableMode && classNames.printCellContentMinHeight), ref: this.handleBodyEl, children: [u2("div", {
        // without events of its own, it's still sized (space reserved for multi-day events from
        // earlier days), and VoiceOver would find an empty group
        role: props.fgIsList ? "list" : "presentation",
        className: joinClassNames(
          classNames.rel,
          // origin for this cell's foreground event wrappers
          generateClassName(options.dayCellInnerClass, renderProps)
        ),
        style: { minHeight: props.fgHeight },
        children: props.fg
      }), u2(DayGridMoreLink, { className: classNames.rel, allDayDate: props.date, segs: props.segs, hiddenSegs: props.hiddenSegs, alignElRef: this.rootElRef, alignParentTop: props.showDayNumber ? "[role=row]" : `.${classNames.internalView}`, dateSpanProps: props.dateSpanProps, renderProps: props.renderProps, dateProfile: props.dateProfile, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange, isNarrow: props.isNarrow, isMicro: props.isMicro })] }), u2("div", {
        role: "presentation",
        className: joinClassNames(
          classNames.rel,
          // puts it above bg-fills
          DAY_GRID_CELL_CONTENT_Z_CLASS,
          generateClassName(options.dayCellBottomClass, renderProps)
        )
      })] })
    });
  }
  componentDidMount() {
    this._isUnmounting = false;
  }
  componentWillUnmount() {
    this._isUnmounting = true;
  }
};
function getDayGridCellDateMeta(date, dateEnv, dateProfile, todayRange, isDisabled) {
  return {
    ...getDateMeta(date, dateEnv, dateProfile, todayRange),
    isDisabled
  };
}
function renderTopInner(props) {
  return props.text || u2(S, { children: "\xA0" });
}
function shouldDisplayMonthStart(date, currentRange, dateEnv) {
  const { start: currentStart, end: currentEnd } = currentRange;
  const currentEndIncl = addMs(currentEnd, -1);
  const currentFirstYear = dateEnv.getYear(currentStart);
  const currentFirstMonth = dateEnv.getMonth(currentStart);
  const currentLastYear = dateEnv.getYear(currentEndIncl);
  const currentLastMonth = dateEnv.getMonth(currentEndIncl);
  return !(currentFirstYear === currentLastYear && currentFirstMonth === currentLastMonth) && Boolean(
    // first date in current view?
    date.valueOf() === currentStart.valueOf() || // a month-start that's within the current range?
    dateEnv.getDay(date) === 1 && date.valueOf() < currentEnd.valueOf()
  );
}
function refineRenderProps2(raw) {
  let { date, dateEnv, hasLabel, hasMonthLabel, hasNavLink, businessHours } = raw;
  let textParts = [];
  let text = "";
  if (hasLabel) {
    textParts = dateEnv.formatToParts(date, hasMonthLabel ? raw.monthStartFormat : raw.dayCellFormat);
    text = joinDateTimeFormatParts(textParts);
  }
  return {
    ...raw.dateMeta,
    ...raw.renderProps,
    text,
    textParts,
    isMajor: raw.isMajor,
    isNarrow: raw.isNarrow,
    inPopover: false,
    hasNavLink,
    get weekdayText() {
      return findWeekdayText(textParts);
    },
    get dayNumberText() {
      return findDayNumberText(textParts);
    },
    get monthText() {
      return findMonthText(textParts);
    },
    options: { businessHours },
    view: raw.viewApi
  };
}
var MeasuredHeightHarness = class extends C {
  constructor() {
    super(...arguments);
    this.rootElRef = M();
    this._isUnmounting = false;
  }
  render() {
    const { props } = this;
    return u2("div", { ...props.attrs, className: props.className, style: props.style, ref: this.rootElRef, children: props.children });
  }
  componentDidMount() {
    this._isUnmounting = false;
    const rootEl = this.rootElRef.current;
    this.disconnectHeight = watchHeight(rootEl, (height) => {
      if (this._isUnmounting)
        return;
      this.height = height;
      setRef(this.props.heightRef, height);
    });
  }
  /*
  A wrapper can gain or lose measurement responsibility without remounting,
  because a row switches placement routes (screen<->print, for example) while
  reusing the same keyed nodes. The size observer only fires on an actual size
  change, so hand the newly attached ref what was already observed, and release
  the detached one.
  */
  componentDidUpdate(prevProps) {
    const { heightRef } = this.props;
    if (prevProps.heightRef !== heightRef) {
      setRef(prevProps.heightRef, null);
      if (this.height != null) {
        setRef(heightRef, this.height);
      }
    }
  }
  componentWillUnmount() {
    this._isUnmounting = true;
    this.disconnectHeight?.();
    setRef(this.props.heightRef, null);
  }
};
function doSpansIntersect(a3, b2) {
  return a3.start < b2.end && b2.start < a3.end;
}
function intersectSpans(a3, b2) {
  const start = Math.max(a3.start, b2.start);
  const end = Math.min(a3.end, b2.end);
  return start < end ? { start, end } : null;
}
function getSpanLength(span) {
  return span.end - span.start;
}
function findIntersections(entries, span) {
  let index2 = findLowerBoundByStart(entries, span.start);
  if (index2 > 0) {
    index2--;
  }
  const matches = [];
  for (; index2 < entries.length; index2++) {
    const entry = entries[index2];
    if (entry.start >= span.end) {
      break;
    }
    if (doSpansIntersect(entry, span)) {
      matches.push(entry);
    }
  }
  return matches;
}
function subtractCoveredSpans(span, covered) {
  const result = [];
  let cursor = span.start;
  for (const item of covered) {
    if (item.end <= cursor) {
      continue;
    }
    if (item.start >= span.end) {
      break;
    }
    if (item.start > cursor) {
      result.push({ start: cursor, end: Math.min(item.start, span.end) });
    }
    cursor = Math.max(cursor, item.end);
    if (cursor >= span.end) {
      break;
    }
  }
  if (cursor < span.end) {
    result.push({ start: cursor, end: span.end });
  }
  return result;
}
function addToUnion(spans, addition) {
  const result = [];
  let pending = { ...addition };
  let inserted = false;
  for (const span of spans) {
    if (span.end <= pending.start) {
      result.push(span);
    } else if (pending.end <= span.start) {
      if (!inserted) {
        result.push(pending);
        inserted = true;
      }
      result.push(span);
    } else {
      pending = {
        start: Math.min(pending.start, span.start),
        end: Math.max(pending.end, span.end)
      };
    }
  }
  if (!inserted) {
    result.push(pending);
  }
  spans.splice(0, spans.length, ...result);
}
function insertLaterally(entries, entry) {
  entries.splice(findLowerBoundByStart(entries, entry.start), 0, entry);
}
function findLowerBoundByStart(entries, start) {
  let low = 0;
  let high = entries.length;
  while (low < high) {
    const middle = low + high >>> 1;
    if (entries[middle].start < start) {
      low = middle + 1;
    } else {
      high = middle;
    }
  }
  return low;
}
var GEOMETRY_TOLERANCE = 1e-6;
var DEFAULT_UNMEASURED_EVENT_THICKNESS = 20;
function buildLevelLimitedLayout(segs, eventOrderStrict, eventSlicing, maxLevels, moreLinkLevelTax, sliceHeights) {
  const { segLevels, excludedSegs } = buildSegLevels(segs, eventOrderStrict, maxLevels);
  const placement = placeExtraSlicesInLevels(convertSegLevelsToWholeSlices(segLevels), convertSegsToWholeSlices(excludedSegs), eventOrderStrict, eventSlicing, moreLinkLevelTax);
  const resolution = resolveLevelCoords(placement.sliceLevels, sliceHeights);
  return {
    renderSlices: flatArray(placement.sliceLevels),
    hiddenSlices: placement.hiddenSlices,
    sliceLevels: placement.sliceLevels,
    sliceCoords: resolution.sliceCoords,
    isSettled: resolution.isSettled
  };
}
function buildPixelLimitedLayout(segs, eventOrderStrict, eventSlicing, sliceHeights, canvasHeight, levelCapacity, moreLinkHeight) {
  const { segLevels, excludedSegs } = buildSegLevels(segs, eventOrderStrict, levelCapacity);
  const domWholeSliceLevels = convertSegLevelsToWholeSlices(segLevels);
  const domExcludedWholeSlices = convertSegsToWholeSlices(excludedSegs);
  const wholeResolution = resolveLevelCoords(domWholeSliceLevels, sliceHeights, canvasHeight);
  if (canvasHeight == null || moreLinkHeight == null) {
    return {
      renderSlices: flatArray(domWholeSliceLevels),
      hiddenSlices: domExcludedWholeSlices,
      sliceLevels: domWholeSliceLevels,
      sliceCoords: wholeResolution.sliceCoords,
      isSettled: wholeResolution.isSettled
    };
  }
  const excludedWholeSlices = wholeResolution.excludedSlices.concat(domExcludedWholeSlices);
  excludedWholeSlices.sort(compareByEventOrder);
  const placement = placeExtraSlicesInLevels(
    wholeResolution.placementSliceLevels,
    excludedWholeSlices,
    eventOrderStrict,
    eventSlicing,
    /* moreLinkLevelTax = */
    eventSlicing ? 1 : 0,
    /* requiresSlicing = */
    true,
    /* taxDeepestOccupiedLevel = */
    true
  );
  const sliceResolution = resolveLevelCoords(placement.sliceLevels, sliceHeights);
  const moreLinkEventMax = Math.max(0, canvasHeight - moreLinkHeight);
  const pixelPrunedSlices = prunePixelLimitedSliceLevels(placement.sliceLevels, placement.hiddenSlices, sliceResolution.sliceCoords, sliceHeights, canvasHeight, moreLinkEventMax);
  const renderSlices = flatArray(domWholeSliceLevels).concat(placement.addedSlices);
  const isSettled = wholeResolution.isSettled && sliceResolution.isSettled;
  return {
    renderSlices,
    hiddenSlices: pixelPrunedSlices.concat(placement.hiddenSlices),
    sliceLevels: placement.sliceLevels,
    sliceCoords: sliceResolution.sliceCoords,
    isSettled
  };
}
function buildSegLevels(segs, eventOrderStrict, maxLevels = Infinity) {
  const segLevels = [];
  const excludedSegs = [];
  for (const seg of segs) {
    const levelIndex = findPackedLevelIndex(segLevels, seg, eventOrderStrict);
    if (levelIndex >= maxLevels) {
      excludedSegs.push(seg);
    } else {
      while (segLevels.length <= levelIndex) {
        segLevels.push([]);
      }
      insertLaterally(segLevels[levelIndex], seg);
    }
  }
  return { segLevels, excludedSegs };
}
function findPackedLevelIndex(levels, span, orderStrict) {
  let levelIndex = 0;
  if (orderStrict) {
    for (let i3 = 0; i3 < levels.length; i3++) {
      if (findIntersections(levels[i3], span).length) {
        levelIndex = i3 + 1;
      }
    }
  } else {
    while (levelIndex < levels.length && findIntersections(levels[levelIndex], span).length) {
      levelIndex++;
    }
  }
  return levelIndex;
}
function convertSegLevelsToWholeSlices(segLevels) {
  return segLevels.map((level) => convertSegsToWholeSlices(level));
}
function convertSegsToWholeSlices(segs) {
  return segs.map(createWholeSlice);
}
function resolveLevelCoords(sliceLevels, sliceHeights, maxPixels = Infinity) {
  const placementSliceLevels = [];
  const sliceCoords = /* @__PURE__ */ new Map();
  let isSettled = true;
  const excludedSlices = [];
  for (let levelIndex = 0; levelIndex < sliceLevels.length; levelIndex++) {
    for (const slice of sliceLevels[levelIndex]) {
      const sliceHeight = sliceHeights.get(getSliceKey(slice));
      if (sliceHeight === void 0) {
        isSettled = false;
        continue;
      }
      const { bottom: levelCoord, levelIndex: packedLevelIndex } = computeLateralSpanPlacement(placementSliceLevels, slice, sliceCoords, sliceHeights);
      if (levelCoord + sliceHeight <= maxPixels + GEOMETRY_TOLERANCE) {
        while (placementSliceLevels.length <= packedLevelIndex) {
          placementSliceLevels.push([]);
        }
        insertLaterally(placementSliceLevels[packedLevelIndex], slice);
        sliceCoords.set(getSliceKey(slice), levelCoord);
      } else {
        excludedSlices.push(slice);
      }
    }
  }
  return { placementSliceLevels, sliceCoords, isSettled, excludedSlices };
}
function computeLateralSpanPlacement(sliceLevels, span, sliceCoords, sliceHeights) {
  let bottom = 0;
  let levelIndex = 0;
  for (let i3 = 0; i3 < sliceLevels.length; i3++) {
    const level = sliceLevels[i3];
    for (const slice of findIntersections(level, span)) {
      const key = getSliceKey(slice);
      const sliceTop = sliceCoords.get(key);
      const sliceHeight = sliceHeights.get(key);
      if (sliceTop !== void 0 && sliceHeight !== void 0) {
        bottom = Math.max(bottom, sliceTop + sliceHeight);
        levelIndex = i3 + 1;
      }
    }
  }
  return { bottom, levelIndex };
}
function recomputeVisibleCoords(sliceLevels, sliceHeights, sliceCoords) {
  const visibleLevels = sliceLevels.map((level) => level.filter((slice) => sliceCoords.has(getSliceKey(slice))));
  const freshCoords = resolveLevelCoords(visibleLevels, sliceHeights).sliceCoords;
  for (const [key, coord] of freshCoords) {
    sliceCoords.set(key, coord);
  }
}
function getSliceBottom(slice, sliceCoords, sliceHeights) {
  const key = getSliceKey(slice);
  const coord = sliceCoords.get(key);
  const height = sliceHeights.get(key);
  return coord === void 0 || height === void 0 ? void 0 : coord + height;
}
function prunePixelLimitedSliceLevels(sliceLevels, initialHiddenSlices, sliceCoords, sliceHeights, maxPixelHeight, moreLinkMaxPixelHeight) {
  const moreLinkGroups = [];
  const pixelPrunedSlices = [];
  const sliceHideQueue = [];
  let sliceHideIndex = 0;
  for (const hiddenSlice of initialHiddenSlices) {
    addHiddenSliceToGroups(moreLinkGroups, hiddenSlice);
  }
  enqueueViolators();
  while (sliceHideIndex < sliceHideQueue.length) {
    const slice = sliceHideQueue[sliceHideIndex++];
    const sliceBottom = getSliceBottom(slice, sliceCoords, sliceHeights);
    if (sliceBottom === void 0 || !violatesPixelBoundary(slice, sliceBottom)) {
      continue;
    }
    sliceCoords.delete(getSliceKey(slice));
    pixelPrunedSlices.push(slice);
    const newMoreLinkSpans = addHiddenSliceToGroups(moreLinkGroups, slice);
    recomputeVisibleCoords(sliceLevels, sliceHeights, sliceCoords);
    for (const newMoreLinkSpan of newMoreLinkSpans) {
      enqueueViolators(newMoreLinkSpan);
    }
  }
  return pixelPrunedSlices;
  function violatesPixelBoundary(slice, sliceBottom) {
    return sliceBottom > maxPixelHeight + GEOMETRY_TOLERANCE || sliceBottom > moreLinkMaxPixelHeight + GEOMETRY_TOLERANCE && findIntersections(moreLinkGroups, slice).length > 0;
  }
  function enqueueViolators(withinSpan) {
    for (const level of sliceLevels) {
      const candidates = withinSpan ? findIntersections(level, withinSpan) : level;
      for (const slice of candidates) {
        const sliceBottom = getSliceBottom(slice, sliceCoords, sliceHeights);
        if (sliceBottom !== void 0 && violatesPixelBoundary(slice, sliceBottom)) {
          sliceHideQueue.push(slice);
        }
      }
    }
  }
}
function placeExtraSlicesInLevels(sliceLevels, extraSlices, eventOrderStrict, eventSlicing, moreLinkLevelTax, requiresSlicing = false, taxDeepestOccupiedLevel = false) {
  const addedSliceSet = /* @__PURE__ */ new Set();
  const hiddenSlices = [];
  const moreLinkGroups = [];
  const moreLinkReservations = [];
  const placementState = {
    levels: sliceLevels,
    moreLinkReservations,
    eventOrderStrict
  };
  const work = [];
  pushFire(extraSlices, requiresSlicing);
  while (work.length) {
    const item = work.pop();
    if (item.type === "fire") {
      fire(item.slice, item.requiresSlicing);
    } else {
      fireMoreLink(item.span);
    }
  }
  return {
    sliceLevels,
    hiddenSlices,
    addedSlices: [...addedSliceSet]
  };
  function fire(slice, requiresSlicing2) {
    if (!requiresSlicing2) {
      const levelIndex = findInsertionLevel(slice, placementState);
      if (levelIndex !== null) {
        insertLaterally(sliceLevels[levelIndex], slice);
        addedSliceSet.add(slice);
        return;
      }
    }
    if (!eventSlicing) {
      hide(slice);
      return;
    }
    const plan = findBestSlicePlan(slice, placementState, requiresSlicing2);
    if (!plan) {
      hide(slice);
      return;
    }
    for (const visibleSlice of plan.slices) {
      insertLaterally(sliceLevels[plan.levelIndex], visibleSlice);
      addedSliceSet.add(visibleSlice);
    }
    for (const hiddenSlice of subtractSpansFromSlice(slice, plan.slices)) {
      hide(hiddenSlice);
    }
  }
  function hide(slice) {
    hiddenSlices.push(slice);
    const newMoreLinkSpans = addHiddenSliceToGroups(moreLinkGroups, slice);
    if (moreLinkLevelTax) {
      for (let i3 = newMoreLinkSpans.length - 1; i3 >= 0; i3--) {
        work.push({ type: "moreLink", span: newMoreLinkSpans[i3] });
      }
    }
  }
  function fireMoreLink(span) {
    if (!sliceLevels.length) {
      return;
    }
    let taxedLevelIndex = sliceLevels.length - 1;
    let victims = findIntersections(sliceLevels[taxedLevelIndex], span);
    if (taxDeepestOccupiedLevel) {
      while (!victims.length && taxedLevelIndex > 0) {
        taxedLevelIndex--;
        victims = findIntersections(sliceLevels[taxedLevelIndex], span);
      }
    }
    insertLaterally(moreLinkReservations, {
      ...span,
      levelIndex: taxedLevelIndex
    });
    const taxedLevel = sliceLevels[taxedLevelIndex];
    for (const victim of victims) {
      taxedLevel.splice(taxedLevel.indexOf(victim), 1);
      addedSliceSet.delete(victim);
      if (eventSlicing) {
        hide(intersectSlice(victim, span));
        pushFire(subtractSpansFromSlice(victim, [span]), false);
      } else {
        hide(victim);
      }
    }
  }
  function pushFire(slices, requiresSlicing2) {
    for (let i3 = slices.length - 1; i3 >= 0; i3--) {
      work.push({ type: "fire", slice: slices[i3], requiresSlicing: requiresSlicing2 });
    }
  }
}
function findInsertionLevel(slice, state) {
  const fence = computeLevelFence(slice, state);
  for (let levelIndex = fence.min; levelIndex < fence.maxExclusive; levelIndex++) {
    if (!findIntersections(state.levels[levelIndex], slice).length) {
      return levelIndex;
    }
  }
  return null;
}
function computeLevelFence(slice, state) {
  const { levels } = state;
  let min = 0;
  let maxExclusive = levels.length;
  for (const reservation of findIntersections(state.moreLinkReservations, slice)) {
    maxExclusive = Math.min(maxExclusive, reservation.levelIndex);
  }
  if (state.eventOrderStrict) {
    for (let levelIndex = 0; levelIndex < levels.length; levelIndex++) {
      for (const other of findIntersections(levels[levelIndex], slice)) {
        if (other.sourceSeg.orderIndex < slice.sourceSeg.orderIndex) {
          min = Math.max(min, levelIndex + 1);
        } else if (other.sourceSeg.orderIndex > slice.sourceSeg.orderIndex) {
          maxExclusive = Math.min(maxExclusive, levelIndex);
        }
      }
    }
  }
  return { min, maxExclusive };
}
var MAX_SLICES_PER_PLAN = 3;
var EXTRA_SLICE_PENALTY = 0.15;
function findBestSlicePlan(slice, state, requiresSlicing) {
  let selected = null;
  const sourceLength = getSpanLength(slice);
  for (let levelIndex = 0; levelIndex < state.levels.length; levelIndex++) {
    const blockers = findIntersections(state.levels[levelIndex], slice);
    for (const reservation of state.moreLinkReservations) {
      if (levelIndex >= reservation.levelIndex) {
        addToUnion(blockers, reservation);
      }
    }
    const runs = subtractSpansFromSlice(slice, blockers).filter((run) => isWithinLevelFence(run, levelIndex, state)).sort((a3, b2) => getSpanLength(b2) - getSpanLength(a3) || a3.start - b2.start);
    let visibleLength = 0;
    for (let sliceCount = 1; sliceCount <= Math.min(MAX_SLICES_PER_PLAN, runs.length); sliceCount++) {
      visibleLength += getSpanLength(runs[sliceCount - 1]);
      if (requiresSlicing && visibleLength >= sourceLength - GEOMETRY_TOLERANCE) {
        break;
      }
      const candidate = {
        levelIndex,
        slices: runs.slice(0, sliceCount),
        score: visibleLength / sourceLength - EXTRA_SLICE_PENALTY * (sliceCount - 1)
      };
      if (isBetterSlicePlan(candidate, selected)) {
        selected = candidate;
      }
    }
  }
  if (selected) {
    selected.slices.sort(compareByEventOrder);
  }
  return selected;
}
function isWithinLevelFence(slice, levelIndex, state) {
  const fence = computeLevelFence(slice, state);
  return levelIndex >= fence.min && levelIndex < fence.maxExclusive;
}
function isBetterSlicePlan(candidate, current) {
  if (!current || candidate.score > current.score) {
    return true;
  }
  if (candidate.score < current.score) {
    return false;
  }
  if (candidate.slices.length !== current.slices.length) {
    return candidate.slices.length < current.slices.length;
  }
  return candidate.levelIndex < current.levelIndex;
}
function addHiddenSliceToGroups(groups, slice) {
  const newSpans = subtractCoveredSpans(slice, groups);
  const untouchedGroups = [];
  const mergedSlices = [slice];
  let start = slice.start;
  let end = slice.end;
  for (const group of groups) {
    if (intersectSpans(group, slice)) {
      mergedSlices.push(...group.hiddenSlices);
      start = Math.min(start, group.start);
      end = Math.max(end, group.end);
    } else {
      untouchedGroups.push(group);
    }
  }
  mergedSlices.sort(compareByEventOrder);
  insertLaterally(untouchedGroups, {
    start,
    end,
    hiddenSlices: mergedSlices
  });
  groups.splice(0, groups.length, ...untouchedGroups);
  return newSpans;
}
function getSliceKey(slice) {
  if (!isPartialSlice(slice)) {
    return slice.sourceSeg.key;
  }
  return `${slice.sourceSeg.key}:${slice.start}:slice`;
}
function isPartialSlice(slice) {
  return slice.start !== slice.sourceSeg.start || slice.end !== slice.sourceSeg.end;
}
function compareByEventOrder(a3, b2) {
  return a3.sourceSeg.orderIndex - b2.sourceSeg.orderIndex || a3.start - b2.start || b2.end - a3.end;
}
function sortByEventOrder(slices) {
  return [...slices].sort(compareByEventOrder);
}
function subtractSpansFromSlice(slice, covered) {
  return subtractCoveredSpans(slice, covered).map((span) => createNarrowerSlice(slice, span.start, span.end));
}
function intersectSlice(slice, barrier) {
  const intersection = intersectSpans(slice, barrier);
  return intersection ? createNarrowerSlice(slice, intersection.start, intersection.end) : null;
}
function createWholeSlice(sourceSeg) {
  return {
    sourceSeg,
    start: sourceSeg.start,
    end: sourceSeg.end,
    isStart: sourceSeg.isStart,
    isEnd: sourceSeg.isEnd
  };
}
function createNarrowerSlice(parent, start, end) {
  return {
    sourceSeg: parent.sourceSeg,
    start,
    end,
    isStart: parent.isStart && start === parent.start,
    isEnd: parent.isEnd && end === parent.end
  };
}
var DEFAULT_UNMEASURED_EVENT_AREA_HEIGHT = 150;
var DEFAULT_LEVEL_CAPACITY = estimateLevelCapacity(DEFAULT_UNMEASURED_EVENT_AREA_HEIGHT, DEFAULT_UNMEASURED_EVENT_THICKNESS);
function buildDayGridSegSources(eventOrderedSegs) {
  return eventOrderedSegs.map((seg, orderIndex) => ({
    ...seg,
    key: getDayGridSegKey(seg),
    orderIndex
  }));
}
function buildDayGridLevelPlacements(eventOrderedSegs, maxLevels, moreLinkLevelTax, orderStrict, eventSlicing, columnCount, sliceHeights) {
  const sourceSegs = buildDayGridSegSources(eventOrderedSegs);
  const layout = buildLevelLimitedLayout(sourceSegs, orderStrict, eventSlicing, maxLevels, moreLinkLevelTax, sliceHeights);
  return buildDayGridPlacementLayout(sourceSegs, layout, sliceHeights, columnCount);
}
function buildDayGridPixelPlacements(eventOrderedSegs, orderStrict, eventSlicing, columnCount, canvasHeight, moreLinkHeight, levelCapacity, sliceHeights) {
  const sourceSegs = buildDayGridSegSources(eventOrderedSegs);
  const layout = buildPixelLimitedLayout(sourceSegs, orderStrict, eventSlicing, sliceHeights, canvasHeight, levelCapacity, moreLinkHeight);
  return buildDayGridPlacementLayout(sourceSegs, layout, sliceHeights, columnCount);
}
function buildDayGridPopoverSegs(eventOrderedSegs, hiddenSlices, column) {
  return {
    segs: flatMapArray(eventOrderedSegs, (source) => cutSegToColumn(source, column) ?? []),
    hiddenSegs: flatMapArray(hiddenSlices, (slice) => cutSegToColumn(slice.sourceSeg, column, slice) ?? [])
  };
}
function cutSegToColumn(source, column, intersectionSpan = source) {
  if (intersectionSpan.start >= column + 1 || column >= intersectionSpan.end)
    return null;
  const { key, orderIndex, ...seg } = source;
  return {
    ...seg,
    start: column,
    end: column + 1,
    isStart: seg.isStart && source.start === column,
    isEnd: seg.isEnd && source.end - 1 === column
  };
}
function resolveDayGridPlacementMode(dayMaxEvents, dayMaxEventRows) {
  if (dayMaxEvents === true || dayMaxEventRows === true) {
    return "auto";
  }
  if (typeof dayMaxEvents === "number") {
    return "maxEvents";
  }
  if (typeof dayMaxEventRows === "number") {
    return "maxEventRows";
  }
  return "unlimited";
}
function computeDayGridDomCandidateMaxLevels(mode, dayMaxEvents, dayMaxEventRows, maxDomLevels) {
  switch (mode) {
    case "auto":
      return maxDomLevels;
    case "maxEvents":
      return dayMaxEvents;
    case "maxEventRows":
      return dayMaxEventRows;
    default:
      return Infinity;
  }
}
function computeDayGridMoreLinkLevelTax(mode) {
  return mode === "maxEventRows" ? 1 : 0;
}
function buildDayGridPlacementLayout(sourceSegs, layout, sliceHeights, columnCount) {
  const { hiddenSlices, renderSlices, sliceCoords } = layout;
  const eventOrderedHiddenSlices = sortByEventOrder(hiddenSlices);
  const slicesByStart = federateSlicesByStart(renderSlices, columnCount);
  const columns = Array.from({ length: columnCount }, (_3, column) => ({
    // Freshly built per column by federateSlicesByStart; owned outright.
    renderSlices: slicesByStart[column],
    contentHeight: 0,
    ...buildDayGridPopoverSegs(sourceSegs, eventOrderedHiddenSlices, column)
  }));
  for (const slice of renderSlices) {
    const key = getSliceKey(slice);
    const sliceTop = sliceCoords.get(key);
    if (sliceTop === void 0) {
      continue;
    }
    const sliceBottom = sliceTop + sliceHeights.get(key);
    for (let column = slice.start; column < slice.end; column += 1) {
      columns[column].contentHeight = Math.max(columns[column].contentHeight, sliceBottom);
    }
  }
  return {
    columns,
    sliceCoords
  };
}
function federateSlicesByStart(renderSlices, columnCount) {
  const slicesByStart = Array.from({ length: columnCount }, () => []);
  for (const slice of renderSlices) {
    slicesByStart[slice.start].push(slice);
  }
  for (const slices of slicesByStart) {
    slices.sort(compareByEventOrder);
  }
  return slicesByStart;
}
function estimateLevelCapacity(eventAreaHeight, eventHeight) {
  return Math.max(1, Math.ceil(eventAreaHeight / eventHeight));
}
var DEFAULT_PRINT_MAX_LEVELS = 200;
function planPrintDomCandidates(eventOrderedSegs, eventOrderStrict, eventSlicing) {
  const { segLevels, excludedSegs } = buildSegLevels(eventOrderedSegs, eventOrderStrict, DEFAULT_PRINT_MAX_LEVELS);
  const placement = placeExtraSlicesInLevels(convertSegLevelsToWholeSlices(segLevels), convertSegsToWholeSlices(excludedSegs), eventOrderStrict, eventSlicing, 0);
  return {
    sliceLevels: placement.sliceLevels,
    hiddenSlices: placement.hiddenSlices
  };
}
function buildPrintEventBands(levels, printEventThicknesses, getPrintEventKey = (slice) => slice.sourceSeg.key, defaultPrintEventThickness = DEFAULT_UNMEASURED_EVENT_THICKNESS) {
  const bands = [];
  for (let levelIndex = 0; levelIndex < levels.length; levelIndex++) {
    const entries = levels[levelIndex];
    if (!entries?.length)
      continue;
    let thickness = 0;
    const slices = entries.map((slice) => {
      thickness = Math.max(thickness, printEventThicknesses.get(getPrintEventKey(slice)) ?? defaultPrintEventThickness);
      return slice;
    });
    bands.push({
      levelIndex,
      slices,
      thickness
    });
  }
  return bands;
}
function buildDayGridPrintPlan(eventOrderedSegs, orderStrict, eventSlicing, columnCount) {
  const sourceSegs = buildDayGridSegSources(eventOrderedSegs);
  const candidatePlan = planPrintDomCandidates(sourceSegs, orderStrict, eventSlicing);
  return {
    ...candidatePlan,
    hiddenSlices: sortByEventOrder(candidatePlan.hiddenSlices),
    sourceSegs,
    columnCount
  };
}
function buildDayGridPrintColumns(plan, printSegHeights) {
  const columns = Array.from({ length: plan.columnCount }, () => []);
  for (const band of buildPrintEventBands(plan.sliceLevels, printSegHeights, getDayGridPrintSliceKey)) {
    const slicesByColumn = Array(plan.columnCount).fill(null);
    for (const slice of band.slices) {
      slicesByColumn[slice.start] = slice;
    }
    for (let column = 0; column < plan.columnCount; column++) {
      columns[column].push({
        levelIndex: band.levelIndex,
        thickness: band.thickness,
        slice: slicesByColumn[column]
      });
    }
  }
  return columns;
}
function getDayGridPrintSliceKey(slice) {
  return `${slice.sourceSeg.key}:${slice.start}:${slice.end}`;
}
var DEFAULT_WEEK_NUM_FORMAT = createFormatter({ week: "narrow" });
var DayGridRow = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.headerHeightRefMap = new RefMap(() => {
      afterSize(this.handleSegPositioning);
    });
    this.mainHeightRefMap = new RefMap(() => {
      const fgLiquidHeight = this.props.dayMaxEvents === true || this.props.dayMaxEventRows === true;
      if (fgLiquidHeight) {
        afterSize(this.handleSegPositioning);
      }
    });
    this.sliceHeightRefMap = new RefMap(() => {
      afterSize(this.handleSegPositioning);
    });
    this.handlePrintSegHeightChange = () => {
      afterSize(this.handlePrintSegHeights);
    };
    this.printSegHeightRefMap = new RefMap(this.handlePrintSegHeightChange);
    this.buildWeekNumberRenderProps = memoize2(buildWeekNumberRenderProps);
    this.buildPrintPlan = memoize2(buildDayGridPrintPlan);
    this.sortEventSegs = memoize2(sortEventSegs);
    this.levelCapacity = DEFAULT_LEVEL_CAPACITY;
    this.handleRootEl = (rootEl) => {
      this.disconnectHeight?.();
      this.disconnectHeight = void 0;
      setRef(this.props.rootElRef, rootEl);
      if (rootEl) {
        this.disconnectHeight = watchHeight(rootEl, (contentHeight) => {
          setRef(this.props.heightRef, contentHeight);
        });
      } else {
        setRef(this.props.heightRef, null);
      }
    };
    this.handleSegPositioning = () => {
      if (this._isUnmounting || this.props.forPrint)
        return;
      this.updateAutoPlacementRatchets();
      this.forceUpdate();
    };
    this.handlePrintSegHeights = () => {
      if (this._isUnmounting || !this.props.forPrint)
        return;
      this.forceUpdate();
    };
  }
  render() {
    const { props, context, headerHeightRefMap, mainHeightRefMap } = this;
    const { cells, tableMode } = props;
    const { options } = context;
    const weekDateMarker = props.cells[0].date;
    const fgEventSegs = this.sortEventSegs(props.fgEventSegs, options.eventOrder);
    const screenFgLiquidHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
    let printPlan = null;
    let printColumns = null;
    let screenColumns = null;
    let screenSliceCoords = /* @__PURE__ */ new Map();
    let screenMainOffsetsByCol = [];
    let screenHeightsByCol = [];
    if (props.forPrint) {
      printPlan = this.buildPrintPlan(fgEventSegs, options.eventOrderStrict, options.eventSlicing, cells.length);
      printColumns = buildDayGridPrintColumns(printPlan, this.printSegHeightRefMap.current);
    } else {
      const placementMode = resolveDayGridPlacementMode(props.dayMaxEvents, props.dayMaxEventRows);
      const [maxMainTop, minMainHeight] = this.computeFgDims();
      const screenLayout = placementMode === "auto" ? buildDayGridPixelPlacements(fgEventSegs, options.eventOrderStrict, options.eventSlicing, cells.length, minMainHeight, props.moreLinkHeight, this.levelCapacity, this.sliceHeightRefMap.current) : buildDayGridLevelPlacements(fgEventSegs, computeDayGridDomCandidateMaxLevels(placementMode, props.dayMaxEvents, props.dayMaxEventRows, Infinity), computeDayGridMoreLinkLevelTax(placementMode), options.eventOrderStrict, options.eventSlicing, cells.length, this.sliceHeightRefMap.current);
      screenColumns = screenLayout.columns;
      screenSliceCoords = screenLayout.sliceCoords;
      if (maxMainTop != null) {
        for (let col = 0; col < cells.length; col++) {
          const cellHeaderHeight = headerHeightRefMap.current.get(cells[col].key);
          const mainOffset = cellHeaderHeight != null ? maxMainTop - cellHeaderHeight : void 0;
          screenMainOffsetsByCol.push(mainOffset);
          screenHeightsByCol.push(mainOffset != null ? screenColumns[col].contentHeight + mainOffset : void 0);
        }
      }
    }
    const highlightSegs = this.getHighlightSegs();
    const hasNavLink = options.navLinks;
    const fullWeekStr = buildDateStr(context, weekDateMarker, "week");
    const weekNumberRenderProps = this.buildWeekNumberRenderProps(weekDateMarker, context, props.cellIsNarrow, hasNavLink);
    const fillsByCol = cells.map(() => []);
    const weekNumberNode = props.showWeekNumbers && !props.cellIsMicro ? u2(ContentContainer, { tag: "div", attrs: {
      ...hasNavLink ? buildNavLinkAttrs(
        context,
        weekDateMarker,
        "week",
        fullWeekStr,
        /* isTabbable = */
        false
      ) : {},
      "role": void 0,
      // HACK: a 'link' role can't be child of a 'row' role
      "aria-hidden": true
      // HACK: never part of a11y tree because row already has label and role not allowed
    }, className: DAY_GRID_EVENT_Z_CLASS, renderProps: weekNumberRenderProps, generatorName: "inlineWeekNumberContent", customGenerator: options.inlineWeekNumberContent, defaultGenerator: renderText, classNameGenerator: options.inlineWeekNumberClass, didMount: options.inlineWeekNumberDidMount, willUnmount: options.inlineWeekNumberWillUnmount }) : null;
    if (tableMode && weekNumberNode) {
      fillsByCol[0].push(u2("div", { className: joinClassNames(classNames.fillY, classNames.start0, classNames.pointerEventsNone), style: {
        width: this.computeSpanWidth(0, cells.length)
      }, children: weekNumberNode }, "week-number"));
    }
    this.appendFillSegs(fillsByCol, props.businessHourSegs, "non-business", DAY_GRID_NON_BUSINESS_Z_CLASS);
    this.appendFillSegs(fillsByCol, props.bgEventSegs, "bg-event", DAY_GRID_BG_EVENT_Z_CLASS);
    this.appendFillSegs(fillsByCol, highlightSegs, "highlight", DAY_GRID_HIGHLIGHT_Z_CLASS);
    const RowTag = tableMode ? "tr" : "div";
    return u2(RowTag, {
      role: props.role,
      "aria-label": props.role === "row" ? fullWeekStr : void 0,
      className: joinClassNames(
        options.dayRowClass,
        props.className,
        tableMode && classNames.borderless,
        !tableMode && classNames.flexRow,
        !tableMode && classNames.rel,
        // origin for the inline week number
        !tableMode && classNames.borderlessX,
        !tableMode && classNames.borderlessTop,
        !tableMode && !props.borderBottom && classNames.borderlessBottom,
        classNames.isolate
      ),
      style: {
        flexBasis: tableMode ? void 0 : props.basis
      },
      ref: this.handleRootEl,
      children: [!tableMode && weekNumberNode, props.cells.map((cell, col) => {
        const printPopover = printPlan ? buildDayGridPopoverSegs(printPlan.sourceSegs, printPlan.hiddenSlices, col) : null;
        const screenRenderSlices = printPlan ? null : screenColumns[col].renderSlices;
        let fg;
        if (printPlan) {
          fg = this.renderPrintBandSlots(printColumns[col]);
        } else {
          fg = [
            ...this.renderLevelFgSegs(screenMainOffsetsByCol[col], screenRenderSlices, screenSliceCoords),
            ...this.renderMirrorFgSegs(col, screenMainOffsetsByCol[col], screenSliceCoords)
          ];
        }
        return u2(DayGridCell, {
          dateProfile: props.dateProfile,
          todayRange: props.todayRange,
          date: cell.date,
          isMajor: cell.isMajor,
          isDisabled: cell.isDisabled,
          showDayNumber: props.showDayNumbers,
          isNarrow: props.cellIsNarrow,
          isMicro: props.cellIsMicro,
          borderStart: Boolean(col),
          borderBottom: props.borderBottom,
          tableMode,
          // content
          fills: fillsByCol[col],
          segs: printPopover ? printPopover.segs : screenColumns[col].segs,
          hiddenSegs: printPopover ? printPopover.hiddenSegs : screenColumns[col].hiddenSegs,
          fgLiquidHeight: printPlan ? false : screenFgLiquidHeight,
          fg,
          fgIsList: Boolean(screenRenderSlices?.length),
          eventDrag: printPlan ? null : props.eventDrag,
          eventResize: printPlan ? null : props.eventResize,
          eventSelection: props.eventSelection,
          // render hooks
          renderProps: cell.renderProps,
          dateSpanProps: cell.dateSpanProps,
          attrs: cell.attrs,
          className: cell.className,
          // dimensions
          fgHeight: printPlan ? void 0 : screenHeightsByCol[col],
          width: props.colWidth,
          // refs
          headerHeightRef: printPlan ? void 0 : headerHeightRefMap.createRef(cell.key),
          mainHeightRef: printPlan ? void 0 : mainHeightRefMap.createRef(cell.key)
        }, cell.key);
      })]
    });
  }
  /** Mirrors align with kernel coordinates but bypass admission and measurement. */
  renderMirrorFgSegs(col, mainOffset, sliceCoords) {
    const { props } = this;
    const { eventSelection } = props;
    const nodes = [];
    for (const seg of this.getMirrorSegs()) {
      if (seg.start !== col) {
        continue;
      }
      const key = getDayGridSegKey(seg);
      const { eventRange } = seg;
      const { instanceId } = eventRange.instance;
      const top = mainOffset != null ? mainOffset + (sliceCoords.get(key) ?? 0) : void 0;
      const isDragging = Boolean(props.eventDrag && props.eventDrag.affectedInstances[instanceId]);
      const isResizing = Boolean(props.eventResize && props.eventResize.affectedInstances[instanceId]);
      const isSelected = instanceId === eventSelection;
      nodes.push(u2(MeasuredHeightHarness, { attrs: { "aria-hidden": true }, className: joinClassNames(classNames.abs, classNames.start0, DAY_GRID_INTERACTION_Z_CLASS), style: {
        top,
        width: this.computeSpanWidth(seg.start, seg.end)
      }, heightRef: null, children: this.renderEventContent(seg, eventRange, {
        isDragging,
        isResizing,
        isMirror: true,
        isSelected
      }) }, `mirror:${key}`));
    }
    return nodes;
  }
  /** Renders every kernel slice with its own measurement ref. */
  renderLevelFgSegs(mainOffset, slices, sliceCoords) {
    const { props } = this;
    const { eventSelection } = props;
    const nodes = [];
    for (const slice of slices) {
      const key = getSliceKey(slice);
      const sliceTop = sliceCoords.get(key);
      const { eventRange } = slice.sourceSeg;
      const { instanceId } = eventRange.instance;
      const top = mainOffset != null && sliceTop != null ? mainOffset + sliceTop : void 0;
      const isDragging = Boolean(props.eventDrag && props.eventDrag.affectedInstances[instanceId]);
      const isResizing = Boolean(props.eventResize && props.eventResize.affectedInstances[instanceId]);
      const isInvisible = isDragging || isResizing || top == null;
      const isSelected = instanceId === eventSelection;
      nodes.push(u2(MeasuredHeightHarness, { attrs: { role: "listitem" }, className: joinClassNames(classNames.abs, classNames.start0, isSelected ? DAY_GRID_INTERACTION_Z_CLASS : DAY_GRID_EVENT_Z_CLASS), style: {
        visibility: isInvisible ? "hidden" : void 0,
        top,
        width: this.computeSpanWidth(slice.start, slice.end)
      }, heightRef: this.sliceHeightRefMap.createRef(key), children: this.renderEventContent(slice, eventRange, {
        isDragging,
        isResizing,
        isSelected
      }) }, key));
    }
    return nodes;
  }
  /**
   * The inner event, identical on both placement routes. Only the wrapper
   * around it differs: the screen route positions it, print lets it sit at the
   * static top of its band slot.
  */
  renderEventContent(range, eventRange, interaction) {
    const { props } = this;
    const isListItem = hasListItemDisplay(range, eventRange);
    const cellRenderProps = props.cells[range.start]?.renderProps;
    return u2(StandardEvent, { display: isListItem ? "list-item" : "row", eventRange, isStart: range.isStart, isEnd: range.isEnd, isDragging: Boolean(interaction.isDragging), isResizing: Boolean(interaction.isResizing), isMirror: Boolean(interaction.isMirror), isSelected: Boolean(interaction.isSelected), isNarrow: props.cellIsNarrow, defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT, defaultDisplayEventEnd: props.cells.length === 1, disableResizing: isListItem, forcedTimeText: props.cellIsMicro ? "" : void 0, renderProps: cellRenderProps, ...getEventRangeMeta(eventRange, props.todayRange) });
  }
  /** Renders aligned print slots with in-flow event wrappers that can paginate with their bands. */
  renderPrintBandSlots(slots) {
    const { printSegHeightRefMap } = this;
    return slots.map((slot) => {
      const { slice } = slot;
      let eventNode = null;
      if (slice) {
        const sliceKey = getDayGridPrintSliceKey(slice);
        eventNode = u2(MeasuredHeightHarness, { className: joinClassNames(classNames.rel, classNames.flowRoot, DAY_GRID_EVENT_Z_CLASS), style: {
          width: this.computeSpanWidth(slice.start, slice.end)
        }, heightRef: printSegHeightRefMap.createRef(sliceKey), children: this.renderEventContent(slice, slice.sourceSeg.eventRange, {}) }, sliceKey);
      }
      return u2("div", { className: classNames.breakInsideAvoid, style: { height: slot.thickness }, children: eventNode }, slot.levelIndex);
    });
  }
  computeSpanWidth(start, end) {
    const span = end - start;
    const percentWidth = `${span * 100}%`;
    const crossedBorderWidth = this.props.tableMode && start === 0 ? 0 : Math.max(0, span - 1) * COL_BORDER_WIDTH;
    return crossedBorderWidth ? `calc(${percentWidth} + ${crossedBorderWidth}px)` : percentWidth;
  }
  /** Places each fill in its first cell while allowing its wrapper to span subsequent cells. */
  appendFillSegs(fillsByCol, segs, fillType, zClassName) {
    const { props, context } = this;
    const { todayRange } = props;
    for (const seg of segs) {
      fillsByCol[seg.start].push(u2("div", { "aria-hidden": true, className: joinClassNames(classNames.fillY, classNames.start0, zClassName), style: {
        width: this.computeSpanWidth(seg.start, seg.end)
      }, children: fillType === "bg-event" ? u2(BgEvent, { eventRange: seg.eventRange, isStart: seg.isStart, isEnd: seg.isEnd, isNarrow: props.cellIsNarrow, isVertical: false, renderProps: props.cells[seg.start]?.renderProps, ...getEventRangeMeta(seg.eventRange, todayRange) }) : renderFill(fillType, context.options) }, `${fillType}:${buildEventRangeKey(seg.eventRange)}:${seg.start}:${seg.end}`));
    }
  }
  // Sizing
  // -----------------------------------------------------------------------------------------------
  componentDidMount() {
    this._isUnmounting = false;
  }
  componentDidUpdate(prevProps) {
    if (prevProps.forPrint && !this.props.forPrint) {
      this.printSegHeightRefMap = new RefMap(this.handlePrintSegHeightChange);
    }
  }
  componentWillUnmount() {
    this._isUnmounting = true;
  }
  computeFgDims() {
    const { cells } = this.props;
    const headerHeightMap = this.headerHeightRefMap.current;
    const mainHeightMap = this.mainHeightRefMap.current;
    let maxMainTop;
    let minMainBottom;
    let isComplete = true;
    for (const cell of cells) {
      if (cell.isDisabled) {
        continue;
      }
      const mainTop = headerHeightMap.get(cell.key);
      const mainHeight = mainHeightMap.get(cell.key);
      if (mainTop == null || mainHeight == null) {
        isComplete = false;
      }
      if (mainTop != null) {
        if (maxMainTop === void 0 || mainTop > maxMainTop) {
          maxMainTop = mainTop;
        }
        if (mainHeight != null) {
          const mainBottom = mainTop + mainHeight;
          if (minMainBottom === void 0 || mainBottom < minMainBottom) {
            minMainBottom = mainBottom;
          }
        }
      }
    }
    return [
      maxMainTop,
      isComplete && minMainBottom != null && maxMainTop != null ? minMainBottom - maxMainTop : void 0
    ];
  }
  /**
   * Grows the row-local DOM candidate frontier from one post-size snapshot.
   * This is the only monotone state auto placement needs: the engine itself
   * consumes exact measurements and never predicts a thickness.
   */
  updateAutoPlacementRatchets() {
    if (resolveDayGridPlacementMode(this.props.dayMaxEvents, this.props.dayMaxEventRows) !== "auto")
      return;
    const [, canvasHeight] = this.computeFgDims();
    if (canvasHeight != null) {
      const smallestSliceHeight = Math.min(...this.sliceHeightRefMap.current.values());
      this.levelCapacity = Math.max(this.levelCapacity, estimateLevelCapacity(canvasHeight, smallestSliceHeight));
    }
  }
  // Internal Utils
  // -----------------------------------------------------------------------------------------------
  getMirrorSegs() {
    let { props } = this;
    if (props.eventResize && props.eventResize.segs.length) {
      return props.eventResize.segs;
    }
    return [];
  }
  getHighlightSegs() {
    let { props } = this;
    if (props.eventDrag && props.eventDrag.segs.length) {
      return props.eventDrag.segs;
    }
    if (props.eventResize && props.eventResize.segs.length) {
      return props.eventResize.segs;
    }
    return props.dateSelectionSegs;
  }
};
function buildWeekNumberRenderProps(weekDateMarker, context, isNarrow, hasNavLink) {
  const { dateEnv, options } = context;
  const weekNum = dateEnv.computeWeekNumber(weekDateMarker);
  const weekNumTextParts = dateEnv.formatToParts(weekDateMarker, options.weekNumberFormat || DEFAULT_WEEK_NUM_FORMAT);
  const weekNumText = joinDateTimeFormatParts(weekNumTextParts);
  const weekDateZoned = dateEnv.toDate(weekDateMarker);
  return {
    num: weekNum,
    text: weekNumText,
    textParts: weekNumTextParts,
    date: weekDateZoned,
    isNarrow,
    hasNavLink
  };
}
var DaySeriesModel = class {
  constructor(range, dateProfileGenerator) {
    let date = range.start;
    let { end } = range;
    let entries = [];
    let dates = [];
    let dayIndex = -1;
    while (date < end) {
      if (dateProfileGenerator.isHiddenDay(date)) {
        entries.push({
          kind: "hidden",
          previousIndex: dayIndex,
          nextIndex: dayIndex + 1
        });
      } else {
        dayIndex += 1;
        entries.push({ kind: "visible", index: dayIndex });
        dates.push(date);
      }
      date = addDays3(date, 1);
    }
    this.rangeStart = range.start;
    this.dates = dates;
    this.entries = entries;
    this.cnt = dates.length;
  }
  sliceRange(range) {
    let firstResult = this.getDateIndex(range.start);
    let lastResult = this.getDateIndex(addDays3(range.end, -1));
    let firstIndex = getFirstVisibleIndex(firstResult);
    let lastIndex = getLastVisibleIndex(lastResult);
    let clippedFirstIndex = Math.max(0, firstIndex);
    let clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
    if (clippedFirstIndex <= clippedLastIndex) {
      return {
        start: clippedFirstIndex,
        end: clippedLastIndex + 1,
        // make exclusive
        isStart: firstResult.kind === "visible" && firstIndex === clippedFirstIndex,
        isEnd: lastResult.kind === "visible" && lastIndex === clippedLastIndex
      };
    }
    return null;
  }
  getDateIndex(date) {
    let dayOffset = Math.floor(diffDays4(this.rangeStart, date));
    if (dayOffset < 0) {
      return { kind: "before", index: -1 };
    }
    if (dayOffset >= this.entries.length) {
      return { kind: "after", index: this.cnt };
    }
    return this.entries[dayOffset];
  }
};
function getFirstVisibleIndex(result) {
  return result.kind === "hidden" ? result.nextIndex : result.index;
}
function getLastVisibleIndex(result) {
  return result.kind === "hidden" ? result.previousIndex : result.index;
}
function buildDayTableModel(dateProfile, dateProfileGenerator, dateEnv) {
  const daySeries = new DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
  const breakOnWeeks = /year|month|week/.test(dateProfile.currentRangeUnit);
  const majorUnit = !breakOnWeeks && computeMajorUnit(dateProfile, dateEnv);
  return new DayTableModel(daySeries, breakOnWeeks, dateEnv, majorUnit !== "day" ? majorUnit : void 0, dateProfile.activeRange);
}
function computeColWidth(colCount, colMinWidth, viewportWidth) {
  if (viewportWidth == null) {
    return [void 0, void 0];
  }
  const colTempWidth = viewportWidth / colCount;
  if (colTempWidth < colMinWidth) {
    return [colMinWidth * colCount, colMinWidth];
  }
  return [viewportWidth, void 0];
}
function computeTopFromDate(date, cellRows, rowHeightMap) {
  let top = 0;
  for (const cells of cellRows) {
    const key = cells[0].key;
    const start = cells[0].date;
    const end = cells[cells.length - 1].date;
    if (date >= start && date <= end) {
      return top;
    }
    const rowHeight = rowHeightMap.get(key);
    if (rowHeight == null) {
      return;
    }
    top += rowHeight;
  }
  return top;
}
function computeColFromPosition(positionLeft, elWidth, colWidth, colCount, isRtl) {
  const realColWidth = colWidth != null ? colWidth : elWidth / colCount;
  const colFromLeft = Math.floor(positionLeft / realColWidth);
  const col = isRtl ? colCount - colFromLeft - 1 : colFromLeft;
  const left = colFromLeft * realColWidth;
  const right = left + realColWidth;
  return { col, left, right };
}
function computeRowFromPosition(positionTop, cellRows, rowHeightMap) {
  let row = 0;
  let top = 0;
  let bottom = 0;
  for (const cells of cellRows) {
    const key = cells[0].key;
    top = bottom;
    bottom = top + rowHeightMap.get(key);
    if (positionTop < bottom) {
      break;
    }
    row++;
  }
  return { row, top, bottom };
}
function getRowEl(rootEl, row) {
  return rootEl.querySelectorAll("[role=row]")[row];
}
function getCellEl(rowEl, col) {
  return rowEl.querySelectorAll("[role=cell]")[col];
}
var dayMicroWidth = 60;
var dayHeaderMicroFormat = createFormatter({
  weekday: "narrow"
});
function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
  return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
}
function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
  if (!datesRepDistinctDays) {
    return createFormatter({ weekday: "short" });
  }
  if (dayCnt > 1) {
    return createFormatter({
      weekday: "short",
      weekdayJustify: "start",
      day: "numeric",
      omitCommas: true,
      omitTrailing: true
    });
  }
  return createFormatter({
    weekday: "long",
    weekdayJustify: "start",
    day: "numeric",
    omitCommas: true,
    omitTrailing: true
  });
}
var DayGridRows = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.state = {};
    this.splitBusinessHourSegs = memoize2(splitSegsByRow);
    this.splitBgEventSegs = memoize2(splitAllDaySegsByRow);
    this.splitFgEventSegs = memoize2(splitSegsByRow);
    this.splitDateSelectionSegs = memoize2(splitSegsByRow);
    this.splitEventDrag = memoize2(splitInteractionByRow);
    this.splitEventResize = memoize2(splitInteractionByRow);
    this.rowHeightRefMap = new RefMap((height, key) => {
      const { rowHeightRefMap } = this.props;
      if (rowHeightRefMap) {
        rowHeightRefMap.handleValue(height, key);
      }
    });
    this.handleMoreLinkEl = (el) => {
      this.disconnectMoreLinkHeight?.();
      this.disconnectMoreLinkHeight = void 0;
      if (el) {
        this.disconnectMoreLinkHeight = watchHeight(el, (height) => {
          if (this._isUnmounting)
            return;
          this.setState({ moreLinkHeight: height });
        });
      }
    };
    this.handleRootEl = (rootEl) => {
      this.rootEl = rootEl;
      if (rootEl) {
        this.context.registerInteractiveComponent(this, {
          el: rootEl,
          isHitComboAllowed: this.props.isHitComboAllowed
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
  }
  render() {
    let { props, state, context, rowHeightRefMap } = this;
    let { options } = context;
    let { cellRows, tableMode } = props;
    let rowCount = cellRows.length;
    let firstCellKey = cellRows[0]?.[0]?.key || "";
    let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCount);
    let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCount);
    let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCount);
    let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCount);
    let eventDragByRow = this.splitEventDrag(props.eventDrag, rowCount);
    let eventResizeByRow = this.splitEventResize(props.eventResize, rowCount);
    let isHeightAuto = getIsHeightAuto(options);
    let rowHeightsRedistribute = !props.forPrint && !isHeightAuto;
    let rowBasis = computeRowBasis(props.visibleWidth, rowCount, isHeightAuto, options);
    const needsMoreLinkProbe = !props.forPrint && resolveDayGridPlacementMode(props.dayMaxEvents, props.dayMaxEventRows) === "auto";
    const RowsTag = tableMode ? "tbody" : "div";
    return u2(S, { children: [u2(RowsTag, { role: "rowgroup", className: joinClassNames(
      props.className,
      // HACK for Safari. Can't do break-inside:avoid with flexbox items, likely b/c it's not standard:
      // https://stackoverflow.com/a/60256345
      !tableMode && !props.forPrint && classNames.flexCol
    ), style: tableMode ? void 0 : { width: props.width }, ref: this.handleRootEl, children: cellRows.map((cells, row) => u2(DayGridRow, {
      role: "row",
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      cells,
      cellIsNarrow: props.cellIsNarrow,
      cellIsMicro: props.cellIsMicro,
      showDayNumbers: rowCount > 1,
      showWeekNumbers: rowCount > 1 && options.weekNumbers,
      forPrint: props.forPrint,
      tableMode,
      borderBottom: row < rowCount - 1,
      // if not auto-height, distribute height of container somewhat evently to rows
      className: rowHeightsRedistribute ? classNames.grow : void 0,
      // content
      fgEventSegs: fgEventSegsByRow[row],
      bgEventSegs: bgEventSegsByRow[row],
      businessHourSegs: businessHourSegsByRow[row],
      dateSelectionSegs: dateSelectionSegsByRow[row],
      eventSelection: props.eventSelection,
      eventDrag: eventDragByRow[row],
      eventResize: eventResizeByRow[row],
      dayMaxEvents: props.dayMaxEvents,
      dayMaxEventRows: props.dayMaxEventRows,
      // dimensions
      colWidth: props.colWidth,
      basis: rowBasis,
      moreLinkHeight: state.moreLinkHeight,
      // refs
      heightRef: rowHeightRefMap.createRef(cells[0].key)
    }, firstCellKey + ":" + cells[0].key)) }), needsMoreLinkProbe && u2(MoreLinkTrigger, { num: 1, display: "row", isNarrow: props.cellIsNarrow, isMicro: props.cellIsMicro, elRef: this.handleMoreLinkEl, className: classNames.offscreen, attrs: {
      "aria-hidden": true
      // redundant with .offscreen's visibility, but marks it as a probe
    } })] });
  }
  componentDidMount() {
    this._isUnmounting = false;
  }
  componentWillUnmount() {
    this._isUnmounting = true;
  }
  // Hit System
  // -----------------------------------------------------------------------------------------------
  queryHit(isRtl, positionLeft, positionTop, elWidth) {
    const { props } = this;
    const colCount = props.cellRows[0].length;
    const { col, left, right } = computeColFromPosition(positionLeft, elWidth, props.colWidth, colCount, isRtl);
    const { row, top, bottom } = computeRowFromPosition(positionTop, props.cellRows, this.rowHeightRefMap.current);
    const cell = props.cellRows[row][col];
    if (cell.isInert) {
      return null;
    }
    const cellStartDate = cell.date;
    const cellEndDate = addDays3(cellStartDate, 1);
    return {
      dateProfile: props.dateProfile,
      dateSpan: {
        range: {
          start: cellStartDate,
          end: cellEndDate
        },
        allDay: true,
        ...cell.dateSpanProps
      },
      getDayEl: () => getCellEl(getRowEl(this.rootEl, row), col),
      rect: {
        left,
        right,
        top,
        bottom
      },
      layer: 0
    };
  }
};
function isSegAllDay(seg) {
  return seg.eventRange.def.allDay;
}
function splitAllDaySegsByRow(segs, rowCnt) {
  return splitSegsByRow(segs.filter(isSegAllDay), rowCnt);
}
function computeRowBasis(visibleWidth, rowCount, isHeightAuto, options) {
  if (visibleWidth != null) {
    const rowBasis = visibleWidth / options.aspectRatio / 6;
    return rowCount > 6 || isHeightAuto ? rowBasis : 0;
  }
  return 0;
}
var DayGridHeaderCell = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {};
    this.buildDayHeaderText = memoize2(buildDayHeaderText);
    this.handleInnerEl = (innerEl) => {
      if (this.disconnectSize) {
        this.disconnectSize();
        this.disconnectSize = void 0;
      }
      if (innerEl) {
        this.disconnectSize = watchSize(innerEl, (width, height) => {
          if (this._isUnmounting)
            return;
          setRef(this.props.innerHeightRef, height);
          this.setState({ innerWidth: width });
        });
      } else {
        setRef(this.props.innerHeightRef, null);
      }
    };
  }
  render() {
    const { props, state, context } = this;
    const { renderConfig, dataConfig, tableMode } = props;
    const colSpan = dataConfig.colSpan || 1;
    const totalColWidth = props.colWidth != null ? props.colWidth * colSpan : void 0;
    const isLiquid = !tableMode && totalColWidth == null;
    const isSpanning = isLiquid && colSpan > 1;
    const style = tableMode ? void 0 : isSpanning ? {
      flexGrow: colSpan,
      flexBasis: (colSpan - 1) * COL_BORDER_WIDTH + (props.borderStart ? COL_BORDER_WIDTH : 0),
      minWidth: 0
    } : {
      width: totalColWidth
    };
    const CellTag = tableMode ? "th" : "div";
    const baseClassName = joinClassNames(dataConfig.className, classNames.noMargin, classNames.noPadding, !tableMode && classNames.flexCol, classNames.borderlessTop, classNames.borderlessEnd, !props.borderStart && classNames.borderlessStart, !(tableMode && props.borderBottom) && classNames.borderlessBottom, isLiquid && !isSpanning && classNames.liquid);
    if (dataConfig.blank) {
      return u2(CellTag, {
        role: "cell",
        "aria-colspan": dataConfig.colSpan,
        colSpan: tableMode ? colSpan : void 0,
        ...dataConfig.attrs,
        className: joinClassNames(baseClassName, generateClassName(dataConfig.blank.classNameGenerator, {
          ...dataConfig.renderProps,
          isNarrow: props.cellIsNarrow
        })),
        style
      });
    }
    const isDisabled = dataConfig.renderProps.isDisabled;
    const finalRenderProps = renderConfig.dayHeaderFormat ? this.buildDayHeaderRenderProps(dataConfig.renderProps, props.cellIsNarrow, props.rowLevel, props.cellIsMicro, dataConfig.dateMarker, renderConfig.dayHeaderFormat, Boolean(renderConfig.datesRepDistinctDays), context.dateEnv) : {
      ...dataConfig.renderProps,
      isNarrow: props.cellIsNarrow,
      level: props.rowLevel
    };
    const alignInput = renderConfig.align;
    const align = (
      // normalized string-enum value
      typeof alignInput === "function" ? alignInput({ level: props.rowLevel, inPopover: dataConfig.renderProps.inPopover, isNarrow: props.cellIsNarrow }) : alignInput
    );
    const stickyInput = renderConfig.sticky;
    const isSticky = !tableMode && props.rowLevel > 0 && stickyInput !== false && // if center-aligned, and wants to be sticky, must be >75% viewport width,
    // to avoid looking awkwardly aligned
    (align !== "center" || totalColWidth != null && props.viewportWidth != null && totalColWidth > props.viewportWidth * 0.75);
    let edgeCoord;
    if (isSticky) {
      if (align === "center") {
        if (state.innerWidth != null) {
          edgeCoord = `calc(50% - ${state.innerWidth / 2}px)`;
        }
      } else {
        edgeCoord = typeof stickyInput === "number" || typeof stickyInput === "string" ? stickyInput : 0;
      }
    }
    const alignClassName = align === "center" ? classNames.alignCenter : align === "end" ? classNames.alignEnd : classNames.alignStart;
    return u2(ContentContainer, { tag: CellTag, attrs: {
      role: "columnheader",
      "aria-colspan": dataConfig.colSpan,
      colSpan: tableMode ? colSpan : void 0,
      ...dataConfig.attrs
    }, className: joinClassNames(baseClassName, !tableMode && alignClassName, !isSticky && classNames.crop), style, renderProps: finalRenderProps, generatorName: renderConfig.generatorName, customGenerator: renderConfig.customGenerator, defaultGenerator: renderText, classNameGenerator: (
      // don't use custom classNames if disabled
      // TODO: make DRY with DayCellContainer
      isDisabled ? void 0 : renderConfig.classNameGenerator
    ), didMount: renderConfig.didMount, willUnmount: renderConfig.willUnmount, children: (InnerContainer) => u2(S, { children: [dataConfig.a11yText && u2("div", { className: classNames.srOnly, children: dataConfig.a11yText }), u2("div", { "aria-hidden": dataConfig.a11yText ? true : void 0, ref: this.handleInnerEl, className: joinClassNames(classNames.flexCol, classNames.noShrink, classNames.whiteSpaceNoWrap, tableMode && alignClassName, isSticky && classNames.sticky), style: {
      left: edgeCoord,
      right: edgeCoord
    }, children: u2(InnerContainer, { tag: "div", attrs: dataConfig.innerAttrs, className: generateClassName(renderConfig.innerClassNameGenerator, finalRenderProps) }) })] }) });
  }
  componentDidMount() {
    this._isUnmounting = false;
  }
  componentWillUnmount() {
    this._isUnmounting = true;
  }
  buildDayHeaderRenderProps(renderProps, cellIsNarrow, rowLevel, cellIsMicro, dateMarker, dayHeaderFormat, datesRepDistinctDays, dateEnv) {
    const baseText = this.buildDayHeaderText(datesRepDistinctDays ? dateMarker : renderProps.date, dayHeaderFormat, datesRepDistinctDays, dateEnv);
    const textData = cellIsMicro ? this.buildDayHeaderText(dateMarker, dayHeaderMicroFormat, false, dateEnv) : baseText;
    return {
      ...renderProps,
      isNarrow: cellIsNarrow,
      level: rowLevel,
      text: textData.text,
      textParts: textData.textParts,
      weekdayText: cellIsMicro ? textData.text : baseText.weekdayText,
      dayNumberText: baseText.dayNumberText
    };
  }
};
function buildDayHeaderText(date, formatter, includeDayNumber, dateEnv) {
  const textParts = dateEnv.formatToParts(date, formatter);
  return {
    text: joinDateTimeFormatParts(textParts),
    textParts,
    weekdayText: findWeekdayText(textParts),
    dayNumberText: includeDayNumber ? findDayNumberText(textParts) : ""
  };
}
var DayGridHeaderRow = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.innerHeightRefMap = new RefMap(() => {
      afterSize(this.handleInnerHeights);
    });
    this.handleInnerHeights = () => {
      if (this._isUnmounting)
        return;
      const innerHeightMap = this.innerHeightRefMap.current;
      let max = 0;
      for (const innerHeight of innerHeightMap.values()) {
        max = Math.max(max, innerHeight);
      }
      if (this.currentInnerHeight !== max) {
        this.currentInnerHeight = max;
        setRef(this.props.innerHeightRef, max);
      }
    };
  }
  render() {
    const { props, context } = this;
    const { tableMode } = props;
    const { options } = context;
    const RowTag = tableMode ? "tr" : "div";
    return u2(RowTag, { role: props.role, "aria-rowindex": props.rowIndex != null ? 1 + props.rowIndex : void 0, className: joinClassNames(options.dayHeaderRowClass, props.className, tableMode && classNames.borderless, !tableMode && classNames.flexRow, !tableMode && classNames.contentBox, !tableMode && classNames.borderlessX, !tableMode && classNames.borderlessTop, !tableMode && !props.borderBottom && classNames.borderlessBottom), style: {
      height: props.height
    }, children: props.dataConfigs.map((dataConfig, cellI) => u2(DayGridHeaderCell, { renderConfig: props.renderConfig, dataConfig, borderStart: Boolean(cellI), colWidth: props.colWidth, viewportWidth: props.viewportWidth, innerHeightRef: this.innerHeightRefMap.createRef(dataConfig.key), cellIsNarrow: props.cellIsNarrow, cellIsMicro: props.cellIsMicro, rowLevel: props.rowLevel, tableMode, borderBottom: props.borderBottom }, dataConfig.key)) });
  }
  componentDidMount() {
    this._isUnmounting = false;
  }
  componentWillUnmount() {
    this._isUnmounting = true;
    this.currentInnerHeight = void 0;
    setRef(this.props.innerHeightRef, null);
  }
};
var DayGridHeaderRows = class extends BaseComponent {
  render() {
    const { props } = this;
    const { headerTiers, tableMode } = props;
    return headerTiers.map((rowConfig, i3) => k(DayGridHeaderRow, { ...rowConfig, key: i3, role: "row", borderBottom: i3 < headerTiers.length - 1, colWidth: props.colWidth, viewportWidth: props.viewportWidth, cellIsNarrow: props.cellIsNarrow, cellIsMicro: props.cellIsMicro, rowLevel: headerTiers.length - i3 - 1, tableMode }));
  }
};
var DayGridLayoutPrint = class extends BaseComponent {
  render() {
    const { props, context } = this;
    const { options } = context;
    const tableDisplayInfo = {
      borderlessX: props.borderlessX,
      borderlessTop: props.borderlessTop,
      borderlessBottom: props.borderlessBottom,
      multiMonthColumns: props.multiMonthColumns
    };
    return u2("table", { role: "presentation", className: joinClassNames(generateClassName(options.tableClass, tableDisplayInfo), classNames.printTable), style: props.style, children: [u2("colgroup", { children: props.cellRows[0].map((cell) => u2("col", {}, cell.key)) }), props.showHeader && u2("thead", { ref: props.headerElRef, role: "rowgroup", className: generateClassName(options.tableHeaderClass, {
      ...tableDisplayInfo,
      isSticky: false
    }), children: [u2(DayGridHeaderRows, { tableMode: true, headerTiers: props.headerTiers, cellIsNarrow: props.cellIsNarrow, cellIsMicro: props.cellIsMicro }), u2("tr", { role: "presentation", children: u2("th", { role: "presentation", colSpan: props.cellRows[0].length, className: joinClassNames(classNames.noPadding, generateClassName(options.dayHeaderDividerClass, {
      isSticky: false,
      multiMonthColumns: props.multiMonthColumns,
      options: { allDaySlot: Boolean(options.allDaySlot) }
    })) }) })] }), u2(DayGridRows, { dateProfile: props.dateProfile, todayRange: props.todayRange, cellRows: props.cellRows, forPrint: true, tableMode: true, className: generateClassName(options.tableBodyClass, tableDisplayInfo), dayMaxEvents: void 0, dayMaxEventRows: props.dayMaxEventRows, fgEventSegs: props.fgEventSegs, bgEventSegs: props.bgEventSegs, businessHourSegs: props.businessHourSegs, dateSelectionSegs: [], eventDrag: null, eventResize: null, eventSelection: props.eventSelection, visibleWidth: props.visibleWidth, cellIsNarrow: props.cellIsNarrow, cellIsMicro: props.cellIsMicro, rowHeightRefMap: props.rowHeightRefMap })] });
  }
};

// node_modules/fullcalendar/chunks/4cda001f.js
var DayGridHeader = class extends BaseComponent {
  render() {
    const { props } = this;
    return u2("div", { role: "rowgroup", className: joinClassNames(props.className, classNames.flexCol, props.width == null && classNames.liquid), style: {
      width: props.width
    }, children: u2(DayGridHeaderRows, { headerTiers: props.headerTiers, colWidth: props.colWidth, viewportWidth: props.viewportWidth, cellIsNarrow: props.cellIsNarrow, cellIsMicro: props.cellIsMicro }) });
  }
};
var DayGridLayoutNormal = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {};
    this.handleScroller = (scroller) => {
      setRef(this.props.scrollerRef, scroller);
    };
    this.handleTotalWidth = (totalWidth) => {
      if (this._isUnmounting)
        return;
      this.setState({ totalWidth });
    };
    this.handleClientWidth = (clientWidth) => {
      if (this._isUnmounting)
        return;
      this.setState({ clientWidth });
    };
  }
  render() {
    const { props, state, context } = this;
    const { options } = context;
    const { borderlessX, borderlessTop, borderlessBottom } = computeViewBorderless(options);
    const { totalWidth, clientWidth } = state;
    let endScrollbarWidth = totalWidth != null && clientWidth != null ? totalWidth - clientWidth : void 0;
    if (endScrollbarWidth < 3) {
      endScrollbarWidth = 0;
    }
    const verticalScrollbars = !props.forPrint && !getIsHeightAuto(options);
    const tableHeaderSticky = !props.forPrint && getTableHeaderSticky(options);
    const colCount = props.cellRows[0].length;
    const measuredColWidth = clientWidth != null ? clientWidth / colCount : void 0;
    const cellIsMicro = measuredColWidth != null && measuredColWidth <= dayMicroWidth;
    const cellIsNarrow = cellIsMicro || measuredColWidth != null && measuredColWidth <= options.dayNarrowWidth;
    if (props.forPrint) {
      return u2(DayGridLayoutPrint, { dateProfile: props.dateProfile, todayRange: props.todayRange, cellRows: props.cellRows, headerTiers: props.headerTiers, showHeader: Boolean(options.dayHeaders), fgEventSegs: props.fgEventSegs, bgEventSegs: props.bgEventSegs, businessHourSegs: props.businessHourSegs, eventSelection: props.eventSelection, dayMaxEventRows: options.dayMaxEventRows, borderlessX, borderlessTop, borderlessBottom, multiMonthColumns: 0, visibleWidth: totalWidth, cellIsNarrow, cellIsMicro, rowHeightRefMap: props.rowHeightRefMap });
    }
    return u2(S, { children: [options.dayHeaders && u2("div", { className: joinClassNames(generateClassName(options.tableHeaderClass, {
      isSticky: tableHeaderSticky,
      borderlessX,
      borderlessTop,
      borderlessBottom,
      multiMonthColumns: 0
    }), classNames.flexCol, tableHeaderSticky && classNames.tableHeaderSticky), children: [u2("div", { className: classNames.flexRow, children: [u2(DayGridHeader, { headerTiers: props.headerTiers, cellIsNarrow, cellIsMicro }), Boolean(endScrollbarWidth) && u2("div", { className: joinClassNames(generateClassName(options.fillerClass, { inTableHeader: true }), classNames.borderlessY, classNames.borderlessEnd), style: { minWidth: endScrollbarWidth } })] }), u2("div", { className: generateClassName(options.dayHeaderDividerClass, {
      isSticky: tableHeaderSticky,
      multiMonthColumns: 0,
      options: { allDaySlot: Boolean(options.allDaySlot) }
    }) })] }), u2(Scroller, { vertical: verticalScrollbars, className: joinClassNames(
      generateClassName(options.tableBodyClass, {
        borderlessX,
        borderlessTop,
        borderlessBottom,
        multiMonthColumns: 0
      }),
      // HACK for Safari. Can't do break-inside:avoid with flexbox items, likely b/c it's not standard:
      // https://stackoverflow.com/a/60256345
      !props.forPrint && classNames.flexCol,
      verticalScrollbars && classNames.liquid
    ), ref: this.handleScroller, clientWidthRef: this.handleClientWidth, children: u2(DayGridRows, {
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      cellRows: props.cellRows,
      forPrint: props.forPrint,
      isHitComboAllowed: props.isHitComboAllowed,
      className: classNames.grow,
      dayMaxEvents: props.forPrint ? void 0 : options.dayMaxEvents,
      dayMaxEventRows: options.dayMaxEventRows,
      // content
      fgEventSegs: props.fgEventSegs,
      bgEventSegs: props.bgEventSegs,
      businessHourSegs: props.businessHourSegs,
      dateSelectionSegs: props.dateSelectionSegs,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      eventSelection: props.eventSelection,
      // dimensions
      visibleWidth: totalWidth,
      cellIsNarrow,
      cellIsMicro,
      // refs
      rowHeightRefMap: props.rowHeightRefMap
    }) }), u2(Ruler, { widthRef: this.handleTotalWidth })] });
  }
  componentDidMount() {
    this._isUnmounting = false;
  }
  componentWillUnmount() {
    this._isUnmounting = true;
  }
};
var FooterScrollbar = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.rootElRef = M();
  }
  render() {
    const { props } = this;
    return u2("div", { ref: this.rootElRef, className: joinClassNames(classNames.footerScrollbar, props.isSticky && classNames.footerScrollbarSticky), children: u2(Scroller, { horizontal: true, ref: props.scrollerRef, children: u2("div", { style: { minWidth: props.canvasWidth } }) }) });
  }
  componentDidMount() {
    this._isUnmounting = false;
    this.disconnectHeight = watchHeight(this.rootElRef.current, (height) => {
      if (this._isUnmounting)
        return;
      setRef(this.props.scrollbarWidthRef, height);
    });
  }
  componentWillUnmount() {
    this._isUnmounting = true;
    this.disconnectHeight();
    setRef(this.props.scrollbarWidthRef, null);
  }
};
var DayGridLayoutPannable = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {};
    this.headerScrollerRef = M();
    this.bodyScrollerRef = M();
    this.footerScrollerRef = M();
    this.handleTotalWidth = (totalWidth) => {
      if (this._isUnmounting)
        return;
      this.setState({ totalWidth });
    };
    this.handleClientWidth = (clientWidth) => {
      if (this._isUnmounting)
        return;
      this.setState({ clientWidth });
    };
  }
  render() {
    const { props, state, context } = this;
    const { options } = context;
    const { borderlessX, borderlessTop, borderlessBottom } = computeViewBorderless(options);
    const { totalWidth, clientWidth } = state;
    const endScrollbarWidth = totalWidth != null && clientWidth != null ? totalWidth - clientWidth : void 0;
    const verticalScrollbars = !props.forPrint && !getIsHeightAuto(options);
    const tableHeaderSticky = !props.forPrint && getTableHeaderSticky(options);
    const footerScrollbarSticky = !props.forPrint && getFooterScrollbarSticky(options);
    const colCount = props.cellRows[0].length;
    const [canvasWidth, appliedColWidth] = computeColWidth(colCount, props.dayMinWidth, clientWidth);
    const measuredColWidth = appliedColWidth ?? (clientWidth != null ? clientWidth / colCount : void 0);
    const cellIsMicro = measuredColWidth != null && measuredColWidth <= dayMicroWidth;
    const cellIsNarrow = cellIsMicro || measuredColWidth != null && measuredColWidth <= options.dayNarrowWidth;
    if (props.forPrint) {
      return u2(DayGridLayoutPrint, { dateProfile: props.dateProfile, todayRange: props.todayRange, cellRows: props.cellRows, headerTiers: props.headerTiers, showHeader: Boolean(options.dayHeaders), fgEventSegs: props.fgEventSegs, bgEventSegs: props.bgEventSegs, businessHourSegs: props.businessHourSegs, eventSelection: props.eventSelection, dayMaxEventRows: options.dayMaxEventRows, borderlessX, borderlessTop, borderlessBottom, multiMonthColumns: 0, visibleWidth: totalWidth, cellIsNarrow, cellIsMicro, rowHeightRefMap: props.rowHeightRefMap });
    }
    return u2(S, { children: [options.dayHeaders && u2("div", { className: joinClassNames(generateClassName(options.tableHeaderClass, {
      isSticky: tableHeaderSticky,
      borderlessX,
      borderlessTop,
      borderlessBottom,
      multiMonthColumns: 0
    }), classNames.flexCol, tableHeaderSticky && classNames.tableHeaderSticky), children: [u2(Scroller, { horizontal: true, hideScrollbars: true, className: classNames.flexRow, ref: this.headerScrollerRef, children: [u2(DayGridHeader, { headerTiers: props.headerTiers, colWidth: appliedColWidth, viewportWidth: clientWidth, width: canvasWidth, cellIsNarrow, cellIsMicro }), Boolean(endScrollbarWidth) && u2("div", { className: joinClassNames(generateClassName(options.fillerClass, { inTableHeader: true }), classNames.borderlessY, classNames.borderlessEnd), style: { minWidth: endScrollbarWidth } })] }), u2("div", { className: generateClassName(options.dayHeaderDividerClass, {
      isSticky: tableHeaderSticky,
      multiMonthColumns: 0,
      options: { allDaySlot: Boolean(options.allDaySlot) }
    }) })] }), u2(Scroller, {
      vertical: verticalScrollbars,
      horizontal: true,
      hideScrollbars: footerScrollbarSticky || props.forPrint,
      className: joinClassNames(
        generateClassName(options.tableBodyClass, {
          borderlessX,
          borderlessTop,
          borderlessBottom,
          multiMonthColumns: 0
        }),
        // HACK for Safari. Can't do break-inside:avoid with flexbox items, likely b/c it's not standard:
        // https://stackoverflow.com/a/60256345
        !props.forPrint && classNames.flexCol,
        verticalScrollbars && classNames.liquid
      ),
      ref: this.bodyScrollerRef,
      clientWidthRef: this.handleClientWidth,
      children: u2(DayGridRows, {
        dateProfile: props.dateProfile,
        todayRange: props.todayRange,
        cellRows: props.cellRows,
        forPrint: props.forPrint,
        isHitComboAllowed: props.isHitComboAllowed,
        className: classNames.grow,
        dayMaxEvents: props.forPrint ? void 0 : options.dayMaxEvents,
        dayMaxEventRows: options.dayMaxEventRows,
        // content
        fgEventSegs: props.fgEventSegs,
        bgEventSegs: props.bgEventSegs,
        businessHourSegs: props.businessHourSegs,
        dateSelectionSegs: props.dateSelectionSegs,
        eventDrag: props.eventDrag,
        eventResize: props.eventResize,
        eventSelection: props.eventSelection,
        // dimensions
        colWidth: appliedColWidth,
        width: canvasWidth,
        visibleWidth: totalWidth,
        cellIsNarrow,
        cellIsMicro,
        // refs
        rowHeightRefMap: props.rowHeightRefMap
      })
    }), Boolean(footerScrollbarSticky) && u2(FooterScrollbar, { isSticky: true, canvasWidth, scrollerRef: this.footerScrollerRef }), u2(Ruler, { widthRef: this.handleTotalWidth })] });
  }
  // Lifecycle
  // -----------------------------------------------------------------------------------------------
  componentDidMount() {
    this._isUnmounting = false;
    const ScrollerSyncer = getScrollerSyncerClass(this.context.pluginHooks);
    this.syncedScroller = new ScrollerSyncer(true);
    setRef(this.props.scrollerRef, this.syncedScroller);
    this.updateSyncedScroller();
  }
  componentDidUpdate() {
    this.updateSyncedScroller();
  }
  componentWillUnmount() {
    this._isUnmounting = true;
    this.syncedScroller.destroy();
  }
  // Scrolling
  // -----------------------------------------------------------------------------------------------
  updateSyncedScroller() {
    this.syncedScroller.handleChildren([
      this.headerScrollerRef.current,
      this.bodyScrollerRef.current,
      this.footerScrollerRef.current
    ]);
  }
};
var DayGridLayout = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.scrollerRef = M();
    this.rowHeightRefMap = new RefMap(() => {
      afterSize(this.updateScrollY);
    });
    this.scrollDate = null;
    this.updateScrollY = () => {
      if (this._isUnmounting)
        return;
      const rowHeightMap = this.rowHeightRefMap.current;
      const scroller = this.scrollerRef.current;
      if (scroller && this.scrollDate) {
        let scrollTop = computeTopFromDate(this.scrollDate, this.props.cellRows, rowHeightMap);
        if (scrollTop != null) {
          if (scrollTop) {
            scrollTop++;
          }
          scroller.scrollTo({ y: scrollTop });
        }
      }
    };
    this.handleScrollEnd = (isDevice) => {
      if (isDevice) {
        this.scrollDate = null;
      }
    };
  }
  render() {
    const { props, context } = this;
    const { options } = context;
    const { borderlessX, borderlessTop, borderlessBottom } = computeViewBorderless(options);
    const dateSelectionSegs = props.forPrint ? [] : props.dateSelectionSegs;
    const eventDrag = props.forPrint ? null : props.eventDrag;
    const eventResize = props.forPrint ? null : props.eventResize;
    const commonLayoutProps = {
      ...props,
      dateSelectionSegs,
      eventDrag,
      eventResize,
      scrollerRef: this.scrollerRef,
      rowHeightRefMap: this.rowHeightRefMap
    };
    return u2(ViewContainer, { viewSpec: context.viewSpec, attrs: {
      role: "table",
      "aria-rowcount": props.headerTiers.length + props.cellRows.length,
      "aria-colcount": props.cellRows[0].length,
      "aria-labelledby": props.labelId,
      "aria-label": props.labelStr
    }, className: joinClassNames(props.className, !props.forPrint && classNames.flexCol, !props.forPrint && generateClassName(options.tableClass, {
      borderlessX,
      borderlessTop,
      borderlessBottom,
      multiMonthColumns: 0
    })), children: options.dayMinWidth ? u2(DayGridLayoutPannable, { ...commonLayoutProps, dayMinWidth: options.dayMinWidth }) : u2(DayGridLayoutNormal, { ...commonLayoutProps }) });
  }
  // Lifecycle
  // -----------------------------------------------------------------------------------------------
  componentDidMount() {
    this._isUnmounting = false;
    if (!this.props.forPrint) {
      this.resetScroll();
      this.scrollerRef.current?.addScrollEndListener(this.handleScrollEnd);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.forPrint && !this.props.forPrint) {
      this.scrollerRef.current?.addScrollEndListener(this.handleScrollEnd);
      this.resetScroll();
    }
    if (prevProps.dateProfile !== this.props.dateProfile && this.context.options.scrollTimeReset) {
      this.resetScroll();
    }
  }
  componentWillUnmount() {
    this._isUnmounting = true;
    this.scrollerRef.current?.removeScrollEndListener(this.handleScrollEnd);
  }
  // Scrolling
  // -----------------------------------------------------------------------------------------------
  resetScroll() {
    this.scrollDate = this.props.dateProfile.currentDate;
    this.updateScrollY();
    this.scrollerRef.current?.scrollTo({ x: 0 });
  }
};

// node_modules/fullcalendar/chunks/63421ff4.js
var TableDateProfileGenerator = class extends DateProfileGenerator {
  // Computes the date range that will be rendered
  buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
    let renderRange = super.buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay);
    let { props } = this;
    return buildDayTableRenderRange({
      currentRange: renderRange,
      // ???
      snapToWeek: /^(year|month)$/.test(currentRangeUnit),
      fixedWeekCount: props.fixedWeekCount,
      dateEnv: props.dateEnv
    });
  }
};
function buildDayTableRenderRange(props) {
  let { dateEnv, currentRange } = props;
  let { start, end } = currentRange;
  let endOfWeek4;
  if (props.snapToWeek) {
    start = dateEnv.startOfWeek(start);
    endOfWeek4 = dateEnv.startOfWeek(end);
    if (endOfWeek4.valueOf() !== end.valueOf()) {
      end = addWeeks3(endOfWeek4, 1);
    }
  }
  if (props.fixedWeekCount) {
    let lastMonthRenderStart = dateEnv.startOfWeek(dateEnv.startOfMonth(addDays3(currentRange.end, -1)));
    let rowCount = Math.ceil(
      // could be partial weeks due to hiddenDays
      diffWeeks4(lastMonthRenderStart, end)
    );
    end = addWeeks3(end, 6 - rowCount);
  }
  return { start, end };
}

// node_modules/fullcalendar/chunks/7367f8ae.js
var DayGridView = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.buildDayTableModel = memoize2(buildDayTableModel);
    this.buildDateRowConfigs = memoize2(buildDateRowConfigs);
    this.createDayHeaderFormatter = memoize2(createDayHeaderFormatter);
    this.slicer = new DayTableSlicer();
  }
  render() {
    const { props, context } = this;
    const { dateProfile } = props;
    const { options, dateEnv } = context;
    const dayTableModel = this.buildDayTableModel(dateProfile, context.dateProfileGenerator, dateEnv);
    const datesRepDistinctDays = dayTableModel.rowCount === 1;
    const dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dayTableModel.colCount);
    const slicedProps = this.slicer.sliceProps(props, dateProfile, options.nextDayThreshold, context, dayTableModel);
    return u2(NowTimer, { unit: "day", children: (nowDate, todayRange) => {
      const headerTiers = this.buildDateRowConfigs(dayTableModel.headerDates, datesRepDistinctDays, dateProfile, todayRange, dayHeaderFormat, context);
      return u2(DayGridLayout, {
        labelId: props.labelId,
        labelStr: props.labelStr,
        dateProfile,
        todayRange,
        cellRows: dayTableModel.cellRows,
        forPrint: props.forPrint,
        className: props.className,
        // header content
        headerTiers,
        // body content
        fgEventSegs: slicedProps.fgEventSegs,
        bgEventSegs: slicedProps.bgEventSegs,
        businessHourSegs: slicedProps.businessHourSegs,
        dateSelectionSegs: slicedProps.dateSelectionSegs,
        eventDrag: slicedProps.eventDrag,
        eventResize: slicedProps.eventResize,
        eventSelection: slicedProps.eventSelection
      });
    } });
  }
};
var dayGridPlugin = {
  name: "daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: DayGridView,
      dateProfileGeneratorClass: TableDateProfileGenerator
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      fixedWeekCount: true
    },
    dayGridYear: {
      type: "dayGrid",
      duration: { years: 1 }
    }
  }
};

// node_modules/fullcalendar/themes/classic/index.js
var xxsTextClass = "fc-classic-vQz";
var outlineWidthClass = "fc-classic-0Bj";
var outlineWidthFocusClass = "fc-classic-uqo";
var outlineOffsetClass = "fc-classic-3Xj";
var outlineInsetClass = "fc-classic-fFh";
var primaryOutlineColorClass = "fc-classic-zIi";
var strongSolidPressableClass = "fc-classic-BaR";
var mutedHoverClass = "fc-classic-4yP";
var mutedHoverPressableClass = `${mutedHoverClass} fc-classic-tCP fc-classic-8gz`;
var faintHoverClass = "fc-classic-Ubk";
var faintHoverPressableClass = `${faintHoverClass} fc-classic-OIx fc-classic-28F`;
var buttonIconClass = "fc-classic-XUJ";
var blockPointerResizerClass = "fc-classic-1EY fc-classic-pps fc-classic-vs6";
var rowPointerResizerClass = `${blockPointerResizerClass} fc-classic-AWB fc-classic-hza`;
var columnPointerResizerClass = `${blockPointerResizerClass} fc-classic-MaV fc-classic-uuA`;
var blockTouchResizerClass = "fc-classic-1EY fc-classic-3wQ fc-classic-wsy fc-classic-lNM fc-classic-Jk3 fc-classic-AAA";
var rowTouchResizerClass = `${blockTouchResizerClass} fc-classic-ERR fc-classic-Dq8`;
var columnTouchResizerClass = `${blockTouchResizerClass} fc-classic-1V6 fc-classic-F99`;
var getDayClass = (info) => joinClassNames("fc-classic-wsy", info.isMajor ? "fc-classic-C0k" : "fc-classic-C1x", info.isDisabled ? "fc-classic-iYS" : info.isToday && "fc-classic-hbn");
var getSlotClass = (info) => joinClassNames("fc-classic-wsy fc-classic-C1x", info.isMinor && "fc-classic-TN2");
var dayRowCommonClasses = {
  /* Day Row > List-Item Event
  ----------------------------------------------------------------------------------------------- */
  listItemEventClass: (info) => joinClassNames("fc-classic-Ika fc-classic-7A6 fc-classic-Fvv", info.isNarrow ? "fc-classic-148" : "fc-classic-cKZ", info.isSelected ? joinClassNames("fc-classic-k3f", info.isDragging && "fc-classic-qNs") : info.isInteractive ? mutedHoverPressableClass : mutedHoverClass),
  listItemEventBeforeClass: (info) => joinClassNames("fc-classic-Mjo", info.isNarrow ? "fc-classic-148" : "fc-classic-rVY"),
  listItemEventInnerClass: (info) => joinClassNames("fc-classic-dl1 fc-classic-1sP fc-classic-XpK fc-classic-z5u fc-classic-aTF", info.isNarrow ? xxsTextClass : "fc-classic-a3B"),
  listItemEventTimeClass: "fc-classic-F1o fc-classic-TZ4 fc-classic-pKG fc-classic-1Zl",
  listItemEventTitleClass: "fc-classic-F1o fc-classic-DIS fc-classic-TZ4 fc-classic-pKG fc-classic-OLq",
  /* Day Row > Row Event
  ----------------------------------------------------------------------------------------------- */
  rowEventClass: (info) => joinClassNames(info.isStart && joinClassNames("fc-classic-kmj", info.isNarrow ? "fc-classic-qvL" : "fc-classic-Jzj"), info.isEnd && joinClassNames("fc-classic-Skl", info.isNarrow ? "fc-classic-9hC" : "fc-classic-3e1")),
  rowEventInnerClass: "fc-classic-z5u fc-classic-aTF",
  rowEventTimeClass: "fc-classic-F1o",
  rowEventTitleClass: "fc-classic-F1o",
  /* Day Row > More-Link
  ----------------------------------------------------------------------------------------------- */
  rowMoreLinkClass: (info) => joinClassNames("fc-classic-Ika fc-classic-wsy fc-classic-Fvv", info.isNarrow ? "fc-classic-148 fc-classic-0Pr" : "fc-classic-sI7 fc-classic-cKZ fc-classic-d0j", mutedHoverPressableClass),
  rowMoreLinkInnerClass: (info) => joinClassNames("fc-classic-7A6", info.isNarrow ? xxsTextClass : "fc-classic-a3B")
};
var expanderIconClass = "fc-classic-vnf fc-classic-mAY";
var continuationArrowClass = "fc-classic-rVY fc-classic-XM3 fc-classic-rif fc-classic-lMo";
var index = {
  name: "theme-classic",
  optionDefaults: {
    className: "fc-classic-yth fc-classic-n5m",
    viewClass: (info) => {
      const hasBorderTop = info.options.headerToolbar || !info.borderlessTop;
      const hasBorderBottom = info.options.footerToolbar || !info.borderlessBottom;
      const hasBorderX = !info.borderlessX;
      return joinClassNames("fc-classic-Jk3 fc-classic-GAX fc-classic-C1x", hasBorderTop && "fc-classic-ku3", hasBorderBottom && "fc-classic-zi1", hasBorderX && "fc-classic-1Wx");
    },
    /* Toolbar
    --------------------------------------------------------------------------------------------- */
    toolbarClass: (info) => joinClassNames("fc-classic-dl1 fc-classic-1sP fc-classic-dNl fc-classic-XpK fc-classic-N2M fc-classic-wwb", info.borderlessX && "fc-classic-Apf"),
    toolbarSectionClass: "fc-classic-yi0 fc-classic-dl1 fc-classic-1sP fc-classic-XpK fc-classic-wwb",
    toolbarTitleClass: "fc-classic-AVD fc-classic-DIS",
    buttonGroupClass: "fc-classic-dl1 fc-classic-1sP fc-classic-XpK",
    buttonClass: (info) => joinClassNames("fc-classic-dl6 fc-classic-1Wx fc-classic-dl1 fc-classic-1sP fc-classic-XpK fc-classic-sOR fc-classic-lYz fc-classic-vwH fc-classic-9yp fc-classic-RnT fc-classic-cfp fc-classic-Z9U", info.isIconOnly ? "fc-classic-Eaq" : "fc-classic-Apf", info.buttonGroup ? "fc-classic-uk6 fc-classic-Tuc" : "fc-classic-Ig4", info.isSelected ? "fc-classic-rQI fc-classic-Adi" : "fc-classic-vXO fc-classic-bqK fc-classic-aIH fc-classic-nQ5 fc-classic-JWq fc-classic-9Rj fc-classic-5ky", info.isDisabled && "fc-classic-Q3Z fc-classic-3Lc"),
    buttons: {
      prev: {
        iconContent: () => chevronLeft(`${buttonIconClass} fc-classic-asP`)
      },
      next: {
        iconContent: () => chevronLeft(`${buttonIconClass} fc-classic-jmT fc-classic-jY6`)
      },
      prevYear: {
        iconContent: () => chevronsLeft(`${buttonIconClass} fc-classic-asP`)
      },
      nextYear: {
        iconContent: () => chevronsLeft(`${buttonIconClass} fc-classic-jmT fc-classic-jY6`)
      }
    },
    /* Abstract Event
    --------------------------------------------------------------------------------------------- */
    eventColor: "var(--fc-classic-event)",
    eventContrastColor: "var(--fc-classic-event-contrast)",
    eventClass: (info) => joinClassNames(info.isDragging && "fc-classic-n5m", info.event.url && "fc-classic-JiE", info.isSelected ? joinClassNames(outlineWidthClass, info.isDragging ? "fc-classic-1kP" : "fc-classic-tkw") : outlineWidthFocusClass, primaryOutlineColorClass),
    /* Background Event
    --------------------------------------------------------------------------------------------- */
    backgroundEventColor: "var(--fc-classic-background-event)",
    backgroundEventClass: "fc-classic-hsC fc-classic-jsy fc-classic-DO7",
    backgroundEventTitleClass: (info) => joinClassNames("fc-classic-MGT fc-classic-L1Y", info.isNarrow ? `fc-classic-KUX ${xxsTextClass}` : "fc-classic-XJa fc-classic-a3B"),
    /* List-Item Event
    --------------------------------------------------------------------------------------------- */
    listItemEventClass: "fc-classic-XpK",
    listItemEventBeforeClass: "fc-classic-lNM fc-classic-AAA",
    listItemEventInnerClass: "fc-classic-GAX",
    /* Block Event
    --------------------------------------------------------------------------------------------- */
    blockEventClass: (info) => joinClassNames("fc-classic-bCs fc-classic-eYX fc-classic-d0j fc-classic-DO7 fc-classic-YjJ fc-classic-vwH", info.isDragging && !info.isSelected && "fc-classic-iTG", outlineOffsetClass),
    blockEventInnerClass: "fc-classic-i9F fc-classic-cfp",
    blockEventTimeClass: "fc-classic-TZ4 fc-classic-pKG fc-classic-1Zl",
    blockEventTitleClass: "fc-classic-TZ4 fc-classic-pKG fc-classic-OLq",
    /* Row Event
    --------------------------------------------------------------------------------------------- */
    rowEventClass: (info) => joinClassNames("fc-classic-Ika fc-classic-JIC", info.isStart && "fc-classic-3J4", info.isEnd && "fc-classic-USt"),
    rowEventBeforeClass: (info) => joinClassNames(info.isStartResizable && joinClassNames(info.isSelected ? rowTouchResizerClass : rowPointerResizerClass, "fc-classic-11a")),
    rowEventAfterClass: (info) => joinClassNames(info.isEndResizable && joinClassNames(info.isSelected ? rowTouchResizerClass : rowPointerResizerClass, "fc-classic-bEw")),
    rowEventInnerClass: (info) => joinClassNames("fc-classic-dl1 fc-classic-1sP fc-classic-XpK", info.isNarrow ? xxsTextClass : "fc-classic-a3B"),
    rowEventTimeClass: "fc-classic-DIS",
    /* Column Event
    --------------------------------------------------------------------------------------------- */
    columnEventClass: (info) => joinClassNames("fc-classic-1Wx fc-classic-A3h fc-classic-yKG", info.isStart && "fc-classic-ku3 fc-classic-Z7Q", info.isEnd && "fc-classic-Ika fc-classic-zi1 fc-classic-2qh"),
    columnEventBeforeClass: (info) => joinClassNames(info.isStartResizable && joinClassNames(info.isSelected ? columnTouchResizerClass : columnPointerResizerClass, "fc-classic-YDC")),
    columnEventAfterClass: (info) => joinClassNames(info.isEndResizable && joinClassNames(info.isSelected ? columnTouchResizerClass : columnPointerResizerClass, "fc-classic-fJL")),
    columnEventInnerClass: (info) => joinClassNames("fc-classic-dl1", info.isShort ? "fc-classic-KUX fc-classic-1sP fc-classic-XpK fc-classic-NWN" : "fc-classic-oQ2 fc-classic-sgX"),
    columnEventTimeClass: (info) => joinClassNames(!info.isShort && "fc-classic-166", xxsTextClass),
    columnEventTitleClass: (info) => joinClassNames(!info.isShort && "fc-classic-2rx", info.isShort || info.isNarrow ? xxsTextClass : "fc-classic-a3B"),
    /* More-Link
    --------------------------------------------------------------------------------------------- */
    moreLinkClass: `${outlineWidthFocusClass} ${primaryOutlineColorClass}`,
    moreLinkInnerClass: "fc-classic-TZ4 fc-classic-pKG",
    columnMoreLinkClass: `fc-classic-Ika fc-classic-Fvv fc-classic-wsy fc-classic-d0j fc-classic-4MR ${strongSolidPressableClass} fc-classic-vwH fc-classic-A3h fc-classic-yKG ${outlineOffsetClass}`,
    columnMoreLinkInnerClass: (info) => joinClassNames("fc-classic-KUX", info.isNarrow ? xxsTextClass : "fc-classic-a3B"),
    /* Day Header
    --------------------------------------------------------------------------------------------- */
    dayHeaderAlign: (info) => info.inPopover ? "start" : "center",
    dayHeaderClass: (info) => joinClassNames("fc-classic-E9P", info.isDisabled && "fc-classic-iYS", info.inPopover ? "fc-classic-zi1 fc-classic-C1x fc-classic-k3f" : joinClassNames("fc-classic-wsy", info.isMajor ? "fc-classic-C0k" : "fc-classic-C1x")),
    dayHeaderInnerClass: (info) => joinClassNames("fc-classic-rVY fc-classic-cJ3 fc-classic-dl1 fc-classic-sgX", info.isNarrow ? xxsTextClass : "fc-classic-9yp"),
    dayHeaderDividerClass: "fc-classic-zi1 fc-classic-C1x",
    /* Day Cell
    --------------------------------------------------------------------------------------------- */
    dayCellClass: getDayClass,
    dayCellTopClass: (info) => joinClassNames(info.isNarrow ? "fc-classic-toR" : "fc-classic-84e", "fc-classic-dl1 fc-classic-1sP fc-classic-LMv"),
    dayCellTopInnerClass: (info) => joinClassNames("fc-classic-rVY fc-classic-TZ4", info.isNarrow ? `fc-classic-cJ3 ${xxsTextClass}` : "fc-classic-V9v fc-classic-9yp", info.isOther && "fc-classic-taq", info.monthText && "fc-classic-DIS"),
    dayCellInnerClass: (info) => joinClassNames(info.inPopover && "fc-classic-3N5"),
    /* Popover
    --------------------------------------------------------------------------------------------- */
    popoverClass: "fc-classic-Jk3 fc-classic-GAX fc-classic-wsy fc-classic-C1x fc-classic-tkw fc-classic-aNc fc-classic-n5m",
    popoverCloseClass: `fc-classic-bCs fc-classic-1EY fc-classic-2ik fc-classic-2w8 ${outlineWidthFocusClass} ${primaryOutlineColorClass} fc-classic-Z9U`,
    popoverCloseContent: () => x3("fc-classic-XUJ fc-classic-9yp fc-classic-mAY"),
    /* Lane
    --------------------------------------------------------------------------------------------- */
    dayLaneClass: getDayClass,
    dayLaneInnerClass: (info) => info.isStack ? "fc-classic-gMS" : info.isNarrow ? "fc-classic-148" : "fc-classic-Jzj fc-classic-B3G",
    slotLaneClass: getSlotClass,
    /* List Day
    --------------------------------------------------------------------------------------------- */
    listDayHeaderClass: "fc-classic-zi1 fc-classic-C1x fc-classic-SDU fc-classic-nHS fc-classic-dl1 fc-classic-1sP fc-classic-XpK fc-classic-N2M",
    listDayHeaderInnerClass: "fc-classic-Apf fc-classic-dl6 fc-classic-9yp fc-classic-DIS",
    /* Single Month (in Multi-Month)
    --------------------------------------------------------------------------------------------- */
    singleMonthClass: (info) => joinClassNames(info.multiMonthColumns > 1 && "fc-classic-jD5", info.multiMonthColumns === 1 && !info.isLast && "fc-classic-zi1 fc-classic-C1x"),
    singleMonthHeaderClass: (info) => joinClassNames(info.multiMonthColumns > 1 ? "fc-classic-cM0" : "fc-classic-dl6 fc-classic-zi1 fc-classic-C1x fc-classic-Jk3", "fc-classic-XpK"),
    singleMonthHeaderInnerClass: "fc-classic-1Po fc-classic-DIS",
    /* Misc Table
    --------------------------------------------------------------------------------------------- */
    tableHeaderClass: "fc-classic-Jk3",
    fillerClass: "fc-classic-wsy fc-classic-C1x fc-classic-lMo",
    dayHeaderRowClass: "fc-classic-wsy fc-classic-C1x",
    dayRowClass: "fc-classic-wsy fc-classic-C1x",
    slotHeaderRowClass: "fc-classic-wsy fc-classic-C1x",
    slotHeaderClass: getSlotClass,
    /* Misc Content
    --------------------------------------------------------------------------------------------- */
    navLinkClass: `fc-classic-Eu0 ${outlineWidthFocusClass} ${outlineInsetClass} ${primaryOutlineColorClass}`,
    inlineWeekNumberClass: (info) => joinClassNames("fc-classic-1EY fc-classic-n9G fc-classic-rbS fc-classic-C2g fc-classic-KUX fc-classic-HXA fc-classic-m9h fc-classic-k3f", info.isNarrow ? xxsTextClass : "fc-classic-9yp"),
    nonBusinessHoursClass: "fc-classic-iYS",
    highlightClass: "fc-classic-hLU",
    /* Resource Day Header
    --------------------------------------------------------------------------------------------- */
    resourceDayHeaderAlign: "center",
    resourceDayHeaderClass: (info) => joinClassNames("fc-classic-wsy", info.isMajor ? "fc-classic-C0k" : "fc-classic-C1x"),
    resourceDayHeaderInnerClass: (info) => joinClassNames("fc-classic-rVY fc-classic-cJ3 fc-classic-dl1 fc-classic-sgX", info.isNarrow ? xxsTextClass : "fc-classic-9yp"),
    /* Resource Data Grid
    --------------------------------------------------------------------------------------------- */
    resourceColumnHeaderClass: "fc-classic-wsy fc-classic-C1x fc-classic-E9P",
    resourceColumnHeaderInnerClass: "fc-classic-bvX fc-classic-9yp",
    resourceColumnResizerClass: "fc-classic-1EY fc-classic-AWB fc-classic-4Tv fc-classic-dnf",
    resourceGroupHeaderClass: "fc-classic-wsy fc-classic-C1x fc-classic-k3f",
    resourceGroupHeaderInnerClass: "fc-classic-bvX fc-classic-9yp",
    resourceCellClass: "fc-classic-wsy fc-classic-C1x",
    resourceCellInnerClass: "fc-classic-bvX fc-classic-9yp",
    resourceIndentClass: "fc-classic-Mde fc-classic-kp0 fc-classic-E9P",
    resourceExpanderClass: `fc-classic-bCs ${outlineWidthFocusClass} ${primaryOutlineColorClass}`,
    resourceExpanderContent: (info) => info.isExpanded ? minusSquare(expanderIconClass) : plusSquare(expanderIconClass),
    resourceHeaderRowClass: "fc-classic-wsy fc-classic-C1x",
    resourceRowClass: "fc-classic-wsy fc-classic-C1x",
    resourceColumnDividerClass: "fc-classic-1Wx fc-classic-C1x fc-classic-a7i fc-classic-k3f",
    /* Timeline Lane
    --------------------------------------------------------------------------------------------- */
    resourceGroupLaneClass: "fc-classic-wsy fc-classic-C1x fc-classic-k3f",
    resourceLaneClass: "fc-classic-wsy fc-classic-C1x",
    resourceLaneBottomClass: (info) => info.options.eventOverlap && "fc-classic-zrJ",
    timelineBottomClass: "fc-classic-zrJ"
  },
  views: {
    dayGrid: {
      ...dayRowCommonClasses,
      dayCellBottomClass: "fc-classic-toR"
    },
    multiMonth: {
      ...dayRowCommonClasses,
      dayCellBottomClass: "fc-classic-toR",
      tableClass: (info) => joinClassNames(info.multiMonthColumns > 1 && "fc-classic-C1x fc-classic-wsy")
    },
    timeGrid: {
      ...dayRowCommonClasses,
      dayCellBottomClass: "fc-classic-mhE",
      /* TimeGrid > Week Number Header
      ------------------------------------------------------------------------------------------- */
      weekNumberHeaderClass: "fc-classic-XpK fc-classic-LMv",
      weekNumberHeaderInnerClass: (info) => joinClassNames("fc-classic-rVY fc-classic-cJ3", info.isNarrow ? xxsTextClass : "fc-classic-9yp"),
      /* TimeGrid > All-Day Header
      ------------------------------------------------------------------------------------------- */
      allDayHeaderClass: "fc-classic-XpK fc-classic-LMv",
      allDayHeaderInnerClass: (info) => joinClassNames("fc-classic-rVY fc-classic-2tF fc-classic-2HE", info.isNarrow ? xxsTextClass : "fc-classic-9yp"),
      allDayDividerClass: "fc-classic-JIC fc-classic-C1x fc-classic-8ub fc-classic-k3f",
      /* TimeGrid > Slot Header
      ------------------------------------------------------------------------------------------- */
      slotHeaderClass: "fc-classic-LMv",
      slotHeaderInnerClass: (info) => joinClassNames("fc-classic-rVY fc-classic-cJ3", info.isNarrow ? xxsTextClass : "fc-classic-9yp"),
      slotHeaderDividerClass: "fc-classic-USt fc-classic-C1x",
      /* TimeGrid > Now-Indicator
      ------------------------------------------------------------------------------------------- */
      nowIndicatorHeaderClass: "fc-classic-rbS fc-classic-a10 fc-classic-XM3 fc-classic-rif fc-classic-jIH fc-classic-0qY",
      nowIndicatorLineClass: "fc-classic-ku3 fc-classic-sYT"
    },
    list: {
      /* List-View > List-Item Event
      ------------------------------------------------------------------------------------------- */
      listDayClass: (info) => joinClassNames(!info.isLast && "fc-classic-zi1 fc-classic-C1x"),
      listItemEventClass: (info) => joinClassNames("fc-classic-bCs fc-classic-Apf fc-classic-dl6 fc-classic-wwb fc-classic-ku3 fc-classic-C1x", info.isInteractive ? joinClassNames(faintHoverPressableClass, outlineInsetClass) : faintHoverClass),
      listItemEventBeforeClass: "fc-classic-GOm",
      listItemEventInnerClass: "fc-classic-eF2",
      listItemEventTimeClass: "fc-classic-88I fc-classic-yi0 fc-classic-roZ fc-classic-kMV fc-classic-TZ4 fc-classic-pKG fc-classic-IPx fc-classic-9yp",
      listItemEventTitleClass: (info) => joinClassNames("fc-classic-1El fc-classic-2KU fc-classic-TZ4 fc-classic-pKG fc-classic-9yp", info.event.url && "fc-classic-Ogp"),
      /* No-Events Screen
      ------------------------------------------------------------------------------------------- */
      noEventsClass: "fc-classic-k3f fc-classic-dl1 fc-classic-sgX fc-classic-XpK fc-classic-E9P",
      noEventsInnerClass: "fc-classic-OUe fc-classic-jGI fc-classic-P9h"
    },
    timeline: {
      /* Timeline > Row Event
      ------------------------------------------------------------------------------------------- */
      rowEventClass: (info) => joinClassNames(info.isEnd && "fc-classic-9hC", "fc-classic-XpK"),
      rowEventBeforeClass: (info) => !info.isStart && `${continuationArrowClass} fc-classic-Bda fc-classic-5JV`,
      rowEventAfterClass: (info) => !info.isEnd && `${continuationArrowClass} fc-classic-hhi fc-classic-LaM`,
      rowEventInnerClass: (info) => info.options.eventOverlap ? "fc-classic-2rx" : "fc-classic-End",
      rowEventTimeClass: "fc-classic-oQ2",
      rowEventTitleClass: "fc-classic-oQ2",
      /* Timeline > More-Link
      ------------------------------------------------------------------------------------------- */
      rowMoreLinkClass: `fc-classic-9hC fc-classic-Ika fc-classic-wsy fc-classic-d0j fc-classic-4MR ${strongSolidPressableClass} fc-classic-vwH`,
      rowMoreLinkInnerClass: "fc-classic-KUX fc-classic-a3B",
      /* Timeline > Slot Header
      ------------------------------------------------------------------------------------------- */
      slotHeaderAlign: (info) => info.isTime ? "start" : "center",
      slotHeaderClass: (info) => joinClassNames("fc-classic-E9P", !info.level && "fc-classic-pKG"),
      slotHeaderInnerClass: (info) => joinClassNames("fc-classic-fn8 fc-classic-V9v fc-classic-9yp", info.hasNavLink && "fc-classic-Eu0"),
      slotHeaderDividerClass: "fc-classic-zi1 fc-classic-C1x",
      /* Timeline > Now-Indicator
      ------------------------------------------------------------------------------------------- */
      nowIndicatorHeaderClass: "fc-classic-n9G fc-classic-J04 fc-classic-ybF fc-classic-Pqk fc-classic-bLA fc-classic-sYT",
      nowIndicatorLineClass: "fc-classic-3J4 fc-classic-sYT"
    }
  }
};
function chevronLeft(className) {
  return u2("svg", { xmlns: "http://www.w3.org/2000/svg", className, width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: u2("polyline", { points: "15 18 9 12 15 6" }) });
}
function chevronsLeft(className) {
  return u2("svg", { xmlns: "http://www.w3.org/2000/svg", className, width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [u2("polyline", { points: "11 17 6 12 11 7" }), u2("polyline", { points: "18 17 13 12 18 7" })] });
}
function x3(className) {
  return u2("svg", { xmlns: "http://www.w3.org/2000/svg", className, width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [u2("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), u2("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] });
}
function plusSquare(className) {
  return u2("svg", { xmlns: "http://www.w3.org/2000/svg", className, width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [u2("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }), u2("line", { x1: "12", y1: "8", x2: "12", y2: "16" }), u2("line", { x1: "8", y1: "12", x2: "16", y2: "12" })] });
}
function minusSquare(className) {
  return u2("svg", { xmlns: "http://www.w3.org/2000/svg", className, width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [u2("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }), u2("line", { x1: "8", y1: "12", x2: "16", y2: "12" })] });
}

// source/js/calendar.js
var CALENDAR_ELEMENT_NAME = "lesli-calendar";
var DEFAULT_EVENTS_URL = "/calendar/events.json";
var VIEWPORT_BREAKPOINTS = Object.freeze({
  tablet: 768,
  desktop: 1024
});
function getCalendarView(viewportWidth = window.innerWidth) {
  if (viewportWidth < VIEWPORT_BREAKPOINTS.tablet) return "dayGridDay";
  if (viewportWidth < VIEWPORT_BREAKPOINTS.desktop) return "dayGridWeek";
  return "dayGridMonth";
}
function handleEventsFailure(error) {
  console.error("Lesli Calendar could not load its events.", error);
}
function decorateDayCell({ el, isToday }) {
  el.classList.add("lesli-calendar-day");
  el.classList.toggle("is-today", isToday);
}
function decorateDayHeader({ el }) {
  el.classList.add("lesli-calendar-day-header");
}
function decorateEvent({ el }) {
  el.classList.add("lesli-calendar-event");
}
function renderTextContent(className, text) {
  const element = document.createElement("span");
  element.className = className;
  element.textContent = text;
  return { domNodes: [element] };
}
var LesliCalendarElement = class extends HTMLElement {
  constructor() {
    super();
    this.calendar = null;
    this.lifecycleController = null;
    this.destroyCalendar = this.destroyCalendar.bind(this);
    this.handleCalendarResize = this.handleCalendarResize.bind(this);
  }
  /**
   * Render when the element becomes part of the document.
   */
  connectedCallback() {
    this.registerLifecycleEvents();
    this.renderCalendar();
  }
  /**
   * Release resources when Turbo or the browser removes the element.
   */
  disconnectedCallback() {
    this.lifecycleController?.abort();
    this.lifecycleController = null;
    this.destroyCalendar();
  }
  /**
   * Ensure Turbo caches the original empty container instead of generated
   * FullCalendar markup. AbortController also makes listener cleanup clear.
   */
  registerLifecycleEvents() {
    this.lifecycleController?.abort();
    this.lifecycleController = new AbortController();
    document.addEventListener(
      "turbo:before-cache",
      this.destroyCalendar,
      { signal: this.lifecycleController.signal }
    );
  }
  /**
   * Build the FullCalendar options separately from rendering.
   * New features can be added here without changing lifecycle behavior.
   */
  getCalendarOptions() {
    return {
      plugins: [dayGridPlugin, index],
      firstDay: 1,
      headerToolbar: false,
      initialView: getCalendarView(),
      showNonCurrentDates: true,
      dayMaxEvents: true,
      borderless: true,
      displayEventTime: false,
      views: {
        dayGrid: {
          listItemEventBeforeClass: "lesli-calendar-event-dot"
        }
      },
      dayCellDidMount: decorateDayCell,
      dayHeaderDidMount: decorateDayHeader,
      eventDidMount: decorateEvent,
      dayCellTopContent: (info) => renderTextContent(
        "lesli-calendar-day-number",
        info.dayNumberText
      ),
      dayHeaderContent: (info) => renderTextContent(
        "lesli-calendar-day-header-label",
        info.text
      ),
      eventContent: (info) => renderTextContent(
        "lesli-calendar-event-title",
        info.event.title
      ),
      windowResize: this.handleCalendarResize,
      events: {
        url: this.dataset.eventsUrl || DEFAULT_EVENTS_URL,
        method: "GET",
        failure: handleEventsFailure
      }
    };
  }
  /**
   * Keep the active view synchronized with the responsive breakpoint.
   * FullCalendar owns this resize callback and removes it on destroy().
   */
  handleCalendarResize(resizeInfo) {
    const nextView = getCalendarView();
    if (resizeInfo.view.type !== nextView) {
      this.calendar?.changeView(nextView);
    }
  }
  /**
   * Render exactly one calendar for this element.
   *
   * replaceChildren() removes markup from a restored Turbo snapshot before
   * FullCalendar starts, while destroyCalendar() makes repeated calls safe.
   */
  renderCalendar() {
    this.destroyCalendar();
    this.replaceChildren();
    this.calendar = new Calendar(this, this.getCalendarOptions());
    this.calendar.render();
  }
  /**
   * Release FullCalendar's DOM, network and resize resources.
   * Calling this method repeatedly is safe.
   */
  destroyCalendar() {
    this.calendar?.destroy();
    this.calendar = null;
  }
};
if (!customElements.get(CALENDAR_ELEMENT_NAME)) {
  customElements.define(CALENDAR_ELEMENT_NAME, LesliCalendarElement);
}
/*
Lesli

Copyright (c) 2025, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see http://www.gnu.org/licenses/.

Lesli · Ruby on Rails SaaS Development Framework.

Made with ♥ by LesliTech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/
//# sourceMappingURL=calendar.js.map
