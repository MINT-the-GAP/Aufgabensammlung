<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Neustartbare Div-Blöcke v0.0.1 — JIT-Transform: <div.neustartbar> -> Script-Button erzeugt LIASCRIPT (echter Reparse pro Klick)

@style
.neustartbar{
  border: 2px solid rgba(0,0,0,.25);
  border-radius: 12px;
  padding: 12px 14px;
  margin: 12px 0 20px 0;
}

@media (prefers-color-scheme: dark){
  .neustartbar{ border-color: rgba(255,255,255,.25); }
}

/* Optional: Button etwas „Lia-like“ */
input[type="button"][value^="↻ Neustart Block"]{
  margin: 0 0 10px 0;
  padding: 6px 10px;
  border-radius: 10px;
  cursor: pointer;
}
@end

@onload
(function () {

  // =========================================================
  // Root-Window finden (für JIT-Funktion und Run-Once Flag)
  // =========================================================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const RUNKEY = "__LIA_NEUSTARTBAR_JIT_V001__";

  if (ROOT[RUNKEY]) return;
  ROOT[RUNKEY] = true;

  // =========================================================
  // Kurs-URL aus ?<raw-url> (course/nightly) extrahieren
  // =========================================================
  function getCourseURL(){
    try {
      const s = (ROOT.location && ROOT.location.search) ? ROOT.location.search : "";
      if (!s || s.length < 2) return null;

      // häufigster Fall: ?https://raw.githubusercontent.com/...
      const direct = s.slice(1);
      if (/^https?:\/\//i.test(direct)) return decodeURIComponent(direct.split("&")[0]);

      // alternative: ?file=... o.ä.
      const p = new URLSearchParams(s);
      return p.get("file") || p.get("course") || p.get("src") || p.get("url");
    } catch(e){
      return null;
    }
  }

  // =========================================================
  // JIT anwenden (verschiedene Laufzeit-Varianten)
  // =========================================================
  function applyJIT(markdown){
    try {
      if (typeof ROOT.jitLia === "function") { ROOT.jitLia(markdown); return true; }
      if (ROOT.LIA && typeof ROOT.LIA.jit === "function") { ROOT.LIA.jit(markdown); return true; }

      // Fallback: Message-API (falls vorhanden)
      ROOT.postMessage({ cmd: "jit", param: markdown }, "*");
      return true;
    } catch(e){
      console.warn("[neustartbar] JIT failed:", e);
      return false;
    }
  }

  // =========================================================
  // Safe JS-String: </script> neutralisieren
  // =========================================================
  function jsStringLiteral(s){
    // JSON-stringify ist robust für Quotes/Newlines, aber </script> muss entschärft werden
    return JSON.stringify(s).replace(/<\/script/gi, "<\\/script");
  }

  // =========================================================
  // Transform: <div class="neustartbar">...</div> -> Script-Button
  // =========================================================
  function transform(source){
    if (source.includes('data-nbscript="v001"')) return null;

    let idx = 0;
    const re = /<div\s+class=(["'])neustartbar\1[^>]*>[\s\S]*?<\/div>/g;

    const out = source.replace(re, (block) => {
      idx++;

      const payload = "LIASCRIPT:\n" + block + "\n";
      const lit = jsStringLiteral(payload);

      return (
        `<!-- neustartbar:v001:${idx} -->\n` +
        `<script data-nbscript="v001" input="button" value="↻ Neustart Block ${idx}" modify="false" style="display:block;">\n` +
        `${lit}\n` +
        `</script>\n`
      );
    });

    return (idx > 0) ? out : null;
  }

  // =========================================================
  // Load -> Transform -> JIT
  // =========================================================
  (async function(){
    const url = getCourseURL();
    if (!url) return;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return;

    const src = await res.text();
    const transformed = transform(src);
    if (!transformed) return;

    applyJIT(transformed);
  })();

})();
@end
-->

















# Aufgabenresetter 1


<div class="neustartbar">


Aufgabe 1:

3 + 4 = [[ 7 ]]



</div>


<div class="neustartbar">
Aufgabe 2:

4 + 3 = [[ 7 ]]


Aufgabe 3: 

2 + 4 = [[  6  ]] 
</div>








# Aufgabenresetter 2

<div class="neustartbar">



Aufgabe 5:

- [[X]] richtig
- [[ ]] falsch


</div>



<div class="neustartbar">

Aufgabe 6: 

- [[Vektor]       (Skalar)    [nicht definiert]]
- [    [ ]           [X]             [ ]     ]  $$\left|\vec{a} \times \vec{b}\right|$$
- [    ( )           ( )             (X)     ]  $$\vec{c} \times \left( \vec{a} \circ \vec{b}\right) $$
- [    [X]           [ ]             [ ]     ]  $$s \vec{a} \times \left(\vec{b} \times r \vec{c}\right)$$
- [    (X)           ( )             ( )     ]  $$\left( \vec{c} \circ \vec{b}\right)  \cdot \vec{a}  $$
- [    [ ]           [ ]             [X]     ]  $$\dfrac{\left(\vec{a} \times \vec{c}\right)^2}{\vec{a} \times \vec{b}}$$



</div>

<div class="neustartbar">

Aufgabe 7: 


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$a)\;\;$__ $\dfrac{3}{4}$ 
 [->[$\left. 1 \boxed{ = \dfrac{1}{2} + \dfrac{1}{4}} \right\| \boxed{ \dfrac{5}{4} : \dfrac{5}{2}}  $]]
 [->[$\left. 2 \boxed{ =  \dfrac{3}{6}} \right\|\boxed{ \dfrac{3}{5} + \dfrac{1}{10}}  $]]
 [->[$\left. 3 \boxed{ =  \dfrac{14}{20}} \right\|\boxed{ \dfrac{7}{8} : \dfrac{7}{12}}  $]]
 [->[$\left. 4 \boxed{ =  \dfrac{9}{6}} \right\|\boxed{ 1 - \dfrac{1}{3}}  $]]
$= \dfrac{2}{3}$



</div>
