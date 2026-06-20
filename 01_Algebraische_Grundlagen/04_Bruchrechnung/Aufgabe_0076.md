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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/KoordREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md

















tags: Bruchrechnung, Vorrangsregeln, schwer, normal, Berechnen

comment: Rechne mit Brüchen, ohne dass direkt ein Bruch dargestellt ist.

author: Martin Lommatzsch

-->




# Versteckte Brüche



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
**Berechne** den Wert des Terms.



<section class="dynFlex">

<div class="flex-child">



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$a)\;\;$__ $ \;(2:3)\;+\;(5:12)\;-\;(1:6)\;=\; $ [[  11/12  ]] @canvas
@Algebrite.check(11/12)
************
$$
\begin{align*}
(2:3)+(5:12)-(1:6)
&= \dfrac{2}{3}+\dfrac{5}{12}-\dfrac{1}{6} \\
&= \dfrac{8}{12}+\dfrac{5}{12}-\dfrac{2}{12} \\
&= \dfrac{11}{12}
\end{align*}
$$
************



@ADetails(1=BE; Bruchrechnung, Vorrangsregeln)

</div>


<div class="flex-child">



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$b)\;\;$__ $ \;(5:8)\;+\;(7:12):(7:18)\;=\; $ [[  17/8  ]] @canvas
@Algebrite.check(17/8)
************
$$
\begin{align*}
(5:8)+(7:12):(7:18)
&= \dfrac{5}{8}+\left(\dfrac{7}{12}:\dfrac{7}{18}\right) \\
&= \dfrac{5}{8}+\left(\dfrac{7}{12}\cdot\dfrac{18}{7}\right) \\
&= \dfrac{5}{8}+\dfrac{18}{12}
= \dfrac{5}{8}+\dfrac{3}{2} \\
&= \dfrac{5}{8}+\dfrac{12}{8}
= \dfrac{17}{8}
\end{align*}
$$
************



@ADetails(1=BE; Bruchrechnung, Vorrangsregeln)

</div>


<div class="flex-child">



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$c)\;\;$__ $ \;(4:9)\cdot(9:8)\;+\;(1:6)\;=\; $ [[  2/3  ]] @canvas
@Algebrite.check(2/3)
************
$$
\begin{align*}
(4:9)\cdot(9:8)+(1:6)
&= \left(\dfrac{4}{9}\cdot\dfrac{9}{8}\right)+\dfrac{1}{6} \\
&= \dfrac{4}{8}+\dfrac{1}{6}
= \dfrac{1}{2}+\dfrac{1}{6} \\
&= \dfrac{3}{6}+\dfrac{1}{6}
= \dfrac{2}{3}
\end{align*}
$$
************



@ADetails(1=BE; Bruchrechnung, Vorrangsregeln)

</div>


<div class="flex-child">



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$d)\;\;$__ $ \;(7:15)\;-\;(1:5)\cdot(3:2)\;+\;(2:3)\;=\; $ [[  5/6  ]] @canvas
@Algebrite.check(5/6)
************
$$
\begin{align*}
(7:15)-(1:5)\cdot(3:2)+(2:3)
&= \dfrac{7}{15}-\left(\dfrac{1}{5}\cdot\dfrac{3}{2}\right)+\dfrac{2}{3} \\
&= \dfrac{7}{15}-\dfrac{3}{10}+\dfrac{2}{3} \\
&= \dfrac{14}{30}-\dfrac{9}{30}+\dfrac{20}{30} \\
&= \dfrac{25}{30}
= \dfrac{5}{6}
\end{align*}
$$
************



@ADetails(1=BE; Bruchrechnung, Vorrangsregeln)

</div>


<div class="flex-child">



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$e)\;\;$__ $ \;(6:7):(3:14)\;-\;(2:5)\;+\;(1:2)\;=\; $ [[  41/10  ]] @canvas
@Algebrite.check(41/10)
************
$$
\begin{align*}
(6:7):(3:14)-(2:5)+(1:2)
&= \left(\dfrac{6}{7}:\dfrac{3}{14}\right)-\dfrac{2}{5}+\dfrac{1}{2} \\
&= \left(\dfrac{6}{7}\cdot\dfrac{14}{3}\right)-\dfrac{2}{5}+\dfrac{1}{2} \\
&= 4 - \dfrac{2}{5} + \dfrac{1}{2}
= 4 + \left(-\dfrac{4}{10}+\dfrac{5}{10}\right) \\
&= 4 + \dfrac{1}{10}
= \dfrac{41}{10}
\end{align*}
$$
************



@ADetails(1=BE; Bruchrechnung, Vorrangsregeln)

</div>


<div class="flex-child">



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$f)\;\;$__ $ \;(3:4)\cdot\big((5:6)+(1:3)\big)\;:\;(9:8)\;=\; $ [[  7/9  ]] @canvas
@Algebrite.check(7/9)
************
$$
\begin{align*}
(3:4)\cdot\big((5:6)+(1:3)\big):(9:8)
&= \left(\dfrac{3}{4}\cdot\left(\dfrac{5}{6}+\dfrac{1}{3}\right)\right):\dfrac{9}{8} \\
&= \left(\dfrac{3}{4}\cdot\left(\dfrac{5}{6}+\dfrac{2}{6}\right)\right):\dfrac{9}{8} \\
&= \left(\dfrac{3}{4}\cdot\dfrac{7}{6}\right):\dfrac{9}{8}
= \dfrac{21}{24}:\dfrac{9}{8} \\
&= \dfrac{7}{8}\cdot\dfrac{8}{9}
= \dfrac{7}{9}
\end{align*}
$$
************



@ADetails(1=BE; Bruchrechnung, Vorrangsregeln)

</div>

</section>




