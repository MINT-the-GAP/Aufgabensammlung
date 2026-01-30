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
  /* Highlight-Farben */
  --hl-yellow: rgba(255, 238, 88, 0.55);
  --hl-green:  rgba(144, 238, 144, 0.45);
  --hl-blue:   rgba(173, 216, 230, 0.45);
  --hl-pink:   rgba(255, 182, 193, 0.45);
  --hl-orange: rgba(255, 200, 120, 0.55);

  /* Wird per JS an Theme/Mode angepasst */
  --hl-ui-bg: rgba(255,255,255,.92);
  --hl-ui-fg: rgba(0,0,0,.88);
  --hl-ui-border: rgba(0,0,0,.14);
  --hl-ui-muted: rgba(0,0,0,.62);
  --hl-ui-shadow: 0 16px 42px rgba(0,0,0,.16);

  --hl-z: 9999999;
}

/* Floating Button */
#lia-hl-btn{
  position: fixed !important;
  top: 80px !important;
  left: 12px !important;
  z-index: var(--hl-z) !important;

  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;

  padding: 7px 10px !important;
  border-radius: 999px !important;
  border: 1px solid var(--hl-ui-border) !important;

  background: var(--hl-ui-bg) !important;
  color: var(--hl-ui-fg) !important;

  font-size: 14px !important;
  line-height: 1 !important;
  cursor: pointer !important;
  user-select: none !important;

  box-shadow: var(--hl-ui-shadow) !important;
}

#lia-hl-btn .dot{
  width: 12px !important;
  height: 12px !important;
  border-radius: 999px !important;
  border: 1px solid var(--hl-ui-border) !important;
  background: var(--hl-yellow) !important;
}

body.lia-hl-open #lia-hl-btn{
  outline: 2px solid color-mix(in srgb, var(--hl-ui-fg) 25%, transparent) !important;
  outline-offset: 2px !important;
}

/* Panel: unter dem Button */
#lia-hl-panel{
  position: fixed !important;
  left: 12px !important;
  top: 126px !important; /* wird per JS genauer gesetzt */
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

body.lia-hl-open #lia-hl-panel{
  display: block !important;
}

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

/* Tool-Toggles */
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
  gap: 8px !important;
  user-select:none !important;
}

.hl-tool.active{
  background: color-mix(in srgb, var(--hl-ui-fg) 16%, transparent) !important;
  border-color: color-mix(in srgb, var(--hl-ui-fg) 22%, var(--hl-ui-border)) !important;
}

/* Farbswatches */
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

