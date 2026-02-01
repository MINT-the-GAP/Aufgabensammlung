<!--
version:  0.0.2
language: de
comment: LiaScript – Tafelmodus (import-sicher): Presentation volle Breite + Schriftgrößen-Boost + Schriftgrößen-Panel (A) | textmarker-kompatibel
author: Martin Lommatzsch


@style
:root{
  /* seitlicher Sicherheitsabstand im Presentation-Modus */
  --lia-tflfont-side-gap: 12px;

  /* wird per JS gesetzt: "unset" oder px (z.B. 24px) */
  --lia-tflfont-pres-font: unset;

  /* Theme-Akzentfarbe (per JS aus LiaTheme ermittelt) */
  --lia-tflfont-accent: rgb(11,95,255);

  /* Slider-Range */
  --lia-tflfont-min: 14;
  --lia-tflfont-max: 48;
}

/* (CSS wird zur Sicherheit zusätzlich per JS in den Content injiziert)
   -> diese @style dient als Fallback + Dokumentation */
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
  // Root/Content Resolve (iframe-safe, import-safe)
  // =========================================================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT_WIN = getRootWindow();
  const ROOT_DOC = ROOT_WIN.document;

  function hasMain(doc){
    try { return !!(doc && doc.querySelector && doc.querySelector("main")); } catch(e){ return false; }
  }

  function tryGetDoc(win){
    try { return win && win.document ? win.document : null; } catch(e){ return null; }
  }

  // Liefert: { primaryWin, primaryDoc, docs[] }
  function resolveContentTargets(){
    const candidates = [];
    const seen = new Set();

    function addDoc(doc){
      if (!doc || seen.has(doc)) return;
      seen.add(doc);
      candidates.push(doc);
    }

    // 1) aktuelles Fenster
    const curDoc = tryGetDoc(window);
    if (hasMain(curDoc)) addDoc(curDoc);

    // 2) alle iframes im Root (gleiches Origin)
    try{
      const iframes = Array.from(ROOT_DOC.querySelectorAll("iframe"));
      for (const fr of iframes){
        try{
          const d = fr.contentWindow && fr.contentWindow.document;
          if (hasMain(d)) addDoc(d);
        }catch(e){}
      }
    }catch(e){}

    // Fallback: wenigstens Root
    if (!candidates.length) addDoc(ROOT_DOC);

    // Primary = erstes Doc mit main (sonst Root)
    const primaryDoc = candidates.find(d => hasMain(d)) || ROOT_DOC;
    const primaryWin = (function(){
      // finde das window, das zu primaryDoc gehört
      if (primaryDoc === ROOT_DOC) return ROOT_WIN;
      if (curDoc === primaryDoc) return window;
      try{
        const iframes = Array.from(ROOT_DOC.querySelectorAll("iframe"));
        for (const fr of iframes){
          try{
            if (fr.contentWindow && fr.contentWindow.document === primaryDoc) return fr.contentWindow;
          }catch(e){}
        }
      }catch(e){}
      return ROOT_WIN;
    })();

    return { primaryWin, primaryDoc, docs: candidates };
  }

  // =========================================================
  // Per-Root Instance (mehrfach importiert => keine Duplikate)
  // =========================================================
  const REGKEY = "__LIA_TFLFONT_REG_V2__";
  ROOT_WIN[REGKEY] = ROOT_WIN[REGKEY] || { alive: false, inst: null };
  if (ROOT_WIN[REGKEY].alive) return;
  ROOT_WIN[REGKEY].alive = true;

  const I = ROOT_WIN[REGKEY].inst = {
    ticking: false,
    lastRaw: null,
    lastMode: null,
    lastDockShift: 0
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
  const FONT_KEY     = "lia-tflfont-font-px-v2"; // Slider override (px)

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
    const acc =
      getLiaAccentColor(ROOT_DOC) ||
      "rgb(11,95,255)";
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
      ensureStyle(d, "lia-tflfont-content-style-v2", css);
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

  // Extra: wenn Slider gesetzt, zusätzlich inline auf <main> (damit “Slider tut nix” nicht mehr vorkommt)
  function setMainInlineFont(pxOrNull, docs){
    for (const d of docs){
      try{
        const m = d.querySelector("main");
        if (!m) continue;
        if (pxOrNull == null) {
          m.style.fontSize = "";
        } else {
          m.style.fontSize = (pxOrNull + "px");
        }
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

    // messen ohne Override (2 RAF)
    const targets = resolveContentTargets();
    const pw = targets.primaryWin || ROOT_WIN;
    pw.requestAnimationFrame(function(){
      pw.requestAnimationFrame(function(){
        const step = pxToStep0to2(getMainFontPx(targets.primaryDoc));
        const v = AUTO_PX[step];
        setPresFontPxForDocs(v, docs);
        setMainInlineFont(null, docs); // auto = nur via CSS Var
        sampling = false;
      });
    });
  }

  // =========================================================
  // UI (Root): A-Button + Panel (nur Presentation)
  // =========================================================
  const SLOT_ID   = "lia-tflfont-slot-v2";
  const BTN_ID    = "lia-tflfont-btn-v2";
  const PANEL_ID  = "lia-tflfont-panel-v2";
  const SLIDER_ID = "lia-tflfont-slider-v2";
  const TITLE_CLS = "lia-tflfont-title-v2";

  ensureStyle(ROOT_DOC, "lia-tflfont-ui-style-root-v2", `
    #${SLOT_ID}{
      display: inline-flex !important;
      align-items: center !important;
      flex: 0 0 auto !important;
      margin-left: 12px !important; /* Basisabstand (wird ggf. per JS erhöht) */
    }

    /* Sichtbarkeit: nur Presentation */
    body.lia-tflfont-pres #${BTN_ID}{ display: inline-flex !important; }
    body:not(.lia-tflfont-pres) #${BTN_ID}{ display: none !important; }
    body:not(.lia-tflfont-pres) #${PANEL_ID}{ display: none !important; }

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

      /* sitzt in Kursdateien oft leicht zu hoch -> etwas runter */
      transform: translateY(2px) !important;
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

    /* Doppel-A: groß weiß (leicht nach rechts), klein Akzent (leicht nach links) */
    #${BTN_ID} .A-small,
    #${BTN_ID} .A-big{
      position: absolute !important;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
      font-weight: 950 !important;
      line-height: 1 !important;
      pointer-events: none !important;
      user-select: none !important;
    }

    /* klein: Akzent */
    #${BTN_ID} .A-small{
      left: 1px !important;
      top: -3px !important;
      font-size: 24px !important;
      color: var(--lia-tflfont-accent) !important;
      opacity: .92 !important;
      text-shadow: 0 1px 2px rgba(0,0,0,.25) !important;
    }

    /* groß: weiß, weiter rechts (größere Distanz) */
    #${BTN_ID} .A-big{
      left: 8px !important;
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

      width: 240px !important;
      padding: 10px 12px !important;

      display: none !important;

      border-radius: 14px !important;
      border: 1px solid color-mix(in srgb, currentColor 18%, transparent) !important;
      background: color-mix(in srgb, rgba(0, 0, 0, 0.62) 62%, transparent) !important;
      backdrop-filter: blur(8px);
      box-shadow: 0 16px 42px rgba(0,0,0,.18) !important;
    }

    body.lia-tflfont-panel-open #${PANEL_ID}{
      display: block !important;
    }

    #${PANEL_ID} .${TITLE_CLS}{
      font-weight: 700 !important;
      font-size: 0.95rem !important;
      margin: 0 0 8px 0 !important;
      line-height: 1.2 !important;
    }

    #${PANEL_ID} input[type="range"]{
      width: 100% !important;
      margin: 0 !important;
      accent-color: var(--lia-tflfont-accent) !important;
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

  function findTOCButton(left){
    if (!left) return null;
    const btns = Array.from(left.querySelectorAll("button,[role='button'],a"));
    const pick = btns.find(b=>{
      const t = ((b.getAttribute("aria-label")||b.getAttribute("title")||b.textContent||"")+"").toLowerCase();
      return t.includes("inhaltsverzeichnis") || t.includes("table of contents") || t.includes("contents");
    });
    return pick || btns[0] || null;
  }

  // Textmarker-Button heuristisch (ID oder Label)
  function findMarkerButton(){
    const byId =
      ROOT_DOC.getElementById("lia-hl-btn") ||
      ROOT_DOC.getElementById("lia-textmarker-btn") ||
      ROOT_DOC.getElementById("lia-marker-btn");
    if (byId) return byId;

    const candidates = Array.from(ROOT_DOC.querySelectorAll("button,[role='button'],a"));
    return candidates.find(b=>{
      const t = ((b.getAttribute("aria-label")||b.getAttribute("title")||b.textContent||"")+"").toLowerCase();
      return t.includes("textmarker") || t.includes("marker") || t.includes("markieren") || t.includes("highlight");
    }) || null;
  }

  function ensureUI(){
    // Panel am Body
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

    // Slot + Button
    let slot = ROOT_DOC.getElementById(SLOT_ID);
    if (!slot){
      slot = ROOT_DOC.createElement("span");
      slot.id = SLOT_ID;
      slot.setAttribute("aria-label", "Tafelmodus Schriftgröße");
    }

    let btn = ROOT_DOC.getElementById(BTN_ID);
    if (!btn){
      btn = ROOT_DOC.createElement("button");
      btn.id = BTN_ID;
      btn.type = "button";
      btn.setAttribute("aria-label","Schriftgröße");
      btn.innerHTML = `<span class="A-small">A</span><span class="A-big">A</span>`;
    }

    if (btn.parentNode !== slot) slot.appendChild(btn);

    const left = findHeaderLeft();
    if (!left) return;

    // Anchor: lieber nach Textmarker (falls vorhanden), sonst nach TOC
    const marker = findMarkerButton();
    const toc = findTOCButton(left);
    const anchor = (marker && left.contains(marker)) ? marker : toc;

    if (slot.parentNode !== left){
      if (anchor && anchor.parentNode === left){
        anchor.insertAdjacentElement("afterend", slot);
      }else{
        left.insertAdjacentElement("afterbegin", slot);
      }
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
  // Panel positioning (Viewport clamp)
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

    const w = panel.offsetWidth || 240;
    const h = panel.offsetHeight || 70;

    panel.style.display = prevDisplay;
    panel.style.visibility = prevVis;
    panel.style.left = prevLeft;
    panel.style.top  = prevTop;

    return { w, h };
  }

  function positionPanel(){
    const btn = ROOT_DOC.getElementById(BTN_ID);
    const panel = ROOT_DOC.getElementById(PANEL_ID);
    if (!btn || !panel) return;
    if (!ROOT_DOC.body.classList.contains("lia-tflfont-panel-open")) return;

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
  // Collision avoidance (TOC / Textmarker / Nightly nav)
  // =========================================================
  function rectOverlap(a,b,pad){
    if (!a || !b) return false;
    const p = pad || 0;
    return !(a.right + p < b.left || a.left - p > b.right || a.bottom + p < b.top || a.top - p > b.bottom);
  }

  function nudgeSlotIfNeeded(){
    const left = findHeaderLeft();
    const slot = ROOT_DOC.getElementById(SLOT_ID);
    const btn  = ROOT_DOC.getElementById(BTN_ID);
    if (!left || !slot || !btn) return;

    // Basis
    slot.style.marginLeft = "12px";

    // in Nightly-Navigation ist es oft enger -> bisschen mehr Luft
    const navLike = ROOT_DOC.body.classList.contains("lia-hl-navstack") || ROOT_DOC.body.classList.contains("lia-hl-nav") || false;
    if (navLike) slot.style.marginLeft = "16px";

    const toc = findTOCButton(left);
    const marker = findMarkerButton();

    // 1) TOC-Kollision
    try{
      if (toc){
        const tr = toc.getBoundingClientRect();
        const br = btn.getBoundingClientRect();
        if (rectOverlap(tr, br, 2) || br.left < tr.right + 8){
          const need = (tr.right + 10) - br.left;
          const cur = parseInt(slot.style.marginLeft || "0", 10) || 0;
          slot.style.marginLeft = (cur + Math.max(0, Math.ceil(need))) + "px";
        }
      }
    }catch(e){}

    // 2) Marker-Kollision (oder zu wenig Abstand)
    try{
      if (marker){
        const mr = marker.getBoundingClientRect();
        const br = btn.getBoundingClientRect();
        if (rectOverlap(mr, br, 2) || br.left < mr.right + 8){
          const need = (mr.right + 10) - br.left;
          const cur = parseInt(slot.style.marginLeft || "0", 10) || 0;
          slot.style.marginLeft = (cur + Math.max(0, Math.ceil(need))) + "px";
        }
      }
    }catch(e){}
  }

  // =========================================================
  // Wiring (once)
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

      // outside click closes
      ROOT_DOC.addEventListener("click", (e)=>{
        if (!ROOT_DOC.body.classList.contains("lia-tflfont-panel-open")) return;
        const t = e.target;
        if (t && t.closest && (t.closest("#"+PANEL_ID) || t.closest("#"+BTN_ID))) return;
        ROOT_DOC.body.classList.remove("lia-tflfont-panel-open");
      }, true);

      ROOT_DOC.addEventListener("keydown", (e)=>{
        if (e.key === "Escape"){
          ROOT_DOC.body.classList.remove("lia-tflfont-panel-open");
        }
      });

      ROOT_WIN.addEventListener("resize", positionPanel);
      if (ROOT_WIN.visualViewport){
        ROOT_WIN.visualViewport.addEventListener("resize", positionPanel);
        ROOT_WIN.visualViewport.addEventListener("scroll", positionPanel);
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

        // sofort anwenden (wichtig für Kursdatei)
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
  // Tick (throttled) – ensure-Pattern (damit Import immer greift)
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

        // 1) CSS sicherstellen + dataset (für presentation/slides selectors)
        ensureContentCSS(docs);
        applyModeAttrToDocs(mode, docs);

        // 2) Theme-Farbe
        syncAccent(docs);

        // 3) UI sicher anheften + visibility + wiring
        ensureUI();
        setPresentationOnlyVisibility(mode);
        wireOnce();

        // 4) Font Logik bei Modus/Settings Wechsel
        if (raw !== I.lastRaw || mode !== I.lastMode){
          applyFontLogic(mode, docs);
          I.lastRaw  = raw;
          I.lastMode = mode;
        }

        // 5) Slider sync + Panel pos + Kollisionsvermeidung
        syncSliderToCurrentFont(docs);
        positionPanel();
        nudgeSlotIfNeeded();

      } finally {
        I.ticking = false;
      }
    });
  }

  // Mutation observers (Toolbar / main kommt oft verspätet)
  try{
    const mo = new MutationObserver(() => tick());
    mo.observe(ROOT_DOC.documentElement, { childList:true, subtree:true });
  }catch(e){}

  // Storage (anderes Doc/Frame)
  ROOT_WIN.addEventListener("storage", function(e){
    if (!e) return;
    if (e.key === SETTINGS_KEY || e.key === FONT_KEY) tick();
  });

  // Periodisch
  tick();
  ROOT_WIN.setInterval(() => tick(), 350);

})();
@end
-->











# Tafelmodus


Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.


