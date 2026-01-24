<!--
version:  0.0.1
language: de
narrator: Deutsch Female

tags: 

comment: 

author: Martin Lommatzsch, André Dietrich












@onload
window.segments = window.segments || {}

window.toggleSegments = function (uid, i) {
  segments[uid][i] = !segments[uid][i]
}
@end

@circleQuiz: @circleQuiz_(@uid,@0)

@circleQuiz_
<script modify="false">
const segments = @input(`segments-@0`);
const cx = 145, cy = 150, r = 140;

const circleFill = "white";  // Hintergrundfarbe Kreis
const lineColor  = "black";          // Linienfarbe
const segmentFill = "orange";     // Füllfarbe aktiver Segmente

const step = 360 / segments;
const startOffset = -90;

let lines = "";
let slices = "";

if (segments > 1) {
  for (let i = 0; i < segments; i++) {
    const a0 = (startOffset + step * i) * Math.PI / 180;
    const a1 = (startOffset + step * (i + 1)) * Math.PI / 180;

    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);

    const largeArc = (step > 180) ? 1 : 0;
    const sweep = 1;

    const isActive = window.segments['@0'][i];
    slices += `
      <path class="slice@0 slice@0 ${isActive ? 'active' : ''}"
            d="M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 ${largeArc},${sweep} ${x1},${y1} Z"
            onclick="
              this.classList.toggle('active');
              toggleSegments('@0', ${i});
            ">
      </path>
    `;

    lines += `<line x1="${cx}" y1="${cy}" x2="${x0}" y2="${y0}" stroke="${lineColor}" stroke-width="2"/>`;
  }
} else {
    const isActive = window.segments['@0'][0];
    slices = `
    <circle class="slice@0 ${isActive ? 'active' : ''}"
            cx="${cx}" cy="${cy}" r="${r}"
            onclick="this.classList.toggle('active'); toggleSegments('@0', 0);">
    </circle>
  `;
}

`HTML:
<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300" 
     style="--line:${lineColor}; --segment:${segmentFill}">
  <style>
    .slice@0 { fill: transparent; cursor: pointer; }
    .slice@0.active { fill: var(--segment); }
  </style>

  <circle cx="${cx}" cy="${cy}" r="${r}" stroke="${lineColor}" stroke-width="2" fill="${circleFill}"/>
  ${slices}
  ${lines}
</svg>
`
</script>

<script run-once modify="false" input="range" output="segments-@0" value="1" min="1" max="32" input-always-active>
if (!segments["@0"] || @input != segments["@0"].length) {
  segments["@0"] = Array(@input).fill(false);
}

@input
</script>

[[!]]
<script>
@1 === ((window.segments["@0"].filter(i => i).length) / window.segments["@0"].length)
</script>
@end











@komma: @komma_(@uid,`@0`,`@1`)

@komma_
<input
  data-id="lia-quiz-@0"
  class="lia-input lia-quiz__input"
  style="margin-bottom: 2rem"
  value="@1">

[[!]]
<script>
const eingabe = document.querySelector('[data-id="lia-quiz-@0"]').value.toLocaleLowerCase().replace(/\s+/g,"")

eingabe == "@2".toLocaleLowerCase().replace(/\s+/g,"")
</script>
@end










vorlesen: {|>}{<span style="position: absolute; left: -10000px">@0</span>} [[  @0  ]]








formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}




@style
main > *:not(:last-child) { margin-bottom: 3rem; }
input { text-align: center; }

/* =========================================================
   1) Layout: NEBENEINANDER (Grid, robust)
   ========================================================= */
:root{
  --flex-child-minw: 350px;   /* wird per JS gesetzt: 350/425/500 */
  --pres-side-gap: 12px;      /* Präsentationsmodus: kleiner Rand */
  --lia-pres-font: unset;     /* Präsentation/Slides: 18/22/26 */
}

.flex-container{
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(var(--flex-child-minw), 1fr)) !important;
  gap: 20px;
  align-items: stretch;

  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.flex-child{
  box-sizing: border-box;
  max-width: 100%;

  /* verhindert: Inhalt (Text/Math/Inline) sprengt Spalte */
  min-width: 0;
  overflow-wrap: anywhere;
  word-break: break-word;
}

