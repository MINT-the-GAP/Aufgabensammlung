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

  const STORE_KEY = "__LIA_SWITCH_TO_NIGHTLY_V003__";
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

  function isCourseHref(href) {
    const u = parseUrl(href);
    return !!(u && /^\/course(\/|$)/.test(u.pathname));
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

  function ensureNightlySwitchButton() {
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

  function getCanvasRoot() {
    return DOC.querySelector(".lia-canvas");
  }

  function getModeNavigationButton() {
    const groups = Array.from(DOC.querySelectorAll('div[data-group-id="mode"]'));
    for (const group of groups) {
      const buttons = Array.from(group.querySelectorAll("button"));
      for (const btn of buttons) {
        const txt = (btn.textContent || "").trim().toLowerCase();
        if (txt.includes("navigation")) {
          return btn;
        }
      }
    }
    return null;
  }

  function isNightlyMiniActive() {
    const body = DOC.body;
    const canvas = getCanvasRoot();

    return !!(
      body &&
      canvas &&
      body.classList.contains("lia-tff-nightly-mini") &&
      canvas.classList.contains("lia-navigation--hidden")
    );
  }

  function syncNightlyMiniDom() {
    const body = DOC.body;
    const canvas = getCanvasRoot();

    if (body) {
      body.classList.add("lia-tff-nightly-mini");
    }

    if (canvas) {
      canvas.classList.add("lia-navigation--hidden");
      canvas.classList.remove("lia-navigation--visible");
    }
  }

  function syncNavigationButtonAppearance() {
    const btn = getModeNavigationButton();
    if (!btn) return;

    const icon = btn.querySelector("i");
    if (icon) {
      icon.classList.remove("icon-navigation-hide");
      icon.classList.add("icon-navigation-show");
    }

    const text = btn.querySelector(".lia-btn__text");
    if (text) {
      text.textContent = "Navigation";
    }
  }

  function stopNavLoop() {
    if (STATE.navTimer) {
      try { ROOT.clearInterval(STATE.navTimer); } catch (e) {}
      STATE.navTimer = null;
    }
  }

  function forceNightlyMiniNavigation() {
    const href = getCurrentHref();

    if (!isNightlyHref(href)) {
      stopNavLoop();
      return;
    }

    STATE.navRun = (STATE.navRun || 0) + 1;
    const runId = STATE.navRun;

    stopNavLoop();

    let tries = 0;
    let stable = 0;
    const maxTries = 50;
    const delay = 120;

    function tick() {
      if (runId !== STATE.navRun) {
        stopNavLoop();
        return;
      }

      tries++;

      const btn = getModeNavigationButton();

      if (!isNightlyMiniActive() && btn) {
        try { btn.click(); } catch (e) {}
      }

      syncNightlyMiniDom();
      syncNavigationButtonAppearance();

      if (isNightlyMiniActive()) {
        stable++;
      } else {
        stable = 0;
      }

      if (stable >= 3 || tries >= maxTries) {
        stopNavLoop();
      }
    }

    tick();
    STATE.navTimer = ROOT.setInterval(tick, delay);
  }

  function rerunAll() {
    try { ensureNightlySwitchButton(); } catch (e) {}
    try { forceNightlyMiniNavigation(); } catch (e) {}
  }

  function scheduleRerun(delay) {
    ROOT.setTimeout(function () {
      rerunAll();
    }, delay);
  }

  function installHistoryHooks() {
    try {
      const H = ROOT.history;
      if (!H || H.__liaNightlySwitchPatched003) return;
      H.__liaNightlySwitchPatched003 = true;

      const push = H.pushState;
      const replace = H.replaceState;

      H.pushState = function () {
        const r = push.apply(this, arguments);
        scheduleRerun(20);
        scheduleRerun(250);
        scheduleRerun(800);
        return r;
      };

      H.replaceState = function () {
        const r = replace.apply(this, arguments);
        scheduleRerun(20);
        scheduleRerun(250);
        scheduleRerun(800);
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
        attributeFilter: ["class"]
      });
    } catch (e) {}
  }

  function boot() {
    if (!DOC.body) {
      ROOT.setTimeout(boot, 0);
      return;
    }

    rerunAll();
    scheduleRerun(100);
    scheduleRerun(300);
    scheduleRerun(700);
    scheduleRerun(1400);

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
