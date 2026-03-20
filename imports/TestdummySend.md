<!--
version: 0.0.1
language: de
author: Martin Lommatzsch
comment: Generische LiaScript-Abgabelink-Demo mit Theme-Hintergrund und kursadaptiven Eingabefeldern

@style
:root{
  --lia-submit-bg-rgb: 106, 92, 255;
  --lia-submit-fg: #ffffff;
  --lia-submit-border-on-theme: rgba(255,255,255,.34);
  --lia-submit-button-bg: rgba(255,255,255,.14);
  --lia-submit-note-bg: rgba(0,0,0,.14);

  --lia-course-bg: #ffffff;
  --lia-course-fg: #111111;
  --lia-course-border: rgba(0,0,0,.20);
}

.lia-submit-box{
  margin-top: 1.25rem;
  padding: 1rem;
  border: 1px solid var(--lia-submit-border-on-theme);
  border-radius: 14px;
  background: rgb(var(--lia-submit-bg-rgb));
  color: var(--lia-submit-fg);
  box-shadow: 0 10px 26px rgba(0,0,0,.14);
}

.lia-submit-box label{
  display: block;
  font-weight: 700;
  margin: .7rem 0 .25rem 0;
}

.lia-submit-box input[type="text"],
.lia-submit-box input[type="password"],
.lia-submit-box textarea{
  width: 100%;
  max-width: 900px;
  box-sizing: border-box;
  padding: .78rem .95rem;
  border-radius: 10px;
  line-height: 1.4;
  outline: none;
  background: var(--lia-course-bg);
  color: var(--lia-course-fg);
  border: 1px solid var(--lia-course-border);
}

.lia-submit-box textarea{
  min-height: 110px;
  resize: vertical;
}

.lia-submit-box input::placeholder,
.lia-submit-box textarea::placeholder{
  color: color-mix(in srgb, var(--lia-course-fg) 65%, transparent);
}

.lia-submit-box button{
  margin-top: 1rem;
  padding: .78rem 1.05rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 2.25rem;
  font-weight: 700;
  background: var(--lia-submit-button-bg);
  color: var(--lia-submit-fg);
  border: 1px solid var(--lia-submit-border-on-theme);
}

.lia-submit-box button:disabled{
  opacity: .82;
}

#lia-status{
  margin-top: .85rem;
  font-weight: 700;
}

.lia-frozen-note{
  margin-top: 1rem;
  padding: .8rem 1rem;
  border-radius: 10px;
  border: 1px solid var(--lia-submit-border-on-theme);
  background: var(--lia-submit-note-bg);
  color: var(--lia-submit-fg);
}

#lia-frozen-banner,
#lia-frozen-banner[hidden]{
  display: none !important;
}

#lia-frozen-banner.lia-show-banner{
  display: block !important;
  position: sticky;
  top: 0;
  z-index: 9999;
  margin: 0 0 1rem 0;
  padding: .8rem 1rem;
  border-radius: 12px;
  font-weight: 700;
  background: rgb(var(--lia-submit-bg-rgb));
  color: var(--lia-submit-fg);
  border: 1px solid var(--lia-submit-border-on-theme);
  box-shadow: 0 10px 26px rgba(0,0,0,.14);
}

body.lia-course-frozen button,
body.lia-course-frozen input,
body.lia-course-frozen select,
body.lia-course-frozen textarea,
body.lia-course-frozen a,
body.lia-course-frozen summary,
body.lia-course-frozen [role="button"],
body.lia-course-frozen [contenteditable="true"]{
  pointer-events: none !important;
  cursor: not-allowed !important;
}

body.lia-course-frozen #lia-link{
  pointer-events: auto !important;
  cursor: text !important;
  user-select: text !important;
}
@end

