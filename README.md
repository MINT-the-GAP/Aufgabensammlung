<!--
comment: Hier sind alle wichtigen Features für SchulLia zusammengefasst.
author: Martin Lommatzsch






@style


/* ---------------------------------------------------------
   Canvas + SCHRIFTERKENNUNG OCR
   Canvas + SCHRIFTERKENNUNG OCR
   Canvas + SCHRIFTERKENNUNG OCR
   Canvas + SCHRIFTERKENNUNG OCR
   Canvas + SCHRIFTERKENNUNG OCR
   Canvas + SCHRIFTERKENNUNG OCR
   Canvas + SCHRIFTERKENNUNG OCR
   Canvas + SCHRIFTERKENNUNG OCR
   Canvas + SCHRIFTERKENNUNG OCR
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
  height: 245px;
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
  width: 32px;
  height: 32px;
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
  width: 22px;
  height: 22px;
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



/* Button unter dem Marker-Rechteck */
.lia-rect-action{
  position: absolute;
  z-index: 60;
  display: none;

  right: auto;
  bottom: auto;

  padding: 6px 9px;        /* vorher 8px 12px */
  border-radius: 999px;

  border: 2px solid var(--canvas-accent);
  background: var(--canvas-accent);
  color: #fff;

  font-weight: 800;
  font-size: 0.75em;       /* NEU: ~25% kleiner */
  cursor: pointer;
  user-select: none;
  line-height: 1;
  white-space: nowrap;
}
.lia-rect-action:active{ transform: translateY(1px); }








/* Close-Button oben rechts am Marker-Rechteck */
.lia-rect-close{
  position: absolute;
  z-index: 61;
  display: none;

  width: 24px;
  height: 24px;
  padding: 0;

  border-radius: 999px;
  border: 2px solid var(--canvas-accent);
  background: transparent;

  cursor: pointer;
  user-select: none;
  line-height: 0;
}

.lia-rect-close svg{
  width: 14px;
  height: 14px;
  display: block;
  margin: auto;
}

.lia-rect-close .x{
  stroke: var(--canvas-accent);
  stroke-width: 2.4;
  stroke-linecap: round;
}

.lia-rect-close:hover{
  background: var(--canvas-accent);
}

.lia-rect-close:hover .x{
  stroke: #fff;
}

.lia-rect-close:active{ transform: translateY(1px); }








/* OCR */
/* OCR */
/* OCR */
/* OCR */
/* OCR */
/* OCR */
/* OCR */



/* =========================================================
   OCR-Konfigleiste (sticky, import-safe)
   ========================================================= */

.lia-ocrbar{
  position: sticky;
  top: 10px;
  z-index: 9999;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;

  padding: 10px 12px;
  margin: 0 0 14px 0;

  border: 2px solid var(--canvas-border);
  border-radius: 14px;

  background: rgba(0,0,0,0.07);
  backdrop-filter: blur(6px);

  max-width: 100%;
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark){
  .lia-ocrbar{
    background: rgba(255,255,255,0.08);
  }
}

.lia-ocr-head{
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-right: 6px;
}

.lia-ocr-title{
  font-weight: 850;
  letter-spacing: 0.2px;
  line-height: 1;
}

.lia-ocr-dot{
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: 2px solid var(--canvas-border);
  background: transparent;
  box-sizing: border-box;
}

