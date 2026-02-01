<!--
version:  0.0.2
language: de
comment: LiaScript – Tafelmodus: Presentation volle Breite + Schriftgrößen-Boost + A-Button (nur Presentation) | konfliktarm zum Textmarker
author: Martin Lommatzsch


@style
:root{
  /* seitlicher Sicherheitsabstand im Presentation-Modus */
  --lia-tafel-fontui-pres-side-gap: 12px;

  /* wird per JS gesetzt: "unset" oder px */
  --lia-tafel-fontui-pres-font: unset;

  /* wird per JS aus Lia-Theme ermittelt */
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

  const __liaTafelFontUI_ROOT_WIN = __liaTafelFontUI_getRootWindow();
  const __liaTafelFontUI_ROOT_DOC = __liaTafelFontUI_ROOT_WIN.document;

  const __liaTafelFontUI_CONTENT_WIN = window;
  const __liaTafelFontUI_CONTENT_DOC = document;

  // =========================================================
  // Per-Dokument Instance (Import mehrfach => keine Kollision)
  // =========================================================
  const __liaTafelFontUI_REGKEY = "__LIA_TAFEL_FONTUI_REG_V2__";
  __liaTafelFontUI_ROOT_WIN[__liaTafelFontUI_REGKEY] = __liaTafelFontUI_ROOT_WIN[__liaTafelFontUI_REGKEY] || { instances: {} };
  const __liaTafelFontUI_REG = __liaTafelFontUI_ROOT_WIN[__liaTafelFontUI_REGKEY];

  const __liaTafelFontUI_DOC_ID =
    (__liaTafelFontUI_CONTENT_DOC.baseURI || __liaTafelFontUI_CONTENT_WIN.location.href || "") +
    "::" +
    (__liaTafelFontUI_CONTENT_DOC.title || "");

  if (__liaTafelFontUI_REG.instances[__liaTafelFontUI_DOC_ID]?.__alive) return;

  const __liaTafelFontUI_I = __liaTafelFontUI_REG.instances[__liaTafelFontUI_DOC_ID] = {
    __alive: true,
    ticking: false,
    lastRaw: null,
    lastMode: null
  };

  // =========================================================
  // Helpers
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

  function __liaTafelFontUI_getVarPx(doc, k, fallback){
    try{
      const v = getComputedStyle(doc.documentElement).getPropertyValue(k).trim();
      if (!v) return fallback;
      const n = parseInt(v, 10);
      return isFinite(n) ? n : fallback;
    }catch(e){
      return fallback;
    }
  }

  function __liaTafelFontUI_norm(x){ return String(x == null ? "" : x).toLowerCase(); }
  function __liaTafelFontUI_clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

  // =========================================================
  // Mode detection (Lia settings in localStorage)
  // =========================================================
  const __liaTafelFontUI_SETTINGS_KEY = "settings";
  const __liaTafelFontUI_FONT_KEY     = "lia-tafel-fontui-font-px";

  function __liaTafelFontUI_safeGetSettingsRaw(){
    try { return localStorage.getItem(__liaTafelFontUI_SETTINGS_KEY); }
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
    // Falls Lia selbst irgendwo dataset setzt: priorisieren
    try{
      const ds = (__liaTafelFontUI_CONTENT_DOC.documentElement.dataset || {});
      if (ds.liaMode === "presentation" || ds.liaMode === "slides" || ds.liaMode === "textbook") return ds.liaMode;
    }catch(e){}

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
    try { __liaTafelFontUI_CONTENT_DOC.documentElement.dataset.liaMode = mode; } catch(e){}
  }

  // =========================================================
  // Hard-Apply Presentation width (Import-sicher)
  // =========================================================
  function __liaTafelFontUI_applyPresentationWidthHard(mode){
    const main = __liaTafelFontUI_CONTENT_DOC.querySelector("main");
    if (!main) return;

    if (mode === "presentation"){
      const gap = __liaTafelFontUI_getVarPx(__liaTafelFontUI_CONTENT_DOC, "--lia-tafel-fontui-pres-side-gap", 12);
      const w = `calc(100vw - ${2*gap}px)`;

      main.style.width = w;
      main.style.maxWidth = w;
      main.style.marginLeft = "auto";
      main.style.marginRight = "auto";
      main.style.boxSizing = "border-box";
      main.style.paddingLeft = gap + "px";
      main.style.paddingRight = gap + "px";

      // Body-Margin sicher raus
      try{
        __liaTafelFontUI_CONTENT_DOC.body.style.margin = "0";
        __liaTafelFontUI_CONTENT_DOC.body.style.overflowX = "hidden";
      }catch(e){}
    } else {
      // Nur das zurücksetzen, was wir gesetzt haben
      main.style.width = "";
      main.style.maxWidth = "";
      main.style.marginLeft = "";
      main.style.marginRight = "";
      main.style.boxSizing = "";
      main.style.paddingLeft = "";
      main.style.paddingRight = "";
      try{
        __liaTafelFontUI_CONTENT_DOC.body.style.margin = "";
        __liaTafelFontUI_CONTENT_DOC.body.style.overflowX = "";
      }catch(e){}
    }
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
      __liaTafelFontUI_getLiaAccentColor(__liaTafelFontUI_ROOT_DOC) ||
      __liaTafelFontUI_getLiaAccentColor(__liaTafelFontUI_CONTENT_DOC) ||
      "rgb(11,95,255)";

    __liaTafelFontUI_setVar(__liaTafelFontUI_ROOT_DOC,    "--lia-tafel-fontui-accent", acc);
    __liaTafelFontUI_setVar(__liaTafelFontUI_CONTENT_DOC, "--lia-tafel-fontui-accent", acc);
  }

  // =========================================================
  // Font logic (auto 18/24/32) + Slider override
  // =========================================================
  const __liaTafelFontUI_PRES_PX = [18, 24, 32];

  function __liaTafelFontUI_pxToStep0to2(px){
    if (px <= 17) return 0;
    if (px <= 19) return 1;
    return 2;
  }

  function __liaTafelFontUI_getMainFontPx(){
    const main = __liaTafelFontUI_CONTENT_DOC.querySelector("main") || __liaTafelFontUI_CONTENT_DOC.documentElement;
    const fs = parseFloat(getComputedStyle(main).fontSize || "16");
    return isNaN(fs) ? 16 : fs;
  }

  function __liaTafelFontUI_getSavedFontPx(){
    try{
      const v = localStorage.getItem(__liaTafelFontUI_FONT_KEY);
      if (!v) return null;
      const n = parseInt(v, 10);
      if (!isFinite(n)) return null;
      return n;
    }catch(e){
      return null;
    }
  }

  function __liaTafelFontUI_setPresFontPx(px){
    __liaTafelFontUI_setVar(__liaTafelFontUI_CONTENT_DOC, "--lia-tafel-fontui-pres-font", px == null ? "unset" : (px + "px"));
  }

  let __liaTafelFontUI_sampling = false;

  function __liaTafelFontUI_applyFontLogic(mode){
    const isPresLike = (mode === "presentation" || mode === "slides");
    if (!isPresLike){
      __liaTafelFontUI_setPresFontPx(null);
      return;
    }

    const min = __liaTafelFontUI_getVarPx(__liaTafelFontUI_CONTENT_DOC, "--lia-tafel-fontui-min", 14);
    const max = __liaTafelFontUI_getVarPx(__liaTafelFontUI_CONTENT_DOC, "--lia-tafel-fontui-max", 48);

    const saved = __liaTafelFontUI_getSavedFontPx();
    if (saved != null){
      __liaTafelFontUI_setPresFontPx(__liaTafelFontUI_clamp(saved, min, max));
      return;
    }

    if (__liaTafelFontUI_sampling) return;
    __liaTafelFontUI_sampling = true;

    __liaTafelFontUI_setPresFontPx(null);

    __liaTafelFontUI_CONTENT_WIN.requestAnimationFrame(function(){
      __liaTafelFontUI_CONTENT_WIN.requestAnimationFrame(function(){
        const step = __liaTafelFontUI_pxToStep0to2(__liaTafelFontUI_getMainFontPx());
        __liaTafelFontUI_setPresFontPx(__liaTafelFontUI_PRES_PX[step]);
        __liaTafelFontUI_sampling = false;
      });
    });
  }

  // =========================================================
  // Root UI: A-Button + Panel (nur Presentation)
  // =========================================================
  const __liaTafelFontUI_DOCK_ID   = "lia-tafel-fontui-dock-v2";
  const __liaTafelFontUI_BTN_ID    = "lia-tafel-fontui-btn-v2";
  const __liaTafelFontUI_PANEL_ID  = "lia-tafel-fontui-panel-v2";
  const __liaTafelFontUI_SLIDER_ID = "lia-tafel-fontui-slider-v2";

  const __liaTafelFontUI_BODY_PRES_CLASS  = "lia-tafel-fontui-is-pres";
  const __liaTafelFontUI_BODY_OPEN_CLASS  = "lia-tafel-fontui-panel-open";

  __liaTafelFontUI_ensureStyle(__liaTafelFontUI_ROOT_DOC, "lia-tafel-fontui-ui-style-root-v2", `
    #${__liaTafelFontUI_DOCK_ID}{
      position: fixed !important;
      z-index: 9999999 !important;
      display: none !important;
      align-items: center !important;
      gap: 8px !important;
      pointer-events: auto !important;
    }

    body.${__liaTafelFontUI_BODY_PRES_CLASS} #${__liaTafelFontUI_DOCK_ID}{
      display: inline-flex !important;
    }

    #${__liaTafelFontUI_BTN_ID}{
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

    #${__liaTafelFontUI_BTN_ID}:hover{
      background: color-mix(in srgb, var(--lia-tafel-fontui-accent) 12%, transparent) !important;
    }
    #${__liaTafelFontUI_BTN_ID}:active{
      background: color-mix(in srgb, var(--lia-tafel-fontui-accent) 18%, transparent) !important;
    }
    #${__liaTafelFontUI_BTN_ID}:focus,
    #${__liaTafelFontUI_BTN_ID}:focus-visible{
      outline: none !important;
      box-shadow: none !important;
    }

    /* Doppel-A (Farben GETAUSCHT):
       - großes A: weiß
       - kleines A: Themefarbe
       - Abstand etwas größer
    */
    #${__liaTafelFontUI_BTN_ID} .A-big,
    #${__liaTafelFontUI_BTN_ID} .A-small{
      position: absolute !important;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
      font-weight: 950 !important;
      line-height: 1 !important;
      pointer-events: none !important;
      user-select: none !important;
    }

    #${__liaTafelFontUI_BTN_ID} .A-big{
      left: 2px !important;
      top: -7px !important;
      font-size: 28px !important;
      color: #fff !important;
      text-shadow: 0 1px 2px rgba(0,0,0,.45) !important;
      opacity: .98 !important;
    }

    #${__liaTafelFontUI_BTN_ID} .A-small{
      left: 8px !important;     /* mehr Abstand nach rechts */
      top: -2px !important;
      font-size: 22px !important;
      color: var(--lia-tafel-fontui-accent) !important;
      opacity: .92 !important;
    }

    /* Panel (nur Slider) */
    #${__liaTafelFontUI_PANEL_ID}{
      position: fixed !important;
      z-index: 9999998 !important;

      width: 220px !important;
      padding: 10px 12px !important;

      display: none !important;

      border-radius: 14px !important;
      border: 1px solid color-mix(in srgb, currentColor 18%, transparent) !important;
      background: color-mix(in srgb, rgba(0, 0, 0, 0.6) 60%, transparent) !important;
      backdrop-filter: blur(8px);
      box-shadow: 0 16px 42px rgba(0,0,0,.18) !important;
    }

    body.${__liaTafelFontUI_BODY_OPEN_CLASS} #${__liaTafelFontUI_PANEL_ID}{
      display: block !important;
    }

    #${__liaTafelFontUI_PANEL_ID} input[type="range"]{
      width: 100% !important;
      margin: 0 !important;
      accent-color: var(--lia-tafel-fontui-accent) !important;
    }
  `);

  function __liaTafelFontUI_findHeader(){
    return (
      __liaTafelFontUI_ROOT_DOC.querySelector("header#lia-toolbar-nav") ||
      __liaTafelFontUI_ROOT_DOC.querySelector("#lia-toolbar-nav") ||
      __liaTafelFontUI_ROOT_DOC.querySelector("header.lia-header")
    );
  }

  function __liaTafelFontUI_findHeaderLeft(){
    const header = __liaTafelFontUI_findHeader();
    if (!header) return null;
    return header.querySelector(".lia-header__left") || null;
  }

  function __liaTafelFontUI_isVisible(el){
    if (!el) return false;
    const cs = __liaTafelFontUI_ROOT_WIN.getComputedStyle(el);
    if (!cs || cs.display === "none" || cs.visibility === "hidden" || cs.opacity === "0") return false;
    const r = el.getBoundingClientRect();
    return (r.width > 8 && r.height > 8);
  }

  // Rechter Rand der linken Toolbar-Gruppe (robust, Nightly-unabhängig)
  function __liaTafelFontUI_getLeftGroupRightEdge(){
    const left = __liaTafelFontUI_findHeaderLeft();
    if (!left) return 0;

    const candidates = Array.from(left.querySelectorAll("button,a,[role='button'],.lia-btn"));
    let maxRight = 0;

    for (const el of candidates){
      if (!__liaTafelFontUI_isVisible(el)) continue;
      const r = el.getBoundingClientRect();
      maxRight = Math.max(maxRight, r.right);
    }

    if (maxRight > 0) return maxRight;

    // Fallback: Container-Left + ein Icon-Offset
    const lr = left.getBoundingClientRect();
    return lr.left + 44;
  }

  function __liaTafelFontUI_ensureUI(){
    let dock = __liaTafelFontUI_ROOT_DOC.getElementById(__liaTafelFontUI_DOCK_ID);
    if (!dock){
      dock = __liaTafelFontUI_ROOT_DOC.createElement("div");
      dock.id = __liaTafelFontUI_DOCK_ID;
      __liaTafelFontUI_ROOT_DOC.body.appendChild(dock);
    }

    let btn = __liaTafelFontUI_ROOT_DOC.getElementById(__liaTafelFontUI_BTN_ID);
    if (!btn){
      btn = __liaTafelFontUI_ROOT_DOC.createElement("button");
      btn.id = __liaTafelFontUI_BTN_ID;
      btn.type = "button";
      btn.setAttribute("aria-label","Schriftgröße");
      btn.innerHTML = `<span class="A-big">A</span><span class="A-small">A</span>`;
      dock.appendChild(btn);
    } else if (btn.parentNode !== dock){
      dock.appendChild(btn);
    }

    let panel = __liaTafelFontUI_ROOT_DOC.getElementById(__liaTafelFontUI_PANEL_ID);
    if (!panel){
      panel = __liaTafelFontUI_ROOT_DOC.createElement("div");
      panel.id = __liaTafelFontUI_PANEL_ID;
      panel.innerHTML = `<input id="${__liaTafelFontUI_SLIDER_ID}" type="range" min="14" max="48" step="1" value="24" aria-label="Schriftgröße" />`;
      __liaTafelFontUI_ROOT_DOC.body.appendChild(panel);
    }
  }

  function __liaTafelFontUI_getViewport(){
    const vv = __liaTafelFontUI_ROOT_WIN.visualViewport;
    if (vv){
      return { w: vv.width, h: vv.height, ox: vv.offsetLeft || 0, oy: vv.offsetTop || 0 };
    }
    const de = __liaTafelFontUI_ROOT_DOC.documentElement;
    return { w: de.clientWidth, h: de.clientHeight, ox: 0, oy: 0 };
  }

  function __liaTafelFontUI_positionDock(){
    const dock = __liaTafelFontUI_ROOT_DOC.getElementById(__liaTafelFontUI_DOCK_ID);
    if (!dock) return;

    const header = __liaTafelFontUI_findHeader();
    if (!header) return;

    const hr = header.getBoundingClientRect();
    const vp = __liaTafelFontUI_getViewport();

    const gap = 12;  // Abstand von Toolbar-Buttons (gegen Kollision TOC/Textmarker)
    const pad = 8;

    const anchorRight = __liaTafelFontUI_getLeftGroupRightEdge();
    let left = anchorRight + gap;
    let top  = hr.top + (hr.height - 32) / 2;

    // Clamps
    left = __liaTafelFontUI_clamp(left, pad, vp.w - 32 - pad);
    top  = __liaTafelFontUI_clamp(top,  pad, vp.h - 32 - pad);

    dock.style.left = `${Math.round(left + vp.ox)}px`;
    dock.style.top  = `${Math.round(top  + vp.oy)}px`;
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

  function __liaTafelFontUI_positionPanel(){
    const btn = __liaTafelFontUI_ROOT_DOC.getElementById(__liaTafelFontUI_BTN_ID);
    const panel = __liaTafelFontUI_ROOT_DOC.getElementById(__liaTafelFontUI_PANEL_ID);
    if (!btn || !panel) return;
    if (!__liaTafelFontUI_ROOT_DOC.body.classList.contains(__liaTafelFontUI_BODY_OPEN_CLASS)) return;

    const r = btn.getBoundingClientRect();
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

  function __liaTafelFontUI_wireOnce(){
    const btn = __liaTafelFontUI_ROOT_DOC.getElementById(__liaTafelFontUI_BTN_ID);
    const panel = __liaTafelFontUI_ROOT_DOC.getElementById(__liaTafelFontUI_PANEL_ID);
    const slider = __liaTafelFontUI_ROOT_DOC.getElementById(__liaTafelFontUI_SLIDER_ID);
    if (!btn || !panel || !slider) return;

    if (!btn.__liaTafelFontUI_wired){
      btn.__liaTafelFontUI_wired = true;

      btn.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const open = __liaTafelFontUI_ROOT_DOC.body.classList.toggle(__liaTafelFontUI_BODY_OPEN_CLASS);
        if (open) __liaTafelFontUI_positionPanel();
      });

      __liaTafelFontUI_ROOT_DOC.addEventListener("click", (e)=>{
        if (!__liaTafelFontUI_ROOT_DOC.body.classList.contains(__liaTafelFontUI_BODY_OPEN_CLASS)) return;
        const t = e.target;
        if (t && (t.closest && (t.closest("#"+__liaTafelFontUI_PANEL_ID) || t.closest("#"+__liaTafelFontUI_BTN_ID)))) return;
        __liaTafelFontUI_ROOT_DOC.body.classList.remove(__liaTafelFontUI_BODY_OPEN_CLASS);
      }, true);

      __liaTafelFontUI_ROOT_DOC.addEventListener("keydown", (e)=>{
        if (e.key === "Escape"){
          __liaTafelFontUI_ROOT_DOC.body.classList.remove(__liaTafelFontUI_BODY_OPEN_CLASS);
        }
      });

      __liaTafelFontUI_ROOT_WIN.addEventListener("resize", () => { __liaTafelFontUI_positionDock(); __liaTafelFontUI_positionPanel(); });
      if (__liaTafelFontUI_ROOT_WIN.visualViewport){
        __liaTafelFontUI_ROOT_WIN.visualViewport.addEventListener("resize", () => { __liaTafelFontUI_positionDock(); __liaTafelFontUI_positionPanel(); });
        __liaTafelFontUI_ROOT_WIN.visualViewport.addEventListener("scroll", () => { __liaTafelFontUI_positionDock(); __liaTafelFontUI_positionPanel(); });
      }
    }

    if (!slider.__liaTafelFontUI_wired){
      slider.__liaTafelFontUI_wired = true;

      slider.addEventListener("input", ()=>{
        const min = parseInt(slider.min || "14", 10);
        const max = parseInt(slider.max || "48", 10);
        const v = __liaTafelFontUI_clamp(parseInt(slider.value || "24", 10), min, max);

        try { localStorage.setItem(__liaTafelFontUI_FONT_KEY, String(v)); } catch(e){}
        __liaTafelFontUI_setPresFontPx(v);
      });
    }
  }

  function __liaTafelFontUI_setPresentationOnlyVisibility(mode){
    const isPresentation = (mode === "presentation");
    __liaTafelFontUI_ROOT_DOC.body.classList.toggle(__liaTafelFontUI_BODY_PRES_CLASS, isPresentation);

    if (!isPresentation){
      __liaTafelFontUI_ROOT_DOC.body.classList.remove(__liaTafelFontUI_BODY_OPEN_CLASS);
    }
  }

  function __liaTafelFontUI_syncSliderToCurrentFont(){
    const slider = __liaTafelFontUI_ROOT_DOC.getElementById(__liaTafelFontUI_SLIDER_ID);
    if (!slider) return;

    const min = parseInt(slider.min || "14", 10);
    const max = parseInt(slider.max || "48", 10);

    const saved = __liaTafelFontUI_getSavedFontPx();
    if (saved != null){
      slider.value = String(__liaTafelFontUI_clamp(saved, min, max));
      return;
    }

    const v = getComputedStyle(__liaTafelFontUI_CONTENT_DOC.documentElement).getPropertyValue("--lia-tafel-fontui-pres-font").trim();
    const n = parseInt(v, 10);
    if (isFinite(n)) slider.value = String(__liaTafelFontUI_clamp(n, min, max));
  }

  // =========================================================
  // Tick (throttled) – ensure-Functions, damit Import immer greift
  // =========================================================
  function __liaTafelFontUI_tick(){
    if (__liaTafelFontUI_I.ticking) return;
    __liaTafelFontUI_I.ticking = true;

    __liaTafelFontUI_ROOT_WIN.requestAnimationFrame(() => {
      try{
        const raw  = __liaTafelFontUI_safeGetSettingsRaw();
        const mode = __liaTafelFontUI_detectMode();

        // 1) dataset im Content für CSS
        __liaTafelFontUI_applyModeAttr(mode);

        // 2) Presentation width hart anwenden (Import-sicher)
        __liaTafelFontUI_applyPresentationWidthHard(mode);

        // 3) Theme-Farbe -> Var
        __liaTafelFontUI_syncAccent();

        // 4) UI in Root sicher anheften (nur Presentation sichtbar)
        __liaTafelFontUI_ensureUI();
        __liaTafelFontUI_setPresentationOnlyVisibility(mode);
        __liaTafelFontUI_wireOnce();

        // 5) Dock/Panel position
        __liaTafelFontUI_positionDock();
        __liaTafelFontUI_positionPanel();

        // 6) Font-Logik nur wenn Modus/Settings wechseln oder beim ersten Mal
        if (raw !== __liaTafelFontUI_I.lastRaw || mode !== __liaTafelFontUI_I.lastMode){
          __liaTafelFontUI_applyFontLogic(mode);
          __liaTafelFontUI_I.lastRaw  = raw;
          __liaTafelFontUI_I.lastMode = mode;
        }

        // 7) Slider sync
        __liaTafelFontUI_syncSliderToCurrentFont();

      } finally {
        __liaTafelFontUI_I.ticking = false;
      }
    });
  }

  // Root DOM changes -> tick (Toolbar kommt manchmal spät)
  try{
    const mo = new MutationObserver(() => __liaTafelFontUI_tick());
    mo.observe(__liaTafelFontUI_ROOT_DOC.documentElement, { childList:true, subtree:true });
  }catch(e){}

  // Content changes -> tick
  try{
    const mo2 = new MutationObserver(() => __liaTafelFontUI_tick());
    mo2.observe(__liaTafelFontUI_CONTENT_DOC.documentElement, { childList:true, subtree:true });
  }catch(e){}

  // Storage changes
  __liaTafelFontUI_ROOT_WIN.addEventListener("storage", function(e){
    if (!e) return;
    if (e.key === __liaTafelFontUI_SETTINGS_KEY || e.key === __liaTafelFontUI_FONT_KEY) __liaTafelFontUI_tick();
  });

  // Periodisch
  __liaTafelFontUI_tick();
  __liaTafelFontUI_ROOT_WIN.setInterval(() => { if (__liaTafelFontUI_I.__alive) __liaTafelFontUI_tick(); }, 350);

})();
@end

-->









# Tafelmodus


Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.


