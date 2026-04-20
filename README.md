<!--
comment: Hier sind alle wichtigen Features für SchulLia zusammengefasst.
author: Martin Lommatzsch


mode: Presentation



script: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/Koord.js
script: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/Marker.js
script: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/OCR.js
script: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/Tafel.js


@onload



  // =========================
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // DYNAMISCHE FLEX-CHILDS
  // =========================





(function () {

  // =========================================================
  // Root/Content + Run-Once (import-safe)
  // =========================================================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT_WIN    = getRootWindow();
  const ROOT_DOC    = ROOT_WIN.document;
  const CONTENT_WIN = window;
  const CONTENT_DOC = document;

  const REGKEY = "__LIA_DYNFLEX_V6_8__";
  ROOT_WIN[REGKEY] = ROOT_WIN[REGKEY] || { docs: {} };

  const DOC_KEY_ATTR = "data-dynflex-doc";
  let docKey = CONTENT_DOC.documentElement.getAttribute(DOC_KEY_ATTR);
  if (!docKey){
    docKey = (CONTENT_DOC.baseURI || CONTENT_WIN.location.href || "dynflex") + "::" + Math.random().toString(36).slice(2);
    CONTENT_DOC.documentElement.setAttribute(DOC_KEY_ATTR, docKey);
  }
  if (ROOT_WIN[REGKEY].docs[docKey]) return;
  ROOT_WIN[REGKEY].docs[docKey] = true;

  // =========================================================
  // CSS Injection (import-robust)
  // =========================================================
  const STYLE_ID = "lia-dynflex-style-v6-8";
  const CSS = `
.dynFlex{
  --dyn-gap:  20px;
  --dyn-hit:  22px;
  --dyn-accent: var(--dynflex-accent, #0b5fff);
  --dyn-basis: 25%;

  display: flex !important;
  flex-wrap: wrap !important;
  align-items: flex-start !important;
  gap: var(--dyn-gap) !important;
  overflow: visible !important;
}

/* Flex-ITEM = direktes Kind im Container (kann Wrapper oder flex-child selbst sein) */
.dynFlex > .dynFlexItem{
  position: relative !important;
  box-sizing: border-box !important;
  min-width: 0 !important;

  flex: 0 0 var(--w, var(--dyn-basis)) !important;
  max-width: var(--w, var(--dyn-basis)) !important;

  padding: 0.65rem 1.25rem 0.65rem 0.85rem !important;
  border-left: 1px solid var(--dyn-accent) !important;
  border-radius: 10px !important;
  background: rgba(127,127,127,0.08) !important;

  overflow: visible !important;
}

/* Wenn authored .flex-child NICHT das direkte Kind ist (Wrapper-Fall),
   neutralisieren wir Box-Styling innen, damit es nicht doppelt aussieht. */
.dynFlex > .dynFlexItem .flex-child{
  padding: 0 !important;
  border-left: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
}

/* >>> Leerzeilen-Fix: automatisch erzeugte Unter-Blöcke im flex-child */
.flex-child > [data-dynflex-block]{
  display: block !important;
  margin: 0 0 0.9rem 0 !important;
}
.flex-child > [data-dynflex-block]:last-child{
  margin-bottom: 0 !important;
}





/* Drag: keine Textmarkierung */
.dynFlex.dynFlexDragging,
.dynFlex.dynFlexDragging *{
  user-select: none !important;
}

/* Resizer am ITEM */
.dynFlex > .dynFlexItem > .dynFlexResizer{
  position: absolute !important;
  top: 0 !important;
  bottom: 0 !important;

  left: 100% !important;
  width: var(--dyn-hit) !important;
  margin-left: calc(var(--dyn-gap) / 2 - (var(--dyn-hit) / 2)) !important;

  cursor: ew-resize !important;
  touch-action: none !important;
  background: transparent !important;
  z-index: 9999 !important;
}

/* End-Resizer: gleicher Abstand wie die anderen */
.dynFlex > .dynFlexItem > .dynFlexResizer.dynFlexResizerEnd{
  left: auto !important;
  right: calc(-1 * (var(--dyn-gap) / 2) - (var(--dyn-hit) / 2)) !important;
  margin-left: 0 !important;
}

.dynFlex > .dynFlexItem > .dynFlexResizer::before{
  content: "" !important;
  position: absolute !important;
  left: 50% !important;
  top: 0 !important;
  bottom: 0 !important;
  width: 1px !important;
  transform: translateX(-50%) !important;
  background: var(--dyn-accent) !important;
  border-radius: 999px !important;
  opacity: 0.95 !important;
}

.dynFlex > .dynFlexItem > .dynFlexResizer:hover::before{
  width: 3px !important;
}

@media (max-width: 420px){
  .dynFlex{ --dyn-basis: 100% !important; }
}
`.trim();

  function ensureStyle(doc){
    try{
      if (!doc || !doc.documentElement) return;
      if (doc.getElementById(STYLE_ID)) return;
      const st = doc.createElement("style");
      st.id = STYLE_ID;
      st.textContent = CSS;
      (doc.head || doc.documentElement).appendChild(st);
    }catch(e){}
  }

  // =========================================================
  // Theme Accent Update (ROOT + CONTENT)
  // =========================================================
  function pickAccentFrom(doc){
    try{
      const win = doc.defaultView || window;
      const cs = win.getComputedStyle(doc.documentElement);
      const vars = ["--lia-accent","--lia-primary","--lia-color-primary","--primary","--color-primary","--accent-color"];
      for (const v of vars){
        const val = cs.getPropertyValue(v).trim();
        if (val) return val;
      }
      const a = doc.querySelector("a");
      if (a){
        const c = win.getComputedStyle(a).color;
        if (c && c !== "rgba(0, 0, 0, 0)") return c;
      }
      const b = doc.querySelector(".lia-btn");
      if (b){
        const bg = win.getComputedStyle(b).backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)") return bg;
      }
    }catch(e){}
    return "";
  }

  let lastAccent = "";
  function updateAccent(force){
    const acc = pickAccentFrom(ROOT_DOC) || pickAccentFrom(CONTENT_DOC) || "#0b5fff";
    if (force || acc !== lastAccent){
      lastAccent = acc;
      try { ROOT_DOC.documentElement.style.setProperty("--dynflex-accent", acc); } catch(e){}
      try { CONTENT_DOC.documentElement.style.setProperty("--dynflex-accent", acc); } catch(e){}
    }
  }

  // =========================================================
  // Leerzeilen -> echte Blocks innerhalb .flex-child
  // =========================================================
  function blockifyFlexChild(fc){
    try{
      if (!fc || fc.nodeType !== 1) return;
      if (fc.dataset.dynflexBlockified === "1") return;

      // Wenn LiaScript schon Inputs/Buttons gerendert hat, fassen wir NICHT mehr an
      if (fc.querySelector("input, textarea, select, button, .lia-btn, .lia-quiz")) return;

      // Ohne [[...]] macht Split keinen Sinn
      const html = fc.innerHTML || "";
      if (html.indexOf("[[") === -1) { fc.dataset.dynflexBlockified = "1"; return; }

      // Split auf Leerzeilen (mind. eine echte Leerzeile = Absatz in Markdown)
      const parts = html.split(/\n[ \t]*\n+/);
      if (!parts || parts.length <= 1) { fc.dataset.dynflexBlockified = "1"; return; }

      // Nur wenn wirklich "inhaltliche" Teile existieren
      const cleaned = parts.filter(p => (p.replace(/\s+/g,"").length > 0));
      if (cleaned.length <= 1) { fc.dataset.dynflexBlockified = "1"; return; }

      // Neu aufbauen: pro Absatz ein eigener Block (ohne Zusatz-Klassen, nur data-Attr)
      fc.innerHTML = "";
      for (const part of cleaned){
        const d = CONTENT_DOC.createElement("div");
        d.setAttribute("data-dynflex-block", "1");
        d.innerHTML = part;
        fc.appendChild(d);
      }

      fc.dataset.dynflexBlockified = "1";
    }catch(e){}
  }

  function blockifyAll(doc){
    try{
      doc.querySelectorAll(".dynFlex .flex-child").forEach(blockifyFlexChild);
    }catch(e){}
  }

  // =========================================================
  // DynFlex Core
  // =========================================================
  const clamp = (x,a,b) => Math.min(b, Math.max(a,x));

  function parsePct(x, fallback){
    if (x == null) return fallback;
    const s = String(x).trim();
    if (!s) return fallback;
    const n = Number(s.replace("%",""));
    return Number.isFinite(n) ? n : fallback;
  }

  function getItemPct(container, item){
    const w = (item.style.getPropertyValue("--w") || "").trim();
    if (w.endsWith("%")){
      const n = parseFloat(w);
      if (Number.isFinite(n)) return n;
    }
    const cw = container.getBoundingClientRect().width || 1;
    const iw = item.getBoundingClientRect().width;
    return (iw / cw) * 100;
  }

  function setItemPct(item, pct){
    item.style.setProperty("--w", pct.toFixed(2) + "%");
  }

  function getStoreKey(container){
    const k = container.getAttribute("data-store");
    return k ? ("dynFlexWidths::" + k) : null;
  }

  function persist(container, items){
    const lsKey = getStoreKey(container);
    if (!lsKey) return;
    const arr = items.map(it => (it.style.getPropertyValue("--w") || "").trim() || "");
    try { localStorage.setItem(lsKey, JSON.stringify(arr)); } catch(e){}
  }

  function restore(container, items){
    const lsKey = getStoreKey(container);
    if (!lsKey) return;

    const anySet = items.some(it => (it.style.getPropertyValue("--w") || "").trim());
    if (anySet) return;

    let arr = null;
    try { arr = JSON.parse(localStorage.getItem(lsKey) || "null"); } catch(e){ arr = null; }
    if (!Array.isArray(arr)) return;
    if (arr.length !== items.length) return;

    items.forEach((it, i) => {
      const v = String(arr[i] || "").trim();
      if (v.endsWith("%")) it.style.setProperty("--w", v);
    });
  }

  // Items deterministisch aus .flex-child ableiten (wrapper-robust)
  function getItemsFromFlexChildren(container){
    const flexChildren = Array.from(container.querySelectorAll(".flex-child"))
      .filter(fc => fc.closest(".dynFlex") === container);

    if (!flexChildren.length) return [];

    const items = [];
    for (const fc of flexChildren){
      let it = fc;
      while (it && it.parentElement && it.parentElement !== container){
        it = it.parentElement;
      }
      if (it && it.parentElement === container){
        if (!items.includes(it)) items.push(it);
      }
    }
    return items;
  }

  function ensureResizerBound(rz, container, item, items, minPct, maxPct){
    if (rz.dataset.bound === "1") return;
    rz.dataset.bound = "1";

    let dragging = false;
    let startX = 0;
    let startW = 0;

    const onDown = (e) => {
      dragging = true;
      container.classList.add("dynFlexDragging");
      startX = e.clientX;
      startW = getItemPct(container, item);
      rz.setPointerCapture?.(e.pointerId);
      e.preventDefault();
    };

    const onMove = (e) => {
      if (!dragging) return;
      const cw = container.getBoundingClientRect().width || 1;
      const dx = e.clientX - startX;
      const dPct = (dx / cw) * 100;

      const newW = clamp(startW + dPct, minPct, maxPct);
      setItemPct(item, newW);
      persist(container, items);
      e.preventDefault();
    };

    const onUp = (e) => {
      dragging = false;
      container.classList.remove("dynFlexDragging");
      try { rz.releasePointerCapture?.(e.pointerId); } catch(_){}
      e.preventDefault();
    };

    rz.addEventListener("pointerdown", onDown);
    rz.addEventListener("pointermove", onMove);
    rz.addEventListener("pointerup", onUp);
    rz.addEventListener("pointercancel", onUp);
  }

  function initContainer(container){
    // config
    const gap   = container.getAttribute("data-gap");
    const hit   = container.getAttribute("data-hit");
    const basis = parsePct(container.getAttribute("data-basis"), 25);

    if (gap) container.style.setProperty("--dyn-gap", gap.trim().endsWith("px") ? gap.trim() : (gap.trim() + "px"));
    if (hit) container.style.setProperty("--dyn-hit", hit.trim().endsWith("px") ? hit.trim() : (hit.trim() + "px"));
    container.style.setProperty("--dyn-basis", basis + "%");

    const minPct = parsePct(container.getAttribute("data-min"), 10);
    const maxPct = parsePct(container.getAttribute("data-max"), 100);

    const items = getItemsFromFlexChildren(container);
    if (!items.length) return;

    items.forEach(it => it.classList.add("dynFlexItem"));
    restore(container, items);

    for (let i = 0; i < items.length; i++){
      const item = items[i];

      let rz = item.querySelector(":scope > .dynFlexResizer");
      if (!rz){
        rz = document.createElement("div");
        rz.className = "dynFlexResizer";
        rz.setAttribute("aria-hidden", "true");
        item.appendChild(rz);
      }

      if (i === items.length - 1) rz.classList.add("dynFlexResizerEnd");
      else rz.classList.remove("dynFlexResizerEnd");

      ensureResizerBound(rz, container, item, items, minPct, maxPct);
    }
  }

  function scanInDoc(doc){
    try{
      // 1) Leerzeilen zuerst in Blocks übersetzen (wichtig für mehrere Prüfen-Buttons)
      blockifyAll(doc);

      // 2) DynFlex initialisieren
      doc.querySelectorAll(".dynFlex").forEach(initContainer);
    }catch(e){}
  }

  // =========================================================
  // ensure/scan (throttled) + observers
  // =========================================================
  let scanScheduled = false;

  function scan(){
    scanScheduled = false;
    ensureStyle(ROOT_DOC);
    ensureStyle(CONTENT_DOC);
    updateAccent(false);
    scanInDoc(ROOT_DOC);
    scanInDoc(CONTENT_DOC);
  }

  function scheduleScan(){
    if (scanScheduled) return;
    scanScheduled = true;
    requestAnimationFrame(scan);
  }

  // Initial: sehr früh + mehrere Nachläufe
  ensureStyle(ROOT_DOC);
  ensureStyle(CONTENT_DOC);
  updateAccent(true);

  // einmal sofort + dann noch gestaffelt
  scan();
  scheduleScan();
  setTimeout(scheduleScan, 30);
  setTimeout(scheduleScan, 120);
  setTimeout(scheduleScan, 320);
  setTimeout(scheduleScan, 900);

  // Theme changes
  const themeMO = new MutationObserver(() => updateAccent(false));
  try{ themeMO.observe(ROOT_DOC.documentElement,    { attributes: true, attributeFilter: ["class","style","data-theme","data-mode","data-color-scheme"] }); }catch(e){}
  try{ themeMO.observe(CONTENT_DOC.documentElement, { attributes: true, attributeFilter: ["class","style","data-theme","data-mode","data-color-scheme"] }); }catch(e){}

  // OS scheme
  try{
    const mql = ROOT_WIN.matchMedia("(prefers-color-scheme: dark)");
    if (mql && mql.addEventListener) mql.addEventListener("change", () => updateAccent(true));
    else if (mql && mql.addListener) mql.addListener(() => updateAccent(true));
  }catch(e){}

  // DOM changes (throttled)
  const mo = new MutationObserver((muts) => {
    for (const m of muts){
      if (m.addedNodes && m.addedNodes.length){
        scheduleScan();
        break;
      }
    }
  });
  try{ mo.observe(CONTENT_DOC.documentElement, { childList: true, subtree: true }); }catch(e){}
  try{ mo.observe(ROOT_DOC.documentElement,    { childList: true, subtree: true }); }catch(e){}

})();























  // =========================
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // DEUTSCH MAKROS
  // =========================















