<!--
version:  0.0.1
language: de
comment: LiaScript – Presentation: volle Breite + Schriftgrößen-Boost + A-Button (Font-Slider, nur presentation)
author: Martin Lommatzsch


@style
:root{
  /* seitlicher Sicherheitsabstand im Presentation-Modus */
  --pres-side-gap: 12px;

  /* wird per JS gesetzt (18/24/32px) oder "unset" */
  --lia-pres-font: unset;

  /* Lia-Theme Accent (wird per JS ermittelt) */
  --lia-tafel-font-accent: rgb(11,95,255);
}

/* =========================================================
   1) Präsentation: wirklich volle Breite (NUR presentation!)
      Slides: KEINE Breiten-Overrides (sonst Folienfenster kaputt)
   ========================================================= */
html[data-lia-mode="presentation"] body{
  margin: 0 !important;
}

/* NUR main anfassen, keine Slides-Wrapper, keine Panels */
html[data-lia-mode="presentation"] main{
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;

  box-sizing: border-box !important;
  padding-left:  var(--pres-side-gap) !important;
  padding-right: var(--pres-side-gap) !important;
}

/* =========================================================
   2) Schrift-Boost: presentation UND slides
   ========================================================= */
html[data-lia-mode="presentation"] main,
html[data-lia-mode="slides"] main{
  font-size: var(--lia-pres-font) !important;
}

/* =========================================================
   3) A-Button + Slider (nur presentation, links oben)
   ========================================================= */
#lia-tafel-font-slot{
  display: inline-flex !important;
  align-items: center !important;
  gap: 0px !important;

  /* Abstand zum Inhaltsverzeichnis-Button, damit nichts "reinragt" */
  margin-left: 0px !important;
}

#lia-tafel-font-btn{
  position: relative !important;
  width: 40px !important;
  height: 40px !important;
  padding: 0 !important;
  margin: 0 !important;

  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;

  border: 0 !important;
  background: transparent !important;
  cursor: pointer !important;
  user-select: none !important;

  border-radius: 10px !important;
}

#lia-tafel-font-btn:hover{
  background: color-mix(in srgb, var(--lia-tafel-font-accent) 10%, transparent) !important;
}
#lia-tafel-font-btn:active{
  background: color-mix(in srgb, var(--lia-tafel-font-accent) 16%, transparent) !important;
}

/* Focus-Ring komplett aus (Nightly setzt gern eigene Linien/Outlines) */
#lia-tafel-font-btn:focus,
#lia-tafel-font-btn:focus-visible{
  outline: none !important;
  box-shadow: none !important;
}

/* Doppeltes A (Farben gedreht, Abstand größer) */
#lia-tafel-font-btn .A-big{
  position: absolute !important;
  left: 2px !important;
  top: -8px !important;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
  font-weight: 950 !important;
  font-size: 30px !important;
  color: #fff !important;
  opacity: .95 !important;
  line-height: 1 !important;
  pointer-events: none !important;

  /* Lesbarkeit auf hellen Toolbars */
  text-shadow:
    0 1px 0 rgba(0,0,0,.22),
    0 0 6px rgba(0,0,0,.18);
}

#lia-tafel-font-btn .A-small{
  position: absolute !important;
  left: 14px !important;   /* größerer Abstand */
  top: -3px !important;    /* leichter Versatz */
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
  font-weight: 950 !important;
  font-size: 22px !important;
  color: var(--lia-tafel-font-accent) !important;
  opacity: .95 !important;
  line-height: 1 !important;
  pointer-events: none !important;
}

#lia-tafel-font-panel{
  position: fixed !important;
  z-index: 9999999 !important;
  display: none !important;

  width: 210px !important;
  padding: 12px !important;

  border-radius: 14px !important;
  border: 1px solid rgba(0,0,0,.14) !important;
  background: rgba(255,255,255,.92) !important;
  box-shadow: 0 16px 42px rgba(0,0,0,.16) !important;
  backdrop-filter: blur(6px);
}

