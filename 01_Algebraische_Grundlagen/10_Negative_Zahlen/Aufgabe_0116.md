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

tags: Negative Zahlen, Addition, schwer, sehr niedrig, Berechnen

comment: Berechne die Summe nach zwei aufeinanderfolgenden Verschiebungen.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Summe nach Verschiebungen im Hunderterfeld mit negativen Zahlen II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 4" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">

Berechne die Summe vor dem Verschieben. Kontrolliere sie anschließend am Hunderterfeld.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ Der Stein `I2` bedeckt die Zahlen $8$ und $-2$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn zwei Felder nach rechts und danach eine Zeile nach unten verschiebst.

@PentominoBoard_(NZ0116a)

@PentominoChart_(NZ0116a,`NZ0116a`,`negative`)

@PentominoConfig_(NZ0116a,`NZ0116a`,`name=NZ0116a;type=I2;numbers=[43,53]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ -18 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $8 + (-2) = 6$. Jede bedeckte Zahl wird insgesamt um $12$ kleiner.

$$
6 - 2 \cdot 2 - 2 \cdot 10 = -18
$$

Der Stein bedeckt jetzt $-4$ und $-14$. Die neue Summe beträgt $-18$.
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$b)\;\;$ Der Stein `L3` bedeckt die Zahlen $-3$, $-4$ und $-13$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn ein Feld nach links und danach eine Zeile nach oben verschiebst.

@PentominoBoard_(NZ0116b)

@PentominoChart_(NZ0116b,`NZ0116b`,`negative`)

@PentominoConfig_(NZ0116b,`NZ0116b`,`name=NZ0116b;type=L3;numbers=[54,55,64]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ 13 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $-3 + (-4) + (-13) = -20$. Jede bedeckte Zahl wird insgesamt um $11$ größer.

$$
(-20) + 3 \cdot 1 + 3 \cdot 10 = 13
$$

Der Stein bedeckt jetzt $8$, $7$ und $-2$. Die neue Summe beträgt $13$.
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ Der Stein `T4` bedeckt die Zahlen $-2$, $-3$, $-4$ und $-13$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn eine Zeile nach oben und danach drei Felder nach rechts verschiebst.

@PentominoBoard_(NZ0116c)

@PentominoChart_(NZ0116c,`NZ0116c`,`negative`)

@PentominoConfig_(NZ0116c,`NZ0116c`,`name=NZ0116c;type=T4;numbers=[53,54,55,64]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ 6 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $-2 + (-3) + (-4) + (-13) = -22$. Jede bedeckte Zahl wird insgesamt um $7$ größer.

$$
(-22) + 4 \cdot 10 - 4 \cdot 3 = 6
$$

Der Stein bedeckt jetzt $5$, $4$, $3$ und $-6$. Die neue Summe beträgt $6$.
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$d)\;\;$ Der Stein `I5` bedeckt die Zahlen $-12$, $-13$, $-14$, $-15$ und $-16$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn zwei Zeilen nach oben und danach zwei Felder nach links verschiebst.

@PentominoBoard_(NZ0116d)

@PentominoChart_(NZ0116d,`NZ0116d`,`negative`)

@PentominoConfig_(NZ0116d,`NZ0116d`,`name=NZ0116d;type=I5;numbers=[63,64,65,66,67]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ 40 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $-12 + (-13) + (-14) + (-15) + (-16) = -70$. Jede bedeckte Zahl wird insgesamt um $22$ größer.

$$
(-70) + 5 \cdot 20 + 5 \cdot 2 = 40
$$

Der Stein bedeckt jetzt $10$, $9$, $8$, $7$ und $6$. Die neue Summe beträgt $40$.
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>
