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

tags: Terme, leicht, sehr niedrig, Angeben

comment: Gib Feldterme für Schritte nach links, nach oben und für kombinierte Schritte an.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Terme für einzelne Felder

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Die Zahl im markierten Feld ist $x$.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$a)\;\;$ **Gib** einen Term für die Zahl links neben $x$ **an**.

@Pentomino(`name=TER0046a;type=I2;numbers=[66,67=x];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ x-1 ]].
@Algebrite.check(`x-1`)
[[?]] @Explain
****************
Nach links wird pro Feld $1$ subtrahiert.

$$
x - 1
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$b)\;\;$ **Gib** einen Term für die Zahl direkt über $x$ **an**.

@Pentomino(`name=TER0046b;type=I2;numbers=[54,64=x];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ x-10 ]].
@Algebrite.check(`x-10`)
[[?]] @Explain
****************
Nach oben wird pro Zeile $10$ subtrahiert.

$$
x - 10
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$c)\;\;$ **Gib** einen Term für die Zahl im oberen linken Feld **an**.

@Pentomino(`name=TER0046c;type=O4;numbers=[56,57,66,67=x];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ x-11 ]].
@Algebrite.check(`x-11`)
[[?]] @Explain
****************
Nach links wird pro Feld $1$ subtrahiert. Nach oben wird pro Zeile $10$ subtrahiert.

$$
x - 1 - 10 = x-11
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$d)\;\;$ **Gib** einen Term für die Zahl zwei Felder rechts und eine Zeile über $x$ **an**.

@Pentomino(`name=TER0046d;type=L5;numbers=[33,34,35,36,43=x];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ x-8 ]].
@Algebrite.check(`x-8`)
[[?]] @Explain
****************
Nach rechts wird pro Feld $1$ addiert. Nach oben wird pro Zeile $10$ subtrahiert.

$$
x + 2 - 10 = x-8
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>
