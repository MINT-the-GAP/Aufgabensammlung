<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Aufgabenresetter v0.0.1 — segmentweise: bis nächster @resetter oder nächste Überschrift — robust bei Slide/DOM-Wechsel, ohne Lia-Datenattribute zu zerstören

@style
/* =========================================================
   @resetter Button: inline, transparent, Border+Schrift Themefarbe,
   kleiner als normal, Höhe ~ Font-Höhe
   ========================================================= */
button.lia-resetter-btn{
  /* inline genau an der Stelle */
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;

  /* transparent */
  background: transparent !important;

  /* Themefarbe: nutzt Lia-Variablen, fallback blau */
  color: var(--lia-primary-color, var(--lia-accent, #0b5fff)) !important;
  border: 1px solid currentColor !important;

  /* klein + kompakt */
  font-size: 0.75em !important;
  line-height: 1 !important;
  padding: 0.02em 0.45em !important; /* minimal, damit Border passt */
  border-radius: 0.45em !important;

  /* Abstand in der Zeile */
  margin: 0 0 0 0.6em !important;

  /* keine Layout-Sprünge */
  vertical-align: baseline !important;

  cursor: pointer !important;
  user-select: none !important;
}
button.lia-resetter-btn:hover{
  text-decoration: underline !important;
}
button.lia-resetter-btn:focus{
  outline: none !important;
  text-decoration: underline !important;
}
@end


@onload
(function () {

  // =========================================================
  // Root/Content (iframe-safe)
  // =========================================================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT_WIN = getRootWindow();
  const ROOT_DOC = ROOT_WIN.document;

  const CONTENT_WIN = window;
  const CONTENT_DOC = document;

  // =========================================================
  // Registry (import-sicher)
  // =========================================================
  const REGKEY = "__LIA_RESETTER_V001__";
  const REG = ROOT_WIN[REGKEY] || (ROOT_WIN[REGKEY] = {
    docsInited: new WeakSet(),
    delegatedDocs: new WeakSet(),
    btnToSeg: new WeakMap(),     // button -> seg
    btnToSnap: new WeakMap(),    // button -> snapshot
    styleDocs: new WeakSet(),
    observers: new WeakMap(),    // doc -> observer
    scanTimers: new WeakMap()    // doc -> timeout-id
  });

  // =========================================================
  // CSS Injection (falls @style in Imports nicht überall greift)
  // =========================================================
  const CSS_TEXT = `
button.lia-resetter-btn{
  display:inline-flex !important;
  align-items:center !important;
  justify-content:center !important;
  background:transparent !important;
  color: var(--lia-primary-color, var(--lia-accent, #0b5fff)) !important;
  border:1px solid currentColor !important;
  font-size:0.75em !important;
  line-height:1 !important;
  padding:0.02em 0.45em !important;
  border-radius:0.45em !important;
  margin:0 0 0 0.6em !important;
  vertical-align:baseline !important;
  cursor:pointer !important;
  user-select:none !important;
}
button.lia-resetter-btn:hover{ text-decoration: underline !important; }
button.lia-resetter-btn:focus{ outline:none !important; text-decoration: underline !important; }
`;

  function injectStyleInto(doc){
    if (!doc || REG.styleDocs.has(doc)) return;
    REG.styleDocs.add(doc);

    const id = REGKEY + "_STYLE";
    if (doc.getElementById(id)) return;

    const style = doc.createElement("style");
    style.id = id;
    style.textContent = CSS_TEXT;
    (doc.head || doc.documentElement || doc.body).appendChild(style);
  }

  // =========================================================
  // Helpers
  // =========================================================
  function getRootEl(doc){
    return doc.querySelector("main") || doc.body || doc.documentElement;
  }

  function isResetterButton(el){
    return !!el && el.tagName === "BUTTON" && el.classList && el.classList.contains("lia-resetter-btn");
  }

  function isHeading(el){
    return !!el && !!el.tagName && /^H[1-6]$/.test(el.tagName);
  }

  function cssEscape(s){
    try { return (CSS && CSS.escape) ? CSS.escape(s) : String(s).replace(/["\\]/g, "\\$&"); }
    catch(e){ return String(s).replace(/["\\]/g, "\\$&"); }
  }

  function isBetween(el, startBtn, endMarker){
    if (!el || !startBtn || el === startBtn) return false;

    const pos = startBtn.compareDocumentPosition(el);
    if (!(pos & Node.DOCUMENT_POSITION_FOLLOWING)) return false;

    if (endMarker){
      const pos2 = endMarker.compareDocumentPosition(el);
      if (!(pos2 & Node.DOCUMENT_POSITION_PRECEDING)) return false;
    }
    return true;
  }

  function collectBetween(rootEl, startBtn, endMarker){
    const out = [];
    const walker = CONTENT_DOC.createTreeWalker(rootEl, NodeFilter.SHOW_ELEMENT, null);

    let node = null;
    let started = false;

    while ((node = walker.nextNode())){
      if (!started){
        if (node === startBtn) started = true;
        continue;
      }
      if (endMarker && node === endMarker) break;
      out.push(node);
    }
    return out;
  }

  // =========================================================
  // Segment-Build: ab Button bis nächster Button oder Überschrift
  // =========================================================
  function buildSegments(rootEl){
    const segments = [];
    const walker = CONTENT_DOC.createTreeWalker(rootEl, NodeFilter.SHOW_ELEMENT, null);

    let node = null;
    let current = null;

    function finalize(endMarker){
      if (!current) return;
      current.endMarker = endMarker || null;
      segments.push(current);
      current = null;
    }

    while ((node = walker.nextNode())){
      if (isResetterButton(node)){
        finalize(node);
        current = { btn: node, root: rootEl, endMarker: null };
        continue;
      }
      if (isHeading(node)){
        finalize(node);
        continue;
      }
    }
    finalize(null);
    return segments;
  }

  // =========================================================
  // Snapshot (konservativ: keine data-* Config zerstören!)
  // =========================================================
  const nativeInputValueSetter =
    (function(){ try { return Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set; } catch(e){ return null; } })();
  const nativeTAValueSetter =
    (function(){ try { return Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value").set; } catch(e){ return null; } })();

  function setValue(el, v){
    const val = (v == null) ? "" : String(v);

    // React-style value tracker (falls vorhanden)
    try {
      if (el && el._valueTracker && typeof el._valueTracker.setValue === "function"){
        el._valueTracker.setValue(el.value);
      }
    } catch(e){}

    try {
      if (el.tagName === "INPUT" && nativeInputValueSetter) nativeInputValueSetter.call(el, val);
      else if (el.tagName === "TEXTAREA" && nativeTAValueSetter) nativeTAValueSetter.call(el, val);
      else el.value = val;
    } catch(e){
      try { el.value = val; } catch(_){}
    }
  }

  function stripRuntimeAttrs(el){
    if (!el || !el.attributes) return;

    // nur sehr gezielt: runtime state, NICHT data-text-*
    const RUNTIME_DATA = {
      "data-solved": 1,
      "data-failed": 1,
      "data-correct": 1,
      "data-wrong": 1,
      "data-state": 1,
      "data-status": 1,
      "data-checked": 1,
      "data-tries": 1,
      "data-trials": 1,
      "data-attempts": 1,
      "data-attempt": 1
    };

    const toRemove = [];
    for (let i = 0; i < el.attributes.length; i++){
      const n = el.attributes[i].name;
      if (RUNTIME_DATA[n]) toRemove.push(n);
      if (n === "aria-disabled" || n === "aria-invalid") toRemove.push(n);
    }
    for (let i = 0; i < toRemove.length; i++){
      el.removeAttribute(toRemove[i]);
    }
  }

  function snapshotSegment(seg){
    const els = collectBetween(seg.root, seg.btn, seg.endMarker);

    const snap = {
      btn: seg.btn,
      root: seg.root,
      endMarker: seg.endMarker,
      // Controls (Inputs/Textareas/Selects)
      controls: [],
      // Lia-Buttons (Prüfen/Zeige Lösung)
      liaBtns: [],
      // Details open-state
      details: [],
      // Klassen (nur lia-relevant + Interactives)
      classes: []
    };

    let controlIndex = 0;
    let liaBtnIndex = 0;
    let detailsIndex = 0;

    for (let i = 0; i < els.length; i++){
      const el = els[i];
      const tag = el.tagName;

      // Klasse konservativ merken (nur relevant)
      const cls = (typeof el.className === "string") ? el.className : "";
      if (
        cls && /(^|\s)lia/i.test(cls) ||
        tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || tag === "DETAILS"
      ){
        snap.classes.push({ ref: el, className: cls });
      }

      // Details
      if (tag === "DETAILS"){
        snap.details.push({ ref: el, index: detailsIndex++, open: !!el.open, hadOpenAttr: el.hasAttribute("open") });
        continue;
      }

      // Buttons (Lia Prüfen/Zeige Lösung)
      if (tag === "BUTTON" && el.classList && el.classList.contains("lia-btn")){
        snap.liaBtns.push({
          ref: el,
          index: liaBtnIndex++,
          text: ((el.textContent || "").trim()).slice(0, 80),
          disabled: !!el.disabled,
          hadDisabledAttr: el.hasAttribute("disabled")
        });
        continue;
      }

      // Controls
      if (el.matches && el.matches("input,textarea,select")){
        const s = {
          ref: el,
          index: controlIndex++,
          tag: tag.toLowerCase(),
          type: (el.getAttribute("type") || "").toLowerCase(),
          id: el.id || "",
          name: el.getAttribute("name") || "",
          placeholder: el.getAttribute("placeholder") || "",
          ariaLabel: el.getAttribute("aria-label") || "",
          disabled: !!el.disabled,
          readOnly: !!el.readOnly
        };

        if (s.tag === "select"){
          s.selectedIndex = el.selectedIndex;
          s.value = el.value;
        } else if (s.tag === "textarea"){
          s.value = el.value;
          s.defaultValue = el.defaultValue;
        } else {
          if (s.type === "checkbox" || s.type === "radio"){
            s.checked = !!el.checked;
            s.defaultChecked = !!el.defaultChecked;
          } else {
            s.value = el.value;
            s.defaultValue = el.defaultValue;
            s.hadValueAttr = el.hasAttribute("value");
            s.valueAttr = el.getAttribute("value");
          }
        }
        snap.controls.push(s);
      }
    }

    return snap;
  }

  function controlsNow(seg){
    const els = collectBetween(seg.root, seg.btn, seg.endMarker);
    const out = [];
    for (let i = 0; i < els.length; i++){
      const el = els[i];
      if (el.matches && el.matches("input,textarea,select")) out.push(el);
    }
    return out;
  }

  function liaBtnsNow(seg){
    const els = collectBetween(seg.root, seg.btn, seg.endMarker);
    const out = [];
    for (let i = 0; i < els.length; i++){
      const el = els[i];
      if (el.tagName === "BUTTON" && el.classList && el.classList.contains("lia-btn")) out.push(el);
    }
    return out;
  }

  function detailsNow(seg){
    const els = collectBetween(seg.root, seg.btn, seg.endMarker);
    const out = [];
    for (let i = 0; i < els.length; i++){
      const el = els[i];
      if (el.tagName === "DETAILS") out.push(el);
    }
    return out;
  }

  function matchControl(seg, nowList, snap){
    // 1) Referenz (wenn noch drin)
    if (snap.ref && snap.ref.isConnected && isBetween(snap.ref, seg.btn, seg.endMarker)) return snap.ref;

    // 2) ID
    if (snap.id){
      const cand = CONTENT_DOC.getElementById(snap.id);
      if (cand && cand.isConnected && isBetween(cand, seg.btn, seg.endMarker)) return cand;
    }

    // 3) Index (stabilster Fallback)
    if (nowList[snap.index]) return nowList[snap.index];

    // 4) name (letzter Fallback)
    if (snap.name){
      const cands = seg.root.querySelectorAll(`[name="${cssEscape(snap.name)}"]`);
      for (let i = 0; i < cands.length; i++){
        const c = cands[i];
        if (c && c.isConnected && isBetween(c, seg.btn, seg.endMarker) && c.tagName.toLowerCase() === snap.tag) return c;
      }
    }
    return null;
  }

  function matchByIndex(seg, nowList, snapRef){
    if (snapRef.ref && snapRef.ref.isConnected && isBetween(snapRef.ref, seg.btn, seg.endMarker)) return snapRef.ref;
    if (nowList[snapRef.index]) return nowList[snapRef.index];
    return null;
  }

  // =========================================================
  // RESET (zweiphasig: sofort + nachlauf, um "Geisterwerte" zu killen)
  // =========================================================
  function applyReset(seg, snap){
    // A) Klassen zurück (solved/failed usw.)
    for (let i = 0; i < snap.classes.length; i++){
      const c = snap.classes[i];
      if (c.ref && c.ref.isConnected && isBetween(c.ref, seg.btn, seg.endMarker)){
        try { c.ref.className = c.className; } catch(e){}
      }
    }

    // B) Details open-state
    const nowDetails = detailsNow(seg);
    for (let i = 0; i < snap.details.length; i++){
      const d = matchByIndex(seg, nowDetails, snap.details[i]);
      if (!d) continue;

      try {
        if (snap.details[i].open){
          d.open = true;
          d.setAttribute("open", "");
        } else {
          d.open = false;
          d.removeAttribute("open");
        }
      } catch(e){}
    }

    // C) Lia-Buttons (Prüfen/Zeige Lösung) wieder nutzbar
    const nowLiaBtns = liaBtnsNow(seg);
    for (let i = 0; i < snap.liaBtns.length; i++){
      const b = matchByIndex(seg, nowLiaBtns, snap.liaBtns[i]);
      if (!b) continue;

      // runtime attrs weg, dann initiale disabled wiederherstellen
      stripRuntimeAttrs(b);

      try {
        b.disabled = !!snap.liaBtns[i].disabled;
        if (snap.liaBtns[i].hadDisabledAttr && snap.liaBtns[i].disabled) b.setAttribute("disabled", "");
        else b.removeAttribute("disabled");
      } catch(e){}
    }

    // D) Controls zurück (Wert + default + disabled/readonly + value-Attr)
    const nowControls = controlsNow(seg);

    for (let i = 0; i < snap.controls.length; i++){
      const s = snap.controls[i];
      const el = matchControl(seg, nowControls, s);
      if (!el) continue;

      // runtime attrs weg (aber NICHT data-text-*)
      stripRuntimeAttrs(el);

      // disabled / readonly auf initial
      try {
        el.disabled = !!s.disabled;
        if (s.disabled) el.setAttribute("disabled", "");
        else el.removeAttribute("disabled");
      } catch(e){}

      try {
        // readonly nur bei input/textarea
        if ("readOnly" in el){
          el.readOnly = !!s.readOnly;
          if (s.readOnly) el.setAttribute("readonly", "");
          else el.removeAttribute("readonly");
        }
      } catch(e){}

      // value wiederherstellen
      try {
        if (s.tag === "select"){
          el.selectedIndex = s.selectedIndex;
          el.value = s.value;
          el.dispatchEvent(new Event("change", { bubbles: true }));
        } else if (s.tag === "textarea"){
          setValue(el, s.value);
          try { el.defaultValue = (s.defaultValue == null ? "" : String(s.defaultValue)); } catch(e){}
          el.dispatchEvent(new Event("input", { bubbles: true }));
          el.dispatchEvent(new Event("change", { bubbles: true }));
        } else {
          if (s.type === "checkbox" || s.type === "radio"){
            el.checked = !!s.checked;
            try { el.defaultChecked = !!s.defaultChecked; } catch(e){}
            el.dispatchEvent(new Event("change", { bubbles: true }));
          } else {
            // wichtig gegen "Geisterlösung": value + defaultValue + value-Attr wie initial
            setValue(el, s.value);
            try { el.defaultValue = (s.defaultValue == null ? "" : String(s.defaultValue)); } catch(e){}

            try {
              if (s.hadValueAttr) el.setAttribute("value", s.valueAttr == null ? "" : String(s.valueAttr));
              else el.removeAttribute("value");
            } catch(e){}

            el.dispatchEvent(new Event("input", { bubbles: true }));
            el.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }
      } catch(e){}
    }

    // E) zusätzlich: runtime data-attrs im Segment gezielt entfernen (sehr konservativ)
    const els = collectBetween(seg.root, seg.btn, seg.endMarker);
    for (let i = 0; i < els.length; i++){
      stripRuntimeAttrs(els[i]);
    }
  }

  function resetSegment(btn){
    const seg = REG.btnToSeg.get(btn);
    const snap = REG.btnToSnap.get(btn);
    if (!seg || !snap) return;

    // Phase 1
    applyReset(seg, snap);

    // Phase 2 (nachlauf): häufig hier hängt "Geisterwert" / disabled-state fest
    CONTENT_WIN.setTimeout(function(){ applyReset(seg, snap); }, 0);
    CONTENT_WIN.setTimeout(function(){ applyReset(seg, snap); }, 60);
  }

  // =========================================================
  // Scan/Setup (auch bei Slide-Wechsel / DOM-Rebuild)
  // =========================================================
  function scan(){
    const rootEl = getRootEl(CONTENT_DOC);
    if (!rootEl) return;

    const segments = buildSegments(rootEl);

    for (let i = 0; i < segments.length; i++){
      const seg = segments[i];
      const btn = seg.btn;

      // Segment merken
      REG.btnToSeg.set(btn, seg);

      // Snapshot nur einmal pro Button-Element
      if (!REG.btnToSnap.has(btn)){
        REG.btnToSnap.set(btn, snapshotSegment(seg));
      }
    }
  }

  function scheduleScan(){
    const old = REG.scanTimers.get(CONTENT_DOC);
    if (old) CONTENT_WIN.clearTimeout(old);

    const t = CONTENT_WIN.setTimeout(function(){
      REG.scanTimers.delete(CONTENT_DOC);
      scan();
    }, 50);

    REG.scanTimers.set(CONTENT_DOC, t);
  }

  function ensureDelegation(){
    if (REG.delegatedDocs.has(CONTENT_DOC)) return;
    REG.delegatedDocs.add(CONTENT_DOC);

    CONTENT_DOC.addEventListener("click", function(ev){
      const btn = ev.target && ev.target.closest ? ev.target.closest("button.lia-resetter-btn") : null;
      if (!btn) return;

      ev.preventDefault();

      // sicherstellen, dass es gescannt ist
      if (!REG.btnToSnap.has(btn)) scan();

      resetSegment(btn);
    }, true);
  }

  function ensureObserver(){
    if (REG.observers.has(CONTENT_DOC)) return;

    const obs = new MutationObserver(function(){
      scheduleScan();
    });
    obs.observe(CONTENT_DOC.documentElement, { childList: true, subtree: true });

    REG.observers.set(CONTENT_DOC, obs);
  }

  function init(){
    if (REG.docsInited.has(CONTENT_DOC)) return;
    REG.docsInited.add(CONTENT_DOC);

    // Styles in beiden Dokumenten
    injectStyleInto(ROOT_DOC);
    injectStyleInto(CONTENT_DOC);

    ensureDelegation();
    ensureObserver();

    // Erstscan + kurzer Nachscan (für verzögert gerenderte Quizzes)
    scan();
    CONTENT_WIN.setTimeout(scan, 200);
    CONTENT_WIN.setTimeout(scan, 800);
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



