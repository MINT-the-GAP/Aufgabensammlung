<!--
comment: Hier sind alle wichtigen Features für SchulLia zusammengefasst.
author: Martin Lommatzsch






@style


/* ---------------------------------------------------------
   Canvas 
   Canvas 
   Canvas 
   Canvas 
   Canvas 
   Canvas 
   Canvas 
   Canvas 
   Canvas 
   --------------------------------------------------------- */




:root{
  --canvas-border: #000;
  --canvas-pen:    #000;

  /* Lia Theme (wird per JS ermittelt) */
  --canvas-accent: #0b5fff;
}

@media (prefers-color-scheme: dark){
  :root{
    --canvas-border: #fff;
    --canvas-pen:    #fff;
  }
}

/* ---------------------------------------------------------
   Canvas Block: KEIN horizontal scroll!
   --------------------------------------------------------- */
.lia-draw-block{
  display: block;         /* <-- WICHTIG, weil Markup jetzt <span> ist */
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
}


/* Canvas-Rahmen */
.lia-draw-wrap{
  width: min(520px, 100%);
  border: 2px solid var(--canvas-border);
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;

  display: block;
  max-width: 100%;
}

canvas.lia-draw{
  width: 100%;
  height: 150px;
  display: block;
  background: transparent;

  touch-action: none;
  cursor: crosshair;
  border-radius: 8px;
}

/* Stack links */
.lia-toolstack{
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 25;

  display: flex;
  flex-direction: column;
  gap: 5px;
}

/* Buttons */
.lia-tool-btn{
  width: 22px;
  height: 22px;
  padding: 0;

  border: 2px solid var(--canvas-border);
  border-radius: 999px;
  cursor: pointer;
  user-select: none;

  display: grid;
  place-items: center;

  background: transparent; /* immer transparent */
}

.lia-tool-btn:disabled{
  opacity: 0.35;
  cursor: not-allowed;
}

/* Icon-Alignment (zentriert) */
.lia-tool-btn svg{
  width: 14px;
  height: 14px;
  display: block;
  margin: 0;
  transform: translate(0,0);
}
.lia-tool-btn .ico-stroke{
  stroke: var(--canvas-border);
  fill: none;
}
.lia-tool-btn .ico-fill{ fill: rgba(0,0,0,0); }

.lia-tool-btn[data-active="1"]{
  outline: 2px solid var(--canvas-border);
  outline-offset: 2px;
}

/* ---------------------------------------------------------
   LAUNCHER (@canvas):
   (Mount ist fest im Makro → kein DOM-Repair)
   --------------------------------------------------------- */
.lia-canvas-anchor{
  display: inline-block;
}

.lia-canvas-mount{
  display: none;
  width: 100%;
  max-width: 100%;
  margin: 6px 0;
  flex: 0 0 100%;
  min-width: 0;
}
.lia-canvas-mount[data-open="1"]{ display: block; }

/* Launcher: 32px, transparent, Theme-Farbe für Linien */
.lia-canvas-launch{
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 999px;

  background: transparent;
  border: 2px solid var(--canvas-accent);

  cursor: pointer;
  user-select: none;
  touch-action: manipulation;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  vertical-align: middle;
  line-height: 0;
  margin-right: 6px;
}

.lia-canvas-launch:hover{ filter: brightness(1.05); }

.lia-canvas-launch svg{
  width: 18px;
  height: 18px;
  display: block;
}

.lia-canvas-launch .launch-stroke{
  stroke: var(--canvas-accent);
  fill: none;
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Menü */
.lia-tool-menu{
  position: absolute;
  left: 44px;
  top: 10px;
  z-index: 30;

  padding: 10px;
  border: 2px solid var(--canvas-border);
  border-radius: 12px;

  background: rgba(0,0,0,0.15);
  backdrop-filter: blur(6px);

  display: none;
  gap: 10px;
}
.lia-tool-menu[data-open="1"]{
  display: grid;
  align-items: start;
  row-gap: 10px;
}

/* Farbpunkte */
.lia-color-grid{
  display: grid;
  grid-template-columns: repeat(9, 22px);
  gap: 10px;
  align-items: center;
}

.lia-color-item{
  width: 22px;
  height: 22px;
  border-radius: 999px;
  cursor: pointer;
  user-select: none;

  border: 2px solid var(--canvas-border);
  background: transparent;
  box-sizing: border-box;
}
.lia-color-item:hover{ transform: scale(1.06); }
.lia-color-item[data-active="1"]{
  outline: 2px solid var(--canvas-border);
  outline-offset: 2px;
}

/* Überschriften im Menü */
.lia-tool-heading{
  font-size: 1.5rem;
  font-weight: 750;
  line-height: 1.1;
  padding-left: 2px;
}

/* Heading-Zeile + Clear-Button */
.lia-heading-row{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.lia-heading-row .lia-tool-heading{ padding-left: 2px; }

.lia-menu-icon-btn{
  width: 28px;
  height: 28px;
  border-radius: 999px;

  border: 2px solid var(--canvas-border);
  background: transparent;

  display: grid;
  place-items: center;

  cursor: pointer;
  user-select: none;
  padding: 0;
}
.lia-menu-icon-btn:hover{ filter: brightness(1.08); }

.lia-menu-icon-btn svg{
  width: 16px;
  height: 16px;
  display:block;
  margin: 0;
}
.lia-menu-icon-btn .ico-stroke{
  stroke: var(--canvas-border);
  fill: none;
}
.lia-menu-icon-btn .ico-fill{ fill: rgba(0,0,0,0); }

/* Slider-Zeile */
.lia-row{
  display: flex;
  align-items: center;
  gap: 10px;
}

.lia-preview{
  width: 34px;
  height: 22px;
  border-radius: 10px;
  border: 2px solid var(--canvas-border);
  box-sizing: border-box;
  display: grid;
  place-items: center;
}

.lia-preview-line{
  width: 22px;
  border-radius: 999px;
  background: var(--canvas-border);
  height: 3px;
}

.lia-slider{ width: 180px; }

/* Hintergrund-Menü: 3 Preview-Tiles */
.lia-bg-tiles{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  align-items: stretch;
}

.lia-bg-tile{
  height: 34px;
  border-radius: 12px;
  border: 2px solid var(--canvas-border);
  background: transparent;
  cursor: pointer;
  user-select: none;
  padding: 0;
}
.lia-bg-tile:hover{ filter: brightness(1.08); }
.lia-bg-tile[data-active="1"]{
  outline: 2px solid var(--canvas-border);
  outline-offset: 2px;
}

/* Unsichtbare Ecken-Ziehflächen */
.lia-resize-corner{
  position: absolute;
  bottom: 0;
  width: 18px;
  height: 18px;
  z-index: 50;

  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;

  user-select: none;
  touch-action: none;

  opacity: 0;
}
.lia-resize-corner[data-corner="br"]{ right: 0; cursor: nwse-resize; }
.lia-resize-corner[data-corner="bl"]{ left: 0;  cursor: nesw-resize; }
















@end










@onload



  // =========================
  // TEXTMARKER
  // TEXTMARKER
  // TEXTMARKER
  // TEXTMARKER
  // TEXTMARKER
  // TEXTMARKER
  // TEXTMARKER
  // TEXTMARKER
  // TEXTMARKER
  // TEXTMARKER
  // =========================


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
    roLayout: null,
    roNodes: new Set(),
    roPending: false,
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


  // =========================
  // Anchors: Range serialisieren & wiederherstellen
  // =========================
  function nodeToPath(node){
    // Pfad relativ zu BODY über childNodes-Indizes (inkl. Textnodes)
    const root = CONTENT_DOC.body;
    const parts = [];
    let n = node;
    while (n && n !== root){
      const p = n.parentNode;
      if (!p) break;
      const idx = Array.prototype.indexOf.call(p.childNodes, n);
      parts.push(idx);
      n = p;
    }
    parts.reverse();
    return parts.join("/");
  }

  function pathToNode(path){
    const root = CONTENT_DOC.body;
    if (!path) return null;
    const parts = path.split("/").filter(Boolean).map(x => parseInt(x, 10));
    let n = root;
    for (const idx of parts){
      if (!n || !n.childNodes || idx < 0 || idx >= n.childNodes.length) return null;
      n = n.childNodes[idx];
    }
    return n || null;
  }

  function clampOffset(node, off){
    if (!node) return 0;
    if (node.nodeType === 3) { // Text
      const len = (node.nodeValue || "").length;
      return Math.max(0, Math.min(off, len));
    }
    if (node.nodeType === 1) { // Element
      const len = node.childNodes ? node.childNodes.length : 0;
      return Math.max(0, Math.min(off, len));
    }
    return 0;
  }

  function rangeFromAnchor(a){
    if (!a) return null;
    const sc = pathToNode(a.sp);
    const ec = pathToNode(a.ep);
    if (!sc || !ec) return null;

    const r = CONTENT_DOC.createRange();
    const so = clampOffset(sc, a.so);
    const eo = clampOffset(ec, a.eo);

    try{
      r.setStart(sc, so);
      r.setEnd(ec, eo);
      if (r.collapsed) return null;
      return r;
    } catch (e){
      return null;
    }
  }

  function packedRectsFromRange(range){
    const rects = Array.from(range.getClientRects ? range.getClientRects() : []);
    if (!rects.length) return [];

    const sc = currentScroll();

    // 1) pack -> doc coords
    const raw = rects
      .filter(r => r.width > 0.5 && r.height > 0.5)
      .map(r => ({ x: r.left + sc.x, y: r.top + sc.y, w: r.width, h: r.height }));

    if (!raw.length) return [];

    // 2) merge by line (y proximity) + join gaps (spaces) + remove overlaps
    return mergeRectsToLines(raw, {
      yTol: 4,          // px: Rects derselben Zeile erkennen
      gapTol: 10,       // px: kleine Lücken (Leerzeichen) schließen
      minW: 2,
      minH: 2,
      padX: 0.0,        // optional: 0.5..1.5 wenn du "schöner" willst
      padY: 0.0
    });
  }


  function mergeRectsToLines(rects, opt){
    const yTol = opt?.yTol ?? 4;
    const gapTol = opt?.gapTol ?? 10;
    const minW = opt?.minW ?? 2;
    const minH = opt?.minH ?? 2;
    const padX = opt?.padX ?? 0;
    const padY = opt?.padY ?? 0;

    // sort top->bottom, left->right
    const a = rects.slice().sort((r1,r2) => (r1.y - r2.y) || (r1.x - r2.x));

    // group into lines by y center
    const lines = [];
    for (const r of a){
      const cy = r.y + r.h/2;
      let line = null;

      // letzte Zeile reicht fast immer, aber wir suchen defensiv von hinten
      for (let i = lines.length - 1; i >= 0; i--){
        const L = lines[i];
        if (Math.abs(cy - L.cy) <= yTol){
          line = L;
          break;
        }
        if (cy < L.cy - (yTol*2)) break;
      }

      if (!line){
        line = { cy, rects: [] };
        lines.push(line);
      }
      line.rects.push(r);
      // Update line center (robust)
      line.cy = (line.cy * (line.rects.length - 1) + cy) / line.rects.length;
    }

    // merge within each line
    const merged = [];
    for (const L of lines){
      const rs = L.rects.sort((r1,r2)=> r1.x - r2.x);
      let cur = null;

      for (const r of rs){
        const x1 = r.x;
        const x2 = r.x + r.w;
        const y1 = r.y;
        const y2 = r.y + r.h;

        if (!cur){
          cur = { x1, x2, y1, y2 };
          continue;
        }

        // overlap / small gap -> merge
        if (x1 <= cur.x2 + gapTol){
          cur.x2 = Math.max(cur.x2, x2);
          cur.y1 = Math.min(cur.y1, y1);
          cur.y2 = Math.max(cur.y2, y2);
        } else {
          // flush
          const w = cur.x2 - cur.x1;
          const h = cur.y2 - cur.y1;
          if (w >= minW && h >= minH){
            merged.push({
              x: cur.x1 - padX,
              y: cur.y1 - padY,
              w: w + 2*padX,
              h: h + 2*padY
            });
          }
          cur = { x1, x2, y1, y2 };
        }
      }

      // flush last
      if (cur){
        const w = cur.x2 - cur.x1;
        const h = cur.y2 - cur.y1;
        if (w >= minW && h >= minH){
          merged.push({
            x: cur.x1 - padX,
            y: cur.y1 - padY,
            w: w + 2*padX,
            h: h + 2*padY
          });
        }
      }
    }

    return merged;
  }



  // =========================
  // Layout-Signatur + Recalc (wenn Präsentation/Font/Wrap sich ändert)
  // =========================
  I.__layoutSig = "";
  function layoutSignature(){
    const main = CONTENT_DOC.querySelector("main") || CONTENT_DOC.body;
    const csMain = CONTENT_WIN.getComputedStyle(main);
    const csRoot = CONTENT_WIN.getComputedStyle(CONTENT_DOC.documentElement);

    // Root/Content Klassen + ggf. data-Attribute (Nightly toggles)
    const rootClass = (ROOT_DOC.documentElement.className || "") + "|" + (ROOT_DOC.body.className || "");
    const contClass = (CONTENT_DOC.documentElement.className || "") + "|" + (CONTENT_DOC.body.className || "");

    const rootDE = ROOT_DOC.documentElement;
    const rootBody = ROOT_DOC.body;
    const rootData =
      (rootDE?.getAttribute("data-mode")||"") + "|" +
      (rootDE?.getAttribute("data-view")||"") + "|" +
      (rootDE?.getAttribute("data-layout")||"") + "|" +
      (rootBody?.getAttribute("data-mode")||"") + "|" +
      (rootBody?.getAttribute("data-view")||"") + "|" +
      (rootBody?.getAttribute("data-layout")||"");

    const contDE = CONTENT_DOC.documentElement;
    const contBody = CONTENT_DOC.body;
    const contData =
      (contDE?.getAttribute("data-mode")||"") + "|" +
      (contDE?.getAttribute("data-view")||"") + "|" +
      (contDE?.getAttribute("data-layout")||"") + "|" +
      (contBody?.getAttribute("data-mode")||"") + "|" +
      (contBody?.getAttribute("data-view")||"") + "|" +
      (contBody?.getAttribute("data-layout")||"");

    // >>> entscheidend: GEOMETRIE (Offsets), nicht nur Styles
    const mr = main.getBoundingClientRect();
    const mainGeo = [mr.left, mr.top, mr.width].map(v => Math.round(v)).join(",");

    // Root-Header kann im Navigation-Modus andere Geometrie haben
    const header =
      ROOT_DOC.querySelector("header#lia-toolbar-nav") ||
      ROOT_DOC.querySelector("#lia-toolbar-nav") ||
      ROOT_DOC.querySelector("header.lia-header");
    let headerGeo = "nohdr";
    if (header){
      const hr = header.getBoundingClientRect();
      headerGeo = [hr.left, hr.top, hr.width, hr.height].map(v => Math.round(v)).join(",");
    }

    // Viewport-Geometrie (Navigation kann VisualViewport/Insets verändern)
    const vv = ROOT_WIN.visualViewport;
    const vpGeo = vv
      ? [vv.width, vv.height, vv.offsetLeft||0, vv.offsetTop||0].map(v => Math.round(v)).join(",")
      : [
          (ROOT_DOC.documentElement.clientWidth||0),
          (ROOT_DOC.documentElement.clientHeight||0),
          0,0
        ].map(v => Math.round(v)).join(",");

    return [
      // styles
      csRoot.fontSize, csMain.fontSize, csMain.lineHeight,
      csMain.width, csMain.paddingLeft, csMain.paddingRight,
      // classes/data
      rootClass, contClass, rootData, contData,
      // geometry (THIS FIXES NAVIGATION MODE)
      mainGeo, headerGeo, vpGeo
    ].join("§");
  }



  function recalcAllHighlights(){
    for (const item of I.HL){
      if (!item.anchor) continue;
      const r = rangeFromAnchor(item.anchor);
      if (!r) continue;
      const packed = packedRectsFromRange(r);
      if (packed.length) item.rects = packed;
    }
  }

  function checkLayoutAndRecalc(){
    const sig = layoutSignature();
    if (sig !== I.__layoutSig){
      I.__layoutSig = sig;
      recalcAllHighlights();
      render();
    }
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


  function scheduleForcedRecalc(){
    if (I.roPending) return;
    I.roPending = true;

    ROOT_WIN.requestAnimationFrame(() => {
      I.roPending = false;
      if (!I.__alive) return;
      if (!I.HL || I.HL.length === 0) return;

      recalcAllHighlights();
      render();
    });
  }

  function ensureLayoutResizeObserver(){
    if (!("ResizeObserver" in ROOT_WIN)) return;

    if (!I.roLayout){
      I.roLayout = new ROOT_WIN.ResizeObserver(() => {
        // Flex-Resize -> Text reflow -> Rects neu messen
        scheduleForcedRecalc();
      });
    }

    // Watchlist: main + alle dynFlex/flex-child Container
    const want = new Set();
    const main = CONTENT_DOC.querySelector("main") || CONTENT_DOC.body;
    if (main) want.add(main);

    CONTENT_DOC.querySelectorAll(".dynFlex, .flex-child").forEach(el => want.add(el));

    // neu beobachten
    for (const el of want){
      if (!I.roNodes.has(el)){
        try { I.roLayout.observe(el); } catch(e){}
        I.roNodes.add(el);
      }
    }

    // nicht mehr vorhandene Elemente abmelden
    for (const el of Array.from(I.roNodes)){
      if (!want.has(el)){
        try { I.roLayout.unobserve(el); } catch(e){}
        I.roNodes.delete(el);
      }
    }
  }



  CONTENT_WIN.addEventListener("scroll", render, { passive:true });
  CONTENT_WIN.addEventListener("resize", () => { adaptUIVars(); checkLayoutAndRecalc(); render(); });


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

        const anchor = {
      sp: nodeToPath(range.startContainer),
      so: range.startOffset,
      ep: nodeToPath(range.endContainer),
      eo: range.endOffset
    };

    I.HL.push({ id: I.nextId++, color: I.state.color, anchor, rects: packed });

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
        ensureLayoutResizeObserver(); 
        checkLayoutAndRecalc();
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
    I.moTheme.observe(ROOT_DOC.documentElement, { attributes:true, attributeFilter:["class","data-theme","data-mode","data-view","data-layout"] });
    I.moTheme.observe(ROOT_DOC.body,           { attributes:true, attributeFilter:["class","data-theme","data-mode","data-view","data-layout"] });

  } catch(e){}

  // Boot
  tick();
  render();

  // Layout-Drift Fix: reagiert auf Fontsize/Präsentationsmodus ohne style-Observer
  if (!I.__layoutTimer){
    I.__layoutSig = layoutSignature(); // Initial
    I.__layoutTimer = ROOT_WIN.setInterval(() => {
      if (!I.__alive) return;
      checkLayoutAndRecalc();
    }, 350);
  }

})();

















  // =========================
  // CANVAS
  // CANVAS
  // CANVAS
  // CANVAS
  // CANVAS
  // CANVAS
  // CANVAS
  // CANVAS
  // CANVAS
  // CANVAS
  // =========================






