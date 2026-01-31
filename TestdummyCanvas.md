<!--
version:  0.0.1
language: de
narrator: Deutsch Female

tags:
comment:
author: Martin Lommatzsch

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
        https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


@style
:root{
  --canvas-border: #000;
  --canvas-pen:    #000;
}

@media (prefers-color-scheme: dark){
  :root{
    --canvas-border: #fff;
    --canvas-pen:    #fff;
  }
}

/* äußerer Block: Canvas + Button darunter */
.lia-draw-block{
  width: 100%;
}

/* Canvas-Rahmen (nur Canvas, damit Toolstack zentriert bleibt) */
.lia-draw-wrap{
  width: 100%;
  border: 2px solid var(--canvas-border);
  border-radius: 10px;
  box-sizing: border-box;
  overflow: visible;
  position: relative;
}

canvas.lia-draw{
  width: 100%;
  height: 260px;
  display: block;
  background: transparent;
  touch-action: none;          /* wichtig für Touch-Pinch/Pan */
  cursor: crosshair;
  border-radius: 8px;
}

/* Stack links: Radierer oben, Farbe unten */
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

  background: var(--canvas-border); /* Stift wird per JS gesetzt */
}

/* Icon-Alignment: wirklich zentriert */
.lia-tool-btn svg{
  width: 14px;
  height: 14px;
  display: block;
  margin: 0;
  transform: translate(0,0);
}
.lia-tool-btn .ico-stroke{ stroke: var(--canvas-border); }
.lia-tool-btn .ico-fill{ fill: rgba(0,0,0,0); }

/* Radierer-Button: transparenter Hintergrund, Icon sichtbar */
.lia-eraser-btn{
  background: transparent;
}

