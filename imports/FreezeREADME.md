<!--
version: 0.0.1
language: de
author: Martin Lommatzsch
comment: LiaScript-Abgabelink mit exakterer Zustandsprotokollierung und Freeze



import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/MatheREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/DeutschREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/MarkerREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/KoordREADME.md










@onload
window.__liaSubmissionDemo = (function () {
  const PARAM_NAME = "submission";
  const ADMIN_ATTR = "data-snapshot-admin";
  const STORAGE_PREFIX = "__lia_submission_demo__:";
  const PAYLOAD_VERSION = "sf-mini-ti-2";
  const DEBUG = true;

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
  let initialBootDone = false;

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

      const m = line.match(/^(#{1,6})\s+(.+?)\s*$/);
      if (m) {
        out.push({
          h: "#" + (out.length + 1),
          t: normalizeSpace(m[2])
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

  const input = rep.querySelector && rep.querySelector("input.lia-range[output]");
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

  const host = getContentHost() || document.body;
  const inputs = Array.from(
    host.querySelectorAll("input.lia-range[output]")
  ).filter(function (el) {
    const spec = parseFractionOutputSpec(el.getAttribute("output"));
    return !!(
      spec &&
      spec.uid === info.uid &&
      spec.tp === info.tp
    );
  });

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
  if (!inputs.length) return rep;
  return inputs[0].closest(".fq-range") || inputs[0];
}

function getFractionLastRangeWrap(rep) {
  const inputs = getFractionRangeInputsForRep(rep);
  if (!inputs.length) return rep;
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
    root.querySelectorAll("input.lia-range[output]")
  ).filter(isFractionRangeInput);

  inputs.forEach(function (input) {
    const spec = parseFractionOutputSpec(input.getAttribute("output"));
    if (!spec) return;

    const key = spec.tp + ":" + spec.uid;
    if (map.has(key)) return;

    const rep = input.closest(".fq-range") || input;
    map.set(key, rep);
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

  const inputs = getFractionRangeInputsForRep(rep);
  inputs.forEach(function (input) {
    try { input.disabled = true; } catch (e) {}
    try { input.setAttribute("tabindex", "-1"); } catch (e) {}
    input.style.pointerEvents = "none";

    const wrap = input.closest(".fq-range") || input.parentElement;
    if (wrap) wrap.style.pointerEvents = "none";

    const scriptWrap = input.closest(".lia-script");
    if (scriptWrap) scriptWrap.style.pointerEvents = "none";
  });

  const svg = getFractionSvgFromRep(rep);
  if (svg) {
    svg.style.pointerEvents = "none";
    Array.from(svg.querySelectorAll("*")).forEach(function (el) {
      el.style.pointerEvents = "none";
      try { el.removeAttribute("onclick"); } catch (e) {}
    });
  }

  const quizRoot = getFractionQuizRootFromRep(rep);
  if (quizRoot) {
    lockTextQuizRoot(quizRoot);
  }
}

function applyFractionQuizState(rep, state) {
  if (!rep || !state) return rep;

  const info = getFractionRepInfo(rep);
  if (!info) return rep;

  const inputs = getFractionRangeInputsForRep(rep);

  if (state.tp === "c") {
    const nInput = inputs[0] || null;
    const n = Math.max(1, Math.min(32, Number(state.n || 1) || 1));

    if (nInput) setFractionRangeValue(nInput, n);

    syncFractionModuleState(state);

    const svg = getFractionSvgFromRep(rep);
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

    const svg = getFractionSvgFromRep(rep);
    if (svg) {
      svg.outerHTML = renderFractionRectSvg(rows, cols, state.b || "");
    }
  }

  const quizRoot = getFractionQuizRootFromRep(rep);
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

  lockFractionQuizRoot(rep);
  return rep;
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
    collectMarkerQuizRootsFromRoot(host).length
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

function captureSlideStateForHash(hash) {
  const cleanHash = cleanHashValue(hash || "");
  if (!/^#\d+$/.test(cleanHash)) return null;

  const currentHash = getCurrentHash();
  if (String(currentHash) !== String(cleanHash)) {
    return null;
  }

  const host = getContentHost() || document.body;

  const textRoots = collectTextQuizRootsFromRoot(host);
  const textQuizStates = textRoots.map(function (root, idx) {
    return captureTextQuizState(root, idx);
  });

  const dropdowns = getDropdownQuizControlsFromRoot(host);
  const dropdownStates = dropdowns.map(function (drop, idx) {
    return captureDropdownQuizState(drop, idx);
  });

  const tileRoots = collectTileQuizRootsFromRoot(host);
  const tileStates = tileRoots.map(function (root, idx) {
    return captureTileQuizState(root, idx);
  });

  const choiceRoots = collectChoiceQuizRootsFromRoot(host);
  const choiceStates = choiceRoots.map(function (root, idx) {
    return captureChoiceQuizState(root, idx);
  });

  const orthoRoots = collectOrthographyQuizRootsFromRoot(host);
  const orthoStates = orthoRoots.map(function (wrap, idx) {
    return captureOrthographyQuizState(wrap, idx);
  });

  const fractionRoots = collectFractionQuizRootsFromRoot(host);
  const fractionStates = fractionRoots.map(function (rep, idx) {
    return captureFractionQuizState(rep, idx);
  }).filter(function (x) {
    return !!x;
  });

  const markerRoots = collectMarkerQuizRootsFromRoot(host);
  const markerStates = markerRoots.map(function (root, idx) {
    return captureMarkerQuizState(root, idx);
  }).filter(function (x) {
    return !!x;
  });

  const out = {
    h: cleanHash,
    q: textQuizStates,
    d: dropdownStates,
    m: tileStates,
    c: choiceStates,
    o: orthoStates,
    fq: fractionStates,
    mq: markerStates
  };

  log(
    "slide-capture",
    cleanHash,
    "text=" + textQuizStates.length,
    "dropdown=" + dropdownStates.length,
    "tile=" + tileStates.length,
    "choice=" + choiceStates.length,
    "ortho=" + orthoStates.length,
    "fraction=" + fractionStates.length,
    "marker=" + markerStates.length
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
    "marker=" + (state.mq ? state.mq.length : 0)
  );
  return true;
}

  function buildPayloadFromLiveStates() {
    const currentHash = liveRouteCurrentHash || getCurrentHash();
    storeLiveSlideState(currentHash, "payload-final");

    const slides = Object.keys(liveSlidesByHash).map(function (hash) {
      return liveSlidesByHash[hash];
    }).sort(hashSort);

    return {
      v: PAYLOAD_VERSION,
      sh: getCurrentHash(),
      n: getDisplayName(),
      s: slides
    };
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
    if (!snapshotPayload) return false;
    return !getSnapshotSlideForHash(hash);
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

    if (unvisitedPlaceholderHash) {
      const decl = getDeclaredSlideByHash(unvisitedPlaceholderHash);
      const title = normalizeSpace(decl && decl.t || "");
      const name = getDisplayName();

      if (host) {
        host.style.opacity = "0";
        host.style.pointerEvents = "none";
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
      if (isUnvisitedTarget(hash)) {
        sub.textContent = slide.t + " · unbesucht / gesperrt";
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
    syncFrozenScreens();
  }

  // =========================================================
  // Apply-Zyklus
  // =========================================================

async function applySnapshotOnce(hash, reason) {
  const currentHash = String(hash || getCurrentHash() || "#1");
  const isBootApply = !initialBootDone;

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

    const expectedText = Array.isArray(slide.q) ? slide.q.length : 0;
    const expectedDropdown = Array.isArray(slide.d) ? slide.d.length : 0;
    const expectedTile = Array.isArray(slide.m) ? slide.m.length : 0;
    const expectedChoice = Array.isArray(slide.c) ? slide.c.length : 0;
    const expectedOrtho = Array.isArray(slide.o) ? slide.o.length : 0;
    const expectedFraction = Array.isArray(slide.fq) ? slide.fq.length : 0;
    const expectedMarker = Array.isArray(slide.mq) ? slide.mq.length : 0;

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

    if (isTextQuizInputControl(t) || isOrthographyQuizInput(t)) {
      captureAdminState();
      storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "input-now");
      return;
    }

    if (isFractionRangeInput(t)) {
      setTimeout(function () {
        captureAdminState();
        storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "fraction-range-input");
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
        storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "fraction-range-change");
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
    if (!t.closest(".markerquiz")) return;

    setTimeout(function () {
      captureAdminState();
      storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "marker-mouseup");
    }, 140);
  }, true);

  document.addEventListener("pointerdown", function (e) {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (document.body.classList.contains("lia-snapshot-mode")) return;

    if (
      t.closest(".lia-hl-rect") ||
      t.closest("#lia-hl-btn") ||
      t.closest("#lia-hl-panel")
    ) {
      setTimeout(function () {
        captureAdminState();
        storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "marker-pointer");
      }, 140);
    }
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

  async function activateSnapshotMode(payload, linkValue) {
    snapshotPayload = payload || null;
    if (!snapshotPayload) return false;

    freezeLinkValue = String(linkValue || window.location.href || "");

    await ensureDeclaredSlides();

    ensureSnapshotModeClasses();
    getFreezeBar();
    refreshFreezeBar();
    installFreezeBindings();
    applyAdminState(getDisplayName(), {
      preserveLinkValue: false,
      linkValue: freezeLinkValue
    });

    const startHash = /^#\d+$/.test(snapshotPayload.sh || "") ? snapshotPayload.sh : getCurrentHash();

    if (getCurrentHash() !== startHash) {
      setFreezeLoading(true, "activate-route");
      setHashSilently(startHash);
      window.location.hash = startHash;
    }

    scheduleInitialBootApply(startHash);
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

      await ensureDeclaredSlides();

      captureAdminState();
      storeLiveSlideState(liveRouteCurrentHash || getCurrentHash(), "createLink");

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
      await activateSnapshotMode(payload, link);
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
      await activateSnapshotMode(snapshot, window.location.href);
      return;
    }

    await ensureDeclaredSlides();
    installLiveCaptureBindings();
  }

  function safeBoot() {
    try {
      ensureRuntimeStyle();
      installThemeWatcher();
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




-->



# Reine LiaScript-Abgabelink-Demo

Einfaches importieren: \
'import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md'

Abgabefeld über Makro: \
'@Abgabe'



# Erste Folie

$a)\;\;$ $7000+123=$ [[  7123  ]]

$b)\;\;$ $6000+123=$ [[  6123  ]]



Wähle blau aus.
- [[X]] Blau
- [[ ]] Gelb
- [[ ]] Rot
- [[ ]] Grün


Wähle rot aus.
[[(rot)|blau|grün|gelb]]



Wähle gelb aus.
[->[rot|blau|grün|(gelb)]]



# 2. Folie


$c)\;\;$ $5000+123=$ [[  5123  ]]

Wähle blau aus.
- [(X)] Blau
- [( )] Gelb
- [( )] Rot
- [( )] Grün

Wähle grün aus.
[->[rot|blau|(grün)|gelb]]


Wähle blau aus.
- [[X]] Blau
- [[ ]] Gelb
- [[ ]] Rot
- [[ ]] Grün



# 3. Folie



$d)\;\;$ $4000+123=$ [[  4123  ]]


Wähle blau aus.
- [(X)] Blau
- [( )] Gelb
- [( )] Rot
- [( )] Grün



Wähle grün aus.
[[rot|blau|(grün)|gelb]]


**Entscheide**, ob es sich bei dem Term um einen Vektor, ein Skalar oder einen nicht definierten Ausdruck handelt.
<br>

- [[Vektor]       (Skalar)    [nicht definiert]]
- [    [ ]           [ ]             [X]     ]  nicht definiert
- [    ( )           (X)             ( )     ]  Skalar
- [    [X]           [ ]             [ ]     ]  Vektor





# Deutschaufgaben-Makros





__Aufgabe 1:__ Hör dir den Satz an und schreib ihn korrekt in das Eingabefeld.


{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Anna sitzt auf einem fliegenden Teppich.

[[    Anna sitzt auf einem fliegenden Teppich.    ]]


--- 


__Aufgabe 2:__ Lass dir die Wörter vorlesen, die in die Lücken kommen und schreibe diese in die Lücken.

Anna ging in einen @diktat(Zoo). Dort konnte sie auf einem @diktat(Lama) reiten.


--- 


__Aufgabe 3:__ Setze das Komma an die richtige Stelle. (Auflösung ist blockiert.)


@orthography(false,`Das ist der Tag an dem ich geblitzt wurde.`,`Das ist der Tag, an dem ich geblitzt wurde.`)

@orthography(2,`Der Bruder den ich mag.`,`Der Bruder, den ich mag.`)





# Brüche darstellen

**Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.

__$a)\;\;$__ $\dfrac{7}{10}$

@rectQuiz(7/10)

__$b)\;\;$__ $\dfrac{7}{10}$

@circleQuiz(7/10)


__$c)\;\;$__ $\dfrac{4}{11}$

@rectQuiz(4/11)

__$d)\;\;$__ $\dfrac{4}{11}$

@circleQuiz(4/11)






# Markerquiz


Markiere die korrekt.

<div class="markerquiz">
@markred(rot) und @markblue(blau bis blau)  
@TextmarkerQuiz
</div>



@Abgabe