(function(){
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const KEY = "__ORTHOGRAPHY_EXPORT_V14__";
  if (ROOT[KEY]) return;

  const MOD = {
    state: {},
    observer: null,
    started: false,
    styleInstalled: false,
    syncScheduled: false,
    lateSyncTimer: null,

    norm(s){
      return String(s || "")
        .normalize("NFKC")
        .replace(/[„“”‟«»‹›"]/g, '"')
        .replace(/[‚‘’‛]/g, "'")
        .replace(/\u00A0/g, " ")
        .toLocaleLowerCase()
        .replace(/\s+/g, "");
    },

    ensureStyle(){
      if (this.styleInstalled) return;
      this.styleInstalled = true;

      const style = document.createElement("style");
      style.id = "orthography-export-style-v14";
      style.textContent = `
        .orthography-ui{
          display:block;
          margin:0;
          padding:0;
        }

        .orthography-task{
          display:block;
          margin:0;
          padding:0;
        }

        .orthography-check{
          display:block;
          margin:0;
          padding:0;
        }

        .orthography-wrap{
          display:grid;
          grid-template-columns:minmax(0, 1fr) auto;
          column-gap:.5rem;
          row-gap:.35rem;
          align-items:center;
        }

        .orthography-wrap > .lia-quiz__input{
          grid-column:1;
          min-width:0;
          width:100%;
          margin-bottom:0 !important;
        }

        .orthography-wrap > .ortho-reset-below{
          grid-column:2;
          margin:0 !important;
          display:inline-flex !important;
          align-items:center;
          justify-content:center;
          white-space:nowrap;
          align-self:stretch;
        }

        .orthography-wrap[data-ortho-solved="1"] > .ortho-reset-below{
          display:none !important;
        }
      `;
      (document.head || document.documentElement).appendChild(style);
    },

    ensureState(uid){
      if (!this.state[uid]) {
        this.state[uid] = {
          uid,
          cfg: null,
          start: "",
          solution: "",
          liveValue: null,
          solved: false
        };
      }
      return this.state[uid];
    },

    register(cfg){
      const uid = String(cfg && cfg.uid || "").trim();
      if (!uid) return;

      const S = this.ensureState(uid);
      S.cfg = cfg || null;

      if (cfg && typeof cfg.startText === "string") {
        S.start = cfg.startText;
      }

      if (cfg && typeof cfg.solutionText === "string") {
        S.solution = cfg.solutionText;
      }

      if (S.liveValue === null) {
        S.liveValue = S.start;
      }

      this.syncUid(uid);
      this.scheduleSync();
    },

    parseUidFromString(v, prefix){
      v = String(v || "");
      if (!v) return "";
      if (prefix && v.indexOf(prefix) === 0) return v.slice(prefix.length);
      return "";
    },

    deriveUidFromWrap(wrap){
      if (!wrap) return "";

      if (wrap.dataset && wrap.dataset.orthoUid) {
        return String(wrap.dataset.orthoUid);
      }

      const byInputId = wrap.querySelector('[id^="orthography-input-"]');
      if (byInputId && byInputId.id) {
        return this.parseUidFromString(byInputId.id, "orthography-input-");
      }

      return "";
    },

    getNodes(uid){
      const S = this.ensureState(uid);
      const cfg = S.cfg || {};

      const ui =
        document.getElementById(cfg.idUi || ("orthography-ui-" + uid));

      const task =
        document.getElementById(cfg.idTask || ("orthography-task-" + uid));

      const checkRoot =
        document.getElementById(cfg.idCheck || ("orthography-check-" + uid));

      const input =
        document.getElementById(cfg.idInput || ("orthography-input-" + uid));

      const wrap =
        (input ? input.closest(".orthography-wrap") : null) ||
        document.getElementById(cfg.idWrap || ("orthography-wrap-" + uid));

      const reset =
        document.getElementById(cfg.idReset || ("orthography-reset-" + uid));

      const start =
        document.getElementById(cfg.idStart || ("orthography-start-" + uid));

      const solution =
        document.getElementById(cfg.idSolution || ("orthography-solution-" + uid));

      if (ui) ui.dataset.orthoUid = uid;
      if (task) task.dataset.orthoUid = uid;
      if (checkRoot) checkRoot.dataset.orthoUid = uid;
      if (wrap) wrap.dataset.orthoUid = uid;
      if (input) input.dataset.orthoUid = uid;
      if (reset) reset.dataset.orthoUid = uid;
      if (start) start.dataset.orthoUid = uid;
      if (solution) solution.dataset.orthoUid = uid;

      return { ui, task, checkRoot, wrap, input, reset, start, solution };
    },

    readStaticTexts(uid){
      const S = this.ensureState(uid);
      const N = this.getNodes(uid);

      if (!S.start) {
        if (N.start) S.start = N.start.textContent || "";
      }

      if (!S.solution) {
        if (N.solution) S.solution = N.solution.textContent || "";
      }

      if (S.liveValue === null) {
        if (N.input) S.liveValue = N.input.value;
        else S.liveValue = S.start;
      }
    },

    findQuiz(uid){
      const N = this.getNodes(uid);
      if (!N.checkRoot) return null;

      const quizzes = N.checkRoot.querySelectorAll(".lia-quiz");
      if (!quizzes || !quizzes.length) return null;

      return quizzes[quizzes.length - 1];
    },

    ensureResetPlacement(uid){
      const S = this.ensureState(uid);
      const N = this.getNodes(uid);
      if (!N.wrap || !N.input || !N.reset) return;

      N.wrap.dataset.orthoUid = uid;
      N.wrap.dataset.orthoSolved = S.solved ? "1" : "0";
      N.reset.dataset.orthoUid = uid;
      N.reset.classList.add("ortho-reset-below");

      if (N.reset.parentElement !== N.wrap || N.reset.previousElementSibling !== N.input) {
        N.input.insertAdjacentElement("afterend", N.reset);
      }

      if (S.solved) {
        N.reset.disabled = true;
        N.reset.setAttribute("aria-hidden", "true");
        N.reset.setAttribute("tabindex", "-1");
      } else {
        N.reset.disabled = false;
        N.reset.removeAttribute("aria-hidden");
        N.reset.removeAttribute("tabindex");
      }
    },

    ensureInstanceBindings(uid){
      const N = this.getNodes(uid);

      if (N.input && N.input.__orthoInputBoundUid !== uid) {
        N.input.__orthoInputBoundUid = uid;

        N.input.addEventListener("input", () => {
          this.handleInput(uid);
        }, true);

        N.input.addEventListener("change", () => {
          this.handleInput(uid);
        }, true);

        const swallowArrowKeys = (ev) => {
          const k = String(ev && ev.key || "");

          if (
            k === "ArrowLeft"  ||
            k === "ArrowRight" ||
            k === "ArrowUp"    ||
            k === "ArrowDown"
          ) {
            // Wichtig:
            // NICHT preventDefault(), sonst bewegt sich der Cursor nicht mehr.
            if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
            ev.stopPropagation();
            ev.cancelBubble = true;
          }
        };

        N.input.addEventListener("keydown", swallowArrowKeys, true);
        N.input.addEventListener("keyup",   swallowArrowKeys, true);
      }

      if (N.reset && N.reset.__orthoResetBoundUid !== uid) {
        N.reset.__orthoResetBoundUid = uid;

        N.reset.addEventListener("click", (ev) => {
          this.handleReset(uid, ev);
        }, true);
      }
    },

    setInputValue(uid, value){
      const N = this.getNodes(uid);
      if (!N.input) return;

      N.input.value = value;
      N.input.defaultValue = value;
      try { N.input.setAttribute("value", value); } catch(e){}
    },

    syncSolvedFromQuiz(uid){
      const S = this.ensureState(uid);
      const quiz = this.findQuiz(uid);

      if (!quiz) {
        S.solved = false;
        return;
      }

      S.solved =
        quiz.classList.contains("solved") ||
        quiz.classList.contains("resolved");
    },

    restoreLiveValue(uid){
      const S = this.ensureState(uid);
      const N = this.getNodes(uid);
      if (!N.input) return;

      const desired = S.solved
        ? (S.solution || S.liveValue || S.start)
        : (S.liveValue == null ? S.start : S.liveValue);

      const current = N.input.value;

      N.input.readOnly = !!S.solved;

      if (this.norm(current) !== this.norm(desired)) {
        this.setInputValue(uid, desired);
      }
    },

    syncUid(uid){
      const S = this.ensureState(uid);
      this.readStaticTexts(uid);
      this.syncSolvedFromQuiz(uid);
      this.ensureResetPlacement(uid);
      this.ensureInstanceBindings(uid);
      this.restoreLiveValue(uid);

      const N = this.getNodes(uid);
      if (N.wrap) {
        N.wrap.dataset.orthoSolved = S.solved ? "1" : "0";
      }
    },

    discoverAll(){
      const wraps = document.querySelectorAll(".orthography-wrap");
      wraps.forEach((wrap) => {
        const uid = this.deriveUidFromWrap(wrap);
        if (!uid) return;
        const S = this.ensureState(uid);
        wrap.dataset.orthoUid = uid;
        if (!S.cfg) S.cfg = {};
        this.readStaticTexts(uid);
      });
    },

    syncAll(){
      this.discoverAll();
      Object.keys(this.state).forEach((uid) => {
        try { this.syncUid(uid); } catch(e){}
      });
    },

    scheduleSync(){
      if (this.syncScheduled) return;
      this.syncScheduled = true;

      const run = () => {
        this.syncScheduled = false;
        this.syncAll();
      };

      try { requestAnimationFrame(run); } catch(e) { setTimeout(run, 16); }

      clearTimeout(this.lateSyncTimer);
      this.lateSyncTimer = setTimeout(() => this.syncAll(), 90);
    },

    getCurrentValue(uid){
      const N = this.getNodes(uid);
      if (N.input) return N.input.value;

      const S = this.ensureState(uid);
      return S.liveValue == null ? S.start : S.liveValue;
    },

    getSolution(uid){
      const S = this.ensureState(uid);
      return S.solution || "";
    },

    handleInput(uid){
      const S = this.ensureState(uid);
      if (S.solved) return;

      const N = this.getNodes(uid);
      if (!N.input) return;

      S.liveValue = N.input.value;
    },

    handleReset(uid, ev){
      const S = this.ensureState(uid);

      if (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
      }

      if (S.solved) return;

      S.liveValue = S.start;
      this.setInputValue(uid, S.start);
    },

    startGlobal(){
      if (this.started) return;
      this.started = true;

      this.ensureStyle();

      const startObserver = () => {
        if (this.observer) return;

        const target = document.body || document.documentElement;
        if (!target) return;

        this.observer = new MutationObserver(() => {
          this.scheduleSync();
        });

        this.observer.observe(target, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ["class", "aria-hidden", "tabindex"]
        });
      };

      startObserver();
      setTimeout(startObserver, 0);

      this.syncAll();
      setTimeout(() => this.syncAll(), 0);
      setTimeout(() => this.syncAll(), 120);
      setTimeout(() => this.syncAll(), 260);
    }
  };

  ROOT[KEY] = MOD;
  MOD.startGlobal();
})();




























  // =========================
  // MATHEMATIK MAKROS
  // MATHEMATIK MAKROS
  // MATHEMATIK MAKROS
  // MATHEMATIK MAKROS
  // =========================








(function () {
  function getRootWindow() {
    let w = window;
    try {
      while (w.parent && w.parent !== w) w = w.parent;
    } catch (e) {}
    return w;
  }

  const ROOT = getRootWindow();
  const STORE_KEY = "__LIA_FRACTION_QUIZ_V3__";
  const STYLE_ID = "__LIA_FRACTION_QUIZ_STYLE_V3__";
  const DEBUG_OBSERVER_KEY = "__LIA_FQ_DEBUG_DOM_OBSERVER_V1__";
  const DEBUG_FQ = true;

function fqdbg(tag) {
  if (!DEBUG_FQ) return;

  const keep =
    tag === "quiz-reveal-click" ||
    tag === "quiz-observer-detected-revealed" ||
    tag === "markRevealed:before" ||
    tag === "markRevealed:after" ||
    tag === "applySolution:start" ||
    tag === "applySolution:end" ||
    tag === "dom-mutation" ||
    tag === "wrap-replaced" ||
    tag === "host-replaced" ||
    tag === "mount-replaced" ||
    tag === "circle-input-replaced" ||
    tag === "rows-input-replaced" ||
    tag === "cols-input-replaced" ||
    tag === "circle-input-event" ||
    tag === "rect-rows-event" ||
    tag === "rect-cols-event" ||
    tag === "register:start" ||
    tag === "register:end";

  if (!keep) return;

  try {
    const args = Array.prototype.slice.call(arguments, 1);
    console.log("[FQDBG]", tag, ...args);
  } catch (e) {}
}

  function getDoc() {
    try {
      if (ROOT && ROOT.document) return ROOT.document;
    } catch (e) {}
    return document;
  }

  function clampInt(value, min, max, fallback) {
    let n = parseInt(value, 10);
    if (!Number.isFinite(n)) n = fallback;
    if (!Number.isFinite(n)) n = min;
    if (n < min) n = min;
    if (n > max) n = max;
    return n | 0;
  }

  function gcd(a, b) {
    a = Math.abs(a | 0);
    b = Math.abs(b | 0);
    while (b) {
      const t = a % b;
      a = b;
      b = t;
    }
    return a || 1;
  }

  function fractionFromDecimalString(str) {
    const s = String(str == null ? "" : str).trim().replace(",", ".");
    if (!s) return { num: 0, den: 1 };

    if (/e/i.test(s)) {
      const x = Number(s);
      if (!Number.isFinite(x)) return { num: 0, den: 1 };
      const fixed = x.toFixed(12).replace(/0+$/, "").replace(/\.$/, "");
      return fractionFromDecimalString(fixed);
    }

    if (!/^[-+]?\d*(?:\.\d+)?$/.test(s)) {
      return { num: 0, den: 1 };
    }

    const sign = s.startsWith("-") ? -1 : 1;
    const unsigned = s.replace(/^[-+]/, "");
    const parts = unsigned.split(".");
    const intPart = parts[0] || "0";
    const fracPart = parts[1] || "";

    if (!fracPart) {
      return { num: sign * parseInt(intPart, 10), den: 1 };
    }

    const den = Math.pow(10, fracPart.length);
    const num = sign * (parseInt(intPart, 10) * den + parseInt(fracPart, 10));
    return { num, den };
  }

  function normalizeFractionInfo(raw) {
    let num = 0;
    let den = 1;
    const original = raw;

    if (raw && typeof raw === "object" && Number.isFinite(raw.num) && Number.isFinite(raw.den)) {
      num = raw.num;
      den = raw.den;
    } else if (typeof raw === "number") {
      const f = fractionFromDecimalString(String(raw));
      num = f.num;
      den = f.den;
    } else {
      const s0 = String(raw == null ? "" : raw).trim();
      const s = s0.replace(/^\((.*)\)$/, "$1").trim();

      if (s.includes("/")) {
        const m = s.match(/^\s*([-+]?\d+)\s*\/\s*([-+]?\d+)\s*$/);
        if (m) {
          num = parseInt(m[1], 10);
          den = parseInt(m[2], 10);
        } else {
          const f = fractionFromDecimalString(s);
          num = f.num;
          den = f.den;
        }
      } else {
        const f = fractionFromDecimalString(s);
        num = f.num;
        den = f.den;
      }
    }

    if (!Number.isFinite(num)) num = 0;
    if (!Number.isFinite(den) || den === 0) den = 1;
    if (den < 0) {
      num = -num;
      den = -den;
    }

    const g = gcd(num, den);
    num = num / g;
    den = den / g;

    if (num < 0) num = 0;
    if (num > den) num = den;

    return {
      num,
      den,
      value: den ? num / den : 0,
      raw: original
    };
  }

  function bestFactorPair(n) {
    n = Math.max(1, n | 0);
    let bestA = 1;
    let bestB = n;
    let bestDiff = Math.abs(bestB - bestA);

    for (let a = 1; a * a <= n; a++) {
      if (n % a !== 0) continue;
      const b = n / a;
      const diff = Math.abs(b - a);
      if (diff < bestDiff) {
        bestA = a;
        bestB = b;
        bestDiff = diff;
      }
    }

    return {
      cols: Math.min(bestA, bestB),
      rows: Math.max(bestA, bestB)
    };
  }

  function boolArray(length, source) {
    const n = Math.max(1, length | 0);
    const out = Array(n).fill(false);
    if (Array.isArray(source)) {
      for (let i = 0; i < Math.min(n, source.length); i++) out[i] = !!source[i];
    }
    return out;
  }

  function detectUiLanguage() {
    const langs = [];

    try {
      const lia = ROOT && (ROOT.LIA || ROOT.lia);
      if (lia) {
        if (typeof lia.language === "string") langs.push(lia.language);
        if (lia.settings && typeof lia.settings.language === "string") langs.push(lia.settings.language);
        if (lia.lang && typeof lia.lang === "string") langs.push(lia.lang);
      }
    } catch (e) {}

    try {
      if (ROOT && ROOT.document && ROOT.document.documentElement) {
        langs.push(ROOT.document.documentElement.lang || "");
      }
    } catch (e) {}

    try {
      if (document && document.documentElement) {
        langs.push(document.documentElement.lang || "");
      }
    } catch (e) {}

    try {
      if (navigator && Array.isArray(navigator.languages)) {
        for (let i = 0; i < navigator.languages.length; i++) langs.push(navigator.languages[i] || "");
      }
      if (navigator && navigator.language) langs.push(navigator.language);
    } catch (e) {}

    for (let i = 0; i < langs.length; i++) {
      const raw = String(langs[i] || "").trim().toLowerCase();
      if (!raw) continue;
      const base = raw.split("-")[0];
      if (base) return base;
    }

    return "de";
  }

  function getQuizLabels(lang) {
    const key = String(lang || "").toLowerCase();
    if (key === "de") {
      return { subdivisions: "Unterteilungen", vertical: "vertikal", horizontal: "horizontal" };
    }
    return { subdivisions: "Subdivisions", vertical: "vertical", horizontal: "horizontal" };
  }

  function injectStyleOnce() {
    const DOC = getDoc();
    if (!DOC || !DOC.head) return;
    if (DOC.getElementById(STYLE_ID)) return;

    const css = `
:root{
  --fq-track: rgba(0,0,0,.20);
  --fq-thumb: rgba(0,0,0,.88);
  --fq-ring: rgba(255,255,255,.90);
  --fq-mark: orange;
  --fq-stroke: #000000;
  --fq-fill: #ffffff;
  --fq-disabled: .58;

  --fq-w: 200px;
  --fq-h: 30px;
  --fq-track-h: 4px;
  --fq-thumb-sz: 12px;
  --fq-label-size: 18px;
  --fq-label-top: -7px;
}
@media (prefers-color-scheme: dark){
  :root{
    --fq-track: rgba(255,255,255,.22);
    --fq-thumb: rgba(255,255,255,.92);
    --fq-ring: rgba(0,0,0,.75);
    --fq-stroke: #000000;
    --fq-fill: #ffffff;
  }
}

.fq-widget{
  display:inline-block;
}

.fq-mount svg{
  display:block;
}

.fq-clickable{
  cursor:pointer;
}

.fq-widget[data-fq-locked="1"] .fq-clickable,
.fq-widget[data-fq-locked="1"] [data-fq-part]{
  cursor:default !important;
}

.fq-widget[data-fq-locked="1"] .fq-range,
.fq-widget[data-fq-locked="1"] .fq-range input[type="range"]{
  pointer-events:none !important;
}

.fq-widget[data-fq-locked="1"] .fq-range{
  opacity:var(--fq-disabled);
}

.fq-range{
  width:var(--fq-w);
  max-width:var(--fq-w);
  height:var(--fq-h);
  position:relative;
  margin:6px 0 12px 0;
  user-select:none;
}

.fq-range::before{
  content:attr(data-label);
  position:absolute;
  left:0;
  right:0;
  top:var(--fq-label-top);
  text-align:center;
  font-size:var(--fq-label-size);
  font-weight: 700;
  line-height:1;
  opacity:.85;
  pointer-events:none;
  z-index:2;
}

.fq-range .lia-input{
  width:var(--fq-w) !important;
  max-width:var(--fq-w) !important;
  height:var(--fq-h) !important;
  margin:0 !important;
  padding:0 !important;
  display:flex !important;
  align-items:center !important;
  font-size:0 !important;
  line-height:0 !important;
  min-height:0 !important;
}

.fq-range button,
.fq-range output,
.fq-range input[type="number"],
.fq-range .lia-input-value,
.fq-range .lia-value,
.fq-range .lia-input-output,
.fq-range .lia-input-label,
.fq-range .lia-input-reset,
.fq-range .lia-input-prefix,
.fq-range .lia-input-suffix{
  display:none !important;
}

.fq-range input[type="range"]{
  width:var(--fq-w) !important;
  max-width:var(--fq-w) !important;
  height:var(--fq-h) !important;
  margin:0 !important;
  padding:0 !important;
  background:transparent;
  -webkit-appearance:none;
  appearance:none;
  -webkit-tap-highlight-color:transparent;
  touch-action:none;
  position:relative;
  z-index:1;
}

.fq-range input[type="range"]::-webkit-slider-runnable-track{
  height:var(--fq-track-h);
  border-radius:999px;
  background:var(--fq-track);
}

.fq-range input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance:none;
  appearance:none;
  width:var(--fq-thumb-sz);
  height:var(--fq-thumb-sz);
  border-radius:50%;
  background:var(--fq-thumb);
  border:2px solid var(--fq-ring);
  margin-top:calc((var(--fq-track-h) - var(--fq-thumb-sz)) / 2);
}

.fq-range input[type="range"]::-moz-range-track{
  height:var(--fq-track-h);
  border-radius:999px;
  background:var(--fq-track);
  border: 1.5px solid #aaa;
}

.fq-range input[type="range"]::-moz-range-thumb{
  width:var(--fq-thumb-sz);
  height:var(--fq-thumb-sz);
  border-radius:50%;
  background:var(--fq-thumb);
  border:2px solid var(--fq-ring);
}
    `.trim();

    const style = DOC.createElement("style");
    style.id = STYLE_ID;
    style.textContent = css;
    DOC.head.appendChild(style);
  }

  function fqNodeLabel(node) {
    if (!node) return "(null)";
    if (node.nodeType !== 1) return "(" + node.nodeName + ")";
    const id = node.id ? "#" + node.id : "";
    const cls = node.className && typeof node.className === "string"
      ? "." + node.className.trim().replace(/\s+/g, ".")
      : "";
    return node.tagName.toLowerCase() + id + cls;
  }

  function fqNodeTouchesWidget(node) {
    if (!node || node.nodeType !== 1) return false;
    if ((node.id && /^fq-/.test(node.id))) return true;
    if (node.classList) {
      if (
        node.classList.contains("fq-widget") ||
        node.classList.contains("fq-mount") ||
        node.classList.contains("fq-range")
      ) return true;
    }
    try {
      return !!node.querySelector('[id^="fq-"], .fq-widget, .fq-mount, .fq-range');
    } catch (e) {
      return false;
    }
  }

  function installDebugDomObserverOnce() {
    if (!DEBUG_FQ) return;
    if (ROOT[DEBUG_OBSERVER_KEY]) return;
    if (typeof MutationObserver === "undefined") return;

    const DOC = document;
    const target = DOC.body || DOC.documentElement;
    if (!target) return;

    const obs = new MutationObserver((mutations) => {
      for (let i = 0; i < mutations.length; i++) {
        const m = mutations[i];
        if (m.type !== "childList") continue;

        const added = [];
        const removed = [];

        for (let j = 0; j < m.addedNodes.length; j++) {
          const n = m.addedNodes[j];
          if (fqNodeTouchesWidget(n)) added.push(fqNodeLabel(n));
        }

        for (let j = 0; j < m.removedNodes.length; j++) {
          const n = m.removedNodes[j];
          if (fqNodeTouchesWidget(n)) removed.push(fqNodeLabel(n));
        }

        if (added.length || removed.length) {
          fqdbg("dom-mutation", {
            target: fqNodeLabel(m.target),
            added: added,
            removed: removed
          });
        }
      }
    });

    obs.observe(target, {
      childList: true,
      subtree: true
    });

    ROOT[DEBUG_OBSERVER_KEY] = obs;
    fqdbg("debug-dom-observer-installed");
  }

  injectStyleOnce();
  installDebugDomObserverOnce();

  if (!ROOT[STORE_KEY]) {
    ROOT[STORE_KEY] = {
      version: 3,
      circle: Object.create(null),
      rect: Object.create(null),
      rectDims: Object.create(null),
      meta: Object.create(null),
      nodes: Object.create(null),

      getMeta(uid, kind) {
        uid = String(uid == null ? "" : uid);
        if (!this.meta[uid]) {
          this.meta[uid] = {
            uid,
            kind: kind || "",
            target: { num: 0, den: 1, value: 0, raw: "0" },
            locked: false,
            solved: false,
            revealed: false,
            ready: false
          };
          fqdbg("meta-created", uid, { kind: kind || "" });
        }
        if (kind) this.meta[uid].kind = kind;
        return this.meta[uid];
      },

      getNodes(uid) {
        uid = String(uid == null ? "" : uid);
        if (!this.nodes[uid]) {
          this.nodes[uid] = {
            uid,
            kind: "",
            wrap: null,
            host: null,
            mount: null,
            circleInput: null,
            rowsInput: null,
            colsInput: null,
            observer: null,
            _quizScope: null,
            _quizClickHandler: null,
            _quizBridgeInstalled: false
          };
          fqdbg("nodes-created", uid);
        }
        return this.nodes[uid];
      },

      refreshNodes(uid) {
        uid = String(uid == null ? "" : uid);
        const nodes = this.getNodes(uid);

        const prevWrap = nodes.wrap;
        const prevHost = nodes.host;
        const prevMount = nodes.mount;
        const prevCircleInput = nodes.circleInput;
        const prevRowsInput = nodes.rowsInput;
        const prevColsInput = nodes.colsInput;

        const circleWrap = document.getElementById("fq-circle-wrap-" + uid);
        const rectWrap = document.getElementById("fq-rect-wrap-" + uid);

        if (circleWrap) {
          nodes.kind = "circle";
          nodes.wrap = circleWrap;
          nodes.host = document.getElementById("fq-circle-host-" + uid);
          nodes.mount = document.getElementById("fq-circle-mount-" + uid);

          const rangeWrap = document.getElementById("fq-circle-range-" + uid);
          nodes.circleInput = rangeWrap ? rangeWrap.querySelector('input[type="range"]') : null;
          nodes.rowsInput = null;
          nodes.colsInput = null;
        } else if (rectWrap) {
          nodes.kind = "rect";
          nodes.wrap = rectWrap;
          nodes.host = document.getElementById("fq-rect-host-" + uid);
          nodes.mount = document.getElementById("fq-rect-mount-" + uid);

          const rowsWrap = document.getElementById("fq-rect-rows-wrap-" + uid);
          const colsWrap = document.getElementById("fq-rect-cols-wrap-" + uid);

          nodes.rowsInput = rowsWrap ? rowsWrap.querySelector('input[type="range"]') : null;
          nodes.colsInput = colsWrap ? colsWrap.querySelector('input[type="range"]') : null;
          nodes.circleInput = null;
        } else {
          nodes.wrap = null;
          nodes.host = null;
          nodes.mount = null;
          nodes.circleInput = null;
          nodes.rowsInput = null;
          nodes.colsInput = null;
        }

        if (prevWrap && prevWrap !== nodes.wrap) fqdbg("wrap-replaced", uid, nodes.kind, fqNodeLabel(nodes.wrap));
        if (!prevWrap && nodes.wrap) fqdbg("wrap-found", uid, nodes.kind, fqNodeLabel(nodes.wrap));

        if (prevHost && prevHost !== nodes.host) fqdbg("host-replaced", uid, nodes.kind, fqNodeLabel(nodes.host));
        if (prevMount && prevMount !== nodes.mount) fqdbg("mount-replaced", uid, nodes.kind, fqNodeLabel(nodes.mount));

        if (prevCircleInput && prevCircleInput !== nodes.circleInput) fqdbg("circle-input-replaced", uid);
        if (prevRowsInput && prevRowsInput !== nodes.rowsInput) fqdbg("rows-input-replaced", uid);
        if (prevColsInput && prevColsInput !== nodes.colsInput) fqdbg("cols-input-replaced", uid);

        if (nodes.circleInput) this.bindCircleInput(uid, nodes.circleInput);
        if (nodes.rowsInput || nodes.colsInput) this.bindRectInputs(uid, nodes.rowsInput, nodes.colsInput);

        this.localizeRangeLabels(uid, nodes.kind);

        if (nodes.wrap) this.ensureQuizBridge(uid, nodes.wrap);

        return nodes;
      },

      localizeRangeLabels(uid, kind) {
        const lang = detectUiLanguage();
        const labels = getQuizLabels(lang);

        if (kind === "circle") {
          const range = document.getElementById("fq-circle-range-" + uid);
          if (range) range.setAttribute("data-label", labels.subdivisions);
        }

        if (kind === "rect") {
          const rowsWrap = document.getElementById("fq-rect-rows-wrap-" + uid);
          const colsWrap = document.getElementById("fq-rect-cols-wrap-" + uid);
          if (rowsWrap) rowsWrap.setAttribute("data-label", labels.vertical);
          if (colsWrap) colsWrap.setAttribute("data-label", labels.horizontal);
        }
      },

      parseTarget(raw) {
        return normalizeFractionInfo(raw);
      },

      setTarget(uid, raw, kind) {
        const meta = this.getMeta(uid, kind);
        meta.target = normalizeFractionInfo(raw);
        fqdbg("setTarget", uid, {
          kind: meta.kind,
          target: meta.target
        });
        return meta.target;
      },

      ensureCircle(uid, parts, options) {
        const opts = options || {};
        const meta = this.getMeta(uid, "circle");
        const n = clampInt(parts, 1, 32, 1);
        const prev = Array.isArray(this.circle[uid]) ? this.circle[uid] : [];
        this.circle[uid] = boolArray(n, opts.preserve ? prev : null);
        meta.parts = n;
        meta.kind = "circle";

        fqdbg("ensureCircle", uid, {
          parts: n,
          preserve: !!opts.preserve,
          selected: this.countSelected(uid)
        });

        return this.circle[uid];
      },

      ensureRect(uid, rows, cols, options) {
        const opts = options || {};
        const meta = this.getMeta(uid, "rect");
        const r = clampInt(rows, 1, 20, 1);
        const c = clampInt(cols, 1, 20, 1);
        const total = r * c;
        const prev = Array.isArray(this.rect[uid]) ? this.rect[uid] : [];
        this.rectDims[uid] = { rows: r, cols: c };
        this.rect[uid] = boolArray(total, opts.preserve ? prev : null);
        meta.rows = r;
        meta.cols = c;
        meta.kind = "rect";

        fqdbg("ensureRect", uid, {
          rows: r,
          cols: c,
          preserve: !!opts.preserve,
          selected: this.countSelected(uid)
        });

        return this.rect[uid];
      },

      setCircleParts(uid, parts, options) {
        const meta = this.getMeta(uid, "circle");
        if (meta.locked && !(options && options.force)) {
          fqdbg("setCircleParts-blocked-locked", uid, { parts: parts });
          return this.circle[uid] || this.ensureCircle(uid, 1);
        }
        return this.ensureCircle(uid, parts, options);
      },

      setRectDims(uid, rows, cols, options) {
        const meta = this.getMeta(uid, "rect");
        if (meta.locked && !(options && options.force)) {
          fqdbg("setRectDims-blocked-locked", uid, {
            rows: rows,
            cols: cols
          });
          return this.rect[uid] || this.ensureRect(uid, 1, 1);
        }
        return this.ensureRect(uid, rows, cols, options);
      },

      buildCircleSolution(targetRaw) {
        const t = normalizeFractionInfo(targetRaw);
        let displayNum = t.num;
        let displayDen = t.den;
        const rawStr = (targetRaw && typeof targetRaw === "object" && typeof targetRaw.raw === "string")
          ? targetRaw.raw
          : (typeof targetRaw === "string" ? targetRaw : "");
        const rawMatch = rawStr.trim().match(/^\s*([-+]?\d+)\s*\/\s*([-+]?\d+)\s*$/);
        if (rawMatch) {
          displayNum = parseInt(rawMatch[1], 10);
          displayDen = parseInt(rawMatch[2], 10);
        }
        const parts = Math.max(1, displayDen | 0);
        const active = Array(parts).fill(false);
        for (let i = 0; i < Math.min(parts, displayNum | 0); i++) active[i] = true;
        return { type: "circle", target: t, parts, active };
      },

      buildRectSolution(targetRaw) {
        const t = normalizeFractionInfo(targetRaw);
        let displayNum = t.num;
        let displayDen = t.den;
        const rawStr = (targetRaw && typeof targetRaw === "object" && typeof targetRaw.raw === "string")
          ? targetRaw.raw
          : (typeof targetRaw === "string" ? targetRaw : "");
        const rawMatch = rawStr.trim().match(/^\s*([-+]?\d+)\s*\/\s*([-+]?\d+)\s*$/);
        if (rawMatch) {
          displayNum = parseInt(rawMatch[1], 10);
          displayDen = parseInt(rawMatch[2], 10);
        }
        const pair = bestFactorPair(displayDen);
        const rows = pair.rows;
        const cols = pair.cols;
        const total = rows * cols;
        const active = Array(total).fill(false);
        for (let i = 0; i < Math.min(total, displayNum | 0); i++) active[i] = true;
        return { type: "rect", target: t, rows, cols, active };
      },

      getSolution(uid) {
        const meta = this.getMeta(uid);
        if (meta.kind === "circle") return this.buildCircleSolution(meta.target);
        if (meta.kind === "rect") return this.buildRectSolution(meta.target);
        return null;
      },

      isLocked(uid) {
        return !!this.getMeta(uid).locked;
      },

      toggleCircle(uid, index) {
        const meta = this.getMeta(uid, "circle");
        if (meta.locked || !meta.ready) {
          fqdbg("toggleCircle-blocked", uid, {
            locked: !!meta.locked,
            ready: !!meta.ready,
            index: index
          });
          return false;
        }
        const arr = Array.isArray(this.circle[uid]) ? this.circle[uid] : this.ensureCircle(uid, meta.parts || 1);
        const i = index | 0;
        if (i < 0 || i >= arr.length) return false;
        arr[i] = !arr[i];

        fqdbg("toggleCircle", uid, {
          index: i,
          value: arr[i],
          total: arr.length,
          selected: this.countSelected(uid)
        });

        return arr[i];
      },

      toggleRect(uid, index) {
        const meta = this.getMeta(uid, "rect");
        if (meta.locked || !meta.ready) {
          fqdbg("toggleRect-blocked", uid, {
            locked: !!meta.locked,
            ready: !!meta.ready,
            index: index
          });
          return false;
        }
        const dims = this.rectDims[uid] || { rows: meta.rows || 1, cols: meta.cols || 1 };
        const arr = Array.isArray(this.rect[uid]) ? this.rect[uid] : this.ensureRect(uid, dims.rows, dims.cols);
        const i = index | 0;
        if (i < 0 || i >= arr.length) return false;
        arr[i] = !arr[i];

        fqdbg("toggleRect", uid, {
          index: i,
          value: arr[i],
          rows: dims.rows,
          cols: dims.cols,
          selected: this.countSelected(uid)
        });

        return arr[i];
      },

      countSelected(uid) {
        const meta = this.getMeta(uid);
        const arr = meta.kind === "rect" ? this.rect[uid] : this.circle[uid];
        if (!Array.isArray(arr) || !arr.length) return 0;
        let k = 0;
        for (let i = 0; i < arr.length; i++) if (arr[i]) k++;
        return k;
      },

      countTotal(uid) {
        const meta = this.getMeta(uid);
        const arr = meta.kind === "rect" ? this.rect[uid] : this.circle[uid];
        return Array.isArray(arr) && arr.length ? arr.length : 1;
      },

      getRatio(uid) {
        const total = this.countTotal(uid);
        const selected = this.countSelected(uid);
        return total ? selected / total : 0;
      },

      isCorrect(uid) {
        const meta = this.getMeta(uid);
        if (!meta.ready) return false;
        const t = meta.target || { num: 0, den: 1 };
        const total = this.countTotal(uid);
        const selected = this.countSelected(uid);
        return selected * t.den === t.num * total;
      },

      lock(uid) {
        const meta = this.getMeta(uid);
        meta.locked = true;
        fqdbg("lock", uid, { kind: meta.kind });
        this.syncDomState(uid);
        return true;
      },

      markSolved(uid) {
        const meta = this.getMeta(uid);
        if (!meta.ready) return false;

        fqdbg("markSolved:before", uid, {
          kind: meta.kind,
          rectDims: this.rectDims[uid] || null,
          circleLen: this.circle[uid] ? this.circle[uid].length : null,
          selected: this.countSelected(uid)
        });

        meta.solved = true;
        meta.revealed = false;
        meta.locked = true;
        this.syncDomState(uid);
        this.render(uid);

        fqdbg("markSolved:after", uid, {
          kind: meta.kind,
          rectDims: this.rectDims[uid] || null,
          circleLen: this.circle[uid] ? this.circle[uid].length : null,
          selected: this.countSelected(uid)
        });

        return true;
      },

      applySolution(uid) {
        const meta = this.getMeta(uid);
        const sol = this.getSolution(uid);
        if (!sol) return null;

        fqdbg("applySolution:start", uid, {
          kind: meta.kind,
          solution: sol
        });

        if (sol.type === "circle") {
          this.setCircleParts(uid, sol.parts, { force: true, preserve: false });
          this.circle[uid] = boolArray(sol.parts, sol.active);
          meta.parts = sol.parts;
        } else {
          this.setRectDims(uid, sol.rows, sol.cols, { force: true, preserve: false });
          this.rect[uid] = boolArray(sol.rows * sol.cols, sol.active);
          this.rectDims[uid] = { rows: sol.rows, cols: sol.cols };
          meta.rows = sol.rows;
          meta.cols = sol.cols;
        }

        this.syncInputs(uid, true);
        this.render(uid);

        fqdbg("applySolution:end", uid, {
          kind: meta.kind,
          rectDims: this.rectDims[uid] || null,
          circleLen: this.circle[uid] ? this.circle[uid].length : null,
          selected: this.countSelected(uid)
        });

        return sol;
      },

      markRevealed(uid) {
        const meta = this.getMeta(uid);
        if (!meta.ready) return false;

        if (meta.revealed && meta.locked) {
          fqdbg("markRevealed-skip-already-revealed", uid);
          return true;
        }

        fqdbg("markRevealed:before", uid, {
          kind: meta.kind,
          locked: meta.locked,
          revealed: meta.revealed,
          solved: meta.solved,
          rectDims: this.rectDims[uid] || null,
          circleLen: this.circle[uid] ? this.circle[uid].length : null,
          selected: this.countSelected(uid)
        });

        meta.revealed = true;
        meta.solved = false;
        meta.locked = true;
        this.applySolution(uid);
        this.syncDomState(uid);

        fqdbg("markRevealed:after", uid, {
          kind: meta.kind,
          locked: meta.locked,
          revealed: meta.revealed,
          solved: meta.solved,
          rectDims: this.rectDims[uid] || null,
          circleLen: this.circle[uid] ? this.circle[uid].length : null,
          selected: this.countSelected(uid)
        });

        return true;
      },

      register(uid, options) {
        const opts = options || {};
        const kind = opts.kind || "";
        const meta = this.getMeta(uid, kind);
        const nodes = this.getNodes(uid);

        fqdbg("register:start", uid, {
          kind: kind,
          initialParts: opts.initialParts,
          initialRows: opts.initialRows,
          initialCols: opts.initialCols,
          hadCircleState: Array.isArray(this.circle[uid]) ? this.circle[uid].length : 0,
          hadRectState: Array.isArray(this.rect[uid]) ? this.rect[uid].length : 0,
          rectDims: this.rectDims[uid] || null
        });

        if (kind) nodes.kind = kind;
        if (opts.wrap) nodes.wrap = opts.wrap;
        if (opts.host) nodes.host = opts.host;
        if (opts.mount) nodes.mount = opts.mount;
        if (opts.circleInput) nodes.circleInput = opts.circleInput;
        if (opts.rowsInput) nodes.rowsInput = opts.rowsInput;
        if (opts.colsInput) nodes.colsInput = opts.colsInput;

        this.localizeRangeLabels(uid, kind || nodes.kind);

        if (opts.target !== undefined) this.setTarget(uid, opts.target, kind || meta.kind);

        if (kind === "circle") {
          const hasCircleState =
            Array.isArray(this.circle[uid]) &&
            this.circle[uid].length > 0;

          if (!hasCircleState) {
            this.ensureCircle(
              uid,
              opts.initialParts != null ? opts.initialParts : 1,
              { preserve: false }
            );
          } else {
            meta.parts = this.circle[uid].length;
            meta.kind = "circle";
          }
        } else if (kind === "rect") {
          const dims = this.rectDims[uid];
          const hasRectState =
            !!dims &&
            Array.isArray(this.rect[uid]) &&
            this.rect[uid].length ===
              clampInt(dims.rows, 1, 20, 1) * clampInt(dims.cols, 1, 20, 1);

          if (!hasRectState) {
            this.ensureRect(
              uid,
              opts.initialRows != null ? opts.initialRows : 1,
              opts.initialCols != null ? opts.initialCols : 1,
              { preserve: false }
            );
          } else {
            meta.rows = clampInt(dims.rows, 1, 20, 1);
            meta.cols = clampInt(dims.cols, 1, 20, 1);
            meta.kind = "rect";
          }
        }

        if (nodes.circleInput) this.bindCircleInput(uid, nodes.circleInput);
        if (nodes.rowsInput || nodes.colsInput) this.bindRectInputs(uid, nodes.rowsInput, nodes.colsInput);

        meta.ready = true;
        this.syncInputs(uid, true);
        this.syncDomState(uid);
        this.render(uid);

        fqdbg("register:end", uid, {
          kind: meta.kind,
          rectDims: this.rectDims[uid] || null,
          circleLen: this.circle[uid] ? this.circle[uid].length : null,
          selected: this.countSelected(uid)
        });

        return nodes;
      },

      attachCircle(uid, options) {
        const opts = Object.assign({}, options || {}, { kind: "circle" });
        fqdbg("attachCircle", uid);
        return this.register(uid, opts);
      },

      attachRect(uid, options) {
        const opts = Object.assign({}, options || {}, { kind: "rect" });
        fqdbg("attachRect", uid);
        return this.register(uid, opts);
      },

      bindCircleInput(uid, input) {
        if (!input || input.__fqCircleBoundUid === uid) return;
        input.__fqCircleBoundUid = uid;

        fqdbg("bindCircleInput", uid);

        const handler = () => {
          fqdbg("circle-input-event", uid, {
            value: input.value,
            locked: this.isLocked(uid)
          });

          if (this.isLocked(uid)) {
            this.syncInputs(uid, true);
            return;
          }
          const value = clampInt(input.value, 1, 32, 1);
          this.setCircleParts(uid, value, { preserve: false });
          this.render(uid);
        };

        input.addEventListener("input", handler, true);
        input.addEventListener("change", handler, true);
      },

      bindRectInputs(uid, rowsInput, colsInput) {
        if (rowsInput && rowsInput.__fqRectRowsBoundUid !== uid) {
          rowsInput.__fqRectRowsBoundUid = uid;
          fqdbg("bindRectRowsInput", uid);

          const handlerRows = () => {
            fqdbg("rect-rows-event", uid, {
              rowsValue: rowsInput ? rowsInput.value : null,
              colsValue: colsInput ? colsInput.value : null,
              locked: this.isLocked(uid)
            });

            if (this.isLocked(uid)) {
              this.syncInputs(uid, true);
              return;
            }
            const rows = clampInt(rowsInput.value, 1, 20, 1);
            const cols = colsInput ? clampInt(colsInput.value, 1, 20, 1) : ((this.rectDims[uid] && this.rectDims[uid].cols) || 1);
            this.setRectDims(uid, rows, cols, { preserve: false });
            this.render(uid);
          };

          rowsInput.addEventListener("input", handlerRows, true);
          rowsInput.addEventListener("change", handlerRows, true);
        }

        if (colsInput && colsInput.__fqRectColsBoundUid !== uid) {
          colsInput.__fqRectColsBoundUid = uid;
          fqdbg("bindRectColsInput", uid);

          const handlerCols = () => {
            fqdbg("rect-cols-event", uid, {
              rowsValue: rowsInput ? rowsInput.value : null,
              colsValue: colsInput ? colsInput.value : null,
              locked: this.isLocked(uid)
            });

            if (this.isLocked(uid)) {
              this.syncInputs(uid, true);
              return;
            }
            const cols = clampInt(colsInput.value, 1, 20, 1);
            const rows = rowsInput ? clampInt(rowsInput.value, 1, 20, 1) : ((this.rectDims[uid] && this.rectDims[uid].rows) || 1);
            this.setRectDims(uid, rows, cols, { preserve: false });
            this.render(uid);
          };

          colsInput.addEventListener("input", handlerCols, true);
          colsInput.addEventListener("change", handlerCols, true);
        }
      },

      syncInputs(uid, forceValue) {
        const nodes = this.refreshNodes(uid);
        const meta = this.getMeta(uid);
        const force = !!forceValue;

        fqdbg("syncInputs:start", uid, meta.kind, {
          force: force,
          locked: !!meta.locked
        });

        if (meta.kind === "circle" && nodes.circleInput) {
          const parts = (this.circle[uid] && this.circle[uid].length) || meta.parts || 1;
          fqdbg("syncInputs:circle", uid, {
            domValue: nodes.circleInput.value,
            targetValue: String(parts),
            force: force
          });
          if (force || String(nodes.circleInput.value) !== String(parts)) nodes.circleInput.value = String(parts);
          nodes.circleInput.disabled = !!meta.locked;
        }

        if (meta.kind === "rect") {
          const dims = this.rectDims[uid] || { rows: meta.rows || 1, cols: meta.cols || 1 };

          if (nodes.rowsInput) {
            fqdbg("syncInputs:rectRows", uid, {
              domValue: nodes.rowsInput.value,
              targetValue: String(dims.rows),
              force: force
            });
            if (force || String(nodes.rowsInput.value) !== String(dims.rows)) nodes.rowsInput.value = String(dims.rows);
            nodes.rowsInput.disabled = !!meta.locked;
          }

          if (nodes.colsInput) {
            fqdbg("syncInputs:rectCols", uid, {
              domValue: nodes.colsInput.value,
              targetValue: String(dims.cols),
              force: force
            });
            if (force || String(nodes.colsInput.value) !== String(dims.cols)) nodes.colsInput.value = String(dims.cols);
            nodes.colsInput.disabled = !!meta.locked;
          }
        }
      },

      syncDomState(uid) {
        const nodes = this.refreshNodes(uid);
        const meta = this.getMeta(uid);
        const targets = [nodes.wrap, nodes.host, nodes.mount];

        fqdbg("syncDomState", uid, {
          kind: meta.kind,
          locked: !!meta.locked,
          solved: !!meta.solved,
          revealed: !!meta.revealed
        });

        for (let i = 0; i < targets.length; i++) {
          const el = targets[i];
          if (!el || !el.setAttribute) continue;
          el.setAttribute("data-fq-locked", meta.locked ? "1" : "0");
          el.setAttribute("data-fq-solved", meta.solved ? "1" : "0");
          el.setAttribute("data-fq-revealed", meta.revealed ? "1" : "0");
        }

        this.syncInputs(uid, false);
      },

      render(uid) {
        const nodes = this.refreshNodes(uid);
        const meta = this.getMeta(uid);
        if (!nodes.mount) {
          fqdbg("render-skip-no-mount", uid, meta.kind);
          return false;
        }

        fqdbg("render", uid, {
          kind: meta.kind,
          rectDims: this.rectDims[uid] || null,
          circleLen: this.circle[uid] ? this.circle[uid].length : null,
          selected: this.countSelected(uid)
        });

        if (meta.kind === "circle") return this.renderCircle(uid, nodes.mount);
        if (meta.kind === "rect") return this.renderRect(uid, nodes.mount);
        return false;
      },

      renderCircle(uid, mount) {
        const meta = this.getMeta(uid, "circle");
        const arr = Array.isArray(this.circle[uid]) ? this.circle[uid] : this.ensureCircle(uid, meta.parts || 1);
        const n = Math.max(1, arr.length | 0);
        const locked = !!meta.locked;

        const W = 200;
        const H = 200;
        const padding = 6;
        const cx = W / 2;
        const cy = H / 2;
        const r = Math.min(W, H) / 2 - padding;
        const step = 360 / n;
        const startOffset = -90;

        let slices = "";
        let lines = "";

        if (n === 1) {
          slices = `
            <circle
              data-fq-part="0"
              class="fq-clickable"
              cx="${cx}" cy="${cy}" r="${r}"
              fill="${arr[0] ? "var(--fq-mark)" : "transparent"}"
            ></circle>
          `;
        } else {
          for (let i = 0; i < n; i++) {
            const a0 = (startOffset + step * i) * Math.PI / 180;
            const a1 = (startOffset + step * (i + 1)) * Math.PI / 180;

            const x0 = cx + r * Math.cos(a0);
            const y0 = cy + r * Math.sin(a0);
            const x1 = cx + r * Math.cos(a1);
            const y1 = cy + r * Math.sin(a1);
            const largeArc = step > 180 ? 1 : 0;

            slices += `
              <path
                data-fq-part="${i}"
                class="fq-clickable"
                d="M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 ${largeArc},1 ${x1},${y1} Z"
                fill="${arr[i] ? "var(--fq-mark)" : "transparent"}"
              ></path>
            `;

            lines += `
              <line
                x1="${cx}" y1="${cy}" x2="${x0}" y2="${y0}"
                stroke="#000000" stroke-width="2"
              ></line>
            `;
          }
        }

        mount.innerHTML = `
          <svg class="fq-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" aria-hidden="true">
            <circle cx="${cx}" cy="${cy}" r="${r}" stroke="#000000" stroke-width="2" fill="#ffffff"></circle>
            ${slices}
            ${lines}
            <circle cx="${cx}" cy="${cy}" r="${r}" stroke="#000000" stroke-width="2" fill="none"></circle>
          </svg>
        `;

        mount.onclick = (evt) => {
          const el = evt.target && evt.target.closest ? evt.target.closest("[data-fq-part]") : null;
          if (!el || locked) return;
          const i = parseInt(el.getAttribute("data-fq-part"), 10);
          if (!Number.isFinite(i)) return;
          this.toggleCircle(uid, i);
          this.render(uid);
        };

        this.syncDomState(uid);
        return true;
      },

      renderRect(uid, mount) {
        const meta = this.getMeta(uid, "rect");
        const dims = this.rectDims[uid] || { rows: meta.rows || 1, cols: meta.cols || 1 };
        const arr = Array.isArray(this.rect[uid]) ? this.rect[uid] : this.ensureRect(uid, dims.rows, dims.cols);
        const rows = clampInt(dims.rows, 1, 20, 1);
        const cols = clampInt(dims.cols, 1, 20, 1);
        const locked = !!meta.locked;

        const W = 200;
        const H = 200;
        const padding = 6;
        const usableW = W - 2 * padding;
        const usableH = H - 2 * padding;
        const rw = usableW / cols;
        const rh = usableH / rows;

        let cells = "";
        let lines = "";

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const i = r * cols + c;
            const x = padding + c * rw;
            const y = padding + r * rh;

            cells += `
              <rect
                data-fq-part="${i}"
                class="fq-clickable"
                x="${x}" y="${y}" width="${rw}" height="${rh}"
                fill="${arr[i] ? "var(--fq-mark)" : "transparent"}"
              ></rect>
            `;
          }
        }

        for (let r = 0; r <= rows; r++) {
          const y = padding + r * rh;
          lines += `<line x1="${padding}" y1="${y}" x2="${W - padding}" y2="${y}" stroke="#000000" stroke-width="2"></line>`;
        }
        for (let c = 0; c <= cols; c++) {
          const x = padding + c * rw;
          lines += `<line x1="${x}" y1="${padding}" x2="${x}" y2="${H - padding}" stroke="#000000" stroke-width="2"></line>`;
        }

        mount.innerHTML = `
          <svg class="fq-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" aria-hidden="true">
            <rect x="0" y="0" width="${W}" height="${H}" fill="#ffffff" stroke="#000000" stroke-width="2"></rect>
            ${cells}
            ${lines}
          </svg>
        `;

        mount.onclick = (evt) => {
          const el = evt.target && evt.target.closest ? evt.target.closest("[data-fq-part]") : null;
          if (!el || locked) return;
          const i = parseInt(el.getAttribute("data-fq-part"), 10);
          if (!Number.isFinite(i)) return;
          this.toggleRect(uid, i);
          this.render(uid);
        };

        this.syncDomState(uid);
        return true;
      },

      _fqLabelOf(el) {
        if (!el) return "";
        const parts = [];
        try { parts.push(el.textContent || ""); } catch (e) {}
        try { if (el.className) parts.push(String(el.className)); } catch (e) {}

        const attrs = ["title", "aria-label", "data-action", "data-title", "name", "value"];
        for (let i = 0; i < attrs.length; i++) {
          try {
            const v = el.getAttribute && el.getAttribute(attrs[i]);
            if (v) parts.push(v);
          } catch (e) {}
        }

        return parts.join(" ").replace(/\s+/g, " ").trim().toLowerCase();
      },

      _fqIsRevealButton(el) {
        const s = this._fqLabelOf(el);
        return /(aufl|aufl[oö]sen|l[oö]sung|show solution|solution|resolve)/i.test(s);
      },

      _fqLooksRevealed(scope) {
        if (!scope || !scope.querySelector) return false;

        try {
          if (scope.querySelector('[data-state="resolved"], [data-revealed="true"], [data-state="revealed"]')) return true;
        } catch (e) {}

        const feedback = scope.querySelector(".lia-quiz__feedback, [class*='feedback']");
        const text = ((feedback && feedback.textContent) || "").toLowerCase();

        if (/(aufgel|aufl[oö]s|l[oö]sung|show solution|resolved|solution)/i.test(text)) return true;

        return false;
      },

      ensureQuizBridge(uid, scope) {
        const nodes = this.getNodes(uid);
        const meta = this.getMeta(uid);

        if (!scope) return;
        if (nodes._quizBridgeInstalled && nodes._quizScope === scope && scope.isConnected) return;

        if (nodes.observer) {
          try { nodes.observer.disconnect(); } catch (e) {}
          nodes.observer = null;
        }

        if (nodes._quizScope && nodes._quizClickHandler) {
          try { nodes._quizScope.removeEventListener("click", nodes._quizClickHandler, true); } catch (e) {}
        }

        const clickHandler = (evt) => {
          const btn = evt.target && evt.target.closest
            ? evt.target.closest("button, input[type='button'], input[type='submit']")
            : null;

          if (!btn) return;
          if (!this._fqIsRevealButton(btn)) return;
          if (!meta.ready) return;

          fqdbg("quiz-reveal-click", uid, {
            label: this._fqLabelOf(btn)
          });

          setTimeout(() => {
            this.markRevealed(uid);
          }, 0);
        };

        scope.addEventListener("click", clickHandler, true);

        let obs = null;
        if (typeof MutationObserver !== "undefined") {
          obs = new MutationObserver(() => {
            if (!meta.ready || meta.revealed) return;
            if (this._fqLooksRevealed(scope)) {
              fqdbg("quiz-observer-detected-revealed", uid);
              this.markRevealed(uid);
            }
          });

          try {
            obs.observe(scope, {
              subtree: true,
              childList: true,
              attributes: true,
              characterData: true
            });
          } catch (e) {
            obs = null;
          }
        }

        nodes._quizBridgeInstalled = true;
        nodes._quizScope = scope;
        nodes._quizClickHandler = clickHandler;
        nodes.observer = obs;

        fqdbg("ensureQuizBridge", uid, {
          scope: fqNodeLabel(scope)
        });
      },

      onCheck(uid, passed) {
        fqdbg("onCheck", uid, { passed: !!passed });
        if (passed) this.markSolved(uid);
        return !!passed;
      },

      onReveal(uid) {
        fqdbg("onReveal", uid);
        return this.markRevealed(uid);
      }
    };

    fqdbg("fraction-store-created");
  } else {
    fqdbg("fraction-store-reused");
  }

  ROOT.__LIA_FRACTION_QUIZ__ = ROOT[STORE_KEY];
  window.__LIA_FRACTION_QUIZ__ = ROOT[STORE_KEY];
})();


















  // =========================
  // NAVIGATION
  // NAVIGATION
  // NAVIGATION
  // NAVIGATION
  // NAVIGATION
  // =========================




