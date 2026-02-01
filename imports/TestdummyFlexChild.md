<!--
version:  0.0.1
language: de
author: Martin Lommatzsch

@style
main > *:not(:last-child) { margin-bottom: 3rem; }
input { text-align: center; }

/* =========================================================
   DynFlex V5.1: Minipages + Resizer pro Block (WRAP) + END-Resizer
   - Jeder .flex-child hat rechts einen vertikalen Drag-Resizer (JETZT AUCH der letzte).
   - Drag ändert NUR die Breite dieses Blocks in %.
   - Wenn ein früher Block breiter wird, werden die folgenden automatisch umbrochen (flex-wrap).
   - Themefarbe der Trenner aktualisiert sich bei Themewechsel.
   ========================================================= */

section.dynFlex{
  --dyn-gap:  20px;
  --dyn-accent: var(--dynflex-accent, #0b5fff);
  --dyn-basis: 25%;                  /* Defaultbreite pro Box (in %) */

  display: flex;
  flex-wrap: wrap;                   /* <-- Umbruch */
  align-items: flex-start;
  gap: var(--dyn-gap);
}

/* Minipage-Boxen */
section.dynFlex > .flex-child{
  position: relative;                /* Resizer sitzt absolut in der Box */
  box-sizing: border-box;
  min-width: 0;

  /* "Minipage": feste Breite in % */
  flex: 0 0 var(--w, var(--dyn-basis));
  max-width: var(--w, var(--dyn-basis));

  padding: 0.65rem 1.25rem 0.65rem 0.85rem;  /* rechts Luft wegen Resizer */
  border-left: 1px solid var(--dyn-accent);
  border-radius: 10px;
  background: rgba(127,127,127,0.08);
}

/* Beim Draggen keine Textmarkierung */
section.dynFlex.dynFlexDragging,
section.dynFlex.dynFlexDragging *{
  user-select: none !important;
}

/* Resizer (wird per JS in jede Box injiziert) */
section.dynFlex .dynFlexResizer{
  position: absolute;
  top: 0;
  bottom: 0;

  /* Standard: Resizer optisch im GAP zwischen dieser und der nächsten Box */
  left: 100%;
  width: 22px; /* Hitbox */
  margin-left: calc(var(--dyn-gap) / 2 - 11px);

  cursor: ew-resize;
  touch-action: none;
  background: transparent;
  z-index: 5;
}

/* END-Resizer: sitzt hinter dem letzten Block (außerhalb) */
section.dynFlex .dynFlexResizer.dynFlexResizerEnd{
  left: auto;
  /* halb in den "virtuellen" Abstand rechts vom letzten Block schieben */
  right: calc(-1 * (var(--dyn-gap) / 2) - 11px);
  margin-left: 0;
}

/* Sichtbare vertikale Linie */
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

/* Hover kräftiger */
section.dynFlex .dynFlexResizer:hover::before{
  width: 3px;
}

/* Mobile fallback */
@media (max-width: 420px){
  section.dynFlex{ --dyn-basis: 100%; }
}
@end

@onload
(function(){

  // ---------------------------------------------------------
  // Import-sicher: pro Dokument nur einmal initialisieren
  // ---------------------------------------------------------
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }
  const ROOT = getRootWindow();
  const DOC_ID = (document.baseURI || ("doc@" + Math.random().toString(36).slice(2)));
  const REGKEY = "__LIA_DYNFLEX_V5_1__";
  ROOT[REGKEY] = ROOT[REGKEY] || { docs: {} };
  if (ROOT[REGKEY].docs[DOC_ID]) return;
  ROOT[REGKEY].docs[DOC_ID] = true;

  // ---------------------------------------------------------
  // Theme-Akzentfarbe dynamisch aktualisieren
  // ---------------------------------------------------------
  function pickAccent(){
    const cs = getComputedStyle(document.documentElement);
    const vars = [
      "--lia-accent",
      "--lia-primary",
      "--lia-color-primary",
      "--primary",
      "--color-primary",
      "--accent-color"
    ];
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

  let __lastAccent = null;
  function updateAccent(force=false){
    const acc = pickAccent();
    if (force || acc !== __lastAccent){
      __lastAccent = acc;
      document.documentElement.style.setProperty("--dynflex-accent", acc);
    }
  }

  updateAccent(true);

  // OS/Browser Dark/Light Umschaltung
  try{
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    if (mql && mql.addEventListener) mql.addEventListener("change", () => updateAccent(true));
    else if (mql && mql.addListener) mql.addListener(() => updateAccent(true));
  } catch(e){}

  // DOM-Attribute (Theme-Toggles)
  const themeMO = new MutationObserver(() => updateAccent(false));
  try{
    themeMO.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class","style","data-theme","data-mode","data-color-scheme"]
    });
  } catch(e){}
  try{
    if (document.body){
      themeMO.observe(document.body, {
        attributes: true,
        attributeFilter: ["class","style","data-theme","data-mode","data-color-scheme"]
      });
    }
  } catch(e){}

  // Fallback Polling
  const poll = setInterval(() => updateAccent(false), 900);
  window.addEventListener("pagehide", () => { try { clearInterval(poll); } catch(e){} }, { passive: true });

  // ---------------------------------------------------------
  // Resizer-Logik (Wrap)
  // ---------------------------------------------------------
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

  function injectResizers(sec){
    const items = Array.from(sec.querySelectorAll(":scope > .flex-child"));
    if (items.length < 1) return;

    const basis = parsePct(
      sec.getAttribute("data-basis"),
      parsePct(getComputedStyle(sec).getPropertyValue("--dyn-basis"), 25)
    );
    sec.style.setProperty("--dyn-basis", basis + "%");

    const minPct = parsePct(sec.getAttribute("data-min"), 10);
    const maxPct = parsePct(sec.getAttribute("data-max"), 100);

    restore(sec);

    // Resizer JETZT für jedes Item (inkl. letztes)
    for (let i = 0; i < items.length; i++){
      const box = items[i];
      if (box.querySelector(":scope > .dynFlexResizer")) continue;

      const rz = document.createElement("div");
      rz.className = "dynFlexResizer";
      rz.setAttribute("aria-hidden", "true");

      // letzter Block bekommt End-Resizer-Position
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

        // flex-wrap sorgt dafür, dass andere ggf. in nächste Zeile gehen
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

  function initAll(){
    document.querySelectorAll("section.dynFlex").forEach(sec => {
      if (sec.dataset.dynflexInit === "1") return;
      sec.dataset.dynflexInit = "1";
      injectResizers(sec);
    });
  }

  initAll();
  setTimeout(initAll, 50);
  setTimeout(initAll, 250);

  const mo = new MutationObserver(() => initAll());
  mo.observe(document.body, { childList: true, subtree: true });

})();
@end
-->

# DynFlex

<section class="dynFlex"
         data-basis="25"
         data-min="10"
         data-max="100"
         data-store="aufgabe-flex-1">

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

</section>
