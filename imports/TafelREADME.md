<!--
version:  0.0.2
language: de
comment: LiaScript – Tafelmodus (import-sicher): Presentation volle Breite + Schriftgrößen-Boost + A-Button/Slider (nur Presentation)
author: Martin Lommatzsch


@style
:root{
  /* seitlicher Sicherheitsabstand im Presentation-Modus */
  --lia-tafel-fontui-pres-side-gap: 12px;

  /* Fontgröße für presentation/slides: "unset" oder "NNpx" */
  --lia-tafel-fontui-pres-font: unset;

  /* LiaTheme-Akzentfarbe (wird per JS ermittelt) */
  --lia-tafel-fontui-accent: rgb(11,95,255);

  /* Slider-Range */
  --lia-tafel-fontui-min: 14;
  --lia-tafel-fontui-max: 48;
}

/* =========================================================
   1) Presentation: volle Breite (NUR presentation!)
   ========================================================= */
html[data-lia-mode="presentation"] body{
  margin: 0 !important;
  overflow-x: hidden !important;
}

/* NUR main anfassen (keine Slide-Wrapper!) */
html[data-lia-mode="presentation"] main{
  width: calc(100vw - (2 * var(--lia-tafel-fontui-pres-side-gap))) !important;
  max-width: calc(100vw - (2 * var(--lia-tafel-fontui-pres-side-gap))) !important;

  margin-left: auto !important;
  margin-right: auto !important;

  box-sizing: border-box !important;
  padding-left:  var(--lia-tafel-fontui-pres-side-gap) !important;
  padding-right: var(--lia-tafel-fontui-pres-side-gap) !important;
}

/* =========================================================
   2) Schrift-Boost: presentation UND slides
   ========================================================= */
html[data-lia-mode="presentation"] main,
html[data-lia-mode="slides"] main{
  font-size: var(--lia-tafel-fontui-pres-font) !important;
}
@end



