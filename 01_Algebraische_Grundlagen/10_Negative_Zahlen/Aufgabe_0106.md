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

tags: Negative Zahlen, Addition, leicht, sehr niedrig, Bestimmen

comment: Bestimme Lage und Ausrichtung eines Duominos zu negativen Summen, zur Null und zu einer positiven Summe.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Duominos auf dem Hunderterfeld mit negativen Zahlen II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Drehe den Stein bei Bedarf.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** eine Lage für das Duomino mit der Summe $-27$.

@PentominoBoard_(NZ0106a)

@PentominoChart_(NZ0106a,`NZ0106a`,`negative`)

@PentominoConfig_(NZ0106a,`NZ0106a`,`name=NZ0106a;type=I2;numbers=[1,2]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0106a', 'NZ0106a', -27) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $-13$ und $-14$.

$$
-13 + (-14) = -27
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** eine Lage für das Duomino mit der Summe $-46$.

@PentominoBoard_(NZ0106b)

@PentominoChart_(NZ0106b,`NZ0106b`,`negative`)

@PentominoConfig_(NZ0106b,`NZ0106b`,`name=NZ0106b;type=I2;numbers=[1,2]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0106b', 'NZ0106b', -46) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $-18$ und $-28$.

$$
-18 + (-28) = -46
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** eine Lage für das Duomino mit der Summe $0$.

@PentominoBoard_(NZ0106c)

@PentominoChart_(NZ0106c,`NZ0106c`,`negative`)

@PentominoConfig_(NZ0106c,`NZ0106c`,`name=NZ0106c;type=I2;numbers=[1,2]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0106c', 'NZ0106c', 0) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $5$ und $-5$.

$$
5 + (-5) = 0
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** eine Lage für das Duomino mit der Summe $6$.

@PentominoBoard_(NZ0106d)

@PentominoChart_(NZ0106d,`NZ0106d`,`negative`)

@PentominoConfig_(NZ0106d,`NZ0106d`,`name=NZ0106d;type=I2;numbers=[1,2]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0106d', 'NZ0106d', 6) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $8$ und $-2$.

$$
8 + (-2) = 6
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>
