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

tags: Terme, mittel, sehr niedrig, Bestimmen

comment: Stelle aus horizontalen und vertikalen Feldabständen Summenterme auf.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Summenterme für zusammengesetzte Formen I

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Die Zahl im markierten Feld ist $x$.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$a)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0049a;type=L3;numbers=[34=x,35,44];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 3x+11 ]].
@Algebrite.check(`3*x+11`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x + (x+1) + (x+10) = 3x+11
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0049b;type=O4;numbers=[55=x,56,65,66];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 4x+22 ]].
@Algebrite.check(`4*x+22`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x + (x+1) + (x+10) + (x+11) = 4x+22
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$c)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0049c;type=T4;numbers=[42=x,43,44,53];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 4x+14 ]].
@Algebrite.check(`4*x+14`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x + (x+1) + (x+2) + (x+11) = 4x+14
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0049d;type=T5;numbers=[34=x,35,36,45,55];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 5x+35 ]].
@Algebrite.check(`5*x+35`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x + (x+1) + (x+2) + (x+11) + (x+21) = 5x+35
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>
