<!--
version:  0.0.2
language: de



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

# Dann schauen wir mal

Wechsel Lehrbuch ↔ Präsentation ↔ Slides und ändere die Schriftgröße.

<div> @RechenplatzT </div>

<section class="flex-container">

  <div class="flex-child">

$a)\;\;$ Wie viel sind $40\%$ von $6000\,€$? \

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

<div> @RechenplatzPT </div>

[[ 2400 ]]

</div>

<div class="flex-child">

$b)\;\;$ Wie viel sind $40\%$ von $6000\,€$? \

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.



<div> @RechenplatzP </div>

[[ 2400 ]]

  </div>

  <div class="flex-child">

$a)\;\;$ Wie viel sind $40\%$ von $6000\,€$? \

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.


<div> @RechenplatzT </div>

[[ 2400 ]]

</div>

<div class="flex-child">

$b)\;\;$ Wie viel sind $40\%$ von $6000\,€$? \

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.



<div> @RechenplatzT </div>

[[ 2400 ]]

  </div>

  <div class="flex-child">

$a)\;\;$ Wie viel sind $40\%$ von $6000\,€$? \

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.


<div> @RechenplatzT </div>

[[ 2400 ]]

</div>

<div class="flex-child">

$b)\;\;$ Wie viel sind $40\%$ von $6000\,€$? \

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.



<div> @RechenplatzT </div>

[[ 2400 ]]

  </div>


</section>