@media (max-width: 400px){
  .flex-container{ grid-template-columns: 1fr !important; }
}

/* =========================================================
   2) Spoiler / Collaborative: nie breiter als Spalte
   ========================================================= */
details.spoiler > summary{
  cursor: pointer;
  font-weight: 600;
}
details.spoiler[open] > summary{ margin-bottom: 0.5em; }
details.spoiler{ margin: 0.5em 0; }

details.spoiler .collab-wrap{
  display: block;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
details.spoiler .collab-wrap *{
  max-width: 100%;
  box-sizing: border-box;
}
details.spoiler .collab-wrap canvas{
  width: 100% !important;
  max-width: 100% !important;
  display: block;
  touch-action: none;
}

/* Button-Leiste: rechts unten unterhalb Canvas */
details.spoiler .collab-wrap .collab-controls{
  margin-top: 6px;
  display: flex;
  justify-content: flex-end;
}
details.spoiler .collab-wrap .collab-controls button{
  padding: 6px 10px;
  font-size: 0.9rem;
  border: 1px solid currentColor;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
}

/* =========================================================
   3) Präsentation: fast volle Breite (NUR presentation!)
      Slides: KEINE Breiten-Overrides (sonst Folienfenster kaputt)
   ========================================================= */

/* --- volle Breite nur im echten Präsentationsmodus --- */
html[data-lia-mode="presentation"] body{ margin: 0 !important; }

/* NUR main anfassen, nicht .slides/.lia-slide/.wrapper/etc. */
html[data-lia-mode="presentation"] main{
  width: calc(100vw - (2 * var(--pres-side-gap))) !important;
  max-width: calc(100vw - (2 * var(--pres-side-gap))) !important;
  margin-left: auto !important;
  margin-right: auto !important;
  box-sizing: border-box !important;
  padding-left: var(--pres-side-gap) !important;
  padding-right: var(--pres-side-gap) !important;
}

/* --- Schrift-Boost: presentation UND slides --- */
html[data-lia-mode="presentation"] main,
html[data-lia-mode="slides"] main{
  font-size: var(--lia-pres-font) !important;
}
@end





@Rechenplatz: @Rechenplatz@0

@RechenplatzT
<div class="onlyPresentation" style="display:none;"></div>

<div class="onlyTextbook" style="display:none;">
  <details class="spoiler">
    <summary>
      <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/pen.png" width="25" height="25">
      Platz für Notizen oder zum Rechnen öffnen
    </summary>

    <div class="collab-wrap">
      @[Collaborative.lines(640,100)](./img/example.jpg)
    </div>
  </details>
</div>
@end

@RechenplatzP
<div class="onlyPresentation" style="display:none;">
  <details class="spoiler">
    <summary>
      <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/pen.png" width="25" height="25">
      Platz für Notizen oder zum Rechnen öffnen
    </summary>

    <div class="collab-wrap">
      @[Collaborative.lines(640,100)](./img/example.jpg)
    </div>
  </details>
</div>

<div class="onlyTextbook" style="display:none;"></div>
@end

@RechenplatzTP
<div class="onlyPresentation" style="display:none;">
  <details class="spoiler">
    <summary>
      <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/pen.png" width="25" height="25">
      Platz für Notizen oder zum Rechnen öffnen
    </summary>

    <div class="collab-wrap">
      @[Collaborative.lines(640,100)](./img/example.jpg)
    </div>
  </details>
</div>

<div class="onlyTextbook" style="display:none;">
  <details class="spoiler">
    <summary>
      <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/pen.png" width="25" height="25">
      Platz für Notizen oder zum Rechnen öffnen
    </summary>

    <div class="collab-wrap">
      @[Collaborative.lines(640,100)](./img/example.jpg)
    </div>
  </details>
</div>
@end

@RechenplatzPT: @RechenplatzTP




@onload
(function () {
  const SETTINGS_KEY = "settings";

  function norm(x){ return String(x == null ? "" : x).toLowerCase(); }

  function safeGetSettingsRaw(){
    try { return localStorage.getItem(SETTINGS_KEY); }
    catch (e) { return null; }
  }

  function findModeInJson(obj){
    const seen = new Set();

    function walk(v){
      if (v == null) return null;

      if (typeof v === "string"){
        const s = norm(v);
        if (s.includes("presentation")) return "presentation";
        if (s.includes("slides"))       return "slides";
        if (s.includes("textbook") || s.includes("book")) return "textbook";
        return null;
      }

      if (typeof v !== "object") return null;
      if (seen.has(v)) return null;
      seen.add(v);

      for (const k in v){
        if (!Object.prototype.hasOwnProperty.call(v, k)) continue;
        const key = norm(k);
        if (key === "mode" || key === "view" || key === "layout" || key === "format"){
          const m = walk(v[k]);
          if (m) return m;
        }
      }

      for (const k in v){
        if (!Object.prototype.hasOwnProperty.call(v, k)) continue;
        const m = walk(v[k]);
        if (m) return m;
      }
      return null;
    }

    return walk(obj);
  }

  function detectMode(){
    const raw = safeGetSettingsRaw();
    if (!raw) return "unknown";

    try {
      const obj = JSON.parse(raw);
      return findModeInJson(obj) || "unknown";
    } catch (e){
      const s = norm(raw);
      if (s.includes("presentation")) return "presentation";
      if (s.includes("slides"))       return "slides";
      if (s.includes("textbook") || s.includes("book")) return "textbook";
      return "unknown";
    }
  }

  function applyModeAttr(){
    document.documentElement.dataset.liaMode = detectMode();
  }

  /* ---------------- onlyPresentation / onlyTextbook ---------------- */
  function setDisplayForAll(selector, display){
    document.querySelectorAll(selector).forEach(function(el){
      el.style.display = display;
    });
  }

  function applyModeVisibility(){
    const mode = detectMode();
    const isPresLike = (mode === "presentation" || mode === "slides");

    setDisplayForAll(".onlyPresentation", isPresLike ? "block" : "none");
    setDisplayForAll(".onlyTextbook",     isPresLike ? "none"  : "block");
  }

  /* ---------------- Schriftgrößen-Boost (presentation+slides) ---------------- */
  const PRES_PX = [18, 24, 32];     // Zielwerte
  const BASE_MIN = 350;
  const STEP_MIN = 75;

  function pxToStep0to2(px){
    if (px <= 17) return 0;
    if (px <= 19) return 1;
    return 2;
  }

  function getMainFontPx(){
    const main = document.querySelector("main") || document.documentElement;
    const fs = parseFloat(getComputedStyle(main).fontSize || "16");
    return isNaN(fs) ? 16 : fs;
  }

  function setFlexChildMinWidth(step){
    const minw = BASE_MIN + STEP_MIN * step;  // 350/425/500
    document.documentElement.style.setProperty("--flex-child-minw", minw + "px");
  }

  function clearPresFont(){
    document.documentElement.style.setProperty("--lia-pres-font", "unset");
  }

  function setPresFont(px){
    document.documentElement.style.setProperty("--lia-pres-font", px + "px");
  }

  let sampling = false;
  let lastStep = 1;

  function applyFontLogic(){
    const mode = detectMode();
    const isPresLike = (mode === "presentation" || mode === "slides");

    if (!isPresLike){
      clearPresFont();
      const step = pxToStep0to2(getMainFontPx());
      lastStep = step;
      setFlexChildMinWidth(step);
      return;
    }

    if (sampling) return;
    sampling = true;

    clearPresFont();

    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        const step = pxToStep0to2(getMainFontPx());
        lastStep = step;

        setPresFont(PRES_PX[step]);
        setFlexChildMinWidth(step);

        sampling = false;
      });
    });
  }

  /* ---------------- Collaborative: Height fix + Mehr Platz ---------------- */
  function isActuallyVisible(el){
    return !!(el && (el.offsetWidth || el.offsetHeight || el.getClientRects().length));
  }

  function getCanvasHeight(canvas){
    const hAttr = canvas.getAttribute("height");
    const h = hAttr ? parseInt(hAttr, 10) : NaN;
    if (!isNaN(h) && h > 0) return h;

    if (typeof canvas.height === "number" && canvas.height > 0) return canvas.height;

    const cs = window.getComputedStyle(canvas);
    const hs = parseInt(cs.height, 10);
    return (!isNaN(hs) && hs > 0) ? hs : 200;
  }

  function setCanvasHeight(canvas, newH){
    canvas.setAttribute("height", String(newH));
    canvas.height = newH;
    canvas.style.height = newH + "px";
    canvas.style.maxHeight = newH + "px";
  }

  function clampWrapToColumn(wrap){
    const col = wrap.closest(".flex-child");
    if (!col) return;

    const w = col.clientWidth;
    if (!w || w < 50) return;

    wrap.style.width = "100%";
    wrap.style.maxWidth = w + "px";
    wrap.style.boxSizing = "border-box";

    const root = wrap.firstElementChild;
    if (root){
      root.style.maxWidth = "100%";
      root.style.boxSizing = "border-box";
    }
  }

  function ensureControls(wrap){
    if (wrap.querySelector(".collab-controls")) return;

    const controls = document.createElement("div");
    controls.className = "collab-controls";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Mehr Platz";

    btn.addEventListener("click", function(){
      const canvas = wrap.querySelector("canvas");
      if (!canvas) return;

      const currentH = getCanvasHeight(canvas);

      let dataUrl = null;
      try { dataUrl = canvas.toDataURL("image/png"); } catch (e) { dataUrl = null; }

      setCanvasHeight(canvas, currentH + 100);

      if (dataUrl){
        const img = new Image();
        img.onload = function(){
          try{
            const ctx = canvas.getContext("2d");
            if (ctx) ctx.drawImage(img, 0, 0);
          } catch (e) {}
        };
        img.src = dataUrl;
      }
    });

    controls.appendChild(btn);
    wrap.appendChild(controls);
  }

  function fixCollabInVisibleTextbook(){
    document.querySelectorAll(".onlyTextbook details.spoiler[open] .collab-wrap").forEach(function(wrap){
      if (!isActuallyVisible(wrap)) return;

      clampWrapToColumn(wrap);

      const canvas = wrap.querySelector("canvas");
      if (!canvas) return;

      const h = getCanvasHeight(canvas);
      canvas.style.height = h + "px";
      canvas.style.maxHeight = h + "px";

      ensureControls(wrap);
    });
  }

  function hookDetailsToggle(){
    document.querySelectorAll(".onlyTextbook details.spoiler").forEach(function(det){
      if (det.__liaHooked) return;
      det.__liaHooked = true;

      det.addEventListener("toggle", function(){
        if (det.open){
          requestAnimationFrame(function(){
            fixCollabInVisibleTextbook();
          });
        }
      });
    });
  }

  /* ---------------- Render Loop ---------------- */
  let lastRaw = null;
  let lastMode = null;

  function render(){
    const raw = safeGetSettingsRaw();
    const mode = detectMode();

    applyModeAttr();
    applyModeVisibility();

    if (raw !== lastRaw || mode !== lastMode){
      applyFontLogic();
      lastRaw = raw;
      lastMode = mode;
    } else {
      setFlexChildMinWidth(lastStep);
    }

    hookDetailsToggle();
    fixCollabInVisibleTextbook();
  }

  render();
  setInterval(render, 350);

  window.addEventListener("storage", function(e){
    if (!e || e.key === SETTINGS_KEY) render();
  });

  const obs = new MutationObserver(function(){
    hookDetailsToggle();
    fixCollabInVisibleTextbook();
  });
  obs.observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("resize", function(){
    setFlexChildMinWidth(lastStep);
    fixCollabInVisibleTextbook();
  });
})();
@end







eingabe: <script input="number" input-always-active modify="false" value="0" default="0">@input</script>



-->

# Readme zur Aufgabensammlung