html[data-lia-mode="presentation"] body.lia-tafel-font-open #lia-tafel-font-panel{
  display: block !important;
}

#lia-tafel-font-panel input[type="range"]{
  width: 100% !important;
}

/* Dark UI Anpassung (wenn Lia dunkel ist) */
body.lia-tafel-dark #lia-tafel-font-panel{
  border-color: rgba(255,255,255,.16) !important;
  background: rgba(20,20,22,.92) !important;
  box-shadow: 0 18px 44px rgba(0,0,0,.55) !important;
}
@end



@onload
(function () {
  const SETTINGS_KEY = "settings";

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

      for (const k in v){
        if (!Object.prototype.hasOwnProperty.call(v, k)) continue;
        const key = norm(k);
        if (key === "mode" || key === "view" || key === "layout" || key === "format"){
          const m = walk(v[k]);
          if (m) return m;
        }
      }

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

  function applyModeAttr(){
    document.documentElement.dataset.liaMode = detectMode();
  }

  // ---------- Theme Accent + Dark/Light (robust, ohne Regex) ----------
  function parseRgbNoRegex(s){
    const str = String(s || "");
    const i0 = str.indexOf("(");
    const i1 = str.indexOf(")");
    if (i0 < 0 || i1 < 0) return null;
    const parts = str.slice(i0+1, i1).split(",").map(x => Number(String(x).trim()));
    if (parts.length < 3) return null;
    if (!isFinite(parts[0]) || !isFinite(parts[1]) || !isFinite(parts[2])) return null;
    return [parts[0], parts[1], parts[2]];
  }
  function luminance(rgb){
    const t = rgb.map(v => v/255).map(c => (c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4)));
    return 0.2126*t[0] + 0.7152*t[1] + 0.0722*t[2];
  }
  function setVar(k,v){
    try{ document.documentElement.style.setProperty(k,v); }catch(_){}
  }

  function getLiaAccentColor(doc){
    try{
      const d = doc || document;
      const body = d.body || d.documentElement;

      const existing = d.querySelector(".lia-btn");
      if (existing){
        const bg = getComputedStyle(existing).backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;
      }

      const probe = d.createElement("button");
      probe.className = "lia-btn";
      probe.type = "button";
      probe.textContent = "x";
      probe.style.position = "absolute";
      probe.style.left = "-9999px";
      probe.style.top = "-9999px";
      probe.style.visibility = "hidden";
      body.appendChild(probe);

      const bg = getComputedStyle(probe).backgroundColor;
      probe.remove();

      if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;
    }catch(_){}
    return null;
  }

  function updateThemeFlags(){
    // Dark/Light grob am Root-Hintergrund
    let bg = null;
    try{
      bg = getComputedStyle(document.body || document.documentElement).backgroundColor
        || getComputedStyle(document.documentElement).backgroundColor;
    }catch(_){}
    const rgb = parseRgbNoRegex(bg);
    const isDark = rgb ? (luminance(rgb) < 0.45) : false;

    document.body.classList.toggle("lia-tafel-dark", !!isDark);

    const accent = getLiaAccentColor(document) || (function(){
      try{
        const pd = (window.parent && window.parent.document) ? window.parent.document : null;
        return pd ? getLiaAccentColor(pd) : null;
      }catch(_){ return null; }
    })();

    if (accent) setVar("--lia-tafel-font-accent", accent);
  }

  // ---------- Schriftgrößen-Boost (presentation+slides) ----------
  const PRES_PX = [18, 24, 32];

  function pxToStep0to2(px){
    if (px <= 17) return 0;
    if (px <= 19) return 1;
    return 2;
  }

  function getMainFontPx(){
    const main = document.querySelector("main") || document.documentElement;
    const fs = parseFloat(getComputedStyle(main).fontSize || "16");
    return isNaN(fs) ? 16 : fs;
  }

  let sampling = false;

  function applyFontLogic(){
    const mode = detectMode();
    const isPresLike = (mode === "presentation" || mode === "slides");

    if (!isPresLike){
      setVar("--lia-pres-font", "unset");
      return;
    }

    if (sampling) return;
    sampling = true;

    // erst Override weg, dann messen
    setVar("--lia-pres-font", "unset");

    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        const step = pxToStep0to2(getMainFontPx());
        setVar("--lia-pres-font", PRES_PX[step] + "px");
        sampling = false;
      });
    });
  }

  // =========================================================
  // Root-Toolbar Button (A) – nur presentation
  // =========================================================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT_WIN = getRootWindow();
  const ROOT_DOC = ROOT_WIN.document;

  function findHeaderLeft(){
    const header =
      ROOT_DOC.querySelector("header#lia-toolbar-nav") ||
      ROOT_DOC.querySelector("#lia-toolbar-nav") ||
      ROOT_DOC.querySelector("header.lia-header");
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

  function ensureFontButtonUI(){
    const mode = detectMode();
    const isPresentation = (mode === "presentation");

    // Panel/Buttons nur im presentation
    if (!isPresentation){
      try{
        const slot = ROOT_DOC.getElementById("lia-tafel-font-slot");
        const panel = ROOT_DOC.getElementById("lia-tafel-font-panel");
        if (slot) slot.remove();
        if (panel) panel.remove();
        ROOT_DOC.body.classList.remove("lia-tafel-font-open");
      }catch(_){}
      return;
    }

    // Slot
    let slot = ROOT_DOC.getElementById("lia-tafel-font-slot");
    if (!slot){
      slot = ROOT_DOC.createElement("span");
      slot.id = "lia-tafel-font-slot";
    }

    // Button
    let btn = ROOT_DOC.getElementById("lia-tafel-font-btn");
    if (!btn){
      btn = ROOT_DOC.createElement("button");
      btn.id = "lia-tafel-font-btn";
      btn.type = "button";
      btn.setAttribute("aria-label","Schriftgröße");
      btn.innerHTML = `
        <span class="A-big">A</span>
        <span class="A-small">A</span>
      `;
    }

    // Panel (nur nackter Slider!)
    let panel = ROOT_DOC.getElementById("lia-tafel-font-panel");
    if (!panel){
      panel = ROOT_DOC.createElement("div");
      panel.id = "lia-tafel-font-panel";
      panel.innerHTML = `
        <input id="lia-tafel-font-range" type="range" min="14" max="44" step="1" value="24" aria-label="Schriftgröße">
      `;
      ROOT_DOC.body.appendChild(panel);
    }

    // Slot zusammensetzen
    if (!slot.contains(btn)) slot.appendChild(btn);

    // Einhängen: zwischen TOC und Textmarker (falls vorhanden)
    const left = findHeaderLeft();
    if (left){
      if (slot.parentNode !== left){
        const hlBtn = left.querySelector("#lia-hl-btn");
        const toc   = findTOCButtonInLeft(left);

        if (hlBtn && hlBtn.parentNode === left){
          hlBtn.insertAdjacentElement("beforebegin", slot);
        } else if (toc && toc.parentNode === left){
          toc.insertAdjacentElement("afterend", slot);
        } else {
          left.appendChild(slot);
        }
      }
    } else {
      if (!slot.parentNode) ROOT_DOC.body.appendChild(slot);
    }

    // Wiring einmalig
    if (!btn.__liaFontWired){
      btn.__liaFontWired = true;

      function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }

      function getViewport(){
        const vv = ROOT_WIN.visualViewport;
        if (vv){
          return { w: vv.width, h: vv.height, ox: vv.offsetLeft || 0, oy: vv.offsetTop || 0 };
        }
        const de = ROOT_DOC.documentElement;
        return { w: de.clientWidth, h: de.clientHeight, ox: 0, oy: 0 };
      }

      function positionPanel(){
        const r = btn.getBoundingClientRect();
        const vp = getViewport();

        // Panel-Maße messen (sichtbar machen zum Messen)
        const prevDisp = panel.style.display;
        const prevVis  = panel.style.visibility;
        panel.style.display = "block";
        panel.style.visibility = "hidden";
        panel.style.left = "-9999px";
        panel.style.top  = "-9999px";

        const pw = panel.offsetWidth || 210;
        const ph = panel.offsetHeight || 54;

        panel.style.display = prevDisp;
        panel.style.visibility = prevVis;

        const gap = 10, pad = 8;

        let left = r.left;
        let top  = r.bottom + gap;

        left = clamp(left, pad, vp.w - pw - pad);

        if (top + ph + pad > vp.h){
          top = r.top - gap - ph;
        }
        top = clamp(top, pad, vp.h - ph - pad);

        left = left + vp.ox;
        top  = top  + vp.oy;

        panel.style.left = Math.round(left) + "px";
        panel.style.top  = Math.round(top)  + "px";
      }

      function closePanel(){
        ROOT_DOC.body.classList.remove("lia-tafel-font-open");
      }
      function togglePanel(){
        const open = ROOT_DOC.body.classList.toggle("lia-tafel-font-open");
        if (open) ROOT_WIN.requestAnimationFrame(positionPanel);
      }

      btn.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        togglePanel();
      });

      ROOT_DOC.addEventListener("click", (e)=>{
        if (!ROOT_DOC.body.classList.contains("lia-tafel-font-open")) return;
        const t = e.target;
        if (t === btn || btn.contains(t) || panel.contains(t)) return;
        closePanel();
      }, true);

      ROOT_DOC.addEventListener("keydown", (e)=>{
        if (e.key === "Escape") closePanel();
      });

      // Slider -> setzt --lia-pres-font direkt
      const range = panel.querySelector("#lia-tafel-font-range");
      if (range){
        range.addEventListener("input", ()=>{
          const px = Number(range.value || 24);
          setVar("--lia-pres-font", px + "px");
        });
      }

      ROOT_WIN.addEventListener("resize", () => {
        if (ROOT_DOC.body.classList.contains("lia-tafel-font-open")) positionPanel();
      });
      if (ROOT_WIN.visualViewport){
        ROOT_WIN.visualViewport.addEventListener("resize", () => {
          if (ROOT_DOC.body.classList.contains("lia-tafel-font-open")) positionPanel();
        });
        ROOT_WIN.visualViewport.addEventListener("scroll", () => {
          if (ROOT_DOC.body.classList.contains("lia-tafel-font-open")) positionPanel();
        });
      }
    }
  }

  // =========================================================
  // Loop/Trigger (ensure-* Ansatz)
  // =========================================================
  let lastRaw = null;
  let lastMode = null;

  function ensureAll(){
    const raw  = safeGetSettingsRaw();
    const mode = detectMode();

    applyModeAttr();
    updateThemeFlags();

    if (raw !== lastRaw || mode !== lastMode){
      applyFontLogic();
      lastRaw  = raw;
      lastMode = mode;
    }

    ensureFontButtonUI();
  }

  ensureAll();
  setInterval(ensureAll, 350);

  window.addEventListener("storage", function(e){
    if (!e || e.key === SETTINGS_KEY) ensureAll();
  });

  window.addEventListener("resize", function(){
    applyFontLogic();
    updateThemeFlags();
    ensureFontButtonUI();
  });

  // falls Lia im Root-Header umbaut
  try{
    const mo = new MutationObserver(() => ensureAll());
    mo.observe(document.documentElement, { attributes:true, attributeFilter:["class","style","data-theme","data-mode","data-view","data-layout"] });
  }catch(_){}
})();
@end

-->








# Tafelmodus


Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.