(function(){
  if (window.__liaDrawCanvasInit) return;
  window.__liaDrawCanvasInit = true;

  // =========================================================
  // CSS-Fallback: falls @style aus Import nicht greift → injizieren
  // (Design bleibt identisch, nur robust)
  // =========================================================
function ensureCss(){
  if (document.getElementById('__lia_canvas_css_v2')) return;

  const st = document.createElement('style');
  st.id = '__lia_canvas_css_v2';

  st.textContent = [
    ':root{',
    '  --canvas-border:#000;',
    '  --canvas-pen:#000;',
    '  --canvas-accent:#0b5fff;',
    '}',
    '@media (prefers-color-scheme: dark){',
    '  :root{ --canvas-border:#fff; --canvas-pen:#fff; }',
    '}',

    '.lia-draw-block{ display:block; width:100%; overflow-x:hidden; overflow-y:visible; }',
    '.lia-draw-wrap{ width:min(520px,100%); border:2px solid var(--canvas-border); border-radius:10px; box-sizing:border-box; position:relative; display:block; max-width:100%; }',
    'canvas.lia-draw{ width:100%; height:150px; display:block; background:transparent; touch-action:none; cursor:crosshair; border-radius:8px; }',

    '.lia-toolstack{ position:absolute; left:10px; top:50%; transform:translate(0,-50%); z-index:25; display:flex; flex-direction:column; gap:5px; }',
    '.lia-tool-btn{ width:22px; height:22px; padding:0; border:2px solid var(--canvas-border); border-radius:999px; cursor:pointer; user-select:none; display:grid; place-items:center; background:transparent; }',
    '.lia-tool-btn:disabled{ opacity:.35; cursor:not-allowed; }',
    '.lia-tool-btn svg{ width:14px; height:14px; display:block; margin:0; transform:translate(0,0); }',
    '.lia-tool-btn .ico-stroke{ stroke:var(--canvas-border); fill:none; }',
    '.lia-tool-btn .ico-fill{ fill:rgba(0,0,0,0); }',
    '.lia-tool-btn[data-active="1"]{ outline:2px solid var(--canvas-border); outline-offset:2px; }',

    '.lia-canvas-anchor{ display:inline-block; }',
    '.lia-canvas-mount{ display:none; width:100%; max-width:100%; margin:6px 0; }',
    '.lia-canvas-mount[data-open="1"]{ display:block; }',

    '.lia-canvas-launch{ width:32px; height:32px; padding:0; border-radius:999px; background:transparent; border:2px solid var(--canvas-accent); cursor:pointer; user-select:none; touch-action:manipulation; display:inline-flex; align-items:center; justify-content:center; vertical-align:middle; line-height:0; margin-right:6px; }',
    '.lia-canvas-launch:hover{ filter:brightness(1.05); }',
    '.lia-canvas-launch svg{ width:18px; height:18px; display:block; }',
    '.lia-canvas-launch .launch-stroke{ stroke:var(--canvas-accent); fill:none; stroke-width:2.4; stroke-linecap:round; stroke-linejoin:round; }',

    '.lia-tool-menu{ position:absolute; left:44px; top:10px; z-index:30; padding:10px; border:2px solid var(--canvas-border); border-radius:12px; background:rgba(0,0,0,.15); backdrop-filter:blur(6px); display:none; gap:10px; }',
    '.lia-tool-menu[data-open="1"]{ display:grid; align-items:start; row-gap:10px; }',

    '.lia-color-grid{ display:grid; grid-template-columns:repeat(9,22px); gap:10px; align-items:center; }',
    '.lia-color-item{ width:22px; height:22px; border-radius:999px; cursor:pointer; user-select:none; border:2px solid var(--canvas-border); background:transparent; box-sizing:border-box; }',
    '.lia-color-item:hover{ transform:scale(1.06); }',
    '.lia-color-item[data-active="1"]{ outline:2px solid var(--canvas-border); outline-offset:2px; }',

    '.lia-tool-heading{ font-size:1.5rem; font-weight:750; line-height:1.1; padding-left:2px; }',
    '.lia-heading-row{ display:flex; align-items:center; justify-content:space-between; gap:10px; }',

    '.lia-menu-icon-btn{ width:28px; height:28px; border-radius:999px; border:2px solid var(--canvas-border); background:transparent; display:grid; place-items:center; cursor:pointer; user-select:none; padding:0; }',
    '.lia-menu-icon-btn:hover{ filter:brightness(1.08); }',
    '.lia-menu-icon-btn svg{ width:16px; height:16px; display:block; margin:0; }',
    '.lia-menu-icon-btn .ico-stroke{ stroke:var(--canvas-border); fill:none; }',

    '.lia-row{ display:flex; align-items:center; gap:10px; }',
    '.lia-preview{ width:34px; height:22px; border-radius:10px; border:2px solid var(--canvas-border); box-sizing:border-box; display:grid; place-items:center; }',
    '.lia-preview-line{ width:22px; border-radius:999px; background:var(--canvas-border); height:3px; }',
    '.lia-slider{ width:180px; }',

    '.lia-bg-tiles{ display:grid; grid-template-columns:repeat(3,1fr); gap:10px; align-items:stretch; }',
    '.lia-bg-tile{ height:34px; border-radius:12px; border:2px solid var(--canvas-border); background:transparent; cursor:pointer; user-select:none; padding:0; }',
    '.lia-bg-tile:hover{ filter:brightness(1.08); }',
    '.lia-bg-tile[data-active="1"]{ outline:2px solid var(--canvas-border); outline-offset:2px; }',

    '.lia-resize-corner{ position:absolute; bottom:0; width:18px; height:18px; z-index:50; background:transparent; border:0; padding:0; margin:0; user-select:none; touch-action:none; opacity:0; }',
    '.lia-resize-corner[data-corner="br"]{ right:0; cursor:nwse-resize; }',
    '.lia-resize-corner[data-corner="bl"]{ left:0; cursor:nesw-resize; }'
  ].join('\n');

  (document.head || document.documentElement).appendChild(st);
}


  // =========================================================
  // Theme helpers — OHNE Regex-Literale (verhindert Parser-Fehler)
  // =========================================================
  function parseRgbNoRegex(s){
    const str = String(s || '');
    const i0 = str.indexOf('(');
    const i1 = str.indexOf(')');
    if (i0 < 0 || i1 < 0) return null;
    const parts = str.slice(i0+1, i1).split(',').map(x => Number(String(x).trim()));
    if (parts.length < 3) return null;
    if (!isFinite(parts[0]) || !isFinite(parts[1]) || !isFinite(parts[2])) return null;
    return [parts[0], parts[1], parts[2]];
  }
  function luminance(rgb){
    const [r,g,b] = rgb.map(v => v/255).map(c => (c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4)));
    return 0.2126*r + 0.7152*g + 0.0722*b;
  }

  function getLiaAccentColor(doc){
    try{
      const d = doc || document;
      const body = d.body || d.documentElement;

      const existing = d.querySelector('.lia-btn');
      if (existing){
        const bg = getComputedStyle(existing).backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
      }

      const probe = d.createElement('button');
      probe.className = 'lia-btn';
      probe.type = 'button';
      probe.textContent = 'x';
      probe.style.position = 'absolute';
      probe.style.left = '-9999px';
      probe.style.top = '-9999px';
      probe.style.visibility = 'hidden';
      body.appendChild(probe);

      const bg = getComputedStyle(probe).backgroundColor;
      probe.remove();

      if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
    }catch(e){}
    return null;
  }

  function applyThemeVars(){
    ensureCss();
    try{
      const doc = (window.parent && window.parent.document) ? window.parent.document : document;
      const root = document.documentElement;

      const bg = getComputedStyle(doc.body || doc.documentElement).backgroundColor
              || getComputedStyle(doc.documentElement).backgroundColor;

      const rgb = parseRgbNoRegex(bg);
      const isDark = rgb ? (luminance(rgb) < 0.5) : false;

      const border = isDark ? '#fff' : '#000';
      root.style.setProperty('--canvas-border', border);
      root.style.setProperty('--canvas-pen', border);

      const accent = getLiaAccentColor(doc) || getLiaAccentColor(document);
      if (accent) root.style.setProperty('--canvas-accent', accent);

      document.dispatchEvent(new Event('lia-canvas-theme'));
    }catch(e){}
  }

  applyThemeVars();
  const mo = new MutationObserver(() => applyThemeVars());
  mo.observe(document.documentElement, { attributes:true, attributeFilter:['class','style'] });
  window.addEventListener('resize', () => applyThemeVars());

  // -----------------------------
  // Persistent store per UID
  // -----------------------------
  window.__LIA_CANVAS_STORE__ = window.__LIA_CANVAS_STORE__ || {}; // uid -> {wrapW,canvasH,VIEW,bgMode,bgStep,STROKES,REDO}

  // -----------------------------
  // Colors + helpers
  // -----------------------------
  const COLORS = [
    { key:'auto',       value:null },
    { key:'red',        value:'#ff2d2d' },
    { key:'orange',     value:'#ffc800' },
    { key:'violett',    value:'#ff00ea' },
    { key:'blue',       value:'#2d6bff' },
    { key:'lightblue',  value:'#00d5ff' },
    { key:'green',      value:'#00ff1a' },
    { key:'black',      value:'#000000' },
    { key:'white',      value:'#ffffff' }
  ];

  function getAutoPen(){
    return getComputedStyle(document.documentElement).getPropertyValue('--canvas-pen').trim() || '#000';
  }
  function getBorderColor(){
    return getComputedStyle(document.documentElement).getPropertyValue('--canvas-border').trim() || '#000';
  }
  function getAccentColor(){
    return getComputedStyle(document.documentElement).getPropertyValue('--canvas-accent').trim() || getBorderColor();
  }

  // Icons (wie bei dir)
  function setSvg(btn, svg){
    if (!btn) return;
    if (btn.__hasIcon) return;
    btn.__hasIcon = true;
    btn.innerHTML = svg;
  }

  function setEraserIcon(btn){
    setSvg(btn, `
      <svg viewBox="-4 4 24 24" aria-hidden="true">
        <path class="ico-stroke" d="M4 16.5l8.6-8.6a2 2 0 0 1 2.8 0l4.1 4.1a2 2 0 0 1 0 2.8L12.8 23H7.6L4 19.4a2 2 0 0 1 0-2.9z"
              fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="ico-stroke" d="M8 23h8" fill="none" stroke-width="2" stroke-linecap="round"/>
        <path class="ico-stroke" d="M9.2 14.3l6.5 6.5" fill="none" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `);
  }

  function setUndoIcon(btn){
    setSvg(btn, `
      <svg viewBox="-4 0 24 24" aria-hidden="true">
        <path d="M21 8H10.2V4L2 12l8.2 8v-4H21V8z" fill="var(--canvas-border)"/>
        <rect x="10.2" y="10.6" width="10.8" height="2.8" rx="1.4" fill="var(--canvas-border)"/>
      </svg>
    `);
  }

  function setRedoIcon(btn){
    setSvg(btn, `
      <svg viewBox="-4 0 24 24" aria-hidden="true">
        <path d="M3 8h10.8V4l8.2 8-8.2 8v-4H3V8z" fill="var(--canvas-border)"/>
        <rect x="3" y="10.6" width="10.8" height="2.8" rx="1.4" fill="var(--canvas-border)"/>
      </svg>
    `);
  }

  function setTrashIcon(btn){
    if (!btn) return;
    btn.innerHTML = `
      <svg viewBox="-1 0 24 24" aria-hidden="true" style="width:22px;height:22px;display:block;">
        <path class="ico-stroke" d="M9 3h6" stroke-width="2" stroke-linecap="round"/>
        <path class="ico-stroke" d="M4 6h16" stroke-width="2" stroke-linecap="round"/>
        <path class="ico-stroke" d="M7 6l1 15h8l1-15" stroke-width="2" stroke-linejoin="round"/>
        <path class="ico-stroke" d="M10 10v8M14 10v8" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
  }

  function rgbaFromAny(color, a){
    const rgb = parseRgbNoRegex(color);
    if (rgb) return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`;
    if (String(color).startsWith('#')){
      const h = String(color).slice(1);
      const hex = (h.length===3) ? (h[0]+h[0]+h[1]+h[1]+h[2]+h[2]) : h;
      const r = parseInt(hex.slice(0,2),16);
      const g = parseInt(hex.slice(2,4),16);
      const b = parseInt(hex.slice(4,6),16);
      return `rgba(${r},${g},${b},${a})`;
    }
    return `rgba(0,0,0,${a})`;
  }

  // -----------------------------
  // Canvas HTML (INLINE-STABIL: spans statt divs)
  // -----------------------------
  function canvasMarkup(){
    return `
      <span class="lia-draw-block">
        <span class="lia-draw-wrap">
          <span class="lia-toolstack">
            <button class="lia-tool-btn lia-undo-btn"   type="button" aria-label="Rückgängig"></button>
            <button class="lia-tool-btn lia-redo-btn"   type="button" aria-label="Wiederherstellen"></button>
            <button class="lia-tool-btn lia-eraser-btn" type="button" aria-label="Radierer"></button>
            <button class="lia-tool-btn lia-color-btn"  type="button" aria-label="Stift"></button>
            <button class="lia-tool-btn lia-bgmenu-btn" type="button" aria-label="Hintergrund"></button>
          </span>

          <span class="lia-tool-menu" data-open="0" aria-label="Werkzeuge"></span>
          <canvas class="lia-draw" aria-label="Zeichenfläche"></canvas>
        </span>
      </span>
    `;
  }

  // -----------------------------
  // Canvas setup (mit Store-Backup)
  // -----------------------------
  function setupCanvas(canvas){
    const wrap = canvas.closest('.lia-draw-wrap');
    if (!wrap) return;

    const mount = wrap.closest('.lia-canvas-mount');
    const uid = (mount && mount.id) ? mount.id.replace('lia-canvas-mount-','') : '';

    const btnUndo   = wrap.querySelector('.lia-undo-btn');
    const btnRedo   = wrap.querySelector('.lia-redo-btn');
    const btnColor  = wrap.querySelector('.lia-color-btn');
    const btnEraser = wrap.querySelector('.lia-eraser-btn');
    const btnBg     = wrap.querySelector('.lia-bgmenu-btn');
    const menu      = wrap.querySelector('.lia-tool-menu');

    setUndoIcon(btnUndo);
    setRedoIcon(btnRedo);
    setEraserIcon(btnEraser);
    if (btnBg && !btnBg.__bgCleared){ btnBg.__bgCleared = true; btnBg.innerHTML = ''; }

    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    const strokeLayer = document.createElement('canvas');
    const sctx = strokeLayer.getContext('2d', { willReadFrequently: true });

    const STORE = window.__LIA_CANVAS_STORE__;
    const saved = (uid && STORE[uid]) ? STORE[uid] : null;

    const VIEW = saved && saved.VIEW ? { ...saved.VIEW } : { panX:0, panY:0, scale:1, minScale:0.25, maxScale:8 };
    const STROKES = (saved && Array.isArray(saved.STROKES)) ? saved.STROKES : [];
    const REDO    = (saved && Array.isArray(saved.REDO))    ? saved.REDO    : [];

    let currentStroke = null;

    let tool = 'pen';
    let menuMode = 'pen';

    let colorIndex = 0;
    let penWidth = 3;
    let penAlpha = 1.0;
    let eraserWidth = 12;

    let bgMode = (saved && saved.bgMode) ? saved.bgMode : 'none';
    let bgStep = (saved && saved.bgStep) ? saved.bgStep : 24;

    function persist(){
      if (!uid) return;
      STORE[uid] = {
        VIEW: { ...VIEW },
        STROKES,
        REDO,
        bgMode,
        bgStep,
        wrapW: wrap.getBoundingClientRect().width,
        canvasH: canvas.clientHeight
      };
    }

    function penBaseColor(){
      const c = COLORS[colorIndex] || COLORS[0];
      return (c.key === 'auto') ? getAutoPen() : (c.value || getAutoPen());
    }

    function applyStrokeStyleTo(ctx2, st){
      if (st.tool === 'eraser'){
        ctx2.globalCompositeOperation = 'destination-out';
        ctx2.globalAlpha = 1.0;
        ctx2.strokeStyle = 'rgba(0,0,0,1)';
        ctx2.lineWidth = st.width;
      }else{
        ctx2.globalCompositeOperation = 'source-over';
        ctx2.globalAlpha = st.alpha;
        ctx2.strokeStyle = st.color;
        ctx2.lineWidth = st.width;
      }
      ctx2.lineCap = 'round';
      ctx2.lineJoin = 'round';
    }

    function setMenuOpen(open){
      if (!menu) return;
      menu.dataset.open = open ? '1' : '0';
    }

    function screenToWorld(sx, sy){
      return { x: (sx - VIEW.panX) / VIEW.scale, y: (sy - VIEW.panY) / VIEW.scale };
    }

    function worldBounds(){
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      return {
        x0: (0 - VIEW.panX) / VIEW.scale,
        y0: (0 - VIEW.panY) / VIEW.scale,
        x1: (w - VIEW.panX) / VIEW.scale,
        y1: (h - VIEW.panY) / VIEW.scale
      };
    }

    function drawBackground(){
      if (bgMode === 'none') return;

      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr*VIEW.scale, 0, 0, dpr*VIEW.scale, dpr*VIEW.panX, dpr*VIEW.panY);

      const step = Math.max(6, Number(bgStep) || 24);
      const b = worldBounds();

      const col = rgbaFromAny(getAccentColor(), 0.25);

      ctx.save();
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1.0;
      ctx.strokeStyle = col;
      ctx.lineWidth = 1 / VIEW.scale;

      const xStart = Math.floor(b.x0 / step) * step;
      const xEnd   = Math.ceil (b.x1 / step) * step;
      const yStart = Math.floor(b.y0 / step) * step;
      const yEnd   = Math.ceil (b.y1 / step) * step;

      const maxLines = 4000;

      if (bgMode === 'grid'){
        let count = 0;
        ctx.beginPath();
        for (let x = xStart; x <= xEnd; x += step){
          ctx.moveTo(x, b.y0);
          ctx.lineTo(x, b.y1);
          if (++count > maxLines) break;
        }
        for (let y = yStart; y <= yEnd; y += step){
          ctx.moveTo(b.x0, y);
          ctx.lineTo(b.x1, y);
          if (++count > maxLines) break;
        }
        ctx.stroke();
      }

      if (bgMode === 'lined'){
        let count = 0;
        ctx.beginPath();
        for (let y = yStart; y <= yEnd; y += step){
          ctx.moveTo(b.x0, y);
          ctx.lineTo(b.x1, y);
          if (++count > maxLines) break;
        }
        ctx.stroke();
      }

      ctx.restore();
    }

    function clearStrokeLayer(){
      const dpr = window.devicePixelRatio || 1;
      sctx.setTransform(dpr,0,0,dpr,0,0);
      sctx.globalCompositeOperation = 'source-over';
      sctx.globalAlpha = 1;
      sctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    }
    function setViewportTransformOn(ctx2){
      const dpr = window.devicePixelRatio || 1;
      ctx2.setTransform(dpr*VIEW.scale, 0, 0, dpr*VIEW.scale, dpr*VIEW.panX, dpr*VIEW.panY);
    }
    function rebuildStrokeLayer(){
      clearStrokeLayer();
      setViewportTransformOn(sctx);

      for (const st of STROKES){
        applyStrokeStyleTo(sctx, st);
        if (!st.points || st.points.length < 2) continue;

        sctx.beginPath();
        sctx.moveTo(st.points[0].x, st.points[0].y);
        for (let i=1;i<st.points.length;i++){
          const p = st.points[i];
          sctx.lineTo(p.x, p.y);
        }
        sctx.stroke();
      }
    }

    function clearMain(){
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
      ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    }
    function present(){
      clearMain();
      drawBackground();

      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1.0;
      ctx.drawImage(
        strokeLayer,
        0,0, strokeLayer.width, strokeLayer.height,
        0,0, canvas.clientWidth, canvas.clientHeight
      );
    }

    const PREVIEW_STEP = 10;
    const PREVIEW_THICK = 2;

    function tileStyleFor(mode){
      const gridCol = rgbaFromAny(getAccentColor(), 0.50);

      if (mode === 'none'){
        return { backgroundImage: 'none', backgroundColor: 'transparent' };
      }
      if (mode === 'grid'){
        return {
          backgroundColor: 'transparent',
          backgroundImage:
            `linear-gradient(to right, ${gridCol} ${PREVIEW_THICK}px, transparent ${PREVIEW_THICK}px),
             linear-gradient(to bottom, ${gridCol} ${PREVIEW_THICK}px, transparent ${PREVIEW_THICK}px)`,
          backgroundSize: `${PREVIEW_STEP}px ${PREVIEW_STEP}px`,
          backgroundPosition: 'center'
        };
      }
      return {
        backgroundColor: 'transparent',
        backgroundImage: `linear-gradient(to bottom, ${gridCol} ${PREVIEW_THICK}px, transparent ${PREVIEW_THICK}px)`,
        backgroundSize: `100% ${PREVIEW_STEP}px`,
        backgroundPosition: 'center'
      };
    }

    function buildBgMenu(){
      if (!menu) return;
      menu.innerHTML = '';

      const tiles = document.createElement('div');
      tiles.className = 'lia-bg-tiles';

      const mkTile = (mode, aria) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'lia-bg-tile';
        b.setAttribute('aria-label', aria);
        b.dataset.mode = mode;
        b.dataset.active = (bgMode === mode) ? '1' : '0';
        Object.assign(b.style, tileStyleFor(mode));

        b.addEventListener('click', () => {
          bgMode = mode;
          updateUI();
          present();
          persist();
        });
        return b;
      };

      tiles.appendChild(mkTile('none',  'Kein Hintergrund'));
      tiles.appendChild(mkTile('grid',  'Karriert'));
      tiles.appendChild(mkTile('lined', 'Liniert'));

      menu.appendChild(tiles);

      const rowZ = document.createElement('div');
      rowZ.className = 'lia-row';

      const prevZ = document.createElement('div');
      prevZ.className = 'lia-preview';
      const lineZ = document.createElement('div');
      lineZ.className = 'lia-preview-line';
      prevZ.appendChild(lineZ);

      const sliderZ = document.createElement('input');
      sliderZ.className = 'lia-slider';
      sliderZ.type = 'range';
      sliderZ.min = '8';
      sliderZ.max = '120';
      sliderZ.step = '1';
      sliderZ.value = String(bgStep);

      sliderZ.addEventListener('input', () => {
        bgStep = Number(sliderZ.value);
        updateUI();
        present();
        persist();
      });

      rowZ.appendChild(prevZ);
      rowZ.appendChild(sliderZ);
      menu.appendChild(rowZ);

      menu.__mode = 'bg';
      menu.__bgTiles = Array.from(tiles.children);
      menu.__bgLinePrev = lineZ;
      menu.__bgSlider = sliderZ;
    }

    function buildPenMenu(){
      if (!menu) return;
      menu.innerHTML = '';

      const grid = document.createElement('div');
      grid.className = 'lia-color-grid';

      COLORS.forEach((c, idx) => {
        const item = document.createElement('div');
        item.className = 'lia-color-item';
        item.setAttribute('data-idx', String(idx));
        item.setAttribute('role','button');
        item.tabIndex = 0;

        item.style.background = (c.key === 'auto') ? getAutoPen() : (c.value || 'transparent');
        if (idx === colorIndex) item.dataset.active = '1';

        const pick = () => {
          colorIndex = idx;
          tool = 'pen';
          updateUI();
          setMenuOpen(false);
        };

        item.addEventListener('click', pick);
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); }
        });

        grid.appendChild(item);
      });

      menu.appendChild(grid);

      const lab1 = document.createElement('div');
      lab1.className = 'lia-tool-heading';
      lab1.textContent = 'Stiftdicke';
      menu.appendChild(lab1);

      const row1 = document.createElement('div');
      row1.className = 'lia-row';

      const prev1 = document.createElement('div');
      prev1.className = 'lia-preview';
      const line1 = document.createElement('div');
      line1.className = 'lia-preview-line';
      prev1.appendChild(line1);

      const slider1 = document.createElement('input');
      slider1.className = 'lia-slider';
      slider1.type = 'range';
      slider1.min = '1';
      slider1.max = '18';
      slider1.step = '1';
      slider1.value = String(penWidth);
      slider1.addEventListener('input', () => { penWidth = Number(slider1.value); updateUI(); });

      row1.appendChild(prev1);
      row1.appendChild(slider1);
      menu.appendChild(row1);

      const lab2 = document.createElement('div');
      lab2.className = 'lia-tool-heading';
      lab2.textContent = 'Transparenz';
      menu.appendChild(lab2);

      const row2 = document.createElement('div');
      row2.className = 'lia-row';

      const prev2 = document.createElement('div');
      prev2.className = 'lia-preview';
      const line2 = document.createElement('div');
      line2.className = 'lia-preview-line';
      prev2.appendChild(line2);

      const slider2 = document.createElement('input');
      slider2.className = 'lia-slider';
      slider2.type = 'range';
      slider2.min = '0';
      slider2.max = '100';
      slider2.step = '1';
      slider2.value = String(Math.round(penAlpha * 100));
      slider2.addEventListener('input', () => { penAlpha = Math.max(0, Math.min(1, Number(slider2.value)/100)); updateUI(); });

      row2.appendChild(prev2);
      row2.appendChild(slider2);
      menu.appendChild(row2);

      menu.__mode = 'pen';
      menu.__lineW = line1;
      menu.__sliderW = slider1;
      menu.__lineA = line2;
      menu.__sliderA = slider2;
    }

    function clearAllDrawing(){
      STROKES.length = 0;
      REDO.length = 0;
      rebuildStrokeLayer();
      present();
      updateUI();
      persist();
    }

    function buildEraserMenu(){
      if (!menu) return;
      menu.innerHTML = '';

      const rowH = document.createElement('div');
      rowH.className = 'lia-heading-row';

      const lab = document.createElement('div');
      lab.className = 'lia-tool-heading';
      lab.textContent = 'Radierer';

      const btnTrash = document.createElement('button');
      btnTrash.type = 'button';
      btnTrash.className = 'lia-menu-icon-btn';
      btnTrash.setAttribute('aria-label', 'Alles löschen');

      setTrashIcon(btnTrash);
      btnTrash.addEventListener('click', () => clearAllDrawing());

      rowH.appendChild(lab);
      rowH.appendChild(btnTrash);
      menu.appendChild(rowH);

      const row = document.createElement('div');
      row.className = 'lia-row';

      const prev = document.createElement('div');
      prev.className = 'lia-preview';
      const line = document.createElement('div');
      line.className = 'lia-preview-line';
      prev.appendChild(line);

      const slider = document.createElement('input');
      slider.className = 'lia-slider';
      slider.type = 'range';
      slider.min = '4';
      slider.max = '40';
      slider.step = '1';
      slider.value = String(eraserWidth);
      slider.addEventListener('input', () => { eraserWidth = Number(slider.value); updateUI(); });

      row.appendChild(prev);
      row.appendChild(slider);
      menu.appendChild(row);

      menu.__mode = 'eraser';
      menu.__lineE = line;
      menu.__sliderE = slider;
    }

    function updateMenuVisuals(){
      if (!menu) return;

      if (menu.__mode === 'bg'){
        if (menu.__bgTiles){
          for (const t of menu.__bgTiles){
            const m = t.dataset.mode;
            t.dataset.active = (bgMode === m) ? '1' : '0';
            Object.assign(t.style, tileStyleFor(m));
          }
        }
        if (menu.__bgSlider && String(bgStep) !== menu.__bgSlider.value) menu.__bgSlider.value = String(bgStep);

        if (menu.__bgLinePrev){
          menu.__bgLinePrev.style.background = rgbaFromAny(getAccentColor(), 0.35);
          menu.__bgLinePrev.style.height = '2px';
        }
        return;
      }

      if (menu.__mode === 'pen'){
        menu.querySelectorAll('.lia-color-item').forEach((el, i) => {
          const ci = COLORS[i];
          el.style.background = (ci.key === 'auto') ? getAutoPen() : (ci.value || 'transparent');
          el.dataset.active = (i === colorIndex) ? '1' : '0';
        });

        const base = penBaseColor();
        const col = rgbaFromAny(base, penAlpha);

        if (menu.__lineW){
          menu.__lineW.style.background = col;
          menu.__lineW.style.height = Math.max(1, penWidth) + 'px';
        }
        if (menu.__lineA){
          menu.__lineA.style.background = col;
          menu.__lineA.style.height = '6px';
        }

        if (menu.__sliderW && String(penWidth) !== menu.__sliderW.value) menu.__sliderW.value = String(penWidth);
        if (menu.__sliderA){
          const v = String(Math.round(penAlpha*100));
          if (v !== menu.__sliderA.value) menu.__sliderA.value = v;
        }
      }

      if (menu.__mode === 'eraser'){
        const b = getBorderColor();
        if (menu.__lineE){
          menu.__lineE.style.background = b;
          menu.__lineE.style.height = Math.max(1, eraserWidth) + 'px';
        }
        if (menu.__sliderE && String(eraserWidth) !== menu.__sliderE.value) menu.__sliderE.value = String(eraserWidth);
      }
    }

    function doUndo(){
      if (!STROKES.length) return;
      const st = STROKES.pop();
      REDO.push(st);
      rebuildStrokeLayer();
      present();
      updateUI();
      persist();
    }
    function doRedo(){
      if (!REDO.length) return;
      const st = REDO.pop();
      STROKES.push(st);
      rebuildStrokeLayer();
      present();
      updateUI();
      persist();
    }

    function updateUI(){
      const col = penBaseColor();
      const accent = getAccentColor();

      if (btnUndo){
        btnUndo.disabled = (STROKES.length === 0);
        btnUndo.title = 'Rückgängig';
      }
      if (btnRedo){
        btnRedo.disabled = (REDO.length === 0);
        btnRedo.title = 'Wiederherstellen';
      }

      if (btnColor){
        btnColor.style.background = col;
        btnColor.dataset.active = (tool === 'pen') ? '1' : '0';
        btnColor.title = 'Stift';
      }
      if (btnEraser){
        btnEraser.dataset.active = (tool === 'eraser') ? '1' : '0';
        btnEraser.title = 'Radierer';
      }

      if (btnBg){
        const gridCol = rgbaFromAny(accent, 0.65);
        const s = 6;
        const t = 1.8;

        btnBg.style.backgroundColor = 'transparent';
        btnBg.style.backgroundImage =
          `linear-gradient(to right, ${gridCol} ${t}px, transparent ${t}px),
           linear-gradient(to bottom, ${gridCol} ${t}px, transparent ${t}px)`;
        btnBg.style.backgroundSize = `${s}px ${s}px`;
        btnBg.style.backgroundPosition = 'center';

        btnBg.dataset.active = (menuMode === 'bg') ? '1' : '0';
        btnBg.title = 'Hintergrund';
      }

      updateMenuVisuals();
    }

    function resizeToCss(){
      const dpr = window.devicePixelRatio || 1;
      const cssW = canvas.clientWidth;
      const cssH = canvas.clientHeight;
      const pxW = Math.max(1, Math.round(cssW * dpr));
      const pxH = Math.max(1, Math.round(cssH * dpr));

      canvas.width = pxW;
      canvas.height = pxH;

      strokeLayer.width = pxW;
      strokeLayer.height = pxH;

      rebuildStrokeLayer();
      present();
      updateUI();
      persist();
    }

    updateUI();
    resizeToCss();

    const ro = new ResizeObserver(() => resizeToCss());
    ro.observe(canvas);

    document.addEventListener('lia-canvas-theme', () => {
      updateUI();
      rebuildStrokeLayer();
      present();
    });

    if (btnUndo && !btnUndo.__bound){
      btnUndo.__bound = true;
      btnUndo.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); doUndo(); });
    }
    if (btnRedo && !btnRedo.__bound){
      btnRedo.__bound = true;
      btnRedo.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); doRedo(); });
    }

    // Resize corners (wie bei dir)
    function ensureCorners(){
      if (wrap.__cornersReady) return;
      wrap.__cornersReady = true;

      const bl = document.createElement('button');
      bl.type = 'button';
      bl.className = 'lia-resize-corner';
      bl.dataset.corner = 'bl';
      bl.setAttribute('aria-label','Zeichenfläche ziehen (links unten)');

      const br = document.createElement('button');
      br.type = 'button';
      br.className = 'lia-resize-corner';
      br.dataset.corner = 'br';
      br.setAttribute('aria-label','Zeichenfläche ziehen (rechts unten)');

      wrap.appendChild(bl);
      wrap.appendChild(br);

      const MIN_H = 130;
      const MAX_H = 9000;
      const MIN_W = 200;

      const clamp = (v,a,b) => Math.max(a, Math.min(b, v));

      function containerMaxWidth(){
        // Wichtig: NICHT wrap selbst (das schrumpft), sondern der Mount / sein Parent
        const mount = wrap.closest('.lia-canvas-mount');
        let host = null;

        if (mount){
          // mount ist 100% breit (oder flex:0 0 100%), daher ist DAS unsere Obergrenze
          host = mount;
        }else{
          host = wrap.parentElement || wrap;
        }

        let w = 0;
        try{ w = host.getBoundingClientRect().width; }catch(_){}

        // Fallback: wenn irgendwas "komisch klein" ist, nimm main als harte Obergrenze
        if ((!w || w < MIN_W) && document.querySelector('main')){
          try{ w = document.querySelector('main').getBoundingClientRect().width; }catch(_){}
        }

        return Math.max(MIN_W, Math.floor(w || 0));
      }


      function bindCorner(handle, side){
        let resizing = false;
        let startX = 0, startY = 0;
        let startW = 0, startH = 0;

        function down(e){
          e.preventDefault();
          e.stopPropagation();
          resizing = true;

          startW = wrap.getBoundingClientRect().width;
          startH = canvas.clientHeight || 150;
          startX = e.clientX;
          startY = e.clientY;

          try{ handle.setPointerCapture(e.pointerId); }catch(_){}
        }

        function move(e){
          if (!resizing) return;
          e.preventDefault();

          const dx = e.clientX - startX;
          const dy = e.clientY - startY;

          const nextH = clamp(startH + dy, MIN_H, MAX_H);
          canvas.style.height = nextH + 'px';

          const maxW = containerMaxWidth();
          const nextW = (side === 'br')
            ? clamp(startW + dx, MIN_W, maxW)
            : clamp(startW - dx, MIN_W, maxW);

          wrap.style.width = nextW + 'px';
        }

        function up(e){
          if (!resizing) return;
          resizing = false;
          try{ handle.releasePointerCapture(e.pointerId); }catch(_){}
          persist();
        }

        handle.addEventListener('pointerdown', down);
        handle.addEventListener('pointermove', move);
        handle.addEventListener('pointerup', up);
        handle.addEventListener('pointercancel', up);
      }

      bindCorner(br, 'br');
      bindCorner(bl, 'bl');
    }
    ensureCorners();

    // Menüs
    if (btnColor && menu){
      btnColor.addEventListener('click', (e) => {
        e.stopPropagation();
        tool = 'pen';
        menuMode = 'pen';

        const open = menu.dataset.open === '1';
        const same = (menu.__mode === 'pen');
        if (!open || !same) buildPenMenu();

        setMenuOpen(!open || !same);
        updateUI();
      });
    }

    if (btnEraser && menu){
      btnEraser.addEventListener('click', (e) => {
        e.stopPropagation();
        tool = 'eraser';
        menuMode = 'eraser';

        const open = menu.dataset.open === '1';
        const same = (menu.__mode === 'eraser');
        if (!open || !same) buildEraserMenu();

        setMenuOpen(!open || !same);
        updateUI();
      });
    }

    if (btnBg && menu){
      btnBg.addEventListener('click', (e) => {
        e.stopPropagation();
        menuMode = 'bg';

        const open = menu.dataset.open === '1';
        const same = (menu.__mode === 'bg');
        if (!open || !same) buildBgMenu();

        setMenuOpen(!open || !same);
        updateUI();
      });
    }

    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) setMenuOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    });

    // Pan/Zoom (wie bei dir)
    let spaceDown = false;
    window.addEventListener('keydown', (e) => { if (e.code === 'Space') spaceDown = true; });
    window.addEventListener('keyup',   (e) => { if (e.code === 'Space') spaceDown = false; });

    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    function clampScale(s){ return Math.max(VIEW.minScale, Math.min(VIEW.maxScale, s)); }

    function zoomAboutScreenPoint(factor, sx, sy){
      const oldS = VIEW.scale;
      const newS = clampScale(oldS * factor);
      if (newS === oldS) return;

      const w = screenToWorld(sx, sy);

      VIEW.scale = newS;
      VIEW.panX = sx - w.x * newS;
      VIEW.panY = sy - w.y * newS;

      rebuildStrokeLayer();
      present();
      persist();
    }

    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const r = canvas.getBoundingClientRect();
      const sx = e.clientX - r.left;
      const sy = e.clientY - r.top;
      const factor = Math.exp(-e.deltaY * 0.0012);
      zoomAboutScreenPoint(factor, sx, sy);
    }, { passive:false });

    // Pointer Handling
    const pointers = new Map();
    let mode = 'idle';
    let lastPanSX = 0, lastPanSY = 0;
    let pinchStart = null;

    function getScreenPos(evt){
      const r = canvas.getBoundingClientRect();
      return { sx: evt.clientX - r.left, sy: evt.clientY - r.top };
    }

    function dist(a,b){
      const dx = a.sx - b.sx, dy = a.sy - b.sy;
      return Math.hypot(dx,dy);
    }
    function mid(a,b){
      return { sx: (a.sx+b.sx)/2, sy: (a.sy+b.sy)/2 };
    }

    function startStrokeAtScreen(sx,sy){
      const w = screenToWorld(sx,sy);

      const st = {
        tool,
        color: penBaseColor(),
        alpha: penAlpha,
        width: (tool === 'eraser') ? eraserWidth : penWidth,
        points: [ {x:w.x, y:w.y} ]
      };
      STROKES.push(st);
      currentStroke = st;

      REDO.length = 0;

      setViewportTransformOn(sctx);
      applyStrokeStyleTo(sctx, st);
      sctx.beginPath();
      sctx.moveTo(w.x, w.y);

      updateUI();
      persist();
    }

    function extendStrokeToScreen(sx,sy){
      if (!currentStroke) return;
      const w = screenToWorld(sx,sy);
      currentStroke.points.push({x:w.x,y:w.y});

      sctx.lineTo(w.x, w.y);
      sctx.stroke();

      present();
      persist();
    }

    function endStroke(){ currentStroke = null; }

    canvas.addEventListener('pointerdown', (e) => {
      if (e.target && e.target.classList && e.target.classList.contains('lia-resize-corner')) return;

      const p = getScreenPos(e);
      pointers.set(e.pointerId, p);
      canvas.setPointerCapture(e.pointerId);

      if (pointers.size === 2){
        if (mode === 'draw') endStroke();

        const arr = Array.from(pointers.values());
        const m = mid(arr[0], arr[1]);
        const d = Math.max(1e-6, dist(arr[0], arr[1]));
        const worldMid = screenToWorld(m.sx, m.sy);

        pinchStart = { dist:d, worldMid, startScale:VIEW.scale };
        mode = 'pinch';
        return;
      }

      const isRightMouse = (e.pointerType === 'mouse' && e.button === 2);
      const isMiddleMouse= (e.pointerType === 'mouse' && e.button === 1);
      const wantPan = isRightMouse || isMiddleMouse || (e.pointerType === 'mouse' && spaceDown);

      if (wantPan){
        mode = 'pan';
        lastPanSX = p.sx;
        lastPanSY = p.sy;
        canvas.style.cursor = 'grab';
        return;
      }

      mode = 'draw';
      canvas.style.cursor = 'crosshair';
      startStrokeAtScreen(p.sx, p.sy);
    });

    canvas.addEventListener('pointermove', (e) => {
      if (!pointers.has(e.pointerId)) return;

      const p = getScreenPos(e);
      pointers.set(e.pointerId, p);

      if (mode === 'pinch' && pointers.size >= 2 && pinchStart){
        const arr = Array.from(pointers.values()).slice(0,2);
        const m = mid(arr[0], arr[1]);
        const d = Math.max(1e-6, dist(arr[0], arr[1]));
        const factor = d / pinchStart.dist;

        const newScale = clampScale(pinchStart.startScale * factor);
        VIEW.scale = newScale;
        VIEW.panX = m.sx - pinchStart.worldMid.x * newScale;
        VIEW.panY = m.sy - pinchStart.worldMid.y * newScale;

        rebuildStrokeLayer();
        present();
        persist();
        return;
      }

      if (mode === 'pan'){
        const dx = p.sx - lastPanSX;
        const dy = p.sy - lastPanSY;
        lastPanSX = p.sx;
        lastPanSY = p.sy;
        VIEW.panX += dx;
        VIEW.panY += dy;

        rebuildStrokeLayer();
        present();
        persist();
        return;
      }

      if (mode === 'draw'){
        extendStrokeToScreen(p.sx, p.sy);
      }
    });

    function stopPointer(e){
      if (pointers.has(e.pointerId)) pointers.delete(e.pointerId);
      try{ canvas.releasePointerCapture(e.pointerId); }catch(_){}

      if (mode === 'pinch'){
        if (pointers.size < 2){
          pinchStart = null;
          mode = 'idle';
        }
        return;
      }

      if (mode === 'pan'){
        mode = 'idle';
        canvas.style.cursor = 'crosshair';
        return;
      }

      if (mode === 'draw'){
        endStroke();
        mode = 'idle';
        updateUI();
        persist();
        return;
      }
    }

    canvas.addEventListener('pointerup', stopPointer);
    canvas.addEventListener('pointercancel', stopPointer);
    canvas.addEventListener('pointerleave', () => {
      if (mode === 'draw') endStroke();
      if (mode !== 'pinch') mode = 'idle';
      canvas.style.cursor = 'crosshair';
      updateUI();
      persist();
    });
  }

  function initAll(){
    document.querySelectorAll('.lia-draw-wrap canvas.lia-draw:not([data-ready])').forEach(c => {
      c.setAttribute('data-ready','1');
      setupCanvas(c);
    });
  }

  // init: wenn Canvas markup in mount erscheint
  const obs = new MutationObserver(() => initAll());
  obs.observe(document.body, { childList:true, subtree:true });

  // ---------------------------------------------------------
  // LAUNCHER: Toggle (Mount ist im Makro vorhanden!)
  // ---------------------------------------------------------
  if (!window.__liaCanvasLauncherBound){
    window.__liaCanvasLauncherBound = true;

    document.addEventListener('click', (e) => {
      const btn = (e.target && e.target.closest) ? e.target.closest('.lia-canvas-launch') : null;
      if (!btn) return;

      const anchor = btn.closest('.lia-canvas-anchor');
      if (!anchor) return;

      const uid = anchor.getAttribute('data-uid') || '';
      const mount = document.getElementById('lia-canvas-mount-' + uid);
      if (!mount) return;

      // Wenn wir in einem flex-nowrap Wrapper sitzen (z.B. bei [[..]]), erzwingen wir Umbruch
      try{
        const parent = mount.parentElement;
        if (parent){
          const cs = getComputedStyle(parent);
          if (cs && String(cs.display).includes('flex') && String(cs.flexWrap) === 'nowrap'){
            parent.style.flexWrap = 'wrap';
          }
        }
      }catch(_){}


      const isOpen = mount.dataset.open === '1';

      if (!isOpen){
        mount.dataset.open = '1';

        if (!mount.querySelector('.lia-draw-wrap')){
          mount.innerHTML = canvasMarkup();
          initAll();
        }
      }else{
        mount.dataset.open = '0';
      }
    }, true);
  }
})();






































  // =========================
  // TAFEL
  // TAFEL
  // TAFEL
  // TAFEL
  // TAFEL
  // TAFEL
  // TAFEL
  // TAFEL
  // TAFEL
  // TAFEL
  // TAFEL
  // =========================












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
    lastSettingsRaw: null
  };

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
      --lia-tff-maxw: 99vw;         /* max 99% */
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
    const maxTop = 140;                 // "oben"-Band
    const maxLeft = vp.w * 0.55;        // linke Hälfte

    const yMin = anchorRect ? (anchorRect.top - 28) : 0;
    const yMax = anchorRect ? (anchorRect.bottom + 28) : maxTop;

    const els = Array.from(ROOT_DOC.querySelectorAll("button,[role='button'],a"));

    const out = [];
    for (const el of els){
      if (!el || el.id === BTN_ID) continue;

      const r = getVisibleRect(el);
      if (!r) continue;

      // Top-Band + eher links
      if (r.top > maxTop) continue;
      if (r.left > maxLeft) continue;

      // gleiche Zeile wie Anchor (falls vorhanden)
      const midY = r.top + r.height/2;
      if (anchorRect){
        if (midY < yMin || midY > yMax) continue;
      }

      // keine riesigen Container
      if (r.width > 180 || r.height > 90) continue;

      if (!isToolbarLike(el)) continue;

      out.push({ el, r });
    }
    return out;
  }

  function positionOverlayButton(){
    const btn = ROOT_DOC.getElementById(BTN_ID);
    const overlay = ROOT_DOC.getElementById(OVERLAY_ID);
    if (!btn || !overlay) return;

    // Nur wenn Button sichtbar sein soll (presentation)
    if (btn.style.display === "none") return;

    const vp = getViewport();
    const pad = 8;
    const gap = 8; // Abstand rechts neben dem rechtesten Button

    // Button echte Größe nehmen (nicht "size" hartkodieren!)
    const br = btn.getBoundingClientRect();
    const bw = (br && br.width)  ? br.width  : 34;
    const bh = (br && br.height) ? br.height : 34;

    const toc = findTOCButton();
    const tocR = getVisibleRect(toc);

    // Anchor: TOC, sonst Top-Left
    const anchor = tocR || { left: pad, top: pad, right: pad + bw, bottom: pad + bh, height: bh };

    // Sammle Buttons in derselben "Toolbar-Zeile" (inkl. Textmarker-Overlay)
    const peers = collectTopLeftRowButtons(anchor);

    // Rechtestes Ende bestimmen (TOC + alle Peers)
    let rightEdge = anchor.right;
    for (const p of peers){
      rightEdge = Math.max(rightEdge, p.r.right);
    }

    // Vertikal sauber an Anchor zentrieren
    const targetTop = anchor.top + ((anchor.height || bh) - bh) / 2;

    let left = rightEdge + gap;
    let top  = targetTop;

    // clamp
    left = clamp(left, pad, vp.w - bw - pad);
    top  = clamp(top,  pad, vp.h - bh - pad);

    // VisualViewport offset
    overlay.style.left = `${Math.round(vp.ox)}px`;
    overlay.style.top  = `${Math.round(vp.oy)}px`;

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
  function setPresentationOnlyVisibility(mode){
    const isPres = (mode === "presentation");
    const btn = ROOT_DOC.getElementById(BTN_ID);
    const panel = ROOT_DOC.getElementById(PANEL_ID);
    if (btn) btn.style.display = isPres ? "inline-flex" : "none";
    if (!isPres && panel){
      ROOT_DOC.body.classList.remove("lia-tff-panel-open");
      panel.style.display = "none";
    }
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

        // 1) Modus
        const settingsRaw = safeGetSettingsRaw();
        const mode = detectMode();
        applyModeAttr(mode);

        // 2) Theme-Farbe
        syncAccent();

        // 3) UI sicherstellen + sichtbar nur in Presentation
        ensureUI();
        setPresentationOnlyVisibility(mode);

        // 4) Position (Button + Panel)
        positionOverlayButton();

        // 5) Font-Logik: nur wenn Mode/Settings wechseln
        if (mode !== I.lastMode || settingsRaw !== I.lastSettingsRaw){
          applyFontLogic(mode);
          I.lastMode = mode;
          I.lastSettingsRaw = settingsRaw;
        }

        // 6) Slider sync + Panel position
        syncSliderToCurrent();
        positionPanel();

        // 7) Wiring
        wireOnce();

      } finally {
        I.ticking = false;
      }
    });
  }

  // Beobachter: Toolbar/DOM kommt manchmal später (Nightly)
  try{
    const mo = new MutationObserver(() => tick());
    mo.observe(ROOT_DOC.documentElement, { childList:true, subtree:true });
  }catch(e){}

  try{
    const mo2 = new MutationObserver(() => tick());
    mo2.observe(CONTENT_DOC.documentElement, { childList:true, subtree:true });
  }catch(e){}

  ROOT_WIN.addEventListener("storage", function(e){
    if (!e) return;
    if (e.key === SETTINGS_KEY || e.key === FONT_KEY) tick();
  });

  tick();
  ROOT_WIN.setInterval(() => { if (I.__alive) tick(); }, 350);

})();













  // =========================
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // =========================





