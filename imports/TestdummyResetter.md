<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Neustartbare Blöcke v0.0.1 — echter Re-Parse via LIASCRIPT-Return (keine DOM-Injection), Reset-Button oben

@style
.neustartbar{
  border: 2px solid var(--lia-color, #666);
  border-radius: 12px;
  padding: 12px;
  margin: 18px 0;
  position: relative;
}

.neustartbar .nb-src{
  display:none !important;
}

.neustartbar .nb-btnWrap{
  display:flex;
  justify-content:flex-start;
  align-items:center;
  margin-bottom: 10px;
}

.neustartbar .nb-btnWrap .lia-btn{
  border-radius: 10px;
  padding: 8px 12px;
}

.neustartbar .nb-body{
  margin-top: 6px;
}
@end

@onload
(function(){
  // In LiaScript laufen manche Sachen in iframes; wir halten es robust:
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }
  const ROOT = getRootWindow();

  // Exponierte Render-Funktion: liest Quelltext aus textarea und gibt LIASCRIPT zurück
  function renderFromTextarea(textareaId){
    const ta = document.getElementById(textareaId);
    if(!ta){
      return "HTML:<div style='padding:8px;border:1px solid #c00;border-radius:8px'>Neustartbar: Quelle nicht gefunden ("+textareaId+")</div>";
    }
    const src = (ta.value != null) ? ta.value : (ta.textContent || "");
    // Wichtig: als LIASCRIPT zurückgeben, damit LiaScript wirklich neu parsed:
    return "LIASCRIPT:\n<div class=\"nb-body\">\n" + src + "\n</div>";
  }

  // global verfügbar machen (für Script-Buttons)
  ROOT.__NB_renderFromTextarea = ROOT.__NB_renderFromTextarea || renderFromTextarea;
  window.__NB_renderFromTextarea = ROOT.__NB_renderFromTextarea;
})();
@end

@Neustartbar: @Neustartbar_(@uid,@0)
@Neustartbar_
<div class="neustartbar">
  <textarea id="nb-src-@0" class="nb-src">@1</textarea>

  <div class="nb-btnWrap">
    <script input="button" run-once="true" class="lia-btn">
      window.__NB_renderFromTextarea("nb-src-@0")
    </script>
  </div>
</div>
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
