<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Resetter v0.0.1 — Segment-ReRender (lokal) + Original-Block entfernen

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
  touch-action: manipulation !important;
}
button.lia-resetter-btn:hover,
button.lia-resetter-btn:focus{
  text-decoration: underline !important;
  outline: none !important;
}
@end


@onload
(function () {

  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const DOC  = document;

  const KEY = "__LIA_RESETTER_V001__";
  const API = ROOT[KEY] || (ROOT[KEY] = {
    // uid -> { send, hostOutput, marker, seg, salt, cleaned }
    items: Object.create(null),

    // course markdown cache
    mdLines: null,
    mdPromise: null,

    // click guard installed?
    clickInstalled: false
  });

  // ---------------------------
  // helpers
  // ---------------------------
  function escSelAttr(v){
    return String(v || "").replace(/\\/g,"\\\\").replace(/"/g,'\\"');
  }

  function getCourseUrl(){
    // Lia: ?<rawUrl>#...
    let s = "";
    try { s = (ROOT.location && ROOT.location.search) ? ROOT.location.search : ""; } catch(e){}
    if (!s) { try { s = location.search || ""; } catch(e){} }
    if (!s || s.length < 2) return null;

    const raw = s.slice(1);
    const cut = raw.split("&")[0];
    const dec = decodeURIComponent(cut);

    if (/^https?:\/\//i.test(dec)) return dec;

    // url=... fallback
    try{
      const usp = new URLSearchParams(raw);
      const cand = usp.get("url") || usp.get("src") || usp.get("course") || usp.get("md");
      if (cand && /^https?:\/\//i.test(cand)) return decodeURIComponent(cand);
    }catch(e){}

    return null;
  }

  async function ensureMarkdown(){
    if (API.mdLines) return API.mdLines;
    if (API.mdPromise) return API.mdPromise;

    const url = getCourseUrl();
    API.mdPromise = (async () => {
      if (!url) return [];
      const res = await fetch(url, { cache: "no-store" });
      const txt = await res.text();
      API.mdLines = String(txt || "").split(/\r?\n/);
      return API.mdLines;
    })().catch(() => {
      API.mdLines = [];
      return API.mdLines;
    });

    return API.mdPromise;
  }

  function isHeadingLine(line){
    return /^[ \t]*#{1,6}\s+/.test(line || "");
  }
  function isResetterLine(line){
    return /@resetter\b/.test(line || "");
  }

  function findMarker(uid){
    return DOC.querySelector('.lia-resetter-marker[data-resetter-uid="'+escSelAttr(uid)+'"]');
  }

  function getApproxLine(marker){
    // nimm die MAX lineGoto(...) aus dem Absatz mit "Aufgabe X: ..."
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

    const lo = Math.max(0, idx - 10);
    const hi = Math.min(lines.length - 1, idx + 10);

    for (let i = idx; i >= lo; i--){
      if (isResetterLine(lines[i])) return i;
    }
    for (let i = idx + 1; i <= hi; i++){
      if (isResetterLine(lines[i])) return i;
    }
    return null;
  }

  function segmentFrom(lines, resetLineIdx){
    const start = resetLineIdx + 1;
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
  // cleanup: entferne den statischen Original-Block unterhalb des Output-Hosts
  // (bis zur nächsten Überschrift oder zum nächsten Resetter-Marker)
  // ---------------------------
  function isStopNode(n){
    if (!n) return true;
    if (n.nodeType !== 1) return false;

    const el = n;
    if (/^H[1-6]$/.test(el.tagName)) return true;
    if (el.tagName === "HEADER") return true;

    if (el.classList && el.classList.contains("lia-resetter-marker")) return true;
    if (el.querySelector && el.querySelector(".lia-resetter-marker")) return true;

    return false;
  }

  function cleanup(uid){
    const it = API.items[uid];
    if (!it || it.cleaned) return;

    // Scope: aktuelle Folie/Section (Presentation-safe)
    const scope = (it.marker && it.marker.closest("section")) || DOC.querySelector("main") || DOC.body;

    // Start: direkt NACH unserem Output-Host (nicht nach dem Aufgabe-Absatz!)
    const host = it.hostOutput;
    if (!host || !host.parentNode) return;

    let n = host.nextSibling;
    if (!n) return;

    // solange entfernen, bis Stop (nächster Marker/Heading)
    while (n){
      const next = n.nextSibling;

      if (scope !== DOC.body && !scope.contains(n)) break;
      if (isStopNode(n)) break;

      try{
        // whitespace textnodes ebenfalls entfernen
        if (n.parentNode) n.parentNode.removeChild(n);
      }catch(e){}

      n = next;
    }

    it.cleaned = true;
  }

  function cleanupLoop(uid){
    let tries = 0;
    const step = () => {
      tries++;
      cleanup(uid);
      if (API.items[uid] && API.items[uid].cleaned) return;
      if (tries > 60) return;
      setTimeout(step, 50);
    };
    step();
  }

  // ---------------------------
  // render / reset
  // ---------------------------
  function render(uid){
    const it = API.items[uid];
    if (!it || !it.send) return;

    const salt = (it.salt = (it.salt || 0) + 1);
    const seg = it.seg || "";

    // Salt-Kommentar ändert den Block ⇒ Lia parst neu
    const out = `<!--resetter:${uid}:${salt}-->\n\n` + seg;

    it.send.output("LIASCRIPT:" + out);

    // nach Render Dopplung entfernen
    cleanupLoop(uid);
  }

  API.reset = function(uid){
    render(String(uid));
  };

  // ---------------------------
  // bind (vom @resetter-Script aufgerufen)
  // ---------------------------
  API.bind = async function(uid, send, scriptEl){
    uid = String(uid);

    const marker = findMarker(uid);
    if (!marker) return;

    // hostOutput: das Output-Element, das zu diesem Script gehört
    // (Lia packt Script-Ausgaben in ein <output> um den Script-Block herum)
    let host = null;
    try{
      host = scriptEl && (scriptEl.closest("output") || scriptEl.parentElement);
    }catch(e){}

    const it = API.items[uid] || (API.items[uid] = {});
    it.send = send;
    it.marker = marker;
    it.hostOutput = host;
    it.cleaned = false;          // bei Slide-Rebuild wieder neu schneiden

    // Segment neu bestimmen (Slide-Rebuild kann lineGoto/Offsets ändern)
    const lines = await ensureMarkdown();
    const approx = getApproxLine(marker);
    const rIdx = findResetterLineIndex(lines, approx);

    it.seg = (rIdx == null) ? "" : segmentFrom(lines, rIdx);

    render(uid);
  };

  // ---------------------------
  // Click handler (CAPTURE): immer zuverlässig, kein inline onclick
  // ---------------------------
  function installClick(){
    if (API.clickInstalled) return;
    API.clickInstalled = true;

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

  installClick();

})();
@end


@resetter: @resetter_(@uid)
@resetter_
<span class="lia-resetter-marker" data-resetter-uid="@0" aria-hidden="true"></span>
<button class="lia-resetter-btn" type="button" data-resetter-btn="@0">Neustart der Aufgabe</button>

<script run-once="false" modify="false">
(function(){
  // wichtig: dieses Script ist der "Host" — sein send.output rendert den Segmentblock
  try{
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    const API = w.__LIA_RESETTER_V001__;
    if (API && API.bind && typeof send !== "undefined"){
      API.bind("@0", send, document.currentScript);
    }
  }catch(e){}
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