(function () {

  // =========================================================
  // Root/Content + Run-Once (import-safe)
  // =========================================================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT_WIN    = getRootWindow();
  const ROOT_DOC    = ROOT_WIN.document;
  const CONTENT_WIN = window;
  const CONTENT_DOC = document;

  const REGKEY = "__LIA_DYNFLEX_V6_8__";
  ROOT_WIN[REGKEY] = ROOT_WIN[REGKEY] || { docs: {} };

  const DOC_KEY_ATTR = "data-dynflex-doc";
  let docKey = CONTENT_DOC.documentElement.getAttribute(DOC_KEY_ATTR);
  if (!docKey){
    docKey = (CONTENT_DOC.baseURI || CONTENT_WIN.location.href || "dynflex") + "::" + Math.random().toString(36).slice(2);
    CONTENT_DOC.documentElement.setAttribute(DOC_KEY_ATTR, docKey);
  }
  if (ROOT_WIN[REGKEY].docs[docKey]) return;
  ROOT_WIN[REGKEY].docs[docKey] = true;

  // =========================================================
  // CSS Injection (import-robust)
  // =========================================================
  const STYLE_ID = "lia-dynflex-style-v6-8";
  const CSS = `
.dynFlex{
  --dyn-gap:  20px;
  --dyn-hit:  22px;
  --dyn-accent: var(--dynflex-accent, #0b5fff);
  --dyn-basis: 25%;

  display: flex !important;
  flex-wrap: wrap !important;
  align-items: flex-start !important;
  gap: var(--dyn-gap) !important;
  overflow: visible !important;
}

/* Flex-ITEM = direktes Kind im Container (kann Wrapper oder flex-child selbst sein) */
.dynFlex > .dynFlexItem{
  position: relative !important;
  box-sizing: border-box !important;
  min-width: 0 !important;

  flex: 0 0 var(--w, var(--dyn-basis)) !important;
  max-width: var(--w, var(--dyn-basis)) !important;

  padding: 0.65rem 1.25rem 0.65rem 0.85rem !important;
  border-left: 1px solid var(--dyn-accent) !important;
  border-radius: 10px !important;
  background: rgba(127,127,127,0.08) !important;

  overflow: visible !important;
}

/* Wenn authored .flex-child NICHT das direkte Kind ist (Wrapper-Fall),
   neutralisieren wir Box-Styling innen, damit es nicht doppelt aussieht. */
.dynFlex > .dynFlexItem .flex-child{
  padding: 0 !important;
  border-left: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
}

/* >>> Leerzeilen-Fix: automatisch erzeugte Unter-Blöcke im flex-child */
.flex-child > [data-dynflex-block]{
  display: block !important;
  margin: 0 0 0.9rem 0 !important;
}
.flex-child > [data-dynflex-block]:last-child{
  margin-bottom: 0 !important;
}





/* Drag: keine Textmarkierung */
.dynFlex.dynFlexDragging,
.dynFlex.dynFlexDragging *{
  user-select: none !important;
}

/* Resizer am ITEM */
.dynFlex > .dynFlexItem > .dynFlexResizer{
  position: absolute !important;
  top: 0 !important;
  bottom: 0 !important;

  left: 100% !important;
  width: var(--dyn-hit) !important;
  margin-left: calc(var(--dyn-gap) / 2 - (var(--dyn-hit) / 2)) !important;

  cursor: ew-resize !important;
  touch-action: none !important;
  background: transparent !important;
  z-index: 9999 !important;
}

/* End-Resizer: gleicher Abstand wie die anderen */
.dynFlex > .dynFlexItem > .dynFlexResizer.dynFlexResizerEnd{
  left: auto !important;
  right: calc(-1 * (var(--dyn-gap) / 2) - (var(--dyn-hit) / 2)) !important;
  margin-left: 0 !important;
}

.dynFlex > .dynFlexItem > .dynFlexResizer::before{
  content: "" !important;
  position: absolute !important;
  left: 50% !important;
  top: 0 !important;
  bottom: 0 !important;
  width: 1px !important;
  transform: translateX(-50%) !important;
  background: var(--dyn-accent) !important;
  border-radius: 999px !important;
  opacity: 0.95 !important;
}

.dynFlex > .dynFlexItem > .dynFlexResizer:hover::before{
  width: 3px !important;
}

@media (max-width: 420px){
  .dynFlex{ --dyn-basis: 100% !important; }
}
`.trim();

  function ensureStyle(doc){
    try{
      if (!doc || !doc.documentElement) return;
      if (doc.getElementById(STYLE_ID)) return;
      const st = doc.createElement("style");
      st.id = STYLE_ID;
      st.textContent = CSS;
      (doc.head || doc.documentElement).appendChild(st);
    }catch(e){}
  }

  // =========================================================
  // Theme Accent Update (ROOT + CONTENT)
  // =========================================================
  function pickAccentFrom(doc){
    try{
      const win = doc.defaultView || window;
      const cs = win.getComputedStyle(doc.documentElement);
      const vars = ["--lia-accent","--lia-primary","--lia-color-primary","--primary","--color-primary","--accent-color"];
      for (const v of vars){
        const val = cs.getPropertyValue(v).trim();
        if (val) return val;
      }
      const a = doc.querySelector("a");
      if (a){
        const c = win.getComputedStyle(a).color;
        if (c && c !== "rgba(0, 0, 0, 0)") return c;
      }
      const b = doc.querySelector(".lia-btn");
      if (b){
        const bg = win.getComputedStyle(b).backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)") return bg;
      }
    }catch(e){}
    return "";
  }

  let lastAccent = "";
  function updateAccent(force){
    const acc = pickAccentFrom(ROOT_DOC) || pickAccentFrom(CONTENT_DOC) || "#0b5fff";
    if (force || acc !== lastAccent){
      lastAccent = acc;
      try { ROOT_DOC.documentElement.style.setProperty("--dynflex-accent", acc); } catch(e){}
      try { CONTENT_DOC.documentElement.style.setProperty("--dynflex-accent", acc); } catch(e){}
    }
  }

  // =========================================================
  // Leerzeilen -> echte Blocks innerhalb .flex-child
  // =========================================================
  function blockifyFlexChild(fc){
    try{
      if (!fc || fc.nodeType !== 1) return;
      if (fc.dataset.dynflexBlockified === "1") return;

      // Wenn LiaScript schon Inputs/Buttons gerendert hat, fassen wir NICHT mehr an
      if (fc.querySelector("input, textarea, select, button, .lia-btn, .lia-quiz")) return;

      // Ohne [[...]] macht Split keinen Sinn
      const html = fc.innerHTML || "";
      if (html.indexOf("[[") === -1) { fc.dataset.dynflexBlockified = "1"; return; }

      // Split auf Leerzeilen (mind. eine echte Leerzeile = Absatz in Markdown)
      const parts = html.split(/\n[ \t]*\n+/);
      if (!parts || parts.length <= 1) { fc.dataset.dynflexBlockified = "1"; return; }

      // Nur wenn wirklich "inhaltliche" Teile existieren
      const cleaned = parts.filter(p => (p.replace(/\s+/g,"").length > 0));
      if (cleaned.length <= 1) { fc.dataset.dynflexBlockified = "1"; return; }

      // Neu aufbauen: pro Absatz ein eigener Block (ohne Zusatz-Klassen, nur data-Attr)
      fc.innerHTML = "";
      for (const part of cleaned){
        const d = CONTENT_DOC.createElement("div");
        d.setAttribute("data-dynflex-block", "1");
        d.innerHTML = part;
        fc.appendChild(d);
      }

      fc.dataset.dynflexBlockified = "1";
    }catch(e){}
  }

  function blockifyAll(doc){
    try{
      doc.querySelectorAll(".dynFlex .flex-child").forEach(blockifyFlexChild);
    }catch(e){}
  }

  // =========================================================
  // DynFlex Core
  // =========================================================
  const clamp = (x,a,b) => Math.min(b, Math.max(a,x));

  function parsePct(x, fallback){
    if (x == null) return fallback;
    const s = String(x).trim();
    if (!s) return fallback;
    const n = Number(s.replace("%",""));
    return Number.isFinite(n) ? n : fallback;
  }

  function getItemPct(container, item){
    const w = (item.style.getPropertyValue("--w") || "").trim();
    if (w.endsWith("%")){
      const n = parseFloat(w);
      if (Number.isFinite(n)) return n;
    }
    const cw = container.getBoundingClientRect().width || 1;
    const iw = item.getBoundingClientRect().width;
    return (iw / cw) * 100;
  }

  function setItemPct(item, pct){
    item.style.setProperty("--w", pct.toFixed(2) + "%");
  }

  function getStoreKey(container){
    const k = container.getAttribute("data-store");
    return k ? ("dynFlexWidths::" + k) : null;
  }

  function persist(container, items){
    const lsKey = getStoreKey(container);
    if (!lsKey) return;
    const arr = items.map(it => (it.style.getPropertyValue("--w") || "").trim() || "");
    try { localStorage.setItem(lsKey, JSON.stringify(arr)); } catch(e){}
  }

  function restore(container, items){
    const lsKey = getStoreKey(container);
    if (!lsKey) return;

    const anySet = items.some(it => (it.style.getPropertyValue("--w") || "").trim());
    if (anySet) return;

    let arr = null;
    try { arr = JSON.parse(localStorage.getItem(lsKey) || "null"); } catch(e){ arr = null; }
    if (!Array.isArray(arr)) return;
    if (arr.length !== items.length) return;

    items.forEach((it, i) => {
      const v = String(arr[i] || "").trim();
      if (v.endsWith("%")) it.style.setProperty("--w", v);
    });
  }

  // Items deterministisch aus .flex-child ableiten (wrapper-robust)
  function getItemsFromFlexChildren(container){
    const flexChildren = Array.from(container.querySelectorAll(".flex-child"))
      .filter(fc => fc.closest(".dynFlex") === container);

    if (!flexChildren.length) return [];

    const items = [];
    for (const fc of flexChildren){
      let it = fc;
      while (it && it.parentElement && it.parentElement !== container){
        it = it.parentElement;
      }
      if (it && it.parentElement === container){
        if (!items.includes(it)) items.push(it);
      }
    }
    return items;
  }

  function ensureResizerBound(rz, container, item, items, minPct, maxPct){
    if (rz.dataset.bound === "1") return;
    rz.dataset.bound = "1";

    let dragging = false;
    let startX = 0;
    let startW = 0;

    const onDown = (e) => {
      dragging = true;
      container.classList.add("dynFlexDragging");
      startX = e.clientX;
      startW = getItemPct(container, item);
      rz.setPointerCapture?.(e.pointerId);
      e.preventDefault();
    };

    const onMove = (e) => {
      if (!dragging) return;
      const cw = container.getBoundingClientRect().width || 1;
      const dx = e.clientX - startX;
      const dPct = (dx / cw) * 100;

      const newW = clamp(startW + dPct, minPct, maxPct);
      setItemPct(item, newW);
      persist(container, items);
      e.preventDefault();
    };

    const onUp = (e) => {
      dragging = false;
      container.classList.remove("dynFlexDragging");
      try { rz.releasePointerCapture?.(e.pointerId); } catch(_){}
      e.preventDefault();
    };

    rz.addEventListener("pointerdown", onDown);
    rz.addEventListener("pointermove", onMove);
    rz.addEventListener("pointerup", onUp);
    rz.addEventListener("pointercancel", onUp);
  }

  function initContainer(container){
    // config
    const gap   = container.getAttribute("data-gap");
    const hit   = container.getAttribute("data-hit");
    const basis = parsePct(container.getAttribute("data-basis"), 25);

    if (gap) container.style.setProperty("--dyn-gap", gap.trim().endsWith("px") ? gap.trim() : (gap.trim() + "px"));
    if (hit) container.style.setProperty("--dyn-hit", hit.trim().endsWith("px") ? hit.trim() : (hit.trim() + "px"));
    container.style.setProperty("--dyn-basis", basis + "%");

    const minPct = parsePct(container.getAttribute("data-min"), 10);
    const maxPct = parsePct(container.getAttribute("data-max"), 100);

    const items = getItemsFromFlexChildren(container);
    if (!items.length) return;

    items.forEach(it => it.classList.add("dynFlexItem"));
    restore(container, items);

    for (let i = 0; i < items.length; i++){
      const item = items[i];

      let rz = item.querySelector(":scope > .dynFlexResizer");
      if (!rz){
        rz = document.createElement("div");
        rz.className = "dynFlexResizer";
        rz.setAttribute("aria-hidden", "true");
        item.appendChild(rz);
      }

      if (i === items.length - 1) rz.classList.add("dynFlexResizerEnd");
      else rz.classList.remove("dynFlexResizerEnd");

      ensureResizerBound(rz, container, item, items, minPct, maxPct);
    }
  }

  function scanInDoc(doc){
    try{
      // 1) Leerzeilen zuerst in Blocks übersetzen (wichtig für mehrere Prüfen-Buttons)
      blockifyAll(doc);

      // 2) DynFlex initialisieren
      doc.querySelectorAll(".dynFlex").forEach(initContainer);
    }catch(e){}
  }

  // =========================================================
  // ensure/scan (throttled) + observers
  // =========================================================
  let scanScheduled = false;

  function scan(){
    scanScheduled = false;
    ensureStyle(ROOT_DOC);
    ensureStyle(CONTENT_DOC);
    updateAccent(false);
    scanInDoc(ROOT_DOC);
    scanInDoc(CONTENT_DOC);
  }

  function scheduleScan(){
    if (scanScheduled) return;
    scanScheduled = true;
    requestAnimationFrame(scan);
  }

  // Initial: sehr früh + mehrere Nachläufe
  ensureStyle(ROOT_DOC);
  ensureStyle(CONTENT_DOC);
  updateAccent(true);

  // einmal sofort + dann noch gestaffelt
  scan();
  scheduleScan();
  setTimeout(scheduleScan, 30);
  setTimeout(scheduleScan, 120);
  setTimeout(scheduleScan, 320);
  setTimeout(scheduleScan, 900);

  // Theme changes
  const themeMO = new MutationObserver(() => updateAccent(false));
  try{ themeMO.observe(ROOT_DOC.documentElement,    { attributes: true, attributeFilter: ["class","style","data-theme","data-mode","data-color-scheme"] }); }catch(e){}
  try{ themeMO.observe(CONTENT_DOC.documentElement, { attributes: true, attributeFilter: ["class","style","data-theme","data-mode","data-color-scheme"] }); }catch(e){}

  // OS scheme
  try{
    const mql = ROOT_WIN.matchMedia("(prefers-color-scheme: dark)");
    if (mql && mql.addEventListener) mql.addEventListener("change", () => updateAccent(true));
    else if (mql && mql.addListener) mql.addListener(() => updateAccent(true));
  }catch(e){}

  // DOM changes (throttled)
  const mo = new MutationObserver((muts) => {
    for (const m of muts){
      if (m.addedNodes && m.addedNodes.length){
        scheduleScan();
        break;
      }
    }
  });
  try{ mo.observe(CONTENT_DOC.documentElement, { childList: true, subtree: true }); }catch(e){}
  try{ mo.observe(ROOT_DOC.documentElement,    { childList: true, subtree: true }); }catch(e){}

})();























  // =========================
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // =========================














