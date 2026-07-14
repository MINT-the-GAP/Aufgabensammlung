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















tags: Äquivalenzumformung, Bruchrechnung, negative Zahlen, schwer, hoch, Berechnen, 

comment: Führe eine Äquivalenzumformung mit eingesetzten rationalen Zahlen aus.

author: Martin Lommatzsch

-->




# Äquivalenzumformung mit Einsetzen




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
<section class="dynFlex">
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$a)\;\;$__ $   F = m a \;\;$  mit $\;\;a=2 \;\;\wedge\;\; F=30$ \
$m$ = [[  15  ]] @canvas
************
$$
\begin{align*}
F &= m a \quad \left| :a \right. \\
m &= \dfrac{F}{a} \\ 
m &= \dfrac{30}{2}  \\
m &= 15  \\
\end{align*}
$$
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung, Einsetzungsverfahren)
</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$b)\;\;$__ $   U - T = \dfrac{1}{2} v \;\;$  mit $\;\; v=5 \;\;\wedge\;\; U=7$ \
$T$ = [[  9/2  ]] @canvas
@Algebrite.check(9/2)
************
$$
\begin{align*}
U - T &= \dfrac{1}{2} v \quad \left| -U \right. \\
-T &= \dfrac{1}{2} v - U \quad \left| \cdot (-1) \right. \\
T &= U - \dfrac{1}{2}v \\ 
T &= 7 - \dfrac{1}{2}\cdot 5  \\
T &= 7 - \dfrac{5}{2}  \\
T &= \dfrac{14}{2} - \dfrac{5}{2}  \\
T &= \dfrac{9}{2} \\
\end{align*}
$$
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung, Einsetzungsverfahren)
</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$c)\;\;$__ $   r = 2x + 2y + z \;\;$  mit $\;\; r=12 \;\;\wedge\;\; x=0,4 \;\;\wedge\;\; z=1,5$ \
$y$ = [[  97/20  ]] @canvas
@Algebrite.check(97/20)
************
$$
\begin{align*}
r &= 2x + 2y + z \quad \left| -2x  \right. \\
r -2x &=  2y + z \quad \left|  - z \right. \\
r - 2x - z &= 2y \quad \left| :2 \right. \\
y &= \dfrac{r - 2x - z}{2} \\ 
y &= \dfrac{12 - 2\cdot 0,4 - 1,5}{2} \\
y &= \dfrac{12 - 0,8 - 1,5}{2} \\
y &= \dfrac{9,7}{2} \\
y &= \dfrac{97}{20} \\
\end{align*}
$$
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung, Einsetzungsverfahren)
</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$d)\;\;$__ $   pV = \dfrac{3}{2}kNT \;\;$  mit $\;\; N=100 \;\;\wedge\;\; k=5 \;\;\wedge\;\; p=30 \;\;\wedge\;\; V=20$ \
$T$ = [[  4/5  ]] @canvas
@Algebrite.check(4/5)
************
$$
\begin{align*}
pV &= \dfrac{3}{2}kNT \quad \left| : \left(\dfrac{3}{2}kN\right) \right. \\
T &= \dfrac{pV}{\dfrac{3}{2}kN} \\ 
T &= \dfrac{30\cdot 20}{\dfrac{3}{2}\cdot 5 \cdot 100} \\
T &= \dfrac{600}{750}  \\
T &= \dfrac{4}{5}  \\
\end{align*}
$$
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung, Einsetzungsverfahren)
</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$e)\;\;$__ $   8ab - c = cb + b \;\;$  mit $\;\; b=3 \;\;\wedge\;\; c=0,75$ \

$a$ = [[  1/4  ]] @canvas
@Algebrite.check(1/4)
************
$$
\begin{align*}
8ab - c &= cb + b \quad \left| +c \right. \\
8ab &= cb + b + c \quad \left| : (8b) \right. \\
a &= \dfrac{cb + b + c}{8b} \\ 
a &= \dfrac{0,75\cdot 3 + 3 + 0,75}{8\cdot 3} \\
a &= \dfrac{2,25 + 3 + 0,75}{24} \\
a &= \dfrac{6}{24} \\
a &= \dfrac{1}{4} \\
\end{align*}
$$
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung, Einsetzungsverfahren)
</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$f)\;\;$__ $   G\dfrac{M m}{r} = F \;\;$  mit $\;\; F=120 \;\;\wedge\;\; M=4,5 \;\;\wedge\;\; m=9,5 \;\;\wedge\;\; G=1,2$ \
$r$ = [[  4275/10000  ]] @canvas
@Algebrite.check(4275/10000)
************
$$
\begin{align*}
\dfrac{G M m}{r} &= F \quad \left| \cdot r \right. \\
G M m &= F r \quad \left| :F \right. \\
r &= \dfrac{G M m}{F} \\ 
r &= \dfrac{1,2\cdot 4,5 \cdot 9,5}{120}  \\
r &= \dfrac{51,3}{120}  \\
r &= 0,4275  \\
\end{align*}
$$
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung, Einsetzungsverfahren)
</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$g)\;\;$__ $  \dfrac{A}{B} = \dfrac{C}{D} \;\;$  mit $\;\; A=0,2 \;\;\wedge\;\; B=0,5 \;\;\wedge\;\; C=6$ \
$D$ = [[  15  ]] @canvas
************
$$
\begin{align*}
\dfrac{A}{B} &= \dfrac{C}{D} \quad \left| \cdot D \right. \\
\dfrac{A}{B}D &= C \quad \left| \cdot B \right. \\
AD &= BC \quad \left| :A \right. \\
D &= \dfrac{B C}{A} \\ 
D &= \dfrac{0,5\cdot 6}{0,2}  \\
D &= \dfrac{3}{0,2}  \\
D &= 15
\end{align*}
$$
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung, Einsetzungsverfahren)
</div>
</section>
