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

comment: Finde mit einem Triomino zu negativen und positiven Summen sowie zur Null passende Lagen.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Triominos auf dem Hunderterfeld mit negativen Zahlen II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Drehe den Stein bei Bedarf.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** eine Lage des Triominos mit der Summe $-34$.

@PentominoBoard_(NZ0108a)

@PentominoChart_(NZ0108a,`NZ0108a`,`negative`)

@PentominoConfig_(NZ0108a,`NZ0108a`,`name=NZ0108a;type=L3;numbers=[1,2,11]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0108a', 'NZ0108a', -34) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $-5$, $-14$ und $-15$.

$$
-5 + (-14) + (-15) = -34
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** eine Lage des Triominos mit der Summe $-13$.

@PentominoBoard_(NZ0108b)

@PentominoChart_(NZ0108b,`NZ0108b`,`negative`)

@PentominoConfig_(NZ0108b,`NZ0108b`,`name=NZ0108b;type=L3;numbers=[1,2,11]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0108b', 'NZ0108b', -13) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $2$, $-7$ und $-8$.

$$
2 + (-7) + (-8) = -13
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** eine Lage des Triominos mit der Summe $0$.

@PentominoBoard_(NZ0108c)

@PentominoChart_(NZ0108c,`NZ0108c`,`negative`)

@PentominoConfig_(NZ0108c,`NZ0108c`,`name=NZ0108c;type=L3;numbers=[1,2,11]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0108c', 'NZ0108c', 0) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $4$, $3$ und $-7$.

$$
4 + 3 + (-7) = 0
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** eine Lage des Triominos mit der Summe $7$.

@PentominoBoard_(NZ0108d)

@PentominoChart_(NZ0108d,`NZ0108d`,`negative`)

@PentominoConfig_(NZ0108d,`NZ0108d`,`name=NZ0108d;type=L3;numbers=[1,2,11]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.coversSum('NZ0108d', 'NZ0108d', 7) === true;
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $6$, $5$ und $-4$.

$$
6 + 5 + (-4) = 7
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>