.lia-ocrbar[data-state="ready"]   .lia-ocr-dot{ border-color: var(--canvas-accent); background: var(--canvas-accent); }
.lia-ocrbar[data-state="working"] .lia-ocr-dot{ border-color: var(--canvas-accent); background: var(--canvas-accent); }
.lia-ocrbar[data-state="loading"] .lia-ocr-dot{ border-color: var(--canvas-accent); border-style: dashed; }
.lia-ocrbar[data-state="error"]   .lia-ocr-dot{ border-color: #c00000; background: #c00000; }

.lia-ocr-pills{
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  min-width: 0;
}

.lia-ocr-pill{
  display: inline-flex;
  align-items: baseline;
  gap: 8px;

  padding: 6px 10px;
  border-radius: 999px;
  border: 2px solid var(--canvas-border);

  background: transparent;
  max-width: 100%;
}

.lia-ocr-pill .k{
  opacity: 0.75;
  font-weight: 750;
  white-space: nowrap;
}

.lia-ocr-pill .v{
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: min(52vw, 520px);
}

.lia-ocr-actions{
  display: inline-flex;
  gap: 8px;
  align-items: center;
  margin-left: auto;
}

.lia-ocr-btn{
  border: 2px solid var(--canvas-accent);
  background: transparent;
  color: var(--canvas-accent);
  border-radius: 999px;
  padding: 6px 10px;
  font-weight: 850;
  cursor: pointer;
  user-select: none;
  line-height: 1;
}

.lia-ocr-select{
  border: 2px solid var(--canvas-accent);
  background: transparent;
  color: var(--canvas-accent);
  border-radius: 999px;
  padding: 6px 10px;
  font-weight: 850;
  cursor: pointer;
  user-select: none;
  line-height: 1;
  appearance: none;
}
.lia-ocr-select:active{ transform: translateY(1px); }



.lia-ocr-btn:active{ transform: translateY(1px); }

.lia-ocr-progress{
  display: none;
  align-items: center;
  gap: 8px;
  width: min(420px, 100%);
}

.lia-ocr-progress[data-on="1"]{ display: inline-flex; }

.lia-ocr-progbar{
  height: 10px;
  width: 100%;
  border-radius: 999px;
  border: 2px solid var(--canvas-border);
  overflow: hidden;
  box-sizing: border-box;
  background: transparent;
}

.lia-ocr-progfill{
  height: 100%;
  width: 0%;
  background: var(--canvas-accent);
}

.lia-ocr-progtxt{
  font-weight: 850;
  min-width: 44px;
  text-align: right;
}

.lia-ocr-log{
  display: none;
  width: 100%;
  margin: 6px 0 0 0;
  padding: 10px 12px;
  border-radius: 12px;
  border: 2px solid var(--canvas-border);
  background: transparent;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 0.92em;
  line-height: 1.25;
  white-space: pre-wrap;
  box-sizing: border-box;
}

.lia-ocrbar[data-open="1"] .lia-ocr-log{ display: block; }


.lia-ocrbar{
  width: 100%;
  flex: 0 0 100%;
  align-self: stretch;
}


/* Accent-Stroke/Fill für Icons (Themefarbe) */
.lia-tool-btn .ico-accent{
  stroke: var(--canvas-accent);
  fill: none;
}
.lia-tool-btn .ico-accent-fill{
  fill: var(--canvas-accent);
}




/* =========================================================
   Loadbox UNTER der OCR-Bar (AUSSERHALB als eigener Sticky-Block)
   ========================================================= */
.lia-ocr-loadwrap{
  position: sticky;
  top: calc(10px + var(--lia-ocrbar-h, 64px) + 8px);
  z-index: 9998;

  display: none;
  width: 100%;
  margin: -6px 0 14px 0;   /* sitzt optisch direkt unter der Bar */
  padding: 10px 12px;

  border: 2px solid var(--canvas-border);
  border-radius: 14px;

  background: rgba(0,0,0,0.05);
  backdrop-filter: blur(6px);
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark){
  .lia-ocr-loadwrap{ background: rgba(255,255,255,0.06); }
}

.lia-ocr-loadwrap[data-on="1"]{ display:block; }

.lia-ocr-loadmsg{
  display:flex;
  align-items:baseline;
  justify-content: space-between;
  gap: 10px;
  font-weight: 850;
}

.lia-ocr-loadmsg .t{ font-weight: 850; }
.lia-ocr-loadmsg .p{ font-weight: 900; min-width: 3.5em; text-align:right; }

.lia-ocr-loaddetail{
  margin-top: 6px;
  opacity: .78;
  font-weight: 700;
  font-size: 0.95em;
}

.lia-ocr-loadtrack{
  margin-top: 8px;
  height: 10px;
  width: 100%;
  border-radius: 999px;
  border: 2px solid var(--canvas-border);
  overflow: hidden;
  box-sizing: border-box;
  background: transparent;
}

.lia-ocr-loadfill{
  height: 100%;
  width: 0%;
  background: var(--canvas-accent);
}

/* indeterminate (wenn progress nicht verfügbar) */
.lia-ocr-loadwrap[data-indet="1"] .lia-ocr-loadfill{
  width: 35%;
  animation: lia_ocr_indet 1.1s linear infinite;
}

/* wenn du keyframes schon hast, kannst du diesen Teil weglassen */
@keyframes lia_ocr_indet{
  0%   { transform: translateX(-120%); }
  100% { transform: translateX(320%); }
}









/* Progress unter "Als Lösung übergeben" */
.lia-rect-progress{
  position: absolute;
  z-index: 59; /* unter Button (60), über Canvas */
  display: none;

  left: 0;
  top: 0;

  width: 180px; /* wird in JS dynamisch überschrieben */
  padding: 4px 8px;
  border-radius: 999px;

  border: 2px solid var(--canvas-border);
  background: rgba(0,0,0,0.10);
  backdrop-filter: blur(6px);

  box-sizing: border-box;
  align-items: center;
  gap: 8px;
}

@media (prefers-color-scheme: dark){
  .lia-rect-progress{ background: rgba(255,255,255,0.10); }
}

.lia-rect-progress[data-on="1"]{ display: flex; }

.lia-rect-progbar{
  flex: 1 1 auto;
  height: 8px;
  border-radius: 999px;
  border: 2px solid var(--canvas-border);
  overflow: hidden;
  box-sizing: border-box;
  background: transparent;
}

.lia-rect-progfill{
  height: 100%;
  width: 0%;
  background: var(--canvas-accent);
}

.lia-rect-progtxt{
  font-weight: 850;
  font-size: 0.8em;
  min-width: 3.2em;
  text-align: right;
}









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
    debugHLQ: false, //
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
  __activeSlide: null
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

    ROOT_WIN.addEventListener("resize", () => positionPanelSmart());
    if (ROOT_WIN.visualViewport){
      ROOT_WIN.visualViewport.addEventListener("resize", () => positionPanelSmart());
      ROOT_WIN.visualViewport.addEventListener("scroll", () => positionPanelSmart());
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



  CONTENT_DOC.addEventListener("mouseup", ()=>{
    if (!I.state.active) return;

    if (I.state.panelOpen){
      I.state.panelOpen = false;
      applyUI();
    }

    if (I.state.tool !== "mark") return;
    addHighlightFromSelection();
  }, true);

  CONTENT_DOC.addEventListener("pointerdown", (e)=>{
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
    const btn = ROOT_DOC.getElementById("lia-hl-btn");
    if (!btn) return;

    const r = btn.getBoundingClientRect();
    const vw = ROOT_DOC.documentElement.clientWidth || 0;

    // Heuristik: im Nightly-"Navigation"-Modus sitzen die Header-Icons sehr weit rechts oben.
    const likelyNavStack = (r.right >= vw - 2) && (r.top <= 90);

    ROOT_DOC.body.classList.toggle("lia-hl-navstack", !!likelyNavStack);
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
        detectNavStack();
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






































  // =========================
  // CANVAS + SCHRIFTERKENNUNG OCR
  // CANVAS + SCHRIFTERKENNUNG OCR
  // CANVAS + SCHRIFTERKENNUNG OCR
  // CANVAS + SCHRIFTERKENNUNG OCR
  // CANVAS + SCHRIFTERKENNUNG OCR
  // CANVAS + SCHRIFTERKENNUNG OCR
  // CANVAS + SCHRIFTERKENNUNG OCR
  // CANVAS + SCHRIFTERKENNUNG OCR
  // CANVAS + SCHRIFTERKENNUNG OCR
  // CANVAS + SCHRIFTERKENNUNG OCR
  // =========================

















(function(){



function getRootWindow(){
  let w = window;
  try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
  return w;
}

const ROOT = getRootWindow();
const REGKEY = "__LIA_CANVAS_OCR_REG_V1__";
ROOT[REGKEY] = ROOT[REGKEY] || { inited: {} };

const DOC_ID = document.baseURI || location.href;
if (ROOT[REGKEY].inited[DOC_ID]) return;
ROOT[REGKEY].inited[DOC_ID] = true;


// ---------------------------------------------------------
// OCR-Bar + Engine: eigener Guard (läuft unabhängig vom Canvas-Guard)
// - Precision Dropdown (fp32/fp16/int8)
// - Load/Reload Button
// - Auto-Load beim Kursstart (warmup)
// ---------------------------------------------------------
window.__LIA_OCR_SHOW_BAR__ = false;   // <-- HIER umschalten (true/false)



if (!window.__LIA_OCR_BAR_BOOT__){
  window.__LIA_OCR_BAR_BOOT__ = true;

  // --------- kleine Theme-Akzent-Sync (nur für --canvas-accent) ----------
  function __ocrGetLiaAccent(){
    try{
      const existing = document.querySelector('.lia-btn');
      if (existing){
        const bg = getComputedStyle(existing).backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
      }
      const body = document.body || document.documentElement;
      const probe = document.createElement('button');
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
    }catch(_){}
    return null;
  }
  function __ocrSyncAccent(){
    try{
      const acc = __ocrGetLiaAccent();
      if (acc) document.documentElement.style.setProperty('--canvas-accent', acc);
    }catch(_){}
  }

  // ---------------- CSS Fallback (inkl. Select) ----------------
  function ensureOcrCss(){
    if (document.getElementById('__lia_ocrbar_css_v2')) return;

    const st = document.createElement('style');
    st.id = '__lia_ocrbar_css_v2';
    st.textContent = `
      .lia-ocrbar{position:sticky;top:10px;z-index:9999;display:flex;flex-wrap:wrap;gap:10px;align-items:center;
        padding:10px 12px;margin:0 0 14px 0;border:2px solid var(--canvas-border);border-radius:14px;
        background:rgba(0,0,0,0.07);backdrop-filter:blur(6px);box-sizing:border-box}
      @media (prefers-color-scheme: dark){.lia-ocrbar{background:rgba(255,255,255,0.08)}}
      .lia-ocr-head{display:inline-flex;align-items:center;gap:10px;margin-right:6px}
      .lia-ocr-title{font-weight:850;letter-spacing:.2px;line-height:1}
      .lia-ocr-dot{width:10px;height:10px;border-radius:999px;border:2px solid var(--canvas-border);background:transparent;box-sizing:border-box}
      .lia-ocrbar[data-state="ready"] .lia-ocr-dot,
      .lia-ocrbar[data-state="working"] .lia-ocr-dot{border-color:var(--canvas-accent);background:var(--canvas-accent)}
      .lia-ocrbar[data-state="loading"] .lia-ocr-dot{border-color:var(--canvas-accent);border-style:dashed}
      .lia-ocrbar[data-state="error"] .lia-ocr-dot{border-color:#c00000;background:#c00000}

      .lia-ocr-pills{display:inline-flex;flex-wrap:wrap;gap:8px;align-items:center;min-width:0}
      .lia-ocr-pill{display:inline-flex;align-items:baseline;gap:8px;padding:6px 10px;border-radius:999px;border:2px solid var(--canvas-border);
        background:transparent;max-width:100%}
      .lia-ocr-pill .k{opacity:.75;font-weight:750;white-space:nowrap}
      .lia-ocr-pill .v{font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:min(52vw,520px)}

      .lia-ocr-actions{display:inline-flex;gap:8px;align-items:center;margin-left:auto}

      .lia-ocr-btn{border:2px solid var(--canvas-accent);background:transparent;color:var(--canvas-accent);
        border-radius:999px;padding:6px 10px;font-weight:850;cursor:pointer;user-select:none;line-height:1}
      .lia-ocr-btn:active{transform:translateY(1px)}

      .lia-ocr-select{border:2px solid var(--canvas-accent);background:transparent;color:var(--canvas-accent);
        border-radius:999px;padding:6px 10px;font-weight:850;cursor:pointer;user-select:none;line-height:1;appearance:none}
      .lia-ocr-select:active{transform:translateY(1px)}

      .lia-ocr-progress{display:none;align-items:center;gap:8px;width:min(420px,100%)}
      .lia-ocr-progress[data-on="1"]{display:inline-flex}
      .lia-ocr-progbar{height:10px;width:100%;border-radius:999px;border:2px solid var(--canvas-border);overflow:hidden;box-sizing:border-box;background:transparent}
      .lia-ocr-progfill{height:100%;width:0%;background:var(--canvas-accent)}
      .lia-ocr-progtxt{font-weight:850;min-width:44px;text-align:right}

      .lia-ocr-log{display:none;width:100%;margin:6px 0 0 0;padding:10px 12px;border-radius:12px;border:2px solid var(--canvas-border);
        background:transparent;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono",monospace;
        font-size:.92em;line-height:1.25;white-space:pre-wrap;box-sizing:border-box}
      .lia-ocrbar[data-open="1"] .lia-ocr-log{display:block}

      .lia-ocr-loadwrap{
        position:sticky;
        top:calc(10px + var(--lia-ocrbar-h,64px) + 8px);
        z-index:9998;
        display:none;
        width:100%;
        margin:-6px 0 14px 0;
        padding:10px 12px;
        border:2px solid var(--canvas-border);
        border-radius:14px;
        background:rgba(0,0,0,0.05);
        backdrop-filter:blur(6px);
        box-sizing:border-box
      }
      @media (prefers-color-scheme: dark){
        .lia-ocr-loadwrap{background:rgba(255,255,255,0.06)}
      }
      .lia-ocr-loadwrap[data-on="1"]{display:block}
      .lia-ocr-loadmsg{display:flex;align-items:baseline;justify-content:space-between;gap:10px;font-weight:850}
      .lia-ocr-loadmsg .p{font-weight:900;min-width:3.5em;text-align:right}
      .lia-ocr-loaddetail{margin-top:6px;opacity:.78;font-weight:700;font-size:.95em}

      .lia-ocr-loadtrack{margin-top:8px;height:10px;width:100%;border-radius:999px;border:2px solid var(--canvas-border);
        overflow:hidden;box-sizing:border-box;background:transparent}
      .lia-ocr-loadfill{height:100%;width:0%;background:var(--canvas-accent)}
      .lia-ocr-loadwrap[data-indet="1"] .lia-ocr-loadfill{width:35%;animation:lia_ocr_indet 1.1s linear infinite}
      @keyframes lia_ocr_indet{0%{transform:translateX(-120%)}100%{transform:translateX(320%)}}


    `;
    (document.head || document.documentElement).appendChild(st);
  }

  // ---------------- OCR-Bar ----------------
  function ensureOcrBar(){
    const SHOW_BAR = (window.__LIA_OCR_SHOW_BAR__ !== false);

    ensureOcrCss();

    if (window.__LIA_OCR_BAR__ && window.__LIA_OCR_BAR__.el && window.__LIA_OCR_BAR__.el.isConnected){
      try{
        const el = window.__LIA_OCR_BAR__.el;
        const DOC = document;
        const main = DOC.querySelector('main');

        // ggf. wieder in main nach oben ziehen
        if (main && el.parentNode !== main){
          if (main.firstChild) main.insertBefore(el, main.firstChild);
          else main.appendChild(el);
        }

        // Sichtbarkeit der Bar
        el.style.display = SHOW_BAR ? '' : 'none';
        el.setAttribute('aria-hidden', SHOW_BAR ? 'false' : 'true');

        // Loadbox ggf. nach oben ziehen, wenn Bar aus
        const lw = window.__LIA_OCR_BAR__.loadEl;
        if (lw){
          if (!SHOW_BAR){
            lw.style.top = '10px';
            lw.style.margin = '0 0 14px 0';
          }else{
            lw.style.top = '';
            lw.style.margin = '';
          }
        }

      }catch(_){}
      return window.__LIA_OCR_BAR__;
    }



    const DOC = document;

    // -------- BAR ERZEUGEN (das fehlte bei dir!) --------
    const bar = DOC.createElement('div');
    bar.className = 'lia-ocrbar';

    // Bar ggf. komplett ausblenden (Loadbox bleibt separat sichtbar)
    if (!SHOW_BAR){
      bar.style.display = 'none';
      bar.setAttribute('aria-hidden','true');
    }


    bar.dataset.state = 'idle';
    bar.dataset.open  = '0';

    bar.innerHTML = `
      <span class="lia-ocr-head">
        <span class="lia-ocr-dot"></span>
        <span class="lia-ocr-title">LaTeX-OCR</span>
      </span>

      <span class="lia-ocr-pills">
        <span class="lia-ocr-pill"><span class="k">Model</span>     <span class="v" data-k="model">—</span></span>
        <span class="lia-ocr-pill"><span class="k">Backend</span>   <span class="v" data-k="backend">—</span></span>
        <span class="lia-ocr-pill"><span class="k">Precision</span> <span class="v" data-k="precision">—</span></span>
        <span class="lia-ocr-pill"><span class="k">Loaded</span>    <span class="v" data-k="loaded">—</span></span>
        <span class="lia-ocr-pill"><span class="k">Phase</span>     <span class="v" data-k="phase">—</span></span>
        <span class="lia-ocr-pill"><span class="k">Status</span>    <span class="v" data-k="status">—</span></span>
      </span>

      <span class="lia-ocr-actions">
        <select class="lia-ocr-select" data-act="model" aria-label="Model">
          <option value="Xenova/texify2">Xenova/texify2</option>
          <option value="Xenova/trocr-small-handwritten">Xenova/trocr-small-handwritten</option>
        </select>

        <select class="lia-ocr-select" data-act="precision" aria-label="Precision">
          <option value="fp32">fp32</option>
          <option value="fp16">fp16</option>
          <option value="int8">int8</option>
        </select>

        <button class="lia-ocr-btn" type="button" data-act="load">Load/Reload</button>
        <button class="lia-ocr-btn" type="button" data-act="toggle">Log</button>
        <button class="lia-ocr-btn" type="button" data-act="copy">Copy</button>
      </span>

      <span class="lia-ocr-progress" data-on="0">
        <span class="lia-ocr-progbar"><span class="lia-ocr-progfill"></span></span>
        <span class="lia-ocr-progtxt">0%</span>
      </span>

      <pre class="lia-ocr-log"></pre>
    `;

    // -------- EINHÄNGEN: IN <main> als erstes Kind (damit Layout/Scale passt) --------
    const main = DOC.querySelector('main');
    const host = DOC.body || DOC.documentElement;

    const loadbar = bar.querySelector('.lia-ocr-loadbar');
    const loadfill = bar.querySelector('.lia-ocr-loadfill');


    if (main){
      // Bar muss innerhalb von main liegen (nicht als Flex-Item daneben)
      if (main.firstChild) main.insertBefore(bar, main.firstChild);
      else main.appendChild(bar);
    }else if (host.firstChild){
      host.insertBefore(bar, host.firstChild);
    }else{
      host.appendChild(bar);
    }


    // -------- LOADBOX (Sibling direkt UNTER der OCR-Bar) --------
    const loadWrap = DOC.createElement('div');
    loadWrap.className = 'lia-ocr-loadwrap';
    loadWrap.dataset.on = '0';
    loadWrap.dataset.indet = '0';
    loadWrap.innerHTML = `
      <div class="lia-ocr-loadmsg">
        <span class="t">Schrifterkennungsmodul lädt noch…</span>
        <span class="p">…</span>
      </div>
      <div class="lia-ocr-loadtrack"><div class="lia-ocr-loadfill"></div></div>
      <div class="lia-ocr-loaddetail">Download von rund 900&nbsp;MB (nur beim ersten Mal, danach Cache).</div>
    `;


    // Wenn Bar aus: Loadbox "rückt nach oben" (sonst wäre sie für die Bar reserviert)
    if (!SHOW_BAR){
      loadWrap.style.top = '10px';
      loadWrap.style.margin = '0 0 14px 0';
    }



    // direkt NACH bar einfügen
    if (bar.parentNode){
      if (bar.nextSibling) bar.parentNode.insertBefore(loadWrap, bar.nextSibling);
      else bar.parentNode.appendChild(loadWrap);
    }
    
    const loadFill   = loadWrap.querySelector('.lia-ocr-loadfill');
    const loadTxt    = loadWrap.querySelector('.lia-ocr-loadmsg .t');
    const loadPct    = loadWrap.querySelector('.lia-ocr-loadmsg .p');
    const loadDetail = loadWrap.querySelector('.lia-ocr-loaddetail');
    


    // -------- STATE + UI BINDINGS --------
    const state = {
      model: 'Xenova/texify2',
      backend: 'wasm',
      precision: 'fp32',
      loaded: false,
      phase: 'idle',
      status: 'idle',
      progress: null
    };

    const logEl = bar.querySelector('.lia-ocr-log');
    const prog  = bar.querySelector('.lia-ocr-progress');
    const fill  = bar.querySelector('.lia-ocr-progfill');
    const ptxt  = bar.querySelector('.lia-ocr-progtxt');
    const sel   = bar.querySelector('select[data-act="precision"]');
    const selM  = bar.querySelector('select[data-act="model"]');

    const LS_KEY   = '__LIA_TEX_OCR_PREC__';
    const LS_MODEL = '__LIA_TEX_OCR_MODEL__';

    try{
      const savedM = localStorage.getItem(LS_MODEL);
      if (savedM) state.model = String(savedM);
    }catch(_){}
    try{
      const saved = localStorage.getItem(LS_KEY);
      if (saved) state.precision = String(saved);
    }catch(_){}

    if (selM) selM.value = state.model;
    if (sel)  sel.value  = state.precision;

    function setText(key, val){
      const el = bar.querySelector('[data-k="' + key + '"]');
      if (el) el.textContent = String(val);
    }

    function render(){
      bar.dataset.state = String(state.status || 'idle');
      setText('model', state.model || '—');
      setText('backend', state.backend || '—');
      setText('precision', state.precision || '—');
      setText('loaded', state.loaded ? 'yes' : 'no');
      setText('phase', state.phase || '—');
      setText('status', state.status || 'idle');
    
      // bestehender Progress (in der Bar)
      if (state.progress === null || state.progress === undefined || !isFinite(state.progress)){
        prog.dataset.on = '0';
      }else{
        const v = Math.max(0, Math.min(1, Number(state.progress)));
        prog.dataset.on = '1';
        fill.style.width = Math.round(v * 100) + '%';
        ptxt.textContent = Math.round(v * 100) + '%';
      }
    


      // --- Bar-Höhe als CSS-Var (damit loadWrap sticky exakt drunter sitzt) ---
      try{
        if (!SHOW_BAR){
          document.documentElement.style.setProperty('--lia-ocrbar-h', '0px');
        }else{
          const h = Math.ceil(bar.getBoundingClientRect().height || bar.offsetHeight || 0);
          document.documentElement.style.setProperty('--lia-ocrbar-h', (h || 0) + 'px');
        }
      }catch(_){}


      // --- Loadbox (unterhalb, außerhalb) ---
      if (loadWrap && loadFill && loadTxt && loadPct){
        const status = String(state.status || 'idle');
        const phase  = String(state.phase  || 'idle');

        const isLoading =
          (!state.loaded) &&
          (status === 'loading' || phase === 'import' || phase === 'pipeline' || phase === 'download');

        if (isLoading){
          loadWrap.dataset.on = '1';

          if (phase === 'download'){
            loadTxt.textContent = 'Schrifterkennungsmodul lädt noch…';
            if (loadDetail) loadDetail.innerHTML = 'Dieser Download dauert nur beim ersten Mal so lange und ist danach im Cache.';
          }else if (phase === 'import'){
            loadTxt.textContent = 'Schrifterkennungsmodul lädt noch… (Bibliothek wird geladen)';
            if (loadDetail) loadDetail.textContent = 'Erster Start kann etwas dauern.';
          }else if (phase === 'pipeline'){
            loadTxt.textContent = 'Schrifterkennungsmodul lädt noch… (Modell wird initialisiert)';
            if (loadDetail) loadDetail.textContent = 'Erster Start kann etwas dauern.';
          }else{
            loadTxt.textContent = 'Schrifterkennungsmodul lädt noch…';
            if (loadDetail) loadDetail.textContent = 'Erster Start kann etwas dauern.';
          }

          if (state.progress !== null && state.progress !== undefined && isFinite(state.progress)){
            const v = Math.max(0, Math.min(1, Number(state.progress)));
            loadWrap.dataset.indet = '0';
            loadFill.style.transform = 'translateX(0)';
            loadFill.style.width = Math.round(v * 100) + '%';
            loadPct.textContent = Math.round(v * 100) + '%';
          }else{
            loadWrap.dataset.indet = '1';
            loadFill.style.width = '35%';
            loadPct.textContent = '…';
          }
        }else{
          loadWrap.dataset.on = '0';
          loadWrap.dataset.indet = '0';
          loadFill.style.transform = 'translateX(0)';
          loadFill.style.width = '0%';
          loadPct.textContent = '';
        }
      }

    }


    const LOG_MAX = 10;
    function log(line){
      try{
        const t = new Date();
        const hh = String(t.getHours()).padStart(2,'0');
        const mm = String(t.getMinutes()).padStart(2,'0');
        const ss = String(t.getSeconds()).padStart(2,'0');
        const s = '[' + hh + ':' + mm + ':' + ss + '] ' + String(line);
        const cur = logEl.textContent ? logEl.textContent.split('\n') : [];
        cur.push(s);
        while (cur.length > LOG_MAX) cur.shift();
        logEl.textContent = cur.join('\n');
      }catch(_){}
    }

    function set(patch){
      try{
        if (!patch) return;
        for (const k in patch){
          if (Object.prototype.hasOwnProperty.call(patch, k)) state[k] = patch[k];
        }
        render();
      }catch(_){}
    }

    bar.addEventListener('click', (e) => {
      const btn = e.target && e.target.closest ? e.target.closest('button[data-act]') : null;
      if (!btn) return;
      const act = btn.getAttribute('data-act');

      if (act === 'toggle'){
        bar.dataset.open = (bar.dataset.open === '1') ? '0' : '1';
        return;
      }

      if (act === 'copy'){
        const report = [
          'LaTeX-OCR Status Report',
          'Model: ' + (state.model || ''),
          'Backend: ' + (state.backend || ''),
          'Precision: ' + (state.precision || ''),
          'Loaded: ' + (state.loaded ? 'yes' : 'no'),
          'Phase: ' + (state.phase || ''),
          'Status: ' + (state.status || ''),
          'Progress: ' + (state.progress === null ? '—' : String(state.progress)),
          '',
          'Log:',
          logEl.textContent || ''
        ].join('\n');
        try{ navigator.clipboard.writeText(report); log('Report copied to clipboard.'); }
        catch(_){ log('Copy failed (clipboard blocked).'); }
        return;
      }

      if (act === 'load'){
        if (window.__LIA_TEX_OCR__ && window.__LIA_TEX_OCR__.ensureLoaded){
          window.__LIA_TEX_OCR__.ensureLoaded(true);
        }
        return;
      }
    });

    if (sel){
      sel.addEventListener('change', () => {
        const p = String(sel.value || 'fp32');
        try{ localStorage.setItem(LS_KEY, p); }catch(_){}
        set({ precision: p });
        if (window.__LIA_TEX_OCR__ && window.__LIA_TEX_OCR__.setPrecision){
          window.__LIA_TEX_OCR__.setPrecision(p);
        }
      });
    }

    if (selM){
      selM.addEventListener('change', () => {
        const m = String(selM.value || state.model);
        try{ localStorage.setItem(LS_MODEL, m); }catch(_){}
        set({ model: m });
        if (window.__LIA_TEX_OCR__ && window.__LIA_TEX_OCR__.setModel){
          window.__LIA_TEX_OCR__.setModel(m);
        }
      });
    }

    window.__LIA_OCR_BAR__ = { el: bar, loadEl: loadWrap, set, log, get: () => ({ ...state }) };
    render();
    log('OCR-Bar ready.');
    return window.__LIA_OCR_BAR__;
  }



  // ---------------- OCR Engine (Transformers.js pipeline) ----------------
  async function __ocrGetTransformers(){
    function getRootWindow(){
      let w = window;
      try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
      return w;
    }
    const ROOT = getRootWindow();

    // Cache: schon geladen?
    if (ROOT.__LIA_TFJS__ && ROOT.__LIA_TFJS__.pipeline) return ROOT.__LIA_TFJS__;

    // Single-flight Import
    ROOT.__LIA_TFJS_IMPORT__ = ROOT.__LIA_TFJS_IMPORT__ || (async () => {

      // WICHTIG: dynamic import braucht ESM. Daher NUR ESM-URLs.
      const URLS = [
        'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2/+esm',
        'https://esm.sh/@xenova/transformers@2.17.2?bundle'
      ];

      let lastErr = null;

      for (const url of URLS){
        try{
          try{
            const b = window.__LIA_OCR_BAR__;
            if (b && b.log) b.log('Importing Transformers.js: ' + url);
          }catch(_){}

          const mod = await import(/* @vite-ignore */ url);

          const pipeline = mod.pipeline || (mod.default && mod.default.pipeline);
          const env      = mod.env      || (mod.default && mod.default.env);

          if (!pipeline || !env){
            throw new Error('Transformers.js ESM export missing (pipeline/env).');
          }

          const api = { pipeline, env, __mod: mod, __url: url };
          ROOT.__LIA_TFJS__ = api;
          return api;

        }catch(e){
          lastErr = e;
          try{
            const b = window.__LIA_OCR_BAR__;
            if (b && b.log) b.log('Import failed: ' + url + ' — ' + (e && e.message ? e.message : String(e)));
          }catch(_){}
        }
      }

      throw lastErr || new Error('Failed to load Transformers.js from all CDN URLs.');
    })();

    return await ROOT.__LIA_TFJS_IMPORT__;
  }






  function __ocrProgressTo01(p){
    try{
      if (p === null || p === undefined) return null;
      if (typeof p === 'number' && isFinite(p)) return Math.max(0, Math.min(1, p));
      const obj = p && typeof p === 'object' ? p : null;
      if (!obj) return null;

      // transformers.js liefert oft { loaded, total } oder { progress }
      if (isFinite(obj.progress)) return Math.max(0, Math.min(1, Number(obj.progress)));
      if (isFinite(obj.loaded) && isFinite(obj.total) && Number(obj.total) > 0){
        return Math.max(0, Math.min(1, Number(obj.loaded) / Number(obj.total)));
      }
    }catch(_){}
    return null;
  }

  function ensureOcrEngine(){
    if (window.__LIA_TEX_OCR__) return window.__LIA_TEX_OCR__;

    const bar = ensureOcrBar();

    const engine = {
      model: (bar.get().model || 'Xenova/trocr-small-handwritten'),
      task:  'image-to-text',
      precision: (bar.get().precision || 'fp32'),
      pipe: null,
      loading: null,

      setModel: async function(m){
        const next = String(m || this.model || 'Xenova/texify2');
        this.model = next;

        bar.set({ model: next, loaded:false, status:'idle', phase:'idle', progress:null });

        // Pipeline reset -> zwingt Reload
        this.pipe = null;
        this.loading = null;

        return this.ensureLoaded(true);
      },

      setPrecision: async function(p){
        const next = String(p || 'fp32');
        this.precision = next;
        bar.set({ precision: next, loaded:false, status:'idle', phase:'idle', progress:null });

        this.pipe = null;
        this.loading = null;

        return this.ensureLoaded(true);
      },

      ensureLoaded: async function(force){
        if (this.pipe && !force){
          return this.pipe;
        }
        if (this.loading) return this.loading;

        const prec = this.precision || 'fp32';

        // UI -> transformers dtype
        const dtypeMap = { fp32:'fp32', fp16:'fp16', int8:'q8' };
        const dtype = dtypeMap[prec] || 'fp32';

        // UI sofort aktualisieren (damit man überhaupt etwas sieht)
        bar.set({
          model: this.model,
          backend: 'wasm',
          precision: prec,
          status: 'loading',
          phase: 'import',
          loaded: false,
          progress: 0
        });
        bar.log('Loading model (' + prec + ') …');

        // Single-flight
        this.loading = (async () => {
          try{
            const t = await __ocrGetTransformers();
            const pipeline = t.pipeline;
            const env = t.env;

            // Remote-Modelle + Browser-Cache
            try{
              env.allowLocalModels  = false;
              env.allowRemoteModels = true;
              env.useBrowserCache   = true;

              env.backends = env.backends || {};
              env.backends.onnx = env.backends.onnx || {};
              env.backends.onnx.wasm = env.backends.onnx.wasm || {};
              // Wenn du später "ort-wasm" Pfadfehler siehst -> entkommentieren:
              // env.backends.onnx.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/';
            }catch(_){}

            bar.set({ phase: 'pipeline' });

            const pipe = await pipeline(this.task, this.model, {
              dtype, // <-- WICHTIG: nicht prec, sondern das gemappte dtype
              progress_callback: (p) => {
                const v = __ocrProgressTo01(p);
                if (v !== null) bar.set({ progress: v, phase: 'download' });
              }
            });

            this.pipe = pipe;
            bar.set({ status:'ready', phase:'ready', loaded:true, progress:null });
            bar.log('Model loaded (' + prec + ').');
            return pipe;

          }catch(err){
            bar.set({ status:'error', phase:'error', loaded:false, progress:null });
            bar.log('Load failed: ' + (err && err.message ? err.message : String(err)));
            throw err;
          }finally{
            this.loading = null;
          }
        })();

        return this.loading;
      },


          recognize: async function(image, opts){

            const o = (opts && typeof opts === 'object') ? opts : {};
            const silent = (o.__silent === true);

            const pipe = await this.ensureLoaded(false);
            bar.set({ status:'working', phase:'infer', progress:null });

            let revoke = null;

            async function toBlobFromCanvasLike(c){
              if (c && typeof c.convertToBlob === 'function'){
                return await c.convertToBlob({ type: 'image/png' });
              }
              if (c && typeof c.toBlob === 'function'){
                return await new Promise((resolve, reject) => {
                  c.toBlob((b) => b ? resolve(b) : reject(new Error('toBlob() returned null')), 'image/png');
                });
              }
              throw new Error('Canvas-like has no toBlob/convertToBlob');
            }

            function isImageDataLike(x){
              return x && typeof x === 'object'
                && typeof x.width === 'number'
                && typeof x.height === 'number'
                && x.data && typeof x.data.length === 'number';
            }

            function isBlobLike(x){
              // realm-safe: nicht instanceof Blob (iframe!)
              return x && typeof x === 'object'
                && typeof x.arrayBuffer === 'function'
                && typeof x.size === 'number'
                && typeof x.type === 'string';
            }

            async function normalizeToPipeInput(x){
              // 1) string bleibt string (URL / dataURL / blobURL)
              if (typeof x === 'string') return { input: x, revoke: null };

              // 2) Blob-like -> blobURL
              if (isBlobLike(x)){
                const url = URL.createObjectURL(x);
                return { input: url, revoke: () => URL.revokeObjectURL(url) };
              }

              // 3) ImageData-like -> Canvas -> blobURL
              if (isImageDataLike(x)){
                const c = document.createElement('canvas');
                c.width  = Math.max(1, Math.floor(x.width));
                c.height = Math.max(1, Math.floor(x.height));
                const cx = c.getContext('2d', { willReadFrequently: true });
                cx.putImageData(x, 0, 0);
                const blob = await toBlobFromCanvasLike(c);
                const url = URL.createObjectURL(blob);
                return { input: url, revoke: () => URL.revokeObjectURL(url) };
              }

              // 4) Canvas-like: bevorzugt dataURL (stabil)
              if (x && typeof x === 'object'){
                if (typeof x.toDataURL === 'function'){
                  const url = x.toDataURL('image/png');
                  return { input: url, revoke: null };
                }
                if (typeof x.toBlob === 'function' || typeof x.convertToBlob === 'function'){
                  const blob = await toBlobFromCanvasLike(x);
                  const url2 = URL.createObjectURL(blob);
                  return { input: url2, revoke: () => URL.revokeObjectURL(url2) };
                }
              }

              throw new Error('Unsupported input type for OCR: ' + (x === null ? 'null' : typeof x));
            }

            try{
              const norm = await normalizeToPipeInput(image);
              revoke = norm.revoke;

              const o = (opts && typeof opts === 'object') ? opts : {};
              const maxNew = (typeof o.max_new_tokens === 'number' && isFinite(o.max_new_tokens))
                ? Math.max(1, Math.floor(o.max_new_tokens))
                : 96;

              const out = await pipe(norm.input, {
                max_new_tokens: maxNew,
                do_sample: (o.do_sample === true),
                temperature: (typeof o.temperature === 'number' && isFinite(o.temperature)) ? o.temperature : 0
              });

              // robust: string | array | object
              let s = '';
              if (typeof out === 'string') s = out;
              else if (Array.isArray(out) && out.length){
                const r0 = out[0] || {};
                s = r0.generated_text || r0.text || r0.latex || '';
                if (!s) s = JSON.stringify(r0);
              }else if (out && typeof out === 'object'){
                s = out.generated_text || out.text || out.latex || '';
                if (!s) s = JSON.stringify(out);
              }else{
                s = String(out);
              }

              bar.set({ status:'ready', phase:'ready' });
              if (!silent) bar.log('Recognize done.');
              return s;

            }catch(err){
              bar.set({ status:'error', phase:'error' });
              if (!silent) bar.log('Recognize failed: ' + (err && err.message ? err.message : String(err)));
              throw err;

            }finally{
              try{ if (revoke) revoke(); }catch(_){}
            }
          },

        };


    window.__LIA_TEX_OCR__ = engine;
    return engine;
  }

  // ---- Boot: Bar + Engine + Auto-Load beim Kursstart ----
  ensureOcrBar();
  __ocrSyncAccent();
  setTimeout(__ocrSyncAccent, 0);

  const eng = ensureOcrEngine();

  // Auto-Load erzwingen, sobald der Kurs offen ist:
  // (kein "idle" – wirklich sofort; aber async, damit UI nicht blockiert)
  Promise.resolve()
  .then(() => eng.ensureLoaded(false))
  .catch(err => {
    try{
      const b = window.__LIA_OCR_BAR__;
      if (b && b.log) b.log('Auto-load failed: ' + (err && err.message ? err.message : String(err)));
    }catch(_){}
  });

}



  // ---------------------------------------------------------
  // Canvas: alter Guard bleibt wie er ist
  // ---------------------------------------------------------
  if (window.__liaDrawCanvasInit) return;
  window.__liaDrawCanvasInit = true;


window.__LIA_CANVAS_UID_COUNTER__ = window.__LIA_CANVAS_UID_COUNTER__ || 0;

function ensureMountUID(mount){
  if (!mount) return '';
  if (mount.dataset && mount.dataset.uid) return mount.dataset.uid;
  const uid = 'c' + (++window.__LIA_CANVAS_UID_COUNTER__);
  mount.dataset.uid = uid;
  return uid;
}


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
    'canvas.lia-draw{ width:100%; height:245px; display:block; background:transparent; touch-action:none; cursor:crosshair; border-radius:8px; }',

    '.lia-toolstack{ position:absolute; left:10px; top:50%; transform:translate(0,-50%); z-index:25; display:flex; flex-direction:column; gap:5px; }',
    '.lia-tool-btn{ width:32px; height:32px; padding:0; border:2px solid var(--canvas-border); border-radius:999px; cursor:pointer; user-select:none; display:grid; place-items:center; background:transparent; }',
    '.lia-tool-btn:disabled{ opacity:.35; cursor:not-allowed; }',
    '.lia-tool-btn svg{ width:22px; height:22px; display:block; margin:0; transform:translate(0,0); }',
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
    '.lia-resize-corner[data-corner="bl"]{ left:0; cursor:nesw-resize; }',

    '.lia-rect-action{ position:absolute; z-index:60; display:none; padding:6px 9px; border-radius:999px; border:2px solid var(--canvas-accent); background:var(--canvas-accent); color:#fff; font-weight:800; font-size:0.75em; cursor:pointer; user-select:none; line-height:1; white-space:nowrap; }',
    '.lia-rect-action:active{ transform:translateY(1px); }',

    '.lia-rect-progress{ position:absolute; z-index:59; display:none; left:0; top:0; width:180px; padding:4px 8px; border-radius:999px; border:2px solid var(--canvas-border); background:rgba(0,0,0,.10); backdrop-filter:blur(6px); box-sizing:border-box; align-items:center; gap:8px; }',
    '@media (prefers-color-scheme: dark){ .lia-rect-progress{ background:rgba(255,255,255,.10); } }',
    '.lia-rect-progress[data-on="1"]{ display:flex; }',
    '.lia-rect-progbar{ flex:1 1 auto; height:8px; border-radius:999px; border:2px solid var(--canvas-border); overflow:hidden; box-sizing:border-box;    background:transparent; }',
    '.lia-rect-progfill{ height:100%; width:0%; background:var(--canvas-accent); }',
    '.lia-rect-progtxt{ font-weight:850; font-size:0.8em; min-width:3.2em; text-align:right; }',


    '.lia-rect-close{ position:absolute; z-index:61; display:none; width:24px; height:24px; padding:0; border-radius:999px; border:2px solid var(--canvas-accent);    background:transparent; cursor:pointer; user-select:none; line-height:0; }',
    '.lia-rect-close svg{ width:14px; height:14px; display:block; margin:auto; }',
    '.lia-rect-close .x{ stroke:var(--canvas-accent); stroke-width:2.4; stroke-linecap:round; }',
    '.lia-rect-close:hover{ background:var(--canvas-accent); }',
    '.lia-rect-close:hover .x{ stroke:#fff; }',
    '.lia-rect-close:active{ transform:translateY(1px); }',


    '.lia-tool-btn .ico-accent{ stroke:var(--canvas-accent); fill:none; }',
    '.lia-tool-btn .ico-accent-fill{ fill:var(--canvas-accent); }',



  ].join('\n');

  (document.head || document.documentElement).appendChild(st);
}






  // =========================================================
  // Lia Input Helper: setze das Feld direkt VOR dem @canvas-Anchor
  // =========================================================
  function __liaApplyValue(el, value){
    const v = String(value);

    try{
      if (el && el.getAttribute && el.getAttribute('contenteditable') === 'true'){
        el.textContent = v;
        el.dispatchEvent(new Event('input',  { bubbles:true }));
        el.dispatchEvent(new Event('change', { bubbles:true }));
        return true;
      }

      if (el && ('value' in el)){
        el.value = v;
        el.dispatchEvent(new Event('input',  { bubbles:true }));
        el.dispatchEvent(new Event('change', { bubbles:true }));
        return true;
      }
    }catch(_){}
    return false;
  }

function __liaFindAndSetInputBeforeNode(refEl, value){
  try{
    if (!refEl || refEl.nodeType !== 1) return false;

    function findIn(node){
      if (!node || node.nodeType !== 1) return null;

      const ce = node.querySelector && node.querySelector('[contenteditable="true"]');
      if (ce) return ce;

      const list = node.querySelectorAll ? node.querySelectorAll('input, textarea') : null;
      if (list && list.length) return list[list.length - 1];

      return null;
    }

    // 1) Siblings vor refEl
    let n = refEl.previousElementSibling;
    while (n){
      if (n.matches && (n.matches('input, textarea') || n.getAttribute('contenteditable') === 'true')){
        if (__liaApplyValue(n, value)) return true;
      }
      const hit = findIn(n);
      if (hit && __liaApplyValue(hit, value)) return true;
      n = n.previousElementSibling;
    }

    // 2) In Parent: alle Elemente vor refEl
    let cur = refEl;
    for (let depth = 0; depth < 10; depth++){
      const p = cur.parentElement;
      if (!p) break;

      const kids = Array.from(p.children);
      const idx  = kids.indexOf(cur);

      for (let i = idx - 1; i >= 0; i--){
        const el = kids[i];

        if (el.matches && (el.matches('input, textarea') || el.getAttribute('contenteditable') === 'true')){
          if (__liaApplyValue(el, value)) return true;
        }
        const hit = findIn(el);
        if (hit && __liaApplyValue(hit, value)) return true;
      }

      cur = p;
    }
  }catch(_){}
  return false;
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
    { key:'red',        value:'#ff0000' },
    { key:'orange',     value:'#ff7500' },
    { key:'yellow',     value:'#ffff00' },
    { key:'violett',    value:'#ff00ff' },
    { key:'blue',       value:'#0055ff' },
    { key:'lightblue',  value:'#00ffff' },
    { key:'green',      value:'#00ff00' },
    { key:'darkgreen',  value:'#007500' },
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

  function setRectIcon(btn){
    setSvg(btn, `
    <svg viewBox="0 0 24 24" aria-hidden="true"
         style="transform: translateX(3px);">
      <path class="ico-stroke" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"
            d="
              M4.1 4.6
              H19.2
              Q20.9 4.6 20.9 6.3
              V16.0

              M17.2 19.8
              H4.1
              Q2.4 19.8 2.4 18.1
              V6.3
              Q2.4 4.6 4.1 4.6
            "/>

          //  Checkmark (links) 
            <path class="ico-stroke" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"
              d="M5.2 12.7l1.9 1.9 4.0-4.8"/>

          //  Fragezeichen (rechts, im Rechteck) 
            <path class="ico-stroke" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"
                  d="M13.8 9.9c0-2.2 4.8-2.2 4.8 0 0 1.6-2.4 1.8-2.4 3.6"/>
            <circle cx="16.2" cy="16.6" r="0.92" fill="var(--canvas-border)"/>

          //  "Zieh-Plus" direkt an der rechten unteren Ecke (überdeckt/unterbricht optisch die Ecke) 
            <path class="ico-stroke" stroke-width="1.4" stroke-linecap="round"
              d="M19.4 19.0H24.0 M21.7 16.7V21.3"/>
      </svg>
    `);
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
            <button class="lia-tool-btn lia-rect-btn"   type="button" aria-label="Lösung markieren"></button>
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
  const uid = ensureMountUID(mount);

  const btnUndo   = wrap.querySelector('.lia-undo-btn');
  const btnRedo   = wrap.querySelector('.lia-redo-btn');
  const btnColor  = wrap.querySelector('.lia-color-btn');
  const btnEraser = wrap.querySelector('.lia-eraser-btn');
  const btnRect   = wrap.querySelector('.lia-rect-btn');   // NEU
  const btnBg     = wrap.querySelector('.lia-bgmenu-btn');
  const menu      = wrap.querySelector('.lia-tool-menu');

  // ---------------------------------------------------------
  // Action-Button (unter Marker-Rechteck) — MUSS existieren,
  // sonst crasht setupCanvas() und die ganze UI ist tot.
  // ---------------------------------------------------------

  const rectActionBtn = document.createElement('button');
  rectActionBtn.type = 'button';
  rectActionBtn.className = 'lia-rect-action';
  rectActionBtn.textContent = 'Als Lösung übergeben';
  rectActionBtn.style.display = 'none';
  wrap.appendChild(rectActionBtn);


  // --- Progressbar unter dem Action-Button ---
  const rectProg = document.createElement('div');
  rectProg.className = 'lia-rect-progress';
  rectProg.dataset.on = '0';
  rectProg.innerHTML = `
    <div class="lia-rect-progbar"><div class="lia-rect-progfill"></div></div>
    <div class="lia-rect-progtxt">0%</div>
  `;
  wrap.appendChild(rectProg);

  const rectProgFill = rectProg.querySelector('.lia-rect-progfill');
  const rectProgTxt  = rectProg.querySelector('.lia-rect-progtxt');

  // verhindert Pointer-"Durchfall" (wie beim Button)
  rectProg.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });



  // verhindert, dass Pointer-Events "durchfallen"
  rectActionBtn.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });


  // Close-Button (oben rechts am Marker-Rechteck)
  const rectCloseBtn = document.createElement('button');
  rectCloseBtn.type = 'button';
  rectCloseBtn.className = 'lia-rect-close';
  rectCloseBtn.setAttribute('aria-label','Marker-Rechteck entfernen');
  rectCloseBtn.style.display = 'none';
  rectCloseBtn.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 7L17 17M17 7L7 17"
        fill="none"
        stroke="currentColor"
        stroke-width="2.4"
        stroke-linecap="round"/>
    </svg>
  `;
  wrap.appendChild(rectCloseBtn);

  // verhindert, dass Pointer-Events "durchfallen"
  rectCloseBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); });

  rectCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    clearMarkerRect();
  });



  setUndoIcon(btnUndo);
  setRedoIcon(btnRedo);
  setEraserIcon(btnEraser);
  setRectIcon(btnRect); // NEU
  if (btnBg && !btnBg.__bgCleared){ btnBg.__bgCleared = true; btnBg.innerHTML = ''; }

  const ctx = canvas.getContext('2d', { willReadFrequently: true });

  // Layer: Highlights (unter Strichen) + Striche
  const hiLayer = document.createElement('canvas');
  const hctx = hiLayer.getContext('2d', { willReadFrequently:true });

  const strokeLayer = document.createElement('canvas');
  const sctx = strokeLayer.getContext('2d', { willReadFrequently:true });

  const STORE = window.__LIA_CANVAS_STORE__;
  const saved = (uid && STORE[uid]) ? STORE[uid] : null;

  const VIEW = saved && saved.VIEW ? { ...saved.VIEW } : { panX:0, panY:0, scale:1, minScale:0.25, maxScale:8 };


  // --- Action-Button (erscheint nach Rechteck-Commit) ---
    // ---------------------------------------------------------
    // OCR: Rect -> Crop aus strokeLayer -> recognize -> in Input setzen
    // ---------------------------------------------------------

    function __ocrLog(msg){
      try{
        const b = window.__LIA_OCR_BAR__;
        if (b && b.log) b.log(msg);
      }catch(_){}
    }

        function __ocrSquashWS(str){
          const s = String(str || '');
          let out = '';
          let was = false;
          for (let i = 0; i < s.length; i++){
            const ch = s[i];
            const isWS = (ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t' || ch === '\f');
            if (isWS){
              if (!was) out += ' ';
              was = true;
            }else{
              out += ch;
              was = false;
            }
          }
          return out.trim();
        }

        function __ocrCleanLatex(s){
          let t = String(s || '').trim();

          // häufige Wrapper entfernen
          if (t.startsWith('$$') && t.endsWith('$$')) t = t.slice(2, -2).trim();
          if (t.startsWith('$')  && t.endsWith('$'))  t = t.slice(1, -1).trim();
          if (t.startsWith('\\[') && t.endsWith('\\]')) t = t.slice(2, -2).trim();

          return __ocrSquashWS(t);
        }


        function __ocrUnwrapRoman(t){
          let s = String(t || '').trim();

          const pre = '\\mathrm{';
          if (s.startsWith(pre) && s.endsWith('}')){
            s = s.slice(pre.length, -1);

            // ~ und überflüssige Spaces raus
            let out = '';
            for (let i = 0; i < s.length; i++){
              const ch = s[i];
              if (ch === '~') continue;
              out += ch;
            }
            return out.trim();
          }
          return s;
        }



      function __ocrCropFromRect(rectItem){
        if (!rectItem) return null;

        const dpr = window.devicePixelRatio || 1;

        // rect in World -> Screen (CSS px)
        const x0w = Math.min(rectItem.x0, rectItem.x1);
        const y0w = Math.min(rectItem.y0, rectItem.y1);
        const x1w = Math.max(rectItem.x0, rectItem.x1);
        const y1w = Math.max(rectItem.y0, rectItem.y1);

        const A = worldToScreen(x0w, y0w);
        const B = worldToScreen(x1w, y1w);

        let sx0 = Math.min(A.sx, B.sx);
        let sy0 = Math.min(A.sy, B.sy);
        let sx1 = Math.max(A.sx, B.sx);
        let sy1 = Math.max(A.sy, B.sy);

        // clamp in Canvas viewport (CSS)
        sx0 = clamp(sx0, 0, canvas.clientWidth);
        sy0 = clamp(sy0, 0, canvas.clientHeight);
        sx1 = clamp(sx1, 0, canvas.clientWidth);
        sy1 = clamp(sy1, 0, canvas.clientHeight);

        const wCss = sx1 - sx0;
        const hCss = sy1 - sy0;

        if (wCss < 6 || hCss < 6) return null;

        const padCss = 12;

        // Source rect in device px
        const srcX = Math.round((sx0 - padCss) * dpr);
        const srcY = Math.round((sy0 - padCss) * dpr);
        const srcW = Math.round((wCss + 2 * padCss) * dpr);
        const srcH = Math.round((hCss + 2 * padCss) * dpr);

        const out = document.createElement('canvas');
        out.width  = Math.max(1, srcW);
        out.height = Math.max(1, srcH);

        const octx = out.getContext('2d', { willReadFrequently:true });
        octx.setTransform(1,0,0,1,0,0);
        octx.globalCompositeOperation = 'source-over';
        octx.globalAlpha = 1.0;

        // 1) NICHT weiß füllen! Erst transparent croppen -> Alpha bleibt erhalten
        octx.clearRect(0,0,out.width,out.height);

        const srcCanvas = strokeLayer;
        const SRCW = srcCanvas.width, SRCH = srcCanvas.height;

        let sX = srcX, sY = srcY, sW = srcW, sH = srcH;
        let dX = 0,    dY = 0,    dW = out.width, dH = out.height;

        // clamp drawImage safe
        if (sX < 0){
          const frac = (-sX) / sW;
          dX += dW * frac; dW -= dW * frac;
          sW += sX; sX = 0;
        }
        if (sY < 0){
          const frac = (-sY) / sH;
          dY += dH * frac; dH -= dH * frac;
          sH += sY; sY = 0;
        }
        if (sX + sW > SRCW){
          const over = (sX + sW) - SRCW;
          const frac = over / sW;
          dW -= dW * frac;
          sW -= over;
        }
        if (sY + sH > SRCH){
          const over = (sY + sH) - SRCH;
          const frac = over / sH;
          dH -= dH * frac;
          sH -= over;
        }

        if (sW <= 1 || sH <= 1 || dW <= 1 || dH <= 1) return null;

        octx.drawImage(srcCanvas, sX, sY, sW, sH, dX, dY, dW, dH);

        // 2) Alpha-basiert binarisieren: alles mit Alpha>TH => Schwarz, sonst Weiß
        const img = octx.getImageData(0,0,out.width,out.height);
        const data = img.data;

        const TH = 10; // tolerant für dünne/teiltransparente Strokes

        for (let i = 0; i < data.length; i += 4){
          const a = data[i+3];
          if (a > TH){
            data[i]   = 0;
            data[i+1] = 0;
            data[i+2] = 0;
            data[i+3] = 255;
          }else{
            data[i]   = 255;
            data[i+1] = 255;
            data[i+2] = 255;
            data[i+3] = 255;
          }
        }

        octx.putImageData(img, 0, 0);
        return out;
      }




    function __ocrNormalizeSize(c){
      // Texify2 ist relativ robust, aber kleine Ausschnitte brauchen Upscale.
      const maxSide = Math.max(c.width, c.height);
      let scale = 1;

      if (maxSide < 420) scale = 420 / maxSide;     // hochskalieren
      if (maxSide > 1400) scale = 1400 / maxSide;   // runter skalieren

      scale = clamp(scale, 0.5, 4.0);

      if (Math.abs(scale - 1) < 0.06) return c;

      const out = document.createElement('canvas');
      out.width  = Math.max(1, Math.round(c.width  * scale));
      out.height = Math.max(1, Math.round(c.height * scale));

      const x = out.getContext('2d', { willReadFrequently:true });
      x.fillStyle = '#fff';
      x.fillRect(0,0,out.width,out.height);
      x.drawImage(c, 0, 0, out.width, out.height);
      return out;
    }




    function __ocrPreprocessCanvas(src){
      // 1) auf temp ziehen
      const c0 = document.createElement('canvas');
      c0.width = Math.max(1, src.width|0);
      c0.height = Math.max(1, src.height|0);
      const x0 = c0.getContext('2d', { willReadFrequently:true });
      x0.fillStyle = '#fff';
      x0.fillRect(0,0,c0.width,c0.height);
      x0.drawImage(src, 0, 0);
    
      const img = x0.getImageData(0,0,c0.width,c0.height);
      const d = img.data;
      const W = c0.width, H = c0.height;
    
      // 2) Graustufe + einfacher Threshold (funktioniert hier i.d.R. besser als “smart”)
      //    (weil dein StrokeLayer schon stark kontrastreich ist)
      const thr = 200; // <- kann man später im UI als Slider anbieten
      // bin: 1=schwarz (Stroke), 0=weiß
      const bin = new Uint8Array(W*H);
    
      for (let i=0, p=0; p<bin.length; p++, i+=4){
        const r=d[i], g=d[i+1], b=d[i+2];
        const gray = (r*0.299 + g*0.587 + b*0.114);
        bin[p] = (gray < thr) ? 1 : 0;
      }
    
      // 3) Dilation (2 Iterationen, 3x3) -> Striche dicker
      function dilateOnce(srcBin){
        const out = new Uint8Array(W*H);
        for (let y=1; y<H-1; y++){
          for (let x=1; x<W-1; x++){
            let on = 0;
            const idx = y*W + x;
            // 3x3
            for (let dy=-1; dy<=1; dy++){
              for (let dx=-1; dx<=1; dx++){
                if (srcBin[idx + dy*W + dx]) { on = 1; dy = 2; break; }
              }
            }
            out[idx] = on;
          }
        }
        return out;
      }

      // Dilation: bei Ziffern oft schädlich → standardmäßig AUS
      const DILATE_ITERS = 0; // 0 = aus, 1 = mild, 2 = stark
      let b2 = bin;

      for (let k = 0; k < DILATE_ITERS; k++){
        b2 = dilateOnce(b2);
      }
    
      // 4) Boundingbox der schwarzen Pixel
      let xMin=W, yMin=H, xMax=-1, yMax=-1;
      for (let y=0; y<H; y++){
        for (let x=0; x<W; x++){
          if (!b2[y*W + x]) continue;
          if (x < xMin) xMin = x;
          if (y < yMin) yMin = y;
          if (x > xMax) xMax = x;
          if (y > yMax) yMax = y;
        }
      }
      // leer?
      if (xMax < 0) return c0;
    
      // Rand
      const pad = 18;
      xMin = Math.max(0, xMin - pad);
      yMin = Math.max(0, yMin - pad);
      xMax = Math.min(W-1, xMax + pad);
      yMax = Math.min(H-1, yMax + pad);
    
      const cw = Math.max(1, xMax - xMin + 1);
      const ch = Math.max(1, yMax - yMin + 1);
    
      // 5) Render: schwarz auf weiß, sauber, dann skalieren
      const c1 = document.createElement('canvas');
      c1.width = cw;
      c1.height = ch;
      const x1 = c1.getContext('2d', { willReadFrequently:true });
    
      const out = x1.createImageData(cw, ch);
      const od = out.data;
      for (let y=0; y<ch; y++){
        for (let x=0; x<cw; x++){
          const v = b2[(yMin+y)*W + (xMin+x)] ? 0 : 255;
          const i = (y*cw + x)*4;
          od[i] = v; od[i+1]=v; od[i+2]=v; od[i+3]=255;
        }
      }
      x1.putImageData(out, 0, 0);
    
      // 6) Zielgröße (Texify2 mag “nicht zu klein”)
      const target = 512;
      const m = Math.max(cw, ch);
      let scale = target / m;
      if (scale < 0.75) scale = 0.75;
      if (scale > 3.5)  scale = 3.5;
    
      const c2 = document.createElement('canvas');
      c2.width = Math.max(1, Math.round(cw*scale));
      c2.height= Math.max(1, Math.round(ch*scale));
      const x2 = c2.getContext('2d', { willReadFrequently:true });
      x2.fillStyle = '#fff';
      x2.fillRect(0,0,c2.width,c2.height);
      x2.imageSmoothingEnabled = true;
      x2.drawImage(c1, 0,0, c2.width, c2.height);
    
      return c2;
    }
    



function __ocrFixDigitsIfPossible(s){
  const t = String(s || '').trim();
  if (!t) return null;

  // schon nur Ziffern?
  let allDigits = true;
  for (let i=0;i<t.length;i++){
    const c = t.charCodeAt(i);
    if (c < 48 || c > 57){ allDigits = false; break; }
  }
  if (allDigits) return t;

  // sehr konservative Single-Token Fixes
  const low = t.toLowerCase();
  if (low === 'li' || low === 'l1' || low === 'il') return '4'; // dein häufigster Fehlerfall
  if (low === 'go' || low === 'g0' || low === 'qo' || low === 'q0') return '8';


  // char-by-char mapping (nur wenn ALLES mappbar ist)
  const map = {
    'O':'0','o':'0','Q':'0',
    'I':'1','l':'1','|':'1','!':'1',
    'Z':'2','z':'2',
    'J':'3','j':'3',
    'H':'4','h':'4',
    'S':'5','s':'5',
    'B':'8',
    'g':'9','q':'9'
  };

  let out = '';
  for (let i=0;i<t.length;i++){
    const ch = t[i];
    if (map[ch]) out += map[ch];
    else return null;
  }
  return out || null;
}



function __ocrIsAllDigits(s){
  const t = String(s || '').trim();
  if (!t) return false;
  for (let i=0;i<t.length;i++){
    const c = t.charCodeAt(i);
    if (c < 48 || c > 57) return false;
  }
  return true;
}

// sehr konservativ: akzeptiert nur (gemappte) Ziffern, sonst null
function __ocrDigitCandidateFrom(txt){
  const t = String(txt || '').trim();
  if (!t) return null;

  // LaTeX-Kommandos -> raus (bei Ziffern-Guard wollen wir KEIN \frac etc.)
  if (t.indexOf('\\') !== -1) return null;

  const map = {
    'O':'0','o':'0','Q':'0','D':'0',
    'I':'1','l':'1','|':'1','!':'1',
    'Z':'2','z':'2',
    'S':'5','s':'5',
    'B':'8',
    'g':'9','q':'9'
  };

  let out = '';
  for (let i=0;i<t.length;i++){
    const ch = t[i];
    const code = t.charCodeAt(i);

    // Ziffer
    if (code >= 48 && code <= 57){ out += ch; continue; }

    // erlaubte "Noise"-Zeichen bei OCR-Ausgabe: überspringen
    if (ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t') continue;
    if (ch === '$' || ch === '{' || ch === '}' || ch === '(' || ch === ')' || ch === '[' || ch === ']') continue;
    if (ch === ',' || ch === '.' || ch === ':' || ch === ';' || ch === '_' || ch === '-') continue;

    // Mapping
    if (map[ch]){ out += map[ch]; continue; }

    // irgendwas anderes -> Kandidat verwerfen
    return null;
  }

  out = String(out).trim();
  if (!out) return null;
  if (out.length > 3) return null; // sehr konservativ
  return out;
}

function __ocrRotateCanvas(src, deg){
  const rad = deg * Math.PI / 180;
  const w = src.width|0, h = src.height|0;

  const out = document.createElement('canvas');
  out.width = Math.max(1, w);
  out.height = Math.max(1, h);

  const x = out.getContext('2d', { willReadFrequently:true });
  x.fillStyle = '#fff';
  x.fillRect(0,0,out.width,out.height);

  x.translate(out.width/2, out.height/2);
  x.rotate(rad);
  x.translate(-w/2, -h/2);

  // bei Ziffern ist "crisp" meist besser
  x.imageSmoothingEnabled = false;
  x.drawImage(src, 0, 0);

  return out;
}

// Digit-Preprocess: tight bbox, zentrieren auf Quadrat, optional 1x Dilation
function __ocrPreprocessDigitCanvas(src, opts){
  const o = (opts && typeof opts === 'object') ? opts : {};
  const dilate = (o.dilate === 1) ? 1 : 0;

  const c0 = document.createElement('canvas');
  c0.width = Math.max(1, src.width|0);
  c0.height = Math.max(1, src.height|0);

  const x0 = c0.getContext('2d', { willReadFrequently:true });
  x0.fillStyle = '#fff';
  x0.fillRect(0,0,c0.width,c0.height);
  x0.drawImage(src, 0, 0);

  const img = x0.getImageData(0,0,c0.width,c0.height);
  const d = img.data;
  const W = c0.width, H = c0.height;

  // etwas höherer Threshold -> zartere Strokes bleiben schwarz
  const thr = 225;
  let bin = new Uint8Array(W*H);

  for (let i=0,p=0; p<bin.length; p++, i+=4){
    const r=d[i], g=d[i+1], b=d[i+2];
    const gray = (r*0.299 + g*0.587 + b*0.114);
    bin[p] = (gray < thr) ? 1 : 0;
  }

  function dilateOnce(srcBin){
    const out = new Uint8Array(W*H);
    for (let y=1; y<H-1; y++){
      for (let x=1; x<W-1; x++){
        const idx = y*W + x;
        let on = 0;
        for (let dy=-1; dy<=1; dy++){
          for (let dx=-1; dx<=1; dx++){
            if (srcBin[idx + dy*W + dx]) { on = 1; dy = 2; break; }
          }
        }
        out[idx] = on;
      }
    }
    return out;
  }

  if (dilate === 1){
    bin = dilateOnce(bin);
  }

  // bbox
  let xMin=W, yMin=H, xMax=-1, yMax=-1;
  for (let y=0; y<H; y++){
    for (let x=0; x<W; x++){
      if (!bin[y*W + x]) continue;
      if (x < xMin) xMin = x;
      if (y < yMin) yMin = y;
      if (x > xMax) xMax = x;
      if (y > yMax) yMax = y;
    }
  }
  if (xMax < 0) return __ocrPreprocessCanvas(src); // fallback auf deinen Standard

  const cw = Math.max(1, xMax - xMin + 1);
  const ch = Math.max(1, yMax - yMin + 1);

  // großzügiger Pad bei Einzelsymbolen
  const pad = Math.max(24, Math.floor(Math.max(cw, ch) * 0.35));

  // quadratisches Ziel, zentriert
  const side = Math.max(64, Math.min(1024, Math.max(cw, ch) + 2*pad));

  const c1 = document.createElement('canvas');
  c1.width = side;
  c1.height = side;
  const x1 = c1.getContext('2d', { willReadFrequently:true });

  const out = x1.createImageData(side, side);
  const od = out.data;

  // weiß füllen
  for (let i=0; i<od.length; i+=4){
    od[i]=255; od[i+1]=255; od[i+2]=255; od[i+3]=255;
  }

  const offX = Math.floor((side - cw)/2);
  const offY = Math.floor((side - ch)/2);

  for (let y=0; y<ch; y++){
    for (let x=0; x<cw; x++){
      const v = bin[(yMin+y)*W + (xMin+x)] ? 0 : 255;
      const xx = offX + x;
      const yy = offY + y;
      const i = (yy*side + xx)*4;
      od[i]=v; od[i+1]=v; od[i+2]=v; od[i+3]=255;
    }
  }

  x1.putImageData(out, 0, 0);

  // immer 512x512 (Texify2 mag konsistente Größe)
  const c2 = document.createElement('canvas');
  c2.width = 512;
  c2.height = 512;
  const x2 = c2.getContext('2d', { willReadFrequently:true });
  x2.fillStyle = '#fff';
  x2.fillRect(0,0,512,512);
  x2.imageSmoothingEnabled = false;
  x2.drawImage(c1, 0,0, 512,512);

  return c2;
}

async function __ocrDigitGuard(engine, cropCanvas){
  // Varianten: (dilate 0/1) x (rot -6/0/+6)
  const variants = [];
  const base0 = __ocrPreprocessDigitCanvas(cropCanvas, { dilate:0 });
  const base1 = __ocrPreprocessDigitCanvas(cropCanvas, { dilate:1 });

  const angles = [0, -6, 6];
  for (let i=0;i<angles.length;i++){
    variants.push(__ocrRotateCanvas(base0, angles[i]));
  }
  for (let i=0;i<angles.length;i++){
    variants.push(__ocrRotateCanvas(base1, angles[i]));
  }

  const counts = {}; // candidate -> votes
  const order = [];  // stable order of first appearance

  for (let i=0;i<variants.length;i++){
    let raw = '';
    try{
      raw = await engine.recognize(variants[i], { max_new_tokens: 8, do_sample:false, temperature:0, __silent:true });
    }catch(_){
      continue;
    }

    let latex = __ocrCleanLatex(raw);
    latex = __ocrUnwrapRoman(latex);

    const cand = __ocrDigitCandidateFrom(latex);
    if (!cand) continue;

    if (!counts[cand]){ counts[cand] = 0; order.push(cand); }
    counts[cand] += 1;

    // Wenn wir 3 gleiche Stimmen haben, früh raus (schnell)
    if (counts[cand] >= 3) return cand;
  }

  // best vote
  let best = null;
  let bestV = 0;
  for (let i=0;i<order.length;i++){
    const k = order[i];
    const v = counts[k] || 0;
    if (v > bestV){ bestV = v; best = k; }
  }
  return best;
}



// -----------------------------
// Rect-Progress (Pseudo-Progress für Inference)
// -----------------------------
let __rectProgRAF = 0;
let __rectProgStart = 0;

function __rectProgSet01(v){
  if (!rectProg || !rectProgFill || !rectProgTxt) return;
  const p = Math.max(0, Math.min(1, Number(v)));
  rectProgFill.style.width = Math.round(p*100) + '%';
  rectProgTxt.textContent = Math.round(p*100) + '%';
}

function __rectProgShow(){
  if (!rectProg) return;
  rectProg.dataset.on = '1';
  __rectProgSet01(0);
  scheduleRectActionUpdate();
}

function __rectProgHide(){
  if (!rectProg) return;
  rectProg.dataset.on = '0';
  __rectProgSet01(0);
}

function __rectProgStartPseudo(){
  __rectProgShow();
  __rectProgStart = performance.now();

  const tick = () => {
    const t = performance.now() - __rectProgStart;

    // Kurve: schnell auf 70%, dann 90%, dann langsam bis 98%
    let v = 0;
    if (t < 900){
      v = (t/900) * 0.70;
    }else if (t < 2200){
      v = 0.70 + ((t-900)/1300) * 0.20;
    }else{
      v = 0.90 + Math.min(0.08, ((t-2200)/5000) * 0.08);
    }

    __rectProgSet01(v);
    __rectProgRAF = requestAnimationFrame(tick);
  };

  __rectProgRAF = requestAnimationFrame(tick);
}

function __rectProgStop(final01){
  if (__rectProgRAF){
    cancelAnimationFrame(__rectProgRAF);
    __rectProgRAF = 0;
  }
  __rectProgSet01(final01);

  // kurze “100% sichtbar” Phase, dann weg
  setTimeout(() => __rectProgHide(), 250);
}





async function __ocrFromMarkedRect({ auto=false } = {}){
  const rectItem = getRectItem();
  if (!rectItem){
    __ocrLog('No marker-rectangle found.');
    return;
  }

  const engine = window.__LIA_TEX_OCR__;
  if (!engine || !engine.recognize){
    __ocrLog('OCR engine not available (window.__LIA_TEX_OCR__).');
    return;
  }

    // UI: Button sperren
    const oldText = rectActionBtn.textContent;
    rectActionBtn.disabled = true;
    rectActionBtn.textContent = 'Schrifterkennung läuft...';
    __rectProgStartPseudo();


  try{
    // Modell sicher geladen
    if (engine.ensureLoaded) await engine.ensureLoaded(false);

    // Crop erzeugen
    const crop = __ocrCropFromRect(rectItem);
    if (!crop){
      __ocrLog('Crop failed (rect too small or out of bounds).');
      return;
    }

    // --- NEW: preferDigits NICHT am Marker-Rechteck festmachen,
    // sondern an der Ink-Boundingbox (tatsächliche Stiftpixel) im Crop.
    // Crop ist bereits Schwarz/Weiß (aus __ocrCropFromRect), daher reicht d[i] < 128.

    function __ocrInkBBoxQuick(src){
      try{
        const W = src.width|0, H = src.height|0;
        const x = src.getContext('2d', { willReadFrequently:true });
        const img = x.getImageData(0,0,W,H);
        const d = img.data;

        // Sampling, falls sehr groß (Performance)
        const step = (W * H > 1200000) ? 2 : 1;

        let xMin=W, yMin=H, xMax=-1, yMax=-1;
        let black = 0;

        for (let y=0; y<H; y+=step){
          const row = y * W * 4;
          for (let x0=0; x0<W; x0+=step){
            const i = row + x0*4;
            if (d[i] < 128){ // schwarz
              black++;
              if (x0 < xMin) xMin = x0;
              if (y  < yMin) yMin = y;
              if (x0 > xMax) xMax = x0;
              if (y  > yMax) yMax = y;
            }
          }
        }

        if (xMax < 0) return null;
        const w = xMax - xMin + 1;
        const h = yMax - yMin + 1;
        return { xMin,yMin,xMax,yMax,w,h,black,W,H };
      }catch(_){}
      return null;
    }

    const cropW = crop.width  | 0;
    const cropH = crop.height | 0;

    // Ink-Box statt Crop-Box
    const ink = __ocrInkBBoxQuick(crop);

    // Fallback, falls leer
    const arInk  = ink ? (ink.w / Math.max(1, ink.h)) : (cropW / Math.max(1, cropH));
    const maxInk = ink ? Math.max(ink.w, ink.h) : Math.max(cropW, cropH);

    // Sehr viel toleranter: Einzelziffern sind fast immer „klein“ in der Ink-Box,
    // selbst wenn das Marker-Rechteck riesig war.
    const preferDigits =
      (maxInk <= 560) &&
      (arInk >= 0.16) && (arInk <= 6.0);


    const modelName = String(engine.model || '');
    const isTrocr = modelName.toLowerCase().indexOf('trocr') !== -1;



      // 1x OCR (kein Multi-Voting mehr)

      // Preprocess-Input vorbereiten (wichtig: img war nie definiert)
      let inputCanvas = crop;

      // Für "Digits/Symbole" das Digit-Preprocessing nutzen, sonst dein Standard-Preprocessing
      try{
        if (preferDigits){
          inputCanvas = __ocrPreprocessDigitCanvas(crop, { dilate: 0 });
        }else{
          inputCanvas = __ocrPreprocessCanvas(crop);
        }
      }catch(_){
        inputCanvas = crop; // fallback
      }

      // Optional: normalize (kleine Ausschnitte hochskalieren)
      try{
        inputCanvas = __ocrNormalizeSize(inputCanvas);
      }catch(_){}

      // OCR
      const raw = await engine.recognize(
        inputCanvas,
        preferDigits
          ? { max_new_tokens: 16,  do_sample:false, temperature:0 }
          : { max_new_tokens: 128, do_sample:false, temperature:0 }
      );




    // Clean je nach Modell
    function __ocrTidyMathText(s){
      const t = __ocrSquashWS(s);
      const ops = '+-=*/()[]{}';
      let out = '';
      for (let i=0;i<t.length;i++){
        const ch = t[i];
        if (ch === ' '){
          const prev = (i>0) ? t[i-1] : '';
          const next = (i+1<t.length) ? t[i+1] : '';
          if (ops.indexOf(prev) >= 0 || ops.indexOf(next) >= 0) continue;
          out += ' ';
        }else{
          out += ch;
        }
      }
      return out.trim();
    }

    let latex = '';
    if (isTrocr){
      latex = __ocrTidyMathText(raw);
    }else{
      latex = __ocrCleanLatex(raw);
      latex = __ocrUnwrapRoman(latex);
    }

    // --- NEW: Digit-Salvage auch dann, wenn Texify "Li" etc. liefert.
    // Wir triggern das, wenn preferDigits true ist ODER die Ausgabe sehr kurz ist und kein LaTeX enthält.

    function __ocrIsShortPlainToken(s){
      const t = String(s || '').trim();
      if (!t) return false;
      if (t.length > 6) return false;
      if (t.indexOf('\\') !== -1) return false;

      // mind. ein "digit-ish" Zeichen?
      let has = false;
      for (let i=0; i<t.length; i++){
        const c = t.charCodeAt(i);
        const ch = t[i];

        // 0-9
        if (c >= 48 && c <= 57){ has = true; continue; }

        // häufige OCR-Verwechsler, die wir als "digit-ish" zulassen
        if (ch === 'l' || ch === 'L' || ch === 'I' || ch === 'i' || ch === '|' || ch === '!' ||
            ch === 'O' || ch === 'o' || ch === 'Q' || ch === 'q' ||
            ch === 'S' || ch === 's' || ch === 'Z' || ch === 'z' ||
            ch === 'B' || ch === 'g'){
          has = true; continue;
        }

        // harmlose Klammern/Spaces: erlauben, aber zählen nicht als "has"
        if (ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t') continue;
        if (ch === '(' || ch === ')' || ch === '[' || ch === ']' || ch === '{' || ch === '}' ) continue;
        if (ch === '.' || ch === ',' || ch === ':' || ch === ';' || ch === '_' || ch === '-') continue;

        // sonst: kein plain token
        return false;
      }
      return has;
    }

    const tryDigitSalvage = preferDigits || __ocrIsShortPlainToken(latex);

    if (tryDigitSalvage){
      // 1) direkt Kandidat extrahieren (sehr konservativ)
      const cand = __ocrDigitCandidateFrom(latex);
      if (cand){
        latex = cand;
      }else{
        // 2) bekannte Texify-Verwechslungen (dein Fix: "Li" -> "4", etc.)
        const fixed = __ocrFixDigitsIfPossible(latex);
        if (fixed) latex = fixed;
      }

      // 3) wenn immer noch keine Ziffern: Multi-Variante (Rotation/Dilation Voting)
      if (!__ocrIsAllDigits(latex)){
        const voted = await __ocrDigitGuard(engine, crop);
        if (voted) latex = voted;
      }
    }





    __ocrLog('OCR result: ' + latex);

    // In das Eingabefeld vor diesem @canvas schreiben
    const pair = wrap.closest('.lia-canvas-pair');
    const ok = __liaFindAndSetInputBeforeNode(pair || wrap, latex);

    if (!ok){
      __ocrLog('Could not find an input field before this @canvas.');
    }else{
      rectActionBtn.textContent = '✅ übernommen';
      setTimeout(() => { rectActionBtn.textContent = oldText; }, 900);
    }

  }catch(err){
    __ocrLog('OCR error: ' + (err && err.message ? err.message : String(err)));
    rectActionBtn.textContent = '⚠ Fehler';
    setTimeout(() => { rectActionBtn.textContent = oldText; }, 900);
  }finally{
    __rectProgStop(1);
    rectActionBtn.disabled = false;
  }
}











    // --- Button: manuell auslösen ---
    rectActionBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();

      await __ocrFromMarkedRect({ auto:false });

      // OPTIONAL: wenn du nach erfolgreicher Übergabe automatisch löschen willst:
      // clearMarkerRect();
    });






  // ---- Migration (alt: STROKES/REDO -> neu: ITEMS/REDO)
  let ITEMS = [];
  let REDO  = [];
  if (saved){
    if (Array.isArray(saved.ITEMS)){
      ITEMS = saved.ITEMS;
      REDO  = Array.isArray(saved.REDO) ? saved.REDO : [];
    } else if (Array.isArray(saved.STROKES)){
      ITEMS = saved.STROKES.map(st => ({ kind:'path', ...st }));
      REDO  = Array.isArray(saved.REDO) ? saved.REDO.map(st => ({ kind:'path', ...st })) : [];
    }
  }

  let tool = 'pen';
  let menuMode = 'pen';

  let colorIndex = 0;
  let penWidth = 3;
  let penAlpha = 1.0;
  let eraserWidth = 12;

  let bgMode = (saved && saved.bgMode) ? saved.bgMode : 'none';
  let bgStep = (saved && saved.bgStep) ? saved.bgStep : 24;

  // Highlight-Rechteck (Themefarbe) – Standard-Alpha
  const RECT_ALPHA = 0.28;

  let currentPath = null;
  let currentRect = null;

  function persist(){
    if (!uid) return;
    STORE[uid] = {
      VIEW: { ...VIEW },
      ITEMS,
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

  function setMenuOpen(open){
    if (!menu) return;
    menu.dataset.open = open ? '1' : '0';
  }

function autoCloseSubmenus(){
  if (!menu) return;
  if (menu.dataset.open === '1') setMenuOpen(false);
}



  function __menuCloseBtnSvg(){
    return `
      <svg viewBox="-1 0 24 24" aria-hidden="true" style="width:22px;height:22px;display:block;">
        <path class="ico-stroke" d="M6 6l12 12M18 6L6 18" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
  }

  function __menuTrashSvg(){
    return `
      <svg viewBox="-1 0 24 24" aria-hidden="true" style="width:22px;height:22px;display:block;">
        <path class="ico-stroke" d="M9 3h6" stroke-width="2" stroke-linecap="round"/>
        <path class="ico-stroke" d="M4 6h16" stroke-width="2" stroke-linecap="round"/>
        <path class="ico-stroke" d="M7 6l1 15h8l1-15" stroke-width="2" stroke-linejoin="round"/>
        <path class="ico-stroke" d="M10 10v8M14 10v8" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
  }

  function buildPenMenu(){
    if (!menu) return;
    menu.__mode = 'pen';

    const auto = getAutoPen();
    let html = '';

    html += `<span class="lia-heading-row">
      <span class="lia-tool-heading">Stift</span>
      <button class="lia-menu-icon-btn" type="button" data-act="close" aria-label="Schließen">${__menuCloseBtnSvg()}</button>
    </span>`;

    html += `<span class="lia-color-grid">`;
    for (let i = 0; i < COLORS.length; i++){
      const c = COLORS[i];
      const col = (c.key === 'auto') ? auto : (c.value || auto);
      const active = (i === colorIndex) ? '1' : '0';
      html += `<button class="lia-color-item" type="button" data-act="color" data-idx="${i}" data-active="${active}"
                style="background:${col};" aria-label="Farbe ${c.key}"></button>`;
    }
    html += `</span>`;

    // Width
    html += `<span class="lia-row">
      <span class="lia-preview"><span class="lia-preview-line" data-k="pw" style="height:${Math.max(2, Math.min(14, penWidth))}px;"></span></span>
      <input class="lia-slider" type="range" min="1" max="30" step="1" value="${penWidth}" data-act="penWidth" aria-label="Stiftbreite">
      <span style="font-weight:800;min-width:2.6em;text-align:right">${penWidth}</span>
    </span>`;

    // Alpha
    html += `<span class="lia-row">
      <span class="lia-preview"><span class="lia-preview-line" data-k="pa" style="opacity:${penAlpha};"></span></span>
      <input class="lia-slider" type="range" min="0.15" max="1" step="0.05" value="${penAlpha}" data-act="penAlpha" aria-label="Deckkraft">
      <span style="font-weight:800;min-width:2.6em;text-align:right">${Math.round(penAlpha*100)}%</span>
    </span>`;

    menu.innerHTML = html;

    menu.onclick = (e) => {
      const el = (e.target && e.target.closest) ? e.target.closest('[data-act]') : null;
      if (!el) return;
      const act = el.getAttribute('data-act');

      if (act === 'close'){
        setMenuOpen(false);
        return;
      }

      if (act === 'color'){
        const idx = Number(el.getAttribute('data-idx'));
        if (isFinite(idx)) colorIndex = clamp(idx, 0, COLORS.length - 1);
        tool = 'pen';
        updateUI();
        persist();
        buildPenMenu(); // refresh active ring
        return;
      }

      if (act === 'penWidth'){
        // handled via oninput below
        return;
      }

      if (act === 'penAlpha'){
        return;
      }
    };

    const w = menu.querySelector('input[data-act="penWidth"]');
    if (w){
      w.oninput = () => {
        penWidth = clamp(Number(w.value), 1, 60);
        updateUI();
        persist();
        const line = menu.querySelector('[data-k="pw"]');
        if (line) line.style.height = Math.max(2, Math.min(14, penWidth)) + 'px';
        const t = w.parentElement && w.parentElement.querySelector('span[style*="min-width"]');
        if (t) t.textContent = String(penWidth);
      };
    }

    const a = menu.querySelector('input[data-act="penAlpha"]');
    if (a){
      a.oninput = () => {
        penAlpha = clamp(Number(a.value), 0.05, 1);
        updateUI();
        persist();
        const line = menu.querySelector('[data-k="pa"]');
        if (line) line.style.opacity = String(penAlpha);
        const t = a.parentElement && a.parentElement.querySelector('span[style*="min-width"]');
        if (t) t.textContent = Math.round(penAlpha*100) + '%';
      };
    }
  }

  function buildEraserMenu(){
    if (!menu) return;
    menu.__mode = 'eraser';

    menu.innerHTML = `
      <span class="lia-heading-row">
        <span class="lia-tool-heading">Radierer</span>
        <span style="display:flex;gap:8px;align-items:center">
          <button class="lia-menu-icon-btn" type="button" data-act="clear" aria-label="Alles löschen">${__menuTrashSvg()}</button>
          <button class="lia-menu-icon-btn" type="button" data-act="close" aria-label="Schließen">${__menuCloseBtnSvg()}</button>
        </span>
      </span>

      <span class="lia-row">
        <span class="lia-preview"><span class="lia-preview-line" style="height:${Math.max(2, Math.min(18, eraserWidth))}px;"></span></span>
        <input class="lia-slider" type="range" min="4" max="80" step="1" value="${eraserWidth}" data-act="eraserWidth" aria-label="Radiererbreite">
        <span style="font-weight:800;min-width:2.6em;text-align:right">${eraserWidth}</span>
      </span>
    `;

    menu.onclick = (e) => {
      const el = (e.target && e.target.closest) ? e.target.closest('[data-act]') : null;
      if (!el) return;
      const act = el.getAttribute('data-act');

      if (act === 'close'){
        setMenuOpen(false);
        return;
      }
      if (act === 'clear'){
        clearAllDrawing();
        return;
      }
    };

    const w = menu.querySelector('input[data-act="eraserWidth"]');
    if (w){
      w.oninput = () => {
        eraserWidth = clamp(Number(w.value), 2, 200);
        updateUI();
        persist();
        const t = w.parentElement && w.parentElement.querySelector('span[style*="min-width"]');
        if (t) t.textContent = String(eraserWidth);
      };
    }
  }

  function buildBgMenu(){
    if (!menu) return;
    menu.__mode = 'bg';

    menu.innerHTML = `
      <span class="lia-heading-row">
        <span class="lia-tool-heading">Hintergrund</span>
        <button class="lia-menu-icon-btn" type="button" data-act="close" aria-label="Schließen">${__menuCloseBtnSvg()}</button>
      </span>

      <span class="lia-bg-tiles">
        <button class="lia-bg-tile" type="button" data-act="bg" data-mode="none"  data-active="${bgMode==='none'?'1':'0'}" aria-label="Kein Hintergrund"></button>
        <button class="lia-bg-tile" type="button" data-act="bg" data-mode="grid"  data-active="${bgMode==='grid'?'1':'0'}" aria-label="Kariert"></button>
        <button class="lia-bg-tile" type="button" data-act="bg" data-mode="lined" data-active="${bgMode==='lined'?'1':'0'}" aria-label="Liniert"></button>
      </span>

      <span class="lia-row">
        <span style="font-weight:800;opacity:.8;min-width:4.8em">Abstand</span>
        <input class="lia-slider" type="range" min="8" max="80" step="1" value="${bgStep}" data-act="bgStep" aria-label="Hintergrundabstand">
        <span style="font-weight:800;min-width:2.6em;text-align:right">${bgStep}</span>
      </span>
    `;

    // kleine Previews auf die Tiles (ohne externe Assets)
    try{
      const accent = rgbaFromAny(getAccentColor(), 0.65);
      const tiles = menu.querySelectorAll('.lia-bg-tile');
      if (tiles && tiles.length >= 3){
        // grid
        const g = tiles[1];
        g.style.backgroundImage =
          `linear-gradient(to right, ${accent} 2px, transparent 2px),
           linear-gradient(to bottom, ${accent} 2px, transparent 2px)`;
        g.style.backgroundSize = `10px 10px`;
        g.style.backgroundPosition = 'center';

        // lined
        const l = tiles[2];
        l.style.backgroundImage = `linear-gradient(to bottom, ${accent} 2px, transparent 2px)`;
        l.style.backgroundSize = `10px 10px`;
        l.style.backgroundPosition = 'center';
      }
    }catch(_){}

    menu.onclick = (e) => {
      const el = (e.target && e.target.closest) ? e.target.closest('[data-act]') : null;
      if (!el) return;
      const act = el.getAttribute('data-act');

      if (act === 'close'){
        setMenuOpen(false);
        return;
      }

      if (act === 'bg'){
        const m = String(el.getAttribute('data-mode') || 'none');
        bgMode = (m === 'grid' || m === 'lined') ? m : 'none';
        present();
        persist();
        buildBgMenu(); // refresh active rings
        updateUI();
        return;
      }
    };

    const s = menu.querySelector('input[data-act="bgStep"]');
    if (s){
      s.oninput = () => {
        bgStep = clamp(Number(s.value), 6, 300);
        present();
        persist();
        const t = s.parentElement && s.parentElement.querySelector('span[style*="min-width"]');
        if (t) t.textContent = String(bgStep);
      };
    }
  }




  function clearMarkerRect(){
    let removed = false;

    for (let i = ITEMS.length - 1; i >= 0; i--){
      if (ITEMS[i] && ITEMS[i].kind === 'rect'){ ITEMS.splice(i, 1); removed = true; }
    }
    for (let i = REDO.length - 1; i >= 0; i--){
      if (REDO[i] && REDO[i].kind === 'rect'){ REDO.splice(i, 1); removed = true; }
    }

    if (removed){
      rebuildHighlightLayer();
      present();
      updateUI();
      persist();
    }
    scheduleRectActionUpdate();
  }





  function getRectItem(){
    for (let i = ITEMS.length - 1; i >= 0; i--){
      const it = ITEMS[i];
      if (it && it.kind === 'rect') return it;
    }
    return null;
  }

  function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }

  let __rectBtnRAF = 0;
  function scheduleRectActionUpdate(){
    if (__rectBtnRAF) return;
    __rectBtnRAF = requestAnimationFrame(() => {
      __rectBtnRAF = 0;
      updateRectActionButton();
    });
  }

  function updateRectActionButton(){
    const it = getRectItem();
    if (!it){
      rectActionBtn.style.display = 'none';
      if (rectCloseBtn) rectCloseBtn.style.display = 'none';
      return;
    }

    // Button muss messbar sein
    rectActionBtn.style.display = 'block';
    rectActionBtn.style.visibility = 'hidden';

    const bw = rectActionBtn.offsetWidth  || 180;
    const bh = rectActionBtn.offsetHeight || 34;

    rectActionBtn.style.visibility = 'visible';

    const x0 = Math.min(it.x0, it.x1);
    const y0 = Math.min(it.y0, it.y1);
    const x1 = Math.max(it.x0, it.x1);
    const y1 = Math.max(it.y0, it.y1);

    const a = worldToScreen(x0, y0);
    const b = worldToScreen(x1, y1);

    const right  = Math.max(a.sx, b.sx);
    const bottom = Math.max(a.sy, b.sy);

    const pad = 6;
    const gap = 8; // Abstand unter dem Rechteck

    let left = right - bw;     // rechtsbündig am Rechteck
    let top  = bottom + gap;   // darunter

    // innerhalb der Canvas-Fläche halten
    left = clamp(left, pad, canvas.clientWidth  - bw - pad);
    top  = clamp(top,  pad, canvas.clientHeight - bh - pad);

    rectActionBtn.style.left = left + 'px';
    rectActionBtn.style.top  = top  + 'px';


    // --- Progressbar direkt UNTER dem Button positionieren ---
    if (rectProg){
      rectProg.style.width = bw + 'px';

      const gap2 = 6;
      let pLeft = left;
      let pTop  = top + bh + gap2;

      // wenn rectProg gerade hidden ist, ist offsetHeight 0 → fallback
      const pbH = rectProg.offsetHeight || 26;

      pLeft = clamp(pLeft, pad, canvas.clientWidth  - bw - pad);
      pTop  = clamp(pTop,  pad, canvas.clientHeight - pbH - pad);

      rectProg.style.left = pLeft + 'px';
      rectProg.style.top  = pTop  + 'px';
    }


      // ---- Close-Button oben rechts am Rechteck ----
    if (rectCloseBtn){
      rectCloseBtn.style.display = 'block';
      rectCloseBtn.style.visibility = 'hidden';

      const cbw = rectCloseBtn.offsetWidth  || 24;
      const cbh = rectCloseBtn.offsetHeight || 24;

      rectCloseBtn.style.visibility = 'visible';

      const topRect = Math.min(a.sy, b.sy);
      const rightRect = Math.max(a.sx, b.sx);

      const pad2 = 6;

      // Button leicht "auf" die Ecke setzen (halb über Eck), aber im Canvas halten
      let cLeft = rightRect - cbw * 0.5;
      let cTop  = topRect  - cbh * 0.5;

      cLeft = clamp(cLeft, pad2, canvas.clientWidth  - cbw - pad2);
      cTop  = clamp(cTop,  pad2, canvas.clientHeight - cbh - pad2);

      rectCloseBtn.style.left = cLeft + 'px';
      rectCloseBtn.style.top  = cTop  + 'px';
    }
  }





  function screenToWorld(sx, sy){
    return { x: (sx - VIEW.panX) / VIEW.scale, y: (sy - VIEW.panY) / VIEW.scale };
  }
  function worldToScreen(wx, wy){
    return { sx: wx * VIEW.scale + VIEW.panX, sy: wy * VIEW.scale + VIEW.panY };
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

    const col = rgbaFromAny(getAccentColor(), 0.65);

    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1.0;
    ctx.strokeStyle = col;
    ctx.lineWidth = 1.125 / VIEW.scale;

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

  function setViewportTransformOn(ctx2){
    const dpr = window.devicePixelRatio || 1;
    ctx2.setTransform(dpr*VIEW.scale, 0, 0, dpr*VIEW.scale, dpr*VIEW.panX, dpr*VIEW.panY);
  }

  function clearLayer(ctx2){
    const dpr = window.devicePixelRatio || 1;
    ctx2.setTransform(dpr,0,0,dpr,0,0);
    ctx2.globalCompositeOperation = 'source-over';
    ctx2.globalAlpha = 1;
    ctx2.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
  }

  function applyPathStyleTo(ctx2, it){
    if (it.tool === 'eraser'){
      ctx2.globalCompositeOperation = 'destination-out';
      ctx2.globalAlpha = 1.0;
      ctx2.strokeStyle = 'rgba(0,0,0,1)';
      ctx2.lineWidth = it.width;
    }else{
      ctx2.globalCompositeOperation = 'source-over';
      ctx2.globalAlpha = it.alpha;
      ctx2.strokeStyle = it.color;
      ctx2.lineWidth = it.width;
    }
    ctx2.lineCap = 'round';
    ctx2.lineJoin = 'round';
  }

  function rebuildHighlightLayer(){
    clearLayer(hctx);
    setViewportTransformOn(hctx);

    for (const it of ITEMS){
      if (!it || it.kind !== 'rect') continue;

      const colBase = (it.colorKey === 'accent') ? getAccentColor() : (it.color || getAccentColor());
      const fillCol = rgbaFromAny(colBase, Math.max(0, Math.min(1, it.alpha)));

      const x0 = Math.min(it.x0, it.x1);
      const y0 = Math.min(it.y0, it.y1);
      const x1 = Math.max(it.x0, it.x1);
      const y1 = Math.max(it.y0, it.y1);

      hctx.save();
      hctx.globalCompositeOperation = 'source-over';
      hctx.globalAlpha = 1.0;
      hctx.fillStyle = fillCol;
      hctx.fillRect(x0, y0, Math.max(0, x1-x0), Math.max(0, y1-y0));
      hctx.restore();
    }
  }

  function rebuildStrokeLayer(){
    clearLayer(sctx);
    setViewportTransformOn(sctx);

    for (const it of ITEMS){
      if (!it || it.kind !== 'path') continue;
      if (!it.points || it.points.length < 2) continue;

      applyPathStyleTo(sctx, it);
      sctx.beginPath();
      sctx.moveTo(it.points[0].x, it.points[0].y);
      for (let i=1;i<it.points.length;i++){
        const p = it.points[i];
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

    // 1) Highlights
    ctx.drawImage(
      hiLayer,
      0,0, hiLayer.width, hiLayer.height,
      0,0, canvas.clientWidth, canvas.clientHeight
    );

    // 1b) Preview-Rechteck (während Drag)
    if (currentRect){
      const col = rgbaFromAny(getAccentColor(), RECT_ALPHA);
      const x0 = Math.min(currentRect.x0, currentRect.x1);
      const y0 = Math.min(currentRect.y0, currentRect.y1);
      const x1 = Math.max(currentRect.x0, currentRect.x1);
      const y1 = Math.max(currentRect.y0, currentRect.y1);

      const a = worldToScreen(x0,y0);
      const b = worldToScreen(x1,y1);

      ctx.save();
      ctx.fillStyle = col;
      ctx.globalAlpha = 1.0;
      ctx.fillRect(a.sx, a.sy, Math.max(0, b.sx-a.sx), Math.max(0, b.sy-a.sy));
      ctx.restore();
    }

    // 2) Striche
    ctx.drawImage(
      strokeLayer,
      0,0, strokeLayer.width, strokeLayer.height,
      0,0, canvas.clientWidth, canvas.clientHeight
    );
    scheduleRectActionUpdate();
  }

  // -------- UI / Menüs (dein bestehendes Menü bleibt; wir schließen es fürs Rechteck-Tool)
  function updateMenuVisuals(){
    // dein bestehender Code (Pen/BG/Eraser) bleibt unverändert
    // -> wir rufen weiterhin updateMenuVisuals() unten, aber ändern hier nichts.
  }

  function updateUI(){
    const col = penBaseColor();
    const accent = getAccentColor();

    if (btnUndo){
      btnUndo.disabled = (ITEMS.length === 0);
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

    // NEU: Rechteck-Tool Button
    if (btnRect){
      btnRect.style.background = 'transparent';
      btnRect.dataset.active = (tool === 'rect') ? '1' : '0';
      btnRect.title = 'Marker-Rechteck';
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

    // falls du deine alten Menü-Visuals nutzen willst:
    try{ updateMenuVisuals(); }catch(_){}
  }

  // ---- Undo/Redo (über ALLE Items)
  function doUndo(){
    if (!ITEMS.length) return;
    const it = ITEMS.pop();
    REDO.push(it);
    rebuildHighlightLayer();
    rebuildStrokeLayer();
    present();
    updateUI();
    persist();
  }
  function doRedo(){
    if (!REDO.length) return;
    const it = REDO.pop();
    ITEMS.push(it);
    rebuildHighlightLayer();
    rebuildStrokeLayer();
    present();
    updateUI();
    persist();
  }

  function clearAllDrawing(){
    ITEMS.length = 0;
    REDO.length = 0;
    rebuildHighlightLayer();
    rebuildStrokeLayer();
    present();
    updateUI();
    persist();
  }

  // ---- Zeichnen: Path
  function startStrokeAtScreen(sx,sy){
    const w = screenToWorld(sx,sy);
    const it = {
      kind:'path',
      tool,
      color: penBaseColor(),
      alpha: penAlpha,
      width: (tool === 'eraser') ? eraserWidth : penWidth,
      points: [ {x:w.x, y:w.y} ]
    };
    ITEMS.push(it);
    currentPath = it;
    REDO.length = 0;

    setViewportTransformOn(sctx);
    applyPathStyleTo(sctx, it);
    sctx.beginPath();
    sctx.moveTo(w.x, w.y);

    updateUI();
    persist();
  }

  function extendStrokeToScreen(sx,sy){
    if (!currentPath) return;
    const w = screenToWorld(sx,sy);
    currentPath.points.push({x:w.x,y:w.y});
    sctx.lineTo(w.x, w.y);
    sctx.stroke();
    present();
    persist();
  }
  function endStroke(){ currentPath = null; }

  // ---- Zeichnen: Rechteck (Highlight)
  function startRectAtScreen(sx,sy){
    const w = screenToWorld(sx,sy);
    currentRect = { x0:w.x, y0:w.y, x1:w.x, y1:w.y };
  }
  function updateRectToScreen(sx,sy){
    if (!currentRect) return;
    const w = screenToWorld(sx,sy);
    currentRect.x1 = w.x;
    currentRect.y1 = w.y;
    present();
  }
  function finishRect(commit){
    if (!currentRect) return;
    if (commit){
      const x0 = Math.min(currentRect.x0, currentRect.x1);
      const y0 = Math.min(currentRect.y0, currentRect.y1);
      const x1 = Math.max(currentRect.x0, currentRect.x1);
      const y1 = Math.max(currentRect.y0, currentRect.y1);

      // Tiny-Rect wegwerfen
      const w = x1 - x0;
      const h = y1 - y0;
      if (w > 1e-3 && h > 1e-3){

      // ✅ es darf nur EIN Marker-Rechteck geben → alte löschen
        for (let i = ITEMS.length - 1; i >= 0; i--){
          if (ITEMS[i] && ITEMS[i].kind === 'rect') ITEMS.splice(i, 1);
        }
        for (let i = REDO.length - 1; i >= 0; i--){
          if (REDO[i] && REDO[i].kind === 'rect') REDO.splice(i, 1);
        }

        ITEMS.push({
          kind:'rect',
          x0, y0, x1, y1,
          alpha: RECT_ALPHA,
          colorKey: 'accent'   // -> bleibt Themefarbe
        });
        REDO.length = 0;
      }
    }
    currentRect = null;
    rebuildHighlightLayer();
    present();
    updateUI();
    persist();
    scheduleRectActionUpdate();

    // Optional: automatisch OCR starten, wenn ein Marker-Rechteck committed wurde
    // (nicht in present()!)
    // try{ __ocrFromMarkedRect({ auto:true }); }catch(_){}


  }

  // ---- Resize
  function resizeToCss(){
    const dpr = window.devicePixelRatio || 1;
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    const pxW = Math.max(1, Math.round(cssW * dpr));
    const pxH = Math.max(1, Math.round(cssH * dpr));

    canvas.width = pxW;
    canvas.height = pxH;

    hiLayer.width = pxW;
    hiLayer.height = pxH;

    strokeLayer.width = pxW;
    strokeLayer.height = pxH;

    rebuildHighlightLayer();
    rebuildStrokeLayer();
    present();
    updateUI();
    persist();
  }

  updateUI();
  resizeToCss();

  const ro = new ResizeObserver(() => resizeToCss());
  ro.observe(canvas);


// ---------------------------------
// Resize-Corners (links/rechts unten)
// ---------------------------------
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
    const mount = wrap.closest('.lia-canvas-mount');
    let host = mount || wrap.parentElement || wrap;

    let w = 0;
    try{ w = host.getBoundingClientRect().width; }catch(_){}

    if ((!w || w < MIN_W) && document.querySelector('main')){
      try{ w = document.querySelector('main').getBoundingClientRect().width; }catch(_){}
    }

    return Math.max(MIN_W, Math.floor(w || MIN_W));
  }

  function bindCorner(handle, side){
    let resizing = false;
    let startX = 0, startY = 0;
    let startW = 0, startH = 0;

    function down(e){
      autoCloseSubmenus();
      e.preventDefault();
      e.stopPropagation();
      resizing = true;

      startW = wrap.getBoundingClientRect().width;
      startH = canvas.clientHeight || 245;
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

      // ResizeObserver feuert resizeToCss() automatisch (Canvas ist 100% Breite)
    }

    function up(e){
      if (!resizing) return;
      resizing = false;
      try{ handle.releasePointerCapture(e.pointerId); }catch(_){}

      // sicherstellen, dass Pixel-Buffer final passt:
      resizeToCss();
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



  document.addEventListener('lia-canvas-theme', () => {
    updateUI();
    rebuildHighlightLayer();
    rebuildStrokeLayer();
    present();
  });

  // ---- Buttons
  if (btnUndo && !btnUndo.__bound){
    btnUndo.__bound = true;
    btnUndo.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); doUndo(); });
  }
  if (btnRedo && !btnRedo.__bound){
    btnRedo.__bound = true;
    btnRedo.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); doRedo(); });
  }

  if (btnRect && !btnRect.__bound){
    btnRect.__bound = true;
    btnRect.addEventListener('click', (e) => {
      e.stopPropagation();
      tool = 'rect';
      menuMode = 'rect';
      setMenuOpen(false);
      updateUI();
    });
  }

  // Menüs: Stift / Radierer / Hintergrund -> wie gehabt, aber Rechteck schließt Menu
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

  document.addEventListener('click', (e) => { if (!wrap.contains(e.target)) setMenuOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenuOpen(false); });

  // ---- Pan/Zoom (wie bei dir)
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

    rebuildHighlightLayer();
    rebuildStrokeLayer();
    present();
    persist();
  }

  canvas.addEventListener('wheel', (e) => {  
    autoCloseSubmenus();         
    e.preventDefault();

    const r = canvas.getBoundingClientRect();
    const sx = e.clientX - r.left;
    const sy = e.clientY - r.top;
    const factor = Math.exp(-e.deltaY * 0.0012);
    zoomAboutScreenPoint(factor, sx, sy);
  }, { passive:false });

  // ---- Pointer Handling
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

  canvas.addEventListener('pointerdown', (e) => {
    autoCloseSubmenus();    
    if (e.target && e.target.classList && e.target.classList.contains('lia-resize-corner')) return;

    const p = getScreenPos(e);
    pointers.set(e.pointerId, p);
    canvas.setPointerCapture(e.pointerId);

    if (pointers.size === 2){
      if (mode === 'draw') endStroke();
      if (mode === 'rect') finishRect(false); // abbrechen, wenn pinch startet

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

    if (tool === 'rect'){
      mode = 'rect';
      canvas.style.cursor = 'crosshair';
      startRectAtScreen(p.sx, p.sy);
      present();
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

      rebuildHighlightLayer();
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

      rebuildHighlightLayer();
      rebuildStrokeLayer();
      present();
      persist();
      return;
    }

    if (mode === 'rect'){
      updateRectToScreen(p.sx, p.sy);
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

    if (mode === 'rect'){
      if (pointers.size === 0){
        finishRect(true);
        mode = 'idle';
      }
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

  // ---- Trash (dein buildEraserMenu nutzt clearAllDrawing)
  // Wichtig: buildEraserMenu() muss weiterhin clearAllDrawing() aufrufen (wie vorher).
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

const pair = btn.closest('.lia-canvas-pair');
if (!pair) return;

const mount = pair.querySelector('.lia-canvas-mount');
if (!mount) return;

// Runtime-UID vergeben (Store-Key)
ensureMountUID(mount);



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
    --lia-tff-side-gap: 25px;
    --lia-tff-maxw: 97.5vw;
    --lia-tff-font: unset;
  }

  /* Presentation: wie bisher */
  html[data-lia-mode="presentation"]{
    --lia-tff-side-gap: 25px;
    --lia-tff-maxw: 97.5vw;
  }

  /* Slides: volle Breite */
  html[data-lia-mode="slides"]{
    --lia-tff-side-gap: 25px;
    --lia-tff-maxw: 97.5vw;
  }

  html[data-lia-mode="presentation"] body,
  html[data-lia-mode="slides"] body{
    margin: 0 !important;
    overflow-x: hidden !important;
  }

  /* NUR main anfassen (keine Slides-Wrapper!) */
  html[data-lia-mode="presentation"] main,
  html[data-lia-mode="slides"] main{
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
  const all = Array.from(ROOT_DOC.querySelectorAll("button,[role='button'],a"));
  return all.find(el=>{
    const t = ((el.getAttribute("aria-label")||el.getAttribute("title")||el.textContent||"")+"").toLowerCase();
    return t.includes("inhaltsverzeichnis") || t.includes("table of contents") || t.includes("contents");
  }) || null;
}


function getToolbarHeader(){
  return ROOT_DOC.querySelector("header#lia-toolbar-nav") ||
         ROOT_DOC.querySelector("#lia-toolbar-nav") ||
         ROOT_DOC.querySelector("header.lia-header");
}

function getToolbarLeftContainer(){
  const header = getToolbarHeader();
  if (!header) return null;
  return header.querySelector(".lia-header__left") || header;
}

// Liefert den echten Anchor-RECT (TOC wenn da, sonst linker Toolbar-Button, sonst null => pad)
function findAnchorRect(){
  const vp = getViewport();

  // 1) TOC (wenn sichtbar)
  const tocR = getVisibleRect(findTOCButton());
  if (tocR) return tocR;

  // 2) Header-left: linkester sichtbarer Button
  const leftC = getToolbarLeftContainer();
  if (leftC){
    const els = Array.from(leftC.querySelectorAll("button,[role='button'],a"));
    let best = null;
    for (const el of els){
      const r = getVisibleRect(el);
      if (!r) continue;
      if (!isToolbarLike(el)) continue;
      if (r.top > 220) continue;
      if (!best || r.left < best.left || (r.left === best.left && r.top < best.top)) best = r;
    }
    // wenn "alles rechts" (Slides ohne linke Controls) -> kein Anchor => pad
    if (best && best.left <= vp.w * 0.60) return best;
  }

  // 3) Global: linkester toolbar-like Button im Top-Band
  const all = Array.from(ROOT_DOC.querySelectorAll("button,[role='button'],a"));
  let best = null;
  for (const el of all){
    const r = getVisibleRect(el);
    if (!r) continue;
    if (!isToolbarLike(el)) continue;
    if (r.top > 220) continue;
    if (!best || r.left < best.left || (r.left === best.left && r.top < best.top)) best = r;
  }
  if (best && best.left <= vp.w * 0.60) return best;

  return null;
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
  const maxTop = 220;
  const pad = 8;

  const a = anchorRect || { left: pad, top: pad, right: pad + 34, bottom: pad + 34, height: 34 };
  const aMidY = a.top + (a.height || 34)/2;
  const yTol  = Math.max(52, (a.height||34) * 1.6);

  // Linkes Cluster: nie über Mitte hinaus + moderate Breite
  const clusterMaxX = Math.min(vp.w * 0.55, a.left + 520);

  const out = [];

  const leftC = getToolbarLeftContainer();
  const primary = leftC ? Array.from(leftC.querySelectorAll("button,[role='button'],a")) : [];
  const secondary = Array.from(ROOT_DOC.querySelectorAll("button,[role='button'],a"));

  function consider(el){
    if (!el || el.id === BTN_ID) return;

    const r = getVisibleRect(el);
    if (!r) return;

    if (r.top > maxTop) return;
    if (r.left > clusterMaxX) return;

    const midY = r.top + r.height/2;
    if (Math.abs(midY - aMidY) > yTol) return;

    if (r.width > 220 || r.height > 100) return;
    if (!isToolbarLike(el)) return;

    out.push({ el, r });
  }

  for (const el of primary) consider(el);
  for (const el of secondary) consider(el);

  const seen = new Set();
  return out.filter(p => (seen.has(p.el) ? false : (seen.add(p.el), true)));
}



function toolbarSignature(){
  try{
    const vp = getViewport();
    const pad = 8;

    const aR = findAnchorRect();
    const anchor = aR || { left: pad, top: pad, right: pad + 34, bottom: pad + 34, height: 34 };

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

  let bw = 34, bh = 34;
  try{
    const r = btn.getBoundingClientRect();
    if (r && r.width > 6 && r.height > 6){
      bw = r.width; bh = r.height;
    }
  }catch(e){}

  const aR = findAnchorRect();
  const anchor = aR || { left: pad, top: pad, right: pad + bw, bottom: pad + bh, height: bh };

  const peers = collectTopLeftRowButtons(anchor);

  let rightEdge = anchor.right;
  for (const p of peers){
    rightEdge = Math.max(rightEdge, p.r.right);
  }

  const targetTop = anchor.top + ((anchor.height || bh) - bh) / 2;

  let left = rightEdge + gap;
  let top  = targetTop;

  left = clamp(left, pad, vp.w - bw - pad);
  top  = clamp(top,  pad, vp.h - bh - pad);

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











































(function () {

  const STYLE_ID = "__LIA_MODE_ONLY_STYLE_V01__";
  const MODE_CSS = `
/* Default: alles sichtbar */
[data-lia-only]{ display: block; }

/* Wenn Mode gesetzt ist: nur passenden Block zeigen */
html[data-lia-mode="slides"] [data-lia-only]:not([data-lia-only="slides"]){
  display: none !important;
}
html[data-lia-mode="presentation"] [data-lia-only]:not([data-lia-only="presentation"]){
  display: none !important;
}
html[data-lia-mode="textbook"] [data-lia-only]:not([data-lia-only="textbook"]){
  display: none !important;
}
`;

  function ensureStyle(doc){
    try{
      const head = doc.head || doc.getElementsByTagName("head")[0] || doc.documentElement;
      if (!head) return;
      if (doc.getElementById(STYLE_ID)) return;

      const style = doc.createElement("style");
      style.id = STYLE_ID;
      style.type = "text/css";
      style.appendChild(doc.createTextNode(MODE_CSS));
      head.appendChild(style);
    }catch(e){}
  }

  // =========================
  // Mode mapping
  // =========================
  function norm(x){ return String(x ?? "").trim().toLowerCase(); }

  function mapModeToken(x){
    const s = norm(x);
    // LiaScript UI tokens
    if (s === "book") return "textbook";
    if (s === "hearing") return "presentation";
    if (s === "visibility") return "slides";
    // already mapped
    if (s === "textbook" || s === "presentation" || s === "slides") return s;
    // fuzzy
    if (s.includes("textbook") || s.includes("lehrbuch")) return "textbook";
    if (s.includes("presentation") || s.includes("präsent")) return "presentation";
    if (s.includes("slides") || s.includes("folien")) return "slides";
    return null;
  }

  // =========================
  // Sources for mode detection
  // =========================
  function modeFromActiveTopbarIcon(doc){
    // expects material-icons text: book/hearing/visibility
    const icons = Array.from(doc.querySelectorAll(".material-icons, i.material-icons, span.material-icons"));

    function isActive(btn){
      if(!btn) return false;
      const ap = norm(btn.getAttribute("aria-pressed"));
      const as = norm(btn.getAttribute("aria-selected"));
      const cls = norm(btn.className);
      return ap === "true" || as === "true" || cls.includes("active") || cls.includes("selected") || cls.includes("mdc-icon-button--on");
    }

    let best = null;
    for (const ic of icons){
      const key = norm(ic.textContent);
      const m = mapModeToken(key);
      if(!m) continue;

      const btn = ic.closest("button,[role='button'],a");
      const r   = (btn || ic).getBoundingClientRect();
      const vw  = doc.defaultView.innerWidth || 1200;

      // score prefers: top-right + active
      let score = 0;
      if (r.top < 140) score += 200;
      if (r.left > vw * 0.55) score += 200;
      if (btn && isActive(btn)) score += 1000;

      if(!best || score > best.score) best = { mode: m, score };
    }
    return best ? best.mode : null;
  }

  function modeFromWrapperAttrs(doc){
    const cand = [
      doc.querySelector("#app"),
      doc.querySelector("main"),
      doc.querySelector(".markdown-body"),
      doc.body,
      doc.documentElement
    ].filter(Boolean);

    for (const el of cand){
      const blob = [
        el.getAttribute && el.getAttribute("data-mode"),
        el.getAttribute && el.getAttribute("data-view"),
        el.getAttribute && el.getAttribute("mode"),
        el.className,
        el.id
      ].map(v => String(v || "")).join(" ");
      const m = mapModeToken(blob);
      if (m) return m;
    }
    return null;
  }

  function modeFromURL(win){
    const q = norm(win.location.search) + "&" + norm(win.location.hash);
    return mapModeToken(q);
  }

  function modeFromStorage(win){
    const stores = [win.sessionStorage, win.localStorage].filter(Boolean);
    for (const stor of stores){
      try{
        for (let i=0;i<stor.length;i++){
          const k = stor.key(i);
          const v = stor.getItem(k);
          const m = mapModeToken((k||"") + " " + (v||""));
          if (m) return m;
        }
      }catch(e){}
    }
    return null;
  }

  function detectModeForDoc(doc){
    const win = doc.defaultView;
    return (
      modeFromActiveTopbarIcon(doc) ||
      modeFromWrapperAttrs(doc) ||
      modeFromURL(win) ||
      modeFromStorage(win)
    );
  }

  // =========================
  // Where to write the output
  // =========================
  function collectDocsSameOrigin(){
    const docs = new Set();
    function add(d){ try{ if(d && d.documentElement) docs.add(d); }catch(e){} }

    // current + parents
    try{
      let w = window;
      for(let i=0;i<12;i++){
        add(w.document);
        if(!w.parent || w.parent === w) break;
        w = w.parent;
      }
    }catch(e){}

    // iframes one pass
    for (const d of Array.from(docs)){
      try{
        d.querySelectorAll("iframe").forEach(fr=>{
          try{ add(fr.contentDocument); }catch(e){}
        });
      }catch(e){}
    }

    return Array.from(docs);
  }

  function apply(){
    const docs = collectDocsSameOrigin();

    // Docs mit Ausgabe
    const outDocs = docs.filter(d => {
      try{ return !!d.querySelector("[data-lia-mode-out]"); }catch(e){ return false; }
    });

    // Docs mit Mode-Sections
    const sectionDocs = docs.filter(d => {
      try{ return !!d.querySelector("[data-lia-only]"); }catch(e){ return false; }
    });

    const targetOutDocs = outDocs.length ? outDocs : [document];
    const targetSectionDocs = sectionDocs.length ? sectionDocs : targetOutDocs;

    // CSS injizieren (import-sicher)
    for (const d of targetSectionDocs){
      ensureStyle(d);
    }

    // detect from the "best" doc (prefer one with topbar icons)
    let mode = null;
    for (const d of docs){
      mode = detectModeForDoc(d);
      if (mode) break;
    }
    if (!mode) mode = "unknown";

    // write readout
    for (const d of targetOutDocs){
      try{
        d.querySelectorAll("[data-lia-mode-out]").forEach(el => { el.textContent = mode; });
      }catch(e){}
    }

    // Mode fürs CSS setzen (if/then/else Anzeige)
    const valid = (mode === "slides" || mode === "presentation" || mode === "textbook");
    for (const d of targetSectionDocs){
      try{
        if (valid) d.documentElement.setAttribute("data-lia-mode", mode);
        else d.documentElement.removeAttribute("data-lia-mode"); // failsafe: alles sichtbar
      }catch(e){}
    }
  }

  // initial + after UI updates + on clicks
  apply();
  setTimeout(apply, 50);
  setTimeout(apply, 250);
  setTimeout(apply, 1000);

  document.addEventListener("click", () => setTimeout(apply, 0), true);
  window.addEventListener("hashchange", apply, true);
  window.addEventListener("popstate", apply, true);

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
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const KEY = "__ORTHOGRAPHY_EXPORT_V8__";
  if (ROOT[KEY]) return;

  const MOD = {
    state: {},
    observer: null,
    started: false,
    styleInstalled: false,
    syncScheduled: false,
    lateSyncTimer: null,

    norm(s){
      return String(s || "").toLocaleLowerCase().replace(/\s+/g, "");
    },

    parseGate(raw){
      const s = String(raw || "").trim().toLowerCase();
      if (s === "false" || s === "0" || s === "off" || s === "no") {
        return { mode: "off", n: 0 };
      }
      const n = parseInt(s, 10);
      if (Number.isFinite(n) && n > 0) {
        return { mode: "attempts", n: n };
      }
      return { mode: "on", n: 0 };
    },

    ensureStyle(){
      if (this.styleInstalled) return;
      this.styleInstalled = true;
    
      const style = document.createElement("style");
      style.id = "orthography-export-style-v8b";
      style.textContent = `
        .orthography-wrap{
          display:grid;
          grid-template-columns:minmax(0, 1fr) auto;
          column-gap:.5rem;
          row-gap:.35rem;
          align-items:center;
        }
    
        .orthography-wrap > p.lia-paragraph{
          grid-column:1 / -1;
          margin-bottom:0 !important;
        }
    
        .orthography-wrap > .lia-quiz__input{
          grid-column:1;
          min-width:0;
          width:100%;
          margin-bottom:0 !important;
        }
    
        .orthography-wrap > .ortho-reset-below{
          grid-column:2;
          margin:0 !important;
          display:inline-flex !important;
          align-items:center;
          justify-content:center;
          white-space:nowrap;
          align-self:stretch;
        }
    
        .orthography-wrap[data-ortho-solved="1"] > .ortho-reset-below{
          display:none !important;
        }
    
        .lia-quiz__resolve.ortho-resolve-faded{
          opacity:.38 !important;
          transition:opacity .18s ease;
        }
      `;
      (document.head || document.documentElement).appendChild(style);
    },

    ensureState(uid){
      if (!this.state[uid]) {
        this.state[uid] = {
          uid: uid,
          cfg: null,
          gate: { mode: "on", n: 0 },
          start: "",
          solution: "",
          liveValue: null,
          solved: false,
          tries: 0,
          checkToken: 0,
          resolvePending: false
        };
      }
      return this.state[uid];
    },

    register(cfg){
      const uid = String(cfg && cfg.uid || "").trim();
      if (!uid) return;

      const S = this.ensureState(uid);
      S.cfg = cfg || null;
      S.gate = this.parseGate(cfg && cfg.gateRaw);

      this.readStaticTexts(uid);
      this.syncUid(uid);
      this.scheduleSync();
    },

    parseUidFromString(v, prefix){
      v = String(v || "");
      if (!v) return "";
      if (prefix && v.indexOf(prefix) === 0) return v.slice(prefix.length);
      return "";
    },

    deriveUidFromWrap(wrap){
      if (!wrap) return "";

      if (wrap.dataset && wrap.dataset.orthoUid) {
        return String(wrap.dataset.orthoUid);
      }

      const byInputId = wrap.querySelector('[id^="orthography-input-"]');
      if (byInputId && byInputId.id) {
        return this.parseUidFromString(byInputId.id, "orthography-input-");
      }

      const byDataId = wrap.querySelector('[data-id^="lia-quiz-"]');
      if (byDataId) {
        const uid = this.parseUidFromString(byDataId.getAttribute("data-id"), "lia-quiz-");
        if (uid) return uid;
      }

      const bySolution = wrap.querySelector('[id^="orthography-solution-"]');
      if (bySolution && bySolution.id) {
        return this.parseUidFromString(bySolution.id, "orthography-solution-");
      }

      const byReset = wrap.querySelector('[id^="orthography-reset-"]');
      if (byReset && byReset.id) {
        return this.parseUidFromString(byReset.id, "orthography-reset-");
      }

      return "";
    },

    getNodes(uid){
      const S = this.ensureState(uid);
      const cfg = S.cfg || {};

      const input =
        document.getElementById(cfg.idInput || ("orthography-input-" + uid)) ||
        document.querySelector('[data-id="lia-quiz-' + uid + '"]');

      const wrap =
        (input ? input.closest(".orthography-wrap") : null) ||
        document.querySelector('.orthography-wrap[data-ortho-uid="' + uid + '"]') ||
        document.getElementById(cfg.idWrap || ("orthography-wrap-" + uid));

      const reset =
        document.getElementById(cfg.idReset || ("orthography-reset-" + uid)) ||
        (wrap ? wrap.querySelector('[id^="orthography-reset-"]') : null);

      const start =
        document.getElementById(cfg.idStart || ("orthography-start-" + uid)) ||
        (wrap ? wrap.querySelector('[id^="orthography-start-"]') : null);

      const solution =
        document.getElementById(cfg.idSolution || ("orthography-solution-" + uid)) ||
        (wrap ? wrap.querySelector('[id^="orthography-solution-"]') : null);

      if (wrap) wrap.dataset.orthoUid = uid;
      if (input) input.dataset.orthoUid = uid;
      if (reset) reset.dataset.orthoUid = uid;
      if (start) start.dataset.orthoUid = uid;
      if (solution) solution.dataset.orthoUid = uid;

      return { wrap, input, reset, start, solution };
    },

    readStaticTexts(uid){
      const S = this.ensureState(uid);
      const N = this.getNodes(uid);

      if (!S.start) {
        if (N.start) {
          S.start = N.start.textContent || "";
        } else if (N.input) {
          S.start = N.input.getAttribute("value") || N.input.defaultValue || "";
        }
      }

      if (N.solution) {
        S.solution = N.solution.textContent || S.solution || "";
      }

      if (S.liveValue === null) {
        if (N.input) S.liveValue = N.input.value;
        else S.liveValue = S.start;
      }
    },

    findQuiz(uid){
      const N = this.getNodes(uid);
      const wrap = N.wrap;
      if (!wrap) return null;

      if (wrap.id) {
        const answers = document.querySelector('.lia-quiz__answers[aria-labelledby="' + wrap.id + '"]');
        if (answers) {
          const quiz = answers.closest(".lia-quiz");
          if (quiz) return quiz;
        }
      }

      let node = wrap.nextElementSibling;
      while (node) {
        if (node.classList && node.classList.contains("orthography-wrap")) break;
        if (node.classList && node.classList.contains("lia-quiz")) return node;
        if (node.querySelector) {
          const quiz = node.querySelector(".lia-quiz");
          if (quiz) return quiz;
        }
        node = node.nextElementSibling;
      }

      const root = document.body || document.documentElement;
      if (!root || !document.createTreeWalker || !root.contains(wrap)) return null;

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
      walker.currentNode = wrap;

      let current;
      while ((current = walker.nextNode())) {
        if (!(current instanceof Element)) continue;
        if (current !== wrap && current.classList && current.classList.contains("orthography-wrap")) break;
        if (current.classList && current.classList.contains("lia-quiz")) return current;
      }

      return null;
    },

    ensureQuizBinding(uid){
      const quiz = this.findQuiz(uid);
      if (!quiz) return null;

      const control = quiz.querySelector(".lia-quiz__control");
      const check = control ? control.querySelector(".lia-quiz__check") : null;
      const resolve = control ? control.querySelector(".lia-quiz__resolve") : null;

      quiz.dataset.orthoUid = uid;
      if (control) control.dataset.orthoUid = uid;
      if (check) check.dataset.orthoUid = uid;
      if (resolve) resolve.dataset.orthoUid = uid;

      return { quiz, control, check, resolve };
    },

    ensureResetPlacement(uid){
      const S = this.ensureState(uid);
      const N = this.getNodes(uid);
      if (!N.wrap || !N.input || !N.reset) return;

      N.wrap.dataset.orthoUid = uid;
      N.wrap.dataset.orthoSolved = S.solved ? "1" : "0";
      N.reset.dataset.orthoUid = uid;
      N.reset.classList.add("ortho-reset-below");

      if (N.reset.parentElement !== N.wrap || N.reset.previousElementSibling !== N.input) {
        N.input.insertAdjacentElement("afterend", N.reset);
      }

      if (S.solved) {
        N.reset.disabled = true;
        N.reset.setAttribute("aria-hidden", "true");
        N.reset.setAttribute("tabindex", "-1");
      } else {
        N.reset.disabled = false;
        N.reset.removeAttribute("aria-hidden");
        N.reset.removeAttribute("tabindex");
      }
    },

    setInputValue(uid, value){
      const N = this.getNodes(uid);
      if (!N.input) return;

      N.input.value = value;
      N.input.defaultValue = value;
      try { N.input.setAttribute("value", value); } catch(e){}
    },

    restoreLiveValue(uid){
      const S = this.ensureState(uid);
      const N = this.getNodes(uid);
      if (!N.input) return;

      const desired = S.solved ? S.solution : (S.liveValue == null ? S.start : S.liveValue);
      const current = N.input.value;

      N.input.readOnly = !!S.solved;

      if (this.norm(current) !== this.norm(desired)) {
        this.setInputValue(uid, desired);
      }
    },

    applyResolveState(uid){
      const S = this.ensureState(uid);
      const B = this.ensureQuizBinding(uid);
      if (!B || !B.resolve) return;

      const resolve = B.resolve;

      if (S.solved) {
        resolve.style.display = "";
        resolve.disabled = true;
        resolve.setAttribute("aria-hidden", "true");
        resolve.setAttribute("tabindex", "-1");
        resolve.classList.add("ortho-resolve-faded");
        return;
      }

      resolve.classList.remove("ortho-resolve-faded");

      if (S.gate.mode === "off") {
        resolve.disabled = true;
        resolve.style.display = "none";
        resolve.setAttribute("aria-hidden", "true");
        resolve.setAttribute("tabindex", "-1");
        return;
      }

      if (S.gate.mode === "attempts") {
        if (S.tries >= S.gate.n) {
          resolve.disabled = false;
          resolve.style.display = "";
          resolve.removeAttribute("aria-hidden");
          resolve.removeAttribute("tabindex");
        } else {
          resolve.disabled = true;
          resolve.style.display = "none";
          resolve.setAttribute("aria-hidden", "true");
          resolve.setAttribute("tabindex", "-1");
        }
        return;
      }

      resolve.disabled = false;
      resolve.style.display = "";
      resolve.removeAttribute("aria-hidden");
      resolve.removeAttribute("tabindex");
    },

    syncUid(uid){
      const S = this.ensureState(uid);
      this.readStaticTexts(uid);
      this.ensureResetPlacement(uid);
      this.ensureQuizBinding(uid);
      this.applyResolveState(uid);
      this.restoreLiveValue(uid);

      const N = this.getNodes(uid);
      if (N.wrap) {
        N.wrap.dataset.orthoTries = String(S.tries);
        N.wrap.dataset.orthoSolved = S.solved ? "1" : "0";
      }
    },

    discoverAll(){
      const wraps = document.querySelectorAll(".orthography-wrap");
      wraps.forEach((wrap) => {
        const uid = this.deriveUidFromWrap(wrap);
        if (!uid) return;
        const S = this.ensureState(uid);
        wrap.dataset.orthoUid = uid;
        if (!S.cfg) S.cfg = {};
        this.readStaticTexts(uid);
      });
    },

    syncAll(){
      this.discoverAll();
      Object.keys(this.state).forEach((uid) => {
        try { this.syncUid(uid); } catch(e){}
      });
    },

    scheduleSync(){
      if (this.syncScheduled) return;
      this.syncScheduled = true;

      const run = () => {
        this.syncScheduled = false;
        this.syncAll();
      };

      try { requestAnimationFrame(run); } catch(e) { setTimeout(run, 16); }

      clearTimeout(this.lateSyncTimer);
      this.lateSyncTimer = setTimeout(() => this.syncAll(), 90);
    },

    getUidFromOrthographyInput(node){
      if (!(node instanceof Element)) return "";

      const direct = node.closest("[data-ortho-uid]");
      if (direct && direct.dataset && direct.dataset.orthoUid) {
        return String(direct.dataset.orthoUid);
      }

      const input = node.closest('[id^="orthography-input-"], [data-id^="lia-quiz-"]');
      if (input) {
        if (input.id) {
          const byId = this.parseUidFromString(input.id, "orthography-input-");
          if (byId) return byId;
        }
        const dataId = input.getAttribute("data-id");
        if (dataId) {
          const byData = this.parseUidFromString(dataId, "lia-quiz-");
          if (byData) return byData;
        }
      }

      return "";
    },

    getUidFromReset(node){
      if (!(node instanceof Element)) return "";

      const direct = node.closest("[data-ortho-uid]");
      if (direct && direct.dataset && direct.dataset.orthoUid) {
        return String(direct.dataset.orthoUid);
      }

      if (node.id) {
        const uid = this.parseUidFromString(node.id, "orthography-reset-");
        if (uid) return uid;
      }

      return "";
    },

    getUidFromOrthographyControl(node){
      if (!(node instanceof Element)) return "";

      const direct = node.closest("[data-ortho-uid]");
      if (direct && direct.dataset && direct.dataset.orthoUid) {
        return String(direct.dataset.orthoUid);
      }

      const control = node.closest(".lia-quiz__control");
      if (control && control.dataset && control.dataset.orthoUid) {
        return String(control.dataset.orthoUid);
      }

      const quiz = node.closest(".lia-quiz");
      if (quiz && quiz.dataset && quiz.dataset.orthoUid) {
        return String(quiz.dataset.orthoUid);
      }

      return "";
    },

    handleInput(uid){
      const S = this.ensureState(uid);
      if (S.solved) return;

      const N = this.getNodes(uid);
      if (!N.input) return;

      S.liveValue = N.input.value;
    },

    handleReset(uid, ev){
      const S = this.ensureState(uid);

      if (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
      }

      if (S.solved) return;

      S.liveValue = S.start;
      this.setInputValue(uid, S.start);
    },

    finishCheck(uid, token, beforeValue, wasCorrect){
      const S = this.ensureState(uid);
      if (token !== S.checkToken) return;

      if (!S.solved && S.gate.mode === "attempts") {
        S.tries += 1;
      }

      if (wasCorrect) {
        S.solved = true;
        S.liveValue = S.solution;
      } else {
        S.liveValue = beforeValue;
      }

      this.syncUid(uid);
      this.scheduleSync();
    },

    handleCheck(uid, ev){
      const S = this.ensureState(uid);
      if (S.solved) {
        if (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
        }
        return;
      }

      const N = this.getNodes(uid);
      if (!N.input) return;

      const beforeValue = N.input.value;
      const wasCorrect = this.norm(beforeValue) === this.norm(S.solution);
      const token = ++S.checkToken;

      setTimeout(() => this.finishCheck(uid, token, beforeValue, wasCorrect), 0);

      try {
        requestAnimationFrame(() => this.finishCheck(uid, token, beforeValue, wasCorrect));
      } catch(e){}
    },

    handleResolve(uid, ev){
      const S = this.ensureState(uid);

      if (S.solved || S.resolvePending) {
        if (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
        }
        return;
      }

      S.resolvePending = true;

      setTimeout(() => {
        S.resolvePending = false;
        S.solved = true;
        S.liveValue = S.solution;
        this.syncUid(uid);
        this.scheduleSync();
      }, 0);

      try {
        requestAnimationFrame(() => this.syncUid(uid));
      } catch(e){}
    },

    startGlobal(){
      if (this.started) return;
      this.started = true;

      this.ensureStyle();

      document.addEventListener("input", (ev) => {
        const target = ev.target;
        if (!(target instanceof Element)) return;

        const uid = this.getUidFromOrthographyInput(target);
        if (!uid) return;
        this.handleInput(uid);
      }, true);

      document.addEventListener("change", (ev) => {
        const target = ev.target;
        if (!(target instanceof Element)) return;

        const uid = this.getUidFromOrthographyInput(target);
        if (!uid) return;
        this.handleInput(uid);
      }, true);

      document.addEventListener("click", (ev) => {
        const target = ev.target;
        if (!(target instanceof Element)) return;

        const reset = target.closest(".ortho-reset-below, [id^='orthography-reset-']");
        if (reset) {
          const uid = this.getUidFromReset(reset);
          if (uid) this.handleReset(uid, ev);
          return;
        }

        const check = target.closest(".lia-quiz__check");
        if (check) {
          const uid = this.getUidFromOrthographyControl(check);
          if (uid) this.handleCheck(uid, ev);
          return;
        }

        const resolve = target.closest(".lia-quiz__resolve");
        if (resolve) {
          const uid = this.getUidFromOrthographyControl(resolve);
          if (uid) this.handleResolve(uid, ev);
        }
      }, true);

      const startObserver = () => {
        if (this.observer) return;

        const target = document.body || document.documentElement;
        if (!target) return;

        this.observer = new MutationObserver(() => {
          this.scheduleSync();
        });

        this.observer.observe(target, {
          childList: true,
          subtree: true
        });
      };

      startObserver();
      setTimeout(startObserver, 0);

      this.syncAll();
      setTimeout(() => this.syncAll(), 0);
      setTimeout(() => this.syncAll(), 120);
      setTimeout(() => this.syncAll(), 260);
    }
  };

  ROOT[KEY] = MOD;
  MOD.startGlobal();
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
  function getRootWindow() {
    let w = window;
    try {
      while (w.parent && w.parent !== w) w = w.parent;
    } catch (e) {}
    return w;
  }

  const ROOT = getRootWindow();
  const STORE_KEY = "__LIA_FRACTION_QUIZ_V3__";
  const STYLE_ID = "__LIA_FRACTION_QUIZ_STYLE_V3__";

  function getDoc() {
    try {
      if (ROOT && ROOT.document) return ROOT.document;
    } catch (e) {}
    return document;
  }

  function clampInt(value, min, max, fallback) {
    let n = parseInt(value, 10);
    if (!Number.isFinite(n)) n = fallback;
    if (!Number.isFinite(n)) n = min;
    if (n < min) n = min;
    if (n > max) n = max;
    return n | 0;
  }

  function gcd(a, b) {
    a = Math.abs(a | 0);
    b = Math.abs(b | 0);
    while (b) {
      const t = a % b;
      a = b;
      b = t;
    }
    return a || 1;
  }

  function fractionFromDecimalString(str) {
    const s = String(str == null ? "" : str).trim().replace(",", ".");
    if (!s) return { num: 0, den: 1 };

    if (/e/i.test(s)) {
      const x = Number(s);
      if (!Number.isFinite(x)) return { num: 0, den: 1 };
      const fixed = x.toFixed(12).replace(/0+$/, "").replace(/\.$/, "");
      return fractionFromDecimalString(fixed);
    }

    if (!/^[-+]?\d*(?:\.\d+)?$/.test(s)) {
      return { num: 0, den: 1 };
    }

    const sign = s.startsWith("-") ? -1 : 1;
    const unsigned = s.replace(/^[-+]/, "");
    const parts = unsigned.split(".");
    const intPart = parts[0] || "0";
    const fracPart = parts[1] || "";

    if (!fracPart) {
      return { num: sign * parseInt(intPart, 10), den: 1 };
    }

    const den = Math.pow(10, fracPart.length);
    const num = sign * (parseInt(intPart, 10) * den + parseInt(fracPart, 10));
    return { num, den };
  }

  function normalizeFractionInfo(raw) {
    let num = 0;
    let den = 1;
    const original = raw;

    if (raw && typeof raw === "object" && Number.isFinite(raw.num) && Number.isFinite(raw.den)) {
      num = raw.num;
      den = raw.den;
    } else if (typeof raw === "number") {
      const f = fractionFromDecimalString(String(raw));
      num = f.num;
      den = f.den;
    } else {
      const s0 = String(raw == null ? "" : raw).trim();
      const s = s0.replace(/^\((.*)\)$/, "$1").trim();

      if (s.includes("/")) {
        const m = s.match(/^\s*([-+]?\d+)\s*\/\s*([-+]?\d+)\s*$/);
        if (m) {
          num = parseInt(m[1], 10);
          den = parseInt(m[2], 10);
        } else {
          const f = fractionFromDecimalString(s);
          num = f.num;
          den = f.den;
        }
      } else {
        const f = fractionFromDecimalString(s);
        num = f.num;
        den = f.den;
      }
    }

    if (!Number.isFinite(num)) num = 0;
    if (!Number.isFinite(den) || den === 0) den = 1;
    if (den < 0) {
      num = -num;
      den = -den;
    }

    const g = gcd(num, den);
    num = num / g;
    den = den / g;

    if (num < 0) num = 0;
    if (num > den) num = den;

    return {
      num,
      den,
      value: den ? num / den : 0,
      raw: original
    };
  }

  function bestFactorPair(n) {
    n = Math.max(1, n | 0);
    let bestA = 1;
    let bestB = n;
    let bestDiff = Math.abs(bestB - bestA);

    for (let a = 1; a * a <= n; a++) {
      if (n % a !== 0) continue;
      const b = n / a;
      const diff = Math.abs(b - a);
      if (diff < bestDiff) {
        bestA = a;
        bestB = b;
        bestDiff = diff;
      }
    }

    return {
      cols: Math.min(bestA, bestB),
      rows: Math.max(bestA, bestB)
    };
  }

  function boolArray(length, source) {
    const n = Math.max(1, length | 0);
    const out = Array(n).fill(false);
    if (Array.isArray(source)) {
      for (let i = 0; i < Math.min(n, source.length); i++) out[i] = !!source[i];
    }
    return out;
  }

  function injectStyleOnce() {
    const DOC = getDoc();
    if (!DOC || !DOC.head) return;
    if (DOC.getElementById(STYLE_ID)) return;

    const css = `
:root{
  --fq-track: rgba(0,0,0,.20);
  --fq-thumb: rgba(0,0,0,.88);
  --fq-ring: rgba(255,255,255,.90);
  --fq-mark: orange;
  --fq-stroke: #000000;
  --fq-fill: #ffffff;
  --fq-disabled: .58;

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
    --fq-ring: rgba(0,0,0,.75);
    --fq-stroke: #000000;
    --fq-fill: #ffffff;
  }
}

.fq-widget{
  display:inline-block;
}

.fq-mount svg{
  display:block;
}

.fq-clickable{
  cursor:pointer;
}

.fq-widget[data-fq-locked="1"] .fq-clickable,
.fq-widget[data-fq-locked="1"] [data-fq-part]{
  cursor:default !important;
}

.fq-widget[data-fq-locked="1"] .fq-range,
.fq-widget[data-fq-locked="1"] .fq-range input[type="range"]{
  pointer-events:none !important;
}

.fq-widget[data-fq-locked="1"] .fq-range{
  opacity:var(--fq-disabled);
}

.fq-range{
  width:var(--fq-w);
  max-width:var(--fq-w);
  height:var(--fq-h);
  position:relative;
  margin:6px 0 12px 0;
  user-select:none;
}

.fq-range::before{
  content:attr(data-label);
  position:absolute;
  left:0;
  right:0;
  top:var(--fq-label-top);
  text-align:center;
  font-size:var(--fq-label-size);
  line-height:1;
  opacity:.85;
  pointer-events:none;
  z-index:2;
}

.fq-range .lia-input{
  width:var(--fq-w) !important;
  max-width:var(--fq-w) !important;
  height:var(--fq-h) !important;
  margin:0 !important;
  padding:0 !important;
  display:flex !important;
  align-items:center !important;
  font-size:0 !important;
  line-height:0 !important;
  min-height:0 !important;
}

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
  display:none !important;
}

