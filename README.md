<!--
comment: LiaScript Import - Textmarker (Header-Button + Overlay)
author: Martin Lommatzsch

@style
  :root{
    --hl-yellow: rgba(255, 238,  88, 0.55);
    --hl-green:  rgba(144, 238, 144, 0.45);
    --hl-blue:   rgba(173, 216, 230, 0.45);
    --hl-pink:   rgba(255, 182, 193, 0.45);
    --hl-orange: rgba(255, 200, 120, 0.55);
    --hl-red:    rgba(255,  80,  80, 0.40);

    --hl-ui-bg: rgba(255,255,255,.92);
    --hl-ui-fg: rgba(0,0,0,.88);
    --hl-ui-border: rgba(0,0,0,.14);
    --hl-ui-muted: rgba(0,0,0,.62);
    --hl-ui-shadow: 0 16px 42px rgba(0,0,0,.16);

    --hl-accent: rgb(11,95,255);
    --hl-z: 9999999;
  }

  .lia-hl-overlay{
    position: fixed !important;
    inset: 0 !important;
    z-index: calc(var(--hl-z) - 1) !important;
    pointer-events: none !important;
  }
  .lia-hl-overlay.erase-on{ pointer-events: auto !important; }

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
  .lia-hl-rect[data-hl="red"]   { background: var(--hl-red);    }
@end


