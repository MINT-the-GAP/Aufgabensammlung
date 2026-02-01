<!--
version:  0.0.3
language: de
comment: LiaScript – Tafelmodus (import-sicher): Presentation volle Breite (-25px Rand) + Schriftgrößen-Boost + A-Dock (nur Presentation) + Panel "Schriftgröße"
author: Martin Lommatzsch


@style
:root{
  /* links/rechts ungenutzt im Presentation-Modus */
  --lia-tflfont-side-gap: 25px;

  /* per JS gesetzt: "unset" oder z.B. 24px */
  --lia-tflfont-pres-font: unset;

  /* LiaTheme-Akzentfarbe (per JS ermittelt) */
  --lia-tflfont-accent: rgb(11,95,255);

  /* Slider-Range */
  --lia-tflfont-min: 14;
  --lia-tflfont-max: 48;
}

/* Fallback (wird zusätzlich per JS in Content injiziert) */
html[data-lia-mode="presentation"] body{ margin:0 !important; overflow-x:hidden !important; }
html[data-lia-mode="presentation"] main{
  width: calc(100vw - (2 * var(--lia-tflfont-side-gap))) !important;
  max-width: calc(100vw - (2 * var(--lia-tflfont-side-gap))) !important;
  margin-left: auto !important;
  margin-right: auto !important;
  box-sizing: border-box !important;
  padding-left:  var(--lia-tflfont-side-gap) !important;
  padding-right: var(--lia-tflfont-side-gap) !important;
}
html[data-lia-mode="presentation"] main,
html[data-lia-mode="slides"] main{
  font-size: var(--lia-tflfont-pres-font) !important;
}
@end



