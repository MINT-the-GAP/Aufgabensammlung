<!--
version:  0.0.1
language: de
narrator: Deutsch Female
author: Martin Lommatzsch
comment: Canvas (import-sicher) — Original-Design (SVG) + inline-stabil + no-regex-parsercrash

@style
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

-->











# Canvas Trys - Road to OCR


Canvas mit Farbauswahl und Radierer. Zoom ist auch dabei und mit den anderen Maustasten kann man auch die Canvas schieben. Touchsteuerung: 2-Finger Pinch/Pan.

**Neu:** Unten links und unten rechts sind unsichtbare Ziehflächen (nur „die Ecke“). Dort kannst du die Zeichenfläche stufenlos **höher/niedriger** und auch **breiter/schmaler** ziehen.


```
Codebefehl: @canvas
```


Testzwecke (2 ist Lösung):

<!--   data-solution-button="2" -->
[[ 2 ]] 
@canvas
