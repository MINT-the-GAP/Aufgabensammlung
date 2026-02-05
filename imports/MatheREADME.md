<!--
version:  0.1.0
language: de
narrator: Deutsch Female
author: Martin Lommatzsch
comment: FractionQuizzes (circle+rect) — 200x200 + Label IM Slider (wie Button), nur Schieber (kein Reset/keine Zahlen) — import-sicher via ROOT-style-injection

@onload
(function () {

  // =========================
  // Root/Content (iframe-safe)
  // =========================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const STORE_KEY = "__LIA_FRACTION_QUIZ_V1__";
  const STYLE_ID  = "__LIA_FRACTION_QUIZ_STYLE_V1__";

  // =========================
  // Style Injection (ROOT head)
  // =========================
  function injectStyleOnce(){
    let DOC = null;
    try { DOC = (ROOT && ROOT.document) ? ROOT.document : document; } catch(e){ DOC = document; }
    if (!DOC || !DOC.head) return;
    if (DOC.getElementById(STYLE_ID)) return;

    const css = `
:root{
  --fq-track: rgba(0,0,0,.20);
  --fq-thumb: rgba(0,0,0,.88);
  --fq-ring:  rgba(255,255,255,.90);

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
    --fq-ring:  rgba(0,0,0,.75);
  }
}

/* Wrapper: Label “im” Control */
.fq-range{
  width: var(--fq-w);
  max-width: var(--fq-w);
  height: var(--fq-h);
  position: relative;
  margin: 6px 0 12px 0;
  user-select: none;
}
.fq-range::before{
  content: attr(data-label);
  position: absolute;
  left: 0; right: 0;
  top: var(--fq-label-top);
  text-align: center;
  font-size: var(--fq-label-size);
  line-height: 1;
  opacity: .85;
  pointer-events: none;
  z-index: 2;
}

/* LiaScript-Wrapper kompakt + “Textausgabe” killen */
.fq-range .lia-input{
  width: var(--fq-w) !important;
  max-width: var(--fq-w) !important;
  height: var(--fq-h) !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex !important;
  align-items: center !important;
  font-size: 0 !important;
  line-height: 0 !important;
  min-height: 0 !important;
}

/* Alles Chrome weg (Reset/Value/Buttons/etc.) */
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
  display: none !important;
}

/* Range: im Control platziert */
.fq-range input[type="range"]{
  width: var(--fq-w) !important;
  max-width: var(--fq-w) !important;
  height: var(--fq-h) !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent;
  -webkit-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  position: relative;
  z-index: 1;
}

/* WebKit Track/Thumb */
.fq-range input[type="range"]::-webkit-slider-runnable-track{
  height: var(--fq-track-h);
  border-radius: 999px;
  background: var(--fq-track);
}
.fq-range input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance: none;
  appearance: none;
  width: var(--fq-thumb-sz);
  height: var(--fq-thumb-sz);
  border-radius: 50%;
  background: var(--fq-thumb);
  border: 2px solid var(--fq-ring);
  margin-top: calc((var(--fq-track-h) - var(--fq-thumb-sz)) / 2);
}

/* Firefox Track/Thumb */
.fq-range input[type="range"]::-moz-range-track{
  height: var(--fq-track-h);
  border-radius: 999px;
  background: var(--fq-track);
}
.fq-range input[type="range"]::-moz-range-thumb{
  width: var(--fq-thumb-sz);
  height: var(--fq-thumb-sz);
  border-radius: 50%;
  background: var(--fq-thumb);
  border: 2px solid var(--fq-ring);
}
    `.trim();

    const style = DOC.createElement("style");
    style.id = STYLE_ID;
    style.textContent = css;
    DOC.head.appendChild(style);
  }

  injectStyleOnce();

  // =========================
  // Store (import-safe)
  // =========================
  if (!ROOT[STORE_KEY]) {
    ROOT[STORE_KEY] = {
      circle:   Object.create(null), // uid -> boolean[]
      rect:     Object.create(null), // uid -> boolean[]
      rectDims: Object.create(null), // uid -> {rows, cols}

      ensureCircle(uid, n){
        n = Math.max(1, n|0);
        const a = this.circle[uid];
        if (!Array.isArray(a) || a.length !== n) this.circle[uid] = Array(n).fill(false);
        return this.circle[uid];
      },

      toggleCircle(uid, i){
        const a = this.circle[uid];
        if (!Array.isArray(a)) return false;
        if (i < 0 || i >= a.length) return false;
        a[i] = !a[i];
        return a[i];
      },

      ensureRect(uid, rows, cols){
        rows = Math.max(1, rows|0);
        cols = Math.max(1, cols|0);
        this.rectDims[uid] = { rows, cols };

        const total = rows * cols;
        const a = this.rect[uid];
        if (!Array.isArray(a) || a.length !== total) this.rect[uid] = Array(total).fill(false);
        return this.rect[uid];
      },

      toggleRect(uid, i){
        const a = this.rect[uid];
        if (!Array.isArray(a)) return false;
        if (i < 0 || i >= a.length) return false;
        a[i] = !a[i];
        return a[i];
      }
    };
  }

  ROOT.__LIA_FRACTION_QUIZ__ = ROOT[STORE_KEY];
  window.__LIA_FRACTION_QUIZ__ = ROOT[STORE_KEY];

})();
@end


