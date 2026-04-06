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

  const prev = REG.instances[DOC_ID];
  if (prev?.__alive){
    try { prev.moSlides?.disconnect(); } catch(e){}
    try { prev.__alive = false; } catch(e){}
    try { prev.moDock?.disconnect(); } catch(e){}
    try { prev.moTheme?.disconnect(); } catch(e){}
    try { prev.roLayout?.disconnect(); } catch(e){}
    try { if (prev.__layoutTimer) ROOT_WIN.clearInterval(prev.__layoutTimer); } catch(e){}
    try { if (prev.__slideSyncTimer) ROOT_WIN.clearInterval(prev.__slideSyncTimer); } catch(e){}
    try { CONTENT_DOC.getElementById("lia-hl-overlay")?.remove(); } catch(e){}
    try { if (prev.__realSlideWatchTimer) ROOT_WIN.clearInterval(prev.__realSlideWatchTimer); } catch(e){}
  }


  const I = REG.instances[DOC_ID] = {
    __alive: true,
    debugHLQ: false,
    state: { active:false, panelOpen:false, tool:"mark", color:"yellow" },
    HL: [],
    nextId: 1,
    moDock: null,
    moTheme: null,
    moSlides: null,
    roLayout: null,
    roNodes: new Set(),
    roPending: false,
    ticking: false,
    __activeSlide: null,
    posTimers: [],
    lastBurstAt: 0
  };

  const HL_UI_OVERLAY_ID = "lia-hl-ui-overlay-v1";
  const HL_INLINE_SLOT_ID = "lia-hl-inline-slot-v1";

  // =========================
  // CSS Injection (Content + Root)
  // =========================


  function ensureStyle(doc, id, css){
    const old = doc.getElementById(id);
    if (old){ old.textContent = css; return; }
    const st = doc.createElement("style");
    st.id = id;
    st.textContent = css;
    doc.head.appendChild(st);
  }

function ensureCSS(){
  ensureStyle(CONTENT_DOC, "lia-hl-style-static-v4", `
    /* HLQ: Basisstyles für Proxy/Quiz */
    .hlq-proxy{
      display: inline-flex !important;
      align-items: center !important;
      flex-wrap: wrap !important;
      margin: 0 !important;
      padding: 0 !important;
      gap: 0 !important;
    }

    /* unsere UI standardmäßig komplett raus */
    .hlq-proxy .hlq-btn,
    .hlq-proxy .hlq-msg{
      display: none !important;
    }

    /* Lia-Teil bleibt inline und ohne extra Block-Abstände */
    .hlq-proxy .hlq-lia{
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin: 0 !important;
      padding: 0 !important;
      font-size: 0 !important;
    }

    .hlq-proxy .hlq-lia button,
    .hlq-proxy .hlq-lia [role="button"],
    .hlq-proxy .hlq-lia a{
      font-size: 1rem !important;
    }

    /* Debug: wenn du es brauchst */
    body.lia-hlq-debug .hlq-proxy{ gap: 10px !important; }
    body.lia-hlq-debug .hlq-proxy .hlq-btn{ display: inline-flex !important; }
    body.lia-hlq-debug .hlq-proxy .hlq-msg{ display: inline !important; }

    /* Markerquiz: keine Absatz-Abstände zwischen Text und Quiz-Zeile */
    .markerquiz p{
      margin: 0 !important;
    }

    /* falls Lia leere <p> erzeugt (Parser-Autokorrektur), komplett weg */
    .markerquiz p:empty{
      display: none !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  `);
}

