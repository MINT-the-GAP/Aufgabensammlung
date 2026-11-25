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

comment: Ausrichtung und Lage eines Duominos aus der Zielsumme bestimmen.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Duominos auf dem Hunderterfeld II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Drehe den Stein bei Bedarf.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** eine Lage des Duominos mit der Summe $57$.

@Pentomino(`name=Grundrechenarten-0152-a;type=I2;numbers=[1,2]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0152-a');
!!piece && template.coversSum(piece.boardId, piece.name, 57);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $28$ und $29$.

$$
28 + 29 = 57
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** eine Lage des Duominos mit der Summe $147$.

@Pentomino(`name=Grundrechenarten-0152-b;type=I2;numbers=[1,2]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0152-b');
!!piece && template.coversSum(piece.boardId, piece.name, 147);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $73$ und $74$.

$$
73 + 74 = 147
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** eine Lage des Duominos mit der Summe $104$.

@Pentomino(`name=Grundrechenarten-0152-c;type=I2;numbers=[1,2]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0152-c');
!!piece && template.coversSum(piece.boardId, piece.name, 104);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $47$ und $57$.

$$
47 + 57 = 104
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** eine Lage des Duominos mit der Summe $172$.

@Pentomino(`name=Grundrechenarten-0152-d;type=I2;numbers=[1,2]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0152-d');
!!piece && template.coversSum(piece.boardId, piece.name, 172);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $81$ und $91$.

$$
81 + 91 = 172
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>