(function () {

  // =========================================================
  // Root/Doc (iframe-safe)
  // =========================================================
  function getRootWindowSafe(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  let ROOT = getRootWindowSafe();
  let ROOT_DOC = null;
  try { ROOT_DOC = ROOT.document; } catch(e){ ROOT = window; ROOT_DOC = document; }

  // =========================================================
  // Run-once Registry (import-sicher) — aber "kickbar"
  // =========================================================
  const REGKEY = "__LIA_BM_TOC5_V59__";
  if (ROOT[REGKEY] && ROOT[REGKEY].installed) {
    try { ROOT[REGKEY].kick && ROOT[REGKEY].kick(); } catch(e){}
    return;
  }
  ROOT[REGKEY] = ROOT[REGKEY] || {};
  ROOT[REGKEY].installed = true;

  // =========================================================
  // CSS Injection (immer in toc.ownerDocument)
  // =========================================================
  const STYLE_ID = "lia-bm-toc5-style";
  const CSS_TEXT = `
/* ===== Aktiv nur wenn Klasse gesetzt ===== */
.lia-toc.lia-bm-toc5-active{
  display:flex !important;
  flex-direction:column !important;
  min-height:0 !important;
}
.lia-toc.lia-bm-toc5-active #lia-bm-toc5{
  flex: 1 1 auto !important;
  min-height: 0 !important;
  overflow: auto !important;
}
.lia-toc.lia-bm-toc5-active .lia-bm-overview-pin{
  margin-top: auto !important;
}

/* ===== Bookmarks TOC ===== */
.lia-toc #lia-bm-toc5{ padding:.25em 0 .5em 0; }

.lia-toc #lia-bm-toc5 ul{ list-style:none; margin:0; padding:0; }
.lia-toc #lia-bm-toc5 .bm-list{ padding:0 .5em; }

.lia-toc #lia-bm-toc5 .bm-row{
  display:flex; align-items:center; gap:.35em;
    padding:.18em .25em .28em .25em; border-radius:.35em;
  line-height:1.25;
}


/* ===== Separator: weiß, 80% Breite, zentriert, zwischen ALLEN sichtbaren Einträgen ===== */
.lia-toc #lia-bm-toc5 .bm-row{
  position:relative; /* Anker für ::after */
  padding-bottom:.28em; /* Platz für Linie */
}
.lia-toc #lia-bm-toc5 .bm-row::after{
  content:"";
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  width:90%;
  height:1px;
  bottom:0; /* Linie IN der Zeile, wird nicht vom children-UL überdeckt */
  background: rgba(255,255,255,0.85);
  pointer-events:none;
}
/* nur beim letzten BLATT (ohne Kinder) ausblenden */
.lia-toc #lia-bm-toc5 li:last-child:not(.bm-has-kids) > .bm-row::after{
  display:none;
}



.lia-toc #lia-bm-toc5 .bm-row:hover{ background: rgba(127,127,127,.12); }

.lia-toc #lia-bm-toc5 .bm-toggle,
.lia-toc #lia-bm-toc5 .bm-spacer{
  width:1.65em; height:1.65em; flex:0 0 1.15em;
  display:inline-flex; align-items:center; justify-content:center;
}

.lia-toc #lia-bm-toc5 .bm-toggle{
  border:0; background:transparent; color:inherit;
  cursor:pointer; padding:0; opacity:.9;
  font-size:.95em; line-height:1;
}

.lia-toc #lia-bm-toc5 .bm-toggle svg{
  width:2.5em;
  height:2.5em;
  display:block;
  pointer-events:none;
  transform-origin:50% 50%;
  transition:transform .12s ease;
}

.lia-toc #lia-bm-toc5 .bm-toggle[data-open="true"] svg{
  transform:rotate(90deg);
}
.lia-toc #lia-bm-toc5 .bm-toggle:hover{ opacity:1; }

.lia-toc #lia-bm-toc5 a{
  color:inherit; text-decoration:none;
  flex:1 1 auto; min-width:0;
  display:block;
}
.lia-toc #lia-bm-toc5 a:hover{ text-decoration:underline; }

.lia-toc #lia-bm-toc5 .bm-children{ padding-left: 0.5em; }
.lia-toc #lia-bm-toc5 .bm-hidden{ display:none !important; }

/* Active in Themefarbe */
.lia-toc #lia-bm-toc5 .bm-row.bm-active{
  background: rgba(0,0,0,.14);
  background: rgba(var(--color-highlight), .18);
  border-left: 3px solid rgba(0,0,0,.35);
  border-left-color: rgb(var(--color-highlight));
  padding-left: calc(.25em - 3px);
}
.lia-toc #lia-bm-toc5 .bm-row.bm-active a{ font-weight: 700; }

/* Level-Optik (deine Werte) */
.lia-toc #lia-bm-toc5 .bm-row[data-level="1"] a{ font-size:1.25em; font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="2"] a{ font-size:1.00em; font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="3"] a{ font-size:.9em;  font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="4"] a{ font-size:.8em;  font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="5"] a{ font-size:.75em; font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="6"] a{ font-size:.7em;  font-weight:700; }

/* Search überall in .lia-toc verstecken (aber nicht in unserem Baum) */
.lia-toc :not(#lia-bm-toc5) input[type="search"],
.lia-toc :not(#lia-bm-toc5) input[placeholder*="Suche"],
.lia-toc :not(#lia-bm-toc5) input[placeholder*="suche"],
.lia-toc :not(#lia-bm-toc5) input[placeholder*="Search"],
.lia-toc :not(#lia-bm-toc5) input[placeholder*="search"],
.lia-toc :not(#lia-bm-toc5) input[aria-label*="Suche"],
.lia-toc :not(#lia-bm-toc5) input[aria-label*="suche"],
.lia-toc :not(#lia-bm-toc5) input[aria-label*="Search"],
.lia-toc :not(#lia-bm-toc5) input[aria-label*="search"],
.lia-toc :not(#lia-bm-toc5) form[role="search"],
.lia-toc :not(#lia-bm-toc5) [role="search"]{
  display:none !important;
}
  `.trim();

  function ensureStyle(doc){
    if (!doc) return;
    try{
      if (doc.getElementById(STYLE_ID)) return;
      const st = doc.createElement("style");
      st.id = STYLE_ID;
      st.type = "text/css";
      st.appendChild(doc.createTextNode(CSS_TEXT));
      (doc.head || doc.documentElement || doc.body).appendChild(st);
    } catch(e){}
  }

  // =========================================================
  // Storage
  // =========================================================
  function storageKey(){
    try{
      const href = (ROOT.location && ROOT.location.href) ? ROOT.location.href : "";
      return "__LIA_BM_TOC5_STATE__::" + href.split("#")[0];
    } catch(e){
      return "__LIA_BM_TOC5_STATE__";
    }
  }
  function loadState(){
    try{
      const raw = ROOT.localStorage.getItem(storageKey());
      const obj = raw ? JSON.parse(raw) : {};
      return (obj && typeof obj === "object") ? obj : {};
    } catch(e){ return {}; }
  }
  function saveState(s){
    try{ ROOT.localStorage.setItem(storageKey(), JSON.stringify(s || {})); } catch(e){}
  }

  // =========================================================
  // Route: Overview-Root?
  // =========================================================
  function isOverviewRoot(){
    try{
      const u = new URL(ROOT.location.href);
      const p = (u.pathname || "").replace(/\/+$/,"/"); // normalize
      const isNightly = /\/nightly\/$/.test(p);
      const isCourse  = /\/course\/$/.test(p);
      const noQuery = !u.search || u.search === "";
      return (isNightly || isCourse) && noQuery;
    } catch(e){
      return false;
    }
  }

  // =========================================================
  // Helpers (TOC)
  // =========================================================
  function findTOC(){
    return (ROOT_DOC && ROOT_DOC.querySelector ? ROOT_DOC.querySelector(".lia-toc") : null)
        || (document.querySelector ? document.querySelector(".lia-toc") : null);
  }

  function extractHashFromHref(href){
    href = (href || "").trim();
    if (!href.includes("#")) return "";
    const h = href.split("#").pop() || "";
    return h.trim();
  }

  function isRealHashLink(a){
    if (!a || !a.getAttribute) return false;
    const href = (a.getAttribute("href") || "").trim();
    if (!href.includes("#")) return false;
    const h = extractHashFromHref(href);
    return !!h;
  }

  function getOriginalLinks(toc){
    if (!toc) return [];
    return Array.from(toc.querySelectorAll('a[href*="#"]'))
      .filter(a => !a.closest("#lia-bm-toc5"))
      .filter(a => isRealHashLink(a));
  }

  function getOriginalActiveHash(toc){
    if (!toc) return "";
    const a = toc.querySelector("a.lia-active") || (toc.querySelector(".lia-active a") || null);
    if (!a) return "";
    return extractHashFromHref(a.getAttribute("href") || "");
  }

  function findOriginalLinkByHash(toc, hash){
    if (!toc || !hash) return null;
    const needle = "#" + hash;
    const links = Array.from(toc.querySelectorAll('a[href*="#"]'))
      .filter(a => !a.closest("#lia-bm-toc5"));
    return (
      links.find(a => ((a.getAttribute("href")||"").trim()).endsWith(needle)) ||
      links.find(a => ((a.getAttribute("href")||"").trim()).includes(needle)) ||
      null
    );
  }

  function clickOriginalByHash(toc, hash){
    const a = findOriginalLinkByHash(toc, hash);
    if (!a) return false;
    try { a.click(); return true; } catch(e){}
    try{
      a.dispatchEvent(new MouseEvent("click", { bubbles:true, cancelable:true, view:ROOT }));
      return true;
    } catch(e){}
    return false;
  }

  function getLevelFromDOM(a, toc){
    const aria = a.getAttribute("aria-level");
    if (aria && !isNaN(parseInt(aria,10))) return parseInt(aria,10);

    const li = a.closest("li");
    if (li){
      let depth = 1;
      let n = li.parentElement;
      while (n && n !== toc){
        if (n.tagName === "UL") depth++;
        n = n.parentElement;
      }
      return Math.max(1, Math.min(6, depth));
    }
    return 0;
  }

  function getIndentPx(a){
    try{
      const cs = (a.ownerDocument && a.ownerDocument.defaultView)
        ? a.ownerDocument.defaultView.getComputedStyle(a)
        : getComputedStyle(a);
      const pl = parseFloat(cs.paddingLeft || "0") || 0;
      const ml = parseFloat(cs.marginLeft  || "0") || 0;
      const ti = parseFloat(cs.textIndent  || "0") || 0;
      return Math.max(pl, ml, ti);
    } catch(e){
      return 0;
    }
  }

  function mapIndentLevels(nodes){
    const indents = nodes.map(n => n.indent).filter(x => x > 0);
    const uniq = Array.from(new Set(indents.map(x => Math.round(x)))).sort((a,b)=>a-b);

    if (!uniq.length){
      nodes.forEach(n => { if (n.level === 0) n.level = 1; });
      return;
    }

    nodes.forEach(n => {
      if (n.level !== 0) return;
      const v = Math.round(n.indent);
      let idx = uniq.indexOf(v);
      if (idx < 0) idx = 0;
      n.level = Math.max(1, Math.min(6, idx + 1));
    });
  }

  function buildTree(items){
    const root = { children: [] };
    const stack = [{ node: root, level: 0 }];
    for (const it of items){
      while (stack.length && stack[stack.length-1].level >= it.level) stack.pop();
      const parent = stack[stack.length-1].node;
      const node = { ...it, children: [] };
      parent.children.push(node);
      stack.push({ node, level: it.level });
    }
    return root.children;
  }

  function collectForceOpen(tree, activeHash){
    const force = new Set();
    function walk(list, parents){
      for (const n of list){
        if (n.hash === activeHash){
          parents.forEach(p => force.add(p.key));
          return true;
        }
        if (n.children && n.children.length){
          if (walk(n.children, parents.concat(n))) return true;
        }
      }
      return false;
    }
    walk(tree, []);
    return force;
  }

  function setCollapsed(row, childWrap, open){
    row.classList.toggle("bm-open", !!open);
    if (childWrap) childWrap.classList.toggle("bm-hidden", !open);
  }

  function setGlyph(btn, open){
    if (!btn) return;

    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("data-open", open ? "true" : "false");

    if (!btn.querySelector("svg")){
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M8 6 L17 12 L8 18 Z" fill="currentColor"></path>
        </svg>
      `.trim();
    }
  }

  // =========================================================
  // Search überall entfernen (JS robust)
  // =========================================================
  function looksLikeSearchInput(inp){
    if (!inp || !inp.getAttribute) return false;
    const type = (inp.getAttribute("type") || "").toLowerCase();
    const ph   = (inp.getAttribute("placeholder") || "").toLowerCase();
    const al   = (inp.getAttribute("aria-label") || "").toLowerCase();
    return (
      type === "search" ||
      ph.includes("suche") || ph.includes("search") ||
      al.includes("suche") || al.includes("search")
    );
  }

  function killSearchAnywhere(toc){
    if (!toc) return;
    try{
      Array.from(toc.querySelectorAll("input"))
        .filter(inp => !inp.closest("#lia-bm-toc5"))
        .forEach(inp => {
          if (!looksLikeSearchInput(inp)) return;
          const wrap =
            inp.closest('form,[role="search"],[class*="search"],[id*="search"],div,label') || inp;
          wrap.style.display = "none";
          wrap.setAttribute("data-lia-bm-hidden","1");
        });

      Array.from(toc.querySelectorAll('form[role="search"],[role="search"]'))
        .filter(el => !el.closest("#lia-bm-toc5"))
        .forEach(el => {
          el.style.display = "none";
          el.setAttribute("data-lia-bm-hidden","1");
        });

      Array.from(toc.querySelectorAll('[class*="search"],[id*="search"]'))
        .filter(el => !el.closest("#lia-bm-toc5"))
        .forEach(el => {
          if (!el.querySelector("input")) return;
          el.style.display = "none";
          el.setAttribute("data-lia-bm-hidden","1");
        });
    } catch(e){}
  }

  // =========================================================
  // Übersicht finden & unten pinnen
  // =========================================================
  function findOverviewControl(toc){
    if (!toc) return null;

    // Kandidaten: a/button mit Text "Übersicht"
    const cand = Array.from(toc.querySelectorAll("a,button"))
      .filter(el => !el.closest("#lia-bm-toc5"));

    // 1) Textmatch
    for (const el of cand){
      const t = (el.textContent || "").trim().toLowerCase();
      if (t === "übersicht" || t === "uebersicht" || t === "overview") return el;
    }

    // 2) href zeigt auf /nightly/ oder /course/ Root
    for (const el of cand){
      if (!el.getAttribute) continue;
      const href = (el.getAttribute("href") || "").trim();
      if (!href) continue;
      if (href === "/nightly/" || href === "/course/" ||
          href.endsWith("/nightly/") || href.endsWith("/course/")) {
        return el;
      }
    }

    return null;
  }

  // direct child of toc (damit margin-top:auto greift)
  function directChildOfTOC(el, toc){
    if (!el || !toc) return null;
    let n = el;
    while (n && n.parentElement && n.parentElement !== toc) n = n.parentElement;
    return (n && n.parentElement === toc) ? n : null;
  }

  function pinOverviewBottom(toc, overviewEl){
    if (!toc) return null;
    if (!overviewEl) return null;

    const child = directChildOfTOC(overviewEl, toc) || overviewEl;
    try{
      child.classList.add("lia-bm-overview-pin");
    } catch(e){}
    return child;
  }

  // =========================================================
  // Original-TOC ausblenden (Button/Toolbar bleibt)
  // =========================================================
  function unhideAllHidden(toc){
    if (!toc) return;
    try{
      toc.querySelectorAll('[data-lia-bm-hidden="1"]').forEach(el => {
        el.style.display = "";
        el.removeAttribute("data-lia-bm-hidden");
      });
    } catch(e){}
  }

  function elementContainsOriginalHashLinks(el){
    if (!el || !el.querySelectorAll) return false;
    const as = Array.from(el.querySelectorAll('a[href*="#"]'));
    return as.some(a => !a.closest("#lia-bm-toc5") && isRealHashLink(a));
  }

  function hideOriginalNavigation(toc, toolbar, box, keepEl){
    if (!toc) return;

    // direkte Kinder, die Original-Hashlinks enthalten -> weg (außer keep)
    try{
      const kids = Array.from(toc.children || []);
      kids.forEach(ch => {
        if (!ch) return;
        if (toolbar && ch === toolbar) return;
        if (box && ch === box) return;
        if (keepEl && ch === keepEl) return;

        if (elementContainsOriginalHashLinks(ch)){
          ch.style.display = "none";
          ch.setAttribute("data-lia-bm-hidden","1");
        }
      });
    } catch(e){}

    // Fallback: tiefer liegende Wrapper/Listen -> weg (außer keep/toolbar/box)
    try{
      const cand = Array.from(toc.querySelectorAll("ul,ol,nav,section,div"))
        .filter(el => !el.closest("#lia-bm-toc5"))
        .filter(el => !(toolbar && el.closest && el.closest(".lia-toolbar")))
        .filter(el => !(keepEl && keepEl.contains && keepEl.contains(el)))
        .filter(el => elementContainsOriginalHashLinks(el));

      cand.forEach(el => {
        const parent = el.parentElement;
        if (parent && cand.includes(parent)) return;
        el.style.display = "none";
        el.setAttribute("data-lia-bm-hidden","1");
      });
    } catch(e){}
  }

  // =========================================================
  // Cleanup: Baum + Klassen + Hides entfernen
  // =========================================================
  function cleanup(toc){
    try{
      if (!toc) return;

      // Box raus
      const box = toc.querySelector("#lia-bm-toc5");
      if (box) box.remove();

      // Hides zurück
      unhideAllHidden(toc);

      // Klassen zurück
      toc.classList.remove("lia-bm-toc5-active");
      try{
        toc.querySelectorAll(".lia-bm-overview-pin").forEach(el => el.classList.remove("lia-bm-overview-pin"));
      } catch(e){}

    } catch(e){}
  }

  // =========================================================
  // Render
  // =========================================================
  function renderTree(doc, toc, nodes, state, activeHash, forceOpen){
    const ul = doc.createElement("ul");
    ul.className = "bm-list";

    for (const n of nodes){
      const li = doc.createElement("li");

      const row = doc.createElement("div");
      row.className = "bm-row";
      row.dataset.level = String(n.level);

      const hasKids = n.children && n.children.length;
      if (hasKids) li.classList.add("bm-has-kids");
      let childWrap = null;
      const mustOpen = (forceOpen && forceOpen.has(n.key)) || (state[n.key] === 1);

      let btn = null;

      if (hasKids){
        btn = doc.createElement("button");
        btn.type = "button";
        btn.className = "bm-toggle";
        btn.setAttribute("aria-label", "Abschnitt ein-/ausklappen");
        row.appendChild(btn);
      } else {
        const sp = doc.createElement("span");
        sp.className = "bm-spacer";
        row.appendChild(sp);
      }

      const a = doc.createElement("a");
      a.textContent = n.text;

      const orig = findOriginalLinkByHash(toc, n.hash);
      a.href = (orig && orig.getAttribute) ? (orig.getAttribute("href") || ("#" + n.hash)) : ("#" + n.hash);

      if (n.hash === activeHash) row.classList.add("bm-active");

      if (hasKids){
        childWrap = doc.createElement("ul");
        childWrap.className = "bm-children";
      }

      setCollapsed(row, childWrap, mustOpen);
      if (btn) setGlyph(btn, mustOpen);

      if (btn){
        btn.addEventListener("click", (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();

          const nowOpen = !row.classList.contains("bm-open");
          state[n.key] = nowOpen ? 1 : 0;
          saveState(state);

          setCollapsed(row, childWrap, nowOpen);
          setGlyph(btn, nowOpen);
        }, true);
      }

      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();

        // Auto-Open: Klick auf Parent klappt auf
        if (hasKids && !row.classList.contains("bm-open")){
          state[n.key] = 1;
          saveState(state);
          setCollapsed(row, childWrap, true);
          if (btn) setGlyph(btn, true);
        }

        const ok = clickOriginalByHash(toc, n.hash);
        if (!ok){
          try { ROOT.location.hash = "#" + n.hash; } catch(e2){}
          try { window.location.hash = "#" + n.hash; } catch(e3){}
        }

        ROOT.setTimeout(() => { try{ syncActive(toc); } catch(e){} }, 80);
      }, true);

      row.appendChild(a);
      li.appendChild(row);

      if (hasKids){
        const kids = renderTree(doc, toc, n.children, state, activeHash, forceOpen);
        while (kids.firstChild) childWrap.appendChild(kids.firstChild);
        li.appendChild(childWrap);
      }

      ul.appendChild(li);
    }

    return ul;
  }

  // =========================================================
  // Enhance / Sync
  // =========================================================
  let LOCK = false;

  function enhance(){
    if (LOCK) return false;
    LOCK = true;

    try{
      const toc = findTOC();
      if (!toc) return false;

      // Wenn wir auf Overview-Root sind: cleanup und fertig
      if (isOverviewRoot()){
        cleanup(toc);
        return false;
      }

      const TOC_DOC = toc.ownerDocument || ROOT_DOC || document;

      ensureStyle(TOC_DOC);
      ensureStyle(ROOT_DOC);
      if (ROOT_DOC !== document) ensureStyle(document);

      // Reset alter Zustände
      unhideAllHidden(toc);
      killSearchAnywhere(toc);

      // Toolbar behalten (TOC-Button)
      const toolbar = toc.querySelector(".lia-toolbar");

      // Overview-Button finden, pinnen und click-hook für cleanup
      const overviewBtn = findOverviewControl(toc);
      const overviewChild = pinOverviewBottom(toc, overviewBtn);

      if (overviewBtn && !overviewBtn.getAttribute("data-lia-bm-hooked")){
        overviewBtn.setAttribute("data-lia-bm-hooked","1");
        overviewBtn.addEventListener("click", () => {
          // Vor dem Wechsel: DOM-Reste entfernen
          const t = findTOC();
          if (t) cleanup(t);
        }, true);
      }

      // alten Baum entfernen
      const old = toc.querySelector("#lia-bm-toc5");
      if (old) old.remove();

      // Original-Links als Quelle
      const links = getOriginalLinks(toc);
      if (!links.length) return false;

      // Nodes dedupe nach hash
      const nodes = [];
      const seen = new Set();
      links.forEach((a) => {
        const hash = extractHashFromHref(a.getAttribute("href") || "");
        if (!hash) return;

        const key = "h:" + hash;
        if (seen.has(key)) return;
        seen.add(key);

        const lvl = getLevelFromDOM(a, toc);
        nodes.push({
          key,
          hash,
          text: (a.textContent || "").trim().replace(/\s+/g," "),
          level: lvl || 0,
          indent: getIndentPx(a)
        });
      });

      mapIndentLevels(nodes);
      const tree = buildTree(nodes);

      const state = loadState();
      const activeHash = getOriginalActiveHash(toc) || "";

      // Defaults: alles zu (nur nodes mit Kindern)
      (function initDefaults(list){
        for (const n of list){
          if (n.children && n.children.length){
            if (state[n.key] !== 0 && state[n.key] !== 1) state[n.key] = 0;
            initDefaults(n.children);
          }
        }
      })(tree);

      const forceOpen = activeHash ? collectForceOpen(tree, activeHash) : new Set();

      // bauen & einfügen
      const box = TOC_DOC.createElement("div");
      box.id = "lia-bm-toc5";
      box.appendChild(renderTree(TOC_DOC, toc, tree, state, activeHash, forceOpen));

      if (toolbar && toolbar.parentElement === toc) toolbar.insertAdjacentElement("afterend", box);
      else toc.insertBefore(box, toc.firstChild);

      // Layout aktivieren (damit Übersicht unten bleibt)
      toc.classList.add("lia-bm-toc5-active");

      // Original-Navi weg (aber toolbar + box + overviewChild bleiben)
      hideOriginalNavigation(toc, toolbar, box, overviewChild);

      saveState(state);
      return true;

    } catch(e){
      return false;
    } finally {
      LOCK = false;
    }
  }

  function syncActive(toc){
    try{
      if (!toc) return;
      const box = toc.querySelector ? toc.querySelector("#lia-bm-toc5") : null;
      if (!box) return;

      const activeHash = getOriginalActiveHash(toc);
      if (!activeHash) return;

      box.querySelectorAll(".bm-row.bm-active").forEach(r => r.classList.remove("bm-active"));

      const links = Array.from(box.querySelectorAll('a[href*="#"]'));
      const needle = "#" + activeHash;
      const a = links.find(x => (x.getAttribute("href") || "").includes(needle));
      if (a && a.closest){
        const row = a.closest(".bm-row");
        if (row) row.classList.add("bm-active");
      }
    } catch(e){}
  }

  // =========================================================
  // Boot (kein MutationObserver)
  // =========================================================
  let tries = 0;
  const bootTimer = ROOT.setInterval(() => {
    tries++;
    const ok = enhance();
    if (ok || tries > 160) ROOT.clearInterval(bootTimer);
  }, 150);

  const interval = ROOT.setInterval(() => {
    const toc = findTOC();
    if (!toc) return;

    // Falls wir auf Overview-Root sind: sicher cleanup
    if (isOverviewRoot()){
      cleanup(toc);
      return;
    }

    // Search wird von LiaScript gern nachgerendert
    killSearchAnywhere(toc);

    const box = toc.querySelector("#lia-bm-toc5");
    if (!box) {
      enhance();
    } else {
      // Original weg halten + Active sync
      const toolbar = toc.querySelector(".lia-toolbar");
      const overviewBtn = findOverviewControl(toc);
      const overviewChild = pinOverviewBottom(toc, overviewBtn);
      hideOriginalNavigation(toc, toolbar, box, overviewChild);
      toc.classList.add("lia-bm-toc5-active");
      syncActive(toc);
    }
  }, 700);

  try{
    ROOT.addEventListener("hashchange", () => {
      const toc = findTOC();
      if (toc) syncActive(toc);
    }, true);
  } catch(e){}

  // expose for kick
  ROOT[REGKEY].kick = function(){
    try{
      const toc = findTOC();
      if (toc && !isOverviewRoot()) enhance();
      if (toc && isOverviewRoot()) cleanup(toc);
    } catch(e){}
  };

})();





















  // =========================
  // NIGHTLY REDIRECTER
  // NIGHTLY REDIRECTER
  // NIGHTLY REDIRECTER
  // NIGHTLY REDIRECTER
  // NIGHTLY REDIRECTER
  // =========================









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





























  // =========================
  // TIMER UNTIL AUTOSOLVEBUTTON
  // TIMER UNTIL AUTOSOLVEBUTTON
  // TIMER UNTIL AUTOSOLVEBUTTON
  // TIMER UNTIL AUTOSOLVEBUTTON
  // =========================




(function () {

  const WIN = window;
  const DOC = document;

  // =========================
  // Per-Window/Folie Guard
  // =========================
  const GUARD = "__LIA_SOLUTION_TIMER_V0_0_1__";
  if (WIN[GUARD]) return;
  WIN[GUARD] = true;

  // =========================
  // State (pro Folie)
  // =========================
  const STATE = WIN.__liaSolTimerV001 || (WIN.__liaSolTimerV001 = {
    items: new Map(),   // key -> {btn, badge, endAt}
    ticker: null,
    observedRoots: new WeakSet(),
    observers: [],
  });

  // =========================
  // CSS Injection (Document + ShadowRoots)
  // =========================
  const STYLE_ID = "__lia_solution_timer_css_v0_0_1__";
  const CSS = `
.lia-sol-timer-badge{
  display:inline-block;
  margin-left:.6rem;
  padding:.15rem .45rem;
  border:1px solid currentColor;
  border-radius:.5rem;
  font-size:.85em;
  opacity:.85;
  user-select:none;
}
.lia-sol-timer-startbtn{ margin-right:.6rem; }
`;

  function injectStyleIntoRoot(root){
    try{
      if (!root) return;

      // Document
      if (root.nodeType === 9) {
        const doc = root;
        if (!doc.head) return;
        if (doc.getElementById(STYLE_ID)) return;
        const st = doc.createElement("style");
        st.id = STYLE_ID;
        st.textContent = CSS;
        doc.head.appendChild(st);
        return;
      }

      // ShadowRoot
      if (root.nodeType === 11 && root.host) {
        if (root.querySelector && root.querySelector(`style[data-id="${STYLE_ID}"]`)) return;
        const st = DOC.createElement("style");
        st.setAttribute("data-id", STYLE_ID);
        st.textContent = CSS;
        root.appendChild(st);
      }
    }catch(e){}
  }

  // =========================
  // Utils
  // =========================
  function parseBool(raw, def = true){
    if (raw == null) return def;
    const s = String(raw).trim().toLowerCase();
    if (!s) return def;
    if (["0","false","off","no","n","none"].includes(s)) return false;
    if (["1","true","on","yes","y"].includes(s)) return true;
    return def;
  }

  function parseStartMode(el){
    const v = (el.getAttribute("data-solution-timer-start") || "").trim().toLowerCase();
    if (/^(onclick|click|manual|startbutton|start-button|start_button)$/.test(v)) return "onclick";
    if (/^(oncheck|check|aftercheck|after-check|after_check)$/.test(v)) return "oncheck";
    return "immediate";
  }

  function parseTimeToMs(raw){
    if (raw == null) return 0;
    const s0 = String(raw).trim().toLowerCase();
    if (!s0) return 0;

    if (/^\d+(\.\d+)?$/.test(s0)) return Math.max(0, parseFloat(s0) * 1000); // seconds

    if (/^\d+:\d{1,2}$/.test(s0)) {
      const [m, sec] = s0.split(":").map(Number);
      return Math.max(0, (m * 60 + sec) * 1000);
    }

    let total = 0, found = false;
    const re = /(\d+(?:\.\d+)?)\s*(ms|s|sec|secs|second|seconds|m|min|mins|minute|minutes|h|hr|hrs|hour|hours)\b/g;
    let match;
    while ((match = re.exec(s0))) {
      found = true;
      const n = parseFloat(match[1]);
      const u = match[2];
      if (u === "ms") total += n;
      else if (["s","sec","secs","second","seconds"].includes(u)) total += n * 1000;
      else if (["m","min","mins","minute","minutes"].includes(u)) total += n * 60000;
      else if (["h","hr","hrs","hour","hours"].includes(u)) total += n * 3600000;
    }
    return found ? Math.max(0, total) : 0;
  }

  function formatRemaining(ms){
    ms = Math.max(0, ms);
    const sec = Math.ceil(ms / 1000);
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return (m <= 0) ? `${s}s` : `${m}:${String(s).padStart(2,"0")}`;
  }

  function normText(el){
    return (el.textContent || el.value || el.getAttribute("aria-label") || el.getAttribute("title") || "")
      .trim().toLowerCase();
  }

  function isCheckBtn(b){
    const t = normText(b);
    if (!t) return false;
    if (/(reset|zurück|zurueck|neustart)/.test(t)) return false;
    if (/(auf(lö|lo)sen|l(ö|oe)sung|solution|answer|antwort|reveal)/.test(t)) return false;
    return /(prüfen|pruefen|check)\b/.test(t);
  }

  function isSolutionBtn(b){
    const t = normText(b);
    if (!t) return false;
    if (/(reset|zurück|zurueck|neustart)/.test(t)) return false;
    if (/(prüfen|pruefen|check)/.test(t)) return false;
    return /(auf(lö|lo)sen|l(ö|oe)sung|solution|answer|antwort|reveal)/.test(t);
  }

  // =========================
  // Smart finders (RootNode: Document oder ShadowRoot)
  // =========================
  function findSolutionButtonSmart(el){
    const root = el.getRootNode ? el.getRootNode() : DOC;

    const scopes = [];
    const quizScope =
      (el.matches && (el.matches("lia-quiz, .lia-quiz") ? el : null)) ||
      (el.closest ? el.closest("lia-quiz, .lia-quiz") : null) ||
      null;
    if (quizScope) scopes.push(quizScope);

    let p = el.parentElement, steps = 0;
    while (p && steps++ < 8) { scopes.push(p); p = p.parentElement; }

    for (const s of scopes){
      try{
        const btns = Array.from(s.querySelectorAll("button, input[type='button'], a")).filter(isSolutionBtn);
        if (btns.length) return btns[btns.length - 1];
      }catch(e){}
    }

    try{
      const btns = root.querySelectorAll
        ? Array.from(root.querySelectorAll("button, input[type='button'], a")).filter(isSolutionBtn)
        : [];
      for (let i = btns.length - 1; i >= 0; i--){
        const b = btns[i];
        if (b && b.getClientRects && b.getClientRects().length) return b;
      }
      return btns[btns.length - 1] || null;
    }catch(e){}
    return null;
  }

  function findCheckButtonsSmart(el, solBtn){
    const root = (el.getRootNode ? el.getRootNode() : DOC);
    const scopes = [];
    if (solBtn && solBtn.parentElement) scopes.push(solBtn.parentElement);

    const quizScope =
      (el.matches && (el.matches("lia-quiz, .lia-quiz") ? el : null)) ||
      (el.closest ? el.closest("lia-quiz, .lia-quiz") : null) ||
      null;
    if (quizScope) scopes.push(quizScope);

    let p = solBtn ? solBtn.parentElement : el.parentElement, steps = 0;
    while (p && steps++ < 8) { scopes.push(p); p = p.parentElement; }

    for (const s of scopes){
      try{
        const btns = Array.from(s.querySelectorAll("button, input[type='button'], a")).filter(isCheckBtn);
        if (btns.length) return btns;
      }catch(e){}
    }

    try{
      const all = root.querySelectorAll
        ? Array.from(root.querySelectorAll("button, input[type='button'], a")).filter(isCheckBtn)
        : [];
      return all.slice(0, 8);
    }catch(e){}
    return [];
  }

  // =========================
  // Host + Cleanup (nur im Control-Host)
  // =========================
  function getControlHost(el, solBtn){
    // wichtigste Heuristik: parent des Solution-Buttons ist (fast immer) die Control-Leiste
    if (solBtn && solBtn.parentElement) return solBtn.parentElement;

    const quizScope = (el.closest ? el.closest("lia-quiz, .lia-quiz") : null) || null;
    return quizScope || el.parentElement || DOC.body;
  }

  function cleanupUiInHost(host){
    if (!host || !host.querySelectorAll) return;
    host.querySelectorAll("[data-sol-timer-ui='1']").forEach(n => { try{ n.remove(); }catch(e){} });
  }

  // =========================
  // Hide / FORCE-SHOW Prüfen
  // =========================
  function hideCheckButtons(btns){
    for (const b of btns){
      if (!b || !b.style) continue;
      if (b.dataset.__solTimerChkHidden === "1") continue;
      b.dataset.__solTimerChkHidden = "1";
      b.dataset.__solTimerPrevDisplayChk = b.style.display || "";
      b.style.display = "none";
      b.setAttribute("hidden", "");
    }
  }

  function forceShowCheckButtons(btns){
    for (const b of btns){
      if (!b || !b.style) continue;
      // egal wer hidden gesetzt hat: wir wollen sichtbar
      b.style.display = b.dataset.__solTimerPrevDisplayChk || "";
      b.removeAttribute("hidden");
      b.removeAttribute("aria-hidden");
      b.style.visibility = "";
      b.style.pointerEvents = "";
      b.style.opacity = "";
      delete b.dataset.__solTimerChkHidden;
      delete b.dataset.__solTimerPrevDisplayChk;
    }
  }

  // =========================
  // Reveal ticker
  // =========================
  function ensureTicker(){
    if (STATE.ticker) return;
    STATE.ticker = WIN.setInterval(() => {
      const now = Date.now();
      for (const [key, it] of STATE.items.entries()){
        if (!it.btn || !it.btn.isConnected) { STATE.items.delete(key); continue; }
        const rem = it.endAt - now;
        if (rem <= 0){
          it.btn.style.display = it.btn.dataset.__solTimerPrevDisplay || "";
          delete it.btn.dataset.__solTimerPrevDisplay;
          if (it.badge && it.badge.isConnected) it.badge.remove();
          STATE.items.delete(key);
        } else {
          if (it.badge) it.badge.textContent = `Lösung in ${formatRemaining(rem)}`;
        }
      }
      if (STATE.items.size === 0){
        WIN.clearInterval(STATE.ticker);
        STATE.ticker = null;
      }
    }, 250);
  }

  function scheduleReveal(btn, badge, ms){
    const key = `${Date.now()}_${Math.random().toString(16).slice(2)}`;
    STATE.items.set(key, { btn, badge, endAt: Date.now() + ms });
    ensureTicker();
  }

  // =========================
  // ARM (pending; dedupe über Solution-Button)
  // =========================
  function tryArm(el){
    if (el.dataset.__solTimerArmed === "1") return true;

    const ms = parseTimeToMs(el.getAttribute("data-solution-timer"));
    if (ms <= 0) return false;

    const startMode = parseStartMode(el);
    const showBadge = parseBool(el.getAttribute("data-solution-timer-badge"), true);

    const solBtn = findSolutionButtonSmart(el);
    if (!solBtn) return false; // pending

    // ✅ Dedupe: pro Solution-Button nur einmal UI bauen
    if (solBtn.dataset.__solTimerBound === "1") {
      el.dataset.__solTimerArmed = "1"; // Marker "abgehakt", erzeugt nichts mehr
      return true;
    }
    solBtn.dataset.__solTimerBound = "1";

    const doc = solBtn.ownerDocument || DOC;
    const host = getControlHost(el, solBtn);

    // UI im Host bereinigen (nur unsere)
    cleanupUiInHost(host);

    // Lösung-Button verstecken
    solBtn.dataset.__solTimerPrevDisplay = solBtn.style.display || "";
    solBtn.style.display = "none";

    // Marker als armed markieren
    el.dataset.__solTimerArmed = "1";

    const makeBadge = (text) => {
      const badge = doc.createElement("span");
      badge.className = "lia-sol-timer-badge";
      badge.setAttribute("data-sol-timer-ui", "1");
      badge.textContent = text;
      return badge;
    };

    // immediate
    if (startMode === "immediate") {
      let badge = null;
      if (showBadge) {
        badge = makeBadge(`Lösung in ${formatRemaining(ms)}`);
        host.appendChild(badge);
      }
      scheduleReveal(solBtn, badge, ms);
      return true;
    }

    // oncheck
    if (startMode === "oncheck") {
      let started = false;
      let badge = null;

      if (showBadge) {
        badge = makeBadge(`Timer startet nach Prüfen`);
        host.appendChild(badge);
      }

      const startNow = () => {
        if (started) return;
        started = true;
        if (badge) badge.textContent = `Lösung in ${formatRemaining(ms)}`;
        scheduleReveal(solBtn, badge, ms);
      };

      const checks = findCheckButtonsSmart(el, solBtn);
      if (checks[0] && checks[0].dataset.__solTimerHooked !== "1") {
        checks[0].dataset.__solTimerHooked = "1";
        checks[0].addEventListener("click", startNow, { once: true, passive: true });
      } else {
        // delegated
        host.addEventListener("click", (ev) => {
          const t = ev.target;
          if (!t || !t.closest) return;
          const b = t.closest("button, input[type='button'], a");
          if (b && isCheckBtn(b)) startNow();
        }, { capture: true, passive: true });
      }
      return true;
    }

    // onclick
    if (startMode === "onclick") {
      // Prüfen verstecken (wenn vorhanden)
      hideCheckButtons(findCheckButtonsSmart(el, solBtn));

      // Startbutton
      const startBtn = doc.createElement("button");
      startBtn.type = "button";
      startBtn.textContent = el.getAttribute("data-solution-timer-start-label") || "Timer starten";
      startBtn.className = "lia-btn lia-sol-timer-startbtn";
      startBtn.setAttribute("data-sol-timer-ui", "1");

      // ganz nach vorn in die Control-Leiste
      host.insertBefore(startBtn, host.firstChild);

      let started = false;

      startBtn.addEventListener("click", () => {
        if (started) return;
        started = true;

        // ✅ FORCE-SHOW Prüfen (mehrfach nachziehen)
        const force = () => forceShowCheckButtons(findCheckButtonsSmart(el, solBtn));
        force(); setTimeout(force, 60); setTimeout(force, 250); setTimeout(force, 600);

        // Startbutton weg
        try { startBtn.remove(); } catch(e){ startBtn.disabled = true; }

        // Badge erst nach Start (optional)
        let badge = null;
        if (showBadge) {
          badge = makeBadge(`Lösung in ${formatRemaining(ms)}`);
          host.appendChild(badge);
        }

        scheduleReveal(solBtn, badge, ms);
      }, { passive: true });

      return true;
    }

    return true;
  }

  // =========================
  // Shadow roots scanning
  // =========================
  function getShadowRoots(root){
    const roots = [];
    try{
      const start = (root.nodeType === 9) ? root.documentElement : root;
      if (!start) return roots;
      const walker = DOC.createTreeWalker(start, NodeFilter.SHOW_ELEMENT, null);
      let node = walker.currentNode;
      while (node) {
        if (node.shadowRoot) roots.push(node.shadowRoot);
        node = walker.nextNode();
      }
    }catch(e){}
    return roots;
  }

  function observeRoot(root){
    if (!root || STATE.observedRoots.has(root)) return;
    STATE.observedRoots.add(root);

    injectStyleIntoRoot(root);

    try{
      const mo = new MutationObserver(() => scanAll());
      mo.observe(root, { childList: true, subtree: true });
      STATE.observers.push(mo);
    }catch(e){}
  }

  function scanAll(){
    const roots = [DOC, ...getShadowRoots(DOC)];
    for (const r of roots) {
      observeRoot(r);

      let els = [];
      try{
        els = (r.querySelectorAll ? Array.from(r.querySelectorAll("[data-solution-timer]")) : []);
      }catch(e){}

      for (const el of els){
        // pending + arm
        tryArm(el);
      }
    }
  }

  // init
  injectStyleIntoRoot(DOC);
  scanAll();
  // nachziehen (LiaScript rendert zeitversetzt)
  setTimeout(scanAll, 0);
  setTimeout(scanAll, 120);
  setTimeout(scanAll, 500);

})();






@end










































@circleQuiz: @circleQuiz_(@uid,@0,@1)

@circleQuiz_
<div id="fq-circle-wrap-@0" class="fq-widget" data-fq-kind="circle" data-fq-uid="@0">
  <div id="fq-circle-host-@0" class="fq-widget" data-fq-kind="circle" data-fq-uid="@0">
    <div id="fq-circle-mount-@0" class="fq-mount"></div>

    <div id="fq-circle-range-@0" class="fq-range" data-label="Unterteilungen">
<input type="range" min="1" max="32" value="1" output="fq-c-n-@0">
    </div>
  </div>

  [[!]]
  <script>
(() => {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  if (!API) return false;

  const passed = API.isCorrect(uid);
  const wrap = document.getElementById("fq-circle-wrap-@0");

  if (!passed && !API.isLocked(uid) && wrap) {
    const prev = parseInt(wrap.getAttribute("data-fq-failed-checks") || "0", 10);
    wrap.setAttribute("data-fq-failed-checks", String((Number.isFinite(prev) ? prev : 0) + 1));
    if (typeof wrap.__fqApplyRevealSetting === "function") wrap.__fqApplyRevealSetting();
  }

  if (passed && !API.isLocked(uid)) API.onCheck(uid, true);
  return passed;
})()
  </script>
</div>

<script modify="false">
(function () {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  const raw0 = String.raw`@1`;
  const raw1 = String.raw`@2`;
  const rawSpec = raw1 ? (raw0 + ";" + raw1) : raw0;

  if (!API) return;

  function parseQuizSpec(raw) {
    const source = String(raw == null ? "" : raw).trim();
    const semi = source.indexOf(";");
    if (semi < 0) {
      return { targetRaw: source, optionText: "" };
    }
    return {
      targetRaw: source.slice(0, semi).trim(),
      optionText: source.slice(semi + 1).trim()
    };
  }

  function parseRevealSetting(optionText) {
    const m = String(optionText || "").match(/data-solution-button\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s]+))/i);
    if (!m) return "";
    return String(m[1] != null ? m[1] : (m[2] != null ? m[2] : (m[3] != null ? m[3] : ""))).trim().toLowerCase();
  }

  function applyOptionDataAttributes(optionText, el, quizRootEl) {
    if (!el) return;
    const src = String(optionText || "");
    const re = /(data-[\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>/]+))/gi;
    const timerAttrs = [];
    let m;

    while ((m = re.exec(src)) !== null) {
      const name = String(m[1] || "").toLowerCase();
      if (!name || /^data-fq-/.test(name)) continue;
      const val = m[2] != null ? m[2] : (m[3] != null ? m[3] : (m[4] != null ? m[4] : ""));

      if (/^data-solution-timer(?:-|$)/.test(name)) {
        timerAttrs.push({ name: name, value: String(val) });
        try { el.removeAttribute(name); } catch (e) {}
      } else {
        try { el.setAttribute(name, String(val)); } catch (e) {}
      }
    }

    const applyTimerAttrs = (retries) => {
      if (!quizRootEl || !timerAttrs.length) return;
      let targets = [];
      try {
        targets = Array.from(quizRootEl.querySelectorAll("lia-quiz, .lia-quiz"));
      } catch (e) {}

      if (!targets.length) {
        if (retries < 240) requestAnimationFrame(() => applyTimerAttrs(retries + 1));
        return;
      }

      for (let i = 0; i < targets.length; i++) {
        for (let j = 0; j < timerAttrs.length; j++) {
          try { targets[i].setAttribute(timerAttrs[j].name, timerAttrs[j].value); } catch (e) {}
        }
      }
    };

    applyTimerAttrs(0);
  }

  const spec = parseQuizSpec(rawSpec);
  const targetRaw = spec.targetRaw;
  const optionText = spec.optionText;
  const revealSetting = parseRevealSetting(optionText);

  function waitForCircleDom(cb) {
    let tries = 0;

    function tick() {
      const wrap = document.getElementById("fq-circle-wrap-@0");
      const host = document.getElementById("fq-circle-host-@0");
      const mount = document.getElementById("fq-circle-mount-@0");
      const rangeWrap = document.getElementById("fq-circle-range-@0");
      const input = rangeWrap ? rangeWrap.querySelector('input[type="range"]') : null;

      if (wrap && host && mount && rangeWrap && input) {
        cb({ wrap, host, mount, input });
        return;
      }

      tries++;
      if (tries < 240) requestAnimationFrame(tick);
    }

    tick();
  }

  waitForCircleDom(({ wrap, host, mount, input }) => {
    wrap.setAttribute("data-fq-failed-checks", wrap.getAttribute("data-fq-failed-checks") || "0");

    API.attachCircle(uid, {
      wrap: wrap,
      host: host,
      mount: mount,
      circleInput: input,
      target: targetRaw,
      initialParts: input.value || 1
    });

    API.ensureQuizBridge(uid, wrap);
  applyOptionDataAttributes(optionText, wrap, wrap);

    if (revealSetting) {
      const applyRevealSetting = () => {
        const nodes = wrap.querySelectorAll("button, input[type='button'], input[type='submit']");
        const buttons = [];

        for (let i = 0; i < nodes.length; i++) {
          const label = ((nodes[i].textContent || "") + " " + (nodes[i].getAttribute("aria-label") || "") + " " + (nodes[i].getAttribute("value") || ""))
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase();
          if (/(aufl|aufl[oö]sen|l[oö]sung|show solution|solution|resolve)/i.test(label)) buttons.push(nodes[i]);
        }

        if (!buttons.length) return;

        let show = true;
        if (/^(off|false|disable|disabled|none)$/.test(revealSetting)) {
          show = false;
        } else if (/^(on|true|enable|enabled)$/.test(revealSetting)) {
          show = true;
        } else if (/^\d+$/.test(revealSetting)) {
          const threshold = parseInt(revealSetting, 10);
          const attempts = parseInt(wrap.getAttribute("data-fq-failed-checks") || "0", 10);
          show = (Number.isFinite(attempts) ? attempts : 0) >= threshold;
        }

        for (let i = 0; i < buttons.length; i++) {
          const btn = buttons[i];
          const display = show ? "" : "none";
          if (btn.style.display !== display) btn.style.display = display;
        }
      };

      wrap.__fqApplyRevealSetting = applyRevealSetting;
      applyRevealSetting();
    }
  });
})();
</script>
@end























@rectQuiz: @rectQuiz_(@uid,@0,@1)

@rectQuiz_
<div id="fq-rect-wrap-@0" class="fq-widget" data-fq-kind="rect" data-fq-uid="@0">
  <div id="fq-rect-host-@0" class="fq-widget" data-fq-kind="rect" data-fq-uid="@0">
    <div id="fq-rect-mount-@0" class="fq-mount"></div>

    <div id="fq-rect-rows-wrap-@0" class="fq-range" data-label="vertikal">
<input type="range" min="1" max="20" value="1" output="fq-r-rows-@0">
    </div>

    <div id="fq-rect-cols-wrap-@0" class="fq-range" data-label="horizontal">
<input type="range" min="1" max="20" value="1" output="fq-r-cols-@0">
    </div>
  </div>

  [[!]]
  <script>
(() => {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  if (!API) return false;

  const passed = API.isCorrect(uid);
  const wrap = document.getElementById("fq-rect-wrap-@0");

  if (!passed && !API.isLocked(uid) && wrap) {
    const prev = parseInt(wrap.getAttribute("data-fq-failed-checks") || "0", 10);
    wrap.setAttribute("data-fq-failed-checks", String((Number.isFinite(prev) ? prev : 0) + 1));
    if (typeof wrap.__fqApplyRevealSetting === "function") wrap.__fqApplyRevealSetting();
  }

  if (passed && !API.isLocked(uid)) API.onCheck(uid, true);
  return passed;
})()
  </script>
</div>

<script modify="false">
(function () {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  const raw0 = String.raw`@1`;
  const raw1 = String.raw`@2`;
  const rawSpec = raw1 ? (raw0 + ";" + raw1) : raw0;

  if (!API) return;

  function parseQuizSpec(raw) {
    const source = String(raw == null ? "" : raw).trim();
    const semi = source.indexOf(";");
    if (semi < 0) {
      return { targetRaw: source, optionText: "" };
    }
    return {
      targetRaw: source.slice(0, semi).trim(),
      optionText: source.slice(semi + 1).trim()
    };
  }

  function parseRevealSetting(optionText) {
    const m = String(optionText || "").match(/data-solution-button\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s]+))/i);
    if (!m) return "";
    return String(m[1] != null ? m[1] : (m[2] != null ? m[2] : (m[3] != null ? m[3] : ""))).trim().toLowerCase();
  }

  function applyOptionDataAttributes(optionText, el, quizRootEl) {
    if (!el) return;
    const src = String(optionText || "");
    const re = /(data-[\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>/]+))/gi;
    const timerAttrs = [];
    let m;

    while ((m = re.exec(src)) !== null) {
      const name = String(m[1] || "").toLowerCase();
      if (!name || /^data-fq-/.test(name)) continue;
      const val = m[2] != null ? m[2] : (m[3] != null ? m[3] : (m[4] != null ? m[4] : ""));

      if (/^data-solution-timer(?:-|$)/.test(name)) {
        timerAttrs.push({ name: name, value: String(val) });
        try { el.removeAttribute(name); } catch (e) {}
      } else {
        try { el.setAttribute(name, String(val)); } catch (e) {}
      }
    }

    const applyTimerAttrs = (retries) => {
      if (!quizRootEl || !timerAttrs.length) return;
      let targets = [];
      try {
        targets = Array.from(quizRootEl.querySelectorAll("lia-quiz, .lia-quiz"));
      } catch (e) {}

      if (!targets.length) {
        if (retries < 240) requestAnimationFrame(() => applyTimerAttrs(retries + 1));
        return;
      }

      for (let i = 0; i < targets.length; i++) {
        for (let j = 0; j < timerAttrs.length; j++) {
          try { targets[i].setAttribute(timerAttrs[j].name, timerAttrs[j].value); } catch (e) {}
        }
      }
    };

    applyTimerAttrs(0);
  }

  const spec = parseQuizSpec(rawSpec);
  const targetRaw = spec.targetRaw;
  const optionText = spec.optionText;
  const revealSetting = parseRevealSetting(optionText);

  function waitForRectDom(cb) {
    let tries = 0;

    function tick() {
      const wrap = document.getElementById("fq-rect-wrap-@0");
      const host = document.getElementById("fq-rect-host-@0");
      const mount = document.getElementById("fq-rect-mount-@0");
      const rowsWrap = document.getElementById("fq-rect-rows-wrap-@0");
      const colsWrap = document.getElementById("fq-rect-cols-wrap-@0");
      const rowsInput = rowsWrap ? rowsWrap.querySelector('input[type="range"]') : null;
      const colsInput = colsWrap ? colsWrap.querySelector('input[type="range"]') : null;

      if (wrap && host && mount && rowsWrap && colsWrap && rowsInput && colsInput) {
        cb({ wrap, host, mount, rowsInput, colsInput });
        return;
      }

      tries++;
      if (tries < 240) requestAnimationFrame(tick);
    }

    tick();
  }

  waitForRectDom(({ wrap, host, mount, rowsInput, colsInput }) => {
    wrap.setAttribute("data-fq-failed-checks", wrap.getAttribute("data-fq-failed-checks") || "0");

    API.attachRect(uid, {
      wrap: wrap,
      host: host,
      mount: mount,
      rowsInput: rowsInput,
      colsInput: colsInput,
      target: targetRaw,
      initialRows: rowsInput.value || 1,
      initialCols: colsInput.value || 1
    });

    API.ensureQuizBridge(uid, wrap);
  applyOptionDataAttributes(optionText, wrap, wrap);

    if (revealSetting) {
      const applyRevealSetting = () => {
        const nodes = wrap.querySelectorAll("button, input[type='button'], input[type='submit']");
        const buttons = [];

        for (let i = 0; i < nodes.length; i++) {
          const label = ((nodes[i].textContent || "") + " " + (nodes[i].getAttribute("aria-label") || "") + " " + (nodes[i].getAttribute("value") || ""))
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase();
          if (/(aufl|aufl[oö]sen|l[oö]sung|show solution|solution|resolve)/i.test(label)) buttons.push(nodes[i]);
        }

        if (!buttons.length) return;

        let show = true;
        if (/^(off|false|disable|disabled|none)$/.test(revealSetting)) {
          show = false;
        } else if (/^(on|true|enable|enabled)$/.test(revealSetting)) {
          show = true;
        } else if (/^\d+$/.test(revealSetting)) {
          const threshold = parseInt(revealSetting, 10);
          const attempts = parseInt(wrap.getAttribute("data-fq-failed-checks") || "0", 10);
          show = (Number.isFinite(attempts) ? attempts : 0) >= threshold;
        }

        for (let i = 0; i < buttons.length; i++) {
          const btn = buttons[i];
          const display = show ? "" : "none";
          if (btn.style.display !== display) btn.style.display = display;
        }
      };

      wrap.__fqApplyRevealSetting = applyRevealSetting;
      applyRevealSetting();
    }
  });
})();
</script>
@end























@canvas: @canvas_(@uid)

@canvas_
<span class="lia-canvas-pair">
  <span class="lia-canvas-anchor" data-seed="@0">
    <button class="lia-canvas-launch" type="button" aria-label="Zeichenfläche öffnen/schließen">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path class="launch-stroke" d="M3 21l3.2-0.6L19 7.6a2.2 2.2 0 0 0 0-3.1l-0.5-0.5a2.2 2.2 0 0 0-3.1 0L2.6 16.8 3 21z"/>
        <path class="launch-stroke" d="M14.2 5.2l4.6 4.6"/>
      </svg>
    </button>
  </span>
  <span class="lia-canvas-mount" data-open="0" data-uid="@0"></span>
</span>
@end






















@orthography: @orthography_(@uid,`@0`,`@1`,`@2`)

@orthography_
<div id="orthography-ui-@0" class="orthography-ui" data-ortho-uid="@0">
  <div id="orthography-task-@0" class="orthography-task">
    <div class="orthography-wrap" id="orthography-wrap-@0" data-ortho-uid="@0">
      <span id="orthography-start-@0" style="display:none">@2</span>
      <span id="orthography-solution-@0" style="display:none">@3</span>

      <input
        id="orthography-input-@0"
        data-ortho-uid="@0"
        data-id="lia-quiz-@0"
        class="lia-input lia-quiz__input"
        style="margin-bottom:.5rem"
        value="@2"
      >

      <button
        type="button"
        class="lia-btn lia-btn--outline ortho-reset-inline"
        id="orthography-reset-@0"
        data-ortho-uid="@0"
      >Reset</button>
    </div>
  </div>

  <div id="orthography-check-@0" class="orthography-check" data-ortho-uid="@0">
    @1
    [[!]]
    <script modify="false">
      (() => {
        function getRootWindow(){
          let w = window;
          try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
          return w;
        }

        const ROOT = getRootWindow();
        const MOD  = ROOT["__ORTHOGRAPHY_EXPORT_V14__"];
        if (!MOD || !MOD.getCurrentValue || !MOD.getSolution || !MOD.norm) return false;

        return MOD.norm(MOD.getCurrentValue("@0")) === MOD.norm(MOD.getSolution("@0"));
      })()
    </script>
  </div>
</div>

<script type="text/plain" id="orthography-comment-@0">@1</script>

<script modify="false">
(function(){
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const MOD  = ROOT["__ORTHOGRAPHY_EXPORT_V14__"];
  if (!MOD || !MOD.register) return;

  MOD.register({
    uid: "@0",
    startText: String.raw`@2`,
    solutionText: String.raw`@3`,
    idUi: "orthography-ui-@0",
    idTask: "orthography-task-@0",
    idCheck: "orthography-check-@0",
    idWrap: "orthography-wrap-@0",
    idInput: "orthography-input-@0",
    idReset: "orthography-reset-@0",
    idComment: "orthography-comment-@0",
    idStart: "orthography-start-@0",
    idSolution: "orthography-solution-@0"
  });
})();
</script>
@end








@diktat: @diktat_(@uid,@0)

@diktat_
<span class="lia-diktat" id="lia-diktat-@0">{|>}{<span class="lia-diktat-measure" style="position:absolute;left:-10000px;top:auto;width:auto;height:auto;overflow:hidden;white-space:pre;">@1</span>}[[ @1 ]]</span>
@end











TextmarkerQuiz: <span class="hlq-proxy"><span class="hlq-msg"></span><button class="hlq-btn" type="button" data-hlq-act="check">Prüfen</button><button class="hlq-btn" type="button" data-hlq-act="solve">Auflösen</button><span class="hlq-lia">[[ 1 ]]</span></span>







markred:    <span class="lia-hl-target" data-hl-expected="red"    data-hl-quiz="default">@0</span>
markblue:   <span class="lia-hl-target" data-hl-expected="blue"   data-hl-quiz="default">@0</span>
markgreen:  <span class="lia-hl-target" data-hl-expected="green"  data-hl-quiz="default">@0</span>
markyellow: <span class="lia-hl-target" data-hl-expected="yellow" data-hl-quiz="default">@0</span>
markpink:   <span class="lia-hl-target" data-hl-expected="pink"   data-hl-quiz="default">@0</span>
markorange: <span class="lia-hl-target" data-hl-expected="orange" data-hl-quiz="default">@0</span>

mark: <span class="lia-hl-target" data-hl-expected="any" data-hl-quiz="default">@0</span>



markedred:    <span class="lia-hl-prefill" data-hl-prefill="red">@0</span>
markedblue:   <span class="lia-hl-prefill" data-hl-prefill="blue">@0</span>
markedgreen:  <span class="lia-hl-prefill" data-hl-prefill="green">@0</span>
markedyellow: <span class="lia-hl-prefill" data-hl-prefill="yellow">@0</span>
markedpink:   <span class="lia-hl-prefill" data-hl-prefill="pink">@0</span>
markedorange: <span class="lia-hl-prefill" data-hl-prefill="orange">@0</span>


-->

























































# SchulLia-Tests


Auf den folgenden Seiten werden die Features von SchulLia vorgestellt.


> Import

`import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/README.md`



## Tafelmodus

Klicke auf das A im Header und ändere im Präsentationsmodus die Schriftgröße mit dem Slider. Empfehlung: Nightly

`https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/README.md`


Falls du den Kurs nicht auf Nightly geöffnet hast, ist oben ein Button zur direkten Weiterleitung des Kurses. Link zum normalen Kurs:

[https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/README.md](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/README.md)




---

---




Im Präsentations- oder Folienmodus wird nun die maximale Breite des Bildschirms ausgenutzt, was man an der Länge dieser doch sehr langen Textzeile erkennen kann, wenn man die Schrift nicht allzu klein einstellt. Auch die Schriftgröße kann nun dynamisch angepasst werden. 




Mittels div-Bereichen kann man Bereiche nur für einen Modus sichtbar machen: 

```
<div data-lia-only="slides"> 
Das sehe ich nur bei Folien 
</div>
```

---

```
<div data-lia-only="presentation"> 
Das sehe ich nur bei Präsentation 
</div>
```

---

```
<div data-lia-only="textbook"> 
Das sehe ich nur bei Lehrbuch 
</div>
```

---

---

<h2>Beispiel im Text</h2>



Das hier ist ein Beispiel bei dem man bei den verschiedenen Modi unterschiedliche Inhalte angezeigt bekommt. Hier muss dann eine Leerzeile sein.


<div data-lia-only="textbook">

<!-- data-solution-button="5"-->
> $4+5=$ [[ 9 ]] Diese Aufgabe ist nur im **Textbookmodus** zu sehen.

</div>
<div data-lia-only="presentation">  

<!-- style="width:400px" -->
> ![Presentationmode](https://liascript.github.io/nightly/icon.ico)  Dieses Bild ist nur im **Presentationmodus** zu sehen.


</div>
<div data-lia-only="slides">

> - Das ist eine Liste,
> - die man nur im **Folienmodus**
> - sehen kann.

</div>

 Hier muss dann auch eine Leerzeile sein, aber dann geht eigentlich alles.





---

---


> Einzeltemplate - Nightlychecker: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md`

> Einzeltemplate - Tafelmodus: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/TafelREADME.md`








## Besser Navigation

Öffne die Navigation und beachte die (▶/▼)-Symbole. Klicke darauf, um die weiteren Überschriften auf- oder einzuklappen



<center>

<!-- style="width:300px" -->
![Navigation](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/Readme/navigation.png)

</center>


> Einzeltemplate - einklappbare Navigation: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/NavigationREADME.md`


### Canvas



<center>

<!-- style="width:200px" -->
![Canvas](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/Readme/canvas.png)

</center>

1. Öffnet oder schließt die Schreibfläche.

2. Macht die letzte Änderung auf der Schreibfläche rückgängig.

3. Stellt das letzte "Rückgängig machen" wieder her.

4. Radierer mit Submenü für Radierergröße oder komplettes löschen.

5. Stift mit Submenü für Farbauswahl, Stiftdicke und Transparenz.

6. Legt ein Grid oder Linien in den Hintergrund.

7. Lässt ein Feld ziehen, welches mittels Schrifterkennung an das Eingabefeld als Lösung übergibt.

Die Schreibfläche kann unten links oder rechts an den Ecke in der Größe beliebig verändert werden.


> **Steuerung mit Maus**

- Linke Maustaste: Zeichnen, Radieren, Ziehen

- Rechte Maustaste: Schreibfläche hin- und herziehen

- Mausrad: Zoom


> **Steuerung mit Touchscreen**

- Ein Finger:  Zeichnen, Radieren, Ziehen

- Zwei Finger (Abstand zwischen den Fingern gleichbleibend): Schreibfläche hin- und herziehen

- Zwei Finger (Abstand zwischen den Fingern verändern): Zoom



`Codebefehl: @canvas`


Testzwecke (1479 ist Lösung):

<!--   data-solution-button="2" -->
[[ 1479 ]] 
@canvas


> Einzeltemplate - Canvas: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/CanvasREADME.md`

> Einzeltemplate - Canvas (mit Schrifterkennung): `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/OCRREADME.md`








### Textmarker

Klicke auf den Stift im Header und markiere im Text wie es dir beliebt. Wechsel Lehrbuch ↔ Präsentation ↔ Slides und ändere die Schriftgröße.



> Einzeltemplate - Textmarker: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/MarkerREADME.md`

---

---


> Textmarkerquiz

**Markiere** mit der Textmarkerfunktion die Nomen in Rot und die Verben in blau.

<div class="markerquiz">
@markred(Haus) und @markblue(rennen laufen gehen)
@TextmarkerQuiz
</div>

---

---


```
<div class="markerquiz">
@markred(Haus) und @markblue(rennen laufen gehen)
@TextmarkerQuiz
</div>
```

Weitere Beispiele:

- `@markblue(words)`

- `@markred(words)`

- `@markgreen(words)`

- `@markyellow(words)`

- `@markpink(words)`

- `@markorange(words)`

Bei `@mark(Test zum Markieren)` ist die gewählte Farbe egal.

<div class="markerquiz">
@mark(Test zum Markieren)
@TextmarkerQuiz
</div>

---

---

> Schon markierte Bereiche




- `@markedred(red)`  @markedred(red)

- `@markedblue(blue)`  @markedblue(blue)

- `@markedyellow(yellow)`  @markedyellow(yellow)

- `@markedpink(pink)`  @markedpink(pink)

- `@markedgreen(green)`  @markedgreen(green)

- `@markedorange(orange)`  @markedorange(orange)






### Dynamsische Flex-Childs

Geh an den rechten vertikalen Trennstrich zwischen den Blöcken und schiebe diesen nach belieben hin und her. Funktioniert auch mit Textmarkern.

<section class="dynFlex">


<div class="flex-child">

<!--   data-solution-button="2" -->
__$f)\;\;$__ Lösung ist 3: [[ 3 ]]

__$g)\;\;$__ Lösung ist 4: [[ 4 ]]

__$h)\;\;$__ Lösung ist 5: [[ 5 ]]

__$i)\;\;$__ Lösung ist 6: [[ 6 ]]

</div>

  <div class="flex-child">
    __$a)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
  </div>

  <div class="flex-child">
    __$b)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
  </div>

  <div class="flex-child">
    __$c)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
  </div>

  <div class="flex-child">
    __$d)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
  </div>

  <div class="flex-child">
    __$e)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor. 
  </div>

