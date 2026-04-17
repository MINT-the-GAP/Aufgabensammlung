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

  const STORE_KEY = "__LIA_SWITCH_TO_NIGHTLY_ONESHOT_V2__";
  ROOT[STORE_KEY] = ROOT[STORE_KEY] || {};
  const STATE = ROOT[STORE_KEY];

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
      return (ROOT.location && ROOT.location.href)
        ? ROOT.location.href
        : window.location.href;
    } catch (e) {
      return window.location.href;
    }
  }

  function getDocKey() {
    const u = parseUrl(getCurrentHref());
    if (!u) return getCurrentHref();
    return u.origin + u.pathname + u.search;
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

  function findSupportButton() {
    return DOC.getElementById("lia-btn-support");
  }

  function findModeButton() {
    return DOC.getElementById("lia-mode-menu-button");
  }

  function findModeItem() {
    return DOC.querySelector(".lia-support-menu__item--mode");
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

  function closeSupportMenu() {
    const btn = findSupportButton();
    if (!btn) return;

    const expanded = btn.getAttribute("aria-expanded") === "true";
    if (expanded) {
      try { btn.click(); } catch (e) {}
    }
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

  function getCanvas() {
    return DOC.querySelector(".lia-canvas");
  }

  function isMiniActive() {
    const body = DOC.body;
    const canvas = getCanvas();
    const navBtn = findNavigationButton();
    const icon = navBtn ? navBtn.querySelector("i") : null;

    const iconShowsMini = !!(icon && icon.classList.contains("icon-navigation-show"));

    return !!(
      iconShowsMini ||
      (body && body.classList.contains("lia-tff-nightly-mini")) ||
      (canvas && canvas.classList.contains("lia-navigation--hidden"))
    );
  }

  function navigationButtonWouldActivateMini(btn) {
    if (!btn) return false;
    const icon = btn.querySelector("i");
    return !!(icon && icon.classList.contains("icon-navigation-hide"));
  }

  function runNightlyMiniOnce() {
    if (!isNightlyHref()) return;

    const docKey = getDocKey();
    if (STATE.autoMiniDoneFor === docKey) return;

    let tries = 0;
    const maxTries = 20;
    const delay = 180;

    function tick() {
      tries++;

      if (isMiniActive()) {
        STATE.autoMiniDoneFor = docKey;
        ROOT.setTimeout(closeSupportMenu, 120);
        return;
      }

      openSupportMenu();
      openModeMenu();

      const navBtn = findNavigationButton();
      if (navBtn && navigationButtonWouldActivateMini(navBtn)) {
        try { navBtn.click(); } catch (e) {}
      }

      if (tries < maxTries && !isMiniActive()) {
        ROOT.setTimeout(tick, delay);
        return;
      }

      if (isMiniActive()) {
        STATE.autoMiniDoneFor = docKey;
        ROOT.setTimeout(closeSupportMenu, 120);
      }
    }

    tick();
  }

  function boot() {
    if (!DOC.body) {
      ROOT.setTimeout(boot, 0);
      return;
    }

    ensureNightlySwitchButton();

    // nur einmalig beim Laden versuchen
    runNightlyMiniOnce();
    ROOT.setTimeout(runNightlyMiniOnce, 250);
    ROOT.setTimeout(runNightlyMiniOnce, 800);
    ROOT.setTimeout(runNightlyMiniOnce, 1600);
  }

  if (STATE.started) {
    ensureNightlySwitchButton();
    runNightlyMiniOnce();
    return;
  }

  STATE.started = true;
  boot();

})();
@end

-->





# Nightly Switch
