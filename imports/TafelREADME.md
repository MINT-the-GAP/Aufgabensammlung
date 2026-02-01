<!--
version:  0.0.1
language: de
comment: LiaScript – Tafelmodus: Presentation volle Breite + Schriftgrößen-Boost + A-Button (nur Presentation)
author: Martin Lommatzsch


@style
:root{
  /* seitlicher Sicherheitsabstand im Presentation-Modus */
  --pres-side-gap: 12px;

  /* wird per JS gesetzt: "unset" oder px */
  --lia-pres-font: unset;

  /* wird per JS aus Lia-Theme ermittelt */
  --lia-tafel-font-accent: rgb(11,95,255);

  /* User-Range (Slider) */
  --lia-tafel-font-min: 14;
  --lia-tafel-font-max: 48;
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
  width: calc(100vw - (2 * var(--pres-side-gap))) !important;
  max-width: calc(100vw - (2 * var(--pres-side-gap))) !important;

  margin-left: auto !important;
  margin-right: auto !important;

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
  const REGKEY = "__LIA_TAFEL_REG_V1__";
  ROOT_WIN[REGKEY] = ROOT_WIN[REGKEY] || { instances: {} };
  const REG = ROOT_WIN[REGKEY];

  const DOC_ID =
    (CONTENT_DOC.baseURI || CONTENT_WIN.location.href || "") +
    "::" +
    (CONTENT_DOC.title || "");

  if (REG.instances[DOC_ID]?.__alive) return;

  const I = REG.instances[DOC_ID] = {
    __alive: true,
    ticking: false,
    state: { open:false },
    lastRaw: null,
    lastMode: null
  };

  // =========================================================
  // Helpers: CSS Injection
  // =========================================================
  function ensureStyle(doc, id, css){
    if (!doc || doc.getElementById(id)) return;
    const st = doc.createElement("style");
    st.id = id;
    st.textContent = css;
    (doc.head || doc.documentElement).appendChild(st);
  }

  // =========================================================
  // Mode detection (Lia settings in localStorage)
  // =========================================================
  const SETTINGS_KEY = "settings";
  const FONT_KEY     = "lia-tafel-font-px";  // Persistierter Slider-Wert (px)

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

    try{
      const obj = JSON.parse(raw);
      return findModeInJson(obj) || "unknown";
    }catch(e){
      const s = norm(raw);
      if (s.includes("presentation")) return "presentation";
      if (s.includes("slides"))       return "slides";
      if (s.includes("textbook") || s.includes("book")) return "textbook";
      return "unknown";
    }
  }

  function applyModeAttr(mode){
    try { CONTENT_DOC.documentElement.dataset.liaMode = mode; } catch(e){}
  }

  // =========================================================
  // Theme Accent (LiaTheme-Farbe) -> CSS Var
  // =========================================================
  function getLiaAccentColor(doc){
    try{
      const d = doc || document;
      const body = d.body || d.documentElement;

      // wenn schon ein lia-btn existiert
      const existing = d.querySelector(".lia-btn");
      if (existing){
        const bg = getComputedStyle(existing).backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;
      }

      // sonst probe erzeugen
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

  function setVar(doc, k, v){
    try { doc.documentElement.style.setProperty(k, v); } catch(e){}
  }

  function syncAccent(){
    const acc =
      getLiaAccentColor(ROOT_DOC) ||
      getLiaAccentColor(CONTENT_DOC) ||
      "rgb(11,95,255)";
    setVar(ROOT_DOC,    "--lia-tafel-font-accent", acc);
    setVar(CONTENT_DOC, "--lia-tafel-font-accent", acc);
  }

  // =========================================================
  // Font logic (auto 18/24/32) + Slider override
  // =========================================================
  const PRES_PX = [18, 24, 32];

  function pxToStep0to2(px){
    if (px <= 17) return 0;
    if (px <= 19) return 1;
    return 2;
  }

  function getMainFontPx(){
    const main = CONTENT_DOC.querySelector("main") || CONTENT_DOC.documentElement;
    const fs = parseFloat(getComputedStyle(main).fontSize || "16");
    return isNaN(fs) ? 16 : fs;
  }

  function getSavedFontPx(){
    try{
      const v = localStorage.getItem(FONT_KEY);
      if (!v) return null;
      const n = parseInt(v, 10);
      if (!isFinite(n)) return null;
      return n;
    }catch(e){
      return null;
    }
  }

  function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

  function setPresFontPx(px){
    setVar(CONTENT_DOC, "--lia-pres-font", px == null ? "unset" : (px + "px"));
  }

  let sampling = false;

  function applyFontLogic(mode){
    const isPresLike = (mode === "presentation" || mode === "slides");

    if (!isPresLike){
      setPresFontPx(null);
      return;
    }

    // Slider override?
    const min = parseInt(getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--lia-tafel-font-min") || "14", 10);
    const max = parseInt(getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--lia-tafel-font-max") || "48", 10);
    const saved = getSavedFontPx();
    if (saved != null){
      setPresFontPx(clamp(saved, min, max));
      return;
    }

    // Auto: erst unset, dann messen
    if (sampling) return;
    sampling = true;

    setPresFontPx(null);

    CONTENT_WIN.requestAnimationFrame(function(){
      CONTENT_WIN.requestAnimationFrame(function(){
        const step = pxToStep0to2(getMainFontPx());
        setPresFontPx(PRES_PX[step]);
        sampling = false;
      });
    });
  }

  // =========================================================
  // Root UI: A-Button + Panel (nur Presentation)
  // =========================================================
  const SLOT_ID  = "lia-tafel-slot-v1";
  const BTN_ID   = "lia-tafel-font-btn-v1";
  const PANEL_ID = "lia-tafel-font-panel-v1";
  const SLIDER_ID= "lia-tafel-font-slider-v1";

  ensureStyle(ROOT_DOC, "lia-tafel-ui-style-root-v1", `
    /* Slot sitzt in der Header-Left-Leiste, direkt nach TOC */
    #${SLOT_ID}{
      display: inline-flex !important;
      align-items: center !important;
      gap: 8px !important;
      margin-left: 6px !important;   /* nah am TOC, ohne reinzuragen */
      flex: 0 0 auto !important;
    }

    /* Nur im Presentation-Modus sichtbar */
    body.lia-tafel-pres #${BTN_ID}{ display: inline-flex !important; }
    body:not(.lia-tafel-pres) #${BTN_ID}{ display: none !important; }
    body:not(.lia-tafel-pres) #${PANEL_ID}{ display: none !important; }

    #${BTN_ID}{
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

    #${BTN_ID}:hover{
      background: color-mix(in srgb, var(--lia-tafel-font-accent) 12%, transparent) !important;
    }
    #${BTN_ID}:active{
      background: color-mix(in srgb, var(--lia-tafel-font-accent) 18%, transparent) !important;
    }

    /* Focus komplett neutral (Nightly macht sonst Linien) */
    #${BTN_ID}:focus,
    #${BTN_ID}:focus-visible{
      outline: none !important;
      box-shadow: none !important;
    }

    /* Doppel-A: weiß + Themefarbe größer, leicht nach rechts */
    #${BTN_ID} .A-small,
    #${BTN_ID} .A-big{
      position: absolute !important;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
      font-weight: 950 !important;
      line-height: 1 !important;
      pointer-events: none !important;
      user-select: none !important;
    }

    #${BTN_ID} .A-small{
      left: 2px !important;
      top: -3px !important;
      font-size: 24px !important;
      color: #fff !important;
      text-shadow: 0 1px 2px rgba(0,0,0,.45) !important; /* auf hell/dunkel sichtbar */
      opacity: .98 !important;
    }

    #${BTN_ID} .A-big{
      left: 6px !important;     /* leicht nach rechts */
      top: -7px !important;
      font-size: 28px !important;
      color: var(--lia-tafel-font-accent) !important; /* LIA THEME-FARBE */
      opacity: .85 !important;
    }

    /* Panel (nur Slider) */
    #${PANEL_ID}{
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

    body.lia-tafel-panel-open #${PANEL_ID}{
      display: block !important;
    }

    #${PANEL_ID} input[type="range"]{
      width: 100% !important;
      margin: 0 !important;
      accent-color: var(--lia-tafel-font-accent) !important;
    }
  `);

  function findHeaderLeft(){
    const header =
      ROOT_DOC.querySelector("header#lia-toolbar-nav") ||
      ROOT_DOC.querySelector("#lia-toolbar-nav") ||
      ROOT_DOC.querySelector("header.lia-header");

    if (!header) return null;
    return header.querySelector(".lia-header__left") || null;
  }

  function findTOCButtonInLeft(left){
    if (!left) return null;
    const btns = Array.from(left.querySelectorAll("button,[role='button'],a"));
    if (!btns.length) return null;

    const pick = btns.find(b=>{
      const t = ((b.getAttribute("aria-label")||b.getAttribute("title")||b.textContent||"")+"").toLowerCase();
      return t.includes("inhaltsverzeichnis") || t.includes("table of contents") || t.includes("contents");
    });

    return pick || btns[0];
  }

  function ensureUI(){
    // Panel sicher am Body
    let panel = ROOT_DOC.getElementById(PANEL_ID);
    if (!panel){
      panel = ROOT_DOC.createElement("div");
      panel.id = PANEL_ID;
      panel.innerHTML = `<input id="${SLIDER_ID}" type="range" min="14" max="48" step="1" value="24" aria-label="Schriftgröße" />`;
      ROOT_DOC.body.appendChild(panel);
    }

    // Slot in Header-Left nach TOC
    const left = findHeaderLeft();
    if (!left) return;

    let slot = ROOT_DOC.getElementById(SLOT_ID);
    if (!slot){
      slot = ROOT_DOC.createElement("span");
      slot.id = SLOT_ID;
      slot.setAttribute("aria-label", "Tafelmodus Werkzeuge");
    }

    // Button
    let btn = ROOT_DOC.getElementById(BTN_ID);
    if (!btn){
      btn = ROOT_DOC.createElement("button");
      btn.id = BTN_ID;
      btn.type = "button";
      btn.setAttribute("aria-label","Schriftgröße");
      btn.innerHTML = `<span class="A-small">A</span><span class="A-big">A</span>`;
    }

    if (btn.parentNode !== slot) slot.appendChild(btn);

    if (slot.parentNode !== left){
      const toc = findTOCButtonInLeft(left);
      if (toc && toc.parentNode === left){
        toc.insertAdjacentElement("afterend", slot);
      }else{
        left.insertAdjacentElement("afterbegin", slot);
      }
    }
  }

  // =========================================================
  // Panel positioning (Viewport clamp, kein Reinragen)
  // =========================================================
  function getViewport(){
    const vv = ROOT_WIN.visualViewport;
    if (vv){
      return { w: vv.width, h: vv.height, ox: vv.offsetLeft || 0, oy: vv.offsetTop || 0 };
    }
    const de = ROOT_DOC.documentElement;
    return { w: de.clientWidth, h: de.clientHeight, ox: 0, oy: 0 };
  }

  function measurePanel(panel){
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

  function clamp(v, a, b){ return Math.max(a, Math.min(b, v)); }

  function positionPanel(){
    const btn = ROOT_DOC.getElementById(BTN_ID);
    const panel = ROOT_DOC.getElementById(PANEL_ID);
    if (!btn || !panel) return;

    if (!ROOT_DOC.body.classList.contains("lia-tafel-panel-open")) return;

    const r = btn.getBoundingClientRect();
    const vp = getViewport();
    const sz = measurePanel(panel);

    const gap = 10;
    const pad = 8;

    let left = r.left;
    let top  = r.bottom + gap;

    left = clamp(left, pad, vp.w - sz.w - pad);

    if (top + sz.h + pad > vp.h){
      top = r.top - gap - sz.h;
    }

    top = clamp(top, pad, vp.h - sz.h - pad);

    panel.style.left = `${Math.round(left + vp.ox)}px`;
    panel.style.top  = `${Math.round(top  + vp.oy)}px`;
  }

  // =========================================================
  // Wiring (einmal)
  // =========================================================
  function wireOnce(){
    const btn = ROOT_DOC.getElementById(BTN_ID);
    const panel = ROOT_DOC.getElementById(PANEL_ID);
    const slider = ROOT_DOC.getElementById(SLIDER_ID);
    if (!btn || !panel || !slider) return;

    if (!btn.__liaTafelWired){
      btn.__liaTafelWired = true;

      btn.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();

        const open = ROOT_DOC.body.classList.toggle("lia-tafel-panel-open");
        if (open) positionPanel();
      });

      // Klick außerhalb schließt Panel
      ROOT_DOC.addEventListener("click", (e)=>{
        if (!ROOT_DOC.body.classList.contains("lia-tafel-panel-open")) return;
        const t = e.target;
        if (t && (t.closest && (t.closest("#"+PANEL_ID) || t.closest("#"+BTN_ID)))) return;
        ROOT_DOC.body.classList.remove("lia-tafel-panel-open");
      }, true);

      ROOT_DOC.addEventListener("keydown", (e)=>{
        if (e.key === "Escape"){
          ROOT_DOC.body.classList.remove("lia-tafel-panel-open");
        }
      });

      ROOT_WIN.addEventListener("resize", positionPanel);
      if (ROOT_WIN.visualViewport){
        ROOT_WIN.visualViewport.addEventListener("resize", positionPanel);
        ROOT_WIN.visualViewport.addEventListener("scroll", positionPanel);
      }
    }

    if (!slider.__liaTafelWired){
      slider.__liaTafelWired = true;

      slider.addEventListener("input", ()=>{
        const min = parseInt(slider.min || "14", 10);
        const max = parseInt(slider.max || "48", 10);
        const v = clamp(parseInt(slider.value || "24", 10), min, max);

        try { localStorage.setItem(FONT_KEY, String(v)); } catch(e){}
        setPresFontPx(v);
      });
    }
  }

  function setPresentationOnlyVisibility(mode){
    const isPresentation = (mode === "presentation");
    ROOT_DOC.body.classList.toggle("lia-tafel-pres", isPresentation);

    // panel schließen, wenn nicht presentation
    if (!isPresentation){
      ROOT_DOC.body.classList.remove("lia-tafel-panel-open");
    }
  }

  function syncSliderToCurrentFont(){
    const slider = ROOT_DOC.getElementById(SLIDER_ID);
    if (!slider) return;

    const min = parseInt(slider.min || "14", 10);
    const max = parseInt(slider.max || "48", 10);

    // wenn saved existiert: slider dorthin, sonst current --lia-pres-font
    const saved = getSavedFontPx();
    if (saved != null){
      slider.value = String(clamp(saved, min, max));
      return;
    }

    // current var lesen
    const v = getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--lia-pres-font").trim();
    const n = parseInt(v, 10);
    if (isFinite(n)) slider.value = String(clamp(n, min, max));
  }

  // =========================================================
  // Tick (throttled) – ensure-Functions, damit Import immer greift
  // =========================================================
  function tick(){
    if (I.ticking) return;
    I.ticking = true;

    ROOT_WIN.requestAnimationFrame(() => {
      try{
        const raw  = safeGetSettingsRaw();
        const mode = detectMode();

        // 1) dataset im Content für CSS
        applyModeAttr(mode);

        // 2) Theme-Farbe -> Var
        syncAccent();

        // 3) UI in Root sicher anheften (nur Presentation sichtbar)
        ensureUI();
        setPresentationOnlyVisibility(mode);
        wireOnce();

        // 4) Font-Logik nur wenn Modus/Settings wechseln oder beim ersten Mal
        if (raw !== I.lastRaw || mode !== I.lastMode){
          applyFontLogic(mode);
          I.lastRaw  = raw;
          I.lastMode = mode;
        }

        // 5) Slider sync + Panel position
        syncSliderToCurrentFont();
        positionPanel();

      } finally {
        I.ticking = false;
      }
    });
  }

  // Root DOM changes -> tick (Toolbar kommt manchmal spät)
  try{
    const mo = new MutationObserver(() => tick());
    mo.observe(ROOT_DOC.documentElement, { childList:true, subtree:true });
  }catch(e){}

  // Content changes (main wird neu gerendert) -> tick
  try{
    const mo2 = new MutationObserver(() => tick());
    mo2.observe(CONTENT_DOC.documentElement, { childList:true, subtree:true });
  }catch(e){}

  // Storage changes
  ROOT_WIN.addEventListener("storage", function(e){
    if (!e) return;
    if (e.key === SETTINGS_KEY || e.key === FONT_KEY) tick();
  });

  // Periodisch, falls Lia intern umschaltet ohne DOM-Mutation
  tick();
  ROOT_WIN.setInterval(() => { if (I.__alive) tick(); }, 350);

})();
@end

-->








# Tafelmodus


Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.


