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

tags: Negative Zahlen, Addition, sehr leicht, sehr niedrig, Bestimmen

comment: Finde horizontale und vertikale Lagen eines Duominos zu negativen Summen.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Duominos auf dem Hunderterfeld mit negativen Zahlen I

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** eine horizontale Lage für das Duomino mit der Summe $-15$.

@PentominoBoard_(NZ0105a)

@PentominoChart_(NZ0105a,`NZ0105a`,`negative`)

@PentominoConfig_(NZ0105a,`NZ0105a`,`name=NZ0105a;type=I2;numbers=[1,2]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0105a', 'NZ0105a', -15) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $-7$ und $-8$.

$$
-7 + (-8) = -15
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** eine horizontale Lage für das Duomino mit der Summe $-1$.

@PentominoBoard_(NZ0105b)

@PentominoChart_(NZ0105b,`NZ0105b`,`negative`)

@PentominoConfig_(NZ0105b,`NZ0105b`,`name=NZ0105b;type=I2;numbers=[1,2]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0105b', 'NZ0105b', -1) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $0$ und $-1$.

$$
0 + (-1) = -1
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** eine vertikale Lage für das Duomino mit der Summe $-18$.

@PentominoBoard_(NZ0105c)

@PentominoChart_(NZ0105c,`NZ0105c`,`negative`)

@PentominoConfig_(NZ0105c,`NZ0105c`,`name=NZ0105c;type=I2;numbers=[1,11]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0105c', 'NZ0105c', -18) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $-4$ und $-14$.

$$
-4 + (-14) = -18
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** eine vertikale Lage für das Duomino mit der Summe $-4$.

@PentominoBoard_(NZ0105d)

@PentominoChart_(NZ0105d,`NZ0105d`,`negative`)

@PentominoConfig_(NZ0105d,`NZ0105d`,`name=NZ0105d;type=I2;numbers=[1,11]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0105d', 'NZ0105d', -4) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $3$ und $-7$.

$$
3 + (-7) = -4
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>