(function(){
  // ---------------------------------------------------------
  // Globaler Boot (IMPORT-SAFE): nur einmal im ROOT anlegen
  // ---------------------------------------------------------
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }
  const ROOT = getRootWindow();

  const KEY = "__ORTHOGRAPHY_EXPORT_V1__";
  if (ROOT[KEY]) return; // schon da

  const microtask = (fn) => (window.queueMicrotask ? queueMicrotask(fn) : Promise.resolve().then(fn));

  const MOD = {
    state: {},       // uid -> { solved, tries, start, solution, gate }
    fixers: {},      // uid -> repair()
    listener: false,
    observer: null,
    scheduled: false,

    norm: (s) => String(s||"").toLocaleLowerCase().replace(/\s+/g,""),

    schedule(){
      if (MOD.scheduled) return;
      MOD.scheduled = true;

      const run = () => {
        MOD.scheduled = false;
        Object.keys(MOD.fixers).forEach(k=>{
          try { MOD.fixers[k](); } catch(e){}
        });
      };

      microtask(run);
      try { requestAnimationFrame(run); } catch(e){}
      setTimeout(run, 0);
      setTimeout(run, 60);
      setTimeout(run, 180);
    },

    startGlobal(){
      if (MOD.listener) return;
      MOD.listener = true;

      document.addEventListener('click', () => MOD.schedule(), true);

      const startObserver = () => {
        if (MOD.observer) return;
        const target = document.body || document.documentElement;
        if (!target) return;

        MOD.observer = new MutationObserver(() => MOD.schedule());
        MOD.observer.observe(target, { childList: true, subtree: true });
      };

      startObserver();
      setTimeout(startObserver, 0);
      setTimeout(startObserver, 50);
    },

    parseGate(raw){
      const s = String(raw || "").trim().toLowerCase();
      if (s === "false" || s === "0" || s === "off" || s === "no") return { mode: "off", n: 0 };
      const n = parseInt(s, 10);
      if (Number.isFinite(n) && n > 0) return { mode: "attempts", n };
      return { mode: "on", n: 0 };
    },

    // ---------------------------------------------------------
    // Registrierung einer Macro-Instanz
    // ---------------------------------------------------------
    register(cfg){
      const uid     = cfg.uid;
      const selIn   = cfg.selInput;
      const idReset = cfg.idReset;
      const idSol   = cfg.idSol;
      const gateRaw = cfg.gateRaw;

      // state
      MOD.state[uid] = MOD.state[uid] || {
        solved: false,
        tries: 0,
        start: "",
        solution: "",
        gate: MOD.parseGate(gateRaw)
      };
      const S = MOD.state[uid];
      S.gate = MOD.parseGate(gateRaw);

      // dom getters (immer frisch wegen Re-Renders)
      const getInput = () => document.querySelector(selIn);
      const getReset = () => document.getElementById(idReset);
      const getSol   = () => document.getElementById(idSol);
      const getWrap  = () => {
        const input = getInput();
        return input ? input.closest('.orthography-wrap') : null;
      };

      // initiales Einlesen (quote-sicher via textContent)
      const input0 = getInput();
      const sol0   = getSol();
      if (input0 && !S.start)    S.start    = input0.getAttribute('value') || input0.defaultValue || "";
      if (sol0   && !S.solution) S.solution = (sol0.textContent || "");

      const clearClasses = (node) => {
        if(!node || !node.classList) return;
        [...node.classList].forEach(c => {
          if (/(correct|wrong|success|error|checked|valid|invalid|resolved|solved)/i.test(c)) {
            node.classList.remove(c);
          }
        });
      };

      const setInputValue = (v, emitEvents) => {
        const input = getInput();
        if(!input) return;
        input.value = v;
        if (emitEvents) {
          input.dispatchEvent(new Event('input',  { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
        }
      };

      const hardenSolution = (input) => {
        if(!input) return;
        input.defaultValue = S.solution;
        try { input.setAttribute('value', S.solution); } catch(e){}
        input.removeAttribute('aria-invalid');
      };

      // SILENT → verhindert Flicker / Lia-Trigger
      const silentForceSolution = () => {
        const input = getInput();
        if(!input) return;
        input.value = S.solution;
        hardenSolution(input);
      };

      const findQuiz = () => {
        const wrap = getWrap();
        if(!wrap) return null;

        // schneller Direkt-Link, wenn Lia aria-labelledby nutzt
        if (wrap.id) {
          const answers = document.querySelector('.lia-quiz__answers[aria-labelledby="' + wrap.id + '"]');
          if (answers) {
            const quiz = answers.closest('.lia-quiz');
            if (quiz) return quiz;
          }
        }

        // robust: TreeWalker bis zur nächsten orthography-wrap
        const root = document.body || document.documentElement;
        if (!root || !root.contains(wrap) || !document.createTreeWalker) return null;

        const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
        walker.currentNode = wrap;

        let node;
        while ((node = walker.nextNode())) {
          if (node !== wrap && node.classList && node.classList.contains('orthography-wrap')) break;
          if (node.classList && node.classList.contains('lia-quiz')) return node;
        }
        return null;
      };

      const applyGate = (control) => {
        if(!control) return;
        const resolve = control.querySelector('.lia-quiz__resolve');
        if(!resolve) return;

        if (S.gate.mode === "off") {
          resolve.disabled = true;
          resolve.style.display = "none";
          resolve.setAttribute("aria-hidden", "true");
          return;
        }

        if (S.gate.mode === "attempts") {
          if (S.tries >= S.gate.n) {
            resolve.style.display = "";
            resolve.disabled = false;
            resolve.removeAttribute("aria-hidden");
          } else {
            resolve.disabled = true;
            resolve.style.display = "none";
            resolve.setAttribute("aria-hidden", "true");
          }
          return;
        }

        resolve.style.display = "";
        resolve.disabled = false;
        resolve.removeAttribute("aria-hidden");
      };

      const placeReset = (control) => {
        const btn = getReset();
        if(!control || !btn) return;

        if (btn.parentElement !== control || btn !== control.lastElementChild) {
          control.appendChild(btn);
        }
        btn.classList.add('ortho-reset-inline');
        btn.style.marginBottom = "0";
      };

      const lockSolution = () => {
        S.solved = true;
        silentForceSolution();
        const wrap = getWrap();
        if (wrap) wrap.dataset.orthoSolved = "1";
      };

      // gelöst bleibt wirklich unverändert → silent prepaint repair
      const ensureSolvedSticky = () => {
        const input = getInput();
        if(!input) return;

        const wrap = getWrap();
        if (wrap) {
          wrap.dataset.orthoTries  = String(S.tries);
          wrap.dataset.orthoSolved = S.solved ? "1" : "0";
        }

        if (S.solved) {
          if (MOD.norm(input.value) !== MOD.norm(S.solution)) {
            silentForceSolution();
          } else {
            hardenSolution(input);
          }
        }
      };

      // Reset: tries NICHT verändern!
      const doReset = () => {
        if (S.solved) {
          lockSolution();
        } else {
          setInputValue(S.start, true);
          const input = getInput();
          if (input) {
            input.defaultValue = S.start;
            try { input.setAttribute('value', S.start); } catch(e){}
            input.removeAttribute('aria-invalid');
          }
        }

        clearClasses(getInput());
        clearClasses(findQuiz());

        const quiz = findQuiz();
        if (quiz) {
          const control = quiz.querySelector('.lia-quiz__control');
          applyGate(control);
          placeReset(control);
        }
      };

      const bindReset = () => {
        const btn = getReset();
        if(!btn) return;
        if (btn.dataset.orthoResetBound === "1") return;
        btn.dataset.orthoResetBound = "1";

        const handler = (ev) => {
          if(ev){
            ev.preventDefault();
            ev.stopPropagation();
            if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
          }
          doReset();
        };

        btn.addEventListener('click', handler, true);
        btn.addEventListener('keydown', (ev)=>{
          if (ev.key === 'Enter' || ev.key === ' ') handler(ev);
        }, true);
      };

      const bindControl = () => {
        const quiz = findQuiz();
        if(!quiz) return;

        const control = quiz.querySelector('.lia-quiz__control');
        if(!control) return;

        applyGate(control);
        placeReset(control);
        bindReset();

        const ckey = "orthoCtlBound_" + uid;
        if (control.dataset[ckey] === "1") return;
        control.dataset[ckey] = "1";

        control.addEventListener('click', function(ev){
          // Reset-Klick ignorieren
          const btn = getReset();
          if (btn && ev.target && ev.target.closest && ev.target.closest('#' + btn.id)) return;

          const inputBefore = (getInput() ? getInput().value : "");
          const wasCorrect  = (MOD.norm(inputBefore) === MOD.norm(S.solution)); // VOR Lia merken

          const check = ev.target && ev.target.closest ? ev.target.closest('.lia-quiz__check') : null;
          if (check) {
            if (S.gate.mode === "attempts") {
              setTimeout(function(){
                S.tries += 1;
                applyGate(control);
                placeReset(control);
                ensureSolvedSticky();
              }, 0);
            }

            if (wasCorrect) {
              setTimeout(lockSolution, 0);
              setTimeout(lockSolution, 30);
            } else {
              setTimeout(function(){
                const input = getInput();
                if (!input) return;
                // wenn Lia ungewollt Starttext reindrückt: silent restore
                if (!S.solved && input.value === S.start && inputBefore !== S.start) {
                  setInputValue(inputBefore, false);
                }
              }, 30);
              setTimeout(ensureSolvedSticky, 80);
            }
            return;
          }

          const resolve = ev.target && ev.target.closest ? ev.target.closest('.lia-quiz__resolve') : null;
          if (resolve) {
            if (resolve.disabled || resolve.style.display === "none") return;
            setTimeout(lockSolution, 0);
            setTimeout(lockSolution, 30);
          }
        }, true);
      };

      const repair = () => {
        // Lösung sicher aus DOM nachladen (falls neu gerendert)
        const sol = getSol();
        if (sol) S.solution = (sol.textContent || S.solution);

        // Start nur setzen, wenn noch leer
        const input = getInput();
        if (input && !S.start) S.start = input.getAttribute('value') || input.defaultValue || "";

        bindControl();
        ensureSolvedSticky();
      };

      // fixer registrieren + sofort reparieren
      MOD.fixers[uid] = repair;
      repair();
      MOD.schedule();
      setTimeout(repair, 0);
      setTimeout(repair, 60);
      setTimeout(repair, 180);
    }
  };

  MOD.startGlobal();
  ROOT[KEY] = MOD;
})();

















  // =========================
  // MATHEMATIK MAKROS
  // MATHEMATIK MAKROS
  // MATHEMATIK MAKROS
  // MATHEMATIK MAKROS
  // MATHEMATIK MAKROS
  // MATHEMATIK MAKROS
  // MATHEMATIK MAKROS
  // MATHEMATIK MAKROS
  // MATHEMATIK MAKROS
  // =========================








(function () {

  // =========================
  // Root/Content (iframe-safe)
  // =========================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const STORE_KEY = "__LIA_FRACTION_QUIZ_V1__";
  const STYLE_ID  = "__LIA_FRACTION_QUIZ_STYLE_V1__";

  // =========================
  // Style Injection (ROOT head)
  // =========================
  function injectStyleOnce(){
    let DOC = null;
    try { DOC = (ROOT && ROOT.document) ? ROOT.document : document; } catch(e){ DOC = document; }
    if (!DOC || !DOC.head) return;
    if (DOC.getElementById(STYLE_ID)) return;

    const css = `
:root{
  --fq-track: rgba(0,0,0,.20);
  --fq-thumb: rgba(0,0,0,.88);
  --fq-ring:  rgba(255,255,255,.90);

  --fq-w: 200px;
  --fq-h: 30px;
  --fq-track-h: 4px;
  --fq-thumb-sz: 12px;
  --fq-label-size: 11px;
  --fq-label-top: 3px;
}
@media (prefers-color-scheme: dark){
  :root{
    --fq-track: rgba(255,255,255,.22);
    --fq-thumb: rgba(255,255,255,.92);
    --fq-ring:  rgba(0,0,0,.75);
  }
}

/* Wrapper: Label “im” Control */
.fq-range{
  width: var(--fq-w);
  max-width: var(--fq-w);
  height: var(--fq-h);
  position: relative;
  margin: 6px 0 12px 0;
  user-select: none;
}
.fq-range::before{
  content: attr(data-label);
  position: absolute;
  left: 0; right: 0;
  top: var(--fq-label-top);
  text-align: center;
  font-size: var(--fq-label-size);
  line-height: 1;
  opacity: .85;
  pointer-events: none;
  z-index: 2;
}

/* LiaScript-Wrapper kompakt + “Textausgabe” killen */
.fq-range .lia-input{
  width: var(--fq-w) !important;
  max-width: var(--fq-w) !important;
  height: var(--fq-h) !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex !important;
  align-items: center !important;
  font-size: 0 !important;
  line-height: 0 !important;
  min-height: 0 !important;
}

/* Alles Chrome weg (Reset/Value/Buttons/etc.) */
.fq-range button,
.fq-range output,
.fq-range input[type="number"],
.fq-range .lia-input-value,
.fq-range .lia-value,
.fq-range .lia-input-output,
.fq-range .lia-input-label,
.fq-range .lia-input-reset,
.fq-range .lia-input-prefix,
.fq-range .lia-input-suffix{
  display: none !important;
}

/* Range: im Control platziert */
.fq-range input[type="range"]{
  width: var(--fq-w) !important;
  max-width: var(--fq-w) !important;
  height: var(--fq-h) !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent;
  -webkit-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  position: relative;
  z-index: 1;
}

/* WebKit Track/Thumb */
.fq-range input[type="range"]::-webkit-slider-runnable-track{
  height: var(--fq-track-h);
  border-radius: 999px;
  background: var(--fq-track);
}
.fq-range input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance: none;
  appearance: none;
  width: var(--fq-thumb-sz);
  height: var(--fq-thumb-sz);
  border-radius: 50%;
  background: var(--fq-thumb);
  border: 2px solid var(--fq-ring);
  margin-top: calc((var(--fq-track-h) - var(--fq-thumb-sz)) / 2);
}

/* Firefox Track/Thumb */
.fq-range input[type="range"]::-moz-range-track{
  height: var(--fq-track-h);
  border-radius: 999px;
  background: var(--fq-track);
}
.fq-range input[type="range"]::-moz-range-thumb{
  width: var(--fq-thumb-sz);
  height: var(--fq-thumb-sz);
  border-radius: 50%;
  background: var(--fq-thumb);
  border: 2px solid var(--fq-ring);
}
    `.trim();

    const style = DOC.createElement("style");
    style.id = STYLE_ID;
    style.textContent = css;
    DOC.head.appendChild(style);
  }

  injectStyleOnce();

  // =========================
  // Store (import-safe)
  // =========================
  if (!ROOT[STORE_KEY]) {
    ROOT[STORE_KEY] = {
      circle:   Object.create(null), // uid -> boolean[]
      rect:     Object.create(null), // uid -> boolean[]
      rectDims: Object.create(null), // uid -> {rows, cols}

      ensureCircle(uid, n){
        n = Math.max(1, n|0);
        const a = this.circle[uid];
        if (!Array.isArray(a) || a.length !== n) this.circle[uid] = Array(n).fill(false);
        return this.circle[uid];
      },

      toggleCircle(uid, i){
        const a = this.circle[uid];
        if (!Array.isArray(a)) return false;
        if (i < 0 || i >= a.length) return false;
        a[i] = !a[i];
        return a[i];
      },

      ensureRect(uid, rows, cols){
        rows = Math.max(1, rows|0);
        cols = Math.max(1, cols|0);
        this.rectDims[uid] = { rows, cols };

        const total = rows * cols;
        const a = this.rect[uid];
        if (!Array.isArray(a) || a.length !== total) this.rect[uid] = Array(total).fill(false);
        return this.rect[uid];
      },

      toggleRect(uid, i){
        const a = this.rect[uid];
        if (!Array.isArray(a)) return false;
        if (i < 0 || i >= a.length) return false;
        a[i] = !a[i];
        return a[i];
      }
    };
  }

  ROOT.__LIA_FRACTION_QUIZ__ = ROOT[STORE_KEY];
  window.__LIA_FRACTION_QUIZ__ = ROOT[STORE_KEY];

})();












  // =========================
  // NAVIGATION
  // NAVIGATION
  // NAVIGATION
  // NAVIGATION
  // NAVIGATION
  // NAVIGATION
  // NAVIGATION
  // NAVIGATION
  // =========================



(function () {

  // =========================================================
  // Root/Doc (iframe-safe)
  // =========================================================
  function getRootWindowSafe(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  let ROOT = getRootWindowSafe();
  let ROOT_DOC = null;
  try { ROOT_DOC = ROOT.document; } catch(e){ ROOT = window; ROOT_DOC = document; }

  // =========================================================
  // Run-once Registry (import-sicher) — aber "kickbar"
  // =========================================================
  const REGKEY = "__LIA_BM_TOC5_V59__";
  if (ROOT[REGKEY] && ROOT[REGKEY].installed) {
    try { ROOT[REGKEY].kick && ROOT[REGKEY].kick(); } catch(e){}
    return;
  }
  ROOT[REGKEY] = ROOT[REGKEY] || {};
  ROOT[REGKEY].installed = true;

  // =========================================================
  // CSS Injection (immer in toc.ownerDocument)
  // =========================================================
  const STYLE_ID = "lia-bm-toc5-style";
  const CSS_TEXT = `
/* ===== Aktiv nur wenn Klasse gesetzt ===== */
.lia-toc.lia-bm-toc5-active{
  display:flex !important;
  flex-direction:column !important;
  min-height:0 !important;
}
.lia-toc.lia-bm-toc5-active #lia-bm-toc5{
  flex: 1 1 auto !important;
  min-height: 0 !important;
  overflow: auto !important;
}
.lia-toc.lia-bm-toc5-active .lia-bm-overview-pin{
  margin-top: auto !important;
}

/* ===== Bookmarks TOC ===== */
.lia-toc #lia-bm-toc5{ padding:.25em 0 .5em 0; }

.lia-toc #lia-bm-toc5 ul{ list-style:none; margin:0; padding:0; }
.lia-toc #lia-bm-toc5 .bm-list{ padding:0 .5em; }

.lia-toc #lia-bm-toc5 .bm-row{
  display:flex; align-items:center; gap:.35em;
  padding:.18em .25em; border-radius:.35em;
  line-height:1.25;
}
.lia-toc #lia-bm-toc5 .bm-row:hover{ background: rgba(127,127,127,.12); }

.lia-toc #lia-bm-toc5 .bm-toggle,
.lia-toc #lia-bm-toc5 .bm-spacer{
  width:1.15em; height:1.15em; flex:0 0 1.15em;
  display:inline-flex; align-items:center; justify-content:center;
}

.lia-toc #lia-bm-toc5 .bm-toggle{
  border:0; background:transparent; color:inherit;
  cursor:pointer; padding:0; opacity:.9;
  font-size:.95em; line-height:1;
}
.lia-toc #lia-bm-toc5 .bm-toggle:hover{ opacity:1; }

.lia-toc #lia-bm-toc5 a{
  color:inherit; text-decoration:none;
  flex:1 1 auto; min-width:0;
  display:block;
}
.lia-toc #lia-bm-toc5 a:hover{ text-decoration:underline; }

.lia-toc #lia-bm-toc5 .bm-children{ padding-left: 0.5em; }
.lia-toc #lia-bm-toc5 .bm-hidden{ display:none !important; }

/* Active in Themefarbe */
.lia-toc #lia-bm-toc5 .bm-row.bm-active{
  background: rgba(0,0,0,.14);
  background: rgba(var(--color-highlight), .18);
  border-left: 3px solid rgba(0,0,0,.35);
  border-left-color: rgb(var(--color-highlight));
  padding-left: calc(.25em - 3px);
}
.lia-toc #lia-bm-toc5 .bm-row.bm-active a{ font-weight: 700; }

/* Level-Optik (deine Werte) */
.lia-toc #lia-bm-toc5 .bm-row[data-level="1"] a{ font-size:1.25em; font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="2"] a{ font-size:1.00em; font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="3"] a{ font-size:.9em;  font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="4"] a{ font-size:.8em;  font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="5"] a{ font-size:.75em; font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="6"] a{ font-size:.7em;  font-weight:700; }

/* Search überall in .lia-toc verstecken (aber nicht in unserem Baum) */
.lia-toc :not(#lia-bm-toc5) input[type="search"],
.lia-toc :not(#lia-bm-toc5) input[placeholder*="Suche"],
.lia-toc :not(#lia-bm-toc5) input[placeholder*="suche"],
.lia-toc :not(#lia-bm-toc5) input[placeholder*="Search"],
.lia-toc :not(#lia-bm-toc5) input[placeholder*="search"],
.lia-toc :not(#lia-bm-toc5) input[aria-label*="Suche"],
.lia-toc :not(#lia-bm-toc5) input[aria-label*="suche"],
.lia-toc :not(#lia-bm-toc5) input[aria-label*="Search"],
.lia-toc :not(#lia-bm-toc5) input[aria-label*="search"],
.lia-toc :not(#lia-bm-toc5) form[role="search"],
.lia-toc :not(#lia-bm-toc5) [role="search"]{
  display:none !important;
}
  `.trim();

  function ensureStyle(doc){
    if (!doc) return;
    try{
      if (doc.getElementById(STYLE_ID)) return;
      const st = doc.createElement("style");
      st.id = STYLE_ID;
      st.type = "text/css";
      st.appendChild(doc.createTextNode(CSS_TEXT));
      (doc.head || doc.documentElement || doc.body).appendChild(st);
    } catch(e){}
  }

  // =========================================================
  // Storage
  // =========================================================
  function storageKey(){
    try{
      const href = (ROOT.location && ROOT.location.href) ? ROOT.location.href : "";
      return "__LIA_BM_TOC5_STATE__::" + href.split("#")[0];
    } catch(e){
      return "__LIA_BM_TOC5_STATE__";
    }
  }
  function loadState(){
    try{
      const raw = ROOT.localStorage.getItem(storageKey());
      const obj = raw ? JSON.parse(raw) : {};
      return (obj && typeof obj === "object") ? obj : {};
    } catch(e){ return {}; }
  }
  function saveState(s){
    try{ ROOT.localStorage.setItem(storageKey(), JSON.stringify(s || {})); } catch(e){}
  }

  // =========================================================
  // Route: Overview-Root?
  // =========================================================
  function isOverviewRoot(){
    try{
      const u = new URL(ROOT.location.href);
      const p = (u.pathname || "").replace(/\/+$/,"/"); // normalize
      const isNightly = /\/nightly\/$/.test(p);
      const isCourse  = /\/course\/$/.test(p);
      const noQuery = !u.search || u.search === "";
      return (isNightly || isCourse) && noQuery;
    } catch(e){
      return false;
    }
  }

  // =========================================================
  // Helpers (TOC)
  // =========================================================
  function findTOC(){
    return (ROOT_DOC && ROOT_DOC.querySelector ? ROOT_DOC.querySelector(".lia-toc") : null)
        || (document.querySelector ? document.querySelector(".lia-toc") : null);
  }

  function extractHashFromHref(href){
    href = (href || "").trim();
    if (!href.includes("#")) return "";
    const h = href.split("#").pop() || "";
    return h.trim();
  }

  function isRealHashLink(a){
    if (!a || !a.getAttribute) return false;
    const href = (a.getAttribute("href") || "").trim();
    if (!href.includes("#")) return false;
    const h = extractHashFromHref(href);
    return !!h;
  }

  function getOriginalLinks(toc){
    if (!toc) return [];
    return Array.from(toc.querySelectorAll('a[href*="#"]'))
      .filter(a => !a.closest("#lia-bm-toc5"))
      .filter(a => isRealHashLink(a));
  }

  function getOriginalActiveHash(toc){
    if (!toc) return "";
    const a = toc.querySelector("a.lia-active") || (toc.querySelector(".lia-active a") || null);
    if (!a) return "";
    return extractHashFromHref(a.getAttribute("href") || "");
  }

  function findOriginalLinkByHash(toc, hash){
    if (!toc || !hash) return null;
    const needle = "#" + hash;
    const links = Array.from(toc.querySelectorAll('a[href*="#"]'))
      .filter(a => !a.closest("#lia-bm-toc5"));
    return (
      links.find(a => ((a.getAttribute("href")||"").trim()).endsWith(needle)) ||
      links.find(a => ((a.getAttribute("href")||"").trim()).includes(needle)) ||
      null
    );
  }

  function clickOriginalByHash(toc, hash){
    const a = findOriginalLinkByHash(toc, hash);
    if (!a) return false;
    try { a.click(); return true; } catch(e){}
    try{
      a.dispatchEvent(new MouseEvent("click", { bubbles:true, cancelable:true, view:ROOT }));
      return true;
    } catch(e){}
    return false;
  }

  function getLevelFromDOM(a, toc){
    const aria = a.getAttribute("aria-level");
    if (aria && !isNaN(parseInt(aria,10))) return parseInt(aria,10);

    const li = a.closest("li");
    if (li){
      let depth = 1;
      let n = li.parentElement;
      while (n && n !== toc){
        if (n.tagName === "UL") depth++;
        n = n.parentElement;
      }
      return Math.max(1, Math.min(6, depth));
    }
    return 0;
  }

  function getIndentPx(a){
    try{
      const cs = (a.ownerDocument && a.ownerDocument.defaultView)
        ? a.ownerDocument.defaultView.getComputedStyle(a)
        : getComputedStyle(a);
      const pl = parseFloat(cs.paddingLeft || "0") || 0;
      const ml = parseFloat(cs.marginLeft  || "0") || 0;
      const ti = parseFloat(cs.textIndent  || "0") || 0;
      return Math.max(pl, ml, ti);
    } catch(e){
      return 0;
    }
  }

  function mapIndentLevels(nodes){
    const indents = nodes.map(n => n.indent).filter(x => x > 0);
    const uniq = Array.from(new Set(indents.map(x => Math.round(x)))).sort((a,b)=>a-b);

    if (!uniq.length){
      nodes.forEach(n => { if (n.level === 0) n.level = 1; });
      return;
    }

    nodes.forEach(n => {
      if (n.level !== 0) return;
      const v = Math.round(n.indent);
      let idx = uniq.indexOf(v);
      if (idx < 0) idx = 0;
      n.level = Math.max(1, Math.min(6, idx + 1));
    });
  }

  function buildTree(items){
    const root = { children: [] };
    const stack = [{ node: root, level: 0 }];
    for (const it of items){
      while (stack.length && stack[stack.length-1].level >= it.level) stack.pop();
      const parent = stack[stack.length-1].node;
      const node = { ...it, children: [] };
      parent.children.push(node);
      stack.push({ node, level: it.level });
    }
    return root.children;
  }

  function collectForceOpen(tree, activeHash){
    const force = new Set();
    function walk(list, parents){
      for (const n of list){
        if (n.hash === activeHash){
          parents.forEach(p => force.add(p.key));
          return true;
        }
        if (n.children && n.children.length){
          if (walk(n.children, parents.concat(n))) return true;
        }
      }
      return false;
    }
    walk(tree, []);
    return force;
  }

  function setCollapsed(row, childWrap, open){
    row.classList.toggle("bm-open", !!open);
    if (childWrap) childWrap.classList.toggle("bm-hidden", !open);
  }

  function setGlyph(btn, open){
    if (!btn) return;
    btn.textContent = open ? "▼" : "▶";
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  // =========================================================
  // Search überall entfernen (JS robust)
  // =========================================================
  function looksLikeSearchInput(inp){
    if (!inp || !inp.getAttribute) return false;
    const type = (inp.getAttribute("type") || "").toLowerCase();
    const ph   = (inp.getAttribute("placeholder") || "").toLowerCase();
    const al   = (inp.getAttribute("aria-label") || "").toLowerCase();
    return (
      type === "search" ||
      ph.includes("suche") || ph.includes("search") ||
      al.includes("suche") || al.includes("search")
    );
  }

  function killSearchAnywhere(toc){
    if (!toc) return;
    try{
      Array.from(toc.querySelectorAll("input"))
        .filter(inp => !inp.closest("#lia-bm-toc5"))
        .forEach(inp => {
          if (!looksLikeSearchInput(inp)) return;
          const wrap =
            inp.closest('form,[role="search"],[class*="search"],[id*="search"],div,label') || inp;
          wrap.style.display = "none";
          wrap.setAttribute("data-lia-bm-hidden","1");
        });

      Array.from(toc.querySelectorAll('form[role="search"],[role="search"]'))
        .filter(el => !el.closest("#lia-bm-toc5"))
        .forEach(el => {
          el.style.display = "none";
          el.setAttribute("data-lia-bm-hidden","1");
        });

      Array.from(toc.querySelectorAll('[class*="search"],[id*="search"]'))
        .filter(el => !el.closest("#lia-bm-toc5"))
        .forEach(el => {
          if (!el.querySelector("input")) return;
          el.style.display = "none";
          el.setAttribute("data-lia-bm-hidden","1");
        });
    } catch(e){}
  }

  // =========================================================
  // Übersicht finden & unten pinnen
  // =========================================================
  function findOverviewControl(toc){
    if (!toc) return null;

    // Kandidaten: a/button mit Text "Übersicht"
    const cand = Array.from(toc.querySelectorAll("a,button"))
      .filter(el => !el.closest("#lia-bm-toc5"));

    // 1) Textmatch
    for (const el of cand){
      const t = (el.textContent || "").trim().toLowerCase();
      if (t === "übersicht" || t === "uebersicht" || t === "overview") return el;
    }

    // 2) href zeigt auf /nightly/ oder /course/ Root
    for (const el of cand){
      if (!el.getAttribute) continue;
      const href = (el.getAttribute("href") || "").trim();
      if (!href) continue;
      if (href === "/nightly/" || href === "/course/" ||
          href.endsWith("/nightly/") || href.endsWith("/course/")) {
        return el;
      }
    }

    return null;
  }

  // direct child of toc (damit margin-top:auto greift)
  function directChildOfTOC(el, toc){
    if (!el || !toc) return null;
    let n = el;
    while (n && n.parentElement && n.parentElement !== toc) n = n.parentElement;
    return (n && n.parentElement === toc) ? n : null;
  }

  function pinOverviewBottom(toc, overviewEl){
    if (!toc) return null;
    if (!overviewEl) return null;

    const child = directChildOfTOC(overviewEl, toc) || overviewEl;
    try{
      child.classList.add("lia-bm-overview-pin");
    } catch(e){}
    return child;
  }

  // =========================================================
  // Original-TOC ausblenden (Button/Toolbar bleibt)
  // =========================================================
  function unhideAllHidden(toc){
    if (!toc) return;
    try{
      toc.querySelectorAll('[data-lia-bm-hidden="1"]').forEach(el => {
        el.style.display = "";
        el.removeAttribute("data-lia-bm-hidden");
      });
    } catch(e){}
  }

  function elementContainsOriginalHashLinks(el){
    if (!el || !el.querySelectorAll) return false;
    const as = Array.from(el.querySelectorAll('a[href*="#"]'));
    return as.some(a => !a.closest("#lia-bm-toc5") && isRealHashLink(a));
  }

  function hideOriginalNavigation(toc, toolbar, box, keepEl){
    if (!toc) return;

    // direkte Kinder, die Original-Hashlinks enthalten -> weg (außer keep)
    try{
      const kids = Array.from(toc.children || []);
      kids.forEach(ch => {
        if (!ch) return;
        if (toolbar && ch === toolbar) return;
        if (box && ch === box) return;
        if (keepEl && ch === keepEl) return;

        if (elementContainsOriginalHashLinks(ch)){
          ch.style.display = "none";
          ch.setAttribute("data-lia-bm-hidden","1");
        }
      });
    } catch(e){}

    // Fallback: tiefer liegende Wrapper/Listen -> weg (außer keep/toolbar/box)
    try{
      const cand = Array.from(toc.querySelectorAll("ul,ol,nav,section,div"))
        .filter(el => !el.closest("#lia-bm-toc5"))
        .filter(el => !(toolbar && el.closest && el.closest(".lia-toolbar")))
        .filter(el => !(keepEl && keepEl.contains && keepEl.contains(el)))
        .filter(el => elementContainsOriginalHashLinks(el));

      cand.forEach(el => {
        const parent = el.parentElement;
        if (parent && cand.includes(parent)) return;
        el.style.display = "none";
        el.setAttribute("data-lia-bm-hidden","1");
      });
    } catch(e){}
  }

  // =========================================================
  // Cleanup: Baum + Klassen + Hides entfernen
  // =========================================================
  function cleanup(toc){
    try{
      if (!toc) return;

      // Box raus
      const box = toc.querySelector("#lia-bm-toc5");
      if (box) box.remove();

      // Hides zurück
      unhideAllHidden(toc);

      // Klassen zurück
      toc.classList.remove("lia-bm-toc5-active");
      try{
        toc.querySelectorAll(".lia-bm-overview-pin").forEach(el => el.classList.remove("lia-bm-overview-pin"));
      } catch(e){}

    } catch(e){}
  }

  // =========================================================
  // Render
  // =========================================================
  function renderTree(doc, toc, nodes, state, activeHash, forceOpen){
    const ul = doc.createElement("ul");
    ul.className = "bm-list";

    for (const n of nodes){
      const li = doc.createElement("li");

      const row = doc.createElement("div");
      row.className = "bm-row";
      row.dataset.level = String(n.level);

      const hasKids = n.children && n.children.length;
      let childWrap = null;
      const mustOpen = (forceOpen && forceOpen.has(n.key)) || (state[n.key] === 1);

      let btn = null;

      if (hasKids){
        btn = doc.createElement("button");
        btn.type = "button";
        btn.className = "bm-toggle";
        btn.setAttribute("aria-label", "Abschnitt ein-/ausklappen");
        row.appendChild(btn);
      } else {
        const sp = doc.createElement("span");
        sp.className = "bm-spacer";
        row.appendChild(sp);
      }

      const a = doc.createElement("a");
      a.textContent = n.text;

      const orig = findOriginalLinkByHash(toc, n.hash);
      a.href = (orig && orig.getAttribute) ? (orig.getAttribute("href") || ("#" + n.hash)) : ("#" + n.hash);

      if (n.hash === activeHash) row.classList.add("bm-active");

      if (hasKids){
        childWrap = doc.createElement("ul");
        childWrap.className = "bm-children";
      }

      setCollapsed(row, childWrap, mustOpen);
      if (btn) setGlyph(btn, mustOpen);

      if (btn){
        btn.addEventListener("click", (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();

          const nowOpen = !row.classList.contains("bm-open");
          state[n.key] = nowOpen ? 1 : 0;
          saveState(state);

          setCollapsed(row, childWrap, nowOpen);
          setGlyph(btn, nowOpen);
        }, true);
      }

      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();

        // Auto-Open: Klick auf Parent klappt auf
        if (hasKids && !row.classList.contains("bm-open")){
          state[n.key] = 1;
          saveState(state);
          setCollapsed(row, childWrap, true);
          if (btn) setGlyph(btn, true);
        }

        const ok = clickOriginalByHash(toc, n.hash);
        if (!ok){
          try { ROOT.location.hash = "#" + n.hash; } catch(e2){}
          try { window.location.hash = "#" + n.hash; } catch(e3){}
        }

        ROOT.setTimeout(() => { try{ syncActive(toc); } catch(e){} }, 80);
      }, true);

      row.appendChild(a);
      li.appendChild(row);

      if (hasKids){
        const kids = renderTree(doc, toc, n.children, state, activeHash, forceOpen);
        while (kids.firstChild) childWrap.appendChild(kids.firstChild);
        li.appendChild(childWrap);
      }

      ul.appendChild(li);
    }

    return ul;
  }

  // =========================================================
  // Enhance / Sync
  // =========================================================
  let LOCK = false;

  function enhance(){
    if (LOCK) return false;
    LOCK = true;

    try{
      const toc = findTOC();
      if (!toc) return false;

      // Wenn wir auf Overview-Root sind: cleanup und fertig
      if (isOverviewRoot()){
        cleanup(toc);
        return false;
      }

      const TOC_DOC = toc.ownerDocument || ROOT_DOC || document;

      ensureStyle(TOC_DOC);
      ensureStyle(ROOT_DOC);
      if (ROOT_DOC !== document) ensureStyle(document);

      // Reset alter Zustände
      unhideAllHidden(toc);
      killSearchAnywhere(toc);

      // Toolbar behalten (TOC-Button)
      const toolbar = toc.querySelector(".lia-toolbar");

      // Overview-Button finden, pinnen und click-hook für cleanup
      const overviewBtn = findOverviewControl(toc);
      const overviewChild = pinOverviewBottom(toc, overviewBtn);

      if (overviewBtn && !overviewBtn.getAttribute("data-lia-bm-hooked")){
        overviewBtn.setAttribute("data-lia-bm-hooked","1");
        overviewBtn.addEventListener("click", () => {
          // Vor dem Wechsel: DOM-Reste entfernen
          const t = findTOC();
          if (t) cleanup(t);
        }, true);
      }

      // alten Baum entfernen
      const old = toc.querySelector("#lia-bm-toc5");
      if (old) old.remove();

      // Original-Links als Quelle
      const links = getOriginalLinks(toc);
      if (!links.length) return false;

      // Nodes dedupe nach hash
      const nodes = [];
      const seen = new Set();
      links.forEach((a) => {
        const hash = extractHashFromHref(a.getAttribute("href") || "");
        if (!hash) return;

        const key = "h:" + hash;
        if (seen.has(key)) return;
        seen.add(key);

        const lvl = getLevelFromDOM(a, toc);
        nodes.push({
          key,
          hash,
          text: (a.textContent || "").trim().replace(/\s+/g," "),
          level: lvl || 0,
          indent: getIndentPx(a)
        });
      });

      mapIndentLevels(nodes);
      const tree = buildTree(nodes);

      const state = loadState();
      const activeHash = getOriginalActiveHash(toc) || "";

      // Defaults: alles zu (nur nodes mit Kindern)
      (function initDefaults(list){
        for (const n of list){
          if (n.children && n.children.length){
            if (state[n.key] !== 0 && state[n.key] !== 1) state[n.key] = 0;
            initDefaults(n.children);
          }
        }
      })(tree);

      const forceOpen = activeHash ? collectForceOpen(tree, activeHash) : new Set();

      // bauen & einfügen
      const box = TOC_DOC.createElement("div");
      box.id = "lia-bm-toc5";
      box.appendChild(renderTree(TOC_DOC, toc, tree, state, activeHash, forceOpen));

      if (toolbar && toolbar.parentElement === toc) toolbar.insertAdjacentElement("afterend", box);
      else toc.insertBefore(box, toc.firstChild);

      // Layout aktivieren (damit Übersicht unten bleibt)
      toc.classList.add("lia-bm-toc5-active");

      // Original-Navi weg (aber toolbar + box + overviewChild bleiben)
      hideOriginalNavigation(toc, toolbar, box, overviewChild);

      saveState(state);
      return true;

    } catch(e){
      return false;
    } finally {
      LOCK = false;
    }
  }

  function syncActive(toc){
    try{
      if (!toc) return;
      const box = toc.querySelector ? toc.querySelector("#lia-bm-toc5") : null;
      if (!box) return;

      const activeHash = getOriginalActiveHash(toc);
      if (!activeHash) return;

      box.querySelectorAll(".bm-row.bm-active").forEach(r => r.classList.remove("bm-active"));

      const links = Array.from(box.querySelectorAll('a[href*="#"]'));
      const needle = "#" + activeHash;
      const a = links.find(x => (x.getAttribute("href") || "").includes(needle));
      if (a && a.closest){
        const row = a.closest(".bm-row");
        if (row) row.classList.add("bm-active");
      }
    } catch(e){}
  }

  // =========================================================
  // Boot (kein MutationObserver)
  // =========================================================
  let tries = 0;
  const bootTimer = ROOT.setInterval(() => {
    tries++;
    const ok = enhance();
    if (ok || tries > 160) ROOT.clearInterval(bootTimer);
  }, 150);

  const interval = ROOT.setInterval(() => {
    const toc = findTOC();
    if (!toc) return;

    // Falls wir auf Overview-Root sind: sicher cleanup
    if (isOverviewRoot()){
      cleanup(toc);
      return;
    }

    // Search wird von LiaScript gern nachgerendert
    killSearchAnywhere(toc);

    const box = toc.querySelector("#lia-bm-toc5");
    if (!box) {
      enhance();
    } else {
      // Original weg halten + Active sync
      const toolbar = toc.querySelector(".lia-toolbar");
      const overviewBtn = findOverviewControl(toc);
      const overviewChild = pinOverviewBottom(toc, overviewBtn);
      hideOriginalNavigation(toc, toolbar, box, overviewChild);
      toc.classList.add("lia-bm-toc5-active");
      syncActive(toc);
    }
  }, 700);

  try{
    ROOT.addEventListener("hashchange", () => {
      const toc = findTOC();
      if (toc) syncActive(toc);
    }, true);
  } catch(e){}

  // expose for kick
  ROOT[REGKEY].kick = function(){
    try{
      const toc = findTOC();
      if (toc && !isOverviewRoot()) enhance();
      if (toc && isOverviewRoot()) cleanup(toc);
    } catch(e){}
  };

})();













@end




















@circleQuiz: @circleQuiz_(@uid,@0)

@circleQuiz_
<script modify="false">
const API = window.__LIA_FRACTION_QUIZ__;
const uid = "@0";

/* @input sicher einlesen (initial kann leer sein) */
const nRaw = "@input(`fq-c-n-@0`)";
let n = parseInt(nRaw, 10);
if (!Number.isFinite(n) || n < 1) n = 1;
if (n > 32) n = 32;

if (API && API.ensureCircle) API.ensureCircle(uid, n);
const arr = (API && API.circle && API.circle[uid]) ? API.circle[uid] : Array(n).fill(false);

/* 200x200 */
const W = 200, H = 200, padding = 6;
const cx = W / 2, cy = H / 2;
const r  = Math.min(W, H) / 2 - padding;

const circleFill  = "white";
const lineColor   = "black";
const segmentFill = "orange";

const step = 360 / n;
const startOffset = -90;

let lines = "";
let slices = "";

if (n > 1) {
  for (let i = 0; i < n; i++) {
    const a0 = (startOffset + step * i) * Math.PI / 180;
    const a1 = (startOffset + step * (i + 1)) * Math.PI / 180;

    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);

    const largeArc = (step > 180) ? 1 : 0;
    const sweep = 1;

    const active = !!arr[i];

    slices += `
      <path
        d="M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 ${largeArc},${sweep} ${x1},${y1} Z"
        fill="${active ? segmentFill : "transparent"}"
        style="cursor:pointer"
        onclick="(function(el){
          var API = window.__LIA_FRACTION_QUIZ__;
          if(!API) return;
          var on = API.toggleCircle('${uid}', ${i});
          el.setAttribute('fill', on ? '${segmentFill}' : 'transparent');
        })(this)"
      ></path>
    `;

    lines += `<line x1="${cx}" y1="${cy}" x2="${x0}" y2="${y0}" stroke="${lineColor}" stroke-width="2"/>`;
  }
} else {
  const active = !!arr[0];
  slices = `
    <circle
      cx="${cx}" cy="${cy}" r="${r}"
      fill="${active ? segmentFill : "transparent"}"
      style="cursor:pointer"
      onclick="(function(el){
        var API = window.__LIA_FRACTION_QUIZ__;
        if(!API) return;
        var on = API.toggleCircle('${uid}', 0);
        el.setAttribute('fill', on ? '${segmentFill}' : 'transparent');
      })(this)"
    ></circle>
  `;
}

`HTML:
<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <circle cx="${cx}" cy="${cy}" r="${r}" stroke="${lineColor}" stroke-width="2" fill="${circleFill}"/>
  ${slices}
  ${lines}
</svg>
`
</script>

<div class="fq-range" data-label="Unterteilungen">
<script run-once modify="false" input="range" output="fq-c-n-@0"
        value="1" min="1" max="32" input-always-active>
@input
</script>
</div>

[[!]]
<script>
(() => {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  const arr = (API && API.circle && API.circle[uid]) ? API.circle[uid] : [];
  const ratio = arr.filter(Boolean).length / Math.max(1, arr.length);
  const target = (@1);
  return Math.abs(ratio - target) < 1e-12;
})()
</script>
@end



@rectQuiz: @rectQuiz_(@uid,@0)

@rectQuiz_
<script modify="false">
const API = window.__LIA_FRACTION_QUIZ__;
const uid = "@0";

/* @input sicher einlesen (initial kann leer sein) */
const rowsRaw = "@input(`fq-r-rows-@0`)";
const colsRaw = "@input(`fq-r-cols-@0`)";
let rows = parseInt(rowsRaw, 10);
let cols = parseInt(colsRaw, 10);
if (!Number.isFinite(rows) || rows < 1) rows = 1;
if (!Number.isFinite(cols) || cols < 1) cols = 1;
if (rows > 20) rows = 20;
if (cols > 20) cols = 20;

if (API && API.ensureRect) API.ensureRect(uid, rows, cols);
const arr = (API && API.rect && API.rect[uid]) ? API.rect[uid] : Array(rows*cols).fill(false);

/* 200x200 */
const W = 200, H = 200, padding = 6;
const usableW = W - 2*padding, usableH = H - 2*padding;

const bgFill   = "white";
const lineColor= "black";
const cellFill = "orange";
const cellGap  = 0;

const rw = usableW / cols;
const rh = usableH / rows;

let gridRects = "";
let gridLines = "";

/* Zellen */
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const i = r*cols + c;
    const x = padding + c*rw + cellGap/2;
    const y = padding + r*rh + cellGap/2;
    const w = rw - cellGap;
    const h = rh - cellGap;

    const active = !!arr[i];

    gridRects += `
      <rect
        x="${x}" y="${y}" width="${Math.max(0,w)}" height="${Math.max(0,h)}"
        fill="${active ? cellFill : "transparent"}"
        style="cursor:pointer"
        onclick="(function(el){
          var API = window.__LIA_FRACTION_QUIZ__;
          if(!API) return;
          var on = API.toggleRect('${uid}', ${i});
          el.setAttribute('fill', on ? '${cellFill}' : 'transparent');
        })(this)"
      ></rect>
    `;
  }
}

