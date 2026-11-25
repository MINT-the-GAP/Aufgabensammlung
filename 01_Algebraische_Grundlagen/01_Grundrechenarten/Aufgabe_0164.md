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

comment: Für L3, T4, T5 und U5 je zwei verschiedene Lagen zur selben Zielsumme finden.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Gleiche Summe auf dem Hunderterfeld II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Ziehe zwei Steine derselben Form aus dem Inventar. Die Lagen dürfen sich überlappen.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** für `L3` zwei verschiedene Lagen mit der Summe $213$.

<div id="schullia-grundrechenarten-0164-a">

@PentominoDockAuswahl(`L3`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0164-a .lia-pentomino-dock');
const template = window.LiaPentomino;
const matching = dock && template ? template.getDockPieces(dock.dataset.boardId, dock.id)
  .filter(piece => template.coversSum(dock.dataset.boardId, piece.name, 213)) : [];
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
67 + 68 + 78 = 213
$$

In der zweiten Lage ist die Summe

$$
64 + 74 + 75 = 213
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** für `T4` zwei verschiedene Lagen mit der Summe $246$.

<div id="schullia-grundrechenarten-0164-b">

@PentominoDockAuswahl(`T4`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0164-b .lia-pentomino-dock');
const template = window.LiaPentomino;
const matching = dock && template ? template.getDockPieces(dock.dataset.boardId, dock.id)
  .filter(piece => template.coversSum(dock.dataset.boardId, piece.name, 246)) : [];
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
58 + 59 + 60 + 69 = 246
$$

In der zweiten Lage ist die Summe

$$
54 + 63 + 64 + 65 = 246
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** für `T5` zwei verschiedene Lagen mit der Summe $290$.

<div id="schullia-grundrechenarten-0164-c">

@PentominoDockAuswahl(`T5`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0164-c .lia-pentomino-dock');
const template = window.LiaPentomino;
const matching = dock && template ? template.getDockPieces(dock.dataset.boardId, dock.id)
  .filter(piece => template.coversSum(dock.dataset.boardId, piece.name, 290)) : [];
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
51 + 52 + 53 + 62 + 72 = 290
$$

In der zweiten Lage ist die Summe

$$
44 + 54 + 63 + 64 + 65 = 290
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** für `U5` zwei verschiedene Lagen mit der Summe $300$.

<div id="schullia-grundrechenarten-0164-d">

@PentominoDockAuswahl(`U5`)

</div>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const dock = document.querySelector('#schullia-grundrechenarten-0164-d .lia-pentomino-dock');
const template = window.LiaPentomino;
const matching = dock && template ? template.getDockPieces(dock.dataset.boardId, dock.id)
  .filter(piece => template.coversSum(dock.dataset.boardId, piece.name, 300)) : [];
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
55 + 56 + 57 + 65 + 67 = 300
$$

In der zweiten Lage ist die Summe

$$
53 + 55 + 63 + 64 + 65 = 300
$$
****************

@resetter

@ADetails(1=BE;Addition, Grundrechenarten)

</div>

</section>
