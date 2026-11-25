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

comment: Finde je zwei verschiedene Lagen zu derselben negativen Summe.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Gleiche Summe auf dem Hunderterfeld mit negativen Zahlen I

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Ziehe zwei Steine derselben Form aus dem Inventar. Die Lagen dürfen sich überlappen.

<section class="dynFlex">

<div class="flex-child">

$a)\;\;$ **Bestimme** für `L3` zwei verschiedene Lagen mit der Summe $-24$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0117a)

@PentominoChart_(NZ0117a,`NZ0117a`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0117a,`NZ0117a`,`L3`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const matching = (template?.getDockPieces('NZ0117a', 'pentomino-dock-NZ0117a') ?? [])
  .filter(piece => template.coversSum('NZ0117a', piece.name, -24));
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
-4 + (-5) + (-15) = -24
$$

In der zweiten Lage ist die Summe

$$
-1 + (-11) + (-12) = -24
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** für `T4` zwei verschiedene Lagen mit der Summe $-18$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0117b)

@PentominoChart_(NZ0117b,`NZ0117b`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0117b,`NZ0117b`,`T4`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const matching = (template?.getDockPieces('NZ0117b', 'pentomino-dock-NZ0117b') ?? [])
  .filter(piece => template.coversSum('NZ0117b', piece.name, -18));
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
-1 + (-2) + (-3) + (-12) = -18
$$

In der zweiten Lage ist die Summe

$$
3 + (-6) + (-7) + (-8) = -18
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>

<section class="dynFlex">

<div class="flex-child">

$c)\;\;$ **Bestimme** für `I5` zwei verschiedene Lagen mit der Summe $-20$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0117c)

@PentominoChart_(NZ0117c,`NZ0117c`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0117c,`NZ0117c`,`I5`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const matching = (template?.getDockPieces('NZ0117c', 'pentomino-dock-NZ0117c') ?? [])
  .filter(piece => template.coversSum('NZ0117c', piece.name, -20));
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
-2 + (-3) + (-4) + (-5) + (-6) = -20
$$

In der zweiten Lage ist die Summe

$$
16 + 6 + (-4) + (-14) + (-24) = -20
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** für `W5` zwei verschiedene Lagen mit der Summe $-16$.

<section class="lia-pentomino-workspace">

<div class="lia-pentomino-workspace-board">

@PentominoBoard_(NZ0117d)

@PentominoChart_(NZ0117d,`NZ0117d`,`negative`)

</div>

<div class="lia-pentomino-workspace-sidebar">

@PentominoDockMarker_(NZ0117d,`NZ0117d`,`W5`)

</div>

</section>

<!-- data-hint-button="2" data-solution-button="off" -->
[[!]]
[[?]] @Explain
<script modify="false">
const template = window.LiaPentomino;
const matching = (template?.getDockPieces('NZ0117d', 'pentomino-dock-NZ0117d') ?? [])
  .filter(piece => template.coversSum('NZ0117d', piece.name, -16));
new Set(matching.map(piece => piece.coveredNumbers.slice().sort((a, b) => a - b).join(','))).size >= 2;
</script>
****************
In der ersten Lage ist die Summe

$$
6 + 5 + (-5) + (-6) + (-16) = -16
$$

In der zweiten Lage ist die Summe

$$
8 + (-1) + (-2) + (-10) + (-11) = -16
$$
****************

@resetter

@ADetails(1=BE;Negative Zahlen, Addition)

</div>

</section>
