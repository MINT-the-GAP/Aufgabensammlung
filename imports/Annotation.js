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
      mode: 'cursor',          // cursor | pen | eraser | ocr
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
    toolbar: null,
    eraserRing: null,
    ocrActionBtn: null,
    ocrCloseBtn: null,
    ocrProgress: null,
    ocrProgressFill: null,
    ocrProgressText: null,
    lastPointer: {
      x: 0,
      y: 0,
      inside: false,
      pointerType: ''
    },
    ocrBusy: false,
    ocrModelSynced: null,
    ocrRect: null,
    ocrDragging: false,
    ocrPointerId: null,
    ocrProgRAF: 0,
    ocrProgStart: 0
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

  function rgbaFromAny(color, alpha){
    const a = clamp(Number(alpha), 0, 1);
    const c = String(color || '').trim();
    if (!c) return 'rgba(11,95,255,' + a + ')';

    if (c.startsWith('#')){
      const hex = c.slice(1);
      if (hex.length === 3){
        const r = parseInt(hex[0] + hex[0], 16);
        const g = parseInt(hex[1] + hex[1], 16);
        const b = parseInt(hex[2] + hex[2], 16);
        if (isFinite(r) && isFinite(g) && isFinite(b)) return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
      }
      if (hex.length === 6){
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        if (isFinite(r) && isFinite(g) && isFinite(b)) return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
      }
    }

    const rgb = parseRgbNoRegex(c);
    if (rgb) return 'rgba(' + Math.round(rgb[0]) + ',' + Math.round(rgb[1]) + ',' + Math.round(rgb[2]) + ',' + a + ')';

    return c;
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

    if (dark){
      root.style.setProperty('--lia-annot-bg', 'rgba(28,28,28,0.96)');
      root.style.setProperty('--lia-annot-panel-bg', 'rgba(34,34,34,0.97)');
    }else{
      root.style.setProperty('--lia-annot-bg', 'rgba(255,255,255,0.96)');
      root.style.setProperty('--lia-annot-panel-bg', 'rgba(255,255,255,0.97)');
    }
  }catch(_){}
}

  function getLineWidthPx(item){
    const baseW = Math.max(1, Number(item && item.baseW) || STATE.cssW || 1);
    const curW  = Math.max(1, STATE.cssW || 1);
    const w     = Math.max(0.75, Number(item && item.width) || 1);
    return Math.max(0.75, w * (curW / baseW));
  }

function getLiveEraserRingSize(){
  return Math.max(8, Number(STORE.ui.eraserWidth || 18));
}

function hideEraserRing(){
  if (!STATE.eraserRing) return;
  STATE.eraserRing.dataset.on = '0';
}

function updateEraserRing(x, y){
  if (!STATE.eraserRing) return;

  if (!STORE.ui.visible || isReadOnly() || effectiveMode() !== 'eraser'){
    hideEraserRing();
    return;
  }

  if (!isFinite(x) || !isFinite(y) || !isFinite(STATE.cssW) || !isFinite(STATE.cssH)){
    hideEraserRing();
    return;
  }

  const size = getLiveEraserRingSize();

  STATE.eraserRing.style.width = size + 'px';
  STATE.eraserRing.style.height = size + 'px';
  STATE.eraserRing.style.left = clamp(x, 0, STATE.cssW) + 'px';
  STATE.eraserRing.style.top  = clamp(y, 0, STATE.cssH) + 'px';
  STATE.eraserRing.dataset.on = '1';
}

