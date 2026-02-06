<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: @resetter v0.0.1 — INLINE Button; verhindert Slide-Jump via Hash-Bounce; Quizzes: Toolbar-Reset + native Input-Restore; [->[]]: Segment-HTML Baseline-Restore

@style
:root{
  --lia-resetter-accent: rgb(var(--color-highlight, 11, 95, 255));
}

button.lia-resetter-btn{
  -webkit-appearance: none !important;
  appearance: none !important;

  background: transparent !important;
  color: var(--lia-resetter-accent) !important;
  border: 1px solid currentColor !important;

  font-size: 0.75em !important;
  line-height: 1 !important;
  height: 1.15em !important;

  padding: 0 0.45em !important;
  margin: 0 0 0 0.6em !important;

  border-radius: 0.5em !important;
  box-sizing: border-box !important;

  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  vertical-align: baseline !important;

  cursor: pointer !important;
  user-select: none !important;
  white-space: nowrap !important;
}
button.lia-resetter-btn:hover{ text-decoration: underline !important; }
button.lia-resetter-btn:focus{ outline: none !important; text-decoration: underline !important; }
@end


@onload
(function(){

  // =========================
  // Root/Content (iframe-safe)
  // =========================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT_WIN = getRootWindow();
  const ROOT_DOC = ROOT_WIN.document;

  const WIN = window;
  const DOC = document;

  // =========================
  // Registry (import-sicher)
  // =========================
  const REGKEY = "__LIA_RESETTER_V001__";
  const REG = ROOT_WIN[REGKEY] || (ROOT_WIN[REGKEY] = {
    btnReady: new WeakSet(),
    docsInited: new WeakSet(),
    // id -> baseline
    base: Object.create(null),
    blockersInstalled: false,
    lastFire: 0
  });

  // =========================
  // Themefarbe robust halten
  // =========================
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

  // =========================
  // Segment-Grenzen: bis nächster @resetter oder nächste Überschrift
  // =========================
  function isResetBtn(el){
    return !!el && el.nodeType === 1 && el.tagName === "BUTTON" && el.classList.contains("lia-resetter-btn");
  }
  function isHeading(el){
    return !!el && el.nodeType === 1 && /^H[1-6]$/.test(el.tagName);
  }
  function getRootFor(el){
    return el.closest(".lia-slide") || DOC.querySelector("main") || DOC.body;
  }

  function findEndMarker(startBtn, root){
    const w = DOC.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null);
    let node=null, started=false;
    while ((node = w.nextNode())){
      if (!started){
        if (node === startBtn) started=true;
        continue;
      }
      if (isHeading(node) || isResetBtn(node)) return node;
    }
    return null;
  }

  function makeRange(startBtn, root, endEl){
    const r = DOC.createRange();
    r.setStartAfter(startBtn);
    if (endEl) r.setEndBefore(endEl);
    else r.setEnd(root, root.childNodes.length);
    return r;
  }

  function collectSegmentNodes(startBtn){
    const root = getRootFor(startBtn);
    const endEl = findEndMarker(startBtn, root);

    const nodes = [];
    const w = DOC.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null);
    let node=null, started=false;
    while ((node = w.nextNode())){
      if (!started){
        if (node === startBtn) started=true;
        continue;
      }
      if (endEl && node === endEl) break;
      nodes.push(node);
    }
    return { root, endEl, nodes };
  }

  // =========================
  // Baseline Capture: HTML + Controls
  // =========================
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

  function snapshotControls(nodes){
    const byKey = Object.create(null);
    for (let i=0;i<nodes.length;i++){
      const el = nodes[i];
      if (!el || !el.matches || !el.matches("input,textarea,select")) continue;

      const key = controlKey(el);
      const tagU = el.tagName.toUpperCase();
      const type = (tagU === "INPUT") ? ((el.getAttribute("type") || el.type || "").toLowerCase()) : "";

      const entry = {
        tag: tagU,
        type,
        valueAttr: el.getAttribute("value"),
        value: (tagU === "SELECT") ? null : (el.value == null ? "" : String(el.value)),
        defaultValue: (tagU === "SELECT") ? null : (el.defaultValue == null ? "" : String(el.defaultValue)),
        checked: (tagU === "INPUT" && (type === "checkbox" || type === "radio")) ? !!el.checked : null,
        defaultChecked: (tagU === "INPUT" && (type === "checkbox" || type === "radio")) ? !!el.defaultChecked : null,
        selectedIndex: (tagU === "SELECT") ? el.selectedIndex : null,
        selectValue: (tagU === "SELECT") ? (el.value == null ? "" : String(el.value)) : null
      };

      (byKey[key] || (byKey[key]=[])).push(entry);
    }
    return byKey;
  }

  function captureBaseline(btn){
    const id = btn.getAttribute("data-resetter-id") || "";
    if (!id) return;

    if (REG.base[id] && REG.base[id].html) return;

    const seg = collectSegmentNodes(btn);
    const r = makeRange(btn, seg.root, seg.endEl);

    const frag = r.cloneContents();
    const box = DOC.createElement("div");
    box.appendChild(frag);

    REG.base[id] = REG.base[id] || {};
    REG.base[id].html = box.innerHTML;                 // für [->[]] & generell DOM-Reset
    REG.base[id].controls = snapshotControls(seg.nodes); // für Geisterwerte
  }

  // =========================
  // Restore Controls (native setter gegen Geister-7)
  // =========================
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

  function restoreControls(nodes, byKey){
    if (!byKey) return;

    const queues = Object.create(null);
    for (const k in byKey) queues[k] = byKey[k].slice();

    for (let i=0;i<nodes.length;i++){
      const el = nodes[i];
      if (!el || !el.matches || !el.matches("input,textarea,select")) continue;

      const k = controlKey(el);
      const q = queues[k];
      if (!q || !q.length) continue;

      const b = q.shift();

      // entblocken
      try{ el.disabled = false; el.removeAttribute("disabled"); }catch(e){}
      try{ if ("readOnly" in el) { el.readOnly = false; el.removeAttribute("readonly"); } }catch(e){}

      // value-Attr zurück
      try{
        if (b.valueAttr === null) el.removeAttribute("value");
        else el.setAttribute("value", String(b.valueAttr));
      }catch(e){}

      const tagU = el.tagName.toUpperCase();
      const type = (tagU === "INPUT") ? ((el.getAttribute("type") || el.type || "").toLowerCase()) : "";

      if (tagU === "SELECT"){
        try{ el.selectedIndex = b.selectedIndex; el.value = b.selectValue; }catch(e){}
        fire(el,"change");
      } else if (tagU === "INPUT" && (type === "checkbox" || type === "radio")){
        setNativeChecked(el, !!b.checked);
        try{ el.defaultChecked = !!b.defaultChecked; }catch(e){}
        fire(el,"change");
      } else {
        const v  = (b.value == null) ? "" : String(b.value);
        const dv = (b.defaultValue == null) ? "" : String(b.defaultValue);
        setNativeValue(el, v);
        try{ el.defaultValue = dv; }catch(e){}
        fire(el,"input"); fire(el,"change");
      }
    }
  }

  function hardUnblock(nodes){
    for (let i=0;i<nodes.length;i++){
      const el = nodes[i];
      if (!el || el.nodeType !== 1) continue;

      if (el.tagName === "FIELDSET"){
        try{ el.disabled = false; el.removeAttribute("disabled"); }catch(e){}
      }
      if (el.hasAttribute && el.hasAttribute("inert")){
        try{ el.removeAttribute("inert"); }catch(e){}
      }
      if (el.getAttribute && el.getAttribute("aria-disabled") === "true"){
        try{ el.setAttribute("aria-disabled","false"); }catch(e){}
      }
      try{ if (el.style && el.style.pointerEvents === "none") el.style.pointerEvents = ""; }catch(e){}

      if (el.matches && el.matches("button.lia-btn")){
        try{ el.disabled = false; el.removeAttribute("disabled"); }catch(e){}
        try{ el.removeAttribute("aria-disabled"); }catch(e){}
      }
      if (el.matches && el.matches("input,textarea,select")){
        try{ el.disabled = false; el.removeAttribute("disabled"); }catch(e){}
        try{ if ("readOnly" in el) { el.readOnly = false; el.removeAttribute("readonly"); } }catch(e){}
      }
    }
  }

  // =========================
  // Quiz-Toolbar Reset (Leftover-Button)
  // =========================
  function textLower(el){
    return ((el.textContent||"") + " " + (el.getAttribute?.("aria-label")||"") + " " + (el.getAttribute?.("title")||""))
      .replace(/\s+/g," ").trim().toLowerCase();
  }
  function isCheckBtn(el){ const t=textLower(el); return t.includes("prüfen")||t.includes("pruefen")||t.includes("check"); }
  function isSolveBtn(el){ const t=textLower(el); return t.includes("lösung")||t.includes("loesung")||t.includes("solve")||t.includes("zeige"); }
  function isHintBtn(el){ const t=textLower(el); return t.includes("hint")||t.includes("tipp"); }

  function commonAncestor(els){
    if (!els.length) return null;
    const chains = els.map(el=>{ const a=[]; for(let c=el;c;c=c.parentElement) a.push(c); return a; });
    const first = chains[0];
    for (let i=0;i<first.length;i++){
      const cand = first[i];
      let ok = true;
      for (let j=1;j<chains.length;j++){
        if (chains[j].indexOf(cand) < 0){ ok=false; break; }
      }
      if (ok) return cand;
    }
    return null;
  }

  function clickInternalReset(nodes){
    const liaBtns = [];
    for (let i=0;i<nodes.length;i++){
      const el = nodes[i];
      if (el && el.nodeType===1 && el.classList && el.classList.contains("lia-btn")) liaBtns.push(el);
    }
    if (!liaBtns.length) return;

    const scope = commonAncestor(liaBtns) || liaBtns[0].parentElement;
    if (!scope) return;

    const btns = Array.from(scope.querySelectorAll("button.lia-btn, a.lia-btn"));
    if (!btns.length) return;

    const leftovers = btns.filter(b => !isCheckBtn(b) && !isSolveBtn(b) && !isHintBtn(b));

    let resetBtn = null;
    if (leftovers.length === 1){
      resetBtn = leftovers[0];
    } else {
      resetBtn = leftovers.find(b=>{
        const t = textLower(b);
        return t.includes("↺") || t.includes("⟲") || t.includes("reset") || t.includes("neustart") || t.includes("zurück") || t.includes("zurueck");
      }) || null;
    }

    if (!resetBtn) return;

    try{ resetBtn.disabled = false; resetBtn.removeAttribute("disabled"); }catch(e){}
    try{ resetBtn.click(); }catch(e){}
  }

  // =========================
  // [->[]] Erkennung + Baseline HTML Restore
  // =========================
  function looksLikeArrowQuiz(nodes){
    for (let i=0;i<nodes.length;i++){
      const el = nodes[i];
      if (!el || el.nodeType !== 1) continue;
      if (el.tagName === "DETAILS" || el.tagName === "SUMMARY") return true;
      if (el.classList && (el.classList.contains("fragment") || el.classList.contains("visible") || el.classList.contains("current-fragment"))) return true;
      if (el.hasAttribute && el.hasAttribute("data-fragment-index")) return true;
    }
    return false;
  }

  function restoreBaselineHTML(btn){
    const id = btn.getAttribute("data-resetter-id") || "";
    const b = REG.base[id];
    if (!b || !b.html) return;

    const seg = collectSegmentNodes(btn);
    const r = makeRange(btn, seg.root, seg.endEl);

    // ersetzen
    try{ r.deleteContents(); }catch(e){}
    try{
      const tmp = DOC.createElement("div");
      tmp.innerHTML = b.html;
      const frag = DOC.createDocumentFragment();
      while (tmp.firstChild) frag.appendChild(tmp.firstChild);
      r.insertNode(frag);
    }catch(e){}
  }

  // =========================
  // Hash-Bounce gegen Slide-Jump
  // =========================
  function bounceHash(oldHash){
    try{
      const h = oldHash == null ? "" : String(oldHash);
      const fix = () => {
        try{
          if (ROOT_WIN.location.hash !== h) ROOT_WIN.location.hash = h;
        }catch(e){}
      };
      // mehrere Ticks, weil Presentation oft nachzieht
      WIN.setTimeout(fix, 0);
      WIN.setTimeout(fix, 25);
      WIN.setTimeout(fix, 80);
      WIN.requestAnimationFrame(fix);
    }catch(e){}
  }

  // =========================
  // Reset Dispatcher
  // =========================
  function doReset(btn){
    syncAccent();
    captureBaseline(btn);

    const oldHash = (function(){ try{ return ROOT_WIN.location.hash; } catch(e){ return ""; } })();

    const seg = collectSegmentNodes(btn);
    const nodes = seg.nodes;

    // 1) wenn [->[]] => Baseline HTML restore (am stabilsten)
    if (looksLikeArrowQuiz(nodes)){
      restoreBaselineHTML(btn);

      // danach: nochmal entblocken (falls Lia Buttons irgendwo disabled lässt)
      WIN.setTimeout(function(){
        const seg2 = collectSegmentNodes(btn);
        hardUnblock(seg2.nodes);
      }, 40);

      bounceHash(oldHash);
      return;
    }

    // 2) normale Quizzes: interner Reset + Controls restore
    hardUnblock(nodes);
    clickInternalReset(nodes);

    WIN.setTimeout(function(){
      const seg2 = collectSegmentNodes(btn);
      hardUnblock(seg2.nodes);
      const id = btn.getAttribute("data-resetter-id") || "";
      const b = REG.base[id];
      if (b && b.controls) restoreControls(seg2.nodes, b.controls);
      hardUnblock(seg2.nodes);
    }, 50);

    WIN.setTimeout(function(){
      const seg3 = collectSegmentNodes(btn);
      hardUnblock(seg3.nodes);
    }, 160);

    bounceHash(oldHash);
  }

  // =========================
  // Capture Handler: blockt Advance + triggert Reset
  // =========================
  function captureHandler(ev){
    const t = ev && ev.target;
    if (!t || !t.closest) return;

    const btn = t.closest("button.lia-resetter-btn");
    if (!btn) return;

    const now = Date.now();
    if (now - REG.lastFire < 120){
      try{ ev.preventDefault(); ev.stopPropagation(); ev.stopImmediatePropagation?.(); }catch(e){}
      return;
    }
    REG.lastFire = now;

    doReset(btn);

    // event killen (trotzdem Hash-Bounce als letzte Sicherung)
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

    const types = ["pointerdown","mousedown","click","touchstart","touchend","keydown"];
    for (let i=0;i<types.length;i++){
      WIN.addEventListener(types[i], captureHandler, true);
    }
    if (ROOT_WIN && ROOT_WIN !== WIN){
      for (let i=0;i<types.length;i++){
        ROOT_WIN.addEventListener(types[i], captureHandler, true);
      }
    }
  }

  // =========================
  // Scan + attach
  // =========================
  function scan(){
    installBlockers();
    syncAccent();

    const btns = Array.from(DOC.querySelectorAll("button.lia-resetter-btn[data-resetter-id]"));
    for (let i=0;i<btns.length;i++){
      const b = btns[i];
      captureBaseline(b);

      if (!REG.btnReady.has(b)){
        REG.btnReady.add(b);
        // fallback
        b.addEventListener("click", function(ev){
          ev.preventDefault();
          ev.stopPropagation();
          if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
          doReset(b);
        }, true);
      }
    }
  }

  function init(){
    if (REG.docsInited.has(DOC)) return;
    REG.docsInited.add(DOC);

    scan();
    WIN.setTimeout(scan, 250);
    WIN.setTimeout(scan, 1200);

    try{
      const mo = new MutationObserver(function(){ scan(); });
      mo.observe(DOC.documentElement, { childList:true, subtree:true });
    }catch(e){}

    WIN.setInterval(scan, 900);
  }

  init();

})();
@end


@resetter: @resetter_(@uid)
@resetter_
<button class="lia-resetter-btn" type="button" data-resetter-id="@0">Neustart der Aufgabe</button>
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



