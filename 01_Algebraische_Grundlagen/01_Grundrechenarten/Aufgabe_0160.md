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

tags: Addition, Grundrechenarten, schwer, sehr niedrig, Auswählen

comment: Jeweils einen von drei Polyomino-Steinen auswählen und die Zielsumme abdecken.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Passende Steine auf dem Hunderterfeld II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 4" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">

Die Steine findest du im Inventar.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Wähle** aus `W5`, `I5` und `L5` den passenden Stein **aus** und **lege** damit die Summe $235$.

<div id="schullia-grundrechenarten-0160-a">

@PentominoDockAuswahl(`W5,I5,L5`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0160-a .lia-pentomino-dock');
const template = window.LiaPentomino;
!!dock && template?.dockCoversSum(dock.dataset.boardId, dock.id, 235) === true;
</script>
****************
Mit `I5` kannst du zum Beispiel die Zahlen $45$, $46$, $47$, $48$ und $49$ bedecken.

$$
45 + 46 + 47 + 48 + 49 = 235
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$b)\;\;$ **Wähle** aus `I5`, `U5` und `W5` den passenden Stein **aus** und **lege** damit die Summe $224$.

<div id="schullia-grundrechenarten-0160-b">

@PentominoDockAuswahl(`I5,U5,W5`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0160-b .lia-pentomino-dock');
const template = window.LiaPentomino;
!!dock && template?.dockCoversSum(dock.dataset.boardId, dock.id, 224) === true;
</script>
****************
Mit `W5` kannst du zum Beispiel die Zahlen $32$, $42$, $43$, $53$ und $54$ bedecken.

$$
32 + 42 + 43 + 53 + 54 = 224
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Wähle** aus `L5`, `I5` und `T5` den passenden Stein **aus** und **lege** damit die Summe $226$.

<div id="schullia-grundrechenarten-0160-c">

@PentominoDockAuswahl(`L5,I5,T5`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0160-c .lia-pentomino-dock');
const template = window.LiaPentomino;
!!dock && template?.dockCoversSum(dock.dataset.boardId, dock.id, 226) === true;
</script>
****************
Mit `L5` kannst du zum Beispiel die Zahlen $27$, $37$, $47$, $57$ und $58$ bedecken.

$$
27 + 37 + 47 + 57 + 58 = 226
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$d)\;\;$ **Wähle** aus `W5`, `T5` und `U5` den passenden Stein **aus** und **lege** damit die Summe $248$.

<div id="schullia-grundrechenarten-0160-d">

@PentominoDockAuswahl(`W5,T5,U5`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0160-d .lia-pentomino-dock');
const template = window.LiaPentomino;
!!dock && template?.dockCoversSum(dock.dataset.boardId, dock.id, 248) === true;
</script>
****************
Mit `U5` kannst du zum Beispiel die Zahlen $39$, $40$, $50$, $59$ und $60$ bedecken.

$$
39 + 40 + 50 + 59 + 60 = 248
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>