@circleQuiz: @circleQuiz_(@uid,@0)

@circleQuiz_
<script modify="false">
const API = window.__LIA_FRACTION_QUIZ__;
const uid = "@0";

/* @input sicher einlesen (initial kann leer sein) */
const nRaw = "@input(`fq-c-n-@0`)";
let n = parseInt(nRaw, 10);
if (!Number.isFinite(n) || n < 1) n = 1;
if (n > 32) n = 32;

if (API && API.ensureCircle) API.ensureCircle(uid, n);
const arr = (API && API.circle && API.circle[uid]) ? API.circle[uid] : Array(n).fill(false);

/* 200x200 */
const W = 200, H = 200, padding = 6;
const cx = W / 2, cy = H / 2;
const r  = Math.min(W, H) / 2 - padding;

const circleFill  = "white";
const lineColor   = "black";
const segmentFill = "orange";

const step = 360 / n;
const startOffset = -90;

let lines = "";
let slices = "";

if (n > 1) {
  for (let i = 0; i < n; i++) {
    const a0 = (startOffset + step * i) * Math.PI / 180;
    const a1 = (startOffset + step * (i + 1)) * Math.PI / 180;

    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);

    const largeArc = (step > 180) ? 1 : 0;
    const sweep = 1;

    const active = !!arr[i];

    slices += `
      <path
        d="M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 ${largeArc},${sweep} ${x1},${y1} Z"
        fill="${active ? segmentFill : "transparent"}"
        style="cursor:pointer"
        onclick="(function(el){
          var API = window.__LIA_FRACTION_QUIZ__;
          if(!API) return;
          var on = API.toggleCircle('${uid}', ${i});
          el.setAttribute('fill', on ? '${segmentFill}' : 'transparent');
        })(this)"
      ></path>
    `;

    lines += `<line x1="${cx}" y1="${cy}" x2="${x0}" y2="${y0}" stroke="${lineColor}" stroke-width="2"/>`;
  }
} else {
  const active = !!arr[0];
  slices = `
    <circle
      cx="${cx}" cy="${cy}" r="${r}"
      fill="${active ? segmentFill : "transparent"}"
      style="cursor:pointer"
      onclick="(function(el){
        var API = window.__LIA_FRACTION_QUIZ__;
        if(!API) return;
        var on = API.toggleCircle('${uid}', 0);
        el.setAttribute('fill', on ? '${segmentFill}' : 'transparent');
      })(this)"
    ></circle>
  `;
}

`HTML:
<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <circle cx="${cx}" cy="${cy}" r="${r}" stroke="${lineColor}" stroke-width="2" fill="${circleFill}"/>
  ${slices}
  ${lines}
</svg>
`
</script>