@onload
  (function(){
    if (globalThis.__LIA_TEXTMARKER_IMPORT_V3) return;
    globalThis.__LIA_TEXTMARKER_IMPORT_V3 = true;

    const CONTENT_WIN = window;
    const CONTENT_DOC = document;

    function getRootWindow(){
      let w = window;
      try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
      return w;
    }
    const ROOT_WIN = getRootWindow();
    const ROOT_DOC = ROOT_WIN.document;

    // Shared state im Root
    ROOT_WIN.__liaHL = ROOT_WIN.__liaHL || {};
    const SH = ROOT_WIN.__liaHL;
    SH.state = SH.state || { active:false, panelOpen:false, tool:'mark', color:'yellow' };
    SH.HL    = SH.HL    || [];
    SH.nextId= SH.nextId|| 1;

    // ---------- Theme/Accent ----------
    function parseRGB(str){
      const m = (str || '').match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
      if (!m) return null;
      return { r:+m[1], g:+m[2], b:+m[3] };
    }
    function luminance(rgb){
      const r = rgb.r/255, g = rgb.g/255, b = rgb.b/255;
      return 0.2126*r + 0.7152*g + 0.0722*b;
    }
    function setVar(doc, k, v){ doc.documentElement.style.setProperty(k, v); }

    function adaptUIVars(){
      const probe = CONTENT_DOC.querySelector('main') || CONTENT_DOC.querySelector('[role="main"]') || CONTENT_DOC.body;
      const csProbe = getComputedStyle(probe);

      const bgStr = csProbe.backgroundColor || getComputedStyle(CONTENT_DOC.body).backgroundColor;
      const bg = parseRGB(bgStr) || {r:255,g:255,b:255};
      const isDark = luminance(bg) < 0.45;

      const anyLink = CONTENT_DOC.querySelector('main a') || CONTENT_DOC.querySelector('a');
      const accentStr = anyLink ? getComputedStyle(anyLink).color : (csProbe.color || 'rgb(11,95,255)');

      setVar(CONTENT_DOC, '--hl-accent', accentStr);
      try { setVar(ROOT_DOC, '--hl-accent', accentStr); } catch(e){}

      if (isDark){
        setVar(CONTENT_DOC,'--hl-ui-bg','rgba(20,20,22,.92)');
        setVar(CONTENT_DOC,'--hl-ui-fg','rgba(255,255,255,.92)');
        setVar(CONTENT_DOC,'--hl-ui-muted','rgba(255,255,255,.68)');
        setVar(CONTENT_DOC,'--hl-ui-border','rgba(255,255,255,.16)');
        setVar(CONTENT_DOC,'--hl-ui-shadow','0 18px 44px rgba(0,0,0,.55)');
        try{
          setVar(ROOT_DOC,'--hl-ui-bg','rgba(20,20,22,.92)');
          setVar(ROOT_DOC,'--hl-ui-fg','rgba(255,255,255,.92)');
          setVar(ROOT_DOC,'--hl-ui-muted','rgba(255,255,255,.68)');
          setVar(ROOT_DOC,'--hl-ui-border','rgba(255,255,255,.16)');
          setVar(ROOT_DOC,'--hl-ui-shadow','0 18px 44px rgba(0,0,0,.55)');
        }catch(e){}
      } else {
        setVar(CONTENT_DOC,'--hl-ui-bg','rgba(255,255,255,.92)');
        setVar(CONTENT_DOC,'--hl-ui-fg','rgba(0,0,0,.88)');
        setVar(CONTENT_DOC,'--hl-ui-muted','rgba(0,0,0,.62)');
        setVar(CONTENT_DOC,'--hl-ui-border','rgba(0,0,0,.14)');
        setVar(CONTENT_DOC,'--hl-ui-shadow','0 16px 42px rgba(0,0,0,.16)');
        try{
          setVar(ROOT_DOC,'--hl-ui-bg','rgba(255,255,255,.92)');
          setVar(ROOT_DOC,'--hl-ui-fg','rgba(0,0,0,.88)');
          setVar(ROOT_DOC,'--hl-ui-muted','rgba(0,0,0,.62)');
          setVar(ROOT_DOC,'--hl-ui-border','rgba(0,0,0,.14)');
          setVar(ROOT_DOC,'--hl-ui-shadow','0 16px 42px rgba(0,0,0,.16)');
        }catch(e){}
      }
    }
    adaptUIVars();
    setInterval(adaptUIVars, 1200);

    // ---------- Overlay ----------
    const overlay = CONTENT_DOC.createElement('div');
    overlay.className = 'lia-hl-overlay';
    CONTENT_DOC.body.appendChild(overlay);

    function currentScroll(){ return { x:(CONTENT_WIN.scrollX||0), y:(CONTENT_WIN.scrollY||0) }; }

    function render(){
      overlay.innerHTML = '';
      const sc = currentScroll();
      for (const item of SH.HL){
        for (const r of item.rects){
          const el = CONTENT_DOC.createElement('div');
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
    CONTENT_WIN.addEventListener('scroll', render, { passive:true });
    CONTENT_WIN.addEventListener('resize', render);

    // ---------- Root Style ----------
    function ensureRootStyle(){
      if (ROOT_DOC.getElementById('lia-hl-import-style')) return;
      const st = ROOT_DOC.createElement('style');
      st.id = 'lia-hl-import-style';
      st.textContent = `
        #lia-hl-btn{
          position: relative !important;
          width: 40px !important;
          height: 40px !important;
          padding: 0 !important;
          margin-left: 6px !important;
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
        #lia-hl-btn:hover{ background: color-mix(in srgb, currentColor 10%, transparent) !important; }
        #lia-hl-btn:active{ background: color-mix(in srgb, currentColor 16%, transparent) !important; }
        #lia-hl-btn .icon{ width:22px !important; height:22px !important; display:block !important; }
        #lia-hl-btn .dot{
          position:absolute !important;
          right:6px !important;
          bottom:6px !important;
          width:10px !important;
          height:10px !important;
          border-radius:999px !important;
          border:1px solid var(--hl-ui-border) !important;
          background: var(--hl-yellow) !important;
        }
        body.lia-hl-active #lia-hl-btn{
          outline:2px solid color-mix(in srgb, var(--hl-ui-fg) 25%, transparent) !important;
          outline-offset:2px !important;
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
        body.lia-hl-panel-open #lia-hl-panel{ display:block !important; }
        #lia-hl-panel .hdr{
          display:flex !important; align-items:center !important; justify-content:space-between !important;
          gap:10px !important; padding:10px 12px !important;
          border-bottom:1px solid color-mix(in srgb, var(--hl-ui-border) 85%, transparent) !important;
        }
        #lia-hl-panel .title{ font-weight:700 !important; font-size:13px !important; color:var(--hl-ui-fg) !important; }
        #lia-hl-panel .body{ padding:12px !important; display:grid !important; gap:12px !important; }

        .hl-tools{ display:grid !important; grid-template-columns:1fr 1fr !important; gap:10px !important; }
        .hl-tool{
          border:1px solid var(--hl-ui-border) !important;
          background:color-mix(in srgb, var(--hl-ui-fg) 5%, transparent) !important;
          color:var(--hl-ui-fg) !important;
          border-radius:14px !important;
          padding:10px 10px !important;
          cursor:pointer !important;
          font-size:13px !important;
          display:flex !important; align-items:center !important; justify-content:center !important;
          user-select:none !important;
        }
        .hl-tool.active{
          background:color-mix(in srgb, var(--hl-ui-fg) 16%, transparent) !important;
          border-color:color-mix(in srgb, var(--hl-ui-fg) 22%, var(--hl-ui-border)) !important;
        }
        .hl-colors{ display:flex !important; flex-wrap:wrap !important; gap:10px !important; }
        .hl-swatch{
          width:28px !important; height:28px !important; border-radius:999px !important;
          border:2px solid var(--hl-ui-border) !important;
          cursor:pointer !important;
          box-shadow:0 8px 16px color-mix(in srgb, var(--hl-ui-fg) 18%, transparent) !important;
        }
        .hl-swatch.active{
          outline:3px solid color-mix(in srgb, var(--hl-ui-fg) 65%, transparent) !important;
          outline-offset:2px !important;
        }
        .hl-clear{
          width:100% !important;
          border:1px solid color-mix(in srgb, rgba(200,0,0,.9) 25%, var(--hl-ui-border)) !important;
          background:rgba(200,0,0,.06) !important;
          border-radius:14px !important;
          padding:10px 10px !important;
          cursor:pointer !important;
          font-size:12px !important;
          color:var(--hl-ui-fg) !important;
        }
      `;
      ROOT_DOC.head.appendChild(st);
    }

    function headerLeft(){
      const header = ROOT_DOC.querySelector('header#lia-toolbar-nav') || ROOT_DOC.querySelector('#lia-toolbar-nav');
      if (header) return header.querySelector('.lia-header__left');
      return ROOT_DOC.querySelector('.lia-header__left');
    }

    function ensureUI(){
      ensureRootStyle();

      let btn = ROOT_DOC.getElementById('lia-hl-btn');
      if (!btn){
        btn = ROOT_DOC.createElement('button');
        btn.id = 'lia-hl-btn';
        btn.type = 'button';
        btn.setAttribute('aria-label','Textmarker');
        btn.innerHTML = `
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0 0-3L16.5 4.5a2.1 2.1 0 0 0-3 0L3 15v5z"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path d="M13.5 6.5l4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="dot" id="lia-hl-dot"></span>
        `;
      }

      let panel = ROOT_DOC.getElementById('lia-hl-panel');
      if (!panel){
        panel = ROOT_DOC.createElement('div');
        panel.id = 'lia-hl-panel';
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

      const left = headerLeft();
      if (left && btn.parentNode !== left){
        const anchor = left.querySelector('button,[role="button"],a');
        if (anchor) anchor.insertAdjacentElement('afterend', btn);
        else left.appendChild(btn);
      }
    }

    function positionPanel(){
      const btn = ROOT_DOC.getElementById('lia-hl-btn');
      const panel = ROOT_DOC.getElementById('lia-hl-panel');
      if (!btn || !panel) return;
      const r = btn.getBoundingClientRect();
      panel.style.left = `${Math.max(12, Math.round(r.left))}px`;
      panel.style.top  = `${Math.round(r.bottom + 10)}px`;
    }

    function ensureSwatches(){
      const colorsEl = ROOT_DOC.getElementById('hl-colors');
      if (!colorsEl || colorsEl.childElementCount) return;

      const keys = ['yellow','green','blue','pink','orange','red'];
      const cssMap = {
        yellow: getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue('--hl-yellow').trim() || 'rgba(255,238,88,.55)',
        green:  getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue('--hl-green').trim()  || 'rgba(144,238,144,.45)',
        blue:   getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue('--hl-blue').trim()   || 'rgba(173,216,230,.45)',
        pink:   getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue('--hl-pink').trim()   || 'rgba(255,182,193,.45)',
        orange: getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue('--hl-orange').trim() || 'rgba(255,200,120,.55)',
        red:    getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue('--hl-red').trim()    || 'rgba(255,80,80,.40)',
      };

      keys.forEach(key=>{
        const sw = ROOT_DOC.createElement('button');
        sw.type='button';
        sw.className='hl-swatch';
        sw.setAttribute('data-hl', key);
        sw.style.background = cssMap[key];
        sw.addEventListener('click', ()=>{
          SH.state.tool='mark';
          SH.state.color=key;
          SH.state.panelOpen=false;
          applyUI();
        });
        colorsEl.appendChild(sw);
      });
    }

    function applyUI(){
      ROOT_DOC.body.classList.toggle('lia-hl-active', !!SH.state.active);
      ROOT_DOC.body.classList.toggle('lia-hl-panel-open', !!(SH.state.active && SH.state.panelOpen));
      overlay.classList.toggle('erase-on', SH.state.tool === 'erase');

      const toolMark = ROOT_DOC.getElementById('hl-tool-mark');
      const toolErase= ROOT_DOC.getElementById('hl-tool-erase');
      if (toolMark) toolMark.classList.toggle('active', SH.state.tool==='mark');
      if (toolErase)toolErase.classList.toggle('active', SH.state.tool==='erase');

      const dot = ROOT_DOC.getElementById('lia-hl-dot');
      if (dot){
        const map = {
          yellow: getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue('--hl-yellow').trim(),
          green:  getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue('--hl-green').trim(),
          blue:   getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue('--hl-blue').trim(),
          pink:   getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue('--hl-pink').trim(),
          orange: getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue('--hl-orange').trim(),
          red:    getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue('--hl-red').trim(),
        };
        dot.style.background = map[SH.state.color] || map.yellow;
      }

      const colorsEl = ROOT_DOC.getElementById('hl-colors');
      if (colorsEl){
        Array.from(colorsEl.querySelectorAll('.hl-swatch')).forEach(s=>{
          s.classList.toggle('active', s.getAttribute('data-hl') === SH.state.color);
        });
      }

      if (SH.state.active && SH.state.panelOpen) positionPanel();
    }

    function wireOnce(){
      const btn = ROOT_DOC.getElementById('lia-hl-btn');
      if (!btn || btn.__wired) return;
      btn.__wired = true;

      btn.addEventListener('click', ()=>{
        if (!SH.state.active){ SH.state.active=true; SH.state.panelOpen=true; }
        else { SH.state.active=false; SH.state.panelOpen=false; }
        applyUI();
      });

      btn.addEventListener('contextmenu', (e)=>{
        e.preventDefault();
        if (!SH.state.active) return;
        SH.state.panelOpen = !SH.state.panelOpen;
        applyUI();
      });

      const toolMark = ROOT_DOC.getElementById('hl-tool-mark');
      const toolErase= ROOT_DOC.getElementById('hl-tool-erase');
      const clearBtn = ROOT_DOC.getElementById('hl-clear');

      if (toolMark) toolMark.addEventListener('click', ()=>{ SH.state.tool='mark'; SH.state.panelOpen=false; applyUI(); });
      if (toolErase)toolErase.addEventListener('click', ()=>{ SH.state.tool='erase'; SH.state.panelOpen=false; applyUI(); });

      if (clearBtn) clearBtn.addEventListener('click', ()=>{ SH.HL=[]; render(); SH.state.panelOpen=false; applyUI(); });

      ROOT_DOC.addEventListener('keydown', (e)=>{
        if (e.key==='Escape' && SH.state.active && SH.state.panelOpen){
          SH.state.panelOpen=false; applyUI();
        }
      });
    }

    function isForbiddenTarget(node){
      const el = (node && node.nodeType===1) ? node : node?.parentElement;
      if (!el) return false;
      return !!el.closest('input, textarea, select, button, a, code, pre');
    }

    function addHighlightFromSelection(){
      const sel = CONTENT_WIN.getSelection ? CONTENT_WIN.getSelection() : null;
      if (!sel || sel.rangeCount===0) return;
      const range = sel.getRangeAt(0);
      if (!range || range.collapsed) return;
      if (isForbiddenTarget(range.startContainer) || isForbiddenTarget(range.endContainer)) return;

      const rects = Array.from(range.getClientRects ? range.getClientRects() : []);
      if (!rects.length) return;

      const sc = currentScroll();
      const packed = rects
        .filter(r=>r.width>1 && r.height>1)
        .map(r=>({ x:r.left+sc.x, y:r.top+sc.y, w:r.width, h:r.height }));
      if (!packed.length) return;

      SH.HL.push({ id: SH.nextId++, color: SH.state.color, rects: packed });
      sel.removeAllRanges();
      render();
    }

    CONTENT_DOC.addEventListener('mouseup', ()=>{
      if (!SH.state.active) return;
      if (SH.state.panelOpen){ SH.state.panelOpen=false; applyUI(); }
      if (SH.state.tool!=='mark') return;
      addHighlightFromSelection();
    }, true);

    overlay.addEventListener('click', (e)=>{
      if (!SH.state.active || SH.state.tool!=='erase') return;
      if (SH.state.panelOpen){ SH.state.panelOpen=false; applyUI(); }
      const id = e.target?.getAttribute?.('data-id');
      if (!id) return;
      const n = Number(id);
      SH.HL = SH.HL.filter(x=>x.id!==n);
      render();
    });

    function tick(){
      ensureUI();
      ensureSwatches();
      wireOnce();
      applyUI();
    }

    tick();
    render();

    ROOT_WIN.addEventListener('resize', tick);
    CONTENT_WIN.addEventListener('resize', ()=>{ render(); tick(); });

    try{
      const mo = new MutationObserver(()=>tick());
      mo.observe(ROOT_DOC.body, { childList:true, subtree:true, attributes:true });
    }catch(e){}

    setInterval(tick, 700);
  })();
@end
-->

# Textmarker