<!--
version:  0.0.3
language: de
comment: LiaScript – Presentation: volle Breite + Schriftgrößen-Boost + A-Slider (Button nur in presentation)
author: Martin Lommatzsch


@style
:root{
  /* seitlicher Sicherheitsabstand im Presentation-Modus */
  --pres-side-gap: 12px;

  /* wird per JS gesetzt (18/24/32px) oder manuell per Slider */
  --lia-pres-font: unset;
}

/* =========================================================
   1) Präsentation: wirklich volle Breite (NUR presentation!)
      Slides: KEINE Breiten-Overrides (sonst Folienfenster kaputt)
   ========================================================= */
html[data-lia-mode="presentation"] body{
  margin: 0 !important;
}

/* NUR main anfassen, keine Slides-Wrapper, keine Panels */
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

  // =========================
  // Root/Content (iframe-safe)
  // =========================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT_WIN = getRootWindow();
  const ROOT_DOC = ROOT_WIN.document;

  const CONTENT_WIN = window;
  const CONTENT_DOC = document;

  // =========================
  // Per-Dokument Instance Guard
  // =========================
  const REGKEY = "__LIA_TAFELMODE_REG_V2__";
  ROOT_WIN[REGKEY] = ROOT_WIN[REGKEY] || { instances: {} };
  const REG = ROOT_WIN[REGKEY];

  const DOC_ID =
    (CONTENT_DOC.baseURI || CONTENT_WIN.location.href || "") +
    "::" +
    (CONTENT_DOC.title || "");

  if (REG.instances[DOC_ID]?.__alive) return;

  const I = REG.instances[DOC_ID] = {
    __alive: true,
    fontPanelOpen: false,
    ticking: false,
    lastMode: null,
    lastRaw: null
  };

  // =========================
  // Constants / Keys
  // =========================
  const SETTINGS_KEY = "settings";
  const FONT_KEY     = "__lia_tafel_font_px_v1__"; // persistierter Slider-Wert (px)

  const BTN_ID   = "lia-tafel-font-btn";
  const PANEL_ID = "lia-tafel-font-panel";
  const RANGE_ID = "lia-tafel-font-range";

  // =========================
  // Helpers
  // =========================
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

  function setVar(doc, k, v){
    try { doc.documentElement.style.setProperty(k, v); } catch(e){}
  }

  function applyModeAttr(mode){
    try { CONTENT_DOC.documentElement.dataset.liaMode = mode; } catch(e){}
    try { ROOT_DOC.documentElement.dataset.liaMode = mode; } catch(e){}
  }

  function ensureStyle(doc, id, css){
    try{
      if (doc.getElementById(id)) return;
      const st = doc.createElement("style");
      st.id = id;
      st.textContent = css;
      (doc.head || doc.documentElement).appendChild(st);
    }catch(e){}
  }

  // =========================
  // Accent (damit Buttonfarbe zum Theme passt)
  // =========================
  function firstNonTransparentBg(el){
    let n = el;
    for (let i=0; i<12 && n; i++){
      const bg = ROOT_WIN.getComputedStyle(n).backgroundColor;
      if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") return bg;
      n = n.parentElement;
    }
    return null;
  }

  function parseRGB(str){
    const m = (str || "").match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
    if (!m) return null;
    return { r:+m[1], g:+m[2], b:+m[3] };
  }
  function luminance(rgb){
    const r = rgb.r/255, g = rgb.g/255, b = rgb.b/255;
    return 0.2126*r + 0.7152*g + 0.0722*b;
  }

  function adaptAccentVars(){
    const rootHeader =
      ROOT_DOC.querySelector("header#lia-toolbar-nav") ||
      ROOT_DOC.querySelector("#lia-toolbar-nav") ||
      ROOT_DOC.querySelector("header.lia-header");

    const bgStr =
      (rootHeader && firstNonTransparentBg(rootHeader)) ||
      (ROOT_DOC.body && ROOT_WIN.getComputedStyle(ROOT_DOC.body).backgroundColor) ||
      "rgb(255,255,255)";

    const bg = parseRGB(bgStr) || {r:255,g:255,b:255};
    const isDark = luminance(bg) < 0.45;

    // Accent aus irgendeinem Header-Anchor/Button
    const anchor =
      (rootHeader && (rootHeader.querySelector("a") || rootHeader.querySelector("button"))) ||
      ROOT_DOC.querySelector("a") ||
      ROOT_DOC.querySelector("button");

    const accentStr = anchor ? ROOT_WIN.getComputedStyle(anchor).color : "rgb(11,95,255)";

    setVar(ROOT_DOC, "--lia-tafel-font-accent", accentStr);
    setVar(ROOT_DOC, "--lia-tafel-font-ui-bg",  isDark ? "rgba(20,20,22,.92)" : "rgba(255,255,255,.92)");
    setVar(ROOT_DOC, "--lia-tafel-font-ui-fg",  isDark ? "rgba(255,255,255,.92)" : "rgba(0,0,0,.88)");
    setVar(ROOT_DOC, "--lia-tafel-font-ui-bd",  isDark ? "rgba(255,255,255,.16)" : "rgba(0,0,0,.14)");
    setVar(ROOT_DOC, "--lia-tafel-font-shadow", isDark ? "0 18px 44px rgba(0,0,0,.55)" : "0 16px 42px rgba(0,0,0,.16)");
  }

  // =========================
  // Font logic (Auto 18/24/32 oder manuell aus localStorage)
  // =========================
  const PRES_PX = [18, 24, 32];

  function pxToStep0to2(px){
    if (px <= 17) return 0;
    if (px <= 19) return 1;
    return 2;
  }

  function getMainFontPx(){
    const main = CONTENT_DOC.querySelector("main") || CONTENT_DOC.documentElement;
    const fs = parseFloat(CONTENT_WIN.getComputedStyle(main).fontSize || "16");
    return isNaN(fs) ? 16 : fs;
  }

  function readManualPx(){
    try{
      const v = parseInt(localStorage.getItem(FONT_KEY) || "", 10);
      if (isFinite(v) && v >= 10 && v <= 80) return v;
    }catch(e){}
    return null;
  }

  function writeManualPx(px){
    try{
      if (px == null){
        localStorage.removeItem(FONT_KEY);
      }else{
        localStorage.setItem(FONT_KEY, String(px));
      }
    }catch(e){}
  }

  let sampling = false;

  function applyFontLogic(mode){
    const isPresLike = (mode === "presentation" || mode === "slides");

    if (!isPresLike){
      setVar(CONTENT_DOC, "--lia-pres-font", "unset");
      return;
    }

    if (sampling) return;
    sampling = true;

    // 1) Override raus, damit wir Basis messen können
    setVar(CONTENT_DOC, "--lia-pres-font", "unset");

    CONTENT_WIN.requestAnimationFrame(function(){
      CONTENT_WIN.requestAnimationFrame(function(){

        // 2) Manuell?
        const manual = readManualPx();
        if (manual != null){
          setVar(CONTENT_DOC, "--lia-pres-font", manual + "px");
          sampling = false;
          return;
        }

        // 3) Auto (18/24/32)
        const step = pxToStep0to2(getMainFontPx());
        setVar(CONTENT_DOC, "--lia-pres-font", PRES_PX[step] + "px");

        sampling = false;
      });
    });
  }

  // =========================
  // Root UI: Button + Panel (nur presentation sichtbar)
  // =========================
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

  function ensureFontUI(){
    ensureStyle(ROOT_DOC, "lia-tafel-font-style-root-v2", `
      :root{
        --lia-tafel-font-accent: rgb(11,95,255);
        --lia-tafel-font-ui-bg: rgba(255,255,255,.92);
        --lia-tafel-font-ui-fg: rgba(0,0,0,.88);
        --lia-tafel-font-ui-bd: rgba(0,0,0,.14);
        --lia-tafel-font-shadow: 0 16px 42px rgba(0,0,0,.16);
        --lia-tafel-font-z: 9999998;
      }

      /* Button: NUR im presentation-Modus sichtbar */
      #${BTN_ID}{
        display: none !important;
        position: relative !important;

        width: 40px !important;
        height: 40px !important;
        padding: 0 !important;
        margin: 0 8px 0 8px !important;

        align-items: center !important;
        justify-content: center !important;

        border: 0 !important;
        background: transparent !important;

        cursor: pointer !important;
        user-select: none !important;
        border-radius: 10px !important;
        line-height: 0 !important;
      }

      html[data-lia-mode="presentation"] #${BTN_ID}{
        display: inline-flex !important;
      }

      #${BTN_ID}:hover{
        background: color-mix(in srgb, var(--lia-tafel-font-accent) 10%, transparent) !important;
      }
      #${BTN_ID}:active{
        background: color-mix(in srgb, var(--lia-tafel-font-accent) 16%, transparent) !important;
      }

      /* Doppel-A: hinten groß in Themefarbe, leicht nach rechts; vorne klein in weiß */
      #${BTN_ID} .A-wrap{
        position: relative !important;
        width: 22px !important;
        height: 22px !important;
        display: block !important;
      }

      #${BTN_ID} .A-big{
        position: absolute !important;
        left: 4px !important;     /* leicht nach rechts */
        top: -7px !important;     /* optisch zentrieren */
        font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
        font-weight: 950 !important;
        font-size: 28px !important;
        color: var(--lia-tafel-font-accent) !important;
        opacity: .85 !important;
        line-height: 1 !important;
        pointer-events: none !important;
      }

      #${BTN_ID} .A-small{
        position: absolute !important;
        left: 0px !important;
        top: -1px !important;
        font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
        font-weight: 950 !important;
        font-size: 20px !important;
        color: #fff !important;
        line-height: 1 !important;
        pointer-events: none !important;

        /* damit weiß auch auf hellem Header sichtbar bleibt */
        text-shadow:
          0 1px 1px rgba(0,0,0,.35),
          0 0 2px rgba(0,0,0,.35);
      }

      /* Panel */
      #${PANEL_ID}{
        position: fixed !important;
        z-index: var(--lia-tafel-font-z) !important;

        width: 220px !important;
        display: none !important;

        border-radius: 18px !important;
        border: 1px solid var(--lia-tafel-font-ui-bd) !important;
        background: var(--lia-tafel-font-ui-bg) !important;
        box-shadow: var(--lia-tafel-font-shadow) !important;
        overflow: hidden !important;
        backdrop-filter: blur(6px);
      }

      body.lia-tafel-font-open #${PANEL_ID}{
        display: block !important;
      }

      #${PANEL_ID} .body{
        padding: 12px !important;
        display: grid !important;
        gap: 10px !important;
      }

      #${RANGE_ID}{
        width: 100% !important;
      }

      /* Focus neutralisieren */
      #${BTN_ID}:focus,
      #${BTN_ID}:focus-visible{
        outline: none !important;
        box-shadow: none !important;
      }
    `);

    // Button
    let btn = ROOT_DOC.getElementById(BTN_ID);
    if (!btn){
      btn = ROOT_DOC.createElement("button");
      btn.id = BTN_ID;
      btn.type = "button";
      btn.setAttribute("aria-label","Schriftgröße");
      btn.innerHTML = `
        <span class="A-wrap" aria-hidden="true">
          <span class="A-big">A</span>
          <span class="A-small">A</span>
        </span>
      `;
    }

    // Panel (nur Slider, keine px-Anzeige)
    let panel = ROOT_DOC.getElementById(PANEL_ID);
    if (!panel){
      panel = ROOT_DOC.createElement("div");
      panel.id = PANEL_ID;
      panel.innerHTML = `
        <div class="body">
          <input id="${RANGE_ID}" type="range" min="14" max="48" step="1" value="24" />
        </div>
      `;
      ROOT_DOC.body.appendChild(panel);
    }

    // Docking + Reihenfolge: TOC -> A -> Textmarker
    const left = findHeaderLeft();
    if (left){
      const toc = findTOCButtonInLeft(left);
      const marker = ROOT_DOC.getElementById("lia-hl-btn"); // Textmarker-Button (falls vorhanden)

      // 1) A direkt nach TOC (so weit links wie möglich, ohne TOC zu überfahren)
      if (toc && toc.parentNode === left){
        if (btn.parentNode !== left || btn.previousSibling !== toc){
          toc.insertAdjacentElement("afterend", btn);
        }
      } else {
        // Fallback: ganz nach vorn in left
        if (btn.parentNode !== left){
          left.insertAdjacentElement("afterbegin", btn);
        } else {
          // wenn er in left ist, aber nicht vorne: nach vorne ziehen
          if (left.firstElementChild !== btn){
            left.insertAdjacentElement("afterbegin", btn);
          }
        }
      }

      // 2) Textmarker (falls da) muss HINTER A sitzen, damit es nicht kollidiert
      if (marker){
        if (marker.parentNode !== left){
          // Marker in left ziehen (falls sein Script ihn anderswo hingehängt hat)
          btn.insertAdjacentElement("afterend", marker);
        } else {
          // Marker steht links von A? -> hinter A schieben
          const pos = btn.compareDocumentPosition(marker);
          const markerIsBeforeBtn = !!(pos & Node.DOCUMENT_POSITION_PRECEDING);
          if (markerIsBeforeBtn){
            btn.insertAdjacentElement("afterend", marker);
          } else {
            // Wenn Marker zwar nach A ist, aber nicht direkt dahinter: optional direkt dahinter positionieren
            if (marker.previousSibling !== btn){
              btn.insertAdjacentElement("afterend", marker);
            }
          }
        }
      }
    } else {
      if (!btn.parentNode) ROOT_DOC.body.appendChild(btn);
    }

    // Wire events once
    if (!btn.__liaTafelFontWired){
      btn.__liaTafelFontWired = true;

      btn.addEventListener("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        I.fontPanelOpen = !I.fontPanelOpen;
        applyFontPanelUI();
      });

      // Click-outside closes
      ROOT_DOC.addEventListener("pointerdown", function(e){
        if (!I.fontPanelOpen) return;
        const p = ROOT_DOC.getElementById(PANEL_ID);
        const b = ROOT_DOC.getElementById(BTN_ID);
        if (!p || !b) return;
        if (p.contains(e.target) || b.contains(e.target)) return;
        I.fontPanelOpen = false;
        applyFontPanelUI();
      }, true);

      // ESC closes
      ROOT_DOC.addEventListener("keydown", function(e){
        if (e.key === "Escape" && I.fontPanelOpen){
          I.fontPanelOpen = false;
          applyFontPanelUI();
        }
      }, true);
    }

    // Slider wire
    const range = ROOT_DOC.getElementById(RANGE_ID);
    if (range && !range.__liaTafelFontWired){
      range.__liaTafelFontWired = true;

      range.addEventListener("input", function(){
        const v = parseInt(range.value, 10);
        if (!isFinite(v)) return;

        writeManualPx(v);
        setVar(CONTENT_DOC, "--lia-pres-font", v + "px");
      });
    }
  }

  // =========================
  // Panel positioning (Viewport clamp)
  // =========================
  function clamp(v, a, b){ return Math.max(a, Math.min(b, v)); }

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
    const h = panel.offsetHeight || 60;

    panel.style.display = prevDisplay;
    panel.style.visibility = prevVis;
    panel.style.left = prevLeft;
    panel.style.top  = prevTop;

    return { w, h };
  }

  function positionFontPanel(){
    const btn = ROOT_DOC.getElementById(BTN_ID);
    const panel = ROOT_DOC.getElementById(PANEL_ID);
    if (!btn || !panel) return;
    if (!I.fontPanelOpen) return;

    const gap = 10;
    const pad = 8;

    const r = btn.getBoundingClientRect();
    const vp = getViewport();
    const sz = measurePanel(panel);

    let left = r.left;
    let top  = r.bottom + gap;

    left = clamp(left, pad, vp.w - sz.w - pad);

    if (top + sz.h + pad > vp.h){
      top = r.top - gap - sz.h;
    }

    top = clamp(top, pad, vp.h - sz.h - pad);

    left = left + vp.ox;
    top  = top  + vp.oy;

    panel.style.left = Math.round(left) + "px";
    panel.style.top  = Math.round(top) + "px";
  }

  function syncSliderToCurrentFont(){
    const range = ROOT_DOC.getElementById(RANGE_ID);
    if (!range) return;

    const manual = readManualPx();
    if (manual != null){
      range.value = String(clamp(manual, 14, 48));
      return;
    }

    let cur = null;
    try{
      const v = (CONTENT_WIN.getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--lia-pres-font") || "").trim();
      if (v && v !== "unset" && v.endsWith("px")){
        const n = parseInt(v, 10);
        if (isFinite(n)) cur = n;
      }
    }catch(e){}

    if (cur == null) cur = 24;
    cur = clamp(cur, 14, 48);
    range.value = String(cur);
  }

  function applyFontPanelUI(){
    try{
      ROOT_DOC.body.classList.toggle("lia-tafel-font-open", !!I.fontPanelOpen);
    }catch(e){}

    if (I.fontPanelOpen){
      syncSliderToCurrentFont();
      ROOT_WIN.requestAnimationFrame(function(){ positionFontPanel(); });
    }
  }

  // =========================
  // Tick / observers
  // =========================
  function tick(){
    if (I.ticking) return;
    I.ticking = true;

    ROOT_WIN.requestAnimationFrame(function(){
      try{
        const raw  = safeGetSettingsRaw();
        const mode = detectMode();

        applyModeAttr(mode);
        adaptAccentVars();
        ensureFontUI();

        // Button nur in presentation: wenn Modus wechselt -> Panel schließen
        if (mode !== "presentation" && I.fontPanelOpen){
          I.fontPanelOpen = false;
          applyFontPanelUI();
        }

        // Font logic (auto/manuell) nur bei Change
        if (raw !== I.lastRaw || mode !== I.lastMode){
          applyFontLogic(mode);
          I.lastRaw  = raw;
          I.lastMode = mode;
        }

        if (I.fontPanelOpen) positionFontPanel();

      } finally {
        I.ticking = false;
      }
    });
  }

  // Root DOM changes (Header wird manchmal neu gebaut)
  try{
    const mo = new MutationObserver(function(){ tick(); });
    mo.observe(ROOT_DOC.body, { childList:true, subtree:true });
  }catch(e){}

  // Theme/Mode toggles
  try{
    const mo2 = new MutationObserver(function(){ tick(); });
    mo2.observe(ROOT_DOC.documentElement, { attributes:true, attributeFilter:["class","data-theme","data-mode","data-view","data-layout"] });
    mo2.observe(ROOT_DOC.body,           { attributes:true, attributeFilter:["class","data-theme","data-mode","data-view","data-layout"] });
  }catch(e){}

  // Window changes
  ROOT_WIN.addEventListener("resize", function(){ tick(); });
  if (ROOT_WIN.visualViewport){
    ROOT_WIN.visualViewport.addEventListener("resize", function(){ tick(); });
    ROOT_WIN.visualViewport.addEventListener("scroll", function(){ tick(); });
  }

  // Storage changes (wenn Lia Mode wechselt)
  ROOT_WIN.addEventListener("storage", function(e){
    if (!e || e.key === SETTINGS_KEY) tick();
  });

  // Periodic safety tick
  tick();
  ROOT_WIN.setInterval(tick, 350);

})();
@end

-->







# Tafelmodus


Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.