.fq-range input[type="range"]{
  width:var(--fq-w) !important;
  max-width:var(--fq-w) !important;
  height:var(--fq-h) !important;
  margin:0 !important;
  padding:0 !important;
  background:transparent;
  -webkit-appearance:none;
  appearance:none;
  -webkit-tap-highlight-color:transparent;
  touch-action:none;
  position:relative;
  z-index:1;
}

.fq-range input[type="range"]::-webkit-slider-runnable-track{
  height:var(--fq-track-h);
  border-radius:999px;
  background:var(--fq-track);
}

.fq-range input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance:none;
  appearance:none;
  width:var(--fq-thumb-sz);
  height:var(--fq-thumb-sz);
  border-radius:50%;
  background:var(--fq-thumb);
  border:2px solid var(--fq-ring);
  margin-top:calc((var(--fq-track-h) - var(--fq-thumb-sz)) / 2);
}

.fq-range input[type="range"]::-moz-range-track{
  height:var(--fq-track-h);
  border-radius:999px;
  background:var(--fq-track);
}

.fq-range input[type="range"]::-moz-range-thumb{
  width:var(--fq-thumb-sz);
  height:var(--fq-thumb-sz);
  border-radius:50%;
  background:var(--fq-thumb);
  border:2px solid var(--fq-ring);
}
    `.trim();

    const style = DOC.createElement("style");
    style.id = STYLE_ID;
    style.textContent = css;
    DOC.head.appendChild(style);
  }

  injectStyleOnce();

  if (!ROOT[STORE_KEY]) {
    ROOT[STORE_KEY] = {
      version: 3,
      circle: Object.create(null),
      rect: Object.create(null),
      rectDims: Object.create(null),
      meta: Object.create(null),
      nodes: Object.create(null),

      getMeta(uid, kind) {
        uid = String(uid == null ? "" : uid);
        if (!this.meta[uid]) {
          this.meta[uid] = {
            uid,
            kind: kind || "",
            target: { num: 0, den: 1, value: 0, raw: "0" },
            locked: false,
            solved: false,
            revealed: false,
            ready: false
          };
        }
        if (kind) this.meta[uid].kind = kind;
        return this.meta[uid];
      },

      getNodes(uid) {
        uid = String(uid == null ? "" : uid);
        if (!this.nodes[uid]) {
          this.nodes[uid] = {
            uid,
            kind: "",
            wrap: null,
            host: null,
            mount: null,
            circleInput: null,
            rowsInput: null,
            colsInput: null,
            observer: null,
            _quizScope: null,
            _quizClickHandler: null,
            _quizBridgeInstalled: false
          };
        }
        return this.nodes[uid];
      },

      parseTarget(raw) {
        return normalizeFractionInfo(raw);
      },

      setTarget(uid, raw, kind) {
        const meta = this.getMeta(uid, kind);
        meta.target = normalizeFractionInfo(raw);
        return meta.target;
      },

      ensureCircle(uid, parts, options) {
        const opts = options || {};
        const meta = this.getMeta(uid, "circle");
        const n = clampInt(parts, 1, 32, 1);
        const prev = Array.isArray(this.circle[uid]) ? this.circle[uid] : [];
        this.circle[uid] = boolArray(n, opts.preserve ? prev : null);
        meta.parts = n;
        meta.kind = "circle";
        return this.circle[uid];
      },

      ensureRect(uid, rows, cols, options) {
        const opts = options || {};
        const meta = this.getMeta(uid, "rect");
        const r = clampInt(rows, 1, 20, 1);
        const c = clampInt(cols, 1, 20, 1);
        const total = r * c;
        const prev = Array.isArray(this.rect[uid]) ? this.rect[uid] : [];
        this.rectDims[uid] = { rows: r, cols: c };
        this.rect[uid] = boolArray(total, opts.preserve ? prev : null);
        meta.rows = r;
        meta.cols = c;
        meta.kind = "rect";
        return this.rect[uid];
      },

      setCircleParts(uid, parts, options) {
        const meta = this.getMeta(uid, "circle");
        if (meta.locked && !(options && options.force)) return this.circle[uid] || this.ensureCircle(uid, 1);
        return this.ensureCircle(uid, parts, options);
      },

      setRectDims(uid, rows, cols, options) {
        const meta = this.getMeta(uid, "rect");
        if (meta.locked && !(options && options.force)) return this.rect[uid] || this.ensureRect(uid, 1, 1);
        return this.ensureRect(uid, rows, cols, options);
      },

      buildCircleSolution(targetRaw) {
        const t = normalizeFractionInfo(targetRaw);
        const parts = Math.max(1, t.den | 0);
        const active = Array(parts).fill(false);
        for (let i = 0; i < Math.min(parts, t.num | 0); i++) active[i] = true;
        return { type: "circle", target: t, parts, active };
      },

      buildRectSolution(targetRaw) {
        const t = normalizeFractionInfo(targetRaw);
        const pair = bestFactorPair(t.den);
        const rows = pair.rows;
        const cols = pair.cols;
        const total = rows * cols;
        const active = Array(total).fill(false);
        for (let i = 0; i < Math.min(total, t.num | 0); i++) active[i] = true;
        return { type: "rect", target: t, rows, cols, active };
      },

      getSolution(uid) {
        const meta = this.getMeta(uid);
        if (meta.kind === "circle") return this.buildCircleSolution(meta.target);
        if (meta.kind === "rect") return this.buildRectSolution(meta.target);
        return null;
      },

      isLocked(uid) {
        return !!this.getMeta(uid).locked;
      },

      toggleCircle(uid, index) {
        const meta = this.getMeta(uid, "circle");
        if (meta.locked || !meta.ready) return false;
        const arr = Array.isArray(this.circle[uid]) ? this.circle[uid] : this.ensureCircle(uid, meta.parts || 1);
        const i = index | 0;
        if (i < 0 || i >= arr.length) return false;
        arr[i] = !arr[i];
        return arr[i];
      },

      toggleRect(uid, index) {
        const meta = this.getMeta(uid, "rect");
        if (meta.locked || !meta.ready) return false;
        const dims = this.rectDims[uid] || { rows: meta.rows || 1, cols: meta.cols || 1 };
        const arr = Array.isArray(this.rect[uid]) ? this.rect[uid] : this.ensureRect(uid, dims.rows, dims.cols);
        const i = index | 0;
        if (i < 0 || i >= arr.length) return false;
        arr[i] = !arr[i];
        return arr[i];
      },

      countSelected(uid) {
        const meta = this.getMeta(uid);
        const arr = meta.kind === "rect" ? this.rect[uid] : this.circle[uid];
        if (!Array.isArray(arr) || !arr.length) return 0;
        let k = 0;
        for (let i = 0; i < arr.length; i++) if (arr[i]) k++;
        return k;
      },

      countTotal(uid) {
        const meta = this.getMeta(uid);
        const arr = meta.kind === "rect" ? this.rect[uid] : this.circle[uid];
        return Array.isArray(arr) && arr.length ? arr.length : 1;
      },

      getRatio(uid) {
        const total = this.countTotal(uid);
        const selected = this.countSelected(uid);
        return total ? selected / total : 0;
      },

      isCorrect(uid) {
        const meta = this.getMeta(uid);
        if (!meta.ready) return false;
        const t = meta.target || { num: 0, den: 1 };
        const total = this.countTotal(uid);
        const selected = this.countSelected(uid);
        return selected * t.den === t.num * total;
      },

      lock(uid) {
        const meta = this.getMeta(uid);
        meta.locked = true;
        this.syncDomState(uid);
        return true;
      },

      markSolved(uid) {
        const meta = this.getMeta(uid);
        if (!meta.ready) return false;
        meta.solved = true;
        meta.revealed = false;
        meta.locked = true;
        this.syncDomState(uid);
        this.render(uid);
        return true;
      },

      applySolution(uid) {
        const meta = this.getMeta(uid);
        const sol = this.getSolution(uid);
        if (!sol) return null;

        if (sol.type === "circle") {
          this.setCircleParts(uid, sol.parts, { force: true, preserve: false });
          this.circle[uid] = boolArray(sol.parts, sol.active);
          meta.parts = sol.parts;
        } else {
          this.setRectDims(uid, sol.rows, sol.cols, { force: true, preserve: false });
          this.rect[uid] = boolArray(sol.rows * sol.cols, sol.active);
          this.rectDims[uid] = { rows: sol.rows, cols: sol.cols };
          meta.rows = sol.rows;
          meta.cols = sol.cols;
        }

        this.syncInputs(uid, true);
        this.render(uid);
        return sol;
      },

      markRevealed(uid) {
        const meta = this.getMeta(uid);
        if (!meta.ready) return false;
        meta.revealed = true;
        meta.solved = false;
        meta.locked = true;
        this.applySolution(uid);
        this.syncDomState(uid);
        return true;
      },

      register(uid, options) {
        const opts = options || {};
        const kind = opts.kind || "";
        const meta = this.getMeta(uid, kind);
        const nodes = this.getNodes(uid);

        if (kind) nodes.kind = kind;
        if (opts.wrap) nodes.wrap = opts.wrap;
        if (opts.host) nodes.host = opts.host;
        if (opts.mount) nodes.mount = opts.mount;
        if (opts.circleInput) nodes.circleInput = opts.circleInput;
        if (opts.rowsInput) nodes.rowsInput = opts.rowsInput;
        if (opts.colsInput) nodes.colsInput = opts.colsInput;

        if (opts.target !== undefined) this.setTarget(uid, opts.target, kind || meta.kind);

        if (kind === "circle") {
          this.ensureCircle(uid, opts.initialParts != null ? opts.initialParts : 1, { preserve: false });
        } else if (kind === "rect") {
          this.ensureRect(
            uid,
            opts.initialRows != null ? opts.initialRows : 1,
            opts.initialCols != null ? opts.initialCols : 1,
            { preserve: false }
          );
        }

        if (nodes.circleInput) this.bindCircleInput(uid, nodes.circleInput);
        if (nodes.rowsInput || nodes.colsInput) this.bindRectInputs(uid, nodes.rowsInput, nodes.colsInput);

        meta.ready = true;
        this.syncInputs(uid, true);
        this.syncDomState(uid);
        this.render(uid);
        return nodes;
      },

      attachCircle(uid, options) {
        const opts = Object.assign({}, options || {}, { kind: "circle" });
        return this.register(uid, opts);
      },

      attachRect(uid, options) {
        const opts = Object.assign({}, options || {}, { kind: "rect" });
        return this.register(uid, opts);
      },

      bindCircleInput(uid, input) {
        if (!input || input.__fqCircleBoundUid === uid) return;
        input.__fqCircleBoundUid = uid;

        const handler = () => {
          if (this.isLocked(uid)) {
            this.syncInputs(uid, true);
            return;
          }
          const value = clampInt(input.value, 1, 32, 1);
          this.setCircleParts(uid, value, { preserve: false });
          this.render(uid);
        };

        input.addEventListener("input", handler, true);
        input.addEventListener("change", handler, true);
      },

      bindRectInputs(uid, rowsInput, colsInput) {
        if (rowsInput && rowsInput.__fqRectRowsBoundUid !== uid) {
          rowsInput.__fqRectRowsBoundUid = uid;

          const handlerRows = () => {
            if (this.isLocked(uid)) {
              this.syncInputs(uid, true);
              return;
            }
            const rows = clampInt(rowsInput.value, 1, 20, 1);
            const cols = colsInput ? clampInt(colsInput.value, 1, 20, 1) : ((this.rectDims[uid] && this.rectDims[uid].cols) || 1);
            this.setRectDims(uid, rows, cols, { preserve: false });
            this.render(uid);
          };

          rowsInput.addEventListener("input", handlerRows, true);
          rowsInput.addEventListener("change", handlerRows, true);
        }

        if (colsInput && colsInput.__fqRectColsBoundUid !== uid) {
          colsInput.__fqRectColsBoundUid = uid;

          const handlerCols = () => {
            if (this.isLocked(uid)) {
              this.syncInputs(uid, true);
              return;
            }
            const cols = clampInt(colsInput.value, 1, 20, 1);
            const rows = rowsInput ? clampInt(rowsInput.value, 1, 20, 1) : ((this.rectDims[uid] && this.rectDims[uid].rows) || 1);
            this.setRectDims(uid, rows, cols, { preserve: false });
            this.render(uid);
          };

          colsInput.addEventListener("input", handlerCols, true);
          colsInput.addEventListener("change", handlerCols, true);
        }
      },

      syncInputs(uid, forceValue) {
        const nodes = this.getNodes(uid);
        const meta = this.getMeta(uid);
        const force = !!forceValue;

        if (meta.kind === "circle" && nodes.circleInput) {
          const parts = (this.circle[uid] && this.circle[uid].length) || meta.parts || 1;
          if (force || String(nodes.circleInput.value) !== String(parts)) nodes.circleInput.value = String(parts);
          nodes.circleInput.disabled = !!meta.locked;
        }

        if (meta.kind === "rect") {
          const dims = this.rectDims[uid] || { rows: meta.rows || 1, cols: meta.cols || 1 };

          if (nodes.rowsInput) {
            if (force || String(nodes.rowsInput.value) !== String(dims.rows)) nodes.rowsInput.value = String(dims.rows);
            nodes.rowsInput.disabled = !!meta.locked;
          }

          if (nodes.colsInput) {
            if (force || String(nodes.colsInput.value) !== String(dims.cols)) nodes.colsInput.value = String(dims.cols);
            nodes.colsInput.disabled = !!meta.locked;
          }
        }
      },

      syncDomState(uid) {
        const nodes = this.getNodes(uid);
        const meta = this.getMeta(uid);
        const targets = [nodes.wrap, nodes.host, nodes.mount];

        for (let i = 0; i < targets.length; i++) {
          const el = targets[i];
          if (!el || !el.setAttribute) continue;
          el.setAttribute("data-fq-locked", meta.locked ? "1" : "0");
          el.setAttribute("data-fq-solved", meta.solved ? "1" : "0");
          el.setAttribute("data-fq-revealed", meta.revealed ? "1" : "0");
        }

        this.syncInputs(uid, false);
      },

      render(uid) {
        const nodes = this.getNodes(uid);
        const meta = this.getMeta(uid);
        if (!nodes.mount) return false;
        if (meta.kind === "circle") return this.renderCircle(uid, nodes.mount);
        if (meta.kind === "rect") return this.renderRect(uid, nodes.mount);
        return false;
      },

      renderCircle(uid, mount) {
        const meta = this.getMeta(uid, "circle");
        const arr = Array.isArray(this.circle[uid]) ? this.circle[uid] : this.ensureCircle(uid, meta.parts || 1);
        const n = Math.max(1, arr.length | 0);
        const locked = !!meta.locked;

        const W = 200;
        const H = 200;
        const padding = 6;
        const cx = W / 2;
        const cy = H / 2;
        const r = Math.min(W, H) / 2 - padding;
        const step = 360 / n;
        const startOffset = -90;

        let slices = "";
        let lines = "";

        if (n === 1) {
          slices = `
            <circle
              data-fq-part="0"
              class="fq-clickable"
              cx="${cx}" cy="${cy}" r="${r}"
              fill="${arr[0] ? "var(--fq-mark)" : "transparent"}"
            ></circle>
          `;
        } else {
          for (let i = 0; i < n; i++) {
            const a0 = (startOffset + step * i) * Math.PI / 180;
            const a1 = (startOffset + step * (i + 1)) * Math.PI / 180;

            const x0 = cx + r * Math.cos(a0);
            const y0 = cy + r * Math.sin(a0);
            const x1 = cx + r * Math.cos(a1);
            const y1 = cy + r * Math.sin(a1);
            const largeArc = step > 180 ? 1 : 0;

            slices += `
              <path
                data-fq-part="${i}"
                class="fq-clickable"
                d="M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 ${largeArc},1 ${x1},${y1} Z"
                fill="${arr[i] ? "var(--fq-mark)" : "transparent"}"
              ></path>
            `;

            lines += `
              <line
                x1="${cx}" y1="${cy}" x2="${x0}" y2="${y0}"
                stroke="#000000" stroke-width="2"
              ></line>
            `;
          }
        }

        mount.innerHTML = `
          <svg class="fq-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" aria-hidden="true">
            <circle cx="${cx}" cy="${cy}" r="${r}" stroke="#000000" stroke-width="2" fill="#ffffff"></circle>
            ${slices}
            ${lines}
            <circle cx="${cx}" cy="${cy}" r="${r}" stroke="#000000" stroke-width="2" fill="none"></circle>
          </svg>
        `;

        mount.onclick = (evt) => {
          const el = evt.target && evt.target.closest ? evt.target.closest("[data-fq-part]") : null;
          if (!el || locked) return;
          const i = parseInt(el.getAttribute("data-fq-part"), 10);
          if (!Number.isFinite(i)) return;
          this.toggleCircle(uid, i);
          this.render(uid);
        };

        this.syncDomState(uid);
        return true;
      },

      renderRect(uid, mount) {
        const meta = this.getMeta(uid, "rect");
        const dims = this.rectDims[uid] || { rows: meta.rows || 1, cols: meta.cols || 1 };
        const arr = Array.isArray(this.rect[uid]) ? this.rect[uid] : this.ensureRect(uid, dims.rows, dims.cols);
        const rows = clampInt(dims.rows, 1, 20, 1);
        const cols = clampInt(dims.cols, 1, 20, 1);
        const locked = !!meta.locked;

        const W = 200;
        const H = 200;
        const padding = 6;
        const usableW = W - 2 * padding;
        const usableH = H - 2 * padding;
        const rw = usableW / cols;
        const rh = usableH / rows;

        let cells = "";
        let lines = "";

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const i = r * cols + c;
            const x = padding + c * rw;
            const y = padding + r * rh;

            cells += `
              <rect
                data-fq-part="${i}"
                class="fq-clickable"
                x="${x}" y="${y}" width="${rw}" height="${rh}"
                fill="${arr[i] ? "var(--fq-mark)" : "transparent"}"
              ></rect>
            `;
          }
        }

        for (let r = 0; r <= rows; r++) {
          const y = padding + r * rh;
          lines += `<line x1="${padding}" y1="${y}" x2="${W - padding}" y2="${y}" stroke="#000000" stroke-width="2"></line>`;
        }
        for (let c = 0; c <= cols; c++) {
          const x = padding + c * rw;
          lines += `<line x1="${x}" y1="${padding}" x2="${x}" y2="${H - padding}" stroke="#000000" stroke-width="2"></line>`;
        }

        mount.innerHTML = `
          <svg class="fq-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" aria-hidden="true">
            <rect x="0" y="0" width="${W}" height="${H}" fill="#ffffff" stroke="#000000" stroke-width="2"></rect>
            ${cells}
            ${lines}
          </svg>
        `;

        mount.onclick = (evt) => {
          const el = evt.target && evt.target.closest ? evt.target.closest("[data-fq-part]") : null;
          if (!el || locked) return;
          const i = parseInt(el.getAttribute("data-fq-part"), 10);
          if (!Number.isFinite(i)) return;
          this.toggleRect(uid, i);
          this.render(uid);
        };

        this.syncDomState(uid);
        return true;
      },

      _fqLabelOf(el) {
        if (!el) return "";
        const parts = [];
        try { parts.push(el.textContent || ""); } catch (e) {}
        try { if (el.className) parts.push(String(el.className)); } catch (e) {}

        const attrs = ["title", "aria-label", "data-action", "data-title", "name", "value"];
        for (let i = 0; i < attrs.length; i++) {
          try {
            const v = el.getAttribute && el.getAttribute(attrs[i]);
            if (v) parts.push(v);
          } catch (e) {}
        }

        return parts.join(" ").replace(/\s+/g, " ").trim().toLowerCase();
      },

      _fqIsRevealButton(el) {
        const s = this._fqLabelOf(el);
        return /(aufl|aufl[oö]sen|l[oö]sung|show solution|solution|resolve)/i.test(s);
      },

      _fqLooksRevealed(scope) {
        if (!scope || !scope.querySelector) return false;

        try {
          if (scope.querySelector('[data-state="resolved"], [data-revealed="true"], [data-state="revealed"]')) return true;
        } catch (e) {}

        const feedback = scope.querySelector(".lia-quiz__feedback, [class*='feedback']");
        const text = ((feedback && feedback.textContent) || "").toLowerCase();

        if (/(aufgel|aufl[oö]s|l[oö]sung|show solution|resolved|solution)/i.test(text)) return true;

        return false;
      },

      ensureQuizBridge(uid, scope) {
        const nodes = this.getNodes(uid);
        const meta = this.getMeta(uid);

        if (!scope) return;
        if (nodes._quizBridgeInstalled && nodes._quizScope === scope && scope.isConnected) return;

        if (nodes.observer) {
          try { nodes.observer.disconnect(); } catch (e) {}
          nodes.observer = null;
        }

        if (nodes._quizScope && nodes._quizClickHandler) {
          try { nodes._quizScope.removeEventListener("click", nodes._quizClickHandler, true); } catch (e) {}
        }

        const clickHandler = (evt) => {
          const btn = evt.target && evt.target.closest
            ? evt.target.closest("button, input[type='button'], input[type='submit']")
            : null;

          if (!btn) return;
          if (!this._fqIsRevealButton(btn)) return;
          if (!meta.ready) return;

          setTimeout(() => {
            this.markRevealed(uid);
          }, 0);
        };

        scope.addEventListener("click", clickHandler, true);

        let obs = null;
        if (typeof MutationObserver !== "undefined") {
          obs = new MutationObserver(() => {
            if (!meta.ready || meta.revealed) return;
            if (this._fqLooksRevealed(scope)) this.markRevealed(uid);
          });

          try {
            obs.observe(scope, {
              subtree: true,
              childList: true,
              attributes: true,
              characterData: true
            });
          } catch (e) {
            obs = null;
          }
        }

        nodes._quizBridgeInstalled = true;
        nodes._quizScope = scope;
        nodes._quizClickHandler = clickHandler;
        nodes.observer = obs;
      },

      onCheck(uid, passed) {
        if (passed) this.markSolved(uid);
        return !!passed;
      },

      onReveal(uid) {
        return this.markRevealed(uid);
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
    padding:.18em .25em .28em .25em; border-radius:.35em;
  line-height:1.25;
}


/* ===== Separator: weiß, 80% Breite, zentriert, zwischen ALLEN sichtbaren Einträgen ===== */
.lia-toc #lia-bm-toc5 .bm-row{
  position:relative; /* Anker für ::after */
  padding-bottom:.28em; /* Platz für Linie */
}
.lia-toc #lia-bm-toc5 .bm-row::after{
  content:"";
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  width:90%;
  height:1px;
  bottom:0; /* Linie IN der Zeile, wird nicht vom children-UL überdeckt */
  background: rgba(255,255,255,0.85);
  pointer-events:none;
}
/* nur beim letzten BLATT (ohne Kinder) ausblenden */
.lia-toc #lia-bm-toc5 li:last-child:not(.bm-has-kids) > .bm-row::after{
  display:none;
}



.lia-toc #lia-bm-toc5 .bm-row:hover{ background: rgba(127,127,127,.12); }

.lia-toc #lia-bm-toc5 .bm-toggle,
.lia-toc #lia-bm-toc5 .bm-spacer{
  width:1.65em; height:1.65em; flex:0 0 1.15em;
  display:inline-flex; align-items:center; justify-content:center;
}

.lia-toc #lia-bm-toc5 .bm-toggle{
  border:0; background:transparent; color:inherit;
  cursor:pointer; padding:0; opacity:.9;
  font-size:.95em; line-height:1;
}

.lia-toc #lia-bm-toc5 .bm-toggle svg{
  width:2.5em;
  height:2.5em;
  display:block;
  pointer-events:none;
  transform-origin:50% 50%;
  transition:transform .12s ease;
}

.lia-toc #lia-bm-toc5 .bm-toggle[data-open="true"] svg{
  transform:rotate(90deg);
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

    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("data-open", open ? "true" : "false");

    if (!btn.querySelector("svg")){
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M8 6 L17 12 L8 18 Z" fill="currentColor"></path>
        </svg>
      `.trim();
    }
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
      if (hasKids) li.classList.add("bm-has-kids");
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





















  // =========================
  // NIGHTLY REDIRECTER
  // NIGHTLY REDIRECTER
  // NIGHTLY REDIRECTER
  // NIGHTLY REDIRECTER
  // NIGHTLY REDIRECTER
  // NIGHTLY REDIRECTER
  // NIGHTLY REDIRECTER
  // NIGHTLY REDIRECTER
  // NIGHTLY REDIRECTER
  // NIGHTLY REDIRECTER
  // =========================









