<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Aufgabenresetter v0.0.1 — Segment-Neurendern wie Reload (lokal) — Klick via Capture (zuverlässig) — send wird bei Slide-Rebuild neu gebunden — keine Dopplung (Original-Siblings entfernen)

@style
.lia-resetter-marker{ display:none !important; }

button.lia-resetter-btn{
  appearance: none !important;
  -webkit-appearance: none !important;

  background: transparent !important;
  border: 1px solid currentColor !important;

  /* Themefarbe (wie in deinen anderen Projekten) */
  color: rgb(var(--color-highlight, 11, 95, 255)) !important;

  font-size: 0.75em !important;
  line-height: 1 !important;
  height: 1.15em !important;
  box-sizing: border-box !important;

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
  pointer-events: auto !important;
}
button.lia-resetter-btn:hover,
button.lia-resetter-btn:focus{
  text-decoration: underline !important;
  outline: none !important;
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

  const ROOT = getRootWindow();
  const DOC  = document;
  const WIN  = window;

  const KEY = "__LIA_RESETTER_V001__";
  const API = ROOT[KEY] || (ROOT[KEY] = {
    // uid -> send
    sendByUid: Object.create(null),

    // uid -> cached segment markdown
    segByUid: Object.create(null),

    // uid -> salt counter
    saltByUid: Object.create(null),

    // per-Dokument: welche uids wurden schon „entdoppelt“
    removedByDoc: new WeakMap(),

    // markdown source cache
    srcLines: null,
    srcPromise: null,

    // click-guard per doc
    guardDocs: new WeakSet()
  });

  // auch im Content-Window verfügbar
  WIN[KEY] = API;

  function escAttr(s){
    s = String(s || "");
    // für Attribut-Selector in "..."
    return s.replace(/\\/g,"\\\\").replace(/"/g,'\\"');
  }

  // =========================
  // Kurs-URL ermitteln
  // =========================
  function getCourseUrl(){
    try{
      const href = String(ROOT.location && ROOT.location.href ? ROOT.location.href : WIN.location.href);
      const q = href.indexOf("?");
      if (q < 0) return null;

      let part = href.slice(q + 1);
      const h = part.indexOf("#");
      if (h >= 0) part = part.slice(0, h);

      part = part.trim();
      if (!part) return null;

      // direkt rohe URL
      const dec = decodeURIComponent(part);
      if (/^https?:\/\//i.test(dec)) return dec;

      // url=...
      try{
        const usp = new URLSearchParams(part);
        const cand = usp.get("url") || usp.get("src") || usp.get("course") || usp.get("md");
        if (cand && /^https?:\/\//i.test(cand)) return decodeURIComponent(cand);
      }catch(e){}

      return null;
    }catch(e){
      return null;
    }
  }

  function ensureSource(){
    if (API.srcLines) return Promise.resolve(API.srcLines);
    if (API.srcPromise) return API.srcPromise;

    const url = getCourseUrl();
    API.srcPromise = (async () => {
      if (!url) return [];
      const res = await fetch(url, { cache: "no-store" });
      const txt = await res.text();
      API.srcLines = String(txt || "").split(/\r?\n/);
      return API.srcLines;
    })().catch(() => {
      API.srcLines = [];
      return API.srcLines;
    });

    return API.srcPromise;
  }

  // =========================
  // lineGoto-Zeile aus DOM holen (robust: max lineGoto in dem Absatz)
  // =========================
  function getApproxLineNo(scriptEl){
    try{
      const hostP = scriptEl.closest("p") || scriptEl.parentElement;
      if (!hostP) return null;

      const spans = hostP.querySelectorAll('[ondblclick*="lineGoto("]');
      let best = null;
      spans.forEach(sp => {
        const s = sp.getAttribute("ondblclick") || "";
        const m = s.match(/lineGoto\((\d+)\)/);
        if (!m) return;
        const n = parseInt(m[1], 10);
        if (!Number.isNaN(n)) best = (best == null ? n : Math.max(best, n));
      });

      return best;
    }catch(e){
      return null;
    }
  }

  function isHeadingLine(line){
    return /^[ \t]*#{1,6}\s+/.test(line || "");
  }
  function isResetterLine(line){
    return /@resetter\b/.test(line || "");
  }

  // Suche in der Nähe nach der echten @resetter-Zeile (lineGoto kann ±1..±3 abweichen)
  function findResetterLineIndex(lines, approx){
    if (!lines || !lines.length || typeof approx !== "number" || Number.isNaN(approx)) return null;

    let idx = approx;
    if (idx >= lines.length && idx - 1 >= 0) idx = idx - 1;

    const lo = Math.max(0, idx - 6);
    const hi = Math.min(lines.length - 1, idx + 6);

    // bevorzugt nach oben (meist steht @resetter auf der gleichen Zeile wie "Aufgabe X:")
    for (let i = idx; i >= lo; i--){
      if (isResetterLine(lines[i])) return i;
    }
    for (let i = idx + 1; i <= hi; i++){
      if (isResetterLine(lines[i])) return i;
    }
    return idx;
  }

  function segmentFromLine(lines, approxLine){
    const rLine = findResetterLineIndex(lines, approxLine);
    if (rLine == null) return "";

    const start = Math.min(lines.length, rLine + 1);

    let end = lines.length;
    for (let i = start; i < lines.length; i++){
      if (isResetterLine(lines[i]) || isHeadingLine(lines[i])){
        end = i;
        break;
      }
    }
    return lines.slice(start, end).join("\n");
  }

  // =========================
  // Dopplung entfernen: alles NACH dem Marker-Absatz bis zum nächsten Marker/Heading löschen
  // =========================
  function removedSet(){
    let s = API.removedByDoc.get(DOC);
    if (!s){
      s = new Set();
      API.removedByDoc.set(DOC, s);
    }
    return s;
  }

  function findMarker(uid, scriptEl){
    // bevorzugt: direkt vor dem Script
    try{
      const prev = scriptEl.previousElementSibling;
      if (prev && prev.classList && prev.classList.contains("lia-resetter-marker")) return prev;
    }catch(e){}

    try{
      return DOC.querySelector('.lia-resetter-marker[data-resetter-uid="'+ escAttr(uid) +'"]');
    }catch(e){
      return null;
    }
  }

  function isStopNode(node){
    if (!node) return true;
    if (node.nodeType === 1){
      const el = node;
      if (/^H[1-6]$/.test(el.tagName)) return true;
      if (el.classList && el.classList.contains("lia-resetter-marker")) return true;
      if (el.querySelector && el.querySelector(".lia-resetter-marker")) return true;
    }
    return false;
  }

  function removeOriginal(uid, scriptEl){
    const s = removedSet();
    if (s.has(uid)) return;

    const marker = findMarker(uid, scriptEl);
    if (!marker) return;

    const hostP = marker.closest("p") || marker;
    if (!hostP || !hostP.parentNode) return;

    let n = hostP.nextSibling;
    if (!n) return;

    while (n){
      const next = n.nextSibling;
      if (isStopNode(n)) break;

      try{
        if (n.parentNode) n.parentNode.removeChild(n);
      }catch(e){}

      n = next;
    }

    s.add(uid);
  }

  // =========================
  // Render/Reset
  // =========================
  function render(uid){
    const send = API.sendByUid[uid];
    if (!send) return;

    const salt = (API.saltByUid[uid] = (API.saltByUid[uid] || 0) + 1);
    const seg  = API.segByUid[uid] || "";

    // Salt-Kommentar: unsichtbar, aber ändert den gerenderten Block (Persistenz-Key-Brecher)
    const out =
      '<button class="lia-resetter-btn" type="button" data-resetter-btn="'+ uid +'">Neustart der Aufgabe</button>\n\n' +
      '<!-- resetter:'+ uid +':'+ salt +' -->\n\n' +
      seg;

    send.output("LIASCRIPT:" + out);
  }

  API.reset = function(uid){
    uid = String(uid);
    render(uid);
  };

  API.bind = function(send, uid, scriptEl){
    uid = String(uid);

    API.sendByUid[uid] = send;

    // Segment nur einmal pro uid aus Quelle ziehen
    if (!API.segByUid[uid]){
      ensureSource().then(lines => {
        const approx = getApproxLineNo(scriptEl);
        API.segByUid[uid] = segmentFromLine(lines, approx);
        render(uid);
        // nach erstem Render entdoppeln (Original raus)
        setTimeout(() => removeOriginal(uid, scriptEl), 30);
      });
    } else {
      render(uid);
      setTimeout(() => removeOriginal(uid, scriptEl), 30);
    }
  };

  // =========================
  // Klick-Guard (Capture): Button -> reset(uid)
  // =========================
  function installGuard(){
    if (API.guardDocs.has(DOC)) return;
    API.guardDocs.add(DOC);

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

      API.reset(uid);
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
<script run-once="false" modify="false">
(function(){
  const uid = "@0";
  const api = window.__LIA_RESETTER_V001__ || (window.parent && window.parent.__LIA_RESETTER_V001__);
  if (api && api.bind && typeof send !== "undefined") api.bind(send, uid, document.currentScript);
  return "LIA: wait";
})();
</script>
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



