<!--
comment: Lia Textmarker (import-sicher) — Crash-Fix (keine Observer-Feedback-Loops) + Panel immer im Viewport
author: Martin Lommatzsch

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
  // Per-Dokument Instance (Import mehrfach => keine Kollision)
  // =========================
  const REGKEY = "__LIA_TEXTMARKER_REG_V4__";
  ROOT_WIN[REGKEY] = ROOT_WIN[REGKEY] || { instances: {} };
  const REG = ROOT_WIN[REGKEY];

  const DOC_ID =
    (CONTENT_DOC.baseURI || CONTENT_WIN.location.href || "") +
    "::" +
    (CONTENT_DOC.title || "");

  if (REG.instances[DOC_ID]?.__alive) return;

  const I = REG.instances[DOC_ID] = {
    __alive: true,
    state: { active:false, panelOpen:false, tool:"mark", color:"yellow" },
    HL: [],
    nextId: 1,
    moDock: null,
    moTheme: null,
    ticking: false
  };

  // =========================
  // CSS Injection (Content + Root)
  // =========================
  function ensureStyle(doc, id, css){
    if (doc.getElementById(id)) return;
    const st = doc.createElement("style");
    st.id = id;
    st.textContent = css;
    doc.head.appendChild(st);
  }

  ensureStyle(CONTENT_DOC, "lia-hl-style-content-v4", `
    :root{
      --hl-yellow: rgba(255, 238,  88, 0.55);
      --hl-green:  rgba(144, 238, 144, 0.45);
      --hl-blue:   rgba(173, 216, 230, 0.45);
      --hl-pink:   rgba(255, 182, 193, 0.45);
      --hl-orange: rgba(255, 200, 120, 0.55);
      --hl-red:    rgba(255,  80,  80, 0.40);

      --hl-ui-bg: rgba(255,255,255,.92);
      --hl-ui-fg: rgba(0,0,0,.88);
      --hl-ui-border: rgba(0,0,0,.14);
      --hl-ui-muted: rgba(0,0,0,.62);
      --hl-ui-shadow: 0 16px 42px rgba(0,0,0,.16);

      --hl-accent: rgb(11,95,255);
      --hl-z: 9999999;
    }

    #lia-hl-overlay{
      position: fixed !important;
      inset: 0 !important;
      z-index: calc(var(--hl-z) - 1) !important;
      pointer-events: none !important;
    }

    .lia-hl-rect{
      position: absolute !important;
      border-radius: 6px !important;
      box-shadow: 0 1px 0 rgba(0,0,0,.08) inset;
      mix-blend-mode: multiply;

      pointer-events: auto !important;
      cursor: pointer;
    }

    .lia-hl-rect[data-hl="yellow"]{ background: var(--hl-yellow); }
    .lia-hl-rect[data-hl="green"] { background: var(--hl-green);  }
    .lia-hl-rect[data-hl="blue"]  { background: var(--hl-blue);   }
    .lia-hl-rect[data-hl="pink"]  { background: var(--hl-pink);   }
    .lia-hl-rect[data-hl="orange"]{ background: var(--hl-orange); }
    .lia-hl-rect[data-hl="red"]   { background: var(--hl-red);    }
  `);

  ensureStyle(ROOT_DOC, "lia-hl-style-root-v4", `
    #lia-hl-btn{
      position: relative !important;
      width: 40px !important;
      height: 40px !important;
      padding: 0 !important;
      margin: 0 30px !important;

      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;

      border: 0 !important;
      background: transparent !important;
      color: var(--hl-accent) !important;

      cursor: pointer !important;
      user-select: none !important;
      border-radius: 10px !important;
    }

    #lia-hl-btn:hover{
      background: color-mix(in srgb, currentColor 10%, transparent) !important;
    }
    #lia-hl-btn:active{
      background: color-mix(in srgb, currentColor 16%, transparent) !important;
    }

    #lia-hl-btn .icon{ width:22px !important; height:22px !important; display:block !important; }
    #lia-hl-btn .dot{
      position: absolute !important;
      right: 6px !important;
      bottom: 6px !important;
      width: 10px !important;
      height: 10px !important;
      border-radius: 999px !important;
      border: 1px solid var(--hl-ui-border) !important;
      background: var(--hl-yellow) !important;
    }


    #lia-hl-panel{
      position: fixed !important;
      z-index: var(--hl-z) !important;

      width: 130px !important;
      display: none !important;

      border-radius: 18px !important;
      border: 1px solid var(--hl-ui-border) !important;
      background: var(--hl-ui-bg) !important;
      box-shadow: var(--hl-ui-shadow) !important;
      overflow: hidden !important;
      backdrop-filter: blur(6px);
    }


    /* Nightly: "Navigation"-Iconleiste (sehr kompakt / vertikal) */
    body.lia-hl-navstack #lia-hl-btn{
      margin: 0 !important;
      width: 32px !important;
      height: 32px !important;
      border-radius: 8px !important;
    }
    
    body.lia-hl-navstack #lia-hl-btn .icon{
      width: 18px !important;
      height: 18px !important;
    }
    
    body.lia-hl-navstack #lia-hl-btn .dot{
      right: 4px !important;
      bottom: 4px !important;
      width: 8px !important;
      height: 8px !important;
    }
    

    /* Focus-Ring komplett aus (Nightly setzt gern eigene Linien/Outlines) */
    #lia-hl-btn:focus,
    #lia-hl-btn:focus-visible{
      outline: none !important;
      box-shadow: none !important;
    }

    /* Active-State: NUR inset -> nichts kann nach links "durchstreichen" */
    body.lia-hl-active #lia-hl-btn{
      outline: none !important;
      box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--hl-ui-fg) 25%, transparent) !important;
    }

    /* Nav-Stack: ebenfalls nur inset, etwas feiner */
    body.lia-hl-navstack.lia-hl-active #lia-hl-btn{
      outline: none !important;
      box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--hl-ui-fg) 22%, transparent) !important;
    }


    /* Nightly-UI: manche Header-Buttons bekommen Linien via ::after/::before oder border-bottom.
       Das killt exakt diese "Strich"-Artefakte nur für unseren Button. */
    #lia-hl-btn,
    #lia-hl-btn *{
      text-decoration: none !important;
    }

    #lia-hl-btn::before,
    #lia-hl-btn::after{
      content: none !important;
      display: none !important;
    }

    #lia-hl-btn{
      border: 0 !important;
      border-bottom: 0 !important;
      box-shadow: none !important;   /* falls Nightly hier was drauflegt */
      outline: none !important;
    }

    /* auch Focus/Focus-visible komplett neutralisieren */
    #lia-hl-btn:focus,
    #lia-hl-btn:focus-visible{
      outline: none !important;
      box-shadow: none !important;
    }


    body.lia-hl-panel-open #lia-hl-panel{ display:block !important; }

    #lia-hl-panel .hdr{
      display:flex !important;
      align-items:center !important;
      justify-content:space-between !important;
      gap: 10px !important;
      padding: 10px 12px !important;
      border-bottom: 1px solid color-mix(in srgb, var(--hl-ui-border) 85%, transparent) !important;
    }

    #lia-hl-panel .title{
      font-weight: 700 !important;
      font-size: 13px !important;
      color: var(--hl-ui-fg) !important;
    }

    #lia-hl-panel .body{
      padding: 12px !important;
      display: grid !important;
      gap: 12px !important;
    }

    .hl-tools{
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 10px !important;
    }

    .hl-tool{
      border: 1px solid var(--hl-ui-border) !important;
      background: color-mix(in srgb, var(--hl-ui-fg) 5%, transparent) !important;
      color: var(--hl-ui-fg) !important;

      border-radius: 14px !important;
      padding: 10px 10px !important;
      cursor: pointer !important;
      font-size: 13px !important;

      display:flex !important;
      align-items:center !important;
      justify-content:center !important;

      user-select:none !important;
    }

    .hl-tool.active{
      background: color-mix(in srgb, var(--hl-ui-fg) 16%, transparent) !important;
      border-color: color-mix(in srgb, var(--hl-ui-fg) 22%, var(--hl-ui-border)) !important;
    }

    .hl-colors{
      display:flex !important;
      flex-wrap: wrap !important;
      gap: 10px !important;
    }

    .hl-swatch{
      width: 28px !important;
      height: 28px !important;
      border-radius: 999px !important;
      border: 2px solid var(--hl-ui-border) !important;
      cursor: pointer !important;
      box-shadow: 0 8px 16px color-mix(in srgb, var(--hl-ui-fg) 18%, transparent) !important;
    }

    .hl-swatch.active{
      outline: 3px solid color-mix(in srgb, var(--hl-ui-fg) 65%, transparent) !important;
      outline-offset: 2px !important;
    }

    .hl-clear{
      width: 100% !important;
      border: 1px solid color-mix(in srgb, rgba(200,0,0,.9) 25%, var(--hl-ui-border)) !important;
      background: rgba(200,0,0,.06) !important;
      border-radius: 14px !important;
      padding: 10px 10px !important;
      cursor: pointer !important;
      font-size: 12px !important;
      color: var(--hl-ui-fg) !important;
    }
  `);

  // =========================
  // Theme/Accent robust (OHNE Observer auf style!)
  // =========================
  function parseRGB(str){
    const m = (str || "").match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
    if (!m) return null;
    return { r:+m[1], g:+m[2], b:+m[3] };
  }
  function luminance(rgb){
    const r = rgb.r/255, g = rgb.g/255, b = rgb.b/255;
    return 0.2126*r + 0.7152*g + 0.0722*b;
  }
  function setVar(doc, k, v){ doc.documentElement.style.setProperty(k, v); }

  function firstNonTransparentBg(el){
    let n = el;
    for (let i=0; i<12 && n; i++){
      const bg = getComputedStyle(n).backgroundColor;
      if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") return bg;
      n = n.parentElement;
    }
    return null;
  }

  function adaptUIVars(){
    const rootHeader =
      ROOT_DOC.querySelector("header#lia-toolbar-nav") ||
      ROOT_DOC.querySelector("#lia-toolbar-nav") ||
      ROOT_DOC.querySelector("header.lia-header");

    const contentMain =
      CONTENT_DOC.querySelector("main") ||
      CONTENT_DOC.querySelector("[role='main']") ||
      CONTENT_DOC.body;

    const bgStr =
      (rootHeader && firstNonTransparentBg(rootHeader)) ||
      firstNonTransparentBg(contentMain) ||
      getComputedStyle(CONTENT_DOC.body).backgroundColor ||
      "rgb(255,255,255)";

    const bg = parseRGB(bgStr) || {r:255,g:255,b:255};
    const isDark = luminance(bg) < 0.45;

    const rootAnchor =
      (rootHeader && (rootHeader.querySelector("a") || rootHeader.querySelector("button"))) ||
      CONTENT_DOC.querySelector("main a") ||
      CONTENT_DOC.querySelector("a");

    const accentStr =
      rootAnchor ? getComputedStyle(rootAnchor).color : "rgb(11,95,255)";

    try { setVar(ROOT_DOC, "--hl-accent", accentStr); } catch(e){}
    try { setVar(CONTENT_DOC, "--hl-accent", accentStr); } catch(e){}

    const varsLight = {
      "--hl-ui-bg": "rgba(255,255,255,.92)",
      "--hl-ui-fg": "rgba(0,0,0,.88)",
      "--hl-ui-muted": "rgba(0,0,0,.62)",
      "--hl-ui-border": "rgba(0,0,0,.14)",
      "--hl-ui-shadow": "0 16px 42px rgba(0,0,0,.16)"
    };
    const varsDark = {
      "--hl-ui-bg": "rgba(20,20,22,.92)",
      "--hl-ui-fg": "rgba(255,255,255,.92)",
      "--hl-ui-muted": "rgba(255,255,255,.68)",
      "--hl-ui-border": "rgba(255,255,255,.16)",
      "--hl-ui-shadow": "0 18px 44px rgba(0,0,0,.55)"
    };

    const vars = isDark ? varsDark : varsLight;
    for (const k in vars){
      try { setVar(ROOT_DOC, k, vars[k]); } catch(e){}
      try { setVar(CONTENT_DOC, k, vars[k]); } catch(e){}
    }
  }

  // =========================
  // Overlay + Rendering
  // =========================
  let overlay = CONTENT_DOC.getElementById("lia-hl-overlay");
  if (!overlay){
    overlay = CONTENT_DOC.createElement("div");
    overlay.id = "lia-hl-overlay";
    CONTENT_DOC.body.appendChild(overlay);
  }

  function currentScroll(){
    return { x:(CONTENT_WIN.scrollX||0), y:(CONTENT_WIN.scrollY||0) };
  }

  function render(){
    overlay.innerHTML = "";
    const sc = currentScroll();

    for (const item of I.HL){
      for (const r of item.rects){
        const el = CONTENT_DOC.createElement("div");
        el.className = "lia-hl-rect";
        el.setAttribute("data-hl", item.color);
        el.setAttribute("data-id", String(item.id));
        el.style.left   = `${Math.round(r.x - sc.x)}px`;
        el.style.top    = `${Math.round(r.y - sc.y)}px`;
        el.style.width  = `${Math.round(r.w)}px`;
        el.style.height = `${Math.round(r.h)}px`;
        overlay.appendChild(el);
      }
    }
  }

  CONTENT_WIN.addEventListener("scroll", render, { passive:true });
  CONTENT_WIN.addEventListener("resize", () => { adaptUIVars(); render(); });

  // =========================
  // Root UI: an TOC anheften
  // =========================
  function findHeaderLeft(){
    const header = ROOT_DOC.querySelector("header#lia-toolbar-nav") || ROOT_DOC.querySelector("#lia-toolbar-nav");
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

  function ensureRootButtonAndPanel(){
    let btn = ROOT_DOC.getElementById("lia-hl-btn");
    if (!btn){
      btn = ROOT_DOC.createElement("button");
      btn.id = "lia-hl-btn";
      btn.type = "button";
      btn.setAttribute("aria-label","Textmarker");
      btn.innerHTML = `
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0 0-3L16.5 4.5a2.1 2.1 0 0 0-3 0L3 15v5z"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <path d="M13.5 6.5l4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span class="dot" id="lia-hl-dot"></span>
      `;
    }

    let panel = ROOT_DOC.getElementById("lia-hl-panel");
    if (!panel){
      panel = ROOT_DOC.createElement("div");
      panel.id = "lia-hl-panel";
      panel.innerHTML = `
        <div class="hdr"><div class="title">Textmarker</div></div>
        <div class="body">
          <div class="hl-tools">
            <button class="hl-tool" id="hl-tool-mark" type="button">🖍️</button>
            <button class="hl-tool" id="hl-tool-erase" type="button">🧽</button>
          </div>
          <div>
            <div class="hl-hint" style="margin-bottom:8px;">Farbe</div>
            <div class="hl-colors" id="hl-colors"></div>
          </div>
          <button class="hl-clear" id="hl-clear" type="button">Alle Markierungen löschen</button>
        </div>
      `;
      ROOT_DOC.body.appendChild(panel);
    }

    const left = findHeaderLeft();
    if (left){
      if (btn.parentNode !== left){
        const anchor = findTOCButtonInLeft(left);
        if (anchor && anchor.parentNode === left) anchor.insertAdjacentElement("afterend", btn);
        else left.appendChild(btn);
      }
    } else {
      if (!btn.parentNode) ROOT_DOC.body.appendChild(btn);
    }
  }

  // =========================
  // Panel Position: SMART (Viewport Clamp + Above-Fallback)
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
    // Wenn display:none (geschlossen), kurz messbar machen
    const prevDisplay = panel.style.display;
    const prevVis = panel.style.visibility;
    const prevLeft = panel.style.left;
    const prevTop = panel.style.top;

    panel.style.display = "block";
    panel.style.visibility = "hidden";
    panel.style.left = "-9999px";
    panel.style.top  = "-9999px";

    const w = panel.offsetWidth || 130;
    const h = panel.offsetHeight || 180;

    panel.style.display = prevDisplay;
    panel.style.visibility = prevVis;
    panel.style.left = prevLeft;
    panel.style.top  = prevTop;

    return { w, h };
  }

  function positionPanelSmart(){
    const btn = ROOT_DOC.getElementById("lia-hl-btn");
    const panel = ROOT_DOC.getElementById("lia-hl-panel");
    if (!btn || !panel) return;
    if (!(I.state.active && I.state.panelOpen)) return;

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

    panel.style.left = `${Math.round(left)}px`;
    panel.style.top  = `${Math.round(top)}px`;
  }

  // =========================
  // UI logic
  // =========================
  function ensureSwatchesOnce(){
    const colorsEl = ROOT_DOC.getElementById("hl-colors");
    if (!colorsEl || colorsEl.childElementCount) return;

    const keys = ["yellow","green","blue","pink","orange","red"];
    const cssMap = {
      yellow: getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-yellow").trim(),
      green:  getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-green").trim(),
      blue:   getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-blue").trim(),
      pink:   getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-pink").trim(),
      orange: getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-orange").trim(),
      red:    getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-red").trim(),
    };

    keys.forEach(key=>{
      const sw = ROOT_DOC.createElement("button");
      sw.type = "button";
      sw.className = "hl-swatch";
      sw.setAttribute("data-hl", key);
      sw.style.background = cssMap[key] || cssMap.yellow;

      sw.addEventListener("click", ()=>{
        I.state.tool = "mark";
        I.state.color = key;
        I.state.panelOpen = false;
        applyUI();
      });

      colorsEl.appendChild(sw);
    });
  }

  function applyUI(){
    try{
      ROOT_DOC.body.classList.toggle("lia-hl-active", !!I.state.active);
      ROOT_DOC.body.classList.toggle("lia-hl-panel-open", !!(I.state.active && I.state.panelOpen));
    } catch(e){}

    const toolMark = ROOT_DOC.getElementById("hl-tool-mark");
    const toolErase= ROOT_DOC.getElementById("hl-tool-erase");
    if (toolMark) toolMark.classList.toggle("active", I.state.tool === "mark");
    if (toolErase)toolErase.classList.toggle("active", I.state.tool === "erase");

    const dot = ROOT_DOC.getElementById("lia-hl-dot");
    if (dot){
      const map = {
        yellow: getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-yellow").trim(),
        green:  getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-green").trim(),
        blue:   getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-blue").trim(),
        pink:   getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-pink").trim(),
        orange: getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-orange").trim(),
        red:    getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-red").trim(),
      };
      dot.style.background = map[I.state.color] || map.yellow;
    }

    const colorsEl = ROOT_DOC.getElementById("hl-colors");
    if (colorsEl){
      Array.from(colorsEl.querySelectorAll(".hl-swatch")).forEach(s=>{
        s.classList.toggle("active", s.getAttribute("data-hl") === I.state.color);
      });
    }

    if (I.state.active && I.state.panelOpen){
      ROOT_WIN.requestAnimationFrame(() => positionPanelSmart());
    }
  }

  function wireUIOnce(){
    const btn = ROOT_DOC.getElementById("lia-hl-btn");
    if (!btn || btn.__liaHLWired) return;
    btn.__liaHLWired = true;

    btn.addEventListener("click", ()=>{
      if (!I.state.active){
        I.state.active = true;
        I.state.panelOpen = true;
        I.state.tool = "mark";
      } else {
        I.state.active = false;
        I.state.panelOpen = false;
        I.state.tool = "mark";
      }
      applyUI();
    });

    btn.addEventListener("contextmenu", (e)=>{
      e.preventDefault();
      if (!I.state.active) return;
      I.state.panelOpen = !I.state.panelOpen;
      applyUI();
    });

    const toolMark = ROOT_DOC.getElementById("hl-tool-mark");
    const toolErase= ROOT_DOC.getElementById("hl-tool-erase");
    const clearBtn = ROOT_DOC.getElementById("hl-clear");

    if (toolMark){
      toolMark.addEventListener("click", ()=>{
        I.state.tool = "mark";
        I.state.panelOpen = false;
        applyUI();
      });
    }

    if (toolErase){
      toolErase.addEventListener("click", ()=>{
        I.state.tool = "erase";
        I.state.panelOpen = false;
        applyUI();
      });
    }

    if (clearBtn){
      clearBtn.addEventListener("click", ()=>{
        I.HL = [];
        render();
        I.state.panelOpen = false;
        I.state.tool = "mark";
        applyUI();
      });
    }

    ROOT_DOC.addEventListener("keydown", (e)=>{
      if (e.key === "Escape" && I.state.active){
        I.state.panelOpen = false;
        I.state.tool = "mark";
        applyUI();
      }
    });

    ROOT_WIN.addEventListener("resize", () => positionPanelSmart());
    if (ROOT_WIN.visualViewport){
      ROOT_WIN.visualViewport.addEventListener("resize", () => positionPanelSmart());
      ROOT_WIN.visualViewport.addEventListener("scroll", () => positionPanelSmart());
    }
  }

  // =========================
  // Markieren / Radieren
  // =========================
  function isForbiddenTarget(node){
    const el = (node && node.nodeType === 1) ? node : node?.parentElement;
    if (!el) return false;
    return !!el.closest("input, textarea, select, button, a, code, pre");
  }

  function addHighlightFromSelection(){
    const sel = CONTENT_WIN.getSelection ? CONTENT_WIN.getSelection() : null;
    if (!sel || sel.rangeCount === 0) return;

    const range = sel.getRangeAt(0);
    if (!range || range.collapsed) return;

    if (isForbiddenTarget(range.startContainer) || isForbiddenTarget(range.endContainer)) return;

    const rects = Array.from(range.getClientRects ? range.getClientRects() : []);
    if (!rects.length) return;

    const sc = currentScroll();
    const packed = rects
      .filter(r => r.width > 1 && r.height > 1)
      .map(r => ({ x: r.left + sc.x, y: r.top + sc.y, w: r.width, h: r.height }));

    if (!packed.length) return;

    I.HL.push({ id: I.nextId++, color: I.state.color, rects: packed });
    sel.removeAllRanges();
    render();
  }

  CONTENT_DOC.addEventListener("mouseup", ()=>{
    if (!I.state.active) return;

    if (I.state.panelOpen){
      I.state.panelOpen = false;
      applyUI();
    }

    if (I.state.tool !== "mark") return;
    addHighlightFromSelection();
  }, true);

  CONTENT_DOC.addEventListener("click", (e)=>{
    if (!I.state.active) return;
    if (I.state.tool !== "erase") return;

    const t = e.target;
    if (!t || !t.classList || !t.classList.contains("lia-hl-rect")) return;

    const id = t.getAttribute("data-id");
    if (!id) return;

    const n = Number(id);
    I.HL = I.HL.filter(item => item.id !== n);
    render();
  }, true);


  function detectNavStack(){
    const btn = ROOT_DOC.getElementById("lia-hl-btn");
    if (!btn) return;

    const r = btn.getBoundingClientRect();
    const vw = ROOT_DOC.documentElement.clientWidth || 0;

    // Heuristik: im Nightly-"Navigation"-Modus sitzen die Header-Icons sehr weit rechts oben.
    const likelyNavStack = (r.right >= vw - 2) && (r.top <= 90);

    ROOT_DOC.body.classList.toggle("lia-hl-navstack", !!likelyNavStack);
  }




  // =========================
  // Tick (throttled) — Docking stabil, ohne Observer-Loop
  // =========================
  function tick(){
    if (I.ticking) return;
    I.ticking = true;

    ROOT_WIN.requestAnimationFrame(() => {
      try{
        ensureRootButtonAndPanel();
        detectNavStack();
        ensureSwatchesOnce();
        wireUIOnce();
        adaptUIVars();
        applyUI();
        positionPanelSmart();
      } finally {
        I.ticking = false;
      }
    });
  }

  // Docking nur auf DOM-Änderungen (childList/subtree) — KEINE attributes!
  try{
    I.moDock = new MutationObserver(() => tick());
    I.moDock.observe(ROOT_DOC.body, { childList:true, subtree:true });
  } catch(e){}

  // Theme-Observer: NUR class/data-theme (nicht style!)
  try{
    I.moTheme = new MutationObserver(() => { adaptUIVars(); applyUI(); positionPanelSmart(); });
    I.moTheme.observe(ROOT_DOC.documentElement, { attributes:true, attributeFilter:["class","data-theme"] });
    I.moTheme.observe(ROOT_DOC.body,           { attributes:true, attributeFilter:["class","data-theme"] });
  } catch(e){}

  // Boot
  tick();
  render();

})();
@end
-->

# Textmarker
