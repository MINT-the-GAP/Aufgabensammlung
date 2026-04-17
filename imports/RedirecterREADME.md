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

  const KEY = "__LIA_FORCE_NIGHTLY_NAV_MINI_V1__";
  ROOT[KEY] = ROOT[KEY] || {};
  const STATE = ROOT[KEY];

  function parseUrl(href) {
    try {
      return new URL(href, ROOT.location.href);
    } catch (e) {
      return null;
    }
  }

  function isNightlyHref() {
    const u = parseUrl((ROOT.location && ROOT.location.href) || window.location.href);
    return !!(u && /^\/nightly(\/|$)/.test(u.pathname));
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
    if (body) body.classList.add("lia-tff-nightly-mini");
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

  function stopRunner() {
    if (STATE.timer) {
      try { ROOT.clearInterval(STATE.timer); } catch (e) {}
      STATE.timer = null;
    }
  }

  function forceMiniNavigation() {
    if (!isNightlyHref()) {
      stopRunner();
      return;
    }

    STATE.run = (STATE.run || 0) + 1;
    const runId = STATE.run;

    stopRunner();

    let tries = 0;
    let stable = 0;
    const maxTries = 50;
    const delay = 160;

    function tick() {
      if (runId !== STATE.run) {
        stopRunner();
        return;
      }

      tries++;

      if (isMiniActive()) {
        hardSyncMiniClasses();
        stable++;
        if (stable >= 3) {
          closeSupportMenuAfterSuccess();
          stopRunner();
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
        stopRunner();
      }
    }

    tick();
    STATE.timer = ROOT.setInterval(tick, delay);
  }

  function rerun() {
    try { forceMiniNavigation(); } catch (e) {}
  }

  function scheduleRerun(ms) {
    ROOT.setTimeout(rerun, ms);
  }

  function installHistoryHooks() {
    try {
      const H = ROOT.history;
      if (!H || H.__liaForceNightlyMiniPatched) return;
      H.__liaForceNightlyMiniPatched = true;

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
