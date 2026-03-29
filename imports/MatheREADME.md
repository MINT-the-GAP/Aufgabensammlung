<!--
version:  0.0.1
language: de
narrator: Deutsch Female
author: Martin Lommatzsch

comment: FractionQuizzes (circle+rect) — 200x200 + Label IM Slider (wie Button), nur Schieber (kein Reset/keine Zahlen), import-sicher, kein ||-Parsefehler





@onload
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
  --fq-label-size: 11px;
  --fq-label-top: 3px;
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

  injectStyleOnce();

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
        }
        return this.nodes[uid];
      },

      parseTarget(raw) {
        return normalizeFractionInfo(raw);
      },

      setTarget(uid, raw, kind) {
        const meta = this.getMeta(uid, kind);
        meta.target = normalizeFractionInfo(raw);
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
        return this.rect[uid];
      },

      setCircleParts(uid, parts, options) {
        const meta = this.getMeta(uid, "circle");
        if (meta.locked && !(options && options.force)) return this.circle[uid] || this.ensureCircle(uid, 1);
        return this.ensureCircle(uid, parts, options);
      },

      setRectDims(uid, rows, cols, options) {
        const meta = this.getMeta(uid, "rect");
        if (meta.locked && !(options && options.force)) return this.rect[uid] || this.ensureRect(uid, 1, 1);
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
        if (meta.locked || !meta.ready) return false;
        const arr = Array.isArray(this.circle[uid]) ? this.circle[uid] : this.ensureCircle(uid, meta.parts || 1);
        const i = index | 0;
        if (i < 0 || i >= arr.length) return false;
        arr[i] = !arr[i];
        return arr[i];
      },

      toggleRect(uid, index) {
        const meta = this.getMeta(uid, "rect");
        if (meta.locked || !meta.ready) return false;
        const dims = this.rectDims[uid] || { rows: meta.rows || 1, cols: meta.cols || 1 };
        const arr = Array.isArray(this.rect[uid]) ? this.rect[uid] : this.ensureRect(uid, dims.rows, dims.cols);
        const i = index | 0;
        if (i < 0 || i >= arr.length) return false;
        arr[i] = !arr[i];
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
        this.syncDomState(uid);
        return true;
      },

      markSolved(uid) {
        const meta = this.getMeta(uid);
        if (!meta.ready) return false;
        meta.solved = true;
        meta.revealed = false;
        meta.locked = true;
        this.syncDomState(uid);
        this.render(uid);
        return true;
      },

      applySolution(uid) {
        const meta = this.getMeta(uid);
        const sol = this.getSolution(uid);
        if (!sol) return null;

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
        return sol;
      },

      markRevealed(uid) {
        const meta = this.getMeta(uid);
        if (!meta.ready) return false;
        meta.revealed = true;
        meta.solved = false;
        meta.locked = true;
        this.applySolution(uid);
        this.syncDomState(uid);
        return true;
      },

      register(uid, options) {
        const opts = options || {};
        const kind = opts.kind || "";
        const meta = this.getMeta(uid, kind);
        const nodes = this.getNodes(uid);

        if (kind) nodes.kind = kind;
        if (opts.wrap) nodes.wrap = opts.wrap;
        if (opts.host) nodes.host = opts.host;
        if (opts.mount) nodes.mount = opts.mount;
        if (opts.circleInput) nodes.circleInput = opts.circleInput;
        if (opts.rowsInput) nodes.rowsInput = opts.rowsInput;
        if (opts.colsInput) nodes.colsInput = opts.colsInput;

        if (opts.target !== undefined) this.setTarget(uid, opts.target, kind || meta.kind);

        if (kind === "circle") {
          this.ensureCircle(uid, opts.initialParts != null ? opts.initialParts : 1, { preserve: false });
        } else if (kind === "rect") {
          this.ensureRect(
            uid,
            opts.initialRows != null ? opts.initialRows : 1,
            opts.initialCols != null ? opts.initialCols : 1,
            { preserve: false }
          );
        }

        if (nodes.circleInput) this.bindCircleInput(uid, nodes.circleInput);
        if (nodes.rowsInput || nodes.colsInput) this.bindRectInputs(uid, nodes.rowsInput, nodes.colsInput);

        meta.ready = true;
        this.syncInputs(uid, true);
        this.syncDomState(uid);
        this.render(uid);
        return nodes;
      },

      attachCircle(uid, options) {
        const opts = Object.assign({}, options || {}, { kind: "circle" });
        return this.register(uid, opts);
      },

      attachRect(uid, options) {
        const opts = Object.assign({}, options || {}, { kind: "rect" });
        return this.register(uid, opts);
      },

      bindCircleInput(uid, input) {
        if (!input || input.__fqCircleBoundUid === uid) return;
        input.__fqCircleBoundUid = uid;

        const handler = () => {
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

          const handlerRows = () => {
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

          const handlerCols = () => {
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
        const nodes = this.getNodes(uid);
        const meta = this.getMeta(uid);
        const force = !!forceValue;

        if (meta.kind === "circle" && nodes.circleInput) {
          const parts = (this.circle[uid] && this.circle[uid].length) || meta.parts || 1;
          if (force || String(nodes.circleInput.value) !== String(parts)) nodes.circleInput.value = String(parts);
          nodes.circleInput.disabled = !!meta.locked;
        }

        if (meta.kind === "rect") {
          const dims = this.rectDims[uid] || { rows: meta.rows || 1, cols: meta.cols || 1 };

          if (nodes.rowsInput) {
            if (force || String(nodes.rowsInput.value) !== String(dims.rows)) nodes.rowsInput.value = String(dims.rows);
            nodes.rowsInput.disabled = !!meta.locked;
          }

          if (nodes.colsInput) {
            if (force || String(nodes.colsInput.value) !== String(dims.cols)) nodes.colsInput.value = String(dims.cols);
            nodes.colsInput.disabled = !!meta.locked;
          }
        }
      },

      syncDomState(uid) {
        const nodes = this.getNodes(uid);
        const meta = this.getMeta(uid);
        const targets = [nodes.wrap, nodes.host, nodes.mount];

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
        const nodes = this.getNodes(uid);
        const meta = this.getMeta(uid);
        if (!nodes.mount) return false;
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

          setTimeout(() => {
            this.markRevealed(uid);
          }, 0);
        };

        scope.addEventListener("click", clickHandler, true);

        let obs = null;
        if (typeof MutationObserver !== "undefined") {
          obs = new MutationObserver(() => {
            if (!meta.ready || meta.revealed) return;
            if (this._fqLooksRevealed(scope)) this.markRevealed(uid);
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
      },

      onCheck(uid, passed) {
        if (passed) this.markSolved(uid);
        return !!passed;
      },

      onReveal(uid) {
        return this.markRevealed(uid);
      }
    };
  }

  ROOT.__LIA_FRACTION_QUIZ__ = ROOT[STORE_KEY];
  window.__LIA_FRACTION_QUIZ__ = ROOT[STORE_KEY];
})();
@end

















@circleQuiz: @circleQuiz_(@uid,@0)

@circleQuiz_
<div id="fq-circle-wrap-@0" class="fq-widget" data-fq-kind="circle" data-fq-uid="@0">
  <div id="fq-circle-host-@0" class="fq-widget" data-fq-kind="circle" data-fq-uid="@0">
    <div id="fq-circle-mount-@0" class="fq-mount"></div>

    <div id="fq-circle-range-@0" class="fq-range" data-label="Unterteilungen">
      <script run-once modify="false" input="range" output="fq-c-n-@0"
              value="1" min="1" max="32" input-always-active>
@input
      </script>
    </div>
  </div>

  [[!]]
  <script>
(() => {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  if (!API) return false;

  const passed = API.isCorrect(uid);
  if (passed && !API.isLocked(uid)) {
    API.onCheck(uid, true);
  }
  return passed;
})()
  </script>
</div>

<script modify="false">
(function () {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  const targetRaw = String.raw`@1`;

  if (!API) return;

  function waitForCircleDom(cb) {
    let tries = 0;

    function tick() {
      const wrap = document.getElementById("fq-circle-wrap-@0");
      const host = document.getElementById("fq-circle-host-@0");
      const mount = document.getElementById("fq-circle-mount-@0");
      const rangeWrap = document.getElementById("fq-circle-range-@0");
      const input = rangeWrap ? rangeWrap.querySelector('input[type="range"]') : null;

      if (wrap && host && mount && rangeWrap && input) {
        cb({ wrap, host, mount, input });
        return;
      }

      tries++;
      if (tries < 240) requestAnimationFrame(tick);
    }

    tick();
  }

  waitForCircleDom(({ wrap, host, mount, input }) => {
    API.attachCircle(uid, {
      wrap: wrap,
      host: host,
      mount: mount,
      circleInput: input,
      target: targetRaw,
      initialParts: input.value || 1
    });

    API.ensureQuizBridge(uid, wrap);
  });
})();
</script>
@end





















@rectQuiz: @rectQuiz_(@uid,@0)

@rectQuiz_
<div id="fq-rect-wrap-@0" class="fq-widget" data-fq-kind="rect" data-fq-uid="@0">
  <div id="fq-rect-host-@0" class="fq-widget" data-fq-kind="rect" data-fq-uid="@0">
    <div id="fq-rect-mount-@0" class="fq-mount"></div>

    <div id="fq-rect-rows-wrap-@0" class="fq-range" data-label="vertikal">
      <script run-once modify="false" input="range" output="fq-r-rows-@0"
              value="1" min="1" max="20" input-always-active>
@input
      </script>
    </div>

    <div id="fq-rect-cols-wrap-@0" class="fq-range" data-label="horizontal">
      <script run-once modify="false" input="range" output="fq-r-cols-@0"
              value="1" min="1" max="20" input-always-active>
@input
      </script>
    </div>
  </div>

  [[!]]
  <script>
(() => {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  if (!API) return false;

  const passed = API.isCorrect(uid);
  if (passed && !API.isLocked(uid)) {
    API.onCheck(uid, true);
  }
  return passed;
})()
  </script>
</div>

<script modify="false">
(function () {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  const targetRaw = String.raw`@1`;

  if (!API) return;

  function waitForRectDom(cb) {
    let tries = 0;

    function tick() {
      const wrap = document.getElementById("fq-rect-wrap-@0");
      const host = document.getElementById("fq-rect-host-@0");
      const mount = document.getElementById("fq-rect-mount-@0");
      const rowsWrap = document.getElementById("fq-rect-rows-wrap-@0");
      const colsWrap = document.getElementById("fq-rect-cols-wrap-@0");
      const rowsInput = rowsWrap ? rowsWrap.querySelector('input[type="range"]') : null;
      const colsInput = colsWrap ? colsWrap.querySelector('input[type="range"]') : null;

      if (wrap && host && mount && rowsWrap && colsWrap && rowsInput && colsInput) {
        cb({ wrap, host, mount, rowsInput, colsInput });
        return;
      }

      tries++;
      if (tries < 240) requestAnimationFrame(tick);
    }

    tick();
  }

  waitForRectDom(({ wrap, host, mount, rowsInput, colsInput }) => {
    API.attachRect(uid, {
      wrap: wrap,
      host: host,
      mount: mount,
      rowsInput: rowsInput,
      colsInput: colsInput,
      target: targetRaw,
      initialRows: rowsInput.value || 1,
      initialCols: colsInput.value || 1
    });

    API.ensureQuizBridge(uid, wrap);
  });
})();
</script>
@end




-->














# Brüche darstellen

**Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.

__$a)\;\;$__ $\dfrac{7}{10}$

@rectQuiz(7/10)

__$b)\;\;$__ $\dfrac{7}{10}$

@circleQuiz(7/10)


__$c)\;\;$__ $\dfrac{4}{11}$

@rectQuiz(4/11)

__$d)\;\;$__ $\dfrac{4}{11}$

@circleQuiz(4/11)
