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

comment: Vier passende Lagen eines L-förmigen Triominos für Zielsummen über 150 finden.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Triominos auf dem Hunderterfeld II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Drehe den Stein bei Bedarf.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** eine Lage des Triominos mit der Summe $167$.

@Pentomino(`name=Grundrechenarten-0154-a;type=L3;numbers=[1,2,11]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0154-a');
!!piece && template.coversSum(piece.boardId, piece.name, 167);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $52$, $53$ und $62$.

$$
52 + 53 + 62 = 167
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** eine Lage des Triominos mit der Summe $201$.

@Pentomino(`name=Grundrechenarten-0154-b;type=L3;numbers=[1,2,11]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0154-b');
!!piece && template.coversSum(piece.boardId, piece.name, 201);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $63$, $64$ und $74$.

$$
63 + 64 + 74 = 201
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** eine Lage des Triominos mit der Summe $222$.

@Pentomino(`name=Grundrechenarten-0154-c;type=L3;numbers=[1,2,11]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0154-c');
!!piece && template.coversSum(piece.boardId, piece.name, 222);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $67$, $77$ und $78$.

$$
67 + 77 + 78 = 222
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** eine Lage des Triominos mit der Summe $253$.

@Pentomino(`name=Grundrechenarten-0154-d;type=L3;numbers=[1,2,11]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0154-d');
!!piece && template.coversSum(piece.boardId, piece.name, 253);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $78$, $87$ und $88$.

$$
78 + 87 + 88 = 253
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>
