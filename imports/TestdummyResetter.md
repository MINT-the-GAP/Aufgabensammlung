<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Neustartbare Aufgabenblöcke v0.0.1 — echter Reparse per LIASCRIPT:, Reset nur per Klick, persistent gegen Folienwechsel
persistent: true

@style
.neustartbar{
  border: 2px solid rgba(0,0,0,.18);
  border-radius: 12px;
  padding: 12px 14px;
  margin: 14px 0;
  background: rgba(0,0,0,.02);
}
@media (prefers-color-scheme: dark){
  .neustartbar{
    border-color: rgba(255,255,255,.22);
    background: rgba(255,255,255,.04);
  }
}
.neustartbar__toolbar{
  display:flex;
  align-items:center;
  gap: 10px;
  margin: 0 0 10px 0;
}
.neustartbar__toolbar input[type="submit"]{
  cursor:pointer;
}
@end

@onload
(function(){
  // Root-safe (import-/iframe-robust)
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }
  const ROOT = getRootWindow();

  ROOT.__NB_v001 = ROOT.__NB_v001 || {};
  ROOT.__NB_v001.token = ROOT.__NB_v001.token || function(){
    return (Date.now().toString(36) + "-" + Math.random().toString(36).slice(2));
  };
})();
@end

@neustartbar: @neustartbar_(@uid,@0)

@neustartbar_
<div class="neustartbar" data-nb-id="@0">
  <div class="neustartbar__toolbar">
    <script
      input="submit"
      input-always-active
      value="Neustart"
      output="__NB_RESET_@0"
      modify="false">
      // Nur bei Klick: neuer Token => triggert Renderer
      (window.__NB_v001 && window.__NB_v001.token)
        ? window.__NB_v001.token()
        : ("" + Date.now())
    </script>
  </div>

  <div class="neustartbar__content">
    <script output="__NB_RENDER_@0" modify="false">
      // Initial läuft einmal (Default-Output = value="Neustart"),
      // danach NUR bei Klick (neuer Token) => kompletter Reparse des Blocks.
      const _token = @input(__NB_RESET_@0);

      "LIASCRIPT:\n" + "@'1"
    </script>
  </div>
</div>
@end
-->

# Aufgabenresetter 1

``` md @neustartbar

Aufgabe 1:

3 + 4 = [[ 7 ]]

```















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