(function () {

    function getRootWindow() {
      let w = window;
      try { while (w.parent && w.parent !== w) w = w.parent; } catch (e) {}
      return w;
    }

    // Root bevorzugen (Course-Shell), sonst Fallback auf Content
    let ROOT = getRootWindow();
    let DOC  = null;

    try {
      DOC = ROOT.document;
      void DOC.body;
    } catch (e) {
      ROOT = window;
      DOC  = document;
    }

    const STORE_KEY = "__LIA_SWITCH_TO_NIGHTLY_V001__";
    ROOT[STORE_KEY] = ROOT[STORE_KEY] || {};
    const STATE = ROOT[STORE_KEY];

    const BTN_ID = "lia-switch-to-nightly";

    function courseToNightly(href) {
      const u = new URL(href);
      if (!/^\/course(\/|$)/.test(u.pathname)) return null;
      u.pathname = u.pathname.replace(/^\/course(\/|$)/, "/nightly$1");
      return u.toString();
    }

    // ---------------------------------------------------------
    // Themefarbe robust aus LiaScript-UI lesen (kein Variablenraten)
    // ---------------------------------------------------------
    function readAccentFromUI(doc) {
      // 1) existierende Lia-Buttons/Toolbar-Elemente
      const candidates = [
        ".lia-toolbar .lia-btn",
        ".lia-btn",
        ".lia-active",
        ".lia-link"
      ];

      for (const sel of candidates) {
        const el = doc.querySelector(sel);
        if (!el) continue;

        const cs = ROOT.getComputedStyle(el);
        // bevorzugt Hintergrund (Buttons), sonst Textfarbe (Links)
        const bg = (cs.backgroundColor || "").trim();
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;

        const col = (cs.color || "").trim();
        if (col) return col;
      }

      // 2) Probe-Element erzeugen (falls UI noch nicht da ist)
      try {
        const probe = doc.createElement("button");
        probe.className = "lia-btn";
        probe.textContent = "x";
        probe.style.position = "absolute";
        probe.style.left = "-9999px";
        probe.style.top  = "-9999px";
        probe.style.opacity = "0";
        doc.body.appendChild(probe);

        const cs = ROOT.getComputedStyle(probe);
        const bg = (cs.backgroundColor || "").trim();
        const col = (cs.color || "").trim();

        probe.remove();

        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;
        if (col) return col;
      } catch (e) {}

      // 3) Fallback
      return "#0b5fff";
    }

    function getAccentColor() {
      // immer aktuell (Theme-Switch)
      return readAccentFromUI(DOC);
    }

    function applyInlineStyle(btn) {
      const accent = getAccentColor();

      // Position: oben mittig, deutlich nach links (dein “passt” Wert)
      btn.style.position = "fixed";
      btn.style.top = "14px";
      btn.style.left = "50%";
      btn.style.right = "";
      btn.style.transform = "translateX(-50%) translateX(-150px)";
      btn.style.zIndex = "2147483647";

      btn.style.display = "inline-flex";
      btn.style.alignItems = "center";
      btn.style.gap = "8px";

      btn.style.padding = "10px 14px";
      btn.style.borderRadius = "999px";

      // transparent + Themefarbe
      btn.style.background = "transparent";
      btn.style.color = accent;
      btn.style.border = "2px solid " + accent;
      btn.style.boxShadow = "none";

      btn.style.cursor = "pointer";
      btn.style.textDecoration = "none";
      btn.style.userSelect = "none";
      btn.style.font = "800 16px/1 system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif";

      // defensiv
      btn.style.opacity = "1";
      btn.style.visibility = "visible";
      btn.style.pointerEvents = "auto";

      // Badge in Themefarbe
      const badge = btn.querySelector(".badge");
      if (badge) {
        badge.style.display = "inline-block";
        badge.style.fontSize = "12px";
        badge.style.fontWeight = "800";
        badge.style.padding = "3px 8px";
        badge.style.borderRadius = "999px";
        badge.style.background = accent;
        badge.style.border = "1px solid " + accent;
        badge.style.color = "#fff";
        badge.style.lineHeight = "1";
      }
    }

    function ensureButton() {
      const href = (ROOT.location && ROOT.location.href) ? ROOT.location.href : window.location.href;
      const target = courseToNightly(href);

      let btn = DOC.getElementById(BTN_ID);

      if (!target) {
        if (btn) btn.remove();
        return;
      }

      if (!btn) {
        btn = DOC.createElement("a");
        btn.id = BTN_ID;
        btn.rel = "noopener";
        btn.innerHTML = 'Wechsel zu Nightly';

        btn.addEventListener("click", (ev) => {
          ev.preventDefault();
          try { ROOT.location.href = btn.href; } catch (e) { window.location.href = btn.href; }
        });

        DOC.body.appendChild(btn);
      }

      btn.href = target;
      applyInlineStyle(btn);
    }

    function boot() {
      if (!DOC.body) {
        ROOT.setTimeout(boot, 0);
        return;
      }

      ensureButton();
      ROOT.setTimeout(ensureButton, 250);

      ROOT.addEventListener("hashchange", ensureButton, true);
      ROOT.addEventListener("popstate",  ensureButton, true);

      try {
        const H = ROOT.history;
        if (H && !H.__liaSwitchPatched001) {
          H.__liaSwitchPatched001 = true;
          const _push = H.pushState;
          const _rep  = H.replaceState;

          H.pushState = function () {
            const r = _push.apply(this, arguments);
            try { ensureButton(); } catch (e) {}
            return r;
          };

          H.replaceState = function () {
            const r = _rep.apply(this, arguments);
            try { ensureButton(); } catch (e) {}
            return r;
          };
        }
      } catch (e) {}

      try {
        const mo = new ROOT.MutationObserver(() => {
          if (!DOC.getElementById(BTN_ID)) ensureButton();
        });
        mo.observe(DOC.documentElement, { childList: true, subtree: true });
      } catch (e) {}

      ROOT.setInterval(ensureButton, 1200);
    }

    if (STATE.started) {
      try { ensureButton(); } catch (e) {}
      return;
    }
    STATE.started = true;

    boot();

  })();





























  // =========================
  // TIMER UNTIL AUTOSOLVEBUTTON
  // TIMER UNTIL AUTOSOLVEBUTTON
  // TIMER UNTIL AUTOSOLVEBUTTON
  // TIMER UNTIL AUTOSOLVEBUTTON
  // TIMER UNTIL AUTOSOLVEBUTTON
  // TIMER UNTIL AUTOSOLVEBUTTON
  // TIMER UNTIL AUTOSOLVEBUTTON
  // TIMER UNTIL AUTOSOLVEBUTTON
  // =========================




