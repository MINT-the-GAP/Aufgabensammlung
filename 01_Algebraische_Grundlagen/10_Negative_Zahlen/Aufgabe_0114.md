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

tags: Negative Zahlen, Addition, schwer, sehr niedrig, Auswählen

comment: Bestimme unter jeweils drei Formen einen Stein, der die vorgegebene Summe abdecken kann.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Passende Steine auf dem Hunderterfeld mit negativen Zahlen II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 4" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">

Die Steine findest du im Inventar.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Wähle** aus `W5`, `I5` und `L5` den passenden Stein **aus** und **lege** damit die Summe $-25$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0114a)

@PentominoChart_(NZ0114a,`NZ0114a`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0114a,`NZ0114a`,`W5,I5,L5`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.dockCoversSum('NZ0114a', 'pentomino-dock-NZ0114a', -25) === true;
</script>
****************
Mit `I5` kannst du zum Beispiel die Zahlen $-3$, $-4$, $-5$, $-6$ und $-7$ bedecken.

$$
-3 + (-4) + (-5) + (-6) + (-7) = -25
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$b)\;\;$ **Wähle** aus `I5`, `U5` und `W5` den passenden Stein **aus** und **lege** damit die Summe $9$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0114b)

@PentominoChart_(NZ0114b,`NZ0114b`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0114b,`NZ0114b`,`I5,U5,W5`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.dockCoversSum('NZ0114b', 'pentomino-dock-NZ0114b', 9) === true;
</script>
****************
Mit `W5` kannst du zum Beispiel die Zahlen $13$, $4$, $3$, $-5$ und $-6$ bedecken.

$$
13 + 4 + 3 + (-5) + (-6) = 9
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Wähle** aus `L5`, `I5` und `T5` den passenden Stein **aus** und **lege** damit die Summe $-1$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0114c)

@PentominoChart_(NZ0114c,`NZ0114c`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0114c,`NZ0114c`,`L5,I5,T5`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.dockCoversSum('NZ0114c', 'pentomino-dock-NZ0114c', -1) === true;
</script>
****************
Mit `L5` kannst du zum Beispiel die Zahlen $18$, $8$, $-2$, $-12$ und $-13$ bedecken.

$$
18 + 8 + (-2) + (-12) + (-13) = -1
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$d)\;\;$ **Wähle** aus `W5`, `T5` und `U5` den passenden Stein **aus** und **lege** damit die Summe $-43$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0114d)

@PentominoChart_(NZ0114d,`NZ0114d`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0114d,`NZ0114d`,`W5,T5,U5`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.dockCoversSum('NZ0114d', 'pentomino-dock-NZ0114d', -43) === true;
</script>
****************
Mit `U5` kannst du zum Beispiel die Zahlen $2$, $1$, $-9$, $-18$ und $-19$ bedecken.

$$
2 + 1 + (-9) + (-18) + (-19) = -43
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>