@onload
window.__liaSubmissionDemo = (function () {
  const PASSWORD_CODES = [76,105,97,84,101,115,116,50,54];
  const HASH_PREFIX = "submission=";
  const ADMIN_ATTR = "data-snapshot-admin";

  function fromCodes(arr) {
    return (arr || []).map(function (n) {
      return String.fromCharCode(n);
    }).join("");
  }

  function utf8ToBase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }

  function base64ToUtf8(str) {
    return decodeURIComponent(escape(atob(str)));
  }

  function readCssVar(name) {
    const bodyValue = document.body
      ? getComputedStyle(document.body).getPropertyValue(name).trim()
      : "";
    const rootValue = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return bodyValue || rootValue || "";
  }

  function parseRgbTriplet(raw) {
    const nums = String(raw || "").match(/\d+(\.\d+)?/g) || [];
    if (nums.length < 3) return [106, 92, 255];
    return nums.slice(0, 3).map(function (v) { return Number(v); });
  }

  function rgbaFromColor(color, alphaFallback) {
    const nums = String(color || "").match(/\d+(\.\d+)?/g) || [];
    if (nums.length >= 3) {
      return "rgba(" + nums[0] + "," + nums[1] + "," + nums[2] + "," + alphaFallback + ")";
    }
    return "rgba(0,0,0," + alphaFallback + ")";
  }

  function applyThemeContrast() {
    const rgb = parseRgbTriplet(readCssVar("--color-highlight"));
    const r = rgb[0];
    const g = rgb[1];
    const b = rgb[2];

    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const bright = luminance > 160;

    const root = document.documentElement;

    root.style.setProperty("--lia-submit-bg-rgb", r + ", " + g + ", " + b);
    root.style.setProperty("--lia-submit-fg", bright ? "#111111" : "#ffffff");
    root.style.setProperty(
      "--lia-submit-border-on-theme",
      bright ? "rgba(0,0,0,.24)" : "rgba(255,255,255,.34)"
    );
    root.style.setProperty(
      "--lia-submit-button-bg",
      bright ? "rgba(255,255,255,.38)" : "rgba(255,255,255,.14)"
    );
    root.style.setProperty(
      "--lia-submit-note-bg",
      bright ? "rgba(255,255,255,.30)" : "rgba(0,0,0,.14)"
    );
  }

  function applyCourseColors() {
    const probe = document.querySelector("main, article, section, .lia-content, body") || document.body;
    if (!probe) return;

    const cs = getComputedStyle(probe);
    const bg = cs.backgroundColor || "rgb(255,255,255)";
    const fg = cs.color || "rgb(17,17,17)";
    const border = rgbaFromColor(fg, 0.22);

    const root = document.documentElement;
    root.style.setProperty("--lia-course-bg", bg);
    root.style.setProperty("--lia-course-fg", fg);
    root.style.setProperty("--lia-course-border", border);
  }

  function installThemeWatcher() {
    applyThemeContrast();
    applyCourseColors();

    const observer = new MutationObserver(function () {
      applyThemeContrast();
      applyCourseColors();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style", "data-theme"]
    });

    if (document.body) {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["class", "style", "data-theme"]
      });
    }

    window.addEventListener("resize", function () {
      applyCourseColors();
    });

    setTimeout(function () {
      applyThemeContrast();
      applyCourseColors();
    }, 100);

    setTimeout(function () {
      applyThemeContrast();
      applyCourseColors();
    }, 500);
  }

  function getStatusBox() {
    return document.getElementById("lia-status");
  }

  function getLinkBox() {
    return document.getElementById("lia-link");
  }

  function getBanner() {
    return document.getElementById("lia-frozen-banner");
  }

  function setStatus(msg) {
    const el = getStatusBox();
    if (el) el.textContent = msg || "";
  }

  function isAdminField(el) {
    return !!(el && el.getAttribute && el.getAttribute(ADMIN_ATTR) === "1");
  }

  function isVisible(el) {
    if (!el) return false;
    if (el.type === "hidden") return false;
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }

  function getLearnerFields() {
    return Array.from(document.querySelectorAll("input, textarea, select")).filter(function (el) {
      if (!isVisible(el)) return false;
      if (isAdminField(el)) return false;
      return true;
    });
  }

  function serializeField(el, index) {
    const tag = (el.tagName || "").toLowerCase();
    const type = (el.type || "").toLowerCase();

    return {
      index: index,
      tag: tag,
      type: type,
      value: "value" in el ? String(el.value || "") : "",
      checked: !!el.checked,
      selectedIndex: typeof el.selectedIndex === "number" ? el.selectedIndex : -1
    };
  }

  function readState() {
    const nameEl = document.getElementById("lia-name");
    const fields = getLearnerFields();

    return {
      version: "0.0.1",
      createdAt: new Date().toISOString(),
      name: String((nameEl && nameEl.value) || ""),
      fields: fields.map(function (el, i) {
        return serializeField(el, i);
      })
    };
  }

  function buildLink(state) {
    const base = window.location.href.split("#")[0];
    const token = utf8ToBase64(JSON.stringify(state));
    return base + "#" + HASH_PREFIX + encodeURIComponent(token);
  }

  function tryLoadSnapshot() {
    const hash = String(window.location.hash || "");
    if (!hash.startsWith("#" + HASH_PREFIX)) return null;

    try {
      const token = decodeURIComponent(hash.slice(("#" + HASH_PREFIX).length));
      const obj = JSON.parse(base64ToUtf8(token));
      if (!obj || !Array.isArray(obj.fields)) return null;
      return obj;
    } catch (e) {
      return null;
    }
  }

  function applyFieldState(el, data) {
    if (!el || !data) return;

    const type = (el.type || "").toLowerCase();
    const tag = (el.tagName || "").toLowerCase();

    if (
      tag === "textarea" ||
      tag === "select" ||
      type === "text" ||
      type === "number" ||
      type === "email" ||
      type === "search" ||
      type === "tel" ||
      type === "url" ||
      type === "password"
    ) {
      el.value = data.value || "";
    }

    if (type === "checkbox" || type === "radio") {
      el.checked = !!data.checked;
    }

    if (tag === "select" && typeof data.selectedIndex === "number" && data.selectedIndex >= 0) {
      el.selectedIndex = data.selectedIndex;
    }

    try { el.disabled = true; } catch (e) {}
    try { el.readOnly = true; } catch (e) {}
  }

  function showBanner() {
    const banner = getBanner();
    if (banner) {
      banner.hidden = false;
      banner.classList.add("lia-show-banner");
    }
  }

  function hardFreezeCourse(state, link) {
    const nameEl = document.getElementById("lia-name");
    const pwEl = document.getElementById("lia-password");
    const btnEl = document.getElementById("lia-create-link");
    const linkEl = getLinkBox();

    if (nameEl) {
      nameEl.value = state.name || "";
      nameEl.disabled = true;
      nameEl.readOnly = true;
    }

    const fields = getLearnerFields();
    fields.forEach(function (el, i) {
      applyFieldState(el, state.fields[i]);
    });

    if (pwEl) {
      pwEl.value = "";
      pwEl.disabled = true;
      pwEl.readOnly = true;
      pwEl.placeholder = "Im Abgabemodus gesperrt";
    }

    if (btnEl) {
      btnEl.disabled = true;
      btnEl.textContent = "Abgabe eingefroren";
    }

    if (linkEl) {
      linkEl.value = link || window.location.href;
      linkEl.readOnly = true;
      linkEl.disabled = false;
    }

    document.body.classList.add("lia-course-frozen");
    showBanner();

    const note = document.getElementById("lia-frozen-note");
    if (note) {
      note.innerHTML = "Dies ist ein <strong>eingefrorener Abgabestand</strong>. Der Kurs ist nicht mehr bedienbar.";
    }

    setStatus("Kurs eingefroren.");
  }

  function createLink() {
    const pwEl = document.getElementById("lia-password");
    const linkEl = getLinkBox();
    const pw = String((pwEl && pwEl.value) || "");

    if (pw !== fromCodes(PASSWORD_CODES)) {
      setStatus("Passwort falsch.");
      return;
    }

    const state = readState();
    const link = buildLink(state);

    if (linkEl) {
      linkEl.value = link;
    }

    hardFreezeCourse(state, link);
    setStatus("Abgabelink erstellt.");
  }

  function initSnapshotMode() {
    const snapshot = tryLoadSnapshot();
    if (!snapshot) return;

    let tries = 0;
    const timer = setInterval(function () {
      tries += 1;

      if (document.querySelectorAll("input, textarea, select").length > 0 || tries > 40) {
        clearInterval(timer);
        hardFreezeCourse(snapshot, window.location.href);
      }
    }, 200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      installThemeWatcher();
      initSnapshotMode();
    });
  } else {
    setTimeout(function () {
      installThemeWatcher();
      initSnapshotMode();
    }, 0);
  }

  return {
    createLink: createLink
  };
})();
@end
-->

# Reine LiaScript-Abgabelink-Demo

<div id="lia-frozen-banner" hidden>
  Eingefrorener Abgabestand
</div>

$a)\;\;$ $7000+123=$ [[  7123  ]]

$b)\;\;$ $6000+123=$ [[  6123  ]]

$c)\;\;$ $5000+123=$ [[  5123  ]]

$d)\;\;$ $4000+123=$ [[  4123  ]]

<div class="lia-submit-box">
<h2>Abgabeerstellung</h2>
  <label for="lia-name">Name</label>
  <input id="lia-name" data-snapshot-admin="1" type="text" placeholder="Name eingeben">

  <label for="lia-password">Passwort</label>
  <input id="lia-password" data-snapshot-admin="1" type="password" placeholder="Passwort eingeben">

  <button id="lia-create-link" data-snapshot-admin="1" onclick="window.__liaSubmissionDemo.createLink()">Abgabelink erstellen</button>

  <label for="lia-link">Abgabelink</label>
  <textarea id="lia-link" data-snapshot-admin="1" readonly placeholder="Hier erscheint der erzeugte Link"></textarea>

  <div id="lia-status"></div>
  <div id="lia-frozen-note" class="lia-frozen-note"></div>
</div>