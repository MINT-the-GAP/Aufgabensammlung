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

tags: Terme, leicht, sehr niedrig, Auswählen

comment: Wähle zu jedem Stein den Summenterm aus, der zu den bedeckten Feldern passt.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Summenterme auf dem Hunderterfeld auswählen

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Die Zahl im markierten Feld ist $x$.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

$a)\;\;$ **Wähle** den Summenterm für die bedeckten Zahlen **aus**.

@Pentomino(`name=TER0053a;type=I2;numbers=[57=x,58];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
[( )] $2x+10$
[(X)] $2x+1$
[( )] $x+1$
[[?]] @Explain
****************
Der Summenterm ergibt sich aus den bedeckten Zahlen.

$$
x + (x+1) = 2x+1
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$b)\;\;$ **Wähle** den Summenterm für die bedeckten Zahlen **aus**.

@Pentomino(`name=TER0053b;type=L3;numbers=[46=x,47,56];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
[( )] $2x+11$
[( )] $3x+2$
[(X)] $3x+11$
[[?]] @Explain
****************
Der Summenterm ergibt sich aus den bedeckten Zahlen.

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

$c)\;\;$ **Wähle** den Summenterm für die bedeckten Zahlen **aus**.

@Pentomino(`name=TER0053c;type=O4;numbers=[32,33=x,42,43];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
[(X)] $4x+18$
[( )] $4x+22$
[( )] $4x+2$
[[?]] @Explain
****************
Der Summenterm ergibt sich aus den bedeckten Zahlen.

$$
x-1 + x + (x+9) + (x+10) = 4x+18
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

<div class="flex-child">

$d)\;\;$ **Wähle** den Summenterm für die bedeckten Zahlen **aus**.

@Pentomino(`name=TER0053d;type=T5;numbers=[34,35=x,36,45,55];rotatable=false;maskAnchor=piece`)

<!-- data-hint-button="1" data-solution-button="3" -->
[( )] $4x+30$
[( )] $5x+3$
[(X)] $5x+30$
[[?]] @Explain
****************
Der Summenterm ergibt sich aus den bedeckten Zahlen.

$$
x-1 + x + (x+1) + (x+10) + (x+20) = 5x+30
$$
****************

@resetter

@ADetails(1=BE;Terme)

</div>

</section>
