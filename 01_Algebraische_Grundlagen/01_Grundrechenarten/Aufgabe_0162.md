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

tags: Addition, Grundrechenarten, schwer, sehr niedrig, Berechnen

comment: Die Änderung einer Summe bei zwei aufeinanderfolgenden Verschiebungen berechnen.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Summe nach Verschiebungen II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 4" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">

Berechne die Summe vor dem Verschieben. Kontrolliere sie anschließend am Hunderterfeld.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ Der Stein `I2` bedeckt die Zahlen $35$ und $45$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn zwei Felder nach rechts und danach eine Zeile nach unten verschiebst.

@Pentomino(`name=Grundrechenarten-0162-a;type=I2;numbers=[35,45]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ 104 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $35 + 45 = 80$. Jede bedeckte Zahl wird insgesamt um $12$ größer.

$$
80 + 2 \cdot 2 + 2 \cdot 10 = 104
$$

Der Stein bedeckt jetzt $47$ und $57$. Die neue Summe beträgt $104$.
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$b)\;\;$ Der Stein `L3` bedeckt die Zahlen $26$, $27$ und $36$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn ein Feld nach links und danach eine Zeile nach unten verschiebst.

@Pentomino(`name=Grundrechenarten-0162-b;type=L3;numbers=[26,27,36]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ 116 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $26 + 27 + 36 = 89$. Jede bedeckte Zahl wird insgesamt um $9$ größer.

$$
89 - 3 \cdot 1 + 3 \cdot 10 = 116
$$

Der Stein bedeckt jetzt $35$, $36$ und $45$. Die neue Summe beträgt $116$.
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ Der Stein `T4` bedeckt die Zahlen $52$, $53$, $54$ und $63$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn zwei Zeilen nach oben und danach ein Feld nach rechts verschiebst.

@Pentomino(`name=Grundrechenarten-0162-c;type=T4;numbers=[52,53,54,63]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ 146 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $52 + 53 + 54 + 63 = 222$. Jede bedeckte Zahl wird insgesamt um $19$ kleiner.

$$
222 - 4 \cdot 20 + 4 \cdot 1 = 146
$$

Der Stein bedeckt jetzt $33$, $34$, $35$ und $44$. Die neue Summe beträgt $146$.
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$d)\;\;$ Der Stein `I5` bedeckt die Zahlen $61$, $62$, $63$, $64$ und $65$. **Berechne** die Summe der bedeckten Zahlen, wenn du ihn zwei Zeilen nach unten und danach drei Felder nach rechts verschiebst.

@Pentomino(`name=Grundrechenarten-0162-d;type=I5;numbers=[61,62,63,64,65]`)

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
[[ 430 ]]
[[?]] @Explain
****************
Die Startsumme beträgt $61 + 62 + 63 + 64 + 65 = 315$. Jede bedeckte Zahl wird insgesamt um $23$ größer.

$$
315 + 5 \cdot 20 + 5 \cdot 3 = 430
$$

Der Stein bedeckt jetzt $84$, $85$, $86$, $87$ und $88$. Die neue Summe beträgt $430$.
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>
