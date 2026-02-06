<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: @resetter v0.0.1 — Range-Snapshot pro Segment (echter Initialzustand) + Range-Replace beim Reset => keine Geisterlösung, Buttons wieder lebendig; Overlay bleibt klickbar

@style
:root{
  /* LiaScript: häufig "r, g, b" in --color-highlight */
  --lia-resetter-accent: rgb(var(--color-highlight, 11, 95, 255));
}

/* unsichtbarer Platzhalter: reserviert exakt die Inline-Position */
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

/* echter Button (Overlay) */
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

  position: absolute !important;
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
    items: Object.create(null), // id -> { anchor, btn, root, endEl, templateFrag }
    scanT: 0,
    rafPos: 0
  });

  // =========================
  // Themefarbe robust (falls var leer)
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

      // fallback: echte Lia-Buttons
      const b = DOC.querySelector("button.lia-btn, .lia-btn, a.lia-btn");
      if (b){
        const bc = DOC.defaultView.getComputedStyle(b).color;
        if (bc){
          DOC.documentElement.style.setProperty("--lia-resetter-accent", bc);
          ROOT_DOC.documentElement.style.setProperty("--lia-resetter-accent", bc);
        }
      }
    }catch(e){}
  }

  // =========================
  // Segment-Grenze: bis nächste @resetter-Anchor oder nächste Überschrift
  // =========================
  function isHeading(el){
    return !!el && el.nodeType === 1 && /^H[1-6]$/.test(el.tagName);
  }
  function isAnchor(el){
    return !!el && el.nodeType === 1 && el.classList && el.classList.contains("lia-resetter-anchor");
  }

  function getRootFor(anchor){
    return (
      anchor.closest(".lia-slide") ||
      anchor.closest("section") ||
      DOC.querySelector("main") ||
      DOC.body
    );
  }

  function findEndMarker(anchor, root){
    try{
      const w = DOC.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null);
      w.currentNode = anchor;
      let n = null;
      while ((n = w.nextNode())){
        if (n === anchor) continue;
        if (isHeading(n) || isAnchor(n)) return n;
      }
    }catch(e){}
    return null;
  }

  function makeRange(anchor, root, endEl){
    const r = DOC.createRange();
    r.setStartAfter(anchor);
    if (endEl){
      r.setEndBefore(endEl);
    } else {
      r.setEnd(root, root.childNodes.length);
    }
    return r;
  }

  // optional: Baseline nur nehmen, wenn noch nicht "gelöst"
  function rangeLooksInteracted(range){
    try{
      const frag = range.cloneContents();
      const els = frag.querySelectorAll ? frag.querySelectorAll("*") : [];
      for (let i=0;i<els.length;i++){
        const el = els[i];
        if (el.classList && (el.classList.contains("solved") || el.classList.contains("failed"))) return true;
        // häufige runtime data flags (konservativ)
        for (let a=0;a<(el.attributes?el.attributes.length:0);a++){
          const n = (el.attributes[a].name || "").toLowerCase();
          if (n.includes("data-solved") || n.includes("data-failed") || n.includes("data-checked") || n.includes("data-state")) return true;
        }
      }
    }catch(e){}
    return false;
  }

  // =========================
  // Overlay Positionierung
  // =========================
  function positionOne(id){
    const it = REG.items[id];
    if (!it || !it.anchor || !it.btn || !it.anchor.isConnected) return;

    const r = it.anchor.getBoundingClientRect();
    const x = r.left + (WIN.pageXOffset || DOC.documentElement.scrollLeft || 0);
    const y = r.top  + (WIN.pageYOffset || DOC.documentElement.scrollTop  || 0);

    it.btn.style.left = x + "px";
    it.btn.style.top  = y + "px";
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
  // Reset = Range delete + insert Initial-Fragment
  // =========================
  function resetById(id){
    const it = REG.items[id];
    if (!it || !it.anchor || !it.anchor.isConnected) return;

    syncAccent();

    // Boundary live neu ermitteln (Slides tauschen DOM oft aus)
    const root  = getRootFor(it.anchor);
    const endEl = findEndMarker(it.anchor, root);
    const r = makeRange(it.anchor, root, endEl);

    // Falls Template noch nicht existiert (z.B. Anchor später gerendert) => jetzt snapshotten
    if (!it.templateFrag){
      if (!rangeLooksInteracted(r)){
        it.templateFrag = r.cloneContents();
      } else {
        // wenn schon interagiert: trotzdem "hard reset" auf aktuellen DOM-Stand
        it.templateFrag = r.cloneContents();
      }
    }

    // Jetzt wirklich zurücksetzen
    try{ r.deleteContents(); }catch(e){}

    // Wichtig: cloneNode(true), weil Fragment nur einmal insertbar ist
    try{
      const fresh = it.templateFrag.cloneNode(true);
      r.insertNode(fresh);
    }catch(e){}

    // nachziehen: LiaScript und Layout brauchen manchmal 1 Tick
    WIN.setTimeout(function(){
      scan();     // falls LiaScript neue Wrapper baut / Buttons neu auftauchen
      positionAll();
    }, 50);
  }

  // =========================
  // Scan: Anchors finden, Overlay-Button erzeugen, Template snapshotten
  // =========================
  function ensureButton(anchor){
    const id = anchor.getAttribute("data-resetter-id") || "";
    if (!id) return;

    let it = REG.items[id];
    if (!it) it = REG.items[id] = { anchor:null, btn:null, root:null, endEl:null, templateFrag:null };

    it.anchor = anchor;

    if (!it.btn){
      const btn = DOC.createElement("button");
      btn.type = "button";
      btn.className = "lia-resetter-btn";
      btn.textContent = "Neustart der Aufgabe";
      btn.setAttribute("data-resetter-id", id);

      btn.addEventListener("click", function(ev){
        ev.preventDefault();
        ev.stopPropagation();
        resetById(id);
      }, { capture:true, passive:false });

      (DOC.body || DOC.documentElement).appendChild(btn);
      it.btn = btn;
    }

    // Snapshot (wenn noch nicht vorhanden)
    if (!it.templateFrag){
      const root  = getRootFor(anchor);
      const endEl = findEndMarker(anchor, root);
      const r = makeRange(anchor, root, endEl);
      if (!rangeLooksInteracted(r)){
        it.templateFrag = r.cloneContents();
      } else {
        // Falls der Anchor erst nach Interaktion erscheint: lieber aktuellen Stand als baseline nehmen,
        // sonst resetten wir auf "kaputt" zurück.
        it.templateFrag = r.cloneContents();
      }
    }

    positionOne(id);
  }

  function scan(){
    syncAccent();

    const anchors = Array.from(DOC.querySelectorAll(".lia-resetter-anchor[data-resetter-id]"));
    const seen = Object.create(null);

    for (let i=0;i<anchors.length;i++){
      const a = anchors[i];
      const id = a.getAttribute("data-resetter-id") || "";
      if (!id) continue;
      seen[id] = true;
      ensureButton(a);
    }

    // cleanup: entfernte Anchors -> Button entfernen
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

    // DOM-Wechsel: Slides/Seite2 etc.
    try{
      const mo = new MutationObserver(function(){
        scheduleScan();
        positionAll();
      });
      mo.observe(DOC.documentElement, { childList:true, subtree:true });
    }catch(e){}
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



