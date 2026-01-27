(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to3, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to3, key) && key !== except)
          __defProp(to3, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to3;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/dayjs/dayjs.min.js
  var require_dayjs_min = __commonJS({
    "node_modules/dayjs/dayjs.min.js"(exports, module) {
      !function(t3, e2) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e2() : "function" == typeof define && define.amd ? define(e2) : (t3 = "undefined" != typeof globalThis ? globalThis : t3 || self).dayjs = e2();
      }(exports, function() {
        "use strict";
        var t3 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i2 = "second", s2 = "minute", u2 = "hour", a2 = "day", o2 = "week", c2 = "month", f2 = "quarter", h3 = "year", d2 = "date", l2 = "Invalid Date", $2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t4) {
          var e3 = ["th", "st", "nd", "rd"], n3 = t4 % 100;
          return "[" + t4 + (e3[(n3 - 20) % 10] || e3[n3] || e3[0]) + "]";
        } }, m2 = function(t4, e3, n3) {
          var r3 = String(t4);
          return !r3 || r3.length >= e3 ? t4 : "" + Array(e3 + 1 - r3.length).join(n3) + t4;
        }, v2 = { s: m2, z: function(t4) {
          var e3 = -t4.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i3 = n3 % 60;
          return (e3 <= 0 ? "+" : "-") + m2(r3, 2, "0") + ":" + m2(i3, 2, "0");
        }, m: function t4(e3, n3) {
          if (e3.date() < n3.date()) return -t4(n3, e3);
          var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i3 = e3.clone().add(r3, c2), s3 = n3 - i3 < 0, u3 = e3.clone().add(r3 + (s3 ? -1 : 1), c2);
          return +(-(r3 + (n3 - i3) / (s3 ? i3 - u3 : u3 - i3)) || 0);
        }, a: function(t4) {
          return t4 < 0 ? Math.ceil(t4) || 0 : Math.floor(t4);
        }, p: function(t4) {
          return { M: c2, y: h3, w: o2, d: a2, D: d2, h: u2, m: s2, s: i2, ms: r2, Q: f2 }[t4] || String(t4 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t4) {
          return void 0 === t4;
        } }, g2 = "en", D2 = {};
        D2[g2] = M2;
        var p2 = "$isDayjsObject", S2 = function(t4) {
          return t4 instanceof _2 || !(!t4 || !t4[p2]);
        }, w2 = function t4(e3, n3, r3) {
          var i3;
          if (!e3) return g2;
          if ("string" == typeof e3) {
            var s3 = e3.toLowerCase();
            D2[s3] && (i3 = s3), n3 && (D2[s3] = n3, i3 = s3);
            var u3 = e3.split("-");
            if (!i3 && u3.length > 1) return t4(u3[0]);
          } else {
            var a3 = e3.name;
            D2[a3] = e3, i3 = a3;
          }
          return !r3 && i3 && (g2 = i3), i3 || !r3 && g2;
        }, O2 = function(t4, e3) {
          if (S2(t4)) return t4.clone();
          var n3 = "object" == typeof e3 ? e3 : {};
          return n3.date = t4, n3.args = arguments, new _2(n3);
        }, b2 = v2;
        b2.l = w2, b2.i = S2, b2.w = function(t4, e3) {
          return O2(t4, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
        };
        var _2 = function() {
          function M3(t4) {
            this.$L = w2(t4.locale, null, true), this.parse(t4), this.$x = this.$x || t4.x || {}, this[p2] = true;
          }
          var m3 = M3.prototype;
          return m3.parse = function(t4) {
            this.$d = function(t5) {
              var e3 = t5.date, n3 = t5.utc;
              if (null === e3) return /* @__PURE__ */ new Date(NaN);
              if (b2.u(e3)) return /* @__PURE__ */ new Date();
              if (e3 instanceof Date) return new Date(e3);
              if ("string" == typeof e3 && !/Z$/i.test(e3)) {
                var r3 = e3.match($2);
                if (r3) {
                  var i3 = r3[2] - 1 || 0, s3 = (r3[7] || "0").substring(0, 3);
                  return n3 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3);
                }
              }
              return new Date(e3);
            }(t4), this.init();
          }, m3.init = function() {
            var t4 = this.$d;
            this.$y = t4.getFullYear(), this.$M = t4.getMonth(), this.$D = t4.getDate(), this.$W = t4.getDay(), this.$H = t4.getHours(), this.$m = t4.getMinutes(), this.$s = t4.getSeconds(), this.$ms = t4.getMilliseconds();
          }, m3.$utils = function() {
            return b2;
          }, m3.isValid = function() {
            return !(this.$d.toString() === l2);
          }, m3.isSame = function(t4, e3) {
            var n3 = O2(t4);
            return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
          }, m3.isAfter = function(t4, e3) {
            return O2(t4) < this.startOf(e3);
          }, m3.isBefore = function(t4, e3) {
            return this.endOf(e3) < O2(t4);
          }, m3.$g = function(t4, e3, n3) {
            return b2.u(t4) ? this[e3] : this.set(n3, t4);
          }, m3.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m3.valueOf = function() {
            return this.$d.getTime();
          }, m3.startOf = function(t4, e3) {
            var n3 = this, r3 = !!b2.u(e3) || e3, f3 = b2.p(t4), l3 = function(t5, e4) {
              var i3 = b2.w(n3.$u ? Date.UTC(n3.$y, e4, t5) : new Date(n3.$y, e4, t5), n3);
              return r3 ? i3 : i3.endOf(a2);
            }, $3 = function(t5, e4) {
              return b2.w(n3.toDate()[t5].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
            }, y3 = this.$W, M4 = this.$M, m4 = this.$D, v3 = "set" + (this.$u ? "UTC" : "");
            switch (f3) {
              case h3:
                return r3 ? l3(1, 0) : l3(31, 11);
              case c2:
                return r3 ? l3(1, M4) : l3(0, M4 + 1);
              case o2:
                var g3 = this.$locale().weekStart || 0, D3 = (y3 < g3 ? y3 + 7 : y3) - g3;
                return l3(r3 ? m4 - D3 : m4 + (6 - D3), M4);
              case a2:
              case d2:
                return $3(v3 + "Hours", 0);
              case u2:
                return $3(v3 + "Minutes", 1);
              case s2:
                return $3(v3 + "Seconds", 2);
              case i2:
                return $3(v3 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m3.endOf = function(t4) {
            return this.startOf(t4, false);
          }, m3.$set = function(t4, e3) {
            var n3, o3 = b2.p(t4), f3 = "set" + (this.$u ? "UTC" : ""), l3 = (n3 = {}, n3[a2] = f3 + "Date", n3[d2] = f3 + "Date", n3[c2] = f3 + "Month", n3[h3] = f3 + "FullYear", n3[u2] = f3 + "Hours", n3[s2] = f3 + "Minutes", n3[i2] = f3 + "Seconds", n3[r2] = f3 + "Milliseconds", n3)[o3], $3 = o3 === a2 ? this.$D + (e3 - this.$W) : e3;
            if (o3 === c2 || o3 === h3) {
              var y3 = this.clone().set(d2, 1);
              y3.$d[l3]($3), y3.init(), this.$d = y3.set(d2, Math.min(this.$D, y3.daysInMonth())).$d;
            } else l3 && this.$d[l3]($3);
            return this.init(), this;
          }, m3.set = function(t4, e3) {
            return this.clone().$set(t4, e3);
          }, m3.get = function(t4) {
            return this[b2.p(t4)]();
          }, m3.add = function(r3, f3) {
            var d3, l3 = this;
            r3 = Number(r3);
            var $3 = b2.p(f3), y3 = function(t4) {
              var e3 = O2(l3);
              return b2.w(e3.date(e3.date() + Math.round(t4 * r3)), l3);
            };
            if ($3 === c2) return this.set(c2, this.$M + r3);
            if ($3 === h3) return this.set(h3, this.$y + r3);
            if ($3 === a2) return y3(1);
            if ($3 === o2) return y3(7);
            var M4 = (d3 = {}, d3[s2] = e2, d3[u2] = n2, d3[i2] = t3, d3)[$3] || 1, m4 = this.$d.getTime() + r3 * M4;
            return b2.w(m4, this);
          }, m3.subtract = function(t4, e3) {
            return this.add(-1 * t4, e3);
          }, m3.format = function(t4) {
            var e3 = this, n3 = this.$locale();
            if (!this.isValid()) return n3.invalidDate || l2;
            var r3 = t4 || "YYYY-MM-DDTHH:mm:ssZ", i3 = b2.z(this), s3 = this.$H, u3 = this.$m, a3 = this.$M, o3 = n3.weekdays, c3 = n3.months, f3 = n3.meridiem, h4 = function(t5, n4, i4, s4) {
              return t5 && (t5[n4] || t5(e3, r3)) || i4[n4].slice(0, s4);
            }, d3 = function(t5) {
              return b2.s(s3 % 12 || 12, t5, "0");
            }, $3 = f3 || function(t5, e4, n4) {
              var r4 = t5 < 12 ? "AM" : "PM";
              return n4 ? r4.toLowerCase() : r4;
            };
            return r3.replace(y2, function(t5, r4) {
              return r4 || function(t6) {
                switch (t6) {
                  case "YY":
                    return String(e3.$y).slice(-2);
                  case "YYYY":
                    return b2.s(e3.$y, 4, "0");
                  case "M":
                    return a3 + 1;
                  case "MM":
                    return b2.s(a3 + 1, 2, "0");
                  case "MMM":
                    return h4(n3.monthsShort, a3, c3, 3);
                  case "MMMM":
                    return h4(c3, a3);
                  case "D":
                    return e3.$D;
                  case "DD":
                    return b2.s(e3.$D, 2, "0");
                  case "d":
                    return String(e3.$W);
                  case "dd":
                    return h4(n3.weekdaysMin, e3.$W, o3, 2);
                  case "ddd":
                    return h4(n3.weekdaysShort, e3.$W, o3, 3);
                  case "dddd":
                    return o3[e3.$W];
                  case "H":
                    return String(s3);
                  case "HH":
                    return b2.s(s3, 2, "0");
                  case "h":
                    return d3(1);
                  case "hh":
                    return d3(2);
                  case "a":
                    return $3(s3, u3, true);
                  case "A":
                    return $3(s3, u3, false);
                  case "m":
                    return String(u3);
                  case "mm":
                    return b2.s(u3, 2, "0");
                  case "s":
                    return String(e3.$s);
                  case "ss":
                    return b2.s(e3.$s, 2, "0");
                  case "SSS":
                    return b2.s(e3.$ms, 3, "0");
                  case "Z":
                    return i3;
                }
                return null;
              }(t5) || i3.replace(":", "");
            });
          }, m3.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m3.diff = function(r3, d3, l3) {
            var $3, y3 = this, M4 = b2.p(d3), m4 = O2(r3), v3 = (m4.utcOffset() - this.utcOffset()) * e2, g3 = this - m4, D3 = function() {
              return b2.m(y3, m4);
            };
            switch (M4) {
              case h3:
                $3 = D3() / 12;
                break;
              case c2:
                $3 = D3();
                break;
              case f2:
                $3 = D3() / 3;
                break;
              case o2:
                $3 = (g3 - v3) / 6048e5;
                break;
              case a2:
                $3 = (g3 - v3) / 864e5;
                break;
              case u2:
                $3 = g3 / n2;
                break;
              case s2:
                $3 = g3 / e2;
                break;
              case i2:
                $3 = g3 / t3;
                break;
              default:
                $3 = g3;
            }
            return l3 ? $3 : b2.a($3);
          }, m3.daysInMonth = function() {
            return this.endOf(c2).$D;
          }, m3.$locale = function() {
            return D2[this.$L];
          }, m3.locale = function(t4, e3) {
            if (!t4) return this.$L;
            var n3 = this.clone(), r3 = w2(t4, e3, true);
            return r3 && (n3.$L = r3), n3;
          }, m3.clone = function() {
            return b2.w(this.$d, this);
          }, m3.toDate = function() {
            return new Date(this.valueOf());
          }, m3.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m3.toISOString = function() {
            return this.$d.toISOString();
          }, m3.toString = function() {
            return this.$d.toUTCString();
          }, M3;
        }(), k2 = _2.prototype;
        return O2.prototype = k2, [["$ms", r2], ["$s", i2], ["$m", s2], ["$H", u2], ["$W", a2], ["$M", c2], ["$y", h3], ["$D", d2]].forEach(function(t4) {
          k2[t4[1]] = function(e3) {
            return this.$g(e3, t4[0], t4[1]);
          };
        }), O2.extend = function(t4, e3) {
          return t4.$i || (t4(e3, _2, O2), t4.$i = true), O2;
        }, O2.locale = w2, O2.isDayjs = S2, O2.unix = function(t4) {
          return O2(1e3 * t4);
        }, O2.en = D2[g2], O2.Ls = D2, O2.p = {}, O2;
      });
    }
  });

  // lib/lesli_assets_js/lesli_chart.js
  var require_lesli_chart = __commonJS({
    "lib/lesli_assets_js/lesli_chart.js"(exports, module) {
      var LesliChart2 = class {
        /**
         * Render a chart inside a container
         *
         * @param {Object} config
         * @param {String} config.id        DOM id
         * @param {String} config.type      "bar" | "line"
         * @param {Array}  config.series    Apex-style series
         * @param {Array}  config.labels    X-axis labels
         * @param {Boolean} config.compact  Sparkline mode
         */
        constructor(config) {
          const container = document.getElementById(config.id);
          if (!container) return;
          container.innerHTML = "";
          const canvas = document.createElement("canvas");
          container.appendChild(canvas);
          const ctx = canvas.getContext("2d");
          const datasets = config.series.map((serie) => ({
            // Dataset label (used in legend and tooltips)
            label: serie.name,
            // Actual data values
            data: serie.data,
            // Smooth curves for line charts (0 = straight lines)
            tension: config.type === "line" ? 0.4 : 0,
            // Rounded corners for bar charts
            borderRadius: config.type === "bar" ? 6 : 0,
            // Prevent bars from being clipped
            borderSkipped: false,
            // Disable area fill (line charts only show the line)
            fill: false
          }));
          const chartConfig = {
            // Chart type: "bar" or "line"
            type: config.type,
            // Chart data definition
            data: {
              // X-axis labels
              labels: config.labels,
              // Series data
              datasets
            },
            // Chart behavior and appearance options
            options: {
              // Automatically resize with container
              responsive: true,
              // Allow manual height control via CSS
              maintainAspectRatio: false,
              // Plugin configuration
              plugins: {
                // Legend configuration
                legend: {
                  display: true,
                  position: "top",
                  align: "center"
                },
                // Tooltip behavior
                tooltip: {
                  enabled: true
                }
              },
              // Axis configuration
              scales: {
                x: {
                  // Show X axis
                  display: true,
                  // X-axis label styling
                  ticks: {
                    maxRotation: 65,
                    minRotation: 65,
                    font: { size: 15 }
                  },
                  // Hide vertical grid lines
                  grid: {
                    display: false
                  }
                },
                y: {
                  // Show Y axis
                  display: true,
                  // Hide horizontal grid lines
                  grid: {
                    display: false
                  }
                }
              },
              // Click handler for points/bars.
              onClick: (event, elements2) => {
                if (!elements2.length) return;
                const element = elements2[0];
                emit("markerClick", {
                  seriesIndex: element.datasetIndex,
                  dataPointIndex: element.index
                });
              }
            }
          };
          if (config.compact) {
            chartConfig.options.plugins.legend.display = false;
            chartConfig.options.scales.x.display = false;
            chartConfig.options.scales.y.display = false;
            if (config.type === "line") {
              chartConfig.options.layout = {
                padding: { top: 14, right: 0, bottom: 6, left: 0 }
              };
            }
          }
          new ChartJs(ctx, chartConfig);
        }
      };
      module.exports = LesliChart2;
    }
  });

  // node_modules/lesli-js/node_modules/dayjs/dayjs.min.js
  var require_dayjs_min2 = __commonJS({
    "node_modules/lesli-js/node_modules/dayjs/dayjs.min.js"(exports, module) {
      !function(t3, e2) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e2() : "function" == typeof define && define.amd ? define(e2) : (t3 = "undefined" != typeof globalThis ? globalThis : t3 || self).dayjs = e2();
      }(exports, function() {
        "use strict";
        var t3 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i2 = "second", s2 = "minute", u2 = "hour", a2 = "day", o2 = "week", f2 = "month", h3 = "quarter", c2 = "year", d2 = "date", $2 = "Invalid Date", l2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m2 = function(t4, e3, n3) {
          var r3 = String(t4);
          return !r3 || r3.length >= e3 ? t4 : "" + Array(e3 + 1 - r3.length).join(n3) + t4;
        }, g2 = { s: m2, z: function(t4) {
          var e3 = -t4.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i3 = n3 % 60;
          return (e3 <= 0 ? "+" : "-") + m2(r3, 2, "0") + ":" + m2(i3, 2, "0");
        }, m: function t4(e3, n3) {
          if (e3.date() < n3.date()) return -t4(n3, e3);
          var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i3 = e3.clone().add(r3, f2), s3 = n3 - i3 < 0, u3 = e3.clone().add(r3 + (s3 ? -1 : 1), f2);
          return +(-(r3 + (n3 - i3) / (s3 ? i3 - u3 : u3 - i3)) || 0);
        }, a: function(t4) {
          return t4 < 0 ? Math.ceil(t4) || 0 : Math.floor(t4);
        }, p: function(t4) {
          return { M: f2, y: c2, w: o2, d: a2, D: d2, h: u2, m: s2, s: i2, ms: r2, Q: h3 }[t4] || String(t4 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t4) {
          return void 0 === t4;
        } }, D2 = "en", v2 = {};
        v2[D2] = M2;
        var p2 = function(t4) {
          return t4 instanceof _2;
        }, S2 = function(t4, e3, n3) {
          var r3;
          if (!t4) return D2;
          if ("string" == typeof t4) v2[t4] && (r3 = t4), e3 && (v2[t4] = e3, r3 = t4);
          else {
            var i3 = t4.name;
            v2[i3] = t4, r3 = i3;
          }
          return !n3 && r3 && (D2 = r3), r3 || !n3 && D2;
        }, w2 = function(t4, e3) {
          if (p2(t4)) return t4.clone();
          var n3 = "object" == typeof e3 ? e3 : {};
          return n3.date = t4, n3.args = arguments, new _2(n3);
        }, O2 = g2;
        O2.l = S2, O2.i = p2, O2.w = function(t4, e3) {
          return w2(t4, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
        };
        var _2 = function() {
          function M3(t4) {
            this.$L = S2(t4.locale, null, true), this.parse(t4);
          }
          var m3 = M3.prototype;
          return m3.parse = function(t4) {
            this.$d = function(t5) {
              var e3 = t5.date, n3 = t5.utc;
              if (null === e3) return /* @__PURE__ */ new Date(NaN);
              if (O2.u(e3)) return /* @__PURE__ */ new Date();
              if (e3 instanceof Date) return new Date(e3);
              if ("string" == typeof e3 && !/Z$/i.test(e3)) {
                var r3 = e3.match(l2);
                if (r3) {
                  var i3 = r3[2] - 1 || 0, s3 = (r3[7] || "0").substring(0, 3);
                  return n3 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3);
                }
              }
              return new Date(e3);
            }(t4), this.$x = t4.x || {}, this.init();
          }, m3.init = function() {
            var t4 = this.$d;
            this.$y = t4.getFullYear(), this.$M = t4.getMonth(), this.$D = t4.getDate(), this.$W = t4.getDay(), this.$H = t4.getHours(), this.$m = t4.getMinutes(), this.$s = t4.getSeconds(), this.$ms = t4.getMilliseconds();
          }, m3.$utils = function() {
            return O2;
          }, m3.isValid = function() {
            return !(this.$d.toString() === $2);
          }, m3.isSame = function(t4, e3) {
            var n3 = w2(t4);
            return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
          }, m3.isAfter = function(t4, e3) {
            return w2(t4) < this.startOf(e3);
          }, m3.isBefore = function(t4, e3) {
            return this.endOf(e3) < w2(t4);
          }, m3.$g = function(t4, e3, n3) {
            return O2.u(t4) ? this[e3] : this.set(n3, t4);
          }, m3.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m3.valueOf = function() {
            return this.$d.getTime();
          }, m3.startOf = function(t4, e3) {
            var n3 = this, r3 = !!O2.u(e3) || e3, h4 = O2.p(t4), $3 = function(t5, e4) {
              var i3 = O2.w(n3.$u ? Date.UTC(n3.$y, e4, t5) : new Date(n3.$y, e4, t5), n3);
              return r3 ? i3 : i3.endOf(a2);
            }, l3 = function(t5, e4) {
              return O2.w(n3.toDate()[t5].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
            }, y3 = this.$W, M4 = this.$M, m4 = this.$D, g3 = "set" + (this.$u ? "UTC" : "");
            switch (h4) {
              case c2:
                return r3 ? $3(1, 0) : $3(31, 11);
              case f2:
                return r3 ? $3(1, M4) : $3(0, M4 + 1);
              case o2:
                var D3 = this.$locale().weekStart || 0, v3 = (y3 < D3 ? y3 + 7 : y3) - D3;
                return $3(r3 ? m4 - v3 : m4 + (6 - v3), M4);
              case a2:
              case d2:
                return l3(g3 + "Hours", 0);
              case u2:
                return l3(g3 + "Minutes", 1);
              case s2:
                return l3(g3 + "Seconds", 2);
              case i2:
                return l3(g3 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m3.endOf = function(t4) {
            return this.startOf(t4, false);
          }, m3.$set = function(t4, e3) {
            var n3, o3 = O2.p(t4), h4 = "set" + (this.$u ? "UTC" : ""), $3 = (n3 = {}, n3[a2] = h4 + "Date", n3[d2] = h4 + "Date", n3[f2] = h4 + "Month", n3[c2] = h4 + "FullYear", n3[u2] = h4 + "Hours", n3[s2] = h4 + "Minutes", n3[i2] = h4 + "Seconds", n3[r2] = h4 + "Milliseconds", n3)[o3], l3 = o3 === a2 ? this.$D + (e3 - this.$W) : e3;
            if (o3 === f2 || o3 === c2) {
              var y3 = this.clone().set(d2, 1);
              y3.$d[$3](l3), y3.init(), this.$d = y3.set(d2, Math.min(this.$D, y3.daysInMonth())).$d;
            } else $3 && this.$d[$3](l3);
            return this.init(), this;
          }, m3.set = function(t4, e3) {
            return this.clone().$set(t4, e3);
          }, m3.get = function(t4) {
            return this[O2.p(t4)]();
          }, m3.add = function(r3, h4) {
            var d3, $3 = this;
            r3 = Number(r3);
            var l3 = O2.p(h4), y3 = function(t4) {
              var e3 = w2($3);
              return O2.w(e3.date(e3.date() + Math.round(t4 * r3)), $3);
            };
            if (l3 === f2) return this.set(f2, this.$M + r3);
            if (l3 === c2) return this.set(c2, this.$y + r3);
            if (l3 === a2) return y3(1);
            if (l3 === o2) return y3(7);
            var M4 = (d3 = {}, d3[s2] = e2, d3[u2] = n2, d3[i2] = t3, d3)[l3] || 1, m4 = this.$d.getTime() + r3 * M4;
            return O2.w(m4, this);
          }, m3.subtract = function(t4, e3) {
            return this.add(-1 * t4, e3);
          }, m3.format = function(t4) {
            var e3 = this, n3 = this.$locale();
            if (!this.isValid()) return n3.invalidDate || $2;
            var r3 = t4 || "YYYY-MM-DDTHH:mm:ssZ", i3 = O2.z(this), s3 = this.$H, u3 = this.$m, a3 = this.$M, o3 = n3.weekdays, f3 = n3.months, h4 = function(t5, n4, i4, s4) {
              return t5 && (t5[n4] || t5(e3, r3)) || i4[n4].substr(0, s4);
            }, c3 = function(t5) {
              return O2.s(s3 % 12 || 12, t5, "0");
            }, d3 = n3.meridiem || function(t5, e4, n4) {
              var r4 = t5 < 12 ? "AM" : "PM";
              return n4 ? r4.toLowerCase() : r4;
            }, l3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a3 + 1, MM: O2.s(a3 + 1, 2, "0"), MMM: h4(n3.monthsShort, a3, f3, 3), MMMM: h4(f3, a3), D: this.$D, DD: O2.s(this.$D, 2, "0"), d: String(this.$W), dd: h4(n3.weekdaysMin, this.$W, o3, 2), ddd: h4(n3.weekdaysShort, this.$W, o3, 3), dddd: o3[this.$W], H: String(s3), HH: O2.s(s3, 2, "0"), h: c3(1), hh: c3(2), a: d3(s3, u3, true), A: d3(s3, u3, false), m: String(u3), mm: O2.s(u3, 2, "0"), s: String(this.$s), ss: O2.s(this.$s, 2, "0"), SSS: O2.s(this.$ms, 3, "0"), Z: i3 };
            return r3.replace(y2, function(t5, e4) {
              return e4 || l3[t5] || i3.replace(":", "");
            });
          }, m3.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m3.diff = function(r3, d3, $3) {
            var l3, y3 = O2.p(d3), M4 = w2(r3), m4 = (M4.utcOffset() - this.utcOffset()) * e2, g3 = this - M4, D3 = O2.m(this, M4);
            return D3 = (l3 = {}, l3[c2] = D3 / 12, l3[f2] = D3, l3[h3] = D3 / 3, l3[o2] = (g3 - m4) / 6048e5, l3[a2] = (g3 - m4) / 864e5, l3[u2] = g3 / n2, l3[s2] = g3 / e2, l3[i2] = g3 / t3, l3)[y3] || g3, $3 ? D3 : O2.a(D3);
          }, m3.daysInMonth = function() {
            return this.endOf(f2).$D;
          }, m3.$locale = function() {
            return v2[this.$L];
          }, m3.locale = function(t4, e3) {
            if (!t4) return this.$L;
            var n3 = this.clone(), r3 = S2(t4, e3, true);
            return r3 && (n3.$L = r3), n3;
          }, m3.clone = function() {
            return O2.w(this.$d, this);
          }, m3.toDate = function() {
            return new Date(this.valueOf());
          }, m3.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m3.toISOString = function() {
            return this.$d.toISOString();
          }, m3.toString = function() {
            return this.$d.toUTCString();
          }, M3;
        }(), b2 = _2.prototype;
        return w2.prototype = b2, [["$ms", r2], ["$s", i2], ["$m", s2], ["$H", u2], ["$W", a2], ["$M", f2], ["$y", c2], ["$D", d2]].forEach(function(t4) {
          b2[t4[1]] = function(e3) {
            return this.$g(e3, t4[0], t4[1]);
          };
        }), w2.extend = function(t4, e3) {
          return t4.$i || (t4(e3, _2, w2), t4.$i = true), w2;
        }, w2.locale = S2, w2.isDayjs = p2, w2.unix = function(t4) {
          return w2(1e3 * t4);
        }, w2.en = v2[D2], w2.Ls = v2, w2.p = {}, w2;
      });
    }
  });

  // node_modules/lesli-js/src/debug/utils.js
  var require_utils = __commonJS({
    "node_modules/lesli-js/src/debug/utils.js"(exports, module) {
      var dayjs2 = require_dayjs_min2();
      var Utils = class {
        // · 
        buildDate() {
          return dayjs2().format("MM/DD HH:mm").toString();
        }
        // · 
        buildMessage(message, module2, level) {
          let newMessage = `[${this.buildDate()}] [${level.toUpperCase()}]`;
          if (module2) {
            newMessage += ` (${module2})`;
          }
          newMessage = newMessage.concat(" - ").concat(message);
          return newMessage;
        }
        // · 
        stylesForBrowser(type) {
          let lineheight = "1.5;";
          let fontsize = "14px;";
          let padding = "2px;";
          let info = "background-color:#3498db;color:#ffffff;";
          let warn2 = "background-color:#f1c40f;color:#000000;";
          let error2 = "background-color:#e74c3c;color:#ffffff;";
          let fatal = "background-color:#c0392b;color:#fff394;";
          let success = "background-color:##48c774;color:#000000;";
          let style = "";
          switch (type) {
            case "info":
              style = info;
              break;
            case "warn":
              style = warn2;
              break;
            case "error":
              style = error2;
              break;
            case "fatal":
              style = fatal;
              break;
            case "success":
              style = success;
              break;
          }
          style += "padding:" + padding;
          style += "font-size:" + fontsize;
          style += "line-height:" + lineheight;
          return style;
        }
        // · 
        print_r(data2, level = 1) {
          let isArray3 = Array.isArray(data2);
          let comma = ",";
          let string = "";
          let padding_key = "";
          let padding_prop = "";
          let newline = "\n";
          for (let i2 = 0; i2 < 4 * level; i2++) {
            padding_prop += " ";
          }
          if (level > 1) {
            padding_key = padding_prop.slice(0, padding_prop.length - 4);
          }
          if (typeof data2 == "object" && !Array.isArray(data2)) {
            string += padding_key + "{" + newline;
            for (let property in data2) {
              if (typeof data2[property] == "object") {
                string += padding_prop + property + ": " + this.print_r(data2[property], level + 1) + comma + newline;
              } else {
                string += padding_prop + property + ": " + data2[property] + comma + newline;
              }
            }
            string += padding_key + "}";
          }
          if (typeof data2 == "object" && Array.isArray(data2)) {
            string += "[" + newline;
            for (let property in data2) {
              if (typeof data2[property] == "object") {
                string += this.print_r(data2[property], level + 1) + comma + newline;
              } else {
                string += padding_prop + data2[property] + newline;
              }
            }
            string += padding_key + "]";
          }
          return string;
        }
      };
      module.exports = new Utils();
    }
  });

  // node_modules/lesli-js/src/debug/browser.js
  var require_browser = __commonJS({
    "node_modules/lesli-js/src/debug/browser.js"(exports, module) {
      var utils = require_utils();
      var BrowserDebugService = class {
        build(message, modulo, level) {
          return utils.buildMessage(message, modulo, level);
        }
        // · write information message
        log(message, modulo = null) {
          console.log(utils.buildMessage(message, modulo, "log"));
        }
        // · write information message
        msg(message, modulo = null) {
          console.log(utils.buildMessage(message, modulo, "msg"));
        }
        // · write informatie message
        info(message, modulo = null) {
          console.info("%c" + utils.buildMessage(message, modulo, "info"), utils.stylesForBrowser("info"));
        }
        // · write success message
        success(message, modulo = null) {
          console.log(utils.buildMessage(message, modulo, "msg"));
        }
        // · write warning message
        warn(message, modulo = null) {
          console.warn("%c" + utils.buildMessage(message, modulo, "warn"), utils.stylesForBrowser("warn"));
        }
        // · write warning message
        error(message, modulo = null) {
          console.error("%c" + utils.buildMessage(message, modulo, "error"), utils.stylesForBrowser("error"));
        }
        // · write warning message
        fatal(message, modulo = null) {
          console.error("%c" + utils.buildMessage(message, modulo, "error"), utils.stylesForBrowser("fatal"));
        }
        message(title, messages, more_information = null) {
          console.log("%c" + title, "color:#3689e6;font-size:35px;font-weight:600;line-height:1;");
          if (typeof messages === "string") messages = [messages];
          console.log("%c" + messages.join("\n"), "background-color:#ffffff;color:#1a1a1a;font-size:18px;font-weight:400;line-height:1.1;");
          if (more_information) {
            console.log("%c" + more_information, "background-color:#ffffff;color:#1a1a1a;font-size:14px;font-weight:400;line-height:2;");
          }
        }
        lesli_message_warning(title = "LESLI", support = "For mor information contact your system administrator") {
          this.message(title, [
            "This is a browser feature intended for developers.",
            "For security reasons, DO NOT copy or paste any information, text, or code here."
          ], support);
        }
      };
      module.exports = new BrowserDebugService();
    }
  });

  // node_modules/lesli-js/debug/browser.js
  var require_browser2 = __commonJS({
    "node_modules/lesli-js/debug/browser.js"(exports, module) {
      module.exports = require_browser();
    }
  });

  // node_modules/trix/dist/trix.esm.min.js
  var t = "2.1.15";
  var e = "[data-trix-attachment]";
  var i = { preview: { presentation: "gallery", caption: { name: true, size: true } }, file: { caption: { size: true } } };
  var n = { default: { tagName: "div", parse: false }, quote: { tagName: "blockquote", nestable: true }, heading1: { tagName: "h1", terminal: true, breakOnReturn: true, group: false }, code: { tagName: "pre", terminal: true, htmlAttributes: ["language"], text: { plaintext: true } }, bulletList: { tagName: "ul", parse: false }, bullet: { tagName: "li", listAttribute: "bulletList", group: false, nestable: true, test(t3) {
    return r(t3.parentNode) === n[this.listAttribute].tagName;
  } }, numberList: { tagName: "ol", parse: false }, number: { tagName: "li", listAttribute: "numberList", group: false, nestable: true, test(t3) {
    return r(t3.parentNode) === n[this.listAttribute].tagName;
  } }, attachmentGallery: { tagName: "div", exclusive: true, terminal: true, parse: false, group: false } };
  var r = (t3) => {
    var e2;
    return null == t3 || null === (e2 = t3.tagName) || void 0 === e2 ? void 0 : e2.toLowerCase();
  };
  var o = navigator.userAgent.match(/android\s([0-9]+.*Chrome)/i);
  var s = o && parseInt(o[1]);
  var a = { composesExistingText: /Android.*Chrome/.test(navigator.userAgent), recentAndroid: s && s > 12, samsungAndroid: s && navigator.userAgent.match(/Android.*SM-/), forcesObjectResizing: /Trident.*rv:11/.test(navigator.userAgent), supportsInputEvents: "undefined" != typeof InputEvent && ["data", "getTargetRanges", "inputType"].every((t3) => t3 in InputEvent.prototype) };
  var l = { ADD_ATTR: ["language"], SAFE_FOR_XML: false, RETURN_DOM: true };
  var c = { attachFiles: "Attach Files", bold: "Bold", bullets: "Bullets", byte: "Byte", bytes: "Bytes", captionPlaceholder: "Add a caption\u2026", code: "Code", heading1: "Heading", indent: "Increase Level", italic: "Italic", link: "Link", numbers: "Numbers", outdent: "Decrease Level", quote: "Quote", redo: "Redo", remove: "Remove", strike: "Strikethrough", undo: "Undo", unlink: "Unlink", url: "URL", urlPlaceholder: "Enter a URL\u2026", GB: "GB", KB: "KB", MB: "MB", PB: "PB", TB: "TB" };
  var u = [c.bytes, c.KB, c.MB, c.GB, c.TB, c.PB];
  var h = { prefix: "IEC", precision: 2, formatter(t3) {
    switch (t3) {
      case 0:
        return "0 ".concat(c.bytes);
      case 1:
        return "1 ".concat(c.byte);
      default:
        let e2;
        "SI" === this.prefix ? e2 = 1e3 : "IEC" === this.prefix && (e2 = 1024);
        const i2 = Math.floor(Math.log(t3) / Math.log(e2)), n2 = (t3 / Math.pow(e2, i2)).toFixed(this.precision).replace(/0*$/, "").replace(/\.$/, "");
        return "".concat(n2, " ").concat(u[i2]);
    }
  } };
  var d = "\uFEFF";
  var g = "\xA0";
  var m = function(t3) {
    for (const e2 in t3) {
      const i2 = t3[e2];
      this[e2] = i2;
    }
    return this;
  };
  var p = document.documentElement;
  var f = p.matches;
  var b = function(t3) {
    let { onElement: e2, matchingSelector: i2, withCallback: n2, inPhase: r2, preventDefault: o2, times: s2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const a2 = e2 || p, l2 = i2, c2 = "capturing" === r2, u2 = function(t4) {
      null != s2 && 0 == --s2 && u2.destroy();
      const e3 = y(t4.target, { matchingSelector: l2 });
      null != e3 && (null == n2 || n2.call(e3, t4, e3), o2 && t4.preventDefault());
    };
    return u2.destroy = () => a2.removeEventListener(t3, u2, c2), a2.addEventListener(t3, u2, c2), u2;
  };
  var v = function(t3) {
    let { onElement: e2, bubbles: i2, cancelable: n2, attributes: r2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const o2 = null != e2 ? e2 : p;
    i2 = false !== i2, n2 = false !== n2;
    const s2 = document.createEvent("Events");
    return s2.initEvent(t3, i2, n2), null != r2 && m.call(s2, r2), o2.dispatchEvent(s2);
  };
  var A = function(t3, e2) {
    if (1 === (null == t3 ? void 0 : t3.nodeType)) return f.call(t3, e2);
  };
  var y = function(t3) {
    let { matchingSelector: e2, untilNode: i2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    for (; t3 && t3.nodeType !== Node.ELEMENT_NODE; ) t3 = t3.parentNode;
    if (null != t3) {
      if (null == e2) return t3;
      if (t3.closest && null == i2) return t3.closest(e2);
      for (; t3 && t3 !== i2; ) {
        if (A(t3, e2)) return t3;
        t3 = t3.parentNode;
      }
    }
  };
  var x = (t3) => document.activeElement !== t3 && C(t3, document.activeElement);
  var C = function(t3, e2) {
    if (t3 && e2) for (; e2; ) {
      if (e2 === t3) return true;
      e2 = e2.parentNode;
    }
  };
  var E = function(t3) {
    var e2;
    if (null === (e2 = t3) || void 0 === e2 || !e2.parentNode) return;
    let i2 = 0;
    for (t3 = t3.previousSibling; t3; ) i2++, t3 = t3.previousSibling;
    return i2;
  };
  var S = (t3) => {
    var e2;
    return null == t3 || null === (e2 = t3.parentNode) || void 0 === e2 ? void 0 : e2.removeChild(t3);
  };
  var R = function(t3) {
    let { onlyNodesOfType: e2, usingFilter: i2, expandEntityReferences: n2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const r2 = (() => {
      switch (e2) {
        case "element":
          return NodeFilter.SHOW_ELEMENT;
        case "text":
          return NodeFilter.SHOW_TEXT;
        case "comment":
          return NodeFilter.SHOW_COMMENT;
        default:
          return NodeFilter.SHOW_ALL;
      }
    })();
    return document.createTreeWalker(t3, r2, null != i2 ? i2 : null, true === n2);
  };
  var k = (t3) => {
    var e2;
    return null == t3 || null === (e2 = t3.tagName) || void 0 === e2 ? void 0 : e2.toLowerCase();
  };
  var T = function(t3) {
    let e2, i2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    "object" == typeof t3 ? (n2 = t3, t3 = n2.tagName) : n2 = { attributes: n2 };
    const r2 = document.createElement(t3);
    if (null != n2.editable && (null == n2.attributes && (n2.attributes = {}), n2.attributes.contenteditable = n2.editable), n2.attributes) for (e2 in n2.attributes) i2 = n2.attributes[e2], r2.setAttribute(e2, i2);
    if (n2.style) for (e2 in n2.style) i2 = n2.style[e2], r2.style[e2] = i2;
    if (n2.data) for (e2 in n2.data) i2 = n2.data[e2], r2.dataset[e2] = i2;
    return n2.className && n2.className.split(" ").forEach((t4) => {
      r2.classList.add(t4);
    }), n2.textContent && (r2.textContent = n2.textContent), n2.childNodes && [].concat(n2.childNodes).forEach((t4) => {
      r2.appendChild(t4);
    }), r2;
  };
  var w;
  var L = function() {
    if (null != w) return w;
    w = [];
    for (const t3 in n) {
      const e2 = n[t3];
      e2.tagName && w.push(e2.tagName);
    }
    return w;
  };
  var D = (t3) => I(null == t3 ? void 0 : t3.firstChild);
  var N = function(t3) {
    let { strict: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { strict: true };
    return e2 ? I(t3) : I(t3) || !I(t3.firstChild) && function(t4) {
      return L().includes(k(t4)) && !L().includes(k(t4.firstChild));
    }(t3);
  };
  var I = (t3) => O(t3) && "block" === (null == t3 ? void 0 : t3.data);
  var O = (t3) => (null == t3 ? void 0 : t3.nodeType) === Node.COMMENT_NODE;
  var F = function(t3) {
    let { name: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (t3) return B(t3) ? t3.data === d ? !e2 || t3.parentNode.dataset.trixCursorTarget === e2 : void 0 : F(t3.firstChild);
  };
  var P = (t3) => A(t3, e);
  var M = (t3) => B(t3) && "" === (null == t3 ? void 0 : t3.data);
  var B = (t3) => (null == t3 ? void 0 : t3.nodeType) === Node.TEXT_NODE;
  var _ = { level2Enabled: true, getLevel() {
    return this.level2Enabled && a.supportsInputEvents ? 2 : 0;
  }, pickFiles(t3) {
    const e2 = T("input", { type: "file", multiple: true, hidden: true, id: this.fileInputId });
    e2.addEventListener("change", () => {
      t3(e2.files), S(e2);
    }), S(document.getElementById(this.fileInputId)), document.body.appendChild(e2), e2.click();
  } };
  var j = { removeBlankTableCells: false, tableCellSeparator: " | ", tableRowSeparator: "\n" };
  var W = { bold: { tagName: "strong", inheritable: true, parser(t3) {
    const e2 = window.getComputedStyle(t3);
    return "bold" === e2.fontWeight || e2.fontWeight >= 600;
  } }, italic: { tagName: "em", inheritable: true, parser: (t3) => "italic" === window.getComputedStyle(t3).fontStyle }, href: { groupTagName: "a", parser(t3) {
    const i2 = "a:not(".concat(e, ")"), n2 = t3.closest(i2);
    if (n2) return n2.getAttribute("href");
  } }, strike: { tagName: "del", inheritable: true }, frozen: { style: { backgroundColor: "highlight" } } };
  var U = { getDefaultHTML: () => '<div class="trix-button-row">\n      <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="'.concat(c.bold, '" tabindex="-1">').concat(c.bold, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="').concat(c.italic, '" tabindex="-1">').concat(c.italic, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="').concat(c.strike, '" tabindex="-1">').concat(c.strike, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="').concat(c.link, '" tabindex="-1">').concat(c.link, '</button>\n      </span>\n\n      <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="').concat(c.heading1, '" tabindex="-1">').concat(c.heading1, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="').concat(c.quote, '" tabindex="-1">').concat(c.quote, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="').concat(c.code, '" tabindex="-1">').concat(c.code, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="').concat(c.bullets, '" tabindex="-1">').concat(c.bullets, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="').concat(c.numbers, '" tabindex="-1">').concat(c.numbers, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="').concat(c.outdent, '" tabindex="-1">').concat(c.outdent, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="').concat(c.indent, '" tabindex="-1">').concat(c.indent, '</button>\n      </span>\n\n      <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="').concat(c.attachFiles, '" tabindex="-1">').concat(c.attachFiles, '</button>\n      </span>\n\n      <span class="trix-button-group-spacer"></span>\n\n      <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="').concat(c.undo, '" tabindex="-1">').concat(c.undo, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="').concat(c.redo, '" tabindex="-1">').concat(c.redo, '</button>\n      </span>\n    </div>\n\n    <div class="trix-dialogs" data-trix-dialogs>\n      <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n        <div class="trix-dialog__link-fields">\n          <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="').concat(c.urlPlaceholder, '" aria-label="').concat(c.url, '" data-trix-validate-href required data-trix-input>\n          <div class="trix-button-group">\n            <input type="button" class="trix-button trix-button--dialog" value="').concat(c.link, '" data-trix-method="setAttribute">\n            <input type="button" class="trix-button trix-button--dialog" value="').concat(c.unlink, '" data-trix-method="removeAttribute">\n          </div>\n        </div>\n      </div>\n    </div>') };
  var V = { interval: 5e3 };
  var z = Object.freeze({ __proto__: null, attachments: i, blockAttributes: n, browser: a, css: { attachment: "attachment", attachmentCaption: "attachment__caption", attachmentCaptionEditor: "attachment__caption-editor", attachmentMetadata: "attachment__metadata", attachmentMetadataContainer: "attachment__metadata-container", attachmentName: "attachment__name", attachmentProgress: "attachment__progress", attachmentSize: "attachment__size", attachmentToolbar: "attachment__toolbar", attachmentGallery: "attachment-gallery" }, dompurify: l, fileSize: h, input: _, keyNames: { 8: "backspace", 9: "tab", 13: "return", 27: "escape", 37: "left", 39: "right", 46: "delete", 68: "d", 72: "h", 79: "o" }, lang: c, parser: j, textAttributes: W, toolbar: U, undo: V });
  var q = class {
    static proxyMethod(t3) {
      const { name: e2, toMethod: i2, toProperty: n2, optional: r2 } = H(t3);
      this.prototype[e2] = function() {
        let t4, o2;
        var s2, a2;
        i2 ? o2 = r2 ? null === (s2 = this[i2]) || void 0 === s2 ? void 0 : s2.call(this) : this[i2]() : n2 && (o2 = this[n2]);
        return r2 ? (t4 = null === (a2 = o2) || void 0 === a2 ? void 0 : a2[e2], t4 ? J.call(t4, o2, arguments) : void 0) : (t4 = o2[e2], J.call(t4, o2, arguments));
      };
    }
  };
  var H = function(t3) {
    const e2 = t3.match(K);
    if (!e2) throw new Error("can't parse @proxyMethod expression: ".concat(t3));
    const i2 = { name: e2[4] };
    return null != e2[2] ? i2.toMethod = e2[1] : i2.toProperty = e2[1], null != e2[3] && (i2.optional = true), i2;
  };
  var { apply: J } = Function.prototype;
  var K = new RegExp("^(.+?)(\\(\\))?(\\?)?\\.(.+?)$");
  var G;
  var Y;
  var X;
  var $ = class extends q {
    static box() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return t3 instanceof this ? t3 : this.fromUCS2String(null == t3 ? void 0 : t3.toString());
    }
    static fromUCS2String(t3) {
      return new this(t3, et(t3));
    }
    static fromCodepoints(t3) {
      return new this(it(t3), t3);
    }
    constructor(t3, e2) {
      super(...arguments), this.ucs2String = t3, this.codepoints = e2, this.length = this.codepoints.length, this.ucs2Length = this.ucs2String.length;
    }
    offsetToUCS2Offset(t3) {
      return it(this.codepoints.slice(0, Math.max(0, t3))).length;
    }
    offsetFromUCS2Offset(t3) {
      return et(this.ucs2String.slice(0, Math.max(0, t3))).length;
    }
    slice() {
      return this.constructor.fromCodepoints(this.codepoints.slice(...arguments));
    }
    charAt(t3) {
      return this.slice(t3, t3 + 1);
    }
    isEqualTo(t3) {
      return this.constructor.box(t3).ucs2String === this.ucs2String;
    }
    toJSON() {
      return this.ucs2String;
    }
    getCacheKey() {
      return this.ucs2String;
    }
    toString() {
      return this.ucs2String;
    }
  };
  var Z = 1 === (null === (G = Array.from) || void 0 === G ? void 0 : G.call(Array, "\u{1F47C}").length);
  var Q = null != (null === (Y = " ".codePointAt) || void 0 === Y ? void 0 : Y.call(" ", 0));
  var tt = " \u{1F47C}" === (null === (X = String.fromCodePoint) || void 0 === X ? void 0 : X.call(String, 32, 128124));
  var et;
  var it;
  et = Z && Q ? (t3) => Array.from(t3).map((t4) => t4.codePointAt(0)) : function(t3) {
    const e2 = [];
    let i2 = 0;
    const { length: n2 } = t3;
    for (; i2 < n2; ) {
      let r2 = t3.charCodeAt(i2++);
      if (55296 <= r2 && r2 <= 56319 && i2 < n2) {
        const e3 = t3.charCodeAt(i2++);
        56320 == (64512 & e3) ? r2 = ((1023 & r2) << 10) + (1023 & e3) + 65536 : i2--;
      }
      e2.push(r2);
    }
    return e2;
  }, it = tt ? (t3) => String.fromCodePoint(...Array.from(t3 || [])) : function(t3) {
    return (() => {
      const e2 = [];
      return Array.from(t3).forEach((t4) => {
        let i2 = "";
        t4 > 65535 && (t4 -= 65536, i2 += String.fromCharCode(t4 >>> 10 & 1023 | 55296), t4 = 56320 | 1023 & t4), e2.push(i2 + String.fromCharCode(t4));
      }), e2;
    })().join("");
  };
  var nt = 0;
  var rt = class extends q {
    static fromJSONString(t3) {
      return this.fromJSON(JSON.parse(t3));
    }
    constructor() {
      super(...arguments), this.id = ++nt;
    }
    hasSameConstructorAs(t3) {
      return this.constructor === (null == t3 ? void 0 : t3.constructor);
    }
    isEqualTo(t3) {
      return this === t3;
    }
    inspect() {
      const t3 = [], e2 = this.contentsForInspection() || {};
      for (const i2 in e2) {
        const n2 = e2[i2];
        t3.push("".concat(i2, "=").concat(n2));
      }
      return "#<".concat(this.constructor.name, ":").concat(this.id).concat(t3.length ? " ".concat(t3.join(", ")) : "", ">");
    }
    contentsForInspection() {
    }
    toJSONString() {
      return JSON.stringify(this);
    }
    toUTF16String() {
      return $.box(this);
    }
    getCacheKey() {
      return this.id.toString();
    }
  };
  var ot = function() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (t3.length !== e2.length) return false;
    for (let i2 = 0; i2 < t3.length; i2++) {
      if (t3[i2] !== e2[i2]) return false;
    }
    return true;
  };
  var st = function(t3) {
    const e2 = t3.slice(0);
    for (var i2 = arguments.length, n2 = new Array(i2 > 1 ? i2 - 1 : 0), r2 = 1; r2 < i2; r2++) n2[r2 - 1] = arguments[r2];
    return e2.splice(...n2), e2;
  };
  var at = /[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/;
  var lt = function() {
    const t3 = T("input", { dir: "auto", name: "x", dirName: "x.dir" }), e2 = T("textarea", { dir: "auto", name: "y", dirName: "y.dir" }), i2 = T("form");
    i2.appendChild(t3), i2.appendChild(e2);
    const n2 = function() {
      try {
        return new FormData(i2).has(e2.dirName);
      } catch (t4) {
        return false;
      }
    }(), r2 = function() {
      try {
        return t3.matches(":dir(ltr),:dir(rtl)");
      } catch (t4) {
        return false;
      }
    }();
    return n2 ? function(t4) {
      return e2.value = t4, new FormData(i2).get(e2.dirName);
    } : r2 ? function(e3) {
      return t3.value = e3, t3.matches(":dir(rtl)") ? "rtl" : "ltr";
    } : function(t4) {
      const e3 = t4.trim().charAt(0);
      return at.test(e3) ? "rtl" : "ltr";
    };
  }();
  var ct = null;
  var ut = null;
  var ht = null;
  var dt = null;
  var gt = () => (ct || (ct = bt().concat(pt())), ct);
  var mt = (t3) => n[t3];
  var pt = () => (ut || (ut = Object.keys(n)), ut);
  var ft = (t3) => W[t3];
  var bt = () => (ht || (ht = Object.keys(W)), ht);
  var vt = function(t3, e2) {
    At(t3).textContent = e2.replace(/%t/g, t3);
  };
  var At = function(t3) {
    const e2 = document.createElement("style");
    e2.setAttribute("type", "text/css"), e2.setAttribute("data-tag-name", t3.toLowerCase());
    const i2 = yt();
    return i2 && e2.setAttribute("nonce", i2), document.head.insertBefore(e2, document.head.firstChild), e2;
  };
  var yt = function() {
    const t3 = xt("trix-csp-nonce") || xt("csp-nonce");
    if (t3) {
      const { nonce: e2, content: i2 } = t3;
      return "" == e2 ? i2 : e2;
    }
  };
  var xt = (t3) => document.head.querySelector("meta[name=".concat(t3, "]"));
  var Ct = { "application/x-trix-feature-detection": "test" };
  var Et = function(t3) {
    const e2 = t3.getData("text/plain"), i2 = t3.getData("text/html");
    if (!e2 || !i2) return null == e2 ? void 0 : e2.length;
    {
      const { body: t4 } = new DOMParser().parseFromString(i2, "text/html");
      if (t4.textContent === e2) return !t4.querySelector("*");
    }
  };
  var St = /Mac|^iP/.test(navigator.platform) ? (t3) => t3.metaKey : (t3) => t3.ctrlKey;
  var Rt = (t3) => setTimeout(t3, 1);
  var kt = function() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const e2 = {};
    for (const i2 in t3) {
      const n2 = t3[i2];
      e2[i2] = n2;
    }
    return e2;
  };
  var Tt = function() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (Object.keys(t3).length !== Object.keys(e2).length) return false;
    for (const i2 in t3) {
      if (t3[i2] !== e2[i2]) return false;
    }
    return true;
  };
  var wt = function(t3) {
    if (null != t3) return Array.isArray(t3) || (t3 = [t3, t3]), [Nt(t3[0]), Nt(null != t3[1] ? t3[1] : t3[0])];
  };
  var Lt = function(t3) {
    if (null == t3) return;
    const [e2, i2] = wt(t3);
    return It(e2, i2);
  };
  var Dt = function(t3, e2) {
    if (null == t3 || null == e2) return;
    const [i2, n2] = wt(t3), [r2, o2] = wt(e2);
    return It(i2, r2) && It(n2, o2);
  };
  var Nt = function(t3) {
    return "number" == typeof t3 ? t3 : kt(t3);
  };
  var It = function(t3, e2) {
    return "number" == typeof t3 ? t3 === e2 : Tt(t3, e2);
  };
  var Ot = class extends q {
    constructor() {
      super(...arguments), this.update = this.update.bind(this), this.selectionManagers = [];
    }
    start() {
      this.started || (this.started = true, document.addEventListener("selectionchange", this.update, true));
    }
    stop() {
      if (this.started) return this.started = false, document.removeEventListener("selectionchange", this.update, true);
    }
    registerSelectionManager(t3) {
      if (!this.selectionManagers.includes(t3)) return this.selectionManagers.push(t3), this.start();
    }
    unregisterSelectionManager(t3) {
      if (this.selectionManagers = this.selectionManagers.filter((e2) => e2 !== t3), 0 === this.selectionManagers.length) return this.stop();
    }
    notifySelectionManagersOfSelectionChange() {
      return this.selectionManagers.map((t3) => t3.selectionDidChange());
    }
    update() {
      this.notifySelectionManagersOfSelectionChange();
    }
    reset() {
      this.update();
    }
  };
  var Ft = new Ot();
  var Pt = function() {
    const t3 = window.getSelection();
    if (t3.rangeCount > 0) return t3;
  };
  var Mt = function() {
    var t3;
    const e2 = null === (t3 = Pt()) || void 0 === t3 ? void 0 : t3.getRangeAt(0);
    if (e2 && !_t(e2)) return e2;
  };
  var Bt = function(t3) {
    const e2 = window.getSelection();
    return e2.removeAllRanges(), e2.addRange(t3), Ft.update();
  };
  var _t = (t3) => jt(t3.startContainer) || jt(t3.endContainer);
  var jt = (t3) => !Object.getPrototypeOf(t3);
  var Wt = (t3) => t3.replace(new RegExp("".concat(d), "g"), "").replace(new RegExp("".concat(g), "g"), " ");
  var Ut = new RegExp("[^\\S".concat(g, "]"));
  var Vt = (t3) => t3.replace(new RegExp("".concat(Ut.source), "g"), " ").replace(/\ {2,}/g, " ");
  var zt = function(t3, e2) {
    if (t3.isEqualTo(e2)) return ["", ""];
    const i2 = qt(t3, e2), { length: n2 } = i2.utf16String;
    let r2;
    if (n2) {
      const { offset: o2 } = i2, s2 = t3.codepoints.slice(0, o2).concat(t3.codepoints.slice(o2 + n2));
      r2 = qt(e2, $.fromCodepoints(s2));
    } else r2 = qt(e2, t3);
    return [i2.utf16String.toString(), r2.utf16String.toString()];
  };
  var qt = function(t3, e2) {
    let i2 = 0, n2 = t3.length, r2 = e2.length;
    for (; i2 < n2 && t3.charAt(i2).isEqualTo(e2.charAt(i2)); ) i2++;
    for (; n2 > i2 + 1 && t3.charAt(n2 - 1).isEqualTo(e2.charAt(r2 - 1)); ) n2--, r2--;
    return { utf16String: t3.slice(i2, n2), offset: i2 };
  };
  var Ht = class _Ht extends rt {
    static fromCommonAttributesOfObjects() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      if (!t3.length) return new this();
      let e2 = Yt(t3[0]), i2 = e2.getKeys();
      return t3.slice(1).forEach((t4) => {
        i2 = e2.getKeysCommonToHash(Yt(t4)), e2 = e2.slice(i2);
      }), e2;
    }
    static box(t3) {
      return Yt(t3);
    }
    constructor() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      super(...arguments), this.values = Gt(t3);
    }
    add(t3, e2) {
      return this.merge(Jt(t3, e2));
    }
    remove(t3) {
      return new _Ht(Gt(this.values, t3));
    }
    get(t3) {
      return this.values[t3];
    }
    has(t3) {
      return t3 in this.values;
    }
    merge(t3) {
      return new _Ht(Kt(this.values, Xt(t3)));
    }
    slice(t3) {
      const e2 = {};
      return Array.from(t3).forEach((t4) => {
        this.has(t4) && (e2[t4] = this.values[t4]);
      }), new _Ht(e2);
    }
    getKeys() {
      return Object.keys(this.values);
    }
    getKeysCommonToHash(t3) {
      return t3 = Yt(t3), this.getKeys().filter((e2) => this.values[e2] === t3.values[e2]);
    }
    isEqualTo(t3) {
      return ot(this.toArray(), Yt(t3).toArray());
    }
    isEmpty() {
      return 0 === this.getKeys().length;
    }
    toArray() {
      if (!this.array) {
        const t3 = [];
        for (const e2 in this.values) {
          const i2 = this.values[e2];
          t3.push(t3.push(e2, i2));
        }
        this.array = t3.slice(0);
      }
      return this.array;
    }
    toObject() {
      return Gt(this.values);
    }
    toJSON() {
      return this.toObject();
    }
    contentsForInspection() {
      return { values: JSON.stringify(this.values) };
    }
  };
  var Jt = function(t3, e2) {
    const i2 = {};
    return i2[t3] = e2, i2;
  };
  var Kt = function(t3, e2) {
    const i2 = Gt(t3);
    for (const t4 in e2) {
      const n2 = e2[t4];
      i2[t4] = n2;
    }
    return i2;
  };
  var Gt = function(t3, e2) {
    const i2 = {};
    return Object.keys(t3).sort().forEach((n2) => {
      n2 !== e2 && (i2[n2] = t3[n2]);
    }), i2;
  };
  var Yt = function(t3) {
    return t3 instanceof Ht ? t3 : new Ht(t3);
  };
  var Xt = function(t3) {
    return t3 instanceof Ht ? t3.values : t3;
  };
  var $t = class {
    static groupObjects() {
      let t3, e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], { depth: i2, asTree: n2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      n2 && null == i2 && (i2 = 0);
      const r2 = [];
      return Array.from(e2).forEach((e3) => {
        var o2;
        if (t3) {
          var s2, a2, l2;
          if (null !== (s2 = e3.canBeGrouped) && void 0 !== s2 && s2.call(e3, i2) && null !== (a2 = (l2 = t3[t3.length - 1]).canBeGroupedWith) && void 0 !== a2 && a2.call(l2, e3, i2)) return void t3.push(e3);
          r2.push(new this(t3, { depth: i2, asTree: n2 })), t3 = null;
        }
        null !== (o2 = e3.canBeGrouped) && void 0 !== o2 && o2.call(e3, i2) ? t3 = [e3] : r2.push(e3);
      }), t3 && r2.push(new this(t3, { depth: i2, asTree: n2 })), r2;
    }
    constructor() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], { depth: e2, asTree: i2 } = arguments.length > 1 ? arguments[1] : void 0;
      this.objects = t3, i2 && (this.depth = e2, this.objects = this.constructor.groupObjects(this.objects, { asTree: i2, depth: this.depth + 1 }));
    }
    getObjects() {
      return this.objects;
    }
    getDepth() {
      return this.depth;
    }
    getCacheKey() {
      const t3 = ["objectGroup"];
      return Array.from(this.getObjects()).forEach((e2) => {
        t3.push(e2.getCacheKey());
      }), t3.join("/");
    }
  };
  var Zt = class extends q {
    constructor() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      super(...arguments), this.objects = {}, Array.from(t3).forEach((t4) => {
        const e2 = JSON.stringify(t4);
        null == this.objects[e2] && (this.objects[e2] = t4);
      });
    }
    find(t3) {
      const e2 = JSON.stringify(t3);
      return this.objects[e2];
    }
  };
  var Qt = class {
    constructor(t3) {
      this.reset(t3);
    }
    add(t3) {
      const e2 = te(t3);
      this.elements[e2] = t3;
    }
    remove(t3) {
      const e2 = te(t3), i2 = this.elements[e2];
      if (i2) return delete this.elements[e2], i2;
    }
    reset() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return this.elements = {}, Array.from(t3).forEach((t4) => {
        this.add(t4);
      }), t3;
    }
  };
  var te = (t3) => t3.dataset.trixStoreKey;
  var ee = class extends q {
    isPerforming() {
      return true === this.performing;
    }
    hasPerformed() {
      return true === this.performed;
    }
    hasSucceeded() {
      return this.performed && this.succeeded;
    }
    hasFailed() {
      return this.performed && !this.succeeded;
    }
    getPromise() {
      return this.promise || (this.promise = new Promise((t3, e2) => (this.performing = true, this.perform((i2, n2) => {
        this.succeeded = i2, this.performing = false, this.performed = true, this.succeeded ? t3(n2) : e2(n2);
      })))), this.promise;
    }
    perform(t3) {
      return t3(false);
    }
    release() {
      var t3, e2;
      null === (t3 = this.promise) || void 0 === t3 || null === (e2 = t3.cancel) || void 0 === e2 || e2.call(t3), this.promise = null, this.performing = null, this.performed = null, this.succeeded = null;
    }
  };
  ee.proxyMethod("getPromise().then"), ee.proxyMethod("getPromise().catch");
  var ie = class extends q {
    constructor(t3) {
      let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      super(...arguments), this.object = t3, this.options = e2, this.childViews = [], this.rootView = this;
    }
    getNodes() {
      return this.nodes || (this.nodes = this.createNodes()), this.nodes.map((t3) => t3.cloneNode(true));
    }
    invalidate() {
      var t3;
      return this.nodes = null, this.childViews = [], null === (t3 = this.parentView) || void 0 === t3 ? void 0 : t3.invalidate();
    }
    invalidateViewForObject(t3) {
      var e2;
      return null === (e2 = this.findViewForObject(t3)) || void 0 === e2 ? void 0 : e2.invalidate();
    }
    findOrCreateCachedChildView(t3, e2, i2) {
      let n2 = this.getCachedViewForObject(e2);
      return n2 ? this.recordChildView(n2) : (n2 = this.createChildView(...arguments), this.cacheViewForObject(n2, e2)), n2;
    }
    createChildView(t3, e2) {
      let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      e2 instanceof $t && (i2.viewClass = t3, t3 = ne);
      const n2 = new t3(e2, i2);
      return this.recordChildView(n2);
    }
    recordChildView(t3) {
      return t3.parentView = this, t3.rootView = this.rootView, this.childViews.push(t3), t3;
    }
    getAllChildViews() {
      let t3 = [];
      return this.childViews.forEach((e2) => {
        t3.push(e2), t3 = t3.concat(e2.getAllChildViews());
      }), t3;
    }
    findElement() {
      return this.findElementForObject(this.object);
    }
    findElementForObject(t3) {
      const e2 = null == t3 ? void 0 : t3.id;
      if (e2) return this.rootView.element.querySelector("[data-trix-id='".concat(e2, "']"));
    }
    findViewForObject(t3) {
      for (const e2 of this.getAllChildViews()) if (e2.object === t3) return e2;
    }
    getViewCache() {
      return this.rootView !== this ? this.rootView.getViewCache() : this.isViewCachingEnabled() ? (this.viewCache || (this.viewCache = {}), this.viewCache) : void 0;
    }
    isViewCachingEnabled() {
      return false !== this.shouldCacheViews;
    }
    enableViewCaching() {
      this.shouldCacheViews = true;
    }
    disableViewCaching() {
      this.shouldCacheViews = false;
    }
    getCachedViewForObject(t3) {
      var e2;
      return null === (e2 = this.getViewCache()) || void 0 === e2 ? void 0 : e2[t3.getCacheKey()];
    }
    cacheViewForObject(t3, e2) {
      const i2 = this.getViewCache();
      i2 && (i2[e2.getCacheKey()] = t3);
    }
    garbageCollectCachedViews() {
      const t3 = this.getViewCache();
      if (t3) {
        const e2 = this.getAllChildViews().concat(this).map((t4) => t4.object.getCacheKey());
        for (const i2 in t3) e2.includes(i2) || delete t3[i2];
      }
    }
  };
  var ne = class extends ie {
    constructor() {
      super(...arguments), this.objectGroup = this.object, this.viewClass = this.options.viewClass, delete this.options.viewClass;
    }
    getChildViews() {
      return this.childViews.length || Array.from(this.objectGroup.getObjects()).forEach((t3) => {
        this.findOrCreateCachedChildView(this.viewClass, t3, this.options);
      }), this.childViews;
    }
    createNodes() {
      const t3 = this.createContainerElement();
      return this.getChildViews().forEach((e2) => {
        Array.from(e2.getNodes()).forEach((e3) => {
          t3.appendChild(e3);
        });
      }), [t3];
    }
    createContainerElement() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.objectGroup.getDepth();
      return this.getChildViews()[0].createContainerElement(t3);
    }
  };
  var { entries: re, setPrototypeOf: oe, isFrozen: se, getPrototypeOf: ae, getOwnPropertyDescriptor: le } = Object;
  var { freeze: ce, seal: ue, create: he } = Object;
  var { apply: de, construct: ge } = "undefined" != typeof Reflect && Reflect;
  ce || (ce = function(t3) {
    return t3;
  }), ue || (ue = function(t3) {
    return t3;
  }), de || (de = function(t3, e2, i2) {
    return t3.apply(e2, i2);
  }), ge || (ge = function(t3, e2) {
    return new t3(...e2);
  });
  var me = Le(Array.prototype.forEach);
  var pe = Le(Array.prototype.lastIndexOf);
  var fe = Le(Array.prototype.pop);
  var be = Le(Array.prototype.push);
  var ve = Le(Array.prototype.splice);
  var Ae = Le(String.prototype.toLowerCase);
  var ye = Le(String.prototype.toString);
  var xe = Le(String.prototype.match);
  var Ce = Le(String.prototype.replace);
  var Ee = Le(String.prototype.indexOf);
  var Se = Le(String.prototype.trim);
  var Re = Le(Object.prototype.hasOwnProperty);
  var ke = Le(RegExp.prototype.test);
  var Te = (we = TypeError, function() {
    for (var t3 = arguments.length, e2 = new Array(t3), i2 = 0; i2 < t3; i2++) e2[i2] = arguments[i2];
    return ge(we, e2);
  });
  var we;
  function Le(t3) {
    return function(e2) {
      e2 instanceof RegExp && (e2.lastIndex = 0);
      for (var i2 = arguments.length, n2 = new Array(i2 > 1 ? i2 - 1 : 0), r2 = 1; r2 < i2; r2++) n2[r2 - 1] = arguments[r2];
      return de(t3, e2, n2);
    };
  }
  function De(t3, e2) {
    let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ae;
    oe && oe(t3, null);
    let n2 = e2.length;
    for (; n2--; ) {
      let r2 = e2[n2];
      if ("string" == typeof r2) {
        const t4 = i2(r2);
        t4 !== r2 && (se(e2) || (e2[n2] = t4), r2 = t4);
      }
      t3[r2] = true;
    }
    return t3;
  }
  function Ne(t3) {
    for (let e2 = 0; e2 < t3.length; e2++) {
      Re(t3, e2) || (t3[e2] = null);
    }
    return t3;
  }
  function Ie(t3) {
    const e2 = he(null);
    for (const [i2, n2] of re(t3)) {
      Re(t3, i2) && (Array.isArray(n2) ? e2[i2] = Ne(n2) : n2 && "object" == typeof n2 && n2.constructor === Object ? e2[i2] = Ie(n2) : e2[i2] = n2);
    }
    return e2;
  }
  function Oe(t3, e2) {
    for (; null !== t3; ) {
      const i2 = le(t3, e2);
      if (i2) {
        if (i2.get) return Le(i2.get);
        if ("function" == typeof i2.value) return Le(i2.value);
      }
      t3 = ae(t3);
    }
    return function() {
      return null;
    };
  }
  var Fe = ce(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
  var Pe = ce(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
  var Me = ce(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
  var Be = ce(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
  var _e = ce(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
  var je = ce(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
  var We = ce(["#text"]);
  var Ue = ce(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
  var Ve = ce(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
  var ze = ce(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
  var qe = ce(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
  var He = ue(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
  var Je = ue(/<%[\w\W]*|[\w\W]*%>/gm);
  var Ke = ue(/\$\{[\w\W]*/gm);
  var Ge = ue(/^data-[\-\w.\u00B7-\uFFFF]+$/);
  var Ye = ue(/^aria-[\-\w]+$/);
  var Xe = ue(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
  var $e = ue(/^(?:\w+script|data):/i);
  var Ze = ue(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
  var Qe = ue(/^html$/i);
  var ti = ue(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var ei = Object.freeze({ __proto__: null, ARIA_ATTR: Ye, ATTR_WHITESPACE: Ze, CUSTOM_ELEMENT: ti, DATA_ATTR: Ge, DOCTYPE_NAME: Qe, ERB_EXPR: Je, IS_ALLOWED_URI: Xe, IS_SCRIPT_OR_DATA: $e, MUSTACHE_EXPR: He, TMPLIT_EXPR: Ke });
  var ii = 1;
  var ni = 3;
  var ri = 7;
  var oi = 8;
  var si = 9;
  var ai = function() {
    return "undefined" == typeof window ? null : window;
  };
  var li = function t2() {
    let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ai();
    const i2 = (e3) => t2(e3);
    if (i2.version = "3.2.5", i2.removed = [], !e2 || !e2.document || e2.document.nodeType !== si || !e2.Element) return i2.isSupported = false, i2;
    let { document: n2 } = e2;
    const r2 = n2, o2 = r2.currentScript, { DocumentFragment: s2, HTMLTemplateElement: a2, Node: l2, Element: c2, NodeFilter: u2, NamedNodeMap: h3 = e2.NamedNodeMap || e2.MozNamedAttrMap, HTMLFormElement: d2, DOMParser: g2, trustedTypes: m2 } = e2, p2 = c2.prototype, f2 = Oe(p2, "cloneNode"), b2 = Oe(p2, "remove"), v2 = Oe(p2, "nextSibling"), A2 = Oe(p2, "childNodes"), y2 = Oe(p2, "parentNode");
    if ("function" == typeof a2) {
      const t3 = n2.createElement("template");
      t3.content && t3.content.ownerDocument && (n2 = t3.content.ownerDocument);
    }
    let x2, C2 = "";
    const { implementation: E2, createNodeIterator: S2, createDocumentFragment: R2, getElementsByTagName: k2 } = n2, { importNode: T2 } = r2;
    let w2 = { afterSanitizeAttributes: [], afterSanitizeElements: [], afterSanitizeShadowDOM: [], beforeSanitizeAttributes: [], beforeSanitizeElements: [], beforeSanitizeShadowDOM: [], uponSanitizeAttribute: [], uponSanitizeElement: [], uponSanitizeShadowNode: [] };
    i2.isSupported = "function" == typeof re && "function" == typeof y2 && E2 && void 0 !== E2.createHTMLDocument;
    const { MUSTACHE_EXPR: L2, ERB_EXPR: D2, TMPLIT_EXPR: N2, DATA_ATTR: I2, ARIA_ATTR: O2, IS_SCRIPT_OR_DATA: F2, ATTR_WHITESPACE: P2, CUSTOM_ELEMENT: M2 } = ei;
    let { IS_ALLOWED_URI: B2 } = ei, _2 = null;
    const j2 = De({}, [...Fe, ...Pe, ...Me, ..._e, ...We]);
    let W2 = null;
    const U2 = De({}, [...Ue, ...Ve, ...ze, ...qe]);
    let V2 = Object.seal(he(null, { tagNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, attributeNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, allowCustomizedBuiltInElements: { writable: true, configurable: false, enumerable: true, value: false } })), z2 = null, q2 = null, H2 = true, J2 = true, K2 = false, G2 = true, Y2 = false, X2 = true, $2 = false, Z2 = false, Q2 = false, tt2 = false, et2 = false, it2 = false, nt2 = true, rt2 = false, ot2 = true, st2 = false, at2 = {}, lt2 = null;
    const ct2 = De({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    let ut2 = null;
    const ht2 = De({}, ["audio", "video", "img", "source", "image", "track"]);
    let dt2 = null;
    const gt2 = De({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), mt2 = "http://www.w3.org/1998/Math/MathML", pt2 = "http://www.w3.org/2000/svg", ft2 = "http://www.w3.org/1999/xhtml";
    let bt2 = ft2, vt2 = false, At2 = null;
    const yt2 = De({}, [mt2, pt2, ft2], ye);
    let xt2 = De({}, ["mi", "mo", "mn", "ms", "mtext"]), Ct2 = De({}, ["annotation-xml"]);
    const Et2 = De({}, ["title", "style", "font", "a", "script"]);
    let St2 = null;
    const Rt2 = ["application/xhtml+xml", "text/html"];
    let kt2 = null, Tt2 = null;
    const wt2 = n2.createElement("form"), Lt2 = function(t3) {
      return t3 instanceof RegExp || t3 instanceof Function;
    }, Dt2 = function() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (!Tt2 || Tt2 !== t3) {
        if (t3 && "object" == typeof t3 || (t3 = {}), t3 = Ie(t3), St2 = -1 === Rt2.indexOf(t3.PARSER_MEDIA_TYPE) ? "text/html" : t3.PARSER_MEDIA_TYPE, kt2 = "application/xhtml+xml" === St2 ? ye : Ae, _2 = Re(t3, "ALLOWED_TAGS") ? De({}, t3.ALLOWED_TAGS, kt2) : j2, W2 = Re(t3, "ALLOWED_ATTR") ? De({}, t3.ALLOWED_ATTR, kt2) : U2, At2 = Re(t3, "ALLOWED_NAMESPACES") ? De({}, t3.ALLOWED_NAMESPACES, ye) : yt2, dt2 = Re(t3, "ADD_URI_SAFE_ATTR") ? De(Ie(gt2), t3.ADD_URI_SAFE_ATTR, kt2) : gt2, ut2 = Re(t3, "ADD_DATA_URI_TAGS") ? De(Ie(ht2), t3.ADD_DATA_URI_TAGS, kt2) : ht2, lt2 = Re(t3, "FORBID_CONTENTS") ? De({}, t3.FORBID_CONTENTS, kt2) : ct2, z2 = Re(t3, "FORBID_TAGS") ? De({}, t3.FORBID_TAGS, kt2) : {}, q2 = Re(t3, "FORBID_ATTR") ? De({}, t3.FORBID_ATTR, kt2) : {}, at2 = !!Re(t3, "USE_PROFILES") && t3.USE_PROFILES, H2 = false !== t3.ALLOW_ARIA_ATTR, J2 = false !== t3.ALLOW_DATA_ATTR, K2 = t3.ALLOW_UNKNOWN_PROTOCOLS || false, G2 = false !== t3.ALLOW_SELF_CLOSE_IN_ATTR, Y2 = t3.SAFE_FOR_TEMPLATES || false, X2 = false !== t3.SAFE_FOR_XML, $2 = t3.WHOLE_DOCUMENT || false, tt2 = t3.RETURN_DOM || false, et2 = t3.RETURN_DOM_FRAGMENT || false, it2 = t3.RETURN_TRUSTED_TYPE || false, Q2 = t3.FORCE_BODY || false, nt2 = false !== t3.SANITIZE_DOM, rt2 = t3.SANITIZE_NAMED_PROPS || false, ot2 = false !== t3.KEEP_CONTENT, st2 = t3.IN_PLACE || false, B2 = t3.ALLOWED_URI_REGEXP || Xe, bt2 = t3.NAMESPACE || ft2, xt2 = t3.MATHML_TEXT_INTEGRATION_POINTS || xt2, Ct2 = t3.HTML_INTEGRATION_POINTS || Ct2, V2 = t3.CUSTOM_ELEMENT_HANDLING || {}, t3.CUSTOM_ELEMENT_HANDLING && Lt2(t3.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (V2.tagNameCheck = t3.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t3.CUSTOM_ELEMENT_HANDLING && Lt2(t3.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (V2.attributeNameCheck = t3.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t3.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t3.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (V2.allowCustomizedBuiltInElements = t3.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Y2 && (J2 = false), et2 && (tt2 = true), at2 && (_2 = De({}, We), W2 = [], true === at2.html && (De(_2, Fe), De(W2, Ue)), true === at2.svg && (De(_2, Pe), De(W2, Ve), De(W2, qe)), true === at2.svgFilters && (De(_2, Me), De(W2, Ve), De(W2, qe)), true === at2.mathMl && (De(_2, _e), De(W2, ze), De(W2, qe))), t3.ADD_TAGS && (_2 === j2 && (_2 = Ie(_2)), De(_2, t3.ADD_TAGS, kt2)), t3.ADD_ATTR && (W2 === U2 && (W2 = Ie(W2)), De(W2, t3.ADD_ATTR, kt2)), t3.ADD_URI_SAFE_ATTR && De(dt2, t3.ADD_URI_SAFE_ATTR, kt2), t3.FORBID_CONTENTS && (lt2 === ct2 && (lt2 = Ie(lt2)), De(lt2, t3.FORBID_CONTENTS, kt2)), ot2 && (_2["#text"] = true), $2 && De(_2, ["html", "head", "body"]), _2.table && (De(_2, ["tbody"]), delete z2.tbody), t3.TRUSTED_TYPES_POLICY) {
          if ("function" != typeof t3.TRUSTED_TYPES_POLICY.createHTML) throw Te('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
          if ("function" != typeof t3.TRUSTED_TYPES_POLICY.createScriptURL) throw Te('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
          x2 = t3.TRUSTED_TYPES_POLICY, C2 = x2.createHTML("");
        } else void 0 === x2 && (x2 = function(t4, e3) {
          if ("object" != typeof t4 || "function" != typeof t4.createPolicy) return null;
          let i3 = null;
          const n3 = "data-tt-policy-suffix";
          e3 && e3.hasAttribute(n3) && (i3 = e3.getAttribute(n3));
          const r3 = "dompurify" + (i3 ? "#" + i3 : "");
          try {
            return t4.createPolicy(r3, { createHTML: (t5) => t5, createScriptURL: (t5) => t5 });
          } catch (t5) {
            return console.warn("TrustedTypes policy " + r3 + " could not be created."), null;
          }
        }(m2, o2)), null !== x2 && "string" == typeof C2 && (C2 = x2.createHTML(""));
        ce && ce(t3), Tt2 = t3;
      }
    }, Nt2 = De({}, [...Pe, ...Me, ...Be]), It2 = De({}, [..._e, ...je]), Ot2 = function(t3) {
      be(i2.removed, { element: t3 });
      try {
        y2(t3).removeChild(t3);
      } catch (e3) {
        b2(t3);
      }
    }, Ft2 = function(t3, e3) {
      try {
        be(i2.removed, { attribute: e3.getAttributeNode(t3), from: e3 });
      } catch (t4) {
        be(i2.removed, { attribute: null, from: e3 });
      }
      if (e3.removeAttribute(t3), "is" === t3) if (tt2 || et2) try {
        Ot2(e3);
      } catch (t4) {
      }
      else try {
        e3.setAttribute(t3, "");
      } catch (t4) {
      }
    }, Pt2 = function(t3) {
      let e3 = null, i3 = null;
      if (Q2) t3 = "<remove></remove>" + t3;
      else {
        const e4 = xe(t3, /^[\r\n\t ]+/);
        i3 = e4 && e4[0];
      }
      "application/xhtml+xml" === St2 && bt2 === ft2 && (t3 = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t3 + "</body></html>");
      const r3 = x2 ? x2.createHTML(t3) : t3;
      if (bt2 === ft2) try {
        e3 = new g2().parseFromString(r3, St2);
      } catch (t4) {
      }
      if (!e3 || !e3.documentElement) {
        e3 = E2.createDocument(bt2, "template", null);
        try {
          e3.documentElement.innerHTML = vt2 ? C2 : r3;
        } catch (t4) {
        }
      }
      const o3 = e3.body || e3.documentElement;
      return t3 && i3 && o3.insertBefore(n2.createTextNode(i3), o3.childNodes[0] || null), bt2 === ft2 ? k2.call(e3, $2 ? "html" : "body")[0] : $2 ? e3.documentElement : o3;
    }, Mt2 = function(t3) {
      return S2.call(t3.ownerDocument || t3, t3, u2.SHOW_ELEMENT | u2.SHOW_COMMENT | u2.SHOW_TEXT | u2.SHOW_PROCESSING_INSTRUCTION | u2.SHOW_CDATA_SECTION, null);
    }, Bt2 = function(t3) {
      return t3 instanceof d2 && ("string" != typeof t3.nodeName || "string" != typeof t3.textContent || "function" != typeof t3.removeChild || !(t3.attributes instanceof h3) || "function" != typeof t3.removeAttribute || "function" != typeof t3.setAttribute || "string" != typeof t3.namespaceURI || "function" != typeof t3.insertBefore || "function" != typeof t3.hasChildNodes);
    }, _t2 = function(t3) {
      return "function" == typeof l2 && t3 instanceof l2;
    };
    function jt2(t3, e3, n3) {
      me(t3, (t4) => {
        t4.call(i2, e3, n3, Tt2);
      });
    }
    const Wt2 = function(t3) {
      let e3 = null;
      if (jt2(w2.beforeSanitizeElements, t3, null), Bt2(t3)) return Ot2(t3), true;
      const n3 = kt2(t3.nodeName);
      if (jt2(w2.uponSanitizeElement, t3, { tagName: n3, allowedTags: _2 }), t3.hasChildNodes() && !_t2(t3.firstElementChild) && ke(/<[/\w!]/g, t3.innerHTML) && ke(/<[/\w!]/g, t3.textContent)) return Ot2(t3), true;
      if (t3.nodeType === ri) return Ot2(t3), true;
      if (X2 && t3.nodeType === oi && ke(/<[/\w]/g, t3.data)) return Ot2(t3), true;
      if (!_2[n3] || z2[n3]) {
        if (!z2[n3] && Vt2(n3)) {
          if (V2.tagNameCheck instanceof RegExp && ke(V2.tagNameCheck, n3)) return false;
          if (V2.tagNameCheck instanceof Function && V2.tagNameCheck(n3)) return false;
        }
        if (ot2 && !lt2[n3]) {
          const e4 = y2(t3) || t3.parentNode, i3 = A2(t3) || t3.childNodes;
          if (i3 && e4) {
            for (let n4 = i3.length - 1; n4 >= 0; --n4) {
              const r3 = f2(i3[n4], true);
              r3.__removalCount = (t3.__removalCount || 0) + 1, e4.insertBefore(r3, v2(t3));
            }
          }
        }
        return Ot2(t3), true;
      }
      return t3 instanceof c2 && !function(t4) {
        let e4 = y2(t4);
        e4 && e4.tagName || (e4 = { namespaceURI: bt2, tagName: "template" });
        const i3 = Ae(t4.tagName), n4 = Ae(e4.tagName);
        return !!At2[t4.namespaceURI] && (t4.namespaceURI === pt2 ? e4.namespaceURI === ft2 ? "svg" === i3 : e4.namespaceURI === mt2 ? "svg" === i3 && ("annotation-xml" === n4 || xt2[n4]) : Boolean(Nt2[i3]) : t4.namespaceURI === mt2 ? e4.namespaceURI === ft2 ? "math" === i3 : e4.namespaceURI === pt2 ? "math" === i3 && Ct2[n4] : Boolean(It2[i3]) : t4.namespaceURI === ft2 ? !(e4.namespaceURI === pt2 && !Ct2[n4]) && !(e4.namespaceURI === mt2 && !xt2[n4]) && !It2[i3] && (Et2[i3] || !Nt2[i3]) : !("application/xhtml+xml" !== St2 || !At2[t4.namespaceURI]));
      }(t3) ? (Ot2(t3), true) : "noscript" !== n3 && "noembed" !== n3 && "noframes" !== n3 || !ke(/<\/no(script|embed|frames)/i, t3.innerHTML) ? (Y2 && t3.nodeType === ni && (e3 = t3.textContent, me([L2, D2, N2], (t4) => {
        e3 = Ce(e3, t4, " ");
      }), t3.textContent !== e3 && (be(i2.removed, { element: t3.cloneNode() }), t3.textContent = e3)), jt2(w2.afterSanitizeElements, t3, null), false) : (Ot2(t3), true);
    }, Ut2 = function(t3, e3, i3) {
      if (nt2 && ("id" === e3 || "name" === e3) && (i3 in n2 || i3 in wt2)) return false;
      if (J2 && !q2[e3] && ke(I2, e3)) ;
      else if (H2 && ke(O2, e3)) ;
      else if (!W2[e3] || q2[e3]) {
        if (!(Vt2(t3) && (V2.tagNameCheck instanceof RegExp && ke(V2.tagNameCheck, t3) || V2.tagNameCheck instanceof Function && V2.tagNameCheck(t3)) && (V2.attributeNameCheck instanceof RegExp && ke(V2.attributeNameCheck, e3) || V2.attributeNameCheck instanceof Function && V2.attributeNameCheck(e3)) || "is" === e3 && V2.allowCustomizedBuiltInElements && (V2.tagNameCheck instanceof RegExp && ke(V2.tagNameCheck, i3) || V2.tagNameCheck instanceof Function && V2.tagNameCheck(i3)))) return false;
      } else if (dt2[e3]) ;
      else if (ke(B2, Ce(i3, P2, ""))) ;
      else if ("src" !== e3 && "xlink:href" !== e3 && "href" !== e3 || "script" === t3 || 0 !== Ee(i3, "data:") || !ut2[t3]) {
        if (K2 && !ke(F2, Ce(i3, P2, ""))) ;
        else if (i3) return false;
      } else ;
      return true;
    }, Vt2 = function(t3) {
      return "annotation-xml" !== t3 && xe(t3, M2);
    }, zt2 = function(t3) {
      jt2(w2.beforeSanitizeAttributes, t3, null);
      const { attributes: e3 } = t3;
      if (!e3 || Bt2(t3)) return;
      const n3 = { attrName: "", attrValue: "", keepAttr: true, allowedAttributes: W2, forceKeepAttr: void 0 };
      let r3 = e3.length;
      for (; r3--; ) {
        const o3 = e3[r3], { name: s3, namespaceURI: a3, value: l3 } = o3, c3 = kt2(s3);
        let u3 = "value" === s3 ? l3 : Se(l3);
        if (n3.attrName = c3, n3.attrValue = u3, n3.keepAttr = true, n3.forceKeepAttr = void 0, jt2(w2.uponSanitizeAttribute, t3, n3), u3 = n3.attrValue, !rt2 || "id" !== c3 && "name" !== c3 || (Ft2(s3, t3), u3 = "user-content-" + u3), X2 && ke(/((--!?|])>)|<\/(style|title)/i, u3)) {
          Ft2(s3, t3);
          continue;
        }
        if (n3.forceKeepAttr) continue;
        if (Ft2(s3, t3), !n3.keepAttr) continue;
        if (!G2 && ke(/\/>/i, u3)) {
          Ft2(s3, t3);
          continue;
        }
        Y2 && me([L2, D2, N2], (t4) => {
          u3 = Ce(u3, t4, " ");
        });
        const h4 = kt2(t3.nodeName);
        if (Ut2(h4, c3, u3)) {
          if (x2 && "object" == typeof m2 && "function" == typeof m2.getAttributeType) if (a3) ;
          else switch (m2.getAttributeType(h4, c3)) {
            case "TrustedHTML":
              u3 = x2.createHTML(u3);
              break;
            case "TrustedScriptURL":
              u3 = x2.createScriptURL(u3);
          }
          try {
            a3 ? t3.setAttributeNS(a3, s3, u3) : t3.setAttribute(s3, u3), Bt2(t3) ? Ot2(t3) : fe(i2.removed);
          } catch (t4) {
          }
        }
      }
      jt2(w2.afterSanitizeAttributes, t3, null);
    }, qt2 = function t3(e3) {
      let i3 = null;
      const n3 = Mt2(e3);
      for (jt2(w2.beforeSanitizeShadowDOM, e3, null); i3 = n3.nextNode(); ) jt2(w2.uponSanitizeShadowNode, i3, null), Wt2(i3), zt2(i3), i3.content instanceof s2 && t3(i3.content);
      jt2(w2.afterSanitizeShadowDOM, e3, null);
    };
    return i2.sanitize = function(t3) {
      let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n3 = null, o3 = null, a3 = null, c3 = null;
      if (vt2 = !t3, vt2 && (t3 = "<!-->"), "string" != typeof t3 && !_t2(t3)) {
        if ("function" != typeof t3.toString) throw Te("toString is not a function");
        if ("string" != typeof (t3 = t3.toString())) throw Te("dirty is not a string, aborting");
      }
      if (!i2.isSupported) return t3;
      if (Z2 || Dt2(e3), i2.removed = [], "string" == typeof t3 && (st2 = false), st2) {
        if (t3.nodeName) {
          const e4 = kt2(t3.nodeName);
          if (!_2[e4] || z2[e4]) throw Te("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (t3 instanceof l2) n3 = Pt2("<!---->"), o3 = n3.ownerDocument.importNode(t3, true), o3.nodeType === ii && "BODY" === o3.nodeName || "HTML" === o3.nodeName ? n3 = o3 : n3.appendChild(o3);
      else {
        if (!tt2 && !Y2 && !$2 && -1 === t3.indexOf("<")) return x2 && it2 ? x2.createHTML(t3) : t3;
        if (n3 = Pt2(t3), !n3) return tt2 ? null : it2 ? C2 : "";
      }
      n3 && Q2 && Ot2(n3.firstChild);
      const u3 = Mt2(st2 ? t3 : n3);
      for (; a3 = u3.nextNode(); ) Wt2(a3), zt2(a3), a3.content instanceof s2 && qt2(a3.content);
      if (st2) return t3;
      if (tt2) {
        if (et2) for (c3 = R2.call(n3.ownerDocument); n3.firstChild; ) c3.appendChild(n3.firstChild);
        else c3 = n3;
        return (W2.shadowroot || W2.shadowrootmode) && (c3 = T2.call(r2, c3, true)), c3;
      }
      let h4 = $2 ? n3.outerHTML : n3.innerHTML;
      return $2 && _2["!doctype"] && n3.ownerDocument && n3.ownerDocument.doctype && n3.ownerDocument.doctype.name && ke(Qe, n3.ownerDocument.doctype.name) && (h4 = "<!DOCTYPE " + n3.ownerDocument.doctype.name + ">\n" + h4), Y2 && me([L2, D2, N2], (t4) => {
        h4 = Ce(h4, t4, " ");
      }), x2 && it2 ? x2.createHTML(h4) : h4;
    }, i2.setConfig = function() {
      Dt2(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), Z2 = true;
    }, i2.clearConfig = function() {
      Tt2 = null, Z2 = false;
    }, i2.isValidAttribute = function(t3, e3, i3) {
      Tt2 || Dt2({});
      const n3 = kt2(t3), r3 = kt2(e3);
      return Ut2(n3, r3, i3);
    }, i2.addHook = function(t3, e3) {
      "function" == typeof e3 && be(w2[t3], e3);
    }, i2.removeHook = function(t3, e3) {
      if (void 0 !== e3) {
        const i3 = pe(w2[t3], e3);
        return -1 === i3 ? void 0 : ve(w2[t3], i3, 1)[0];
      }
      return fe(w2[t3]);
    }, i2.removeHooks = function(t3) {
      w2[t3] = [];
    }, i2.removeAllHooks = function() {
      w2 = { afterSanitizeAttributes: [], afterSanitizeElements: [], afterSanitizeShadowDOM: [], beforeSanitizeAttributes: [], beforeSanitizeElements: [], beforeSanitizeShadowDOM: [], uponSanitizeAttribute: [], uponSanitizeElement: [], uponSanitizeShadowNode: [] };
    }, i2;
  }();
  li.addHook("uponSanitizeAttribute", function(t3, e2) {
    /^data-trix-/.test(e2.attrName) && (e2.forceKeepAttr = true);
  });
  var ci = "style href src width height language class".split(" ");
  var ui = "javascript:".split(" ");
  var hi = "script iframe form noscript".split(" ");
  var di = class extends q {
    static setHTML(t3, e2, i2) {
      const n2 = new this(e2, i2).sanitize(), r2 = n2.getHTML ? n2.getHTML() : n2.outerHTML;
      t3.innerHTML = r2;
    }
    static sanitize(t3, e2) {
      const i2 = new this(t3, e2);
      return i2.sanitize(), i2;
    }
    constructor(t3) {
      let { allowedAttributes: e2, forbiddenProtocols: i2, forbiddenElements: n2, purifyOptions: r2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      super(...arguments), this.allowedAttributes = e2 || ci, this.forbiddenProtocols = i2 || ui, this.forbiddenElements = n2 || hi, this.purifyOptions = r2 || {}, this.body = gi(t3);
    }
    sanitize() {
      this.sanitizeElements(), this.normalizeListElementNesting();
      const t3 = Object.assign({}, l, this.purifyOptions);
      return li.setConfig(t3), this.body = li.sanitize(this.body), this.body;
    }
    getHTML() {
      return this.body.innerHTML;
    }
    getBody() {
      return this.body;
    }
    sanitizeElements() {
      const t3 = R(this.body), e2 = [];
      for (; t3.nextNode(); ) {
        const i2 = t3.currentNode;
        switch (i2.nodeType) {
          case Node.ELEMENT_NODE:
            this.elementIsRemovable(i2) ? e2.push(i2) : this.sanitizeElement(i2);
            break;
          case Node.COMMENT_NODE:
            e2.push(i2);
        }
      }
      return e2.forEach((t4) => S(t4)), this.body;
    }
    sanitizeElement(t3) {
      return t3.hasAttribute("href") && this.forbiddenProtocols.includes(t3.protocol) && t3.removeAttribute("href"), Array.from(t3.attributes).forEach((e2) => {
        let { name: i2 } = e2;
        this.allowedAttributes.includes(i2) || 0 === i2.indexOf("data-trix") || t3.removeAttribute(i2);
      }), t3;
    }
    normalizeListElementNesting() {
      return Array.from(this.body.querySelectorAll("ul,ol")).forEach((t3) => {
        const e2 = t3.previousElementSibling;
        e2 && "li" === k(e2) && e2.appendChild(t3);
      }), this.body;
    }
    elementIsRemovable(t3) {
      if ((null == t3 ? void 0 : t3.nodeType) === Node.ELEMENT_NODE) return this.elementIsForbidden(t3) || this.elementIsntSerializable(t3);
    }
    elementIsForbidden(t3) {
      return this.forbiddenElements.includes(k(t3));
    }
    elementIsntSerializable(t3) {
      return "false" === t3.getAttribute("data-trix-serialize") && !P(t3);
    }
  };
  var gi = function() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    t3 = t3.replace(/<\/html[^>]*>[^]*$/i, "</html>");
    const e2 = document.implementation.createHTMLDocument("");
    return e2.documentElement.innerHTML = t3, Array.from(e2.head.querySelectorAll("style")).forEach((t4) => {
      e2.body.appendChild(t4);
    }), e2.body;
  };
  var { css: mi } = z;
  var pi = class extends ie {
    constructor() {
      super(...arguments), this.attachment = this.object, this.attachment.uploadProgressDelegate = this, this.attachmentPiece = this.options.piece;
    }
    createContentNodes() {
      return [];
    }
    createNodes() {
      let t3;
      const e2 = t3 = T({ tagName: "figure", className: this.getClassName(), data: this.getData(), editable: false }), i2 = this.getHref();
      return i2 && (t3 = T({ tagName: "a", editable: false, attributes: { href: i2, tabindex: -1 } }), e2.appendChild(t3)), this.attachment.hasContent() ? di.setHTML(t3, this.attachment.getContent()) : this.createContentNodes().forEach((e3) => {
        t3.appendChild(e3);
      }), t3.appendChild(this.createCaptionElement()), this.attachment.isPending() && (this.progressElement = T({ tagName: "progress", attributes: { class: mi.attachmentProgress, value: this.attachment.getUploadProgress(), max: 100 }, data: { trixMutable: true, trixStoreKey: ["progressElement", this.attachment.id].join("/") } }), e2.appendChild(this.progressElement)), [fi("left"), e2, fi("right")];
    }
    createCaptionElement() {
      const t3 = T({ tagName: "figcaption", className: mi.attachmentCaption }), e2 = this.attachmentPiece.getCaption();
      if (e2) t3.classList.add("".concat(mi.attachmentCaption, "--edited")), t3.textContent = e2;
      else {
        let e3, i2;
        const n2 = this.getCaptionConfig();
        if (n2.name && (e3 = this.attachment.getFilename()), n2.size && (i2 = this.attachment.getFormattedFilesize()), e3) {
          const i3 = T({ tagName: "span", className: mi.attachmentName, textContent: e3 });
          t3.appendChild(i3);
        }
        if (i2) {
          e3 && t3.appendChild(document.createTextNode(" "));
          const n3 = T({ tagName: "span", className: mi.attachmentSize, textContent: i2 });
          t3.appendChild(n3);
        }
      }
      return t3;
    }
    getClassName() {
      const t3 = [mi.attachment, "".concat(mi.attachment, "--").concat(this.attachment.getType())], e2 = this.attachment.getExtension();
      return e2 && t3.push("".concat(mi.attachment, "--").concat(e2)), t3.join(" ");
    }
    getData() {
      const t3 = { trixAttachment: JSON.stringify(this.attachment), trixContentType: this.attachment.getContentType(), trixId: this.attachment.id }, { attributes: e2 } = this.attachmentPiece;
      return e2.isEmpty() || (t3.trixAttributes = JSON.stringify(e2)), this.attachment.isPending() && (t3.trixSerialize = false), t3;
    }
    getHref() {
      if (!bi(this.attachment.getContent(), "a")) return this.attachment.getHref();
    }
    getCaptionConfig() {
      var t3;
      const e2 = this.attachment.getType(), n2 = kt(null === (t3 = i[e2]) || void 0 === t3 ? void 0 : t3.caption);
      return "file" === e2 && (n2.name = true), n2;
    }
    findProgressElement() {
      var t3;
      return null === (t3 = this.findElement()) || void 0 === t3 ? void 0 : t3.querySelector("progress");
    }
    attachmentDidChangeUploadProgress() {
      const t3 = this.attachment.getUploadProgress(), e2 = this.findProgressElement();
      e2 && (e2.value = t3);
    }
  };
  var fi = (t3) => T({ tagName: "span", textContent: d, data: { trixCursorTarget: t3, trixSerialize: false } });
  var bi = function(t3, e2) {
    const i2 = T("div");
    return di.setHTML(i2, t3 || ""), i2.querySelector(e2);
  };
  var vi = class extends pi {
    constructor() {
      super(...arguments), this.attachment.previewDelegate = this;
    }
    createContentNodes() {
      return this.image = T({ tagName: "img", attributes: { src: "" }, data: { trixMutable: true } }), this.refresh(this.image), [this.image];
    }
    createCaptionElement() {
      const t3 = super.createCaptionElement(...arguments);
      return t3.textContent || t3.setAttribute("data-trix-placeholder", c.captionPlaceholder), t3;
    }
    refresh(t3) {
      var e2;
      t3 || (t3 = null === (e2 = this.findElement()) || void 0 === e2 ? void 0 : e2.querySelector("img"));
      if (t3) return this.updateAttributesForImage(t3);
    }
    updateAttributesForImage(t3) {
      const e2 = this.attachment.getURL(), i2 = this.attachment.getPreviewURL();
      if (t3.src = i2 || e2, i2 === e2) t3.removeAttribute("data-trix-serialized-attributes");
      else {
        const i3 = JSON.stringify({ src: e2 });
        t3.setAttribute("data-trix-serialized-attributes", i3);
      }
      const n2 = this.attachment.getWidth(), r2 = this.attachment.getHeight();
      null != n2 && (t3.width = n2), null != r2 && (t3.height = r2);
      const o2 = ["imageElement", this.attachment.id, t3.src, t3.width, t3.height].join("/");
      t3.dataset.trixStoreKey = o2;
    }
    attachmentDidChangeAttributes() {
      return this.refresh(this.image), this.refresh();
    }
  };
  var Ai = class extends ie {
    constructor() {
      super(...arguments), this.piece = this.object, this.attributes = this.piece.getAttributes(), this.textConfig = this.options.textConfig, this.context = this.options.context, this.piece.attachment ? this.attachment = this.piece.attachment : this.string = this.piece.toString();
    }
    createNodes() {
      let t3 = this.attachment ? this.createAttachmentNodes() : this.createStringNodes();
      const e2 = this.createElement();
      if (e2) {
        const i2 = function(t4) {
          for (; null !== (e3 = t4) && void 0 !== e3 && e3.firstElementChild; ) {
            var e3;
            t4 = t4.firstElementChild;
          }
          return t4;
        }(e2);
        Array.from(t3).forEach((t4) => {
          i2.appendChild(t4);
        }), t3 = [e2];
      }
      return t3;
    }
    createAttachmentNodes() {
      const t3 = this.attachment.isPreviewable() ? vi : pi;
      return this.createChildView(t3, this.piece.attachment, { piece: this.piece }).getNodes();
    }
    createStringNodes() {
      var t3;
      if (null !== (t3 = this.textConfig) && void 0 !== t3 && t3.plaintext) return [document.createTextNode(this.string)];
      {
        const t4 = [], e2 = this.string.split("\n");
        for (let i2 = 0; i2 < e2.length; i2++) {
          const n2 = e2[i2];
          if (i2 > 0) {
            const e3 = T("br");
            t4.push(e3);
          }
          if (n2.length) {
            const e3 = document.createTextNode(this.preserveSpaces(n2));
            t4.push(e3);
          }
        }
        return t4;
      }
    }
    createElement() {
      let t3, e2, i2;
      const n2 = {};
      for (e2 in this.attributes) {
        i2 = this.attributes[e2];
        const o2 = ft(e2);
        if (o2) {
          if (o2.tagName) {
            var r2;
            const e3 = T(o2.tagName);
            r2 ? (r2.appendChild(e3), r2 = e3) : t3 = r2 = e3;
          }
          if (o2.styleProperty && (n2[o2.styleProperty] = i2), o2.style) for (e2 in o2.style) i2 = o2.style[e2], n2[e2] = i2;
        }
      }
      if (Object.keys(n2).length) for (e2 in t3 || (t3 = T("span")), n2) i2 = n2[e2], t3.style[e2] = i2;
      return t3;
    }
    createContainerElement() {
      for (const t3 in this.attributes) {
        const e2 = this.attributes[t3], i2 = ft(t3);
        if (i2 && i2.groupTagName) {
          const n2 = {};
          return n2[t3] = e2, T(i2.groupTagName, n2);
        }
      }
    }
    preserveSpaces(t3) {
      return this.context.isLast && (t3 = t3.replace(/\ $/, g)), t3 = t3.replace(/(\S)\ {3}(\S)/g, "$1 ".concat(g, " $2")).replace(/\ {2}/g, "".concat(g, " ")).replace(/\ {2}/g, " ".concat(g)), (this.context.isFirst || this.context.followsWhitespace) && (t3 = t3.replace(/^\ /, g)), t3;
    }
  };
  var yi = class extends ie {
    constructor() {
      super(...arguments), this.text = this.object, this.textConfig = this.options.textConfig;
    }
    createNodes() {
      const t3 = [], e2 = $t.groupObjects(this.getPieces()), i2 = e2.length - 1;
      for (let r2 = 0; r2 < e2.length; r2++) {
        const o2 = e2[r2], s2 = {};
        0 === r2 && (s2.isFirst = true), r2 === i2 && (s2.isLast = true), xi(n2) && (s2.followsWhitespace = true);
        const a2 = this.findOrCreateCachedChildView(Ai, o2, { textConfig: this.textConfig, context: s2 });
        t3.push(...Array.from(a2.getNodes() || []));
        var n2 = o2;
      }
      return t3;
    }
    getPieces() {
      return Array.from(this.text.getPieces()).filter((t3) => !t3.hasAttribute("blockBreak"));
    }
  };
  var xi = (t3) => /\s$/.test(null == t3 ? void 0 : t3.toString());
  var { css: Ci } = z;
  var Ei = class extends ie {
    constructor() {
      super(...arguments), this.block = this.object, this.attributes = this.block.getAttributes();
    }
    createNodes() {
      const t3 = [document.createComment("block")];
      if (this.block.isEmpty()) t3.push(T("br"));
      else {
        var e2;
        const i2 = null === (e2 = mt(this.block.getLastAttribute())) || void 0 === e2 ? void 0 : e2.text, n2 = this.findOrCreateCachedChildView(yi, this.block.text, { textConfig: i2 });
        t3.push(...Array.from(n2.getNodes() || [])), this.shouldAddExtraNewlineElement() && t3.push(T("br"));
      }
      if (this.attributes.length) return t3;
      {
        let e3;
        const { tagName: i2 } = n.default;
        this.block.isRTL() && (e3 = { dir: "rtl" });
        const r2 = T({ tagName: i2, attributes: e3 });
        return t3.forEach((t4) => r2.appendChild(t4)), [r2];
      }
    }
    createContainerElement(t3) {
      const e2 = {};
      let i2;
      const n2 = this.attributes[t3], { tagName: r2, htmlAttributes: o2 = [] } = mt(n2);
      if (0 === t3 && this.block.isRTL() && Object.assign(e2, { dir: "rtl" }), "attachmentGallery" === n2) {
        const t4 = this.block.getBlockBreakPosition();
        i2 = "".concat(Ci.attachmentGallery, " ").concat(Ci.attachmentGallery, "--").concat(t4);
      }
      return Object.entries(this.block.htmlAttributes).forEach((t4) => {
        let [i3, n3] = t4;
        o2.includes(i3) && (e2[i3] = n3);
      }), T({ tagName: r2, className: i2, attributes: e2 });
    }
    shouldAddExtraNewlineElement() {
      return /\n\n$/.test(this.block.toString());
    }
  };
  var Si = class extends ie {
    static render(t3) {
      const e2 = T("div"), i2 = new this(t3, { element: e2 });
      return i2.render(), i2.sync(), e2;
    }
    constructor() {
      super(...arguments), this.element = this.options.element, this.elementStore = new Qt(), this.setDocument(this.object);
    }
    setDocument(t3) {
      t3.isEqualTo(this.document) || (this.document = this.object = t3);
    }
    render() {
      if (this.childViews = [], this.shadowElement = T("div"), !this.document.isEmpty()) {
        const t3 = $t.groupObjects(this.document.getBlocks(), { asTree: true });
        Array.from(t3).forEach((t4) => {
          const e2 = this.findOrCreateCachedChildView(Ei, t4);
          Array.from(e2.getNodes()).map((t5) => this.shadowElement.appendChild(t5));
        });
      }
    }
    isSynced() {
      return ki(this.shadowElement, this.element);
    }
    sync() {
      const t3 = this.createDocumentFragmentForSync();
      for (; this.element.lastChild; ) this.element.removeChild(this.element.lastChild);
      return this.element.appendChild(t3), this.didSync();
    }
    didSync() {
      return this.elementStore.reset(Ri(this.element)), Rt(() => this.garbageCollectCachedViews());
    }
    createDocumentFragmentForSync() {
      const t3 = document.createDocumentFragment();
      return Array.from(this.shadowElement.childNodes).forEach((e2) => {
        t3.appendChild(e2.cloneNode(true));
      }), Array.from(Ri(t3)).forEach((t4) => {
        const e2 = this.elementStore.remove(t4);
        e2 && t4.parentNode.replaceChild(e2, t4);
      }), t3;
    }
  };
  var Ri = (t3) => t3.querySelectorAll("[data-trix-store-key]");
  var ki = (t3, e2) => Ti(t3.innerHTML) === Ti(e2.innerHTML);
  var Ti = (t3) => t3.replace(/&nbsp;/g, " ");
  function wi(t3) {
    var e2, i2;
    function n2(e3, i3) {
      try {
        var o2 = t3[e3](i3), s2 = o2.value, a2 = s2 instanceof Li;
        Promise.resolve(a2 ? s2.v : s2).then(function(i4) {
          if (a2) {
            var l2 = "return" === e3 ? "return" : "next";
            if (!s2.k || i4.done) return n2(l2, i4);
            i4 = t3[l2](i4).value;
          }
          r2(o2.done ? "return" : "normal", i4);
        }, function(t4) {
          n2("throw", t4);
        });
      } catch (t4) {
        r2("throw", t4);
      }
    }
    function r2(t4, r3) {
      switch (t4) {
        case "return":
          e2.resolve({ value: r3, done: true });
          break;
        case "throw":
          e2.reject(r3);
          break;
        default:
          e2.resolve({ value: r3, done: false });
      }
      (e2 = e2.next) ? n2(e2.key, e2.arg) : i2 = null;
    }
    this._invoke = function(t4, r3) {
      return new Promise(function(o2, s2) {
        var a2 = { key: t4, arg: r3, resolve: o2, reject: s2, next: null };
        i2 ? i2 = i2.next = a2 : (e2 = i2 = a2, n2(t4, r3));
      });
    }, "function" != typeof t3.return && (this.return = void 0);
  }
  function Li(t3, e2) {
    this.v = t3, this.k = e2;
  }
  function Di(t3, e2, i2) {
    return (e2 = Ni(e2)) in t3 ? Object.defineProperty(t3, e2, { value: i2, enumerable: true, configurable: true, writable: true }) : t3[e2] = i2, t3;
  }
  function Ni(t3) {
    var e2 = function(t4, e3) {
      if ("object" != typeof t4 || null === t4) return t4;
      var i2 = t4[Symbol.toPrimitive];
      if (void 0 !== i2) {
        var n2 = i2.call(t4, e3 || "default");
        if ("object" != typeof n2) return n2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e3 ? String : Number)(t4);
    }(t3, "string");
    return "symbol" == typeof e2 ? e2 : String(e2);
  }
  wi.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
    return this;
  }, wi.prototype.next = function(t3) {
    return this._invoke("next", t3);
  }, wi.prototype.throw = function(t3) {
    return this._invoke("throw", t3);
  }, wi.prototype.return = function(t3) {
    return this._invoke("return", t3);
  };
  function Ii(t3, e2) {
    return Pi(t3, Fi(t3, e2, "get"));
  }
  function Oi(t3, e2, i2) {
    return Mi(t3, Fi(t3, e2, "set"), i2), i2;
  }
  function Fi(t3, e2, i2) {
    if (!e2.has(t3)) throw new TypeError("attempted to " + i2 + " private field on non-instance");
    return e2.get(t3);
  }
  function Pi(t3, e2) {
    return e2.get ? e2.get.call(t3) : e2.value;
  }
  function Mi(t3, e2, i2) {
    if (e2.set) e2.set.call(t3, i2);
    else {
      if (!e2.writable) throw new TypeError("attempted to set read only private field");
      e2.value = i2;
    }
  }
  function Bi(t3, e2, i2) {
    if (!e2.has(t3)) throw new TypeError("attempted to get private field on non-instance");
    return i2;
  }
  function _i(t3, e2) {
    if (e2.has(t3)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function ji(t3, e2, i2) {
    _i(t3, e2), e2.set(t3, i2);
  }
  var Wi = class extends rt {
    static registerType(t3, e2) {
      e2.type = t3, this.types[t3] = e2;
    }
    static fromJSON(t3) {
      const e2 = this.types[t3.type];
      if (e2) return e2.fromJSON(t3);
    }
    constructor(t3) {
      let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      super(...arguments), this.attributes = Ht.box(e2);
    }
    copyWithAttributes(t3) {
      return new this.constructor(this.getValue(), t3);
    }
    copyWithAdditionalAttributes(t3) {
      return this.copyWithAttributes(this.attributes.merge(t3));
    }
    copyWithoutAttribute(t3) {
      return this.copyWithAttributes(this.attributes.remove(t3));
    }
    copy() {
      return this.copyWithAttributes(this.attributes);
    }
    getAttribute(t3) {
      return this.attributes.get(t3);
    }
    getAttributesHash() {
      return this.attributes;
    }
    getAttributes() {
      return this.attributes.toObject();
    }
    hasAttribute(t3) {
      return this.attributes.has(t3);
    }
    hasSameStringValueAsPiece(t3) {
      return t3 && this.toString() === t3.toString();
    }
    hasSameAttributesAsPiece(t3) {
      return t3 && (this.attributes === t3.attributes || this.attributes.isEqualTo(t3.attributes));
    }
    isBlockBreak() {
      return false;
    }
    isEqualTo(t3) {
      return super.isEqualTo(...arguments) || this.hasSameConstructorAs(t3) && this.hasSameStringValueAsPiece(t3) && this.hasSameAttributesAsPiece(t3);
    }
    isEmpty() {
      return 0 === this.length;
    }
    isSerializable() {
      return true;
    }
    toJSON() {
      return { type: this.constructor.type, attributes: this.getAttributes() };
    }
    contentsForInspection() {
      return { type: this.constructor.type, attributes: this.attributes.inspect() };
    }
    canBeGrouped() {
      return this.hasAttribute("href");
    }
    canBeGroupedWith(t3) {
      return this.getAttribute("href") === t3.getAttribute("href");
    }
    getLength() {
      return this.length;
    }
    canBeConsolidatedWith(t3) {
      return false;
    }
  };
  Di(Wi, "types", {});
  var Ui = class extends ee {
    constructor(t3) {
      super(...arguments), this.url = t3;
    }
    perform(t3) {
      const e2 = new Image();
      e2.onload = () => (e2.width = this.width = e2.naturalWidth, e2.height = this.height = e2.naturalHeight, t3(true, e2)), e2.onerror = () => t3(false), e2.src = this.url;
    }
  };
  var Vi = class _Vi extends rt {
    static attachmentForFile(t3) {
      const e2 = new this(this.attributesForFile(t3));
      return e2.setFile(t3), e2;
    }
    static attributesForFile(t3) {
      return new Ht({ filename: t3.name, filesize: t3.size, contentType: t3.type });
    }
    static fromJSON(t3) {
      return new this(t3);
    }
    constructor() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      super(t3), this.releaseFile = this.releaseFile.bind(this), this.attributes = Ht.box(t3), this.didChangeAttributes();
    }
    getAttribute(t3) {
      return this.attributes.get(t3);
    }
    hasAttribute(t3) {
      return this.attributes.has(t3);
    }
    getAttributes() {
      return this.attributes.toObject();
    }
    setAttributes() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const e2 = this.attributes.merge(t3);
      var i2, n2, r2, o2;
      if (!this.attributes.isEqualTo(e2)) return this.attributes = e2, this.didChangeAttributes(), null === (i2 = this.previewDelegate) || void 0 === i2 || null === (n2 = i2.attachmentDidChangeAttributes) || void 0 === n2 || n2.call(i2, this), null === (r2 = this.delegate) || void 0 === r2 || null === (o2 = r2.attachmentDidChangeAttributes) || void 0 === o2 ? void 0 : o2.call(r2, this);
    }
    didChangeAttributes() {
      if (this.isPreviewable()) return this.preloadURL();
    }
    isPending() {
      return null != this.file && !(this.getURL() || this.getHref());
    }
    isPreviewable() {
      return this.attributes.has("previewable") ? this.attributes.get("previewable") : _Vi.previewablePattern.test(this.getContentType());
    }
    getType() {
      return this.hasContent() ? "content" : this.isPreviewable() ? "preview" : "file";
    }
    getURL() {
      return this.attributes.get("url");
    }
    getHref() {
      return this.attributes.get("href");
    }
    getFilename() {
      return this.attributes.get("filename") || "";
    }
    getFilesize() {
      return this.attributes.get("filesize");
    }
    getFormattedFilesize() {
      const t3 = this.attributes.get("filesize");
      return "number" == typeof t3 ? h.formatter(t3) : "";
    }
    getExtension() {
      var t3;
      return null === (t3 = this.getFilename().match(/\.(\w+)$/)) || void 0 === t3 ? void 0 : t3[1].toLowerCase();
    }
    getContentType() {
      return this.attributes.get("contentType");
    }
    hasContent() {
      return this.attributes.has("content");
    }
    getContent() {
      return this.attributes.get("content");
    }
    getWidth() {
      return this.attributes.get("width");
    }
    getHeight() {
      return this.attributes.get("height");
    }
    getFile() {
      return this.file;
    }
    setFile(t3) {
      if (this.file = t3, this.isPreviewable()) return this.preloadFile();
    }
    releaseFile() {
      this.releasePreloadedFile(), this.file = null;
    }
    getUploadProgress() {
      return null != this.uploadProgress ? this.uploadProgress : 0;
    }
    setUploadProgress(t3) {
      var e2, i2;
      if (this.uploadProgress !== t3) return this.uploadProgress = t3, null === (e2 = this.uploadProgressDelegate) || void 0 === e2 || null === (i2 = e2.attachmentDidChangeUploadProgress) || void 0 === i2 ? void 0 : i2.call(e2, this);
    }
    toJSON() {
      return this.getAttributes();
    }
    getCacheKey() {
      return [super.getCacheKey(...arguments), this.attributes.getCacheKey(), this.getPreviewURL()].join("/");
    }
    getPreviewURL() {
      return this.previewURL || this.preloadingURL;
    }
    setPreviewURL(t3) {
      var e2, i2, n2, r2;
      if (t3 !== this.getPreviewURL()) return this.previewURL = t3, null === (e2 = this.previewDelegate) || void 0 === e2 || null === (i2 = e2.attachmentDidChangeAttributes) || void 0 === i2 || i2.call(e2, this), null === (n2 = this.delegate) || void 0 === n2 || null === (r2 = n2.attachmentDidChangePreviewURL) || void 0 === r2 ? void 0 : r2.call(n2, this);
    }
    preloadURL() {
      return this.preload(this.getURL(), this.releaseFile);
    }
    preloadFile() {
      if (this.file) return this.fileObjectURL = URL.createObjectURL(this.file), this.preload(this.fileObjectURL);
    }
    releasePreloadedFile() {
      this.fileObjectURL && (URL.revokeObjectURL(this.fileObjectURL), this.fileObjectURL = null);
    }
    preload(t3, e2) {
      if (t3 && t3 !== this.getPreviewURL()) {
        this.preloadingURL = t3;
        return new Ui(t3).then((i2) => {
          let { width: n2, height: r2 } = i2;
          return this.getWidth() && this.getHeight() || this.setAttributes({ width: n2, height: r2 }), this.preloadingURL = null, this.setPreviewURL(t3), null == e2 ? void 0 : e2();
        }).catch(() => (this.preloadingURL = null, null == e2 ? void 0 : e2()));
      }
    }
  };
  Di(Vi, "previewablePattern", /^image(\/(gif|png|webp|jpe?g)|$)/);
  var zi = class _zi extends Wi {
    static fromJSON(t3) {
      return new this(Vi.fromJSON(t3.attachment), t3.attributes);
    }
    constructor(t3) {
      super(...arguments), this.attachment = t3, this.length = 1, this.ensureAttachmentExclusivelyHasAttribute("href"), this.attachment.hasContent() || this.removeProhibitedAttributes();
    }
    ensureAttachmentExclusivelyHasAttribute(t3) {
      this.hasAttribute(t3) && (this.attachment.hasAttribute(t3) || this.attachment.setAttributes(this.attributes.slice([t3])), this.attributes = this.attributes.remove(t3));
    }
    removeProhibitedAttributes() {
      const t3 = this.attributes.slice(_zi.permittedAttributes);
      t3.isEqualTo(this.attributes) || (this.attributes = t3);
    }
    getValue() {
      return this.attachment;
    }
    isSerializable() {
      return !this.attachment.isPending();
    }
    getCaption() {
      return this.attributes.get("caption") || "";
    }
    isEqualTo(t3) {
      var e2;
      return super.isEqualTo(t3) && this.attachment.id === (null == t3 || null === (e2 = t3.attachment) || void 0 === e2 ? void 0 : e2.id);
    }
    toString() {
      return "\uFFFC";
    }
    toJSON() {
      const t3 = super.toJSON(...arguments);
      return t3.attachment = this.attachment, t3;
    }
    getCacheKey() {
      return [super.getCacheKey(...arguments), this.attachment.getCacheKey()].join("/");
    }
    toConsole() {
      return JSON.stringify(this.toString());
    }
  };
  Di(zi, "permittedAttributes", ["caption", "presentation"]), Wi.registerType("attachment", zi);
  var qi = class extends Wi {
    static fromJSON(t3) {
      return new this(t3.string, t3.attributes);
    }
    constructor(t3) {
      super(...arguments), this.string = ((t4) => t4.replace(/\r\n?/g, "\n"))(t3), this.length = this.string.length;
    }
    getValue() {
      return this.string;
    }
    toString() {
      return this.string.toString();
    }
    isBlockBreak() {
      return "\n" === this.toString() && true === this.getAttribute("blockBreak");
    }
    toJSON() {
      const t3 = super.toJSON(...arguments);
      return t3.string = this.string, t3;
    }
    canBeConsolidatedWith(t3) {
      return t3 && this.hasSameConstructorAs(t3) && this.hasSameAttributesAsPiece(t3);
    }
    consolidateWith(t3) {
      return new this.constructor(this.toString() + t3.toString(), this.attributes);
    }
    splitAtOffset(t3) {
      let e2, i2;
      return 0 === t3 ? (e2 = null, i2 = this) : t3 === this.length ? (e2 = this, i2 = null) : (e2 = new this.constructor(this.string.slice(0, t3), this.attributes), i2 = new this.constructor(this.string.slice(t3), this.attributes)), [e2, i2];
    }
    toConsole() {
      let { string: t3 } = this;
      return t3.length > 15 && (t3 = t3.slice(0, 14) + "\u2026"), JSON.stringify(t3.toString());
    }
  };
  Wi.registerType("string", qi);
  var Hi = class extends rt {
    static box(t3) {
      return t3 instanceof this ? t3 : new this(t3);
    }
    constructor() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      super(...arguments), this.objects = t3.slice(0), this.length = this.objects.length;
    }
    indexOf(t3) {
      return this.objects.indexOf(t3);
    }
    splice() {
      for (var t3 = arguments.length, e2 = new Array(t3), i2 = 0; i2 < t3; i2++) e2[i2] = arguments[i2];
      return new this.constructor(st(this.objects, ...e2));
    }
    eachObject(t3) {
      return this.objects.map((e2, i2) => t3(e2, i2));
    }
    insertObjectAtIndex(t3, e2) {
      return this.splice(e2, 0, t3);
    }
    insertSplittableListAtIndex(t3, e2) {
      return this.splice(e2, 0, ...t3.objects);
    }
    insertSplittableListAtPosition(t3, e2) {
      const [i2, n2] = this.splitObjectAtPosition(e2);
      return new this.constructor(i2).insertSplittableListAtIndex(t3, n2);
    }
    editObjectAtIndex(t3, e2) {
      return this.replaceObjectAtIndex(e2(this.objects[t3]), t3);
    }
    replaceObjectAtIndex(t3, e2) {
      return this.splice(e2, 1, t3);
    }
    removeObjectAtIndex(t3) {
      return this.splice(t3, 1);
    }
    getObjectAtIndex(t3) {
      return this.objects[t3];
    }
    getSplittableListInRange(t3) {
      const [e2, i2, n2] = this.splitObjectsAtRange(t3);
      return new this.constructor(e2.slice(i2, n2 + 1));
    }
    selectSplittableList(t3) {
      const e2 = this.objects.filter((e3) => t3(e3));
      return new this.constructor(e2);
    }
    removeObjectsInRange(t3) {
      const [e2, i2, n2] = this.splitObjectsAtRange(t3);
      return new this.constructor(e2).splice(i2, n2 - i2 + 1);
    }
    transformObjectsInRange(t3, e2) {
      const [i2, n2, r2] = this.splitObjectsAtRange(t3), o2 = i2.map((t4, i3) => n2 <= i3 && i3 <= r2 ? e2(t4) : t4);
      return new this.constructor(o2);
    }
    splitObjectsAtRange(t3) {
      let e2, [i2, n2, r2] = this.splitObjectAtPosition(Ki(t3));
      return [i2, e2] = new this.constructor(i2).splitObjectAtPosition(Gi(t3) + r2), [i2, n2, e2 - 1];
    }
    getObjectAtPosition(t3) {
      const { index: e2 } = this.findIndexAndOffsetAtPosition(t3);
      return this.objects[e2];
    }
    splitObjectAtPosition(t3) {
      let e2, i2;
      const { index: n2, offset: r2 } = this.findIndexAndOffsetAtPosition(t3), o2 = this.objects.slice(0);
      if (null != n2) if (0 === r2) e2 = n2, i2 = 0;
      else {
        const t4 = this.getObjectAtIndex(n2), [s2, a2] = t4.splitAtOffset(r2);
        o2.splice(n2, 1, s2, a2), e2 = n2 + 1, i2 = s2.getLength() - r2;
      }
      else e2 = o2.length, i2 = 0;
      return [o2, e2, i2];
    }
    consolidate() {
      const t3 = [];
      let e2 = this.objects[0];
      return this.objects.slice(1).forEach((i2) => {
        var n2, r2;
        null !== (n2 = (r2 = e2).canBeConsolidatedWith) && void 0 !== n2 && n2.call(r2, i2) ? e2 = e2.consolidateWith(i2) : (t3.push(e2), e2 = i2);
      }), e2 && t3.push(e2), new this.constructor(t3);
    }
    consolidateFromIndexToIndex(t3, e2) {
      const i2 = this.objects.slice(0).slice(t3, e2 + 1), n2 = new this.constructor(i2).consolidate().toArray();
      return this.splice(t3, i2.length, ...n2);
    }
    findIndexAndOffsetAtPosition(t3) {
      let e2, i2 = 0;
      for (e2 = 0; e2 < this.objects.length; e2++) {
        const n2 = i2 + this.objects[e2].getLength();
        if (i2 <= t3 && t3 < n2) return { index: e2, offset: t3 - i2 };
        i2 = n2;
      }
      return { index: null, offset: null };
    }
    findPositionAtIndexAndOffset(t3, e2) {
      let i2 = 0;
      for (let n2 = 0; n2 < this.objects.length; n2++) {
        const r2 = this.objects[n2];
        if (n2 < t3) i2 += r2.getLength();
        else if (n2 === t3) {
          i2 += e2;
          break;
        }
      }
      return i2;
    }
    getEndPosition() {
      return null == this.endPosition && (this.endPosition = 0, this.objects.forEach((t3) => this.endPosition += t3.getLength())), this.endPosition;
    }
    toString() {
      return this.objects.join("");
    }
    toArray() {
      return this.objects.slice(0);
    }
    toJSON() {
      return this.toArray();
    }
    isEqualTo(t3) {
      return super.isEqualTo(...arguments) || Ji(this.objects, null == t3 ? void 0 : t3.objects);
    }
    contentsForInspection() {
      return { objects: "[".concat(this.objects.map((t3) => t3.inspect()).join(", "), "]") };
    }
  };
  var Ji = function(t3) {
    let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (t3.length !== e2.length) return false;
    let i2 = true;
    for (let n2 = 0; n2 < t3.length; n2++) {
      const r2 = t3[n2];
      i2 && !r2.isEqualTo(e2[n2]) && (i2 = false);
    }
    return i2;
  };
  var Ki = (t3) => t3[0];
  var Gi = (t3) => t3[1];
  var Yi = class extends rt {
    static textForAttachmentWithAttributes(t3, e2) {
      return new this([new zi(t3, e2)]);
    }
    static textForStringWithAttributes(t3, e2) {
      return new this([new qi(t3, e2)]);
    }
    static fromJSON(t3) {
      return new this(Array.from(t3).map((t4) => Wi.fromJSON(t4)));
    }
    constructor() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      super(...arguments);
      const e2 = t3.filter((t4) => !t4.isEmpty());
      this.pieceList = new Hi(e2);
    }
    copy() {
      return this.copyWithPieceList(this.pieceList);
    }
    copyWithPieceList(t3) {
      return new this.constructor(t3.consolidate().toArray());
    }
    copyUsingObjectMap(t3) {
      const e2 = this.getPieces().map((e3) => t3.find(e3) || e3);
      return new this.constructor(e2);
    }
    appendText(t3) {
      return this.insertTextAtPosition(t3, this.getLength());
    }
    insertTextAtPosition(t3, e2) {
      return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t3.pieceList, e2));
    }
    removeTextAtRange(t3) {
      return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t3));
    }
    replaceTextAtRange(t3, e2) {
      return this.removeTextAtRange(e2).insertTextAtPosition(t3, e2[0]);
    }
    moveTextFromRangeToPosition(t3, e2) {
      if (t3[0] <= e2 && e2 <= t3[1]) return;
      const i2 = this.getTextAtRange(t3), n2 = i2.getLength();
      return t3[0] < e2 && (e2 -= n2), this.removeTextAtRange(t3).insertTextAtPosition(i2, e2);
    }
    addAttributeAtRange(t3, e2, i2) {
      const n2 = {};
      return n2[t3] = e2, this.addAttributesAtRange(n2, i2);
    }
    addAttributesAtRange(t3, e2) {
      return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e2, (e3) => e3.copyWithAdditionalAttributes(t3)));
    }
    removeAttributeAtRange(t3, e2) {
      return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e2, (e3) => e3.copyWithoutAttribute(t3)));
    }
    setAttributesAtRange(t3, e2) {
      return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e2, (e3) => e3.copyWithAttributes(t3)));
    }
    getAttributesAtPosition(t3) {
      var e2;
      return (null === (e2 = this.pieceList.getObjectAtPosition(t3)) || void 0 === e2 ? void 0 : e2.getAttributes()) || {};
    }
    getCommonAttributes() {
      const t3 = Array.from(this.pieceList.toArray()).map((t4) => t4.getAttributes());
      return Ht.fromCommonAttributesOfObjects(t3).toObject();
    }
    getCommonAttributesAtRange(t3) {
      return this.getTextAtRange(t3).getCommonAttributes() || {};
    }
    getExpandedRangeForAttributeAtOffset(t3, e2) {
      let i2, n2 = i2 = e2;
      const r2 = this.getLength();
      for (; n2 > 0 && this.getCommonAttributesAtRange([n2 - 1, i2])[t3]; ) n2--;
      for (; i2 < r2 && this.getCommonAttributesAtRange([e2, i2 + 1])[t3]; ) i2++;
      return [n2, i2];
    }
    getTextAtRange(t3) {
      return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t3));
    }
    getStringAtRange(t3) {
      return this.pieceList.getSplittableListInRange(t3).toString();
    }
    getStringAtPosition(t3) {
      return this.getStringAtRange([t3, t3 + 1]);
    }
    startsWithString(t3) {
      return this.getStringAtRange([0, t3.length]) === t3;
    }
    endsWithString(t3) {
      const e2 = this.getLength();
      return this.getStringAtRange([e2 - t3.length, e2]) === t3;
    }
    getAttachmentPieces() {
      return this.pieceList.toArray().filter((t3) => !!t3.attachment);
    }
    getAttachments() {
      return this.getAttachmentPieces().map((t3) => t3.attachment);
    }
    getAttachmentAndPositionById(t3) {
      let e2 = 0;
      for (const n2 of this.pieceList.toArray()) {
        var i2;
        if ((null === (i2 = n2.attachment) || void 0 === i2 ? void 0 : i2.id) === t3) return { attachment: n2.attachment, position: e2 };
        e2 += n2.length;
      }
      return { attachment: null, position: null };
    }
    getAttachmentById(t3) {
      const { attachment: e2 } = this.getAttachmentAndPositionById(t3);
      return e2;
    }
    getRangeOfAttachment(t3) {
      const e2 = this.getAttachmentAndPositionById(t3.id), i2 = e2.position;
      if (t3 = e2.attachment) return [i2, i2 + 1];
    }
    updateAttributesForAttachment(t3, e2) {
      const i2 = this.getRangeOfAttachment(e2);
      return i2 ? this.addAttributesAtRange(t3, i2) : this;
    }
    getLength() {
      return this.pieceList.getEndPosition();
    }
    isEmpty() {
      return 0 === this.getLength();
    }
    isEqualTo(t3) {
      var e2;
      return super.isEqualTo(t3) || (null == t3 || null === (e2 = t3.pieceList) || void 0 === e2 ? void 0 : e2.isEqualTo(this.pieceList));
    }
    isBlockBreak() {
      return 1 === this.getLength() && this.pieceList.getObjectAtIndex(0).isBlockBreak();
    }
    eachPiece(t3) {
      return this.pieceList.eachObject(t3);
    }
    getPieces() {
      return this.pieceList.toArray();
    }
    getPieceAtPosition(t3) {
      return this.pieceList.getObjectAtPosition(t3);
    }
    contentsForInspection() {
      return { pieceList: this.pieceList.inspect() };
    }
    toSerializableText() {
      const t3 = this.pieceList.selectSplittableList((t4) => t4.isSerializable());
      return this.copyWithPieceList(t3);
    }
    toString() {
      return this.pieceList.toString();
    }
    toJSON() {
      return this.pieceList.toJSON();
    }
    toConsole() {
      return JSON.stringify(this.pieceList.toArray().map((t3) => JSON.parse(t3.toConsole())));
    }
    getDirection() {
      return lt(this.toString());
    }
    isRTL() {
      return "rtl" === this.getDirection();
    }
  };
  var Xi = class _Xi extends rt {
    static fromJSON(t3) {
      return new this(Yi.fromJSON(t3.text), t3.attributes, t3.htmlAttributes);
    }
    constructor(t3, e2, i2) {
      super(...arguments), this.text = $i(t3 || new Yi()), this.attributes = e2 || [], this.htmlAttributes = i2 || {};
    }
    isEmpty() {
      return this.text.isBlockBreak();
    }
    isEqualTo(t3) {
      return !!super.isEqualTo(t3) || this.text.isEqualTo(null == t3 ? void 0 : t3.text) && ot(this.attributes, null == t3 ? void 0 : t3.attributes) && Tt(this.htmlAttributes, null == t3 ? void 0 : t3.htmlAttributes);
    }
    copyWithText(t3) {
      return new _Xi(t3, this.attributes, this.htmlAttributes);
    }
    copyWithoutText() {
      return this.copyWithText(null);
    }
    copyWithAttributes(t3) {
      return new _Xi(this.text, t3, this.htmlAttributes);
    }
    copyWithoutAttributes() {
      return this.copyWithAttributes(null);
    }
    copyUsingObjectMap(t3) {
      const e2 = t3.find(this.text);
      return e2 ? this.copyWithText(e2) : this.copyWithText(this.text.copyUsingObjectMap(t3));
    }
    addAttribute(t3) {
      const e2 = this.attributes.concat(rn(t3));
      return this.copyWithAttributes(e2);
    }
    addHTMLAttribute(t3, e2) {
      const i2 = Object.assign({}, this.htmlAttributes, { [t3]: e2 });
      return new _Xi(this.text, this.attributes, i2);
    }
    removeAttribute(t3) {
      const { listAttribute: e2 } = mt(t3), i2 = sn(sn(this.attributes, t3), e2);
      return this.copyWithAttributes(i2);
    }
    removeLastAttribute() {
      return this.removeAttribute(this.getLastAttribute());
    }
    getLastAttribute() {
      return on(this.attributes);
    }
    getAttributes() {
      return this.attributes.slice(0);
    }
    getAttributeLevel() {
      return this.attributes.length;
    }
    getAttributeAtLevel(t3) {
      return this.attributes[t3 - 1];
    }
    hasAttribute(t3) {
      return this.attributes.includes(t3);
    }
    hasAttributes() {
      return this.getAttributeLevel() > 0;
    }
    getLastNestableAttribute() {
      return on(this.getNestableAttributes());
    }
    getNestableAttributes() {
      return this.attributes.filter((t3) => mt(t3).nestable);
    }
    getNestingLevel() {
      return this.getNestableAttributes().length;
    }
    decreaseNestingLevel() {
      const t3 = this.getLastNestableAttribute();
      return t3 ? this.removeAttribute(t3) : this;
    }
    increaseNestingLevel() {
      const t3 = this.getLastNestableAttribute();
      if (t3) {
        const e2 = this.attributes.lastIndexOf(t3), i2 = st(this.attributes, e2 + 1, 0, ...rn(t3));
        return this.copyWithAttributes(i2);
      }
      return this;
    }
    getListItemAttributes() {
      return this.attributes.filter((t3) => mt(t3).listAttribute);
    }
    isListItem() {
      var t3;
      return null === (t3 = mt(this.getLastAttribute())) || void 0 === t3 ? void 0 : t3.listAttribute;
    }
    isTerminalBlock() {
      var t3;
      return null === (t3 = mt(this.getLastAttribute())) || void 0 === t3 ? void 0 : t3.terminal;
    }
    breaksOnReturn() {
      var t3;
      return null === (t3 = mt(this.getLastAttribute())) || void 0 === t3 ? void 0 : t3.breakOnReturn;
    }
    findLineBreakInDirectionFromPosition(t3, e2) {
      const i2 = this.toString();
      let n2;
      switch (t3) {
        case "forward":
          n2 = i2.indexOf("\n", e2);
          break;
        case "backward":
          n2 = i2.slice(0, e2).lastIndexOf("\n");
      }
      if (-1 !== n2) return n2;
    }
    contentsForInspection() {
      return { text: this.text.inspect(), attributes: this.attributes };
    }
    toString() {
      return this.text.toString();
    }
    toJSON() {
      return { text: this.text, attributes: this.attributes, htmlAttributes: this.htmlAttributes };
    }
    getDirection() {
      return this.text.getDirection();
    }
    isRTL() {
      return this.text.isRTL();
    }
    getLength() {
      return this.text.getLength();
    }
    canBeConsolidatedWith(t3) {
      return !this.hasAttributes() && !t3.hasAttributes() && this.getDirection() === t3.getDirection();
    }
    consolidateWith(t3) {
      const e2 = Yi.textForStringWithAttributes("\n"), i2 = this.getTextWithoutBlockBreak().appendText(e2);
      return this.copyWithText(i2.appendText(t3.text));
    }
    splitAtOffset(t3) {
      let e2, i2;
      return 0 === t3 ? (e2 = null, i2 = this) : t3 === this.getLength() ? (e2 = this, i2 = null) : (e2 = this.copyWithText(this.text.getTextAtRange([0, t3])), i2 = this.copyWithText(this.text.getTextAtRange([t3, this.getLength()]))), [e2, i2];
    }
    getBlockBreakPosition() {
      return this.text.getLength() - 1;
    }
    getTextWithoutBlockBreak() {
      return en(this.text) ? this.text.getTextAtRange([0, this.getBlockBreakPosition()]) : this.text.copy();
    }
    canBeGrouped(t3) {
      return this.attributes[t3];
    }
    canBeGroupedWith(t3, e2) {
      const i2 = t3.getAttributes(), r2 = i2[e2], o2 = this.attributes[e2];
      return o2 === r2 && !(false === mt(o2).group && !(() => {
        if (!dt) {
          dt = [];
          for (const t4 in n) {
            const { listAttribute: e3 } = n[t4];
            null != e3 && dt.push(e3);
          }
        }
        return dt;
      })().includes(i2[e2 + 1])) && (this.getDirection() === t3.getDirection() || t3.isEmpty());
    }
  };
  var $i = function(t3) {
    return t3 = Zi(t3), t3 = tn(t3);
  };
  var Zi = function(t3) {
    let e2 = false;
    const i2 = t3.getPieces();
    let n2 = i2.slice(0, i2.length - 1);
    const r2 = i2[i2.length - 1];
    return r2 ? (n2 = n2.map((t4) => t4.isBlockBreak() ? (e2 = true, nn(t4)) : t4), e2 ? new Yi([...n2, r2]) : t3) : t3;
  };
  var Qi = Yi.textForStringWithAttributes("\n", { blockBreak: true });
  var tn = function(t3) {
    return en(t3) ? t3 : t3.appendText(Qi);
  };
  var en = function(t3) {
    const e2 = t3.getLength();
    if (0 === e2) return false;
    return t3.getTextAtRange([e2 - 1, e2]).isBlockBreak();
  };
  var nn = (t3) => t3.copyWithoutAttribute("blockBreak");
  var rn = function(t3) {
    const { listAttribute: e2 } = mt(t3);
    return e2 ? [e2, t3] : [t3];
  };
  var on = (t3) => t3.slice(-1)[0];
  var sn = function(t3, e2) {
    const i2 = t3.lastIndexOf(e2);
    return -1 === i2 ? t3 : st(t3, i2, 1);
  };
  var an = class extends rt {
    static fromJSON(t3) {
      return new this(Array.from(t3).map((t4) => Xi.fromJSON(t4)));
    }
    static fromString(t3, e2) {
      const i2 = Yi.textForStringWithAttributes(t3, e2);
      return new this([new Xi(i2)]);
    }
    constructor() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      super(...arguments), 0 === t3.length && (t3 = [new Xi()]), this.blockList = Hi.box(t3);
    }
    isEmpty() {
      const t3 = this.getBlockAtIndex(0);
      return 1 === this.blockList.length && t3.isEmpty() && !t3.hasAttributes();
    }
    copy() {
      const t3 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).consolidateBlocks ? this.blockList.consolidate().toArray() : this.blockList.toArray();
      return new this.constructor(t3);
    }
    copyUsingObjectsFromDocument(t3) {
      const e2 = new Zt(t3.getObjects());
      return this.copyUsingObjectMap(e2);
    }
    copyUsingObjectMap(t3) {
      const e2 = this.getBlocks().map((e3) => t3.find(e3) || e3.copyUsingObjectMap(t3));
      return new this.constructor(e2);
    }
    copyWithBaseBlockAttributes() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      const e2 = this.getBlocks().map((e3) => {
        const i2 = t3.concat(e3.getAttributes());
        return e3.copyWithAttributes(i2);
      });
      return new this.constructor(e2);
    }
    replaceBlock(t3, e2) {
      const i2 = this.blockList.indexOf(t3);
      return -1 === i2 ? this : new this.constructor(this.blockList.replaceObjectAtIndex(e2, i2));
    }
    insertDocumentAtRange(t3, e2) {
      const { blockList: i2 } = t3;
      e2 = wt(e2);
      let [n2] = e2;
      const { index: r2, offset: o2 } = this.locationFromPosition(n2);
      let s2 = this;
      const a2 = this.getBlockAtPosition(n2);
      return Lt(e2) && a2.isEmpty() && !a2.hasAttributes() ? s2 = new this.constructor(s2.blockList.removeObjectAtIndex(r2)) : a2.getBlockBreakPosition() === o2 && n2++, s2 = s2.removeTextAtRange(e2), new this.constructor(s2.blockList.insertSplittableListAtPosition(i2, n2));
    }
    mergeDocumentAtRange(t3, e2) {
      let i2, n2;
      e2 = wt(e2);
      const [r2] = e2, o2 = this.locationFromPosition(r2), s2 = this.getBlockAtIndex(o2.index).getAttributes(), a2 = t3.getBaseBlockAttributes(), l2 = s2.slice(-a2.length);
      if (ot(a2, l2)) {
        const e3 = s2.slice(0, -a2.length);
        i2 = t3.copyWithBaseBlockAttributes(e3);
      } else i2 = t3.copy({ consolidateBlocks: true }).copyWithBaseBlockAttributes(s2);
      const c2 = i2.getBlockCount(), u2 = i2.getBlockAtIndex(0);
      if (ot(s2, u2.getAttributes())) {
        const t4 = u2.getTextWithoutBlockBreak();
        if (n2 = this.insertTextAtRange(t4, e2), c2 > 1) {
          i2 = new this.constructor(i2.getBlocks().slice(1));
          const e3 = r2 + t4.getLength();
          n2 = n2.insertDocumentAtRange(i2, e3);
        }
      } else n2 = this.insertDocumentAtRange(i2, e2);
      return n2;
    }
    insertTextAtRange(t3, e2) {
      e2 = wt(e2);
      const [i2] = e2, { index: n2, offset: r2 } = this.locationFromPosition(i2), o2 = this.removeTextAtRange(e2);
      return new this.constructor(o2.blockList.editObjectAtIndex(n2, (e3) => e3.copyWithText(e3.text.insertTextAtPosition(t3, r2))));
    }
    removeTextAtRange(t3) {
      let e2;
      t3 = wt(t3);
      const [i2, n2] = t3;
      if (Lt(t3)) return this;
      const [r2, o2] = Array.from(this.locationRangeFromRange(t3)), s2 = r2.index, a2 = r2.offset, l2 = this.getBlockAtIndex(s2), c2 = o2.index, u2 = o2.offset, h3 = this.getBlockAtIndex(c2);
      if (n2 - i2 == 1 && l2.getBlockBreakPosition() === a2 && h3.getBlockBreakPosition() !== u2 && "\n" === h3.text.getStringAtPosition(u2)) e2 = this.blockList.editObjectAtIndex(c2, (t4) => t4.copyWithText(t4.text.removeTextAtRange([u2, u2 + 1])));
      else {
        let t4;
        const i3 = l2.text.getTextAtRange([0, a2]), n3 = h3.text.getTextAtRange([u2, h3.getLength()]), r3 = i3.appendText(n3);
        t4 = s2 !== c2 && 0 === a2 && l2.getAttributeLevel() >= h3.getAttributeLevel() ? h3.copyWithText(r3) : l2.copyWithText(r3);
        const o3 = c2 + 1 - s2;
        e2 = this.blockList.splice(s2, o3, t4);
      }
      return new this.constructor(e2);
    }
    moveTextFromRangeToPosition(t3, e2) {
      let i2;
      t3 = wt(t3);
      const [n2, r2] = t3;
      if (n2 <= e2 && e2 <= r2) return this;
      let o2 = this.getDocumentAtRange(t3), s2 = this.removeTextAtRange(t3);
      const a2 = n2 < e2;
      a2 && (e2 -= o2.getLength());
      const [l2, ...c2] = o2.getBlocks();
      return 0 === c2.length ? (i2 = l2.getTextWithoutBlockBreak(), a2 && (e2 += 1)) : i2 = l2.text, s2 = s2.insertTextAtRange(i2, e2), 0 === c2.length ? s2 : (o2 = new this.constructor(c2), e2 += i2.getLength(), s2.insertDocumentAtRange(o2, e2));
    }
    addAttributeAtRange(t3, e2, i2) {
      let { blockList: n2 } = this;
      return this.eachBlockAtRange(i2, (i3, r2, o2) => n2 = n2.editObjectAtIndex(o2, function() {
        return mt(t3) ? i3.addAttribute(t3, e2) : r2[0] === r2[1] ? i3 : i3.copyWithText(i3.text.addAttributeAtRange(t3, e2, r2));
      })), new this.constructor(n2);
    }
    addAttribute(t3, e2) {
      let { blockList: i2 } = this;
      return this.eachBlock((n2, r2) => i2 = i2.editObjectAtIndex(r2, () => n2.addAttribute(t3, e2))), new this.constructor(i2);
    }
    removeAttributeAtRange(t3, e2) {
      let { blockList: i2 } = this;
      return this.eachBlockAtRange(e2, function(e3, n2, r2) {
        mt(t3) ? i2 = i2.editObjectAtIndex(r2, () => e3.removeAttribute(t3)) : n2[0] !== n2[1] && (i2 = i2.editObjectAtIndex(r2, () => e3.copyWithText(e3.text.removeAttributeAtRange(t3, n2))));
      }), new this.constructor(i2);
    }
    updateAttributesForAttachment(t3, e2) {
      const i2 = this.getRangeOfAttachment(e2), [n2] = Array.from(i2), { index: r2 } = this.locationFromPosition(n2), o2 = this.getTextAtIndex(r2);
      return new this.constructor(this.blockList.editObjectAtIndex(r2, (i3) => i3.copyWithText(o2.updateAttributesForAttachment(t3, e2))));
    }
    removeAttributeForAttachment(t3, e2) {
      const i2 = this.getRangeOfAttachment(e2);
      return this.removeAttributeAtRange(t3, i2);
    }
    setHTMLAttributeAtPosition(t3, e2, i2) {
      const n2 = this.getBlockAtPosition(t3), r2 = n2.addHTMLAttribute(e2, i2);
      return this.replaceBlock(n2, r2);
    }
    insertBlockBreakAtRange(t3) {
      let e2;
      t3 = wt(t3);
      const [i2] = t3, { offset: n2 } = this.locationFromPosition(i2), r2 = this.removeTextAtRange(t3);
      return 0 === n2 && (e2 = [new Xi()]), new this.constructor(r2.blockList.insertSplittableListAtPosition(new Hi(e2), i2));
    }
    applyBlockAttributeAtRange(t3, e2, i2) {
      const n2 = this.expandRangeToLineBreaksAndSplitBlocks(i2);
      let r2 = n2.document;
      i2 = n2.range;
      const o2 = mt(t3);
      if (o2.listAttribute) {
        r2 = r2.removeLastListAttributeAtRange(i2, { exceptAttributeName: t3 });
        const e3 = r2.convertLineBreaksToBlockBreaksInRange(i2);
        r2 = e3.document, i2 = e3.range;
      } else r2 = o2.exclusive ? r2.removeBlockAttributesAtRange(i2) : o2.terminal ? r2.removeLastTerminalAttributeAtRange(i2) : r2.consolidateBlocksAtRange(i2);
      return r2.addAttributeAtRange(t3, e2, i2);
    }
    removeLastListAttributeAtRange(t3) {
      let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { blockList: i2 } = this;
      return this.eachBlockAtRange(t3, function(t4, n2, r2) {
        const o2 = t4.getLastAttribute();
        o2 && mt(o2).listAttribute && o2 !== e2.exceptAttributeName && (i2 = i2.editObjectAtIndex(r2, () => t4.removeAttribute(o2)));
      }), new this.constructor(i2);
    }
    removeLastTerminalAttributeAtRange(t3) {
      let { blockList: e2 } = this;
      return this.eachBlockAtRange(t3, function(t4, i2, n2) {
        const r2 = t4.getLastAttribute();
        r2 && mt(r2).terminal && (e2 = e2.editObjectAtIndex(n2, () => t4.removeAttribute(r2)));
      }), new this.constructor(e2);
    }
    removeBlockAttributesAtRange(t3) {
      let { blockList: e2 } = this;
      return this.eachBlockAtRange(t3, function(t4, i2, n2) {
        t4.hasAttributes() && (e2 = e2.editObjectAtIndex(n2, () => t4.copyWithoutAttributes()));
      }), new this.constructor(e2);
    }
    expandRangeToLineBreaksAndSplitBlocks(t3) {
      let e2;
      t3 = wt(t3);
      let [i2, n2] = t3;
      const r2 = this.locationFromPosition(i2), o2 = this.locationFromPosition(n2);
      let s2 = this;
      const a2 = s2.getBlockAtIndex(r2.index);
      if (r2.offset = a2.findLineBreakInDirectionFromPosition("backward", r2.offset), null != r2.offset && (e2 = s2.positionFromLocation(r2), s2 = s2.insertBlockBreakAtRange([e2, e2 + 1]), o2.index += 1, o2.offset -= s2.getBlockAtIndex(r2.index).getLength(), r2.index += 1), r2.offset = 0, 0 === o2.offset && o2.index > r2.index) o2.index -= 1, o2.offset = s2.getBlockAtIndex(o2.index).getBlockBreakPosition();
      else {
        const t4 = s2.getBlockAtIndex(o2.index);
        "\n" === t4.text.getStringAtRange([o2.offset - 1, o2.offset]) ? o2.offset -= 1 : o2.offset = t4.findLineBreakInDirectionFromPosition("forward", o2.offset), o2.offset !== t4.getBlockBreakPosition() && (e2 = s2.positionFromLocation(o2), s2 = s2.insertBlockBreakAtRange([e2, e2 + 1]));
      }
      return i2 = s2.positionFromLocation(r2), n2 = s2.positionFromLocation(o2), { document: s2, range: t3 = wt([i2, n2]) };
    }
    convertLineBreaksToBlockBreaksInRange(t3) {
      t3 = wt(t3);
      let [e2] = t3;
      const i2 = this.getStringAtRange(t3).slice(0, -1);
      let n2 = this;
      return i2.replace(/.*?\n/g, function(t4) {
        e2 += t4.length, n2 = n2.insertBlockBreakAtRange([e2 - 1, e2]);
      }), { document: n2, range: t3 };
    }
    consolidateBlocksAtRange(t3) {
      t3 = wt(t3);
      const [e2, i2] = t3, n2 = this.locationFromPosition(e2).index, r2 = this.locationFromPosition(i2).index;
      return new this.constructor(this.blockList.consolidateFromIndexToIndex(n2, r2));
    }
    getDocumentAtRange(t3) {
      t3 = wt(t3);
      const e2 = this.blockList.getSplittableListInRange(t3).toArray();
      return new this.constructor(e2);
    }
    getStringAtRange(t3) {
      let e2;
      const i2 = t3 = wt(t3);
      return i2[i2.length - 1] !== this.getLength() && (e2 = -1), this.getDocumentAtRange(t3).toString().slice(0, e2);
    }
    getBlockAtIndex(t3) {
      return this.blockList.getObjectAtIndex(t3);
    }
    getBlockAtPosition(t3) {
      const { index: e2 } = this.locationFromPosition(t3);
      return this.getBlockAtIndex(e2);
    }
    getTextAtIndex(t3) {
      var e2;
      return null === (e2 = this.getBlockAtIndex(t3)) || void 0 === e2 ? void 0 : e2.text;
    }
    getTextAtPosition(t3) {
      const { index: e2 } = this.locationFromPosition(t3);
      return this.getTextAtIndex(e2);
    }
    getPieceAtPosition(t3) {
      const { index: e2, offset: i2 } = this.locationFromPosition(t3);
      return this.getTextAtIndex(e2).getPieceAtPosition(i2);
    }
    getCharacterAtPosition(t3) {
      const { index: e2, offset: i2 } = this.locationFromPosition(t3);
      return this.getTextAtIndex(e2).getStringAtRange([i2, i2 + 1]);
    }
    getLength() {
      return this.blockList.getEndPosition();
    }
    getBlocks() {
      return this.blockList.toArray();
    }
    getBlockCount() {
      return this.blockList.length;
    }
    getEditCount() {
      return this.editCount;
    }
    eachBlock(t3) {
      return this.blockList.eachObject(t3);
    }
    eachBlockAtRange(t3, e2) {
      let i2, n2;
      t3 = wt(t3);
      const [r2, o2] = t3, s2 = this.locationFromPosition(r2), a2 = this.locationFromPosition(o2);
      if (s2.index === a2.index) return i2 = this.getBlockAtIndex(s2.index), n2 = [s2.offset, a2.offset], e2(i2, n2, s2.index);
      for (let t4 = s2.index; t4 <= a2.index; t4++) if (i2 = this.getBlockAtIndex(t4), i2) {
        switch (t4) {
          case s2.index:
            n2 = [s2.offset, i2.text.getLength()];
            break;
          case a2.index:
            n2 = [0, a2.offset];
            break;
          default:
            n2 = [0, i2.text.getLength()];
        }
        e2(i2, n2, t4);
      }
    }
    getCommonAttributesAtRange(t3) {
      t3 = wt(t3);
      const [e2] = t3;
      if (Lt(t3)) return this.getCommonAttributesAtPosition(e2);
      {
        const e3 = [], i2 = [];
        return this.eachBlockAtRange(t3, function(t4, n2) {
          if (n2[0] !== n2[1]) return e3.push(t4.text.getCommonAttributesAtRange(n2)), i2.push(ln(t4));
        }), Ht.fromCommonAttributesOfObjects(e3).merge(Ht.fromCommonAttributesOfObjects(i2)).toObject();
      }
    }
    getCommonAttributesAtPosition(t3) {
      let e2, i2;
      const { index: n2, offset: r2 } = this.locationFromPosition(t3), o2 = this.getBlockAtIndex(n2);
      if (!o2) return {};
      const s2 = ln(o2), a2 = o2.text.getAttributesAtPosition(r2), l2 = o2.text.getAttributesAtPosition(r2 - 1), c2 = Object.keys(W).filter((t4) => W[t4].inheritable);
      for (e2 in l2) i2 = l2[e2], (i2 === a2[e2] || c2.includes(e2)) && (s2[e2] = i2);
      return s2;
    }
    getRangeOfCommonAttributeAtPosition(t3, e2) {
      const { index: i2, offset: n2 } = this.locationFromPosition(e2), r2 = this.getTextAtIndex(i2), [o2, s2] = Array.from(r2.getExpandedRangeForAttributeAtOffset(t3, n2)), a2 = this.positionFromLocation({ index: i2, offset: o2 }), l2 = this.positionFromLocation({ index: i2, offset: s2 });
      return wt([a2, l2]);
    }
    getBaseBlockAttributes() {
      let t3 = this.getBlockAtIndex(0).getAttributes();
      for (let e2 = 1; e2 < this.getBlockCount(); e2++) {
        const i2 = this.getBlockAtIndex(e2).getAttributes(), n2 = Math.min(t3.length, i2.length);
        t3 = (() => {
          const e3 = [];
          for (let r2 = 0; r2 < n2 && i2[r2] === t3[r2]; r2++) e3.push(i2[r2]);
          return e3;
        })();
      }
      return t3;
    }
    getAttachmentById(t3) {
      for (const e2 of this.getAttachments()) if (e2.id === t3) return e2;
    }
    getAttachmentPieces() {
      let t3 = [];
      return this.blockList.eachObject((e2) => {
        let { text: i2 } = e2;
        return t3 = t3.concat(i2.getAttachmentPieces());
      }), t3;
    }
    getAttachments() {
      return this.getAttachmentPieces().map((t3) => t3.attachment);
    }
    getRangeOfAttachment(t3) {
      let e2 = 0;
      const i2 = this.blockList.toArray();
      for (let n2 = 0; n2 < i2.length; n2++) {
        const { text: r2 } = i2[n2], o2 = r2.getRangeOfAttachment(t3);
        if (o2) return wt([e2 + o2[0], e2 + o2[1]]);
        e2 += r2.getLength();
      }
    }
    getLocationRangeOfAttachment(t3) {
      const e2 = this.getRangeOfAttachment(t3);
      return this.locationRangeFromRange(e2);
    }
    getAttachmentPieceForAttachment(t3) {
      for (const e2 of this.getAttachmentPieces()) if (e2.attachment === t3) return e2;
    }
    findRangesForBlockAttribute(t3) {
      let e2 = 0;
      const i2 = [];
      return this.getBlocks().forEach((n2) => {
        const r2 = n2.getLength();
        n2.hasAttribute(t3) && i2.push([e2, e2 + r2]), e2 += r2;
      }), i2;
    }
    findRangesForTextAttribute(t3) {
      let { withValue: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i2 = 0, n2 = [];
      const r2 = [];
      return this.getPieces().forEach((o2) => {
        const s2 = o2.getLength();
        (function(i3) {
          return e2 ? i3.getAttribute(t3) === e2 : i3.hasAttribute(t3);
        })(o2) && (n2[1] === i2 ? n2[1] = i2 + s2 : r2.push(n2 = [i2, i2 + s2])), i2 += s2;
      }), r2;
    }
    locationFromPosition(t3) {
      const e2 = this.blockList.findIndexAndOffsetAtPosition(Math.max(0, t3));
      if (null != e2.index) return e2;
      {
        const t4 = this.getBlocks();
        return { index: t4.length - 1, offset: t4[t4.length - 1].getLength() };
      }
    }
    positionFromLocation(t3) {
      return this.blockList.findPositionAtIndexAndOffset(t3.index, t3.offset);
    }
    locationRangeFromPosition(t3) {
      return wt(this.locationFromPosition(t3));
    }
    locationRangeFromRange(t3) {
      if (!(t3 = wt(t3))) return;
      const [e2, i2] = Array.from(t3), n2 = this.locationFromPosition(e2), r2 = this.locationFromPosition(i2);
      return wt([n2, r2]);
    }
    rangeFromLocationRange(t3) {
      let e2;
      t3 = wt(t3);
      const i2 = this.positionFromLocation(t3[0]);
      return Lt(t3) || (e2 = this.positionFromLocation(t3[1])), wt([i2, e2]);
    }
    isEqualTo(t3) {
      return this.blockList.isEqualTo(null == t3 ? void 0 : t3.blockList);
    }
    getTexts() {
      return this.getBlocks().map((t3) => t3.text);
    }
    getPieces() {
      const t3 = [];
      return Array.from(this.getTexts()).forEach((e2) => {
        t3.push(...Array.from(e2.getPieces() || []));
      }), t3;
    }
    getObjects() {
      return this.getBlocks().concat(this.getTexts()).concat(this.getPieces());
    }
    toSerializableDocument() {
      const t3 = [];
      return this.blockList.eachObject((e2) => t3.push(e2.copyWithText(e2.text.toSerializableText()))), new this.constructor(t3);
    }
    toString() {
      return this.blockList.toString();
    }
    toJSON() {
      return this.blockList.toJSON();
    }
    toConsole() {
      return JSON.stringify(this.blockList.toArray().map((t3) => JSON.parse(t3.text.toConsole())));
    }
  };
  var ln = function(t3) {
    const e2 = {}, i2 = t3.getLastAttribute();
    return i2 && (e2[i2] = true), e2;
  };
  var cn = function(t3) {
    let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return { string: t3 = Wt(t3), attributes: e2, type: "string" };
  };
  var un = (t3, e2) => {
    try {
      return JSON.parse(t3.getAttribute("data-trix-".concat(e2)));
    } catch (t4) {
      return {};
    }
  };
  var hn = class extends q {
    static parse(t3, e2) {
      const i2 = new this(t3, e2);
      return i2.parse(), i2;
    }
    constructor(t3) {
      let { referenceElement: e2, purifyOptions: i2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      super(...arguments), this.html = t3, this.referenceElement = e2, this.purifyOptions = i2, this.blocks = [], this.blockElements = [], this.processedElements = [];
    }
    getDocument() {
      return an.fromJSON(this.blocks);
    }
    parse() {
      try {
        this.createHiddenContainer(), di.setHTML(this.containerElement, this.html, { purifyOptions: this.purifyOptions });
        const t3 = R(this.containerElement, { usingFilter: pn });
        for (; t3.nextNode(); ) this.processNode(t3.currentNode);
        return this.translateBlockElementMarginsToNewlines();
      } finally {
        this.removeHiddenContainer();
      }
    }
    createHiddenContainer() {
      return this.referenceElement ? (this.containerElement = this.referenceElement.cloneNode(false), this.containerElement.removeAttribute("id"), this.containerElement.setAttribute("data-trix-internal", ""), this.containerElement.style.display = "none", this.referenceElement.parentNode.insertBefore(this.containerElement, this.referenceElement.nextSibling)) : (this.containerElement = T({ tagName: "div", style: { display: "none" } }), document.body.appendChild(this.containerElement));
    }
    removeHiddenContainer() {
      return S(this.containerElement);
    }
    processNode(t3) {
      switch (t3.nodeType) {
        case Node.TEXT_NODE:
          if (!this.isInsignificantTextNode(t3)) return this.appendBlockForTextNode(t3), this.processTextNode(t3);
          break;
        case Node.ELEMENT_NODE:
          return this.appendBlockForElement(t3), this.processElement(t3);
      }
    }
    appendBlockForTextNode(t3) {
      const e2 = t3.parentNode;
      if (e2 === this.currentBlockElement && this.isBlockElement(t3.previousSibling)) return this.appendStringWithAttributes("\n");
      if (e2 === this.containerElement || this.isBlockElement(e2)) {
        var i2;
        const t4 = this.getBlockAttributes(e2), n2 = this.getBlockHTMLAttributes(e2);
        ot(t4, null === (i2 = this.currentBlock) || void 0 === i2 ? void 0 : i2.attributes) || (this.currentBlock = this.appendBlockForAttributesWithElement(t4, e2, n2), this.currentBlockElement = e2);
      }
    }
    appendBlockForElement(t3) {
      const e2 = this.isBlockElement(t3), i2 = C(this.currentBlockElement, t3);
      if (e2 && !this.isBlockElement(t3.firstChild)) {
        if (!this.isInsignificantTextNode(t3.firstChild) || !this.isBlockElement(t3.firstElementChild)) {
          const e3 = this.getBlockAttributes(t3), n2 = this.getBlockHTMLAttributes(t3);
          if (t3.firstChild) {
            if (i2 && ot(e3, this.currentBlock.attributes)) return this.appendStringWithAttributes("\n");
            this.currentBlock = this.appendBlockForAttributesWithElement(e3, t3, n2), this.currentBlockElement = t3;
          }
        }
      } else if (this.currentBlockElement && !i2 && !e2) {
        const e3 = this.findParentBlockElement(t3);
        if (e3) return this.appendBlockForElement(e3);
        this.currentBlock = this.appendEmptyBlock(), this.currentBlockElement = null;
      }
    }
    findParentBlockElement(t3) {
      let { parentElement: e2 } = t3;
      for (; e2 && e2 !== this.containerElement; ) {
        if (this.isBlockElement(e2) && this.blockElements.includes(e2)) return e2;
        e2 = e2.parentElement;
      }
      return null;
    }
    processTextNode(t3) {
      let e2 = t3.data;
      var i2;
      dn(t3.parentNode) || (e2 = Vt(e2), vn(null === (i2 = t3.previousSibling) || void 0 === i2 ? void 0 : i2.textContent) && (e2 = fn(e2)));
      return this.appendStringWithAttributes(e2, this.getTextAttributes(t3.parentNode));
    }
    processElement(t3) {
      let e2;
      if (P(t3)) {
        if (e2 = un(t3, "attachment"), Object.keys(e2).length) {
          const i2 = this.getTextAttributes(t3);
          this.appendAttachmentWithAttributes(e2, i2), t3.innerHTML = "";
        }
        return this.processedElements.push(t3);
      }
      switch (k(t3)) {
        case "br":
          return this.isExtraBR(t3) || this.isBlockElement(t3.nextSibling) || this.appendStringWithAttributes("\n", this.getTextAttributes(t3)), this.processedElements.push(t3);
        case "img":
          e2 = { url: t3.getAttribute("src"), contentType: "image" };
          const i2 = ((t4) => {
            const e3 = t4.getAttribute("width"), i3 = t4.getAttribute("height"), n2 = {};
            return e3 && (n2.width = parseInt(e3, 10)), i3 && (n2.height = parseInt(i3, 10)), n2;
          })(t3);
          for (const t4 in i2) {
            const n2 = i2[t4];
            e2[t4] = n2;
          }
          return this.appendAttachmentWithAttributes(e2, this.getTextAttributes(t3)), this.processedElements.push(t3);
        case "tr":
          if (this.needsTableSeparator(t3)) return this.appendStringWithAttributes(j.tableRowSeparator);
          break;
        case "td":
          if (this.needsTableSeparator(t3)) return this.appendStringWithAttributes(j.tableCellSeparator);
      }
    }
    appendBlockForAttributesWithElement(t3, e2) {
      let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      this.blockElements.push(e2);
      const n2 = function() {
        return { text: [], attributes: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, htmlAttributes: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {} };
      }(t3, i2);
      return this.blocks.push(n2), n2;
    }
    appendEmptyBlock() {
      return this.appendBlockForAttributesWithElement([], null);
    }
    appendStringWithAttributes(t3, e2) {
      return this.appendPiece(cn(t3, e2));
    }
    appendAttachmentWithAttributes(t3, e2) {
      return this.appendPiece(function(t4) {
        return { attachment: t4, attributes: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, type: "attachment" };
      }(t3, e2));
    }
    appendPiece(t3) {
      return 0 === this.blocks.length && this.appendEmptyBlock(), this.blocks[this.blocks.length - 1].text.push(t3);
    }
    appendStringToTextAtIndex(t3, e2) {
      const { text: i2 } = this.blocks[e2], n2 = i2[i2.length - 1];
      if ("string" !== (null == n2 ? void 0 : n2.type)) return i2.push(cn(t3));
      n2.string += t3;
    }
    prependStringToTextAtIndex(t3, e2) {
      const { text: i2 } = this.blocks[e2], n2 = i2[0];
      if ("string" !== (null == n2 ? void 0 : n2.type)) return i2.unshift(cn(t3));
      n2.string = t3 + n2.string;
    }
    getTextAttributes(t3) {
      let e2;
      const i2 = {};
      for (const n2 in W) {
        const r2 = W[n2];
        if (r2.tagName && y(t3, { matchingSelector: r2.tagName, untilNode: this.containerElement })) i2[n2] = true;
        else if (r2.parser) {
          if (e2 = r2.parser(t3), e2) {
            let o2 = false;
            for (const i3 of this.findBlockElementAncestors(t3)) if (r2.parser(i3) === e2) {
              o2 = true;
              break;
            }
            o2 || (i2[n2] = e2);
          }
        } else r2.styleProperty && (e2 = t3.style[r2.styleProperty], e2 && (i2[n2] = e2));
      }
      if (P(t3)) {
        const n2 = un(t3, "attributes");
        for (const t4 in n2) e2 = n2[t4], i2[t4] = e2;
      }
      return i2;
    }
    getBlockAttributes(t3) {
      const e2 = [];
      for (; t3 && t3 !== this.containerElement; ) {
        for (const r2 in n) {
          const o2 = n[r2];
          var i2;
          if (false !== o2.parse) {
            if (k(t3) === o2.tagName) (null !== (i2 = o2.test) && void 0 !== i2 && i2.call(o2, t3) || !o2.test) && (e2.push(r2), o2.listAttribute && e2.push(o2.listAttribute));
          }
        }
        t3 = t3.parentNode;
      }
      return e2.reverse();
    }
    getBlockHTMLAttributes(t3) {
      const e2 = {}, i2 = Object.values(n).find((e3) => e3.tagName === k(t3));
      return ((null == i2 ? void 0 : i2.htmlAttributes) || []).forEach((i3) => {
        t3.hasAttribute(i3) && (e2[i3] = t3.getAttribute(i3));
      }), e2;
    }
    findBlockElementAncestors(t3) {
      const e2 = [];
      for (; t3 && t3 !== this.containerElement; ) {
        const i2 = k(t3);
        L().includes(i2) && e2.push(t3), t3 = t3.parentNode;
      }
      return e2;
    }
    isBlockElement(t3) {
      if ((null == t3 ? void 0 : t3.nodeType) === Node.ELEMENT_NODE && !P(t3) && !y(t3, { matchingSelector: "td", untilNode: this.containerElement })) return L().includes(k(t3)) || "block" === window.getComputedStyle(t3).display;
    }
    isInsignificantTextNode(t3) {
      if ((null == t3 ? void 0 : t3.nodeType) !== Node.TEXT_NODE) return;
      if (!bn(t3.data)) return;
      const { parentNode: e2, previousSibling: i2, nextSibling: n2 } = t3;
      return gn(e2.previousSibling) && !this.isBlockElement(e2.previousSibling) || dn(e2) ? void 0 : !i2 || this.isBlockElement(i2) || !n2 || this.isBlockElement(n2);
    }
    isExtraBR(t3) {
      return "br" === k(t3) && this.isBlockElement(t3.parentNode) && t3.parentNode.lastChild === t3;
    }
    needsTableSeparator(t3) {
      if (j.removeBlankTableCells) {
        var e2;
        const i2 = null === (e2 = t3.previousSibling) || void 0 === e2 ? void 0 : e2.textContent;
        return i2 && /\S/.test(i2);
      }
      return t3.previousSibling;
    }
    translateBlockElementMarginsToNewlines() {
      const t3 = this.getMarginOfDefaultBlockElement();
      for (let e2 = 0; e2 < this.blocks.length; e2++) {
        const i2 = this.getMarginOfBlockElementAtIndex(e2);
        i2 && (i2.top > 2 * t3.top && this.prependStringToTextAtIndex("\n", e2), i2.bottom > 2 * t3.bottom && this.appendStringToTextAtIndex("\n", e2));
      }
    }
    getMarginOfBlockElementAtIndex(t3) {
      const e2 = this.blockElements[t3];
      if (e2 && e2.textContent && !L().includes(k(e2)) && !this.processedElements.includes(e2)) return mn(e2);
    }
    getMarginOfDefaultBlockElement() {
      const t3 = T(n.default.tagName);
      return this.containerElement.appendChild(t3), mn(t3);
    }
  };
  var dn = function(t3) {
    const { whiteSpace: e2 } = window.getComputedStyle(t3);
    return ["pre", "pre-wrap", "pre-line"].includes(e2);
  };
  var gn = (t3) => t3 && !vn(t3.textContent);
  var mn = function(t3) {
    const e2 = window.getComputedStyle(t3);
    if ("block" === e2.display) return { top: parseInt(e2.marginTop), bottom: parseInt(e2.marginBottom) };
  };
  var pn = function(t3) {
    return "style" === k(t3) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  };
  var fn = (t3) => t3.replace(new RegExp("^".concat(Ut.source, "+")), "");
  var bn = (t3) => new RegExp("^".concat(Ut.source, "*$")).test(t3);
  var vn = (t3) => /\s$/.test(t3);
  var An = ["contenteditable", "data-trix-id", "data-trix-store-key", "data-trix-mutable", "data-trix-placeholder", "tabindex"];
  var yn = "data-trix-serialized-attributes";
  var xn = "[".concat(yn, "]");
  var Cn = new RegExp("<!--block-->", "g");
  var En = { "application/json": function(t3) {
    let e2;
    if (t3 instanceof an) e2 = t3;
    else {
      if (!(t3 instanceof HTMLElement)) throw new Error("unserializable object");
      e2 = hn.parse(t3.innerHTML).getDocument();
    }
    return e2.toSerializableDocument().toJSONString();
  }, "text/html": function(t3) {
    let e2;
    if (t3 instanceof an) e2 = Si.render(t3);
    else {
      if (!(t3 instanceof HTMLElement)) throw new Error("unserializable object");
      e2 = t3.cloneNode(true);
    }
    return Array.from(e2.querySelectorAll("[data-trix-serialize=false]")).forEach((t4) => {
      S(t4);
    }), An.forEach((t4) => {
      Array.from(e2.querySelectorAll("[".concat(t4, "]"))).forEach((e3) => {
        e3.removeAttribute(t4);
      });
    }), Array.from(e2.querySelectorAll(xn)).forEach((t4) => {
      try {
        const e3 = JSON.parse(t4.getAttribute(yn));
        t4.removeAttribute(yn);
        for (const i2 in e3) {
          const n2 = e3[i2];
          t4.setAttribute(i2, n2);
        }
      } catch (t5) {
      }
    }), e2.innerHTML.replace(Cn, "");
  } };
  var Sn = Object.freeze({ __proto__: null });
  var Rn = class extends q {
    constructor(t3, e2) {
      super(...arguments), this.attachmentManager = t3, this.attachment = e2, this.id = this.attachment.id, this.file = this.attachment.file;
    }
    remove() {
      return this.attachmentManager.requestRemovalOfAttachment(this.attachment);
    }
  };
  Rn.proxyMethod("attachment.getAttribute"), Rn.proxyMethod("attachment.hasAttribute"), Rn.proxyMethod("attachment.setAttribute"), Rn.proxyMethod("attachment.getAttributes"), Rn.proxyMethod("attachment.setAttributes"), Rn.proxyMethod("attachment.isPending"), Rn.proxyMethod("attachment.isPreviewable"), Rn.proxyMethod("attachment.getURL"), Rn.proxyMethod("attachment.getHref"), Rn.proxyMethod("attachment.getFilename"), Rn.proxyMethod("attachment.getFilesize"), Rn.proxyMethod("attachment.getFormattedFilesize"), Rn.proxyMethod("attachment.getExtension"), Rn.proxyMethod("attachment.getContentType"), Rn.proxyMethod("attachment.getFile"), Rn.proxyMethod("attachment.setFile"), Rn.proxyMethod("attachment.releaseFile"), Rn.proxyMethod("attachment.getUploadProgress"), Rn.proxyMethod("attachment.setUploadProgress");
  var kn = class extends q {
    constructor() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      super(...arguments), this.managedAttachments = {}, Array.from(t3).forEach((t4) => {
        this.manageAttachment(t4);
      });
    }
    getAttachments() {
      const t3 = [];
      for (const e2 in this.managedAttachments) {
        const i2 = this.managedAttachments[e2];
        t3.push(i2);
      }
      return t3;
    }
    manageAttachment(t3) {
      return this.managedAttachments[t3.id] || (this.managedAttachments[t3.id] = new Rn(this, t3)), this.managedAttachments[t3.id];
    }
    attachmentIsManaged(t3) {
      return t3.id in this.managedAttachments;
    }
    requestRemovalOfAttachment(t3) {
      var e2, i2;
      if (this.attachmentIsManaged(t3)) return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.attachmentManagerDidRequestRemovalOfAttachment) || void 0 === i2 ? void 0 : i2.call(e2, t3);
    }
    unmanageAttachment(t3) {
      const e2 = this.managedAttachments[t3.id];
      return delete this.managedAttachments[t3.id], e2;
    }
  };
  var Tn = class {
    constructor(t3) {
      this.composition = t3, this.document = this.composition.document;
      const e2 = this.composition.getSelectedRange();
      this.startPosition = e2[0], this.endPosition = e2[1], this.startLocation = this.document.locationFromPosition(this.startPosition), this.endLocation = this.document.locationFromPosition(this.endPosition), this.block = this.document.getBlockAtIndex(this.endLocation.index), this.breaksOnReturn = this.block.breaksOnReturn(), this.previousCharacter = this.block.text.getStringAtPosition(this.endLocation.offset - 1), this.nextCharacter = this.block.text.getStringAtPosition(this.endLocation.offset);
    }
    shouldInsertBlockBreak() {
      return this.block.hasAttributes() && this.block.isListItem() && !this.block.isEmpty() ? 0 !== this.startLocation.offset : this.breaksOnReturn && "\n" !== this.nextCharacter;
    }
    shouldBreakFormattedBlock() {
      return this.block.hasAttributes() && !this.block.isListItem() && (this.breaksOnReturn && "\n" === this.nextCharacter || "\n" === this.previousCharacter);
    }
    shouldDecreaseListLevel() {
      return this.block.hasAttributes() && this.block.isListItem() && this.block.isEmpty();
    }
    shouldPrependListItem() {
      return this.block.isListItem() && 0 === this.startLocation.offset && !this.block.isEmpty();
    }
    shouldRemoveLastBlockAttribute() {
      return this.block.hasAttributes() && !this.block.isListItem() && this.block.isEmpty();
    }
  };
  var wn = class extends q {
    constructor() {
      super(...arguments), this.document = new an(), this.attachments = [], this.currentAttributes = {}, this.revision = 0;
    }
    setDocument(t3) {
      var e2, i2;
      if (!t3.isEqualTo(this.document)) return this.document = t3, this.refreshAttachments(), this.revision++, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionDidChangeDocument) || void 0 === i2 ? void 0 : i2.call(e2, t3);
    }
    getSnapshot() {
      return { document: this.document, selectedRange: this.getSelectedRange() };
    }
    loadSnapshot(t3) {
      var e2, i2, n2, r2;
      let { document: o2, selectedRange: s2 } = t3;
      return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionWillLoadSnapshot) || void 0 === i2 || i2.call(e2), this.setDocument(null != o2 ? o2 : new an()), this.setSelection(null != s2 ? s2 : [0, 0]), null === (n2 = this.delegate) || void 0 === n2 || null === (r2 = n2.compositionDidLoadSnapshot) || void 0 === r2 ? void 0 : r2.call(n2);
    }
    insertText(t3) {
      let { updatePosition: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { updatePosition: true };
      const i2 = this.getSelectedRange();
      this.setDocument(this.document.insertTextAtRange(t3, i2));
      const n2 = i2[0], r2 = n2 + t3.getLength();
      return e2 && this.setSelection(r2), this.notifyDelegateOfInsertionAtRange([n2, r2]);
    }
    insertBlock() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Xi();
      const e2 = new an([t3]);
      return this.insertDocument(e2);
    }
    insertDocument() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new an();
      const e2 = this.getSelectedRange();
      this.setDocument(this.document.insertDocumentAtRange(t3, e2));
      const i2 = e2[0], n2 = i2 + t3.getLength();
      return this.setSelection(n2), this.notifyDelegateOfInsertionAtRange([i2, n2]);
    }
    insertString(t3, e2) {
      const i2 = this.getCurrentTextAttributes(), n2 = Yi.textForStringWithAttributes(t3, i2);
      return this.insertText(n2, e2);
    }
    insertBlockBreak() {
      const t3 = this.getSelectedRange();
      this.setDocument(this.document.insertBlockBreakAtRange(t3));
      const e2 = t3[0], i2 = e2 + 1;
      return this.setSelection(i2), this.notifyDelegateOfInsertionAtRange([e2, i2]);
    }
    insertLineBreak() {
      const t3 = new Tn(this);
      if (t3.shouldDecreaseListLevel()) return this.decreaseListLevel(), this.setSelection(t3.startPosition);
      if (t3.shouldPrependListItem()) {
        const e2 = new an([t3.block.copyWithoutText()]);
        return this.insertDocument(e2);
      }
      return t3.shouldInsertBlockBreak() ? this.insertBlockBreak() : t3.shouldRemoveLastBlockAttribute() ? this.removeLastBlockAttribute() : t3.shouldBreakFormattedBlock() ? this.breakFormattedBlock(t3) : this.insertString("\n");
    }
    insertHTML(t3) {
      const e2 = hn.parse(t3, { purifyOptions: { SAFE_FOR_XML: true } }).getDocument(), i2 = this.getSelectedRange();
      this.setDocument(this.document.mergeDocumentAtRange(e2, i2));
      const n2 = i2[0], r2 = n2 + e2.getLength() - 1;
      return this.setSelection(r2), this.notifyDelegateOfInsertionAtRange([n2, r2]);
    }
    replaceHTML(t3) {
      const e2 = hn.parse(t3).getDocument().copyUsingObjectsFromDocument(this.document), i2 = this.getLocationRange({ strict: false }), n2 = this.document.rangeFromLocationRange(i2);
      return this.setDocument(e2), this.setSelection(n2);
    }
    insertFile(t3) {
      return this.insertFiles([t3]);
    }
    insertFiles(t3) {
      const e2 = [];
      return Array.from(t3).forEach((t4) => {
        var i2;
        if (null !== (i2 = this.delegate) && void 0 !== i2 && i2.compositionShouldAcceptFile(t4)) {
          const i3 = Vi.attachmentForFile(t4);
          e2.push(i3);
        }
      }), this.insertAttachments(e2);
    }
    insertAttachment(t3) {
      return this.insertAttachments([t3]);
    }
    insertAttachments(t3) {
      let e2 = new Yi();
      return Array.from(t3).forEach((t4) => {
        var n2;
        const r2 = t4.getType(), o2 = null === (n2 = i[r2]) || void 0 === n2 ? void 0 : n2.presentation, s2 = this.getCurrentTextAttributes();
        o2 && (s2.presentation = o2);
        const a2 = Yi.textForAttachmentWithAttributes(t4, s2);
        e2 = e2.appendText(a2);
      }), this.insertText(e2);
    }
    shouldManageDeletingInDirection(t3) {
      const e2 = this.getLocationRange();
      if (Lt(e2)) {
        if ("backward" === t3 && 0 === e2[0].offset) return true;
        if (this.shouldManageMovingCursorInDirection(t3)) return true;
      } else if (e2[0].index !== e2[1].index) return true;
      return false;
    }
    deleteInDirection(t3) {
      let e2, i2, n2, { length: r2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const o2 = this.getLocationRange();
      let s2 = this.getSelectedRange();
      const a2 = Lt(s2);
      if (a2 ? i2 = "backward" === t3 && 0 === o2[0].offset : n2 = o2[0].index !== o2[1].index, i2 && this.canDecreaseBlockAttributeLevel()) {
        const t4 = this.getBlock();
        if (t4.isListItem() ? this.decreaseListLevel() : this.decreaseBlockAttributeLevel(), this.setSelection(s2[0]), t4.isEmpty()) return false;
      }
      return a2 && (s2 = this.getExpandedRangeInDirection(t3, { length: r2 }), "backward" === t3 && (e2 = this.getAttachmentAtRange(s2))), e2 ? (this.editAttachment(e2), false) : (this.setDocument(this.document.removeTextAtRange(s2)), this.setSelection(s2[0]), !i2 && !n2 && void 0);
    }
    moveTextFromRange(t3) {
      const [e2] = Array.from(this.getSelectedRange());
      return this.setDocument(this.document.moveTextFromRangeToPosition(t3, e2)), this.setSelection(e2);
    }
    removeAttachment(t3) {
      const e2 = this.document.getRangeOfAttachment(t3);
      if (e2) return this.stopEditingAttachment(), this.setDocument(this.document.removeTextAtRange(e2)), this.setSelection(e2[0]);
    }
    removeLastBlockAttribute() {
      const [t3, e2] = Array.from(this.getSelectedRange()), i2 = this.document.getBlockAtPosition(e2);
      return this.removeCurrentAttribute(i2.getLastAttribute()), this.setSelection(t3);
    }
    insertPlaceholder() {
      return this.placeholderPosition = this.getPosition(), this.insertString(" ");
    }
    selectPlaceholder() {
      if (null != this.placeholderPosition) return this.setSelectedRange([this.placeholderPosition, this.placeholderPosition + 1]), this.getSelectedRange();
    }
    forgetPlaceholder() {
      this.placeholderPosition = null;
    }
    hasCurrentAttribute(t3) {
      const e2 = this.currentAttributes[t3];
      return null != e2 && false !== e2;
    }
    toggleCurrentAttribute(t3) {
      const e2 = !this.currentAttributes[t3];
      return e2 ? this.setCurrentAttribute(t3, e2) : this.removeCurrentAttribute(t3);
    }
    canSetCurrentAttribute(t3) {
      return mt(t3) ? this.canSetCurrentBlockAttribute(t3) : this.canSetCurrentTextAttribute(t3);
    }
    canSetCurrentTextAttribute(t3) {
      const e2 = this.getSelectedDocument();
      if (e2) {
        for (const t4 of Array.from(e2.getAttachments())) if (!t4.hasContent()) return false;
        return true;
      }
    }
    canSetCurrentBlockAttribute(t3) {
      const e2 = this.getBlock();
      if (e2) return !e2.isTerminalBlock();
    }
    setCurrentAttribute(t3, e2) {
      return mt(t3) ? this.setBlockAttribute(t3, e2) : (this.setTextAttribute(t3, e2), this.currentAttributes[t3] = e2, this.notifyDelegateOfCurrentAttributesChange());
    }
    setHTMLAtributeAtPosition(t3, e2, i2) {
      var n2;
      const r2 = this.document.getBlockAtPosition(t3), o2 = null === (n2 = mt(r2.getLastAttribute())) || void 0 === n2 ? void 0 : n2.htmlAttributes;
      if (r2 && null != o2 && o2.includes(e2)) {
        const n3 = this.document.setHTMLAttributeAtPosition(t3, e2, i2);
        this.setDocument(n3);
      }
    }
    setTextAttribute(t3, e2) {
      const i2 = this.getSelectedRange();
      if (!i2) return;
      const [n2, r2] = Array.from(i2);
      if (n2 !== r2) return this.setDocument(this.document.addAttributeAtRange(t3, e2, i2));
      if ("href" === t3) {
        const t4 = Yi.textForStringWithAttributes(e2, { href: e2 });
        return this.insertText(t4);
      }
    }
    setBlockAttribute(t3, e2) {
      const i2 = this.getSelectedRange();
      if (this.canSetCurrentAttribute(t3)) return this.setDocument(this.document.applyBlockAttributeAtRange(t3, e2, i2)), this.setSelection(i2);
    }
    removeCurrentAttribute(t3) {
      return mt(t3) ? (this.removeBlockAttribute(t3), this.updateCurrentAttributes()) : (this.removeTextAttribute(t3), delete this.currentAttributes[t3], this.notifyDelegateOfCurrentAttributesChange());
    }
    removeTextAttribute(t3) {
      const e2 = this.getSelectedRange();
      if (e2) return this.setDocument(this.document.removeAttributeAtRange(t3, e2));
    }
    removeBlockAttribute(t3) {
      const e2 = this.getSelectedRange();
      if (e2) return this.setDocument(this.document.removeAttributeAtRange(t3, e2));
    }
    canDecreaseNestingLevel() {
      var t3;
      return (null === (t3 = this.getBlock()) || void 0 === t3 ? void 0 : t3.getNestingLevel()) > 0;
    }
    canIncreaseNestingLevel() {
      var t3;
      const e2 = this.getBlock();
      if (e2) {
        if (null === (t3 = mt(e2.getLastNestableAttribute())) || void 0 === t3 || !t3.listAttribute) return e2.getNestingLevel() > 0;
        {
          const t4 = this.getPreviousBlock();
          if (t4) return function() {
            let t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return ot((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).slice(0, t5.length), t5);
          }(t4.getListItemAttributes(), e2.getListItemAttributes());
        }
      }
    }
    decreaseNestingLevel() {
      const t3 = this.getBlock();
      if (t3) return this.setDocument(this.document.replaceBlock(t3, t3.decreaseNestingLevel()));
    }
    increaseNestingLevel() {
      const t3 = this.getBlock();
      if (t3) return this.setDocument(this.document.replaceBlock(t3, t3.increaseNestingLevel()));
    }
    canDecreaseBlockAttributeLevel() {
      var t3;
      return (null === (t3 = this.getBlock()) || void 0 === t3 ? void 0 : t3.getAttributeLevel()) > 0;
    }
    decreaseBlockAttributeLevel() {
      var t3;
      const e2 = null === (t3 = this.getBlock()) || void 0 === t3 ? void 0 : t3.getLastAttribute();
      if (e2) return this.removeCurrentAttribute(e2);
    }
    decreaseListLevel() {
      let [t3] = Array.from(this.getSelectedRange());
      const { index: e2 } = this.document.locationFromPosition(t3);
      let i2 = e2;
      const n2 = this.getBlock().getAttributeLevel();
      let r2 = this.document.getBlockAtIndex(i2 + 1);
      for (; r2 && r2.isListItem() && !(r2.getAttributeLevel() <= n2); ) i2++, r2 = this.document.getBlockAtIndex(i2 + 1);
      t3 = this.document.positionFromLocation({ index: e2, offset: 0 });
      const o2 = this.document.positionFromLocation({ index: i2, offset: 0 });
      return this.setDocument(this.document.removeLastListAttributeAtRange([t3, o2]));
    }
    updateCurrentAttributes() {
      const t3 = this.getSelectedRange({ ignoreLock: true });
      if (t3) {
        const e2 = this.document.getCommonAttributesAtRange(t3);
        if (Array.from(gt()).forEach((t4) => {
          e2[t4] || this.canSetCurrentAttribute(t4) || (e2[t4] = false);
        }), !Tt(e2, this.currentAttributes)) return this.currentAttributes = e2, this.notifyDelegateOfCurrentAttributesChange();
      }
    }
    getCurrentAttributes() {
      return m.call({}, this.currentAttributes);
    }
    getCurrentTextAttributes() {
      const t3 = {};
      for (const e2 in this.currentAttributes) {
        const i2 = this.currentAttributes[e2];
        false !== i2 && ft(e2) && (t3[e2] = i2);
      }
      return t3;
    }
    freezeSelection() {
      return this.setCurrentAttribute("frozen", true);
    }
    thawSelection() {
      return this.removeCurrentAttribute("frozen");
    }
    hasFrozenSelection() {
      return this.hasCurrentAttribute("frozen");
    }
    setSelection(t3) {
      var e2;
      const i2 = this.document.locationRangeFromRange(t3);
      return null === (e2 = this.delegate) || void 0 === e2 ? void 0 : e2.compositionDidRequestChangingSelectionToLocationRange(i2);
    }
    getSelectedRange() {
      const t3 = this.getLocationRange();
      if (t3) return this.document.rangeFromLocationRange(t3);
    }
    setSelectedRange(t3) {
      const e2 = this.document.locationRangeFromRange(t3);
      return this.getSelectionManager().setLocationRange(e2);
    }
    getPosition() {
      const t3 = this.getLocationRange();
      if (t3) return this.document.positionFromLocation(t3[0]);
    }
    getLocationRange(t3) {
      return this.targetLocationRange ? this.targetLocationRange : this.getSelectionManager().getLocationRange(t3) || wt({ index: 0, offset: 0 });
    }
    withTargetLocationRange(t3, e2) {
      let i2;
      this.targetLocationRange = t3;
      try {
        i2 = e2();
      } finally {
        this.targetLocationRange = null;
      }
      return i2;
    }
    withTargetRange(t3, e2) {
      const i2 = this.document.locationRangeFromRange(t3);
      return this.withTargetLocationRange(i2, e2);
    }
    withTargetDOMRange(t3, e2) {
      const i2 = this.createLocationRangeFromDOMRange(t3, { strict: false });
      return this.withTargetLocationRange(i2, e2);
    }
    getExpandedRangeInDirection(t3) {
      let { length: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, [i2, n2] = Array.from(this.getSelectedRange());
      return "backward" === t3 ? e2 ? i2 -= e2 : i2 = this.translateUTF16PositionFromOffset(i2, -1) : e2 ? n2 += e2 : n2 = this.translateUTF16PositionFromOffset(n2, 1), wt([i2, n2]);
    }
    shouldManageMovingCursorInDirection(t3) {
      if (this.editingAttachment) return true;
      const e2 = this.getExpandedRangeInDirection(t3);
      return null != this.getAttachmentAtRange(e2);
    }
    moveCursorInDirection(t3) {
      let e2, i2;
      if (this.editingAttachment) i2 = this.document.getRangeOfAttachment(this.editingAttachment);
      else {
        const n2 = this.getSelectedRange();
        i2 = this.getExpandedRangeInDirection(t3), e2 = !Dt(n2, i2);
      }
      if ("backward" === t3 ? this.setSelectedRange(i2[0]) : this.setSelectedRange(i2[1]), e2) {
        const t4 = this.getAttachmentAtRange(i2);
        if (t4) return this.editAttachment(t4);
      }
    }
    expandSelectionInDirection(t3) {
      let { length: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const i2 = this.getExpandedRangeInDirection(t3, { length: e2 });
      return this.setSelectedRange(i2);
    }
    expandSelectionForEditing() {
      if (this.hasCurrentAttribute("href")) return this.expandSelectionAroundCommonAttribute("href");
    }
    expandSelectionAroundCommonAttribute(t3) {
      const e2 = this.getPosition(), i2 = this.document.getRangeOfCommonAttributeAtPosition(t3, e2);
      return this.setSelectedRange(i2);
    }
    selectionContainsAttachments() {
      var t3;
      return (null === (t3 = this.getSelectedAttachments()) || void 0 === t3 ? void 0 : t3.length) > 0;
    }
    selectionIsInCursorTarget() {
      return this.editingAttachment || this.positionIsCursorTarget(this.getPosition());
    }
    positionIsCursorTarget(t3) {
      const e2 = this.document.locationFromPosition(t3);
      if (e2) return this.locationIsCursorTarget(e2);
    }
    positionIsBlockBreak(t3) {
      var e2;
      return null === (e2 = this.document.getPieceAtPosition(t3)) || void 0 === e2 ? void 0 : e2.isBlockBreak();
    }
    getSelectedDocument() {
      const t3 = this.getSelectedRange();
      if (t3) return this.document.getDocumentAtRange(t3);
    }
    getSelectedAttachments() {
      var t3;
      return null === (t3 = this.getSelectedDocument()) || void 0 === t3 ? void 0 : t3.getAttachments();
    }
    getAttachments() {
      return this.attachments.slice(0);
    }
    refreshAttachments() {
      const t3 = this.document.getAttachments(), { added: e2, removed: i2 } = function() {
        let t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const i3 = [], n2 = [], r2 = /* @__PURE__ */ new Set();
        t4.forEach((t5) => {
          r2.add(t5);
        });
        const o2 = /* @__PURE__ */ new Set();
        return e3.forEach((t5) => {
          o2.add(t5), r2.has(t5) || i3.push(t5);
        }), t4.forEach((t5) => {
          o2.has(t5) || n2.push(t5);
        }), { added: i3, removed: n2 };
      }(this.attachments, t3);
      return this.attachments = t3, Array.from(i2).forEach((t4) => {
        var e3, i3;
        t4.delegate = null, null === (e3 = this.delegate) || void 0 === e3 || null === (i3 = e3.compositionDidRemoveAttachment) || void 0 === i3 || i3.call(e3, t4);
      }), (() => {
        const t4 = [];
        return Array.from(e2).forEach((e3) => {
          var i3, n2;
          e3.delegate = this, t4.push(null === (i3 = this.delegate) || void 0 === i3 || null === (n2 = i3.compositionDidAddAttachment) || void 0 === n2 ? void 0 : n2.call(i3, e3));
        }), t4;
      })();
    }
    attachmentDidChangeAttributes(t3) {
      var e2, i2;
      return this.revision++, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionDidEditAttachment) || void 0 === i2 ? void 0 : i2.call(e2, t3);
    }
    attachmentDidChangePreviewURL(t3) {
      var e2, i2;
      return this.revision++, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionDidChangeAttachmentPreviewURL) || void 0 === i2 ? void 0 : i2.call(e2, t3);
    }
    editAttachment(t3, e2) {
      var i2, n2;
      if (t3 !== this.editingAttachment) return this.stopEditingAttachment(), this.editingAttachment = t3, null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.compositionDidStartEditingAttachment) || void 0 === n2 ? void 0 : n2.call(i2, this.editingAttachment, e2);
    }
    stopEditingAttachment() {
      var t3, e2;
      this.editingAttachment && (null === (t3 = this.delegate) || void 0 === t3 || null === (e2 = t3.compositionDidStopEditingAttachment) || void 0 === e2 || e2.call(t3, this.editingAttachment), this.editingAttachment = null);
    }
    updateAttributesForAttachment(t3, e2) {
      return this.setDocument(this.document.updateAttributesForAttachment(t3, e2));
    }
    removeAttributeForAttachment(t3, e2) {
      return this.setDocument(this.document.removeAttributeForAttachment(t3, e2));
    }
    breakFormattedBlock(t3) {
      let { document: e2 } = t3;
      const { block: i2 } = t3;
      let n2 = t3.startPosition, r2 = [n2 - 1, n2];
      i2.getBlockBreakPosition() === t3.startLocation.offset ? (i2.breaksOnReturn() && "\n" === t3.nextCharacter ? n2 += 1 : e2 = e2.removeTextAtRange(r2), r2 = [n2, n2]) : "\n" === t3.nextCharacter ? "\n" === t3.previousCharacter ? r2 = [n2 - 1, n2 + 1] : (r2 = [n2, n2 + 1], n2 += 1) : t3.startLocation.offset - 1 != 0 && (n2 += 1);
      const o2 = new an([i2.removeLastAttribute().copyWithoutText()]);
      return this.setDocument(e2.insertDocumentAtRange(o2, r2)), this.setSelection(n2);
    }
    getPreviousBlock() {
      const t3 = this.getLocationRange();
      if (t3) {
        const { index: e2 } = t3[0];
        if (e2 > 0) return this.document.getBlockAtIndex(e2 - 1);
      }
    }
    getBlock() {
      const t3 = this.getLocationRange();
      if (t3) return this.document.getBlockAtIndex(t3[0].index);
    }
    getAttachmentAtRange(t3) {
      const e2 = this.document.getDocumentAtRange(t3);
      if (e2.toString() === "".concat("\uFFFC", "\n")) return e2.getAttachments()[0];
    }
    notifyDelegateOfCurrentAttributesChange() {
      var t3, e2;
      return null === (t3 = this.delegate) || void 0 === t3 || null === (e2 = t3.compositionDidChangeCurrentAttributes) || void 0 === e2 ? void 0 : e2.call(t3, this.currentAttributes);
    }
    notifyDelegateOfInsertionAtRange(t3) {
      var e2, i2;
      return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionDidPerformInsertionAtRange) || void 0 === i2 ? void 0 : i2.call(e2, t3);
    }
    translateUTF16PositionFromOffset(t3, e2) {
      const i2 = this.document.toUTF16String(), n2 = i2.offsetFromUCS2Offset(t3);
      return i2.offsetToUCS2Offset(n2 + e2);
    }
  };
  wn.proxyMethod("getSelectionManager().getPointRange"), wn.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"), wn.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"), wn.proxyMethod("getSelectionManager().locationIsCursorTarget"), wn.proxyMethod("getSelectionManager().selectionIsExpanded"), wn.proxyMethod("delegate?.getSelectionManager");
  var Ln = class extends q {
    constructor(t3) {
      super(...arguments), this.composition = t3, this.undoEntries = [], this.redoEntries = [];
    }
    recordUndoEntry(t3) {
      let { context: e2, consolidatable: i2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const n2 = this.undoEntries.slice(-1)[0];
      if (!i2 || !Dn(n2, t3, e2)) {
        const i3 = this.createEntry({ description: t3, context: e2 });
        this.undoEntries.push(i3), this.redoEntries = [];
      }
    }
    undo() {
      const t3 = this.undoEntries.pop();
      if (t3) {
        const e2 = this.createEntry(t3);
        return this.redoEntries.push(e2), this.composition.loadSnapshot(t3.snapshot);
      }
    }
    redo() {
      const t3 = this.redoEntries.pop();
      if (t3) {
        const e2 = this.createEntry(t3);
        return this.undoEntries.push(e2), this.composition.loadSnapshot(t3.snapshot);
      }
    }
    canUndo() {
      return this.undoEntries.length > 0;
    }
    canRedo() {
      return this.redoEntries.length > 0;
    }
    createEntry() {
      let { description: t3, context: e2 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return { description: null == t3 ? void 0 : t3.toString(), context: JSON.stringify(e2), snapshot: this.composition.getSnapshot() };
    }
  };
  var Dn = (t3, e2, i2) => (null == t3 ? void 0 : t3.description) === (null == e2 ? void 0 : e2.toString()) && (null == t3 ? void 0 : t3.context) === JSON.stringify(i2);
  var Nn = "attachmentGallery";
  var In = class {
    constructor(t3) {
      this.document = t3.document, this.selectedRange = t3.selectedRange;
    }
    perform() {
      return this.removeBlockAttribute(), this.applyBlockAttribute();
    }
    getSnapshot() {
      return { document: this.document, selectedRange: this.selectedRange };
    }
    removeBlockAttribute() {
      return this.findRangesOfBlocks().map((t3) => this.document = this.document.removeAttributeAtRange(Nn, t3));
    }
    applyBlockAttribute() {
      let t3 = 0;
      this.findRangesOfPieces().forEach((e2) => {
        e2[1] - e2[0] > 1 && (e2[0] += t3, e2[1] += t3, "\n" !== this.document.getCharacterAtPosition(e2[1]) && (this.document = this.document.insertBlockBreakAtRange(e2[1]), e2[1] < this.selectedRange[1] && this.moveSelectedRangeForward(), e2[1]++, t3++), 0 !== e2[0] && "\n" !== this.document.getCharacterAtPosition(e2[0] - 1) && (this.document = this.document.insertBlockBreakAtRange(e2[0]), e2[0] < this.selectedRange[0] && this.moveSelectedRangeForward(), e2[0]++, t3++), this.document = this.document.applyBlockAttributeAtRange(Nn, true, e2));
      });
    }
    findRangesOfBlocks() {
      return this.document.findRangesForBlockAttribute(Nn);
    }
    findRangesOfPieces() {
      return this.document.findRangesForTextAttribute("presentation", { withValue: "gallery" });
    }
    moveSelectedRangeForward() {
      this.selectedRange[0] += 1, this.selectedRange[1] += 1;
    }
  };
  var On = function(t3) {
    const e2 = new In(t3);
    return e2.perform(), e2.getSnapshot();
  };
  var Fn = [On];
  var Pn = class {
    constructor(t3, e2, i2) {
      this.insertFiles = this.insertFiles.bind(this), this.composition = t3, this.selectionManager = e2, this.element = i2, this.undoManager = new Ln(this.composition), this.filters = Fn.slice(0);
    }
    loadDocument(t3) {
      return this.loadSnapshot({ document: t3, selectedRange: [0, 0] });
    }
    loadHTML() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const e2 = hn.parse(t3, { referenceElement: this.element }).getDocument();
      return this.loadDocument(e2);
    }
    loadJSON(t3) {
      let { document: e2, selectedRange: i2 } = t3;
      return e2 = an.fromJSON(e2), this.loadSnapshot({ document: e2, selectedRange: i2 });
    }
    loadSnapshot(t3) {
      return this.undoManager = new Ln(this.composition), this.composition.loadSnapshot(t3);
    }
    getDocument() {
      return this.composition.document;
    }
    getSelectedDocument() {
      return this.composition.getSelectedDocument();
    }
    getSnapshot() {
      return this.composition.getSnapshot();
    }
    toJSON() {
      return this.getSnapshot();
    }
    deleteInDirection(t3) {
      return this.composition.deleteInDirection(t3);
    }
    insertAttachment(t3) {
      return this.composition.insertAttachment(t3);
    }
    insertAttachments(t3) {
      return this.composition.insertAttachments(t3);
    }
    insertDocument(t3) {
      return this.composition.insertDocument(t3);
    }
    insertFile(t3) {
      return this.composition.insertFile(t3);
    }
    insertFiles(t3) {
      return this.composition.insertFiles(t3);
    }
    insertHTML(t3) {
      return this.composition.insertHTML(t3);
    }
    insertString(t3) {
      return this.composition.insertString(t3);
    }
    insertText(t3) {
      return this.composition.insertText(t3);
    }
    insertLineBreak() {
      return this.composition.insertLineBreak();
    }
    getSelectedRange() {
      return this.composition.getSelectedRange();
    }
    getPosition() {
      return this.composition.getPosition();
    }
    getClientRectAtPosition(t3) {
      const e2 = this.getDocument().locationRangeFromRange([t3, t3 + 1]);
      return this.selectionManager.getClientRectAtLocationRange(e2);
    }
    expandSelectionInDirection(t3) {
      return this.composition.expandSelectionInDirection(t3);
    }
    moveCursorInDirection(t3) {
      return this.composition.moveCursorInDirection(t3);
    }
    setSelectedRange(t3) {
      return this.composition.setSelectedRange(t3);
    }
    activateAttribute(t3) {
      let e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return this.composition.setCurrentAttribute(t3, e2);
    }
    attributeIsActive(t3) {
      return this.composition.hasCurrentAttribute(t3);
    }
    canActivateAttribute(t3) {
      return this.composition.canSetCurrentAttribute(t3);
    }
    deactivateAttribute(t3) {
      return this.composition.removeCurrentAttribute(t3);
    }
    setHTMLAtributeAtPosition(t3, e2, i2) {
      this.composition.setHTMLAtributeAtPosition(t3, e2, i2);
    }
    canDecreaseNestingLevel() {
      return this.composition.canDecreaseNestingLevel();
    }
    canIncreaseNestingLevel() {
      return this.composition.canIncreaseNestingLevel();
    }
    decreaseNestingLevel() {
      if (this.canDecreaseNestingLevel()) return this.composition.decreaseNestingLevel();
    }
    increaseNestingLevel() {
      if (this.canIncreaseNestingLevel()) return this.composition.increaseNestingLevel();
    }
    canRedo() {
      return this.undoManager.canRedo();
    }
    canUndo() {
      return this.undoManager.canUndo();
    }
    recordUndoEntry(t3) {
      let { context: e2, consolidatable: i2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return this.undoManager.recordUndoEntry(t3, { context: e2, consolidatable: i2 });
    }
    redo() {
      if (this.canRedo()) return this.undoManager.redo();
    }
    undo() {
      if (this.canUndo()) return this.undoManager.undo();
    }
  };
  var Mn = class {
    constructor(t3) {
      this.element = t3;
    }
    findLocationFromContainerAndOffset(t3, e2) {
      let { strict: i2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { strict: true }, n2 = 0, r2 = false;
      const o2 = { index: 0, offset: 0 }, s2 = this.findAttachmentElementParentForNode(t3);
      s2 && (t3 = s2.parentNode, e2 = E(s2));
      const a2 = R(this.element, { usingFilter: Wn });
      for (; a2.nextNode(); ) {
        const s3 = a2.currentNode;
        if (s3 === t3 && B(t3)) {
          F(s3) || (o2.offset += e2);
          break;
        }
        if (s3.parentNode === t3) {
          if (n2++ === e2) break;
        } else if (!C(t3, s3) && n2 > 0) break;
        N(s3, { strict: i2 }) ? (r2 && o2.index++, o2.offset = 0, r2 = true) : o2.offset += Bn(s3);
      }
      return o2;
    }
    findContainerAndOffsetFromLocation(t3) {
      let e2, i2;
      if (0 === t3.index && 0 === t3.offset) {
        for (e2 = this.element, i2 = 0; e2.firstChild; ) if (e2 = e2.firstChild, D(e2)) {
          i2 = 1;
          break;
        }
        return [e2, i2];
      }
      let [n2, r2] = this.findNodeAndOffsetFromLocation(t3);
      if (n2) {
        if (B(n2)) 0 === Bn(n2) ? (e2 = n2.parentNode.parentNode, i2 = E(n2.parentNode), F(n2, { name: "right" }) && i2++) : (e2 = n2, i2 = t3.offset - r2);
        else {
          if (e2 = n2.parentNode, !N(n2.previousSibling) && !D(e2)) for (; n2 === e2.lastChild && (n2 = e2, e2 = e2.parentNode, !D(e2)); ) ;
          i2 = E(n2), 0 !== t3.offset && i2++;
        }
        return [e2, i2];
      }
    }
    findNodeAndOffsetFromLocation(t3) {
      let e2, i2, n2 = 0;
      for (const r2 of this.getSignificantNodesForIndex(t3.index)) {
        const o2 = Bn(r2);
        if (t3.offset <= n2 + o2) if (B(r2)) {
          if (e2 = r2, i2 = n2, t3.offset === i2 && F(e2)) break;
        } else e2 || (e2 = r2, i2 = n2);
        if (n2 += o2, n2 > t3.offset) break;
      }
      return [e2, i2];
    }
    findAttachmentElementParentForNode(t3) {
      for (; t3 && t3 !== this.element; ) {
        if (P(t3)) return t3;
        t3 = t3.parentNode;
      }
    }
    getSignificantNodesForIndex(t3) {
      const e2 = [], i2 = R(this.element, { usingFilter: _n });
      let n2 = false;
      for (; i2.nextNode(); ) {
        const o2 = i2.currentNode;
        var r2;
        if (I(o2)) {
          if (null != r2 ? r2++ : r2 = 0, r2 === t3) n2 = true;
          else if (n2) break;
        } else n2 && e2.push(o2);
      }
      return e2;
    }
  };
  var Bn = function(t3) {
    if (t3.nodeType === Node.TEXT_NODE) {
      if (F(t3)) return 0;
      return t3.textContent.length;
    }
    return "br" === k(t3) || P(t3) ? 1 : 0;
  };
  var _n = function(t3) {
    return jn(t3) === NodeFilter.FILTER_ACCEPT ? Wn(t3) : NodeFilter.FILTER_REJECT;
  };
  var jn = function(t3) {
    return M(t3) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  };
  var Wn = function(t3) {
    return P(t3.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  };
  var Un = class {
    createDOMRangeFromPoint(t3) {
      let e2, { x: i2, y: n2 } = t3;
      if (document.caretPositionFromPoint) {
        const { offsetNode: t4, offset: r2 } = document.caretPositionFromPoint(i2, n2);
        return e2 = document.createRange(), e2.setStart(t4, r2), e2;
      }
      if (document.caretRangeFromPoint) return document.caretRangeFromPoint(i2, n2);
      if (document.body.createTextRange) {
        const t4 = Mt();
        try {
          const t5 = document.body.createTextRange();
          t5.moveToPoint(i2, n2), t5.select();
        } catch (t5) {
        }
        return e2 = Mt(), Bt(t4), e2;
      }
    }
    getClientRectsForDOMRange(t3) {
      const e2 = Array.from(t3.getClientRects());
      return [e2[0], e2[e2.length - 1]];
    }
  };
  var Vn = class extends q {
    constructor(t3) {
      super(...arguments), this.didMouseDown = this.didMouseDown.bind(this), this.selectionDidChange = this.selectionDidChange.bind(this), this.element = t3, this.locationMapper = new Mn(this.element), this.pointMapper = new Un(), this.lockCount = 0, b("mousedown", { onElement: this.element, withCallback: this.didMouseDown });
    }
    getLocationRange() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return false === t3.strict ? this.createLocationRangeFromDOMRange(Mt()) : t3.ignoreLock ? this.currentLocationRange : this.lockedLocationRange ? this.lockedLocationRange : this.currentLocationRange;
    }
    setLocationRange(t3) {
      if (this.lockedLocationRange) return;
      t3 = wt(t3);
      const e2 = this.createDOMRangeFromLocationRange(t3);
      e2 && (Bt(e2), this.updateCurrentLocationRange(t3));
    }
    setLocationRangeFromPointRange(t3) {
      t3 = wt(t3);
      const e2 = this.getLocationAtPoint(t3[0]), i2 = this.getLocationAtPoint(t3[1]);
      this.setLocationRange([e2, i2]);
    }
    getClientRectAtLocationRange(t3) {
      const e2 = this.createDOMRangeFromLocationRange(t3);
      if (e2) return this.getClientRectsForDOMRange(e2)[1];
    }
    locationIsCursorTarget(t3) {
      const e2 = Array.from(this.findNodeAndOffsetFromLocation(t3))[0];
      return F(e2);
    }
    lock() {
      0 == this.lockCount++ && (this.updateCurrentLocationRange(), this.lockedLocationRange = this.getLocationRange());
    }
    unlock() {
      if (0 == --this.lockCount) {
        const { lockedLocationRange: t3 } = this;
        if (this.lockedLocationRange = null, null != t3) return this.setLocationRange(t3);
      }
    }
    clearSelection() {
      var t3;
      return null === (t3 = Pt()) || void 0 === t3 ? void 0 : t3.removeAllRanges();
    }
    selectionIsCollapsed() {
      var t3;
      return true === (null === (t3 = Mt()) || void 0 === t3 ? void 0 : t3.collapsed);
    }
    selectionIsExpanded() {
      return !this.selectionIsCollapsed();
    }
    createLocationRangeFromDOMRange(t3, e2) {
      if (null == t3 || !this.domRangeWithinElement(t3)) return;
      const i2 = this.findLocationFromContainerAndOffset(t3.startContainer, t3.startOffset, e2);
      if (!i2) return;
      const n2 = t3.collapsed ? void 0 : this.findLocationFromContainerAndOffset(t3.endContainer, t3.endOffset, e2);
      return wt([i2, n2]);
    }
    didMouseDown() {
      return this.pauseTemporarily();
    }
    pauseTemporarily() {
      let t3;
      this.paused = true;
      const e2 = () => {
        if (this.paused = false, clearTimeout(i2), Array.from(t3).forEach((t4) => {
          t4.destroy();
        }), C(document, this.element)) return this.selectionDidChange();
      }, i2 = setTimeout(e2, 200);
      t3 = ["mousemove", "keydown"].map((t4) => b(t4, { onElement: document, withCallback: e2 }));
    }
    selectionDidChange() {
      if (!this.paused && !x(this.element)) return this.updateCurrentLocationRange();
    }
    updateCurrentLocationRange(t3) {
      var e2, i2;
      if ((null != t3 ? t3 : t3 = this.createLocationRangeFromDOMRange(Mt())) && !Dt(t3, this.currentLocationRange)) return this.currentLocationRange = t3, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.locationRangeDidChange) || void 0 === i2 ? void 0 : i2.call(e2, this.currentLocationRange.slice(0));
    }
    createDOMRangeFromLocationRange(t3) {
      const e2 = this.findContainerAndOffsetFromLocation(t3[0]), i2 = Lt(t3) ? e2 : this.findContainerAndOffsetFromLocation(t3[1]) || e2;
      if (null != e2 && null != i2) {
        const t4 = document.createRange();
        return t4.setStart(...Array.from(e2 || [])), t4.setEnd(...Array.from(i2 || [])), t4;
      }
    }
    getLocationAtPoint(t3) {
      const e2 = this.createDOMRangeFromPoint(t3);
      var i2;
      if (e2) return null === (i2 = this.createLocationRangeFromDOMRange(e2)) || void 0 === i2 ? void 0 : i2[0];
    }
    domRangeWithinElement(t3) {
      return t3.collapsed ? C(this.element, t3.startContainer) : C(this.element, t3.startContainer) && C(this.element, t3.endContainer);
    }
  };
  Vn.proxyMethod("locationMapper.findLocationFromContainerAndOffset"), Vn.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"), Vn.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"), Vn.proxyMethod("pointMapper.createDOMRangeFromPoint"), Vn.proxyMethod("pointMapper.getClientRectsForDOMRange");
  var zn = Object.freeze({ __proto__: null, Attachment: Vi, AttachmentManager: kn, AttachmentPiece: zi, Block: Xi, Composition: wn, Document: an, Editor: Pn, HTMLParser: hn, HTMLSanitizer: di, LineBreakInsertion: Tn, LocationMapper: Mn, ManagedAttachment: Rn, Piece: Wi, PointMapper: Un, SelectionManager: Vn, SplittableList: Hi, StringPiece: qi, Text: Yi, UndoManager: Ln });
  var qn = Object.freeze({ __proto__: null, ObjectView: ie, AttachmentView: pi, BlockView: Ei, DocumentView: Si, PieceView: Ai, PreviewableAttachmentView: vi, TextView: yi });
  var { lang: Hn, css: Jn, keyNames: Kn } = z;
  var Gn = function(t3) {
    return function() {
      const e2 = t3.apply(this, arguments);
      e2.do(), this.undos || (this.undos = []), this.undos.push(e2.undo);
    };
  };
  var Yn = class extends q {
    constructor(t3, e2, i2) {
      let n2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      super(...arguments), Di(this, "makeElementMutable", Gn(() => ({ do: () => {
        this.element.dataset.trixMutable = true;
      }, undo: () => delete this.element.dataset.trixMutable }))), Di(this, "addToolbar", Gn(() => {
        const t4 = T({ tagName: "div", className: Jn.attachmentToolbar, data: { trixMutable: true }, childNodes: T({ tagName: "div", className: "trix-button-row", childNodes: T({ tagName: "span", className: "trix-button-group trix-button-group--actions", childNodes: T({ tagName: "button", className: "trix-button trix-button--remove", textContent: Hn.remove, attributes: { title: Hn.remove }, data: { trixAction: "remove" } }) }) }) });
        return this.attachment.isPreviewable() && t4.appendChild(T({ tagName: "div", className: Jn.attachmentMetadataContainer, childNodes: T({ tagName: "span", className: Jn.attachmentMetadata, childNodes: [T({ tagName: "span", className: Jn.attachmentName, textContent: this.attachment.getFilename(), attributes: { title: this.attachment.getFilename() } }), T({ tagName: "span", className: Jn.attachmentSize, textContent: this.attachment.getFormattedFilesize() })] }) })), b("click", { onElement: t4, withCallback: this.didClickToolbar }), b("click", { onElement: t4, matchingSelector: "[data-trix-action]", withCallback: this.didClickActionButton }), v("trix-attachment-before-toolbar", { onElement: this.element, attributes: { toolbar: t4, attachment: this.attachment } }), { do: () => this.element.appendChild(t4), undo: () => S(t4) };
      })), Di(this, "installCaptionEditor", Gn(() => {
        const t4 = T({ tagName: "textarea", className: Jn.attachmentCaptionEditor, attributes: { placeholder: Hn.captionPlaceholder }, data: { trixMutable: true } });
        t4.value = this.attachmentPiece.getCaption();
        const e3 = t4.cloneNode();
        e3.classList.add("trix-autoresize-clone"), e3.tabIndex = -1;
        const i3 = function() {
          e3.value = t4.value, t4.style.height = e3.scrollHeight + "px";
        };
        b("input", { onElement: t4, withCallback: i3 }), b("input", { onElement: t4, withCallback: this.didInputCaption }), b("keydown", { onElement: t4, withCallback: this.didKeyDownCaption }), b("change", { onElement: t4, withCallback: this.didChangeCaption }), b("blur", { onElement: t4, withCallback: this.didBlurCaption });
        const n3 = this.element.querySelector("figcaption"), r2 = n3.cloneNode();
        return { do: () => {
          if (n3.style.display = "none", r2.appendChild(t4), r2.appendChild(e3), r2.classList.add("".concat(Jn.attachmentCaption, "--editing")), n3.parentElement.insertBefore(r2, n3), i3(), this.options.editCaption) return Rt(() => t4.focus());
        }, undo() {
          S(r2), n3.style.display = null;
        } };
      })), this.didClickToolbar = this.didClickToolbar.bind(this), this.didClickActionButton = this.didClickActionButton.bind(this), this.didKeyDownCaption = this.didKeyDownCaption.bind(this), this.didInputCaption = this.didInputCaption.bind(this), this.didChangeCaption = this.didChangeCaption.bind(this), this.didBlurCaption = this.didBlurCaption.bind(this), this.attachmentPiece = t3, this.element = e2, this.container = i2, this.options = n2, this.attachment = this.attachmentPiece.attachment, "a" === k(this.element) && (this.element = this.element.firstChild), this.install();
    }
    install() {
      this.makeElementMutable(), this.addToolbar(), this.attachment.isPreviewable() && this.installCaptionEditor();
    }
    uninstall() {
      var t3;
      let e2 = this.undos.pop();
      for (this.savePendingCaption(); e2; ) e2(), e2 = this.undos.pop();
      null === (t3 = this.delegate) || void 0 === t3 || t3.didUninstallAttachmentEditor(this);
    }
    savePendingCaption() {
      if (null != this.pendingCaption) {
        const r2 = this.pendingCaption;
        var t3, e2, i2, n2;
        if (this.pendingCaption = null, r2) null === (t3 = this.delegate) || void 0 === t3 || null === (e2 = t3.attachmentEditorDidRequestUpdatingAttributesForAttachment) || void 0 === e2 || e2.call(t3, { caption: r2 }, this.attachment);
        else null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.attachmentEditorDidRequestRemovingAttributeForAttachment) || void 0 === n2 || n2.call(i2, "caption", this.attachment);
      }
    }
    didClickToolbar(t3) {
      return t3.preventDefault(), t3.stopPropagation();
    }
    didClickActionButton(t3) {
      var e2;
      if ("remove" === t3.target.getAttribute("data-trix-action")) return null === (e2 = this.delegate) || void 0 === e2 ? void 0 : e2.attachmentEditorDidRequestRemovalOfAttachment(this.attachment);
    }
    didKeyDownCaption(t3) {
      var e2, i2;
      if ("return" === Kn[t3.keyCode]) return t3.preventDefault(), this.savePendingCaption(), null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.attachmentEditorDidRequestDeselectingAttachment) || void 0 === i2 ? void 0 : i2.call(e2, this.attachment);
    }
    didInputCaption(t3) {
      this.pendingCaption = t3.target.value.replace(/\s/g, " ").trim();
    }
    didChangeCaption(t3) {
      return this.savePendingCaption();
    }
    didBlurCaption(t3) {
      return this.savePendingCaption();
    }
  };
  var Xn = class extends q {
    constructor(t3, i2) {
      super(...arguments), this.didFocus = this.didFocus.bind(this), this.didBlur = this.didBlur.bind(this), this.didClickAttachment = this.didClickAttachment.bind(this), this.element = t3, this.composition = i2, this.documentView = new Si(this.composition.document, { element: this.element }), b("focus", { onElement: this.element, withCallback: this.didFocus }), b("blur", { onElement: this.element, withCallback: this.didBlur }), b("click", { onElement: this.element, matchingSelector: "a[contenteditable=false]", preventDefault: true }), b("mousedown", { onElement: this.element, matchingSelector: e, withCallback: this.didClickAttachment }), b("click", { onElement: this.element, matchingSelector: "a".concat(e), preventDefault: true });
    }
    didFocus(t3) {
      var e2;
      const i2 = () => {
        var t4, e3;
        if (!this.focused) return this.focused = true, null === (t4 = this.delegate) || void 0 === t4 || null === (e3 = t4.compositionControllerDidFocus) || void 0 === e3 ? void 0 : e3.call(t4);
      };
      return (null === (e2 = this.blurPromise) || void 0 === e2 ? void 0 : e2.then(i2)) || i2();
    }
    didBlur(t3) {
      this.blurPromise = new Promise((t4) => Rt(() => {
        var e2, i2;
        x(this.element) || (this.focused = null, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionControllerDidBlur) || void 0 === i2 || i2.call(e2));
        return this.blurPromise = null, t4();
      }));
    }
    didClickAttachment(t3, e2) {
      var i2, n2;
      const r2 = this.findAttachmentForElement(e2), o2 = !!y(t3.target, { matchingSelector: "figcaption" });
      return null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.compositionControllerDidSelectAttachment) || void 0 === n2 ? void 0 : n2.call(i2, r2, { editCaption: o2 });
    }
    getSerializableElement() {
      return this.isEditingAttachment() ? this.documentView.shadowElement : this.element;
    }
    render() {
      var t3, e2, i2, n2, r2, o2;
      (this.revision !== this.composition.revision && (this.documentView.setDocument(this.composition.document), this.documentView.render(), this.revision = this.composition.revision), this.canSyncDocumentView() && !this.documentView.isSynced()) && (null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.compositionControllerWillSyncDocumentView) || void 0 === n2 || n2.call(i2), this.documentView.sync(), null === (r2 = this.delegate) || void 0 === r2 || null === (o2 = r2.compositionControllerDidSyncDocumentView) || void 0 === o2 || o2.call(r2));
      return null === (t3 = this.delegate) || void 0 === t3 || null === (e2 = t3.compositionControllerDidRender) || void 0 === e2 ? void 0 : e2.call(t3);
    }
    rerenderViewForObject(t3) {
      return this.invalidateViewForObject(t3), this.render();
    }
    invalidateViewForObject(t3) {
      return this.documentView.invalidateViewForObject(t3);
    }
    isViewCachingEnabled() {
      return this.documentView.isViewCachingEnabled();
    }
    enableViewCaching() {
      return this.documentView.enableViewCaching();
    }
    disableViewCaching() {
      return this.documentView.disableViewCaching();
    }
    refreshViewCache() {
      return this.documentView.garbageCollectCachedViews();
    }
    isEditingAttachment() {
      return !!this.attachmentEditor;
    }
    installAttachmentEditorForAttachment(t3, e2) {
      var i2;
      if ((null === (i2 = this.attachmentEditor) || void 0 === i2 ? void 0 : i2.attachment) === t3) return;
      const n2 = this.documentView.findElementForObject(t3);
      if (!n2) return;
      this.uninstallAttachmentEditor();
      const r2 = this.composition.document.getAttachmentPieceForAttachment(t3);
      this.attachmentEditor = new Yn(r2, n2, this.element, e2), this.attachmentEditor.delegate = this;
    }
    uninstallAttachmentEditor() {
      var t3;
      return null === (t3 = this.attachmentEditor) || void 0 === t3 ? void 0 : t3.uninstall();
    }
    didUninstallAttachmentEditor() {
      return this.attachmentEditor = null, this.render();
    }
    attachmentEditorDidRequestUpdatingAttributesForAttachment(t3, e2) {
      var i2, n2;
      return null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.compositionControllerWillUpdateAttachment) || void 0 === n2 || n2.call(i2, e2), this.composition.updateAttributesForAttachment(t3, e2);
    }
    attachmentEditorDidRequestRemovingAttributeForAttachment(t3, e2) {
      var i2, n2;
      return null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.compositionControllerWillUpdateAttachment) || void 0 === n2 || n2.call(i2, e2), this.composition.removeAttributeForAttachment(t3, e2);
    }
    attachmentEditorDidRequestRemovalOfAttachment(t3) {
      var e2, i2;
      return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionControllerDidRequestRemovalOfAttachment) || void 0 === i2 ? void 0 : i2.call(e2, t3);
    }
    attachmentEditorDidRequestDeselectingAttachment(t3) {
      var e2, i2;
      return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionControllerDidRequestDeselectingAttachment) || void 0 === i2 ? void 0 : i2.call(e2, t3);
    }
    canSyncDocumentView() {
      return !this.isEditingAttachment();
    }
    findAttachmentForElement(t3) {
      return this.composition.document.getAttachmentById(parseInt(t3.dataset.trixId, 10));
    }
  };
  var $n = class extends q {
  };
  var Zn = "data-trix-mutable";
  var Qn = "[".concat(Zn, "]");
  var tr = { attributes: true, childList: true, characterData: true, characterDataOldValue: true, subtree: true };
  var er = class extends q {
    constructor(t3) {
      super(t3), this.didMutate = this.didMutate.bind(this), this.element = t3, this.observer = new window.MutationObserver(this.didMutate), this.start();
    }
    start() {
      return this.reset(), this.observer.observe(this.element, tr);
    }
    stop() {
      return this.observer.disconnect();
    }
    didMutate(t3) {
      var e2, i2;
      if (this.mutations.push(...Array.from(this.findSignificantMutations(t3) || [])), this.mutations.length) return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.elementDidMutate) || void 0 === i2 || i2.call(e2, this.getMutationSummary()), this.reset();
    }
    reset() {
      this.mutations = [];
    }
    findSignificantMutations(t3) {
      return t3.filter((t4) => this.mutationIsSignificant(t4));
    }
    mutationIsSignificant(t3) {
      if (this.nodeIsMutable(t3.target)) return false;
      for (const e2 of Array.from(this.nodesModifiedByMutation(t3))) if (this.nodeIsSignificant(e2)) return true;
      return false;
    }
    nodeIsSignificant(t3) {
      return t3 !== this.element && !this.nodeIsMutable(t3) && !M(t3);
    }
    nodeIsMutable(t3) {
      return y(t3, { matchingSelector: Qn });
    }
    nodesModifiedByMutation(t3) {
      const e2 = [];
      switch (t3.type) {
        case "attributes":
          t3.attributeName !== Zn && e2.push(t3.target);
          break;
        case "characterData":
          e2.push(t3.target.parentNode), e2.push(t3.target);
          break;
        case "childList":
          e2.push(...Array.from(t3.addedNodes || [])), e2.push(...Array.from(t3.removedNodes || []));
      }
      return e2;
    }
    getMutationSummary() {
      return this.getTextMutationSummary();
    }
    getTextMutationSummary() {
      const { additions: t3, deletions: e2 } = this.getTextChangesFromCharacterData(), i2 = this.getTextChangesFromChildList();
      Array.from(i2.additions).forEach((e3) => {
        Array.from(t3).includes(e3) || t3.push(e3);
      }), e2.push(...Array.from(i2.deletions || []));
      const n2 = {}, r2 = t3.join("");
      r2 && (n2.textAdded = r2);
      const o2 = e2.join("");
      return o2 && (n2.textDeleted = o2), n2;
    }
    getMutationsByType(t3) {
      return Array.from(this.mutations).filter((e2) => e2.type === t3);
    }
    getTextChangesFromChildList() {
      let t3, e2;
      const i2 = [], n2 = [];
      Array.from(this.getMutationsByType("childList")).forEach((t4) => {
        i2.push(...Array.from(t4.addedNodes || [])), n2.push(...Array.from(t4.removedNodes || []));
      });
      0 === i2.length && 1 === n2.length && I(n2[0]) ? (t3 = [], e2 = ["\n"]) : (t3 = ir(i2), e2 = ir(n2));
      const r2 = t3.filter((t4, i3) => t4 !== e2[i3]).map(Wt), o2 = e2.filter((e3, i3) => e3 !== t3[i3]).map(Wt);
      return { additions: r2, deletions: o2 };
    }
    getTextChangesFromCharacterData() {
      let t3, e2;
      const i2 = this.getMutationsByType("characterData");
      if (i2.length) {
        const n2 = i2[0], r2 = i2[i2.length - 1], o2 = function(t4, e3) {
          let i3, n3;
          return t4 = $.box(t4), (e3 = $.box(e3)).length < t4.length ? [n3, i3] = zt(t4, e3) : [i3, n3] = zt(e3, t4), { added: i3, removed: n3 };
        }(Wt(n2.oldValue), Wt(r2.target.data));
        t3 = o2.added, e2 = o2.removed;
      }
      return { additions: t3 ? [t3] : [], deletions: e2 ? [e2] : [] };
    }
  };
  var ir = function() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e2 = [];
    for (const i2 of Array.from(t3)) switch (i2.nodeType) {
      case Node.TEXT_NODE:
        e2.push(i2.data);
        break;
      case Node.ELEMENT_NODE:
        "br" === k(i2) ? e2.push("\n") : e2.push(...Array.from(ir(i2.childNodes) || []));
    }
    return e2;
  };
  var nr = class extends ee {
    constructor(t3) {
      super(...arguments), this.file = t3;
    }
    perform(t3) {
      const e2 = new FileReader();
      return e2.onerror = () => t3(false), e2.onload = () => {
        e2.onerror = null;
        try {
          e2.abort();
        } catch (t4) {
        }
        return t3(true, this.file);
      }, e2.readAsArrayBuffer(this.file);
    }
  };
  var rr = class {
    constructor(t3) {
      this.element = t3;
    }
    shouldIgnore(t3) {
      return !!a.samsungAndroid && (this.previousEvent = this.event, this.event = t3, this.checkSamsungKeyboardBuggyModeStart(), this.checkSamsungKeyboardBuggyModeEnd(), this.buggyMode);
    }
    checkSamsungKeyboardBuggyModeStart() {
      this.insertingLongTextAfterUnidentifiedChar() && or(this.element.innerText, this.event.data) && (this.buggyMode = true, this.event.preventDefault());
    }
    checkSamsungKeyboardBuggyModeEnd() {
      this.buggyMode && "insertText" !== this.event.inputType && (this.buggyMode = false);
    }
    insertingLongTextAfterUnidentifiedChar() {
      var t3;
      return this.isBeforeInputInsertText() && this.previousEventWasUnidentifiedKeydown() && (null === (t3 = this.event.data) || void 0 === t3 ? void 0 : t3.length) > 50;
    }
    isBeforeInputInsertText() {
      return "beforeinput" === this.event.type && "insertText" === this.event.inputType;
    }
    previousEventWasUnidentifiedKeydown() {
      var t3, e2;
      return "keydown" === (null === (t3 = this.previousEvent) || void 0 === t3 ? void 0 : t3.type) && "Unidentified" === (null === (e2 = this.previousEvent) || void 0 === e2 ? void 0 : e2.key);
    }
  };
  var or = (t3, e2) => ar(t3) === ar(e2);
  var sr = new RegExp("(".concat("\uFFFC", "|").concat(d, "|").concat(g, "|\\s)+"), "g");
  var ar = (t3) => t3.replace(sr, " ").trim();
  var lr = class extends q {
    constructor(t3) {
      super(...arguments), this.element = t3, this.mutationObserver = new er(this.element), this.mutationObserver.delegate = this, this.flakyKeyboardDetector = new rr(this.element);
      for (const t4 in this.constructor.events) b(t4, { onElement: this.element, withCallback: this.handlerFor(t4) });
    }
    elementDidMutate(t3) {
    }
    editorWillSyncDocumentView() {
      return this.mutationObserver.stop();
    }
    editorDidSyncDocumentView() {
      return this.mutationObserver.start();
    }
    requestRender() {
      var t3, e2;
      return null === (t3 = this.delegate) || void 0 === t3 || null === (e2 = t3.inputControllerDidRequestRender) || void 0 === e2 ? void 0 : e2.call(t3);
    }
    requestReparse() {
      var t3, e2;
      return null === (t3 = this.delegate) || void 0 === t3 || null === (e2 = t3.inputControllerDidRequestReparse) || void 0 === e2 || e2.call(t3), this.requestRender();
    }
    attachFiles(t3) {
      const e2 = Array.from(t3).map((t4) => new nr(t4));
      return Promise.all(e2).then((t4) => {
        this.handleInput(function() {
          var e3, i2;
          return null === (e3 = this.delegate) || void 0 === e3 || e3.inputControllerWillAttachFiles(), null === (i2 = this.responder) || void 0 === i2 || i2.insertFiles(t4), this.requestRender();
        });
      });
    }
    handlerFor(t3) {
      return (e2) => {
        e2.defaultPrevented || this.handleInput(() => {
          if (!x(this.element)) {
            if (this.flakyKeyboardDetector.shouldIgnore(e2)) return;
            this.eventName = t3, this.constructor.events[t3].call(this, e2);
          }
        });
      };
    }
    handleInput(t3) {
      try {
        var e2;
        null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillHandleInput(), t3.call(this);
      } finally {
        var i2;
        null === (i2 = this.delegate) || void 0 === i2 || i2.inputControllerDidHandleInput();
      }
    }
    createLinkHTML(t3, e2) {
      const i2 = document.createElement("a");
      return i2.href = t3, i2.textContent = e2 || t3, i2.outerHTML;
    }
  };
  var cr;
  Di(lr, "events", {});
  var { browser: ur, keyNames: hr } = z;
  var dr = 0;
  var gr = class extends lr {
    constructor() {
      super(...arguments), this.resetInputSummary();
    }
    setInputSummary() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.inputSummary.eventName = this.eventName;
      for (const e2 in t3) {
        const i2 = t3[e2];
        this.inputSummary[e2] = i2;
      }
      return this.inputSummary;
    }
    resetInputSummary() {
      this.inputSummary = {};
    }
    reset() {
      return this.resetInputSummary(), Ft.reset();
    }
    elementDidMutate(t3) {
      var e2, i2;
      return this.isComposing() ? null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.inputControllerDidAllowUnhandledInput) || void 0 === i2 ? void 0 : i2.call(e2) : this.handleInput(function() {
        return this.mutationIsSignificant(t3) && (this.mutationIsExpected(t3) ? this.requestRender() : this.requestReparse()), this.reset();
      });
    }
    mutationIsExpected(t3) {
      let { textAdded: e2, textDeleted: i2 } = t3;
      if (this.inputSummary.preferDocument) return true;
      const n2 = null != e2 ? e2 === this.inputSummary.textAdded : !this.inputSummary.textAdded, r2 = null != i2 ? this.inputSummary.didDelete : !this.inputSummary.didDelete, o2 = ["\n", " \n"].includes(e2) && !n2, s2 = "\n" === i2 && !r2;
      if (o2 && !s2 || s2 && !o2) {
        const t4 = this.getSelectedRange();
        if (t4) {
          var a2;
          const i3 = o2 ? e2.replace(/\n$/, "").length || -1 : (null == e2 ? void 0 : e2.length) || 1;
          if (null !== (a2 = this.responder) && void 0 !== a2 && a2.positionIsBlockBreak(t4[1] + i3)) return true;
        }
      }
      return n2 && r2;
    }
    mutationIsSignificant(t3) {
      var e2;
      const i2 = Object.keys(t3).length > 0, n2 = "" === (null === (e2 = this.compositionInput) || void 0 === e2 ? void 0 : e2.getEndData());
      return i2 || !n2;
    }
    getCompositionInput() {
      if (this.isComposing()) return this.compositionInput;
      this.compositionInput = new vr(this);
    }
    isComposing() {
      return this.compositionInput && !this.compositionInput.isEnded();
    }
    deleteInDirection(t3, e2) {
      var i2;
      return false !== (null === (i2 = this.responder) || void 0 === i2 ? void 0 : i2.deleteInDirection(t3)) ? this.setInputSummary({ didDelete: true }) : e2 ? (e2.preventDefault(), this.requestRender()) : void 0;
    }
    serializeSelectionToDataTransfer(t3) {
      var e2;
      if (!function(t4) {
        if (null == t4 || !t4.setData) return false;
        for (const e3 in Ct) {
          const i3 = Ct[e3];
          try {
            if (t4.setData(e3, i3), !t4.getData(e3) === i3) return false;
          } catch (t5) {
            return false;
          }
        }
        return true;
      }(t3)) return;
      const i2 = null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.getSelectedDocument().toSerializableDocument();
      return t3.setData("application/x-trix-document", JSON.stringify(i2)), t3.setData("text/html", Si.render(i2).innerHTML), t3.setData("text/plain", i2.toString().replace(/\n$/, "")), true;
    }
    canAcceptDataTransfer(t3) {
      const e2 = {};
      return Array.from((null == t3 ? void 0 : t3.types) || []).forEach((t4) => {
        e2[t4] = true;
      }), e2.Files || e2["application/x-trix-document"] || e2["text/html"] || e2["text/plain"];
    }
    getPastedHTMLUsingHiddenElement(t3) {
      const e2 = this.getSelectedRange(), i2 = { position: "absolute", left: "".concat(window.pageXOffset, "px"), top: "".concat(window.pageYOffset, "px"), opacity: 0 }, n2 = T({ style: i2, tagName: "div", editable: true });
      return document.body.appendChild(n2), n2.focus(), requestAnimationFrame(() => {
        const i3 = n2.innerHTML;
        return S(n2), this.setSelectedRange(e2), t3(i3);
      });
    }
  };
  Di(gr, "events", { keydown(t3) {
    this.isComposing() || this.resetInputSummary(), this.inputSummary.didInput = true;
    const e2 = hr[t3.keyCode];
    if (e2) {
      var i2;
      let n3 = this.keys;
      ["ctrl", "alt", "shift", "meta"].forEach((e3) => {
        var i3;
        t3["".concat(e3, "Key")] && ("ctrl" === e3 && (e3 = "control"), n3 = null === (i3 = n3) || void 0 === i3 ? void 0 : i3[e3]);
      }), null != (null === (i2 = n3) || void 0 === i2 ? void 0 : i2[e2]) && (this.setInputSummary({ keyName: e2 }), Ft.reset(), n3[e2].call(this, t3));
    }
    if (St(t3)) {
      const e3 = String.fromCharCode(t3.keyCode).toLowerCase();
      if (e3) {
        var n2;
        const i3 = ["alt", "shift"].map((e4) => {
          if (t3["".concat(e4, "Key")]) return e4;
        }).filter((t4) => t4);
        i3.push(e3), null !== (n2 = this.delegate) && void 0 !== n2 && n2.inputControllerDidReceiveKeyboardCommand(i3) && t3.preventDefault();
      }
    }
  }, keypress(t3) {
    if (null != this.inputSummary.eventName) return;
    if (t3.metaKey) return;
    if (t3.ctrlKey && !t3.altKey) return;
    const e2 = fr(t3);
    var i2, n2;
    return e2 ? (null === (i2 = this.delegate) || void 0 === i2 || i2.inputControllerWillPerformTyping(), null === (n2 = this.responder) || void 0 === n2 || n2.insertString(e2), this.setInputSummary({ textAdded: e2, didDelete: this.selectionIsExpanded() })) : void 0;
  }, textInput(t3) {
    const { data: e2 } = t3, { textAdded: i2 } = this.inputSummary;
    if (i2 && i2 !== e2 && i2.toUpperCase() === e2) {
      var n2;
      const t4 = this.getSelectedRange();
      return this.setSelectedRange([t4[0], t4[1] + i2.length]), null === (n2 = this.responder) || void 0 === n2 || n2.insertString(e2), this.setInputSummary({ textAdded: e2 }), this.setSelectedRange(t4);
    }
  }, dragenter(t3) {
    t3.preventDefault();
  }, dragstart(t3) {
    var e2, i2;
    return this.serializeSelectionToDataTransfer(t3.dataTransfer), this.draggedRange = this.getSelectedRange(), null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.inputControllerDidStartDrag) || void 0 === i2 ? void 0 : i2.call(e2);
  }, dragover(t3) {
    if (this.draggedRange || this.canAcceptDataTransfer(t3.dataTransfer)) {
      t3.preventDefault();
      const n2 = { x: t3.clientX, y: t3.clientY };
      var e2, i2;
      if (!Tt(n2, this.draggingPoint)) return this.draggingPoint = n2, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.inputControllerDidReceiveDragOverPoint) || void 0 === i2 ? void 0 : i2.call(e2, this.draggingPoint);
    }
  }, dragend(t3) {
    var e2, i2;
    null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.inputControllerDidCancelDrag) || void 0 === i2 || i2.call(e2), this.draggedRange = null, this.draggingPoint = null;
  }, drop(t3) {
    var e2, i2;
    t3.preventDefault();
    const n2 = null === (e2 = t3.dataTransfer) || void 0 === e2 ? void 0 : e2.files, r2 = t3.dataTransfer.getData("application/x-trix-document"), o2 = { x: t3.clientX, y: t3.clientY };
    if (null === (i2 = this.responder) || void 0 === i2 || i2.setLocationRangeFromPointRange(o2), null != n2 && n2.length) this.attachFiles(n2);
    else if (this.draggedRange) {
      var s2, a2;
      null === (s2 = this.delegate) || void 0 === s2 || s2.inputControllerWillMoveText(), null === (a2 = this.responder) || void 0 === a2 || a2.moveTextFromRange(this.draggedRange), this.draggedRange = null, this.requestRender();
    } else if (r2) {
      var l2;
      const t4 = an.fromJSONString(r2);
      null === (l2 = this.responder) || void 0 === l2 || l2.insertDocument(t4), this.requestRender();
    }
    this.draggedRange = null, this.draggingPoint = null;
  }, cut(t3) {
    var e2, i2;
    if (null !== (e2 = this.responder) && void 0 !== e2 && e2.selectionIsExpanded() && (this.serializeSelectionToDataTransfer(t3.clipboardData) && t3.preventDefault(), null === (i2 = this.delegate) || void 0 === i2 || i2.inputControllerWillCutText(), this.deleteInDirection("backward"), t3.defaultPrevented)) return this.requestRender();
  }, copy(t3) {
    var e2;
    null !== (e2 = this.responder) && void 0 !== e2 && e2.selectionIsExpanded() && this.serializeSelectionToDataTransfer(t3.clipboardData) && t3.preventDefault();
  }, paste(t3) {
    const e2 = t3.clipboardData || t3.testClipboardData, i2 = { clipboard: e2 };
    if (!e2 || br(t3)) return void this.getPastedHTMLUsingHiddenElement((t4) => {
      var e3, n3, r3;
      return i2.type = "text/html", i2.html = t4, null === (e3 = this.delegate) || void 0 === e3 || e3.inputControllerWillPaste(i2), null === (n3 = this.responder) || void 0 === n3 || n3.insertHTML(i2.html), this.requestRender(), null === (r3 = this.delegate) || void 0 === r3 ? void 0 : r3.inputControllerDidPaste(i2);
    });
    const n2 = e2.getData("URL"), r2 = e2.getData("text/html"), o2 = e2.getData("public.url-name");
    if (n2) {
      var s2, a2, l2;
      let t4;
      i2.type = "text/html", t4 = o2 ? Vt(o2).trim() : n2, i2.html = this.createLinkHTML(n2, t4), null === (s2 = this.delegate) || void 0 === s2 || s2.inputControllerWillPaste(i2), this.setInputSummary({ textAdded: t4, didDelete: this.selectionIsExpanded() }), null === (a2 = this.responder) || void 0 === a2 || a2.insertHTML(i2.html), this.requestRender(), null === (l2 = this.delegate) || void 0 === l2 || l2.inputControllerDidPaste(i2);
    } else if (Et(e2)) {
      var c2, u2, h3;
      i2.type = "text/plain", i2.string = e2.getData("text/plain"), null === (c2 = this.delegate) || void 0 === c2 || c2.inputControllerWillPaste(i2), this.setInputSummary({ textAdded: i2.string, didDelete: this.selectionIsExpanded() }), null === (u2 = this.responder) || void 0 === u2 || u2.insertString(i2.string), this.requestRender(), null === (h3 = this.delegate) || void 0 === h3 || h3.inputControllerDidPaste(i2);
    } else if (r2) {
      var d2, g2, m2;
      i2.type = "text/html", i2.html = r2, null === (d2 = this.delegate) || void 0 === d2 || d2.inputControllerWillPaste(i2), null === (g2 = this.responder) || void 0 === g2 || g2.insertHTML(i2.html), this.requestRender(), null === (m2 = this.delegate) || void 0 === m2 || m2.inputControllerDidPaste(i2);
    } else if (Array.from(e2.types).includes("Files")) {
      var p2, f2;
      const t4 = null === (p2 = e2.items) || void 0 === p2 || null === (p2 = p2[0]) || void 0 === p2 || null === (f2 = p2.getAsFile) || void 0 === f2 ? void 0 : f2.call(p2);
      if (t4) {
        var b2, v2, A2;
        const e3 = mr(t4);
        !t4.name && e3 && (t4.name = "pasted-file-".concat(++dr, ".").concat(e3)), i2.type = "File", i2.file = t4, null === (b2 = this.delegate) || void 0 === b2 || b2.inputControllerWillAttachFiles(), null === (v2 = this.responder) || void 0 === v2 || v2.insertFile(i2.file), this.requestRender(), null === (A2 = this.delegate) || void 0 === A2 || A2.inputControllerDidPaste(i2);
      }
    }
    t3.preventDefault();
  }, compositionstart(t3) {
    return this.getCompositionInput().start(t3.data);
  }, compositionupdate(t3) {
    return this.getCompositionInput().update(t3.data);
  }, compositionend(t3) {
    return this.getCompositionInput().end(t3.data);
  }, beforeinput(t3) {
    this.inputSummary.didInput = true;
  }, input(t3) {
    return this.inputSummary.didInput = true, t3.stopPropagation();
  } }), Di(gr, "keys", { backspace(t3) {
    var e2;
    return null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t3);
  }, delete(t3) {
    var e2;
    return null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t3);
  }, return(t3) {
    var e2, i2;
    return this.setInputSummary({ preferDocument: true }), null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), null === (i2 = this.responder) || void 0 === i2 ? void 0 : i2.insertLineBreak();
  }, tab(t3) {
    var e2, i2;
    null !== (e2 = this.responder) && void 0 !== e2 && e2.canIncreaseNestingLevel() && (null === (i2 = this.responder) || void 0 === i2 || i2.increaseNestingLevel(), this.requestRender(), t3.preventDefault());
  }, left(t3) {
    var e2;
    if (this.selectionIsInCursorTarget()) return t3.preventDefault(), null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.moveCursorInDirection("backward");
  }, right(t3) {
    var e2;
    if (this.selectionIsInCursorTarget()) return t3.preventDefault(), null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.moveCursorInDirection("forward");
  }, control: { d(t3) {
    var e2;
    return null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t3);
  }, h(t3) {
    var e2;
    return null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t3);
  }, o(t3) {
    var e2, i2;
    return t3.preventDefault(), null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), null === (i2 = this.responder) || void 0 === i2 || i2.insertString("\n", { updatePosition: false }), this.requestRender();
  } }, shift: { return(t3) {
    var e2, i2;
    null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), null === (i2 = this.responder) || void 0 === i2 || i2.insertString("\n"), this.requestRender(), t3.preventDefault();
  }, tab(t3) {
    var e2, i2;
    null !== (e2 = this.responder) && void 0 !== e2 && e2.canDecreaseNestingLevel() && (null === (i2 = this.responder) || void 0 === i2 || i2.decreaseNestingLevel(), this.requestRender(), t3.preventDefault());
  }, left(t3) {
    if (this.selectionIsInCursorTarget()) return t3.preventDefault(), this.expandSelectionInDirection("backward");
  }, right(t3) {
    if (this.selectionIsInCursorTarget()) return t3.preventDefault(), this.expandSelectionInDirection("forward");
  } }, alt: { backspace(t3) {
    var e2;
    return this.setInputSummary({ preferDocument: false }), null === (e2 = this.delegate) || void 0 === e2 ? void 0 : e2.inputControllerWillPerformTyping();
  } }, meta: { backspace(t3) {
    var e2;
    return this.setInputSummary({ preferDocument: false }), null === (e2 = this.delegate) || void 0 === e2 ? void 0 : e2.inputControllerWillPerformTyping();
  } } }), gr.proxyMethod("responder?.getSelectedRange"), gr.proxyMethod("responder?.setSelectedRange"), gr.proxyMethod("responder?.expandSelectionInDirection"), gr.proxyMethod("responder?.selectionIsInCursorTarget"), gr.proxyMethod("responder?.selectionIsExpanded");
  var mr = (t3) => {
    var e2;
    return null === (e2 = t3.type) || void 0 === e2 || null === (e2 = e2.match(/\/(\w+)$/)) || void 0 === e2 ? void 0 : e2[1];
  };
  var pr = !(null === (cr = " ".codePointAt) || void 0 === cr || !cr.call(" ", 0));
  var fr = function(t3) {
    if (t3.key && pr && t3.key.codePointAt(0) === t3.keyCode) return t3.key;
    {
      let e2;
      if (null === t3.which ? e2 = t3.keyCode : 0 !== t3.which && 0 !== t3.charCode && (e2 = t3.charCode), null != e2 && "escape" !== hr[e2]) return $.fromCodepoints([e2]).toString();
    }
  };
  var br = function(t3) {
    const e2 = t3.clipboardData;
    if (e2) {
      if (e2.types.includes("text/html")) {
        for (const t4 of e2.types) {
          const i2 = /^CorePasteboardFlavorType/.test(t4), n2 = /^dyn\./.test(t4) && e2.getData(t4);
          if (i2 || n2) return true;
        }
        return false;
      }
      {
        const t4 = e2.types.includes("com.apple.webarchive"), i2 = e2.types.includes("com.apple.flat-rtfd");
        return t4 || i2;
      }
    }
  };
  var vr = class extends q {
    constructor(t3) {
      super(...arguments), this.inputController = t3, this.responder = this.inputController.responder, this.delegate = this.inputController.delegate, this.inputSummary = this.inputController.inputSummary, this.data = {};
    }
    start(t3) {
      if (this.data.start = t3, this.isSignificant()) {
        var e2, i2;
        if ("keypress" === this.inputSummary.eventName && this.inputSummary.textAdded) null === (i2 = this.responder) || void 0 === i2 || i2.deleteInDirection("left");
        this.selectionIsExpanded() || (this.insertPlaceholder(), this.requestRender()), this.range = null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.getSelectedRange();
      }
    }
    update(t3) {
      if (this.data.update = t3, this.isSignificant()) {
        const t4 = this.selectPlaceholder();
        t4 && (this.forgetPlaceholder(), this.range = t4);
      }
    }
    end(t3) {
      return this.data.end = t3, this.isSignificant() ? (this.forgetPlaceholder(), this.canApplyToDocument() ? (this.setInputSummary({ preferDocument: true, didInput: false }), null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), null === (i2 = this.responder) || void 0 === i2 || i2.setSelectedRange(this.range), null === (n2 = this.responder) || void 0 === n2 || n2.insertString(this.data.end), null === (r2 = this.responder) || void 0 === r2 ? void 0 : r2.setSelectedRange(this.range[0] + this.data.end.length)) : null != this.data.start || null != this.data.update ? (this.requestReparse(), this.inputController.reset()) : void 0) : this.inputController.reset();
      var e2, i2, n2, r2;
    }
    getEndData() {
      return this.data.end;
    }
    isEnded() {
      return null != this.getEndData();
    }
    isSignificant() {
      return !ur.composesExistingText || this.inputSummary.didInput;
    }
    canApplyToDocument() {
      var t3, e2;
      return 0 === (null === (t3 = this.data.start) || void 0 === t3 ? void 0 : t3.length) && (null === (e2 = this.data.end) || void 0 === e2 ? void 0 : e2.length) > 0 && this.range;
    }
  };
  vr.proxyMethod("inputController.setInputSummary"), vr.proxyMethod("inputController.requestRender"), vr.proxyMethod("inputController.requestReparse"), vr.proxyMethod("responder?.selectionIsExpanded"), vr.proxyMethod("responder?.insertPlaceholder"), vr.proxyMethod("responder?.selectPlaceholder"), vr.proxyMethod("responder?.forgetPlaceholder");
  var Ar = class extends lr {
    constructor() {
      super(...arguments), this.render = this.render.bind(this);
    }
    elementDidMutate() {
      return this.scheduledRender ? this.composing ? null === (t3 = this.delegate) || void 0 === t3 || null === (e2 = t3.inputControllerDidAllowUnhandledInput) || void 0 === e2 ? void 0 : e2.call(t3) : void 0 : this.reparse();
      var t3, e2;
    }
    scheduleRender() {
      return this.scheduledRender ? this.scheduledRender : this.scheduledRender = requestAnimationFrame(this.render);
    }
    render() {
      var t3, e2;
      (cancelAnimationFrame(this.scheduledRender), this.scheduledRender = null, this.composing) || (null === (e2 = this.delegate) || void 0 === e2 || e2.render());
      null === (t3 = this.afterRender) || void 0 === t3 || t3.call(this), this.afterRender = null;
    }
    reparse() {
      var t3;
      return null === (t3 = this.delegate) || void 0 === t3 ? void 0 : t3.reparse();
    }
    insertString() {
      var t3;
      let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", i2 = arguments.length > 1 ? arguments[1] : void 0;
      return null === (t3 = this.delegate) || void 0 === t3 || t3.inputControllerWillPerformTyping(), this.withTargetDOMRange(function() {
        var t4;
        return null === (t4 = this.responder) || void 0 === t4 ? void 0 : t4.insertString(e2, i2);
      });
    }
    toggleAttributeIfSupported(t3) {
      var e2;
      if (gt().includes(t3)) return null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformFormatting(t3), this.withTargetDOMRange(function() {
        var e3;
        return null === (e3 = this.responder) || void 0 === e3 ? void 0 : e3.toggleCurrentAttribute(t3);
      });
    }
    activateAttributeIfSupported(t3, e2) {
      var i2;
      if (gt().includes(t3)) return null === (i2 = this.delegate) || void 0 === i2 || i2.inputControllerWillPerformFormatting(t3), this.withTargetDOMRange(function() {
        var i3;
        return null === (i3 = this.responder) || void 0 === i3 ? void 0 : i3.setCurrentAttribute(t3, e2);
      });
    }
    deleteInDirection(t3) {
      let { recordUndoEntry: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { recordUndoEntry: true };
      var i2;
      e2 && (null === (i2 = this.delegate) || void 0 === i2 || i2.inputControllerWillPerformTyping());
      const n2 = () => {
        var e3;
        return null === (e3 = this.responder) || void 0 === e3 ? void 0 : e3.deleteInDirection(t3);
      }, r2 = this.getTargetDOMRange({ minLength: this.composing ? 1 : 2 });
      return r2 ? this.withTargetDOMRange(r2, n2) : n2();
    }
    withTargetDOMRange(t3, e2) {
      var i2;
      return "function" == typeof t3 && (e2 = t3, t3 = this.getTargetDOMRange()), t3 ? null === (i2 = this.responder) || void 0 === i2 ? void 0 : i2.withTargetDOMRange(t3, e2.bind(this)) : (Ft.reset(), e2.call(this));
    }
    getTargetDOMRange() {
      var t3, e2;
      let { minLength: i2 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { minLength: 0 };
      const n2 = null === (t3 = (e2 = this.event).getTargetRanges) || void 0 === t3 ? void 0 : t3.call(e2);
      if (n2 && n2.length) {
        const t4 = yr(n2[0]);
        if (0 === i2 || t4.toString().length >= i2) return t4;
      }
    }
    withEvent(t3, e2) {
      let i2;
      this.event = t3;
      try {
        i2 = e2.call(this);
      } finally {
        this.event = null;
      }
      return i2;
    }
  };
  Di(Ar, "events", { keydown(t3) {
    if (St(t3)) {
      var e2;
      const i2 = Rr(t3);
      null !== (e2 = this.delegate) && void 0 !== e2 && e2.inputControllerDidReceiveKeyboardCommand(i2) && t3.preventDefault();
    } else {
      let e3 = t3.key;
      t3.altKey && (e3 += "+Alt"), t3.shiftKey && (e3 += "+Shift");
      const i2 = this.constructor.keys[e3];
      if (i2) return this.withEvent(t3, i2);
    }
  }, paste(t3) {
    var e2;
    let i2;
    const n2 = null === (e2 = t3.clipboardData) || void 0 === e2 ? void 0 : e2.getData("URL");
    return Er(t3) ? (t3.preventDefault(), this.attachFiles(t3.clipboardData.files)) : Sr(t3) ? (t3.preventDefault(), i2 = { type: "text/plain", string: t3.clipboardData.getData("text/plain") }, null === (r2 = this.delegate) || void 0 === r2 || r2.inputControllerWillPaste(i2), null === (o2 = this.responder) || void 0 === o2 || o2.insertString(i2.string), this.render(), null === (s2 = this.delegate) || void 0 === s2 ? void 0 : s2.inputControllerDidPaste(i2)) : n2 ? (t3.preventDefault(), i2 = { type: "text/html", html: this.createLinkHTML(n2) }, null === (a2 = this.delegate) || void 0 === a2 || a2.inputControllerWillPaste(i2), null === (l2 = this.responder) || void 0 === l2 || l2.insertHTML(i2.html), this.render(), null === (c2 = this.delegate) || void 0 === c2 ? void 0 : c2.inputControllerDidPaste(i2)) : void 0;
    var r2, o2, s2, a2, l2, c2;
  }, beforeinput(t3) {
    const e2 = this.constructor.inputTypes[t3.inputType], i2 = (n2 = t3, !(!/iPhone|iPad/.test(navigator.userAgent) || n2.inputType && "insertParagraph" !== n2.inputType));
    var n2;
    e2 && (this.withEvent(t3, e2), i2 || this.scheduleRender()), i2 && this.render();
  }, input(t3) {
    Ft.reset();
  }, dragstart(t3) {
    var e2, i2;
    null !== (e2 = this.responder) && void 0 !== e2 && e2.selectionContainsAttachments() && (t3.dataTransfer.setData("application/x-trix-dragging", true), this.dragging = { range: null === (i2 = this.responder) || void 0 === i2 ? void 0 : i2.getSelectedRange(), point: kr(t3) });
  }, dragenter(t3) {
    xr(t3) && t3.preventDefault();
  }, dragover(t3) {
    if (this.dragging) {
      t3.preventDefault();
      const i2 = kr(t3);
      var e2;
      if (!Tt(i2, this.dragging.point)) return this.dragging.point = i2, null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.setLocationRangeFromPointRange(i2);
    } else xr(t3) && t3.preventDefault();
  }, drop(t3) {
    var e2, i2;
    if (this.dragging) return t3.preventDefault(), null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillMoveText(), null === (i2 = this.responder) || void 0 === i2 || i2.moveTextFromRange(this.dragging.range), this.dragging = null, this.scheduleRender();
    if (xr(t3)) {
      var n2;
      t3.preventDefault();
      const e3 = kr(t3);
      return null === (n2 = this.responder) || void 0 === n2 || n2.setLocationRangeFromPointRange(e3), this.attachFiles(t3.dataTransfer.files);
    }
  }, dragend() {
    var t3;
    this.dragging && (null === (t3 = this.responder) || void 0 === t3 || t3.setSelectedRange(this.dragging.range), this.dragging = null);
  }, compositionend(t3) {
    this.composing && (this.composing = false, a.recentAndroid || this.scheduleRender());
  } }), Di(Ar, "keys", { ArrowLeft() {
    var t3, e2;
    if (null !== (t3 = this.responder) && void 0 !== t3 && t3.shouldManageMovingCursorInDirection("backward")) return this.event.preventDefault(), null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.moveCursorInDirection("backward");
  }, ArrowRight() {
    var t3, e2;
    if (null !== (t3 = this.responder) && void 0 !== t3 && t3.shouldManageMovingCursorInDirection("forward")) return this.event.preventDefault(), null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.moveCursorInDirection("forward");
  }, Backspace() {
    var t3, e2, i2;
    if (null !== (t3 = this.responder) && void 0 !== t3 && t3.shouldManageDeletingInDirection("backward")) return this.event.preventDefault(), null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), null === (i2 = this.responder) || void 0 === i2 || i2.deleteInDirection("backward"), this.render();
  }, Tab() {
    var t3, e2;
    if (null !== (t3 = this.responder) && void 0 !== t3 && t3.canIncreaseNestingLevel()) return this.event.preventDefault(), null === (e2 = this.responder) || void 0 === e2 || e2.increaseNestingLevel(), this.render();
  }, "Tab+Shift"() {
    var t3, e2;
    if (null !== (t3 = this.responder) && void 0 !== t3 && t3.canDecreaseNestingLevel()) return this.event.preventDefault(), null === (e2 = this.responder) || void 0 === e2 || e2.decreaseNestingLevel(), this.render();
  } }), Di(Ar, "inputTypes", { deleteByComposition() {
    return this.deleteInDirection("backward", { recordUndoEntry: false });
  }, deleteByCut() {
    return this.deleteInDirection("backward");
  }, deleteByDrag() {
    return this.event.preventDefault(), this.withTargetDOMRange(function() {
      var t3;
      this.deleteByDragRange = null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.getSelectedRange();
    });
  }, deleteCompositionText() {
    return this.deleteInDirection("backward", { recordUndoEntry: false });
  }, deleteContent() {
    return this.deleteInDirection("backward");
  }, deleteContentBackward() {
    return this.deleteInDirection("backward");
  }, deleteContentForward() {
    return this.deleteInDirection("forward");
  }, deleteEntireSoftLine() {
    return this.deleteInDirection("forward");
  }, deleteHardLineBackward() {
    return this.deleteInDirection("backward");
  }, deleteHardLineForward() {
    return this.deleteInDirection("forward");
  }, deleteSoftLineBackward() {
    return this.deleteInDirection("backward");
  }, deleteSoftLineForward() {
    return this.deleteInDirection("forward");
  }, deleteWordBackward() {
    return this.deleteInDirection("backward");
  }, deleteWordForward() {
    return this.deleteInDirection("forward");
  }, formatBackColor() {
    return this.activateAttributeIfSupported("backgroundColor", this.event.data);
  }, formatBold() {
    return this.toggleAttributeIfSupported("bold");
  }, formatFontColor() {
    return this.activateAttributeIfSupported("color", this.event.data);
  }, formatFontName() {
    return this.activateAttributeIfSupported("font", this.event.data);
  }, formatIndent() {
    var t3;
    if (null !== (t3 = this.responder) && void 0 !== t3 && t3.canIncreaseNestingLevel()) return this.withTargetDOMRange(function() {
      var t4;
      return null === (t4 = this.responder) || void 0 === t4 ? void 0 : t4.increaseNestingLevel();
    });
  }, formatItalic() {
    return this.toggleAttributeIfSupported("italic");
  }, formatJustifyCenter() {
    return this.toggleAttributeIfSupported("justifyCenter");
  }, formatJustifyFull() {
    return this.toggleAttributeIfSupported("justifyFull");
  }, formatJustifyLeft() {
    return this.toggleAttributeIfSupported("justifyLeft");
  }, formatJustifyRight() {
    return this.toggleAttributeIfSupported("justifyRight");
  }, formatOutdent() {
    var t3;
    if (null !== (t3 = this.responder) && void 0 !== t3 && t3.canDecreaseNestingLevel()) return this.withTargetDOMRange(function() {
      var t4;
      return null === (t4 = this.responder) || void 0 === t4 ? void 0 : t4.decreaseNestingLevel();
    });
  }, formatRemove() {
    this.withTargetDOMRange(function() {
      for (const i2 in null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.getCurrentAttributes()) {
        var t3, e2;
        null === (e2 = this.responder) || void 0 === e2 || e2.removeCurrentAttribute(i2);
      }
    });
  }, formatSetBlockTextDirection() {
    return this.activateAttributeIfSupported("blockDir", this.event.data);
  }, formatSetInlineTextDirection() {
    return this.activateAttributeIfSupported("textDir", this.event.data);
  }, formatStrikeThrough() {
    return this.toggleAttributeIfSupported("strike");
  }, formatSubscript() {
    return this.toggleAttributeIfSupported("sub");
  }, formatSuperscript() {
    return this.toggleAttributeIfSupported("sup");
  }, formatUnderline() {
    return this.toggleAttributeIfSupported("underline");
  }, historyRedo() {
    var t3;
    return null === (t3 = this.delegate) || void 0 === t3 ? void 0 : t3.inputControllerWillPerformRedo();
  }, historyUndo() {
    var t3;
    return null === (t3 = this.delegate) || void 0 === t3 ? void 0 : t3.inputControllerWillPerformUndo();
  }, insertCompositionText() {
    return this.composing = true, this.insertString(this.event.data);
  }, insertFromComposition() {
    return this.composing = false, this.insertString(this.event.data);
  }, insertFromDrop() {
    const t3 = this.deleteByDragRange;
    var e2;
    if (t3) return this.deleteByDragRange = null, null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillMoveText(), this.withTargetDOMRange(function() {
      var e3;
      return null === (e3 = this.responder) || void 0 === e3 ? void 0 : e3.moveTextFromRange(t3);
    });
  }, insertFromPaste() {
    const { dataTransfer: t3 } = this.event, e2 = { dataTransfer: t3 }, i2 = t3.getData("URL"), n2 = t3.getData("text/html");
    if (i2) {
      var r2;
      let n3;
      this.event.preventDefault(), e2.type = "text/html";
      const o3 = t3.getData("public.url-name");
      n3 = o3 ? Vt(o3).trim() : i2, e2.html = this.createLinkHTML(i2, n3), null === (r2 = this.delegate) || void 0 === r2 || r2.inputControllerWillPaste(e2), this.withTargetDOMRange(function() {
        var t4;
        return null === (t4 = this.responder) || void 0 === t4 ? void 0 : t4.insertHTML(e2.html);
      }), this.afterRender = () => {
        var t4;
        return null === (t4 = this.delegate) || void 0 === t4 ? void 0 : t4.inputControllerDidPaste(e2);
      };
    } else if (Et(t3)) {
      var o2;
      e2.type = "text/plain", e2.string = t3.getData("text/plain"), null === (o2 = this.delegate) || void 0 === o2 || o2.inputControllerWillPaste(e2), this.withTargetDOMRange(function() {
        var t4;
        return null === (t4 = this.responder) || void 0 === t4 ? void 0 : t4.insertString(e2.string);
      }), this.afterRender = () => {
        var t4;
        return null === (t4 = this.delegate) || void 0 === t4 ? void 0 : t4.inputControllerDidPaste(e2);
      };
    } else if (Cr(this.event)) {
      var s2;
      e2.type = "File", e2.file = t3.files[0], null === (s2 = this.delegate) || void 0 === s2 || s2.inputControllerWillPaste(e2), this.withTargetDOMRange(function() {
        var t4;
        return null === (t4 = this.responder) || void 0 === t4 ? void 0 : t4.insertFile(e2.file);
      }), this.afterRender = () => {
        var t4;
        return null === (t4 = this.delegate) || void 0 === t4 ? void 0 : t4.inputControllerDidPaste(e2);
      };
    } else if (n2) {
      var a2;
      this.event.preventDefault(), e2.type = "text/html", e2.html = n2, null === (a2 = this.delegate) || void 0 === a2 || a2.inputControllerWillPaste(e2), this.withTargetDOMRange(function() {
        var t4;
        return null === (t4 = this.responder) || void 0 === t4 ? void 0 : t4.insertHTML(e2.html);
      }), this.afterRender = () => {
        var t4;
        return null === (t4 = this.delegate) || void 0 === t4 ? void 0 : t4.inputControllerDidPaste(e2);
      };
    }
  }, insertFromYank() {
    return this.insertString(this.event.data);
  }, insertLineBreak() {
    return this.insertString("\n");
  }, insertLink() {
    return this.activateAttributeIfSupported("href", this.event.data);
  }, insertOrderedList() {
    return this.toggleAttributeIfSupported("number");
  }, insertParagraph() {
    var t3;
    return null === (t3 = this.delegate) || void 0 === t3 || t3.inputControllerWillPerformTyping(), this.withTargetDOMRange(function() {
      var t4;
      return null === (t4 = this.responder) || void 0 === t4 ? void 0 : t4.insertLineBreak();
    });
  }, insertReplacementText() {
    const t3 = this.event.dataTransfer.getData("text/plain"), e2 = this.event.getTargetRanges()[0];
    this.withTargetDOMRange(e2, () => {
      this.insertString(t3, { updatePosition: false });
    });
  }, insertText() {
    var t3;
    return this.insertString(this.event.data || (null === (t3 = this.event.dataTransfer) || void 0 === t3 ? void 0 : t3.getData("text/plain")));
  }, insertTranspose() {
    return this.insertString(this.event.data);
  }, insertUnorderedList() {
    return this.toggleAttributeIfSupported("bullet");
  } });
  var yr = function(t3) {
    const e2 = document.createRange();
    return e2.setStart(t3.startContainer, t3.startOffset), e2.setEnd(t3.endContainer, t3.endOffset), e2;
  };
  var xr = (t3) => {
    var e2;
    return Array.from((null === (e2 = t3.dataTransfer) || void 0 === e2 ? void 0 : e2.types) || []).includes("Files");
  };
  var Cr = (t3) => {
    var e2;
    return (null === (e2 = t3.dataTransfer.files) || void 0 === e2 ? void 0 : e2[0]) && !Er(t3) && !((t4) => {
      let { dataTransfer: e3 } = t4;
      return e3.types.includes("Files") && e3.types.includes("text/html") && e3.getData("text/html").includes("urn:schemas-microsoft-com:office:office");
    })(t3);
  };
  var Er = function(t3) {
    const e2 = t3.clipboardData;
    if (e2) {
      return Array.from(e2.types).filter((t4) => t4.match(/file/i)).length === e2.types.length && e2.files.length >= 1;
    }
  };
  var Sr = function(t3) {
    const e2 = t3.clipboardData;
    if (e2) return e2.types.includes("text/plain") && 1 === e2.types.length;
  };
  var Rr = function(t3) {
    const e2 = [];
    return t3.altKey && e2.push("alt"), t3.shiftKey && e2.push("shift"), e2.push(t3.key), e2;
  };
  var kr = (t3) => ({ x: t3.clientX, y: t3.clientY });
  var Tr = "[data-trix-attribute]";
  var wr = "[data-trix-action]";
  var Lr = "".concat(Tr, ", ").concat(wr);
  var Dr = "[data-trix-dialog]";
  var Nr = "".concat(Dr, "[data-trix-active]");
  var Ir = "".concat(Dr, " [data-trix-method]");
  var Or = "".concat(Dr, " [data-trix-input]");
  var Fr = (t3, e2) => (e2 || (e2 = Mr(t3)), t3.querySelector("[data-trix-input][name='".concat(e2, "']")));
  var Pr = (t3) => t3.getAttribute("data-trix-action");
  var Mr = (t3) => t3.getAttribute("data-trix-attribute") || t3.getAttribute("data-trix-dialog-attribute");
  var Br = class extends q {
    constructor(t3) {
      super(t3), this.didClickActionButton = this.didClickActionButton.bind(this), this.didClickAttributeButton = this.didClickAttributeButton.bind(this), this.didClickDialogButton = this.didClickDialogButton.bind(this), this.didKeyDownDialogInput = this.didKeyDownDialogInput.bind(this), this.element = t3, this.attributes = {}, this.actions = {}, this.resetDialogInputs(), b("mousedown", { onElement: this.element, matchingSelector: wr, withCallback: this.didClickActionButton }), b("mousedown", { onElement: this.element, matchingSelector: Tr, withCallback: this.didClickAttributeButton }), b("click", { onElement: this.element, matchingSelector: Lr, preventDefault: true }), b("click", { onElement: this.element, matchingSelector: Ir, withCallback: this.didClickDialogButton }), b("keydown", { onElement: this.element, matchingSelector: Or, withCallback: this.didKeyDownDialogInput });
    }
    didClickActionButton(t3, e2) {
      var i2;
      null === (i2 = this.delegate) || void 0 === i2 || i2.toolbarDidClickButton(), t3.preventDefault();
      const n2 = Pr(e2);
      return this.getDialog(n2) ? this.toggleDialog(n2) : null === (r2 = this.delegate) || void 0 === r2 ? void 0 : r2.toolbarDidInvokeAction(n2, e2);
      var r2;
    }
    didClickAttributeButton(t3, e2) {
      var i2;
      null === (i2 = this.delegate) || void 0 === i2 || i2.toolbarDidClickButton(), t3.preventDefault();
      const n2 = Mr(e2);
      var r2;
      this.getDialog(n2) ? this.toggleDialog(n2) : null === (r2 = this.delegate) || void 0 === r2 || r2.toolbarDidToggleAttribute(n2);
      return this.refreshAttributeButtons();
    }
    didClickDialogButton(t3, e2) {
      const i2 = y(e2, { matchingSelector: Dr });
      return this[e2.getAttribute("data-trix-method")].call(this, i2);
    }
    didKeyDownDialogInput(t3, e2) {
      if (13 === t3.keyCode) {
        t3.preventDefault();
        const i2 = e2.getAttribute("name"), n2 = this.getDialog(i2);
        this.setAttribute(n2);
      }
      if (27 === t3.keyCode) return t3.preventDefault(), this.hideDialog();
    }
    updateActions(t3) {
      return this.actions = t3, this.refreshActionButtons();
    }
    refreshActionButtons() {
      return this.eachActionButton((t3, e2) => {
        t3.disabled = false === this.actions[e2];
      });
    }
    eachActionButton(t3) {
      return Array.from(this.element.querySelectorAll(wr)).map((e2) => t3(e2, Pr(e2)));
    }
    updateAttributes(t3) {
      return this.attributes = t3, this.refreshAttributeButtons();
    }
    refreshAttributeButtons() {
      return this.eachAttributeButton((t3, e2) => (t3.disabled = false === this.attributes[e2], this.attributes[e2] || this.dialogIsVisible(e2) ? (t3.setAttribute("data-trix-active", ""), t3.classList.add("trix-active")) : (t3.removeAttribute("data-trix-active"), t3.classList.remove("trix-active"))));
    }
    eachAttributeButton(t3) {
      return Array.from(this.element.querySelectorAll(Tr)).map((e2) => t3(e2, Mr(e2)));
    }
    applyKeyboardCommand(t3) {
      const e2 = JSON.stringify(t3.sort());
      for (const t4 of Array.from(this.element.querySelectorAll("[data-trix-key]"))) {
        const i2 = t4.getAttribute("data-trix-key").split("+");
        if (JSON.stringify(i2.sort()) === e2) return v("mousedown", { onElement: t4 }), true;
      }
      return false;
    }
    dialogIsVisible(t3) {
      const e2 = this.getDialog(t3);
      if (e2) return e2.hasAttribute("data-trix-active");
    }
    toggleDialog(t3) {
      return this.dialogIsVisible(t3) ? this.hideDialog() : this.showDialog(t3);
    }
    showDialog(t3) {
      var e2, i2;
      this.hideDialog(), null === (e2 = this.delegate) || void 0 === e2 || e2.toolbarWillShowDialog();
      const n2 = this.getDialog(t3);
      n2.setAttribute("data-trix-active", ""), n2.classList.add("trix-active"), Array.from(n2.querySelectorAll("input[disabled]")).forEach((t4) => {
        t4.removeAttribute("disabled");
      });
      const r2 = Mr(n2);
      if (r2) {
        const e3 = Fr(n2, t3);
        e3 && (e3.value = this.attributes[r2] || "", e3.select());
      }
      return null === (i2 = this.delegate) || void 0 === i2 ? void 0 : i2.toolbarDidShowDialog(t3);
    }
    setAttribute(t3) {
      var e2;
      const i2 = Mr(t3), n2 = Fr(t3, i2);
      return !n2.willValidate || (n2.setCustomValidity(""), n2.checkValidity() && this.isSafeAttribute(n2)) ? (null === (e2 = this.delegate) || void 0 === e2 || e2.toolbarDidUpdateAttribute(i2, n2.value), this.hideDialog()) : (n2.setCustomValidity("Invalid value"), n2.setAttribute("data-trix-validate", ""), n2.classList.add("trix-validate"), n2.focus());
    }
    isSafeAttribute(t3) {
      return !t3.hasAttribute("data-trix-validate-href") || li.isValidAttribute("a", "href", t3.value);
    }
    removeAttribute(t3) {
      var e2;
      const i2 = Mr(t3);
      return null === (e2 = this.delegate) || void 0 === e2 || e2.toolbarDidRemoveAttribute(i2), this.hideDialog();
    }
    hideDialog() {
      const t3 = this.element.querySelector(Nr);
      var e2;
      if (t3) return t3.removeAttribute("data-trix-active"), t3.classList.remove("trix-active"), this.resetDialogInputs(), null === (e2 = this.delegate) || void 0 === e2 ? void 0 : e2.toolbarDidHideDialog(((t4) => t4.getAttribute("data-trix-dialog"))(t3));
    }
    resetDialogInputs() {
      Array.from(this.element.querySelectorAll(Or)).forEach((t3) => {
        t3.setAttribute("disabled", "disabled"), t3.removeAttribute("data-trix-validate"), t3.classList.remove("trix-validate");
      });
    }
    getDialog(t3) {
      return this.element.querySelector("[data-trix-dialog=".concat(t3, "]"));
    }
  };
  var _r = class extends $n {
    constructor(t3) {
      let { editorElement: e2, document: i2, html: n2 } = t3;
      super(...arguments), this.editorElement = e2, this.selectionManager = new Vn(this.editorElement), this.selectionManager.delegate = this, this.composition = new wn(), this.composition.delegate = this, this.attachmentManager = new kn(this.composition.getAttachments()), this.attachmentManager.delegate = this, this.inputController = 2 === _.getLevel() ? new Ar(this.editorElement) : new gr(this.editorElement), this.inputController.delegate = this, this.inputController.responder = this.composition, this.compositionController = new Xn(this.editorElement, this.composition), this.compositionController.delegate = this, this.toolbarController = new Br(this.editorElement.toolbarElement), this.toolbarController.delegate = this, this.editor = new Pn(this.composition, this.selectionManager, this.editorElement), i2 ? this.editor.loadDocument(i2) : this.editor.loadHTML(n2);
    }
    registerSelectionManager() {
      return Ft.registerSelectionManager(this.selectionManager);
    }
    unregisterSelectionManager() {
      return Ft.unregisterSelectionManager(this.selectionManager);
    }
    render() {
      return this.compositionController.render();
    }
    reparse() {
      return this.composition.replaceHTML(this.editorElement.innerHTML);
    }
    compositionDidChangeDocument(t3) {
      if (this.notifyEditorElement("document-change"), !this.handlingInput) return this.render();
    }
    compositionDidChangeCurrentAttributes(t3) {
      return this.currentAttributes = t3, this.toolbarController.updateAttributes(this.currentAttributes), this.updateCurrentActions(), this.notifyEditorElement("attributes-change", { attributes: this.currentAttributes });
    }
    compositionDidPerformInsertionAtRange(t3) {
      this.pasting && (this.pastedRange = t3);
    }
    compositionShouldAcceptFile(t3) {
      return this.notifyEditorElement("file-accept", { file: t3 });
    }
    compositionDidAddAttachment(t3) {
      const e2 = this.attachmentManager.manageAttachment(t3);
      return this.notifyEditorElement("attachment-add", { attachment: e2 });
    }
    compositionDidEditAttachment(t3) {
      this.compositionController.rerenderViewForObject(t3);
      const e2 = this.attachmentManager.manageAttachment(t3);
      return this.notifyEditorElement("attachment-edit", { attachment: e2 }), this.notifyEditorElement("change");
    }
    compositionDidChangeAttachmentPreviewURL(t3) {
      return this.compositionController.invalidateViewForObject(t3), this.notifyEditorElement("change");
    }
    compositionDidRemoveAttachment(t3) {
      const e2 = this.attachmentManager.unmanageAttachment(t3);
      return this.notifyEditorElement("attachment-remove", { attachment: e2 });
    }
    compositionDidStartEditingAttachment(t3, e2) {
      return this.attachmentLocationRange = this.composition.document.getLocationRangeOfAttachment(t3), this.compositionController.installAttachmentEditorForAttachment(t3, e2), this.selectionManager.setLocationRange(this.attachmentLocationRange);
    }
    compositionDidStopEditingAttachment(t3) {
      this.compositionController.uninstallAttachmentEditor(), this.attachmentLocationRange = null;
    }
    compositionDidRequestChangingSelectionToLocationRange(t3) {
      if (!this.loadingSnapshot || this.isFocused()) return this.requestedLocationRange = t3, this.compositionRevisionWhenLocationRangeRequested = this.composition.revision, this.handlingInput ? void 0 : this.render();
    }
    compositionWillLoadSnapshot() {
      this.loadingSnapshot = true;
    }
    compositionDidLoadSnapshot() {
      this.compositionController.refreshViewCache(), this.render(), this.loadingSnapshot = false;
    }
    getSelectionManager() {
      return this.selectionManager;
    }
    attachmentManagerDidRequestRemovalOfAttachment(t3) {
      return this.removeAttachment(t3);
    }
    compositionControllerWillSyncDocumentView() {
      return this.inputController.editorWillSyncDocumentView(), this.selectionManager.lock(), this.selectionManager.clearSelection();
    }
    compositionControllerDidSyncDocumentView() {
      return this.inputController.editorDidSyncDocumentView(), this.selectionManager.unlock(), this.updateCurrentActions(), this.notifyEditorElement("sync");
    }
    compositionControllerDidRender() {
      this.requestedLocationRange && (this.compositionRevisionWhenLocationRangeRequested === this.composition.revision && this.selectionManager.setLocationRange(this.requestedLocationRange), this.requestedLocationRange = null, this.compositionRevisionWhenLocationRangeRequested = null), this.renderedCompositionRevision !== this.composition.revision && (this.runEditorFilters(), this.composition.updateCurrentAttributes(), this.notifyEditorElement("render")), this.renderedCompositionRevision = this.composition.revision;
    }
    compositionControllerDidFocus() {
      return this.isFocusedInvisibly() && this.setLocationRange({ index: 0, offset: 0 }), this.toolbarController.hideDialog(), this.notifyEditorElement("focus");
    }
    compositionControllerDidBlur() {
      return this.notifyEditorElement("blur");
    }
    compositionControllerDidSelectAttachment(t3, e2) {
      return this.toolbarController.hideDialog(), this.composition.editAttachment(t3, e2);
    }
    compositionControllerDidRequestDeselectingAttachment(t3) {
      const e2 = this.attachmentLocationRange || this.composition.document.getLocationRangeOfAttachment(t3);
      return this.selectionManager.setLocationRange(e2[1]);
    }
    compositionControllerWillUpdateAttachment(t3) {
      return this.editor.recordUndoEntry("Edit Attachment", { context: t3.id, consolidatable: true });
    }
    compositionControllerDidRequestRemovalOfAttachment(t3) {
      return this.removeAttachment(t3);
    }
    inputControllerWillHandleInput() {
      this.handlingInput = true, this.requestedRender = false;
    }
    inputControllerDidRequestRender() {
      this.requestedRender = true;
    }
    inputControllerDidHandleInput() {
      if (this.handlingInput = false, this.requestedRender) return this.requestedRender = false, this.render();
    }
    inputControllerDidAllowUnhandledInput() {
      return this.notifyEditorElement("change");
    }
    inputControllerDidRequestReparse() {
      return this.reparse();
    }
    inputControllerWillPerformTyping() {
      return this.recordTypingUndoEntry();
    }
    inputControllerWillPerformFormatting(t3) {
      return this.recordFormattingUndoEntry(t3);
    }
    inputControllerWillCutText() {
      return this.editor.recordUndoEntry("Cut");
    }
    inputControllerWillPaste(t3) {
      return this.editor.recordUndoEntry("Paste"), this.pasting = true, this.notifyEditorElement("before-paste", { paste: t3 });
    }
    inputControllerDidPaste(t3) {
      return t3.range = this.pastedRange, this.pastedRange = null, this.pasting = null, this.notifyEditorElement("paste", { paste: t3 });
    }
    inputControllerWillMoveText() {
      return this.editor.recordUndoEntry("Move");
    }
    inputControllerWillAttachFiles() {
      return this.editor.recordUndoEntry("Drop Files");
    }
    inputControllerWillPerformUndo() {
      return this.editor.undo();
    }
    inputControllerWillPerformRedo() {
      return this.editor.redo();
    }
    inputControllerDidReceiveKeyboardCommand(t3) {
      return this.toolbarController.applyKeyboardCommand(t3);
    }
    inputControllerDidStartDrag() {
      this.locationRangeBeforeDrag = this.selectionManager.getLocationRange();
    }
    inputControllerDidReceiveDragOverPoint(t3) {
      return this.selectionManager.setLocationRangeFromPointRange(t3);
    }
    inputControllerDidCancelDrag() {
      this.selectionManager.setLocationRange(this.locationRangeBeforeDrag), this.locationRangeBeforeDrag = null;
    }
    locationRangeDidChange(t3) {
      return this.composition.updateCurrentAttributes(), this.updateCurrentActions(), this.attachmentLocationRange && !Dt(this.attachmentLocationRange, t3) && this.composition.stopEditingAttachment(), this.notifyEditorElement("selection-change");
    }
    toolbarDidClickButton() {
      if (!this.getLocationRange()) return this.setLocationRange({ index: 0, offset: 0 });
    }
    toolbarDidInvokeAction(t3, e2) {
      return this.invokeAction(t3, e2);
    }
    toolbarDidToggleAttribute(t3) {
      if (this.recordFormattingUndoEntry(t3), this.composition.toggleCurrentAttribute(t3), this.render(), !this.selectionFrozen) return this.editorElement.focus();
    }
    toolbarDidUpdateAttribute(t3, e2) {
      if (this.recordFormattingUndoEntry(t3), this.composition.setCurrentAttribute(t3, e2), this.render(), !this.selectionFrozen) return this.editorElement.focus();
    }
    toolbarDidRemoveAttribute(t3) {
      if (this.recordFormattingUndoEntry(t3), this.composition.removeCurrentAttribute(t3), this.render(), !this.selectionFrozen) return this.editorElement.focus();
    }
    toolbarWillShowDialog(t3) {
      return this.composition.expandSelectionForEditing(), this.freezeSelection();
    }
    toolbarDidShowDialog(t3) {
      return this.notifyEditorElement("toolbar-dialog-show", { dialogName: t3 });
    }
    toolbarDidHideDialog(t3) {
      return this.thawSelection(), this.editorElement.focus(), this.notifyEditorElement("toolbar-dialog-hide", { dialogName: t3 });
    }
    freezeSelection() {
      if (!this.selectionFrozen) return this.selectionManager.lock(), this.composition.freezeSelection(), this.selectionFrozen = true, this.render();
    }
    thawSelection() {
      if (this.selectionFrozen) return this.composition.thawSelection(), this.selectionManager.unlock(), this.selectionFrozen = false, this.render();
    }
    canInvokeAction(t3) {
      return !!this.actionIsExternal(t3) || !(null === (e2 = this.actions[t3]) || void 0 === e2 || null === (e2 = e2.test) || void 0 === e2 || !e2.call(this));
      var e2;
    }
    invokeAction(t3, e2) {
      return this.actionIsExternal(t3) ? this.notifyEditorElement("action-invoke", { actionName: t3, invokingElement: e2 }) : null === (i2 = this.actions[t3]) || void 0 === i2 || null === (i2 = i2.perform) || void 0 === i2 ? void 0 : i2.call(this);
      var i2;
    }
    actionIsExternal(t3) {
      return /^x-./.test(t3);
    }
    getCurrentActions() {
      const t3 = {};
      for (const e2 in this.actions) t3[e2] = this.canInvokeAction(e2);
      return t3;
    }
    updateCurrentActions() {
      const t3 = this.getCurrentActions();
      if (!Tt(t3, this.currentActions)) return this.currentActions = t3, this.toolbarController.updateActions(this.currentActions), this.notifyEditorElement("actions-change", { actions: this.currentActions });
    }
    runEditorFilters() {
      let t3 = this.composition.getSnapshot();
      if (Array.from(this.editor.filters).forEach((e3) => {
        const { document: i3, selectedRange: n2 } = t3;
        t3 = e3.call(this.editor, t3) || {}, t3.document || (t3.document = i3), t3.selectedRange || (t3.selectedRange = n2);
      }), e2 = t3, i2 = this.composition.getSnapshot(), !Dt(e2.selectedRange, i2.selectedRange) || !e2.document.isEqualTo(i2.document)) return this.composition.loadSnapshot(t3);
      var e2, i2;
    }
    updateInputElement() {
      const t3 = function(t4, e2) {
        const i2 = En[e2];
        if (i2) return i2(t4);
        throw new Error("unknown content type: ".concat(e2));
      }(this.compositionController.getSerializableElement(), "text/html");
      return this.editorElement.setFormValue(t3);
    }
    notifyEditorElement(t3, e2) {
      switch (t3) {
        case "document-change":
          this.documentChangedSinceLastRender = true;
          break;
        case "render":
          this.documentChangedSinceLastRender && (this.documentChangedSinceLastRender = false, this.notifyEditorElement("change"));
          break;
        case "change":
        case "attachment-add":
        case "attachment-edit":
        case "attachment-remove":
          this.updateInputElement();
      }
      return this.editorElement.notify(t3, e2);
    }
    removeAttachment(t3) {
      return this.editor.recordUndoEntry("Delete Attachment"), this.composition.removeAttachment(t3), this.render();
    }
    recordFormattingUndoEntry(t3) {
      const e2 = mt(t3), i2 = this.selectionManager.getLocationRange();
      if (e2 || !Lt(i2)) return this.editor.recordUndoEntry("Formatting", { context: this.getUndoContext(), consolidatable: true });
    }
    recordTypingUndoEntry() {
      return this.editor.recordUndoEntry("Typing", { context: this.getUndoContext(this.currentAttributes), consolidatable: true });
    }
    getUndoContext() {
      for (var t3 = arguments.length, e2 = new Array(t3), i2 = 0; i2 < t3; i2++) e2[i2] = arguments[i2];
      return [this.getLocationContext(), this.getTimeContext(), ...Array.from(e2)];
    }
    getLocationContext() {
      const t3 = this.selectionManager.getLocationRange();
      return Lt(t3) ? t3[0].index : t3;
    }
    getTimeContext() {
      return V.interval > 0 ? Math.floor((/* @__PURE__ */ new Date()).getTime() / V.interval) : 0;
    }
    isFocused() {
      var t3;
      return this.editorElement === (null === (t3 = this.editorElement.ownerDocument) || void 0 === t3 ? void 0 : t3.activeElement);
    }
    isFocusedInvisibly() {
      return this.isFocused() && !this.getLocationRange();
    }
    get actions() {
      return this.constructor.actions;
    }
  };
  Di(_r, "actions", { undo: { test() {
    return this.editor.canUndo();
  }, perform() {
    return this.editor.undo();
  } }, redo: { test() {
    return this.editor.canRedo();
  }, perform() {
    return this.editor.redo();
  } }, link: { test() {
    return this.editor.canActivateAttribute("href");
  } }, increaseNestingLevel: { test() {
    return this.editor.canIncreaseNestingLevel();
  }, perform() {
    return this.editor.increaseNestingLevel() && this.render();
  } }, decreaseNestingLevel: { test() {
    return this.editor.canDecreaseNestingLevel();
  }, perform() {
    return this.editor.decreaseNestingLevel() && this.render();
  } }, attachFiles: { test: () => true, perform() {
    return _.pickFiles(this.editor.insertFiles);
  } } }), _r.proxyMethod("getSelectionManager().setLocationRange"), _r.proxyMethod("getSelectionManager().getLocationRange");
  var jr = Object.freeze({ __proto__: null, AttachmentEditorController: Yn, CompositionController: Xn, Controller: $n, EditorController: _r, InputController: lr, Level0InputController: gr, Level2InputController: Ar, ToolbarController: Br });
  var Wr = Object.freeze({ __proto__: null, MutationObserver: er, SelectionChangeObserver: Ot });
  var Ur = Object.freeze({ __proto__: null, FileVerificationOperation: nr, ImagePreloadOperation: Ui });
  vt("trix-toolbar", "%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}");
  var Vr = class extends HTMLElement {
    connectedCallback() {
      "" === this.innerHTML && (this.innerHTML = U.getDefaultHTML());
    }
  };
  var zr = 0;
  var qr = function(t3) {
    if (!t3.hasAttribute("contenteditable")) return t3.setAttribute("contenteditable", ""), function(t4) {
      let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return e2.times = 1, b(t4, e2);
    }("focus", { onElement: t3, withCallback: () => Hr(t3) });
  };
  var Hr = function(t3) {
    return Jr(t3), Kr(t3);
  };
  var Jr = function(t3) {
    var e2, i2;
    if (null !== (e2 = (i2 = document).queryCommandSupported) && void 0 !== e2 && e2.call(i2, "enableObjectResizing")) return document.execCommand("enableObjectResizing", false, false), b("mscontrolselect", { onElement: t3, preventDefault: true });
  };
  var Kr = function(t3) {
    var e2, i2;
    if (null !== (e2 = (i2 = document).queryCommandSupported) && void 0 !== e2 && e2.call(i2, "DefaultParagraphSeparator")) {
      const { tagName: t4 } = n.default;
      if (["div", "p"].includes(t4)) return document.execCommand("DefaultParagraphSeparator", false, t4);
    }
  };
  var Gr = a.forcesObjectResizing ? { display: "inline", width: "auto" } : { display: "inline-block", width: "1px" };
  vt("trix-editor", "%t {\n    display: block;\n}\n\n%t:empty::before {\n    content: attr(placeholder);\n    color: graytext;\n    cursor: text;\n    pointer-events: none;\n    white-space: pre-line;\n}\n\n%t a[contenteditable=false] {\n    cursor: text;\n}\n\n%t img {\n    max-width: 100%;\n    height: auto;\n}\n\n%t ".concat(e, " figcaption textarea {\n    resize: none;\n}\n\n%t ").concat(e, " figcaption textarea.trix-autoresize-clone {\n    position: absolute;\n    left: -9999px;\n    max-height: 0px;\n}\n\n%t ").concat(e, " figcaption[data-trix-placeholder]:empty::before {\n    content: attr(data-trix-placeholder);\n    color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n    display: ").concat(Gr.display, " !important;\n    width: ").concat(Gr.width, " !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n    vertical-align: top !important;\n    margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n    vertical-align: bottom !important;\n    margin-right: -1px !important;\n}"));
  var Yr = /* @__PURE__ */ new WeakMap();
  var Xr = /* @__PURE__ */ new WeakSet();
  var $r = class {
    constructor(t3) {
      var e2, i2;
      _i(e2 = this, i2 = Xr), i2.add(e2), ji(this, Yr, { writable: true, value: void 0 }), this.element = t3, Oi(this, Yr, t3.attachInternals());
    }
    connectedCallback() {
      Bi(this, Xr, Zr).call(this);
    }
    disconnectedCallback() {
    }
    get labels() {
      return Ii(this, Yr).labels;
    }
    get disabled() {
      var t3;
      return null === (t3 = this.element.inputElement) || void 0 === t3 ? void 0 : t3.disabled;
    }
    set disabled(t3) {
      this.element.toggleAttribute("disabled", t3);
    }
    get required() {
      return this.element.hasAttribute("required");
    }
    set required(t3) {
      this.element.toggleAttribute("required", t3), Bi(this, Xr, Zr).call(this);
    }
    get validity() {
      return Ii(this, Yr).validity;
    }
    get validationMessage() {
      return Ii(this, Yr).validationMessage;
    }
    get willValidate() {
      return Ii(this, Yr).willValidate;
    }
    setFormValue(t3) {
      Bi(this, Xr, Zr).call(this);
    }
    checkValidity() {
      return Ii(this, Yr).checkValidity();
    }
    reportValidity() {
      return Ii(this, Yr).reportValidity();
    }
    setCustomValidity(t3) {
      Bi(this, Xr, Zr).call(this, t3);
    }
  };
  function Zr() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    const { required: e2, value: i2 } = this.element, n2 = e2 && !i2, r2 = !!t3, o2 = T("input", { required: e2 }), s2 = t3 || o2.validationMessage;
    Ii(this, Yr).setValidity({ valueMissing: n2, customError: r2 }, s2);
  }
  var Qr = /* @__PURE__ */ new WeakMap();
  var to = /* @__PURE__ */ new WeakMap();
  var eo = /* @__PURE__ */ new WeakMap();
  var io = class {
    constructor(t3) {
      ji(this, Qr, { writable: true, value: void 0 }), ji(this, to, { writable: true, value: (t4) => {
        t4.defaultPrevented || t4.target === this.element.form && this.element.reset();
      } }), ji(this, eo, { writable: true, value: (t4) => {
        if (t4.defaultPrevented) return;
        if (this.element.contains(t4.target)) return;
        const e2 = y(t4.target, { matchingSelector: "label" });
        e2 && Array.from(this.labels).includes(e2) && this.element.focus();
      } }), this.element = t3;
    }
    connectedCallback() {
      Oi(this, Qr, function(t3) {
        if (t3.hasAttribute("aria-label") || t3.hasAttribute("aria-labelledby")) return;
        const e2 = function() {
          const e3 = Array.from(t3.labels).map((e4) => {
            if (!e4.contains(t3)) return e4.textContent;
          }).filter((t4) => t4), i2 = e3.join(" ");
          return i2 ? t3.setAttribute("aria-label", i2) : t3.removeAttribute("aria-label");
        };
        return e2(), b("focus", { onElement: t3, withCallback: e2 });
      }(this.element)), window.addEventListener("reset", Ii(this, to), false), window.addEventListener("click", Ii(this, eo), false);
    }
    disconnectedCallback() {
      var t3;
      null === (t3 = Ii(this, Qr)) || void 0 === t3 || t3.destroy(), window.removeEventListener("reset", Ii(this, to), false), window.removeEventListener("click", Ii(this, eo), false);
    }
    get labels() {
      const t3 = [];
      this.element.id && this.element.ownerDocument && t3.push(...Array.from(this.element.ownerDocument.querySelectorAll("label[for='".concat(this.element.id, "']")) || []));
      const e2 = y(this.element, { matchingSelector: "label" });
      return e2 && [this.element, null].includes(e2.control) && t3.push(e2), t3;
    }
    get disabled() {
      return console.warn("This browser does not support the [disabled] attribute for trix-editor elements."), false;
    }
    set disabled(t3) {
      console.warn("This browser does not support the [disabled] attribute for trix-editor elements.");
    }
    get required() {
      return console.warn("This browser does not support the [required] attribute for trix-editor elements."), false;
    }
    set required(t3) {
      console.warn("This browser does not support the [required] attribute for trix-editor elements.");
    }
    get validity() {
      return console.warn("This browser does not support the validity property for trix-editor elements."), null;
    }
    get validationMessage() {
      return console.warn("This browser does not support the validationMessage property for trix-editor elements."), "";
    }
    get willValidate() {
      return console.warn("This browser does not support the willValidate property for trix-editor elements."), false;
    }
    setFormValue(t3) {
    }
    checkValidity() {
      return console.warn("This browser does not support checkValidity() for trix-editor elements."), true;
    }
    reportValidity() {
      return console.warn("This browser does not support reportValidity() for trix-editor elements."), true;
    }
    setCustomValidity(t3) {
      console.warn("This browser does not support setCustomValidity(validationMessage) for trix-editor elements.");
    }
  };
  var no = /* @__PURE__ */ new WeakMap();
  var ro = class extends HTMLElement {
    constructor() {
      super(), ji(this, no, { writable: true, value: void 0 }), Oi(this, no, this.constructor.formAssociated ? new $r(this) : new io(this));
    }
    get trixId() {
      return this.hasAttribute("trix-id") ? this.getAttribute("trix-id") : (this.setAttribute("trix-id", ++zr), this.trixId);
    }
    get labels() {
      return Ii(this, no).labels;
    }
    get disabled() {
      return Ii(this, no).disabled;
    }
    set disabled(t3) {
      Ii(this, no).disabled = t3;
    }
    get required() {
      return Ii(this, no).required;
    }
    set required(t3) {
      Ii(this, no).required = t3;
    }
    get validity() {
      return Ii(this, no).validity;
    }
    get validationMessage() {
      return Ii(this, no).validationMessage;
    }
    get willValidate() {
      return Ii(this, no).willValidate;
    }
    get type() {
      return this.localName;
    }
    get toolbarElement() {
      var t3;
      if (this.hasAttribute("toolbar")) return null === (t3 = this.ownerDocument) || void 0 === t3 ? void 0 : t3.getElementById(this.getAttribute("toolbar"));
      if (this.parentNode) {
        const t4 = "trix-toolbar-".concat(this.trixId);
        return this.setAttribute("toolbar", t4), this.internalToolbar = T("trix-toolbar", { id: t4 }), this.parentNode.insertBefore(this.internalToolbar, this), this.internalToolbar;
      }
    }
    get form() {
      var t3;
      return null === (t3 = this.inputElement) || void 0 === t3 ? void 0 : t3.form;
    }
    get inputElement() {
      var t3;
      if (this.hasAttribute("input")) return null === (t3 = this.ownerDocument) || void 0 === t3 ? void 0 : t3.getElementById(this.getAttribute("input"));
      if (this.parentNode) {
        const t4 = "trix-input-".concat(this.trixId);
        this.setAttribute("input", t4);
        const e2 = T("input", { type: "hidden", id: t4 });
        return this.parentNode.insertBefore(e2, this.nextElementSibling), e2;
      }
    }
    get editor() {
      var t3;
      return null === (t3 = this.editorController) || void 0 === t3 ? void 0 : t3.editor;
    }
    get name() {
      var t3;
      return null === (t3 = this.inputElement) || void 0 === t3 ? void 0 : t3.name;
    }
    get value() {
      var t3;
      return null === (t3 = this.inputElement) || void 0 === t3 ? void 0 : t3.value;
    }
    set value(t3) {
      var e2;
      this.defaultValue = t3, null === (e2 = this.editor) || void 0 === e2 || e2.loadHTML(this.defaultValue);
    }
    attributeChangedCallback(t3, e2, i2) {
      "connected" === t3 && this.isConnected && null != e2 && e2 !== i2 && requestAnimationFrame(() => this.reconnect());
    }
    notify(t3, e2) {
      if (this.editorController) return v("trix-".concat(t3), { onElement: this, attributes: e2 });
    }
    setFormValue(t3) {
      this.inputElement && (this.inputElement.value = t3, Ii(this, no).setFormValue(t3));
    }
    connectedCallback() {
      this.hasAttribute("data-trix-internal") || (qr(this), function(t3) {
        if (!t3.hasAttribute("role")) t3.setAttribute("role", "textbox");
      }(this), this.editorController || (v("trix-before-initialize", { onElement: this }), this.editorController = new _r({ editorElement: this, html: this.defaultValue = this.value }), requestAnimationFrame(() => v("trix-initialize", { onElement: this }))), this.editorController.registerSelectionManager(), Ii(this, no).connectedCallback(), this.toggleAttribute("connected", true), function(t3) {
        if (!document.querySelector(":focus") && t3.hasAttribute("autofocus") && document.querySelector("[autofocus]") === t3) t3.focus();
      }(this));
    }
    disconnectedCallback() {
      var t3;
      null === (t3 = this.editorController) || void 0 === t3 || t3.unregisterSelectionManager(), Ii(this, no).disconnectedCallback(), this.toggleAttribute("connected", false);
    }
    reconnect() {
      this.removeInternalToolbar(), this.disconnectedCallback(), this.connectedCallback();
    }
    removeInternalToolbar() {
      var t3;
      null === (t3 = this.internalToolbar) || void 0 === t3 || t3.remove(), this.internalToolbar = null;
    }
    checkValidity() {
      return Ii(this, no).checkValidity();
    }
    reportValidity() {
      return Ii(this, no).reportValidity();
    }
    setCustomValidity(t3) {
      Ii(this, no).setCustomValidity(t3);
    }
    formDisabledCallback(t3) {
      this.inputElement && (this.inputElement.disabled = t3), this.toggleAttribute("contenteditable", !t3);
    }
    formResetCallback() {
      this.reset();
    }
    reset() {
      this.value = this.defaultValue;
    }
  };
  Di(ro, "formAssociated", "ElementInternals" in window), Di(ro, "observedAttributes", ["connected"]);
  var oo = { VERSION: t, config: z, core: Sn, models: zn, views: qn, controllers: jr, observers: Wr, operations: Ur, elements: Object.freeze({ __proto__: null, TrixEditorElement: ro, TrixToolbarElement: Vr }), filters: Object.freeze({ __proto__: null, Filter: In, attachmentGalleryFilter: On }) };
  Object.assign(oo, zn), window.Trix = oo, setTimeout(function() {
    customElements.get("trix-toolbar") || customElements.define("trix-toolbar", Vr), customElements.get("trix-editor") || customElements.define("trix-editor", ro);
  }, 0);

  // lib/lesli_assets_js/application.js
  var import_dayjs = __toESM(require_dayjs_min());

  // node_modules/alpinejs/dist/module.esm.js
  var flushPending = false;
  var flushing = false;
  var queue = [];
  var lastFlushedIndex = -1;
  function scheduler(callback2) {
    queueJob(callback2);
  }
  function queueJob(job) {
    if (!queue.includes(job))
      queue.push(job);
    queueFlush();
  }
  function dequeueJob(job) {
    let index2 = queue.indexOf(job);
    if (index2 !== -1 && index2 > lastFlushedIndex)
      queue.splice(index2, 1);
  }
  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }
  function flushJobs() {
    flushPending = false;
    flushing = true;
    for (let i2 = 0; i2 < queue.length; i2++) {
      queue[i2]();
      lastFlushedIndex = i2;
    }
    queue.length = 0;
    lastFlushedIndex = -1;
    flushing = false;
  }
  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;
  function disableEffectScheduling(callback2) {
    shouldSchedule = false;
    callback2();
    shouldSchedule = true;
  }
  function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback2) => engine.effect(callback2, { scheduler: (task) => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    } });
    raw = engine.raw;
  }
  function overrideEffect(override) {
    effect = override;
  }
  function elementBoundEffect(el) {
    let cleanup2 = () => {
    };
    let wrappedEffect = (callback2) => {
      let effectReference = effect(callback2);
      if (!el._x_effects) {
        el._x_effects = /* @__PURE__ */ new Set();
        el._x_runEffects = () => {
          el._x_effects.forEach((i2) => i2());
        };
      }
      el._x_effects.add(effectReference);
      cleanup2 = () => {
        if (effectReference === void 0)
          return;
        el._x_effects.delete(effectReference);
        release(effectReference);
      };
      return effectReference;
    };
    return [wrappedEffect, () => {
      cleanup2();
    }];
  }
  function watch(getter, callback2) {
    let firstTime = true;
    let oldValue;
    let effectReference = effect(() => {
      let value = getter();
      JSON.stringify(value);
      if (!firstTime) {
        queueMicrotask(() => {
          callback2(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    });
    return () => release(effectReference);
  }
  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];
  function onElAdded(callback2) {
    onElAddeds.push(callback2);
  }
  function onElRemoved(el, callback2) {
    if (typeof callback2 === "function") {
      if (!el._x_cleanups)
        el._x_cleanups = [];
      el._x_cleanups.push(callback2);
    } else {
      callback2 = el;
      onElRemoveds.push(callback2);
    }
  }
  function onAttributesAdded(callback2) {
    onAttributeAddeds.push(callback2);
  }
  function onAttributeRemoved(el, name, callback2) {
    if (!el._x_attributeCleanups)
      el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name])
      el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback2);
  }
  function cleanupAttributes(el, names2) {
    if (!el._x_attributeCleanups)
      return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
      if (names2 === void 0 || names2.includes(name)) {
        value.forEach((i2) => i2());
        delete el._x_attributeCleanups[name];
      }
    });
  }
  function cleanupElement(el) {
    el._x_effects?.forEach(dequeueJob);
    while (el._x_cleanups?.length)
      el._x_cleanups.pop()();
  }
  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;
  function startObservingMutations() {
    observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
    currentlyObserving = true;
  }
  function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
  }
  var queuedMutations = [];
  function flushObserver() {
    let records = observer.takeRecords();
    queuedMutations.push(() => records.length > 0 && onMutate(records));
    let queueLengthWhenTriggered = queuedMutations.length;
    queueMicrotask(() => {
      if (queuedMutations.length === queueLengthWhenTriggered) {
        while (queuedMutations.length > 0)
          queuedMutations.shift()();
      }
    });
  }
  function mutateDom(callback2) {
    if (!currentlyObserving)
      return callback2();
    stopObservingMutations();
    let result = callback2();
    startObservingMutations();
    return result;
  }
  var isCollecting = false;
  var deferredMutations = [];
  function deferMutations() {
    isCollecting = true;
  }
  function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
  }
  function onMutate(mutations) {
    if (isCollecting) {
      deferredMutations = deferredMutations.concat(mutations);
      return;
    }
    let addedNodes = [];
    let removedNodes = /* @__PURE__ */ new Set();
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for (let i2 = 0; i2 < mutations.length; i2++) {
      if (mutations[i2].target._x_ignoreMutationObserver)
        continue;
      if (mutations[i2].type === "childList") {
        mutations[i2].removedNodes.forEach((node) => {
          if (node.nodeType !== 1)
            return;
          if (!node._x_marker)
            return;
          removedNodes.add(node);
        });
        mutations[i2].addedNodes.forEach((node) => {
          if (node.nodeType !== 1)
            return;
          if (removedNodes.has(node)) {
            removedNodes.delete(node);
            return;
          }
          if (node._x_marker)
            return;
          addedNodes.push(node);
        });
      }
      if (mutations[i2].type === "attributes") {
        let el = mutations[i2].target;
        let name = mutations[i2].attributeName;
        let oldValue = mutations[i2].oldValue;
        let add2 = () => {
          if (!addedAttributes.has(el))
            addedAttributes.set(el, []);
          addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
        };
        let remove = () => {
          if (!removedAttributes.has(el))
            removedAttributes.set(el, []);
          removedAttributes.get(el).push(name);
        };
        if (el.hasAttribute(name) && oldValue === null) {
          add2();
        } else if (el.hasAttribute(name)) {
          remove();
          add2();
        } else {
          remove();
        }
      }
    }
    removedAttributes.forEach((attrs, el) => {
      cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el) => {
      onAttributeAddeds.forEach((i2) => i2(el, attrs));
    });
    for (let node of removedNodes) {
      if (addedNodes.some((i2) => i2.contains(node)))
        continue;
      onElRemoveds.forEach((i2) => i2(node));
    }
    for (let node of addedNodes) {
      if (!node.isConnected)
        continue;
      onElAddeds.forEach((i2) => i2(node));
    }
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  }
  function scope(node) {
    return mergeProxies(closestDataStack(node));
  }
  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
    return () => {
      node._x_dataStack = node._x_dataStack.filter((i2) => i2 !== data2);
    };
  }
  function closestDataStack(node) {
    if (node._x_dataStack)
      return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }
    if (!node.parentNode) {
      return [];
    }
    return closestDataStack(node.parentNode);
  }
  function mergeProxies(objects) {
    return new Proxy({ objects }, mergeProxyTrap);
  }
  var mergeProxyTrap = {
    ownKeys({ objects }) {
      return Array.from(
        new Set(objects.flatMap((i2) => Object.keys(i2)))
      );
    },
    has({ objects }, name) {
      if (name == Symbol.unscopables)
        return false;
      return objects.some(
        (obj) => Object.prototype.hasOwnProperty.call(obj, name) || Reflect.has(obj, name)
      );
    },
    get({ objects }, name, thisProxy) {
      if (name == "toJSON")
        return collapseProxies;
      return Reflect.get(
        objects.find(
          (obj) => Reflect.has(obj, name)
        ) || {},
        name,
        thisProxy
      );
    },
    set({ objects }, name, value, thisProxy) {
      const target = objects.find(
        (obj) => Object.prototype.hasOwnProperty.call(obj, name)
      ) || objects[objects.length - 1];
      const descriptor = Object.getOwnPropertyDescriptor(target, name);
      if (descriptor?.set && descriptor?.get)
        return descriptor.set.call(thisProxy, value) || true;
      return Reflect.set(target, name, value);
    }
  };
  function collapseProxies() {
    let keys = Reflect.ownKeys(this);
    return keys.reduce((acc, key) => {
      acc[key] = Reflect.get(this, key);
      return acc;
    }, {});
  }
  function initInterceptors(data2) {
    let isObject22 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
        if (enumerable === false || value === void 0)
          return;
        if (typeof value === "object" && value !== null && value.__v_skip)
          return;
        let path = basePath === "" ? key : `${basePath}.${key}`;
        if (typeof value === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject22(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };
    return recurse(data2);
  }
  function interceptor(callback2, mutateObj = () => {
  }) {
    let obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize(data2, path, key) {
        return callback2(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
      }
    };
    mutateObj(obj);
    return (initialValue) => {
      if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
        let initialize = obj.initialize.bind(obj);
        obj.initialize = (data2, path, key) => {
          let innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }
      return obj;
    };
  }
  function get(obj, path) {
    return path.split(".").reduce((carry, segment) => carry[segment], obj);
  }
  function set(obj, path, value) {
    if (typeof path === "string")
      path = path.split(".");
    if (path.length === 1)
      obj[path[0]] = value;
    else if (path.length === 0)
      throw error;
    else {
      if (obj[path[0]])
        return set(obj[path[0]], path.slice(1), value);
      else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  }
  var magics = {};
  function magic(name, callback2) {
    magics[name] = callback2;
  }
  function injectMagics(obj, el) {
    let memoizedUtilities = getUtilities(el);
    Object.entries(magics).forEach(([name, callback2]) => {
      Object.defineProperty(obj, `$${name}`, {
        get() {
          return callback2(el, memoizedUtilities);
        },
        enumerable: false
      });
    });
    return obj;
  }
  function getUtilities(el) {
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    let utils = { interceptor, ...utilities };
    onElRemoved(el, cleanup2);
    return utils;
  }
  function tryCatch(el, expression, callback2, ...args) {
    try {
      return callback2(...args);
    } catch (e2) {
      handleError(e2, el, expression);
    }
  }
  function handleError(error2, el, expression = void 0) {
    error2 = Object.assign(
      error2 ?? { message: "No error message given." },
      { el, expression }
    );
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(() => {
      throw error2;
    }, 0);
  }
  var shouldAutoEvaluateFunctions = true;
  function dontAutoEvaluateFunctions(callback2) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    let result = callback2();
    shouldAutoEvaluateFunctions = cache;
    return result;
  }
  function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value) => result = value, extras);
    return result;
  }
  function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
  }
  var theEvaluatorFunction = normalEvaluator;
  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }
  function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [overriddenMagics, ...closestDataStack(el)];
    let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
  }
  function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
      runIfTypeOfFunction(receiver, result);
    };
  }
  var evaluatorMemo = {};
  function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }
    let AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
    const safeAsyncFunction = () => {
      try {
        let func2 = new AsyncFunction(
          ["__self", "scope"],
          `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`
        );
        Object.defineProperty(func2, "name", {
          value: `[Alpine] ${expression}`
        });
        return func2;
      } catch (error2) {
        handleError(error2, el, expression);
        return Promise.resolve();
      }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
  }
  function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      func.result = void 0;
      func.finished = false;
      let completeScope = mergeProxies([scope2, ...dataStack]);
      if (typeof func === "function") {
        let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
        if (func.finished) {
          runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
          func.result = void 0;
        } else {
          promise.then((result) => {
            runIfTypeOfFunction(receiver, result, completeScope, params, el);
          }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
        }
      }
    };
  }
  function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
      let result = value.apply(scope2, params);
      if (result instanceof Promise) {
        result.then((i2) => runIfTypeOfFunction(receiver, i2, scope2, params)).catch((error2) => handleError(error2, el, value));
      } else {
        receiver(result);
      }
    } else if (typeof value === "object" && value instanceof Promise) {
      value.then((i2) => receiver(i2));
    } else {
      receiver(value);
    }
  }
  var prefixAsString = "x-";
  function prefix(subject = "") {
    return prefixAsString + subject;
  }
  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }
  var directiveHandlers = {};
  function directive(name, callback2) {
    directiveHandlers[name] = callback2;
    return {
      before(directive2) {
        if (!directiveHandlers[directive2]) {
          console.warn(String.raw`Cannot find directive \`${directive2}\`. \`${name}\` will use the default order of execution`);
          return;
        }
        const pos = directiveOrder.indexOf(directive2);
        directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
      }
    };
  }
  function directiveExists(name) {
    return Object.keys(directiveHandlers).includes(name);
  }
  function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
      let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(vAttributes);
      vAttributes = vAttributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2) => {
      return getDirectiveHandler(el, directive2);
    });
  }
  function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
  }
  var isDeferringHandlers = false;
  var directiveHandlerStacks = /* @__PURE__ */ new Map();
  var currentHandlerStackKey = Symbol();
  function deferHandlingDirectives(callback2) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = () => {
      while (directiveHandlerStacks.get(key).length)
        directiveHandlerStacks.get(key).shift()();
      directiveHandlerStacks.delete(key);
    };
    let stopDeferring = () => {
      isDeferringHandlers = false;
      flushHandlers();
    };
    callback2(flushHandlers);
    stopDeferring();
  }
  function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback2) => cleanups.push(callback2);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
      Alpine: alpine_default,
      effect: effect3,
      cleanup: cleanup2,
      evaluateLater: evaluateLater.bind(evaluateLater, el),
      evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = () => cleanups.forEach((i2) => i2());
    return [utilities, doCleanup];
  }
  function getDirectiveHandler(el, directive2) {
    let noop2 = () => {
    };
    let handler4 = directiveHandlers[directive2.type] || noop2;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = () => {
      if (el._x_ignore || el._x_ignoreSelf)
        return;
      handler4.inline && handler4.inline(el, directive2, utilities);
      handler4 = handler4.bind(handler4, el, directive2, utilities);
      isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
  }
  var startingWith = (subject, replacement) => ({ name, value }) => {
    if (name.startsWith(subject))
      name = name.replace(subject, replacement);
    return { name, value };
  };
  var into = (i2) => i2;
  function toTransformedAttributes(callback2 = () => {
  }) {
    return ({ name, value }) => {
      let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
        return transform(carry);
      }, { name, value });
      if (newName !== name)
        callback2(newName, name);
      return { name: newName, value: newValue };
    };
  }
  var attributeTransformers = [];
  function mapAttributes(callback2) {
    attributeTransformers.push(callback2);
  }
  function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
  }
  var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value }) => {
      let typeMatch = name.match(alpineAttributeRegex());
      let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
      let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      let original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i2) => i2.replace(".", "")),
        expression: value,
        original
      };
    };
  }
  var DEFAULT = "DEFAULT";
  var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "anchor",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
  ];
  function byPriority(a2, b2) {
    let typeA = directiveOrder.indexOf(a2.type) === -1 ? DEFAULT : a2.type;
    let typeB = directiveOrder.indexOf(b2.type) === -1 ? DEFAULT : b2.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  }
  function dispatch(el, name, detail = {}) {
    el.dispatchEvent(
      new CustomEvent(name, {
        detail,
        bubbles: true,
        // Allows events to pass the shadow DOM barrier.
        composed: true,
        cancelable: true
      })
    );
  }
  function walk(el, callback2) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
      Array.from(el.children).forEach((el2) => walk(el2, callback2));
      return;
    }
    let skip2 = false;
    callback2(el, () => skip2 = true);
    if (skip2)
      return;
    let node = el.firstElementChild;
    while (node) {
      walk(node, callback2, false);
      node = node.nextElementSibling;
    }
  }
  function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
  }
  var started = false;
  function start() {
    if (started)
      warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
    started = true;
    if (!document.body)
      warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el) => initTree(el, walk));
    onElRemoved((el) => destroyTree(el));
    onAttributesAdded((el, attrs) => {
      directives(el, attrs).forEach((handle) => handle());
    });
    let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el) => {
      initTree(el);
    });
    dispatch(document, "alpine:initialized");
    setTimeout(() => {
      warnAboutMissingPlugins();
    });
  }
  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];
  function rootSelectors() {
    return rootSelectorCallbacks.map((fn2) => fn2());
  }
  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn2) => fn2());
  }
  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }
  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }
  function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element) => {
      const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
      if (selectors.some((selector) => element.matches(selector)))
        return true;
    });
  }
  function findClosest(el, callback2) {
    if (!el)
      return;
    if (callback2(el))
      return el;
    if (el._x_teleportBack)
      el = el._x_teleportBack;
    if (!el.parentElement)
      return;
    return findClosest(el.parentElement, callback2);
  }
  function isRoot(el) {
    return rootSelectors().some((selector) => el.matches(selector));
  }
  var initInterceptors2 = [];
  function interceptInit(callback2) {
    initInterceptors2.push(callback2);
  }
  var markerDispenser = 1;
  function initTree(el, walker = walk, intercept = () => {
  }) {
    if (findClosest(el, (i2) => i2._x_ignore))
      return;
    deferHandlingDirectives(() => {
      walker(el, (el2, skip2) => {
        if (el2._x_marker)
          return;
        intercept(el2, skip2);
        initInterceptors2.forEach((i2) => i2(el2, skip2));
        directives(el2, el2.attributes).forEach((handle) => handle());
        if (!el2._x_ignore)
          el2._x_marker = markerDispenser++;
        el2._x_ignore && skip2();
      });
    });
  }
  function destroyTree(root, walker = walk) {
    walker(root, (el) => {
      cleanupElement(el);
      cleanupAttributes(el);
      delete el._x_marker;
    });
  }
  function warnAboutMissingPlugins() {
    let pluginDirectives = [
      ["ui", "dialog", ["[x-dialog], [x-popover]"]],
      ["anchor", "anchor", ["[x-anchor]"]],
      ["sort", "sort", ["[x-sort]"]]
    ];
    pluginDirectives.forEach(([plugin2, directive2, selectors]) => {
      if (directiveExists(directive2))
        return;
      selectors.some((selector) => {
        if (document.querySelector(selector)) {
          warn(`found "${selector}", but missing ${plugin2} plugin`);
          return true;
        }
      });
    });
  }
  var tickStack = [];
  var isHolding = false;
  function nextTick(callback2 = () => {
  }) {
    queueMicrotask(() => {
      isHolding || setTimeout(() => {
        releaseNextTicks();
      });
    });
    return new Promise((res) => {
      tickStack.push(() => {
        callback2();
        res();
      });
    });
  }
  function releaseNextTicks() {
    isHolding = false;
    while (tickStack.length)
      tickStack.shift()();
  }
  function holdNextTicks() {
    isHolding = true;
  }
  function setClasses(el, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el, value.join(" "));
    } else if (typeof value === "object" && value !== null) {
      return setClassesFromObject(el, value);
    } else if (typeof value === "function") {
      return setClasses(el, value());
    }
    return setClassesFromString(el, value);
  }
  function setClassesFromString(el, classString) {
    let split = (classString2) => classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2) => classString2.split(" ").filter((i2) => !el.classList.contains(i2)).filter(Boolean);
    let addClassesAndReturnUndo = (classes) => {
      el.classList.add(...classes);
      return () => {
        el.classList.remove(...classes);
      };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }
  function setClassesFromObject(el, classObject) {
    let split = (classString) => classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i2) => {
      if (el.classList.contains(i2)) {
        el.classList.remove(i2);
        removed.push(i2);
      }
    });
    forAdd.forEach((i2) => {
      if (!el.classList.contains(i2)) {
        el.classList.add(i2);
        added.push(i2);
      }
    });
    return () => {
      removed.forEach((i2) => el.classList.add(i2));
      added.forEach((i2) => el.classList.remove(i2));
    };
  }
  function setStyles(el, value) {
    if (typeof value === "object" && value !== null) {
      return setStylesFromObject(el, value);
    }
    return setStylesFromString(el, value);
  }
  function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2]) => {
      previousStyles[key] = el.style[key];
      if (!key.startsWith("--")) {
        key = kebabCase(key);
      }
      el.style.setProperty(key, value2);
    });
    setTimeout(() => {
      if (el.style.length === 0) {
        el.removeAttribute("style");
      }
    });
    return () => {
      setStyles(el, previousStyles);
    };
  }
  function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return () => {
      el.setAttribute("style", cache || "");
    };
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function once(callback2, fallback = () => {
  }) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        callback2.apply(this, arguments);
      } else {
        fallback.apply(this, arguments);
      }
    };
  }
  directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "function")
      expression = evaluate2(expression);
    if (expression === false)
      return;
    if (!expression || typeof expression === "boolean") {
      registerTransitionsFromHelper(el, modifiers, value);
    } else {
      registerTransitionsFromClassString(el, expression, value);
    }
  });
  function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
      "enter": (classes) => {
        el._x_transition.enter.during = classes;
      },
      "enter-start": (classes) => {
        el._x_transition.enter.start = classes;
      },
      "enter-end": (classes) => {
        el._x_transition.enter.end = classes;
      },
      "leave": (classes) => {
        el._x_transition.leave.during = classes;
      },
      "leave-start": (classes) => {
        el._x_transition.leave.start = classes;
      },
      "leave-end": (classes) => {
        el._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }
  function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter((i2, index2) => index2 < modifiers.indexOf("out"));
    }
    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter((i2, index2) => index2 > modifiers.indexOf("out"));
    }
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0) / 1e3;
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
      el._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: `${delay}s`,
        transitionProperty: property,
        transitionDuration: `${durationIn}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.enter.start = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
      el._x_transition.enter.end = {
        opacity: 1,
        transform: `scale(1)`
      };
    }
    if (transitioningOut) {
      el._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: `${delay}s`,
        transitionProperty: property,
        transitionDuration: `${durationOut}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.leave.start = {
        opacity: 1,
        transform: `scale(1)`
      };
      el._x_transition.leave.end = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
    }
  }
  function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition)
      el._x_transition = {
        enter: { during: defaultValue, start: defaultValue, end: defaultValue },
        leave: { during: defaultValue, start: defaultValue, end: defaultValue },
        in(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = () => nextTick2(show);
    if (value) {
      if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
        el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
      } else {
        el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
      }
      return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve2, reject) => {
      el._x_transition.out(() => {
      }, () => resolve2(hide));
      el._x_transitioning && el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
    }) : Promise.resolve(hide);
    queueMicrotask(() => {
      let closest = closestHide(el);
      if (closest) {
        if (!closest._x_hideChildren)
          closest._x_hideChildren = [];
        closest._x_hideChildren.push(el);
      } else {
        nextTick2(() => {
          let hideAfterChildren = (el2) => {
            let carry = Promise.all([
              el2._x_hidePromise,
              ...(el2._x_hideChildren || []).map(hideAfterChildren)
            ]).then(([i2]) => i2?.());
            delete el2._x_hidePromise;
            delete el2._x_hideChildren;
            return carry;
          };
          hideAfterChildren(el).catch((e2) => {
            if (!e2.isFromCancelledTransition)
              throw e2;
          });
        });
      }
    });
  };
  function closestHide(el) {
    let parent = el.parentNode;
    if (!parent)
      return;
    return parent._x_hidePromise ? parent : closestHide(parent);
  }
  function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
  }, after = () => {
  }) {
    if (el._x_transitioning)
      el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
      before();
      after();
      return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
      start() {
        undoStart = setFunction(el, start2);
      },
      during() {
        undoDuring = setFunction(el, during);
      },
      before,
      end() {
        undoStart();
        undoEnd = setFunction(el, end);
      },
      after,
      cleanup() {
        undoDuring();
        undoEnd();
      }
    });
  }
  function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(() => {
      mutateDom(() => {
        interrupted = true;
        if (!reachedBefore)
          stages.before();
        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }
        stages.after();
        if (el.isConnected)
          stages.cleanup();
        delete el._x_transitioning;
      });
    });
    el._x_transitioning = {
      beforeCancels: [],
      beforeCancel(callback2) {
        this.beforeCancels.push(callback2);
      },
      cancel: once(function() {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        ;
        finish();
      }),
      finish
    };
    mutateDom(() => {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0)
        duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
      mutateDom(() => {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        mutateDom(() => {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el._x_transitioning.finish, duration + delay);
        reachedEnd = true;
      });
    });
  }
  function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1)
      return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback;
    if (key === "scale") {
      if (isNaN(rawValue))
        return fallback;
    }
    if (key === "duration" || key === "delay") {
      let match = rawValue.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }
    return rawValue;
  }
  var isCloning = false;
  function skipDuringClone(callback2, fallback = () => {
  }) {
    return (...args) => isCloning ? fallback(...args) : callback2(...args);
  }
  function onlyDuringClone(callback2) {
    return (...args) => isCloning && callback2(...args);
  }
  var interceptors = [];
  function interceptClone(callback2) {
    interceptors.push(callback2);
  }
  function cloneNode(from2, to3) {
    interceptors.forEach((i2) => i2(from2, to3));
    isCloning = true;
    dontRegisterReactiveSideEffects(() => {
      initTree(to3, (el, callback2) => {
        callback2(el, () => {
        });
      });
    });
    isCloning = false;
  }
  var isCloningLegacy = false;
  function clone(oldEl, newEl) {
    if (!newEl._x_dataStack)
      newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    isCloningLegacy = true;
    dontRegisterReactiveSideEffects(() => {
      cloneTree(newEl);
    });
    isCloning = false;
    isCloningLegacy = false;
  }
  function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback2) => {
      walk(el2, (el3, skip2) => {
        if (hasRunThroughFirstEl && isRoot(el3))
          return skip2();
        hasRunThroughFirstEl = true;
        callback2(el3, skip2);
      });
    };
    initTree(el, shallowWalker);
  }
  function dontRegisterReactiveSideEffects(callback2) {
    let cache = effect;
    overrideEffect((callback22, el) => {
      let storedEffect = cache(callback22);
      release(storedEffect);
      return () => {
      };
    });
    callback2();
    overrideEffect(cache);
  }
  function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings)
      el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch (name) {
      case "value":
        bindInputValue(el, value);
        break;
      case "style":
        bindStyles(el, value);
        break;
      case "class":
        bindClasses(el, value);
        break;
      case "selected":
      case "checked":
        bindAttributeAndProperty(el, name, value);
        break;
      default:
        bindAttribute(el, name, value);
        break;
    }
  }
  function bindInputValue(el, value) {
    if (isRadio(el)) {
      if (el.attributes.value === void 0) {
        el.value = value;
      }
      if (window.fromModel) {
        if (typeof value === "boolean") {
          el.checked = safeParseBoolean(el.value) === value;
        } else {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      }
    } else if (isCheckbox(el)) {
      if (Number.isInteger(value)) {
        el.value = value;
      } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
        } else {
          el.checked = !!value;
        }
      }
    } else if (el.tagName === "SELECT") {
      updateSelect(el, value);
    } else {
      if (el.value === value)
        return;
      el.value = value === void 0 ? "" : value;
    }
  }
  function bindClasses(el, value) {
    if (el._x_undoAddedClasses)
      el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
  }
  function bindStyles(el, value) {
    if (el._x_undoAddedStyles)
      el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
  }
  function bindAttributeAndProperty(el, name, value) {
    bindAttribute(el, name, value);
    setPropertyIfChanged(el, name, value);
  }
  function bindAttribute(el, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el.removeAttribute(name);
    } else {
      if (isBooleanAttr(name))
        value = name;
      setIfChanged(el, name, value);
    }
  }
  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }
  function setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) {
      el[propName] = value;
    }
  }
  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2) => {
      return value2 + "";
    });
    Array.from(el.options).forEach((option) => {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function safeParseBoolean(rawValue) {
    if ([1, "1", "true", "on", "yes", true].includes(rawValue)) {
      return true;
    }
    if ([0, "0", "false", "off", "no", false].includes(rawValue)) {
      return false;
    }
    return rawValue ? Boolean(rawValue) : null;
  }
  var booleanAttributes = /* @__PURE__ */ new Set([
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "inert",
    "ismap",
    "itemscope",
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
    "selected",
    "shadowrootclonable",
    "shadowrootdelegatesfocus",
    "shadowrootserializable"
  ]);
  function isBooleanAttr(attrName) {
    return booleanAttributes.has(attrName);
  }
  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
  }
  function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    return getAttributeBinding(el, name, fallback);
  }
  function extractProp(el, name, fallback, extract = true) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
      let binding = el._x_inlineBindings[name];
      binding.extract = extract;
      return dontAutoEvaluateFunctions(() => {
        return evaluate(el, binding.expression);
      });
    }
    return getAttributeBinding(el, name, fallback);
  }
  function getAttributeBinding(el, name, fallback) {
    let attr = el.getAttribute(name);
    if (attr === null)
      return typeof fallback === "function" ? fallback() : fallback;
    if (attr === "")
      return true;
    if (isBooleanAttr(name)) {
      return !![name, "true"].includes(attr);
    }
    return attr;
  }
  function isCheckbox(el) {
    return el.type === "checkbox" || el.localName === "ui-checkbox" || el.localName === "ui-switch";
  }
  function isRadio(el) {
    return el.type === "radio" || el.localName === "ui-radio";
  }
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      let context = this, args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
    let firstRun = true;
    let outerHash;
    let innerHash;
    let reference = effect(() => {
      let outer = outerGet();
      let inner = innerGet();
      if (firstRun) {
        innerSet(cloneIfObject(outer));
        firstRun = false;
      } else {
        let outerHashLatest = JSON.stringify(outer);
        let innerHashLatest = JSON.stringify(inner);
        if (outerHashLatest !== outerHash) {
          innerSet(cloneIfObject(outer));
        } else if (outerHashLatest !== innerHashLatest) {
          outerSet(cloneIfObject(inner));
        } else {
        }
      }
      outerHash = JSON.stringify(outerGet());
      innerHash = JSON.stringify(innerGet());
    });
    return () => {
      release(reference);
    };
  }
  function cloneIfObject(value) {
    return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
  }
  function plugin(callback2) {
    let callbacks = Array.isArray(callback2) ? callback2 : [callback2];
    callbacks.forEach((i2) => i2(alpine_default));
  }
  var stores = {};
  var isReactive = false;
  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }
    if (value === void 0) {
      return stores[name];
    }
    stores[name] = value;
    initInterceptors(stores[name]);
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
  }
  function getStores() {
    return stores;
  }
  var binds = {};
  function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
    if (name instanceof Element) {
      return applyBindingsObject(name, getBindings());
    } else {
      binds[name] = getBindings;
    }
    return () => {
    };
  }
  function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback2]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback2(...args);
          };
        }
      });
    });
    return obj;
  }
  function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    directives(el, attributes, original).map((handle) => {
      cleanupRunners.push(handle.runCleanups);
      handle();
    });
    return () => {
      while (cleanupRunners.length)
        cleanupRunners.pop()();
    };
  }
  var datas = {};
  function data(name, callback2) {
    datas[name] = callback2;
  }
  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback2]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback2.bind(context)(...args);
          };
        },
        enumerable: false
      });
    });
    return obj;
  }
  var Alpine = {
    get reactive() {
      return reactive;
    },
    get release() {
      return release;
    },
    get effect() {
      return effect;
    },
    get raw() {
      return raw;
    },
    version: "3.14.9",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    startObservingMutations,
    stopObservingMutations,
    setReactivityEngine,
    onAttributeRemoved,
    onAttributesAdded,
    closestDataStack,
    skipDuringClone,
    onlyDuringClone,
    addRootSelector,
    addInitSelector,
    interceptClone,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    interceptInit,
    setEvaluator,
    mergeProxies,
    extractProp,
    findClosest,
    onElRemoved,
    closestRoot,
    destroyTree,
    interceptor,
    // INTERNAL: not public API and is subject to change without major release.
    transition,
    // INTERNAL
    setStyles,
    // INTERNAL
    mutateDom,
    directive,
    entangle,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    // INTERNAL
    cloneNode,
    // INTERNAL
    bound: getBinding,
    $data: scope,
    watch,
    walk,
    data,
    bind: bind2
  };
  var alpine_default = Alpine;
  function makeMap(str, expectsLowerCase) {
    const map3 = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i2 = 0; i2 < list.length; i2++) {
      map3[list[i2]] = true;
    }
    return expectsLowerCase ? (val) => !!map3[val.toLowerCase()] : (val) => !!map3[val];
  }
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var cacheStringFunction = (fn2) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn2(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var targetMap = /* @__PURE__ */ new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol(true ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
  function isEffect(fn2) {
    return fn2 && fn2._isEffect === true;
  }
  function effect2(fn2, options = EMPTY_OBJ) {
    if (isEffect(fn2)) {
      fn2 = fn2.raw;
    }
    const effect3 = createReactiveEffect(fn2, options);
    if (!options.lazy) {
      effect3();
    }
    return effect3;
  }
  function stop(effect3) {
    if (effect3.active) {
      cleanup(effect3);
      if (effect3.options.onStop) {
        effect3.options.onStop();
      }
      effect3.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn2, options) {
    const effect3 = function reactiveEffect() {
      if (!effect3.active) {
        return fn2();
      }
      if (!effectStack.includes(effect3)) {
        cleanup(effect3);
        try {
          enableTracking();
          effectStack.push(effect3);
          activeEffect = effect3;
          return fn2();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn2;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
  }
  function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
      for (let i2 = 0; i2 < deps.length; i2++) {
        deps[i2].delete(effect3);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = /* @__PURE__ */ new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects2 = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect3) => {
          if (effect3 !== activeEffect || effect3.allowRecurse) {
            effects2.add(effect3);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect3) => {
      if (effect3.options.onTrigger) {
        effect3.options.onTrigger({
          effect: effect3,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect3.options.scheduler) {
        effect3.options.scheduler(effect3);
      } else {
        effect3();
      }
    };
    effects2.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i2 = 0, l2 = this.length; i2 < l2; i2++) {
          track(arr, "get", i2 + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        const res = toRaw(this)[key].apply(this, args);
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        return isReadonly ? readonly(res) : reactive2(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  function createSetter(shallow = false) {
    return function set32(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      if (true) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      if (true) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var toReactive = (value) => isObject(value) ? reactive2(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v2) => Reflect.getPrototypeOf(v2);
  function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "get", key);
    }
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly = false) {
    const target = this[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "has", key);
    }
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly = false) {
    target = target[
      "__v_raw"
      /* RAW */
    ];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly, isShallow) {
    return function forEach(callback2, thisArg) {
      const observed = this;
      const target = observed[
        "__v_raw"
        /* RAW */
      ];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback2.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
      const target = this[
        "__v_raw"
        /* RAW */
      ];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* CLEAR */
      ),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* CLEAR */
      ),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
  function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value[
      "__v_skip"
      /* SKIP */
    ] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive2(target) {
    if (target && target[
      "__v_isReadonly"
      /* IS_READONLY */
    ]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (true) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target[
      "__v_raw"
      /* RAW */
    ] && !(isReadonly && target[
      "__v_isReactive"
      /* IS_REACTIVE */
    ])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function toRaw(observed) {
    return observed && toRaw(observed[
      "__v_raw"
      /* RAW */
    ]) || observed;
  }
  function isRef(r2) {
    return Boolean(r2 && r2.__v_isRef === true);
  }
  magic("nextTick", () => nextTick);
  magic("dispatch", (el) => dispatch.bind(dispatch, el));
  magic("watch", (el, { evaluateLater: evaluateLater2, cleanup: cleanup2 }) => (key, callback2) => {
    let evaluate2 = evaluateLater2(key);
    let getter = () => {
      let value;
      evaluate2((i2) => value = i2);
      return value;
    };
    let unwatch = watch(getter, callback2);
    cleanup2(unwatch);
  });
  magic("store", getStores);
  magic("data", (el) => scope(el));
  magic("root", (el) => closestRoot(el));
  magic("refs", (el) => {
    if (el._x_refs_proxy)
      return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
  });
  function getArrayOfRefObject(el) {
    let refObjects = [];
    findClosest(el, (i2) => {
      if (i2._x_refs)
        refObjects.push(i2._x_refs);
    });
    return refObjects;
  }
  var globalIdMemo = {};
  function findAndIncrementId(name) {
    if (!globalIdMemo[name])
      globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
  }
  function closestIdRoot(el, name) {
    return findClosest(el, (element) => {
      if (element._x_ids && element._x_ids[name])
        return true;
    });
  }
  function setIdRoot(el, name) {
    if (!el._x_ids)
      el._x_ids = {};
    if (!el._x_ids[name])
      el._x_ids[name] = findAndIncrementId(name);
  }
  magic("id", (el, { cleanup: cleanup2 }) => (name, key = null) => {
    let cacheKey = `${name}${key ? `-${key}` : ""}`;
    return cacheIdByNameOnElement(el, cacheKey, cleanup2, () => {
      let root = closestIdRoot(el, name);
      let id = root ? root._x_ids[name] : findAndIncrementId(name);
      return key ? `${name}-${id}-${key}` : `${name}-${id}`;
    });
  });
  interceptClone((from2, to3) => {
    if (from2._x_id) {
      to3._x_id = from2._x_id;
    }
  });
  function cacheIdByNameOnElement(el, cacheKey, cleanup2, callback2) {
    if (!el._x_id)
      el._x_id = {};
    if (el._x_id[cacheKey])
      return el._x_id[cacheKey];
    let output = callback2();
    el._x_id[cacheKey] = output;
    cleanup2(() => {
      delete el._x_id[cacheKey];
    });
    return output;
  }
  magic("el", (el) => el);
  warnMissingPluginMagic("Focus", "focus", "focus");
  warnMissingPluginMagic("Persist", "persist", "persist");
  function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el) => warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
    let func = evaluateLater2(expression);
    let innerGet = () => {
      let result;
      func((i2) => result = i2);
      return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val) => evaluateInnerSet(() => {
    }, { scope: { "__placeholder": val } });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(() => {
      if (!el._x_model)
        return;
      el._x_removeModelListeners["default"]();
      let outerGet = el._x_model.get;
      let outerSet = el._x_model.set;
      let releaseEntanglement = entangle(
        {
          get() {
            return outerGet();
          },
          set(value) {
            outerSet(value);
          }
        },
        {
          get() {
            return innerGet();
          },
          set(value) {
            innerSet(value);
          }
        }
      );
      cleanup2(releaseEntanglement);
    });
  });
  directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-teleport can only be used on a <template> tag", el);
    let target = getTarget(expression);
    let clone22 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone22;
    clone22._x_teleportBack = el;
    el.setAttribute("data-teleport-template", true);
    clone22.setAttribute("data-teleport-target", true);
    if (el._x_forwardEvents) {
      el._x_forwardEvents.forEach((eventName) => {
        clone22.addEventListener(eventName, (e2) => {
          e2.stopPropagation();
          el.dispatchEvent(new e2.constructor(e2.type, e2));
        });
      });
    }
    addScopeToNode(clone22, {}, el);
    let placeInDom = (clone32, target2, modifiers2) => {
      if (modifiers2.includes("prepend")) {
        target2.parentNode.insertBefore(clone32, target2);
      } else if (modifiers2.includes("append")) {
        target2.parentNode.insertBefore(clone32, target2.nextSibling);
      } else {
        target2.appendChild(clone32);
      }
    };
    mutateDom(() => {
      placeInDom(clone22, target, modifiers);
      skipDuringClone(() => {
        initTree(clone22);
      })();
    });
    el._x_teleportPutBack = () => {
      let target2 = getTarget(expression);
      mutateDom(() => {
        placeInDom(el._x_teleport, target2, modifiers);
      });
    };
    cleanup2(
      () => mutateDom(() => {
        clone22.remove();
        destroyTree(clone22);
      })
    );
  });
  var teleportContainerDuringClone = document.createElement("div");
  function getTarget(expression) {
    let target = skipDuringClone(() => {
      return document.querySelector(expression);
    }, () => {
      return teleportContainerDuringClone;
    })();
    if (!target)
      warn(`Cannot find x-teleport element for selector: "${expression}"`);
    return target;
  }
  var handler = () => {
  };
  handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(() => {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };
  directive("ignore", handler);
  directive("effect", skipDuringClone((el, { expression }, { effect: effect3 }) => {
    effect3(evaluateLater(el, expression));
  }));
  function on2(el, event, modifiers, callback2) {
    let listenerTarget = el;
    let handler4 = (e2) => callback2(e2);
    let options = {};
    let wrapHandler = (callback22, wrapper) => (e2) => wrapper(callback22, e2);
    if (modifiers.includes("dot"))
      event = dotSyntax(event);
    if (modifiers.includes("camel"))
      event = camelCase2(event);
    if (modifiers.includes("passive"))
      options.passive = true;
    if (modifiers.includes("capture"))
      options.capture = true;
    if (modifiers.includes("window"))
      listenerTarget = window;
    if (modifiers.includes("document"))
      listenerTarget = document;
    if (modifiers.includes("debounce")) {
      let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = debounce(handler4, wait);
    }
    if (modifiers.includes("throttle")) {
      let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = throttle(handler4, wait);
    }
    if (modifiers.includes("prevent"))
      handler4 = wrapHandler(handler4, (next, e2) => {
        e2.preventDefault();
        next(e2);
      });
    if (modifiers.includes("stop"))
      handler4 = wrapHandler(handler4, (next, e2) => {
        e2.stopPropagation();
        next(e2);
      });
    if (modifiers.includes("once")) {
      handler4 = wrapHandler(handler4, (next, e2) => {
        next(e2);
        listenerTarget.removeEventListener(event, handler4, options);
      });
    }
    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler4 = wrapHandler(handler4, (next, e2) => {
        if (el.contains(e2.target))
          return;
        if (e2.target.isConnected === false)
          return;
        if (el.offsetWidth < 1 && el.offsetHeight < 1)
          return;
        if (el._x_isShown === false)
          return;
        next(e2);
      });
    }
    if (modifiers.includes("self"))
      handler4 = wrapHandler(handler4, (next, e2) => {
        e2.target === el && next(e2);
      });
    if (isKeyEvent(event) || isClickEvent(event)) {
      handler4 = wrapHandler(handler4, (next, e2) => {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e2, modifiers)) {
          return;
        }
        next(e2);
      });
    }
    listenerTarget.addEventListener(event, handler4, options);
    return () => {
      listenerTarget.removeEventListener(event, handler4, options);
    };
  }
  function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
  }
  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function kebabCase2(subject) {
    if ([" ", "_"].includes(
      subject
    ))
      return subject;
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function isKeyEvent(event) {
    return ["keydown", "keyup"].includes(event);
  }
  function isClickEvent(event) {
    return ["contextmenu", "click", "mouse"].some((i2) => event.includes(i2));
  }
  function isListeningForASpecificKeyThatHasntBeenPressed(e2, modifiers) {
    let keyModifiers = modifiers.filter((i2) => {
      return !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive"].includes(i2);
    });
    if (keyModifiers.includes("debounce")) {
      let debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.includes("throttle")) {
      let debounceIndex = keyModifiers.indexOf("throttle");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0)
      return false;
    if (keyModifiers.length === 1 && keyToModifiers(e2.key).includes(keyModifiers[0]))
      return false;
    const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i2) => !selectedSystemKeyModifiers.includes(i2));
    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
        if (modifier === "cmd" || modifier === "super")
          modifier = "meta";
        return e2[`${modifier}Key`];
      });
      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (isClickEvent(e2.type))
          return false;
        if (keyToModifiers(e2.key).includes(keyModifiers[0]))
          return false;
      }
    }
    return true;
  }
  function keyToModifiers(key) {
    if (!key)
      return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
      "ctrl": "control",
      "slash": "/",
      "space": " ",
      "spacebar": " ",
      "cmd": "meta",
      "esc": "escape",
      "up": "arrow-up",
      "down": "arrow-down",
      "left": "arrow-left",
      "right": "arrow-right",
      "period": ".",
      "comma": ",",
      "equal": "=",
      "minus": "-",
      "underscore": "_"
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier) => {
      if (modifierToKeyMap[modifier] === key)
        return modifier;
    }).filter((modifier) => modifier);
  }
  directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let scopeTarget = el;
    if (modifiers.includes("parent")) {
      scopeTarget = el.parentNode;
    }
    let evaluateGet = evaluateLater(scopeTarget, expression);
    let evaluateSet;
    if (typeof expression === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
    } else if (typeof expression === "function" && typeof expression() === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
    } else {
      evaluateSet = () => {
      };
    }
    let getValue = () => {
      let result;
      evaluateGet((value) => result = value);
      return isGetterSetter(result) ? result.get() : result;
    };
    let setValue = (value) => {
      let result;
      evaluateGet((value2) => result = value2);
      if (isGetterSetter(result)) {
        result.set(value);
      } else {
        evaluateSet(() => {
        }, {
          scope: { "__placeholder": value }
        });
      }
    };
    if (typeof expression === "string" && el.type === "radio") {
      mutateDom(() => {
        if (!el.hasAttribute("name"))
          el.setAttribute("name", expression);
      });
    }
    var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let removeListener2 = isCloning ? () => {
    } : on2(el, event, modifiers, (e2) => {
      setValue(getInputValue(el, modifiers, e2, getValue()));
    });
    if (modifiers.includes("fill")) {
      if ([void 0, null, ""].includes(getValue()) || isCheckbox(el) && Array.isArray(getValue()) || el.tagName.toLowerCase() === "select" && el.multiple) {
        setValue(
          getInputValue(el, modifiers, { target: el }, getValue())
        );
      }
    }
    if (!el._x_removeModelListeners)
      el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener2;
    cleanup2(() => el._x_removeModelListeners["default"]());
    if (el.form) {
      let removeResetListener = on2(el.form, "reset", [], (e2) => {
        nextTick(() => el._x_model && el._x_model.set(getInputValue(el, modifiers, { target: el }, getValue())));
      });
      cleanup2(() => removeResetListener());
    }
    el._x_model = {
      get() {
        return getValue();
      },
      set(value) {
        setValue(value);
      }
    };
    el._x_forceModelUpdate = (value) => {
      if (value === void 0 && typeof expression === "string" && expression.match(/\./))
        value = "";
      window.fromModel = true;
      mutateDom(() => bind(el, "value", value));
      delete window.fromModel;
    };
    effect3(() => {
      let value = getValue();
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
        return;
      el._x_forceModelUpdate(value);
    });
  });
  function getInputValue(el, modifiers, event, currentValue) {
    return mutateDom(() => {
      if (event instanceof CustomEvent && event.detail !== void 0)
        return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
      else if (isCheckbox(el)) {
        if (Array.isArray(currentValue)) {
          let newValue = null;
          if (modifiers.includes("number")) {
            newValue = safeParseNumber(event.target.value);
          } else if (modifiers.includes("boolean")) {
            newValue = safeParseBoolean(event.target.value);
          } else {
            newValue = event.target.value;
          }
          return event.target.checked ? currentValue.includes(newValue) ? currentValue : currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
        if (modifiers.includes("number")) {
          return Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseNumber(rawValue);
          });
        } else if (modifiers.includes("boolean")) {
          return Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseBoolean(rawValue);
          });
        }
        return Array.from(event.target.selectedOptions).map((option) => {
          return option.value || option.text;
        });
      } else {
        let newValue;
        if (isRadio(el)) {
          if (event.target.checked) {
            newValue = event.target.value;
          } else {
            newValue = currentValue;
          }
        } else {
          newValue = event.target.value;
        }
        if (modifiers.includes("number")) {
          return safeParseNumber(newValue);
        } else if (modifiers.includes("boolean")) {
          return safeParseBoolean(newValue);
        } else if (modifiers.includes("trim")) {
          return newValue.trim();
        } else {
          return newValue;
        }
      }
    });
  }
  function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
  }
  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }
  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function isGetterSetter(value) {
    return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
  }
  directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
  addInitSelector(() => `[${prefix("init")}]`);
  directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "string") {
      return !!expression.trim() && evaluate2(expression, {}, false);
    }
    return evaluate2(expression, {}, false);
  }));
  directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.textContent = value;
        });
      });
    });
  });
  directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.innerHTML = value;
          el._x_ignoreSelf = true;
          initTree(el);
          delete el._x_ignoreSelf;
        });
      });
    });
  });
  mapAttributes(startingWith(":", into(prefix("bind:"))));
  var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3, cleanup: cleanup2 }) => {
    if (!value) {
      let bindingProviders = {};
      injectBindingProviders(bindingProviders);
      let getBindings = evaluateLater(el, expression);
      getBindings((bindings) => {
        applyBindingsObject(el, bindings, original);
      }, { scope: bindingProviders });
      return;
    }
    if (value === "key")
      return storeKeyForXFor(el, expression);
    if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
      return;
    }
    let evaluate2 = evaluateLater(el, expression);
    effect3(() => evaluate2((result) => {
      if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
        result = "";
      }
      mutateDom(() => bind(el, value, result, modifiers));
    }));
    cleanup2(() => {
      el._x_undoAddedClasses && el._x_undoAddedClasses();
      el._x_undoAddedStyles && el._x_undoAddedStyles();
    });
  };
  handler2.inline = (el, { value, modifiers, expression }) => {
    if (!value)
      return;
    if (!el._x_inlineBindings)
      el._x_inlineBindings = {};
    el._x_inlineBindings[value] = { expression, extract: false };
  };
  directive("bind", handler2);
  function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
  }
  addRootSelector(() => `[${prefix("data")}]`);
  directive("data", (el, { expression }, { cleanup: cleanup2 }) => {
    if (shouldSkipRegisteringDataDuringClone(el))
      return;
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, { scope: dataProviderContext });
    if (data2 === void 0 || data2 === true)
      data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(() => {
      reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
      undo();
    });
  });
  interceptClone((from2, to3) => {
    if (from2._x_dataStack) {
      to3._x_dataStack = from2._x_dataStack;
      to3.setAttribute("data-has-alpine-state", true);
    }
  });
  function shouldSkipRegisteringDataDuringClone(el) {
    if (!isCloning)
      return false;
    if (isCloningLegacy)
      return true;
    return el.hasAttribute("data-has-alpine-state");
  }
  directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide)
      el._x_doHide = () => {
        mutateDom(() => {
          el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
      };
    if (!el._x_doShow)
      el._x_doShow = () => {
        mutateDom(() => {
          if (el.style.length === 1 && el.style.display === "none") {
            el.removeAttribute("style");
          } else {
            el.style.removeProperty("display");
          }
        });
      };
    let hide = () => {
      el._x_doHide();
      el._x_isShown = false;
    };
    let show = () => {
      el._x_doShow();
      el._x_isShown = true;
    };
    let clickAwayCompatibleShow = () => setTimeout(show);
    let toggle = once(
      (value) => value ? show() : hide(),
      (value) => {
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
          el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        } else {
          value ? clickAwayCompatibleShow() : hide();
        }
      }
    );
    let oldValue;
    let firstTime = true;
    effect3(() => evaluate2((value) => {
      if (!firstTime && value === oldValue)
        return;
      if (modifiers.includes("immediate"))
        value ? clickAwayCompatibleShow() : hide();
      toggle(value);
      oldValue = value;
      firstTime = false;
    }));
  });
  directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(
      el,
      // the x-bind:key expression is stored for our use instead of evaluated.
      el._x_keyExpression || "index"
    );
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(() => {
      Object.values(el._x_lookup).forEach((el2) => mutateDom(
        () => {
          destroyTree(el2);
          el2.remove();
        }
      ));
      delete el._x_prevKeys;
      delete el._x_lookup;
    });
  });
  function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject22 = (i2) => typeof i2 === "object" && !Array.isArray(i2);
    let templateEl = el;
    evaluateItems((items) => {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), (i2) => i2 + 1);
      }
      if (items === void 0)
        items = [];
      let lookup = el._x_lookup;
      let prevKeys = el._x_prevKeys;
      let scopes = [];
      let keys = [];
      if (isObject22(items)) {
        items = Object.entries(items).map(([key, value]) => {
          let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey((value2) => {
            if (keys.includes(value2))
              warn("Duplicate key on x-for", el);
            keys.push(value2);
          }, { scope: { index: key, ...scope2 } });
          scopes.push(scope2);
        });
      } else {
        for (let i2 = 0; i2 < items.length; i2++) {
          let scope2 = getIterationScopeVariables(iteratorNames, items[i2], i2, items);
          evaluateKey((value) => {
            if (keys.includes(value))
              warn("Duplicate key on x-for", el);
            keys.push(value);
          }, { scope: { index: i2, ...scope2 } });
          scopes.push(scope2);
        }
      }
      let adds = [];
      let moves = [];
      let removes = [];
      let sames = [];
      for (let i2 = 0; i2 < prevKeys.length; i2++) {
        let key = prevKeys[i2];
        if (keys.indexOf(key) === -1)
          removes.push(key);
      }
      prevKeys = prevKeys.filter((key) => !removes.includes(key));
      let lastKey = "template";
      for (let i2 = 0; i2 < keys.length; i2++) {
        let key = keys[i2];
        let prevIndex = prevKeys.indexOf(key);
        if (prevIndex === -1) {
          prevKeys.splice(i2, 0, key);
          adds.push([lastKey, i2]);
        } else if (prevIndex !== i2) {
          let keyInSpot = prevKeys.splice(i2, 1)[0];
          let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(i2, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(key);
        }
        lastKey = key;
      }
      for (let i2 = 0; i2 < removes.length; i2++) {
        let key = removes[i2];
        if (!(key in lookup))
          continue;
        mutateDom(() => {
          destroyTree(lookup[key]);
          lookup[key].remove();
        });
        delete lookup[key];
      }
      for (let i2 = 0; i2 < moves.length; i2++) {
        let [keyInSpot, keyForSpot] = moves[i2];
        let elInSpot = lookup[keyInSpot];
        let elForSpot = lookup[keyForSpot];
        let marker = document.createElement("div");
        mutateDom(() => {
          if (!elForSpot)
            warn(`x-for ":key" is undefined or invalid`, templateEl, keyForSpot, lookup);
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
          marker.before(elInSpot);
          elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
          marker.remove();
        });
        elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
      }
      for (let i2 = 0; i2 < adds.length; i2++) {
        let [lastKey2, index2] = adds[i2];
        let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
        if (lastEl._x_currentIfEl)
          lastEl = lastEl._x_currentIfEl;
        let scope2 = scopes[index2];
        let key = keys[index2];
        let clone22 = document.importNode(templateEl.content, true).firstElementChild;
        let reactiveScope = reactive(scope2);
        addScopeToNode(clone22, reactiveScope, templateEl);
        clone22._x_refreshXForScope = (newScope) => {
          Object.entries(newScope).forEach(([key2, value]) => {
            reactiveScope[key2] = value;
          });
        };
        mutateDom(() => {
          lastEl.after(clone22);
          skipDuringClone(() => initTree(clone22))();
        });
        if (typeof key === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }
        lookup[key] = clone22;
      }
      for (let i2 = 0; i2 < sames.length; i2++) {
        lookup[sames[i2]]._x_refreshXForScope(scopes[keys.indexOf(sames[i2])]);
      }
      templateEl._x_prevKeys = keys;
    });
  }
  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch)
      return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }
    return res;
  }
  function getIterationScopeVariables(iteratorNames, item, index2, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      let names2 = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i2) => i2.trim());
      names2.forEach((name, i2) => {
        scopeVariables[name] = item[i2];
      });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
      let names2 = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i2) => i2.trim());
      names2.forEach((name) => {
        scopeVariables[name] = item[name];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }
    if (iteratorNames.index)
      scopeVariables[iteratorNames.index] = index2;
    if (iteratorNames.collection)
      scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }
  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function handler3() {
  }
  handler3.inline = (el, { expression }, { cleanup: cleanup2 }) => {
    let root = closestRoot(el);
    if (!root._x_refs)
      root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(() => delete root._x_refs[expression]);
  };
  directive("ref", handler3);
  directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-if can only be used on a <template> tag", el);
    let evaluate2 = evaluateLater(el, expression);
    let show = () => {
      if (el._x_currentIfEl)
        return el._x_currentIfEl;
      let clone22 = el.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone22, {}, el);
      mutateDom(() => {
        el.after(clone22);
        skipDuringClone(() => initTree(clone22))();
      });
      el._x_currentIfEl = clone22;
      el._x_undoIf = () => {
        mutateDom(() => {
          destroyTree(clone22);
          clone22.remove();
        });
        delete el._x_currentIfEl;
      };
      return clone22;
    };
    let hide = () => {
      if (!el._x_undoIf)
        return;
      el._x_undoIf();
      delete el._x_undoIf;
    };
    effect3(() => evaluate2((value) => {
      value ? show() : hide();
    }));
    cleanup2(() => el._x_undoIf && el._x_undoIf());
  });
  directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
    let names2 = evaluate2(expression);
    names2.forEach((name) => setIdRoot(el, name));
  });
  interceptClone((from2, to3) => {
    if (from2._x_ids) {
      to3._x_ids = from2._x_ids;
    }
  });
  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
    let evaluate2 = expression ? evaluateLater(el, expression) : () => {
    };
    if (el.tagName.toLowerCase() === "template") {
      if (!el._x_forwardEvents)
        el._x_forwardEvents = [];
      if (!el._x_forwardEvents.includes(value))
        el._x_forwardEvents.push(value);
    }
    let removeListener2 = on2(el, value, modifiers, (e2) => {
      evaluate2(() => {
      }, { scope: { "$event": e2 }, params: [e2] });
    });
    cleanup2(() => removeListener2());
  }));
  warnMissingPluginDirective("Collapse", "collapse", "collapse");
  warnMissingPluginDirective("Intersect", "intersect", "intersect");
  warnMissingPluginDirective("Focus", "trap", "focus");
  warnMissingPluginDirective("Mask", "mask", "mask");
  function warnMissingPluginDirective(name, directiveName, slug) {
    directive(directiveName, (el) => warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
  var src_default = alpine_default;
  var module_default = src_default;

  // node_modules/@kurkle/color/dist/color.esm.js
  function round(v2) {
    return v2 + 0.5 | 0;
  }
  var lim = (v2, l2, h3) => Math.max(Math.min(v2, h3), l2);
  function p2b(v2) {
    return lim(round(v2 * 2.55), 0, 255);
  }
  function n2b(v2) {
    return lim(round(v2 * 255), 0, 255);
  }
  function b2n(v2) {
    return lim(round(v2 / 2.55) / 100, 0, 1);
  }
  function n2p(v2) {
    return lim(round(v2 * 100), 0, 100);
  }
  var map$1 = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };
  var hex = [..."0123456789ABCDEF"];
  var h1 = (b2) => hex[b2 & 15];
  var h2 = (b2) => hex[(b2 & 240) >> 4] + hex[b2 & 15];
  var eq = (b2) => (b2 & 240) >> 4 === (b2 & 15);
  var isShort = (v2) => eq(v2.r) && eq(v2.g) && eq(v2.b) && eq(v2.a);
  function hexParse(str) {
    var len = str.length;
    var ret;
    if (str[0] === "#") {
      if (len === 4 || len === 5) {
        ret = {
          r: 255 & map$1[str[1]] * 17,
          g: 255 & map$1[str[2]] * 17,
          b: 255 & map$1[str[3]] * 17,
          a: len === 5 ? map$1[str[4]] * 17 : 255
        };
      } else if (len === 7 || len === 9) {
        ret = {
          r: map$1[str[1]] << 4 | map$1[str[2]],
          g: map$1[str[3]] << 4 | map$1[str[4]],
          b: map$1[str[5]] << 4 | map$1[str[6]],
          a: len === 9 ? map$1[str[7]] << 4 | map$1[str[8]] : 255
        };
      }
    }
    return ret;
  }
  var alpha = (a2, f2) => a2 < 255 ? f2(a2) : "";
  function hexString(v2) {
    var f2 = isShort(v2) ? h1 : h2;
    return v2 ? "#" + f2(v2.r) + f2(v2.g) + f2(v2.b) + alpha(v2.a, f2) : void 0;
  }
  var HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function hsl2rgbn(h3, s2, l2) {
    const a2 = s2 * Math.min(l2, 1 - l2);
    const f2 = (n2, k2 = (n2 + h3 / 30) % 12) => l2 - a2 * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
    return [f2(0), f2(8), f2(4)];
  }
  function hsv2rgbn(h3, s2, v2) {
    const f2 = (n2, k2 = (n2 + h3 / 60) % 6) => v2 - v2 * s2 * Math.max(Math.min(k2, 4 - k2, 1), 0);
    return [f2(5), f2(3), f2(1)];
  }
  function hwb2rgbn(h3, w2, b2) {
    const rgb = hsl2rgbn(h3, 1, 0.5);
    let i2;
    if (w2 + b2 > 1) {
      i2 = 1 / (w2 + b2);
      w2 *= i2;
      b2 *= i2;
    }
    for (i2 = 0; i2 < 3; i2++) {
      rgb[i2] *= 1 - w2 - b2;
      rgb[i2] += w2;
    }
    return rgb;
  }
  function hueValue(r2, g2, b2, d2, max) {
    if (r2 === max) {
      return (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
    }
    if (g2 === max) {
      return (b2 - r2) / d2 + 2;
    }
    return (r2 - g2) / d2 + 4;
  }
  function rgb2hsl(v2) {
    const range = 255;
    const r2 = v2.r / range;
    const g2 = v2.g / range;
    const b2 = v2.b / range;
    const max = Math.max(r2, g2, b2);
    const min = Math.min(r2, g2, b2);
    const l2 = (max + min) / 2;
    let h3, s2, d2;
    if (max !== min) {
      d2 = max - min;
      s2 = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
      h3 = hueValue(r2, g2, b2, d2, max);
      h3 = h3 * 60 + 0.5;
    }
    return [h3 | 0, s2 || 0, l2];
  }
  function calln(f2, a2, b2, c2) {
    return (Array.isArray(a2) ? f2(a2[0], a2[1], a2[2]) : f2(a2, b2, c2)).map(n2b);
  }
  function hsl2rgb(h3, s2, l2) {
    return calln(hsl2rgbn, h3, s2, l2);
  }
  function hwb2rgb(h3, w2, b2) {
    return calln(hwb2rgbn, h3, w2, b2);
  }
  function hsv2rgb(h3, s2, v2) {
    return calln(hsv2rgbn, h3, s2, v2);
  }
  function hue(h3) {
    return (h3 % 360 + 360) % 360;
  }
  function hueParse(str) {
    const m2 = HUE_RE.exec(str);
    let a2 = 255;
    let v2;
    if (!m2) {
      return;
    }
    if (m2[5] !== v2) {
      a2 = m2[6] ? p2b(+m2[5]) : n2b(+m2[5]);
    }
    const h3 = hue(+m2[2]);
    const p1 = +m2[3] / 100;
    const p2 = +m2[4] / 100;
    if (m2[1] === "hwb") {
      v2 = hwb2rgb(h3, p1, p2);
    } else if (m2[1] === "hsv") {
      v2 = hsv2rgb(h3, p1, p2);
    } else {
      v2 = hsl2rgb(h3, p1, p2);
    }
    return {
      r: v2[0],
      g: v2[1],
      b: v2[2],
      a: a2
    };
  }
  function rotate(v2, deg) {
    var h3 = rgb2hsl(v2);
    h3[0] = hue(h3[0] + deg);
    h3 = hsl2rgb(h3);
    v2.r = h3[0];
    v2.g = h3[1];
    v2.b = h3[2];
  }
  function hslString(v2) {
    if (!v2) {
      return;
    }
    const a2 = rgb2hsl(v2);
    const h3 = a2[0];
    const s2 = n2p(a2[1]);
    const l2 = n2p(a2[2]);
    return v2.a < 255 ? `hsla(${h3}, ${s2}%, ${l2}%, ${b2n(v2.a)})` : `hsl(${h3}, ${s2}%, ${l2}%)`;
  }
  var map = {
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
    J: "wh"
  };
  var names$1 = {
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
    LwgYF: "9acd32"
  };
  function unpack() {
    const unpacked = {};
    const keys = Object.keys(names$1);
    const tkeys = Object.keys(map);
    let i2, j2, k2, ok, nk;
    for (i2 = 0; i2 < keys.length; i2++) {
      ok = nk = keys[i2];
      for (j2 = 0; j2 < tkeys.length; j2++) {
        k2 = tkeys[j2];
        nk = nk.replace(k2, map[k2]);
      }
      k2 = parseInt(names$1[ok], 16);
      unpacked[nk] = [k2 >> 16 & 255, k2 >> 8 & 255, k2 & 255];
    }
    return unpacked;
  }
  var names;
  function nameParse(str) {
    if (!names) {
      names = unpack();
      names.transparent = [0, 0, 0, 0];
    }
    const a2 = names[str.toLowerCase()];
    return a2 && {
      r: a2[0],
      g: a2[1],
      b: a2[2],
      a: a2.length === 4 ? a2[3] : 255
    };
  }
  var RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  function rgbParse(str) {
    const m2 = RGB_RE.exec(str);
    let a2 = 255;
    let r2, g2, b2;
    if (!m2) {
      return;
    }
    if (m2[7] !== r2) {
      const v2 = +m2[7];
      a2 = m2[8] ? p2b(v2) : lim(v2 * 255, 0, 255);
    }
    r2 = +m2[1];
    g2 = +m2[3];
    b2 = +m2[5];
    r2 = 255 & (m2[2] ? p2b(r2) : lim(r2, 0, 255));
    g2 = 255 & (m2[4] ? p2b(g2) : lim(g2, 0, 255));
    b2 = 255 & (m2[6] ? p2b(b2) : lim(b2, 0, 255));
    return {
      r: r2,
      g: g2,
      b: b2,
      a: a2
    };
  }
  function rgbString(v2) {
    return v2 && (v2.a < 255 ? `rgba(${v2.r}, ${v2.g}, ${v2.b}, ${b2n(v2.a)})` : `rgb(${v2.r}, ${v2.g}, ${v2.b})`);
  }
  var to2 = (v2) => v2 <= 31308e-7 ? v2 * 12.92 : Math.pow(v2, 1 / 2.4) * 1.055 - 0.055;
  var from = (v2) => v2 <= 0.04045 ? v2 / 12.92 : Math.pow((v2 + 0.055) / 1.055, 2.4);
  function interpolate(rgb1, rgb2, t3) {
    const r2 = from(b2n(rgb1.r));
    const g2 = from(b2n(rgb1.g));
    const b2 = from(b2n(rgb1.b));
    return {
      r: n2b(to2(r2 + t3 * (from(b2n(rgb2.r)) - r2))),
      g: n2b(to2(g2 + t3 * (from(b2n(rgb2.g)) - g2))),
      b: n2b(to2(b2 + t3 * (from(b2n(rgb2.b)) - b2))),
      a: rgb1.a + t3 * (rgb2.a - rgb1.a)
    };
  }
  function modHSL(v2, i2, ratio) {
    if (v2) {
      let tmp = rgb2hsl(v2);
      tmp[i2] = Math.max(0, Math.min(tmp[i2] + tmp[i2] * ratio, i2 === 0 ? 360 : 1));
      tmp = hsl2rgb(tmp);
      v2.r = tmp[0];
      v2.g = tmp[1];
      v2.b = tmp[2];
    }
  }
  function clone2(v2, proto) {
    return v2 ? Object.assign(proto || {}, v2) : v2;
  }
  function fromObject(input) {
    var v2 = { r: 0, g: 0, b: 0, a: 255 };
    if (Array.isArray(input)) {
      if (input.length >= 3) {
        v2 = { r: input[0], g: input[1], b: input[2], a: 255 };
        if (input.length > 3) {
          v2.a = n2b(input[3]);
        }
      }
    } else {
      v2 = clone2(input, { r: 0, g: 0, b: 0, a: 1 });
      v2.a = n2b(v2.a);
    }
    return v2;
  }
  function functionParse(str) {
    if (str.charAt(0) === "r") {
      return rgbParse(str);
    }
    return hueParse(str);
  }
  var Color = class _Color {
    constructor(input) {
      if (input instanceof _Color) {
        return input;
      }
      const type = typeof input;
      let v2;
      if (type === "object") {
        v2 = fromObject(input);
      } else if (type === "string") {
        v2 = hexParse(input) || nameParse(input) || functionParse(input);
      }
      this._rgb = v2;
      this._valid = !!v2;
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var v2 = clone2(this._rgb);
      if (v2) {
        v2.a = b2n(v2.a);
      }
      return v2;
    }
    set rgb(obj) {
      this._rgb = fromObject(obj);
    }
    rgbString() {
      return this._valid ? rgbString(this._rgb) : void 0;
    }
    hexString() {
      return this._valid ? hexString(this._rgb) : void 0;
    }
    hslString() {
      return this._valid ? hslString(this._rgb) : void 0;
    }
    mix(color2, weight) {
      if (color2) {
        const c1 = this.rgb;
        const c2 = color2.rgb;
        let w2;
        const p2 = weight === w2 ? 0.5 : weight;
        const w3 = 2 * p2 - 1;
        const a2 = c1.a - c2.a;
        const w1 = ((w3 * a2 === -1 ? w3 : (w3 + a2) / (1 + w3 * a2)) + 1) / 2;
        w2 = 1 - w1;
        c1.r = 255 & w1 * c1.r + w2 * c2.r + 0.5;
        c1.g = 255 & w1 * c1.g + w2 * c2.g + 0.5;
        c1.b = 255 & w1 * c1.b + w2 * c2.b + 0.5;
        c1.a = p2 * c1.a + (1 - p2) * c2.a;
        this.rgb = c1;
      }
      return this;
    }
    interpolate(color2, t3) {
      if (color2) {
        this._rgb = interpolate(this._rgb, color2._rgb, t3);
      }
      return this;
    }
    clone() {
      return new _Color(this.rgb);
    }
    alpha(a2) {
      this._rgb.a = n2b(a2);
      return this;
    }
    clearer(ratio) {
      const rgb = this._rgb;
      rgb.a *= 1 - ratio;
      return this;
    }
    greyscale() {
      const rgb = this._rgb;
      const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
      rgb.r = rgb.g = rgb.b = val;
      return this;
    }
    opaquer(ratio) {
      const rgb = this._rgb;
      rgb.a *= 1 + ratio;
      return this;
    }
    negate() {
      const v2 = this._rgb;
      v2.r = 255 - v2.r;
      v2.g = 255 - v2.g;
      v2.b = 255 - v2.b;
      return this;
    }
    lighten(ratio) {
      modHSL(this._rgb, 2, ratio);
      return this;
    }
    darken(ratio) {
      modHSL(this._rgb, 2, -ratio);
      return this;
    }
    saturate(ratio) {
      modHSL(this._rgb, 1, ratio);
      return this;
    }
    desaturate(ratio) {
      modHSL(this._rgb, 1, -ratio);
      return this;
    }
    rotate(deg) {
      rotate(this._rgb, deg);
      return this;
    }
  };

  // node_modules/chart.js/dist/chunks/helpers.dataset.js
  function noop() {
  }
  var uid2 = /* @__PURE__ */ (() => {
    let id = 0;
    return () => id++;
  })();
  function isNullOrUndef(value) {
    return value === null || value === void 0;
  }
  function isArray2(value) {
    if (Array.isArray && Array.isArray(value)) {
      return true;
    }
    const type = Object.prototype.toString.call(value);
    if (type.slice(0, 7) === "[object" && type.slice(-6) === "Array]") {
      return true;
    }
    return false;
  }
  function isObject2(value) {
    return value !== null && Object.prototype.toString.call(value) === "[object Object]";
  }
  function isNumberFinite(value) {
    return (typeof value === "number" || value instanceof Number) && isFinite(+value);
  }
  function finiteOrDefault(value, defaultValue) {
    return isNumberFinite(value) ? value : defaultValue;
  }
  function valueOrDefault(value, defaultValue) {
    return typeof value === "undefined" ? defaultValue : value;
  }
  var toPercentage = (value, dimension) => typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 : +value / dimension;
  var toDimension = (value, dimension) => typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 * dimension : +value;
  function callback(fn2, args, thisArg) {
    if (fn2 && typeof fn2.call === "function") {
      return fn2.apply(thisArg, args);
    }
  }
  function each(loopable, fn2, thisArg, reverse) {
    let i2, len, keys;
    if (isArray2(loopable)) {
      len = loopable.length;
      if (reverse) {
        for (i2 = len - 1; i2 >= 0; i2--) {
          fn2.call(thisArg, loopable[i2], i2);
        }
      } else {
        for (i2 = 0; i2 < len; i2++) {
          fn2.call(thisArg, loopable[i2], i2);
        }
      }
    } else if (isObject2(loopable)) {
      keys = Object.keys(loopable);
      len = keys.length;
      for (i2 = 0; i2 < len; i2++) {
        fn2.call(thisArg, loopable[keys[i2]], keys[i2]);
      }
    }
  }
  function _elementsEqual(a0, a1) {
    let i2, ilen, v0, v1;
    if (!a0 || !a1 || a0.length !== a1.length) {
      return false;
    }
    for (i2 = 0, ilen = a0.length; i2 < ilen; ++i2) {
      v0 = a0[i2];
      v1 = a1[i2];
      if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
        return false;
      }
    }
    return true;
  }
  function clone3(source) {
    if (isArray2(source)) {
      return source.map(clone3);
    }
    if (isObject2(source)) {
      const target = /* @__PURE__ */ Object.create(null);
      const keys = Object.keys(source);
      const klen = keys.length;
      let k2 = 0;
      for (; k2 < klen; ++k2) {
        target[keys[k2]] = clone3(source[keys[k2]]);
      }
      return target;
    }
    return source;
  }
  function isValidKey(key) {
    return [
      "__proto__",
      "prototype",
      "constructor"
    ].indexOf(key) === -1;
  }
  function _merger(key, target, source, options) {
    if (!isValidKey(key)) {
      return;
    }
    const tval = target[key];
    const sval = source[key];
    if (isObject2(tval) && isObject2(sval)) {
      merge(tval, sval, options);
    } else {
      target[key] = clone3(sval);
    }
  }
  function merge(target, source, options) {
    const sources = isArray2(source) ? source : [
      source
    ];
    const ilen = sources.length;
    if (!isObject2(target)) {
      return target;
    }
    options = options || {};
    const merger = options.merger || _merger;
    let current;
    for (let i2 = 0; i2 < ilen; ++i2) {
      current = sources[i2];
      if (!isObject2(current)) {
        continue;
      }
      const keys = Object.keys(current);
      for (let k2 = 0, klen = keys.length; k2 < klen; ++k2) {
        merger(keys[k2], target, current, options);
      }
    }
    return target;
  }
  function mergeIf(target, source) {
    return merge(target, source, {
      merger: _mergerIf
    });
  }
  function _mergerIf(key, target, source) {
    if (!isValidKey(key)) {
      return;
    }
    const tval = target[key];
    const sval = source[key];
    if (isObject2(tval) && isObject2(sval)) {
      mergeIf(tval, sval);
    } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
      target[key] = clone3(sval);
    }
  }
  var keyResolvers = {
    // Chart.helpers.core resolveObjectKey should resolve empty key to root object
    "": (v2) => v2,
    // default resolvers
    x: (o2) => o2.x,
    y: (o2) => o2.y
  };
  function _splitKey(key) {
    const parts = key.split(".");
    const keys = [];
    let tmp = "";
    for (const part of parts) {
      tmp += part;
      if (tmp.endsWith("\\")) {
        tmp = tmp.slice(0, -1) + ".";
      } else {
        keys.push(tmp);
        tmp = "";
      }
    }
    return keys;
  }
  function _getKeyResolver(key) {
    const keys = _splitKey(key);
    return (obj) => {
      for (const k2 of keys) {
        if (k2 === "") {
          break;
        }
        obj = obj && obj[k2];
      }
      return obj;
    };
  }
  function resolveObjectKey(obj, key) {
    const resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
    return resolver(obj);
  }
  function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  var defined = (value) => typeof value !== "undefined";
  var isFunction = (value) => typeof value === "function";
  var setsEqual = (a2, b2) => {
    if (a2.size !== b2.size) {
      return false;
    }
    for (const item of a2) {
      if (!b2.has(item)) {
        return false;
      }
    }
    return true;
  };
  function _isClickEvent(e2) {
    return e2.type === "mouseup" || e2.type === "click" || e2.type === "contextmenu";
  }
  var PI = Math.PI;
  var TAU = 2 * PI;
  var PITAU = TAU + PI;
  var INFINITY = Number.POSITIVE_INFINITY;
  var RAD_PER_DEG = PI / 180;
  var HALF_PI = PI / 2;
  var QUARTER_PI = PI / 4;
  var TWO_THIRDS_PI = PI * 2 / 3;
  var log10 = Math.log10;
  var sign = Math.sign;
  function almostEquals(x2, y2, epsilon) {
    return Math.abs(x2 - y2) < epsilon;
  }
  function niceNum(range) {
    const roundedRange = Math.round(range);
    range = almostEquals(range, roundedRange, range / 1e3) ? roundedRange : range;
    const niceRange = Math.pow(10, Math.floor(log10(range)));
    const fraction = range / niceRange;
    const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return niceFraction * niceRange;
  }
  function _factorize(value) {
    const result = [];
    const sqrt = Math.sqrt(value);
    let i2;
    for (i2 = 1; i2 < sqrt; i2++) {
      if (value % i2 === 0) {
        result.push(i2);
        result.push(value / i2);
      }
    }
    if (sqrt === (sqrt | 0)) {
      result.push(sqrt);
    }
    result.sort((a2, b2) => a2 - b2).pop();
    return result;
  }
  function isNonPrimitive(n2) {
    return typeof n2 === "symbol" || typeof n2 === "object" && n2 !== null && !(Symbol.toPrimitive in n2 || "toString" in n2 || "valueOf" in n2);
  }
  function isNumber(n2) {
    return !isNonPrimitive(n2) && !isNaN(parseFloat(n2)) && isFinite(n2);
  }
  function almostWhole(x2, epsilon) {
    const rounded = Math.round(x2);
    return rounded - epsilon <= x2 && rounded + epsilon >= x2;
  }
  function _setMinAndMaxByKey(array, target, property) {
    let i2, ilen, value;
    for (i2 = 0, ilen = array.length; i2 < ilen; i2++) {
      value = array[i2][property];
      if (!isNaN(value)) {
        target.min = Math.min(target.min, value);
        target.max = Math.max(target.max, value);
      }
    }
  }
  function toRadians(degrees) {
    return degrees * (PI / 180);
  }
  function toDegrees(radians) {
    return radians * (180 / PI);
  }
  function _decimalPlaces(x2) {
    if (!isNumberFinite(x2)) {
      return;
    }
    let e2 = 1;
    let p2 = 0;
    while (Math.round(x2 * e2) / e2 !== x2) {
      e2 *= 10;
      p2++;
    }
    return p2;
  }
  function getAngleFromPoint(centrePoint, anglePoint) {
    const distanceFromXCenter = anglePoint.x - centrePoint.x;
    const distanceFromYCenter = anglePoint.y - centrePoint.y;
    const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
    if (angle < -0.5 * PI) {
      angle += TAU;
    }
    return {
      angle,
      distance: radialDistanceFromCenter
    };
  }
  function distanceBetweenPoints(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
  }
  function _angleDiff(a2, b2) {
    return (a2 - b2 + PITAU) % TAU - PI;
  }
  function _normalizeAngle(a2) {
    return (a2 % TAU + TAU) % TAU;
  }
  function _angleBetween(angle, start2, end, sameAngleIsFullCircle) {
    const a2 = _normalizeAngle(angle);
    const s2 = _normalizeAngle(start2);
    const e2 = _normalizeAngle(end);
    const angleToStart = _normalizeAngle(s2 - a2);
    const angleToEnd = _normalizeAngle(e2 - a2);
    const startToAngle = _normalizeAngle(a2 - s2);
    const endToAngle = _normalizeAngle(a2 - e2);
    return a2 === s2 || a2 === e2 || sameAngleIsFullCircle && s2 === e2 || angleToStart > angleToEnd && startToAngle < endToAngle;
  }
  function _limitValue(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  function _int16Range(value) {
    return _limitValue(value, -32768, 32767);
  }
  function _isBetween(value, start2, end, epsilon = 1e-6) {
    return value >= Math.min(start2, end) - epsilon && value <= Math.max(start2, end) + epsilon;
  }
  function _lookup(table, value, cmp) {
    cmp = cmp || ((index2) => table[index2] < value);
    let hi2 = table.length - 1;
    let lo = 0;
    let mid;
    while (hi2 - lo > 1) {
      mid = lo + hi2 >> 1;
      if (cmp(mid)) {
        lo = mid;
      } else {
        hi2 = mid;
      }
    }
    return {
      lo,
      hi: hi2
    };
  }
  var _lookupByKey = (table, key, value, last) => _lookup(table, value, last ? (index2) => {
    const ti2 = table[index2][key];
    return ti2 < value || ti2 === value && table[index2 + 1][key] === value;
  } : (index2) => table[index2][key] < value);
  var _rlookupByKey = (table, key, value) => _lookup(table, value, (index2) => table[index2][key] >= value);
  function _filterBetween(values, min, max) {
    let start2 = 0;
    let end = values.length;
    while (start2 < end && values[start2] < min) {
      start2++;
    }
    while (end > start2 && values[end - 1] > max) {
      end--;
    }
    return start2 > 0 || end < values.length ? values.slice(start2, end) : values;
  }
  var arrayEvents = [
    "push",
    "pop",
    "shift",
    "splice",
    "unshift"
  ];
  function listenArrayEvents(array, listener) {
    if (array._chartjs) {
      array._chartjs.listeners.push(listener);
      return;
    }
    Object.defineProperty(array, "_chartjs", {
      configurable: true,
      enumerable: false,
      value: {
        listeners: [
          listener
        ]
      }
    });
    arrayEvents.forEach((key) => {
      const method = "_onData" + _capitalize(key);
      const base = array[key];
      Object.defineProperty(array, key, {
        configurable: true,
        enumerable: false,
        value(...args) {
          const res = base.apply(this, args);
          array._chartjs.listeners.forEach((object) => {
            if (typeof object[method] === "function") {
              object[method](...args);
            }
          });
          return res;
        }
      });
    });
  }
  function unlistenArrayEvents(array, listener) {
    const stub = array._chartjs;
    if (!stub) {
      return;
    }
    const listeners = stub.listeners;
    const index2 = listeners.indexOf(listener);
    if (index2 !== -1) {
      listeners.splice(index2, 1);
    }
    if (listeners.length > 0) {
      return;
    }
    arrayEvents.forEach((key) => {
      delete array[key];
    });
    delete array._chartjs;
  }
  function _arrayUnique(items) {
    const set4 = new Set(items);
    if (set4.size === items.length) {
      return items;
    }
    return Array.from(set4);
  }
  var requestAnimFrame = function() {
    if (typeof window === "undefined") {
      return function(callback2) {
        return callback2();
      };
    }
    return window.requestAnimationFrame;
  }();
  function throttled(fn2, thisArg) {
    let argsToUse = [];
    let ticking = false;
    return function(...args) {
      argsToUse = args;
      if (!ticking) {
        ticking = true;
        requestAnimFrame.call(window, () => {
          ticking = false;
          fn2.apply(thisArg, argsToUse);
        });
      }
    };
  }
  function debounce2(fn2, delay) {
    let timeout;
    return function(...args) {
      if (delay) {
        clearTimeout(timeout);
        timeout = setTimeout(fn2, delay, args);
      } else {
        fn2.apply(this, args);
      }
      return delay;
    };
  }
  var _toLeftRightCenter = (align) => align === "start" ? "left" : align === "end" ? "right" : "center";
  var _alignStartEnd = (align, start2, end) => align === "start" ? start2 : align === "end" ? end : (start2 + end) / 2;
  var _textX = (align, left, right, rtl) => {
    const check = rtl ? "left" : "right";
    return align === check ? right : align === "center" ? (left + right) / 2 : left;
  };
  function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
    const pointCount = points.length;
    let start2 = 0;
    let count = pointCount;
    if (meta._sorted) {
      const { iScale, vScale, _parsed } = meta;
      const spanGaps = meta.dataset ? meta.dataset.options ? meta.dataset.options.spanGaps : null : null;
      const axis = iScale.axis;
      const { min, max, minDefined, maxDefined } = iScale.getUserBounds();
      if (minDefined) {
        start2 = Math.min(
          // @ts-expect-error Need to type _parsed
          _lookupByKey(_parsed, axis, min).lo,
          // @ts-expect-error Need to fix types on _lookupByKey
          animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo
        );
        if (spanGaps) {
          const distanceToDefinedLo = _parsed.slice(0, start2 + 1).reverse().findIndex((point) => !isNullOrUndef(point[vScale.axis]));
          start2 -= Math.max(0, distanceToDefinedLo);
        }
        start2 = _limitValue(start2, 0, pointCount - 1);
      }
      if (maxDefined) {
        let end = Math.max(
          // @ts-expect-error Need to type _parsed
          _lookupByKey(_parsed, iScale.axis, max, true).hi + 1,
          // @ts-expect-error Need to fix types on _lookupByKey
          animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max), true).hi + 1
        );
        if (spanGaps) {
          const distanceToDefinedHi = _parsed.slice(end - 1).findIndex((point) => !isNullOrUndef(point[vScale.axis]));
          end += Math.max(0, distanceToDefinedHi);
        }
        count = _limitValue(end, start2, pointCount) - start2;
      } else {
        count = pointCount - start2;
      }
    }
    return {
      start: start2,
      count
    };
  }
  function _scaleRangesChanged(meta) {
    const { xScale, yScale, _scaleRanges } = meta;
    const newRanges = {
      xmin: xScale.min,
      xmax: xScale.max,
      ymin: yScale.min,
      ymax: yScale.max
    };
    if (!_scaleRanges) {
      meta._scaleRanges = newRanges;
      return true;
    }
    const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
    Object.assign(_scaleRanges, newRanges);
    return changed;
  }
  var atEdge = (t3) => t3 === 0 || t3 === 1;
  var elasticIn = (t3, s2, p2) => -(Math.pow(2, 10 * (t3 -= 1)) * Math.sin((t3 - s2) * TAU / p2));
  var elasticOut = (t3, s2, p2) => Math.pow(2, -10 * t3) * Math.sin((t3 - s2) * TAU / p2) + 1;
  var effects = {
    linear: (t3) => t3,
    easeInQuad: (t3) => t3 * t3,
    easeOutQuad: (t3) => -t3 * (t3 - 2),
    easeInOutQuad: (t3) => (t3 /= 0.5) < 1 ? 0.5 * t3 * t3 : -0.5 * (--t3 * (t3 - 2) - 1),
    easeInCubic: (t3) => t3 * t3 * t3,
    easeOutCubic: (t3) => (t3 -= 1) * t3 * t3 + 1,
    easeInOutCubic: (t3) => (t3 /= 0.5) < 1 ? 0.5 * t3 * t3 * t3 : 0.5 * ((t3 -= 2) * t3 * t3 + 2),
    easeInQuart: (t3) => t3 * t3 * t3 * t3,
    easeOutQuart: (t3) => -((t3 -= 1) * t3 * t3 * t3 - 1),
    easeInOutQuart: (t3) => (t3 /= 0.5) < 1 ? 0.5 * t3 * t3 * t3 * t3 : -0.5 * ((t3 -= 2) * t3 * t3 * t3 - 2),
    easeInQuint: (t3) => t3 * t3 * t3 * t3 * t3,
    easeOutQuint: (t3) => (t3 -= 1) * t3 * t3 * t3 * t3 + 1,
    easeInOutQuint: (t3) => (t3 /= 0.5) < 1 ? 0.5 * t3 * t3 * t3 * t3 * t3 : 0.5 * ((t3 -= 2) * t3 * t3 * t3 * t3 + 2),
    easeInSine: (t3) => -Math.cos(t3 * HALF_PI) + 1,
    easeOutSine: (t3) => Math.sin(t3 * HALF_PI),
    easeInOutSine: (t3) => -0.5 * (Math.cos(PI * t3) - 1),
    easeInExpo: (t3) => t3 === 0 ? 0 : Math.pow(2, 10 * (t3 - 1)),
    easeOutExpo: (t3) => t3 === 1 ? 1 : -Math.pow(2, -10 * t3) + 1,
    easeInOutExpo: (t3) => atEdge(t3) ? t3 : t3 < 0.5 ? 0.5 * Math.pow(2, 10 * (t3 * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t3 * 2 - 1)) + 2),
    easeInCirc: (t3) => t3 >= 1 ? t3 : -(Math.sqrt(1 - t3 * t3) - 1),
    easeOutCirc: (t3) => Math.sqrt(1 - (t3 -= 1) * t3),
    easeInOutCirc: (t3) => (t3 /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t3 * t3) - 1) : 0.5 * (Math.sqrt(1 - (t3 -= 2) * t3) + 1),
    easeInElastic: (t3) => atEdge(t3) ? t3 : elasticIn(t3, 0.075, 0.3),
    easeOutElastic: (t3) => atEdge(t3) ? t3 : elasticOut(t3, 0.075, 0.3),
    easeInOutElastic(t3) {
      const s2 = 0.1125;
      const p2 = 0.45;
      return atEdge(t3) ? t3 : t3 < 0.5 ? 0.5 * elasticIn(t3 * 2, s2, p2) : 0.5 + 0.5 * elasticOut(t3 * 2 - 1, s2, p2);
    },
    easeInBack(t3) {
      const s2 = 1.70158;
      return t3 * t3 * ((s2 + 1) * t3 - s2);
    },
    easeOutBack(t3) {
      const s2 = 1.70158;
      return (t3 -= 1) * t3 * ((s2 + 1) * t3 + s2) + 1;
    },
    easeInOutBack(t3) {
      let s2 = 1.70158;
      if ((t3 /= 0.5) < 1) {
        return 0.5 * (t3 * t3 * (((s2 *= 1.525) + 1) * t3 - s2));
      }
      return 0.5 * ((t3 -= 2) * t3 * (((s2 *= 1.525) + 1) * t3 + s2) + 2);
    },
    easeInBounce: (t3) => 1 - effects.easeOutBounce(1 - t3),
    easeOutBounce(t3) {
      const m2 = 7.5625;
      const d2 = 2.75;
      if (t3 < 1 / d2) {
        return m2 * t3 * t3;
      }
      if (t3 < 2 / d2) {
        return m2 * (t3 -= 1.5 / d2) * t3 + 0.75;
      }
      if (t3 < 2.5 / d2) {
        return m2 * (t3 -= 2.25 / d2) * t3 + 0.9375;
      }
      return m2 * (t3 -= 2.625 / d2) * t3 + 0.984375;
    },
    easeInOutBounce: (t3) => t3 < 0.5 ? effects.easeInBounce(t3 * 2) * 0.5 : effects.easeOutBounce(t3 * 2 - 1) * 0.5 + 0.5
  };
  function isPatternOrGradient(value) {
    if (value && typeof value === "object") {
      const type = value.toString();
      return type === "[object CanvasPattern]" || type === "[object CanvasGradient]";
    }
    return false;
  }
  function color(value) {
    return isPatternOrGradient(value) ? value : new Color(value);
  }
  function getHoverColor(value) {
    return isPatternOrGradient(value) ? value : new Color(value).saturate(0.5).darken(0.1).hexString();
  }
  var numbers = [
    "x",
    "y",
    "borderWidth",
    "radius",
    "tension"
  ];
  var colors = [
    "color",
    "borderColor",
    "backgroundColor"
  ];
  function applyAnimationsDefaults(defaults2) {
    defaults2.set("animation", {
      delay: void 0,
      duration: 1e3,
      easing: "easeOutQuart",
      fn: void 0,
      from: void 0,
      loop: void 0,
      to: void 0,
      type: void 0
    });
    defaults2.describe("animation", {
      _fallback: false,
      _indexable: false,
      _scriptable: (name) => name !== "onProgress" && name !== "onComplete" && name !== "fn"
    });
    defaults2.set("animations", {
      colors: {
        type: "color",
        properties: colors
      },
      numbers: {
        type: "number",
        properties: numbers
      }
    });
    defaults2.describe("animations", {
      _fallback: "animation"
    });
    defaults2.set("transitions", {
      active: {
        animation: {
          duration: 400
        }
      },
      resize: {
        animation: {
          duration: 0
        }
      },
      show: {
        animations: {
          colors: {
            from: "transparent"
          },
          visible: {
            type: "boolean",
            duration: 0
          }
        }
      },
      hide: {
        animations: {
          colors: {
            to: "transparent"
          },
          visible: {
            type: "boolean",
            easing: "linear",
            fn: (v2) => v2 | 0
          }
        }
      }
    });
  }
  function applyLayoutsDefaults(defaults2) {
    defaults2.set("layout", {
      autoPadding: true,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    });
  }
  var intlCache = /* @__PURE__ */ new Map();
  function getNumberFormat(locale, options) {
    options = options || {};
    const cacheKey = locale + JSON.stringify(options);
    let formatter = intlCache.get(cacheKey);
    if (!formatter) {
      formatter = new Intl.NumberFormat(locale, options);
      intlCache.set(cacheKey, formatter);
    }
    return formatter;
  }
  function formatNumber(num, locale, options) {
    return getNumberFormat(locale, options).format(num);
  }
  var formatters = {
    values(value) {
      return isArray2(value) ? value : "" + value;
    },
    numeric(tickValue, index2, ticks) {
      if (tickValue === 0) {
        return "0";
      }
      const locale = this.chart.options.locale;
      let notation;
      let delta = tickValue;
      if (ticks.length > 1) {
        const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
        if (maxTick < 1e-4 || maxTick > 1e15) {
          notation = "scientific";
        }
        delta = calculateDelta(tickValue, ticks);
      }
      const logDelta = log10(Math.abs(delta));
      const numDecimal = isNaN(logDelta) ? 1 : Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
      const options = {
        notation,
        minimumFractionDigits: numDecimal,
        maximumFractionDigits: numDecimal
      };
      Object.assign(options, this.options.ticks.format);
      return formatNumber(tickValue, locale, options);
    },
    logarithmic(tickValue, index2, ticks) {
      if (tickValue === 0) {
        return "0";
      }
      const remain = ticks[index2].significand || tickValue / Math.pow(10, Math.floor(log10(tickValue)));
      if ([
        1,
        2,
        3,
        5,
        10,
        15
      ].includes(remain) || index2 > 0.8 * ticks.length) {
        return formatters.numeric.call(this, tickValue, index2, ticks);
      }
      return "";
    }
  };
  function calculateDelta(tickValue, ticks) {
    let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
    if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
      delta = tickValue - Math.floor(tickValue);
    }
    return delta;
  }
  var Ticks = {
    formatters
  };
  function applyScaleDefaults(defaults2) {
    defaults2.set("scale", {
      display: true,
      offset: false,
      reverse: false,
      beginAtZero: false,
      bounds: "ticks",
      clip: true,
      grace: 0,
      grid: {
        display: true,
        lineWidth: 1,
        drawOnChartArea: true,
        drawTicks: true,
        tickLength: 8,
        tickWidth: (_ctx, options) => options.lineWidth,
        tickColor: (_ctx, options) => options.color,
        offset: false
      },
      border: {
        display: true,
        dash: [],
        dashOffset: 0,
        width: 1
      },
      title: {
        display: false,
        text: "",
        padding: {
          top: 4,
          bottom: 4
        }
      },
      ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: false,
        textStrokeWidth: 0,
        textStrokeColor: "",
        padding: 3,
        display: true,
        autoSkip: true,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: Ticks.formatters.values,
        minor: {},
        major: {},
        align: "center",
        crossAlign: "near",
        showLabelBackdrop: false,
        backdropColor: "rgba(255, 255, 255, 0.75)",
        backdropPadding: 2
      }
    });
    defaults2.route("scale.ticks", "color", "", "color");
    defaults2.route("scale.grid", "color", "", "borderColor");
    defaults2.route("scale.border", "color", "", "borderColor");
    defaults2.route("scale.title", "color", "", "color");
    defaults2.describe("scale", {
      _fallback: false,
      _scriptable: (name) => !name.startsWith("before") && !name.startsWith("after") && name !== "callback" && name !== "parser",
      _indexable: (name) => name !== "borderDash" && name !== "tickBorderDash" && name !== "dash"
    });
    defaults2.describe("scales", {
      _fallback: "scale"
    });
    defaults2.describe("scale.ticks", {
      _scriptable: (name) => name !== "backdropPadding" && name !== "callback",
      _indexable: (name) => name !== "backdropPadding"
    });
  }
  var overrides = /* @__PURE__ */ Object.create(null);
  var descriptors = /* @__PURE__ */ Object.create(null);
  function getScope$1(node, key) {
    if (!key) {
      return node;
    }
    const keys = key.split(".");
    for (let i2 = 0, n2 = keys.length; i2 < n2; ++i2) {
      const k2 = keys[i2];
      node = node[k2] || (node[k2] = /* @__PURE__ */ Object.create(null));
    }
    return node;
  }
  function set3(root, scope2, values) {
    if (typeof scope2 === "string") {
      return merge(getScope$1(root, scope2), values);
    }
    return merge(getScope$1(root, ""), scope2);
  }
  var Defaults = class {
    constructor(_descriptors2, _appliers) {
      this.animation = void 0;
      this.backgroundColor = "rgba(0,0,0,0.1)";
      this.borderColor = "rgba(0,0,0,0.1)";
      this.color = "#666";
      this.datasets = {};
      this.devicePixelRatio = (context) => context.chart.platform.getDevicePixelRatio();
      this.elements = {};
      this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove"
      ];
      this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null
      };
      this.hover = {};
      this.hoverBackgroundColor = (ctx, options) => getHoverColor(options.backgroundColor);
      this.hoverBorderColor = (ctx, options) => getHoverColor(options.borderColor);
      this.hoverColor = (ctx, options) => getHoverColor(options.color);
      this.indexAxis = "x";
      this.interaction = {
        mode: "nearest",
        intersect: true,
        includeInvisible: false
      };
      this.maintainAspectRatio = true;
      this.onHover = null;
      this.onClick = null;
      this.parsing = true;
      this.plugins = {};
      this.responsive = true;
      this.scale = void 0;
      this.scales = {};
      this.showLine = true;
      this.drawActiveElementsOnTop = true;
      this.describe(_descriptors2);
      this.apply(_appliers);
    }
    set(scope2, values) {
      return set3(this, scope2, values);
    }
    get(scope2) {
      return getScope$1(this, scope2);
    }
    describe(scope2, values) {
      return set3(descriptors, scope2, values);
    }
    override(scope2, values) {
      return set3(overrides, scope2, values);
    }
    route(scope2, name, targetScope, targetName) {
      const scopeObject = getScope$1(this, scope2);
      const targetScopeObject = getScope$1(this, targetScope);
      const privateName = "_" + name;
      Object.defineProperties(scopeObject, {
        [privateName]: {
          value: scopeObject[name],
          writable: true
        },
        [name]: {
          enumerable: true,
          get() {
            const local = this[privateName];
            const target = targetScopeObject[targetName];
            if (isObject2(local)) {
              return Object.assign({}, target, local);
            }
            return valueOrDefault(local, target);
          },
          set(value) {
            this[privateName] = value;
          }
        }
      });
    }
    apply(appliers) {
      appliers.forEach((apply) => apply(this));
    }
  };
  var defaults = /* @__PURE__ */ new Defaults({
    _scriptable: (name) => !name.startsWith("on"),
    _indexable: (name) => name !== "events",
    hover: {
      _fallback: "interaction"
    },
    interaction: {
      _scriptable: false,
      _indexable: false
    }
  }, [
    applyAnimationsDefaults,
    applyLayoutsDefaults,
    applyScaleDefaults
  ]);
  function toFontString(font) {
    if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
      return null;
    }
    return (font.style ? font.style + " " : "") + (font.weight ? font.weight + " " : "") + font.size + "px " + font.family;
  }
  function _measureText(ctx, data2, gc, longest, string) {
    let textWidth = data2[string];
    if (!textWidth) {
      textWidth = data2[string] = ctx.measureText(string).width;
      gc.push(string);
    }
    if (textWidth > longest) {
      longest = textWidth;
    }
    return longest;
  }
  function _longestText(ctx, font, arrayOfThings, cache) {
    cache = cache || {};
    let data2 = cache.data = cache.data || {};
    let gc = cache.garbageCollect = cache.garbageCollect || [];
    if (cache.font !== font) {
      data2 = cache.data = {};
      gc = cache.garbageCollect = [];
      cache.font = font;
    }
    ctx.save();
    ctx.font = font;
    let longest = 0;
    const ilen = arrayOfThings.length;
    let i2, j2, jlen, thing, nestedThing;
    for (i2 = 0; i2 < ilen; i2++) {
      thing = arrayOfThings[i2];
      if (thing !== void 0 && thing !== null && !isArray2(thing)) {
        longest = _measureText(ctx, data2, gc, longest, thing);
      } else if (isArray2(thing)) {
        for (j2 = 0, jlen = thing.length; j2 < jlen; j2++) {
          nestedThing = thing[j2];
          if (nestedThing !== void 0 && nestedThing !== null && !isArray2(nestedThing)) {
            longest = _measureText(ctx, data2, gc, longest, nestedThing);
          }
        }
      }
    }
    ctx.restore();
    const gcLen = gc.length / 2;
    if (gcLen > arrayOfThings.length) {
      for (i2 = 0; i2 < gcLen; i2++) {
        delete data2[gc[i2]];
      }
      gc.splice(0, gcLen);
    }
    return longest;
  }
  function _alignPixel(chart, pixel, width) {
    const devicePixelRatio = chart.currentDevicePixelRatio;
    const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
    return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
  }
  function clearCanvas(canvas, ctx) {
    if (!ctx && !canvas) {
      return;
    }
    ctx = ctx || canvas.getContext("2d");
    ctx.save();
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }
  function drawPoint(ctx, options, x2, y2) {
    drawPointLegend(ctx, options, x2, y2, null);
  }
  function drawPointLegend(ctx, options, x2, y2, w2) {
    let type, xOffset, yOffset, size2, cornerRadius, width, xOffsetW, yOffsetW;
    const style = options.pointStyle;
    const rotation = options.rotation;
    const radius = options.radius;
    let rad = (rotation || 0) * RAD_PER_DEG;
    if (style && typeof style === "object") {
      type = style.toString();
      if (type === "[object HTMLImageElement]" || type === "[object HTMLCanvasElement]") {
        ctx.save();
        ctx.translate(x2, y2);
        ctx.rotate(rad);
        ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
        ctx.restore();
        return;
      }
    }
    if (isNaN(radius) || radius <= 0) {
      return;
    }
    ctx.beginPath();
    switch (style) {
      // Default includes circle
      default:
        if (w2) {
          ctx.ellipse(x2, y2, w2 / 2, radius, 0, 0, TAU);
        } else {
          ctx.arc(x2, y2, radius, 0, TAU);
        }
        ctx.closePath();
        break;
      case "triangle":
        width = w2 ? w2 / 2 : radius;
        ctx.moveTo(x2 + Math.sin(rad) * width, y2 - Math.cos(rad) * radius);
        rad += TWO_THIRDS_PI;
        ctx.lineTo(x2 + Math.sin(rad) * width, y2 - Math.cos(rad) * radius);
        rad += TWO_THIRDS_PI;
        ctx.lineTo(x2 + Math.sin(rad) * width, y2 - Math.cos(rad) * radius);
        ctx.closePath();
        break;
      case "rectRounded":
        cornerRadius = radius * 0.516;
        size2 = radius - cornerRadius;
        xOffset = Math.cos(rad + QUARTER_PI) * size2;
        xOffsetW = Math.cos(rad + QUARTER_PI) * (w2 ? w2 / 2 - cornerRadius : size2);
        yOffset = Math.sin(rad + QUARTER_PI) * size2;
        yOffsetW = Math.sin(rad + QUARTER_PI) * (w2 ? w2 / 2 - cornerRadius : size2);
        ctx.arc(x2 - xOffsetW, y2 - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
        ctx.arc(x2 + yOffsetW, y2 - xOffset, cornerRadius, rad - HALF_PI, rad);
        ctx.arc(x2 + xOffsetW, y2 + yOffset, cornerRadius, rad, rad + HALF_PI);
        ctx.arc(x2 - yOffsetW, y2 + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
        ctx.closePath();
        break;
      case "rect":
        if (!rotation) {
          size2 = Math.SQRT1_2 * radius;
          width = w2 ? w2 / 2 : size2;
          ctx.rect(x2 - width, y2 - size2, 2 * width, 2 * size2);
          break;
        }
        rad += QUARTER_PI;
      /* falls through */
      case "rectRot":
        xOffsetW = Math.cos(rad) * (w2 ? w2 / 2 : radius);
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        yOffsetW = Math.sin(rad) * (w2 ? w2 / 2 : radius);
        ctx.moveTo(x2 - xOffsetW, y2 - yOffset);
        ctx.lineTo(x2 + yOffsetW, y2 - xOffset);
        ctx.lineTo(x2 + xOffsetW, y2 + yOffset);
        ctx.lineTo(x2 - yOffsetW, y2 + xOffset);
        ctx.closePath();
        break;
      case "crossRot":
        rad += QUARTER_PI;
      /* falls through */
      case "cross":
        xOffsetW = Math.cos(rad) * (w2 ? w2 / 2 : radius);
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        yOffsetW = Math.sin(rad) * (w2 ? w2 / 2 : radius);
        ctx.moveTo(x2 - xOffsetW, y2 - yOffset);
        ctx.lineTo(x2 + xOffsetW, y2 + yOffset);
        ctx.moveTo(x2 + yOffsetW, y2 - xOffset);
        ctx.lineTo(x2 - yOffsetW, y2 + xOffset);
        break;
      case "star":
        xOffsetW = Math.cos(rad) * (w2 ? w2 / 2 : radius);
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        yOffsetW = Math.sin(rad) * (w2 ? w2 / 2 : radius);
        ctx.moveTo(x2 - xOffsetW, y2 - yOffset);
        ctx.lineTo(x2 + xOffsetW, y2 + yOffset);
        ctx.moveTo(x2 + yOffsetW, y2 - xOffset);
        ctx.lineTo(x2 - yOffsetW, y2 + xOffset);
        rad += QUARTER_PI;
        xOffsetW = Math.cos(rad) * (w2 ? w2 / 2 : radius);
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        yOffsetW = Math.sin(rad) * (w2 ? w2 / 2 : radius);
        ctx.moveTo(x2 - xOffsetW, y2 - yOffset);
        ctx.lineTo(x2 + xOffsetW, y2 + yOffset);
        ctx.moveTo(x2 + yOffsetW, y2 - xOffset);
        ctx.lineTo(x2 - yOffsetW, y2 + xOffset);
        break;
      case "line":
        xOffset = w2 ? w2 / 2 : Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x2 - xOffset, y2 - yOffset);
        ctx.lineTo(x2 + xOffset, y2 + yOffset);
        break;
      case "dash":
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 + Math.cos(rad) * (w2 ? w2 / 2 : radius), y2 + Math.sin(rad) * radius);
        break;
      case false:
        ctx.closePath();
        break;
    }
    ctx.fill();
    if (options.borderWidth > 0) {
      ctx.stroke();
    }
  }
  function _isPointInArea(point, area, margin) {
    margin = margin || 0.5;
    return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
  }
  function clipArea(ctx, area) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
    ctx.clip();
  }
  function unclipArea(ctx) {
    ctx.restore();
  }
  function _steppedLineTo(ctx, previous, target, flip, mode) {
    if (!previous) {
      return ctx.lineTo(target.x, target.y);
    }
    if (mode === "middle") {
      const midpoint = (previous.x + target.x) / 2;
      ctx.lineTo(midpoint, previous.y);
      ctx.lineTo(midpoint, target.y);
    } else if (mode === "after" !== !!flip) {
      ctx.lineTo(previous.x, target.y);
    } else {
      ctx.lineTo(target.x, previous.y);
    }
    ctx.lineTo(target.x, target.y);
  }
  function _bezierCurveTo(ctx, previous, target, flip) {
    if (!previous) {
      return ctx.lineTo(target.x, target.y);
    }
    ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
  }
  function setRenderOpts(ctx, opts) {
    if (opts.translation) {
      ctx.translate(opts.translation[0], opts.translation[1]);
    }
    if (!isNullOrUndef(opts.rotation)) {
      ctx.rotate(opts.rotation);
    }
    if (opts.color) {
      ctx.fillStyle = opts.color;
    }
    if (opts.textAlign) {
      ctx.textAlign = opts.textAlign;
    }
    if (opts.textBaseline) {
      ctx.textBaseline = opts.textBaseline;
    }
  }
  function decorateText(ctx, x2, y2, line, opts) {
    if (opts.strikethrough || opts.underline) {
      const metrics = ctx.measureText(line);
      const left = x2 - metrics.actualBoundingBoxLeft;
      const right = x2 + metrics.actualBoundingBoxRight;
      const top = y2 - metrics.actualBoundingBoxAscent;
      const bottom = y2 + metrics.actualBoundingBoxDescent;
      const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
      ctx.strokeStyle = ctx.fillStyle;
      ctx.beginPath();
      ctx.lineWidth = opts.decorationWidth || 2;
      ctx.moveTo(left, yDecoration);
      ctx.lineTo(right, yDecoration);
      ctx.stroke();
    }
  }
  function drawBackdrop(ctx, opts) {
    const oldColor = ctx.fillStyle;
    ctx.fillStyle = opts.color;
    ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
    ctx.fillStyle = oldColor;
  }
  function renderText(ctx, text, x2, y2, font, opts = {}) {
    const lines = isArray2(text) ? text : [
      text
    ];
    const stroke = opts.strokeWidth > 0 && opts.strokeColor !== "";
    let i2, line;
    ctx.save();
    ctx.font = font.string;
    setRenderOpts(ctx, opts);
    for (i2 = 0; i2 < lines.length; ++i2) {
      line = lines[i2];
      if (opts.backdrop) {
        drawBackdrop(ctx, opts.backdrop);
      }
      if (stroke) {
        if (opts.strokeColor) {
          ctx.strokeStyle = opts.strokeColor;
        }
        if (!isNullOrUndef(opts.strokeWidth)) {
          ctx.lineWidth = opts.strokeWidth;
        }
        ctx.strokeText(line, x2, y2, opts.maxWidth);
      }
      ctx.fillText(line, x2, y2, opts.maxWidth);
      decorateText(ctx, x2, y2, line, opts);
      y2 += Number(font.lineHeight);
    }
    ctx.restore();
  }
  function addRoundedRectPath(ctx, rect) {
    const { x: x2, y: y2, w: w2, h: h3, radius } = rect;
    ctx.arc(x2 + radius.topLeft, y2 + radius.topLeft, radius.topLeft, 1.5 * PI, PI, true);
    ctx.lineTo(x2, y2 + h3 - radius.bottomLeft);
    ctx.arc(x2 + radius.bottomLeft, y2 + h3 - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
    ctx.lineTo(x2 + w2 - radius.bottomRight, y2 + h3);
    ctx.arc(x2 + w2 - radius.bottomRight, y2 + h3 - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
    ctx.lineTo(x2 + w2, y2 + radius.topRight);
    ctx.arc(x2 + w2 - radius.topRight, y2 + radius.topRight, radius.topRight, 0, -HALF_PI, true);
    ctx.lineTo(x2 + radius.topLeft, y2);
  }
  var LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
  var FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
  function toLineHeight(value, size2) {
    const matches = ("" + value).match(LINE_HEIGHT);
    if (!matches || matches[1] === "normal") {
      return size2 * 1.2;
    }
    value = +matches[2];
    switch (matches[3]) {
      case "px":
        return value;
      case "%":
        value /= 100;
        break;
    }
    return size2 * value;
  }
  var numberOrZero = (v2) => +v2 || 0;
  function _readValueToProps(value, props) {
    const ret = {};
    const objProps = isObject2(props);
    const keys = objProps ? Object.keys(props) : props;
    const read = isObject2(value) ? objProps ? (prop) => valueOrDefault(value[prop], value[props[prop]]) : (prop) => value[prop] : () => value;
    for (const prop of keys) {
      ret[prop] = numberOrZero(read(prop));
    }
    return ret;
  }
  function toTRBL(value) {
    return _readValueToProps(value, {
      top: "y",
      right: "x",
      bottom: "y",
      left: "x"
    });
  }
  function toTRBLCorners(value) {
    return _readValueToProps(value, [
      "topLeft",
      "topRight",
      "bottomLeft",
      "bottomRight"
    ]);
  }
  function toPadding(value) {
    const obj = toTRBL(value);
    obj.width = obj.left + obj.right;
    obj.height = obj.top + obj.bottom;
    return obj;
  }
  function toFont(options, fallback) {
    options = options || {};
    fallback = fallback || defaults.font;
    let size2 = valueOrDefault(options.size, fallback.size);
    if (typeof size2 === "string") {
      size2 = parseInt(size2, 10);
    }
    let style = valueOrDefault(options.style, fallback.style);
    if (style && !("" + style).match(FONT_STYLE)) {
      console.warn('Invalid font style specified: "' + style + '"');
      style = void 0;
    }
    const font = {
      family: valueOrDefault(options.family, fallback.family),
      lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size2),
      size: size2,
      style,
      weight: valueOrDefault(options.weight, fallback.weight),
      string: ""
    };
    font.string = toFontString(font);
    return font;
  }
  function resolve(inputs, context, index2, info) {
    let cacheable = true;
    let i2, ilen, value;
    for (i2 = 0, ilen = inputs.length; i2 < ilen; ++i2) {
      value = inputs[i2];
      if (value === void 0) {
        continue;
      }
      if (context !== void 0 && typeof value === "function") {
        value = value(context);
        cacheable = false;
      }
      if (index2 !== void 0 && isArray2(value)) {
        value = value[index2 % value.length];
        cacheable = false;
      }
      if (value !== void 0) {
        if (info && !cacheable) {
          info.cacheable = false;
        }
        return value;
      }
    }
  }
  function _addGrace(minmax, grace, beginAtZero) {
    const { min, max } = minmax;
    const change = toDimension(grace, (max - min) / 2);
    const keepZero = (value, add2) => beginAtZero && value === 0 ? 0 : value + add2;
    return {
      min: keepZero(min, -Math.abs(change)),
      max: keepZero(max, change)
    };
  }
  function createContext(parentContext, context) {
    return Object.assign(Object.create(parentContext), context);
  }
  function _createResolver(scopes, prefixes = [
    ""
  ], rootScopes, fallback, getTarget2 = () => scopes[0]) {
    const finalRootScopes = rootScopes || scopes;
    if (typeof fallback === "undefined") {
      fallback = _resolve("_fallback", scopes);
    }
    const cache = {
      [Symbol.toStringTag]: "Object",
      _cacheable: true,
      _scopes: scopes,
      _rootScopes: finalRootScopes,
      _fallback: fallback,
      _getTarget: getTarget2,
      override: (scope2) => _createResolver([
        scope2,
        ...scopes
      ], prefixes, finalRootScopes, fallback)
    };
    return new Proxy(cache, {
      /**
      * A trap for the delete operator.
      */
      deleteProperty(target, prop) {
        delete target[prop];
        delete target._keys;
        delete scopes[0][prop];
        return true;
      },
      /**
      * A trap for getting property values.
      */
      get(target, prop) {
        return _cached(target, prop, () => _resolveWithPrefixes(prop, prefixes, scopes, target));
      },
      /**
      * A trap for Object.getOwnPropertyDescriptor.
      * Also used by Object.hasOwnProperty.
      */
      getOwnPropertyDescriptor(target, prop) {
        return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
      },
      /**
      * A trap for Object.getPrototypeOf.
      */
      getPrototypeOf() {
        return Reflect.getPrototypeOf(scopes[0]);
      },
      /**
      * A trap for the in operator.
      */
      has(target, prop) {
        return getKeysFromAllScopes(target).includes(prop);
      },
      /**
      * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
      */
      ownKeys(target) {
        return getKeysFromAllScopes(target);
      },
      /**
      * A trap for setting property values.
      */
      set(target, prop, value) {
        const storage = target._storage || (target._storage = getTarget2());
        target[prop] = storage[prop] = value;
        delete target._keys;
        return true;
      }
    });
  }
  function _attachContext(proxy, context, subProxy, descriptorDefaults) {
    const cache = {
      _cacheable: false,
      _proxy: proxy,
      _context: context,
      _subProxy: subProxy,
      _stack: /* @__PURE__ */ new Set(),
      _descriptors: _descriptors(proxy, descriptorDefaults),
      setContext: (ctx) => _attachContext(proxy, ctx, subProxy, descriptorDefaults),
      override: (scope2) => _attachContext(proxy.override(scope2), context, subProxy, descriptorDefaults)
    };
    return new Proxy(cache, {
      /**
      * A trap for the delete operator.
      */
      deleteProperty(target, prop) {
        delete target[prop];
        delete proxy[prop];
        return true;
      },
      /**
      * A trap for getting property values.
      */
      get(target, prop, receiver) {
        return _cached(target, prop, () => _resolveWithContext(target, prop, receiver));
      },
      /**
      * A trap for Object.getOwnPropertyDescriptor.
      * Also used by Object.hasOwnProperty.
      */
      getOwnPropertyDescriptor(target, prop) {
        return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
          enumerable: true,
          configurable: true
        } : void 0 : Reflect.getOwnPropertyDescriptor(proxy, prop);
      },
      /**
      * A trap for Object.getPrototypeOf.
      */
      getPrototypeOf() {
        return Reflect.getPrototypeOf(proxy);
      },
      /**
      * A trap for the in operator.
      */
      has(target, prop) {
        return Reflect.has(proxy, prop);
      },
      /**
      * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
      */
      ownKeys() {
        return Reflect.ownKeys(proxy);
      },
      /**
      * A trap for setting property values.
      */
      set(target, prop, value) {
        proxy[prop] = value;
        delete target[prop];
        return true;
      }
    });
  }
  function _descriptors(proxy, defaults2 = {
    scriptable: true,
    indexable: true
  }) {
    const { _scriptable = defaults2.scriptable, _indexable = defaults2.indexable, _allKeys = defaults2.allKeys } = proxy;
    return {
      allKeys: _allKeys,
      scriptable: _scriptable,
      indexable: _indexable,
      isScriptable: isFunction(_scriptable) ? _scriptable : () => _scriptable,
      isIndexable: isFunction(_indexable) ? _indexable : () => _indexable
    };
  }
  var readKey = (prefix2, name) => prefix2 ? prefix2 + _capitalize(name) : name;
  var needsSubResolver = (prop, value) => isObject2(value) && prop !== "adapters" && (Object.getPrototypeOf(value) === null || value.constructor === Object);
  function _cached(target, prop, resolve2) {
    if (Object.prototype.hasOwnProperty.call(target, prop) || prop === "constructor") {
      return target[prop];
    }
    const value = resolve2();
    target[prop] = value;
    return value;
  }
  function _resolveWithContext(target, prop, receiver) {
    const { _proxy, _context, _subProxy, _descriptors: descriptors2 } = target;
    let value = _proxy[prop];
    if (isFunction(value) && descriptors2.isScriptable(prop)) {
      value = _resolveScriptable(prop, value, target, receiver);
    }
    if (isArray2(value) && value.length) {
      value = _resolveArray(prop, value, target, descriptors2.isIndexable);
    }
    if (needsSubResolver(prop, value)) {
      value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors2);
    }
    return value;
  }
  function _resolveScriptable(prop, getValue, target, receiver) {
    const { _proxy, _context, _subProxy, _stack } = target;
    if (_stack.has(prop)) {
      throw new Error("Recursion detected: " + Array.from(_stack).join("->") + "->" + prop);
    }
    _stack.add(prop);
    let value = getValue(_context, _subProxy || receiver);
    _stack.delete(prop);
    if (needsSubResolver(prop, value)) {
      value = createSubResolver(_proxy._scopes, _proxy, prop, value);
    }
    return value;
  }
  function _resolveArray(prop, value, target, isIndexable) {
    const { _proxy, _context, _subProxy, _descriptors: descriptors2 } = target;
    if (typeof _context.index !== "undefined" && isIndexable(prop)) {
      return value[_context.index % value.length];
    } else if (isObject2(value[0])) {
      const arr = value;
      const scopes = _proxy._scopes.filter((s2) => s2 !== arr);
      value = [];
      for (const item of arr) {
        const resolver = createSubResolver(scopes, _proxy, prop, item);
        value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors2));
      }
    }
    return value;
  }
  function resolveFallback(fallback, prop, value) {
    return isFunction(fallback) ? fallback(prop, value) : fallback;
  }
  var getScope = (key, parent) => key === true ? parent : typeof key === "string" ? resolveObjectKey(parent, key) : void 0;
  function addScopes(set4, parentScopes, key, parentFallback, value) {
    for (const parent of parentScopes) {
      const scope2 = getScope(key, parent);
      if (scope2) {
        set4.add(scope2);
        const fallback = resolveFallback(scope2._fallback, key, value);
        if (typeof fallback !== "undefined" && fallback !== key && fallback !== parentFallback) {
          return fallback;
        }
      } else if (scope2 === false && typeof parentFallback !== "undefined" && key !== parentFallback) {
        return null;
      }
    }
    return false;
  }
  function createSubResolver(parentScopes, resolver, prop, value) {
    const rootScopes = resolver._rootScopes;
    const fallback = resolveFallback(resolver._fallback, prop, value);
    const allScopes = [
      ...parentScopes,
      ...rootScopes
    ];
    const set4 = /* @__PURE__ */ new Set();
    set4.add(value);
    let key = addScopesFromKey(set4, allScopes, prop, fallback || prop, value);
    if (key === null) {
      return false;
    }
    if (typeof fallback !== "undefined" && fallback !== prop) {
      key = addScopesFromKey(set4, allScopes, fallback, key, value);
      if (key === null) {
        return false;
      }
    }
    return _createResolver(Array.from(set4), [
      ""
    ], rootScopes, fallback, () => subGetTarget(resolver, prop, value));
  }
  function addScopesFromKey(set4, allScopes, key, fallback, item) {
    while (key) {
      key = addScopes(set4, allScopes, key, fallback, item);
    }
    return key;
  }
  function subGetTarget(resolver, prop, value) {
    const parent = resolver._getTarget();
    if (!(prop in parent)) {
      parent[prop] = {};
    }
    const target = parent[prop];
    if (isArray2(target) && isObject2(value)) {
      return value;
    }
    return target || {};
  }
  function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
    let value;
    for (const prefix2 of prefixes) {
      value = _resolve(readKey(prefix2, prop), scopes);
      if (typeof value !== "undefined") {
        return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
      }
    }
  }
  function _resolve(key, scopes) {
    for (const scope2 of scopes) {
      if (!scope2) {
        continue;
      }
      const value = scope2[key];
      if (typeof value !== "undefined") {
        return value;
      }
    }
  }
  function getKeysFromAllScopes(target) {
    let keys = target._keys;
    if (!keys) {
      keys = target._keys = resolveKeysFromAllScopes(target._scopes);
    }
    return keys;
  }
  function resolveKeysFromAllScopes(scopes) {
    const set4 = /* @__PURE__ */ new Set();
    for (const scope2 of scopes) {
      for (const key of Object.keys(scope2).filter((k2) => !k2.startsWith("_"))) {
        set4.add(key);
      }
    }
    return Array.from(set4);
  }
  function _parseObjectDataRadialScale(meta, data2, start2, count) {
    const { iScale } = meta;
    const { key = "r" } = this._parsing;
    const parsed = new Array(count);
    let i2, ilen, index2, item;
    for (i2 = 0, ilen = count; i2 < ilen; ++i2) {
      index2 = i2 + start2;
      item = data2[index2];
      parsed[i2] = {
        r: iScale.parse(resolveObjectKey(item, key), index2)
      };
    }
    return parsed;
  }
  var EPSILON = Number.EPSILON || 1e-14;
  var getPoint = (points, i2) => i2 < points.length && !points[i2].skip && points[i2];
  var getValueAxis = (indexAxis) => indexAxis === "x" ? "y" : "x";
  function splineCurve(firstPoint, middlePoint, afterPoint, t3) {
    const previous = firstPoint.skip ? middlePoint : firstPoint;
    const current = middlePoint;
    const next = afterPoint.skip ? middlePoint : afterPoint;
    const d01 = distanceBetweenPoints(current, previous);
    const d12 = distanceBetweenPoints(next, current);
    let s01 = d01 / (d01 + d12);
    let s12 = d12 / (d01 + d12);
    s01 = isNaN(s01) ? 0 : s01;
    s12 = isNaN(s12) ? 0 : s12;
    const fa = t3 * s01;
    const fb = t3 * s12;
    return {
      previous: {
        x: current.x - fa * (next.x - previous.x),
        y: current.y - fa * (next.y - previous.y)
      },
      next: {
        x: current.x + fb * (next.x - previous.x),
        y: current.y + fb * (next.y - previous.y)
      }
    };
  }
  function monotoneAdjust(points, deltaK, mK) {
    const pointsLen = points.length;
    let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for (let i2 = 0; i2 < pointsLen - 1; ++i2) {
      pointCurrent = pointAfter;
      pointAfter = getPoint(points, i2 + 1);
      if (!pointCurrent || !pointAfter) {
        continue;
      }
      if (almostEquals(deltaK[i2], 0, EPSILON)) {
        mK[i2] = mK[i2 + 1] = 0;
        continue;
      }
      alphaK = mK[i2] / deltaK[i2];
      betaK = mK[i2 + 1] / deltaK[i2];
      squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
      if (squaredMagnitude <= 9) {
        continue;
      }
      tauK = 3 / Math.sqrt(squaredMagnitude);
      mK[i2] = alphaK * tauK * deltaK[i2];
      mK[i2 + 1] = betaK * tauK * deltaK[i2];
    }
  }
  function monotoneCompute(points, mK, indexAxis = "x") {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    let delta, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for (let i2 = 0; i2 < pointsLen; ++i2) {
      pointBefore = pointCurrent;
      pointCurrent = pointAfter;
      pointAfter = getPoint(points, i2 + 1);
      if (!pointCurrent) {
        continue;
      }
      const iPixel = pointCurrent[indexAxis];
      const vPixel = pointCurrent[valueAxis];
      if (pointBefore) {
        delta = (iPixel - pointBefore[indexAxis]) / 3;
        pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
        pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i2];
      }
      if (pointAfter) {
        delta = (pointAfter[indexAxis] - iPixel) / 3;
        pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
        pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i2];
      }
    }
  }
  function splineCurveMonotone(points, indexAxis = "x") {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    const deltaK = Array(pointsLen).fill(0);
    const mK = Array(pointsLen);
    let i2, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for (i2 = 0; i2 < pointsLen; ++i2) {
      pointBefore = pointCurrent;
      pointCurrent = pointAfter;
      pointAfter = getPoint(points, i2 + 1);
      if (!pointCurrent) {
        continue;
      }
      if (pointAfter) {
        const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
        deltaK[i2] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
      }
      mK[i2] = !pointBefore ? deltaK[i2] : !pointAfter ? deltaK[i2 - 1] : sign(deltaK[i2 - 1]) !== sign(deltaK[i2]) ? 0 : (deltaK[i2 - 1] + deltaK[i2]) / 2;
    }
    monotoneAdjust(points, deltaK, mK);
    monotoneCompute(points, mK, indexAxis);
  }
  function capControlPoint(pt2, min, max) {
    return Math.max(Math.min(pt2, max), min);
  }
  function capBezierPoints(points, area) {
    let i2, ilen, point, inArea, inAreaPrev;
    let inAreaNext = _isPointInArea(points[0], area);
    for (i2 = 0, ilen = points.length; i2 < ilen; ++i2) {
      inAreaPrev = inArea;
      inArea = inAreaNext;
      inAreaNext = i2 < ilen - 1 && _isPointInArea(points[i2 + 1], area);
      if (!inArea) {
        continue;
      }
      point = points[i2];
      if (inAreaPrev) {
        point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
        point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
      }
      if (inAreaNext) {
        point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
        point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
      }
    }
  }
  function _updateBezierControlPoints(points, options, area, loop2, indexAxis) {
    let i2, ilen, point, controlPoints;
    if (options.spanGaps) {
      points = points.filter((pt2) => !pt2.skip);
    }
    if (options.cubicInterpolationMode === "monotone") {
      splineCurveMonotone(points, indexAxis);
    } else {
      let prev = loop2 ? points[points.length - 1] : points[0];
      for (i2 = 0, ilen = points.length; i2 < ilen; ++i2) {
        point = points[i2];
        controlPoints = splineCurve(prev, point, points[Math.min(i2 + 1, ilen - (loop2 ? 0 : 1)) % ilen], options.tension);
        point.cp1x = controlPoints.previous.x;
        point.cp1y = controlPoints.previous.y;
        point.cp2x = controlPoints.next.x;
        point.cp2y = controlPoints.next.y;
        prev = point;
      }
    }
    if (options.capBezierPoints) {
      capBezierPoints(points, area);
    }
  }
  function _isDomSupported() {
    return typeof window !== "undefined" && typeof document !== "undefined";
  }
  function _getParentNode(domNode) {
    let parent = domNode.parentNode;
    if (parent && parent.toString() === "[object ShadowRoot]") {
      parent = parent.host;
    }
    return parent;
  }
  function parseMaxStyle(styleValue, node, parentProperty) {
    let valueInPixels;
    if (typeof styleValue === "string") {
      valueInPixels = parseInt(styleValue, 10);
      if (styleValue.indexOf("%") !== -1) {
        valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
      }
    } else {
      valueInPixels = styleValue;
    }
    return valueInPixels;
  }
  var getComputedStyle2 = (element) => element.ownerDocument.defaultView.getComputedStyle(element, null);
  function getStyle(el, property) {
    return getComputedStyle2(el).getPropertyValue(property);
  }
  var positions = [
    "top",
    "right",
    "bottom",
    "left"
  ];
  function getPositionedStyle(styles, style, suffix) {
    const result = {};
    suffix = suffix ? "-" + suffix : "";
    for (let i2 = 0; i2 < 4; i2++) {
      const pos = positions[i2];
      result[pos] = parseFloat(styles[style + "-" + pos + suffix]) || 0;
    }
    result.width = result.left + result.right;
    result.height = result.top + result.bottom;
    return result;
  }
  var useOffsetPos = (x2, y2, target) => (x2 > 0 || y2 > 0) && (!target || !target.shadowRoot);
  function getCanvasPosition(e2, canvas) {
    const touches = e2.touches;
    const source = touches && touches.length ? touches[0] : e2;
    const { offsetX, offsetY } = source;
    let box = false;
    let x2, y2;
    if (useOffsetPos(offsetX, offsetY, e2.target)) {
      x2 = offsetX;
      y2 = offsetY;
    } else {
      const rect = canvas.getBoundingClientRect();
      x2 = source.clientX - rect.left;
      y2 = source.clientY - rect.top;
      box = true;
    }
    return {
      x: x2,
      y: y2,
      box
    };
  }
  function getRelativePosition(event, chart) {
    if ("native" in event) {
      return event;
    }
    const { canvas, currentDevicePixelRatio } = chart;
    const style = getComputedStyle2(canvas);
    const borderBox = style.boxSizing === "border-box";
    const paddings = getPositionedStyle(style, "padding");
    const borders = getPositionedStyle(style, "border", "width");
    const { x: x2, y: y2, box } = getCanvasPosition(event, canvas);
    const xOffset = paddings.left + (box && borders.left);
    const yOffset = paddings.top + (box && borders.top);
    let { width, height } = chart;
    if (borderBox) {
      width -= paddings.width + borders.width;
      height -= paddings.height + borders.height;
    }
    return {
      x: Math.round((x2 - xOffset) / width * canvas.width / currentDevicePixelRatio),
      y: Math.round((y2 - yOffset) / height * canvas.height / currentDevicePixelRatio)
    };
  }
  function getContainerSize(canvas, width, height) {
    let maxWidth, maxHeight;
    if (width === void 0 || height === void 0) {
      const container = canvas && _getParentNode(canvas);
      if (!container) {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
      } else {
        const rect = container.getBoundingClientRect();
        const containerStyle = getComputedStyle2(container);
        const containerBorder = getPositionedStyle(containerStyle, "border", "width");
        const containerPadding = getPositionedStyle(containerStyle, "padding");
        width = rect.width - containerPadding.width - containerBorder.width;
        height = rect.height - containerPadding.height - containerBorder.height;
        maxWidth = parseMaxStyle(containerStyle.maxWidth, container, "clientWidth");
        maxHeight = parseMaxStyle(containerStyle.maxHeight, container, "clientHeight");
      }
    }
    return {
      width,
      height,
      maxWidth: maxWidth || INFINITY,
      maxHeight: maxHeight || INFINITY
    };
  }
  var round1 = (v2) => Math.round(v2 * 10) / 10;
  function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
    const style = getComputedStyle2(canvas);
    const margins = getPositionedStyle(style, "margin");
    const maxWidth = parseMaxStyle(style.maxWidth, canvas, "clientWidth") || INFINITY;
    const maxHeight = parseMaxStyle(style.maxHeight, canvas, "clientHeight") || INFINITY;
    const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
    let { width, height } = containerSize;
    if (style.boxSizing === "content-box") {
      const borders = getPositionedStyle(style, "border", "width");
      const paddings = getPositionedStyle(style, "padding");
      width -= paddings.width + borders.width;
      height -= paddings.height + borders.height;
    }
    width = Math.max(0, width - margins.width);
    height = Math.max(0, aspectRatio ? width / aspectRatio : height - margins.height);
    width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
    height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
    if (width && !height) {
      height = round1(width / 2);
    }
    const maintainHeight = bbWidth !== void 0 || bbHeight !== void 0;
    if (maintainHeight && aspectRatio && containerSize.height && height > containerSize.height) {
      height = containerSize.height;
      width = round1(Math.floor(height * aspectRatio));
    }
    return {
      width,
      height
    };
  }
  function retinaScale(chart, forceRatio, forceStyle) {
    const pixelRatio = forceRatio || 1;
    const deviceHeight = round1(chart.height * pixelRatio);
    const deviceWidth = round1(chart.width * pixelRatio);
    chart.height = round1(chart.height);
    chart.width = round1(chart.width);
    const canvas = chart.canvas;
    if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
      canvas.style.height = `${chart.height}px`;
      canvas.style.width = `${chart.width}px`;
    }
    if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
      chart.currentDevicePixelRatio = pixelRatio;
      canvas.height = deviceHeight;
      canvas.width = deviceWidth;
      chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      return true;
    }
    return false;
  }
  var supportsEventListenerOptions = function() {
    let passiveSupported = false;
    try {
      const options = {
        get passive() {
          passiveSupported = true;
          return false;
        }
      };
      if (_isDomSupported()) {
        window.addEventListener("test", null, options);
        window.removeEventListener("test", null, options);
      }
    } catch (e2) {
    }
    return passiveSupported;
  }();
  function readUsedSize(element, property) {
    const value = getStyle(element, property);
    const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? +matches[1] : void 0;
  }
  function _pointInLine(p1, p2, t3, mode) {
    return {
      x: p1.x + t3 * (p2.x - p1.x),
      y: p1.y + t3 * (p2.y - p1.y)
    };
  }
  function _steppedInterpolation(p1, p2, t3, mode) {
    return {
      x: p1.x + t3 * (p2.x - p1.x),
      y: mode === "middle" ? t3 < 0.5 ? p1.y : p2.y : mode === "after" ? t3 < 1 ? p1.y : p2.y : t3 > 0 ? p2.y : p1.y
    };
  }
  function _bezierInterpolation(p1, p2, t3, mode) {
    const cp1 = {
      x: p1.cp2x,
      y: p1.cp2y
    };
    const cp2 = {
      x: p2.cp1x,
      y: p2.cp1y
    };
    const a2 = _pointInLine(p1, cp1, t3);
    const b2 = _pointInLine(cp1, cp2, t3);
    const c2 = _pointInLine(cp2, p2, t3);
    const d2 = _pointInLine(a2, b2, t3);
    const e2 = _pointInLine(b2, c2, t3);
    return _pointInLine(d2, e2, t3);
  }
  var getRightToLeftAdapter = function(rectX, width) {
    return {
      x(x2) {
        return rectX + rectX + width - x2;
      },
      setWidth(w2) {
        width = w2;
      },
      textAlign(align) {
        if (align === "center") {
          return align;
        }
        return align === "right" ? "left" : "right";
      },
      xPlus(x2, value) {
        return x2 - value;
      },
      leftForLtr(x2, itemWidth) {
        return x2 - itemWidth;
      }
    };
  };
  var getLeftToRightAdapter = function() {
    return {
      x(x2) {
        return x2;
      },
      setWidth(w2) {
      },
      textAlign(align) {
        return align;
      },
      xPlus(x2, value) {
        return x2 + value;
      },
      leftForLtr(x2, _itemWidth) {
        return x2;
      }
    };
  };
  function getRtlAdapter(rtl, rectX, width) {
    return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
  }
  function overrideTextDirection(ctx, direction) {
    let style, original;
    if (direction === "ltr" || direction === "rtl") {
      style = ctx.canvas.style;
      original = [
        style.getPropertyValue("direction"),
        style.getPropertyPriority("direction")
      ];
      style.setProperty("direction", direction, "important");
      ctx.prevTextDirection = original;
    }
  }
  function restoreTextDirection(ctx, original) {
    if (original !== void 0) {
      delete ctx.prevTextDirection;
      ctx.canvas.style.setProperty("direction", original[0], original[1]);
    }
  }
  function propertyFn(property) {
    if (property === "angle") {
      return {
        between: _angleBetween,
        compare: _angleDiff,
        normalize: _normalizeAngle
      };
    }
    return {
      between: _isBetween,
      compare: (a2, b2) => a2 - b2,
      normalize: (x2) => x2
    };
  }
  function normalizeSegment({ start: start2, end, count, loop: loop2, style }) {
    return {
      start: start2 % count,
      end: end % count,
      loop: loop2 && (end - start2 + 1) % count === 0,
      style
    };
  }
  function getSegment(segment, points, bounds) {
    const { property, start: startBound, end: endBound } = bounds;
    const { between, normalize } = propertyFn(property);
    const count = points.length;
    let { start: start2, end, loop: loop2 } = segment;
    let i2, ilen;
    if (loop2) {
      start2 += count;
      end += count;
      for (i2 = 0, ilen = count; i2 < ilen; ++i2) {
        if (!between(normalize(points[start2 % count][property]), startBound, endBound)) {
          break;
        }
        start2--;
        end--;
      }
      start2 %= count;
      end %= count;
    }
    if (end < start2) {
      end += count;
    }
    return {
      start: start2,
      end,
      loop: loop2,
      style: segment.style
    };
  }
  function _boundSegment(segment, points, bounds) {
    if (!bounds) {
      return [
        segment
      ];
    }
    const { property, start: startBound, end: endBound } = bounds;
    const count = points.length;
    const { compare, between, normalize } = propertyFn(property);
    const { start: start2, end, loop: loop2, style } = getSegment(segment, points, bounds);
    const result = [];
    let inside = false;
    let subStart = null;
    let value, point, prevValue;
    const startIsBefore = () => between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
    const endIsBefore = () => compare(endBound, value) === 0 || between(endBound, prevValue, value);
    const shouldStart = () => inside || startIsBefore();
    const shouldStop = () => !inside || endIsBefore();
    for (let i2 = start2, prev = start2; i2 <= end; ++i2) {
      point = points[i2 % count];
      if (point.skip) {
        continue;
      }
      value = normalize(point[property]);
      if (value === prevValue) {
        continue;
      }
      inside = between(value, startBound, endBound);
      if (subStart === null && shouldStart()) {
        subStart = compare(value, startBound) === 0 ? i2 : prev;
      }
      if (subStart !== null && shouldStop()) {
        result.push(normalizeSegment({
          start: subStart,
          end: i2,
          loop: loop2,
          count,
          style
        }));
        subStart = null;
      }
      prev = i2;
      prevValue = value;
    }
    if (subStart !== null) {
      result.push(normalizeSegment({
        start: subStart,
        end,
        loop: loop2,
        count,
        style
      }));
    }
    return result;
  }
  function _boundSegments(line, bounds) {
    const result = [];
    const segments = line.segments;
    for (let i2 = 0; i2 < segments.length; i2++) {
      const sub = _boundSegment(segments[i2], line.points, bounds);
      if (sub.length) {
        result.push(...sub);
      }
    }
    return result;
  }
  function findStartAndEnd(points, count, loop2, spanGaps) {
    let start2 = 0;
    let end = count - 1;
    if (loop2 && !spanGaps) {
      while (start2 < count && !points[start2].skip) {
        start2++;
      }
    }
    while (start2 < count && points[start2].skip) {
      start2++;
    }
    start2 %= count;
    if (loop2) {
      end += start2;
    }
    while (end > start2 && points[end % count].skip) {
      end--;
    }
    end %= count;
    return {
      start: start2,
      end
    };
  }
  function solidSegments(points, start2, max, loop2) {
    const count = points.length;
    const result = [];
    let last = start2;
    let prev = points[start2];
    let end;
    for (end = start2 + 1; end <= max; ++end) {
      const cur = points[end % count];
      if (cur.skip || cur.stop) {
        if (!prev.skip) {
          loop2 = false;
          result.push({
            start: start2 % count,
            end: (end - 1) % count,
            loop: loop2
          });
          start2 = last = cur.stop ? end : null;
        }
      } else {
        last = end;
        if (prev.skip) {
          start2 = end;
        }
      }
      prev = cur;
    }
    if (last !== null) {
      result.push({
        start: start2 % count,
        end: last % count,
        loop: loop2
      });
    }
    return result;
  }
  function _computeSegments(line, segmentOptions) {
    const points = line.points;
    const spanGaps = line.options.spanGaps;
    const count = points.length;
    if (!count) {
      return [];
    }
    const loop2 = !!line._loop;
    const { start: start2, end } = findStartAndEnd(points, count, loop2, spanGaps);
    if (spanGaps === true) {
      return splitByStyles(line, [
        {
          start: start2,
          end,
          loop: loop2
        }
      ], points, segmentOptions);
    }
    const max = end < start2 ? end + count : end;
    const completeLoop = !!line._fullLoop && start2 === 0 && end === count - 1;
    return splitByStyles(line, solidSegments(points, start2, max, completeLoop), points, segmentOptions);
  }
  function splitByStyles(line, segments, points, segmentOptions) {
    if (!segmentOptions || !segmentOptions.setContext || !points) {
      return segments;
    }
    return doSplitByStyles(line, segments, points, segmentOptions);
  }
  function doSplitByStyles(line, segments, points, segmentOptions) {
    const chartContext = line._chart.getContext();
    const baseStyle = readStyle(line.options);
    const { _datasetIndex: datasetIndex, options: { spanGaps } } = line;
    const count = points.length;
    const result = [];
    let prevStyle = baseStyle;
    let start2 = segments[0].start;
    let i2 = start2;
    function addStyle(s2, e2, l2, st2) {
      const dir = spanGaps ? -1 : 1;
      if (s2 === e2) {
        return;
      }
      s2 += count;
      while (points[s2 % count].skip) {
        s2 -= dir;
      }
      while (points[e2 % count].skip) {
        e2 += dir;
      }
      if (s2 % count !== e2 % count) {
        result.push({
          start: s2 % count,
          end: e2 % count,
          loop: l2,
          style: st2
        });
        prevStyle = st2;
        start2 = e2 % count;
      }
    }
    for (const segment of segments) {
      start2 = spanGaps ? start2 : segment.start;
      let prev = points[start2 % count];
      let style;
      for (i2 = start2 + 1; i2 <= segment.end; i2++) {
        const pt2 = points[i2 % count];
        style = readStyle(segmentOptions.setContext(createContext(chartContext, {
          type: "segment",
          p0: prev,
          p1: pt2,
          p0DataIndex: (i2 - 1) % count,
          p1DataIndex: i2 % count,
          datasetIndex
        })));
        if (styleChanged(style, prevStyle)) {
          addStyle(start2, i2 - 1, segment.loop, prevStyle);
        }
        prev = pt2;
        prevStyle = style;
      }
      if (start2 < i2 - 1) {
        addStyle(start2, i2 - 1, segment.loop, prevStyle);
      }
    }
    return result;
  }
  function readStyle(options) {
    return {
      backgroundColor: options.backgroundColor,
      borderCapStyle: options.borderCapStyle,
      borderDash: options.borderDash,
      borderDashOffset: options.borderDashOffset,
      borderJoinStyle: options.borderJoinStyle,
      borderWidth: options.borderWidth,
      borderColor: options.borderColor
    };
  }
  function styleChanged(style, prevStyle) {
    if (!prevStyle) {
      return false;
    }
    const cache = [];
    const replacer = function(key, value) {
      if (!isPatternOrGradient(value)) {
        return value;
      }
      if (!cache.includes(value)) {
        cache.push(value);
      }
      return cache.indexOf(value);
    };
    return JSON.stringify(style, replacer) !== JSON.stringify(prevStyle, replacer);
  }
  function getSizeForArea(scale, chartArea, field) {
    return scale.options.clip ? scale[field] : chartArea[field];
  }
  function getDatasetArea(meta, chartArea) {
    const { xScale, yScale } = meta;
    if (xScale && yScale) {
      return {
        left: getSizeForArea(xScale, chartArea, "left"),
        right: getSizeForArea(xScale, chartArea, "right"),
        top: getSizeForArea(yScale, chartArea, "top"),
        bottom: getSizeForArea(yScale, chartArea, "bottom")
      };
    }
    return chartArea;
  }
  function getDatasetClipArea(chart, meta) {
    const clip = meta._clip;
    if (clip.disabled) {
      return false;
    }
    const area = getDatasetArea(meta, chart.chartArea);
    return {
      left: clip.left === false ? 0 : area.left - (clip.left === true ? 0 : clip.left),
      right: clip.right === false ? chart.width : area.right + (clip.right === true ? 0 : clip.right),
      top: clip.top === false ? 0 : area.top - (clip.top === true ? 0 : clip.top),
      bottom: clip.bottom === false ? chart.height : area.bottom + (clip.bottom === true ? 0 : clip.bottom)
    };
  }

  // node_modules/chart.js/dist/chart.js
  var Animator = class {
    constructor() {
      this._request = null;
      this._charts = /* @__PURE__ */ new Map();
      this._running = false;
      this._lastDate = void 0;
    }
    _notify(chart, anims, date, type) {
      const callbacks = anims.listeners[type];
      const numSteps = anims.duration;
      callbacks.forEach((fn2) => fn2({
        chart,
        initial: anims.initial,
        numSteps,
        currentStep: Math.min(date - anims.start, numSteps)
      }));
    }
    _refresh() {
      if (this._request) {
        return;
      }
      this._running = true;
      this._request = requestAnimFrame.call(window, () => {
        this._update();
        this._request = null;
        if (this._running) {
          this._refresh();
        }
      });
    }
    _update(date = Date.now()) {
      let remaining = 0;
      this._charts.forEach((anims, chart) => {
        if (!anims.running || !anims.items.length) {
          return;
        }
        const items = anims.items;
        let i2 = items.length - 1;
        let draw2 = false;
        let item;
        for (; i2 >= 0; --i2) {
          item = items[i2];
          if (item._active) {
            if (item._total > anims.duration) {
              anims.duration = item._total;
            }
            item.tick(date);
            draw2 = true;
          } else {
            items[i2] = items[items.length - 1];
            items.pop();
          }
        }
        if (draw2) {
          chart.draw();
          this._notify(chart, anims, date, "progress");
        }
        if (!items.length) {
          anims.running = false;
          this._notify(chart, anims, date, "complete");
          anims.initial = false;
        }
        remaining += items.length;
      });
      this._lastDate = date;
      if (remaining === 0) {
        this._running = false;
      }
    }
    _getAnims(chart) {
      const charts = this._charts;
      let anims = charts.get(chart);
      if (!anims) {
        anims = {
          running: false,
          initial: true,
          items: [],
          listeners: {
            complete: [],
            progress: []
          }
        };
        charts.set(chart, anims);
      }
      return anims;
    }
    listen(chart, event, cb) {
      this._getAnims(chart).listeners[event].push(cb);
    }
    add(chart, items) {
      if (!items || !items.length) {
        return;
      }
      this._getAnims(chart).items.push(...items);
    }
    has(chart) {
      return this._getAnims(chart).items.length > 0;
    }
    start(chart) {
      const anims = this._charts.get(chart);
      if (!anims) {
        return;
      }
      anims.running = true;
      anims.start = Date.now();
      anims.duration = anims.items.reduce((acc, cur) => Math.max(acc, cur._duration), 0);
      this._refresh();
    }
    running(chart) {
      if (!this._running) {
        return false;
      }
      const anims = this._charts.get(chart);
      if (!anims || !anims.running || !anims.items.length) {
        return false;
      }
      return true;
    }
    stop(chart) {
      const anims = this._charts.get(chart);
      if (!anims || !anims.items.length) {
        return;
      }
      const items = anims.items;
      let i2 = items.length - 1;
      for (; i2 >= 0; --i2) {
        items[i2].cancel();
      }
      anims.items = [];
      this._notify(chart, anims, Date.now(), "complete");
    }
    remove(chart) {
      return this._charts.delete(chart);
    }
  };
  var animator = /* @__PURE__ */ new Animator();
  var transparent = "transparent";
  var interpolators = {
    boolean(from2, to3, factor) {
      return factor > 0.5 ? to3 : from2;
    },
    color(from2, to3, factor) {
      const c0 = color(from2 || transparent);
      const c1 = c0.valid && color(to3 || transparent);
      return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to3;
    },
    number(from2, to3, factor) {
      return from2 + (to3 - from2) * factor;
    }
  };
  var Animation = class {
    constructor(cfg, target, prop, to3) {
      const currentValue = target[prop];
      to3 = resolve([
        cfg.to,
        to3,
        currentValue,
        cfg.from
      ]);
      const from2 = resolve([
        cfg.from,
        currentValue,
        to3
      ]);
      this._active = true;
      this._fn = cfg.fn || interpolators[cfg.type || typeof from2];
      this._easing = effects[cfg.easing] || effects.linear;
      this._start = Math.floor(Date.now() + (cfg.delay || 0));
      this._duration = this._total = Math.floor(cfg.duration);
      this._loop = !!cfg.loop;
      this._target = target;
      this._prop = prop;
      this._from = from2;
      this._to = to3;
      this._promises = void 0;
    }
    active() {
      return this._active;
    }
    update(cfg, to3, date) {
      if (this._active) {
        this._notify(false);
        const currentValue = this._target[this._prop];
        const elapsed = date - this._start;
        const remain = this._duration - elapsed;
        this._start = date;
        this._duration = Math.floor(Math.max(remain, cfg.duration));
        this._total += elapsed;
        this._loop = !!cfg.loop;
        this._to = resolve([
          cfg.to,
          to3,
          currentValue,
          cfg.from
        ]);
        this._from = resolve([
          cfg.from,
          currentValue,
          to3
        ]);
      }
    }
    cancel() {
      if (this._active) {
        this.tick(Date.now());
        this._active = false;
        this._notify(false);
      }
    }
    tick(date) {
      const elapsed = date - this._start;
      const duration = this._duration;
      const prop = this._prop;
      const from2 = this._from;
      const loop2 = this._loop;
      const to3 = this._to;
      let factor;
      this._active = from2 !== to3 && (loop2 || elapsed < duration);
      if (!this._active) {
        this._target[prop] = to3;
        this._notify(true);
        return;
      }
      if (elapsed < 0) {
        this._target[prop] = from2;
        return;
      }
      factor = elapsed / duration % 2;
      factor = loop2 && factor > 1 ? 2 - factor : factor;
      factor = this._easing(Math.min(1, Math.max(0, factor)));
      this._target[prop] = this._fn(from2, to3, factor);
    }
    wait() {
      const promises = this._promises || (this._promises = []);
      return new Promise((res, rej) => {
        promises.push({
          res,
          rej
        });
      });
    }
    _notify(resolved) {
      const method = resolved ? "res" : "rej";
      const promises = this._promises || [];
      for (let i2 = 0; i2 < promises.length; i2++) {
        promises[i2][method]();
      }
    }
  };
  var Animations = class {
    constructor(chart, config) {
      this._chart = chart;
      this._properties = /* @__PURE__ */ new Map();
      this.configure(config);
    }
    configure(config) {
      if (!isObject2(config)) {
        return;
      }
      const animationOptions = Object.keys(defaults.animation);
      const animatedProps = this._properties;
      Object.getOwnPropertyNames(config).forEach((key) => {
        const cfg = config[key];
        if (!isObject2(cfg)) {
          return;
        }
        const resolved = {};
        for (const option of animationOptions) {
          resolved[option] = cfg[option];
        }
        (isArray2(cfg.properties) && cfg.properties || [
          key
        ]).forEach((prop) => {
          if (prop === key || !animatedProps.has(prop)) {
            animatedProps.set(prop, resolved);
          }
        });
      });
    }
    _animateOptions(target, values) {
      const newOptions = values.options;
      const options = resolveTargetOptions(target, newOptions);
      if (!options) {
        return [];
      }
      const animations = this._createAnimations(options, newOptions);
      if (newOptions.$shared) {
        awaitAll(target.options.$animations, newOptions).then(() => {
          target.options = newOptions;
        }, () => {
        });
      }
      return animations;
    }
    _createAnimations(target, values) {
      const animatedProps = this._properties;
      const animations = [];
      const running = target.$animations || (target.$animations = {});
      const props = Object.keys(values);
      const date = Date.now();
      let i2;
      for (i2 = props.length - 1; i2 >= 0; --i2) {
        const prop = props[i2];
        if (prop.charAt(0) === "$") {
          continue;
        }
        if (prop === "options") {
          animations.push(...this._animateOptions(target, values));
          continue;
        }
        const value = values[prop];
        let animation = running[prop];
        const cfg = animatedProps.get(prop);
        if (animation) {
          if (cfg && animation.active()) {
            animation.update(cfg, value, date);
            continue;
          } else {
            animation.cancel();
          }
        }
        if (!cfg || !cfg.duration) {
          target[prop] = value;
          continue;
        }
        running[prop] = animation = new Animation(cfg, target, prop, value);
        animations.push(animation);
      }
      return animations;
    }
    update(target, values) {
      if (this._properties.size === 0) {
        Object.assign(target, values);
        return;
      }
      const animations = this._createAnimations(target, values);
      if (animations.length) {
        animator.add(this._chart, animations);
        return true;
      }
    }
  };
  function awaitAll(animations, properties) {
    const running = [];
    const keys = Object.keys(properties);
    for (let i2 = 0; i2 < keys.length; i2++) {
      const anim = animations[keys[i2]];
      if (anim && anim.active()) {
        running.push(anim.wait());
      }
    }
    return Promise.all(running);
  }
  function resolveTargetOptions(target, newOptions) {
    if (!newOptions) {
      return;
    }
    let options = target.options;
    if (!options) {
      target.options = newOptions;
      return;
    }
    if (options.$shared) {
      target.options = options = Object.assign({}, options, {
        $shared: false,
        $animations: {}
      });
    }
    return options;
  }
  function scaleClip(scale, allowedOverflow) {
    const opts = scale && scale.options || {};
    const reverse = opts.reverse;
    const min = opts.min === void 0 ? allowedOverflow : 0;
    const max = opts.max === void 0 ? allowedOverflow : 0;
    return {
      start: reverse ? max : min,
      end: reverse ? min : max
    };
  }
  function defaultClip(xScale, yScale, allowedOverflow) {
    if (allowedOverflow === false) {
      return false;
    }
    const x2 = scaleClip(xScale, allowedOverflow);
    const y2 = scaleClip(yScale, allowedOverflow);
    return {
      top: y2.end,
      right: x2.end,
      bottom: y2.start,
      left: x2.start
    };
  }
  function toClip(value) {
    let t3, r2, b2, l2;
    if (isObject2(value)) {
      t3 = value.top;
      r2 = value.right;
      b2 = value.bottom;
      l2 = value.left;
    } else {
      t3 = r2 = b2 = l2 = value;
    }
    return {
      top: t3,
      right: r2,
      bottom: b2,
      left: l2,
      disabled: value === false
    };
  }
  function getSortedDatasetIndices(chart, filterVisible) {
    const keys = [];
    const metasets = chart._getSortedDatasetMetas(filterVisible);
    let i2, ilen;
    for (i2 = 0, ilen = metasets.length; i2 < ilen; ++i2) {
      keys.push(metasets[i2].index);
    }
    return keys;
  }
  function applyStack(stack, value, dsIndex, options = {}) {
    const keys = stack.keys;
    const singleMode = options.mode === "single";
    let i2, ilen, datasetIndex, otherValue;
    if (value === null) {
      return;
    }
    let found = false;
    for (i2 = 0, ilen = keys.length; i2 < ilen; ++i2) {
      datasetIndex = +keys[i2];
      if (datasetIndex === dsIndex) {
        found = true;
        if (options.all) {
          continue;
        }
        break;
      }
      otherValue = stack.values[datasetIndex];
      if (isNumberFinite(otherValue) && (singleMode || value === 0 || sign(value) === sign(otherValue))) {
        value += otherValue;
      }
    }
    if (!found && !options.all) {
      return 0;
    }
    return value;
  }
  function convertObjectDataToArray(data2, meta) {
    const { iScale, vScale } = meta;
    const iAxisKey = iScale.axis === "x" ? "x" : "y";
    const vAxisKey = vScale.axis === "x" ? "x" : "y";
    const keys = Object.keys(data2);
    const adata = new Array(keys.length);
    let i2, ilen, key;
    for (i2 = 0, ilen = keys.length; i2 < ilen; ++i2) {
      key = keys[i2];
      adata[i2] = {
        [iAxisKey]: key,
        [vAxisKey]: data2[key]
      };
    }
    return adata;
  }
  function isStacked(scale, meta) {
    const stacked = scale && scale.options.stacked;
    return stacked || stacked === void 0 && meta.stack !== void 0;
  }
  function getStackKey(indexScale, valueScale, meta) {
    return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
  }
  function getUserBounds(scale) {
    const { min, max, minDefined, maxDefined } = scale.getUserBounds();
    return {
      min: minDefined ? min : Number.NEGATIVE_INFINITY,
      max: maxDefined ? max : Number.POSITIVE_INFINITY
    };
  }
  function getOrCreateStack(stacks, stackKey, indexValue) {
    const subStack = stacks[stackKey] || (stacks[stackKey] = {});
    return subStack[indexValue] || (subStack[indexValue] = {});
  }
  function getLastIndexInStack(stack, vScale, positive, type) {
    for (const meta of vScale.getMatchingVisibleMetas(type).reverse()) {
      const value = stack[meta.index];
      if (positive && value > 0 || !positive && value < 0) {
        return meta.index;
      }
    }
    return null;
  }
  function updateStacks(controller, parsed) {
    const { chart, _cachedMeta: meta } = controller;
    const stacks = chart._stacks || (chart._stacks = {});
    const { iScale, vScale, index: datasetIndex } = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const key = getStackKey(iScale, vScale, meta);
    const ilen = parsed.length;
    let stack;
    for (let i2 = 0; i2 < ilen; ++i2) {
      const item = parsed[i2];
      const { [iAxis]: index2, [vAxis]: value } = item;
      const itemStacks = item._stacks || (item._stacks = {});
      stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index2);
      stack[datasetIndex] = value;
      stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
      stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
      const visualValues = stack._visualValues || (stack._visualValues = {});
      visualValues[datasetIndex] = value;
    }
  }
  function getFirstScaleId(chart, axis) {
    const scales2 = chart.scales;
    return Object.keys(scales2).filter((key) => scales2[key].axis === axis).shift();
  }
  function createDatasetContext(parent, index2) {
    return createContext(parent, {
      active: false,
      dataset: void 0,
      datasetIndex: index2,
      index: index2,
      mode: "default",
      type: "dataset"
    });
  }
  function createDataContext(parent, index2, element) {
    return createContext(parent, {
      active: false,
      dataIndex: index2,
      parsed: void 0,
      raw: void 0,
      element,
      index: index2,
      mode: "default",
      type: "data"
    });
  }
  function clearStacks(meta, items) {
    const datasetIndex = meta.controller.index;
    const axis = meta.vScale && meta.vScale.axis;
    if (!axis) {
      return;
    }
    items = items || meta._parsed;
    for (const parsed of items) {
      const stacks = parsed._stacks;
      if (!stacks || stacks[axis] === void 0 || stacks[axis][datasetIndex] === void 0) {
        return;
      }
      delete stacks[axis][datasetIndex];
      if (stacks[axis]._visualValues !== void 0 && stacks[axis]._visualValues[datasetIndex] !== void 0) {
        delete stacks[axis]._visualValues[datasetIndex];
      }
    }
  }
  var isDirectUpdateMode = (mode) => mode === "reset" || mode === "none";
  var cloneIfNotShared = (cached, shared) => shared ? cached : Object.assign({}, cached);
  var createStack = (canStack, meta, chart) => canStack && !meta.hidden && meta._stacked && {
    keys: getSortedDatasetIndices(chart, true),
    values: null
  };
  var DatasetController = class {
    static defaults = {};
    static datasetElementType = null;
    static dataElementType = null;
    constructor(chart, datasetIndex) {
      this.chart = chart;
      this._ctx = chart.ctx;
      this.index = datasetIndex;
      this._cachedDataOpts = {};
      this._cachedMeta = this.getMeta();
      this._type = this._cachedMeta.type;
      this.options = void 0;
      this._parsing = false;
      this._data = void 0;
      this._objectData = void 0;
      this._sharedOptions = void 0;
      this._drawStart = void 0;
      this._drawCount = void 0;
      this.enableOptionSharing = false;
      this.supportsDecimation = false;
      this.$context = void 0;
      this._syncList = [];
      this.datasetElementType = new.target.datasetElementType;
      this.dataElementType = new.target.dataElementType;
      this.initialize();
    }
    initialize() {
      const meta = this._cachedMeta;
      this.configure();
      this.linkScales();
      meta._stacked = isStacked(meta.vScale, meta);
      this.addElements();
      if (this.options.fill && !this.chart.isPluginEnabled("filler")) {
        console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
      }
    }
    updateIndex(datasetIndex) {
      if (this.index !== datasetIndex) {
        clearStacks(this._cachedMeta);
      }
      this.index = datasetIndex;
    }
    linkScales() {
      const chart = this.chart;
      const meta = this._cachedMeta;
      const dataset = this.getDataset();
      const chooseId = (axis, x2, y2, r2) => axis === "x" ? x2 : axis === "r" ? r2 : y2;
      const xid = meta.xAxisID = valueOrDefault(dataset.xAxisID, getFirstScaleId(chart, "x"));
      const yid = meta.yAxisID = valueOrDefault(dataset.yAxisID, getFirstScaleId(chart, "y"));
      const rid = meta.rAxisID = valueOrDefault(dataset.rAxisID, getFirstScaleId(chart, "r"));
      const indexAxis = meta.indexAxis;
      const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
      const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
      meta.xScale = this.getScaleForId(xid);
      meta.yScale = this.getScaleForId(yid);
      meta.rScale = this.getScaleForId(rid);
      meta.iScale = this.getScaleForId(iid);
      meta.vScale = this.getScaleForId(vid);
    }
    getDataset() {
      return this.chart.data.datasets[this.index];
    }
    getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(scaleID) {
      return this.chart.scales[scaleID];
    }
    _getOtherScale(scale) {
      const meta = this._cachedMeta;
      return scale === meta.iScale ? meta.vScale : meta.iScale;
    }
    reset() {
      this._update("reset");
    }
    _destroy() {
      const meta = this._cachedMeta;
      if (this._data) {
        unlistenArrayEvents(this._data, this);
      }
      if (meta._stacked) {
        clearStacks(meta);
      }
    }
    _dataCheck() {
      const dataset = this.getDataset();
      const data2 = dataset.data || (dataset.data = []);
      const _data = this._data;
      if (isObject2(data2)) {
        const meta = this._cachedMeta;
        this._data = convertObjectDataToArray(data2, meta);
      } else if (_data !== data2) {
        if (_data) {
          unlistenArrayEvents(_data, this);
          const meta = this._cachedMeta;
          clearStacks(meta);
          meta._parsed = [];
        }
        if (data2 && Object.isExtensible(data2)) {
          listenArrayEvents(data2, this);
        }
        this._syncList = [];
        this._data = data2;
      }
    }
    addElements() {
      const meta = this._cachedMeta;
      this._dataCheck();
      if (this.datasetElementType) {
        meta.dataset = new this.datasetElementType();
      }
    }
    buildOrUpdateElements(resetNewElements) {
      const meta = this._cachedMeta;
      const dataset = this.getDataset();
      let stackChanged = false;
      this._dataCheck();
      const oldStacked = meta._stacked;
      meta._stacked = isStacked(meta.vScale, meta);
      if (meta.stack !== dataset.stack) {
        stackChanged = true;
        clearStacks(meta);
        meta.stack = dataset.stack;
      }
      this._resyncElements(resetNewElements);
      if (stackChanged || oldStacked !== meta._stacked) {
        updateStacks(this, meta._parsed);
        meta._stacked = isStacked(meta.vScale, meta);
      }
    }
    configure() {
      const config = this.chart.config;
      const scopeKeys = config.datasetScopeKeys(this._type);
      const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
      this.options = config.createResolver(scopes, this.getContext());
      this._parsing = this.options.parsing;
      this._cachedDataOpts = {};
    }
    parse(start2, count) {
      const { _cachedMeta: meta, _data: data2 } = this;
      const { iScale, _stacked } = meta;
      const iAxis = iScale.axis;
      let sorted = start2 === 0 && count === data2.length ? true : meta._sorted;
      let prev = start2 > 0 && meta._parsed[start2 - 1];
      let i2, cur, parsed;
      if (this._parsing === false) {
        meta._parsed = data2;
        meta._sorted = true;
        parsed = data2;
      } else {
        if (isArray2(data2[start2])) {
          parsed = this.parseArrayData(meta, data2, start2, count);
        } else if (isObject2(data2[start2])) {
          parsed = this.parseObjectData(meta, data2, start2, count);
        } else {
          parsed = this.parsePrimitiveData(meta, data2, start2, count);
        }
        const isNotInOrderComparedToPrev = () => cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
        for (i2 = 0; i2 < count; ++i2) {
          meta._parsed[i2 + start2] = cur = parsed[i2];
          if (sorted) {
            if (isNotInOrderComparedToPrev()) {
              sorted = false;
            }
            prev = cur;
          }
        }
        meta._sorted = sorted;
      }
      if (_stacked) {
        updateStacks(this, parsed);
      }
    }
    parsePrimitiveData(meta, data2, start2, count) {
      const { iScale, vScale } = meta;
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      const labels = iScale.getLabels();
      const singleScale = iScale === vScale;
      const parsed = new Array(count);
      let i2, ilen, index2;
      for (i2 = 0, ilen = count; i2 < ilen; ++i2) {
        index2 = i2 + start2;
        parsed[i2] = {
          [iAxis]: singleScale || iScale.parse(labels[index2], index2),
          [vAxis]: vScale.parse(data2[index2], index2)
        };
      }
      return parsed;
    }
    parseArrayData(meta, data2, start2, count) {
      const { xScale, yScale } = meta;
      const parsed = new Array(count);
      let i2, ilen, index2, item;
      for (i2 = 0, ilen = count; i2 < ilen; ++i2) {
        index2 = i2 + start2;
        item = data2[index2];
        parsed[i2] = {
          x: xScale.parse(item[0], index2),
          y: yScale.parse(item[1], index2)
        };
      }
      return parsed;
    }
    parseObjectData(meta, data2, start2, count) {
      const { xScale, yScale } = meta;
      const { xAxisKey = "x", yAxisKey = "y" } = this._parsing;
      const parsed = new Array(count);
      let i2, ilen, index2, item;
      for (i2 = 0, ilen = count; i2 < ilen; ++i2) {
        index2 = i2 + start2;
        item = data2[index2];
        parsed[i2] = {
          x: xScale.parse(resolveObjectKey(item, xAxisKey), index2),
          y: yScale.parse(resolveObjectKey(item, yAxisKey), index2)
        };
      }
      return parsed;
    }
    getParsed(index2) {
      return this._cachedMeta._parsed[index2];
    }
    getDataElement(index2) {
      return this._cachedMeta.data[index2];
    }
    applyStack(scale, parsed, mode) {
      const chart = this.chart;
      const meta = this._cachedMeta;
      const value = parsed[scale.axis];
      const stack = {
        keys: getSortedDatasetIndices(chart, true),
        values: parsed._stacks[scale.axis]._visualValues
      };
      return applyStack(stack, value, meta.index, {
        mode
      });
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
      const parsedValue = parsed[scale.axis];
      let value = parsedValue === null ? NaN : parsedValue;
      const values = stack && parsed._stacks[scale.axis];
      if (stack && values) {
        stack.values = values;
        value = applyStack(stack, parsedValue, this._cachedMeta.index);
      }
      range.min = Math.min(range.min, value);
      range.max = Math.max(range.max, value);
    }
    getMinMax(scale, canStack) {
      const meta = this._cachedMeta;
      const _parsed = meta._parsed;
      const sorted = meta._sorted && scale === meta.iScale;
      const ilen = _parsed.length;
      const otherScale = this._getOtherScale(scale);
      const stack = createStack(canStack, meta, this.chart);
      const range = {
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY
      };
      const { min: otherMin, max: otherMax } = getUserBounds(otherScale);
      let i2, parsed;
      function _skip() {
        parsed = _parsed[i2];
        const otherValue = parsed[otherScale.axis];
        return !isNumberFinite(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
      }
      for (i2 = 0; i2 < ilen; ++i2) {
        if (_skip()) {
          continue;
        }
        this.updateRangeFromParsed(range, scale, parsed, stack);
        if (sorted) {
          break;
        }
      }
      if (sorted) {
        for (i2 = ilen - 1; i2 >= 0; --i2) {
          if (_skip()) {
            continue;
          }
          this.updateRangeFromParsed(range, scale, parsed, stack);
          break;
        }
      }
      return range;
    }
    getAllParsedValues(scale) {
      const parsed = this._cachedMeta._parsed;
      const values = [];
      let i2, ilen, value;
      for (i2 = 0, ilen = parsed.length; i2 < ilen; ++i2) {
        value = parsed[i2][scale.axis];
        if (isNumberFinite(value)) {
          values.push(value);
        }
      }
      return values;
    }
    getMaxOverflow() {
      return false;
    }
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const iScale = meta.iScale;
      const vScale = meta.vScale;
      const parsed = this.getParsed(index2);
      return {
        label: iScale ? "" + iScale.getLabelForValue(parsed[iScale.axis]) : "",
        value: vScale ? "" + vScale.getLabelForValue(parsed[vScale.axis]) : ""
      };
    }
    _update(mode) {
      const meta = this._cachedMeta;
      this.update(mode || "default");
      meta._clip = toClip(valueOrDefault(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
    }
    update(mode) {
    }
    draw() {
      const ctx = this._ctx;
      const chart = this.chart;
      const meta = this._cachedMeta;
      const elements2 = meta.data || [];
      const area = chart.chartArea;
      const active = [];
      const start2 = this._drawStart || 0;
      const count = this._drawCount || elements2.length - start2;
      const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
      let i2;
      if (meta.dataset) {
        meta.dataset.draw(ctx, area, start2, count);
      }
      for (i2 = start2; i2 < start2 + count; ++i2) {
        const element = elements2[i2];
        if (element.hidden) {
          continue;
        }
        if (element.active && drawActiveElementsOnTop) {
          active.push(element);
        } else {
          element.draw(ctx, area);
        }
      }
      for (i2 = 0; i2 < active.length; ++i2) {
        active[i2].draw(ctx, area);
      }
    }
    getStyle(index2, active) {
      const mode = active ? "active" : "default";
      return index2 === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index2 || 0, mode);
    }
    getContext(index2, active, mode) {
      const dataset = this.getDataset();
      let context;
      if (index2 >= 0 && index2 < this._cachedMeta.data.length) {
        const element = this._cachedMeta.data[index2];
        context = element.$context || (element.$context = createDataContext(this.getContext(), index2, element));
        context.parsed = this.getParsed(index2);
        context.raw = dataset.data[index2];
        context.index = context.dataIndex = index2;
      } else {
        context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
        context.dataset = dataset;
        context.index = context.datasetIndex = this.index;
      }
      context.active = !!active;
      context.mode = mode;
      return context;
    }
    resolveDatasetElementOptions(mode) {
      return this._resolveElementOptions(this.datasetElementType.id, mode);
    }
    resolveDataElementOptions(index2, mode) {
      return this._resolveElementOptions(this.dataElementType.id, mode, index2);
    }
    _resolveElementOptions(elementType, mode = "default", index2) {
      const active = mode === "active";
      const cache = this._cachedDataOpts;
      const cacheKey = elementType + "-" + mode;
      const cached = cache[cacheKey];
      const sharing = this.enableOptionSharing && defined(index2);
      if (cached) {
        return cloneIfNotShared(cached, sharing);
      }
      const config = this.chart.config;
      const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
      const prefixes = active ? [
        `${elementType}Hover`,
        "hover",
        elementType,
        ""
      ] : [
        elementType,
        ""
      ];
      const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
      const names2 = Object.keys(defaults.elements[elementType]);
      const context = () => this.getContext(index2, active, mode);
      const values = config.resolveNamedOptions(scopes, names2, context, prefixes);
      if (values.$shared) {
        values.$shared = sharing;
        cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
      }
      return values;
    }
    _resolveAnimations(index2, transition2, active) {
      const chart = this.chart;
      const cache = this._cachedDataOpts;
      const cacheKey = `animation-${transition2}`;
      const cached = cache[cacheKey];
      if (cached) {
        return cached;
      }
      let options;
      if (chart.options.animation !== false) {
        const config = this.chart.config;
        const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition2);
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
        options = config.createResolver(scopes, this.getContext(index2, active, transition2));
      }
      const animations = new Animations(chart, options && options.animations);
      if (options && options._cacheable) {
        cache[cacheKey] = Object.freeze(animations);
      }
      return animations;
    }
    getSharedOptions(options) {
      if (!options.$shared) {
        return;
      }
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
    }
    includeOptions(mode, sharedOptions) {
      return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
    }
    _getSharedOptions(start2, mode) {
      const firstOpts = this.resolveDataElementOptions(start2, mode);
      const previouslySharedOptions = this._sharedOptions;
      const sharedOptions = this.getSharedOptions(firstOpts);
      const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
      this.updateSharedOptions(sharedOptions, mode, firstOpts);
      return {
        sharedOptions,
        includeOptions
      };
    }
    updateElement(element, index2, properties, mode) {
      if (isDirectUpdateMode(mode)) {
        Object.assign(element, properties);
      } else {
        this._resolveAnimations(index2, mode).update(element, properties);
      }
    }
    updateSharedOptions(sharedOptions, mode, newOptions) {
      if (sharedOptions && !isDirectUpdateMode(mode)) {
        this._resolveAnimations(void 0, mode).update(sharedOptions, newOptions);
      }
    }
    _setStyle(element, index2, mode, active) {
      element.active = active;
      const options = this.getStyle(index2, active);
      this._resolveAnimations(index2, mode, active).update(element, {
        options: !active && this.getSharedOptions(options) || options
      });
    }
    removeHoverStyle(element, datasetIndex, index2) {
      this._setStyle(element, index2, "active", false);
    }
    setHoverStyle(element, datasetIndex, index2) {
      this._setStyle(element, index2, "active", true);
    }
    _removeDatasetHoverStyle() {
      const element = this._cachedMeta.dataset;
      if (element) {
        this._setStyle(element, void 0, "active", false);
      }
    }
    _setDatasetHoverStyle() {
      const element = this._cachedMeta.dataset;
      if (element) {
        this._setStyle(element, void 0, "active", true);
      }
    }
    _resyncElements(resetNewElements) {
      const data2 = this._data;
      const elements2 = this._cachedMeta.data;
      for (const [method, arg1, arg2] of this._syncList) {
        this[method](arg1, arg2);
      }
      this._syncList = [];
      const numMeta = elements2.length;
      const numData = data2.length;
      const count = Math.min(numData, numMeta);
      if (count) {
        this.parse(0, count);
      }
      if (numData > numMeta) {
        this._insertElements(numMeta, numData - numMeta, resetNewElements);
      } else if (numData < numMeta) {
        this._removeElements(numData, numMeta - numData);
      }
    }
    _insertElements(start2, count, resetNewElements = true) {
      const meta = this._cachedMeta;
      const data2 = meta.data;
      const end = start2 + count;
      let i2;
      const move = (arr) => {
        arr.length += count;
        for (i2 = arr.length - 1; i2 >= end; i2--) {
          arr[i2] = arr[i2 - count];
        }
      };
      move(data2);
      for (i2 = start2; i2 < end; ++i2) {
        data2[i2] = new this.dataElementType();
      }
      if (this._parsing) {
        move(meta._parsed);
      }
      this.parse(start2, count);
      if (resetNewElements) {
        this.updateElements(data2, start2, count, "reset");
      }
    }
    updateElements(element, start2, count, mode) {
    }
    _removeElements(start2, count) {
      const meta = this._cachedMeta;
      if (this._parsing) {
        const removed = meta._parsed.splice(start2, count);
        if (meta._stacked) {
          clearStacks(meta, removed);
        }
      }
      meta.data.splice(start2, count);
    }
    _sync(args) {
      if (this._parsing) {
        this._syncList.push(args);
      } else {
        const [method, arg1, arg2] = args;
        this[method](arg1, arg2);
      }
      this.chart._dataChanges.push([
        this.index,
        ...args
      ]);
    }
    _onDataPush() {
      const count = arguments.length;
      this._sync([
        "_insertElements",
        this.getDataset().data.length - count,
        count
      ]);
    }
    _onDataPop() {
      this._sync([
        "_removeElements",
        this._cachedMeta.data.length - 1,
        1
      ]);
    }
    _onDataShift() {
      this._sync([
        "_removeElements",
        0,
        1
      ]);
    }
    _onDataSplice(start2, count) {
      if (count) {
        this._sync([
          "_removeElements",
          start2,
          count
        ]);
      }
      const newCount = arguments.length - 2;
      if (newCount) {
        this._sync([
          "_insertElements",
          start2,
          newCount
        ]);
      }
    }
    _onDataUnshift() {
      this._sync([
        "_insertElements",
        0,
        arguments.length
      ]);
    }
  };
  function getAllScaleValues(scale, type) {
    if (!scale._cache.$bar) {
      const visibleMetas = scale.getMatchingVisibleMetas(type);
      let values = [];
      for (let i2 = 0, ilen = visibleMetas.length; i2 < ilen; i2++) {
        values = values.concat(visibleMetas[i2].controller.getAllParsedValues(scale));
      }
      scale._cache.$bar = _arrayUnique(values.sort((a2, b2) => a2 - b2));
    }
    return scale._cache.$bar;
  }
  function computeMinSampleSize(meta) {
    const scale = meta.iScale;
    const values = getAllScaleValues(scale, meta.type);
    let min = scale._length;
    let i2, ilen, curr, prev;
    const updateMinAndPrev = () => {
      if (curr === 32767 || curr === -32768) {
        return;
      }
      if (defined(prev)) {
        min = Math.min(min, Math.abs(curr - prev) || min);
      }
      prev = curr;
    };
    for (i2 = 0, ilen = values.length; i2 < ilen; ++i2) {
      curr = scale.getPixelForValue(values[i2]);
      updateMinAndPrev();
    }
    prev = void 0;
    for (i2 = 0, ilen = scale.ticks.length; i2 < ilen; ++i2) {
      curr = scale.getPixelForTick(i2);
      updateMinAndPrev();
    }
    return min;
  }
  function computeFitCategoryTraits(index2, ruler, options, stackCount) {
    const thickness = options.barThickness;
    let size2, ratio;
    if (isNullOrUndef(thickness)) {
      size2 = ruler.min * options.categoryPercentage;
      ratio = options.barPercentage;
    } else {
      size2 = thickness * stackCount;
      ratio = 1;
    }
    return {
      chunk: size2 / stackCount,
      ratio,
      start: ruler.pixels[index2] - size2 / 2
    };
  }
  function computeFlexCategoryTraits(index2, ruler, options, stackCount) {
    const pixels = ruler.pixels;
    const curr = pixels[index2];
    let prev = index2 > 0 ? pixels[index2 - 1] : null;
    let next = index2 < pixels.length - 1 ? pixels[index2 + 1] : null;
    const percent = options.categoryPercentage;
    if (prev === null) {
      prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    }
    if (next === null) {
      next = curr + curr - prev;
    }
    const start2 = curr - (curr - Math.min(prev, next)) / 2 * percent;
    const size2 = Math.abs(next - prev) / 2 * percent;
    return {
      chunk: size2 / stackCount,
      ratio: options.barPercentage,
      start: start2
    };
  }
  function parseFloatBar(entry, item, vScale, i2) {
    const startValue = vScale.parse(entry[0], i2);
    const endValue = vScale.parse(entry[1], i2);
    const min = Math.min(startValue, endValue);
    const max = Math.max(startValue, endValue);
    let barStart = min;
    let barEnd = max;
    if (Math.abs(min) > Math.abs(max)) {
      barStart = max;
      barEnd = min;
    }
    item[vScale.axis] = barEnd;
    item._custom = {
      barStart,
      barEnd,
      start: startValue,
      end: endValue,
      min,
      max
    };
  }
  function parseValue(entry, item, vScale, i2) {
    if (isArray2(entry)) {
      parseFloatBar(entry, item, vScale, i2);
    } else {
      item[vScale.axis] = vScale.parse(entry, i2);
    }
    return item;
  }
  function parseArrayOrPrimitive(meta, data2, start2, count) {
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = [];
    let i2, ilen, item, entry;
    for (i2 = start2, ilen = start2 + count; i2 < ilen; ++i2) {
      entry = data2[i2];
      item = {};
      item[iScale.axis] = singleScale || iScale.parse(labels[i2], i2);
      parsed.push(parseValue(entry, item, vScale, i2));
    }
    return parsed;
  }
  function isFloatBar(custom) {
    return custom && custom.barStart !== void 0 && custom.barEnd !== void 0;
  }
  function barSign(size2, vScale, actualBase) {
    if (size2 !== 0) {
      return sign(size2);
    }
    return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
  }
  function borderProps(properties) {
    let reverse, start2, end, top, bottom;
    if (properties.horizontal) {
      reverse = properties.base > properties.x;
      start2 = "left";
      end = "right";
    } else {
      reverse = properties.base < properties.y;
      start2 = "bottom";
      end = "top";
    }
    if (reverse) {
      top = "end";
      bottom = "start";
    } else {
      top = "start";
      bottom = "end";
    }
    return {
      start: start2,
      end,
      reverse,
      top,
      bottom
    };
  }
  function setBorderSkipped(properties, options, stack, index2) {
    let edge = options.borderSkipped;
    const res = {};
    if (!edge) {
      properties.borderSkipped = res;
      return;
    }
    if (edge === true) {
      properties.borderSkipped = {
        top: true,
        right: true,
        bottom: true,
        left: true
      };
      return;
    }
    const { start: start2, end, reverse, top, bottom } = borderProps(properties);
    if (edge === "middle" && stack) {
      properties.enableBorderRadius = true;
      if ((stack._top || 0) === index2) {
        edge = top;
      } else if ((stack._bottom || 0) === index2) {
        edge = bottom;
      } else {
        res[parseEdge(bottom, start2, end, reverse)] = true;
        edge = top;
      }
    }
    res[parseEdge(edge, start2, end, reverse)] = true;
    properties.borderSkipped = res;
  }
  function parseEdge(edge, a2, b2, reverse) {
    if (reverse) {
      edge = swap(edge, a2, b2);
      edge = startEnd(edge, b2, a2);
    } else {
      edge = startEnd(edge, a2, b2);
    }
    return edge;
  }
  function swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
  }
  function startEnd(v2, start2, end) {
    return v2 === "start" ? start2 : v2 === "end" ? end : v2;
  }
  function setInflateAmount(properties, { inflateAmount }, ratio) {
    properties.inflateAmount = inflateAmount === "auto" ? ratio === 1 ? 0.33 : 0 : inflateAmount;
  }
  var BarController = class extends DatasetController {
    static id = "bar";
    static defaults = {
      datasetElementType: false,
      dataElementType: "bar",
      categoryPercentage: 0.8,
      barPercentage: 0.9,
      grouped: true,
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "base",
            "width",
            "height"
          ]
        }
      }
    };
    static overrides = {
      scales: {
        _index_: {
          type: "category",
          offset: true,
          grid: {
            offset: true
          }
        },
        _value_: {
          type: "linear",
          beginAtZero: true
        }
      }
    };
    parsePrimitiveData(meta, data2, start2, count) {
      return parseArrayOrPrimitive(meta, data2, start2, count);
    }
    parseArrayData(meta, data2, start2, count) {
      return parseArrayOrPrimitive(meta, data2, start2, count);
    }
    parseObjectData(meta, data2, start2, count) {
      const { iScale, vScale } = meta;
      const { xAxisKey = "x", yAxisKey = "y" } = this._parsing;
      const iAxisKey = iScale.axis === "x" ? xAxisKey : yAxisKey;
      const vAxisKey = vScale.axis === "x" ? xAxisKey : yAxisKey;
      const parsed = [];
      let i2, ilen, item, obj;
      for (i2 = start2, ilen = start2 + count; i2 < ilen; ++i2) {
        obj = data2[i2];
        item = {};
        item[iScale.axis] = iScale.parse(resolveObjectKey(obj, iAxisKey), i2);
        parsed.push(parseValue(resolveObjectKey(obj, vAxisKey), item, vScale, i2));
      }
      return parsed;
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
      super.updateRangeFromParsed(range, scale, parsed, stack);
      const custom = parsed._custom;
      if (custom && scale === this._cachedMeta.vScale) {
        range.min = Math.min(range.min, custom.min);
        range.max = Math.max(range.max, custom.max);
      }
    }
    getMaxOverflow() {
      return 0;
    }
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const { iScale, vScale } = meta;
      const parsed = this.getParsed(index2);
      const custom = parsed._custom;
      const value = isFloatBar(custom) ? "[" + custom.start + ", " + custom.end + "]" : "" + vScale.getLabelForValue(parsed[vScale.axis]);
      return {
        label: "" + iScale.getLabelForValue(parsed[iScale.axis]),
        value
      };
    }
    initialize() {
      this.enableOptionSharing = true;
      super.initialize();
      const meta = this._cachedMeta;
      meta.stack = this.getDataset().stack;
    }
    update(mode) {
      const meta = this._cachedMeta;
      this.updateElements(meta.data, 0, meta.data.length, mode);
    }
    updateElements(bars, start2, count, mode) {
      const reset = mode === "reset";
      const { index: index2, _cachedMeta: { vScale } } = this;
      const base = vScale.getBasePixel();
      const horizontal = vScale.isHorizontal();
      const ruler = this._getRuler();
      const { sharedOptions, includeOptions } = this._getSharedOptions(start2, mode);
      for (let i2 = start2; i2 < start2 + count; i2++) {
        const parsed = this.getParsed(i2);
        const vpixels = reset || isNullOrUndef(parsed[vScale.axis]) ? {
          base,
          head: base
        } : this._calculateBarValuePixels(i2);
        const ipixels = this._calculateBarIndexPixels(i2, ruler);
        const stack = (parsed._stacks || {})[vScale.axis];
        const properties = {
          horizontal,
          base: vpixels.base,
          enableBorderRadius: !stack || isFloatBar(parsed._custom) || index2 === stack._top || index2 === stack._bottom,
          x: horizontal ? vpixels.head : ipixels.center,
          y: horizontal ? ipixels.center : vpixels.head,
          height: horizontal ? ipixels.size : Math.abs(vpixels.size),
          width: horizontal ? Math.abs(vpixels.size) : ipixels.size
        };
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i2, bars[i2].active ? "active" : mode);
        }
        const options = properties.options || bars[i2].options;
        setBorderSkipped(properties, options, stack, index2);
        setInflateAmount(properties, options, ruler.ratio);
        this.updateElement(bars[i2], i2, properties, mode);
      }
    }
    _getStacks(last, dataIndex) {
      const { iScale } = this._cachedMeta;
      const metasets = iScale.getMatchingVisibleMetas(this._type).filter((meta) => meta.controller.options.grouped);
      const stacked = iScale.options.stacked;
      const stacks = [];
      const currentParsed = this._cachedMeta.controller.getParsed(dataIndex);
      const iScaleValue = currentParsed && currentParsed[iScale.axis];
      const skipNull = (meta) => {
        const parsed = meta._parsed.find((item) => item[iScale.axis] === iScaleValue);
        const val = parsed && parsed[meta.vScale.axis];
        if (isNullOrUndef(val) || isNaN(val)) {
          return true;
        }
      };
      for (const meta of metasets) {
        if (dataIndex !== void 0 && skipNull(meta)) {
          continue;
        }
        if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === void 0 && meta.stack === void 0) {
          stacks.push(meta.stack);
        }
        if (meta.index === last) {
          break;
        }
      }
      if (!stacks.length) {
        stacks.push(void 0);
      }
      return stacks;
    }
    _getStackCount(index2) {
      return this._getStacks(void 0, index2).length;
    }
    _getAxisCount() {
      return this._getAxis().length;
    }
    getFirstScaleIdForIndexAxis() {
      const scales2 = this.chart.scales;
      const indexScaleId = this.chart.options.indexAxis;
      return Object.keys(scales2).filter((key) => scales2[key].axis === indexScaleId).shift();
    }
    _getAxis() {
      const axis = {};
      const firstScaleAxisId = this.getFirstScaleIdForIndexAxis();
      for (const dataset of this.chart.data.datasets) {
        axis[valueOrDefault(this.chart.options.indexAxis === "x" ? dataset.xAxisID : dataset.yAxisID, firstScaleAxisId)] = true;
      }
      return Object.keys(axis);
    }
    _getStackIndex(datasetIndex, name, dataIndex) {
      const stacks = this._getStacks(datasetIndex, dataIndex);
      const index2 = name !== void 0 ? stacks.indexOf(name) : -1;
      return index2 === -1 ? stacks.length - 1 : index2;
    }
    _getRuler() {
      const opts = this.options;
      const meta = this._cachedMeta;
      const iScale = meta.iScale;
      const pixels = [];
      let i2, ilen;
      for (i2 = 0, ilen = meta.data.length; i2 < ilen; ++i2) {
        pixels.push(iScale.getPixelForValue(this.getParsed(i2)[iScale.axis], i2));
      }
      const barThickness = opts.barThickness;
      const min = barThickness || computeMinSampleSize(meta);
      return {
        min,
        pixels,
        start: iScale._startPixel,
        end: iScale._endPixel,
        stackCount: this._getStackCount(),
        scale: iScale,
        grouped: opts.grouped,
        ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
      };
    }
    _calculateBarValuePixels(index2) {
      const { _cachedMeta: { vScale, _stacked, index: datasetIndex }, options: { base: baseValue, minBarLength } } = this;
      const actualBase = baseValue || 0;
      const parsed = this.getParsed(index2);
      const custom = parsed._custom;
      const floating = isFloatBar(custom);
      let value = parsed[vScale.axis];
      let start2 = 0;
      let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
      let head, size2;
      if (length !== value) {
        start2 = length - value;
        length = value;
      }
      if (floating) {
        value = custom.barStart;
        length = custom.barEnd - custom.barStart;
        if (value !== 0 && sign(value) !== sign(custom.barEnd)) {
          start2 = 0;
        }
        start2 += value;
      }
      const startValue = !isNullOrUndef(baseValue) && !floating ? baseValue : start2;
      let base = vScale.getPixelForValue(startValue);
      if (this.chart.getDataVisibility(index2)) {
        head = vScale.getPixelForValue(start2 + length);
      } else {
        head = base;
      }
      size2 = head - base;
      if (Math.abs(size2) < minBarLength) {
        size2 = barSign(size2, vScale, actualBase) * minBarLength;
        if (value === actualBase) {
          base -= size2 / 2;
        }
        const startPixel = vScale.getPixelForDecimal(0);
        const endPixel = vScale.getPixelForDecimal(1);
        const min = Math.min(startPixel, endPixel);
        const max = Math.max(startPixel, endPixel);
        base = Math.max(Math.min(base, max), min);
        head = base + size2;
        if (_stacked && !floating) {
          parsed._stacks[vScale.axis]._visualValues[datasetIndex] = vScale.getValueForPixel(head) - vScale.getValueForPixel(base);
        }
      }
      if (base === vScale.getPixelForValue(actualBase)) {
        const halfGrid = sign(size2) * vScale.getLineWidthForValue(actualBase) / 2;
        base += halfGrid;
        size2 -= halfGrid;
      }
      return {
        size: size2,
        base,
        head,
        center: head + size2 / 2
      };
    }
    _calculateBarIndexPixels(index2, ruler) {
      const scale = ruler.scale;
      const options = this.options;
      const skipNull = options.skipNull;
      const maxBarThickness = valueOrDefault(options.maxBarThickness, Infinity);
      let center, size2;
      const axisCount = this._getAxisCount();
      if (ruler.grouped) {
        const stackCount = skipNull ? this._getStackCount(index2) : ruler.stackCount;
        const range = options.barThickness === "flex" ? computeFlexCategoryTraits(index2, ruler, options, stackCount * axisCount) : computeFitCategoryTraits(index2, ruler, options, stackCount * axisCount);
        const axisID = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID;
        const axisNumber = this._getAxis().indexOf(valueOrDefault(axisID, this.getFirstScaleIdForIndexAxis()));
        const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index2 : void 0) + axisNumber;
        center = range.start + range.chunk * stackIndex + range.chunk / 2;
        size2 = Math.min(maxBarThickness, range.chunk * range.ratio);
      } else {
        center = scale.getPixelForValue(this.getParsed(index2)[scale.axis], index2);
        size2 = Math.min(maxBarThickness, ruler.min * ruler.ratio);
      }
      return {
        base: center - size2 / 2,
        head: center + size2 / 2,
        center,
        size: size2
      };
    }
    draw() {
      const meta = this._cachedMeta;
      const vScale = meta.vScale;
      const rects = meta.data;
      const ilen = rects.length;
      let i2 = 0;
      for (; i2 < ilen; ++i2) {
        if (this.getParsed(i2)[vScale.axis] !== null && !rects[i2].hidden) {
          rects[i2].draw(this._ctx);
        }
      }
    }
  };
  var BubbleController = class extends DatasetController {
    static id = "bubble";
    static defaults = {
      datasetElementType: false,
      dataElementType: "point",
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "borderWidth",
            "radius"
          ]
        }
      }
    };
    static overrides = {
      scales: {
        x: {
          type: "linear"
        },
        y: {
          type: "linear"
        }
      }
    };
    initialize() {
      this.enableOptionSharing = true;
      super.initialize();
    }
    parsePrimitiveData(meta, data2, start2, count) {
      const parsed = super.parsePrimitiveData(meta, data2, start2, count);
      for (let i2 = 0; i2 < parsed.length; i2++) {
        parsed[i2]._custom = this.resolveDataElementOptions(i2 + start2).radius;
      }
      return parsed;
    }
    parseArrayData(meta, data2, start2, count) {
      const parsed = super.parseArrayData(meta, data2, start2, count);
      for (let i2 = 0; i2 < parsed.length; i2++) {
        const item = data2[start2 + i2];
        parsed[i2]._custom = valueOrDefault(item[2], this.resolveDataElementOptions(i2 + start2).radius);
      }
      return parsed;
    }
    parseObjectData(meta, data2, start2, count) {
      const parsed = super.parseObjectData(meta, data2, start2, count);
      for (let i2 = 0; i2 < parsed.length; i2++) {
        const item = data2[start2 + i2];
        parsed[i2]._custom = valueOrDefault(item && item.r && +item.r, this.resolveDataElementOptions(i2 + start2).radius);
      }
      return parsed;
    }
    getMaxOverflow() {
      const data2 = this._cachedMeta.data;
      let max = 0;
      for (let i2 = data2.length - 1; i2 >= 0; --i2) {
        max = Math.max(max, data2[i2].size(this.resolveDataElementOptions(i2)) / 2);
      }
      return max > 0 && max;
    }
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const labels = this.chart.data.labels || [];
      const { xScale, yScale } = meta;
      const parsed = this.getParsed(index2);
      const x2 = xScale.getLabelForValue(parsed.x);
      const y2 = yScale.getLabelForValue(parsed.y);
      const r2 = parsed._custom;
      return {
        label: labels[index2] || "",
        value: "(" + x2 + ", " + y2 + (r2 ? ", " + r2 : "") + ")"
      };
    }
    update(mode) {
      const points = this._cachedMeta.data;
      this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start2, count, mode) {
      const reset = mode === "reset";
      const { iScale, vScale } = this._cachedMeta;
      const { sharedOptions, includeOptions } = this._getSharedOptions(start2, mode);
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      for (let i2 = start2; i2 < start2 + count; i2++) {
        const point = points[i2];
        const parsed = !reset && this.getParsed(i2);
        const properties = {};
        const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
        const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
        properties.skip = isNaN(iPixel) || isNaN(vPixel);
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i2, point.active ? "active" : mode);
          if (reset) {
            properties.options.radius = 0;
          }
        }
        this.updateElement(point, i2, properties, mode);
      }
    }
    resolveDataElementOptions(index2, mode) {
      const parsed = this.getParsed(index2);
      let values = super.resolveDataElementOptions(index2, mode);
      if (values.$shared) {
        values = Object.assign({}, values, {
          $shared: false
        });
      }
      const radius = values.radius;
      if (mode !== "active") {
        values.radius = 0;
      }
      values.radius += valueOrDefault(parsed && parsed._custom, radius);
      return values;
    }
  };
  function getRatioAndOffset(rotation, circumference, cutout) {
    let ratioX = 1;
    let ratioY = 1;
    let offsetX = 0;
    let offsetY = 0;
    if (circumference < TAU) {
      const startAngle = rotation;
      const endAngle = startAngle + circumference;
      const startX = Math.cos(startAngle);
      const startY = Math.sin(startAngle);
      const endX = Math.cos(endAngle);
      const endY = Math.sin(endAngle);
      const calcMax = (angle, a2, b2) => _angleBetween(angle, startAngle, endAngle, true) ? 1 : Math.max(a2, a2 * cutout, b2, b2 * cutout);
      const calcMin = (angle, a2, b2) => _angleBetween(angle, startAngle, endAngle, true) ? -1 : Math.min(a2, a2 * cutout, b2, b2 * cutout);
      const maxX = calcMax(0, startX, endX);
      const maxY = calcMax(HALF_PI, startY, endY);
      const minX = calcMin(PI, startX, endX);
      const minY = calcMin(PI + HALF_PI, startY, endY);
      ratioX = (maxX - minX) / 2;
      ratioY = (maxY - minY) / 2;
      offsetX = -(maxX + minX) / 2;
      offsetY = -(maxY + minY) / 2;
    }
    return {
      ratioX,
      ratioY,
      offsetX,
      offsetY
    };
  }
  var DoughnutController = class extends DatasetController {
    static id = "doughnut";
    static defaults = {
      datasetElementType: false,
      dataElementType: "arc",
      animation: {
        animateRotate: true,
        animateScale: false
      },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "circumference",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "startAngle",
            "x",
            "y",
            "offset",
            "borderWidth",
            "spacing"
          ]
        }
      },
      cutout: "50%",
      rotation: 0,
      circumference: 360,
      radius: "100%",
      spacing: 0,
      indexAxis: "r"
    };
    static descriptors = {
      _scriptable: (name) => name !== "spacing",
      _indexable: (name) => name !== "spacing" && !name.startsWith("borderDash") && !name.startsWith("hoverBorderDash")
    };
    static overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(chart) {
              const data2 = chart.data;
              const { labels: { pointStyle, textAlign, color: color2, useBorderRadius, borderRadius } } = chart.legend.options;
              if (data2.labels.length && data2.datasets.length) {
                return data2.labels.map((label, i2) => {
                  const meta = chart.getDatasetMeta(0);
                  const style = meta.controller.getStyle(i2);
                  return {
                    text: label,
                    fillStyle: style.backgroundColor,
                    fontColor: color2,
                    hidden: !chart.getDataVisibility(i2),
                    lineDash: style.borderDash,
                    lineDashOffset: style.borderDashOffset,
                    lineJoin: style.borderJoinStyle,
                    lineWidth: style.borderWidth,
                    strokeStyle: style.borderColor,
                    textAlign,
                    pointStyle,
                    borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
                    index: i2
                  };
                });
              }
              return [];
            }
          },
          onClick(e2, legendItem, legend) {
            legend.chart.toggleDataVisibility(legendItem.index);
            legend.chart.update();
          }
        }
      }
    };
    constructor(chart, datasetIndex) {
      super(chart, datasetIndex);
      this.enableOptionSharing = true;
      this.innerRadius = void 0;
      this.outerRadius = void 0;
      this.offsetX = void 0;
      this.offsetY = void 0;
    }
    linkScales() {
    }
    parse(start2, count) {
      const data2 = this.getDataset().data;
      const meta = this._cachedMeta;
      if (this._parsing === false) {
        meta._parsed = data2;
      } else {
        let getter = (i3) => +data2[i3];
        if (isObject2(data2[start2])) {
          const { key = "value" } = this._parsing;
          getter = (i3) => +resolveObjectKey(data2[i3], key);
        }
        let i2, ilen;
        for (i2 = start2, ilen = start2 + count; i2 < ilen; ++i2) {
          meta._parsed[i2] = getter(i2);
        }
      }
    }
    _getRotation() {
      return toRadians(this.options.rotation - 90);
    }
    _getCircumference() {
      return toRadians(this.options.circumference);
    }
    _getRotationExtents() {
      let min = TAU;
      let max = -TAU;
      for (let i2 = 0; i2 < this.chart.data.datasets.length; ++i2) {
        if (this.chart.isDatasetVisible(i2) && this.chart.getDatasetMeta(i2).type === this._type) {
          const controller = this.chart.getDatasetMeta(i2).controller;
          const rotation = controller._getRotation();
          const circumference = controller._getCircumference();
          min = Math.min(min, rotation);
          max = Math.max(max, rotation + circumference);
        }
      }
      return {
        rotation: min,
        circumference: max - min
      };
    }
    update(mode) {
      const chart = this.chart;
      const { chartArea } = chart;
      const meta = this._cachedMeta;
      const arcs = meta.data;
      const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
      const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
      const cutout = Math.min(toPercentage(this.options.cutout, maxSize), 1);
      const chartWeight = this._getRingWeight(this.index);
      const { circumference, rotation } = this._getRotationExtents();
      const { ratioX, ratioY, offsetX, offsetY } = getRatioAndOffset(rotation, circumference, cutout);
      const maxWidth = (chartArea.width - spacing) / ratioX;
      const maxHeight = (chartArea.height - spacing) / ratioY;
      const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
      const outerRadius = toDimension(this.options.radius, maxRadius);
      const innerRadius = Math.max(outerRadius * cutout, 0);
      const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
      this.offsetX = offsetX * outerRadius;
      this.offsetY = offsetY * outerRadius;
      meta.total = this.calculateTotal();
      this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
      this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
      this.updateElements(arcs, 0, arcs.length, mode);
    }
    _circumference(i2, reset) {
      const opts = this.options;
      const meta = this._cachedMeta;
      const circumference = this._getCircumference();
      if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i2) || meta._parsed[i2] === null || meta.data[i2].hidden) {
        return 0;
      }
      return this.calculateCircumference(meta._parsed[i2] * circumference / TAU);
    }
    updateElements(arcs, start2, count, mode) {
      const reset = mode === "reset";
      const chart = this.chart;
      const chartArea = chart.chartArea;
      const opts = chart.options;
      const animationOpts = opts.animation;
      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;
      const animateScale = reset && animationOpts.animateScale;
      const innerRadius = animateScale ? 0 : this.innerRadius;
      const outerRadius = animateScale ? 0 : this.outerRadius;
      const { sharedOptions, includeOptions } = this._getSharedOptions(start2, mode);
      let startAngle = this._getRotation();
      let i2;
      for (i2 = 0; i2 < start2; ++i2) {
        startAngle += this._circumference(i2, reset);
      }
      for (i2 = start2; i2 < start2 + count; ++i2) {
        const circumference = this._circumference(i2, reset);
        const arc = arcs[i2];
        const properties = {
          x: centerX + this.offsetX,
          y: centerY + this.offsetY,
          startAngle,
          endAngle: startAngle + circumference,
          circumference,
          outerRadius,
          innerRadius
        };
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i2, arc.active ? "active" : mode);
        }
        startAngle += circumference;
        this.updateElement(arc, i2, properties, mode);
      }
    }
    calculateTotal() {
      const meta = this._cachedMeta;
      const metaData = meta.data;
      let total = 0;
      let i2;
      for (i2 = 0; i2 < metaData.length; i2++) {
        const value = meta._parsed[i2];
        if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i2) && !metaData[i2].hidden) {
          total += Math.abs(value);
        }
      }
      return total;
    }
    calculateCircumference(value) {
      const total = this._cachedMeta.total;
      if (total > 0 && !isNaN(value)) {
        return TAU * (Math.abs(value) / total);
      }
      return 0;
    }
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const chart = this.chart;
      const labels = chart.data.labels || [];
      const value = formatNumber(meta._parsed[index2], chart.options.locale);
      return {
        label: labels[index2] || "",
        value
      };
    }
    getMaxBorderWidth(arcs) {
      let max = 0;
      const chart = this.chart;
      let i2, ilen, meta, controller, options;
      if (!arcs) {
        for (i2 = 0, ilen = chart.data.datasets.length; i2 < ilen; ++i2) {
          if (chart.isDatasetVisible(i2)) {
            meta = chart.getDatasetMeta(i2);
            arcs = meta.data;
            controller = meta.controller;
            break;
          }
        }
      }
      if (!arcs) {
        return 0;
      }
      for (i2 = 0, ilen = arcs.length; i2 < ilen; ++i2) {
        options = controller.resolveDataElementOptions(i2);
        if (options.borderAlign !== "inner") {
          max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
        }
      }
      return max;
    }
    getMaxOffset(arcs) {
      let max = 0;
      for (let i2 = 0, ilen = arcs.length; i2 < ilen; ++i2) {
        const options = this.resolveDataElementOptions(i2);
        max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
      }
      return max;
    }
    _getRingWeightOffset(datasetIndex) {
      let ringWeightOffset = 0;
      for (let i2 = 0; i2 < datasetIndex; ++i2) {
        if (this.chart.isDatasetVisible(i2)) {
          ringWeightOffset += this._getRingWeight(i2);
        }
      }
      return ringWeightOffset;
    }
    _getRingWeight(datasetIndex) {
      return Math.max(valueOrDefault(this.chart.data.datasets[datasetIndex].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
  };
  var LineController = class extends DatasetController {
    static id = "line";
    static defaults = {
      datasetElementType: "line",
      dataElementType: "point",
      showLine: true,
      spanGaps: false
    };
    static overrides = {
      scales: {
        _index_: {
          type: "category"
        },
        _value_: {
          type: "linear"
        }
      }
    };
    initialize() {
      this.enableOptionSharing = true;
      this.supportsDecimation = true;
      super.initialize();
    }
    update(mode) {
      const meta = this._cachedMeta;
      const { dataset: line, data: points = [], _dataset } = meta;
      const animationsDisabled = this.chart._animationsDisabled;
      let { start: start2, count } = _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
      this._drawStart = start2;
      this._drawCount = count;
      if (_scaleRangesChanged(meta)) {
        start2 = 0;
        count = points.length;
      }
      line._chart = this.chart;
      line._datasetIndex = this.index;
      line._decimated = !!_dataset._decimated;
      line.points = points;
      const options = this.resolveDatasetElementOptions(mode);
      if (!this.options.showLine) {
        options.borderWidth = 0;
      }
      options.segment = this.options.segment;
      this.updateElement(line, void 0, {
        animated: !animationsDisabled,
        options
      }, mode);
      this.updateElements(points, start2, count, mode);
    }
    updateElements(points, start2, count, mode) {
      const reset = mode === "reset";
      const { iScale, vScale, _stacked, _dataset } = this._cachedMeta;
      const { sharedOptions, includeOptions } = this._getSharedOptions(start2, mode);
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      const { spanGaps, segment } = this.options;
      const maxGapLength = isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
      const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
      const end = start2 + count;
      const pointsCount = points.length;
      let prevParsed = start2 > 0 && this.getParsed(start2 - 1);
      for (let i2 = 0; i2 < pointsCount; ++i2) {
        const point = points[i2];
        const properties = directUpdate ? point : {};
        if (i2 < start2 || i2 >= end) {
          properties.skip = true;
          continue;
        }
        const parsed = this.getParsed(i2);
        const nullData = isNullOrUndef(parsed[vAxis]);
        const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i2);
        const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i2);
        properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
        properties.stop = i2 > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
        if (segment) {
          properties.parsed = parsed;
          properties.raw = _dataset.data[i2];
        }
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i2, point.active ? "active" : mode);
        }
        if (!directUpdate) {
          this.updateElement(point, i2, properties, mode);
        }
        prevParsed = parsed;
      }
    }
    getMaxOverflow() {
      const meta = this._cachedMeta;
      const dataset = meta.dataset;
      const border = dataset.options && dataset.options.borderWidth || 0;
      const data2 = meta.data || [];
      if (!data2.length) {
        return border;
      }
      const firstPoint = data2[0].size(this.resolveDataElementOptions(0));
      const lastPoint = data2[data2.length - 1].size(this.resolveDataElementOptions(data2.length - 1));
      return Math.max(border, firstPoint, lastPoint) / 2;
    }
    draw() {
      const meta = this._cachedMeta;
      meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
      super.draw();
    }
  };
  var PolarAreaController = class extends DatasetController {
    static id = "polarArea";
    static defaults = {
      dataElementType: "arc",
      animation: {
        animateRotate: true,
        animateScale: true
      },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius"
          ]
        }
      },
      indexAxis: "r",
      startAngle: 0
    };
    static overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(chart) {
              const data2 = chart.data;
              if (data2.labels.length && data2.datasets.length) {
                const { labels: { pointStyle, color: color2 } } = chart.legend.options;
                return data2.labels.map((label, i2) => {
                  const meta = chart.getDatasetMeta(0);
                  const style = meta.controller.getStyle(i2);
                  return {
                    text: label,
                    fillStyle: style.backgroundColor,
                    strokeStyle: style.borderColor,
                    fontColor: color2,
                    lineWidth: style.borderWidth,
                    pointStyle,
                    hidden: !chart.getDataVisibility(i2),
                    index: i2
                  };
                });
              }
              return [];
            }
          },
          onClick(e2, legendItem, legend) {
            legend.chart.toggleDataVisibility(legendItem.index);
            legend.chart.update();
          }
        }
      },
      scales: {
        r: {
          type: "radialLinear",
          angleLines: {
            display: false
          },
          beginAtZero: true,
          grid: {
            circular: true
          },
          pointLabels: {
            display: false
          },
          startAngle: 0
        }
      }
    };
    constructor(chart, datasetIndex) {
      super(chart, datasetIndex);
      this.innerRadius = void 0;
      this.outerRadius = void 0;
    }
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const chart = this.chart;
      const labels = chart.data.labels || [];
      const value = formatNumber(meta._parsed[index2].r, chart.options.locale);
      return {
        label: labels[index2] || "",
        value
      };
    }
    parseObjectData(meta, data2, start2, count) {
      return _parseObjectDataRadialScale.bind(this)(meta, data2, start2, count);
    }
    update(mode) {
      const arcs = this._cachedMeta.data;
      this._updateRadius();
      this.updateElements(arcs, 0, arcs.length, mode);
    }
    getMinMax() {
      const meta = this._cachedMeta;
      const range = {
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY
      };
      meta.data.forEach((element, index2) => {
        const parsed = this.getParsed(index2).r;
        if (!isNaN(parsed) && this.chart.getDataVisibility(index2)) {
          if (parsed < range.min) {
            range.min = parsed;
          }
          if (parsed > range.max) {
            range.max = parsed;
          }
        }
      });
      return range;
    }
    _updateRadius() {
      const chart = this.chart;
      const chartArea = chart.chartArea;
      const opts = chart.options;
      const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
      const outerRadius = Math.max(minSize / 2, 0);
      const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
      const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
      this.outerRadius = outerRadius - radiusLength * this.index;
      this.innerRadius = this.outerRadius - radiusLength;
    }
    updateElements(arcs, start2, count, mode) {
      const reset = mode === "reset";
      const chart = this.chart;
      const opts = chart.options;
      const animationOpts = opts.animation;
      const scale = this._cachedMeta.rScale;
      const centerX = scale.xCenter;
      const centerY = scale.yCenter;
      const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * PI;
      let angle = datasetStartAngle;
      let i2;
      const defaultAngle = 360 / this.countVisibleElements();
      for (i2 = 0; i2 < start2; ++i2) {
        angle += this._computeAngle(i2, mode, defaultAngle);
      }
      for (i2 = start2; i2 < start2 + count; i2++) {
        const arc = arcs[i2];
        let startAngle = angle;
        let endAngle = angle + this._computeAngle(i2, mode, defaultAngle);
        let outerRadius = chart.getDataVisibility(i2) ? scale.getDistanceFromCenterForValue(this.getParsed(i2).r) : 0;
        angle = endAngle;
        if (reset) {
          if (animationOpts.animateScale) {
            outerRadius = 0;
          }
          if (animationOpts.animateRotate) {
            startAngle = endAngle = datasetStartAngle;
          }
        }
        const properties = {
          x: centerX,
          y: centerY,
          innerRadius: 0,
          outerRadius,
          startAngle,
          endAngle,
          options: this.resolveDataElementOptions(i2, arc.active ? "active" : mode)
        };
        this.updateElement(arc, i2, properties, mode);
      }
    }
    countVisibleElements() {
      const meta = this._cachedMeta;
      let count = 0;
      meta.data.forEach((element, index2) => {
        if (!isNaN(this.getParsed(index2).r) && this.chart.getDataVisibility(index2)) {
          count++;
        }
      });
      return count;
    }
    _computeAngle(index2, mode, defaultAngle) {
      return this.chart.getDataVisibility(index2) ? toRadians(this.resolveDataElementOptions(index2, mode).angle || defaultAngle) : 0;
    }
  };
  var PieController = class extends DoughnutController {
    static id = "pie";
    static defaults = {
      cutout: 0,
      rotation: 0,
      circumference: 360,
      radius: "100%"
    };
  };
  var RadarController = class extends DatasetController {
    static id = "radar";
    static defaults = {
      datasetElementType: "line",
      dataElementType: "point",
      indexAxis: "r",
      showLine: true,
      elements: {
        line: {
          fill: "start"
        }
      }
    };
    static overrides = {
      aspectRatio: 1,
      scales: {
        r: {
          type: "radialLinear"
        }
      }
    };
    getLabelAndValue(index2) {
      const vScale = this._cachedMeta.vScale;
      const parsed = this.getParsed(index2);
      return {
        label: vScale.getLabels()[index2],
        value: "" + vScale.getLabelForValue(parsed[vScale.axis])
      };
    }
    parseObjectData(meta, data2, start2, count) {
      return _parseObjectDataRadialScale.bind(this)(meta, data2, start2, count);
    }
    update(mode) {
      const meta = this._cachedMeta;
      const line = meta.dataset;
      const points = meta.data || [];
      const labels = meta.iScale.getLabels();
      line.points = points;
      if (mode !== "resize") {
        const options = this.resolveDatasetElementOptions(mode);
        if (!this.options.showLine) {
          options.borderWidth = 0;
        }
        const properties = {
          _loop: true,
          _fullLoop: labels.length === points.length,
          options
        };
        this.updateElement(line, void 0, properties, mode);
      }
      this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start2, count, mode) {
      const scale = this._cachedMeta.rScale;
      const reset = mode === "reset";
      for (let i2 = start2; i2 < start2 + count; i2++) {
        const point = points[i2];
        const options = this.resolveDataElementOptions(i2, point.active ? "active" : mode);
        const pointPosition = scale.getPointPositionForValue(i2, this.getParsed(i2).r);
        const x2 = reset ? scale.xCenter : pointPosition.x;
        const y2 = reset ? scale.yCenter : pointPosition.y;
        const properties = {
          x: x2,
          y: y2,
          angle: pointPosition.angle,
          skip: isNaN(x2) || isNaN(y2),
          options
        };
        this.updateElement(point, i2, properties, mode);
      }
    }
  };
  var ScatterController = class extends DatasetController {
    static id = "scatter";
    static defaults = {
      datasetElementType: false,
      dataElementType: "point",
      showLine: false,
      fill: false
    };
    static overrides = {
      interaction: {
        mode: "point"
      },
      scales: {
        x: {
          type: "linear"
        },
        y: {
          type: "linear"
        }
      }
    };
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const labels = this.chart.data.labels || [];
      const { xScale, yScale } = meta;
      const parsed = this.getParsed(index2);
      const x2 = xScale.getLabelForValue(parsed.x);
      const y2 = yScale.getLabelForValue(parsed.y);
      return {
        label: labels[index2] || "",
        value: "(" + x2 + ", " + y2 + ")"
      };
    }
    update(mode) {
      const meta = this._cachedMeta;
      const { data: points = [] } = meta;
      const animationsDisabled = this.chart._animationsDisabled;
      let { start: start2, count } = _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
      this._drawStart = start2;
      this._drawCount = count;
      if (_scaleRangesChanged(meta)) {
        start2 = 0;
        count = points.length;
      }
      if (this.options.showLine) {
        if (!this.datasetElementType) {
          this.addElements();
        }
        const { dataset: line, _dataset } = meta;
        line._chart = this.chart;
        line._datasetIndex = this.index;
        line._decimated = !!_dataset._decimated;
        line.points = points;
        const options = this.resolveDatasetElementOptions(mode);
        options.segment = this.options.segment;
        this.updateElement(line, void 0, {
          animated: !animationsDisabled,
          options
        }, mode);
      } else if (this.datasetElementType) {
        delete meta.dataset;
        this.datasetElementType = false;
      }
      this.updateElements(points, start2, count, mode);
    }
    addElements() {
      const { showLine } = this.options;
      if (!this.datasetElementType && showLine) {
        this.datasetElementType = this.chart.registry.getElement("line");
      }
      super.addElements();
    }
    updateElements(points, start2, count, mode) {
      const reset = mode === "reset";
      const { iScale, vScale, _stacked, _dataset } = this._cachedMeta;
      const firstOpts = this.resolveDataElementOptions(start2, mode);
      const sharedOptions = this.getSharedOptions(firstOpts);
      const includeOptions = this.includeOptions(mode, sharedOptions);
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      const { spanGaps, segment } = this.options;
      const maxGapLength = isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
      const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
      let prevParsed = start2 > 0 && this.getParsed(start2 - 1);
      for (let i2 = start2; i2 < start2 + count; ++i2) {
        const point = points[i2];
        const parsed = this.getParsed(i2);
        const properties = directUpdate ? point : {};
        const nullData = isNullOrUndef(parsed[vAxis]);
        const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i2);
        const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i2);
        properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
        properties.stop = i2 > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
        if (segment) {
          properties.parsed = parsed;
          properties.raw = _dataset.data[i2];
        }
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i2, point.active ? "active" : mode);
        }
        if (!directUpdate) {
          this.updateElement(point, i2, properties, mode);
        }
        prevParsed = parsed;
      }
      this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
    getMaxOverflow() {
      const meta = this._cachedMeta;
      const data2 = meta.data || [];
      if (!this.options.showLine) {
        let max = 0;
        for (let i2 = data2.length - 1; i2 >= 0; --i2) {
          max = Math.max(max, data2[i2].size(this.resolveDataElementOptions(i2)) / 2);
        }
        return max > 0 && max;
      }
      const dataset = meta.dataset;
      const border = dataset.options && dataset.options.borderWidth || 0;
      if (!data2.length) {
        return border;
      }
      const firstPoint = data2[0].size(this.resolveDataElementOptions(0));
      const lastPoint = data2[data2.length - 1].size(this.resolveDataElementOptions(data2.length - 1));
      return Math.max(border, firstPoint, lastPoint) / 2;
    }
  };
  var controllers = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController
  });
  function abstract() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
  }
  var DateAdapterBase = class _DateAdapterBase {
    /**
    * Override default date adapter methods.
    * Accepts type parameter to define options type.
    * @example
    * Chart._adapters._date.override<{myAdapterOption: string}>({
    *   init() {
    *     console.log(this.options.myAdapterOption);
    *   }
    * })
    */
    static override(members) {
      Object.assign(_DateAdapterBase.prototype, members);
    }
    options;
    constructor(options) {
      this.options = options || {};
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    init() {
    }
    formats() {
      return abstract();
    }
    parse() {
      return abstract();
    }
    format() {
      return abstract();
    }
    add() {
      return abstract();
    }
    diff() {
      return abstract();
    }
    startOf() {
      return abstract();
    }
    endOf() {
      return abstract();
    }
  };
  var adapters = {
    _date: DateAdapterBase
  };
  function binarySearch(metaset, axis, value, intersect) {
    const { controller, data: data2, _sorted } = metaset;
    const iScale = controller._cachedMeta.iScale;
    const spanGaps = metaset.dataset ? metaset.dataset.options ? metaset.dataset.options.spanGaps : null : null;
    if (iScale && axis === iScale.axis && axis !== "r" && _sorted && data2.length) {
      const lookupMethod = iScale._reversePixels ? _rlookupByKey : _lookupByKey;
      if (!intersect) {
        const result = lookupMethod(data2, axis, value);
        if (spanGaps) {
          const { vScale } = controller._cachedMeta;
          const { _parsed } = metaset;
          const distanceToDefinedLo = _parsed.slice(0, result.lo + 1).reverse().findIndex((point) => !isNullOrUndef(point[vScale.axis]));
          result.lo -= Math.max(0, distanceToDefinedLo);
          const distanceToDefinedHi = _parsed.slice(result.hi).findIndex((point) => !isNullOrUndef(point[vScale.axis]));
          result.hi += Math.max(0, distanceToDefinedHi);
        }
        return result;
      } else if (controller._sharedOptions) {
        const el = data2[0];
        const range = typeof el.getRange === "function" && el.getRange(axis);
        if (range) {
          const start2 = lookupMethod(data2, axis, value - range);
          const end = lookupMethod(data2, axis, value + range);
          return {
            lo: start2.lo,
            hi: end.hi
          };
        }
      }
    }
    return {
      lo: 0,
      hi: data2.length - 1
    };
  }
  function evaluateInteractionItems(chart, axis, position, handler4, intersect) {
    const metasets = chart.getSortedVisibleDatasetMetas();
    const value = position[axis];
    for (let i2 = 0, ilen = metasets.length; i2 < ilen; ++i2) {
      const { index: index2, data: data2 } = metasets[i2];
      const { lo, hi: hi2 } = binarySearch(metasets[i2], axis, value, intersect);
      for (let j2 = lo; j2 <= hi2; ++j2) {
        const element = data2[j2];
        if (!element.skip) {
          handler4(element, index2, j2);
        }
      }
    }
  }
  function getDistanceMetricForAxis(axis) {
    const useX = axis.indexOf("x") !== -1;
    const useY = axis.indexOf("y") !== -1;
    return function(pt1, pt2) {
      const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
      const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
      return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
  }
  function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
    const items = [];
    if (!includeInvisible && !chart.isPointInArea(position)) {
      return items;
    }
    const evaluationFunc = function(element, datasetIndex, index2) {
      if (!includeInvisible && !_isPointInArea(element, chart.chartArea, 0)) {
        return;
      }
      if (element.inRange(position.x, position.y, useFinalPosition)) {
        items.push({
          element,
          datasetIndex,
          index: index2
        });
      }
    };
    evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
    return items;
  }
  function getNearestRadialItems(chart, position, axis, useFinalPosition) {
    let items = [];
    function evaluationFunc(element, datasetIndex, index2) {
      const { startAngle, endAngle } = element.getProps([
        "startAngle",
        "endAngle"
      ], useFinalPosition);
      const { angle } = getAngleFromPoint(element, {
        x: position.x,
        y: position.y
      });
      if (_angleBetween(angle, startAngle, endAngle)) {
        items.push({
          element,
          datasetIndex,
          index: index2
        });
      }
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
  }
  function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    let items = [];
    const distanceMetric = getDistanceMetricForAxis(axis);
    let minDistance = Number.POSITIVE_INFINITY;
    function evaluationFunc(element, datasetIndex, index2) {
      const inRange2 = element.inRange(position.x, position.y, useFinalPosition);
      if (intersect && !inRange2) {
        return;
      }
      const center = element.getCenterPoint(useFinalPosition);
      const pointInArea = !!includeInvisible || chart.isPointInArea(center);
      if (!pointInArea && !inRange2) {
        return;
      }
      const distance = distanceMetric(position, center);
      if (distance < minDistance) {
        items = [
          {
            element,
            datasetIndex,
            index: index2
          }
        ];
        minDistance = distance;
      } else if (distance === minDistance) {
        items.push({
          element,
          datasetIndex,
          index: index2
        });
      }
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
  }
  function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    if (!includeInvisible && !chart.isPointInArea(position)) {
      return [];
    }
    return axis === "r" && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
  }
  function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
    const items = [];
    const rangeMethod = axis === "x" ? "inXRange" : "inYRange";
    let intersectsItem = false;
    evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index2) => {
      if (element[rangeMethod] && element[rangeMethod](position[axis], useFinalPosition)) {
        items.push({
          element,
          datasetIndex,
          index: index2
        });
        intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
      }
    });
    if (intersect && !intersectsItem) {
      return [];
    }
    return items;
  }
  var Interaction = {
    evaluateInteractionItems,
    modes: {
      index(chart, e2, options, useFinalPosition) {
        const position = getRelativePosition(e2, chart);
        const axis = options.axis || "x";
        const includeInvisible = options.includeInvisible || false;
        const items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
        const elements2 = [];
        if (!items.length) {
          return [];
        }
        chart.getSortedVisibleDatasetMetas().forEach((meta) => {
          const index2 = items[0].index;
          const element = meta.data[index2];
          if (element && !element.skip) {
            elements2.push({
              element,
              datasetIndex: meta.index,
              index: index2
            });
          }
        });
        return elements2;
      },
      dataset(chart, e2, options, useFinalPosition) {
        const position = getRelativePosition(e2, chart);
        const axis = options.axis || "xy";
        const includeInvisible = options.includeInvisible || false;
        let items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
        if (items.length > 0) {
          const datasetIndex = items[0].datasetIndex;
          const data2 = chart.getDatasetMeta(datasetIndex).data;
          items = [];
          for (let i2 = 0; i2 < data2.length; ++i2) {
            items.push({
              element: data2[i2],
              datasetIndex,
              index: i2
            });
          }
        }
        return items;
      },
      point(chart, e2, options, useFinalPosition) {
        const position = getRelativePosition(e2, chart);
        const axis = options.axis || "xy";
        const includeInvisible = options.includeInvisible || false;
        return getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
      },
      nearest(chart, e2, options, useFinalPosition) {
        const position = getRelativePosition(e2, chart);
        const axis = options.axis || "xy";
        const includeInvisible = options.includeInvisible || false;
        return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
      },
      x(chart, e2, options, useFinalPosition) {
        const position = getRelativePosition(e2, chart);
        return getAxisItems(chart, position, "x", options.intersect, useFinalPosition);
      },
      y(chart, e2, options, useFinalPosition) {
        const position = getRelativePosition(e2, chart);
        return getAxisItems(chart, position, "y", options.intersect, useFinalPosition);
      }
    }
  };
  var STATIC_POSITIONS = [
    "left",
    "top",
    "right",
    "bottom"
  ];
  function filterByPosition(array, position) {
    return array.filter((v2) => v2.pos === position);
  }
  function filterDynamicPositionByAxis(array, axis) {
    return array.filter((v2) => STATIC_POSITIONS.indexOf(v2.pos) === -1 && v2.box.axis === axis);
  }
  function sortByWeight(array, reverse) {
    return array.sort((a2, b2) => {
      const v0 = reverse ? b2 : a2;
      const v1 = reverse ? a2 : b2;
      return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
  }
  function wrapBoxes(boxes) {
    const layoutBoxes = [];
    let i2, ilen, box, pos, stack, stackWeight;
    for (i2 = 0, ilen = (boxes || []).length; i2 < ilen; ++i2) {
      box = boxes[i2];
      ({ position: pos, options: { stack, stackWeight = 1 } } = box);
      layoutBoxes.push({
        index: i2,
        box,
        pos,
        horizontal: box.isHorizontal(),
        weight: box.weight,
        stack: stack && pos + stack,
        stackWeight
      });
    }
    return layoutBoxes;
  }
  function buildStacks(layouts2) {
    const stacks = {};
    for (const wrap of layouts2) {
      const { stack, pos, stackWeight } = wrap;
      if (!stack || !STATIC_POSITIONS.includes(pos)) {
        continue;
      }
      const _stack = stacks[stack] || (stacks[stack] = {
        count: 0,
        placed: 0,
        weight: 0,
        size: 0
      });
      _stack.count++;
      _stack.weight += stackWeight;
    }
    return stacks;
  }
  function setLayoutDims(layouts2, params) {
    const stacks = buildStacks(layouts2);
    const { vBoxMaxWidth, hBoxMaxHeight } = params;
    let i2, ilen, layout;
    for (i2 = 0, ilen = layouts2.length; i2 < ilen; ++i2) {
      layout = layouts2[i2];
      const { fullSize } = layout.box;
      const stack = stacks[layout.stack];
      const factor = stack && layout.stackWeight / stack.weight;
      if (layout.horizontal) {
        layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
        layout.height = hBoxMaxHeight;
      } else {
        layout.width = vBoxMaxWidth;
        layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
      }
    }
    return stacks;
  }
  function buildLayoutBoxes(boxes) {
    const layoutBoxes = wrapBoxes(boxes);
    const fullSize = sortByWeight(layoutBoxes.filter((wrap) => wrap.box.fullSize), true);
    const left = sortByWeight(filterByPosition(layoutBoxes, "left"), true);
    const right = sortByWeight(filterByPosition(layoutBoxes, "right"));
    const top = sortByWeight(filterByPosition(layoutBoxes, "top"), true);
    const bottom = sortByWeight(filterByPosition(layoutBoxes, "bottom"));
    const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, "x");
    const centerVertical = filterDynamicPositionByAxis(layoutBoxes, "y");
    return {
      fullSize,
      leftAndTop: left.concat(top),
      rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
      chartArea: filterByPosition(layoutBoxes, "chartArea"),
      vertical: left.concat(right).concat(centerVertical),
      horizontal: top.concat(bottom).concat(centerHorizontal)
    };
  }
  function getCombinedMax(maxPadding, chartArea, a2, b2) {
    return Math.max(maxPadding[a2], chartArea[a2]) + Math.max(maxPadding[b2], chartArea[b2]);
  }
  function updateMaxPadding(maxPadding, boxPadding) {
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
  }
  function updateDims(chartArea, params, layout, stacks) {
    const { pos, box } = layout;
    const maxPadding = chartArea.maxPadding;
    if (!isObject2(pos)) {
      if (layout.size) {
        chartArea[pos] -= layout.size;
      }
      const stack = stacks[layout.stack] || {
        size: 0,
        count: 1
      };
      stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
      layout.size = stack.size / stack.count;
      chartArea[pos] += layout.size;
    }
    if (box.getPadding) {
      updateMaxPadding(maxPadding, box.getPadding());
    }
    const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, "left", "right"));
    const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, "top", "bottom"));
    const widthChanged = newWidth !== chartArea.w;
    const heightChanged = newHeight !== chartArea.h;
    chartArea.w = newWidth;
    chartArea.h = newHeight;
    return layout.horizontal ? {
      same: widthChanged,
      other: heightChanged
    } : {
      same: heightChanged,
      other: widthChanged
    };
  }
  function handleMaxPadding(chartArea) {
    const maxPadding = chartArea.maxPadding;
    function updatePos(pos) {
      const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
      chartArea[pos] += change;
      return change;
    }
    chartArea.y += updatePos("top");
    chartArea.x += updatePos("left");
    updatePos("right");
    updatePos("bottom");
  }
  function getMargins(horizontal, chartArea) {
    const maxPadding = chartArea.maxPadding;
    function marginForPositions(positions2) {
      const margin = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      positions2.forEach((pos) => {
        margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
      });
      return margin;
    }
    return horizontal ? marginForPositions([
      "left",
      "right"
    ]) : marginForPositions([
      "top",
      "bottom"
    ]);
  }
  function fitBoxes(boxes, chartArea, params, stacks) {
    const refitBoxes = [];
    let i2, ilen, layout, box, refit, changed;
    for (i2 = 0, ilen = boxes.length, refit = 0; i2 < ilen; ++i2) {
      layout = boxes[i2];
      box = layout.box;
      box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
      const { same, other } = updateDims(chartArea, params, layout, stacks);
      refit |= same && refitBoxes.length;
      changed = changed || other;
      if (!box.fullSize) {
        refitBoxes.push(layout);
      }
    }
    return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
  }
  function setBoxDims(box, left, top, width, height) {
    box.top = top;
    box.left = left;
    box.right = left + width;
    box.bottom = top + height;
    box.width = width;
    box.height = height;
  }
  function placeBoxes(boxes, chartArea, params, stacks) {
    const userPadding = params.padding;
    let { x: x2, y: y2 } = chartArea;
    for (const layout of boxes) {
      const box = layout.box;
      const stack = stacks[layout.stack] || {
        count: 1,
        placed: 0,
        weight: 1
      };
      const weight = layout.stackWeight / stack.weight || 1;
      if (layout.horizontal) {
        const width = chartArea.w * weight;
        const height = stack.size || box.height;
        if (defined(stack.start)) {
          y2 = stack.start;
        }
        if (box.fullSize) {
          setBoxDims(box, userPadding.left, y2, params.outerWidth - userPadding.right - userPadding.left, height);
        } else {
          setBoxDims(box, chartArea.left + stack.placed, y2, width, height);
        }
        stack.start = y2;
        stack.placed += width;
        y2 = box.bottom;
      } else {
        const height = chartArea.h * weight;
        const width = stack.size || box.width;
        if (defined(stack.start)) {
          x2 = stack.start;
        }
        if (box.fullSize) {
          setBoxDims(box, x2, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
        } else {
          setBoxDims(box, x2, chartArea.top + stack.placed, width, height);
        }
        stack.start = x2;
        stack.placed += height;
        x2 = box.right;
      }
    }
    chartArea.x = x2;
    chartArea.y = y2;
  }
  var layouts = {
    addBox(chart, item) {
      if (!chart.boxes) {
        chart.boxes = [];
      }
      item.fullSize = item.fullSize || false;
      item.position = item.position || "top";
      item.weight = item.weight || 0;
      item._layers = item._layers || function() {
        return [
          {
            z: 0,
            draw(chartArea) {
              item.draw(chartArea);
            }
          }
        ];
      };
      chart.boxes.push(item);
    },
    removeBox(chart, layoutItem) {
      const index2 = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
      if (index2 !== -1) {
        chart.boxes.splice(index2, 1);
      }
    },
    configure(chart, item, options) {
      item.fullSize = options.fullSize;
      item.position = options.position;
      item.weight = options.weight;
    },
    update(chart, width, height, minPadding) {
      if (!chart) {
        return;
      }
      const padding = toPadding(chart.options.layout.padding);
      const availableWidth = Math.max(width - padding.width, 0);
      const availableHeight = Math.max(height - padding.height, 0);
      const boxes = buildLayoutBoxes(chart.boxes);
      const verticalBoxes = boxes.vertical;
      const horizontalBoxes = boxes.horizontal;
      each(chart.boxes, (box) => {
        if (typeof box.beforeLayout === "function") {
          box.beforeLayout();
        }
      });
      const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap) => wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
      const params = Object.freeze({
        outerWidth: width,
        outerHeight: height,
        padding,
        availableWidth,
        availableHeight,
        vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
        hBoxMaxHeight: availableHeight / 2
      });
      const maxPadding = Object.assign({}, padding);
      updateMaxPadding(maxPadding, toPadding(minPadding));
      const chartArea = Object.assign({
        maxPadding,
        w: availableWidth,
        h: availableHeight,
        x: padding.left,
        y: padding.top
      }, padding);
      const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
      fitBoxes(boxes.fullSize, chartArea, params, stacks);
      fitBoxes(verticalBoxes, chartArea, params, stacks);
      if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) {
        fitBoxes(verticalBoxes, chartArea, params, stacks);
      }
      handleMaxPadding(chartArea);
      placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
      chartArea.x += chartArea.w;
      chartArea.y += chartArea.h;
      placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
      chart.chartArea = {
        left: chartArea.left,
        top: chartArea.top,
        right: chartArea.left + chartArea.w,
        bottom: chartArea.top + chartArea.h,
        height: chartArea.h,
        width: chartArea.w
      };
      each(boxes.chartArea, (layout) => {
        const box = layout.box;
        Object.assign(box, chart.chartArea);
        box.update(chartArea.w, chartArea.h, {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        });
      });
    }
  };
  var BasePlatform = class {
    acquireContext(canvas, aspectRatio) {
    }
    releaseContext(context) {
      return false;
    }
    addEventListener(chart, type, listener) {
    }
    removeEventListener(chart, type, listener) {
    }
    getDevicePixelRatio() {
      return 1;
    }
    getMaximumSize(element, width, height, aspectRatio) {
      width = Math.max(0, width || element.width);
      height = height || element.height;
      return {
        width,
        height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
      };
    }
    isAttached(canvas) {
      return true;
    }
    updateConfig(config) {
    }
  };
  var BasicPlatform = class extends BasePlatform {
    acquireContext(item) {
      return item && item.getContext && item.getContext("2d") || null;
    }
    updateConfig(config) {
      config.options.animation = false;
    }
  };
  var EXPANDO_KEY = "$chartjs";
  var EVENT_TYPES = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
  };
  var isNullOrEmpty = (value) => value === null || value === "";
  function initCanvas(canvas, aspectRatio) {
    const style = canvas.style;
    const renderHeight = canvas.getAttribute("height");
    const renderWidth = canvas.getAttribute("width");
    canvas[EXPANDO_KEY] = {
      initial: {
        height: renderHeight,
        width: renderWidth,
        style: {
          display: style.display,
          height: style.height,
          width: style.width
        }
      }
    };
    style.display = style.display || "block";
    style.boxSizing = style.boxSizing || "border-box";
    if (isNullOrEmpty(renderWidth)) {
      const displayWidth = readUsedSize(canvas, "width");
      if (displayWidth !== void 0) {
        canvas.width = displayWidth;
      }
    }
    if (isNullOrEmpty(renderHeight)) {
      if (canvas.style.height === "") {
        canvas.height = canvas.width / (aspectRatio || 2);
      } else {
        const displayHeight = readUsedSize(canvas, "height");
        if (displayHeight !== void 0) {
          canvas.height = displayHeight;
        }
      }
    }
    return canvas;
  }
  var eventListenerOptions = supportsEventListenerOptions ? {
    passive: true
  } : false;
  function addListener(node, type, listener) {
    if (node) {
      node.addEventListener(type, listener, eventListenerOptions);
    }
  }
  function removeListener(chart, type, listener) {
    if (chart && chart.canvas) {
      chart.canvas.removeEventListener(type, listener, eventListenerOptions);
    }
  }
  function fromNativeEvent(event, chart) {
    const type = EVENT_TYPES[event.type] || event.type;
    const { x: x2, y: y2 } = getRelativePosition(event, chart);
    return {
      type,
      chart,
      native: event,
      x: x2 !== void 0 ? x2 : null,
      y: y2 !== void 0 ? y2 : null
    };
  }
  function nodeListContains(nodeList, canvas) {
    for (const node of nodeList) {
      if (node === canvas || node.contains(canvas)) {
        return true;
      }
    }
  }
  function createAttachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer2 = new MutationObserver((entries) => {
      let trigger2 = false;
      for (const entry of entries) {
        trigger2 = trigger2 || nodeListContains(entry.addedNodes, canvas);
        trigger2 = trigger2 && !nodeListContains(entry.removedNodes, canvas);
      }
      if (trigger2) {
        listener();
      }
    });
    observer2.observe(document, {
      childList: true,
      subtree: true
    });
    return observer2;
  }
  function createDetachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer2 = new MutationObserver((entries) => {
      let trigger2 = false;
      for (const entry of entries) {
        trigger2 = trigger2 || nodeListContains(entry.removedNodes, canvas);
        trigger2 = trigger2 && !nodeListContains(entry.addedNodes, canvas);
      }
      if (trigger2) {
        listener();
      }
    });
    observer2.observe(document, {
      childList: true,
      subtree: true
    });
    return observer2;
  }
  var drpListeningCharts = /* @__PURE__ */ new Map();
  var oldDevicePixelRatio = 0;
  function onWindowResize() {
    const dpr = window.devicePixelRatio;
    if (dpr === oldDevicePixelRatio) {
      return;
    }
    oldDevicePixelRatio = dpr;
    drpListeningCharts.forEach((resize, chart) => {
      if (chart.currentDevicePixelRatio !== dpr) {
        resize();
      }
    });
  }
  function listenDevicePixelRatioChanges(chart, resize) {
    if (!drpListeningCharts.size) {
      window.addEventListener("resize", onWindowResize);
    }
    drpListeningCharts.set(chart, resize);
  }
  function unlistenDevicePixelRatioChanges(chart) {
    drpListeningCharts.delete(chart);
    if (!drpListeningCharts.size) {
      window.removeEventListener("resize", onWindowResize);
    }
  }
  function createResizeObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const container = canvas && _getParentNode(canvas);
    if (!container) {
      return;
    }
    const resize = throttled((width, height) => {
      const w2 = container.clientWidth;
      listener(width, height);
      if (w2 < container.clientWidth) {
        listener();
      }
    }, window);
    const observer2 = new ResizeObserver((entries) => {
      const entry = entries[0];
      const width = entry.contentRect.width;
      const height = entry.contentRect.height;
      if (width === 0 && height === 0) {
        return;
      }
      resize(width, height);
    });
    observer2.observe(container);
    listenDevicePixelRatioChanges(chart, resize);
    return observer2;
  }
  function releaseObserver(chart, type, observer2) {
    if (observer2) {
      observer2.disconnect();
    }
    if (type === "resize") {
      unlistenDevicePixelRatioChanges(chart);
    }
  }
  function createProxyAndListen(chart, type, listener) {
    const canvas = chart.canvas;
    const proxy = throttled((event) => {
      if (chart.ctx !== null) {
        listener(fromNativeEvent(event, chart));
      }
    }, chart);
    addListener(canvas, type, proxy);
    return proxy;
  }
  var DomPlatform = class extends BasePlatform {
    acquireContext(canvas, aspectRatio) {
      const context = canvas && canvas.getContext && canvas.getContext("2d");
      if (context && context.canvas === canvas) {
        initCanvas(canvas, aspectRatio);
        return context;
      }
      return null;
    }
    releaseContext(context) {
      const canvas = context.canvas;
      if (!canvas[EXPANDO_KEY]) {
        return false;
      }
      const initial = canvas[EXPANDO_KEY].initial;
      [
        "height",
        "width"
      ].forEach((prop) => {
        const value = initial[prop];
        if (isNullOrUndef(value)) {
          canvas.removeAttribute(prop);
        } else {
          canvas.setAttribute(prop, value);
        }
      });
      const style = initial.style || {};
      Object.keys(style).forEach((key) => {
        canvas.style[key] = style[key];
      });
      canvas.width = canvas.width;
      delete canvas[EXPANDO_KEY];
      return true;
    }
    addEventListener(chart, type, listener) {
      this.removeEventListener(chart, type);
      const proxies = chart.$proxies || (chart.$proxies = {});
      const handlers = {
        attach: createAttachObserver,
        detach: createDetachObserver,
        resize: createResizeObserver
      };
      const handler4 = handlers[type] || createProxyAndListen;
      proxies[type] = handler4(chart, type, listener);
    }
    removeEventListener(chart, type) {
      const proxies = chart.$proxies || (chart.$proxies = {});
      const proxy = proxies[type];
      if (!proxy) {
        return;
      }
      const handlers = {
        attach: releaseObserver,
        detach: releaseObserver,
        resize: releaseObserver
      };
      const handler4 = handlers[type] || removeListener;
      handler4(chart, type, proxy);
      proxies[type] = void 0;
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(canvas, width, height, aspectRatio) {
      return getMaximumSize(canvas, width, height, aspectRatio);
    }
    isAttached(canvas) {
      const container = canvas && _getParentNode(canvas);
      return !!(container && container.isConnected);
    }
  };
  function _detectPlatform(canvas) {
    if (!_isDomSupported() || typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) {
      return BasicPlatform;
    }
    return DomPlatform;
  }
  var Element2 = class {
    static defaults = {};
    static defaultRoutes = void 0;
    x;
    y;
    active = false;
    options;
    $animations;
    tooltipPosition(useFinalPosition) {
      const { x: x2, y: y2 } = this.getProps([
        "x",
        "y"
      ], useFinalPosition);
      return {
        x: x2,
        y: y2
      };
    }
    hasValue() {
      return isNumber(this.x) && isNumber(this.y);
    }
    getProps(props, final) {
      const anims = this.$animations;
      if (!final || !anims) {
        return this;
      }
      const ret = {};
      props.forEach((prop) => {
        ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
      });
      return ret;
    }
  };
  function autoSkip(scale, ticks) {
    const tickOpts = scale.options.ticks;
    const determinedMaxTicks = determineMaxTicks(scale);
    const ticksLimit = Math.min(tickOpts.maxTicksLimit || determinedMaxTicks, determinedMaxTicks);
    const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
    const numMajorIndices = majorIndices.length;
    const first = majorIndices[0];
    const last = majorIndices[numMajorIndices - 1];
    const newTicks = [];
    if (numMajorIndices > ticksLimit) {
      skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
      return newTicks;
    }
    const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
    if (numMajorIndices > 0) {
      let i2, ilen;
      const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
      skip(ticks, newTicks, spacing, isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
      for (i2 = 0, ilen = numMajorIndices - 1; i2 < ilen; i2++) {
        skip(ticks, newTicks, spacing, majorIndices[i2], majorIndices[i2 + 1]);
      }
      skip(ticks, newTicks, spacing, last, isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
      return newTicks;
    }
    skip(ticks, newTicks, spacing);
    return newTicks;
  }
  function determineMaxTicks(scale) {
    const offset = scale.options.offset;
    const tickLength = scale._tickSize();
    const maxScale = scale._length / tickLength + (offset ? 0 : 1);
    const maxChart = scale._maxLength / tickLength;
    return Math.floor(Math.min(maxScale, maxChart));
  }
  function calculateSpacing(majorIndices, ticks, ticksLimit) {
    const evenMajorSpacing = getEvenSpacing(majorIndices);
    const spacing = ticks.length / ticksLimit;
    if (!evenMajorSpacing) {
      return Math.max(spacing, 1);
    }
    const factors = _factorize(evenMajorSpacing);
    for (let i2 = 0, ilen = factors.length - 1; i2 < ilen; i2++) {
      const factor = factors[i2];
      if (factor > spacing) {
        return factor;
      }
    }
    return Math.max(spacing, 1);
  }
  function getMajorIndices(ticks) {
    const result = [];
    let i2, ilen;
    for (i2 = 0, ilen = ticks.length; i2 < ilen; i2++) {
      if (ticks[i2].major) {
        result.push(i2);
      }
    }
    return result;
  }
  function skipMajors(ticks, newTicks, majorIndices, spacing) {
    let count = 0;
    let next = majorIndices[0];
    let i2;
    spacing = Math.ceil(spacing);
    for (i2 = 0; i2 < ticks.length; i2++) {
      if (i2 === next) {
        newTicks.push(ticks[i2]);
        count++;
        next = majorIndices[count * spacing];
      }
    }
  }
  function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
    const start2 = valueOrDefault(majorStart, 0);
    const end = Math.min(valueOrDefault(majorEnd, ticks.length), ticks.length);
    let count = 0;
    let length, i2, next;
    spacing = Math.ceil(spacing);
    if (majorEnd) {
      length = majorEnd - majorStart;
      spacing = length / Math.floor(length / spacing);
    }
    next = start2;
    while (next < 0) {
      count++;
      next = Math.round(start2 + count * spacing);
    }
    for (i2 = Math.max(start2, 0); i2 < end; i2++) {
      if (i2 === next) {
        newTicks.push(ticks[i2]);
        count++;
        next = Math.round(start2 + count * spacing);
      }
    }
  }
  function getEvenSpacing(arr) {
    const len = arr.length;
    let i2, diff;
    if (len < 2) {
      return false;
    }
    for (diff = arr[0], i2 = 1; i2 < len; ++i2) {
      if (arr[i2] - arr[i2 - 1] !== diff) {
        return false;
      }
    }
    return diff;
  }
  var reverseAlign = (align) => align === "left" ? "right" : align === "right" ? "left" : align;
  var offsetFromEdge = (scale, edge, offset) => edge === "top" || edge === "left" ? scale[edge] + offset : scale[edge] - offset;
  var getTicksLimit = (ticksLength, maxTicksLimit) => Math.min(maxTicksLimit || ticksLength, ticksLength);
  function sample(arr, numItems) {
    const result = [];
    const increment = arr.length / numItems;
    const len = arr.length;
    let i2 = 0;
    for (; i2 < len; i2 += increment) {
      result.push(arr[Math.floor(i2)]);
    }
    return result;
  }
  function getPixelForGridLine(scale, index2, offsetGridLines) {
    const length = scale.ticks.length;
    const validIndex2 = Math.min(index2, length - 1);
    const start2 = scale._startPixel;
    const end = scale._endPixel;
    const epsilon = 1e-6;
    let lineValue = scale.getPixelForTick(validIndex2);
    let offset;
    if (offsetGridLines) {
      if (length === 1) {
        offset = Math.max(lineValue - start2, end - lineValue);
      } else if (index2 === 0) {
        offset = (scale.getPixelForTick(1) - lineValue) / 2;
      } else {
        offset = (lineValue - scale.getPixelForTick(validIndex2 - 1)) / 2;
      }
      lineValue += validIndex2 < index2 ? offset : -offset;
      if (lineValue < start2 - epsilon || lineValue > end + epsilon) {
        return;
      }
    }
    return lineValue;
  }
  function garbageCollect(caches, length) {
    each(caches, (cache) => {
      const gc = cache.gc;
      const gcLen = gc.length / 2;
      let i2;
      if (gcLen > length) {
        for (i2 = 0; i2 < gcLen; ++i2) {
          delete cache.data[gc[i2]];
        }
        gc.splice(0, gcLen);
      }
    });
  }
  function getTickMarkLength(options) {
    return options.drawTicks ? options.tickLength : 0;
  }
  function getTitleHeight(options, fallback) {
    if (!options.display) {
      return 0;
    }
    const font = toFont(options.font, fallback);
    const padding = toPadding(options.padding);
    const lines = isArray2(options.text) ? options.text.length : 1;
    return lines * font.lineHeight + padding.height;
  }
  function createScaleContext(parent, scale) {
    return createContext(parent, {
      scale,
      type: "scale"
    });
  }
  function createTickContext(parent, index2, tick) {
    return createContext(parent, {
      tick,
      index: index2,
      type: "tick"
    });
  }
  function titleAlign(align, position, reverse) {
    let ret = _toLeftRightCenter(align);
    if (reverse && position !== "right" || !reverse && position === "right") {
      ret = reverseAlign(ret);
    }
    return ret;
  }
  function titleArgs(scale, offset, position, align) {
    const { top, left, bottom, right, chart } = scale;
    const { chartArea, scales: scales2 } = chart;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    const height = bottom - top;
    const width = right - left;
    if (scale.isHorizontal()) {
      titleX = _alignStartEnd(align, left, right);
      if (isObject2(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        titleY = scales2[positionAxisID].getPixelForValue(value) + height - offset;
      } else if (position === "center") {
        titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
      } else {
        titleY = offsetFromEdge(scale, position, offset);
      }
      maxWidth = right - left;
    } else {
      if (isObject2(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        titleX = scales2[positionAxisID].getPixelForValue(value) - width + offset;
      } else if (position === "center") {
        titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
      } else {
        titleX = offsetFromEdge(scale, position, offset);
      }
      titleY = _alignStartEnd(align, bottom, top);
      rotation = position === "left" ? -HALF_PI : HALF_PI;
    }
    return {
      titleX,
      titleY,
      maxWidth,
      rotation
    };
  }
  var Scale = class _Scale extends Element2 {
    constructor(cfg) {
      super();
      this.id = cfg.id;
      this.type = cfg.type;
      this.options = void 0;
      this.ctx = cfg.ctx;
      this.chart = cfg.chart;
      this.top = void 0;
      this.bottom = void 0;
      this.left = void 0;
      this.right = void 0;
      this.width = void 0;
      this.height = void 0;
      this._margins = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      this.maxWidth = void 0;
      this.maxHeight = void 0;
      this.paddingTop = void 0;
      this.paddingBottom = void 0;
      this.paddingLeft = void 0;
      this.paddingRight = void 0;
      this.axis = void 0;
      this.labelRotation = void 0;
      this.min = void 0;
      this.max = void 0;
      this._range = void 0;
      this.ticks = [];
      this._gridLineItems = null;
      this._labelItems = null;
      this._labelSizes = null;
      this._length = 0;
      this._maxLength = 0;
      this._longestTextCache = {};
      this._startPixel = void 0;
      this._endPixel = void 0;
      this._reversePixels = false;
      this._userMax = void 0;
      this._userMin = void 0;
      this._suggestedMax = void 0;
      this._suggestedMin = void 0;
      this._ticksLength = 0;
      this._borderValue = 0;
      this._cache = {};
      this._dataLimitsCached = false;
      this.$context = void 0;
    }
    init(options) {
      this.options = options.setContext(this.getContext());
      this.axis = options.axis;
      this._userMin = this.parse(options.min);
      this._userMax = this.parse(options.max);
      this._suggestedMin = this.parse(options.suggestedMin);
      this._suggestedMax = this.parse(options.suggestedMax);
    }
    parse(raw2, index2) {
      return raw2;
    }
    getUserBounds() {
      let { _userMin, _userMax, _suggestedMin, _suggestedMax } = this;
      _userMin = finiteOrDefault(_userMin, Number.POSITIVE_INFINITY);
      _userMax = finiteOrDefault(_userMax, Number.NEGATIVE_INFINITY);
      _suggestedMin = finiteOrDefault(_suggestedMin, Number.POSITIVE_INFINITY);
      _suggestedMax = finiteOrDefault(_suggestedMax, Number.NEGATIVE_INFINITY);
      return {
        min: finiteOrDefault(_userMin, _suggestedMin),
        max: finiteOrDefault(_userMax, _suggestedMax),
        minDefined: isNumberFinite(_userMin),
        maxDefined: isNumberFinite(_userMax)
      };
    }
    getMinMax(canStack) {
      let { min, max, minDefined, maxDefined } = this.getUserBounds();
      let range;
      if (minDefined && maxDefined) {
        return {
          min,
          max
        };
      }
      const metas = this.getMatchingVisibleMetas();
      for (let i2 = 0, ilen = metas.length; i2 < ilen; ++i2) {
        range = metas[i2].controller.getMinMax(this, canStack);
        if (!minDefined) {
          min = Math.min(min, range.min);
        }
        if (!maxDefined) {
          max = Math.max(max, range.max);
        }
      }
      min = maxDefined && min > max ? max : min;
      max = minDefined && min > max ? min : max;
      return {
        min: finiteOrDefault(min, finiteOrDefault(max, min)),
        max: finiteOrDefault(max, finiteOrDefault(min, max))
      };
    }
    getPadding() {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0
      };
    }
    getTicks() {
      return this.ticks;
    }
    getLabels() {
      const data2 = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? data2.xLabels : data2.yLabels) || data2.labels || [];
    }
    getLabelItems(chartArea = this.chart.chartArea) {
      const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
      return items;
    }
    beforeLayout() {
      this._cache = {};
      this._dataLimitsCached = false;
    }
    beforeUpdate() {
      callback(this.options.beforeUpdate, [
        this
      ]);
    }
    update(maxWidth, maxHeight, margins) {
      const { beginAtZero, grace, ticks: tickOpts } = this.options;
      const sampleSize = tickOpts.sampleSize;
      this.beforeUpdate();
      this.maxWidth = maxWidth;
      this.maxHeight = maxHeight;
      this._margins = margins = Object.assign({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, margins);
      this.ticks = null;
      this._labelSizes = null;
      this._gridLineItems = null;
      this._labelItems = null;
      this.beforeSetDimensions();
      this.setDimensions();
      this.afterSetDimensions();
      this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
      if (!this._dataLimitsCached) {
        this.beforeDataLimits();
        this.determineDataLimits();
        this.afterDataLimits();
        this._range = _addGrace(this, grace, beginAtZero);
        this._dataLimitsCached = true;
      }
      this.beforeBuildTicks();
      this.ticks = this.buildTicks() || [];
      this.afterBuildTicks();
      const samplingEnabled = sampleSize < this.ticks.length;
      this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
      this.configure();
      this.beforeCalculateLabelRotation();
      this.calculateLabelRotation();
      this.afterCalculateLabelRotation();
      if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === "auto")) {
        this.ticks = autoSkip(this, this.ticks);
        this._labelSizes = null;
        this.afterAutoSkip();
      }
      if (samplingEnabled) {
        this._convertTicksToLabels(this.ticks);
      }
      this.beforeFit();
      this.fit();
      this.afterFit();
      this.afterUpdate();
    }
    configure() {
      let reversePixels = this.options.reverse;
      let startPixel, endPixel;
      if (this.isHorizontal()) {
        startPixel = this.left;
        endPixel = this.right;
      } else {
        startPixel = this.top;
        endPixel = this.bottom;
        reversePixels = !reversePixels;
      }
      this._startPixel = startPixel;
      this._endPixel = endPixel;
      this._reversePixels = reversePixels;
      this._length = endPixel - startPixel;
      this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
      callback(this.options.afterUpdate, [
        this
      ]);
    }
    beforeSetDimensions() {
      callback(this.options.beforeSetDimensions, [
        this
      ]);
    }
    setDimensions() {
      if (this.isHorizontal()) {
        this.width = this.maxWidth;
        this.left = 0;
        this.right = this.width;
      } else {
        this.height = this.maxHeight;
        this.top = 0;
        this.bottom = this.height;
      }
      this.paddingLeft = 0;
      this.paddingTop = 0;
      this.paddingRight = 0;
      this.paddingBottom = 0;
    }
    afterSetDimensions() {
      callback(this.options.afterSetDimensions, [
        this
      ]);
    }
    _callHooks(name) {
      this.chart.notifyPlugins(name, this.getContext());
      callback(this.options[name], [
        this
      ]);
    }
    beforeDataLimits() {
      this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {
    }
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
      callback(this.options.beforeTickToLabelConversion, [
        this
      ]);
    }
    generateTickLabels(ticks) {
      const tickOpts = this.options.ticks;
      let i2, ilen, tick;
      for (i2 = 0, ilen = ticks.length; i2 < ilen; i2++) {
        tick = ticks[i2];
        tick.label = callback(tickOpts.callback, [
          tick.value,
          i2,
          ticks
        ], this);
      }
    }
    afterTickToLabelConversion() {
      callback(this.options.afterTickToLabelConversion, [
        this
      ]);
    }
    beforeCalculateLabelRotation() {
      callback(this.options.beforeCalculateLabelRotation, [
        this
      ]);
    }
    calculateLabelRotation() {
      const options = this.options;
      const tickOpts = options.ticks;
      const numTicks = getTicksLimit(this.ticks.length, options.ticks.maxTicksLimit);
      const minRotation = tickOpts.minRotation || 0;
      const maxRotation = tickOpts.maxRotation;
      let labelRotation = minRotation;
      let tickWidth, maxHeight, maxLabelDiagonal;
      if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
        this.labelRotation = minRotation;
        return;
      }
      const labelSizes = this._getLabelSizes();
      const maxLabelWidth = labelSizes.widest.width;
      const maxLabelHeight = labelSizes.highest.height;
      const maxWidth = _limitValue(this.chart.width - maxLabelWidth, 0, this.maxWidth);
      tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
      if (maxLabelWidth + 6 > tickWidth) {
        tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
        maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
        maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
        labelRotation = toDegrees(Math.min(Math.asin(_limitValue((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin(_limitValue(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin(_limitValue(maxLabelHeight / maxLabelDiagonal, -1, 1))));
        labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
      }
      this.labelRotation = labelRotation;
    }
    afterCalculateLabelRotation() {
      callback(this.options.afterCalculateLabelRotation, [
        this
      ]);
    }
    afterAutoSkip() {
    }
    beforeFit() {
      callback(this.options.beforeFit, [
        this
      ]);
    }
    fit() {
      const minSize = {
        width: 0,
        height: 0
      };
      const { chart, options: { ticks: tickOpts, title: titleOpts, grid: gridOpts } } = this;
      const display = this._isVisible();
      const isHorizontal = this.isHorizontal();
      if (display) {
        const titleHeight = getTitleHeight(titleOpts, chart.options.font);
        if (isHorizontal) {
          minSize.width = this.maxWidth;
          minSize.height = getTickMarkLength(gridOpts) + titleHeight;
        } else {
          minSize.height = this.maxHeight;
          minSize.width = getTickMarkLength(gridOpts) + titleHeight;
        }
        if (tickOpts.display && this.ticks.length) {
          const { first, last, widest, highest } = this._getLabelSizes();
          const tickPadding = tickOpts.padding * 2;
          const angleRadians = toRadians(this.labelRotation);
          const cos = Math.cos(angleRadians);
          const sin = Math.sin(angleRadians);
          if (isHorizontal) {
            const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
            minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
          } else {
            const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
            minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
          }
          this._calculatePadding(first, last, sin, cos);
        }
      }
      this._handleMargins();
      if (isHorizontal) {
        this.width = this._length = chart.width - this._margins.left - this._margins.right;
        this.height = minSize.height;
      } else {
        this.width = minSize.width;
        this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
      }
    }
    _calculatePadding(first, last, sin, cos) {
      const { ticks: { align, padding }, position } = this.options;
      const isRotated = this.labelRotation !== 0;
      const labelsBelowTicks = position !== "top" && this.axis === "x";
      if (this.isHorizontal()) {
        const offsetLeft = this.getPixelForTick(0) - this.left;
        const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
        let paddingLeft = 0;
        let paddingRight = 0;
        if (isRotated) {
          if (labelsBelowTicks) {
            paddingLeft = cos * first.width;
            paddingRight = sin * last.height;
          } else {
            paddingLeft = sin * first.height;
            paddingRight = cos * last.width;
          }
        } else if (align === "start") {
          paddingRight = last.width;
        } else if (align === "end") {
          paddingLeft = first.width;
        } else if (align !== "inner") {
          paddingLeft = first.width / 2;
          paddingRight = last.width / 2;
        }
        this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
        this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
      } else {
        let paddingTop = last.height / 2;
        let paddingBottom = first.height / 2;
        if (align === "start") {
          paddingTop = 0;
          paddingBottom = first.height;
        } else if (align === "end") {
          paddingTop = last.height;
          paddingBottom = 0;
        }
        this.paddingTop = paddingTop + padding;
        this.paddingBottom = paddingBottom + padding;
      }
    }
    _handleMargins() {
      if (this._margins) {
        this._margins.left = Math.max(this.paddingLeft, this._margins.left);
        this._margins.top = Math.max(this.paddingTop, this._margins.top);
        this._margins.right = Math.max(this.paddingRight, this._margins.right);
        this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
      }
    }
    afterFit() {
      callback(this.options.afterFit, [
        this
      ]);
    }
    isHorizontal() {
      const { axis, position } = this.options;
      return position === "top" || position === "bottom" || axis === "x";
    }
    isFullSize() {
      return this.options.fullSize;
    }
    _convertTicksToLabels(ticks) {
      this.beforeTickToLabelConversion();
      this.generateTickLabels(ticks);
      let i2, ilen;
      for (i2 = 0, ilen = ticks.length; i2 < ilen; i2++) {
        if (isNullOrUndef(ticks[i2].label)) {
          ticks.splice(i2, 1);
          ilen--;
          i2--;
        }
      }
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let labelSizes = this._labelSizes;
      if (!labelSizes) {
        const sampleSize = this.options.ticks.sampleSize;
        let ticks = this.ticks;
        if (sampleSize < ticks.length) {
          ticks = sample(ticks, sampleSize);
        }
        this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length, this.options.ticks.maxTicksLimit);
      }
      return labelSizes;
    }
    _computeLabelSizes(ticks, length, maxTicksLimit) {
      const { ctx, _longestTextCache: caches } = this;
      const widths = [];
      const heights = [];
      const increment = Math.floor(length / getTicksLimit(length, maxTicksLimit));
      let widestLabelSize = 0;
      let highestLabelSize = 0;
      let i2, j2, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
      for (i2 = 0; i2 < length; i2 += increment) {
        label = ticks[i2].label;
        tickFont = this._resolveTickFontOptions(i2);
        ctx.font = fontString = tickFont.string;
        cache = caches[fontString] = caches[fontString] || {
          data: {},
          gc: []
        };
        lineHeight = tickFont.lineHeight;
        width = height = 0;
        if (!isNullOrUndef(label) && !isArray2(label)) {
          width = _measureText(ctx, cache.data, cache.gc, width, label);
          height = lineHeight;
        } else if (isArray2(label)) {
          for (j2 = 0, jlen = label.length; j2 < jlen; ++j2) {
            nestedLabel = label[j2];
            if (!isNullOrUndef(nestedLabel) && !isArray2(nestedLabel)) {
              width = _measureText(ctx, cache.data, cache.gc, width, nestedLabel);
              height += lineHeight;
            }
          }
        }
        widths.push(width);
        heights.push(height);
        widestLabelSize = Math.max(width, widestLabelSize);
        highestLabelSize = Math.max(height, highestLabelSize);
      }
      garbageCollect(caches, length);
      const widest = widths.indexOf(widestLabelSize);
      const highest = heights.indexOf(highestLabelSize);
      const valueAt = (idx) => ({
        width: widths[idx] || 0,
        height: heights[idx] || 0
      });
      return {
        first: valueAt(0),
        last: valueAt(length - 1),
        widest: valueAt(widest),
        highest: valueAt(highest),
        widths,
        heights
      };
    }
    getLabelForValue(value) {
      return value;
    }
    getPixelForValue(value, index2) {
      return NaN;
    }
    getValueForPixel(pixel) {
    }
    getPixelForTick(index2) {
      const ticks = this.ticks;
      if (index2 < 0 || index2 > ticks.length - 1) {
        return null;
      }
      return this.getPixelForValue(ticks[index2].value);
    }
    getPixelForDecimal(decimal) {
      if (this._reversePixels) {
        decimal = 1 - decimal;
      }
      const pixel = this._startPixel + decimal * this._length;
      return _int16Range(this._alignToPixels ? _alignPixel(this.chart, pixel, 0) : pixel);
    }
    getDecimalForPixel(pixel) {
      const decimal = (pixel - this._startPixel) / this._length;
      return this._reversePixels ? 1 - decimal : decimal;
    }
    getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
      const { min, max } = this;
      return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    }
    getContext(index2) {
      const ticks = this.ticks || [];
      if (index2 >= 0 && index2 < ticks.length) {
        const tick = ticks[index2];
        return tick.$context || (tick.$context = createTickContext(this.getContext(), index2, tick));
      }
      return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
    }
    _tickSize() {
      const optionTicks = this.options.ticks;
      const rot = toRadians(this.labelRotation);
      const cos = Math.abs(Math.cos(rot));
      const sin = Math.abs(Math.sin(rot));
      const labelSizes = this._getLabelSizes();
      const padding = optionTicks.autoSkipPadding || 0;
      const w2 = labelSizes ? labelSizes.widest.width + padding : 0;
      const h3 = labelSizes ? labelSizes.highest.height + padding : 0;
      return this.isHorizontal() ? h3 * cos > w2 * sin ? w2 / cos : h3 / sin : h3 * sin < w2 * cos ? h3 / cos : w2 / sin;
    }
    _isVisible() {
      const display = this.options.display;
      if (display !== "auto") {
        return !!display;
      }
      return this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(chartArea) {
      const axis = this.axis;
      const chart = this.chart;
      const options = this.options;
      const { grid, position, border } = options;
      const offset = grid.offset;
      const isHorizontal = this.isHorizontal();
      const ticks = this.ticks;
      const ticksLength = ticks.length + (offset ? 1 : 0);
      const tl = getTickMarkLength(grid);
      const items = [];
      const borderOpts = border.setContext(this.getContext());
      const axisWidth = borderOpts.display ? borderOpts.width : 0;
      const axisHalfWidth = axisWidth / 2;
      const alignBorderValue = function(pixel) {
        return _alignPixel(chart, pixel, axisWidth);
      };
      let borderValue, i2, lineValue, alignedLineValue;
      let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
      if (position === "top") {
        borderValue = alignBorderValue(this.bottom);
        ty1 = this.bottom - tl;
        ty2 = borderValue - axisHalfWidth;
        y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
        y2 = chartArea.bottom;
      } else if (position === "bottom") {
        borderValue = alignBorderValue(this.top);
        y1 = chartArea.top;
        y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
        ty1 = borderValue + axisHalfWidth;
        ty2 = this.top + tl;
      } else if (position === "left") {
        borderValue = alignBorderValue(this.right);
        tx1 = this.right - tl;
        tx2 = borderValue - axisHalfWidth;
        x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
        x2 = chartArea.right;
      } else if (position === "right") {
        borderValue = alignBorderValue(this.left);
        x1 = chartArea.left;
        x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
        tx1 = borderValue + axisHalfWidth;
        tx2 = this.left + tl;
      } else if (axis === "x") {
        if (position === "center") {
          borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
        } else if (isObject2(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
        }
        y1 = chartArea.top;
        y2 = chartArea.bottom;
        ty1 = borderValue + axisHalfWidth;
        ty2 = ty1 + tl;
      } else if (axis === "y") {
        if (position === "center") {
          borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
        } else if (isObject2(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
        }
        tx1 = borderValue - axisHalfWidth;
        tx2 = tx1 - tl;
        x1 = chartArea.left;
        x2 = chartArea.right;
      }
      const limit = valueOrDefault(options.ticks.maxTicksLimit, ticksLength);
      const step = Math.max(1, Math.ceil(ticksLength / limit));
      for (i2 = 0; i2 < ticksLength; i2 += step) {
        const context = this.getContext(i2);
        const optsAtIndex = grid.setContext(context);
        const optsAtIndexBorder = border.setContext(context);
        const lineWidth = optsAtIndex.lineWidth;
        const lineColor = optsAtIndex.color;
        const borderDash = optsAtIndexBorder.dash || [];
        const borderDashOffset = optsAtIndexBorder.dashOffset;
        const tickWidth = optsAtIndex.tickWidth;
        const tickColor = optsAtIndex.tickColor;
        const tickBorderDash = optsAtIndex.tickBorderDash || [];
        const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
        lineValue = getPixelForGridLine(this, i2, offset);
        if (lineValue === void 0) {
          continue;
        }
        alignedLineValue = _alignPixel(chart, lineValue, lineWidth);
        if (isHorizontal) {
          tx1 = tx2 = x1 = x2 = alignedLineValue;
        } else {
          ty1 = ty2 = y1 = y2 = alignedLineValue;
        }
        items.push({
          tx1,
          ty1,
          tx2,
          ty2,
          x1,
          y1,
          x2,
          y2,
          width: lineWidth,
          color: lineColor,
          borderDash,
          borderDashOffset,
          tickWidth,
          tickColor,
          tickBorderDash,
          tickBorderDashOffset
        });
      }
      this._ticksLength = ticksLength;
      this._borderValue = borderValue;
      return items;
    }
    _computeLabelItems(chartArea) {
      const axis = this.axis;
      const options = this.options;
      const { position, ticks: optionTicks } = options;
      const isHorizontal = this.isHorizontal();
      const ticks = this.ticks;
      const { align, crossAlign, padding, mirror } = optionTicks;
      const tl = getTickMarkLength(options.grid);
      const tickAndPadding = tl + padding;
      const hTickAndPadding = mirror ? -padding : tickAndPadding;
      const rotation = -toRadians(this.labelRotation);
      const items = [];
      let i2, ilen, tick, label, x2, y2, textAlign, pixel, font, lineHeight, lineCount, textOffset;
      let textBaseline = "middle";
      if (position === "top") {
        y2 = this.bottom - hTickAndPadding;
        textAlign = this._getXAxisLabelAlignment();
      } else if (position === "bottom") {
        y2 = this.top + hTickAndPadding;
        textAlign = this._getXAxisLabelAlignment();
      } else if (position === "left") {
        const ret = this._getYAxisLabelAlignment(tl);
        textAlign = ret.textAlign;
        x2 = ret.x;
      } else if (position === "right") {
        const ret = this._getYAxisLabelAlignment(tl);
        textAlign = ret.textAlign;
        x2 = ret.x;
      } else if (axis === "x") {
        if (position === "center") {
          y2 = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
        } else if (isObject2(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          y2 = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
        }
        textAlign = this._getXAxisLabelAlignment();
      } else if (axis === "y") {
        if (position === "center") {
          x2 = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
        } else if (isObject2(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          x2 = this.chart.scales[positionAxisID].getPixelForValue(value);
        }
        textAlign = this._getYAxisLabelAlignment(tl).textAlign;
      }
      if (axis === "y") {
        if (align === "start") {
          textBaseline = "top";
        } else if (align === "end") {
          textBaseline = "bottom";
        }
      }
      const labelSizes = this._getLabelSizes();
      for (i2 = 0, ilen = ticks.length; i2 < ilen; ++i2) {
        tick = ticks[i2];
        label = tick.label;
        const optsAtIndex = optionTicks.setContext(this.getContext(i2));
        pixel = this.getPixelForTick(i2) + optionTicks.labelOffset;
        font = this._resolveTickFontOptions(i2);
        lineHeight = font.lineHeight;
        lineCount = isArray2(label) ? label.length : 1;
        const halfCount = lineCount / 2;
        const color2 = optsAtIndex.color;
        const strokeColor = optsAtIndex.textStrokeColor;
        const strokeWidth = optsAtIndex.textStrokeWidth;
        let tickTextAlign = textAlign;
        if (isHorizontal) {
          x2 = pixel;
          if (textAlign === "inner") {
            if (i2 === ilen - 1) {
              tickTextAlign = !this.options.reverse ? "right" : "left";
            } else if (i2 === 0) {
              tickTextAlign = !this.options.reverse ? "left" : "right";
            } else {
              tickTextAlign = "center";
            }
          }
          if (position === "top") {
            if (crossAlign === "near" || rotation !== 0) {
              textOffset = -lineCount * lineHeight + lineHeight / 2;
            } else if (crossAlign === "center") {
              textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
            } else {
              textOffset = -labelSizes.highest.height + lineHeight / 2;
            }
          } else {
            if (crossAlign === "near" || rotation !== 0) {
              textOffset = lineHeight / 2;
            } else if (crossAlign === "center") {
              textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
            } else {
              textOffset = labelSizes.highest.height - lineCount * lineHeight;
            }
          }
          if (mirror) {
            textOffset *= -1;
          }
          if (rotation !== 0 && !optsAtIndex.showLabelBackdrop) {
            x2 += lineHeight / 2 * Math.sin(rotation);
          }
        } else {
          y2 = pixel;
          textOffset = (1 - lineCount) * lineHeight / 2;
        }
        let backdrop;
        if (optsAtIndex.showLabelBackdrop) {
          const labelPadding = toPadding(optsAtIndex.backdropPadding);
          const height = labelSizes.heights[i2];
          const width = labelSizes.widths[i2];
          let top = textOffset - labelPadding.top;
          let left = 0 - labelPadding.left;
          switch (textBaseline) {
            case "middle":
              top -= height / 2;
              break;
            case "bottom":
              top -= height;
              break;
          }
          switch (textAlign) {
            case "center":
              left -= width / 2;
              break;
            case "right":
              left -= width;
              break;
            case "inner":
              if (i2 === ilen - 1) {
                left -= width;
              } else if (i2 > 0) {
                left -= width / 2;
              }
              break;
          }
          backdrop = {
            left,
            top,
            width: width + labelPadding.width,
            height: height + labelPadding.height,
            color: optsAtIndex.backdropColor
          };
        }
        items.push({
          label,
          font,
          textOffset,
          options: {
            rotation,
            color: color2,
            strokeColor,
            strokeWidth,
            textAlign: tickTextAlign,
            textBaseline,
            translation: [
              x2,
              y2
            ],
            backdrop
          }
        });
      }
      return items;
    }
    _getXAxisLabelAlignment() {
      const { position, ticks } = this.options;
      const rotation = -toRadians(this.labelRotation);
      if (rotation) {
        return position === "top" ? "left" : "right";
      }
      let align = "center";
      if (ticks.align === "start") {
        align = "left";
      } else if (ticks.align === "end") {
        align = "right";
      } else if (ticks.align === "inner") {
        align = "inner";
      }
      return align;
    }
    _getYAxisLabelAlignment(tl) {
      const { position, ticks: { crossAlign, mirror, padding } } = this.options;
      const labelSizes = this._getLabelSizes();
      const tickAndPadding = tl + padding;
      const widest = labelSizes.widest.width;
      let textAlign;
      let x2;
      if (position === "left") {
        if (mirror) {
          x2 = this.right + padding;
          if (crossAlign === "near") {
            textAlign = "left";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x2 += widest / 2;
          } else {
            textAlign = "right";
            x2 += widest;
          }
        } else {
          x2 = this.right - tickAndPadding;
          if (crossAlign === "near") {
            textAlign = "right";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x2 -= widest / 2;
          } else {
            textAlign = "left";
            x2 = this.left;
          }
        }
      } else if (position === "right") {
        if (mirror) {
          x2 = this.left + padding;
          if (crossAlign === "near") {
            textAlign = "right";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x2 -= widest / 2;
          } else {
            textAlign = "left";
            x2 -= widest;
          }
        } else {
          x2 = this.left + tickAndPadding;
          if (crossAlign === "near") {
            textAlign = "left";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x2 += widest / 2;
          } else {
            textAlign = "right";
            x2 = this.right;
          }
        }
      } else {
        textAlign = "right";
      }
      return {
        textAlign,
        x: x2
      };
    }
    _computeLabelArea() {
      if (this.options.ticks.mirror) {
        return;
      }
      const chart = this.chart;
      const position = this.options.position;
      if (position === "left" || position === "right") {
        return {
          top: 0,
          left: this.left,
          bottom: chart.height,
          right: this.right
        };
      }
      if (position === "top" || position === "bottom") {
        return {
          top: this.top,
          left: 0,
          bottom: this.bottom,
          right: chart.width
        };
      }
    }
    drawBackground() {
      const { ctx, options: { backgroundColor }, left, top, width, height } = this;
      if (backgroundColor) {
        ctx.save();
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(left, top, width, height);
        ctx.restore();
      }
    }
    getLineWidthForValue(value) {
      const grid = this.options.grid;
      if (!this._isVisible() || !grid.display) {
        return 0;
      }
      const ticks = this.ticks;
      const index2 = ticks.findIndex((t3) => t3.value === value);
      if (index2 >= 0) {
        const opts = grid.setContext(this.getContext(index2));
        return opts.lineWidth;
      }
      return 0;
    }
    drawGrid(chartArea) {
      const grid = this.options.grid;
      const ctx = this.ctx;
      const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
      let i2, ilen;
      const drawLine = (p1, p2, style) => {
        if (!style.width || !style.color) {
          return;
        }
        ctx.save();
        ctx.lineWidth = style.width;
        ctx.strokeStyle = style.color;
        ctx.setLineDash(style.borderDash || []);
        ctx.lineDashOffset = style.borderDashOffset;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.restore();
      };
      if (grid.display) {
        for (i2 = 0, ilen = items.length; i2 < ilen; ++i2) {
          const item = items[i2];
          if (grid.drawOnChartArea) {
            drawLine({
              x: item.x1,
              y: item.y1
            }, {
              x: item.x2,
              y: item.y2
            }, item);
          }
          if (grid.drawTicks) {
            drawLine({
              x: item.tx1,
              y: item.ty1
            }, {
              x: item.tx2,
              y: item.ty2
            }, {
              color: item.tickColor,
              width: item.tickWidth,
              borderDash: item.tickBorderDash,
              borderDashOffset: item.tickBorderDashOffset
            });
          }
        }
      }
    }
    drawBorder() {
      const { chart, ctx, options: { border, grid } } = this;
      const borderOpts = border.setContext(this.getContext());
      const axisWidth = border.display ? borderOpts.width : 0;
      if (!axisWidth) {
        return;
      }
      const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
      const borderValue = this._borderValue;
      let x1, x2, y1, y2;
      if (this.isHorizontal()) {
        x1 = _alignPixel(chart, this.left, axisWidth) - axisWidth / 2;
        x2 = _alignPixel(chart, this.right, lastLineWidth) + lastLineWidth / 2;
        y1 = y2 = borderValue;
      } else {
        y1 = _alignPixel(chart, this.top, axisWidth) - axisWidth / 2;
        y2 = _alignPixel(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
        x1 = x2 = borderValue;
      }
      ctx.save();
      ctx.lineWidth = borderOpts.width;
      ctx.strokeStyle = borderOpts.color;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.restore();
    }
    drawLabels(chartArea) {
      const optionTicks = this.options.ticks;
      if (!optionTicks.display) {
        return;
      }
      const ctx = this.ctx;
      const area = this._computeLabelArea();
      if (area) {
        clipArea(ctx, area);
      }
      const items = this.getLabelItems(chartArea);
      for (const item of items) {
        const renderTextOptions = item.options;
        const tickFont = item.font;
        const label = item.label;
        const y2 = item.textOffset;
        renderText(ctx, label, 0, y2, tickFont, renderTextOptions);
      }
      if (area) {
        unclipArea(ctx);
      }
    }
    drawTitle() {
      const { ctx, options: { position, title, reverse } } = this;
      if (!title.display) {
        return;
      }
      const font = toFont(title.font);
      const padding = toPadding(title.padding);
      const align = title.align;
      let offset = font.lineHeight / 2;
      if (position === "bottom" || position === "center" || isObject2(position)) {
        offset += padding.bottom;
        if (isArray2(title.text)) {
          offset += font.lineHeight * (title.text.length - 1);
        }
      } else {
        offset += padding.top;
      }
      const { titleX, titleY, maxWidth, rotation } = titleArgs(this, offset, position, align);
      renderText(ctx, title.text, 0, 0, font, {
        color: title.color,
        maxWidth,
        rotation,
        textAlign: titleAlign(align, position, reverse),
        textBaseline: "middle",
        translation: [
          titleX,
          titleY
        ]
      });
    }
    draw(chartArea) {
      if (!this._isVisible()) {
        return;
      }
      this.drawBackground();
      this.drawGrid(chartArea);
      this.drawBorder();
      this.drawTitle();
      this.drawLabels(chartArea);
    }
    _layers() {
      const opts = this.options;
      const tz = opts.ticks && opts.ticks.z || 0;
      const gz = valueOrDefault(opts.grid && opts.grid.z, -1);
      const bz = valueOrDefault(opts.border && opts.border.z, 0);
      if (!this._isVisible() || this.draw !== _Scale.prototype.draw) {
        return [
          {
            z: tz,
            draw: (chartArea) => {
              this.draw(chartArea);
            }
          }
        ];
      }
      return [
        {
          z: gz,
          draw: (chartArea) => {
            this.drawBackground();
            this.drawGrid(chartArea);
            this.drawTitle();
          }
        },
        {
          z: bz,
          draw: () => {
            this.drawBorder();
          }
        },
        {
          z: tz,
          draw: (chartArea) => {
            this.drawLabels(chartArea);
          }
        }
      ];
    }
    getMatchingVisibleMetas(type) {
      const metas = this.chart.getSortedVisibleDatasetMetas();
      const axisID = this.axis + "AxisID";
      const result = [];
      let i2, ilen;
      for (i2 = 0, ilen = metas.length; i2 < ilen; ++i2) {
        const meta = metas[i2];
        if (meta[axisID] === this.id && (!type || meta.type === type)) {
          result.push(meta);
        }
      }
      return result;
    }
    _resolveTickFontOptions(index2) {
      const opts = this.options.ticks.setContext(this.getContext(index2));
      return toFont(opts.font);
    }
    _maxDigits() {
      const fontSize = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / fontSize;
    }
  };
  var TypedRegistry = class {
    constructor(type, scope2, override) {
      this.type = type;
      this.scope = scope2;
      this.override = override;
      this.items = /* @__PURE__ */ Object.create(null);
    }
    isForType(type) {
      return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
    }
    register(item) {
      const proto = Object.getPrototypeOf(item);
      let parentScope;
      if (isIChartComponent(proto)) {
        parentScope = this.register(proto);
      }
      const items = this.items;
      const id = item.id;
      const scope2 = this.scope + "." + id;
      if (!id) {
        throw new Error("class does not have id: " + item);
      }
      if (id in items) {
        return scope2;
      }
      items[id] = item;
      registerDefaults(item, scope2, parentScope);
      if (this.override) {
        defaults.override(item.id, item.overrides);
      }
      return scope2;
    }
    get(id) {
      return this.items[id];
    }
    unregister(item) {
      const items = this.items;
      const id = item.id;
      const scope2 = this.scope;
      if (id in items) {
        delete items[id];
      }
      if (scope2 && id in defaults[scope2]) {
        delete defaults[scope2][id];
        if (this.override) {
          delete overrides[id];
        }
      }
    }
  };
  function registerDefaults(item, scope2, parentScope) {
    const itemDefaults = merge(/* @__PURE__ */ Object.create(null), [
      parentScope ? defaults.get(parentScope) : {},
      defaults.get(scope2),
      item.defaults
    ]);
    defaults.set(scope2, itemDefaults);
    if (item.defaultRoutes) {
      routeDefaults(scope2, item.defaultRoutes);
    }
    if (item.descriptors) {
      defaults.describe(scope2, item.descriptors);
    }
  }
  function routeDefaults(scope2, routes) {
    Object.keys(routes).forEach((property) => {
      const propertyParts = property.split(".");
      const sourceName = propertyParts.pop();
      const sourceScope = [
        scope2
      ].concat(propertyParts).join(".");
      const parts = routes[property].split(".");
      const targetName = parts.pop();
      const targetScope = parts.join(".");
      defaults.route(sourceScope, sourceName, targetScope, targetName);
    });
  }
  function isIChartComponent(proto) {
    return "id" in proto && "defaults" in proto;
  }
  var Registry = class {
    constructor() {
      this.controllers = new TypedRegistry(DatasetController, "datasets", true);
      this.elements = new TypedRegistry(Element2, "elements");
      this.plugins = new TypedRegistry(Object, "plugins");
      this.scales = new TypedRegistry(Scale, "scales");
      this._typedRegistries = [
        this.controllers,
        this.scales,
        this.elements
      ];
    }
    add(...args) {
      this._each("register", args);
    }
    remove(...args) {
      this._each("unregister", args);
    }
    addControllers(...args) {
      this._each("register", args, this.controllers);
    }
    addElements(...args) {
      this._each("register", args, this.elements);
    }
    addPlugins(...args) {
      this._each("register", args, this.plugins);
    }
    addScales(...args) {
      this._each("register", args, this.scales);
    }
    getController(id) {
      return this._get(id, this.controllers, "controller");
    }
    getElement(id) {
      return this._get(id, this.elements, "element");
    }
    getPlugin(id) {
      return this._get(id, this.plugins, "plugin");
    }
    getScale(id) {
      return this._get(id, this.scales, "scale");
    }
    removeControllers(...args) {
      this._each("unregister", args, this.controllers);
    }
    removeElements(...args) {
      this._each("unregister", args, this.elements);
    }
    removePlugins(...args) {
      this._each("unregister", args, this.plugins);
    }
    removeScales(...args) {
      this._each("unregister", args, this.scales);
    }
    _each(method, args, typedRegistry) {
      [
        ...args
      ].forEach((arg) => {
        const reg = typedRegistry || this._getRegistryForType(arg);
        if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) {
          this._exec(method, reg, arg);
        } else {
          each(arg, (item) => {
            const itemReg = typedRegistry || this._getRegistryForType(item);
            this._exec(method, itemReg, item);
          });
        }
      });
    }
    _exec(method, registry2, component) {
      const camelMethod = _capitalize(method);
      callback(component["before" + camelMethod], [], component);
      registry2[method](component);
      callback(component["after" + camelMethod], [], component);
    }
    _getRegistryForType(type) {
      for (let i2 = 0; i2 < this._typedRegistries.length; i2++) {
        const reg = this._typedRegistries[i2];
        if (reg.isForType(type)) {
          return reg;
        }
      }
      return this.plugins;
    }
    _get(id, typedRegistry, type) {
      const item = typedRegistry.get(id);
      if (item === void 0) {
        throw new Error('"' + id + '" is not a registered ' + type + ".");
      }
      return item;
    }
  };
  var registry = /* @__PURE__ */ new Registry();
  var PluginService = class {
    constructor() {
      this._init = void 0;
    }
    notify(chart, hook, args, filter) {
      if (hook === "beforeInit") {
        this._init = this._createDescriptors(chart, true);
        this._notify(this._init, chart, "install");
      }
      if (this._init === void 0) {
        return;
      }
      const descriptors2 = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
      const result = this._notify(descriptors2, chart, hook, args);
      if (hook === "afterDestroy") {
        this._notify(descriptors2, chart, "stop");
        this._notify(this._init, chart, "uninstall");
        this._init = void 0;
      }
      return result;
    }
    _notify(descriptors2, chart, hook, args) {
      args = args || {};
      for (const descriptor of descriptors2) {
        const plugin2 = descriptor.plugin;
        const method = plugin2[hook];
        const params = [
          chart,
          args,
          descriptor.options
        ];
        if (callback(method, params, plugin2) === false && args.cancelable) {
          return false;
        }
      }
      return true;
    }
    invalidate() {
      if (!isNullOrUndef(this._cache)) {
        this._oldCache = this._cache;
        this._cache = void 0;
      }
    }
    _descriptors(chart) {
      if (this._cache) {
        return this._cache;
      }
      const descriptors2 = this._cache = this._createDescriptors(chart);
      this._notifyStateChanges(chart);
      return descriptors2;
    }
    _createDescriptors(chart, all) {
      const config = chart && chart.config;
      const options = valueOrDefault(config.options && config.options.plugins, {});
      const plugins2 = allPlugins(config);
      return options === false && !all ? [] : createDescriptors(chart, plugins2, options, all);
    }
    _notifyStateChanges(chart) {
      const previousDescriptors = this._oldCache || [];
      const descriptors2 = this._cache;
      const diff = (a2, b2) => a2.filter((x2) => !b2.some((y2) => x2.plugin.id === y2.plugin.id));
      this._notify(diff(previousDescriptors, descriptors2), chart, "stop");
      this._notify(diff(descriptors2, previousDescriptors), chart, "start");
    }
  };
  function allPlugins(config) {
    const localIds = {};
    const plugins2 = [];
    const keys = Object.keys(registry.plugins.items);
    for (let i2 = 0; i2 < keys.length; i2++) {
      plugins2.push(registry.getPlugin(keys[i2]));
    }
    const local = config.plugins || [];
    for (let i2 = 0; i2 < local.length; i2++) {
      const plugin2 = local[i2];
      if (plugins2.indexOf(plugin2) === -1) {
        plugins2.push(plugin2);
        localIds[plugin2.id] = true;
      }
    }
    return {
      plugins: plugins2,
      localIds
    };
  }
  function getOpts(options, all) {
    if (!all && options === false) {
      return null;
    }
    if (options === true) {
      return {};
    }
    return options;
  }
  function createDescriptors(chart, { plugins: plugins2, localIds }, options, all) {
    const result = [];
    const context = chart.getContext();
    for (const plugin2 of plugins2) {
      const id = plugin2.id;
      const opts = getOpts(options[id], all);
      if (opts === null) {
        continue;
      }
      result.push({
        plugin: plugin2,
        options: pluginOpts(chart.config, {
          plugin: plugin2,
          local: localIds[id]
        }, opts, context)
      });
    }
    return result;
  }
  function pluginOpts(config, { plugin: plugin2, local }, opts, context) {
    const keys = config.pluginScopeKeys(plugin2);
    const scopes = config.getOptionScopes(opts, keys);
    if (local && plugin2.defaults) {
      scopes.push(plugin2.defaults);
    }
    return config.createResolver(scopes, context, [
      ""
    ], {
      scriptable: false,
      indexable: false,
      allKeys: true
    });
  }
  function getIndexAxis(type, options) {
    const datasetDefaults = defaults.datasets[type] || {};
    const datasetOptions = (options.datasets || {})[type] || {};
    return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || "x";
  }
  function getAxisFromDefaultScaleID(id, indexAxis) {
    let axis = id;
    if (id === "_index_") {
      axis = indexAxis;
    } else if (id === "_value_") {
      axis = indexAxis === "x" ? "y" : "x";
    }
    return axis;
  }
  function getDefaultScaleIDFromAxis(axis, indexAxis) {
    return axis === indexAxis ? "_index_" : "_value_";
  }
  function idMatchesAxis(id) {
    if (id === "x" || id === "y" || id === "r") {
      return id;
    }
  }
  function axisFromPosition(position) {
    if (position === "top" || position === "bottom") {
      return "x";
    }
    if (position === "left" || position === "right") {
      return "y";
    }
  }
  function determineAxis(id, ...scaleOptions) {
    if (idMatchesAxis(id)) {
      return id;
    }
    for (const opts of scaleOptions) {
      const axis = opts.axis || axisFromPosition(opts.position) || id.length > 1 && idMatchesAxis(id[0].toLowerCase());
      if (axis) {
        return axis;
      }
    }
    throw new Error(`Cannot determine type of '${id}' axis. Please provide 'axis' or 'position' option.`);
  }
  function getAxisFromDataset(id, axis, dataset) {
    if (dataset[axis + "AxisID"] === id) {
      return {
        axis
      };
    }
  }
  function retrieveAxisFromDatasets(id, config) {
    if (config.data && config.data.datasets) {
      const boundDs = config.data.datasets.filter((d2) => d2.xAxisID === id || d2.yAxisID === id);
      if (boundDs.length) {
        return getAxisFromDataset(id, "x", boundDs[0]) || getAxisFromDataset(id, "y", boundDs[0]);
      }
    }
    return {};
  }
  function mergeScaleConfig(config, options) {
    const chartDefaults = overrides[config.type] || {
      scales: {}
    };
    const configScales = options.scales || {};
    const chartIndexAxis = getIndexAxis(config.type, options);
    const scales2 = /* @__PURE__ */ Object.create(null);
    Object.keys(configScales).forEach((id) => {
      const scaleConf = configScales[id];
      if (!isObject2(scaleConf)) {
        return console.error(`Invalid scale configuration for scale: ${id}`);
      }
      if (scaleConf._proxy) {
        return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
      }
      const axis = determineAxis(id, scaleConf, retrieveAxisFromDatasets(id, config), defaults.scales[scaleConf.type]);
      const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
      const defaultScaleOptions = chartDefaults.scales || {};
      scales2[id] = mergeIf(/* @__PURE__ */ Object.create(null), [
        {
          axis
        },
        scaleConf,
        defaultScaleOptions[axis],
        defaultScaleOptions[defaultId]
      ]);
    });
    config.data.datasets.forEach((dataset) => {
      const type = dataset.type || config.type;
      const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
      const datasetDefaults = overrides[type] || {};
      const defaultScaleOptions = datasetDefaults.scales || {};
      Object.keys(defaultScaleOptions).forEach((defaultID) => {
        const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
        const id = dataset[axis + "AxisID"] || axis;
        scales2[id] = scales2[id] || /* @__PURE__ */ Object.create(null);
        mergeIf(scales2[id], [
          {
            axis
          },
          configScales[id],
          defaultScaleOptions[defaultID]
        ]);
      });
    });
    Object.keys(scales2).forEach((key) => {
      const scale = scales2[key];
      mergeIf(scale, [
        defaults.scales[scale.type],
        defaults.scale
      ]);
    });
    return scales2;
  }
  function initOptions(config) {
    const options = config.options || (config.options = {});
    options.plugins = valueOrDefault(options.plugins, {});
    options.scales = mergeScaleConfig(config, options);
  }
  function initData(data2) {
    data2 = data2 || {};
    data2.datasets = data2.datasets || [];
    data2.labels = data2.labels || [];
    return data2;
  }
  function initConfig(config) {
    config = config || {};
    config.data = initData(config.data);
    initOptions(config);
    return config;
  }
  var keyCache = /* @__PURE__ */ new Map();
  var keysCached = /* @__PURE__ */ new Set();
  function cachedKeys(cacheKey, generate) {
    let keys = keyCache.get(cacheKey);
    if (!keys) {
      keys = generate();
      keyCache.set(cacheKey, keys);
      keysCached.add(keys);
    }
    return keys;
  }
  var addIfFound = (set4, obj, key) => {
    const opts = resolveObjectKey(obj, key);
    if (opts !== void 0) {
      set4.add(opts);
    }
  };
  var Config = class {
    constructor(config) {
      this._config = initConfig(config);
      this._scopeCache = /* @__PURE__ */ new Map();
      this._resolverCache = /* @__PURE__ */ new Map();
    }
    get platform() {
      return this._config.platform;
    }
    get type() {
      return this._config.type;
    }
    set type(type) {
      this._config.type = type;
    }
    get data() {
      return this._config.data;
    }
    set data(data2) {
      this._config.data = initData(data2);
    }
    get options() {
      return this._config.options;
    }
    set options(options) {
      this._config.options = options;
    }
    get plugins() {
      return this._config.plugins;
    }
    update() {
      const config = this._config;
      this.clearCache();
      initOptions(config);
    }
    clearCache() {
      this._scopeCache.clear();
      this._resolverCache.clear();
    }
    datasetScopeKeys(datasetType) {
      return cachedKeys(datasetType, () => [
        [
          `datasets.${datasetType}`,
          ""
        ]
      ]);
    }
    datasetAnimationScopeKeys(datasetType, transition2) {
      return cachedKeys(`${datasetType}.transition.${transition2}`, () => [
        [
          `datasets.${datasetType}.transitions.${transition2}`,
          `transitions.${transition2}`
        ],
        [
          `datasets.${datasetType}`,
          ""
        ]
      ]);
    }
    datasetElementScopeKeys(datasetType, elementType) {
      return cachedKeys(`${datasetType}-${elementType}`, () => [
        [
          `datasets.${datasetType}.elements.${elementType}`,
          `datasets.${datasetType}`,
          `elements.${elementType}`,
          ""
        ]
      ]);
    }
    pluginScopeKeys(plugin2) {
      const id = plugin2.id;
      const type = this.type;
      return cachedKeys(`${type}-plugin-${id}`, () => [
        [
          `plugins.${id}`,
          ...plugin2.additionalOptionScopes || []
        ]
      ]);
    }
    _cachedScopes(mainScope, resetCache) {
      const _scopeCache = this._scopeCache;
      let cache = _scopeCache.get(mainScope);
      if (!cache || resetCache) {
        cache = /* @__PURE__ */ new Map();
        _scopeCache.set(mainScope, cache);
      }
      return cache;
    }
    getOptionScopes(mainScope, keyLists, resetCache) {
      const { options, type } = this;
      const cache = this._cachedScopes(mainScope, resetCache);
      const cached = cache.get(keyLists);
      if (cached) {
        return cached;
      }
      const scopes = /* @__PURE__ */ new Set();
      keyLists.forEach((keys) => {
        if (mainScope) {
          scopes.add(mainScope);
          keys.forEach((key) => addIfFound(scopes, mainScope, key));
        }
        keys.forEach((key) => addIfFound(scopes, options, key));
        keys.forEach((key) => addIfFound(scopes, overrides[type] || {}, key));
        keys.forEach((key) => addIfFound(scopes, defaults, key));
        keys.forEach((key) => addIfFound(scopes, descriptors, key));
      });
      const array = Array.from(scopes);
      if (array.length === 0) {
        array.push(/* @__PURE__ */ Object.create(null));
      }
      if (keysCached.has(keyLists)) {
        cache.set(keyLists, array);
      }
      return array;
    }
    chartOptionScopes() {
      const { options, type } = this;
      return [
        options,
        overrides[type] || {},
        defaults.datasets[type] || {},
        {
          type
        },
        defaults,
        descriptors
      ];
    }
    resolveNamedOptions(scopes, names2, context, prefixes = [
      ""
    ]) {
      const result = {
        $shared: true
      };
      const { resolver, subPrefixes } = getResolver(this._resolverCache, scopes, prefixes);
      let options = resolver;
      if (needContext(resolver, names2)) {
        result.$shared = false;
        context = isFunction(context) ? context() : context;
        const subResolver = this.createResolver(scopes, context, subPrefixes);
        options = _attachContext(resolver, context, subResolver);
      }
      for (const prop of names2) {
        result[prop] = options[prop];
      }
      return result;
    }
    createResolver(scopes, context, prefixes = [
      ""
    ], descriptorDefaults) {
      const { resolver } = getResolver(this._resolverCache, scopes, prefixes);
      return isObject2(context) ? _attachContext(resolver, context, void 0, descriptorDefaults) : resolver;
    }
  };
  function getResolver(resolverCache, scopes, prefixes) {
    let cache = resolverCache.get(scopes);
    if (!cache) {
      cache = /* @__PURE__ */ new Map();
      resolverCache.set(scopes, cache);
    }
    const cacheKey = prefixes.join();
    let cached = cache.get(cacheKey);
    if (!cached) {
      const resolver = _createResolver(scopes, prefixes);
      cached = {
        resolver,
        subPrefixes: prefixes.filter((p2) => !p2.toLowerCase().includes("hover"))
      };
      cache.set(cacheKey, cached);
    }
    return cached;
  }
  var hasFunction = (value) => isObject2(value) && Object.getOwnPropertyNames(value).some((key) => isFunction(value[key]));
  function needContext(proxy, names2) {
    const { isScriptable, isIndexable } = _descriptors(proxy);
    for (const prop of names2) {
      const scriptable = isScriptable(prop);
      const indexable = isIndexable(prop);
      const value = (indexable || scriptable) && proxy[prop];
      if (scriptable && (isFunction(value) || hasFunction(value)) || indexable && isArray2(value)) {
        return true;
      }
    }
    return false;
  }
  var version = "4.5.1";
  var KNOWN_POSITIONS = [
    "top",
    "bottom",
    "left",
    "right",
    "chartArea"
  ];
  function positionIsHorizontal(position, axis) {
    return position === "top" || position === "bottom" || KNOWN_POSITIONS.indexOf(position) === -1 && axis === "x";
  }
  function compare2Level(l1, l2) {
    return function(a2, b2) {
      return a2[l1] === b2[l1] ? a2[l2] - b2[l2] : a2[l1] - b2[l1];
    };
  }
  function onAnimationsComplete(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    chart.notifyPlugins("afterRender");
    callback(animationOptions && animationOptions.onComplete, [
      context
    ], chart);
  }
  function onAnimationProgress(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    callback(animationOptions && animationOptions.onProgress, [
      context
    ], chart);
  }
  function getCanvas(item) {
    if (_isDomSupported() && typeof item === "string") {
      item = document.getElementById(item);
    } else if (item && item.length) {
      item = item[0];
    }
    if (item && item.canvas) {
      item = item.canvas;
    }
    return item;
  }
  var instances = {};
  var getChart = (key) => {
    const canvas = getCanvas(key);
    return Object.values(instances).filter((c2) => c2.canvas === canvas).pop();
  };
  function moveNumericKeys(obj, start2, move) {
    const keys = Object.keys(obj);
    for (const key of keys) {
      const intKey = +key;
      if (intKey >= start2) {
        const value = obj[key];
        delete obj[key];
        if (move > 0 || intKey > start2) {
          obj[intKey + move] = value;
        }
      }
    }
  }
  function determineLastEvent(e2, lastEvent, inChartArea, isClick) {
    if (!inChartArea || e2.type === "mouseout") {
      return null;
    }
    if (isClick) {
      return lastEvent;
    }
    return e2;
  }
  var Chart = class {
    static defaults = defaults;
    static instances = instances;
    static overrides = overrides;
    static registry = registry;
    static version = version;
    static getChart = getChart;
    static register(...items) {
      registry.add(...items);
      invalidatePlugins();
    }
    static unregister(...items) {
      registry.remove(...items);
      invalidatePlugins();
    }
    constructor(item, userConfig) {
      const config = this.config = new Config(userConfig);
      const initialCanvas = getCanvas(item);
      const existingChart = getChart(initialCanvas);
      if (existingChart) {
        throw new Error("Canvas is already in use. Chart with ID '" + existingChart.id + "' must be destroyed before the canvas with ID '" + existingChart.canvas.id + "' can be reused.");
      }
      const options = config.createResolver(config.chartOptionScopes(), this.getContext());
      this.platform = new (config.platform || _detectPlatform(initialCanvas))();
      this.platform.updateConfig(config);
      const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
      const canvas = context && context.canvas;
      const height = canvas && canvas.height;
      const width = canvas && canvas.width;
      this.id = uid2();
      this.ctx = context;
      this.canvas = canvas;
      this.width = width;
      this.height = height;
      this._options = options;
      this._aspectRatio = this.aspectRatio;
      this._layers = [];
      this._metasets = [];
      this._stacks = void 0;
      this.boxes = [];
      this.currentDevicePixelRatio = void 0;
      this.chartArea = void 0;
      this._active = [];
      this._lastEvent = void 0;
      this._listeners = {};
      this._responsiveListeners = void 0;
      this._sortedMetasets = [];
      this.scales = {};
      this._plugins = new PluginService();
      this.$proxies = {};
      this._hiddenIndices = {};
      this.attached = false;
      this._animationsDisabled = void 0;
      this.$context = void 0;
      this._doResize = debounce2((mode) => this.update(mode), options.resizeDelay || 0);
      this._dataChanges = [];
      instances[this.id] = this;
      if (!context || !canvas) {
        console.error("Failed to create chart: can't acquire context from the given item");
        return;
      }
      animator.listen(this, "complete", onAnimationsComplete);
      animator.listen(this, "progress", onAnimationProgress);
      this._initialize();
      if (this.attached) {
        this.update();
      }
    }
    get aspectRatio() {
      const { options: { aspectRatio, maintainAspectRatio }, width, height, _aspectRatio } = this;
      if (!isNullOrUndef(aspectRatio)) {
        return aspectRatio;
      }
      if (maintainAspectRatio && _aspectRatio) {
        return _aspectRatio;
      }
      return height ? width / height : null;
    }
    get data() {
      return this.config.data;
    }
    set data(data2) {
      this.config.data = data2;
    }
    get options() {
      return this._options;
    }
    set options(options) {
      this.config.options = options;
    }
    get registry() {
      return registry;
    }
    _initialize() {
      this.notifyPlugins("beforeInit");
      if (this.options.responsive) {
        this.resize();
      } else {
        retinaScale(this, this.options.devicePixelRatio);
      }
      this.bindEvents();
      this.notifyPlugins("afterInit");
      return this;
    }
    clear() {
      clearCanvas(this.canvas, this.ctx);
      return this;
    }
    stop() {
      animator.stop(this);
      return this;
    }
    resize(width, height) {
      if (!animator.running(this)) {
        this._resize(width, height);
      } else {
        this._resizeBeforeDraw = {
          width,
          height
        };
      }
    }
    _resize(width, height) {
      const options = this.options;
      const canvas = this.canvas;
      const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
      const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
      const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
      const mode = this.width ? "resize" : "attach";
      this.width = newSize.width;
      this.height = newSize.height;
      this._aspectRatio = this.aspectRatio;
      if (!retinaScale(this, newRatio, true)) {
        return;
      }
      this.notifyPlugins("resize", {
        size: newSize
      });
      callback(options.onResize, [
        this,
        newSize
      ], this);
      if (this.attached) {
        if (this._doResize(mode)) {
          this.render();
        }
      }
    }
    ensureScalesHaveIDs() {
      const options = this.options;
      const scalesOptions = options.scales || {};
      each(scalesOptions, (axisOptions, axisID) => {
        axisOptions.id = axisID;
      });
    }
    buildOrUpdateScales() {
      const options = this.options;
      const scaleOpts = options.scales;
      const scales2 = this.scales;
      const updated = Object.keys(scales2).reduce((obj, id) => {
        obj[id] = false;
        return obj;
      }, {});
      let items = [];
      if (scaleOpts) {
        items = items.concat(Object.keys(scaleOpts).map((id) => {
          const scaleOptions = scaleOpts[id];
          const axis = determineAxis(id, scaleOptions);
          const isRadial = axis === "r";
          const isHorizontal = axis === "x";
          return {
            options: scaleOptions,
            dposition: isRadial ? "chartArea" : isHorizontal ? "bottom" : "left",
            dtype: isRadial ? "radialLinear" : isHorizontal ? "category" : "linear"
          };
        }));
      }
      each(items, (item) => {
        const scaleOptions = item.options;
        const id = scaleOptions.id;
        const axis = determineAxis(id, scaleOptions);
        const scaleType = valueOrDefault(scaleOptions.type, item.dtype);
        if (scaleOptions.position === void 0 || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
          scaleOptions.position = item.dposition;
        }
        updated[id] = true;
        let scale = null;
        if (id in scales2 && scales2[id].type === scaleType) {
          scale = scales2[id];
        } else {
          const scaleClass = registry.getScale(scaleType);
          scale = new scaleClass({
            id,
            type: scaleType,
            ctx: this.ctx,
            chart: this
          });
          scales2[scale.id] = scale;
        }
        scale.init(scaleOptions, options);
      });
      each(updated, (hasUpdated, id) => {
        if (!hasUpdated) {
          delete scales2[id];
        }
      });
      each(scales2, (scale) => {
        layouts.configure(this, scale, scale.options);
        layouts.addBox(this, scale);
      });
    }
    _updateMetasets() {
      const metasets = this._metasets;
      const numData = this.data.datasets.length;
      const numMeta = metasets.length;
      metasets.sort((a2, b2) => a2.index - b2.index);
      if (numMeta > numData) {
        for (let i2 = numData; i2 < numMeta; ++i2) {
          this._destroyDatasetMeta(i2);
        }
        metasets.splice(numData, numMeta - numData);
      }
      this._sortedMetasets = metasets.slice(0).sort(compare2Level("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const { _metasets: metasets, data: { datasets } } = this;
      if (metasets.length > datasets.length) {
        delete this._stacks;
      }
      metasets.forEach((meta, index2) => {
        if (datasets.filter((x2) => x2 === meta._dataset).length === 0) {
          this._destroyDatasetMeta(index2);
        }
      });
    }
    buildOrUpdateControllers() {
      const newControllers = [];
      const datasets = this.data.datasets;
      let i2, ilen;
      this._removeUnreferencedMetasets();
      for (i2 = 0, ilen = datasets.length; i2 < ilen; i2++) {
        const dataset = datasets[i2];
        let meta = this.getDatasetMeta(i2);
        const type = dataset.type || this.config.type;
        if (meta.type && meta.type !== type) {
          this._destroyDatasetMeta(i2);
          meta = this.getDatasetMeta(i2);
        }
        meta.type = type;
        meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
        meta.order = dataset.order || 0;
        meta.index = i2;
        meta.label = "" + dataset.label;
        meta.visible = this.isDatasetVisible(i2);
        if (meta.controller) {
          meta.controller.updateIndex(i2);
          meta.controller.linkScales();
        } else {
          const ControllerClass = registry.getController(type);
          const { datasetElementType, dataElementType } = defaults.datasets[type];
          Object.assign(ControllerClass, {
            dataElementType: registry.getElement(dataElementType),
            datasetElementType: datasetElementType && registry.getElement(datasetElementType)
          });
          meta.controller = new ControllerClass(this, i2);
          newControllers.push(meta.controller);
        }
      }
      this._updateMetasets();
      return newControllers;
    }
    _resetElements() {
      each(this.data.datasets, (dataset, datasetIndex) => {
        this.getDatasetMeta(datasetIndex).controller.reset();
      }, this);
    }
    reset() {
      this._resetElements();
      this.notifyPlugins("reset");
    }
    update(mode) {
      const config = this.config;
      config.update();
      const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
      const animsDisabled = this._animationsDisabled = !options.animation;
      this._updateScales();
      this._checkEventBindings();
      this._updateHiddenIndices();
      this._plugins.invalidate();
      if (this.notifyPlugins("beforeUpdate", {
        mode,
        cancelable: true
      }) === false) {
        return;
      }
      const newControllers = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let minPadding = 0;
      for (let i2 = 0, ilen = this.data.datasets.length; i2 < ilen; i2++) {
        const { controller } = this.getDatasetMeta(i2);
        const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
        controller.buildOrUpdateElements(reset);
        minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
      }
      minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
      this._updateLayout(minPadding);
      if (!animsDisabled) {
        each(newControllers, (controller) => {
          controller.reset();
        });
      }
      this._updateDatasets(mode);
      this.notifyPlugins("afterUpdate", {
        mode
      });
      this._layers.sort(compare2Level("z", "_idx"));
      const { _active, _lastEvent } = this;
      if (_lastEvent) {
        this._eventHandler(_lastEvent, true);
      } else if (_active.length) {
        this._updateHoverStyles(_active, _active, true);
      }
      this.render();
    }
    _updateScales() {
      each(this.scales, (scale) => {
        layouts.removeBox(this, scale);
      });
      this.ensureScalesHaveIDs();
      this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const options = this.options;
      const existingEvents = new Set(Object.keys(this._listeners));
      const newEvents = new Set(options.events);
      if (!setsEqual(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
        this.unbindEvents();
        this.bindEvents();
      }
    }
    _updateHiddenIndices() {
      const { _hiddenIndices } = this;
      const changes = this._getUniformDataChanges() || [];
      for (const { method, start: start2, count } of changes) {
        const move = method === "_removeElements" ? -count : count;
        moveNumericKeys(_hiddenIndices, start2, move);
      }
    }
    _getUniformDataChanges() {
      const _dataChanges = this._dataChanges;
      if (!_dataChanges || !_dataChanges.length) {
        return;
      }
      this._dataChanges = [];
      const datasetCount = this.data.datasets.length;
      const makeSet = (idx) => new Set(_dataChanges.filter((c2) => c2[0] === idx).map((c2, i2) => i2 + "," + c2.splice(1).join(",")));
      const changeSet = makeSet(0);
      for (let i2 = 1; i2 < datasetCount; i2++) {
        if (!setsEqual(changeSet, makeSet(i2))) {
          return;
        }
      }
      return Array.from(changeSet).map((c2) => c2.split(",")).map((a2) => ({
        method: a2[1],
        start: +a2[2],
        count: +a2[3]
      }));
    }
    _updateLayout(minPadding) {
      if (this.notifyPlugins("beforeLayout", {
        cancelable: true
      }) === false) {
        return;
      }
      layouts.update(this, this.width, this.height, minPadding);
      const area = this.chartArea;
      const noArea = area.width <= 0 || area.height <= 0;
      this._layers = [];
      each(this.boxes, (box) => {
        if (noArea && box.position === "chartArea") {
          return;
        }
        if (box.configure) {
          box.configure();
        }
        this._layers.push(...box._layers());
      }, this);
      this._layers.forEach((item, index2) => {
        item._idx = index2;
      });
      this.notifyPlugins("afterLayout");
    }
    _updateDatasets(mode) {
      if (this.notifyPlugins("beforeDatasetsUpdate", {
        mode,
        cancelable: true
      }) === false) {
        return;
      }
      for (let i2 = 0, ilen = this.data.datasets.length; i2 < ilen; ++i2) {
        this.getDatasetMeta(i2).controller.configure();
      }
      for (let i2 = 0, ilen = this.data.datasets.length; i2 < ilen; ++i2) {
        this._updateDataset(i2, isFunction(mode) ? mode({
          datasetIndex: i2
        }) : mode);
      }
      this.notifyPlugins("afterDatasetsUpdate", {
        mode
      });
    }
    _updateDataset(index2, mode) {
      const meta = this.getDatasetMeta(index2);
      const args = {
        meta,
        index: index2,
        mode,
        cancelable: true
      };
      if (this.notifyPlugins("beforeDatasetUpdate", args) === false) {
        return;
      }
      meta.controller._update(mode);
      args.cancelable = false;
      this.notifyPlugins("afterDatasetUpdate", args);
    }
    render() {
      if (this.notifyPlugins("beforeRender", {
        cancelable: true
      }) === false) {
        return;
      }
      if (animator.has(this)) {
        if (this.attached && !animator.running(this)) {
          animator.start(this);
        }
      } else {
        this.draw();
        onAnimationsComplete({
          chart: this
        });
      }
    }
    draw() {
      let i2;
      if (this._resizeBeforeDraw) {
        const { width, height } = this._resizeBeforeDraw;
        this._resizeBeforeDraw = null;
        this._resize(width, height);
      }
      this.clear();
      if (this.width <= 0 || this.height <= 0) {
        return;
      }
      if (this.notifyPlugins("beforeDraw", {
        cancelable: true
      }) === false) {
        return;
      }
      const layers = this._layers;
      for (i2 = 0; i2 < layers.length && layers[i2].z <= 0; ++i2) {
        layers[i2].draw(this.chartArea);
      }
      this._drawDatasets();
      for (; i2 < layers.length; ++i2) {
        layers[i2].draw(this.chartArea);
      }
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(filterVisible) {
      const metasets = this._sortedMetasets;
      const result = [];
      let i2, ilen;
      for (i2 = 0, ilen = metasets.length; i2 < ilen; ++i2) {
        const meta = metasets[i2];
        if (!filterVisible || meta.visible) {
          result.push(meta);
        }
      }
      return result;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(true);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", {
        cancelable: true
      }) === false) {
        return;
      }
      const metasets = this.getSortedVisibleDatasetMetas();
      for (let i2 = metasets.length - 1; i2 >= 0; --i2) {
        this._drawDataset(metasets[i2]);
      }
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(meta) {
      const ctx = this.ctx;
      const args = {
        meta,
        index: meta.index,
        cancelable: true
      };
      const clip = getDatasetClipArea(this, meta);
      if (this.notifyPlugins("beforeDatasetDraw", args) === false) {
        return;
      }
      if (clip) {
        clipArea(ctx, clip);
      }
      meta.controller.draw();
      if (clip) {
        unclipArea(ctx);
      }
      args.cancelable = false;
      this.notifyPlugins("afterDatasetDraw", args);
    }
    isPointInArea(point) {
      return _isPointInArea(point, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e2, mode, options, useFinalPosition) {
      const method = Interaction.modes[mode];
      if (typeof method === "function") {
        return method(this, e2, options, useFinalPosition);
      }
      return [];
    }
    getDatasetMeta(datasetIndex) {
      const dataset = this.data.datasets[datasetIndex];
      const metasets = this._metasets;
      let meta = metasets.filter((x2) => x2 && x2._dataset === dataset).pop();
      if (!meta) {
        meta = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: dataset && dataset.order || 0,
          index: datasetIndex,
          _dataset: dataset,
          _parsed: [],
          _sorted: false
        };
        metasets.push(meta);
      }
      return meta;
    }
    getContext() {
      return this.$context || (this.$context = createContext(null, {
        chart: this,
        type: "chart"
      }));
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(datasetIndex) {
      const dataset = this.data.datasets[datasetIndex];
      if (!dataset) {
        return false;
      }
      const meta = this.getDatasetMeta(datasetIndex);
      return typeof meta.hidden === "boolean" ? !meta.hidden : !dataset.hidden;
    }
    setDatasetVisibility(datasetIndex, visible) {
      const meta = this.getDatasetMeta(datasetIndex);
      meta.hidden = !visible;
    }
    toggleDataVisibility(index2) {
      this._hiddenIndices[index2] = !this._hiddenIndices[index2];
    }
    getDataVisibility(index2) {
      return !this._hiddenIndices[index2];
    }
    _updateVisibility(datasetIndex, dataIndex, visible) {
      const mode = visible ? "show" : "hide";
      const meta = this.getDatasetMeta(datasetIndex);
      const anims = meta.controller._resolveAnimations(void 0, mode);
      if (defined(dataIndex)) {
        meta.data[dataIndex].hidden = !visible;
        this.update();
      } else {
        this.setDatasetVisibility(datasetIndex, visible);
        anims.update(meta, {
          visible
        });
        this.update((ctx) => ctx.datasetIndex === datasetIndex ? mode : void 0);
      }
    }
    hide(datasetIndex, dataIndex) {
      this._updateVisibility(datasetIndex, dataIndex, false);
    }
    show(datasetIndex, dataIndex) {
      this._updateVisibility(datasetIndex, dataIndex, true);
    }
    _destroyDatasetMeta(datasetIndex) {
      const meta = this._metasets[datasetIndex];
      if (meta && meta.controller) {
        meta.controller._destroy();
      }
      delete this._metasets[datasetIndex];
    }
    _stop() {
      let i2, ilen;
      this.stop();
      animator.remove(this);
      for (i2 = 0, ilen = this.data.datasets.length; i2 < ilen; ++i2) {
        this._destroyDatasetMeta(i2);
      }
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas, ctx } = this;
      this._stop();
      this.config.clearCache();
      if (canvas) {
        this.unbindEvents();
        clearCanvas(canvas, ctx);
        this.platform.releaseContext(ctx);
        this.canvas = null;
        this.ctx = null;
      }
      delete instances[this.id];
      this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...args) {
      return this.canvas.toDataURL(...args);
    }
    bindEvents() {
      this.bindUserEvents();
      if (this.options.responsive) {
        this.bindResponsiveEvents();
      } else {
        this.attached = true;
      }
    }
    bindUserEvents() {
      const listeners = this._listeners;
      const platform = this.platform;
      const _add = (type, listener2) => {
        platform.addEventListener(this, type, listener2);
        listeners[type] = listener2;
      };
      const listener = (e2, x2, y2) => {
        e2.offsetX = x2;
        e2.offsetY = y2;
        this._eventHandler(e2);
      };
      each(this.options.events, (type) => _add(type, listener));
    }
    bindResponsiveEvents() {
      if (!this._responsiveListeners) {
        this._responsiveListeners = {};
      }
      const listeners = this._responsiveListeners;
      const platform = this.platform;
      const _add = (type, listener2) => {
        platform.addEventListener(this, type, listener2);
        listeners[type] = listener2;
      };
      const _remove = (type, listener2) => {
        if (listeners[type]) {
          platform.removeEventListener(this, type, listener2);
          delete listeners[type];
        }
      };
      const listener = (width, height) => {
        if (this.canvas) {
          this.resize(width, height);
        }
      };
      let detached;
      const attached = () => {
        _remove("attach", attached);
        this.attached = true;
        this.resize();
        _add("resize", listener);
        _add("detach", detached);
      };
      detached = () => {
        this.attached = false;
        _remove("resize", listener);
        this._stop();
        this._resize(0, 0);
        _add("attach", attached);
      };
      if (platform.isAttached(this.canvas)) {
        attached();
      } else {
        detached();
      }
    }
    unbindEvents() {
      each(this._listeners, (listener, type) => {
        this.platform.removeEventListener(this, type, listener);
      });
      this._listeners = {};
      each(this._responsiveListeners, (listener, type) => {
        this.platform.removeEventListener(this, type, listener);
      });
      this._responsiveListeners = void 0;
    }
    updateHoverStyle(items, mode, enabled) {
      const prefix2 = enabled ? "set" : "remove";
      let meta, item, i2, ilen;
      if (mode === "dataset") {
        meta = this.getDatasetMeta(items[0].datasetIndex);
        meta.controller["_" + prefix2 + "DatasetHoverStyle"]();
      }
      for (i2 = 0, ilen = items.length; i2 < ilen; ++i2) {
        item = items[i2];
        const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
        if (controller) {
          controller[prefix2 + "HoverStyle"](item.element, item.datasetIndex, item.index);
        }
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(activeElements) {
      const lastActive = this._active || [];
      const active = activeElements.map(({ datasetIndex, index: index2 }) => {
        const meta = this.getDatasetMeta(datasetIndex);
        if (!meta) {
          throw new Error("No dataset found at index " + datasetIndex);
        }
        return {
          datasetIndex,
          element: meta.data[index2],
          index: index2
        };
      });
      const changed = !_elementsEqual(active, lastActive);
      if (changed) {
        this._active = active;
        this._lastEvent = null;
        this._updateHoverStyles(active, lastActive);
      }
    }
    notifyPlugins(hook, args, filter) {
      return this._plugins.notify(this, hook, args, filter);
    }
    isPluginEnabled(pluginId) {
      return this._plugins._cache.filter((p2) => p2.plugin.id === pluginId).length === 1;
    }
    _updateHoverStyles(active, lastActive, replay) {
      const hoverOptions = this.options.hover;
      const diff = (a2, b2) => a2.filter((x2) => !b2.some((y2) => x2.datasetIndex === y2.datasetIndex && x2.index === y2.index));
      const deactivated = diff(lastActive, active);
      const activated = replay ? active : diff(active, lastActive);
      if (deactivated.length) {
        this.updateHoverStyle(deactivated, hoverOptions.mode, false);
      }
      if (activated.length && hoverOptions.mode) {
        this.updateHoverStyle(activated, hoverOptions.mode, true);
      }
    }
    _eventHandler(e2, replay) {
      const args = {
        event: e2,
        replay,
        cancelable: true,
        inChartArea: this.isPointInArea(e2)
      };
      const eventFilter = (plugin2) => (plugin2.options.events || this.options.events).includes(e2.native.type);
      if (this.notifyPlugins("beforeEvent", args, eventFilter) === false) {
        return;
      }
      const changed = this._handleEvent(e2, replay, args.inChartArea);
      args.cancelable = false;
      this.notifyPlugins("afterEvent", args, eventFilter);
      if (changed || args.changed) {
        this.render();
      }
      return this;
    }
    _handleEvent(e2, replay, inChartArea) {
      const { _active: lastActive = [], options } = this;
      const useFinalPosition = replay;
      const active = this._getActiveElements(e2, lastActive, inChartArea, useFinalPosition);
      const isClick = _isClickEvent(e2);
      const lastEvent = determineLastEvent(e2, this._lastEvent, inChartArea, isClick);
      if (inChartArea) {
        this._lastEvent = null;
        callback(options.onHover, [
          e2,
          active,
          this
        ], this);
        if (isClick) {
          callback(options.onClick, [
            e2,
            active,
            this
          ], this);
        }
      }
      const changed = !_elementsEqual(active, lastActive);
      if (changed || replay) {
        this._active = active;
        this._updateHoverStyles(active, lastActive, replay);
      }
      this._lastEvent = lastEvent;
      return changed;
    }
    _getActiveElements(e2, lastActive, inChartArea, useFinalPosition) {
      if (e2.type === "mouseout") {
        return [];
      }
      if (!inChartArea) {
        return lastActive;
      }
      const hoverOptions = this.options.hover;
      return this.getElementsAtEventForMode(e2, hoverOptions.mode, hoverOptions, useFinalPosition);
    }
  };
  function invalidatePlugins() {
    return each(Chart.instances, (chart) => chart._plugins.invalidate());
  }
  function clipSelf(ctx, element, endAngle) {
    const { startAngle, x: x2, y: y2, outerRadius, innerRadius, options } = element;
    const { borderWidth, borderJoinStyle } = options;
    const outerAngleClip = Math.min(borderWidth / outerRadius, _normalizeAngle(startAngle - endAngle));
    ctx.beginPath();
    ctx.arc(x2, y2, outerRadius - borderWidth / 2, startAngle + outerAngleClip / 2, endAngle - outerAngleClip / 2);
    if (innerRadius > 0) {
      const innerAngleClip = Math.min(borderWidth / innerRadius, _normalizeAngle(startAngle - endAngle));
      ctx.arc(x2, y2, innerRadius + borderWidth / 2, endAngle - innerAngleClip / 2, startAngle + innerAngleClip / 2, true);
    } else {
      const clipWidth = Math.min(borderWidth / 2, outerRadius * _normalizeAngle(startAngle - endAngle));
      if (borderJoinStyle === "round") {
        ctx.arc(x2, y2, clipWidth, endAngle - PI / 2, startAngle + PI / 2, true);
      } else if (borderJoinStyle === "bevel") {
        const r2 = 2 * clipWidth * clipWidth;
        const endX = -r2 * Math.cos(endAngle + PI / 2) + x2;
        const endY = -r2 * Math.sin(endAngle + PI / 2) + y2;
        const startX = r2 * Math.cos(startAngle + PI / 2) + x2;
        const startY = r2 * Math.sin(startAngle + PI / 2) + y2;
        ctx.lineTo(endX, endY);
        ctx.lineTo(startX, startY);
      }
    }
    ctx.closePath();
    ctx.moveTo(0, 0);
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.clip("evenodd");
  }
  function clipArc(ctx, element, endAngle) {
    const { startAngle, pixelMargin, x: x2, y: y2, outerRadius, innerRadius } = element;
    let angleMargin = pixelMargin / outerRadius;
    ctx.beginPath();
    ctx.arc(x2, y2, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
    if (innerRadius > pixelMargin) {
      angleMargin = pixelMargin / innerRadius;
      ctx.arc(x2, y2, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
    } else {
      ctx.arc(x2, y2, pixelMargin, endAngle + HALF_PI, startAngle - HALF_PI);
    }
    ctx.closePath();
    ctx.clip();
  }
  function toRadiusCorners(value) {
    return _readValueToProps(value, [
      "outerStart",
      "outerEnd",
      "innerStart",
      "innerEnd"
    ]);
  }
  function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
    const o2 = toRadiusCorners(arc.options.borderRadius);
    const halfThickness = (outerRadius - innerRadius) / 2;
    const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
    const computeOuterLimit = (val) => {
      const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
      return _limitValue(val, 0, Math.min(halfThickness, outerArcLimit));
    };
    return {
      outerStart: computeOuterLimit(o2.outerStart),
      outerEnd: computeOuterLimit(o2.outerEnd),
      innerStart: _limitValue(o2.innerStart, 0, innerLimit),
      innerEnd: _limitValue(o2.innerEnd, 0, innerLimit)
    };
  }
  function rThetaToXY(r2, theta, x2, y2) {
    return {
      x: x2 + r2 * Math.cos(theta),
      y: y2 + r2 * Math.sin(theta)
    };
  }
  function pathArc(ctx, element, offset, spacing, end, circular) {
    const { x: x2, y: y2, startAngle: start2, pixelMargin, innerRadius: innerR } = element;
    const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
    const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
    let spacingOffset = 0;
    const alpha2 = end - start2;
    if (spacing) {
      const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
      const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
      const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
      const adjustedAngle = avNogSpacingRadius !== 0 ? alpha2 * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha2;
      spacingOffset = (alpha2 - adjustedAngle) / 2;
    }
    const beta = Math.max(1e-3, alpha2 * outerRadius - offset / PI) / outerRadius;
    const angleOffset = (alpha2 - beta) / 2;
    const startAngle = start2 + angleOffset + spacingOffset;
    const endAngle = end - angleOffset - spacingOffset;
    const { outerStart, outerEnd, innerStart, innerEnd } = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
    const outerStartAdjustedRadius = outerRadius - outerStart;
    const outerEndAdjustedRadius = outerRadius - outerEnd;
    const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
    const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
    const innerStartAdjustedRadius = innerRadius + innerStart;
    const innerEndAdjustedRadius = innerRadius + innerEnd;
    const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
    const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
    ctx.beginPath();
    if (circular) {
      const outerMidAdjustedAngle = (outerStartAdjustedAngle + outerEndAdjustedAngle) / 2;
      ctx.arc(x2, y2, outerRadius, outerStartAdjustedAngle, outerMidAdjustedAngle);
      ctx.arc(x2, y2, outerRadius, outerMidAdjustedAngle, outerEndAdjustedAngle);
      if (outerEnd > 0) {
        const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x2, y2);
        ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + HALF_PI);
      }
      const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x2, y2);
      ctx.lineTo(p4.x, p4.y);
      if (innerEnd > 0) {
        const pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x2, y2);
        ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + HALF_PI, innerEndAdjustedAngle + Math.PI);
      }
      const innerMidAdjustedAngle = (endAngle - innerEnd / innerRadius + (startAngle + innerStart / innerRadius)) / 2;
      ctx.arc(x2, y2, innerRadius, endAngle - innerEnd / innerRadius, innerMidAdjustedAngle, true);
      ctx.arc(x2, y2, innerRadius, innerMidAdjustedAngle, startAngle + innerStart / innerRadius, true);
      if (innerStart > 0) {
        const pCenter = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x2, y2);
        ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - HALF_PI);
      }
      const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x2, y2);
      ctx.lineTo(p8.x, p8.y);
      if (outerStart > 0) {
        const pCenter = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x2, y2);
        ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - HALF_PI, outerStartAdjustedAngle);
      }
    } else {
      ctx.moveTo(x2, y2);
      const outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x2;
      const outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y2;
      ctx.lineTo(outerStartX, outerStartY);
      const outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x2;
      const outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y2;
      ctx.lineTo(outerEndX, outerEndY);
    }
    ctx.closePath();
  }
  function drawArc(ctx, element, offset, spacing, circular) {
    const { fullCircles, startAngle, circumference } = element;
    let endAngle = element.endAngle;
    if (fullCircles) {
      pathArc(ctx, element, offset, spacing, endAngle, circular);
      for (let i2 = 0; i2 < fullCircles; ++i2) {
        ctx.fill();
      }
      if (!isNaN(circumference)) {
        endAngle = startAngle + (circumference % TAU || TAU);
      }
    }
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    ctx.fill();
    return endAngle;
  }
  function drawBorder(ctx, element, offset, spacing, circular) {
    const { fullCircles, startAngle, circumference, options } = element;
    const { borderWidth, borderJoinStyle, borderDash, borderDashOffset, borderRadius } = options;
    const inner = options.borderAlign === "inner";
    if (!borderWidth) {
      return;
    }
    ctx.setLineDash(borderDash || []);
    ctx.lineDashOffset = borderDashOffset;
    if (inner) {
      ctx.lineWidth = borderWidth * 2;
      ctx.lineJoin = borderJoinStyle || "round";
    } else {
      ctx.lineWidth = borderWidth;
      ctx.lineJoin = borderJoinStyle || "bevel";
    }
    let endAngle = element.endAngle;
    if (fullCircles) {
      pathArc(ctx, element, offset, spacing, endAngle, circular);
      for (let i2 = 0; i2 < fullCircles; ++i2) {
        ctx.stroke();
      }
      if (!isNaN(circumference)) {
        endAngle = startAngle + (circumference % TAU || TAU);
      }
    }
    if (inner) {
      clipArc(ctx, element, endAngle);
    }
    if (options.selfJoin && endAngle - startAngle >= PI && borderRadius === 0 && borderJoinStyle !== "miter") {
      clipSelf(ctx, element, endAngle);
    }
    if (!fullCircles) {
      pathArc(ctx, element, offset, spacing, endAngle, circular);
      ctx.stroke();
    }
  }
  var ArcElement = class extends Element2 {
    static id = "arc";
    static defaults = {
      borderAlign: "center",
      borderColor: "#fff",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: void 0,
      borderRadius: 0,
      borderWidth: 2,
      offset: 0,
      spacing: 0,
      angle: void 0,
      circular: true,
      selfJoin: false
    };
    static defaultRoutes = {
      backgroundColor: "backgroundColor"
    };
    static descriptors = {
      _scriptable: true,
      _indexable: (name) => name !== "borderDash"
    };
    circumference;
    endAngle;
    fullCircles;
    innerRadius;
    outerRadius;
    pixelMargin;
    startAngle;
    constructor(cfg) {
      super();
      this.options = void 0;
      this.circumference = void 0;
      this.startAngle = void 0;
      this.endAngle = void 0;
      this.innerRadius = void 0;
      this.outerRadius = void 0;
      this.pixelMargin = 0;
      this.fullCircles = 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    inRange(chartX, chartY, useFinalPosition) {
      const point = this.getProps([
        "x",
        "y"
      ], useFinalPosition);
      const { angle, distance } = getAngleFromPoint(point, {
        x: chartX,
        y: chartY
      });
      const { startAngle, endAngle, innerRadius, outerRadius, circumference } = this.getProps([
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "circumference"
      ], useFinalPosition);
      const rAdjust = (this.options.spacing + this.options.borderWidth) / 2;
      const _circumference = valueOrDefault(circumference, endAngle - startAngle);
      const nonZeroBetween = _angleBetween(angle, startAngle, endAngle) && startAngle !== endAngle;
      const betweenAngles = _circumference >= TAU || nonZeroBetween;
      const withinRadius = _isBetween(distance, innerRadius + rAdjust, outerRadius + rAdjust);
      return betweenAngles && withinRadius;
    }
    getCenterPoint(useFinalPosition) {
      const { x: x2, y: y2, startAngle, endAngle, innerRadius, outerRadius } = this.getProps([
        "x",
        "y",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius"
      ], useFinalPosition);
      const { offset, spacing } = this.options;
      const halfAngle = (startAngle + endAngle) / 2;
      const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
      return {
        x: x2 + Math.cos(halfAngle) * halfRadius,
        y: y2 + Math.sin(halfAngle) * halfRadius
      };
    }
    tooltipPosition(useFinalPosition) {
      return this.getCenterPoint(useFinalPosition);
    }
    draw(ctx) {
      const { options, circumference } = this;
      const offset = (options.offset || 0) / 4;
      const spacing = (options.spacing || 0) / 2;
      const circular = options.circular;
      this.pixelMargin = options.borderAlign === "inner" ? 0.33 : 0;
      this.fullCircles = circumference > TAU ? Math.floor(circumference / TAU) : 0;
      if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) {
        return;
      }
      ctx.save();
      const halfAngle = (this.startAngle + this.endAngle) / 2;
      ctx.translate(Math.cos(halfAngle) * offset, Math.sin(halfAngle) * offset);
      const fix = 1 - Math.sin(Math.min(PI, circumference || 0));
      const radiusOffset = offset * fix;
      ctx.fillStyle = options.backgroundColor;
      ctx.strokeStyle = options.borderColor;
      drawArc(ctx, this, radiusOffset, spacing, circular);
      drawBorder(ctx, this, radiusOffset, spacing, circular);
      ctx.restore();
    }
  };
  function setStyle(ctx, options, style = options) {
    ctx.lineCap = valueOrDefault(style.borderCapStyle, options.borderCapStyle);
    ctx.setLineDash(valueOrDefault(style.borderDash, options.borderDash));
    ctx.lineDashOffset = valueOrDefault(style.borderDashOffset, options.borderDashOffset);
    ctx.lineJoin = valueOrDefault(style.borderJoinStyle, options.borderJoinStyle);
    ctx.lineWidth = valueOrDefault(style.borderWidth, options.borderWidth);
    ctx.strokeStyle = valueOrDefault(style.borderColor, options.borderColor);
  }
  function lineTo(ctx, previous, target) {
    ctx.lineTo(target.x, target.y);
  }
  function getLineMethod(options) {
    if (options.stepped) {
      return _steppedLineTo;
    }
    if (options.tension || options.cubicInterpolationMode === "monotone") {
      return _bezierCurveTo;
    }
    return lineTo;
  }
  function pathVars(points, segment, params = {}) {
    const count = points.length;
    const { start: paramsStart = 0, end: paramsEnd = count - 1 } = params;
    const { start: segmentStart, end: segmentEnd } = segment;
    const start2 = Math.max(paramsStart, segmentStart);
    const end = Math.min(paramsEnd, segmentEnd);
    const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
    return {
      count,
      start: start2,
      loop: segment.loop,
      ilen: end < start2 && !outside ? count + end - start2 : end - start2
    };
  }
  function pathSegment(ctx, line, segment, params) {
    const { points, options } = line;
    const { count, start: start2, loop: loop2, ilen } = pathVars(points, segment, params);
    const lineMethod = getLineMethod(options);
    let { move = true, reverse } = params || {};
    let i2, point, prev;
    for (i2 = 0; i2 <= ilen; ++i2) {
      point = points[(start2 + (reverse ? ilen - i2 : i2)) % count];
      if (point.skip) {
        continue;
      } else if (move) {
        ctx.moveTo(point.x, point.y);
        move = false;
      } else {
        lineMethod(ctx, prev, point, reverse, options.stepped);
      }
      prev = point;
    }
    if (loop2) {
      point = points[(start2 + (reverse ? ilen : 0)) % count];
      lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    return !!loop2;
  }
  function fastPathSegment(ctx, line, segment, params) {
    const points = line.points;
    const { count, start: start2, ilen } = pathVars(points, segment, params);
    const { move = true, reverse } = params || {};
    let avgX = 0;
    let countX = 0;
    let i2, point, prevX, minY, maxY, lastY;
    const pointIndex = (index2) => (start2 + (reverse ? ilen - index2 : index2)) % count;
    const drawX = () => {
      if (minY !== maxY) {
        ctx.lineTo(avgX, maxY);
        ctx.lineTo(avgX, minY);
        ctx.lineTo(avgX, lastY);
      }
    };
    if (move) {
      point = points[pointIndex(0)];
      ctx.moveTo(point.x, point.y);
    }
    for (i2 = 0; i2 <= ilen; ++i2) {
      point = points[pointIndex(i2)];
      if (point.skip) {
        continue;
      }
      const x2 = point.x;
      const y2 = point.y;
      const truncX = x2 | 0;
      if (truncX === prevX) {
        if (y2 < minY) {
          minY = y2;
        } else if (y2 > maxY) {
          maxY = y2;
        }
        avgX = (countX * avgX + x2) / ++countX;
      } else {
        drawX();
        ctx.lineTo(x2, y2);
        prevX = truncX;
        countX = 0;
        minY = maxY = y2;
      }
      lastY = y2;
    }
    drawX();
  }
  function _getSegmentMethod(line) {
    const opts = line.options;
    const borderDash = opts.borderDash && opts.borderDash.length;
    const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== "monotone" && !opts.stepped && !borderDash;
    return useFastPath ? fastPathSegment : pathSegment;
  }
  function _getInterpolationMethod(options) {
    if (options.stepped) {
      return _steppedInterpolation;
    }
    if (options.tension || options.cubicInterpolationMode === "monotone") {
      return _bezierInterpolation;
    }
    return _pointInLine;
  }
  function strokePathWithCache(ctx, line, start2, count) {
    let path = line._path;
    if (!path) {
      path = line._path = new Path2D();
      if (line.path(path, start2, count)) {
        path.closePath();
      }
    }
    setStyle(ctx, line.options);
    ctx.stroke(path);
  }
  function strokePathDirect(ctx, line, start2, count) {
    const { segments, options } = line;
    const segmentMethod = _getSegmentMethod(line);
    for (const segment of segments) {
      setStyle(ctx, options, segment.style);
      ctx.beginPath();
      if (segmentMethod(ctx, line, segment, {
        start: start2,
        end: start2 + count - 1
      })) {
        ctx.closePath();
      }
      ctx.stroke();
    }
  }
  var usePath2D = typeof Path2D === "function";
  function draw(ctx, line, start2, count) {
    if (usePath2D && !line.options.segment) {
      strokePathWithCache(ctx, line, start2, count);
    } else {
      strokePathDirect(ctx, line, start2, count);
    }
  }
  var LineElement = class extends Element2 {
    static id = "line";
    static defaults = {
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      borderWidth: 3,
      capBezierPoints: true,
      cubicInterpolationMode: "default",
      fill: false,
      spanGaps: false,
      stepped: false,
      tension: 0
    };
    static defaultRoutes = {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor"
    };
    static descriptors = {
      _scriptable: true,
      _indexable: (name) => name !== "borderDash" && name !== "fill"
    };
    constructor(cfg) {
      super();
      this.animated = true;
      this.options = void 0;
      this._chart = void 0;
      this._loop = void 0;
      this._fullLoop = void 0;
      this._path = void 0;
      this._points = void 0;
      this._segments = void 0;
      this._decimated = false;
      this._pointsUpdated = false;
      this._datasetIndex = void 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    updateControlPoints(chartArea, indexAxis) {
      const options = this.options;
      if ((options.tension || options.cubicInterpolationMode === "monotone") && !options.stepped && !this._pointsUpdated) {
        const loop2 = options.spanGaps ? this._loop : this._fullLoop;
        _updateBezierControlPoints(this._points, options, chartArea, loop2, indexAxis);
        this._pointsUpdated = true;
      }
    }
    set points(points) {
      this._points = points;
      delete this._segments;
      delete this._path;
      this._pointsUpdated = false;
    }
    get points() {
      return this._points;
    }
    get segments() {
      return this._segments || (this._segments = _computeSegments(this, this.options.segment));
    }
    first() {
      const segments = this.segments;
      const points = this.points;
      return segments.length && points[segments[0].start];
    }
    last() {
      const segments = this.segments;
      const points = this.points;
      const count = segments.length;
      return count && points[segments[count - 1].end];
    }
    interpolate(point, property) {
      const options = this.options;
      const value = point[property];
      const points = this.points;
      const segments = _boundSegments(this, {
        property,
        start: value,
        end: value
      });
      if (!segments.length) {
        return;
      }
      const result = [];
      const _interpolate = _getInterpolationMethod(options);
      let i2, ilen;
      for (i2 = 0, ilen = segments.length; i2 < ilen; ++i2) {
        const { start: start2, end } = segments[i2];
        const p1 = points[start2];
        const p2 = points[end];
        if (p1 === p2) {
          result.push(p1);
          continue;
        }
        const t3 = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
        const interpolated = _interpolate(p1, p2, t3, options.stepped);
        interpolated[property] = point[property];
        result.push(interpolated);
      }
      return result.length === 1 ? result[0] : result;
    }
    pathSegment(ctx, segment, params) {
      const segmentMethod = _getSegmentMethod(this);
      return segmentMethod(ctx, this, segment, params);
    }
    path(ctx, start2, count) {
      const segments = this.segments;
      const segmentMethod = _getSegmentMethod(this);
      let loop2 = this._loop;
      start2 = start2 || 0;
      count = count || this.points.length - start2;
      for (const segment of segments) {
        loop2 &= segmentMethod(ctx, this, segment, {
          start: start2,
          end: start2 + count - 1
        });
      }
      return !!loop2;
    }
    draw(ctx, chartArea, start2, count) {
      const options = this.options || {};
      const points = this.points || [];
      if (points.length && options.borderWidth) {
        ctx.save();
        draw(ctx, this, start2, count);
        ctx.restore();
      }
      if (this.animated) {
        this._pointsUpdated = false;
        this._path = void 0;
      }
    }
  };
  function inRange$1(el, pos, axis, useFinalPosition) {
    const options = el.options;
    const { [axis]: value } = el.getProps([
      axis
    ], useFinalPosition);
    return Math.abs(pos - value) < options.radius + options.hitRadius;
  }
  var PointElement = class extends Element2 {
    static id = "point";
    parsed;
    skip;
    stop;
    /**
    * @type {any}
    */
    static defaults = {
      borderWidth: 1,
      hitRadius: 1,
      hoverBorderWidth: 1,
      hoverRadius: 4,
      pointStyle: "circle",
      radius: 3,
      rotation: 0
    };
    /**
    * @type {any}
    */
    static defaultRoutes = {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor"
    };
    constructor(cfg) {
      super();
      this.options = void 0;
      this.parsed = void 0;
      this.skip = void 0;
      this.stop = void 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    inRange(mouseX, mouseY, useFinalPosition) {
      const options = this.options;
      const { x: x2, y: y2 } = this.getProps([
        "x",
        "y"
      ], useFinalPosition);
      return Math.pow(mouseX - x2, 2) + Math.pow(mouseY - y2, 2) < Math.pow(options.hitRadius + options.radius, 2);
    }
    inXRange(mouseX, useFinalPosition) {
      return inRange$1(this, mouseX, "x", useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
      return inRange$1(this, mouseY, "y", useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
      const { x: x2, y: y2 } = this.getProps([
        "x",
        "y"
      ], useFinalPosition);
      return {
        x: x2,
        y: y2
      };
    }
    size(options) {
      options = options || this.options || {};
      let radius = options.radius || 0;
      radius = Math.max(radius, radius && options.hoverRadius || 0);
      const borderWidth = radius && options.borderWidth || 0;
      return (radius + borderWidth) * 2;
    }
    draw(ctx, area) {
      const options = this.options;
      if (this.skip || options.radius < 0.1 || !_isPointInArea(this, area, this.size(options) / 2)) {
        return;
      }
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.fillStyle = options.backgroundColor;
      drawPoint(ctx, options, this.x, this.y);
    }
    getRange() {
      const options = this.options || {};
      return options.radius + options.hitRadius;
    }
  };
  function getBarBounds(bar, useFinalPosition) {
    const { x: x2, y: y2, base, width, height } = bar.getProps([
      "x",
      "y",
      "base",
      "width",
      "height"
    ], useFinalPosition);
    let left, right, top, bottom, half;
    if (bar.horizontal) {
      half = height / 2;
      left = Math.min(x2, base);
      right = Math.max(x2, base);
      top = y2 - half;
      bottom = y2 + half;
    } else {
      half = width / 2;
      left = x2 - half;
      right = x2 + half;
      top = Math.min(y2, base);
      bottom = Math.max(y2, base);
    }
    return {
      left,
      top,
      right,
      bottom
    };
  }
  function skipOrLimit(skip2, value, min, max) {
    return skip2 ? 0 : _limitValue(value, min, max);
  }
  function parseBorderWidth(bar, maxW, maxH) {
    const value = bar.options.borderWidth;
    const skip2 = bar.borderSkipped;
    const o2 = toTRBL(value);
    return {
      t: skipOrLimit(skip2.top, o2.top, 0, maxH),
      r: skipOrLimit(skip2.right, o2.right, 0, maxW),
      b: skipOrLimit(skip2.bottom, o2.bottom, 0, maxH),
      l: skipOrLimit(skip2.left, o2.left, 0, maxW)
    };
  }
  function parseBorderRadius(bar, maxW, maxH) {
    const { enableBorderRadius } = bar.getProps([
      "enableBorderRadius"
    ]);
    const value = bar.options.borderRadius;
    const o2 = toTRBLCorners(value);
    const maxR = Math.min(maxW, maxH);
    const skip2 = bar.borderSkipped;
    const enableBorder = enableBorderRadius || isObject2(value);
    return {
      topLeft: skipOrLimit(!enableBorder || skip2.top || skip2.left, o2.topLeft, 0, maxR),
      topRight: skipOrLimit(!enableBorder || skip2.top || skip2.right, o2.topRight, 0, maxR),
      bottomLeft: skipOrLimit(!enableBorder || skip2.bottom || skip2.left, o2.bottomLeft, 0, maxR),
      bottomRight: skipOrLimit(!enableBorder || skip2.bottom || skip2.right, o2.bottomRight, 0, maxR)
    };
  }
  function boundingRects(bar) {
    const bounds = getBarBounds(bar);
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const border = parseBorderWidth(bar, width / 2, height / 2);
    const radius = parseBorderRadius(bar, width / 2, height / 2);
    return {
      outer: {
        x: bounds.left,
        y: bounds.top,
        w: width,
        h: height,
        radius
      },
      inner: {
        x: bounds.left + border.l,
        y: bounds.top + border.t,
        w: width - border.l - border.r,
        h: height - border.t - border.b,
        radius: {
          topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
          topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
          bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
          bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
        }
      }
    };
  }
  function inRange(bar, x2, y2, useFinalPosition) {
    const skipX = x2 === null;
    const skipY = y2 === null;
    const skipBoth = skipX && skipY;
    const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
    return bounds && (skipX || _isBetween(x2, bounds.left, bounds.right)) && (skipY || _isBetween(y2, bounds.top, bounds.bottom));
  }
  function hasRadius(radius) {
    return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
  }
  function addNormalRectPath(ctx, rect) {
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
  }
  function inflateRect(rect, amount, refRect = {}) {
    const x2 = rect.x !== refRect.x ? -amount : 0;
    const y2 = rect.y !== refRect.y ? -amount : 0;
    const w2 = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x2;
    const h3 = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y2;
    return {
      x: rect.x + x2,
      y: rect.y + y2,
      w: rect.w + w2,
      h: rect.h + h3,
      radius: rect.radius
    };
  }
  var BarElement = class extends Element2 {
    static id = "bar";
    static defaults = {
      borderSkipped: "start",
      borderWidth: 0,
      borderRadius: 0,
      inflateAmount: "auto",
      pointStyle: void 0
    };
    static defaultRoutes = {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor"
    };
    constructor(cfg) {
      super();
      this.options = void 0;
      this.horizontal = void 0;
      this.base = void 0;
      this.width = void 0;
      this.height = void 0;
      this.inflateAmount = void 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    draw(ctx) {
      const { inflateAmount, options: { borderColor, backgroundColor } } = this;
      const { inner, outer } = boundingRects(this);
      const addRectPath = hasRadius(outer.radius) ? addRoundedRectPath : addNormalRectPath;
      ctx.save();
      if (outer.w !== inner.w || outer.h !== inner.h) {
        ctx.beginPath();
        addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
        ctx.clip();
        addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
        ctx.fillStyle = borderColor;
        ctx.fill("evenodd");
      }
      ctx.beginPath();
      addRectPath(ctx, inflateRect(inner, inflateAmount));
      ctx.fillStyle = backgroundColor;
      ctx.fill();
      ctx.restore();
    }
    inRange(mouseX, mouseY, useFinalPosition) {
      return inRange(this, mouseX, mouseY, useFinalPosition);
    }
    inXRange(mouseX, useFinalPosition) {
      return inRange(this, mouseX, null, useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
      return inRange(this, null, mouseY, useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
      const { x: x2, y: y2, base, horizontal } = this.getProps([
        "x",
        "y",
        "base",
        "horizontal"
      ], useFinalPosition);
      return {
        x: horizontal ? (x2 + base) / 2 : x2,
        y: horizontal ? y2 : (y2 + base) / 2
      };
    }
    getRange(axis) {
      return axis === "x" ? this.width / 2 : this.height / 2;
    }
  };
  var elements = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    ArcElement,
    BarElement,
    LineElement,
    PointElement
  });
  var BORDER_COLORS = [
    "rgb(54, 162, 235)",
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(153, 102, 255)",
    "rgb(201, 203, 207)"
    // grey
  ];
  var BACKGROUND_COLORS = /* @__PURE__ */ BORDER_COLORS.map((color2) => color2.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
  function getBorderColor(i2) {
    return BORDER_COLORS[i2 % BORDER_COLORS.length];
  }
  function getBackgroundColor(i2) {
    return BACKGROUND_COLORS[i2 % BACKGROUND_COLORS.length];
  }
  function colorizeDefaultDataset(dataset, i2) {
    dataset.borderColor = getBorderColor(i2);
    dataset.backgroundColor = getBackgroundColor(i2);
    return ++i2;
  }
  function colorizeDoughnutDataset(dataset, i2) {
    dataset.backgroundColor = dataset.data.map(() => getBorderColor(i2++));
    return i2;
  }
  function colorizePolarAreaDataset(dataset, i2) {
    dataset.backgroundColor = dataset.data.map(() => getBackgroundColor(i2++));
    return i2;
  }
  function getColorizer(chart) {
    let i2 = 0;
    return (dataset, datasetIndex) => {
      const controller = chart.getDatasetMeta(datasetIndex).controller;
      if (controller instanceof DoughnutController) {
        i2 = colorizeDoughnutDataset(dataset, i2);
      } else if (controller instanceof PolarAreaController) {
        i2 = colorizePolarAreaDataset(dataset, i2);
      } else if (controller) {
        i2 = colorizeDefaultDataset(dataset, i2);
      }
    };
  }
  function containsColorsDefinitions(descriptors2) {
    let k2;
    for (k2 in descriptors2) {
      if (descriptors2[k2].borderColor || descriptors2[k2].backgroundColor) {
        return true;
      }
    }
    return false;
  }
  function containsColorsDefinition(descriptor) {
    return descriptor && (descriptor.borderColor || descriptor.backgroundColor);
  }
  function containsDefaultColorsDefenitions() {
    return defaults.borderColor !== "rgba(0,0,0,0.1)" || defaults.backgroundColor !== "rgba(0,0,0,0.1)";
  }
  var plugin_colors = {
    id: "colors",
    defaults: {
      enabled: true,
      forceOverride: false
    },
    beforeLayout(chart, _args, options) {
      if (!options.enabled) {
        return;
      }
      const { data: { datasets }, options: chartOptions } = chart.config;
      const { elements: elements2 } = chartOptions;
      const containsColorDefenition = containsColorsDefinitions(datasets) || containsColorsDefinition(chartOptions) || elements2 && containsColorsDefinitions(elements2) || containsDefaultColorsDefenitions();
      if (!options.forceOverride && containsColorDefenition) {
        return;
      }
      const colorizer = getColorizer(chart);
      datasets.forEach(colorizer);
    }
  };
  function lttbDecimation(data2, start2, count, availableWidth, options) {
    const samples = options.samples || availableWidth;
    if (samples >= count) {
      return data2.slice(start2, start2 + count);
    }
    const decimated = [];
    const bucketWidth = (count - 2) / (samples - 2);
    let sampledIndex = 0;
    const endIndex = start2 + count - 1;
    let a2 = start2;
    let i2, maxAreaPoint, maxArea, area, nextA;
    decimated[sampledIndex++] = data2[a2];
    for (i2 = 0; i2 < samples - 2; i2++) {
      let avgX = 0;
      let avgY = 0;
      let j2;
      const avgRangeStart = Math.floor((i2 + 1) * bucketWidth) + 1 + start2;
      const avgRangeEnd = Math.min(Math.floor((i2 + 2) * bucketWidth) + 1, count) + start2;
      const avgRangeLength = avgRangeEnd - avgRangeStart;
      for (j2 = avgRangeStart; j2 < avgRangeEnd; j2++) {
        avgX += data2[j2].x;
        avgY += data2[j2].y;
      }
      avgX /= avgRangeLength;
      avgY /= avgRangeLength;
      const rangeOffs = Math.floor(i2 * bucketWidth) + 1 + start2;
      const rangeTo = Math.min(Math.floor((i2 + 1) * bucketWidth) + 1, count) + start2;
      const { x: pointAx, y: pointAy } = data2[a2];
      maxArea = area = -1;
      for (j2 = rangeOffs; j2 < rangeTo; j2++) {
        area = 0.5 * Math.abs((pointAx - avgX) * (data2[j2].y - pointAy) - (pointAx - data2[j2].x) * (avgY - pointAy));
        if (area > maxArea) {
          maxArea = area;
          maxAreaPoint = data2[j2];
          nextA = j2;
        }
      }
      decimated[sampledIndex++] = maxAreaPoint;
      a2 = nextA;
    }
    decimated[sampledIndex++] = data2[endIndex];
    return decimated;
  }
  function minMaxDecimation(data2, start2, count, availableWidth) {
    let avgX = 0;
    let countX = 0;
    let i2, point, x2, y2, prevX, minIndex, maxIndex, startIndex, minY, maxY;
    const decimated = [];
    const endIndex = start2 + count - 1;
    const xMin = data2[start2].x;
    const xMax = data2[endIndex].x;
    const dx = xMax - xMin;
    for (i2 = start2; i2 < start2 + count; ++i2) {
      point = data2[i2];
      x2 = (point.x - xMin) / dx * availableWidth;
      y2 = point.y;
      const truncX = x2 | 0;
      if (truncX === prevX) {
        if (y2 < minY) {
          minY = y2;
          minIndex = i2;
        } else if (y2 > maxY) {
          maxY = y2;
          maxIndex = i2;
        }
        avgX = (countX * avgX + point.x) / ++countX;
      } else {
        const lastIndex = i2 - 1;
        if (!isNullOrUndef(minIndex) && !isNullOrUndef(maxIndex)) {
          const intermediateIndex1 = Math.min(minIndex, maxIndex);
          const intermediateIndex2 = Math.max(minIndex, maxIndex);
          if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
            decimated.push({
              ...data2[intermediateIndex1],
              x: avgX
            });
          }
          if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
            decimated.push({
              ...data2[intermediateIndex2],
              x: avgX
            });
          }
        }
        if (i2 > 0 && lastIndex !== startIndex) {
          decimated.push(data2[lastIndex]);
        }
        decimated.push(point);
        prevX = truncX;
        countX = 0;
        minY = maxY = y2;
        minIndex = maxIndex = startIndex = i2;
      }
    }
    return decimated;
  }
  function cleanDecimatedDataset(dataset) {
    if (dataset._decimated) {
      const data2 = dataset._data;
      delete dataset._decimated;
      delete dataset._data;
      Object.defineProperty(dataset, "data", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: data2
      });
    }
  }
  function cleanDecimatedData(chart) {
    chart.data.datasets.forEach((dataset) => {
      cleanDecimatedDataset(dataset);
    });
  }
  function getStartAndCountOfVisiblePointsSimplified(meta, points) {
    const pointCount = points.length;
    let start2 = 0;
    let count;
    const { iScale } = meta;
    const { min, max, minDefined, maxDefined } = iScale.getUserBounds();
    if (minDefined) {
      start2 = _limitValue(_lookupByKey(points, iScale.axis, min).lo, 0, pointCount - 1);
    }
    if (maxDefined) {
      count = _limitValue(_lookupByKey(points, iScale.axis, max).hi + 1, start2, pointCount) - start2;
    } else {
      count = pointCount - start2;
    }
    return {
      start: start2,
      count
    };
  }
  var plugin_decimation = {
    id: "decimation",
    defaults: {
      algorithm: "min-max",
      enabled: false
    },
    beforeElementsUpdate: (chart, args, options) => {
      if (!options.enabled) {
        cleanDecimatedData(chart);
        return;
      }
      const availableWidth = chart.width;
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const { _data, indexAxis } = dataset;
        const meta = chart.getDatasetMeta(datasetIndex);
        const data2 = _data || dataset.data;
        if (resolve([
          indexAxis,
          chart.options.indexAxis
        ]) === "y") {
          return;
        }
        if (!meta.controller.supportsDecimation) {
          return;
        }
        const xAxis = chart.scales[meta.xAxisID];
        if (xAxis.type !== "linear" && xAxis.type !== "time") {
          return;
        }
        if (chart.options.parsing) {
          return;
        }
        let { start: start2, count } = getStartAndCountOfVisiblePointsSimplified(meta, data2);
        const threshold = options.threshold || 4 * availableWidth;
        if (count <= threshold) {
          cleanDecimatedDataset(dataset);
          return;
        }
        if (isNullOrUndef(_data)) {
          dataset._data = data2;
          delete dataset.data;
          Object.defineProperty(dataset, "data", {
            configurable: true,
            enumerable: true,
            get: function() {
              return this._decimated;
            },
            set: function(d2) {
              this._data = d2;
            }
          });
        }
        let decimated;
        switch (options.algorithm) {
          case "lttb":
            decimated = lttbDecimation(data2, start2, count, availableWidth, options);
            break;
          case "min-max":
            decimated = minMaxDecimation(data2, start2, count, availableWidth);
            break;
          default:
            throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
        }
        dataset._decimated = decimated;
      });
    },
    destroy(chart) {
      cleanDecimatedData(chart);
    }
  };
  function _segments(line, target, property) {
    const segments = line.segments;
    const points = line.points;
    const tpoints = target.points;
    const parts = [];
    for (const segment of segments) {
      let { start: start2, end } = segment;
      end = _findSegmentEnd(start2, end, points);
      const bounds = _getBounds(property, points[start2], points[end], segment.loop);
      if (!target.segments) {
        parts.push({
          source: segment,
          target: bounds,
          start: points[start2],
          end: points[end]
        });
        continue;
      }
      const targetSegments = _boundSegments(target, bounds);
      for (const tgt of targetSegments) {
        const subBounds = _getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
        const fillSources = _boundSegment(segment, points, subBounds);
        for (const fillSource of fillSources) {
          parts.push({
            source: fillSource,
            target: tgt,
            start: {
              [property]: _getEdge(bounds, subBounds, "start", Math.max)
            },
            end: {
              [property]: _getEdge(bounds, subBounds, "end", Math.min)
            }
          });
        }
      }
    }
    return parts;
  }
  function _getBounds(property, first, last, loop2) {
    if (loop2) {
      return;
    }
    let start2 = first[property];
    let end = last[property];
    if (property === "angle") {
      start2 = _normalizeAngle(start2);
      end = _normalizeAngle(end);
    }
    return {
      property,
      start: start2,
      end
    };
  }
  function _pointsFromSegments(boundary, line) {
    const { x: x2 = null, y: y2 = null } = boundary || {};
    const linePoints = line.points;
    const points = [];
    line.segments.forEach(({ start: start2, end }) => {
      end = _findSegmentEnd(start2, end, linePoints);
      const first = linePoints[start2];
      const last = linePoints[end];
      if (y2 !== null) {
        points.push({
          x: first.x,
          y: y2
        });
        points.push({
          x: last.x,
          y: y2
        });
      } else if (x2 !== null) {
        points.push({
          x: x2,
          y: first.y
        });
        points.push({
          x: x2,
          y: last.y
        });
      }
    });
    return points;
  }
  function _findSegmentEnd(start2, end, points) {
    for (; end > start2; end--) {
      const point = points[end];
      if (!isNaN(point.x) && !isNaN(point.y)) {
        break;
      }
    }
    return end;
  }
  function _getEdge(a2, b2, prop, fn2) {
    if (a2 && b2) {
      return fn2(a2[prop], b2[prop]);
    }
    return a2 ? a2[prop] : b2 ? b2[prop] : 0;
  }
  function _createBoundaryLine(boundary, line) {
    let points = [];
    let _loop = false;
    if (isArray2(boundary)) {
      _loop = true;
      points = boundary;
    } else {
      points = _pointsFromSegments(boundary, line);
    }
    return points.length ? new LineElement({
      points,
      options: {
        tension: 0
      },
      _loop,
      _fullLoop: _loop
    }) : null;
  }
  function _shouldApplyFill(source) {
    return source && source.fill !== false;
  }
  function _resolveTarget(sources, index2, propagate) {
    const source = sources[index2];
    let fill2 = source.fill;
    const visited = [
      index2
    ];
    let target;
    if (!propagate) {
      return fill2;
    }
    while (fill2 !== false && visited.indexOf(fill2) === -1) {
      if (!isNumberFinite(fill2)) {
        return fill2;
      }
      target = sources[fill2];
      if (!target) {
        return false;
      }
      if (target.visible) {
        return fill2;
      }
      visited.push(fill2);
      fill2 = target.fill;
    }
    return false;
  }
  function _decodeFill(line, index2, count) {
    const fill2 = parseFillOption(line);
    if (isObject2(fill2)) {
      return isNaN(fill2.value) ? false : fill2;
    }
    let target = parseFloat(fill2);
    if (isNumberFinite(target) && Math.floor(target) === target) {
      return decodeTargetIndex(fill2[0], index2, target, count);
    }
    return [
      "origin",
      "start",
      "end",
      "stack",
      "shape"
    ].indexOf(fill2) >= 0 && fill2;
  }
  function decodeTargetIndex(firstCh, index2, target, count) {
    if (firstCh === "-" || firstCh === "+") {
      target = index2 + target;
    }
    if (target === index2 || target < 0 || target >= count) {
      return false;
    }
    return target;
  }
  function _getTargetPixel(fill2, scale) {
    let pixel = null;
    if (fill2 === "start") {
      pixel = scale.bottom;
    } else if (fill2 === "end") {
      pixel = scale.top;
    } else if (isObject2(fill2)) {
      pixel = scale.getPixelForValue(fill2.value);
    } else if (scale.getBasePixel) {
      pixel = scale.getBasePixel();
    }
    return pixel;
  }
  function _getTargetValue(fill2, scale, startValue) {
    let value;
    if (fill2 === "start") {
      value = startValue;
    } else if (fill2 === "end") {
      value = scale.options.reverse ? scale.min : scale.max;
    } else if (isObject2(fill2)) {
      value = fill2.value;
    } else {
      value = scale.getBaseValue();
    }
    return value;
  }
  function parseFillOption(line) {
    const options = line.options;
    const fillOption = options.fill;
    let fill2 = valueOrDefault(fillOption && fillOption.target, fillOption);
    if (fill2 === void 0) {
      fill2 = !!options.backgroundColor;
    }
    if (fill2 === false || fill2 === null) {
      return false;
    }
    if (fill2 === true) {
      return "origin";
    }
    return fill2;
  }
  function _buildStackLine(source) {
    const { scale, index: index2, line } = source;
    const points = [];
    const segments = line.segments;
    const sourcePoints = line.points;
    const linesBelow = getLinesBelow(scale, index2);
    linesBelow.push(_createBoundaryLine({
      x: null,
      y: scale.bottom
    }, line));
    for (let i2 = 0; i2 < segments.length; i2++) {
      const segment = segments[i2];
      for (let j2 = segment.start; j2 <= segment.end; j2++) {
        addPointsBelow(points, sourcePoints[j2], linesBelow);
      }
    }
    return new LineElement({
      points,
      options: {}
    });
  }
  function getLinesBelow(scale, index2) {
    const below = [];
    const metas = scale.getMatchingVisibleMetas("line");
    for (let i2 = 0; i2 < metas.length; i2++) {
      const meta = metas[i2];
      if (meta.index === index2) {
        break;
      }
      if (!meta.hidden) {
        below.unshift(meta.dataset);
      }
    }
    return below;
  }
  function addPointsBelow(points, sourcePoint, linesBelow) {
    const postponed = [];
    for (let j2 = 0; j2 < linesBelow.length; j2++) {
      const line = linesBelow[j2];
      const { first, last, point } = findPoint(line, sourcePoint, "x");
      if (!point || first && last) {
        continue;
      }
      if (first) {
        postponed.unshift(point);
      } else {
        points.push(point);
        if (!last) {
          break;
        }
      }
    }
    points.push(...postponed);
  }
  function findPoint(line, sourcePoint, property) {
    const point = line.interpolate(sourcePoint, property);
    if (!point) {
      return {};
    }
    const pointValue = point[property];
    const segments = line.segments;
    const linePoints = line.points;
    let first = false;
    let last = false;
    for (let i2 = 0; i2 < segments.length; i2++) {
      const segment = segments[i2];
      const firstValue = linePoints[segment.start][property];
      const lastValue = linePoints[segment.end][property];
      if (_isBetween(pointValue, firstValue, lastValue)) {
        first = pointValue === firstValue;
        last = pointValue === lastValue;
        break;
      }
    }
    return {
      first,
      last,
      point
    };
  }
  var simpleArc = class {
    constructor(opts) {
      this.x = opts.x;
      this.y = opts.y;
      this.radius = opts.radius;
    }
    pathSegment(ctx, bounds, opts) {
      const { x: x2, y: y2, radius } = this;
      bounds = bounds || {
        start: 0,
        end: TAU
      };
      ctx.arc(x2, y2, radius, bounds.end, bounds.start, true);
      return !opts.bounds;
    }
    interpolate(point) {
      const { x: x2, y: y2, radius } = this;
      const angle = point.angle;
      return {
        x: x2 + Math.cos(angle) * radius,
        y: y2 + Math.sin(angle) * radius,
        angle
      };
    }
  };
  function _getTarget(source) {
    const { chart, fill: fill2, line } = source;
    if (isNumberFinite(fill2)) {
      return getLineByIndex(chart, fill2);
    }
    if (fill2 === "stack") {
      return _buildStackLine(source);
    }
    if (fill2 === "shape") {
      return true;
    }
    const boundary = computeBoundary(source);
    if (boundary instanceof simpleArc) {
      return boundary;
    }
    return _createBoundaryLine(boundary, line);
  }
  function getLineByIndex(chart, index2) {
    const meta = chart.getDatasetMeta(index2);
    const visible = meta && chart.isDatasetVisible(index2);
    return visible ? meta.dataset : null;
  }
  function computeBoundary(source) {
    const scale = source.scale || {};
    if (scale.getPointPositionForValue) {
      return computeCircularBoundary(source);
    }
    return computeLinearBoundary(source);
  }
  function computeLinearBoundary(source) {
    const { scale = {}, fill: fill2 } = source;
    const pixel = _getTargetPixel(fill2, scale);
    if (isNumberFinite(pixel)) {
      const horizontal = scale.isHorizontal();
      return {
        x: horizontal ? pixel : null,
        y: horizontal ? null : pixel
      };
    }
    return null;
  }
  function computeCircularBoundary(source) {
    const { scale, fill: fill2 } = source;
    const options = scale.options;
    const length = scale.getLabels().length;
    const start2 = options.reverse ? scale.max : scale.min;
    const value = _getTargetValue(fill2, scale, start2);
    const target = [];
    if (options.grid.circular) {
      const center = scale.getPointPositionForValue(0, start2);
      return new simpleArc({
        x: center.x,
        y: center.y,
        radius: scale.getDistanceFromCenterForValue(value)
      });
    }
    for (let i2 = 0; i2 < length; ++i2) {
      target.push(scale.getPointPositionForValue(i2, value));
    }
    return target;
  }
  function _drawfill(ctx, source, area) {
    const target = _getTarget(source);
    const { chart, index: index2, line, scale, axis } = source;
    const lineOpts = line.options;
    const fillOption = lineOpts.fill;
    const color2 = lineOpts.backgroundColor;
    const { above = color2, below = color2 } = fillOption || {};
    const meta = chart.getDatasetMeta(index2);
    const clip = getDatasetClipArea(chart, meta);
    if (target && line.points.length) {
      clipArea(ctx, area);
      doFill(ctx, {
        line,
        target,
        above,
        below,
        area,
        scale,
        axis,
        clip
      });
      unclipArea(ctx);
    }
  }
  function doFill(ctx, cfg) {
    const { line, target, above, below, area, scale, clip } = cfg;
    const property = line._loop ? "angle" : cfg.axis;
    ctx.save();
    let fillColor = below;
    if (below !== above) {
      if (property === "x") {
        clipVertical(ctx, target, area.top);
        fill(ctx, {
          line,
          target,
          color: above,
          scale,
          property,
          clip
        });
        ctx.restore();
        ctx.save();
        clipVertical(ctx, target, area.bottom);
      } else if (property === "y") {
        clipHorizontal(ctx, target, area.left);
        fill(ctx, {
          line,
          target,
          color: below,
          scale,
          property,
          clip
        });
        ctx.restore();
        ctx.save();
        clipHorizontal(ctx, target, area.right);
        fillColor = above;
      }
    }
    fill(ctx, {
      line,
      target,
      color: fillColor,
      scale,
      property,
      clip
    });
    ctx.restore();
  }
  function clipVertical(ctx, target, clipY) {
    const { segments, points } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments) {
      const { start: start2, end } = segment;
      const firstPoint = points[start2];
      const lastPoint = points[_findSegmentEnd(start2, end, points)];
      if (first) {
        ctx.moveTo(firstPoint.x, firstPoint.y);
        first = false;
      } else {
        ctx.lineTo(firstPoint.x, clipY);
        ctx.lineTo(firstPoint.x, firstPoint.y);
      }
      lineLoop = !!target.pathSegment(ctx, segment, {
        move: lineLoop
      });
      if (lineLoop) {
        ctx.closePath();
      } else {
        ctx.lineTo(lastPoint.x, clipY);
      }
    }
    ctx.lineTo(target.first().x, clipY);
    ctx.closePath();
    ctx.clip();
  }
  function clipHorizontal(ctx, target, clipX) {
    const { segments, points } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments) {
      const { start: start2, end } = segment;
      const firstPoint = points[start2];
      const lastPoint = points[_findSegmentEnd(start2, end, points)];
      if (first) {
        ctx.moveTo(firstPoint.x, firstPoint.y);
        first = false;
      } else {
        ctx.lineTo(clipX, firstPoint.y);
        ctx.lineTo(firstPoint.x, firstPoint.y);
      }
      lineLoop = !!target.pathSegment(ctx, segment, {
        move: lineLoop
      });
      if (lineLoop) {
        ctx.closePath();
      } else {
        ctx.lineTo(clipX, lastPoint.y);
      }
    }
    ctx.lineTo(clipX, target.first().y);
    ctx.closePath();
    ctx.clip();
  }
  function fill(ctx, cfg) {
    const { line, target, property, color: color2, scale, clip } = cfg;
    const segments = _segments(line, target, property);
    for (const { source: src, target: tgt, start: start2, end } of segments) {
      const { style: { backgroundColor = color2 } = {} } = src;
      const notShape = target !== true;
      ctx.save();
      ctx.fillStyle = backgroundColor;
      clipBounds(ctx, scale, clip, notShape && _getBounds(property, start2, end));
      ctx.beginPath();
      const lineLoop = !!line.pathSegment(ctx, src);
      let loop2;
      if (notShape) {
        if (lineLoop) {
          ctx.closePath();
        } else {
          interpolatedLineTo(ctx, target, end, property);
        }
        const targetLoop = !!target.pathSegment(ctx, tgt, {
          move: lineLoop,
          reverse: true
        });
        loop2 = lineLoop && targetLoop;
        if (!loop2) {
          interpolatedLineTo(ctx, target, start2, property);
        }
      }
      ctx.closePath();
      ctx.fill(loop2 ? "evenodd" : "nonzero");
      ctx.restore();
    }
  }
  function clipBounds(ctx, scale, clip, bounds) {
    const chartArea = scale.chart.chartArea;
    const { property, start: start2, end } = bounds || {};
    if (property === "x" || property === "y") {
      let left, top, right, bottom;
      if (property === "x") {
        left = start2;
        top = chartArea.top;
        right = end;
        bottom = chartArea.bottom;
      } else {
        left = chartArea.left;
        top = start2;
        right = chartArea.right;
        bottom = end;
      }
      ctx.beginPath();
      if (clip) {
        left = Math.max(left, clip.left);
        right = Math.min(right, clip.right);
        top = Math.max(top, clip.top);
        bottom = Math.min(bottom, clip.bottom);
      }
      ctx.rect(left, top, right - left, bottom - top);
      ctx.clip();
    }
  }
  function interpolatedLineTo(ctx, target, point, property) {
    const interpolatedPoint = target.interpolate(point, property);
    if (interpolatedPoint) {
      ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
    }
  }
  var index = {
    id: "filler",
    afterDatasetsUpdate(chart, _args, options) {
      const count = (chart.data.datasets || []).length;
      const sources = [];
      let meta, i2, line, source;
      for (i2 = 0; i2 < count; ++i2) {
        meta = chart.getDatasetMeta(i2);
        line = meta.dataset;
        source = null;
        if (line && line.options && line instanceof LineElement) {
          source = {
            visible: chart.isDatasetVisible(i2),
            index: i2,
            fill: _decodeFill(line, i2, count),
            chart,
            axis: meta.controller.options.indexAxis,
            scale: meta.vScale,
            line
          };
        }
        meta.$filler = source;
        sources.push(source);
      }
      for (i2 = 0; i2 < count; ++i2) {
        source = sources[i2];
        if (!source || source.fill === false) {
          continue;
        }
        source.fill = _resolveTarget(sources, i2, options.propagate);
      }
    },
    beforeDraw(chart, _args, options) {
      const draw2 = options.drawTime === "beforeDraw";
      const metasets = chart.getSortedVisibleDatasetMetas();
      const area = chart.chartArea;
      for (let i2 = metasets.length - 1; i2 >= 0; --i2) {
        const source = metasets[i2].$filler;
        if (!source) {
          continue;
        }
        source.line.updateControlPoints(area, source.axis);
        if (draw2 && source.fill) {
          _drawfill(chart.ctx, source, area);
        }
      }
    },
    beforeDatasetsDraw(chart, _args, options) {
      if (options.drawTime !== "beforeDatasetsDraw") {
        return;
      }
      const metasets = chart.getSortedVisibleDatasetMetas();
      for (let i2 = metasets.length - 1; i2 >= 0; --i2) {
        const source = metasets[i2].$filler;
        if (_shouldApplyFill(source)) {
          _drawfill(chart.ctx, source, chart.chartArea);
        }
      }
    },
    beforeDatasetDraw(chart, args, options) {
      const source = args.meta.$filler;
      if (!_shouldApplyFill(source) || options.drawTime !== "beforeDatasetDraw") {
        return;
      }
      _drawfill(chart.ctx, source, chart.chartArea);
    },
    defaults: {
      propagate: true,
      drawTime: "beforeDatasetDraw"
    }
  };
  var getBoxSize = (labelOpts, fontSize) => {
    let { boxHeight = fontSize, boxWidth = fontSize } = labelOpts;
    if (labelOpts.usePointStyle) {
      boxHeight = Math.min(boxHeight, fontSize);
      boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
    }
    return {
      boxWidth,
      boxHeight,
      itemHeight: Math.max(fontSize, boxHeight)
    };
  };
  var itemsEqual = (a2, b2) => a2 !== null && b2 !== null && a2.datasetIndex === b2.datasetIndex && a2.index === b2.index;
  var Legend = class extends Element2 {
    constructor(config) {
      super();
      this._added = false;
      this.legendHitBoxes = [];
      this._hoveredItem = null;
      this.doughnutMode = false;
      this.chart = config.chart;
      this.options = config.options;
      this.ctx = config.ctx;
      this.legendItems = void 0;
      this.columnSizes = void 0;
      this.lineWidths = void 0;
      this.maxHeight = void 0;
      this.maxWidth = void 0;
      this.top = void 0;
      this.bottom = void 0;
      this.left = void 0;
      this.right = void 0;
      this.height = void 0;
      this.width = void 0;
      this._margins = void 0;
      this.position = void 0;
      this.weight = void 0;
      this.fullSize = void 0;
    }
    update(maxWidth, maxHeight, margins) {
      this.maxWidth = maxWidth;
      this.maxHeight = maxHeight;
      this._margins = margins;
      this.setDimensions();
      this.buildLabels();
      this.fit();
    }
    setDimensions() {
      if (this.isHorizontal()) {
        this.width = this.maxWidth;
        this.left = this._margins.left;
        this.right = this.width;
      } else {
        this.height = this.maxHeight;
        this.top = this._margins.top;
        this.bottom = this.height;
      }
    }
    buildLabels() {
      const labelOpts = this.options.labels || {};
      let legendItems = callback(labelOpts.generateLabels, [
        this.chart
      ], this) || [];
      if (labelOpts.filter) {
        legendItems = legendItems.filter((item) => labelOpts.filter(item, this.chart.data));
      }
      if (labelOpts.sort) {
        legendItems = legendItems.sort((a2, b2) => labelOpts.sort(a2, b2, this.chart.data));
      }
      if (this.options.reverse) {
        legendItems.reverse();
      }
      this.legendItems = legendItems;
    }
    fit() {
      const { options, ctx } = this;
      if (!options.display) {
        this.width = this.height = 0;
        return;
      }
      const labelOpts = options.labels;
      const labelFont = toFont(labelOpts.font);
      const fontSize = labelFont.size;
      const titleHeight = this._computeTitleHeight();
      const { boxWidth, itemHeight } = getBoxSize(labelOpts, fontSize);
      let width, height;
      ctx.font = labelFont.string;
      if (this.isHorizontal()) {
        width = this.maxWidth;
        height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
      } else {
        height = this.maxHeight;
        width = this._fitCols(titleHeight, labelFont, boxWidth, itemHeight) + 10;
      }
      this.width = Math.min(width, options.maxWidth || this.maxWidth);
      this.height = Math.min(height, options.maxHeight || this.maxHeight);
    }
    _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
      const { ctx, maxWidth, options: { labels: { padding } } } = this;
      const hitboxes = this.legendHitBoxes = [];
      const lineWidths = this.lineWidths = [
        0
      ];
      const lineHeight = itemHeight + padding;
      let totalHeight = titleHeight;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      let row = -1;
      let top = -lineHeight;
      this.legendItems.forEach((legendItem, i2) => {
        const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
        if (i2 === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
          totalHeight += lineHeight;
          lineWidths[lineWidths.length - (i2 > 0 ? 0 : 1)] = 0;
          top += lineHeight;
          row++;
        }
        hitboxes[i2] = {
          left: 0,
          top,
          row,
          width: itemWidth,
          height: itemHeight
        };
        lineWidths[lineWidths.length - 1] += itemWidth + padding;
      });
      return totalHeight;
    }
    _fitCols(titleHeight, labelFont, boxWidth, _itemHeight) {
      const { ctx, maxHeight, options: { labels: { padding } } } = this;
      const hitboxes = this.legendHitBoxes = [];
      const columnSizes = this.columnSizes = [];
      const heightLimit = maxHeight - titleHeight;
      let totalWidth = padding;
      let currentColWidth = 0;
      let currentColHeight = 0;
      let left = 0;
      let col = 0;
      this.legendItems.forEach((legendItem, i2) => {
        const { itemWidth, itemHeight } = calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight);
        if (i2 > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
          totalWidth += currentColWidth + padding;
          columnSizes.push({
            width: currentColWidth,
            height: currentColHeight
          });
          left += currentColWidth + padding;
          col++;
          currentColWidth = currentColHeight = 0;
        }
        hitboxes[i2] = {
          left,
          top: currentColHeight,
          col,
          width: itemWidth,
          height: itemHeight
        };
        currentColWidth = Math.max(currentColWidth, itemWidth);
        currentColHeight += itemHeight + padding;
      });
      totalWidth += currentColWidth;
      columnSizes.push({
        width: currentColWidth,
        height: currentColHeight
      });
      return totalWidth;
    }
    adjustHitBoxes() {
      if (!this.options.display) {
        return;
      }
      const titleHeight = this._computeTitleHeight();
      const { legendHitBoxes: hitboxes, options: { align, labels: { padding }, rtl } } = this;
      const rtlHelper = getRtlAdapter(rtl, this.left, this.width);
      if (this.isHorizontal()) {
        let row = 0;
        let left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
        for (const hitbox of hitboxes) {
          if (row !== hitbox.row) {
            row = hitbox.row;
            left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
          }
          hitbox.top += this.top + titleHeight + padding;
          hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
          left += hitbox.width + padding;
        }
      } else {
        let col = 0;
        let top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
        for (const hitbox of hitboxes) {
          if (hitbox.col !== col) {
            col = hitbox.col;
            top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
          }
          hitbox.top = top;
          hitbox.left += this.left + padding;
          hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
          top += hitbox.height + padding;
        }
      }
    }
    isHorizontal() {
      return this.options.position === "top" || this.options.position === "bottom";
    }
    draw() {
      if (this.options.display) {
        const ctx = this.ctx;
        clipArea(ctx, this);
        this._draw();
        unclipArea(ctx);
      }
    }
    _draw() {
      const { options: opts, columnSizes, lineWidths, ctx } = this;
      const { align, labels: labelOpts } = opts;
      const defaultColor = defaults.color;
      const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
      const labelFont = toFont(labelOpts.font);
      const { padding } = labelOpts;
      const fontSize = labelFont.size;
      const halfFontSize = fontSize / 2;
      let cursor;
      this.drawTitle();
      ctx.textAlign = rtlHelper.textAlign("left");
      ctx.textBaseline = "middle";
      ctx.lineWidth = 0.5;
      ctx.font = labelFont.string;
      const { boxWidth, boxHeight, itemHeight } = getBoxSize(labelOpts, fontSize);
      const drawLegendBox = function(x2, y2, legendItem) {
        if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
          return;
        }
        ctx.save();
        const lineWidth = valueOrDefault(legendItem.lineWidth, 1);
        ctx.fillStyle = valueOrDefault(legendItem.fillStyle, defaultColor);
        ctx.lineCap = valueOrDefault(legendItem.lineCap, "butt");
        ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, 0);
        ctx.lineJoin = valueOrDefault(legendItem.lineJoin, "miter");
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, defaultColor);
        ctx.setLineDash(valueOrDefault(legendItem.lineDash, []));
        if (labelOpts.usePointStyle) {
          const drawOptions = {
            radius: boxHeight * Math.SQRT2 / 2,
            pointStyle: legendItem.pointStyle,
            rotation: legendItem.rotation,
            borderWidth: lineWidth
          };
          const centerX = rtlHelper.xPlus(x2, boxWidth / 2);
          const centerY = y2 + halfFontSize;
          drawPointLegend(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
        } else {
          const yBoxTop = y2 + Math.max((fontSize - boxHeight) / 2, 0);
          const xBoxLeft = rtlHelper.leftForLtr(x2, boxWidth);
          const borderRadius = toTRBLCorners(legendItem.borderRadius);
          ctx.beginPath();
          if (Object.values(borderRadius).some((v2) => v2 !== 0)) {
            addRoundedRectPath(ctx, {
              x: xBoxLeft,
              y: yBoxTop,
              w: boxWidth,
              h: boxHeight,
              radius: borderRadius
            });
          } else {
            ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
          }
          ctx.fill();
          if (lineWidth !== 0) {
            ctx.stroke();
          }
        }
        ctx.restore();
      };
      const fillText = function(x2, y2, legendItem) {
        renderText(ctx, legendItem.text, x2, y2 + itemHeight / 2, labelFont, {
          strikethrough: legendItem.hidden,
          textAlign: rtlHelper.textAlign(legendItem.textAlign)
        });
      };
      const isHorizontal = this.isHorizontal();
      const titleHeight = this._computeTitleHeight();
      if (isHorizontal) {
        cursor = {
          x: _alignStartEnd(align, this.left + padding, this.right - lineWidths[0]),
          y: this.top + padding + titleHeight,
          line: 0
        };
      } else {
        cursor = {
          x: this.left + padding,
          y: _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
          line: 0
        };
      }
      overrideTextDirection(this.ctx, opts.textDirection);
      const lineHeight = itemHeight + padding;
      this.legendItems.forEach((legendItem, i2) => {
        ctx.strokeStyle = legendItem.fontColor;
        ctx.fillStyle = legendItem.fontColor;
        const textWidth = ctx.measureText(legendItem.text).width;
        const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
        const width = boxWidth + halfFontSize + textWidth;
        let x2 = cursor.x;
        let y2 = cursor.y;
        rtlHelper.setWidth(this.width);
        if (isHorizontal) {
          if (i2 > 0 && x2 + width + padding > this.right) {
            y2 = cursor.y += lineHeight;
            cursor.line++;
            x2 = cursor.x = _alignStartEnd(align, this.left + padding, this.right - lineWidths[cursor.line]);
          }
        } else if (i2 > 0 && y2 + lineHeight > this.bottom) {
          x2 = cursor.x = x2 + columnSizes[cursor.line].width + padding;
          cursor.line++;
          y2 = cursor.y = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
        }
        const realX = rtlHelper.x(x2);
        drawLegendBox(realX, y2, legendItem);
        x2 = _textX(textAlign, x2 + boxWidth + halfFontSize, isHorizontal ? x2 + width : this.right, opts.rtl);
        fillText(rtlHelper.x(x2), y2, legendItem);
        if (isHorizontal) {
          cursor.x += width + padding;
        } else if (typeof legendItem.text !== "string") {
          const fontLineHeight = labelFont.lineHeight;
          cursor.y += calculateLegendItemHeight(legendItem, fontLineHeight) + padding;
        } else {
          cursor.y += lineHeight;
        }
      });
      restoreTextDirection(this.ctx, opts.textDirection);
    }
    drawTitle() {
      const opts = this.options;
      const titleOpts = opts.title;
      const titleFont = toFont(titleOpts.font);
      const titlePadding = toPadding(titleOpts.padding);
      if (!titleOpts.display) {
        return;
      }
      const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
      const ctx = this.ctx;
      const position = titleOpts.position;
      const halfFontSize = titleFont.size / 2;
      const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
      let y2;
      let left = this.left;
      let maxWidth = this.width;
      if (this.isHorizontal()) {
        maxWidth = Math.max(...this.lineWidths);
        y2 = this.top + topPaddingPlusHalfFontSize;
        left = _alignStartEnd(opts.align, left, this.right - maxWidth);
      } else {
        const maxHeight = this.columnSizes.reduce((acc, size2) => Math.max(acc, size2.height), 0);
        y2 = topPaddingPlusHalfFontSize + _alignStartEnd(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
      }
      const x2 = _alignStartEnd(position, left, left + maxWidth);
      ctx.textAlign = rtlHelper.textAlign(_toLeftRightCenter(position));
      ctx.textBaseline = "middle";
      ctx.strokeStyle = titleOpts.color;
      ctx.fillStyle = titleOpts.color;
      ctx.font = titleFont.string;
      renderText(ctx, titleOpts.text, x2, y2, titleFont);
    }
    _computeTitleHeight() {
      const titleOpts = this.options.title;
      const titleFont = toFont(titleOpts.font);
      const titlePadding = toPadding(titleOpts.padding);
      return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
    }
    _getLegendItemAt(x2, y2) {
      let i2, hitBox, lh;
      if (_isBetween(x2, this.left, this.right) && _isBetween(y2, this.top, this.bottom)) {
        lh = this.legendHitBoxes;
        for (i2 = 0; i2 < lh.length; ++i2) {
          hitBox = lh[i2];
          if (_isBetween(x2, hitBox.left, hitBox.left + hitBox.width) && _isBetween(y2, hitBox.top, hitBox.top + hitBox.height)) {
            return this.legendItems[i2];
          }
        }
      }
      return null;
    }
    handleEvent(e2) {
      const opts = this.options;
      if (!isListened(e2.type, opts)) {
        return;
      }
      const hoveredItem = this._getLegendItemAt(e2.x, e2.y);
      if (e2.type === "mousemove" || e2.type === "mouseout") {
        const previous = this._hoveredItem;
        const sameItem = itemsEqual(previous, hoveredItem);
        if (previous && !sameItem) {
          callback(opts.onLeave, [
            e2,
            previous,
            this
          ], this);
        }
        this._hoveredItem = hoveredItem;
        if (hoveredItem && !sameItem) {
          callback(opts.onHover, [
            e2,
            hoveredItem,
            this
          ], this);
        }
      } else if (hoveredItem) {
        callback(opts.onClick, [
          e2,
          hoveredItem,
          this
        ], this);
      }
    }
  };
  function calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight) {
    const itemWidth = calculateItemWidth(legendItem, boxWidth, labelFont, ctx);
    const itemHeight = calculateItemHeight(_itemHeight, legendItem, labelFont.lineHeight);
    return {
      itemWidth,
      itemHeight
    };
  }
  function calculateItemWidth(legendItem, boxWidth, labelFont, ctx) {
    let legendItemText = legendItem.text;
    if (legendItemText && typeof legendItemText !== "string") {
      legendItemText = legendItemText.reduce((a2, b2) => a2.length > b2.length ? a2 : b2);
    }
    return boxWidth + labelFont.size / 2 + ctx.measureText(legendItemText).width;
  }
  function calculateItemHeight(_itemHeight, legendItem, fontLineHeight) {
    let itemHeight = _itemHeight;
    if (typeof legendItem.text !== "string") {
      itemHeight = calculateLegendItemHeight(legendItem, fontLineHeight);
    }
    return itemHeight;
  }
  function calculateLegendItemHeight(legendItem, fontLineHeight) {
    const labelHeight = legendItem.text ? legendItem.text.length : 0;
    return fontLineHeight * labelHeight;
  }
  function isListened(type, opts) {
    if ((type === "mousemove" || type === "mouseout") && (opts.onHover || opts.onLeave)) {
      return true;
    }
    if (opts.onClick && (type === "click" || type === "mouseup")) {
      return true;
    }
    return false;
  }
  var plugin_legend = {
    id: "legend",
    _element: Legend,
    start(chart, _args, options) {
      const legend = chart.legend = new Legend({
        ctx: chart.ctx,
        options,
        chart
      });
      layouts.configure(chart, legend, options);
      layouts.addBox(chart, legend);
    },
    stop(chart) {
      layouts.removeBox(chart, chart.legend);
      delete chart.legend;
    },
    beforeUpdate(chart, _args, options) {
      const legend = chart.legend;
      layouts.configure(chart, legend, options);
      legend.options = options;
    },
    afterUpdate(chart) {
      const legend = chart.legend;
      legend.buildLabels();
      legend.adjustHitBoxes();
    },
    afterEvent(chart, args) {
      if (!args.replay) {
        chart.legend.handleEvent(args.event);
      }
    },
    defaults: {
      display: true,
      position: "top",
      align: "center",
      fullSize: true,
      reverse: false,
      weight: 1e3,
      onClick(e2, legendItem, legend) {
        const index2 = legendItem.datasetIndex;
        const ci2 = legend.chart;
        if (ci2.isDatasetVisible(index2)) {
          ci2.hide(index2);
          legendItem.hidden = true;
        } else {
          ci2.show(index2);
          legendItem.hidden = false;
        }
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: (ctx) => ctx.chart.options.color,
        boxWidth: 40,
        padding: 10,
        generateLabels(chart) {
          const datasets = chart.data.datasets;
          const { labels: { usePointStyle, pointStyle, textAlign, color: color2, useBorderRadius, borderRadius } } = chart.legend.options;
          return chart._getSortedDatasetMetas().map((meta) => {
            const style = meta.controller.getStyle(usePointStyle ? 0 : void 0);
            const borderWidth = toPadding(style.borderWidth);
            return {
              text: datasets[meta.index].label,
              fillStyle: style.backgroundColor,
              fontColor: color2,
              hidden: !meta.visible,
              lineCap: style.borderCapStyle,
              lineDash: style.borderDash,
              lineDashOffset: style.borderDashOffset,
              lineJoin: style.borderJoinStyle,
              lineWidth: (borderWidth.width + borderWidth.height) / 4,
              strokeStyle: style.borderColor,
              pointStyle: pointStyle || style.pointStyle,
              rotation: style.rotation,
              textAlign: textAlign || style.textAlign,
              borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
              datasetIndex: meta.index
            };
          }, this);
        }
      },
      title: {
        color: (ctx) => ctx.chart.options.color,
        display: false,
        position: "center",
        text: ""
      }
    },
    descriptors: {
      _scriptable: (name) => !name.startsWith("on"),
      labels: {
        _scriptable: (name) => ![
          "generateLabels",
          "filter",
          "sort"
        ].includes(name)
      }
    }
  };
  var Title = class extends Element2 {
    constructor(config) {
      super();
      this.chart = config.chart;
      this.options = config.options;
      this.ctx = config.ctx;
      this._padding = void 0;
      this.top = void 0;
      this.bottom = void 0;
      this.left = void 0;
      this.right = void 0;
      this.width = void 0;
      this.height = void 0;
      this.position = void 0;
      this.weight = void 0;
      this.fullSize = void 0;
    }
    update(maxWidth, maxHeight) {
      const opts = this.options;
      this.left = 0;
      this.top = 0;
      if (!opts.display) {
        this.width = this.height = this.right = this.bottom = 0;
        return;
      }
      this.width = this.right = maxWidth;
      this.height = this.bottom = maxHeight;
      const lineCount = isArray2(opts.text) ? opts.text.length : 1;
      this._padding = toPadding(opts.padding);
      const textSize = lineCount * toFont(opts.font).lineHeight + this._padding.height;
      if (this.isHorizontal()) {
        this.height = textSize;
      } else {
        this.width = textSize;
      }
    }
    isHorizontal() {
      const pos = this.options.position;
      return pos === "top" || pos === "bottom";
    }
    _drawArgs(offset) {
      const { top, left, bottom, right, options } = this;
      const align = options.align;
      let rotation = 0;
      let maxWidth, titleX, titleY;
      if (this.isHorizontal()) {
        titleX = _alignStartEnd(align, left, right);
        titleY = top + offset;
        maxWidth = right - left;
      } else {
        if (options.position === "left") {
          titleX = left + offset;
          titleY = _alignStartEnd(align, bottom, top);
          rotation = PI * -0.5;
        } else {
          titleX = right - offset;
          titleY = _alignStartEnd(align, top, bottom);
          rotation = PI * 0.5;
        }
        maxWidth = bottom - top;
      }
      return {
        titleX,
        titleY,
        maxWidth,
        rotation
      };
    }
    draw() {
      const ctx = this.ctx;
      const opts = this.options;
      if (!opts.display) {
        return;
      }
      const fontOpts = toFont(opts.font);
      const lineHeight = fontOpts.lineHeight;
      const offset = lineHeight / 2 + this._padding.top;
      const { titleX, titleY, maxWidth, rotation } = this._drawArgs(offset);
      renderText(ctx, opts.text, 0, 0, fontOpts, {
        color: opts.color,
        maxWidth,
        rotation,
        textAlign: _toLeftRightCenter(opts.align),
        textBaseline: "middle",
        translation: [
          titleX,
          titleY
        ]
      });
    }
  };
  function createTitle(chart, titleOpts) {
    const title = new Title({
      ctx: chart.ctx,
      options: titleOpts,
      chart
    });
    layouts.configure(chart, title, titleOpts);
    layouts.addBox(chart, title);
    chart.titleBlock = title;
  }
  var plugin_title = {
    id: "title",
    _element: Title,
    start(chart, _args, options) {
      createTitle(chart, options);
    },
    stop(chart) {
      const titleBlock = chart.titleBlock;
      layouts.removeBox(chart, titleBlock);
      delete chart.titleBlock;
    },
    beforeUpdate(chart, _args, options) {
      const title = chart.titleBlock;
      layouts.configure(chart, title, options);
      title.options = options;
    },
    defaults: {
      align: "center",
      display: false,
      font: {
        weight: "bold"
      },
      fullSize: true,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: true,
      _indexable: false
    }
  };
  var map2 = /* @__PURE__ */ new WeakMap();
  var plugin_subtitle = {
    id: "subtitle",
    start(chart, _args, options) {
      const title = new Title({
        ctx: chart.ctx,
        options,
        chart
      });
      layouts.configure(chart, title, options);
      layouts.addBox(chart, title);
      map2.set(chart, title);
    },
    stop(chart) {
      layouts.removeBox(chart, map2.get(chart));
      map2.delete(chart);
    },
    beforeUpdate(chart, _args, options) {
      const title = map2.get(chart);
      layouts.configure(chart, title, options);
      title.options = options;
    },
    defaults: {
      align: "center",
      display: false,
      font: {
        weight: "normal"
      },
      fullSize: true,
      padding: 0,
      position: "top",
      text: "",
      weight: 1500
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: true,
      _indexable: false
    }
  };
  var positioners = {
    average(items) {
      if (!items.length) {
        return false;
      }
      let i2, len;
      let xSet = /* @__PURE__ */ new Set();
      let y2 = 0;
      let count = 0;
      for (i2 = 0, len = items.length; i2 < len; ++i2) {
        const el = items[i2].element;
        if (el && el.hasValue()) {
          const pos = el.tooltipPosition();
          xSet.add(pos.x);
          y2 += pos.y;
          ++count;
        }
      }
      if (count === 0 || xSet.size === 0) {
        return false;
      }
      const xAverage = [
        ...xSet
      ].reduce((a2, b2) => a2 + b2) / xSet.size;
      return {
        x: xAverage,
        y: y2 / count
      };
    },
    nearest(items, eventPosition) {
      if (!items.length) {
        return false;
      }
      let x2 = eventPosition.x;
      let y2 = eventPosition.y;
      let minDistance = Number.POSITIVE_INFINITY;
      let i2, len, nearestElement;
      for (i2 = 0, len = items.length; i2 < len; ++i2) {
        const el = items[i2].element;
        if (el && el.hasValue()) {
          const center = el.getCenterPoint();
          const d2 = distanceBetweenPoints(eventPosition, center);
          if (d2 < minDistance) {
            minDistance = d2;
            nearestElement = el;
          }
        }
      }
      if (nearestElement) {
        const tp = nearestElement.tooltipPosition();
        x2 = tp.x;
        y2 = tp.y;
      }
      return {
        x: x2,
        y: y2
      };
    }
  };
  function pushOrConcat(base, toPush) {
    if (toPush) {
      if (isArray2(toPush)) {
        Array.prototype.push.apply(base, toPush);
      } else {
        base.push(toPush);
      }
    }
    return base;
  }
  function splitNewlines(str) {
    if ((typeof str === "string" || str instanceof String) && str.indexOf("\n") > -1) {
      return str.split("\n");
    }
    return str;
  }
  function createTooltipItem(chart, item) {
    const { element, datasetIndex, index: index2 } = item;
    const controller = chart.getDatasetMeta(datasetIndex).controller;
    const { label, value } = controller.getLabelAndValue(index2);
    return {
      chart,
      label,
      parsed: controller.getParsed(index2),
      raw: chart.data.datasets[datasetIndex].data[index2],
      formattedValue: value,
      dataset: controller.getDataset(),
      dataIndex: index2,
      datasetIndex,
      element
    };
  }
  function getTooltipSize(tooltip, options) {
    const ctx = tooltip.chart.ctx;
    const { body, footer, title } = tooltip;
    const { boxWidth, boxHeight } = options;
    const bodyFont = toFont(options.bodyFont);
    const titleFont = toFont(options.titleFont);
    const footerFont = toFont(options.footerFont);
    const titleLineCount = title.length;
    const footerLineCount = footer.length;
    const bodyLineItemCount = body.length;
    const padding = toPadding(options.padding);
    let height = padding.height;
    let width = 0;
    let combinedBodyLength = body.reduce((count, bodyItem) => count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
    combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
    if (titleLineCount) {
      height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
    }
    if (combinedBodyLength) {
      const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
      height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
    }
    if (footerLineCount) {
      height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
    }
    let widthPadding = 0;
    const maxLineWidth = function(line) {
      width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };
    ctx.save();
    ctx.font = titleFont.string;
    each(tooltip.title, maxLineWidth);
    ctx.font = bodyFont.string;
    each(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
    widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
    each(body, (bodyItem) => {
      each(bodyItem.before, maxLineWidth);
      each(bodyItem.lines, maxLineWidth);
      each(bodyItem.after, maxLineWidth);
    });
    widthPadding = 0;
    ctx.font = footerFont.string;
    each(tooltip.footer, maxLineWidth);
    ctx.restore();
    width += padding.width;
    return {
      width,
      height
    };
  }
  function determineYAlign(chart, size2) {
    const { y: y2, height } = size2;
    if (y2 < height / 2) {
      return "top";
    } else if (y2 > chart.height - height / 2) {
      return "bottom";
    }
    return "center";
  }
  function doesNotFitWithAlign(xAlign, chart, options, size2) {
    const { x: x2, width } = size2;
    const caret = options.caretSize + options.caretPadding;
    if (xAlign === "left" && x2 + width + caret > chart.width) {
      return true;
    }
    if (xAlign === "right" && x2 - width - caret < 0) {
      return true;
    }
  }
  function determineXAlign(chart, options, size2, yAlign) {
    const { x: x2, width } = size2;
    const { width: chartWidth, chartArea: { left, right } } = chart;
    let xAlign = "center";
    if (yAlign === "center") {
      xAlign = x2 <= (left + right) / 2 ? "left" : "right";
    } else if (x2 <= width / 2) {
      xAlign = "left";
    } else if (x2 >= chartWidth - width / 2) {
      xAlign = "right";
    }
    if (doesNotFitWithAlign(xAlign, chart, options, size2)) {
      xAlign = "center";
    }
    return xAlign;
  }
  function determineAlignment(chart, options, size2) {
    const yAlign = size2.yAlign || options.yAlign || determineYAlign(chart, size2);
    return {
      xAlign: size2.xAlign || options.xAlign || determineXAlign(chart, options, size2, yAlign),
      yAlign
    };
  }
  function alignX(size2, xAlign) {
    let { x: x2, width } = size2;
    if (xAlign === "right") {
      x2 -= width;
    } else if (xAlign === "center") {
      x2 -= width / 2;
    }
    return x2;
  }
  function alignY(size2, yAlign, paddingAndSize) {
    let { y: y2, height } = size2;
    if (yAlign === "top") {
      y2 += paddingAndSize;
    } else if (yAlign === "bottom") {
      y2 -= height + paddingAndSize;
    } else {
      y2 -= height / 2;
    }
    return y2;
  }
  function getBackgroundPoint(options, size2, alignment, chart) {
    const { caretSize, caretPadding, cornerRadius } = options;
    const { xAlign, yAlign } = alignment;
    const paddingAndSize = caretSize + caretPadding;
    const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(cornerRadius);
    let x2 = alignX(size2, xAlign);
    const y2 = alignY(size2, yAlign, paddingAndSize);
    if (yAlign === "center") {
      if (xAlign === "left") {
        x2 += paddingAndSize;
      } else if (xAlign === "right") {
        x2 -= paddingAndSize;
      }
    } else if (xAlign === "left") {
      x2 -= Math.max(topLeft, bottomLeft) + caretSize;
    } else if (xAlign === "right") {
      x2 += Math.max(topRight, bottomRight) + caretSize;
    }
    return {
      x: _limitValue(x2, 0, chart.width - size2.width),
      y: _limitValue(y2, 0, chart.height - size2.height)
    };
  }
  function getAlignedX(tooltip, align, options) {
    const padding = toPadding(options.padding);
    return align === "center" ? tooltip.x + tooltip.width / 2 : align === "right" ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
  }
  function getBeforeAfterBodyLines(callback2) {
    return pushOrConcat([], splitNewlines(callback2));
  }
  function createTooltipContext(parent, tooltip, tooltipItems) {
    return createContext(parent, {
      tooltip,
      tooltipItems,
      type: "tooltip"
    });
  }
  function overrideCallbacks(callbacks, context) {
    const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
    return override ? callbacks.override(override) : callbacks;
  }
  var defaultCallbacks = {
    beforeTitle: noop,
    title(tooltipItems) {
      if (tooltipItems.length > 0) {
        const item = tooltipItems[0];
        const labels = item.chart.data.labels;
        const labelCount = labels ? labels.length : 0;
        if (this && this.options && this.options.mode === "dataset") {
          return item.dataset.label || "";
        } else if (item.label) {
          return item.label;
        } else if (labelCount > 0 && item.dataIndex < labelCount) {
          return labels[item.dataIndex];
        }
      }
      return "";
    },
    afterTitle: noop,
    beforeBody: noop,
    beforeLabel: noop,
    label(tooltipItem) {
      if (this && this.options && this.options.mode === "dataset") {
        return tooltipItem.label + ": " + tooltipItem.formattedValue || tooltipItem.formattedValue;
      }
      let label = tooltipItem.dataset.label || "";
      if (label) {
        label += ": ";
      }
      const value = tooltipItem.formattedValue;
      if (!isNullOrUndef(value)) {
        label += value;
      }
      return label;
    },
    labelColor(tooltipItem) {
      const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
      const options = meta.controller.getStyle(tooltipItem.dataIndex);
      return {
        borderColor: options.borderColor,
        backgroundColor: options.backgroundColor,
        borderWidth: options.borderWidth,
        borderDash: options.borderDash,
        borderDashOffset: options.borderDashOffset,
        borderRadius: 0
      };
    },
    labelTextColor() {
      return this.options.bodyColor;
    },
    labelPointStyle(tooltipItem) {
      const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
      const options = meta.controller.getStyle(tooltipItem.dataIndex);
      return {
        pointStyle: options.pointStyle,
        rotation: options.rotation
      };
    },
    afterLabel: noop,
    afterBody: noop,
    beforeFooter: noop,
    footer: noop,
    afterFooter: noop
  };
  function invokeCallbackWithFallback(callbacks, name, ctx, arg) {
    const result = callbacks[name].call(ctx, arg);
    if (typeof result === "undefined") {
      return defaultCallbacks[name].call(ctx, arg);
    }
    return result;
  }
  var Tooltip = class extends Element2 {
    static positioners = positioners;
    constructor(config) {
      super();
      this.opacity = 0;
      this._active = [];
      this._eventPosition = void 0;
      this._size = void 0;
      this._cachedAnimations = void 0;
      this._tooltipItems = [];
      this.$animations = void 0;
      this.$context = void 0;
      this.chart = config.chart;
      this.options = config.options;
      this.dataPoints = void 0;
      this.title = void 0;
      this.beforeBody = void 0;
      this.body = void 0;
      this.afterBody = void 0;
      this.footer = void 0;
      this.xAlign = void 0;
      this.yAlign = void 0;
      this.x = void 0;
      this.y = void 0;
      this.height = void 0;
      this.width = void 0;
      this.caretX = void 0;
      this.caretY = void 0;
      this.labelColors = void 0;
      this.labelPointStyles = void 0;
      this.labelTextColors = void 0;
    }
    initialize(options) {
      this.options = options;
      this._cachedAnimations = void 0;
      this.$context = void 0;
    }
    _resolveAnimations() {
      const cached = this._cachedAnimations;
      if (cached) {
        return cached;
      }
      const chart = this.chart;
      const options = this.options.setContext(this.getContext());
      const opts = options.enabled && chart.options.animation && options.animations;
      const animations = new Animations(this.chart, opts);
      if (opts._cacheable) {
        this._cachedAnimations = Object.freeze(animations);
      }
      return animations;
    }
    getContext() {
      return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(context, options) {
      const { callbacks } = options;
      const beforeTitle = invokeCallbackWithFallback(callbacks, "beforeTitle", this, context);
      const title = invokeCallbackWithFallback(callbacks, "title", this, context);
      const afterTitle = invokeCallbackWithFallback(callbacks, "afterTitle", this, context);
      let lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeTitle));
      lines = pushOrConcat(lines, splitNewlines(title));
      lines = pushOrConcat(lines, splitNewlines(afterTitle));
      return lines;
    }
    getBeforeBody(tooltipItems, options) {
      return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, "beforeBody", this, tooltipItems));
    }
    getBody(tooltipItems, options) {
      const { callbacks } = options;
      const bodyItems = [];
      each(tooltipItems, (context) => {
        const bodyItem = {
          before: [],
          lines: [],
          after: []
        };
        const scoped = overrideCallbacks(callbacks, context);
        pushOrConcat(bodyItem.before, splitNewlines(invokeCallbackWithFallback(scoped, "beforeLabel", this, context)));
        pushOrConcat(bodyItem.lines, invokeCallbackWithFallback(scoped, "label", this, context));
        pushOrConcat(bodyItem.after, splitNewlines(invokeCallbackWithFallback(scoped, "afterLabel", this, context)));
        bodyItems.push(bodyItem);
      });
      return bodyItems;
    }
    getAfterBody(tooltipItems, options) {
      return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, "afterBody", this, tooltipItems));
    }
    getFooter(tooltipItems, options) {
      const { callbacks } = options;
      const beforeFooter = invokeCallbackWithFallback(callbacks, "beforeFooter", this, tooltipItems);
      const footer = invokeCallbackWithFallback(callbacks, "footer", this, tooltipItems);
      const afterFooter = invokeCallbackWithFallback(callbacks, "afterFooter", this, tooltipItems);
      let lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeFooter));
      lines = pushOrConcat(lines, splitNewlines(footer));
      lines = pushOrConcat(lines, splitNewlines(afterFooter));
      return lines;
    }
    _createItems(options) {
      const active = this._active;
      const data2 = this.chart.data;
      const labelColors = [];
      const labelPointStyles = [];
      const labelTextColors = [];
      let tooltipItems = [];
      let i2, len;
      for (i2 = 0, len = active.length; i2 < len; ++i2) {
        tooltipItems.push(createTooltipItem(this.chart, active[i2]));
      }
      if (options.filter) {
        tooltipItems = tooltipItems.filter((element, index2, array) => options.filter(element, index2, array, data2));
      }
      if (options.itemSort) {
        tooltipItems = tooltipItems.sort((a2, b2) => options.itemSort(a2, b2, data2));
      }
      each(tooltipItems, (context) => {
        const scoped = overrideCallbacks(options.callbacks, context);
        labelColors.push(invokeCallbackWithFallback(scoped, "labelColor", this, context));
        labelPointStyles.push(invokeCallbackWithFallback(scoped, "labelPointStyle", this, context));
        labelTextColors.push(invokeCallbackWithFallback(scoped, "labelTextColor", this, context));
      });
      this.labelColors = labelColors;
      this.labelPointStyles = labelPointStyles;
      this.labelTextColors = labelTextColors;
      this.dataPoints = tooltipItems;
      return tooltipItems;
    }
    update(changed, replay) {
      const options = this.options.setContext(this.getContext());
      const active = this._active;
      let properties;
      let tooltipItems = [];
      if (!active.length) {
        if (this.opacity !== 0) {
          properties = {
            opacity: 0
          };
        }
      } else {
        const position = positioners[options.position].call(this, active, this._eventPosition);
        tooltipItems = this._createItems(options);
        this.title = this.getTitle(tooltipItems, options);
        this.beforeBody = this.getBeforeBody(tooltipItems, options);
        this.body = this.getBody(tooltipItems, options);
        this.afterBody = this.getAfterBody(tooltipItems, options);
        this.footer = this.getFooter(tooltipItems, options);
        const size2 = this._size = getTooltipSize(this, options);
        const positionAndSize = Object.assign({}, position, size2);
        const alignment = determineAlignment(this.chart, options, positionAndSize);
        const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
        this.xAlign = alignment.xAlign;
        this.yAlign = alignment.yAlign;
        properties = {
          opacity: 1,
          x: backgroundPoint.x,
          y: backgroundPoint.y,
          width: size2.width,
          height: size2.height,
          caretX: position.x,
          caretY: position.y
        };
      }
      this._tooltipItems = tooltipItems;
      this.$context = void 0;
      if (properties) {
        this._resolveAnimations().update(this, properties);
      }
      if (changed && options.external) {
        options.external.call(this, {
          chart: this.chart,
          tooltip: this,
          replay
        });
      }
    }
    drawCaret(tooltipPoint, ctx, size2, options) {
      const caretPosition = this.getCaretPosition(tooltipPoint, size2, options);
      ctx.lineTo(caretPosition.x1, caretPosition.y1);
      ctx.lineTo(caretPosition.x2, caretPosition.y2);
      ctx.lineTo(caretPosition.x3, caretPosition.y3);
    }
    getCaretPosition(tooltipPoint, size2, options) {
      const { xAlign, yAlign } = this;
      const { caretSize, cornerRadius } = options;
      const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(cornerRadius);
      const { x: ptX, y: ptY } = tooltipPoint;
      const { width, height } = size2;
      let x1, x2, x3, y1, y2, y3;
      if (yAlign === "center") {
        y2 = ptY + height / 2;
        if (xAlign === "left") {
          x1 = ptX;
          x2 = x1 - caretSize;
          y1 = y2 + caretSize;
          y3 = y2 - caretSize;
        } else {
          x1 = ptX + width;
          x2 = x1 + caretSize;
          y1 = y2 - caretSize;
          y3 = y2 + caretSize;
        }
        x3 = x1;
      } else {
        if (xAlign === "left") {
          x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
        } else if (xAlign === "right") {
          x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
        } else {
          x2 = this.caretX;
        }
        if (yAlign === "top") {
          y1 = ptY;
          y2 = y1 - caretSize;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else {
          y1 = ptY + height;
          y2 = y1 + caretSize;
          x1 = x2 + caretSize;
          x3 = x2 - caretSize;
        }
        y3 = y1;
      }
      return {
        x1,
        x2,
        x3,
        y1,
        y2,
        y3
      };
    }
    drawTitle(pt2, ctx, options) {
      const title = this.title;
      const length = title.length;
      let titleFont, titleSpacing, i2;
      if (length) {
        const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
        pt2.x = getAlignedX(this, options.titleAlign, options);
        ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
        ctx.textBaseline = "middle";
        titleFont = toFont(options.titleFont);
        titleSpacing = options.titleSpacing;
        ctx.fillStyle = options.titleColor;
        ctx.font = titleFont.string;
        for (i2 = 0; i2 < length; ++i2) {
          ctx.fillText(title[i2], rtlHelper.x(pt2.x), pt2.y + titleFont.lineHeight / 2);
          pt2.y += titleFont.lineHeight + titleSpacing;
          if (i2 + 1 === length) {
            pt2.y += options.titleMarginBottom - titleSpacing;
          }
        }
      }
    }
    _drawColorBox(ctx, pt2, i2, rtlHelper, options) {
      const labelColor = this.labelColors[i2];
      const labelPointStyle = this.labelPointStyles[i2];
      const { boxHeight, boxWidth } = options;
      const bodyFont = toFont(options.bodyFont);
      const colorX = getAlignedX(this, "left", options);
      const rtlColorX = rtlHelper.x(colorX);
      const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
      const colorY = pt2.y + yOffSet;
      if (options.usePointStyle) {
        const drawOptions = {
          radius: Math.min(boxWidth, boxHeight) / 2,
          pointStyle: labelPointStyle.pointStyle,
          rotation: labelPointStyle.rotation,
          borderWidth: 1
        };
        const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
        const centerY = colorY + boxHeight / 2;
        ctx.strokeStyle = options.multiKeyBackground;
        ctx.fillStyle = options.multiKeyBackground;
        drawPoint(ctx, drawOptions, centerX, centerY);
        ctx.strokeStyle = labelColor.borderColor;
        ctx.fillStyle = labelColor.backgroundColor;
        drawPoint(ctx, drawOptions, centerX, centerY);
      } else {
        ctx.lineWidth = isObject2(labelColor.borderWidth) ? Math.max(...Object.values(labelColor.borderWidth)) : labelColor.borderWidth || 1;
        ctx.strokeStyle = labelColor.borderColor;
        ctx.setLineDash(labelColor.borderDash || []);
        ctx.lineDashOffset = labelColor.borderDashOffset || 0;
        const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth);
        const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - 2);
        const borderRadius = toTRBLCorners(labelColor.borderRadius);
        if (Object.values(borderRadius).some((v2) => v2 !== 0)) {
          ctx.beginPath();
          ctx.fillStyle = options.multiKeyBackground;
          addRoundedRectPath(ctx, {
            x: outerX,
            y: colorY,
            w: boxWidth,
            h: boxHeight,
            radius: borderRadius
          });
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = labelColor.backgroundColor;
          ctx.beginPath();
          addRoundedRectPath(ctx, {
            x: innerX,
            y: colorY + 1,
            w: boxWidth - 2,
            h: boxHeight - 2,
            radius: borderRadius
          });
          ctx.fill();
        } else {
          ctx.fillStyle = options.multiKeyBackground;
          ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
          ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
          ctx.fillStyle = labelColor.backgroundColor;
          ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
        }
      }
      ctx.fillStyle = this.labelTextColors[i2];
    }
    drawBody(pt2, ctx, options) {
      const { body } = this;
      const { bodySpacing, bodyAlign, displayColors, boxHeight, boxWidth, boxPadding } = options;
      const bodyFont = toFont(options.bodyFont);
      let bodyLineHeight = bodyFont.lineHeight;
      let xLinePadding = 0;
      const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
      const fillLineOfText = function(line) {
        ctx.fillText(line, rtlHelper.x(pt2.x + xLinePadding), pt2.y + bodyLineHeight / 2);
        pt2.y += bodyLineHeight + bodySpacing;
      };
      const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
      let bodyItem, textColor, lines, i2, j2, ilen, jlen;
      ctx.textAlign = bodyAlign;
      ctx.textBaseline = "middle";
      ctx.font = bodyFont.string;
      pt2.x = getAlignedX(this, bodyAlignForCalculation, options);
      ctx.fillStyle = options.bodyColor;
      each(this.beforeBody, fillLineOfText);
      xLinePadding = displayColors && bodyAlignForCalculation !== "right" ? bodyAlign === "center" ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
      for (i2 = 0, ilen = body.length; i2 < ilen; ++i2) {
        bodyItem = body[i2];
        textColor = this.labelTextColors[i2];
        ctx.fillStyle = textColor;
        each(bodyItem.before, fillLineOfText);
        lines = bodyItem.lines;
        if (displayColors && lines.length) {
          this._drawColorBox(ctx, pt2, i2, rtlHelper, options);
          bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
        }
        for (j2 = 0, jlen = lines.length; j2 < jlen; ++j2) {
          fillLineOfText(lines[j2]);
          bodyLineHeight = bodyFont.lineHeight;
        }
        each(bodyItem.after, fillLineOfText);
      }
      xLinePadding = 0;
      bodyLineHeight = bodyFont.lineHeight;
      each(this.afterBody, fillLineOfText);
      pt2.y -= bodySpacing;
    }
    drawFooter(pt2, ctx, options) {
      const footer = this.footer;
      const length = footer.length;
      let footerFont, i2;
      if (length) {
        const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
        pt2.x = getAlignedX(this, options.footerAlign, options);
        pt2.y += options.footerMarginTop;
        ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
        ctx.textBaseline = "middle";
        footerFont = toFont(options.footerFont);
        ctx.fillStyle = options.footerColor;
        ctx.font = footerFont.string;
        for (i2 = 0; i2 < length; ++i2) {
          ctx.fillText(footer[i2], rtlHelper.x(pt2.x), pt2.y + footerFont.lineHeight / 2);
          pt2.y += footerFont.lineHeight + options.footerSpacing;
        }
      }
    }
    drawBackground(pt2, ctx, tooltipSize, options) {
      const { xAlign, yAlign } = this;
      const { x: x2, y: y2 } = pt2;
      const { width, height } = tooltipSize;
      const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(options.cornerRadius);
      ctx.fillStyle = options.backgroundColor;
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.beginPath();
      ctx.moveTo(x2 + topLeft, y2);
      if (yAlign === "top") {
        this.drawCaret(pt2, ctx, tooltipSize, options);
      }
      ctx.lineTo(x2 + width - topRight, y2);
      ctx.quadraticCurveTo(x2 + width, y2, x2 + width, y2 + topRight);
      if (yAlign === "center" && xAlign === "right") {
        this.drawCaret(pt2, ctx, tooltipSize, options);
      }
      ctx.lineTo(x2 + width, y2 + height - bottomRight);
      ctx.quadraticCurveTo(x2 + width, y2 + height, x2 + width - bottomRight, y2 + height);
      if (yAlign === "bottom") {
        this.drawCaret(pt2, ctx, tooltipSize, options);
      }
      ctx.lineTo(x2 + bottomLeft, y2 + height);
      ctx.quadraticCurveTo(x2, y2 + height, x2, y2 + height - bottomLeft);
      if (yAlign === "center" && xAlign === "left") {
        this.drawCaret(pt2, ctx, tooltipSize, options);
      }
      ctx.lineTo(x2, y2 + topLeft);
      ctx.quadraticCurveTo(x2, y2, x2 + topLeft, y2);
      ctx.closePath();
      ctx.fill();
      if (options.borderWidth > 0) {
        ctx.stroke();
      }
    }
    _updateAnimationTarget(options) {
      const chart = this.chart;
      const anims = this.$animations;
      const animX = anims && anims.x;
      const animY = anims && anims.y;
      if (animX || animY) {
        const position = positioners[options.position].call(this, this._active, this._eventPosition);
        if (!position) {
          return;
        }
        const size2 = this._size = getTooltipSize(this, options);
        const positionAndSize = Object.assign({}, position, this._size);
        const alignment = determineAlignment(chart, options, positionAndSize);
        const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
        if (animX._to !== point.x || animY._to !== point.y) {
          this.xAlign = alignment.xAlign;
          this.yAlign = alignment.yAlign;
          this.width = size2.width;
          this.height = size2.height;
          this.caretX = position.x;
          this.caretY = position.y;
          this._resolveAnimations().update(this, point);
        }
      }
    }
    _willRender() {
      return !!this.opacity;
    }
    draw(ctx) {
      const options = this.options.setContext(this.getContext());
      let opacity = this.opacity;
      if (!opacity) {
        return;
      }
      this._updateAnimationTarget(options);
      const tooltipSize = {
        width: this.width,
        height: this.height
      };
      const pt2 = {
        x: this.x,
        y: this.y
      };
      opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
      const padding = toPadding(options.padding);
      const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
      if (options.enabled && hasTooltipContent) {
        ctx.save();
        ctx.globalAlpha = opacity;
        this.drawBackground(pt2, ctx, tooltipSize, options);
        overrideTextDirection(ctx, options.textDirection);
        pt2.y += padding.top;
        this.drawTitle(pt2, ctx, options);
        this.drawBody(pt2, ctx, options);
        this.drawFooter(pt2, ctx, options);
        restoreTextDirection(ctx, options.textDirection);
        ctx.restore();
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(activeElements, eventPosition) {
      const lastActive = this._active;
      const active = activeElements.map(({ datasetIndex, index: index2 }) => {
        const meta = this.chart.getDatasetMeta(datasetIndex);
        if (!meta) {
          throw new Error("Cannot find a dataset at index " + datasetIndex);
        }
        return {
          datasetIndex,
          element: meta.data[index2],
          index: index2
        };
      });
      const changed = !_elementsEqual(lastActive, active);
      const positionChanged = this._positionChanged(active, eventPosition);
      if (changed || positionChanged) {
        this._active = active;
        this._eventPosition = eventPosition;
        this._ignoreReplayEvents = true;
        this.update(true);
      }
    }
    handleEvent(e2, replay, inChartArea = true) {
      if (replay && this._ignoreReplayEvents) {
        return false;
      }
      this._ignoreReplayEvents = false;
      const options = this.options;
      const lastActive = this._active || [];
      const active = this._getActiveElements(e2, lastActive, replay, inChartArea);
      const positionChanged = this._positionChanged(active, e2);
      const changed = replay || !_elementsEqual(active, lastActive) || positionChanged;
      if (changed) {
        this._active = active;
        if (options.enabled || options.external) {
          this._eventPosition = {
            x: e2.x,
            y: e2.y
          };
          this.update(true, replay);
        }
      }
      return changed;
    }
    _getActiveElements(e2, lastActive, replay, inChartArea) {
      const options = this.options;
      if (e2.type === "mouseout") {
        return [];
      }
      if (!inChartArea) {
        return lastActive.filter((i2) => this.chart.data.datasets[i2.datasetIndex] && this.chart.getDatasetMeta(i2.datasetIndex).controller.getParsed(i2.index) !== void 0);
      }
      const active = this.chart.getElementsAtEventForMode(e2, options.mode, options, replay);
      if (options.reverse) {
        active.reverse();
      }
      return active;
    }
    _positionChanged(active, e2) {
      const { caretX, caretY, options } = this;
      const position = positioners[options.position].call(this, active, e2);
      return position !== false && (caretX !== position.x || caretY !== position.y);
    }
  };
  var plugin_tooltip = {
    id: "tooltip",
    _element: Tooltip,
    positioners,
    afterInit(chart, _args, options) {
      if (options) {
        chart.tooltip = new Tooltip({
          chart,
          options
        });
      }
    },
    beforeUpdate(chart, _args, options) {
      if (chart.tooltip) {
        chart.tooltip.initialize(options);
      }
    },
    reset(chart, _args, options) {
      if (chart.tooltip) {
        chart.tooltip.initialize(options);
      }
    },
    afterDraw(chart) {
      const tooltip = chart.tooltip;
      if (tooltip && tooltip._willRender()) {
        const args = {
          tooltip
        };
        if (chart.notifyPlugins("beforeTooltipDraw", {
          ...args,
          cancelable: true
        }) === false) {
          return;
        }
        tooltip.draw(chart.ctx);
        chart.notifyPlugins("afterTooltipDraw", args);
      }
    },
    afterEvent(chart, args) {
      if (chart.tooltip) {
        const useFinalPosition = args.replay;
        if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) {
          args.changed = true;
        }
      }
    },
    defaults: {
      enabled: true,
      external: null,
      position: "average",
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      titleFont: {
        weight: "bold"
      },
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
      footerFont: {
        weight: "bold"
      },
      footerAlign: "left",
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (ctx, opts) => opts.bodyFont.size,
      boxWidth: (ctx, opts) => opts.bodyFont.size,
      multiKeyBackground: "#fff",
      displayColors: true,
      boxPadding: 0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      animation: {
        duration: 400,
        easing: "easeOutQuart"
      },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "width",
            "height",
            "caretX",
            "caretY"
          ]
        },
        opacity: {
          easing: "linear",
          duration: 200
        }
      },
      callbacks: defaultCallbacks
    },
    defaultRoutes: {
      bodyFont: "font",
      footerFont: "font",
      titleFont: "font"
    },
    descriptors: {
      _scriptable: (name) => name !== "filter" && name !== "itemSort" && name !== "external",
      _indexable: false,
      callbacks: {
        _scriptable: false,
        _indexable: false
      },
      animation: {
        _fallback: false
      },
      animations: {
        _fallback: "animation"
      }
    },
    additionalOptionScopes: [
      "interaction"
    ]
  };
  var plugins = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Colors: plugin_colors,
    Decimation: plugin_decimation,
    Filler: index,
    Legend: plugin_legend,
    SubTitle: plugin_subtitle,
    Title: plugin_title,
    Tooltip: plugin_tooltip
  });
  var addIfString = (labels, raw2, index2, addedLabels) => {
    if (typeof raw2 === "string") {
      index2 = labels.push(raw2) - 1;
      addedLabels.unshift({
        index: index2,
        label: raw2
      });
    } else if (isNaN(raw2)) {
      index2 = null;
    }
    return index2;
  };
  function findOrAddLabel(labels, raw2, index2, addedLabels) {
    const first = labels.indexOf(raw2);
    if (first === -1) {
      return addIfString(labels, raw2, index2, addedLabels);
    }
    const last = labels.lastIndexOf(raw2);
    return first !== last ? index2 : first;
  }
  var validIndex = (index2, max) => index2 === null ? null : _limitValue(Math.round(index2), 0, max);
  function _getLabelForValue(value) {
    const labels = this.getLabels();
    if (value >= 0 && value < labels.length) {
      return labels[value];
    }
    return value;
  }
  var CategoryScale = class extends Scale {
    static id = "category";
    static defaults = {
      ticks: {
        callback: _getLabelForValue
      }
    };
    constructor(cfg) {
      super(cfg);
      this._startValue = void 0;
      this._valueRange = 0;
      this._addedLabels = [];
    }
    init(scaleOptions) {
      const added = this._addedLabels;
      if (added.length) {
        const labels = this.getLabels();
        for (const { index: index2, label } of added) {
          if (labels[index2] === label) {
            labels.splice(index2, 1);
          }
        }
        this._addedLabels = [];
      }
      super.init(scaleOptions);
    }
    parse(raw2, index2) {
      if (isNullOrUndef(raw2)) {
        return null;
      }
      const labels = this.getLabels();
      index2 = isFinite(index2) && labels[index2] === raw2 ? index2 : findOrAddLabel(labels, raw2, valueOrDefault(index2, raw2), this._addedLabels);
      return validIndex(index2, labels.length - 1);
    }
    determineDataLimits() {
      const { minDefined, maxDefined } = this.getUserBounds();
      let { min, max } = this.getMinMax(true);
      if (this.options.bounds === "ticks") {
        if (!minDefined) {
          min = 0;
        }
        if (!maxDefined) {
          max = this.getLabels().length - 1;
        }
      }
      this.min = min;
      this.max = max;
    }
    buildTicks() {
      const min = this.min;
      const max = this.max;
      const offset = this.options.offset;
      const ticks = [];
      let labels = this.getLabels();
      labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
      this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
      this._startValue = this.min - (offset ? 0.5 : 0);
      for (let value = min; value <= max; value++) {
        ticks.push({
          value
        });
      }
      return ticks;
    }
    getLabelForValue(value) {
      return _getLabelForValue.call(this, value);
    }
    configure() {
      super.configure();
      if (!this.isHorizontal()) {
        this._reversePixels = !this._reversePixels;
      }
    }
    getPixelForValue(value) {
      if (typeof value !== "number") {
        value = this.parse(value);
      }
      return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getPixelForTick(index2) {
      const ticks = this.ticks;
      if (index2 < 0 || index2 > ticks.length - 1) {
        return null;
      }
      return this.getPixelForValue(ticks[index2].value);
    }
    getValueForPixel(pixel) {
      return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
    }
    getBasePixel() {
      return this.bottom;
    }
  };
  function generateTicks$1(generationOptions, dataRange) {
    const ticks = [];
    const MIN_SPACING = 1e-14;
    const { bounds, step, min, max, precision, count, maxTicks, maxDigits, includeBounds } = generationOptions;
    const unit = step || 1;
    const maxSpaces = maxTicks - 1;
    const { min: rmin, max: rmax } = dataRange;
    const minDefined = !isNullOrUndef(min);
    const maxDefined = !isNullOrUndef(max);
    const countDefined = !isNullOrUndef(count);
    const minSpacing = (rmax - rmin) / (maxDigits + 1);
    let spacing = niceNum((rmax - rmin) / maxSpaces / unit) * unit;
    let factor, niceMin, niceMax, numSpaces;
    if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
      return [
        {
          value: rmin
        },
        {
          value: rmax
        }
      ];
    }
    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
    if (numSpaces > maxSpaces) {
      spacing = niceNum(numSpaces * spacing / maxSpaces / unit) * unit;
    }
    if (!isNullOrUndef(precision)) {
      factor = Math.pow(10, precision);
      spacing = Math.ceil(spacing * factor) / factor;
    }
    if (bounds === "ticks") {
      niceMin = Math.floor(rmin / spacing) * spacing;
      niceMax = Math.ceil(rmax / spacing) * spacing;
    } else {
      niceMin = rmin;
      niceMax = rmax;
    }
    if (minDefined && maxDefined && step && almostWhole((max - min) / step, spacing / 1e3)) {
      numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
      spacing = (max - min) / numSpaces;
      niceMin = min;
      niceMax = max;
    } else if (countDefined) {
      niceMin = minDefined ? min : niceMin;
      niceMax = maxDefined ? max : niceMax;
      numSpaces = count - 1;
      spacing = (niceMax - niceMin) / numSpaces;
    } else {
      numSpaces = (niceMax - niceMin) / spacing;
      if (almostEquals(numSpaces, Math.round(numSpaces), spacing / 1e3)) {
        numSpaces = Math.round(numSpaces);
      } else {
        numSpaces = Math.ceil(numSpaces);
      }
    }
    const decimalPlaces = Math.max(_decimalPlaces(spacing), _decimalPlaces(niceMin));
    factor = Math.pow(10, isNullOrUndef(precision) ? decimalPlaces : precision);
    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    let j2 = 0;
    if (minDefined) {
      if (includeBounds && niceMin !== min) {
        ticks.push({
          value: min
        });
        if (niceMin < min) {
          j2++;
        }
        if (almostEquals(Math.round((niceMin + j2 * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
          j2++;
        }
      } else if (niceMin < min) {
        j2++;
      }
    }
    for (; j2 < numSpaces; ++j2) {
      const tickValue = Math.round((niceMin + j2 * spacing) * factor) / factor;
      if (maxDefined && tickValue > max) {
        break;
      }
      ticks.push({
        value: tickValue
      });
    }
    if (maxDefined && includeBounds && niceMax !== max) {
      if (ticks.length && almostEquals(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
        ticks[ticks.length - 1].value = max;
      } else {
        ticks.push({
          value: max
        });
      }
    } else if (!maxDefined || niceMax === max) {
      ticks.push({
        value: niceMax
      });
    }
    return ticks;
  }
  function relativeLabelSize(value, minSpacing, { horizontal, minRotation }) {
    const rad = toRadians(minRotation);
    const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 1e-3;
    const length = 0.75 * minSpacing * ("" + value).length;
    return Math.min(minSpacing / ratio, length);
  }
  var LinearScaleBase = class extends Scale {
    constructor(cfg) {
      super(cfg);
      this.start = void 0;
      this.end = void 0;
      this._startValue = void 0;
      this._endValue = void 0;
      this._valueRange = 0;
    }
    parse(raw2, index2) {
      if (isNullOrUndef(raw2)) {
        return null;
      }
      if ((typeof raw2 === "number" || raw2 instanceof Number) && !isFinite(+raw2)) {
        return null;
      }
      return +raw2;
    }
    handleTickRangeOptions() {
      const { beginAtZero } = this.options;
      const { minDefined, maxDefined } = this.getUserBounds();
      let { min, max } = this;
      const setMin = (v2) => min = minDefined ? min : v2;
      const setMax = (v2) => max = maxDefined ? max : v2;
      if (beginAtZero) {
        const minSign = sign(min);
        const maxSign = sign(max);
        if (minSign < 0 && maxSign < 0) {
          setMax(0);
        } else if (minSign > 0 && maxSign > 0) {
          setMin(0);
        }
      }
      if (min === max) {
        let offset = max === 0 ? 1 : Math.abs(max * 0.05);
        setMax(max + offset);
        if (!beginAtZero) {
          setMin(min - offset);
        }
      }
      this.min = min;
      this.max = max;
    }
    getTickLimit() {
      const tickOpts = this.options.ticks;
      let { maxTicksLimit, stepSize } = tickOpts;
      let maxTicks;
      if (stepSize) {
        maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
        if (maxTicks > 1e3) {
          console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
          maxTicks = 1e3;
        }
      } else {
        maxTicks = this.computeTickLimit();
        maxTicksLimit = maxTicksLimit || 11;
      }
      if (maxTicksLimit) {
        maxTicks = Math.min(maxTicksLimit, maxTicks);
      }
      return maxTicks;
    }
    computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
      const opts = this.options;
      const tickOpts = opts.ticks;
      let maxTicks = this.getTickLimit();
      maxTicks = Math.max(2, maxTicks);
      const numericGeneratorOptions = {
        maxTicks,
        bounds: opts.bounds,
        min: opts.min,
        max: opts.max,
        precision: tickOpts.precision,
        step: tickOpts.stepSize,
        count: tickOpts.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: tickOpts.minRotation || 0,
        includeBounds: tickOpts.includeBounds !== false
      };
      const dataRange = this._range || this;
      const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
      if (opts.bounds === "ticks") {
        _setMinAndMaxByKey(ticks, this, "value");
      }
      if (opts.reverse) {
        ticks.reverse();
        this.start = this.max;
        this.end = this.min;
      } else {
        this.start = this.min;
        this.end = this.max;
      }
      return ticks;
    }
    configure() {
      const ticks = this.ticks;
      let start2 = this.min;
      let end = this.max;
      super.configure();
      if (this.options.offset && ticks.length) {
        const offset = (end - start2) / Math.max(ticks.length - 1, 1) / 2;
        start2 -= offset;
        end += offset;
      }
      this._startValue = start2;
      this._endValue = end;
      this._valueRange = end - start2;
    }
    getLabelForValue(value) {
      return formatNumber(value, this.chart.options.locale, this.options.ticks.format);
    }
  };
  var LinearScale = class extends LinearScaleBase {
    static id = "linear";
    static defaults = {
      ticks: {
        callback: Ticks.formatters.numeric
      }
    };
    determineDataLimits() {
      const { min, max } = this.getMinMax(true);
      this.min = isNumberFinite(min) ? min : 0;
      this.max = isNumberFinite(max) ? max : 1;
      this.handleTickRangeOptions();
    }
    computeTickLimit() {
      const horizontal = this.isHorizontal();
      const length = horizontal ? this.width : this.height;
      const minRotation = toRadians(this.options.ticks.minRotation);
      const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 1e-3;
      const tickFont = this._resolveTickFontOptions(0);
      return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
    }
    getPixelForValue(value) {
      return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
      return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    }
  };
  var log10Floor = (v2) => Math.floor(log10(v2));
  var changeExponent = (v2, m2) => Math.pow(10, log10Floor(v2) + m2);
  function isMajor(tickVal) {
    const remain = tickVal / Math.pow(10, log10Floor(tickVal));
    return remain === 1;
  }
  function steps(min, max, rangeExp) {
    const rangeStep = Math.pow(10, rangeExp);
    const start2 = Math.floor(min / rangeStep);
    const end = Math.ceil(max / rangeStep);
    return end - start2;
  }
  function startExp(min, max) {
    const range = max - min;
    let rangeExp = log10Floor(range);
    while (steps(min, max, rangeExp) > 10) {
      rangeExp++;
    }
    while (steps(min, max, rangeExp) < 10) {
      rangeExp--;
    }
    return Math.min(rangeExp, log10Floor(min));
  }
  function generateTicks(generationOptions, { min, max }) {
    min = finiteOrDefault(generationOptions.min, min);
    const ticks = [];
    const minExp = log10Floor(min);
    let exp = startExp(min, max);
    let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
    const stepSize = Math.pow(10, exp);
    const base = minExp > exp ? Math.pow(10, minExp) : 0;
    const start2 = Math.round((min - base) * precision) / precision;
    const offset = Math.floor((min - base) / stepSize / 10) * stepSize * 10;
    let significand = Math.floor((start2 - offset) / Math.pow(10, exp));
    let value = finiteOrDefault(generationOptions.min, Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision);
    while (value < max) {
      ticks.push({
        value,
        major: isMajor(value),
        significand
      });
      if (significand >= 10) {
        significand = significand < 15 ? 15 : 20;
      } else {
        significand++;
      }
      if (significand >= 20) {
        exp++;
        significand = 2;
        precision = exp >= 0 ? 1 : precision;
      }
      value = Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision;
    }
    const lastTick = finiteOrDefault(generationOptions.max, value);
    ticks.push({
      value: lastTick,
      major: isMajor(lastTick),
      significand
    });
    return ticks;
  }
  var LogarithmicScale = class extends Scale {
    static id = "logarithmic";
    static defaults = {
      ticks: {
        callback: Ticks.formatters.logarithmic,
        major: {
          enabled: true
        }
      }
    };
    constructor(cfg) {
      super(cfg);
      this.start = void 0;
      this.end = void 0;
      this._startValue = void 0;
      this._valueRange = 0;
    }
    parse(raw2, index2) {
      const value = LinearScaleBase.prototype.parse.apply(this, [
        raw2,
        index2
      ]);
      if (value === 0) {
        this._zero = true;
        return void 0;
      }
      return isNumberFinite(value) && value > 0 ? value : null;
    }
    determineDataLimits() {
      const { min, max } = this.getMinMax(true);
      this.min = isNumberFinite(min) ? Math.max(0, min) : null;
      this.max = isNumberFinite(max) ? Math.max(0, max) : null;
      if (this.options.beginAtZero) {
        this._zero = true;
      }
      if (this._zero && this.min !== this._suggestedMin && !isNumberFinite(this._userMin)) {
        this.min = min === changeExponent(this.min, 0) ? changeExponent(this.min, -1) : changeExponent(this.min, 0);
      }
      this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const { minDefined, maxDefined } = this.getUserBounds();
      let min = this.min;
      let max = this.max;
      const setMin = (v2) => min = minDefined ? min : v2;
      const setMax = (v2) => max = maxDefined ? max : v2;
      if (min === max) {
        if (min <= 0) {
          setMin(1);
          setMax(10);
        } else {
          setMin(changeExponent(min, -1));
          setMax(changeExponent(max, 1));
        }
      }
      if (min <= 0) {
        setMin(changeExponent(max, -1));
      }
      if (max <= 0) {
        setMax(changeExponent(min, 1));
      }
      this.min = min;
      this.max = max;
    }
    buildTicks() {
      const opts = this.options;
      const generationOptions = {
        min: this._userMin,
        max: this._userMax
      };
      const ticks = generateTicks(generationOptions, this);
      if (opts.bounds === "ticks") {
        _setMinAndMaxByKey(ticks, this, "value");
      }
      if (opts.reverse) {
        ticks.reverse();
        this.start = this.max;
        this.end = this.min;
      } else {
        this.start = this.min;
        this.end = this.max;
      }
      return ticks;
    }
    getLabelForValue(value) {
      return value === void 0 ? "0" : formatNumber(value, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const start2 = this.min;
      super.configure();
      this._startValue = log10(start2);
      this._valueRange = log10(this.max) - log10(start2);
    }
    getPixelForValue(value) {
      if (value === void 0 || value === 0) {
        value = this.min;
      }
      if (value === null || isNaN(value)) {
        return NaN;
      }
      return this.getPixelForDecimal(value === this.min ? 0 : (log10(value) - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
      const decimal = this.getDecimalForPixel(pixel);
      return Math.pow(10, this._startValue + decimal * this._valueRange);
    }
  };
  function getTickBackdropHeight(opts) {
    const tickOpts = opts.ticks;
    if (tickOpts.display && opts.display) {
      const padding = toPadding(tickOpts.backdropPadding);
      return valueOrDefault(tickOpts.font && tickOpts.font.size, defaults.font.size) + padding.height;
    }
    return 0;
  }
  function measureLabelSize(ctx, font, label) {
    label = isArray2(label) ? label : [
      label
    ];
    return {
      w: _longestText(ctx, font.string, label),
      h: label.length * font.lineHeight
    };
  }
  function determineLimits(angle, pos, size2, min, max) {
    if (angle === min || angle === max) {
      return {
        start: pos - size2 / 2,
        end: pos + size2 / 2
      };
    } else if (angle < min || angle > max) {
      return {
        start: pos - size2,
        end: pos
      };
    }
    return {
      start: pos,
      end: pos + size2
    };
  }
  function fitWithPointLabels(scale) {
    const orig = {
      l: scale.left + scale._padding.left,
      r: scale.right - scale._padding.right,
      t: scale.top + scale._padding.top,
      b: scale.bottom - scale._padding.bottom
    };
    const limits = Object.assign({}, orig);
    const labelSizes = [];
    const padding = [];
    const valueCount = scale._pointLabels.length;
    const pointLabelOpts = scale.options.pointLabels;
    const additionalAngle = pointLabelOpts.centerPointLabels ? PI / valueCount : 0;
    for (let i2 = 0; i2 < valueCount; i2++) {
      const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i2));
      padding[i2] = opts.padding;
      const pointPosition = scale.getPointPosition(i2, scale.drawingArea + padding[i2], additionalAngle);
      const plFont = toFont(opts.font);
      const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i2]);
      labelSizes[i2] = textSize;
      const angleRadians = _normalizeAngle(scale.getIndexAngle(i2) + additionalAngle);
      const angle = Math.round(toDegrees(angleRadians));
      const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
      const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
      updateLimits(limits, orig, angleRadians, hLimits, vLimits);
    }
    scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
    scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
  }
  function updateLimits(limits, orig, angle, hLimits, vLimits) {
    const sin = Math.abs(Math.sin(angle));
    const cos = Math.abs(Math.cos(angle));
    let x2 = 0;
    let y2 = 0;
    if (hLimits.start < orig.l) {
      x2 = (orig.l - hLimits.start) / sin;
      limits.l = Math.min(limits.l, orig.l - x2);
    } else if (hLimits.end > orig.r) {
      x2 = (hLimits.end - orig.r) / sin;
      limits.r = Math.max(limits.r, orig.r + x2);
    }
    if (vLimits.start < orig.t) {
      y2 = (orig.t - vLimits.start) / cos;
      limits.t = Math.min(limits.t, orig.t - y2);
    } else if (vLimits.end > orig.b) {
      y2 = (vLimits.end - orig.b) / cos;
      limits.b = Math.max(limits.b, orig.b + y2);
    }
  }
  function createPointLabelItem(scale, index2, itemOpts) {
    const outerDistance = scale.drawingArea;
    const { extra, additionalAngle, padding, size: size2 } = itemOpts;
    const pointLabelPosition = scale.getPointPosition(index2, outerDistance + extra + padding, additionalAngle);
    const angle = Math.round(toDegrees(_normalizeAngle(pointLabelPosition.angle + HALF_PI)));
    const y2 = yForAngle(pointLabelPosition.y, size2.h, angle);
    const textAlign = getTextAlignForAngle(angle);
    const left = leftForTextAlign(pointLabelPosition.x, size2.w, textAlign);
    return {
      visible: true,
      x: pointLabelPosition.x,
      y: y2,
      textAlign,
      left,
      top: y2,
      right: left + size2.w,
      bottom: y2 + size2.h
    };
  }
  function isNotOverlapped(item, area) {
    if (!area) {
      return true;
    }
    const { left, top, right, bottom } = item;
    const apexesInArea = _isPointInArea({
      x: left,
      y: top
    }, area) || _isPointInArea({
      x: left,
      y: bottom
    }, area) || _isPointInArea({
      x: right,
      y: top
    }, area) || _isPointInArea({
      x: right,
      y: bottom
    }, area);
    return !apexesInArea;
  }
  function buildPointLabelItems(scale, labelSizes, padding) {
    const items = [];
    const valueCount = scale._pointLabels.length;
    const opts = scale.options;
    const { centerPointLabels, display } = opts.pointLabels;
    const itemOpts = {
      extra: getTickBackdropHeight(opts) / 2,
      additionalAngle: centerPointLabels ? PI / valueCount : 0
    };
    let area;
    for (let i2 = 0; i2 < valueCount; i2++) {
      itemOpts.padding = padding[i2];
      itemOpts.size = labelSizes[i2];
      const item = createPointLabelItem(scale, i2, itemOpts);
      items.push(item);
      if (display === "auto") {
        item.visible = isNotOverlapped(item, area);
        if (item.visible) {
          area = item;
        }
      }
    }
    return items;
  }
  function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) {
      return "center";
    } else if (angle < 180) {
      return "left";
    }
    return "right";
  }
  function leftForTextAlign(x2, w2, align) {
    if (align === "right") {
      x2 -= w2;
    } else if (align === "center") {
      x2 -= w2 / 2;
    }
    return x2;
  }
  function yForAngle(y2, h3, angle) {
    if (angle === 90 || angle === 270) {
      y2 -= h3 / 2;
    } else if (angle > 270 || angle < 90) {
      y2 -= h3;
    }
    return y2;
  }
  function drawPointLabelBox(ctx, opts, item) {
    const { left, top, right, bottom } = item;
    const { backdropColor } = opts;
    if (!isNullOrUndef(backdropColor)) {
      const borderRadius = toTRBLCorners(opts.borderRadius);
      const padding = toPadding(opts.backdropPadding);
      ctx.fillStyle = backdropColor;
      const backdropLeft = left - padding.left;
      const backdropTop = top - padding.top;
      const backdropWidth = right - left + padding.width;
      const backdropHeight = bottom - top + padding.height;
      if (Object.values(borderRadius).some((v2) => v2 !== 0)) {
        ctx.beginPath();
        addRoundedRectPath(ctx, {
          x: backdropLeft,
          y: backdropTop,
          w: backdropWidth,
          h: backdropHeight,
          radius: borderRadius
        });
        ctx.fill();
      } else {
        ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
      }
    }
  }
  function drawPointLabels(scale, labelCount) {
    const { ctx, options: { pointLabels } } = scale;
    for (let i2 = labelCount - 1; i2 >= 0; i2--) {
      const item = scale._pointLabelItems[i2];
      if (!item.visible) {
        continue;
      }
      const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i2));
      drawPointLabelBox(ctx, optsAtIndex, item);
      const plFont = toFont(optsAtIndex.font);
      const { x: x2, y: y2, textAlign } = item;
      renderText(ctx, scale._pointLabels[i2], x2, y2 + plFont.lineHeight / 2, plFont, {
        color: optsAtIndex.color,
        textAlign,
        textBaseline: "middle"
      });
    }
  }
  function pathRadiusLine(scale, radius, circular, labelCount) {
    const { ctx } = scale;
    if (circular) {
      ctx.arc(scale.xCenter, scale.yCenter, radius, 0, TAU);
    } else {
      let pointPosition = scale.getPointPosition(0, radius);
      ctx.moveTo(pointPosition.x, pointPosition.y);
      for (let i2 = 1; i2 < labelCount; i2++) {
        pointPosition = scale.getPointPosition(i2, radius);
        ctx.lineTo(pointPosition.x, pointPosition.y);
      }
    }
  }
  function drawRadiusLine(scale, gridLineOpts, radius, labelCount, borderOpts) {
    const ctx = scale.ctx;
    const circular = gridLineOpts.circular;
    const { color: color2, lineWidth } = gridLineOpts;
    if (!circular && !labelCount || !color2 || !lineWidth || radius < 0) {
      return;
    }
    ctx.save();
    ctx.strokeStyle = color2;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(borderOpts.dash || []);
    ctx.lineDashOffset = borderOpts.dashOffset;
    ctx.beginPath();
    pathRadiusLine(scale, radius, circular, labelCount);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
  function createPointLabelContext(parent, index2, label) {
    return createContext(parent, {
      label,
      index: index2,
      type: "pointLabel"
    });
  }
  var RadialLinearScale = class extends LinearScaleBase {
    static id = "radialLinear";
    static defaults = {
      display: true,
      animate: true,
      position: "chartArea",
      angleLines: {
        display: true,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0
      },
      grid: {
        circular: false
      },
      startAngle: 0,
      ticks: {
        showLabelBackdrop: true,
        callback: Ticks.formatters.numeric
      },
      pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: true,
        font: {
          size: 10
        },
        callback(label) {
          return label;
        },
        padding: 5,
        centerPointLabels: false
      }
    };
    static defaultRoutes = {
      "angleLines.color": "borderColor",
      "pointLabels.color": "color",
      "ticks.color": "color"
    };
    static descriptors = {
      angleLines: {
        _fallback: "grid"
      }
    };
    constructor(cfg) {
      super(cfg);
      this.xCenter = void 0;
      this.yCenter = void 0;
      this.drawingArea = void 0;
      this._pointLabels = [];
      this._pointLabelItems = [];
    }
    setDimensions() {
      const padding = this._padding = toPadding(getTickBackdropHeight(this.options) / 2);
      const w2 = this.width = this.maxWidth - padding.width;
      const h3 = this.height = this.maxHeight - padding.height;
      this.xCenter = Math.floor(this.left + w2 / 2 + padding.left);
      this.yCenter = Math.floor(this.top + h3 / 2 + padding.top);
      this.drawingArea = Math.floor(Math.min(w2, h3) / 2);
    }
    determineDataLimits() {
      const { min, max } = this.getMinMax(false);
      this.min = isNumberFinite(min) && !isNaN(min) ? min : 0;
      this.max = isNumberFinite(max) && !isNaN(max) ? max : 0;
      this.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    }
    generateTickLabels(ticks) {
      LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
      this._pointLabels = this.getLabels().map((value, index2) => {
        const label = callback(this.options.pointLabels.callback, [
          value,
          index2
        ], this);
        return label || label === 0 ? label : "";
      }).filter((v2, i2) => this.chart.getDataVisibility(i2));
    }
    fit() {
      const opts = this.options;
      if (opts.display && opts.pointLabels.display) {
        fitWithPointLabels(this);
      } else {
        this.setCenterPoint(0, 0, 0, 0);
      }
    }
    setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
      this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
      this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
      this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
    }
    getIndexAngle(index2) {
      const angleMultiplier = TAU / (this._pointLabels.length || 1);
      const startAngle = this.options.startAngle || 0;
      return _normalizeAngle(index2 * angleMultiplier + toRadians(startAngle));
    }
    getDistanceFromCenterForValue(value) {
      if (isNullOrUndef(value)) {
        return NaN;
      }
      const scalingFactor = this.drawingArea / (this.max - this.min);
      if (this.options.reverse) {
        return (this.max - value) * scalingFactor;
      }
      return (value - this.min) * scalingFactor;
    }
    getValueForDistanceFromCenter(distance) {
      if (isNullOrUndef(distance)) {
        return NaN;
      }
      const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
    }
    getPointLabelContext(index2) {
      const pointLabels = this._pointLabels || [];
      if (index2 >= 0 && index2 < pointLabels.length) {
        const pointLabel = pointLabels[index2];
        return createPointLabelContext(this.getContext(), index2, pointLabel);
      }
    }
    getPointPosition(index2, distanceFromCenter, additionalAngle = 0) {
      const angle = this.getIndexAngle(index2) - HALF_PI + additionalAngle;
      return {
        x: Math.cos(angle) * distanceFromCenter + this.xCenter,
        y: Math.sin(angle) * distanceFromCenter + this.yCenter,
        angle
      };
    }
    getPointPositionForValue(index2, value) {
      return this.getPointPosition(index2, this.getDistanceFromCenterForValue(value));
    }
    getBasePosition(index2) {
      return this.getPointPositionForValue(index2 || 0, this.getBaseValue());
    }
    getPointLabelPosition(index2) {
      const { left, top, right, bottom } = this._pointLabelItems[index2];
      return {
        left,
        top,
        right,
        bottom
      };
    }
    drawBackground() {
      const { backgroundColor, grid: { circular } } = this.options;
      if (backgroundColor) {
        const ctx = this.ctx;
        ctx.save();
        ctx.beginPath();
        pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
        ctx.closePath();
        ctx.fillStyle = backgroundColor;
        ctx.fill();
        ctx.restore();
      }
    }
    drawGrid() {
      const ctx = this.ctx;
      const opts = this.options;
      const { angleLines, grid, border } = opts;
      const labelCount = this._pointLabels.length;
      let i2, offset, position;
      if (opts.pointLabels.display) {
        drawPointLabels(this, labelCount);
      }
      if (grid.display) {
        this.ticks.forEach((tick, index2) => {
          if (index2 !== 0 || index2 === 0 && this.min < 0) {
            offset = this.getDistanceFromCenterForValue(tick.value);
            const context = this.getContext(index2);
            const optsAtIndex = grid.setContext(context);
            const optsAtIndexBorder = border.setContext(context);
            drawRadiusLine(this, optsAtIndex, offset, labelCount, optsAtIndexBorder);
          }
        });
      }
      if (angleLines.display) {
        ctx.save();
        for (i2 = labelCount - 1; i2 >= 0; i2--) {
          const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i2));
          const { color: color2, lineWidth } = optsAtIndex;
          if (!lineWidth || !color2) {
            continue;
          }
          ctx.lineWidth = lineWidth;
          ctx.strokeStyle = color2;
          ctx.setLineDash(optsAtIndex.borderDash);
          ctx.lineDashOffset = optsAtIndex.borderDashOffset;
          offset = this.getDistanceFromCenterForValue(opts.reverse ? this.min : this.max);
          position = this.getPointPosition(i2, offset);
          ctx.beginPath();
          ctx.moveTo(this.xCenter, this.yCenter);
          ctx.lineTo(position.x, position.y);
          ctx.stroke();
        }
        ctx.restore();
      }
    }
    drawBorder() {
    }
    drawLabels() {
      const ctx = this.ctx;
      const opts = this.options;
      const tickOpts = opts.ticks;
      if (!tickOpts.display) {
        return;
      }
      const startAngle = this.getIndexAngle(0);
      let offset, width;
      ctx.save();
      ctx.translate(this.xCenter, this.yCenter);
      ctx.rotate(startAngle);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      this.ticks.forEach((tick, index2) => {
        if (index2 === 0 && this.min >= 0 && !opts.reverse) {
          return;
        }
        const optsAtIndex = tickOpts.setContext(this.getContext(index2));
        const tickFont = toFont(optsAtIndex.font);
        offset = this.getDistanceFromCenterForValue(this.ticks[index2].value);
        if (optsAtIndex.showLabelBackdrop) {
          ctx.font = tickFont.string;
          width = ctx.measureText(tick.label).width;
          ctx.fillStyle = optsAtIndex.backdropColor;
          const padding = toPadding(optsAtIndex.backdropPadding);
          ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
        }
        renderText(ctx, tick.label, 0, -offset, tickFont, {
          color: optsAtIndex.color,
          strokeColor: optsAtIndex.textStrokeColor,
          strokeWidth: optsAtIndex.textStrokeWidth
        });
      });
      ctx.restore();
    }
    drawTitle() {
    }
  };
  var INTERVALS = {
    millisecond: {
      common: true,
      size: 1,
      steps: 1e3
    },
    second: {
      common: true,
      size: 1e3,
      steps: 60
    },
    minute: {
      common: true,
      size: 6e4,
      steps: 60
    },
    hour: {
      common: true,
      size: 36e5,
      steps: 24
    },
    day: {
      common: true,
      size: 864e5,
      steps: 30
    },
    week: {
      common: false,
      size: 6048e5,
      steps: 4
    },
    month: {
      common: true,
      size: 2628e6,
      steps: 12
    },
    quarter: {
      common: false,
      size: 7884e6,
      steps: 4
    },
    year: {
      common: true,
      size: 3154e7
    }
  };
  var UNITS = /* @__PURE__ */ Object.keys(INTERVALS);
  function sorter(a2, b2) {
    return a2 - b2;
  }
  function parse(scale, input) {
    if (isNullOrUndef(input)) {
      return null;
    }
    const adapter = scale._adapter;
    const { parser, round: round2, isoWeekday } = scale._parseOpts;
    let value = input;
    if (typeof parser === "function") {
      value = parser(value);
    }
    if (!isNumberFinite(value)) {
      value = typeof parser === "string" ? adapter.parse(value, parser) : adapter.parse(value);
    }
    if (value === null) {
      return null;
    }
    if (round2) {
      value = round2 === "week" && (isNumber(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, "isoWeek", isoWeekday) : adapter.startOf(value, round2);
    }
    return +value;
  }
  function determineUnitForAutoTicks(minUnit, min, max, capacity) {
    const ilen = UNITS.length;
    for (let i2 = UNITS.indexOf(minUnit); i2 < ilen - 1; ++i2) {
      const interval = INTERVALS[UNITS[i2]];
      const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
      if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
        return UNITS[i2];
      }
    }
    return UNITS[ilen - 1];
  }
  function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    for (let i2 = UNITS.length - 1; i2 >= UNITS.indexOf(minUnit); i2--) {
      const unit = UNITS[i2];
      if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
        return unit;
      }
    }
    return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
  }
  function determineMajorUnit(unit) {
    for (let i2 = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i2 < ilen; ++i2) {
      if (INTERVALS[UNITS[i2]].common) {
        return UNITS[i2];
      }
    }
  }
  function addTick(ticks, time, timestamps) {
    if (!timestamps) {
      ticks[time] = true;
    } else if (timestamps.length) {
      const { lo, hi: hi2 } = _lookup(timestamps, time);
      const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi2];
      ticks[timestamp] = true;
    }
  }
  function setMajorTicks(scale, ticks, map3, majorUnit) {
    const adapter = scale._adapter;
    const first = +adapter.startOf(ticks[0].value, majorUnit);
    const last = ticks[ticks.length - 1].value;
    let major, index2;
    for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
      index2 = map3[major];
      if (index2 >= 0) {
        ticks[index2].major = true;
      }
    }
    return ticks;
  }
  function ticksFromTimestamps(scale, values, majorUnit) {
    const ticks = [];
    const map3 = {};
    const ilen = values.length;
    let i2, value;
    for (i2 = 0; i2 < ilen; ++i2) {
      value = values[i2];
      map3[value] = i2;
      ticks.push({
        value,
        major: false
      });
    }
    return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map3, majorUnit);
  }
  var TimeScale = class extends Scale {
    static id = "time";
    static defaults = {
      bounds: "data",
      adapters: {},
      time: {
        parser: false,
        unit: false,
        round: false,
        isoWeekday: false,
        minUnit: "millisecond",
        displayFormats: {}
      },
      ticks: {
        source: "auto",
        callback: false,
        major: {
          enabled: false
        }
      }
    };
    constructor(props) {
      super(props);
      this._cache = {
        data: [],
        labels: [],
        all: []
      };
      this._unit = "day";
      this._majorUnit = void 0;
      this._offsets = {};
      this._normalized = false;
      this._parseOpts = void 0;
    }
    init(scaleOpts, opts = {}) {
      const time = scaleOpts.time || (scaleOpts.time = {});
      const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
      adapter.init(opts);
      mergeIf(time.displayFormats, adapter.formats());
      this._parseOpts = {
        parser: time.parser,
        round: time.round,
        isoWeekday: time.isoWeekday
      };
      super.init(scaleOpts);
      this._normalized = opts.normalized;
    }
    parse(raw2, index2) {
      if (raw2 === void 0) {
        return null;
      }
      return parse(this, raw2);
    }
    beforeLayout() {
      super.beforeLayout();
      this._cache = {
        data: [],
        labels: [],
        all: []
      };
    }
    determineDataLimits() {
      const options = this.options;
      const adapter = this._adapter;
      const unit = options.time.unit || "day";
      let { min, max, minDefined, maxDefined } = this.getUserBounds();
      function _applyBounds(bounds) {
        if (!minDefined && !isNaN(bounds.min)) {
          min = Math.min(min, bounds.min);
        }
        if (!maxDefined && !isNaN(bounds.max)) {
          max = Math.max(max, bounds.max);
        }
      }
      if (!minDefined || !maxDefined) {
        _applyBounds(this._getLabelBounds());
        if (options.bounds !== "ticks" || options.ticks.source !== "labels") {
          _applyBounds(this.getMinMax(false));
        }
      }
      min = isNumberFinite(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
      max = isNumberFinite(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
      this.min = Math.min(min, max - 1);
      this.max = Math.max(min + 1, max);
    }
    _getLabelBounds() {
      const arr = this.getLabelTimestamps();
      let min = Number.POSITIVE_INFINITY;
      let max = Number.NEGATIVE_INFINITY;
      if (arr.length) {
        min = arr[0];
        max = arr[arr.length - 1];
      }
      return {
        min,
        max
      };
    }
    buildTicks() {
      const options = this.options;
      const timeOpts = options.time;
      const tickOpts = options.ticks;
      const timestamps = tickOpts.source === "labels" ? this.getLabelTimestamps() : this._generate();
      if (options.bounds === "ticks" && timestamps.length) {
        this.min = this._userMin || timestamps[0];
        this.max = this._userMax || timestamps[timestamps.length - 1];
      }
      const min = this.min;
      const max = this.max;
      const ticks = _filterBetween(timestamps, min, max);
      this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
      this._majorUnit = !tickOpts.major.enabled || this._unit === "year" ? void 0 : determineMajorUnit(this._unit);
      this.initOffsets(timestamps);
      if (options.reverse) {
        ticks.reverse();
      }
      return ticksFromTimestamps(this, ticks, this._majorUnit);
    }
    afterAutoSkip() {
      if (this.options.offsetAfterAutoskip) {
        this.initOffsets(this.ticks.map((tick) => +tick.value));
      }
    }
    initOffsets(timestamps = []) {
      let start2 = 0;
      let end = 0;
      let first, last;
      if (this.options.offset && timestamps.length) {
        first = this.getDecimalForValue(timestamps[0]);
        if (timestamps.length === 1) {
          start2 = 1 - first;
        } else {
          start2 = (this.getDecimalForValue(timestamps[1]) - first) / 2;
        }
        last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
        if (timestamps.length === 1) {
          end = last;
        } else {
          end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
        }
      }
      const limit = timestamps.length < 3 ? 0.5 : 0.25;
      start2 = _limitValue(start2, 0, limit);
      end = _limitValue(end, 0, limit);
      this._offsets = {
        start: start2,
        end,
        factor: 1 / (start2 + 1 + end)
      };
    }
    _generate() {
      const adapter = this._adapter;
      const min = this.min;
      const max = this.max;
      const options = this.options;
      const timeOpts = options.time;
      const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
      const stepSize = valueOrDefault(options.ticks.stepSize, 1);
      const weekday = minor === "week" ? timeOpts.isoWeekday : false;
      const hasWeekday = isNumber(weekday) || weekday === true;
      const ticks = {};
      let first = min;
      let time, count;
      if (hasWeekday) {
        first = +adapter.startOf(first, "isoWeek", weekday);
      }
      first = +adapter.startOf(first, hasWeekday ? "day" : minor);
      if (adapter.diff(max, min, minor) > 1e5 * stepSize) {
        throw new Error(min + " and " + max + " are too far apart with stepSize of " + stepSize + " " + minor);
      }
      const timestamps = options.ticks.source === "data" && this.getDataTimestamps();
      for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) {
        addTick(ticks, time, timestamps);
      }
      if (time === max || options.bounds === "ticks" || count === 1) {
        addTick(ticks, time, timestamps);
      }
      return Object.keys(ticks).sort(sorter).map((x2) => +x2);
    }
    getLabelForValue(value) {
      const adapter = this._adapter;
      const timeOpts = this.options.time;
      if (timeOpts.tooltipFormat) {
        return adapter.format(value, timeOpts.tooltipFormat);
      }
      return adapter.format(value, timeOpts.displayFormats.datetime);
    }
    format(value, format) {
      const options = this.options;
      const formats = options.time.displayFormats;
      const unit = this._unit;
      const fmt = format || formats[unit];
      return this._adapter.format(value, fmt);
    }
    _tickFormatFunction(time, index2, ticks, format) {
      const options = this.options;
      const formatter = options.ticks.callback;
      if (formatter) {
        return callback(formatter, [
          time,
          index2,
          ticks
        ], this);
      }
      const formats = options.time.displayFormats;
      const unit = this._unit;
      const majorUnit = this._majorUnit;
      const minorFormat = unit && formats[unit];
      const majorFormat = majorUnit && formats[majorUnit];
      const tick = ticks[index2];
      const major = majorUnit && majorFormat && tick && tick.major;
      return this._adapter.format(time, format || (major ? majorFormat : minorFormat));
    }
    generateTickLabels(ticks) {
      let i2, ilen, tick;
      for (i2 = 0, ilen = ticks.length; i2 < ilen; ++i2) {
        tick = ticks[i2];
        tick.label = this._tickFormatFunction(tick.value, i2, ticks);
      }
    }
    getDecimalForValue(value) {
      return value === null ? NaN : (value - this.min) / (this.max - this.min);
    }
    getPixelForValue(value) {
      const offsets = this._offsets;
      const pos = this.getDecimalForValue(value);
      return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    }
    getValueForPixel(pixel) {
      const offsets = this._offsets;
      const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
      return this.min + pos * (this.max - this.min);
    }
    _getLabelSize(label) {
      const ticksOpts = this.options.ticks;
      const tickLabelWidth = this.ctx.measureText(label).width;
      const angle = toRadians(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
      const cosRotation = Math.cos(angle);
      const sinRotation = Math.sin(angle);
      const tickFontSize = this._resolveTickFontOptions(0).size;
      return {
        w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
        h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
      };
    }
    _getLabelCapacity(exampleTime) {
      const timeOpts = this.options.time;
      const displayFormats = timeOpts.displayFormats;
      const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
      const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [
        exampleTime
      ], this._majorUnit), format);
      const size2 = this._getLabelSize(exampleLabel);
      const capacity = Math.floor(this.isHorizontal() ? this.width / size2.w : this.height / size2.h) - 1;
      return capacity > 0 ? capacity : 1;
    }
    getDataTimestamps() {
      let timestamps = this._cache.data || [];
      let i2, ilen;
      if (timestamps.length) {
        return timestamps;
      }
      const metas = this.getMatchingVisibleMetas();
      if (this._normalized && metas.length) {
        return this._cache.data = metas[0].controller.getAllParsedValues(this);
      }
      for (i2 = 0, ilen = metas.length; i2 < ilen; ++i2) {
        timestamps = timestamps.concat(metas[i2].controller.getAllParsedValues(this));
      }
      return this._cache.data = this.normalize(timestamps);
    }
    getLabelTimestamps() {
      const timestamps = this._cache.labels || [];
      let i2, ilen;
      if (timestamps.length) {
        return timestamps;
      }
      const labels = this.getLabels();
      for (i2 = 0, ilen = labels.length; i2 < ilen; ++i2) {
        timestamps.push(parse(this, labels[i2]));
      }
      return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
    }
    normalize(values) {
      return _arrayUnique(values.sort(sorter));
    }
  };
  function interpolate2(table, val, reverse) {
    let lo = 0;
    let hi2 = table.length - 1;
    let prevSource, nextSource, prevTarget, nextTarget;
    if (reverse) {
      if (val >= table[lo].pos && val <= table[hi2].pos) {
        ({ lo, hi: hi2 } = _lookupByKey(table, "pos", val));
      }
      ({ pos: prevSource, time: prevTarget } = table[lo]);
      ({ pos: nextSource, time: nextTarget } = table[hi2]);
    } else {
      if (val >= table[lo].time && val <= table[hi2].time) {
        ({ lo, hi: hi2 } = _lookupByKey(table, "time", val));
      }
      ({ time: prevSource, pos: prevTarget } = table[lo]);
      ({ time: nextSource, pos: nextTarget } = table[hi2]);
    }
    const span = nextSource - prevSource;
    return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
  }
  var TimeSeriesScale = class extends TimeScale {
    static id = "timeseries";
    static defaults = TimeScale.defaults;
    constructor(props) {
      super(props);
      this._table = [];
      this._minPos = void 0;
      this._tableRange = void 0;
    }
    initOffsets() {
      const timestamps = this._getTimestampsForTable();
      const table = this._table = this.buildLookupTable(timestamps);
      this._minPos = interpolate2(table, this.min);
      this._tableRange = interpolate2(table, this.max) - this._minPos;
      super.initOffsets(timestamps);
    }
    buildLookupTable(timestamps) {
      const { min, max } = this;
      const items = [];
      const table = [];
      let i2, ilen, prev, curr, next;
      for (i2 = 0, ilen = timestamps.length; i2 < ilen; ++i2) {
        curr = timestamps[i2];
        if (curr >= min && curr <= max) {
          items.push(curr);
        }
      }
      if (items.length < 2) {
        return [
          {
            time: min,
            pos: 0
          },
          {
            time: max,
            pos: 1
          }
        ];
      }
      for (i2 = 0, ilen = items.length; i2 < ilen; ++i2) {
        next = items[i2 + 1];
        prev = items[i2 - 1];
        curr = items[i2];
        if (Math.round((next + prev) / 2) !== curr) {
          table.push({
            time: curr,
            pos: i2 / (ilen - 1)
          });
        }
      }
      return table;
    }
    _generate() {
      const min = this.min;
      const max = this.max;
      let timestamps = super.getDataTimestamps();
      if (!timestamps.includes(min) || !timestamps.length) {
        timestamps.splice(0, 0, min);
      }
      if (!timestamps.includes(max) || timestamps.length === 1) {
        timestamps.push(max);
      }
      return timestamps.sort((a2, b2) => a2 - b2);
    }
    _getTimestampsForTable() {
      let timestamps = this._cache.all || [];
      if (timestamps.length) {
        return timestamps;
      }
      const data2 = this.getDataTimestamps();
      const label = this.getLabelTimestamps();
      if (data2.length && label.length) {
        timestamps = this.normalize(data2.concat(label));
      } else {
        timestamps = data2.length ? data2 : label;
      }
      timestamps = this._cache.all = timestamps;
      return timestamps;
    }
    getDecimalForValue(value) {
      return (interpolate2(this._table, value) - this._minPos) / this._tableRange;
    }
    getValueForPixel(pixel) {
      const offsets = this._offsets;
      const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
      return interpolate2(this._table, decimal * this._tableRange + this._minPos, true);
    }
  };
  var scales = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale
  });
  var registerables = [
    controllers,
    elements,
    plugins,
    scales
  ];

  // node_modules/chart.js/auto/auto.js
  Chart.register(...registerables);
  var auto_default = Chart;

  // lib/lesli_assets_js/application.js
  var import_lesli_chart = __toESM(require_lesli_chart());
  var import_browser = __toESM(require_browser2());
  window.dayjs = import_dayjs.default;
  window.debug = import_browser.default;
  window.Alpine = module_default;
  window.ChartJs = auto_default;
  window.LesliChart = import_lesli_chart.default;
  module_default.start();
  import_browser.default.info("Ruby on Rails SaaS Development Framework", "Lesli");
})();
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
/*! Bundled license information:

lesli-js/src/debug/utils.js:
lesli-js/debug/browser.js:
  (*
  Lesli
  
  Copyright (c) 2021, Lesli Technologies, S. A.
  
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  GNU General Public License for more details.
  
  You should have received a copy of the GNU General Public License
  along with this program. If not, see <http://www.gnu.org/licenses/>.
  
  Lesli JS - JavaScript utilities for JavaScript applications
  
  Powered by LesliTech
  Building a better future, one line of code at a time.
  
  @contact  <hello@lesli.tech>
  @website  <https://lesli.tech>
  @license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html
  
  // · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
  // · 
  *)

lesli-js/src/debug/browser.js:
  (*
  Lesli
  
  Copyright (c) 2020, Lesli Technologies, S. A.
  
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  GNU General Public License for more details.
  
  You should have received a copy of the GNU General Public License
  along with this program. If not, see <http://www.gnu.org/licenses/>.
  
  Lesli JS - JavaScript utilities for JavaScript applications
  
  Powered by LesliTech
  Building a better future, one line of code at a time.
  
  @contact  <hello@lesli.tech>
  @website  <https://lesli.tech>
  @license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html
  
  // · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
  // · 
  *)

trix/dist/trix.esm.min.js:
  (*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE *)

@kurkle/color/dist/color.esm.js:
  (*!
   * @kurkle/color v0.3.4
   * https://github.com/kurkle/color#readme
   * (c) 2024 Jukka Kurkela
   * Released under the MIT License
   *)

chart.js/dist/chunks/helpers.dataset.js:
chart.js/dist/chart.js:
  (*!
   * Chart.js v4.5.1
   * https://www.chartjs.org
   * (c) 2025 Chart.js Contributors
   * Released under the MIT License
   *)
*/
