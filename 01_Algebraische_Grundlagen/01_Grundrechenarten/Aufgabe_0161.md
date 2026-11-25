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

tags: Addition, Grundrechenarten, mittel, sehr niedrig, Berechnen

comment: Die Änderung einer Summe bei einer Verschiebung auf dem Hunderterfeld berechnen.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Summe nach Verschiebungen I

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Berechne die Summe vor dem Verschieben. Kontrolliere sie anschließend am Hunderterfeld.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ Der Stein `I2` bedeckt die Zahlen $22$ und $23$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn ein Feld nach rechts verschiebst.

@Pentomino(`name=Grundrechenarten-0161-a;type=I2;numbers=[22,23]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ 47 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $22 + 23 = 45$. Jede bedeckte Zahl wird insgesamt um $1$ größer.

$$
45 + 2 \cdot 1 = 47
$$

Der Stein bedeckt jetzt $23$ und $24$. Die neue Summe beträgt $47$.
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$b)\;\;$ Der Stein `L3` bedeckt die Zahlen $31$, $32$ und $41$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn zwei Felder nach rechts verschiebst.

@Pentomino(`name=Grundrechenarten-0161-b;type=L3;numbers=[31,32,41]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ 110 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $31 + 32 + 41 = 104$. Jede bedeckte Zahl wird insgesamt um $2$ größer.

$$
104 + 3 \cdot 2 = 110
$$

Der Stein bedeckt jetzt $33$, $34$ und $43$. Die neue Summe beträgt $110$.
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ Der Stein `O4` bedeckt die Zahlen $54$, $55$, $64$ und $65$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn eine Zeile nach oben verschiebst.

@Pentomino(`name=Grundrechenarten-0161-c;type=O4;numbers=[54,55,64,65]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ 198 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $54 + 55 + 64 + 65 = 238$. Jede bedeckte Zahl wird insgesamt um $10$ kleiner.

$$
238 - 4 \cdot 10 = 198
$$

Der Stein bedeckt jetzt $44$, $45$, $54$ und $55$. Die neue Summe beträgt $198$.
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$d)\;\;$ Der Stein `I5` bedeckt die Zahlen $42$, $52$, $62$, $72$ und $82$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn ein Feld nach links verschiebst.

@Pentomino(`name=Grundrechenarten-0161-d;type=I5;numbers=[42,52,62,72,82]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ 305 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $42 + 52 + 62 + 72 + 82 = 310$. Jede bedeckte Zahl wird insgesamt um $1$ kleiner.

$$
310 - 5 \cdot 1 = 305
$$

Der Stein bedeckt jetzt $41$, $51$, $61$, $71$ und $81$. Die neue Summe beträgt $305$.
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>