(function () {

  const WIN = window;
  const DOC = document;

  // =========================
  // Per-Window/Folie Guard
  // =========================
  const GUARD = "__LIA_SOLUTION_TIMER_V0_0_1__";
  if (WIN[GUARD]) return;
  WIN[GUARD] = true;

  // =========================
  // State (pro Folie)
  // =========================
  const STATE = WIN.__liaSolTimerV001 || (WIN.__liaSolTimerV001 = {
    items: new Map(),   // key -> {btn, badge, endAt}
    ticker: null,
    observedRoots: new WeakSet(),
    observers: [],
  });

  // =========================
  // CSS Injection (Document + ShadowRoots)
  // =========================
  const STYLE_ID = "__lia_solution_timer_css_v0_0_1__";
  const CSS = `
.lia-sol-timer-badge{
  display:inline-block;
  margin-left:.6rem;
  padding:.15rem .45rem;
  border:1px solid currentColor;
  border-radius:.5rem;
  font-size:.85em;
  opacity:.85;
  user-select:none;
}
.lia-sol-timer-startbtn{ margin-right:.6rem; }
`;

  function injectStyleIntoRoot(root){
    try{
      if (!root) return;

      // Document
      if (root.nodeType === 9) {
        const doc = root;
        if (!doc.head) return;
        if (doc.getElementById(STYLE_ID)) return;
        const st = doc.createElement("style");
        st.id = STYLE_ID;
        st.textContent = CSS;
        doc.head.appendChild(st);
        return;
      }

      // ShadowRoot
      if (root.nodeType === 11 && root.host) {
        if (root.querySelector && root.querySelector(`style[data-id="${STYLE_ID}"]`)) return;
        const st = DOC.createElement("style");
        st.setAttribute("data-id", STYLE_ID);
        st.textContent = CSS;
        root.appendChild(st);
      }
    }catch(e){}
  }

  // =========================
  // Utils
  // =========================
  function parseBool(raw, def = true){
    if (raw == null) return def;
    const s = String(raw).trim().toLowerCase();
    if (!s) return def;
    if (["0","false","off","no","n","none"].includes(s)) return false;
    if (["1","true","on","yes","y"].includes(s)) return true;
    return def;
  }

  function parseStartMode(el){
    const v = (el.getAttribute("data-solution-timer-start") || "").trim().toLowerCase();
    if (/^(onclick|click|manual|startbutton|start-button|start_button)$/.test(v)) return "onclick";
    if (/^(oncheck|check|aftercheck|after-check|after_check)$/.test(v)) return "oncheck";
    return "immediate";
  }

  function parseTimeToMs(raw){
    if (raw == null) return 0;
    const s0 = String(raw).trim().toLowerCase();
    if (!s0) return 0;

    if (/^\d+(\.\d+)?$/.test(s0)) return Math.max(0, parseFloat(s0) * 1000); // seconds

    if (/^\d+:\d{1,2}$/.test(s0)) {
      const [m, sec] = s0.split(":").map(Number);
      return Math.max(0, (m * 60 + sec) * 1000);
    }

    let total = 0, found = false;
    const re = /(\d+(?:\.\d+)?)\s*(ms|s|sec|secs|second|seconds|m|min|mins|minute|minutes|h|hr|hrs|hour|hours)\b/g;
    let match;
    while ((match = re.exec(s0))) {
      found = true;
      const n = parseFloat(match[1]);
      const u = match[2];
      if (u === "ms") total += n;
      else if (["s","sec","secs","second","seconds"].includes(u)) total += n * 1000;
      else if (["m","min","mins","minute","minutes"].includes(u)) total += n * 60000;
      else if (["h","hr","hrs","hour","hours"].includes(u)) total += n * 3600000;
    }
    return found ? Math.max(0, total) : 0;
  }

  function formatRemaining(ms){
    ms = Math.max(0, ms);
    const sec = Math.ceil(ms / 1000);
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return (m <= 0) ? `${s}s` : `${m}:${String(s).padStart(2,"0")}`;
  }

  function normText(el){
    return (el.textContent || el.value || el.getAttribute("aria-label") || el.getAttribute("title") || "")
      .trim().toLowerCase();
  }

  function isCheckBtn(b){
    const t = normText(b);
    if (!t) return false;
    if (/(reset|zurück|zurueck|neustart)/.test(t)) return false;
    if (/(auf(lö|lo)sen|l(ö|oe)sung|solution|answer|antwort|reveal)/.test(t)) return false;
    return /(prüfen|pruefen|check)\b/.test(t);
  }

  function isSolutionBtn(b){
    const t = normText(b);
    if (!t) return false;
    if (/(reset|zurück|zurueck|neustart)/.test(t)) return false;
    if (/(prüfen|pruefen|check)/.test(t)) return false;
    return /(auf(lö|lo)sen|l(ö|oe)sung|solution|answer|antwort|reveal)/.test(t);
  }

  // =========================
  // Smart finders (RootNode: Document oder ShadowRoot)
  // =========================
  function findSolutionButtonSmart(el){
    const root = el.getRootNode ? el.getRootNode() : DOC;

    const scopes = [];
    const quizScope =
      (el.matches && (el.matches("lia-quiz, .lia-quiz") ? el : null)) ||
      (el.closest ? el.closest("lia-quiz, .lia-quiz") : null) ||
      null;
    if (quizScope) scopes.push(quizScope);

    let p = el.parentElement, steps = 0;
    while (p && steps++ < 8) { scopes.push(p); p = p.parentElement; }

    for (const s of scopes){
      try{
        const btns = Array.from(s.querySelectorAll("button, input[type='button'], a")).filter(isSolutionBtn);
        if (btns.length) return btns[btns.length - 1];
      }catch(e){}
    }

    try{
      const btns = root.querySelectorAll
        ? Array.from(root.querySelectorAll("button, input[type='button'], a")).filter(isSolutionBtn)
        : [];
      for (let i = btns.length - 1; i >= 0; i--){
        const b = btns[i];
        if (b && b.getClientRects && b.getClientRects().length) return b;
      }
      return btns[btns.length - 1] || null;
    }catch(e){}
    return null;
  }

  function findCheckButtonsSmart(el, solBtn){
    const root = (el.getRootNode ? el.getRootNode() : DOC);
    const scopes = [];
    if (solBtn && solBtn.parentElement) scopes.push(solBtn.parentElement);

    const quizScope =
      (el.matches && (el.matches("lia-quiz, .lia-quiz") ? el : null)) ||
      (el.closest ? el.closest("lia-quiz, .lia-quiz") : null) ||
      null;
    if (quizScope) scopes.push(quizScope);

    let p = solBtn ? solBtn.parentElement : el.parentElement, steps = 0;
    while (p && steps++ < 8) { scopes.push(p); p = p.parentElement; }

    for (const s of scopes){
      try{
        const btns = Array.from(s.querySelectorAll("button, input[type='button'], a")).filter(isCheckBtn);
        if (btns.length) return btns;
      }catch(e){}
    }

    try{
      const all = root.querySelectorAll
        ? Array.from(root.querySelectorAll("button, input[type='button'], a")).filter(isCheckBtn)
        : [];
      return all.slice(0, 8);
    }catch(e){}
    return [];
  }

  // =========================
  // Host + Cleanup (nur im Control-Host)
  // =========================
  function getControlHost(el, solBtn){
    // wichtigste Heuristik: parent des Solution-Buttons ist (fast immer) die Control-Leiste
    if (solBtn && solBtn.parentElement) return solBtn.parentElement;

    const quizScope = (el.closest ? el.closest("lia-quiz, .lia-quiz") : null) || null;
    return quizScope || el.parentElement || DOC.body;
  }

  function cleanupUiInHost(host){
    if (!host || !host.querySelectorAll) return;
    host.querySelectorAll("[data-sol-timer-ui='1']").forEach(n => { try{ n.remove(); }catch(e){} });
  }

  // =========================
  // Hide / FORCE-SHOW Prüfen
  // =========================
  function hideCheckButtons(btns){
    for (const b of btns){
      if (!b || !b.style) continue;
      if (b.dataset.__solTimerChkHidden === "1") continue;
      b.dataset.__solTimerChkHidden = "1";
      b.dataset.__solTimerPrevDisplayChk = b.style.display || "";
      b.style.display = "none";
      b.setAttribute("hidden", "");
    }
  }

  function forceShowCheckButtons(btns){
    for (const b of btns){
      if (!b || !b.style) continue;
      // egal wer hidden gesetzt hat: wir wollen sichtbar
      b.style.display = b.dataset.__solTimerPrevDisplayChk || "";
      b.removeAttribute("hidden");
      b.removeAttribute("aria-hidden");
      b.style.visibility = "";
      b.style.pointerEvents = "";
      b.style.opacity = "";
      delete b.dataset.__solTimerChkHidden;
      delete b.dataset.__solTimerPrevDisplayChk;
    }
  }

  // =========================
  // Reveal ticker
  // =========================
  function ensureTicker(){
    if (STATE.ticker) return;
    STATE.ticker = WIN.setInterval(() => {
      const now = Date.now();
      for (const [key, it] of STATE.items.entries()){
        if (!it.btn || !it.btn.isConnected) { STATE.items.delete(key); continue; }
        const rem = it.endAt - now;
        if (rem <= 0){
          it.btn.style.display = it.btn.dataset.__solTimerPrevDisplay || "";
          delete it.btn.dataset.__solTimerPrevDisplay;
          if (it.badge && it.badge.isConnected) it.badge.remove();
          STATE.items.delete(key);
        } else {
          if (it.badge) it.badge.textContent = `Lösung in ${formatRemaining(rem)}`;
        }
      }
      if (STATE.items.size === 0){
        WIN.clearInterval(STATE.ticker);
        STATE.ticker = null;
      }
    }, 250);
  }

  function scheduleReveal(btn, badge, ms){
    const key = `${Date.now()}_${Math.random().toString(16).slice(2)}`;
    STATE.items.set(key, { btn, badge, endAt: Date.now() + ms });
    ensureTicker();
  }

  // =========================
  // ARM (pending; dedupe über Solution-Button)
  // =========================
  function tryArm(el){
    if (el.dataset.__solTimerArmed === "1") return true;

    const ms = parseTimeToMs(el.getAttribute("data-solution-timer"));
    if (ms <= 0) return false;

    const startMode = parseStartMode(el);
    const showBadge = parseBool(el.getAttribute("data-solution-timer-badge"), true);

    const solBtn = findSolutionButtonSmart(el);
    if (!solBtn) return false; // pending

    // ✅ Dedupe: pro Solution-Button nur einmal UI bauen
    if (solBtn.dataset.__solTimerBound === "1") {
      el.dataset.__solTimerArmed = "1"; // Marker "abgehakt", erzeugt nichts mehr
      return true;
    }
    solBtn.dataset.__solTimerBound = "1";

    const doc = solBtn.ownerDocument || DOC;
    const host = getControlHost(el, solBtn);

    // UI im Host bereinigen (nur unsere)
    cleanupUiInHost(host);

    // Lösung-Button verstecken
    solBtn.dataset.__solTimerPrevDisplay = solBtn.style.display || "";
    solBtn.style.display = "none";

    // Marker als armed markieren
    el.dataset.__solTimerArmed = "1";

    const makeBadge = (text) => {
      const badge = doc.createElement("span");
      badge.className = "lia-sol-timer-badge";
      badge.setAttribute("data-sol-timer-ui", "1");
      badge.textContent = text;
      return badge;
    };

    // immediate
    if (startMode === "immediate") {
      let badge = null;
      if (showBadge) {
        badge = makeBadge(`Lösung in ${formatRemaining(ms)}`);
        host.appendChild(badge);
      }
      scheduleReveal(solBtn, badge, ms);
      return true;
    }

    // oncheck
    if (startMode === "oncheck") {
      let started = false;
      let badge = null;

      if (showBadge) {
        badge = makeBadge(`Timer startet nach Prüfen`);
        host.appendChild(badge);
      }

      const startNow = () => {
        if (started) return;
        started = true;
        if (badge) badge.textContent = `Lösung in ${formatRemaining(ms)}`;
        scheduleReveal(solBtn, badge, ms);
      };

      const checks = findCheckButtonsSmart(el, solBtn);
      if (checks[0] && checks[0].dataset.__solTimerHooked !== "1") {
        checks[0].dataset.__solTimerHooked = "1";
        checks[0].addEventListener("click", startNow, { once: true, passive: true });
      } else {
        // delegated
        host.addEventListener("click", (ev) => {
          const t = ev.target;
          if (!t || !t.closest) return;
          const b = t.closest("button, input[type='button'], a");
          if (b && isCheckBtn(b)) startNow();
        }, { capture: true, passive: true });
      }
      return true;
    }

    // onclick
    if (startMode === "onclick") {
      // Prüfen verstecken (wenn vorhanden)
      hideCheckButtons(findCheckButtonsSmart(el, solBtn));

      // Startbutton
      const startBtn = doc.createElement("button");
      startBtn.type = "button";
      startBtn.textContent = el.getAttribute("data-solution-timer-start-label") || "Timer starten";
      startBtn.className = "lia-btn lia-sol-timer-startbtn";
      startBtn.setAttribute("data-sol-timer-ui", "1");

      // ganz nach vorn in die Control-Leiste
      host.insertBefore(startBtn, host.firstChild);

      let started = false;

      startBtn.addEventListener("click", () => {
        if (started) return;
        started = true;

        // ✅ FORCE-SHOW Prüfen (mehrfach nachziehen)
        const force = () => forceShowCheckButtons(findCheckButtonsSmart(el, solBtn));
        force(); setTimeout(force, 60); setTimeout(force, 250); setTimeout(force, 600);

        // Startbutton weg
        try { startBtn.remove(); } catch(e){ startBtn.disabled = true; }

        // Badge erst nach Start (optional)
        let badge = null;
        if (showBadge) {
          badge = makeBadge(`Lösung in ${formatRemaining(ms)}`);
          host.appendChild(badge);
        }

        scheduleReveal(solBtn, badge, ms);
      }, { passive: true });

      return true;
    }

    return true;
  }

  // =========================
  // Shadow roots scanning
  // =========================
  function getShadowRoots(root){
    const roots = [];
    try{
      const start = (root.nodeType === 9) ? root.documentElement : root;
      if (!start) return roots;
      const walker = DOC.createTreeWalker(start, NodeFilter.SHOW_ELEMENT, null);
      let node = walker.currentNode;
      while (node) {
        if (node.shadowRoot) roots.push(node.shadowRoot);
        node = walker.nextNode();
      }
    }catch(e){}
    return roots;
  }

  function observeRoot(root){
    if (!root || STATE.observedRoots.has(root)) return;
    STATE.observedRoots.add(root);

    injectStyleIntoRoot(root);

    try{
      const mo = new MutationObserver(() => scanAll());
      mo.observe(root, { childList: true, subtree: true });
      STATE.observers.push(mo);
    }catch(e){}
  }

  function scanAll(){
    const roots = [DOC, ...getShadowRoots(DOC)];
    for (const r of roots) {
      observeRoot(r);

      let els = [];
      try{
        els = (r.querySelectorAll ? Array.from(r.querySelectorAll("[data-solution-timer]")) : []);
      }catch(e){}

      for (const el of els){
        // pending + arm
        tryArm(el);
      }
    }
  }

  // init
  injectStyleIntoRoot(DOC);
  scanAll();
  // nachziehen (LiaScript rendert zeitversetzt)
  setTimeout(scanAll, 0);
  setTimeout(scanAll, 120);
  setTimeout(scanAll, 500);

})();

































