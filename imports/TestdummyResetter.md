<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Aufgabenresetter v0.0.1 — segmentweiser Neustart via Re-Render; korrekt im Präsentations-Lazy-Mode (Slide+Local Index); Original-Segment wird nach End-Marker ausgeblendet; Persistenz gebrochen via Salt

@style
.lia-resetter-marker{ display:none !important; }
.lia-resetter-end{ display:none !important; }

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

  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const DOC  = document;

  const REGKEY = "__LIA_RESETTER_V001__";
  const REG = ROOT[REGKEY] || (ROOT[REGKEY] = {
    guardInstalled: false,

    // uid -> fn()
    renderers: Object.create(null),

    // uid -> salt-int
    salts: Object.create(null),

    // url -> parsed object
    cacheByUrl: Object.create(null),
    promiseByUrl: Object.create(null)
  });

  // ---------------------------------
  // Click-Guard: verhindert Slide-Advance
  // ---------------------------------
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

  // ---------------------------------
  // Kurs-URL aus Lia-URL
  // ---------------------------------
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

  // ---------------------------------
  // Header-Comment strippen (ohne Literal Kommentar-Tokens)
  // ---------------------------------
  function stripInitialHeaderComment(md){
    const t = md || "";
    const OPEN  = "<" + "!--";
    const CLOSE = "-" + "->";
    if (!t.startsWith(OPEN)) return t;
    const end = t.indexOf(CLOSE);
    if (end < 0) return t;
    return t.slice(end + 3);
  }

  // ---------------------------------
  // Markdown: Slides (# ) + Segmente (@resetter)
  // ---------------------------------
  function splitSlidesLevel1(src){
    const lines = String(src || "").split("\n");
    const slides = [];
    let cur = [];

    for (let i=0;i<lines.length;i++){
      const line = lines[i];
      const isH1 = /^[ \t]*#\s+/.test(line); // nur "# "
      if (isH1 && cur.length){
        slides.push(cur.join("\n"));
        cur = [line];
      } else {
        cur.push(line);
      }
    }
    if (cur.length) slides.push(cur.join("\n"));
    return slides;
  }

  function findNextHeadingIndex(md, from){
    const sub = md.slice(from);
    const m = sub.match(/^[ \t]*#{1,6}\s/m);
    if (!m) return Infinity;
    return from + (m.index || 0);
  }

  function parseSegments(src){
    const token = "@resetter";
    const re = /@resetter\b/g;

    const hits = [];
    let m;
    while ((m = re.exec(src))) hits.push(m.index);
    if (!hits.length) return [];

    const segs = [];
    for (let i=0;i<hits.length;i++){
      const tokPos = hits[i];

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

  function buildPrefix(counts){
    const prefix = new Array(counts.length + 1);
    prefix[0] = 0;
    for (let i=0;i<counts.length;i++){
      prefix[i+1] = prefix[i] + (counts[i] || 0);
    }
    return prefix;
  }

  function getCourseParsed(){
    const url = getCourseUrl();
    if (!url) return Promise.resolve({ segments: [], slideCounts: [], prefix: [0] });

    if (REG.cacheByUrl[url]) return Promise.resolve(REG.cacheByUrl[url]);
    if (REG.promiseByUrl[url]) return REG.promiseByUrl[url];

    REG.promiseByUrl[url] = fetch(url, { cache: "no-store" })
      .then(r => r.text())
      .then(md => {
        const src = stripInitialHeaderComment(md);
        const slides = splitSlidesLevel1(src);
        const slideCounts = slides.map(s => (s.match(/@resetter\b/g) || []).length);
        const prefix = buildPrefix(slideCounts);
        const segments = parseSegments(src);

        const out = { segments, slideCounts, prefix };
        REG.cacheByUrl[url] = out;
        return out;
      })
      .catch(_ => {
        const out = { segments: [], slideCounts: [], prefix: [0] };
        REG.cacheByUrl[url] = out;
        return out;
      });

    return REG.promiseByUrl[url];
  }

  // ---------------------------------
  // Slide Index robust bestimmen
  // ---------------------------------
  function findMarker(uid, scriptEl){
    try{
      const prev = scriptEl && scriptEl.previousElementSibling;
      if (prev && prev.classList && prev.classList.contains("lia-resetter-marker")) return prev;
    }catch(e){}
    try{
      return DOC.querySelector('.lia-resetter-marker[data-resetter-uid="'+ String(uid).replace(/"/g,'\\"') +'"]');
    }catch(e){
      return null;
    }
  }

  function findSlideSection(el){
    if (!el || !el.closest) return null;
    return el.closest("section") || null;
  }

  function getSlideIndex(section){
    if (!section) return null;

    // 1) Reveal API (best)
    try{
      const R = ROOT.Reveal;
      if (R && typeof R.getIndices === "function"){
        const idx = R.getIndices(section);
        if (idx && typeof idx.h === "number") return idx.h;
      }
    }catch(e){}

    // 2) data-index-h
    try{
      const dh = section.getAttribute("data-index-h");
      if (dh != null && dh !== ""){
        const v = parseInt(dh, 10);
        if (!Number.isNaN(v)) return v;
      }
    }catch(e){}

    // 3) DOM Reihenfolge in Reveal
    try{
      const slidesRoot =
        ROOT.document.querySelector(".reveal .slides") ||
        ROOT.document.querySelector(".slides") ||
        null;

      if (slidesRoot){
        const secs = Array.from(slidesRoot.children).filter(x => x && x.tagName === "SECTION");
        const i = secs.indexOf(section);
        if (i >= 0) return i;
      }
    }catch(e){}

    return null;
  }

  function localIndexInSlide(marker, section){
    if (!marker) return 0;
    if (section && section.querySelectorAll){
      const all = Array.from(section.querySelectorAll(".lia-resetter-marker"));
      const idx = all.indexOf(marker);
      return idx >= 0 ? idx : 0;
    }
    return 0;
  }

  function globalIndex(marker, parsed){
    const section = findSlideSection(marker);
    const h = getSlideIndex(section);

    if (h != null && parsed && parsed.prefix){
      const base = (h >= 0 && h < parsed.prefix.length) ? parsed.prefix[h] : 0;
      const loc  = localIndexInSlide(marker, section);
      return base + loc;
    }

    // Fallback (Textbook): globale Marker-Reihenfolge im aktuellen DOM
    const all = Array.from(DOC.querySelectorAll(".lia-resetter-marker"));
    const idx = all.indexOf(marker);
    return idx >= 0 ? idx : 0;
  }

  // ---------------------------------
  // Output: Salt bricht Persistenz + End-Marker zum Ausblenden des Originals
  // (WICHTIG: Segment-Markdown NICHT in ein HTML-Wrapper einschließen!)
  // ---------------------------------
  function buildOutput(uid, segmentText){
    const salt = (REG.salts[uid] = (REG.salts[uid] || 0) + 1);

    return (
      "LIASCRIPT:" +
      '<button class="lia-resetter-btn" type="button" data-resetter-btn="'+ uid +'">Neustart der Aufgabe</button>\n\n' +
      '<span style="display:none" data-resetter-salt="'+ uid +'-'+ salt +'"></span>\n\n' +
      (segmentText || "") + "\n\n" +
      '<div class="lia-resetter-end" data-resetter-end="'+ uid +'"></div>\n'
    );
  }

  // ---------------------------------
  // Original-Segment ausblenden (nach End-Marker bis nächster Marker oder Heading)
  // ---------------------------------
  function isHeadingEl(el){
    return !!el && el.nodeType === 1 && /^H[1-6]$/.test(el.tagName);
  }
  function containsNextResetter(el){
    if (!el || el.nodeType !== 1) return false;
    if (el.classList && el.classList.contains("lia-resetter-marker")) return true;
    if (el.querySelector && el.querySelector(".lia-resetter-marker")) return true;
    return false;
  }

  function hideOriginalAfter(uid){
    const end = DOC.querySelector('.lia-resetter-end[data-resetter-end="'+ String(uid).replace(/"/g,'\\"') +'"]');
    if (!end) return false;

    // wir laufen ab dem End-Marker nach vorne
    let n = end.nextSibling;
    let hidAny = false;

    while (n){
      // Stop: nächste Überschrift oder nächster @resetter (Marker)
      if (n.nodeType === 1){
        const el = n;
        if (isHeadingEl(el)) break;
        if (containsNextResetter(el)) break;
      }

      const next = n.nextSibling;

      // nur echte sichtbare Inhalte ausblenden (Textnodes -> überspringen)
      if (n.nodeType === 1){
        try{
          n.style.display = "none";
          hidAny = true;
        }catch(e){}
      }

      n = next;
    }

    return hidAny;
  }

  function hideOriginalLoop(uid){
    let tries = 0;
    const step = () => {
      tries++;
      if (hideOriginalAfter(uid)) return;
      if (tries > 40) return; // ~2s
      setTimeout(step, 50);
    };
    step();
  }

  // ---------------------------------
  // Bootstrap pro @resetter
  // ---------------------------------
  function bootstrap(uid, send, scriptEl){
    installGuard();

    const marker = findMarker(uid, scriptEl);

    // 1) Button sofort da (Placeholder ohne Segment), damit “erste Folie” nicht leer ist
    send.output(buildOutput(uid, "")); // zeigt Button + Endmarker
    // NICHT hideOriginal hier, sonst wäre kurzzeitig die Aufgabe weg

    // 2) Nach Fetch: korrektes Segment rendern + Original ausblenden
    getCourseParsed().then(function(parsed){
      const gi = globalIndex(marker, parsed);
      const seg = (parsed.segments && gi >= 0 && gi < parsed.segments.length) ? parsed.segments[gi] : "";

      const render = () => {
        send.output(buildOutput(uid, seg));
        hideOriginalLoop(uid);
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



