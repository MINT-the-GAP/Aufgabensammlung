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















tags: Äquivalenzumformung, Sachaufgabe, Bruchrechnung, negative Zahlen, mittel, normal, Berechnen, 

comment: Löse eine Sachaufgabe mit Förderbändern mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Förderbänder


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Auf zwei Förderbändern liegen Kisten.  
Auf Band 1 liegen zu Beginn 18 Kisten, und pro Minute kommen 1,25 Kisten dazu.  
Auf Band 2 liegen zu Beginn 44 Kisten, und pro Minute werden 1,75 Kisten abtransportiert.  
**Berechne**, nach wie vielen Minuten auf beiden Bändern gleich viele Kisten liegen.




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$x$ = [[  26/3  ]] @canvas
@Algebrite.check(26/3)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{5}{4}x + 18 \;\stackrel{!}{=}\; 44 - \dfrac{7}{4}x
$$

$$
\begin{align*}
\dfrac{5}{4}x + 18 &= 44 - \dfrac{7}{4}x \quad \left|\, +\dfrac{7}{4}x \right.\\[2pt]
\left(\dfrac{5}{4} + \dfrac{7}{4}\right)x + 18 &= 44 \quad \left|\, -18 \right.\\[2pt]
\dfrac{12}{4}x &= 26 \quad \left|\, :\dfrac{12}{4} \right.\\[2pt]
3x &= 26 \quad \left|\, :3 \right.\\[2pt]
x &= \dfrac{26}{3}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{\dfrac{5}{4}\cdot\dfrac{26}{3} + 18}_{\text{Band 1}}
= \dfrac{130}{12} + \dfrac{216}{12}
= \dfrac{346}{12}
= \dfrac{173}{6}   \\
&\quad\text{und}\quad   \\
&\underbrace{44 - \dfrac{7}{4}\cdot\dfrac{26}{3}}_{\text{Band 2}}
= \dfrac{264}{6} - \dfrac{91}{6}
= \dfrac{173}{6}
\end{align*}
$$


Deutung: Nach $\dfrac{26}{3}\approx 8{,}7$  Minuten liegen auf beiden Bändern gleich viele Kisten ($\dfrac{173}{6}\approx 28{,}8$ Kisten).

************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung, Sachaufgabe)
