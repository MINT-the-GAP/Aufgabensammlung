<!--
version: 0.0.1
language: de
author: Martin Lommatzsch
comment: LiaScript-Abgabelink mit exakterer Zustandsprotokollierung und Freeze



import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/MatheREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/DeutschREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/MarkerREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/KoordREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/OCRREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/AnnotationREADME.md










@onload
window.__liaSubmissionDemo = (function () {
  const PARAM_NAME = "submission";
  const ADMIN_ATTR = "data-snapshot-admin";
  const STORAGE_PREFIX = "__lia_submission_demo__:";
  const PAYLOAD_VERSION = "sf-mini-ti-2";
  const DEBUG = true;
  const EVALUATION_TITLE = "Auswertung";


  let snapshotPayload = null;
  let declaredSlidesCache = [];
  let liveSlidesByHash = Object.create(null);

  let routeBridgeInstalled = false;
  let liveBindingsInstalled = false;
  let freezeBindingsInstalled = false;
  let themeWatcherInstalled = false;

  let liveRouteCurrentHash = "";
  let lastKnownName = "";
  let freezeLinkValue = "";

  let applyTimer = null;
  let freezeBarTimer = null;
  let applyRunToken = 0;
  let stabilizationToken = 0;
  let freezeLoadingVisible = false;
  let unvisitedPlaceholderHash = "";
  let declaredEvaluationByHash = Object.create(null);
  let initialBootDone = false;

  let evaluationPlaceholderHash = "";
  let submissionStartHash = "";

  let assignmentDetailRefreshTimer = null;
  let assignmentDetailSerial = 0;

  let snapshotIsSharedLinkMode = false;
  let manualAwardValuesByKey = Object.create(null);

  let devtoolsWatchInstalled = false;
  let devtoolsWatchTimer = 0;
  let devtoolsLikelyOpen = false;

  let tabTrackingArmed = false;
  let f12TrackingInstalled = false;
  let tabTrackingInstalled = false;

  let lastTrackedF12Stamp = -1;
  let lastTrackedTabStamp = -1;
  let tabBlurProbeTimer = 0;

  let declaredEvaluationOptions = {
    trackF12: false,
    trackTab: false
  };

  let liveSecurityState = {
    f12: 0,
    tab: 0
  };
  
  let lastTrackedF12KeyStamp = -1;
  let declaredSlidesLoaded = false;

  // =========================================================
  // Debug
  // =========================================================

  function log() {
    if (!DEBUG) return;
    const args = Array.prototype.slice.call(arguments);
    args.unshift("[LIA-FREEZE]");
    console.log.apply(console, args);
  }

  function warn() {
    if (!DEBUG) return;
    const args = Array.prototype.slice.call(arguments);
    args.unshift("[LIA-FREEZE]");
    console.warn.apply(console, args);
  }

  // =========================================================
  // Utilities
  // =========================================================

function utf8ToBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function toBase64Url(str) {
  return String(str || "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function fromBase64Url(str) {
  let s = String(str || "")
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  while (s.length % 4 !== 0) {
    s += "=";
  }

  return s;
}

function base64ToUtf8(str) {
  return decodeURIComponent(escape(atob(fromBase64Url(str))));
}

  function sleep(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  function normalizeSpace(str) {
    return String(str || "").replace(/\s+/g, " ").trim();
  }

  function escapeHtml(str) {
    return String(str || "").replace(/[&<>"']/g, function (ch) {
      return ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[ch];
    });
  }

  function uniqueElements(list) {
    const seen = new Set();
    const out = [];

    (list || []).forEach(function (el) {
      if (!el) return;
      if (seen.has(el)) return;
      seen.add(el);
      out.push(el);
    });

    return out;
  }

  function hashSort(a, b) {
    const na = Number(String(a && a.h || "").replace(/^#/, ""));
    const nb = Number(String(b && b.h || "").replace(/^#/, ""));
    if (isFinite(na) && isFinite(nb)) return na - nb;
    return String(a && a.h || "").localeCompare(String(b && b.h || ""));
  }

  function shortHash(str) {
    const src = String(str || "");
    let h = 2166136261;

    for (let i = 0; i < src.length; i++) {
      h ^= src.charCodeAt(i);
      h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
    }

    return (h >>> 0).toString(36);
  }

  function isEditableTextbox(el) {
    if (!el) return false;
    if (el.isContentEditable) return true;
    if (String(el.getAttribute("contenteditable") || "").toLowerCase() === "true") return true;
    if (String(el.getAttribute("role") || "").toLowerCase() === "textbox") return true;
    return false;
  }

  function isRenderedElement(el) {
    if (!el) return false;
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden") return false;
    const rects = el.getClientRects();
    return !!(rects && rects.length);
  }

  function hasRenderedSelfOrDescendant(el) {
    if (!el) return false;
    if (isRenderedElement(el)) return true;

    const candidates = el.querySelectorAll(
      "input, textarea, select, button, a, label, summary, [role='button'], [role='textbox'], [contenteditable='true'], h1, h2, h3, h4, h5, h6"
    );

    for (let i = 0; i < candidates.length; i++) {
      if (isRenderedElement(candidates[i])) return true;
    }
    return false;
  }

function cleanHashValue(raw) {
  const h = String(raw || "");

  if (!h) return "#1";

  // Neues Format: #7&submission=TOKEN
  let m = h.match(/^(#\d+)&submission=.+$/);
  if (m) {
    return m[1];
  }

  // Altes Format: #submission=TOKEN#7
  if (h.startsWith("#" + PARAM_NAME + "=")) {
    const lastHash = h.lastIndexOf("#");
    if (lastHash > 0) {
      const trailing = h.slice(lastHash);
      if (/^#\d+$/.test(trailing)) return trailing;
    }
    return snapshotPayload && snapshotPayload.sh ? snapshotPayload.sh : "#1";
  }

  return h;
}

  function descriptorLooksMaterialized(desc) {
    if (!desc) return false;
    if (normalizeSpace(desc.t)) return true;
    if (Number(desc.qc || 0) > 0) return true;
    if (normalizeSpace(desc.x)) return true;
    return false;
  }

  // =========================================================
  // Theme / Farben
  // =========================================================

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

  function getVisibleContentCandidates() {
    return Array.from(document.querySelectorAll(
      ".lia-slide__content, .lia-content, main, article, section, #content"
    )).filter(function (el) {
      if (!(el instanceof Element)) return false;
      if (el.hidden) return false;

      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden") return false;

      return isRenderedElement(el) || hasRenderedSelfOrDescendant(el);
    });
  }

  function getBaseContentHost() {
    const candidates = getVisibleContentCandidates();

    if (candidates.length) {
      candidates.sort(function (a, b) {
        const ar = a.getBoundingClientRect();
        const br = b.getBoundingClientRect();
        const as = Math.max(0, ar.width) * Math.max(0, ar.height);
        const bs = Math.max(0, br.width) * Math.max(0, br.height);
        return bs - as;
      });
      return candidates[0];
    }

    return document.body;
  }

  function applyCourseColors() {
    function firstOpaqueBackground(startEl) {
      let el = startEl;

      while (el && el !== document.documentElement) {
        const cs = getComputedStyle(el);
        const bg = cs.backgroundColor || "";

        if (
          bg &&
          bg !== "transparent" &&
          bg !== "rgba(0, 0, 0, 0)" &&
          bg !== "rgba(0,0,0,0)"
        ) {
          return {
            bg: bg,
            fg: cs.color || "rgb(17,17,17)"
          };
        }

        el = el.parentElement;
      }

      const bodyCs = getComputedStyle(document.body);
      const rootCs = getComputedStyle(document.documentElement);

      return {
        bg: bodyCs.backgroundColor || rootCs.backgroundColor || "rgb(255,255,255)",
        fg: bodyCs.color || rootCs.color || "rgb(17,17,17)"
      };
    }

    const probe = getBaseContentHost() || document.body;
    const colors = firstOpaqueBackground(probe);
    const border = rgbaFromColor(colors.fg, 0.22);

    const root = document.documentElement;
    root.style.setProperty("--lia-course-bg", colors.bg);
    root.style.setProperty("--lia-course-fg", colors.fg);
    root.style.setProperty("--lia-course-border", border);
  }



function ensureRuntimeStyle() {
  if (document.getElementById("lia-submission-runtime-style")) return;

  const style = document.createElement("style");
  style.id = "lia-submission-runtime-style";
  style.textContent = `
:root{
  --lia-submit-bg-rgb: 106, 92, 255;
  --lia-submit-fg: #ffffff;
  --lia-submit-border-on-theme: rgba(255,255,255,.34);
  --lia-submit-button-bg: rgba(255,255,255,.14);
  --lia-submit-note-bg: rgba(0,0,0,.14);

  --lia-course-bg: #ffffff;
  --lia-course-fg: #111111;
  --lia-course-border: rgba(0,0,0,.20);

  --lia-submit-input-bg: #ffffff;
  --lia-submit-input-fg: #111111;
  --lia-submit-input-border: rgba(0,0,0,.20);
  --lia-submit-placeholder: rgba(17,17,17,.65);
}

@media (prefers-color-scheme: dark){
  :root{
    --lia-submit-input-bg: #1f1f24;
    --lia-submit-input-fg: #f3f3f3;
    --lia-submit-input-border: rgba(255,255,255,.20);
    --lia-submit-placeholder: rgba(243,243,243,.60);
  }
}

@media (prefers-color-scheme: light){
  :root{
    --lia-submit-input-bg: #ffffff;
    --lia-submit-input-fg: #111111;
    --lia-submit-input-border: rgba(0,0,0,.20);
    --lia-submit-placeholder: rgba(17,17,17,.65);
  }
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

.lia-adetails-points{
  display:inline-flex;
  align-items:center;
  align-self:center;
  gap:.28rem;
  margin-left:.7rem;
  font-weight:700;
  white-space:nowrap;
  opacity:.92;
  color:inherit;
}

.lia-adetails-award-input{
  width:3.2em;
  min-width:3.2em;
  box-sizing:border-box;
  padding:.10rem .28rem;
  border-radius:8px;
  border:1px solid color-mix(in srgb, rgb(var(--lia-submit-bg-rgb)) 55%, var(--lia-course-fg) 45%);
  background:color-mix(in srgb, rgb(var(--lia-submit-bg-rgb)) 99%, var(--lia-course-bg) 1%);
  color:var(--lia-course-fg) !important;
  -webkit-text-fill-color:var(--lia-course-fg) !important;
  caret-color:var(--lia-course-fg);
  font:inherit;
  font-weight:700;
  line-height:1.15;
  text-align:center;
}

.lia-adetails-award-input::placeholder{
  color:color-mix(in srgb, var(--lia-course-fg) 60%, transparent);
}

body.lia-shared-freeze-link .lia-quiz__control .lia-adetails-points{
  pointer-events:auto !important;
}

body.lia-shared-freeze-link .lia-quiz__control .lia-adetails-points *{
  pointer-events:auto !important;
}

body.lia-shared-freeze-link .lia-frozen-scope .lia-adetails-award-input{
  pointer-events:auto !important;
  cursor:text !important;
  user-select:text !important;
  -webkit-user-select:text !important;
}

.lia-quiz__control .lia-adetails-points{
  pointer-events:none !important;
}

.lia-submit-box label{
  display: block;
  font-weight: 700;
  margin: .7rem 0 .25rem 0;
}

.lia-submit-box input[type="text"],
.lia-submit-box textarea{
  text-align: left !important;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: .78rem .95rem;
  border-radius: 10px;
  line-height: 1.4;
  outline: none;
  background: var(--lia-course-bg);
  color: var(--lia-course-fg) !important;
  -webkit-text-fill-color: var(--lia-course-fg) !important;
  caret-color: var(--lia-course-fg);
  border: 1px solid var(--lia-course-border);
  opacity: 1;
}

.lia-submit-box input[type="text"]:read-only,
.lia-submit-box textarea:read-only,
.lia-submit-box input[type="text"]:disabled,
.lia-submit-box textarea:disabled{
  color: var(--lia-course-fg) !important;
  -webkit-text-fill-color: var(--lia-course-fg) !important;
  opacity: 1;
}

.lia-submit-box input[type="text"]::placeholder,
.lia-submit-box textarea::placeholder{
  color: color-mix(in srgb, var(--lia-course-fg) 65%, transparent);
  -webkit-text-fill-color: color-mix(in srgb, var(--lia-course-fg) 65%, transparent);
}

.lia-submit-box textarea{
  min-height: 110px;
  resize: vertical;
}

.lia-submit-box input::placeholder,
.lia-submit-box textarea::placeholder{
  color: var(--lia-submit-placeholder);
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

.lia-frozen-scope button,
.lia-frozen-scope input,
.lia-frozen-scope select,
.lia-frozen-scope textarea,
.lia-frozen-scope a,
.lia-frozen-scope summary,
.lia-frozen-scope [role="button"],
.lia-frozen-scope [contenteditable="true"]{
  pointer-events: none !important;
  cursor: not-allowed !important;
}

.lia-frozen-scope #lia-link{
  pointer-events: auto !important;
  cursor: text !important;
  user-select: text !important;
}

#lia-freeze-info{
  display: none;
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 1rem 0;
  padding: .8rem 1rem;
  border-radius: 12px;
  font-weight: 700;
  background: rgb(var(--lia-submit-bg-rgb));
  color: var(--lia-submit-fg);
  border: 1px solid var(--lia-submit-border-on-theme);
  box-shadow: 0 10px 26px rgba(0,0,0,.14);
}

#lia-freeze-info strong{
  font-weight: 800;
}

body.lia-snapshot-mode #lia-freeze-info{
  display: block !important;
}

.lia-frozen-static-quiz{
  display: block;
}

.lia-frozen-static-quiz *{
  pointer-events: none !important;
}
  `.trim();

  (document.head || document.documentElement).appendChild(style);
}



  function installThemeWatcher() {
    if (themeWatcherInstalled) return;
    themeWatcherInstalled = true;

    applyThemeContrast();
    applyCourseColors();

    const observer = new MutationObserver(function () {
      applyThemeContrast();
      applyCourseColors();
      refreshFreezeBar();
      syncFrozenScreens();
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
      refreshFreezeBar();
      syncFrozenScreens();
    });

    setTimeout(function () {
      applyThemeContrast();
      applyCourseColors();
      refreshFreezeBar();
      syncFrozenScreens();
    }, 100);
  }

  // =========================================================
  // URL / Storage
  // =========================================================

  function getEncodedCourseSpecFromViewerUrl() {
    const search = String(window.location.search || "");
    if (!search || search === "?") return "";
    return search.slice(1);
  }

  function getCourseUrlFromViewerUrl() {
    const encoded = getEncodedCourseSpecFromViewerUrl();
    if (!encoded) return "";

    try {
      return decodeURIComponent(encoded);
    } catch (e) {
      return encoded;
    }
  }

  function stripSubmissionFromCourseUrl(courseUrl) {
    if (!courseUrl) return "";

    try {
      const u = new URL(courseUrl, window.location.href);
      const frag = String(u.hash || "").replace(/^#/, "");
      if (frag.startsWith(PARAM_NAME + "=")) {
        u.hash = "";
      }
      return u.toString();
    } catch (e) {
      return String(courseUrl).replace(
        new RegExp("#" + PARAM_NAME + "=[^#]*$"),
        ""
      );
    }
  }

  function normalizeCourseUrlForStorage(courseUrl) {
    if (!courseUrl) return "";
    try {
      const u = new URL(courseUrl, window.location.href);
      u.hash = "";
      return u.toString();
    } catch (e) {
      return String(courseUrl).replace(/#.*$/, "");
    }
  }

  function getStorageKey() {
    const courseUrl = getCourseUrlFromViewerUrl();
    const base = normalizeCourseUrlForStorage(
      stripSubmissionFromCourseUrl(courseUrl)
    );
    return STORAGE_PREFIX + base;
  }

  function storeSubmissionToken(token) {
    if (!token) return;
    try { sessionStorage.setItem(getStorageKey(), token); } catch (e) {}
  }

  function loadStoredSubmissionToken() {
    try {
      return sessionStorage.getItem(getStorageKey()) || null;
    } catch (e) {
      return null;
    }
  }

  function clearStoredSubmissionToken() {
    try { sessionStorage.removeItem(getStorageKey()); } catch (e) {}
  }

  function getSubmissionTokenFromCourseUrl() {
    const courseUrl = getCourseUrlFromViewerUrl();
    if (!courseUrl) return null;

    try {
      const u = new URL(courseUrl, window.location.href);
      const frag = String(u.hash || "").replace(/^#/, "");
      if (!frag.startsWith(PARAM_NAME + "=")) return null;
      return decodeURIComponent(frag.slice((PARAM_NAME + "=").length));
    } catch (e) {
      const match = String(courseUrl).match(
        new RegExp("#" + PARAM_NAME + "=([^#]+)$")
      );
      return match ? decodeURIComponent(match[1]) : null;
    }
  }

function getSubmissionTokenFromViewerHash() {
  const h = String(window.location.hash || "");
  if (!h) return null;

  // Neues Format: #7&submission=TOKEN
  let m = h.match(/[?&]submission=([^&]+)/);
  if (m && m[1]) {
    return decodeURIComponent(m[1]);
  }

  // Altes Format weiterhin unterstützen: #submission=TOKEN#7
  if (h.startsWith("#" + PARAM_NAME + "=")) {
    const raw = h.slice(("#" + PARAM_NAME + "=").length);
    const token = raw.split("#")[0];
    return token ? decodeURIComponent(token) : null;
  }

  return null;
}

  function getSubmissionToken() {
    const direct =
      getSubmissionTokenFromCourseUrl() ||
      getSubmissionTokenFromViewerHash();

    if (direct) {
      storeSubmissionToken(direct);
      return direct;
    }

    return loadStoredSubmissionToken();
  }

function sanitizeMalformedSubmissionHash() {
  const raw = String(window.location.hash || "");
  if (!raw) return false;

  // Neues Format: #7&submission=TOKEN  ->  #7
  let m = raw.match(/^(#\d+)&submission=.+$/);
  if (m) {
    try {
      history.replaceState(null, "", m[1]);
    } catch (e) {
      window.location.hash = m[1];
    }
    return true;
  }

  // Altes Format: #submission=TOKEN#7  ->  #7
  if (raw.startsWith("#" + PARAM_NAME + "=")) {
    const lastHash = raw.lastIndexOf("#");
    if (lastHash > 0) {
      const trailing = raw.slice(lastHash);
      if (/^#\d+$/.test(trailing)) {
        try {
          history.replaceState(null, "", trailing);
        } catch (e) {
          window.location.hash = trailing;
        }
        return true;
      }
    }
  }

  return false;
}

  function getCurrentHash() {
    sanitizeMalformedSubmissionHash();
    return cleanHashValue(window.location.hash || "") || "#1";
  }

  function setHashSilently(hash) {
    const target = String(hash || "#1");
    const base = window.location.href.split("#")[0];
    const newUrl = base + target;

    try {
      history.replaceState(history.state, "", newUrl);
    } catch (e) {
      window.location.hash = target;
    }
  }

function buildLink(payload) {
  const baseCourseUrl = stripSubmissionFromCourseUrl(getCourseUrlFromViewerUrl());
  if (!baseCourseUrl) return window.location.href;

  const rawToken = utf8ToBase64(JSON.stringify(payload));
  const token = toBase64Url(rawToken);

  storeSubmissionToken(token);

  const viewerBase = window.location.href.split("?")[0].split("#")[0];
  const encodedCourseUrl = encodeURIComponent(baseCourseUrl);
  const slideHash = /^#\d+$/.test(String(payload && payload.sh || ""))
    ? String(payload.sh)
    : "#1";

  // Neues Format:
  //   ...?COURSE_URL#7&submission=TOKEN
  // Vorteil:
  //   - Folienhash steht vorne und ist für LiaScript direkt lesbar
  //   - Token bleibt im Fragment und geht nicht als Referrer raus
  return (
    viewerBase +
    "?" +
    encodedCourseUrl +
    slideHash +
    "&" +
    PARAM_NAME +
    "=" +
    token
  );
}

  function tryLoadSnapshot() {
    const token = getSubmissionToken();
    if (!token) return null;

    try {
      const obj = JSON.parse(base64ToUtf8(token));
      if (!obj || !Array.isArray(obj.s)) return null;
      return obj;
    } catch (e) {
      return null;
    }
  }

  // =========================================================
  // DOM / aktuelle Folie
  // =========================================================

  function isLearnerFieldCandidate(el) {
    if (!el) return false;
    if (!(el instanceof Element)) return false;

    if (el.closest && el.closest("#lia-freeze-bar")) return false;
    if (el.closest && el.closest(".lia-submit-box")) return false;

    if (el.getAttribute && el.getAttribute(ADMIN_ATTR) === "1") return false;
    if (el.type === "hidden" || el.hidden) return false;

    const id = String(el.id || "");
    const cls = normalizeSpace(el.className || "");
    const tag = String(el.tagName || "").toLowerCase();

    if (id === "lia-input-search") return false;
    if (/^lia-theme-color-/.test(id)) return false;
    if (id === "lia-checkbox-google_translate") return false;

    if (/\blia-radio\b/.test(cls)) return false;
    if (/\blia-checkbox\b/.test(cls) && !/\blia-quiz__input\b/.test(cls)) return false;
    if (/\bace_text-input\b/.test(cls)) return false;

    if (tag === "lia-editor") return false;

    return true;
  }

  function getVisibleHeadingsFromRoot(root) {
    if (!root || !root.querySelectorAll) return [];

    return Array.from(
      root.querySelectorAll("h1, h2, h3, h4, h5, h6")
    ).filter(function (el) {
      if (el.closest(".lia-submit-box")) return false;
      if (el.closest("#lia-freeze-bar")) return false;
      return isRenderedElement(el);
    });
  }

  function pickBestVisibleHeading(headings) {
    headings = Array.isArray(headings) ? headings : [];
    if (!headings.length) return null;

    const viewportTop = 0;
    const preferredBand = 220;

    let best = null;
    let bestScore = Infinity;

    headings.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      const top = rect.top;

      let score;
      if (top >= viewportTop - 20 && top <= preferredBand) {
        score = Math.abs(top);
      } else {
        score = Math.abs(top) + 500;
      }

      if (score < bestScore) {
        bestScore = score;
        best = el;
      }
    });

    return best || headings[0] || null;
  }

  function getVisibleTitleAnchorFromRoot(root) {
    return pickBestVisibleHeading(getVisibleHeadingsFromRoot(root));
  }

  function getVisibleTitleAnchor() {
    const host = getBaseContentHost();
    return getVisibleTitleAnchorFromRoot(host);
  }

  function getSlideRootFromVisibleHeading() {
    const host = getBaseContentHost();
    const heading = getVisibleTitleAnchor();

    if (!host || !heading) return host || document.body;
    if (!host.contains(heading)) return host;

    let node = heading.parentElement;
    let best = null;

    while (node && node instanceof Element) {
      const visibleHeadings = getVisibleHeadingsFromRoot(node);
      const containsTargetHeading = visibleHeadings.indexOf(heading) >= 0;

      if (containsTargetHeading) {
        best = node;
      }

      if (node === host) break;
      node = node.parentElement;
    }

    return best || host;
  }

  function getContentHost() {
    return getSlideRootFromVisibleHeading() || getBaseContentHost() || document.body;
  }

  function getCurrentSlideTitle() {
    const anchor = getVisibleTitleAnchor();
    if (!anchor) return "";
    return normalizeSpace(anchor.textContent || "");
  }

  function getTextSampleFromRoot(root) {
    if (!root) return "";

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (!isRenderedElement(parent)) return NodeFilter.FILTER_REJECT;

          if (
            parent.closest("#lia-freeze-bar") ||
            parent.closest(".lia-submit-box") ||
            parent.closest(".lia-quiz__feedback") ||
            parent.closest("button, input, textarea, select, option, summary, a")
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          const txt = normalizeSpace(node.textContent || "");
          return txt ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      }
    );

    const parts = [];
    let n;
    while ((n = walker.nextNode())) {
      const t = normalizeSpace(n.textContent || "");
      if (!t) continue;
      parts.push(t);
      if (normalizeSpace(parts.join(" ")).length >= 120) break;
    }

    return normalizeSpace(parts.join(" ")).slice(0, 120);
  }

  function getCurrentSlideDescriptor() {
    const host = getContentHost();
    const title = getCurrentSlideTitle();
    const quizzes = collectSupportedQuizRootsFromRoot(host);

    return {
      h: getCurrentHash(),
      t: title,
      qc: quizzes.length,
      x: getTextSampleFromRoot(host)
    };
  }


function getRenderedVisibleDeclaredHash() {
  const title = normalizeSpace(getCurrentSlideTitle() || "");
  if (!title) return "";

  const declared = getDeclaredSlides();
  for (let i = 0; i < declared.length; i++) {
    const slide = declared[i];
    if (!slide || !slide.h) continue;
    if (slide.vt === "evaluation") continue;

    if (normalizeSpace(slide.t || "") === title) {
      return String(slide.h || "");
    }
  }

  return "";
}


function applySnapshotToCurrentVisibleHost(reason) {
  const host = getContentHost() || document.body;
  if (!host || !hasRenderedSelfOrDescendant(host)) {
    log("boot-visible-skip", "reason=" + String(reason || ""), "host=not-ready");
    return false;
  }

  const visibleHash =
    getRenderedVisibleDeclaredHash() ||
    cleanHashValue(getCurrentHash() || "") ||
    "#1";

  if (!visibleHash) {
    log("boot-visible-skip", "reason=" + String(reason || ""), "visible=<empty>");
    return false;
  }

  if (isEvaluationTarget(visibleHash)) {
    hideUnvisitedPlaceholder();
    showEvaluationPlaceholder(visibleHash);
    reinforceFrozenUi();
    setFreezeLoading(false, "boot-visible-evaluation:" + visibleHash);
    log("boot-visible-apply", "reason=" + String(reason || ""), "hash=" + visibleHash, "type=evaluation");
    return true;
  }

  if (isUnvisitedTarget(visibleHash)) {
    hideUnvisitedPlaceholder();
    showUnvisitedPlaceholder(visibleHash);
    reinforceFrozenUi();
    setFreezeLoading(false, "boot-visible-unvisited:" + visibleHash);
    log("boot-visible-apply", "reason=" + String(reason || ""), "hash=" + visibleHash, "type=unvisited");
    return true;
  }

  const slide = getSnapshotSlideForHash(visibleHash);
  if (!slide) {
    log("boot-visible-skip", "reason=" + String(reason || ""), "hash=" + visibleHash, "stored=no");
    return false;
  }

  hideUnvisitedPlaceholder();
  evaluationPlaceholderHash = "";

  clearStoredGeneralMarkerStateNow("boot-visible:" + visibleHash);

  applyStoredTextQuizStatesToHost(host, slide.q || []);
  applyStoredDropdownStatesToHost(host, slide.d || []);
  applyStoredTileStatesToHost(host, slide.m || []);
  applyStoredChoiceStatesToHost(host, slide.c || []);
  applyStoredOrthographyStatesToHost(host, slide.o || []);
  applyStoredFractionStatesToHost(host, slide.fq || []);
  applyStoredMarkerQuizStatesToHost(host, slide.mq || []);
  applyStoredCanvasStatesToHost(host, slide.cv || []);
  applyStoredGeneralMarkerState(slide.gm || null);

  reinforceFrozenUi();
  setFreezeLoading(false, "boot-visible:" + visibleHash);

  log(
    "boot-visible-apply",
    "reason=" + String(reason || ""),
    "hash=" + visibleHash
  );

  return true;
}


  // =========================================================
  // Kursquelle / deklarierte Folien
  // =========================================================

  function stripLeadingHeaderComment(text) {
    let src = String(text || "").replace(/^\uFEFF/, "");
    if (/^\s*<!--/.test(src)) {
      const end = src.indexOf("-->");
      if (end >= 0) {
        src = src.slice(end + 3);
      }
    }
    return src;
  }

function parseEvaluationMacroOptions(raw) {
  const out = {
    trackF12: false,
    trackTab: false
  };

  const txt = normalizeSpace(raw || "");
  if (!txt) return out;

  txt
    .split(/[;,]/)
    .map(function (part) { return normalizeSpace(part); })
    .filter(Boolean)
    .forEach(function (flag) {
      if (/^f12$/i.test(flag)) {
        out.trackF12 = true;
        return;
      }

      if (/^tab$/i.test(flag)) {
        out.trackTab = true;
      }
    });

  return out;
}

function parseEvaluationOptionsFromSource(text) {
  const src = stripLeadingHeaderComment(text);
  const lines = src.split(/\r?\n/);

  let inFence = false;
  let fenceToken = "";

  const out = {
    trackF12: false,
    trackTab: false
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const fenceMatch = line.match(/^\s*(```+|~~~+)/);

    if (fenceMatch) {
      const token = fenceMatch[1].charAt(0);

      if (!inFence) {
        inFence = true;
        fenceToken = token;
        continue;
      }

      if (token === fenceToken) {
        inFence = false;
        fenceToken = "";
        continue;
      }
    }

    if (inFence) continue;

    const trimmed = String(line || "").trim();

    const m = trimmed.match(/^@Auswertung(?:\s*\(([^)]*)\))?\s*$/);
    if (!m) continue;

    const opts = parseEvaluationMacroOptions(m[1] || "");

    if (opts.trackF12) out.trackF12 = true;
    if (opts.trackTab) out.trackTab = true;

    log(
      "eval-option-match",
      "line=" + (i + 1),
      "raw=" + trimmed,
      JSON.stringify(out)
    );
  }

  return out;
}

function shouldTrackF12() {
  return !!(declaredEvaluationOptions && declaredEvaluationOptions.trackF12);
}

function shouldTrackTab() {
  return !!(declaredEvaluationOptions && declaredEvaluationOptions.trackTab);
}

function getSnapshotF12Count() {
  const n = Number(
    snapshotPayload &&
    snapshotPayload.sec &&
    snapshotPayload.sec.f12
  );

  if (Number.isFinite(n) && n > 0) return n;
  return 0;
}

function getSnapshotTabCount() {
  const n = Number(
    snapshotPayload &&
    snapshotPayload.sec &&
    snapshotPayload.sec.tab
  );

  if (Number.isFinite(n) && n > 0) return n;
  return 0;
}

function getSerializableSecurityState() {
  return {
    trackF12: shouldTrackF12() ? 1 : 0,
    trackTab: shouldTrackTab() ? 1 : 0,
    f12: Number(liveSecurityState.f12 || 0) || 0,
    tab: Number(liveSecurityState.tab || 0) || 0
  };
}

function snapshotRequestsF12Tracking() {
  return !!(
    snapshotPayload &&
    snapshotPayload.sec &&
    (
      snapshotPayload.sec.trackF12 === 1 ||
      snapshotPayload.sec.trackF12 === true
    )
  );
}

function snapshotRequestsTabTracking() {
  return !!(
    snapshotPayload &&
    snapshotPayload.sec &&
    (
      snapshotPayload.sec.trackTab === 1 ||
      snapshotPayload.sec.trackTab === true
    )
  );
}

function renderF12FraudWarningHtml() {
  if (!isSharedFreezeLinkMode()) return "";

  const count = getSnapshotF12Count();
  const wantsTracking = snapshotRequestsF12Tracking() || shouldTrackF12();

  if (!wantsTracking) return "";
  if (count <= 0) return "";

  const wrongColor = escapeHtml(getEvaluationFeedbackColor("wrong"));

  return [
    '<div style="margin-top:1rem;font-weight:800;font-size:2.35rem;padding:1rem 1.05rem;border-radius:12px;',
      'border:1px solid ', wrongColor, ';',
      'background:color-mix(in srgb, ', wrongColor, ' 12%, var(--lia-course-bg) 88%);',
      'color:', wrongColor, ';">',
      'Ein Betrugsversuch durch Drücken der F12-Taste bzw. Öffnen der DevTools liegt vor.',
    '</div>'
  ].join("");
}

function renderTabFraudWarningHtml() {
  if (!isSharedFreezeLinkMode()) return "";

  const count = getSnapshotTabCount();
  const wantsTracking = snapshotRequestsTabTracking() || shouldTrackTab();

  if (!wantsTracking) return "";
  if (count <= 0) return "";

  const wrongColor = escapeHtml(getEvaluationFeedbackColor("wrong"));

  return [
    '<div style="margin-top:.85rem;font-weight:800;font-size:2.35rem;padding:1rem 1.05rem;border-radius:12px;',
      'border:1px solid ', wrongColor, ';',
      'background:color-mix(in srgb, ', wrongColor, ' 12%, var(--lia-course-bg) 88%);',
      'color:', wrongColor, ';">',
      'Ein Betrugsversuch durch Verlassen des Tabs oder Browserfensters liegt vor.',
    '</div>'
  ].join("");
}

function parseDeclaredSlidesFromSource(text) {
  const src = stripLeadingHeaderComment(text);
  const lines = src.split(/\r?\n/);

  const out = [];
  let inFence = false;
  let fenceToken = "";
  let hasEvaluationMacro = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const fenceMatch = line.match(/^\s*(```+|~~~+)/);

    if (fenceMatch) {
      const token = fenceMatch[1].charAt(0);
      if (!inFence) {
        inFence = true;
        fenceToken = token;
        continue;
      }
      if (token === fenceToken) {
        inFence = false;
        fenceToken = "";
        continue;
      }
    }

    if (inFence) continue;

    const evalMatch = line.match(/^\s*@Auswertung(?:\s*\(([^)]*)\))?\s*$/);
    if (evalMatch) {
      hasEvaluationMacro = true;
    }

    const m = line.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (m) {
      out.push({
        h: "#" + (out.length + 1),
        t: normalizeSpace(m[2])
      });
    }
  }

  if (hasEvaluationMacro) {
    out.push({
      h: "#" + (out.length + 1),
      t: EVALUATION_TITLE,
      vt: "evaluation"
    });
  }

  return out;
}


function parseSubmissionHashFromSource(text) {
  const src = stripLeadingHeaderComment(text);
  const lines = src.split(/\r?\n/);

  let inFence = false;
  let fenceToken = "";
  let slideCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = String(lines[i] || "");
    const fenceMatch = line.match(/^\s*(```+|~~~+)/);

    if (fenceMatch) {
      const token = fenceMatch[1].charAt(0);

      if (!inFence) {
        inFence = true;
        fenceToken = token;
        continue;
      }

      if (token === fenceToken) {
        inFence = false;
        fenceToken = "";
        continue;
      }
    }

    if (inFence) continue;

    if (/^(#{1,6})\s+(.+?)\s*$/.test(line)) {
      slideCount += 1;
      continue;
    }

    if (/^\s*@Abgabe(?:\s*\([^)]*\))?\s*$/.test(line)) {
      return "#" + Math.max(1, slideCount || 1);
    }
  }

  return "";
}


function countRegexMatches(text, regex) {
  const m = String(text || "").match(regex);
  return m ? m.length : 0;
}

function makeDeclaredTask() {
  return {
    be: 1,
    tg: []
  };
}

function mergeDeclaredTaskDetails(task, raw) {
  if (!task) return;

  const spec = parseAssignmentDetails(raw);

  if (spec.pointsValue !== null && Number.isFinite(Number(spec.pointsValue))) {
    task.be = Number(spec.pointsValue);
  }

  if (Array.isArray(spec.tags) && spec.tags.length) {
    spec.tags.forEach(function (tag) {
      const clean = normalizeSpace(tag);
      if (!clean) return;
      if (task.tg.indexOf(clean) < 0) {
        task.tg.push(clean);
      }
    });
  }
}

function collectDeclaredTasksFromSlideLines(lines) {
  const tasks = [];

  function pushTask() {
    const task = makeDeclaredTask();
    tasks.push(task);
    return task;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = String(lines[i] || "");
    const trimmed = normalizeSpace(line);

    if (!trimmed) continue;
    if (/^\s*<!--/.test(trimmed)) continue;

    const detailMatches = Array.from(line.matchAll(/@ADetails\s*\(([^)]*)\)/g));
    if (detailMatches.length) {
      const lastTask = tasks.length ? tasks[tasks.length - 1] : null;
      detailMatches.forEach(function (m) {
        mergeDeclaredTaskDetails(lastTask, m[1] || "");
      });
      continue;
    }

    // Auswahl-/Matrix-Blöcke: ein zusammenhängender Bullet-Block = genau eine Aufgabe
    if (/^\s*-\s+/.test(line) && /(\[\[|\[\()/.test(line)) {
      pushTask();

      while (i + 1 < lines.length) {
        const nextLine = String(lines[i + 1] || "");
        if (!/^\s*-\s+/.test(nextLine)) break;
        i += 1;
      }

      continue;
    }

    // Mehrere @diktat(...) im selben zusammenhängenden Block = eine Aufgabe
    if (/@diktat\s*\(/.test(line)) {
      pushTask();

      while (i + 1 < lines.length) {
        const nextLine = String(lines[i + 1] || "");
        const nextTrimmed = normalizeSpace(nextLine);

        if (!nextTrimmed) break;
        if (/^\s*@ADetails\b/.test(nextLine)) break;
        if (/@diktat\s*\(/.test(nextLine)) {
          i += 1;
          continue;
        }
        break;
      }

      continue;
    }

    // orthography: jede Instanz ist eine Aufgabe
    const orthographyMatches = line.match(/@orthography\s*\(/g) || [];
    orthographyMatches.forEach(function () {
      pushTask();
    });
    if (orthographyMatches.length) continue;

    // Bruch-/Marker-Makros: jede Instanz ist eine Aufgabe
    const macroMatches = line.match(/@(?:rectQuiz|circleQuiz|TextmarkerQuiz)\b/g) || [];
    macroMatches.forEach(function () {
      pushTask();
    });
    if (macroMatches.length) continue;

    // Kachel-/Zuordnungsquiz: jede Instanz ist eine Aufgabe
    const tileMatches = line.match(/\[\->\[[^\n]*?\]\]/g) || [];
    tileMatches.forEach(function () {
      pushTask();
    });
    if (tileMatches.length) continue;

    // Inline-Quizformen wie [[...]]
    const inlineMatches = line.match(/\[\[[^\n]*?\]\]/g) || [];
    inlineMatches.forEach(function () {
      pushTask();
    });
  }

  return tasks;
}

function parseDeclaredEvaluationFromSource(text) {
  const src = stripLeadingHeaderComment(text);
  const lines = src.split(/\r?\n/);

  const slides = [];
  let inFence = false;
  let fenceToken = "";
  let current = null;

  function pushCurrent() {
    if (current) slides.push(current);
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const fenceMatch = line.match(/^\s*(```+|~~~+)/);

    if (fenceMatch) {
      const token = fenceMatch[1].charAt(0);

      if (!inFence) {
        inFence = true;
        fenceToken = token;
        continue;
      }

      if (token === fenceToken) {
        inFence = false;
        fenceToken = "";
        continue;
      }
    }

    if (inFence) continue;

    const header = line.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (header) {
      pushCurrent();
      current = { lines: [] };
      continue;
    }

    if (!current) continue;
    current.lines.push(line);
  }

  pushCurrent();

  const map = Object.create(null);

  slides.forEach(function (slide, idx) {
    const tasks = collectDeclaredTasksFromSlideLines(slide.lines);

    const tagMap = Object.create(null);
    let totalBE = 0;

    const taskList = tasks.map(function (task) {
      const rawBe = task && Object.prototype.hasOwnProperty.call(task, "be")
        ? task.be
        : 1;

      const be = Number.isFinite(Number(rawBe))
        ? Math.max(0, Number(rawBe))
        : 1;
      
      const tags = Array.isArray(task && task.tg)
        ? task.tg
            .map(function (tag) { return normalizeSpace(tag); })
            .filter(Boolean)
            .filter(function (tag, tagIdx, arr) {
              return arr.indexOf(tag) === tagIdx;
            })
        : [];

      totalBE += be;

      tags.forEach(function (tag) {
        if (!tagMap[tag]) {
          tagMap[tag] = {
            total: 0,
            tasks: 0
          };
        }

        tagMap[tag].total += be;
        tagMap[tag].tasks += 1;
      });

      return {
        be: be,
        tg: tags.slice()
      };
    });

    map["#" + (idx + 1)] = {
      tt: taskList.length,
      tb: totalBE,
      tg: tagMap,
      tl: taskList
    };
  });

  return map;
}

function forEachCapturedState(slide, fn) {
  ["q", "d", "m", "c", "o", "fq", "mq"].forEach(function (key) {
    const arr = Array.isArray(slide && slide[key]) ? slide[key] : [];
    arr.forEach(fn);
  });
}

function getDeclaredSlideTotalUnits(slide) {
  const n = Number(slide && slide.tb);
  if (Number.isFinite(n) && n >= 0) return n;

  let total = 0;
  forEachCapturedState(slide, function (state) {
    total += getEvaluationUnits(state);
  });
  return total;
}

function getDeclaredSlideTaskCount(slide) {
  const n = Number(slide && slide.tt);
  if (Number.isFinite(n) && n >= 0) return n;

  let total = 0;
  forEachCapturedState(slide, function () {
    total += 1;
  });
  return total;
}


async function ensureDeclaredSlides(force) {
  if (!force && declaredSlidesLoaded && declaredSlidesCache && declaredSlidesCache.length) {
    return declaredSlidesCache.slice().sort(hashSort);
  }

  const courseUrl = stripSubmissionFromCourseUrl(getCourseUrlFromViewerUrl());
  if (!courseUrl) {
    declaredEvaluationOptions = {
      trackF12: false,
      trackTab: false
    };
    declaredEvaluationByHash = Object.create(null);
    submissionStartHash = "";
    declaredSlidesCache = [{
      h: "#1",
      t: getCurrentSlideTitle() || ""
    }];
    declaredSlidesLoaded = true;
    log("declared-eval-options", JSON.stringify(declaredEvaluationOptions));
    return declaredSlidesCache.slice();
  }

  const resp = await fetch(courseUrl, { cache: "no-store" });
  if (!resp.ok) {
    throw new Error("Kursquelle konnte nicht geladen werden (" + resp.status + ").");
  }

  const text = await resp.text();

  declaredEvaluationOptions = parseEvaluationOptionsFromSource(text);
  declaredEvaluationByHash = parseDeclaredEvaluationFromSource(text);
  submissionStartHash = parseSubmissionHashFromSource(text);

  const parsed = parseDeclaredSlidesFromSource(text);

  declaredSlidesCache = parsed.length
    ? parsed
    : [{
        h: "#1",
        t: getCurrentSlideTitle() || ""
      }];

  declaredSlidesCache = declaredSlidesCache.slice().sort(hashSort);
  declaredSlidesLoaded = true;

  log("declared-eval-options", JSON.stringify(declaredEvaluationOptions));
  log("declared-abgabe-hash", submissionStartHash || "<none>");

  return declaredSlidesCache.slice();
}

  function getDeclaredSlides() {
    return (declaredSlidesCache || []).slice().sort(hashSort);
  }

  function getDeclaredSlideByHash(hash) {
    const declared = getDeclaredSlides();
    for (let i = 0; i < declared.length; i++) {
      if (String(declared[i].h || "") === String(hash || "")) {
        return declared[i];
      }
    }
    return null;
  }

  function getDeclaredSlideIndex(hash) {
    const declared = getDeclaredSlides();
    for (let i = 0; i < declared.length; i++) {
      if (String(declared[i].h || "") === String(hash || "")) {
        return i;
      }
    }
    return -1;
  }

  function getDeclaredEvaluationHash() {
    const declared = getDeclaredSlides();

    for (let i = 0; i < declared.length; i++) {
      const slide = declared[i];
      if (slide && slide.vt === "evaluation" && /^#\d+$/.test(String(slide.h || ""))) {
        return String(slide.h);
      }
    }

    return "";
  }

  function getFreezeBootTargetHash() {
    // Geteilter Freezelink: direkt auf die Auswertung
    if (snapshotIsSharedLinkMode) {
      const evalHash = getDeclaredEvaluationHash();
      if (evalHash) return evalHash;
    }

    // Lokal nach createLink(): auf der aktuellen Folie bleiben
    const current = cleanHashValue(getCurrentHash() || "");
    if (/^#\d+$/.test(current)) {
      return current;
    }

    // Fallback
    const snap = cleanHashValue(snapshotPayload && snapshotPayload.sh || "");
    if (/^#\d+$/.test(snap)) {
      return snap;
    }

    return "#1";
  }

  function getPreferredFreezeLandingHash() {
    if (
      submissionStartHash &&
      /^#\d+$/.test(submissionStartHash) &&
      getDeclaredSlideByHash(submissionStartHash)
    ) {
      return submissionStartHash;
    }

    const snapshotHash = cleanHashValue(
      snapshotPayload && snapshotPayload.sh ? snapshotPayload.sh : ""
    );

    if (
      snapshotHash &&
      /^#\d+$/.test(snapshotHash) &&
      getDeclaredSlideByHash(snapshotHash)
    ) {
      return snapshotHash;
    }

    return "#1";
  }

function compareElementsInDocumentOrder(a, b) {
  if (a === b) return 0;
  if (!a) return 1;
  if (!b) return -1;

  const pos = a.compareDocumentPosition(b);

  if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
  if (pos & Node.DOCUMENT_POSITION_PRECEDING) return 1;
  return 0;
}

function getDeclaredTaskListForHash(hash) {
  const entry = declaredEvaluationByHash[String(hash || "")] || null;
  return Array.isArray(entry && entry.tl) ? entry.tl : [];
}

function applyDeclaredTaskMetaToCapturedSequence(hash, sequence) {
  const taskList = getDeclaredTaskListForHash(hash);

  if (!Array.isArray(sequence) || !sequence.length) return;

  for (let i = 0; i < sequence.length; i++) {
    const item = sequence[i];
    const task = taskList[i];
    const state = item && item.state;

    if (!state) continue;

    state.di = i + 1;

    if (!task) continue;

    const rawBe = Object.prototype.hasOwnProperty.call(task, "be")
      ? task.be
      : 1;

    state.be = Number.isFinite(Number(rawBe))
      ? Math.max(0, Number(rawBe))
      : 1;

    if (Array.isArray(task.tg) && task.tg.length) {
      state.tg = task.tg.slice();
    } else {
      delete state.tg;
    }
  }
}

function parseAssignmentUnits(raw) {
  const txt = normalizeSpace(String(raw || "")).replace(",", ".");
  const m = txt.match(/\d+(?:\.\d+)?/);
  if (!m) return 1;

  const n = Number(m[0]);
  if (!Number.isFinite(n)) return 1;
  if (n < 0) return 0;

  return n;
}

function getAssignmentUnitsFromRoot(root) {
  if (!root || !(root instanceof Element)) return 1;

  const quizRoot = getTextQuizStateRoot(root) || root;

  const directAttr =
    quizRoot.getAttribute("data-adetails-points") ||
    quizRoot.getAttribute("data-assignment-points") ||
    "";

  if (directAttr) {
    return parseAssignmentUnits(directAttr);
  }

  const badge = quizRoot.querySelector(".lia-adetails-points");
  if (badge) {
    const txt = normalizeSpace(badge.textContent || "");
    if (txt) return parseAssignmentUnits(txt);
  }

  let node = quizRoot.parentElement;
  let hops = 0;

  while (node && hops < 5) {
    const attr =
      node.getAttribute("data-adetails-points") ||
      node.getAttribute("data-assignment-points") ||
      "";

    if (attr) {
      return parseAssignmentUnits(attr);
    }

    node = node.parentElement;
    hops += 1;
  }

  return 1;
}


function parseAssignmentTags(raw) {
  if (!raw) return [];

  if (Array.isArray(raw)) {
    return raw
      .map(function (tag) { return normalizeSpace(tag); })
      .filter(Boolean)
      .filter(function (tag, idx, arr) {
        return arr.indexOf(tag) === idx;
      });
  }

  const txt = String(raw || "").trim();
  if (!txt) return [];

  try {
    const parsed = JSON.parse(txt);
    if (Array.isArray(parsed)) {
      return parsed
        .map(function (tag) { return normalizeSpace(tag); })
        .filter(Boolean)
        .filter(function (tag, idx, arr) {
          return arr.indexOf(tag) === idx;
        });
    }
  } catch (e) {}

  return txt
    .split(",")
    .map(function (tag) { return normalizeSpace(tag); })
    .filter(Boolean)
    .filter(function (tag, idx, arr) {
      return arr.indexOf(tag) === idx;
    });
}

function getAssignmentTagsFromRoot(root) {
  if (!root || !(root instanceof Element)) return [];

  const quizRoot = getTextQuizStateRoot(root) || root;

  function readTagsFromElement(el) {
    if (!el || !(el instanceof Element)) return [];

    const rawSpec = normalizeSpace(el.getAttribute("data-adetails-raw") || "");
    if (rawSpec) {
      const spec = parseAssignmentDetails(rawSpec);
      if (spec.tags && spec.tags.length) {
        return spec.tags.slice();
      }
    }

    const directAttr =
      el.getAttribute("data-adetail-tags") ||
      el.getAttribute("data-adetails-tags") ||
      "";

    if (directAttr) {
      return parseAssignmentTags(directAttr);
    }

    return [];
  }

  let tags = readTagsFromElement(quizRoot);
  if (tags.length) return tags;

  const descendants = Array.from(
    quizRoot.querySelectorAll("[data-adetails-raw], [data-adetail-tags], [data-adetails-tags]")
  );

  for (let i = 0; i < descendants.length; i++) {
    tags = readTagsFromElement(descendants[i]);
    if (tags.length) return tags;
  }

  let node = quizRoot.parentElement;
  let hops = 0;

  while (node && hops < 5) {
    tags = readTagsFromElement(node);
    if (tags.length) return tags;

    node = node.parentElement;
    hops += 1;
  }

  return [];
}

function applyAssignmentMetaToState(out, root) {
  if (!out) return out;

  out.be = getAssignmentUnitsFromRoot(root);

  const tags = getAssignmentTagsFromRoot(root);
  if (tags.length) {
    out.tg = tags.slice();
  }

  return out;
}


function getEvaluationUnits(state) {
  const n = Number(state && state.be);
  if (Number.isFinite(n) && n >= 0) return n;
  return 1;
}

function isEvaluationTarget(hash) {
  const decl = getDeclaredSlideByHash(hash);
  return !!(decl && decl.vt === "evaluation");
}

function getEvaluationOutcome(state) {
  state = state || {};

  const s = String(state.s || "");
  const fc = String(state.fc || "");
  const cc = Number(state.cc || 0) || 0;

  if (s === "r" || fc === "d") return "resolved";
  if (s === "s" || fc === "s") return "correct";
  if (fc === "e") return "wrong";

  // geprüft, aber weder richtig noch aufgelöst => als falsch zählen
  if (cc > 0) return "wrong";

  return "";
}

function getEvaluationStateTags(state) {
  const raw = state && state.tg;

  if (Array.isArray(raw)) {
    return raw
      .map(function (tag) { return normalizeSpace(tag); })
      .filter(Boolean)
      .filter(function (tag, idx, arr) {
        return arr.indexOf(tag) === idx;
      });
  }

  if (typeof raw === "string") {
    return raw
      .split(",")
      .map(function (tag) { return normalizeSpace(tag); })
      .filter(Boolean)
      .filter(function (tag, idx, arr) {
        return arr.indexOf(tag) === idx;
      });
  }

  return [];
}




function visitEvaluationStates(payload, visitor) {
  if (!payload || !Array.isArray(payload.s) || typeof visitor !== "function") {
    return;
  }

  payload.s.forEach(function (slide) {
    ["q", "d", "m", "c", "o", "fq", "mq"].forEach(function (key) {
      const arr = Array.isArray(slide && slide[key]) ? slide[key] : [];

      arr.forEach(function (state) {
        visitor(state, key, slide);
      });
    });
  });
}


function getDeclaredEvaluationTotals() {
  const out = {
    total: 0,
    tasks: 0
  };

  const map = declaredEvaluationByHash || Object.create(null);

  Object.keys(map).forEach(function (hash) {
    const entry = map[hash] || {};
    const total = Number(entry.tb || 0);
    const tasks = Number(entry.tt || 0);

    if (Number.isFinite(total) && total > 0) {
      out.total += total;
    }

    if (Number.isFinite(tasks) && tasks > 0) {
      out.tasks += tasks;
    }
  });

  return out;
}

function getDeclaredEvaluationTagTotals() {
  const bucket = Object.create(null);
  const map = declaredEvaluationByHash || Object.create(null);

  Object.keys(map).forEach(function (hash) {
    const entry = map[hash] || {};
    const tagMap = entry.tg || Object.create(null);

    Object.keys(tagMap).forEach(function (tag) {
      if (!bucket[tag]) {
        bucket[tag] = {
          tag: tag,
          total: 0,
          tasks: 0,
          correct: 0,
          wrong: 0,
          resolved: 0
        };
      }

      const meta = tagMap[tag] || {};
      const total = Number(meta.total || 0);
      const tasks = Number(meta.tasks || 0);

      if (Number.isFinite(total) && total > 0) {
        bucket[tag].total += total;
      }

      if (Number.isFinite(tasks) && tasks > 0) {
        bucket[tag].tasks += tasks;
      }
    });
  });

  return bucket;
}


function parseManualAwardNumber(raw) {
  const txt = normalizeSpace(String(raw || "")).replace(",", ".");
  if (!txt) return null;

  const n = Number(txt);
  if (!Number.isFinite(n)) return null;

  return n;
}

function getManualAwardNumberForState(slide, state) {
  if (!isSharedFreezeLinkMode()) return null;

  const hash = cleanHashValue(slide && slide.h || "");
  const taskIndex = Number(state && state.di || 0);

  if (!hash || !taskIndex) return null;

  const key = makeManualAwardStoreKey(hash, taskIndex);
  if (!hasStoredManualAwardValue(key)) return null;

  const parsed = parseManualAwardNumber(getStoredManualAwardValue(key));
  if (parsed === null) return null;

  const be = getEvaluationUnits(state);
  return Math.max(0, Math.min(be, parsed));
}

function getEvaluationAllocation(slide, state) {
  const be = getEvaluationUnits(state);
  const manual = getManualAwardNumberForState(slide, state);

  if (manual !== null) {
    return {
      correct: manual,
      wrong: Math.max(0, be - manual),
      resolved: 0
    };
  }

  const outcome = getEvaluationOutcome(state);

  if (outcome === "correct") {
    return { correct: be, wrong: 0, resolved: 0 };
  }

  if (outcome === "wrong") {
    return { correct: 0, wrong: be, resolved: 0 };
  }

  if (outcome === "resolved") {
    return { correct: 0, wrong: 0, resolved: be };
  }

  return { correct: 0, wrong: 0, resolved: 0 };
}


function buildSnapshotEvaluationStats(payload) {
  const declared = getDeclaredEvaluationTotals();

  const stats = {
    total: declared.total,
    correct: 0,
    wrong: 0,
    resolved: 0,
    tasks: declared.tasks
  };

  visitEvaluationStates(payload, function (state, key, slide) {
    const alloc = getEvaluationAllocation(slide, state);

    stats.correct += alloc.correct;
    stats.wrong += alloc.wrong;
    stats.resolved += alloc.resolved;
  });

  // Fallback, falls die deklarierte Auswertung aus irgendeinem Grund leer ist
  if (stats.total <= 0 && stats.tasks <= 0) {
    visitEvaluationStates(payload, function (state) {
      const be = getEvaluationUnits(state);
      stats.total += be;
      stats.tasks += 1;
    });
  }

  return stats;
}

function buildSnapshotEvaluationStatsByTag(payload) {
  const bucket = getDeclaredEvaluationTagTotals();

  visitEvaluationStates(payload, function (state, key, slide) {
    const tags = getEvaluationStateTags(state);
    if (!tags.length) return;

    const alloc = getEvaluationAllocation(slide, state);

    tags.forEach(function (tag) {
      const clean = normalizeSpace(tag);
      if (!clean) return;

      if (!bucket[clean]) {
        bucket[clean] = {
          tag: clean,
          total: 0,
          tasks: 0,
          correct: 0,
          wrong: 0,
          resolved: 0
        };
      }

      bucket[clean].correct += alloc.correct;
      bucket[clean].wrong += alloc.wrong;
      bucket[clean].resolved += alloc.resolved;
    });
  });

  return Object.keys(bucket)
    .sort(function (a, b) {
      return String(a).localeCompare(String(b), "de", { sensitivity: "base" });
    })
    .map(function (tag) {
      return bucket[tag];
    });
}


function ensureEvaluationFeedbackProbe() {
  let probe = document.getElementById("lia-eval-feedback-probe");
  if (probe) return probe;

  probe = document.createElement("div");
  probe.id = "lia-eval-feedback-probe";
  probe.style.position = "fixed";
  probe.style.left = "-9999px";
  probe.style.top = "-9999px";
  probe.style.visibility = "hidden";
  probe.style.pointerEvents = "none";
  probe.style.opacity = "0";

  probe.innerHTML = [
    '<div data-kind="correct" class="lia-quiz__feedback text-success">x</div>',
    '<div data-kind="wrong" class="lia-quiz__feedback text-error">x</div>',
    '<div data-kind="resolved" class="lia-quiz__feedback text-disabled">x</div>'
  ].join("");

  document.body.appendChild(probe);
  return probe;
}

function getEvaluationFeedbackColor(kind) {
  const fallback = {
    correct: "rgb(25, 135, 84)",
    wrong: "rgb(220, 53, 69)",
    resolved: "rgb(108, 117, 125)"
  };

  try {
    const probe = ensureEvaluationFeedbackProbe();
    const el = probe.querySelector('[data-kind="' + kind + '"]');
    const color = el ? getComputedStyle(el).color : "";
    return color || fallback[kind] || "currentColor";
  } catch (e) {
    return fallback[kind] || "currentColor";
  }
}


function renderEvaluationBigStat(value, kind) {
  const tone = escapeHtml(getEvaluationFeedbackColor(kind));

  return [
    '<div style="padding:1rem 1.05rem;border-radius:12px;border:1px solid var(--lia-course-border);background:var(--lia-course-bg);color:var(--lia-course-fg);text-align:center;">',
      '<div style="font-size:5rem;line-height:1;font-weight:800;color:', tone, ';">',
        String(value),
      '</div>',
    '</div>'
  ].join("");
}



function formatEvaluationPercent(part, total) {
  const p = total > 0 ? (part / total) * 100 : 0;
  const rounded = Math.round(p * 10) / 10;
  return String(rounded).replace(".", ",");
}

function renderEvaluationTagMetricCard(label, value, kind) {
  let tone = "var(--lia-course-fg)";

  if (kind === "correct" || kind === "wrong" || kind === "resolved") {
    tone = getEvaluationFeedbackColor(kind);
  }

  return [
    '<div style="padding:1rem 1.05rem;border-radius:12px;border:1px solid var(--lia-course-border);background:var(--lia-course-bg);color:var(--lia-course-fg);min-width:150px;box-sizing:border-box;">',
      '<div style="font-size:1.2rem;opacity:.98;font-weight:700;margin-bottom:.35rem;color:', tone, ';">',
        escapeHtml(label),
      '</div>',
      '<div style="font-size:2.5rem;line-height:1.05;font-weight:800;color:', tone, ';">',
        escapeHtml(String(value)),
      '</div>',
    '</div>'
  ].join("");
}

function renderEvaluationTagBlock(entry) {
  const tagName = normalizeSpace(entry && entry.tag || "");
  const correct = Number(entry && entry.correct || 0);
  const wrong = Number(entry && entry.wrong || 0);
  const resolved = Number(entry && entry.resolved || 0);
  const total = Number(entry && entry.total || 0);
  const percentText = formatEvaluationPercent(correct, total);

  return [
    '<div style="margin-top:1.2rem;padding:1rem 1.05rem;border-radius:14px;border:1px solid var(--lia-course-border);background:color-mix(in srgb, var(--lia-course-bg) 94%, black 6%);">',
      '<div style="font-weight:800;font-size:3.0rem;line-height:1.2;margin-bottom:.8rem;color:var(--lia-course-fg);">',
        escapeHtml(tagName),
      '</div>',
      '<div style="overflow-x:auto;">',
        '<div style="display:grid;grid-template-columns:repeat(5,minmax(150px,1fr));gap:.75rem;min-width:820px;">',
          renderEvaluationTagMetricCard("Richtig", correct, "correct"),
          renderEvaluationTagMetricCard("Falsch", wrong, "wrong"),
          renderEvaluationTagMetricCard("Gelöst", resolved, "resolved"),
          renderEvaluationTagMetricCard("Erreicht", correct + " von " + total, "neutral"),
          renderEvaluationTagMetricCard("Quote", percentText + "%", "neutral"),
        '</div>',
      '</div>',
    '</div>'
  ].join("");
}

function renderEvaluationPlaceholderHtml(hash) {
  const decl = getDeclaredSlideByHash(hash);
  const title = normalizeSpace(decl && decl.t || EVALUATION_TITLE);
  const name = getDisplayName();
  const stats = buildSnapshotEvaluationStats(snapshotPayload);
  const tagStats = buildSnapshotEvaluationStatsByTag(snapshotPayload);

  const correct = Number(stats.correct || 0);
  const total = Number(stats.total || 0);
  const percentText = formatEvaluationPercent(correct, total);
  const fraudWarningF12 = renderF12FraudWarningHtml();
  const fraudWarningTab = renderTabFraudWarningHtml();

  const tagSection = tagStats.length
    ? [
        '<div style="margin-top:1.35rem;">',
          '<div style="font-weight:800;font-size:2rem;line-height:1.2;margin-bottom:.2rem;">Auswertung nach Tags</div>',
          '<div style="opacity:.82;margin-bottom:.8rem;">Jeder Tag zeigt seine eigene Teil-Auswertung.</div>',
          tagStats.map(function (entry) {
            return renderEvaluationTagBlock(entry);
          }).join(""),
        '</div>'
      ].join("")
    : "";

  return [
    '<div style="font-weight:800;font-size:4.35rem;line-height:1.2;margin-bottom:.6rem;">',
      escapeHtml(title),
    '</div>',

    '<div style="margin-bottom:1rem;opacity:0.92;font-weight:700;">',
      name
        ? (escapeHtml(name) + ": Zusammenfassung des eingefrorenen Abgabestands")
        : "Zusammenfassung des eingefrorenen Abgabestands",
    '</div>',

    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:.85rem;margin-bottom:1rem;">',
      renderEvaluationCard("Richtig", stats.correct, "correct"),
      renderEvaluationCard("Falsch", stats.wrong, "wrong"),
      renderEvaluationCard("Gelöst", stats.resolved, "resolved"),
    '</div>',

    '<div style="font-weight:800;font-size:2.35rem;padding:1rem 1.05rem;border-radius:12px;border:1px solid var(--lia-course-border);background:var(--lia-course-bg);color:var(--lia-course-fg);">',
      escapeHtml(String(correct)),
      ' von ',
      escapeHtml(String(total)),
      ' Bewertungseinheiten sind erreicht. <br> Das entspricht &nbsp;&nbsp;&nbsp; <strong><big><big><big><big>',
      escapeHtml(percentText),
      '%</big></big></big></big></big></strong>.<br>',
      '<span style="opacity:.82;">Berücksichtigt werden die im Freeze-Snapshot gespeicherten Aufgabenzustände.</span>',
    '</div>',

    fraudWarningF12,
    fraudWarningTab,

    tagSection
  ].join("");
}

function hideEvaluationPlaceholder() {
  evaluationPlaceholderHash = "";
  syncFrozenScreens();
}

function showEvaluationPlaceholder(hash) {
  evaluationPlaceholderHash = String(hash || "");
  syncFrozenScreens();
}


function renderEvaluationCard(label, value, kind) {
  const tone = escapeHtml(getEvaluationFeedbackColor(kind));

  return [
    '<div style="padding:1rem 1.05rem;border-radius:12px;border:1px solid var(--lia-course-border);background:var(--lia-course-bg);color:var(--lia-course-fg);">',
      '<div style="font-size:3rem;opacity:.98;font-weight:700;margin-bottom:.35rem;color:', tone, ';">',
        escapeHtml(label),
      '</div>',
      '<div style="font-size:5rem;line-height:1;font-weight:800;color:', tone, ';">',
        escapeHtml(String(value)),
      '</div>',
    '</div>'
  ].join("");
}


function isSharedFreezeLinkMode() {
  return !!(
    snapshotIsSharedLinkMode &&
    document.body &&
    document.body.classList.contains("lia-snapshot-mode")
  );
}

function getAssignmentDetailTaskIndex(marker) {
  const n = Number(marker && marker.getAttribute("data-adetails-task-index") || 0);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function makeManualAwardStoreKey(hash, taskIndex) {
  const cleanHash = cleanHashValue(hash || "");
  const idx = Number(taskIndex || 0);
  if (!cleanHash || !idx) return "";
  return cleanHash + "::task::" + idx;
}

function getAssignmentDetailManualKey(marker) {
  if (!marker) return "";

  const hash = cleanHashValue(getCurrentHash() || "");
  const taskIndex = getAssignmentDetailTaskIndex(marker);

  return makeManualAwardStoreKey(hash, taskIndex);
}

function hasStoredManualAwardValue(key) {
  return !!(key && Object.prototype.hasOwnProperty.call(manualAwardValuesByKey, key));
}

function getStoredManualAwardValue(key) {
  return hasStoredManualAwardValue(key)
    ? String(manualAwardValuesByKey[key])
    : "";
}

function setStoredManualAwardValue(key, value) {
  if (!key) return;
  manualAwardValuesByKey[key] = String(value == null ? "" : value);
}

function hasStoredManualAwardValue(key) {
  return !!(key && Object.prototype.hasOwnProperty.call(manualAwardValuesByKey, key));
}

function getStoredManualAwardValue(key) {
  return hasStoredManualAwardValue(key)
    ? String(manualAwardValuesByKey[key])
    : "";
}

function setStoredManualAwardValue(key, value) {
  if (!key) return;
  manualAwardValuesByKey[key] = String(value == null ? "" : value);
}

function getAssignmentOutcomeFromQuizRoot(root) {
  const quizRoot = getTextQuizStateRoot(root) || root;
  const feedback = quizRoot ? quizRoot.querySelector(".lia-quiz__feedback") : null;

  return getEvaluationOutcome({
    s: detectQuizState(quizRoot),
    fc: detectFeedbackCode(feedback),
    cc: getQuizCheckCount(quizRoot)
  });
}

function getAssignmentDefaultAwardValue(root, spec) {
  const be =
    spec && spec.pointsValue !== null
      ? Number(spec.pointsValue)
      : 1;

  const outcome = getAssignmentOutcomeFromQuizRoot(root);

  if (outcome === "correct") return String(be);
  if (outcome === "wrong" || outcome === "resolved") return "0";
  return "";
}

function renderAssignmentDetailBadgeContent(badge, marker, spec, quizRoot) {
  if (!badge) return false;

  badge.innerHTML = "";

  const beValue =
    spec && spec.pointsValue !== null && Number.isFinite(Number(spec.pointsValue))
      ? Number(spec.pointsValue)
      : null;

  if (!spec.badge || (beValue !== null && beValue <= 0)) {
    badge.style.display = "none";
    return false;
  }

  if (!isSharedFreezeLinkMode()) {
    badge.textContent = spec.badge;
    badge.style.display = "inline-flex";
    return true;
  }

  const manualKey = getAssignmentDetailManualKey(marker);

  const input = document.createElement("input");
  input.type = "text";
  input.inputMode = "decimal";
  input.autocomplete = "off";
  input.className = "lia-adetails-award-input";
  input.setAttribute("data-adetails-award-key", manualKey);

  const initialValue = hasStoredManualAwardValue(manualKey)
    ? getStoredManualAwardValue(manualKey)
    : getAssignmentDefaultAwardValue(quizRoot, spec);

  input.value = initialValue;

  input.addEventListener("input", function () {
    setStoredManualAwardValue(manualKey, input.value);
  });

  input.addEventListener("change", function () {
    setStoredManualAwardValue(manualKey, input.value);
  });

  const sep = document.createElement("span");
  sep.className = "lia-adetails-award-sep";
  sep.textContent = "/";

  const total = document.createElement("span");
  total.className = "lia-adetails-award-total";
  total.textContent = spec.badge;

  badge.appendChild(input);
  badge.appendChild(sep);
  badge.appendChild(total);
  badge.style.display = "inline-flex";

  return true;
}



function parseAssignmentDetails(raw) {
  const txt = normalizeSpace(raw);
  const out = {
    raw: txt,
    pointsText: "",
    unit: "BE",
    pointsValue: null,
    meta: Object.create(null),
    badge: "",
    tags: []
  };

  function adopt(pointsText, unit) {
    if (out.pointsText) return;

    const p = normalizeSpace(pointsText);
    const u = normalizeSpace(unit || "BE") || "BE";

    if (!p) return;

    out.pointsText = p;
    out.unit = u;

    const n = Number(String(p).replace(",", "."));
    if (Number.isFinite(n)) {
      out.pointsValue = n;
    }
  }

  function adoptTags(rawTags) {
    const parts = String(rawTags || "")
      .split(",")
      .map(function (tag) { return normalizeSpace(tag); })
      .filter(Boolean);

    parts.forEach(function (tag) {
      if (out.tags.indexOf(tag) < 0) {
        out.tags.push(tag);
      }
    });
  }

  if (!txt) return out;

  const parts = txt.split(/\s*;\s*/).filter(Boolean);

  parts.forEach(function (part, index) {
    let m = part.match(/^([0-9]+(?:[.,][0-9]+)?)\s*=\s*([A-Za-zÄÖÜäöüß%]+)$/);
    if (m) {
      adopt(m[1], m[2]);
      return;
    }

    m = part.match(/^([A-Za-zÄÖÜäöüß_][\wÄÖÜäöüß-]*)\s*=\s*(.+)$/);
    if (m) {
      const key = String(m[1] || "").toLowerCase();
      const value = normalizeSpace(m[2] || "");

      if (/^(be|punkte?|points?)$/.test(key)) {
        adopt(
          value,
          key === "be"
            ? "BE"
            : /^point/.test(key)
              ? "Points"
              : "Punkte"
        );
        return;
      }

      if (/^(tag|tags)$/.test(key)) {
        adoptTags(value);
        return;
      }

      out.meta[key] = value;
      return;
    }

    m = part.match(/^([0-9]+(?:[.,][0-9]+)?)$/);
    if (m) {
      adopt(m[1], "BE");
      return;
    }

    m = part.match(/^([0-9]+(?:[.,][0-9]+)?)\s+([A-Za-zÄÖÜäöüß%]+)$/);
    if (m) {
      adopt(m[1], m[2]);
      return;
    }

    if (index >= 1 || parts.length === 1) {
      adoptTags(part);
    }
  });

  if (out.pointsText) {
    out.badge = normalizeSpace(out.pointsText + " " + out.unit);
  }

  return out;
}


function collectAssignmentDetailMarkersFromRoot(root) {
  if (!root || !root.querySelectorAll) return [];

  return Array.from(root.querySelectorAll("[data-adetails]")).filter(function (el) {
    if (!(el instanceof Element)) return false;
    if (el.closest("#lia-freeze-bar")) return false;
    if (el.closest(".lia-submit-box")) return false;
    return true;
  });
}

function getAssignmentDetailScope(marker) {
  if (!marker) return getContentHost() || document.body;

  return (
    marker.closest(".lia-slide__content, .lia-content, main, article, section, #content") ||
    getContentHost() ||
    document.body
  );
}

function getLastQuizCheckBeforeMarker(marker) {
  if (!marker) return null;

  const scope = getAssignmentDetailScope(marker);
  const checks = Array.from(scope.querySelectorAll(".lia-quiz__check")).filter(function (btn) {
    if (!(btn instanceof Element)) return false;
    if (btn.closest("#lia-freeze-bar")) return false;
    if (btn.closest(".lia-submit-box")) return false;

    return !!(btn.compareDocumentPosition(marker) & Node.DOCUMENT_POSITION_FOLLOWING);
  });

  let best = null;

  checks.forEach(function (btn) {
    if (!best) {
      best = btn;
      return;
    }

    if (best.compareDocumentPosition(btn) & Node.DOCUMENT_POSITION_FOLLOWING) {
      best = btn;
    }
  });

  return best;
}

function ensureAssignmentDetailOwnerId(marker) {
  if (!marker) return "";

  if (!marker.id) {
    assignmentDetailSerial += 1;
    marker.id =
      "lia-adetails-" +
      assignmentDetailSerial +
      "-" +
      shortHash(marker.getAttribute("data-adetails") || "");
  }

  return marker.id;
}


function moveAssignmentDetailBadgesBehindOrthographyReset(control) {
  if (!control || !(control instanceof Element)) return;

  const orthoResetBtn =
    control.querySelector(".ortho-reset-inline[data-ortho-reset-bound='1']") ||
    control.querySelector(".ortho-reset-inline");

  if (!orthoResetBtn || orthoResetBtn.parentNode !== control) return;

  const badges = Array.from(control.children).filter(function (el) {
    return (
      el instanceof Element &&
      el.classList &&
      el.classList.contains("lia-adetails-points")
    );
  });

  if (!badges.length) return;

  badges.forEach(function (badge) {
    if (badge.parentNode !== control) return;

    if (orthoResetBtn.nextSibling !== badge) {
      control.insertBefore(badge, orthoResetBtn.nextSibling);
    }
  });
}

function scheduleAssignmentDetailBadgeReorder(control) {
  if (!control || !(control instanceof Element)) return;

  const oldTimers = Array.isArray(control.__liaAdetailsReorderTimers)
    ? control.__liaAdetailsReorderTimers
    : [];

  oldTimers.forEach(function (id) {
    clearTimeout(id);
  });

  control.__liaAdetailsReorderTimers = [];

  [0, 40, 120, 260].forEach(function (delay) {
    const id = setTimeout(function () {
      moveAssignmentDetailBadgesBehindOrthographyReset(control);
    }, delay);

    control.__liaAdetailsReorderTimers.push(id);
  });
}


function ensureAssignmentDetailBadge(checkBtn, ownerId) {
  if (!checkBtn) return null;

  const control = checkBtn.closest(".lia-quiz__control") || checkBtn.parentElement || checkBtn;
  if (!control) return null;

  let badge = control.querySelector('.lia-adetails-points[data-adetails-owner="' + ownerId + '"]');

  if (!badge) {
    badge = document.createElement("span");
    badge.className = "lia-adetails-points";
    badge.setAttribute("data-adetails-owner", ownerId);
  }

  if (badge.parentNode !== control) {
    control.appendChild(badge);
  } else if (control.lastChild !== badge) {
    control.appendChild(badge);
  }

  moveAssignmentDetailBadgesBehindOrthographyReset(control);
  scheduleAssignmentDetailBadgeReorder(control);

  return badge;
}



function reorderAssignmentDetailBadges(root) {
  const scope = root || getContentHost() || document.body;

  Array.from(scope.querySelectorAll(".lia-quiz__control")).forEach(function (control) {
    const orthoResetBtn =
      control.querySelector(".ortho-reset-inline[data-ortho-reset-bound='1']") ||
      control.querySelector(".ortho-reset-inline");

    if (!orthoResetBtn) return;

    const badges = Array.from(control.querySelectorAll(".lia-adetails-points"));
    if (!badges.length) return;

    badges.forEach(function (badge) {
      if (orthoResetBtn.nextSibling !== badge) {
        control.insertBefore(badge, orthoResetBtn.nextSibling);
      }
    });
  });
}

function applyAssignmentDetailToMarker(marker) {
  if (!marker || !(marker instanceof Element)) return false;

  const spec = parseAssignmentDetails(marker.getAttribute("data-adetails") || "");
  const checkBtn = getLastQuizCheckBeforeMarker(marker);

  if (!checkBtn) return false;

  const ownerId = ensureAssignmentDetailOwnerId(marker);
  const badge = ensureAssignmentDetailBadge(checkBtn, ownerId);
  if (!badge) return false;

  const quizRoot = checkBtn.closest(".lia-quiz");
  const controlRoot = checkBtn.closest(".lia-quiz__control") || checkBtn.parentElement;

  renderAssignmentDetailBadgeContent(
    badge,
    marker,
    spec,
    quizRoot || controlRoot || checkBtn
  );

  function applySpecToElement(el) {
    if (!el || !(el instanceof Element)) return;

    el.setAttribute("data-adetails-raw", spec.raw || "");

    if (spec.badge) {
      el.setAttribute("data-adetails-badge", spec.badge);
    } else {
      el.removeAttribute("data-adetails-badge");
    }

    if (spec.pointsValue !== null) {
      el.setAttribute("data-adetails-points", String(spec.pointsValue));
    } else {
      el.removeAttribute("data-adetails-points");
    }

    if (spec.tags && spec.tags.length) {
      el.setAttribute("data-adetail-tags", JSON.stringify(spec.tags));
    } else {
      el.removeAttribute("data-adetail-tags");
    }

    Object.keys(spec.meta).forEach(function (key) {
      const safeKey = String(key || "").toLowerCase().replace(/[^a-z0-9_-]+/g, "-");
      el.setAttribute("data-adetail-" + safeKey, String(spec.meta[key] || ""));
    });
  }

  applySpecToElement(checkBtn);
  applySpecToElement(controlRoot);

  if (quizRoot) {
    applySpecToElement(quizRoot);
  }

  marker.setAttribute("data-adetails-bound", "1");
  return true;
}

function collectOrderedTaskRootsForAssignmentDetails(root) {
  const host = root || getContentHost() || document.body;
  const ordered = [];

  collectTextQuizRootsFromRoot(host).forEach(function (root) {
    ordered.push(root);
  });

  getDropdownQuizControlsFromRoot(host).forEach(function (root) {
    ordered.push(root);
  });

  collectTileQuizRootsFromRoot(host).forEach(function (root) {
    ordered.push(root);
  });

  collectChoiceQuizRootsFromRoot(host).forEach(function (root) {
    ordered.push(root);
  });

  collectOrthographyQuizRootsFromRoot(host).forEach(function (root) {
    ordered.push(root);
  });

  collectFractionQuizRootsFromRoot(host).forEach(function (root) {
    ordered.push(root);
  });

  collectMarkerQuizRootsFromRoot(host).forEach(function (root) {
    ordered.push(root);
  });

  const unique = uniqueElements(ordered);
  unique.sort(compareElementsInDocumentOrder);
  return unique;
}

function refreshAssignmentDetails(root) {
  const scope = root || getContentHost() || document.body;
  const markers = collectAssignmentDetailMarkersFromRoot(scope);
  const orderedTaskRoots = collectOrderedTaskRootsForAssignmentDetails(scope);

  markers.forEach(function (marker, idx) {
    marker.setAttribute("data-adetails-seq", String(idx + 1));

    let taskIndex = 0;

    for (let i = 0; i < orderedTaskRoots.length; i++) {
      const pos = compareElementsInDocumentOrder(orderedTaskRoots[i], marker);

      if (pos <= 0) {
        taskIndex = i + 1;
      } else {
        break;
      }
    }

    if (taskIndex > 0) {
      marker.setAttribute("data-adetails-task-index", String(taskIndex));
    } else {
      marker.removeAttribute("data-adetails-task-index");
    }
  });

  markers.forEach(function (marker) {
    applyAssignmentDetailToMarker(marker);
  });

  reorderAssignmentDetailBadges(scope);
}

function scheduleAssignmentDetailsRefresh(delay) {
  clearTimeout(assignmentDetailRefreshTimer);

  assignmentDetailRefreshTimer = setTimeout(function () {
    try {
      refreshAssignmentDetails();
    } catch (err) {
      console.error("[LIA-FREEZE] adetails-refresh-error", err);
    }
  }, delay || 80);
}




function makeEmptySlideState(hash) {
  return {
    h: String(hash || ""),
    q: [],
    d: [],
    m: [],
    c: [],
    o: [],
    fq: [],
    mq: [],
    cv: [],
    gm: {
      h: []
    }
  };
}

async function buildPayloadFromAllSlides() {
  const declared = getDeclaredSlides().filter(function (slide) {
    return !(slide && slide.vt === "evaluation");
  });

  const startHash = getCurrentHash();
  const displayName = getDisplayName();

  liveSlidesByHash = Object.create(null);

  for (let i = 0; i < declared.length; i++) {
    const slide = declared[i];
    if (!slide || !slide.h) continue;

    setStatus(
      "Abgabelink wird erstellt … Folie " +
      (i + 1) +
      " / " +
      declared.length
    );

    if (getCurrentHash() !== slide.h) {
      setHashSilently(slide.h);
      window.location.hash = slide.h;
    }

    const ready = await waitForSlideReady(slide.h, 2600);

    if (!ready) {
      warn("capture-all-not-ready", slide.h);
      liveSlidesByHash[slide.h] = makeEmptySlideState(slide.h);
      continue;
    }

    await sleep(140);
    captureAdminState();

    const state = captureSlideStateForHash(slide.h);
    liveSlidesByHash[slide.h] = state || makeEmptySlideState(slide.h);
  }

  if (getCurrentHash() !== startHash) {
    setHashSilently(startHash);
    window.location.hash = startHash;
    await waitForSlideReady(startHash, 2600);
    await sleep(80);
  }

  const payload = {
    v: PAYLOAD_VERSION,
    sh: startHash,
    n: displayName,
    s: declared.map(function (slide) {
      return liveSlidesByHash[slide.h] || makeEmptySlideState(slide.h);
    })
  };

  payload.sec = getSerializableSecurityState();

  return payload;
}


  // =========================================================
  // QUIZ FUNKTIONEN (HELPERS)
  // =========================================================


function normalizeActualQuizRoot(root) {
  if (!root || !(root instanceof Element)) return null;

  if (root.classList && root.classList.contains("lia-quiz")) {
    return root;
  }

  const directChildQuiz = Array.from(root.children || []).find(function (el) {
    return el instanceof Element &&
           el.classList &&
           el.classList.contains("lia-quiz");
  });
  if (directChildQuiz) return directChildQuiz;

  const nestedQuiz = root.querySelector ? root.querySelector(".lia-quiz") : null;
  return nestedQuiz || root;
}

function getTextQuizStateRoot(root) {
  return normalizeActualQuizRoot(root) || root || null;
}

function findNearbySiblingQuiz(startEl) {
  let anchor = startEl instanceof Element ? startEl : null;
  let up = 0;

  while (anchor && up < 4) {
    let sib = anchor.nextElementSibling;
    let hops = 0;

    while (sib && hops < 6) {
      if (sib.classList && sib.classList.contains("lia-quiz")) {
        return sib;
      }

      const nested = sib.querySelector ? sib.querySelector(".lia-quiz") : null;
      if (nested) {
        return nested;
      }

      sib = sib.nextElementSibling;
      hops += 1;
    }

    anchor = anchor.parentElement;
    up += 1;
  }

  return null;
}


function isChoiceQuizInput(el) {
  if (!el || !(el instanceof Element)) return false;
  if (el.closest("#lia-freeze-bar")) return false;
  if (el.closest(".lia-submit-box")) return false;

  const type = String(el.type || "").toLowerCase();
  const cls = normalizeSpace(el.className || "");
  const role = normalizeSpace(el.getAttribute("role") || "");

  if (type !== "checkbox" && type !== "radio") return false;

  if (/\blia-checkbox\b/.test(cls)) return true;
  if (/\blia-radio\b/.test(cls)) return true;
  if (role === "checkbox" || role === "radio") return true;

  return false;
}

function getChoiceQuizInputsFromRoot(root) {
  if (!root || !root.querySelectorAll) return [];

  return Array.from(
    root.querySelectorAll("input[type='checkbox'], input[type='radio']")
  ).filter(function (el) {
    if (!isChoiceQuizInput(el)) return false;

    if (isRenderedElement(el)) return true;

    const label = el.closest("label");
    if (label && isRenderedElement(label)) return true;

    return false;
  });
}

function getChoiceAnswersContainerFromInput(input) {
  if (!input) return null;
  return input.closest(".lia-quiz__answers");
}

function getChoiceQuizRootFromInput(input, host) {
  if (!input) return null;

  const answers = getChoiceAnswersContainerFromInput(input);
  if (!answers) return input.closest(".lia-quiz") || input.parentElement || input;

  const explicit = answers.closest(".lia-quiz");
  if (explicit) return explicit;

  const stop = host || getContentHost() || document.body;
  let node = answers.parentElement || answers;
  let best = answers.parentElement || answers;

  while (node && node !== stop && node !== document.body) {
    if (!(node instanceof Element)) break;
    if (node.closest("#lia-freeze-bar")) break;
    if (node.closest(".lia-submit-box")) break;

    const buttons = node.querySelectorAll(".lia-quiz__check, .lia-quiz__resolve");
    const hasThisAnswers = node.contains(answers);

    if (hasThisAnswers && buttons.length) {
      best = node;
    }

    node = node.parentElement;
  }

  return best || answers.parentElement || answers;
}

function collectChoiceQuizRootsFromRoot(root) {
  const host = root || getContentHost() || document.body;
  const inputs = getChoiceQuizInputsFromRoot(host);

  const roots = inputs.map(function (input) {
    return getChoiceQuizRootFromInput(input, host);
  }).filter(function (rootEl) {
    return !!rootEl;
  });

  return uniqueElements(roots);
}

function getChoiceQuizType(root) {
  if (!root) return "choice";

  const answers = root.querySelector(".lia-quiz__answers");
  const role = normalizeSpace(answers && answers.getAttribute("role") || "");

  if (role === "radiogroup") return "radio";
  if (role === "list") return "checkbox";

  const inputs = getChoiceQuizInputsFromRoot(root);
  const hasRadio = inputs.some(function (el) {
    return String(el.type || "").toLowerCase() === "radio";
  });

  return hasRadio ? "radio" : "checkbox";
}

function getChoiceOptionText(input) {
  if (!input) return "";

  const label = input.closest("label");
  if (label) {
    return normalizeSpace(label.textContent || "");
  }

  return normalizeSpace(input.getAttribute("aria-label") || "");
}

function getChoiceQuizKey(root, idx) {
  if (!root) return "choice:" + idx;

  const type = getChoiceQuizType(root);
  const options = getChoiceQuizInputsFromRoot(root).map(function (input) {
    return getChoiceOptionText(input);
  });

  const joined = options.join("||");
  if (joined) {
    return type + ":" + shortHash(joined);
  }

  const txt = stripQuizUiText(root.textContent || "");
  if (txt) {
    return type + ":t:" + shortHash(txt.slice(0, 240));
  }

  return "choice:" + idx;
}

function captureChoiceQuizState(root, idx) {
  const inputs = getChoiceQuizInputsFromRoot(root);
  const feedback = root ? root.querySelector(".lia-quiz__feedback") : null;

  const out = {
    k: getChoiceQuizKey(root, idx),
    v: inputs.map(function (el) {
      return el.checked ? 1 : 0;
    })
  };
  applyAssignmentMetaToState(out, root);

  const stateCode = detectQuizState(root);
  const feedbackCode = detectFeedbackCode(feedback);
  const feedbackText = feedback ? normalizeSpace(feedback.textContent || "") : "";
  const checkCount = getQuizCheckCount(root);

  if (stateCode) out.s = stateCode;
  if (feedbackCode) out.fc = feedbackCode;
  if (feedbackText) out.t = feedbackText;
  if (checkCount > 0) out.cc = checkCount;

  return out;
}

function lockChoiceQuizRoot(root) {
  if (!root) return;

  lockTextQuizRoot(root);

  Array.from(root.querySelectorAll("label")).forEach(function (label) {
    try { label.setAttribute("tabindex", "-1"); } catch (e) {}
    label.style.pointerEvents = "none";
  });
}

function applyChoiceQuizState(root, state) {
  if (!root || !state) return root;

  const inputs = getChoiceQuizInputsFromRoot(root);
  const values = Array.isArray(state.v) ? state.v : [];
  const max = Math.min(inputs.length, values.length);

  for (let i = 0; i < max; i++) {
    const el = inputs[i];
    const checked = !!values[i];

    el.checked = checked;
    el.defaultChecked = checked;

    if (checked) {
      el.setAttribute("checked", "checked");
      el.setAttribute("aria-checked", "true");
    } else {
      el.removeAttribute("checked");
      el.setAttribute("aria-checked", "false");
    }
  }

  applyQuizRootStateClasses(root, state.s || "");

  const feedbackText = deriveFeedbackTextForState(root, state);
  const feedbackClass = getFeedbackClassFromState(state);

  if (feedbackText || state.s || state.fc) {
    const feedback = ensureQuizFeedbackElement(root);
    if (feedback) {
      feedback.classList.remove("text-success", "text-error", "text-disabled");
      if (feedbackClass) {
        feedback.classList.add(feedbackClass);
      }

      feedback.setAttribute("aria-live", "polite");

      if (feedbackText) {
        feedback.textContent = feedbackText;
      }

      revealQuizBlock(feedback);
    }
  }

  applyQuizCheckCount(root, state.cc || 0);

  lockChoiceQuizRoot(root);
  return root;
}

function applyStoredChoiceStatesToHost(host, storedStates) {
  const liveRoots = host ? collectChoiceQuizRootsFromRoot(host) : [];
  const states = Array.isArray(storedStates) ? storedStates : [];
  const used = new Set();
  const applied = [];

  log(
    "choice-apply-live",
    "live=" + liveRoots.length,
    liveRoots.map(function (root, idx) {
      return "[" + idx + "] " + JSON.stringify(getChoiceQuizKey(root, idx));
    }).join(" || ")
  );

  log(
    "choice-apply-stored",
    "stored=" + states.length,
    states.map(function (state, idx) {
      return "[" + idx + "] " + JSON.stringify(state.k || "");
    }).join(" || ")
  );

  states.forEach(function (state, idx) {
    let target = null;
    const wantedKey = normalizeSpace(state && state.k || "");

    if (wantedKey) {
      for (let i = 0; i < liveRoots.length; i++) {
        if (used.has(liveRoots[i])) continue;
        if (getChoiceQuizKey(liveRoots[i], i) === wantedKey) {
          target = liveRoots[i];
          break;
        }
      }
    }

    if (!target) {
      if (idx >= 0 && idx < liveRoots.length && !used.has(liveRoots[idx])) {
        target = liveRoots[idx];
      }
    }

    if (!target) {
      log("choice-match-miss", "storedIdx=" + idx, "key=" + JSON.stringify(wantedKey));
      return;
    }

    used.add(target);
    applyChoiceQuizState(target, state);
    applied.push(target);
  });

  return applied;
}







function escapeRegExp(str) {
  return String(str || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getFractionQuizModule() {
  let root = window;
  try {
    while (root.parent && root.parent !== root) root = root.parent;
  } catch (e) {}

  return root.__LIA_FRACTION_QUIZ__ || null;
}

function parseFractionOutputSpec(raw) {
  const txt = String(raw || "").trim();

  let m = txt.match(/^fq-c-n-(.+)$/);
  if (m) {
    return { tp: "c", uid: m[1], role: "n" };
  }

  m = txt.match(/^fq-r-(rows|cols)-(.+)$/);
  if (m) {
    return { tp: "r", uid: m[2], role: m[1] };
  }

  return null;
}

function isFractionRangeInput(el) {
  if (!el || !(el instanceof Element)) return false;
  if (el.closest("#lia-freeze-bar")) return false;
  if (el.closest(".lia-submit-box")) return false;

  const tag = String(el.tagName || "").toLowerCase();
  const type = String(el.type || "").toLowerCase();
  if (tag !== "input" || type !== "range") return false;

  return !!parseFractionOutputSpec(el.getAttribute("output"));
}

function getFractionRepInfo(rep) {
  if (!rep) return null;

  if (isFractionRangeInput(rep)) {
    return parseFractionOutputSpec(rep.getAttribute("output"));
  }

  const input = rep.querySelector && rep.querySelector("input[type='range'][output]");
  if (!input) return null;

  return parseFractionOutputSpec(input.getAttribute("output"));
}

function getFractionQuizUidFromRep(rep) {
  const info = getFractionRepInfo(rep);
  return info ? info.uid : "";
}

function getFractionQuizTypeFromRep(rep) {
  const info = getFractionRepInfo(rep);
  return info ? info.tp : "";
}

function getFractionQuizKindNameFromInfo(info) {
  if (!info) return "";
  return info.tp === "c" ? "circle" : (info.tp === "r" ? "rect" : "");
}

function isFractionWidgetForInfo(el, info) {
  if (!el || !(el instanceof Element) || !info) return false;
  if (!el.classList || !el.classList.contains("fq-widget")) return false;

  const uid = String(el.getAttribute("data-fq-uid") || "");
  const kind = String(el.getAttribute("data-fq-kind") || "");

  return uid === String(info.uid || "") && kind === getFractionQuizKindNameFromInfo(info);
}

function getFractionWidgetFromRep(rep) {
  const info = getFractionRepInfo(rep);
  if (!info) return null;

  let node = rep instanceof Element ? rep : null;
  let best = null;

  while (node && node !== document.body) {
    if (isFractionWidgetForInfo(node, info)) {
      best = node;
    }
    node = node.parentElement;
  }

  if (best) return best;

  if (rep && rep.querySelector) {
    const nested = rep.querySelector(
      '.fq-widget[data-fq-uid="' + info.uid + '"][data-fq-kind="' + getFractionQuizKindNameFromInfo(info) + '"]'
    );
    if (nested) return nested;
  }

  return null;
}

function getFractionQuizKey(rep, idx) {
  const info = getFractionRepInfo(rep);
  if (info && info.uid) {
    return "fq:" + info.tp + ":" + info.uid;
  }
  return "fq:" + idx;
}

function getFractionRangeInputsForRep(rep) {
  const info = getFractionRepInfo(rep);
  if (!info) return [];

  const localScope = getFractionWidgetFromRep(rep) || rep;
  let inputs = [];

  if (localScope && localScope.querySelectorAll) {
    inputs = Array.from(
      localScope.querySelectorAll("input[type='range'][output]")
    ).filter(function (el) {
      const spec = parseFractionOutputSpec(el.getAttribute("output"));
      return !!(
        spec &&
        spec.uid === info.uid &&
        spec.tp === info.tp
      );
    });
  }

  if (!inputs.length) {
    const host = getContentHost() || document.body;
    inputs = Array.from(
      host.querySelectorAll("input[type='range'][output]")
    ).filter(function (el) {
      const spec = parseFractionOutputSpec(el.getAttribute("output"));
      return !!(
        spec &&
        spec.uid === info.uid &&
        spec.tp === info.tp
      );
    });
  }

  inputs.sort(function (a, b) {
    const sa = parseFractionOutputSpec(a.getAttribute("output"));
    const sb = parseFractionOutputSpec(b.getAttribute("output"));

    const order = { n: 0, rows: 0, cols: 1 };
    return (order[sa.role] || 0) - (order[sb.role] || 0);
  });

  return inputs;
}

function getFractionFirstRangeWrap(rep) {
  const inputs = getFractionRangeInputsForRep(rep);
  if (!inputs.length) return getFractionWidgetFromRep(rep) || rep;
  return inputs[0].closest(".fq-range") || inputs[0];
}

function getFractionLastRangeWrap(rep) {
  const inputs = getFractionRangeInputsForRep(rep);
  if (!inputs.length) return getFractionWidgetFromRep(rep) || rep;
  const last = inputs[inputs.length - 1];
  return last.closest(".fq-range") || last;
}

function hasFractionToggleForUid(el, tp, uid) {
  if (!el || !(el instanceof Element)) return false;

  const raw = String(el.getAttribute("onclick") || "");
  if (!raw) return false;

  if (tp === "c") {
    return new RegExp("toggleCircle\\('" + escapeRegExp(uid) + "'\\s*,").test(raw);
  }

  if (tp === "r") {
    return new RegExp("toggleRect\\('" + escapeRegExp(uid) + "'\\s*,").test(raw);
  }

  return false;
}

function getFractionSvgFromRep(rep) {
  const widget = getFractionWidgetFromRep(rep);
  if (widget) {
    const mountSvg = widget.querySelector(".fq-mount svg");
    if (mountSvg) return mountSvg;
  }

  const info = getFractionRepInfo(rep);
  if (!info) return null;

  const firstWrap = getFractionFirstRangeWrap(rep);
  let node = firstWrap ? firstWrap.previousElementSibling : null;
  let hops = 0;

  while (node && hops < 8) {
    if (node.classList && node.classList.contains("fq-range")) break;

    const tagged = Array.from(node.querySelectorAll("[onclick]")).find(function (el) {
      return hasFractionToggleForUid(el, info.tp, info.uid);
    });
    if (tagged) {
      const svg = tagged.closest("svg");
      if (svg) return svg;
    }

    const fallbackSvg = node.querySelector && node.querySelector("svg");
    if (fallbackSvg) return fallbackSvg;

    node = node.previousElementSibling;
    hops += 1;
  }

  const host = getContentHost() || document.body;
  const globalTagged = Array.from(host.querySelectorAll("[onclick]")).find(function (el) {
    return hasFractionToggleForUid(el, info.tp, info.uid);
  });

  return globalTagged ? globalTagged.closest("svg") : null;
}

function getFractionQuizRootFromRep(rep) {
  const widget = getFractionWidgetFromRep(rep);

  if (widget) {
    const innerQuiz = widget.querySelector(".lia-quiz");
    if (innerQuiz) return innerQuiz;

    let node = widget.nextElementSibling;
    let hops = 0;

    while (node && hops < 8) {
      if (node.classList && node.classList.contains("fq-widget")) break;

      const quiz = node.matches && node.matches(".lia-quiz")
        ? node
        : (node.querySelector ? node.querySelector(".lia-quiz") : null);

      if (quiz) return quiz;

      node = node.nextElementSibling;
      hops += 1;
    }
  }

  const lastWrap = getFractionLastRangeWrap(rep);
  let node = lastWrap ? lastWrap.nextElementSibling : null;
  let hops = 0;

  while (node && hops < 8) {
    if (node.classList && node.classList.contains("fq-range")) break;

    const quiz = node.matches && node.matches(".lia-quiz")
      ? node
      : (node.querySelector ? node.querySelector(".lia-quiz") : null);

    if (quiz) return quiz;

    node = node.nextElementSibling;
    hops += 1;
  }

  return null;
}

function collectFractionQuizRootsFromRoot(root) {
  if (!root || !root.querySelectorAll) return [];

  const map = new Map();
  const inputs = Array.from(
    root.querySelectorAll("input[type='range'][output]")
  ).filter(isFractionRangeInput);

  inputs.forEach(function (input) {
    const spec = parseFractionOutputSpec(input.getAttribute("output"));
    if (!spec) return;

    const key = spec.tp + ":" + spec.uid;
    if (map.has(key)) return;

    const widget = getFractionWidgetFromRep(input);
    map.set(key, widget || (input.closest(".fq-range") || input));
  });

  return Array.from(map.values());
}

function packBoolArray(arr) {
  if (!Array.isArray(arr)) return "";
  return arr.map(function (v) { return v ? "1" : "0"; }).join("");
}

function unpackBoolString(mask, len) {
  const out = Array(Math.max(0, len | 0)).fill(false);
  const txt = String(mask || "");

  for (let i = 0; i < out.length && i < txt.length; i++) {
    out[i] = txt.charAt(i) === "1";
  }

  return out;
}

function readFractionRangeValue(input, fallbackValue) {
  if (!input) return Number(fallbackValue || 1) || 1;

  const raw = parseInt(input.value, 10);
  if (Number.isFinite(raw) && raw > 0) return raw;

  const attr = parseInt(input.getAttribute("value"), 10);
  if (Number.isFinite(attr) && attr > 0) return attr;

  return Number(fallbackValue || 1) || 1;
}

function setFractionRangeReadout(input, value) {
  if (!input) return;

  const name = String(input.getAttribute("output") || "");
  const wrap = input.closest(".fq-range") || input.parentElement;
  if (!wrap) return;

  const outs = Array.from(wrap.querySelectorAll("output[output]")).filter(function (el) {
    return String(el.getAttribute("output") || "") === name;
  });

  outs.forEach(function (out) {
    const oldIcon = out.querySelector("i");
    const icon = oldIcon ? oldIcon.cloneNode(true) : null;

    out.textContent = "";
    if (icon) out.appendChild(icon);
    out.appendChild(document.createTextNode(String(value)));
  });
}

function setFractionRangeValue(input, value) {
  if (!input) return;

  const v = String(value);
  input.value = v;
  try { input.setAttribute("value", v); } catch (e) {}
  setFractionRangeReadout(input, v);
}

function renderFractionCircleSvg(n, mask) {
  n = Math.max(1, Math.min(32, Number(n || 1) || 1));
  const arr = unpackBoolString(mask, n);

  const W = 200;
  const H = 200;
  const padding = 6;
  const cx = W / 2;
  const cy = H / 2;
  const r = Math.min(W, H) / 2 - padding;

  const circleFill = "white";
  const lineColor = "black";
  const segmentFill = "orange";

  const step = 360 / n;
  const startOffset = -90;

  let lines = "";
  let slices = "";

  if (n > 1) {
    for (let i = 0; i < n; i++) {
      const a0 = (startOffset + step * i) * Math.PI / 180;
      const a1 = (startOffset + step * (i + 1)) * Math.PI / 180;

      const x0 = cx + r * Math.cos(a0);
      const y0 = cy + r * Math.sin(a0);
      const x1 = cx + r * Math.cos(a1);
      const y1 = cy + r * Math.sin(a1);

      const largeArc = (step > 180) ? 1 : 0;
      const sweep = 1;
      const active = !!arr[i];

      slices += '<path d="M ' + cx + ',' + cy +
        ' L ' + x0 + ',' + y0 +
        ' A ' + r + ',' + r + ' 0 ' + largeArc + ',' + sweep + ' ' + x1 + ',' + y1 +
        ' Z" fill="' + (active ? segmentFill : 'transparent') + '"></path>';

      lines += '<line x1="' + cx + '" y1="' + cy + '" x2="' + x0 + '" y2="' + y0 +
        '" stroke="' + lineColor + '" stroke-width="2"></line>';
    }
  } else {
    const active = !!arr[0];
    slices = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r +
      '" fill="' + (active ? segmentFill : 'transparent') + '"></circle>';
  }

  return (
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '">' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" stroke="' + lineColor + '" stroke-width="2" fill="' + circleFill + '"></circle>' +
      slices +
      lines +
    '</svg>'
  );
}

function renderFractionRectSvg(rows, cols, mask) {
  rows = Math.max(1, Math.min(20, Number(rows || 1) || 1));
  cols = Math.max(1, Math.min(20, Number(cols || 1) || 1));

  const arr = unpackBoolString(mask, rows * cols);

  const W = 200;
  const H = 200;
  const padding = 6;
  const usableW = W - 2 * padding;
  const usableH = H - 2 * padding;

  const bgFill = "white";
  const lineColor = "black";
  const cellFill = "orange";
  const cellGap = 0;

  const rw = usableW / cols;
  const rh = usableH / rows;

  let gridRects = "";
  let gridLines = "";

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      const x = padding + c * rw + cellGap / 2;
      const y = padding + r * rh + cellGap / 2;
      const w = rw - cellGap;
      const h = rh - cellGap;
      const active = !!arr[i];

      gridRects += '<rect x="' + x + '" y="' + y + '" width="' + Math.max(0, w) +
        '" height="' + Math.max(0, h) + '" fill="' + (active ? cellFill : 'transparent') + '"></rect>';
    }
  }

  for (let r = 0; r <= rows; r++) {
    const y = padding + r * rh;
    gridLines += '<line x1="' + padding + '" y1="' + y + '" x2="' + (W - padding) + '" y2="' + y +
      '" stroke="' + lineColor + '" stroke-width="2"></line>';
  }

  for (let c = 0; c <= cols; c++) {
    const x = padding + c * rw;
    gridLines += '<line x1="' + x + '" y1="' + padding + '" x2="' + x + '" y2="' + (H - padding) +
      '" stroke="' + lineColor + '" stroke-width="2"></line>';
  }

  return (
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '">' +
      '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="' + bgFill + '" stroke="' + lineColor + '" stroke-width="2"></rect>' +
      gridRects +
      gridLines +
    '</svg>'
  );
}

function captureFractionQuizState(rep, idx) {
  const info = getFractionRepInfo(rep);
  if (!info) return null;

  const API = getFractionQuizModule();
  const quizRoot = getFractionQuizRootFromRep(rep);
  const feedback = quizRoot ? quizRoot.querySelector(".lia-quiz__feedback") : null;

  const out = {
    k: getFractionQuizKey(rep, idx),
    u: info.uid,
    tp: info.tp
  };
  applyAssignmentMetaToState(out, quizRoot || getFractionWidgetFromRep(rep) || rep);

  if (info.tp === "c") {
    const inputs = getFractionRangeInputsForRep(rep);
    const n = readFractionRangeValue(inputs[0], 1);
    const arr = API && API.circle && Array.isArray(API.circle[info.uid])
      ? API.circle[info.uid]
      : Array(n).fill(false);

    out.n = n;
    out.b = packBoolArray(arr);
  } else {
    const inputs = getFractionRangeInputsForRep(rep);
    const rowsInput = inputs.find(function (el) {
      const spec = parseFractionOutputSpec(el.getAttribute("output"));
      return spec && spec.role === "rows";
    });
    const colsInput = inputs.find(function (el) {
      const spec = parseFractionOutputSpec(el.getAttribute("output"));
      return spec && spec.role === "cols";
    });

    const rows = readFractionRangeValue(rowsInput, 1);
    const cols = readFractionRangeValue(colsInput, 1);

    const arr = API && API.rect && Array.isArray(API.rect[info.uid])
      ? API.rect[info.uid]
      : Array(rows * cols).fill(false);

    out.r = rows;
    out.c = cols;
    out.b = packBoolArray(arr);
  }

  const stateCode = detectQuizState(quizRoot);
  const feedbackCode = detectFeedbackCode(feedback);
  const feedbackText = feedback ? normalizeSpace(feedback.textContent || "") : "";
  const checkCount = getQuizCheckCount(quizRoot);

  if (stateCode) out.s = stateCode;
  if (feedbackCode) out.fc = feedbackCode;
  if (feedbackText) out.t = feedbackText;
  if (checkCount > 0) out.cc = checkCount;

  return out;
}

function syncFractionModuleState(state) {
  const API = getFractionQuizModule();
  if (!API || !state) return;

  const uid = String(state.u || "");
  const tp = String(state.tp || "");

  if (!uid || !tp) return;

  if (tp === "c") {
    const n = Math.max(1, Math.min(32, Number(state.n || 1) || 1));
    if (typeof API.ensureCircle === "function") {
      API.ensureCircle(uid, n);
    } else {
      API.circle = API.circle || Object.create(null);
      API.circle[uid] = Array(n).fill(false);
    }

    const arr = unpackBoolString(state.b, n);
    API.circle[uid] = arr.slice();
    return;
  }

  if (tp === "r") {
    const rows = Math.max(1, Math.min(20, Number(state.r || 1) || 1));
    const cols = Math.max(1, Math.min(20, Number(state.c || 1) || 1));

    if (typeof API.ensureRect === "function") {
      API.ensureRect(uid, rows, cols);
    } else {
      API.rect = API.rect || Object.create(null);
      API.rectDims = API.rectDims || Object.create(null);
      API.rectDims[uid] = { rows: rows, cols: cols };
      API.rect[uid] = Array(rows * cols).fill(false);
    }

    API.rectDims[uid] = { rows: rows, cols: cols };
    API.rect[uid] = unpackBoolString(state.b, rows * cols);
  }
}

function lockFractionQuizRoot(rep) {
  if (!rep) return;

  const widget = getFractionWidgetFromRep(rep) || rep;
  const inputs = getFractionRangeInputsForRep(widget);

  inputs.forEach(function (input) {
    try { input.disabled = true; } catch (e) {}
    try { input.setAttribute("tabindex", "-1"); } catch (e) {}
    input.style.pointerEvents = "none";

    const wrap = input.closest(".fq-range") || input.parentElement;
    if (wrap) wrap.style.pointerEvents = "none";

    const scriptWrap = input.closest(".lia-script");
    if (scriptWrap) scriptWrap.style.pointerEvents = "none";
  });

  const svg = getFractionSvgFromRep(widget);
  if (svg) {
    svg.style.pointerEvents = "none";
    Array.from(svg.querySelectorAll("*")).forEach(function (el) {
      el.style.pointerEvents = "none";
      try { el.removeAttribute("onclick"); } catch (e) {}
    });
  }

  if (widget && widget.setAttribute) {
    widget.setAttribute("data-fq-locked", "1");
  }

  const quizRoot = getFractionQuizRootFromRep(widget);
  if (quizRoot) {
    lockTextQuizRoot(quizRoot);
  }
}

function applyFractionQuizState(rep, state) {
  if (!rep || !state) return rep;

  const widget = getFractionWidgetFromRep(rep) || rep;
  const info = getFractionRepInfo(widget);
  if (!info) return widget;

  const inputs = getFractionRangeInputsForRep(widget);

  if (state.tp === "c") {
    const nInput = inputs[0] || null;
    const n = Math.max(1, Math.min(32, Number(state.n || 1) || 1));

    if (nInput) setFractionRangeValue(nInput, n);

    syncFractionModuleState(state);

    const svg = getFractionSvgFromRep(widget);
    if (svg) {
      svg.outerHTML = renderFractionCircleSvg(n, state.b || "");
    }
  } else {
    const rowsInput = inputs.find(function (el) {
      const spec = parseFractionOutputSpec(el.getAttribute("output"));
      return spec && spec.role === "rows";
    });
    const colsInput = inputs.find(function (el) {
      const spec = parseFractionOutputSpec(el.getAttribute("output"));
      return spec && spec.role === "cols";
    });

    const rows = Math.max(1, Math.min(20, Number(state.r || 1) || 1));
    const cols = Math.max(1, Math.min(20, Number(state.c || 1) || 1));

    if (rowsInput) setFractionRangeValue(rowsInput, rows);
    if (colsInput) setFractionRangeValue(colsInput, cols);

    syncFractionModuleState(state);

    const svg = getFractionSvgFromRep(widget);
    if (svg) {
      svg.outerHTML = renderFractionRectSvg(rows, cols, state.b || "");
    }
  }

  const quizRoot = getFractionQuizRootFromRep(widget);
  if (quizRoot) {
    applyQuizRootStateClasses(quizRoot, state.s || "");

    const feedbackText = deriveFeedbackTextForState(quizRoot, state);
    const feedbackClass = getFeedbackClassFromState(state);

    if (feedbackText || state.s || state.fc) {
      const feedback = ensureQuizFeedbackElement(quizRoot);
      if (feedback) {
        feedback.classList.remove("text-success", "text-error", "text-disabled");
        if (feedbackClass) {
          feedback.classList.add(feedbackClass);
        }

        feedback.setAttribute("aria-live", "polite");

        if (feedbackText) {
          feedback.textContent = feedbackText;
        }

        revealQuizBlock(feedback);
      }
    }
  }

  applyQuizCheckCount(quizRoot, state.cc || 0);

  lockFractionQuizRoot(widget);
  return widget;
}

function applyStoredFractionStatesToHost(host, storedStates) {
  const liveRoots = host ? collectFractionQuizRootsFromRoot(host) : [];
  const states = Array.isArray(storedStates) ? storedStates : [];
  const used = new Set();
  const applied = [];

  log(
    "fraction-apply-live",
    "live=" + liveRoots.length,
    liveRoots.map(function (rep, idx) {
      return "[" + idx + "] " + JSON.stringify(getFractionQuizKey(rep, idx));
    }).join(" || ")
  );

  log(
    "fraction-apply-stored",
    "stored=" + states.length,
    states.map(function (state, idx) {
      return "[" + idx + "] " + JSON.stringify(state.k || "");
    }).join(" || ")
  );

  states.forEach(function (state, idx) {
    let target = null;
    const wantedUid = normalizeSpace(state && state.u || "");
    const wantedType = normalizeSpace(state && state.tp || "");
    const wantedKey = normalizeSpace(state && state.k || "");

    if (wantedUid && wantedType) {
      for (let i = 0; i < liveRoots.length; i++) {
        if (used.has(liveRoots[i])) continue;
        if (
          getFractionQuizUidFromRep(liveRoots[i]) === wantedUid &&
          getFractionQuizTypeFromRep(liveRoots[i]) === wantedType
        ) {
          target = liveRoots[i];
          break;
        }
      }
    }

    if (!target && wantedKey) {
      for (let i = 0; i < liveRoots.length; i++) {
        if (used.has(liveRoots[i])) continue;
        if (getFractionQuizKey(liveRoots[i], i) === wantedKey) {
          target = liveRoots[i];
          break;
        }
      }
    }

    if (!target) {
      if (idx >= 0 && idx < liveRoots.length && !used.has(liveRoots[idx])) {
        target = liveRoots[idx];
      }
    }

    if (!target) {
      log("fraction-match-miss", "storedIdx=" + idx, "key=" + JSON.stringify(wantedKey));
      return;
    }

    used.add(target);
    applyFractionQuizState(target, state);
    applied.push(target);
  });

  return applied;
}

function findFractionQuizInteractiveAncestor(el) {
  let node = el instanceof Element ? el : null;

  while (node && node !== document.body) {
    if (isFractionRangeInput(node)) return node;
    if (node.closest && node.closest(".fq-range")) return node.closest(".fq-range");
    if (node.closest && node.closest(".fq-widget[data-fq-kind][data-fq-uid]")) {
      return node.closest(".fq-widget[data-fq-kind][data-fq-uid]");
    }

    const onclick = String(node.getAttribute && node.getAttribute("onclick") || "");
    if (/toggleCircle\(|toggleRect\(/.test(onclick)) return node;

    if (String(node.tagName || "").toLowerCase() === "svg") return node;

    node = node.parentElement;
  }

  return null;
}







function getMarkerQuizRootWindow() {
  let w = window;
  try {
    while (w.parent && w.parent !== w) w = w.parent;
  } catch (e) {}
  return w;
}

function getMarkerQuizRegistry() {
  const root = getMarkerQuizRootWindow();
  return root && root.__LIA_TEXTMARKER_REG_V4__
    ? root.__LIA_TEXTMARKER_REG_V4__
    : null;
}

function getMarkerQuizInstance() {
  const reg = getMarkerQuizRegistry();
  if (!reg || !reg.instances) return null;

  const keys = Object.keys(reg.instances);
  for (let i = 0; i < keys.length; i++) {
    const inst = reg.instances[keys[i]];
    if (inst && inst.__alive) return inst;
  }

  for (let i = 0; i < keys.length; i++) {
    const inst = reg.instances[keys[i]];
    if (inst) return inst;
  }

  return null;
}

function pokeMarkerQuizModule() {
  const root = getMarkerQuizRootWindow();
  const doc = root && root.document ? root.document : document;
  if (!doc || !doc.body) return;

  const n = doc.createElement("span");
  n.style.display = "none";
  n.setAttribute("data-freeze-marker-poke", String(Date.now()));
  doc.body.appendChild(n);

  setTimeout(function () {
    if (n.parentNode) {
      n.parentNode.removeChild(n);
    }
  }, 0);
}

function ensureMarkerQuizScopeIds() {
  const scopes = Array.from(document.querySelectorAll(".markerquiz"));
  for (let i = 0; i < scopes.length; i++) {
    if (!scopes[i].dataset.hlScope) {
      scopes[i].dataset.hlScope = "S" + (i + 1);
    }
  }
}

function collectMarkerQuizRootsFromRoot(root) {
  if (!root || !root.querySelectorAll) return [];

  const scopes = Array.from(root.querySelectorAll(".markerquiz")).filter(function (el) {
    if (el.closest("#lia-freeze-bar")) return false;
    if (el.closest(".lia-submit-box")) return false;
    if (!isRenderedElement(el) && !hasRenderedSelfOrDescendant(el)) return false;

    return !!(
      el.querySelector(".hlq-proxy") ||
      el.querySelector(".lia-hl-target") ||
      el.querySelector(".lia-hl-prefill")
    );
  });

  return uniqueElements(scopes);
}

function getMarkerQuizScopeId(root, idx) {
  ensureMarkerQuizScopeIds();

  if (root && root.dataset && root.dataset.hlScope) {
    return root.dataset.hlScope;
  }

  return "S" + (idx + 1);
}

function getMarkerQuizRootKey(root, idx) {
  const scopeId = getMarkerQuizScopeId(root, idx);
  const txt = stripQuizUiText(root && root.textContent || "");
  const hash = txt ? shortHash(txt.slice(0, 220)) : ("idx" + idx);
  return "mq:" + scopeId + ":" + hash;
}

function getMarkerQuizLiaRoot(root) {
  if (!root) return null;
  return root.querySelector(".lia-quiz") || null;
}

function getMarkerQuizHiddenInput(root) {
  if (!root) return null;

  const wrap = root.querySelector(".hlq-lia");
  if (wrap) {
    return wrap.querySelector("input, textarea, select");
  }

  return root.querySelector(".hlq-proxy input, .hlq-proxy textarea, .hlq-proxy select");
}

function findMarkerQuizInteractiveAncestor(el) {
  let node = el instanceof Element ? el : null;

  while (node && node !== document.body) {
    if (
      node.matches(".markerquiz") ||
      node.matches(".hlq-proxy") ||
      node.matches(".lia-hl-target") ||
      node.matches(".lia-hl-prefill") ||
      node.matches(".lia-hl-rect") ||
      node.matches("#lia-hl-btn") ||
      node.matches("#lia-hl-panel")
    ) {
      return node;
    }

    node = node.parentElement;
  }

  return null;
}


function isGeneralMarkerMarkModeActive() {
  const inst = getMarkerQuizInstance();
  return !!(
    inst &&
    inst.state &&
    inst.state.active &&
    String(inst.state.tool || "") === "mark"
  );
}

function isAnyMarkerOverlayInteraction(el) {
  if (!el || !(el instanceof Element)) return false;

  return !!(
    el.closest(".lia-hl-rect") ||
    el.closest("#lia-hl-btn") ||
    el.closest("#lia-hl-panel")
  );
}


function captureMarkerQuizState(root, idx) {
  if (!root) return null;

  const inst = getMarkerQuizInstance();
  const scopeId = getMarkerQuizScopeId(root, idx);
  const liaRoot = getMarkerQuizLiaRoot(root);
  const feedback = liaRoot ? liaRoot.querySelector(".lia-quiz__feedback") : null;
  const hiddenInput = getMarkerQuizHiddenInput(root);

  const items = inst && Array.isArray(inst.HL)
    ? inst.HL.filter(function (item) {
        if (!item) return false;
        if ((item.kind || "") !== "user" && (item.kind || "") !== "solution") return false;
        return String(item.scope || "global") === String(scopeId);
      }).slice().sort(function (a, b) {
        return Number(a.id || 0) - Number(b.id || 0);
      })
    : [];

  const marks = items.map(function (item) {
    return {
      k: item.kind === "solution" ? "s" : "u",
      c: item.color || "yellow",
      a: {
        sp: item.anchor && item.anchor.sp || "",
        so: Number(item.anchor && item.anchor.so || 0),
        ep: item.anchor && item.anchor.ep || "",
        eo: Number(item.anchor && item.anchor.eo || 0)
      }
    };
  });

  const out = {
    k: getMarkerQuizRootKey(root, idx),
    sc: scopeId,
    h: marks
  };
  applyAssignmentMetaToState(out, liaRoot || root);

  if (items.length) {
    const firstSlide = String(items[0].slide || "");
    if (firstSlide) out.sl = firstSlide;
  }

  if (hiddenInput) {
    if (isEditableTextbox(hiddenInput)) {
      out.iv = String(hiddenInput.textContent || "");
    } else if ("value" in hiddenInput) {
      out.iv = String(hiddenInput.value || "");
    }
  }

  const stateCode = detectQuizState(liaRoot);
  const feedbackCode = detectFeedbackCode(feedback);
  const feedbackText = feedback ? normalizeSpace(feedback.textContent || "") : "";
  const checkCount = getQuizCheckCount(liaRoot);

  if (stateCode) out.s = stateCode;
  if (feedbackCode) out.fc = feedbackCode;
  if (feedbackText) out.t = feedbackText;
  if (checkCount > 0) out.cc = checkCount;

  return out;
}

function lockMarkerQuizRoot(root) {
  if (!root) return;

  root.style.userSelect = "none";
  root.style.webkitUserSelect = "none";

  Array.from(root.querySelectorAll(
    ".hlq-proxy button, .hlq-proxy a, .hlq-proxy [role='button'], .hlq-proxy input, .hlq-proxy textarea, .hlq-proxy select"
  )).forEach(function (el) {
    try { el.disabled = true; } catch (e) {}
    try { el.readOnly = true; } catch (e) {}
    try { el.setAttribute("tabindex", "-1"); } catch (e) {}
    el.style.pointerEvents = "none";
  });
}

function lockMarkerQuizUi() {
  const root = getMarkerQuizRootWindow();
  const rootDoc = root && root.document ? root.document : document;

  const btn = rootDoc.getElementById("lia-hl-btn");
  if (btn) {
    try { btn.disabled = true; } catch (e) {}
    try { btn.setAttribute("tabindex", "-1"); } catch (e) {}
    btn.style.pointerEvents = "none";
  }

  const panel = rootDoc.getElementById("lia-hl-panel");
  if (panel) {
    panel.style.pointerEvents = "none";
    panel.style.display = "none";
  }

  Array.from(document.querySelectorAll(".lia-hl-rect")).forEach(function (el) {
    el.style.pointerEvents = "none";
  });
}

function applyMarkerQuizState(root, state) {
  if (!root || !state) return root;

  const inst = getMarkerQuizInstance();
  const scopeId = state.sc || getMarkerQuizScopeId(root, 0);
  const liaRoot = getMarkerQuizLiaRoot(root);
  const hiddenInput = getMarkerQuizHiddenInput(root);

  if (inst) {
    inst.HL = Array.isArray(inst.HL) ? inst.HL.filter(function (item) {
      if (!item) return false;
      if (String(item.scope || "global") !== String(scopeId)) return true;

      const kind = String(item.kind || "user");
      return kind !== "user" && kind !== "solution";
    }) : [];

    const marks = Array.isArray(state.h) ? state.h : [];
    const slideId = typeof state.sl === "string" ? state.sl : "global";

    marks.forEach(function (mark) {
      if (!mark || !mark.a) return;

      inst.HL.push({
        id: inst.nextId++,
        kind: mark.k === "s" ? "solution" : "user",
        scope: scopeId,
        slide: slideId || "global",
        color: mark.c || "yellow",
        anchor: {
          sp: String(mark.a.sp || ""),
          so: Number(mark.a.so || 0),
          ep: String(mark.a.ep || ""),
          eo: Number(mark.a.eo || 0)
        },
        rects: []
      });
    });

    pokeMarkerQuizModule();
  }

  if (hiddenInput && typeof state.iv === "string") {
    applyFieldValueOnly(hiddenInput, state.iv);
  }

  if (liaRoot) {
    applyQuizRootStateClasses(liaRoot, state.s || "");

    const feedbackText = deriveFeedbackTextForState(liaRoot, state);
    const feedbackClass = getFeedbackClassFromState(state);

    if (feedbackText || state.s || state.fc) {
      const feedback = ensureQuizFeedbackElement(liaRoot);
      if (feedback) {
        feedback.classList.remove("text-success", "text-error", "text-disabled");
        if (feedbackClass) {
          feedback.classList.add(feedbackClass);
        }

        feedback.setAttribute("aria-live", "polite");

        if (feedbackText) {
          feedback.textContent = feedbackText;
        }

        revealQuizBlock(feedback);
      }
    }

    lockTextQuizRoot(liaRoot);
  }

  if (liaRoot) {
    applyQuizCheckCount(liaRoot, state.cc || 0);
  }

  lockMarkerQuizRoot(root);
  lockMarkerQuizUi();
  return root;
}

function applyStoredMarkerQuizStatesToHost(host, storedStates) {
  const liveRoots = host ? collectMarkerQuizRootsFromRoot(host) : [];
  const states = Array.isArray(storedStates) ? storedStates : [];
  const used = new Set();
  const applied = [];

  log(
    "marker-apply-live",
    "live=" + liveRoots.length,
    liveRoots.map(function (root, idx) {
      return "[" + idx + "] " + JSON.stringify(getMarkerQuizRootKey(root, idx));
    }).join(" || ")
  );

  log(
    "marker-apply-stored",
    "stored=" + states.length,
    states.map(function (state, idx) {
      return "[" + idx + "] " + JSON.stringify(state.k || "");
    }).join(" || ")
  );

  states.forEach(function (state, idx) {
    let target = null;
    const wantedScope = normalizeSpace(state && state.sc || "");
    const wantedKey = normalizeSpace(state && state.k || "");

    if (wantedScope) {
      for (let i = 0; i < liveRoots.length; i++) {
        if (used.has(liveRoots[i])) continue;
        if (getMarkerQuizScopeId(liveRoots[i], i) === wantedScope) {
          target = liveRoots[i];
          break;
        }
      }
    }

    if (!target && wantedKey) {
      for (let i = 0; i < liveRoots.length; i++) {
        if (used.has(liveRoots[i])) continue;
        if (getMarkerQuizRootKey(liveRoots[i], i) === wantedKey) {
          target = liveRoots[i];
          break;
        }
      }
    }

    if (!target) {
      if (idx >= 0 && idx < liveRoots.length && !used.has(liveRoots[idx])) {
        target = liveRoots[idx];
      }
    }

    if (!target) {
      log("marker-match-miss", "storedIdx=" + idx, "key=" + JSON.stringify(wantedKey));
      return;
    }

    used.add(target);
    applyMarkerQuizState(target, state);
    applied.push(target);
  });

  return applied;
}



function getGeneralMarkerScopeName() {
  return "global";
}

function isGeneralMarkerUserItem(item) {
  if (!item) return false;

  const kind = String(item.kind || "");
  const scope = String(item.scope || getGeneralMarkerScopeName());

  return kind === "user" && scope === getGeneralMarkerScopeName();
}

function markerAnchorPathToNode(path) {
  const root = document.body;
  if (!root) return null;

  const raw = String(path || "").trim();
  if (!raw) return null;

  const parts = raw.split("/").filter(Boolean).map(function (x) {
    return parseInt(x, 10);
  });

  let node = root;

  for (let i = 0; i < parts.length; i++) {
    const idx = parts[i];

    if (!node || !node.childNodes || idx < 0 || idx >= node.childNodes.length) {
      return null;
    }

    node = node.childNodes[idx];
  }

  return node || null;
}

function clampMarkerAnchorOffset(node, off) {
  const n = Number(off || 0) || 0;

  if (!node) return 0;

  if (node.nodeType === 3) {
    const len = String(node.nodeValue || "").length;
    return Math.max(0, Math.min(n, len));
  }

  if (node.nodeType === 1) {
    const len = node.childNodes ? node.childNodes.length : 0;
    return Math.max(0, Math.min(n, len));
  }

  return 0;
}

function rangeFromGeneralMarkerAnchor(anchor) {
  if (!anchor) return null;

  const sc = markerAnchorPathToNode(anchor.sp);
  const ec = markerAnchorPathToNode(anchor.ep);

  if (!sc || !ec) return null;

  const r = document.createRange();

  try {
    r.setStart(sc, clampMarkerAnchorOffset(sc, anchor.so));
    r.setEnd(ec, clampMarkerAnchorOffset(ec, anchor.eo));

    if (r.collapsed) return null;
    return r;
  } catch (err) {
    return null;
  }
}

function getElementForMarkerAnchorNode(node) {
  if (!node) return null;
  if (node.nodeType === 1) return node;
  return node.parentElement || null;
}

function markerAnchorBelongsToHost(anchor, host) {
  if (!anchor || !host || !(host instanceof Element)) return false;

  const r = rangeFromGeneralMarkerAnchor(anchor);
  if (!r) return false;

  const startEl = getElementForMarkerAnchorNode(r.startContainer);
  const endEl = getElementForMarkerAnchorNode(r.endContainer);
  const commonEl = getElementForMarkerAnchorNode(r.commonAncestorContainer);

  if (startEl && host.contains(startEl)) return true;
  if (endEl && host.contains(endEl)) return true;
  if (commonEl && host.contains(commonEl)) return true;

  return false;
}

function getGeneralMarkerDebugToken(host) {
  const el = host && host.closest
    ? (
        host.matches && host.matches("[data-hl-slideid]")
          ? host
          : host.closest("[data-hl-slideid]")
      )
    : null;

  const token = normalizeSpace(el && el.getAttribute("data-hl-slideid") || "");
  if (token) return token;

  return cleanHashValue(getCurrentHash() || "");
}


const GENERAL_MARKER_COLOR_TO_CODE = Object.freeze({
  yellow: "y",
  green: "g",
  blue: "b",
  pink: "p",
  orange: "o",
  red: "r"
});

const GENERAL_MARKER_CODE_TO_COLOR = Object.freeze({
  y: "yellow",
  g: "green",
  b: "blue",
  p: "pink",
  o: "orange",
  r: "red"
});

function encodeGeneralMarkerColor(color) {
  const clean = normalizeSpace(color || "").toLowerCase();
  return GENERAL_MARKER_COLOR_TO_CODE[clean] || clean || "yellow";
}

function decodeGeneralMarkerColor(code) {
  const clean = normalizeSpace(code || "").toLowerCase();
  return GENERAL_MARKER_CODE_TO_COLOR[clean] || clean || "yellow";
}

function decodeStoredGeneralMarkerMarks(state) {
  const rawMarks = Array.isArray(state && state.h) ? state.h : [];

  if (!rawMarks.length) return [];

  // Legacy-Format: [{ c, a:{sp,so,ep,eo} }, ...]
  if (!Array.isArray(rawMarks[0])) {
    return rawMarks.map(function (mark) {
      if (!mark || !mark.a) return null;

      return {
        c: decodeGeneralMarkerColor(mark.c || "yellow"),
        a: {
          sp: String(mark.a.sp || ""),
          so: Number(mark.a.so || 0),
          ep: String(mark.a.ep || ""),
          eo: Number(mark.a.eo || 0)
        }
      };
    }).filter(Boolean);
  }

  // Kompaktformat:
  // state.p = ["pathA", "pathB", ...]
  // h = [
  //   ["y", pIdx, so, eo]                 // gleicher Start-/Endpfad
  //   ["b", spIdx, so, epIdx, eo]         // unterschiedlicher Start-/Endpfad
  // ]
  const pathList = Array.isArray(state && state.p) ? state.p : [];

  return rawMarks.map(function (entry) {
    if (!Array.isArray(entry) || entry.length < 4) return null;

    const color = decodeGeneralMarkerColor(entry[0]);

    if (entry.length === 4) {
      const path = String(pathList[Number(entry[1] || 0)] || "");
      return {
        c: color,
        a: {
          sp: path,
          so: Number(entry[2] || 0),
          ep: path,
          eo: Number(entry[3] || 0)
        }
      };
    }

    const sp = String(pathList[Number(entry[1] || 0)] || "");
    const ep = String(pathList[Number(entry[3] || 0)] || "");

    return {
      c: color,
      a: {
        sp: sp,
        so: Number(entry[2] || 0),
        ep: ep,
        eo: Number(entry[4] || 0)
      }
    };
  }).filter(function (mark) {
    return !!(
      mark &&
      mark.a &&
      mark.a.sp &&
      mark.a.ep
    );
  });
}

function countStoredGeneralMarkerMarks(state) {
  return decodeStoredGeneralMarkerMarks(state).length;
}


function getGeneralMarkerCaptureHost(root) {
  const candidates = uniqueElements([
    root,
    getBaseContentHost(),
    getContentHost(),
    document.querySelector(".lia-slide__content"),
    document.querySelector(".lia-content"),
    document.querySelector("main")
  ]).filter(function (el) {
    return el instanceof Element;
  });

  let best = null;
  let bestArea = -1;

  candidates.forEach(function (el) {
    if (!isRenderedElement(el) && !hasRenderedSelfOrDescendant(el)) return;

    const r = el.getBoundingClientRect();
    const area = Math.max(0, r.width) * Math.max(0, r.height);

    if (area > bestArea) {
      best = el;
      bestArea = area;
    }
  });

  return best || root || getBaseContentHost() || document.body;
}


function captureGeneralMarkerState(root) {
  const host = getGeneralMarkerCaptureHost(root);
  const inst = getMarkerQuizInstance();

  if (!inst || !Array.isArray(inst.HL)) {
    return {
      h: []
    };
  }

  const items = inst.HL.filter(function (item) {
    if (!isGeneralMarkerUserItem(item)) return false;
    if (!item.anchor) return false;

    return markerAnchorBelongsToHost(item.anchor, host);
  }).slice().sort(function (a, b) {
    return Number(a.id || 0) - Number(b.id || 0);
  });

  const pathList = [];
  const pathIndex = Object.create(null);

  function internPath(path) {
    const key = String(path || "");
    if (!key) return -1;

    if (!Object.prototype.hasOwnProperty.call(pathIndex, key)) {
      pathIndex[key] = pathList.length;
      pathList.push(key);
    }

    return pathIndex[key];
  }

  const marks = [];

  items.forEach(function (item) {
    const a = item.anchor || {};
    const sp = String(a.sp || "");
    const ep = String(a.ep || "");

    if (!sp || !ep) return;

    const spIdx = internPath(sp);
    const epIdx = internPath(ep);
    const colorCode = encodeGeneralMarkerColor(item.color || "yellow");
    const so = Number(a.so || 0);
    const eo = Number(a.eo || 0);

    if (spIdx < 0 || epIdx < 0) return;

    if (spIdx === epIdx) {
      marks.push([colorCode, spIdx, so, eo]);
    } else {
      marks.push([colorCode, spIdx, so, epIdx, eo]);
    }
  });

  log(
    "general-marker-capture",
    "host=" + getGeneralMarkerDebugToken(host),
    "tag=" + String(host && host.tagName || ""),
    "marks=" + marks.length,
    "paths=" + pathList.length
  );

  const out = {
    h: marks
  };

  if (pathList.length) {
    out.p = pathList;
  }

  return out;
}

function applyStoredGeneralMarkerState(state) {
  const inst = getMarkerQuizInstance();
  const marks = decodeStoredGeneralMarkerMarks(state);

  if (!inst) {
    warn("general-marker-apply-no-instance", "marks=" + marks.length);
    return false;
  }

  inst.nextId = Number(inst.nextId || 1) || 1;

  inst.HL = Array.isArray(inst.HL)
    ? inst.HL.filter(function (item) {
        if (!item) return false;
        return !isGeneralMarkerUserItem(item);
      })
    : [];

  marks.forEach(function (mark) {
    if (!mark || !mark.a) return;

    inst.HL.push({
      id: inst.nextId++,
      kind: "user",
      scope: getGeneralMarkerScopeName(),
      slide: "",
      color: decodeGeneralMarkerColor(mark.c || "yellow"),
      anchor: {
        sp: String(mark.a.sp || ""),
        so: Number(mark.a.so || 0),
        ep: String(mark.a.ep || ""),
        eo: Number(mark.a.eo || 0)
      },
      rects: []
    });
  });

  pokeMarkerQuizModule();

  log(
    "general-marker-apply",
    "stored=" + marks.length,
    "raw=" + countStoredGeneralMarkerMarks(state)
  );

  return true;
}

function clearStoredGeneralMarkerStateNow(reason) {
  const inst = getMarkerQuizInstance();
  if (!inst) return false;

  const before = Array.isArray(inst.HL) ? inst.HL.length : 0;

  inst.HL = Array.isArray(inst.HL)
    ? inst.HL.filter(function (item) {
        if (!item) return false;
        return !isGeneralMarkerUserItem(item);
      })
    : [];

  const after = Array.isArray(inst.HL) ? inst.HL.length : 0;

  pokeMarkerQuizModule();

  log(
    "general-marker-clear",
    "reason=" + String(reason || ""),
    "removed=" + Math.max(0, before - after)
  );

  return true;
}


function getOrthographyModule() {
  let root = window;
  try {
    while (root.parent && root.parent !== root) root = root.parent;
  } catch (e) {}

  return root["__ORTHOGRAPHY_EXPORT_V1__"] || null;
}


function isOrthographyQuizInput(el) {
  if (!el || !(el instanceof Element)) return false;
  if (el.closest("#lia-freeze-bar")) return false;
  if (el.closest(".lia-submit-box")) return false;
  if (!el.closest(".orthography-wrap")) return false;

  const tag = String(el.tagName || "").toLowerCase();
  const did = normalizeSpace(el.getAttribute("data-id") || "");

  if (tag !== "input" && tag !== "textarea") return false;
  return /^lia-quiz-/.test(did);
}

function getOrthographyInputFromWrap(wrap) {
  if (!wrap || !wrap.querySelector) return null;
  return wrap.querySelector("input[data-id^='lia-quiz-'], textarea[data-id^='lia-quiz-']");
}

function getOrthographyUidFromInput(input) {
  if (!input) return "";

  const did = normalizeSpace(input.getAttribute("data-id") || "");
  const m = did.match(/^lia-quiz-(.+)$/);
  return m ? m[1] : "";
}

function getOrthographyUidFromWrap(wrap) {
  const input = getOrthographyInputFromWrap(wrap);
  return getOrthographyUidFromInput(input);
}

function getOrthographyKey(wrap, idx) {
  const uid = getOrthographyUidFromWrap(wrap);
  if (uid) return "ortho:" + uid;
  return "ortho:" + idx;
}

function findOrthographyBoundQuizByUid(uid) {
  if (!uid) return null;

  const attrName = "data-ortho-ctl-bound_" + uid;
  let control = null;

  try {
    control = document.querySelector("[" + attrName + "='1']");
  } catch (e) {
    control = null;
  }

  return control ? control.closest(".lia-quiz") : null;
}

function getOrthographyQuizRootFromWrap(wrap) {
  if (!wrap) return null;

  const uid = getOrthographyUidFromWrap(wrap);
  const boundQuiz = findOrthographyBoundQuizByUid(uid);
  if (boundQuiz) return boundQuiz;

  let node = wrap.nextElementSibling;
  while (node) {
    if (node.classList && node.classList.contains("orthography-wrap")) break;

    const quiz = node.matches && node.matches(".lia-quiz")
      ? node
      : (node.querySelector ? node.querySelector(".lia-quiz") : null);

    if (quiz) return quiz;
    node = node.nextElementSibling;
  }

  return null;
}

function collectOrthographyQuizRootsFromRoot(root) {
  if (!root || !root.querySelectorAll) return [];

  return uniqueElements(
    Array.from(root.querySelectorAll(".orthography-wrap")).filter(function (wrap) {
      if (!(wrap instanceof Element)) return false;
      if (wrap.closest("#lia-freeze-bar")) return false;
      if (wrap.closest(".lia-submit-box")) return false;
      if (!isRenderedElement(wrap) && !hasRenderedSelfOrDescendant(wrap)) return false;
      return !!getOrthographyInputFromWrap(wrap);
    })
  );
}

function isOrthographySolvedState(state) {
  state = state || {};

  if (state.sv) return true;
  if (state.s === "s") return true;
  if (state.s === "r") return true;
  if (state.fc === "d") return true;

  return false;
}

function captureOrthographyQuizState(wrap, idx) {
  const input = getOrthographyInputFromWrap(wrap);
  const uid = getOrthographyUidFromWrap(wrap);
  const quizRoot = getOrthographyQuizRootFromWrap(wrap);
  const feedback = quizRoot ? quizRoot.querySelector(".lia-quiz__feedback") : null;
  const mod = getOrthographyModule();
  const modState = mod && mod.state && uid && mod.state[uid] ? mod.state[uid] : null;

  const wrapTries = Number(wrap && wrap.dataset ? wrap.dataset.orthoTries : 0) || 0;
  const wrapSolved = String(wrap && wrap.dataset ? wrap.dataset.orthoSolved : "0") === "1";

  const tries = modState && Number.isFinite(Number(modState.tries))
    ? Number(modState.tries)
    : wrapTries;

  const solved = modState ? !!modState.solved : wrapSolved;

  const out = {
    k: getOrthographyKey(wrap, idx),
    u: uid,
    v: input ? readTextQuizInputValue(input) : "",
    tr: tries,
    sv: solved ? 1 : 0
  };
  applyAssignmentMetaToState(out, quizRoot || wrap);

  const stateCode = detectQuizState(quizRoot);
  const feedbackCode = detectFeedbackCode(feedback);
  const feedbackText = feedback ? normalizeSpace(feedback.textContent || "") : "";
  const checkCount = getQuizCheckCount(quizRoot);

  if (stateCode) out.s = stateCode;
  if (feedbackCode) out.fc = feedbackCode;
  if (feedbackText) out.t = feedbackText;
  if (checkCount > 0) out.cc = checkCount;

  return out;
}

function syncOrthographyModuleState(uid, state) {
  const mod = getOrthographyModule();
  if (!mod || !uid) return;

  mod.state = mod.state || {};
  mod.fixers = mod.fixers || {};

  if (!mod.state[uid]) {
    mod.state[uid] = {
      solved: false,
      tries: 0,
      start: "",
      solution: "",
      gate: { mode: "on", n: 0 }
    };
  }

  const S = mod.state[uid];
  S.tries = Number(state && state.tr || 0) || 0;
  S.solved = isOrthographySolvedState(state);
}

function triggerOrthographyRepair(uid) {
  const mod = getOrthographyModule();
  if (!mod || !uid) return;

  if (mod.fixers && typeof mod.fixers[uid] === "function") {
    try { mod.fixers[uid](); } catch (e) {}
  }

  if (typeof mod.schedule === "function") {
    try { mod.schedule(); } catch (e) {}
  }
}

function lockOrthographyQuizRoot(wrap) {
  if (!wrap) return;

  lockTextQuizRoot(wrap);

  const quizRoot = getOrthographyQuizRootFromWrap(wrap);
  if (quizRoot) {
    lockTextQuizRoot(quizRoot);
  }
}

function applyOrthographyQuizState(wrap, state) {
  if (!wrap || !state) return wrap;

  const input = getOrthographyInputFromWrap(wrap);
  const uid = state.u || getOrthographyUidFromWrap(wrap);

  if (input && typeof state.v === "string") {
    applyFieldValueOnly(input, state.v);
    try { input.setAttribute("value", state.v); } catch (e) {}
    input.defaultValue = state.v;
  }

  if (wrap.dataset) {
    wrap.dataset.orthoTries = String(Number(state.tr || 0) || 0);
    wrap.dataset.orthoSolved = isOrthographySolvedState(state) ? "1" : "0";
  }

  syncOrthographyModuleState(uid, state);
  triggerOrthographyRepair(uid);

  const quizRoot = getOrthographyQuizRootFromWrap(wrap);
  if (quizRoot) {
    applyQuizRootStateClasses(quizRoot, state.s || "");

    const feedbackText = deriveFeedbackTextForState(quizRoot, state);
    const feedbackClass = getFeedbackClassFromState(state);

    if (feedbackText || state.s || state.fc) {
      const feedback = ensureQuizFeedbackElement(quizRoot);
      if (feedback) {
        feedback.classList.remove("text-success", "text-error", "text-disabled");
        if (feedbackClass) {
          feedback.classList.add(feedbackClass);
        }

        feedback.setAttribute("aria-live", "polite");

        if (feedbackText) {
          feedback.textContent = feedbackText;
        }

        revealQuizBlock(feedback);
      }
    }
  }

  lockOrthographyQuizRoot(wrap);
  return wrap;
}

function applyStoredOrthographyStatesToHost(host, storedStates) {
  const liveRoots = host ? collectOrthographyQuizRootsFromRoot(host) : [];
  const states = Array.isArray(storedStates) ? storedStates : [];
  const used = new Set();
  const applied = [];

  log(
    "ortho-apply-live",
    "live=" + liveRoots.length,
    liveRoots.map(function (wrap, idx) {
      return "[" + idx + "] " + JSON.stringify(getOrthographyKey(wrap, idx));
    }).join(" || ")
  );

  log(
    "ortho-apply-stored",
    "stored=" + states.length,
    states.map(function (state, idx) {
      return "[" + idx + "] " + JSON.stringify(state.k || "");
    }).join(" || ")
  );

  states.forEach(function (state, idx) {
    let target = null;
    const wantedUid = normalizeSpace(state && state.u || "");
    const wantedKey = normalizeSpace(state && state.k || "");

    if (wantedUid) {
      for (let i = 0; i < liveRoots.length; i++) {
        if (used.has(liveRoots[i])) continue;
        if (getOrthographyUidFromWrap(liveRoots[i]) === wantedUid) {
          target = liveRoots[i];
          break;
        }
      }
    }

    if (!target && wantedKey) {
      for (let i = 0; i < liveRoots.length; i++) {
        if (used.has(liveRoots[i])) continue;
        if (getOrthographyKey(liveRoots[i], i) === wantedKey) {
          target = liveRoots[i];
          break;
        }
      }
    }

    if (!target) {
      if (idx >= 0 && idx < liveRoots.length && !used.has(liveRoots[idx])) {
        target = liveRoots[idx];
      }
    }

    if (!target) {
      log("ortho-match-miss", "storedIdx=" + idx, "key=" + JSON.stringify(wantedKey));
      return;
    }

    used.add(target);
    applyOrthographyQuizState(target, state);
    applied.push(target);
  });

  return applied;
}


function isTextQuizInputControl(el) {
  if (!el || !(el instanceof Element)) return false;
  if (!isLearnerFieldCandidate(el)) return false;

  if (el.closest && el.closest(".markerquiz")) return false;
  if (el.closest && el.closest(".orthography-wrap")) return false;

  const type = String(el.type || "").toLowerCase();
  if (type === "checkbox" || type === "radio") return false;

  const cls = normalizeSpace(el.className || "");
  const aria = normalizeSpace(el.getAttribute("aria-label") || "");

  if (/\blia-quiz__input\b/.test(cls)) return true;
  if (aria === "quiz answer") return true;

  return false;
}

  function getTextQuizInputsFromRoot(root) {
    if (!root || !root.querySelectorAll) return [];

    return Array.from(
      root.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")
    ).filter(function (el) {
      return isTextQuizInputControl(el);
    });
  }

  function extractTextQuizRuntimeKey(raw) {
    const txt = String(raw || "");

    let m = txt.match(/track\s*:\s*\[\s*\[\s*["']quiz["']\s*,\s*(\d+)\s*\]/i);
    if (m) return "q" + m[1];

    m = txt.match(/param\s*:\s*\{\s*id\s*:\s*(\d+)/i);
    if (m) return "i" + m[1];

    return "";
  }

  function getTextQuizInputKey(el, idx) {
    if (!el) return "idx:" + idx;

    const handlerKey =
      extractTextQuizRuntimeKey(el.getAttribute("oninput")) ||
      extractTextQuizRuntimeKey(el.getAttribute("onchange"));

    if (handlerKey) return handlerKey;

    const aria = normalizeSpace(el.getAttribute("aria-label") || "");
    if (aria) return "a:" + shortHash(aria);

    const ph = normalizeSpace(el.getAttribute("placeholder") || "");
    if (ph) return "p:" + shortHash(ph);

    return "idx:" + idx;
  }

  function stripQuizUiText(txt) {
    return normalizeSpace(
      String(txt || "")
        .replace(/Aufgelöste Antwort/g, "")
        .replace(/Prüfen/g, "")
        .replace(/Lösung/g, "")
        .replace(/Resolve/g, "")
        .replace(/Check/g, "")
    );
  }

function getTextQuizRootFromInput(input, host) {
  if (!input) return null;

  const explicit = input.closest(".lia-quiz");
  if (explicit) return explicit;

  const stop = host || getContentHost() || document.body;

  const localAnchor =
    input.closest(".lia-paragraph") ||
    input.parentElement ||
    input;

  const siblingQuiz = findNearbySiblingQuiz(localAnchor);
  if (siblingQuiz) {
    let node = input.parentElement || input;

    while (node && node !== stop && node !== document.body) {
      if (!(node instanceof Element)) break;
      if (node.closest("#lia-freeze-bar")) break;
      if (node.closest(".lia-submit-box")) break;

      if (node.contains(input) && node.contains(siblingQuiz)) {
        return node;
      }

      node = node.parentElement;
    }

    return siblingQuiz.parentElement || siblingQuiz;
  }

  let node = input.parentElement || input;

  while (node && node !== stop && node !== document.body) {
    if (!(node instanceof Element)) break;
    if (node.closest("#lia-freeze-bar")) break;
    if (node.closest(".lia-submit-box")) break;

    const directChildQuiz = Array.from(node.children || []).find(function (el) {
      return el instanceof Element &&
             el.classList &&
             el.classList.contains("lia-quiz");
    });

    if (directChildQuiz) {
      return node;
    }

    node = node.parentElement;
  }

  return input.parentElement || input;
}



  function collectTextQuizRootsFromRoot(root) {
    const host = root || getContentHost() || document.body;
    const inputs = getTextQuizInputsFromRoot(host);

    const roots = inputs.map(function (input) {
      return getTextQuizRootFromInput(input, host);
    }).filter(function (rootEl) {
      return !!rootEl;
    });

    return uniqueElements(roots);
  }


  function isDropdownQuizControl(el) {
    if (!el || !(el instanceof Element)) return false;

    const root = el.matches(".lia-dropdown") ? el : el.closest(".lia-dropdown");
    if (!root) return false;
    if (root.closest("#lia-freeze-bar")) return false;
    if (root.closest(".lia-submit-box")) return false;

    return true;
  }

  function getDropdownQuizControlsFromRoot(root) {
    if (!root || !root.querySelectorAll) return [];

    return Array.from(root.querySelectorAll(".lia-dropdown")).filter(function (el) {
      if (!isDropdownQuizControl(el)) return false;
      return isRenderedElement(el) || hasRenderedSelfOrDescendant(el);
    });
  }

  function getDropdownQuizRootFromDropdown(drop, host) {
    if (!drop) return null;

    const explicit = drop.closest(".lia-quiz");
    if (explicit) return explicit;

    const stop = host || getContentHost() || document.body;
    let node = drop.parentElement || drop;
    let best = drop.parentElement || drop;

    while (node && node !== stop && node !== document.body) {
      if (!(node instanceof Element)) break;
      if (node.closest("#lia-freeze-bar")) break;
      if (node.closest(".lia-submit-box")) break;

      if (node.contains(drop)) {
        const buttons = node.querySelectorAll(".lia-quiz__check, .lia-quiz__resolve");
        const meaningfulText = stripQuizUiText(node.textContent || "");

        if (buttons.length && meaningfulText.length > 0) {
          best = node;
        }
      }

      node = node.parentElement;
    }

    return best || drop.parentElement || drop;
  }

  function collectDropdownQuizRootsFromRoot(root) {
    const host = root || getContentHost() || document.body;
    const controls = getDropdownQuizControlsFromRoot(host);

    const roots = controls.map(function (drop) {
      return getDropdownQuizRootFromDropdown(drop, host);
    }).filter(function (rootEl) {
      return !!rootEl;
    });

    return uniqueElements(roots);
  }




function hasTileHandler(el, names, pattern) {
  if (!el || !(el instanceof Element)) return false;

  const attrs = Array.isArray(names) ? names : [names];
  for (let i = 0; i < attrs.length; i++) {
    const raw = String(el.getAttribute(attrs[i]) || "");
    if (pattern.test(raw)) return true;
  }
  return false;
}

function isTileQuizTarget(el) {
  if (!el || !(el instanceof Element)) return false;
  if (el.closest("#lia-freeze-bar")) return false;
  if (el.closest(".lia-submit-box")) return false;

  return hasTileHandler(
    el,
    ["onclick", "onkeydown", "ondragover", "ondragleave"],
    /cmd\s*:\s*['"](dragtarget|dragenter)['"]/
  );
}

function isTileQuizSource(el) {
  if (!el || !(el instanceof Element)) return false;
  if (el.closest("#lia-freeze-bar")) return false;
  if (el.closest(".lia-submit-box")) return false;

  return (
    String(el.getAttribute("draggable") || "").toLowerCase() === "true" ||
    hasTileHandler(
      el,
      ["onclick", "onkeydown", "ondragstart", "ondragend"],
      /cmd\s*:\s*['"](dragsource|dragstart|dragend)['"]/
    )
  );
}

function findTileQuizInteractiveAncestor(el) {
  let node = el instanceof Element ? el : null;

  while (node && node !== document.body) {
    if (isTileQuizTarget(node) || isTileQuizSource(node)) return node;
    node = node.parentElement;
  }

  return null;
}

function getTileQuizTargetsFromRoot(root) {
  if (!root || !root.querySelectorAll) return [];

  const nodes = Array.from(
    root.querySelectorAll("[onclick],[onkeydown],[ondragover],[ondragleave]")
  );

  return uniqueElements(nodes.filter(function (el) {
    return isTileQuizTarget(el) && (isRenderedElement(el) || hasRenderedSelfOrDescendant(el));
  }));
}

function getTileQuizSourcesFromRoot(root) {
  if (!root || !root.querySelectorAll) return [];

  const nodes = Array.from(
    root.querySelectorAll("[onclick],[onkeydown],[ondragstart],[ondragend],[draggable='true']")
  );

  return uniqueElements(nodes.filter(function (el) {
    return isTileQuizSource(el) && (isRenderedElement(el) || hasRenderedSelfOrDescendant(el));
  }));
}

function getTileQuizRootFromNode(node, host) {
  if (!node) return null;

  const stop = host || getContentHost() || document.body;
  let cur = node instanceof Element ? node : null;

  while (cur && cur !== stop && cur !== document.body) {
    if (!(cur instanceof Element)) break;
    if (cur.closest("#lia-freeze-bar")) break;
    if (cur.closest(".lia-submit-box")) break;

    const hasOwnTargets = getTileQuizTargetsFromRoot(cur).length > 0;
    const hasOwnSources = getTileQuizSourcesFromRoot(cur).length > 0;
    const innerQuiz = getTileQuizInnerQuiz(cur);

    if ((hasOwnTargets || hasOwnSources) && innerQuiz) {
      return cur;
    }

    cur = cur.parentElement;
  }

  return node.parentElement || node;
}

function getTileQuizInnerQuiz(root) {
  if (!root || !(root instanceof Element)) return null;

  const directChildren = Array.from(root.children || []);
  for (let i = 0; i < directChildren.length; i++) {
    const child = directChildren[i];
    if (child && child.classList && child.classList.contains("lia-quiz")) {
      return child;
    }
  }

  if (root.classList && root.classList.contains("lia-quiz")) {
    return root;
  }

  return root.querySelector(".lia-quiz");
}

function collectTileQuizRootsFromRoot(root) {
  const host = root || getContentHost() || document.body;
  const nodes = getTileQuizTargetsFromRoot(host).concat(getTileQuizSourcesFromRoot(host));

  const roots = nodes.map(function (node) {
    return getTileQuizRootFromNode(node, host);
  }).filter(function (rootEl) {
    return !!rootEl;
  });

  return uniqueElements(roots);
}

function collectSupportedQuizRootsFromRoot(root) {
  return uniqueElements(
    []
      .concat(collectTextQuizRootsFromRoot(root))
      .concat(collectDropdownQuizRootsFromRoot(root))
      .concat(collectTileQuizRootsFromRoot(root))
      .concat(collectChoiceQuizRootsFromRoot(root))
      .concat(collectOrthographyQuizRootsFromRoot(root))
      .concat(collectFractionQuizRootsFromRoot(root))
      .concat(collectMarkerQuizRootsFromRoot(root))
  );
}

function extractTileRuntimeKey(raw) {
  const txt = String(raw || "");

  let m = txt.match(
    /track\s*:\s*\[\s*\[\s*["']quiz["']\s*,\s*(\d+)\s*\]\s*,\s*\[\s*["']input["']\s*,\s*(\d+)\s*\]\s*\]/i
  );
  if (m) return "q" + m[1] + "i" + m[2];

  m = txt.match(/param\s*:\s*\{\s*id\s*:\s*(\d+)/i);
  if (m) return "id:" + m[1];

  return "";
}

function getTileQuizKey(root, idx) {
  if (!root) return "tile:" + idx;

  const nodes = [root].concat(Array.from(root.querySelectorAll("[onclick],[onkeydown],[ondragover],[ondragstart],[ondragend]")));

  for (let i = 0; i < nodes.length; i++) {
    const key =
      extractTileRuntimeKey(nodes[i].getAttribute("onclick")) ||
      extractTileRuntimeKey(nodes[i].getAttribute("onkeydown")) ||
      extractTileRuntimeKey(nodes[i].getAttribute("ondragover")) ||
      extractTileRuntimeKey(nodes[i].getAttribute("ondragstart")) ||
      extractTileRuntimeKey(nodes[i].getAttribute("ondragend"));

    if (key) return key;
  }

  const txt = stripQuizUiText(root.textContent || "");
  if (txt) return "h:" + shortHash(txt.slice(0, 200));

  return "tile:" + idx;
}

function getTileTargetDisplayText(target) {
  if (!target) return "";

  const txt = normalizeSpace(target.textContent || "");
  if (!txt || txt === "✛" || txt === "+") return "";
  return txt;
}

function getTileSourceLabel(source) {
  if (!source) return "";
  return normalizeSpace(source.textContent || "");
}

function captureTileQuizState(root, idx) {
  const tileRoot = getTileQuizRootFromNode(root, getContentHost() || document.body);
  const quizRoot = getTileQuizInnerQuiz(tileRoot);
  const feedback = quizRoot ? quizRoot.querySelector(":scope > .lia-quiz__feedback, .lia-quiz__feedback") : null;
  const targets = getTileQuizTargetsFromRoot(tileRoot);

  const out = {
    k: getTileQuizKey(tileRoot, idx),
    v: targets.map(function (target) {
      return getTileTargetDisplayText(target);
    })
  };
  applyAssignmentMetaToState(out, quizRoot || tileRoot);

  const stateCode = detectQuizState(quizRoot);
  const feedbackCode = detectFeedbackCode(feedback);
  const feedbackText = feedback ? normalizeSpace(feedback.textContent || "") : "";
  const checkCount = getQuizCheckCount(quizRoot);

  if (stateCode) out.s = stateCode;
  if (feedbackCode) out.fc = feedbackCode;
  if (feedbackText) out.t = feedbackText;
  if (checkCount > 0) out.cc = checkCount;

  return out;
}

function lockTileQuizRoot(root) {
  if (!root) return;

  getTileQuizTargetsFromRoot(root).forEach(function (target) {
    try { target.setAttribute("tabindex", "-1"); } catch (e) {}
    target.style.pointerEvents = "none";
  });

  getTileQuizSourcesFromRoot(root).forEach(function (source) {
    try { source.setAttribute("tabindex", "-1"); } catch (e) {}
    try { source.setAttribute("draggable", "false"); } catch (e) {}
    try { source.setAttribute("aria-grabbed", "false"); } catch (e) {}
    source.style.pointerEvents = "none";
  });

  const quiz = getTileQuizInnerQuiz(root);
  if (quiz) {
    lockTextQuizRoot(quiz);
  }
}

function setTileTargetDisplay(target, value) {
  if (!target) return;

  const box = target.firstElementChild || target;

  if (value) {
    box.textContent = String(value);
    box.style.color = "";
  } else {
    box.textContent = "✛";
    box.style.color = "rgb(136, 136, 136)";
  }
}

function applyTileQuizState(root, state) {
  if (!root || !state) return root;

  const tileRoot = getTileQuizRootFromNode(root, getContentHost() || document.body);
  const targets = getTileQuizTargetsFromRoot(tileRoot);
  const sources = getTileQuizSourcesFromRoot(tileRoot);
  const values = Array.isArray(state.v) ? state.v : [];

  for (let i = 0; i < targets.length; i++) {
    setTileTargetDisplay(targets[i], values[i] || "");
  }

  const hiddenSources = new Set();
  values.forEach(function (val) {
    const wanted = normalizeSpace(val || "");
    if (!wanted) return;

    for (let i = 0; i < sources.length; i++) {
      if (hiddenSources.has(sources[i])) continue;
      if (getTileSourceLabel(sources[i]) === wanted) {
        hiddenSources.add(sources[i]);
        break;
      }
    }
  });

  sources.forEach(function (source) {
    if (hiddenSources.has(source)) {
      source.style.display = "none";
    } else {
      source.style.display = "";
    }
  });

  const quizRoot = getTileQuizInnerQuiz(tileRoot);
  if (quizRoot) {
    applyQuizRootStateClasses(quizRoot, state.s || "");

    const feedbackText = deriveFeedbackTextForState(quizRoot, state);
    const feedbackClass = getFeedbackClassFromState(state);

    if (feedbackText || state.s || state.fc) {
      const feedback = ensureQuizFeedbackElement(quizRoot);
      if (feedback) {
        feedback.classList.remove("text-success", "text-error", "text-disabled");
        if (feedbackClass) {
          feedback.classList.add(feedbackClass);
        }

        feedback.setAttribute("aria-live", "polite");

        if (feedbackText) {
          feedback.textContent = feedbackText;
        }

        revealQuizBlock(feedback);
      }
    }
  }
  if (quizRoot) {
    applyQuizCheckCount(quizRoot, state.cc || 0);
  }

  lockTileQuizRoot(tileRoot);
  return tileRoot;
}

function applyStoredTileStatesToHost(host, storedStates) {
  const liveRoots = host ? collectTileQuizRootsFromRoot(host) : [];
  const states = Array.isArray(storedStates) ? storedStates : [];
  const used = new Set();
  const applied = [];

  log(
    "tile-apply-live",
    "live=" + liveRoots.length,
    liveRoots.map(function (root, idx) {
      return "[" + idx + "] " + JSON.stringify(getTileQuizKey(root, idx));
    }).join(" || ")
  );

  log(
    "tile-apply-stored",
    "stored=" + states.length,
    states.map(function (state, idx) {
      return "[" + idx + "] " + JSON.stringify(state.k || "");
    }).join(" || ")
  );

  states.forEach(function (state, idx) {
    let target = null;
    const wantedKey = normalizeSpace(state && state.k || "");

    if (wantedKey) {
      for (let i = 0; i < liveRoots.length; i++) {
        if (used.has(liveRoots[i])) continue;
        if (getTileQuizKey(liveRoots[i], i) === wantedKey) {
          target = liveRoots[i];
          break;
        }
      }
    }

    if (!target) {
      if (idx >= 0 && idx < liveRoots.length && !used.has(liveRoots[idx])) {
        target = liveRoots[idx];
      }
    }

    if (!target) {
      log("tile-match-miss", "storedIdx=" + idx, "key=" + JSON.stringify(wantedKey));
      return;
    }

    used.add(target);
    applyTileQuizState(target, state);
    applied.push(target);
  });

  return applied;
}


  function extractDropdownRuntimeKey(raw) {
    const txt = String(raw || "");

    let m = txt.match(
      /track\s*:\s*\[\s*\[\s*["']quiz["']\s*,\s*(\d+)\s*\]\s*,\s*\[\s*["']input["']\s*,\s*(\d+)\s*\]\s*\]/i
    );
    if (m) return "q" + m[1] + "i" + m[2];

    m = txt.match(/param\s*:\s*\{\s*id\s*:\s*(\d+)/i);
    if (m) return "id:" + m[1];

    return "";
  }

  function getDropdownQuizKey(drop, idx) {
    if (!drop) return "dd:" + idx;

    const nodes = [drop].concat(Array.from(drop.querySelectorAll("[onclick],[onkeydown]")));

    for (let i = 0; i < nodes.length; i++) {
      const key =
        extractDropdownRuntimeKey(nodes[i].getAttribute("onclick")) ||
        extractDropdownRuntimeKey(nodes[i].getAttribute("onkeydown"));

      if (key) return key;
    }

    const selectedText = getDropdownSelectedText(drop);
    if (selectedText) return "t:" + shortHash(selectedText);

    const txt = stripQuizUiText(drop.textContent || "");
    if (txt) return "h:" + shortHash(txt.slice(0, 200));

    return "dd:" + idx;
  }

  function getDropdownSelectedTextNode(drop) {
    if (!drop) return null;

    const selectedWrap =
      drop.querySelector(":scope > .lia-dropdown__selected") ||
      drop.querySelector(".lia-dropdown__selected");

    if (!selectedWrap) return null;

    const directChildren = Array.from(selectedWrap.children || []);
    for (let i = 0; i < directChildren.length; i++) {
      if (String(directChildren[i].tagName || "").toLowerCase() === "span") {
        return directChildren[i];
      }
    }

    return selectedWrap.querySelector("span");
  }

  function getDropdownSelectedText(drop) {
    const node = getDropdownSelectedTextNode(drop);
    return normalizeSpace(node && node.textContent || "");
  }

  function captureDropdownQuizState(drop, idx) {
    const root = getDropdownQuizRootFromDropdown(drop, getContentHost() || document.body);
    const feedback = root ? root.querySelector(".lia-quiz__feedback") : null;

    const out = {
      k: getDropdownQuizKey(drop, idx),
      v: getDropdownSelectedText(drop)
    };
    applyAssignmentMetaToState(out, root);

    const stateCode = detectQuizState(root);
    const feedbackCode = detectFeedbackCode(feedback);
    const feedbackText = feedback ? normalizeSpace(feedback.textContent || "") : "";
    const checkCount = getQuizCheckCount(root);

    if (stateCode) out.s = stateCode;
    if (feedbackCode) out.fc = feedbackCode;
    if (feedbackText) out.t = feedbackText;
    if (checkCount > 0) out.cc = checkCount;

    return out;
  }

  function lockDropdownControl(drop) {
    if (!drop) return;

    try { drop.setAttribute("tabindex", "-1"); } catch (e) {}
    drop.style.pointerEvents = "none";

    const selected = drop.querySelector(".lia-dropdown__selected");
    if (selected) {
      try { selected.setAttribute("tabindex", "-1"); } catch (e) {}
      try { selected.setAttribute("aria-expanded", "false"); } catch (e) {}
      selected.style.pointerEvents = "none";
    }

    const options = drop.querySelector(".lia-dropdown__options");
    if (options) {
      options.classList.add("is-hidden");
      try { options.setAttribute("tabindex", "-1"); } catch (e) {}
      options.style.pointerEvents = "none";
    }

    Array.from(drop.querySelectorAll(".lia-dropdown__option")).forEach(function (opt) {
      try { opt.setAttribute("tabindex", "-1"); } catch (e) {}
      opt.style.pointerEvents = "none";
    });
  }

  function applyDropdownSelectedText(drop, value) {
    const node = getDropdownSelectedTextNode(drop);
    if (node) {
      node.textContent = String(value || "");
    }

    const selected = drop.querySelector(".lia-dropdown__selected");
    if (selected) {
      try { selected.setAttribute("aria-expanded", "false"); } catch (e) {}
    }

    const options = drop.querySelector(".lia-dropdown__options");
    if (options) {
      options.classList.add("is-hidden");
    }
  }

  function applyDropdownQuizState(drop, state) {
    if (!drop || !state) return drop;

    const root = getDropdownQuizRootFromDropdown(drop, getContentHost() || document.body);

    applyDropdownSelectedText(drop, state.v || "");

    if (root) {
      applyQuizRootStateClasses(root, state.s || "");

      const feedbackText = deriveFeedbackTextForState(root, state);
      const feedbackClass = getFeedbackClassFromState(state);

      if (feedbackText || state.s || state.f || state.fc) {
        const feedback = ensureQuizFeedbackElement(root);
        if (feedback) {
          feedback.classList.remove("text-success", "text-error", "text-disabled");
          if (feedbackClass) {
            feedback.classList.add(feedbackClass);
          }

          feedback.setAttribute("aria-live", "polite");

          if (feedbackText) {
            feedback.textContent = feedbackText;
          }

          revealQuizBlock(feedback);
        }
      }
    }

    if (root) {
      applyQuizCheckCount(root, state.cc || 0);
    }

    lockDropdownControl(drop);
    if (root) {
      lockTextQuizRoot(root);
    }
    
    return drop;
  }

  function applyStoredDropdownStatesToHost(host, storedStates) {
    const live = host ? getDropdownQuizControlsFromRoot(host) : [];
    const states = Array.isArray(storedStates) ? storedStates : [];
    const used = new Set();
    const applied = [];

    log(
      "dropdown-apply-live",
      "live=" + live.length,
      live.map(function (drop, idx) {
        return "[" + idx + "] " + JSON.stringify(getDropdownQuizKey(drop, idx));
      }).join(" || ")
    );

    log(
      "dropdown-apply-stored",
      "stored=" + states.length,
      states.map(function (state, idx) {
        return "[" + idx + "] " + JSON.stringify(state.k || "");
      }).join(" || ")
    );

    states.forEach(function (state, idx) {
      let target = null;
      const wantedKey = normalizeSpace(state && state.k || "");

      if (wantedKey) {
        for (let i = 0; i < live.length; i++) {
          if (used.has(live[i])) continue;
          if (getDropdownQuizKey(live[i], i) === wantedKey) {
            target = live[i];
            break;
          }
        }
      }

      if (!target) {
        if (idx >= 0 && idx < live.length && !used.has(live[idx])) {
          target = live[idx];
        }
      }

      if (!target) {
        log("dropdown-match-miss", "storedIdx=" + idx, "key=" + JSON.stringify(wantedKey));
        return;
      }

      used.add(target);
      applyDropdownQuizState(target, state);
      applied.push(target);
    });

    return applied;
  }


function getTextQuizRootKey(root, idx) {
  if (!root) return "qr:" + idx;

  const inputs = getTextQuizInputsFromRoot(root);
  if (inputs.length) {
    const first = getTextQuizInputKey(inputs[0], 0);
    if (first) return first;
  }

  const quizRoot = getTextQuizStateRoot(root);
  const txt = stripQuizUiText((quizRoot || root).textContent || "");
  if (txt) return "t:" + shortHash(txt.slice(0, 200));

  return "qr:" + idx;
}

  function readTextQuizInputValue(el) {
    if (!el) return "";

    if (isEditableTextbox(el)) {
      return String(el.textContent || "");
    }

    if ("value" in el) {
      return String(el.value || "");
    }

    return "";
  }


function stripTrailingCheckCountLabel(txt) {
  return normalizeSpace(String(txt || "").replace(/\s+\d+\s*$/, ""));
}

function getQuizCheckButton(root) {
  if (!root || !root.querySelector) return null;
  return root.querySelector(".lia-quiz__check");
}

function getQuizCheckCount(root) {
  const btn = getQuizCheckButton(root);
  if (!btn) return 0;

  const txt = normalizeSpace(btn.textContent || "");
  const m = txt.match(/(?:^|\s)(\d+)\s*$/);
  return m ? Number(m[1]) : 0;
}

function getQuizCheckBaseLabel(btn) {
  if (!btn) return "Prüfen";

  const stored = normalizeSpace(btn.getAttribute("data-freeze-check-label") || "");
  if (stored) return stored;

  const current = stripTrailingCheckCountLabel(btn.textContent || "") || "Prüfen";
  btn.setAttribute("data-freeze-check-label", current);
  return current;
}

function applyQuizCheckCount(root, count) {
  const btn = getQuizCheckButton(root);
  if (!btn) return;

  const base = getQuizCheckBaseLabel(btn);
  const n = Number(count || 0);

  btn.textContent = n > 0 ? (base + " " + n) : base;
}


  function detectQuizState(root) {
    const cls = String(root && root.className || "");
    if (/\bsolved\b/.test(cls)) return "s";
    if (/\bresolved\b/.test(cls)) return "r";
    return "";
  }

  function detectFeedbackCode(feedback) {
    if (!feedback) return "";
    const cls = String(feedback.className || "");
    if (/\btext-success\b/.test(cls)) return "s";
    if (/\btext-error\b/.test(cls)) return "e";
    if (/\btext-disabled\b/.test(cls)) return "d";
    return "";
  }

  function readQuizDataText(quiz, attrName) {
    if (!quiz) return "";

    const direct = normalizeSpace(quiz.getAttribute(attrName) || "");
    if (direct) return direct;

    const inDesc = quiz.querySelector("[" + attrName + "]");
    if (inDesc) {
      const txt = normalizeSpace(inDesc.getAttribute(attrName) || "");
      if (txt) return txt;
    }

    const checkBtn = quiz.querySelector(".lia-quiz__check");
    if (checkBtn) {
      const txt = normalizeSpace(checkBtn.getAttribute(attrName) || "");
      if (txt) return txt;
    }

    const resolveBtn = quiz.querySelector(".lia-quiz__resolve");
    if (resolveBtn) {
      const txt = normalizeSpace(resolveBtn.getAttribute(attrName) || "");
      if (txt) return txt;
    }

    return "";
  }

function captureTextQuizState(root, idx) {
  if (!root) return null;

  const quizRoot = getTextQuizStateRoot(root);
  const inputs = getTextQuizInputsFromRoot(root);
  const feedback = quizRoot ? quizRoot.querySelector(".lia-quiz__feedback") : null;

  const values = inputs.map(function (el) {
    return readTextQuizInputValue(el);
  });

  const stateCode = detectQuizState(quizRoot);
  const feedbackCode = detectFeedbackCode(feedback);
  const feedbackText = feedback ? normalizeSpace(feedback.textContent || "") : "";
  const checkCount = getQuizCheckCount(quizRoot);

  const out = {
    k: getTextQuizRootKey(root, idx),
    v: values
  };
  applyAssignmentMetaToState(out, quizRoot || root);

  if (stateCode) out.s = stateCode;
  if (feedbackCode) out.fc = feedbackCode;
  if (feedbackText) out.t = feedbackText;
  if (checkCount > 0) out.cc = checkCount;

  return out;
}

function countExpectedControls(slide) {
  let n = 0;

  if (slide && Array.isArray(slide.q)) {
    slide.q.forEach(function (q) {
      n += Array.isArray(q && q.v) ? q.v.length : 0;
    });
  }

  if (slide && Array.isArray(slide.d)) {
    n += slide.d.length;
  }

  if (slide && Array.isArray(slide.m)) {
    slide.m.forEach(function (m) {
      n += Array.isArray(m && m.v) ? m.v.length : 0;
    });
  }

  if (slide && Array.isArray(slide.c)) {
    slide.c.forEach(function (c) {
      n += Array.isArray(c && c.v) ? c.v.length : 0;
    });
  }

  if (slide && Array.isArray(slide.o)) {
    n += slide.o.length;
  }

  if (slide && Array.isArray(slide.fq)) {
    n += slide.fq.length;
  }

  if (slide && Array.isArray(slide.mq)) {
    n += slide.mq.length;
  }

  if (slide && Array.isArray(slide.cv)) {
    n += slide.cv.length;
  }


  return n;
}

function countLiveSupportedControlsForHash(hash) {
  const current = String(getCurrentHash() || "");
  if (current !== String(hash || "")) return 0;

  const host = getContentHost() || document.body;

  return (
    getTextQuizInputsFromRoot(host).length +
    getDropdownQuizControlsFromRoot(host).length +
    getTileQuizTargetsFromRoot(host).length +
    getChoiceQuizInputsFromRoot(host).length +
    collectOrthographyQuizRootsFromRoot(host).length +
    collectFractionQuizRootsFromRoot(host).length +
    collectMarkerQuizRootsFromRoot(host).length +
    collectCanvasFreezePairsFromRoot(host).length
  );
}

  function isSlideReadyForApply(hash) {
    const current = String(getCurrentHash() || "");
    if (current !== String(hash || "")) return false;

    const host = getContentHost() || document.body;
    if (!host) return false;
    if (!hasRenderedSelfOrDescendant(host)) return false;

    const desc = getCurrentSlideDescriptor();
    if (!descriptorLooksMaterialized(desc)) return false;

    const decl = getDeclaredSlideByHash(hash);
    const expectedTitle = normalizeSpace(decl && decl.t || "");
    const actualTitle = normalizeSpace(desc.t || "");

    if (expectedTitle && actualTitle && expectedTitle !== actualTitle) {
      return false;
    }

    const slide = getSnapshotSlideForHash(hash);
    if (!slide) return true;

    const expectedControls = countExpectedControls(slide);
    if (expectedControls > 0) {
      const liveControls = countLiveSupportedControlsForHash(hash);
      if (liveControls < expectedControls) return false;
    }

    return true;
  }

  async function waitForSlideReady(hash, timeoutMs) {
    const timeout = timeoutMs || 2600;
    const start = Date.now();

    while (Date.now() - start < timeout) {
      if (isSlideReadyForApply(hash)) return true;
      await sleep(60);
    }

    return isSlideReadyForApply(hash);
  }

  function ensureQuizFeedbackElement(root) {
    if (!root) return null;

    let feedback = root.querySelector(".lia-quiz__feedback");
    if (feedback) return feedback;

    feedback = document.createElement("div");
    feedback.className = "lia-quiz__feedback";
    root.appendChild(feedback);
    return feedback;
  }

  function revealQuizBlock(el) {
    if (!el) return;

    try { el.hidden = false; } catch (e) {}
    try { el.removeAttribute("hidden"); } catch (e) {}
    try { el.removeAttribute("aria-hidden"); } catch (e) {}

    el.style.removeProperty("display");
    el.style.removeProperty("visibility");
    el.style.removeProperty("opacity");
    el.style.removeProperty("max-height");

    if (!isRenderedElement(el)) {
      el.style.display = "block";
      el.style.visibility = "visible";
      el.style.opacity = "1";
    }
  }

  function applyQuizRootStateClasses(root, stateCode) {
    if (!root) return;
    root.classList.remove("solved", "resolved");

    if (stateCode === "s") {
      root.classList.add("solved");
    } else if (stateCode === "r") {
      root.classList.add("resolved");
    }
  }

  function applyFieldValueOnly(el, value) {
    if (!el) return;

    const tag = String(el.tagName || "").toLowerCase();
    const type = String(el.type || "").toLowerCase();

    if (isEditableTextbox(el)) {
      el.textContent = String(value || "");
    } else if (tag === "textarea" || tag === "select" || (type !== "checkbox" && type !== "radio")) {
      el.value = String(value || "");
      if (tag === "textarea") {
        el.textContent = String(value || "");
      }
    }
  }

  function lockTextQuizRoot(root) {
    if (!root) return;

    Array.from(root.querySelectorAll(
      "input, textarea, select, button, a, summary, [role='button'], [contenteditable='true'], [role='textbox']"
    )).forEach(function (el) {
      const tag = String(el.tagName || "").toLowerCase();
      const type = String(el.type || "").toLowerCase();

      if (tag === "a") {
        try { el.setAttribute("tabindex", "-1"); } catch (e) {}
        el.style.pointerEvents = "none";
        return;
      }

      if (type === "checkbox" || type === "radio") {
        try { el.setAttribute("tabindex", "-1"); } catch (e) {}
        el.style.pointerEvents = "none";
        return;
      }

      try { el.disabled = true; } catch (e) {}
      try { el.readOnly = true; } catch (e) {}
      try { el.setAttribute("tabindex", "-1"); } catch (e) {}
      try { el.setAttribute("contenteditable", "false"); } catch (e) {}
    });
  }

  function deriveFeedbackTextForState(root, state) {
    state = state || {};

    if (typeof state.t === "string" && state.t) return state.t;

    if (state.s === "s") {
      return readQuizDataText(root, "data-text-solved");
    }

    if (state.s === "r") {
      return readQuizDataText(root, "data-text-resolved");
    }

    if (state.f === "e") {
      return readQuizDataText(root, "data-text-failed");
    }

    return "";
  }

  function getFeedbackClassFromState(state) {
    state = state || {};

    if (state.fc === "s") return "text-success";
    if (state.fc === "e") return "text-error";
    if (state.fc === "d") return "text-disabled";

    if (state.s === "s") return "text-success";
    if (state.s === "r") return "text-disabled";
    if (state.f === "e") return "text-error";

    return "";
  }

function applyTextQuizState(root, state) {
  if (!root || !state) return root;

  const quizRoot = getTextQuizStateRoot(root);
  const controls = getTextQuizInputsFromRoot(root);
  const values = Array.isArray(state.v) ? state.v : [];
  const max = Math.min(controls.length, values.length);

  for (let i = 0; i < max; i++) {
    applyFieldValueOnly(controls[i], values[i]);
  }

  applyQuizRootStateClasses(quizRoot, state.s || "");

  const feedbackText = deriveFeedbackTextForState(quizRoot, state);
  const feedbackClass = getFeedbackClassFromState(state);

  if (feedbackText || state.s || state.f || state.fc) {
    const feedback = ensureQuizFeedbackElement(quizRoot);
    if (feedback) {
      feedback.classList.remove("text-success", "text-error", "text-disabled");
      if (feedbackClass) {
        feedback.classList.add(feedbackClass);
      }

      feedback.setAttribute("aria-live", "polite");

      if (feedbackText) {
        feedback.textContent = feedbackText;
      }

      revealQuizBlock(feedback);
    }
  }

  applyQuizCheckCount(quizRoot, state.cc || 0);

  lockTextQuizRoot(root);
  if (quizRoot && quizRoot !== root) {
    lockTextQuizRoot(quizRoot);
  }

  return root;
}

  function applyStoredTextQuizStatesToHost(host, storedStates) {
    const liveRoots = host ? collectTextQuizRootsFromRoot(host) : [];
    const states = Array.isArray(storedStates) ? storedStates : [];
    const used = new Set();
    const applied = [];

    log(
      "textquiz-apply-live",
      "live=" + liveRoots.length,
      liveRoots.map(function (root, idx) {
        return "[" + idx + "] " + JSON.stringify(getTextQuizRootKey(root, idx));
      }).join(" || ")
    );

    log(
      "textquiz-apply-stored",
      "stored=" + states.length,
      states.map(function (state, idx) {
        return "[" + idx + "] " + JSON.stringify(state.k || "");
      }).join(" || ")
    );

    states.forEach(function (state, idx) {
      let target = null;
      const wantedKey = normalizeSpace(state && state.k || "");

      if (wantedKey) {
        for (let i = 0; i < liveRoots.length; i++) {
          if (used.has(liveRoots[i])) continue;
          if (getTextQuizRootKey(liveRoots[i], i) === wantedKey) {
            target = liveRoots[i];
            break;
          }
        }
      }

      if (!target) {
        const wantedIndex = idx;
        if (wantedIndex >= 0 && wantedIndex < liveRoots.length && !used.has(liveRoots[wantedIndex])) {
          target = liveRoots[wantedIndex];
        }
      }

      if (!target) {
        log("textquiz-match-miss", "storedIdx=" + idx, "key=" + JSON.stringify(wantedKey));
        return;
      }

      used.add(target);
      applyTextQuizState(target, state);
      applied.push(target);
    });

    return applied;
  }


function reapplySnapshotSilently(hash, reason) {
  if (!snapshotPayload) return false;

  const currentHash = String(getCurrentHash() || "");
  const wantedHash = String(hash || "");

  if (!wantedHash || currentHash !== wantedHash) return false;
  if (isEvaluationTarget(wantedHash)) {
    unvisitedPlaceholderHash = "";
    evaluationPlaceholderHash = wantedHash;
    reinforceFrozenUi();
    log("reapply-silent", wantedHash, reason || "");
    return true;
  }

  evaluationPlaceholderHash = "";

  if (isUnvisitedTarget(wantedHash)) return false;
  if (!isSlideReadyForApply(wantedHash)) return false;

  const host = getContentHost() || document.body;
  const slide = getSnapshotSlideForHash(wantedHash);

  if (!host || !slide) return false;

  applyStoredTextQuizStatesToHost(host, slide.q || []);
  applyStoredDropdownStatesToHost(host, slide.d || []);
  applyStoredTileStatesToHost(host, slide.m || []);
  applyStoredChoiceStatesToHost(host, slide.c || []);
  applyStoredOrthographyStatesToHost(host, slide.o || []);
  applyStoredFractionStatesToHost(host, slide.fq || []);
  applyStoredMarkerQuizStatesToHost(host, slide.mq || []);
  applyStoredCanvasStatesToHost(host, slide.cv || []);
  applyStoredGeneralMarkerState(slide.gm || null);

  reinforceFrozenUi();

  log("reapply-silent", wantedHash, reason || "");
  return true;
}




  function schedulePostApplyReinforcement(hash, reason, delays) {
    const wantedHash = String(hash || "");
    const token = ++stabilizationToken;
    const plan = Array.isArray(delays) && delays.length
      ? delays
      : [140, 320, 700, 1200];

    plan.forEach(function (delay) {
      setTimeout(function () {
        if (token !== stabilizationToken) return;
        if (String(getCurrentHash() || "") !== wantedHash) return;

        reapplySnapshotSilently(
          wantedHash,
          (reason || "stabilize") + "@" + delay
        );
      }, delay);
    });
  }






  // =========================================================
  // Snapshot-Daten
  // =========================================================

  // =========================================================
  // Canvas Freeze API
  // =========================================================




  function getCanvasFreezeRootWindow() {
    let w = window;
    try {
      while (w.parent && w.parent !== w) w = w.parent;
    } catch (e) {}
    return w;
  }

  function getCanvasFreezeApi() {
    const root = getCanvasFreezeRootWindow();
    return (
      (root && root.__LIA_CANVAS_FREEZE_API__) ||
      window.__LIA_CANVAS_FREEZE_API__ ||
      null
    );
  }

function getCanvasFreezeScopeHost(root) {
  const candidates = uniqueElements([
    root,
    getBaseContentHost(),
    document.querySelector(".lia-slide__content"),
    document.querySelector(".lia-content"),
    document.querySelector("main"),
    document.body
  ]).filter(function (el) {
    return !!(el && el instanceof Element);
  });

  let best = null;
  let bestArea = -1;

  candidates.forEach(function (el) {
    if (!isRenderedElement(el) && !hasRenderedSelfOrDescendant(el)) return;

    const r = el.getBoundingClientRect();
    const area = Math.max(0, r.width) * Math.max(0, r.height);

    if (area > bestArea) {
      best = el;
      bestArea = area;
    }
  });

  return best || root || getBaseContentHost() || document.body;
}

  function collectCanvasFreezePairsFromRoot(root) {
    const api = getCanvasFreezeApi();
    if (!api || typeof api.collectCanvasPairsFromRoot !== "function") return [];

    const pairs = api.collectCanvasPairsFromRoot(root || document.body) || [];
    return uniqueElements(pairs.filter(function (el) {
      return !!(el && el instanceof Element);
    }));
  }

  function getCanvasFreezeUidFromPair(pair) {
    const api = getCanvasFreezeApi();
    if (!api || typeof api.getCanvasUidFromPair !== "function") return "";
    return String(api.getCanvasUidFromPair(pair) || "");
  }

function captureCanvasFreezeStatesFromRoot(root) {
  const api = getCanvasFreezeApi();
  if (!api || typeof api.exportCanvasFreezeStateFromPair !== "function") {
    return [];
  }

  const scope = getCanvasFreezeScopeHost(root);
  const pairs = collectCanvasFreezePairsFromRoot(scope);
  const out = [];

  log(
    "canvas-capture-scope",
    "tag=" + String(scope && scope.tagName || ""),
    "pairs=" + pairs.length
  );

  pairs.forEach(function (pair) {
    if (!pair || !(pair instanceof Element)) return;
    if (pair.closest("#lia-freeze-bar")) return;
    if (pair.closest(".lia-submit-box")) return;

    const state = api.exportCanvasFreezeStateFromPair(pair);
    if (!state) return;

    out.push(state);
  });

  return out;
}

function applyStoredCanvasStatesToHost(host, storedStates) {
  const api = getCanvasFreezeApi();
  if (!api || typeof api.renderCanvasFreezeStateIntoPair !== "function") {
    return [];
  }

  const scope = getCanvasFreezeScopeHost(host);
  const livePairs = scope ? collectCanvasFreezePairsFromRoot(scope) : [];
  const states = Array.isArray(storedStates) ? storedStates : [];
  const used = new Set();
  const applied = [];

  log(
    "canvas-apply-live",
    "live=" + livePairs.length,
    livePairs.map(function (pair, idx) {
      return "[" + idx + "] " + JSON.stringify(getCanvasFreezeUidFromPair(pair));
    }).join(" || ")
  );

  log(
    "canvas-apply-stored",
    "stored=" + states.length,
    states.map(function (state, idx) {
      return "[" + idx + "] " + JSON.stringify(state && state.u || "");
    }).join(" || ")
  );

  states.forEach(function (state, idx) {
    let target = null;
    const wantedUid = normalizeSpace(state && state.u || "");

    if (wantedUid) {
      for (let i = 0; i < livePairs.length; i++) {
        if (used.has(livePairs[i])) continue;
        if (getCanvasFreezeUidFromPair(livePairs[i]) === wantedUid) {
          target = livePairs[i];
          break;
        }
      }
    }

    if (!target) {
      if (idx >= 0 && idx < livePairs.length && !used.has(livePairs[idx])) {
        target = livePairs[idx];
      }
    }

    if (!target) {
      log("canvas-match-miss", "storedIdx=" + idx, "uid=" + JSON.stringify(wantedUid));
      return;
    }

    used.add(target);
    api.renderCanvasFreezeStateIntoPair(target, state);
    applied.push(target);
  });

  return applied;
}






function captureSlideStateForHash(hash) {
  const cleanHash = cleanHashValue(hash || "");
  if (!/^#\d+$/.test(cleanHash)) return null;

  const currentHash = getCurrentHash();
  if (String(currentHash) !== String(cleanHash)) {
    return null;
  }

  const host = getContentHost() || document.body;

  try {
    refreshAssignmentDetails(host);
  } catch (err) {
    console.error("[LIA-FREEZE] adetails-before-capture-error", err);
  }

  const textRoots = collectTextQuizRootsFromRoot(host);
  const dropdownRoots = getDropdownQuizControlsFromRoot(host);
  const tileRoots = collectTileQuizRootsFromRoot(host);
  const choiceRoots = collectChoiceQuizRootsFromRoot(host);
  const orthoRoots = collectOrthographyQuizRootsFromRoot(host);
  const fractionRoots = collectFractionQuizRootsFromRoot(host);
  const markerRoots = collectMarkerQuizRootsFromRoot(host);
  const canvasStates = captureCanvasFreezeStatesFromRoot(host);
  const generalMarkerState = captureGeneralMarkerState(host);

  const ordered = [];

  textRoots.forEach(function (root, idx) {
    ordered.push({
      root: root,
      kind: "q",
      capture: function () { return captureTextQuizState(root, idx); }
    });
  });

  dropdownRoots.forEach(function (root, idx) {
    ordered.push({
      root: root,
      kind: "d",
      capture: function () { return captureDropdownQuizState(root, idx); }
    });
  });

  tileRoots.forEach(function (root, idx) {
    ordered.push({
      root: root,
      kind: "m",
      capture: function () { return captureTileQuizState(root, idx); }
    });
  });

  choiceRoots.forEach(function (root, idx) {
    ordered.push({
      root: root,
      kind: "c",
      capture: function () { return captureChoiceQuizState(root, idx); }
    });
  });

  orthoRoots.forEach(function (root, idx) {
    ordered.push({
      root: root,
      kind: "o",
      capture: function () { return captureOrthographyQuizState(root, idx); }
    });
  });

  fractionRoots.forEach(function (root, idx) {
    ordered.push({
      root: root,
      kind: "fq",
      capture: function () { return captureFractionQuizState(root, idx); }
    });
  });

  markerRoots.forEach(function (root, idx) {
    ordered.push({
      root: root,
      kind: "mq",
      capture: function () { return captureMarkerQuizState(root, idx); }
    });
  });

  ordered.sort(function (a, b) {
    return compareElementsInDocumentOrder(a.root, b.root);
  });

  const out = {
    h: cleanHash,
    q: [],
    d: [],
    m: [],
    c: [],
    o: [],
    fq: [],
    mq: [],
    cv: canvasStates,
    gm: generalMarkerState
  };

  const sequence = [];

  ordered.forEach(function (entry) {
    const state = entry.capture();
    if (!state) return;

    out[entry.kind].push(state);
    sequence.push({
      root: entry.root,
      kind: entry.kind,
      state: state
    });
  });

  // Quelle ist hier die geparste Kursdatei, nicht das DOM.
  applyDeclaredTaskMetaToCapturedSequence(cleanHash, sequence);

  log(
    "slide-capture",
    cleanHash,
    "text=" + out.q.length,
    "dropdown=" + out.d.length,
    "tile=" + out.m.length,
    "choice=" + out.c.length,
    "ortho=" + out.o.length,
    "fraction=" + out.fq.length,
    "marker=" + out.mq.length,
    "canvas=" + out.cv.length,
    "general-marker=" + (
      out.gm && Array.isArray(out.gm.h)
        ? out.gm.h.length
        : 0
    )
  );

  return out;
}


function storeLiveSlideState(hash, source) {
  if (document.body.classList.contains("lia-snapshot-mode")) return false;

  const state = captureSlideStateForHash(hash);
  if (!state) return false;

  liveSlidesByHash[state.h] = state;
  log(
    "live-store",
    state.h,
    source || "",
    "text=" + (state.q ? state.q.length : 0),
    "dropdown=" + (state.d ? state.d.length : 0),
    "tile=" + (state.m ? state.m.length : 0),
    "choice=" + (state.c ? state.c.length : 0),
    "ortho=" + (state.o ? state.o.length : 0),
    "fraction=" + (state.fq ? state.fq.length : 0),
    "marker=" + (state.mq ? state.mq.length : 0),
    "canvas=" + (state.cv ? state.cv.length : 0),
    "general-marker=" + (
      state.gm && Array.isArray(state.gm.h)
        ? state.gm.h.length
        : 0
    )
  );
  return true;
}



function buildPayloadFromLiveStates() {
  const currentHash = liveRouteCurrentHash || getCurrentHash();
  storeLiveSlideState(currentHash, "payload-final");

  const declared = getDeclaredSlides().filter(function (slide) {
    return !(slide && slide.vt === "evaluation");
  });

  const payload = {
    v: PAYLOAD_VERSION,
    sh: getCurrentHash(),
    n: getDisplayName(),
    s: declared.map(function (slide) {
      const base = liveSlidesByHash[slide.h] || makeEmptySlideState(slide.h);
      const out = Object.assign({}, base);
      const meta = declaredEvaluationByHash[slide.h];

      if (meta) {
        out.tt = Number(meta.tt || 0) || 0;
        out.tb = Number(meta.tb || 0) || 0;
      }

      return out;
    })
  };

  payload.sec = getSerializableSecurityState();

  return payload;
}

  function getSnapshotSlideForHash(hash) {
    if (!snapshotPayload || !Array.isArray(snapshotPayload.s)) return null;

    for (let i = 0; i < snapshotPayload.s.length; i++) {
      if (String(snapshotPayload.s[i].h || "") === String(hash || "")) {
        return snapshotPayload.s[i];
      }
    }

    return null;
  }

  function isUnvisitedTarget(hash) {
    return false;
  }

  // =========================================================
  // Admin
  // =========================================================

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

  function captureAdminState() {
    const nameEl = document.getElementById("lia-name");

    if (nameEl && String(nameEl.value || "").trim()) {
      lastKnownName = String(nameEl.value || "").trim();
      return lastKnownName;
    }

    return lastKnownName || null;
  }

  function getDisplayName() {
    if (snapshotPayload && typeof snapshotPayload.n === "string" && snapshotPayload.n.trim()) {
      return snapshotPayload.n.trim();
    }

    if (typeof lastKnownName === "string" && lastKnownName.trim()) {
      return lastKnownName.trim();
    }

    const nameEl = document.getElementById("lia-name");
    if (nameEl && String(nameEl.value || "").trim()) {
      return String(nameEl.value || "").trim();
    }

    return "";
  }

  function applyAdminState(name, opts) {
    opts = opts || {};

    const nameEl = document.getElementById("lia-name");
    const linkEl = document.getElementById("lia-link");
    const statusEl = document.getElementById("lia-status");
    const btnEl = document.getElementById("lia-create-link");
    const noteEl = document.getElementById("lia-frozen-note");

    if (nameEl) {
      nameEl.value = typeof name === "string" ? name : "";
      try { nameEl.disabled = true; } catch (e) {}
      try { nameEl.readOnly = true; } catch (e) {}
    }

    if (btnEl) {
      try { btnEl.disabled = true; } catch (e) {}
      btnEl.textContent = "Abgabe eingefroren";
    }

    if (linkEl) {
      if (typeof opts.linkValue === "string") {
        linkEl.value = opts.linkValue;
      } else if (!opts.preserveLinkValue && !String(linkEl.value || "").trim()) {
        linkEl.value = window.location.href;
      }

      try { linkEl.disabled = false; } catch (e) {}
      try { linkEl.readOnly = true; } catch (e) {}
      linkEl.style.pointerEvents = "auto";
      linkEl.style.userSelect = "text";
      linkEl.style.webkitUserSelect = "text";
      linkEl.style.cursor = "text";
    }

    if (statusEl) {
      statusEl.textContent = opts.statusText || "Abgabelink erstellt.";
    }

    if (noteEl) {
      noteEl.style.display = "block";
      noteEl.innerHTML = "Dies ist ein <strong>eingefrorener Abgabestand</strong>. Änderungen sind gesperrt, Navigation läuft nur über die Freeze-Leiste oben.";
    }
  }

  // =========================================================
  // Placeholder / Loading
  // =========================================================

  function getFreezeOverlay() {
    let overlay = document.getElementById("lia-freeze-overlay");
    if (overlay) return overlay;

    overlay = document.createElement("div");
    overlay.id = "lia-freeze-overlay";
    overlay.style.position = "fixed";
    overlay.style.left = "0";
    overlay.style.top = "0";
    overlay.style.right = "0";
    overlay.style.bottom = "0";
    overlay.style.zIndex = "99998";
    overlay.style.display = "none";
    overlay.style.pointerEvents = "auto";
    overlay.style.background = "color-mix(in srgb, var(--lia-course-bg) 82%, transparent)";
    overlay.style.backdropFilter = "blur(1px)";
    overlay.innerHTML = '<div style="position:absolute;top:88px;left:50%;transform:translateX(-50%);padding:.7rem 1rem;border-radius:12px;background:rgb(var(--lia-submit-bg-rgb));color:var(--lia-submit-fg);border:1px solid var(--lia-submit-border-on-theme);font-weight:700;box-shadow:0 10px 26px rgba(0,0,0,.14);">Frozen-Zustand wird geladen …</div>';

    document.body.appendChild(overlay);
    return overlay;
  }

  function getUnvisitedPlaceholder() {
    let box = document.getElementById("lia-unvisited-placeholder");
    if (box) return box;

    box = document.createElement("div");
    box.id = "lia-unvisited-placeholder";
    box.style.position = "fixed";
    box.style.left = "50%";
    box.style.top = "96px";
    box.style.transform = "translateX(-50%)";
    box.style.width = "min(920px, calc(100vw - 24px))";
    box.style.maxHeight = "calc(100vh - 120px)";
    box.style.overflow = "auto";
    box.style.zIndex = "99997";
    box.style.display = "none";
    box.style.boxSizing = "border-box";
    box.style.padding = "1.1rem 1.2rem";
    box.style.borderRadius = "16px";
    box.style.background = "var(--lia-course-bg)";
    box.style.color = "var(--lia-course-fg)";
    box.style.border = "1px solid var(--lia-course-border)";
    box.style.boxShadow = "0 10px 26px rgba(0,0,0,.14)";
    document.body.appendChild(box);
    return box;
  }

  function hideUnvisitedPlaceholder() {
    unvisitedPlaceholderHash = "";
    syncFrozenScreens();
  }

  function showUnvisitedPlaceholder(hash) {
    unvisitedPlaceholderHash = String(hash || "");
    syncFrozenScreens();
  }

  function syncFrozenScreens() {
    const host = getContentHost();
    const overlay = getFreezeOverlay();
    const placeholder = getUnvisitedPlaceholder();

    if (freezeLoadingVisible) {
      if (host) {
        host.style.opacity = "0.08";
        host.style.pointerEvents = "none";
      }
      overlay.style.display = "block";
      placeholder.style.display = "none";
      return;
    }

    if (evaluationPlaceholderHash) {
      if (host) {
        host.style.opacity = "0";
        host.style.pointerEvents = "none";
      }

      overlay.style.display = "none";
      placeholder.style.background = "rgb(var(--lia-submit-bg-rgb))";
      placeholder.style.color = "var(--lia-submit-fg)";
      placeholder.style.border = "1px solid var(--lia-submit-border-on-theme)";
      placeholder.style.display = "block";
      placeholder.innerHTML = renderEvaluationPlaceholderHtml(evaluationPlaceholderHash);
      return;
    }

    if (unvisitedPlaceholderHash) {
      const decl = getDeclaredSlideByHash(unvisitedPlaceholderHash);
      const title = normalizeSpace(decl && decl.t || "");
      const name = getDisplayName();

      if (host) {
        host.style.opacity = "0";
        host.style.pointerEvents = "none";
      }

      overlay.style.display = "none";
      placeholder.style.background = "var(--lia-course-bg)";
      placeholder.style.color = "var(--lia-course-fg)";
      placeholder.style.border = "1px solid var(--lia-course-border)";
      placeholder.style.display = "block";
      placeholder.innerHTML = [
        '<div style="font-weight:800;font-size:1.35rem;line-height:1.2;margin-bottom:.6rem;">',
        escapeHtml(title || "Unbesuchte Folie"),
        "</div>",
        '<div style="margin-bottom:1rem;opacity:.9;font-weight:700;">',
        name ? (escapeHtml(name) + ": eingefrorener Abgabestand") : "Eingefrorener Abgabestand",
        "</div>",
        '<div style="padding:1rem 1.05rem;border-radius:12px;border:1px solid var(--lia-course-border);background:color-mix(in srgb, var(--lia-course-bg) 88%, black 12%);">',
        'Diese Folie wurde vor der Link-Erzeugung <strong>nicht besucht</strong> und bleibt deshalb im Freeze-Modus gesperrt.',
        "</div>"
      ].join("");
      return;
    }

    if (host) {
      host.style.opacity = "";
      host.style.pointerEvents = "";
    }

    overlay.style.display = "none";
    placeholder.style.display = "none";
  }

  function setFreezeLoading(active, reason) {
    freezeLoadingVisible = !!active;
    syncFrozenScreens();
    log(active ? "freeze-loading:on" : "freeze-loading:off", reason || "");
  }

  // =========================================================
  // Freeze UI
  // =========================================================

function ensureSnapshotModeClasses() {
  if (!document.body) return;

  document.body.classList.add("lia-course-frozen");
  document.body.classList.add("lia-snapshot-mode");

  if (snapshotIsSharedLinkMode) {
    document.body.classList.add("lia-shared-freeze-link");
  } else {
    document.body.classList.remove("lia-shared-freeze-link");
  }

  const host = getContentHost();
  if (host) host.classList.add("lia-frozen-scope");
}

function getFreezeBar() {
  let bar = document.getElementById("lia-freeze-bar");

  if (!bar) {
    bar = document.createElement("div");
    bar.id = "lia-freeze-bar";
    bar.innerHTML = [
      '<div id="lia-freeze-bar-inner">',
        '<div id="lia-freeze-nav-left" class="lia-freeze-nav-group">',
          '<button id="lia-freeze-first" type="button" aria-label="Zur ersten Folie" title="Zur ersten Folie">',
            '<svg viewBox="-4 0 24 24" aria-hidden="true" class="lia-freeze-icon lia-freeze-icon-first">',
              '<path d="M21 8H10.2V4L2 12l8.2 8v-4H21V8z" fill="currentColor"/>',
              '<rect x="-1.8" y="4" width="2.6" height="16" rx="1.3" fill="currentColor"/>',
            '</svg>',
          '</button>',
          '<button id="lia-freeze-prev" type="button" aria-label="Vorherige Folie" title="Vorherige Folie">',
            '<svg viewBox="-4 0 24 24" aria-hidden="true" class="lia-freeze-icon lia-freeze-icon-prev">',
              '<path d="M21 8H10.2V4L2 12l8.2 8v-4H21V8z" fill="currentColor"/>',
              '<rect x="10.2" y="10.6" width="10.8" height="2.8" rx="1.4" fill="currentColor"/>',
            '</svg>',
          '</button>',
        '</div>',

        '<div id="lia-freeze-center">',
          '<div id="lia-freeze-head"></div>',
          '<div id="lia-freeze-meta"></div>',
        '</div>',

        '<div id="lia-freeze-nav-right" class="lia-freeze-nav-group">',
          '<button id="lia-freeze-next" type="button" aria-label="Nächste Folie" title="Nächste Folie">',
            '<svg viewBox="-4 0 24 24" aria-hidden="true" class="lia-freeze-icon lia-freeze-icon-next" style="transform:scaleX(-1);">',
              '<path d="M21 8H10.2V4L2 12l8.2 8v-4H21V8z" fill="currentColor"/>',
              '<rect x="10.2" y="10.6" width="10.8" height="2.8" rx="1.4" fill="currentColor"/>',
            '</svg>',
          '</button>',
          '<button id="lia-freeze-last" type="button" aria-label="Zur Auswertungsfolie" title="Zur Auswertungsfolie">',
            '<svg viewBox="-4 0 24 24" aria-hidden="true" class="lia-freeze-icon lia-freeze-icon-last" style="transform:scaleX(-1);">',
              '<path d="M21 8H10.2V4L2 12l8.2 8v-4H21V8z" fill="currentColor"/>',
              '<rect x="-1.8" y="4" width="2.6" height="16" rx="1.3" fill="currentColor"/>',
            '</svg>',
          '</button>',
        '</div>',
      '</div>'
    ].join("");

    document.body.appendChild(bar);

    const firstBtn = bar.querySelector("#lia-freeze-first");
    const prevBtn = bar.querySelector("#lia-freeze-prev");
    const nextBtn = bar.querySelector("#lia-freeze-next");
    const lastBtn = bar.querySelector("#lia-freeze-last");

    firstBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      goFrozenFirst();
    }, true);

    prevBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      goFrozenRelative(-1);
    }, true);

    nextBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      goFrozenRelative(1);
    }, true);

    lastBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      goFrozenEvaluation();
    }, true);
  }

  styleFreezeBar(bar);
  return bar;
}

function styleFreezeBar(bar) {
  if (!bar) return;

  const maxWidth = Math.min(1180, Math.max(320, window.innerWidth - 16));

  bar.style.position = "fixed";
  bar.style.top = "0";
  bar.style.left = "50%";
  bar.style.transform = "translateX(-50%)";
  bar.style.width = maxWidth + "px";
  bar.style.maxWidth = "calc(100vw - 16px)";
  bar.style.boxSizing = "border-box";
  bar.style.zIndex = "99999";
  bar.style.padding = ".62rem .85rem";
  bar.style.borderRadius = "0 0 14px 14px";
  bar.style.background = "rgb(var(--lia-submit-bg-rgb))";
  bar.style.color = "var(--lia-submit-fg)";
  bar.style.border = "1px solid var(--lia-submit-border-on-theme)";
  bar.style.boxShadow = "0 10px 26px rgba(0,0,0,.14)";
  bar.style.display = document.body.classList.contains("lia-snapshot-mode") ? "block" : "none";

  const inner = bar.querySelector("#lia-freeze-bar-inner");
  if (inner) {
    inner.style.display = "grid";
    inner.style.gridTemplateColumns = "auto 1fr auto";
    inner.style.alignItems = "center";
    inner.style.gap = ".9rem";
  }

  const navGroups = bar.querySelectorAll(".lia-freeze-nav-group");
  navGroups.forEach(function (group) {
    group.style.display = "flex";
    group.style.alignItems = "center";
    group.style.gap = ".45rem";
  });

  const center = bar.querySelector("#lia-freeze-center");
  if (center) {
    center.style.minWidth = "0";
    center.style.display = "flex";
    center.style.alignItems = "center";
    center.style.justifyContent = "center";
    center.style.gap = "1rem";
    center.style.textAlign = "center";
  }

  const head = bar.querySelector("#lia-freeze-head");
  if (head) {
    head.style.minWidth = "0";
    head.style.fontWeight = "800";
    head.style.fontSize = "2rem";
    head.style.lineHeight = "1.2";
    head.style.whiteSpace = "nowrap";
    head.style.overflow = "hidden";
    head.style.textOverflow = "ellipsis";
  }

  const meta = bar.querySelector("#lia-freeze-meta");
  if (meta) {
    meta.style.flex = "0 0 auto";
    meta.style.fontWeight = "800";
    meta.style.fontSize = "2rem";
    meta.style.lineHeight = "1.2";
    meta.style.whiteSpace = "nowrap";
  }

  Array.from(bar.querySelectorAll("button")).forEach(function (btn) {
    btn.style.width = "46px";
    btn.style.height = "46px";
    btn.style.minWidth = "46px";
    btn.style.minHeight = "46px";
    btn.style.padding = "0";
    btn.style.borderRadius = "10px";
    btn.style.cursor = "pointer";
    btn.style.display = "inline-flex";
    btn.style.alignItems = "center";
    btn.style.justifyContent = "center";
    btn.style.background = "var(--lia-submit-button-bg)";
    btn.style.color = "var(--lia-submit-fg)";
    btn.style.border = "1px solid var(--lia-submit-border-on-theme)";
  });

  Array.from(bar.querySelectorAll(".lia-freeze-icon")).forEach(function (svg) {
    svg.style.width = "28px";
    svg.style.height = "28px";
    svg.style.display = "block";
    svg.style.pointerEvents = "none";
  });

  const bodyPadding = Math.ceil((bar.offsetHeight || 64) + 10);
  document.body.style.paddingTop = bodyPadding + "px";
  document.documentElement.style.scrollPaddingTop = bodyPadding + "px";
}

function refreshFreezeBar() {
  const bar = document.getElementById("lia-freeze-bar");
  if (!bar) return;

  styleFreezeBar(bar);

  const slides = getDeclaredSlides();
  const hash = cleanHashValue(getCurrentHash() || "");
  const idx = getDeclaredSlideIndex(hash);
  const slide = idx >= 0 ? slides[idx] : null;

  const head = bar.querySelector("#lia-freeze-head");
  const meta = bar.querySelector("#lia-freeze-meta");

  const firstBtn = bar.querySelector("#lia-freeze-first");
  const prevBtn  = bar.querySelector("#lia-freeze-prev");
  const nextBtn  = bar.querySelector("#lia-freeze-next");
  const lastBtn  = bar.querySelector("#lia-freeze-last");

  const evaluationIdx = slides.findIndex(function (s) {
    return !!(s && s.vt === "evaluation");
  });

  const name = normalizeSpace(getDisplayName() || "");
  const slideTitle = normalizeSpace(slide && slide.t || "");
  const posText = idx >= 0
    ? ((idx + 1) + " / " + slides.length)
    : ("– / " + slides.length);

  if (head) {
    const parts = [];

    if (name) parts.push(name);
    parts.push("Abgabe");
    if (slideTitle) parts.push(slideTitle);
    parts.push(posText);

    head.textContent = parts.join(" - ");
  }

  // meta leer lassen, weil x / y jetzt mit im Head steckt
  if (meta) {
    meta.textContent = "";
  }

  const canGoFirst = idx > 0;
  const canGoPrev = idx > 0;
  const canGoNext = idx >= 0 && idx < slides.length - 1;

  // Zur Auswertungsfolie springen dürfen wir,
  // sobald es überhaupt eine Auswertungsfolie gibt
  // und wir nicht bereits dort sind.
  const canGoLast = evaluationIdx >= 0 && idx !== evaluationIdx;

  if (firstBtn) firstBtn.disabled = !canGoFirst;
  if (prevBtn)  prevBtn.disabled  = !canGoPrev;
  if (nextBtn)  nextBtn.disabled  = !canGoNext;
  if (lastBtn)  lastBtn.disabled  = !canGoLast;

  [firstBtn, prevBtn, nextBtn, lastBtn].forEach(function (btn) {
    if (!btn) return;
    btn.style.opacity = btn.disabled ? ".55" : "1";
  });
}

  function scheduleRefreshFreezeBar(delay) {
    clearTimeout(freezeBarTimer);
    freezeBarTimer = setTimeout(function () {
      refreshFreezeBar();
    }, delay || 20);
  }



function lockCurrentSlideInteractiveState() {
  const host = getContentHost();
  if (!host) return;

  host.classList.add("lia-frozen-scope");

  Array.from(host.querySelectorAll(
    "input, textarea, select, button, a, summary, [role='button'], [contenteditable='true'], [role='textbox']"
  )).forEach(function (el) {
    if (el.closest("#lia-freeze-bar")) return;

    if (el.id === "lia-link") {
      try { el.disabled = false; } catch (e) {}
      try { el.readOnly = true; } catch (e) {}
      el.style.pointerEvents = "auto";
      el.style.userSelect = "text";
      el.style.webkitUserSelect = "text";
      el.style.cursor = "text";
      return;
    }

    if (
      isSharedFreezeLinkMode() &&
      el.classList &&
      el.classList.contains("lia-adetails-award-input")
    ) {
      try { el.disabled = false; } catch (e) {}
      try { el.readOnly = false; } catch (e) {}
      try { el.removeAttribute("tabindex"); } catch (e) {}
      el.style.pointerEvents = "auto";
      el.style.userSelect = "text";
      el.style.webkitUserSelect = "text";
      el.style.cursor = "text";
      return;
    }

    const tag = (el.tagName || "").toLowerCase();
    const type = String(el.type || "").toLowerCase();

    if (tag === "a") {
      el.setAttribute("tabindex", "-1");
      el.style.pointerEvents = "none";
      return;
    }

    if (type === "checkbox" || type === "radio") {
      try { el.setAttribute("tabindex", "-1"); } catch (e) {}
      el.style.pointerEvents = "none";
      return;
    }

    try { el.disabled = true; } catch (e) {}
    try { el.readOnly = true; } catch (e) {}
    try { el.setAttribute("tabindex", "-1"); } catch (e) {}
    try { el.setAttribute("contenteditable", "false"); } catch (e) {}
  });

  Array.from(host.querySelectorAll(".lia-dropdown")).forEach(function (drop) {
    lockDropdownControl(drop);
  });

  collectTileQuizRootsFromRoot(host).forEach(function (root) {
    lockTileQuizRoot(root);
  });

  collectChoiceQuizRootsFromRoot(host).forEach(function (root) {
    lockChoiceQuizRoot(root);
  });

  collectOrthographyQuizRootsFromRoot(host).forEach(function (wrap) {
    lockOrthographyQuizRoot(wrap);
  });

  collectFractionQuizRootsFromRoot(host).forEach(function (rep) {
    lockFractionQuizRoot(rep);
  });

  collectMarkerQuizRootsFromRoot(host).forEach(function (root) {
    lockMarkerQuizRoot(root);
  });

  lockMarkerQuizUi();
}



function reinforceFrozenUi() {
  ensureSnapshotModeClasses();
  getFreezeBar();
  refreshFreezeBar();
  applyAdminState(getDisplayName(), {
    preserveLinkValue: !freezeLinkValue,
    linkValue: freezeLinkValue || undefined
  });
  lockCurrentSlideInteractiveState();
  refreshAssignmentDetails();
  syncFrozenScreens();
}

  // =========================================================
  // Apply-Zyklus
  // =========================================================

async function applySnapshotOnce(hash, reason) {
  const currentHash = String(hash || getCurrentHash() || "#1");
  const isBootApply = !initialBootDone;

  if (isEvaluationTarget(currentHash)) {
    hideUnvisitedPlaceholder();
    showEvaluationPlaceholder(currentHash);
    reinforceFrozenUi();
    setFreezeLoading(false, "apply-evaluation:" + currentHash);
    return true;
  }

  evaluationPlaceholderHash = "";
  if (isUnvisitedTarget(currentHash)) {
    hideUnvisitedPlaceholder();
    showUnvisitedPlaceholder(currentHash);
    reinforceFrozenUi();
    setFreezeLoading(false, "apply-unvisited:" + currentHash);
    return true;
  }

  const ready = await waitForSlideReady(currentHash, 2600);
  if (!ready) {
    warn("apply-not-ready", currentHash, reason || "");
    return false;
  }

  hideUnvisitedPlaceholder();

  const host = getContentHost() || document.body;
  const slide = getSnapshotSlideForHash(currentHash);

  if (slide) {
    const appliedText = applyStoredTextQuizStatesToHost(host, slide.q || []);
    const appliedDropdown = applyStoredDropdownStatesToHost(host, slide.d || []);
    const appliedTile = applyStoredTileStatesToHost(host, slide.m || []);
    const appliedChoice = applyStoredChoiceStatesToHost(host, slide.c || []);
    const appliedOrtho = applyStoredOrthographyStatesToHost(host, slide.o || []);
    const appliedFraction = applyStoredFractionStatesToHost(host, slide.fq || []);
    const appliedMarker = applyStoredMarkerQuizStatesToHost(host, slide.mq || []);
    const appliedCanvas = applyStoredCanvasStatesToHost(host, slide.cv || []);
    applyStoredGeneralMarkerState(slide.gm || null);

    const expectedText = Array.isArray(slide.q) ? slide.q.length : 0;
    const expectedDropdown = Array.isArray(slide.d) ? slide.d.length : 0;
    const expectedTile = Array.isArray(slide.m) ? slide.m.length : 0;
    const expectedChoice = Array.isArray(slide.c) ? slide.c.length : 0;
    const expectedOrtho = Array.isArray(slide.o) ? slide.o.length : 0;
    const expectedFraction = Array.isArray(slide.fq) ? slide.fq.length : 0;
    const expectedMarker = Array.isArray(slide.mq) ? slide.mq.length : 0;
    const expectedCanvas = Array.isArray(slide.cv) ? slide.cv.length : 0;

    if (expectedText > 0 && (!appliedText || appliedText.length < expectedText)) {
      warn("apply-partial-text", currentHash, "expected=" + expectedText, "applied=" + (appliedText ? appliedText.length : 0));
      return false;
    }

    if (expectedDropdown > 0 && (!appliedDropdown || appliedDropdown.length < expectedDropdown)) {
      warn("apply-partial-dropdown", currentHash, "expected=" + expectedDropdown, "applied=" + (appliedDropdown ? appliedDropdown.length : 0));
      return false;
    }

    if (expectedTile > 0 && (!appliedTile || appliedTile.length < expectedTile)) {
      warn("apply-partial-tile", currentHash, "expected=" + expectedTile, "applied=" + (appliedTile ? appliedTile.length : 0));
      return false;
    }

    if (expectedChoice > 0 && (!appliedChoice || appliedChoice.length < expectedChoice)) {
      warn("apply-partial-choice", currentHash, "expected=" + expectedChoice, "applied=" + (appliedChoice ? appliedChoice.length : 0));
      return false;
    }

    if (expectedOrtho > 0 && (!appliedOrtho || appliedOrtho.length < expectedOrtho)) {
      warn("apply-partial-ortho", currentHash, "expected=" + expectedOrtho, "applied=" + (appliedOrtho ? appliedOrtho.length : 0));
      return false;
    }

    if (expectedFraction > 0 && (!appliedFraction || appliedFraction.length < expectedFraction)) {
      warn("apply-partial-fraction", currentHash, "expected=" + expectedFraction, "applied=" + (appliedFraction ? appliedFraction.length : 0));
      return false;
    }

    if (expectedMarker > 0 && (!appliedMarker || appliedMarker.length < expectedMarker)) {
      warn("apply-partial-marker", currentHash, "expected=" + expectedMarker, "applied=" + (appliedMarker ? appliedMarker.length : 0));
      return false;
    }

    if (expectedCanvas > 0 && (!appliedCanvas || appliedCanvas.length < expectedCanvas)) {
      warn("apply-partial-canvas", currentHash, "expected=" + expectedCanvas, "applied=" + (appliedCanvas ? appliedCanvas.length : 0));
      return false;
    }
  }

  reinforceFrozenUi();

  schedulePostApplyReinforcement(
    currentHash,
    isBootApply ? "boot-stabilize" : "route-stabilize",
    isBootApply
      ? [160, 380, 800, 1400, 2200]
      : [140, 320, 700]
  );

  setFreezeLoading(false, "apply-success:" + currentHash);
  return true;
}



async function runApplyCycle(hash, runToken, attemptDelays, reason) {
  const delays = Array.isArray(attemptDelays) && attemptDelays.length
    ? attemptDelays
    : [0, 120, 320, 700];

  try {
    for (let i = 0; i < delays.length; i++) {
      if (runToken !== applyRunToken) return false;

      const delay = delays[i];
      if (delay > 0) {
        await sleep(delay);
      }

      if (runToken !== applyRunToken) return false;
      if (String(getCurrentHash() || "") !== String(hash || "")) return false;

      log("apply-attempt", hash, "try=" + (i + 1), reason || "");

      const ok = await applySnapshotOnce(hash, reason || "");
      if (ok) {
        if (!initialBootDone) {
          initialBootDone = true;
        }
        return true;
      }
    }

    warn("apply-cycle-failed", hash, reason || "");
    setFreezeLoading(false, "apply-cycle-failed:" + hash);
    return false;
  } catch (err) {
    console.error("[LIA-FREEZE] apply-cycle-exception", err);
    warn("apply-cycle-exception", hash, err && err.message ? err.message : err);
    setFreezeLoading(false, "apply-cycle-exception:" + hash);
    return false;
  }
}

  function scheduleApplySnapshot(hash, delay, opts) {
    opts = opts || {};
    const targetHash = String(hash || getCurrentHash() || "#1");
    const delays = Array.isArray(opts.attemptDelays) ? opts.attemptDelays : null;
    const reason = String(opts.reason || "");
  
    applyRunToken += 1;
    stabilizationToken += 1;
    const runToken = applyRunToken;
  
    clearTimeout(applyTimer);
    applyTimer = setTimeout(function () {
      if (String(getCurrentHash() || "") !== targetHash) return;
      setFreezeLoading(true, "schedule-apply:" + targetHash);
      runApplyCycle(targetHash, runToken, delays, reason);
    }, delay || 60);
  }

  function scheduleInitialBootApply(hash) {
    initialBootDone = false;
    scheduleApplySnapshot(hash, 40, {
      reason: "initial-boot",
      attemptDelays: [0, 120, 280, 550, 900, 1400]
    });
  }

  // =========================================================
  // Route-Bridge
  // =========================================================

  function installRouteBridge() {
    if (routeBridgeInstalled) return;
    routeBridgeInstalled = true;

    function emitRouteChange(source, hrefSnapshot, hashSnapshot) {
      const snapHref = String(hrefSnapshot || window.location.href || "");
      const snapHash = cleanHashValue(hashSnapshot || window.location.hash || "");

      setTimeout(function () {
        sanitizeMalformedSubmissionHash();

        const detail = {
          source: source,
          href: snapHref,
          hash: snapHash
        };

        log("routechange", detail.source, "hash=" + detail.hash);
        window.dispatchEvent(new CustomEvent("lia:routechange", { detail: detail }));
      }, 0);
    }

    const originalPushState = history.pushState.bind(history);
    const originalReplaceState = history.replaceState.bind(history);

    history.pushState = function () {
      const result = originalPushState.apply(history, arguments);
      emitRouteChange("pushState", window.location.href, window.location.hash);
      return result;
    };

    history.replaceState = function () {
      const result = originalReplaceState.apply(history, arguments);
      emitRouteChange("replaceState", window.location.href, window.location.hash);
      return result;
    };

    window.addEventListener("hashchange", function () {
      emitRouteChange("hashchange", window.location.href, window.location.hash);
    });

    window.addEventListener("popstate", function () {
      emitRouteChange("popstate", window.location.href, window.location.hash);
    });
  }

  // =========================================================
  // Navigation
  // =========================================================

  function goFrozenRelative(dir) {
    const slides = getDeclaredSlides();
    const idx = getDeclaredSlideIndex(getCurrentHash());
    if (idx < 0) return;

    const target = slides[idx + dir];
    if (!target) return;

    window.location.hash = String(target.h);
  }

  function goFrozenHash(targetHash) {
    if (!targetHash) return;
    window.location.hash = String(targetHash);
  }


  function goFrozenFirst() {
    const slides = getDeclaredSlides();
    if (!slides.length) return;

    const first = slides[0];
    if (!first || !first.h) return;

    window.location.hash = String(first.h);
  }

  function goFrozenEvaluation() {
    const slides = getDeclaredSlides();
    if (!slides.length) return;

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      if (slide && slide.vt === "evaluation" && slide.h) {
        window.location.hash = String(slide.h);
        return;
      }
    }

    // Fallback: letzte deklarierte Folie
    const last = slides[slides.length - 1];
    if (last && last.h) {
      window.location.hash = String(last.h);
    }
  }

  // =========================================================
  // Live-Bindings
  // =========================================================


function getRootWindowSafe() {
  let w = window;
  try {
    while (w.parent && w.parent !== w) {
      w = w.parent;
    }
  } catch (e) {}
  return w;
}

function isF12KeyboardEvent(e) {
  const key = String(e && e.key || "");
  const code = String(e && e.code || "");
  const keyCode = Number(e && (e.keyCode || e.which) || 0);

  return key === "F12" || code === "F12" || keyCode === 123;
}

function markF12Attempt(e) {
  const type = String(e && e.type || "unknown");
  const ts = Math.round(Number(e && e.timeStamp || Date.now()));
  const COALESCE_MS = 1200;

  if (Number.isFinite(ts) && ts >= 0) {
    if (lastTrackedF12Stamp >= 0 && Math.abs(ts - lastTrackedF12Stamp) <= 40) {
      return;
    }
  }

  if (type === "keydown") {
    lastTrackedF12KeyStamp = ts;
  }

  if (type === "devtools-open") {
    if (
      lastTrackedF12KeyStamp >= 0 &&
      ts >= lastTrackedF12KeyStamp &&
      (ts - lastTrackedF12KeyStamp) <= COALESCE_MS
    ) {
      log(
        "security-f12-coalesced",
        "devtools-open merged with recent F12 keydown",
        "delta=" + (ts - lastTrackedF12KeyStamp)
      );
      lastTrackedF12Stamp = ts;
      return;
    }
  }

  lastTrackedF12Stamp = ts;
  liveSecurityState.f12 = (Number(liveSecurityState.f12 || 0) || 0) + 1;

  log(
    "security-f12",
    "count=" + liveSecurityState.f12,
    "type=" + type
  );
}

function markTabAttempt(kind, stamp) {
  const ts = Math.round(Number(stamp || Date.now()));

  if (Number.isFinite(ts) && ts >= 0) {
    if (lastTrackedTabStamp >= 0 && Math.abs(ts - lastTrackedTabStamp) <= 500) {
      return;
    }
    lastTrackedTabStamp = ts;
  }

  liveSecurityState.tab = (Number(liveSecurityState.tab || 0) || 0) + 1;

  log(
    "security-tab",
    "count=" + liveSecurityState.tab,
    "type=" + String(kind || "unknown")
  );
}

function isLikelyDevtoolsOpen() {
  const outerW = Number(window.outerWidth || 0);
  const innerW = Number(window.innerWidth || 0);
  const outerH = Number(window.outerHeight || 0);
  const innerH = Number(window.innerHeight || 0);

  const widthGap = Math.abs(outerW - innerW);
  const heightGap = Math.abs(outerH - innerH);

  if (widthGap > 170) return true;
  if (heightGap > 170) return true;

  try {
    if (
      window.Firebug &&
      window.Firebug.chrome &&
      window.Firebug.chrome.isInitialized
    ) {
      return true;
    }
  } catch (e) {}

  return false;
}

function installDevtoolsWatch() {
  if (devtoolsWatchInstalled) return;
  devtoolsWatchInstalled = true;

  devtoolsLikelyOpen = isLikelyDevtoolsOpen();

  // Schon beim Start offen => direkt als Versuch werten
  if (
    devtoolsLikelyOpen &&
    !(document.body && document.body.classList.contains("lia-snapshot-mode"))
  ) {
    markF12Attempt({
      type: "devtools-open-initial",
      timeStamp: Date.now()
    });
  }

  function probe() {
    if (document.body && document.body.classList.contains("lia-snapshot-mode")) return;

    const openNow = isLikelyDevtoolsOpen();

    if (openNow && !devtoolsLikelyOpen) {
      markF12Attempt({
        type: "devtools-open",
        timeStamp: Date.now()
      });
    }

    devtoolsLikelyOpen = openNow;
  }

  window.addEventListener("resize", function () {
    setTimeout(probe, 60);
  }, true);

  window.addEventListener("focus", function () {
    setTimeout(probe, 60);
  }, true);

  devtoolsWatchTimer = window.setInterval(probe, 700);
}

function installGlobalF12Tracking() {
  if (f12TrackingInstalled) return;
  f12TrackingInstalled = true;

  function handler(e) {
    if (document.body && document.body.classList.contains("lia-snapshot-mode")) return;
    if (!isF12KeyboardEvent(e)) return;
    if (e && e.repeat) return;

    markF12Attempt(e);
  }

  const root = getRootWindowSafe();
  const targets = uniqueElements([
    window,
    document,
    document.documentElement,
    document.body,
    root,
    root && root.document
  ]);

  targets.forEach(function (target) {
    if (!target || !target.addEventListener) return;
    target.addEventListener("keydown", handler, true);
  });
}

function installGlobalTabTracking() {
  if (tabTrackingInstalled) return;
  tabTrackingInstalled = true;

  const root = getRootWindowSafe();
  const winTargets = uniqueElements([window, root]);
  const docTargets = uniqueElements([document, root && root.document]);

  function inSnapshotMode() {
    return !!(
      document.body &&
      document.body.classList.contains("lia-snapshot-mode")
    );
  }

  function isTabCurrentlyActive() {
    let visible = true;
    let focused = true;

    try {
      visible = String(document.visibilityState || "") !== "hidden";
    } catch (e) {}

    try {
      focused = typeof document.hasFocus === "function"
        ? !!document.hasFocus()
        : true;
    } catch (e) {}

    return visible && focused;
  }

  function tryArmTabTracking(reason) {
    if (inSnapshotMode()) return;
    if (!shouldTrackTab()) return;
    if (tabTrackingArmed) return;
    if (!isTabCurrentlyActive()) return;

    tabTrackingArmed = true;
    log("security-tab-armed", "type=" + String(reason || "active"));
  }

  function scheduleBlurProbe(kind) {
    if (inSnapshotMode()) return;
    if (!shouldTrackTab()) return;
    if (!tabTrackingArmed) return;

    clearTimeout(tabBlurProbeTimer);

    tabBlurProbeTimer = window.setTimeout(function () {
      if (inSnapshotMode()) return;
      if (!tabTrackingArmed) return;

      let hidden = false;
      let unfocused = false;

      try {
        hidden = String(document.visibilityState || "") === "hidden";
      } catch (e) {}

      try {
        unfocused = typeof document.hasFocus === "function"
          ? !document.hasFocus()
          : true;
      } catch (e) {
        unfocused = true;
      }

      if (hidden || unfocused) {
        markTabAttempt(kind, Date.now());
      }
    }, 80);
  }

  function onVisibilityChange(e) {
    if (inSnapshotMode()) return;
    if (!shouldTrackTab()) return;

    const doc = e && e.currentTarget && typeof e.currentTarget.visibilityState === "string"
      ? e.currentTarget
      : document;

    const state = String(doc.visibilityState || "");

    if (state === "visible") {
      tryArmTabTracking("tab-visible");
      return;
    }

    if (state === "hidden") {
      if (!tabTrackingArmed) return;
      markTabAttempt("tab-hidden", Date.now());
    }
  }

  docTargets.forEach(function (target) {
    if (!target || !target.addEventListener) return;
    target.addEventListener("visibilitychange", onVisibilityChange, true);
  });

  winTargets.forEach(function (target) {
    if (!target || !target.addEventListener) return;

    target.addEventListener("focus", function () {
      tryArmTabTracking("window-focus");
    }, true);

    target.addEventListener("pageshow", function () {
      tryArmTabTracking("pageshow");
    }, true);

    target.addEventListener("blur", function () {
      scheduleBlurProbe("window-blur");
    }, true);
  });

  setTimeout(function () {
    tryArmTabTracking("boot");
  }, 250);
}



function installLiveCaptureBindings() {
  if (liveBindingsInstalled) return;
  liveBindingsInstalled = true;

  installRouteBridge();
  liveRouteCurrentHash = getCurrentHash();

  function isGeneralMarkerMarkModeActive_LOCAL() {
    const inst = getMarkerQuizInstance();
    return !!(
      inst &&
      inst.state &&
      inst.state.active &&
      String(inst.state.tool || "") === "mark"
    );
  }

  function isAnyMarkerOverlayInteraction_LOCAL(el) {
    if (!el || !(el instanceof Element)) return false;

    return !!(
      el.closest(".lia-hl-rect") ||
      el.closest("#lia-hl-btn") ||
      el.closest("#lia-hl-panel")
    );
  }

  document.addEventListener("input", function (e) {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (document.body.classList.contains("lia-snapshot-mode")) return;

    if (isTextQuizInputControl(t) || isOrthographyQuizInput(t)) {
      captureAdminState();
      storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "input-now");
      return;
    }

    if (isFractionRangeInput(t)) {
      setTimeout(function () {
        captureAdminState();
        storeLiveSlideState(
          liveRouteCurrentHash || getCurrentHash(),
          "fraction-range-input"
        );
      }, 120);
    }
  }, true);

  document.addEventListener("change", function (e) {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (document.body.classList.contains("lia-snapshot-mode")) return;

    if (isTextQuizInputControl(t) || isChoiceQuizInput(t) || isOrthographyQuizInput(t)) {
      captureAdminState();
      storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "change-now");
      return;
    }

    if (isFractionRangeInput(t)) {
      setTimeout(function () {
        captureAdminState();
        storeLiveSlideState(
          liveRouteCurrentHash || getCurrentHash(),
          "fraction-range-change"
        );
      }, 120);
    }
  }, true);

  document.addEventListener("click", function (e) {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (document.body.classList.contains("lia-snapshot-mode")) return;

    if (
      t.closest(".lia-quiz") ||
      t.closest(".lia-dropdown") ||
      findTileQuizInteractiveAncestor(t) ||
      isChoiceQuizInput(t) ||
      t.closest("label") ||
      t.closest(".orthography-wrap")
    ) {
      setTimeout(function () {
        captureAdminState();
        storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "quiz-click");
      }, 80);
      return;
    }

    if (findFractionQuizInteractiveAncestor(t)) {
      setTimeout(function () {
        captureAdminState();
        storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "fraction-click");
      }, 80);
      return;
    }

    if (findMarkerQuizInteractiveAncestor(t)) {
      setTimeout(function () {
        captureAdminState();
        storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "marker-click");
      }, 120);
    }
  }, true);

  document.addEventListener("keydown", function (e) {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (document.body.classList.contains("lia-snapshot-mode")) return;

    const key = String(e.key || "");
    if (key !== "Enter" && key !== " ") return;

    if (
      t.closest(".lia-dropdown") ||
      findTileQuizInteractiveAncestor(t) ||
      isChoiceQuizInput(t) ||
      t.closest("label") ||
      t.closest(".orthography-wrap") ||
      t.closest(".lia-quiz")
    ) {
      setTimeout(function () {
        captureAdminState();
        storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "quiz-key");
      }, 80);
      return;
    }

    if (findFractionQuizInteractiveAncestor(t)) {
      setTimeout(function () {
        captureAdminState();
        storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "fraction-key");
      }, 120);
      return;
    }

    if (findMarkerQuizInteractiveAncestor(t)) {
      setTimeout(function () {
        captureAdminState();
        storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "marker-key");
      }, 120);
    }
  }, true);

  document.addEventListener("mouseup", function (e) {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (document.body.classList.contains("lia-snapshot-mode")) return;

    const inMarkerQuiz = !!t.closest(".markerquiz");
    const generalMarkerMode = isGeneralMarkerMarkModeActive_LOCAL();

    // Wichtig:
    // Für allgemeine Marker außerhalb eines Quiz NICHT mehr auf eine noch
    // vorhandene Text-Selection prüfen, weil der Markerimport die Selection
    // auf mouseup oft schon entfernt hat.
    if (!inMarkerQuiz && !generalMarkerMode) return;

    setTimeout(function () {
      captureAdminState();
      storeLiveSlideState(
        liveRouteCurrentHash || getCurrentHash(),
        inMarkerQuiz ? "markerquiz-mouseup" : "general-marker-mouseup"
      );
    }, 180);
  }, true);

  document.addEventListener("pointerdown", function (e) {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (document.body.classList.contains("lia-snapshot-mode")) return;

    if (!isAnyMarkerOverlayInteraction_LOCAL(t)) return;

    setTimeout(function () {
      captureAdminState();
      storeLiveSlideState(
        liveRouteCurrentHash || getCurrentHash(),
        "marker-pointer"
      );
    }, 140);
  }, true);

  document.addEventListener("dragend", function (e) {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (document.body.classList.contains("lia-snapshot-mode")) return;
    if (!findTileQuizInteractiveAncestor(t)) return;

    setTimeout(function () {
      captureAdminState();
      storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "tile-dragend");
    }, 100);
  }, true);

  uniqueElements([window, getRootWindowSafe()]).forEach(function (target) {
    if (!target || !target.addEventListener) return;

    target.addEventListener("lia:canvas-change", function (ev) {
      if (document.body.classList.contains("lia-snapshot-mode")) return;

      setTimeout(function () {
        captureAdminState();
        storeLiveSlideState(
          liveRouteCurrentHash || getCurrentHash(),
          "canvas-change"
        );
      }, 40);
    }, true);
  });

  document.addEventListener("drop", function (e) {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (document.body.classList.contains("lia-snapshot-mode")) return;
    if (!findTileQuizInteractiveAncestor(t)) return;

    setTimeout(function () {
      captureAdminState();
      storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "tile-drop");
    }, 100);
  }, true);

  window.addEventListener("lia:routechange", function (ev) {
    if (document.body.classList.contains("lia-snapshot-mode")) return;

    const prevHash = cleanHashValue(liveRouteCurrentHash || getCurrentHash());
    const newHash = cleanHashValue(
      ev && ev.detail && ev.detail.hash ? ev.detail.hash : getCurrentHash()
    );

    captureAdminState();
    storeLiveSlideState(prevHash, "route-outgoing");

    liveRouteCurrentHash = newHash;

    setTimeout(function () {
      storeLiveSlideState(newHash, "route-incoming");
      scheduleAssignmentDetailsRefresh(220);
    }, 180);
  });

  setTimeout(function () {
    captureAdminState();
    storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "init");
  }, 180);
}



  // =========================================================
  // Freeze-Bindings
  // =========================================================

function isAllowedFreezeTarget(target) {
  if (!target || !(target instanceof Element)) return false;

  if (target.closest("#lia-freeze-bar")) return true;
  if (target.id === "lia-link") return true;
  if (target.closest && target.closest("#lia-link")) return true;

  if (
    isSharedFreezeLinkMode() &&
    target.closest(".lia-adetails-award-input")
  ) {
    return true;
  }

  return false;
}

function blockNativeFrozenInteractionEvent(e) {
  if (!document.body.classList.contains("lia-snapshot-mode")) return;
  if (isAllowedFreezeTarget(e.target)) return;

  const t = e.target;
  if (!(t instanceof Element)) return;

  const interactive = t.closest(
    "a, button, input, textarea, select, summary, [role='button'], .lia-quiz, .lia-dropdown, .lia-dropdown__selected, .lia-dropdown__option, label, [contenteditable='true'], [role='textbox']"
  ) || findTileQuizInteractiveAncestor(t) || findFractionQuizInteractiveAncestor(t) || findMarkerQuizInteractiveAncestor(t);

  if (!interactive) return;

  e.preventDefault();
  e.stopPropagation();
  if (typeof e.stopImmediatePropagation === "function") {
    e.stopImmediatePropagation();
  }
}

function blockFrozenKeydown(e) {
  if (!document.body.classList.contains("lia-snapshot-mode")) return;
  if (isAllowedFreezeTarget(e.target)) return;

  const key = String(e.key || "");

  if (key === "ArrowLeft") {
    e.preventDefault();
    e.stopPropagation();
    if (typeof e.stopImmediatePropagation === "function") {
      e.stopImmediatePropagation();
    }
    goFrozenRelative(-1);
    return;
  }

  if (key === "ArrowRight") {
    e.preventDefault();
    e.stopPropagation();
    if (typeof e.stopImmediatePropagation === "function") {
      e.stopImmediatePropagation();
    }
    goFrozenRelative(1);
    return;
  }

  const blocked = {
    ArrowUp: 1,
    ArrowDown: 1,
    PageUp: 1,
    PageDown: 1,
    Home: 1,
    End: 1,
    " ": 1,
    Spacebar: 1,
    Enter: 1,
    Backspace: 1
  };

  if (blocked[key]) {
    e.preventDefault();
    e.stopPropagation();
    if (typeof e.stopImmediatePropagation === "function") {
      e.stopImmediatePropagation();
    }
  }
}

  function installFreezeBindings() {
    if (freezeBindingsInstalled) return;
    freezeBindingsInstalled = true;

    installRouteBridge();

    document.addEventListener("click", blockNativeFrozenInteractionEvent, true);
    document.addEventListener("mousedown", blockNativeFrozenInteractionEvent, true);
    document.addEventListener("pointerdown", blockNativeFrozenInteractionEvent, true);
    document.addEventListener("touchstart", blockNativeFrozenInteractionEvent, true);
    document.addEventListener("input", blockNativeFrozenInteractionEvent, true);
    document.addEventListener("change", blockNativeFrozenInteractionEvent, true);
    document.addEventListener("submit", blockNativeFrozenInteractionEvent, true);
    document.addEventListener("keydown", blockFrozenKeydown, true);

    document.addEventListener("focusin", function (e) {
      if (!document.body.classList.contains("lia-snapshot-mode")) return;
      if (isAllowedFreezeTarget(e.target)) return;

      const t = e.target;
      if (!(t instanceof Element)) return;

      const interactive = t.closest(
        "a, button, input, textarea, select, summary, [role='button'], [contenteditable='true'], [role='textbox']"
      );

      if (!interactive) return;

      try { interactive.blur(); } catch (err) {}
    }, true);

    window.addEventListener("lia:routechange", function (ev) {
      if (!snapshotPayload) return;

      const current = cleanHashValue(
        ev && ev.detail && ev.detail.hash ? ev.detail.hash : getCurrentHash()
      );

      log("freeze-route-handler", "current=" + current);

      // Alte allgemeine Marker sofort entfernen, damit beim Folienwechsel
      // kein kurzer Stale-State der vorherigen Folie aufblitzt.
      clearStoredGeneralMarkerStateNow("route-change:" + current);

      scheduleRefreshFreezeBar(20);
      scheduleApplySnapshot(current, 80, {
        reason: "route-change",
        attemptDelays: [0, 120, 260, 520]
      });
    });
  }

  // =========================================================
  // Modi / Link-Erzeugung
  // =========================================================

async function activateSnapshotMode(payload, linkValue, opts) {
  opts = opts || {};

  snapshotPayload = payload || null;
  console.log("[LIA-FREEZE] snapshot-loaded", JSON.stringify(snapshotPayload));
  if (!snapshotPayload) return false;

  snapshotIsSharedLinkMode = !!opts.sharedLinkMode;
  freezeLinkValue = String(linkValue || window.location.href || "");

  await ensureDeclaredSlides(true);

  ensureSnapshotModeClasses();
  getFreezeBar();
  refreshFreezeBar();
  installFreezeBindings();
  applyAdminState(getDisplayName(), {
    preserveLinkValue: false,
    linkValue: freezeLinkValue
  });

  const bootHash = getFreezeBootTargetHash();
  const currentHash = cleanHashValue(getCurrentHash() || "");

  log(
    "activate-boot-target",
    "shared=" + (snapshotIsSharedLinkMode ? "1" : "0"),
    "current=" + currentHash,
    "target=" + bootHash
  );

  setFreezeLoading(true, "activate-start");

  // Wenn wir im geteilten Link direkt auf die Auswertung wollen,
  // sofort dorthin routen. Der Evaluation-Apply braucht keinen fertigen DOM-Quizaufbau.
  if (currentHash !== bootHash) {
    try {
      setHashSilently(bootHash);
    } catch (e) {}

    try {
      window.location.hash = bootHash;
    } catch (e) {}
  }

  scheduleApplySnapshot(bootHash, 0, {
    reason: "initial-boot",
    attemptDelays: isEvaluationTarget(bootHash)
      ? [0, 80, 180]
      : [0, 120, 260, 520]
  });

  return true;
}

  async function createLink() {
    const btnEl = document.getElementById("lia-create-link");

    try {
      lastKnownName = getDisplayName() || lastKnownName || "";

      if (btnEl) {
        btnEl.disabled = true;
        btnEl.textContent = "Abgabelink wird erstellt …";
      }

      await ensureDeclaredSlides(true);

      captureAdminState();
      storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "createLink");

      const payload = buildPayloadFromLiveStates();
      console.log("[LIA-FREEZE] payload-before-link", JSON.stringify(payload));
      const link = buildLink(payload);

      freezeLinkValue = link;

      const linkEl = getLinkBox();
      if (linkEl) {
        linkEl.value = link;
        try { linkEl.disabled = false; } catch (e) {}
        try { linkEl.readOnly = true; } catch (e) {}
        linkEl.style.pointerEvents = "auto";
        linkEl.style.userSelect = "text";
        linkEl.style.webkitUserSelect = "text";
      }

      setStatus(
        "Abgabelink erstellt. F12/DevTools: " +
        (
          payload &&
          payload.sec &&
          Number(payload.sec.f12 || 0)
        ) +
        " · Tab/Fenster: " +
        (
          payload &&
          payload.sec &&
          Number(payload.sec.tab || 0)
        )
      );
      await activateSnapshotMode(payload, link, {
        sharedLinkMode: false
      });
    } catch (err) {
      console.error(err);
      setStatus("Fehler bei der Linkerstellung: " + (err && err.message ? err.message : err));

      if (btnEl) {
        btnEl.disabled = false;
        btnEl.textContent = "Abgabelink erstellen";
      }

      setFreezeLoading(false, "createLink-error");
    }
  }

async function initMode() {
  const directToken =
    getSubmissionTokenFromCourseUrl() ||
    getSubmissionTokenFromViewerHash();

  if (directToken) {
    storeSubmissionToken(directToken);
  }

  const snapshot = tryLoadSnapshot();

  if (snapshot) {
    await activateSnapshotMode(snapshot, window.location.href, {
      sharedLinkMode: !!directToken
    });
    return;
  }

  await ensureDeclaredSlides();
  installLiveCaptureBindings();
  scheduleAssignmentDetailsRefresh(180);
  }

  function safeBoot() {
    try {
      ensureRuntimeStyle();
      installThemeWatcher();
      installGlobalF12Tracking();
      installGlobalTabTracking();
      installDevtoolsWatch();
      initMode().catch(function (err) {
        console.error("[LIA-FREEZE] boot-error", err);
      });
    } catch (err) {
      console.error("[LIA-FREEZE] boot-error", err);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", safeBoot);
  } else {
    setTimeout(safeBoot, 0);
  }

  return {
    createLink: createLink,
    clearStoredSubmissionToken: clearStoredSubmissionToken,
    goFrozenHash: goFrozenHash
  };
})();
@end













@Abgabe
<div class="lia-submit-box">
  <h2>Abgabeerstellung</h2>

  <label for="lia-name">Name</label>
  <input id="lia-name" data-snapshot-admin="1" type="text" placeholder="Name eingeben">

  <button id="lia-create-link" data-snapshot-admin="1" onclick="window.__liaSubmissionDemo.createLink()">Abgabelink erstellen</button>

  <label for="lia-link">Abgabelink</label>
  <textarea id="lia-link" data-snapshot-admin="1" readonly placeholder="Hier erscheint der erzeugte Link"></textarea>

  <div id="lia-status"></div>
  <div id="lia-frozen-note" class="lia-frozen-note"></div>
</div>
@end



@Auswertung
<div data-snapshot-eval="1" style="display:none;"></div>
@end

@ADetails
<span class="lia-assignment-details" data-adetails="@0" style="display:none !important;"></span>
@end



-->



# Reine LiaScript-Abgabelink-Demo

Einfaches importieren: \
`import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md`

Abgabefeld über Makro: \
`@Abgabe`

Automatisches Auswerten: \
`@Auswertung`

Tracking von Betrugsversuchen über DevTools: \
`@Auswertung(F12)`

Tracking von Betrugsversuchen über Tab-/Fensterwechsel: \
`@Auswertung(Tab)`

Tracking von Betrugsversuchen im Allgemeinen: \
`@Auswertung(F12;Tab)`

Aufgaben mit Bewertungseinheiten und Tags versehen: \
`@ADetails(x=BE;Tag1,Tag2,...)` (mit einer Leerzeile hinter dem Quiz einfügen.)

Aufgaben ohne Bewertung: \
`@ADetails(0=BE)` (mit einer Leerzeile hinter dem Quiz einfügen.)




# Erste Folie

$a)\;\;$ $7000+123=$ [[  7123  ]] @canvas

@ADetails(1=BE;Addition)



Wähle blau aus.
- [[X]] Blau
- [[ ]] Gelb
- [[ ]] Rot
- [[ ]] Grün

@ADetails(1=BE;Farben)

Wähle rot aus.
[[(rot)|blau|grün|gelb]]

@ADetails(1=BE;Farben)



Wähle gelb aus.
[->[rot|blau|grün|(gelb)]]

@ADetails(1=BE;Farben)



$b)\;\;$ $6000+123=$ [[  6123  ]] m @canvas

@ADetails(1=BE;Einheiten,Addition)



# 2. Folie


$c)\;\;$ $5000+123=$ [[  5123  ]] @canvas

@ADetails(1=BE;Addition)

Wähle blau aus.
- [(X)] Blau
- [( )] Gelb
- [( )] Rot
- [( )] Grün

@ADetails(1=BE;Farben)

Wähle grün aus.
[->[rot|blau|(grün)|gelb]]

@ADetails(1=BE;Farben)


Wähle blau aus.
- [[X]] Blau
- [[ ]] Gelb
- [[ ]] Rot
- [[ ]] Grün

@ADetails(1=BE;Farben)



# 3. Folie





Wähle blau aus.
- [(X)] Blau
- [( )] Gelb
- [( )] Rot
- [( )] Grün

@ADetails(1=BE;Farben)



Wähle grün aus.
[[rot|blau|(grün)|gelb]]

@ADetails(1=BE;Farben)


**Entscheide**, ob es sich bei dem Term um einen Vektor, ein Skalar oder einen nicht definierten Ausdruck handelt.
<br>

- [[Vektor]       (Skalar)    [nicht definiert]]
- [    [ ]           [ ]             [X]     ]  nicht definiert
- [    ( )           (X)             ( )     ]  Skalar
- [    [X]           [ ]             [ ]     ]  Vektor


@ADetails(3=BE;Tabelle)



$d)\;\;$ $4000+123=$ [[  4123  ]] @canvas

@ADetails(1=BE;Addition)




# Deutschaufgaben-Makros





__Aufgabe 1:__ Hör dir den Satz an und schreib ihn korrekt in das Eingabefeld.


{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Anna sitzt auf einem fliegenden Teppich.

[[    Anna sitzt auf einem fliegenden Teppich.    ]]

@ADetails(4=BE; Deutsch)

--- 


__Aufgabe 2:__ Lass dir die Wörter vorlesen, die in die Lücken kommen und schreibe diese in die Lücken.

Anna ging in einen @diktat(Zoo). Dort konnte sie auf einem @diktat(Lama) reiten.

@ADetails(2=BE; Deutsch)

--- 



__Aufgabe 3:__ Setze das Komma an die richtige Stelle. (Auflösung ist blockiert.)


@orthography(2,`Der Bruder den ich mag.`,`Der Bruder, den ich mag.`)

@ADetails(1=BE; Deutsch)


$g)\;\;$ $6000+123=$ [[  6123  ]] m @canvas

@ADetails(1=BE;Einheiten,Addition)


# Brüche darstellen

**Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.

__$a)\;\;$__ $\dfrac{1}{4}$

@rectQuiz(1/4)

@ADetails(1=BE;Bruchrechnung)

__$b)\;\;$__ $\dfrac{2}{5}$

@circleQuiz(2/5)

@ADetails(1=BE;Bruchrechnung)

__$c)\;\;$__ $\dfrac{1}{3}$

@circleQuiz(1/3)

@ADetails(1=BE;Bruchrechnung)



$e)\;\;$ $6000+123=$ [[  6123  ]] m @canvas

@ADetails(1=BE;Einheiten,Addition)



# Markerquiz




Markiere die korrekt.

<div class="markerquiz">
@markred(rot) und @markblue(blau bis blau)
@TextmarkerQuiz
</div>

@ADetails(1=BE;Farben)

Kommentare werden auch eingefroren

[[___]]

@ADetails(0=BE)

[[___ ___ ___ ___]]

@ADetails(0=BE)

Einfach noch ein KaTeX-Testfeld: [[     passt     ]]  @canvas

@ADetails(0=BE)



@Abgabe

@Auswertung(F12;Tab)



