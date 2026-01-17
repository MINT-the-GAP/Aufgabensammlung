<!--
version:  0.0.2
language: de

@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

input {
  text-align: center;
}

/* =======================================================================
   LAYOUT: NICHT Flex, SONDERN GRID (robust gegen "Text macht alles kaputt")
   Ziel: Immer nebeneinander, solange es passt (auto-fit + minmax).
   ======================================================================= */

:root {
  --flex-child-minw: 350px;   /* wird per JS (Schriftgroesse) angepasst */
  --pres-side-gap: 12px;      /* Praesentationsmodus: kleiner Rand */
}

/* "flex-container" bleibt als Klassenname, ist aber ein Grid-Container */
.flex-container {
  display: grid !important;

  /* so viele Spalten wie passen, jede Spalte mindestens --flex-child-minw */
  grid-template-columns: repeat(auto-fit, minmax(var(--flex-child-minw), 1fr)) !important;

  gap: 20px;
  align-items: stretch;

  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

/* Grid-Items */
.flex-child {
  box-sizing: border-box;
  max-width: 100%;

  /* verhindert Ueberlauf durch lange Tokens */
  overflow-wrap: anywhere;
  word-break: break-word;
}

/* Mobile: immer 1 Spalte */
@media (max-width: 400px) {
  .flex-container {
    grid-template-columns: 1fr !important;
  }
}


/* ===================== SPOILER / COLLAB ===================== */

details.spoiler > summary {
  cursor: pointer;
  font-weight: 600;
}
details.spoiler[open] > summary {
  margin-bottom: 0.5em;
}
details.spoiler {
  margin: 0.5em 0;
}

/* Collab-Wrap: darf NIE breiter als die Spalte werden */
details.spoiler .collab-wrap {
  display: block;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

/* Alles, was Collaborative intern erzeugt, wird ebenfalls gebremst */
details.spoiler .collab-wrap * {
  max-width: 100%;
  box-sizing: border-box;
}

/* Canvas: Breite 100% relativ zur collab-wrap, Höhe per JS */
details.spoiler .collab-wrap canvas {
  width: 100% !important;
  max-width: 100% !important;
  display: block;
  touch-action: none;
}

/* Button-Leiste: unten rechts am Ende (unterhalb) der Canvas */
details.spoiler .collab-wrap .collab-controls {
  margin-top: 6px;
  display: flex;
  justify-content: flex-end;
}

details.spoiler .collab-wrap .collab-controls button {
  padding: 6px 10px;
  font-size: 0.9rem;
  border: 1px solid currentColor;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
}


/* ===================== PRAESENTATION: volle Breite ===================== */

html[data-lia-mode="presentation"] body {
  margin: 0 !important;
}

/* Sehr aggressiv: typische Content-Container auf fast volle Viewport-Breite */
html[data-lia-mode="presentation"] main,
html[data-lia-mode="presentation"] .lia-content,
html[data-lia-mode="presentation"] .lia-slide,
html[data-lia-mode="presentation"] .slides,
html[data-lia-mode="presentation"] .content,
html[data-lia-mode="presentation"] .container,
html[data-lia-mode="presentation"] .wrapper {
  width: calc(100vw - (2 * var(--pres-side-gap))) !important;
  max-width: calc(100vw - (2 * var(--pres-side-gap))) !important;
  margin-left: auto !important;
  margin-right: auto !important;
  box-sizing: border-box !important;
}

html[data-lia-mode="presentation"] main,
html[data-lia-mode="presentation"] .lia-content,
html[data-lia-mode="presentation"] .lia-slide,
html[data-lia-mode="presentation"] .slides {
  padding-left: var(--pres-side-gap) !important;
  padding-right: var(--pres-side-gap) !important;
}

@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/mermaid_template/0.1.4/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js

import: https://raw.githubusercontent.com/liaTemplates/ABCjs/main/README.md
        https://raw.githubusercontent.com/LiaTemplates/Speech-Recognition-Quiz/refs/heads/main/README.md
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
  /* ==================== 1) Modus -> data-lia-mode ==================== */

  function norm(x) { return String(x == null ? "" : x).toLowerCase(); }

  function safeGetSettingsRaw() {
    try { return localStorage.getItem("settings"); }
    catch (e) { return null; }
  }

  function findModeInJson(obj) {
    const seen = new Set();

    function walk(v) {
      if (v == null) return null;

      if (typeof v === "string") {
        const s = norm(v);
        if (s.includes("presentation")) return "presentation";
        if (s.includes("slides"))       return "slides";
        if (s.includes("textbook"))     return "textbook";
        if (s.includes("book"))         return "textbook";
        return null;
      }

      if (typeof v !== "object") return null;
      if (seen.has(v)) return null;
      seen.add(v);

      for (const k in v) {
        if (!Object.prototype.hasOwnProperty.call(v, k)) continue;
        const key = norm(k);
        if (key === "mode" || key === "view" || key === "layout" || key === "format") {
          const m = walk(v[k]);
          if (m) return m;
        }
      }

      for (const k in v) {
        if (!Object.prototype.hasOwnProperty.call(v, k)) continue;
        const m = walk(v[k]);
        if (m) return m;
      }

      return null;
    }

    return walk(obj);
  }

  function detectMode() {
    const raw = safeGetSettingsRaw();
    if (!raw) return "unknown";

    try {
      const obj = JSON.parse(raw);
      return findModeInJson(obj) || "unknown";
    } catch (e) {
      const s = norm(raw);
      if (s.includes("presentation")) return "presentation";
      if (s.includes("slides"))       return "slides";
      if (s.includes("textbook") || s.includes("book")) return "textbook";
      return "unknown";
    }
  }

  function applyModeAttr() {
    document.documentElement.dataset.liaMode = detectMode();
  }

  /* ==================== 2) Sichtbarkeit onlyPresentation/onlyTextbook ==================== */

  function setDisplayForAll(selector, display) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.style.display = display;
    });
  }

  function applyModeVisibility() {
    const isPres = (detectMode() === "presentation");
    setDisplayForAll(".onlyPresentation", isPres ? "block" : "none");
    setDisplayForAll(".onlyTextbook",     isPres ? "none"  : "block");
  }

  /* ==================== 3) Schriftgroesse -> --flex-child-minw ==================== */

  const BASE_MIN = 200; // px
  const STEP_PX  = 100;  // px pro Stufe
  const SETTINGS_KEY = "settings";

  function safeGetSettingsObj() {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function deepFindFontSetting(obj) {
    const seen = new Set();
    let found = null;

    function isCandidateKey(k) {
      k = norm(k);
      return (
        k === "fontsize" ||
        k === "textsize" ||
        (k.includes("font") && k.includes("size")) ||
        (k.includes("text") && k.includes("size"))
      );
    }

    function mapStringToStep(s) {
      s = norm(s);
      if (s.includes("small") || s.includes("klein")) return 0;
      if (s.includes("normal") || s.includes("medium") || s.includes("mittel")) return 1;
      if (s.includes("large") || s.includes("gross") || s.includes("groß")) return 2;
      if (s.includes("xlarge") || s.includes("xl") || s.includes("sehr")) return 3;
      const n = parseInt(s, 10);
      if (!isNaN(n)) return n;
      return null;
    }

    function walk(v) {
      if (found != null) return;
      if (v == null) return;

      const t = typeof v;

      if (t === "number") { found = v; return; }
      if (t === "string") {
        const ms = mapStringToStep(v);
        if (ms != null) found = ms;
        return;
      }

      if (t !== "object") return;
      if (seen.has(v)) return;
      seen.add(v);

      for (const k in v) {
        if (!Object.prototype.hasOwnProperty.call(v, k)) continue;
        if (isCandidateKey(k)) {
          walk(v[k]);
          if (found != null) return;
        }
      }

      for (const k in v) {
        if (!Object.prototype.hasOwnProperty.call(v, k)) continue;
        walk(v[k]);
        if (found != null) return;
      }
    }

    walk(obj);
    return found;
  }

  function getMainFontPx() {
    const main = document.querySelector("main") || document.documentElement;
    const fs = getComputedStyle(main).fontSize;
    const v = parseFloat(fs);
    return (isNaN(v) || v <= 0) ? 16 : v;
  }

  function fontPxToStep(px) {
    if (px <= 15.5) return 0;
    if (px <= 17.5) return 1;
    if (px <= 19.5) return 2;
    return 3;
  }

  function computeFontStep() {
    const settings = safeGetSettingsObj();
    const fromSettings = settings ? deepFindFontSetting(settings) : null;

    if (fromSettings != null && !isNaN(parseInt(fromSettings, 10))) {
      return Math.max(0, Math.min(3, parseInt(fromSettings, 10)));
    }

    return fontPxToStep(getMainFontPx());
  }

  function applyGridMinWidth() {
    const step = computeFontStep();
    const minw = BASE_MIN + STEP_PX * step;
    document.documentElement.style.setProperty("--flex-child-minw", minw + "px");
  }

  /* ==================== 4) Collab: Height + Mehr-Platz-Button ==================== */

  function isActuallyVisible(el) {
    return !!(el && (el.offsetWidth || el.offsetHeight || el.getClientRects().length));
  }

  function getCanvasHeight(canvas) {
    var hAttr = canvas.getAttribute('height');
    var h = hAttr ? parseInt(hAttr, 10) : null;

    if (!h || isNaN(h)) {
      if (typeof canvas.height === 'number' && canvas.height > 0) return canvas.height;
      var cs = window.getComputedStyle(canvas);
      var hs = parseInt(cs.height, 10);
      return (!isNaN(hs) && hs > 0) ? hs : 200;
    }
    return h;
  }

  function setCanvasHeight(canvas, newH) {
    canvas.setAttribute('height', String(newH));
    canvas.height = newH;
    canvas.style.height = newH + 'px';
    canvas.style.maxHeight = newH + 'px';
  }

  function ensureControls(wrap) {
    if (wrap.querySelector('.collab-controls')) return;

    var controls = document.createElement('div');
    controls.className = 'collab-controls';

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Mehr Platz';

    btn.addEventListener('click', function () {
      var canvas = wrap.querySelector('canvas');
      if (!canvas) return;

      var currentH = getCanvasHeight(canvas);

      var dataUrl = null;
      try { dataUrl = canvas.toDataURL('image/png'); } catch (e) { dataUrl = null; }

      var newH = currentH + 100;
      setCanvasHeight(canvas, newH);

      if (dataUrl) {
        var img = new Image();
        img.onload = function () {
          try {
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

  function fixCollabCanvasSizesVisibleOnly() {
    document.querySelectorAll('.onlyTextbook details.spoiler .collab-wrap').forEach(function (wrap) {
      if (!isActuallyVisible(wrap)) return;

      var canvas = wrap.querySelector('canvas');
      if (!canvas) return;

      var h = getCanvasHeight(canvas);
      canvas.style.height = h + 'px';
      canvas.style.maxHeight = h + 'px';

      ensureControls(wrap);
    });
  }

  function hookDetailsToggle() {
    document.querySelectorAll('.onlyTextbook details.spoiler').forEach(function (det) {
      if (det.__liaHooked) return;
      det.__liaHooked = true;

      det.addEventListener('toggle', function () {
        if (det.open) {
          requestAnimationFrame(function () {
            fixCollabCanvasSizesVisibleOnly();
          });
        }
      });
    });
  }

  /* ==================== Zentraler Render ==================== */

  function renderAll() {
    applyModeAttr();
    applyModeVisibility();
    applyGridMinWidth();

    requestAnimationFrame(function () {
      hookDetailsToggle();
      fixCollabCanvasSizesVisibleOnly();
    });
  }

  function start() {
    renderAll();

    // Polling: LiaScript setzt settings oft ohne storage-event
    setInterval(renderAll, 500);

    window.addEventListener("storage", function (e) {
      if (!e || e.key === "settings") renderAll();
    });

    // DOM-Änderungen (LiaScript rendert dynamisch)
    var obs = new MutationObserver(function () {
      hookDetailsToggle();
      fixCollabCanvasSizesVisibleOnly();
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });

    window.addEventListener('resize', function () {
      applyGridMinWidth();
      fixCollabCanvasSizesVisibleOnly();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
</script>
