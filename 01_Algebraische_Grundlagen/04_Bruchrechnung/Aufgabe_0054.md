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

















tags: Bruchrechnung, Distributivgesetz, mittel, normal, Berechnen

comment: Rechne mit drei Brüchen und beachte das Distributivgesetz.

author: Martin Lommatzsch

-->




# Bruchrechnung mit Klammern






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
__$a)\;\;$__ $ \left(\dfrac{1}{3} + \dfrac{1}{6}\right) \cdot \dfrac{3}{4} = $ [[  3/8  ]] @canvas
@Algebrite.check(3/8)
************
$$
\begin{align*}
\left(\dfrac{1}{3} + \dfrac{1}{6}\right) \cdot \dfrac{3}{4}
&= \left(\dfrac{1\cdot 2}{3\cdot 2} + \dfrac{1}{6}\right) \cdot \dfrac{3}{4} \\
&= \left(\dfrac{2}{6} + \dfrac{1}{6}\right) \cdot \dfrac{3}{4} \\
&= \dfrac{3}{6} \cdot \dfrac{3}{4} \\
&= \dfrac{1}{2} \cdot \dfrac{3}{4} \\
&= \dfrac{3}{8}
\end{align*}
$$
************


@ADetails(1=BE; Bruchrechnung, Vorrangsregeln, Distributivgesetz)

</div>

<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$b)\;\;$__ $ \left(\dfrac{5}{8} - \dfrac{1}{4}\right) : \dfrac{5}{6} = $ [[  9/20  ]] @canvas
@Algebrite.check(9/20)
************
$$
\begin{align*}
\left(\dfrac{5}{8} - \dfrac{1}{4}\right) : \dfrac{5}{6}
&= \left(\dfrac{5}{8} - \dfrac{1\cdot 2}{4\cdot 2}\right) : \dfrac{5}{6} \\
&= \left(\dfrac{5}{8} - \dfrac{2}{8}\right) : \dfrac{5}{6} \\
&= \dfrac{3}{8} : \dfrac{5}{6} \\
&= \dfrac{3}{8} \cdot \dfrac{6}{5} \\
&= \dfrac{18}{40} \\
&= \dfrac{9}{20}
\end{align*}
$$
************


@ADetails(1=BE; Bruchrechnung, Vorrangsregeln, Distributivgesetz)

</div>

<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$c)\;\;$__ $ \dfrac{3}{5} : \left(\dfrac{1}{2} + \dfrac{1}{10}\right) = $ [[  1  ]] @canvas
@Algebrite.check(1)
************
$$
\begin{align*}
\dfrac{3}{5} : \left(\dfrac{1}{2} + \dfrac{1}{10}\right)
&= \dfrac{3}{5} : \left(\dfrac{1\cdot 5}{2\cdot 5} + \dfrac{1}{10}\right) \\
&= \dfrac{3}{5} : \left(\dfrac{5}{10} + \dfrac{1}{10}\right) \\
&= \dfrac{3}{5} : \dfrac{6}{10} \\
&= \dfrac{3}{5} : \dfrac{3}{5} \\
&= \dfrac{3}{5} \cdot \dfrac{5}{3} \\
&= 1
\end{align*}
$$
************


@ADetails(1=BE; Bruchrechnung, Vorrangsregeln, Distributivgesetz)

</div>

<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$d)\;\;$__ $ \dfrac{5}{6} \cdot \left(\dfrac{3}{7} + \dfrac{1}{14}\right) = $ [[  5/12  ]] @canvas
@Algebrite.check(5/12)
************
$$
\begin{align*}
\dfrac{5}{6} \cdot \left(\dfrac{3}{7} + \dfrac{1}{14}\right)
&= \dfrac{5}{6} \cdot \left(\dfrac{3\cdot 2}{7\cdot 2} + \dfrac{1}{14}\right) \\
&= \dfrac{5}{6} \cdot \left(\dfrac{6}{14} + \dfrac{1}{14}\right) \\
&= \dfrac{5}{6} \cdot \dfrac{7}{14} \\
&= \dfrac{5}{6} \cdot \dfrac{1}{2} \\
&= \dfrac{5}{12}
\end{align*}
$$
************


@ADetails(1=BE; Bruchrechnung, Vorrangsregeln, Distributivgesetz)

</div>

<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$e)\;\;$__ $ \dfrac{4}{9} : \left(\dfrac{1}{6} + \dfrac{1}{9}\right) = $ [[  8/5  ]] @canvas
@Algebrite.check(8/5)
************
$$
\begin{align*}
\dfrac{4}{9} : \left(\dfrac{1}{6} + \dfrac{1}{9}\right)
&= \dfrac{4}{9} : \left(\dfrac{1\cdot 3}{6\cdot 3} + \dfrac{1\cdot 2}{9\cdot 2}\right) \\
&= \dfrac{4}{9} : \left(\dfrac{3}{18} + \dfrac{2}{18}\right) \\
&= \dfrac{4}{9} : \dfrac{5}{18} \\
&= \dfrac{4}{9} \cdot \dfrac{18}{5} \\
&= \dfrac{4\cdot 2}{5} \quad (\text{da } \dfrac{18}{9}=2) \\
&= \dfrac{8}{5}
\end{align*}
$$
************


@ADetails(1=BE; Bruchrechnung, Vorrangsregeln, Distributivgesetz)

</div>

<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$f)\;\;$__ $ \left(\dfrac{2}{3} - \dfrac{1}{6}\right) \cdot \dfrac{3}{5} = $ [[  3/10  ]] @canvas
@Algebrite.check(3/10)
************
$$
\begin{align*}
\left(\dfrac{2}{3} - \dfrac{1}{6}\right) \cdot \dfrac{3}{5}
&= \left(\dfrac{2\cdot 2}{3\cdot 2} - \dfrac{1}{6}\right) \cdot \dfrac{3}{5} \\
&= \left(\dfrac{4}{6} - \dfrac{1}{6}\right) \cdot \dfrac{3}{5} \\
&= \dfrac{3}{6} \cdot \dfrac{3}{5} \\
&= \dfrac{1}{2} \cdot \dfrac{3}{5} \\
&= \dfrac{3}{10}
\end{align*}
$$
************


@ADetails(1=BE; Bruchrechnung, Vorrangsregeln, Distributivgesetz)

</div>

</section>





