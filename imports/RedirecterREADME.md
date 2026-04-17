<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Nightly-Switch — oben (links versetzt), transparent, Themefarbe aus Lia-UI gelesen

@onload
(function () {

  function getRootWindow() {
    let w = window;
    try {
      while (w.parent && w.parent !== w) w = w.parent;
    } catch (e) {}
    return w;
  }

  let ROOT = getRootWindow();
  let DOC = null;

  try {
    DOC = ROOT.document;
    void DOC.body;
  } catch (e) {
    ROOT = window;
    DOC = document;
  }

  const STORE_KEY = "__LIA_SWITCH_TO_NIGHTLY_V002__";
  ROOT[STORE_KEY] = ROOT[STORE_KEY] || {};
  const STATE = ROOT[STORE_KEY];

  const BTN_ID = "lia-switch-to-nightly";

  function getCurrentHref() {
    try {
      return (ROOT.location && ROOT.location.href) ? ROOT.location.href : window.location.href;
    } catch (e) {
      return window.location.href;
    }
  }

  function parseUrl(href) {
    try {
      return new URL(href, window.location.href);
    } catch (e) {
      return null;
    }
  }

  function isNightlyHref(href) {
    const u = parseUrl(href);
    return !!(u && /^\/nightly(\/|$)/.test(u.pathname));
  }

  function courseToNightly(href) {
    const u = parseUrl(href);
    if (!u) return null;
    if (!/^\/course(\/|$)/.test(u.pathname)) return null;
    u.pathname = u.pathname.replace(/^\/course(\/|$)/, "/nightly$1");
    return u.toString();
  }

  function readAccentFromUI(doc) {
    const candidates = [
      ".lia-toolbar .lia-btn",
      ".lia-btn",
      ".lia-link",
      ".lia-active"
    ];

    for (const sel of candidates) {
      const el = doc.querySelector(sel);
      if (!el) continue;

      const cs = ROOT.getComputedStyle(el);
      const bg = (cs.backgroundColor || "").trim();
      const col = (cs.color || "").trim();

      if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;
      if (col) return col;
    }

    try {
      const probe = doc.createElement("button");
      probe.className = "lia-btn";
      probe.textContent = "x";
      probe.style.position = "absolute";
      probe.style.left = "-9999px";
      probe.style.top = "-9999px";
      probe.style.opacity = "0";
      doc.body.appendChild(probe);

      const cs = ROOT.getComputedStyle(probe);
      const bg = (cs.backgroundColor || "").trim();
      const col = (cs.color || "").trim();
      probe.remove();

      if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;
      if (col) return col;
    } catch (e) {}

    return "#0b5fff";
  }

  function getAccentColor() {
    return readAccentFromUI(DOC);
  }

  function applyInlineStyle(btn) {
    const accent = getAccentColor();

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

    btn.style.background = "transparent";
    btn.style.color = accent;
    btn.style.border = "2px solid " + accent;
    btn.style.boxShadow = "none";

    btn.style.cursor = "pointer";
    btn.style.textDecoration = "none";
    btn.style.userSelect = "none";
    btn.style.font = "800 16px/1 system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif";

    btn.style.opacity = "1";
    btn.style.visibility = "visible";
    btn.style.pointerEvents = "auto";
  }

  function ensureButton() {
    const href = getCurrentHref();
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
      btn.textContent = "Wechsel zu Nightly";

      btn.addEventListener("click", function (ev) {
        ev.preventDefault();
        try {
          ROOT.location.href = btn.href;
        } catch (e) {
          window.location.href = btn.href;
        }
      });

      DOC.body.appendChild(btn);
    }

    btn.href = target;
    applyInlineStyle(btn);
  }

  function getNavRefs() {
    return {
      root: DOC.querySelector(".lia-canvas"),
      toc: DOC.getElementById("lia-toc"),
      btn: DOC.getElementById("lia-btn-toc")
    };
  }

  function isCompactState(refs) {
    if (!refs.root || !refs.toc || !refs.btn) return false;

    const btnClosed =
      refs.btn.getAttribute("aria-expanded") === "false" ||
      refs.btn.ariaExpanded === "false";

    const tocClosed = refs.toc.classList.contains("lia-toc--closed");
    const rootHidden = refs.root.classList.contains("lia-toc--hidden");

    return btnClosed && tocClosed && rootHidden;
  }

  function syncCompactClasses(refs) {
    if (refs.root) {
      refs.root.classList.remove("lia-toc--visible");
      refs.root.classList.add("lia-toc--hidden");
    }

    if (refs.toc) {
      refs.toc.classList.remove("lia-toc--open");
      refs.toc.classList.add("lia-toc--closed");
    }

    if (refs.btn) {
      refs.btn.setAttribute("aria-expanded", "false");
      try { refs.btn.ariaExpanded = "false"; } catch (e) {}
    }
  }

  function maybeClickToc(refs) {
    if (!refs.btn || !refs.toc) return;

    const expanded =
      refs.btn.getAttribute("aria-expanded") === "true" ||
      refs.btn.ariaExpanded === "true" ||
      refs.toc.classList.contains("lia-toc--open");

    if (!expanded) return;

    const now = Date.now();
    if (STATE.lastTocClick && now - STATE.lastTocClick < 250) return;

    STATE.lastTocClick = now;
    try { refs.btn.click(); } catch (e) {}
  }

  function stopCompactRun() {
    if (STATE.navTimer) {
      try { ROOT.clearInterval(STATE.navTimer); } catch (e) {}
      STATE.navTimer = null;
    }
  }

  function forceNightlyCompactNavigation() {
    const href = getCurrentHref();
    if (!isNightlyHref(href)) {
      stopCompactRun();
      return;
    }

    STATE.navRun = (STATE.navRun || 0) + 1;
    const runId = STATE.navRun;

    stopCompactRun();

    let tries = 0;
    let stable = 0;
    const maxTries = 60;
    const delay = 120;

    function tick() {
      if (runId !== STATE.navRun) {
        stopCompactRun();
        return;
      }

      tries++;

      const refs = getNavRefs();
      if (!refs.root || !refs.toc || !refs.btn) {
        if (tries >= maxTries) stopCompactRun();
        return;
      }

      maybeClickToc(refs);
      syncCompactClasses(refs);

      if (isCompactState(refs)) {
        stable++;
      } else {
        stable = 0;
      }

      if (stable >= 3 || tries >= maxTries) {
        stopCompactRun();
      }
    }

    tick();
    if (!STATE.navTimer) {
      STATE.navTimer = ROOT.setInterval(tick, delay);
    }
  }

  function scheduleRerun(delay) {
    ROOT.setTimeout(function () {
      try { ensureButton(); } catch (e) {}
      try { forceNightlyCompactNavigation(); } catch (e) {}
    }, delay);
  }

  function rerunAll() {
    try { ensureButton(); } catch (e) {}
    try { forceNightlyCompactNavigation(); } catch (e) {}
  }

  function installHistoryHooks() {
    try {
      const H = ROOT.history;
      if (!H || H.__liaNightlySwitchPatched002) return;
      H.__liaNightlySwitchPatched002 = true;

      const push = H.pushState;
      const replace = H.replaceState;

      H.pushState = function () {
        const r = push.apply(this, arguments);
        scheduleRerun(20);
        scheduleRerun(250);
        scheduleRerun(900);
        return r;
      };

      H.replaceState = function () {
        const r = replace.apply(this, arguments);
        scheduleRerun(20);
        scheduleRerun(250);
        scheduleRerun(900);
        return r;
      };
    } catch (e) {}
  }

  function installObserver() {
    try {
      if (STATE.mo) return;

      STATE.mo = new ROOT.MutationObserver(function () {
        if (STATE.mutationQueued) return;
        STATE.mutationQueued = true;

        ROOT.setTimeout(function () {
          STATE.mutationQueued = false;
          rerunAll();
        }, 80);
      });

      STATE.mo.observe(DOC.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class", "aria-expanded"]
      });
    } catch (e) {}
  }

  function boot() {
    if (!DOC.body) {
      ROOT.setTimeout(boot, 0);
      return;
    }

    rerunAll();
    scheduleRerun(120);
    scheduleRerun(350);
    scheduleRerun(800);
    scheduleRerun(1600);

    ROOT.addEventListener("hashchange", rerunAll, true);
    ROOT.addEventListener("popstate", rerunAll, true);

    installHistoryHooks();
    installObserver();
  }

  if (STATE.started) {
    rerunAll();
    return;
  }

  STATE.started = true;
  boot();

})();
@end

-->





# Nightly Switch