<div class="fq-range" data-label="Unterteilungen">
<script run-once modify="false" input="range" output="fq-c-n-@0"
        value="1" min="1" max="32" input-always-active>
@input
</script>
</div>

[[!]]
<script>
(() => {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  const arr = (API && API.circle && API.circle[uid]) ? API.circle[uid] : [];
  const ratio = arr.filter(Boolean).length / Math.max(1, arr.length);
  const target = (@1);
  return Math.abs(ratio - target) < 1e-12;
})()
</script>
@end



@rectQuiz: @rectQuiz_(@uid,@0)

@rectQuiz_
<script modify="false">
const API = window.__LIA_FRACTION_QUIZ__;
const uid = "@0";

/* @input sicher einlesen (initial kann leer sein) */
const rowsRaw = "@input(`fq-r-rows-@0`)";
const colsRaw = "@input(`fq-r-cols-@0`)";
let rows = parseInt(rowsRaw, 10);
let cols = parseInt(colsRaw, 10);
if (!Number.isFinite(rows) || rows < 1) rows = 1;
if (!Number.isFinite(cols) || cols < 1) cols = 1;
if (rows > 20) rows = 20;
if (cols > 20) cols = 20;

if (API && API.ensureRect) API.ensureRect(uid, rows, cols);
const arr = (API && API.rect && API.rect[uid]) ? API.rect[uid] : Array(rows*cols).fill(false);

/* 200x200 */
const W = 200, H = 200, padding = 6;
const usableW = W - 2*padding, usableH = H - 2*padding;

const bgFill   = "white";
const lineColor= "black";
const cellFill = "orange";
const cellGap  = 0;

const rw = usableW / cols;
const rh = usableH / rows;

let gridRects = "";
let gridLines = "";

/* Zellen */
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const i = r*cols + c;
    const x = padding + c*rw + cellGap/2;
    const y = padding + r*rh + cellGap/2;
    const w = rw - cellGap;
    const h = rh - cellGap;

    const active = !!arr[i];

    gridRects += `
      <rect
        x="${x}" y="${y}" width="${Math.max(0,w)}" height="${Math.max(0,h)}"
        fill="${active ? cellFill : "transparent"}"
        style="cursor:pointer"
        onclick="(function(el){
          var API = window.__LIA_FRACTION_QUIZ__;
          if(!API) return;
          var on = API.toggleRect('${uid}', ${i});
          el.setAttribute('fill', on ? '${cellFill}' : 'transparent');
        })(this)"
      ></rect>
    `;
  }
}

/* Gitterlinien */
for (let r = 0; r <= rows; r++) {
  const y = padding + r*rh;
  gridLines += `<line x1="${padding}" y1="${y}" x2="${W-padding}" y2="${y}" stroke="${lineColor}" stroke-width="2"/>`;
}
for (let c = 0; c <= cols; c++) {
  const x = padding + c*rw;
  gridLines += `<line x1="${x}" y1="${padding}" x2="${x}" y2="${H-padding}" stroke="${lineColor}" stroke-width="2"/>`;
}

`HTML:
<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect x="0" y="0" width="${W}" height="${H}" fill="${bgFill}" stroke="${lineColor}" stroke-width="2"/>
  ${gridRects}
  ${gridLines}
</svg>
`
</script>

<div class="fq-range" data-label="vertikal">
<script run-once modify="false" input="range" output="fq-r-rows-@0"
        value="1" min="1" max="20" input-always-active>
@input
</script>
</div>

<div class="fq-range" data-label="horizontal">
<script run-once modify="false" input="range" output="fq-r-cols-@0"
        value="1" min="1" max="20" input-always-active>
@input
</script>
</div>

[[!]]
<script>
(() => {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  const arr = (API && API.rect && API.rect[uid]) ? API.rect[uid] : [];
  const ratio = arr.filter(Boolean).length / Math.max(1, arr.length);
  const target = (@1);
  return Math.abs(ratio - target) < 1e-12;
})()
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
