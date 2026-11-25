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

tags: Addition, Grundrechenarten, mittel, sehr niedrig, Bestimmen

comment: Die Pentominos I5, T5, W5 und U5 passend zu vorgegebenen Summen platzieren.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Pentominos auf dem Hunderterfeld II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Drehe den Stein bei Bedarf.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** eine Lage für `I5` mit der Summe $350$.

@Pentomino(`name=Grundrechenarten-0158-a;type=I5;numbers=[1,2,3,4,5]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0158-a');
!!piece && template.coversSum(piece.boardId, piece.name, 350);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $50$, $60$, $70$, $80$ und $90$.

$$
50 + 60 + 70 + 80 + 90 = 350
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** eine Lage für `T5` mit der Summe $378$.

@Pentomino(`name=Grundrechenarten-0158-b;type=T5;numbers=[6,7,8,17,27]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0158-b');
!!piece && template.coversSum(piece.boardId, piece.name, 378);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $65$, $75$, $76$, $77$ und $85$.

$$
65 + 75 + 76 + 77 + 85 = 378
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** eine Lage für `W5` mit der Summe $339$.

@Pentomino(`name=Grundrechenarten-0158-c;type=W5;numbers=[1,2,12,13,23]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0158-c');
!!piece && template.coversSum(piece.boardId, piece.name, 339);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $55$, $65$, $66$, $76$ und $77$.

$$
55 + 65 + 66 + 76 + 77 = 339
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** eine Lage für `U5` mit der Summe $407$.

@Pentomino(`name=Grundrechenarten-0158-d;type=U5;numbers=[1,2,3,11,13]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0158-d');
!!piece && template.coversSum(piece.boardId, piece.name, 407);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $71$, $72$, $81$, $91$ und $92$.

$$
71 + 72 + 81 + 91 + 92 = 407
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>
