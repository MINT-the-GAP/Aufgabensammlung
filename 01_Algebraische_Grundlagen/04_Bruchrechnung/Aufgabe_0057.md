<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md
















tags: Bruchrechnung, schwer, hoch, Berechnen

comment: Löse Mehrfachbrüche auf.

author: Martin Lommatzsch

-->




# Mehrfachbrüche



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
**Berechne** den Wert des Terms.



<section class="dynFlex">

<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$a)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 1 }{ 3 }\right) }{  \left(\dfrac{ 4 }{ 5 }\right) }  \right] }{ 4 } \;= $ [[  5/48  ]] @canvas
@Algebrite.check(5/48)
************
$$
\begin{align*}
\dfrac{ \left[ \dfrac{ \left(\dfrac{1}{3}\right) }{ \left(\dfrac{4}{5}\right) } \right] }{4}
&= \dfrac{\left(\dfrac{1}{3} : \dfrac{4}{5}\right)}{4} \\
&= \dfrac{\left(\dfrac{1}{3} \cdot \dfrac{5}{4}\right)}{4} \\
&= \dfrac{\dfrac{5}{12}}{4}
= \dfrac{5}{12} \cdot \dfrac{1}{4}
= \dfrac{5}{48}
\end{align*}
$$
************


@ADetails(1=BE; Bruchrechnung, Division)

</div>

<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$b)\;\;$__ $ \dfrac{ 8 }{ \left[ \dfrac{ \left(\dfrac{ 2 }{ 5 }\right) }{  \left(\dfrac{ 3 }{ 4 }\right) }  \right] } \;= $ [[  15  ]] @canvas
@Algebrite.check(15)
************
$$
\begin{align*}
\dfrac{8}{\left[ \dfrac{\left(\dfrac{2}{5}\right)}{\left(\dfrac{3}{4}\right)} \right]}
&= 8 : \left( \dfrac{2}{5} : \dfrac{3}{4} \right) \\
&= 8 : \left( \dfrac{2}{5} \cdot \dfrac{4}{3} \right)
= 8 : \dfrac{8}{15} \\
&= 8 \cdot \dfrac{15}{8}
= 15
\end{align*}
$$
************


@ADetails(1=BE; Bruchrechnung, Division)

</div>

<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$c)\;\;$__ $ \dfrac{ \left[\dfrac{2}{3}\right] }{ \left[ \dfrac{ \left(\dfrac{ 9 }{ 7 }\right) }{  6 }  \right] } \;= $ [[  28/9  ]] @canvas
@Algebrite.check(28/9)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{2}{3}\right)}{\left[ \dfrac{\left(\dfrac{9}{7}\right)}{6} \right]}
&= \dfrac{\dfrac{2}{3}}{\left( \dfrac{9}{7} : 6 \right)}
= \dfrac{\dfrac{2}{3}}{\left( \dfrac{9}{7} \cdot \dfrac{1}{6} \right)} \\
&= \dfrac{\dfrac{2}{3}}{\dfrac{9}{42}}
= \dfrac{2}{3} \cdot \dfrac{42}{9}
= \dfrac{84}{27}
= \dfrac{28}{9}
\end{align*}
$$
************


@ADetails(1=BE; Bruchrechnung, Division)

</div>

<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$d)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 5 }{ 6 }\right) }{  \left(\dfrac{ 4 }{ 3 }\right) }  \right] }{ \left[ \dfrac{ \left(\dfrac{ 4 }{ 3 }\right) }{  \left(\dfrac{ 7 }{ 8 }\right) }  \right] } \;= $ [[  105/256  ]] @canvas
@Algebrite.check(105/256)
************
$$
\begin{align*}
\text{Zähler:}\quad \dfrac{\left(\dfrac{5}{6}\right)}{\left(\dfrac{4}{3}\right)}
&= \dfrac{5}{6} : \dfrac{4}{3}
= \dfrac{5}{6} \cdot \dfrac{3}{4}
= \dfrac{15}{24}
= \dfrac{5}{8} \\
\text{Nenner:}\quad \dfrac{\left(\dfrac{4}{3}\right)}{\left(\dfrac{7}{8}\right)}
&= \dfrac{4}{3} : \dfrac{7}{8}
= \dfrac{4}{3} \cdot \dfrac{8}{7}
= \dfrac{32}{21} \\
\text{Gesamt:}\quad 
\dfrac{\dfrac{5}{8}}{\dfrac{32}{21}}
&= \dfrac{5}{8} \cdot \dfrac{21}{32}
= \dfrac{105}{256}
\end{align*}
$$
************


