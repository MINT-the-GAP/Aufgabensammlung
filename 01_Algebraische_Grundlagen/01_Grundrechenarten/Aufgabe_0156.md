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

tags: Addition, Grundrechenarten, leicht, sehr niedrig, Bestimmen

comment: Zielsummen über 200 mit quadratischen und T-förmigen Tetrominos abdecken.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Tetrominos auf dem Hunderterfeld II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Drehe den Stein bei Bedarf.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** eine Lage für `O4` mit der Summe $254$.

@Pentomino(`name=Grundrechenarten-0156-a;type=O4;numbers=[1,2,11,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0156-a');
!!piece && template.coversSum(piece.boardId, piece.name, 254);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $58$, $59$, $68$ und $69$.

$$
58 + 59 + 68 + 69 = 254
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** eine Lage für `O4` mit der Summe $346$.

@Pentomino(`name=Grundrechenarten-0156-b;type=O4;numbers=[1,2,11,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0156-b');
!!piece && template.coversSum(piece.boardId, piece.name, 346);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $81$, $82$, $91$ und $92$.

$$
81 + 82 + 91 + 92 = 346
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** eine Lage für `T4` mit der Summe $225$.

@Pentomino(`name=Grundrechenarten-0156-c;type=T4;numbers=[1,2,3,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0156-c');
!!piece && template.coversSum(piece.boardId, piece.name, 225);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $46$, $56$, $57$ und $66$.

$$
46 + 56 + 57 + 66 = 225
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** eine Lage für `T4` mit der Summe $286$.

@Pentomino(`name=Grundrechenarten-0156-d;type=T4;numbers=[1,2,3,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0156-d');
!!piece && template.coversSum(piece.boardId, piece.name, 286);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $68$, $69$, $70$ und $79$.

$$
68 + 69 + 70 + 79 = 286
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>