function refreshEraserRing(){
  if (!STATE.lastPointer || !STATE.lastPointer.inside){
    hideEraserRing();
    return;
  }

  updateEraserRing(STATE.lastPointer.x, STATE.lastPointer.y);
}

  function normalizeRect(r){
    if (!r) return null;
    const x0 = Math.min(Number(r.x0), Number(r.x1));
    const y0 = Math.min(Number(r.y0), Number(r.y1));
    const x1 = Math.max(Number(r.x0), Number(r.x1));
    const y1 = Math.max(Number(r.y0), Number(r.y1));
    if (!isFinite(x0) || !isFinite(y0) || !isFinite(x1) || !isFinite(y1)) return null;
    return {
      x0: clamp(x0, 0, STATE.cssW),
      y0: clamp(y0, 0, STATE.cssH),
      x1: clamp(x1, 0, STATE.cssW),
      y1: clamp(y1, 0, STATE.cssH)
    };
  }

  function clearOcrRect(){
    STATE.ocrRect = null;
    STATE.ocrDragging = false;
    STATE.ocrPointerId = null;
    updateOcrWidgetsPosition();
    requestRedraw();
  }

  function ensureOcrWidgets(shellRef){
    const shell = shellRef || STATE.shell;
    const root = document.body || document.documentElement;
    if (!root) return;

    let action = document.getElementById('lia-annot-rect-action-global');
    if (!action){
      action = document.createElement('button');
      action.id = 'lia-annot-rect-action-global';
      action.className = 'lia-annot-rect-action';
      action.type = 'button';
      action.textContent = 'Als Lösung übergeben';
      action.style.display = 'none';
      action.setAttribute('data-snapshot-admin', '1');
      root.appendChild(action);

      action.addEventListener('pointerdown', function(e){
        e.preventDefault();
        e.stopPropagation();
      }, true);

      action.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        transferAnnotationToNearestQuiz({ useRect:true });
      }, true);
    }

    let closeBtn = document.getElementById('lia-annot-rect-close-global');
    if (!closeBtn){
      closeBtn = document.createElement('button');
      closeBtn.id = 'lia-annot-rect-close-global';
      closeBtn.className = 'lia-annot-rect-close';
      closeBtn.type = 'button';
      closeBtn.style.display = 'none';
      closeBtn.setAttribute('aria-label', 'Marker-Rechteck entfernen');
      closeBtn.setAttribute('data-snapshot-admin', '1');
      closeBtn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7L17 17M17 7L7 17" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>';
      root.appendChild(closeBtn);

      closeBtn.addEventListener('pointerdown', function(e){
        e.preventDefault();
        e.stopPropagation();
      }, true);

      closeBtn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        clearOcrRect();
      }, true);
    }

    let prog = document.getElementById('lia-annot-rect-progress-global');
    if (!prog){
      prog = document.createElement('div');
      prog.id = 'lia-annot-rect-progress-global';
      prog.className = 'lia-annot-rect-progress';
      prog.dataset.on = '0';
      prog.innerHTML = '<div class="lia-annot-rect-progbar"><div class="lia-annot-rect-progfill"></div></div><div class="lia-annot-rect-progtxt">0%</div>';
      prog.setAttribute('data-snapshot-admin', '1');
      root.appendChild(prog);

      prog.addEventListener('pointerdown', function(e){
        e.preventDefault();
        e.stopPropagation();
      }, true);
    }

    STATE.ocrActionBtn = action;
    STATE.ocrCloseBtn = closeBtn;
    STATE.ocrProgress = prog;
    STATE.ocrProgressFill = prog.querySelector('.lia-annot-rect-progfill');
    STATE.ocrProgressText = prog.querySelector('.lia-annot-rect-progtxt');
  }

  function setRectProgress01(v){
    if (!STATE.ocrProgressFill || !STATE.ocrProgressText) return;
    const p = clamp(Number(v) || 0, 0, 1);
    STATE.ocrProgressFill.style.width = Math.round(p * 100) + '%';
    STATE.ocrProgressText.textContent = Math.round(p * 100) + '%';
  }

  function showRectProgress(){
    if (!STATE.ocrProgress) return;
    STATE.ocrProgress.dataset.on = '1';
    setRectProgress01(0);
    updateOcrWidgetsPosition();
  }

  function hideRectProgress(){
    if (!STATE.ocrProgress) return;
    STATE.ocrProgress.dataset.on = '0';
    setRectProgress01(0);
  }

  function startRectProgressPseudo(){
    if (STATE.ocrProgRAF){
      cancelAnimationFrame(STATE.ocrProgRAF);
      STATE.ocrProgRAF = 0;
    }

    showRectProgress();
    STATE.ocrProgStart = performance.now();

    const tick = function(){
      const t = performance.now() - STATE.ocrProgStart;
      let v = 0;
      if (t < 900){
        v = (t / 900) * 0.70;
      }else if (t < 2200){
        v = 0.70 + ((t - 900) / 1300) * 0.20;
      }else{
        v = 0.90 + Math.min(0.08, ((t - 2200) / 5000) * 0.08);
      }
      setRectProgress01(v);
      STATE.ocrProgRAF = requestAnimationFrame(tick);
    };

    STATE.ocrProgRAF = requestAnimationFrame(tick);
  }

  function stopRectProgressPseudo(final01){
    if (STATE.ocrProgRAF){
      cancelAnimationFrame(STATE.ocrProgRAF);
      STATE.ocrProgRAF = 0;
    }
    setRectProgress01(final01 == null ? 1 : final01);
    setTimeout(function(){
      hideRectProgress();
    }, 240);
  }

  function updateOcrWidgetsPosition(){
    if (!STATE.ocrActionBtn || !STATE.ocrProgress){
      ensureOcrWidgets();
    }

    if (!STATE.ocrActionBtn || !STATE.ocrProgress){
      return;
    }

    if (STORE.ui.mode !== 'ocr' || !STORE.ui.visible){
      STATE.ocrActionBtn.style.display = 'none';
      if (STATE.ocrCloseBtn) STATE.ocrCloseBtn.style.display = 'none';
      STATE.ocrProgress.style.display = 'none';
      return;
    }

    const rect = normalizeRect(STATE.ocrRect);
    if (!rect){
      STATE.ocrActionBtn.style.display = 'none';
      if (STATE.ocrCloseBtn) STATE.ocrCloseBtn.style.display = 'none';
      STATE.ocrProgress.style.display = 'none';
      return;
    }

    const w = rect.x1 - rect.x0;
    const h = rect.y1 - rect.y0;
    if (w < 8 || h < 8){
      STATE.ocrActionBtn.style.display = 'none';
      if (STATE.ocrCloseBtn) STATE.ocrCloseBtn.style.display = 'none';
      STATE.ocrProgress.style.display = 'none';
      return;
    }

    STATE.ocrActionBtn.style.display = 'block';

    const bw = STATE.ocrActionBtn.offsetWidth || 188;
    const bh = STATE.ocrActionBtn.offsetHeight || 30;

    const cr = STATE.canvas ? STATE.canvas.getBoundingClientRect() : null;
    if (!cr) return;

    const right = cr.left + rect.x1;
    const bottom = cr.top + rect.y1;
    const pad = 6;
    const gap = 8;

    let left = right - bw;
    let top = bottom + gap;

    left = clamp(left, pad, Math.max(pad, window.innerWidth - bw - pad));
    top = clamp(top, pad, Math.max(pad, window.innerHeight - bh - pad));

    STATE.ocrActionBtn.style.left = left + 'px';
    STATE.ocrActionBtn.style.top = top + 'px';

    const pbh = STATE.ocrProgress.offsetHeight || 26;
    STATE.ocrProgress.style.display = '';
    STATE.ocrProgress.style.width = bw + 'px';
    STATE.ocrProgress.style.left = left + 'px';
    STATE.ocrProgress.style.top = clamp(top + bh + 6, pad, Math.max(pad, window.innerHeight - pbh - pad)) + 'px';

    if (STATE.ocrCloseBtn){
      STATE.ocrCloseBtn.style.display = 'block';
      const cbw = STATE.ocrCloseBtn.offsetWidth || 24;
      const cbh = STATE.ocrCloseBtn.offsetHeight || 24;
      let cLeft = (cr.left + rect.x1) - cbw * 0.5;
      let cTop = (cr.top + rect.y0) - cbh * 0.5;
      cLeft = clamp(cLeft, pad, Math.max(pad, window.innerWidth - cbw - pad));
      cTop = clamp(cTop, pad, Math.max(pad, window.innerHeight - cbh - pad));
      STATE.ocrCloseBtn.style.left = cLeft + 'px';
      STATE.ocrCloseBtn.style.top = cTop + 'px';
    }
  }

  function isElementVisible(el){
    if (!el || !(el instanceof Element)) return false;
    if (!el.isConnected) return false;
    const r = el.getBoundingClientRect();
    if (r.width <= 0 || r.height <= 0) return false;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') return false;
    return true;
  }

  function isEditableInputField(el){
    if (!el || !(el instanceof Element)) return false;
    if (el.closest('.lia-annot-toolbar, .lia-annot-panel, .lia-ocrbar, .lia-ocr-loadwrap')) return false;
    if (el.closest('[data-snapshot-admin="1"]')) return false;

    if (el.matches('input')){
      const type = String(el.type || 'text').toLowerCase();
      if (el.disabled || el.readOnly) return false;
      if (type === 'hidden' || type === 'button' || type === 'submit' || type === 'reset') return false;
      if (type === 'checkbox' || type === 'radio' || type === 'range' || type === 'color' || type === 'file') return false;
      return true;
    }

    if (el.matches('textarea')){
      if (el.disabled || el.readOnly) return false;
      return true;
    }

    if (el.getAttribute('contenteditable') === 'true') return true;
    if (el.getAttribute('role') === 'textbox' && el.getAttribute('aria-readonly') !== 'true') return true;
    return false;
  }

  function getQuizInputCandidates(){
    const nodes = Array.from(document.querySelectorAll(
      'input, textarea, [contenteditable="true"], [role="textbox"]'
    ));

    const out = [];
    for (let i = 0; i < nodes.length; i++){
      const el = nodes[i];
      if (!isEditableInputField(el)) continue;
      if (!isElementVisible(el)) continue;
      out.push(el);
    }
    return out;
  }

  function getPathBBox(item){
    if (!item || item.kind !== 'path' || item.tool !== 'pen' || !Array.isArray(item.points) || !item.points.length) return null;

    let xMin = Infinity;
    let yMin = Infinity;
    let xMax = -Infinity;
    let yMax = -Infinity;

    for (let i = 0; i < item.points.length; i++){
      const p = fromRel(item.points[i]);
      if (!isFinite(p.x) || !isFinite(p.y)) continue;
      if (p.x < xMin) xMin = p.x;
      if (p.y < yMin) yMin = p.y;
      if (p.x > xMax) xMax = p.x;
      if (p.y > yMax) yMax = p.y;
    }

    if (!isFinite(xMin) || !isFinite(yMin) || !isFinite(xMax) || !isFinite(yMax)) return null;

    const pad = Math.max(2, getLineWidthPx(item) * 0.8);
    return {
      x: xMin - pad,
      y: yMin - pad,
      w: Math.max(1, (xMax - xMin) + 2 * pad),
      h: Math.max(1, (yMax - yMin) + 2 * pad)
    };
  }

  function unionBox(a, b){
    if (!a) return b ? { x:b.x, y:b.y, w:b.w, h:b.h } : null;
    if (!b) return { x:a.x, y:a.y, w:a.w, h:a.h };

    const x0 = Math.min(a.x, b.x);
    const y0 = Math.min(a.y, b.y);
    const x1 = Math.max(a.x + a.w, b.x + b.w);
    const y1 = Math.max(a.y + a.h, b.y + b.h);
    return { x:x0, y:y0, w:Math.max(1, x1 - x0), h:Math.max(1, y1 - y0) };
  }

  function boxDistance(a, b){
    if (!a || !b) return Infinity;
    const ax0 = a.x, ay0 = a.y, ax1 = a.x + a.w, ay1 = a.y + a.h;
    const bx0 = b.x, by0 = b.y, bx1 = b.x + b.w, by1 = b.y + b.h;

    const dx = Math.max(0, Math.max(bx0 - ax1, ax0 - bx1));
    const dy = Math.max(0, Math.max(by0 - ay1, ay0 - by1));
    return Math.hypot(dx, dy);
  }

  function getRecentAnnotationSource(){
    const slide = currentSlide();
    if (!slide || !Array.isArray(slide.items) || !slide.items.length) return null;

    const recent = [];
    for (let i = slide.items.length - 1; i >= 0; i--){
      const it = slide.items[i];
      if (!it || it.kind !== 'path' || it.tool !== 'pen') continue;
      const bb = getPathBBox(it);
      if (!bb) continue;
      recent.push({ item: it, box: bb });
      if (recent.length >= 50) break;
    }

    if (!recent.length) return null;

    const selected = [recent[0]];
    let cluster = recent[0].box;

    for (let i = 1; i < recent.length; i++){
      const cand = recent[i];
      if (boxDistance(cluster, cand.box) > 110) continue;
      selected.push(cand);
      cluster = unionBox(cluster, cand.box);
      if (selected.length >= 14) break;
    }

    return {
      box: cluster,
      paths: selected.map(v => v.item)
    };
  }

  function renderAnnotationSourceToCanvas(source){
    if (source && source.canvas instanceof HTMLCanvasElement){
      return source.canvas;
    }

    if (!source || !source.box || !Array.isArray(source.paths) || !source.paths.length) return null;

    const pad = 16;
    const rawW = Math.max(1, Math.ceil(source.box.w + 2 * pad));
    const rawH = Math.max(1, Math.ceil(source.box.h + 2 * pad));

    const maxSide = Math.max(rawW, rawH);
    const scale = clamp(maxSide < 380 ? (380 / maxSide) : 1, 1, 3);

    const c = document.createElement('canvas');
    c.width = Math.max(1, Math.round(rawW * scale));
    c.height = Math.max(1, Math.round(rawH * scale));

    const cx = c.getContext('2d', { willReadFrequently:true });
    if (!cx) return null;

    cx.setTransform(scale, 0, 0, scale, 0, 0);
    cx.fillStyle = '#ffffff';
    cx.fillRect(0, 0, rawW, rawH);

    cx.strokeStyle = '#000000';
    cx.fillStyle = '#000000';
    cx.globalAlpha = 1;
    cx.lineCap = 'round';
    cx.lineJoin = 'round';

    const offX = source.box.x - pad;
    const offY = source.box.y - pad;

    for (let i = 0; i < source.paths.length; i++){
      const item = source.paths[i];
      if (!item || !Array.isArray(item.points) || !item.points.length) continue;

      const width = Math.max(1, getLineWidthPx(item));
      cx.lineWidth = width;

      if (item.points.length === 1){
        const p = fromRel(item.points[0]);
        cx.beginPath();
        cx.arc(p.x - offX, p.y - offY, Math.max(0.8, width / 2), 0, Math.PI * 2);
        cx.fill();
        continue;
      }

      const p0 = fromRel(item.points[0]);
      cx.beginPath();
      cx.moveTo(p0.x - offX, p0.y - offY);

      for (let j = 1; j < item.points.length; j++){
        const p = fromRel(item.points[j]);
        cx.lineTo(p.x - offX, p.y - offY);
      }
      cx.stroke();
    }

    return c;
  }

  function captureOverlayRectCanvas(rect){
    const rr = normalizeRect(rect);
    if (!rr || !STATE.canvas || !STATE.cssW || !STATE.cssH) return null;

    const scaleX = STATE.canvas.width / Math.max(1, STATE.cssW);
    const scaleY = STATE.canvas.height / Math.max(1, STATE.cssH);

    const sx = Math.max(0, Math.floor(rr.x0 * scaleX));
    const sy = Math.max(0, Math.floor(rr.y0 * scaleY));
    const sw = Math.max(1, Math.ceil((rr.x1 - rr.x0) * scaleX));
    const sh = Math.max(1, Math.ceil((rr.y1 - rr.y0) * scaleY));

    if (sw < 1 || sh < 1) return null;

    const maxSide = Math.max(sw, sh);
    const upscale = clamp(maxSide < 640 ? (640 / maxSide) : 1, 1, 3);

    const out = document.createElement('canvas');
    out.width = Math.max(1, Math.round(sw * upscale));
    out.height = Math.max(1, Math.round(sh * upscale));

    const cx = out.getContext('2d', { willReadFrequently:true });
    if (!cx) return null;

    cx.fillStyle = '#ffffff';
    cx.fillRect(0, 0, out.width, out.height);
    cx.drawImage(STATE.canvas, sx, sy, sw, sh, 0, 0, out.width, out.height);

    return out;
  }

  function findNearestQuizInputForSource(source){
    if (!source || !source.box || !STATE.canvas) return null;
    const candidates = getQuizInputCandidates();
    if (!candidates.length) return null;

    const r = STATE.canvas.getBoundingClientRect();
    const ax = r.left + source.box.x + source.box.w / 2;
    const ay = r.top + source.box.y + source.box.h / 2;

    let best = null;
    let bestDist = Infinity;

    for (let i = 0; i < candidates.length; i++){
      const el = candidates[i];
      const er = el.getBoundingClientRect();
      const ex = er.left + er.width / 2;
      const ey = er.top + er.height / 2;
      const d = Math.hypot(ex - ax, ey - ay);

      if (d < bestDist){
        bestDist = d;
        best = el;
      }
    }

    return best;
  }

  function pathIntersectsRect(item, rect){
    if (!item || item.kind !== 'path' || item.tool !== 'pen' || !Array.isArray(item.points) || !item.points.length) return false;

    const pad = Math.max(2, getLineWidthPx(item) * 0.8);
    const x0 = rect.x0 - pad;
    const y0 = rect.y0 - pad;
    const x1 = rect.x1 + pad;
    const y1 = rect.y1 + pad;

    for (let i = 0; i < item.points.length; i++){
      const p = fromRel(item.points[i]);
      if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1) return true;
    }

    return false;
  }

  function getRectAnnotationSource(){
    const rect = normalizeRect(STATE.ocrRect);
    if (!rect) return null;

    const directCrop = captureOverlayRectCanvas(rect);
    if (directCrop){
      return {
        box: {
          x: rect.x0,
          y: rect.y0,
          w: Math.max(1, rect.x1 - rect.x0),
          h: Math.max(1, rect.y1 - rect.y0)
        },
        canvas: directCrop
      };
    }

    const slide = currentSlide();
    if (!slide || !Array.isArray(slide.items)) return null;

    const paths = [];
    for (let i = 0; i < slide.items.length; i++){
      const it = slide.items[i];
      if (pathIntersectsRect(it, rect)) paths.push(it);
    }

    if (!paths.length) return null;
    return {
      box: {
        x: rect.x0,
        y: rect.y0,
        w: Math.max(1, rect.x1 - rect.x0),
        h: Math.max(1, rect.y1 - rect.y0)
      },
      paths: paths
    };
  }

  function getOcrEngine(){
    const own = window.__LIA_TEX_OCR__;
    if (own && typeof own.recognize === 'function') return own;

    try{
      const rw = getRootWindow();
      const rootOcr = rw && rw.__LIA_TEX_OCR__;
      if (rootOcr && typeof rootOcr.recognize === 'function') return rootOcr;
    }catch(_){ }

    return null;
  }

  function applyValueToField(el, value){
    const v = String(value == null ? '' : value);

    try{
      if (el.matches('input, textarea')){
        el.value = v;
        el.dispatchEvent(new Event('input', { bubbles:true }));
        el.dispatchEvent(new Event('change', { bubbles:true }));
        return true;
      }

      if (el.getAttribute('contenteditable') === 'true' || el.getAttribute('role') === 'textbox'){
        el.textContent = v;
        el.dispatchEvent(new Event('input', { bubbles:true }));
        el.dispatchEvent(new Event('change', { bubbles:true }));
        return true;
      }
    }catch(_){ }

    return false;
  }

  function readFieldText(el){
    if (!el || !(el instanceof Element)) return '';
    try{
      if (el.matches('input, textarea')) return String(el.value == null ? '' : el.value);
      if (el.getAttribute('contenteditable') === 'true' || el.getAttribute('role') === 'textbox') return String(el.textContent == null ? '' : el.textContent);
    }catch(_){ }
    return '';
  }

  function restoreTexEditor(el){
    if (!el || !(el instanceof Element)) return;
    const box = el.__liaAnnotTexPreviewBox || null;
    if (box && box.isConnected){
      box.style.display = 'none';
      box.dataset.on = '0';
    }

    const showDisplay = String(el.__liaAnnotDisplay || '').trim() || '';
    el.style.display = showDisplay;

    try{
      if (!el.matches('input, textarea') && el.getAttribute('contenteditable') !== 'true') return;
      el.focus({ preventScroll:true });
      if (el.matches('input, textarea') && typeof el.select === 'function') el.select();
    }catch(_){ }
  }

  function syncTexPreviewFromField(el){
    if (!el || !(el instanceof Element)) return;
    const text = readFieldText(el).trim();
    const box = el.__liaAnnotTexPreviewBox || null;

    if (!text){
      if (box && box.isConnected){
        box.style.display = 'none';
        box.dataset.on = '0';
      }
      const showDisplay = String(el.__liaAnnotDisplay || '').trim() || '';
      el.style.display = showDisplay;
      return;
    }

    showTexPreviewNearField(el, text);
  }

  function bindTexPreviewBridge(el){
    if (!el || !(el instanceof Element)) return;
    if (el.__liaAnnotTexBridgeBound) return;
    el.__liaAnnotTexBridgeBound = true;

    try{
      const cs = getComputedStyle(el);
      const d = String(cs.display || '').trim();
      if (d && d !== 'none') el.__liaAnnotDisplay = d;
    }catch(_){ }

    el.addEventListener('blur', function(){
      setTimeout(function(){
        syncTexPreviewFromField(el);
      }, 0);
    });

    el.addEventListener('keydown', function(e){
      const key = String((e && e.key) || '');
      const isTextarea = el.matches('textarea') || el.getAttribute('contenteditable') === 'true';

      if (key === 'Escape'){
        e.preventDefault();
        syncTexPreviewFromField(el);
        return;
      }

      if (key === 'Enter' && !isTextarea){
        e.preventDefault();
        syncTexPreviewFromField(el);
      }
    });
  }

  let __liaAnnotKatexLoadPromise = null;
  function ensureKatexForAnnotation(){
    if (window.katex && typeof window.katex.render === 'function'){
      return Promise.resolve(window.katex);
    }

    if (__liaAnnotKatexLoadPromise) return __liaAnnotKatexLoadPromise;

    __liaAnnotKatexLoadPromise = (async function(){
      if (!document.getElementById('__lia_annot_katex_css_v1')){
        const link = document.createElement('link');
        link.id = '__lia_annot_katex_css_v1';
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css';
        (document.head || document.documentElement).appendChild(link);
      }

      const mod = await import(/* @vite-ignore */ 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.mjs');
      const k = mod && (mod.default || mod);
      if (!k || typeof k.render !== 'function') throw new Error('KaTeX render not available');
      try{ if (!window.katex) window.katex = k; }catch(_){ }
      return k;
    })();

    return __liaAnnotKatexLoadPromise;
  }

  function showTexPreviewNearField(el, tex){
    if (!el || !(el instanceof Element)) return;
    const t = String(tex || '').trim();
    if (!t) return;

    bindTexPreviewBridge(el);

    let box = el.__liaAnnotTexPreviewBox || null;
    if (!box || !box.isConnected){
      box = document.createElement('span');
      box.className = 'lia-annot-tex-preview';
      box.innerHTML = '<span class="lia-annot-tex-preview-math"></span><span class="lia-annot-tex-preview-hint">Bearbeiten</span>';
      el.insertAdjacentElement('afterend', box);
      el.__liaAnnotTexPreviewBox = box;

      box.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        restoreTexEditor(el);
      });
    }

    const target = box.querySelector('.lia-annot-tex-preview-math');
    if (!target) return;

    target.textContent = t;

    ensureKatexForAnnotation().then(function(katex){
      if (!target.isConnected) return;
      target.textContent = '';
      try{
        katex.render(t, target, { throwOnError:false, displayMode:false });
      }catch(_){
        target.textContent = t;
      }

      box.dataset.on = '1';
      box.style.display = 'inline-flex';
      el.style.display = 'none';
    }).catch(function(){
      if (!target.isConnected) return;
      target.textContent = t;
      box.dataset.on = '1';
      box.style.display = 'inline-flex';
      el.style.display = 'none';
    });
  }

  function cleanOcrText(s){
    let t = String(s == null ? '' : s).trim();
    if (!t) return '';

    if (t.startsWith('$$') && t.endsWith('$$')) t = t.slice(2, -2).trim();
    if (t.startsWith('$') && t.endsWith('$')) t = t.slice(1, -1).trim();
    if (t.startsWith('\\[') && t.endsWith('\\]')) t = t.slice(2, -2).trim();

    return t;
  }

  function squashWs(s){
    const src = String(s || '');
    let out = '';
    let wasWs = false;
    for (let i = 0; i < src.length; i++){
      const ch = src[i];
      const isWs = (ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t' || ch === '\f');
      if (isWs){
        if (!wasWs) out += ' ';
        wasWs = true;
      }else{
        out += ch;
        wasWs = false;
      }
    }
    return out.trim();
  }

  function normalizeTimesVsX(input){
    const s = String(input || '');
    const cmd = '\\times';
    if (!s || s.indexOf(cmd) < 0) return s;

    function isWs(ch){
      return ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t' || ch === '\f';
    }
    function isLeftOperand(ch){
      if (!ch) return false;
      const c = ch.charCodeAt(0);
      return (c >= 48 && c <= 57) || (c >= 65 && c <= 90) || (c >= 97 && c <= 122) || ch === ')' || ch === ']' || ch === '}';
    }
    function isRightOperand(ch){
      if (!ch) return false;
      const c = ch.charCodeAt(0);
      return (c >= 48 && c <= 57) || (c >= 65 && c <= 90) || (c >= 97 && c <= 122) || ch === '(' || ch === '[' || ch === '{' || ch === '\\';
    }

    let out = '';
    let i = 0;
    while (i < s.length){
      if (s.slice(i, i + cmd.length) === cmd){
        let j = out.length - 1;
        while (j >= 0 && isWs(out[j])) j--;
        const prev = j >= 0 ? out[j] : '';

        let k = i + cmd.length;
        while (k < s.length && isWs(s[k])) k++;
        const next = k < s.length ? s[k] : '';

        out += (isLeftOperand(prev) && isRightOperand(next)) ? '\\cdot' : 'x';
        i += cmd.length;
        continue;
      }
      out += s[i];
      i += 1;
    }

    return out;
  }

  function tidyTrocrText(s){
    const t = squashWs(s);
    const ops = '+-=*/()[]{}';
    let out = '';
    for (let i = 0; i < t.length; i++){
      const ch = t[i];
      if (ch === ' '){
        const prev = i > 0 ? t[i - 1] : '';
        const next = i + 1 < t.length ? t[i + 1] : '';
        if (ops.indexOf(prev) >= 0 || ops.indexOf(next) >= 0) continue;
        out += ' ';
      }else{
        out += ch;
      }
    }
    return out.trim();
  }

  function mathLooksIncomplete(s){
    const t = String(s || '').trim();
    if (!t) return true;
    if (/[+\-*/=,:;\\]$/.test(t)) return true;
    if (/[{[(]$/.test(t)) return true;

    let curly = 0;
    let square = 0;
    let round = 0;
    let escaped = false;

    for (let i = 0; i < t.length; i++){
      const ch = t[i];
      if (escaped){ escaped = false; continue; }
      if (ch === '\\'){ escaped = true; continue; }
      if (ch === '{') curly++;
      else if (ch === '}') curly--;
      else if (ch === '[') square++;
      else if (ch === ']') square--;
      else if (ch === '(') round++;
      else if (ch === ')') round--;
    }

    return curly !== 0 || square !== 0 || round !== 0;
  }

  function ocrNormalizeSize(c){
    const maxSide = Math.max(c.width, c.height);
    let scale = 1;
    if (maxSide < 420) scale = 420 / maxSide;
    if (maxSide > 1400) scale = 1400 / maxSide;
    scale = clamp(scale, 0.5, 4.0);
    if (Math.abs(scale - 1) < 0.06) return c;

    const out = document.createElement('canvas');
    out.width = Math.max(1, Math.round(c.width * scale));
    out.height = Math.max(1, Math.round(c.height * scale));
    const x = out.getContext('2d', { willReadFrequently:true });
    if (!x) return c;
    x.fillStyle = '#fff';
    x.fillRect(0, 0, out.width, out.height);
    x.drawImage(c, 0, 0, out.width, out.height);
    return out;
  }

  function ocrPreprocessCanvas(src){
    const c0 = document.createElement('canvas');
    c0.width = Math.max(1, src.width | 0);
    c0.height = Math.max(1, src.height | 0);
    const x0 = c0.getContext('2d', { willReadFrequently:true });
    if (!x0) return src;
    x0.fillStyle = '#fff';
    x0.fillRect(0, 0, c0.width, c0.height);
    x0.drawImage(src, 0, 0);

    const img = x0.getImageData(0, 0, c0.width, c0.height);
    const d = img.data;
    const W = c0.width;
    const H = c0.height;
    const thr = 200;
    const bin = new Uint8Array(W * H);

    for (let i = 0, p = 0; p < bin.length; p++, i += 4){
      const gray = (d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114);
      bin[p] = (gray < thr) ? 1 : 0;
    }

    let xMin = W, yMin = H, xMax = -1, yMax = -1;
    for (let y = 0; y < H; y++){
      for (let x = 0; x < W; x++){
        if (!bin[y * W + x]) continue;
        if (x < xMin) xMin = x;
        if (y < yMin) yMin = y;
        if (x > xMax) xMax = x;
        if (y > yMax) yMax = y;
      }
    }
    if (xMax < 0) return c0;

    const pad = 18;
    xMin = Math.max(0, xMin - pad);
    yMin = Math.max(0, yMin - pad);
    xMax = Math.min(W - 1, xMax + pad);
    yMax = Math.min(H - 1, yMax + pad);

    const cw = Math.max(1, xMax - xMin + 1);
    const ch = Math.max(1, yMax - yMin + 1);

    const c1 = document.createElement('canvas');
    c1.width = cw;
    c1.height = ch;
    const x1 = c1.getContext('2d', { willReadFrequently:true });
    if (!x1) return c0;

    const out = x1.createImageData(cw, ch);
    const od = out.data;
    for (let y = 0; y < ch; y++){
      for (let x = 0; x < cw; x++){
        const v = bin[(yMin + y) * W + (xMin + x)] ? 0 : 255;
        const idx = (y * cw + x) * 4;
        od[idx] = v;
        od[idx + 1] = v;
        od[idx + 2] = v;
        od[idx + 3] = 255;
      }
    }
    x1.putImageData(out, 0, 0);

    const target = 512;
    const m = Math.max(cw, ch);
    let scale = target / m;
    if (scale < 0.75) scale = 0.75;
    if (scale > 3.5) scale = 3.5;

    const c2 = document.createElement('canvas');
    c2.width = Math.max(1, Math.round(cw * scale));
    c2.height = Math.max(1, Math.round(ch * scale));
    const x2 = c2.getContext('2d', { willReadFrequently:true });
    if (!x2) return c1;
    x2.fillStyle = '#fff';
    x2.fillRect(0, 0, c2.width, c2.height);
    x2.imageSmoothingEnabled = true;
    x2.drawImage(c1, 0, 0, c2.width, c2.height);
    return c2;
  }

  function ocrAddPadding(canvas, px){
    const c = document.createElement('canvas');
    c.width = Math.max(1, canvas.width + px * 2);
    c.height = Math.max(1, canvas.height + px * 2);
    const ctx = c.getContext('2d', { willReadFrequently:true });
    if (!ctx) return canvas;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.drawImage(canvas, px, px);
    return c;
  }

  function ocrDarkenCrop(canvas, factor){
    const c = document.createElement('canvas');
    c.width = canvas.width;
    c.height = canvas.height;
    const ctx = c.getContext('2d', { willReadFrequently:true });
    if (!ctx) return canvas;
    ctx.drawImage(canvas, 0, 0);
    const img = ctx.getImageData(0, 0, c.width, c.height);
    const d = img.data;
    const inv = 1 / Math.max(1, factor);
    for (let i = 0; i < d.length; i += 4){
      d[i] = Math.round(d[i] * inv);
      d[i + 1] = Math.round(d[i + 1] * inv);
      d[i + 2] = Math.round(d[i + 2] * inv);
    }
    ctx.putImageData(img, 0, 0);
    return c;
  }

  function scoreLatex(s){
    const t = String(s || '').trim();
    if (!t) return -9999;
    return mathLooksIncomplete(t) ? (t.length - 5000) : t.length;
  }

  async function ocrVotingRecognize(engine, crop){
    let a = crop;
    try{ a = ocrNormalizeSize(ocrPreprocessCanvas(crop)); }catch(_){ }

    let b = a;
    try{ b = ocrNormalizeSize(ocrAddPadding(ocrPreprocessCanvas(crop), 20)); }catch(_){ }

    let c = a;
    try{ c = ocrNormalizeSize(ocrPreprocessCanvas(ocrDarkenCrop(crop, 1.35))); }catch(_){ }

    const opts = { max_new_tokens: 128, do_sample:false, temperature:0, __silent:true };
    const results = await Promise.all([
      engine.recognize(a, opts).catch(function(){ return ''; }),
      engine.recognize(b, opts).catch(function(){ return ''; }),
      engine.recognize(c, opts).catch(function(){ return ''; })
    ]);

    let best = results[0] || '';
    let bestScore = scoreLatex(best);
    for (let i = 1; i < results.length; i++){
      const sc = scoreLatex(results[i]);
      if (sc > bestScore){
        bestScore = sc;
        best = results[i];
      }
    }
    return best;
  }

  async function ensurePreferredOcrModel(ocr){
    if (!ocr || typeof ocr !== 'object') return;
    let preferred = null;
    try{ preferred = localStorage.getItem('__LIA_TEX_OCR_MODEL__'); }catch(_){ }
    preferred = String(preferred || '').trim();
    if (!preferred) return;

    const current = String(ocr.model || '').trim();
    if (current === preferred){
      STATE.ocrModelSynced = preferred;
      return;
    }
    if (STATE.ocrModelSynced === preferred) return;

    if (typeof ocr.setModel === 'function'){
      try{
        await ocr.setModel(preferred);
        STATE.ocrModelSynced = preferred;
      }catch(_){ }
    }
  }

  function isOcrAvailable(){
    return !!getOcrEngine();
  }

  async function transferAnnotationToNearestQuiz(opts){
    const o = (opts && typeof opts === 'object') ? opts : {};
    const useRect = (o.useRect === true);

    if (STATE.ocrBusy) return;
    if (isReadOnly()) return;
    if (!STORE.ui.visible) return;

    const ocr = getOcrEngine();
    if (!ocr || typeof ocr.recognize !== 'function') return;

    await ensurePreferredOcrModel(ocr);

    const source = useRect
      ? (getRectAnnotationSource() || getRecentAnnotationSource())
      : (getRectAnnotationSource() || getRecentAnnotationSource());
    if (!source) return;

    const target = findNearestQuizInputForSource(source);
    if (!target) return;

    const crop = renderAnnotationSourceToCanvas(source);
    if (!crop) return;

    STATE.ocrBusy = true;
    if (STATE.ocrActionBtn){
      STATE.ocrActionBtn.disabled = true;
      STATE.ocrActionBtn.textContent = 'Schrifterkennung läuft...';
    }
    startRectProgressPseudo();
    updateToolbar();

    try{
      if (typeof ocr.ensureLoaded === 'function'){
        await ocr.ensureLoaded(false);
      }

      let raw = '';
      try{
        raw = await ocrVotingRecognize(ocr, crop);
      }catch(_){
        raw = await ocr.recognize(crop, {
          max_new_tokens: 128,
          do_sample: false,
          temperature: 0
        });
      }

      const modelName = String(ocr.model || '').toLowerCase();
      let latex = modelName.indexOf('trocr') !== -1
        ? tidyTrocrText(raw)
        : cleanOcrText(raw);
      latex = normalizeTimesVsX(latex);
      latex = String(latex || '').replace(/\s*\\div\s*/g, ':');
      if (!latex) return;

      const ok = applyValueToField(target, latex);
      if (!ok) return;

      showTexPreviewNearField(target, latex);

      if (STATE.ocrActionBtn) STATE.ocrActionBtn.textContent = '✅ übernommen';

      try{
        if (STATE.toolbar && STATE.toolbar.isConnected){
          const b = STATE.toolbar.querySelector('.lia-annot-btn[data-act="ocr-transfer"]');
          if (b){
            const oldTitle = b.title;
            b.title = 'Als Lösung übergeben: OK';
            setTimeout(function(){
              if (b && b.isConnected) b.title = oldTitle || 'Als Lösung übergeben';
            }, 1200);
          }
        }
      }catch(_){ }
    }catch(_){
      // intentionally silent to avoid blocking the annotation workflow
      if (STATE.ocrActionBtn) STATE.ocrActionBtn.textContent = '⚠ Fehler';
    }finally{
      STATE.ocrBusy = false;
      stopRectProgressPseudo(1);
      if (STATE.ocrActionBtn){
        const btnRef = STATE.ocrActionBtn;
        setTimeout(function(){
          if (!btnRef || !btnRef.isConnected) return;
          btnRef.disabled = false;
          btnRef.textContent = 'Als Lösung übergeben';
        }, 900);
      }
      updateToolbar();
      updateOcrWidgetsPosition();
    }
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
    .lia-annot-btn[data-act="ocr-transfer"] svg{ transform: translateX(1px); }
    .lia-annot-btn[data-act="toggle"] svg{ transform: translateX(1px); }

    .lia-annot-rect-action{
      position: fixed;
      z-index: 10041;
      display: none;
      right: auto;
      bottom: auto;
      padding: 6px 9px;
      border-radius: 999px;
      border: 2px solid var(--lia-annot-accent);
      background: var(--lia-annot-accent);
      color: #fff;
      font-weight: 800;
      font-size: 0.75em;
      cursor: pointer;
      user-select: none;
      line-height: 1;
      white-space: nowrap;
      pointer-events: auto;
    }

    .lia-annot-rect-action:disabled{
      opacity: .7;
      cursor: wait;
    }

    .lia-annot-rect-action:active{
      transform: translateY(1px);
    }

    .lia-annot-rect-close{
      position: fixed;
      z-index: 10042;
      display: none;
      width: 24px;
      height: 24px;
      padding: 0;
      border-radius: 999px;
      border: 2px solid var(--lia-annot-accent);
      background: transparent;
      cursor: pointer;
      user-select: none;
      line-height: 0;
      pointer-events: auto;
    }

    .lia-annot-rect-close svg{
      width: 14px;
      height: 14px;
      display: block;
      margin: auto;
    }

    .lia-annot-rect-close:hover{
      background: var(--lia-annot-accent);
      color: #fff;
    }

    .lia-annot-rect-close:active{
      transform: translateY(1px);
    }

    .lia-annot-rect-progress{
      position: fixed;
      z-index: 10041;
      display: none;
      left: 0;
      top: 0;
      padding: 4px 8px;
      border-radius: 999px;
      border: 2px solid var(--lia-annot-border);
      background: rgba(0,0,0,0.10);
      backdrop-filter: blur(6px);
      box-sizing: border-box;
      align-items: center;
      gap: 8px;
      pointer-events: none;
    }

    .lia-annot-rect-progress[data-on="1"]{
      display: flex;
    }

    .lia-annot-rect-progbar{
      flex: 1 1 auto;
      height: 8px;
      border-radius: 999px;
      border: 2px solid var(--lia-annot-border);
      overflow: hidden;
      box-sizing: border-box;
      background: transparent;
    }

    .lia-annot-rect-progfill{
      height: 100%;
      width: 0%;
      background: var(--lia-annot-accent);
    }

    .lia-annot-rect-progtxt{
      font-weight: 850;
      font-size: 0.8em;
      min-width: 3.2em;
      text-align: right;
    }

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

    .lia-annot-tex-preview{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-left: 8px;
      max-width: min(72vw, 520px);
      padding: 4px 10px;
      border: 2px solid var(--lia-annot-accent);
      border-radius: 999px;
      box-sizing: border-box;
      vertical-align: middle;
      background: transparent;
      cursor: pointer;
    }

    .lia-annot-tex-preview:hover{
      background: rgba(0,0,0,0.04);
    }

    .lia-annot-tex-preview-math{
      min-width: 0;
      overflow: visible;
      white-space: nowrap;
      flex: 0 0 auto;
    }

    .lia-annot-tex-preview-hint{
      font-size: 0.78em;
      font-weight: 800;
      opacity: .72;
      white-space: nowrap;
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

    .lia-annot-eraser-ring{
      position: absolute;
      left: 0;
      top: 0;
      width: 12px;
      height: 12px;
      border-radius: 999px;
      box-sizing: border-box;
      border: 2px solid var(--lia-annot-accent);
      background: transparent;
      box-shadow: 0 0 0 1px var(--lia-annot-border);
      pointer-events: none;
      display: none;
      z-index: 501;
      transform: translate(-50%, -50%);
    }

    .lia-annot-eraser-ring[data-on="1"]{
      display: block;
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

  function iconOcrTransfer(){
    return `
    <svg viewBox="0 0 24 24" aria-hidden="true" style="transform: translateX(0.5px);">
      <path class="ico-stroke" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"
        d="M4.1 4.6 H19.2 Q20.9 4.6 20.9 6.3 V16.0 M17.2 19.8 H4.1 Q2.4 19.8 2.4 18.1 V6.3 Q2.4 4.6 4.1 4.6"/>
      <path class="ico-stroke" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"
        d="M5.2 12.7l1.9 1.9 4.0-4.8"/>
      <path class="ico-stroke" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"
        d="M13.8 9.9c0-2.2 4.8-2.2 4.8 0 0 1.6-2.4 1.8-2.4 3.6"/>
      <circle cx="16.2" cy="16.6" r="0.92" class="ico-fill"/>
      <path class="ico-stroke" stroke-width="1.4" stroke-linecap="round" d="M19.4 19.0H24.0 M21.7 16.7V21.3"/>
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
        <button class="lia-annot-btn" type="button" data-act="ocr-transfer" aria-label="Marker-Rechteck" data-snapshot-admin="1">${iconOcrTransfer()}</button>
        <button class="lia-annot-btn" type="button" data-act="toggle" aria-label="Annotation anzeigen/ausblenden" data-snapshot-admin="1">${iconEye(true)}</button>
      </div>

      <div class="lia-annot-panel" data-open="0"></div>
    `;

    (document.body || document.documentElement).appendChild(bar);

    bar.addEventListener('click', function(e){
      const btn = e.target && e.target.closest ? e.target.closest('button[data-act]') : null;
      const colorBtn = e.target && e.target.closest ? e.target.closest('button[data-color]') : null;

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

      if (act === 'ocr-transfer'){
        if (isReadOnly()) return;
        const same = (STORE.ui.mode === 'ocr');
        STORE.ui.mode = same ? 'cursor' : 'ocr';
        if (STORE.ui.mode !== 'ocr'){
          clearOcrRect();
        }
        STORE.ui.panelOpen = false;
        syncOverlayInteractivity();
        updateToolbar();
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
    const open = (STORE.ui.panelOpen && !ro) ? '1' : '0';
    const wantedMode = (STORE.ui.panelMode === 'eraser') ? 'eraser' : 'pen';
    const builtMode = String(panel.dataset.builtMode || '');
    const builtRo   = String(panel.dataset.builtRo || '');

    panel.dataset.open = open;

    const needsRebuild =
      !panel.firstElementChild ||
      builtMode !== wantedMode ||
      builtRo !== String(ro ? 1 : 0);

    if (needsRebuild){
      if (wantedMode === 'eraser'){
        panel.innerHTML = buildEraserPanelHTML();
      }else{
        panel.innerHTML = buildPenPanelHTML();
      }

      panel.dataset.builtMode = wantedMode;
      panel.dataset.builtRo = String(ro ? 1 : 0);
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
    if (act === 'ocr-transfer' && STORE.ui.mode === 'ocr') btn.dataset.active = '1';
    if (act === 'toggle'){
      btn.dataset.active = STORE.ui.visible ? '1' : '0';
      btn.innerHTML = iconEye(!!STORE.ui.visible);
    }

    if (act === 'undo'){
      btn.disabled = ro || slide.items.length === 0;
    }else if (act === 'redo'){
      btn.disabled = ro || slide.redo.length === 0;
    }else if (act === 'ocr-transfer'){
      const hasOcr = isOcrAvailable();
      btn.style.display = hasOcr ? '' : 'none';
      btn.title = hasOcr
        ? 'Marker-Rechteck'
        : 'OCR ist noch nicht geladen';
      btn.disabled = ro || !STORE.ui.visible || STATE.ocrBusy;
      if (!hasOcr) btn.disabled = true;
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

    const widthSlider = panel.querySelector('input[data-act="width"]');
    const alphaSlider = panel.querySelector('input[data-act="alpha"]');
    const eraserSlider = panel.querySelector('input[data-act="eraserWidth"]');

    const wTxt = panel.querySelector('[data-k="width"]');
    const aTxt = panel.querySelector('[data-k="alpha"]');
    const eTxt = panel.querySelector('[data-k="eraserWidth"]');

    if (widthSlider && document.activeElement !== widthSlider){
      widthSlider.value = String(STORE.ui.width);
    }
    if (alphaSlider && document.activeElement !== alphaSlider){
      alphaSlider.value = String(STORE.ui.alpha);
    }
    if (eraserSlider && document.activeElement !== eraserSlider){
      eraserSlider.value = String(STORE.ui.eraserWidth);
    }

    if (wTxt) wTxt.textContent = String(STORE.ui.width);
    if (aTxt) aTxt.textContent = Math.round(Number(STORE.ui.alpha || 1) * 100) + '%';
    if (eTxt) eTxt.textContent = String(STORE.ui.eraserWidth);
  }

  if (effectiveMode() === 'eraser' && STORE.ui.visible && !ro && STATE.lastPointer && STATE.lastPointer.inside){
    refreshEraserRing();
  }else{
    hideEraserRing();
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

  function rememberPointer(evt){
    const p = getLocalPos(evt);
    STATE.lastPointer = {
      x: p.x,
      y: p.y,
      inside: true,
      pointerType: String((evt && evt.pointerType) || '')
    };
    return p;
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

  function finishStroke(evt, keepMouseRing){
    if (STATE.drawing){
      evt.preventDefault();
      evt.stopPropagation();

      try{ STATE.canvas.releasePointerCapture(evt.pointerId); }catch(_){}
      STATE.drawing = false;
      STATE.activePath = null;
      requestRedraw();
      updateToolbar();
    }

    if (
      keepMouseRing &&
      evt &&
      evt.pointerType === 'mouse' &&
      STORE.ui.visible &&
      !isReadOnly() &&
      effectiveMode() === 'eraser'
    ){
      const p = rememberPointer(evt);
      updateEraserRing(p.x, p.y);
    }else{
      STATE.lastPointer.inside = false;
      hideEraserRing();
    }
  }

  STATE.canvas.addEventListener('pointerdown', function(evt){
    if (evt.pointerType === 'mouse' && evt.button !== 0) return;

    const p = rememberPointer(evt);

    if (!STORE.ui.visible || isReadOnly()){
      hideEraserRing();
      return;
    }

    const mode = effectiveMode();

    if (mode === 'eraser'){
      updateEraserRing(p.x, p.y);
    }else{
      hideEraserRing();
    }

    if (mode === 'ocr'){
      evt.preventDefault();
      evt.stopPropagation();

      if (STORE.ui.panelOpen){
        STORE.ui.panelOpen = false;
      }

      STATE.ocrDragging = true;
      STATE.ocrPointerId = evt.pointerId;
      STATE.ocrRect = { x0:p.x, y0:p.y, x1:p.x, y1:p.y };
      try{ STATE.canvas.setPointerCapture(evt.pointerId); }catch(_){ }
      updateOcrWidgetsPosition();
      requestRedraw();
      updateToolbar();
      return;
    }

    if (mode !== 'pen' && mode !== 'eraser') return;

    evt.preventDefault();
    evt.stopPropagation();

    if (STORE.ui.panelOpen){
      STORE.ui.panelOpen = false;
      updateToolbar();
    }

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
    const p = rememberPointer(evt);

    if (!isReadOnly() && STORE.ui.visible && effectiveMode() === 'eraser'){
      updateEraserRing(p.x, p.y);
    }else{
      hideEraserRing();
    }

    if (effectiveMode() === 'ocr' && STATE.ocrDragging && STATE.ocrRect){
      evt.preventDefault();
      evt.stopPropagation();
      STATE.ocrRect.x1 = p.x;
      STATE.ocrRect.y1 = p.y;
      updateOcrWidgetsPosition();
      requestRedraw();
      return;
    }

    if (!STATE.drawing || !STATE.activePath) return;

    evt.preventDefault();
    evt.stopPropagation();

    addPoint(STATE.activePath, p.x, p.y);
    requestRedraw();
  }, true);

  STATE.canvas.addEventListener('pointerup', function(evt){
    if (effectiveMode() === 'ocr' && STATE.ocrDragging){
      evt.preventDefault();
      evt.stopPropagation();
      try{ STATE.canvas.releasePointerCapture(evt.pointerId); }catch(_){ }
      STATE.ocrDragging = false;
      STATE.ocrPointerId = null;
      const rr = normalizeRect(STATE.ocrRect);
      if (!rr || (rr.x1 - rr.x0) < 10 || (rr.y1 - rr.y0) < 10){
        clearOcrRect();
      }else{
        STATE.ocrRect = rr;
        updateOcrWidgetsPosition();
        requestRedraw();
      }
      return;
    }

    finishStroke(evt, true);
  }, true);

  STATE.canvas.addEventListener('pointercancel', function(evt){
    if (STATE.ocrDragging){
      STATE.ocrDragging = false;
      STATE.ocrPointerId = null;
      updateOcrWidgetsPosition();
      requestRedraw();
      return;
    }

    finishStroke(evt, false);
  }, true);

  STATE.canvas.addEventListener('pointerleave', function(){
    STATE.lastPointer.inside = false;
    hideEraserRing();
    if (STATE.ocrDragging){
      STATE.ocrDragging = false;
      STATE.ocrPointerId = null;
      updateOcrWidgetsPosition();
      requestRedraw();
    }
  }, true);

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
    }

    let canvas = shell.querySelector('.lia-annot-canvas');
    if (!canvas){
      canvas = document.createElement('canvas');
      canvas.className = 'lia-annot-canvas';
      canvas.setAttribute('aria-label', 'Annotationsfläche');
      shell.appendChild(canvas);
    }

    let ring = shell.querySelector('.lia-annot-eraser-ring');
    if (!ring){
      ring = document.createElement('span');
      ring.className = 'lia-annot-eraser-ring';
      ring.dataset.on = '0';
      shell.appendChild(ring);
    }

    ensureOcrWidgets(shell);

    insertShellAfterHeader(host, shell);

    STATE.shell = shell;
    STATE.canvas = canvas;
    STATE.eraserRing = ring;
    STATE.ctx = STATE.canvas ? STATE.canvas.getContext('2d', { willReadFrequently:true }) : null;

    bindCanvasEvents();
    bindResizeObserver();
  }else{
    insertShellAfterHeader(host, STATE.shell);

    STATE.canvas = STATE.shell.querySelector('.lia-annot-canvas');
    STATE.eraserRing = STATE.shell.querySelector('.lia-annot-eraser-ring');
    STATE.ocrActionBtn = STATE.shell.querySelector('.lia-annot-rect-action');
    STATE.ocrCloseBtn = STATE.shell.querySelector('.lia-annot-rect-close');
    STATE.ocrProgress = STATE.shell.querySelector('.lia-annot-rect-progress');
    STATE.ocrProgressFill = STATE.ocrProgress ? STATE.ocrProgress.querySelector('.lia-annot-rect-progfill') : null;
    STATE.ocrProgressText = STATE.ocrProgress ? STATE.ocrProgress.querySelector('.lia-annot-rect-progtxt') : null;
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

  if (!visible){
    hideEraserRing();
    if (STATE.ocrActionBtn) STATE.ocrActionBtn.style.display = 'none';
    if (STATE.ocrCloseBtn) STATE.ocrCloseBtn.style.display = 'none';
    if (STATE.ocrProgress) STATE.ocrProgress.style.display = 'none';
    return;
  }

  if (!STATE.shell || !STATE.canvas){
    hideEraserRing();
    if (STATE.ocrActionBtn) STATE.ocrActionBtn.style.display = 'none';
    if (STATE.ocrCloseBtn) STATE.ocrCloseBtn.style.display = 'none';
    if (STATE.ocrProgress) STATE.ocrProgress.style.display = 'none';
    return;
  }

  STATE.shell.style.display = '';
  STATE.shell.dataset.hidden = '0';
  STATE.shell.dataset.mode = mode;
  STATE.shell.style.pointerEvents = 'none';

  if (mode === 'pen' || mode === 'eraser' || mode === 'ocr'){
    STATE.canvas.style.pointerEvents = 'auto';
    STATE.canvas.style.touchAction = 'none';
    STATE.canvas.style.cursor = 'crosshair';
  }else{
    STATE.canvas.style.pointerEvents = 'none';
    STATE.canvas.style.touchAction = 'auto';
    STATE.canvas.style.cursor = 'default';
  }

  if (mode === 'eraser'){
    refreshEraserRing();
  }else{
    hideEraserRing();
  }

  updateOcrWidgetsPosition();
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

    refreshEraserRing();
    updateOcrWidgetsPosition();
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

    const rr = normalizeRect(STATE.ocrRect);
    if (rr && STORE.ui.mode === 'ocr'){
      const w = rr.x1 - rr.x0;
      const h = rr.y1 - rr.y0;
      if (w > 0 && h > 0){
        const accent = getComputedStyle(document.documentElement).getPropertyValue('--lia-annot-accent').trim() || '#0b5fff';
        ctx.save();
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1;
        ctx.fillStyle = rgbaFromAny(accent, 0.28);
        ctx.fillRect(rr.x0, rr.y0, w, h);
        ctx.restore();
      }
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


  function roundFreezeNum(v){
    const n = Number(v);
    if (!isFinite(n)) return null;
    return Math.round(n * 10000) / 10000;
  }

  function sanitizeFreezePoint(pt){
    if (!pt || typeof pt !== 'object') return null;

    const x = roundFreezeNum(pt.x);
    const y = roundFreezeNum(pt.y);

    if (x === null || y === null) return null;

    return { x, y };
  }

  function sanitizeFreezeItem(item){
    if (!item || typeof item !== 'object') return null;
    if (item.kind !== 'path') return null;

    const pts = Array.isArray(item.points)
      ? item.points.map(sanitizeFreezePoint).filter(Boolean)
      : [];

    if (!pts.length) return null;

    const tool = (item.tool === 'eraser') ? 'eraser' : 'pen';
    const width = roundFreezeNum(item.width);
    const alpha = roundFreezeNum(item.alpha == null ? 1 : item.alpha);
    const baseW = roundFreezeNum(item.baseW);

    return {
      kind: 'path',
      tool: tool,
      color: String(item.color || '#ff0000'),
      width: width === null ? 1 : width,
      alpha: alpha === null ? 1 : alpha,
      baseW: baseW === null ? 1 : baseW,
      points: pts
    };
  }

  function sanitizeFreezeSlides(srcSlides){
    const out = {};

    if (!srcSlides || typeof srcSlides !== 'object') return out;

    for (const k in srcSlides){
      if (!Object.prototype.hasOwnProperty.call(srcSlides, k)) continue;

      const src = srcSlides[k];
      if (!src || typeof src !== 'object') continue;

      const items = Array.isArray(src.items)
        ? src.items.map(sanitizeFreezeItem).filter(Boolean)
        : [];

      if (!items.length) continue;

      out[String(k)] = {
        items: items,
        redo: []
      };
    }

    return out;
  }

  function hasFreezeData(){
    const slides = sanitizeFreezeSlides(STORE.slides);
    for (const k in slides){
      if (Object.prototype.hasOwnProperty.call(slides, k)) return true;
    }
    return false;
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

  function exportFreezeState(){
    return copyJson({
      version: 'lia-annotation-freeze-v1',
      ui: {
        visible: !!STORE.ui.visible
      },
      slides: sanitizeFreezeSlides(STORE.slides)
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

    ensureSlide(getSlideKey());
    ensureOverlay();
    syncOverlayInteractivity();
    requestSync();
    requestRedraw();
    updateToolbar();
    return true;
  }

  function importFreezeState(payload, opts){
    const o = (opts && typeof opts === 'object') ? opts : {};
    const replace = (o.replace !== false);

    if (!payload || typeof payload !== 'object') return false;

    if (replace){
      STORE.slides = {};
    }

    const slides = sanitizeFreezeSlides(payload.slides);

    for (const k in slides){
      if (!Object.prototype.hasOwnProperty.call(slides, k)) continue;
      STORE.slides[k] = {
        items: copyJson(slides[k].items) || [],
        redo: []
      };
    }

    if (payload.ui && typeof payload.ui === 'object'){
      if (typeof payload.ui.visible === 'boolean'){
        STORE.ui.visible = payload.ui.visible;
      }
    }

    ensureSlide(getSlideKey());
    ensureOverlay();
    syncOverlayInteractivity();
    requestSync();
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
    exportFreezeState,
    importState,
    importFreezeState,
    hasFreezeData,
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

  window.__LIA_ANNOTATION_FREEZE_EXPORT__ = function(){
    return exportFreezeState();
  };

  window.__LIA_ANNOTATION_FREEZE_IMPORT__ = function(payload, opts){
    return importFreezeState(payload, opts);
  };

  window.__LIA_ANNOTATION_FREEZE_HAS_DATA__ = function(){
    return hasFreezeData();
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

