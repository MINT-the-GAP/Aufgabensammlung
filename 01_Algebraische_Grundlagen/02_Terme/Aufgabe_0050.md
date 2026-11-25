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

comment: Stelle bei vier verschiedenen Positionen von x passende Summenterme auf.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Summenterme für zusammengesetzte Formen II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Die Zahl im markierten Feld ist $x$.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$a)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0050a;type=L5;numbers=[36,43,44,45=x,46];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 5x-11 ]].
@Algebrite.check(`5*x-11`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x-9 + (x-2) + (x-1) + x + (x+1) = 5x-11
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0050b;type=U5;numbers=[53,54,64=x,73,74];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 5x-2 ]].
@Algebrite.check(`5*x-2`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x-11 + (x-10) + x + (x+9) + (x+10) = 5x-2
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$c)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0050c;type=W5;numbers=[43=x,53,54,64,65];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 5x+64 ]].
@Algebrite.check(`5*x+64`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x + (x+10) + (x+11) + (x+21) + (x+22) = 5x+64
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0050d;type=X5;numbers=[35,44,45=x,46,55];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 5x ]].
@Algebrite.check(`5*x`)
[[?]] @Explain
****************
Die beiden horizontalen Abstände und die beiden vertikalen Abstände zu $x$ heben sich jeweils auf.

$$
x-10 + (x-1) + x + (x+1) + (x+10) = 5x
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>