ensureCSS();

  ensureStyle(CONTENT_DOC, "lia-hl-style-content-v4", `
    :root{
      --hl-yellow: rgba(255, 247, 0, 0.45);
      --hl-green:  rgba(144, 238, 144, 0.45);
      --hl-blue:   rgba(0, 76, 255, 0.45);
      --hl-pink:   rgba(255, 0, 212, 0.45);
      --hl-orange: rgba(255, 153, 0, 0.45);
      --hl-red:    rgba(255, 0, 0, 0.45);

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

      pointer-events: none !important;
      cursor: default !important;
    }

    /* Nur echte User-Markierungen dürfen angeklickt / radiert werden */
    .lia-hl-rect[data-kind="user"]{
      pointer-events: auto !important;
      cursor: pointer !important;
    }

        /* ---------------------------------------------------------
           Textmarker-Quiz Proxy: Lia-Buttons behalten, Input verstecken
           --------------------------------------------------------- */
        .hlq-proxy{
          display: inline-flex;
          align-items: center;
          gap: 0px;
          flex-wrap: wrap;
          margin: 0px 0;
        }

        /* Eingabefelder im Proxy verstecken (Buttons bleiben!) */
        .hlq-proxy input,
        .hlq-proxy textarea,
        .hlq-proxy select{
          display: none !important;
        }

        .hlq-proxy .hlq-msg{
          font-weight: 700;
          opacity: .85;
        }


    .lia-hl-rect[data-hl="yellow"]{ background: var(--hl-yellow); }
    .lia-hl-rect[data-hl="green"] { background: var(--hl-green);  }
    .lia-hl-rect[data-hl="blue"]  { background: var(--hl-blue);   }
    .lia-hl-rect[data-hl="pink"]  { background: var(--hl-pink);   }
    .lia-hl-rect[data-hl="orange"]{ background: var(--hl-orange); }
    .lia-hl-rect[data-hl="red"]   { background: var(--hl-red);    }
  `);

  ensureStyle(ROOT_DOC, "lia-hl-style-root-v4", `
      :root{
      --hl-ui-bg: rgba(255,255,255,.92);
      --hl-ui-fg: rgba(0,0,0,.88);
      --hl-ui-border: rgba(0,0,0,.14);
      --hl-ui-muted: rgba(0,0,0,.62);
      --hl-ui-shadow: 0 16px 42px rgba(0,0,0,.16);

      --hl-accent: rgb(11,95,255);
      --hl-z: 9999999;
      }


    #lia-hl-ui-overlay-v1{
      position: fixed !important;
      z-index: var(--hl-z) !important;
      left: 0;
      top: 0;
      width: 0;
      height: 0;
      pointer-events: none !important;
    }

    #lia-hl-inline-slot-v1{
      position: relative !important;
      display: flex !important;
      align-items: center !important;
      justify-content: flex-start !important;

      width: 40px !important;
      min-width: 40px !important;
      max-width: 40px !important;

      height: 40px !important;
      min-height: 40px !important;

      flex: 0 0 40px !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow: visible !important;
      pointer-events: none !important;
    }

    #lia-hl-inline-slot-v1 > #lia-hl-btn{
      position: relative !important;
      left: auto !important;
      top: auto !important;
      margin: 0 !important;
    }

    body.lia-hl-navstack #lia-toolbar-nav .lia-header__left{
      display: flex !important;
      flex-direction: column !important;
      align-items: stretch !important;
      justify-content: flex-start !important;

      width: 32px !important;
      min-width: 32px !important;

      gap: 6px !important;
      overflow: visible !important;
    }

    body.lia-hl-navstack #lia-hl-inline-slot-v1{
      width: 32px !important;
      min-width: 32px !important;
      max-width: 32px !important;

      height: 32px !important;
      min-height: 32px !important;

      flex: 0 0 32px !important;
    }


    #lia-hl-btn{
      position: absolute !important;
      pointer-events: auto !important;

      width: 40px !important;
      height: 40px !important;
      padding: 0 !important;
      margin: 0 !important;

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

#lia-hl-btn .icon,
#lia-hl-btn svg{
  width:22px !important;
  height:22px !important;
  display:block !important;
  color: var(--hl-accent) !important;
}

#lia-hl-btn svg,
#lia-hl-btn svg *{
  color: var(--hl-accent) !important;
  stroke: var(--hl-accent) !important;
}

#lia-hl-btn svg path{
  stroke: var(--hl-accent) !important;
}

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
      background-color: var(--hl-ui-bg) !important;
      box-shadow: var(--hl-ui-shadow) !important;
      overflow: hidden !important;
      backdrop-filter: blur(6px);
    }


    /* Nightly: "Navigation"-Iconleiste (sehr kompakt / vertikal) */
    body.lia-hl-navstack #lia-hl-btn{
      margin: 0 !important;
      width: 22px !important;
      height: 22px !important;
      border-radius: 8px !important;
    }
    
    body.lia-hl-navstack #lia-hl-btn .icon{
      width: 15px !important;
      height: 15px !important;
    }
    
    body.lia-hl-navstack #lia-hl-btn .dot{
      right: 2px !important;
      bottom: 2px !important;
      width: 6px !important;
      height: 6px !important;
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

.hl-tool svg{
  display: block !important;
  flex: 0 0 auto !important;
}

/* Stift: etwas kleiner/feiner */
#hl-tool-mark svg{
  width: 26px !important;
  height: 26px !important;
}

/* Radierer: etwas größer, weil massiver Pfad */
#hl-tool-erase svg{
  width: 26px !important;
  height: 26px !important;
}

/* Stift bleibt Linien-Icon */
#hl-tool-mark svg *{
  stroke: currentColor !important;
  fill: none !important;
}

/* Radierer bleibt Flächen-Icon */
#hl-tool-erase svg *{
  fill: currentColor !important;
  stroke: none !important;
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



    /* Lia-Quiz im Proxy kapseln: alles verstecken außer Buttons */
    .hlq-proxy .hlq-lia{
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 0 !important;          /* killt "The correct answer ..." zuverlässig */
    }
    
    /* Buttons wieder lesbar machen */
    .hlq-proxy .hlq-lia button,
    .hlq-proxy .hlq-lia [role="button"],
    .hlq-proxy .hlq-lia a{
      font-size: 1rem !important;
    }
    
    /* Eingabefelder sicher aus */
    .hlq-proxy .hlq-lia input,
    .hlq-proxy .hlq-lia textarea,
    .hlq-proxy .hlq-lia select{
      display: none !important;
    }

    /* Textmarker-Quiz Buttons (eigene UI, Lia-Quiz raus) */
    .hlq-btn{
      appearance: none;
      border: 1px solid var(--hl-ui-border);
      background: color-mix(in srgb, var(--hl-ui-fg) 6%, transparent);
      color: var(--hl-ui-fg);
      border-radius: 12px;
      padding: 8px 10px;
      font-weight: 700;
      cursor: pointer;
      user-select: none;
    }

    .hlq-btn:hover{
      border-color: color-mix(in srgb, var(--hl-accent) 45%, var(--hl-ui-border));
      background: color-mix(in srgb, var(--hl-accent) 10%, transparent);
    }

    .hlq-btn:active{
      background: color-mix(in srgb, var(--hl-accent) 14%, transparent);
    }

    .hlq-proxy .hlq-msg{
      margin-right: 6px;
    }


/* ---------------------------------------------------------
   HLQ: Standard = unsichtbar (Prod), Debug = sichtbar
   --------------------------------------------------------- */

/* Default: Proxy-Buttons + Status-Text ausblenden */
.hlq-proxy .hlq-btn,
.hlq-proxy .hlq-msg{
  display: none !important;
}

/* Debug: wieder einblenden */
body.lia-hlq-debug .hlq-proxy .hlq-btn{
  display: inline-flex !important;
}
body.lia-hlq-debug .hlq-proxy .hlq-msg{
  display: inline !important;
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

function getStyleSafe(el){
  try{
    const win = el?.ownerDocument?.defaultView || window;
    return win.getComputedStyle(el);
  } catch(e){
    return null;
  }
}

function readCSSVar(name, ...els){
  for (const el of els){
    if (!el) continue;
    const cs = getStyleSafe(el);
    if (!cs) continue;
    const v = (cs.getPropertyValue(name) || "").trim();
    if (v) return normalizeColorValue(v);
  }
  return "";
}

function normalizeColorValue(v){
  v = String(v || "").trim();
  if (!v) return "";

  // schon gültig
  if (
    v.startsWith("rgb(") ||
    v.startsWith("rgba(") ||
    v.startsWith("hsl(") ||
    v.startsWith("hsla(") ||
    v.startsWith("#") ||
    v.startsWith("var(") ||
    /^[a-zA-Z]+$/.test(v)
  ){
    return v;
  }

  // Fall wie: 20,115,117  -> rgb(20,115,117)
  if (/^\d+(\.\d+)?\s*,\s*\d+(\.\d+)?\s*,\s*\d+(\.\d+)?(\s*,\s*\d+(\.\d+)?)?$/.test(v)){
    const parts = v.split(",").map(s => s.trim());
    return parts.length === 3
      ? `rgb(${parts.join(", ")})`
      : `rgba(${parts.join(", ")})`;
  }

  return v;
}

function readThemeAccent(){
  const els = [
    ROOT_DOC.querySelector("#lia-toolbar-nav"),
    ROOT_DOC.querySelector("header#lia-toolbar-nav"),
    ROOT_DOC.querySelector("header.lia-header"),
    ROOT_DOC.body,
    ROOT_DOC.documentElement,
    CONTENT_DOC.querySelector("main"),
    CONTENT_DOC.body,
    CONTENT_DOC.documentElement
  ];

  const names = [
    "--color-highlight",
    "--accent-color",
    "--color-accent",
    "--theme-highlight"
  ];

  for (const name of names){
    const v = readCSSVar(name, ...els);
    if (v) return v;
  }

  return "";
}


function isLikelyNeutralColor(str){
  const c = parseRGB(str);
  if (!c) return false;

  const max = Math.max(c.r, c.g, c.b);
  const min = Math.min(c.r, c.g, c.b);
  const spread = max - min;

  // fast weiß / fast schwarz / fast grau
  if (max < 40) return true;
  if (min > 215) return true;
  if (spread < 14) return true;

  return false;
}

function readRenderedAccentFromToolbar(){
  const left = findHeaderLeft ? findHeaderLeft() : null;
  const tocBtn = left ? findTOCButtonInLeft(left) : null;

  const candidates = [
    tocBtn,
    tocBtn?.querySelector("svg"),
    tocBtn?.querySelector("svg *"),
    tocBtn?.querySelector(".icon"),
    ROOT_DOC.querySelector("#lia-toolbar-nav svg"),
    ROOT_DOC.querySelector("#lia-toolbar-nav svg *"),
    ROOT_DOC.querySelector("header.lia-header svg"),
    ROOT_DOC.querySelector("header.lia-header svg *")
  ];

  for (const el of candidates){
    if (!el) continue;
    const cs = getStyleSafe(el);
    if (!cs) continue;

    const vals = [
      (cs.getPropertyValue("stroke") || "").trim(),
      (cs.getPropertyValue("fill") || "").trim(),
      (cs.getPropertyValue("color") || "").trim()
    ];

    for (const v of vals){
      if (!v) continue;
      if (!parseRGB(v)) continue;
      if (isLikelyNeutralColor(v)) continue;
      return v;
    }
  }

  return "";
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

  const mainStyle = getStyleSafe(contentMain);
  const bodyStyle = getStyleSafe(CONTENT_DOC.body);

  const bgStr =
    firstNonTransparentBg(contentMain) ||
    mainStyle?.backgroundColor ||
    bodyStyle?.backgroundColor ||
    "rgb(255,255,255)";

  const fgStr =
    (mainStyle?.color || "").trim() ||
    (bodyStyle?.color || "").trim() ||
    "rgb(0,0,0)";

  const bg = parseRGB(bgStr) || {r:255,g:255,b:255};
  const isDark = luminance(bg) < 0.45;

  let accentStr =
    readThemeAccent() ||
    readRenderedAccentFromToolbar();

  accentStr = normalizeColorValue(accentStr);

  if (!accentStr){
    accentStr = "rgb(11,95,255)";
  }

  try { setVar(ROOT_DOC, "--hl-accent", accentStr); } catch(e){}
  try { setVar(CONTENT_DOC, "--hl-accent", accentStr); } catch(e){}

  const uiBg = normalizeColorValue(bgStr);
  const uiFg = normalizeColorValue(fgStr);
  const uiMuted = isDark ? "rgba(255,255,255,.68)" : "rgba(0,0,0,.62)";
  const uiBorder = isDark ? "rgba(255,255,255,.16)" : "rgba(0,0,0,.14)";
  const uiShadow = isDark
    ? "0 18px 44px rgba(0,0,0,.55)"
    : "0 16px 42px rgba(0,0,0,.16)";

  try { setVar(ROOT_DOC, "--hl-ui-bg", uiBg); } catch(e){}
  try { setVar(CONTENT_DOC, "--hl-ui-bg", uiBg); } catch(e){}

  try { setVar(ROOT_DOC, "--hl-ui-fg", uiFg); } catch(e){}
  try { setVar(CONTENT_DOC, "--hl-ui-fg", uiFg); } catch(e){}

  try { setVar(ROOT_DOC, "--hl-ui-muted", uiMuted); } catch(e){}
  try { setVar(CONTENT_DOC, "--hl-ui-muted", uiMuted); } catch(e){}

  try { setVar(ROOT_DOC, "--hl-ui-border", uiBorder); } catch(e){}
  try { setVar(CONTENT_DOC, "--hl-ui-border", uiBorder); } catch(e){}

  try { setVar(ROOT_DOC, "--hl-ui-shadow", uiShadow); } catch(e){}
  try { setVar(CONTENT_DOC, "--hl-ui-shadow", uiShadow); } catch(e){}

  const btn = ROOT_DOC.getElementById("lia-hl-btn");
  if (btn){
    try { btn.style.setProperty("color", accentStr, "important"); } catch(e){}
    try { btn.style.setProperty("--hl-accent", accentStr, "important"); } catch(e){}

    const svg = btn.querySelector("svg");
    if (svg){
      try { svg.style.setProperty("color", accentStr, "important"); } catch(e){}
      try { svg.style.setProperty("stroke", accentStr, "important"); } catch(e){}
    }
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

function isScrollable(el){
  if (!el || el === CONTENT_DOC.body || el === CONTENT_DOC.documentElement) return false;
  const cs = CONTENT_WIN.getComputedStyle(el);
  const oy = (cs.overflowY || "").toLowerCase();
  const ox = (cs.overflowX || "").toLowerCase();

  const y = (oy === "auto" || oy === "scroll" || oy === "overlay") && (el.scrollHeight > el.clientHeight + 2);
  const x = (ox === "auto" || ox === "scroll" || ox === "overlay") && (el.scrollWidth  > el.clientWidth  + 2);
  return y || x;
}

function detectScrollHost(){
  // Lia: meist scrollt main oder ein Parent davon
  let n = CONTENT_DOC.querySelector("main") || CONTENT_DOC.body;
  for (let i=0; i<10 && n && n !== CONTENT_DOC.body; i++){
    if (isScrollable(n)) return n;
    n = n.parentElement;
  }
  return null; // => window scroll
}

function getScrollCtx(){
  const host = detectScrollHost();
  if (host){
    const r = host.getBoundingClientRect();
    return {
      host,
      sx: host.scrollLeft || 0,
      sy: host.scrollTop  || 0,
      ox: r.left,   // Host-Viewport-Origin
      oy: r.top
    };
  }
  return {
    host: null,
    sx: CONTENT_WIN.scrollX || 0,
    sy: CONTENT_WIN.scrollY || 0,
    ox: 0,
    oy: 0
  };
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

const S = getScrollCtx();

// 1) pack -> Host-Content-Koordinaten
const raw = rects
  .filter(r => r.width > 0.5 && r.height > 0.5)
  .map(r => ({
    x: (r.left - S.ox) + S.sx,
    y: (r.top  - S.oy) + S.sy,
    w: r.width,
    h: r.height
  }));


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

    // WICHTIG: wenn Range nicht mehr rekonstruierbar -> rects leeren
    if (!r){
      item.rects = [];
      continue;
    }

    // WICHTIG: IMMER überschreiben, auch wenn leer (hidden slide => leere rects)
    item.rects = packedRectsFromRange(r) || [];
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


function getRevealSlideKey(){
  const h = (ROOT_WIN.location.hash || CONTENT_WIN.location.hash || "").trim();
  // Reveal nutzt typischerweise "#/h/v" oder "#/h"
  return (h && h.startsWith("#/")) ? h : null;
}



  function render(){
    overlay.innerHTML = "";

    const filter = shouldFilterBySlide();
    let activeSlide = filter ? getActiveSlideId() : null;

    // >>> WICHTIG: wenn wir im Folienmodus sind, aber die Folie gerade nicht erkannt wird,
    // NICHT "alle" rendern (das ist genau dein Bug). Dann lieber gar nichts rendern.
    if (filter && !activeSlide){
      return;
    }

    // Slides merken (damit Wechsel erkannt werden kann)
    I.__activeSlide = activeSlide || null;

    // Lazy: alten Items slide zuweisen
    for (const it of I.HL) ensureItemSlide(it);

    const items = (filter && activeSlide)
      ? I.HL.filter(it => (it.slide || "global") === activeSlide)
      : I.HL;

    const S = getScrollCtx();

    for (const item of items){
      for (const r of item.rects){
        const el = CONTENT_DOC.createElement("div");
        el.className = "lia-hl-rect";
        el.setAttribute("data-hl", item.color);
        el.setAttribute("data-id", String(item.id));
        el.setAttribute("data-kind", item.kind || "user");
        el.style.left = `${Math.round(S.ox + (r.x - S.sx))}px`;
        el.style.top  = `${Math.round(S.oy + (r.y - S.sy))}px`;
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



let __renderPending = false;
function scheduleRender(){
  if (__renderPending) return;
  __renderPending = true;
  ROOT_WIN.requestAnimationFrame(() => {
    __renderPending = false;
    if (!I.__alive) return;
    render();
  });
}

CONTENT_WIN.addEventListener("scroll", scheduleRender, { passive:true });

// scrollt in Lia häufig auf main/Container: scroll bubbled nicht, aber capture greift!
CONTENT_DOC.addEventListener("scroll", scheduleRender, { passive:true, capture:true });



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


function getHLTOCButtonRect(){
  const tocBtn =
    ROOT_DOC.getElementById("lia-btn-toc") ||
    findTOCButtonInLeft(findHeaderLeft());

  if (!tocBtn) return null;

  try{
    const r = tocBtn.getBoundingClientRect();
    if (!r || r.width < 6 || r.height < 6) return null;
    return r;
  }catch(e){
    return null;
  }
}



function getHLRectSafe(el){
  if (!el) return null;
  try{
    const r = el.getBoundingClientRect();
    if (!r || r.width < 6 || r.height < 6) return null;
    return r;
  }catch(e){
    return null;
  }
}

function getHLAAButtonRect(){
  return getHLRectSafe(ROOT_DOC.getElementById("lia-tff-btn-v2"));
}

function getHLPrimaryDockRect(){
  return getHLAAButtonRect() || getHLTOCButtonRect() || null;
}



function ensureHLUIOverlay(){
  let overlay = ROOT_DOC.getElementById(HL_UI_OVERLAY_ID);
  if (!overlay){
    overlay = ROOT_DOC.createElement("div");
    overlay.id = HL_UI_OVERLAY_ID;
    ROOT_DOC.body.appendChild(overlay);
  }
  return overlay;
}

function shouldUseHLNightlyStackDock(){
  const canvas = ROOT_DOC.querySelector(".lia-canvas");
  if (!canvas) return false;

  const navHidden = canvas.classList.contains("lia-navigation--hidden");
  const presMode  = canvas.classList.contains("lia-mode--presentation");

  return navHidden && presMode;
}

function shouldUseHLInlineDock(){
  return false;
}

function ensureHLInlineSlot(){
  const left = findHeaderLeft();
  if (!left) return null;

  let slot = ROOT_DOC.getElementById(HL_INLINE_SLOT_ID);
  if (!slot){
    slot = ROOT_DOC.createElement("div");
    slot.id = HL_INLINE_SLOT_ID;
  }

  const tocBtn = ROOT_DOC.getElementById("lia-btn-toc") || findTOCButtonInLeft(left);

  if (tocBtn && tocBtn.parentNode === left){
    if (slot.parentNode !== left){
      if (tocBtn.nextSibling){
        left.insertBefore(slot, tocBtn.nextSibling);
      } else {
        left.appendChild(slot);
      }
    } else if (slot.previousSibling !== tocBtn){
      if (tocBtn.nextSibling){
        left.insertBefore(slot, tocBtn.nextSibling);
      } else {
        left.appendChild(slot);
      }
    }
  } else if (slot.parentNode !== left){
    left.insertBefore(slot, left.firstChild || null);
  }

  return slot;
}

function placeHLButtonInCorrectHost(){
  const btn = ROOT_DOC.getElementById("lia-hl-btn");
  const overlay = ensureHLUIOverlay();
  if (!btn || !overlay) return;

  if (btn.parentNode !== overlay){
    overlay.appendChild(btn);
  }

  const slot = ROOT_DOC.getElementById(HL_INLINE_SLOT_ID);
  if (slot && slot.parentNode){
    slot.parentNode.removeChild(slot);
  }

  overlay.style.left = "0px";
  overlay.style.top  = "0px";

  btn.style.left = "";
  btn.style.top  = "";
}

function clearHLPosTimers(){
  try{
    if (!I.posTimers) I.posTimers = [];
    while (I.posTimers.length){
      ROOT_WIN.clearTimeout(I.posTimers.pop());
    }
  }catch(e){}
}

function runHLPositionNow(){
  detectNavStack();
  positionHLButton();
  positionPanelSmart();
}

function scheduleHLRepositionBurst(){
  clearHLPosTimers();

  // sofort
  runHLPositionNow();

  // zwei Frames später (TOC-Klasse/Layout ist dann oft schon stabiler)
  ROOT_WIN.requestAnimationFrame(() => {
    ROOT_WIN.requestAnimationFrame(() => {
      runHLPositionNow();
    });
  });

  // kurze Nachzüge für TOC-Transition
  const delays = [10, 20, 30];
  for (const ms of delays){
    I.posTimers.push(ROOT_WIN.setTimeout(() => {
      runHLPositionNow();
    }, ms));
  }
}

function scheduleHLRepositionBurstThrottled(){
  const now = Date.now();
  if (now - (I.lastBurstAt || 0) < 80) return;
  I.lastBurstAt = now;
  scheduleHLRepositionBurst();
}

function positionHLButton(){
  const btn = ROOT_DOC.getElementById("lia-hl-btn");
  const overlay = ensureHLUIOverlay();
  if (!btn || !overlay) return;

  placeHLButtonInCorrectHost();

  const vp  = getViewport();
  const pad = 8;
  const gap = 8;

  let bw = 40, bh = 40;
  try{
    const br = btn.getBoundingClientRect();
    if (br && br.width > 6 && br.height > 6){
      bw = br.width;
      bh = br.height;
    }
  }catch(e){}

  let left = pad;
  let top  = pad;

  const aaRect  = getHLAAButtonRect();
  const tocRect = getHLTOCButtonRect();
  const dockRect = getHLPrimaryDockRect();

  if (dockRect){
    if (shouldUseHLNightlyStackDock()){
      // Nightly: unter den bestehenden Dock-Anker
      left = dockRect.left + (dockRect.width - bw) / 2;
      top  = dockRect.bottom + 6;
    } else {
      // Normal: rechts neben den bestehenden Dock-Anker
      left = dockRect.right + gap;
      top  = dockRect.top + (dockRect.height - bh) / 2;
    }
  } else {
    const leftHost = findHeaderLeft();
    const hostRect = leftHost ? leftHost.getBoundingClientRect() : null;

    if (hostRect){
      left = hostRect.left + 8;
      top  = hostRect.top + 8;
    }
  }

  left = clamp(left, pad, vp.w - bw - pad);
  top  = clamp(top,  pad, vp.h - bh - pad);

  overlay.style.left = `${Math.round(vp.ox)}px`;
  overlay.style.top  = `${Math.round(vp.oy)}px`;

  btn.style.left = `${Math.round(left)}px`;
  btn.style.top  = `${Math.round(top)}px`;
}


function ensureRootButtonAndPanel(){
  const overlayRoot = ensureHLUIOverlay();

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
    overlayRoot.appendChild(btn);
  }

  let panel = ROOT_DOC.getElementById("lia-hl-panel");
  if (!panel){
    panel = ROOT_DOC.createElement("div");
    panel.id = "lia-hl-panel";
    panel.innerHTML = `
      <div class="hdr"><div class="title">Textmarker</div></div>
      <div class="body">
        <div class="hl-tools">
          <button class="hl-tool" id="hl-tool-mark" type="button" aria-label="Markieren" title="Markieren">
            <svg viewBox="0 0 512 512" aria-hidden="true">
              <g transform="translate(-15 -75) scale(25)">
                <path d="M4 20h4l10.2-10.2a2.2 2.2 0 0 0 0-3.1l-1.1-1.1a2.2 2.2 0 0 0-3.1 0L3.8 15.8 3 21z"
                      fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                <path d="M13.2 6.8l4 4"
                      fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <path d="M3.5 20.5h5"
                      fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </g>
            </svg>
          </button>

          <button class="hl-tool" id="hl-tool-erase" type="button" aria-label="Radierer">
            <svg viewBox="0 0 512 512" aria-hidden="true">
              <path fill="currentColor" d="M490.3,133.177l-99.5-99.6c-33-33-74-11.4-85.5,0l-287.6,287.7c-23.6,23.6-23.6,61.9,0,85.5l81.1,81.1c2.6,2.6,6.2,4.1,10,4.1h102.4c3.7,0,7.3-1.5,10-4.1l269.2-269.2C513.9,195.077,513.9,156.777,490.3,133.177zM205.3,463.777h-90.7l-77-77c-12.6-12.6-12.6-33,0-45.5l67.4-67.4l145.1,145.1L205.3,463.777zM470.4,198.677l-200.3,200.3L125,253.877l200.3-200.3c6.1-6.1,27-18.5,45.5,0l99.5,99.5C482.9,165.777,482.9,186.177,470.4,198.677z"/>
            </svg>
          </button>
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

  placeHLButtonInCorrectHost();
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

  // HLQ Debug-UI (Buttons + Treffer/Lösung) ein/aus
  try{
    CONTENT_DOC.body.classList.toggle("lia-hlq-debug", !!I.debugHLQ);
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
      dot.style.setProperty("background", map[I.state.color] || map.yellow, "important");
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


  function wireRootDelegationOnce(){
    if (I.__rootDelegated) return;
    I.__rootDelegated = true;

    let last = 0;
    function safeToggle(){
      const now = Date.now();
      if (now - last < 250) return; // verhindert Doppelfeuer (touch+click)
      last = now;

      try{
        I.state.active = !I.state.active;
        I.state.panelOpen = I.state.active;
        I.state.tool = "mark";
        applyUI();
        render();
      } catch(err){
        console.error("[HL] toggle failed", err);
        // Fail-safe: Tool sauber schließen, Kurs nicht “killen”
        I.state.active = false;
        I.state.panelOpen = false;
        I.state.tool = "mark";
        try { applyUI(); } catch(e){}
      }
    }

    // Desktop: Click
    ROOT_DOC.addEventListener("click", (e)=>{
      const btn = e.target?.closest?.("#lia-hl-btn");
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      safeToggle();
    }, true);

    // Mobile/alte Browser: Touch
    ROOT_DOC.addEventListener("touchend", (e)=>{
      const btn = e.target?.closest?.("#lia-hl-btn");
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      safeToggle();
    }, { capture:true, passive:false });

    // Not-Aus: Escape schließt immer
    ROOT_DOC.addEventListener("keydown", (e)=>{
      if (e.key !== "Escape") return;
      if (!I.state.active) return;
      I.state.active = false;
      I.state.panelOpen = false;
      I.state.tool = "mark";
      try { applyUI(); render(); } catch(err){}
    }, true);
  }

  function wireUIOnce(){
    const btn = ROOT_DOC.getElementById("lia-hl-btn");
    if (!btn || btn.__liaHLWired) return;
    btn.__liaHLWired = true;

    if (!I.__hlTOCWired){
      I.__hlTOCWired = true;

      ROOT_DOC.addEventListener("click", (e)=>{
        const tocBtn = e.target?.closest?.("#lia-btn-toc");
        if (!tocBtn) return;

        // sofort und während der TOC-Animation nachziehen
        scheduleHLRepositionBurst();
      }, true);

      const toc = ROOT_DOC.getElementById("lia-toc");
      if (toc){
        toc.addEventListener("transitionrun",  ()=> scheduleHLRepositionBurstThrottled(), true);
        toc.addEventListener("transitionstart",()=> scheduleHLRepositionBurstThrottled(), true);
        toc.addEventListener("transitionend",  ()=> scheduleHLRepositionBurstThrottled(), true);
      }
    }

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
        for (const it of I.HL) ensureItemSlide(it);

        const removableKinds = new Set(["user", "solution"]);
        // Falls Lösungen NICHT mit gelöscht werden sollen:
        // const removableKinds = new Set(["user"]);

        if (shouldFilterBySlide()){
          const sid = getActiveSlideId();

          if (sid){
            I.HL = I.HL.filter(it => {
              const kind = it.kind || "user";
              const sameSlide = (it.slide || "global") === sid;

              // andere Folien bleiben immer erhalten
              if (!sameSlide) return true;

              // prefill bleibt erhalten, user/solution werden gelöscht
              return !removableKinds.has(kind);
            });
          } else {
            I.HL = I.HL.filter(it => !removableKinds.has(it.kind || "user"));
          }
        } else {
          I.HL = I.HL.filter(it => !removableKinds.has(it.kind || "user"));
        }

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

    ROOT_WIN.addEventListener("resize", () => {
      scheduleHLRepositionBurstThrottled();
    });

    if (ROOT_WIN.visualViewport){
      ROOT_WIN.visualViewport.addEventListener("resize", () => {
        scheduleHLRepositionBurstThrottled();
      });

      ROOT_WIN.visualViewport.addEventListener("scroll", () => {
        scheduleHLRepositionBurstThrottled();
      });
    }
  }







function ensureRevealSlideObserver(){
  if (I.moSlides) return;

  const rr = getRevealSlidesRoot();
  if (!rr) return;

  I.moSlides = new CONTENT_WIN.MutationObserver(() => {
    // Reveal toggelt Klassen (present/past/future) während Transition.
    // In der Phase kann activeSlideId kurz NULL sein -> dann müssen wir OVERLAY leeren.
    checkSlideAndRender(true);
  });

  I.moSlides.observe(rr, {
    subtree: true,
    attributes: true,
    attributeFilter: ["class", "style", "aria-hidden"],
    childList: true
  });
}







function getRevealSlidesRoot(){
  return CONTENT_DOC.querySelector(".reveal .slides") || null;
}

function getSlideCandidates(){
  // 1) Reveal.js (Lia Präsentationsmodus) => das ist der stabile Weg
  const rr = getRevealSlidesRoot();
  if (rr){
    // Alle sections sind "slide-ish"; current slide hat class "present"
    const secs = Array.from(rr.querySelectorAll("section"));
    // uniq
    return secs.filter((el,i,arr)=> arr.indexOf(el) === i);
  }

  // 2) Fallback (Nicht-Presentation / anderer Modus)
  const main = CONTENT_DOC.querySelector("main") || CONTENT_DOC.body;

  let slides = Array.from(main.querySelectorAll(
    "section[aria-hidden], section[data-index], section[data-slide], section.lia-slide, section.lia-section"
  ));

  if (!slides.length){
    slides = Array.from(main.querySelectorAll("section"));
  }

  if (!slides.length){
    slides = Array.from(main.children).filter(el =>
      el && (el.tagName === "SECTION" || el.tagName === "ARTICLE")
    );
  }

  return slides.filter((el,i,arr)=> arr.indexOf(el) === i);
}

function ensureSlideIds(){
  const slides = getSlideCandidates();
  for (let i = 0; i < slides.length; i++){
    const s = slides[i];
    if (!s.dataset.hlSlide) s.dataset.hlSlide = "F" + (i+1);
  }
}

function slideElFromNode(node){
  ensureSlideIds();
  const el = (node && node.nodeType === 1) ? node : node?.parentElement;
  return el?.closest?.("[data-hl-slide]") || null;
}

function slideIdFromNode(node){
  const s = slideElFromNode(node);
  return s?.dataset?.hlSlide || "global";
}

function shouldFilterBySlide(){
  // Präsentationsmodus (Reveal) => immer filtern
  if (getRevealSlidesRoot()) return true;

  const slides = getSlideCandidates();
  if (slides.length < 2) return false;

  const v =
    (ROOT_DOC.documentElement.getAttribute("data-view") ||
     ROOT_DOC.body.getAttribute("data-view") || "").toLowerCase();
  if (v.includes("presentation")) return true;

  const cls = (ROOT_DOC.body.className || "").toLowerCase();
  if (cls.includes("presentation")) return true;

  return true; // dein Use-Case
}

function getViewportRect(){
  const w = CONTENT_WIN.innerWidth  || CONTENT_DOC.documentElement.clientWidth  || 0;
  const h = CONTENT_WIN.innerHeight || CONTENT_DOC.documentElement.clientHeight || 0;
  return { left:0, top:0, right:w, bottom:h, w, h };
}

function interAreaDOMRect(r, vp){
  const x1 = Math.max(r.left, vp.left);
  const y1 = Math.max(r.top,  vp.top);
  const x2 = Math.min(r.right, vp.right);
  const y2 = Math.min(r.bottom,vp.bottom);
  const w = x2 - x1, h = y2 - y1;
  return (w > 0 && h > 0) ? (w * h) : 0;
}

function getActiveSlideEl(){
  ensureSlideIds();

  // 1) Reveal.js: "present" ist die Wahrheit.
  const rr = getRevealSlidesRoot();
  if (rr){
    const pres = Array.from(rr.querySelectorAll("section.present"));
    if (pres.length){
      // bei vertical stacks gibt's ggf. mehrere present => deepest/last ist die aktuelle Folie
      return pres[pres.length - 1];
    }
  }

  // 2) Fallback: explizite Marker
  const slides = getSlideCandidates();
  if (!slides.length) return null;

  const explicit = slides.find(s =>
    s.classList.contains("present") ||
    s.classList.contains("active") ||
    s.classList.contains("current") ||
    s.getAttribute("aria-hidden") === "false" ||
    s.dataset.active === "true"
  );
  if (explicit) return explicit;

  // 3) Fallback: größter Viewport-Overlap
  const vp = getViewportRect();
  let best = null, bestA = -1;

  for (const s of slides){
    const cs = CONTENT_WIN.getComputedStyle(s);
    if (s.getAttribute("aria-hidden") === "true") continue;
    if (parseFloat(cs.opacity || "1") < 0.01) continue;
    if (cs.display === "none" || cs.visibility === "hidden") continue;

    const r = s.getBoundingClientRect();
    const a = interAreaDOMRect(r, vp);
    if (a > bestA){
      bestA = a;
      best = s;
    }
  }

  return best || slides[0];
}

function getActiveSlideId(){
  const s = getActiveSlideEl();
  return s?.dataset?.hlSlide || null;
}

function ensureItemSlide(item){
  if (item?.slide) return;
  if (!item?.anchor) return;
  const r = rangeFromAnchor(item.anchor);
  if (!r) return;
  item.slide = slideIdFromNode(r.commonAncestorContainer);
}

function checkSlideAndRender(force = false){
  if (!shouldFilterBySlide()){
    if (I.__activeSlide !== null || force){
      I.__activeSlide = null;
      render();
    }
    return;
  }

  const sid = getActiveSlideId(); // kann während Transition null sein!

  // WICHTIG: auch bei sid===null rendern (damit overlay geleert wird).
  if (sid !== I.__activeSlide || force){
    I.__activeSlide = sid || null;
    render(); // render() leert overlay immer am Anfang; bei sid==null bleibt es leer
  }
}


















function slideIdFromNode(node){
  // Präsentation: eindeutig über Hash
  const hk = getRevealSlideKey();
  if (hk) return hk;

  const s = slideElFromNode(node);
  return s?.dataset?.hlSlide || "global";
}

function shouldFilterBySlide(){
  // In Reveal/Päsentation IMMER filtern, auch wenn nur 1 Slide im DOM ist
  if (getRevealSlideKey()) return true;

  const v =
    (ROOT_DOC.documentElement.getAttribute("data-view") ||
     ROOT_DOC.body.getAttribute("data-view") || "").toLowerCase();
  const cls = (ROOT_DOC.body.className || "").toLowerCase();

  if (v.includes("presentation")) return true;
  if (cls.includes("presentation")) return true;

  // Non-presentation: nur filtern, wenn es wirklich mehrere Kandidaten gibt
  const slides = getSlideCandidates();
  return slides.length >= 2;
}

function getActiveSlideId(){
  // Präsentation: Hash ist die Wahrheit
  const hk = getRevealSlideKey();
  if (hk) return hk;

  const s = getActiveSlideEl();
  return s?.dataset?.hlSlide || null;
}




function getViewportRect(){
  const w = CONTENT_WIN.innerWidth  || CONTENT_DOC.documentElement.clientWidth  || 0;
  const h = CONTENT_WIN.innerHeight || CONTENT_DOC.documentElement.clientHeight || 0;
  return { left:0, top:0, right:w, bottom:h, w, h };
}

function interAreaDOMRect(r, vp){
  const x1 = Math.max(r.left, vp.left);
  const y1 = Math.max(r.top,  vp.top);
  const x2 = Math.min(r.right, vp.right);
  const y2 = Math.min(r.bottom,vp.bottom);
  const w = x2 - x1, h = y2 - y1;
  return (w > 0 && h > 0) ? (w * h) : 0;
}




// Lazy-Migration: alte HL-Items ohne slide bekommen eins beim Rendern
function ensureItemSlide(item){
  if (item?.slide) return;
  if (!item?.anchor) return;
  const r = rangeFromAnchor(item.anchor);
  if (!r) return;
  item.slide = slideIdFromNode(r.commonAncestorContainer);
}








        // =========================
        // Textmarker-Quiz (ROBUST: eigener Check/Solve + Scope)
        // =========================
        function ensureScopeIds(){
          const scopes = Array.from(CONTENT_DOC.querySelectorAll(".markerquiz"));
          for (let i=0; i<scopes.length; i++){
            const s = scopes[i];
            if (!s.dataset.hlScope){
              s.dataset.hlScope = "S" + (i+1);
            }
          }
        }

        function scopeElFromNode(node){
          const el = (node && node.nodeType === 1) ? node : node?.parentElement;
          return el?.closest?.(".markerquiz") || null;
        }

        function scopeIdFromNode(node){
          ensureScopeIds();
          const s = scopeElFromNode(node);
          return (s && s.dataset.hlScope) ? s.dataset.hlScope : "global";
        }

        function rectArea(rs){
          return (rs || []).reduce((a,r)=> a + Math.max(0,r.w)*Math.max(0,r.h), 0);
        }
        function interArea(a,b){
          const x1 = Math.max(a.x, b.x);
          const y1 = Math.max(a.y, b.y);
          const x2 = Math.min(a.x+a.w, b.x+b.w);
          const y2 = Math.min(a.y+a.h, b.y+b.h);
          const w = x2 - x1, h = y2 - y1;
          return (w>0 && h>0) ? w*h : 0;
        }
        function overlapScore(targetRects, userRects){
          const tA = rectArea(targetRects);
          if (tA <= 0) return 0;
          let inter = 0;
          for (const tr of (targetRects||[])){
            for (const ur of (userRects||[])){
              inter += interArea(tr, ur);
            }
          }
          return inter / tA; // 0..1
        }

        function collectTargetsInScope(scopeEl){
          const root = scopeEl || CONTENT_DOC;
          const els = Array.from(root.querySelectorAll(".lia-hl-target[data-hl-expected]"));

          return els.map(el=>{
            const color = el.getAttribute("data-hl-expected") || "yellow";
            const r = CONTENT_DOC.createRange();
            r.selectNodeContents(el);

            const anchor = {
              sp: nodeToPath(r.startContainer),
              so: r.startOffset,
              ep: nodeToPath(r.endContainer),
              eo: r.endOffset
            };
            return { el, color, anchor };
          });
        }

// Schwellen: "genug richtig" und "maximal erlaubte falsche Farbe auf dem Target"
const HLQ_OK    = 0.95;  // wie bisher
const HLQ_WRONG = 0.10;  // >10% falsche Farbe auf dem Target => falsch
const HLQ_PREC  = 0.55;  // "nicht zu groß markieren" (Precision) 0..1
const HLQ_PAD   = 2;     // px: Target leicht aufblasen für Robustheit
const HLQ_EXTRA_OUT_FRAC = 0.22; // max. 22% der Markierungsfläche darf außerhalb liegen
const HLQ_EXTRA_OUT_ABS  = 80;  // kleine Schlampigkeit (ein paar Pixel/Leerzeichen) erlauben

function expandRect(r, p){
  return { x:r.x-p, y:r.y-p, w:r.w+2*p, h:r.h+2*p };
}

function interSum(targetRects, userRects){
  let inter = 0;
  for (const tr of (targetRects || [])){
    for (const ur of (userRects || [])){
      inter += interArea(tr, ur);
    }
  }
  return inter;
}

// NUR die User-Rects nehmen, die wirklich am Target "dranhängen"
function subsetRectsByTarget(userRects, targetRects, pad = HLQ_PAD){
  const out = [];
  const tExp = (targetRects || []).map(r => expandRect(r, pad));

  for (const ur of (userRects || [])){
    let hit = false;
    for (const tr of tExp){
      if (interArea(tr, ur) > 0){
        hit = true;
        break;
      }
    }
    if (hit) out.push(ur);
  }
  return out;
}


// True, wenn irgendein User-Rect irgendein Target-Rect berührt (mit Pad)
function rectsTouchTargets(userRects, targetRects, pad = HLQ_PAD){
  if (!userRects?.length || !targetRects?.length) return false;
  const tExp = targetRects.map(r => expandRect(r, pad));

  for (const ur of userRects){
    for (const tr of tExp){
      if (interArea(tr, ur) > 0) return true;
    }
  }
  return false;
}




function __hlqActiveSlideId(scopeEl){
  // In Presentation liefert slideIdFromNode() i.d.R. die aktive Folie.
  // Fallbacks für Course/Edgecases:
  try { return (typeof slideIdFromNode === "function" && slideIdFromNode(scopeEl)) || "global"; } catch(e){}
  try { return (typeof getActiveSlideId === "function" && getActiveSlideId()) || "global"; } catch(e){}
  return "global";
}




function mergedUserRects(scopeId, slideId, mode, refColor){
  const out = [];

  const OPT = {
    yTol: 4,
    gapTol: 12,
    minW: 2,
    minH: 2,
    padX: 0,
    padY: 0
  };

  for (const h of I.HL){
    if ((h.kind || "user") !== "user") continue;
    if ((h.scope || "global") !== scopeId) continue;

    // >>> NEU: nur aktuelle Folie
    if ((h.slide || "global") !== slideId) continue;

    if (mode === "only"   && h.color !== refColor) continue;
    if (mode === "except" && h.color === refColor) continue;

    const rs = Array.isArray(h.rects) ? h.rects : [];
    if (!rs.length) continue;

    const mergedThisHighlight = mergeRectsToLines(rs, OPT);
    out.push(...mergedThisHighlight);
  }

  return out;
}



function matchTarget(scopeId, slideId, expectedColor, targetRects){
  const wantAny = (expectedColor === "any" || expectedColor === "*" || !expectedColor);

  const goodAll = wantAny
    ? mergedUserRects(scopeId, slideId, "all")
    : mergedUserRects(scopeId, slideId, "only", expectedColor);

  const goodNear = subsetRectsByTarget(goodAll, targetRects, HLQ_PAD);

  const tA = rectArea(targetRects);
  const uA = rectArea(goodNear);
  const inter = (tA > 0 && uA > 0) ? interSum(targetRects, goodNear) : 0;

  const sGood = (tA > 0) ? (inter / tA) : 0;
  const sPrec = (uA > 0) ? (inter / uA) : 0;

  if (wantAny){
    return { pass: (sGood >= HLQ_OK) && (sPrec >= HLQ_PREC), sGood, sBad: 0, sPrec };
  }

  const badAll  = mergedUserRects(scopeId, slideId, "except", expectedColor);
  const badNear = subsetRectsByTarget(badAll, targetRects, HLQ_PAD);

  const badInter = (tA > 0) ? interSum(targetRects, badNear) : 0;
  const sBad = (tA > 0) ? (badInter / tA) : 0;

  const pass =
    (sGood >= HLQ_OK) &&
    (sPrec >= HLQ_PREC) &&
    (sBad  <= HLQ_WRONG);

  return { pass, sGood, sBad, sPrec };
}






function evalScope(scopeEl){
  ensureScopeIds();

  const scopeId = scopeEl?.dataset?.hlScope || "global";
  const slideId = __hlqActiveSlideId(scopeEl);  // >>> NEU

  const targets = collectTargetsInScope(scopeEl);
  if (!targets.length) return { ok:0, total:0, pass:false, badColor:0, tooWide:0, extra:0 };

  recalcAllHighlights();

  const allTargetRects = [];
  let ok = 0, badColor = 0, tooWide = 0;

  for (const t of targets){
    const r = rangeFromAnchor(t.anchor);
    if (!r) continue;

    const tRects = packedRectsFromRange(r);
    if (tRects?.length) allTargetRects.push(...tRects);

    const m = matchTarget(scopeId, slideId, t.color, tRects); // >>> NEU

    if (m.sBad  > HLQ_WRONG) badColor++;
    if (m.sPrec < HLQ_PREC)  tooWide++;
    if (m.pass) ok++;
  }

  // 2) Extra-Markierungen: NUR auf dieser Folie
  let extra = 0;
  const allTargetRectsExp = allTargetRects.map(r => expandRect(r, HLQ_PAD));

  for (const h of I.HL){
    if ((h.kind || "user") !== "user") continue;
    if ((h.scope || "global") !== scopeId) continue;

    // >>> NEU: nur aktuelle Folie
    if ((h.slide || "global") !== slideId) continue;

    if (!Array.isArray(h.rects) || !h.rects.length) continue;

    const uA = rectArea(h.rects);
    if (uA <= 0) continue;

    const inter = interSum(allTargetRectsExp, h.rects);
    if (inter <= 0){
      extra++;
      continue;
    }

    const outA   = Math.max(0, uA - inter);
    const outFrac= outA / uA;

    if (outA > HLQ_EXTRA_OUT_ABS && outFrac > HLQ_EXTRA_OUT_FRAC){
      extra++;
    }
  }

  const pass =
    (ok === targets.length) &&
    (badColor === 0) &&
    (tooWide === 0) &&
    (extra === 0);

  return { ok, total: targets.length, pass, badColor, tooWide, extra };
}





        function solveScope(scopeEl){
          ensureScopeIds();
          const scopeId = scopeEl?.dataset?.hlScope || "global";
          const slideId = __hlqActiveSlideId(scopeEl);  // >>> NEU
        
          // >>> NEU: nur Lösungen dieser Folie+Scope löschen
          I.HL = I.HL.filter(h => !(
            (h.kind === "solution") &&
            ((h.scope || "global") === scopeId) &&
            ((h.slide || "global") === slideId)
          ));
        
          const targets = collectTargetsInScope(scopeEl);
          for (const t of targets){
            const r = rangeFromAnchor(t.anchor);
            if (!r) continue;
            const rects = packedRectsFromRange(r);
        
            const showColor = (t.color === "any") ? "yellow" : t.color;
        
            I.HL.push({
              id: I.nextId++,
              kind: "solution",
              scope: scopeId,
              slide: slideId,     // >>> wichtig
              color: showColor,
              anchor: t.anchor,
              rects
            });
          }
          render();
        }



        function setProxyMsg(proxyEl, txt){
          const msg = proxyEl.querySelector(".hlq-msg");
          if (msg) msg.textContent = txt || "";
        }


function setLiaValue(input, v){
  if (!input) return;
  try { input.value = String(v); } catch(e){ return; }

  // Lia reagiert je nach Version auf unterschiedliche Events
  const evts = ["input","change","keyup","blur"];
  for (const name of evts){
    try { input.dispatchEvent(new Event(name, { bubbles:true })); } catch(e){}
    try { input.dispatchEvent(new Event("keydown", { bubbles:true })); } catch(e){}
  }
}

function getLiaInput(proxy){
  // Priorität: wirklich nur innerhalb der Lia-Quiz-Ausgabe
  return proxy.querySelector(".hlq-lia input, .hlq-lia textarea, .hlq-lia select") ||
         proxy.querySelector("input, textarea, select");
}

function getLiaButtons(proxy){
  // Erst in hlq-lia suchen, aber falls Lia umgebaut hat: fallback auf proxy
  const inside = (root) =>
    Array.from(root.querySelectorAll("button,[role='button'],a"))
      .filter(b => !b.closest("button.hlq-btn")); // unsere Buttons raus

  const wrap = proxy.querySelector(".hlq-lia");
  let btns = wrap ? inside(wrap) : [];

  if (!btns.length){
    btns = inside(proxy);
  }
  return btns;
}


function inferAction(btn, proxy){
  const t = (
    btn.getAttribute("aria-label") ||
    btn.getAttribute("title") ||
    btn.textContent ||
    ""
  ).trim().toLowerCase();

  const cls = (btn.className || "").toLowerCase();

  // 1) Primär: Text/aria/title/class
  if (t.includes("prüf") || t.includes("check") || cls.includes("check") || cls.includes("verify")) return "check";
  if (t.includes("aufl") || t.includes("lös")  || t.includes("solve") || t.includes("solution") ||
      cls.includes("solution") || cls.includes("solve") || cls.includes("answer")) return "solve";

  // 2) Fallback: Position im Button-Set
  const btns = getLiaButtons(proxy).filter(b => b.closest(".hlq-proxy") === proxy);
  const idx = btns.indexOf(btn);

  // typisch: 0=prüfen, 1=auflösen
  if (idx === 0) return "check";
  if (idx === 1) return "solve";

  return null;
}

// Klick auf Lia-Buttons (capture): erst Marker-Logik, dann Lia normal weiterlaufen lassen
function handleHLQAction(act, proxy, btnRef){
  const scopeEl = proxy.closest(".markerquiz") || scopeElFromNode(btnRef);
  const input   = getLiaInputRobust(proxy);

  if (act === "check"){
    const r = evalScope(scopeEl);
    setProxyMsg(proxy,
      r.total
        ? `Treffer: ${r.ok}/${r.total}` +
          (r.badColor ? ` — falsche Farbe: ${r.badColor}` : "") +
          (r.tooWide  ? ` — zu groß: ${r.tooWide}` : "") +
          (r.extra   ? ` — extra: ${r.extra}` : "")
        : "Keine Targets gefunden."
    );
    setLiaValue(input, r.pass ? 1 : 0);
    return;
  }

  if (act === "solve"){
    solveScope(scopeEl);
    setProxyMsg(proxy, "Lösung eingeblendet.");
    setLiaValue(input, 1);
    return;
  }
}


function inferActionLoose(btn){
  const el = btn?.closest?.("button,[role='button'],a,[role='link']") || btn;
  if (!el) return null;

  const t = (
    el.getAttribute("aria-label") ||
    el.getAttribute("title") ||
    el.textContent ||
    ""
  ).trim().toLowerCase();

  const clsList = Array.from(el.classList || []).map(x => String(x).toLowerCase());

  // Primär: echte Lia-Quiz-Klassen
  if (clsList.includes("lia-quiz__check")) return "check";
  if (clsList.includes("lia-quiz__resolve")) return "solve";

  // Sekundär: wirklich eindeutige Texte
  if (
    t === "prüfen" ||
    t === "check" ||
    t.startsWith("prüfen")
  ) return "check";

  if (
    t === "auflösen" ||
    t === "lösung" ||
    t === "solve" ||
    t === "show solution" ||
    t.startsWith("auflösen") ||
    t.startsWith("lösung")
  ) return "solve";

  return null;
}

function findProxyForAnyButton(btn){
  // 1) Direkt drin?
  let p = btn.closest?.(".hlq-proxy");
  if (p) return p;

  // 2) Sonst: im selben markerquiz den "nächstliegenden" Proxy nehmen
  const scope = btn.closest?.(".markerquiz") || CONTENT_DOC;
  const proxies = Array.from(scope.querySelectorAll(".hlq-proxy"));
  if (!proxies.length) return null;
  if (proxies.length === 1) return proxies[0];

  // Heuristik: "letzter Proxy vor dem Button" in Dokumentreihenfolge
  for (let i = proxies.length - 1; i >= 0; i--){
    const pr = proxies[i];
    const rel = pr.compareDocumentPosition(btn);
    // btn folgt auf pr => pr ist vor btn
    if (rel & Node.DOCUMENT_POSITION_FOLLOWING) return pr;
  }

  // Falls Button aus irgendeinem Grund vor allen Proxies liegt:
  return proxies[0];
}

function getLiaInputRobust(proxy){
  // 1) Im Proxy selbst
  let input =
    proxy.querySelector(".hlq-lia input, .hlq-lia textarea, .hlq-lia select") ||
    proxy.querySelector("input, textarea, select");
  if (input) return input;

  // 2) In unmittelbarer Nähe im selben markerquiz (Lia kann Input rausziehen)
  const scope = proxy.closest?.(".markerquiz") || CONTENT_DOC;
  const pr = proxy.getBoundingClientRect();

  let best = null;
  let bestScore = Infinity;

  const cands = Array.from(scope.querySelectorAll("input, textarea, select"));
  for (const el of cands){
    const br = el.getBoundingClientRect();
    const dy = Math.abs((br.top + br.height/2) - (pr.top + pr.height/2));
    const dx = Math.abs((br.left + br.width/2) - (pr.left + pr.width/2));
    const score = dy * 10 + dx;

    // harte Plausibilitätsgrenze: sonst erwischen wir fremde Inputs
    if (dy > 300) continue;

    if (score < bestScore){
      bestScore = score;
      best = el;
    }
  }
  return best;
}

function isForeignToolUi(node){
  const el = (node && node.nodeType === 1) ? node : node?.parentElement;
  if (!el) return false;

  return !!el.closest([
    "[data-hlq-ignore='1']",
    "[data-lia-hlq-ignore='1']",
    "[data-lia-canvas-ui='1']",

    ".lia-tool-menu",
    ".lia-undo-btn",
    ".lia-redo-btn",
    ".lia-color-btn",
    ".lia-eraser-btn",
    ".lia-rect-btn",
    ".lia-bgmenu-btn",

    ".lia-annot-btn",
    ".lia-annot-toolbar",
    ".lia-annot-menu",
    ".lia-annot-panel"
  ].join(","));
}

function isRelevantHLQArea(node){
  const el = (node && node.nodeType === 1) ? node : node?.parentElement;
  if (!el) return false;
  if (isForeignToolUi(el)) return false;

  return !!el.closest(".hlq-proxy, .hlq-lia, .markerquiz");
}

// EIN Listener: funktioniert auch, wenn Lia Buttons ausserhalb des Proxys rendert
CONTENT_DOC.addEventListener("click", (e)=>{

  const clicked = e.target?.closest?.("button,[role='button'],a,[role='link']");
  if (!clicked) return;

  // Fremde Tool-UI grundsätzlich ignorieren
  if (isForeignToolUi(clicked)) return;

  // Nur in echten HLQ-Bereichen überhaupt weiterarbeiten
  if (!isRelevantHLQArea(clicked)) return;

  // (A) Unsere eigenen HLQ-Buttons
  const own = clicked.closest("button.hlq-btn[data-hlq-act]");
  if (own){
    const proxy = own.closest(".hlq-proxy");
    if (!proxy) return;

    const act = own.getAttribute("data-hlq-act");
    if (!act) return;

    handleHLQAction(act, proxy, own);
    return;
  }

  // (B) Echte Lia-Quiz-Buttons
  const act = inferActionLoose(clicked);
  if (!act) return;

  const proxy = findProxyForAnyButton(clicked);
  if (!proxy) return;

  // Scope-Sicherheit: fremde Buttons nicht auf irgendeinen Proxy mappen
  const scopeClicked = clicked.closest?.(".markerquiz");
  const scopeProxy   = proxy.closest?.(".markerquiz");

  if (scopeClicked && scopeProxy && scopeClicked !== scopeProxy){
    return;
  }

  handleHLQAction(act, proxy, clicked);

  // Kein preventDefault/stopPropagation:
  // Lia darf seine eigene UI weiter normal rendern.
}, true);













  // =========================
  // Markieren / Radieren
  // =========================
    function isForbiddenTarget(node){
      const el = (node && node.nodeType === 1) ? node : node?.parentElement;
      if (!el) return false;
      return !!el.closest("input, textarea, select, button, a, code, pre, .hlq-proxy");
    }


function trimRangeWhitespace(range){
  if (!range) return false;

  const WS = (ch) =>
    ch === " "  || ch === "\t" || ch === "\n" || ch === "\r" ||
    ch === "\u00A0" || ch === "\u2009" || ch === "\u202F"; // NBSP + schmale Spaces

  // Textknoten einsammeln, die im Range liegen
  const root = range.commonAncestorContainer.nodeType === 1
    ? range.commonAncestorContainer
    : range.commonAncestorContainer.parentNode;

  if (!root) return false;

  const tw = CONTENT_DOC.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node){
      try{
        return range.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      } catch(e){
        return NodeFilter.FILTER_REJECT;
      }
    }
  });

  const segs = [];
  let n;
  while ((n = tw.nextNode())){
    const text = n.nodeValue || "";
    if (!text.length) continue;

    let s = 0;
    let e = text.length;

    if (n === range.startContainer) s = range.startOffset;
    if (n === range.endContainer)   e = range.endOffset;

    // wenn Range-Container Element ist (selten), lassen wir s/e bei 0/len
    // -> wird dann über intersectsNode trotzdem sinnvoll abgedeckt

    s = Math.max(0, Math.min(s, text.length));
    e = Math.max(0, Math.min(e, text.length));
    if (e <= s) continue;

    segs.push({ node: n, s, e, text: text.slice(s, e) });
  }

  if (!segs.length) return false;

  // neuen Start suchen (erstes Nicht-Whitespace-Zeichen)
  let newStartNode = null, newStartOff = 0;
  for (const seg of segs){
    const t = seg.text;
    let i = 0;
    while (i < t.length && WS(t[i])) i++;
    if (i < t.length){
      newStartNode = seg.node;
      newStartOff  = seg.s + i;
      break;
    }
  }

  // neuen Endpunkt suchen (letztes Nicht-Whitespace-Zeichen)
  let newEndNode = null, newEndOff = 0;
  for (let k = segs.length - 1; k >= 0; k--){
    const seg = segs[k];
    const t = seg.text;
    let i = t.length - 1;
    while (i >= 0 && WS(t[i])) i--;
    if (i >= 0){
      newEndNode = seg.node;
      newEndOff  = seg.s + i + 1; // Range-End ist exklusiv
      break;
    }
  }

  if (!newStartNode || !newEndNode) return false;

  try{
    range.setStart(newStartNode, newStartOff);
    range.setEnd(newEndNode, newEndOff);
    return !range.collapsed;
  } catch(e){
    return false;
  }
}



  function addHighlightFromSelection(){
    const sel = CONTENT_WIN.getSelection ? CONTENT_WIN.getSelection() : null;
    if (!sel || sel.rangeCount === 0) return;

    const range0 = sel.getRangeAt(0);
    if (!range0 || range0.collapsed) return;

    // Nicht in interaktiven/Code-Elementen markieren
    if (isForbiddenTarget(range0.startContainer) || isForbiddenTarget(range0.endContainer)) return;

    // Scope bestimmen (passt zu evalScope/solveScope)
    ensureScopeIds();
    const scopeId = scopeIdFromNode(range0.commonAncestorContainer);

    // Range klonen (sicherer, falls UI/DOM irgendwas macht)
    const range = range0.cloneRange();

    // >>> Doppelclick/Schlampigkeit: führende/nachfolgende Whitespaces ignorieren
    if (!trimRangeWhitespace(range)) {
      try { sel.removeAllRanges(); } catch(e){}
      return;
    }


    // Rechtecke packen
    const packed = packedRectsFromRange(range);
    if (!packed.length) {
      try { sel.removeAllRanges(); } catch(e){}
      return;
    }

    // Anchor serialisieren
    const anchor = {
      sp: nodeToPath(range.startContainer),
      so: range.startOffset,
      ep: nodeToPath(range.endContainer),
      eo: range.endOffset
    };

    const slideId =
      (typeof getActiveSlideId === "function" && getActiveSlideId())
    ? getActiveSlideId()
    : slideIdFromNode(range.commonAncestorContainer);


    // User-Highlight speichern (WICHTIG: scope statt qid)
    I.HL.push({
      id: I.nextId++,
      kind: "user",
      scope: scopeId,
      slide: slideId,
      color: I.state.color,
      anchor,
      rects: packed
    });

    // Selection entfernen
    try { sel.removeAllRanges(); } catch(e){}

    render();
  }



  function findUserHighlightAtPoint(clientX, clientY){
    const S = getScrollCtx();

    // Klick von Viewport-Koordinaten in Content-Koordinaten umrechnen
    const x = (clientX - S.ox) + S.sx;
    const y = (clientY - S.oy) + S.sy;

    // aktuelle Folie bestimmen, falls Folienfilter aktiv ist
    const activeSlide = shouldFilterBySlide() ? getActiveSlideId() : null;

    // von hinten nach vorne: zuletzt erzeugte User-Markierung gewinnt
    for (let i = I.HL.length - 1; i >= 0; i--){
      const item = I.HL[i];
      if (!item) continue;

      // Nur echte User-Markierungen dürfen radiert werden
      if ((item.kind || "user") !== "user") continue;

      // Im Folienmodus nur auf aktueller Folie radieren
      if (activeSlide && (item.slide || "global") !== activeSlide) continue;

      const rects = Array.isArray(item.rects) ? item.rects : [];
      for (const r of rects){
        if (
          x >= r.x &&
          x <= r.x + r.w &&
          y >= r.y &&
          y <= r.y + r.h
        ){
          return item;
        }
      }
    }

    return null;
  }



  CONTENT_DOC.addEventListener("mouseup", (e)=>{
    if (isForeignToolUi(e.target)) return;
    if (!I.state.active) return;

    if (I.state.panelOpen){
      I.state.panelOpen = false;
      applyUI();
    }

    if (I.state.tool !== "mark") return;
    addHighlightFromSelection();
  }, true);

  CONTENT_DOC.addEventListener("pointerdown", (e)=>{
    if (isForeignToolUi(e.target)) return;
    if (!I.state.active) return;
    if (I.state.tool !== "erase") return;
  
    // Vor dem Hit-Test alle Rechtecke aktualisieren
    recalcAllHighlights();
  
    // Immer geometrisch prüfen – nicht auf e.target verlassen
    const hit = findUserHighlightAtPoint(e.clientX, e.clientY);
    if (!hit) return;
  
    I.HL = I.HL.filter(x => x.id !== hit.id);
  
    e.preventDefault();
    e.stopPropagation();
  
    render();
  }, true);


