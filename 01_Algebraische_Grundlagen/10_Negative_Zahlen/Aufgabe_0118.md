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

tags: Negative Zahlen, Addition, mittel, sehr niedrig, Bestimmen

comment: Finde bei verschiedenen Steinen je zwei Lagen zu einer Summe aus positiven und negativen Zahlen.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Gleiche Summe auf dem Hunderterfeld mit negativen Zahlen II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Ziehe zwei Steine derselben Form aus dem Inventar. Die Lagen dürfen sich überlappen.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** für `L3` zwei verschiedene Lagen mit der Summe $0$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0118a)

@PentominoChart_(NZ0118a,`NZ0118a`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0118a,`NZ0118a`,`L3`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const matching = (template?.getDockPieces('NZ0118a', 'pentomino-dock-NZ0118a') ?? [])
  .filter(piece => template.coversSum('NZ0118a', piece.name, 0));
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
4 + 3 + (-7) = 0
$$

In der zweiten Lage ist die Summe

$$
7 + (-3) + (-4) = 0
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** für `T4` zwei verschiedene Lagen mit der Summe $6$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0118b)

@PentominoChart_(NZ0118b,`NZ0118b`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0118b,`NZ0118b`,`T4`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const matching = (template?.getDockPieces('NZ0118b', 'pentomino-dock-NZ0118b') ?? [])
  .filter(piece => template.coversSum('NZ0118b', piece.name, 6));
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
5 + 4 + 3 + (-6) = 6
$$

In der zweiten Lage ist die Summe

$$
9 + 0 + (-1) + (-2) = 6
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** für `T5` zwei verschiedene Lagen mit der Summe $-5$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0118c)

@PentominoChart_(NZ0118c,`NZ0118c`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0118c,`NZ0118c`,`T5`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const matching = (template?.getDockPieces('NZ0118c', 'pentomino-dock-NZ0118c') ?? [])
  .filter(piece => template.coversSum('NZ0118c', piece.name, -5));
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
6 + 5 + 4 + (-5) + (-15) = -5
$$

In der zweiten Lage ist die Summe

$$
13 + 3 + (-6) + (-7) + (-8) = -5
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** für `U5` zwei verschiedene Lagen mit der Summe $10$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0118d)

@PentominoChart_(NZ0118d,`NZ0118d`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0118d,`NZ0118d`,`U5`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const matching = (template?.getDockPieces('NZ0118d', 'pentomino-dock-NZ0118d') ?? [])
  .filter(piece => template.coversSum('NZ0118d', piece.name, 10));
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
7 + 6 + 5 + (-3) + (-5) = 10
$$

In der zweiten Lage ist die Summe

$$
9 + 7 + (-1) + (-2) + (-3) = 10
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>
