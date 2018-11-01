function u(e) {
  if ("number" == typeof e) return e;
  if (a(e)) return s;
  if (i(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = i(t) ? t + "" : t
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(l, "");
  var n = m.test(e);
  return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
}
