<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Aufgabenresetter v0.0.1 — Reset = Segment per LIASCRIPT neu rendern; statische Originalkopie wird über lineGoto-Zeilenbereich zuverlässig ausgeblendet (wrapper-sicher)

@style
.lia-resetter-marker{ display:none !important; }
.lia-resetter-salt{ display:none !important; }
output.lia-resetter-out{ display:block !important; }

/* Button: inline, transparent, Rand+Schrift Themefarbe, klein, max. Font-Höhe */
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
    items: Object.create(null), // uid -> { send, marker, seg, startLine, endLine, salt }
    mdLines: null,
    mdPromise: null,
    guardDocs: new WeakSet()
  });

  function selAttr(v){
    return String(v || "").replace(/\\/g,"\\\\").replace(/"/g,'\\"');
  }

  // =========================
  // Course-URL + Markdown Lines
  // =========================
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

  // =========================
  // Segment aus Markdown bestimmen (bis nächster @resetter oder nächste Überschrift)
  // =========================
  function isHeadingLine(line){ return /^[ \t]*#{1,6}\s+/.test(line || ""); }
  function isResetterLine(line){ return /@resetter\b/.test(line || ""); }

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

    const lo = Math.max(0, idx - 14);
    const hi = Math.min(lines.length - 1, idx + 14);

    for (let i = idx; i >= lo; i--){
      if (isResetterLine(lines[i])) return i;
    }
    for (let i = idx + 1; i <= hi; i++){
      if (isResetterLine(lines[i])) return i;
    }
    return null;
  }

  function computeSegment(lines, resetIdx){
    const start = resetIdx + 1;
    let end = lines.length;
    for (let i = start; i < lines.length; i++){
      if (isResetterLine(lines[i]) || isHeadingLine(lines[i])){
        end = i;
        break;
      }
    }
    return {
      seg: lines.slice(start, end).join("\n"),
      startLine: start,
      endLine: end
    };
  }

  // =========================
  // Statische Kopie ausblenden (wrapper-sicher) via lineGoto-Bereich
  // Wir blenden ALLE Blocks aus, die lineGoto in [startLine, endLine) haben,
  // aber NICHT innerhalb der dynamischen Wrapper-Ausgabe liegen.
  // =========================
  function parseLineGotoFrom(el){
    const s = el && el.getAttribute ? (el.getAttribute("ondblclick") || "") : "";
    const m = s.match(/lineGoto\((\d+)\)/);
    return m ? parseInt(m[1], 10) : null;
  }

  function pickBlock(node, scope){
    let el = node;
    while (el && el !== scope && el.nodeType === 1){
      if (el.classList){
        if (el.classList.contains("lia-paragraph") ||
            el.classList.contains("lia-table") ||
            el.classList.contains("lia-code") ||
            el.classList.contains("lia-quiz")) return el;
      }
      if (el.tagName === "TABLE" || el.tagName === "UL" || el.tagName === "OL" || el.tagName === "LI") return el;

      const p = el.parentElement;
      if (!p) break;
      // wenn direkt unter section/main/body => blockig genug
      if (p === scope || p.tagName === "SECTION" || p.tagName === "MAIN" || p === DOC.body) return el;

      el = p;
    }
    return node;
  }

  function hideStatic(uid){
    const it = REG.items[uid];
    if (!it || it.startLine == null || it.endLine == null) return;

    const marker = DOC.querySelector('.lia-resetter-marker[data-resetter-uid="'+selAttr(uid)+'"]');
    if (!marker) return;

    const scope = marker.closest("section") || DOC.querySelector("main") || DOC.body;

    const dyn = DOC.querySelector('div[data-resetter-dyn="'+selAttr(uid)+'"]');

    const blocks = new Set();
    const nodes = scope.querySelectorAll('[ondblclick*="lineGoto("]');
    for (let i = 0; i < nodes.length; i++){
      const n = nodes[i];

      // niemals dynamische Ausgabe verstecken
      if (dyn && dyn.contains(n)) continue;

      const ln = parseLineGotoFrom(n);
      if (ln == null) continue;

      if (ln >= it.startLine && ln < it.endLine){
        const b = pickBlock(n, scope);
        if (b && b.nodeType === 1) blocks.add(b);
      }
    }

    blocks.forEach(b => {
      // defensive: nicht Marker-Absatz verstecken
      if (marker.closest && b.contains(marker)) return;
      b.style.display = "none";
      b.setAttribute("data-resetter-hidden", uid);
    });
  }

  function hideLoop(uid){
    let tries = 0;
    const step = () => {
      tries++;
      hideStatic(uid);
      if (tries > 40) return;
      setTimeout(step, 60);
    };
    step();
  }

  // =========================
  // Render / Reset
  // =========================
  function render(uid){
    const it = REG.items[uid];
    if (!it || !it.send) return;

    it.salt = (it.salt || 0) + 1;

    const head =
      '<div data-resetter-dyn="'+uid+'">\n' +
      '<span class="lia-resetter-salt" data-resetter-salt="'+uid+'-'+it.salt+'"></span>\n\n';

    const tail = "\n</div>";

    it.send.output("LIASCRIPT:" + head + (it.seg || "") + tail);

    // statische Kopie ausblenden (auch wenn Lia später noch DOM nachzieht)
    hideLoop(uid);
  }

  // =========================
  // Public API (Macro-Script ruft bind/reset)
  // =========================
  ROOT.__liaResetterV001 = ROOT.__liaResetterV001 || {
    bind: async function(uid, send){
      uid = String(uid);

      const marker = DOC.querySelector('.lia-resetter-marker[data-resetter-uid="'+selAttr(uid)+'"]');
      if (!marker) return;

      const it = REG.items[uid] || (REG.items[uid] = {});
      it.send = send;
      it.marker = marker;

      const lines = await ensureMarkdown();
      const approx = approxLineFromMarker(marker);
      const rIdx = findResetterLineIndex(lines, approx);
      if (rIdx == null) return;

      const segInfo = computeSegment(lines, rIdx);
      it.seg = segInfo.seg;
      it.startLine = segInfo.startLine;
      it.endLine = segInfo.endLine;

      render(uid);
    },

    reset: function(uid){
      render(String(uid));
    }
  };

  // =========================
  // Click Guard (Capture): verhindert Folien-Sprung
  // =========================
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



