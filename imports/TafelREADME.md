<!--
version:  0.0.2
language: de
comment: LiaScript – Presentation 98% Breite + Auto-Font-Boost + Schriftgrößen-Regler (Overlay-Button, nur Presentation) – import-sicher, kollisionsarm
author: Martin Lommatzsch


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
  const REGKEY = "__LIA_TFF_REG_V2__";
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
  lastMode: null,
  lastSettingsRaw: null,
  posTimers: [],
  lastShow: null,
  lastToolbarSig: null,
  lastBurstAt: 0,
  pendingReposition: false
};





// =========================================================
  // Reposition-Sequenz (Nightly: Toolbar/Layout setzt sich verzögert)
  // =========================================================
  function clearPosTimers(){
    try{
      if (!I.posTimers) I.posTimers = [];
      while (I.posTimers.length){
        ROOT_WIN.clearTimeout(I.posTimers.pop());
      }
    }catch(e){}
  }

  function runPositionNow(){
    // beides, weil Panel von Button abhängt
    positionOverlayButton();
    positionPanel();
  }

  function scheduleRepositionBurst(){
    clearPosTimers();

    // sofort + 2×rAF (Layout/Fonts/Toolbar)
    runPositionNow();
    ROOT_WIN.requestAnimationFrame(() => {
      ROOT_WIN.requestAnimationFrame(() => runPositionNow());
    });

    // kurze Delays für Nightly-Navigation/Transitions
    const delays = [40, 120, 260, 520];
    for (const ms of delays){
      I.posTimers.push(ROOT_WIN.setTimeout(() => {
        runPositionNow();
      }, ms));
    }

    // optional: wenn Fonts spät kommen
    try{
      if (ROOT_DOC.fonts && ROOT_DOC.fonts.ready){
        ROOT_DOC.fonts.ready.then(() => runPositionNow());
      }
    }catch(e){}
  }




  // =========================================================
  // Helpers: CSS Injection (import-sicher)
  // =========================================================
  function ensureStyle(doc, id, css){
    try{
      if (!doc) return;
      const old = doc.getElementById(id);
      if (old) return;
      const st = doc.createElement("style");
      st.id = id;
      st.textContent = css;
      (doc.head || doc.documentElement).appendChild(st);
    }catch(e){}
  }

  // =========================================================
  // Mode detection (Lia settings in localStorage)
  // =========================================================
  const SETTINGS_KEY = "settings";
  const FONT_KEY     = "lia-tff-font-px-v2"; // persistierter Slider-Wert (px)

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
  // Theme Accent (LiaTheme-Farbe) -> CSS Var (Root + Content)
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

    setVar(ROOT_DOC,    "--lia-tff-accent", acc);
    setVar(CONTENT_DOC, "--lia-tff-accent", acc);
  }

  // =========================================================
  // CSS: Presentation width + font var (Content Document)
  // =========================================================
  const CONTENT_STYLE_ID = "lia-tff-style-content-v2";
  const CONTENT_CSS = `
    :root{
      --lia-tff-side-gap: 25px;     /* links/rechts ungenutzt */
      --lia-tff-maxw: 98vw;         /* max 98% */
      --lia-tff-font: unset;        /* wird per JS gesetzt */
    }

    html[data-lia-mode="presentation"] body{
      margin: 0 !important;
      overflow-x: hidden !important;
    }

    /* NUR main anfassen (keine Slides-Wrapper!) */
    html[data-lia-mode="presentation"] main{
      box-sizing: border-box !important;

      width: min(var(--lia-tff-maxw), calc(100vw - (2 * var(--lia-tff-side-gap)))) !important;
      max-width: min(var(--lia-tff-maxw), calc(100vw - (2 * var(--lia-tff-side-gap)))) !important;

      margin-left: auto !important;
      margin-right: auto !important;

      padding-left:  var(--lia-tff-side-gap) !important;
      padding-right: var(--lia-tff-side-gap) !important;
    }

    /* Schrift-Boost: presentation UND slides */
    html[data-lia-mode="presentation"] main,
    html[data-lia-mode="slides"] main{
      font-size: var(--lia-tff-font) !important;
    }
  `;

  function ensureContentCSS(){
    ensureStyle(CONTENT_DOC, CONTENT_STYLE_ID, CONTENT_CSS);
  }

  // =========================================================
  // Font logic (auto 18/24/32) + Slider override (nur Presentation)
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
      return isFinite(n) ? n : null;
    }catch(e){
      return null;
    }
  }

  function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

  function setPresFontPx(px){
    // set auf Content-Doc!
    setVar(CONTENT_DOC, "--lia-tff-font", (px == null) ? "unset" : (px + "px"));
  }

  let sampling = false;

  function applyFontLogic(mode){
    const isSlides = (mode === "slides");
    const isPres   = (mode === "presentation");
    const isPresLike = (isPres || isSlides);

    if (!isPresLike){
      setPresFontPx(null);
      return;
    }

    // Slider-Override nur in Presentation
    if (isPres){
      const saved = getSavedFontPx();
      if (saved != null){
        const min = 14, max = 48;
        setPresFontPx(clamp(saved, min, max));
        return;
      }
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
  // Root UI (Overlay) – wie beim Textmarker gedacht: NICHT in Header flow
  // =========================================================
  const ROOT_STYLE_ID = "lia-tff-style-root-v2";
  const OVERLAY_ID    = "lia-tff-overlay-v2";
  const BTN_ID        = "lia-tff-btn-v2";
  const PANEL_ID      = "lia-tff-panel-v2";
  const SLIDER_ID     = "lia-tff-slider-v2";
  const TITLE_ID      = "lia-tff-title-v2";

  const ROOT_CSS = `
    :root{
      --lia-tff-accent: rgb(11,95,255);
    }

    /* Overlay-Container: fixed, schiebt nichts im Header */
    #${OVERLAY_ID}{
      position: fixed !important;
      z-index: 99999980 !important;
      left: 0;
      top: 0;
      width: 0;
      height: 0;
      pointer-events: none !important; /* Button bekommt wieder pointer */
    }

    #${BTN_ID}{
      pointer-events: auto !important;

      position: absolute !important;
      width: 34px !important;
      height: 34px !important;

      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;

      border: 0 !important;
      background: transparent !important;
      border-radius: 10px !important;

      cursor: pointer !important;
      user-select: none !important;
      -webkit-tap-highlight-color: transparent !important;
    }

    #${BTN_ID}:hover{
      background: color-mix(in srgb, var(--lia-tff-accent) 12%, transparent) !important;
    }
    #${BTN_ID}:active{
      background: color-mix(in srgb, var(--lia-tff-accent) 18%, transparent) !important;
    }
    #${BTN_ID}:focus,
    #${BTN_ID}:focus-visible{
      outline: none !important;
      box-shadow: none !important;
    }

    /* Doppel-A: Farben getauscht + mehr Abstand */
    #${BTN_ID} .tffA-small,
    #${BTN_ID} .tffA-big{
      position: absolute !important;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
      font-weight: 950 !important;
      line-height: 1 !important;
      pointer-events: none !important;
      user-select: none !important;
    }

    /* klein = Themefarbe */
    #${BTN_ID} .tffA-small{
      left: 2px !important;
      top: 3px !important;
      font-size: 24px !important;
      color: var(--lia-tff-accent) !important;
      text-shadow: 0 1px 2px rgba(0,0,0,.25) !important;
      opacity: .95 !important;
    }

    /* groß = weiß, deutlich weiter rechts */
    #${BTN_ID} .tffA-big{
      left: 10px !important;
      top: -2px !important;
      font-size: 30px !important;
      color: #fff !important;
      text-shadow: 0 2px 3px rgba(0,0,0,.45) !important;
      opacity: .98 !important;
    }

    /* Panel */
    #${PANEL_ID}{
      position: fixed !important;
      z-index: 99999979 !important;

      width: 240px !important;
      padding: 12px 14px !important;

      display: none !important;

      border-radius: 14px !important;
      border: 1px solid color-mix(in srgb, currentColor 18%, transparent) !important;
      background: color-mix(in srgb, rgba(0, 0, 0, 0.65) 65%, transparent) !important;
      backdrop-filter: blur(8px);
      box-shadow: 0 16px 42px rgba(0,0,0,.18) !important;
    }

    body.lia-tff-panel-open #${PANEL_ID}{
      display: block !important;
    }

    #${TITLE_ID}{
      font-size: 1.15rem !important;
      font-weight: 800 !important;
      margin: 0 0 10px 0 !important;
      letter-spacing: .2px !important;
    }

    #${PANEL_ID} input[type="range"]{
      width: 100% !important;
      margin: 0 !important;
      accent-color: var(--lia-tff-accent) !important;
    }

    /* Backstop: auf kleinen Screens nie anzeigen */
    @media (max-width: 680px){
      #lia-tff-btn-v2{ display: none !important; }
      body.lia-tff-panel-open #lia-tff-panel-v2{ display: none !important; }
    }


  `;

  function ensureRootCSS(){
    ensureStyle(ROOT_DOC, ROOT_STYLE_ID, ROOT_CSS);
  }

  function ensureUI(){
    // Overlay mount
    let overlay = ROOT_DOC.getElementById(OVERLAY_ID);
    if (!overlay){
      overlay = ROOT_DOC.createElement("div");
      overlay.id = OVERLAY_ID;
      ROOT_DOC.body.appendChild(overlay);
    }

    // Button
    let btn = ROOT_DOC.getElementById(BTN_ID);
    if (!btn){
      btn = ROOT_DOC.createElement("button");
      btn.id = BTN_ID;
      btn.type = "button";
      btn.setAttribute("aria-label","Schriftgröße");
      btn.innerHTML = `<span class="tffA-small">A</span><span class="tffA-big">A</span>`;
      overlay.appendChild(btn);
    }

    // Panel
    let panel = ROOT_DOC.getElementById(PANEL_ID);
    if (!panel){
      panel = ROOT_DOC.createElement("div");
      panel.id = PANEL_ID;
      panel.innerHTML =
        `<div id="${TITLE_ID}">Schriftgröße</div>` +
        `<input id="${SLIDER_ID}" type="range" min="14" max="48" step="1" value="24" aria-label="Schriftgröße" />`;
      ROOT_DOC.body.appendChild(panel);
    }
  }

  // =========================================================
  // Positioning: Dock an TOC/Nav-Button, plus Rücksicht auf Textmarker
  // (ohne in den Header zu greifen -> kein Layout-Schieben)
  // =========================================================
  function getViewport(){
    const vv = ROOT_WIN.visualViewport;
    if (vv){
      return { w: vv.width, h: vv.height, ox: vv.offsetLeft || 0, oy: vv.offsetTop || 0 };
    }
    const de = ROOT_DOC.documentElement;
    return { w: de.clientWidth, h: de.clientHeight, ox: 0, oy: 0 };
  }

  function clamp(v, a, b){ return Math.max(a, Math.min(b, v)); }

  function findTOCButton(){
    // Heuristik: aria-label/title enthält Inhaltsverzeichnis/contents,
    // sonst erster Button links oben im Toolbar-Header.
    const all = Array.from(ROOT_DOC.querySelectorAll("button,[role='button'],a"));
    const byLabel = all.find(el=>{
      const t = ((el.getAttribute("aria-label")||el.getAttribute("title")||el.textContent||"")+"").toLowerCase();
      return t.includes("inhaltsverzeichnis") || t.includes("table of contents") || t.includes("contents");
    });
    if (byLabel) return byLabel;

    const header =
      ROOT_DOC.querySelector("header#lia-toolbar-nav") ||
      ROOT_DOC.querySelector("#lia-toolbar-nav") ||
      ROOT_DOC.querySelector("header.lia-header");

    if (header){
      const left = header.querySelector(".lia-header__left") || header;
      const btn = left.querySelector("button,[role='button'],a");
      if (btn) return btn;
    }

    // Fallback: erster Button überhaupt
    return all.find(el=>el.tagName === "BUTTON") || null;
  }



  // =========================================================
  // Positioning: Dock an die Top-Left-Toolbar-Zeile (Nightly-safe)
  // =========================================================
  function getVisibleRect(el){
    if (!el) return null;
    try{
      const cs = ROOT_WIN.getComputedStyle(el);
      if (!cs || cs.display === "none" || cs.visibility === "hidden" || cs.opacity === "0") return null;

      const r = el.getBoundingClientRect();
      if (!r || r.width < 6 || r.height < 6) return null;
      // außerhalb Viewport: ignorieren
      const vp = getViewport();
      if (r.right < 0 || r.bottom < 0 || r.left > vp.w || r.top > vp.h) return null;

      return r;
    }catch(e){
      return null;
    }
  }

  function isToolbarLike(el){
    // entweder im Toolbar-Header, oder overlay/fixed/absolute
    try{
      if (el.closest && el.closest("header#lia-toolbar-nav,#lia-toolbar-nav,header.lia-header")) return true;
      const pos = ROOT_WIN.getComputedStyle(el).position;
      return (pos === "fixed" || pos === "absolute");
    }catch(e){
      return false;
    }
  }

function collectTopLeftRowButtons(anchorRect){
  const vp = getViewport();

  // Toolbar kann je nach Modus etwas tiefer sitzen (TOC offen etc.)
  const maxTop  = 200;                 // vorher 140
  const maxLeft = vp.w * 0.70;         // vorher 0.55 (TOC kann Toolbar leicht nach rechts schieben)

  const els = Array.from(ROOT_DOC.querySelectorAll("button,[role='button'],a"));

  const out = [];

  // Anchor-Mitte + dynamische Toleranz (TOC-Open verschiebt Buttons oft ein paar Pixel)
  const aMidY = anchorRect ? (anchorRect.top + anchorRect.height / 2) : 24;
  const aH    = anchorRect ? anchorRect.height : 34;
  const yTol  = Math.max(52, aH * 1.6); // <<< wichtig: deutlich toleranter

  for (const el of els){
    if (!el || el.id === BTN_ID) continue;

    const r = getVisibleRect(el);
    if (!r) continue;

    // nur "oben" + eher links (aber nicht zu strikt)
    if (r.top > maxTop) continue;
    if (r.left > maxLeft) continue;

    // gleiche Toolbar-Zeile (tolerant!)
    const midY = r.top + r.height / 2;
    if (Math.abs(midY - aMidY) > yTol) continue;

    // keine riesigen Container
    if (r.width > 180 || r.height > 90) continue;

    if (!isToolbarLike(el)) continue;

    out.push({ el, r });
  }

  return out;
}



function toolbarSignature(){
  try{
    const vp = getViewport();

    const tocR = getVisibleRect(findTOCButton());
    const pad = 8;

    // Anchor notfalls Top-Left-Pad
    const anchor = tocR || { left: pad, top: pad, right: pad + 34, bottom: pad + 34, height: 34 };

    const peers = collectTopLeftRowButtons(anchor);

    let rightEdge = anchor.right;
    let topBand   = anchor.top;
    let rowH      = anchor.height || 34;

    for (const p of peers){
      rightEdge = Math.max(rightEdge, p.r.right);
      topBand   = Math.min(topBand,   p.r.top);
      rowH      = Math.max(rowH,      p.r.height);
    }

    return [
      Math.round(vp.w), Math.round(vp.h),
      Math.round(vp.ox), Math.round(vp.oy),
      Math.round(topBand), Math.round(rowH),
      Math.round(rightEdge),
      peers.length
    ].join("|");
  }catch(e){
    return null;
  }
}


function burstRepositionThrottled(){
  const now = Date.now();
  if (now - (I.lastBurstAt || 0) < 120) return;
  I.lastBurstAt = now;
  scheduleRepositionBurst();
}



function positionOverlayButton(){
  const btn = ROOT_DOC.getElementById(BTN_ID);
  const overlay = ROOT_DOC.getElementById(OVERLAY_ID);
  if (!btn || !overlay) return;

  const vp  = getViewport();
  const pad = 8;
  const gap = 8;

  // Buttongröße: wenn messbar -> nehmen, sonst fallback (auch bei display:none)
  let bw = 34, bh = 34;
  try{
    const r = btn.getBoundingClientRect();
    if (r && r.width > 6 && r.height > 6){
      bw = r.width;
      bh = r.height;
    }
  }catch(e){}

  const tocR = getVisibleRect(findTOCButton());

  // Anchor: TOC, sonst Top-Left
  const anchor = tocR || { left: pad, top: pad, right: pad + bw, bottom: pad + bh, height: bh };

  // Peers sammeln (Toolbar-Zeile tolerant)
  const peers = collectTopLeftRowButtons(anchor);

  // Rechtestes Ende bestimmen
  let rightEdge = anchor.right;
  for (const p of peers){
    rightEdge = Math.max(rightEdge, p.r.right);
  }

  // Vertikal an Anchor zentrieren
  const targetTop = anchor.top + ((anchor.height || bh) - bh) / 2;

  let left = rightEdge + gap;
  let top  = targetTop;

  // clamp
  left = clamp(left, pad, vp.w - bw - pad);
  top  = clamp(top,  pad, vp.h - bh - pad);

  // VisualViewport offset
  overlay.style.left = `${Math.round(vp.ox)}px`;
  overlay.style.top  = `${Math.round(vp.oy)}px`;

  // Position setzen (auch wenn Button aktuell hidden ist -> wirkt beim nächsten Show sofort)
  btn.style.left = `${Math.round(left)}px`;
  btn.style.top  = `${Math.round(top)}px`;
}





  function measurePanel(panel){
    const prevD = panel.style.display;
    const prevV = panel.style.visibility;
    const prevL = panel.style.left;
    const prevT = panel.style.top;

    panel.style.display = "block";
    panel.style.visibility = "hidden";
    panel.style.left = "-9999px";
    panel.style.top  = "-9999px";

    const w = panel.offsetWidth || 240;
    const h = panel.offsetHeight || 90;

    panel.style.display = prevD;
    panel.style.visibility = prevV;
    panel.style.left = prevL;
    panel.style.top  = prevT;

    return { w, h };
  }

  function positionPanel(){
    const btn = ROOT_DOC.getElementById(BTN_ID);
    const panel = ROOT_DOC.getElementById(PANEL_ID);
    if (!btn || !panel) return;

    if (!ROOT_DOC.body.classList.contains("lia-tff-panel-open")) return;

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
  // Wiring
  // =========================================================


  const TFF_HIDE_MAX_W = 680;   // <- anpassen, wenn du willst (typisch Phone <= 680px)
  const TFF_HIDE_MIN_DIM = 520; // <- Querformat-Handy abfangen

  function isSmallScreen(){
    try{
      const vv = ROOT_WIN.visualViewport;
      const w = vv ? vv.width  : (ROOT_DOC.documentElement.clientWidth  || 9999);
      const h = vv ? vv.height : (ROOT_DOC.documentElement.clientHeight || 9999);
      const minDim = Math.min(w, h);

      // "phone-like": entweder schmal, oder sehr kleine minimale Kante
      return (w <= TFF_HIDE_MAX_W) || (minDim <= TFF_HIDE_MIN_DIM);
    }catch(e){
      return false;
    }
  }




function setPresentationOnlyVisibility(mode){
  const isPres = (mode === "presentation");
  const small  = isSmallScreen();
  const show   = isPres && !small;

  const btn   = ROOT_DOC.getElementById(BTN_ID);
  const panel = ROOT_DOC.getElementById(PANEL_ID);

  if (btn) btn.style.display = show ? "inline-flex" : "none";

  // Wenn wir ausblenden: Panel immer schließen + Timer stoppen
  if (!show && panel){
    ROOT_DOC.body.classList.remove("lia-tff-panel-open");
    panel.style.display = "none";
    clearPosTimers();
  }

  return show;
}



  function syncSliderToCurrent(){
    const slider = ROOT_DOC.getElementById(SLIDER_ID);
    if (!slider) return;

    const min = parseInt(slider.min || "14", 10);
    const max = parseInt(slider.max || "48", 10);

    // saved (nur Presentation relevant, aber Slider nur dort sichtbar)
    const saved = getSavedFontPx();
    if (saved != null){
      slider.value = String(clamp(saved, min, max));
      return;
    }

    // current var
    const v = getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--lia-tff-font").trim();
    const n = parseInt(v, 10);
    if (isFinite(n)) slider.value = String(clamp(n, min, max));
  }

  function wireOnce(){
    const btn = ROOT_DOC.getElementById(BTN_ID);
    const slider = ROOT_DOC.getElementById(SLIDER_ID);
    if (!btn || !slider) return;

    if (!btn.__liaTffWired){
      btn.__liaTffWired = true;

      btn.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        ROOT_DOC.body.classList.toggle("lia-tff-panel-open");
        positionPanel();
      });

      // Klick außerhalb schließt Panel
      ROOT_DOC.addEventListener("click", (e)=>{
        if (!ROOT_DOC.body.classList.contains("lia-tff-panel-open")) return;
        const t = e.target;
        if (t && t.closest && (t.closest("#"+PANEL_ID) || t.closest("#"+BTN_ID))) return;
        ROOT_DOC.body.classList.remove("lia-tff-panel-open");
      }, true);

      ROOT_DOC.addEventListener("keydown", (e)=>{
        if (e.key === "Escape"){
          ROOT_DOC.body.classList.remove("lia-tff-panel-open");
        }
      });

      ROOT_WIN.addEventListener("resize", ()=>{ positionOverlayButton(); positionPanel(); });
      if (ROOT_WIN.visualViewport){
        ROOT_WIN.visualViewport.addEventListener("resize", ()=>{ positionOverlayButton(); positionPanel(); });
        ROOT_WIN.visualViewport.addEventListener("scroll", ()=>{ positionOverlayButton(); positionPanel(); });
      }
    }

    if (!slider.__liaTffWired){
      slider.__liaTffWired = true;

      slider.addEventListener("input", ()=>{
        const min = parseInt(slider.min || "14", 10);
        const max = parseInt(slider.max || "48", 10);
        const v = clamp(parseInt(slider.value || "24", 10), min, max);

        try { localStorage.setItem(FONT_KEY, String(v)); } catch(e){}
        setPresFontPx(v);
      });
    }
  }

  // =========================================================
  // Tick (throttled) – ensure-Functions, damit Import immer greift
  // =========================================================

function tick(){
  if (I.ticking) return;
  I.ticking = true;

  ROOT_WIN.requestAnimationFrame(() => {
    try{
      // 0) CSS sicher injizieren
      ensureContentCSS();
      ensureRootCSS();

      // 1) Mode/Settings lesen + dataset setzen
      const settingsRaw = safeGetSettingsRaw();
      const mode = detectMode();
      applyModeAttr(mode);

      // 2) Theme-Akzent synchronisieren
      syncAccent();

      // 3) UI sicherstellen + Sichtbarkeit
      ensureUI();
      const show = setPresentationOnlyVisibility(mode);

      const showChanged = (I.lastShow === null) ? true : (show !== I.lastShow);
      I.lastShow = show;

      // 4) Toolbar-Signatur IMMER prüfen (alle Modi)
      const sig = toolbarSignature();
      const sigChanged = !!(sig && sig !== I.lastToolbarSig);
      I.lastToolbarSig = sig || I.lastToolbarSig;

      // Toolbar änderte sich während Button versteckt war -> merken
      if (!show && sigChanged){
        I.pendingReposition = true;
      }

      // 5) Position IMMER nachführen (Ghost-Positioning)
      positionOverlayButton();
      if (show) positionPanel();

      // 6) Mode/Settings-Change -> Font (kann Layout beeinflussen)
      const modeOrSettingsChanged =
        (mode !== I.lastMode) || (settingsRaw !== I.lastSettingsRaw);

      if (modeOrSettingsChanged){
        applyFontLogic(mode);
        I.lastMode = mode;
        I.lastSettingsRaw = settingsRaw;
      }

      // 7) Burst-Kriterien: NICHT an show koppeln!
      const needBurst =
        showChanged || sigChanged || modeOrSettingsChanged || I.pendingReposition;

      if (needBurst){
        I.pendingReposition = false;
        burstRepositionThrottled(); // nutzt dein 120ms Throttle + scheduleRepositionBurst()
      }

      // 8) Slider sync + Panel nachziehen
      syncSliderToCurrent();
      if (show) positionPanel();

      // 9) Events nur einmal verdrahten
      wireOnce();

    } finally {
      I.ticking = false;
    }
  });
}




  // Beobachter: Toolbar/DOM kommt manchmal später (Nightly)
  try{
    const mo = new MutationObserver(() => tick());
    mo.observe(ROOT_DOC.documentElement, { childList:true, subtree:true, attributes:true });;
  }catch(e){}

  try{
    const mo2 = new MutationObserver(() => tick());
    mo2.observe(CONTENT_DOC.documentElement, { childList:true, subtree:true, attributes:true });
  }catch(e){}

  ROOT_WIN.addEventListener("storage", function(e){
    if (!e) return;
    if (e.key === SETTINGS_KEY || e.key === FONT_KEY) tick();
  });

  tick();
  ROOT_WIN.setInterval(() => { if (I.__alive) tick(); }, 350);

})();
@end

-->















# Tafelmodus

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
