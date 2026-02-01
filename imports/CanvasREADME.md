<!--
comment: Canvas-Tool (import-sicher) — v1 (Unicode-Icons, keine SVG-Sanitizer-Probleme)
author: Martin Lommatzsch
version: 0.0.1
language: de
narrator: Deutsch Female

@style
:root{
  /* Fallbacks (werden per JS auf Lia-Akzent gesetzt) */
  --lia-canvas-accent: #0b5fff;

  /* Rahmen/Farbe übernimmt automatisch die Textfarbe (Dark/Light) */
  --lia-canvas-border: currentColor;
}

/* ---------- Launcher (@canvas) ---------- */
.lia-canvas-anchor{ display: inline-block; }
.lia-canvas-launch{
  width: 32px;
  height: 32px;
  border-radius: 999px;

  border: 2px solid var(--lia-canvas-accent);
  background: transparent;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  line-height: 1;
  color: var(--lia-canvas-accent);

  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
}
.lia-canvas-launch:focus{ outline: 2px solid var(--lia-canvas-border); outline-offset: 2px; }

/* ---------- Mount ---------- */
.lia-canvas-mount{
  margin: 8px 0 12px 0;
  width: 100%;
  max-width: 100%;
}
.lia-canvas-mount[hidden]{ display:none !important; }

/* ---------- Canvas Block ---------- */
.lia-draw-block{
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}
.lia-draw-wrap{
  width: min(560px, 100%);
  max-width: 100%;
  border: 2px solid var(--lia-canvas-border);
  border-radius: 12px;
  box-sizing: border-box;
  position: relative;
  padding-left: 42px; /* Platz für Toolstack links */
}

/* Zeichenfläche */
canvas.lia-draw{
  width: 100%;
  height: 170px;
  display: block;
  border-radius: 10px;
  background: transparent;

  /* wichtig für Touch/Pen */
  touch-action: none;
  cursor: crosshair;
}

/* Toolstack links */
.lia-toolstack{
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  display: flex;
  flex-direction: column;
  gap: 6px;
}
.lia-tool-btn{
  width: 26px;
  height: 26px;
  padding: 0;

  border-radius: 999px;
  border: 2px solid var(--lia-canvas-border);
  background: transparent;

  display: grid;
  place-items: center;

  color: var(--lia-canvas-border);
  font-size: 14px;
  line-height: 1;

  cursor: pointer;
  user-select: none;
}
.lia-tool-btn:disabled{ opacity: .35; cursor: not-allowed; }
.lia-tool-btn[data-active="1"]{ outline: 2px solid var(--lia-canvas-border); outline-offset: 2px; }

/* Menü */
.lia-tool-menu{
  position: absolute;
  left: 44px;
  top: 10px;
  z-index: 20;

  border: 2px solid var(--lia-canvas-border);
  border-radius: 12px;
  padding: 10px;

  background: rgba(0,0,0,.12);
  backdrop-filter: blur(6px);

  display: none;
  gap: 10px;
}
.lia-tool-menu[data-open="1"]{ display: grid; }

.lia-tool-heading{
  font-size: 1.2rem;
  font-weight: 750;
  line-height: 1.1;
}
.lia-row{ display:flex; align-items:center; gap:10px; }
.lia-slider{ width: 190px; }
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
  border: 2px solid var(--lia-canvas-border);
  box-sizing: border-box;
  cursor: pointer;
}
.lia-color-item[data-active="1"]{ outline: 2px solid var(--lia-canvas-border); outline-offset: 2px; }

/* Resize-Hotspots (unsichtbar, unten links/rechts) */
.lia-resize-corner{
  position: absolute;
  bottom: 0;
  width: 18px;
  height: 18px;
  z-index: 30;
  opacity: 0;
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  touch-action: none;
  user-select: none;
}
.lia-resize-corner[data-corner="br"]{ right: 0; cursor: nwse-resize; }
.lia-resize-corner[data-corner="bl"]{ left: 0;  cursor: nesw-resize; }
@end


