<!--
version:  0.0.2
language: de

@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

input { text-align: center; }

/* =======================================================================
   1) GRID LAYOUT (nebeneinander, solange Platz da ist)
   ======================================================================= */
:root{
  --flex-child-minw: 350px;     /* wird per JS nach Schriftstufe angepasst */
  --pres-side-gap: 12px;        /* Praesentationsmodus: kleiner Rand */
  --lia-user-font-size: unset;  /* NUR in Praesi gesetzt */
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
  overflow-wrap: anywhere;
  word-break: break-word;
}

@media (max-width: 400px){
  .flex-container{ grid-template-columns: 1fr !important; }
}

/* =======================================================================
   2) Spoiler / Collaborative
   ======================================================================= */
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

/* =======================================================================
   3) Praesentationsmodus: fast volle Breite + Schriftgroesse-Boost
   ======================================================================= */
html[data-lia-mode="presentation"] body{ margin: 0 !important; }

html[data-lia-mode="presentation"] main,
html[data-lia-mode="presentation"] .lia-content,
html[data-lia-mode="presentation"] .lia-slide,
html[data-lia-mode="presentation"] .slides,
html[data-lia-mode="presentation"] .content,
html[data-lia-mode="presentation"] .container,
html[data-lia-mode="presentation"] .wrapper{
  width: calc(100vw - (2 * var(--pres-side-gap))) !important;
  max-width: calc(100vw - (2 * var(--pres-side-gap))) !important;
  margin-left: auto !important;
  margin-right: auto !important;
  box-sizing: border-box !important;
}

html[data-lia-mode="presentation"] main,
html[data-lia-mode="presentation"] .lia-content,
html[data-lia-mode="presentation"] .lia-slide,
html[data-lia-mode="presentation"] .slides{
  padding-left: var(--pres-side-gap) !important;
  padding-right: var(--pres-side-gap) !important;
}

/* WICHTIG: Override NUR in Praesi */
html[data-lia-mode="presentation"] main,
html[data-lia-mode="presentation"] .lia-content,
html[data-lia-mode="presentation"] .lia-slide,
html[data-lia-mode="presentation"] .slides{
  font-size: var(--lia-user-font-size) !important;
}
@end

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/mermaid_template/0.1.4/README.md
script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js

import: https://raw.githubusercontent.com/liaTemplates/ABCjs/main/README.md
        https://raw.githubusercontent.com/liaTemplates/Speech-Recognition-Quiz/refs/heads/main/README.md
        https://raw.githubusercontent.com/liaTemplates/AVR8js/main/README.md
        https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
        https://raw.githubusercontent.com/liaTemplates/mec2/main/README.md
        https://raw.githubusercontent.com/LiaTemplates/CollaborativeDrawing/main/README.md
        https://raw.githubusercontent.com/LiaTemplates/SpreadSheet/refs/heads/main/README.md
        https://github.com/LiaTemplates/PeriodicTable/blob/main/README.md

persistent: true
edit: true

eingabe: <script input="number" input-always-active modify="false" value="0" default="0">@input</script>
-->

# Dann schauen wir mal

Wechsel einmal von der Lehrbuch- zur Präsentationsdarstellung oder andersherum.  
Dann ändere im jeweiligen Modus die Schriftgröße über Einstellungen.

<section class="flex-container">

  <div class="flex-child">

    $a)\;\;$ Wie viel sind $40\%$ von $6000\,€$?

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

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

    [[ 2400 ]]

  </div>

  <div class="flex-child">

    $a)\;\;$ Wie viel sind $40\%$ von $6000\,€$?

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

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

    [[ 2400 ]]

  </div>

  <div class="flex-child">

    $a)\;\;$ Wie viel sind $40\%$ von $6000\,€$?

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

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

    [[ 2400 ]]

  </div>


  <div class="flex-child">

    $a)\;\;$ Wie viel sind $40\%$ von $6000\,€$?

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

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

    [[ 2400 ]]

  </div>


  <div class="flex-child">

    $a)\;\;$ Wie viel sind $40\%$ von $6000\,€$?

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

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

    [[ 2400 ]]

  </div>

