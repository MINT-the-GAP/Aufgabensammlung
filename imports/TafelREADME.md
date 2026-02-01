


<!--
version:  0.0.1
language: de
comment: LiaScript – Presentation: volle Breite + Schriftgrößen-Boost (presentation/slides)
author: Martin Lommatzsch


@style
:root{
  /* seitlicher Sicherheitsabstand im Presentation-Modus */
  --pres-side-gap: 12px;

  /* wird per JS gesetzt (18/24/32px) oder "unset" */
  --lia-pres-font: unset;
}

/* =========================================================
   1) Präsentation: wirklich volle Breite (NUR presentation!)
      Slides: KEINE Breiten-Overrides (sonst Folienfenster kaputt)
   ========================================================= */

html[data-lia-mode="presentation"] body{
  margin: 0 !important;
}

/* NUR main anfassen, nicht .slides/.lia-slide/.wrapper/etc. */
html[data-lia-mode="presentation"] main{
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;

  box-sizing: border-box !important;
  padding-left:  var(--pres-side-gap) !important;
  padding-right: var(--pres-side-gap) !important;
}

/* =========================================================
   2) Schrift-Boost: presentation UND slides
   ========================================================= */
html[data-lia-mode="presentation"] main,
html[data-lia-mode="slides"] main{
  font-size: var(--lia-pres-font) !important;
}
@end



@onload
(function () {
  // ---------------------------------------------------------
  // Guard: Import kann mehrfach passieren -> nur 1x initialisieren
  // ---------------------------------------------------------
  const REGKEY = "__LIA_TAFELMODE_IMPORT_V1__";
  if (window[REGKEY]) return;
  window[REGKEY] = true;

  const SETTINGS_KEY = "settings";
  const PRES_PX = [18, 24, 32];

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

  function setVar(k, v){
    document.documentElement.style.setProperty(k, v);
  }

  let sampling = false;

  function applyFontLogic(){
    const mode = detectMode();
    const isPresLike = (mode === "presentation" || mode === "slides");

    if (!isPresLike){
      setVar("--lia-pres-font", "unset");
      return;
    }

    if (sampling) return;
    sampling = true;

    // erst reset, dann messen
    setVar("--lia-pres-font", "unset");

    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        const step = pxToStep0to2(getMainFontPx());
        setVar("--lia-pres-font", PRES_PX[step] + "px");
        sampling = false;
      });
    });
  }

  let lastRaw = null;
  let lastMode = null;

  function render(){
    const raw  = safeGetSettingsRaw();
    const mode = detectMode();

    applyModeAttr();

    if (raw !== lastRaw || mode !== lastMode){
      applyFontLogic();
      lastRaw  = raw;
      lastMode = mode;
    }
  }

  render();
  setInterval(render, 350);

  window.addEventListener("storage", function(e){
    if (!e || e.key === SETTINGS_KEY) render();
  });

  window.addEventListener("resize", function(){
    applyFontLogic();
  });
})();
@end

-->






# Tafelmodus


Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.


