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

comment: Stelle Summenterme auf, wenn das x rechts oder weiter unten im Stein steht.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Terme auf dem Hunderterfeld von 50 bis −49 II

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Die Zahl im markierten Feld ist $x$.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$a)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@PentominoBoard_(TER0052a)

@PentominoChart_(TER0052a,`TER0052a`,`negative`)

@PentominoConfig_(TER0052a,`TER0052a`,`name=TER0052a;type=I3;numbers=[54,55,56=x];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 3x+3 ]].
@Algebrite.check(`3*x+3`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x+2 + (x+1) + x = 3x+3
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@PentominoBoard_(TER0052b)

@PentominoChart_(TER0052b,`TER0052b`,`negative`)

@PentominoConfig_(TER0052b,`TER0052b`,`name=TER0052b;type=T4;numbers=[44,45,46,55=x];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 4x+30 ]].
@Algebrite.check(`4*x+30`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x+11 + (x+10) + (x+9) + x = 4x+30
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$c)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@PentominoBoard_(TER0052c)

@PentominoChart_(TER0052c,`TER0052c`,`negative`)

@PentominoConfig_(TER0052c,`TER0052c`,`name=TER0052c;type=L5;numbers=[33,43,53,63,64=x];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 5x+64 ]].
@Algebrite.check(`5*x+64`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x+31 + (x+21) + (x+11) + (x+1) + x = 5x+64
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@PentominoBoard_(TER0052d)

@PentominoChart_(TER0052d,`TER0052d`,`negative`)

@PentominoConfig_(TER0052d,`TER0052d`,`name=TER0052d;type=W5;numbers=[34,35,45,46=x,56];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 5x+14 ]].
@Algebrite.check(`5*x+14`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x+12 + (x+11) + (x+1) + x + (x-10) = 5x+14
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>
