<!--
version:  1.0.0
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-pentominos/main/README.md

tags: Negative Zahlen, Addition, mittel, sehr niedrig, Berechnen

comment: Berechne die Summe nach einer Verschiebung auf dem Hunderterfeld mit negativen Zahlen.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Summe nach Verschiebungen im Hunderterfeld mit negativen Zahlen I

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Berechne die Summe vor dem Verschieben. Kontrolliere sie anschließend am Hunderterfeld.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ Der Stein `I2` bedeckt die Zahlen $-4$ und $-5$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn ein Feld nach rechts verschiebst.

@PentominoBoard_(NZ0115a)

@PentominoChart_(NZ0115a,`NZ0115a`,`negative`)

@PentominoConfig_(NZ0115a,`NZ0115a`,`name=NZ0115a;type=I2;numbers=[55,56]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ -11 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $-4 + (-5) = -9$. Jede bedeckte Zahl wird insgesamt um $1$ kleiner.

$$
(-9) - 2 \cdot 1 = -11
$$

Der Stein bedeckt jetzt $-5$ und $-6$. Die neue Summe beträgt $-11$.
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$b)\;\;$ Der Stein `L3` bedeckt die Zahlen $6$, $5$ und $-4$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn eine Zeile nach unten verschiebst.

@PentominoBoard_(NZ0115b)

@PentominoChart_(NZ0115b,`NZ0115b`,`negative`)

@PentominoConfig_(NZ0115b,`NZ0115b`,`name=NZ0115b;type=L3;numbers=[45,46,55]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ -23 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $6 + 5 + (-4) = 7$. Jede bedeckte Zahl wird insgesamt um $10$ kleiner.

$$
7 - 3 \cdot 10 = -23
$$

Der Stein bedeckt jetzt $-4$, $-5$ und $-14$. Die neue Summe beträgt $-23$.
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ Der Stein `O4` bedeckt die Zahlen $-2$, $-3$, $-12$ und $-13$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn eine Zeile nach oben verschiebst.

@PentominoBoard_(NZ0115c)

@PentominoChart_(NZ0115c,`NZ0115c`,`negative`)

@PentominoConfig_(NZ0115c,`NZ0115c`,`name=NZ0115c;type=O4;numbers=[53,54,63,64]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ 10 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $-2 + (-3) + (-12) + (-13) = -30$. Jede bedeckte Zahl wird insgesamt um $10$ größer.

$$
(-30) + 4 \cdot 10 = 10
$$

Der Stein bedeckt jetzt $8$, $7$, $-2$ und $-3$. Die neue Summe beträgt $10$.
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$d)\;\;$ Der Stein `I5` bedeckt die Zahlen $18$, $8$, $-2$, $-12$ und $-22$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn ein Feld nach links verschiebst.

@PentominoBoard_(NZ0115d)

@PentominoChart_(NZ0115d,`NZ0115d`,`negative`)

@PentominoConfig_(NZ0115d,`NZ0115d`,`name=NZ0115d;type=I5;numbers=[33,43,53,63,73]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ -5 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $18 + 8 + (-2) + (-12) + (-22) = -10$. Jede bedeckte Zahl wird insgesamt um $1$ größer.

$$
(-10) + 5 \cdot 1 = -5
$$

Der Stein bedeckt jetzt $19$, $9$, $-1$, $-11$ und $-21$. Die neue Summe beträgt $-5$.
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>
