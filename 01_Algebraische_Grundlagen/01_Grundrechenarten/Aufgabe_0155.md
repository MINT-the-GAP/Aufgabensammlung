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

comment: Zielsummen mit quadratischen und T-förmigen Tetrominos abdecken.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Tetrominos auf dem Hunderterfeld I

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Drehe den Stein bei Bedarf.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** eine Lage für `O4` mit der Summe $90$.

@Pentomino(`name=Grundrechenarten-0155-a;type=O4;numbers=[1,2,11,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0155-a');
!!piece && template.coversSum(piece.boardId, piece.name, 90);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $17$, $18$, $27$ und $28$.

$$
17 + 18 + 27 + 28 = 90
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** eine Lage für `O4` mit der Summe $178$.

@Pentomino(`name=Grundrechenarten-0155-b;type=O4;numbers=[1,2,11,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0155-b');
!!piece && template.coversSum(piece.boardId, piece.name, 178);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $39$, $40$, $49$ und $50$.

$$
39 + 40 + 49 + 50 = 178
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** eine Lage für `T4` mit der Summe $133$.

@Pentomino(`name=Grundrechenarten-0155-c;type=T4;numbers=[1,2,3,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0155-c');
!!piece && template.coversSum(piece.boardId, piece.name, 133);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $23$, $33$, $34$ und $43$.

$$
23 + 33 + 34 + 43 = 133
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** eine Lage für `T4` mit der Summe $139$.

@Pentomino(`name=Grundrechenarten-0155-d;type=T4;numbers=[1,2,3,12]`)

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const piece = template?.getPieces().find(piece => piece.name === 'Grundrechenarten-0155-d');
!!piece && template.coversSum(piece.boardId, piece.name, 139);
</script>
****************
Eine mögliche Lage bedeckt die Zahlen $25$, $34$, $35$ und $45$.

$$
25 + 34 + 35 + 45 = 139
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>
