<!--
version: 0.0.1
language: de
author: Martin Lommatzsch
comment: LiaScript-Freezelink Auswertungsmodul – ADetails, BE, Tags, Evaluation, Fraud-Warnings

@onload
(function () {
  function getRootWindow() {
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch (e) {}
    return w;
  }

  const ROOT = getRootWindow();
  const REGKEY = "__LIA_FREEZE_EVALUATION_V1__";
  if (ROOT[REGKEY]) return;

  const CORE = ROOT.__LIA_FREEZE_CORE__ || null;

  if (!CORE) {
    console.warn("[LIA-FREEZE-EVAL] FreezeCore nicht gefunden: window.__LIA_FREEZE_CORE__ fehlt.");
    return;
  }

  const MOD = {
    EVALUATION_TITLE: "Auswertung",
    refreshTimer: 0,
    assignmentDetailSerial: 0,
    manualAwardValuesByKey: Object.create(null),
    evaluationPlaceholderHash: "",
    declaredEvaluationByHash: Object.create(null),
    declaredEvaluationOptions: {
      trackF12: false,
      trackTab: false
    },
    submissionStartHash: ""
  };

  ROOT[REGKEY] = MOD;

  // =========================================================
  // Basis-Helfer
  // =========================================================

  function log() {
    if (!CORE.DEBUG) return;
    const args = Array.prototype.slice.call(arguments);
    args.unshift("[LIA-FREEZE-EVAL]");
    console.log.apply(console, args);
  }

  function warn() {
    if (!CORE.DEBUG) return;
    const args = Array.prototype.slice.call(arguments);
    args.unshift("[LIA-FREEZE-EVAL]");
    console.warn.apply(console, args);
  }

  function normalizeSpace(str) {
    if (typeof CORE.normalizeSpace === "function") {
      return CORE.normalizeSpace(str);
    }
    return String(str || "").replace(/\s+/g, " ").trim();
  }

  function escapeHtml(str) {
    if (typeof CORE.escapeHtml === "function") {
      return CORE.escapeHtml(str);
    }

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

  function hashSort(a, b) {
    if (typeof CORE.hashSort === "function") {
      return CORE.hashSort(a, b);
    }

    const na = Number(String(a && a.h || "").replace(/^#/, ""));
    const nb = Number(String(b && b.h || "").replace(/^#/, ""));
    if (isFinite(na) && isFinite(nb)) return na - nb;
    return String(a && a.h || "").localeCompare(String(b && b.h || ""));
  }

  function cleanHashValue(raw) {
    if (typeof CORE.cleanHashValue === "function") {
      return CORE.cleanHashValue(raw);
    }
    return String(raw || "") || "#1";
  }

  function stripLeadingHeaderComment(text) {
    let src = String(text || "").replace(/^\uFEFF/, "");
    if (/^\s*<!--/.test(src)) {
      const end = src.indexOf("-->");
      if (end >= 0) src = src.slice(end + 3);
    }
    return src;
  }

  function compareElementsInDocumentOrder(a, b) {
    if (typeof CORE.compareElementsInDocumentOrder === "function") {
      return CORE.compareElementsInDocumentOrder(a, b);
    }

    if (a === b) return 0;
    if (!a) return 1;
    if (!b) return -1;

    const pos = a.compareDocumentPosition(b);
    if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
    if (pos & Node.DOCUMENT_POSITION_PRECEDING) return 1;
    return 0;
  }

  function getCurrentHash() {
    if (typeof CORE.getCurrentHash === "function") {
      return CORE.getCurrentHash();
    }
    return cleanHashValue(window.location.hash || "#1");
  }

  function getDeclaredSlides() {
    if (typeof CORE.getDeclaredSlides === "function") {
      return CORE.getDeclaredSlides();
    }
    return [];
  }

  function getDeclaredSlideByHash(hash) {
    if (typeof CORE.getDeclaredSlideByHash === "function") {
      return CORE.getDeclaredSlideByHash(hash);
    }

    const declared = getDeclaredSlides();
    for (let i = 0; i < declared.length; i++) {
      if (String(declared[i].h || "") === String(hash || "")) {
        return declared[i];
      }
    }
    return null;
  }

  function getSnapshotPayload() {
    if (typeof CORE.getSnapshotPayload === "function") {
      return CORE.getSnapshotPayload();
    }
    return null;
  }

  function getSnapshotSlideForHash(hash) {
    if (typeof CORE.getSnapshotSlideForHash === "function") {
      return CORE.getSnapshotSlideForHash(hash);
    }

    const payload = getSnapshotPayload();
    if (!payload || !Array.isArray(payload.s)) return null;

    for (let i = 0; i < payload.s.length; i++) {
      if (String(payload.s[i].h || "") === String(hash || "")) {
        return payload.s[i];
      }
    }

    return null;
  }

  function isSharedFreezeLinkMode() {
    if (typeof CORE.isSharedFreezeLinkMode === "function") {
      return CORE.isSharedFreezeLinkMode();
    }

    return !!(
      document.body &&
      document.body.classList.contains("lia-shared-freeze-link")
    );
  }

  function getDisplayName() {
    if (typeof CORE.getDisplayName === "function") {
      return CORE.getDisplayName();
    }
    return "";
  }

  function getContentHost() {
    if (typeof CORE.getContentHost === "function") {
      return CORE.getContentHost();
    }
    return document.body;
  }

  function getFeedbackColor(kind) {
    if (typeof CORE.getEvaluationFeedbackColor === "function") {
      return CORE.getEvaluationFeedbackColor(kind);
    }

    const fallback = {
      correct: "rgb(25, 135, 84)",
      wrong: "rgb(220, 53, 69)",
      resolved: "rgb(108, 117, 125)"
    };

    return fallback[kind] || "currentColor";
  }

  function requestFreezeUiRefresh() {
    if (typeof CORE.refreshFreezeBar === "function") CORE.refreshFreezeBar();
    if (typeof CORE.syncFrozenScreens === "function") CORE.syncFrozenScreens();
    if (typeof CORE.reinforceFrozenUi === "function") CORE.reinforceFrozenUi();
  }

  // =========================================================
  // @Auswertung(...)
  // =========================================================

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
        if (/^f12$/i.test(flag)) out.trackF12 = true;
        if (/^tab$/i.test(flag)) out.trackTab = true;
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
      if (evalMatch) hasEvaluationMacro = true;

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
        t: MOD.EVALUATION_TITLE,
        vt: "evaluation"
      });
    }

    return out;
  }

  // =========================================================
  // @ADetails(...)
  // =========================================================

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
      if (Number.isFinite(n)) out.pointsValue = n;
    }

    function adoptTags(rawTags) {
      const parts = String(rawTags || "")
        .split(",")
        .map(function (tag) { return normalizeSpace(tag); })
        .filter(Boolean);

      parts.forEach(function (tag) {
        if (out.tags.indexOf(tag) < 0) out.tags.push(tag);
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
        if (task.tg.indexOf(clean) < 0) task.tg.push(clean);
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

    function isGroupedInlineQuizLine(line) {
      const txt = normalizeSpace(line);

      if (!txt) return false;
      if (/^\s*<!--/.test(txt)) return false;
      if (/^\s*@ADetails\b/.test(line)) return false;
      if (/^\s*-\s+/.test(line)) return false;
      if (/@diktat\s*\(/.test(line)) return false;
      if (/@orthography\s*\(/.test(line)) return false;
      if (/@(?:rectQuiz|circleQuiz|TextmarkerQuiz|ErzeugePunkt)\b/.test(line)) return false;
      if (/\[\->\[[^\n]*?\]\]/.test(line)) return true;
      if (/\[\[[^\n]*?\]\]/.test(line)) return true;

      return false;
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

      if (/^\s*-\s+/.test(line) && /(\[\[|\[\()/.test(line)) {
        pushTask();

        while (i + 1 < lines.length) {
          const nextLine = String(lines[i + 1] || "");
          if (!/^\s*-\s+/.test(nextLine)) break;
          i += 1;
        }

        continue;
      }

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

      const orthographyMatches = line.match(/@orthography\s*\(/g) || [];
      orthographyMatches.forEach(function () { pushTask(); });
      if (orthographyMatches.length) continue;

      const macroMatches = line.match(/@(?:rectQuiz|circleQuiz|TextmarkerQuiz|ErzeugePunkt)\b/g) || [];
      macroMatches.forEach(function () { pushTask(); });
      if (macroMatches.length) continue;

      if (isGroupedInlineQuizLine(line)) {
        pushTask();

        while (i + 1 < lines.length) {
          const nextLine = String(lines[i + 1] || "");
          const nextTrimmed = normalizeSpace(nextLine);

          if (!nextTrimmed) break;
          if (/^\s*@ADetails\b/.test(nextLine)) break;
          if (/^\s*<!--/.test(nextTrimmed)) {
            i += 1;
            continue;
          }
          if (!isGroupedInlineQuizLine(nextLine)) break;

          i += 1;
        }

        continue;
      }
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
        const rawBe = Object.prototype.hasOwnProperty.call(task, "be") ? task.be : 1;
        const be = Number.isFinite(Number(rawBe)) ? Math.max(0, Number(rawBe)) : 1;

        const tags = Array.isArray(task.tg)
          ? task.tg
              .map(function (tag) { return normalizeSpace(tag); })
              .filter(Boolean)
              .filter(function (tag, tagIdx, arr) { return arr.indexOf(tag) === tagIdx; })
          : [];

        totalBE += be;

        tags.forEach(function (tag) {
          if (!tagMap[tag]) {
            tagMap[tag] = { total: 0, tasks: 0 };
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

  // =========================================================
  // State-Meta / Rehydration
  // =========================================================

  function getDeclaredTaskListForHash(hash) {
    const entry = MOD.declaredEvaluationByHash[String(hash || "")] || null;
    return Array.isArray(entry && entry.tl) ? entry.tl : [];
  }

  function getEvaluationStateTags(state) {
    const raw = state && state.tg;

    if (Array.isArray(raw)) {
      return raw
        .map(function (tag) { return normalizeSpace(tag); })
        .filter(Boolean)
        .filter(function (tag, idx, arr) { return arr.indexOf(tag) === idx; });
    }

    if (typeof raw === "string") {
      return raw
        .split(",")
        .map(function (tag) { return normalizeSpace(tag); })
        .filter(Boolean)
        .filter(function (tag, idx, arr) { return arr.indexOf(tag) === idx; });
    }

    return [];
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
      const rawBe = Object.prototype.hasOwnProperty.call(task, "be") ? task.be : 1;
      state.be = Number.isFinite(Number(rawBe)) ? Math.max(0, Number(rawBe)) : 1;
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
        .filter(function (tag, idx, arr) { return arr.indexOf(tag) === idx; });
    } else {
      delete state.tg;
    }

    return state;
  }

  function rehydrateSnapshotEvaluationMetaFromSource(payload) {
    if (!payload || !Array.isArray(payload.s)) return payload;

    payload.s.forEach(function (slide) {
      const hash = cleanHashValue(slide && slide.h || "");
      if (!hash) return;

      ["q", "d", "m", "c", "o", "fq", "mq", "cq"].forEach(function (key) {
        const arr = Array.isArray(slide && slide[key]) ? slide[key] : [];
        arr.forEach(function (state) {
          rehydrateStateEvaluationMetaFromDeclaredTask(hash, state);
        });
      });
    });

    return payload;
  }

  // =========================================================
  // Auswertungslogik
  // =========================================================

  function getEvaluationUnits(state) {
    const n = Number(state && state.be);
    if (Number.isFinite(n) && n >= 0) return n;
    return 1;
  }

  function getEvaluationOutcome(state) {
    state = state || {};

    const s = String(state.s || "");
    const fc = String(state.fc || "");
    const cc = Number(state.cc || 0) || 0;
    const orthoSolved = Number(state.sv || 0) === 1;

    if (s === "r" || fc === "d") return "resolved";
    if (s === "s" || fc === "s") return "correct";
    if (orthoSolved) return "correct";
    if (fc === "e") return "wrong";
    if (Number(state.nm || 0) === 1) return "not_made";
    if (cc > 0) return "wrong";

    return "";
  }

  function collectStoredEvaluationStatesByTaskIndex(slide, hash) {
    const map = Object.create(null);

    ["q", "d", "m", "c", "o", "fq", "mq", "cq"].forEach(function (key) {
      const arr = Array.isArray(slide && slide[key]) ? slide[key] : [];

      arr.forEach(function (state) {
        rehydrateStateEvaluationMetaFromDeclaredTask(hash, state);

        const di = Number(state && state.di || 0);
        if (!Number.isFinite(di) || di <= 0) return;

        if (!map[di]) {
          map[di] = {
            key: key,
            state: state
          };
        }
      });
    });

    return map;
  }

  function makeSyntheticEvaluationStateFromDeclaredTask(hash, taskIndex) {
    const state = {
      di: Number(taskIndex || 0),
      nm: 1
    };

    rehydrateStateEvaluationMetaFromDeclaredTask(hash, state);
    return state;
  }

  function visitEvaluationStates(payload, visitor) {
    if (!payload || !Array.isArray(payload.s) || typeof visitor !== "function") return;

    const slideByHash = Object.create(null);
    payload.s.forEach(function (slide) {
      const hash = cleanHashValue(slide && slide.h || "");
      if (!hash) return;
      slideByHash[hash] = slide;
    });

    const declaredMap = MOD.declaredEvaluationByHash || Object.create(null);
    const declaredHashes = Object.keys(declaredMap).sort(function (a, b) {
      return hashSort({ h: a }, { h: b });
    });

    const alreadyHandledHashes = Object.create(null);

    declaredHashes.forEach(function (hash) {
      const slide = slideByHash[hash] || { h: hash };
      const taskList = getDeclaredTaskListForHash(hash);

      if (Array.isArray(taskList) && taskList.length > 0) {
        const storedByDi = collectStoredEvaluationStatesByTaskIndex(slide, hash);

        for (let i = 1; i <= taskList.length; i++) {
          const hit = storedByDi[i];
          const state = hit ? hit.state : makeSyntheticEvaluationStateFromDeclaredTask(hash, i);
          visitor(state, hit ? hit.key : "nm", slide);
        }

        alreadyHandledHashes[hash] = 1;
        return;
      }

      ["q", "d", "m", "c", "o", "fq", "mq", "cq"].forEach(function (key) {
        const arr = Array.isArray(slide && slide[key]) ? slide[key] : [];
        arr.forEach(function (state) {
          rehydrateStateEvaluationMetaFromDeclaredTask(hash, state);
          visitor(state, key, slide);
        });
      });

      alreadyHandledHashes[hash] = 1;
    });

    payload.s.forEach(function (slide) {
      const hash = cleanHashValue(slide && slide.h || "");
      if (!hash || alreadyHandledHashes[hash]) return;

      ["q", "d", "m", "c", "o", "fq", "mq", "cq"].forEach(function (key) {
        const arr = Array.isArray(slide && slide[key]) ? slide[key] : [];
        arr.forEach(function (state) {
          rehydrateStateEvaluationMetaFromDeclaredTask(hash, state);
          visitor(state, key, slide);
        });
      });
    });
  }

  function getDeclaredEvaluationTotals() {
    const out = { total: 0, tasks: 0 };
    const map = MOD.declaredEvaluationByHash || Object.create(null);

    Object.keys(map).forEach(function (hash) {
      const entry = map[hash] || {};
      const total = Number(entry.tb || 0);
      const tasks = Number(entry.tt || 0);

      if (Number.isFinite(total) && total > 0) out.total += total;
      if (Number.isFinite(tasks) && tasks > 0) out.tasks += tasks;
    });

    return out;
  }

  function getDeclaredEvaluationTagTotals() {
    const bucket = Object.create(null);
    const map = MOD.declaredEvaluationByHash || Object.create(null);

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

        if (Number.isFinite(total) && total > 0) bucket[tag].total += total;
        if (Number.isFinite(tasks) && tasks > 0) bucket[tag].tasks += tasks;
      });
    });

    return bucket;
  }

  function makeManualAwardStoreKey(hash, taskIndex) {
    const cleanHash = cleanHashValue(hash || "");
    const idx = Number(taskIndex || 0);
    if (!cleanHash || !idx) return "";
    return cleanHash + "::task::" + idx;
  }

  function hasStoredManualAwardValue(key) {
    return !!(key && Object.prototype.hasOwnProperty.call(MOD.manualAwardValuesByKey, key));
  }

  function getStoredManualAwardValue(key) {
    return hasStoredManualAwardValue(key) ? String(MOD.manualAwardValuesByKey[key]) : "";
  }

  function setStoredManualAwardValue(key, value) {
    if (!key) return;
    MOD.manualAwardValuesByKey[key] = String(value == null ? "" : value);
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
        resolved: 0,
        notMade: 0
      };
    }

    const outcome = getEvaluationOutcome(state);

    if (outcome === "correct") return { correct: be, wrong: 0, resolved: 0, notMade: 0 };
    if (outcome === "wrong") return { correct: 0, wrong: be, resolved: 0, notMade: 0 };
    if (outcome === "resolved") return { correct: 0, wrong: 0, resolved: be, notMade: 0 };
    if (outcome === "not_made") return { correct: 0, wrong: 0, resolved: 0, notMade: be };

    return { correct: 0, wrong: 0, resolved: 0, notMade: 0 };
  }

  function buildSnapshotEvaluationStats(payload) {
    const declared = getDeclaredEvaluationTotals();

    const stats = {
      total: declared.total,
      correct: 0,
      wrong: 0,
      resolved: 0,
      notMade: 0,
      tasks: declared.tasks
    };

    visitEvaluationStates(payload, function (state, key, slide) {
      const alloc = getEvaluationAllocation(slide, state);
      stats.correct += alloc.correct;
      stats.wrong += alloc.wrong;
      stats.resolved += alloc.resolved;
      stats.notMade += alloc.notMade;
    });

    if (stats.total <= 0 && stats.tasks <= 0) {
      visitEvaluationStates(payload, function (state) {
        const be = getEvaluationUnits(state);
        stats.total += be;
        stats.tasks += 1;
      });
    }

    return stats;
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
          .filter(function (tag, idx, arr) { return arr.indexOf(tag) === idx; });
      }
    }

    return getEvaluationStateTags(state);
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

  // =========================================================
  // Rendering der Auswertungsfolie
  // =========================================================

  function formatEvaluationPercent(part, total) {
    const p = total > 0 ? (part / total) * 100 : 0;
    const rounded = Math.round(p * 10) / 10;
    return String(rounded).replace(".", ",");
  }

  function renderEvaluationCard(label, value, kind) {
    const tone = escapeHtml(getFeedbackColor(kind));

    return [
      '<div style="padding:1rem 1.05rem;border-radius:12px;border:1px solid var(--lia-course-border);background:var(--lia-course-bg);color:var(--lia-course-fg);">',
      '<div style="font-size:3rem;opacity:.98;font-weight:700;margin-bottom:.35rem;color:', tone, ';">',
      escapeHtml(label),
      "</div>",
      '<div style="font-size:5rem;line-height:1;font-weight:800;color:', tone, ';">',
      escapeHtml(String(value)),
      "</div>",
      "</div>"
    ].join("");
  }

  function renderEvaluationTagMetricCard(label, value, kind) {
    let tone = "var(--lia-course-fg)";
    if (kind === "correct" || kind === "wrong" || kind === "resolved") {
      tone = getFeedbackColor(kind);
    }

    return [
      '<div style="padding:1rem 1.05rem;border-radius:12px;border:1px solid var(--lia-course-border);background:var(--lia-course-bg);color:var(--lia-course-fg);min-width:150px;box-sizing:border-box;">',
      '<div style="font-size:1.2rem;opacity:.98;font-weight:700;margin-bottom:.35rem;color:', tone, ';">',
      escapeHtml(label),
      "</div>",
      '<div style="font-size:2.5rem;line-height:1.05;font-weight:800;color:', tone, ';">',
      escapeHtml(String(value)),
      "</div>",
      "</div>"
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
      "</div>",
      '<div style="overflow-x:auto;">',
      '<div style="display:grid;grid-template-columns:repeat(5,minmax(150px,1fr));gap:.75rem;min-width:820px;">',
      renderEvaluationTagMetricCard("Richtig", correct, "correct"),
      renderEvaluationTagMetricCard("Falsch", wrong, "wrong"),
      renderEvaluationTagMetricCard("Gelöst", resolved, "resolved"),
      renderEvaluationTagMetricCard("Erreicht", correct + " von " + total, "neutral"),
      renderEvaluationTagMetricCard("Quote", percentText + "%", "neutral"),
      "</div>",
      "</div>",
      "</div>"
    ].join("");
  }

  function renderF12FraudWarningHtml() {
    const payload = getSnapshotPayload();
    if (!isSharedFreezeLinkMode()) return "";

    const count = Number(payload && payload.sec && payload.sec.f12 || 0) || 0;
    const wantsTracking = !!(payload && payload.sec && (payload.sec.trackF12 === 1 || payload.sec.trackF12 === true));

    if (!wantsTracking || count <= 0) return "";

    const wrongColor = escapeHtml(getFeedbackColor("wrong"));

    return [
      '<div style="margin-top:1rem;font-weight:800;font-size:2.35rem;padding:1rem 1.05rem;border-radius:12px;',
      "border:1px solid ", wrongColor, ";",
      "background:color-mix(in srgb, ", wrongColor, " 12%, var(--lia-course-bg) 88%);",
      "color:", wrongColor, ';">',
      "Ein Betrugsversuch durch Drücken der F12-Taste bzw. Öffnen der DevTools liegt vor.",
      "</div>"
    ].join("");
  }

  function renderTabFraudWarningHtml() {
    const payload = getSnapshotPayload();
    if (!isSharedFreezeLinkMode()) return "";

    const count = Number(payload && payload.sec && payload.sec.tab || 0) || 0;
    const wantsTracking = !!(payload && payload.sec && (payload.sec.trackTab === 1 || payload.sec.trackTab === true));

    if (!wantsTracking || count <= 0) return "";

    const wrongColor = escapeHtml(getFeedbackColor("wrong"));

    return [
      '<div style="margin-top:.85rem;font-weight:800;font-size:2.35rem;padding:1rem 1.05rem;border-radius:12px;',
      "border:1px solid ", wrongColor, ";",
      "background:color-mix(in srgb, ", wrongColor, " 12%, var(--lia-course-bg) 88%);",
      "color:", wrongColor, ';">',
      "Ein Betrugsversuch durch Verlassen des Tabs oder Browserfensters liegt vor.",
      "</div>"
    ].join("");
  }

  function renderEvaluationPlaceholderHtml(hash) {
    const payload = getSnapshotPayload();
    const decl = getDeclaredSlideByHash(hash);
    const title = normalizeSpace(decl && decl.t || MOD.EVALUATION_TITLE);
    const name = getDisplayName();
    const stats = buildSnapshotEvaluationStats(payload);
    const tagStats = buildSnapshotEvaluationStatsByTag(payload);

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
          "</div>"
        ].join("")
      : "";

    return [
      '<div style="font-weight:800;font-size:4.35rem;line-height:1.2;margin-bottom:.6rem;">',
      escapeHtml(title),
      "</div>",

      '<div style="margin-bottom:1rem;opacity:0.92;font-weight:700;">',
      name
        ? (escapeHtml(name) + ": Zusammenfassung des eingefrorenen Abgabestands")
        : "Zusammenfassung des eingefrorenen Abgabestands",
      "</div>",

      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:.85rem;margin-bottom:1rem;">',
      renderEvaluationCard("Richtig", stats.correct, "correct"),
      renderEvaluationCard("Falsch", stats.wrong, "wrong"),
      renderEvaluationCard("Aufgelöst", stats.resolved, "resolved"),
      renderEvaluationCard("Nicht gemacht", stats.notMade, "neutral"),
      "</div>",

      '<div style="font-weight:800;font-size:2.35rem;padding:1rem 1.05rem;border-radius:12px;border:1px solid var(--lia-course-border);background:var(--lia-course-bg);color:var(--lia-course-fg);">',
      escapeHtml(String(correct)),
      " von ",
      escapeHtml(String(total)),
      ' Bewertungseinheiten sind erreicht. <br> Das entspricht &nbsp;&nbsp;&nbsp; <strong><big><big><big><big>',
      escapeHtml(percentText),
      '%</big></big></big></big></big></strong>.<br>',
      '<span style="opacity:.82;">Berücksichtigt werden die im Freeze-Snapshot gespeicherten Aufgabenzustände.</span>',
      "</div>",

      fraudWarningF12,
      fraudWarningTab,
      tagSection
    ].join("");
  }

  function isEvaluationTarget(hash) {
    const decl = getDeclaredSlideByHash(hash);
    return !!(decl && decl.vt === "evaluation");
  }

  function refreshEvaluationPlaceholderIfVisible() {
    const hash = cleanHashValue(getCurrentHash() || "");
    if (!hash || !isEvaluationTarget(hash)) return;

    MOD.evaluationPlaceholderHash = hash;

    if (typeof CORE.setEvaluationPlaceholderHtml === "function") {
      CORE.setEvaluationPlaceholderHtml(renderEvaluationPlaceholderHtml(hash), hash);
    } else {
      requestFreezeUiRefresh();
    }
  }

  // =========================================================
  // Manuelle BE-Felder
  // =========================================================

  function collectAssignmentDetailMarkersFromRoot(root) {
    if (!root || !root.querySelectorAll) return [];

    return Array.from(root.querySelectorAll("[data-adetails]")).filter(function (el) {
      if (!(el instanceof Element)) return false;
      if (el.closest("#lia-freeze-bar")) return false;
      if (el.closest(".lia-submit-box")) return false;
      return true;
    });
  }

  function collectOrderedTaskRootsForAssignmentDetails(root) {
    if (typeof CORE.collectSupportedQuizRootsFromRoot === "function") {
      const host = root || getContentHost() || document.body;
      const ordered = CORE.collectSupportedQuizRootsFromRoot(host) || [];
      const unique = Array.from(new Set(ordered.filter(Boolean)));
      unique.sort(compareElementsInDocumentOrder);
      return unique;
    }

    const host = root || getContentHost() || document.body;
    const fallback = Array.from(host.querySelectorAll(".lia-quiz, .orthography-wrap, .markerquiz")).filter(Boolean);
    fallback.sort(compareElementsInDocumentOrder);
    return fallback;
  }

  function getAssignmentDetailTaskRoot(marker) {
    if (!marker || !(marker instanceof Element)) return null;

    const scope =
      marker.closest(".lia-slide__content, .lia-content, main, article, section, #content") ||
      getContentHost() ||
      document.body;

    const taskIndex = Number(marker.getAttribute("data-adetails-task-index") || 0);
    if (!Number.isFinite(taskIndex) || taskIndex <= 0) return null;

    const orderedTaskRoots = collectOrderedTaskRootsForAssignmentDetails(scope);
    return orderedTaskRoots[taskIndex - 1] || null;
  }

  function getAssignmentDetailQuizRoot(taskRoot) {
    if (!taskRoot || !(taskRoot instanceof Element)) return null;

    if (taskRoot.classList && taskRoot.classList.contains("markerquiz")) {
      if (typeof CORE.getMarkerQuizLiaRoot === "function") {
        return CORE.getMarkerQuizLiaRoot(taskRoot) || taskRoot.querySelector(".lia-quiz") || null;
      }
      return taskRoot.querySelector(".lia-quiz") || null;
    }

    if (taskRoot.classList && taskRoot.classList.contains("orthography-wrap")) {
      if (typeof CORE.getOrthographyQuizRootFromWrap === "function") {
        return CORE.getOrthographyQuizRootFromWrap(taskRoot) || null;
      }
    }

    if (typeof CORE.getFractionQuizRootFromRep === "function") {
      const fq = CORE.getFractionQuizRootFromRep(taskRoot);
      if (fq) return fq;
    }

    if (typeof CORE.getTileQuizInnerQuiz === "function") {
      const tileQuiz = CORE.getTileQuizInnerQuiz(taskRoot);
      if (tileQuiz) return tileQuiz;
    }

    if (typeof CORE.normalizeActualQuizRoot === "function") {
      return CORE.normalizeActualQuizRoot(taskRoot) || taskRoot.querySelector(".lia-quiz") || null;
    }

    return taskRoot.matches(".lia-quiz") ? taskRoot : (taskRoot.querySelector(".lia-quiz") || null);
  }

  function ensureAssignmentDetailOwnerId(marker) {
    if (!marker) return "";

    if (!marker.id) {
      MOD.assignmentDetailSerial += 1;
      marker.id = "lia-adetails-" + MOD.assignmentDetailSerial;
    }

    return marker.id;
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

    return badge;
  }

  function getSnapshotTaskStateForMarker(marker) {
    const payload = getSnapshotPayload();
    if (!marker || !payload) return null;

    const hash = cleanHashValue(getCurrentHash() || "");
    const taskIndex = Number(marker.getAttribute("data-adetails-task-index") || 0);

    if (!hash || !taskIndex) return null;

    const slide = getSnapshotSlideForHash(hash);
    if (!slide) return null;

    const buckets = ["q", "d", "m", "c", "o", "fq", "mq", "cq"];

    for (let i = 0; i < buckets.length; i++) {
      const arr = Array.isArray(slide[buckets[i]]) ? slide[buckets[i]] : [];

      for (let j = 0; j < arr.length; j++) {
        const state = arr[j];
        if (Number(state && state.di || 0) === taskIndex) return state;
      }
    }

    return null;
  }

  function getAssignmentDefaultAwardValue(spec, marker) {
    const be = spec && spec.pointsValue !== null ? Number(spec.pointsValue) : 1;

    if (isSharedFreezeLinkMode()) {
      const storedState = getSnapshotTaskStateForMarker(marker);
      if (storedState) {
        const outcome = getEvaluationOutcome(storedState);
        if (outcome === "correct") return String(be);
        if (outcome === "wrong" || outcome === "resolved" || outcome === "not_made") return "0";
      }
    }

    return "0";
  }

  function renderAssignmentDetailBadgeContent(badge, marker, spec) {
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

    const hash = cleanHashValue(getCurrentHash() || "");
    const taskIndex = Number(marker.getAttribute("data-adetails-task-index") || 0);
    const manualKey = makeManualAwardStoreKey(hash, taskIndex);

    const input = document.createElement("input");
    input.type = "text";
    input.inputMode = "decimal";
    input.autocomplete = "off";
    input.className = "lia-adetails-award-input";
    input.setAttribute("data-adetails-award-key", manualKey);

    const initialValue = hasStoredManualAwardValue(manualKey)
      ? getStoredManualAwardValue(manualKey)
      : getAssignmentDefaultAwardValue(spec, marker);

    input.value = initialValue;

    function handleManualAwardChange() {
      setStoredManualAwardValue(manualKey, input.value);
      refreshEvaluationPlaceholderIfVisible();
    }

    input.addEventListener("input", handleManualAwardChange);
    input.addEventListener("change", handleManualAwardChange);

    const sep = document.createElement("span");
    sep.textContent = "/";

    const total = document.createElement("span");
    total.textContent = spec.badge;

    badge.appendChild(input);
    badge.appendChild(sep);
    badge.appendChild(total);
    badge.style.display = "inline-flex";

    return true;
  }

  function applyAssignmentDetailToMarker(marker) {
    if (!marker || !(marker instanceof Element)) return false;

    const spec = parseAssignmentDetails(marker.getAttribute("data-adetails") || "");
    const taskRoot = getAssignmentDetailTaskRoot(marker);
    const quizRoot = getAssignmentDetailQuizRoot(taskRoot);
    const checkBtn =
      (quizRoot && quizRoot.querySelector(".lia-quiz__check")) ||
      (taskRoot && taskRoot.querySelector && taskRoot.querySelector(".lia-quiz__check")) ||
      null;

    function applySpecToElement(el) {
      if (!el || !(el instanceof Element)) return;

      el.setAttribute("data-adetails-raw", spec.raw || "");

      if (spec.badge) el.setAttribute("data-adetails-badge", spec.badge);
      else el.removeAttribute("data-adetails-badge");

      if (spec.pointsValue !== null) el.setAttribute("data-adetails-points", String(spec.pointsValue));
      else el.removeAttribute("data-adetails-points");

      if (spec.tags && spec.tags.length) {
        el.setAttribute("data-adetail-tags", JSON.stringify(spec.tags));
      } else {
        el.removeAttribute("data-adetail-tags");
      }
    }

    applySpecToElement(marker);
    applySpecToElement(taskRoot);
    applySpecToElement(quizRoot);
    applySpecToElement(checkBtn);

    if (checkBtn) {
      const ownerId = ensureAssignmentDetailOwnerId(marker);
      const badge = ensureAssignmentDetailBadge(checkBtn, ownerId);

      if (badge) {
        renderAssignmentDetailBadgeContent(badge, marker, spec);
      }
    }

    marker.setAttribute("data-adetails-bound", "1");
    return !!(taskRoot || quizRoot || checkBtn);
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
        if (pos <= 0) taskIndex = i + 1;
        else break;
      }

      if (taskIndex > 0) marker.setAttribute("data-adetails-task-index", String(taskIndex));
      else marker.removeAttribute("data-adetails-task-index");
    });

    markers.forEach(function (marker) {
      applyAssignmentDetailToMarker(marker);
    });
  }

  function scheduleAssignmentDetailsRefresh(delay) {
    clearTimeout(MOD.refreshTimer);

    MOD.refreshTimer = setTimeout(function () {
      try {
        refreshAssignmentDetails();
      } catch (err) {
        console.error("[LIA-FREEZE-EVAL] adetails-refresh-error", err);
      }
    }, delay || 80);
  }

  // =========================================================
  // Bridge zu FreezeCore
  // =========================================================

  function analyzeSource(text) {
    MOD.declaredEvaluationOptions = parseEvaluationOptionsFromSource(text);
    MOD.declaredEvaluationByHash = parseDeclaredEvaluationFromSource(text);
    MOD.submissionStartHash = parseSubmissionHashFromSource(text);

    return {
      evaluationOptions: copyJson(MOD.declaredEvaluationOptions),
      evaluationByHash: copyJson(MOD.declaredEvaluationByHash),
      submissionStartHash: MOD.submissionStartHash,
      declaredSlides: parseDeclaredSlidesFromSource(text)
    };
  }

  const API = {
    parseEvaluationMacroOptions: parseEvaluationMacroOptions,
    parseEvaluationOptionsFromSource: parseEvaluationOptionsFromSource,
    parseDeclaredEvaluationFromSource: parseDeclaredEvaluationFromSource,
    parseDeclaredSlidesFromSource: parseDeclaredSlidesFromSource,
    parseSubmissionHashFromSource: parseSubmissionHashFromSource,

    parseAssignmentDetails: parseAssignmentDetails,
    collectDeclaredTasksFromSlideLines: collectDeclaredTasksFromSlideLines,

    analyzeSource: analyzeSource,
    rehydrateSnapshotEvaluationMetaFromSource: rehydrateSnapshotEvaluationMetaFromSource,

    getDeclaredEvaluationByHash: function () {
      return MOD.declaredEvaluationByHash;
    },
    getDeclaredEvaluationOptions: function () {
      return MOD.declaredEvaluationOptions;
    },
    getSubmissionStartHash: function () {
      return MOD.submissionStartHash;
    },

    isEvaluationTarget: isEvaluationTarget,
    buildSnapshotEvaluationStats: buildSnapshotEvaluationStats,
    buildSnapshotEvaluationStatsByTag: buildSnapshotEvaluationStatsByTag,
    renderEvaluationPlaceholderHtml: renderEvaluationPlaceholderHtml,

    refreshAssignmentDetails: refreshAssignmentDetails,
    scheduleAssignmentDetailsRefresh: scheduleAssignmentDetailsRefresh,

    refreshEvaluationPlaceholderIfVisible: refreshEvaluationPlaceholderIfVisible,
    getManualAwardStoreKey: makeManualAwardStoreKey,
    getStoredManualAwardValue: getStoredManualAwardValue,
    setStoredManualAwardValue: setStoredManualAwardValue
  };

  ROOT.__LIA_FREEZE_EVALUATION__ = API;

  // FreezeCore direkt erweitern
  CORE.evaluation = API;
  CORE.parseEvaluationOptionsFromSource = parseEvaluationOptionsFromSource;
  CORE.parseDeclaredEvaluationFromSource = parseDeclaredEvaluationFromSource;
  CORE.parseSubmissionHashFromSource = parseSubmissionHashFromSource;
  CORE.parseAssignmentDetails = parseAssignmentDetails;
  CORE.rehydrateSnapshotEvaluationMetaFromSource = rehydrateSnapshotEvaluationMetaFromSource;
  CORE.buildSnapshotEvaluationStats = buildSnapshotEvaluationStats;
  CORE.buildSnapshotEvaluationStatsByTag = buildSnapshotEvaluationStatsByTag;
  CORE.renderEvaluationPlaceholderHtml = renderEvaluationPlaceholderHtml;
  CORE.refreshAssignmentDetails = refreshAssignmentDetails;
  CORE.scheduleAssignmentDetailsRefresh = scheduleAssignmentDetailsRefresh;
  CORE.isEvaluationTarget = isEvaluationTarget;

  // Wenn der Core einen Hook-Mechanismus hat, direkt registrieren
  if (typeof CORE.registerEvaluationModule === "function") {
    CORE.registerEvaluationModule(API);
  }

  // Erste Initialisierung
  scheduleAssignmentDetailsRefresh(160);

  window.addEventListener("lia:routechange", function () {
    scheduleAssignmentDetailsRefresh(220);
    setTimeout(function () {
      refreshEvaluationPlaceholderIfVisible();
    }, 120);
  });

  const observer = new MutationObserver(function () {
    scheduleAssignmentDetailsRefresh(160);
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
@end


@Auswertung
<div data-snapshot-eval="1" style="display:none;"></div>
@end

@ADetails
<span class="lia-assignment-details" data-adetails="@0" style="display:none !important;"></span>
@end

-->




# FreezeEvaluation