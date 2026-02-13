<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: LaTeX-OCR (Browser/LiaScript) v0.0.1 — robust: Canvas->RawImage, Output-Key-Fallback, Preview der Preprocess-Grafik, JSON-Debug wenn leer.

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






@end



































@onload


(function(){


// ---------------------------------------------------------
// OCR-Bar + Engine: eigener Guard (läuft unabhängig vom Canvas-Guard)
// - Precision Dropdown (fp32/fp16/int8)
// - Load/Reload Button
// - Auto-Load beim Kursstart (warmup)
// ---------------------------------------------------------
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
    `;
    (document.head || document.documentElement).appendChild(st);
  }

  // ---------------- OCR-Bar ----------------
  function ensureOcrBar(){
    ensureOcrCss();

    if (window.__LIA_OCR_BAR__ && window.__LIA_OCR_BAR__.el && window.__LIA_OCR_BAR__.el.isConnected){
      try{
        const el = window.__LIA_OCR_BAR__.el;
        const DOC = document;
        const main = DOC.querySelector('main');
        if (main && el.parentNode !== main){
          if (main.firstChild) main.insertBefore(el, main.firstChild);
          else main.appendChild(el);
        }
      }catch(_){}
      return window.__LIA_OCR_BAR__;
    }


    const DOC = document;

    // -------- BAR ERZEUGEN (das fehlte bei dir!) --------
    const bar = DOC.createElement('div');
    bar.className = 'lia-ocrbar';
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

    if (main){
      // Bar muss innerhalb von main liegen (nicht als Flex-Item daneben)
      if (main.firstChild) main.insertBefore(bar, main.firstChild);
      else main.appendChild(bar);
    }else if (host.firstChild){
      host.insertBefore(bar, host.firstChild);
    }else{
      host.appendChild(bar);
    }


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

      if (state.progress === null || state.progress === undefined || !isFinite(state.progress)){
        prog.dataset.on = '0';
      }else{
        const v = Math.max(0, Math.min(1, Number(state.progress)));
        prog.dataset.on = '1';
        fill.style.width = Math.round(v * 100) + '%';
        ptxt.textContent = Math.round(v * 100) + '%';
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

    window.__LIA_OCR_BAR__ = { el: bar, set, log, get: () => ({ ...state }) };
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
    <svg viewBox="-1 0 24 24" aria-hidden="true">
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
  rectActionBtn.textContent = auto ? 'OCR läuft …' : 'Als Lösung übergeben';

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
    rectActionBtn.disabled = false;
  }
}











    // --- Button: manuell auslösen ---
    rectActionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      __ocrFromMarkedRect({ auto:false });
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




-->

# Road to OCR from Canvas





<center>

<!-- style="width:200px" -->
![Navigation](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/Readme/canvas.png)

</center>

1. Öffnet oder schließt die Schreibfläche.

2. Macht die letzte Änderung auf der Schreibfläche rückgängig.

3. Stellt das letzte "Rückgängig machen" wieder her.

4. Radierer mit Submenü für Radierergröße oder komplettes löschen.

5. Stift mit Submenü für Farbauswahl, Stiftdicke und Transparenz.

6. Legt ein Grid oder Linien in den Hintergrund.

7. Lässt ein Feld ziehen, welches mittels Schrifterkennung an das Eingabefeld die Lösung übergibt.

Die Schreibfläche kann unten links oder rechts an den Ecke in der Größe beliebig verändert werden.


> **Steuerung mit Maus**

- Linke Maustaste: Zeichnen, Radieren, Ziehen

- Rechte Maustaste: Schreibfläche hin- und herziehen

- Mausrad: Zoom


> **Steuerung mit Maus**

- Ein Finger:  Zeichnen, Radieren, Ziehen

- Zwei Finger (Abstand zwischen den Fingern gleichbleibend): Schreibfläche hin- und herziehen

- Zwei Finger (Abstand zwischen den Fingern verändern): Zoom


---

---


> **Beispielaufgaben**

**Aufgabe 1:** Berechne den Wert des Terms


__$a)\;\;$__
$1470+8 =$ [[     1478    ]] 

@canvas




__$b)\;\;$__
$5010+300 =$ [[     5310    ]] 

@canvas





__$c)\;\;$__
$4200+89 =$ [[     4289    ]] 

@canvas


