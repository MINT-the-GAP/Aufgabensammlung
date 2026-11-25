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

tags: Negative Zahlen, Addition, mittel, sehr niedrig, Auswählen

comment: Wähle jeweils einen von zwei Steinen aus und lege die vorgegebene Summe.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Passende Steine auf dem Hunderterfeld mit negativen Zahlen I

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Die Steine findest du im Inventar.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Wähle** aus `O4` und `T4` den passenden Stein **aus** und **lege** damit die Summe $-11$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0113a)

@PentominoChart_(NZ0113a,`NZ0113a`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0113a,`NZ0113a`,`O4,T4`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.dockCoversSum('NZ0113a', 'pentomino-dock-NZ0113a', -11) === true;
</script>
****************
Mit `T4` kannst du zum Beispiel die Zahlen $7$, $-2$, $-3$ und $-13$ bedecken.

$$
7 + (-2) + (-3) + (-13) = -11
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$b)\;\;$ **Wähle** aus `I5` und `W5` den passenden Stein **aus** und **lege** damit die Summe $0$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0113b)

@PentominoChart_(NZ0113b,`NZ0113b`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0113b,`NZ0113b`,`I5,W5`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.dockCoversSum('NZ0113b', 'pentomino-dock-NZ0113b', 0) === true;
</script>
****************
Mit `I5` kannst du zum Beispiel die Zahlen $20$, $10$, $0$, $-10$ und $-20$ bedecken.

$$
20 + 10 + 0 + (-10) + (-20) = 0
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Wähle** aus `U5` und `T5` den passenden Stein **aus** und **lege** damit die Summe $-2$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0113c)

@PentominoChart_(NZ0113c,`NZ0113c`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0113c,`NZ0113c`,`U5,T5`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.dockCoversSum('NZ0113c', 'pentomino-dock-NZ0113c', -2) === true;
</script>
****************
Mit `U5` kannst du zum Beispiel die Zahlen $10$, $9$, $0$, $-10$ und $-11$ bedecken.

$$
10 + 9 + 0 + (-10) + (-11) = -2
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$d)\;\;$ **Wähle** aus `T5` und `L5` den passenden Stein **aus** und **lege** damit die Summe $14$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0113d)

@PentominoChart_(NZ0113d,`NZ0113d`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0113d,`NZ0113d`,`T5,L5`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
window.LiaPentomino?.dockCoversSum('NZ0113d', 'pentomino-dock-NZ0113d', 14) === true;
</script>
****************
Mit `L5` kannst du zum Beispiel die Zahlen $6$, $5$, $4$, $3$ und $-4$ bedecken.

$$
6 + 5 + 4 + 3 + (-4) = 14
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>