.hl-hint{
  font-size: 11px !important;
  color: var(--hl-ui-muted) !important;
  line-height: 1.25 !important;
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

/* =========================================================
   OVERLAY-HIGHLIGHTS (keine DOM-Manipulation am Text!)
   ========================================================= */
.lia-hl-overlay{
  position: fixed !important;
  inset: 0 !important;
  z-index: calc(var(--hl-z) - 1) !important;
  pointer-events: none !important;
}

.lia-hl-overlay.erase-on{
  pointer-events: auto !important; /* für Klick-Radierer */
}

.lia-hl-rect{
  position: absolute !important;
  border-radius: 6px !important;
  box-shadow: 0 1px 0 rgba(0,0,0,.08) inset;
  mix-blend-mode: multiply;
}

.lia-hl-rect[data-hl="yellow"]{ background: var(--hl-yellow); }
.lia-hl-rect[data-hl="green"] { background: var(--hl-green);  }
.lia-hl-rect[data-hl="blue"]  { background: var(--hl-blue);   }
.lia-hl-rect[data-hl="pink"]  { background: var(--hl-pink);   }
.lia-hl-rect[data-hl="orange"]{ background: var(--hl-orange); }
@end


@onload
(function(){
  if (window.__liaTextmarker_overlay_v1) return;
  window.__liaTextmarker_overlay_v1 = true;

  const doc  = document;
  const body = doc.body;

  // -----------------------------
  // Theme/Mode: UI-Variablen aus DOM ableiten
  // -----------------------------
  function parseRGB(str){
    const m = (str || '').match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
    if (!m) return null;
    return { r:+m[1], g:+m[2], b:+m[3] };
  }
  function luminance(rgb){
    const r = rgb.r/255, g = rgb.g/255, b = rgb.b/255;
    return 0.2126*r + 0.7152*g + 0.0722*b;
  }
  function setVar(k,v){ doc.documentElement.style.setProperty(k,v); }

  function adaptUIToTheme(){
    const probe = doc.querySelector('main') || doc.querySelector('[role="main"]') || doc.body;
    const bgStr = getComputedStyle(probe).backgroundColor || getComputedStyle(doc.body).backgroundColor;
    const bg = parseRGB(bgStr) || {r:255,g:255,b:255};
    const isDark = luminance(bg) < 0.45;

    if (isDark){
      setVar('--hl-ui-bg', 'rgba(20,20,22,.92)');
      setVar('--hl-ui-fg', 'rgba(255,255,255,.92)');
      setVar('--hl-ui-muted', 'rgba(255,255,255,.68)');
      setVar('--hl-ui-border', 'rgba(255,255,255,.16)');
      setVar('--hl-ui-shadow', '0 18px 44px rgba(0,0,0,.55)');
    } else {
      setVar('--hl-ui-bg', 'rgba(255,255,255,.92)');
      setVar('--hl-ui-fg', 'rgba(0,0,0,.88)');
      setVar('--hl-ui-muted', 'rgba(0,0,0,.62)');
      setVar('--hl-ui-border', 'rgba(0,0,0,.14)');
      setVar('--hl-ui-shadow', '0 16px 42px rgba(0,0,0,.16)');
    }
  }

  adaptUIToTheme();
  let __hlThemeTimer = setInterval(adaptUIToTheme, 1200);

  // -----------------------------
  // UI: Button + Panel (deine Version)
  // -----------------------------
  if (doc.getElementById('lia-hl-btn')) return;

  const btn = doc.createElement('button');
  btn.id = 'lia-hl-btn';
  btn.type = 'button';
  btn.innerHTML = '<span class="dot" id="lia-hl-dot"></span><span>Textmarker</span>';
  doc.body.appendChild(btn);

  const panel = doc.createElement('div');
  panel.id = 'lia-hl-panel';
  panel.innerHTML = `
    <div class="hdr">
      <div class="title">Textmarker</div>
    </div>
    <div class="body">
      <div class="hl-tools">
        <button class="hl-tool active" id="hl-tool-mark" type="button">🖍️</button>
        <button class="hl-tool" id="hl-tool-erase" type="button">🧽</button>
      </div>

      <div>
        <div class="hl-hint" style="margin-bottom:8px;">Farbe</div>
        <div class="hl-colors" id="hl-colors"></div>
      </div>

      <div class="hl-hint" id="hl-status">Status: aus</div>

      <button class="hl-clear" id="hl-clear" type="button">Alle Markierungen löschen</button>
    </div>
  `;
  doc.body.appendChild(panel);

  const dot      = doc.getElementById('lia-hl-dot');
  const toolMark = doc.getElementById('hl-tool-mark');
  const toolErase= doc.getElementById('hl-tool-erase');
  const colorsEl = doc.getElementById('hl-colors');
  const clearBtn = doc.getElementById('hl-clear');
  const statusEl = doc.getElementById('hl-status');

  function positionPanelUnderButton(){
    const r = btn.getBoundingClientRect();
    panel.style.left = `${Math.max(12, Math.round(r.left))}px`;
    panel.style.top  = `${Math.round(r.bottom + 10)}px`;
  }

  // -----------------------------
  // Overlay Layer
  // -----------------------------
  const overlay = doc.createElement('div');
  overlay.className = 'lia-hl-overlay';
  doc.body.appendChild(overlay);

  // Highlight-Store (page-koordiniert: x/y + scrollOffset zum Erstellzeitpunkt)
  // item = { id, color, rects:[{x,y,w,h}] }  // x/y sind dokument-korrigiert (client+scroll)
  let HL = [];
  let nextId = 1;

  function currentScroll(){
    return { x: (window.scrollX || 0), y: (window.scrollY || 0) };
  }

  function render(){
    // Overlay leeren und alle Rects neu setzen (Viewport-Koordinaten)
    overlay.innerHTML = '';
    const sc = currentScroll();

    for (const item of HL){
      for (const r of item.rects){
        const el = doc.createElement('div');
        el.className = 'lia-hl-rect';
        el.setAttribute('data-hl', item.color);
        el.setAttribute('data-id', String(item.id));
        el.style.left   = `${Math.round(r.x - sc.x)}px`;
        el.style.top    = `${Math.round(r.y - sc.y)}px`;
        el.style.width  = `${Math.round(r.w)}px`;
        el.style.height = `${Math.round(r.h)}px`;
        overlay.appendChild(el);
      }
    }
  }

  window.addEventListener('scroll', render, { passive: true });
  window.addEventListener('resize', render);

  // -----------------------------
  // State
  // -----------------------------
  let open = false;
  let tool = 'mark';
  let color = 'yellow';

  const colorKeys = ['yellow','green','blue','pink','orange'];

  function getVar(name, fallback){
    const v = getComputedStyle(doc.documentElement).getPropertyValue(name).trim();
    return v || fallback;
  }

  function setOpen(v){
    open = !!v;
    body.classList.toggle('lia-hl-open', open);
    if (open) positionPanelUnderButton();
    statusEl.textContent = open ? 'Status: aktiv' : 'Status: aus';
  }

  function setTool(t){
    tool = t;
    toolMark.classList.toggle('active', tool === 'mark');
    toolErase.classList.toggle('active', tool === 'erase');
    body.classList.toggle('lia-hl-mark', tool === 'mark');

    // Overlay klickbar nur im Radiermodus
    overlay.classList.toggle('erase-on', tool === 'erase');
    statusEl.textContent = open
      ? (tool === 'mark' ? 'Status: markieren' : 'Status: löschen')
      : 'Status: aus';
  }

  function setColor(c){
    color = c;
    const map = {
      yellow: getVar('--hl-yellow','rgba(255,238,88,.55)'),
      green:  getVar('--hl-green','rgba(144,238,144,.45)'),
      blue:   getVar('--hl-blue','rgba(173,216,230,.45)'),
      pink:   getVar('--hl-pink','rgba(255,182,193,.45)'),
      orange: getVar('--hl-orange','rgba(255,200,120,.55)'),
    };
    dot.style.background = map[color] || map.yellow;

    [...colorsEl.querySelectorAll('.hl-swatch')].forEach(s => {
      s.classList.toggle('active', s.getAttribute('data-hl') === color);
    });
  }

  // Swatches
  colorKeys.forEach(key => {
    const sw = doc.createElement('button');
    sw.type = 'button';
    sw.className = 'hl-swatch';
    sw.setAttribute('data-hl', key);

    const map = {
      yellow: getVar('--hl-yellow','rgba(255,238,88,.55)'),
      green:  getVar('--hl-green','rgba(144,238,144,.45)'),
      blue:   getVar('--hl-blue','rgba(173,216,230,.45)'),
      pink:   getVar('--hl-pink','rgba(255,182,193,.45)'),
      orange: getVar('--hl-orange','rgba(255,200,120,.55)'),
    };
    sw.style.background = map[key];
    sw.addEventListener('click', () => { setTool('mark'); setColor(key); });
    colorsEl.appendChild(sw);
  });

  // Init
  setOpen(false);
  setTool('mark');
  setColor('yellow');

  // UI events
  btn.addEventListener('click', () => { setOpen(!open); });
  toolMark.addEventListener('click', () => setTool('mark'));
  toolErase.addEventListener('click', () => setTool('erase'));
  window.addEventListener('resize', () => { if (open) positionPanelUnderButton(); });
  doc.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });

  // -----------------------------
  // MARKIEREN: Range -> ClientRects -> Overlay-Rechtecke
  // (funktioniert auch, wenn DOM im ShadowRoot sitzt, weil wir nichts am Text ändern)
  // -----------------------------
  function isInsideUI(node){
    const el = (node && node.nodeType === 1) ? node : node?.parentElement;
    if (!el) return false;
    return !!el.closest('#lia-hl-panel, #lia-hl-btn');
  }

  function canUseSelection(){
    try {
      const sel = window.getSelection();
      return !!(sel && sel.rangeCount);
    } catch {
      return false;
    }
  }

  function addHighlightFromSelection(){
    if (!canUseSelection()) {
      statusEl.textContent = 'Status: Selection nicht verfügbar';
      return;
    }

    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) {
      statusEl.textContent = 'Status: keine Auswahl';
      return;
    }

    const range = sel.getRangeAt(0);
    if (!range || range.collapsed) {
      statusEl.textContent = 'Status: keine Auswahl';
      return;
    }

    // UI/Inputs ausschließen
    if (isInsideUI(range.startContainer) || isInsideUI(range.endContainer)) return;

    const txt = sel.toString();
    if (!txt || !txt.trim()) {
      statusEl.textContent = 'Status: leere Auswahl';
      return;
    }

    // Rects holen
    const rects = Array.from(range.getClientRects ? range.getClientRects() : []);
    if (!rects.length) {
      statusEl.textContent = 'Status: Rects=0 (iframe/cross-origin?)';
      return;
    }

    const sc = currentScroll();
    const packed = rects
      .filter(r => r.width > 1 && r.height > 1)
      .map(r => ({
        x: r.left + sc.x,
        y: r.top  + sc.y,
        w: r.width,
        h: r.height
      }));

    if (!packed.length) {
      statusEl.textContent = 'Status: Rects gefiltert=0';
      return;
    }

    HL.push({ id: nextId++, color, rects: packed });
    sel.removeAllRanges();
    render();
    statusEl.textContent = `Status: markiert (${packed.length})`;
  }

  // Markieren bei mouseup (capture)
  doc.addEventListener('mouseup', () => {
    if (!open) return;
    if (tool !== 'mark') return;
    positionPanelUnderButton();
    addHighlightFromSelection();
  }, true);

  // -----------------------------
  // RADIEREN: Klick in Overlay entfernt Highlight (nach ID)
  // -----------------------------
  overlay.addEventListener('click', (e) => {
    if (!open) return;
    if (tool !== 'erase') return;

    const t = e.target;
    const id = t?.getAttribute?.('data-id');
    if (!id) return;

    const n = Number(id);
    HL = HL.filter(item => item.id !== n);
    render();
    statusEl.textContent = 'Status: gelöscht';
  });

  // Alle löschen
  clearBtn.addEventListener('click', () => {
    HL = [];
    render();
    statusEl.textContent = 'Status: alles gelöscht';
  });

})();
@end
-->

# Textmarker

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
