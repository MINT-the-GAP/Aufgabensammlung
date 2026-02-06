<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Aufgabenresetter v0.0.1 — segmentweise Reset (bis nächster @resetter oder nächste Überschrift) + event-delegation + native-setter gegen Geisterwerte

@style
:root{
  /* Fallback – wird im @onload nochmal sicher aus Theme / .lia-btn gezogen */
  --lia-resetter-accent: var(--lia-accent, var(--lia-primary-color, var(--lia-color-primary, #0b5fff)));
}

/* Reset-Button: inline, transparent, Rand+Schrift Themefarbe, kleiner als normal, max ~Font-Höhe */
button.lia-resetter-btn{
  background: transparent !important;
  border: 1px solid var(--lia-resetter-accent) !important;
  color: var(--lia-resetter-accent) !important;

  font-size: 0.75em !important;
  line-height: 1 !important;

  height: 1.2em !important;
  padding: 0 0.45em !important;

  margin: 0 0 0 0.6em !important;
  border-radius: 0.6em !important;

  box-sizing: border-box !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  vertical-align: baseline !important;

  cursor: pointer !important;
  user-select: none !important;
  text-decoration: none !important;
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
    initedDocs: new WeakSet(),
    btnInfo: new WeakMap(),   // btn -> { snap: {...} }
    scanTimer: null,
    cssInjectedDocs: new WeakSet()
  });

  // =========================
  // CSS Injection (zur Sicherheit, v.a. bei Imports/iframes)
  // =========================
  function injectStyleInto(doc){
    if (!doc || REG.cssInjectedDocs.has(doc)) return;
    REG.cssInjectedDocs.add(doc);

    const id = REGKEY + "_STYLE";
    if (doc.getElementById(id)) return;

    const style = doc.createElement("style");
    style.id = id;
    style.textContent = `
:root{
  --lia-resetter-accent: var(--lia-accent, var(--lia-primary-color, var(--lia-color-primary, #0b5fff)));
}
button.lia-resetter-btn{
  background: transparent !important;
  border: 1px solid var(--lia-resetter-accent) !important;
  color: var(--lia-resetter-accent) !important;

  font-size: 0.75em !important;
  line-height: 1 !important;

  height: 1.2em !important;
  padding: 0 0.45em !important;

  margin: 0 0 0 0.6em !important;
  border-radius: 0.6em !important;

  box-sizing: border-box !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  vertical-align: baseline !important;

  cursor: pointer !important;
  user-select: none !important;
  text-decoration: none !important;
}
button.lia-resetter-btn:hover{ text-decoration: underline !important; }
button.lia-resetter-btn:focus{ outline: none !important; text-decoration: underline !important; }
`;
    (doc.head || doc.documentElement || doc.body).appendChild(style);
  }

  // =========================
  // Theme-Akzentfarbe robust ziehen
  // =========================
  function readCssVar(doc, name){
    try{
      const v = doc && doc.documentElement
        ? getComputedStyle(doc.documentElement).getPropertyValue(name)
        : "";
      const s = (v || "").trim();
      return s || "";
    }catch(e){ return ""; }
  }

  function getAccentFromDoc(doc){
    const candidates = [
      "--lia-resetter-accent",
      "--lia-accent",
      "--lia-primary-color",
      "--lia-color-primary",
      "--lia-color-accent",
      "--color-accent"
    ];
    for (let i=0;i<candidates.length;i++){
      const v = readCssVar(doc, candidates[i]);
      if (v) return v;
    }

    try{
      const probe =
        (doc && doc.querySelector && (doc.querySelector(".lia-btn") || doc.querySelector("button.lia-btn")))
        || null;
      if (probe){
        const cs = getComputedStyle(probe);
        const c = (cs.borderColor || cs.color || cs.backgroundColor || "").trim();
        if (c && c !== "transparent" && c !== "rgba(0, 0, 0, 0)") return c;
      }
    }catch(e){}

    return "";
  }

  function applyAccent(){
    const c =
      getAccentFromDoc(DOC)
      || getAccentFromDoc(ROOT_DOC)
      || "#0b5fff";

    try { DOC.documentElement.style.setProperty("--lia-resetter-accent", c); } catch(e){}
    try { ROOT_DOC.documentElement.style.setProperty("--lia-resetter-accent", c); } catch(e){}
  }

  // =========================
  // Native Setter (gegen "Geisterwerte" bei kontrollierten Inputs)
  // =========================
  function setNativeValue(el, value){
    if (!el) return;
    const v = (value == null) ? "" : String(value);
    try{
      const proto = (el.tagName === "TEXTAREA")
        ? HTMLTextAreaElement.prototype
        : HTMLInputElement.prototype;
      const desc = Object.getOwnPropertyDescriptor(proto, "value");
      if (desc && desc.set) desc.set.call(el, v);
      else el.value = v;
    }catch(e){
      try{ el.value = v; }catch(_){}
    }
  }

  function setNativeChecked(el, checked){
    if (!el) return;
    const b = !!checked;
    try{
      const desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "checked");
      if (desc && desc.set) desc.set.call(el, b);
      else el.checked = b;
    }catch(e){
      try{ el.checked = b; }catch(_){}
    }
  }

  function setNativeDisabled(el, disabled){
    if (!el) return;
    const b = !!disabled;
    try{
      const desc = Object.getOwnPropertyDescriptor(HTMLButtonElement.prototype, "disabled");
      if (desc && desc.set) desc.set.call(el, b);
      else el.disabled = b;
    }catch(e){
      try{ el.disabled = b; }catch(_){}
    }
  }

  function fire(el, type){
    if (!el) return;
    try{
      el.dispatchEvent(new Event(type, { bubbles: true }));
    }catch(e){
      try{
        const ev = DOC.createEvent("Event");
        ev.initEvent(type, true, true);
        el.dispatchEvent(ev);
      }catch(_){}
    }
  }

  // =========================
  // Segment-Boundaries
  // =========================
  function isResetterButton(el){
    return !!el && el.tagName === "BUTTON" && el.classList && el.classList.contains("lia-resetter-btn");
  }

  function isHeading(el){
    return !!el && el.tagName && /^H[1-6]$/.test(el.tagName);
  }

  function getMainRoot(){
    return DOC.querySelector("main") || DOC.body;
  }

  function buildSegments(rootEl){
    const segMap = new Map();
    if (!rootEl) return segMap;

    const walker = DOC.createTreeWalker(rootEl, NodeFilter.SHOW_ELEMENT, null);

    let node = null;
    let current = null;

    while ((node = walker.nextNode())){
      if (isResetterButton(node)){
        current = { btn: node, nodes: [] };
        segMap.set(node, current);
        continue;
      }
      if (isHeading(node)){
        current = null;
        continue;
      }
      if (current){
        // alles NACH dem Button bis zur nächsten Grenze
        if (node !== current.btn) current.nodes.push(node);
      }
    }

    return segMap;
  }

  // =========================
  // Snapshot/Restore (ohne "neue Nodes löschen" -> verhindert Verschwind-Bugs)
  // =========================
  function snapshotSegment(seg){
    const uniqControls = new Set();
    const uniqDetails  = new Set();
    const uniqButtons  = new Set();
    const uniqEls      = new Set();

    for (let i=0;i<seg.nodes.length;i++){
      const el = seg.nodes[i];
      uniqEls.add(el);

      if (el.matches && el.matches("input,textarea,select")) uniqControls.add(el);
      if (el.tagName === "DETAILS") uniqDetails.add(el);
      if (el.tagName === "BUTTON" && !isResetterButton(el)) uniqButtons.add(el);
    }

    const controlSnaps = [];
    uniqControls.forEach(function(el){
      const tag = el.tagName.toLowerCase();
      const type = (tag === "input" ? ((el.getAttribute("type") || el.type || "").toLowerCase()) : "");

      const s = {
        el,
        tag,
        type,
        disabled: !!el.disabled,
        readOnly: !!el.readOnly
      };

      if (tag === "select"){
        s.value = el.value;
        s.selectedIndex = el.selectedIndex;
      } else if (tag === "textarea"){
        s.value = el.value;
        s.defaultValue = el.defaultValue;
      } else if (tag === "input"){
        if (type === "checkbox" || type === "radio"){
          s.checked = !!el.checked;
          s.defaultChecked = !!el.defaultChecked;
        } else {
          s.value = el.value;
          s.defaultValue = el.defaultValue;
        }
      }
      controlSnaps.push(s);
    });

    const detailsSnaps = [];
    uniqDetails.forEach(function(el){
      detailsSnaps.push({ el, open: !!el.open });
    });

    const buttonSnaps = [];
    uniqButtons.forEach(function(el){
      buttonSnaps.push({
        el,
        disabled: !!el.disabled,
        ariaDisabled: el.getAttribute("aria-disabled")
      });
    });

    return {
      controlSnaps,
      detailsSnaps,
      buttonSnaps
    };
  }

  // gezielt "Ergebnis-/Status-Müll" entfernen, ohne permanente data-text-* u.ä. zu zerstören
  const EPHEMERAL_ATTRS = [
    "data-state","data-status","data-result","data-checked","data-solved","data-failed",
    "data-correct","data-wrong","aria-invalid"
  ];
  const EPHEMERAL_CLASS_TOKENS = [
    "solved","failed","success","error","correct","wrong","checked","show-solution","hide-solution",
    "lia-solved","lia-failed","lia-correct","lia-wrong"
  ];

  function stripEphemeral(el){
    if (!el || el.nodeType !== 1) return;

    for (let i=0;i<EPHEMERAL_ATTRS.length;i++){
      const a = EPHEMERAL_ATTRS[i];
      if (el.hasAttribute && el.hasAttribute(a)) el.removeAttribute(a);
    }

    if (el.classList){
      for (let i=0;i<EPHEMERAL_CLASS_TOKENS.length;i++){
        const t = EPHEMERAL_CLASS_TOKENS[i];
        if (el.classList.contains(t)) el.classList.remove(t);
      }
    }
  }

  function tryClickInternalRetry(seg){
    const keys = ["reset","neustart","zurücksetzen","wiederholen","restart","redo","repeat"];
    for (let i=0;i<seg.nodes.length;i++){
      const el = seg.nodes[i];
      if (!el || el.tagName !== "BUTTON" || isResetterButton(el)) continue;

      const txt = ((el.textContent || "") + " " + (el.getAttribute("title") || "") + " " + (el.getAttribute("aria-label") || "")).toLowerCase();
      for (let k=0;k<keys.length;k++){
        if (txt.indexOf(keys[k]) !== -1){
          try{ el.click(); }catch(e){}
          break;
        }
      }
    }
  }

  function forceEnableTaskButtons(seg){
    // defensiv: Prüfen / Lösung / Hint wieder nutzbar machen
    for (let i=0;i<seg.nodes.length;i++){
      const el = seg.nodes[i];
      if (!el || el.tagName !== "BUTTON" || isResetterButton(el)) continue;

      const t = (el.textContent || "").trim().toLowerCase();
      const looksLikeTaskBtn =
        t === "prüfen" ||
        t.indexOf("zeige") !== -1 ||
        t.indexOf("lösung") !== -1 ||
        t.indexOf("auflös") !== -1 ||
        t.indexOf("hinweis") !== -1 ||
        t.indexOf("hint") !== -1;

      if (looksLikeTaskBtn){
        setNativeDisabled(el, false);
        try{ el.removeAttribute("disabled"); }catch(e){}
        try{ el.removeAttribute("aria-disabled"); }catch(e){}
        try{ el.style.pointerEvents = ""; }catch(e){}
      }
    }
  }

  function restoreFromSnapshot(snap){
    // Details zurück
    for (let i=0;i<snap.detailsSnaps.length;i++){
      const s = snap.detailsSnaps[i];
      const el = s.el;
      if (!el || !el.isConnected) continue;
      el.open = !!s.open;
      if (s.open) el.setAttribute("open", "");
      else el.removeAttribute("open");
    }

    // Controls zurück (+ Events, damit LiaScript/Elm wirklich den Zustand übernimmt)
    for (let i=0;i<snap.controlSnaps.length;i++){
      const s = snap.controlSnaps[i];
      const el = s.el;
      if (!el || !el.isConnected) continue;

      // disabled/readonly
      try{ el.disabled = !!s.disabled; }catch(e){}
      try{ if ("readOnly" in el) el.readOnly = !!s.readOnly; }catch(e){}

      if (s.tag === "select"){
        try{ el.selectedIndex = s.selectedIndex; }catch(e){}
        try{ el.value = s.value; }catch(e){}
        fire(el, "change");
      }
      else if (s.tag === "textarea"){
        setNativeValue(el, s.value);
        try{ el.defaultValue = (s.defaultValue == null ? s.value : s.defaultValue); }catch(e){}
        fire(el, "input");
        fire(el, "change");
      }
      else if (s.tag === "input"){
        if (s.type === "checkbox" || s.type === "radio"){
          setNativeChecked(el, s.checked);
          try{ el.defaultChecked = !!s.defaultChecked; }catch(e){}
          fire(el, "change");
        } else {
          setNativeValue(el, s.value);
          try{ el.defaultValue = (s.defaultValue == null ? s.value : s.defaultValue); }catch(e){}
          fire(el, "input");
          fire(el, "change");
        }
      }
    }

    // Buttons: initial disabled-Zustand wiederherstellen (aber nicht kaputt-deaktivieren)
    for (let i=0;i<snap.buttonSnaps.length;i++){
      const s = snap.buttonSnaps[i];
      const el = s.el;
      if (!el || !el.isConnected) continue;

      setNativeDisabled(el, !!s.disabled);
      if (!s.disabled) {
        try{ el.removeAttribute("disabled"); }catch(e){}
      }

      if (s.ariaDisabled == null) {
        try{ el.removeAttribute("aria-disabled"); }catch(e){}
      } else {
        try{ el.setAttribute("aria-disabled", s.ariaDisabled); }catch(e){}
      }
    }
  }

  function resetByButton(btn){
    applyAccent();

    const rootEl = getMainRoot();
    if (!rootEl) return;

    const segMap = buildSegments(rootEl);
    const seg = segMap.get(btn);
    if (!seg) return;

    let info = REG.btnInfo.get(btn);
    if (!info){
      info = { snap: null };
      REG.btnInfo.set(btn, info);
    }
    if (!info.snap){
      info.snap = snapshotSegment(seg);
    }

    // 1) falls es intern einen Retry/Reset gibt, zuerst klicken
    tryClickInternalRetry(seg);

    // 2) Ergebnis-/Status-Dekorationen entfernen (ohne data-text-* etc zu zerstören)
    for (let i=0;i<seg.nodes.length;i++){
      stripEphemeral(seg.nodes[i]);
    }

    // 3) initiale Werte/States zurück (mit native-setter + Events -> gegen Geisterwerte)
    restoreFromSnapshot(info.snap);

    // 4) LiaScript-Taskbuttons wieder freischalten (Prüfen/Lösung/Hint)
    forceEnableTaskButtons(seg);
  }

  // =========================
  // Scan + Delegation (damit Slide 2/3 immer geht)
  // =========================
  function scan(){
    applyAccent();
    const rootEl = getMainRoot();
    if (!rootEl) return;

    const segMap = buildSegments(rootEl);

    // neue Buttons: Snapshot nach "settle" ziehen
    segMap.forEach(function(seg, btn){
      if (!REG.btnInfo.has(btn)){
        REG.btnInfo.set(btn, { snap: null });

        // 1) früh (initialer Zustand)
        WIN.setTimeout(function(){
          const m = buildSegments(getMainRoot());
          const s = m.get(btn);
          const info = REG.btnInfo.get(btn);
          if (s && info && !info.snap){
            info.snap = snapshotSegment(s);
          }
        }, 250);

        // 2) spät (falls LiaScript UI-Teile lazy nachschiebt)
        WIN.setTimeout(function(){
          const m = buildSegments(getMainRoot());
          const s = m.get(btn);
          const info = REG.btnInfo.get(btn);
          if (s && info && !info.snap){
            info.snap = snapshotSegment(s);
          }
        }, 1500);
      }
    });
  }

  function scheduleScan(){
    if (REG.scanTimer) return;
    REG.scanTimer = WIN.setTimeout(function(){
      REG.scanTimer = null;
      scan();
    }, 60);
  }

  function onClick(ev){
    const t = ev.target;
    if (!t || !t.closest) return;
    const btn = t.closest("button.lia-resetter-btn");
    if (!btn) return;

    ev.preventDefault();
    ev.stopPropagation();

    resetByButton(btn);
  }

  function init(){
    if (REG.initedDocs.has(DOC)) return;
    REG.initedDocs.add(DOC);

    injectStyleInto(ROOT_DOC);
    injectStyleInto(DOC);
    applyAccent();

    // Event-Delegation: gilt automatisch auch für Seite 2/3 usw.
    DOC.addEventListener("click", onClick, true);

    // Beobachte komplette DOM-Änderungen (Slide-Wechsel ersetzt oft main/Content)
    const obs = new MutationObserver(scheduleScan);
    obs.observe(DOC.documentElement, { childList: true, subtree: true });

    // Initial
    WIN.setTimeout(scan, 50);
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



