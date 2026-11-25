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

tags: Terme, leicht, sehr niedrig, Bestimmen

comment: Stelle Summenterme für horizontale Steine mit zwei bis fünf Feldern auf.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Summenterme für gerade Steine I

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Die Zahl im markierten Feld ist $x$.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$a)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0047a;type=I2;numbers=[35=x,36];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 2x+1 ]].
@Algebrite.check(`2*x+1`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x + (x+1) = 2x+1
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0047b;type=I3;numbers=[44=x,45,46];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 3x+3 ]].
@Algebrite.check(`3*x+3`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x + (x+1) + (x+2) = 3x+3
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$c)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0047c;type=I4;numbers=[33=x,34,35,36];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 4x+6 ]].
@Algebrite.check(`4*x+6`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x + (x+1) + (x+2) + (x+3) = 4x+6
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0047d;type=I5;numbers=[52=x,53,54,55,56];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 5x+10 ]].
@Algebrite.check(`5*x+10`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x + (x+1) + (x+2) + (x+3) + (x+4) = 5x+10
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>
