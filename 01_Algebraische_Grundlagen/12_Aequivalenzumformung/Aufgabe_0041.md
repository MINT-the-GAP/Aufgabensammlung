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

comment: Löse eine Sachaufgabe um einen Anstieg und Abstieg mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Anstieg und Abstieg

Ein Anstieg beginnt auf 820 m und gewinnt pro Minute 9 m an Höhe.  
Ein Abstieg startet gleichzeitig auf 1130 m und verliert pro Minute 6 m an Höhe.  
**Berechne**, nach wie vielen Minuten beide Routen auf gleicher Höhe sind.

<!-- data-solution-button="5"-->
$x$ = [[  62/3  ]]
@Algebrite.check(62/3)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
9x + 820 \;\stackrel{!}{=}\; 1130 - 6x
$$

$$
\begin{align*}
9x + 820 &= 1130 - 6x \quad \left|\, +6x \right.\\[2pt]
15x + 820 &= 1130 \quad \left|\, -820 \right.\\[2pt]
15x &= 310 \quad \left|\, :15 \right.\\[2pt]
x &= \dfrac{310}{15} \;=\; \dfrac{62}{3}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{9\cdot \dfrac{62}{3} + 820}_{\text{Aufstieg}}
= 3\cdot 62 + 820
= 186 + 820
= 1006\ \text{m} \\
&\quad\text{und}\quad \\
&\underbrace{1130 - 6\cdot \dfrac{62}{3}}_{\text{Abstieg}}
= 1130 - 2\cdot 62
= 1130 - 124
= 1006\ \text{m}
\end{align*}
$$


Deutung: Nach $\dfrac{62}{3}\approx 20{,}7$ Minuten liegen beide bei 1006 m Höhe.

************