@onload
(function () {

  // =========================================================
  // Root/Content Resolve (iframe-safe)
  // =========================================================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT_WIN = getRootWindow();
  const ROOT_DOC = ROOT_WIN.document;

  function tryGetDoc(win){
    try { return win && win.document ? win.document : null; } catch(e){ return null; }
  }
  function hasMain(doc){
    try { return !!(doc && doc.querySelector && doc.querySelector("main")); } catch(e){ return false; }
  }

  function resolveContentTargets(){
    const docs = [];
    const seen = new Set();

    function add(doc){
      if (!doc || seen.has(doc)) return;
      seen.add(doc);
      docs.push(doc);
    }

    const curDoc = tryGetDoc(window);
    if (hasMain(curDoc)) add(curDoc);

    try{
      const iframes = Array.from(ROOT_DOC.querySelectorAll("iframe"));
      for (const fr of iframes){
        try{
          const d = fr.contentWindow && fr.contentWindow.document;
          if (hasMain(d)) add(d);
        }catch(e){}
      }
    }catch(e){}

    if (!docs.length) add(ROOT_DOC);

    const primaryDoc = docs.find(d => hasMain(d)) || ROOT_DOC;

    const primaryWin = (function(){
      if (primaryDoc === ROOT_DOC) return ROOT_WIN;
      if (curDoc === primaryDoc) return window;
      try{
        for (const fr of Array.from(ROOT_DOC.querySelectorAll("iframe"))){
          try{
            if (fr.contentWindow && fr.contentWindow.document === primaryDoc) return fr.contentWindow;
          }catch(e){}
        }
      }catch(e){}
      return ROOT_WIN;
    })();

    return { primaryWin, primaryDoc, docs };
  }

  // =========================================================
  // Per-Dokument Instance (kein Konflikt mit Textmarker-Import)
  // =========================================================
  const REGKEY = "__LIA_TFLFONT_REG_V3__";
  ROOT_WIN[REGKEY] = ROOT_WIN[REGKEY] || { instances: {} };

  const cur = resolveContentTargets();
  const DOC_ID =
    ((cur.primaryDoc && (cur.primaryDoc.baseURI || "")) || "") +
    "::" +
    ((cur.primaryDoc && cur.primaryDoc.title) || "");

  if (ROOT_WIN[REGKEY].instances[DOC_ID]?.__alive) return;

  const I = ROOT_WIN[REGKEY].instances[DOC_ID] = {
    __alive: true,
    ticking: false,
    lastRaw: null,
    lastMode: null
  };

  // =========================================================
  // Helpers
  // =========================================================
  function norm(x){ return String(x == null ? "" : x).toLowerCase(); }

  function ensureStyle(doc, id, css){
    try{
      if (!doc || doc.getElementById(id)) return;
      const st = doc.createElement("style");
      st.id = id;
      st.textContent = css;
      (doc.head || doc.documentElement).appendChild(st);
    }catch(e){}
  }

  function setVar(doc, k, v){
    try { doc.documentElement.style.setProperty(k, v); } catch(e){}
  }

  function clamp(n,a,b){ return Math.max(a, Math.min(b, n)); }

  // =========================================================
  // Mode detection (Lia settings in localStorage)
  // =========================================================
  const SETTINGS_KEY = "settings";
  const FONT_KEY     = "lia-tflfont-font-px-v3";

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

  function applyModeAttrToDocs(mode, docs){
    for (const d of docs){
      try { d.documentElement.dataset.liaMode = mode; } catch(e){}
    }
  }

  // =========================================================
  // Theme Accent -> CSS Var
  // =========================================================
  function getLiaAccentColor(doc){
    try{
      if (!doc) return null;
      const existing = doc.querySelector(".lia-btn");
      if (existing){
        const bg = getComputedStyle(existing).backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;
      }

      const body = doc.body || doc.documentElement;
      const probe = doc.createElement("button");
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

  function syncAccent(docs){
    const acc = getLiaAccentColor(ROOT_DOC) || "rgb(11,95,255)";
    for (const d of docs){
      setVar(d, "--lia-tflfont-accent", acc);
    }
  }

  // =========================================================
  // Content CSS injection (Presentation width + font binding)
  // =========================================================
  function ensureContentCSS(docs){
    const css = `
      html[data-lia-mode="presentation"] body{ margin:0 !important; overflow-x:hidden !important; }
      html[data-lia-mode="presentation"] main{
        width: calc(100vw - (2 * var(--lia-tflfont-side-gap))) !important;
        max-width: calc(100vw - (2 * var(--lia-tflfont-side-gap))) !important;
        margin-left: auto !important;
        margin-right: auto !important;
        box-sizing: border-box !important;
        padding-left:  var(--lia-tflfont-side-gap) !important;
        padding-right: var(--lia-tflfont-side-gap) !important;
      }
      html[data-lia-mode="presentation"] main,
      html[data-lia-mode="slides"] main{
        font-size: var(--lia-tflfont-pres-font) !important;
      }
    `;
    for (const d of docs){
      ensureStyle(d, "lia-tflfont-content-style-v3", css);
    }
  }

  // =========================================================
  // Font logic (auto 18/24/32) + Slider override
  // =========================================================
  const AUTO_PX = [18, 24, 32];

  function pxToStep0to2(px){
    if (px <= 17) return 0;
    if (px <= 19) return 1;
    return 2;
  }

  function getMainFontPx(doc){
    try{
      const main = doc.querySelector("main") || doc.documentElement;
      const fs = parseFloat(getComputedStyle(main).fontSize || "16");
      return isNaN(fs) ? 16 : fs;
    }catch(e){
      return 16;
    }
  }

  function getSavedFontPx(){
    try{
      const v = localStorage.getItem(FONT_KEY);
      if (!v) return null;
      const n = parseInt(v, 10);
      return isFinite(n) ? n : null;
    }catch(e){ return null; }
  }

  function setPresFontPxForDocs(pxOrNull, docs){
    const v = (pxOrNull == null) ? "unset" : (pxOrNull + "px");
    for (const d of docs){
      setVar(d, "--lia-tflfont-pres-font", v);
    }
  }

  // Slider-Override: zusätzlich inline auf <main>, damit Kursdateien garantiert reagieren
  function setMainInlineFont(pxOrNull, docs){
    for (const d of docs){
      try{
        const m = d.querySelector("main");
        if (!m) continue;
        m.style.fontSize = (pxOrNull == null) ? "" : (pxOrNull + "px");
      }catch(e){}
    }
  }

  let sampling = false;

  function applyFontLogic(mode, docs){
    const isPresLike = (mode === "presentation" || mode === "slides");

    if (!isPresLike){
      setPresFontPxForDocs(null, docs);
      setMainInlineFont(null, docs);
      return;
    }

    const min = parseInt(getComputedStyle(docs[0].documentElement).getPropertyValue("--lia-tflfont-min") || "14", 10);
    const max = parseInt(getComputedStyle(docs[0].documentElement).getPropertyValue("--lia-tflfont-max") || "48", 10);

    const saved = getSavedFontPx();
    if (saved != null){
      const v = clamp(saved, min, max);
      setPresFontPxForDocs(v, docs);
      setMainInlineFont(v, docs);
      return;
    }

    if (sampling) return;
    sampling = true;

    setPresFontPxForDocs(null, docs);
    setMainInlineFont(null, docs);

    const targets = resolveContentTargets();
    const pw = targets.primaryWin || ROOT_WIN;

    pw.requestAnimationFrame(function(){
      pw.requestAnimationFrame(function(){
        const step = pxToStep0to2(getMainFontPx(targets.primaryDoc));
        const v = AUTO_PX[step];
        setPresFontPxForDocs(v, docs);
        setMainInlineFont(null, docs); // auto via CSS-Var
        sampling = false;
      });
    });
  }

  // =========================================================
  // Root UI: fixed Dock (verändert nie Layout -> kein Nightly-Umbruch)
  // =========================================================
  const DOCK_ID   = "lia-tflfont-dock-v3";
  const BTN_ID    = "lia-tflfont-btn-v3";
  const PANEL_ID  = "lia-tflfont-panel-v3";
  const SLIDER_ID = "lia-tflfont-slider-v3";
  const TITLE_CLS = "lia-tflfont-title-v3";

  ensureStyle(ROOT_DOC, "lia-tflfont-ui-style-root-v3", `
    /* Dock: fixed -> drückt NIEMALS Toolbar um */
    #${DOCK_ID}{
      position: fixed !important;
      z-index: 9999999 !important;
      display: none !important;
      align-items: center !important;
      justify-content: center !important;
      width: 32px !important;
      height: 32px !important;
      left: 8px !important;
      top:  8px !important;
    }
    body.lia-tflfont-pres #${DOCK_ID}{ display: flex !important; }

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
      background: color-mix(in srgb, var(--lia-tflfont-accent) 12%, transparent) !important;
    }
    #${BTN_ID}:active{
      background: color-mix(in srgb, var(--lia-tflfont-accent) 18%, transparent) !important;
    }

    #${BTN_ID}:focus,
    #${BTN_ID}:focus-visible{
      outline: none !important;
      box-shadow: none !important;
    }

    /* Doppel-A: klein Akzent links, groß weiß rechts (größerer Abstand) */
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
      left: 1px !important;
      top: -3px !important;
      font-size: 24px !important;
      color: var(--lia-tflfont-accent) !important;
      opacity: .92 !important;
      text-shadow: 0 1px 2px rgba(0,0,0,.25) !important;
    }

    #${BTN_ID} .A-big{
      left: 9px !important;
      top: -7px !important;
      font-size: 28px !important;
      color: #fff !important;
      opacity: .98 !important;
      text-shadow: 0 1px 2px rgba(0,0,0,.45) !important;
    }

    /* Panel */
    #${PANEL_ID}{
      position: fixed !important;
      z-index: 9999998 !important;
      width: 250px !important;
      padding: 12px 14px !important;
      display: none !important;
      border-radius: 14px !important;
      border: 1px solid color-mix(in srgb, currentColor 18%, transparent) !important;
      background: color-mix(in srgb, rgba(0, 0, 0, 0.62) 62%, transparent) !important;
      backdrop-filter: blur(8px);
      box-shadow: 0 16px 42px rgba(0,0,0,.18) !important;
    }
    body.lia-tflfont-panel-open #${PANEL_ID}{ display: block !important; }

    /* Titel größer */
    #${PANEL_ID} .${TITLE_CLS}{
      font-weight: 800 !important;
      font-size: 1.15rem !important;
      margin: 0 0 10px 0 !important;
      line-height: 1.15 !important;
      letter-spacing: .2px !important;
    }

    #${PANEL_ID} input[type="range"]{
      width: 100% !important;
      margin: 0 !important;
      accent-color: var(--lia-tflfont-accent) !important;
    }
  `);

  function findHeader(){
    return (
      ROOT_DOC.querySelector("header#lia-toolbar-nav") ||
      ROOT_DOC.querySelector("#lia-toolbar-nav") ||
      ROOT_DOC.querySelector("header.lia-header") ||
      null
    );
  }

  function findHeaderLeft(){
    const header = findHeader();
    if (!header) return null;
    return header.querySelector(".lia-header__left") || null;
  }

  function findTOCButton(){
    const left = findHeaderLeft();
    if (!left) return null;
    const btns = Array.from(left.querySelectorAll("button,[role='button'],a"));
    const pick = btns.find(b=>{
      const t = ((b.getAttribute("aria-label")||b.getAttribute("title")||b.textContent||"")+"").toLowerCase();
      return t.includes("inhaltsverzeichnis") || t.includes("table of contents") || t.includes("contents");
    });
    return pick || btns[0] || null;
  }

  function findMarkerButton(){
    const byId =
      ROOT_DOC.getElementById("lia-hl-btn") ||
      ROOT_DOC.getElementById("lia-textmarker-btn") ||
      ROOT_DOC.getElementById("lia-marker-btn");
    if (byId) return byId;

    const candidates = Array.from(ROOT_DOC.querySelectorAll("button,[role='button'],a"));
    return candidates.find(b=>{
      const t = ((b.getAttribute("aria-label")||b.getAttribute("title")||b.textContent||"")+"").toLowerCase();
      return t.includes("textmarker") || t.includes("markieren") || t.includes("highlight");
    }) || null;
  }

  function ensureUI(){
    // Dock
    let dock = ROOT_DOC.getElementById(DOCK_ID);
    if (!dock){
      dock = ROOT_DOC.createElement("div");
      dock.id = DOCK_ID;
      ROOT_DOC.body.appendChild(dock);
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
    if (btn.parentNode !== dock) dock.appendChild(btn);

    // Panel
    let panel = ROOT_DOC.getElementById(PANEL_ID);
    if (!panel){
      panel = ROOT_DOC.createElement("div");
      panel.id = PANEL_ID;
      panel.innerHTML = `
        <div class="${TITLE_CLS}">Schriftgröße</div>
        <input id="${SLIDER_ID}" type="range" min="14" max="48" step="1" value="24" aria-label="Schriftgröße" />
      `;
      ROOT_DOC.body.appendChild(panel);
    }
  }

  function setPresentationOnlyVisibility(mode){
    const isPresentation = (mode === "presentation");
    ROOT_DOC.body.classList.toggle("lia-tflfont-pres", isPresentation);
    if (!isPresentation){
      ROOT_DOC.body.classList.remove("lia-tflfont-panel-open");
    }
  }

  // =========================================================
  // Dock Position: orientiert sich an TOC/Textmarker + Headerhöhe
  // (damit Nightly keine Lücken hat und alles in einer Reihe sitzt)
  // =========================================================
  function getViewport(){
    const vv = ROOT_WIN.visualViewport;
    if (vv){
      return { w: vv.width, h: vv.height, ox: vv.offsetLeft || 0, oy: vv.offsetTop || 0 };
    }
    const de = ROOT_DOC.documentElement;
    return { w: de.clientWidth, h: de.clientHeight, ox: 0, oy: 0 };
  }

  function positionDock(){
    const dock = ROOT_DOC.getElementById(DOCK_ID);
    if (!dock || !ROOT_DOC.body.classList.contains("lia-tflfont-pres")) return;

    const vp = getViewport();
    const header = findHeader();
    const toc = findTOCButton();
    const marker = findMarkerButton();

    const pad = 8;
    const gap = 10;

    // Y: optisch in die Header-Zeile zentrieren (keine "Lücke nach unten")
    let y = pad;
    if (header){
      try{
        const hr = header.getBoundingClientRect();
        y = hr.top + (hr.height - 32) / 2;
      }catch(e){}
    }

    // X: rechts neben TOC/Marker, je nachdem was weiter rechts steht
    let x = pad;

    function rightEdge(el){
      try { return el ? el.getBoundingClientRect().right : null; } catch(e){ return null; }
    }

    const tr = rightEdge(toc);
    const mr = rightEdge(marker);

    const base = Math.max(tr || 0, mr || 0);
    if (base > 0) x = base + gap;

    // Clamp in Viewport
    x = clamp(x, pad, vp.w - 32 - pad);
    y = clamp(y, pad, vp.h - 32 - pad);

    dock.style.left = Math.round(x + vp.ox) + "px";
    dock.style.top  = Math.round(y + vp.oy) + "px";
  }

  // =========================================================
  // Panel positioning
  // =========================================================
  function measurePanel(panel){
    const prevDisplay = panel.style.display;
    const prevVis = panel.style.visibility;
    const prevLeft = panel.style.left;
    const prevTop = panel.style.top;

    panel.style.display = "block";
    panel.style.visibility = "hidden";
    panel.style.left = "-9999px";
    panel.style.top  = "-9999px";

    const w = panel.offsetWidth || 250;
    const h = panel.offsetHeight || 90;

    panel.style.display = prevDisplay;
    panel.style.visibility = prevVis;
    panel.style.left = prevLeft;
    panel.style.top  = prevTop;

    return { w, h };
  }

  function positionPanel(){
    const dock = ROOT_DOC.getElementById(DOCK_ID);
    const panel = ROOT_DOC.getElementById(PANEL_ID);
    if (!dock || !panel) return;
    if (!ROOT_DOC.body.classList.contains("lia-tflfont-panel-open")) return;

    const vp = getViewport();
    const r = dock.getBoundingClientRect();
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
  // Wiring
  // =========================================================
  function wireOnce(){
    const btn    = ROOT_DOC.getElementById(BTN_ID);
    const slider = ROOT_DOC.getElementById(SLIDER_ID);
    if (!btn || !slider) return;

    if (!btn.__tflfontWired){
      btn.__tflfontWired = true;

      btn.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const open = ROOT_DOC.body.classList.toggle("lia-tflfont-panel-open");
        if (open) positionPanel();
      });

      ROOT_DOC.addEventListener("click", (e)=>{
        if (!ROOT_DOC.body.classList.contains("lia-tflfont-panel-open")) return;
        const t = e.target;
        if (t && t.closest && (t.closest("#"+PANEL_ID) || t.closest("#"+BTN_ID) || t.closest("#"+DOCK_ID))) return;
        ROOT_DOC.body.classList.remove("lia-tflfont-panel-open");
      }, true);

      ROOT_DOC.addEventListener("keydown", (e)=>{
        if (e.key === "Escape"){
          ROOT_DOC.body.classList.remove("lia-tflfont-panel-open");
        }
      });

      ROOT_WIN.addEventListener("resize", ()=>{ positionDock(); positionPanel(); });
      if (ROOT_WIN.visualViewport){
        ROOT_WIN.visualViewport.addEventListener("resize", ()=>{ positionDock(); positionPanel(); });
        ROOT_WIN.visualViewport.addEventListener("scroll", ()=>{ positionDock(); positionPanel(); });
      }
    }

    if (!slider.__tflfontWired){
      slider.__tflfontWired = true;

      slider.addEventListener("input", ()=>{
        const targets = resolveContentTargets();
        const docs = targets.docs;

        const min = parseInt(slider.min || "14", 10);
        const max = parseInt(slider.max || "48", 10);
        const v = clamp(parseInt(slider.value || "24", 10), min, max);

        try { localStorage.setItem(FONT_KEY, String(v)); } catch(e){}

        setPresFontPxForDocs(v, docs);
        setMainInlineFont(v, docs);
      });
    }
  }

  function syncSliderToCurrentFont(docs){
    const slider = ROOT_DOC.getElementById(SLIDER_ID);
    if (!slider) return;

    const min = parseInt(slider.min || "14", 10);
    const max = parseInt(slider.max || "48", 10);

    const saved = getSavedFontPx();
    if (saved != null){
      slider.value = String(clamp(saved, min, max));
      return;
    }

    try{
      const v = getComputedStyle(docs[0].documentElement).getPropertyValue("--lia-tflfont-pres-font").trim();
      const n = parseInt(v, 10);
      if (isFinite(n)) slider.value = String(clamp(n, min, max));
    }catch(e){}
  }

  // =========================================================
  // Tick (ensure-Pattern)
  // =========================================================
  function tick(){
    if (I.ticking) return;
    I.ticking = true;

    ROOT_WIN.requestAnimationFrame(() => {
      try{
        const targets = resolveContentTargets();
        const docs = targets.docs;

        const raw  = safeGetSettingsRaw();
        const mode = detectMode();

        ensureContentCSS(docs);
        applyModeAttrToDocs(mode, docs);
        syncAccent(docs);

        ensureUI();
        setPresentationOnlyVisibility(mode);
        wireOnce();

        if (raw !== I.lastRaw || mode !== I.lastMode){
          applyFontLogic(mode, docs);
          I.lastRaw  = raw;
          I.lastMode = mode;
        }

        syncSliderToCurrentFont(docs);
        positionDock();
        positionPanel();

      } finally {
        I.ticking = false;
      }
    });
  }

  try{
    const mo = new MutationObserver(() => tick());
    mo.observe(ROOT_DOC.documentElement, { childList:true, subtree:true });
  }catch(e){}

  ROOT_WIN.addEventListener("storage", function(e){
    if (!e) return;
    if (e.key === SETTINGS_KEY || e.key === FONT_KEY) tick();
  });

  tick();
  ROOT_WIN.setInterval(() => tick(), 350);

})();
@end
-->











# Tafelmodus


Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.


