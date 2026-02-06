<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: @resetter v0.0.1 — segmentweise Reset (bis nächster @resetter oder nächste # Überschrift) — Blockt Presentation-Click-Advance (window-capture) — Baseline-Attrs restore (auch [->[]]) + Controls restore (inkl. @orthography) — Overlay fixed

@style
:root{
  --lia-resetter-accent: rgb(var(--color-highlight, 11, 95, 255));
}

/* Inline-Anker: reserviert Platz, aber unsichtbar */
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

/* Overlay-Button: transparent, Rand+Schrift Themefarbe, klein, fixed */
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
    items: Object.create(null),  // id -> { anchor, btn, baseline }
    scanT: 0,
    rafPos: 0,
    intervalId: 0,
    blockersInstalled: false
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
  // GLOBAL BLOCKERS (window capture) => verhindert Folien-Sprung/Step-Advance
  // =========================
  function isResetterEvent(ev){
    const t = ev && ev.target;
    if (!t) return false;
    if (t.closest && t.closest("button.lia-resetter-btn")) return true;
    return false;
  }

  function blockEvt(ev){
    try{
      ev.preventDefault();
      ev.stopPropagation();
      if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
      ev.cancelBubble = true;
      ev.returnValue = false;
    }catch(e){}
  }

  function installBlockers(win){
    const types = ["pointerdown","pointerup","mousedown","mouseup","click","touchstart","touchend","keydown"];
    for (let i=0;i<types.length;i++){
      const tp = types[i];
      win.addEventListener(tp, function(ev){
        if (tp === "keydown"){
          // Nur wenn Button fokussiert und Enter/Space
          const a = ev && ev.target;
          const key = ev && (ev.key || ev.code || "");
          const isBtn = a && a.classList && a.classList.contains("lia-resetter-btn");
          if (!isBtn) return;
          if (key !== "Enter" && key !== " " && key !== "Spacebar") return;
          blockEvt(ev);
          return;
        }
        if (isResetterEvent(ev)) blockEvt(ev);
      }, true); // CAPTURE on window => vor document-capture
    }
  }

  function ensureBlockers(){
    if (REG.blockersInstalled) return;
    REG.blockersInstalled = true;
    installBlockers(WIN);
    // Defensive: falls Presentation-Listener im Root sitzt
    if (ROOT_WIN && ROOT_WIN !== WIN) installBlockers(ROOT_WIN);
  }

  // =========================
  // Segment: ab Anchor bis nächste Anchor oder Überschrift
  // Root: immer .lia-slide oder main
  // =========================
  function isAnchor(el){
    return !!el && el.nodeType === 1 && el.classList && el.classList.contains("lia-resetter-anchor");
  }
  function isHeading(el){
    return !!el && el.nodeType === 1 && /^H[1-6]$/.test(el.tagName);
  }
  function getRootFor(el){
    return el.closest(".lia-slide") || DOC.querySelector("main") || DOC.body;
  }

  function collectSegment(anchor){
    const root = getRootFor(anchor);
    const nodes = [];
    const w = DOC.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null);

    let node = null;
    let started = false;

    while ((node = w.nextNode())){
      if (!started){
        if (node === anchor) started = true;
        continue;
      }
      if (isHeading(node) || isAnchor(node)) break;
      nodes.push(node);
    }
    return { root, nodes };
  }

  // =========================
  // Baseline nur vor Interaktion
  // =========================
  function looksInteracted(nodes){
    for (let i=0;i<nodes.length;i++){
      const el = nodes[i];
      if (!el || el.nodeType !== 1) continue;
      if (el.classList && (el.classList.contains("solved") || el.classList.contains("failed"))) return true;
      if (el.attributes){
        for (let a=0;a<el.attributes.length;a++){
          const n = (el.attributes[a].name || "").toLowerCase();
          if (!n) continue;
          if (n.indexOf("data-text-") === 0) continue;
          if (n.includes("data-solved") || n.includes("data-failed") || n.includes("data-checked") || n.includes("data-state")) return true;
        }
      }
    }
    return false;
  }

  // =========================
  // Baseline: Attrs (für [->[]]) + Controls (für [[...]])
  // =========================
  function trackedAttrName(name){
    return (
      name === "class" ||
      name === "style" ||
      name === "open" ||
      name === "disabled" ||
      name === "hidden" ||
      name === "readonly" ||
      name.indexOf("aria-") === 0 ||
      name.indexOf("data-") === 0
    );
  }

  function snapshotAttrs(el){
    const keep = Object.create(null);
    if (!el || !el.attributes) return keep;
    for (let i=0;i<el.attributes.length;i++){
      const a = el.attributes[i];
      if (trackedAttrName(a.name)) keep[a.name] = a.value;
    }
    return keep;
  }

  function restoreAttrs(el, keep){
    if (!el || !el.attributes) return;

    const toRemove = [];
    for (let i=0;i<el.attributes.length;i++){
      const a = el.attributes[i];
      if (trackedAttrName(a.name) && !(a.name in keep)) toRemove.push(a.name);
    }
    for (let i=0;i<toRemove.length;i++){
      try{ el.removeAttribute(toRemove[i]); }catch(e){}
    }
    for (const name in keep){
      try{ el.setAttribute(name, keep[name]); }catch(e){}
    }
  }

  function pathFrom(root, el){
    const path = [];
    let cur = el;
    while (cur && cur !== root){
      const p = cur.parentElement;
      if (!p) break;
      const kids = p.children;
      let idx = -1;
      for (let i=0;i<kids.length;i++){
        if (kids[i] === cur){ idx = i; break; }
      }
      if (idx < 0) break;
      path.push(idx);
      cur = p;
    }
    path.reverse();
    return path;
  }

  function byPath(root, path){
    let cur = root;
    for (let i=0;i<path.length;i++){
      if (!cur || !cur.children || cur.children.length <= path[i]) return null;
      cur = cur.children[path[i]];
    }
    return cur;
  }

  function pickDataKey(el){
    if (!el || !el.getAttribute) return null;
    const keys = ["data-uid","data-id","data-key","data-ref","data-name","data-step","data-index","data-animate"];
    for (let i=0;i<keys.length;i++){
      const v = el.getAttribute(keys[i]);
      if (v && v.trim()) return { k: keys[i], v: v.trim() };
    }
    return null;
  }

  function textSig(el){
    try{
      const t = (el.textContent || "").replace(/\s+/g," ").trim();
      if (!t) return "";
      return t.slice(0, 80);
    }catch(e){ return ""; }
  }

  function shouldSnapshot(el, attrs){
    if (!el || el.nodeType !== 1) return false;
    const tag = el.tagName;
    if (tag === "DETAILS" || tag === "SUMMARY") return true;
    // wenn tracked attrs vorhanden
    for (const k in attrs){ return true; }
    // oder Lia-typische Klassen / data-*
    const cls = (typeof el.className === "string") ? el.className : "";
    if (cls && cls.toLowerCase().includes("lia")) return true;
    if (el.attributes){
      for (let i=0;i<el.attributes.length;i++){
        const n = (el.attributes[i].name || "").toLowerCase();
        if (n.indexOf("data-") === 0) return true;
      }
    }
    return false;
  }

  function locateByFallback(root, snap){
    // 1) id
    if (snap.id){
      const el = root.querySelector("#" + CSS.escape(snap.id));
      if (el) return el;
    }
    // 2) data key
    if (snap.dk && snap.dk.k && snap.dk.v){
      const el = root.querySelector(`[${snap.dk.k}="${CSS.escape(snap.dk.v)}"]`);
      if (el) return el;
    }
    // 3) tag + textsig (nur wenn eindeutig)
    if (snap.ts && snap.tag){
      const list = root.querySelectorAll(snap.tag.toLowerCase());
      let hit = null, hits = 0;
      for (let i=0;i<list.length;i++){
        if (textSig(list[i]) === snap.ts){
          hit = list[i]; hits++;
          if (hits > 1) break;
        }
      }
      if (hits === 1) return hit;
    }
    return null;
  }

  // Controls restore (gegen Geisterwerte)
  const INPUT_VALUE_SETTER = (function(){
    try { return Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set; } catch(e){ return null; }
  })();
  const TA_VALUE_SETTER = (function(){
    try { return Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value").set; } catch(e){ return null; }
  })();
  const INPUT_CHECKED_SETTER = (function(){
    try { return Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "checked").set; } catch(e){ return null; }
  })();

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

  function snapshotBaseline(anchor){
    const seg = collectSegment(anchor);
    const nodes = seg.nodes;

    const attrSnaps = [];
    const controlsByKey = Object.create(null);

    for (let i=0;i<nodes.length;i++){
      const el = nodes[i];
      if (!el || el.nodeType !== 1) continue;

      const attrs = snapshotAttrs(el);
      if (shouldSnapshot(el, attrs)){
        attrSnaps.push({
          path: pathFrom(seg.root, el),
          id: el.id || "",
          dk: pickDataKey(el),
          tag: el.tagName,
          ts: textSig(el),
          attrs,
          detailsOpen: (el.tagName === "DETAILS") ? !!el.open : null
        });
      }

      if (el.matches && el.matches("input,textarea,select")){
        const key = controlKey(el);
        const tagU = el.tagName.toUpperCase();
        const type = (tagU === "INPUT") ? ((el.getAttribute("type") || el.type || "").toLowerCase()) : "";

        const entry = {
          tag: tagU,
          type,
          disabled: !!el.disabled,
          readOnly: !!el.readOnly,
          valueAttr: el.getAttribute("value"),

          value: (tagU === "SELECT") ? null : (el.value == null ? "" : String(el.value)),
          defaultValue: (tagU === "SELECT") ? null : (el.defaultValue == null ? "" : String(el.defaultValue)),

          checked: (tagU === "INPUT" && (type === "checkbox" || type === "radio")) ? !!el.checked : null,
          defaultChecked: (tagU === "INPUT" && (type === "checkbox" || type === "radio")) ? !!el.defaultChecked : null,

          selectedIndex: (tagU === "SELECT") ? el.selectedIndex : null,
          selectValue: (tagU === "SELECT") ? (el.value == null ? "" : String(el.value)) : null
        };

        (controlsByKey[key] || (controlsByKey[key] = [])).push(entry);
      }
    }

    return { attrSnaps, controlsByKey };
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
      try{
        if (el.style && el.style.pointerEvents === "none") el.style.pointerEvents = "";
      }catch(e){}

      if (el.matches && el.matches("input,textarea,select,button")){
        try{ el.disabled = false; el.removeAttribute("disabled"); }catch(e){}
        if ("readOnly" in el){
          try{ el.readOnly = false; el.removeAttribute("readonly"); }catch(e){}
        }
      }
    }
  }

  function restoreFromBaseline(anchor, baseline){
    const seg = collectSegment(anchor);
    const nodes = seg.nodes;

    // A) Attrs/Details restore (reset [->[]])
    for (let i=0;i<baseline.attrSnaps.length;i++){
      const s = baseline.attrSnaps[i];

      let el = byPath(seg.root, s.path);
      if (!el || !el.isConnected) el = locateByFallback(seg.root, s);
      if (!el || !el.isConnected) continue;

      restoreAttrs(el, s.attrs);

      if (s.tag === "DETAILS"){
        try{
          el.open = !!s.detailsOpen;
          if (s.detailsOpen) el.setAttribute("open","");
          else el.removeAttribute("open");
        }catch(e){}
      }
    }

    // B) Controls restore keyed
    const queues = Object.create(null);
    for (const k in baseline.controlsByKey) queues[k] = baseline.controlsByKey[k].slice();

    const controlsNow = [];
    for (let i=0;i<nodes.length;i++){
      const el = nodes[i];
      if (el && el.matches && el.matches("input,textarea,select")) controlsNow.push(el);
    }

    for (let i=0;i<controlsNow.length;i++){
      const el = controlsNow[i];
      const k = controlKey(el);
      const q = queues[k];
      if (!q || q.length === 0) continue;

      const b = q.shift();

      try{
        el.disabled = !!b.disabled;
        if (b.disabled) el.setAttribute("disabled","");
        else el.removeAttribute("disabled");
      }catch(e){}
      try{
        if ("readOnly" in el){
          el.readOnly = !!b.readOnly;
          if (b.readOnly) el.setAttribute("readonly","");
          else el.removeAttribute("readonly");
        }
      }catch(e){}

      try{
        if (b.valueAttr === null) el.removeAttribute("value");
        else el.setAttribute("value", String(b.valueAttr));
      }catch(e){}

      const tagU = el.tagName.toUpperCase();
      const type = (tagU === "INPUT") ? ((el.getAttribute("type") || el.type || "").toLowerCase()) : "";

      if (tagU === "SELECT"){
        try{ el.selectedIndex = b.selectedIndex; el.value = b.selectValue; }catch(e){}
        fire(el,"change");
      }
      else if (tagU === "INPUT" && (type === "checkbox" || type === "radio")){
        setNativeChecked(el, !!b.checked);
        try{ el.defaultChecked = !!b.defaultChecked; }catch(e){}
        fire(el,"change");
      }
      else {
        const v  = (b.value == null) ? "" : String(b.value);
        const dv = (b.defaultValue == null) ? "" : String(b.defaultValue);
        setNativeValue(el, v);
        try{ el.defaultValue = dv; }catch(e){}
        fire(el,"input"); fire(el,"change");
      }
    }
  }

  // =========================
  // Reset workflow (ohne interne Klicks – hier erstmal nur baseline restore)
  // => verhindert, dass irgendwo "falsch geklickt" wird und Folien springen.
  // =========================
  function resetById(id){
    const it = REG.items[id];
    if (!it || !it.anchor || !it.anchor.isConnected) return;

    syncAccent();
    ensureBaseline(id);

    const run = () => {
      const seg = collectSegment(it.anchor);

      hardUnblock(seg.nodes);

      if (it.baseline) restoreFromBaseline(it.anchor, it.baseline);

      // nochmal unblock (Lia zieht gern nach)
      const seg2 = collectSegment(it.anchor);
      hardUnblock(seg2.nodes);

      // Position nachziehen
      positionAll();
    };

    run();
    WIN.setTimeout(run, 0);
    WIN.requestAnimationFrame(run);
    WIN.setTimeout(run, 120);
  }

  // =========================
  // Overlay Positionierung
  // =========================
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

  // =========================
  // Baseline später aufnehmen (wichtig: Slide 2 wird oft erst beim Betreten aufgebaut)
  // =========================
  function ensureBaseline(id){
    const it = REG.items[id];
    if (!it || !it.anchor || !it.anchor.isConnected) return;
    if (it.baseline) return;

    const seg = collectSegment(it.anchor);
    if (!seg.nodes.length) return;
    if (looksInteracted(seg.nodes)) return;

    it.baseline = snapshotBaseline(it.anchor);
  }

  // =========================
  // Button erzeugen
  // =========================
  function ensureButton(anchor){
    const id = anchor.getAttribute("data-resetter-id") || "";
    if (!id) return;

    let it = REG.items[id];
    if (!it) it = REG.items[id] = { anchor:null, btn:null, baseline:null };
    it.anchor = anchor;

    if (!it.btn){
      const btn = DOC.createElement("button");
      btn.type = "button";
      btn.className = "lia-resetter-btn";
      btn.textContent = "Neustart der Aufgabe";
      btn.setAttribute("data-resetter-id", id);

      // lokal zusätzlich blocken (Redundanz)
      btn.addEventListener("pointerdown", blockEvt, true);
      btn.addEventListener("pointerup",   blockEvt, true);
      btn.addEventListener("click", function(ev){
        blockEvt(ev);
        resetById(id);
      }, true);

      (DOC.body || DOC.documentElement).appendChild(btn);
      it.btn = btn;
    }

    ensureBaseline(id);
    positionOne(id);
  }

  function scan(){
    syncAccent();
    ensureBlockers();

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



