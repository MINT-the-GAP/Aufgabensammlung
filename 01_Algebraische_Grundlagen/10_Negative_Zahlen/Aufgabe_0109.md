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

comment: Lege mit quadratischen und T-förmigen Tetrominos vorgegebene negative Summen.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Tetrominos auf dem Hunderterfeld mit negativen Zahlen I

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Drehe den Stein bei Bedarf.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** eine Lage für `O4` mit der Summe $-26$.

@PentominoBoard_(NZ0109a)

@PentominoChart_(NZ0109a,`NZ0109a`,`negative`)

@PentominoConfig_(NZ0109a,`NZ0109a`,`name=NZ0109a;type=O4;numbers=[1,2,11,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0109a', 'NZ0109a', -26) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $-1$, $-2$, $-11$ und $-12$.

$$
-1 + (-2) + (-11) + (-12) = -26
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** eine Lage für `O4` mit der Summe $-10$.

@PentominoBoard_(NZ0109b)

@PentominoChart_(NZ0109b,`NZ0109b`,`negative`)

@PentominoConfig_(NZ0109b,`NZ0109b`,`name=NZ0109b;type=O4;numbers=[1,2,11,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0109b', 'NZ0109b', -10) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $3$, $2$, $-7$ und $-8$.

$$
3 + 2 + (-7) + (-8) = -10
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** eine Lage für `T4` mit der Summe $-43$.

@PentominoBoard_(NZ0109c)

@PentominoChart_(NZ0109c,`NZ0109c`,`negative`)

@PentominoConfig_(NZ0109c,`NZ0109c`,`name=NZ0109c;type=T4;numbers=[1,2,3,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0109c', 'NZ0109c', -43) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $-1$, $-10$, $-11$ und $-21$.

$$
-1 + (-10) + (-11) + (-21) = -43
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** eine Lage für `T4` mit der Summe $-5$.

@PentominoBoard_(NZ0109d)

@PentominoChart_(NZ0109d,`NZ0109d`,`negative`)

@PentominoConfig_(NZ0109d,`NZ0109d`,`name=NZ0109d;type=T4;numbers=[1,2,3,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0109d', 'NZ0109d', -5) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $9$, $-1$, $-2$ und $-11$.

$$
9 + (-1) + (-2) + (-11) = -5
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>
