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















tags: Äquivalenzumformung, Sachaufgabe, Bruchrechnung, negative Zahlen, sehr schwer, normal, Berechnen, 

comment: Löse eine Sachaufgabe mit Kerzen mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Kerzen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
Im Kaminzimmer stehen zwei Kerzen auf dem Kaminsims.  
Die erste Kerze wird um 18:00 Uhr angezündet; sie ist anfangs 36 cm lang und wird pro Stunde um 1,2 cm kürzer.  
Die zweite Kerze ist anfangs 24 cm lang, wird aber erst fünf Stunden später angezündet; sie brennt dann langsamer und verliert pro Stunde 0,3 cm.  
**Berechne**, nach wie vielen Stunden seit dem Anzünden der ersten Kerze beide Kerzen gleich lang sind.  




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$x$ = [[  35/3  ]] @canvas
@Algebrite.check(35/3)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
36 - \dfrac{6}{5}x \;\stackrel{!}{=}\; 24 - \dfrac{3}{10}\,\bigl(x - 5\bigr)
$$

$$
\begin{align*}
36 - \dfrac{6}{5}x &= 24 - \dfrac{3}{10}x + \dfrac{3}{2}  \\[2pt]
36 - \dfrac{6}{5}x &= \dfrac{51}{2} - \dfrac{3}{10}x \quad \left|\, +\dfrac{6}{5}x \right.\\[2pt]
36 &= \dfrac{51}{2} + \left(\dfrac{6}{5} - \dfrac{3}{10}\right)x 
= \dfrac{51}{2} + \dfrac{9}{10}x \quad \left|\, -\dfrac{51}{2} \right.\\[2pt]
36 - \dfrac{51}{2} &= \dfrac{9}{10}x 
\quad\Rightarrow\quad \dfrac{21}{2} = \dfrac{9}{10}x \quad \left|\, :\dfrac{9}{10} \right.\\[2pt]
x &= \dfrac{21}{2}\cdot \dfrac{10}{9} = \dfrac{105}{9} = \dfrac{35}{3}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{36 - \dfrac{6}{5}\cdot \dfrac{35}{3}}_{\text{1. Kerze}}
= 36 - 14 = 22    \\
&\quad\text{und}\quad   \\
&\underbrace{24 - \dfrac{3}{10}\!\left(\dfrac{35}{3} - 5\right)}_{\text{2. Kerze}}
= 24 - \dfrac{3}{10}\cdot \dfrac{20}{3}
= 24 - 2 = 22
\end{align*}
$$

Deutung: Nach $\dfrac{35}{3} \approx 11{,}7$ Stunden (also gegen 05:40 Uhr) sind beide Kerzen 22 cm lang.
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung, Sachaufgabe)