@ADetails(1=BE; Bruchrechnung, Division)

</div>

<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$e)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 2 }{ 3 } + \dfrac{1}{2}\right) }{  \left(\dfrac{ 3 }{ 7 }\right) }  \right] }{ \left[ \dfrac{ \left(\dfrac{ 8 }{ 3 }\right) }{  \left(\dfrac{ 8 }{ 9 }\right) }  \right] } \;= $ [[  49/54  ]] @canvas
@Algebrite.check(49/54)
************
$$
\begin{align*}
\text{Zähler:}\quad \dfrac{\left(\dfrac{2}{3} + \dfrac{1}{2}\right)}{\left(\dfrac{3}{7}\right)}
&= \dfrac{\left(\dfrac{4}{6} + \dfrac{3}{6}\right)}{\left(\dfrac{3}{7}\right)}
= \dfrac{\dfrac{7}{6}}{\dfrac{3}{7}}
= \dfrac{7}{6} \cdot \dfrac{7}{3}
= \dfrac{49}{18} \\
\text{Nenner:}\quad \dfrac{\left(\dfrac{8}{3}\right)}{\left(\dfrac{8}{9}\right)}
&= \dfrac{8}{3} : \dfrac{8}{9}
= \dfrac{8}{3} \cdot \dfrac{9}{8}
= 3 \\
\text{Gesamt:}\quad \dfrac{\dfrac{49}{18}}{3}
&= \dfrac{49}{18} \cdot \dfrac{1}{3}
= \dfrac{49}{54}
\end{align*}
$$
************


@ADetails(1=BE; Bruchrechnung, Division)

</div>

<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$f)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 5 }{ 7 }\right) }{  \left(\dfrac{ 4 }{ 5 }\right) }  \right] }{ \left[ \dfrac{ \left(\dfrac{ 9 }{ 8 }\right) }{  \left(\dfrac{ 11 }{ 3 } + \dfrac{3}{5}\right) }  \right] } \;= $ [[  640/189  ]] @canvas
@Algebrite.check(640/189)
************
$$
\begin{align*}
\text{Zähler:}\quad \dfrac{\left(\dfrac{5}{7}\right)}{\left(\dfrac{4}{5}\right)}
&= \dfrac{5}{7} : \dfrac{4}{5}
= \dfrac{5}{7} \cdot \dfrac{5}{4}
= \dfrac{25}{28} \\
\text{Nenner:}\quad \dfrac{\left(\dfrac{9}{8}\right)}{\left(\dfrac{11}{3} + \dfrac{3}{5}\right)}
&= \dfrac{9}{8} : \left( \dfrac{55}{15} + \dfrac{9}{15} \right)
= \dfrac{9}{8} : \dfrac{64}{15}
= \dfrac{9}{8} \cdot \dfrac{15}{64}
= \dfrac{135}{512} \\
\text{Gesamt:}\quad 
\dfrac{\dfrac{25}{28}}{\dfrac{135}{512}}
&= \dfrac{25}{28} \cdot \dfrac{512}{135} \\
&= \dfrac{25}{135} \cdot \dfrac{512}{28}
= \dfrac{5}{27} \cdot \dfrac{128}{7} \\
&= \dfrac{640}{189}
\end{align*}
$$
************


@ADetails(1=BE; Bruchrechnung, Division)

</div>


</section>

