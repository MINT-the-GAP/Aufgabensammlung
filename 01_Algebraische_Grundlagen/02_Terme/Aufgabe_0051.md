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

comment: Stelle Summenterme aus den Feldabständen auf dem Hunderterfeld von 50 bis −49 auf.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Terme auf dem Hunderterfeld von 50 bis −49 I

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Die Zahl im markierten Feld ist $x$.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$a)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@PentominoBoard_(TER0051a)

@PentominoChart_(TER0051a,`TER0051a`,`negative`)

@PentominoConfig_(TER0051a,`TER0051a`,`name=TER0051a;type=I2;numbers=[47=x,48];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 2x-1 ]].
@Algebrite.check(`2*x-1`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x + (x-1) = 2x-1
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@PentominoBoard_(TER0051b)

@PentominoChart_(TER0051b,`TER0051b`,`negative`)

@PentominoConfig_(TER0051b,`TER0051b`,`name=TER0051b;type=L3;numbers=[45=x,46,55];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 3x-11 ]].
@Algebrite.check(`3*x-11`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x + (x-1) + (x-10) = 3x-11
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$c)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@PentominoBoard_(TER0051c)

@PentominoChart_(TER0051c,`TER0051c`,`negative`)

@PentominoConfig_(TER0051c,`TER0051c`,`name=TER0051c;type=O4;numbers=[53=x,54,63,64];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 4x-22 ]].
@Algebrite.check(`4*x-22`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x + (x-1) + (x-10) + (x-11) = 4x-22
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@PentominoBoard_(TER0051d)

@PentominoChart_(TER0051d,`TER0051d`,`negative`)

@PentominoConfig_(TER0051d,`TER0051d`,`name=TER0051d;type=I5;numbers=[28=x,38,48,58,68];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 5x-100 ]].
@Algebrite.check(`5*x-100`)
[[?]] @Explain
****************
Addiere die Terme der bedeckten Felder und fasse gleichartige Summanden zusammen.

$$
x + (x-10) + (x-20) + (x-30) + (x-40) = 5x-100
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>
