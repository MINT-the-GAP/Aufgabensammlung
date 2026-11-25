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

tags: Addition, Grundrechenarten, mittel, sehr niedrig, Auswählen

comment: Jeweils einen von zwei Polyomino-Steinen auswählen und die Zielsumme abdecken.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Passende Steine auf dem Hunderterfeld I

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Die Steine findest du im Inventar.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Wähle** aus `O4` und `T4` den passenden Stein **aus** und **lege** damit die Summe $137$.

<div id="schullia-grundrechenarten-0159-a">

@PentominoDockAuswahl(`O4,T4`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0159-a .lia-pentomino-dock');
const template = window.LiaPentomino;
!!dock && template?.dockCoversSum(dock.dataset.boardId, dock.id, 137) === true;
</script>
****************
Mit `T4` kannst du zum Beispiel die Zahlen $24$, $34$, $35$ und $44$ bedecken.

$$
24 + 34 + 35 + 44 = 137
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$b)\;\;$ **Wähle** aus `I5` und `W5` den passenden Stein **aus** und **lege** damit die Summe $150$.

<div id="schullia-grundrechenarten-0159-b">

@PentominoDockAuswahl(`I5,W5`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0159-b .lia-pentomino-dock');
const template = window.LiaPentomino;
!!dock && template?.dockCoversSum(dock.dataset.boardId, dock.id, 150) === true;
</script>
****************
Mit `I5` kannst du zum Beispiel die Zahlen $10$, $20$, $30$, $40$ und $50$ bedecken.

$$
10 + 20 + 30 + 40 + 50 = 150
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Wähle** aus `U5` und `T5` den passenden Stein **aus** und **lege** damit die Summe $157$.

<div id="schullia-grundrechenarten-0159-c">

@PentominoDockAuswahl(`U5,T5`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0159-c .lia-pentomino-dock');
const template = window.LiaPentomino;
!!dock && template?.dockCoversSum(dock.dataset.boardId, dock.id, 157) === true;
</script>
****************
Mit `U5` kannst du zum Beispiel die Zahlen $21$, $22$, $31$, $41$ und $42$ bedecken.

$$
21 + 22 + 31 + 41 + 42 = 157
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$d)\;\;$ **Wähle** aus `T5` und `L5` den passenden Stein **aus** und **lege** damit die Summe $141$.

<div id="schullia-grundrechenarten-0159-d">

@PentominoDockAuswahl(`T5,L5`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0159-d .lia-pentomino-dock');
const template = window.LiaPentomino;
!!dock && template?.dockCoversSum(dock.dataset.boardId, dock.id, 141) === true;
</script>
****************
Mit `L5` kannst du zum Beispiel die Zahlen $25$, $26$, $27$, $28$ und $35$ bedecken.

$$
25 + 26 + 27 + 28 + 35 = 141
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>
