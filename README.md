<!--
comment: Textmarker (import-sicher, scroll-container aware, theme-aware)
author: Martin Lommatzsch

@onload
  (function () {
    // =========================================================
    // 0) Root/Content bestimmen (iframe-safe)
    // =========================================================
    function getRootWindow() {
      let w = window;
      try { while (w.parent && w.parent !== w) w = w.parent; } catch (e) {}
      return w;
    }

    const ROOT_WIN = getRootWindow();
    const ROOT_DOC = ROOT_WIN.document;

    const CONTENT_WIN = window;
    const CONTENT_DOC = document;

    // =========================================================
    // 1) Per-Document Instance (verhindert Import-Kollisionen)
    // =========================================================
    const KEY = "__LIA_TEXTMARKER_V2__";
    ROOT_WIN[KEY] = ROOT_WIN[KEY] || {};
    const REG = ROOT_WIN[KEY];

    const DOC_ID =
      (CONTENT_DOC.baseURI || CONTENT_WIN.location.href || "") +
      "::" +
      (CONTENT_DOC.title || "");

    REG.instances = REG.instances || {};

    let I = REG.instances[DOC_ID];
    if (!I) {
      I = REG.instances[DOC_ID] = {
        state: { active: false, panelOpen: false, tool: "mark", color: "yellow" },
        HL: [],
        nextId: 1,
        doc: CONTENT_DOC,
        win: CONTENT_WIN,
        rootDoc: ROOT_DOC,
        rootWin: ROOT_WIN,
        scrollEl: null,
        __mo: null,
        __themeTimer: null
      };
    } else {
      I.doc = CONTENT_DOC;
      I.win = CONTENT_WIN;
      I.rootDoc = ROOT_DOC;
      I.rootWin = ROOT_WIN;
    }

    // =========================================================
    // 2) CSS injizieren (Import-sicher)
    // =========================================================
    function ensureStyle(doc, id, cssText) {
      if (doc.getElementById(id)) return;
      const st = doc.createElement("style");
      st.id = id;
      st.textContent = cssText;
      doc.head.appendChild(st);
    }

    ensureStyle(CONTENT_DOC, "lia-hl-style-content", `
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

      #lia-hl-overlay{
        position: fixed !important;
        inset: 0 !important;
        z-index: calc(var(--hl-z) - 1) !important;
        pointer-events: none !important;
      }
      #lia-hl-overlay.erase-on{ pointer-events: auto !important; }

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
    `);

    ensureStyle(ROOT_DOC, "lia-hl-style-root", `
      #lia-hl-btn{
        position: relative !important;
        width: 40px !important;
        height: 40px !important;
        padding: 0 !important;
        margin: 0 30px !important;

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
        outline: 2px solid color-mix(in srgb, var(--hl-ui-fg) 25%, transparent) !important;
        outline-offset: 2px !important;
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
        display:flex !important;
        align-items:center !important;
        justify-content:space-between !important;
        gap:10px !important;
        padding:10px 12px !important;
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
        display:flex !important;
        align-items:center !important;
        justify-content:center !important;
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
      .hl-swatch.active{ outline:3px solid color-mix(in srgb, var(--hl-ui-fg) 65%, transparent) !important; outline-offset:2px !important; }

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
    `);

    // =========================================================
    // 3) Theme/Accent aus Content ableiten (Fix #2)
    // =========================================================
    function parseRGB(str) {
      const m = (str || "").match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
      if (!m) return null;
      return { r: +m[1], g: +m[2], b: +m[3] };
    }
    function luminance(rgb) {
      const r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
    function setVar(doc, k, v) { doc.documentElement.style.setProperty(k, v); }

    function effectiveBgColor(startEl) {
      let el = startEl;
      for (let i = 0; i < 12 && el; i++) {
        const bg = getComputedStyle(el).backgroundColor;
        if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") return bg;
        el = el.parentElement;
      }
      return getComputedStyle(CONTENT_DOC.body).backgroundColor || "rgb(255,255,255)";
    }

    function adaptUIVars() {
      const probe = CONTENT_DOC.querySelector("main") || CONTENT_DOC.querySelector("[role='main']") || CONTENT_DOC.body;
      const bgStr = effectiveBgColor(probe);
      const bg = parseRGB(bgStr) || { r: 255, g: 255, b: 255 };
      const isDark = luminance(bg) < 0.45;

      // Accent: bevorzugt Linkfarbe (wenn vorhanden)
      const anyLink = CONTENT_DOC.querySelector("main a") || CONTENT_DOC.querySelector("a");
      const accentStr = anyLink ? getComputedStyle(anyLink).color : "rgb(11,95,255)";

      // Accent in beiden Dokumenten setzen
      setVar(CONTENT_DOC, "--hl-accent", accentStr);
      try { setVar(ROOT_DOC, "--hl-accent", accentStr); } catch (e) {}

      if (isDark) {
        const vars = {
          "--hl-ui-bg": "rgba(20,20,22,.92)",
          "--hl-ui-fg": "rgba(255,255,255,.92)",
          "--hl-ui-muted": "rgba(255,255,255,.68)",
          "--hl-ui-border": "rgba(255,255,255,.16)",
          "--hl-ui-shadow": "0 18px 44px rgba(0,0,0,.55)"
        };
        for (const k in vars) setVar(CONTENT_DOC, k, vars[k]);
        try { for (const k in vars) setVar(ROOT_DOC, k, vars[k]); } catch (e) {}
      } else {
        const vars = {
          "--hl-ui-bg": "rgba(255,255,255,.92)",
          "--hl-ui-fg": "rgba(0,0,0,.88)",
          "--hl-ui-muted": "rgba(0,0,0,.62)",
          "--hl-ui-border": "rgba(0,0,0,.14)",
          "--hl-ui-shadow": "0 16px 42px rgba(0,0,0,.16)"
        };
        for (const k in vars) setVar(CONTENT_DOC, k, vars[k]);
        try { for (const k in vars) setVar(ROOT_DOC, k, vars[k]); } catch (e) {}
      }
    }

    adaptUIVars();
    if (!I.__themeTimer) I.__themeTimer = setInterval(adaptUIVars, 1200);

    // =========================================================
    // 4) Scroll-Container erkennen
    // =========================================================
    function isScrollable(el) {
      if (!el || el === CONTENT_DOC.body || el === CONTENT_DOC.documentElement) return false;
      const cs = getComputedStyle(el);
      const oy = cs.overflowY;
      const yOk = (oy === "auto" || oy === "scroll") && el.scrollHeight > el.clientHeight + 2;
      return yOk;
    }

    function findMainScrollEl() {
      const cands = [
        CONTENT_DOC.querySelector("main"),
        CONTENT_DOC.querySelector(".lia-slide"),
        CONTENT_DOC.querySelector("[role='main']")
      ].filter(Boolean);

      for (const c of cands) if (isScrollable(c)) return c;

      let n = (CONTENT_DOC.querySelector("main") || CONTENT_DOC.body);
      for (let i = 0; i < 10 && n; i++) {
        if (isScrollable(n)) return n;
        n = n.parentElement;
      }

      return CONTENT_DOC.scrollingElement || CONTENT_DOC.documentElement;
    }

    I.scrollEl = findMainScrollEl();

    // =========================================================
    // 5) Overlay + Render
    // =========================================================
    function ensureOverlay() {
      let ov = CONTENT_DOC.getElementById("lia-hl-overlay");
      if (ov) return ov;
      ov = CONTENT_DOC.createElement("div");
      ov.id = "lia-hl-overlay";
      CONTENT_DOC.body.appendChild(ov);
      return ov;
    }
    const overlay = ensureOverlay();

    // Fix #1: Overlay darf Header nicht blockieren (wenn Header im selben Dokument)
    function updateOverlayInset() {
      const hdr = CONTENT_DOC.querySelector("header#lia-toolbar-nav") || CONTENT_DOC.querySelector("#lia-toolbar-nav");
      if (!hdr) {
        overlay.style.inset = "0px 0px 0px 0px";
        return;
      }
      const r = hdr.getBoundingClientRect();
      const top = Math.max(0, Math.round(r.bottom));
      overlay.style.inset = `${top}px 0px 0px 0px`;
    }

    let raf = null;
    function requestRender() {
      if (raf) return;
      raf = CONTENT_WIN.requestAnimationFrame(() => {
        raf = null;
        renderNow();
      });
    }

    function renderNow() {
      overlay.innerHTML = "";
      updateOverlayInset();

      const scrollEl = I.scrollEl;

      const scrLeft =
        (scrollEl && scrollEl !== CONTENT_DOC.documentElement && scrollEl !== CONTENT_DOC.body)
          ? scrollEl.scrollLeft
          : (CONTENT_WIN.scrollX || 0);

      const scrTop =
        (scrollEl && scrollEl !== CONTENT_DOC.documentElement && scrollEl !== CONTENT_DOC.body)
          ? scrollEl.scrollTop
          : (CONTENT_WIN.scrollY || 0);

      const scrollRect =
        (scrollEl && scrollEl !== CONTENT_DOC.documentElement && scrollEl !== CONTENT_DOC.body)
          ? scrollEl.getBoundingClientRect()
          : { left: 0, top: 0 };

      for (const item of I.HL) {
        for (const r of item.rects) {
          const el = CONTENT_DOC.createElement("div");
          el.className = "lia-hl-rect";
          el.setAttribute("data-hl", item.color);
          el.setAttribute("data-id", String(item.id));

          const left = (r.x - scrLeft) + scrollRect.left;
          const top  = (r.y - scrTop)  + scrollRect.top;

          el.style.left = Math.round(left) + "px";
          el.style.top = Math.round(top) + "px";
          el.style.width = Math.round(r.w) + "px";
          el.style.height = Math.round(r.h) + "px";

          overlay.appendChild(el);
        }
      }
    }

    // =========================================================
    // 6) Rect-Kompression (gegen Freeze)
    // =========================================================
    function compressRects(rects, scrollEl) {
      const scrLeft =
        (scrollEl && scrollEl !== CONTENT_DOC.documentElement && scrollEl !== CONTENT_DOC.body)
          ? scrollEl.scrollLeft
          : (CONTENT_WIN.scrollX || 0);

      const scrTop =
        (scrollEl && scrollEl !== CONTENT_DOC.documentElement && scrollEl !== CONTENT_DOC.body)
          ? scrollEl.scrollTop
          : (CONTENT_WIN.scrollY || 0);

      const scrollRect =
        (scrollEl && scrollEl !== CONTENT_DOC.documentElement && scrollEl !== CONTENT_DOC.body)
          ? scrollEl.getBoundingClientRect()
          : { left: 0, top: 0 };

      const raw = rects
        .filter(r => r && r.width > 1 && r.height > 1)
        .map(r => ({
          x: (r.left - scrollRect.left) + scrLeft,
          y: (r.top  - scrollRect.top)  + scrTop,
          w: r.width,
          h: r.height
        }));

      if (!raw.length) return [];
      raw.sort((a,b) => (a.y - b.y) || (a.x - b.x));

      const merged = [];
      const Y_TOL = 2;
      const X_GAP = 6;

      for (const r of raw) {
        const last = merged[merged.length - 1];
        if (!last) { merged.push({ ...r }); continue; }

        const sameLine = Math.abs(last.y - r.y) <= Y_TOL && Math.abs(last.h - r.h) <= 4;
        if (sameLine) {
          const lastRight = last.x + last.w;
          const rRight = r.x + r.w;
          if (r.x <= lastRight + X_GAP) {
            const newLeft = Math.min(last.x, r.x);
            const newRight = Math.max(lastRight, rRight);
            last.x = newLeft;
            last.w = newRight - newLeft;
            last.y = Math.min(last.y, r.y);
            last.h = Math.max(last.h, r.h);
            continue;
          }
        }
        merged.push({ ...r });
      }

      const MAX = 220;
      return merged.length > MAX ? merged.slice(0, MAX) : merged;
    }

    // =========================================================
    // 7) Root UI (Button/Panel) – exakt wie bei dir
    // =========================================================
    function findHeaderLeft() {
      const header = ROOT_DOC.querySelector("header#lia-toolbar-nav") || ROOT_DOC.querySelector("#lia-toolbar-nav");
      if (!header) return null;
      return header.querySelector(".lia-header__left") || null;
    }

    function findTOCButtonInLeft(left) {
      if (!left) return null;
      const btns = Array.from(left.querySelectorAll("button,[role='button'],a"));
      if (!btns.length) return null;
      const pick = btns.find(b => {
        const t = ((b.getAttribute("aria-label") || b.getAttribute("title") || b.textContent || "") + "").toLowerCase();
        return t.includes("inhaltsverzeichnis") || t.includes("table of contents") || t.includes("contents");
      });
      return pick || btns[0];
    }

    function ensureRootUI() {
      let btn = ROOT_DOC.getElementById("lia-hl-btn");
      if (!btn) {
        btn = ROOT_DOC.createElement("button");
        btn.id = "lia-hl-btn";
        btn.type = "button";
        btn.setAttribute("aria-label", "Textmarker");
        btn.innerHTML = `
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0 0-3L16.5 4.5a2.1 2.1 0 0 0-3 0L3 15v5z"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path d="M13.5 6.5l4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="dot" id="lia-hl-dot"></span>
        `;
      }

      let panel = ROOT_DOC.getElementById("lia-hl-panel");
      if (!panel) {
        panel = ROOT_DOC.createElement("div");
        panel.id = "lia-hl-panel";
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

      const left = findHeaderLeft();
      if (left && btn.parentNode !== left) {
        try { btn.remove(); } catch (e) {}
        const anchor = findTOCButtonInLeft(left);
        if (anchor && anchor.parentNode === left) anchor.insertAdjacentElement("afterend", btn);
        else left.appendChild(btn);
      }
    }

    function positionPanelUnderButton() {
      const btn = ROOT_DOC.getElementById("lia-hl-btn");
      const panel = ROOT_DOC.getElementById("lia-hl-panel");
      if (!btn || !panel) return;
      const r = btn.getBoundingClientRect();
      panel.style.left = `${Math.max(12, Math.round(r.left))}px`;
      panel.style.top  = `${Math.round(r.bottom + 10)}px`;
    }

    function ensureSwatchesOnce() {
      const colorsEl = ROOT_DOC.getElementById("hl-colors");
      if (!colorsEl || colorsEl.childElementCount) return;

      const keys = ["yellow","green","blue","pink","orange","red"];
      const cssMap = {
        yellow: getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-yellow").trim(),
        green:  getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-green").trim(),
        blue:   getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-blue").trim(),
        pink:   getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-pink").trim(),
        orange: getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-orange").trim(),
        red:    getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-red").trim(),
      };

      keys.forEach(key => {
        const sw = ROOT_DOC.createElement("button");
        sw.type = "button";
        sw.className = "hl-swatch";
        sw.setAttribute("data-hl", key);
        sw.style.background = cssMap[key] || cssMap.yellow;

        sw.addEventListener("click", () => {
          I.state.tool = "mark";
          I.state.color = key;
          I.state.panelOpen = false;
          applyUI();
        });

        colorsEl.appendChild(sw);
      });
    }

    function applyUI() {
      ROOT_DOC.body.classList.toggle("lia-hl-active", !!I.state.active);
      ROOT_DOC.body.classList.toggle("lia-hl-panel-open", !!(I.state.active && I.state.panelOpen));

      overlay.classList.toggle("erase-on", I.state.tool === "erase");

      const dot = ROOT_DOC.getElementById("lia-hl-dot");
      if (dot) {
        const map = {
          yellow: getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-yellow").trim(),
          green:  getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-green").trim(),
          blue:   getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-blue").trim(),
          pink:   getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-pink").trim(),
          orange: getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-orange").trim(),
          red:    getComputedStyle(CONTENT_DOC.documentElement).getPropertyValue("--hl-red").trim(),
        };
        dot.style.background = map[I.state.color] || map.yellow;
      }

      const toolMark = ROOT_DOC.getElementById("hl-tool-mark");
      const toolErase= ROOT_DOC.getElementById("hl-tool-erase");
      if (toolMark) toolMark.classList.toggle("active", I.state.tool === "mark");
      if (toolErase)toolErase.classList.toggle("active", I.state.tool === "erase");

      const colorsEl = ROOT_DOC.getElementById("hl-colors");
      if (colorsEl) {
        Array.from(colorsEl.querySelectorAll(".hl-swatch")).forEach(s => {
          s.classList.toggle("active", s.getAttribute("data-hl") === I.state.color);
        });
      }

      if (I.state.active && I.state.panelOpen) positionPanelUnderButton();
    }

    function wireUIOnce() {
      const btn = ROOT_DOC.getElementById("lia-hl-btn");
      if (!btn) return;

      if (!btn.__liaHLWired) {
        btn.__liaHLWired = true;

        btn.addEventListener("click", () => {
          if (!I.state.active) { I.state.active = true; I.state.panelOpen = true; }
          else { I.state.active = false; I.state.panelOpen = false; }
          applyUI();
        });

        btn.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          if (!I.state.active) return;
          I.state.panelOpen = !I.state.panelOpen;
          applyUI();
        });
      }

      const toolMark = ROOT_DOC.getElementById("hl-tool-mark");
      const toolErase= ROOT_DOC.getElementById("hl-tool-erase");
      const clearBtn = ROOT_DOC.getElementById("hl-clear");

      if (toolMark && !toolMark.__wired) {
        toolMark.__wired = true;
        toolMark.addEventListener("click", () => {
          I.state.tool = "mark";
          I.state.panelOpen = false;
          applyUI();
        });
      }

      // Fix #1 UX: Erase-Button ist Toggle (nochmal klicken => zurück zu mark)
      if (toolErase && !toolErase.__wired) {
        toolErase.__wired = true;
        toolErase.addEventListener("click", () => {
          I.state.tool = (I.state.tool === "erase") ? "mark" : "erase";
          I.state.panelOpen = false;
          applyUI();
        });
      }

      if (clearBtn && !clearBtn.__wired) {
        clearBtn.__wired = true;
        clearBtn.addEventListener("click", () => {
          I.HL = [];
          requestRender();
          I.state.panelOpen = false;
          applyUI();
        });
      }
    }

    // =========================================================
    // 8) Markieren / Radieren
    // =========================================================
    function isForbiddenTarget(node) {
      const el = (node && node.nodeType === 1) ? node : node?.parentElement;
      if (!el) return false;
      return !!el.closest("input, textarea, select, button, a, code, pre");
    }

    function addHighlightFromSelection() {
      const sel = CONTENT_WIN.getSelection ? CONTENT_WIN.getSelection() : null;
      if (!sel || sel.rangeCount === 0) return;

      const range = sel.getRangeAt(0);
      if (!range || range.collapsed) return;

      if (isForbiddenTarget(range.startContainer) || isForbiddenTarget(range.endContainer)) return;

      const rects = Array.from(range.getClientRects ? range.getClientRects() : []);
      if (!rects.length) return;

      const packed = compressRects(rects, I.scrollEl);
      if (!packed.length) return;

      I.HL.push({ id: I.nextId++, color: I.state.color, rects: packed });
      sel.removeAllRanges();
      requestRender();
    }

    if (!CONTENT_DOC.__liaHLWired) {
      CONTENT_DOC.__liaHLWired = true;

      CONTENT_DOC.addEventListener("mouseup", () => {
        if (!I.state.active) return;

        if (I.state.panelOpen) { I.state.panelOpen = false; applyUI(); }
        if (I.state.tool !== "mark") return;

        addHighlightFromSelection();
      }, true);

      overlay.addEventListener("click", (e) => {
        if (!I.state.active || I.state.tool !== "erase") return;

        if (I.state.panelOpen) { I.state.panelOpen = false; applyUI(); }

        const id = e.target?.getAttribute?.("data-id");
        if (!id) return;

        const n = Number(id);
        I.HL = I.HL.filter(item => item.id !== n);
        requestRender();
      });
    }

    if (!I.scrollEl.__liaHLScrollWired) {
      I.scrollEl.__liaHLScrollWired = true;
      I.scrollEl.addEventListener("scroll", requestRender, { passive: true });
    }
    CONTENT_WIN.addEventListener("resize", () => {
      updateOverlayInset();
      requestRender();
    });

    // =========================================================
    // 9) Start + Stabilität
    // =========================================================
    ensureRootUI();
    ensureSwatchesOnce();
    wireUIOnce();
    applyUI();
    requestRender();

    if (!I.__mo) {
      try {
        I.__mo = new MutationObserver(() => {
          adaptUIVars();
          ensureRootUI();
          ensureSwatchesOnce();
          wireUIOnce();
          applyUI();
          updateOverlayInset();
        });
        I.__mo.observe(ROOT_DOC.body, { childList: true, subtree: true, attributes: true });
      } catch (e) {}
    }

  })();
@end
-->

# Tests
