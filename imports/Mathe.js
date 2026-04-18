(function () {
  function getRootWindow() {
    let w = window;
    try {
      while (w.parent && w.parent !== w) w = w.parent;
    } catch (e) {}
    return w;
  }

  const ROOT = getRootWindow();
  const STORE_KEY = "__LIA_FRACTION_QUIZ_V3__";
  const STYLE_ID = "__LIA_FRACTION_QUIZ_STYLE_V3__";
  const DEBUG_OBSERVER_KEY = "__LIA_FQ_DEBUG_DOM_OBSERVER_V1__";
  const DEBUG_FQ = true;

function fqdbg(tag) {
  if (!DEBUG_FQ) return;

  const keep =
    tag === "quiz-reveal-click" ||
    tag === "quiz-observer-detected-revealed" ||
    tag === "markRevealed:before" ||
    tag === "markRevealed:after" ||
    tag === "applySolution:start" ||
    tag === "applySolution:end" ||
    tag === "dom-mutation" ||
    tag === "wrap-replaced" ||
    tag === "host-replaced" ||
    tag === "mount-replaced" ||
    tag === "circle-input-replaced" ||
    tag === "rows-input-replaced" ||
    tag === "cols-input-replaced" ||
    tag === "circle-input-event" ||
    tag === "rect-rows-event" ||
    tag === "rect-cols-event" ||
    tag === "register:start" ||
    tag === "register:end";

  if (!keep) return;

  try {
    const args = Array.prototype.slice.call(arguments, 1);
    console.log("[FQDBG]", tag, ...args);
  } catch (e) {}
}

  function getDoc() {
    try {
      if (ROOT && ROOT.document) return ROOT.document;
    } catch (e) {}
    return document;
  }

  function clampInt(value, min, max, fallback) {
    let n = parseInt(value, 10);
    if (!Number.isFinite(n)) n = fallback;
    if (!Number.isFinite(n)) n = min;
    if (n < min) n = min;
    if (n > max) n = max;
    return n | 0;
  }

  function gcd(a, b) {
    a = Math.abs(a | 0);
    b = Math.abs(b | 0);
    while (b) {
      const t = a % b;
      a = b;
      b = t;
    }
    return a || 1;
  }

  function fractionFromDecimalString(str) {
    const s = String(str == null ? "" : str).trim().replace(",", ".");
    if (!s) return { num: 0, den: 1 };

    if (/e/i.test(s)) {
      const x = Number(s);
      if (!Number.isFinite(x)) return { num: 0, den: 1 };
      const fixed = x.toFixed(12).replace(/0+$/, "").replace(/\.$/, "");
      return fractionFromDecimalString(fixed);
    }

    if (!/^[-+]?\d*(?:\.\d+)?$/.test(s)) {
      return { num: 0, den: 1 };
    }

    const sign = s.startsWith("-") ? -1 : 1;
    const unsigned = s.replace(/^[-+]/, "");
    const parts = unsigned.split(".");
    const intPart = parts[0] || "0";
    const fracPart = parts[1] || "";

    if (!fracPart) {
      return { num: sign * parseInt(intPart, 10), den: 1 };
    }

    const den = Math.pow(10, fracPart.length);
    const num = sign * (parseInt(intPart, 10) * den + parseInt(fracPart, 10));
    return { num, den };
  }

  function normalizeFractionInfo(raw) {
    let num = 0;
    let den = 1;
    const original = raw;

    if (raw && typeof raw === "object" && Number.isFinite(raw.num) && Number.isFinite(raw.den)) {
      num = raw.num;
      den = raw.den;
    } else if (typeof raw === "number") {
      const f = fractionFromDecimalString(String(raw));
      num = f.num;
      den = f.den;
    } else {
      const s0 = String(raw == null ? "" : raw).trim();
      const s = s0.replace(/^\((.*)\)$/, "$1").trim();

      if (s.includes("/")) {
        const m = s.match(/^\s*([-+]?\d+)\s*\/\s*([-+]?\d+)\s*$/);
        if (m) {
          num = parseInt(m[1], 10);
          den = parseInt(m[2], 10);
        } else {
          const f = fractionFromDecimalString(s);
          num = f.num;
          den = f.den;
        }
      } else {
        const f = fractionFromDecimalString(s);
        num = f.num;
        den = f.den;
      }
    }

    if (!Number.isFinite(num)) num = 0;
    if (!Number.isFinite(den) || den === 0) den = 1;
    if (den < 0) {
      num = -num;
      den = -den;
    }

    const g = gcd(num, den);
    num = num / g;
    den = den / g;

    if (num < 0) num = 0;
    if (num > den) num = den;

    return {
      num,
      den,
      value: den ? num / den : 0,
      raw: original
    };
  }

  function bestFactorPair(n) {
    n = Math.max(1, n | 0);
    let bestA = 1;
    let bestB = n;
    let bestDiff = Math.abs(bestB - bestA);

    for (let a = 1; a * a <= n; a++) {
      if (n % a !== 0) continue;
      const b = n / a;
      const diff = Math.abs(b - a);
      if (diff < bestDiff) {
        bestA = a;
        bestB = b;
        bestDiff = diff;
      }
    }

    return {
      cols: Math.min(bestA, bestB),
      rows: Math.max(bestA, bestB)
    };
  }

  function boolArray(length, source) {
    const n = Math.max(1, length | 0);
    const out = Array(n).fill(false);
    if (Array.isArray(source)) {
      for (let i = 0; i < Math.min(n, source.length); i++) out[i] = !!source[i];
    }
    return out;
  }

  function injectStyleOnce() {
    const DOC = getDoc();
    if (!DOC || !DOC.head) return;
    if (DOC.getElementById(STYLE_ID)) return;

    const css = `
:root{
  --fq-track: rgba(0,0,0,.20);
  --fq-thumb: rgba(0,0,0,.88);
  --fq-ring: rgba(255,255,255,.90);
  --fq-mark: orange;
  --fq-stroke: #000000;
  --fq-fill: #ffffff;
  --fq-disabled: .58;

  --fq-w: 200px;
  --fq-h: 30px;
  --fq-track-h: 4px;
  --fq-thumb-sz: 12px;
  --fq-label-size: 18px;
  --fq-label-top: -7px;
}
@media (prefers-color-scheme: dark){
  :root{
    --fq-track: rgba(255,255,255,.22);
    --fq-thumb: rgba(255,255,255,.92);
    --fq-ring: rgba(0,0,0,.75);
    --fq-stroke: #000000;
    --fq-fill: #ffffff;
  }
}

.fq-widget{
  display:inline-block;
}

.fq-mount svg{
  display:block;
}

.fq-clickable{
  cursor:pointer;
}

.fq-widget[data-fq-locked="1"] .fq-clickable,
.fq-widget[data-fq-locked="1"] [data-fq-part]{
  cursor:default !important;
}

.fq-widget[data-fq-locked="1"] .fq-range,
.fq-widget[data-fq-locked="1"] .fq-range input[type="range"]{
  pointer-events:none !important;
}

.fq-widget[data-fq-locked="1"] .fq-range{
  opacity:var(--fq-disabled);
}

.fq-range{
  width:var(--fq-w);
  max-width:var(--fq-w);
  height:var(--fq-h);
  position:relative;
  margin:6px 0 12px 0;
  user-select:none;
}

.fq-range::before{
  content:attr(data-label);
  position:absolute;
  left:0;
  right:0;
  top:var(--fq-label-top);
  text-align:center;
  font-size:var(--fq-label-size);
  font-weight: 700;
  line-height:1;
  opacity:.85;
  pointer-events:none;
  z-index:2;
}

.fq-range .lia-input{
  width:var(--fq-w) !important;
  max-width:var(--fq-w) !important;
  height:var(--fq-h) !important;
  margin:0 !important;
  padding:0 !important;
  display:flex !important;
  align-items:center !important;
  font-size:0 !important;
  line-height:0 !important;
  min-height:0 !important;
}

.fq-range button,
.fq-range output,
.fq-range input[type="number"],
.fq-range .lia-input-value,
.fq-range .lia-value,
.fq-range .lia-input-output,
.fq-range .lia-input-label,
.fq-range .lia-input-reset,
.fq-range .lia-input-prefix,
.fq-range .lia-input-suffix{
  display:none !important;
}

.fq-range input[type="range"]{
  width:var(--fq-w) !important;
  max-width:var(--fq-w) !important;
  height:var(--fq-h) !important;
  margin:0 !important;
  padding:0 !important;
  background:transparent;
  -webkit-appearance:none;
  appearance:none;
  -webkit-tap-highlight-color:transparent;
  touch-action:none;
  position:relative;
  z-index:1;
}

.fq-range input[type="range"]::-webkit-slider-runnable-track{
  height:var(--fq-track-h);
  border-radius:999px;
  background:var(--fq-track);
}

.fq-range input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance:none;
  appearance:none;
  width:var(--fq-thumb-sz);
  height:var(--fq-thumb-sz);
  border-radius:50%;
  background:var(--fq-thumb);
  border:2px solid var(--fq-ring);
  margin-top:calc((var(--fq-track-h) - var(--fq-thumb-sz)) / 2);
}

.fq-range input[type="range"]::-moz-range-track{
  height:var(--fq-track-h);
  border-radius:999px;
  background:var(--fq-track);
}

.fq-range input[type="range"]::-moz-range-thumb{
  width:var(--fq-thumb-sz);
  height:var(--fq-thumb-sz);
  border-radius:50%;
  background:var(--fq-thumb);
  border:2px solid var(--fq-ring);
}
    `.trim();

    const style = DOC.createElement("style");
    style.id = STYLE_ID;
    style.textContent = css;
    DOC.head.appendChild(style);
  }

  function fqNodeLabel(node) {
    if (!node) return "(null)";
    if (node.nodeType !== 1) return "(" + node.nodeName + ")";
    const id = node.id ? "#" + node.id : "";
    const cls = node.className && typeof node.className === "string"
      ? "." + node.className.trim().replace(/\s+/g, ".")
      : "";
    return node.tagName.toLowerCase() + id + cls;
  }

  function fqNodeTouchesWidget(node) {
    if (!node || node.nodeType !== 1) return false;
    if ((node.id && /^fq-/.test(node.id))) return true;
    if (node.classList) {
      if (
        node.classList.contains("fq-widget") ||
        node.classList.contains("fq-mount") ||
        node.classList.contains("fq-range")
      ) return true;
    }
    try {
      return !!node.querySelector('[id^="fq-"], .fq-widget, .fq-mount, .fq-range');
    } catch (e) {
      return false;
    }
  }

  function installDebugDomObserverOnce() {
    if (!DEBUG_FQ) return;
    if (ROOT[DEBUG_OBSERVER_KEY]) return;
    if (typeof MutationObserver === "undefined") return;

    const DOC = document;
    const target = DOC.body || DOC.documentElement;
    if (!target) return;

    const obs = new MutationObserver((mutations) => {
      for (let i = 0; i < mutations.length; i++) {
        const m = mutations[i];
        if (m.type !== "childList") continue;

        const added = [];
        const removed = [];

        for (let j = 0; j < m.addedNodes.length; j++) {
          const n = m.addedNodes[j];
          if (fqNodeTouchesWidget(n)) added.push(fqNodeLabel(n));
        }

        for (let j = 0; j < m.removedNodes.length; j++) {
          const n = m.removedNodes[j];
          if (fqNodeTouchesWidget(n)) removed.push(fqNodeLabel(n));
        }

        if (added.length || removed.length) {
          fqdbg("dom-mutation", {
            target: fqNodeLabel(m.target),
            added: added,
            removed: removed
          });
        }
      }
    });

    obs.observe(target, {
      childList: true,
      subtree: true
    });

    ROOT[DEBUG_OBSERVER_KEY] = obs;
    fqdbg("debug-dom-observer-installed");
  }

  injectStyleOnce();
  installDebugDomObserverOnce();

  if (!ROOT[STORE_KEY]) {
    ROOT[STORE_KEY] = {
      version: 3,
      circle: Object.create(null),
      rect: Object.create(null),
      rectDims: Object.create(null),
      meta: Object.create(null),
      nodes: Object.create(null),

      getMeta(uid, kind) {
        uid = String(uid == null ? "" : uid);
        if (!this.meta[uid]) {
          this.meta[uid] = {
            uid,
            kind: kind || "",
            target: { num: 0, den: 1, value: 0, raw: "0" },
            locked: false,
            solved: false,
            revealed: false,
            ready: false
          };
          fqdbg("meta-created", uid, { kind: kind || "" });
        }
        if (kind) this.meta[uid].kind = kind;
        return this.meta[uid];
      },

      getNodes(uid) {
        uid = String(uid == null ? "" : uid);
        if (!this.nodes[uid]) {
          this.nodes[uid] = {
            uid,
            kind: "",
            wrap: null,
            host: null,
            mount: null,
            circleInput: null,
            rowsInput: null,
            colsInput: null,
            observer: null,
            _quizScope: null,
            _quizClickHandler: null,
            _quizBridgeInstalled: false
          };
          fqdbg("nodes-created", uid);
        }
        return this.nodes[uid];
      },

      refreshNodes(uid) {
        uid = String(uid == null ? "" : uid);
        const nodes = this.getNodes(uid);

        const prevWrap = nodes.wrap;
        const prevHost = nodes.host;
        const prevMount = nodes.mount;
        const prevCircleInput = nodes.circleInput;
        const prevRowsInput = nodes.rowsInput;
        const prevColsInput = nodes.colsInput;

        const circleWrap = document.getElementById("fq-circle-wrap-" + uid);
        const rectWrap = document.getElementById("fq-rect-wrap-" + uid);

        if (circleWrap) {
          nodes.kind = "circle";
          nodes.wrap = circleWrap;
          nodes.host = document.getElementById("fq-circle-host-" + uid);
          nodes.mount = document.getElementById("fq-circle-mount-" + uid);

          const rangeWrap = document.getElementById("fq-circle-range-" + uid);
          nodes.circleInput = rangeWrap ? rangeWrap.querySelector('input[type="range"]') : null;
          nodes.rowsInput = null;
          nodes.colsInput = null;
        } else if (rectWrap) {
          nodes.kind = "rect";
          nodes.wrap = rectWrap;
          nodes.host = document.getElementById("fq-rect-host-" + uid);
          nodes.mount = document.getElementById("fq-rect-mount-" + uid);

          const rowsWrap = document.getElementById("fq-rect-rows-wrap-" + uid);
          const colsWrap = document.getElementById("fq-rect-cols-wrap-" + uid);

          nodes.rowsInput = rowsWrap ? rowsWrap.querySelector('input[type="range"]') : null;
          nodes.colsInput = colsWrap ? colsWrap.querySelector('input[type="range"]') : null;
          nodes.circleInput = null;
        } else {
          nodes.wrap = null;
          nodes.host = null;
          nodes.mount = null;
          nodes.circleInput = null;
          nodes.rowsInput = null;
          nodes.colsInput = null;
        }

        if (prevWrap && prevWrap !== nodes.wrap) fqdbg("wrap-replaced", uid, nodes.kind, fqNodeLabel(nodes.wrap));
        if (!prevWrap && nodes.wrap) fqdbg("wrap-found", uid, nodes.kind, fqNodeLabel(nodes.wrap));

        if (prevHost && prevHost !== nodes.host) fqdbg("host-replaced", uid, nodes.kind, fqNodeLabel(nodes.host));
        if (prevMount && prevMount !== nodes.mount) fqdbg("mount-replaced", uid, nodes.kind, fqNodeLabel(nodes.mount));

        if (prevCircleInput && prevCircleInput !== nodes.circleInput) fqdbg("circle-input-replaced", uid);
        if (prevRowsInput && prevRowsInput !== nodes.rowsInput) fqdbg("rows-input-replaced", uid);
        if (prevColsInput && prevColsInput !== nodes.colsInput) fqdbg("cols-input-replaced", uid);

        if (nodes.circleInput) this.bindCircleInput(uid, nodes.circleInput);
        if (nodes.rowsInput || nodes.colsInput) this.bindRectInputs(uid, nodes.rowsInput, nodes.colsInput);

        if (nodes.wrap) this.ensureQuizBridge(uid, nodes.wrap);

        return nodes;
      },

      parseTarget(raw) {
        return normalizeFractionInfo(raw);
      },

      setTarget(uid, raw, kind) {
        const meta = this.getMeta(uid, kind);
        meta.target = normalizeFractionInfo(raw);
        fqdbg("setTarget", uid, {
          kind: meta.kind,
          target: meta.target
        });
        return meta.target;
      },

      ensureCircle(uid, parts, options) {
        const opts = options || {};
        const meta = this.getMeta(uid, "circle");
        const n = clampInt(parts, 1, 32, 1);
        const prev = Array.isArray(this.circle[uid]) ? this.circle[uid] : [];
        this.circle[uid] = boolArray(n, opts.preserve ? prev : null);
        meta.parts = n;
        meta.kind = "circle";

        fqdbg("ensureCircle", uid, {
          parts: n,
          preserve: !!opts.preserve,
          selected: this.countSelected(uid)
        });

        return this.circle[uid];
      },

      ensureRect(uid, rows, cols, options) {
        const opts = options || {};
        const meta = this.getMeta(uid, "rect");
        const r = clampInt(rows, 1, 20, 1);
        const c = clampInt(cols, 1, 20, 1);
        const total = r * c;
        const prev = Array.isArray(this.rect[uid]) ? this.rect[uid] : [];
        this.rectDims[uid] = { rows: r, cols: c };
        this.rect[uid] = boolArray(total, opts.preserve ? prev : null);
        meta.rows = r;
        meta.cols = c;
        meta.kind = "rect";

        fqdbg("ensureRect", uid, {
          rows: r,
          cols: c,
          preserve: !!opts.preserve,
          selected: this.countSelected(uid)
        });

        return this.rect[uid];
      },

      setCircleParts(uid, parts, options) {
        const meta = this.getMeta(uid, "circle");
        if (meta.locked && !(options && options.force)) {
          fqdbg("setCircleParts-blocked-locked", uid, { parts: parts });
          return this.circle[uid] || this.ensureCircle(uid, 1);
        }
        return this.ensureCircle(uid, parts, options);
      },

      setRectDims(uid, rows, cols, options) {
        const meta = this.getMeta(uid, "rect");
        if (meta.locked && !(options && options.force)) {
          fqdbg("setRectDims-blocked-locked", uid, {
            rows: rows,
            cols: cols
          });
          return this.rect[uid] || this.ensureRect(uid, 1, 1);
        }
        return this.ensureRect(uid, rows, cols, options);
      },

      buildCircleSolution(targetRaw) {
        const t = normalizeFractionInfo(targetRaw);
        const parts = Math.max(1, t.den | 0);
        const active = Array(parts).fill(false);
        for (let i = 0; i < Math.min(parts, t.num | 0); i++) active[i] = true;
        return { type: "circle", target: t, parts, active };
      },

      buildRectSolution(targetRaw) {
        const t = normalizeFractionInfo(targetRaw);
        const pair = bestFactorPair(t.den);
        const rows = pair.rows;
        const cols = pair.cols;
        const total = rows * cols;
        const active = Array(total).fill(false);
        for (let i = 0; i < Math.min(total, t.num | 0); i++) active[i] = true;
        return { type: "rect", target: t, rows, cols, active };
      },

      getSolution(uid) {
        const meta = this.getMeta(uid);
        if (meta.kind === "circle") return this.buildCircleSolution(meta.target);
        if (meta.kind === "rect") return this.buildRectSolution(meta.target);
        return null;
      },

      isLocked(uid) {
        return !!this.getMeta(uid).locked;
      },

      toggleCircle(uid, index) {
        const meta = this.getMeta(uid, "circle");
        if (meta.locked || !meta.ready) {
          fqdbg("toggleCircle-blocked", uid, {
            locked: !!meta.locked,
            ready: !!meta.ready,
            index: index
          });
          return false;
        }
        const arr = Array.isArray(this.circle[uid]) ? this.circle[uid] : this.ensureCircle(uid, meta.parts || 1);
        const i = index | 0;
        if (i < 0 || i >= arr.length) return false;
        arr[i] = !arr[i];

        fqdbg("toggleCircle", uid, {
          index: i,
          value: arr[i],
          total: arr.length,
          selected: this.countSelected(uid)
        });

        return arr[i];
      },

      toggleRect(uid, index) {
        const meta = this.getMeta(uid, "rect");
        if (meta.locked || !meta.ready) {
          fqdbg("toggleRect-blocked", uid, {
            locked: !!meta.locked,
            ready: !!meta.ready,
            index: index
          });
          return false;
        }
        const dims = this.rectDims[uid] || { rows: meta.rows || 1, cols: meta.cols || 1 };
        const arr = Array.isArray(this.rect[uid]) ? this.rect[uid] : this.ensureRect(uid, dims.rows, dims.cols);
        const i = index | 0;
        if (i < 0 || i >= arr.length) return false;
        arr[i] = !arr[i];

        fqdbg("toggleRect", uid, {
          index: i,
          value: arr[i],
          rows: dims.rows,
          cols: dims.cols,
          selected: this.countSelected(uid)
        });

        return arr[i];
      },

      countSelected(uid) {
        const meta = this.getMeta(uid);
        const arr = meta.kind === "rect" ? this.rect[uid] : this.circle[uid];
        if (!Array.isArray(arr) || !arr.length) return 0;
        let k = 0;
        for (let i = 0; i < arr.length; i++) if (arr[i]) k++;
        return k;
      },

      countTotal(uid) {
        const meta = this.getMeta(uid);
        const arr = meta.kind === "rect" ? this.rect[uid] : this.circle[uid];
        return Array.isArray(arr) && arr.length ? arr.length : 1;
      },

      getRatio(uid) {
        const total = this.countTotal(uid);
        const selected = this.countSelected(uid);
        return total ? selected / total : 0;
      },

      isCorrect(uid) {
        const meta = this.getMeta(uid);
        if (!meta.ready) return false;
        const t = meta.target || { num: 0, den: 1 };
        const total = this.countTotal(uid);
        const selected = this.countSelected(uid);
        return selected * t.den === t.num * total;
      },

      lock(uid) {
        const meta = this.getMeta(uid);
        meta.locked = true;
        fqdbg("lock", uid, { kind: meta.kind });
        this.syncDomState(uid);
        return true;
      },

      markSolved(uid) {
        const meta = this.getMeta(uid);
        if (!meta.ready) return false;

        fqdbg("markSolved:before", uid, {
          kind: meta.kind,
          rectDims: this.rectDims[uid] || null,
          circleLen: this.circle[uid] ? this.circle[uid].length : null,
          selected: this.countSelected(uid)
        });

        meta.solved = true;
        meta.revealed = false;
        meta.locked = true;
        this.syncDomState(uid);
        this.render(uid);

        fqdbg("markSolved:after", uid, {
          kind: meta.kind,
          rectDims: this.rectDims[uid] || null,
          circleLen: this.circle[uid] ? this.circle[uid].length : null,
          selected: this.countSelected(uid)
        });

        return true;
      },

      applySolution(uid) {
        const meta = this.getMeta(uid);
        const sol = this.getSolution(uid);
        if (!sol) return null;

        fqdbg("applySolution:start", uid, {
          kind: meta.kind,
          solution: sol
        });

        if (sol.type === "circle") {
          this.setCircleParts(uid, sol.parts, { force: true, preserve: false });
          this.circle[uid] = boolArray(sol.parts, sol.active);
          meta.parts = sol.parts;
        } else {
          this.setRectDims(uid, sol.rows, sol.cols, { force: true, preserve: false });
          this.rect[uid] = boolArray(sol.rows * sol.cols, sol.active);
          this.rectDims[uid] = { rows: sol.rows, cols: sol.cols };
          meta.rows = sol.rows;
          meta.cols = sol.cols;
        }

        this.syncInputs(uid, true);
        this.render(uid);

        fqdbg("applySolution:end", uid, {
          kind: meta.kind,
          rectDims: this.rectDims[uid] || null,
          circleLen: this.circle[uid] ? this.circle[uid].length : null,
          selected: this.countSelected(uid)
        });

        return sol;
      },

      markRevealed(uid) {
        const meta = this.getMeta(uid);
        if (!meta.ready) return false;

        if (meta.revealed && meta.locked) {
          fqdbg("markRevealed-skip-already-revealed", uid);
          return true;
        }

        fqdbg("markRevealed:before", uid, {
          kind: meta.kind,
          locked: meta.locked,
          revealed: meta.revealed,
          solved: meta.solved,
          rectDims: this.rectDims[uid] || null,
          circleLen: this.circle[uid] ? this.circle[uid].length : null,
          selected: this.countSelected(uid)
        });

        meta.revealed = true;
        meta.solved = false;
        meta.locked = true;
        this.applySolution(uid);
        this.syncDomState(uid);

        fqdbg("markRevealed:after", uid, {
          kind: meta.kind,
          locked: meta.locked,
          revealed: meta.revealed,
          solved: meta.solved,
          rectDims: this.rectDims[uid] || null,
          circleLen: this.circle[uid] ? this.circle[uid].length : null,
          selected: this.countSelected(uid)
        });

        return true;
      },

      register(uid, options) {
        const opts = options || {};
        const kind = opts.kind || "";
        const meta = this.getMeta(uid, kind);
        const nodes = this.getNodes(uid);

        fqdbg("register:start", uid, {
          kind: kind,
          initialParts: opts.initialParts,
          initialRows: opts.initialRows,
          initialCols: opts.initialCols,
          hadCircleState: Array.isArray(this.circle[uid]) ? this.circle[uid].length : 0,
          hadRectState: Array.isArray(this.rect[uid]) ? this.rect[uid].length : 0,
          rectDims: this.rectDims[uid] || null
        });

        if (kind) nodes.kind = kind;
        if (opts.wrap) nodes.wrap = opts.wrap;
        if (opts.host) nodes.host = opts.host;
        if (opts.mount) nodes.mount = opts.mount;
        if (opts.circleInput) nodes.circleInput = opts.circleInput;
        if (opts.rowsInput) nodes.rowsInput = opts.rowsInput;
        if (opts.colsInput) nodes.colsInput = opts.colsInput;

        if (opts.target !== undefined) this.setTarget(uid, opts.target, kind || meta.kind);

        if (kind === "circle") {
          const hasCircleState =
            Array.isArray(this.circle[uid]) &&
            this.circle[uid].length > 0;

          if (!hasCircleState) {
            this.ensureCircle(
              uid,
              opts.initialParts != null ? opts.initialParts : 1,
              { preserve: false }
            );
          } else {
            meta.parts = this.circle[uid].length;
            meta.kind = "circle";
          }
        } else if (kind === "rect") {
          const dims = this.rectDims[uid];
          const hasRectState =
            !!dims &&
            Array.isArray(this.rect[uid]) &&
            this.rect[uid].length ===
              clampInt(dims.rows, 1, 20, 1) * clampInt(dims.cols, 1, 20, 1);

          if (!hasRectState) {
            this.ensureRect(
              uid,
              opts.initialRows != null ? opts.initialRows : 1,
              opts.initialCols != null ? opts.initialCols : 1,
              { preserve: false }
            );
          } else {
            meta.rows = clampInt(dims.rows, 1, 20, 1);
            meta.cols = clampInt(dims.cols, 1, 20, 1);
            meta.kind = "rect";
          }
        }

        if (nodes.circleInput) this.bindCircleInput(uid, nodes.circleInput);
        if (nodes.rowsInput || nodes.colsInput) this.bindRectInputs(uid, nodes.rowsInput, nodes.colsInput);

        meta.ready = true;
        this.syncInputs(uid, true);
        this.syncDomState(uid);
        this.render(uid);

        fqdbg("register:end", uid, {
          kind: meta.kind,
          rectDims: this.rectDims[uid] || null,
          circleLen: this.circle[uid] ? this.circle[uid].length : null,
          selected: this.countSelected(uid)
        });

        return nodes;
      },

      attachCircle(uid, options) {
        const opts = Object.assign({}, options || {}, { kind: "circle" });
        fqdbg("attachCircle", uid);
        return this.register(uid, opts);
      },

      attachRect(uid, options) {
        const opts = Object.assign({}, options || {}, { kind: "rect" });
        fqdbg("attachRect", uid);
        return this.register(uid, opts);
      },

      bindCircleInput(uid, input) {
        if (!input || input.__fqCircleBoundUid === uid) return;
        input.__fqCircleBoundUid = uid;

        fqdbg("bindCircleInput", uid);

        const handler = () => {
          fqdbg("circle-input-event", uid, {
            value: input.value,
            locked: this.isLocked(uid)
          });

          if (this.isLocked(uid)) {
            this.syncInputs(uid, true);
            return;
          }
          const value = clampInt(input.value, 1, 32, 1);
          this.setCircleParts(uid, value, { preserve: false });
          this.render(uid);
        };

        input.addEventListener("input", handler, true);
        input.addEventListener("change", handler, true);
      },

      bindRectInputs(uid, rowsInput, colsInput) {
        if (rowsInput && rowsInput.__fqRectRowsBoundUid !== uid) {
          rowsInput.__fqRectRowsBoundUid = uid;
          fqdbg("bindRectRowsInput", uid);

          const handlerRows = () => {
            fqdbg("rect-rows-event", uid, {
              rowsValue: rowsInput ? rowsInput.value : null,
              colsValue: colsInput ? colsInput.value : null,
              locked: this.isLocked(uid)
            });

            if (this.isLocked(uid)) {
              this.syncInputs(uid, true);
              return;
            }
            const rows = clampInt(rowsInput.value, 1, 20, 1);
            const cols = colsInput ? clampInt(colsInput.value, 1, 20, 1) : ((this.rectDims[uid] && this.rectDims[uid].cols) || 1);
            this.setRectDims(uid, rows, cols, { preserve: false });
            this.render(uid);
          };

          rowsInput.addEventListener("input", handlerRows, true);
          rowsInput.addEventListener("change", handlerRows, true);
        }

        if (colsInput && colsInput.__fqRectColsBoundUid !== uid) {
          colsInput.__fqRectColsBoundUid = uid;
          fqdbg("bindRectColsInput", uid);

          const handlerCols = () => {
            fqdbg("rect-cols-event", uid, {
              rowsValue: rowsInput ? rowsInput.value : null,
              colsValue: colsInput ? colsInput.value : null,
              locked: this.isLocked(uid)
            });

            if (this.isLocked(uid)) {
              this.syncInputs(uid, true);
              return;
            }
            const cols = clampInt(colsInput.value, 1, 20, 1);
            const rows = rowsInput ? clampInt(rowsInput.value, 1, 20, 1) : ((this.rectDims[uid] && this.rectDims[uid].rows) || 1);
            this.setRectDims(uid, rows, cols, { preserve: false });
            this.render(uid);
          };

          colsInput.addEventListener("input", handlerCols, true);
          colsInput.addEventListener("change", handlerCols, true);
        }
      },

      syncInputs(uid, forceValue) {
        const nodes = this.refreshNodes(uid);
        const meta = this.getMeta(uid);
        const force = !!forceValue;

        fqdbg("syncInputs:start", uid, meta.kind, {
          force: force,
          locked: !!meta.locked
        });

        if (meta.kind === "circle" && nodes.circleInput) {
          const parts = (this.circle[uid] && this.circle[uid].length) || meta.parts || 1;
          fqdbg("syncInputs:circle", uid, {
            domValue: nodes.circleInput.value,
            targetValue: String(parts),
            force: force
          });
          if (force || String(nodes.circleInput.value) !== String(parts)) nodes.circleInput.value = String(parts);
          nodes.circleInput.disabled = !!meta.locked;
        }

        if (meta.kind === "rect") {
          const dims = this.rectDims[uid] || { rows: meta.rows || 1, cols: meta.cols || 1 };

          if (nodes.rowsInput) {
            fqdbg("syncInputs:rectRows", uid, {
              domValue: nodes.rowsInput.value,
              targetValue: String(dims.rows),
              force: force
            });
            if (force || String(nodes.rowsInput.value) !== String(dims.rows)) nodes.rowsInput.value = String(dims.rows);
            nodes.rowsInput.disabled = !!meta.locked;
          }

          if (nodes.colsInput) {
            fqdbg("syncInputs:rectCols", uid, {
              domValue: nodes.colsInput.value,
              targetValue: String(dims.cols),
              force: force
            });
            if (force || String(nodes.colsInput.value) !== String(dims.cols)) nodes.colsInput.value = String(dims.cols);
            nodes.colsInput.disabled = !!meta.locked;
          }
        }
      },

      syncDomState(uid) {
        const nodes = this.refreshNodes(uid);
        const meta = this.getMeta(uid);
        const targets = [nodes.wrap, nodes.host, nodes.mount];

        fqdbg("syncDomState", uid, {
          kind: meta.kind,
          locked: !!meta.locked,
          solved: !!meta.solved,
          revealed: !!meta.revealed
        });

        for (let i = 0; i < targets.length; i++) {
          const el = targets[i];
          if (!el || !el.setAttribute) continue;
          el.setAttribute("data-fq-locked", meta.locked ? "1" : "0");
          el.setAttribute("data-fq-solved", meta.solved ? "1" : "0");
          el.setAttribute("data-fq-revealed", meta.revealed ? "1" : "0");
        }

        this.syncInputs(uid, false);
      },

      render(uid) {
        const nodes = this.refreshNodes(uid);
        const meta = this.getMeta(uid);
        if (!nodes.mount) {
          fqdbg("render-skip-no-mount", uid, meta.kind);
          return false;
        }

        fqdbg("render", uid, {
          kind: meta.kind,
          rectDims: this.rectDims[uid] || null,
          circleLen: this.circle[uid] ? this.circle[uid].length : null,
          selected: this.countSelected(uid)
        });

        if (meta.kind === "circle") return this.renderCircle(uid, nodes.mount);
        if (meta.kind === "rect") return this.renderRect(uid, nodes.mount);
        return false;
      },

      renderCircle(uid, mount) {
        const meta = this.getMeta(uid, "circle");
        const arr = Array.isArray(this.circle[uid]) ? this.circle[uid] : this.ensureCircle(uid, meta.parts || 1);
        const n = Math.max(1, arr.length | 0);
        const locked = !!meta.locked;

        const W = 200;
        const H = 200;
        const padding = 6;
        const cx = W / 2;
        const cy = H / 2;
        const r = Math.min(W, H) / 2 - padding;
        const step = 360 / n;
        const startOffset = -90;

        let slices = "";
        let lines = "";

        if (n === 1) {
          slices = `
            <circle
              data-fq-part="0"
              class="fq-clickable"
              cx="${cx}" cy="${cy}" r="${r}"
              fill="${arr[0] ? "var(--fq-mark)" : "transparent"}"
            ></circle>
          `;
        } else {
          for (let i = 0; i < n; i++) {
            const a0 = (startOffset + step * i) * Math.PI / 180;
            const a1 = (startOffset + step * (i + 1)) * Math.PI / 180;

            const x0 = cx + r * Math.cos(a0);
            const y0 = cy + r * Math.sin(a0);
            const x1 = cx + r * Math.cos(a1);
            const y1 = cy + r * Math.sin(a1);
            const largeArc = step > 180 ? 1 : 0;

            slices += `
              <path
                data-fq-part="${i}"
                class="fq-clickable"
                d="M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 ${largeArc},1 ${x1},${y1} Z"
                fill="${arr[i] ? "var(--fq-mark)" : "transparent"}"
              ></path>
            `;

            lines += `
              <line
                x1="${cx}" y1="${cy}" x2="${x0}" y2="${y0}"
                stroke="#000000" stroke-width="2"
              ></line>
            `;
          }
        }

        mount.innerHTML = `
          <svg class="fq-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" aria-hidden="true">
            <circle cx="${cx}" cy="${cy}" r="${r}" stroke="#000000" stroke-width="2" fill="#ffffff"></circle>
            ${slices}
            ${lines}
            <circle cx="${cx}" cy="${cy}" r="${r}" stroke="#000000" stroke-width="2" fill="none"></circle>
          </svg>
        `;

        mount.onclick = (evt) => {
          const el = evt.target && evt.target.closest ? evt.target.closest("[data-fq-part]") : null;
          if (!el || locked) return;
          const i = parseInt(el.getAttribute("data-fq-part"), 10);
          if (!Number.isFinite(i)) return;
          this.toggleCircle(uid, i);
          this.render(uid);
        };

        this.syncDomState(uid);
        return true;
      },

      renderRect(uid, mount) {
        const meta = this.getMeta(uid, "rect");
        const dims = this.rectDims[uid] || { rows: meta.rows || 1, cols: meta.cols || 1 };
        const arr = Array.isArray(this.rect[uid]) ? this.rect[uid] : this.ensureRect(uid, dims.rows, dims.cols);
        const rows = clampInt(dims.rows, 1, 20, 1);
        const cols = clampInt(dims.cols, 1, 20, 1);
        const locked = !!meta.locked;

        const W = 200;
        const H = 200;
        const padding = 6;
        const usableW = W - 2 * padding;
        const usableH = H - 2 * padding;
        const rw = usableW / cols;
        const rh = usableH / rows;

        let cells = "";
        let lines = "";

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const i = r * cols + c;
            const x = padding + c * rw;
            const y = padding + r * rh;

            cells += `
              <rect
                data-fq-part="${i}"
                class="fq-clickable"
                x="${x}" y="${y}" width="${rw}" height="${rh}"
                fill="${arr[i] ? "var(--fq-mark)" : "transparent"}"
              ></rect>
            `;
          }
        }

        for (let r = 0; r <= rows; r++) {
          const y = padding + r * rh;
          lines += `<line x1="${padding}" y1="${y}" x2="${W - padding}" y2="${y}" stroke="#000000" stroke-width="2"></line>`;
        }
        for (let c = 0; c <= cols; c++) {
          const x = padding + c * rw;
          lines += `<line x1="${x}" y1="${padding}" x2="${x}" y2="${H - padding}" stroke="#000000" stroke-width="2"></line>`;
        }

        mount.innerHTML = `
          <svg class="fq-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" aria-hidden="true">
            <rect x="0" y="0" width="${W}" height="${H}" fill="#ffffff" stroke="#000000" stroke-width="2"></rect>
            ${cells}
            ${lines}
          </svg>
        `;

        mount.onclick = (evt) => {
          const el = evt.target && evt.target.closest ? evt.target.closest("[data-fq-part]") : null;
          if (!el || locked) return;
          const i = parseInt(el.getAttribute("data-fq-part"), 10);
          if (!Number.isFinite(i)) return;
          this.toggleRect(uid, i);
          this.render(uid);
        };

        this.syncDomState(uid);
        return true;
      },

      _fqLabelOf(el) {
        if (!el) return "";
        const parts = [];
        try { parts.push(el.textContent || ""); } catch (e) {}
        try { if (el.className) parts.push(String(el.className)); } catch (e) {}

        const attrs = ["title", "aria-label", "data-action", "data-title", "name", "value"];
        for (let i = 0; i < attrs.length; i++) {
          try {
            const v = el.getAttribute && el.getAttribute(attrs[i]);
            if (v) parts.push(v);
          } catch (e) {}
        }

        return parts.join(" ").replace(/\s+/g, " ").trim().toLowerCase();
      },

      _fqIsRevealButton(el) {
        const s = this._fqLabelOf(el);
        return /(aufl|aufl[oö]sen|l[oö]sung|show solution|solution|resolve)/i.test(s);
      },

      _fqLooksRevealed(scope) {
        if (!scope || !scope.querySelector) return false;

        try {
          if (scope.querySelector('[data-state="resolved"], [data-revealed="true"], [data-state="revealed"]')) return true;
        } catch (e) {}

        const feedback = scope.querySelector(".lia-quiz__feedback, [class*='feedback']");
        const text = ((feedback && feedback.textContent) || "").toLowerCase();

        if (/(aufgel|aufl[oö]s|l[oö]sung|show solution|resolved|solution)/i.test(text)) return true;

        return false;
      },

      ensureQuizBridge(uid, scope) {
        const nodes = this.getNodes(uid);
        const meta = this.getMeta(uid);

        if (!scope) return;
        if (nodes._quizBridgeInstalled && nodes._quizScope === scope && scope.isConnected) return;

        if (nodes.observer) {
          try { nodes.observer.disconnect(); } catch (e) {}
          nodes.observer = null;
        }

        if (nodes._quizScope && nodes._quizClickHandler) {
          try { nodes._quizScope.removeEventListener("click", nodes._quizClickHandler, true); } catch (e) {}
        }

        const clickHandler = (evt) => {
          const btn = evt.target && evt.target.closest
            ? evt.target.closest("button, input[type='button'], input[type='submit']")
            : null;

          if (!btn) return;
          if (!this._fqIsRevealButton(btn)) return;
          if (!meta.ready) return;

          fqdbg("quiz-reveal-click", uid, {
            label: this._fqLabelOf(btn)
          });

          setTimeout(() => {
            this.markRevealed(uid);
          }, 0);
        };

        scope.addEventListener("click", clickHandler, true);

        let obs = null;
        if (typeof MutationObserver !== "undefined") {
          obs = new MutationObserver(() => {
            if (!meta.ready || meta.revealed) return;
            if (this._fqLooksRevealed(scope)) {
              fqdbg("quiz-observer-detected-revealed", uid);
              this.markRevealed(uid);
            }
          });

          try {
            obs.observe(scope, {
              subtree: true,
              childList: true,
              attributes: true,
              characterData: true
            });
          } catch (e) {
            obs = null;
          }
        }

        nodes._quizBridgeInstalled = true;
        nodes._quizScope = scope;
        nodes._quizClickHandler = clickHandler;
        nodes.observer = obs;

        fqdbg("ensureQuizBridge", uid, {
          scope: fqNodeLabel(scope)
        });
      },

      onCheck(uid, passed) {
        fqdbg("onCheck", uid, { passed: !!passed });
        if (passed) this.markSolved(uid);
        return !!passed;
      },

      onReveal(uid) {
        fqdbg("onReveal", uid);
        return this.markRevealed(uid);
      }
    };

    fqdbg("fraction-store-created");
  } else {
    fqdbg("fraction-store-reused");
  }

  ROOT.__LIA_FRACTION_QUIZ__ = ROOT[STORE_KEY];
  window.__LIA_FRACTION_QUIZ__ = ROOT[STORE_KEY];
})();

