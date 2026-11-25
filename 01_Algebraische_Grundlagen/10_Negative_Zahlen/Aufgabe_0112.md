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

tags: Negative Zahlen, Addition, mittel, sehr niedrig, Bestimmen

comment: Bestimme Lagen von vier Pentominos, die positive und negative Summanden bedecken.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Pentominos auf dem Hunderterfeld mit negativen Zahlen II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Drehe den Stein bei Bedarf.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** eine Lage für `I5` mit der Summe $5$.

@PentominoBoard_(NZ0112a)

@PentominoChart_(NZ0112a,`NZ0112a`,`negative`)

@PentominoConfig_(NZ0112a,`NZ0112a`,`name=NZ0112a;type=I5;numbers=[1,2,3,4,5]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0112a', 'NZ0112a', 5) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $21$, $11$, $1$, $-9$ und $-19$.

$$
21 + 11 + 1 + (-9) + (-19) = 5
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** eine Lage für `T5` mit der Summe $-40$.

@PentominoBoard_(NZ0112b)

@PentominoChart_(NZ0112b,`NZ0112b`,`negative`)

@PentominoConfig_(NZ0112b,`NZ0112b`,`name=NZ0112b;type=T5;numbers=[6,7,8,17,27]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0112b', 'NZ0112b', -40) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $-1$, $-2$, $-3$, $-12$ und $-22$.

$$
-1 + (-2) + (-3) + (-12) + (-22) = -40
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** eine Lage für `W5` mit der Summe $-14$.

@PentominoBoard_(NZ0112c)

@PentominoChart_(NZ0112c,`NZ0112c`,`negative`)

@PentominoConfig_(NZ0112c,`NZ0112c`,`name=NZ0112c;type=W5;numbers=[1,2,12,13,23]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0112c', 'NZ0112c', -14) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $10$, $0$, $-1$, $-11$ und $-12$.

$$
10 + 0 + (-1) + (-11) + (-12) = -14
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** eine Lage für `U5` mit der Summe $20$.

@PentominoBoard_(NZ0112d)

@PentominoChart_(NZ0112d,`NZ0112d`,`negative`)

@PentominoConfig_(NZ0112d,`NZ0112d`,`name=NZ0112d;type=U5;numbers=[1,2,3,11,13]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0112d', 'NZ0112d', 20) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $9$, $8$, $7$, $-1$ und $-3$.

$$
9 + 8 + 7 + (-1) + (-3) = 20
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>
