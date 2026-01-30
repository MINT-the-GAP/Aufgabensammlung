<!--
version:  0.0.1
language: de
narrator: Deutsch Female

tags:
comment:
author:

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
  touch-action: none;
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
  gap: 5px; /* <-- deine Änderung bleibt */
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
  font-size: 1.5rem;   /* <-- größer */
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
  background: var(--canvas-border); /* JS */
  height: 3px;                      /* JS */
}

.lia-slider{ width: 180px; }

/* Button unter der Canvas */
.lia-more-row{
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

/* "Mehr Platz..." als echter LiaScript-Button + kleiner skaliert */
.lia-more-btn.lia-btn{
  transform: scale(0.85);            /* ~15% kleiner (kompakt, ohne Lia-Style zu zerstören) */
  transform-origin: 100% 50%;
}

/* Fallback, falls lia-btn aus irgendeinem Grund nicht greift */
.lia-more-btn{
  white-space: pre; /* Leerzeichen niemals kollabieren */
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

    // Zustände
    let tool = 'pen';          // 'pen' | 'eraser'
    let colorIndex = 0;        // pen color
    let penWidth   = 3;        // pen size
    let penAlpha   = 1.0;      // 0..1
    let eraserWidth= 12;       // eraser size

    function penBaseColor(){
      const c = COLORS[colorIndex] || COLORS[0];
      return (c.key === 'auto') ? getAutoPen() : (c.value || getAutoPen());
    }

    function setCtxForTool(){
      if (tool === 'eraser'){
        ctx.globalCompositeOperation = 'destination-out';
        ctx.globalAlpha = 1.0;
        ctx.strokeStyle = 'rgba(0,0,0,1)';
        ctx.lineWidth = eraserWidth;
      }else{
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = penAlpha;
        ctx.strokeStyle = penBaseColor();
        ctx.lineWidth = penWidth;
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
          setCtxForTool();
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
        if (tool === 'pen') setCtxForTool();
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
        if (tool === 'pen') setCtxForTool();
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
        if (tool === 'eraser') setCtxForTool();
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
        btnColor.style.background = col; // bewusst ohne Alpha (gut sichtbar)
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

    function resizeToCss(){
      const dpr = window.devicePixelRatio || 1;
      const cssW = canvas.clientWidth;
      const cssH = canvas.clientHeight;
      const pxW = Math.max(1, Math.round(cssW * dpr));
      const pxH = Math.max(1, Math.round(cssH * dpr));

      const prev = document.createElement('canvas');
      prev.width = canvas.width || pxW;
      prev.height = canvas.height || pxH;
      prev.getContext('2d').drawImage(canvas, 0, 0);

      canvas.width = pxW;
      canvas.height = pxH;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      setCtxForTool();

      ctx.drawImage(prev, 0, 0, prev.width, prev.height, 0, 0, cssW, cssH);
      updateUI();
    }

    // Init
    buildPenMenu();
    setCtxForTool();
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
        setCtxForTool();

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
        setCtxForTool();

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

    // Zeichnen / Radieren
    let drawing = false;
    let lastX = 0, lastY = 0;

    function pos(evt){
      const r = canvas.getBoundingClientRect();
      return { x: evt.clientX - r.left, y: evt.clientY - r.top };
    }

    canvas.addEventListener('pointerdown', (e) => {
      drawing = true;
      canvas.setPointerCapture(e.pointerId);
      const p = pos(e);
      lastX = p.x; lastY = p.y;
    });

    canvas.addEventListener('pointermove', (e) => {
      if (!drawing) return;
      setCtxForTool();

      const p = pos(e);
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      lastX = p.x; lastY = p.y;
    });

    function stop(e){
      drawing = false;
      try{ canvas.releasePointerCapture(e.pointerId); }catch(_){}
    }
    canvas.addEventListener('pointerup', stop);
    canvas.addEventListener('pointercancel', stop);
    canvas.addEventListener('pointerleave', () => { drawing = false; });
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
