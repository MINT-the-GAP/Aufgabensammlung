<!--
version: 0.0.1
language: de
author: Martin Lommatzsch
comment: LiaScript-Abgabelink mit exakterer Zustandsprotokollierung und Freeze













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
  display: block;
  width: 100%;
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
  display: none;
  margin-top: 1rem;
  padding: .8rem 1rem;
  border-radius: 10px;
  border: 1px solid var(--lia-submit-border-on-theme);
  background: var(--lia-submit-note-bg);
  color: var(--lia-submit-fg);
}

body.lia-course-frozen .lia-frozen-note{
  display: block;
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

.lia-snapshot-host{
  display: none;
}

body.lia-snapshot-mode .lia-snapshot-host{
  display: block !important;
}

body.lia-snapshot-mode .lia-live-root{
  display: none !important;
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
    const probe = document.querySelector(".lia-content, main, article, section, body") || document.body;
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

  function setStatus(msg) {
    const el = getStatusBox();
    if (el) el.textContent = msg || "";
  }

  function getContentRoot() {
    return (
      document.querySelector(".lia-content") ||
      document.querySelector("main") ||
      document.querySelector("article") ||
      document.querySelector("section")
    );
  }

  function ensureSnapshotHost() {
    let host = document.getElementById("lia-snapshot-host");
    if (host) return host;

    const root = getContentRoot();
    if (!root || !root.parentNode) return null;

    host = document.createElement("div");
    host.id = "lia-snapshot-host";
    host.className = "lia-snapshot-host";

    root.parentNode.insertBefore(host, root.nextSibling);
    return host;
  }

  function markLiveRoot(root) {
    if (!root) return;
    root.classList.add("lia-live-root");
  }

  function isAdminField(el) {
    return !!(el && el.getAttribute && el.getAttribute(ADMIN_ATTR) === "1");
  }

  function syncFormStateIntoClone(srcRoot, cloneRoot) {
    const srcFields = Array.from(srcRoot.querySelectorAll("input, textarea, select"));
    const cloneFields = Array.from(cloneRoot.querySelectorAll("input, textarea, select"));

    srcFields.forEach(function (src, i) {
      const clone = cloneFields[i];
      if (!clone) return;

      const tag = (src.tagName || "").toLowerCase();
      const type = (src.type || "").toLowerCase();

      if (tag === "textarea") {
        clone.value = String(src.value || "");
        clone.textContent = String(src.value || "");
        return;
      }

      if (tag === "select") {
        clone.selectedIndex = src.selectedIndex;
        Array.from(clone.options || []).forEach(function (opt, idx) {
          if (idx === src.selectedIndex) {
            opt.setAttribute("selected", "selected");
          } else {
            opt.removeAttribute("selected");
          }
        });
        return;
      }

      if (type === "checkbox" || type === "radio") {
        clone.checked = !!src.checked;
        if (src.checked) {
          clone.setAttribute("checked", "checked");
        } else {
          clone.removeAttribute("checked");
        }
        return;
      }

      if ("value" in src) {
        if (isAdminField(src) && type === "password") {
          clone.value = "";
          clone.setAttribute("value", "");
        } else {
          clone.value = String(src.value || "");
          clone.setAttribute("value", String(src.value || ""));
        }
      }
    });
  }

  function freezeAdminAreaInClone(cloneRoot) {
    const pwEl = cloneRoot.querySelector("#lia-password");
    const btnEl = cloneRoot.querySelector("#lia-create-link");
    const linkEl = cloneRoot.querySelector("#lia-link");
    const noteEl = cloneRoot.querySelector("#lia-frozen-note");

    if (pwEl) {
      pwEl.value = "";
      pwEl.setAttribute("value", "");
      pwEl.disabled = true;
      pwEl.readOnly = true;
      pwEl.placeholder = "Im Abgabemodus gesperrt";
    }

    if (btnEl) {
      btnEl.disabled = true;
      if ((btnEl.tagName || "").toLowerCase() === "input") {
        btnEl.value = "Abgabe eingefroren";
      } else {
        btnEl.textContent = "Abgabe eingefroren";
      }
    }

    if (linkEl) {
      linkEl.readOnly = true;
    }

    if (noteEl) {
      noteEl.style.display = "block";
      noteEl.innerHTML = "Dies ist ein <strong>eingefrorener Abgabestand</strong>. Der Kurs ist nicht mehr bedienbar.";
    }
  }

  function buildVisualSnapshotHtml() {
    const srcRoot = getContentRoot();
    const cloneRoot = srcRoot.cloneNode(true);

    syncFormStateIntoClone(srcRoot, cloneRoot);
    freezeAdminAreaInClone(cloneRoot);

    return cloneRoot.innerHTML;
  }

  function buildSnapshotPayload() {
    return {
      version: "dom-freeze-3",
      createdAt: new Date().toISOString(),
      html: buildVisualSnapshotHtml()
    };
  }

  function buildLink(payload) {
    const base = window.location.href.split("#")[0];
    const token = utf8ToBase64(JSON.stringify(payload));
    return base + "#" + HASH_PREFIX + encodeURIComponent(token);
  }

  function tryLoadSnapshot() {
    const hash = String(window.location.hash || "");
    if (!hash.startsWith("#" + HASH_PREFIX)) return null;

    try {
      const token = decodeURIComponent(hash.slice(("#" + HASH_PREFIX).length));
      const obj = JSON.parse(base64ToUtf8(token));
      if (!obj || typeof obj.html !== "string") return null;
      return obj;
    } catch (e) {
      return null;
    }
  }

  function freezeCurrentPage(link) {
    const nameEl = document.getElementById("lia-name");
    const pwEl = document.getElementById("lia-password");
    const btnEl = document.getElementById("lia-create-link");
    const linkEl = getLinkBox();
    const noteEl = document.getElementById("lia-frozen-note");

    if (nameEl) {
      nameEl.disabled = true;
      nameEl.readOnly = true;
    }

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
      linkEl.value = link || "";
      linkEl.readOnly = true;
      linkEl.disabled = false;
    }

    if (noteEl) {
      noteEl.style.display = "block";
      noteEl.innerHTML = "Dies ist ein <strong>eingefrorener Abgabestand</strong>. Der Kurs ist nicht mehr bedienbar.";
    }

    document.body.classList.add("lia-course-frozen");
  }

  function mountSnapshotHtml(html) {
    const root = getContentRoot();
    const host = ensureSnapshotHost();

    if (!root || !host || !html) return false;

    markLiveRoot(root);
    host.innerHTML = html;

    if (!host.innerHTML.trim()) return false;

    document.body.classList.add("lia-course-frozen");
    document.body.classList.add("lia-snapshot-mode");

    const linkEl = host.querySelector("#lia-link");
    if (linkEl) {
      linkEl.value = window.location.href;
      linkEl.readOnly = true;
    }

    return true;
  }

  function createLink() {
    try {
      const pwEl = document.getElementById("lia-password");
      const pw = String((pwEl && pwEl.value) || "");

      if (pw !== fromCodes(PASSWORD_CODES)) {
        setStatus("Passwort falsch.");
        return;
      }

      const payload = buildSnapshotPayload();
      const link = buildLink(payload);

      const linkEl = getLinkBox();
      if (linkEl) {
        linkEl.value = link;
      }

      freezeCurrentPage(link);
      setStatus("Abgabelink erstellt.");
    } catch (err) {
      console.error(err);
      setStatus("Fehler bei der Linkerstellung: " + (err && err.message ? err.message : err));
    }
  }

  function initSnapshotMode() {
    const snapshot = tryLoadSnapshot();
    if (!snapshot) return;

    let tries = 0;
    const timer = setInterval(function () {
      tries += 1;

      const root = getContentRoot();
      if (!root) {
        if (tries > 120) clearInterval(timer);
        return;
      }

      const ok = mountSnapshotHtml(snapshot.html);
      if (ok) {
        clearInterval(timer);
        return;
      }

      if (tries > 120) {
        clearInterval(timer);
      }
    }, 100);
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

