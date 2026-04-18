<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Nightly-Switch — oben (links versetzt), transparent, Themefarbe aus Lia-UI gelesen

@onload
  (function () {

    function getRootWindow() {
      let w = window;
      try { while (w.parent && w.parent !== w) w = w.parent; } catch (e) {}
      return w;
    }

    // Root bevorzugen (Course-Shell), sonst Fallback auf Content
    let ROOT = getRootWindow();
    let DOC  = null;

    try {
      DOC = ROOT.document;
      void DOC.body;
    } catch (e) {
      ROOT = window;
      DOC  = document;
    }

    const STORE_KEY = "__LIA_SWITCH_TO_NIGHTLY_V001__";
    ROOT[STORE_KEY] = ROOT[STORE_KEY] || {};
    const STATE = ROOT[STORE_KEY];

    const BTN_ID = "lia-switch-to-nightly";

    function courseToNightly(href) {
      const u = new URL(href);
      if (!/^\/course(\/|$)/.test(u.pathname)) return null;
      u.pathname = u.pathname.replace(/^\/course(\/|$)/, "/nightly$1");
      return u.toString();
    }

    // ---------------------------------------------------------
    // Themefarbe robust aus LiaScript-UI lesen (kein Variablenraten)
    // ---------------------------------------------------------
    function readAccentFromUI(doc) {
      // 1) existierende Lia-Buttons/Toolbar-Elemente
      const candidates = [
        ".lia-toolbar .lia-btn",
        ".lia-btn",
        ".lia-active",
        ".lia-link"
      ];

      for (const sel of candidates) {
        const el = doc.querySelector(sel);
        if (!el) continue;

        const cs = ROOT.getComputedStyle(el);
        // bevorzugt Hintergrund (Buttons), sonst Textfarbe (Links)
        const bg = (cs.backgroundColor || "").trim();
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;

        const col = (cs.color || "").trim();
        if (col) return col;
      }

      // 2) Probe-Element erzeugen (falls UI noch nicht da ist)
      try {
        const probe = doc.createElement("button");
        probe.className = "lia-btn";
        probe.textContent = "x";
        probe.style.position = "absolute";
        probe.style.left = "-9999px";
        probe.style.top  = "-9999px";
        probe.style.opacity = "0";
        doc.body.appendChild(probe);

        const cs = ROOT.getComputedStyle(probe);
        const bg = (cs.backgroundColor || "").trim();
        const col = (cs.color || "").trim();

        probe.remove();

        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;
        if (col) return col;
      } catch (e) {}

      // 3) Fallback
      return "#0b5fff";
    }

    function getAccentColor() {
      // immer aktuell (Theme-Switch)
      return readAccentFromUI(DOC);
    }

    function applyInlineStyle(btn) {
      const accent = getAccentColor();

      // Position: oben mittig, deutlich nach links (dein “passt” Wert)
      btn.style.position = "fixed";
      btn.style.top = "14px";
      btn.style.left = "50%";
      btn.style.right = "";
      btn.style.transform = "translateX(-50%) translateX(-150px)";
      btn.style.zIndex = "2147483647";

      btn.style.display = "inline-flex";
      btn.style.alignItems = "center";
      btn.style.gap = "8px";

      btn.style.padding = "10px 14px";
      btn.style.borderRadius = "999px";

      // transparent + Themefarbe
      btn.style.background = "transparent";
      btn.style.color = accent;
      btn.style.border = "2px solid " + accent;
      btn.style.boxShadow = "none";

      btn.style.cursor = "pointer";
      btn.style.textDecoration = "none";
      btn.style.userSelect = "none";
      btn.style.font = "800 16px/1 system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif";

      // defensiv
      btn.style.opacity = "1";
      btn.style.visibility = "visible";
      btn.style.pointerEvents = "auto";

      // Badge in Themefarbe
      const badge = btn.querySelector(".badge");
      if (badge) {
        badge.style.display = "inline-block";
        badge.style.fontSize = "12px";
        badge.style.fontWeight = "800";
        badge.style.padding = "3px 8px";
        badge.style.borderRadius = "999px";
        badge.style.background = accent;
        badge.style.border = "1px solid " + accent;
        badge.style.color = "#fff";
        badge.style.lineHeight = "1";
      }
    }

    function ensureButton() {
      const href = (ROOT.location && ROOT.location.href) ? ROOT.location.href : window.location.href;
      const target = courseToNightly(href);

      let btn = DOC.getElementById(BTN_ID);

      if (!target) {
        if (btn) btn.remove();
        return;
      }

      if (!btn) {
        btn = DOC.createElement("a");
        btn.id = BTN_ID;
        btn.rel = "noopener";
        btn.innerHTML = 'Wechsel zu Nightly';

        btn.addEventListener("click", (ev) => {
          ev.preventDefault();
          try { ROOT.location.href = btn.href; } catch (e) { window.location.href = btn.href; }
        });

        DOC.body.appendChild(btn);
      }

      btn.href = target;
      applyInlineStyle(btn);
    }

    function boot() {
      if (!DOC.body) {
        ROOT.setTimeout(boot, 0);
        return;
      }

      ensureButton();
      ROOT.setTimeout(ensureButton, 250);

      ROOT.addEventListener("hashchange", ensureButton, true);
      ROOT.addEventListener("popstate",  ensureButton, true);

      try {
        const H = ROOT.history;
        if (H && !H.__liaSwitchPatched001) {
          H.__liaSwitchPatched001 = true;
          const _push = H.pushState;
          const _rep  = H.replaceState;

          H.pushState = function () {
            const r = _push.apply(this, arguments);
            try { ensureButton(); } catch (e) {}
            return r;
          };

          H.replaceState = function () {
            const r = _rep.apply(this, arguments);
            try { ensureButton(); } catch (e) {}
            return r;
          };
        }
      } catch (e) {}

      try {
        const mo = new ROOT.MutationObserver(() => {
          if (!DOC.getElementById(BTN_ID)) ensureButton();
        });
        mo.observe(DOC.documentElement, { childList: true, subtree: true });
      } catch (e) {}

      ROOT.setInterval(ensureButton, 1200);
    }

    if (STATE.started) {
      try { ensureButton(); } catch (e) {}
      return;
    }
    STATE.started = true;

    boot();

  })();
@end
-->





# Nightly Switch
