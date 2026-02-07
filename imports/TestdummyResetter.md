<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Aufgabenresetter v0.0.1 — Segment-ReRender wie Seitenreload (lokal); Segment via lineGoto-Zeile; FIX: keine Dopplung (Original-Siblings entfernen); FIX: Segment endet vor kompletter nächster @resetter-Zeile

@style
.lia-resetter-marker{ display:none !important; }

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

  // =========================
  // Registry (import-sicher)
  // =========================
  const REGKEY = "__LIA_RESETTER_V001__";
  const REG = ROOT[REGKEY] || (ROOT[REGKEY] = {
    guardInstalled: false,

    // uid -> salt
    salts: Object.create(null),

    // uid -> renderer fn
    renderers: Object.create(null),

    // uid -> original already removed?
    removed: Object.create(null),

    // source cache
    srcUrl: null,
    srcLines: null,
    srcPromise: null
  });

  // =========================
  // Click-Guard: verhindert Slide-Advance
  // =========================
  function installGuard(){
    if (REG.guardInstalled) return;
    REG.guardInstalled = true;

    const handler = (ev) => {
      const t = ev && ev.target;
      if (!t || !t.closest) return;

      const btn = t.closest("button.lia-resetter-btn");
      if (!btn) return;

      ev.preventDefault();
      ev.stopPropagation();
      if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();

      const uid = btn.getAttribute("data-resetter-btn") || "";
      const fn  = REG.renderers[uid];
      if (typeof fn === "function") fn();
    };

    ["pointerdown","mousedown","click","touchstart"].forEach(type => {
      try { DOC.addEventListener(type, handler, true); } catch(e){}
      try { ROOT.document.addEventListener(type, handler, true); } catch(e){}
    });
  }

  // =========================
  // Kurs-URL (raw) aus Lia-URL
  // =========================
  function getCourseUrl(){
    try{
      const s = (ROOT.location && ROOT.location.search) ? ROOT.location.search : (location.search || "");
      if (!s || s.length < 2) return null;

      const raw = s.slice(1);
      const first = raw.split("&")[0];
      const decFirst = decodeURIComponent(first);

      if (/^https?:/i.test(decFirst)) return decFirst;

      const usp = new URLSearchParams(raw);
      for (const k of ["url","course","src","source"]){
        if (usp.has(k)) return decodeURIComponent(usp.get(k) || "");
      }
      return decFirst;
    } catch(e){
      return null;
    }
  }

  function ensureSource(){
    if (REG.srcLines && Array.isArray(REG.srcLines)) return Promise.resolve(REG.srcLines);
    if (REG.srcPromise) return REG.srcPromise;

    const url = getCourseUrl();
    REG.srcUrl = url;

    REG.srcPromise = (url ? fetch(url, { cache: "no-store" }).then(r => r.text()) : Promise.resolve(""))
      .then(txt => {
        REG.srcLines = String(txt || "").split("\n");
        return REG.srcLines;
      })
      .catch(_ => {
        REG.srcLines = [];
        return REG.srcLines;
      });

    return REG.srcPromise;
  }

  // =========================
  // LineNo aus DOM (window.LIA.lineGoto(n))
  // =========================
  function getLineNoFromScript(scriptEl){
    try{
      const hostP = scriptEl.closest("p") || scriptEl.parentElement;
      if (!hostP) return null;

      const any = hostP.querySelector('[ondblclick*="lineGoto("]') || hostP.closest('[ondblclick*="lineGoto("]');
      if (!any) return null;

      const s = any.getAttribute("ondblclick") || "";
      const m = s.match(/lineGoto\((\d+)\)/);
      if (!m) return null;
      return parseInt(m[1], 10);
    }catch(e){
      return null;
    }
  }

  // =========================
  // Segment aus Quelltext: ab NACH @resetter-Zeile
  // bis vor nächste Zeile mit @resetter oder nächste Heading-Zeile (#...)
  // =========================
  function isHeadingLine(line){
    return /^[ \t]*#{1,6}\s+/.test(line || "");
  }
  function isResetterLine(line){
    return /@resetter\b/.test(line || "");
  }

  function segmentByLine(lines, lineNo){
    if (!lines || !lines.length || typeof lineNo !== "number" || Number.isNaN(lineNo)) return "";

    let idx = lineNo;

    // lineGoto kann 0- oder 1-basiert sein
    if (idx >= lines.length && (idx - 1) >= 0 && (idx - 1) < lines.length) idx = idx - 1;

    // Start ist nächste Zeile
    let start = idx + 1;
    if (start < 0) start = 0;
    if (start > lines.length) start = lines.length;

    // Ende: vor nächster @resetter-Zeile oder vor nächster Heading-Zeile
    let end = lines.length;
    for (let i = start; i < lines.length; i++){
      const ln = lines[i];
      if (isResetterLine(ln) || isHeadingLine(ln)){
        end = i; // GANZE ZEILE ausgeschlossen
        break;
      }
    }

    return lines.slice(start, end).join("\n");
  }

  // =========================
  // Original nach dem Marker-P entfernen (Siblings)
  // =========================
  function findMarker(uid, scriptEl){
    try{
      const prev = scriptEl.previousElementSibling;
      if (prev && prev.classList && prev.classList.contains("lia-resetter-marker")) return prev;
    }catch(e){}
    try{
      return DOC.querySelector('.lia-resetter-marker[data-resetter-uid="'+ String(uid).replace(/"/g,'\\"') +'"]');
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

  function removeOriginalSiblings(uid, scriptEl){
    if (REG.removed[uid]) return true;

    const marker = findMarker(uid, scriptEl);
    if (!marker) return false;

    const hostP = marker.closest("p") || marker;
    if (!hostP || !hostP.parentNode) return false;

    let n = hostP.nextSibling;
    if (!n) {
      // noch nichts gerendert -> später nochmal
      return false;
    }

    // Wenn sofort Stop: Segment ist leer => als entfernt markieren
    if (isStopNode(n)){
      REG.removed[uid] = true;
      return true;
    }

    let removedAny = false;

    while (n){
      const next = n.nextSibling;

      if (isStopNode(n)) break;

      try{
        // Textnodes (Whitespace) ebenfalls entfernen, um „Lücken“ zu vermeiden
        if (n.parentNode) {
          n.parentNode.removeChild(n);
          removedAny = true;
        }
      }catch(e){}

      n = next;
    }

    if (removedAny){
      REG.removed[uid] = true;
      return true;
    }

    return false;
  }

  function removeOriginalLoop(uid, scriptEl){
    let tries = 0;
    const step = () => {
      tries++;
      if (removeOriginalSiblings(uid, scriptEl)) return;
      if (tries > 60) return; // ~3s
      setTimeout(step, 50);
    };
    step();
  }

  // =========================
  // Output bauen (Salt bricht Persistenz)
  // =========================
  function buildOutput(uid, segmentText){
    const salt = (REG.salts[uid] = (REG.salts[uid] || 0) + 1);
    return (
      "LIASCRIPT:" +
      '<button class="lia-resetter-btn" type="button" data-resetter-btn="'+ uid +'">Neustart der Aufgabe</button>\n\n' +
      '<span style="display:none" data-resetter-salt="'+ uid +'-'+ salt +'"></span>\n\n' +
      (segmentText || "")
    );
  }

  // =========================
  // Bootstrap pro @resetter
  // =========================
  function bootstrap(uid, send, scriptEl){
    installGuard();

    // Button sofort anzeigen (damit beim ersten Betreten sichtbar)
    send.output(buildOutput(uid, ""));

    // Quelle laden, Segment bestimmen, rendern, dann Original entfernen
    ensureSource().then(function(lines){
      const lineNo = getLineNoFromScript(scriptEl);
      const seg = segmentByLine(lines, lineNo);

      const render = () => {
        send.output(buildOutput(uid, seg));
        removeOriginalLoop(uid, scriptEl);
      };

      REG.renderers[uid] = render;
      render();
    });
  }

  ROOT.__LIA_RESETTER_BOOT_V001__ = bootstrap;

})();
@end


@resetter: @resetter_(@uid)
@resetter_
<span class="lia-resetter-marker" data-resetter-uid="@0" aria-hidden="true"></span>
<script run-once="true" modify="false">
(function(){
  const UID = "@0";

  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const boot = ROOT.__LIA_RESETTER_BOOT_V001__;

  if (typeof boot !== "function") return "LIA: stop";
  if (typeof send === "undefined" || !send || !send.output) return "LIA: stop";

  boot(UID, send, document.currentScript);

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



