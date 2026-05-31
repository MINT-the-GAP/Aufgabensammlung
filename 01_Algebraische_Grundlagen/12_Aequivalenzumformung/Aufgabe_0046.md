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















tags: Äquivalenzumformung, Sachaufgabe, Bruchrechnung, negative Zahlen, schwer, normal, Berechnen, 

comment: Löse eine Sachaufgabe mit Tauchrobotern mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Tauchroboter

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
Im großen Schaubecken werden zwei Tauchroboter getestet.  
Der erste startet 60 m unter der Wasseroberfläche und steigt gleichmäßig pro Minute um 3 m auf.  
Der zweite startet 10 m unter der Wasseroberfläche und taucht gleichmäßig pro Minute um 2,5 m weiter ab.  
**Berechne**, nach wie vielen Minuten beide Roboter in der gleichen Tiefe sind.

<!-- data-solution-button="5"-->
$x$ = [[  100/11  ]] @canvas
@Algebrite.check(100/11)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
3x - 60 \;\stackrel{!}{=}\; -10 - \dfrac{5}{2}x
$$

$$
\begin{align*}
3x - 60 &= -10 - \dfrac{5}{2}x \quad \left|\, +\dfrac{5}{2}x \right.\\[2pt]
\left(3 + \dfrac{5}{2}\right)x - 60 &= -10 \quad \left|\, +60 \right.\\[2pt]
\dfrac{11}{2}x &= 50 \quad \left|\, :\dfrac{11}{2} \right.\\[2pt]
x &= 50 \cdot \dfrac{2}{11} \;=\; \dfrac{100}{11}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{-60 + 3\cdot \dfrac{100}{11}}_{\text{1. Roboter}}
= -\dfrac{660}{11} + \dfrac{300}{11}
= -\dfrac{360}{11}
&\quad\text{und}\quad
&\underbrace{-10 - \dfrac{5}{2}\cdot \dfrac{100}{11}}_{\text{2. Roboter}}
= -\dfrac{110}{11} - \dfrac{250}{11}
= -\dfrac{360}{11}
\end{align*}
$$


Deutung: Nach $\dfrac{100}{11}\approx 9{,}09$ Minuten befinden sich beide in derselben Tiefe: $-\dfrac{360}{11}\approx -32{,}73$ m (also $32{,}73$ m unter der Oberfläche).


************