</section>

---

---


```
<section class="dynFlex">
<div class="flex-child">

__$i)\;\;$__ Lösung ist 6: [[ 6 ]]

</div>
</section>
```


mit `<section class="dynFlex" data-start="30">` wird die Startbreite auf 30% gesetzt.



> Einzeltemplate - Dynamsische Flex-Childs: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FlexChildREADME.md`



### Deutschaufgabenmakros




<section class="dynFlex">

<div class="flex-child">

__Aufgabe 1:__ Hör dir den Satz an und schreib ihn korrekt in das Eingabefeld. \

@diktat(Anna sitzt auf einem fliegenden Teppich.)

`@diktat(Anna sitzt auf einem fliegenden Teppich.)`

</div>

<div class="flex-child">

__Aufgabe 2:__ Lass dir die Wörter vorlesen, die in die Lücken kommen und schreibe diese in die Lücken. \

Anna ging in einen @diktat(Zoo). Dort konnte sie auf einem @diktat(Lama) reiten.

`@diktat(Zoo)`

</div>

<div class="flex-child">

__Aufgabe 3:__ Setze das Komma an die richtige Stelle. (Auflösung ist blockiert.) \


@orthography(`<!--  data-solution-button="false"  -->`,`Das ist der Tag an dem ich geblitzt wurde.`,`Das ist der Tag, an dem ich geblitzt wurde.`)




__Aufgabe 4:__ Setze die Satzzeichen so, dass der Satz eine korrekte wörtliche Rede darstellt. (Auflösung bei erst nach 2 Versuchen) \

@orthography(`<!--  data-solution-button="2"  -->`,`Der Bruder den ich mag.`,`Der Bruder, den ich mag.`)



__Aufgabe 5:__ Korrigiere die Rechtschreibfehler im gezeigten Satz. (Auflösung bei erst nach 0 Versuchen) \

@orthography(`<!--  data-solution-button="0"  -->`,`Es ist jetze um sechse.`,`Es ist jetzt um sechs.`)


`Beispiele sind leider nicht als Code darstellbar.`

</div>

</section>


> Einzeltemplate - Deutschmakros: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/DeutschREADME.md`