</section>


<script>
(function () {
  /* =====================================================================
     ZIEL:
     - Lehrbuch: LiaScript-Schriftgroessen bleiben unveraendert (typisch 16/18/20).
     - Praesi: Boost je Stufe auf 18/22/26.
     PROBLEM VON VORHER:
     - In Praesi haben wir die Schrift ueberschrieben und dann aus computedStyle
       wieder "zurueckgerechnet" => Rueckkopplung/Verwechslung.
     LOESUNG:
     - In Praesi wird die Stufe NICHT aus settings geraten, sondern "sauber gemessen":
       Wir entfernen kurz den Override, messen die echte LiaScript-Schriftgroesse,
       bestimmen daraus die Stufe (0..2), dann setzen wir den Boost.
       Das passiert nur bei Moduswechsel oder wenn settings sich aendern.
     ===================================================================== */

  function norm(x){ return String(x == null ? "" : x).toLowerCase(); }

  function safeGetSettingsRaw(){
    try { return localStorage.getItem("settings"); }
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
        if (!Object.prototype.hasOwnProperty.call(v,k)) continue;
        const key = norm(k);
        if (key === "mode" || key === "view" || key === "layout" || key === "format"){
          const m = walk(v[k]);
          if (m) return m;
        }
      }

      for (const k in v){
        if (!Object.prototype.hasOwnProperty.call(v,k)) continue;
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

  function setDisplayForAll(selector, display){
    document.querySelectorAll(selector).forEach(function(el){
      el.style.display = display;
    });
  }

  function applyModeVisibility(){
    const isPres = (detectMode() === "presentation");
    setDisplayForAll(".onlyPresentation", isPres ? "block" : "none");
    setDisplayForAll(".onlyTextbook",     isPres ? "none"  : "block");
  }

  /* ==================== Schrift-Stufe (aus echter px) ==================== */
  function getMainFontPx(){
    const main = document.querySelector("main") || document.documentElement;
    const fs = parseFloat(getComputedStyle(main).fontSize || "16");
    return isNaN(fs) ? 16 : fs;
  }

  // Erwartete Lehrbuchwerte ~16/18/20 -> Stufe 0/1/2
  function pxToStep0to2(px){
    // mittlere Schwellen bewusst zwischen den Zielwerten:
    // 16 -> <=17, 18 -> <=19, 20 -> sonst
    if (px <= 17) return 0;
    if (px <= 19) return 1;
    return 2;
  }

  /* ==================== Praesi-Mapping ==================== */
  const PRES_PX = [18, 24, 32];

  // Flex-MinWidth pro Stufe
  const BASE_MIN = 350;
  const STEP_PX  = 75;

  function applyGridMinWidth(step){
    const minw = BASE_MIN + STEP_PX * step;
    document.documentElement.style.setProperty("--flex-child-minw", minw + "px");
  }

  function clearPresentationFontOverride(){
    document.documentElement.style.removeProperty("--lia-user-font-size");
  }

  function setPresentationFontOverride(px){
    document.documentElement.style.setProperty("--lia-user-font-size", px + "px");
  }

  /* ==================== Collab: Height + Button ==================== */
  function isActuallyVisible(el){
    return !!(el && (el.offsetWidth || el.offsetHeight || el.getClientRects().length));
  }

  function getCanvasHeight(canvas){
    var hAttr = canvas.getAttribute('height');
    var h = hAttr ? parseInt(hAttr, 10) : null;

    if (!h || isNaN(h)){
      if (typeof canvas.height === 'number' && canvas.height > 0) return canvas.height;
      var cs = window.getComputedStyle(canvas);
      var hs = parseInt(cs.height, 10);
      return (!isNaN(hs) && hs > 0) ? hs : 200;
    }
    return h;
  }

  function setCanvasHeight(canvas, newH){
    canvas.setAttribute('height', String(newH));
    canvas.height = newH;
    canvas.style.height = newH + 'px';
    canvas.style.maxHeight = newH + 'px';
  }

  function ensureControls(wrap){
    if (wrap.querySelector('.collab-controls')) return;

    var controls = document.createElement('div');
    controls.className = 'collab-controls';

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Mehr Platz';

    btn.addEventListener('click', function(){
      var canvas = wrap.querySelector('canvas');
      if (!canvas) return;

      var currentH = getCanvasHeight(canvas);

      var dataUrl = null;
      try { dataUrl = canvas.toDataURL('image/png'); } catch (e) { dataUrl = null; }

      var newH = currentH + 100;
      setCanvasHeight(canvas, newH);

      if (dataUrl){
        var img = new Image();
        img.onload = function(){
          try{
            var ctx = canvas.getContext('2d');
            if (ctx) ctx.drawImage(img, 0, 0);
          } catch (e) {}
        };
        img.src = dataUrl;
      }
    });

    controls.appendChild(btn);
    wrap.appendChild(controls);
  }

  function fixCollabCanvasSizesVisibleOnly(){
    document.querySelectorAll('.onlyTextbook details.spoiler .collab-wrap').forEach(function(wrap){
      if (!isActuallyVisible(wrap)) return;

      var canvas = wrap.querySelector('canvas');
      if (!canvas) return;

      var h = getCanvasHeight(canvas);
      canvas.style.height = h + 'px';
      canvas.style.maxHeight = h + 'px';

      ensureControls(wrap);
    });
  }

  function hookDetailsToggle(){
    document.querySelectorAll('.onlyTextbook details.spoiler').forEach(function(det){
      if (det.__liaHooked) return;
      det.__liaHooked = true;

      det.addEventListener('toggle', function(){
        if (det.open) requestAnimationFrame(fixCollabCanvasSizesVisibleOnly);
      });
    });
  }

  /* ==================== Kernlogik: Boost ohne Rueckkopplung ==================== */
  let lastMode = null;
  let lastSettingsRaw = null;
  let lastKnownStep = 1;
  let sampling = false;

  function maybeSampleAndApplyPresentationBoost(mode, settingsRaw){
    // Lehrbuch: nichts überschreiben, aber Step merken (echte Größe)
    if (mode !== "presentation"){
      clearPresentationFontOverride();
      const step = pxToStep0to2(getMainFontPx());
      lastKnownStep = step;
      applyGridMinWidth(step);
      return;
    }

    // Praesi: nur bei Aenderung (Moduswechsel oder settings geaendert) sauber messen
    const needResample = (lastMode !== "presentation") || (settingsRaw !== lastSettingsRaw);

    if (!needResample){
      // ohne Resample einfach anwenden
      const px = PRES_PX[lastKnownStep];
      setPresentationFontOverride(px);
      applyGridMinWidth(lastKnownStep);
      return;
    }

    if (sampling) return;
    sampling = true;

    // 1) Override weg, damit wir die "echte" LiaScript-Schriftstufe messen
    clearPresentationFontOverride();

    // 2) Naechster Frame: messen, dann boost setzen
    requestAnimationFrame(function(){
      const step = pxToStep0to2(getMainFontPx());
      lastKnownStep = step;

      const px = PRES_PX[step];
      setPresentationFontOverride(px);

      applyGridMinWidth(step);

      sampling = false;
    });
  }

  function renderAll(){
    const mode = detectMode();
    const settingsRaw = safeGetSettingsRaw();

    applyModeAttr();
    applyModeVisibility();

    maybeSampleAndApplyPresentationBoost(mode, settingsRaw);

    requestAnimationFrame(function(){
      hookDetailsToggle();
      fixCollabCanvasSizesVisibleOnly();
    });

    lastMode = mode;
    lastSettingsRaw = settingsRaw;
  }

  function start(){
    renderAll();

    // Polling ist notwendig, weil LiaScript settings nicht immer per Event signalisiert
    setInterval(renderAll, 400);

    window.addEventListener("storage", function(e){
      if (!e || e.key === "settings") renderAll();
    });

    var obs = new MutationObserver(function(){
      hookDetailsToggle();
      fixCollabCanvasSizesVisibleOnly();
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });

    window.addEventListener("resize", renderAll);
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", start, { once:true });
  } else {
    start();
  }
})();
</script>
