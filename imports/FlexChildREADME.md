<!--
version: 0.0.8
language: de
author: Martin Lommatzsch
comment: DynFlex Import V6.8 (Leerzeilen -> echte Blocks in flex-child => mehrere Prüfen-Buttons; section/div authoring, wrapper-robust for [[...]], css-injection, theme-update, end-resizer, % widths)

@onload
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
@end
-->




























# DynFlex



<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ 1? [[ 1 ]]


__$b)\;\;$__ 4? [[ 4 ]]



__$c)\;\;$__ 5? [[ 5 ]]

</div>


  <div class="flex-child">
    __$d)\;\;$__ 2? [[ 2 ]]
  </div>


  <div class="flex-child">
    __$e)\;\;$__ 3? [[ 3 ]]

    
  </div>

</section>



---

---

<section class="dynFlex">

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

  <div class="flex-child">
    __$f)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
  </div>

</section>
