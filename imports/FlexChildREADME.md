<!--
version: 0.0.3
language: de
author: Martin Lommatzsch
comment: DynFlex Import V6.3 (no-macros, all-in-comment, ensure/scan, theme-update, end-resizer)

@onload
(function () {

  // =========================================================
  // Root/Content (iframe-safe) + per-Doc Run-Once (import-safe)
  // =========================================================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }
  const ROOT = getRootWindow();

  const REGKEY = "__LIA_DYNFLEX_V6_3__";
  ROOT[REGKEY] = ROOT[REGKEY] || { docs: {} };

  // stabiler Doc-Key im *aktuellen* Content-Dokument
  const DOC_KEY_ATTR = "data-dynflex-doc";
  let docKey = document.documentElement.getAttribute(DOC_KEY_ATTR);
  if (!docKey){
    docKey = (document.baseURI || location.href || "dynflex") + "::" + Math.random().toString(36).slice(2);
    document.documentElement.setAttribute(DOC_KEY_ATTR, docKey);
  }
  if (ROOT[REGKEY].docs[docKey]) return;
  ROOT[REGKEY].docs[docKey] = true;

  // =========================================================
  // CSS Injection (weil @style in Import-Konstellationen zickt)
  // =========================================================
  const STYLE_ID = "lia-dynflex-style-v6-3";
  const CSS = `
section.dynFlex{
  --dyn-gap: 20px;
  --dyn-hit: 22px;
  --dyn-accent: var(--dynflex-accent, #0b5fff);
  --dyn-basis: 25%;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--dyn-gap);
  overflow: visible;
}

section.dynFlex > .flex-child{
  position: relative;
  box-sizing: border-box;
  min-width: 0;

  flex: 0 0 var(--w, var(--dyn-basis));
  max-width: var(--w, var(--dyn-basis));

  padding: 0.65rem 1.25rem 0.65rem 0.85rem;
  border-left: 1px solid var(--dyn-accent);
  border-radius: 10px;
  background: rgba(127,127,127,0.08);
}

section.dynFlex.dynFlexDragging,
section.dynFlex.dynFlexDragging *{
  user-select: none !important;
}

section.dynFlex .dynFlexResizer{
  position: absolute;
  top: 0;
  bottom: 0;

  left: 100%;
  width: var(--dyn-hit);
  margin-left: calc(var(--dyn-gap) / 2 - (var(--dyn-hit) / 2));

  cursor: ew-resize;
  touch-action: none;
  background: transparent;
  z-index: 5;
}

section.dynFlex .dynFlexResizer.dynFlexResizerEnd{
  left: auto;
  right: calc(-1 * (var(--dyn-gap) / 2) - (var(--dyn-hit) / 2));
  margin-left: 0;
}

section.dynFlex .dynFlexResizer::before{
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  transform: translateX(-50%);
  background: var(--dyn-accent);
  border-radius: 999px;
  opacity: 0.95;
}

section.dynFlex .dynFlexResizer:hover::before{
  width: 3px;
}

@media (max-width: 420px){
  section.dynFlex{ --dyn-basis: 100%; }
}
  `.trim();

  function ensureStyle(){
    if (document.getElementById(STYLE_ID)) return;
    const st = document.createElement("style");
    st.id = STYLE_ID;
    st.textContent = CSS;
    (document.head || document.documentElement).appendChild(st);
  }

  // =========================================================
  // Theme Accent Update (matchMedia + attribute observer + light ensure)
  // =========================================================
  function pickAccent(){
    const cs = getComputedStyle(document.documentElement);
    const vars = ["--lia-accent","--lia-primary","--lia-color-primary","--primary","--color-primary","--accent-color"];
    for (const v of vars){
      const val = cs.getPropertyValue(v).trim();
      if (val) return val;
    }
    const a = document.querySelector("a");
    if (a){
      const c = getComputedStyle(a).color;
      if (c && c !== "rgba(0, 0, 0, 0)") return c;
    }
    const b = document.querySelector(".lia-btn");
    if (b){
      const bg = getComputedStyle(b).backgroundColor;
      if (bg && bg !== "rgba(0, 0, 0, 0)") return bg;
    }
    return "#0b5fff";
  }

  let lastAccent = null;
  function updateAccent(force){
    const acc = pickAccent();
    if (force || acc !== lastAccent){
      lastAccent = acc;
      document.documentElement.style.setProperty("--dynflex-accent", acc);
    }
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

  function getItemPct(sec, el){
    const w = (el.style.getPropertyValue("--w") || "").trim();
    if (w.endsWith("%")){
      const n = parseFloat(w);
      if (Number.isFinite(n)) return n;
    }
    const sw = sec.getBoundingClientRect().width || 1;
    const ew = el.getBoundingClientRect().width;
    return (ew / sw) * 100;
  }

  function setItemPct(el, pct){
    el.style.setProperty("--w", pct.toFixed(2) + "%");
  }

  function persist(sec){
    const storeKey = sec.getAttribute("data-store");
    if (!storeKey) return;
    const lsKey = "dynFlexWidths::" + storeKey;
    const items = Array.from(sec.querySelectorAll(":scope > .flex-child"));
    const arr = items.map(it => (it.style.getPropertyValue("--w") || "").trim() || "");
    try { localStorage.setItem(lsKey, JSON.stringify(arr)); } catch(e){}
  }

  function restore(sec){
    const storeKey = sec.getAttribute("data-store");
    if (!storeKey) return;
    const lsKey = "dynFlexWidths::" + storeKey;
    let arr = null;
    try { arr = JSON.parse(localStorage.getItem(lsKey) || "null"); } catch(e){ arr = null; }
    if (!Array.isArray(arr)) return;

    const items = Array.from(sec.querySelectorAll(":scope > .flex-child"));
    if (arr.length !== items.length) return;

    items.forEach((it, i) => {
      const v = String(arr[i] || "").trim();
      if (v.endsWith("%")) it.style.setProperty("--w", v);
    });
  }

  function initSection(sec){
    // WICHTIG: nicht "init" markieren, solange Children noch nicht da sind
    const items = Array.from(sec.querySelectorAll(":scope > .flex-child"));
    if (items.length === 0) return;

    if (sec.dataset.dynflexInit === "1") return;
    sec.dataset.dynflexInit = "1";

    // optional konfigurierbar pro Section
    const gap  = sec.getAttribute("data-gap");
    const hit  = sec.getAttribute("data-hit");
    const basis = parsePct(sec.getAttribute("data-basis"), 25);

    if (gap) sec.style.setProperty("--dyn-gap", gap.trim().endsWith("px") ? gap.trim() : (gap.trim() + "px"));
    if (hit) sec.style.setProperty("--dyn-hit", hit.trim().endsWith("px") ? hit.trim() : (hit.trim() + "px"));
    sec.style.setProperty("--dyn-basis", basis + "%");

    const minPct = parsePct(sec.getAttribute("data-min"), 10);
    const maxPct = parsePct(sec.getAttribute("data-max"), 100);

    restore(sec);

    // Resizer hinter JEDEM Block (inkl. letztes)
    for (let i = 0; i < items.length; i++){
      const box = items[i];
      if (box.querySelector(":scope > .dynFlexResizer")) continue;

      const rz = document.createElement("div");
      rz.className = "dynFlexResizer";
      rz.setAttribute("aria-hidden", "true");
      if (i === items.length - 1) rz.classList.add("dynFlexResizerEnd");
      box.appendChild(rz);

      let dragging = false;
      let startX = 0;
      let startW = 0;

      const onDown = (e) => {
        dragging = true;
        sec.classList.add("dynFlexDragging");
        startX = e.clientX;
        startW = getItemPct(sec, box);
        rz.setPointerCapture?.(e.pointerId);
        e.preventDefault();
      };

      const onMove = (e) => {
        if (!dragging) return;

        const secW = sec.getBoundingClientRect().width || 1;
        const dx = e.clientX - startX;
        const dPct = (dx / secW) * 100;

        const newW = clamp(startW + dPct, minPct, maxPct);
        setItemPct(box, newW);

        // wrap macht den Rest
        persist(sec);
        e.preventDefault();
      };

      const onUp = (e) => {
        dragging = false;
        sec.classList.remove("dynFlexDragging");
        try { rz.releasePointerCapture?.(e.pointerId); } catch(_){}
        e.preventDefault();
      };

      rz.addEventListener("pointerdown", onDown);
      rz.addEventListener("pointermove", onMove);
      rz.addEventListener("pointerup", onUp);
      rz.addEventListener("pointercancel", onUp);
    }
  }

  // =========================================================
  // ensure/scan (throttled) + observers (NIE body-null)
  // =========================================================
  let scanScheduled = false;

  function scan(){
    scanScheduled = false;
    ensureStyle();
    updateAccent(false);
    document.querySelectorAll("section.dynFlex").forEach(initSection);
  }

  function scheduleScan(){
    if (scanScheduled) return;
    scanScheduled = true;
    requestAnimationFrame(scan);
  }

  // Start (mehrstufig, import-/render-sicher)
  ensureStyle();
  updateAccent(true);
  scheduleScan();
  setTimeout(scheduleScan, 50);
  setTimeout(scheduleScan, 250);
  setTimeout(scheduleScan, 800);

  // Theme trigger (Attribute)
  const themeMO = new MutationObserver(() => { updateAccent(false); });
  try{
    themeMO.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class","style","data-theme","data-mode","data-color-scheme"]
    });
  }catch(e){}

  // OS scheme
  try{
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    if (mql && mql.addEventListener) mql.addEventListener("change", () => { updateAccent(true); });
    else if (mql && mql.addListener) mql.addListener(() => { updateAccent(true); });
  }catch(e){}

  // DOM observer (throttled) — auf documentElement, nicht body
  const mo = new MutationObserver((muts) => {
    for (const m of muts){
      if (m.addedNodes && m.addedNodes.length){
        scheduleScan();
        break;
      }
    }
  });
  mo.observe(document.documentElement, { childList: true, subtree: true });

})();
@end

-->
















# DynFlex


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
