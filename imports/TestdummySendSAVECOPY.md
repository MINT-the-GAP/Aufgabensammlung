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

  /* eigene Eingabefeld-Farben */
  --lia-submit-input-bg: #ffffff;
  --lia-submit-input-fg: #111111;
  --lia-submit-input-border: rgba(0,0,0,.20);
  --lia-submit-placeholder: rgba(17,17,17,.65);
}

/* Darkmode explizit */
@media (prefers-color-scheme: dark){
  :root{
    --lia-submit-input-bg: #1f1f24;
    --lia-submit-input-fg: #f3f3f3;
    --lia-submit-input-border: rgba(255,255,255,.20);
    --lia-submit-placeholder: rgba(243,243,243,.60);
  }
}

/* Lightmode explizit */
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

.lia-submit-box label{
  display: block;
  font-weight: 700;
  margin: .7rem 0 .25rem 0;
}

.lia-submit-box input[type="text"],
.lia-submit-box textarea{
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

/* Nur der Folieninhalt selbst wird unbedienbar */
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

/* Hinweisbalken */
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

@end




























@onload
window.__liaSubmissionDemo = (function () {
  const PARAM_NAME = "submission";
  const ADMIN_ATTR = "data-snapshot-admin";
  const STORAGE_PREFIX = "__lia_submission_demo__:";
  const PAYLOAD_VERSION = "sf-frozen-nav-16";
  const DEBUG = true;

  let snapshotPayload = null;
  let declaredSlidesCache = [];
  let liveSlidesByHash = Object.create(null);
  let liveVisitedHashes = Object.create(null);

  let liveBindingsInstalled = false;
  let freezeBindingsInstalled = false;
  let routeBridgeInstalled = false;
  let themeWatcherInstalled = false;

  let liveObserver = null;
  let applyTimer = null;
  let freezeBarTimer = null;
  let applyRunToken = 0;
  let liveWaitToken = 0;

  let lastKnownName = "";
  let freezeLinkValue = "";
  let currentFrozenTargetHash = "";
  let lastAppliedVisitedHash = "";
  let liveRouteCurrentHash = "";

  let freezeApplying = false;
  let freezeBooting = false;
  let frozenNavInFlight = false;
  let ignoreNextRouteCorrection = false;
  let internalNativeNav = false;

  let freezeLoadingVisible = false;
  let unvisitedPlaceholderHash = "";

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

  function base64ToUtf8(str) {
    return decodeURIComponent(escape(atob(str)));
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

  function hashSort(a, b) {
    const na = Number(String(a && a.h || "").replace(/^#/, ""));
    const nb = Number(String(b && b.h || "").replace(/^#/, ""));
    if (isFinite(na) && isFinite(nb)) return na - nb;
    return String(a && a.h || "").localeCompare(String(b && b.h || ""));
  }

  function descriptorSignature(desc) {
    return [
      desc && desc.h || "",
      desc && desc.t || "",
      Number(desc && desc.fc || 0),
      Number(desc && desc.qc || 0),
      desc && desc.x || ""
    ].join("||");
  }

  function descriptorLooksMaterialized(desc) {
    if (!desc) return false;
    if (normalizeSpace(desc.t)) return true;
    if (Number(desc.fc || 0) > 0) return true;
    if (Number(desc.qc || 0) > 0) return true;
    if (normalizeSpace(desc.x)) return true;
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
      "input, textarea, select, button, a, label, summary, [role='button'], [role='textbox'], [contenteditable='true'], .lia-quiz__check, .lia-quiz__resolve"
    );

    for (let i = 0; i < candidates.length; i++) {
      if (isRenderedElement(candidates[i])) return true;
    }
    return false;
  }

  function cleanHashValue(raw) {
    const h = String(raw || "");

    if (!h) return "#1";

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

  function isEditableTextbox(el) {
    if (!el) return false;
    if (el.isContentEditable) return true;
    if (String(el.getAttribute("contenteditable") || "").toLowerCase() === "true") return true;
    if (String(el.getAttribute("role") || "").toLowerCase() === "textbox") return true;
    return false;
  }

  function stateScore(state) {
    if (!state) return -1;
    if (state.p) return 1;

    let score = 0;
    if (normalizeSpace(state.t)) score += 100;
    score += Number(state.fc || 0) * 10;
    score += Number(state.qc || 0) * 15;
    if (normalizeSpace(state.x)) score += 5;
    if (Array.isArray(state.f)) score += state.f.length * 3;
    if (Array.isArray(state.q)) score += state.q.length * 6;
    return score;
  }

  function stateDataSignature(state) {
    return JSON.stringify({
      h: String(state && state.h || ""),
      t: normalizeSpace(state && state.t || ""),
      x: normalizeSpace(state && state.x || ""),
      fc: Number(state && state.fc || 0),
      qc: Number(state && state.qc || 0),
      p: state && state.p ? 1 : 0,
      u: state && state.u ? 1 : 0,
      n: normalizeSpace(state && state.n || ""),
      f: Array.isArray(state && state.f) ? state.f : [],
      q: Array.isArray(state && state.q) ? state.q : []
    });
  }

  function cloneStateArray(arr) {
    if (!Array.isArray(arr)) return [];
    return JSON.parse(JSON.stringify(arr));
  }

  function pickPreferredText(oldText, newText) {
    const oldNorm = normalizeSpace(oldText || "");
    const newNorm = normalizeSpace(newText || "");

    if (!oldNorm && newNorm) return String(newText || "");
    if (oldNorm && !newNorm) return String(oldText || "");

    if (newNorm.length > oldNorm.length) return String(newText || "");
    if (oldNorm.length > newNorm.length) return String(oldText || "");

    return typeof newText === "string" ? newText : String(oldText || "");
  }

  function pickStateArray(oldArr, newArr) {
    const oldLen = Array.isArray(oldArr) ? oldArr.length : 0;
    const newLen = Array.isArray(newArr) ? newArr.length : 0;

    if (newLen > oldLen) return cloneStateArray(newArr);
    if (oldLen > newLen) return cloneStateArray(oldArr);
    if (!newLen) return cloneStateArray(oldArr);

    return cloneStateArray(newArr);
  }

  function mergeLiveStates(existing, nextState) {
    if (!nextState) return existing || null;
    if (!existing) return nextState;

    if (existing.p && !nextState.p) {
      existing = {
        h: existing.h || nextState.h || "",
        t: existing.t || "",
        n: existing.n || ""
      };
    }

    const mergedFields = pickStateArray(existing.f, nextState.f);
    const mergedQuizzes = pickStateArray(existing.q, nextState.q);

    return {
      h: nextState.h || existing.h || "",
      t: pickPreferredText(existing.t, nextState.t),
      x: pickPreferredText(existing.x, nextState.x),
      n: normalizeSpace(nextState.n || "") || normalizeSpace(existing.n || "") || "",
      fc: Math.max(
        Number(existing.fc || 0),
        Number(nextState.fc || 0),
        mergedFields.length
      ),
      qc: Math.max(
        Number(existing.qc || 0),
        Number(nextState.qc || 0),
        mergedQuizzes.length
      ),
      f: mergedFields,
      q: mergedQuizzes
    };
  }

  function shouldReplaceLiveState(existing, nextState) {
    if (!nextState) return false;
    if (!existing) return true;
    return stateDataSignature(existing) !== stateDataSignature(nextState);
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
    if (!h.startsWith("#" + PARAM_NAME + "=")) return null;

    const raw = h.slice(("#" + PARAM_NAME + "=").length);
    const token = raw.split("#")[0];
    return token ? decodeURIComponent(token) : null;
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

    if (!raw.startsWith("#" + PARAM_NAME + "=")) return false;

    const lastHash = raw.lastIndexOf("#");
    if (lastHash <= 0) return false;

    const trailing = raw.slice(lastHash);
    if (!/^#\d+$/.test(trailing)) return false;

    try {
      history.replaceState(null, "", trailing);
    } catch (e) {
      window.location.hash = trailing;
    }

    return true;
  }

  function getCleanViewerHash() {
    sanitizeMalformedSubmissionHash();
    return cleanHashValue(window.location.hash || "");
  }

  function getCurrentHash() {
    return getCleanViewerHash() || "#1";
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

  function pushHashSilently(hash) {
    const target = String(hash || "#1");
    const base = window.location.href.split("#")[0];
    const newUrl = base + target;

    try {
      history.pushState(history.state, "", newUrl);
    } catch (e) {
      window.location.hash = target;
    }
  }

  function buildLink(payload) {
    const baseCourseUrl = stripSubmissionFromCourseUrl(getCourseUrlFromViewerUrl());
    if (!baseCourseUrl) return window.location.href;

    const token = encodeURIComponent(utf8ToBase64(JSON.stringify(payload)));
    storeSubmissionToken(token);

    const courseUrlObj = new URL(baseCourseUrl, window.location.href);
    courseUrlObj.hash = PARAM_NAME + "=" + token;

    const viewerBase = window.location.href.split("?")[0].split("#")[0];
    const encodedCourseUrl = encodeURIComponent(courseUrlObj.toString());

    return viewerBase + "?" + encodedCourseUrl + (payload.sh || "#1");
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
  // DOM / aktive Folie
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

function getVisibleTitleAnchor() {
  const host = getBaseContentHost();
  return getVisibleTitleAnchorFromRoot(host);
}

function getSlideRootFromVisibleHeading() {
  const host = getBaseContentHost();
  const heading = getVisibleTitleAnchor();

  if (!host || !heading) return null;
  if (!host.contains(heading)) return host;

  let node = heading.parentElement;
  let best = null;

  while (node && node instanceof Element) {
    const visibleHeadings = Array.from(
      node.querySelectorAll("h1, h2, h3, h4, h5, h6")
    ).filter(function (h) {
      if (h.closest(".lia-submit-box")) return false;
      if (h.closest("#lia-freeze-bar")) return false;
      return isRenderedElement(h);
    });

    const containsTargetHeading = visibleHeadings.indexOf(heading) >= 0;

    const visibleLearnerFields = Array.from(
      node.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")
    ).filter(function (el) {
      return isLearnerFieldCandidate(el) && isRenderedElement(el);
    });

    const visibleQuizButtons = Array.from(
      node.querySelectorAll(".lia-quiz__check, .lia-quiz__resolve")
    ).filter(function (btn) {
      return isRenderedElement(btn);
    });

    if (
      containsTargetHeading &&
      (
        visibleHeadings.length === 1 ||
        visibleLearnerFields.length > 0 ||
        visibleQuizButtons.length > 0
      )
    ) {
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

  function getQuizRootFromInner(el) {
    if (!el) return null;

    const host = getContentHost() || document.body;
    const direct = el.closest(".lia-quiz");
    if (direct) return direct;

    let node = el;
    while (node && node !== host && node !== document.body) {
      if (!(node instanceof Element)) break;

      const hasButtons = !!node.querySelector(".lia-quiz__check, .lia-quiz__resolve");
      if (hasButtons) {
        const hasMarkers = !!node.querySelector(
          "input, textarea, select, [role='textbox'], [contenteditable='true'], .lia-quiz__feedback, .lia-quiz__answers"
        );
        if (hasMarkers || node.childElementCount <= 12) {
          return node;
        }
      }

      node = node.parentElement;
    }

    return el.parentElement || el;
  }

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

  function getRenderedQuizButtonsFromRoot(root) {
    if (!root || !root.querySelectorAll) return [];

    return Array.from(
      root.querySelectorAll(".lia-quiz__check, .lia-quiz__resolve")
    ).filter(function (btn) {
      if (btn.closest("#lia-freeze-bar")) return false;
      return isRenderedElement(btn);
    });
  }

  function getLocalTaskContainers(target) {
    const out = [];
    const seen = new Set();
    const host = getContentHost() || document.body;

    if (!(target instanceof Element)) return out;

    let node = target;
    let hops = 0;

    while (node && node !== host && node !== document.body && hops < 8) {
      if (!(node instanceof Element)) break;

      const fields = Array.from(
        node.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")
      ).filter(isLearnerFieldCandidate);

      const quizButtons = getRenderedQuizButtonsFromRoot(node);

      if (fields.length && quizButtons.length && fields.length <= 8 && quizButtons.length <= 4) {
        if (!seen.has(node)) {
          seen.add(node);
          out.push(node);
        }
        break;
      }

      node = node.parentElement;
      hops += 1;
    }

    return out;
  }

  function getFieldElementsFromRoot(root) {
    if (!root || !root.querySelectorAll) return [];

    return Array.from(
      root.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")
    ).filter(function (el) {
      if (!isLearnerFieldCandidate(el)) return false;

      if (isRenderedElement(el)) return true;
      if (isEditableTextbox(el)) return true;
      if (el === document.activeElement) return true;

      const localContainers = getLocalTaskContainers(el);
      if (localContainers.length) return true;

      const quizAncestor = el.closest && el.closest(".lia-quiz");
      if (quizAncestor && hasRenderedSelfOrDescendant(quizAncestor)) return true;

      return false;
    });
  }

function collectQuizRootsFromRoot(root) {
  if (!root || !root.querySelectorAll) return [];

  const explicitRoots = Array.from(root.querySelectorAll(".lia-quiz")).filter(function (quiz) {
    if (quiz.closest("#lia-freeze-bar")) return false;
    if (quiz.parentElement && quiz.parentElement.closest(".lia-quiz")) return false;
    return hasRenderedSelfOrDescendant(quiz);
  });

  if (explicitRoots.length) {
    return uniqueElements(explicitRoots);
  }

  const fallbackRoots = getRenderedQuizButtonsFromRoot(root).map(function (btn) {
    return getQuizRootFromInner(btn);
  }).filter(function (quizRoot) {
    return quizRoot && hasRenderedSelfOrDescendant(quizRoot);
  });

  return uniqueElements(fallbackRoots);
}


function getQuizStateKey(quiz) {
  if (!quiz) return "";

  try {
    const clone = quiz.cloneNode(true);

    Array.from(clone.querySelectorAll(
      "input, textarea, select, button, .lia-quiz__feedback, .lia-quiz__answers, .lia-quiz__check, .lia-quiz__resolve"
    )).forEach(function (el) {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });

    const txt = normalizeSpace(clone.textContent || "");
    if (txt) return txt.slice(0, 300);
  } catch (e) {}

  const aria = normalizeSpace(quiz.getAttribute && quiz.getAttribute("aria-label") || "");
  if (aria) return aria;

  const id = normalizeSpace(quiz.id || "");
  if (id) return id;

  return "";
}

function applyStoredQuizStatesToHost(host, storedStates) {
  const liveQuizzes = host ? collectQuizRootsFromRoot(host) : [];
  const states = Array.isArray(storedStates) ? storedStates : [];

  const byKey = new Map();

  liveQuizzes.forEach(function (quiz) {
    const key = getQuizStateKey(quiz);
    if (!byKey.has(key)) byKey.set(key, []);
    byKey.get(key).push(quiz);
  });

  const used = new Set();
  let fallbackIndex = 0;

  states.forEach(function (state) {
    let targetQuiz = null;
    const key = normalizeSpace(state && state.k || "");

    if (key && byKey.has(key)) {
      const bucket = byKey.get(key);

      while (bucket.length && used.has(bucket[0])) {
        bucket.shift();
      }

      if (bucket.length) {
        targetQuiz = bucket.shift();
      }
    }

    while (!targetQuiz && fallbackIndex < liveQuizzes.length) {
      const candidate = liveQuizzes[fallbackIndex++];
      if (!used.has(candidate)) {
        targetQuiz = candidate;
      }
    }

    if (targetQuiz) {
      used.add(targetQuiz);
      applyQuizState(targetQuiz, state);
    }
  });

  return liveQuizzes;
}


function getCurrentSlideQuizzes() {
  const host = getContentHost() || document.body;
  return collectQuizRootsFromRoot(host);
}

function getCurrentSlideLearnerFields() {
  const host = getContentHost() || document.body;
  return getFieldElementsFromRoot(host);
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
          parent.closest(".lia-quiz__answers") ||
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
    if (normalizeSpace(parts.join(" ")).length >= 140) break;
  }

  return normalizeSpace(parts.join(" ")).slice(0, 140);
}

function buildDescriptorFromRoot(root, forcedHash) {
  if (!root) return null;

  const heading = getVisibleTitleAnchorFromRoot(root);
  const actualTitle = normalizeSpace(heading && heading.textContent || "");

  const fields = getFieldElementsFromRoot(root);
  const quizzes = collectQuizRootsFromRoot(root);

  return {
    h: forcedHash || getCurrentHash(),
    t: actualTitle,
    fc: fields.length,
    qc: quizzes.length,
    x: getTextSampleFromRoot(root),
    _heading: actualTitle
  };
}


function getVisibleHeadingsGlobal() {
  return Array.from(
    document.querySelectorAll("h1, h2, h3, h4, h5, h6")
  ).filter(function (el) {
    if (el.closest(".lia-submit-box")) return false;
    if (el.closest("#lia-freeze-bar")) return false;
    return isRenderedElement(el);
  });
}

function findNearestVisibleContentAncestor(el) {
  if (!(el instanceof Element)) return null;

  let node = el.parentElement;
  let best = null;

  while (node && node !== document.body) {
    if (!(node instanceof Element)) break;

    const matchesContentContainer =
      node.matches(".lia-slide__content, .lia-content, main, article, section, #content");

    const visibleEnough =
      !node.hidden &&
      ((isRenderedElement(node)) || hasRenderedSelfOrDescendant(node));

    if (matchesContentContainer && visibleEnough) {
      best = node;
    }

    node = node.parentElement;
  }

  return best;
}


function pickBestDeclaredVisibleMatch(matches) {
  matches = Array.isArray(matches) ? matches : [];
  if (!matches.length) return null;

  let best = null;
  let bestScore = Infinity;

  matches.forEach(function (item) {
    const el = item && item.el;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const top = rect.top;

    let score;
    if (top >= -20 && top <= 220) {
      score = Math.abs(top);
    } else {
      score = Math.abs(top) + 500;
    }

    if (score < bestScore) {
      bestScore = score;
      best = item;
    }
  });

  return best || matches[0] || null;
}

function getBestVisibleDeclaredSlideGlobal() {
  const visibleHeadings = getVisibleHeadingsGlobal();
  const declared = getDeclaredSlides();

  const matches = [];

  visibleHeadings.forEach(function (h) {
    const txt = normalizeSpace(h.textContent || "");

    for (let i = 0; i < declared.length; i++) {
      const declTitle = normalizeSpace(declared[i] && declared[i].t || "");
      if (declTitle && txt === declTitle) {
        matches.push({
          h: declared[i].h,
          t: declared[i].t,
          el: h
        });
        break;
      }
    }
  });

  return pickBestDeclaredVisibleMatch(matches);
}


function findVisibleHeadingForExpectedHash(expectedHash) {
  const decl = getDeclaredSlideByHash(expectedHash);
  const wanted = normalizeSpace(decl && decl.t || "");

  const headings = getVisibleHeadingsGlobal();
  if (!headings.length) return null;

  if (!wanted) {
    return pickBestVisibleHeading(headings);
  }

  const exact = headings.filter(function (h) {
    return normalizeSpace(h.textContent || "") === wanted;
  });

  if (!exact.length) return null;
  return pickBestVisibleHeading(exact);
}


function getSlideRootForHeading(heading) {
  if (!heading) return getBaseContentHost() || document.body;

  const nearestContent = findNearestVisibleContentAncestor(heading);
  let node = nearestContent || heading.parentElement || document.body;
  let best = node;

  while (node && node instanceof Element && node !== document.body) {
    const visibleHeadings = getVisibleHeadingsFromRoot(node);
    const containsTargetHeading = visibleHeadings.indexOf(heading) >= 0;

    const visibleLearnerFields = Array.from(
      node.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")
    ).filter(function (el) {
      return isLearnerFieldCandidate(el) && isRenderedElement(el);
    });

    const visibleQuizButtons = Array.from(
      node.querySelectorAll(".lia-quiz__check, .lia-quiz__resolve")
    ).filter(function (btn) {
      return isRenderedElement(btn);
    });

    if (
      containsTargetHeading &&
      (
        visibleHeadings.length === 1 ||
        visibleLearnerFields.length > 0 ||
        visibleQuizButtons.length > 0
      )
    ) {
      best = node;
    }

    node = node.parentElement;
  }

  return best || nearestContent || getBaseContentHost() || document.body;
}



function getRenderableHostForExpectedHash(expectedHash) {
  if (!document.body.classList.contains("lia-snapshot-mode")) {
    return getContentHost() || document.body;
  }

  const heading = findVisibleHeadingForExpectedHash(expectedHash);
  if (!heading) return null;

  return getSlideRootForHeading(heading);
}

function getRenderableDescriptorForExpectedHash(expectedHash) {
  const decl = getDeclaredSlideByHash(expectedHash);
  const expectedTitle = normalizeSpace(decl && decl.t || "");
  const heading = findVisibleHeadingForExpectedHash(expectedHash);
  const host = heading ? getSlideRootForHeading(heading) : null;

  if (!host) return null;

  const desc = buildDescriptorFromRoot(host, expectedHash);
  if (!desc) return null;

  desc._expectedTitle = expectedTitle;
  desc._heading = normalizeSpace(heading && heading.textContent || "");
  return desc;
}


function getCurrentSlideTextSample() {
  const host = getContentHost();
  return getTextSampleFromRoot(host);
}

  function getVisibleDomDescriptor() {
    return {
      t: getCurrentSlideTitle(),
      fc: getCurrentSlideLearnerFields().length,
      qc: getCurrentSlideQuizzes().length,
      x: getCurrentSlideTextSample()
    };
  }

  function getCurrentSlideDescriptor() {
    const d = getVisibleDomDescriptor();
    return {
      h: getCurrentHash(),
      t: d.t,
      fc: d.fc,
      qc: d.qc,
      x: d.x
    };
  }

  function getEventBoundContext(target) {
    const fields = [];
    const quizzes = [];

    if (!(target instanceof Element)) {
      return { fields: fields, quizzes: quizzes };
    }

    const directField = target.closest(
      "input, textarea, select, [contenteditable='true'], [role='textbox']"
    );

    if (directField && isLearnerFieldCandidate(directField)) {
      fields.push(directField);
    }

    const explicitQuiz = target.closest(".lia-quiz");
    if (explicitQuiz) {
      quizzes.push(explicitQuiz);
      getFieldElementsFromRoot(explicitQuiz).forEach(function (el) {
        fields.push(el);
      });
    }

    const quizBtn = target.closest(".lia-quiz__check, .lia-quiz__resolve");
    if (quizBtn) {
      const btnQuizRoot = getQuizRootFromInner(quizBtn);
      if (btnQuizRoot) {
        quizzes.push(btnQuizRoot);
        getFieldElementsFromRoot(btnQuizRoot).forEach(function (el) {
          fields.push(el);
        });
      }
    }

    getLocalTaskContainers(target).forEach(function (container) {
      getFieldElementsFromRoot(container).forEach(function (el) {
        fields.push(el);
      });

      collectQuizRootsFromRoot(container).forEach(function (quiz) {
        quizzes.push(quiz);
      });
    });

    return {
      fields: uniqueElements(fields),
      quizzes: uniqueElements(quizzes).filter(hasRenderedSelfOrDescendant)
    };
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

  function parseDeclaredSlidesFromSource(text) {
    const src = stripLeadingHeaderComment(text);
    const lines = src.split(/\r?\n/);

    const out = [];
    let inFence = false;
    let fenceToken = "";

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

      const m = line.match(/^#\s+(.+?)\s*$/);
      if (m) {
        out.push({
          h: "#" + (out.length + 1),
          t: normalizeSpace(m[1])
        });
      }
    }

    return out;
  }

  async function ensureDeclaredSlides() {
    if (declaredSlidesCache && declaredSlidesCache.length) {
      return declaredSlidesCache.slice().sort(hashSort);
    }

    const courseUrl = stripSubmissionFromCourseUrl(getCourseUrlFromViewerUrl());
    if (!courseUrl) {
      declaredSlidesCache = [{
        h: "#1",
        t: getCurrentSlideTitle() || ""
      }];
      return declaredSlidesCache.slice();
    }

    const resp = await fetch(courseUrl, { cache: "no-store" });
    if (!resp.ok) {
      throw new Error("Kursquelle konnte nicht geladen werden (" + resp.status + ").");
    }

    const text = await resp.text();
    const parsed = parseDeclaredSlidesFromSource(text);

    declaredSlidesCache = parsed.length
      ? parsed
      : [{
          h: "#1",
          t: getCurrentSlideTitle() || ""
        }];

    declaredSlidesCache = declaredSlidesCache.slice().sort(hashSort);
    return declaredSlidesCache.slice();
  }

  function getDeclaredSlides() {
    if (snapshotPayload && Array.isArray(snapshotPayload.s) && snapshotPayload.s.length) {
      return snapshotPayload.s.map(function (slide, i) {
        return {
          h: slide.h || ("#" + (i + 1)),
          t: slide.t || ""
        };
      }).sort(hashSort);
    }

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

  function isUnvisitedTarget(hash) {
    const slide = getSnapshotSlideForHash(hash);
    return !!(slide && slide.u);
  }

  function isProvisionalTarget(hash) {
    const slide = getSnapshotSlideForHash(hash);
    return !!(slide && slide.p);
  }

  function isCurrentlyOnUnvisitedPlaceholder() {
    return !!unvisitedPlaceholderHash;
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
        host.setAttribute("data-freeze-loading", "1");
      }
      overlay.style.display = "block";
      placeholder.style.display = "none";
      return;
    }

    if (unvisitedPlaceholderHash) {
      const decl = getDeclaredSlideByHash(unvisitedPlaceholderHash);
      const title = normalizeSpace(decl && decl.t || "");
      const name = getDisplayName();

      if (host) {
        host.style.opacity = "0";
        host.style.pointerEvents = "none";
        host.setAttribute("data-freeze-unvisited", "1");
      }

      overlay.style.display = "none";
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
      host.removeAttribute("data-freeze-loading");
      host.removeAttribute("data-freeze-unvisited");
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
  // Feld-/Quiz-Zustand
  // =========================================================

  function serializeField(el) {
    const editable = isEditableTextbox(el);

    return [
      editable
        ? String(el.textContent || "")
        : ("value" in el ? String(el.value || "") : ""),
      !!el.checked ? 1 : 0,
      typeof el.selectedIndex === "number" ? el.selectedIndex : -1
    ];
  }

  function applyFieldState(el, state) {
    if (!el || !state) return;

    const value = state[0] || "";
    const checked = !!state[1];
    const selectedIndex = typeof state[2] === "number" ? state[2] : -1;

    const tag = (el.tagName || "").toLowerCase();
    const type = (el.type || "").toLowerCase();
    const editable = isEditableTextbox(el);

    if (editable) {
      el.textContent = value;
      try { el.setAttribute("contenteditable", "false"); } catch (e) {}
    }

    if (
      tag === "textarea" || tag === "select" ||
      type === "text" || type === "number" || type === "email" ||
      type === "search" || type === "tel" || type === "url" || type === "password"
    ) {
      el.value = value;
      if (tag === "textarea") {
        el.textContent = value;
      }
    }

    if (type === "checkbox" || type === "radio") {
      el.checked = checked;
    }

    if (tag === "select" && selectedIndex >= 0) {
      el.selectedIndex = selectedIndex;
      Array.from(el.options || []).forEach(function (opt, idx) {
        if (idx === selectedIndex) {
          opt.setAttribute("selected", "selected");
        } else {
          opt.removeAttribute("selected");
        }
      });
    }

    try { el.disabled = true; } catch (e) {}
    try { el.readOnly = true; } catch (e) {}
  }

  function getButtonLabel(el) {
    if (!el) return "";
    const tag = (el.tagName || "").toLowerCase();
    return tag === "input" ? String(el.value || "") : String(el.textContent || "");
  }

  function setButtonLabel(el, txt) {
    if (!el) return;
    const tag = (el.tagName || "").toLowerCase();
    if (tag === "input") {
      el.value = txt;
    } else {
      el.textContent = txt;
    }
  }

  function getCheckCountFromButton(btn) {
    if (!btn) return 0;
    const txt = getButtonLabel(btn);
    const m = txt.match(/(\d+)\s*$/);
    return m ? Number(m[1]) : 0;
  }

  function detectQuizState(quiz) {
    const cls = String(quiz.className || "");
    if (/\bsolved\b/.test(cls)) return "s";
    if (/\bresolved\b/.test(cls)) return "r";
    return "o";
  }

  function detectFeedbackCode(feedback) {
    if (!feedback) return "";
    const cls = String(feedback.className || "");
    if (/\btext-success\b/.test(cls)) return "s";
    if (/\btext-error\b/.test(cls)) return "e";
    if (/\btext-disabled\b/.test(cls)) return "d";
    return "";
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

function resetQuizFeedbackClasses(el) {
  if (!el) return;
  el.classList.remove("text-success", "text-error", "text-disabled");
}

function applyQuizRootStateClasses(quiz, stateCode) {
  if (!quiz) return;

  quiz.classList.remove("solved", "resolved");

  if (stateCode === "s") {
    quiz.classList.add("solved");
  } else if (stateCode === "r") {
    quiz.classList.add("resolved");
  }
}

function commitQuizUiState(quiz, state) {
  if (!quiz) return;
  state = state || {};

  const feedback = ensureQuizFeedbackElement(quiz);
  const answers = quiz.querySelector(".lia-quiz__answers");

  applyQuizRootStateClasses(quiz, state.s);

  if (feedback) {
    resetQuizFeedbackClasses(feedback);

    const feedbackCode = deriveQuizFeedbackCode(state);
    if (feedbackCode === "s") feedback.classList.add("text-success");
    if (feedbackCode === "e") feedback.classList.add("text-error");
    if (feedbackCode === "d") feedback.classList.add("text-disabled");

    const derivedFeedbackText = deriveQuizFeedbackText(quiz, state);

    if (typeof state.fh === "string" && state.fh) {
      feedback.innerHTML = state.fh;
    } else if (derivedFeedbackText) {
      feedback.textContent = derivedFeedbackText;
    } else if (typeof state.ft === "string" && state.ft) {
      feedback.textContent = state.ft;
    }

    if (state.fv || state.fh || state.ft || derivedFeedbackText || feedbackCode) {
      revealQuizBlock(feedback);
    }
  }

  if (answers) {
    if (typeof state.ah === "string" && state.ah) {
      answers.innerHTML = state.ah;
    } else if (typeof state.a === "string" && state.a) {
      answers.textContent = state.a;
    }

    if (state.av || state.ah || state.a) {
      revealQuizBlock(answers);
    }
  }
}



function scheduleQuizUiStabilization(quiz, state) {
  [0, 60, 180, 360].forEach(function (delay) {
    setTimeout(function () {
      if (!quiz || !quiz.isConnected) return;
      commitQuizUiState(quiz, state);
    }, delay);
  });

  try {
    requestAnimationFrame(function () {
      if (!quiz || !quiz.isConnected) return;
      commitQuizUiState(quiz, state);

      requestAnimationFrame(function () {
        if (!quiz || !quiz.isConnected) return;
        commitQuizUiState(quiz, state);
      });
    });
  } catch (e) {}
}


function ensureQuizFeedbackElement(quiz) {
  if (!quiz) return null;

  let feedback = quiz.querySelector(".lia-quiz__feedback");
  if (feedback) return feedback;

  feedback = document.createElement("div");
  feedback.className = "lia-quiz__feedback";
  quiz.appendChild(feedback);
  return feedback;
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

function deriveQuizMessageKind(state) {
  state = state || {};

  if (state.mk) return state.mk;
  if (state.s === "s") return "solved";
  if (state.s === "r") return "resolved";
  if (state.f === "e") return "failed";
  if (state.fv) return "failed";

  return "";
}

function deriveQuizFeedbackText(quiz, state) {
  state = state || {};

  if (typeof state.ft === "string" && state.ft) return state.ft;

  const kind = deriveQuizMessageKind(state);

  if (kind === "solved") {
    return state.ts || readQuizDataText(quiz, "data-text-solved");
  }

  if (kind === "resolved") {
    return state.tr || readQuizDataText(quiz, "data-text-resolved");
  }

  if (kind === "failed") {
    return state.tf || readQuizDataText(quiz, "data-text-failed");
  }

  return "";
}

function deriveQuizFeedbackCode(state) {
  state = state || {};

  if (state.s === "s") return "s";
  if (state.s === "r") return "d";
  if (state.f) return state.f;
  if (state.fv) return "e";

  return "";
}


function captureQuizState(quiz) {
  const checkBtn = quiz.querySelector(".lia-quiz__check");
  const resolveBtn = quiz.querySelector(".lia-quiz__resolve");
  const feedback = quiz.querySelector(".lia-quiz__feedback");
  const answers = quiz.querySelector(".lia-quiz__answers");

  const checkDisabled = checkBtn && checkBtn.disabled ? 1 : 0;
  const resolveDisabled = resolveBtn && resolveBtn.disabled ? 2 : 0;
  const disabledMask = checkDisabled | resolveDisabled;
  const checkCount = getCheckCountFromButton(checkBtn);

  const feedbackText = feedback ? normalizeSpace(feedback.textContent || "") : "";
  const feedbackHtml = feedback ? String(feedback.innerHTML || "") : "";
  const feedbackVisible = !!(feedback && (isRenderedElement(feedback) || feedbackText));

  const answerText = answers ? normalizeSpace(answers.textContent || "") : "";
  const answerHtml = answers ? String(answers.innerHTML || "") : "";
  const answerVisible = !!(answers && (isRenderedElement(answers) || answerText));

  const solvedText = readQuizDataText(quiz, "data-text-solved");
  const failedText = readQuizDataText(quiz, "data-text-failed");
  const resolvedText = readQuizDataText(quiz, "data-text-resolved");

  let messageKind = "";
  const stateCode = detectQuizState(quiz);
  const feedbackCode = detectFeedbackCode(feedback);

  if (stateCode === "s") {
    messageKind = "solved";
  } else if (stateCode === "r") {
    messageKind = "resolved";
  } else if (feedbackVisible || feedbackCode === "e") {
    messageKind = "failed";
  }

  const out = {
    k: getQuizStateKey(quiz),
    s: stateCode,
    f: feedbackCode
  };

  if (checkCount > 0) out.c = checkCount;
  if (disabledMask) out.d = disabledMask;

  if (feedbackText) out.ft = feedbackText;
  if (feedbackHtml) out.fh = feedbackHtml;
  if (feedbackVisible) out.fv = 1;

  if (answerText) out.a = answerText;
  if (answerHtml) out.ah = answerHtml;
  if (answerVisible) out.av = 1;

  if (solvedText) out.ts = solvedText;
  if (failedText) out.tf = failedText;
  if (resolvedText) out.tr = resolvedText;
  if (messageKind) out.mk = messageKind;

  return out;
}



function applyQuizState(quiz, state) {
  if (!quiz) return;
  state = state || {};

  const checkBtn = quiz.querySelector(".lia-quiz__check");
  const resolveBtn = quiz.querySelector(".lia-quiz__resolve");

  applyQuizRootStateClasses(quiz, state.s);

  if (checkBtn) {
    const count = Number(state.c || 0);
    if (count > 0) {
      setButtonLabel(checkBtn, "Prüfen " + count);
    }
    checkBtn.disabled = true;
    try { checkBtn.setAttribute("tabindex", "-1"); } catch (e) {}
  }

  if (resolveBtn) {
    resolveBtn.disabled = true;
    try { resolveBtn.setAttribute("tabindex", "-1"); } catch (e) {}
  }

  commitQuizUiState(quiz, state);
  scheduleQuizUiStabilization(quiz, state);
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
      setButtonLabel(btnEl, "Abgabe eingefroren");
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

      if (opts.provisional) {
        noteEl.innerHTML = "Diese Folie wurde <strong>besucht</strong>, aber ihr exakter Zustand konnte beim clientseitigen Freeze nicht vollständig serialisiert werden.";
      } else {
        noteEl.innerHTML = "Dies ist ein <strong>eingefrorener Abgabestand</strong>. Änderungen sind gesperrt, Navigation läuft nur über die Freeze-Leiste oben.";
      }
    }
  }

  // =========================================================
  // Live-Capture
  // =========================================================

  function buildVisibleStateForHash(forcedHash, opts) {
    opts = opts || {};
    const hash = cleanHashValue(forcedHash || "");
    if (!hash || !/^#\d+$/.test(hash)) return null;

    const decl = getDeclaredSlideByHash(hash);
    const visibleTitle = getCurrentSlideTitle();

    const declaredTitle = normalizeSpace(decl && decl.t || "");
    const actualVisibleTitle = normalizeSpace(visibleTitle || "");

    const titleMismatch =
      declaredTitle &&
      actualVisibleTitle &&
      actualVisibleTitle !== declaredTitle;

    if ((!opts.allowTitleMismatch && titleMismatch) || (opts.requireDeclaredTitleMatch && titleMismatch)) {
      log(
        "live-skip:title-mismatch",
        hash,
        "visible=" + JSON.stringify(visibleTitle),
        "declared=" + JSON.stringify(decl && decl.t || "")
      );
      return null;
    }

    let fields = getCurrentSlideLearnerFields();
    let quizzes = getCurrentSlideQuizzes();

    if (opts.eventTarget) {
      const ctx = getEventBoundContext(opts.eventTarget);
      fields = uniqueElements(fields.concat(ctx.fields || []));
      quizzes = uniqueElements(quizzes.concat(ctx.quizzes || []));
    }

    const state = {
      h: hash,
      t: (decl && decl.t) ? decl.t : (visibleTitle || ""),
      fc: fields.length,
      qc: quizzes.length,
      x: getCurrentSlideTextSample(),
      f: fields.map(serializeField),
      q: quizzes.map(captureQuizState),
      n: captureAdminState()
    };

    if (!descriptorLooksMaterialized(state)) return null;
    return state;
  }

  function captureVisibleStateForHash(forcedHash, source, opts) {
    if (document.body.classList.contains("lia-snapshot-mode")) return false;

    const rawState = buildVisibleStateForHash(forcedHash, opts);
    if (!rawState) return false;

    const existing = liveSlidesByHash[rawState.h];
    const mergedState = mergeLiveStates(existing, rawState);

    if (!shouldReplaceLiveState(existing, mergedState)) {
      log(
        "live-skip:no-change",
        mergedState.h,
        source || "",
        "old=" + stateScore(existing),
        "new=" + stateScore(mergedState)
      );
      return false;
    }

    liveSlidesByHash[mergedState.h] = mergedState;
    liveVisitedHashes[mergedState.h] = 1;

    log(
      "live-capture",
      mergedState.h,
      mergedState.t,
      "fc=" + mergedState.fc,
      "qc=" + mergedState.qc,
      source || ""
    );

    return true;
  }

  function markProvisionalVisited(hash) {
    const h = cleanHashValue(hash || "");
    if (!/^#\d+$/.test(h)) return;

    if (liveSlidesByHash[h] && !liveSlidesByHash[h].u && !liveSlidesByHash[h].p) {
      return;
    }

    const decl = getDeclaredSlideByHash(h);

    liveSlidesByHash[h] = {
      h: h,
      t: decl && decl.t ? decl.t : "",
      p: 1
    };
    liveVisitedHashes[h] = 1;

    log("live-provisional", h, JSON.stringify((decl && decl.t) || ""));
  }

  function rememberCurrentSlideState() {
    return captureVisibleStateForHash(
      liveRouteCurrentHash || getCurrentHash(),
      "live-current",
      { allowTitleMismatch: true }
    );
  }

  function captureIfStillOnHash(hash, source, opts) {
    if (document.body.classList.contains("lia-snapshot-mode")) return false;

    const targetHash = cleanHashValue(hash || "");
    const currentHash = cleanHashValue(getCurrentHash());

    if (String(currentHash) !== String(targetHash)) {
      return false;
    }

    const ok = captureVisibleStateForHash(targetHash, source || "", opts);
    if (ok) {
      log("live-capture-confirmed", targetHash, source || "");
    }
    return ok;
  }

  function scheduleCaptureForHash(hash, delays, source, opts) {
    const targetHash = cleanHashValue(hash || "");
    const forwardedOpts = opts || {};

    (delays || []).forEach(function (delay) {
      setTimeout(function () {
        captureIfStillOnHash(
          targetHash,
          (source || "route") + "@" + delay,
          forwardedOpts
        );
      }, delay);
    });
  }

  async function waitForLiveRenderableHash(expectedHash, source, timeoutMs, token) {
    const wanted = cleanHashValue(expectedHash || "");
    const timeout = timeoutMs || 2200;
    const started = Date.now();

    log("live-wait:start", wanted, source || "");

    while (Date.now() - started < timeout) {
      if (token !== liveWaitToken) {
        log("live-wait:abort", wanted, source || "", "token=" + token, "current=" + liveWaitToken);
        return false;
      }

      if (document.body.classList.contains("lia-snapshot-mode")) return false;

      const current = cleanHashValue(getCurrentHash());
      if (current !== wanted) {
        await sleep(60);
        continue;
      }

      const ok = captureVisibleStateForHash(wanted, "live-wait-ready:" + (source || ""), {});

      if (ok) {
        log("live-wait:ready", wanted);
        return true;
      }

      const desc = getCurrentSlideDescriptor();
      const decl = getDeclaredSlideByHash(wanted);
      const titleOk =
        !decl || !decl.t || !desc.t ||
        normalizeSpace(decl.t) === normalizeSpace(desc.t);

      if (current === wanted && descriptorLooksMaterialized(desc) && titleOk) {
        log("live-wait:ready-stable", wanted);
        return true;
      }

      await sleep(60);
    }

    warn("live-wait:timeout", wanted, source || "");
    return false;
  }

  function buildPayloadFromLiveStates() {
    captureVisibleStateForHash(
      liveRouteCurrentHash || getCurrentHash(),
      "payload-final",
      { allowTitleMismatch: true }
    );

    const declared = getDeclaredSlides();

    const slides = declared.map(function (decl) {
      const s = liveSlidesByHash[decl.h];

      if (s) {
        if (s.p) {
          return {
            h: s.h,
            t: s.t || decl.t || "",
            p: 1
          };
        }
        return s;
      }

      return {
        h: decl.h,
        t: decl.t || "",
        u: 1
      };
    }).sort(hashSort);

    log("payload-build", slides.map(function (s) {
      return s.h + ":" + (s.u ? "u" : (s.p ? "p" : "v"));
    }).join(", "));

    return {
      v: PAYLOAD_VERSION,
      sh: getCurrentHash(),
      n: getDisplayName(),
      s: slides
    };
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
  // Native LiaScript Navigation
  // =========================================================

  function getElementSignal(el) {
    if (!el) return "";
    return normalizeSpace([
      el.id || "",
      el.className || "",
      el.getAttribute && el.getAttribute("aria-label") || "",
      el.getAttribute && el.getAttribute("title") || "",
      el.getAttribute && el.getAttribute("rel") || "",
      el.textContent || "",
      el.value || ""
    ].join(" ")).toLowerCase();
  }

  function scoreNativeNavCandidate(el, dir) {
    if (!el) return -Infinity;
    if (!isRenderedElement(el)) return -Infinity;
    if (el.closest("#lia-freeze-bar")) return -Infinity;
    if (el.closest(".lia-submit-box")) return -Infinity;
    if (el.disabled) return -Infinity;

    const sig = getElementSignal(el);
    let score = 0;

    if (dir > 0) {
      if (/\b(next|weiter|forward|nächste|naechste)\b/.test(sig)) score += 12;
      if (/→|›|»/.test(sig)) score += 10;
      if (/\b(right|rechts)\b/.test(sig)) score += 3;
    } else {
      if (/\b(prev|previous|zurück|zurueck|back|vorherige|vorige)\b/.test(sig)) score += 12;
      if (/←|‹|«/.test(sig)) score += 10;
      if (/\b(left|links)\b/.test(sig)) score += 3;
    }

    return score;
  }

  function findNativeNavButton(dir) {
    const candidates = Array.from(document.querySelectorAll(
      "button, a, [role='button'], summary, input[type='button'], input[type='submit']"
    ));

    let best = null;
    let bestScore = -Infinity;

    candidates.forEach(function (el) {
      const score = scoreNativeNavCandidate(el, dir);
      if (score > bestScore) {
        best = el;
        bestScore = score;
      }
    });

    if (best && bestScore > 0) {
      log(
        "native-nav:found",
        dir > 0 ? "next" : "prev",
        "score=" + bestScore,
        JSON.stringify(getElementSignal(best))
      );
      return best;
    }

    warn("native-nav:not-found", dir > 0 ? "next" : "prev");
    return null;
  }

  function withInternalNativeNav(fn) {
    internalNativeNav = true;
    try {
      fn();
    } finally {
      setTimeout(function () {
        internalNativeNav = false;
      }, 300);
    }
  }

  function triggerNativeRelativeNav(dir) {
    const btn = findNativeNavButton(dir);
    if (!btn) return false;

    withInternalNativeNav(function () {
      if (typeof btn.click === "function") {
        btn.click();
      } else {
        btn.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      }
    });

    return true;
  }

  // =========================================================
  // Freeze / Apply
  // =========================================================

  function ensureSnapshotModeClasses() {
    if (!document.body) return;
    document.body.classList.add("lia-course-frozen");
    document.body.classList.add("lia-snapshot-mode");

    const host = getContentHost();
    if (host) host.classList.add("lia-frozen-scope");
  }

  function getFreezeBar() {
    let bar = document.getElementById("lia-freeze-bar");

    if (!bar) {
      bar = document.createElement("div");
      bar.id = "lia-freeze-bar";
      bar.innerHTML = [
        '<div id="lia-freeze-bar-inner" style="display:grid;grid-template-columns:auto 1fr auto;gap:.8rem;align-items:center;">',
          '<div id="lia-freeze-nav" style="display:flex;gap:.55rem;align-items:center;">',
            '<button id="lia-freeze-prev" type="button" aria-label="Vorherige Folie">←</button>',
            '<button id="lia-freeze-next" type="button" aria-label="Nächste Folie">→</button>',
          '</div>',
          '<div id="lia-freeze-center" style="min-width:0;">',
            '<div id="lia-freeze-head" style="font-weight:800;line-height:1.2;"></div>',
            '<div id="lia-freeze-sub" style="font-size:.92rem;opacity:.95;line-height:1.25;"></div>',
          '</div>',
          '<div id="lia-freeze-meta" style="text-align:right;font-weight:700;white-space:nowrap;"></div>',
        '</div>'
      ].join("");

      document.body.appendChild(bar);

      const prevBtn = bar.querySelector("#lia-freeze-prev");
      const nextBtn = bar.querySelector("#lia-freeze-next");

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
    }

    styleFreezeBar(bar);
    return bar;
  }

  function styleFreezeBar(bar) {
    if (!bar) return;

    const maxWidth = Math.min(1100, Math.max(280, window.innerWidth - 16));

    bar.style.position = "fixed";
    bar.style.top = "0";
    bar.style.left = "50%";
    bar.style.transform = "translateX(-50%)";
    bar.style.width = maxWidth + "px";
    bar.style.maxWidth = "calc(100vw - 16px)";
    bar.style.boxSizing = "border-box";
    bar.style.zIndex = "99999";
    bar.style.padding = ".72rem .9rem";
    bar.style.borderRadius = "0 0 14px 14px";
    bar.style.background = "rgb(var(--lia-submit-bg-rgb))";
    bar.style.color = "var(--lia-submit-fg)";
    bar.style.border = "1px solid var(--lia-submit-border-on-theme)";
    bar.style.boxShadow = "0 10px 26px rgba(0,0,0,.14)";
    bar.style.display = document.body.classList.contains("lia-snapshot-mode") ? "block" : "none";

    Array.from(bar.querySelectorAll("button")).forEach(function (btn) {
      btn.style.padding = ".48rem .72rem";
      btn.style.borderRadius = "10px";
      btn.style.cursor = "pointer";
      btn.style.fontWeight = "800";
      btn.style.fontSize = "1rem";
      btn.style.background = "var(--lia-submit-button-bg)";
      btn.style.color = "var(--lia-submit-fg)";
      btn.style.border = "1px solid var(--lia-submit-border-on-theme)";
    });

    const bodyPadding = Math.ceil((bar.offsetHeight || 62) + 10);
    document.body.style.paddingTop = bodyPadding + "px";
    document.documentElement.style.scrollPaddingTop = bodyPadding + "px";
  }

  function refreshFreezeBar() {
    const bar = document.getElementById("lia-freeze-bar");
    if (!bar) return;

    styleFreezeBar(bar);

    const slides = getDeclaredSlides();
    const hash = getCurrentHash();
    const idx = getDeclaredSlideIndex(hash);
    const slide = idx >= 0 ? slides[idx] : null;
    const snap = getSnapshotSlideForHash(hash);

    const head = bar.querySelector("#lia-freeze-head");
    const sub = bar.querySelector("#lia-freeze-sub");
    const meta = bar.querySelector("#lia-freeze-meta");
    const prevBtn = bar.querySelector("#lia-freeze-prev");
    const nextBtn = bar.querySelector("#lia-freeze-next");

    const name = getDisplayName();
    head.innerHTML = name
      ? (escapeHtml(name) + ": eingefrorener Abgabestand")
      : "Eingefrorener Abgabestand";

    if (slide && slide.t) {
      if (snap && snap.u) {
        sub.textContent = slide.t + " · unbesucht / gesperrt";
      } else if (snap && snap.p) {
        sub.textContent = slide.t + " · besucht / ohne exakten Snapshot";
      } else {
        sub.textContent = slide.t;
      }
    } else {
      sub.textContent = "Der Kurs ist nicht mehr veränderbar.";
    }

    if (idx >= 0) {
      meta.textContent = (idx + 1) + " / " + slides.length;
    } else {
      meta.textContent = "– / " + slides.length;
    }

    prevBtn.disabled = !(idx > 0);
    nextBtn.disabled = !(idx >= 0 && idx < slides.length - 1);
    prevBtn.style.opacity = prevBtn.disabled ? ".55" : "1";
    nextBtn.style.opacity = nextBtn.disabled ? ".55" : "1";
  }

  function scheduleRefreshFreezeBar(delay) {
    clearTimeout(freezeBarTimer);
    freezeBarTimer = setTimeout(function () {
      refreshFreezeBar();
    }, delay || 30);
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

  function getFrozenStartHash() {
    const current = getCurrentHash();
    if (/^#\d+$/.test(current)) return current;
    if (snapshotPayload && /^#\d+$/.test(snapshotPayload.sh || "")) return snapshotPayload.sh;
    return "#1";
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

      const tag = (el.tagName || "").toLowerCase();

      if (tag === "a") {
        el.setAttribute("tabindex", "-1");
        el.style.pointerEvents = "none";
        return;
      }

      try { el.disabled = true; } catch (e) {}
      try { el.readOnly = true; } catch (e) {}
      try { el.setAttribute("tabindex", "-1"); } catch (e) {}
      try { el.setAttribute("contenteditable", "false"); } catch (e) {}
    });

    getCurrentSlideQuizzes().forEach(function (quiz) {
      const checkBtn = quiz.querySelector(".lia-quiz__check");
      const resolveBtn = quiz.querySelector(".lia-quiz__resolve");
      if (checkBtn) checkBtn.disabled = true;
      if (resolveBtn) resolveBtn.disabled = true;
    });
  }

  function reinforceFrozenUi(opts) {
    opts = opts || {};
    ensureSnapshotModeClasses();
    getFreezeBar();
    refreshFreezeBar();
    applyAdminState(getDisplayName(), {
      preserveLinkValue: !freezeLinkValue,
      linkValue: freezeLinkValue || undefined,
      provisional: !!opts.provisional
    });
    lockCurrentSlideInteractiveState();
    syncFrozenScreens();
  }

function isRenderableForHash(expectedHash) {
  const currentHash = String(getCurrentHash() || "");
  if (currentHash !== String(expectedHash || "")) return false;

  if (isUnvisitedTarget(expectedHash)) return true;

  const desc = document.body.classList.contains("lia-snapshot-mode")
    ? getRenderableDescriptorForExpectedHash(expectedHash)
    : getCurrentSlideDescriptor();

  if (!desc) return false;
  if (!descriptorLooksMaterialized(desc)) return false;

  const decl = getDeclaredSlideByHash(expectedHash);
  const expectedTitle = normalizeSpace(decl && decl.t || "");
  const actualTitle = normalizeSpace(desc.t || "");

  if (expectedTitle && actualTitle && actualTitle !== expectedTitle) {
    return false;
  }

  return true;
}


function isFullyReadyForHash(expectedHash) {
  if (!isRenderableForHash(expectedHash)) return false;

  if (isUnvisitedTarget(expectedHash) || isProvisionalTarget(expectedHash)) {
    return true;
  }

  const desc = document.body.classList.contains("lia-snapshot-mode")
    ? getRenderableDescriptorForExpectedHash(expectedHash)
    : getCurrentSlideDescriptor();

  const snap = getSnapshotSlideForHash(expectedHash);

  if (!desc) return false;
  if (!snap || snap.u || snap.p) return true;

  if (typeof snap.fc === "number" && Number(desc.fc || 0) !== Number(snap.fc || 0)) return false;
  if (typeof snap.qc === "number" && Number(desc.qc || 0) !== Number(snap.qc || 0)) return false;

  return true;
}


  async function waitForFrozenRoute(expectedHash, runToken, timeoutMs) {
    if (isUnvisitedTarget(expectedHash)) {
      return String(getCurrentHash() || "") === String(expectedHash || "");
    }

    const timeout = timeoutMs || 8000;
    const start = Date.now();
    let stableSig = "";
    let stableCount = 0;
    let lastNudgeAt = 0;
    let lastNudgeKey = "";

    log("wait:start", expectedHash, "token=" + runToken);

    while (Date.now() - start < timeout) {
      if (runToken !== applyRunToken) {
        log("wait:abort-token", expectedHash, "token=" + runToken, "current=" + applyRunToken);
        return false;
      }

      sanitizeMalformedSubmissionHash();

      const currentHash = getCurrentHash();
      const desc = getRenderableDescriptorForExpectedHash(expectedHash);
      const sig = desc ? descriptorSignature(desc) : "";

      const visibleDeclared = getBestVisibleDeclaredSlideGlobal();

      log(
        "wait:tick",
        "expected=" + expectedHash,
        "current=" + currentHash,
        "title=" + JSON.stringify(desc && desc.t || ""),
        "fc=" + (desc ? desc.fc : -1),
        "qc=" + (desc ? desc.qc : -1),
        "materialized=" + (desc && descriptorLooksMaterialized(desc) ? 1 : 0),
        "heading=" + JSON.stringify(desc && desc._heading || ""),
        "visibleHeadings=" + JSON.stringify(getVisibleHeadingsGlobal().map(function (h) {
          return normalizeSpace(h.textContent || "");
        })),
        "visibleDeclared=" + JSON.stringify(visibleDeclared ? visibleDeclared.h + ":" + visibleDeclared.t : "")
      );

      if (String(currentHash) !== String(expectedHash)) {
        stableSig = "";
        stableCount = 0;
        await sleep(120);
        continue;
      }

      if ((!desc || !isRenderableForHash(expectedHash)) && (freezeBooting || frozenNavInFlight)) {
        const visibleDeclaredNow = getBestVisibleDeclaredSlideGlobal();
        const targetIdx = getDeclaredSlideIndex(expectedHash);
        const visibleIdx = visibleDeclaredNow ? getDeclaredSlideIndex(visibleDeclaredNow.h) : -1;

        if (targetIdx >= 0 && visibleIdx >= 0 && visibleIdx !== targetIdx) {
          const dir = targetIdx > visibleIdx ? 1 : -1;
          const nudgeKey = expectedHash + "|" + visibleDeclaredNow.h + "|" + dir;
          const now = Date.now();

          if ((now - lastNudgeAt > 650) && (lastNudgeKey !== nudgeKey || now - lastNudgeAt > 1600)) {
            log(
              "wait:nudge-native",
              "expected=" + expectedHash,
              "current=" + currentHash,
              "visible=" + visibleDeclaredNow.h,
              "dir=" + dir
            );

            const nudged = triggerNativeRelativeNav(dir);

            if (nudged) {
              lastNudgeAt = now;
              lastNudgeKey = nudgeKey;
            }
          }
        }
      }

      if (!desc || !isRenderableForHash(expectedHash)) {
        stableSig = "";
        stableCount = 0;
        await sleep(120);
        continue;
      }

      if (sig === stableSig) {
        stableCount += 1;
      } else {
        stableSig = sig;
        stableCount = 0;
      }

      if (stableCount >= 1 && isFullyReadyForHash(expectedHash)) {
        log("wait:ready", expectedHash, "sig=" + sig);
        return true;
      }

      await sleep(120);
    }

    warn("wait:timeout", expectedHash);
    return isRenderableForHash(expectedHash);
  }


  function reapplyStoredStateToHash(hash, slide) {
    if (!slide) return;
    if (!document.body.classList.contains("lia-snapshot-mode")) return;
    if (String(getCurrentHash() || "") !== String(hash || "")) return;

    const host = getRenderableHostForExpectedHash(hash) || getContentHost();
    if (!host) return;

    const liveFields = getFieldElementsFromRoot(host);
    const maxFields = Math.min(
      liveFields.length,
      Array.isArray(slide.f) ? slide.f.length : 0
    );

    for (let i = 0; i < maxFields; i++) {
      applyFieldState(liveFields[i], slide.f[i]);
    }

    applyStoredQuizStatesToHost(host, slide.q);
    lockCurrentSlideInteractiveState();
  }

  function scheduleStoredStateReapply(hash, slide, delays) {
    (delays || []).forEach(function (delay) {
      setTimeout(function () {
        reapplyStoredStateToHash(hash, slide);
      }, delay);
    });
  }


  function applySnapshotForHash(expectedHash) {
    if (!snapshotPayload) return false;

    const currentHash = String(expectedHash || getCurrentHash() || "");
    const slide = getSnapshotSlideForHash(currentHash);

    if (slide && slide.u) {
      hideUnvisitedPlaceholder();
      showUnvisitedPlaceholder(currentHash);
      freezeApplying = false;
      freezeBooting = false;
      frozenNavInFlight = false;
      setFreezeLoading(false, "apply-unvisited:" + currentHash);
      reinforceFrozenUi();
      return true;
    }

    if (!isRenderableForHash(currentHash)) {
      warn("apply:skip-not-renderable", currentHash);
      return false;
    }

    freezeApplying = true;
    hideUnvisitedPlaceholder();

    const descBefore = document.body.classList.contains("lia-snapshot-mode")
      ? (getRenderableDescriptorForExpectedHash(currentHash) || getCurrentSlideDescriptor())
      : getCurrentSlideDescriptor();
    log(
      "apply:start",
      currentHash,
      "title=" + JSON.stringify(descBefore.t || ""),
      "fc=" + descBefore.fc,
      "qc=" + descBefore.qc,
      "unvisited=" + (slide && slide.u ? 1 : 0),
      "provisional=" + (slide && slide.p ? 1 : 0)
    );

    ensureSnapshotModeClasses();

    if (slide && slide.p) {
      lastAppliedVisitedHash = currentHash;
      reinforceFrozenUi({ provisional: true });
      freezeApplying = false;
      freezeBooting = false;
      frozenNavInFlight = false;
      setFreezeLoading(false, "apply-provisional:" + currentHash);
      return true;
    }

    if (slide && !slide.u) {
      const renderHost = document.body.classList.contains("lia-snapshot-mode")
        ? getRenderableHostForExpectedHash(currentHash)
        : getContentHost();

      const liveFields = renderHost ? getFieldElementsFromRoot(renderHost) : [];
      const liveQuizzes = renderHost ? collectQuizRootsFromRoot(renderHost) : [];

      const maxFields = Math.min(liveFields.length, Array.isArray(slide.f) ? slide.f.length : 0);
      for (let i = 0; i < maxFields; i++) {
        applyFieldState(liveFields[i], slide.f[i]);
      }
      
      applyStoredQuizStatesToHost(renderHost, slide.q);
      
      scheduleStoredStateReapply(
        currentHash,
        slide,
        [80, 220, 420, 900, 1600, 2400]
      );
    }

    lastAppliedVisitedHash = currentHash;
    reinforceFrozenUi();
    freezeApplying = false;
    freezeBooting = false;
    frozenNavInFlight = false;
    setFreezeLoading(false, "apply-success:" + currentHash);

    const descAfter = document.body.classList.contains("lia-snapshot-mode")
      ? (getRenderableDescriptorForExpectedHash(currentHash) || getCurrentSlideDescriptor())
      : getCurrentSlideDescriptor();
    log(
      "apply:success",
      currentHash,
      "title=" + JSON.stringify(descAfter.t || ""),
      "fc=" + descAfter.fc,
      "qc=" + descAfter.qc
    );

    return true;
  }

  async function applySnapshotForCurrentRoute(runToken, expectedHash) {
    const ready = await waitForFrozenRoute(expectedHash, runToken, 8000);
    if (!ready) {
      setFreezeLoading(false, "apply-failed-ready:" + expectedHash);
      return;
    }
    if (runToken !== applyRunToken) return;
    if (!snapshotPayload) return;
    if (freezeApplying) return;

    const ok = applySnapshotForHash(expectedHash);
    if (!ok) {
      setFreezeLoading(false, "apply-failed:" + expectedHash);
      return;
    }

    scheduleRefreshFreezeBar(20);
  }

  function scheduleApplySnapshot(expectedHash, delay) {
    const hash = String(expectedHash || getCurrentHash() || "#1");
    currentFrozenTargetHash = hash;
    applyRunToken += 1;
    const runToken = applyRunToken;

    clearTimeout(applyTimer);
    applyTimer = setTimeout(function () {
      log("apply:schedule-fire", hash, "token=" + runToken);
      applySnapshotForCurrentRoute(runToken, hash);
    }, delay || 80);
  }

  function correctUnexpectedFrozenHash() {
    if (!snapshotPayload) return false;
    if (internalNativeNav) return false;
    if (isUnvisitedTarget(currentFrozenTargetHash || getCurrentHash())) return false;
    if (isCurrentlyOnUnvisitedPlaceholder()) return false;

    const current = String(getCurrentHash() || "");
    const target = String(currentFrozenTargetHash || getFrozenStartHash());

    if (!current || !target) return false;
    if (current === target) return false;
    if (ignoreNextRouteCorrection) return false;

    warn("route:unexpected-drift", "current=" + current, "target=" + target);

    ignoreNextRouteCorrection = true;
    setHashSilently(target);
    setTimeout(function () {
      ignoreNextRouteCorrection = false;
      scheduleApplySnapshot(target, 30);
    }, 0);

    return true;
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
      if (internalNativeNav) return;
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

      sanitizeMalformedSubmissionHash();
      ensureSnapshotModeClasses();
      scheduleRefreshFreezeBar(20);

      const current = cleanHashValue(ev && ev.detail && ev.detail.hash || getCurrentHash());
      const target = currentFrozenTargetHash || current;

      log(
        "freeze-route-handler",
        "source=" + (ev && ev.detail && ev.detail.source || "?"),
        "current=" + current,
        "target=" + target,
        "booting=" + (freezeBooting ? 1 : 0),
        "navInFlight=" + (frozenNavInFlight ? 1 : 0),
        "internalNativeNav=" + (internalNativeNav ? 1 : 0),
        "lastApplied=" + (lastAppliedVisitedHash || "")
      );

      if (isUnvisitedTarget(target)) {
        currentFrozenTargetHash = target;
        hideUnvisitedPlaceholder();
        showUnvisitedPlaceholder(target);
        frozenNavInFlight = false;
        freezeBooting = false;
        setFreezeLoading(false, "route-unvisited:" + target);
        reinforceFrozenUi();
        return;
      }

      hideUnvisitedPlaceholder();

      if (correctUnexpectedFrozenHash()) {
        return;
      }

      if (frozenNavInFlight && current === currentFrozenTargetHash) {
        log("freeze-route-handler:target-reached", current);
      }

      scheduleApplySnapshot(currentFrozenTargetHash || current, 90);
    });
  }

  function blockNativeFrozenInteractionEvent(e) {
    if (!document.body.classList.contains("lia-snapshot-mode")) return;
    if (internalNativeNav) return;
    if (isAllowedFreezeTarget(e.target)) return;

    const t = e.target;
    if (!(t instanceof Element)) return;

    const interactive = t.closest(
      "a, button, input, textarea, select, summary, [role='button'], .lia-quiz, label, [contenteditable='true'], [role='textbox']"
    );

    if (!interactive) return;

    e.preventDefault();
    e.stopPropagation();
    if (typeof e.stopImmediatePropagation === "function") {
      e.stopImmediatePropagation();
    }
  }

  function blockFrozenKeydown(e) {
    if (!document.body.classList.contains("lia-snapshot-mode")) return;
    if (internalNativeNav) return;

    if (isAllowedFreezeTarget(e.target)) {
      const lower = String(e.key || "").toLowerCase();
      if ((e.ctrlKey || e.metaKey) && (lower === "c" || lower === "a")) {
        return;
      }
      if (e.target && e.target.id === "lia-link") return;
      if (e.target && e.target.closest && e.target.closest("#lia-freeze-bar")) return;
    }

    const key = String(e.key || "");
    const blocked = {
      ArrowLeft: 1,
      ArrowRight: 1,
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

  function isAllowedFreezeTarget(target) {
    if (!target || !(target instanceof Element)) return false;

    if (target.closest("#lia-freeze-bar")) return true;
    if (target.id === "lia-link") return true;
    if (target.closest && target.closest("#lia-link")) return true;

    return false;
  }

  function goFrozenRelative(dir) {
    const slides = getDeclaredSlides();
    const idx = getDeclaredSlideIndex(getCurrentHash());
    if (idx < 0) return;

    const target = slides[idx + dir];
    if (!target) return;

    const wanted = String(target.h);
    const current = String(getCurrentHash());
    const targetUnvisited = isUnvisitedTarget(wanted);
    const currentPlaceholder = isCurrentlyOnUnvisitedPlaceholder();

    currentFrozenTargetHash = wanted;

    if (currentPlaceholder && !targetUnvisited) {
      restoreVisitedFromPlaceholder(wanted);
      return;
    }

    if (targetUnvisited) {
      log("frozen-nav:unvisited", "from=" + current, "to=" + wanted, "dir=" + dir);

      frozenNavInFlight = false;
      freezeBooting = false;
      hideUnvisitedPlaceholder();
      setFreezeLoading(false, "unvisited-switch");

      if (current !== wanted) {
        pushHashSilently(wanted);
      }

      showUnvisitedPlaceholder(wanted);
      reinforceFrozenUi();
      scheduleRefreshFreezeBar(20);
      return;
    }

    hideUnvisitedPlaceholder();
    frozenNavInFlight = true;
    freezeBooting = true;
    setFreezeLoading(true, "goFrozenRelative:" + wanted);

    log("frozen-nav:request", "from=" + current, "to=" + wanted, "dir=" + dir);

    if (current === wanted) {
      scheduleApplySnapshot(wanted, 20);
      return;
    }

    const usedNative = triggerNativeRelativeNav(dir);

    if (!usedNative) {
      warn("native-nav:fallback-hash", wanted);
      window.location.hash = wanted;
    } else {
      scheduleApplySnapshot(wanted, 220);
    }
  }

  function goFrozenHash(targetHash) {
    if (!snapshotPayload || !targetHash) return;

    const wanted = String(targetHash);
    const current = String(getCurrentHash());
    const targetUnvisited = isUnvisitedTarget(wanted);
    const currentPlaceholder = isCurrentlyOnUnvisitedPlaceholder();

    currentFrozenTargetHash = wanted;

    if (currentPlaceholder && !targetUnvisited) {
      restoreVisitedFromPlaceholder(wanted);
      return;
    }

    if (targetUnvisited) {
      frozenNavInFlight = false;
      freezeBooting = false;
      hideUnvisitedPlaceholder();
      setFreezeLoading(false, "unvisited-absolute");

      if (current !== wanted) {
        pushHashSilently(wanted);
      }

      showUnvisitedPlaceholder(wanted);
      reinforceFrozenUi();
      scheduleRefreshFreezeBar(20);
      return;
    }

    hideUnvisitedPlaceholder();
    frozenNavInFlight = true;
    freezeBooting = true;
    setFreezeLoading(true, "goFrozenHash:" + wanted);

    log("frozen-nav:absolute", "from=" + current, "to=" + wanted);

    if (current === wanted) {
      scheduleApplySnapshot(wanted, 20);
      return;
    }

    window.location.hash = wanted;
  }

  function restoreVisitedFromPlaceholder(targetHash) {
    const target = String(targetHash || "");
    const base = String(lastAppliedVisitedHash || "");

    log("restore-from-unvisited", "target=" + target, "base=" + base);

    hideUnvisitedPlaceholder();
    freezeBooting = false;
    frozenNavInFlight = false;
    currentFrozenTargetHash = target;

    if (!base || base === target) {
      pushHashSilently(target);
      setFreezeLoading(false, "restore-direct:" + target);
      scheduleApplySnapshot(target, 20);
      return;
    }

    const baseIdx = getDeclaredSlideIndex(base);
    const targetIdx = getDeclaredSlideIndex(target);

    if (baseIdx >= 0 && targetIdx >= 0 && Math.abs(targetIdx - baseIdx) === 1) {
      setHashSilently(base);
      frozenNavInFlight = true;
      freezeBooting = true;
      setFreezeLoading(true, "restore-native:" + target);

      const dir = targetIdx > baseIdx ? 1 : -1;
      const usedNative = triggerNativeRelativeNav(dir);

      if (!usedNative) {
        window.location.hash = target;
      } else {
        scheduleApplySnapshot(target, 220);
      }
      return;
    }

    pushHashSilently(target);
    setFreezeLoading(false, "restore-fallback:" + target);
    scheduleApplySnapshot(target, 20);
  }

  // =========================================================
  // Live-Bindings
  // =========================================================

  function installLiveCaptureBindings() {
    if (liveBindingsInstalled) return;
    liveBindingsInstalled = true;

    installRouteBridge();
    liveRouteCurrentHash = getCurrentHash();

    document.addEventListener("input", function (e) {
      const t = e.target;
      if (!(t instanceof HTMLElement)) return;
      if (document.body.classList.contains("lia-snapshot-mode")) return;

      if (t.matches("input, textarea, select, [contenteditable='true'], [role='textbox']")) {
        captureVisibleStateForHash(
          liveRouteCurrentHash || getCurrentHash(),
          "input-now",
          { eventTarget: t }
        );

        scheduleCaptureForHash(
          liveRouteCurrentHash || getCurrentHash(),
          [100, 260, 520],
          "input",
          { eventTarget: t }
        );
      }
    }, true);

    document.addEventListener("change", function (e) {
      const t = e.target;
      if (!(t instanceof HTMLElement)) return;
      if (document.body.classList.contains("lia-snapshot-mode")) return;

      if (t.matches("input, textarea, select, [contenteditable='true'], [role='textbox']")) {
        captureVisibleStateForHash(
          liveRouteCurrentHash || getCurrentHash(),
          "change-now",
          { eventTarget: t }
        );

        scheduleCaptureForHash(
          liveRouteCurrentHash || getCurrentHash(),
          [100, 260, 520],
          "change",
          { eventTarget: t }
        );
      }
    }, true);

    document.addEventListener("click", function (e) {
      const t = e.target;
      if (!(t instanceof HTMLElement)) return;
      if (document.body.classList.contains("lia-snapshot-mode")) return;

      if (t.closest(".lia-quiz__check, .lia-quiz__resolve")) {
        captureVisibleStateForHash(
          liveRouteCurrentHash || getCurrentHash(),
          "quiz-click-now",
          { eventTarget: t }
        );

        scheduleCaptureForHash(
          liveRouteCurrentHash || getCurrentHash(),
          [100, 260, 520],
          "quiz-click",
          { eventTarget: t }
        );
        return;
      }

      const nav = t.closest("button, a, [role='button'], summary, input[type='button'], input[type='submit']");
      if (nav && !nav.closest(".lia-submit-box") && !nav.closest("#lia-freeze-bar")) {
        captureVisibleStateForHash(
          liveRouteCurrentHash || getCurrentHash(),
          "nav-click-outgoing",
          { requireDeclaredTitleMatch: true, eventTarget: t }
        );
      }
    }, true);

    window.addEventListener("lia:routechange", function (ev) {
      if (document.body.classList.contains("lia-snapshot-mode")) return;

      const source = ev && ev.detail && ev.detail.source || "?";
      const newHash = cleanHashValue(
        ev && ev.detail && ev.detail.hash ? ev.detail.hash : getCurrentHash()
      );
      const prevHash = cleanHashValue(liveRouteCurrentHash || getCurrentHash());

      captureVisibleStateForHash(
        prevHash,
        "route-outgoing:" + source,
        { requireDeclaredTitleMatch: true }
      );

      liveRouteCurrentHash = newHash;
      liveVisitedHashes[newHash] = 1;
      markProvisionalVisited(newHash);

      liveWaitToken += 1;
      const token = liveWaitToken;

      waitForLiveRenderableHash(newHash, "route:" + source, 2500, token);

      scheduleCaptureForHash(
        newHash,
        [250, 600, 1200, 2200],
        "route-fallback:" + source,
        {}
      );
    });

    const obsRoot = getContentHost() || document.body;
    if (obsRoot && !liveObserver) {
      liveObserver = new MutationObserver(function () {
        if (document.body.classList.contains("lia-snapshot-mode")) return;

        scheduleCaptureForHash(
          liveRouteCurrentHash || getCurrentHash(),
          [120],
          "mutation",
          {}
        );
      });

      liveObserver.observe(obsRoot, {
        childList: true,
        subtree: true
      });
    }

    setTimeout(function () {
      scheduleCaptureForHash(
        liveRouteCurrentHash || getCurrentHash(),
        [120, 380],
        "init",
        {}
      );
    }, 250);
  }

  // =========================================================
  // Modi / Link-Erzeugung
  // =========================================================

  function activateSnapshotMode(payload, linkValue) {
    snapshotPayload = payload || null;
    if (!snapshotPayload) return false;

    declaredSlidesCache = (snapshotPayload.s || []).map(function (slide, i) {
      return {
        h: slide.h || ("#" + (i + 1)),
        t: slide.t || ""
      };
    }).sort(hashSort);

    freezeLinkValue = String(linkValue || window.location.href || "");
    currentFrozenTargetHash = getFrozenStartHash();
    frozenNavInFlight = false;
    freezeBooting = true;
    freezeLoadingVisible = false;
    unvisitedPlaceholderHash = "";
    lastAppliedVisitedHash = "";

    log(
      "activateSnapshotMode",
      "startHash=" + currentFrozenTargetHash,
      "slides=" + declaredSlidesCache.length
    );

    ensureSnapshotModeClasses();
    getFreezeBar();
    refreshFreezeBar();
    installFreezeBindings();
    applyAdminState(getDisplayName(), {
      preserveLinkValue: false,
      linkValue: freezeLinkValue
    });

    if (isUnvisitedTarget(currentFrozenTargetHash)) {
      showUnvisitedPlaceholder(currentFrozenTargetHash);
      reinforceFrozenUi();
      return true;
    }

    setFreezeLoading(true, "activateSnapshotMode");

    if (getCurrentHash() !== currentFrozenTargetHash) {
      frozenNavInFlight = true;
      window.location.hash = currentFrozenTargetHash;
    } else {
      scheduleApplySnapshot(currentFrozenTargetHash, 120);
    }

    return true;
  }

  async function createLink() {
    const btnEl = document.getElementById("lia-create-link");

    try {
      lastKnownName = getDisplayName() || lastKnownName || "";

      if (btnEl) {
        btnEl.disabled = true;
        setButtonLabel(btnEl, "Abgabelink wird erstellt …");
      }

      await ensureDeclaredSlides();

      liveWaitToken += 1;
      await waitForLiveRenderableHash(
        liveRouteCurrentHash || getCurrentHash(),
        "createLink",
        1800,
        liveWaitToken
      );

      captureVisibleStateForHash(
        liveRouteCurrentHash || getCurrentHash(),
        "createLink-final",
        { allowTitleMismatch: true }
      );

      const payload = buildPayloadFromLiveStates();
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

      setStatus("Abgabelink erstellt.");

      activateSnapshotMode(payload, link);
    } catch (err) {
      console.error(err);
      setStatus("Fehler bei der Linkerstellung: " + (err && err.message ? err.message : err));

      if (btnEl) {
        btnEl.disabled = false;
        setButtonLabel(btnEl, "Abgabelink erstellen");
      }

      setFreezeLoading(false, "createLink-error");
    }
  }

  function initMode() {
    const directToken =
      getSubmissionTokenFromCourseUrl() ||
      getSubmissionTokenFromViewerHash();

    if (directToken) {
      storeSubmissionToken(directToken);
    }

    const snapshot = tryLoadSnapshot();
    if (snapshot) {
      activateSnapshotMode(snapshot, window.location.href);
      return;
    }

    installLiveCaptureBindings();

    setTimeout(function () {
      ensureDeclaredSlides().catch(function (err) {
        console.warn("Declared slides konnten nicht vorab geladen werden:", err);
      });
    }, 60);
  }

  function safeBoot() {
    try {
      installThemeWatcher();
      initMode();
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











-->





# Reine LiaScript-Abgabelink-Demo

$a)\;\;$ $7000+123=$ [[  7123  ]]

$b)\;\;$ $6000+123=$ [[  6123  ]]

$c)\;\;$ $5000+123=$ [[  5123  ]]




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



# 2. Folie


$d)\;\;$ $4000+123=$ [[  4123  ]]



# 3. Folie


$e)\;\;$ $1000+123=$ [[  1123  ]]



# 4. Folie


$e)\;\;$ $9000+123=$ [[  9123  ]]


Hier muss das richtige [->[(Wort)|Küche|Berg|Bach]] rein.


Wähle die 5 aus.
- [[x]] 5
- [[ ]] 6
- [[ ]] 3