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

comment: Lege mit vier Pentominoformen negative Summen und die Summe null.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Pentominos auf dem Hunderterfeld mit negativen Zahlen I

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Drehe den Stein bei Bedarf.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** eine Lage für `I5` mit der Summe $-105$.

@PentominoBoard_(NZ0111a)

@PentominoChart_(NZ0111a,`NZ0111a`,`negative`)

@PentominoConfig_(NZ0111a,`NZ0111a`,`name=NZ0111a;type=I5;numbers=[1,2,3,4,5]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0111a', 'NZ0111a', -105) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $-1$, $-11$, $-21$, $-31$ und $-41$.

$$
-1 + (-11) + (-21) + (-31) + (-41) = -105
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** eine Lage für `T5` mit der Summe $-17$.

@PentominoBoard_(NZ0111b)

@PentominoChart_(NZ0111b,`NZ0111b`,`negative`)

@PentominoConfig_(NZ0111b,`NZ0111b`,`name=NZ0111b;type=T5;numbers=[6,7,8,17,27]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0111b', 'NZ0111b', -17) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $6$, $-2$, $-3$, $-4$ und $-14$.

$$
6 + (-2) + (-3) + (-4) + (-14) = -17
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** eine Lage für `L5` mit der Summe $-36$.

@PentominoBoard_(NZ0111c)

@PentominoChart_(NZ0111c,`NZ0111c`,`negative`)

@PentominoConfig_(NZ0111c,`NZ0111c`,`name=NZ0111c;type=L5;numbers=[11,21,31,41,42]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0111c', 'NZ0111c', -36) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $-4$, $-5$, $-6$, $-7$ und $-14$.

$$
-4 + (-5) + (-6) + (-7) + (-14) = -36
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** eine Lage für `U5` mit der Summe $0$.

@PentominoBoard_(NZ0111d)

@PentominoChart_(NZ0111d,`NZ0111d`,`negative`)

@PentominoConfig_(NZ0111d,`NZ0111d`,`name=NZ0111d;type=U5;numbers=[1,2,3,11,13]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0111d', 'NZ0111d', 0) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $5$, $4$, $3$, $-5$ und $-7$.

$$
5 + 4 + 3 + (-5) + (-7) = 0
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>
