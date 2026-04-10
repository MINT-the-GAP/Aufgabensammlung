<!--
version: 0.0.1
language: de
author: Martin Lommatzsch
comment: LiaScript-Abgabelink mit exakterer Zustandsprotokollierung und Freeze


import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@master/README.md
import: https://cdn.jsdelivr.net/gh/LiaTemplates/JSXGraph@main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/MatheREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/DeutschREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/MarkerREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/KoordREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/OCRREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/AnnotationREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FlexChildREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/TafelREADME.md










@onload
window.__liaSubmissionDemo = (function () {
  const PARAM_NAME = "submission";
  const ADMIN_ATTR = "data-snapshot-admin";
  const STORAGE_PREFIX = "__lia_submission_demo__:";
  const PAYLOAD_VERSION = "sf-mini-ti-3";
  const DEBUG = false;
  const EVALUATION_TITLE = "Auswertung";
  const BUILD_STAMP = "FREEZE-BUILD-2026-04-05-12-26";

  let snapshotPayload = null;
  let declaredSlidesCache = [];
  let liveSlidesByHash = Object.create(null);

  let routeBridgeInstalled = false;
  let liveBindingsInstalled = false;
  let freezeBindingsInstalled = false;
  let themeWatcherInstalled = false;
  let createLinkDelegationInstalled = false;

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

function uint8ArrayToBase64Url(bytes) {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes || []);
  let binary = "";
  const chunkSize = 0x8000;

  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.subarray(i, i + chunkSize);
    binary += String.fromCharCode.apply(null, chunk);
  }

  return toBase64Url(btoa(binary));
}

function base64UrlToUint8Array(token) {
  const b64 = fromBase64Url(token);
  const binary = atob(b64);
  const out = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) {
    out[i] = binary.charCodeAt(i);
  }

  return out;
}

async function readStreamToUint8Array(stream) {
  const response = new Response(stream);
  const buffer = await response.arrayBuffer();
  return new Uint8Array(buffer);
}

async function gzipCompressUtf8ToBase64UrlToken(str) {
  if (typeof CompressionStream !== "function") {
    throw new Error("CompressionStream wird in diesem Browser nicht unterstützt.");
  }

  const inputBytes = new TextEncoder().encode(String(str || ""));
  const compressedStream =
    new Blob([inputBytes])
      .stream()
      .pipeThrough(new CompressionStream("gzip"));

  const compressedBuffer = await new Response(compressedStream).arrayBuffer();
  return uint8ArrayToBase64Url(new Uint8Array(compressedBuffer));
}

async function gzipDecompressBase64UrlTokenToUtf8(token) {
  if (typeof DecompressionStream !== "function") {
    throw new Error("DecompressionStream wird in diesem Browser nicht unterstützt.");
  }

  const compressedBytes = base64UrlToUint8Array(token);
  const decompressedStream =
    new Blob([compressedBytes])
      .stream()
      .pipeThrough(new DecompressionStream("gzip"));

  const decompressedBuffer = await new Response(decompressedStream).arrayBuffer();
  return new TextDecoder().decode(new Uint8Array(decompressedBuffer));
}

async function runCompressionCoreSelfTest(sampleText) {
  const sample = String(
    sampleText ||
    JSON.stringify({
      v: "compression-self-test",
      txt: "Dies ist ein Test für die Browser-Kompression.",
      arr: ["canvas", "freeze", "token", "gzip", "base64url"],
      nested: {
        a: 1,
        b: 2,
        c: "wiederholte wiederholte wiederholte Daten"
      }
    })
  );

  try {
    const plainBytes = new TextEncoder().encode(sample);
    const token = await gzipCompressUtf8ToBase64UrlToken(sample);
    const roundtrip = await gzipDecompressBase64UrlTokenToUtf8(token);

    const ok = roundtrip === sample;

    log(
      "compression-self-test",
      "ok=" + (ok ? "1" : "0"),
      "plainChars=" + sample.length,
      "plainBytes=" + plainBytes.length,
      "tokenChars=" + token.length
    );

    if (!ok) {
      warn("compression-self-test-mismatch");
    }

    return {
      ok: ok,
      plainChars: sample.length,
      plainBytes: plainBytes.length,
      tokenChars: token.length,
      token: token,
      roundtrip: roundtrip
    };
  } catch (err) {
    warn(
      "compression-self-test-failed",
      err && err.message ? err.message : err
    );

    return {
      ok: false,
      error: err && err.message ? err.message : String(err)
    };
  }
}


const SNAPSHOT_TOKEN_GZIP_PREFIX = "gz:";

function encodeSnapshotTokenPlain(payload) {
  return toBase64Url(utf8ToBase64(JSON.stringify(payload)));
}

function decodeSnapshotTokenPlain(token) {
  return JSON.parse(base64ToUtf8(token));
}

async function encodeSnapshotToken(payload) {
  const json = JSON.stringify(payload);
  const plainToken = toBase64Url(utf8ToBase64(json));

  let gzipToken = null;

  try {
    const compressed = await gzipCompressUtf8ToBase64UrlToken(json);
    gzipToken = SNAPSHOT_TOKEN_GZIP_PREFIX + compressed;
  } catch (err) {
    log(
      "snapshot-token-encode-gzip-skip",
      err && err.message ? err.message : err
    );
  }

  if (gzipToken && gzipToken.length < plainToken.length) {
    return {
      token: gzipToken,
      mode: "gzip",
      plainLength: plainToken.length,
      finalLength: gzipToken.length
    };
  }

  return {
    token: plainToken,
    mode: "plain",
    plainLength: plainToken.length,
    finalLength: plainToken.length
  };
}

async function decodeSnapshotToken(token) {
  const raw = String(token || "");
  if (!raw) {
    throw new Error("Leerer Snapshot-Token.");
  }

  if (raw.startsWith(SNAPSHOT_TOKEN_GZIP_PREFIX)) {
    const compressedPart = raw.slice(SNAPSHOT_TOKEN_GZIP_PREFIX.length);
    const json = await gzipDecompressBase64UrlTokenToUtf8(compressedPart);
    return JSON.parse(json);
  }

  return JSON.parse(base64ToUtf8(raw));
}