@end









































@circleQuiz: @circleQuiz_(@uid,@0)

@circleQuiz_
<div id="fq-circle-wrap-@0" class="fq-widget" data-fq-kind="circle" data-fq-uid="@0">
  <div id="fq-circle-host-@0" class="fq-widget" data-fq-kind="circle" data-fq-uid="@0">
    <div id="fq-circle-mount-@0" class="fq-mount"></div>

    <div id="fq-circle-range-@0" class="fq-range" data-label="Unterteilungen">
      <script run-once modify="false" input="range" output="fq-c-n-@0"
              value="1" min="1" max="32" input-always-active>
@input
      </script>
    </div>
  </div>

  [[!]]
  <script>
(() => {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  if (!API) return false;

  const passed = API.isCorrect(uid);
  if (passed && !API.isLocked(uid)) {
    API.onCheck(uid, true);
  }
  return passed;
})()
  </script>
</div>

<script modify="false">
(function () {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  const targetRaw = String.raw`@1`;

  if (!API) return;

  function waitForCircleDom(cb) {
    let tries = 0;

    function tick() {
      const wrap = document.getElementById("fq-circle-wrap-@0");
      const host = document.getElementById("fq-circle-host-@0");
      const mount = document.getElementById("fq-circle-mount-@0");
      const rangeWrap = document.getElementById("fq-circle-range-@0");
      const input = rangeWrap ? rangeWrap.querySelector('input[type="range"]') : null;

      if (wrap && host && mount && rangeWrap && input) {
        cb({ wrap, host, mount, input });
        return;
      }

      tries++;
      if (tries < 240) requestAnimationFrame(tick);
    }

    tick();
  }

  waitForCircleDom(({ wrap, host, mount, input }) => {
    API.attachCircle(uid, {
      wrap: wrap,
      host: host,
      mount: mount,
      circleInput: input,
      target: targetRaw,
      initialParts: input.value || 1
    });

    API.ensureQuizBridge(uid, wrap);
  });
})();
</script>
@end





















