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

comment: Gib einen Term für die Summe der Zahlen unter einem verschiebbaren Stein an.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Vom Feld zum Summenterm

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Die Zahl im markierten Feld ist $x$.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$a)\;\;$ **Gib** die Summe der bedeckten Zahlen als Term mit $x$ **an**.

@Pentomino(`name=TER0045a;type=I2;numbers=[44=x,45];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 2x+1 ]].
@Algebrite.check(`2*x+1`)
[[?]] @Explain
****************
Rechts von $x$ steht $x+1$.

$$
x + (x+1) = 2x+1
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$b)\;\;$ **Gib** die Summe der bedeckten Zahlen als Term mit $x$ **an**.

@Pentomino(`name=TER0045b;type=I2;numbers=[35=x,45];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 2x+10 ]].
@Algebrite.check(`2*x+10`)
[[?]] @Explain
****************
Unter $x$ steht $x+10$.

$$
x + (x+10) = 2x+10
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$c)\;\;$ **Gib** die Summe der bedeckten Zahlen als Term mit $x$ **an**.

@Pentomino(`name=TER0045c;type=O4;numbers=[36=x,37,46,47];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 4x+22 ]].
@Algebrite.check(`4*x+22`)
[[?]] @Explain
****************
Rechts von $x$ steht $x+1$. In der unteren Reihe stehen $x+10$ und $x+11$.

$$
x + (x+1) + (x+10) + (x+11) = 4x+22
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$d)\;\;$ **Gib** die Summe der bedeckten Zahlen als Term mit $x$ **an**.

@Pentomino(`name=TER0045d;type=I3;numbers=[23=x,33,43];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
Der Term lautet [[ 3x+30 ]].
@Algebrite.check(`3*x+30`)
[[?]] @Explain
****************
Die beiden Felder darunter zeigen $x+10$ und $x+20$.

$$
x + (x+10) + (x+20) = 3x+30
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>