/* Gitterlinien */
for (let r = 0; r <= rows; r++) {
  const y = padding + r*rh;
  gridLines += `<line x1="${padding}" y1="${y}" x2="${W-padding}" y2="${y}" stroke="${lineColor}" stroke-width="2"/>`;
}
for (let c = 0; c <= cols; c++) {
  const x = padding + c*rw;
  gridLines += `<line x1="${x}" y1="${padding}" x2="${x}" y2="${H-padding}" stroke="${lineColor}" stroke-width="2"/>`;
}

`HTML:
<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect x="0" y="0" width="${W}" height="${H}" fill="${bgFill}" stroke="${lineColor}" stroke-width="2"/>
  ${gridRects}
  ${gridLines}
</svg>
`
</script>

<div class="fq-range" data-label="vertikal">
<script run-once modify="false" input="range" output="fq-r-rows-@0"
        value="1" min="1" max="20" input-always-active>
@input
</script>
</div>

<div class="fq-range" data-label="horizontal">
<script run-once modify="false" input="range" output="fq-r-cols-@0"
        value="1" min="1" max="20" input-always-active>
@input
</script>
</div>

[[!]]
<script>
(() => {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  const arr = (API && API.rect && API.rect[uid]) ? API.rect[uid] : [];
  const ratio = arr.filter(Boolean).length / Math.max(1, arr.length);
  const target = (@1);
  return Math.abs(ratio - target) < 1e-12;
})()
</script>
@end





















