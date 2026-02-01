
<!--
version:  0.0.1
language: de
comment: LiaScript – Presentation: 100% Viewportbreite + Schriftgrößen-Boost (presentation/slides) | robust via ensure() in root+content
author: Martin Lommatzsch


@style
:root{
  /* seitlicher Sicherheitsabstand im Presentation-Modus */
  --pres-side-gap: 12px;

  /* wird per JS gesetzt (18/24/32px) oder "unset" */
  --lia-pres-font: unset;
}

/* Schrift-Boost: presentation UND slides */
html[data-lia-mode="presentation"] main,
html[data-lia-mode="slides"] main{
  font-size: var(--lia-pres-font) !important;
}
@end


@onload
(function () {

  // =========================================================
  // Root/Content (iframe-safe)
  // =========================================================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT_WIN = getRootWindow();
  const ROOT_DOC = ROOT_WIN.document;

  const CONTENT_WIN = window;
  const CONTENT_DOC = document;

  // =========================================================
  // Per-Dokument Instance (Import mehrfach => keine Kollision)
  // =========================================================
  const REGKEY = "__LIA_PRES_WIDE_REG_V1__";
  ROOT_WIN[REGKEY] = ROOT_WIN[REGKEY] || { instances: {} };
  const REG = ROOT_WIN[REGKEY];

  const DOC_ID =
    (CONTENT_DOC.baseURI || CONTENT_WIN.location.href || "") +
    "::" +
    (CONTENT_DOC.title || "");

  if (REG.instances[DOC_ID]?.__alive) return;

  const I = REG.instances[DOC_ID] = {
    __alive: true,
    pending: false,
    lastRaw: null,
    lastMode: null,
    sampling: false,
    lastAppliedFont: null
  };

  // =========================================================
  // Robust CSS Injection (Root + Content)
  // =========================================================
  const STYLE_ID = "lia-pres-wide-style-v1";

  const CSS = `
    :root{
      --pres-side-gap: 12px;
      --lia-pres-font: unset;
    }

    /* ============================================
       Presentation: wirklich Viewportbreite
       (nur presentation! slides NICHT anfassen)
       ============================================ */
    html[data-lia-mode="presentation"] body{
      margin: 0 !important;
      padding: 0 !important;
      overflow-x: hidden !important;
    }

    /* NUR main – aber viewport-basiert (nicht 100% vom Container) */
    html[data-lia-mode="presentation"] main{
      width: calc(100vw - (2 * var(--pres-side-gap))) !important;
      max-width: calc(100vw - (2 * var(--pres-side-gap))) !important;

      margin-left: auto !important;
      margin-right: auto !important;

      box-sizing: border-box !important;
      padding-left:  var(--pres-side-gap) !important;
      padding-right: var(--pres-side-gap) !important;
    }

    /* Schrift-Boost: presentation UND slides */
    html[data-lia-mode="presentation"] main,
    html[data-lia-mode="slides"] main{
      font-size: var(--lia-pres-font) !important;
    }
  `;

  function ensureStyle(doc){
    try{
      if (!doc || !doc.head) return false;
      let st = doc.getElementById(STYLE_ID);
      if (!st){
        st = doc.createElement("style");
        st.id = STYLE_ID;
        st.textContent = CSS;
        doc.head.appendChild(st);
      }
      return true;
    }catch(e){
      return false;
    }
  }

  // =========================================================
  // Mode detection (localStorage settings + Fallbacks)
  // =========================================================
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

      // wahrscheinliche Keys zuerst
      for (const k in v){
        if (!Object.prototype.hasOwnProperty.call(v, k)) continue;
        const key = norm(k);
        if (key === "mode" || key === "view" || key === "layout" || key === "format"){
          const m = walk(v[k]);
          if (m) return m;
        }
      }

      // dann breit suchen
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
    // 1) localStorage/settings (primär)
    const raw = safeGetSettingsRaw();
    if (raw){
      try {
        const obj = JSON.parse(raw);
        const m = findModeInJson(obj);
        if (m) return m;
      } catch (e){
        const s = norm(raw);
        if (s.includes("presentation")) return "presentation";
        if (s.includes("slides"))       return "slides";
        if (s.includes("textbook") || s.includes("book")) return "textbook";
      }
    }

    // 2) Fallback: dataset/class in content/root
    try{
      const c = norm(CONTENT_DOC.documentElement.getAttribute("data-lia-mode") || "");
      if (c) return c;
    }catch(_){}
    try{
      const r = norm(ROOT_DOC.documentElement.getAttribute("data-lia-mode") || "");
      if (r) return r;
    }catch(_){}

    try{
      const cc = norm(CONTENT_DOC.documentElement.className || "") + " " + norm(CONTENT_DOC.body.className || "");
      if (cc.includes("presentation")) return "presentation";
      if (cc.includes("slides"))       return "slides";
      if (cc.includes("textbook"))     return "textbook";
    }catch(_){}
    try{
      const rc = norm(ROOT_DOC.documentElement.className || "") + " " + norm(ROOT_DOC.body.className || "");
      if (rc.includes("presentation")) return "presentation";
      if (rc.includes("slides"))       return "slides";
      if (rc.includes("textbook"))     return "textbook";
    }catch(_){}

    return "unknown";
  }

  function setModeAttr(doc, mode){
    try { doc.documentElement.dataset.liaMode = mode; } catch(e){}
  }

  // =========================================================
  // Inline-Override (nur presentation!) – killt Container-Constraints
  // =========================================================
  function applyInlinePresentation(doc, mode){
    if (!doc) return;

    const body = doc.body;
    const main = doc.querySelector("main");

    if (mode !== "presentation"){
      // cleanup (defensiv)
      try{
        if (body){
          body.style.removeProperty("margin");
          body.style.removeProperty("padding");
          body.style.removeProperty("overflow-x");
        }
        if (main){
          main.style.removeProperty("width");
          main.style.removeProperty("max-width");
          main.style.removeProperty("margin-left");
          main.style.removeProperty("margin-right");
          main.style.removeProperty("padding-left");
          main.style.removeProperty("padding-right");
          main.style.removeProperty("box-sizing");
        }
      }catch(_){}
      return;
    }

    // apply (viewport-basiert)
    try{
      if (body){
        body.style.setProperty("margin", "0", "important");
        body.style.setProperty("padding", "0", "important");
        body.style.setProperty("overflow-x", "hidden", "important");
      }
      if (main){
        main.style.setProperty("width", "calc(100vw - (2 * var(--pres-side-gap)))", "important");
        main.style.setProperty("max-width", "calc(100vw - (2 * var(--pres-side-gap)))", "important");
        main.style.setProperty("margin-left", "auto", "important");
        main.style.setProperty("margin-right", "auto", "important");
        main.style.setProperty("box-sizing", "border-box", "important");
        main.style.setProperty("padding-left", "var(--pres-side-gap)", "important");
        main.style.setProperty("padding-right", "var(--pres-side-gap)", "important");
      }
    }catch(_){}
  }

  // =========================================================
  // Schriftgrößen-Boost (presentation+slides)
  // - misst Basis-Font ohne Override
  // - setzt dann 18/24/32px
  // =========================================================
  const PRES_PX = [18, 24, 32];

  function pxToStep0to2(px){
    if (px <= 17) return 0;
    if (px <= 19) return 1;
    return 2;
  }

  function getMainFontPx(doc){
    try{
      const main = (doc && doc.querySelector && doc.querySelector("main")) ? doc.querySelector("main") : null;
      const probe = main || (doc ? doc.documentElement : document.documentElement);
      const fs = parseFloat(getComputedStyle(probe).fontSize || "16");
      return isNaN(fs) ? 16 : fs;
    }catch(e){
      return 16;
    }
  }

  function setVar(doc, k, v){
    try { doc.documentElement.style.setProperty(k, v); } catch(e){}
  }

  function applyFontLogic(mode){
    const isPresLike = (mode === "presentation" || mode === "slides");

    if (!isPresLike){
      setVar(CONTENT_DOC, "--lia-pres-font", "unset");
      setVar(ROOT_DOC,    "--lia-pres-font", "unset");
      I.lastAppliedFont = null;
      return;
    }

    if (I.sampling) return;
    I.sampling = true;

    // wichtig: zuerst Override entfernen, dann messen
    setVar(CONTENT_DOC, "--lia-pres-font", "unset");
    setVar(ROOT_DOC,    "--lia-pres-font", "unset");

    ROOT_WIN.requestAnimationFrame(function(){
      ROOT_WIN.requestAnimationFrame(function(){
        // bevorzugt Content messen (wo der Text ist), fallback Root
        const basePx = getMainFontPx(CONTENT_DOC) || getMainFontPx(ROOT_DOC) || 16;
        const step = pxToStep0to2(basePx);
        const v = PRES_PX[step] + "px";

        if (I.lastAppliedFont !== v){
          setVar(CONTENT_DOC, "--lia-pres-font", v);
          setVar(ROOT_DOC,    "--lia-pres-font", v);
          I.lastAppliedFont = v;
        }

        I.sampling = false;
      });
    });
  }

  // =========================================================
  // ensure() / tick() – verhindert “läuft einmal zu früh”
  // =========================================================
  function schedule(){
    if (I.pending) return;
    I.pending = true;
    ROOT_WIN.requestAnimationFrame(function(){
      I.pending = false;
      render();
    });
  }

  function render(){
    // Styles in beide Dokumente
    ensureStyle(CONTENT_DOC);
    ensureStyle(ROOT_DOC);

    const raw  = safeGetSettingsRaw();
    const mode = detectMode();

    // Mode-Attr in beide Dokumente
    setModeAttr(CONTENT_DOC, mode);
    setModeAttr(ROOT_DOC,    mode);

    // presentation: inline Breite erzwingen (root+content)
    applyInlinePresentation(CONTENT_DOC, mode);
    applyInlinePresentation(ROOT_DOC,    mode);

    // Font-Boost nur wenn settings/mode wechseln (oder forced über resize)
    if (raw !== I.lastRaw || mode !== I.lastMode){
      applyFontLogic(mode);
      I.lastRaw  = raw;
      I.lastMode = mode;
    }
  }

  // Boot
  schedule();

  // Poll (Mode toggles sind nicht immer sauber eventbar)
  ROOT_WIN.setInterval(schedule, 350);

  // Storage/Resize Trigger
  ROOT_WIN.addEventListener("storage", function(e){
    if (!e || e.key === SETTINGS_KEY) schedule();
  });

  ROOT_WIN.addEventListener("resize", function(){
    // bei resize Font nochmal “sauber” setzen
    I.lastRaw = null;
    I.lastMode = null;
    schedule();
  });

  // DOM changes (wenn Lia erst später main/containers setzt)
  try{
    const mo = new MutationObserver(schedule);
    mo.observe(CONTENT_DOC.documentElement, { childList:true, subtree:true });
  }catch(e){}

  try{
    const mo2 = new MutationObserver(schedule);
    mo2.observe(ROOT_DOC.documentElement, { childList:true, subtree:true });
  }catch(e){}

})();
@end

-->






# Tafelmodus


Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.