async function runSnapshotTokenSelfTest(samplePayload) {
  const payload = samplePayload && typeof samplePayload === "object"
    ? samplePayload
    : {
        v: "snapshot-token-self-test",
        sh: "#1",
        s: [
          {
            h: "#1",
            cv: [
              {
                v: "cv2",
                u: "demo_0",
                w: 500,
                h: 200,
                c: ["#fff"],
                i: [
                  [0, 0, 3, "k.a2.0.7.0.9.4.h.0.h.2.r.2.11.4.15.6.11.6.z.4.n.6.j.6.f"]
                ]
              }
            ]
          }
        ]
      };

  try {
    const originalJson = JSON.stringify(payload);
    const encoded = await encodeSnapshotToken(payload);
    const decoded = await decodeSnapshotToken(encoded.token);
    const decodedJson = JSON.stringify(decoded);

    const ok = decodedJson === originalJson;

    log(
      "snapshot-token-self-test",
      "ok=" + (ok ? "1" : "0"),
      "mode=" + encoded.mode,
      "plainLength=" + encoded.plainLength,
      "finalLength=" + encoded.finalLength
    );

    if (!ok) {
      warn("snapshot-token-self-test-mismatch");
    }

    return {
      ok: ok,
      mode: encoded.mode,
      plainLength: encoded.plainLength,
      finalLength: encoded.finalLength,
      token: encoded.token,
      original: payload,
      decoded: decoded
    };
  } catch (err) {
    warn(
      "snapshot-token-self-test-failed",
      err && err.message ? err.message : err
    );

    return {
      ok: false,
      error: err && err.message ? err.message : String(err)
    };
  }
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

function copyJson(value) {
  if (value == null) return value;

  try {
    return JSON.parse(JSON.stringify(value));
  } catch (e) {
    return null;
  }
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
  const doc = document;

  function isVisible(el) {
    if (!el || !(el instanceof Element)) return false;
    const cs = window.getComputedStyle(el);
    if (!cs) return false;
    if (cs.display === "none" || cs.visibility === "hidden") return false;
    return true;
  }

  function isBadHost(el) {
    if (!el || !(el instanceof Element)) return true;

    const cls = (el.className || "").toString();

    if (el.classList.contains("dynFlex")) return true;
    if (el.classList.contains("flex-child")) return true;
    if (el.classList.contains("lia-quiz")) return true;
    if (el.classList.contains("lia-quiz__control")) return true;
    if (el.classList.contains("lia-annot-toolbar")) return true;
    if (el.classList.contains("lia-freeze-bar")) return true;

    const tag = (el.tagName || "").toUpperCase();

    if (tag === "SECTION" && !el.classList.contains("lia-slide__content")) return true;
    if (tag === "ASIDE") return true;
    if (tag === "NAV") return true;
    if (tag === "FOOTER") return true;

    return false;
  }

  function logHostPick(el) {
    try {
      if (!el) {
        debugLog("host-pick", "null");
        return;
      }
      const r = el.getBoundingClientRect();
      debugLog(
        "host-pick",
        "tag=" + (el.tagName || ""),
        "id=" + (el.id || ""),
        "class=" + ((el.className || "").toString().trim() || ""),
        "w=" + Math.round(r.width),
        "h=" + Math.round(r.height)
      );
    } catch (e) {}
  }

  function firstVisible(list) {
    for (let i = 0; i < list.length; i++) {
      const el = list[i];
      if (!el || !isVisible(el) || isBadHost(el)) continue;
      return el;
    }
    return null;
  }

  let currentSlide = null;

  currentSlide =
    doc.querySelector(".lia-slide.active") ||
    doc.querySelector(".lia-slide.current") ||
    doc.querySelector(".lia-slide[aria-hidden='false']") ||
    null;

  if (currentSlide && !isVisible(currentSlide)) {
    currentSlide = null;
  }

  let host = null;

  if (currentSlide) {
    host = firstVisible([
      currentSlide.querySelector(".lia-slide__content"),
      currentSlide.querySelector("main.lia-slide__content"),
      currentSlide.querySelector(".lia-content"),
      currentSlide.querySelector("main"),
      currentSlide.querySelector("article")
    ]);
  }

  if (!host) {
    host = firstVisible([
      doc.querySelector(".lia-slide.active .lia-slide__content"),
      doc.querySelector(".lia-slide.current .lia-slide__content"),
      doc.querySelector(".lia-slide[aria-hidden='false'] .lia-slide__content"),
      doc.querySelector("main.lia-slide__content"),
      doc.querySelector(".lia-content"),
      doc.querySelector("main"),
      doc.querySelector("article")
    ]);
  }

  if (!host || isBadHost(host)) {
    host = doc.body;
  }

  logHostPick(host);
  return host;
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

.lia-submit-actions{
  display:flex;
  flex-wrap:wrap;
  gap:.75rem;
  margin-top:1rem;
  justify-content:flex-start;
}

.lia-submit-actions button{
  margin-top:0;
  flex:0 0 320px;
  width:320px;
  max-width:100%;
}

.lia-frozen-scope #lia-copy-link{
  pointer-events:auto !important;
  cursor:pointer !important;
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

.lia-frozen-scope .lia-annot-toolbar,
.lia-frozen-scope .lia-annot-toolbar *{
  pointer-events: auto !important;
}

.lia-frozen-scope .lia-annot-toolbar button,
.lia-frozen-scope .lia-annot-toolbar [role="button"]{
  cursor: pointer !important;
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

async function buildLink(payload) {
  const baseCourseUrl = stripSubmissionFromCourseUrl(getCourseUrlFromViewerUrl());
  if (!baseCourseUrl) return window.location.href;

  const encoded = await encodeSnapshotToken(payload);
  const token = encoded.token;

  log(
    "snapshot-token-encode",
    "mode=" + encoded.mode,
    "plainLength=" + encoded.plainLength,
    "finalLength=" + encoded.finalLength
  );

  storeSubmissionToken(token);

  const viewerBase = window.location.href.split("?")[0].split("#")[0];
  const slideHash = /^#\d+$/.test(String(payload && payload.sh || ""))
    ? String(payload.sh)
    : "#1";

  // WICHTIG:
  // Token in die kodierte Kurs-URL legen, nicht in den Viewer-Hash.
  // Dann kann LiaScript den Hash #7 normal benutzen, ohne uns das
  // submission-Token wegzunormalisieren.
  const courseUrlWithSubmission =
    stripSubmissionFromCourseUrl(baseCourseUrl) +
    "#" +
    PARAM_NAME +
    "=" +
    token;

  return (
    viewerBase +
    "?" +
    encodeURIComponent(courseUrlWithSubmission) +
    slideHash
  );
}

async function tryLoadSnapshot() {
  const token = getSubmissionToken();
  if (!token) return null;

  try {
    const obj = await decodeSnapshotToken(token);
    if (!obj || !Array.isArray(obj.s)) return null;

    log(
      "snapshot-load-decoded",
      "mode=" + (
        String(token || "").startsWith(SNAPSHOT_TOKEN_GZIP_PREFIX)
          ? "gzip"
          : "plain"
      ),
      "slides=" + obj.s.length
    );

    return obj;
  } catch (e) {
    warn(
      "snapshot-load-decode-failed",
      e && e.message ? e.message : e
    );
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
  applyStoredCoordinateStatesToHost(host, slide.cq || []);
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

    // Bruch-/Marker-/Koordinaten-Makros: jede Instanz ist eine Aufgabe
    const macroMatches = line.match(/@(?:rectQuiz|circleQuiz|TextmarkerQuiz|ErzeugePunkt)\b/g) || [];
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
  ["q", "d", "m", "c", "o", "fq", "mq", "cq"].forEach(function (key) {
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
    const evalHash = getDeclaredEvaluationHash();

    // Im geteilten Freezelink zuerst zur Auswertungsfolie,
    // aber nur wenn im Kurs überhaupt eine @Auswertung(...) existiert.
    if (
      snapshotIsSharedLinkMode &&
      /^#\d+$/.test(evalHash) &&
      getDeclaredSlideByHash(evalHash)
    ) {
      return evalHash;
    }

    const current = cleanHashValue(getCurrentHash() || "");
    if (/^#\d+$/.test(current) && getDeclaredSlideByHash(current)) {
      return current;
    }

    const snap = cleanHashValue(snapshotPayload && snapshotPayload.sh || "");
    if (/^#\d+$/.test(snap) && getDeclaredSlideByHash(snap)) {
      return snap;
    }

    const preferred = getPreferredFreezeLandingHash();
    if (/^#\d+$/.test(preferred) && getDeclaredSlideByHash(preferred)) {
      return preferred;
    }

    if (/^#\d+$/.test(evalHash) && getDeclaredSlideByHash(evalHash)) {
      return evalHash;
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


function rehydrateStateEvaluationMetaFromDeclaredTask(hash, state) {
  if (!state || typeof state !== "object") return state;

  const di = Number(state.di || 0);
  if (!Number.isFinite(di) || di <= 0) return state;

  const taskList = getDeclaredTaskListForHash(hash);
  const task = Array.isArray(taskList) ? taskList[di - 1] : null;
  if (!task) return state;

  const hasExplicitBe =
    Object.prototype.hasOwnProperty.call(state, "be") &&
    Number.isFinite(Number(state.be)) &&
    Number(state.be) >= 0;

  if (!hasExplicitBe) {
    const rawBe = Object.prototype.hasOwnProperty.call(task, "be")
      ? task.be
      : 1;

    state.be = Number.isFinite(Number(rawBe))
      ? Math.max(0, Number(rawBe))
      : 1;
  }

  const existingTags = getEvaluationStateTags(state);
  if (existingTags.length) {
    state.tg = existingTags.slice();
    return state;
  }

  if (Array.isArray(task.tg) && task.tg.length) {
    state.tg = task.tg
      .map(function (tag) { return normalizeSpace(tag); })
      .filter(Boolean)
      .filter(function (tag, idx, arr) {
        return arr.indexOf(tag) === idx;
      });
  } else {
    delete state.tg;
  }

  return state;
}

function rehydrateSnapshotEvaluationMetaFromSource(payload) {
  if (!payload || !Array.isArray(payload.s)) return payload;

  let restored = 0;

  payload.s.forEach(function (slide) {
    const hash = cleanHashValue(slide && slide.h || "");
    if (!hash) return;

    ["q", "d", "m", "c", "o", "fq", "mq", "cq"].forEach(function (key) {
      const arr = Array.isArray(slide && slide[key]) ? slide[key] : [];

      arr.forEach(function (state) {
        const beforeBe = Object.prototype.hasOwnProperty.call(state, "be");
        const beforeTg = Object.prototype.hasOwnProperty.call(state, "tg");

        rehydrateStateEvaluationMetaFromDeclaredTask(hash, state);

        const afterBe = Object.prototype.hasOwnProperty.call(state, "be");
        const afterTg = Object.prototype.hasOwnProperty.call(state, "tg");

        if ((!beforeBe && afterBe) || (!beforeTg && afterTg)) {
          restored += 1;
        }
      });
    });
  });

  log("snapshot-meta-rehydrated", "states=" + restored);
  return payload;
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

    const hasExplicitBe =
      Object.prototype.hasOwnProperty.call(state, "be") &&
      Number.isFinite(Number(state.be)) &&
      Number(state.be) >= 0;

    if (!hasExplicitBe) {
      const rawBe = Object.prototype.hasOwnProperty.call(task, "be")
        ? task.be
        : 1;

      state.be = Number.isFinite(Number(rawBe))
        ? Math.max(0, Number(rawBe))
        : 1;
    }

    const existingTags = getEvaluationStateTags(state);
    if (existingTags.length) {
      state.tg = existingTags.slice();
    } else if (Array.isArray(task.tg) && task.tg.length) {
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
  const orthoSolved = Number(state.sv || 0) === 1;

  if (s === "r" || fc === "d") return "resolved";
  if (s === "s" || fc === "s") return "correct";

  // orthography liefert teils nur sv=1, ohne die normalen Klassen sauber zu setzen
  if (orthoSolved) return "correct";

  if (fc === "e") return "wrong";

  // geprüft, aber weder richtig noch aufgelöst => falsch
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


function getEvaluationDeclaredTagsForState(slide, state) {
  const hash = cleanHashValue(slide && slide.h || "");
  const di = Number(state && state.di || 0);

  if (hash && Number.isFinite(di) && di > 0) {
    const taskList = getDeclaredTaskListForHash(hash);
    const task = Array.isArray(taskList) ? taskList[di - 1] : null;

    if (task && Array.isArray(task.tg) && task.tg.length) {
      return task.tg
        .map(function (tag) { return normalizeSpace(tag); })
        .filter(Boolean)
        .filter(function (tag, idx, arr) {
          return arr.indexOf(tag) === idx;
        });
    }
  }

  return getEvaluationStateTags(state);
}


function visitEvaluationStates(payload, visitor) {
  if (!payload || !Array.isArray(payload.s) || typeof visitor !== "function") {
    return;
  }

  payload.s.forEach(function (slide) {
    const hash = cleanHashValue(slide && slide.h || "");
    const declaredTasks = getDeclaredTaskListForHash(hash);
    const hasDeclaredTasks = Array.isArray(declaredTasks) && declaredTasks.length > 0;

    ["q", "d", "m", "c", "o", "fq", "mq", "cq"].forEach(function (key) {
      const arr = Array.isArray(slide && slide[key]) ? slide[key] : [];

      arr.forEach(function (state) {
        rehydrateStateEvaluationMetaFromDeclaredTask(hash, state);

        // WICHTIG:
        // Wenn es für die Folie deklarierte Aufgaben gibt, dann dürfen auch
        // nur solche Zustände in die Auswertung eingehen, die einer echten
        // deklarierten Aufgabe zugeordnet sind.
        //
        // Sonst kann "erreicht" größer als "gesamt" werden, weil zusätzliche
        // Hilfs-/Neben-Zustände mitgezählt werden.
        if (hasDeclaredTasks) {
          const di = Number(state && state.di || 0);

          if (!Number.isFinite(di) || di <= 0 || di > declaredTasks.length) {
            return;
          }
        }

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
    const tags = getEvaluationDeclaredTagsForState(slide, state);
    if (!tags.length) return;

    const alloc = getEvaluationAllocation(slide, state);
    const be = getEvaluationUnits(state);

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

      // Fallback:
      // Wenn der deklarierte Tag-Topf fehlt oder leer ist,
      // hole total/tasks notfalls aus dem tatsächlich gespeicherten Zustand.
      if (
        Number(bucket[clean].total || 0) <= 0 &&
        Number(bucket[clean].tasks || 0) <= 0
      ) {
        bucket[clean].total += be;
        bucket[clean].tasks += 1;
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


function refreshEvaluationPlaceholderIfVisible() {
  const currentHash = cleanHashValue(getCurrentHash() || "");
  if (!currentHash) return;
  if (!isEvaluationTarget(currentHash)) return;

  evaluationPlaceholderHash = currentHash;
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

function getAssignmentOutcomeFromQuizRoot(root) {
  const quizRoot = getTextQuizStateRoot(root) || root;
  const feedback = quizRoot ? quizRoot.querySelector(".lia-quiz__feedback") : null;

  return getEvaluationOutcome({
    s: detectQuizState(quizRoot),
    fc: detectFeedbackCode(feedback),
    cc: getQuizCheckCount(quizRoot)
  });
}


function getSnapshotTaskStateForMarker(marker) {
  if (!marker || !snapshotPayload) return null;

  const hash = cleanHashValue(getCurrentHash() || "");
  const taskIndex = getAssignmentDetailTaskIndex(marker);

  if (!hash || !taskIndex) return null;

  const slide = getSnapshotSlideForHash(hash);
  if (!slide) return null;

  const buckets = ["q", "d", "m", "c", "o", "fq", "mq", "cq"];

  for (let i = 0; i < buckets.length; i++) {
    const arr = Array.isArray(slide[buckets[i]]) ? slide[buckets[i]] : [];

    for (let j = 0; j < arr.length; j++) {
      const state = arr[j];
      if (Number(state && state.di || 0) === taskIndex) {
        return state;
      }
    }
  }

  return null;
}


function getAssignmentDefaultAwardValue(root, spec, marker) {
  const be =
    spec && spec.pointsValue !== null
      ? Number(spec.pointsValue)
      : 1;

  // Im geteilten Freezelink möglichst den gespeicherten Snapshot-Zustand
  // der konkreten Aufgabe benutzen, nicht den gerade sichtbaren DOM-Zustand.
  if (isSharedFreezeLinkMode()) {
    const storedState = getSnapshotTaskStateForMarker(marker);

    if (storedState) {
      const outcome = getEvaluationOutcome(storedState);

      if (outcome === "correct") return String(be);
      if (outcome === "wrong" || outcome === "resolved") return "0";
    }
  }

  // Fallback für lokale/ältere Fälle weiterhin über DOM-Zustand
  const outcome = getAssignmentOutcomeFromQuizRoot(root);

  if (outcome === "correct") return String(be);
  if (outcome === "wrong" || outcome === "resolved") return "0";
  return "0";
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
    : getAssignmentDefaultAwardValue(quizRoot, spec, marker);

  input.value = initialValue;

  function handleManualAwardChange() {
    setStoredManualAwardValue(manualKey, input.value);
    refreshEvaluationPlaceholderIfVisible();
  }

  input.addEventListener("input", handleManualAwardChange);
  input.addEventListener("change", handleManualAwardChange);

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
  const taskRoot = getAssignmentDetailTaskRoot(marker);
  const quizRoot = getAssignmentDetailQuizRootFromTaskRoot(taskRoot, marker);

  const controlRoot = quizRoot
    ? (quizRoot.querySelector(".lia-quiz__control") || null)
    : null;

  const checkBtn =
    (quizRoot && quizRoot.querySelector(".lia-quiz__check")) ||
    getLastQuizCheckBeforeMarker(marker);

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

  // WICHTIG:
  // Die ADetails müssen vor allem am tatsächlichen Task/Quiz hängen,
  // nicht nur am Prüfen-Button.
  applySpecToElement(marker);
  applySpecToElement(taskRoot);
  applySpecToElement(quizRoot);
  applySpecToElement(controlRoot);
  applySpecToElement(checkBtn);

  if (checkBtn) {
    const ownerId = ensureAssignmentDetailOwnerId(marker);
    const badge = ensureAssignmentDetailBadge(checkBtn, ownerId);

    if (badge) {
      renderAssignmentDetailBadgeContent(
        badge,
        marker,
        spec,
        quizRoot || taskRoot || controlRoot || checkBtn
      );
    }
  }

  marker.setAttribute("data-adetails-bound", "1");

  return !!(taskRoot || quizRoot || checkBtn);
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

  collectCoordinateQuizRootsFromRoot(host).forEach(function (root) {
    ordered.push(root);
  });

  const unique = uniqueElements(ordered);
  unique.sort(compareElementsInDocumentOrder);
  return unique;
}


function getAssignmentDetailTaskRoot(marker) {
  if (!marker || !(marker instanceof Element)) return null;

  const scope = getAssignmentDetailScope(marker);
  const taskIndex = getAssignmentDetailTaskIndex(marker);

  if (!Number.isFinite(taskIndex) || taskIndex <= 0) {
    return null;
  }

  const orderedTaskRoots = collectOrderedTaskRootsForAssignmentDetails(scope);
  return orderedTaskRoots[taskIndex - 1] || null;
}

function getAssignmentDetailQuizRootFromTaskRoot(taskRoot, marker) {
  if (!taskRoot || !(taskRoot instanceof Element)) return null;

  if (taskRoot.classList && taskRoot.classList.contains("markerquiz")) {
    return getMarkerQuizLiaRoot(taskRoot) || taskRoot.querySelector(".lia-quiz") || null;
  }

  if (taskRoot.classList && taskRoot.classList.contains("orthography-wrap")) {
    return getOrthographyQuizRootFromWrap(taskRoot) || null;
  }

  if (taskRoot.classList && taskRoot.classList.contains("lia-dropdown")) {
    return getDropdownQuizRootFromDropdown(
      taskRoot,
      getAssignmentDetailScope(marker)
    ) || null;
  }

  if (taskRoot.classList && taskRoot.classList.contains("lia-quiz")) {
    return taskRoot;
  }

  const fractionQuiz = getFractionQuizRootFromRep(taskRoot);
  if (fractionQuiz) return fractionQuiz;

  const tileQuiz = getTileQuizInnerQuiz(taskRoot);
  if (tileQuiz) return tileQuiz;

  // WICHTIG:
  // Koordinatensystem-/Spezialmakros hängen ihren .lia-quiz-Block
  // oft nicht direkt in taskRoot, sondern nur als nahen Sibling.
  const nearbyFromTaskRoot = findNearbySiblingQuiz(taskRoot);
  if (nearbyFromTaskRoot) return nearbyFromTaskRoot;

  const nearbyFromMarker = findNearbySiblingQuiz(marker);
  if (nearbyFromMarker) return nearbyFromMarker;

  const normalized = normalizeActualQuizRoot(taskRoot);
  if (normalized && normalized !== taskRoot) {
    return normalized;
  }

  return null;
}



function getAssignmentDetailOwnerInfo(marker) {
  const taskRoot = getAssignmentDetailTaskRoot(marker);

  if (taskRoot) {
    const quizRoot =
      (taskRoot.matches && taskRoot.matches(".lia-quiz") ? taskRoot : null) ||
      taskRoot.querySelector(".lia-quiz") ||
      taskRoot;

    const control =
      (quizRoot && quizRoot.querySelector(".lia-quiz__control")) ||
      taskRoot.querySelector(".lia-quiz__control") ||
      null;

    const checkBtn =
      (control && control.querySelector(".lia-quiz__check")) ||
      (quizRoot && quizRoot.querySelector(".lia-quiz__check")) ||
      taskRoot.querySelector(".lia-quiz__check") ||
      null;

    if (control || checkBtn) {
      return {
        taskRoot: taskRoot,
        quizRoot: quizRoot,
        control:
          control ||
          (checkBtn
            ? (checkBtn.closest(".lia-quiz__control") || checkBtn.parentElement || checkBtn)
            : taskRoot),
        checkBtn: checkBtn || null
      };
    }
  }

  const fallbackCheckBtn = getLastQuizCheckBeforeMarker(marker);
  if (!fallbackCheckBtn) return null;

  return {
    taskRoot: null,
    quizRoot: fallbackCheckBtn.closest(".lia-quiz") || null,
    control:
      fallbackCheckBtn.closest(".lia-quiz__control") ||
      fallbackCheckBtn.parentElement ||
      fallbackCheckBtn,
    checkBtn: fallbackCheckBtn
  };
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
    cq: [],
    cv: [],
    gm: {
      h: []
    }
  };
}






function hasMeaningfulOutcomeState(state) {
  return !!(
    normalizeSpace(state && state.s || "") ||
    normalizeSpace(state && state.fc || "") ||
    Number(state && state.cc || 0) > 0
  );
}

function isDropdownPlaceholderValue(value) {
  const txt = normalizeSpace(value || "");
  return !txt || /^auswahl$/i.test(txt) || /^select$/i.test(txt) || /^choose$/i.test(txt);
}

function compactCommonStateMeta(src, out) {
  if (!src || !out) return out;

  if (Number(src.di || 0) > 0) {
    out.di = Number(src.di);
  }

  const be = Number(src.be);
  if (Number.isFinite(be) && be >= 0) {
    out.be = be;
  }

  const tags = getEvaluationStateTags(src);
  if (tags.length) {
    out.tg = tags.slice();
  }

  if (normalizeSpace(src.s || "")) {
    out.s = String(src.s);
  }

  if (normalizeSpace(src.fc || "")) {
    out.fc = String(src.fc);
  }

  if (Number(src.cc || 0) > 0) {
    out.cc = Number(src.cc);
  }

  return out;
}

function compactTextQuizStateForFreezeUrl(state) {
  if (!state) return null;

  const values = Array.isArray(state.v) ? state.v.slice() : [];
  const hasText = values.some(function (v) {
    return normalizeSpace(v || "") !== "";
  });

  const out = { k: state.k };

  const rootIndex = Number(state.ri);
  if (Number.isFinite(rootIndex) && rootIndex >= 0) {
    out.ri = rootIndex;
  }

  if (hasText) out.v = values;

  compactCommonStateMeta(state, out);

  if (!hasText && !hasMeaningfulOutcomeState(out)) {
    return null;
  }

  return out;
}

function compactDropdownStateForFreezeUrl(state) {
  if (!state) return null;

  const value = String(state.v || "");
  const hasChoice = !isDropdownPlaceholderValue(value);

  const out = { k: state.k };

  const rootIndex = Number(state.ri);
  if (Number.isFinite(rootIndex) && rootIndex >= 0) {
    out.ri = rootIndex;
  }

  if (hasChoice) out.v = value;

  compactCommonStateMeta(state, out);

  if (!hasChoice && !hasMeaningfulOutcomeState(out)) {
    return null;
  }

  return out;
}

function compactTileStateForFreezeUrl(state) {
  if (!state) return null;

  const values = Array.isArray(state.v) ? state.v.slice() : [];
  const hasPlacedTiles = values.some(function (v) {
    return normalizeSpace(v || "") !== "";
  });

  const out = { k: state.k };

  const rootIndex = Number(state.ri);
  if (Number.isFinite(rootIndex) && rootIndex >= 0) {
    out.ri = rootIndex;
  }

  if (hasPlacedTiles) out.v = values;

  compactCommonStateMeta(state, out);

  if (!hasPlacedTiles && !hasMeaningfulOutcomeState(out)) {
    return null;
  }

  return out;
}

function compactChoiceStateForFreezeUrl(state) {
  if (!state) return null;

  const values = Array.isArray(state.v) ? state.v.slice() : [];
  const hasSelection = values.some(function (v) {
    return !!Number(v);
  });

  const out = { k: state.k };

  const rootIndex = Number(state.ri);
  if (Number.isFinite(rootIndex) && rootIndex >= 0) {
    out.ri = rootIndex;
  }

  if (hasSelection) out.v = values;

  compactCommonStateMeta(state, out);

  if (!hasSelection && !hasMeaningfulOutcomeState(out)) {
    return null;
  }

  return out;
}

function compactOrthographyStateForFreezeUrl(state) {
  if (!state) return null;

  const text = String(state.v || "");
  const tries = Number(state.tr || 0) || 0;
  const solved = !!Number(state.sv || 0);

  const hasText = normalizeSpace(text) !== "";

  const out = {
    k: state.k,
    u: state.u
  };

  if (hasText) out.v = text;
  if (tries > 0) out.tr = tries;
  if (solved) out.sv = 1;

  compactCommonStateMeta(state, out);

  if (!hasText && tries <= 0 && !solved && !hasMeaningfulOutcomeState(out)) {
    return null;
  }

  return out;
}

function compactFractionStateForFreezeUrl(state) {
  if (!state) return null;

  const tp = String(state.tp || "");
  const mask = String(state.b || "");
  const hasMarkedParts = /1/.test(mask);

  const out = {
    k: state.k,
    u: state.u,
    tp: tp
  };

  if (tp === "c") {
    const n = Math.max(1, Number(state.n || 1) || 1);
    if (n !== 1) out.n = n;
  } else if (tp === "r") {
    const r = Math.max(1, Number(state.r || 1) || 1);
    const c = Math.max(1, Number(state.c || 1) || 1);

    if (r !== 1) out.r = r;
    if (c !== 1) out.c = c;
  }

  if (hasMarkedParts) {
    out.b = mask;
  }

  compactCommonStateMeta(state, out);

  const hasDimensionChange =
    Object.prototype.hasOwnProperty.call(out, "n") ||
    Object.prototype.hasOwnProperty.call(out, "r") ||
    Object.prototype.hasOwnProperty.call(out, "c");

  if (!hasMarkedParts && !hasDimensionChange && !hasMeaningfulOutcomeState(out)) {
    return null;
  }

  return out;
}

function compactMarkerQuizStateForFreezeUrl(state) {
  if (!state) return null;

  const marks = Array.isArray(state.h) ? copyJson(state.h) : [];
  const inputValue = String(state.iv || "");
  const hasMarks = marks.length > 0;
  const hasInputValue = normalizeSpace(inputValue) !== "";

  const out = {
    k: state.k,
    sc: state.sc
  };

  if (hasMarks) out.h = marks;
  if (hasInputValue) out.iv = inputValue;
  if (normalizeSpace(state.sl || "")) out.sl = String(state.sl);

  compactCommonStateMeta(state, out);

  if (!hasMarks && !hasInputValue && !hasMeaningfulOutcomeState(out)) {
    return null;
  }

  return out;
}

const CANVAS_CODEC_VERSION = "cv2";
const CANVAS_GRID_STEP = 2.25; // Punkte werden auf ein 2-Pixel-Raster quantisiert
const CANVAS_CONTENT_PAD = 10; // kleiner Sicherheitsrand, damit Linienenden nicht abgeschnitten werden
const CANVAS_EXTRA_HEIGHT = 10; // zusätzlicher Höhenspielraum gegen vertikale Scrollbar
const CANVAS_MIN_RAW_POINT_DIST_PX = 1.25; // sehr vorsichtiger Mindestabstand vor der Quantisierung
const CANVAS_COLLINEAR_TOL_PX = 1.05;      // fast-kollinear-Toleranz, ebenfalls vorsichtig
const CANVAS_USE_DOUGLAS_PEUCKER = true;
const CANVAS_DP_TOL_PX = 1.4;


function getCanvasDouglasPeuckerTolCells() {
  const px = Number(CANVAS_DP_TOL_PX || 0);
  if (!Number.isFinite(px) || px <= 0) return 0;
  return px / CANVAS_GRID_STEP;
}

function getCanvasPointSegmentDistanceCells(p, a, b) {
  if (!p || !a || !b) return 0;

  const px = Number(p[0]), py = Number(p[1]);
  const ax = Number(a[0]), ay = Number(a[1]);
  const bx = Number(b[0]), by = Number(b[1]);

  if (
    !Number.isFinite(px) || !Number.isFinite(py) ||
    !Number.isFinite(ax) || !Number.isFinite(ay) ||
    !Number.isFinite(bx) || !Number.isFinite(by)
  ) {
    return 0;
  }

  const abx = bx - ax;
  const aby = by - ay;
  const len2 = abx * abx + aby * aby;

  if (len2 <= 0) {
    const dx = px - ax;
    const dy = py - ay;
    return Math.sqrt(dx * dx + dy * dy);
  }

  let t = ((px - ax) * abx + (py - ay) * aby) / len2;
  if (t < 0) t = 0;
  if (t > 1) t = 1;

  const qx = ax + t * abx;
  const qy = ay + t * aby;

  const dx = px - qx;
  const dy = py - qy;

  return Math.sqrt(dx * dx + dy * dy);
}

function simplifyCanvasPointsDouglasPeucker(points, tolCells) {
  const src = Array.isArray(points) ? points : [];
  const tol = Number(tolCells || 0);

  if (src.length <= 2) return src.slice();
  if (!Number.isFinite(tol) || tol <= 0) return src.slice();

  const keep = new Array(src.length).fill(false);
  keep[0] = true;
  keep[src.length - 1] = true;

  function walk(startIdx, endIdx) {
    if (endIdx <= startIdx + 1) return;

    const a = src[startIdx];
    const b = src[endIdx];

    let maxDist = -1;
    let maxIdx = -1;

    for (let i = startIdx + 1; i < endIdx; i++) {
      const d = getCanvasPointSegmentDistanceCells(src[i], a, b);
      if (d > maxDist) {
        maxDist = d;
        maxIdx = i;
      }
    }

    if (maxIdx >= 0 && maxDist > tol) {
      keep[maxIdx] = true;
      walk(startIdx, maxIdx);
      walk(maxIdx, endIdx);
    }
  }

  walk(0, src.length - 1);

  const out = [];
  for (let i = 0; i < src.length; i++) {
    if (keep[i]) out.push(src[i]);
  }

  return out.length >= 2 ? out : src.slice();
}


function getCanvasRawPointXY(pt) {
  if (Array.isArray(pt) && pt.length >= 2) {
    const x = Number(pt[0]);
    const y = Number(pt[1]);
    return Number.isFinite(x) && Number.isFinite(y) ? [x, y] : null;
  }

  if (pt && typeof pt === "object") {
    const x = Number(pt.x);
    const y = Number(pt.y);
    return Number.isFinite(x) && Number.isFinite(y) ? [x, y] : null;
  }

  return null;
}

function canvasPointDist2(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}

function isCanvasMiddlePointAlmostCollinear(a, b, c) {
  if (!a || !b || !c) return false;

  const ax = Number(a[0]), ay = Number(a[1]);
  const bx = Number(b[0]), by = Number(b[1]);
  const cx = Number(c[0]), cy = Number(c[1]);

  if (
    !Number.isFinite(ax) || !Number.isFinite(ay) ||
    !Number.isFinite(bx) || !Number.isFinite(by) ||
    !Number.isFinite(cx) || !Number.isFinite(cy)
  ) {
    return false;
  }

  const acx = cx - ax;
  const acy = cy - ay;
  const len2 = acx * acx + acy * acy;

  if (len2 <= 0) {
    return bx === ax && by === ay;
  }

  // b muss zwischen a und c liegen
  const abx = bx - ax;
  const aby = by - ay;
  const dot = abx * acx + aby * acy;
  if (dot < 0 || dot > len2) return false;

  // senkrechter Abstand von b zur Geraden a-c
  const cross = Math.abs(acx * aby - acy * abx);
  const distCells = cross / Math.sqrt(len2);
  const tolCells = CANVAS_COLLINEAR_TOL_PX / CANVAS_GRID_STEP;

  return distCells <= tolCells;
}


// Kleine UID-Kompression:
// "slide_canvas" -> Zahl, solange canvasIndex klein genug ist.
// Beispiel bei Faktor 64:
// "1_0" -> 64
// "4_3" -> 259
const CANVAS_UID_PACK_FACTOR = 64;

function encodeCanvasUidForFreezeUrl(uid) {
  const txt = normalizeSpace(uid || "");
  const m = txt.match(/^(\d+)_(\d+)$/);

  if (!m) return txt;

  const slideIdx = Number(m[1]);
  const canvasIdx = Number(m[2]);

  if (!Number.isFinite(slideIdx) || !Number.isFinite(canvasIdx)) return txt;
  if (slideIdx < 1 || canvasIdx < 0) return txt;

  // Nur den kleinen, sicheren Standardfall packen.
  // Alles andere bleibt unverändert als String erhalten.
  if (canvasIdx >= CANVAS_UID_PACK_FACTOR) return txt;

  return slideIdx * CANVAS_UID_PACK_FACTOR + canvasIdx;
}

function decodeCanvasUidFromFreezeUrl(uid) {
  if (typeof uid === "number" && Number.isFinite(uid)) {
    const packed = Math.trunc(uid);

    if (packed >= CANVAS_UID_PACK_FACTOR) {
      const slideIdx = Math.floor(packed / CANVAS_UID_PACK_FACTOR);
      const canvasIdx = packed % CANVAS_UID_PACK_FACTOR;

      if (slideIdx >= 1 && canvasIdx >= 0) {
        return slideIdx + "_" + canvasIdx;
      }
    }

    return String(packed);
  }

  return String(uid || "");
}



function isCanvasCompactTupleState(state) {
  return Array.isArray(state) && state.length >= 1;
}

function getCanvasStateUidForFreezeUrl(state) {
  if (isCanvasCompactTupleState(state)) {
    return decodeCanvasUidFromFreezeUrl(state[0]);
  }

  if (state && typeof state === "object") {
    return decodeCanvasUidFromFreezeUrl(state.u);
  }

  return "";
}


function isCanvasStateMeaningfulForMerge(state) {
  const expanded = expandCanvasStateFromFreezeUrl(state) || state;

  if (!expanded || typeof expanded !== "object") {
    return false;
  }

  // sichtbare oder bewusst erhaltene Canvas-Größe => sinnvoller Zustand
  const w = Number(expanded.w || 0) || 0;
  const h = Number(expanded.h || 0) || 0;

  if (w > 0 || h > 0) {
    return true;
  }

  // neues/expandiertes Format
  if (Array.isArray(expanded.it) && expanded.it.length > 0) {
    return true;
  }

  // altes cv2-Format
  if (Array.isArray(expanded.i) && expanded.i.length > 0) {
    return true;
  }

  // ganz leer / unbrauchbar
  return false;
}

function mergeCanvasStatesPreferPreviousNonEmpty(prevStates, nextStates) {
  const prev = Array.isArray(prevStates) ? prevStates : [];
  const next = Array.isArray(nextStates) ? nextStates : [];

  if (!prev.length && !next.length) return [];
  if (!prev.length) return next.slice();
  if (!next.length) {
    return prev
      .filter(function (state) {
        return isCanvasStateMeaningfulForMerge(state);
      })
      .map(function (state) {
        return copyJson(state) || state;
      });
  }

  const prevByUid = Object.create(null);

  prev.forEach(function (state) {
    const uid = getCanvasStateUidForFreezeUrl(state);
    if (!uid) return;
    prevByUid[uid] = state;
  });

  const out = [];
  const seenUid = Object.create(null);

  next.forEach(function (state, idx) {
    const uid = getCanvasStateUidForFreezeUrl(state) || ("__idx__" + idx);
    const prevState = prevByUid[uid] || null;

    const nextMeaningful = isCanvasStateMeaningfulForMerge(state);
    const prevMeaningful = isCanvasStateMeaningfulForMerge(prevState);

    if (!nextMeaningful && prevMeaningful) {
      log(
        "canvas-merge-preserve",
        "uid=" + uid,
        "reason=current-empty-keep-previous"
      );
      out.push(copyJson(prevState) || prevState);
    } else {
      out.push(state);
    }

    seenUid[uid] = 1;
  });

  // Falls aktuelle Erfassung eine Canvas gar nicht mehr liefert,
  // den letzten sinnvollen Zustand trotzdem mitnehmen.
  prev.forEach(function (state, idx) {
    const uid = getCanvasStateUidForFreezeUrl(state) || ("__prev__" + idx);
    if (seenUid[uid]) return;
    if (!isCanvasStateMeaningfulForMerge(state)) return;

    log(
      "canvas-merge-carry",
      "uid=" + uid,
      "reason=missing-in-current"
    );

    out.push(copyJson(state) || state);
  });

  return out;
}


const CANVAS_FREEZE_PALETTE_VALUES = [
  "#ff0000", // 0 red
  "#ff7500", // 1 orange
  "#ffff00", // 2 yellow
  "#ff00ff", // 3 violett
  "#0055ff", // 4 blue
  "#00ffff", // 5 lightblue
  "#00ff00", // 6 green
  "#007500", // 7 darkgreen
  "#000000", // 8 black
  "#ffffff"  // 9 white
];

function normalizeCanvasStoredColor(value) {
  if (value == null) return "";

  let s = String(value).trim().toLowerCase();
  if (!s) return "";

  if (s === "#fff") return "#ffffff";
  if (s === "#000") return "#000000";

  // rgba(...)-Schreibweisen vereinheitlichen
  s = s.replace(/\s+/g, "");

  return s;
}

function encodeCanvasColorEntryForFreezeUrl(value) {
  const norm = normalizeCanvasStoredColor(value);
  if (!norm) return "";

  const idx = CANVAS_FREEZE_PALETTE_VALUES.indexOf(norm);
  if (idx >= 0) {
    return idx.toString(36);
  }

  // Fallback für nicht-palettierte Farben, z.B. rgba(0,0,0,0)
  return norm;
}

function decodeCanvasColorEntryFromFreezeUrl(value, fallbackColor) {
  const txt = normalizeCanvasStoredColor(value);

  if (!txt) {
    return fallbackColor;
  }

  // Neue kompakte 1-Zeichen-Codes
  if (/^[0-9a-z]$/i.test(txt)) {
    const idx = parseInt(txt, 36);
    if (
      Number.isFinite(idx) &&
      idx >= 0 &&
      idx < CANVAS_FREEZE_PALETTE_VALUES.length
    ) {
      return CANVAS_FREEZE_PALETTE_VALUES[idx];
    }
  }

  // Altformat oder Fallback-Rohwert
  return txt;
}

function internCanvasColorEntryForFreezeUrl(rawColor, colorList, colorIndex) {
  const stored = encodeCanvasColorEntryForFreezeUrl(rawColor);
  if (!stored) return -1;

  if (!Object.prototype.hasOwnProperty.call(colorIndex, stored)) {
    colorIndex[stored] = colorList.length;
    colorList.push(stored);
  }

  return colorIndex[stored];
}


function zigZagEncodeCanvasInt(n) {
  const v = Number(n);
  if (!Number.isFinite(v)) return 0;
  return v < 0 ? ((-v * 2) - 1) : (v * 2);
}

function zigZagDecodeCanvasInt(n) {
  const v = Number(n);
  if (!Number.isFinite(v)) return 0;
  return (v % 2 === 1) ? (-(v + 1) / 2) : (v / 2);
}

function encodeCanvasIntListToFreezeUrlString(nums) {
  const src = Array.isArray(nums) ? nums : [];
  if (!src.length) return "";

  const parts = [];

  for (let i = 0; i < src.length; i++) {
    const n = Number(src[i]);
    if (!Number.isFinite(n)) continue;

    const zz = zigZagEncodeCanvasInt(Math.trunc(n));
    parts.push(zz.toString(36));
  }

  return parts.join(".");
}

function decodeCanvasIntListFromFreezeUrlString(raw) {
  const txt = String(raw || "").trim();
  if (!txt) return [];

  return txt
    .split(".")
    .map(function (part) {
      const clean = String(part || "").trim();
      if (!clean) return null;

      const parsed = parseInt(clean, 36);
      if (!Number.isFinite(parsed)) return null;

      return zigZagDecodeCanvasInt(parsed);
    })
    .filter(function (v) {
      return v !== null;
    });
}








const CANVAS_CODEC_VERSION_V3 = "cv3";
const CANVAS_V3_PATH_MAGIC = 3;

function pushCanvasVarUint(bytes, value) {
  let v = Number(value);

  if (!Number.isFinite(v) || v < 0) {
    v = 0;
  }

  v = Math.trunc(v);

  while (v >= 0x80) {
    bytes.push((v & 0x7f) | 0x80);
    v = Math.floor(v / 128);
  }

  bytes.push(v);
}

function readCanvasVarUint(bytes, cursor) {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes || []);
  const cur = cursor && typeof cursor === "object" ? cursor : { i: 0 };

  let shift = 0;
  let value = 0;
  let steps = 0;

  while (cur.i < arr.length) {
    const byte = arr[cur.i++];
    value += (byte & 0x7f) * Math.pow(2, shift);

    if ((byte & 0x80) === 0) {
      return value;
    }

    shift += 7;
    steps += 1;

    if (steps > 10) {
      throw new Error("Canvas-VarUint ist unplausibel lang.");
    }
  }

  throw new Error("Canvas-VarUint unerwartet abgeschnitten.");
}

function encodeCanvasSignedIntsToBinaryTokenForFreezeUrl(nums) {
  const src = Array.isArray(nums) ? nums : [];
  const bytes = [];

  for (let i = 0; i < src.length; i++) {
    const n = Number(src[i]);
    if (!Number.isFinite(n)) continue;

    const zz = zigZagEncodeCanvasInt(Math.trunc(n));
    pushCanvasVarUint(bytes, zz);
  }

  return uint8ArrayToBase64Url(new Uint8Array(bytes));
}

function decodeCanvasSignedIntsFromBinaryTokenForFreezeUrl(token) {
  const bytes = base64UrlToUint8Array(String(token || ""));
  const cursor = { i: 0 };
  const out = [];

  while (cursor.i < bytes.length) {
    const zz = readCanvasVarUint(bytes, cursor);
    out.push(zigZagDecodeCanvasInt(zz));
  }

  return out;
}

function getCanvasQuantizedAbsPointsForFreezeUrl(points) {
  const abs = quantizeCanvasPathPointsForFreezeUrl(points);

  return abs.map(function (pt) {
    return [
      decodeCanvasPointNumberFromFreezeUrl(pt[0]),
      decodeCanvasPointNumberFromFreezeUrl(pt[1])
    ];
  });
}

function encodeCanvasPathPointsToBinaryTokenForFreezeUrl(points) {
  const abs = quantizeCanvasPathPointsForFreezeUrl(points);
  return encodeCanvasAbsPointsToBinaryTokenForFreezeUrl(abs);
}

function decodeCanvasPathPointsFromBinaryTokenForFreezeUrl(token) {
  const ints = decodeCanvasSignedIntsFromBinaryTokenForFreezeUrl(token);

  if (!ints.length) return [];

  const magic = Number(ints[0]);
  if (magic !== CANVAS_V3_PATH_MAGIC) {
    throw new Error("Canvas-cv3-Pfadtoken hat ungültige Magic.");
  }

  const pointCount = Math.max(0, Math.trunc(Number(ints[1] || 0)));
  if (pointCount < 2) return [];

  const out = [];
  let x = 0;
  let y = 0;
  let pos = 2;

  for (let i = 0; i < pointCount; i++) {
    const a = Number(ints[pos++]);
    const b = Number(ints[pos++]);

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      throw new Error("Canvas-cv3-Pfadtoken ist abgeschnitten.");
    }

    if (i === 0) {
      x = a;
      y = b;
    } else {
      x += a;
      y += b;
    }

    out.push([
      decodeCanvasPointNumberFromFreezeUrl(x),
      decodeCanvasPointNumberFromFreezeUrl(y)
    ]);
  }

  return out;
}

function runCanvasPathBinaryCodecSelfTest(samplePoints) {
  const sample = Array.isArray(samplePoints) && samplePoints.length
    ? samplePoints
    : [
        [10, 10],
        [12, 11],
        [14, 13],
        [18, 16],
        [22, 19],
        [28, 24]
      ];

  try {
    const oldToken = encodeCanvasPathPointsForFreezeUrl(sample);
    const newToken = encodeCanvasPathPointsToBinaryTokenForFreezeUrl(sample);
    const decoded = decodeCanvasPathPointsFromBinaryTokenForFreezeUrl(newToken);

    const expected = getCanvasQuantizedAbsPointsForFreezeUrl(sample);

    const ok =
      JSON.stringify(decoded) === JSON.stringify(expected);

    log(
      "canvas-cv3-self-test",
      "ok=" + (ok ? "1" : "0"),
      "oldChars=" + String(oldToken ? oldToken.length : 0),
      "newChars=" + String(newToken ? newToken.length : 0),
      "points=" + expected.length
    );

    if (!ok) {
      warn("canvas-cv3-self-test-mismatch");
    }

    return {
      ok: ok,
      oldChars: oldToken ? oldToken.length : 0,
      newChars: newToken ? newToken.length : 0,
      oldToken: oldToken,
      newToken: newToken,
      expected: expected,
      decoded: decoded
    };
  } catch (err) {
    warn(
      "canvas-cv3-self-test-failed",
      err && err.message ? err.message : err
    );

    return {
      ok: false,
      error: err && err.message ? err.message : String(err)
    };
  }
}







function isCanvasStateTrulyEmptyForFreezeUrl(state) {
  if (!state || typeof state !== "object") return false;

  const items = Array.isArray(state.it) ? state.it : [];
  const w = Number(state.w || 0) || 0;
  const h = Number(state.h || 0) || 0;

  return items.length === 0 && w === 0 && h === 0;
}

function encodeCanvasPointNumberForFreezeUrl(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return null;
  return Math.round(n / CANVAS_GRID_STEP);
}

function decodeCanvasPointNumberFromFreezeUrl(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return 0;
  return n * CANVAS_GRID_STEP;
}

function quantizeCanvasPathPointsForFreezeUrl(points) {
  const src = Array.isArray(points) ? points : [];
  const abs = [];

  const minDist2 = CANVAS_MIN_RAW_POINT_DIST_PX * CANVAS_MIN_RAW_POINT_DIST_PX;

  let lastAcceptedRawX = null;
  let lastAcceptedRawY = null;

  for (let i = 0; i < src.length; i++) {
    const raw = getCanvasRawPointXY(src[i]);
    if (!raw) continue;

    const rawX = raw[0];
    const rawY = raw[1];

    // 1. sehr kurze Rohsegmente schon vor der Quantisierung verwerfen
    if (lastAcceptedRawX !== null && lastAcceptedRawY !== null) {
      if (canvasPointDist2(rawX, rawY, lastAcceptedRawX, lastAcceptedRawY) < minDist2) {
        continue;
      }
    }

    const x = encodeCanvasPointNumberForFreezeUrl(rawX);
    const y = encodeCanvasPointNumberForFreezeUrl(rawY);

    if (x === null || y === null) continue;

    // 2. doppelte quantisierte Punkte entfernen
    if (abs.length) {
      const last = abs[abs.length - 1];
      if (last[0] === x && last[1] === y) {
        continue;
      }
    }

    abs.push([x, y]);
    lastAcceptedRawX = rawX;
    lastAcceptedRawY = rawY;

    // 3. fast-kollineare Zwischenpunkte entfernen
    while (abs.length >= 3) {
      const a = abs[abs.length - 3];
      const b = abs[abs.length - 2];
      const c = abs[abs.length - 1];

      if (isCanvasMiddlePointAlmostCollinear(a, b, c)) {
        abs.splice(abs.length - 2, 1);
      } else {
        break;
      }
    }
  }

  if (CANVAS_USE_DOUGLAS_PEUCKER && abs.length >= 3) {
    const tolCells = getCanvasDouglasPeuckerTolCells();
    if (tolCells > 0) {
      const beforeLen = abs.length;
      const simplified = simplifyCanvasPointsDouglasPeucker(abs, tolCells);
      const afterLen = Array.isArray(simplified) ? simplified.length : beforeLen;

      log(
        "canvas-dp",
        "before=" + beforeLen,
        "after=" + afterLen,
        "saved=" + Math.max(0, beforeLen - afterLen)
      );

      if (Array.isArray(simplified) && simplified.length >= 2) {
        return simplified;
      }
    }
  }

  return abs;
}




function encodeCanvasAbsPointsToFreezeUrlString(abs) {
  if (!Array.isArray(abs) || abs.length < 2) return null;

  const out = [];
  let prevX = 0;
  let prevY = 0;

  for (let i = 0; i < abs.length; i++) {
    const x = Number(abs[i] && abs[i][0]);
    const y = Number(abs[i] && abs[i][1]);

    if (!Number.isFinite(x) || !Number.isFinite(y)) continue;

    if (i === 0) {
      out.push(x, y);
    } else {
      out.push(x - prevX, y - prevY);
    }

    prevX = x;
    prevY = y;
  }

  return encodeCanvasIntListToFreezeUrlString(out);
}

function encodeCanvasAbsPointsToBinaryTokenForFreezeUrl(abs) {
  if (!Array.isArray(abs) || abs.length < 2) return null;

  const ints = [];
  let prevX = 0;
  let prevY = 0;

  ints.push(CANVAS_V3_PATH_MAGIC);
  ints.push(abs.length);

  for (let i = 0; i < abs.length; i++) {
    const x = Number(abs[i] && abs[i][0]);
    const y = Number(abs[i] && abs[i][1]);

    if (!Number.isFinite(x) || !Number.isFinite(y)) continue;

    if (i === 0) {
      ints.push(x, y);
    } else {
      ints.push(x - prevX, y - prevY);
    }

    prevX = x;
    prevY = y;
  }

  return encodeCanvasSignedIntsToBinaryTokenForFreezeUrl(ints);
}




function encodeCanvasPathPointsForFreezeUrl(points) {
  const abs = quantizeCanvasPathPointsForFreezeUrl(points);
  return encodeCanvasAbsPointsToFreezeUrlString(abs);
}

function decodeCanvasPathPointsFromFreezeUrl(encoded) {
  let src = [];

  // Neues kompaktes String-Format
  if (typeof encoded === "string") {
    src = decodeCanvasIntListFromFreezeUrlString(encoded);
  }
  // Altformat weiter unterstützen
  else if (Array.isArray(encoded)) {
    src = encoded.slice();
  }
  else {
    src = [];
  }

  const out = [];

  let x = 0;
  let y = 0;

  for (let i = 0; i + 1 < src.length; i += 2) {
    const a = Number(src[i]);
    const b = Number(src[i + 1]);

    if (!Number.isFinite(a) || !Number.isFinite(b)) continue;

    if (i === 0) {
      x = a;
      y = b;
    } else {
      x += a;
      y += b;
    }

    out.push([
      decodeCanvasPointNumberFromFreezeUrl(x),
      decodeCanvasPointNumberFromFreezeUrl(y)
    ]);
  }

  return out;
}

function compactCanvasPathItemForFreezeUrl(item, colorList, colorIndex) {
  if (!item || typeof item !== "object") return null;

  const kind = String(item.k || "");

  if (kind === "p") {
    const abs = quantizeCanvasPathPointsForFreezeUrl(item.p);

    if (!abs.length) return null;

    const ci = internCanvasColorEntryForFreezeUrl(
      String(item.c || "#000000"),
      colorList,
      colorIndex
    );

    if (ci < 0) return null;

    const alpha = Number(item.a == null ? 1 : item.a);
    const width = Number(item.w == null ? 1 : item.w);

    // Sonderfall: genau ein Punkt
    if (abs.length === 1) {
      const x = abs[0][0];
      const y = abs[0][1];

      if (alpha === 1) {
        // [type, colorIndex, width, x, y]
        return [2, ci, width, x, y];
      }

      // [type, colorIndex, alpha, width, x, y]
      return [2, ci, alpha, width, x, y];
    }

    const ptsV2 = encodeCanvasAbsPointsToFreezeUrlString(abs);
    const ptsV3 = encodeCanvasAbsPointsToBinaryTokenForFreezeUrl(abs);

    if (!ptsV2 && !ptsV3) return null;

    const useV3 =
      !!ptsV3 &&
      (!ptsV2 || ptsV3.length < ptsV2.length);

    const pts = useV3 ? ptsV3 : ptsV2;

    if (useV3) {
      log(
        "canvas-cv3-path",
        "points=" + abs.length,
        "v2=" + String(ptsV2 ? ptsV2.length : 0),
        "v3=" + String(ptsV3 ? ptsV3.length : 0)
      );
    }

    if (useV3) {
      if (alpha === 1) {
        // [type, colorIndex, width, binaryToken]
        return [3, ci, width, pts];
      }

      // [type, colorIndex, alpha, width, binaryToken]
      return [3, ci, alpha, width, pts];
    }

    if (alpha === 1) {
      // [type, colorIndex, width, encodedPoints]
      return [0, ci, width, pts];
    }

    // [type, colorIndex, alpha, width, encodedPoints]
    return [0, ci, alpha, width, pts];
  }

  if (kind === "r") {
    const fi = internCanvasColorEntryForFreezeUrl(
      String(item.f || "rgba(0,0,0,0)"),
      colorList,
      colorIndex
    );

    if (fi < 0) return null;

    const x = encodeCanvasPointNumberForFreezeUrl(item.x);
    const y = encodeCanvasPointNumberForFreezeUrl(item.y);
    const w = encodeCanvasPointNumberForFreezeUrl(item.w);
    const h = encodeCanvasPointNumberForFreezeUrl(item.h);

    if (x === null || y === null || w === null || h === null) {
      return null;
    }

    // [type, fillIndex, x, y, w, h]
    return [1, fi, x, y, w, h];
  }

  return null;
}


const CANVAS_PATH_RUN_ENTRY_TYPE = 4;

function getCanvasCompactPathRunMeta(entry) {
  if (!Array.isArray(entry) || !entry.length) return null;

  const type = Number(entry[0]);

  // Nur normale Pfade bündeln:
  // 0 = alter String-Pfad
  // 3 = binärer cv3-Pfad
  if (type !== 0 && type !== 3) return null;

  const colorIdx = Number(entry[1] || 0);

  if (entry.length === 4) {
    return {
      pathType: type,
      colorIdx: colorIdx,
      alpha: 1,
      width: Number(entry[2] || 1) || 1,
      token: entry[3]
    };
  }

  if (entry.length >= 5) {
    return {
      pathType: type,
      colorIdx: colorIdx,
      alpha: Number(entry[2] || 1) || 1,
      width: Number(entry[3] || 1) || 1,
      token: entry[4]
    };
  }

  return null;
}

function makeCanvasCompactPathRunTuple(meta, tokens) {
  if (!meta) return null;

  const list = (Array.isArray(tokens) ? tokens : []).filter(function (token) {
    return typeof token === "string" && token.length > 0;
  });

  if (!list.length) return null;

  // Einzelpfad nicht künstlich aufblasen
  if (list.length === 1) {
    if (meta.alpha === 1) {
      return [meta.pathType, meta.colorIdx, meta.width, list[0]];
    }

    return [meta.pathType, meta.colorIdx, meta.alpha, meta.width, list[0]];
  }

  // Neuer Run-Typ:
  // [4, pathType, colorIdx, width, [token1, token2, ...]]
  // [4, pathType, colorIdx, alpha, width, [token1, token2, ...]]
  if (meta.alpha === 1) {
    return [
      CANVAS_PATH_RUN_ENTRY_TYPE,
      meta.pathType,
      meta.colorIdx,
      meta.width,
      list
    ];
  }

  return [
    CANVAS_PATH_RUN_ENTRY_TYPE,
    meta.pathType,
    meta.colorIdx,
    meta.alpha,
    meta.width,
    list
  ];
}

function compactCanvasPathRunsForFreezeUrl(items) {
  const src = Array.isArray(items) ? items : [];
  if (!src.length) return [];

  const out = [];

  let runMeta = null;
  let runTokens = [];

  function flushRun() {
    if (!runMeta) return;

    const tuple = makeCanvasCompactPathRunTuple(runMeta, runTokens);
    if (tuple) {
      out.push(tuple);
    }

    runMeta = null;
    runTokens = [];
  }

  src.forEach(function (entry) {
    const meta = getCanvasCompactPathRunMeta(entry);

    if (!meta) {
      flushRun();
      out.push(entry);
      return;
    }

    const sameRun = !!(
      runMeta &&
      runMeta.pathType === meta.pathType &&
      runMeta.colorIdx === meta.colorIdx &&
      runMeta.alpha === meta.alpha &&
      runMeta.width === meta.width
    );

    if (!sameRun) {
      flushRun();
      runMeta = {
        pathType: meta.pathType,
        colorIdx: meta.colorIdx,
        alpha: meta.alpha,
        width: meta.width
      };
    }

    runTokens.push(meta.token);
  });

  flushRun();

  const beforeItems = src.length;
  const afterItems = out.length;

  if (afterItems < beforeItems) {
    const beforeChars = JSON.stringify(src).length;
    const afterChars = JSON.stringify(out).length;

    log(
      "canvas-run-pack",
      "beforeItems=" + beforeItems,
      "afterItems=" + afterItems,
      "savedItems=" + Math.max(0, beforeItems - afterItems),
      "beforeChars=" + beforeChars,
      "afterChars=" + afterChars
    );
  }

  return out;
}


function expandCanvasPathItemFromFreezeUrl(entry, colors) {
  if (!Array.isArray(entry) || !entry.length) return null;

  const type = Number(entry[0]);

  if (type === 0) {
    const colorIdx = Number(entry[1] || 0);

    const storedColor =
      colorIdx >= 0 && colorIdx < colors.length
        ? colors[colorIdx]
        : "#000000";

    const color = decodeCanvasColorEntryFromFreezeUrl(
      storedColor,
      "#000000"
    );

    if (entry.length === 4) {
      return {
        k: "p",
        c: color,
        a: 1,
        w: Number(entry[2] || 1) || 1,
        p: decodeCanvasPathPointsFromFreezeUrl(entry[3])
      };
    }

    if (entry.length >= 5) {
      return {
        k: "p",
        c: color,
        a: Number(entry[2] || 1) || 1,
        w: Number(entry[3] || 1) || 1,
        p: decodeCanvasPathPointsFromFreezeUrl(entry[4])
      };
    }

    return null;
  }

  if (type === 3) {
    const colorIdx = Number(entry[1] || 0);

    const storedColor =
      colorIdx >= 0 && colorIdx < colors.length
        ? colors[colorIdx]
        : "#000000";

    const color = decodeCanvasColorEntryFromFreezeUrl(
      storedColor,
      "#000000"
    );

    if (entry.length === 4) {
      return {
        k: "p",
        c: color,
        a: 1,
        w: Number(entry[2] || 1) || 1,
        p: decodeCanvasPathPointsFromBinaryTokenForFreezeUrl(entry[3])
      };
    }

    if (entry.length >= 5) {
      return {
        k: "p",
        c: color,
        a: Number(entry[2] || 1) || 1,
        w: Number(entry[3] || 1) || 1,
        p: decodeCanvasPathPointsFromBinaryTokenForFreezeUrl(entry[4])
      };
    }

    return null;
  }

  if (type === 1) {
    const fillIdx = Number(entry[1] || 0);

    const storedFill =
      fillIdx >= 0 && fillIdx < colors.length
        ? colors[fillIdx]
        : "rgba(0,0,0,0)";

    const fill = decodeCanvasColorEntryFromFreezeUrl(
      storedFill,
      "rgba(0,0,0,0)"
    );

    return {
      k: "r",
      f: fill,
      x: decodeCanvasPointNumberFromFreezeUrl(entry[2]),
      y: decodeCanvasPointNumberFromFreezeUrl(entry[3]),
      w: decodeCanvasPointNumberFromFreezeUrl(entry[4]),
      h: decodeCanvasPointNumberFromFreezeUrl(entry[5])
    };
  }

  if (type === 2) {
    const colorIdx = Number(entry[1] || 0);

    const storedColor =
      colorIdx >= 0 && colorIdx < colors.length
        ? colors[colorIdx]
        : "#000000";

    const color = decodeCanvasColorEntryFromFreezeUrl(
      storedColor,
      "#000000"
    );

    if (entry.length === 5) {
      return {
        k: "p",
        c: color,
        a: 1,
        w: Number(entry[2] || 1) || 1,
        p: [[
          decodeCanvasPointNumberFromFreezeUrl(entry[3]),
          decodeCanvasPointNumberFromFreezeUrl(entry[4])
        ]]
      };
    }

    if (entry.length >= 6) {
      return {
        k: "p",
        c: color,
        a: Number(entry[2] || 1) || 1,
        w: Number(entry[3] || 1) || 1,
        p: [[
          decodeCanvasPointNumberFromFreezeUrl(entry[4]),
          decodeCanvasPointNumberFromFreezeUrl(entry[5])
        ]]
      };
    }

    return null;
  }

  return null;
}


function measureCanvasContentBoundsForFreezeUrl(items) {
  const src = Array.isArray(items) ? items : [];

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  function addPoint(x, y, pad) {
    const nx = Number(x);
    const ny = Number(y);
    const np = Number(pad || 0);

    if (!Number.isFinite(nx) || !Number.isFinite(ny)) return;

    const p = Number.isFinite(np) ? np : 0;

    minX = Math.min(minX, nx - p);
    minY = Math.min(minY, ny - p);
    maxX = Math.max(maxX, nx + p);
    maxY = Math.max(maxY, ny + p);
  }

  src.forEach(function (item) {
    if (!item || typeof item !== "object") return;

    if (item.k === "p") {
      const pts = Array.isArray(item.p) ? item.p : [];
      const halfStroke = Math.max(0.5, (Number(item.w || 1) || 1) / 2);

      pts.forEach(function (pt) {
        if (!Array.isArray(pt) || pt.length < 2) return;
        addPoint(pt[0], pt[1], halfStroke);
      });

      return;
    }

    if (item.k === "r") {
      const x = Number(item.x || 0) || 0;
      const y = Number(item.y || 0) || 0;
      const w = Number(item.w || 0) || 0;
      const h = Number(item.h || 0) || 0;

      addPoint(x, y, 0);
      addPoint(x + w, y + h, 0);
    }
  });

  if (
    !Number.isFinite(minX) ||
    !Number.isFinite(minY) ||
    !Number.isFinite(maxX) ||
    !Number.isFinite(maxY)
  ) {
    return null;
  }

  let requiredWidth = Math.ceil(maxX + CANVAS_CONTENT_PAD);
  let requiredHeight = Math.ceil(maxY + CANVAS_CONTENT_PAD + CANVAS_EXTRA_HEIGHT);

  // Falls doch mal negative Koordinaten vorkommen, nicht zu knapp werden
  if (minX < 0) {
    requiredWidth = Math.max(
      requiredWidth,
      Math.ceil((maxX - minX) + CANVAS_CONTENT_PAD * 2)
    );
  }

  if (minY < 0) {
    requiredHeight = Math.max(
      requiredHeight,
      Math.ceil((maxY - minY) + CANVAS_CONTENT_PAD * 2)
    );
  }

  return {
    minX: minX,
    minY: minY,
    maxX: maxX,
    maxY: maxY,
    width: Math.max(0, requiredWidth),
    height: Math.max(0, requiredHeight)
  };
}

function normalizeCanvasSizeToContentForFreezeUrl(state) {
  const expanded = expandCanvasStateFromFreezeUrl(state) || copyJson(state);

  if (!expanded || typeof expanded !== "object") {
    return null;
  }

  const bounds = measureCanvasContentBoundsForFreezeUrl(expanded.it);
  if (!bounds) {
    return expanded;
  }

  const currentW = Number(expanded.w || 0) || 0;
  const currentH = Number(expanded.h || 0) || 0;

  expanded.w = Math.max(currentW, bounds.width);
  expanded.h = Math.max(currentH, bounds.height);

  return expanded;
}


function compactSingleCanvasStateForFreezeUrl(state) {
  if (!state || typeof state !== "object") return null;

  const normalized = normalizeCanvasSizeToContentForFreezeUrl(state);
  if (!normalized || typeof normalized !== "object") return null;

  // Nur wirklich komplett leere Canvas verwerfen
  if (isCanvasStateTrulyEmptyForFreezeUrl(normalized)) {
    return null;
  }

  const items = Array.isArray(normalized.it) ? normalized.it : [];

  log(
    "canvas-raw-items",
    "uid=" + String(normalized.u || ""),
    "items=" + items.length,
    items.map(function (it, i) {
      return (
        "[" + i + "]" +
        " k=" + String(it && it.k || "") +
        " c=" + String(it && it.c || "") +
        " a=" + String(it && it.a == null ? 1 : it.a) +
        " w=" + String(it && it.w == null ? 1 : it.w) +
        " pts=" + (Array.isArray(it && it.p) ? it.p.length : 0)
      );
    }).join(" || ")
  );

  const colorList = [];
  const colorIndex = Object.create(null);
  const compactItems = [];

  for (let i = 0; i < items.length; i++) {
    const compactItem = compactCanvasPathItemForFreezeUrl(
      items[i],
      colorList,
      colorIndex
    );

    // Unbekannten Typ lieber roh behalten als kaputt komprimieren
    if (!compactItem) {
      return copyJson(normalized);
    }

    compactItems.push(compactItem);
  }

  const uid = encodeCanvasUidForFreezeUrl(normalized.u);
  const currentW = Number(normalized.w || 0) || 0;
  const currentH = Number(normalized.h || 0) || 0;
  const emptyFlag = Number(normalized.e || 0) === 1 ? 1 : 0;

  let storedW = currentW;
  let storedH = currentH;

  // Neuer Canvas-Minischritt:
  // Bei Canvas MIT Inhalt speichern wir nicht mehr absolute Größe,
  // sondern die Zusatzgröße über die minimale Inhaltsfläche hinaus.
  // Kodierung:
  //   -1  => exakt Mindestgröße
  //   -N  => Mindestgröße + (N-1) Pixel
  //
  // Altlinks mit positiven absoluten w/h bleiben beim Expand kompatibel.
  if (compactItems.length > 0) {
    const bounds = measureCanvasContentBoundsForFreezeUrl(normalized.it);

    if (bounds) {
      const extraW = Math.max(0, currentW - bounds.width);
      const extraH = Math.max(0, currentH - bounds.height);

      storedW = -(extraW + 1);
      storedH = -(extraH + 1);
    }
  }

  const packedItems = compactCanvasPathRunsForFreezeUrl(compactItems);

  const out = [
    uid,
    storedW,
    storedH,
    colorList.length ? colorList : 0,
    packedItems.length ? packedItems : 0,
    emptyFlag
  ];

  // unnötige Null-Enden abschneiden
  while (out.length > 1) {
    const last = out[out.length - 1];

    if (last === 0) {
      out.pop();
      continue;
    }

    if (Array.isArray(last) && last.length === 0) {
      out.pop();
      continue;
    }

    break;
  }

  return out;
}



function expandCanvasPathEntriesFromFreezeUrl(entry, colors) {
  if (!Array.isArray(entry) || !entry.length) return [];

  const type = Number(entry[0]);

  // Neuer Run-Typ
  if (type === CANVAS_PATH_RUN_ENTRY_TYPE) {
    const pathType = Number(entry[1] || 0);
    const colorIdx = Number(entry[2] || 0);

    const storedColor =
      colorIdx >= 0 && colorIdx < colors.length
        ? colors[colorIdx]
        : "#000000";

    const color = decodeCanvasColorEntryFromFreezeUrl(
      storedColor,
      "#000000"
    );

    let alpha = 1;
    let width = 1;
    let tokens = [];

    if (entry.length === 5) {
      width = Number(entry[3] || 1) || 1;
      tokens = Array.isArray(entry[4]) ? entry[4] : [];
    } else if (entry.length >= 6) {
      alpha = Number(entry[3] || 1) || 1;
      width = Number(entry[4] || 1) || 1;
      tokens = Array.isArray(entry[5]) ? entry[5] : [];
    } else {
      return [];
    }

    return tokens.map(function (token) {
      let points = null;

      try {
        if (pathType === 3) {
          points = decodeCanvasPathPointsFromBinaryTokenForFreezeUrl(token);
        } else if (pathType === 0) {
          points = decodeCanvasPathPointsFromFreezeUrl(token);
        } else {
          return null;
        }
      } catch (err) {
        warn(
          "canvas-run-expand-failed",
          err && err.message ? err.message : err
        );
        return null;
      }

      if (!Array.isArray(points) || !points.length) {
        return null;
      }

      return {
        k: "p",
        c: color,
        a: alpha,
        w: width,
        p: points
      };
    }).filter(Boolean);
  }

  // Altformate bleiben unverändert
  const single = expandCanvasPathItemFromFreezeUrl(entry, colors);
  return single ? [single] : [];
}



function expandCanvasStateFromFreezeUrl(state) {
  if (!state || typeof state !== "object") return null;

  // Neues kompaktes Tuple-Format:
  // [u, w, h, c, i, e]
  //
  // Kompatibilität:
  // - w/h >= 0  => altes absolutes Format
  // - w/h < 0   => neues Delta-Format relativ zur Inhaltsmindestgröße
  if (isCanvasCompactTupleState(state)) {
    const colors = Array.isArray(state[3])
      ? state[3].map(function (c) { return String(c || "#000000"); })
      : [];

    const items = [];
    (Array.isArray(state[4]) ? state[4] : []).forEach(function (entry) {
      const expanded = expandCanvasPathEntriesFromFreezeUrl(entry, colors);
      if (expanded && expanded.length) {
        items.push.apply(items, expanded);
      }
    });

    const rawW = Number(state[1] || 0) || 0;
    const rawH = Number(state[2] || 0) || 0;

    let width = rawW;
    let height = rawH;

    // Neues Delta-Format dekodieren:
    // -1  => exakt Mindestgröße
    // -6  => Mindestgröße + 5 px
    if (rawW < 0 || rawH < 0) {
      const bounds = measureCanvasContentBoundsForFreezeUrl(items) || {
        width: 0,
        height: 0
      };

      if (rawW < 0) {
        width = bounds.width + Math.max(0, (-rawW) - 1);
      }

      if (rawH < 0) {
        height = bounds.height + Math.max(0, (-rawH) - 1);
      }
    }

    const out = {
      v: "cvf1",
      u: decodeCanvasUidFromFreezeUrl(state[0]),
      w: width,
      h: height,
      bg: { m: "none" },
      it: items
    };

    if (Number(state[5] || 0) === 1) {
      out.e = 1;
    }

    return out;
  }

  // Alte rohe cvf1-Einträge unverändert weiter unterstützen
  if (state.v !== CANVAS_CODEC_VERSION) {
    return copyJson(state);
  }

  const colors = Array.isArray(state.c)
    ? state.c.map(function (c) { return String(c || "#000000"); })
    : [];

  const items = [];
  (Array.isArray(state.i) ? state.i : []).forEach(function (entry) {
    const expanded = expandCanvasPathEntriesFromFreezeUrl(entry, colors);
    if (expanded && expanded.length) {
      items.push.apply(items, expanded);
    }
  });

  const out = {
    v: "cvf1",
    u: decodeCanvasUidFromFreezeUrl(state.u),
    w: Number(state.w || 0) || 0,
    h: Number(state.h || 0) || 0,
    bg: { m: "none" },
    it: items
  };

  if (Number(state.e || 0) === 1) {
    out.e = 1;
  }

  return out;
}

function compactCanvasStatesForFreezeUrl(states) {
  if (!Array.isArray(states) || !states.length) return [];

  const compacted = states
    .map(function (state) {
      return compactSingleCanvasStateForFreezeUrl(state);
    })
    .filter(Boolean);

  log(
    "canvas-compact",
    "before=" + states.length,
    "after=" + compacted.length,
    "removed=" + Math.max(0, states.length - compacted.length)
  );

  return compacted;
}

function compactGeneralMarkerStateForFreezeUrl(state) {
  if (!state || !Array.isArray(state.h) || !state.h.length) {
    return null;
  }

  const out = {
    h: copyJson(state.h)
  };

  if (Array.isArray(state.p) && state.p.length) {
    out.p = state.p.slice();
  }

  return out;
}

function compactStateArrayForFreezeUrl(states, mapper) {
  if (!Array.isArray(states) || !states.length) return [];
  return states.map(mapper).filter(Boolean);
}

function compactSlideStateForFreezeUrl(slide) {
  if (!slide || !slide.h) return null;

  const out = {
    h: String(slide.h)
  };

  const q = compactStateArrayForFreezeUrl(slide.q, compactTextQuizStateForFreezeUrl);
  const d = compactStateArrayForFreezeUrl(slide.d, compactDropdownStateForFreezeUrl);
  const m = compactStateArrayForFreezeUrl(slide.m, compactTileStateForFreezeUrl);
  const c = compactStateArrayForFreezeUrl(slide.c, compactChoiceStateForFreezeUrl);
  const o = compactStateArrayForFreezeUrl(slide.o, compactOrthographyStateForFreezeUrl);
  const fq = compactStateArrayForFreezeUrl(slide.fq, compactFractionStateForFreezeUrl);
  const mq = compactStateArrayForFreezeUrl(slide.mq, compactMarkerQuizStateForFreezeUrl);
  const cq = compactStateArrayForFreezeUrl(slide.cq, compactCoordinateQuizStateForFreezeUrl);
  const cv = compactCanvasStatesForFreezeUrl(slide.cv);
  const gm = compactGeneralMarkerStateForFreezeUrl(slide.gm);

  if (q.length) out.q = q;
  if (d.length) out.d = d;
  if (m.length) out.m = m;
  if (c.length) out.c = c;
  if (o.length) out.o = o;
  if (fq.length) out.fq = fq;
  if (mq.length) out.mq = mq;
  if (cq.length) out.cq = cq;
  if (cv.length) out.cv = cv;
  if (gm) out.gm = gm;

  if (Object.keys(out).length === 1) {
    return null;
  }

  return out;
}


const ANNOT_CODEC_VERSION = "af2";
const ANNOT_POINT_SCALE = 1000; // verlustfrei relativ zum aktuellen Freeze-Export (4 Nachkommastellen)

function roundAnnotCodecNum(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return null;
  return Math.round(n * 10000) / 10000;
}

function encodeAnnotationSlideKeyForFreezeUrl(hash) {
  const m = String(hash || "").match(/^#(\d+)$/);
  if (m) return Number(m[1]);
  return String(hash || "");
}

function decodeAnnotationSlideKeyFromFreezeUrl(key) {
  if (typeof key === "number" && Number.isFinite(key)) {
    return "#" + String(Math.max(1, Math.round(key)));
  }

  const txt = String(key || "");
  if (/^\d+$/.test(txt)) {
    return "#" + txt;
  }

  return txt;
}

function encodeAnnotationPointsForFreezeUrl(points) {
  const src = Array.isArray(points) ? points : [];
  const out = [];

  let prevX = 0;
  let prevY = 0;
  let havePrev = false;

  for (let i = 0; i < src.length; i++) {
    const pt = src[i];
    if (!pt || typeof pt !== "object") continue;

    const xNum = Number(pt.x);
    const yNum = Number(pt.y);
    if (!Number.isFinite(xNum) || !Number.isFinite(yNum)) continue;

    const x = Math.round(xNum * ANNOT_POINT_SCALE);
    const y = Math.round(yNum * ANNOT_POINT_SCALE);

    if (!havePrev) {
      out.push(x, y);
      prevX = x;
      prevY = y;
      havePrev = true;
      continue;
    }

    out.push(x - prevX, y - prevY);
    prevX = x;
    prevY = y;
  }

  return out.length >= 2 ? out : null;
}

function decodeAnnotationPointsFromFreezeUrl(encoded) {
  const src = Array.isArray(encoded) ? encoded : [];
  const out = [];

  let x = 0;
  let y = 0;

  for (let i = 0; i + 1 < src.length; i += 2) {
    const a = Number(src[i]);
    const b = Number(src[i + 1]);

    if (!Number.isFinite(a) || !Number.isFinite(b)) continue;

    if (i === 0) {
      x = a;
      y = b;
    } else {
      x += a;
      y += b;
    }

    out.push({
      x: x / ANNOT_POINT_SCALE,
      y: y / ANNOT_POINT_SCALE
    });
  }

  return out;
}

function compressAnnotationFreezeStateForFreezeUrl(fullState) {
  if (!fullState || typeof fullState !== "object") return null;

  // Bereits komprimiert -> nur kopieren
  if (fullState.v === ANNOT_CODEC_VERSION && Array.isArray(fullState.s)) {
    return copyJson(fullState);
  }

  const slidesSrc =
    fullState.slides && typeof fullState.slides === "object"
      ? fullState.slides
      : null;

  const colorList = [];
  const colorIndex = Object.create(null);

  function internColor(raw) {
    const color = String(raw || "#ff0000");

    if (!Object.prototype.hasOwnProperty.call(colorIndex, color)) {
      colorIndex[color] = colorList.length;
      colorList.push(color);
    }

    return colorIndex[color];
  }

  const slidesOut = [];

  if (slidesSrc) {
    Object.keys(slidesSrc)
      .sort(function (a, b) {
        return hashSort({ h: a }, { h: b });
      })
      .forEach(function (hash) {
        const slide = slidesSrc[hash];
        const itemsSrc = Array.isArray(slide && slide.items) ? slide.items : [];

        const itemsOut = itemsSrc.map(function (item) {
          if (!item || typeof item !== "object") return null;
          if (item.kind !== "path") return null;

          const pts = encodeAnnotationPointsForFreezeUrl(item.points);
          if (!pts) return null;

          return [
            item.tool === "eraser" ? 1 : 0,
            internColor(item.color),
            roundAnnotCodecNum(item.width == null ? 1 : item.width),
            roundAnnotCodecNum(item.alpha == null ? 1 : item.alpha),
            roundAnnotCodecNum(item.baseW == null ? 1 : item.baseW),
            pts
          ];
        }).filter(Boolean);

        if (!itemsOut.length) return;

        slidesOut.push([
          encodeAnnotationSlideKeyForFreezeUrl(hash),
          itemsOut
        ]);
      });
  }

  const out = {
    v: ANNOT_CODEC_VERSION
  };

  if (slidesOut.length) {
    out.s = slidesOut;
  }

  if (colorList.length) {
    out.c = colorList;
  }

  if (fullState.ui && fullState.ui.visible === false) {
    out.u = 0;
  }

  if ((!out.s || !out.s.length) && out.u !== 0) {
    return null;
  }

  return out;
}

function expandAnnotationFreezeStateFromFreezeUrl(state) {
  if (!state || typeof state !== "object") return null;

  // Altes Format unverändert weiter unterstützen
  if (!(state.v === ANNOT_CODEC_VERSION && Array.isArray(state.s))) {
    return copyJson(state);
  }

  const colors = Array.isArray(state.c)
    ? state.c.map(function (c) { return String(c || "#ff0000"); })
    : [];

  const slides = Object.create(null);

  state.s.forEach(function (entry) {
    if (!Array.isArray(entry) || entry.length < 2) return;

    const hash = decodeAnnotationSlideKeyFromFreezeUrl(entry[0]);
    if (!hash) return;

    const itemTuples = Array.isArray(entry[1]) ? entry[1] : [];

    const items = itemTuples.map(function (tuple) {
      if (!Array.isArray(tuple) || tuple.length < 6) return null;

      const toolCode = Number(tuple[0] || 0);
      const colorIdx = Number(tuple[1] || 0);

      const width = roundAnnotCodecNum(tuple[2]);
      const alpha = roundAnnotCodecNum(tuple[3]);
      const baseW = roundAnnotCodecNum(tuple[4]);
      const points = decodeAnnotationPointsFromFreezeUrl(tuple[5]);

      if (!points.length) return null;

      return {
        kind: "path",
        tool: toolCode === 1 ? "eraser" : "pen",
        color:
          colorIdx >= 0 && colorIdx < colors.length
            ? colors[colorIdx]
            : "#ff0000",
        width: width === null ? 1 : width,
        alpha: alpha === null ? 1 : alpha,
        baseW: baseW === null ? 1 : baseW,
        points: points
      };
    }).filter(Boolean);

    if (!items.length) return;

    slides[hash] = {
      items: items,
      redo: []
    };
  });

  return {
    version: "lia-annotation-freeze-v1",
    ui: {
      visible: state.u === 0 ? false : true
    },
    slides: slides
  };
}


function shouldKeepAnnotationFreezeState(state) {
  if (!state || typeof state !== "object") return false;

  if (countAnnotationItemsInFreezePayload(state) > 0) {
    return true;
  }

  if (state.v === ANNOT_CODEC_VERSION) {
    return state.u === 0;
  }

  if (state.ui && state.ui.visible === false) {
    return true;
  }

  return false;
}



function compactSecurityStateForFreezeUrl(state) {
  const f12 = Number(state && state.f12 || 0) || 0;
  const tab = Number(state && state.tab || 0) || 0;

  if (f12 <= 0 && tab <= 0) {
    return null;
  }

  const out = {};
  if (f12 > 0) out.f12 = f12;
  if (tab > 0) out.tab = tab;

  return out;
}

function compactPayloadForFreezeUrl(payload) {
  const out = {
    v: String(payload && payload.v || PAYLOAD_VERSION),
    sh: cleanHashValue(payload && payload.sh || "#1"),
    s: []
  };

  const name = normalizeSpace(payload && payload.n || "");
  if (name) {
    out.n = name;
  }

  const slides = Array.isArray(payload && payload.s) ? payload.s : [];
  out.s = slides.map(compactSlideStateForFreezeUrl).filter(Boolean);

  const compactAf = compressAnnotationFreezeStateForFreezeUrl(payload && payload.af);

  if (shouldKeepAnnotationFreezeState(compactAf)) {
    out.af = compactAf;
  }

  // anv wird für neue Links nicht mehr separat serialisiert,
  // weil af2 die Sichtbarkeit bereits selbst trägt.
  // Altlinks bleiben über buildAnnotationFreezeImportPayloadFromSnapshot kompatibel.

  const sec = compactSecurityStateForFreezeUrl(payload && payload.sec);
  if (sec) {
    out.sec = sec;
  }

  return out;
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

  const annotationFullState = await captureFullAnnotationFreezeState();

  payload.af = annotationFullState;
  payload.anv = getAnnotationFreezeVisibleFlag(annotationFullState);
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
    ri: Number(idx || 0),
    v: inputs.map(function (el) {
      return el.checked ? 1 : 0;
    })
  };
  applyAssignmentMetaToState(out, root);

  const stateCode = detectQuizState(root);
  const feedbackCode = detectFeedbackCode(feedback);
  const checkCount = getQuizCheckCount(root);

  if (stateCode) out.s = stateCode;
  if (feedbackCode) out.fc = feedbackCode;
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
      return "[" + idx + "] " + states.map(function (state, idx) {
        return "[" + idx + "] " + JSON.stringify(state.k || "") + " ri=" + String(
          Number.isFinite(Number(state && state.ri)) ? Number(state.ri) : "-"
        );
      }).join(" || ");
    }).join(" || ")
  );

  states.forEach(function (state, idx) {
    let target = null;
    const wantedKey = normalizeSpace(state && state.k || "");
    const wantedRootIndex = Number(state && state.ri);

    if (
      Number.isFinite(wantedRootIndex) &&
      wantedRootIndex >= 0 &&
      wantedRootIndex < liveRoots.length &&
      !used.has(liveRoots[wantedRootIndex])
    ) {
      target = liveRoots[wantedRootIndex];
    }

    if (!target && wantedKey) {
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
  if (!rep) return null;

  const host = getContentHost() || document.body;
  const seeds = uniqueElements([
    getFractionWidgetFromRep(rep),
    getFractionFirstRangeWrap(rep),
    getFractionLastRangeWrap(rep),
    rep
  ]).filter(function (el) {
    return el instanceof Element;
  });

  function pickQuiz(node) {
    if (!node || !(node instanceof Element)) return null;

    if (node.classList && node.classList.contains("lia-quiz")) {
      return node;
    }

    const nestedQuiz = node.querySelector(".lia-quiz");
    if (nestedQuiz) return nestedQuiz;

    if (node.querySelector(".lia-quiz__check") || node.querySelector(".lia-quiz__feedback")) {
      return node;
    }

    return null;
  }

  for (let s = 0; s < seeds.length; s++) {
    let node = seeds[s];
    let hops = 0;

    while (node && hops < 12) {
      const quiz = pickQuiz(node);
      if (quiz) return quiz;

      node = node.nextElementSibling;
      hops += 1;
    }
  }

  for (let s = 0; s < seeds.length; s++) {
    let node = seeds[s];
    let hops = 0;

    while (node && node !== host && hops < 10) {
      const quiz = pickQuiz(node);
      if (quiz) return quiz;

      node = node.parentElement;
      hops += 1;
    }
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
  const checkCount = getQuizCheckCount(quizRoot);

  if (stateCode) out.s = stateCode;
  if (feedbackCode) out.fc = feedbackCode;
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
      return "[" + idx + "] " + JSON.stringify(state.k || "") + " ri=" + String(
        Number.isFinite(Number(state && state.ri)) ? Number(state.ri) : "-"
      );
    }).join(" || ")
  );

  states.forEach(function (state, idx) {
    let target = null;
    const wantedUid = normalizeSpace(getCanvasStateUidForFreezeUrl(state));
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
  const checkCount = getQuizCheckCount(liaRoot);

  if (stateCode) out.s = stateCode;
  if (feedbackCode) out.fc = feedbackCode;
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
  const checkCount = getQuizCheckCount(quizRoot);

  if (stateCode) out.s = stateCode;
  if (feedbackCode) out.fc = feedbackCode;
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
    const wantedUid = normalizeSpace(getCanvasStateUidForFreezeUrl(state));
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

  // Bereits separat behandelte Quizfamilien NICHT als normales Textquiz zählen
  if (el.closest && el.closest(".markerquiz")) return false;
  if (el.closest && el.closest(".orthography-wrap")) return false;
  if (el.closest && el.closest(".lia-dropdown")) return false;
  if (el.closest && el.closest(".hlq-proxy")) return false;
  if (el.closest && el.closest(".hlq-lia")) return false;
  if (el.closest && el.closest(".lia-hl-target")) return false;
  if (el.closest && el.closest(".lia-hl-prefill")) return false;
  if (el.closest && el.closest(".fq-widget")) return false;
  if (el.closest && el.closest(".fq-range")) return false;

  if (findTileQuizInteractiveAncestor(el)) return false;
  if (isFractionRangeInput(el)) return false;

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


function getNearestQuizAncestorId(root) {
  let node = root instanceof Element ? root : null;
  let hops = 0;

  while (node && hops < 6) {
    const id = normalizeSpace(node.id || "");
    if (id) return id;
    node = node.parentElement;
    hops += 1;
  }

  return "";
}

function isPureResultQuizRoot(root) {
  if (!root || !(root instanceof Element)) return false;
  if (!root.classList || !root.classList.contains("lia-quiz")) return false;

  if (root.closest("#lia-freeze-bar")) return false;
  if (root.closest(".lia-submit-box")) return false;

  if (!isRenderedElement(root) && !hasRenderedSelfOrDescendant(root)) {
    return false;
  }

  // Keine normalen Texteingaben
  if (getTextQuizInputsFromRoot(root).length > 0) return false;

  // Keine anderen bereits separat behandelten Quizfamilien
  if (getDropdownQuizControlsFromRoot(root).length > 0) return false;
  if (getTileQuizTargetsFromRoot(root).length > 0) return false;
  if (getChoiceQuizInputsFromRoot(root).length > 0) return false;
  if (collectOrthographyQuizRootsFromRoot(root).length > 0) return false;
  if (collectFractionQuizRootsFromRoot(root).length > 0) return false;
  if (collectMarkerQuizRootsFromRoot(root).length > 0) return false;

  // Es muss überhaupt wie ein Lia-Quiz aussehen
  return !!root.querySelector(".lia-quiz__check, .lia-quiz__resolve, .lia-quiz__feedback");
}


function getCommonAncestorElement(nodes) {
  const list = (Array.isArray(nodes) ? nodes : []).filter(function (n) {
    return n instanceof Element;
  });

  if (!list.length) return null;

  let ancestor = list[0];

  while (ancestor) {
    let ok = true;

    for (let i = 1; i < list.length; i++) {
      if (!ancestor.contains(list[i])) {
        ok = false;
        break;
      }
    }

    if (ok) return ancestor;
    ancestor = ancestor.parentElement;
  }

  return null;
}

function getNextQuizControlAfterElement(el, host) {
  const scope = host || getContentHost() || document.body;
  if (!scope || !el) return null;

  const controls = Array.from(
    scope.querySelectorAll(".lia-quiz__check, .lia-quiz__resolve")
  ).filter(function (btn) {
    if (!(btn instanceof Element)) return false;
    if (btn.closest("#lia-freeze-bar")) return false;
    if (btn.closest(".lia-submit-box")) return false;
    return true;
  });

  let best = null;

  controls.forEach(function (btn) {
    if (compareElementsInDocumentOrder(el, btn) >= 0) return;

    if (!best || compareElementsInDocumentOrder(btn, best) < 0) {
      best = btn;
    }
  });

  return best;
}

function getGroupedTextQuizRoot(inputs, owner, host) {
  const scope = host || getContentHost() || document.body;
  const pieces = (Array.isArray(inputs) ? inputs : []).slice();

  if (owner) {
    pieces.push(owner.closest(".lia-quiz__control") || owner);
  }

  const common = getCommonAncestorElement(pieces);

  if (common && common !== scope && scope.contains(common)) {
    return common;
  }

  return getTextQuizRootFromInput(inputs[0], scope);
}


function collectTextQuizRootsFromRoot(root) {
  const host = root || getContentHost() || document.body;
  const inputs = getTextQuizInputsFromRoot(host);
  const groups = new Map();

  inputs.forEach(function (input) {
    const owner =
      getNextQuizControlAfterElement(input, host) ||
      getTextQuizRootFromInput(input, host) ||
      input;

    if (!groups.has(owner)) {
      groups.set(owner, []);
    }

    groups.get(owner).push(input);
  });

  const roots = [];

  groups.forEach(function (bucket, owner) {
    const groupedRoot = getGroupedTextQuizRoot(bucket, owner, host);
    if (groupedRoot) {
      roots.push(groupedRoot);
    }
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



function collectActualKnownLiaQuizRootsFromRoot(root) {
  const host = root || getContentHost() || document.body;
  const out = [];

  collectTextQuizRootsFromRoot(host).forEach(function (taskRoot) {
    const quiz = getTextQuizStateRoot(taskRoot);
    if (quiz) out.push(quiz);
  });

  getDropdownQuizControlsFromRoot(host).forEach(function (drop) {
    const quiz = getDropdownQuizRootFromDropdown(drop, host);
    if (quiz) out.push(normalizeActualQuizRoot(quiz) || quiz);
  });

  collectTileQuizRootsFromRoot(host).forEach(function (taskRoot) {
    const quiz = getTileQuizInnerQuiz(taskRoot);
    if (quiz) out.push(quiz);
  });

  collectChoiceQuizRootsFromRoot(host).forEach(function (taskRoot) {
    const quiz = normalizeActualQuizRoot(taskRoot) || taskRoot;
    if (quiz) out.push(quiz);
  });

  collectOrthographyQuizRootsFromRoot(host).forEach(function (wrap) {
    const quiz = getOrthographyQuizRootFromWrap(wrap);
    if (quiz) out.push(quiz);
  });

  collectFractionQuizRootsFromRoot(host).forEach(function (rep) {
    const quiz = getFractionQuizRootFromRep(rep);
    if (quiz) out.push(quiz);
  });

  collectMarkerQuizRootsFromRoot(host).forEach(function (taskRoot) {
    const quiz = getMarkerQuizLiaRoot(taskRoot);
    if (quiz) out.push(quiz);
  });

  return uniqueElements(
    out
      .map(function (el) { return normalizeActualQuizRoot(el) || el; })
      .filter(Boolean)
  );
}

function collectCoordinateQuizRootsFromRoot(root) {
  const host = root || getContentHost() || document.body;
  const known = new Set(collectActualKnownLiaQuizRootsFromRoot(host));

  return Array.from(host.querySelectorAll(".lia-quiz")).filter(function (quiz) {
    if (!(quiz instanceof Element)) return false;
    if (quiz.closest("#lia-freeze-bar")) return false;
    if (quiz.closest(".lia-submit-box")) return false;
    if (!isRenderedElement(quiz) && !hasRenderedSelfOrDescendant(quiz)) return false;
    if (known.has(quiz)) return false;
    return true;
  });
}

function getCoordinateQuizKey(root, idx) {
  if (!root) return "coord:" + idx;

  const scope =
    root.closest(".flex-child") ||
    root.closest(".lia-paragraph") ||
    root.parentElement ||
    root;

  const txt = stripQuizUiText((scope.textContent || root.textContent || ""));
  if (txt) {
    return "coord:" + shortHash(txt.slice(0, 240));
  }

  return "coord:" + idx;
}

function captureCoordinateQuizState(root, idx) {
  if (!root) return null;

  const feedback = root.querySelector(".lia-quiz__feedback");

  const out = {
    k: getCoordinateQuizKey(root, idx),
    ri: Number(idx || 0)
  };
  applyAssignmentMetaToState(out, root);

  const stateCode = detectQuizState(root);
  const feedbackCode = detectFeedbackCode(feedback);
  const checkCount = getQuizCheckCount(root);

  if (stateCode) out.s = stateCode;
  if (feedbackCode) out.fc = feedbackCode;
  if (checkCount > 0) out.cc = checkCount;

  return out;
}

function compactCoordinateQuizStateForFreezeUrl(state) {
  if (!state) return null;

  const out = { k: state.k };

  const rootIndex = Number(state.ri);
  if (Number.isFinite(rootIndex) && rootIndex >= 0) {
    out.ri = rootIndex;
  }

  compactCommonStateMeta(state, out);

  if (!hasMeaningfulOutcomeState(out)) {
    return null;
  }

  return out;
}

function applyCoordinateQuizState(root, state) {
  if (!root || !state) return root;

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
  lockTextQuizRoot(root);

  return root;
}

function applyStoredCoordinateStatesToHost(host, storedStates) {
  const liveRoots = host ? collectCoordinateQuizRootsFromRoot(host) : [];
  const states = Array.isArray(storedStates) ? storedStates : [];
  const used = new Set();
  const applied = [];

  log(
    "coord-apply-live",
    "live=" + liveRoots.length,
    liveRoots.map(function (root, idx) {
      return "[" + idx + "] " + JSON.stringify(getCoordinateQuizKey(root, idx));
    }).join(" || ")
  );

  log(
    "coord-apply-stored",
    "stored=" + states.length,
    states.map(function (state, idx) {
      return "[" + idx + "] " + JSON.stringify(state.k || "") + " ri=" + String(
        Number.isFinite(Number(state && state.ri)) ? Number(state.ri) : "-"
      );
    }).join(" || ")
  );

  states.forEach(function (state, idx) {
    let target = null;
    const wantedKey = normalizeSpace(state && state.k || "");
    const wantedRootIndex = Number(state && state.ri);

    // 1. Zuerst die ursprüngliche Root-Position benutzen.
    if (
      Number.isFinite(wantedRootIndex) &&
      wantedRootIndex >= 0 &&
      wantedRootIndex < liveRoots.length &&
      !used.has(liveRoots[wantedRootIndex])
    ) {
      target = liveRoots[wantedRootIndex];
    }

    // 2. Danach per Key matchen.
    if (!target && wantedKey) {
      for (let i = 0; i < liveRoots.length; i++) {
        if (used.has(liveRoots[i])) continue;
        if (getCoordinateQuizKey(liveRoots[i], i) === wantedKey) {
          target = liveRoots[i];
          break;
        }
      }
    }

    // 3. Alter Fallback nur noch ganz zum Schluss.
    if (!target) {
      if (idx >= 0 && idx < liveRoots.length && !used.has(liveRoots[idx])) {
        target = liveRoots[idx];
      }
    }

    if (!target) {
      log(
        "coord-match-miss",
        "storedIdx=" + idx,
        "key=" + JSON.stringify(wantedKey),
        "ri=" + String(Number.isFinite(wantedRootIndex) ? wantedRootIndex : "-")
      );
      return;
    }

    used.add(target);
    applyCoordinateQuizState(target, state);
    applied.push(target);
  });

  return applied;
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
      .concat(collectCoordinateQuizRootsFromRoot(root))
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
    ri: Number(idx || 0),
    v: targets.map(function (target) {
      return getTileTargetDisplayText(target);
    })
  };
  applyAssignmentMetaToState(out, quizRoot || tileRoot);

  const stateCode = detectQuizState(quizRoot);
  const feedbackCode = detectFeedbackCode(feedback);
  const checkCount = getQuizCheckCount(quizRoot);

  if (stateCode) out.s = stateCode;
  if (feedbackCode) out.fc = feedbackCode;
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
      return "[" + idx + "] " + JSON.stringify(state.k || "") + " ri=" + String(
        Number.isFinite(Number(state && state.ri)) ? Number(state.ri) : "-"
      );
    }).join(" || ")
  );

  states.forEach(function (state, idx) {
    let target = null;
    const wantedKey = normalizeSpace(state && state.k || "");
    const wantedRootIndex = Number(state && state.ri);

    // 1. Zuerst die ursprüngliche Root-Position benutzen.
    if (
      Number.isFinite(wantedRootIndex) &&
      wantedRootIndex >= 0 &&
      wantedRootIndex < liveRoots.length &&
      !used.has(liveRoots[wantedRootIndex])
    ) {
      target = liveRoots[wantedRootIndex];
    }

    // 2. Danach per Key matchen.
    if (!target && wantedKey) {
      for (let i = 0; i < liveRoots.length; i++) {
        if (used.has(liveRoots[i])) continue;
        if (getTileQuizKey(liveRoots[i], i) === wantedKey) {
          target = liveRoots[i];
          break;
        }
      }
    }

    // 3. Alter Fallback nur noch ganz zum Schluss.
    if (!target) {
      if (idx >= 0 && idx < liveRoots.length && !used.has(liveRoots[idx])) {
        target = liveRoots[idx];
      }
    }

    if (!target) {
      log(
        "tile-match-miss",
        "storedIdx=" + idx,
        "key=" + JSON.stringify(wantedKey),
        "ri=" + String(Number.isFinite(wantedRootIndex) ? wantedRootIndex : "-")
      );
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
      ri: Number(idx || 0),
      v: getDropdownSelectedText(drop)
    };
    applyAssignmentMetaToState(out, root);

    const stateCode = detectQuizState(root);
    const feedbackCode = detectFeedbackCode(feedback);
    const checkCount = getQuizCheckCount(root);

    if (stateCode) out.s = stateCode;
    if (feedbackCode) out.fc = feedbackCode;
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
      return "[" + idx + "] " + JSON.stringify(state.k || "") + " ri=" + String(
        Number.isFinite(Number(state && state.ri)) ? Number(state.ri) : "-"
      );
    }).join(" || ")
  );

  states.forEach(function (state, idx) {
    let target = null;
    const wantedKey = normalizeSpace(state && state.k || "");
    const wantedRootIndex = Number(state && state.ri);

    // 1. Zuerst die ursprüngliche Root-Position benutzen.
    if (
      Number.isFinite(wantedRootIndex) &&
      wantedRootIndex >= 0 &&
      wantedRootIndex < live.length &&
      !used.has(live[wantedRootIndex])
    ) {
      target = live[wantedRootIndex];
    }

    // 2. Danach per Key matchen.
    if (!target && wantedKey) {
      for (let i = 0; i < live.length; i++) {
        if (used.has(live[i])) continue;
        if (getDropdownQuizKey(live[i], i) === wantedKey) {
          target = live[i];
          break;
        }
      }
    }

    // 3. Alter Fallback nur noch ganz zum Schluss.
    if (!target) {
      if (idx >= 0 && idx < live.length && !used.has(live[idx])) {
        target = live[idx];
      }
    }

    if (!target) {
      log(
        "dropdown-match-miss",
        "storedIdx=" + idx,
        "key=" + JSON.stringify(wantedKey),
        "ri=" + String(Number.isFinite(wantedRootIndex) ? wantedRootIndex : "-")
      );
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
    const first = getTextQuizInputKey(inputs[0], idx);
    if (first) return first;
  }

  const ancestorId = getNearestQuizAncestorId(root);
  if (ancestorId) return "id:" + ancestorId;

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
  const checkCount = getQuizCheckCount(quizRoot || root);

  const out = {
    k: getTextQuizRootKey(root, idx),
    ri: Number(idx || 0),
    v: values
  };
  applyAssignmentMetaToState(out, quizRoot || root);

  if (stateCode) out.s = stateCode;
  if (feedbackCode) out.fc = feedbackCode;
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
  

  if (slide && Array.isArray(slide.cq)) {
    n += slide.cq.length;
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
    collectCoordinateQuizRootsFromRoot(host).length +
    collectCanvasFreezePairsFromRoot(host).length
  );
}

function isSlideReadyForApply(hash) {
  const current = String(getCurrentHash() || "");
  if (current !== String(hash || "")) {
    log("ready-fail", "reason=hash", "wanted=" + String(hash || ""), "current=" + current);
    return false;
  }

  const host = getContentHost() || document.body;
  if (!host) {
    log("ready-fail", "reason=no-host");
    return false;
  }
  if (!hasRenderedSelfOrDescendant(host)) {
    log(
      "ready-fail",
      "reason=host-not-rendered",
      "tag=" + String(host.tagName || ""),
      "id=" + String(host.id || ""),
      "class=" + normalizeSpace(host.className || "")
    );
    return false;
  }

  const desc = getCurrentSlideDescriptor();
  if (!descriptorLooksMaterialized(desc)) {
    log(
      "ready-fail",
      "reason=descriptor",
      JSON.stringify(desc)
    );
    return false;
  }

  const decl = getDeclaredSlideByHash(hash);
  const expectedTitle = normalizeSpace(decl && decl.t || "");
  const actualTitle = normalizeSpace(desc.t || "");

  if (expectedTitle && actualTitle && expectedTitle !== actualTitle) {
    log(
      "ready-fail",
      "reason=title",
      "expected=" + expectedTitle,
      "actual=" + actualTitle
    );
    return false;
  }

  const slide = getSnapshotSlideForHash(hash);
  if (!slide) return true;

  const expectedControls = countExpectedControls(slide);
  if (expectedControls > 0) {
    const liveText = getTextQuizInputsFromRoot(host).length;
    const liveDropdown = getDropdownQuizControlsFromRoot(host).length;
    const liveTile = getTileQuizTargetsFromRoot(host).length;
    const liveChoice = getChoiceQuizInputsFromRoot(host).length;
    const liveOrtho = collectOrthographyQuizRootsFromRoot(host).length;
    const liveFraction = collectFractionQuizRootsFromRoot(host).length;
    const liveMarker = collectMarkerQuizRootsFromRoot(host).length;
    const liveCoord = collectCoordinateQuizRootsFromRoot(host).length;
    const liveCanvas = collectCanvasFreezePairsFromRoot(host).length;

    const liveControls =
      liveText +
      liveDropdown +
      liveTile +
      liveChoice +
      liveOrtho +
      liveFraction +
      liveMarker +
      liveCoord +
      liveCanvas;

    if (liveControls < expectedControls) {
      log(
        "ready-fail",
        "reason=controls",
        "expected=" + expectedControls,
        "live=" + liveControls,
        "text=" + liveText,
        "dropdown=" + liveDropdown,
        "tile=" + liveTile,
        "choice=" + liveChoice,
        "ortho=" + liveOrtho,
        "fraction=" + liveFraction,
        "marker=" + liveMarker,
        "coord=" + liveCoord,
        "canvas=" + liveCanvas,
        "hostTag=" + String(host.tagName || ""),
        "hostId=" + String(host.id || ""),
        "hostClass=" + normalizeSpace(host.className || "")
      );
      return false;
    }
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

  // Alte Links mit gespeichertem t bleiben weiter kompatibel
  if (typeof state.t === "string" && state.t) {
    return state.t;
  }

  function firstNonEmpty() {
    for (let i = 0; i < arguments.length; i++) {
      const txt = normalizeSpace(arguments[i] || "");
      if (txt) return txt;
    }
    return "";
  }

  const solvedText = firstNonEmpty(
    readQuizDataText(root, "data-text-solved"),
    "Herzlichen Glückwunsch, das war die richtige Antwort"
  );

  const resolvedText = firstNonEmpty(
    readQuizDataText(root, "data-text-resolved"),
    "Aufgelöste Antwort"
  );

  const failedText = firstNonEmpty(
    readQuizDataText(root, "data-text-failed"),
    "Die richtige Antwort wurde noch nicht gegeben"
  );

  if (state.s === "s" || state.fc === "s") {
    return solvedText;
  }

  if (state.s === "r" || state.fc === "d") {
    return resolvedText;
  }

  if (state.fc === "e") {
    return failedText;
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
    if (state.fc === "e") return "text-error";

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
      return "[" + idx + "] " + JSON.stringify(state.k || "") + " ri=" + String(
        Number.isFinite(Number(state && state.ri)) ? Number(state.ri) : "-"
      );
    }).join(" || ")
  );

  states.forEach(function (state, idx) {
    let target = null;

    const wantedKey = normalizeSpace(state && state.k || "");
    const wantedRootIndex = Number(state && state.ri);

    // 1. Zuerst die ursprüngliche Root-Position benutzen.
    //    Das ist stabil gegenüber der Kompaktierung leerer Zustände.
    if (
      Number.isFinite(wantedRootIndex) &&
      wantedRootIndex >= 0 &&
      wantedRootIndex < liveRoots.length &&
      !used.has(liveRoots[wantedRootIndex])
    ) {
      target = liveRoots[wantedRootIndex];
    }

    // 2. Danach per Key matchen (für Alt-/Mischfälle weiter sinnvoll).
    if (!target && wantedKey) {
      for (let i = 0; i < liveRoots.length; i++) {
        if (used.has(liveRoots[i])) continue;
        if (getTextQuizRootKey(liveRoots[i], i) === wantedKey) {
          target = liveRoots[i];
          break;
        }
      }
    }

    // 3. Letzter Alt-Fallback für sehr alte Daten ohne ri und ohne Key-Treffer.
    if (!target) {
      const wantedIndex = idx;
      if (wantedIndex >= 0 && wantedIndex < liveRoots.length && !used.has(liveRoots[wantedIndex])) {
        target = liveRoots[wantedIndex];
      }
    }

    if (!target) {
      log(
        "textquiz-match-miss",
        "storedIdx=" + idx,
        "key=" + JSON.stringify(wantedKey),
        "ri=" + String(Number.isFinite(wantedRootIndex) ? wantedRootIndex : "-")
      );
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
  applyStoredCoordinateStatesToHost(host, slide.cq || []);
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

      // Annotation hier bewusst NICHT erneut importieren.
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

function getCanvasStoredSizeTarget(pair) {
  if (!pair || !(pair instanceof Element)) return null;

  const preferred =
    pair.querySelector(".lia-ocr-box, .lia-canvas-box, .ocr-box, .canvas-box") ||
    pair.querySelector(".lia-ocr-wrap, .lia-canvas-wrap, .ocr-wrap, .canvas-wrap") ||
    null;

  return preferred || pair;
}

function applyStoredCanvasWindowSizeToPair(pair, state) {
  if (!pair || !(pair instanceof Element)) return false;

  const expanded = expandCanvasStateFromFreezeUrl(state) || state || {};
  const storedW = Number(expanded.w || 0) || 0;
  const storedH = Number(expanded.h || 0) || 0;

  if (storedW <= 0 && storedH <= 0) return false;

  const mount = pair.querySelector(".lia-canvas-mount");
  const block = pair.querySelector(".lia-draw-block");
  const wrap = pair.querySelector(".lia-draw-wrap");
  const canvas = pair.querySelector("canvas.lia-canvas-freeze-preview, canvas");

  // WICHTIG:
  // Die Wrapper sind spans. width/height greifen dort erst sinnvoll,
  // wenn wir das Anzeigeverhalten umstellen.
  pair.style.display = "block";
  pair.style.width = "100%";
  pair.style.minWidth = "0";
  pair.style.maxWidth = "none";
  pair.style.marginLeft = "0";
  pair.style.paddingLeft = "0";
  pair.style.verticalAlign = "top";
  pair.style.flex = "0 0 auto";
  pair.style.textAlign = "left";

  if (mount) {
    mount.style.display = "block";
    mount.style.maxWidth = "none";
    mount.style.marginLeft = "0";
    mount.style.marginRight = "0";
    mount.style.clear = "both";
  }

  if (block) {
    block.style.display = "block";
    block.style.maxWidth = "none";
    block.style.marginLeft = "0";
    block.style.marginRight = "0";
    block.style.clear = "both";
  }

  if (wrap) {
    wrap.style.display = "block";
    wrap.style.maxWidth = "none";
    wrap.style.marginLeft = "0";
    wrap.style.marginRight = "0";
    wrap.style.clear = "both";
    wrap.style.boxSizing = "border-box";
    wrap.style.overflow = "hidden";
  }

  if (storedW > 0) {
    [mount, block, wrap].forEach(function (el) {
      if (!el) return;
      el.style.width = storedW + "px";
      el.style.minWidth = storedW + "px";
      el.style.maxWidth = "none";
    });

    if (canvas) {
      canvas.style.width = storedW + "px";
      canvas.style.maxWidth = "none";
      canvas.style.display = "block";
      canvas.style.verticalAlign = "top";
    }
  }

  if (storedH > 0) {
    // Die Höhe lieber auf Mount/Block/Wrap/Canvas,
    // nicht auf das äußere pair mit Launch-Button etc.
    [mount, block, wrap].forEach(function (el) {
      if (!el) return;
      el.style.height = storedH + "px";
      el.style.minHeight = storedH + "px";
    });

    if (canvas) {
      canvas.style.height = storedH + "px";
    }
  }

  return true;
}

function scheduleStoredCanvasWindowSizeReapply(pair, state) {
  [0, 60, 180, 360].forEach(function (delay) {
    setTimeout(function () {
      applyStoredCanvasWindowSizeToPair(pair, state);
    }, delay);
  });
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
      return "[" + idx + "] " + JSON.stringify(getCanvasStateUidForFreezeUrl(state));
    }).join(" || ")
  );

  states.forEach(function (state, idx) {
    let target = null;
    const wantedUid = normalizeSpace(getCanvasStateUidForFreezeUrl(state));

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

    const renderState = expandCanvasStateFromFreezeUrl(state) || state;

    used.add(target);
    api.renderCanvasFreezeStateIntoPair(target, renderState);
    applyStoredCanvasWindowSizeToPair(target, renderState);
    scheduleStoredCanvasWindowSizeReapply(target, renderState);
    applied.push(target);
  });

  return applied;
}



  // =========================================================
  // Annotation Freeze API
  // =========================================================
function getAnnotationFreezeRootWindow() {
  let w = window;
  try {
    while (w.parent && w.parent !== w) w = w.parent;
  } catch (e) {}
  return w;
}

function getAnnotationFreezeApi() {
  const root = getAnnotationFreezeRootWindow();

  const candidates = [
    root && root.__LIA_ANNOTATION_FREEZE_API__,
    window.__LIA_ANNOTATION_FREEZE_API__,
    root && root.__LIA_ANNOTATION__,
    window.__LIA_ANNOTATION__
  ].filter(Boolean);

  for (let i = 0; i < candidates.length; i++) {
    const api = candidates[i];

    const exportFn =
      (typeof api.exportFreezeState === "function" && api.exportFreezeState) ||
      (typeof api.exportState === "function" && api.exportState) ||
      (typeof api.freezeExport === "function" && api.freezeExport) ||
      null;

    const importFn =
      (typeof api.importFreezeState === "function" && api.importFreezeState) ||
      (typeof api.importState === "function" && api.importState) ||
      (typeof api.freezeImport === "function" && api.freezeImport) ||
      null;

    if (exportFn || importFn) {
      log(
        "annotation-api-detected",
        "export=" + (exportFn ? "1" : "0"),
        "import=" + (importFn ? "1" : "0")
      );

      return {
        exportFreezeState: exportFn ? exportFn.bind(api) : null,
        importFreezeState: importFn ? importFn.bind(api) : null,
        setReadOnly: typeof api.setReadOnly === "function" ? api.setReadOnly.bind(api) : null,
        refresh: typeof api.refresh === "function" ? api.refresh.bind(api) : null,
        persistCurrentSlide: typeof api.persistCurrentSlide === "function" ? api.persistCurrentSlide.bind(api) : null,
        saveCurrentSlide: typeof api.saveCurrentSlide === "function" ? api.saveCurrentSlide.bind(api) : null,
        commitCurrentSlide: typeof api.commitCurrentSlide === "function" ? api.commitCurrentSlide.bind(api) : null,
        syncCurrentSlide: typeof api.syncCurrentSlide === "function" ? api.syncCurrentSlide.bind(api) : null,
        flushCurrentSlide: typeof api.flushCurrentSlide === "function" ? api.flushCurrentSlide.bind(api) : null,
        save: typeof api.save === "function" ? api.save.bind(api) : null,
        sync: typeof api.sync === "function" ? api.sync.bind(api) : null,
        flush: typeof api.flush === "function" ? api.flush.bind(api) : null
      };
    }
  }

  const exportFn =
    (root && root.__LIA_ANNOTATION_FREEZE_EXPORT__) ||
    window.__LIA_ANNOTATION_FREEZE_EXPORT__ ||
    null;

  const importFn =
    (root && root.__LIA_ANNOTATION_FREEZE_IMPORT__) ||
    window.__LIA_ANNOTATION_FREEZE_IMPORT__ ||
    null;

  if (exportFn || importFn) {
    log(
      "annotation-api-detected",
      "export=" + (exportFn ? "1" : "0"),
      "import=" + (importFn ? "1" : "0"),
      "mode=global-functions"
    );

    return {
      exportFreezeState: typeof exportFn === "function" ? exportFn : null,
      importFreezeState: typeof importFn === "function" ? importFn : null
    };
  }

  log("annotation-api-detected", "export=0", "import=0");
  return null;
}


function debugAnnotationProbe(stage) {
  const api = getAnnotationFreezeApi();

  log(
    "annotation-probe",
    "stage=" + String(stage || ""),
    "api=" + (api ? "1" : "0"),
    "export=" + (
      api && typeof api.exportFreezeState === "function"
        ? "1"
        : "0"
    ),
    "import=" + (
      api && typeof api.importFreezeState === "function"
        ? "1"
        : "0"
    ),
    "readonly=" + (
      api && typeof api.setReadOnly === "function"
        ? "1"
        : "0"
    ),
    "refresh=" + (
      api && typeof api.refresh === "function"
        ? "1"
        : "0"
    )
  );

  return api;
}


function tryCallAnnotationApiMethod(api, names) {
  if (!api) return false;

  const list = Array.isArray(names) ? names : [names];

  for (let i = 0; i < list.length; i++) {
    const name = String(list[i] || "");
    if (!name) continue;
    if (typeof api[name] !== "function") continue;

    try {
      api[name]();
      log("annotation-flush-call", "method=" + name);
      return true;
    } catch (err) {
      warn(
        "annotation-flush-call-failed",
        "method=" + name,
        err && err.message ? err.message : err
      );
    }
  }

  return false;
}

function flushAnnotationBeforeExport() {
  const api = getAnnotationFreezeApi();
  if (!api) return false;

  // vorsichtig mehrere mögliche Persist-/Sync-Hooks probieren
  const tried =
    tryCallAnnotationApiMethod(api, ["persistCurrentSlide", "saveCurrentSlide", "commitCurrentSlide"]) ||
    tryCallAnnotationApiMethod(api, ["syncCurrentSlide", "flushCurrentSlide"]) ||
    tryCallAnnotationApiMethod(api, ["save", "sync", "flush"]);

  if (typeof api.refresh === "function") {
    try {
      api.refresh();
      log("annotation-flush-call", "method=refresh");
    } catch (err) {
      warn(
        "annotation-refresh-before-export-failed",
        err && err.message ? err.message : err
      );
    }
  }

  return tried;
}

function countAnnotationItemsInFreezePayload(payload) {
  if (!payload || typeof payload !== "object") {
    return 0;
  }

  if (payload.v === ANNOT_CODEC_VERSION && Array.isArray(payload.s)) {
    let total = 0;

    payload.s.forEach(function (entry) {
      if (!Array.isArray(entry) || entry.length < 2) return;
      const items = Array.isArray(entry[1]) ? entry[1] : [];
      total += items.length;
    });

    return total;
  }

  const slides = payload.slides && typeof payload.slides === "object"
    ? payload.slides
    : null;

  if (!slides) return 0;

  let total = 0;

  Object.keys(slides).forEach(function (hash) {
    const slide = slides[hash];
    const items = Array.isArray(slide && slide.items) ? slide.items : [];
    total += items.length;
  });

  return total;
}


function describeAnnotationFreezePayload(payload) {
  if (!payload || typeof payload !== "object") {
    return "payload=<null>";
  }

  const keys = Object.keys(payload);
  const slideHashes =
    payload.slides && typeof payload.slides === "object"
      ? Object.keys(payload.slides)
      : [];

  const uiKeys =
    payload.ui && typeof payload.ui === "object"
      ? Object.keys(payload.ui)
      : [];

  return [
    "keys=" + keys.join(","),
    "slides=" + slideHashes.length,
    "slideHashes=" + slideHashes.join(","),
    "uiKeys=" + uiKeys.join(",")
  ].join(" ");
}


async function captureFullAnnotationFreezeState() {
  const api = getAnnotationFreezeApi();
  if (!api || typeof api.exportFreezeState !== "function") {
    log("annotation-export-skip", "reason=no-api");
    return null;
  }

  const delays = [0, 80, 180, 320];

  for (let i = 0; i < delays.length; i++) {
    const delay = delays[i];

    if (delay > 0) {
      await sleep(delay);
    }

    flushAnnotationBeforeExport();

    let raw = null;

    try {
      raw = api.exportFreezeState();
      if (raw && typeof raw.then === "function") {
        raw = await raw;
      }
    } catch (err) {
      warn(
        "annotation-export-failed",
        "try=" + (i + 1),
        err && err.message ? err.message : err
      );
      continue;
    }

    const copy = copyJson(raw);

    const keys =
      copy && typeof copy === "object"
        ? Object.keys(copy)
        : [];

    const slideKeys =
      copy &&
      copy.slides &&
      typeof copy.slides === "object"
        ? Object.keys(copy.slides)
        : [];

    const itemCount = countAnnotationItemsInFreezePayload(copy);

    log(
      "annotation-export-attempt",
      "try=" + (i + 1),
      "rawType=" + (raw === null ? "null" : typeof raw),
      "keys=" + keys.join(","),
      "slides=" + slideKeys.join(","),
      "items=" + itemCount
    );

    if (copy && typeof copy === "object") {
      if (keys.length > 0 || slideKeys.length > 0 || itemCount > 0) {
        return copy;
      }
    }
  }

  warn("annotation-export-empty", "all-attempts-failed");
  return null;
}

function getAnnotationFreezeVisibleFlag(fullState) {
  const full =
    fullState && typeof fullState === "object"
      ? fullState
      : null;

  if (!full) return 1;

  if (full.v === ANNOT_CODEC_VERSION) {
    return full.u === 0 ? 0 : 1;
  }

  return (full.ui && full.ui.visible === false) ? 0 : 1;
}

function buildAnnotationFreezeImportPayloadFromSnapshot(payload) {
  // Neues bevorzugtes Format: kompakter af2-Codec
  if (payload && payload.af && typeof payload.af === "object") {
    const full =
      expandAnnotationFreezeStateFromFreezeUrl(payload.af) ||
      {};

    full.ui = full.ui || {};

    // Altkompatibilität: falls anv noch vorhanden ist, darf es visible überschreiben
    if (Object.prototype.hasOwnProperty.call(payload, "anv")) {
      full.ui.visible = !(Number(payload.anv) === 0);
    }

    return full;
  }

  // Fallback für altes per-slide-Format
  const out = {
    version: "lia-annotation-freeze-v1",
    ui: {
      visible: !(
        payload &&
        Object.prototype.hasOwnProperty.call(payload, "anv") &&
        Number(payload.anv) === 0
      )
    },
    slides: {}
  };

  if (!payload || !Array.isArray(payload.s)) {
    return out;
  }

  payload.s.forEach(function (slide) {
    const hash = cleanHashValue(slide && slide.h || "");
    const ann = slide && slide.an;
    const data = ann && ann.d;

    if (!hash) return;
    if (!data || !Array.isArray(data.items) || !data.items.length) return;

    out.slides[hash] = {
      items: copyJson(data.items) || [],
      redo: []
    };
  });

  return out;
}



function applyAnnotationFreezeSnapshot(payload) {
  log("ANNOTATION-IMPORT-ENTER");
  
  const api = getAnnotationFreezeApi();
  if (!api) {
    log("annotation-apply-skip", "reason=no-api");
    return false;
  }

  try {
    if (typeof api.importFreezeState === "function") {
      const importPayload = buildAnnotationFreezeImportPayloadFromSnapshot(
        payload || snapshotPayload
      );

      const hashes = Object.keys(importPayload && importPayload.slides || {});
      const itemCount = countAnnotationItemsInFreezePayload(importPayload);

      log(
        "annotation-apply",
        "slides=" + hashes.length,
        "hashes=" + hashes.join(","),
        "items=" + itemCount
      );

      api.importFreezeState(importPayload, { replace: true });
    }

    if (typeof api.setReadOnly === "function") {
      api.setReadOnly(true);
    }

    if (typeof api.refresh === "function") {
      api.refresh();
    }

    return true;
  } catch (err) {
    warn(
      "annotation-apply-failed",
      err && err.message ? err.message : err
    );
    return false;
  }
}


function reimportAnnotationFreezeSnapshot(reason) {
  if (!snapshotPayload) {
    log("annotation-reimport-skip", "reason=" + String(reason || ""), "snapshot=none");
    return false;
  }

  const ok = applyAnnotationFreezeSnapshot(snapshotPayload);

  log(
    "annotation-reimport",
    "reason=" + String(reason || ""),
    "ok=" + (ok ? "1" : "0")
  );

  return ok;
}


function reinforceAnnotationFreezeUi(reason, opts) {
  opts = opts || {};

  const api = getAnnotationFreezeApi();
  if (!api) return false;

  let imported = false;

  if (opts.reimport) {
    imported = reimportAnnotationFreezeSnapshot(reason || "reinforce");
  }

  try {
    if (typeof api.setReadOnly === "function") {
      api.setReadOnly(true);
    }

    if (typeof api.refresh === "function") {
      api.refresh();
    }

    log(
      "annotation-reinforce",
      "reason=" + String(reason || ""),
      "reimport=" + (opts.reimport ? "1" : "0"),
      "imported=" + (imported ? "1" : "0")
    );

    return true;
  } catch (err) {
    warn(
      "annotation-reinforce-failed",
      err && err.message ? err.message : err
    );
    return false;
  }
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
  const coordinateRoots = collectCoordinateQuizRootsFromRoot(host);
  const generalMarkerState = captureGeneralMarkerState(host);

  const previousSlideState = liveSlidesByHash[cleanHash] || null;
  const rawCanvasStates = captureCanvasFreezeStatesFromRoot(host);
  const canvasStates = mergeCanvasStatesPreferPreviousNonEmpty(
    previousSlideState && previousSlideState.cv,
    rawCanvasStates
  );

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

  coordinateRoots.forEach(function (root, idx) {
    ordered.push({
      root: root,
      kind: "cq",
      capture: function () { return captureCoordinateQuizState(root, idx); }
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
    cq: [],
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
    "coord=" + out.cq.length,
    "canvas=" + out.cv.length,
        "annotation=global",
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
    "coord=" + (state.cq ? state.cq.length : 0),
    "canvas=" + (state.cv ? state.cv.length : 0),
    "annotation=global",
    "general-marker=" + (
      state.gm && Array.isArray(state.gm.h)
        ? state.gm.h.length
        : 0
    )
  );

  return true;
}



async function buildPayloadFromLiveStates() {
  log("BUILD-PAYLOAD-ENTER");

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
      return liveSlidesByHash[slide.h] || makeEmptySlideState(slide.h);
    })
  };

  const annotationFullState = await captureFullAnnotationFreezeState();
  log("ANNOTATION-EXPORT-ENTER");

  payload.af = annotationFullState;
  payload.anv = getAnnotationFreezeVisibleFlag(annotationFullState);
  payload.sec = getSerializableSecurityState();

  log(
    "payload-annotation",
    annotationFullState ? "present=1" : "present=0",
    "items=" + countAnnotationItemsInFreezePayload(annotationFullState)
  );

  log(
    "payload-annotation-final",
    payload.af ? "present=1" : "present=0",
    payload.af ? describeAnnotationFreezePayload(payload.af) : "payload=<null>",
    "items=" + countAnnotationItemsInFreezePayload(payload.af)
  );

  return compactPayloadForFreezeUrl(payload);
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


function getCopyLinkButton() {
  return document.getElementById("lia-copy-link");
}

function syncCopyLinkButtonState() {
  const btn = getCopyLinkButton();
  if (!btn) return;

  const linkEl = getLinkBox();
  const value = normalizeSpace(
    (linkEl && linkEl.value) ||
    freezeLinkValue ||
    ""
  );

  try { btn.disabled = !value; } catch (e) {}
}

function fallbackCopyText(text) {
  const value = String(text || "");
  if (!value) return false;

  const active = document.activeElement;
  const ta = document.createElement("textarea");

  ta.value = value;
  ta.setAttribute("aria-hidden", "true");
  ta.setAttribute("tabindex", "-1");
  ta.style.position = "fixed";
  ta.style.top = "0";
  ta.style.left = "-9999px";
  ta.style.opacity = "0";
  ta.style.pointerEvents = "none";
  ta.style.fontSize = "16px";

  document.body.appendChild(ta);

  let ok = false;

  try {
    try { ta.focus({ preventScroll: true }); } catch (e) { ta.focus(); }
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    ok = !!document.execCommand("copy");
  } catch (e) {
    ok = false;
  }

  if (ta.parentNode) {
    ta.parentNode.removeChild(ta);
  }

  if (active && typeof active.focus === "function") {
    try { active.focus({ preventScroll: true }); } catch (e) {
      try { active.focus(); } catch (e2) {}
    }
  }

  return ok;
}

async function writeTextToClipboard(text) {
  const value = String(text || "");
  if (!value) return false;

  if (
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === "function" &&
    window.isSecureContext
  ) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch (err) {
      log(
        "clipboard-api-failed",
        err && err.message ? err.message : err
      );
    }
  }

  return fallbackCopyText(value);
}

async function copyLink() {
  const linkEl = getLinkBox();
  const value = normalizeSpace(
    (linkEl && linkEl.value) ||
    freezeLinkValue ||
    ""
  );

  if (!value) {
    setStatus("Es ist noch kein Abgabelink vorhanden.");
    syncCopyLinkButtonState();
    return false;
  }

  const btn = getCopyLinkButton();
  const oldLabel = btn ? btn.textContent : "";

  const ok = await writeTextToClipboard(value);

  if (ok) {
    setStatus("Abgabelink in die Zwischenablage kopiert.");

    if (btn) {
      btn.textContent = "Link kopiert";
      setTimeout(function () {
        if (btn) btn.textContent = oldLabel || "Link kopieren";
      }, 1400);
    }

    return true;
  }

  // Falls direktes Kopieren blockiert wurde:
  // Link markieren, damit danach manuell kopiert werden kann.
  if (linkEl) {
    try { linkEl.focus({ preventScroll: true }); } catch (e) {
      try { linkEl.focus(); } catch (e2) {}
    }

    try { linkEl.select(); } catch (e) {}
    try { linkEl.setSelectionRange(0, String(linkEl.value || "").length); } catch (e) {}
  }

  setStatus("Kopieren wurde vom Browser blockiert. Der Link ist markiert und kann nun manuell kopiert werden.");

  if (btn) {
    btn.textContent = "Manuell kopieren";
    setTimeout(function () {
      if (btn) btn.textContent = oldLabel || "Link kopieren";
    }, 1600);
  }

  return false;
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
    const copyBtn = document.getElementById("lia-copy-link");
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

    if (copyBtn) {
      const currentValue = normalizeSpace(
        (linkEl && linkEl.value) ||
        (typeof opts.linkValue === "string" ? opts.linkValue : "") ||
        freezeLinkValue ||
        ""
      );

      try { copyBtn.disabled = !currentValue; } catch (e) {}
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
    if (el.closest(".lia-annot-toolbar")) return;
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

    if (el.id === "lia-copy-link") {
      const linkEl = getLinkBox();
      const value = normalizeSpace(
        (linkEl && linkEl.value) ||
        freezeLinkValue ||
        ""
      );

      try { el.disabled = !value; } catch (e) {}
      try { el.removeAttribute("tabindex"); } catch (e) {}

      el.style.pointerEvents = "auto";
      el.style.userSelect = "none";
      el.style.webkitUserSelect = "none";
      el.style.cursor = value ? "pointer" : "not-allowed";
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

    reinforceAnnotationFreezeUi("apply-evaluation:" + currentHash, {
      reimport: isBootApply
    });

    reinforceFrozenUi();
    setFreezeLoading(false, "apply-evaluation:" + currentHash);
    return true;
  }

  evaluationPlaceholderHash = "";
  if (isUnvisitedTarget(currentHash)) {
    hideUnvisitedPlaceholder();
    showUnvisitedPlaceholder(currentHash);

    reinforceAnnotationFreezeUi("apply-unvisited:" + currentHash, {
      reimport: isBootApply
    });

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
    const appliedCoord = applyStoredCoordinateStatesToHost(host, slide.cq || []);
    const appliedCanvas = applyStoredCanvasStatesToHost(host, slide.cv || []);
    applyStoredGeneralMarkerState(slide.gm || null);

    const expectedText = Array.isArray(slide.q) ? slide.q.length : 0;
    const expectedDropdown = Array.isArray(slide.d) ? slide.d.length : 0;
    const expectedTile = Array.isArray(slide.m) ? slide.m.length : 0;
    const expectedChoice = Array.isArray(slide.c) ? slide.c.length : 0;
    const expectedOrtho = Array.isArray(slide.o) ? slide.o.length : 0;
    const expectedFraction = Array.isArray(slide.fq) ? slide.fq.length : 0;
    const expectedMarker = Array.isArray(slide.mq) ? slide.mq.length : 0;
    const expectedCoord = Array.isArray(slide.cq) ? slide.cq.length : 0;
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

    if (expectedCoord > 0 && (!appliedCoord || appliedCoord.length < expectedCoord)) {
      warn("apply-partial-coord", currentHash, "expected=" + expectedCoord, "applied=" + (appliedCoord ? appliedCoord.length : 0));
      return false;
    }

    if (expectedCanvas > 0 && (!appliedCanvas || appliedCanvas.length < expectedCanvas)) {
      warn("apply-partial-canvas", currentHash, "expected=" + expectedCanvas, "applied=" + (appliedCanvas ? appliedCanvas.length : 0));
      return false;
    }
  }

    reinforceAnnotationFreezeUi("apply:" + currentHash, {
      reimport: isBootApply
    });

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
      const state = captureSlideStateForHash(hash);
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
  if (target.id === "lia-copy-link") return true;
  if (target.closest && target.closest("#lia-link")) return true;
  if (target.closest && target.closest("#lia-copy-link")) return true;

  // Annotation-Toolbar darf auch im Freeze bedienbar bleiben
  // (z.B. Anzeigen/Ausblenden per Auge-Button).
  if (target.closest(".lia-annot-toolbar")) return true;

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
  debugAnnotationProbe("activateSnapshotMode");
  console.log("[LIA-FREEZE] snapshot-loaded", JSON.stringify(snapshotPayload));
  if (!snapshotPayload) return false;

  snapshotIsSharedLinkMode = !!opts.sharedLinkMode;
  freezeLinkValue = String(linkValue || window.location.href || "");

  await ensureDeclaredSlides(true);

  rehydrateSnapshotEvaluationMetaFromSource(snapshotPayload);
  
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
    console.warn("[LIA-FREEZE] CREATE-LINK-ENTER", BUILD_STAMP);    
    debugAnnotationProbe("createLink-start");

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

      console.warn("[LIA-FREEZE] BEFORE-BUILD-PAYLOAD", BUILD_STAMP);
      const payload = await buildPayloadFromLiveStates();
      console.warn(
        "[LIA-FREEZE] payload-af-check",
        payload && payload.af ? "present" : "null",
        payload && payload.af && typeof payload.af === "object"
          ? Object.keys(payload.af).join(",")
          : ""
      );
      console.warn("[LIA-FREEZE] AFTER-BUILD-PAYLOAD", BUILD_STAMP);

      console.log("[LIA-FREEZE] payload-before-link", JSON.stringify(payload));
      const link = await buildLink(payload);

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

      syncCopyLinkButtonState();

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

  const snapshot = await tryLoadSnapshot();

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


function installDirectCreateLinkBinding() {
  let retryTimer = 0;
  let observer = null;

  function bindNow() {
    const btn = document.getElementById("lia-create-link");
    if (!btn) return false;
    if (btn.dataset.freezeDirectBound === "1") return true;

    btn.dataset.freezeDirectBound = "1";

    btn.addEventListener("click", function (e) {
      console.warn("[LIA-FREEZE] DIRECT-CREATE-LINK-CLICK", BUILD_STAMP);

      if (document.body && document.body.classList.contains("lia-snapshot-mode")) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof e.stopImmediatePropagation === "function") {
          e.stopImmediatePropagation();
        }
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      if (typeof e.stopImmediatePropagation === "function") {
        e.stopImmediatePropagation();
      }

      Promise.resolve()
        .then(function () {
          return createLink();
        })
        .catch(function (err) {
          console.error("[LIA-FREEZE] direct-createLink-error", err);
        });
    }, true);

    log("direct-create-link-bound", "id=lia-create-link");
    return true;
  }

  function scheduleRetries() {
    const delays = [0, 100, 300, 700, 1500];

    delays.forEach(function (delay) {
      setTimeout(function () {
        bindNow();
      }, delay);
    });
  }

  scheduleRetries();

  if (window.MutationObserver) {
    observer = new MutationObserver(function () {
      bindNow();
    });

    observer.observe(document.documentElement || document.body, {
      childList: true,
      subtree: true
    });
  }
}


function installCreateLinkDelegation() {
  if (createLinkDelegationInstalled) return;
  createLinkDelegationInstalled = true;

  document.addEventListener("click", function (e) {
    const t = e.target;
    if (!(t instanceof Element)) return;

    const btn = t.closest("#lia-create-link");
    if (!btn) return;

    if (document.body && document.body.classList.contains("lia-snapshot-mode")) {
      e.preventDefault();
      e.stopPropagation();
      if (typeof e.stopImmediatePropagation === "function") {
        e.stopImmediatePropagation();
      }
      return;
    }

    console.warn("[LIA-FREEZE] DELEGATED-CREATE-LINK-CLICK", BUILD_STAMP);

    e.preventDefault();
    e.stopPropagation();
    if (typeof e.stopImmediatePropagation === "function") {
      e.stopImmediatePropagation();
    }

    Promise.resolve()
      .then(function () {
        return createLink();
      })
      .catch(function (err) {
        console.error("[LIA-FREEZE] delegated-createLink-error", err);
      });
  }, true);
}




function safeBoot() {
  try {
    console.warn("[LIA-FREEZE] BUILD-STAMP", BUILD_STAMP);
    ensureRuntimeStyle();
    installThemeWatcher();
    installGlobalF12Tracking();
    installGlobalTabTracking();
    installDevtoolsWatch();
    installCreateLinkDelegation();
    installDirectCreateLinkBinding();
    debugAnnotationProbe("safeBoot");
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
    copyLink: copyLink,
    clearStoredSubmissionToken: clearStoredSubmissionToken,
    goFrozenHash: goFrozenHash,
    runCompressionCoreSelfTest: runCompressionCoreSelfTest,
    runSnapshotTokenSelfTest: runSnapshotTokenSelfTest,
    runCanvasPathBinaryCodecSelfTest: runCanvasPathBinaryCodecSelfTest
  };
})();
@end













@Abgabe
<div class="lia-submit-box">
  <h2>Abgabeerstellung</h2>

  <label for="lia-name">Name</label>
  <input id="lia-name" data-snapshot-admin="1" type="text" placeholder="Name eingeben">

  <div class="lia-submit-actions">
    <button
      id="lia-create-link"
      data-snapshot-admin="1"
      type="button"
      onclick="console.warn('[LIA-FREEZE] INLINE-CREATE-LINK-CLICK'); if(window.__liaSubmissionDemo && typeof window.__liaSubmissionDemo.createLink ===   'function') { window.__liaSubmissionDemo.createLink(); } else { console.error('[LIA-FREEZE] createLink not available on window.__liaSubmissionDemo'); } return false;"
    >Abgabelink erstellen</button>

    <button
      id="lia-copy-link"
      data-snapshot-admin="1"
      type="button"
      disabled
      onclick="console.warn('[LIA-FREEZE] INLINE-COPY-LINK-CLICK'); if(window.__liaSubmissionDemo && typeof window.__liaSubmissionDemo.copyLink === 'function') { window.__liaSubmissionDemo.copyLink(); } else { console.error('[LIA-FREEZE] copyLink not available on window.__liaSubmissionDemo'); } return false;"
    >Link kopieren</button>
  </div>

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

Abgabefeld über Makro: Am sinnvollsten wäre eine eigene letzte Folie dafür einzurichten. \
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




# Etablierte Quiz

$a)\;\;$ $7000+123=$ [[  7123  ]] @canvas

@ADetails(1=BE;Normal)

--- 

--- 



Wähle blau aus.
- [[X]] Blau
- [[ ]] Gelb
- [[ ]] Rot
- [[ ]] Grün

@ADetails(1=BE;Multiple)

--- 

--- 



Wähle blau aus.
- [(X)] Blau
- [( )] Gelb
- [( )] Rot
- [( )] Grün

@ADetails(1=BE;Radio)

--- 

--- 

Wähle rot aus.
[[(rot)|blau|grün|gelb]]

@ADetails(1=BE;Auswahl)

--- 

--- 



Wähle gelb aus.
[->[rot|blau|grün|(gelb)]]

@ADetails(1=BE;Kachel)

--- 

--- 



$b)\;\;$ $6000+123=$ [[  6123  ]] m @canvas

@ADetails(1=BE;Tag1,Tag2)

--- 

--- 



**Entscheide**, ob es sich bei dem Term um einen Vektor, ein Skalar oder einen nicht definierten Ausdruck handelt.
<br>

- [[Vektor]       (Skalar)    [nicht definiert]]
- [    [ ]           [ ]             [X]     ]  nicht definiert
- [    ( )           (X)             ( )     ]  Skalar
- [    [X]           [ ]             [ ]     ]  Vektor


@ADetails(3=BE;Tabelle)


--- 

--- 




__Aufgabe 1:__ Hör dir den Satz an und schreib ihn korrekt in das Eingabefeld.


{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Anna

[[    Anna    ]]

@ADetails(4=BE; Diktat)

--- 


__Aufgabe 2:__ Lass dir die Wörter vorlesen, die in die Lücken kommen und schreibe diese in die Lücken.

Anna ging in einen @diktat(Zoo). Dort konnte sie auf einem @diktat(Lama) reiten.

@ADetails(2=BE; Lückendiktat)

--- 


__Aufgabe 3:__ Setze das Komma an die richtige Stelle. (Auflösung ist blockiert.)


@orthography(2,`Der Bruder den ich mag.`,`Der Bruder, den ich mag.`)

@ADetails(1=BE; Komma)


--- 

--- 

**Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.

__$a)\;\;$__ $\dfrac{1}{4}$

@rectQuiz(1/4)

@ADetails(1=BE;Rechteckbruch)

__$b)\;\;$__ $\dfrac{2}{5}$

@circleQuiz(2/5)

@ADetails(1=BE;Kreisbruch)


--- 

--- 


Markiere die korrekt.

<div class="markerquiz">
@markred(rot)
@TextmarkerQuiz
</div>

@ADetails(1=BE;Marker)


--- 

--- 


Kommentare werden auch eingefroren

[[___]]

@ADetails(0=BE)

[[___ ___ ___ ___]]

@ADetails(0=BE)

Einfach noch ein KaTeX-Testfeld: [[     passt     ]]  @canvas

@ADetails(0=BE)


--- 

--- 

--- 

--- 




$a)\;\;$ $7000+123=$ [[  7123  ]] @canvas

@ADetails(1=BE;Normal)

--- 

--- 



Wähle blau aus.
- [[X]] Blau
- [[ ]] Gelb
- [[ ]] Rot
- [[ ]] Grün

@ADetails(1=BE;Multiple)

--- 

--- 



Wähle blau aus.
- [(X)] Blau
- [( )] Gelb
- [( )] Rot
- [( )] Grün

@ADetails(1=BE;Radio)

--- 

--- 

Wähle rot aus.
[[(rot)|blau|grün|gelb]]

@ADetails(1=BE;Auswahl)

--- 

--- 



Wähle gelb aus.
[->[rot|blau|grün|(gelb)]]

@ADetails(1=BE;Kachel)

--- 

--- 



$b)\;\;$ $6000+123=$ [[  6123  ]] m @canvas

@ADetails(1=BE;Tag1,Tag2)

--- 

--- 



**Entscheide**, ob es sich bei dem Term um einen Vektor, ein Skalar oder einen nicht definierten Ausdruck handelt.
<br>

- [[Vektor]       (Skalar)    [nicht definiert]]
- [    [ ]           [ ]             [X]     ]  nicht definiert
- [    ( )           (X)             ( )     ]  Skalar
- [    [X]           [ ]             [ ]     ]  Vektor


@ADetails(3=BE;Tabelle)


--- 

--- 




__Aufgabe 1:__ Hör dir den Satz an und schreib ihn korrekt in das Eingabefeld.


{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Anna

[[    Anna    ]]

@ADetails(4=BE; Diktat)

--- 


__Aufgabe 2:__ Lass dir die Wörter vorlesen, die in die Lücken kommen und schreibe diese in die Lücken.

Anna ging in einen @diktat(Zoo). Dort konnte sie auf einem @diktat(Lama) reiten.

@ADetails(2=BE; Lückendiktat)

--- 


__Aufgabe 3:__ Setze das Komma an die richtige Stelle. (Auflösung ist blockiert.)


@orthography(2,`Der Bruder den ich mag.`,`Der Bruder, den ich mag.`)

@ADetails(1=BE; Komma)


--- 

--- 

**Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.

__$a)\;\;$__ $\dfrac{1}{4}$

@rectQuiz(1/4)

@ADetails(1=BE;Rechteckbruch)

__$b)\;\;$__ $\dfrac{2}{5}$

@circleQuiz(2/5)

@ADetails(1=BE;Kreisbruch)


--- 

--- 


Markiere die korrekt.

<div class="markerquiz">
@markred(rot)
@TextmarkerQuiz
</div>

@ADetails(1=BE;Marker)


--- 

--- 


Kommentare werden auch eingefroren

[[___]]

@ADetails(0=BE)

[[___ ___ ___ ___]]

@ADetails(0=BE)

Einfach noch ein KaTeX-Testfeld: [[     passt     ]]  @canvas

@ADetails(0=BE)






# Koordinatensystemquizze


@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=10;width=700;id=A1`)

@AchsenBeschriftung(`id=A1;xlabel=$x$;ylabel=$y$`)



<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Ziehe** den Punkt $A$ **auf** die Koordinaten $(1|4)$.

@ErzeugePunkt(`A1;A;1;4`,`<!--  -->`)

@ADetails(BE=1;Koordinatensystem)
</div>

<div class="flex-child">

__$b)\;\;$__ **Ziehe** den Punkt $B$ **auf** die Koordinaten $(5|0)$.

@ErzeugePunkt(`A1;B;5;0`,`<!--  -->`)

@ADetails(BE=1;Koordinatensystem)

</div>

<div class="flex-child">

__$c)\;\;$__ **Ziehe** den Punkt $C$ **auf** die Koordinaten $(7|6)$.

@ErzeugePunkt(`A1;C;7;6`,`<!--  -->`)

@ADetails(BE=1;Koordinatensystem)

</div>
</section>









# Abgabe




@Abgabe

@Auswertung(F12;Tab)



