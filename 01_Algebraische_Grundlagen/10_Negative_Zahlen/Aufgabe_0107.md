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

comment: Drehe und verschiebe ein Triomino und bestimme Lagen zu vorgegebenen Summen mit negativen Summanden.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Triominos auf dem Hunderterfeld mit negativen Zahlen I

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Drehe den Stein bei Bedarf.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** eine Lage des Triominos mit der Summe $-18$.

@PentominoBoard_(NZ0107a)

@PentominoChart_(NZ0107a,`NZ0107a`,`negative`)

@PentominoConfig_(NZ0107a,`NZ0107a`,`name=NZ0107a;type=L3;numbers=[1,2,11]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0107a', 'NZ0107a', -18) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $-2$, $-3$ und $-13$.

$$
-2 + (-3) + (-13) = -18
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** eine Lage des Triominos mit der Summe $-22$.

@PentominoBoard_(NZ0107b)

@PentominoChart_(NZ0107b,`NZ0107b`,`negative`)

@PentominoConfig_(NZ0107b,`NZ0107b`,`name=NZ0107b;type=L3;numbers=[1,2,11]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0107b', 'NZ0107b', -22) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $-1$, $-10$ und $-11$.

$$
-1 + (-10) + (-11) = -22
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** eine Lage des Triominos mit der Summe $-4$.

@PentominoBoard_(NZ0107c)

@PentominoChart_(NZ0107c,`NZ0107c`,`negative`)

@PentominoConfig_(NZ0107c,`NZ0107c`,`name=NZ0107c;type=L3;numbers=[1,2,11]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0107c', 'NZ0107c', -4) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $5$, $-4$ und $-5$.

$$
5 + (-4) + (-5) = -4
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** eine Lage des Triominos mit der Summe $4$.

@PentominoBoard_(NZ0107d)

@PentominoChart_(NZ0107d,`NZ0107d`,`negative`)

@PentominoConfig_(NZ0107d,`NZ0107d`,`name=NZ0107d;type=L3;numbers=[1,2,11]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0107d', 'NZ0107d', 4) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $5$, $4$ und $-5$.

$$
5 + 4 + (-5) = 4
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>
