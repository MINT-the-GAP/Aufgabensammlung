<!--
version:  0.0.2
language: de
narrator: Deutsch Female
author: Martin Lommatzsch
comment: FractionQuizzes (circle+rect) — import-sicher, root-namespaced, kollisionsarm

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
  const KEY  = "__LIA_FRACTION_QUIZ_V1__";

  if (!ROOT[KEY]) {
    ROOT[KEY] = {
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

  // Expose in Root + current window (Content iframe)
  ROOT.__LIA_FRACTION_QUIZ__ = ROOT[KEY];
  window.__LIA_FRACTION_QUIZ__ = ROOT[KEY];
})();
@end


@circleQuiz: @circleQuiz_(@uid,@0)

@circleQuiz_
<script modify="false">
const API = window.__LIA_FRACTION_QUIZ__;
const uid = "@0";

const n = Math.max(1, +@input(`fq-c-n-@0`) || 1);
if (API && API.ensureCircle) API.ensureCircle(uid, n);

const arr = (API && API.circle && API.circle[uid]) ? API.circle[uid] : Array(n).fill(false);

const cx = 145, cy = 150, r = 140;
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
<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
  <circle cx="${cx}" cy="${cy}" r="${r}" stroke="${lineColor}" stroke-width="2" fill="${circleFill}"/>
  ${slices}
  ${lines}
</svg>
`
</script>

<script run-once modify="false" input="range" output="fq-c-n-@0"
        value="1" min="1" max="32" input-always-active>
@input
</script>

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

const rows = Math.max(1, +@input(`fq-r-rows-@0`) || 1);
const cols = Math.max(1, +@input(`fq-r-cols-@0`) || 1);

if (API && API.ensureRect) API.ensureRect(uid, rows, cols);

const arr = (API && API.rect && API.rect[uid]) ? API.rect[uid] : Array(rows*cols).fill(false);

const W = 300, H = 300, padding = 8;
const usableW = W - 2*padding, usableH = H - 2*padding;

const bgFill   = "white";
const lineColor= "black";
const cellFill = "orange";
const cellGap  = 0;

const rw = usableW / cols;
const rh = usableH / rows;

let gridRects = "";
let gridLines = "";

// Zellen
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

// Gitterlinien
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

<script run-once modify="false" input="range" output="fq-r-rows-@0"
        value="1" min="1" max="20" input-always-active>
@input
</script>

<script run-once modify="false" input="range" output="fq-r-cols-@0"
        value="1" min="1" max="20" input-always-active>
@input
</script>

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