@canvas: @canvas_(@uid)

@canvas_
<span class="lia-canvas-anchor" data-uid="@0">
  <button class="lia-canvas-launch" type="button" aria-label="Zeichenfläche öffnen/schließen">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path class="launch-stroke" d="M3 21l3.2-0.6L19 7.6a2.2 2.2 0 0 0 0-3.1l-0.5-0.5a2.2 2.2 0 0 0-3.1 0L2.6 16.8 3 21z"/>
      <path class="launch-stroke" d="M14.2 5.2l4.6 4.6"/>
    </svg>
  </button>
</span>

<span id="lia-canvas-mount-@0" class="lia-canvas-mount" data-open="0"></span>
@end


















@orthography: @orthography_(@uid,`@0`,`@1`,`@2`)

@orthography_
<div class="orthography-wrap" id="orthography-wrap-@0">
  <span id="orthography-solution-@0" style="display:none">@3</span>

  <input
    data-id="lia-quiz-@0"
    class="lia-input lia-quiz__input"
    style="margin-bottom: .5rem"
    value="@2">

  <button
    type="button"
    class="lia-btn lia-btn--outline"
    id="orthography-reset-@0"
    style="margin-bottom: 2rem">
    Reset
  </button>
</div>

[[!]]
<script>
(function(){
  const el  = document.querySelector('[data-id="lia-quiz-@0"]');
  const sol = document.getElementById('orthography-solution-@0');
  if(!el || !sol) return false;

  const norm = s => String(s||"").toLocaleLowerCase().replace(/\s+/g,"");
  return norm(el.value) === norm(sol.textContent);
})()
</script>