@onload
(function(){
  if (window.__LIA_CANVAS_V1_INIT__) return;
  window.__LIA_CANVAS_V1_INIT__ = true;

  // -------------------------
  // Accent aus Lia-Button ziehen (Fallback bleibt)
  // -------------------------
  function pickAccent(){
    try{
      const doc = document;
      const existing = doc.querySelector('.lia-btn');
      if (existing){
        const bg = getComputedStyle(existing).backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
      }
      const probe = doc.createElement('button');
      probe.className = 'lia-btn';
      probe.type = 'button';
      probe.textContent = 'x';
      probe.style.position = 'absolute';
      probe.style.left = '-9999px';
      probe.style.top  = '-9999px';
      probe.style.visibility = 'hidden';
      (doc.body || doc.documentElement).appendChild(probe);
      const bg = getComputedStyle(probe).backgroundColor;
      probe.remove();
      if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
    }catch(e){}
    return null;
  }

  function parseRGB(s){
    // ohne Regex (damit nie wieder "unterminated parenthetical")
    const str = String(s || '');
    const i0 = str.indexOf('(');
    const i1 = str.indexOf(')');
    if (i0 < 0 || i1 < 0) return null;
    const parts = str.slice(i0+1, i1).split(',').map(x => Number(String(x).trim()));
    if (parts.length < 3 || parts.some(n => !isFinite(n))) return null;
    return { r: parts[0], g: parts[1], b: parts[2] };
  }
  function rgba(rgbStr, a){
    const rgb = parseRGB(rgbStr);
    if (!rgb) return `rgba(0,0,0,${a})`;
    return `rgba(${rgb.r},${rgb.g},${rgb.b},${a})`;
  }

  function applyAccent(){
    const accent = pickAccent();
    if (accent) document.documentElement.style.setProperty('--lia-canvas-accent', accent);
    document.dispatchEvent(new Event('lia-canvas-theme'));
  }

  applyAccent();
  const mo = new MutationObserver(() => applyAccent());
  mo.observe(document.documentElement, { attributes:true, attributeFilter:['class','style'] });

  // -------------------------
  // Global Store pro UID
  // -------------------------
  const STORE = (window.__LIA_CANVAS_STORE__ = window.__LIA_CANVAS_STORE__ || {});

  // -------------------------
  // UI Builder
  // -------------------------
  function canvasMarkup(){
    return `
      <div class="lia-draw-block">
        <div class="lia-draw-wrap">
          <div class="lia-toolstack">
            <button class="lia-tool-btn" data-act="undo"  type="button" aria-label="Rückgängig">↶</button>
            <button class="lia-tool-btn" data-act="redo"  type="button" aria-label="Wiederherstellen">↷</button>
            <button class="lia-tool-btn" data-act="eraser" type="button" aria-label="Radierer">⌫</button>
            <button class="lia-tool-btn" data-act="pen"   type="button" aria-label="Stift">●</button>
            <button class="lia-tool-btn" data-act="bg"    type="button" aria-label="Hintergrund">▦</button>
          </div>

          <div class="lia-tool-menu" data-open="0" aria-label="Werkzeuge"></div>

          <canvas class="lia-draw" aria-label="Zeichenfläche"></canvas>

          <button class="lia-resize-corner" data-corner="bl" type="button" aria-label="Resize links unten"></button>
          <button class="lia-resize-corner" data-corner="br" type="button" aria-label="Resize rechts unten"></button>
        </div>
      </div>
    `;
  }

  function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }

  function setupCanvas(mount, uid){
    const wrap = mount.querySelector('.lia-draw-wrap');
    const canvas = mount.querySelector('canvas.lia-draw');
    const menu = mount.querySelector('.lia-tool-menu');

    const btnUndo  = mount.querySelector('.lia-tool-btn[data-act="undo"]');
    const btnRedo  = mount.querySelector('.lia-tool-btn[data-act="redo"]');
    const btnEras  = mount.querySelector('.lia-tool-btn[data-act="eraser"]');
    const btnPen   = mount.querySelector('.lia-tool-btn[data-act="pen"]');
    const btnBg    = mount.querySelector('.lia-tool-btn[data-act="bg"]');

    const bl = mount.querySelector('.lia-resize-corner[data-corner="bl"]');
    const br = mount.querySelector('.lia-resize-corner[data-corner="br"]');

    const saved = STORE[uid] || null;

    const STATE = saved || (STORE[uid] = {
      VIEW: { panX:0, panY:0, scale:1, minScale:0.25, maxScale:8 },
      STROKES: [],
      REDO: [],
      tool: 'pen',
      colorIndex: 0,
      penWidth: 3,
      penAlpha: 1,
      eraserWidth: 14,
      bgMode: 'none',
      bgStep: 24,
      wrapW: null,
      canvasH: null
    });

    // Restore size
    if (STATE.wrapW) wrap.style.width = Math.min(900, Math.max(280, STATE.wrapW)) + 'px';
    if (STATE.canvasH) canvas.style.height = Math.max(120, Math.min(900, STATE.canvasH)) + 'px';

    const COLORS = [
      { key:'auto', value:null },
      { key:'red', value:'#ff2d2d' },
      { key:'orange', value:'#ffc800' },
      { key:'violett', value:'#ff00ea' },
      { key:'blue', value:'#2d6bff' },
      { key:'lightblue', value:'#00d5ff' },
      { key:'green', value:'#00ff1a' },
      { key:'black', value:'#000000' },
      { key:'white', value:'#ffffff' }
    ];

    function accent(){
      return getComputedStyle(document.documentElement).getPropertyValue('--lia-canvas-accent').trim() || '#0b5fff';
    }
    function border(){
      return getComputedStyle(wrap).borderColor || getComputedStyle(document.body).color || '#000';
    }
    function autoPen(){
      return border();
    }
    function penColor(){
      const c = COLORS[STATE.colorIndex] || COLORS[0];
      return (c.key === 'auto') ? autoPen() : (c.value || autoPen());
    }

    const ctx = canvas.getContext('2d', { willReadFrequently:true });

    function dpr(){ return window.devicePixelRatio || 1; }

    function resizeToCss(){
      const r = canvas.getBoundingClientRect();
      const W = Math.max(1, Math.round(r.width  * dpr()));
      const H = Math.max(1, Math.round(r.height * dpr()));
      canvas.width  = W;
      canvas.height = H;
      present();
      persistSize();
    }

    function persistSize(){
      const w = wrap.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      STATE.wrapW = Math.round(w);
      STATE.canvasH = Math.round(h);
    }

    function setMenuOpen(open){ menu.dataset.open = open ? '1' : '0'; }

    function screenToWorld(sx,sy){
      const V = STATE.VIEW;
      return { x:(sx - V.panX)/V.scale, y:(sy - V.panY)/V.scale };
    }

    function setTransform(){
      const V = STATE.VIEW;
      ctx.setTransform(dpr()*V.scale, 0, 0, dpr()*V.scale, dpr()*V.panX, dpr()*V.panY);
    }

    function drawBackground(){
      if (STATE.bgMode === 'none') return;
      setTransform();

      const step = Math.max(6, Number(STATE.bgStep) || 24);
      const col = rgba(accent(), 0.25);

      const V = STATE.VIEW;
      const cssW = canvas.getBoundingClientRect().width;
      const cssH = canvas.getBoundingClientRect().height;

      const x0 = (0 - V.panX)/V.scale;
      const y0 = (0 - V.panY)/V.scale;
      const x1 = (cssW - V.panX)/V.scale;
      const y1 = (cssH - V.panY)/V.scale;

      const xStart = Math.floor(x0/step)*step;
      const yStart = Math.floor(y0/step)*step;
      const xEnd   = Math.ceil (x1/step)*step;
      const yEnd   = Math.ceil (y1/step)*step;

      ctx.save();
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
      ctx.strokeStyle = col;
      ctx.lineWidth = 1/STATE.VIEW.scale;

      ctx.beginPath();
      if (STATE.bgMode === 'grid'){
        for (let x=xStart; x<=xEnd; x+=step){ ctx.moveTo(x, y0); ctx.lineTo(x, y1); }
      }
      for (let y=yStart; y<=yEnd; y+=step){ ctx.moveTo(x0, y); ctx.lineTo(x1, y); }
      ctx.stroke();
      ctx.restore();
    }

    function strokeStyle(st){
      if (st.tool === 'eraser'){
        ctx.globalCompositeOperation = 'destination-out';
        ctx.globalAlpha = 1;
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

    function clear(){
      ctx.setTransform(1,0,0,1,0,0);
      ctx.globalCompositeOperation='source-over';
      ctx.globalAlpha=1;
      ctx.clearRect(0,0,canvas.width,canvas.height);
    }

    function drawAllStrokes(){
      setTransform();
      for (const st of STATE.STROKES){
        if (!st.points || st.points.length < 2) continue;
        strokeStyle(st);
        ctx.beginPath();
        ctx.moveTo(st.points[0].x, st.points[0].y);
        for (let i=1;i<st.points.length;i++){
          const p = st.points[i];
          ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }
    }

    function present(){
      clear();
      drawBackground();
      drawAllStrokes();
      updateUI();
    }

    function updateUI(){
      btnUndo.disabled = (STATE.STROKES.length === 0);
      btnRedo.disabled = (STATE.REDO.length === 0);

      btnPen.dataset.active  = (STATE.tool === 'pen') ? '1' : '0';
      btnEras.dataset.active = (STATE.tool === 'eraser') ? '1' : '0';
    }

    function doUndo(){
      if (!STATE.STROKES.length) return;
      STATE.REDO.push(STATE.STROKES.pop());
      present();
    }
    function doRedo(){
      if (!STATE.REDO.length) return;
      STATE.STROKES.push(STATE.REDO.pop());
      present();
    }

    // ----- Menüs
    function buildPenMenu(){
      menu.innerHTML = '';
      const grid = document.createElement('div');
      grid.className = 'lia-color-grid';

      COLORS.forEach((c, idx) => {
        const el = document.createElement('div');
        el.className = 'lia-color-item';
        el.dataset.active = (idx === STATE.colorIndex) ? '1' : '0';
        el.style.background = (c.key === 'auto') ? autoPen() : (c.value || 'transparent');
        el.addEventListener('click', () => {
          STATE.tool = 'pen';
          STATE.colorIndex = idx;
          setMenuOpen(false);
          present();
        });
        grid.appendChild(el);
      });

      menu.appendChild(grid);

      const h1 = document.createElement('div');
      h1.className = 'lia-tool-heading';
      h1.textContent = 'Stiftdicke';
      menu.appendChild(h1);

      const row1 = document.createElement('div');
      row1.className = 'lia-row';
      const s1 = document.createElement('input');
      s1.className = 'lia-slider';
      s1.type='range'; s1.min='1'; s1.max='18'; s1.step='1';
      s1.value = String(STATE.penWidth);
      s1.addEventListener('input', () => { STATE.penWidth = Number(s1.value); });
      row1.appendChild(s1);
      menu.appendChild(row1);

      const h2 = document.createElement('div');
      h2.className = 'lia-tool-heading';
      h2.textContent = 'Transparenz';
      menu.appendChild(h2);

      const row2 = document.createElement('div');
      row2.className = 'lia-row';
      const s2 = document.createElement('input');
      s2.className='lia-slider';
      s2.type='range'; s2.min='0'; s2.max='100'; s2.step='1';
      s2.value = String(Math.round(STATE.penAlpha*100));
      s2.addEventListener('input', () => { STATE.penAlpha = clamp(Number(s2.value)/100, 0, 1); });
      row2.appendChild(s2);
      menu.appendChild(row2);

      menu.dataset.mode = 'pen';
    }

    function buildEraserMenu(){
      menu.innerHTML = '';

      const h = document.createElement('div');
      h.className = 'lia-tool-heading';
      h.textContent = 'Radierer';
      menu.appendChild(h);

      const row = document.createElement('div');
      row.className = 'lia-row';

      const s = document.createElement('input');
      s.className='lia-slider';
      s.type='range'; s.min='4'; s.max='40'; s.step='1';
      s.value = String(STATE.eraserWidth);
      s.addEventListener('input', () => { STATE.eraserWidth = Number(s.value); });

      row.appendChild(s);
      menu.appendChild(row);

      const clearBtn = document.createElement('button');
      clearBtn.type='button';
      clearBtn.className='lia-tool-btn';
      clearBtn.style.width='auto';
      clearBtn.style.padding='0 10px';
      clearBtn.textContent='Alles löschen';
      clearBtn.addEventListener('click', () => {
        STATE.STROKES.length = 0;
        STATE.REDO.length = 0;
        present();
      });
      menu.appendChild(clearBtn);

      menu.dataset.mode = 'eraser';
    }

    function buildBgMenu(){
      menu.innerHTML = '';

      const h = document.createElement('div');
      h.className='lia-tool-heading';
      h.textContent='Hintergrund';
      menu.appendChild(h);

      const rowA = document.createElement('div');
      rowA.className='lia-row';

      const bNone = document.createElement('button');
      bNone.type='button'; bNone.className='lia-tool-btn'; bNone.textContent='Ø';
      const bGrid = document.createElement('button');
      bGrid.type='button'; bGrid.className='lia-tool-btn'; bGrid.textContent='▦';
      const bLine = document.createElement('button');
      bLine.type='button'; bLine.className='lia-tool-btn'; bLine.textContent='≡';

      function setMode(m){
        STATE.bgMode = m;
        present();
      }
      bNone.addEventListener('click', ()=>setMode('none'));
      bGrid.addEventListener('click', ()=>setMode('grid'));
      bLine.addEventListener('click', ()=>setMode('lined'));

      rowA.appendChild(bNone);
      rowA.appendChild(bGrid);
      rowA.appendChild(bLine);
      menu.appendChild(rowA);

      const rowB = document.createElement('div');
      rowB.className='lia-row';
      const s = document.createElement('input');
      s.className='lia-slider';
      s.type='range'; s.min='8'; s.max='120'; s.step='1';
      s.value = String(STATE.bgStep);
      s.addEventListener('input', ()=>{ STATE.bgStep = Number(s.value); present(); });
      rowB.appendChild(s);
      menu.appendChild(rowB);

      menu.dataset.mode = 'bg';
    }

    // ----- Button bindings
    btnUndo.addEventListener('click', (e)=>{ e.preventDefault(); doUndo(); });
    btnRedo.addEventListener('click', (e)=>{ e.preventDefault(); doRedo(); });

    btnPen.addEventListener('click', (e)=>{
      e.stopPropagation();
      STATE.tool='pen';
      const open = menu.dataset.open === '1';
      const same = (menu.dataset.mode === 'pen');
      if (!open || !same) buildPenMenu();
      setMenuOpen(!open || !same);
      present();
    });

    btnEras.addEventListener('click', (e)=>{
      e.stopPropagation();
      STATE.tool='eraser';
      const open = menu.dataset.open === '1';
      const same = (menu.dataset.mode === 'eraser');
      if (!open || !same) buildEraserMenu();
      setMenuOpen(!open || !same);
      present();
    });

    btnBg.addEventListener('click', (e)=>{
      e.stopPropagation();
      const open = menu.dataset.open === '1';
      const same = (menu.dataset.mode === 'bg');
      if (!open || !same) buildBgMenu();
      setMenuOpen(!open || !same);
      present();
    });

    document.addEventListener('click', (e)=>{ if (!wrap.contains(e.target)) setMenuOpen(false); });
    document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape') setMenuOpen(false); });

    // ----- Pan/Zoom/Draw
    let spaceDown = false;
    window.addEventListener('keydown', (e)=>{ if (e.code === 'Space') spaceDown = true; });
    window.addEventListener('keyup',   (e)=>{ if (e.code === 'Space') spaceDown = false; });

    canvas.addEventListener('contextmenu', (e)=>e.preventDefault());

    function clampScale(s){ return clamp(s, STATE.VIEW.minScale, STATE.VIEW.maxScale); }

    canvas.addEventListener('wheel', (e)=>{
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const sx = e.clientX - rect.left;
      const sy = e.clientY - rect.top;

      const oldS = STATE.VIEW.scale;
      const factor = Math.exp(-e.deltaY * 0.0012);
      const newS = clampScale(oldS * factor);
      if (newS === oldS) return;

      const w = screenToWorld(sx,sy);
      STATE.VIEW.scale = newS;
      STATE.VIEW.panX = sx - w.x * newS;
      STATE.VIEW.panY = sy - w.y * newS;

      present();
    }, { passive:false });

    // Pointers
    const pointers = new Map();
    let mode = 'idle';
    let currentStroke = null;
    let lastPan = {sx:0, sy:0};
    let pinchStart = null;

    function screenPos(evt){
      const r = canvas.getBoundingClientRect();
      return { sx: evt.clientX - r.left, sy: evt.clientY - r.top };
    }
    function dist(a,b){ return Math.hypot(a.sx-b.sx, a.sy-b.sy); }
    function mid(a,b){ return { sx:(a.sx+b.sx)/2, sy:(a.sy+b.sy)/2 }; }

    function startStroke(sx,sy){
      const w = screenToWorld(sx,sy);
      const st = {
        tool: STATE.tool,
        color: penColor(),
        alpha: STATE.penAlpha,
        width: (STATE.tool === 'eraser') ? STATE.eraserWidth : STATE.penWidth,
        points: [{x:w.x,y:w.y}]
      };
      STATE.STROKES.push(st);
      STATE.REDO.length = 0;
      currentStroke = st;
    }
    function extendStroke(sx,sy){
      if (!currentStroke) return;
      const w = screenToWorld(sx,sy);
      currentStroke.points.push({x:w.x,y:w.y});
      present();
    }
    function endStroke(){ currentStroke = null; }

    // Resize corners (unsichtbar)
    function bindResize(handle, side){
      let resizing=false, startX=0, startY=0, startW=0, startH=0;

      function down(e){
        e.preventDefault(); e.stopPropagation();
        resizing=true;
        startX=e.clientX; startY=e.clientY;
        startW=wrap.getBoundingClientRect().width;
        startH=canvas.getBoundingClientRect().height;
        try{ handle.setPointerCapture(e.pointerId); }catch(_){}
      }
      function move(e){
        if (!resizing) return;
        e.preventDefault();
        const dx=e.clientX-startX;
        const dy=e.clientY-startY;

        const hostW = (wrap.parentElement || document.body).getBoundingClientRect().width;
        const minW=280, maxW=Math.max(minW, Math.floor(hostW));
        const minH=120, maxH=900;

        const nextH = clamp(startH + dy, minH, maxH);
        canvas.style.height = Math.round(nextH) + 'px';

        const nextW = (side==='br')
          ? clamp(startW + dx, minW, maxW)
          : clamp(startW - dx, minW, maxW);

        wrap.style.width = Math.round(nextW) + 'px';
        resizeToCss();
      }
      function up(e){
        if (!resizing) return;
        resizing=false;
        try{ handle.releasePointerCapture(e.pointerId); }catch(_){}
        persistSize();
      }

      handle.addEventListener('pointerdown', down);
      handle.addEventListener('pointermove', move);
      handle.addEventListener('pointerup', up);
      handle.addEventListener('pointercancel', up);
    }
    bindResize(br,'br');
    bindResize(bl,'bl');

    canvas.addEventListener('pointerdown', (e)=>{
      if (e.target && e.target.classList && e.target.classList.contains('lia-resize-corner')) return;

      const p = screenPos(e);
      pointers.set(e.pointerId, p);
      canvas.setPointerCapture(e.pointerId);

      if (pointers.size === 2){
        if (mode === 'draw') endStroke();
        const arr = Array.from(pointers.values()).slice(0,2);
        const m = mid(arr[0],arr[1]);
        const d = Math.max(1e-6, dist(arr[0],arr[1]));
        const worldMid = screenToWorld(m.sx,m.sy);
        pinchStart = { dist:d, worldMid, startScale:STATE.VIEW.scale };
        mode = 'pinch';
        return;
      }

      const isRight = (e.pointerType==='mouse' && e.button===2);
      const isMid   = (e.pointerType==='mouse' && e.button===1);
      const wantPan = isRight || isMid || (e.pointerType==='mouse' && spaceDown);

      if (wantPan){
        mode='pan';
        lastPan = p;
        canvas.style.cursor='grab';
        return;
      }

      mode='draw';
      canvas.style.cursor='crosshair';
      startStroke(p.sx,p.sy);
      present();
    });

    canvas.addEventListener('pointermove', (e)=>{
      if (!pointers.has(e.pointerId)) return;
      const p = screenPos(e);
      pointers.set(e.pointerId, p);

      if (mode==='pinch' && pointers.size>=2 && pinchStart){
        const arr = Array.from(pointers.values()).slice(0,2);
        const m = mid(arr[0],arr[1]);
        const d = Math.max(1e-6, dist(arr[0],arr[1]));
        const factor = d / pinchStart.dist;

        const newS = clampScale(pinchStart.startScale * factor);
        STATE.VIEW.scale = newS;
        STATE.VIEW.panX = m.sx - pinchStart.worldMid.x * newS;
        STATE.VIEW.panY = m.sy - pinchStart.worldMid.y * newS;

        present();
        return;
      }

      if (mode==='pan'){
        const dx = p.sx - lastPan.sx;
        const dy = p.sy - lastPan.sy;
        lastPan = p;
        STATE.VIEW.panX += dx;
        STATE.VIEW.panY += dy;
        present();
        return;
      }

      if (mode==='draw'){
        extendStroke(p.sx,p.sy);
      }
    });

    function stopPointer(e){
      if (pointers.has(e.pointerId)) pointers.delete(e.pointerId);
      try{ canvas.releasePointerCapture(e.pointerId); }catch(_){}

      if (mode==='pinch'){
        if (pointers.size < 2){ pinchStart=null; mode='idle'; }
        return;
      }
      if (mode==='pan'){
        mode='idle';
        canvas.style.cursor='crosshair';
        return;
      }
      if (mode==='draw'){
        endStroke();
        mode='idle';
        present();
        return;
      }
    }
    canvas.addEventListener('pointerup', stopPointer);
    canvas.addEventListener('pointercancel', stopPointer);
    canvas.addEventListener('pointerleave', ()=>{ if (mode==='draw') endStroke(); if (mode!=='pinch') mode='idle'; });

    // Theme refresh
    document.addEventListener('lia-canvas-theme', ()=>present());

    // Init
    resizeToCss();
    present();
  }

  // -------------------------
  // Launcher Toggle (Event Delegation)
  // -------------------------
  if (!window.__LIA_CANVAS_LAUNCHER_BOUND__){
    window.__LIA_CANVAS_LAUNCHER_BOUND__ = true;

    document.addEventListener('click', (e)=>{
      const btn = e.target && e.target.closest ? e.target.closest('.lia-canvas-launch') : null;
      if (!btn) return;

      const anchor = btn.closest('.lia-canvas-anchor');
      if (!anchor) return;

      const uid = anchor.getAttribute('data-uid') || '';
      const mountId = 'lia-canvas-mount-' + uid;

      let mount = document.getElementById(mountId);
      if (!mount){
        mount = document.createElement('div');
        mount.id = mountId;
        mount.className = 'lia-canvas-mount';
        mount.hidden = true;

        // direkt nach dem Anchor einsetzen
        anchor.insertAdjacentElement('afterend', mount);
      }

      // Toggle
      if (mount.hidden){
        mount.hidden = false;
        if (!mount.__ready){
          mount.__ready = true;
          mount.innerHTML = canvasMarkup();
          setupCanvas(mount, uid);
        }
      }else{
        mount.hidden = true;
      }
    }, true);
  }
})();
@end


@canvas: @canvas_(@uid)

@canvas_
<span class="lia-canvas-anchor" data-uid="@0">
  <button class="lia-canvas-launch" type="button" aria-label="Zeichenfläche öffnen/schließen">✎</button>
</span>
@end
-->

# Canvas

**Bedienung:**
- **Zeichnen:** Linksklick / Touch / Stift
- **Radierer:** ⌫
- **Undo/Redo:** ↶ / ↷
- **Verschieben:** rechte Maustaste, mittlere Maustaste oder **Leertaste gedrückt halten**
- **Zoom:** Mausrad / Pinch (2-Finger)
- **Hintergrund:** ▦ (none / grid / lined)
- **Resize:** unsichtbare Ecken unten links/rechts ziehen

**Befehl:** `@canvas`

@canvas
