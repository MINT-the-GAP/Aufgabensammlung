<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: @resetter v0.0.1 — Reset per Segment (bis nächster @resetter oder # Überschrift) — Capture-Trigger verhindert Folien-Sprung UND führt Reset aus — Quizzes: interner Reset + Baseline-Controls — [->[]]: Safe Range-Replace (nur ohne Quiz-Controls) — Overlay fixed

@style
:root{
  --lia-resetter-accent: rgb(var(--color-highlight, 11, 95, 255));
}

.lia-resetter-anchor{
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  vertical-align: baseline !important;

  visibility: hidden !important;
  pointer-events: none !important;

  font-size: 0.75em !important;
  line-height: 1 !important;
  height: 1.15em !important;
  padding: 0 0.45em !important;
  margin: 0 0 0 0.6em !important;

  border: 1px solid transparent !important;
  border-radius: 0.5em !important;
  box-sizing: border-box !important;
  white-space: nowrap !important;
}

button.lia-resetter-btn{
  color: var(--lia-resetter-accent) !important;
  border: 1px solid currentColor !important;
  background: transparent !important;

  font-size: 0.75em !important;
  line-height: 1 !important;

  height: 1.15em !important;
  padding: 0 0.45em !important;
  border-radius: 0.5em !important;
  box-sizing: border-box !important;

  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;

  cursor: pointer !important;
  user-select: none !important;
  white-space: nowrap !important;

  position: fixed !important;
  z-index: 2147483647 !important;
}
button.lia-resetter-btn:hover{ text-decoration: underline !important; }
button.lia-resetter-btn:focus{ outline: none !important; text-decoration: underline !important; }
@end


@onload
(function () {

  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT_WIN = getRootWindow();
  const ROOT_DOC = ROOT_WIN.document;

  const WIN = window;
  const DOC = document;

  const REGKEY = "__LIA_RESETTER_V001__";
  const REG = ROOT_WIN[REGKEY] || (ROOT_WIN[REGKEY] = {
    items: Object.create(null),   // id -> { anchor, btn, baselineFrag, safeReplace, controlsByKey }
    scanT: 0,
    rafPos: 0,
    intervalId: 0,
    blockersInstalled: false,
    lastFire: 0
  });

  // -------------------------
  // Themefarbe
  // -------------------------
  function syncAccent(){
    try{
      const cs = DOC.defaultView.getComputedStyle(DOC.documentElement);
      const raw = (cs.getPropertyValue("--color-highlight") || "").trim();
      if (raw){
        const c = /^\d+\s*,\s*\d+\s*,\s*\d+/.test(raw)
          ? `rgb(${raw.split(",").slice(0,3).map(x=>x.trim()).join(", ")})`
          : raw;
        DOC.documentElement.style.setProperty("--lia-resetter-accent", c);
        ROOT_DOC.documentElement.style.setProperty("--lia-resetter-accent", c);
        return;
      }
      const sample = DOC.querySelector("button.lia-btn, .lia-btn, a.lia-btn");
      if (sample){
        const col = DOC.defaultView.getComputedStyle(sample).color;
        if (col){
          DOC.documentElement.style.setProperty("--lia-resetter-accent", col);
          ROOT_DOC.documentElement.style.setProperty("--lia-resetter-accent", col);
        }
      }
    }catch(e){}
  }

  // -------------------------
  // Segment-Grenzen
  // -------------------------
  function isAnchor(el){
    return !!el && el.nodeType === 1 && el.classList && el.classList.contains("lia-resetter-anchor");
  }
  function isHeading(el){
    return !!el && el.nodeType === 1 && /^H[1-6]$/.test(el.tagName);
  }
  function getRootFor(el){
    return el.closest(".lia-slide") || DOC.querySelector("main") || DOC.body;
  }

  function findEndMarker(anchor, root){
    const w = DOC.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null);
    let node = null;
    let started = false;
    while ((node = w.nextNode())){
      if (!started){
        if (node === anchor) started = true;
        continue;
      }
      if (isHeading(node) || isAnchor(node)) return node;
    }
    return null;
  }

  function makeRange(anchor, root, endEl){
    const r = DOC.createRange();
    r.setStartAfter(anchor);
    if (endEl) r.setEndBefore(endEl);
    else r.setEnd(root, root.childNodes.length);
    return r;
  }

  function collectSegmentNodes(anchor){
    const root = getRootFor(anchor);
    const endEl = findEndMarker(anchor, root);

    const nodes = [];
    const w = DOC.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null);
    let node = null;
    let started = false;

    while ((node = w.nextNode())){
      if (!started){
        if (node === anchor) started = true;
        continue;
      }
      if (endEl && node === endEl) break;
      nodes.push(node);
    }
    return { root, endEl, nodes };
  }

  // -------------------------
  // SafeReplace Entscheidung (für [->[]])
  // -------------------------
  function fragHasQuizControls(frag){
    const tmp = DOC.createElement("div");
    tmp.appendChild(frag.cloneNode(true));
    if (tmp.querySelector(".lia-btn, input, textarea, select")) return true;
    return false;
  }

  // -------------------------
  // Controls Baseline (gegen Geisterwerte)
  // -------------------------
  const INPUT_VALUE_SETTER = (() => { try { return Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value").set; } catch(e){ return null; } })();
  const TA_VALUE_SETTER    = (() => { try { return Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value").set; } catch(e){ return null; } })();
  const INPUT_CHECKED_SETTER = (() => { try { return Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"checked").set; } catch(e){ return null; } })();

  function setNativeValue(el, v){
    const val = (v == null) ? "" : String(v);
    try{
      if (el && el._valueTracker && typeof el._valueTracker.setValue === "function"){
        el._valueTracker.setValue(el.value);
      }
    }catch(e){}
    try{
      if (el.tagName === "TEXTAREA" && TA_VALUE_SETTER) TA_VALUE_SETTER.call(el, val);
      else if (el.tagName === "INPUT" && INPUT_VALUE_SETTER) INPUT_VALUE_SETTER.call(el, val);
      else el.value = val;
    }catch(e){ try{ el.value = val; }catch(_){ } }
  }

  function setNativeChecked(el, b){
    const val = !!b;
    try{
      if (INPUT_CHECKED_SETTER) INPUT_CHECKED_SETTER.call(el, val);
      else el.checked = val;
    }catch(e){ try{ el.checked = val; }catch(_){ } }
  }

  function fire(el, type){
    try{ el.dispatchEvent(new Event(type, { bubbles:true })); }catch(e){}
  }

  function controlKey(el){
    const tag = el.tagName.toLowerCase();
    const type = (tag === "input") ? ((el.getAttribute("type") || el.type || "").toLowerCase()) : "";
    const id   = el.id || "";
    const name = el.getAttribute("name") || "";
    const aria = el.getAttribute("aria-label") || "";
    const ph   = el.getAttribute("placeholder") || "";
    const sol  = el.getAttribute("data-solution") || el.getAttribute("data-answer") || "";
    return [tag,type,id,name,aria,ph,sol].join("||");
  }

  function snapshotControls(segNodes){
    const controlsByKey = Object.create(null);
    for (let i=0;i<segNodes.length;i++){
      const el = segNodes[i];
      if (!el || !el.matches || !el.matches("input,textarea,select")) continue;

      const key = controlKey(el);
      const tagU = el.tagName.toUpperCase();
      const type = (tagU === "INPUT") ? ((el.getAttribute("type") || el.type || "").toLowerCase()) : "";

      const entry = {
        tag: tagU,
        type,
        valueAttr: el.getAttribute("value"),

        // entscheidend: "wirklich initial" (inkl. @orthography)
        value: (tagU === "SELECT") ? null : (el.value == null ? "" : String(el.value)),
        defaultValue: (tagU === "SELECT") ? null : (el.defaultValue == null ? "" : String(el.defaultValue)),

        checked: (tagU === "INPUT" && (type === "checkbox" || type === "radio")) ? !!el.checked : null,
        defaultChecked: (tagU === "INPUT" && (type === "checkbox" || type === "radio")) ? !!el.defaultChecked : null,

        selectedIndex: (tagU === "SELECT") ? el.selectedIndex : null,
        selectValue: (tagU === "SELECT") ? (el.value == null ? "" : String(el.value)) : null
      };

      (controlsByKey[key] || (controlsByKey[key] = [])).push(entry);
    }
    return controlsByKey;
  }

  function restoreControls(segNodes, controlsByKey){
    if (!controlsByKey) return;

    const queues = Object.create(null);
    for (const k in controlsByKey) queues[k] = controlsByKey[k].slice();

    for (let i=0;i<segNodes.length;i++){
      const el = segNodes[i];
      if (!el || !el.matches || !el.matches("input,textarea,select")) continue;

      const k = controlKey(el);
      const q = queues[k];
      if (!q || q.length === 0) continue;

      const b = q.shift();

      // value-Attr zurück (gegen Lia-internes “Festsetzen”)
      try{
        if (b.valueAttr === null) el.removeAttribute("value");
        else el.setAttribute("value", String(b.valueAttr));
      }catch(e){}

      const tagU = el.tagName.toUpperCase();
      const type = (tagU === "INPUT") ? ((el.getAttribute("type") || el.type || "").toLowerCase()) : "";

      // immer bedienbar machen
      try{ el.disabled = false; el.removeAttribute("disabled"); }catch(e){}
      try{ if ("readOnly" in el) el.readOnly = false; }catch(e){}

      if (tagU === "SELECT"){
        try{ el.selectedIndex = b.selectedIndex; el.value = b.selectValue; }catch(e){}
        fire(el, "change");
      } else if (tagU === "INPUT" && (type === "checkbox" || type === "radio")){
        setNativeChecked(el, !!b.checked);
        try{ el.defaultChecked = !!b.defaultChecked; }catch(e){}
        fire(el, "change");
      } else {
        const v  = (b.value == null) ? "" : String(b.value);
        const dv = (b.defaultValue == null) ? "" : String(b.defaultValue);
        setNativeValue(el, v);
        try{ el.defaultValue = dv; }catch(e){}
        fire(el, "input"); fire(el, "change");
      }
    }
  }

  // -------------------------
  // Interner Lia-Reset (nur innerhalb segment-eigener Toolbar)
  // -------------------------
  function textLower(el){
    return ((el.textContent||"") + " " + (el.getAttribute?.("aria-label")||"") + " " + (el.getAttribute?.("title")||""))
      .replace(/\s+/g," ").trim().toLowerCase();
  }
  function isCheckBtn(el){ const t=textLower(el); return t.includes("prüfen")||t.includes("pruefen")||t.includes("check"); }
  function isSolveBtn(el){ const t=textLower(el); return t.includes("lösung")||t.includes("loesung")||t.includes("solve")||t.includes("zeige"); }
  function isHintBtn(el){ const t=textLower(el); return t.includes("hint")||t.includes("tipp"); }

  function commonAncestor(els){
    if (!els.length) return null;
    const chains = els.map(el=>{
      const a=[]; let c=el;
      while(c){ a.push(c); c=c.parentElement; }
      return a;
    });
    const first = chains[0];
    for (let i=0;i<first.length;i++){
      const cand = first[i];
      let ok=true;
      for (let j=1;j<chains.length;j++){
        if (chains[j].indexOf(cand) < 0){ ok=false; break; }
      }
      if (ok) return cand;
    }
    return null;
  }

  function clickQuizReset(segNodes){
    const liaBtns = [];
    for (let i=0;i<segNodes.length;i++){
      const el = segNodes[i];
      if (el && el.nodeType===1 && el.classList && el.classList.contains("lia-btn")) liaBtns.push(el);
    }
    if (!liaBtns.length) return;

    const scope = commonAncestor(liaBtns) || liaBtns[0].parentElement || null;
    if (!scope) return;

    const btns = Array.from(scope.querySelectorAll("button.lia-btn, a.lia-btn"));

    // 1) “Leftover” Logik
    const leftovers = btns.filter(b => !isCheckBtn(b) && !isSolveBtn(b) && !isHintBtn(b));
    if (leftovers.length === 1){
      try{ leftovers[0].disabled = false; leftovers[0].removeAttribute("disabled"); }catch(e){}
      try{ leftovers[0].click(); }catch(e){}
      return;
    }

    // 2) Icon/Text Reset
    const resetLike = btns.filter(b => {
      const t = textLower(b);
      return t.includes("↺") || t.includes("⟲") || t.includes("reset") || t.includes("neustart") || t.includes("zurück");
    });
    if (resetLike.length){
      for (let i=0;i<Math.min(2, resetLike.length);i++){
        try{ resetLike[i].disabled = false; resetLike[i].removeAttribute("disabled"); }catch(e){}
        try{ resetLike[i].click(); }catch(e){}
      }
    }
  }

  // -------------------------
  // Baseline pro Segment
  // -------------------------
  function ensureBaseline(id){
    const it = REG.items[id];
    if (!it || !it.anchor || !it.anchor.isConnected) return;

    // Root/EndMarker immer neu, aber Baseline nur einmal
    if (it.baselineFrag && it.controlsByKey) return;

    const root = getRootFor(it.anchor);
    const endEl = findEndMarker(it.anchor, root);
    const range = makeRange(it.anchor, root, endEl);

    const frag = range.cloneContents();
    it.baselineFrag = frag;
    it.safeReplace = !fragHasQuizControls(frag); // <== [->[]] meist TRUE

    // Controls nur aus aktuellem DOM-Segment (damit @orthography-Werte sicher sind)
    const seg = collectSegmentNodes(it.anchor);
    it.controlsByKey = snapshotControls(seg.nodes);
  }

  // -------------------------
  // Reset
  // -------------------------
  function resetById(id){
    const it = REG.items[id];
    if (!it || !it.anchor || !it.anchor.isConnected) return;

    ensureBaseline(id);

    const seg = collectSegmentNodes(it.anchor);

    // A) [->[]] / "nur Text" Segment => SafeReplace
    if (it.safeReplace && it.baselineFrag){
      const range = makeRange(it.anchor, seg.root, seg.endEl);
      try{ range.deleteContents(); }catch(e){}
      try{ range.insertNode(it.baselineFrag.cloneNode(true)); }catch(e){}
      // Nachziehen
      WIN.setTimeout(function(){ scan(); positionAll(); }, 60);
      return;
    }

    // B) Quizzes: interner Reset + Controls restore
    clickQuizReset(seg.nodes);

    // Lia zieht manchmal 1 Tick nach
    WIN.setTimeout(function(){
      const seg2 = collectSegmentNodes(it.anchor);
      restoreControls(seg2.nodes, it.controlsByKey);
      // Buttons reaktivieren
      for (let i=0;i<seg2.nodes.length;i++){
        const el = seg2.nodes[i];
        if (el && el.classList && el.classList.contains("lia-btn")){
          try{ el.disabled = false; el.removeAttribute("disabled"); }catch(e){}
          try{ el.removeAttribute("aria-disabled"); }catch(e){}
          try{ if (el.style && el.style.pointerEvents === "none") el.style.pointerEvents = ""; }catch(e){}
        }
      }
    }, 30);

    WIN.setTimeout(function(){ positionAll(); }, 50);
  }

  // -------------------------
  // Overlay Positionierung
  // -------------------------
  function positionOne(id){
    const it = REG.items[id];
    if (!it || !it.anchor || !it.btn || !it.anchor.isConnected) return;
    const r = it.anchor.getBoundingClientRect();
    it.btn.style.left = (r.left) + "px";
    it.btn.style.top  = (r.top)  + "px";
    it.btn.style.width  = Math.max(1, r.width) + "px";
    it.btn.style.height = Math.max(1, r.height) + "px";
  }

  function positionAll(){
    if (REG.rafPos) return;
    REG.rafPos = WIN.requestAnimationFrame(function(){
      REG.rafPos = 0;
      for (const id in REG.items) positionOne(id);
    });
  }

  // -------------------------
  // Capture-Trigger gegen Folien-Sprung (UND triggert Reset)
  // -------------------------
  function captureHandler(ev){
    const t = ev && ev.target;
    if (!t || !t.closest) return;
    const btn = t.closest("button.lia-resetter-btn");
    if (!btn) return;

    const now = Date.now();
    if (now - REG.lastFire < 60) { // doppelte Events (pointer+mouse) entprellen
      try{ ev.preventDefault(); ev.stopPropagation(); ev.stopImmediatePropagation?.(); }catch(e){}
      return;
    }
    REG.lastFire = now;

    const id = btn.getAttribute("data-resetter-id") || "";
    if (id) resetById(id);

    try{
      ev.preventDefault();
      ev.stopPropagation();
      if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
      ev.cancelBubble = true;
      ev.returnValue = false;
    }catch(e){}
  }

  function installBlockers(){
    if (REG.blockersInstalled) return;
    REG.blockersInstalled = true;

    const types = ["pointerdown","mousedown","click","touchstart","touchend"];
    for (let i=0;i<types.length;i++){
      WIN.addEventListener(types[i], captureHandler, true);
    }
    // Defensive: falls Presentation im Root hängt
    if (ROOT_WIN && ROOT_WIN !== WIN){
      for (let i=0;i<types.length;i++){
        ROOT_WIN.addEventListener(types[i], captureHandler, true);
      }
    }
  }

  // -------------------------
  // Button erzeugen + Scan
  // -------------------------
  function ensureButton(anchor){
    const id = anchor.getAttribute("data-resetter-id") || "";
    if (!id) return;

    let it = REG.items[id];
    if (!it) it = REG.items[id] = { anchor:null, btn:null, baselineFrag:null, safeReplace:false, controlsByKey:null };
    it.anchor = anchor;

    if (!it.btn){
      const btn = DOC.createElement("button");
      btn.type = "button";
      btn.className = "lia-resetter-btn";
      btn.textContent = "Neustart der Aufgabe";
      btn.setAttribute("data-resetter-id", id);
      (DOC.body || DOC.documentElement).appendChild(btn);
      it.btn = btn;
    }

    ensureBaseline(id);
    positionOne(id);
  }

  function scan(){
    syncAccent();
    installBlockers();

    const anchors = Array.from(DOC.querySelectorAll(".lia-resetter-anchor[data-resetter-id]"));
    const seen = Object.create(null);

    for (let i=0;i<anchors.length;i++){
      const a = anchors[i];
      const id = a.getAttribute("data-resetter-id") || "";
      if (!id) continue;
      seen[id] = true;
      ensureButton(a);
    }

    // cleanup
    for (const id in REG.items){
      if (!seen[id]){
        const it = REG.items[id];
        try{ if (it.btn && it.btn.parentNode) it.btn.parentNode.removeChild(it.btn); }catch(e){}
        delete REG.items[id];
      }
    }

    positionAll();
  }

  function scheduleScan(){
    if (REG.scanT) return;
    REG.scanT = WIN.setTimeout(function(){
      REG.scanT = 0;
      scan();
    }, 80);
  }

  function init(){
    scan();
    WIN.setTimeout(scan, 250);
    WIN.setTimeout(scan, 1200);

    WIN.addEventListener("scroll", positionAll, { passive:true });
    WIN.addEventListener("resize", positionAll);

    try{
      const mo = new MutationObserver(function(){
        scheduleScan();
        positionAll();
      });
      mo.observe(DOC.documentElement, { childList:true, subtree:true, attributes:true });
    }catch(e){}

    if (!REG.intervalId){
      REG.intervalId = WIN.setInterval(scan, 700);
    }
  }

  init();

})();
@end


@resetter: @resetter_(@uid)
@resetter_
<span class="lia-resetter-anchor" data-resetter-id="@0">Neustart der Aufgabe</span>
@end
-->
































# Aufgabenresetter 1

Aufgabe 1: @resetter 

3 + 4 = [[  7  ]] 


Aufgabe 2: @resetter 

4 + 3 = [[  7  ]] 


Aufgabe 3: 

2 + 4 = [[  6  ]] 




# Aufgabenresetter 2



1 + 6 = [[  7  ]] 


Aufgabe 4: @resetter 

7 + 0 = [[  7  ]] 




# Aufgabenresetter 2


Aufgabe 5: @resetter 

- [[X]] richtig
- [[ ]] falsch


Aufgabe 6: @resetter 

- [[Vektor]       (Skalar)    [nicht definiert]]
- [    [ ]           [X]             [ ]     ]  $$\left|\vec{a} \times \vec{b}\right|$$
- [    ( )           ( )             (X)     ]  $$\vec{c} \times \left( \vec{a} \circ \vec{b}\right) $$
- [    [X]           [ ]             [ ]     ]  $$s \vec{a} \times \left(\vec{b} \times r \vec{c}\right)$$
- [    (X)           ( )             ( )     ]  $$\left( \vec{c} \circ \vec{b}\right)  \cdot \vec{a}  $$
- [    [ ]           [ ]             [X]     ]  $$\dfrac{\left(\vec{a} \times \vec{c}\right)^2}{\vec{a} \times \vec{b}}$$


Aufgabe 7: @resetter 


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$a)\;\;$__ $\dfrac{3}{4}$ 
 [->[$\left. 1 \boxed{ = \dfrac{1}{2} + \dfrac{1}{4}} \right\| \boxed{ \dfrac{5}{4} : \dfrac{5}{2}}  $]]
 [->[$\left. 2 \boxed{ =  \dfrac{3}{6}} \right\|\boxed{ \dfrac{3}{5} + \dfrac{1}{10}}  $]]
 [->[$\left. 3 \boxed{ =  \dfrac{14}{20}} \right\|\boxed{ \dfrac{7}{8} : \dfrac{7}{12}}  $]]
 [->[$\left. 4 \boxed{ =  \dfrac{9}{6}} \right\|\boxed{ 1 - \dfrac{1}{3}}  $]]
$= \dfrac{2}{3}$



