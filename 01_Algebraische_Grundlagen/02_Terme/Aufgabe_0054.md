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

comment: Bestimme die Summenterme für vier Steine auf dem Hunderterfeld.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Summenterme auf dem Hunderterfeld bestimmen

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Die Zahl im markierten Feld ist $x$.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$a)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0054a;type=I3;numbers=[56=x,57,58];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 3x+3 ]].
@Algebrite.check(`3*x+3`)
[[?]] @Explain
****************
Drei Felder liefern drei Summanden mit $x$.

$$
x + (x+1) + (x+2) = 3x+3
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$b)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0054b;type=L3;numbers=[44=x,45,54];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 3x+11 ]].
@Algebrite.check(`3*x+11`)
[[?]] @Explain
****************
Das Feld unter $x$ liefert $x+10$. Das Feld rechts liefert $x+1$.

$$
x + (x+1) + (x+10) = 3x+11
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$c)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0054c;type=X5;numbers=[35,44,45,46=x,55];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 5x-5 ]].
@Algebrite.check(`5*x-5`)
[[?]] @Explain
****************
Die Mitte liegt links von $x$ und zeigt $x-1$. Die gegenüberliegenden Abstände zur Mitte heben sich auf.

$$
5(x-1) = 5x-5
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$d)\;\;$ **Bestimme** die Summe der bedeckten Zahlen als Term mit $x$.

@Pentomino(`name=TER0054d;type=O4;numbers=[54=x,55,64,65];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 4x+22 ]].
@Algebrite.check(`4*x+22`)
[[?]] @Explain
****************
Die konstanten Anteile ergeben $1+10+11=22$.

$$
x + (x+1) + (x+10) + (x+11) = 4x+22
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>