<script modify="false">
(function(){
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }
  const ROOT = getRootWindow();
  const MOD  = ROOT["__ORTHOGRAPHY_EXPORT_V1__"];
  if(!MOD || !MOD.register) return;

  MOD.register({
    uid: "@0",
    gateRaw: "@1",
    selInput: '[data-id="lia-quiz-@0"]',
    idReset: "orthography-reset-@0",
    idSol:   "orthography-solution-@0"
  });
})();
</script>
@end






@diktat: @diktat_(@uid,@0)

@diktat_
{|>}{<span style="position:absolute; left:-10000px; top:auto; width:1px; height:1px; overflow:hidden;">@0</span>}
[[ @0 ]]
@end





-->





## Mathematikaufgabenmakros



<section class="dynFlex">



<div class="flex-child">

**Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.

__$b)\;\;$__ $\dfrac{7}{10}$

@circleQuiz(7/10)

`@circleQuiz(7/10)`

</div>

<div class="flex-child">

**Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.


__$a)\;\;$__ $\dfrac{7}{10}$

@rectQuiz(7/10)

`@rectQuiz(7/10)`

</div>


</section>



# SchulLia-Tests


Auf den folgenden Seiten werden die Features von SchulLia vorgestellt.


> Import

`import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/README.md`



## Canvas