@rectQuiz: @rectQuiz_(@uid,@0)

@rectQuiz_
<div id="fq-rect-wrap-@0" class="fq-widget" data-fq-kind="rect" data-fq-uid="@0">
  <div id="fq-rect-host-@0" class="fq-widget" data-fq-kind="rect" data-fq-uid="@0">
    <div id="fq-rect-mount-@0" class="fq-mount"></div>

    <div id="fq-rect-rows-wrap-@0" class="fq-range" data-label="vertikal">
      <script run-once modify="false" input="range" output="fq-r-rows-@0"
              value="1" min="1" max="20" input-always-active>
@input
      </script>
    </div>

    <div id="fq-rect-cols-wrap-@0" class="fq-range" data-label="horizontal">
      <script run-once modify="false" input="range" output="fq-r-cols-@0"
              value="1" min="1" max="20" input-always-active>
@input
      </script>
    </div>
  </div>

  [[!]]
  <script>
(() => {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  if (!API) return false;

  const passed = API.isCorrect(uid);
  if (passed && !API.isLocked(uid)) {
    API.onCheck(uid, true);
  }
  return passed;
})()
  </script>
</div>

<script modify="false">
(function () {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  const targetRaw = String.raw`@1`;

  if (!API) return;

  function waitForRectDom(cb) {
    let tries = 0;

    function tick() {
      const wrap = document.getElementById("fq-rect-wrap-@0");
      const host = document.getElementById("fq-rect-host-@0");
      const mount = document.getElementById("fq-rect-mount-@0");
      const rowsWrap = document.getElementById("fq-rect-rows-wrap-@0");
      const colsWrap = document.getElementById("fq-rect-cols-wrap-@0");
      const rowsInput = rowsWrap ? rowsWrap.querySelector('input[type="range"]') : null;
      const colsInput = colsWrap ? colsWrap.querySelector('input[type="range"]') : null;

      if (wrap && host && mount && rowsWrap && colsWrap && rowsInput && colsInput) {
        cb({ wrap, host, mount, rowsInput, colsInput });
        return;
      }

      tries++;
      if (tries < 240) requestAnimationFrame(tick);
    }

    tick();
  }

  waitForRectDom(({ wrap, host, mount, rowsInput, colsInput }) => {
    API.attachRect(uid, {
      wrap: wrap,
      host: host,
      mount: mount,
      rowsInput: rowsInput,
      colsInput: colsInput,
      target: targetRaw,
      initialRows: rowsInput.value || 1,
      initialCols: colsInput.value || 1
    });

    API.ensureQuizBridge(uid, wrap);
  });
})();
</script>
@end






















