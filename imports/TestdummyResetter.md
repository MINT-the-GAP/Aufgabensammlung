<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Aufgabenresetter v0.0.1 — Segment-Neurendern (wie Reload) bis nächster @resetter oder nächstes # — Persistenz brechen via Salt

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
    seq: 0,
    stripped: Object.create(null),         // uid -> true
    renderers: Object.create(null),        // uid -> fn()
    salts: Object.create(null),            // uid -> int
    segCacheByUrl: Object.create(null),    // url -> segs[]
    segPromiseByUrl: Object.create(null),
    guardInstalled: false
  });

  // =========================
  // Click-Guard (verhindert Slide-Advance)
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

    // auf Root + Content (Capture), damit Presentation nicht „weiterklickt“
    ["pointerdown","mousedown","click","touchstart"].forEach(type => {
      try { DOC.addEventListener(type, handler, true); } catch(e){}
      try { ROOT.document.addEventListener(type, handler, true); } catch(e){}
    });
  }

  // =========================
  // URL der Kursquelle (raw) finden
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

  // =========================
  // Header-Comment strippen (ohne Literal-Kommentar-Tokens!)
  // =========================
  function stripInitialHeaderComment(md){
    const t = md || "";
    const OPEN  = "<" + "!--";
    const CLOSE = "-" + "->";
    if (!t.startsWith(OPEN)) return t;
    const end = t.indexOf(CLOSE);
    if (end < 0) return t;
    return t.slice(end + 3);
  }

  function findNextHeadingIndex(md, from){
    const sub = md.slice(from);
    const m = sub.match(/^[ \t]*#{1,6}\s/m);
    if (!m) return Infinity;
    return from + (m.index || 0);
  }

  function parseSegments(md){
    const src = stripInitialHeaderComment(md);
    const token = "@resetter";
    const re = /@resetter\b/g;

    const hits = [];
    let m;
    while ((m = re.exec(src))) hits.push(m.index);
    if (!hits.length) return [];

    const segs = [];
    for (let i = 0; i < hits.length; i++){
      const tokPos = hits[i];

      // Start: nach der Zeile mit @resetter
      let start = tokPos + token.length;
      const lineEnd = src.indexOf("\n", start);
      start = (lineEnd >= 0) ? (lineEnd + 1) : start;

      const nextTok  = (i + 1 < hits.length) ? hits[i + 1] : Infinity;
      const nextHead = findNextHeadingIndex(src, start);
      const end = Math.min(nextTok, nextHead, src.length);

      segs.push(src.slice(start, end));
    }
    return segs;
  }

  function getSegments(){
    const url = getCourseUrl();
    if (!url) return Promise.resolve([]);

    if (REG.segCacheByUrl[url]) return Promise.resolve(REG.segCacheByUrl[url]);
    if (REG.segPromiseByUrl[url]) return REG.segPromiseByUrl[url];

    REG.segPromiseByUrl[url] = fetch(url, { cache: "no-store" })
      .then(r => r.text())
      .then(md => {
        const segs = parseSegments(md);
        REG.segCacheByUrl[url] = segs;
        return segs;
      })
      .catch(_ => {
        REG.segCacheByUrl[url] = [];
        return [];
      });

    return REG.segPromiseByUrl[url];
  }

  // =========================
  // Original-Segment entfernen (damit es nicht doppelt ist)
  // =========================
  function stripOriginalOnce(uid, scriptEl){
    if (REG.stripped[uid]) return;
    REG.stripped[uid] = true;

    const marker = (scriptEl && scriptEl.previousElementSibling && scriptEl.previousElementSibling.classList &&
                    scriptEl.previousElementSibling.classList.contains("lia-resetter-marker"))
                  ? scriptEl.previousElementSibling
                  : DOC.querySelector('.lia-resetter-marker[data-resetter-uid="'+ uid.replace(/"/g,'\\"') +'"]');

    if (!marker) return;

    const start = marker.closest("p") || marker;
    const scope = marker.closest("section") || DOC.querySelector("main") || DOC.body;
    if (!scope) return;

    let n = start.nextSibling;
    while (n){
      const next = n.nextSibling;

      if (n.nodeType === 1){
        const el = n;

        if (/^H[1-6]$/.test(el.tagName)) break;
        if (el.querySelector && el.querySelector(".lia-resetter-marker")) break;
      }

      try{ if (n.parentNode) n.parentNode.removeChild(n); }catch(e){}
      n = next;
    }
  }

  // =========================
  // Output bauen (Salt bricht Persistenz-Key)
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

    // Reihenfolge im Dokument (einfacher, stabiler als DOM-Scans)
    const ord = (REG.seq++);

    stripOriginalOnce(uid, scriptEl);

    getSegments().then(function(segs){
      const seg = (segs && ord >= 0 && ord < segs.length) ? segs[ord] : "";
      const out = buildOutput(uid, seg);

      REG.renderers[uid] = function(){
        // jedes Mal neuer Salt => wirklich „wie neu geladen“
        send.output(buildOutput(uid, seg));
      };

      send.output(out);
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