Klicke auf den Stift neben dem Eingabefeld um das Canvas zu öffnen

Canvas mit Farbauswahl, Lineatur und Radierer. Zoom ist auch dabei und mit den anderen Maustasten kann man auch die Canvas schieben. Touchsteuerung: 2-Finger Pinch/Pan.

Unten links und unten rechts sind unsichtbare Ziehflächen (nur „die Ecke“). Dort kannst du die Zeichenfläche stufenlos **höher/niedriger** und auch **breiter/schmaler** ziehen.


`Codebefehl: @canvas`


Testzwecke (2 ist Lösung):

<!--   data-solution-button="2" -->
[[ 2 ]] 
@canvas



## Textmarker

Klicke auf den Stift im Header und markiere im Text wie es dir beliebt. Wechsel Lehrbuch ↔ Präsentation ↔ Slides und ändere die Schriftgröße.




## Tafelmodus

Klicke auf das A im Header und ändere im Präsentationsmodus die Schriftgröße mit dem Slider. Empfehlung: Nightly

`https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/README.md`



## Dynamsische Flex-Childs

Geh an den rechten vertikalen Trennstrich zwischen den Blöcken und schiebe diesen nach belieben hin und her. Funktioniert auch mit Textmarkern.

<section class="dynFlex">


<div class="flex-child">

__$f)\;\;$__ Lösung ist 3: [[ 3 ]]

__$g)\;\;$__ Lösung ist 4: [[ 4 ]]

__$h)\;\;$__ Lösung ist 5: [[ 5 ]]

__$i)\;\;$__ Lösung ist 6: [[ 6 ]]

</div>

  <div class="flex-child">
    __$a)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
  </div>

  <div class="flex-child">
    __$b)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
  </div>

  <div class="flex-child">
    __$c)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
  </div>

  <div class="flex-child">
    __$d)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
  </div>

  <div class="flex-child">
    __$e)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor. 
  </div>

</section>


```
<section class="dynFlex">
<div class="flex-child">

__$i)\;\;$__ Lösung ist 6: [[ 6 ]]

</div>
</section>
```





## Deutschaufgabenmakros




<section class="dynFlex">

<div class="flex-child">

__Aufgabe 1:__ Hör dir den Satz an und schreib ihn korrekt in das Eingabefeld. \

@diktat(Anna sitzt auf einem fliegenden Teppich.)

`@diktat(Anna sitzt auf einem fliegenden Teppich.)`

</div>

<div class="flex-child">

__Aufgabe 2:__ Lass dir die Wörter vorlesen, die in die Lücken kommen und schreibe diese in die Lücken. \

Anna ging in einen @diktat(Zoo). Dort konnte sie auf einem @diktat(Lama) reiten.

`@diktat(Zoo)`

</div>

<div class="flex-child">

__Aufgabe 3:__ Setze das Komma an die richtige Stelle. (Auflösung ist blockiert.) \


@orthography(false,`Das ist der Tag an dem ich geblitzt wurde.`,`Das ist der Tag, an dem ich geblitzt wurde.`)




__Aufgabe 4:__ Setze die Satzzeichen so, dass der Satz eine korrekte wörtliche Rede darstellt. (Auflösung bei erst nach 2 Versuchen) \

@orthography(2,`Der Bruder den ich mag.`,`Der Bruder, den ich mag.`)



__Aufgabe 5:__ Korrigiere die Rechtschreibfehler im gezeigten Satz. (Auflösung bei erst nach 0 Versuchen) \

@orthography(true,`Es ist jetze um sechse.`,`Es ist jetzt um sechs.`)


`Beispiele sind leider nicht als Code darstellbar.`

</div>

</section>

