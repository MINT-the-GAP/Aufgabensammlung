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














tags: Äquivalenzumformung, Bruchrechnung, negative Zahlen, schwer, hoch, Berechnen, 

comment: Führe eine Äquivalenzumformung mit eingesetzten rationalen Zahlen aus.

author: Martin Lommatzsch

-->




# Äquivalenzumformung mit Einsetzen



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
**Berechne** den Lösungswert für die fehlende Größe.



<section class="dynFlex">
<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$a)\;\;$__ $  T = m g h \;\;$  mit $\;\;m=8 \;\;\wedge\;\; g=10 \;\;\wedge\;\; T=480$ \
$h$ = [[  6  ]] @canvas
************
$$
\begin{align*}
T &= m g h \quad \left| : (mg) \right. \\
h &= \dfrac{T}{m g} \\ 
h &= \dfrac{480}{8\cdot 10} \\
h &= \dfrac{480}{80}  \\
h &=   6 \\ 
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
__$b)\;\;$__ $ \dfrac{G\,M\,m}{r} = F\;\;$  mit $\;\;F=50 \;\;\wedge\;\; r=8 \;\;\wedge\;\; m=2 \;\;\wedge\;\; G=\dfrac{1}{10}$ \
$M$ = [[  2000  ]] @canvas
************
$$
\begin{align*}
\dfrac{G M m}{r} &= F \quad \left| \cdot r \right. \\
G\,M\,m &= F r \quad \left| : (Gm) \right. \\
M &= \dfrac{F r}{G m} \\ 
M &= \dfrac{50\cdot 8}{\left(\dfrac{1}{10}\right)\cdot 2} \\
M &= \dfrac{400}{\dfrac{1}{5}} \\
M &= 2000 \\ 
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
__$c)\;\;$__ $  \dfrac{V}{A} - a = a + V  \;\;$  mit $\;\; V=36 \;\;\wedge\;\; A=7$ \
$a$ = [[  -108/7  ]] @canvas
@Algebrite.check(-108/7)
************
$$
\begin{align*}
\dfrac{V}{A} - a &= a + V \quad \left| +a \right. \\
\dfrac{V}{A} &= 2a + V \quad \left| -V \right. \\
\dfrac{V}{A} - V &= 2a \quad \left| :2 \right. \\
a &= \dfrac{1}{2} \left(\dfrac{V}{A} - V\right) \\
a &= \dfrac{1}{2} \left(\dfrac{36}{7} - 36\right) \\
a &= \dfrac{1}{2} \left(\dfrac{36}{7} - \dfrac{252}{7}\right) \\
a &= \dfrac{1}{2} \left(-\dfrac{216}{7}\right) \\
a &= -\dfrac{108}{7} \\ 
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
__$d)\;\;$__ $   0 = \dfrac{1}{2} d r - d s a  \;\;$  mit $\;\;d=3 \;\;\wedge\;\; s=5 \;\;\wedge\;\; a=2$ \
$r$ = [[  20  ]] @canvas
************
$$
\begin{align*}
0 &= d \left(\dfrac{1}{2}r - s a\right) \quad \left| :d  \right. \\
0 &= \dfrac{1}{2}r - s a \quad \left| + s a \right. \\
\dfrac{1}{2}r &= s a \quad \left| \cdot 2 \right. \\
r &= 2 s a \\
r &= 2\cdot 5 \cdot 2 \\
r & = 20 
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
__$e)\;\;$__ $   m n + p o = m z \;\;$  mit $\;\; m=2 \;\;\wedge\;\; p=\dfrac{3}{2} \;\;\wedge\;\; z=3 \;\;\wedge\;\; n=\dfrac{5}{4}$ \
$o$ = [[  7/3  ]] @canvas
@Algebrite.check(7/3)
************
$$
\begin{align*}
m n + p o &= m z \quad \left| -mn \right. \\
p o &= m(z-n) \quad \left| :p \right. \\
o &= \dfrac{m(z-n)}{p} \\ 
o &= \dfrac{2 \left(3 - \dfrac{5}{4}\right)}{\dfrac{3}{2}} \\ 
o &= \dfrac{2 \left(\dfrac{12}{4} - \dfrac{5}{4}\right)}{\dfrac{3}{2}} \\ 
o &= \dfrac{2\cdot \dfrac{7}{4}}{\dfrac{3}{2}} \\ 
o &=  \dfrac{7}{2} : \dfrac{3}{2}  \\ 
o &= \dfrac{7}{2}\cdot \dfrac{2}{3} \\ 
o &= \dfrac{7}{3} \\ 
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
__$f)\;\;$__ $  m n + p o = m z - p q \;\;$  mit $\;\; m=\dfrac{1}{100} \;\;\wedge\;\;  p=8 \;\;\wedge\;\;  z=\dfrac{21}{5} \;\;\wedge\;\;  n=12 \;\;\wedge\;\;  q=\dfrac{3}{8}$ \
$o$ = [[  -1539/4000  ]] @canvas
@Algebrite.check(-1539/4000)
************
$$
\begin{align*}
mn + po &= mz - pq \quad \left| -mn \right. \\
po &= m(z-n) - pq \quad \left| :p \right. \\
o &= \dfrac{m(z-n)}{p} - q \\ 
o &= \dfrac{\dfrac{1}{100}\!\left(\dfrac{21}{5} - 12\right)}{8} - \dfrac{3}{8} \\
o &= \dfrac{\dfrac{1}{100}\!\left(\dfrac{21}{5} - \dfrac{60}{5}\right)}{8} - \dfrac{3}{8} \\
o &= \dfrac{\dfrac{1}{100}\!\left(-\dfrac{39}{5}\right)}{8} - \dfrac{3}{8} \\ 
o &= \dfrac{-\dfrac{39}{500}}{8} - \dfrac{3}{8} \\
o &= -\dfrac{39}{4000} - \dfrac{3}{8} \\ 
o &= -\dfrac{39}{4000} - \dfrac{1500}{4000} \\ 
o &= -\dfrac{1539}{4000} \\ 
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
__$g)\;\;$__ $   0 = \dfrac{1}{2} d r - d s a  \;\;$  mit $\;\; r=\dfrac{5}{2} \;\;\wedge\;\;  s=\dfrac{1}{4} \;\;\wedge\;\;  a=\dfrac{7}{8}$ \
$d$ = [[  0  ]] @canvas
************
$$
\begin{align*}
0 &= d \left(\dfrac{1}{2}r - s a\right) \\
\dfrac{1}{2}r - s a &= \dfrac{1}{2}\cdot \dfrac{5}{2} - \dfrac{1}{4}\cdot \dfrac{7}{8} \\ 
&= \dfrac{5}{4} - \dfrac{7}{32} \\ 
&= \dfrac{40-7}{32} \\ 
&= \dfrac{33}{32} \neq 0 \\ 
\Rightarrow\;& \text{Damit die Gleichung }  \left(\dfrac{1}{2}r - s a\right) \text{ gilt, muss } d=0 \text{ sein.} \\
d &= 0 \\ 
\end{align*}
$$
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung, Einsetzungsverfahren)
</div>
</section>

