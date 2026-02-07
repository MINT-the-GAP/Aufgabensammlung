<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Aufgabenresetter v0.0.1 — segmentweiser Neustart via dynamischem Re-Render (bis nächster @resetter oder nächstes #)

@style
/* Marker unsichtbar */
.lia-resetter-marker{ display:none !important; }

/* Reset-Button: inline, transparent, Themefarbe, klein */
button.lia-resetter-btn{
  background: transparent !important;
  border: 1px solid currentColor !important;
  color: var(--lia-accent, var(--lia-primary-color, var(--lia-color-primary, #0b5fff))) !important;

  font-size: 0.75em !important;
  line-height: 1 !important;

  padding: 0 0.45em !important;
  margin: 0 0 0 0.6em !important;

  border-radius: 0.35em !important;
  display: inline-flex !important;
  align-items: center !important;
  vertical-align: baseline !important;

  cursor: pointer !important;
  user-select: none !important;
}
button.lia-resetter-btn:hover,
button.lia-resetter-btn:focus{
  text-decoration: underline !important;
  outline: none !important;
}

/* Mini-Block zum Paragraph-Break (damit inline-Makro danach Block-Inhalt sauber starten kann) */
.lia-resetter-break{
  height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
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

  const ROOT_WIN   = getRootWindow();
  const CONTENT_DOC = document;

  // =========================
  // Registry (import-sicher)
  // =========================
  const REGKEY = "__LIA_RESETTER_V001__";
  const REG = ROOT_WIN[REGKEY] || (ROOT_WIN[REGKEY] = {
    stripped: Object.create(null),      // uid -> true
    renderers: Object.create(null),     // uid -> function()
    clickGuardInstalled: false,

    segCacheByUrl: Object.create(null), // url -> segments[]
    segPromiseByUrl: Object.create(null)
  });

  // =========================
  // Helpers: Course-URL + Segment-Parser
  // =========================
  function getCourseUrl(){
    // LiaScript: /course/?<md-url>#...  oder /nightly/?<md-url>#...
    try{
      const s = (ROOT_WIN.location && ROOT_WIN.location.search) ? ROOT_WIN.location.search : (location.search || "");
      if (!s || s.length < 2) return null;

      const raw = s.slice(1);
      const first = raw.split("&")[0];

      // Fall A: direkt die URL als erster "Parameter"
      if (/^https?:/i.test(decodeURIComponent(first))) return decodeURIComponent(first);

      // Fall B: key=value
      const usp = new URLSearchParams(raw);
      for (const k of ["url","course","src","source"]){
        if (usp.has(k)) return decodeURIComponent(usp.get(k) || "");
      }

      // Fallback: erster Wert
      return decodeURIComponent(first);
    } catch(e){
      return null;
    }
  }

  function stripInitialHeaderComment(md){
    // Entfernt NUR den initialen <!-- ... --> Headerblock, damit @resetter:-Definitionen dort nicht mitgezählt werden
    const t = md || "";
    if (!t.startsWith("<!--")) return t;
    const end = t.indexOf("-->");
    if (end < 0) return t;
    return t.slice(end + 3);
  }

  function findNextHeadingIndex(md, from){
    // nächste Zeile, die mit # beginnt
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
    while ((m = re.exec(src))){
      hits.push(m.index);
    }
    if (!hits.length) return [];

    const segs = [];
    for (let i = 0; i < hits.length; i++){
      const tokPos = hits[i];

      // Segment beginnt NACH der Zeile, in der @resetter steht
      let start = tokPos + token.length;
      const lineEnd = src.indexOf("\n", start);
      start = (lineEnd >= 0) ? (lineEnd + 1) : start;

      const nextTok = (i + 1 < hits.length) ? hits[i + 1] : Infinity;
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
  // DOM: Ordinal + Original-Segment entfernen
  // =========================
  function escAttr(v){
    // CSS.escape ist nicht überall garantiert
    return String(v).replace(/"/g, '\\"');
  }

  function getMarker(uid){
    return CONTENT_DOC.querySelector('.lia-resetter-marker[data-resetter-uid="' + escAttr(uid) + '"]');
  }

  function ordinalOf(uid){
    const all = Array.from(CONTENT_DOC.querySelectorAll('.lia-resetter-marker'));
    const m = getMarker(uid);
    return all.indexOf(m);
  }

  function stripOriginalOnce(uid){
    if (REG.stripped[uid]) return;
    REG.stripped[uid] = true;

    const marker = getMarker(uid);
    if (!marker) return;

    // wir entfernen ab dem Absatz (oder Marker) die folgenden Geschwister
    const start = marker.closest("p") || marker;
    const scope = marker.closest("section") || CONTENT_DOC.querySelector("main") || CONTENT_DOC.body;
    if (!scope) return;

    let n = start.nextSibling;
    while (n){
      const next = n.nextSibling;

      // Stop-Kriterien
      if (n.nodeType === 1){
        const el = n;
        if (/^H[1-6]$/.test(el.tagName)) break;                 // nächste Überschrift
        if (el.querySelector && el.querySelector(".lia-resetter-marker")) break; // nächster @resetter
      }

      // innerhalb des gleichen Scopes löschen
      if (n.parentNode) n.parentNode.removeChild(n);
      n = next;
    }
  }

  // =========================
  // Click-Guard + Renderer-Registry
  // =========================
  function installClickGuardOnce(){
    if (REG.clickGuardInstalled) return;
    REG.clickGuardInstalled = true;

    const stop = (ev) => {
      const t = ev.target;
      if (!t || !t.closest) return;

      const btn = t.closest("button.lia-resetter-btn");
      if (!btn) return;

      ev.preventDefault();
      ev.stopPropagation();
      if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();

      const uid = btn.getAttribute("data-resetter-btn") || "";
      const fn = REG.renderers[uid];
      if (typeof fn === "function") fn();
    };

    ["click","mousedown","pointerdown","touchstart"].forEach(type => {
      CONTENT_DOC.addEventListener(type, stop, true);
    });
  }

  function registerRenderer(uid, fn){
    installClickGuardOnce();
    REG.renderers[uid] = fn;
  }

  function buildOutput(uid, segmentText){
    // Button inline + HTML-Block (div) um aus dem Absatz sauber rauszukommen
    return (
      "LIASCRIPT:" +
      '<button class="lia-resetter-btn" type="button" data-resetter-btn="' + uid + '">Neustart der Aufgabe</button>\n' +
      '<div class="lia-resetter-break"></div>\n\n' +
      (segmentText || "")
    );
  }

  // API im Root bereitstellen (damit Scripts schlank bleiben)
  ROOT_WIN.__LIA_RESETTER_API_V001__ = {
    getSegments,
    ordinalOf,
    stripOriginalOnce,
    registerRenderer,
    buildOutput
  };

})();
@end


@resetter: @resetter_(@uid)
@resetter_
<span class="lia-resetter-marker" data-resetter-uid="@0" aria-hidden="true"></span>
<script modify="false">
(function(){
  const UID = "@0";

  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const API  = ROOT.__LIA_RESETTER_API_V001__;

  if (!API || typeof send === "undefined" || !send || !send.output) {
    // Fallback: wenn send.output nicht da ist, lieber nix tun als Zustand kaputt machen
    return "LIA: stop";
  }

  // Original-Segment einmal entfernen (sonst doppelt)
  API.stripOriginalOnce(UID);

  // Ordinal bestimmen (reine Dokument-Reihenfolge der Marker)
  const ord = API.ordinalOf(UID);

  // Segmente holen und dynamisch rendern
  API.getSegments().then(function(segs){
    const seg = (ord >= 0 && segs && segs[ord]) ? segs[ord] : "";
    const out = API.buildOutput(UID, seg);

    // Renderer registrieren: Klick auf Button => komplett frisch rendern
    API.registerRenderer(UID, function(){
      send.output(out);
    });

    // initial rendern (und Script aktiv halten)
    send.output(out);
  });

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



