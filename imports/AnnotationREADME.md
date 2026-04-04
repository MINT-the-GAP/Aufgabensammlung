<!--
version:  0.0.1
language: de
narrator: Deutsch Female

author: Martin Lommatzsch


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/TafelREADME.md










@onload
(function(){

  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const DOC_ID = document.baseURI || location.href || 'doc';
  const REGKEY = '__LIA_ANNOTATION_REG_V8__';

  ROOT[REGKEY] = ROOT[REGKEY] || { docs:{} };
  if (ROOT[REGKEY].docs[DOC_ID]) return;
  ROOT[REGKEY].docs[DOC_ID] = true;

  const STOREKEY = '__LIA_ANNOTATION_STORE_V8__';
  ROOT[STOREKEY] = ROOT[STOREKEY] || {
    slides: {},
    ui: {
      mode: 'cursor',          // cursor | pen | eraser
      visible: true,
      panelOpen: false,
      panelMode: 'pen',        // pen | eraser
      color: '#ff0000',
      width: 3,
      alpha: 1,
      eraserWidth: 18,
      forcedReadOnly: null
    }
  };

  const STORE = ROOT[STOREKEY];

  const STATE = {
    host: null,
    shell: null,
    canvas: null,
    ctx: null,
    slideKey: null,
    cssW: 0,
    cssH: 0,
    dpr: window.devicePixelRatio || 1,
    drawing: false,
    activePath: null,
    syncRAF: 0,
    redrawRAF: 0,
    resizeObserver: null,
    toolbar: null
  };

  // ---------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------
  function clamp(v,a,b){
    return Math.max(a, Math.min(b, v));
  }

  function copyJson(x){
    try { return JSON.parse(JSON.stringify(x)); }
    catch(_){ return null; }
  }

  function parseRgbNoRegex(s){
    const str = String(s || '');
    const i0 = str.indexOf('(');
    const i1 = str.indexOf(')');
    if (i0 < 0 || i1 < 0) return null;
    const parts = str.slice(i0 + 1, i1).split(',').map(v => Number(String(v).trim()));
    if (parts.length < 3) return null;
    if (!isFinite(parts[0]) || !isFinite(parts[1]) || !isFinite(parts[2])) return null;
    return [parts[0], parts[1], parts[2]];
  }

  function luminance(rgb){
    const arr = rgb.map(v => v / 255).map(c => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
    return 0.2126 * arr[0] + 0.7152 * arr[1] + 0.0722 * arr[2];
  }

  function getViewportWidth(){
    return Math.max(
      1,
      window.innerWidth || 0,
      document.documentElement ? document.documentElement.clientWidth || 0 : 0
    );
  }

  function getCurrentHash(){
    const h = String(location.hash || '').trim();
    return h || '#1';
  }

  function getSlideKey(){
    return getCurrentHash();
  }

  function ensureSlide(key){
    STORE.slides[key] = STORE.slides[key] || { items:[], redo:[] };
    return STORE.slides[key];
  }

  function currentSlide(){
    return ensureSlide(getSlideKey());
  }

  function toRel(x, y){
    return {
      x: STATE.cssW > 0 ? x / STATE.cssW : 0,
      y: STATE.cssH > 0 ? y / STATE.cssH : 0
    };
  }

  function fromRel(pt){
    return {
      x: (pt && isFinite(pt.x)) ? pt.x * STATE.cssW : 0,
      y: (pt && isFinite(pt.y)) ? pt.y * STATE.cssH : 0
    };
  }

  function getDirectHeader(host){
    if (!host) return null;
    const kids = host.children || [];
    for (let i = 0; i < kids.length; i++){
      const el = kids[i];
      if (el && el.tagName && el.tagName.toLowerCase() === 'header') return el;
    }
    return null;
  }

  function findDirectChildByClass(parent, cls){
    if (!parent) return null;
    const kids = parent.children || [];
    for (let i = 0; i < kids.length; i++){
      const el = kids[i];
      if (el.classList && el.classList.contains(cls)) return el;
    }
    return null;
  }

  function isMainVisible(main){
    if (!main) return false;
    if (main.hasAttribute('hidden')) return false;
    const cs = getComputedStyle(main);
    if (cs.display === 'none' || cs.visibility === 'hidden') return false;
    const r = main.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  }

  function getVisibleMainHost(){
    const mains = Array.from(document.querySelectorAll('main'));
    for (let i = 0; i < mains.length; i++){
      if (isMainVisible(mains[i])) return mains[i];
    }
    return mains[0] || document.querySelector('main') || document.body || document.documentElement;
  }

  function isReadOnly(){
    if (STORE.ui.forcedReadOnly === true) return true;
    if (STORE.ui.forcedReadOnly === false) return false;

    const body = document.body;
    if (!body) return false;

    return (
      body.classList.contains('lia-snapshot-mode') ||
      body.classList.contains('lia-shared-freeze-link') ||
      body.classList.contains('lia-freeze-mode')
    );
  }

  function effectiveMode(){
    if (!STORE.ui.visible) return 'cursor';
    if (isReadOnly()) return 'cursor';
    return STORE.ui.mode || 'cursor';
  }

  function getThemeAccent(){
    try{
      const existing = document.querySelector('.lia-btn');
      if (existing){
        const bg = getComputedStyle(existing).backgroundColor;
        if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') return bg;
      }

      const probe = document.createElement('button');
      probe.className = 'lia-btn';
      probe.type = 'button';
      probe.textContent = 'x';
      probe.style.position = 'absolute';
      probe.style.left = '-9999px';
      probe.style.top = '-9999px';
      probe.style.visibility = 'hidden';

      (document.body || document.documentElement).appendChild(probe);
      const bg = getComputedStyle(probe).backgroundColor;
      probe.remove();

      if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') return bg;
    }catch(_){}
    return null;
  }

  function applyThemeVars(){
    try{
      const root = document.documentElement;
      const bg = getComputedStyle(document.body || document.documentElement).backgroundColor
              || getComputedStyle(document.documentElement).backgroundColor;
      const rgb = parseRgbNoRegex(bg);
      const dark = rgb ? (luminance(rgb) < 0.5) : false;

      root.style.setProperty('--lia-annot-border', dark ? '#fff' : '#000');
      root.style.setProperty('--lia-annot-fg', dark ? '#fff' : '#000');

      const accent = getThemeAccent();
      if (accent) root.style.setProperty('--lia-annot-accent', accent);
    }catch(_){}
  }

  function getLineWidthPx(item){
    const baseW = Math.max(1, Number(item && item.baseW) || STATE.cssW || 1);
    const curW  = Math.max(1, STATE.cssW || 1);
    const w     = Math.max(0.75, Number(item && item.width) || 1);
    return Math.max(0.75, w * (curW / baseW));
  }

  // ---------------------------------------------------------
  // CSS
  // ---------------------------------------------------------

function ensureCss(){
  if (document.getElementById('__lia_annotation_css_v8')) return;

  const st = document.createElement('style');
  st.id = '__lia_annotation_css_v8';
  st.textContent = `
    :root{
      --lia-annot-border:#000;
      --lia-annot-fg:#000;
      --lia-annot-accent:#0b5fff;
      --lia-annot-bg: rgba(255,255,255,0.96);
      --lia-annot-panel-bg: rgba(255,255,255,0.97);
    }

    @media (prefers-color-scheme: dark){
      :root{
        --lia-annot-bg: rgba(28,28,28,0.96);
        --lia-annot-panel-bg: rgba(34,34,34,0.97);
      }
    }

    .lia-annot-toolbar{
      position: fixed;
      left: 8px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10030;

      display: inline-flex;
      flex-direction: column;
      gap: 6px;

      padding: 5px;
      margin: 0;
      box-sizing: border-box;

      border: 2px solid var(--lia-annot-border);
      border-radius: 10px;

      background: var(--lia-annot-bg);
      backdrop-filter: blur(6px);
    }

    .lia-annot-actions{
      display: inline-flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;
    }

    .lia-annot-btn{
      width: 28px;
      height: 28px;
      padding: 0;

      border: 2px solid var(--lia-annot-border);
      border-radius: 999px;
      background: transparent;
      color: var(--lia-annot-fg);

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      user-select: none;
      line-height: 0;
    }

    .lia-annot-btn[data-active="1"]{
      border-color: var(--lia-annot-accent);
      outline: 2px solid var(--lia-annot-accent);
      outline-offset: 2px;
    }

    .lia-annot-btn[disabled]{
      opacity: .35;
      cursor: not-allowed;
    }

    .lia-annot-btn svg{
      width: 19px;
      height: 19px;
      display: block;
      margin: 0;
      overflow: visible;
    }

    .lia-annot-btn[data-act="cursor"] svg{ transform: translateX(4.5px); }
    .lia-annot-btn[data-act="pen"] svg{ transform: translateX(1px); }
    .lia-annot-btn[data-act="eraser"] svg{ transform: translateX(-4px); }
    .lia-annot-btn[data-act="undo"] svg{ transform: translateX(-4px); }
    .lia-annot-btn[data-act="redo"] svg{ transform: translateX(-3px); }
    .lia-annot-btn[data-act="toggle"] svg{ transform: translateX(1px); }

    .lia-annot-btn .ico-stroke{
      stroke: var(--lia-annot-fg);
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .lia-annot-btn .ico-fill{
      fill: var(--lia-annot-fg);
    }

    .lia-annot-panel{
      position: absolute;
      left: 44px;
      top: 0;
      z-index: 10031;

      display: none;
      grid-template-columns: 1fr;
      gap: 10px;

      width: min(300px, calc(100vw - 70px));
      padding: 9px 10px;
      box-sizing: border-box;

      border: 2px solid var(--lia-annot-border);
      border-radius: 10px;

      background: var(--lia-annot-panel-bg);
      backdrop-filter: blur(6px);
    }

    .lia-annot-panel[data-open="1"]{
      display: grid;
    }

    .lia-annot-row{
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .lia-annot-row .k{
      min-width: 6.8em;
      font-weight: 800;
      opacity: .85;
    }

    .lia-annot-row .v{
      min-width: 3.2em;
      text-align: right;
      font-weight: 850;
    }

    .lia-annot-slider{
      width: min(180px, 45vw);
    }

    .lia-annot-color-grid{
      display: grid;
      grid-template-columns: repeat(5, 22px);
      gap: 10px;
      align-items: center;
    }

    .lia-annot-color-item{
      width: 22px;
      height: 22px;
      border-radius: 999px;
      border: 2px solid var(--lia-annot-border);
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
      background: transparent;
    }

    .lia-annot-color-item[data-active="1"]{
      outline: 2px solid var(--lia-annot-border);
      outline-offset: 2px;
    }

    .lia-annot-note{
      font-weight: 750;
      opacity: .8;
      font-size: .95em;
    }

    .lia-annot-danger{
      width: auto;
      min-height: 30px;
      padding: 6px 10px;
      border-radius: 999px;
      border: 2px solid var(--lia-annot-border);
      background: transparent;
      color: var(--lia-annot-fg);
      font-weight: 850;
      cursor: pointer;
    }

    html, body{
      overflow-x: hidden !important;
    }
    
    .lia-slide__container{
      overflow-x: hidden !important;
    }

    .lia-annot-host{
      position: relative !important;
      overflow-x: clip !important;
      overflow-y: visible !important;
    }

    .lia-annot-shell{
      position: absolute;
      top: 0;
      z-index: 500;
      background: transparent;
      pointer-events: none;
    }

    .lia-annot-shell[data-hidden="1"]{
      display: none;
    }

    .lia-annot-canvas{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: block;
      background: transparent;
      pointer-events: none;
    }

    .lia-annot-shell[data-mode="pen"] .lia-annot-canvas,
    .lia-annot-shell[data-mode="eraser"] .lia-annot-canvas{
      pointer-events: auto;
    }
  `;
  (document.head || document.documentElement).appendChild(st);
}

  // ---------------------------------------------------------
  // Icons
  // ---------------------------------------------------------
  function iconCursor(){
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path class="ico-stroke"
              d="M5 3.5l8.8 10.8-4.1 1 1.9 5.4-2.6 1-1.9-5.4-3.9 2.2L5 3.5z"
              fill="none" stroke-width="1.9" stroke-linejoin="round" stroke-linecap="round"/>
      </svg>
    `;
  }

  function iconPen(){
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path class="ico-stroke"
              d="M4 20h4l10.2-10.2a2.2 2.2 0 0 0 0-3.1l-1.1-1.1a2.2 2.2 0 0 0-3.1 0L3.8 15.8 3 21z"
              fill="none" stroke-width="1.8" stroke-linejoin="round"/>
        <path class="ico-stroke"
              d="M13.2 6.8l4 4"
              fill="none" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `;
  }

  function iconEraser(){
    return `
      <svg viewBox="-4 4 24 24" aria-hidden="true">
        <path class="ico-stroke" d="M4 16.5l8.6-8.6a2 2 0 0 1 2.8 0l4.1 4.1a2 2 0 0 1 0 2.8L12.8 23H7.6L4 19.4a2 2 0 0 1 0-2.9z"
              fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="ico-stroke" d="M8 23h8" fill="none" stroke-width="2" stroke-linecap="round"/>
        <path class="ico-stroke" d="M9.2 14.3l6.5 6.5" fill="none" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
  }

  function iconUndo(){
    return `
      <svg viewBox="-4 0 24 24" aria-hidden="true">
        <path d="M21 8H10.2V4L2 12l8.2 8v-4H21V8z" fill="var(--lia-annot-fg)"/>
        <rect x="10.2" y="10.6" width="10.8" height="2.8" rx="1.4" fill="var(--lia-annot-fg)"/>
      </svg>
    `;
  }

  function iconRedo(){
    return `
      <svg viewBox="-4 0 24 24" aria-hidden="true">
        <path d="M3 8h10.8V4l8.2 8-8.2 8v-4H3V8z" fill="var(--lia-annot-fg)"/>
        <rect x="3" y="10.6" width="10.8" height="2.8" rx="1.4" fill="var(--lia-annot-fg)"/>
      </svg>
    `;
  }

  function iconEye(open){
    if (open){
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path class="ico-stroke" d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"/>
          <circle cx="12" cy="12" r="3.2" class="ico-stroke"></circle>
        </svg>
      `;
    }
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path class="ico-stroke" d="M3 3l18 18"/>
        <path class="ico-stroke" d="M2.5 12s3.5-6 9.5-6c1.8 0 3.3.5 4.6 1.2"/>
        <path class="ico-stroke" d="M21.5 12s-3.5 6-9.5 6c-1.8 0-3.4-.5-4.8-1.3"/>
      </svg>
    `;
  }

  // ---------------------------------------------------------
  // Toolbar panel content
  // ---------------------------------------------------------
  function getColors(){
    return [
      '#ff0000', '#ff7500', '#ffff00', '#ff00ff', '#0055ff',
      '#00ffff', '#00ff00', '#007500', '#000000', '#ffffff'
    ];
  }

  function buildPenPanelHTML(){
    const colorButtons = getColors().map(function(c){
      return '<button class="lia-annot-color-item" type="button" data-color="' + c + '" aria-label="Farbe ' + c + '" data-snapshot-admin="1" style="background:' + c + ';"></button>';
    }).join('');

    return `
      <div class="lia-annot-row">
        <span class="k">Farben</span>
        <span class="lia-annot-color-grid">${colorButtons}</span>
      </div>

      <div class="lia-annot-row">
        <span class="k">Stiftbreite</span>
        <input class="lia-annot-slider" type="range" min="1" max="24" step="1" value="${STORE.ui.width}" data-act="width" aria-label="Stiftbreite" data-snapshot-admin="1">
        <span class="v" data-k="width">${STORE.ui.width}</span>
      </div>

      <div class="lia-annot-row">
        <span class="k">Deckkraft</span>
        <input class="lia-annot-slider" type="range" min="0.1" max="1" step="0.05" value="${STORE.ui.alpha}" data-act="alpha" aria-label="Deckkraft" data-snapshot-admin="1">
        <span class="v" data-k="alpha">${Math.round(Number(STORE.ui.alpha || 1) * 100)}%</span>
      </div>

      <div class="lia-annot-note" data-k="note"></div>
    `;
  }

  function buildEraserPanelHTML(){
    return `
      <div class="lia-annot-row">
        <span class="k">Radierer</span>
        <input class="lia-annot-slider" type="range" min="4" max="80" step="1" value="${STORE.ui.eraserWidth}" data-act="eraserWidth" aria-label="Radiererbreite" data-snapshot-admin="1">
        <span class="v" data-k="eraserWidth">${STORE.ui.eraserWidth}</span>
      </div>

      <div class="lia-annot-row">
        <button class="lia-annot-danger" type="button" data-act="clear" data-snapshot-admin="1">Alles löschen</button>
      </div>

      <div class="lia-annot-note" data-k="note"></div>
    `;
  }

  // ---------------------------------------------------------
  // Toolbar
  // ---------------------------------------------------------
  function ensureToolbar(){
    if (STATE.toolbar && STATE.toolbar.isConnected){
      return STATE.toolbar;
    }

    const bar = document.createElement('div');
    bar.className = 'lia-annot-toolbar';
    bar.setAttribute('data-snapshot-admin', '1');

    bar.innerHTML = `
      <div class="lia-annot-actions">
        <button class="lia-annot-btn" type="button" data-act="cursor" aria-label="Cursor" data-snapshot-admin="1">${iconCursor()}</button>
        <button class="lia-annot-btn" type="button" data-act="pen" aria-label="Stift" data-snapshot-admin="1">${iconPen()}</button>
        <button class="lia-annot-btn" type="button" data-act="eraser" aria-label="Radierer" data-snapshot-admin="1">${iconEraser()}</button>
        <button class="lia-annot-btn" type="button" data-act="undo" aria-label="Rückgängig" data-snapshot-admin="1">${iconUndo()}</button>
        <button class="lia-annot-btn" type="button" data-act="redo" aria-label="Wiederherstellen" data-snapshot-admin="1">${iconRedo()}</button>
        <button class="lia-annot-btn" type="button" data-act="toggle" aria-label="Annotation anzeigen/ausblenden" data-snapshot-admin="1">${iconEye(true)}</button>
      </div>

      <div class="lia-annot-panel" data-open="0"></div>
    `;

    (document.body || document.documentElement).appendChild(bar);

    bar.addEventListener('click', function(e){
      const btn = e.target && e.target.closest ? e.target.closest('[data-act]') : null;
      const colorBtn = e.target && e.target.closest ? e.target.closest('[data-color]') : null;

      if (colorBtn){
        e.preventDefault();
        e.stopPropagation();
        if (isReadOnly()) return;
        STORE.ui.color = String(colorBtn.getAttribute('data-color') || '#ff0000');
        updateToolbar();
        requestRedraw();
        return;
      }

      if (!btn) return;

      e.preventDefault();
      e.stopPropagation();

      const act = String(btn.getAttribute('data-act') || '');

      if (act === 'toggle'){
        ensureOverlay();
        STORE.ui.visible = !STORE.ui.visible;
        syncOverlayInteractivity();
        updateToolbar();
        requestRedraw();
        requestSync();
        return;
      }

      if (act === 'cursor'){
        STORE.ui.mode = 'cursor';
        STORE.ui.panelOpen = false;
        syncOverlayInteractivity();
        updateToolbar();
        return;
      }

      if (act === 'pen'){
        if (isReadOnly()) return;
        const same = (STORE.ui.mode === 'pen' && STORE.ui.panelMode === 'pen' && STORE.ui.panelOpen);
        STORE.ui.mode = 'pen';
        STORE.ui.panelMode = 'pen';
        STORE.ui.panelOpen = !same;
        syncOverlayInteractivity();
        updateToolbar();
        return;
      }

      if (act === 'eraser'){
        if (isReadOnly()) return;
        const same = (STORE.ui.mode === 'eraser' && STORE.ui.panelMode === 'eraser' && STORE.ui.panelOpen);
        STORE.ui.mode = 'eraser';
        STORE.ui.panelMode = 'eraser';
        STORE.ui.panelOpen = !same;
        syncOverlayInteractivity();
        updateToolbar();
        return;
      }

      if (act === 'undo'){
        if (isReadOnly()) return;
        doUndo();
        return;
      }

      if (act === 'redo'){
        if (isReadOnly()) return;
        doRedo();
        return;
      }

      if (act === 'clear'){
        if (isReadOnly()) return;
        clearSlide();
        return;
      }
    }, true);

    bar.addEventListener('input', function(e){
      const t = e.target;
      if (!(t instanceof HTMLElement)) return;
      const act = String(t.getAttribute('data-act') || '');

      if (isReadOnly()) return;

      if (act === 'width'){
        STORE.ui.width = clamp(Number(t.value), 1, 24);
        updateToolbar();
        return;
      }

      if (act === 'alpha'){
        STORE.ui.alpha = clamp(Number(t.value), 0.1, 1);
        updateToolbar();
        return;
      }

      if (act === 'eraserWidth'){
        STORE.ui.eraserWidth = clamp(Number(t.value), 4, 80);
        updateToolbar();
        return;
      }
    }, true);

    STATE.toolbar = bar;
    return bar;
  }

  function updateToolbar(){
    const bar = ensureToolbar();
    const slide = currentSlide();
    const ro = isReadOnly();

    const panel = bar.querySelector('.lia-annot-panel');
    if (panel){
      panel.dataset.open = (STORE.ui.panelOpen && !ro) ? '1' : '0';
      if (STORE.ui.panelMode === 'eraser'){
        panel.innerHTML = buildEraserPanelHTML();
      }else{
        panel.innerHTML = buildPenPanelHTML();
      }
    }

    const note = panel ? panel.querySelector('[data-k="note"]') : null;
    if (note){
      note.textContent = ro
        ? 'Freeze-/Read-only-Modus: Zeichnen ist gesperrt, Anzeigen/Ausblenden bleibt möglich.'
        : '';
    }

    const btns = bar.querySelectorAll('.lia-annot-btn[data-act]');
    btns.forEach(function(btn){
      const act = String(btn.getAttribute('data-act') || '');
      btn.dataset.active = '0';

      if (act === 'cursor' && STORE.ui.mode === 'cursor') btn.dataset.active = '1';
      if (act === 'pen'    && STORE.ui.mode === 'pen')    btn.dataset.active = '1';
      if (act === 'eraser' && STORE.ui.mode === 'eraser') btn.dataset.active = '1';
      if (act === 'toggle'){
        btn.dataset.active = STORE.ui.visible ? '1' : '0';
        btn.innerHTML = iconEye(!!STORE.ui.visible);
      }

      if (act === 'undo'){
        btn.disabled = ro || slide.items.length === 0;
      }else if (act === 'redo'){
        btn.disabled = ro || slide.redo.length === 0;
      }else if (act === 'pen' || act === 'eraser'){
        btn.disabled = ro;
      }else{
        btn.disabled = false;
      }
    });

    if (panel){
      const colorBtns = panel.querySelectorAll('.lia-annot-color-item');
      colorBtns.forEach(function(btn){
        const c = String(btn.getAttribute('data-color') || '');
        btn.dataset.active = (c === String(STORE.ui.color || '')) ? '1' : '0';
        btn.disabled = ro;
      });

      const clearBtn = panel.querySelector('.lia-annot-danger[data-act="clear"]');
      if (clearBtn) clearBtn.disabled = ro || slide.items.length === 0;

      const wTxt = panel.querySelector('[data-k="width"]');
      const aTxt = panel.querySelector('[data-k="alpha"]');
      const eTxt = panel.querySelector('[data-k="eraserWidth"]');

      if (wTxt) wTxt.textContent = String(STORE.ui.width);
      if (aTxt) aTxt.textContent = Math.round(Number(STORE.ui.alpha || 1) * 100) + '%';
      if (eTxt) eTxt.textContent = String(STORE.ui.eraserWidth);
    }
  }


function syncToolbarPosition(){
  const bar = ensureToolbar();
  const host = getVisibleMainHost();
  if (!bar || !host) return;

  const viewportW = getViewportWidth();
  const gap = 8;

  const barRect = bar.getBoundingClientRect();
  const barW = Math.ceil(barRect.width || bar.offsetWidth || 44);

  // WICHTIG:
  // Nicht am <main> ausrichten, sondern am sichtbaren Slide-Container
  const slideContainer =
    host.closest('.lia-slide__container') ||
    host.parentElement ||
    host;

  const containerRect = slideContainer.getBoundingClientRect();

  // linker Rand des Kurses / Containers
  let left = Math.round(containerRect.left + gap);

  // im Viewport halten
  left = Math.max(8, left);
  left = Math.min(left, Math.max(8, viewportW - barW - 8));

  bar.style.left = left + 'px';
}


  // ---------------------------------------------------------
  // Overlay
  // ---------------------------------------------------------
  function disconnectResizeObserver(){
    try{
      if (STATE.resizeObserver) STATE.resizeObserver.disconnect();
    }catch(_){}
    STATE.resizeObserver = null;
  }

  function bindResizeObserver(){
    disconnectResizeObserver();
    if (!STATE.host) return;

    try{
      STATE.resizeObserver = new ResizeObserver(function(){
        requestSync();
      });
      STATE.resizeObserver.observe(STATE.host);
    }catch(_){}
  }

  function insertShellAfterHeader(host, shell){
    const header = getDirectHeader(host);

    if (header){
      if (header.nextSibling !== shell){
        if (shell.parentNode === host) shell.remove();
        if (header.nextSibling) host.insertBefore(shell, header.nextSibling);
        else host.appendChild(shell);
      }
      return;
    }

    if (host.firstChild !== shell){
      if (shell.parentNode === host) shell.remove();
      if (host.firstChild) host.insertBefore(shell, host.firstChild);
      else host.appendChild(shell);
    }
  }

  function bindCanvasEvents(){
    if (!STATE.canvas || STATE.canvas.__liaAnnotBound) return;
    STATE.canvas.__liaAnnotBound = true;

    function getLocalPos(evt){
      const r = STATE.canvas.getBoundingClientRect();
      const x = clamp(evt.clientX - r.left, 0, STATE.cssW);
      const y = clamp(evt.clientY - r.top,  0, STATE.cssH);
      return { x, y };
    }

    function addPoint(path, x, y){
      if (!path || !Array.isArray(path.points)) return;
      const rel = toRel(x, y);
      const prev = path.points.length ? path.points[path.points.length - 1] : null;

      if (prev){
        const dx = (rel.x - prev.x) * STATE.cssW;
        const dy = (rel.y - prev.y) * STATE.cssH;
        if (Math.hypot(dx, dy) < 0.8) return;
      }

      path.points.push(rel);
    }

    STATE.canvas.addEventListener('pointerdown', function(evt){
      if (evt.pointerType === 'mouse' && evt.button !== 0) return;
      if (isReadOnly()) return;
      if (!STORE.ui.visible) return;

      const mode = effectiveMode();
      if (mode !== 'pen' && mode !== 'eraser') return;

      evt.preventDefault();
      evt.stopPropagation();

      if (STORE.ui.panelOpen){
        STORE.ui.panelOpen = false;
        updateToolbar();
      }

      const p = getLocalPos(evt);
      const slide = currentSlide();

      const item = {
        kind: 'path',
        tool: mode,
        color: String(STORE.ui.color || '#ff0000'),
        width: (mode === 'eraser') ? Number(STORE.ui.eraserWidth || 18) : Number(STORE.ui.width || 3),
        alpha: (mode === 'eraser') ? 1 : Number(STORE.ui.alpha || 1),
        baseW: Math.max(1, STATE.cssW),
        points: [ toRel(p.x, p.y) ]
      };

      slide.items.push(item);
      slide.redo = [];
      STATE.activePath = item;
      STATE.drawing = true;

      try{ STATE.canvas.setPointerCapture(evt.pointerId); }catch(_){}
      requestRedraw();
      updateToolbar();
    }, true);

    STATE.canvas.addEventListener('pointermove', function(evt){
      if (!STATE.drawing || !STATE.activePath) return;

      evt.preventDefault();
      evt.stopPropagation();

      const p = getLocalPos(evt);
      addPoint(STATE.activePath, p.x, p.y);
      requestRedraw();
    }, true);

    function finish(evt){
      if (!STATE.drawing) return;

      evt.preventDefault();
      evt.stopPropagation();

      try{ STATE.canvas.releasePointerCapture(evt.pointerId); }catch(_){}
      STATE.drawing = false;
      STATE.activePath = null;
      requestRedraw();
      updateToolbar();
    }

    STATE.canvas.addEventListener('pointerup', finish, true);
    STATE.canvas.addEventListener('pointercancel', finish, true);
    STATE.canvas.addEventListener('contextmenu', function(evt){
      evt.preventDefault();
    }, true);
  }

function ensureOverlay(){
  const host = getVisibleMainHost();
  const slideKey = getSlideKey();

  const hostChanged = (STATE.host !== host);
  const slideChanged = (STATE.slideKey !== slideKey);

  if (!STATE.shell || !STATE.shell.isConnected || hostChanged){
    disconnectResizeObserver();

    STATE.host = host;
    STATE.slideKey = slideKey;

    host.classList.add('lia-annot-host');

    let shell = findDirectChildByClass(host, 'lia-annot-shell');
    if (!shell){
      shell = document.createElement('div');
      shell.className = 'lia-annot-shell';
      shell.setAttribute('aria-hidden', 'true');

      const canvas = document.createElement('canvas');
      canvas.className = 'lia-annot-canvas';
      canvas.setAttribute('aria-label', 'Annotationsfläche');
      canvas.setAttribute('data-snapshot-admin', '1');

      shell.appendChild(canvas);
    }

    insertShellAfterHeader(host, shell);

    STATE.shell = shell;
    STATE.canvas = shell.querySelector('.lia-annot-canvas');
    STATE.ctx = STATE.canvas ? STATE.canvas.getContext('2d', { willReadFrequently:true }) : null;

    bindCanvasEvents();
    bindResizeObserver();
  }else{
    insertShellAfterHeader(host, STATE.shell);
  }

  if (slideChanged){
    STATE.slideKey = slideKey;
  }

  syncOverlayInteractivity();
}

function syncOverlayInteractivity(){
  const shells = Array.from(document.querySelectorAll('.lia-annot-shell'));
  const mode = effectiveMode();
  const visible = !!STORE.ui.visible;

  // alles zuerst neutralisieren
  for (let i = 0; i < shells.length; i++){
    const shell = shells[i];
    const canvas = shell.querySelector('.lia-annot-canvas');

    shell.dataset.mode = 'cursor';
    shell.dataset.hidden = visible ? '0' : '1';
    shell.style.pointerEvents = 'none';
    shell.style.display = visible ? '' : 'none';

    if (canvas){
      canvas.style.pointerEvents = 'none';
      canvas.style.touchAction = 'auto';
      canvas.style.cursor = 'default';
    }
  }

  // komplett unsichtbar -> fertig
  if (!visible) return;

  // aktuelle aktive Shell explizit sichtbar halten
  if (!STATE.shell || !STATE.canvas) return;

  STATE.shell.style.display = '';
  STATE.shell.dataset.hidden = '0';
  STATE.shell.dataset.mode = mode;
  STATE.shell.style.pointerEvents = 'none';

  if (mode === 'pen' || mode === 'eraser'){
    STATE.canvas.style.pointerEvents = 'auto';
    STATE.canvas.style.touchAction = 'none';
    STATE.canvas.style.cursor = 'crosshair';
  }else{
    STATE.canvas.style.pointerEvents = 'none';
    STATE.canvas.style.touchAction = 'auto';
    STATE.canvas.style.cursor = 'default';
  }
}

  function syncCanvasSize(){
    if (!STATE.host || !STATE.canvas || !STATE.ctx || !STATE.shell) return;

    STATE.dpr = window.devicePixelRatio || 1;

    const hostRect = STATE.host.getBoundingClientRect();
    const cssW = getViewportWidth();
    const cssH = Math.max(
      1,
      Math.ceil(
        Math.max(
          STATE.host.scrollHeight || 0,
          STATE.host.clientHeight || 0,
          STATE.host.getBoundingClientRect().height || 0
        )
      )
    );

    const offsetLeft = Math.round(-hostRect.left);

    STATE.cssW = cssW;
    STATE.cssH = cssH;

    STATE.shell.style.left = offsetLeft + 'px';
    STATE.shell.style.top = '0px';
    STATE.shell.style.width = cssW + 'px';
    STATE.shell.style.height = cssH + 'px';

    STATE.canvas.style.width = cssW + 'px';
    STATE.canvas.style.height = cssH + 'px';

    const pxW = Math.max(1, Math.round(cssW * STATE.dpr));
    const pxH = Math.max(1, Math.round(cssH * STATE.dpr));

    if (STATE.canvas.width !== pxW) STATE.canvas.width = pxW;
    if (STATE.canvas.height !== pxH) STATE.canvas.height = pxH;
  }

function requestSync(){
  if (STATE.syncRAF) return;
  STATE.syncRAF = requestAnimationFrame(function(){
    STATE.syncRAF = 0;
    ensureOverlay();
    syncCanvasSize();
    syncToolbarPosition();
    requestRedraw();
  });
}

  // ---------------------------------------------------------
  // Render
  // ---------------------------------------------------------
  function drawDot(ctx, x, y, r, color, alpha, erase){
    ctx.save();
    ctx.globalCompositeOperation = erase ? 'destination-out' : 'source-over';
    ctx.globalAlpha = erase ? 1 : clamp(Number(alpha || 1), 0.05, 1);
    ctx.beginPath();
    ctx.arc(x, y, Math.max(0.5, r), 0, Math.PI * 2);
    ctx.fillStyle = erase ? '#000' : String(color || '#000');
    ctx.fill();
    ctx.restore();
  }

  function drawItem(ctx, item){
    if (!item || item.kind !== 'path' || !Array.isArray(item.points) || item.points.length === 0) return;

    const erase = (item.tool === 'eraser');
    const widthPx = getLineWidthPx(item);
    const alpha = clamp(Number(item.alpha || 1), 0.05, 1);
    const color = String(item.color || '#000');

    if (item.points.length === 1){
      const p = fromRel(item.points[0]);
      drawDot(ctx, p.x, p.y, widthPx / 2, color, alpha, erase);
      return;
    }

    ctx.save();
    ctx.globalCompositeOperation = erase ? 'destination-out' : 'source-over';
    ctx.globalAlpha = erase ? 1 : alpha;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = widthPx;
    ctx.strokeStyle = erase ? '#000' : color;

    ctx.beginPath();
    const p0 = fromRel(item.points[0]);
    ctx.moveTo(p0.x, p0.y);

    for (let i = 1; i < item.points.length; i++){
      const p = fromRel(item.points[i]);
      ctx.lineTo(p.x, p.y);
    }

    ctx.stroke();
    ctx.restore();
  }

  function redrawNow(){
    if (!STATE.canvas || !STATE.ctx) return;

    const ctx = STATE.ctx;
    ctx.setTransform(STATE.dpr, 0, 0, STATE.dpr, 0, 0);
    ctx.clearRect(0, 0, STATE.cssW, STATE.cssH);

    if (!STORE.ui.visible) return;

    const slide = ensureSlide(STATE.slideKey || getSlideKey());
    for (let i = 0; i < slide.items.length; i++){
      drawItem(ctx, slide.items[i]);
    }
  }

  function requestRedraw(){
    if (STATE.redrawRAF) return;
    STATE.redrawRAF = requestAnimationFrame(function(){
      STATE.redrawRAF = 0;
      redrawNow();
      updateToolbar();
    });
  }

  // ---------------------------------------------------------
  // State ops
  // ---------------------------------------------------------
  function doUndo(){
    const s = currentSlide();
    if (!s.items.length) return;
    s.redo.push(s.items.pop());
    requestRedraw();
    updateToolbar();
  }

  function doRedo(){
    const s = currentSlide();
    if (!s.redo.length) return;
    s.items.push(s.redo.pop());
    requestRedraw();
    updateToolbar();
  }

  function clearSlide(){
    const s = currentSlide();
    s.items = [];
    s.redo = [];
    requestRedraw();
    updateToolbar();
  }

  function clearAllSlides(){
    STORE.slides = {};
    ensureSlide(getSlideKey());
    requestRedraw();
    updateToolbar();
  }

  // ---------------------------------------------------------
  // Export / Import API
  // ---------------------------------------------------------
  function exportState(){
    return copyJson({
      version: 'lia-annotation-v8',
      ui: {
        visible: !!STORE.ui.visible
      },
      slides: STORE.slides
    });
  }

  function importState(payload, opts){
    const o = (opts && typeof opts === 'object') ? opts : {};
    const replace = (o.replace !== false);

    if (!payload || typeof payload !== 'object') return false;

    if (replace){
      STORE.slides = {};
    }

    if (payload.slides && typeof payload.slides === 'object'){
      for (const k in payload.slides){
        if (!Object.prototype.hasOwnProperty.call(payload.slides, k)) continue;
        const src = payload.slides[k];
        if (!src || typeof src !== 'object') continue;

        STORE.slides[k] = {
          items: Array.isArray(src.items) ? copyJson(src.items) : [],
          redo:  Array.isArray(src.redo)  ? copyJson(src.redo)  : []
        };
      }
    }

    if (payload.ui && typeof payload.ui === 'object'){
      if (typeof payload.ui.visible === 'boolean'){
        STORE.ui.visible = payload.ui.visible;
      }
    }

    syncOverlayInteractivity();
    requestRedraw();
    updateToolbar();
    return true;
  }

  function setVisible(v){
    STORE.ui.visible = !!v;
    syncOverlayInteractivity();
    requestRedraw();
    updateToolbar();
  }

  function toggleVisible(){
    setVisible(!STORE.ui.visible);
  }

  function setReadOnly(v){
    STORE.ui.forcedReadOnly = (v === null) ? null : !!v;
    syncOverlayInteractivity();
    updateToolbar();
  }

  // ---------------------------------------------------------
  // Global API
  // ---------------------------------------------------------
  window.__LIA_ANNOTATION__ = {
    exportState,
    importState,
    setVisible,
    toggleVisible,
    setReadOnly,
    clearSlide,
    clearAllSlides,
    refresh: function(){
      ensureOverlay();
      requestSync();
      updateToolbar();
    },
    getStore: function(){
      return copyJson(STORE);
    },
    getSlideKey: function(){
      return getSlideKey();
    }
  };

  window.__LIA_ANNOTATION_EXPORT__ = function(){
    return exportState();
  };

  window.__LIA_ANNOTATION_IMPORT__ = function(payload, opts){
    return importState(payload, opts);
  };

  // ---------------------------------------------------------
  // Boot
  // ---------------------------------------------------------
  function boot(){
  ensureCss();
  applyThemeVars();
  ensureToolbar();
  ensureSlide(getSlideKey());
  ensureOverlay();
  syncToolbarPosition();
  updateToolbar();

    setTimeout(function(){ ensureOverlay(); requestSync(); }, 0);
    setTimeout(function(){ ensureOverlay(); requestSync(); }, 80);
    setTimeout(function(){ ensureOverlay(); requestSync(); }, 250);
    setTimeout(function(){ ensureOverlay(); requestSync(); }, 700);
  }

  window.addEventListener('resize', function(){
    applyThemeVars();
    ensureToolbar();
    requestSync();
  });

  window.addEventListener('hashchange', function(){
    ensureSlide(getSlideKey());
    ensureOverlay();
    updateToolbar();

    setTimeout(function(){ ensureOverlay(); requestSync(); }, 40);
    setTimeout(function(){ ensureOverlay(); requestSync(); }, 180);
    setTimeout(function(){ ensureOverlay(); requestSync(); }, 500);
  });

  window.addEventListener('scroll', function(){
    requestSync();
  }, true);

  document.addEventListener('input', function(){
    requestSync();
  }, true);

  document.addEventListener('change', function(){
    requestSync();
  }, true);

  const themeMo = new MutationObserver(function(){
    applyThemeVars();
    updateToolbar();
    requestRedraw();
  });

  try{
    themeMo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'style']
    });
  }catch(_){}

  boot();

})();
@end










-->














# Annotationsoptionen 1


Man kann mit der Buttonleiste am linken Rand nun Annotationen vornehmen.

