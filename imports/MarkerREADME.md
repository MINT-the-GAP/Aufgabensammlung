<!--
comment: Lia Textmarker (import-sicher) — Crash-Fix (keine Observer-Feedback-Loops) + Panel immer im Viewport
author: Martin Lommatzsch


@style
/* HLQ: verhindert Aufblitzen + entfernt Proxy-Abstand (wirkt VOR @onload) */
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
    try { prev.__alive = false; } catch(e){}
    try { prev.moDock?.disconnect(); } catch(e){}
    try { prev.moTheme?.disconnect(); } catch(e){}
    try { prev.roLayout?.disconnect(); } catch(e){}
    try { if (prev.__layoutTimer) ROOT_WIN.clearInterval(prev.__layoutTimer); } catch(e){}
    try { CONTENT_DOC.getElementById("lia-hl-overlay")?.remove(); } catch(e){}
  }


  const I = REG.instances[DOC_ID] = {
    __alive: true,
    debugHLQ: false, //
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
    const old = doc.getElementById(id);
    if (old){ old.textContent = css; return; }
    const st = doc.createElement("style");
    st.id = id;
    st.textContent = css;
    doc.head.appendChild(st);
  }

  ensureStyle(CONTENT_DOC, "lia-hl-style-content-v4", `
    :root{
      --hl-yellow: rgba(255, 247, 0, 0.81);
      --hl-green:  rgba(144, 238, 144, 0.45);
      --hl-blue:   rgba(0, 76, 255, 0.45);
      --hl-pink:   rgba(255, 0, 212, 0.6);
      --hl-orange: rgba(255, 153, 0, 0.55);
      --hl-red:    rgba(255, 0, 0, 0.4);

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
    #lia-hl-btn{
      position: relative !important;
      width: 40px !important;
      height: 40px !important;
      padding: 0 !important;
      margin: 0 120px !important;

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

        function bestUserMatch(scopeId, color, targetRects){
          const wantAny = (color === "any" || color === "*" || !color);

          // Alle User-Rects im Scope sammeln (bei "any": alle Farben)
          const all = [];
          for (const h of I.HL){
            if ((h.kind || "user") !== "user") continue;
            if ((h.scope || "global") !== scopeId) continue;
            if (!wantAny && h.color !== color) continue;
            if (Array.isArray(h.rects)) all.push(...h.rects);
          }
          if (!all.length) return 0;

          const merged = mergeRectsToLines(all, {
            yTol: 4,
            gapTol: 12,
            minW: 2,
            minH: 2,
            padX: 0,
            padY: 0
          });

          return overlapScore(targetRects, merged);
        }



        function evalScope(scopeEl){
          ensureScopeIds();
          const scopeId = scopeEl?.dataset?.hlScope || "global";
          const targets = collectTargetsInScope(scopeEl);
          if (!targets.length) return { ok:0, total:0, pass:false };

          recalcAllHighlights();

          let ok = 0;
          for (const t of targets){
            const r = rangeFromAnchor(t.anchor);
            if (!r) continue;
            const tRects = packedRectsFromRange(r);
            const score = bestUserMatch(scopeId, t.color, tRects);
            if (score >= 0.75) ok++;
          }
          return { ok, total: targets.length, pass: ok === targets.length };
        }

        function solveScope(scopeEl){
          ensureScopeIds();
          const scopeId = scopeEl?.dataset?.hlScope || "global";
        
          I.HL = I.HL.filter(h => !((h.kind==="solution") && ((h.scope||"global")===scopeId)));
        
          const targets = collectTargetsInScope(scopeEl);
          for (const t of targets){
            const r = rangeFromAnchor(t.anchor);
            if (!r) continue;
            const rects = packedRectsFromRange(r);
        
            const showColor = (t.color === "any") ? "yellow" : t.color; // <- wichtig
        
            I.HL.push({
              id: I.nextId++,
              kind: "solution",
              scope: scopeId,
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
    setProxyMsg(proxy, r.total ? `Treffer: ${r.ok}/${r.total}` : "Keine Targets gefunden.");
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
  const t = (
    btn.getAttribute("aria-label") ||
    btn.getAttribute("title") ||
    btn.textContent ||
    ""
  ).trim().toLowerCase();

  const cls = (btn.className || "").toLowerCase();

  if (t.includes("prüf") || t.includes("check") || cls.includes("check") || cls.includes("verify")) return "check";
  if (t.includes("aufl") || t.includes("lös")  || t.includes("solve") || t.includes("solution") ||
      cls.includes("solution") || cls.includes("solve") || cls.includes("answer")) return "solve";

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



// EIN Listener: funktioniert auch, wenn Lia Buttons ausserhalb des Proxys rendert
CONTENT_DOC.addEventListener("click", (e)=>{

  const clicked = e.target?.closest?.("button,[role='button'],a,[role='link']");
  if (!clicked) return;

  // (A) Unsere Buttons
  const own = clicked.closest("button.hlq-btn[data-hlq-act]");
  if (own){
    const proxy = own.closest(".hlq-proxy");
    if (!proxy) return;
    const act = own.getAttribute("data-hlq-act");
    if (!act) return;
    handleHLQAction(act, proxy, own);
    return;
  }

  // (B) Lia-Buttons (Prüfen/Auflösen) – auch wenn sie ausserhalb des Proxys liegen
  const act = inferActionLoose(clicked);
  if (!act) return;

  const proxy = findProxyForAnyButton(clicked);
  if (!proxy) return;

  handleHLQAction(act, proxy, clicked);

  // KEIN preventDefault/stopPropagation:
  // Lia darf danach normal seine UI rendern.
}, true);













  // =========================
  // Markieren / Radieren
  // =========================
    function isForbiddenTarget(node){
      const el = (node && node.nodeType === 1) ? node : node?.parentElement;
      if (!el) return false;
      return !!el.closest("input, textarea, select, button, a, code, pre, .hlq-proxy");
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

    // User-Highlight speichern (WICHTIG: scope statt qid)
    I.HL.push({
      id: I.nextId++,
      kind: "user",
      scope: scopeId,          // <<< DAS ist der Fix
      color: I.state.color,
      anchor,
      rects: packed
    });

    // Selection entfernen
    try { sel.removeAllRanges(); } catch(e){}

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

  CONTENT_WIN.addEventListener("click", (e)=>{
    if (!I.state.active) return;
    if (I.state.tool !== "erase") return;

    const t = e.target;
    if (!t || !t.classList || !t.classList.contains("lia-hl-rect")) return;

    const id = t.getAttribute("data-id");
    if (!id) return;

    const n = Number(id);
    const item = I.HL.find(x => x.id === n);
    if (item && item.kind === "user"){
      I.HL = I.HL.filter(x => x.id !== n);
      render();
    }
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
@end







TextmarkerQuiz: <span class="hlq-proxy"><span class="hlq-msg"></span><button class="hlq-btn" type="button" data-hlq-act="check">Prüfen</button><button class="hlq-btn" type="button" data-hlq-act="solve">Auflösen</button><span class="hlq-lia">[[ 1 ]]</span></span>







markred:    <span class="lia-hl-target" data-hl-expected="red"    data-hl-quiz="default">@0</span>
markblue:   <span class="lia-hl-target" data-hl-expected="blue"   data-hl-quiz="default">@0</span>
markgreen:  <span class="lia-hl-target" data-hl-expected="green"  data-hl-quiz="default">@0</span>
markyellow: <span class="lia-hl-target" data-hl-expected="yellow" data-hl-quiz="default">@0</span>
markpink:   <span class="lia-hl-target" data-hl-expected="pink"   data-hl-quiz="default">@0</span>
markorange: <span class="lia-hl-target" data-hl-expected="orange" data-hl-quiz="default">@0</span>

mark: <span class="lia-hl-target" data-hl-expected="any" data-hl-quiz="default">@0</span>





-->



# Textmarker

Markiere die korrekt.

<div class="markerquiz">
@markred(rot) und @markblue(blau bis blau)
@TextmarkerQuiz
</div>


<div class="markerquiz">
@mark(dieser Teil ist zu markieren – Farbe egal)
@TextmarkerQuiz
</div>