@canvas: @canvas_(@uid)

@canvas_
<span class="lia-canvas-pair">
  <span class="lia-canvas-anchor" data-seed="@0">
    <button class="lia-canvas-launch" type="button" aria-label="Zeichenfläche öffnen/schließen">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path class="launch-stroke" d="M3 21l3.2-0.6L19 7.6a2.2 2.2 0 0 0 0-3.1l-0.5-0.5a2.2 2.2 0 0 0-3.1 0L2.6 16.8 3 21z"/>
        <path class="launch-stroke" d="M14.2 5.2l4.6 4.6"/>
      </svg>
    </button>
  </span>
  <span class="lia-canvas-mount" data-open="0" data-uid="@0"></span>
</span>
@end


















@orthography: @orthography_(@uid,`@0`,`@1`,`@2`)

@orthography_
<div class="orthography-wrap" id="orthography-wrap-@0" data-ortho-uid="@0">
  <span id="orthography-start-@0" style="display:none">@2</span>
  <span id="orthography-solution-@0" style="display:none">@3</span>

  <input id="orthography-input-@0" data-ortho-uid="@0" data-id="lia-quiz-@0" class="lia-input lia-quiz__input" style="margin-bottom:.5rem" value="@2">

  <button type="button" class="lia-btn lia-btn--outline ortho-reset-inline" id="orthography-reset-@0" data-ortho-uid="@0">Reset</button>
</div>

[[!]]
<script>
(function(){
  const el  = document.getElementById("orthography-input-@0");
  const sol = document.getElementById("orthography-solution-@0");
  if(!el || !sol) return false;

  const norm = s => String(s || "").toLocaleLowerCase().replace(/\s+/g, "");
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
  const MOD  = ROOT["__ORTHOGRAPHY_EXPORT_V2__"];
  if (!MOD || !MOD.register) return;

  MOD.register({
    uid: "@0",
    gateRaw: "@1",
    idWrap: "orthography-wrap-@0",
    idInput: "orthography-input-@0",
    idReset: "orthography-reset-@0",
    idStart: "orthography-start-@0",
    idSolution: "orthography-solution-@0"
  });
})();
</script>

@end















@diktat: @diktat_(@uid,@0)

@diktat_
<span class="lia-diktat" id="lia-diktat-@0">{|>}{<span class="lia-diktat-measure" style="position:absolute;left:-10000px;top:auto;width:auto;height:auto;overflow:hidden;white-space:pre;">@1</span>}[[ @1 ]]</span>
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

























































# SchulLia-Tests


Auf den folgenden Seiten werden die Features von SchulLia vorgestellt.


> Import

`import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/README.md`



## Tafelmodus

Klicke auf das A im Header und ändere im Präsentationsmodus die Schriftgröße mit dem Slider. Empfehlung: Nightly

`https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/README.md`


Falls du den Kurs nicht auf Nightly geöffnet hast, ist oben ein Button zur direkten Weiterleitung des Kurses. Link zum normalen Kurs:

[https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/README.md](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/README.md)




---

---




Im Präsentations- oder Folienmodus wird nun die maximale Breite des Bildschirms ausgenutzt, was man an der Länge dieser doch sehr langen Textzeile erkennen kann, wenn man die Schrift nicht allzu klein einstellt. Auch die Schriftgröße kann nun dynamisch angepasst werden. 




Mittels div-Bereichen kann man Bereiche nur für einen Modus sichtbar machen: 

```
<div data-lia-only="slides"> 
Das sehe ich nur bei Folien 
</div>
```

---

```
<div data-lia-only="presentation"> 
Das sehe ich nur bei Präsentation 
</div>
```

---

```
<div data-lia-only="textbook"> 
Das sehe ich nur bei Lehrbuch 
</div>
```

---

---

<h2>Beispiel im Text</h2>



Das hier ist ein Beispiel bei dem man bei den verschiedenen Modi unterschiedliche Inhalte angezeigt bekommt. Hier muss dann eine Leerzeile sein.


<div data-lia-only="textbook">

<!-- data-solution-button="5"-->
> $4+5=$ [[ 9 ]] Diese Aufgabe ist nur im **Textbookmodus** zu sehen.

</div>
<div data-lia-only="presentation">  

<!-- style="width:400px" -->
> ![Presentationmode](https://liascript.github.io/nightly/icon.ico)  Dieses Bild ist nur im **Presentationmodus** zu sehen.


</div>
<div data-lia-only="slides">

> - Das ist eine Liste,
> - die man nur im **Folienmodus**
> - sehen kann.

</div>

 Hier muss dann auch eine Leerzeile sein, aber dann geht eigentlich alles.





---

---


> Einzeltemplate - Nightlychecker: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md`

> Einzeltemplate - Tafelmodus: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/TafelREADME.md`








## Besser Navigation

Öffne die Navigation und beachte die (▶/▼)-Symbole. Klicke darauf, um die weiteren Überschriften auf- oder einzuklappen



<center>

<!-- style="width:300px" -->
![Navigation](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/Readme/navigation.png)

</center>


> Einzeltemplate - einklappbare Navigation: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/NavigationREADME.md`


### Canvas



<center>

<!-- style="width:200px" -->
![Canvas](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/Readme/canvas.png)

</center>

1. Öffnet oder schließt die Schreibfläche.

2. Macht die letzte Änderung auf der Schreibfläche rückgängig.

3. Stellt das letzte "Rückgängig machen" wieder her.

4. Radierer mit Submenü für Radierergröße oder komplettes löschen.

5. Stift mit Submenü für Farbauswahl, Stiftdicke und Transparenz.

6. Legt ein Grid oder Linien in den Hintergrund.

7. Lässt ein Feld ziehen, welches mittels Schrifterkennung an das Eingabefeld als Lösung übergibt.

Die Schreibfläche kann unten links oder rechts an den Ecke in der Größe beliebig verändert werden.


> **Steuerung mit Maus**

- Linke Maustaste: Zeichnen, Radieren, Ziehen

- Rechte Maustaste: Schreibfläche hin- und herziehen

- Mausrad: Zoom


> **Steuerung mit Touchscreen**

- Ein Finger:  Zeichnen, Radieren, Ziehen

- Zwei Finger (Abstand zwischen den Fingern gleichbleibend): Schreibfläche hin- und herziehen

- Zwei Finger (Abstand zwischen den Fingern verändern): Zoom



`Codebefehl: @canvas`


Testzwecke (1479 ist Lösung):

<!--   data-solution-button="2" -->
[[ 1479 ]] 
@canvas


> Einzeltemplate - Canvas: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/CanvasREADME.md`

> Einzeltemplate - Canvas (mit Schrifterkennung): `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/OCRREADME.md`








### Textmarker

Klicke auf den Stift im Header und markiere im Text wie es dir beliebt. Wechsel Lehrbuch ↔ Präsentation ↔ Slides und ändere die Schriftgröße.



> Einzeltemplate - Textmarker: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/MarkerREADME.md`

---

---


> Textmarkerquiz

**Markiere** mit der Textmarkerfunktion die Nomen in Rot und die Verben in blau.

<div class="markerquiz">
@markred(Haus) und @markblue(rennen laufen gehen)
@TextmarkerQuiz
</div>

---

---


```
<div class="markerquiz">
@markred(Haus) und @markblue(rennen laufen gehen)
@TextmarkerQuiz
</div>
```

Weitere Beispiele:

- `@markblue(words)`

- `@markred(words)`

- `@markgreen(words)`

- `@markyellow(words)`

- `@markpink(words)`

- `@markorange(words)`

Bei `@mark(Test zum Markieren)` ist die gewählte Farbe egal.

<div class="markerquiz">
@mark(Test zum Markieren)
@TextmarkerQuiz
</div>

---

---

> Schon markierte Bereiche




- `@markedred(red)`  @markedred(red)

- `@markedblue(blue)`  @markedblue(blue)

- `@markedyellow(yellow)`  @markedyellow(yellow)

- `@markedpink(pink)`  @markedpink(pink)

- `@markedgreen(green)`  @markedgreen(green)

- `@markedorange(orange)`  @markedorange(orange)






### Dynamsische Flex-Childs

Geh an den rechten vertikalen Trennstrich zwischen den Blöcken und schiebe diesen nach belieben hin und her. Funktioniert auch mit Textmarkern.

<section class="dynFlex">


<div class="flex-child">

<!--   data-solution-button="2" -->
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

---

---


```
<section class="dynFlex">
<div class="flex-child">

__$i)\;\;$__ Lösung ist 6: [[ 6 ]]

</div>
</section>
```


mit `<section class="dynFlex" data-start="30">` wird die Startbreite auf 30% gesetzt.



> Einzeltemplate - Dynamsische Flex-Childs: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FlexChildREADME.md`



### Deutschaufgabenmakros




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


> Einzeltemplate - Deutschmakros: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/DeutschREADME.md`



### Mathematikaufgabenmakros



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



> Einzeltemplate - Mathematikmakros: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/MatheREADME.md`



### Timer bis Lösungzeigen

> Beispiele:
> - Sofortiger Start: `data-solution-timer="10s"`
> - Start erst nach erstem Prüfen: `data-solution-timer="2min" data-solution-timer-start="oncheck"`
> - ohne Badge: zusätzlich `data-solution-timer-badge="off"`
> - Manueller Start: `data-solution-timer-start="onclick"`

<!-- data-solution-timer="10s" -->
2+3 = [[ 5 ]]


Manueller Start nach erstem Prüfen

<!-- data-solution-timer="15s" data-solution-timer-start="oncheck" -->
7+8 = [[ 15 ]]


Manueller Start nach erstem Prüfen (Timer nicht sichtbar)

<!-- data-solution-timer="10s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" -->
9+6 = [[ 15 ]]


Manueller Startbutton (Prüfen erscheint erst nach Klick)

<!-- data-solution-timer="10s" data-solution-timer-start="onclick" -->
9+6 = [[ 15 ]]

Manueller Startbutton ohne Badge

<!-- data-solution-timer="10s" data-solution-timer-start="onclick" data-solution-timer-badge="off" -->
5+5 = [[ 10 ]]




> Einzeltemplate - Aufgabentimer: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/TimerREADME.md`










