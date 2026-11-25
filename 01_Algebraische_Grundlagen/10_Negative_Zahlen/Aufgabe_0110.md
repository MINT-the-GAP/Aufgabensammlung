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

comment: Bestimme mit Tetrominos Lagen zu positiven und negativen Summen.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Tetrominos auf dem Hunderterfeld mit negativen Zahlen II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Drehe den Stein bei Bedarf.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** eine Lage für `O4` mit der Summe $-66$.

@PentominoBoard_(NZ0110a)

@PentominoChart_(NZ0110a,`NZ0110a`,`negative`)

@PentominoConfig_(NZ0110a,`NZ0110a`,`name=NZ0110a;type=O4;numbers=[1,2,11,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0110a', 'NZ0110a', -66) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $-11$, $-12$, $-21$ und $-22$.

$$
-11 + (-12) + (-21) + (-22) = -66
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** eine Lage für `O4` mit der Summe $6$.

@PentominoBoard_(NZ0110b)

@PentominoChart_(NZ0110b,`NZ0110b`,`negative`)

@PentominoConfig_(NZ0110b,`NZ0110b`,`name=NZ0110b;type=O4;numbers=[1,2,11,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0110b', 'NZ0110b', 6) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $7$, $6$, $-3$ und $-4$.

$$
7 + 6 + (-3) + (-4) = 6
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** eine Lage für `T4` mit der Summe $-15$.

@PentominoBoard_(NZ0110c)

@PentominoChart_(NZ0110c,`NZ0110c`,`negative`)

@PentominoConfig_(NZ0110c,`NZ0110c`,`name=NZ0110c;type=T4;numbers=[1,2,3,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0110c', 'NZ0110c', -15) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $6$, $-3$, $-4$ und $-14$.

$$
6 + (-3) + (-4) + (-14) = -15
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** eine Lage für `T4` mit der Summe $11$.

@PentominoBoard_(NZ0110d)

@PentominoChart_(NZ0110d,`NZ0110d`,`negative`)

@PentominoConfig_(NZ0110d,`NZ0110d`,`name=NZ0110d;type=T4;numbers=[1,2,3,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0110d', 'NZ0110d', 11) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $13$, $3$, $2$ und $-7$.

$$
13 + 3 + 2 + (-7) = 11
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>