@onload
(function () {

  // =========================================================
  // Root/Content (iframe-safe)
  // =========================================================
  function __liaTafelFontUI_getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const __LIA_TAFEL_FONTUI_ROOT_WIN = __liaTafelFontUI_getRootWindow();
  const __LIA_TAFEL_FONTUI_ROOT_DOC = __LIA_TAFEL_FONTUI_ROOT_WIN.document;

  const __LIA_TAFEL_FONTUI_CONTENT_WIN = window;
  const __LIA_TAFEL_FONTUI_CONTENT_DOC = document;

  // =========================================================
  // Per-Dokument Instance (Import mehrfach => keine Kollision)
  // =========================================================
  const __LIA_TAFEL_FONTUI_REGKEY = "__LIA_TAFEL_FONTUI_REG_V1__";
  __LIA_TAFEL_FONTUI_ROOT_WIN[__LIA_TAFEL_FONTUI_REGKEY] =
    __LIA_TAFEL_FONTUI_ROOT_WIN[__LIA_TAFEL_FONTUI_REGKEY] || { instances: {} };

  const __LIA_TAFEL_FONTUI_REG = __LIA_TAFEL_FONTUI_ROOT_WIN[__LIA_TAFEL_FONTUI_REGKEY];

  const __LIA_TAFEL_FONTUI_DOC_ID =
    (__LIA_TAFEL_FONTUI_CONTENT_DOC.baseURI || __LIA_TAFEL_FONTUI_CONTENT_WIN.location.href || "") +
    "::" +
    (__LIA_TAFEL_FONTUI_CONTENT_DOC.title || "");

  if (__LIA_TAFEL_FONTUI_REG.instances[__LIA_TAFEL_FONTUI_DOC_ID]?.__alive) return;

  const __liaTafelFontUI_I =
    __LIA_TAFEL_FONTUI_REG.instances[__LIA_TAFEL_FONTUI_DOC_ID] = {
      __alive: true,
      ticking: false,
      lastRaw: null,
      lastMode: null
    };

  // =========================================================
  // Helpers: CSS Injection (Root)
  // =========================================================
  function __liaTafelFontUI_ensureStyle(doc, id, css){
    if (!doc || doc.getElementById(id)) return;
    const st = doc.createElement("style");
    st.id = id;
    st.textContent = css;
    (doc.head || doc.documentElement).appendChild(st);
  }

  function __liaTafelFontUI_setVar(doc, k, v){
    try { doc.documentElement.style.setProperty(k, v); } catch(e){}
  }

  function __liaTafelFontUI_norm(x){ return String(x == null ? "" : x).toLowerCase(); }

  // =========================================================
  // Mode detection (Lia settings in localStorage)
  // =========================================================
  const __LIA_TAFEL_FONTUI_SETTINGS_KEY = "settings";
  const __LIA_TAFEL_FONTUI_FONT_KEY     = "__lia_tafel_fontui_px_v1"; // Slider-Wert (px)

  function __liaTafelFontUI_safeGetSettingsRaw(){
    try { return localStorage.getItem(__LIA_TAFEL_FONTUI_SETTINGS_KEY); }
    catch (e) { return null; }
  }

  function __liaTafelFontUI_findModeInJson(obj){
    const seen = new Set();

    function walk(v){
      if (v == null) return null;

      if (typeof v === "string"){
        const s = __liaTafelFontUI_norm(v);
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
        const key = __liaTafelFontUI_norm(k);
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

  function __liaTafelFontUI_detectMode(){
    const raw = __liaTafelFontUI_safeGetSettingsRaw();
    if (!raw) return "unknown";

    try{
      const obj = JSON.parse(raw);
      return __liaTafelFontUI_findModeInJson(obj) || "unknown";
    }catch(e){
      const s = __liaTafelFontUI_norm(raw);
      if (s.includes("presentation")) return "presentation";
      if (s.includes("slides"))       return "slides";
      if (s.includes("textbook") || s.includes("book")) return "textbook";
      return "unknown";
    }
  }

  function __liaTafelFontUI_applyModeAttr(mode){
    try { __LIA_TAFEL_FONTUI_CONTENT_DOC.documentElement.dataset.liaMode = mode; } catch(e){}
  }

  // =========================================================
  // Theme Accent (LiaTheme-Farbe) -> CSS Var
  // =========================================================
  function __liaTafelFontUI_getLiaAccentColor(doc){
    try{
      const d = doc || document;
      const body = d.body || d.documentElement;

      const existing = d.querySelector(".lia-btn");
      if (existing){
        const bg = getComputedStyle(existing).backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;
      }

      const probe = d.createElement("button");
      probe.className = "lia-btn";
      probe.type = "button";
      probe.textContent = "x";
      probe.style.position = "absolute";
      probe.style.left = "-9999px";
      probe.style.top  = "-9999px";
      probe.style.visibility = "hidden";
      body.appendChild(probe);

      const bg = getComputedStyle(probe).backgroundColor;
      probe.remove();

      if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;
    }catch(e){}
    return null;
  }

  function __liaTafelFontUI_syncAccent(){
    const acc =
      __liaTafelFontUI_getLiaAccentColor(__LIA_TAFEL_FONTUI_ROOT_DOC) ||
      __liaTafelFontUI_getLiaAccentColor(__LIA_TAFEL_FONTUI_CONTENT_DOC) ||
      "rgb(11,95,255)";

    __liaTafelFontUI_setVar(__LIA_TAFEL_FONTUI_ROOT_DOC,    "--lia-tafel-fontui-accent", acc);
    __liaTafelFontUI_setVar(__LIA_TAFEL_FONTUI_CONTENT_DOC, "--lia-tafel-fontui-accent", acc);
  }

  // =========================================================
  // Font logic (auto 18/24/32) + Slider override
  // =========================================================
  const __LIA_TAFEL_FONTUI_AUTO_PX = [18, 24, 32];

  function __liaTafelFontUI_pxToStep0to2(px){
    if (px <= 17) return 0;
    if (px <= 19) return 1;
    return 2;
  }

  function __liaTafelFontUI_getMainFontPx(){
    const main = __LIA_TAFEL_FONTUI_CONTENT_DOC.querySelector("main") || __LIA_TAFEL_FONTUI_CONTENT_DOC.documentElement;
    const fs = parseFloat(getComputedStyle(main).fontSize || "16");
    return isNaN(fs) ? 16 : fs;
  }

  function __liaTafelFontUI_getSavedFontPx(){
    try{
      const v = localStorage.getItem(__LIA_TAFEL_FONTUI_FONT_KEY);
      if (!v) return null;
      const n = parseInt(v, 10);
      if (!isFinite(n)) return null;
      return n;
    }catch(e){
      return null;
    }
  }

  function __liaTafelFontUI_clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

  function __liaTafelFontUI_setPresFontPx(px){
    __liaTafelFontUI_setVar(__LIA_TAFEL_FONTUI_CONTENT_DOC,
      "--lia-tafel-fontui-pres-font",
      (px == null ? "unset" : (px + "px"))
    );
  }

  let __liaTafelFontUI_sampling = false;

  function __liaTafelFontUI_applyFontLogic(mode){
    const isPresLike = (mode === "presentation" || mode === "slides");

    if (!isPresLike){
      __liaTafelFontUI_setPresFontPx(null);
      return;
    }

    const cs = getComputedStyle(__LIA_TAFEL_FONTUI_CONTENT_DOC.documentElement);
    const min = parseInt(cs.getPropertyValue("--lia-tafel-fontui-min") || "14", 10);
    const max = parseInt(cs.getPropertyValue("--lia-tafel-fontui-max") || "48", 10);

    const saved = __liaTafelFontUI_getSavedFontPx();
    if (saved != null){
      __liaTafelFontUI_setPresFontPx(__liaTafelFontUI_clamp(saved, min, max));
      return;
    }

    if (__liaTafelFontUI_sampling) return;
    __liaTafelFontUI_sampling = true;

    __liaTafelFontUI_setPresFontPx(null);

    __LIA_TAFEL_FONTUI_CONTENT_WIN.requestAnimationFrame(function(){
      __LIA_TAFEL_FONTUI_CONTENT_WIN.requestAnimationFrame(function(){
        const step = __liaTafelFontUI_pxToStep0to2(__liaTafelFontUI_getMainFontPx());
        __liaTafelFontUI_setPresFontPx(__LIA_TAFEL_FONTUI_AUTO_PX[step]);
        __liaTafelFontUI_sampling = false;
      });
    });
  }

  // =========================================================
  // Root UI: Dock + Button + Panel (nur Presentation)
  // =========================================================
  const __LIA_TAFEL_FONTUI_DOCK_ID   = "lia-tafel-fontui-dock-v1";
  const __LIA_TAFEL_FONTUI_BTN_ID    = "lia-tafel-fontui-btn-v1";
  const __LIA_TAFEL_FONTUI_PANEL_ID  = "lia-tafel-fontui-panel-v1";
  const __LIA_TAFEL_FONTUI_SLIDER_ID = "lia-tafel-fontui-slider-v1";

  const __LIA_TAFEL_FONTUI_BODYCLASS_PRES  = "lia-tafel-fontui-pres-v1";
  const __LIA_TAFEL_FONTUI_BODYCLASS_OPEN  = "lia-tafel-fontui-open-v1";

  __liaTafelFontUI_ensureStyle(__LIA_TAFEL_FONTUI_ROOT_DOC, "lia-tafel-fontui-style-root-v1", `
    /* Dock: fix oben links, wird per JS so positioniert, dass er NICHT über TOC/Textmarker liegt */
    #${__LIA_TAFEL_FONTUI_DOCK_ID}{
      position: fixed !important;
      z-index: 9999999 !important;

      display: none !important;
      align-items: center !important;
      gap: 8px !important;

      top: 8px !important;
      left: 8px !important;

      pointer-events: none !important; /* nur Button klickbar */
    }

    body.${__LIA_TAFEL_FONTUI_BODYCLASS_PRES} #${__LIA_TAFEL_FONTUI_DOCK_ID}{
      display: inline-flex !important;
    }

    #${__LIA_TAFEL_FONTUI_BTN_ID}{
      pointer-events: auto !important;

      position: relative !important;
      width: 32px !important;
      height: 32px !important;
      padding: 0 !important;
      margin: 0 !important;

      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;

      border: 0 !important;
      background: transparent !important;
      border-radius: 10px !important;

      cursor: pointer !important;
      user-select: none !important;
    }

    #${__LIA_TAFEL_FONTUI_BTN_ID}:hover{
      background: color-mix(in srgb, var(--lia-tafel-fontui-accent) 12%, transparent) !important;
    }
    #${__LIA_TAFEL_FONTUI_BTN_ID}:active{
      background: color-mix(in srgb, var(--lia-tafel-fontui-accent) 18%, transparent) !important;
    }

    #${__LIA_TAFEL_FONTUI_BTN_ID}:focus,
    #${__LIA_TAFEL_FONTUI_BTN_ID}:focus-visible{
      outline: none !important;
      box-shadow: none !important;
    }

    /* Doppel-A: groß WEISS, klein THEMEFARBE, Abstand größer */
    #${__LIA_TAFEL_FONTUI_BTN_ID} .lia-tafel-fontui-A-big,
    #${__LIA_TAFEL_FONTUI_BTN_ID} .lia-tafel-fontui-A-small{
      position: absolute !important;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
      font-weight: 950 !important;
      line-height: 1 !important;
      pointer-events: none !important;
      user-select: none !important;
    }

    /* großes A: weiß */
    #${__LIA_TAFEL_FONTUI_BTN_ID} .lia-tafel-fontui-A-big{
      left: 2px !important;
      top: -8px !important;
      font-size: 30px !important;
      color: #fff !important;
      opacity: .98 !important;
      text-shadow: 0 1px 2px rgba(0,0,0,.45) !important;
    }

    /* kleines A: Themefarbe, weiter weg */
    #${__LIA_TAFEL_FONTUI_BTN_ID} .lia-tafel-fontui-A-small{
      left: 16px !important;
      top: -2px !important;
      font-size: 22px !important;
      color: var(--lia-tafel-fontui-accent) !important;
      opacity: .95 !important;
    }

    /* Panel (nur Slider) */
    #${__LIA_TAFEL_FONTUI_PANEL_ID}{
      position: fixed !important;
      z-index: 9999998 !important;

      width: 220px !important;
      padding: 10px 12px !important;
      display: none !important;

      border-radius: 14px !important;
      border: 1px solid color-mix(in srgb, currentColor 18%, transparent) !important;
      background: color-mix(in srgb, rgba(0,0,0,.65) 60%, transparent) !important;
      backdrop-filter: blur(8px);
      box-shadow: 0 16px 42px rgba(0,0,0,.18) !important;
    }

    body.${__LIA_TAFEL_FONTUI_BODYCLASS_OPEN} #${__LIA_TAFEL_FONTUI_PANEL_ID}{
      display: block !important;
    }

    #${__LIA_TAFEL_FONTUI_PANEL_ID} input[type="range"]{
      width: 100% !important;
      margin: 0 !important;
      accent-color: var(--lia-tafel-fontui-accent) !important;
    }
  `);

  function __liaTafelFontUI_findHeaderLeft(){
    const header =
      __LIA_TAFEL_FONTUI_ROOT_DOC.querySelector("header#lia-toolbar-nav") ||
      __LIA_TAFEL_FONTUI_ROOT_DOC.querySelector("#lia-toolbar-nav") ||
      __LIA_TAFEL_FONTUI_ROOT_DOC.querySelector("header.lia-header");
    if (!header) return null;
    return header.querySelector(".lia-header__left") || null;
  }

  function __liaTafelFontUI_findTOCButton(){
    const left = __liaTafelFontUI_findHeaderLeft();
    if (!left) return null;

    const btns = Array.from(left.querySelectorAll("button,[role='button'],a"));
    if (!btns.length) return null;

    const pick = btns.find(b=>{
      const t = ((b.getAttribute("aria-label")||b.getAttribute("title")||b.textContent||"")+"").toLowerCase();
      return t.includes("inhaltsverzeichnis") || t.includes("table of contents") || t.includes("contents");
    });
    return pick || btns[0] || null;
  }

  function __liaTafelFontUI_findTextmarkerButtonCandidate(){
    // defensiv: mehrere mögliche IDs/Patterns
    const selectors = [
      "#lia-hl-btn",
      "#lia-textmarker-btn",
      "#lia-textmarker-button",
      "[id*='textmarker'][role='button']",
      "button[id*='textmarker']",
      "button[aria-label*='Textmarker' i]",
      "button[title*='Textmarker' i]"
    ];
    for (const sel of selectors){
      try{
        const el = __LIA_TAFEL_FONTUI_ROOT_DOC.querySelector(sel);
        if (el) return el;
      }catch(e){}
    }
    return null;
  }

  function __liaTafelFontUI_ensureDockAndPanel(){
    // Dock
    let dock = __LIA_TAFEL_FONTUI_ROOT_DOC.getElementById(__LIA_TAFEL_FONTUI_DOCK_ID);
    if (!dock){
      dock = __LIA_TAFEL_FONTUI_ROOT_DOC.createElement("div");
      dock.id = __LIA_TAFEL_FONTUI_DOCK_ID;
      __LIA_TAFEL_FONTUI_ROOT_DOC.body.appendChild(dock);
    }

    // Button
    let btn = __LIA_TAFEL_FONTUI_ROOT_DOC.getElementById(__LIA_TAFEL_FONTUI_BTN_ID);
    if (!btn){
      btn = __LIA_TAFEL_FONTUI_ROOT_DOC.createElement("button");
      btn.id = __LIA_TAFEL_FONTUI_BTN_ID;
      btn.type = "button";
      btn.setAttribute("aria-label", "Schriftgröße");
      btn.innerHTML =
        `<span class="lia-tafel-fontui-A-big">A</span><span class="lia-tafel-fontui-A-small">A</span>`;
      dock.appendChild(btn);
    } else if (btn.parentNode !== dock){
      dock.appendChild(btn);
    }

    // Panel
    let panel = __LIA_TAFEL_FONTUI_ROOT_DOC.getElementById(__LIA_TAFEL_FONTUI_PANEL_ID);
    if (!panel){
      panel = __LIA_TAFEL_FONTUI_ROOT_DOC.createElement("div");
      panel.id = __LIA_TAFEL_FONTUI_PANEL_ID;
      panel.innerHTML =
        `<input id="${__LIA_TAFEL_FONTUI_SLIDER_ID}" type="range" min="14" max="48" step="1" value="24" aria-label="Schriftgröße" />`;
      __LIA_TAFEL_FONTUI_ROOT_DOC.body.appendChild(panel);
    }

    return { dock, btn, panel };
  }

  function __liaTafelFontUI_measurePanel(panel){
    const prevDisplay = panel.style.display;
    const prevVis = panel.style.visibility;
    const prevLeft = panel.style.left;
    const prevTop = panel.style.top;

    panel.style.display = "block";
    panel.style.visibility = "hidden";
    panel.style.left = "-9999px";
    panel.style.top  = "-9999px";

    const w = panel.offsetWidth || 220;
    const h = panel.offsetHeight || 46;

    panel.style.display = prevDisplay;
    panel.style.visibility = prevVis;
    panel.style.left = prevLeft;
    panel.style.top  = prevTop;

    return { w, h };
  }

  function __liaTafelFontUI_getViewport(){
    const vv = __LIA_TAFEL_FONTUI_ROOT_WIN.visualViewport;
    if (vv){
      return { w: vv.width, h: vv.height, ox: vv.offsetLeft || 0, oy: vv.offsetTop || 0 };
    }
    const de = __LIA_TAFEL_FONTUI_ROOT_DOC.documentElement;
    return { w: de.clientWidth, h: de.clientHeight, ox: 0, oy: 0 };
  }

  function __liaTafelFontUI_positionDock(mode){
    const isPresentation = (mode === "presentation");
    const dock = __LIA_TAFEL_FONTUI_ROOT_DOC.getElementById(__LIA_TAFEL_FONTUI_DOCK_ID);
    if (!dock) return;

    __LIA_TAFEL_FONTUI_ROOT_DOC.body.classList.toggle(__LIA_TAFEL_FONTUI_BODYCLASS_PRES, isPresentation);

    if (!isPresentation) return;

    const vp = __liaTafelFontUI_getViewport();
    const pad = 8;
    const gap = 10;

    // baseline top: an Toolbar orientieren, wenn vorhanden
    let top = pad;
    try{
      const header =
        __LIA_TAFEL_FONTUI_ROOT_DOC.querySelector("header#lia-toolbar-nav") ||
        __LIA_TAFEL_FONTUI_ROOT_DOC.querySelector("#lia-toolbar-nav") ||
        __LIA_TAFEL_FONTUI_ROOT_DOC.querySelector("header.lia-header");
      if (header){
        const hr = header.getBoundingClientRect();
        // vertikal zentrieren relativ zur Header-Höhe (Button 32px)
        top = Math.round(hr.top + Math.max(4, (hr.height - 32) / 2));
      }
    }catch(e){}

    // blockers: TOC + Textmarker (falls vorhanden)
    let maxRight = 0;
    try{
      const toc = __liaTafelFontUI_findTOCButton();
      const tm  = __liaTafelFontUI_findTextmarkerButtonCandidate();

      const blockers = [toc, tm].filter(Boolean);
      blockers.forEach(el=>{
        try{
          const r = el.getBoundingClientRect();
          maxRight = Math.max(maxRight, r.right);
        }catch(_){}
      });
    }catch(e){}

    // dock links: rechts neben dem "rechtesten" blocker
    let left = (maxRight > 0 ? (maxRight + gap) : pad);

    // clamp in viewport
    left = __liaTafelFontUI_clamp(left, pad, vp.w - 32 - pad);
    top  = __liaTafelFontUI_clamp(top,  pad, vp.h - 32 - pad);

    dock.style.left = Math.round(left + vp.ox) + "px";
    dock.style.top  = Math.round(top  + vp.oy) + "px";
  }

  function __liaTafelFontUI_positionPanel(){
    const btn   = __LIA_TAFEL_FONTUI_ROOT_DOC.getElementById(__LIA_TAFEL_FONTUI_BTN_ID);
    const panel = __LIA_TAFEL_FONTUI_ROOT_DOC.getElementById(__LIA_TAFEL_FONTUI_PANEL_ID);
    if (!btn || !panel) return;

    if (!__LIA_TAFEL_FONTUI_ROOT_DOC.body.classList.contains(__LIA_TAFEL_FONTUI_BODYCLASS_OPEN)) return;

    const r  = btn.getBoundingClientRect();
    const vp = __liaTafelFontUI_getViewport();
    const sz = __liaTafelFontUI_measurePanel(panel);

    const gap = 10;
    const pad = 8;

    let left = r.left;
    let top  = r.bottom + gap;

    left = __liaTafelFontUI_clamp(left, pad, vp.w - sz.w - pad);

    if (top + sz.h + pad > vp.h){
      top = r.top - gap - sz.h;
    }
    top = __liaTafelFontUI_clamp(top, pad, vp.h - sz.h - pad);

    panel.style.left = `${Math.round(left + vp.ox)}px`;
    panel.style.top  = `${Math.round(top  + vp.oy)}px`;
  }

  function __liaTafelFontUI_syncSliderRangeAndValue(){
    const slider = __LIA_TAFEL_FONTUI_ROOT_DOC.getElementById(__LIA_TAFEL_FONTUI_SLIDER_ID);
    if (!slider) return;

    const cs = getComputedStyle(__LIA_TAFEL_FONTUI_CONTENT_DOC.documentElement);
    const min = parseInt(cs.getPropertyValue("--lia-tafel-fontui-min") || "14", 10);
    const max = parseInt(cs.getPropertyValue("--lia-tafel-fontui-max") || "48", 10);

    slider.min = String(min);
    slider.max = String(max);

    const saved = __liaTafelFontUI_getSavedFontPx();
    if (saved != null){
      slider.value = String(__liaTafelFontUI_clamp(saved, min, max));
      return;
    }

    const v = cs.getPropertyValue("--lia-tafel-fontui-pres-font").trim();
    const n = parseInt(v, 10);
    if (isFinite(n)) slider.value = String(__liaTafelFontUI_clamp(n, min, max));
  }

  function __liaTafelFontUI_wireOnce(){
    const btn    = __LIA_TAFEL_FONTUI_ROOT_DOC.getElementById(__LIA_TAFEL_FONTUI_BTN_ID);
    const panel  = __LIA_TAFEL_FONTUI_ROOT_DOC.getElementById(__LIA_TAFEL_FONTUI_PANEL_ID);
    const slider = __LIA_TAFEL_FONTUI_ROOT_DOC.getElementById(__LIA_TAFEL_FONTUI_SLIDER_ID);
    if (!btn || !panel || !slider) return;

    if (!btn.__liaTafelFontUI_wired){
      btn.__liaTafelFontUI_wired = true;

      btn.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();

        const open = __LIA_TAFEL_FONTUI_ROOT_DOC.body.classList.toggle(__LIA_TAFEL_FONTUI_BODYCLASS_OPEN);
        if (open) __liaTafelFontUI_positionPanel();
      });

      __LIA_TAFEL_FONTUI_ROOT_DOC.addEventListener("click", (e)=>{
        if (!__LIA_TAFEL_FONTUI_ROOT_DOC.body.classList.contains(__LIA_TAFEL_FONTUI_BODYCLASS_OPEN)) return;
        const t = e.target;
        if (t && t.closest && (t.closest("#"+__LIA_TAFEL_FONTUI_PANEL_ID) || t.closest("#"+__LIA_TAFEL_FONTUI_BTN_ID))) return;
        __LIA_TAFEL_FONTUI_ROOT_DOC.body.classList.remove(__LIA_TAFEL_FONTUI_BODYCLASS_OPEN);
      }, true);

      __LIA_TAFEL_FONTUI_ROOT_DOC.addEventListener("keydown", (e)=>{
        if (e.key === "Escape"){
          __LIA_TAFEL_FONTUI_ROOT_DOC.body.classList.remove(__LIA_TAFEL_FONTUI_BODYCLASS_OPEN);
        }
      });

      __LIA_TAFEL_FONTUI_ROOT_WIN.addEventListener("resize", ()=>{
        __liaTafelFontUI_positionDock(__liaTafelFontUI_detectMode());
        __liaTafelFontUI_positionPanel();
      });

      if (__LIA_TAFEL_FONTUI_ROOT_WIN.visualViewport){
        __LIA_TAFEL_FONTUI_ROOT_WIN.visualViewport.addEventListener("resize", __liaTafelFontUI_positionPanel);
        __LIA_TAFEL_FONTUI_ROOT_WIN.visualViewport.addEventListener("scroll", __liaTafelFontUI_positionPanel);
      }
    }

    if (!slider.__liaTafelFontUI_wired){
      slider.__liaTafelFontUI_wired = true;

      slider.addEventListener("input", ()=>{
        const min = parseInt(slider.min || "14", 10);
        const max = parseInt(slider.max || "48", 10);
        const v = __liaTafelFontUI_clamp(parseInt(slider.value || "24", 10), min, max);

        try { localStorage.setItem(__LIA_TAFEL_FONTUI_FONT_KEY, String(v)); } catch(e){}
        __liaTafelFontUI_setPresFontPx(v);
      });
    }
  }

  // =========================================================
  // Tick (throttled) – ensure-Loop
  // =========================================================
  function __liaTafelFontUI_tick(){
    if (__liaTafelFontUI_I.ticking) return;
    __liaTafelFontUI_I.ticking = true;

    __LIA_TAFEL_FONTUI_ROOT_WIN.requestAnimationFrame(() => {
      try{
        const raw  = __liaTafelFontUI_safeGetSettingsRaw();
        const mode = __liaTafelFontUI_detectMode();

        __liaTafelFontUI_applyModeAttr(mode);
        __liaTafelFontUI_syncAccent();

        __liaTafelFontUI_ensureDockAndPanel();
        __liaTafelFontUI_positionDock(mode);

        // Panel schließen, wenn nicht presentation
        if (mode !== "presentation"){
          __LIA_TAFEL_FONTUI_ROOT_DOC.body.classList.remove(__LIA_TAFEL_FONTUI_BODYCLASS_OPEN);
        }

        __liaTafelFontUI_wireOnce();

        if (raw !== __liaTafelFontUI_I.lastRaw || mode !== __liaTafelFontUI_I.lastMode){
          __liaTafelFontUI_applyFontLogic(mode);
          __liaTafelFontUI_I.lastRaw  = raw;
          __liaTafelFontUI_I.lastMode = mode;
        }

        __liaTafelFontUI_syncSliderRangeAndValue();
        __liaTafelFontUI_positionPanel();

      } finally {
        __liaTafelFontUI_I.ticking = false;
      }
    });
  }

  // Root DOM changes -> tick (Toolbar/Textmarker kann spät kommen)
  try{
    const mo = new MutationObserver(() => __liaTafelFontUI_tick());
    mo.observe(__LIA_TAFEL_FONTUI_ROOT_DOC.documentElement, { childList:true, subtree:true });
  }catch(e){}

  // Content changes -> tick
  try{
    const mo2 = new MutationObserver(() => __liaTafelFontUI_tick());
    mo2.observe(__LIA_TAFEL_FONTUI_CONTENT_DOC.documentElement, { childList:true, subtree:true });
  }catch(e){}

  // Storage changes
  __LIA_TAFEL_FONTUI_ROOT_WIN.addEventListener("storage", function(e){
    if (!e) return;
    if (e.key === __LIA_TAFEL_FONTUI_SETTINGS_KEY || e.key === __LIA_TAFEL_FONTUI_FONT_KEY) __liaTafelFontUI_tick();
  });

  // Periodisch
  __liaTafelFontUI_tick();
  __LIA_TAFEL_FONTUI_ROOT_WIN.setInterval(() => {
    if (__liaTafelFontUI_I.__alive) __liaTafelFontUI_tick();
  }, 350);

})();
@end

-->









# Tafelmodus


Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.


