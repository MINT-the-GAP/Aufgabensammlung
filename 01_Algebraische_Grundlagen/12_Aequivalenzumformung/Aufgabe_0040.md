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

comment: Löse eine Sachaufgabe mit Raumtemperaturen  mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Raumtemperaturen 


In zwei Räumen ändert sich die Temperatur gleichmäßig: 
In Raum 1 ist es anfangs 16 °C und die Temperatur steigt pro Stunde um 1,5 °C.  
In Raum 2 ist es anfangs 28 °C und die Temperatur sinkt pro Stunde um 0,75 °C.  
**Berechne**, nach wie vielen Stunden beide Räume die gleiche Temperatur haben.

<!-- data-solution-button="5"-->
$x$ = [[  16/3  ]]
@Algebrite.check(16/3)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{3}{2}x + 16 \;\stackrel{!}{=}\; 28 - \dfrac{3}{4}x
$$

$$
\begin{align*}
\dfrac{3}{2}x + 16 &= 28 - \dfrac{3}{4}x \quad \left|\, +\dfrac{3}{4}x \right.\\[2pt]
\left(\dfrac{3}{2} + \dfrac{3}{4}\right)x + 16 &= 28 \quad \left|\, -16 \right.\\[2pt]
\dfrac{9}{4}x &= 12 \quad \left|\, :\dfrac{9}{4} \right.\\[2pt]
x &= 12 \cdot \dfrac{4}{9} \;=\; \dfrac{16}{3}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{16 + \dfrac{3}{2}\cdot \dfrac{16}{3}}_{\text{Raum 1}}
= 16 + 8
= 24^\circ\mathrm{C}  \\
&\quad\text{und}\quad  \\
&\underbrace{28 - \dfrac{3}{4}\cdot \dfrac{16}{3}}_{\text{Raum 2}}
= 28 - 4
= 24^\circ\mathrm{C}
\end{align*}
$$


Deutung: Nach $\dfrac{16}{3}\approx 5{,}3$ Stunden haben beide Räume $24^\circ\mathrm{C}$.
************