### Mathematikaufgabenmakros



<section class="dynFlex">



<div class="flex-child">

**Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.

__$b)\;\;$__ $\dfrac{7}{10}$

@circleQuiz(7/10)

`@circleQuiz(7/10)`

</div>

<div class="flex-child">

**Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.


__$a)\;\;$__ $\dfrac{7}{10}$

@rectQuiz(7/10)

`@rectQuiz(7/10)`

</div>


</section>



> Einzeltemplate - Mathematikmakros: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/MatheREADME.md`



### Timer bis Lösungzeigen

> Beispiele:
> - Sofortiger Start: `data-solution-timer="10s"`
> - Start erst nach erstem Prüfen: `data-solution-timer="2min" data-solution-timer-start="oncheck"`
> - ohne Badge: zusätzlich `data-solution-timer-badge="off"`
> - Manueller Start: `data-solution-timer-start="onclick"`

<!-- data-solution-timer="10s" -->
2+3 = [[ 5 ]]


Manueller Start nach erstem Prüfen

<!-- data-solution-timer="15s" data-solution-timer-start="oncheck" -->
7+8 = [[ 15 ]]


Manueller Start nach erstem Prüfen (Timer nicht sichtbar)

<!-- data-solution-timer="10s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" -->
9+6 = [[ 15 ]]


Manueller Startbutton (Prüfen erscheint erst nach Klick)

<!-- data-solution-timer="10s" data-solution-timer-start="onclick" -->
9+6 = [[ 15 ]]

Manueller Startbutton ohne Badge

<!-- data-solution-timer="10s" data-solution-timer-start="onclick" data-solution-timer-badge="off" -->
5+5 = [[ 10 ]]




> Einzeltemplate - Aufgabentimer: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/TimerREADME.md`










