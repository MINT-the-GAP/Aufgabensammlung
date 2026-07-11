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


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/Proposal/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md















tags: Bruchrechnung, Vorrangsregeln, mittel, normal, Berechnen

comment: Rechne mit drei Brüchen und beachte die Vorrangsregeln.

author: Martin Lommatzsch

-->




# Bruchrechnung mit Vorrangsregeln



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Berechne** den Wert des Terms.



<section class="dynFlex">

<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$a)\;\;$__ $  \dfrac{1}{2} + \dfrac{2}{3} \cdot \dfrac{3}{4} = $ [[  1  ]] @canvas
@Algebrite.check(1)
************
$$
\begin{align*}
\dfrac{1}{2} + \dfrac{2}{3} \cdot \dfrac{3}{4}
&= \dfrac{1}{2} + \dfrac{6}{12} \\
&= \dfrac{1}{2} + \dfrac{1}{2} \\
&= 1
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
__$b)\;\;$__ $  \dfrac{5}{6} - \dfrac{1}{2} \cdot \dfrac{2}{3} = $ [[  1/2  ]] @canvas
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{5}{6} - \dfrac{1}{2} \cdot \dfrac{2}{3}
&= \dfrac{5}{6} - \dfrac{2}{6} \\
&= \dfrac{5-2}{6} \\
&= \dfrac{1}{2}
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
__$c)\;\;$__ $  \dfrac{3}{4} + \dfrac{2}{5} : \dfrac{1}{2} = $ [[  31/20  ]] @canvas
@Algebrite.check(31/20)
************
$$
\begin{align*}
\dfrac{3}{4} + \dfrac{2}{5} : \dfrac{1}{2}
&= \dfrac{3}{4} + \dfrac{2}{5} \cdot \dfrac{2}{1} \\
&= \dfrac{3}{4} + \dfrac{4}{5} \\
&= \dfrac{15}{20} + \dfrac{16}{20} \\
&= \dfrac{31}{20}
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
__$d)\;\;$__ $  \dfrac{7}{8} - \dfrac{3}{4} : \dfrac{3}{2} = $ [[  3/8  ]] @canvas
@Algebrite.check(3/8)
************
$$
\begin{align*}
\dfrac{7}{8} - \dfrac{3}{4} : \dfrac{3}{2}
&= \dfrac{7}{8} - \dfrac{3}{4} \cdot \dfrac{2}{3} \\
&= \dfrac{7}{8} - \dfrac{6}{12} \\
&= \dfrac{7}{8} - \dfrac{1}{2} \\
&= \dfrac{7}{8} - \dfrac{4}{8} \\
&= \dfrac{3}{8}
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
__$e)\;\;$__ $  \dfrac{2}{3} + \dfrac{4}{9} \cdot \dfrac{3}{8} = $ [[  5/6  ]] @canvas
@Algebrite.check(5/6)
************
$$
\begin{align*}
\dfrac{2}{3} + \dfrac{4}{9} \cdot \dfrac{3}{8}
&= \dfrac{2}{3} + \dfrac{12}{72} \\
&= \dfrac{2}{3} + \dfrac{1}{6} \\
&= \dfrac{4}{6} + \dfrac{1}{6} \\
&= \dfrac{5}{6}
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
__$f)\;\;$__ $  \dfrac{5}{12} - \dfrac{1}{6} \cdot \dfrac{3}{4} = $ [[  7/24  ]] @canvas
@Algebrite.check(7/24)
************
$$
\begin{align*}
\dfrac{5}{12} - \dfrac{1}{6} \cdot \dfrac{3}{4}
&= \dfrac{5}{12} - \dfrac{3}{24} \\
&= \dfrac{5}{12} - \dfrac{1}{8} \\
&= \dfrac{10}{24} - \dfrac{3}{24} \\
&= \dfrac{7}{24}
\end{align*}
$$
************


@ADetails(1=BE; Bruchrechnung, Vorrangsregeln)

</div>

</section>




