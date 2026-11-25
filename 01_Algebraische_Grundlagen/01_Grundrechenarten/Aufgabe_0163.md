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

comment: Mit Triominos, Tetrominos und Pentominos je zwei verschiedene Lagen zur selben Zielsumme finden.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Gleiche Summe auf dem Hunderterfeld I

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Ziehe zwei Steine derselben Form aus dem Inventar. Die Lagen dürfen sich überlappen.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** für `L3` zwei verschiedene Lagen mit der Summe $138$.

<div id="schullia-grundrechenarten-0163-a">

@PentominoDockAuswahl(`L3`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0163-a .lia-pentomino-dock');
const template = window.LiaPentomino;
const matching = dock && template ? template.getDockPieces(dock.dataset.boardId, dock.id)
  .filter(piece => template.coversSum(dock.dataset.boardId, piece.name, 138)) : [];
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
42 + 43 + 53 = 138
$$

In der zweiten Lage ist die Summe

$$
39 + 49 + 50 = 138
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** für `T4` zwei verschiedene Lagen mit der Summe $158$.

<div id="schullia-grundrechenarten-0163-b">

@PentominoDockAuswahl(`T4`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0163-b .lia-pentomino-dock');
const template = window.LiaPentomino;
const matching = dock && template ? template.getDockPieces(dock.dataset.boardId, dock.id)
  .filter(piece => template.coversSum(dock.dataset.boardId, piece.name, 158)) : [];
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
36 + 37 + 38 + 47 = 158
$$

In der zweiten Lage ist die Summe

$$
32 + 41 + 42 + 43 = 158
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** für `I5` zwei verschiedene Lagen mit der Summe $175$.

<div id="schullia-grundrechenarten-0163-c">

@PentominoDockAuswahl(`I5`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0163-c .lia-pentomino-dock');
const template = window.LiaPentomino;
const matching = dock && template ? template.getDockPieces(dock.dataset.boardId, dock.id)
  .filter(piece => template.coversSum(dock.dataset.boardId, piece.name, 175)) : [];
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
33 + 34 + 35 + 36 + 37 = 175
$$

In der zweiten Lage ist die Summe

$$
15 + 25 + 35 + 45 + 55 = 175
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** für `W5` zwei verschiedene Lagen mit der Summe $184$.

<div id="schullia-grundrechenarten-0163-d">

@PentominoDockAuswahl(`W5`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0163-d .lia-pentomino-dock');
const template = window.LiaPentomino;
const matching = dock && template ? template.getDockPieces(dock.dataset.boardId, dock.id)
  .filter(piece => template.coversSum(dock.dataset.boardId, piece.name, 184)) : [];
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
24 + 34 + 35 + 45 + 46 = 184
$$

In der zweiten Lage ist die Summe

$$
29 + 30 + 38 + 39 + 48 = 184
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>