function detectNavStack(){
  ROOT_DOC.body.classList.toggle("lia-hl-navstack", !!shouldUseHLNightlyStackDock());
}






// =========================
// Prefill-Markierungen (@marked*)
// =========================
I.__prefillKeys = I.__prefillKeys || new Set();

function __prefillPresentSection(){
  return (
    CONTENT_DOC.querySelector("section.present") ||
    ROOT_DOC.querySelector("section.present") ||
    null
  );
}

function __prefillInPresentation(){
  if (ROOT_WIN.Reveal || CONTENT_WIN.Reveal) return true;
  if (__prefillPresentSection()) return true;
  const h = (ROOT_WIN.location.hash || CONTENT_WIN.location.hash || "");
  if (h.startsWith("#/")) return true;
  const v = ((ROOT_DOC.documentElement.getAttribute("data-view") || "") + " " + (ROOT_DOC.body.className || "")).toLowerCase();
  return v.includes("presentation");
}

function __prefillScanRoot(){
  if (__prefillInPresentation()){
    return __prefillPresentSection() || CONTENT_DOC;
  }
  return CONTENT_DOC;
}

function ensurePrefills(){
  const root = __prefillScanRoot();
  const els = Array.from(root.querySelectorAll(".lia-hl-prefill[data-hl-prefill]"));
  if (!els.length) return;

  try { if (typeof ensureScopeIds === "function") ensureScopeIds(); } catch(e){}

  for (const el of els){
    const color = (el.getAttribute("data-hl-prefill") || "yellow").toLowerCase();

    // Range über den Inhalt des Spans
    const r = CONTENT_DOC.createRange();
    try { r.selectNodeContents(el); } catch(e){ continue; }

    const anchor = {
      sp: nodeToPath(r.startContainer),
      so: r.startOffset,
      ep: nodeToPath(r.endContainer),
      eo: r.endOffset
    };

    // Scope + Slide (wichtig gegen Folien-Leaks)
    let scopeId = "global";
    try { scopeId = (typeof scopeIdFromNode === "function") ? scopeIdFromNode(r.commonAncestorContainer) : "global"; } catch(e){}

    let slideId = "global";
    try {
      slideId =
        (typeof getActiveSlideId === "function" && getActiveSlideId()) ||
        (typeof slideIdFromNode === "function" ? slideIdFromNode(r.commonAncestorContainer) : "global") ||
        "global";
    } catch(e){}

    const key = `P|${color}|${scopeId}|${slideId}|${anchor.sp}|${anchor.so}|${anchor.ep}|${anchor.eo}`;
    if (I.__prefillKeys.has(key)) continue;

    // Rects: wenn Slide gerade “hidden” ist, kann das erstmal leer sein – wird später beim Render/Recalc gefüllt
    let rects = [];
    try { rects = packedRectsFromRange(r) || []; } catch(e){ rects = []; }

    I.HL.push({
      id: I.nextId++,
      kind: "prefill",     // zählt NICHT als user => beeinflusst dein Quiz nicht
      scope: scopeId,
      slide: slideId,
      color,
      anchor,
      rects
    });

    I.__prefillKeys.add(key);
  }

  render();
}










  // =========================
  // Tick (throttled) — Docking stabil, ohne Observer-Loop
  // =========================
  function tick(){
      ensureCSS();
      if (!I.__hashWired){
      I.__hashWired = true;
      try { ROOT_WIN.addEventListener("hashchange", () => checkSlideAndRender(true)); } catch(e){}
      try { CONTENT_WIN.addEventListener("hashchange", () => checkSlideAndRender(true)); } catch(e){}
    }
    if (I.ticking) return;
    I.ticking = true;

    ROOT_WIN.requestAnimationFrame(() => {
      try{
        ensureRootButtonAndPanel();
        wireRootDelegationOnce();
        runHLPositionNow();

        ensureLayoutResizeObserver();
        ensureRevealSlideObserver();
        checkLayoutAndRecalc();
        ensureSwatchesOnce();
        checkSlideAndRender();
        ensurePrefills();
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
    I.moTheme = new MutationObserver(() => {
      adaptUIVars();
      applyUI();
      runHLPositionNow();
    });
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
      checkSlideAndRender();  
    }, 350);
  }









// =========================================================
// OVERRIDE: Reveal/Lia Slide-Detection (ROOT+CONTENT robust)
// =========================================================
function getRevealSlidesRoot(){
  return (
    CONTENT_DOC.querySelector(".reveal .slides") ||
    ROOT_DOC.querySelector(".reveal .slides") ||
    null
  );
}

function getRevealAPI(){
  // Lia/Reveal ist meist im ROOT, manchmal im CONTENT
  return ROOT_WIN.Reveal || CONTENT_WIN.Reveal || null;
}

function activeSlideKeyFromDOM(){
  const rr = getRevealSlidesRoot();
  if (!rr) return null;

  const pres = Array.from(rr.querySelectorAll("section.present"));
  const cur  = pres.length ? pres[pres.length - 1] : null;
  if (!cur) return null;

  // Reveal setzt oft data-index-h/v/f
  const hA = cur.getAttribute("data-index-h");
  const vA = cur.getAttribute("data-index-v");
  const fA = cur.getAttribute("data-index-f");
  if (hA !== null) return `D:${hA}/${vA || 0}/${fA || 0}`;

  // Fallback: Indizes aus DOM-Struktur ableiten (horizontal + vertikal)
  // top-level section = horizontal, inner section = vertical
  let top = cur;
  while (top.parentElement && top.parentElement.tagName === "SECTION") top = top.parentElement;

  const hSecs = Array.from(rr.children).filter(el => el.tagName === "SECTION");
  const h = Math.max(0, hSecs.indexOf(top));

  let v = 0;
  if (cur !== top){
    const vSecs = Array.from(top.children).filter(el => el.tagName === "SECTION");
    v = Math.max(0, vSecs.indexOf(cur));
  }
  return `D:${h}/${v}/0`;
}

function getActiveSlideId(){
  // 1) Reveal API (am stabilsten)
  const R = getRevealAPI();
  if (R && typeof R.getIndices === "function"){
    const idx = R.getIndices() || {};
    return `R:${idx.h || 0}/${idx.v || 0}/${idx.f || 0}`;
  }

  // 2) DOM (present-class)
  const dk = activeSlideKeyFromDOM();
  if (dk) return dk;

  // 3) Hash (falls Reveal Router aktiv ist)
  const h = (ROOT_WIN.location.hash || CONTENT_WIN.location.hash || "");
  if (h.startsWith("#/")) return `H:${h}`;

  return null;
}

function shouldFilterBySlide(){
  // Wenn Reveal irgendwo vorhanden ist -> IMMER filtern
  if (getRevealSlidesRoot()) return true;

  // sonst: nur filtern, wenn wirklich mehrere Slides sichtbar sind
  const slides = getSlideCandidates ? getSlideCandidates() : [];
  return slides.length >= 2;
}

function slideIdFromNode(node){
  // Im Präsentationsmodus: aktuelle Folie ist die Wahrheit (DOM kann virtualisiert sein)
  const sid = getActiveSlideId();
  if (sid) return sid;

  // Fallback (Non-presentation)
  try{
    const s = slideElFromNode ? slideElFromNode(node) : null;
    return s?.dataset?.hlSlide || "global";
  } catch(e){
    return "global";
  }
}

// Wichtig: "global" darf nicht leaken -> wenn wir in Reveal sind, binden wir unknown an aktuelle Folie
function ensureItemSlide(item){
  if (item?.slide && item.slide !== "global") return;
  const active = getActiveSlideId();

  if (!item?.anchor){
    if (active) item.slide = active;
    return;
  }

  const r = rangeFromAnchor(item.anchor);
  if (!r){
    if (active) item.slide = active;
    return;
  }

  let sid = "global";
  try { sid = slideIdFromNode(r.commonAncestorContainer); } catch(e){}

  if ((sid === "global" || !sid) && active) sid = active;
  item.slide = sid || "global";
}

function ensureRevealSlideObserver(){
  if (I.moSlides) return;

  const rr = getRevealSlidesRoot();
  if (!rr) return;

  const obsWin = (rr.ownerDocument === ROOT_DOC) ? ROOT_WIN : CONTENT_WIN;

  I.moSlides = new obsWin.MutationObserver(() => {
    // bei Transition kann activeSlideId kurz null sein -> trotzdem rendern, damit Overlay leer wird
    checkSlideAndRender(true);
  });

  I.moSlides.observe(rr, {
    subtree: true,
    attributes: true,
    attributeFilter: ["class", "style", "aria-hidden"],
    childList: true
  });

  // Zusätzlich: echte Reveal-Events (wenn verfügbar)
  if (!I.__revealEvt){
    I.__revealEvt = true;
    const R = getRevealAPI();
    if (R && typeof R.addEventListener === "function"){
      try { R.addEventListener("ready",        () => checkSlideAndRender(true)); } catch(e){}
      try { R.addEventListener("slidechanged", () => checkSlideAndRender(true)); } catch(e){}
      try { R.addEventListener("fragmentshown",() => checkSlideAndRender(true)); } catch(e){}
      try { R.addEventListener("fragmenthidden",() => checkSlideAndRender(true)); } catch(e){}
    }
    try { ROOT_WIN.addEventListener("hashchange", () => checkSlideAndRender(true)); } catch(e){}
    try { CONTENT_WIN.addEventListener("hashchange", () => checkSlideAndRender(true)); } catch(e){}
  }
}






// =========================================================
// PATCH v4.2 — Slide-Key + Filter im Präsentationsmodus erzwingen
// (ganz ans Ende, vor })();
// =========================================================

function __presentSection(){
  // auch wenn .reveal/.slides nicht sauber matchen: "present" ist Reveal-Standard
  return (
    ROOT_DOC.querySelector("section.present") ||
    CONTENT_DOC.querySelector("section.present") ||
    null
  );
}

function getRevealAPI(){
  return ROOT_WIN.Reveal || CONTENT_WIN.Reveal || null;
}

function __inPresentationMode(){
  // 1) Reveal-API vorhanden => Präsentation
  const R = getRevealAPI();
  if (R) return true;

  // 2) "present" Section => Präsentation
  if (__presentSection()) return true;

  // 3) Lia/Nightly Marker
  const v =
    (ROOT_DOC.documentElement.getAttribute("data-view") ||
     ROOT_DOC.body.getAttribute("data-view") || "").toLowerCase();
  const cls = (ROOT_DOC.body.className || "").toLowerCase();
  if (v.includes("presentation") || cls.includes("presentation")) return true;

  // 4) DOM-Heuristik
  if (ROOT_DOC.querySelector(".reveal") || CONTENT_DOC.querySelector(".reveal")) return true;

  return false;
}

function getRevealSlidesRoot(){
  // nicht zwingend nötig, aber falls vorhanden: gut für Observer
  return (
    CONTENT_DOC.querySelector(".reveal .slides") ||
    ROOT_DOC.querySelector(".reveal .slides") ||
    CONTENT_DOC.querySelector(".slides") ||
    ROOT_DOC.querySelector(".slides") ||
    null
  );
}

function getActiveSlideId(){
  // 1) Reveal API (stabil, auch bei Virtualisierung)
  const R = getRevealAPI();
  if (R && typeof R.getIndices === "function"){
    const idx = R.getIndices() || {};
    return `R:${idx.h || 0}/${idx.v || 0}/${idx.f || 0}`;
  }

  // 2) DOM: section.present (+ data-index-*)
  const cur = __presentSection();
  if (cur){
    const hA = cur.getAttribute("data-index-h");
    const vA = cur.getAttribute("data-index-v");
    const fA = cur.getAttribute("data-index-f");
    if (hA !== null) return `D:${hA}/${vA || 0}/${fA || 0}`;

    // DOM-Indizes ableiten
    let top = cur;
    while (top.parentElement && top.parentElement.tagName === "SECTION") top = top.parentElement;

    const rr = getRevealSlidesRoot();
    const hSecs = rr
      ? Array.from(rr.children).filter(el => el.tagName === "SECTION")
      : Array.from((top.parentElement || {}).children || []).filter(el => el.tagName === "SECTION");

    const h = Math.max(0, hSecs.indexOf(top));

    let v = 0;
    if (cur !== top){
      const vSecs = Array.from(top.children).filter(el => el.tagName === "SECTION");
      v = Math.max(0, vSecs.indexOf(cur));
    }
    return `D:${h}/${v}/0`;
  }

  // 3) Hash als letzter Fallback (falls vorhanden)
  const h = (ROOT_WIN.location.hash || CONTENT_WIN.location.hash || "");
  if (h.startsWith("#/")) return `H:${h}`;

  return null;
}

function shouldFilterBySlide(){
  // entscheidend: im Präsentationsmodus IMMER filtern,
  // auch wenn nur 1 Slide im DOM ist.
  if (__inPresentationMode()) return true;

  const slides = (typeof getSlideCandidates === "function") ? getSlideCandidates() : [];
  return slides.length >= 2;
}

function slideIdFromNode(node){
  // Präsentation: aktuelle Folie ist die Wahrheit
  if (__inPresentationMode()){
    return getActiveSlideId() || "global";
  }

  // Non-presentation: wie gehabt
  try{
    const s = (typeof slideElFromNode === "function") ? slideElFromNode(node) : null;
    return s?.dataset?.hlSlide || "global";
  } catch(e){
    return "global";
  }
}

// WICHTIG: im Präsentationsmodus "global" NIE rendern (sonst wandert es)
function ensureItemSlide(item){
  if (!item) return;

  // wenn schon sauber gesetzt -> lassen
  if (item.slide && item.slide !== "global") return;

  // wenn Präsentation: ohne eindeutigen Slide-Key wird NICHT gerendert
  // (damit verschwindet das "Wandern" sofort; neue Markierungen bekommen korrekte slide-IDs)
  if (__inPresentationMode()){
    // versuche noch einmal über Anchor die aktuelle Slide zu taggen (nur falls möglich)
    const active = getActiveSlideId();
    if (active && item.anchor){
      const r = rangeFromAnchor(item.anchor);
      if (r) item.slide = active;
    }
  }
}

// Reveal-Events auch dann binden, wenn slides-root nicht gefunden wird
function ensureRevealSlideObserver(){
  if (I.__revealEvt) return;

  I.__revealEvt = true;

  const R = getRevealAPI();
  if (R && typeof R.addEventListener === "function"){
    try { R.addEventListener("ready",        () => checkSlideAndRender(true)); } catch(e){}
    try { R.addEventListener("slidechanged", () => checkSlideAndRender(true)); } catch(e){}
    try { R.addEventListener("fragmentshown",() => checkSlideAndRender(true)); } catch(e){}
    try { R.addEventListener("fragmenthidden",() => checkSlideAndRender(true)); } catch(e){}
  }

  try { ROOT_WIN.addEventListener("hashchange", () => checkSlideAndRender(true)); } catch(e){}
  try { CONTENT_WIN.addEventListener("hashchange", () => checkSlideAndRender(true)); } catch(e){}

  // optionaler MutationObserver nur wenn wir einen Root finden
  const rr = getRevealSlidesRoot();
  if (rr){
    const obsWin = (rr.ownerDocument === ROOT_DOC) ? ROOT_WIN : CONTENT_WIN;
    I.moSlides = new obsWin.MutationObserver(() => checkSlideAndRender(true));
    try{
      I.moSlides.observe(rr, { subtree:true, attributes:true, attributeFilter:["class","aria-hidden"], childList:true });
    } catch(e){}
  }
}

// Render härten: im Präsentationsmodus niemals "alles" zeigen
function render(){
  overlay.innerHTML = "";

  const filter = shouldFilterBySlide();
  const activeSlide = filter ? getActiveSlideId() : null;

  // wenn wir filtern wollen, aber keinen Slide-Key haben -> NICHTS rendern (kein Wandern)
  if (filter && !activeSlide) return;

  I.__activeSlide = activeSlide || null;

  // Slides für Items setzen (oder bewusst "global" lassen)
  for (const it of I.HL) ensureItemSlide(it);

  const items = (filter && activeSlide)
    ? I.HL.filter(it => it.slide && it.slide !== "global" && it.slide === activeSlide)
    : I.HL;

  const S = getScrollCtx();

  for (const item of items){
    // Safety: wenn Anchor aktuell nicht rekonstruiert werden kann, skip (verhindert Ghosting)
    if (filter && item.anchor){
      const r = rangeFromAnchor(item.anchor);
      if (!r) continue;
      const packed = packedRectsFromRange(r);
      if (!packed?.length) continue;
      item.rects = packed;
    }

    for (const r of (item.rects || [])){
      const el = CONTENT_DOC.createElement("div");
      el.className = "lia-hl-rect";
      el.setAttribute("data-hl", item.color);
      el.setAttribute("data-id", String(item.id));
      el.setAttribute("data-kind", item.kind || "user");
      el.style.left = `${Math.round(S.ox + (r.x - S.sx))}px`;
      el.style.top  = `${Math.round(S.oy + (r.y - S.sy))}px`;
      el.style.width  = `${Math.round(r.w)}px`;
      el.style.height = `${Math.round(r.h)}px`;
      overlay.appendChild(el);
    }
  }
}









// =========================================================
// FINAL OVERRIDE v5.0 — render() funktioniert wieder im Kursmodus
//   - Presentation: strikt nach aktiver Folie (kein Wandern)
//   - Non-Presentation: rendert ALLE Markierungen (damit überhaupt sichtbar)
// =========================================================
(function FINAL_HL_RENDER_V10(){

  const DEBUG = false;

  function dbg(...args){
    if (!DEBUG) return;
    try { console.log("[HLDBG]", ...args); } catch(e){}
  }

  function getMainRoot(){
    return CONTENT_DOC.querySelector("main") || CONTENT_DOC.body;
  }

  function getSlidesRoot(){
    return (
      CONTENT_DOC.querySelector(".reveal .slides") ||
      ROOT_DOC.querySelector(".reveal .slides") ||
      CONTENT_DOC.querySelector(".slides") ||
      ROOT_DOC.querySelector(".slides") ||
      null
    );
  }

  function getSlideCandidates_LOCAL(){
    const rr = getSlidesRoot();

    let slides = [];
    if (rr){
      slides = Array.from(rr.querySelectorAll("section"));
    } else {
      const main = getMainRoot();
      slides = Array.from(main.querySelectorAll("section"));
      if (!slides.length){
        slides = Array.from(main.children).filter(el =>
          el && (el.tagName === "SECTION" || el.tagName === "ARTICLE")
        );
      }
    }

    return slides.filter((el, i, arr) => arr.indexOf(el) === i);
  }

  function ensureSlideIds_LOCAL(){
    const slides = getSlideCandidates_LOCAL();
    let n = 1;

    for (const s of slides){
      if (!s.dataset.hlSlideid){
        s.dataset.hlSlideid = "SLIDE_" + (n++);
      }
    }
  }

  function getViewportRect_LOCAL(){
    const w = CONTENT_WIN.innerWidth  || CONTENT_DOC.documentElement.clientWidth  || 0;
    const h = CONTENT_WIN.innerHeight || CONTENT_DOC.documentElement.clientHeight || 0;
    return { left:0, top:0, right:w, bottom:h, w, h };
  }

  function interAreaDOMRect_LOCAL(r, vp){
    const x1 = Math.max(r.left, vp.left);
    const y1 = Math.max(r.top,  vp.top);
    const x2 = Math.min(r.right, vp.right);
    const y2 = Math.min(r.bottom,vp.bottom);
    const w = x2 - x1, h = y2 - y1;
    return (w > 0 && h > 0) ? (w * h) : 0;
  }

  function getCurrentSlideEl_LOCAL(){
    ensureSlideIds_LOCAL();

    // 1) Bestehende globale Logik nutzen, wenn vorhanden
    try {
      if (typeof getActiveSlideEl === "function"){
        const s = getActiveSlideEl();
        if (s) return s;
      }
    } catch(e){}

    // 2) Reveal current slide
    try {
      const R = CONTENT_WIN.Reveal || ROOT_WIN.Reveal || null;
      if (R && typeof R.getCurrentSlide === "function"){
        const s = R.getCurrentSlide();
        if (s) return s;
      }
    } catch(e){}

    // 3) tiefste .present
    const pres = Array.from(CONTENT_DOC.querySelectorAll("section.present"))
      .filter((el, i, arr) => arr.indexOf(el) === i);

    if (pres.length){
      const leafs = pres.filter(el =>
        !pres.some(other => other !== el && el.contains(other))
      );
      if (leafs.length) return leafs[leafs.length - 1];
      return pres[pres.length - 1];
    }

    // 4) sichtbarste Section im Viewport
    const slides = getSlideCandidates_LOCAL();
    if (!slides.length) return null;

    const vp = getViewportRect_LOCAL();
    let best = null;
    let bestA = -1;

    for (const s of slides){
      const cs = CONTENT_WIN.getComputedStyle(s);
      if (cs.display === "none" || cs.visibility === "hidden") continue;
      if (parseFloat(cs.opacity || "1") < 0.01) continue;
      if (s.getAttribute("aria-hidden") === "true") continue;

      const r = s.getBoundingClientRect();
      const a = interAreaDOMRect_LOCAL(r, vp);
      if (a > bestA){
        bestA = a;
        best = s;
      }
    }

    return best || slides[0] || null;
  }

  function getActiveSlideId_LOCAL(){
    const s = getCurrentSlideEl_LOCAL();
    return s?.dataset?.hlSlideid || null;
  }

  function shouldFilterBySlide_LOCAL(){
    const slides = getSlideCandidates_LOCAL();
    return slides.length >= 2;
  }

  function sectionFromNode_LOCAL(node){
    ensureSlideIds_LOCAL();

    const el = (node && node.nodeType === 1) ? node : node?.parentElement;
    if (!el) return null;

    return el.closest?.("[data-hl-slideid]") || null;
  }

  function slideIdFromNode_LOCAL(node){
    const s = sectionFromNode_LOCAL(node);
    return s?.dataset?.hlSlideid || "global";
  }

  function ensureItemSlide_LOCAL(item){
    if (!item) return;
    if (item.slide && item.slide !== "global") return;
    if (!item.anchor) return;

    const r = rangeFromAnchor(item.anchor);
    if (!r) return;

    const sid = slideIdFromNode_LOCAL(r.commonAncestorContainer);
    if (sid) item.slide = sid;
  }

  function drawRects_LOCAL(item, S){
    for (const rr of (item.rects || [])){
      const el = CONTENT_DOC.createElement("div");
      el.className = "lia-hl-rect";
      el.setAttribute("data-hl", item.color);
      el.setAttribute("data-id", String(item.id));
      el.setAttribute("data-kind", item.kind || "user");

      el.style.left   = `${Math.round(S.ox + (rr.x - S.sx))}px`;
      el.style.top    = `${Math.round(S.oy + (rr.y - S.sy))}px`;
      el.style.width  = `${Math.round(rr.w)}px`;
      el.style.height = `${Math.round(rr.h)}px`;

      overlay.appendChild(el);
    }
  }

  function render_LOCAL(){
    overlay.innerHTML = "";

    ensureSlideIds_LOCAL();

    const filter = shouldFilterBySlide_LOCAL();
    const activeId = filter ? getActiveSlideId_LOCAL() : null;

    dbg("render:start", {
      filter,
      activeId,
      slides: getSlideCandidates_LOCAL().map(s => s.dataset.hlSlideid),
      total: (I.HL || []).length
    });

    if (filter && !activeId){
      I.__activeSlide = null;
      dbg("render:no-active-slide");
      return;
    }

    I.__activeSlide = activeId || null;
    const S = getScrollCtx();

    for (const item of (I.HL || [])){
      if (!item) continue;
      if (!item.anchor) continue;

      const r = rangeFromAnchor(item.anchor);
      if (!r){
        dbg("item:range-null", {
          id: item.id,
          stored: item.slide,
          kind: item.kind
        });
        continue;
      }

      const liveId = slideIdFromNode_LOCAL(r.commonAncestorContainer);

      if (liveId) item.slide = liveId;

      dbg("item:check", {
        id: item.id,
        kind: item.kind,
        stored: item.slide,
        live: liveId,
        active: activeId
      });

      if (filter && liveId !== activeId) continue;

      const packed = packedRectsFromRange(r);
      if (!packed?.length){
        dbg("item:packed-empty", {
          id: item.id,
          stored: item.slide,
          live: liveId,
          active: activeId
        });
        continue;
      }

      item.rects = packed;
      drawRects_LOCAL(item, S);
    }

    dbg("render:end", {
      activeId,
      overlayChildren: overlay.childElementCount
    });
  }

  // globale Funktionen vereinheitlichen, damit addHighlightFromSelection / evalScope / solveScope
  // dieselbe Folienlogik benutzen
  try { render = render_LOCAL; } catch(e){}
  try { getActiveSlideId = getActiveSlideId_LOCAL; } catch(e){}
  try { slideIdFromNode = slideIdFromNode_LOCAL; } catch(e){}
  try { shouldFilterBySlide = shouldFilterBySlide_LOCAL; } catch(e){}
  try { ensureItemSlide = ensureItemSlide_LOCAL; } catch(e){}

  let __hlSyncToken = 0;

  function doSync_LOCAL(reason){
    if (!I.__alive) return;
    dbg("sync", { reason, activeBefore: I.__activeSlide, current: getActiveSlideId_LOCAL() });
    render_LOCAL();
  }

  function scheduleSync_LOCAL(reason){
    const token = ++__hlSyncToken;

    try { overlay.innerHTML = ""; } catch(e){}

    const run = () => {
      if (!I.__alive) return;
      if (token !== __hlSyncToken) return;
      doSync_LOCAL(reason);
    };

    try { ROOT_WIN.requestAnimationFrame(run); } catch(e){}
    setTimeout(run, 1);   // ZEITSCHIENE AUSBLENDEN
  }

  try { ROOT_WIN.addEventListener("hashchange", () => scheduleSync_LOCAL("hashchange-root")); } catch(e){}
  try { CONTENT_WIN.addEventListener("hashchange", () => scheduleSync_LOCAL("hashchange-content")); } catch(e){}

  try { if (I.__slideSyncTimer) ROOT_WIN.clearInterval(I.__slideSyncTimer); } catch(e){}
  I.__slideSyncTimer = ROOT_WIN.setInterval(() => {
    if (!I.__alive){
      try { ROOT_WIN.clearInterval(I.__slideSyncTimer); } catch(e){}
      return;
    }

    const hasMarks = !!(I.HL && I.HL.length);
    if (!I.state.active && !hasMarks) return;

    doSync_LOCAL("timer");
  }, 10);    // ZEITSCHIENE AUSBLENDEN

  try {
    ROOT_WIN.__HLDBG = {
      dump(){
        const active = getActiveSlideId_LOCAL();
        const rows = (I.HL || []).map(item => {
          let rangeOk = false;
          let live = null;
          let packed = 0;

          if (item?.anchor){
            const r = rangeFromAnchor(item.anchor);
            if (r){
              rangeOk = true;
              live = slideIdFromNode_LOCAL(r.commonAncestorContainer);
              const prs = packedRectsFromRange(r);
              packed = prs?.length || 0;
            }
          }

          return {
            id: item?.id,
            kind: item?.kind,
            stored: item?.slide,
            live,
            rangeOk,
            packed,
            active
          };
        });

        console.log("[HLDBG dump]", {
          active,
          slides: getSlideCandidates_LOCAL().map(s => ({
            id: s.dataset.hlSlideid,
            text: (s.textContent || "").trim().slice(0, 60)
          })),
          rows
        });

        return rows;
      }
    };
  } catch(e){}

  scheduleSync_LOCAL("initial");

})();













})();
@end