/* aktiver Modus-Markierung */
.lia-tool-btn[data-active="1"]{
  outline: 2px solid var(--canvas-border);
  outline-offset: 2px;
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

/* Überschriften im Menü (NUR diese größer) */
.lia-tool-heading{
  font-size: 1.5rem;
  font-weight: 750;
  line-height: 1.1;
  padding-left: 2px;
}

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

/* Button unter der Canvas */
.lia-more-row{
  display: flex;
  justify-content: flex-end;
  margin-top: -8px;
}

/* "Mehr Platz..." als echter LiaScript-Button + kleiner skaliert */
.lia-more-btn.lia-btn{
  transform: scale(0.5);
  transform-origin: 100% 50%;
}

/* Fallback, falls lia-btn aus irgendeinem Grund nicht greift */
.lia-more-btn{
  white-space: pre;
}
@end































@onload
(function(){
  if (window.__liaDrawCanvasInit) return;
  window.__liaDrawCanvasInit = true;

  // --- Theme: border/pen passend zum *tatsächlichen* Hintergrund ---
  function parseRgb(s){
    const m = String(s).match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
    return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
  }
  function luminance(rgb){
    const [r,g,b] = rgb.map(v => v/255).map(c => (c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4)));
    return 0.2126*r + 0.7152*g + 0.0722*b;
  }
  function applyThemeVars(){
    try{
      const doc = (window.parent && window.parent.document) ? window.parent.document : document;
      const root = doc.documentElement;
      const bg = getComputedStyle(doc.body).backgroundColor || getComputedStyle(root).backgroundColor;
      const rgb = parseRgb(bg);
      const isDark = rgb ? (luminance(rgb) < 0.5) : false;
      const border = isDark ? '#fff' : '#000';
      root.style.setProperty('--canvas-border', border);
      root.style.setProperty('--canvas-pen', border);
    }catch(e){}
  }

  applyThemeVars();
  const mo = new MutationObserver(() => applyThemeVars());
  mo.observe(document.documentElement, { attributes:true, attributeFilter:['class','style'] });
  window.addEventListener('resize', () => applyThemeVars());

  // --- Farben ---
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

  // SVG Radierer-Icon (mittig)
  function setEraserIcon(btn){
    if (!btn || btn.__hasIcon) return;
    btn.__hasIcon = true;
    btn.innerHTML = `
      <svg viewBox="-4 4 24 24" aria-hidden="true">
        <path class="ico-stroke" d="M4 16.5l8.6-8.6a2 2 0 0 1 2.8 0l4.1 4.1a2 2 0 0 1 0 2.8L12.8 23H7.6L4 19.4a2 2 0 0 1 0-2.9z"
              fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="ico-stroke" d="M8 23h8" fill="none" stroke-width="2" stroke-linecap="round"/>
        <path class="ico-stroke" d="M9.2 14.3l6.5 6.5" fill="none" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
  }

  // helpers
  function hexToRgb(hex){
    const h = String(hex).replace('#','').trim();
    if (h.length === 3){
      const r = parseInt(h[0]+h[0],16);
      const g = parseInt(h[1]+h[1],16);
      const b = parseInt(h[2]+h[2],16);
      return {r,g,b};
    }
    if (h.length === 6){
      const r = parseInt(h.slice(0,2),16);
      const g = parseInt(h.slice(2,4),16);
      const b = parseInt(h.slice(4,6),16);
      return {r,g,b};
    }
    return {r:0,g:0,b:0};
  }
  function rgbaFromHex(hex, a){
    const {r,g,b} = hexToRgb(hex);
    return `rgba(${r},${g},${b},${a})`;
  }

  function setupCanvas(canvas){
    const wrap = canvas.closest('.lia-draw-wrap');
    if (!wrap) return;

    const block     = wrap.closest('.lia-draw-block') || wrap.parentElement;
    const btnMore   = block ? block.querySelector('.lia-more-btn') : null;

    const btnColor  = wrap.querySelector('.lia-color-btn');
    const btnEraser = wrap.querySelector('.lia-eraser-btn');
    const menu      = wrap.querySelector('.lia-tool-menu');

    setEraserIcon(btnEraser);

    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    // =========================================================
    //  VIEWPORT (Pan/Zoom) + Stroke-Store (für Redraw bei Zoom)
    // =========================================================
    const VIEW = {
      panX: 0, panY: 0,     // in CSS-Pixeln
      scale: 1,             // Zoomfaktor
      minScale: 0.25,
      maxScale: 8
    };

    const STROKES = []; // {tool, color, alpha, width, points:[{x,y}] } Punkte in WORLD-Koords
    let currentStroke = null;

    // Map screen (CSS px) -> world
    function screenToWorld(sx, sy){
      return {
        x: (sx - VIEW.panX) / VIEW.scale,
        y: (sy - VIEW.panY) / VIEW.scale
      };
    }
    // Map world -> screen (CSS px)
    function worldToScreen(wx, wy){
      return {
        x: wx * VIEW.scale + VIEW.panX,
        y: wy * VIEW.scale + VIEW.panY
      };
    }

    // =========================================================
    // Zustände Tools
    // =========================================================
    let tool = 'pen';          // 'pen' | 'eraser'
    let colorIndex = 0;        // pen color
    let penWidth   = 3;        // pen size (in WORLD units; skaliert visuell mit Zoom)
    let penAlpha   = 1.0;      // 0..1
    let eraserWidth= 12;       // eraser size (WORLD units; skaliert visuell mit Zoom)

    function penBaseColor(){
      const c = COLORS[colorIndex] || COLORS[0];
      return (c.key === 'auto') ? getAutoPen() : (c.value || getAutoPen());
    }

    function applyStrokeStyle(st){
      if (st.tool === 'eraser'){
        ctx.globalCompositeOperation = 'destination-out';
        ctx.globalAlpha = 1.0;
        ctx.strokeStyle = 'rgba(0,0,0,1)';
        ctx.lineWidth = st.width;
      }else{
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = st.alpha;
        ctx.strokeStyle = st.color;
        ctx.lineWidth = st.width;
      }
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }

    function setMenuOpen(open){
      if (!menu) return;
      menu.dataset.open = open ? '1' : '0';
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
      slider1.setAttribute('aria-label','Stiftdicke (Stift)');

      slider1.addEventListener('input', () => {
        penWidth = Number(slider1.value);
        updateUI();
      });

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
      slider2.setAttribute('aria-label','Transparenz (Stift)');

      slider2.addEventListener('input', () => {
        penAlpha = Math.max(0, Math.min(1, Number(slider2.value) / 100));
        updateUI();
      });

      row2.appendChild(prev2);
      row2.appendChild(slider2);
      menu.appendChild(row2);

      menu.__mode = 'pen';
      menu.__lineW = line1;
      menu.__sliderW = slider1;
      menu.__lineA = line2;
      menu.__sliderA = slider2;
    }

    function buildEraserMenu(){
      if (!menu) return;
      menu.innerHTML = '';

      const lab = document.createElement('div');
      lab.className = 'lia-tool-heading';
      lab.textContent = 'Radierer';
      menu.appendChild(lab);

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
      slider.setAttribute('aria-label','Dicke (Radierer)');

      slider.addEventListener('input', () => {
        eraserWidth = Number(slider.value);
        updateUI();
      });

      row.appendChild(prev);
      row.appendChild(slider);
      menu.appendChild(row);

      menu.__mode = 'eraser';
      menu.__lineE = line;
      menu.__sliderE = slider;
    }

    function updateMenuVisuals(){
      if (!menu) return;

      if (menu.__mode === 'pen'){
        menu.querySelectorAll('.lia-color-item').forEach((el, i) => {
          const ci = COLORS[i];
          el.style.background = (ci.key === 'auto') ? getAutoPen() : (ci.value || 'transparent');
          el.dataset.active = (i === colorIndex) ? '1' : '0';
        });

        const base = penBaseColor();
        const border = getComputedStyle(document.documentElement).getPropertyValue('--canvas-border').trim() || '#000';

        if (menu.__lineW){
          const col = String(base).startsWith('#') ? rgbaFromHex(base, penAlpha) : rgbaFromHex(border, penAlpha);
          menu.__lineW.style.background = col;
          menu.__lineW.style.height = Math.max(1, penWidth) + 'px';
        }

        if (menu.__lineA){
          const col = String(base).startsWith('#') ? rgbaFromHex(base, penAlpha) : rgbaFromHex(border, penAlpha);
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
        const b = getComputedStyle(document.documentElement).getPropertyValue('--canvas-border').trim() || '#000';
        if (menu.__lineE){
          menu.__lineE.style.background = b;
          menu.__lineE.style.height = Math.max(1, eraserWidth) + 'px';
        }
        if (menu.__sliderE && String(eraserWidth) !== menu.__sliderE.value) menu.__sliderE.value = String(eraserWidth);
      }
    }

    function updateUI(){
      const col = penBaseColor();

      if (btnColor){
        btnColor.style.background = col;
        btnColor.dataset.active = (tool === 'pen') ? '1' : '0';
        btnColor.title = 'Stift';
      }
      if (btnEraser){
        btnEraser.dataset.active = (tool === 'eraser') ? '1' : '0';
        btnEraser.title = 'Radierer';
      }

      updateMenuVisuals();

      if (btnMore) btnMore.textContent = 'Mehr Platz zum Rechnen';
    }

    // =========================================================
    // Redraw (wichtig für Pan/Zoom/Resize)
    // =========================================================
    function clearScreen(){
      // Reset auf 1 CSS->Canvas, dann clear in CSS-Koords
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
      ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    }

    function setViewportTransform(){
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr*VIEW.scale, 0, 0, dpr*VIEW.scale, dpr*VIEW.panX, dpr*VIEW.panY);
    }

    function redrawAll(){
      clearScreen();
      setViewportTransform();
      for (const st of STROKES){
        applyStrokeStyle(st);
        if (!st.points || st.points.length < 2) continue;
        ctx.beginPath();
        ctx.moveTo(st.points[0].x, st.points[0].y);
        for (let i=1;i<st.points.length;i++){
          const p = st.points[i];
          ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }
    }

    // =========================================================
    // Resize
    // =========================================================
    function resizeToCss(){
      const dpr = window.devicePixelRatio || 1;
      const cssW = canvas.clientWidth;
      const cssH = canvas.clientHeight;
      const pxW = Math.max(1, Math.round(cssW * dpr));
      const pxH = Math.max(1, Math.round(cssH * dpr));

      canvas.width = pxW;
      canvas.height = pxH;

      // Redraw aus Stroke-Store
      redrawAll();
      updateUI();
    }

    // Init
    buildPenMenu();
    updateUI();
    resizeToCss();
    window.addEventListener('resize', resizeToCss);

    // Mehr Platz Button (Canvas +100px)
    if (btnMore && !btnMore.__liaBound){
      btnMore.__liaBound = true;
      btnMore.textContent = 'Mehr Platz zum Rechnen';

      btnMore.addEventListener('click', () => {
        const cur = canvas.clientHeight || 260;
        const next = cur + 100;
        canvas.style.height = next + 'px';
        requestAnimationFrame(() => resizeToCss());
      });
    }

    // Button-Events: Menü-Inhalt abhängig vom Button
    if (btnColor && menu){
      btnColor.addEventListener('click', (e) => {
        e.stopPropagation();
        tool = 'pen';

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

        const open = menu.dataset.open === '1';
        const same = (menu.__mode === 'eraser');
        if (!open || !same) buildEraserMenu();

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

    // =========================================================
    // Pan/Zoom Controls
    // - Mouse: Wheel zoom (am Cursor), Pan mit SPACE+Drag oder rechter Maustaste
    // - Touch: 2-Finger Pan + Pinch-Zoom
    // =========================================================
    let spaceDown = false;
    window.addEventListener('keydown', (e) => { if (e.code === 'Space') spaceDown = true; });
    window.addEventListener('keyup',   (e) => { if (e.code === 'Space') spaceDown = false; });

    // Kontextmenü auf rechter Maustaste im Canvas blocken (für Pan)
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    function clampScale(s){
      return Math.max(VIEW.minScale, Math.min(VIEW.maxScale, s));
    }

    function zoomAboutScreenPoint(factor, sx, sy){
      const oldS = VIEW.scale;
      const newS = clampScale(oldS * factor);
      if (newS === oldS) return;

      // Weltpunkt unter Cursor
      const w = screenToWorld(sx, sy);

      // Cursor soll auf gleichem Weltpunkt bleiben:
      // sx = w.x*newS + panX  => panX = sx - w.x*newS
      VIEW.scale = newS;
      VIEW.panX = sx - w.x * newS;
      VIEW.panY = sy - w.y * newS;

      redrawAll();
    }

    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const r = canvas.getBoundingClientRect();
      const sx = e.clientX - r.left;
      const sy = e.clientY - r.top;

      // sanfter Zoom
      const factor = Math.exp(-e.deltaY * 0.0012);
      zoomAboutScreenPoint(factor, sx, sy);
    }, { passive:false });

    // =========================================================
    // Pointer Handling (Draw vs Pan vs Pinch)
    // =========================================================
    const pointers = new Map(); // id -> {sx,sy}
    let mode = 'idle';          // 'idle' | 'draw' | 'pan' | 'pinch'
    let lastPanSX = 0, lastPanSY = 0;

    // Pinch state
    let pinchStart = null; // {midSX,midSY, dist, worldMid:{x,y}, startScale}

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

      // direkt minimal zeichnen (kein full redraw nötig)
      setViewportTransform();
      applyStrokeStyle(st);
      ctx.beginPath();
      ctx.moveTo(w.x, w.y);
    }

    function extendStrokeToScreen(sx,sy){
      if (!currentStroke) return;
      const w = screenToWorld(sx,sy);
      currentStroke.points.push({x:w.x,y:w.y});

      // inkrementell zeichnen
      ctx.lineTo(w.x, w.y);
      ctx.stroke();
    }

    function endStroke(){
      currentStroke = null;
    }

    canvas.addEventListener('pointerdown', (e) => {
      // nur primäre Maus-Taste? nein: rechte Maustaste für pan
      const p = getScreenPos(e);
      pointers.set(e.pointerId, p);
      canvas.setPointerCapture(e.pointerId);

      // sobald 2 Pointer: pinch/pan (Touch) priorisieren
      if (pointers.size === 2){
        // falls gerade gezeichnet wird: sauber beenden
        if (mode === 'draw') endStroke();

        const arr = Array.from(pointers.values());
        const m = mid(arr[0], arr[1]);
        const d = Math.max(1e-6, dist(arr[0], arr[1]));
        const worldMid = screenToWorld(m.sx, m.sy);

        pinchStart = {
          midSX: m.sx, midSY: m.sy,
          dist: d,
          worldMid,
          startScale: VIEW.scale
        };
        mode = 'pinch';
        return;
      }

      // 1 Pointer: entscheiden draw vs pan
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

      // Touch/Mouse normal: Zeichnen
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

        // Weltpunkt unter Start-Mitte beibehalten, aber neue Mitte m:
        // pan = midNew - worldMid*newScale
        VIEW.scale = newScale;
        VIEW.panX = m.sx - pinchStart.worldMid.x * newScale;
        VIEW.panY = m.sy - pinchStart.worldMid.y * newScale;

        redrawAll();
        return;
      }

      if (mode === 'pan'){
        const dx = p.sx - lastPanSX;
        const dy = p.sy - lastPanSY;
        lastPanSX = p.sx;
        lastPanSY = p.sy;

        VIEW.panX += dx;
        VIEW.panY += dy;
        redrawAll();
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
        // wenn unter 2 Pointer fallen, pinch beenden
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
        return;
      }
    }

    canvas.addEventListener('pointerup', stopPointer);
    canvas.addEventListener('pointercancel', stopPointer);
    canvas.addEventListener('pointerleave', () => {
      // leave nur als safety für Maus; touch pointer bleiben captured
      if (mode === 'draw') endStroke();
      if (mode !== 'pinch') mode = 'idle';
      canvas.style.cursor = 'crosshair';
    });
  }

  function initAll(){
    document.querySelectorAll('.lia-draw-wrap canvas.lia-draw:not([data-ready])').forEach(c => {
      c.setAttribute('data-ready','1');
      setupCanvas(c);
    });
  }

  initAll();
  const obs = new MutationObserver(() => initAll());
  obs.observe(document.body, { childList:true, subtree:true });
})();
@end


-->

# Canvas Trys - Road to OCR

Canvas mit Farbauswahl und Radierer. Zoom ist auch dabei und mit den anderen Maustasten kann man auch die Canvas schieben. Auch sollte die Touchsteuerung dafür funktionieren.


<div class="lia-draw-block">
  <div class="lia-draw-wrap">
    <div class="lia-toolstack">
      <button class="lia-tool-btn lia-eraser-btn" type="button" aria-label="Radierer"></button>
      <button class="lia-tool-btn lia-color-btn"  type="button" aria-label="Stift"></button>
    </div>

    <div class="lia-tool-menu" data-open="0" aria-label="Werkzeuge"></div>
    <canvas class="lia-draw" aria-label="Zeichenfläche"></canvas>
  </div>

  <div class="lia-more-row">
    <button class="lia-more-btn lia-btn" type="button">Mehr Platz zum Rechnen</button>
  </div>
</div>
