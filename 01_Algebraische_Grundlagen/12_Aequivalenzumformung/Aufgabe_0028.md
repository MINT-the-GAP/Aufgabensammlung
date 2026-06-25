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














tags: Äquivalenzumformung, Distributivgesetz, Bruchrechnung, negative Zahlen, hoch, schwer, Berechnen, 

comment: Führe eine Äquivalenzumformung mit rationalen Zahlen aus.

author: Martin Lommatzsch

-->




# Äquivalenzumformung mit Nennern



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
**Berechne** den Lösungswert für die Unbekannte.




<section class="dynFlex">
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$a)\;\;$__ $  \dfrac{5}{x-2} = \dfrac{3}{2x+1} $ \
$x$ = [[  -11/7  ]] @canvas
@Algebrite.check(-11/7)
************
$$
\begin{align*}
\dfrac{5}{x-2} &= \dfrac{3}{2x+1} \quad \left| \cdot(x-2) \right. \\
5 &= \dfrac{3(x-2)}{2x+1} \quad \left| \cdot(2x+1) \right. \\
5(2x+1) &= 3(x-2) \\
10x + 5 &= 3x - 6 \quad \left| -3x \right. \\
7x + 5 &= -6 \quad \left| -5 \right. \\
7x &= -11 \quad \left| :7 \right. \\
x &= -\dfrac{11}{7}
\end{align*}
$$
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung)
</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$b)\;\;$__ $  \dfrac{7}{x+3} = \dfrac{2}{x-1} $ \
$x$ = [[  13/5  ]] @canvas
@Algebrite.check(13/5)
************
$$
\begin{align*}
\dfrac{7}{x+3} &= \dfrac{2}{x-1} \quad \left| \cdot(x+3) \right. \\
7 &= \dfrac{2(x+3)}{x-1} \quad \left| \cdot(x-1) \right. \\
7(x-1) &= 2(x+3) \\
7x - 7 &= 2x + 6 \quad \left| -2x \right. \\
5x - 7 &= 6 \quad \left| +7 \right. \\
5x &= 13 \quad \left| :5 \right. \\
x &= \dfrac{13}{5}
\end{align*}
$$
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung)
</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$c)\;\;$__ $  \dfrac{4}{2x-3} = \dfrac{9}{x+6} $ \
$x$ = [[  51/14  ]] @canvas
@Algebrite.check(51/14)
************
$$
\begin{align*}
\dfrac{4}{2x-3} &= \dfrac{9}{x+6} \quad \left| \cdot(2x-3) \right. \\
4 &= \dfrac{9(2x-3)}{x+6} \quad \left| \cdot(x+6) \right. \\
4(x+6) &= 9(2x-3) \\
4x + 24 &= 18x - 27 \quad \left| -4x \right. \\
24 &= 14x - 27 \quad \left| +27 \right. \\
51 &= 14x \quad \left| :14 \right. \\
x &= \dfrac{51}{14}
\end{align*}
$$
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung)

</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$d)\;\;$__ $  \dfrac{3}{x-4} = \dfrac{5}{2x+7} $ \
$x$ = [[  -41  ]] @canvas
@Algebrite.check(-41)
************
$$
\begin{align*}
\dfrac{3}{x-4} &= \dfrac{5}{2x+7} \quad \left| \cdot(x-4) \right. \\
3 &= \dfrac{5(x-4)}{2x+7} \quad \left| \cdot(2x+7) \right. \\
3(2x+7) &= 5(x-4) \\
6x + 21 &= 5x - 20 \quad \left| -5x \right. \\
x + 21 &= -20 \quad \left| -21 \right. \\
x &= -41
\end{align*}
$$
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung)

</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$e)\;\;$__ $  \dfrac{2}{x+5} = \dfrac{7}{3x-2} $ \
$x$ = [[  -39  ]] @canvas
@Algebrite.check(-39)
************
$$
\begin{align*}
\dfrac{2}{x+5} &= \dfrac{7}{3x-2} \quad \left| \cdot(x+5) \right. \\
2 &= \dfrac{7(x+5)}{3x-2} \quad \left| \cdot(3x-2) \right. \\
2(3x-2) &= 7(x+5) \\
6x - 4 &= 7x + 35 \quad \left| -6x \right. \\
-4 &= x + 35 \quad \left| -35 \right. \\
-39 &= x \\
x &= -39
\end{align*}
$$
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung)
</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$f)\;\;$__ $  \dfrac{5}{x-1} = \dfrac{8}{x+6} $ \
$x$ = [[  38/3  ]] @canvas
@Algebrite.check(38/3)
************
$$
\begin{align*}
\dfrac{5}{x-1} &= \dfrac{8}{x+6} \quad \left| \cdot(x-1) \right. \\
5 &= \dfrac{8(x-1)}{x+6} \quad \left| \cdot(x+6) \right. \\
5(x+6) &= 8(x-1) \\
5x + 30 &= 8x - 8 \quad \left| -5x \right. \\
30 &= 3x - 8 \quad \left| +8 \right. \\
38 &= 3x \quad \left| :3 \right. \\
x &= \dfrac{38}{3}
\end{align*}
$$
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung)
</div>
</section>
