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

  const KEY = "__LIA_FORCE_NIGHTLY_NAV_MINI_AND_SWITCH_V1__";
  ROOT[KEY] = ROOT[KEY] || {};
  const STATE = ROOT[KEY];

  const SWITCH_BTN_ID = "lia-switch-to-nightly";

  function parseUrl(href) {
    try {
      return new URL(href, ROOT.location.href);
    } catch (e) {
      return null;
    }
  }

  function getCurrentHref() {
    try {
      return (ROOT.location && ROOT.location.href) ? ROOT.location.href : window.location.href;
    } catch (e) {
      return window.location.href;
    }
  }

  function isCourseHref() {
    const u = parseUrl(getCurrentHref());
    return !!(u && /^\/course(\/|$)/.test(u.pathname));
  }

  function isNightlyHref() {
    const u = parseUrl(getCurrentHref());
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

  function applySwitchButtonStyle(btn) {
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

    let btn = DOC.getElementById(SWITCH_BTN_ID);

    if (!target) {
      if (btn) btn.remove();
      return;
    }

    if (!btn) {
      btn = DOC.createElement("a");
      btn.id = SWITCH_BTN_ID;
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
    applySwitchButtonStyle(btn);
  }

  function getCanvas() {
    return DOC.querySelector(".lia-canvas");
  }

  function isMiniActive() {
    const body = DOC.body;
    const canvas = getCanvas();

    return !!(
      body &&
      canvas &&
      body.classList.contains("lia-tff-nightly-mini") &&
      canvas.classList.contains("lia-navigation--hidden")
    );
  }

  function findModeItem() {
    return DOC.querySelector(".lia-support-menu__item--mode");
  }

  function findSupportButton() {
    return DOC.getElementById("lia-btn-support");
  }

  function findModeButton() {
    return DOC.getElementById("lia-mode-menu-button");
  }

  function findNavigationButton() {
    const modeItem = findModeItem();
    if (!modeItem) return null;

    const buttons = Array.from(modeItem.querySelectorAll("button"));
    for (const btn of buttons) {
      const txt = (btn.textContent || "").trim().toLowerCase();
      if (txt.includes("navigation")) return btn;
    }
    return null;
  }

  function navigationButtonMeansHide(btn) {
    if (!btn) return false;
    const icon = btn.querySelector("i");
    return !!(icon && icon.classList.contains("icon-navigation-hide"));
  }

  function openSupportMenu() {
    const btn = findSupportButton();
    if (!btn) return false;

    const expanded = btn.getAttribute("aria-expanded") === "true";
    if (!expanded) {
      try { btn.click(); } catch (e) {}
      return false;
    }
    return true;
  }

  function openModeMenu() {
    const btn = findModeButton();
    if (!btn) return false;

    const expanded = btn.getAttribute("aria-expanded") === "true";
    if (!expanded) {
      try { btn.click(); } catch (e) {}
      return false;
    }
    return true;
  }

  function hardSyncMiniClasses() {
    const body = DOC.body;
    const canvas = getCanvas();

    if (body) {
      body.classList.add("lia-tff-nightly-mini");
    }

    if (canvas) {
      canvas.classList.add("lia-navigation--hidden");
      canvas.classList.remove("lia-navigation--visible");
    }
  }

  function closeSupportMenuAfterSuccess() {
    const btn = findSupportButton();
    if (!btn) return;
    const expanded = btn.getAttribute("aria-expanded") === "true";
    if (expanded) {
      try { btn.click(); } catch (e) {}
    }
  }

  function stopNavRunner() {
    if (STATE.navTimer) {
      try { ROOT.clearInterval(STATE.navTimer); } catch (e) {}
      STATE.navTimer = null;
    }
  }

  function forceMiniNavigation() {
    if (!isNightlyHref()) {
      stopNavRunner();
      return;
    }

    STATE.navRun = (STATE.navRun || 0) + 1;
    const runId = STATE.navRun;

    stopNavRunner();

    let tries = 0;
    let stable = 0;
    const maxTries = 50;
    const delay = 160;

    function tick() {
      if (runId !== STATE.navRun) {
        stopNavRunner();
        return;
      }

      tries++;

      if (isMiniActive()) {
        hardSyncMiniClasses();
        stable++;
        if (stable >= 3) {
          closeSupportMenuAfterSuccess();
          stopNavRunner();
        }
        return;
      }

      stable = 0;

      openSupportMenu();
      openModeMenu();

      const navBtn = findNavigationButton();

      if (navBtn && navigationButtonMeansHide(navBtn)) {
        try { navBtn.click(); } catch (e) {}
      }

      hardSyncMiniClasses();

      if (tries >= maxTries) {
        stopNavRunner();
      }
    }

    tick();
    STATE.navTimer = ROOT.setInterval(tick, delay);
  }

  function rerun() {
    try { ensureNightlySwitchButton(); } catch (e) {}
    try { forceMiniNavigation(); } catch (e) {}
  }

  function scheduleRerun(ms) {
    ROOT.setTimeout(rerun, ms);
  }

  function installHistoryHooks() {
    try {
      const H = ROOT.history;
      if (!H || H.__liaForceNightlyMiniPatchedV1) return;
      H.__liaForceNightlyMiniPatchedV1 = true;

      const push = H.pushState;
      const replace = H.replaceState;

      H.pushState = function () {
        const r = push.apply(this, arguments);
        scheduleRerun(30);
        scheduleRerun(250);
        scheduleRerun(800);
        return r;
      };

      H.replaceState = function () {
        const r = replace.apply(this, arguments);
        scheduleRerun(30);
        scheduleRerun(250);
        scheduleRerun(800);
        return r;
      };
    } catch (e) {}
  }

  function installObserver() {
    try {
      if (STATE.observer) return;

      STATE.observer = new ROOT.MutationObserver(function () {
        if (STATE.queued) return;
        STATE.queued = true;

        ROOT.setTimeout(function () {
          STATE.queued = false;
          rerun();
        }, 100);
      });

      STATE.observer.observe(DOC.documentElement, {
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

    rerun();
    scheduleRerun(120);
    scheduleRerun(350);
    scheduleRerun(900);
    scheduleRerun(1800);

    ROOT.addEventListener("hashchange", rerun, true);
    ROOT.addEventListener("popstate", rerun, true);

    installHistoryHooks();
    installObserver();
  }

  if (STATE.started) {
    rerun();
    return;
  }

  STATE.started = true;
  boot();
})();
@end

-->





# Nightly Switch
