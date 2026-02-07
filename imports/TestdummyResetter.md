<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Resetter v0.0.1 — Segment neu rendern (LIASCRIPT) + statisches Originalsegment per DOM-Range entfernen (wrapper-sicher), Salt unsichtbar

@style
.lia-resetter-marker{ display:none !important; }
.lia-resetter-salt{ display:none !important; }
output.lia-resetter-out{ display:block !important; }

button.lia-resetter-btn{
  background: transparent !important;
  border: 1px solid currentColor !important;
  color: rgb(var(--color-highlight, 11, 95, 255)) !important;

  font-size: 0.75em !important;
  line-height: 1 !important;
  height: 1.15em !important;

  padding: 0 0.45em !important;
  margin: 0 0 0 0.6em !important;

  border-radius: 0.35em !important;
  display: inline-flex !important;
  align-items: center !important;
  vertical-align: baseline !important;

  cursor: pointer !important;
  user-select: none !important;
  white-space: nowrap !important;
  touch-action: manipulation !important;
}
button.lia-resetter-btn:hover,
button.lia-resetter-btn:focus{
  text-decoration: underline !important;
  outline: none !important;
}
@end


@onload
(function(){

  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const DOC  = document;

  const REGKEY = "__LIA_RESETTER_V001__";
  const REG = ROOT[REGKEY] || (ROOT[REGKEY] = {
    items: Object.create(null),      // uid -> { send, marker, seg, salt }
    mdLines: null,
    mdPromise: null,
    guardDocs: new WeakSet()
  });

  // ---------------------------
  // Helpers
  // ---------------------------
  function selAttr(v){
    return String(v || "").replace(/\\/g,"\\\\").replace(/"/g,'\\"');
  }

  function getCourseUrl(){
    try{
      const s = (ROOT.location && ROOT.location.search) ? ROOT.location.search : (location.search || "");
      if (!s || s.length < 2) return null;

      const raw = s.slice(1);
      const first = raw.split("&")[0];
      const dec = decodeURIComponent(first);

      if (/^https?:\/\//i.test(dec)) return dec;

      try{
        const usp = new URLSearchParams(raw);
        const cand = usp.get("url") || usp.get("src") || usp.get("course") || usp.get("md");
        if (cand && /^https?:\/\//i.test(cand)) return decodeURIComponent(cand);
      }catch(e){}

      return null;
    }catch(e){
      return null;
    }
  }

  async function ensureMarkdown(){
    if (REG.mdLines) return REG.mdLines;
    if (REG.mdPromise) return REG.mdPromise;

    const url = getCourseUrl();
    REG.mdPromise = (async () => {
      if (!url) return [];
      const res = await fetch(url, { cache: "no-store" });
      const txt = await res.text();
      REG.mdLines = String(txt || "").split(/\r?\n/);
      return REG.mdLines;
    })().catch(() => {
      REG.mdLines = [];
      return REG.mdLines;
    });

    return REG.mdPromise;
  }

  function isHeadingLine(line){
    return /^[ \t]*#{1,6}\s+/.test(line || "");
  }
  function isResetterLine(line){
    return /@resetter\b/.test(line || "");
  }

  function markerFor(uid){
    return DOC.querySelector('.lia-resetter-marker[data-resetter-uid="'+selAttr(uid)+'"]');
  }

  // MAX lineGoto(...) aus dem "Aufgabe X:"-Absatz
  function approxLineFromMarker(marker){
    try{
      const p = marker && (marker.closest("p") || marker.closest(".lia-paragraph"));
      if (!p) return null;

      let best = null;
      p.querySelectorAll('[ondblclick*="lineGoto("]').forEach(el => {
        const s = el.getAttribute("ondblclick") || "";
        const m = s.match(/lineGoto\((\d+)\)/);
        if (!m) return;
        const n = parseInt(m[1], 10);
        if (!Number.isNaN(n)) best = (best == null) ? n : Math.max(best, n);
      });
      return best;
    }catch(e){
      return null;
    }
  }

  function findResetterLineIndex(lines, approx){
    if (!lines || !lines.length || approx == null) return null;

    let idx = approx;
    if (idx >= lines.length && (idx - 1) >= 0) idx = idx - 1;

    const lo = Math.max(0, idx - 12);
    const hi = Math.min(lines.length - 1, idx + 12);

    for (let i = idx; i >= lo; i--){
      if (isResetterLine(lines[i])) return i;
    }
    for (let i = idx + 1; i <= hi; i++){
      if (isResetterLine(lines[i])) return i;
    }
    return null;
  }

  function extractSegment(lines, resetIdx){
    const start = resetIdx + 1;
    let end = lines.length;

    for (let i = start; i < lines.length; i++){
      if (isResetterLine(lines[i]) || isHeadingLine(lines[i])){
        end = i;
        break;
      }
    }
    return lines.slice(start, end).join("\n");
  }

  // ---------------------------
  // DOM-Range Cleanup (wrapper-sicher)
  // Entfernt alles nach dem "Aufgabe X:"-Absatz bis vor den nächsten
  // Resetter-Marker oder Heading (innerhalb der aktuellen Folie/Section, sonst main).
  // ---------------------------
  function findStopAnchor(scope, pStart){
    const tw = DOC.createTreeWalker(scope, NodeFilter.SHOW_ELEMENT, null);
    let n, started = false;

    while ((n = tw.nextNode())){
      if (!started){
        if (n === pStart) started = true;
        continue;
      }

      // nächster Resetter
      if (n.classList && n.classList.contains("lia-resetter-marker")){
        return n.closest("p") || n.closest(".lia-paragraph") || n;
      }

      // nächste Überschrift
      if (/^H[1-6]$/.test(n.tagName) || n.tagName === "HEADER"){
        return n;
      }
    }
    return null;
  }

  function cleanupOriginal(uid){
    const it = REG.items[uid];
    if (!it || !it.marker) return false;

    const marker = it.marker;
    const pStart = marker.closest("p") || marker.closest(".lia-paragraph");
    if (!pStart) return false;

    const scope =
      marker.closest("section") ||
      marker.closest("main") ||
      DOC.querySelector("main") ||
      DOC.body;

    const stop = findStopAnchor(scope, pStart);

    try{
      const r = DOC.createRange();
      r.setStartAfter(pStart);

      if (stop){
        r.setEndBefore(stop);
      } else {
        const last = scope.lastChild;
        if (!last) return false;
        r.setEndAfter(last);
      }

      if (r.collapsed) return false;

      // Wichtig: extract (nicht nur delete) ist stabiler bei Wrappern.
      // Inhalt wird aus DOM entfernt und verworfen.
      r.extractContents();
      return true;
    }catch(e){
      return false;
    }
  }

  function cleanupLoop(uid){
    let tries = 0;
    const step = () => {
      tries++;
      const ok = cleanupOriginal(uid);
      if (ok) return;
      if (tries > 80) return;
      setTimeout(step, 50);
    };
    step();
  }

  // ---------------------------
  // Render / Reset = Segment neu parsen
  // ---------------------------
  function render(uid){
    const it = REG.items[uid];
    if (!it || !it.send) return;

    it.salt = (it.salt || 0) + 1;

    const salt = '<span class="lia-resetter-salt" data-resetter-salt="'+uid+'-'+it.salt+'"></span>\n\n';
    it.send.output("LIASCRIPT:" + salt + (it.seg || ""));

    // Danach: statisches Originalsegment wegschneiden
    cleanupLoop(uid);
  }

  ROOT.__liaResetterV001 = ROOT.__liaResetterV001 || {
    bind: async function(uid, send){
      uid = String(uid);

      const marker = markerFor(uid);
      if (!marker) return;

      const it = REG.items[uid] || (REG.items[uid] = {});
      it.send = send;
      it.marker = marker;

      const lines  = await ensureMarkdown();
      const approx = approxLineFromMarker(marker);
      const rIdx   = findResetterLineIndex(lines, approx);

      it.seg = (rIdx == null) ? "" : extractSegment(lines, rIdx);

      render(uid);
    },

    reset: function(uid){
      render(String(uid));
    }
  };

  // ---------------------------
  // Click Guard (Capture) – verhindert Slide-Sprung
  // ---------------------------
  function installGuard(){
    if (REG.guardDocs.has(DOC)) return;
    REG.guardDocs.add(DOC);

    const handler = (ev) => {
      const t = ev && ev.target;
      if (!t || !t.closest) return;

      const btn = t.closest("button.lia-resetter-btn");
      if (!btn) return;

      const uid = btn.getAttribute("data-resetter-btn");
      if (!uid) return;

      ev.preventDefault();
      ev.stopPropagation();
      if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();

      ROOT.__liaResetterV001.reset(uid);
    };

    ["pointerdown","mousedown","touchstart","click"].forEach(type => {
      try { DOC.addEventListener(type, handler, true); } catch(e){}
      try { ROOT.document.addEventListener(type, handler, true); } catch(e){}
    });
  }

  installGuard();

})();
@end


@resetter: @resetter_(@uid)
@resetter_
<span class="lia-resetter-marker" data-resetter-uid="@0" aria-hidden="true"></span>
<button class="lia-resetter-btn" type="button" data-resetter-btn="@0">Neustart der Aufgabe</button>

<output class="lia-resetter-out" modify="false">
<script run-once="false" modify="false">
(function(){
  try{
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    if (w.__liaResetterV001 && typeof send !== "undefined"){
      w.__liaResetterV001.bind("@0", send);
    }
  }catch(e){}
  return "LIA: wait";
})();
</script>
</output>
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