TextmarkerQuiz: <span class="hlq-proxy"><span class="hlq-msg"></span><button class="hlq-btn" type="button" data-hlq-act="check">Prüfen</button><button class="hlq-btn" type="button" data-hlq-act="solve">Auflösen</button><span class="hlq-lia">[[ 1 ]]</span></span>







markred:    <span class="lia-hl-target" data-hl-expected="red"    data-hl-quiz="default">@0</span>
markblue:   <span class="lia-hl-target" data-hl-expected="blue"   data-hl-quiz="default">@0</span>
markgreen:  <span class="lia-hl-target" data-hl-expected="green"  data-hl-quiz="default">@0</span>
markyellow: <span class="lia-hl-target" data-hl-expected="yellow" data-hl-quiz="default">@0</span>
markpink:   <span class="lia-hl-target" data-hl-expected="pink"   data-hl-quiz="default">@0</span>
markorange: <span class="lia-hl-target" data-hl-expected="orange" data-hl-quiz="default">@0</span>

mark: <span class="lia-hl-target" data-hl-expected="any" data-hl-quiz="default">@0</span>



markedred:    <span class="lia-hl-prefill" data-hl-prefill="red">@0</span>
markedblue:   <span class="lia-hl-prefill" data-hl-prefill="blue">@0</span>
markedgreen:  <span class="lia-hl-prefill" data-hl-prefill="green">@0</span>
markedyellow: <span class="lia-hl-prefill" data-hl-prefill="yellow">@0</span>
markedpink:   <span class="lia-hl-prefill" data-hl-prefill="pink">@0</span>
markedorange: <span class="lia-hl-prefill" data-hl-prefill="orange">@0</span>




-->



# Folie 1

Markiere die korrekt.

<div class="markerquiz">
@markred(rot) und @markblue(blau bis blau)  
@TextmarkerQuiz
</div>


# Folie 2

<div class="markerquiz">
@mark(dieser Teil ist zu markieren – Farbe egal)
@TextmarkerQuiz
</div>



Aufgabe 1:
<div class="markerquiz">
@markred(Katze) @markred(Schritt).
@TextmarkerQuiz
</div>





`@markedred(red)`  @markedred(red)

`@markedblue(blue)`  @markedblue(blue)

`@markedyellow(yellow)`  @markedyellow(yellow)

`@markedpink(pink)`  @markedpink(pink)

`@markedgreen(green)`  @markedgreen(green)

`@markedorange(orange)`  @markedorange(orange)


